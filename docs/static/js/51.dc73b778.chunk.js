(this["webpackJsonpetherealmachines.com"]=this["webpackJsonpetherealmachines.com"]||[]).push([[51],{1721:function(e,t,n){},1804:function(e,t,n){"use strict";n.r(t);var a=n(27),r=n(0),c=n(47),s=n(164),l=n(232),i=n(188),o=(n(1721),n(217),n(233)),u=n(249),b=n.n(u),j=n(1),d=n(39),h=n(54),m=function(e,t){d.a.post("/blogs/",t,{headers:Object(j.a)(Object(j.a)({},h.a),{},{"Content-Type":"application/json"})}).then((function(t){e(t)})).catch((function(t){return e(t)}))},p=n(205),O=n(87),f=n(5),v=n(195),x=n(194),g=n(2);t.default=Object(c.b)(null,(function(e){return{addBlogItems:function(t){e({type:f.a,value:t})}}}))((function(e){var t=Object(r.useState)(b()()),n=Object(a.a)(t,2),c=n[0],u=(n[1],Object(r.useState)("")),j=Object(a.a)(u,2),d=j[0],h=(j[1],Object(r.useState)("")),f=Object(a.a)(h,2),y=f[0],S=(f[1],Object(r.useState)("")),w=Object(a.a)(S,2),C=w[0],N=(w[1],Object(r.useState)(!1)),k=Object(a.a)(N,2),q=k[0],E=(k[1],Object(r.useState)(!1)),R=Object(a.a)(E,2),V=R[0],A=R[1],T=Object(r.useState)(!1),B=Object(a.a)(T,2),F=B[0],I=B[1],M=Object(r.useState)(!1),D=Object(a.a)(M,2),J=D[0],U=D[1],H=Object(r.useState)(null),L=Object(a.a)(H,2),P=L[0],z=L[1],G=Object(r.useState)(!1),K=Object(a.a)(G,2),Q=K[0],W=K[1],X=function(e){e.target.name(e.target.value);var t=e.target,n="checkbox"===t.type?t.checked:t.value;(0,t.name)(n)},Y=function(t){var n=Z();if(201===t.status)e.addBlogItems(n),A(!0),U(!0),z(null),I(!1);else if(t.response)z(t.response.data),I(!1),A(!1),U(!1),W(!1);else{z({Error:["Oops! Something went wrong, please try again."]}),I(!1),A(!1),U(!1),W(!1)}},Z=function(){return{id:c,author:d,title:y,thumbnail:C,publish:q}};return Object(g.jsxs)("div",{className:"page page--blogs-page",children:[Object(g.jsx)(v.a,{}),Object(g.jsx)("section",{className:"section section--blogs",children:Object(g.jsx)("div",{className:"container",children:Object(g.jsxs)("div",{className:"create-blog-form",children:[Object(g.jsxs)(l.a,{classValue:"form",onSubmitHandler:function(e){e.preventDefault(),I(!0),W(!0);var t=Z();t&&m(Y,t)},children:[Object(g.jsxs)(i.a,{children:[Object(g.jsxs)("label",{htmlFor:"title",children:["Title",Object(g.jsx)("span",{className:"star",children:" *"})]}),Object(g.jsx)("input",{type:"text",className:"input-element",placeholder:"Enter Blog's Title",name:"title",id:"title",required:!0,readOnly:J,value:y,onChange:function(e){return X(e)}})]}),Object(g.jsxs)(i.a,{children:[Object(g.jsxs)("label",{htmlFor:"author",children:["Author",Object(g.jsx)("span",{className:"star",children:" *"})]}),Object(g.jsx)("input",{type:"text",className:"input-element",placeholder:"Enter Author Name",name:"author",id:"author",required:!0,readOnly:J,value:d,onChange:function(e){return X(e)}})]}),Object(g.jsxs)(i.a,{children:[Object(g.jsxs)("label",{htmlFor:"thumbnail",children:["Thumbnail",Object(g.jsx)("span",{className:"star",children:" *"})]}),Object(g.jsx)("input",{type:"text",className:"input-element",placeholder:"Enter Image URL",name:"thumbnail",id:"thumbnail",required:!0,readOnly:J,value:C,onChange:function(e){return X(e)}})]}),Object(g.jsxs)("div",{style:{margin:5},children:[Object(g.jsx)("input",{type:"checkbox",name:"publish",id:"publish",onChange:function(e){return X(e)},checked:q})," ",Object(g.jsx)("span",{children:Object(g.jsx)("b",{children:"Publish"})})]}),P?Object(g.jsx)(p.a,{isRequired:!0,errorMsg:P}):null,F?Object(g.jsx)(O.a,{children:"Submitting your request..."}):null,Object(g.jsx)(o.a,{type:"submit",classValue:"form-btn",disabled:Q,children:"Create"})]}),V?Object(g.jsx)(s.a,{to:"/blogs/create/content/".concat(c),children:Object(g.jsx)("button",{className:"form-btn",children:"Edit Content"})}):null]})})}),Object(g.jsx)(x.a,{})]})}))},249:function(e,t,n){var a=n(455),r=n(456),c=r;c.v1=a,c.v4=r,e.exports=c},320:function(e,t){var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(n){var a=new Uint8Array(16);e.exports=function(){return n(a),a}}else{var r=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0===(3&t)&&(e=4294967296*Math.random()),r[t]=e>>>((3&t)<<3)&255;return r}}},321:function(e,t){for(var n=[],a=0;a<256;++a)n[a]=(a+256).toString(16).substr(1);e.exports=function(e,t){var a=t||0,r=n;return[r[e[a++]],r[e[a++]],r[e[a++]],r[e[a++]],"-",r[e[a++]],r[e[a++]],"-",r[e[a++]],r[e[a++]],"-",r[e[a++]],r[e[a++]],"-",r[e[a++]],r[e[a++]],r[e[a++]],r[e[a++]],r[e[a++]],r[e[a++]]].join("")}},455:function(e,t,n){var a,r,c=n(320),s=n(321),l=0,i=0;e.exports=function(e,t,n){var o=t&&n||0,u=t||[],b=(e=e||{}).node||a,j=void 0!==e.clockseq?e.clockseq:r;if(null==b||null==j){var d=c();null==b&&(b=a=[1|d[0],d[1],d[2],d[3],d[4],d[5]]),null==j&&(j=r=16383&(d[6]<<8|d[7]))}var h=void 0!==e.msecs?e.msecs:(new Date).getTime(),m=void 0!==e.nsecs?e.nsecs:i+1,p=h-l+(m-i)/1e4;if(p<0&&void 0===e.clockseq&&(j=j+1&16383),(p<0||h>l)&&void 0===e.nsecs&&(m=0),m>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");l=h,i=m,r=j;var O=(1e4*(268435455&(h+=122192928e5))+m)%4294967296;u[o++]=O>>>24&255,u[o++]=O>>>16&255,u[o++]=O>>>8&255,u[o++]=255&O;var f=h/4294967296*1e4&268435455;u[o++]=f>>>8&255,u[o++]=255&f,u[o++]=f>>>24&15|16,u[o++]=f>>>16&255,u[o++]=j>>>8|128,u[o++]=255&j;for(var v=0;v<6;++v)u[o+v]=b[v];return t||s(u)}},456:function(e,t,n){var a=n(320),r=n(321);e.exports=function(e,t,n){var c=t&&n||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null);var s=(e=e||{}).random||(e.rng||a)();if(s[6]=15&s[6]|64,s[8]=63&s[8]|128,t)for(var l=0;l<16;++l)t[c+l]=s[l];return t||r(s)}}}]);
//# sourceMappingURL=51.dc73b778.chunk.js.map