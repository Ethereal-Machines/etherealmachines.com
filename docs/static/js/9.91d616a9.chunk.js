webpackJsonp([9],{160:function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}function o(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var i=t(0),s=t.n(i),c=t(180),l=t(430),u=(t.n(l),function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}()),m=function(e){function n(){return r(this,n),a(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return o(n,e),u(n,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return s.a.createElement("div",{className:"page page--error-page"},s.a.createElement("section",{className:"section section--404"},s.a.createElement("div",{className:"container container--error-page"},s.a.createElement("div",{className:"content"},s.a.createElement("h1",{className:"primary-heading u-text-center"},s.a.createElement("span",{className:"primary-heading--main"},"404"),s.a.createElement("span",{className:"primary-heading--sub"},"Oops, Sorry we can't find that page!")),s.a.createElement(c.a,{url:"",classValue:"btn--blue"},"Go to Home")))))}}]),n}(i.Component);n.default=m},180:function(e,n,t){"use strict";var r=t(0),a=t.n(r),o=t(4),i=t(186),s=(t.n(i),function(e){var n=["nav-btn","btn"],t=e.classValue.split(" "),r=n.concat(t);return a.a.createElement("div",{className:r.join(" ")},a.a.createElement(o.b,{to:"/"+e.url},e.children))});n.a=s},186:function(e,n,t){var r=t(187);"string"===typeof r&&(r=[[e.i,r,""]]);var a={hmr:!1};a.transform=void 0;t(149)(r,a);r.locals&&(e.exports=r.locals)},187:function(e,n,t){n=e.exports=t(148)(!0),n.push([e.i,".nav-btn a{-ms-flex-pack:center;justify-content:center}@media screen and (max-width:768px){.nav-btn{margin-left:auto;margin-right:auto}}","",{version:3,sources:["/Users/madhuni/Documents/office_work/etherealmachines.com/src/components/ui/nav-btn/nav-btn.css"],names:[],mappings:"AAKA,WACE,qBAAsB,AAClB,sBAAwB,CAC7B,AAED,oCACE,SACE,iBAAkB,AAClB,iBAAmB,CACpB,CACF",file:"nav-btn.css",sourcesContent:["/*\n * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'\n * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'\n */\n\n.nav-btn a {\n  -ms-flex-pack: center;\n      justify-content: center;\n}\n\n@media screen and (max-width: 768px) {\n  .nav-btn {\n    margin-left: auto;\n    margin-right: auto;\n  }\n}"],sourceRoot:""}])},430:function(e,n,t){var r=t(431);"string"===typeof r&&(r=[[e.i,r,""]]);var a={hmr:!1};a.transform=void 0;t(149)(r,a);r.locals&&(e.exports=r.locals)},431:function(e,n,t){n=e.exports=t(148)(!0),n.push([e.i,".page--error-page h1{color:var(--color-black)}.section--404{text-align:center}.container--error-page{position:static!important}.section--404 .content{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.section--404 .nav-btn{margin-right:auto;margin-left:auto}","",{version:3,sources:["/Users/madhuni/Documents/office_work/etherealmachines.com/src/pages/error-page/error-page.css"],names:[],mappings:"AAKA,qBACE,wBAA0B,CAC3B,AAED,cACE,iBAAmB,CACpB,AAED,uBACE,yBAA4B,CAC7B,AAED,uBACE,kBAAmB,AACnB,QAAS,AACT,SAAU,AACV,uCAAyC,AACrC,mCAAqC,AACjC,8BAAiC,CAC1C,AAED,uBACE,kBAAmB,AACnB,gBAAkB,CACnB",file:"error-page.css",sourcesContent:["/*\n * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'\n * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'\n */\n\n.page--error-page h1 {\n  color: var(--color-black);\n}\n\n.section--404 {\n  text-align: center;\n}\n\n.container--error-page {\n  position: static !important;\n}\n\n.section--404 .content {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n      -ms-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n\n.section--404 .nav-btn {\n  margin-right: auto;\n  margin-left: auto;\n}"],sourceRoot:""}])}});
//# sourceMappingURL=9.91d616a9.chunk.js.map