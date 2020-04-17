webpackJsonp([22],{1396:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){return{firstRunOrders:e.Orders.firstRun,orders:e.Orders.orders,firstRunCompanies:e.Company.firstRun,companies:e.Company.company}}function c(e){return{getCompany:function(t){e({type:b.n,value:t})},dispatchOrders:function(t){e({type:b.A,value:t})},dispatchChangeOrderStatus:function(t){e({type:b.W,value:t})},dispatchNewVendorData:function(t){e({type:b.h,value:t})},dispatchUpdateFirstRunOrders:function(t){e({type:b.O,value:t})},dispatchUpdateFirstRunCompanies:function(t){e({type:b.L,value:t})}}}Object.defineProperty(t,"__esModule",{value:!0});var l=r(0),s=r.n(l),u=r(150),d=r(88),p=r(3120),f=r(3128),m=r(3132),h=r(471),A=r(3133),b=(r.n(A),r(28)),g=r(1988),v=r(151),E=r(1775),y=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),C=d.q.TabPane,S=function(e){function t(){var e,r,o,i;n(this,t);for(var c=arguments.length,l=Array(c),s=0;s<c;s++)l[s]=arguments[s];return r=o=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),o.state={gToken:Object(v.b)(),showOLoader:!!o.props.firstRunOrders,showCLoader:!!o.props.firstRunCompanies},o.success=function(){d.m.success({title:"Successful",content:"Order status has been changed :)."})},o.error=function(){d.m.error({title:"Oops",content:"Something went wrong. Please try again later :("})},o.callback=function(e){200===e.status&&(o.props.dispatchOrders(e.data),o.setState({showLoader:!1}),o.props.dispatchUpdateFirstRunOrders(!1))},o.changeStatusCallback=function(e,t){200===e.status?("installed"===t?(o.props.dispatchChangeOrderStatus(e.data.updatedOrder),o.props.dispatchNewVendorData(e.data.newVendorData)):o.props.dispatchChangeOrderStatus(e.data),o.success()):(o.error(),console.log(e.response))},o.changeOrderStatus=function(e,t){var r=o.state.gToken;r&&Object(E.c)(o.changeStatusCallback,t,{status:e},r)},o.companyCallback=function(e){200===e.status?(o.props.getCompany(e.data),o.setState({showCLoader:!1}),o.props.dispatchUpdateFirstRunCompanies(!1)):console.log(e.response)},i=r,a(o,i)}return o(t,e),y(t,[{key:"componentDidMount",value:function(){var e=this.state.gToken;e&&(this.props.firstRunOrders&&Object(E.e)(this.callback,this.state.gToken),this.props.firstRunCompanies&&Object(g.a)(this.companyCallback,e))}},{key:"render",value:function(){var e=void 0;return this.props.orders.length>0&&(e=this.props.orders.filter(function(e){return!1===e.orderStatus.allocated})),this.state.showOLoader&&this.state.showCLoader&&!this.props.orders&&!this.props.companies?s.a.createElement(h.a,null):this.props.orders?s.a.createElement(d.q,{defaultActiveKey:"1"},s.a.createElement(C,{tab:s.a.createElement("span",null,s.a.createElement(d.i,{type:"dashboard"}),"Dashboard"),key:"1"},"Orders Dashboard"),s.a.createElement(C,{tab:s.a.createElement("span",null,s.a.createElement(d.i,{type:"ordered-list"}),"Order List"),key:"2"},s.a.createElement(f.a,{Orders:this.props.orders,companies:this.props.companies})),s.a.createElement(C,{tab:s.a.createElement("span",null,s.a.createElement(d.i,{type:"edit"}),"Change Status"),key:"3"},s.a.createElement(m.a,{Orders:this.props.orders,changeOrderStatus:this.changeOrderStatus,companies:this.props.companies})),s.a.createElement(C,{tab:s.a.createElement("span",null,s.a.createElement(d.i,{type:"form"}),"Allocate Order"),key:"4"},s.a.createElement(p.a,{Orders:this.props.orders,unproceedOrder:e,companies:this.props.companies}))):void 0}}]),t}(l.Component);t.default=Object(u.connect)(i,c)(S)},1488:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=function(e){return a.a.createElement("div",{className:"form-control"},e.children)};t.a=o},1522:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(88),i=function(e){return a.a.createElement(o.c,{htmlType:e.htmlTypes,block:!!e.isBlock,size:e.isSize?e.isSize:"large",type:e.isType?e.isType:"default",disabled:!!e.isDisabled&&e.isDisabled,shape:e.shape,className:e.classValue,onClick:e.onClick},e.children)};t.a=i},1539:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=function(e){return a.a.createElement("form",{onSubmit:e.onSubmitHandler},e.children)};t.a=o},1540:function(e,t,r){"use strict";function n(e){return o.a.createElement(i.a,null,o.a.createElement("div",{className:"error-box"},"Warning:\xa0",e.errorMsgs,"\xa0",e.children))}var a=r(0),o=r.n(a),i=r(1488),c=r(1587);r.n(c);t.a=n},1587:function(e,t,r){var n=r(1588);"string"===typeof n&&(n=[[e.i,n,""]]);var a={hmr:!1};a.transform=void 0;r(1360)(n,a);n.locals&&(e.exports=n.locals)},1588:function(e,t,r){t=e.exports=r(1359)(!0),t.push([e.i,".error-box{display:inline-block;list-style:none;text-align:left;color:red;font-size:.8rem}","",{version:3,sources:["D:/Work/Actualize/Ethereal/Github/Ethereal/src/components/form/error-box/error-box.css"],names:[],mappings:"AAEC,WACG,qBAAsB,AACtB,gBAAiB,AACjB,gBAAiB,AACjB,UAAW,AACX,eAAkB,CACrB",file:"error-box.css",sourcesContent:[" \r\n\r\n .error-box {\r\n    display: inline-block;\r\n    list-style: none;\r\n    text-align: left;\r\n    color: red;\r\n    font-size: 0.8rem;\r\n}"],sourceRoot:""}])},1627:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(88),i=r(1488),c=function(e){return a.a.createElement(i.a,null,a.a.createElement("label",{htmlFor:e.name},e.labelName,e.isRequired?a.a.createElement("span",{className:"star"},"*"):null,"\xa0"),a.a.createElement(o.n,Object.assign({showSearch:!0,className:e.classValue,placeholder:e.placeholder,optionFilterProp:"children",onChange:e.onSelect,size:"large",required:!!e.isRequired&&e.isRequired,filterOption:function(e,t){return t.props.children.toLowerCase().indexOf(e.toLowerCase())>=0}},e),e.children))};t.a=c},1679:function(e,t,r){"use strict";r.d(t,"a",function(){return a}),r.d(t,"b",function(){return o}),r.d(t,"d",function(){return i}),r.d(t,"c",function(){return c});var n=r(470),a=function(e,t,r){n.a.post("/product",t,{headers:{"x-auth":r}}).then(function(t){e(t)}).catch(function(t){return e(t)})},o=function(e,t,r,a){n.a.patch("/product/version/"+t,r,{headers:{"x-auth":a}}).then(function(t){e(t)}).catch(function(t){return e(t)})},i=function(e,t,r,a){n.a.patch("/product/version/entry/"+t,r,{headers:{"x-auth":a}}).then(function(t){e(t)}).catch(function(t){return e(t)})},c=function(e,t){n.a.get("/product",{headers:{"x-auth":t}}).then(function(t){e(t)}).catch(function(t){return e(t)})}},1775:function(e,t,r){"use strict";r.d(t,"b",function(){return a}),r.d(t,"g",function(){return o}),r.d(t,"a",function(){return i}),r.d(t,"f",function(){return c}),r.d(t,"d",function(){return l}),r.d(t,"c",function(){return s}),r.d(t,"e",function(){return u});var n=r(470),a=function(e,t,r){n.a.post("/order/add-vendor",t,{headers:{Accept:"application/json",Authorization:r?"Token "+r:"","Content-Type":"application/json"}}).then(function(t){e(t)}).catch(function(t){return e(t)})},o=function(e,t,r){n.a.delete("/order/remove-order/"+t,{headers:{"x-auth":r}}).then(function(t){e(t)}).catch(function(t){return e(t)})},i=function(e,t,r,a){n.a.patch("/order/add-product/"+t,r,{headers:{Accept:"application/json",Authorization:a?"Token "+a:"","Content-Type":"application/json"}}).then(function(t){e(t)}).catch(function(t){return e(t)})},c=function(e,t,r,a){n.a.delete("/order/remove-product/"+t,{data:r,headers:{"x-auth":a}}).then(function(t){e(t,r.machineSRN,r._id)}).catch(function(t){return e(t)})},l=function(e,t,r){n.a.patch("/order/checkout/"+t,null,{headers:{Accept:"application/json",Authorization:r?"Token "+r:"","Content-Type":"application/json"}}).then(function(t){e(t)}).catch(function(t){return e(t)})},s=function(e,t,r,a){n.a.patch("/order/change-order-status/"+t,r,{headers:{Accept:"application/json",Authorization:a?"Token "+a:"","Content-Type":"application/json"}}).then(function(t){e(t,r.status)}).catch(function(t){return e(t)})},u=function(e,t){n.a.get("/orders",{headers:{Accept:"application/json",Authorization:t?"Token "+t:"","Content-Type":"application/json"}}).then(function(t){e(t)}).catch(function(t){return e(t)})}},1988:function(e,t,r){"use strict";var n=r(470),a=function(e,t){n.a.get("/user/company",{headers:{Accept:"application/json",Authorization:t?"Token "+t:"","Content-Type":"application/json"}}).then(function(t){e(t)}).catch(function(t){return e(t)})};t.a=a},2834:function(e,t,r){"use strict";r.d(t,"a",function(){return n});var n=function(e){return!e.allocated||e.packed||e.shipped||e.installed?e.allocated&&e.packed&&!e.shipped&&!e.installed?"packed":e.allocated&&e.packed&&e.shipped&&!e.installed?"shipped":e.allocated&&e.packed&&e.shipped&&e.installed?"installed":null:"allocated"}},2835:function(e,t,r){var n,a,o,i=r(3129);o=function(e){return function(t){return typeof t===e}},a=function(e,t){var r=1,n=t||function(e,t){return t};return"-"===e[0]&&(r=-1,e=e.substr(1)),function(t,a){var o,c=n(e,i.get(t,e)),l=n(e,i.get(a,e));return c<l&&(o=-1),c>l&&(o=1),c===l&&(o=0),o*r}},n=function(){var e=Array.prototype.slice.call(arguments),t=e.filter(o("string")),r=e.filter(o("function"))[0];return function(e,n){for(var o=t.length,i=0,c=0;0===i&&c<o;)i=a(t[c],r)(e,n),c++;return i}},e.exports=n},3120:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){return{products:e.Products.products,firstRunProducts:e.Products.firstRun}}function c(e){return{getProducts:function(t){e({type:E.C,value:t})},dispatchUpdateMachineStatus:function(t,r){e({type:E.T,value:{data:t,serialNumber:r}})},dispatchUnproceedRemoveProduct:function(t,r){e({type:E.F,value:{data:t,id:r}})},dispatchProceedOrder:function(t){e({type:E.W,value:t})},dispatchRemoveOrder:function(t){e({type:E.D,value:t})},dispatchUpdateFirstRunProducts:function(t){e({type:E.P,value:t})}}}var l=r(0),s=r.n(l),u=r(150),d=r(88),p=r(3121),f=r(3122),m=r(3123),h=r(471),A=r(3124),b=r(151),g=r(1679),v=r(1775),E=r(28),y=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),C=function(e){function t(){var e,r,o,i;n(this,t);for(var c=arguments.length,l=Array(c),s=0;s<c;s++)l[s]=arguments[s];return r=o=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),o.state={showLoader:!!o.props.firstRunProducts,gToken:Object(b.b)(),orderDetailEditLoader:!1,errMsg:""},o.success=function(){d.m.success({title:"Successful",content:"Order has been allocated :)."})},o.error=function(){d.m.error({title:"Oops",content:"Something went wrong. Please try again later :("})},o.productCallback=function(e){200===e.status?(o.props.getProducts(e.data),o.setState({showLoader:!1}),o.props.dispatchUpdateFirstRunProducts(!1)):(o.error(),console.log(e.response))},o.removeProductCallback=function(e,t,r){200===e.status?(o.setState({orderDetailEditLoader:!1}),o.props.dispatchUnproceedRemoveProduct(e.data.order,r),o.props.dispatchUpdateMachineStatus(e.data.product,t)):(o.setState({orderDetailEditLoader:!1}),o.error(),console.log(e.response))},o.removeProduct=function(e,t){o.setState({orderDetailEditLoader:!0});var r=o.state.gToken;r&&Object(v.f)(o.removeProductCallback,t,e,r)},o.removeOrderCallback=function(e){200===e.status?(o.setState({orderDetailEditLoader:!1}),o.props.dispatchRemoveOrder(e.data)):(o.setState({orderDetailEditLoader:!1}),o.error(),console.log(e.response))},o.removeOrder=function(e){o.setState({orderDetailEditLoader:!0});var t=o.state.gToken;t&&Object(v.g)(o.removeOrderCallback,e,t)},o.proceedCallback=function(e){200===e.status?(o.setState({orderDetailEditLoader:!1}),o.props.dispatchProceedOrder(e.data),o.success()):(o.setState({orderDetailEditLoader:!1}),o.error(),console.log(e.response))},o.proceedOrder=function(e){o.setState({orderDetailEditLoader:!0});var t=o.state.gToken;t&&Object(v.d)(o.proceedCallback,e,t)},i=r,a(o,i)}return o(t,e),y(t,[{key:"componentDidMount",value:function(){var e=this.state.gToken;e&&this.props.firstRunProducts&&Object(g.c)(this.callback,e)}},{key:"render",value:function(){return this.state.showLoader?s.a.createElement(h.a,null):s.a.createElement("div",{className:"container flex-row"},this.state.orderDetailEditLoader?s.a.createElement(A.a,null):null,s.a.createElement("div",{className:"container-left"},s.a.createElement(p.a,{companies:this.props.companies,unproceedOrder:this.props.unproceedOrder}),s.a.createElement(f.a,{products:this.props.products,unproceedOrder:this.props.unproceedOrder})),s.a.createElement("div",{className:"container-right"},s.a.createElement("div",{className:"order-detail-container"},s.a.createElement("div",{className:"order-detail",style:{overflowX:"auto"}},s.a.createElement(m.a,{Orders:this.props.Orders,proceedOrder:this.proceedOrder,removeProduct:this.removeProduct,companies:this.props.companies,removeOrder:this.removeOrder})))))}}]),t}(l.Component);t.a=Object(u.connect)(i,c)(C)},3121:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){return{dispatchAddUnproccedOrder:function(t){e({type:A.f,value:t})}}}var c=r(0),l=r.n(c),s=r(150),u=r(88),d=r(1539),p=r(1627),f=r(1522),m=r(471),h=r(1540),A=r(28),b=r(151),g=r(1775),v=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),E=u.n.Option,y=function(e){function t(){var e,r,o,i;n(this,t);for(var c=arguments.length,l=Array(c),s=0;s<c;s++)l[s]=arguments[s];return r=o=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),o.state={vendorId:"",errorMsg:!1,showLoader:!1,vendorIdWarn:!1,gToken:Object(b.b)()},o.callback=function(e){200===e.status?(o.setState({showLoader:!1,errorMsg:""}),o.props.dispatchAddUnproccedOrder(e.data)):(o.setState({showLoader:!0,errorMsg:"Something went wrong. Please try again later &#x2639;"}),console.log(e.response))},o.onFormSubmit=function(e){e.preventDefault(),o.setState({showLoader:!0,errorMsg:""});var t=o.state,r=t.vendorId,n=t.gToken;o.validate()?(o.outlineColor(),Object(g.b)(o.callback,{vendorId:r},n)):(o.outlineColor(),o.setState({showLoader:!1,errorMsg:"Please Select Vendor/Company"}))},o.onVendorSelect=function(e){o.setState({vendorId:e})},o.outlineColor=function(){o.state.vendorId.trim()?o.setState({vendorIdWarn:!1}):o.setState({vendorIdWarn:!0})},o.validate=function(){return""!==o.state.vendorId.trim()},i=r,a(o,i)}return o(t,e),v(t,[{key:"render",value:function(){var e=void 0;return this.props.unproceedOrder&&(e=this.props.unproceedOrder.length>0),l.a.createElement(d.a,{onSubmitHandler:this.onFormSubmit},l.a.createElement("fieldset",{disabled:e,style:e?{pointerEvents:"none",opacity:"0.5"}:{}},l.a.createElement("legend",null,"Add Vendor"),l.a.createElement(p.a,{labelName:"Vendor/Company",placeholder:"Select Vendor",optionFilterProp:"children",onSelect:this.onVendorSelect,size:"large",isRequired:!0,filterOption:function(e,t){return t.props.children.toLowerCase().indexOf(e.toLowerCase())>=0},classValue:this.state.vendorIdWarn?"inputField-outline":null},this.props.companies.map(function(e){return l.a.createElement(E,{value:e._id,key:e._id},e.name)})),this.state.errorMsg?l.a.createElement(h.a,{errorMsgs:this.state.errorMsg}):null,this.state.showLoader?l.a.createElement(m.a,null,"Adding..."):null,l.a.createElement("div",{className:"issue-form-button"},l.a.createElement(f.a,{isType:"primary",htmlTypes:"submit"},"Add"))))}}]),t}(c.Component);t.a=Object(s.connect)(null,i)(y)},3122:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){return{dispatchAddProduct:function(t){e({type:A.E,value:t})},dispatchUpdateMachineStatus:function(t,r){e({type:A.T,value:{data:t,serialNumber:r}})}}}var c=r(0),l=r.n(c),s=r(150),u=r(88),d=r(1539),p=r(1627),f=r(1522),m=r(471),h=r(1540),A=r(28),b=r(151),g=r(1775),v=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),E=u.n.Option,y=function(e){function t(){var e,r,o,i;n(this,t);for(var c=arguments.length,l=Array(c),s=0;s<c;s++)l[s]=arguments[s];return r=o=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),o.state={productId:"",name:"",version:"",machineSRN:"",serialNumber:"",errorMsg:!1,showLoader:!1,serialNumberWarn:!1,productIdWarn:!1,gToken:Object(b.b)()},o.callback=function(e){200===e.status?(o.setState({showLoader:!1,errorMsg:"",machineSRN:""}),o.props.dispatchAddProduct(e.data.order),o.props.dispatchUpdateMachineStatus(e.data.product,o.state.serialNumber)):(o.setState({showLoader:!1,errorMsg:"Something went wrong. Please try again later &#x2639;"}),console.log(e.response))},o.onFormSubmit=function(e){e.preventDefault(),o.setState({showLoader:!0,errorMsg:""});var t=o.state,r=t.productId,n=t.name,a=t.version,i=t.machineSRN,c=t.gToken,l={productId:r,name:n,version:a,machineSRN:i},s=o.props.unproceedOrder[0]._id;o.validate()&&s?(o.outlineColor(),Object(g.a)(o.callback,s,l,c)):(o.outlineColor(),o.setState({showLoader:!1,errorMsg:"Select all fields or You can't add same serialNumber"}))},o.onProductSelect=function(e){var t=o.props.products.filter(function(t){return t._id===e});void 0!==t[0]&&null!==t[0]&&o.setState({productId:e,name:t[0].name})},o.onMachineSelect=function(e){var t=void 0,r=void 0;t=o.props.products.filter(function(e){return e._id===o.state.productId}),void 0!==t[0]&&null!==t[0]&&(r=t[0].productList.filter(function(t){return t.serialNumber===e})),r&&o.setState({machineSRN:e,serialNumber:e,version:r[0].version})},o.outlineColor=function(){o.state.productId.trim()?o.setState({productIdWarn:!1}):o.setState({productIdWarn:!0}),o.state.machineSRN.trim()?o.setState({serialNumberWarn:!1}):o.setState({serialNumberWarn:!0})},o.validate=function(){var e=o.state,t=e.version,r=e.productId,n=e.machineSRN,a=e.name;return""!==t.trim()&&""!==r.trim()&&""!==n.trim()&&""!==a.trim()},i=r,a(o,i)}return o(t,e),v(t,[{key:"render",value:function(){var e=this,t=void 0,r=void 0,n=void 0;return n=this.props.unproceedOrder?0===this.props.unproceedOrder.length:void 0===this.props.unproceedOrder,t=this.props.products.filter(function(t){return t._id===e.state.productId}),void 0!==t[0]&&null!==t[0]&&(r=t[0].productList.filter(function(e){return!1===e.sold})),l.a.createElement(d.a,{onSubmitHandler:this.onFormSubmit},l.a.createElement("fieldset",{disabled:n,style:n?{pointerEvents:"none",opacity:"0.5"}:{}},l.a.createElement("legend",null,"Add Products"),l.a.createElement(p.a,{labelName:"Product",placeholder:"Select Product",optionFilterProp:"children",onSelect:this.onProductSelect,size:"large",isRequired:!0,filterOption:function(e,t){return t.props.children.toLowerCase().indexOf(e.toLowerCase())>=0},classValue:this.state.productIdWarn?"inputField-outline":null},this.props.products.map(function(e){return l.a.createElement(E,{value:e._id,key:e._id},e.name)})),l.a.createElement(p.a,{labelName:"Serial Number",placeholder:"Select Serial Number",optionFilterProp:"children",onSelect:this.onMachineSelect,size:"large",isRequired:!0,filterOption:function(e,t){return t.props.children.toLowerCase().indexOf(e.toLowerCase())>=0},classValue:this.state.serialNumberWarn?"inputField-outline":null},void 0!==r&&null!==r&&r.map(function(e){return l.a.createElement(E,{value:e.serialNumber,key:e._id},e.serialNumber)})),this.state.errorMsg?l.a.createElement(h.a,{errorMsgs:this.state.errorMsg}):null,this.state.showLoader?l.a.createElement(m.a,null,"Creating..."):null,l.a.createElement("div",{className:"issue-form-button"},l.a.createElement(f.a,{isType:"primary",htmlTypes:"submit"},"Add"))))}}]),t}(c.Component);t.a=Object(s.connect)(null,i)(y)},3123:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(1522),i=function(){return a.a.createElement("table",{border:"1"},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("td",{colSpan:"4"},a.a.createElement("h3",null,a.a.createElement("b",null,"Yet to be add")))),a.a.createElement("tr",null,a.a.createElement("th",null,"Sr. "),a.a.createElement("th",null,"Product Name"),a.a.createElement("th",null,"Serial Number"),a.a.createElement("th",null,"Action"))),a.a.createElement("tbody",null),a.a.createElement("tfoot",null,a.a.createElement("tr",null,a.a.createElement("td",{colSpan:"4",className:"text-right"}))))},c=function(e){var t=void 0,r=void 0;return e.Orders.length>0&&(t=e.Orders.filter(function(e){return!1===e.orderStatus.allocated}),t.length>0&&(r=e.companies.filter(function(e){return e._id===t[0].vendorId}))),void 0!==t&&t.length>0?a.a.createElement("table",{border:"1"},a.a.createElement("thead",null,void 0!==r&&r.length>0&&a.a.createElement("tr",null,a.a.createElement("td",{colSpan:void 0!==t[0].products&&t[0].products.length>0?"4":"3"},a.a.createElement("h3",null,a.a.createElement("b",null,r[0]?r[0].name:"Yet to be add")),r[0]?r[0].location:""),void 0!==t[0].products&&t[0].products.length>0?null:a.a.createElement("td",null,a.a.createElement("span",null,a.a.createElement("a",{href:"javascript:;",onClick:function(){return e.removeOrder(t[0]._id)}},"Remove")))),a.a.createElement("tr",null,a.a.createElement("th",null,"Sr. "),a.a.createElement("th",null,"Product Name"),a.a.createElement("th",null,"Serial Number"),a.a.createElement("th",null,"Action"))),a.a.createElement("tbody",null,void 0!==t[0].products&&t[0].products.length>0&&t[0].products.map(function(r,n){return a.a.createElement("tr",{key:r._id},a.a.createElement("td",null,n),a.a.createElement("td",null,r.name),a.a.createElement("td",null,r.machineSRN),a.a.createElement("td",null,a.a.createElement("span",null,a.a.createElement("a",{href:"javascript:;",onClick:function(){return e.removeProduct(r,t[0]._id)}},"Remove"))))})),a.a.createElement("tfoot",null,a.a.createElement("tr",null,a.a.createElement("td",{colSpan:"4",className:"text-right"},void 0!==t[0].products&&t[0].products.length>0?a.a.createElement(o.a,{isType:"primary",onClick:function(){return e.proceedOrder(t[0]._id)}},"Proceed"):null)))):a.a.createElement(i,null)};t.a=c},3124:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(3125),i=(r.n(o),r(3127)),c=r.n(i),l=function(){return a.a.createElement("div",{className:"fullscreen-loading"},a.a.createElement("img",{src:c.a,alt:"Loader",width:"110",height:"88"}))};t.a=l},3125:function(e,t,r){var n=r(3126);"string"===typeof n&&(n=[[e.i,n,""]]);var a={hmr:!1};a.transform=void 0;r(1360)(n,a);n.locals&&(e.exports=n.locals)},3126:function(e,t,r){t=e.exports=r(1359)(!0),t.push([e.i,'.fullscreen-loading{position:fixed;z-index:999;height:2em;width:2em;overflow:show;margin:auto;top:0;left:0;bottom:0;right:0}.fullscreen-loading:before{content:"";display:block;position:fixed;top:0;left:0;width:100%;height:100%;background:-o-radial-gradient(hsla(0,0%,8%,.8),rgba(0,0,0,.8));background:radial-gradient(hsla(0,0%,8%,.8),rgba(0,0,0,.8));background:-webkit-radial-gradient(hsla(0,0%,8%,.8),rgba(0,0,0,.8))}',"",{version:3,sources:["D:/Work/Actualize/Ethereal/Github/Ethereal/src/components/ui/fullscreen_loader/fullscreen_loader.css"],names:[],mappings:"AAEA,oBACI,eAAgB,AAChB,YAAa,AACb,WAAY,AACZ,UAAW,AACX,cAAe,AACf,YAAa,AACb,MAAO,AACP,OAAQ,AACR,SAAU,AACV,OAAS,CACV,AAIH,2BACI,WAAY,AACZ,cAAe,AACf,eAAgB,AAChB,MAAO,AACP,OAAQ,AACR,WAAY,AACZ,YAAa,AAEb,+DAAuE,AACvE,4DAAoE,AAEpE,mEAA2E,CAC5E",file:"fullscreen_loader.css",sourcesContent:[" \r\n\r\n.fullscreen-loading {\r\n    position: fixed;\r\n    z-index: 999;\r\n    height: 2em;\r\n    width: 2em;\r\n    overflow: show;\r\n    margin: auto;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n  }\r\n\r\n\r\n/* Transparent Overlay */\r\n.fullscreen-loading:before {\r\n    content: '';\r\n    display: block;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: -webkit-radial-gradient(rgba(20, 20, 20,.8), rgba(0, 0, 0, .8));\r\n    background: -o-radial-gradient(rgba(20, 20, 20,.8), rgba(0, 0, 0, .8));\r\n    background: radial-gradient(rgba(20, 20, 20,.8), rgba(0, 0, 0, .8));\r\n  \r\n    background: -webkit-radial-gradient(rgba(20, 20, 20,.8), rgba(0, 0, 0,.8));\r\n  }\r\n  "],sourceRoot:""}])},3127:function(e,t,r){e.exports=r.p+"static/media/loader.b4b37d6a.gif"},3128:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(88),i=r(2834),c=r(2835),l=r.n(c),s=r(3130),u=(r.n(s),o.e.Panel),d=o.o.Step,p=function(e){return a.a.createElement("div",{className:"orders-container flex-row"},a.a.createElement(o.e,{bordered:!1,defaultActiveKey:["1"]},e.Orders.sort(l()("-createdAt")).map(function(t){return a.a.createElement(u,{header:a.a.createElement("div",null,e.companies.map(function(e){if(e._id===t.vendorId)return a.a.createElement("span",{className:"vendor-company-name",key:e._id},e.name,", ",e.location,".")}),a.a.createElement("span",{className:"vendor-order-status"},Object(i.a)(t.orderStatus)),a.a.createElement("div",{className:"vendor-order-id"},a.a.createElement("strong",null,"Order ID:")," ",t._id)),key:t._id,showArrow:!1},a.a.createElement("div",{className:"order-detail order-detail-list",style:{overflowX:"auto"}},a.a.createElement("table",{border:"1"},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"Sr. "),a.a.createElement("th",null,"Product Name"),a.a.createElement("th",null,"Serial Number"))),a.a.createElement("tbody",null,t.products.map(function(e,t){return a.a.createElement("tr",{key:e._id},a.a.createElement("td",null,t),a.a.createElement("td",null,e.name),a.a.createElement("td",null,e.machineSRN))})))),a.a.createElement(o.o,null,a.a.createElement(d,{status:t.orderStatus.allocated?"finish":"wait",title:"Allocated",icon:a.a.createElement(o.i,{type:"check-circle"})}),a.a.createElement(d,{status:t.orderStatus.packed?"finish":"wait",title:"Packed",icon:a.a.createElement(o.i,{type:"gift"})}),a.a.createElement(d,{status:t.orderStatus.shipped?"finish":"wait",title:"Shipped",icon:a.a.createElement(o.i,{type:"car"})}),a.a.createElement(d,{status:t.orderStatus.installed?"finish":"wait",title:"Installed",icon:a.a.createElement(o.i,{type:"smile-o"})})))})))};t.a=p},3129:function(e,t,r){var n,a,o;!function(r,i){"use strict";"object"===typeof e&&"object"===typeof e.exports?e.exports=i():(a=[],n=i,void 0!==(o="function"===typeof n?n.apply(t,a):n)&&(e.exports=o))}(0,function(){"use strict";function e(e){if(!e)return!0;if(o(e)&&0===e.length)return!0;for(var t in e)if(d.call(e,t))return!1;return!0}function t(e){return u.call(e)}function r(e){return"number"===typeof e||"[object Number]"===t(e)}function n(e){return"string"===typeof e||"[object String]"===t(e)}function a(e){return"object"===typeof e&&"[object Object]"===t(e)}function o(e){return"object"===typeof e&&"number"===typeof e.length&&"[object Array]"===t(e)}function i(e){return"boolean"===typeof e||"[object Boolean]"===t(e)}function c(e){var t=parseInt(e);return t.toString()===e?t:e}function l(t,a,o,i){if(r(a)&&(a=[a]),e(a))return t;if(n(a))return l(t,a.split("."),o,i);var s=c(a[0]);if(1===a.length){var u=t[s];return void 0!==u&&i||(t[s]=o),u}return void 0===t[s]&&(r(s)?t[s]=[]:t[s]={}),l(t[s],a.slice(1),o,i)}function s(t,a){if(r(a)&&(a=[a]),!e(t)){if(e(a))return t;if(n(a))return s(t,a.split("."));var i=c(a[0]),l=t[i];if(1===a.length)void 0!==l&&(o(t)?t.splice(i,1):delete t[i]);else if(void 0!==t[i])return s(t[i],a.slice(1));return t}}var u=Object.prototype.toString,d=Object.prototype.hasOwnProperty,p={};return p.ensureExists=function(e,t,r){return l(e,t,r,!0)},p.set=function(e,t,r,n){return l(e,t,r,n)},p.insert=function(e,t,r,n){var a=p.get(e,t);n=~~n,o(a)||(a=[],p.set(e,t,a)),a.splice(n,0,r)},p.empty=function(t,c){if(e(c))return t;if(!e(t)){var l,s;if(!(l=p.get(t,c)))return t;if(n(l))return p.set(t,c,"");if(i(l))return p.set(t,c,!1);if(r(l))return p.set(t,c,0);if(o(l))l.length=0;else{if(!a(l))return p.set(t,c,null);for(s in l)d.call(l,s)&&delete l[s]}}},p.push=function(e,t){var r=p.get(e,t);o(r)||(r=[],p.set(e,t,r)),r.push.apply(r,Array.prototype.slice.call(arguments,2))},p.coalesce=function(e,t,r){for(var n,a=0,o=t.length;a<o;a++)if(void 0!==(n=p.get(e,t[a])))return n;return r},p.get=function(t,a,o){if(r(a)&&(a=[a]),e(a))return t;if(e(t))return o;if(n(a))return p.get(t,a.split("."),o);var i=c(a[0]);return 1===a.length?void 0===t[i]?o:t[i]:p.get(t[i],a.slice(1),o)},p.del=function(e,t){return s(e,t)},p})},3130:function(e,t,r){var n=r(3131);"string"===typeof n&&(n=[[e.i,n,""]]);var a={hmr:!1};a.transform=void 0;r(1360)(n,a);n.locals&&(e.exports=n.locals)},3131:function(e,t,r){t=e.exports=r(1359)(!0),t.push([e.i,".vendor-company-name{font-weight:700;font-size:1.2em}.vendor-order-status{font-weight:700;font-size:.9em;color:green}.vendor-order-id{font-size:.8em;margin-left:.2rem}.order-detail-list{padding:10px;margin-bottom:5px}","",{version:3,sources:["D:/Work/Actualize/Ethereal/Github/Ethereal/src/admin/pages/orders/order_list/order_list.css"],names:[],mappings:"AAEA,qBACI,gBAAkB,AAClB,eAAgB,CACnB,AAED,qBACI,gBAAiB,AACjB,eAAiB,AACjB,WAAa,CAChB,AAED,iBACI,eAAiB,AACjB,iBAAmB,CACtB,AAED,mBACI,aAAc,AACd,iBAAkB,CACrB",file:"order_list.css",sourcesContent:[" \r\n\r\n.vendor-company-name {\r\n    font-weight: bold;\r\n    font-size: 1.2em\r\n}\r\n\r\n.vendor-order-status {\r\n    font-weight: 700;\r\n    font-size: 0.9em;\r\n    color: green;\r\n}\r\n\r\n.vendor-order-id {\r\n    font-size: 0.8em;\r\n    margin-left: 0.2rem\r\n}\r\n\r\n.order-detail-list {\r\n    padding: 10px;\r\n    margin-bottom: 5px\r\n}"],sourceRoot:""}])},3132:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(88),i=r(2835),c=r.n(i),l=r(1522),s=r(1540),u=r(2834),d=o.e.Panel,p=o.o.Step,f=function(e){var t=void 0;return e.Orders.length>0&&(t=e.Orders.filter(function(e){return!1===e.orderStatus.installed&&!0===e.orderStatus.allocated}).sort(c()("-createdAt"))),void 0===t||0===t.length?a.a.createElement("div",{className:"orders-container flex-row u-text-center"},a.a.createElement("h2",null,a.a.createElement("b",{style:{color:"#bcbcbc"}},"No Data"))):a.a.createElement("div",{className:"orders-container flex-row"},a.a.createElement(o.e,{bordered:!1,defaultActiveKey:["1"]},t.map(function(t){return a.a.createElement(d,{header:a.a.createElement("div",null,e.companies.map(function(e){if(e._id===t.vendorId)return a.a.createElement("span",{className:"vendor-company-name",key:e._id},e.name,", ",e.location,".")}),a.a.createElement("span",{className:"vendor-order-status"},Object(u.a)(t.orderStatus)),a.a.createElement("div",{className:"vendor-order-id"},a.a.createElement("strong",null,"Order ID:")," ",t._id)),key:t._id,showArrow:!1},a.a.createElement("div",{className:"change-status-div"},a.a.createElement("h3",null,a.a.createElement("b",null,"Change Status")),a.a.createElement(l.a,{classValue:"change-status",onClick:function(){return e.changeOrderStatus("allocate",t._id)},isType:t.orderStatus.allocated?"default":"primary",isSize:"default",isDisabled:!!t.orderStatus.allocated},"allocate"),a.a.createElement(l.a,{classValue:"change-status",onClick:function(){return e.changeOrderStatus("packed",t._id)},isType:t.orderStatus.packed?"default":"primary",isSize:"default",isDisabled:!!t.orderStatus.packed},"packed"),a.a.createElement(l.a,{classValue:"change-status",onClick:function(){return e.changeOrderStatus("shipped",t._id)},isType:t.orderStatus.shipped?"default":"primary",isSize:"default",isDisabled:!!t.orderStatus.shipped},"shipped"),a.a.createElement(l.a,{classValue:"change-status",onClick:function(){return e.changeOrderStatus("installed",t._id)},isType:t.orderStatus.installed?"default":"primary",isSize:"default",isDisabled:!!t.orderStatus.installed},"installed"),a.a.createElement(s.a,{errorMsgs:"Please change status order Order-by"})),a.a.createElement("div",{className:"order-detail order-detail-list",style:{overflowX:"auto"}},a.a.createElement("table",{border:"1"},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"Sr. "),a.a.createElement("th",null,"Product Name"),a.a.createElement("th",null,"Serial Number"))),a.a.createElement("tbody",null,t.products.map(function(e,t){return a.a.createElement("tr",{key:e._id},a.a.createElement("td",null,t),a.a.createElement("td",null,e.name),a.a.createElement("td",null,e.machineSRN))})))),a.a.createElement(o.o,null,a.a.createElement(p,{status:t.orderStatus.allocated?"finish":"wait",title:"Allocated",icon:a.a.createElement(o.i,{type:"check-circle"})}),a.a.createElement(p,{status:t.orderStatus.packed?"finish":"wait",title:"Packed",icon:a.a.createElement(o.i,{type:"gift"})}),a.a.createElement(p,{status:t.orderStatus.shipped?"finish":"wait",title:"Shipped",icon:a.a.createElement(o.i,{type:"car"})}),a.a.createElement(p,{status:t.orderStatus.installed?"finish":"wait",title:"Installed",icon:a.a.createElement(o.i,{type:"smile-o"})})))})))};t.a=f},3133:function(e,t,r){var n=r(3134);"string"===typeof n&&(n=[[e.i,n,""]]);var a={hmr:!1};a.transform=void 0;r(1360)(n,a);n.locals&&(e.exports=n.locals)},3134:function(e,t,r){t=e.exports=r(1359)(!0),t.push([e.i,"fieldset,legend{margin:0;padding:0}fieldset{border:thin solid #1f497d;margin:0 auto;padding:.5em;width:auto}legend{width:auto;color:#1f497d;font-weight:700}.orders-container{width:100%}.order-detail-container{background:#fff;margin-top:.5em}.order-detail table{border-collapse:collapse;border-spacing:0;width:100%}.order-detail th{color:rgba(0,0,0,.8)}.order-detail th,td{text-align:left;padding:16px;-webkit-transition:.3s;-o-transition:.3s;transition:.3s;border:1px solid #ddd}.order-detail tr:nth-child(2n){background-color:#f2f2f2}.order-detail tbody tr:hover{background-color:#e6f7ff}.text-right{text-align:right!important}.change-status-div{padding:10px}.change-status{margin-right:10px;margin-bottom:5px}","",{version:3,sources:["D:/Work/Actualize/Ethereal/Github/Ethereal/src/admin/pages/orders/orders.css"],names:[],mappings:"AAEA,gBACI,SAAU,AACV,SAAW,CACd,AAED,SACI,0BAA2B,AAC3B,cAAe,AACf,aAAe,AACf,UAAW,CACd,AAED,OACI,WAAY,AACZ,cAAe,AACf,eAAiB,CACpB,AAED,kBACI,UAAY,CACf,AAED,wBACI,gBAAiB,AACjB,eAAkB,CACrB,AAED,oBACI,yBAA0B,AAC1B,iBAAkB,AAClB,UAAY,CACf,AAED,iBACI,oBAA0B,CAC7B,AAED,oBACI,gBAAiB,AACjB,aAAc,AACd,uBAAyB,AACzB,kBAAoB,AACpB,eAAiB,AACjB,qBAAuB,CAC1B,AAED,+BAAiC,wBAAyB,CAAC,AAE3D,6BACI,wBAAyB,CAC5B,AAED,YACI,0BAA4B,CAC/B,AAED,mBACI,YAAa,CAChB,AAED,eACI,kBAAmB,AACnB,iBAAkB,CACrB",file:"orders.css",sourcesContent:[" \r\n\r\nfieldset, legend {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nfieldset {\r\n    border: thin solid #1f497d;\r\n    margin: 0 auto;\r\n    padding: 0.5em;\r\n    width: auto\r\n}\r\n\r\nlegend {\r\n    width: auto;\r\n    color: #1f497d;\r\n    font-weight: bold\r\n}\r\n\r\n.orders-container {\r\n    width: 100%;\r\n}\r\n\r\n.order-detail-container {\r\n    background: #fff;\r\n    margin-top: 0.5em;\r\n}\r\n\r\n.order-detail table {\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n    width: 100%;\r\n}\r\n\r\n.order-detail th {\r\n    color: rgba(0, 0, 0, 0.8);\r\n}\r\n\r\n.order-detail th, td {\r\n    text-align: left;\r\n    padding: 16px;\r\n    -webkit-transition: 0.3s;\r\n    -o-transition: 0.3s;\r\n    transition: 0.3s;\r\n    border: 1px solid #ddd;\r\n}\r\n\r\n.order-detail tr:nth-child(even){background-color: #f2f2f2}\r\n\r\n.order-detail tbody tr:hover {\r\n    background-color: #E6F7FF\r\n}\r\n\r\n.text-right {\r\n    text-align: right !important\r\n}\r\n\r\n.change-status-div {\r\n    padding: 10px\r\n}\r\n\r\n.change-status {\r\n    margin-right: 10px;\r\n    margin-bottom: 5px\r\n}"],sourceRoot:""}])}});
//# sourceMappingURL=22.e8c7bbf1.chunk.js.map