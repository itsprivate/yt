(self.webpackChunkexample=self.webpackChunkexample||[]).push([[741],{6479:function(e,t,n){var r=n(7316);e.exports=function(e,t){if(null==e)return{};var n,o,i=r(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i},e.exports.default=e.exports,e.exports.__esModule=!0},9935:function(e,t,n){"use strict";n.d(t,{xu:function(){return y},kC:function(){return b},rj:function(){return j},rU:function(){return E},OL:function(){return N},Ph:function(){return S},xv:function(){return A}});var r=n(1253),o=n(7329),i=n(3635),a=n(7825),c=n(3548),u=n(5484),l=n(9526),s=n(7294),f=n(3431),p=["width","columns","gap","repeat"],d=["size"],h=["arrow"];var m=[].concat((0,o.Z)(u.ZP.propNames),(0,o.Z)(l.Z.propNames)),v=function(e){return m.includes(e)},g=(0,c.MS)(m),y=(0,i.Z)("div",{shouldForwardProp:g})({boxSizing:"border-box",margin:0,minWidth:0},(function(e){return(0,a.iv)(e.__css)(e.theme)}),(function(e){var t=e.theme,n=e.variant,r=e.__themeKey,o=void 0===r?"variants":r;return(0,a.iv)((0,a.U2)(t,o+"."+n,(0,a.U2)(t,n)))}),u.ZP,l.Z,(function(e){return(0,a.iv)(e.sx)(e.theme)}),(function(e){return e.css}));y.displayName="Box";var b=(0,i.Z)(y)({display:"flex"});function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}b.displayName="Flex";var O=function e(t,n){return Array.isArray(t)?t.map((function(t){return e(t,n)})):!!t&&"repeat(auto-".concat(n,", minmax(").concat("number"==typeof(r=t)?r+"px":r,", 1fr))");var r},w=function e(t){return Array.isArray(t)?t.map(e):!!t&&("number"==typeof t?"repeat(".concat(t,", 1fr)"):t)},j=s.forwardRef((function(e,t){var n=e.width,o=e.columns,i=e.gap,a=void 0===i?3:i,c=e.repeat,u=void 0===c?"fit":c,l=(0,r.Z)(e,p),f=n?O(n,u):w(o);return s.createElement(y,x({ref:t},l,{__themeKey:"grids",__css:{display:"grid",gridGap:a,gridTemplateColumns:f}}))})),E=s.forwardRef((function(e,t){return s.createElement(y,x({ref:t,as:"a",variant:"styles.a"},e,{__themeKey:"links"}))})),A=s.forwardRef((function(e,t){return s.createElement(y,x({as:"span",ref:t,variant:"default"},e,{__themeKey:"text"}))})),k=function(e){var t=e.size,n=void 0===t?24:t,o=(0,r.Z)(e,d);return s.createElement(y,x({as:"svg",xmlns:"http://www.w3.org/2000/svg",width:n+"",height:n+"",viewBox:"0 0 24 24",fill:"currentcolor"},o))};k.displayName="SVG";var P=function(e){return function(t){var n={};for(var r in t)e(r||"")&&(n[r]=t[r]);return n}},C=/^m[trblxy]?$/,Z=P((function(e){return C.test(e)})),z=P((function(e){return!C.test(e)})),_=function(e){return s.createElement(k,e,s.createElement("path",{d:"M7 10l5 5 5-5z"}))},S=s.forwardRef((function(e,t){var n=e.arrow,o=(0,r.Z)(e,h);return s.createElement(y,x({},Z(o),{sx:{display:"flex"}}),s.createElement(y,x({ref:t,as:"select",variant:"select"},z(o),{__themeKey:"forms",__css:{display:"block",width:"100%",p:2,appearance:"none",fontSize:"inherit",lineHeight:"inherit",border:"1px solid",borderRadius:4,color:"inherit",backgroundColor:function(e){return(0,a.U2)(e,"colors.background",null)}}})),n||s.createElement(_,{sx:{ml:-28,alignSelf:"center",pointerEvents:"none"}}))})),N=((0,f.F4)({from:{transform:"rotate(0deg)"},to:{transform:"rotate(360deg)"}}),P(v),P((function(e){return!v(e)})),s.forwardRef((function(e,t){return s.createElement(E,x({ref:t,variant:"nav"},e,{__css:{color:"inherit",textDecoration:"none",fontWeight:"bold",display:"inline-block","&:hover, &:focus, &.active":{color:"primary"}}}))})))},4070:function(e){"use strict";function t(e){if("string"!=typeof e)throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}function n(e,t){for(var n,r="",o=0,i=-1,a=0,c=0;c<=e.length;++c){if(c<e.length)n=e.charCodeAt(c);else{if(47===n)break;n=47}if(47===n){if(i===c-1||1===a);else if(i!==c-1&&2===a){if(r.length<2||2!==o||46!==r.charCodeAt(r.length-1)||46!==r.charCodeAt(r.length-2))if(r.length>2){var u=r.lastIndexOf("/");if(u!==r.length-1){-1===u?(r="",o=0):o=(r=r.slice(0,u)).length-1-r.lastIndexOf("/"),i=c,a=0;continue}}else if(2===r.length||1===r.length){r="",o=0,i=c,a=0;continue}t&&(r.length>0?r+="/..":r="..",o=2)}else r.length>0?r+="/"+e.slice(i+1,c):r=e.slice(i+1,c),o=c-i-1;i=c,a=0}else 46===n&&-1!==a?++a:a=-1}return r}var r={resolve:function(){for(var e,r="",o=!1,i=arguments.length-1;i>=-1&&!o;i--){var a;i>=0?a=arguments[i]:(void 0===e&&(e=process.cwd()),a=e),t(a),0!==a.length&&(r=a+"/"+r,o=47===a.charCodeAt(0))}return r=n(r,!o),o?r.length>0?"/"+r:"/":r.length>0?r:"."},normalize:function(e){if(t(e),0===e.length)return".";var r=47===e.charCodeAt(0),o=47===e.charCodeAt(e.length-1);return 0!==(e=n(e,!r)).length||r||(e="."),e.length>0&&o&&(e+="/"),r?"/"+e:e},isAbsolute:function(e){return t(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0===arguments.length)return".";for(var e,n=0;n<arguments.length;++n){var o=arguments[n];t(o),o.length>0&&(void 0===e?e=o:e+="/"+o)}return void 0===e?".":r.normalize(e)},relative:function(e,n){if(t(e),t(n),e===n)return"";if((e=r.resolve(e))===(n=r.resolve(n)))return"";for(var o=1;o<e.length&&47===e.charCodeAt(o);++o);for(var i=e.length,a=i-o,c=1;c<n.length&&47===n.charCodeAt(c);++c);for(var u=n.length-c,l=a<u?a:u,s=-1,f=0;f<=l;++f){if(f===l){if(u>l){if(47===n.charCodeAt(c+f))return n.slice(c+f+1);if(0===f)return n.slice(c+f)}else a>l&&(47===e.charCodeAt(o+f)?s=f:0===f&&(s=0));break}var p=e.charCodeAt(o+f);if(p!==n.charCodeAt(c+f))break;47===p&&(s=f)}var d="";for(f=o+s+1;f<=i;++f)f!==i&&47!==e.charCodeAt(f)||(0===d.length?d+="..":d+="/..");return d.length>0?d+n.slice(c+s):(c+=s,47===n.charCodeAt(c)&&++c,n.slice(c))},_makeLong:function(e){return e},dirname:function(e){if(t(e),0===e.length)return".";for(var n=e.charCodeAt(0),r=47===n,o=-1,i=!0,a=e.length-1;a>=1;--a)if(47===(n=e.charCodeAt(a))){if(!i){o=a;break}}else i=!1;return-1===o?r?"/":".":r&&1===o?"//":e.slice(0,o)},basename:function(e,n){if(void 0!==n&&"string"!=typeof n)throw new TypeError('"ext" argument must be a string');t(e);var r,o=0,i=-1,a=!0;if(void 0!==n&&n.length>0&&n.length<=e.length){if(n.length===e.length&&n===e)return"";var c=n.length-1,u=-1;for(r=e.length-1;r>=0;--r){var l=e.charCodeAt(r);if(47===l){if(!a){o=r+1;break}}else-1===u&&(a=!1,u=r+1),c>=0&&(l===n.charCodeAt(c)?-1==--c&&(i=r):(c=-1,i=u))}return o===i?i=u:-1===i&&(i=e.length),e.slice(o,i)}for(r=e.length-1;r>=0;--r)if(47===e.charCodeAt(r)){if(!a){o=r+1;break}}else-1===i&&(a=!1,i=r+1);return-1===i?"":e.slice(o,i)},extname:function(e){t(e);for(var n=-1,r=0,o=-1,i=!0,a=0,c=e.length-1;c>=0;--c){var u=e.charCodeAt(c);if(47!==u)-1===o&&(i=!1,o=c+1),46===u?-1===n?n=c:1!==a&&(a=1):-1!==n&&(a=-1);else if(!i){r=c+1;break}}return-1===n||-1===o||0===a||1===a&&n===o-1&&n===r+1?"":e.slice(n,o)},format:function(e){if(null===e||"object"!=typeof e)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return function(e,t){var n=t.dir||t.root,r=t.base||(t.name||"")+(t.ext||"");return n?n===t.root?n+r:n+e+r:r}("/",e)},parse:function(e){t(e);var n={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return n;var r,o=e.charCodeAt(0),i=47===o;i?(n.root="/",r=1):r=0;for(var a=-1,c=0,u=-1,l=!0,s=e.length-1,f=0;s>=r;--s)if(47!==(o=e.charCodeAt(s)))-1===u&&(l=!1,u=s+1),46===o?-1===a?a=s:1!==f&&(f=1):-1!==a&&(f=-1);else if(!l){c=s+1;break}return-1===a||-1===u||0===f||1===f&&a===u-1&&a===c+1?-1!==u&&(n.base=n.name=0===c&&i?e.slice(1,u):e.slice(c,u)):(0===c&&i?(n.name=e.slice(1,a),n.base=e.slice(1,u)):(n.name=e.slice(c,a),n.base=e.slice(c,u)),n.ext=e.slice(a,u)),c>0?n.dir=e.slice(0,c-1):i&&(n.dir="/"),n},sep:"/",delimiter:":",win32:null,posix:null};r.posix=r,e.exports=r},8730:function(e,t,n){"use strict";n.d(t,{c:function(){return S}});var r=n(6479),o=n.n(r),i=n(8),a=n.n(i),c=n(9713),u=n.n(c),l=n(7294),s=n(8262),f=n.n(s),p=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;function d(e){var t={type:"tag",name:"",voidElement:!1,attrs:{},children:[]},n=e.match(/<\/?([^\s]+?)[/\s>]/);if(n&&(t.name=n[1],(f()[n[1]]||"/"===e.charAt(e.length-2))&&(t.voidElement=!0),t.name.startsWith("!--"))){var r=e.indexOf("--\x3e");return{type:"comment",comment:-1!==r?e.slice(4,r):""}}for(var o=new RegExp(p),i=null;null!==(i=o.exec(e));)if(i[0].trim())if(i[1]){var a=i[1].trim(),c=[a,""];a.indexOf("=")>-1&&(c=a.split("=")),t.attrs[c[0]]=c[1],o.lastIndex--}else i[2]&&(t.attrs[i[2]]=i[3].trim().substring(1,i[3].length-1));return t}var h=/<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,m=/^\s*$/,v=Object.create(null);function g(e,t){switch(t.type){case"text":return e+t.content;case"tag":return e+="<"+t.name+(t.attrs?function(e){var t=[];for(var n in e)t.push(n+'="'+e[n]+'"');return t.length?" "+t.join(" "):""}(t.attrs):"")+(t.voidElement?"/>":">"),t.voidElement?e:e+t.children.reduce(g,"")+"</"+t.name+">";case"comment":return e+"\x3c!--"+t.comment+"--\x3e"}}var y={parse:function(e,t){t||(t={}),t.components||(t.components=v);var n,r=[],o=[],i=-1,a=!1;if(0!==e.indexOf("<")){var c=e.indexOf("<");r.push({type:"text",content:-1===c?e:e.substring(0,c)})}return e.replace(h,(function(c,u){if(a){if(c!=="</"+n.name+">")return;a=!1}var l,s="/"!==c.charAt(1),f=c.startsWith("\x3c!--"),p=u+c.length,h=e.charAt(p);if(f){var v=d(c);return i<0?(r.push(v),r):((l=o[i]).children.push(v),r)}if(s&&(i++,"tag"===(n=d(c)).type&&t.components[n.name]&&(n.type="component",a=!0),n.voidElement||a||!h||"<"===h||n.children.push({type:"text",content:e.slice(p,e.indexOf("<",p))}),0===i&&r.push(n),(l=o[i-1])&&l.children.push(n),o[i]=n),(!s||n.voidElement)&&(i>-1&&(n.voidElement||n.name===c.slice(2,-1))&&(i--,n=-1===i?r:o[i]),!a&&"<"!==h&&h)){l=-1===i?r:o[i].children;var g=e.indexOf("<",p),y=e.slice(p,-1===g?void 0:g);m.test(y)&&(y=" "),(g>-1&&i+l.length>=0||" "!==y)&&l.push({type:"text",content:y})}})),r},stringify:function(e){return e.reduce((function(e,t){return e+g("",t)}),"")}},b=n(1322);function x(){if(console&&console.warn){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];"string"==typeof n[0]&&(n[0]="react-i18next:: ".concat(n[0])),(e=console).warn.apply(e,n)}}var O={};function w(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];"string"==typeof t[0]&&O[t[0]]||("string"==typeof t[0]&&(O[t[0]]=new Date),x.apply(void 0,t))}var j=["format"],E=["children","count","parent","i18nKey","tOptions","values","defaults","components","ns","i18n","t"];function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach((function(t){u()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function P(e,t){if(!e)return!1;var n=e.props?e.props.children:e.children;return t?n.length>0:!!n}function C(e){return e?e&&e.children?e.children:e.props&&e.props.children:[]}function Z(e){return Array.isArray(e)?e:[e]}function z(e,t){if(!e)return"";var n="",r=Z(e),i=t.transKeepBasicHtmlNodesFor||[];return r.forEach((function(e,r){if("string"==typeof e)n+="".concat(e);else if(l.isValidElement(e)){var c=Object.keys(e.props).length,u=i.indexOf(e.type)>-1,s=e.props.children;if(!s&&u&&0===c)n+="<".concat(e.type,"/>");else if(s||u&&0===c)if(e.props.i18nIsDynamicList)n+="<".concat(r,"></").concat(r,">");else if(u&&1===c&&"string"==typeof s)n+="<".concat(e.type,">").concat(s,"</").concat(e.type,">");else{var f=z(s,t);n+="<".concat(r,">").concat(f,"</").concat(r,">")}else n+="<".concat(r,"></").concat(r,">")}else if(null===e)x("Trans: the passed in value is invalid - seems you passed in a null child.");else if("object"===a()(e)){var p=e.format,d=o()(e,j),h=Object.keys(d);if(1===h.length){var m=p?"".concat(h[0],", ").concat(p):h[0];n+="{{".concat(m,"}}")}else x("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",e)}else x("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",e)})),n}function _(e,t,n,r,o){if(""===t)return[];var i=r.transKeepBasicHtmlNodesFor||[],c=t&&new RegExp(i.join("|")).test(t);if(!e&&!c)return[t];var u={};!function e(t){Z(t).forEach((function(t){"string"!=typeof t&&(P(t)?e(C(t)):"object"!==a()(t)||l.isValidElement(t)||Object.assign(u,t))}))}(e);var s=n.services.interpolator.interpolate(t,k(k({},u),o),n.language),f=y.parse("<0>".concat(s,"</0>"));function p(e,t,n){var r=C(e),o=h(r,t.children,n);return function(e){return"[object Array]"===Object.prototype.toString.call(e)&&e.every((function(e){return l.isValidElement(e)}))}(r)&&0===o.length?r:o}function d(e,t,n,r,o){e.dummy&&(e.children=t),n.push(l.cloneElement(e,k(k({},e.props),{},{key:r}),o?void 0:t))}function h(t,n,o){var u=Z(t);return Z(n).reduce((function(t,n,s){var f,m,v,g=n.children&&n.children[0]&&n.children[0].content;if("tag"===n.type){var y=u[parseInt(n.name,10)];!y&&1===o.length&&o[0][n.name]&&(y=o[0][n.name]),y||(y={});var b=0!==Object.keys(n.attrs).length?(f={props:n.attrs},(v=k({},m=y)).props=Object.assign(f.props,m.props),v):y,x=l.isValidElement(b),O=x&&P(n,!0)&&!n.voidElement,w=c&&"object"===a()(b)&&b.dummy&&!x,j="object"===a()(e)&&null!==e&&Object.hasOwnProperty.call(e,n.name);if("string"==typeof b)t.push(b);else if(P(b)||O){d(b,p(b,n,o),t,s)}else if(w){var E=h(u,n.children,o);t.push(l.cloneElement(b,k(k({},b.props),{},{key:s}),E))}else if(Number.isNaN(parseFloat(n.name))){if(j)d(b,p(b,n,o),t,s,n.voidElement);else if(r.transSupportBasicHtmlNodes&&i.indexOf(n.name)>-1)if(n.voidElement)t.push(l.createElement(n.name,{key:"".concat(n.name,"-").concat(s)}));else{var A=h(u,n.children,o);t.push(l.createElement(n.name,{key:"".concat(n.name,"-").concat(s)},A))}else if(n.voidElement)t.push("<".concat(n.name," />"));else{var C=h(u,n.children,o);t.push("<".concat(n.name,">").concat(C,"</").concat(n.name,">"))}}else if("object"!==a()(b)||x)1===n.children.length&&g?t.push(l.cloneElement(b,k(k({},b.props),{},{key:s}),g)):t.push(l.cloneElement(b,k(k({},b.props),{},{key:s})));else{var Z=n.children[0]?g:null;Z&&t.push(Z)}}else if("text"===n.type){var z=r.transWrapTextNodes;z?t.push(l.createElement(z,{key:"".concat(n.name,"-").concat(s)},n.content)):t.push(n.content)}return t}),[])}return C(h([{dummy:!0,children:e}],f,Z(e||[]))[0])}function S(e){var t=e.children,n=e.count,r=e.parent,i=e.i18nKey,a=e.tOptions,c=void 0===a?{}:a,u=e.values,s=e.defaults,f=e.components,p=e.ns,d=e.i18n,h=e.t,m=o()(e,E),v=(0,l.useContext)(b.OO)||{},g=v.i18n,y=v.defaultNS,x=d||g||(0,b.nI)();if(!x)return w("You will need to pass in an i18next instance by using i18nextReactModule"),t;var O=h||x.t.bind(x)||function(e){return e},j=k(k({},(0,b.JP)()),x.options&&x.options.react),A=p||O.ns||y||x.options&&x.options.defaultNS;A="string"==typeof A?[A]:A||["translation"];var P=s||z(t,j)||j.transEmptyNodeValue||i,C=j.hashTransKey,Z=i||(C?C(P):P),S=u?c.interpolation:{interpolation:k(k({},c.interpolation),{},{prefix:"#$?",suffix:"?$#"})},N=k(k(k(k({},c),{},{count:n},u),S),{},{defaultValue:P,ns:A}),T=_(f||t,Z?O(Z,N):P,x,j,N),I=void 0!==r?r:j.defaultTransParent;return I?l.createElement(I,m,T):T}},977:function(e,t,n){"use strict";n.d(t,{tZ:function(){return r}});var r=n(3345).tZ},8594:function(e,t,n){var r,o,i;i=function(){function e(e){var t=[];if(0===e.length)return"";if("string"!=typeof e[0])throw new TypeError("Url must be a string. Received "+e[0]);if(e[0].match(/^[^/:]+:\/*$/)&&e.length>1){var n=e.shift();e[0]=n+e[0]}e[0].match(/^file:\/\/\//)?e[0]=e[0].replace(/^([^/:]+):\/*/,"$1:///"):e[0]=e[0].replace(/^([^/:]+):\/*/,"$1://");for(var r=0;r<e.length;r++){var o=e[r];if("string"!=typeof o)throw new TypeError("Url must be a string. Received "+o);""!==o&&(r>0&&(o=o.replace(/^[\/]+/,"")),o=r<e.length-1?o.replace(/[\/]+$/,""):o.replace(/[\/]+$/,"/"),t.push(o))}var i=t.join("/"),a=(i=i.replace(/\/(\?|&|#[^!])/g,"$1")).split("?");return i=a.shift()+(a.length>0?"?":"")+a.join("&")}return function(){return e("object"==typeof arguments[0]?arguments[0]:[].slice.call(arguments))}},e.exports?e.exports=i():void 0===(o="function"==typeof(r=i)?r.call(t,n,t,e):r)||(e.exports=o)},8262:function(e){e.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}},4036:function(e,t,n){"use strict";var r=n(6156),o=(n(7294),n(5414)),i=n(5444),a=n(5302),c=n(8594),u=n.n(c),l=n(6473),s=n(3431);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e){var t=e.description,n=e.lang,r=e.meta,c=e.title,f=e.authorImage,d=e.imageSource,h=e.imageAlt,m=e.location,v=e.pageType,g=e.item,y=e.siteMetadata,b=(0,a.ql)().locale,x=(0,l.t)("description",y.localize,y.description,b),O=t||x,w=y.telegram,j=(0,l.t)("author",y.localize,y.author,b),E=y.siteUrl,A=(0,l.t)("keywords",y.localize,y.keywords,b),k=f||y.iconUrl,P=function(e){return e.match("(https?|ftp|file)://[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]")?e:u()(E,(0,i.withPrefix)(e))},C=d?P(d):y.defaultSocialImageUrl,Z=h||O,z=(0,l.t)("title",y.localize,y.title,b),_=c+" - "+z,S={"@type":"Person",name:j},N={"@type":"ImageObject",url:k?P(k):null,"@id":u()(E,(0,i.withPrefix)("#logo")),caption:z+" Logo"},T=[{"@context":"http://schema.org","@type":"WebSite","@id":u()(E,(0,i.withPrefix)("#website")),url:(0,i.withPrefix)(E),name:z,image:N}];if("detail"===v){var I=u()(E,m.pathname),R=new Date(g.date);T.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":I,name:c,image:C}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:I,name:c,headline:c,image:{"@type":"ImageObject",url:C},author:S,publisher:p(p({},S),{},{"@type":"Organization",logo:N}),datePublished:R,description:O})}return(0,s.tZ)(o.Z,{htmlAttributes:{lang:n||b},title:_,meta:[{name:"description",content:O},{name:"keywords",content:A.join(",")},{property:"og:title",content:c},{property:"og:description",content:O},{property:"og:type",content:"website"},{name:"twitter:creator",content:j},{name:"twitter:title",content:c},{name:"twitter:description",content:O}].concat(C?[{name:"og:image",content:C},{name:"og:image:alt",content:Z},{name:"twitter:image",content:C},{name:"twitter:image:alt",content:Z},{name:"twitter:card",content:"summary_large_image"}]:[{name:"twitter:card",content:"summary"}]).concat(w?[{name:"telegram:channel",content:w}]:[]).concat(r)},(0,s.tZ)("script",{type:"application/ld+json"},JSON.stringify(T)))}d.defaultProps={meta:[]},t.Z=d},6473:function(e,t,n){"use strict";n.d(t,{t:function(){return r.t},YQ:function(){return r.YQ},L9:function(){return r.L9},nZ:function(){return r.nZ},Mg:function(){return o}});var r=n(7260);function o(e,t,n){return function(e,t){return e===t}(t,e)||n.split("/")[1]===t?n:"/"+t+n}},7260:function(e,t){var n=function(e,t,n,r){void 0===r&&(r="zh");var o=n;if(t&&Array.isArray(t))for(var i=0;i<t.length;i++){var a=t[i];if(r===a.locale&&a[e])return o=a[e]}return o};t.t=n;t.YQ=function(e,t){void 0===t&&(t="zh");var r=e.title,o=[];e.parent&&e.parent.localize&&(o=e.parent.localize);var i=e.provider;if("Product Hunt"===i){var a=r.split(" - "),c=a[0],u=a[1];r=c+" - "+n("tagline",o,u,t)}else if("Twitter"===i){var l=e.sharedContent,s="full_text";l&&l.title&&r.startsWith("RT @")&&(s="retweeted_status_full_text",r=l.title),r=n(s,o,r,t)}else r=n("title",o,r,t);return r};t.nZ=function(e,t){void 0===t&&(t="zh");var r=e.sharedContent;if(!r||!r.title)return null;var o=r.title,i=[];return e.parent&&e.parent.localize&&(i=e.parent.localize),o=n("quoted_status_full_text",i,o,t)};t.L9=function(e,t){void 0===t&&(t="zh");var r=e.excerpt,o=[];e.parent&&e.parent.localize&&(o=e.parent.localize);var i=e.provider;return r=n("Product Hunt"===i||"Youtube"===i?"description":"Reddit"===i?"the_new_excerpt":"excerpt",o,r,t)}},5302:function(e,t,n){"use strict";n.d(t,{UE:function(){return s},ql:function(){return c.q}});n(6752),n(7294);var r=n(2122),o=n(9756),i=n(5444),a=n(3346),c=n(6410),u=n(3431),l=["to","language"],s=function(e){var t=e.to,n=e.language,s=(0,o.Z)(e,l),f=(0,c.q)(),p=f.defaultLang,d=f.prefixDefault,h=f.locale,m=n||h;return(0,u.tZ)(i.Link,(0,r.Z)({},s,{to:(0,a.localizedPath)({defaultLang:p,prefixDefault:d,locale:m,path:t})}))};n(9499)},2705:function(e,t,n){var r=n(5639).Symbol;e.exports=r},9932:function(e){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o}},2663:function(e){e.exports=function(e,t,n,r){var o=-1,i=null==e?0:e.length;for(r&&i&&(n=e[++o]);++o<i;)n=t(n,e[o],o,e);return n}},9029:function(e){var t=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(t)||[]}},4239:function(e,t,n){var r=n(2705),o=n(9607),i=n(2333),a=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":a&&a in Object(e)?o(e):i(e)}},8674:function(e){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},531:function(e,t,n){var r=n(2705),o=n(9932),i=n(4332),a=n(3448),c=r?r.prototype:void 0,u=c?c.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(i(t))return o(t,e)+"";if(a(t))return u?u.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n}},5393:function(e,t,n){var r=n(2663),o=n(3816),i=n(8748),a=RegExp("['’]","g");e.exports=function(e){return function(t){return r(i(o(t).replace(a,"")),e,"")}}},9389:function(e,t,n){var r=n(8674)({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});e.exports=r},1957:function(e,t,n){var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;e.exports=r},9607:function(e,t,n){var r=n(2705),o=Object.prototype,i=o.hasOwnProperty,a=o.toString,c=r?r.toStringTag:void 0;e.exports=function(e){var t=i.call(e,c),n=e[c];try{e[c]=void 0;var r=!0}catch(u){}var o=a.call(e);return r&&(t?e[c]=n:delete e[c]),o}},3157:function(e){var t=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return t.test(e)}},2333:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},5639:function(e,t,n){var r=n(1957),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();e.exports=i},2757:function(e){var t="\\u2700-\\u27bf",n="a-z\\xdf-\\xf6\\xf8-\\xff",r="A-Z\\xc0-\\xd6\\xd8-\\xde",o="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",i="["+o+"]",a="\\d+",c="[\\u2700-\\u27bf]",u="["+n+"]",l="[^\\ud800-\\udfff"+o+a+t+n+r+"]",s="(?:\\ud83c[\\udde6-\\uddff]){2}",f="[\\ud800-\\udbff][\\udc00-\\udfff]",p="["+r+"]",d="(?:"+u+"|"+l+")",h="(?:"+p+"|"+l+")",m="(?:['’](?:d|ll|m|re|s|t|ve))?",v="(?:['’](?:D|LL|M|RE|S|T|VE))?",g="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",y="[\\ufe0e\\ufe0f]?",b=y+g+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",s,f].join("|")+")"+y+g+")*"),x="(?:"+[c,s,f].join("|")+")"+b,O=RegExp([p+"?"+u+"+"+m+"(?="+[i,p,"$"].join("|")+")",h+"+"+v+"(?="+[i,p+d,"$"].join("|")+")",p+"?"+d+"+"+m,p+"+"+v,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",a,x].join("|"),"g");e.exports=function(e){return e.match(O)||[]}},3816:function(e,t,n){var r=n(9389),o=n(9833),i=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,a=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=o(e))&&e.replace(i,r).replace(a,"")}},4332:function(e){var t=Array.isArray;e.exports=t},7005:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},3448:function(e,t,n){var r=n(4239),o=n(7005);e.exports=function(e){return"symbol"==typeof e||o(e)&&"[object Symbol]"==r(e)}},1804:function(e,t,n){var r=n(5393)((function(e,t,n){return e+(n?"-":"")+t.toLowerCase()}));e.exports=r},9833:function(e,t,n){var r=n(531);e.exports=function(e){return null==e?"":r(e)}},8748:function(e,t,n){var r=n(9029),o=n(3157),i=n(9833),a=n(2757);e.exports=function(e,t,n){return e=i(e),void 0===(t=n?void 0:t)?o(e)?a(e):r(e):e.match(t)||[]}}}]);
//# sourceMappingURL=efda053214aa5304131833de30db711964a64887-db78c675bbefb337cb75.js.map