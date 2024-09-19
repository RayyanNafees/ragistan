from flask import Flask, render_template
from rag import rag
import os
from flask_cors import CORS
from dotenv import load_dotenv
import warnings

load_dotenv()
warnings.filterwarnings("ignore")




app = Flask(__name__,
            template_folder='client/dist',
            static_folder='client/dist/assets',
            static_url_path='/assets')

CORS(app)

app.config["UPLOAD_FOLDER"] = "uploads"

app.register_blueprint(rag, url_prefix='/api')


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/<path:path>')
def assets(path):
    return app.send_static_file(f'client/dist/{path}')

if __name__ == "__main__":
    os.makedirs(app.config.get('UPLOAD_FOLDER','uploads'), exist_ok=True)
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=False)