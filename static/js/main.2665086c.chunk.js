(this["webpackJsonprap-to-ts"]=this["webpackJsonprap-to-ts"]||[]).push([[0],{10:function(n,t,e){},12:function(n,t,e){"use strict";e.r(t);var c=e(1),o=e.n(c),a=e(4),i=e.n(a),r=(e(9),e(3)),s=(e(10),e(0));var l=function(){var n=Object(c.useState)(""),t=Object(r.a)(n,2),e=t[0],o=t[1],a=Object(c.useState)(""),i=Object(r.a)(a,2),l=i[0],d=i[1],p=function(n){var t=u(e,n);d(t)},u=function(n,t){var e,c,o,a,i,r,s,l,d,p,u,j,v={};v=n;try{v=JSON.parse(n)}catch(O){return alert("json\u683c\u5f0f\u9519\u8bef"),void(v={})}v=JSON.parse(n),console.log("temp",typeof v,v);var m="// ".concat(null!==(e=null===(c=v)||void 0===c||null===(o=c.itf)||void 0===o?void 0:o.name)&&void 0!==e?e:"NameParams"," \u5165\u53c2\nexport interface ").concat(null!==(a=null===(i=v)||void 0===i||null===(r=i.itf)||void 0===r?void 0:r.url.split("/").pop())&&void 0!==a?a:"Name","Params {\n"),b="// ".concat(null!==(s=null===(l=v)||void 0===l||null===(d=l.itf)||void 0===d?void 0:d.name)&&void 0!==s?s:"NameItem"," \u54cd\u5e94\u53c2\u6570\nexport interface ").concat(null!==(p=null===(u=v)||void 0===u||null===(j=u.itf)||void 0===j?void 0:j.url.split("/").pop())&&void 0!==p?p:"Name","Item {\n");return v.properties.map((function(n){return"request"===n.scope&&("String"===n.type?m+="  ".concat(n.name,"?: string;// ").concat(n.description,"\n"):"Number"===n.type?m+="  ".concat(n.name,"?: number;// ").concat(n.description,"\n"):"Boolean"===n.type?m+="  ".concat(n.name,"?: boolean;// ").concat(n.description,"\n"):m+="  ".concat(n.name,"?: any;// ").concat(n.description,"\n")),"response"===n.scope&&("String"===n.type?b+="  ".concat(n.name,"?: string;// ").concat(n.description,"\n"):"Number"===n.type?b+="  ".concat(n.name,"?: number;// ").concat(n.description,"\n"):"Boolean"===n.type?b+="  ".concat(n.name,"?: boolean;// ").concat(n.description,"\n"):b+="  ".concat(n.name,"?: any;// ").concat(n.description,"\n")),0})),m+="}\n",b+="}\n",1===t?m:b};return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{className:"rap-body",children:[Object(s.jsx)("h2",{children:"\u7b80\u6613\u7684rap\u53c2\u6570\u8f6cts\u683c\u5f0f\u5de5\u5177"}),Object(s.jsxs)("div",{className:"rap-content",children:[Object(s.jsxs)("div",{className:"rap-content-title",children:[Object(s.jsx)("div",{children:"\xa0\xa0\u8f6c\u6362\u524drap\u5bfc\u51fa\u7684json\u5185\u5bb9\uff1a"}),Object(s.jsx)("div",{children:"\xa0\xa0\u8f6c\u540e\u7684ts\u683c\u5f0f\uff1a"})]}),Object(s.jsxs)("div",{className:"rap-content-body",children:[Object(s.jsx)("textarea",{rows:"30",cols:"50",value:e,name:"value1",onChange:function(n){o(n.target.value)}}),Object(s.jsx)("textarea",{rows:"30",cols:"50",value:l,name:"value2",onChange:function(){}})]})]}),Object(s.jsxs)("div",{className:"rap-button",children:[Object(s.jsx)("button",{type:"",onClick:function(){p(1)},children:"\u70b9\u51fb\u8f6c\u6362\u5165\u53c2"}),Object(s.jsx)("button",{type:"",onClick:function(){p(2)},children:"\u70b9\u51fb\u8f6c\u6362\u8fd4\u56de\u53c2\u6570"})]})]})})};i.a.render(Object(s.jsx)(o.a.StrictMode,{children:Object(s.jsx)(l,{})}),document.getElementById("root"))},9:function(n,t,e){}},[[12,1,2]]]);
//# sourceMappingURL=main.2665086c.chunk.js.map