import{l as m,_ as ne,b as j,E as le}from"./index-8lmgk8la.js";var B=/[\s\n\\/='"\0<>]/,z=/^(xlink|xmlns|xml)([A-Z])/,ce=/^accessK|^auto[A-Z]|^cell|^ch|^col|cont|cross|dateT|encT|form[A-Z]|frame|hrefL|inputM|maxL|minL|noV|playsI|popoverT|readO|rowS|src[A-Z]|tabI|useM|item[A-Z]/,se=/^ac|^ali|arabic|basel|cap|clipPath$|clipRule$|color|dominant|enable|fill|flood|font|glyph[^R]|horiz|image|letter|lighting|marker[^WUH]|overline|panose|pointe|paint|rendering|shape|stop|strikethrough|stroke|text[^L]|transform|underline|unicode|units|^v[^i]|^w|^xH/,ue=new Set(["draggable","spellcheck"]),fe=/["&<]/;function H(e){if(e.length===0||fe.test(e)===!1)return e;for(var r=0,t=0,n="",o="";t<e.length;t++){switch(e.charCodeAt(t)){case 34:o="&quot;";break;case 38:o="&amp;";break;case 60:o="&lt;";break;default:continue}t!==r&&(n+=e.slice(r,t)),n+=o,r=t+1}return t!==r&&(n+=e.slice(r,t)),n}var $={},pe=new Set(["animation-iteration-count","border-image-outset","border-image-slice","border-image-width","box-flex","box-flex-group","box-ordinal-group","column-count","fill-opacity","flex","flex-grow","flex-negative","flex-order","flex-positive","flex-shrink","flood-opacity","font-weight","grid-column","grid-row","line-clamp","line-height","opacity","order","orphans","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-miterlimit","stroke-opacity","stroke-width","tab-size","widows","z-index","zoom"]),he=/[A-Z]/g;function de(e){var r="";for(var t in e){var n=e[t];if(n!=null&&n!==""){var o=t[0]=="-"?t:$[t]||($[t]=t.replace(he,"-$&").toLowerCase()),a=";";typeof n!="number"||o.startsWith("--")||pe.has(o)||(a="px;"),r=r+o+":"+n+a}}return r||void 0}function Y(){this.__d=!0}function _e(e,r){return{__v:e,context:r,props:e.props,setState:Y,forceUpdate:Y,__d:!0,__h:new Array(0)}}function y(e,r,t){if(!e.s){if(t instanceof Q){if(!t.s)return void(t.o=y.bind(null,e,r));1&r&&(r=t.s),t=t.v}if(t&&t.then)return void t.then(y.bind(null,e,r),y.bind(null,e,2));e.s=r,e.v=t;const n=e.o;n&&n(e)}}var Q=function(){function e(){}return e.prototype.then=function(r,t){var n=new e,o=this.s;if(o){var a=1&o?r:t;if(a){try{y(n,1,a(this.v))}catch(c){y(n,2,c)}return n}return this}return this.o=function(c){try{var s=c.v;1&c.s?y(n,1,r?r(s):s):t?y(n,1,t(s)):y(n,2,s)}catch(f){y(n,2,f)}},n},e}();function I(e){return e instanceof Q&&1&e.s}function ve(e,r,t){for(var n;;){var o=e();if(I(o)&&(o=o.v),!o)return a;if(o.then){n=0;break}var a=t();if(a&&a.then){if(!I(a)){n=1;break}a=a.s}var c}var s=new Q,f=y.bind(null,s,2);return(n===0?o.then(g):n===1?a.then(p):c.then(b)).then(void 0,f),s;function p(L){a=L;do{if(!(o=e())||I(o)&&!o.v)return void y(s,1,a);if(o.then)return void o.then(g).then(void 0,f);I(a=t())&&(a=a.v)}while(!a||!a.then);a.then(p).then(void 0,f)}function g(L){L?(a=t())&&a.then?a.then(p).then(void 0,f):p(a):y(s,1,a)}function b(){(o=e())?o.then?o.then(g).then(void 0,f):g(o):y(s,1,a)}}function me(e,r){try{var t=e()}catch(n){return r(!0,n)}return t&&t.then?t.then(r.bind(null,!1),r.bind(null,!0)):r(!1,t)}var K,S,M,Z,ye=function(e,r){try{var t=m.__s;m.__s=!0,K=m.__b,S=m.diffed,M=m.__r,Z=m.unmount;var n=ne(j,null);return n.__k=[e],Promise.resolve(me(function(){return Promise.resolve(x(e,r||X,!1,void 0,n,!0,void 0)).then(function(o){var a,c=function(){if(F(o)){var s=function(){var b=p.join(v);return a=1,b},f=0,p=o,g=ve(function(){return!!p.some(function(b){return b&&typeof b.then=="function"})&&f++<25},void 0,function(){return Promise.resolve(Promise.all(p)).then(function(b){p=b.flat()})});return g&&g.then?g.then(s):s()}}();return c&&c.then?c.then(function(s){return a?s:o}):a?c:o})},function(o,a){if(m.__c&&m.__c(e,ee),m.__s=t,ee.length=0,o)throw a;return a}))}catch(o){return Promise.reject(o)}},X={},ee=[],F=Array.isArray,N=Object.assign,v="";function te(e,r){var t,n=e.type,o=!0;return e.__c?(o=!1,(t=e.__c).state=t.__s):t=new n(e.props,r),e.__c=t,t.__v=e,t.props=e.props,t.context=r,t.__d=!0,t.state==null&&(t.state=X),t.__s==null&&(t.__s=t.state),n.getDerivedStateFromProps?t.state=N({},t.state,n.getDerivedStateFromProps(t.props,t.state)):o&&t.componentWillMount?(t.componentWillMount(),t.state=t.__s!==t.state?t.__s:t.state):!o&&t.componentWillUpdate&&t.componentWillUpdate(),M&&M(e),t.render(t.props,t.state,r)}function x(e,r,t,n,o,a,c){if(e==null||e===!0||e===!1||e===v)return v;var s=typeof e;if(s!="object")return s=="function"?v:s=="string"?H(e):e+v;if(F(e)){var f,p=v;o.__k=e;for(var g=0;g<e.length;g++){var b=e[g];if(b!=null&&typeof b!="boolean"){var L,P=x(b,r,t,n,o,a,c);typeof P=="string"?p+=P:(f||(f=[]),p&&f.push(p),p=v,F(P)?(L=f).push.apply(L,P):f.push(P))}}return f?(p&&f.push(p),f):p}if(e.constructor!==void 0)return v;e.__=o,K&&K(e);var h=e.type,d=e.props;if(typeof h=="function"){var R,i,_,U=r;if(h===j){if("tpl"in d){for(var D=v,T=0;T<d.tpl.length;T++)if(D+=d.tpl[T],d.exprs&&T<d.exprs.length){var E=d.exprs[T];if(E==null)continue;typeof E!="object"||E.constructor!==void 0&&!F(E)?D+=E:D+=x(E,r,t,n,e,a,c)}return D}if("UNSTABLE_comment"in d)return"<!--"+H(d.UNSTABLE_comment)+"-->";i=d.children}else{if((R=h.contextType)!=null){var G=r[R.__c];U=G?G.props.value:R.__}var q=h.prototype&&typeof h.prototype.render=="function";if(q)i=te(e,U),_=e.__c;else{e.__c=_=_e(e,U);for(var oe=0;_.__d&&oe++<25;)_.__d=!1,M&&M(e),i=h.call(_,d,U);_.__d=!0}if(_.getChildContext!=null&&(r=N({},r,_.getChildContext())),q&&m.errorBoundaries&&(h.getDerivedStateFromError||_.componentDidCatch)){i=i!=null&&i.type===j&&i.key==null&&i.props.tpl==null?i.props.children:i;try{return x(i,r,t,n,e,a,c)}catch(A){return h.getDerivedStateFromError&&(_.__s=h.getDerivedStateFromError(A)),_.componentDidCatch&&_.componentDidCatch(A,X),_.__d?(i=te(e,r),(_=e.__c).getChildContext!=null&&(r=N({},r,_.getChildContext())),x(i=i!=null&&i.type===j&&i.key==null&&i.props.tpl==null?i.props.children:i,r,t,n,e,a,c)):v}finally{S&&S(e),e.__=null,Z&&Z(e)}}}i=i!=null&&i.type===j&&i.key==null&&i.props.tpl==null?i.props.children:i;try{var ae=x(i,r,t,n,e,a,c);return S&&S(e),e.__=null,m.unmount&&m.unmount(e),ae}catch(A){if(!A||typeof A.then!="function")throw A;return A.then(function ie(){try{return x(i,r,t,n,e,a,c)}catch(W){if(!W||typeof W.then!="function")throw W;return W.then(function(){return x(i,r,t,n,e,a,c)},ie)}})}}var w,C="<"+h,k=v;for(var l in d){var u=d[l];if(typeof u!="function"||l==="class"||l==="className"){switch(l){case"children":w=u;continue;case"key":case"ref":case"__self":case"__source":continue;case"htmlFor":if("for"in d)continue;l="for";break;case"className":if("class"in d)continue;l="class";break;case"defaultChecked":l="checked";break;case"defaultSelected":l="selected";break;case"defaultValue":case"value":switch(l="value",h){case"textarea":w=u;continue;case"select":n=u;continue;case"option":n!=u||"selected"in d||(C+=" selected")}break;case"dangerouslySetInnerHTML":k=u&&u.__html;continue;case"style":typeof u=="object"&&(u=de(u));break;case"acceptCharset":l="accept-charset";break;case"httpEquiv":l="http-equiv";break;default:if(z.test(l))l=l.replace(z,"$1:$2").toLowerCase();else{if(B.test(l))continue;l[4]!=="-"&&!ue.has(l)||u==null?t?se.test(l)&&(l=l==="panose1"?"panose-1":l.replace(/([A-Z])/g,"-$1").toLowerCase()):ce.test(l)&&(l=l.toLowerCase()):u+=v}}u!=null&&u!==!1&&(C=u===!0||u===v?C+" "+l:C+" "+l+'="'+(typeof u=="string"?H(u):u+v)+'"')}}if(B.test(h))throw new Error(h+" is not a valid HTML tag name in "+C+">");if(k||(typeof w=="string"?k=H(w):w!=null&&w!==!1&&w!==!0&&(k=x(w,r,h==="svg"||h!=="foreignObject"&&t,n,e,a,c))),S&&S(e),e.__=null,Z&&Z(e),!k&&ge.has(h))return C+"/>";var V="</"+h+">",J=C+">";return F(k)?[J].concat(k,[V]):typeof k!="string"?[J,k,V]:J+k+V}var ge=new Set(["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"]);let O;const re=m.vnode;m.vnode=e=>{re&&re(e),O&&O(e)};async function ke(e,r){r=r||{};const t=r.props;typeof e=="function"?e=ne(e,t):t&&(e=le(e,t));let n=new Set;O=({type:o,props:a})=>{o==="a"&&a&&a.href&&(!a.target||a.target==="_self")&&n.add(a.href)};try{let o=await ye(e);return o+='<script type="isodata"><\/script>',{html:o,links:n}}finally{O=null}}export{ke as default};
