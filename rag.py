import os
from flask import (
    Blueprint,
    current_app,
    request,
    jsonify,
    redirect,
    send_from_directory,
)
from werkzeug.utils import secure_filename

# import pandas as pd
from langchain_core.prompts import PromptTemplate
from langchain_community.document_loaders import PyPDFLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_community.vectorstores import Chroma
from langchain.chains import RetrievalQA
from langchain_google_genai import GoogleGenerativeAIEmbeddings, ChatGoogleGenerativeAI
from dotenv import load_dotenv
load_dotenv()

rag = Blueprint("rag", __name__)

vector_index = None
context = None
model = ChatGoogleGenerativeAI(
    model="gemini-pro",
    google_api_key=os.getenv('GOOGLE_API_KEY'),
    temperature=0.2,
    convert_system_message_to_human=True,
)


def process_pdf(file_path):
    global vector_index, context

    pdf_loader = PyPDFLoader(file_path)
    pages = pdf_loader.load_and_split()
    print(len(pages))
    # print(pages[0].page_content)
    text_splitter = RecursiveCharacterTextSplitter(chunk_size=10000, chunk_overlap=1000)
    context = "\n\n".join(str(p.page_content) for p in pages)
    texts = text_splitter.split_text(context)

    embeddings = GoogleGenerativeAIEmbeddings(
        model="models/embedding-001", google_api_key=os.getenv("GOOGLE_API_KEY")
    )

    vector_index = Chroma.from_texts(texts, embeddings).as_retriever(
        search_kwargs={"k": 6}
    )

    return vector_index, context
    # question = "What is the objective?"
    # result = qa_chain({"query": question})
    # return result["result"]


@rag.route("/upload", methods=["POST"])
def upload_file():
    if "file" not in request.files:
        return redirect(request.url)
    file = request.files["file"]
    if file.filename == "":
        return redirect(request.url)
    if file:
        file_name = secure_filename(file.filename)
        file_path = os.path.join(current_app.config["UPLOAD_FOLDER"], file_name)
        file.save(file_path)
        print(file_path)
        file_path_url = f"./uploads/{file_name}"
        process_pdf(file_path_url)
        # os.remove(file_path)  # Optionally remove the file after processing
        return jsonify({"filePath": secure_filename(file.filename)})
    return redirect(request.url)


@rag.route("/uploads/<filename>")
def uploaded_file(filename):
    return send_from_directory(current_app.config["UPLOAD_FOLDER"], filename)


@rag.route("/ask", methods=["POST"])
def ask():
    global vector_index, context, model
    if not vector_index:
        print("none")
    data = request.get_json()
    question = data.get("question", "")

    template = """Use the following pieces of context to answer the question but if i ask something else related to this then also answer that. Always be kind after responding.
    {context}
    Question: {question}
    Helpful Answer:"""

    QA_CHAIN_PROMPT = PromptTemplate.from_template(template)
    qa_chain = RetrievalQA.from_chain_type(
        model,
        retriever=vector_index,
        return_source_documents=True,
        chain_type_kwargs={"prompt": QA_CHAIN_PROMPT},
    )
    if not question:
        return jsonify({"response": "No question provided."}), 400

    if not qa_chain:
        return jsonify({"response": "No PDF file uploaded."}), 400

    result = qa_chain({"query": question})
    return result["result"]
