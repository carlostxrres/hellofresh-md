// ==UserScript==
// @name         Markdown Hellofresh
// @description	 Save Hellofresh recipes as Markdown
// @author       carlostxrres
// @version      0.0.1
// @match        https://www.hellofresh.es/recipes/*
// @grant        GM.xmlHttpRequest
// @grant        GM.getValue
// @grant        GM.setValue
// @grant        GM.deleteValue
// @grant        GM_addStyle
// @noframes
// ==/UserScript==

'use strict';

var n$1,l$3,u$3,t$2,i$2,r$2,o$2,e$2,f$3,c$2,a$2,s$2,h$2,p$3,v$2,y$3,d$3={},w$3=[],_$3=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,g$4=Array.isArray;function m$2(n,l){for(var u in l)n[u]=l[u];return n}function b$2(n){n&&n.parentNode&&n.parentNode.removeChild(n);}function k$1(l,u,t){var i,r,o,e={};for(o in u)"key"==o?i=u[o]:"ref"==o?r=u[o]:e[o]=u[o];if(arguments.length>2&&(e.children=arguments.length>3?n$1.call(arguments,2):t),"function"==typeof l&&null!=l.defaultProps)for(o in l.defaultProps) void 0===e[o]&&(e[o]=l.defaultProps[o]);return x$3(l,e,i,r,null)}function x$3(n,t,i,r,o){var e={type:n,props:t,key:i,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:null==o?++u$3:o,__i:-1,__u:0};return null==o&&null!=l$3.vnode&&l$3.vnode(e),e}function S$1(n){return n.children}function C$1(n,l){this.props=n,this.context=l;}function $(n,l){if(null==l)return n.__?$(n.__,n.__i+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return "function"==typeof n.type?$(n):null}function I(n){if(n.__P&&n.__d){var u=n.__v,t=u.__e,i=[],r=[],o=m$2({},u);o.__v=u.__v+1,l$3.vnode&&l$3.vnode(o),q$3(n.__P,o,u,n.__n,n.__P.namespaceURI,32&u.__u?[t]:null,i,null==t?$(u):t,!!(32&u.__u),r),o.__v=u.__v,o.__.__k[o.__i]=o,D$2(i,o,r),u.__e=u.__=null,o.__e!=t&&P$1(o);}}function P$1(n){if(null!=(n=n.__)&&null!=n.__c)return n.__e=n.__c.base=null,n.__k.some(function(l){if(null!=l&&null!=l.__e)return n.__e=n.__c.base=l.__e}),P$1(n)}function A$2(n){(!n.__d&&(n.__d=true)&&i$2.push(n)&&!H$1.__r++||r$2!=l$3.debounceRendering)&&((r$2=l$3.debounceRendering)||o$2)(H$1);}function H$1(){try{for(var n,l=1;i$2.length;)i$2.length>l&&i$2.sort(e$2),n=i$2.shift(),l=i$2.length,I(n);}finally{i$2.length=H$1.__r=0;}}function L(n,l,u,t,i,r,o,e,f,c,a){var s,h,p,v,y,_,g=t&&t.__k||w$3,m=l.length;for(f=T$2(u,l,g,f,m),s=0;s<m;s++)null!=(p=u.__k[s])&&(h=-1!=p.__i&&g[p.__i]||d$3,p.__i=s,_=q$3(n,p,h,i,r,o,e,f,c,a),v=p.__e,p.ref&&h.ref!=p.ref&&(h.ref&&J$1(h.ref,null,p),a.push(p.ref,p.__c||v,p)),null==y&&null!=v&&(y=v),4&p.__u?(f=j$3(p,f,n),h.__e&&(h.__e=null)):"function"==typeof p.type&&void 0!==_?f=_:v&&(f=v.nextSibling),p.__u&=-7);return u.__e=y,f}function T$2(n,l,u,t,i){var r,o,e,f,c,a=u.length,s=a,h=0;for(n.__k=new Array(i),r=0;r<i;r++)null!=(o=l[r])&&"boolean"!=typeof o&&"function"!=typeof o?("string"==typeof o||"number"==typeof o||"bigint"==typeof o||o.constructor==String?o=n.__k[r]=x$3(null,o,null,null,null):g$4(o)?o=n.__k[r]=x$3(S$1,{children:o},null,null,null):void 0===o.constructor&&o.__b>0?o=n.__k[r]=x$3(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):n.__k[r]=o,f=r+h,o.__=n,o.__b=n.__b+1,e=null,-1!=(c=o.__i=O$1(o,u,f,s))&&(s--,(e=u[c])&&(e.__u|=2)),null==e||null==e.__v?(-1==c&&(i>a?h--:i<a&&h++),"function"!=typeof o.type&&(o.__u|=4)):c!=f&&(c==f-1?h--:c==f+1?h++:(c>f?h--:h++,o.__u|=4))):n.__k[r]=null;if(s)for(r=0;r<a;r++)null!=(e=u[r])&&0==(2&e.__u)&&(e.__e==t&&(t=$(e)),K$1(e,e));return t}function j$3(n,l,u){var t,i;if("function"==typeof n.type){for(t=n.__k,i=0;t&&i<t.length;i++)t[i]&&(t[i].__=n,l=j$3(t[i],l,u));return l}n.__e!=l&&(l&&n.type&&!l.parentNode&&(l=$(n)),l=u.insertBefore(n.__e,l||null));do{l=l&&l.nextSibling;}while(null!=l&&8==l.nodeType);return l}function F$2(n,l){return l=l||[],null==n||"boolean"==typeof n||(g$4(n)?n.some(function(n){F$2(n,l);}):l.push(n)),l}function O$1(n,l,u,t){var i,r,o,e=n.key,f=n.type,c=l[u],a=null!=c&&0==(2&c.__u);if(null===c&&null==e||a&&e==c.key&&f==c.type)return u;if(t>(a?1:0))for(i=u-1,r=u+1;i>=0||r<l.length;)if(null!=(c=l[o=i>=0?i--:r++])&&0==(2&c.__u)&&e==c.key&&f==c.type)return o;return  -1}function z$1(n,l,u){"-"==l[0]?n.setProperty(l,null==u?"":u):n[l]=null==u?"":"number"!=typeof u||_$3.test(l)?u:u+"px";}function N(n,l,u,t,i){var r,o;n:if("style"==l)if("string"==typeof u)n.style.cssText=u;else {if("string"==typeof t&&(n.style.cssText=t=""),t)for(l in t)u&&l in u||z$1(n.style,l,"");if(u)for(l in u)t&&u[l]==t[l]||z$1(n.style,l,u[l]);}else if("o"==l[0]&&"n"==l[1])r=l!=(l=l.replace(s$2,"$1")),o=l.toLowerCase(),l=o in n||"onFocusOut"==l||"onFocusIn"==l?o.slice(2):l.slice(2),n.l||(n.l={}),n.l[l+r]=u,u?t?u[a$2]=t[a$2]:(u[a$2]=h$2,n.addEventListener(l,r?v$2:p$3,r)):n.removeEventListener(l,r?v$2:p$3,r);else {if("http://www.w3.org/2000/svg"==i)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=l&&"height"!=l&&"href"!=l&&"list"!=l&&"form"!=l&&"tabIndex"!=l&&"download"!=l&&"rowSpan"!=l&&"colSpan"!=l&&"role"!=l&&"popover"!=l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null==u||false===u&&"-"!=l[4]?n.removeAttribute(l):n.setAttribute(l,"popover"==l&&1==u?"":u));}}function V$1(n){return function(u){if(this.l){var t=this.l[u.type+n];if(null==u[c$2])u[c$2]=h$2++;else if(u[c$2]<t[a$2])return;return t(l$3.event?l$3.event(u):u)}}}function q$3(n,u,t,i,r,o,e,f,c,a){var s,h,p,v,y,d,_,k,x,M,I,P,A,H,T,j,F=u.type;if(void 0!==u.constructor)return null;128&t.__u&&(c=!!(32&t.__u),o=[f=u.__e=t.__e]),(s=l$3.__b)&&s(u);n:if("function"==typeof F){h=e.length;try{if(x=u.props,M=F.prototype&&F.prototype.render,I=(s=F.contextType)&&i[s.__c],P=s?I?I.props.value:s.__:i,t.__c?k=(p=u.__c=t.__c).__=p.__E:(M?u.__c=p=new F(x,P):(u.__c=p=new C$1(x,P),p.constructor=F,p.render=Q$1),I&&I.sub(p),p.state||(p.state={}),p.__n=i,v=p.__d=!0,p.__h=[],p._sb=[]),M&&null==p.__s&&(p.__s=p.state),M&&null!=F.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=m$2({},p.__s)),m$2(p.__s,F.getDerivedStateFromProps(x,p.__s))),y=p.props,d=p.state,p.__v=u,v)M&&null==F.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),M&&null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else {if(M&&null==F.getDerivedStateFromProps&&x!==y&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(x,P),u.__v==t.__v||!p.__e&&null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(x,p.__s,P)){u.__v!=t.__v&&(p.props=x,p.state=p.__s,p.__d=!1),u.__e=t.__e,u.__k=t.__k,u.__k.some(function(n){n&&(n.__=u);}),w$3.push.apply(p.__h,p._sb),p._sb=[],p.__h.length&&e.push(p),f=$(t);break n}null!=p.componentWillUpdate&&p.componentWillUpdate(x,p.__s,P),M&&null!=p.componentDidUpdate&&p.__h.push(function(){p.componentDidUpdate(y,d,_);});}if(p.context=P,p.props=x,p.__P=n,p.__e=!1,A=l$3.__r,H=0,M)p.state=p.__s,p.__d=!1,A&&A(u),s=p.render(p.props,p.state,p.context),w$3.push.apply(p.__h,p._sb),p._sb=[];else do{p.__d=!1,A&&A(u),s=p.render(p.props,p.state,p.context),p.state=p.__s;}while(p.__d&&++H<25);p.state=p.__s,null!=p.getChildContext&&(i=m$2(m$2({},i),p.getChildContext())),M&&!v&&null!=p.getSnapshotBeforeUpdate&&(_=p.getSnapshotBeforeUpdate(y,d)),T=null!=s&&s.type===S$1&&null==s.key?E$2(s.props.children):s,f=L(n,g$4(T)?T:[T],u,t,i,r,o,e,f,c,a),p.base=u.__e,u.__u&=-161,p.__h.length&&e.push(p),k&&(p.__E=p.__=null);}catch(n){if(e.length=h,u.__v=null,c||null!=o){if(n.then){for(u.__u|=c?160:128;f&&8==f.nodeType&&f.nextSibling;)f=f.nextSibling;null!=o&&(o[o.indexOf(f)]=null),u.__e=f;}else if(null!=o)for(j=o.length;j--;)b$2(o[j]);}else u.__e=t.__e;null==u.__k&&(u.__k=t.__k||[]),n.then||B$2(u),l$3.__e(n,u,t);}}else null==o&&u.__v==t.__v?(u.__k=t.__k,u.__e=t.__e):f=u.__e=G$1(t.__e,u,t,i,r,o,e,c,a);return (s=l$3.diffed)&&s(u),128&u.__u?void 0:f}function B$2(n){n&&(n.__c&&(n.__c.__e=true),n.__k&&n.__k.some(B$2));}function D$2(n,u,t){for(var i=0;i<t.length;i++)J$1(t[i],t[++i],t[++i]);l$3.__c&&l$3.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u);});}catch(n){l$3.__e(n,u.__v);}});}function E$2(n){return "object"!=typeof n||null==n||n.__b>0?n:g$4(n)?n.map(E$2):void 0!==n.constructor?null:m$2({},n)}function G$1(u,t,i,r,o,e,f,c,a){var s,h,p,v,y,w,_,m=i.props||d$3,k=t.props,x=t.type;if("svg"==x?o="http://www.w3.org/2000/svg":"math"==x?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),null!=e)for(s=0;s<e.length;s++)if((y=e[s])&&"setAttribute"in y==!!x&&(x?y.localName==x:3==y.nodeType)){u=y,e[s]=null;break}if(null==u){if(null==x)return document.createTextNode(k);u=document.createElementNS(o,x,k.is&&k),c&&(l$3.__m&&l$3.__m(t,e),c=false),e=null;}if(null==x)m===k||c&&u.data==k||(u.data=k);else {if(e="textarea"==x&&null!=k.defaultValue?null:e&&n$1.call(u.childNodes),!c&&null!=e)for(m={},s=0;s<u.attributes.length;s++)m[(y=u.attributes[s]).name]=y.value;for(s in m)y=m[s],"dangerouslySetInnerHTML"==s?p=y:"children"==s||s in k||"value"==s&&"defaultValue"in k||"checked"==s&&"defaultChecked"in k||N(u,s,null,y,o);for(s in k)y=k[s],"children"==s?v=y:"dangerouslySetInnerHTML"==s?h=y:"value"==s?w=y:"checked"==s?_=y:c&&"function"!=typeof y||m[s]===y||N(u,s,y,m[s],o);if(h)c||p&&(h.__html==p.__html||h.__html==u.innerHTML)||(u.innerHTML=h.__html),t.__k=[];else if(p&&(u.innerHTML=""),L("template"==t.type?u.content:u,g$4(v)?v:[v],t,i,r,"foreignObject"==x?"http://www.w3.org/1999/xhtml":o,e,f,e?e[0]:i.__k&&$(i,0),c,a),null!=e)for(s=e.length;s--;)b$2(e[s]);c&&"textarea"!=x||(s="value","progress"==x&&null==w?u.removeAttribute("value"):null!=w&&(w!==u[s]||"progress"==x&&!w||"option"==x&&w!=m[s])&&N(u,s,w,m[s],o),s="checked",null!=_&&_!=u[s]&&N(u,s,_,m[s],o));}return u}function J$1(n,u,t){try{if("function"==typeof n){var i="function"==typeof n.__u;i&&n.__u(),i&&null==u||(n.__u=n(u));}else n.current=u;}catch(n){l$3.__e(n,t);}}function K$1(n,u,t){var i,r;if(l$3.unmount&&l$3.unmount(n),(i=n.ref)&&(i.current&&i.current!=n.__e||J$1(i,null,u)),null!=(i=n.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount();}catch(n){l$3.__e(n,u);}i.base=i.__P=i.__n=null;}if(i=n.__k)for(r=0;r<i.length;r++)i[r]&&K$1(i[r],u,t||"function"!=typeof n.type);t||b$2(n.__e),n.__c=n.__=n.__e=void 0;}function Q$1(n,l,u){return this.constructor(n,u)}function R(u,t,i){var r,o,e,f;t==document&&(t=document.documentElement),l$3.__&&l$3.__(u,t),o=(r="function"=="undefined")?null:t.__k,e=[],f=[],q$3(t,u=(t).__k=k$1(S$1,null,[u]),o||d$3,d$3,t.namespaceURI,o?null:t.firstChild?n$1.call(t.childNodes):null,e,o?o.__e:t.firstChild,r,f),D$2(e,u,f),u.props.children=null;}function W$1(l,u,t){var i,r,o,e,f=m$2({},l.props);for(o in l.type&&l.type.defaultProps&&(e=l.type.defaultProps),u)"key"==o?i=u[o]:"ref"==o?r=u[o]:f[o]=void 0===u[o]&&null!=e?e[o]:u[o];return arguments.length>2&&(f.children=arguments.length>3?n$1.call(arguments,2):t),x$3(l.type,f,i||l.key,r||l.ref,null)}function X$1(n){function l(n){var u,t;return this.getChildContext||(u=new Set,(t={})[l.__c]=this,this.getChildContext=function(){return t},this.componentWillUnmount=function(){u=null;},this.shouldComponentUpdate=function(n){this.props.value!=n.value&&u.forEach(function(n){n.__e=true,A$2(n);});},this.sub=function(n){u.add(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u&&u.delete(n),l&&l.call(n);};}),n.children}return l.__c="__cC"+y$3++,l.__=n,l.Provider=l.__l=(l.Consumer=function(n,l){return n.children(l)}).contextType=l,l}n$1=w$3.slice,l$3={__e:function(n,l,u,t){for(var i,r,o;l=l.__;)if((i=l.__c)&&!i.__)try{if((r=i.constructor)&&null!=r.getDerivedStateFromError&&(i.setState(r.getDerivedStateFromError(n)),o=i.__d),null!=i.componentDidCatch&&(i.componentDidCatch(n,t||{}),o=i.__d),o)return i.__E=i}catch(l){n=l;}throw n}},u$3=0,t$2=function(n){return null!=n&&void 0===n.constructor},C$1.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!=this.state?this.__s:this.__s=m$2({},this.state),"function"==typeof n&&(n=n(m$2({},u),this.props)),n&&m$2(u,n),null!=n&&this.__v&&(l&&this._sb.push(l),A$2(this));},C$1.prototype.forceUpdate=function(n){this.__v&&(this.__e=true,n&&this.__h.push(n),A$2(this));},C$1.prototype.render=S$1,i$2=[],o$2="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,e$2=function(n,l){return n.__v.__b-l.__v.__b},H$1.__r=0,f$3=Math.random().toString(8),c$2="__d"+f$3,a$2="__a"+f$3,s$2=/(PointerCapture)$|Capture$/i,h$2=0,p$3=V$1(false),v$2=V$1(true),y$3=0;

var f$2=0;function u$2(e,t,n,o,i,u){t||(t={});var a,c,p=t;if("ref"in p)for(c in p={},t)"ref"==c?a=t[c]:p[c]=t[c];var l={type:e,props:p,key:n,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--f$2,__i:-1,__u:0,__source:i,__self:u};if("function"==typeof e&&(a=e.defaultProps))for(c in a) void 0===p[c]&&(p[c]=a[c]);return l$3.vnode&&l$3.vnode(l),l}

var t$1,r$1,u$1,i$1,o$1=0,f$1=[],c$1=l$3,e$1=c$1.__b,a$1=c$1.__r,v$1=c$1.diffed,l$2=c$1.__c,m$1=c$1.unmount,p$2=c$1.__;function s$1(n,t){c$1.__h&&c$1.__h(r$1,n,o$1||t),o$1=0;var u=r$1.__H||(r$1.__H={__:[],__h:[]});return n>=u.__.length&&u.__.push({}),u.__[n]}function d$2(n){return o$1=1,y$2(D$1,n)}function y$2(n,u,i){var o=s$1(t$1++,2);if(o.t=n,!o.__c&&(o.__=[i?i(u):D$1(void 0,u),function(n){var t=o.__N?o.__N[0]:o.__[0],r=o.t(t,n);t!==r&&(o.__N=[r,o.__[1]],o.__c.setState({}));}],o.__c=r$1,!r$1.__f)){var f=function(n,t,r){if(!o.__c.__H)return  true;var u=false,i=o.__c.props!==n;if(o.__c.__H.__.some(function(n){if(n.__N){u=true;var t=n.__[0];n.__=n.__N,n.__N=void 0,t!==n.__[0]&&(i=true);}}),c){var f=c.call(this,n,t,r);return u?f||i:f}return !u||i};r$1.__f=true;var c=r$1.shouldComponentUpdate,e=r$1.componentWillUpdate;r$1.componentWillUpdate=function(n,t,r){if(this.__e){var u=c;c=void 0,f(n,t,r),c=u;}e&&e.call(this,n,t,r);},r$1.shouldComponentUpdate=f;}return o.__N||o.__}function h$1(n,u){var i=s$1(t$1++,3);!c$1.__s&&C(i.__H,u)&&(i.__=n,i.u=u,r$1.__H.__h.push(i));}function _$2(n,u){var i=s$1(t$1++,4);!c$1.__s&&C(i.__H,u)&&(i.__=n,i.u=u,r$1.__h.push(i));}function A$1(n){return o$1=5,T$1(function(){return {current:n}},[])}function F$1(n,t,r){o$1=6,_$2(function(){if("function"==typeof n){var r=n(t());return function(){n(null),r&&"function"==typeof r&&r();}}if(n)return n.current=t(),function(){return n.current=null}},null==r?r:r.concat(n));}function T$1(n,r){var u=s$1(t$1++,7);return C(u.__H,r)&&(u.__=n(),u.__H=r,u.__h=n),u.__}function q$2(n,t){return o$1=8,T$1(function(){return n},t)}function x$2(n){var u=r$1.context[n.__c],i=s$1(t$1++,9);return i.c=n,u?(null==i.__&&(i.__=true,u.sub(r$1)),u.props.value):n.__}function g$3(){var n=s$1(t$1++,11);if(!n.__){for(var u=r$1.__v;null!==u&&!u.__m&&null!==u.__;)u=u.__;var i=u.__m||(u.__m=[0,0]);n.__="P"+i[0]+"-"+i[1]++;}return n.__}function j$2(){for(var n;n=f$1.shift();){var t=n.__H;if(n.__P&&t)try{t.__h.some(z),t.__h.some(B$1),t.__h=[];}catch(r){t.__h=[],c$1.__e(r,n.__v);}}}c$1.__b=function(n){r$1=null,e$1&&e$1(n);},c$1.__=function(n,t){n&&t.__k&&t.__k.__m&&(n.__m=t.__k.__m),p$2&&p$2(n,t);},c$1.__r=function(n){a$1&&a$1(n),t$1=0;var i=(r$1=n.__c).__H;i&&(u$1===r$1?(i.__h=[],r$1.__h=[],i.__.some(function(n){n.__N&&(n.__=n.__N),n.u=n.__N=void 0;})):(i.__h.some(z),i.__h.some(B$1),i.__h=[],t$1=0)),u$1=r$1;},c$1.diffed=function(n){v$1&&v$1(n);var t=n.__c;t&&t.__H&&(t.__H.__h.length&&(1!==f$1.push(t)&&i$1===c$1.requestAnimationFrame||((i$1=c$1.requestAnimationFrame)||w$2)(j$2)),t.__H.__.some(function(n){n.u&&(n.__H=n.u,n.u=void 0);})),u$1=r$1=null;},c$1.__c=function(n,t){t.some(function(n){try{n.__h.some(z),n.__h=n.__h.filter(function(n){return !n.__||B$1(n)});}catch(r){t.some(function(n){n.__h&&(n.__h=[]);}),t=[],c$1.__e(r,n.__v);}}),l$2&&l$2(n,t);},c$1.unmount=function(n){m$1&&m$1(n);var t,r=n.__c;r&&r.__H&&(r.__H.__.some(function(n){try{z(n);}catch(n){t=n;}}),r.__H=void 0,t&&c$1.__e(t,r.__v));};var k="function"==typeof requestAnimationFrame;function w$2(n){var t,r=function(){clearTimeout(u),k&&cancelAnimationFrame(t),setTimeout(n);},u=setTimeout(r,35);k&&(t=requestAnimationFrame(r));}function z(n){var t=r$1,u=n.__c;"function"==typeof u&&(n.__c=void 0,u()),r$1=t;}function B$1(n){var t=r$1;n.__c=n.__(),r$1=t;}function C(n,t){return !n||n.length!==t.length||t.some(function(t,r){return t!==n[r]})}function D$1(n,t){return "function"==typeof t?t(n):t}

var i=Symbol.for("preact-signals");function t(){if(!(v>1)){var i,t=false;!function(){var i=c;c=void 0;while(void 0!==i){var t=i.S;if(t.v===i.v)for(var n=t.t;void 0!==n;n=n.x)if(n.i===i.i)n.i=t.i;i=i.o;}}();while(void 0!==h){var n=h;h=void 0;s++;while(void 0!==n){var r=n.u;n.u=void 0;n.f&=-3;if(!(8&n.f)&&w$1(n))try{n.c();}catch(n){if(!t){i=n;t=true;}}n=r;}}s=0;v--;if(t)throw i}else v--;}function n(i){if(v>0)return i();e=++u;v++;try{return i()}finally{t();}}var r,o=void 0;function f(i){var t=o,n=r;o=void 0;r=void 0;try{return i()}finally{o=t;r=n;}}var h=void 0,v=0,s=0,u=0,e=0,c=void 0,d$1=0;function a(i){if(void 0!==o){var t=i.n;if(void 0===t||t.t!==o){t={i:0,S:i,p:o.s,n:void 0,t:o,e:void 0,x:void 0,r:t};if(void 0!==o.s)o.s.n=t;o.s=t;i.n=t;if(32&o.f)i.S(t);return t}else if(-1===t.i){t.i=0;if(void 0!==t.n){t.n.p=t.p;if(void 0!==t.p)t.p.n=t.n;t.p=o.s;t.n=void 0;o.s.n=t;o.s=t;}return t}}}function l$1(i,t){this.v=i;this.i=0;this.n=void 0;this.t=void 0;this.l=0;this.W=null==t?void 0:t.watched;this.Z=null==t?void 0:t.unwatched;this.name=null==t?void 0:t.name;}l$1.prototype.brand=i;l$1.prototype.h=function(){return  true};l$1.prototype.S=function(i){var t=this,n=this.t;if(n!==i&&void 0===i.e){i.x=n;this.t=i;if(void 0!==n)n.e=i;else f(function(){var i;null==(i=t.W)||i.call(t);});}};l$1.prototype.U=function(i){var t=this;if(void 0!==this.t){var n=i.e,r=i.x;if(void 0!==n){n.x=r;i.e=void 0;}if(void 0!==r){r.e=n;i.x=void 0;}if(i===this.t){this.t=r;if(void 0===r)f(function(){var i;null==(i=t.Z)||i.call(t);});}}};l$1.prototype.subscribe=function(i){var t=this;return j$1(function(){var n=t.value;f(function(){return i(n)});},{name:"sub"})};l$1.prototype.valueOf=function(){return this.value};l$1.prototype.toString=function(){return this.value+""};l$1.prototype.toJSON=function(){return this.value};l$1.prototype.peek=function(){var i=this;return f(function(){return i.value})};Object.defineProperty(l$1.prototype,"value",{get:function(){var i=a(this);if(void 0!==i)i.i=this.i;return this.v},set:function(i){if(i!==this.v){if(s>100)throw new Error("Cycle detected");!function(i){if(0!==v&&0===s)if(i.l!==e){i.l=e;c={S:i,v:i.v,i:i.i,o:c};}}(this);this.v=i;this.i++;d$1++;v++;try{for(var n=this.t;void 0!==n;n=n.x)n.t.N();}finally{t();}}}});function y$1(i,t){return new l$1(i,t)}function w$1(i){for(var t=i.s;void 0!==t;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return  true;return  false}function _$1(i){for(var t=i.s;void 0!==t;t=t.n){var n=t.S.n;if(void 0!==n)t.r=n;t.S.n=t;t.i=-1;if(void 0===t.n){i.s=t;break}}}function b$1(i){var t=i.s,n=void 0;while(void 0!==t){var r=t.p;if(-1===t.i){t.S.U(t);if(void 0!==r)r.n=t.n;if(void 0!==t.n)t.n.p=r;}else n=t;t.S.n=t.r;if(void 0!==t.r)t.r=void 0;t=r;}i.s=n;}function p$1(i,t){l$1.call(this,void 0,t);this.x=i;this.s=void 0;this.g=d$1-1;this.f=4;}p$1.prototype=new l$1;p$1.prototype.h=function(){this.f&=-3;if(1&this.f)return  false;if(32==(36&this.f))return  true;this.f&=-5;if(this.g===d$1)return  true;this.g=d$1;this.f|=1;if(this.i>0&&!w$1(this)){this.f&=-2;return  true}var i=o;try{_$1(this);o=this;var t=this.x();if(16&this.f||this.v!==t||0===this.i){this.v=t;this.f&=-17;this.i++;}}catch(i){this.v=i;this.f|=16;this.i++;}o=i;b$1(this);this.f&=-2;return  true};p$1.prototype.S=function(i){if(void 0===this.t){this.f|=36;for(var t=this.s;void 0!==t;t=t.n)t.S.S(t);}l$1.prototype.S.call(this,i);};p$1.prototype.U=function(i){if(void 0!==this.t){l$1.prototype.U.call(this,i);if(void 0===this.t){this.f&=-33;for(var t=this.s;void 0!==t;t=t.n)t.S.U(t);}}};p$1.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var i=this.t;void 0!==i;i=i.x)i.t.N();}};Object.defineProperty(p$1.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var i=a(this);this.h();if(void 0!==i)i.i=this.i;if(16&this.f)throw this.v;return this.v}});function g$2(i,t){return new p$1(i,t)}function S(i){var n=i.m;i.m=void 0;if("function"==typeof n){v++;var r=o;o=void 0;try{n();}catch(t){i.f&=-2;i.f|=8;m(i);throw t}finally{o=r;t();}}}function m(i){for(var t=i.s;void 0!==t;t=t.n)t.S.U(t);i.x=void 0;i.s=void 0;S(i);}function x$1(i){if(o!==this)throw new Error("Out-of-order effect");b$1(this);o=i;this.f&=-2;if(8&this.f)m(this);t();}function E$1(i,t){this.x=i;this.m=void 0;this.s=void 0;this.u=void 0;this.f=32;this.name=null==t?void 0:t.name;if(r)r.push(this);}E$1.prototype.c=function(){var i=this.S();try{if(8&this.f)return;if(void 0===this.x)return;var t=this.x();if("function"==typeof t)this.m=t;}finally{i();}};E$1.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1;this.f&=-9;S(this);_$1(this);v++;var i=o;o=this;return x$1.bind(this,i)};E$1.prototype.N=function(){if(!(2&this.f)){this.f|=2;this.u=h;h=this;}};E$1.prototype.d=function(){this.f|=8;if(!(1&this.f))m(this);};E$1.prototype.dispose=function(){this.d();};function j$1(i,t){var n=new E$1(i,t);try{n.c();}catch(i){n.d();throw i}var r=n.d.bind(n);r[Symbol.dispose]=r;return r}

var l,d,p="undefined"!=typeof window&&!!window.__PREACT_SIGNALS_DEVTOOLS__,_=[];j$1(function(){l=this.N;})();function g$1(i,r){l$3[i]=r.bind(null,l$3[i]||function(){});}function b(i){if(d){var n=d;d=void 0;n();}d=i&&i.S();}function y(i){var n=this,t=i.data,f=useSignal(t);f.name="ReactiveDom";f.value=t;var e=T$1(function(){var i=n,t=n.__v;while(t=t.__)if(t.__c){t.__c.__$f|=4;break}var o=g$2(function(){var i=f.value.value;return 0===i?0:true===i?"":i||""}),e=g$2(function(){return !Array.isArray(o.value)&&!t$2(o.value)}),a=j$1(function(){this.N=F;if(e.value){var n=o.value;if(i.__v&&i.__v.__e&&3===i.__v.__e.nodeType)i.__v.__e.data=n;}}),v=n.__$u.d;n.__$u.d=function(){a();v.call(this);};return [e,o]},[]),a=e[0],v=e[1];return a.value?v.peek():v.value}y.displayName="ReactiveTextNode";Object.defineProperties(l$1.prototype,{constructor:{configurable:true,value:void 0},type:{configurable:true,value:y},props:{configurable:true,get:function(){var i=this;return {data:{get value(){return i.value}}}}},__b:{configurable:true,value:1}});g$1("__b",function(i,n){b();if("string"==typeof n.type){var r,t=n.props;for(var o in t)if("children"!==o){var f=t[o];if(f instanceof l$1){if(!r)n.__np=r={};r[o]=f;t[o]=f.peek();}}}i(n);});g$1("__r",function(i,n){i(n);if(n.type!==S$1){b();var r,o=n.__c;if(o){o.__$f&=-2;if(void 0===(r=o.__$u))o.__$u=r=function(i,n){var r;j$1(function(){r=this;},{name:n});r.c=i;return r}(function(i){return function(){var n;if(p)null==(n=this.y)||n.call(this);i.__$f|=1;i.setState({});}}(o),"function"==typeof n.type?n.type.displayName||n.type.name:"");}b(r);}});g$1("__e",function(i,n,r,t){b();i(n,r,t);});g$1("diffed",function(i,n){b();var r;if("string"==typeof n.type&&(r=n.__e)){var t=n.__np,o=n.props,f=r.U;if(f)for(var e in f){var u=f[e];if(!(void 0===u||t&&e in t)){u.d();f[e]=void 0;}}if(t){if(!f){f={};r.U=f;}for(var a in t){var c=f[a],v=t[a];if(void 0===c){c=w(r,a,v,o);f[a]=c;}else c.o(v,o);}}}i(n);});function w(i,n,r,t){var o=n in i&&void 0===i.ownerSVGElement,f=y$1(r);return {o:function(i,n){f.value=i;t=n;},d:j$1(function(){this.N=F;var r=f.value.value;if(t[n]!==r){t[n]=r;if(o)i[n]=r;else if(null!=r&&(false!==r||"-"===n[4]))i.setAttribute(n,r);else i.removeAttribute(n);}})}}g$1("unmount",function(i,n){if("string"==typeof n.type){var r=n.__e;if(r){var t=r.U;if(t){r.U=void 0;for(var o in t){var f=t[o];if(f)f.d();}}}var e=n.__np;if(e){var u=n.props;for(var a in e)u[a]=e[a];}n.__np=void 0;}else {var c=n.__c;if(c){var v=c.__$u;if(v){c.__$u=void 0;v.d();}}}i(n);});g$1("__h",function(i,n,r,t){if(t<3)n.__$f|=2;i(n,r,t);});C$1.prototype.shouldComponentUpdate=function(i,n){if(this.__R)return  true;var r=this.__$u,t=r&&void 0!==r.s;for(var o in n)return  true;if(this.__f||"boolean"==typeof this.u&&true===this.u){var f=2&this.__$f;if(!(t||f||4&this.__$f))return  true;if(1&this.__$f)return  true}else {if(!(t||4&this.__$f))return  true;if(3&this.__$f)return  true}for(var e in i)if("__source"!==e&&i[e]!==this.props[e])return  true;for(var u in this.props)if(!(u in i))return  true;return  false};function useSignal(i,n){return T$1(function(){return y$1(i,n)},[])}var q$1=function(i){queueMicrotask(function(){queueMicrotask(i);});};function x(){n(function(){var i;while(i=_.shift())l.call(i);});}function F(){if(1===_.push(this))(l$3.requestAnimationFrame||q$1)(x);}

const status = y$1({ state: "loading", message: "Idle" });

function g(n,t){for(var e in t)n[e]=t[e];return n}function E(n,t){for(var e in n)if("__source"!==e&&!(e in t))return  true;for(var r in t)if("__source"!==r&&n[r]!==t[r])return  true;return  false}function M(n,t){this.props=n,this.context=t;}(M.prototype=new C$1).isPureReactComponent=true,M.prototype.shouldComponentUpdate=function(n,t){return E(this.props,n)||E(this.state,t)};var T=l$3.__b;l$3.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),T&&T(n);};var A="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function D(n){function t(t){var e=g({},t);return delete e.ref,n(e,t.ref||null)}return t.$$typeof=A,t.render=n,t.prototype.isReactComponent=t.__f=true,t.displayName="ForwardRef("+(n.displayName||n.name)+")",t}var O=l$3.__e;l$3.__e=function(n,t,e,r){if(n.then)for(var u,o=t;o=o.__;)if((u=o.__c)&&u.__c)return null==t.__e&&(t.__e=e.__e,t.__k=e.__k||[]),u.__c(n,t);O(n,t,e,r);};var U=l$3.unmount;function V(n,t,e){return n&&(n.__c&&n.__c.__H&&(n.__c.__H.__.forEach(function(n){"function"==typeof n.__c&&n.__c();}),n.__c.__H=null),null!=(n=g({},n)).__c&&(n.__c.__P===e&&(n.__c.__P=t),n.__c.__e=true,n.__c=null),n.__k=n.__k&&n.__k.map(function(n){return V(n,t,e)})),n}function W(n,t,e){return n&&e&&(n.__v=null,n.__k=n.__k&&n.__k.map(function(n){return W(n,t,e)}),n.__c&&n.__c.__P===t&&(n.__e&&e.appendChild(n.__e),n.__c.__e=true,n.__c.__P=e)),n}function P(){this.__u=0,this.o=null,this.__b=null;}function j(n){var t=n.__&&n.__.__c;return t&&t.__a&&t.__a(n)}function B(){this.i=null,this.l=null;}l$3.unmount=function(n){var t=n.__c;t&&(t.__z=true),t&&t.__R&&t.__R(),t&&32&n.__u&&(n.type=null),U&&U(n);},(P.prototype=new C$1).__c=function(n,t){var e=t.__c,r=this;null==r.o&&(r.o=[]),r.o.push(e);var u=j(r.__v),o=false,i=function(){o||r.__z||(o=true,e.__R=null,u?u(f):f());};e.__R=i;var l=e.__P;e.__P=null;var f=function(){if(!--r.__u){if(r.state.__a){var n=r.state.__a;r.__v.__k[0]=W(n,n.__c.__P,n.__c.__O);}var t;for(r.setState({__a:r.__b=null});t=r.o.pop();)t.__P=l,t.forceUpdate();}};r.__u++||32&t.__u||r.setState({__a:r.__b=r.__v.__k[0]}),n.then(i,i);},P.prototype.componentWillUnmount=function(){this.o=[];},P.prototype.render=function(n,e){if(this.__b){if(this.__v.__k){var r=document.createElement("div"),o=this.__v.__k[0].__c;this.__v.__k[0]=V(this.__b,r,o.__O=o.__P);}this.__b=null;}var i=e.__a&&k$1(S$1,null,n.fallback);return i&&(i.__u&=-33),[k$1(S$1,null,e.__a?null:n.children),i]};var H=function(n,t,e){if(++e[1]===e[0]&&n.l.delete(t),n.props.revealOrder&&("t"!==n.props.revealOrder[0]||!n.l.size))for(e=n.i;e;){for(;e.length>3;)e.pop()();if(e[1]<e[0])break;n.i=e=e[2];}};(B.prototype=new C$1).__a=function(n){var t=this,e=j(t.__v),r=t.l.get(n);return r[0]++,function(u){var o=function(){t.props.revealOrder?(r.push(u),H(t,n,r)):u();};e?e(o):o();}},B.prototype.render=function(n){this.i=null,this.l=new Map;var t=F$2(n.children);n.revealOrder&&"b"===n.revealOrder[0]&&t.reverse();for(var e=t.length;e--;)this.l.set(t[e],this.i=[1,0,this.i]);return n.children},B.prototype.componentDidUpdate=B.prototype.componentDidMount=function(){var n=this;this.l.forEach(function(t,e){H(n,e,t);});};var q="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,G=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,J=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,K=/[A-Z0-9]/g,Q="undefined"!=typeof document,X=function(n){return ("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/:/fil|che|ra/).test(n)};C$1.prototype.isReactComponent=true,["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(t){Object.defineProperty(C$1.prototype,t,{configurable:true,get:function(){return this["UNSAFE_"+t]},set:function(n){Object.defineProperty(this,t,{configurable:true,writable:true,value:n});}});});var en=l$3.event;l$3.event=function(n){return en&&(n=en(n)),n.persist=function(){},n.isPropagationStopped=function(){return this.cancelBubble},n.isDefaultPrevented=function(){return this.defaultPrevented},n.nativeEvent=n};var un={configurable:true,get:function(){return this.class}},on=l$3.vnode;l$3.vnode=function(n){"string"==typeof n.type&&function(n){var t=n.props,e=n.type,u={},o=-1==e.indexOf("-");for(var i in t){var l=t[i];if(!("value"===i&&"defaultValue"in t&&null==l||Q&&"children"===i&&"noscript"===e||"class"===i||"className"===i)){var f=i.toLowerCase();"defaultValue"===i&&"value"in t&&null==t.value?i="value":"download"===i&&true===l?l="":"translate"===f&&"no"===l?l=false:"o"===f[0]&&"n"===f[1]?"ondoubleclick"===f?i="ondblclick":"onchange"!==f||"input"!==e&&"textarea"!==e||X(t.type)?"onfocus"===f?i="onfocusin":"onblur"===f?i="onfocusout":J.test(i)&&(i=f):f=i="oninput":o&&G.test(i)?i=i.replace(K,"-$&").toLowerCase():null===l&&(l=void 0),"oninput"===f&&u[i=f]&&(i="oninputCapture"),u[i]=l;}}"select"==e&&(u.multiple&&Array.isArray(u.value)&&(u.value=F$2(t.children).forEach(function(n){n.props.selected=-1!=u.value.indexOf(n.props.value);})),null!=u.defaultValue&&(u.value=F$2(t.children).forEach(function(n){n.props.selected=u.multiple?-1!=u.defaultValue.indexOf(n.props.value):u.defaultValue==n.props.value;}))),t.class&&!t.className?(u.class=t.class,Object.defineProperty(u,"className",un)):t.className&&(u.class=u.className=t.className),n.props=u;}(n),n.$$typeof=q,on&&on(n);};var ln=l$3.__r;l$3.__r=function(n){ln&&ln(n),n.__c;};var fn=l$3.diffed;l$3.diffed=function(n){fn&&fn(n);var t=n.props,e=n.__e;null!=e&&"textarea"===n.type&&"value"in t&&t.value!==e.value&&(e.value=null==t.value?"":t.value);};

const css$5 = ".hfmd-btn{display:inline-flex;align-items:center;justify-content:center;gap:0.5rem;flex-shrink:0;white-space:nowrap;box-sizing:border-box;margin:0;border:0;border-radius:calc(var(--radius, 0.625rem) - 2px);background:none;color:inherit;font:inherit;font-size:0.875rem;line-height:1.25rem;font-weight:500;text-decoration:none;cursor:pointer;outline:none;appearance:none;-webkit-tap-highlight-color:transparent;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,box-shadow,opacity;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4,0,0.2,1);}.hfmd-btn svg{pointer-events:none;flex-shrink:0;}.hfmd-btn svg:not([class*=\"size-\"]){width:1rem;height:1rem;}.hfmd-btn:disabled,.hfmd-btn[aria-disabled=\"true\"],.hfmd-btn[data-disabled]{pointer-events:none;opacity:0.5;}.hfmd-btn:focus-visible{border-color:var(--ring);box-shadow:0 0 0 3px color-mix(in oklab,var(--ring) 50%,transparent);}.hfmd-btn[aria-invalid=\"true\"]{border-color:var(--destructive);box-shadow:0 0 0 3px color-mix(in oklab,var(--destructive) 20%,transparent);}.hfmd-btn--default{background-color:var(--primary);color:var(--primary-foreground);box-shadow:0 1px 2px 0 rgb(0 0 0 / 0.05);}.hfmd-btn--default:hover{background-color:color-mix(in oklab,var(--primary) 90%,transparent);}.hfmd-btn--destructive{background-color:var(--destructive);color:#fff;box-shadow:0 1px 2px 0 rgb(0 0 0 / 0.05);}.hfmd-btn--destructive:hover{background-color:color-mix(in oklab,var(--destructive) 90%,transparent);}.hfmd-btn--destructive:focus-visible{box-shadow:0 0 0 3px color-mix(in oklab,var(--destructive) 20%,transparent);}.hfmd-btn--outline{border:1px solid var(--input);background-color:var(--background);color:var(--foreground);box-shadow:0 1px 2px 0 rgb(0 0 0 / 0.05);}.hfmd-btn--outline:hover{background-color:var(--accent);color:var(--accent-foreground);}.hfmd-btn--secondary{background-color:var(--secondary);color:var(--secondary-foreground);box-shadow:0 1px 2px 0 rgb(0 0 0 / 0.05);}.hfmd-btn--secondary:hover{background-color:color-mix(in oklab,var(--secondary) 80%,transparent);}.hfmd-btn--ghost{color:var(--foreground);}.hfmd-btn--ghost:hover{background-color:var(--accent);color:var(--accent-foreground);}.hfmd-btn--link{color:var(--primary);text-underline-offset:4px;}.hfmd-btn--link:hover{text-decoration:underline;}.hfmd-btn--size-default{height:2.25rem;padding:0.5rem 1rem;}.hfmd-btn--size-default:has(>svg){padding-inline:0.75rem;}.hfmd-btn--size-sm{height:2rem;gap:0.375rem;padding-inline:0.75rem;}.hfmd-btn--size-sm:has(>svg){padding-inline:0.625rem;}.hfmd-btn--size-lg{height:2.5rem;padding-inline:1.5rem;}.hfmd-btn--size-lg:has(>svg){padding-inline:1rem;}.hfmd-btn--size-icon{width:2.25rem;height:2.25rem;padding:0;}.hfmd-btn--size-icon-sm{width:2rem;height:2rem;padding:0;}.hfmd-btn--size-icon-lg{width:2.5rem;height:2.5rem;padding:0;}";

GM_addStyle(css$5);
const buttonVariants = {
  variant: {
    default: "hfmd-btn--default",
    destructive: "hfmd-btn--destructive",
    outline: "hfmd-btn--outline",
    secondary: "hfmd-btn--secondary",
    ghost: "hfmd-btn--ghost",
    link: "hfmd-btn--link"
  },
  size: {
    default: "hfmd-btn--size-default",
    sm: "hfmd-btn--size-sm",
    lg: "hfmd-btn--size-lg",
    icon: "hfmd-btn--size-icon",
    "icon-sm": "hfmd-btn--size-icon-sm",
    "icon-lg": "hfmd-btn--size-icon-lg"
  }
};
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
function buttonClass({ variant = "default", size = "default", class: className } = {}) {
  return cn("hfmd-btn", buttonVariants.variant[variant], buttonVariants.size[size], className);
}
function setRef(ref, value) {
  if (typeof ref === "function")
    ref(value);
  else if (ref)
    ref.current = value;
}
function composeRefs(...refs) {
  return (value) => refs.forEach((ref) => setRef(ref, value));
}
function mergeProps(slotProps, childProps) {
  const overrides = {};
  for (const name of Object.keys(slotProps)) {
    const slotValue = slotProps[name];
    const childValue = childProps[name];
    const isHandler = /^on[A-Z]/.test(name);
    if (isHandler) {
      if (typeof slotValue === "function" && typeof childValue === "function") {
        overrides[name] = (...args) => {
          childValue(...args);
          slotValue(...args);
        };
      } else if (typeof slotValue === "function") {
        overrides[name] = slotValue;
      }
    } else if (name === "style") {
      overrides[name] = typeof slotValue === "object" && typeof childValue === "object" ? { ...slotValue, ...childValue } : childValue ?? slotValue;
    }
  }
  return { ...slotProps, ...childProps, ...overrides };
}
const Slot = D(function Slot2({ children, ...slotProps }, ref) {
  const child = F$2(children).find(t$2);
  if (!child)
    return null;
  const childProps = child.props;
  const merged = mergeProps(slotProps, childProps);
  if ("class" in merged || "className" in merged) {
    const combined = cn(slotProps.class ?? slotProps.className, childProps.class ?? childProps.className);
    merged.class = combined;
    merged.className = combined;
  }
  return W$1(child, {
    ...merged,
    ref: composeRefs(ref, child.ref)
  });
});
const Button = D(function Button2({ variant = "default", size = "default", asChild = false, class: classProp, className, type, ...props }, ref) {
  const shared = {
    "data-slot": "button",
    "data-variant": variant,
    "data-size": size,
    class: buttonClass({ variant, size, class: cn(classProp, className) }),
    ...props
  };
  if (asChild) {
    return u$2(Slot, { ref, type, ...shared });
  }
  return u$2("button", { ref, type: type ?? "button", ...shared });
});

const selectors = [
  {
    name: "Recipe Name",
    string: '[data-test-id="recipe-name"]'
  },
  {
    name: "Headline",
    string: '[data-test-id="recipe-headline"]'
  },
  {
    name: "Allergens",
    string: '[data-test-id="recipe-allergens"] ul li'
  },
  {
    name: "Description",
    string: '[data-test-id="recipe-description-text"]'
  },
  {
    name: "Nutrition per 100g button",
    string: '[aria-pressed="true"] [data-translation-id="recipe-detail.recipe-detail.per-100g"]'
  },
  {
    name: "Shipped Ingredients",
    string: '[data-test-id="ingredient-item-shipped"]'
  },
  {
    name: "Not Shipped Ingredients",
    string: '[data-test-id="ingredient-item-not-shipped"]'
  },
  {
    name: "Instructions",
    string: '[data-test-id="instruction-step"]'
  },
  {
    name: "Recipe Metrics",
    string: '[data-test-id="recipe-metrics"] > div'
  },
  {
    name: "Nutrition Step",
    string: '[data-test-id="nutrition-step"]'
  },
  {
    name: "Recipe PDF",
    string: '[data-test-id="recipe-pdf"]'
  },
  {
    name: "Utensils List Item",
    string: '[data-test-id="utensils-list-item"]'
  }
];
function getSelector(selectorName) {
  const entry = selectors.find((selector) => selector.name === selectorName);
  return entry.string;
}

const initialStatus = selectors.map((selector) => ({
  name: selector.name,
  found: false
}));
const selectorsStatus = y$1(initialStatus);

const DEBOUNCE_MS = 100;
function observeReadiness() {
  let timeout;
  const observer = new MutationObserver(() => {
    clearTimeout(timeout);
    timeout = setTimeout(() => look(() => {
      clearTimeout(timeout);
      observer.disconnect();
    }), DEBOUNCE_MS);
  });
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
  look(() => {
    clearTimeout(timeout);
    observer.disconnect();
  });
}
function look(exit = () => {
}) {
  let foundSomething = false;
  const updated = selectorsStatus.value.map((status2) => {
    if (status2.found) {
      return status2;
    }
    const selectorString = getSelector(status2.name);
    const didFind = document.querySelector(selectorString);
    if (!didFind) {
      return status2;
    }
    foundSomething = true;
    return {
      ...status2,
      found: true
    };
  });
  if (foundSomething) {
    selectorsStatus.value = updated;
  }
  if (updated.every((status2) => status2.found)) {
    exit();
    status.value = {
      state: "ready"
    };
  }
}

/**
 * @license lucide-preact v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();

/**
 * @license lucide-preact v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


function toLucideIconData(iconName, iconNode, aliases = []) {
  {
    throw new Error("[lucide]: iconNode is required when icon name is used");
  }
}

/**
 * @license lucide-preact v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const toCamelCase = (string) => {
  let out = "";
  let upperNext = false;
  for (const ch of string) {
    if (ch === "-" || ch === "_" || ch <= " ") {
      upperNext = out.length > 0;
      continue;
    }
    if (out.length === 0) {
      out += ch.toLowerCase();
    } else {
      out += upperNext ? ch.toUpperCase() : ch;
    }
    upperNext = false;
  }
  return out;
};

/**
 * @license lucide-preact v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};

/**
 * @license lucide-preact v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};

/**
 * @license lucide-preact v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


function isDefined(value) {
  return value !== null && value !== void 0;
}
function buildLucideIconNode(icon, params = {}) {
  const attributeNames = params.attributeNames ?? {};
  const getAttributeName = (attributeName) => attributeNames[attributeName] ?? attributeName;
  const viewBoxWidth = icon.size ?? icon.width ?? defaultAttributes["width"];
  const viewBoxHeight = icon.size ?? icon.height ?? defaultAttributes["height"];
  const aliasClassNames = icon.aliases?.filter((alias) => typeof alias === "string" && alias.trim() !== "").map((alias) => `lucide-${alias}`) ?? [];
  const iconClassNames = [...icon.name ? [`lucide-${icon.name}`] : [], ...aliasClassNames];
  const classNamesFromClassName = params.className?.split(" ").filter(Boolean) ?? [];
  const className = params.includeDefaultClasses === false ? mergeClasses(...classNamesFromClassName) : mergeClasses("lucide", ...iconClassNames, ...classNamesFromClassName);
  const calculatedStrokeWidth = params.absoluteStrokeWidth ? Number(params.strokeWidth ?? defaultAttributes["stroke-width"]) * Number(icon.size ?? icon.width ?? defaultAttributes["width"]) / Number(params.size ?? params.width ?? defaultAttributes["width"]) : params.strokeWidth ?? defaultAttributes["stroke-width"];
  const attributes = {
    ...Object.entries(defaultAttributes).reduce((attrs, [attrName, value]) => {
      attrs[getAttributeName(attrName)] = value;
      return attrs;
    }, {}),
    ..."color" in params && params.color && {
      [getAttributeName("stroke")]: params.color
    },
    ..."size" in params && isDefined(params.size) && {
      [getAttributeName("width")]: params.size,
      [getAttributeName("height")]: params.size
    },
    ..."width" in params && isDefined(params.width) && {
      [getAttributeName("width")]: params.width
    },
    ..."height" in params && isDefined(params.height) && {
      [getAttributeName("height")]: params.height
    },
    [getAttributeName("stroke-width")]: calculatedStrokeWidth,
    ...className && {
      [getAttributeName("class")]: className
    },
    [getAttributeName("viewBox")]: `0 0 ${viewBoxWidth} ${viewBoxHeight}`,
    ...params.hasA11yProp === false ? {
      [getAttributeName("aria-hidden")]: "true"
    } : {},
    ..."attributes" in params && params.attributes
  };
  return [
    "svg",
    attributes,
    icon.node.map((child) => {
      const [name, attrs, children] = child;
      const nextAttrs = params.nonScalingStroke ? { [getAttributeName("vector-effect")]: "non-scaling-stroke", ...attrs } : attrs;
      return children ? [name, nextAttrs, children] : [name, nextAttrs];
    })
  ];
}

/**
 * @license lucide-preact v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
  return false;
};

/**
 * @license lucide-preact v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const LucideContext = X$1({
  size: 24,
  color: "currentColor",
  strokeWidth: 2,
  absoluteStrokeWidth: false,
  nonScalingStroke: false,
  class: ""
});
const useLucideContext = () => x$2(LucideContext);

/**
 * @license lucide-preact v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Icon = ({
  color,
  size,
  width,
  height,
  strokeWidth,
  absoluteStrokeWidth,
  nonScalingStroke,
  children,
  iconNode = [],
  icon = {
    node: iconNode,
    aliases: [],
    size: 24
  },
  class: classes = "",
  ...rest
}) => {
  const {
    size: contextSize = 24,
    strokeWidth: contextStrokeWidth = 2,
    absoluteStrokeWidth: contextAbsoluteStrokeWidth = false,
    nonScalingStroke: contextNonScalingStroke = false,
    color: contextColor = "currentColor",
    class: contextClass = ""
  } = useLucideContext() ?? {};
  const [name, svgAttributes, builtIconNode = []] = buildLucideIconNode(icon, {
    color: color ?? contextColor,
    width: width ?? size ?? contextSize,
    height: height ?? size ?? contextSize,
    strokeWidth: strokeWidth ?? contextStrokeWidth,
    absoluteStrokeWidth: absoluteStrokeWidth ?? contextAbsoluteStrokeWidth,
    nonScalingStroke: nonScalingStroke ?? contextNonScalingStroke,
    className: mergeClasses(contextClass, classes),
    hasA11yProp: Boolean(children) || hasA11yProp(rest),
    attributes: rest
  });
  return k$1(name, { ...svgAttributes }, [
    ...builtIconNode.map(([tag, attrs]) => k$1(tag, attrs)),
    ...F$2(children)
  ]);
};

/**
 * @license lucide-preact v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


function createLucideIcon(iconDataOrName, iconNode, aliases = []) {
  const iconData = typeof iconDataOrName === "string" ? toLucideIconData(iconDataOrName, iconNode, aliases) : iconDataOrName;
  const Component = ({ class: classes = "", className = "", children, ...props }) => k$1(
    Icon,
    {
      ...props,
      icon: iconData,
      class: mergeClasses(classes, className)
    },
    children
  );
  if (iconData.name) {
    Component.displayName = toPascalCase(iconData.name);
  }
  return Component;
}

/**
 * @license lucide-preact v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const iconData$4 = {
  name: "check",
  size: 24,
  node: [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]
};
const Check = createLucideIcon(iconData$4);

/**
 * @license lucide-preact v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const iconData$3 = {
  name: "circle-alert",
  size: 24,
  node: [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
    ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
  ],
  aliases: ["alert-circle"]
};
const CircleAlert = createLucideIcon(iconData$3);

/**
 * @license lucide-preact v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const iconData$2 = {
  name: "file-down",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
        key: "1oefj6"
      }
    ],
    ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
    ["path", { d: "M12 18v-6", key: "17g6i2" }],
    ["path", { d: "m9 15 3 3 3-3", key: "1npd3o" }]
  ]
};
const FileDown = createLucideIcon(iconData$2);

/**
 * @license lucide-preact v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const iconData$1 = {
  name: "loader",
  size: 24,
  node: [
    ["path", { d: "M12 2v4", key: "3427ic" }],
    ["path", { d: "m16.2 7.8 2.9-2.9", key: "r700ao" }],
    ["path", { d: "M18 12h4", key: "wj9ykh" }],
    ["path", { d: "m16.2 16.2 2.9 2.9", key: "1bxg5t" }],
    ["path", { d: "M12 18v4", key: "jadmvz" }],
    ["path", { d: "m4.9 19.1 2.9-2.9", key: "bwix9q" }],
    ["path", { d: "M2 12h4", key: "j09sii" }],
    ["path", { d: "m4.9 4.9 2.9 2.9", key: "giyufr" }]
  ]
};
const Loader = createLucideIcon(iconData$1);

/**
 * @license lucide-preact v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const iconData = {
  name: "repeat",
  size: 24,
  node: [
    ["path", { d: "m17 2 4 4-4 4", key: "nntrym" }],
    ["path", { d: "M3 11v-1a4 4 0 0 1 4-4h14", key: "84bu3i" }],
    ["path", { d: "m7 22-4-4 4-4", key: "1wqhfi" }],
    ["path", { d: "M21 13v1a4 4 0 0 1-4 4H3", key: "1rx37r" }]
  ]
};
const Repeat = createLucideIcon(iconData);

const css$4 = ".selectors-status{padding:0;margin:0;}.selectors-status li{list-style:none;}.selectors-status{font-size:.9rem;margin-block:1lh;color:gray;}";

GM_addStyle(css$4);
function Loading() {
  return u$2("div", { class: "hellofresh-md-loading", children: [u$2("div", { children: "Loading..." }), selectorsStatus.value.length > 0 && u$2(S$1, { children: [u$2("ul", { class: "selectors-status", children: selectorsStatus.value.filter((selectorStatus) => !selectorStatus.found).map((selectorStatus) => u$2("li", { children: [selectorStatus.name, ": ", selectorStatus.found ? "found" : "not found"] }, selectorStatus.name)) }), u$2(Button, { variant: "secondary", onClick: () => look(), children: [u$2(Repeat, {}), "Check again"] })] })] });
}

function Error$1() {
  return u$2("div", { children: [u$2("div", { children: "Error" }), u$2("div", { children: status.value.message || "Error occurred" })] });
}

function Ready() {
  return u$2("div", { children: "Ready to scrape" });
}

function cleanText(string) {
  return string.trim();
}
function arrayToMarkdownList(array, indent = 0) {
  return array.map((item) => {
    const indentString = Array(indent).fill(" ").join("");
    return `${indentString}- ${item}`;
  }).join("\n");
}
function hasItems(array) {
  return array.length > 0;
}
function hasEntries(record) {
  const keys = Object.keys(record);
  return hasItems(keys);
}
const sleep = async (delay = 1e3) => {
  await new Promise((resolve) => setTimeout(resolve, delay));
};

const NUTRITION_MAP = {
  // "Valor energético (kJ)": "",
  "Valor energ\xE9tico (kcal)": "kcal",
  "Grasas": "fat_g",
  "de las cuales saturadas": "fat_saturated_g",
  "Carbohidratos": "carbs_g",
  "de los cuales az\xFAcares": "sugar_g",
  "Fibra": "fiber_g",
  "Prote\xEDnas": "protein_g",
  "Sodio": "sodium_g"
};
function nutritionEntryNodeToEntry(entryNode) {
  const spans = entryNode.querySelectorAll("span");
  const [originalKey, value] = Array.from(spans).map((n) => cleanText(n.textContent));
  if (!originalKey || !value) {
    return null;
  }
  const correctedKey = NUTRITION_MAP[originalKey];
  if (!correctedKey) {
    return null;
  }
  return [correctedKey, value];
}
function scrapeNutrition() {
  const selector = getSelector("Nutrition Step");
  const entryNodes = document.querySelectorAll(selector);
  const entries = Array.from(entryNodes).map(nutritionEntryNodeToEntry).filter((entry) => entry !== null);
  return Object.fromEntries(entries);
}

const METRICS_MAP = {
  "Calor\xEDas": "calories",
  "Prote\xEDnas": "protein",
  "Tiempo total": "time",
  "Difficulty": "difficulty"
};
function metricsEntryNodeToEntry(entryNode) {
  const spans = entryNode.querySelectorAll("span");
  const [originalKey, blank, value] = Array.from(spans).map((n) => cleanText(n.textContent));
  if (!originalKey || !value) {
    return null;
  }
  const correctedKey = METRICS_MAP[originalKey];
  if (!correctedKey) {
    return null;
  }
  return [correctedKey, value];
}
function scrapeMetrics() {
  const selector = getSelector("Recipe Metrics");
  const entryNodes = document.querySelectorAll(selector);
  const entries = Array.from(entryNodes).map(metricsEntryNodeToEntry).filter((entry) => entry !== null);
  return Object.fromEntries(entries);
}

function scrapeDescription() {
  const selector = getSelector("Description");
  const descriptionNode = document.querySelector(selector);
  if (!descriptionNode) {
    return {
      status: "error",
      data: "Description node not found"
    };
  }
  const description = cleanText(descriptionNode.textContent);
  if (description.length < 1) {
    return {
      status: "error",
      data: "Description is empty"
    };
  }
  return {
    status: "success",
    data: description
  };
}

function ingredientsEntryNodeToEntry(entryNode) {
  const spans = entryNode.querySelectorAll("p");
  const [quantity, name] = Array.from(spans).map((n) => cleanText(n.textContent));
  if (!name || !quantity) {
    return null;
  }
  return {
    name,
    quantity
  };
}
function scrapeIngredients() {
  const selector1 = getSelector("Shipped Ingredients");
  const selector2 = getSelector("Not Shipped Ingredients");
  const entryNodes1 = document.querySelectorAll(selector1);
  const entryNodes2 = document.querySelectorAll(selector2);
  const entryNodes = [...entryNodes1, ...entryNodes2];
  return Array.from(entryNodes).map(ingredientsEntryNodeToEntry).filter((amount) => amount !== null);
}

function scrapeInstructionsHtml() {
  const selector = getSelector("Instructions");
  const entryNodes = document.querySelectorAll(selector);
  if (entryNodes.length < 1) {
    return {
      status: "error",
      data: "No instruction steps found"
    };
  }
  return {
    status: "success",
    data: Array.from(entryNodes).map((node) => node.innerHTML)
  };
}

function allergenEntryNodeToEntry(entryNode) {
  const spans = entryNode.querySelectorAll("span");
  if (spans.length < 1) {
    return null;
  }
  const utensilNode = spans[0];
  const allergen = cleanText(utensilNode.textContent);
  if (allergen.length < 1) {
    return null;
  }
  return allergen;
}
function scrapeAllergens() {
  const selector = getSelector("Allergens");
  const entryNodes = document.querySelectorAll(selector);
  return Array.from(entryNodes).map(allergenEntryNodeToEntry).filter((entry) => entry !== null);
}

function utensilEntryNodeToEntry(entryNode) {
  const spans = entryNode.querySelectorAll("span");
  if (spans.length < 2) {
    return null;
  }
  const utensilNode = spans[1];
  return cleanText(utensilNode.textContent);
}
function scrapeUtensils() {
  const selector = getSelector("Utensils List Item");
  const entryNodes = document.querySelectorAll(selector);
  return Array.from(entryNodes).map(utensilEntryNodeToEntry).filter((entry) => !!entry);
}

function scrapePdfUrl() {
  const selector = getSelector("Recipe PDF");
  const pdfUrl = document.querySelector(selector);
  if (!pdfUrl) {
    return {
      status: "error",
      data: "PDF URL not found"
    };
  }
  const url = pdfUrl.getAttribute("href");
  if (!url) {
    return {
      status: "error",
      data: "PDF URL is empty"
    };
  }
  return {
    status: "success",
    data: url
  };
}

function scrapeName() {
  const selector = getSelector("Recipe Name");
  const recipeNameNode = document.querySelector(selector);
  if (!recipeNameNode) {
    return {
      status: "error",
      data: "Recipe name not found"
    };
  }
  const recipeName = cleanText(recipeNameNode.textContent);
  if (!recipeName) {
    return {
      status: "error",
      data: "Recipe name is empty"
    };
  }
  return {
    status: "success",
    data: recipeName
  };
}

function scrapeHeadline() {
  const selector = getSelector("Headline");
  const headlineNode = document.querySelector(selector);
  if (!headlineNode) {
    return {
      status: "error",
      data: "Headline not found"
    };
  }
  const headline = cleanText(headlineNode.textContent);
  if (!headline) {
    return {
      status: "error",
      data: "Headline is empty"
    };
  }
  return {
    status: "success",
    data: headline
  };
}

function scrape() {
  return {
    url: location.href,
    name: scrapeName(),
    headline: scrapeHeadline(),
    nutrition: scrapeNutrition(),
    description: scrapeDescription(),
    pdfUrl: scrapePdfUrl(),
    metrics: scrapeMetrics(),
    ingredients: scrapeIngredients(),
    utensils: scrapeUtensils(),
    instructionsHtml: scrapeInstructionsHtml(),
    allergens: scrapeAllergens()
  };
}

const css$3 = ".scrape-warnings{padding:0;margin:0;}.scrape-warnings li{list-style:none;}.scrape-warnings{font-size:.9rem;padding-block:1lh;color:gray;}";

function extend(destination) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) destination[key] = source[key];
    }
  }
  return destination;
}
function repeat(character, count) {
  return Array(count + 1).join(character);
}
function trimLeadingNewlines(string) {
  return string.replace(/^\n*/, '');
}
function trimTrailingNewlines(string) {
  // avoid match-at-end regexp bottleneck, see #370
  var indexEnd = string.length;
  while (indexEnd > 0 && string[indexEnd - 1] === '\n') indexEnd--;
  return string.substring(0, indexEnd);
}
function trimNewlines(string) {
  return trimTrailingNewlines(trimLeadingNewlines(string));
}
var blockElements = ['ADDRESS', 'ARTICLE', 'ASIDE', 'AUDIO', 'BLOCKQUOTE', 'BODY', 'CANVAS', 'CENTER', 'DD', 'DIR', 'DIV', 'DL', 'DT', 'FIELDSET', 'FIGCAPTION', 'FIGURE', 'FOOTER', 'FORM', 'FRAMESET', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'HEADER', 'HGROUP', 'HR', 'HTML', 'ISINDEX', 'LI', 'MAIN', 'MENU', 'NAV', 'NOFRAMES', 'NOSCRIPT', 'OL', 'OUTPUT', 'P', 'PRE', 'SECTION', 'TABLE', 'TBODY', 'TD', 'TFOOT', 'TH', 'THEAD', 'TR', 'UL'];
function isBlock(node) {
  return is(node, blockElements);
}
var voidElements = ['AREA', 'BASE', 'BR', 'COL', 'COMMAND', 'EMBED', 'HR', 'IMG', 'INPUT', 'KEYGEN', 'LINK', 'META', 'PARAM', 'SOURCE', 'TRACK', 'WBR'];
function isVoid(node) {
  return is(node, voidElements);
}
function hasVoid(node) {
  return has(node, voidElements);
}
var meaningfulWhenBlankElements = ['A', 'TABLE', 'THEAD', 'TBODY', 'TFOOT', 'TH', 'TD', 'IFRAME', 'SCRIPT', 'AUDIO', 'VIDEO'];
function isMeaningfulWhenBlank(node) {
  return is(node, meaningfulWhenBlankElements);
}
function hasMeaningfulWhenBlank(node) {
  return has(node, meaningfulWhenBlankElements);
}
function is(node, tagNames) {
  return tagNames.indexOf(node.nodeName) >= 0;
}
function has(node, tagNames) {
  return node.getElementsByTagName && tagNames.some(function (tagName) {
    return node.getElementsByTagName(tagName).length;
  });
}
var markdownEscapes = [[/\\/g, '\\\\'], [/\*/g, '\\*'], [/^-/g, '\\-'], [/^\+ /g, '\\+ '], [/^(=+)/g, '\\$1'], [/^(#{1,6}) /g, '\\$1 '], [/`/g, '\\`'], [/^~~~/g, '\\~~~'], [/\[/g, '\\['], [/\]/g, '\\]'], [/^>/g, '\\>'], [/_/g, '\\_'], [/^(\d+)\. /g, '$1\\. ']];
function escapeMarkdown(string) {
  return markdownEscapes.reduce(function (accumulator, escape) {
    return accumulator.replace(escape[0], escape[1]);
  }, string);
}

var rules = {};
rules.paragraph = {
  filter: 'p',
  replacement: function (content) {
    return '\n\n' + content + '\n\n';
  }
};
rules.lineBreak = {
  filter: 'br',
  replacement: function (content, node, options) {
    return options.br + '\n';
  }
};
rules.heading = {
  filter: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
  replacement: function (content, node, options) {
    var hLevel = Number(node.nodeName.charAt(1));
    if (options.headingStyle === 'setext' && hLevel < 3) {
      var underline = repeat(hLevel === 1 ? '=' : '-', content.length);
      return '\n\n' + content + '\n' + underline + '\n\n';
    } else {
      return '\n\n' + repeat('#', hLevel) + ' ' + content + '\n\n';
    }
  }
};
rules.blockquote = {
  filter: 'blockquote',
  replacement: function (content) {
    content = trimNewlines(content).replace(/^/gm, '> ');
    return '\n\n' + content + '\n\n';
  }
};
rules.list = {
  filter: ['ul', 'ol'],
  replacement: function (content, node) {
    var parent = node.parentNode;
    if (parent.nodeName === 'LI' && parent.lastElementChild === node) {
      return '\n' + content;
    } else {
      return '\n\n' + content + '\n\n';
    }
  }
};
rules.listItem = {
  filter: 'li',
  replacement: function (content, node, options) {
    var prefix = options.bulletListMarker + '   ';
    var parent = node.parentNode;
    if (parent.nodeName === 'OL') {
      var start = parent.getAttribute('start');
      var index = Array.prototype.indexOf.call(parent.children, node);
      prefix = (start ? Number(start) + index : index + 1) + '.  ';
    }
    var isParagraph = /\n$/.test(content);
    content = trimNewlines(content) + (isParagraph ? '\n' : '');
    content = content.replace(/\n/gm, '\n' + ' '.repeat(prefix.length)); // indent
    return prefix + content + (node.nextSibling ? '\n' : '');
  }
};
rules.indentedCodeBlock = {
  filter: function (node, options) {
    return options.codeBlockStyle === 'indented' && node.nodeName === 'PRE' && node.firstChild && node.firstChild.nodeName === 'CODE';
  },
  replacement: function (content, node, options) {
    return '\n\n    ' + node.firstChild.textContent.replace(/\n/g, '\n    ') + '\n\n';
  }
};
rules.fencedCodeBlock = {
  filter: function (node, options) {
    return options.codeBlockStyle === 'fenced' && node.nodeName === 'PRE' && node.firstChild && node.firstChild.nodeName === 'CODE';
  },
  replacement: function (content, node, options) {
    var className = node.firstChild.getAttribute('class') || '';
    var language = (className.match(/language-(\S+)/) || [null, ''])[1];
    var code = node.firstChild.textContent;
    var fenceChar = options.fence.charAt(0);
    var fenceSize = 3;
    var fenceInCodeRegex = new RegExp('^' + fenceChar + '{3,}', 'gm');
    var match;
    while (match = fenceInCodeRegex.exec(code)) {
      if (match[0].length >= fenceSize) {
        fenceSize = match[0].length + 1;
      }
    }
    var fence = repeat(fenceChar, fenceSize);
    return '\n\n' + fence + language + '\n' + code.replace(/\n$/, '') + '\n' + fence + '\n\n';
  }
};
rules.horizontalRule = {
  filter: 'hr',
  replacement: function (content, node, options) {
    return '\n\n' + options.hr + '\n\n';
  }
};
rules.inlineLink = {
  filter: function (node, options) {
    return options.linkStyle === 'inlined' && node.nodeName === 'A' && node.getAttribute('href');
  },
  replacement: function (content, node) {
    var href = escapeLinkDestination(node.getAttribute('href'));
    var title = escapeLinkTitle(cleanAttribute(node.getAttribute('title')));
    var titlePart = title ? ' "' + title + '"' : '';
    return '[' + content + '](' + href + titlePart + ')';
  }
};
rules.referenceLink = {
  filter: function (node, options) {
    return options.linkStyle === 'referenced' && node.nodeName === 'A' && node.getAttribute('href');
  },
  replacement: function (content, node, options) {
    var href = escapeLinkDestination(node.getAttribute('href'));
    var title = cleanAttribute(node.getAttribute('title'));
    if (title) title = ' "' + escapeLinkTitle(title) + '"';
    var replacement;
    var reference;
    switch (options.linkReferenceStyle) {
      case 'collapsed':
        replacement = '[' + content + '][]';
        reference = '[' + content + ']: ' + href + title;
        break;
      case 'shortcut':
        replacement = '[' + content + ']';
        reference = '[' + content + ']: ' + href + title;
        break;
      default:
        var id = this.references.length + 1;
        replacement = '[' + content + '][' + id + ']';
        reference = '[' + id + ']: ' + href + title;
    }
    this.references.push(reference);
    return replacement;
  },
  references: [],
  append: function (options) {
    var references = '';
    if (this.references.length) {
      references = '\n\n' + this.references.join('\n') + '\n\n';
      this.references = []; // Reset references
    }
    return references;
  }
};
rules.emphasis = {
  filter: ['em', 'i'],
  replacement: function (content, node, options) {
    if (!content.trim()) return '';
    return options.emDelimiter + content + options.emDelimiter;
  }
};
rules.strong = {
  filter: ['strong', 'b'],
  replacement: function (content, node, options) {
    if (!content.trim()) return '';
    return options.strongDelimiter + content + options.strongDelimiter;
  }
};
rules.code = {
  filter: function (node) {
    var hasSiblings = node.previousSibling || node.nextSibling;
    var isCodeBlock = node.parentNode.nodeName === 'PRE' && !hasSiblings;
    return node.nodeName === 'CODE' && !isCodeBlock;
  },
  replacement: function (content) {
    if (!content) return '';
    content = content.replace(/\r?\n|\r/g, ' ');
    var extraSpace = /^`|^ .*?[^ ].* $|`$/.test(content) ? ' ' : '';
    var delimiter = '`';
    var matches = content.match(/`+/gm) || [];
    while (matches.indexOf(delimiter) !== -1) delimiter = delimiter + '`';
    return delimiter + extraSpace + content + extraSpace + delimiter;
  }
};
rules.image = {
  filter: 'img',
  replacement: function (content, node) {
    var alt = escapeMarkdown(cleanAttribute(node.getAttribute('alt')));
    var src = escapeLinkDestination(node.getAttribute('src') || '');
    var title = cleanAttribute(node.getAttribute('title'));
    var titlePart = title ? ' "' + escapeLinkTitle(title) + '"' : '';
    return src ? '![' + alt + ']' + '(' + src + titlePart + ')' : '';
  }
};
function cleanAttribute(attribute) {
  return attribute ? attribute.replace(/(\n+\s*)+/g, '\n') : '';
}
function escapeLinkDestination(destination) {
  var escaped = destination.replace(/([<>()])/g, '\\$1');
  return escaped.indexOf(' ') >= 0 ? '<' + escaped + '>' : escaped;
}
function escapeLinkTitle(title) {
  return title.replace(/"/g, '\\"');
}

/**
 * Manages a collection of rules used to convert HTML to Markdown
 */

function Rules(options) {
  this.options = options;
  this._keep = [];
  this._remove = [];
  this.blankRule = {
    replacement: options.blankReplacement
  };
  this.keepReplacement = options.keepReplacement;
  this.defaultRule = {
    replacement: options.defaultReplacement
  };
  this.array = [];
  for (var key in options.rules) this.array.push(options.rules[key]);
}
Rules.prototype = {
  add: function (key, rule) {
    this.array.unshift(rule);
  },
  keep: function (filter) {
    this._keep.unshift({
      filter: filter,
      replacement: this.keepReplacement
    });
  },
  remove: function (filter) {
    this._remove.unshift({
      filter: filter,
      replacement: function () {
        return '';
      }
    });
  },
  forNode: function (node) {
    if (node.isBlank) return this.blankRule;
    var rule;
    if (rule = findRule(this.array, node, this.options)) return rule;
    if (rule = findRule(this._keep, node, this.options)) return rule;
    if (rule = findRule(this._remove, node, this.options)) return rule;
    return this.defaultRule;
  },
  forEach: function (fn) {
    for (var i = 0; i < this.array.length; i++) fn(this.array[i], i);
  }
};
function findRule(rules, node, options) {
  for (var i = 0; i < rules.length; i++) {
    var rule = rules[i];
    if (filterValue(rule, node, options)) return rule;
  }
  return undefined;
}
function filterValue(rule, node, options) {
  var filter = rule.filter;
  if (typeof filter === 'string') {
    if (filter === node.nodeName.toLowerCase()) return true;
  } else if (Array.isArray(filter)) {
    if (filter.indexOf(node.nodeName.toLowerCase()) > -1) return true;
  } else if (typeof filter === 'function') {
    if (filter.call(rule, node, options)) return true;
  } else {
    throw new TypeError('`filter` needs to be a string, array, or function');
  }
}

/**
 * The collapseWhitespace function is adapted from collapse-whitespace
 * by Luc Thevenard.
 *
 * The MIT License (MIT)
 *
 * Copyright (c) 2014 Luc Thevenard <lucthevenard@gmail.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * collapseWhitespace(options) removes extraneous whitespace from an the given element.
 *
 * @param {Object} options
 */
function collapseWhitespace(options) {
  var element = options.element;
  var isBlock = options.isBlock;
  var isVoid = options.isVoid;
  var isPre = options.isPre || function (node) {
    return node.nodeName === 'PRE';
  };
  if (!element.firstChild || isPre(element)) return;
  var prevText = null;
  var keepLeadingWs = false;
  var prev = null;
  var node = next(prev, element, isPre);
  while (node !== element) {
    if (node.nodeType === 3 || node.nodeType === 4) {
      // Node.TEXT_NODE or Node.CDATA_SECTION_NODE
      var text = node.data.replace(/[ \r\n\t]+/g, ' ');
      if ((!prevText || / $/.test(prevText.data)) && !keepLeadingWs && text[0] === ' ') {
        text = text.substr(1);
      }

      // `text` might be empty at this point.
      if (!text) {
        node = remove(node);
        continue;
      }
      node.data = text;
      prevText = node;
    } else if (node.nodeType === 1) {
      // Node.ELEMENT_NODE
      if (isBlock(node) || node.nodeName === 'BR') {
        if (prevText) {
          prevText.data = prevText.data.replace(/ $/, '');
        }
        prevText = null;
        keepLeadingWs = false;
      } else if (isVoid(node) || isPre(node)) {
        // Avoid trimming space around non-block, non-BR void elements and inline PRE.
        prevText = null;
        keepLeadingWs = true;
      } else if (prevText) {
        // Drop protection if set previously.
        keepLeadingWs = false;
      }
    } else {
      node = remove(node);
      continue;
    }
    var nextNode = next(prev, node, isPre);
    prev = node;
    node = nextNode;
  }
  if (prevText) {
    prevText.data = prevText.data.replace(/ $/, '');
    if (!prevText.data) {
      remove(prevText);
    }
  }
}

/**
 * remove(node) removes the given node from the DOM and returns the
 * next node in the sequence.
 *
 * @param {Node} node
 * @return {Node} node
 */
function remove(node) {
  var next = node.nextSibling || node.parentNode;
  node.parentNode.removeChild(node);
  return next;
}

/**
 * next(prev, current, isPre) returns the next node in the sequence, given the
 * current and previous nodes.
 *
 * @param {Node} prev
 * @param {Node} current
 * @param {Function} isPre
 * @return {Node}
 */
function next(prev, current, isPre) {
  if (prev && prev.parentNode === current || isPre(current)) {
    return current.nextSibling || current.parentNode;
  }
  return current.firstChild || current.nextSibling || current.parentNode;
}

/*
 * Set up window for Node.js
 */

var root = typeof window !== 'undefined' ? window : {};

/*
 * Parsing HTML strings
 */

function canParseHTMLNatively() {
  var Parser = root.DOMParser;
  var canParse = false;

  // Adapted from https://gist.github.com/1129031
  // Firefox/Opera/IE throw errors on unsupported types
  try {
    // WebKit returns null on unsupported types
    if (new Parser().parseFromString('', 'text/html')) {
      canParse = true;
    }
  } catch (e) {}
  return canParse;
}
function createHTMLParser() {
  var Parser = function () {};
  {
    if (shouldUseActiveX()) {
      Parser.prototype.parseFromString = function (string) {
        var doc = new window.ActiveXObject('htmlfile');
        doc.designMode = 'on'; // disable on-page scripts
        doc.open();
        doc.write(string);
        doc.close();
        return doc;
      };
    } else {
      Parser.prototype.parseFromString = function (string) {
        var doc = document.implementation.createHTMLDocument('');
        doc.open();
        doc.write(string);
        doc.close();
        return doc;
      };
    }
  }
  return Parser;
}
function shouldUseActiveX() {
  var useActiveX = false;
  try {
    document.implementation.createHTMLDocument('').open();
  } catch (e) {
    if (root.ActiveXObject) useActiveX = true;
  }
  return useActiveX;
}
var HTMLParser = canParseHTMLNatively() ? root.DOMParser : createHTMLParser();

function RootNode(input, options) {
  var root;
  if (typeof input === 'string') {
    var doc = htmlParser().parseFromString(
    // DOM parsers arrange elements in the <head> and <body>.
    // Wrapping in a custom element ensures elements are reliably arranged in
    // a single element.
    '<x-turndown id="turndown-root">' + input + '</x-turndown>', 'text/html');
    root = doc.getElementById('turndown-root');
  } else {
    root = input.cloneNode(true);
  }
  collapseWhitespace({
    element: root,
    isBlock: isBlock,
    isVoid: isVoid,
    isPre: options.preformattedCode ? isPreOrCode : null
  });
  return root;
}
var _htmlParser;
function htmlParser() {
  _htmlParser = _htmlParser || new HTMLParser();
  return _htmlParser;
}
function isPreOrCode(node) {
  return node.nodeName === 'PRE' || node.nodeName === 'CODE';
}

function Node(node, options) {
  node.isBlock = isBlock(node);
  node.isCode = node.nodeName === 'CODE' || node.parentNode.isCode;
  node.isBlank = isBlank(node);
  node.flankingWhitespace = flankingWhitespace(node, options);
  return node;
}
function isBlank(node) {
  return !isVoid(node) && !isMeaningfulWhenBlank(node) && /^\s*$/i.test(node.textContent) && !hasVoid(node) && !hasMeaningfulWhenBlank(node);
}
function flankingWhitespace(node, options) {
  if (node.isBlock || options.preformattedCode && node.isCode) {
    return {
      leading: '',
      trailing: ''
    };
  }
  var edges = edgeWhitespace(node.textContent);

  // abandon leading ASCII WS if left-flanked by ASCII WS
  if (edges.leadingAscii && isFlankedByWhitespace('left', node, options)) {
    edges.leading = edges.leadingNonAscii;
  }

  // abandon trailing ASCII WS if right-flanked by ASCII WS
  if (edges.trailingAscii && isFlankedByWhitespace('right', node, options)) {
    edges.trailing = edges.trailingNonAscii;
  }
  return {
    leading: edges.leading,
    trailing: edges.trailing
  };
}
function edgeWhitespace(string) {
  var m = string.match(/^(([ \t\r\n]*)(\s*))(?:(?=\S)[\s\S]*\S)?((\s*?)([ \t\r\n]*))$/);
  return {
    leading: m[1],
    // whole string for whitespace-only strings
    leadingAscii: m[2],
    leadingNonAscii: m[3],
    trailing: m[4],
    // empty for whitespace-only strings
    trailingNonAscii: m[5],
    trailingAscii: m[6]
  };
}
function isFlankedByWhitespace(side, node, options) {
  var sibling;
  var regExp;
  var isFlanked;
  if (side === 'left') {
    sibling = node.previousSibling;
    regExp = / $/;
  } else {
    sibling = node.nextSibling;
    regExp = /^ /;
  }
  if (sibling) {
    if (sibling.nodeType === 3) {
      isFlanked = regExp.test(sibling.nodeValue);
    } else if (options.preformattedCode && sibling.nodeName === 'CODE') {
      isFlanked = false;
    } else if (sibling.nodeType === 1 && !isBlock(sibling)) {
      isFlanked = regExp.test(sibling.textContent);
    }
  }
  return isFlanked;
}

var reduce = Array.prototype.reduce;
function TurndownService(options) {
  if (!(this instanceof TurndownService)) return new TurndownService(options);
  var defaults = {
    rules: rules,
    headingStyle: 'setext',
    hr: '* * *',
    bulletListMarker: '*',
    codeBlockStyle: 'indented',
    fence: '```',
    emDelimiter: '_',
    strongDelimiter: '**',
    linkStyle: 'inlined',
    linkReferenceStyle: 'full',
    br: '  ',
    preformattedCode: false,
    blankReplacement: function (content, node) {
      return node.isBlock ? '\n\n' : '';
    },
    keepReplacement: function (content, node) {
      return node.isBlock ? '\n\n' + node.outerHTML + '\n\n' : node.outerHTML;
    },
    defaultReplacement: function (content, node) {
      return node.isBlock ? '\n\n' + content + '\n\n' : content;
    }
  };
  this.options = extend({}, defaults, options);
  this.rules = new Rules(this.options);
}
TurndownService.prototype = {
  /**
   * The entry point for converting a string or DOM node to Markdown
   * @public
   * @param {String|HTMLElement} input The string or DOM node to convert
   * @returns A Markdown representation of the input
   * @type String
   */

  turndown: function (input) {
    if (!canConvert(input)) {
      throw new TypeError(input + ' is not a string, or an element/document/fragment node.');
    }
    if (input === '') return '';
    var output = process.call(this, new RootNode(input, this.options));
    return postProcess.call(this, output);
  },
  /**
   * Add one or more plugins
   * @public
   * @param {Function|Array} plugin The plugin or array of plugins to add
   * @returns The Turndown instance for chaining
   * @type Object
   */

  use: function (plugin) {
    if (Array.isArray(plugin)) {
      for (var i = 0; i < plugin.length; i++) this.use(plugin[i]);
    } else if (typeof plugin === 'function') {
      plugin(this);
    } else {
      throw new TypeError('plugin must be a Function or an Array of Functions');
    }
    return this;
  },
  /**
   * Adds a rule
   * @public
   * @param {String} key The unique key of the rule
   * @param {Object} rule The rule
   * @returns The Turndown instance for chaining
   * @type Object
   */

  addRule: function (key, rule) {
    this.rules.add(key, rule);
    return this;
  },
  /**
   * Keep a node (as HTML) that matches the filter
   * @public
   * @param {String|Array|Function} filter The unique key of the rule
   * @returns The Turndown instance for chaining
   * @type Object
   */

  keep: function (filter) {
    this.rules.keep(filter);
    return this;
  },
  /**
   * Remove a node that matches the filter
   * @public
   * @param {String|Array|Function} filter The unique key of the rule
   * @returns The Turndown instance for chaining
   * @type Object
   */

  remove: function (filter) {
    this.rules.remove(filter);
    return this;
  },
  /**
   * Escapes Markdown syntax
   * @public
   * @param {String} string The string to escape
   * @returns A string with Markdown syntax escaped
   * @type String
   */

  escape: function (string) {
    return escapeMarkdown(string);
  }
};

/**
 * Reduces a DOM node down to its Markdown string equivalent
 * @private
 * @param {HTMLElement} parentNode The node to convert
 * @returns A Markdown representation of the node
 * @type String
 */

function process(parentNode) {
  var self = this;
  return reduce.call(parentNode.childNodes, function (output, node) {
    node = new Node(node, self.options);
    var replacement = '';
    if (node.nodeType === 3) {
      replacement = node.isCode ? node.nodeValue : self.escape(node.nodeValue);
    } else if (node.nodeType === 1) {
      replacement = replacementForNode.call(self, node);
    }
    return join(output, replacement);
  }, '');
}

/**
 * Appends strings as each rule requires and trims the output
 * @private
 * @param {String} output The conversion output
 * @returns A trimmed version of the ouput
 * @type String
 */

function postProcess(output) {
  var self = this;
  this.rules.forEach(function (rule) {
    if (typeof rule.append === 'function') {
      output = join(output, rule.append(self.options));
    }
  });
  return output.replace(/^[\t\r\n]+/, '').replace(/[\t\r\n\s]+$/, '');
}

/**
 * Converts an element node to its Markdown equivalent
 * @private
 * @param {HTMLElement} node The node to convert
 * @returns A Markdown representation of the node
 * @type String
 */

function replacementForNode(node) {
  var rule = this.rules.forNode(node);
  var content = process.call(this, node);
  var whitespace = node.flankingWhitespace;
  if (whitespace.leading || whitespace.trailing) content = content.trim();
  return whitespace.leading + rule.replacement(content, node, this.options) + whitespace.trailing;
}

/**
 * Joins replacement to the current output with appropriate number of new lines
 * @private
 * @param {String} output The current conversion output
 * @param {String} replacement The string to append to the output
 * @returns Joined output
 * @type String
 */

function join(output, replacement) {
  var s1 = trimTrailingNewlines(output);
  var s2 = trimLeadingNewlines(replacement);
  var nls = Math.max(output.length - s1.length, replacement.length - s2.length);
  var separator = '\n\n'.substring(0, nls);
  return s1 + separator + s2;
}

/**
 * Determines whether an input can be converted
 * @private
 * @param {String|HTMLElement} input Describe this parameter
 * @returns Describe what it returns
 * @type String|Object|Array|Boolean|Number
 */

function canConvert(input) {
  return input != null && (typeof input === 'string' || input.nodeType && (input.nodeType === 1 || input.nodeType === 9 || input.nodeType === 11));
}

const turndown = new TurndownService({
  headingStyle: "atx",
  bulletListMarker: "-",
  codeBlockStyle: "fenced",
  emDelimiter: "_"
});
turndown.addRule("dropImages", {
  filter: "img",
  replacement: () => ""
});
turndown.addRule("stepNumber", {
  filter: (node) => node.nodeName === "SPAN" && /^\s*\d+\s*$/.test(node.textContent ?? ""),
  replacement: () => ""
});
function htmlToMarkdown(html) {
  return turndown.turndown(html).replace(/ /g, " ").trim();
}
function htmlArrayToOrderedList(htmlArray) {
  return htmlArray.map((html, index) => {
    const text = htmlToMarkdown(html).replace(/\s*\n\s*/g, " ");
    return `${index + 1}. ${text}`;
  }).join("\n");
}

function compose({ url, name, headline, nutrition, description, pdfUrl, metrics, ingredients, utensils, instructionsHtml, allergens }) {
  const descriptionString = description.status === "success" ? description.data : `_Description not found: ${description.data}_`;
  const pdfUrlString = pdfUrl.status === "success" ? `[PDF](${pdfUrl.data})` : `_PDF URL not found: ${pdfUrl.data}_`;
  const fullNameString = [name, headline].filter((s) => s.status === "success").map((s) => s.data).join(" ");
  const ingredientArray = ingredients.map((i) => `${i.name}: ${i.quantity}`);
  const ingredientList = arrayToMarkdownList(ingredientArray);
  const utensilList = arrayToMarkdownList(utensils);
  const utensilListIndented = "\n" + arrayToMarkdownList(utensils, 2);
  const instructionList = instructionsHtml.status === "success" ? htmlArrayToOrderedList(instructionsHtml.data) : `_Instructions not found: ${instructionsHtml.data}_`;
  const allergenList = arrayToMarkdownList(allergens);
  return `---
categories:
  - "[[Recipes]]"
name: ${fullNameString}
type: 
meal: cena
price:
diet:
kcal: ${nutrition.kcal || ""}
protein_g: ${nutrition.protein_g || ""}
carbs_g: ${nutrition.carbs_g || ""}
fat_g: ${nutrition.fat_g || ""}
fiber_g: ${nutrition.fiber_g || ""}
equipment: ${utensilListIndented}
---

${descriptionString}

- [URL](${url})
- ${pdfUrlString}
- Tiempo total: ${metrics.time || ""}
- Difficulty: ${metrics.difficulty || ""}

## Ingredientes

${ingredientList}

## Instrucciones

${instructionList}

## Utensilios

${utensilList}

## Al\xE9rgenos

${allergenList}`;
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var FileSaver_min$1 = {exports: {}};

var FileSaver_min = FileSaver_min$1.exports;

var hasRequiredFileSaver_min;

function requireFileSaver_min () {
	if (hasRequiredFileSaver_min) return FileSaver_min$1.exports;
	hasRequiredFileSaver_min = 1;
	(function (module, exports) {
		(function(a,b){b();})(FileSaver_min,function(){function b(a,b){return "undefined"==typeof b?b={autoBom:false}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(a,b,c){var d=new XMLHttpRequest;d.open("GET",a),d.responseType="blob",d.onload=function(){g(d.response,b,c);},d.onerror=function(){console.error("could not download file");},d.send();}function d(a){var b=new XMLHttpRequest;b.open("HEAD",a,false);try{b.send();}catch(a){}return 200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"));}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",true,true,window,0,0,0,80,20,false,false,false,false,0,null),a.dispatchEvent(b);}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof commonjsGlobal&&commonjsGlobal.global===commonjsGlobal?commonjsGlobal:void 0,a=f.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),g=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href);},4E4),setTimeout(function(){e(j);},0));}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else {var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i);});}}:function(b,d,e,g){if(g=g||open("","_blank"),g&&(g.document.title=g.document.body.innerText="downloading..."),"string"==typeof b)return c(b,d,e);var h="application/octet-stream"===b.type,i=/constructor/i.test(f.HTMLElement)||f.safari,j=/CriOS\/[\d]+/.test(navigator.userAgent);if((j||h&&i||a)&&"undefined"!=typeof FileReader){var k=new FileReader;k.onloadend=function(){var a=k.result;a=j?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),g?g.location.href=a:location=a,g=null;},k.readAsDataURL(b);}else {var l=f.URL||f.webkitURL,m=l.createObjectURL(b);g?g.location=m:location.href=m,g=null,setTimeout(function(){l.revokeObjectURL(m);},4E4);}});f.saveAs=g.saveAs=g,(module.exports=g);});

		
	} (FileSaver_min$1));
	return FileSaver_min$1.exports;
}

var FileSaver_minExports = requireFileSaver_min();

const MARKDOWN_MIME_TYPE = "text/markdown;charset=utf-8";
const INVALID_FILENAME_CHARS = /[<>:"/\\|?*\p{Cc}]/gu;
const TRAILING_DOTS_AND_SPACES = /[. ]+$/;
function sanitizeFilename(name) {
  return name.replace(INVALID_FILENAME_CHARS, "").replace(TRAILING_DOTS_AND_SPACES, "").trim();
}
function downloadMarkdown(name, markdown) {
  const filename = `${sanitizeFilename(name) || "recipe"}.md`;
  const blob = new Blob([markdown], { type: MARKDOWN_MIME_TYPE });
  FileSaver_minExports.saveAs(blob, filename);
}

function useConfirm() {
  const [open, setOpen] = d$2(false);
  const resolver = A$1(null);
  const settle = (ok) => {
    resolver.current?.(ok);
    resolver.current = null;
    setOpen(false);
  };
  const confirm = q$2(() => {
    setOpen(true);
    return new Promise((resolve) => {
      resolver.current = resolve;
    });
  }, []);
  return {
    confirm,
    // Props for <AlertDialog>: any close that isn't the Action (Cancel,
    // Escape, browser force-close) counts as "no".
    dialogProps: {
      open,
      onOpenChange: (o) => {
        if (!o) {
          settle(false);
        }
      }
    },
    onAction: () => settle(true)
  };
}

const css$2 = ".hfmd-alert-dialog{position:fixed;inset:50% auto auto 50%;translate:-50% -50%;display:grid;gap:1rem;box-sizing:border-box;width:100%;max-width:calc(100%-2rem);max-height:calc(100% - 2rem);margin:0;padding:1.5rem;border:1px solid var(--border);border-radius:var(--radius,0.625rem);background-color:var(--background);color:var(--foreground);box-shadow:0 10px 15px -3px rgb(0 0 0 / 0.1),0 4px 6px -4px rgb(0 0 0 / 0.1);outline:none;overflow:auto;animation-duration:200ms;animation-timing-function:cubic-bezier(0.4,0,0.2,1);animation-fill-mode:both;}.hfmd-alert-dialog[data-size=\"sm\"]{max-width:20rem;}@media (min-width:640px){.hfmd-alert-dialog[data-size=\"default\"]{max-width:32rem;}}.hfmd-alert-dialog[data-state=\"open\"]{animation-name:hfmd-alert-dialog-in;}.hfmd-alert-dialog[data-state=\"closed\"]{animation-name:hfmd-alert-dialog-out;}@keyframes hfmd-alert-dialog-in{from{opacity:0;scale:0.95;}}@keyframes hfmd-alert-dialog-out{to{opacity:0;scale:0.95;}}.hfmd-alert-dialog::backdrop{background-color:rgb(0 0 0 / 0.5);animation-duration:200ms;animation-timing-function:cubic-bezier(0.4,0,0.2,1);animation-fill-mode:both;}.hfmd-alert-dialog[data-state=\"open\"]::backdrop{animation-name:hfmd-alert-dialog-overlay-in;}.hfmd-alert-dialog[data-state=\"closed\"]::backdrop{animation-name:hfmd-alert-dialog-overlay-out;}@keyframes hfmd-alert-dialog-overlay-in{from{opacity:0;}}@keyframes hfmd-alert-dialog-overlay-out{to{opacity:0;}}@media (prefers-reduced-motion:reduce){.hfmd-alert-dialog,.hfmd-alert-dialog::backdrop{animation:none;}}.hfmd-alert-dialog-header{display:grid;grid-template-rows:auto 1fr;place-items:center;gap:0.375rem;text-align:center;}.hfmd-alert-dialog-header:has([data-slot=\"alert-dialog-media\"]){grid-template-rows:auto auto 1fr;column-gap:1.5rem;}@media (min-width:640px){.hfmd-alert-dialog[data-size=\"default\"] .hfmd-alert-dialog-header{place-items:start;text-align:left;}.hfmd-alert-dialog[data-size=\"default\"] .hfmd-alert-dialog-header:has([data-slot=\"alert-dialog-media\"]){grid-template-rows:auto 1fr;}}.hfmd-alert-dialog-media{display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;width:4rem;height:4rem;margin-bottom:0.5rem;border-radius:calc(100% - 2rem) - 2px);background-color:var(--muted);}.hfmd-alert-dialog-media>svg:not([class*=\"size-\"]){width:2rem;height:2rem;}@media (min-width:640px){.hfmd-alert-dialog[data-size=\"default\"] .hfmd-alert-dialog-media{grid-row:span 2 / span 2;}}.hfmd-alert-dialog-title{margin:0;font-size:1.125rem;line-height:1.75rem;font-weight:600;}@media (min-width:640px){.hfmd-alert-dialog[data-size=\"default\"]:has([data-slot=\"alert-dialog-media\"]) .hfmd-alert-dialog-title{grid-column-start:2;}}.hfmd-alert-dialog-description{margin:0;font-size:0.875rem;line-height:1.25rem;color:var(--muted-foreground);}.hfmd-alert-dialog-footer{display:flex;flex-direction:column-reverse;gap:0.5rem;}.hfmd-alert-dialog[data-size=\"sm\"] .hfmd-alert-dialog-footer{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));}@media (min-width:640px){.hfmd-alert-dialog-footer{flex-direction:row;justify-content:flex-end;}}";

GM_addStyle(css$2);
const AlertDialogContext = X$1(null);
function useAlertDialogContext(part) {
  const ctx = x$2(AlertDialogContext);
  if (!ctx) {
    throw new Error(`<${part}> must be used within <AlertDialog>`);
  }
  return ctx;
}
function AlertDialog({ open: openProp, defaultOpen = false, onOpenChange, children }) {
  const [uncontrolledOpen, setUncontrolledOpen] = d$2(defaultOpen);
  const isControlled = openProp !== void 0;
  const open = isControlled ? openProp : uncontrolledOpen;
  const handleOpenChange = q$2((next) => {
    if (!isControlled)
      setUncontrolledOpen(next);
    if (next !== open)
      onOpenChange?.(next);
  }, [isControlled, open, onOpenChange]);
  const id = g$3();
  return u$2(AlertDialogContext.Provider, { value: {
    open,
    onOpenChange: handleOpenChange,
    contentId: `${id}-content`,
    titleId: `${id}-title`,
    descriptionId: `${id}-description`
  }, children });
}
D(function AlertDialogTrigger2({ asChild = false, class: classProp, className, onClick, type, ...props }, ref) {
  const ctx = useAlertDialogContext("AlertDialogTrigger");
  const shared = {
    "data-slot": "alert-dialog-trigger",
    "data-state": ctx.open ? "open" : "closed",
    "aria-haspopup": "dialog",
    "aria-expanded": ctx.open,
    "aria-controls": ctx.contentId,
    class: cn(classProp, className) || void 0,
    onClick: (event) => {
      onClick?.(event);
      if (!event.defaultPrevented)
        ctx.onOpenChange(true);
    },
    ...props
  };
  if (asChild) {
    return u$2(Slot, { ref, type, ...shared });
  }
  return u$2("button", { ref, type: type ?? "button", ...shared });
});
const TABBABLE_SELECTOR = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled]):not([type=hidden])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])'
].join(",");
function getTabbables(root) {
  return Array.from(root.querySelectorAll(TABBABLE_SELECTOR)).filter((el) => el.getClientRects().length > 0);
}
const AlertDialogContent = D(function AlertDialogContent2({ size = "default", class: classProp, className, onCancel, onClose, onKeyDown, ...props }, ref) {
  const ctx = useAlertDialogContext("AlertDialogContent");
  const dialogRef = A$1(null);
  const [mounted, setMounted] = d$2(ctx.open);
  F$1(ref, () => dialogRef.current, [mounted]);
  _$2(() => {
    if (ctx.open)
      setMounted(true);
  }, [ctx.open]);
  _$2(() => {
    const dialog = dialogRef.current;
    if (!dialog || !mounted)
      return;
    if (ctx.open) {
      if (!dialog.open)
        dialog.showModal();
      dialog.querySelector('[data-slot="alert-dialog-cancel"]')?.focus();
      return;
    }
    let cancelled = false;
    const animations = dialog.getAnimations({ subtree: true });
    Promise.allSettled(animations.map((a) => a.finished)).then(() => {
      if (cancelled)
        return;
      dialog.close();
      setMounted(false);
    });
    return () => {
      cancelled = true;
    };
  }, [ctx.open, mounted]);
  h$1(() => {
    if (!ctx.open)
      return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = overflow;
    };
  }, [ctx.open]);
  if (!mounted)
    return null;
  return u$2("dialog", {
    ref: dialogRef,
    id: ctx.contentId,
    role: "alertdialog",
    "aria-labelledby": ctx.titleId,
    "aria-describedby": ctx.descriptionId,
    "data-slot": "alert-dialog-content",
    "data-size": size,
    "data-state": ctx.open ? "open" : "closed",
    class: cn("hfmd-alert-dialog", classProp, className),
    // Escape (and other close requests) fire `cancel`: keep the <dialog>
    // open so the exit animation can play, and go through the state.
    onCancel: (event) => {
      onCancel?.(event);
      event.preventDefault();
      ctx.onOpenChange(false);
    },
    // If the browser closed it anyway (e.g. Chrome's close watcher
    // ignoring a second Escape's preventDefault), keep state in sync.
    onClose: (event) => {
      onClose?.(event);
      ctx.onOpenChange(false);
    },
    // A modal <dialog> already keeps focus out of the page, but Tab from
    // the last control goes to the browser UI; loop like Radix instead.
    onKeyDown: (event) => {
      onKeyDown?.(event);
      if (event.defaultPrevented || event.key !== "Tab")
        return;
      const tabbables = getTabbables(event.currentTarget);
      if (tabbables.length === 0)
        return;
      const first = tabbables[0];
      const last = tabbables[tabbables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    },
    ...props
  });
});
const AlertDialogHeader = D(function AlertDialogHeader2({ class: classProp, className, ...props }, ref) {
  return u$2("div", { ref, "data-slot": "alert-dialog-header", class: cn("hfmd-alert-dialog-header", classProp, className), ...props });
});
const AlertDialogFooter = D(function AlertDialogFooter2({ class: classProp, className, ...props }, ref) {
  return u$2("div", { ref, "data-slot": "alert-dialog-footer", class: cn("hfmd-alert-dialog-footer", classProp, className), ...props });
});
const AlertDialogMedia = D(function AlertDialogMedia2({ class: classProp, className, ...props }, ref) {
  return u$2("div", { ref, "data-slot": "alert-dialog-media", class: cn("hfmd-alert-dialog-media", classProp, className), ...props });
});
const AlertDialogTitle = D(function AlertDialogTitle2({ class: classProp, className, ...props }, ref) {
  const ctx = useAlertDialogContext("AlertDialogTitle");
  return u$2("h2", { ref, id: ctx.titleId, "data-slot": "alert-dialog-title", class: cn("hfmd-alert-dialog-title", classProp, className), ...props });
});
const AlertDialogDescription = D(function AlertDialogDescription2({ class: classProp, className, ...props }, ref) {
  const ctx = useAlertDialogContext("AlertDialogDescription");
  return u$2("p", { ref, id: ctx.descriptionId, "data-slot": "alert-dialog-description", class: cn("hfmd-alert-dialog-description", classProp, className), ...props });
});
const AlertDialogAction = D(function AlertDialogAction2({ variant = "default", onClick, ...props }, ref) {
  const ctx = useAlertDialogContext("AlertDialogAction");
  return u$2(Button, { ref, variant, "data-slot": "alert-dialog-action", onClick: (event) => {
    onClick?.(event);
    if (!event.defaultPrevented)
      ctx.onOpenChange(false);
  }, ...props });
});
const AlertDialogCancel = D(function AlertDialogCancel2({ variant = "outline", onClick, ...props }, ref) {
  const ctx = useAlertDialogContext("AlertDialogCancel");
  return u$2(Button, { ref, variant, "data-slot": "alert-dialog-cancel", onClick: (event) => {
    onClick?.(event);
    if (!event.defaultPrevented)
      ctx.onOpenChange(false);
  }, ...props });
});

function NutritionWarningDialog({ dialogProps, onAction }) {
  return u$2(AlertDialog, { ...dialogProps, children: u$2(AlertDialogContent, { children: [u$2(AlertDialogHeader, { children: [u$2(AlertDialogMedia, { children: u$2(CircleAlert, {}) }), u$2(AlertDialogTitle, { children: "Are you sure?" }), u$2(AlertDialogDescription, { children: [u$2("p", { children: "The script can't get the nutrition facts per 100g, because they are not selected." }), u$2("p", { children: ["If you continue, the nutrition facts will be ", u$2("em", { children: "per serving" }), "."] }), u$2("p", { children: "If you want to get correct nutrition facts per 100g, please cancel this and select the button 'Por 100 g'." })] })] }), u$2(AlertDialogFooter, { children: [u$2(AlertDialogCancel, { children: "Cancel" }), u$2(AlertDialogAction, { onClick: onAction, children: "Continue with nutrition facts per serving" })] })] }) });
}

GM_addStyle(css$3);
function ScrapeButton() {
  const [scrapeState, setScrapeState] = d$2("idle");
  const [warnings, setWarnings] = d$2([]);
  const addWarning = (warning) => setWarnings((prev) => [...prev, warning]);
  const nutritionWarning = useConfirm();
  const onClick = async () => {
    if (scrapeState !== "idle") {
      return;
    }
    const selector = getSelector("Nutrition per 100g button");
    const isNutrition100gActive = document.querySelector(selector);
    if (!isNutrition100gActive) {
      const proceed = await nutritionWarning.confirm();
      if (!proceed) {
        return;
      }
    }
    setScrapeState("scrapping");
    const scraped = scrape();
    if (!hasEntries(scraped.nutrition)) {
      addWarning("No nutrition entries found");
    }
    if (!hasEntries(scraped.metrics)) {
      addWarning("No metric entries found");
    }
    if (!hasItems(scraped.ingredients)) {
      addWarning("No ingredients found");
    }
    if (!hasItems(scraped.utensils)) {
      addWarning("No utensils found");
    }
    if (!hasItems(scraped.allergens)) {
      addWarning("No allergens found");
    }
    if (scraped.name.status === "error") {
      addWarning(`No recipe instructions available: ${scraped.name.data}`);
    }
    if (scraped.headline.status === "error") {
      addWarning(`No recipe instructions available: ${scraped.headline.data}`);
    }
    if (scraped.instructionsHtml.status === "error") {
      addWarning(`No recipe instructions available: ${scraped.instructionsHtml.data}`);
    }
    if (scraped.description.status === "error") {
      addWarning(`No recipe description available: ${scraped.description.data}`);
    }
    if (scraped.pdfUrl.status === "error") {
      addWarning(`No PDF URL available: ${scraped.pdfUrl.data}`);
    }
    const markdown = compose(scraped);
    const filename = scraped.name.status === "success" ? scraped.name.data : "recipe";
    downloadMarkdown(filename, markdown);
    setScrapeState("just-scrapped");
    sleep(3e3).then(() => setScrapeState("idle"));
  };
  return u$2(S$1, { children: [warnings.length > 0 && u$2("ul", { class: "scrape-warnings", children: warnings.map((warning) => u$2("li", { children: "warning" }, warning)) }), u$2(NutritionWarningDialog, { ...nutritionWarning }), u$2(Button, { onClick, children: [scrapeState === "idle" && status.value.state === "loading" && u$2(S$1, { children: [u$2(FileDown, {}), "Scrape anyway"] }), scrapeState === "idle" && status.value.state !== "loading" && u$2(S$1, { children: [u$2(FileDown, {}), "Scrape"] }), scrapeState === "scrapping" && u$2(S$1, { children: [u$2(Loader, {}), "Scrapping..."] }), scrapeState === "just-scrapped" && u$2(S$1, { children: [u$2(Check, {}), "Scrapped!"] })] })] });
}

const css$1 = ".hellofresh-md{position:fixed;inset:1rem 1rem auto auto;background-color:white;width:20rem;padding:1rem;z-index:99999;border-radius:12px;border:1px solid gray;display:flex;flex-direction:column;gap:1lh;}";

const css = ".hfmd-separator{flex-shrink:0;box-sizing:border-box;margin:0;padding:0;border:0;background-color:var(--border);}.hfmd-separator--horizontal{height:1px;width:100%;}.hfmd-separator--vertical{height:100%;width:1px;}";

GM_addStyle(css);
const separatorVariants = {
  orientation: {
    horizontal: "hfmd-separator--horizontal",
    vertical: "hfmd-separator--vertical"
  }
};
function separatorClass({ orientation = "horizontal", class: className } = {}) {
  return cn("hfmd-separator", separatorVariants.orientation[orientation], className);
}
const Separator = D(function Separator2({ orientation = "horizontal", decorative = true, class: classProp, className, ...props }, ref) {
  const a11y = decorative ? { role: "none" } : {
    role: "separator",
    "aria-orientation": orientation === "vertical" ? "vertical" : void 0
  };
  return u$2("div", { ref, "data-slot": "separator", "data-orientation": orientation, class: separatorClass({ orientation, class: cn(classProp, className) }), ...a11y, ...props });
});

GM_addStyle(css$1);
function App() {
  return u$2("div", { class: "hellofresh-md", children: [status.value.state === "loading" && u$2(Loading, {}), status.value.state === "error" && u$2(Error$1, {}), status.value.state === "ready" && u$2(Ready, {}), status.value.state === "loading" && u$2(Separator, {}), status.value.state !== "error" && u$2(ScrapeButton, {})] });
}

const cssGlobal = ".hellofresh-md{--background:oklch(1 0 0);--foreground:oklch(0.145 0 0);--primary:oklch(0.205 0 0);--primary-foreground:oklch(0.985 0 0);--secondary:oklch(0.97 0 0);--secondary-foreground:oklch(0.205 0 0);--muted:oklch(0.97 0 0);--muted-foreground:oklch(0.556 0 0);--accent:oklch(0.97 0 0);--accent-foreground:oklch(0.205 0 0);--destructive:oklch(0.577 0.245 27.325);--border:oklch(0.922 0 0);--input:oklch(0.922 0 0);--ring:oklch(0.708 0 0);--radius:0.625rem;color:var(--foreground);font-family:ui-sans-serif,system-ui,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\";}";

GM_addStyle(cssGlobal);
const appWrapper = document.createElement("div");
document.body.appendChild(appWrapper);
R(u$2(App, {}), appWrapper);
observeReadiness();
