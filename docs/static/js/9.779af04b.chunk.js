webpackJsonp([9],{154:function(e,n,t){"use strict";function a(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function r(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}function o(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var s=t(0),i=t.n(s),c=t(172),l=t(410),u=(t.n(l),function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}()),m=function(e){function n(){return a(this,n),r(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return o(n,e),u(n,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return i.a.createElement("div",{className:"page page--error-page"},i.a.createElement("section",{className:"section section--404"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"content"},i.a.createElement("h1",{className:"primary-heading u-text-center"},i.a.createElement("span",{className:"primary-heading--main"},"404"),i.a.createElement("span",{className:"primary-heading--sub"},"Oops, Sorry we can't find that page!")),i.a.createElement(c.a,{url:"home",classValue:"btn--blue"},"Go to Home")))))}}]),n}(s.Component);n.default=m},172:function(e,n,t){"use strict";var a=t(0),r=t.n(a),o=t(4),s=t(173),i=(t.n(s),function(e){var n=["nav-btn","btn"],t=e.classValue.split(" "),a=n.concat(t);return r.a.createElement("div",{className:a.join(" ")},r.a.createElement(o.b,{to:"/"+e.url},e.children))});n.a=i},173:function(e,n,t){var a=t(174);"string"===typeof a&&(a=[[e.i,a,""]]);var r={hmr:!1};r.transform=void 0;t(143)(a,r);a.locals&&(e.exports=a.locals)},174:function(e,n,t){n=e.exports=t(142)(!0),n.push([e.i,".nav-btn a{-ms-flex-pack:center;justify-content:center}@media screen and (max-width:768px){.nav-btn{margin-left:auto;margin-right:auto}}","",{version:3,sources:["/Users/madhuni/Documents/office_work/etherealmachines.com/src/components/ui/nav-btn/nav-btn.css"],names:[],mappings:"AAKA,WACE,qBAAsB,AAClB,sBAAwB,CAC7B,AAED,oCACE,SACE,iBAAkB,AAClB,iBAAmB,CACpB,CACF",file:"nav-btn.css",sourcesContent:["/*\n * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'\n * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'\n */\n\n.nav-btn a {\n  -ms-flex-pack: center;\n      justify-content: center;\n}\n\n@media screen and (max-width: 768px) {\n  .nav-btn {\n    margin-left: auto;\n    margin-right: auto;\n  }\n}"],sourceRoot:""}])},410:function(e,n,t){var a=t(411);"string"===typeof a&&(a=[[e.i,a,""]]);var r={hmr:!1};r.transform=void 0;t(143)(a,r);a.locals&&(e.exports=a.locals)},411:function(e,n,t){n=e.exports=t(142)(!0),n.push([e.i,".page--error-page h1{color:var(--color-black)}.section--404{text-align:center}.section--404 .content{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.section--404 .nav-btn{margin-right:auto;margin-left:auto}","",{version:3,sources:["/Users/madhuni/Documents/office_work/etherealmachines.com/src/pages/error-page/error-page.css"],names:[],mappings:"AAKA,qBACE,wBAA0B,CAC3B,AAED,cACE,iBAAmB,CACpB,AAED,uBACE,kBAAmB,AACnB,QAAS,AACT,SAAU,AACV,uCAAyC,AACrC,mCAAqC,AACjC,8BAAiC,CAC1C,AAED,uBACE,kBAAmB,AACnB,gBAAkB,CACnB",file:"error-page.css",sourcesContent:["/*\n * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'\n * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'\n */\n\n.page--error-page h1{\n  color: var(--color-black);\n}\n\n.section--404 {\n  text-align: center;\n}\n\n.section--404 .content {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n      -ms-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n\n.section--404 .nav-btn {\n  margin-right: auto;\n  margin-left: auto;\n}"],sourceRoot:""}])}});
//# sourceMappingURL=9.779af04b.chunk.js.map