import{r as p,R as Ln,u as jn,Q as Z,j as h}from"./index-eLorXjxZ.js";import{P as R}from"./index-54tihncc.js";import{u as Mn,a as $n}from"./axioConfig-VE0MvLD2.js";function _e(t,e,n,r){function s(i){return i instanceof n?i:new n(function(o){o(i)})}return new(n||(n=Promise))(function(i,o){function a(d){try{l(r.next(d))}catch(f){o(f)}}function c(d){try{l(r.throw(d))}catch(f){o(f)}}function l(d){d.done?i(d.value):s(d.value).then(a,c)}l((r=r.apply(t,e||[])).next())})}function be(t,e){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,s,i,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(l){return function(d){return c([l,d])}}function c(l){if(r)throw new TypeError("Generator is already executing.");for(;o&&(o=0,l[0]&&(n=0)),n;)try{if(r=1,s&&(i=l[0]&2?s.return:l[0]?s.throw||((i=s.return)&&i.call(s),0):s.next)&&!(i=i.call(s,l[1])).done)return i;switch(s=0,i&&(l=[l[0]&2,i.value]),l[0]){case 0:case 1:i=l;break;case 4:return n.label++,{value:l[1],done:!1};case 5:n.label++,s=l[1],l=[0];continue;case 7:l=n.ops.pop(),n.trys.pop();continue;default:if(i=n.trys,!(i=i.length>0&&i[i.length-1])&&(l[0]===6||l[0]===2)){n=0;continue}if(l[0]===3&&(!i||l[1]>i[0]&&l[1]<i[3])){n.label=l[1];break}if(l[0]===6&&n.label<i[1]){n.label=i[1],i=l;break}if(i&&n.label<i[2]){n.label=i[2],n.ops.push(l);break}i[2]&&n.ops.pop(),n.trys.pop();continue}l=e.call(t,n)}catch(d){l=[6,d],s=0}finally{r=i=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function Hn(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var r=n.call(t),s,i=[],o;try{for(;(e===void 0||e-- >0)&&!(s=r.next()).done;)i.push(s.value)}catch(a){o={error:a}}finally{try{s&&!s.done&&(n=r.return)&&n.call(r)}finally{if(o)throw o.error}}return i}function zn(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(Hn(arguments[e]));return t}var Vn=new Map([["avi","video/avi"],["gif","image/gif"],["ico","image/x-icon"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["mkv","video/x-matroska"],["mov","video/quicktime"],["mp4","video/mp4"],["pdf","application/pdf"],["png","image/png"],["zip","application/zip"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]]);function Me(t,e){var n=qn(t);if(typeof n.path!="string"){var r=t.webkitRelativePath;Object.defineProperty(n,"path",{value:typeof e=="string"?e:typeof r=="string"&&r.length>0?r:t.name,writable:!1,configurable:!1,enumerable:!0})}return n}function qn(t){var e=t.name,n=e&&e.lastIndexOf(".")!==-1;if(n&&!t.type){var r=e.split(".").pop().toLowerCase(),s=Vn.get(r);s&&Object.defineProperty(t,"type",{value:s,writable:!1,configurable:!1,enumerable:!0})}return t}var Wn=[".DS_Store","Thumbs.db"];function Gn(t){return _e(this,void 0,void 0,function(){return be(this,function(e){return[2,Kn(t)&&t.dataTransfer?Jn(t.dataTransfer,t.type):Xn(t)]})})}function Kn(t){return!!t.dataTransfer}function Xn(t){var e=Yn(t.target)?t.target.files?nt(t.target.files):[]:[];return e.map(function(n){return Me(n)})}function Yn(t){return t!==null}function Jn(t,e){return _e(this,void 0,void 0,function(){var n,r;return be(this,function(s){switch(s.label){case 0:return t.items?(n=nt(t.items).filter(function(i){return i.kind==="file"}),e!=="drop"?[2,n]:[4,Promise.all(n.map(Zn))]):[3,2];case 1:return r=s.sent(),[2,Tt(Gt(r))];case 2:return[2,Tt(nt(t.files).map(function(i){return Me(i)}))]}})})}function Tt(t){return t.filter(function(e){return Wn.indexOf(e.name)===-1})}function nt(t){for(var e=[],n=0;n<t.length;n++){var r=t[n];e.push(r)}return e}function Zn(t){if(typeof t.webkitGetAsEntry!="function")return Rt(t);var e=t.webkitGetAsEntry();return e&&e.isDirectory?Kt(e):Rt(t)}function Gt(t){return t.reduce(function(e,n){return zn(e,Array.isArray(n)?Gt(n):[n])},[])}function Rt(t){var e=t.getAsFile();if(!e)return Promise.reject(t+" is not a File");var n=Me(e);return Promise.resolve(n)}function Qn(t){return _e(this,void 0,void 0,function(){return be(this,function(e){return[2,t.isDirectory?Kt(t):er(t)]})})}function Kt(t){var e=t.createReader();return new Promise(function(n,r){var s=[];function i(){var o=this;e.readEntries(function(a){return _e(o,void 0,void 0,function(){var c,l,d;return be(this,function(f){switch(f.label){case 0:if(a.length)return[3,5];f.label=1;case 1:return f.trys.push([1,3,,4]),[4,Promise.all(s)];case 2:return c=f.sent(),n(c),[3,4];case 3:return l=f.sent(),r(l),[3,4];case 4:return[3,6];case 5:d=Promise.all(a.map(Qn)),s.push(d),i(),f.label=6;case 6:return[2]}})})},function(a){r(a)})}i()})}function er(t){return _e(this,void 0,void 0,function(){return be(this,function(e){return[2,new Promise(function(n,r){t.file(function(s){var i=Me(s,t.fullPath);n(i)},function(s){r(s)})})]})})}var tr=function(t,e){if(t&&e){var n=Array.isArray(e)?e:e.split(","),r=t.name||"",s=(t.type||"").toLowerCase(),i=s.replace(/\/.*$/,"");return n.some(function(o){var a=o.trim().toLowerCase();return a.charAt(0)==="."?r.toLowerCase().endsWith(a):a.endsWith("/*")?i===a.replace(/\/.*$/,""):s===a})}return!0};function It(t,e){return ir(t)||sr(t,e)||rr(t,e)||nr()}function nr(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function rr(t,e){if(t){if(typeof t=="string")return At(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return At(t,e)}}function At(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function sr(t,e){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(t)))){var n=[],r=!0,s=!1,i=void 0;try{for(var o=t[Symbol.iterator](),a;!(r=(a=o.next()).done)&&(n.push(a.value),!(e&&n.length===e));r=!0);}catch(c){s=!0,i=c}finally{try{!r&&o.return!=null&&o.return()}finally{if(s)throw i}}return n}}function ir(t){if(Array.isArray(t))return t}var or="file-invalid-type",ar="file-too-large",cr="file-too-small",lr="too-many-files",ur=function(e){e=Array.isArray(e)&&e.length===1?e[0]:e;var n=Array.isArray(e)?"one of ".concat(e.join(", ")):e;return{code:or,message:"File type must be ".concat(n)}},St=function(e){return{code:ar,message:"File is larger than ".concat(e," bytes")}},Ct=function(e){return{code:cr,message:"File is smaller than ".concat(e," bytes")}},dr={code:lr,message:"Too many files"};function Xt(t,e){var n=t.type==="application/x-moz-file"||tr(t,e);return[n,n?null:ur(e)]}function Yt(t,e,n){if(he(t.size))if(he(e)&&he(n)){if(t.size>n)return[!1,St(n)];if(t.size<e)return[!1,Ct(e)]}else{if(he(e)&&t.size<e)return[!1,Ct(e)];if(he(n)&&t.size>n)return[!1,St(n)]}return[!0,null]}function he(t){return t!=null}function hr(t){var e=t.files,n=t.accept,r=t.minSize,s=t.maxSize,i=t.multiple,o=t.maxFiles;return!i&&e.length>1||i&&o>=1&&e.length>o?!1:e.every(function(a){var c=Xt(a,n),l=It(c,1),d=l[0],f=Yt(a,r,s),m=It(f,1),g=m[0];return d&&g})}function Pe(t){return typeof t.isPropagationStopped=="function"?t.isPropagationStopped():typeof t.cancelBubble<"u"?t.cancelBubble:!1}function ke(t){return t.dataTransfer?Array.prototype.some.call(t.dataTransfer.types,function(e){return e==="Files"||e==="application/x-moz-file"}):!!t.target&&!!t.target.files}function Ot(t){t.preventDefault()}function fr(t){return t.indexOf("MSIE")!==-1||t.indexOf("Trident/")!==-1}function pr(t){return t.indexOf("Edge/")!==-1}function mr(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window.navigator.userAgent;return fr(t)||pr(t)}function V(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(r){for(var s=arguments.length,i=new Array(s>1?s-1:0),o=1;o<s;o++)i[o-1]=arguments[o];return e.some(function(a){return!Pe(r)&&a&&a.apply(void 0,[r].concat(i)),Pe(r)})}}function gr(t){return yr(t)||br(t)||Jt(t)||_r()}function _r(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function br(t){if(typeof Symbol<"u"&&Symbol.iterator in Object(t))return Array.from(t)}function yr(t){if(Array.isArray(t))return rt(t)}function Ke(t,e){return wr(t)||Er(t,e)||Jt(t,e)||vr()}function vr(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Jt(t,e){if(t){if(typeof t=="string")return rt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return rt(t,e)}}function rt(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Er(t,e){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(t)))){var n=[],r=!0,s=!1,i=void 0;try{for(var o=t[Symbol.iterator](),a;!(r=(a=o.next()).done)&&(n.push(a.value),!(e&&n.length===e));r=!0);}catch(c){s=!0,i=c}finally{try{!r&&o.return!=null&&o.return()}finally{if(s)throw i}}return n}}function wr(t){if(Array.isArray(t))return t}function kt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function T(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?kt(Object(n),!0).forEach(function(r){st(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):kt(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function st(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ue(t,e){if(t==null)return{};var n=Dr(t,e),r,s;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Dr(t,e){if(t==null)return{};var n={},r=Object.keys(t),s,i;for(i=0;i<r.length;i++)s=r[i],!(e.indexOf(s)>=0)&&(n[s]=t[s]);return n}var ht=p.forwardRef(function(t,e){var n=t.children,r=Ue(t,["children"]),s=Qt(r),i=s.open,o=Ue(s,["open"]);return p.useImperativeHandle(e,function(){return{open:i}},[i]),Ln.createElement(p.Fragment,null,n(T(T({},o),{},{open:i})))});ht.displayName="Dropzone";var Zt={disabled:!1,getFilesFromEvent:Gn,maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1};ht.defaultProps=Zt;ht.propTypes={children:R.func,accept:R.oneOfType([R.string,R.arrayOf(R.string)]),multiple:R.bool,preventDropOnDocument:R.bool,noClick:R.bool,noKeyboard:R.bool,noDrag:R.bool,noDragEventsBubbling:R.bool,minSize:R.number,maxSize:R.number,maxFiles:R.number,disabled:R.bool,getFilesFromEvent:R.func,onFileDialogCancel:R.func,onDragEnter:R.func,onDragLeave:R.func,onDragOver:R.func,onDrop:R.func,onDropAccepted:R.func,onDropRejected:R.func};var Tr={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,draggedFiles:[],acceptedFiles:[],fileRejections:[]};function Qt(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=T(T({},Zt),t),n=e.accept,r=e.disabled,s=e.getFilesFromEvent,i=e.maxSize,o=e.minSize,a=e.multiple,c=e.maxFiles,l=e.onDragEnter,d=e.onDragLeave,f=e.onDragOver,m=e.onDrop,g=e.onDropAccepted,_=e.onDropRejected,O=e.onFileDialogCancel,y=e.preventDropOnDocument,U=e.noClick,x=e.noKeyboard,A=e.noDrag,v=e.noDragEventsBubbling,S=p.useRef(null),C=p.useRef(null),Y=p.useReducer(Rr,Tr),$=Ke(Y,2),M=$[0],L=$[1],Ee=M.isFocused,we=M.isFileDialogActive,De=M.draggedFiles,ue=p.useCallback(function(){C.current&&(L({type:"openDialog"}),C.current.value=null,C.current.click())},[L]),Te=function(){we&&setTimeout(function(){if(C.current){var b=C.current.files;b.length||(L({type:"closeDialog"}),typeof O=="function"&&O())}},300)};p.useEffect(function(){return window.addEventListener("focus",Te,!1),function(){window.removeEventListener("focus",Te,!1)}},[C,we,O]);var Re=p.useCallback(function(u){!S.current||!S.current.isEqualNode(u.target)||(u.keyCode===32||u.keyCode===13)&&(u.preventDefault(),ue())},[S,C]),E=p.useCallback(function(){L({type:"focus"})},[]),H=p.useCallback(function(){L({type:"blur"})},[]),J=p.useCallback(function(){U||(mr()?setTimeout(ue,0):ue())},[C,U]),k=p.useRef([]),Ie=function(b){S.current&&S.current.contains(b.target)||(b.preventDefault(),k.current=[])};p.useEffect(function(){return y&&(document.addEventListener("dragover",Ot,!1),document.addEventListener("drop",Ie,!1)),function(){y&&(document.removeEventListener("dragover",Ot),document.removeEventListener("drop",Ie))}},[S,y]);var yt=p.useCallback(function(u){u.preventDefault(),u.persist(),Ce(u),k.current=[].concat(gr(k.current),[u.target]),ke(u)&&Promise.resolve(s(u)).then(function(b){Pe(u)&&!v||(L({draggedFiles:b,isDragActive:!0,type:"setDraggedFiles"}),l&&l(u))})},[s,l,v]),vt=p.useCallback(function(u){if(u.preventDefault(),u.persist(),Ce(u),u.dataTransfer)try{u.dataTransfer.dropEffect="copy"}catch{}return ke(u)&&f&&f(u),!1},[f,v]),Et=p.useCallback(function(u){u.preventDefault(),u.persist(),Ce(u);var b=k.current.filter(function(j){return S.current&&S.current.contains(j)}),N=b.indexOf(u.target);N!==-1&&b.splice(N,1),k.current=b,!(b.length>0)&&(L({isDragActive:!1,type:"setDraggedFiles",draggedFiles:[]}),ke(u)&&d&&d(u))},[S,d,v]),Ae=p.useCallback(function(u){u.preventDefault(),u.persist(),Ce(u),k.current=[],ke(u)&&Promise.resolve(s(u)).then(function(b){if(!(Pe(u)&&!v)){var N=[],j=[];b.forEach(function(z){var de=Xt(z,n),se=Ke(de,2),Ve=se[0],qe=se[1],We=Yt(z,o,i),Oe=Ke(We,2),Ge=Oe[0],Un=Oe[1];if(Ve&&Ge)N.push(z);else{var Bn=[qe,Un].filter(function(Fn){return Fn});j.push({file:z,errors:Bn})}}),(!a&&N.length>1||a&&c>=1&&N.length>c)&&(N.forEach(function(z){j.push({file:z,errors:[dr]})}),N.splice(0)),L({acceptedFiles:N,fileRejections:j,type:"setFiles"}),m&&m(N,j,u),j.length>0&&_&&_(j,u),N.length>0&&g&&g(N,u)}}),L({type:"reset"})},[a,n,o,i,c,s,m,g,_,v]),re=function(b){return r?null:b},ze=function(b){return x?null:re(b)},Se=function(b){return A?null:re(b)},Ce=function(b){v&&b.stopPropagation()},kn=p.useMemo(function(){return function(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},b=u.refKey,N=b===void 0?"ref":b,j=u.onKeyDown,z=u.onFocus,de=u.onBlur,se=u.onClick,Ve=u.onDragEnter,qe=u.onDragOver,We=u.onDragLeave,Oe=u.onDrop,Ge=Ue(u,["refKey","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"]);return T(T(st({onKeyDown:ze(V(j,Re)),onFocus:ze(V(z,E)),onBlur:ze(V(de,H)),onClick:re(V(se,J)),onDragEnter:Se(V(Ve,yt)),onDragOver:Se(V(qe,vt)),onDragLeave:Se(V(We,Et)),onDrop:Se(V(Oe,Ae))},N,S),!r&&!x?{tabIndex:0}:{}),Ge)}},[S,Re,E,H,J,yt,vt,Et,Ae,x,A,r]),xn=p.useCallback(function(u){u.stopPropagation()},[]),Nn=p.useMemo(function(){return function(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},b=u.refKey,N=b===void 0?"ref":b,j=u.onChange,z=u.onClick,de=Ue(u,["refKey","onChange","onClick"]),se=st({accept:n,multiple:a,type:"file",style:{display:"none"},onChange:re(V(j,Ae)),onClick:re(V(z,xn)),autoComplete:"off",tabIndex:-1},N,C);return T(T({},se),de)}},[C,n,a,Ae,r]),wt=De.length,Dt=wt>0&&hr({files:De,accept:n,minSize:o,maxSize:i,multiple:a,maxFiles:c}),Pn=wt>0&&!Dt;return T(T({},M),{},{isDragAccept:Dt,isDragReject:Pn,isFocused:Ee&&!r,getRootProps:kn,getInputProps:Nn,rootRef:S,inputRef:C,open:re(ue)})}function Rr(t,e){switch(e.type){case"focus":return T(T({},t),{},{isFocused:!0});case"blur":return T(T({},t),{},{isFocused:!1});case"openDialog":return T(T({},t),{},{isFileDialogActive:!0});case"closeDialog":return T(T({},t),{},{isFileDialogActive:!1});case"setDraggedFiles":var n=e.isDragActive,r=e.draggedFiles;return T(T({},t),{},{draggedFiles:r,isDragActive:n});case"setFiles":return T(T({},t),{},{acceptedFiles:e.acceptedFiles,fileRejections:e.fileRejections});case"reset":return T(T({},t),{},{isFileDialogActive:!1,isDragActive:!1,draggedFiles:[],acceptedFiles:[],fileRejections:[]});default:return t}}var xt={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const en=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Ir=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},tn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,d=i>>2,f=(i&3)<<4|a>>4;let m=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(m=64)),r.push(n[d],n[f],n[m],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(en(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ir(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||f==null)throw new Ar;const m=i<<2|a>>4;if(r.push(m),l!==64){const g=a<<4&240|l>>2;if(r.push(g),f!==64){const _=l<<6&192|f;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Ar extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Sr=function(t){const e=en(t);return tn.encodeByteArray(e,!0)},Be=function(t){return Sr(t).replace(/\./g,"")},Cr=function(t){try{return tn.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Or(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr=()=>Or().__FIREBASE_DEFAULTS__,xr=()=>{if(typeof process>"u"||typeof xt>"u")return;const t=xt.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Nr=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Cr(t[1]);return e&&JSON.parse(e)},nn=()=>{try{return kr()||xr()||Nr()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Pr=t=>{var e,n;return(n=(e=nn())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Ur=t=>{const e=Pr(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},rn=()=>{var t;return(t=nn())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Be(JSON.stringify(n)),Be(JSON.stringify(o)),a].join(".")}function Lr(){try{return typeof indexedDB=="object"}catch{return!1}}function jr(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr="FirebaseError";class ce extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Mr,Object.setPrototypeOf(this,ce.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,sn.prototype.create)}}class sn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?$r(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new ce(s,a,r)}}function $r(t,e){return t.replace(Hr,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Hr=/\{\$([^}]+)}/g;function it(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Nt(i)&&Nt(o)){if(!it(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Nt(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(t){return t&&t._delegate?t._delegate:t}class me{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Br;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(qr(e))try{this.getOrInitializeService({instanceIdentifier:Q})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Q){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Q){return this.instances.has(e)}getOptions(e=Q){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Vr(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Q){return this.component?this.component.multipleInstances?e:Q:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Vr(t){return t===Q?void 0:t}function qr(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new zr(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var w;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(w||(w={}));const Gr={debug:w.DEBUG,verbose:w.VERBOSE,info:w.INFO,warn:w.WARN,error:w.ERROR,silent:w.SILENT},Kr=w.INFO,Xr={[w.DEBUG]:"log",[w.VERBOSE]:"log",[w.INFO]:"info",[w.WARN]:"warn",[w.ERROR]:"error"},Yr=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Xr[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Jr{constructor(e){this.name=e,this._logLevel=Kr,this._logHandler=Yr,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in w))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Gr[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,w.DEBUG,...e),this._logHandler(this,w.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,w.VERBOSE,...e),this._logHandler(this,w.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,w.INFO,...e),this._logHandler(this,w.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,w.WARN,...e),this._logHandler(this,w.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,w.ERROR,...e),this._logHandler(this,w.ERROR,...e)}}const Zr=(t,e)=>e.some(n=>t instanceof n);let Pt,Ut;function Qr(){return Pt||(Pt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function es(){return Ut||(Ut=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const on=new WeakMap,ot=new WeakMap,an=new WeakMap,Xe=new WeakMap,ft=new WeakMap;function ts(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(K(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&on.set(n,t)}).catch(()=>{}),ft.set(e,t),e}function ns(t){if(ot.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ot.set(t,e)}let at={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ot.get(t);if(e==="objectStoreNames")return t.objectStoreNames||an.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return K(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function rs(t){at=t(at)}function ss(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ye(this),e,...n);return an.set(r,e.sort?e.sort():[e]),K(r)}:es().includes(t)?function(...e){return t.apply(Ye(this),e),K(on.get(this))}:function(...e){return K(t.apply(Ye(this),e))}}function is(t){return typeof t=="function"?ss(t):(t instanceof IDBTransaction&&ns(t),Zr(t,Qr())?new Proxy(t,at):t)}function K(t){if(t instanceof IDBRequest)return ts(t);if(Xe.has(t))return Xe.get(t);const e=is(t);return e!==t&&(Xe.set(t,e),ft.set(e,t)),e}const Ye=t=>ft.get(t);function os(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=K(o);return r&&o.addEventListener("upgradeneeded",c=>{r(K(o.result),c.oldVersion,c.newVersion,K(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const as=["get","getKey","getAll","getAllKeys","count"],cs=["put","add","delete","clear"],Je=new Map;function Bt(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Je.get(e))return Je.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=cs.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||as.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Je.set(e,i),i}rs(t=>({...t,get:(e,n,r)=>Bt(e,n)||t.get(e,n,r),has:(e,n)=>!!Bt(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(us(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function us(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ct="@firebase/app",Ft="0.9.25";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const te=new Jr("@firebase/app"),ds="@firebase/app-compat",hs="@firebase/analytics-compat",fs="@firebase/analytics",ps="@firebase/app-check-compat",ms="@firebase/app-check",gs="@firebase/auth",_s="@firebase/auth-compat",bs="@firebase/database",ys="@firebase/database-compat",vs="@firebase/functions",Es="@firebase/functions-compat",ws="@firebase/installations",Ds="@firebase/installations-compat",Ts="@firebase/messaging",Rs="@firebase/messaging-compat",Is="@firebase/performance",As="@firebase/performance-compat",Ss="@firebase/remote-config",Cs="@firebase/remote-config-compat",Os="@firebase/storage",ks="@firebase/storage-compat",xs="@firebase/firestore",Ns="@firebase/firestore-compat",Ps="firebase",Us="10.7.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lt="[DEFAULT]",Bs={[ct]:"fire-core",[ds]:"fire-core-compat",[fs]:"fire-analytics",[hs]:"fire-analytics-compat",[ms]:"fire-app-check",[ps]:"fire-app-check-compat",[gs]:"fire-auth",[_s]:"fire-auth-compat",[bs]:"fire-rtdb",[ys]:"fire-rtdb-compat",[vs]:"fire-fn",[Es]:"fire-fn-compat",[ws]:"fire-iid",[Ds]:"fire-iid-compat",[Ts]:"fire-fcm",[Rs]:"fire-fcm-compat",[Is]:"fire-perf",[As]:"fire-perf-compat",[Ss]:"fire-rc",[Cs]:"fire-rc-compat",[Os]:"fire-gcs",[ks]:"fire-gcs-compat",[xs]:"fire-fst",[Ns]:"fire-fst-compat","fire-js":"fire-js",[Ps]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fe=new Map,ut=new Map;function Fs(t,e){try{t.container.addComponent(e)}catch(n){te.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Le(t){const e=t.name;if(ut.has(e))return te.debug(`There were multiple attempts to register component ${e}.`),!1;ut.set(e,t);for(const n of Fe.values())Fs(n,t);return!0}function Ls(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const js={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},X=new sn("app","Firebase",js);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new me("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw X.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $s=Us;function cn(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:lt,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw X.create("bad-app-name",{appName:String(s)});if(n||(n=rn()),!n)throw X.create("no-options");const i=Fe.get(s);if(i){if(it(n,i.options)&&it(r,i.config))return i;throw X.create("duplicate-app",{appName:s})}const o=new Wr(s);for(const c of ut.values())o.addComponent(c);const a=new Ms(n,r,o);return Fe.set(s,a),a}function Hs(t=lt){const e=Fe.get(t);if(!e&&t===lt&&rn())return cn();if(!e)throw X.create("no-app",{appName:t});return e}function ae(t,e,n){var r;let s=(r=Bs[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),te.warn(a.join(" "));return}Le(new me(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zs="firebase-heartbeat-database",Vs=1,ge="firebase-heartbeat-store";let Ze=null;function ln(){return Ze||(Ze=os(zs,Vs,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ge)}}}).catch(t=>{throw X.create("idb-open",{originalErrorMessage:t.message})})),Ze}async function qs(t){try{return await(await ln()).transaction(ge).objectStore(ge).get(un(t))}catch(e){if(e instanceof ce)te.warn(e.message);else{const n=X.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});te.warn(n.message)}}}async function Lt(t,e){try{const r=(await ln()).transaction(ge,"readwrite");await r.objectStore(ge).put(e,un(t)),await r.done}catch(n){if(n instanceof ce)te.warn(n.message);else{const r=X.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});te.warn(r.message)}}}function un(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ws=1024,Gs=30*24*60*60*1e3;class Ks{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ys(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=jt();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Gs}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=jt(),{heartbeatsToSend:r,unsentEntries:s}=Xs(this._heartbeatsCache.heartbeats),i=Be(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function jt(){return new Date().toISOString().substring(0,10)}function Xs(t,e=Ws){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Mt(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Mt(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Ys{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Lr()?jr().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await qs(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Lt(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Lt(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Mt(t){return Be(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Js(t){Le(new me("platform-logger",e=>new ls(e),"PRIVATE")),Le(new me("heartbeat",e=>new Ks(e),"PRIVATE")),ae(ct,Ft,t),ae(ct,Ft,"esm2017"),ae("fire-js","")}Js("");var Zs="firebase",Qs="10.7.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ae(Zs,Qs,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dn="firebasestorage.googleapis.com",hn="storageBucket",ei=2*60*1e3,ti=10*60*1e3,ni=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I extends ce{constructor(e,n,r=0){super(Qe(e),`Firebase Storage: ${n} (${Qe(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,I.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Qe(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var D;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(D||(D={}));function Qe(t){return"storage/"+t}function pt(){const t="An unknown error occurred, please check the error payload for server response.";return new I(D.UNKNOWN,t)}function ri(t){return new I(D.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function si(t){return new I(D.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function ii(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new I(D.UNAUTHENTICATED,t)}function oi(){return new I(D.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function ai(t){return new I(D.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function fn(){return new I(D.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function pn(){return new I(D.CANCELED,"User canceled the upload/download.")}function ci(t){return new I(D.INVALID_URL,"Invalid URL '"+t+"'.")}function li(t){return new I(D.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function ui(){return new I(D.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+hn+"' property when initializing the app?")}function mn(){return new I(D.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function di(){return new I(D.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function hi(){return new I(D.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function fi(t){return new I(D.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function dt(t){return new I(D.INVALID_ARGUMENT,t)}function gn(){return new I(D.APP_DELETED,"The Firebase app was deleted.")}function pi(t){return new I(D.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function pe(t,e){return new I(D.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function fe(t){throw new I(D.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=F.makeFromUrl(e,n)}catch{return new F(e,"")}if(r.path==="")return r;throw li(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(v){v.path.charAt(v.path.length-1)==="/"&&(v.path_=v.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function l(v){v.path_=decodeURIComponent(v.path)}const d="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",g=new RegExp(`^https?://${f}/${d}/b/${s}/o${m}`,"i"),_={bucket:1,path:3},O=n===dn?"(?:storage.googleapis.com|storage.cloud.google.com)":n,y="([^?#]*)",U=new RegExp(`^https?://${O}/${s}/${y}`,"i"),A=[{regex:a,indices:c,postModify:i},{regex:g,indices:_,postModify:l},{regex:U,indices:{bucket:1,path:2},postModify:l}];for(let v=0;v<A.length;v++){const S=A[v],C=S.regex.exec(e);if(C){const Y=C[S.indices.bucket];let $=C[S.indices.path];$||($=""),r=new F(Y,$),S.postModify(r);break}}if(r==null)throw ci(e);return r}}class mi{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gi(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function c(){return a===2}let l=!1;function d(...y){l||(l=!0,e.apply(null,y))}function f(y){s=setTimeout(()=>{s=null,t(g,c())},y)}function m(){i&&clearTimeout(i)}function g(y,...U){if(l){m();return}if(y){m(),d.call(null,y,...U);return}if(c()||o){m(),d.call(null,y,...U);return}r<64&&(r*=2);let A;a===1?(a=2,A=0):A=(r+Math.random())*1e3,f(A)}let _=!1;function O(y){_||(_=!0,m(),!l&&(s!==null?(y||(a=2),clearTimeout(s),f(0)):y||(a=1)))}return f(0),i=setTimeout(()=>{o=!0,O(!0)},n),O}function _i(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bi(t){return t!==void 0}function yi(t){return typeof t=="function"}function vi(t){return typeof t=="object"&&!Array.isArray(t)}function He(t){return typeof t=="string"||t instanceof String}function $t(t){return mt()&&t instanceof Blob}function mt(){return typeof Blob<"u"}function Ht(t,e,n,r){if(r<e)throw dt(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw dt(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function _n(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ee;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ee||(ee={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e,n,r,s,i,o,a,c,l,d,f,m=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=d,this.connectionFactory_=f,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,_)=>{this.resolve_=g,this.reject_=_,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new xe(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===ee.NO_ERROR,c=i.getStatus();if(!a||bn(c,this.additionalRetryCodes_)&&this.retry){const d=i.getErrorCode()===ee.ABORT;r(!1,new xe(!1,null,d));return}const l=this.successCodes_.indexOf(c)!==-1;r(!0,new xe(l,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());bi(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=pt();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(s.canceled){const c=this.appDelete_?gn():pn();o(c)}else{const c=fn();o(c)}};this.canceled_?n(!1,new xe(!1,null,!0)):this.backoffId_=gi(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&_i(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class xe{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function wi(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Di(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Ti(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Ri(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Ii(t,e,n,r,s,i,o=!0){const a=_n(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return Ti(l,e),wi(l,n),Di(l,i),Ri(l,r),new Ei(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ai(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Si(...t){const e=Ai();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(mt())return new Blob(t);throw new I(D.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Ci(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oi(t){if(typeof atob>"u")throw fi("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class et{constructor(e,n){this.data=e,this.contentType=n||null}}function ki(t,e){switch(t){case q.RAW:return new et(yn(e));case q.BASE64:case q.BASE64URL:return new et(vn(t,e));case q.DATA_URL:return new et(Ni(e),Pi(e))}throw pt()}function yn(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function xi(t){let e;try{e=decodeURIComponent(t)}catch{throw pe(q.DATA_URL,"Malformed data URL.")}return yn(e)}function vn(t,e){switch(t){case q.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw pe(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case q.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw pe(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Oi(e)}catch(s){throw s.message.includes("polyfill")?s:pe(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class En{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw pe(q.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=Ui(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function Ni(t){const e=new En(t);return e.base64?vn(q.BASE64,e.rest):xi(e.rest)}function Pi(t){return new En(t).contentType}function Ui(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e,n){let r=0,s="";$t(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if($t(this.data_)){const r=this.data_,s=Ci(r,e,n);return s===null?null:new G(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new G(r,!0)}}static getBlob(...e){if(mt()){const n=e.map(r=>r instanceof G?r.data_:r);return new G(Si.apply(null,n))}else{const n=e.map(o=>He(o)?ki(q.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new G(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(t){let e;try{e=JSON.parse(t)}catch{return null}return vi(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bi(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Fi(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Dn(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Li(t,e){return e}class P{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||Li}}let Ne=null;function ji(t){return!He(t)||t.length<2?t:Dn(t)}function Tn(){if(Ne)return Ne;const t=[];t.push(new P("bucket")),t.push(new P("generation")),t.push(new P("metageneration")),t.push(new P("name","fullPath",!0));function e(i,o){return ji(o)}const n=new P("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new P("size");return s.xform=r,t.push(s),t.push(new P("timeCreated")),t.push(new P("updated")),t.push(new P("md5Hash",null,!0)),t.push(new P("cacheControl",null,!0)),t.push(new P("contentDisposition",null,!0)),t.push(new P("contentEncoding",null,!0)),t.push(new P("contentLanguage",null,!0)),t.push(new P("contentType",null,!0)),t.push(new P("metadata","customMetadata",!0)),Ne=t,Ne}function Mi(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new F(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function $i(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return Mi(r,t),r}function Rn(t,e,n){const r=wn(e);return r===null?null:$i(t,r,n)}function Hi(t,e,n,r){const s=wn(e);if(s===null||!He(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(l=>{const d=t.bucket,f=t.fullPath,m="/b/"+o(d)+"/o/"+o(f),g=ye(m,n,r),_=_n({alt:"media",token:l});return g+_})[0]}function In(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class le{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(t){if(!t)throw pt()}function gt(t,e){function n(r,s){const i=Rn(t,s,e);return W(i!==null),i}return n}function zi(t,e){function n(r,s){const i=Rn(t,s,e);return W(i!==null),Hi(i,s,t.host,t._protocol)}return n}function ve(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=oi():s=ii():n.getStatus()===402?s=si(t.bucket):n.getStatus()===403?s=ai(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function An(t){const e=ve(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=ri(t.path)),i.serverResponse=s.serverResponse,i}return n}function Vi(t,e,n){const r=e.fullServerUrl(),s=ye(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new le(s,i,gt(t,n),o);return a.errorHandler=An(e),a}function qi(t,e,n){const r=e.fullServerUrl(),s=ye(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new le(s,i,zi(t,n),o);return a.errorHandler=An(e),a}function Wi(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function Sn(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=Wi(null,e)),r}function Gi(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let A="";for(let v=0;v<2;v++)A=A+Math.random().toString().slice(2);return A}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const l=Sn(e,r,s),d=In(l,n),f="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+c+`\r
Content-Type: `+l.contentType+`\r
\r
`,m=`\r
--`+c+"--",g=G.getBlob(f,r,m);if(g===null)throw mn();const _={name:l.fullPath},O=ye(i,t.host,t._protocol),y="POST",U=t.maxUploadRetryTime,x=new le(O,y,gt(t,n),U);return x.urlParams=_,x.headers=o,x.body=g.uploadData(),x.errorHandler=ve(e),x}class je{constructor(e,n,r,s){this.current=e,this.total=n,this.finalized=!!r,this.metadata=s||null}}function _t(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{W(!1)}return W(!!n&&(e||["active"]).indexOf(n)!==-1),n}function Ki(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o=Sn(e,r,s),a={name:o.fullPath},c=ye(i,t.host,t._protocol),l="POST",d={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},f=In(o,n),m=t.maxUploadRetryTime;function g(O){_t(O);let y;try{y=O.getResponseHeader("X-Goog-Upload-URL")}catch{W(!1)}return W(He(y)),y}const _=new le(c,l,g,m);return _.urlParams=a,_.headers=d,_.body=f,_.errorHandler=ve(e),_}function Xi(t,e,n,r){const s={"X-Goog-Upload-Command":"query"};function i(l){const d=_t(l,["active","final"]);let f=null;try{f=l.getResponseHeader("X-Goog-Upload-Size-Received")}catch{W(!1)}f||W(!1);const m=Number(f);return W(!isNaN(m)),new je(m,r.size(),d==="final")}const o="POST",a=t.maxUploadRetryTime,c=new le(n,o,i,a);return c.headers=s,c.errorHandler=ve(e),c}const zt=256*1024;function Yi(t,e,n,r,s,i,o,a){const c=new je(0,0);if(o?(c.current=o.current,c.total=o.total):(c.current=0,c.total=r.size()),r.size()!==c.total)throw di();const l=c.total-c.current;let d=l;s>0&&(d=Math.min(d,s));const f=c.current,m=f+d;let g="";d===0?g="finalize":l===d?g="upload, finalize":g="upload";const _={"X-Goog-Upload-Command":g,"X-Goog-Upload-Offset":`${c.current}`},O=r.slice(f,m);if(O===null)throw mn();function y(v,S){const C=_t(v,["active","final"]),Y=c.current+d,$=r.size();let M;return C==="final"?M=gt(e,i)(v,S):M=null,new je(Y,$,C==="final",M)}const U="POST",x=e.maxUploadRetryTime,A=new le(n,U,y,x);return A.headers=_,A.body=O.uploadData(),A.progressCallback=a||null,A.errorHandler=ve(t),A}const B={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function tt(t){switch(t){case"running":case"pausing":case"canceling":return B.RUNNING;case"paused":return B.PAUSED;case"success":return B.SUCCESS;case"canceled":return B.CANCELED;case"error":return B.ERROR;default:return B.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e,n,r){if(yi(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const i=e;this.next=i.next,this.error=i.error,this.complete=i.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class Zi{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ee.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ee.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ee.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw fe("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw fe("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw fe("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw fe("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw fe("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Qi extends Zi{initXhr(){this.xhr_.responseType="text"}}function oe(){return new Qi}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=Tn(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=s=>{if(this._request=void 0,this._chunkMultiplier=1,s._codeEquals(D.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const i=this.isExponentialBackoffExpired();if(bn(s.status,[]))if(i)s=fn();else{this.sleepTime=Math.max(this.sleepTime*2,ni),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=s,this._transition("error")}},this._metadataErrorHandler=s=>{this._request=void 0,s._codeEquals(D.CANCELED)?this.completeTransitions_():(this._error=s,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((s,i)=>{this._resolve=s,this._reject=i,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=Ki(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,oe,e,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._uploadUrl=i,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const s=Xi(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(s,oe,n,r);this._request=i,i.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=zt*this._chunkMultiplier,n=new je(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((s,i)=>{let o;try{o=Yi(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(c){this._error=c,this._transition("error");return}const a=this._ref.storage._makeRequest(o,oe,s,i,!1);this._request=a,a.getPromise().then(c=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(c.current),c.finalized?(this._metadata=c.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){zt*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=Vi(this._ref.storage,this._ref._location,this._mappings),s=this._ref.storage._makeRequest(r,oe,e,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=Gi(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,oe,e,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=pn(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=tt(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,s){const i=new Ji(n||void 0,r||void 0,s||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(tt(this._state)){case B.SUCCESS:ie(this._resolve.bind(null,this.snapshot))();break;case B.CANCELED:case B.ERROR:const n=this._reject;ie(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(tt(this._state)){case B.RUNNING:case B.PAUSED:e.next&&ie(e.next.bind(e,this.snapshot))();break;case B.SUCCESS:e.complete&&ie(e.complete.bind(e))();break;case B.CANCELED:case B.ERROR:e.error&&ie(e.error.bind(e,this._error))();break;default:e.error&&ie(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e,n){this._service=e,n instanceof F?this._location=n:this._location=F.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ne(e,n)}get root(){const e=new F(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Dn(this._location.path)}get storage(){return this._service}get parent(){const e=Bi(this._location.path);if(e===null)return null;const n=new F(this._location.bucket,e);return new ne(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw pi(e)}}function to(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new eo(t,new G(e),n)}function no(t){t._throwIfRoot("getDownloadURL");const e=qi(t.storage,t._location,Tn());return t.storage.makeRequestWithTokens(e,oe).then(n=>{if(n===null)throw hi();return n})}function ro(t,e){const n=Fi(t._location.path,e),r=new F(t._location.bucket,n);return new ne(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function so(t){return/^[A-Za-z]+:\/\//.test(t)}function io(t,e){return new ne(t,e)}function Cn(t,e){if(t instanceof bt){const n=t;if(n._bucket==null)throw ui();const r=new ne(n,n._bucket);return e!=null?Cn(r,e):r}else return e!==void 0?ro(t,e):t}function oo(t,e){if(e&&so(e)){if(t instanceof bt)return io(t,e);throw dt("To use ref(service, url), the first argument must be a Storage instance.")}else return Cn(t,e)}function Vt(t,e){const n=e==null?void 0:e[hn];return n==null?null:F.makeFromBucketSpec(n,t)}function ao(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:Fr(s,t.app.options.projectId))}class bt{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=dn,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=ei,this._maxUploadRetryTime=ti,this._requests=new Set,s!=null?this._bucket=F.makeFromBucketSpec(s,this._host):this._bucket=Vt(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=F.makeFromBucketSpec(this._url,e):this._bucket=Vt(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Ht("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Ht("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ne(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new mi(gn());{const o=Ii(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const qt="@firebase/storage",Wt="0.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const On="storage";function co(t,e,n){return t=$e(t),to(t,e,n)}function lo(t){return t=$e(t),no(t)}function uo(t,e){return t=$e(t),oo(t,e)}function ho(t=Hs(),e){t=$e(t);const r=Ls(t,On).getImmediate({identifier:e}),s=Ur("storage");return s&&fo(r,...s),r}function fo(t,e,n,r={}){ao(t,e,n,r)}function po(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new bt(n,r,s,e,$s)}function mo(){Le(new me(On,po,"PUBLIC").setMultipleInstances(!0)),ae(qt,Wt,""),ae(qt,Wt,"esm2017")}mo();const go={apiKey:"AIzaSyCIiP9Ejq1jbu66KrU_6tSaYCbv1C5O6UA",authDomain:"react-pos-70e5e.firebaseapp.com",projectId:"react-pos-70e5e",storageBucket:"react-pos-70e5e.appspot.com",messagingSenderId:"673530317383",appId:"1:673530317383:web:eb51e48ebac587a3cfbf62",measurementId:"G-CR190PJ8E8"},_o=cn(go),bo=ho(_o),yo={display:"flex",alignItems:"center",justifyContent:"center",padding:"40px",borderWidth:2,borderRadius:2,borderColor:"#eeeeee",borderStyle:"dashed",backgroundColor:"#fafafa",color:"#bdbdbd",transition:"border .3s ease-in-out",cursor:"pointer"},vo={borderColor:"#2196f3"},Eo={borderColor:"#00e676"},wo={borderColor:"#ff1744"},Io=()=>{const[t,e]=p.useState(null),[n,r]=p.useState(""),[s,i]=p.useState([]),[o,a]=p.useState(""),[c,l]=p.useState(""),[d,f]=p.useState(""),[m,g]=p.useState(""),[_,O]=p.useState(""),[y,U]=p.useState(""),[x]=Mn(),[A,v]=p.useState(0),S=jn(),C=p.useCallback((E,H)=>{const J=E;E.length>0&&e(J[0]),i(E.map(k=>Object.assign(k,{preview:URL.createObjectURL(k)}))),H.map(k=>{Z.error(`${k.file.name} is not a valid image file`)})},[e,i]),{getRootProps:Y,getInputProps:$,isDragActive:M,isDragAccept:L,isDragReject:Ee}=Qt({onDrop:C,accept:"image/jpeg, image/png"}),we=p.useMemo(()=>({...yo,...M?vo:{},...L?Eo:{},...Ee?wo:{}}),[M,Ee,L]);p.useEffect(()=>{(()=>{if(t){const H=uo(bo,`ecom/${Math.random()}-${t.name}`),J=co(H,t);J.on("state_changed",k=>{const Ie=k.bytesTransferred/k.totalBytes*100;v(Ie)},k=>{Z.error("Error uploading image"+k)},()=>{lo(J.snapshot.ref).then(k=>{r(k),Z.success("Image uploaded successfully")})})}})()},[t]);const De=()=>c===""||d===""||m===""||_===""||y===""||o===""?!1:_!==y?(Z.error("Password and Confirm Password must be same"),!1):!0,Te={fullName:c+" "+d,email:m,password:_,role:o,imageUrl:n},Re=E=>{if(E.preventDefault(),De()===!1){Z.error("Please fill all the fields");return}$n.post("/api/v1/users/register",Te).then(H=>{S("/dashboard/users"),Z.success(H.data.message)}).catch(H=>{Z.error(H.response.data.message)})};return h.jsxs("div",{className:"card shadow",children:[h.jsx("div",{className:"card-header py-3 d-sm-flex align-items-center justify-content-between",children:h.jsx("h6",{className:"m-0 font-weight-bold text-primary",children:"Add new user"})}),h.jsx("div",{className:"card-body",children:h.jsx("div",{children:h.jsxs("form",{children:[h.jsxs("div",{className:"row mb-4",children:[h.jsx("div",{className:"col",children:h.jsxs("div",{"data-mdb-input-init":!0,className:"form-outline",children:[h.jsx("label",{className:"form-label",htmlFor:"form6Example1",children:"First name"}),h.jsx("input",{type:"text",id:"form6Example1",className:"form-control",onChange:E=>l(E.target.value)})]})}),h.jsx("div",{className:"col",children:h.jsxs("div",{"data-mdb-input-init":!0,className:"form-outline",children:[h.jsx("label",{className:"form-label",htmlFor:"form6Example2",children:"Last name"}),h.jsx("input",{type:"text",id:"form6Example2",className:"form-control",onChange:E=>f(E.target.value)})]})})]}),h.jsxs("div",{className:"row mb-4",children:[h.jsx("div",{className:"col",children:h.jsxs("div",{"data-mdb-input-init":!0,className:"form-outline",children:[h.jsx("label",{className:"form-label",htmlFor:"form6Example6",children:"Email"}),h.jsx("input",{type:"email",id:"form6Example6",className:"form-control",onChange:E=>g(E.target.value)})]})}),h.jsx("div",{className:"col",children:h.jsxs("div",{"data-mdb-input-init":!0,className:"form-outline",children:[h.jsx("label",{className:"form-label",htmlFor:"form6Example7",children:"Select User Type"}),h.jsxs("select",{className:"form-control",id:"form6Example7",onChange:E=>a(E.target.value),children:[h.jsx("option",{children:"Choose your option"}),h.jsx("option",{value:"admin",children:"Admin"}),h.jsx("option",{value:"user",children:"User"})]})]})})]}),h.jsxs("div",{className:"row mb-4",children:[h.jsx("div",{className:"col",children:h.jsxs("div",{"data-mdb-input-init":!0,className:"form-outline",children:[h.jsx("label",{className:"form-label",htmlFor:"form6Example8",children:"Password"}),h.jsx("input",{type:"password",id:"form6Example8",className:"form-control",onChange:E=>O(E.target.value)})]})}),h.jsx("div",{className:"col",children:h.jsxs("div",{"data-mdb-input-init":!0,className:"form-outline",children:[h.jsx("label",{className:"form-label",htmlFor:"form6Example9",children:"Confirm Password"}),h.jsx("input",{type:"password",id:"form6Example9",className:"form-control",onChange:E=>U(E.target.value)})]})})]}),h.jsx("div",{className:"row",children:h.jsxs("div",{className:"col-12",children:[h.jsx("label",{className:"form-label",htmlFor:"form6Example6",children:"Add User Image"}),h.jsxs("div",{"data-mdb-input-init":!0,className:"form-outline mb-4",children:[h.jsxs("div",{...Y({style:we}),className:"d-flex flex-column",children:[h.jsx("input",{...$()}),s.map(E=>h.jsx("div",{children:h.jsx("img",{src:E.preview,alt:E.name,width:"150px"})},E.name)),h.jsx("div",{className:"mt-2",children:A?"Uploading":"Drag and drop your image here"})]}),h.jsx("div",{className:"progress",style:{height:"3px"},children:h.jsx("div",{className:"progress-bar progress-bar-striped progress-bar-animated",role:"progressbar","aria-valuemin":0,"aria-valuemax":100,style:{width:`${A}%`}})})]})]})}),h.jsx("button",{"data-mdb-ripple-init":!0,type:"button",className:x?"btn btn-primary btn-block disabled":"btn btn-primary btn-block",onClick:E=>Re(E),children:x?"Loading...":"Add User"})]})})})]})};export{Io as default};
