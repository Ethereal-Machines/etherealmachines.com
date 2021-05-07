(this["webpackJsonpetherealmachines.com"]=this["webpackJsonpetherealmachines.com"]||[]).push([[49],{1755:function(e,t,n){"use strict";var r=n(4),a=n(7),c=n(0),o=n(41),i=n(11),s=n(12),l=n(13),u=n(14),d=n(8),f=n.n(d),p=n(55),b=n.n(p),v=n(60),h=n(36),y=n(9),m=c.forwardRef((function(e,t){var n,r=e.prefixCls,o=e.forceRender,i=e.className,s=e.style,l=e.children,u=e.isActive,d=e.role,p=c.useState(u||o),b=Object(y.a)(p,2),v=b[0],h=b[1];return c.useEffect((function(){(o||u)&&h(!0)}),[o,u]),v?c.createElement("div",{ref:t,className:f()("".concat(r,"-content"),(n={},Object(a.a)(n,"".concat(r,"-content-active"),u),Object(a.a)(n,"".concat(r,"-content-inactive"),!u),n),i),style:s,role:d},c.createElement("div",{className:"".concat(r,"-content-box")},l)):null}));m.displayName="PanelContent";var j=m,O=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.apply(this,arguments)).handleItemClick=function(){var t=e.props,n=t.onItemClick,r=t.panelKey;"function"===typeof n&&n(r)},e.handleKeyPress=function(t){"Enter"!==t.key&&13!==t.keyCode&&13!==t.which||e.handleItemClick()},e}return Object(s.a)(n,[{key:"shouldComponentUpdate",value:function(e){return!b()(this.props,e)}},{key:"render",value:function(){var e,t,n=this,r=this.props,o=r.className,i=r.id,s=r.style,l=r.prefixCls,u=r.header,d=r.headerClass,p=r.children,b=r.isActive,v=r.showArrow,y=r.destroyInactivePanel,m=r.accordion,O=r.forceRender,C=r.openMotion,x=r.expandIcon,g=r.extra,P=r.collapsible,k="disabled"===P,w=f()("".concat(l,"-header"),(e={},Object(a.a)(e,d,d),Object(a.a)(e,"".concat(l,"-header-collapsible-only"),"header"===P),e)),N=f()((t={},Object(a.a)(t,"".concat(l,"-item"),!0),Object(a.a)(t,"".concat(l,"-item-active"),b),Object(a.a)(t,"".concat(l,"-item-disabled"),k),t),o),I=c.createElement("i",{className:"arrow"});return v&&"function"===typeof x&&(I=x(this.props)),c.createElement("div",{className:N,style:s,id:i},c.createElement("div",{className:w,onClick:function(){return"header"!==P&&n.handleItemClick()},role:m?"tab":"button",tabIndex:k?-1:0,"aria-expanded":b,onKeyPress:this.handleKeyPress},v&&I,"header"===P?c.createElement("span",{onClick:this.handleItemClick,className:"".concat(l,"-header-text")},u):u,g&&c.createElement("div",{className:"".concat(l,"-extra")},g)),c.createElement(h.b,Object.assign({visible:b,leavedClassName:"".concat(l,"-content-hidden")},C,{forceRender:O,removeOnLeave:y}),(function(e,t){var n=e.className,r=e.style;return c.createElement(j,{ref:t,prefixCls:l,className:n,style:r,isActive:b,forceRender:O,role:m?"tabpanel":null},p)})))}}]),n}(c.Component);O.defaultProps={showArrow:!0,isActive:!1,onItemClick:function(){},headerClass:"",forceRender:!1};var C=O;function x(e){var t=e;return Array.isArray(t)||(t=t?[t]:[]),t.map((function(e){return String(e)}))}var g=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var r;Object(i.a)(this,n),(r=t.call(this,e)).onClickItem=function(e){var t=r.state.activeKey;if(r.props.accordion)t=t[0]===e?[]:[e];else{var n=(t=Object(o.a)(t)).indexOf(e);n>-1?t.splice(n,1):t.push(e)}r.setActiveKey(t)},r.getNewChild=function(e,t){if(!e)return null;var n=r.state.activeKey,a=r.props,o=a.prefixCls,i=a.openMotion,s=a.accordion,l=a.destroyInactivePanel,u=a.expandIcon,d=a.collapsible,f=e.key||String(t),p=e.props,b=p.header,v=p.headerClass,h=p.destroyInactivePanel,y=p.collapsible,m=null!==y&&void 0!==y?y:d,j={key:f,panelKey:f,header:b,headerClass:v,isActive:s?n[0]===f:n.indexOf(f)>-1,prefixCls:o,destroyInactivePanel:null!==h&&void 0!==h?h:l,openMotion:i,accordion:s,children:e.props.children,onItemClick:"disabled"===m?null:r.onClickItem,expandIcon:u,collapsible:m};return"string"===typeof e.type?e:c.cloneElement(e,j)},r.getItems=function(){var e=r.props.children;return Object(v.a)(e).map(r.getNewChild)},r.setActiveKey=function(e){"activeKey"in r.props||r.setState({activeKey:e}),r.props.onChange(r.props.accordion?e[0]:e)};var a=e.activeKey,s=e.defaultActiveKey;return"activeKey"in e&&(s=a),r.state={activeKey:x(s)},r}return Object(s.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return!b()(this.props,e)||!b()(this.state,t)}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,r=t.className,o=t.style,i=t.accordion,s=f()((e={},Object(a.a)(e,n,!0),Object(a.a)(e,r,!!r),e));return c.createElement("div",{className:s,style:o,role:i?"tablist":null},this.getItems())}}],[{key:"getDerivedStateFromProps",value:function(e){var t={};return"activeKey"in e&&(t.activeKey=x(e.activeKey)),t}}]),n}(c.Component);g.defaultProps={prefixCls:"rc-collapse",onChange:function(){},accordion:!1,destroyInactivePanel:!1},g.Panel=C;var P=g,k=(g.Panel,n(81)),w=n(35),N=n(91),I=n(77),K=function(e){Object(I.a)(!("disabled"in e),"Collapse.Panel",'`disabled` is deprecated. Please use `collapsible="disabled"` instead.');var t=c.useContext(N.b).getPrefixCls,n=e.prefixCls,o=e.className,i=void 0===o?"":o,s=e.showArrow,l=void 0===s||s,u=t("collapse",n),d=f()(Object(a.a)({},"".concat(u,"-no-arrow"),!l),i);return c.createElement(P.Panel,Object(r.a)({},e,{prefixCls:u,className:d}))},A=n(61),E=n(28),S=function(e){var t,n=c.useContext(N.b),o=n.getPrefixCls,i=n.direction,s=e.prefixCls,l=e.className,u=void 0===l?"":l,d=e.bordered,p=void 0===d||d,b=e.ghost,h=o("collapse",s),y=function(){var t=e.expandIconPosition;return void 0!==t?t:"rtl"===i?"right":"left"}(),m=f()((t={},Object(a.a)(t,"".concat(h,"-borderless"),!p),Object(a.a)(t,"".concat(h,"-icon-position-").concat(y),!0),Object(a.a)(t,"".concat(h,"-rtl"),"rtl"===i),Object(a.a)(t,"".concat(h,"-ghost"),!!b),t),u),j=Object(r.a)(Object(r.a)({},A.a),{motionAppear:!1,leavedClassName:"".concat(h,"-content-hidden")});return c.createElement(P,Object(r.a)({openMotion:j},e,{bordered:p,expandIcon:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.expandIcon,r=n?n(t):c.createElement(k.a,{rotate:t.isActive?90:void 0});return Object(E.a)(r,(function(){return{className:f()(r.props.className,"".concat(h,"-arrow"))}}))},prefixCls:h,className:m}),function(){var t=e.children;return Object(v.a)(t).map((function(e,t){var n;if(null===(n=e.props)||void 0===n?void 0:n.disabled){var a=e.key||String(t),c=e.props,o=c.disabled,i=c.collapsible,s=Object(r.a)(Object(r.a)({},Object(w.a)(e.props,["disabled"])),{key:a,collapsible:null!==i&&void 0!==i?i:o?"disabled":void 0});return Object(E.a)(e,s)}return e}))}())};S.Panel=K;var R=S;t.a=R},1773:function(e,t,n){"use strict";n.r(t);var r=n(266),a=n(267),c=n(284),o=n(283),i=n(0),s=n(254),l=n(1755),u=n(2),d=l.a.Panel,f=Object(u.jsx)("p",{style:{paddingLeft:24},children:"A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world."}),p=function(e){Object(c.a)(n,e);var t=Object(o.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(s.a,{heading:"FAQs"}),Object(u.jsxs)(l.a,{bordered:!1,defaultActiveKey:"1",accordion:!0,children:[Object(u.jsx)(d,{header:"Driver",children:Object(u.jsxs)(l.a,{defaultActiveKey:"1",accordion:!0,children:[Object(u.jsx)(d,{header:"Driver Missing",children:f},"1"),Object(u.jsx)(d,{header:"Driver installation",children:f},"2")]})},"1"),Object(u.jsx)(d,{header:"Components",children:f},"2")]})]})}}]),n}(i.Component);t.default=p},254:function(e,t,n){"use strict";n(0);var r=n(2);t.a=function(e){return Object(r.jsx)("div",{className:"heading",children:Object(r.jsx)("h1",{children:e.heading})})}},266:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return r}))},267:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,"a",(function(){return a}))},283:function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,"a",(function(){return i}));var c=n(352);function o(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?Object(c.a)(e):t}function i(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=r(e);if(t){var c=r(this).constructor;n=Reflect.construct(a,arguments,c)}else n=a.apply(this,arguments);return o(this,n)}}},284:function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}n.d(t,"a",(function(){return a}))},352:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return r}))}}]);
//# sourceMappingURL=49.27e65849.chunk.js.map