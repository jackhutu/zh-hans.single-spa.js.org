(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{195:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return i})),a.d(n,"rightToc",(function(){return o})),a.d(n,"default",(function(){return b}));var t=a(1),l=a(9),r=(a(0),a(308)),i={id:"ecosystem-angularjs",title:"single-spa-angularjs",sidebar_label:"AngularJS"},o=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",children:[]},{value:"\u4f7f\u7528\u6253\u5305\u5de5\u5177",id:"\u4f7f\u7528\u6253\u5305\u5de5\u5177",children:[]},{value:"\u4e0d\u4f7f\u7528\u6253\u5305\u5de5\u5177",id:"\u4e0d\u4f7f\u7528\u6253\u5305\u5de5\u5177",children:[{value:"\u4f5c\u4e3a SystemJS module",id:"\u4f5c\u4e3a-systemjs-module",children:[]},{value:"\u4f5c\u4e3a\u5168\u5c40\u53d8\u91cf",id:"\u4f5c\u4e3a\u5168\u5c40\u53d8\u91cf",children:[]}]},{value:"Options",id:"options",children:[]},{value:"ES5 \u793a\u4f8b",id:"es5-\u793a\u4f8b",children:[]},{value:"Custom Props",id:"custom-props",children:[]},{value:"Examples",id:"examples",children:[]}],p={rightToc:o},c="wrapper";function b(e){var n=e.components,a=Object(l.a)(e,["components"]);return Object(r.b)(c,Object(t.a)({},p,a,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"single-spa-angularjs \u662f\u4e00\u4e2a\u7c7b\u5e93\uff0c\u53ef\u4ee5\u5e2e\u52a9\u5b9e\u73b0\u4e0e ",Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"https://angularjs.org/"}),"AngularJS")," \u4e00\u8d77\u4f7f\u7528 ",Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"configuration#registering-applications"}),"single-spa registered application")," ",Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"/docs/building-applications#registered-application-lifecycle"}),"lifecycle functions")," (bootstrap, mount and unmount)\u3002 \u67e5\u770b ",Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/single-spa/single-spa-angularjs"}),"single-spa-angularjs github"),"."),Object(r.b)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-sh"}),"npm install --save single-spa-angularjs\n")),Object(r.b)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",Object(r.b)("inlineCode",{parentName:"p"},'<script src="https://unpkg.com/single-spa-angularjs"><\/script>')," \u7684\u65b9\u5f0f\uff0c\u901a\u8fc7\u5168\u5c40\u53d8\u91cf ",Object(r.b)("inlineCode",{parentName:"p"},"singleSpaAngularjs")," \u5f15\u5165\u5e93\uff0c\u5982\u679c\u90a3\u6837\u5bf9\u4f60\u6765\u8bf4\u66f4\u65b9\u4fbf\u3002"),Object(r.b)("h2",{id:"\u4f7f\u7528\u6253\u5305\u5de5\u5177"},"\u4f7f\u7528\u6253\u5305\u5de5\u5177"),Object(r.b)("p",null,"\u5982\u679c\u4f60\u4f7f\u7528webpack\u7b49\u6253\u5305\u5de5\u5177\uff0c\u5219\u5c06\u4ee5\u4e0b\u5185\u5bb9\u6dfb\u52a0\u5230\u5165\u53e3\u6587\u4ef6\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"import singleSpaAngularJS from 'single-spa-angularjs';\nimport angular from 'angular';\n\nconst ngLifecycles = singleSpaAngularJS({\n  angular: angular,\n  mainAngularModule: 'app',\n  uiRouter: true,\n  preserveGlobal: false,\n  template: '<my-component />',\n});\n\nexport const bootstrap = ngLifecycles.bootstrap;\nexport const mount = ngLifecycles.mount;\nexport const unmount = ngLifecycles.unmount;\n")),Object(r.b)("h2",{id:"\u4e0d\u4f7f\u7528\u6253\u5305\u5de5\u5177"},"\u4e0d\u4f7f\u7528\u6253\u5305\u5de5\u5177"),Object(r.b)("p",null,"\u5982\u679c\u4e0d\u4f7f\u7528\u6253\u5305\u5de5\u5177\uff0c\u5219\u9700\u8981\u5c06\u4f60\u7684 angularjs \u5e94\u7528\u8bbe\u7f6e\u4e3a SystemJS module \u6216\u5168\u5c40\u53d8\u91cf\u3002 \u4f7f\u7528 SystemJS module\u66f4\u4f73\uff0c\u4f60\u53ef\u4ee5\u5728 ",Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"/docs/faq.html#is-there-a-recommended-setup"}),"recommended single-spa setup")," \u5728\u4e2d\u67e5\u770b\u66f4\u591a\u5185\u5bb9\u3002"),Object(r.b)("h3",{id:"\u4f5c\u4e3a-systemjs-module"},"\u4f5c\u4e3a SystemJS module"),Object(r.b)("p",null,"\u6dfb\u52a0\u5982\u4e0b\u4ee3\u7801\u5230\u4f60\u7684 AngularJS \u5e94\u7528\u3002\u5982\u679c\u4f60\u4f7f\u7528 gulp/grunt \u6253\u5305\u6587\u4ef6\uff0c\u9700\u8981\u521b\u5efa\u4e00\u4e2a ",Object(r.b)("inlineCode",{parentName:"p"},"single-spa-application.js")," \u6587\u4ef6\uff0c\u5e76\u786e\u4fdd\u5b83\u5728\u6700\u7ec8\u7684\u6784\u5efa\u6587\u4ef6\u4e2d\u3002"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"System.register([], function(_export) {\n  return {\n    execute: function() {\n      _export(window.singleSpaAngularjs.default({\n        angular: angular,\n        mainAngularModule: 'app',\n        uiRouter: true,\n        preserveGlobal: false,\n        template: '<my-component />',\n      }))\n    }\n  }\n})\n")),Object(r.b)("p",null,"\u5b8c\u6210\u6b64\u64cd\u4f5c\u540e\uff0c\u4f60\u5c31\u53ef\u4ee5\u4f7f\u7528 ",Object(r.b)("inlineCode",{parentName:"p"},"System.import()")," \u6346\u7ed1\u6587\u4ef6\uff0c\u800cSystemJS + single-spa\u5c06\u77e5\u9053\u5982\u4f55\u5904\u7406\u60a8\u7684\u6a21\u5757\u3002 \u4f60\u7684\n",Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"/docs/configuration.html#loading-function-or-application"}),"loading function")," \u9700\u8981\u88ab ",Object(r.b)("inlineCode",{parentName:"p"},"System.import('name-of-app')"),". \u786e\u4fdd\u6dfb\u52a0\n",Object(r.b)("inlineCode",{parentName:"p"},"name-of-app")," \u5230\u4f60\u7684 ",Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"https://single-spa-playground.org/playground/import-map"}),"import map"),"."),Object(r.b)("h3",{id:"\u4f5c\u4e3a\u5168\u5c40\u53d8\u91cf"},"\u4f5c\u4e3a\u5168\u5c40\u53d8\u91cf"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"// note that \"js\" is not capitalized in the name of the global variable.\nwindow.myAngularApp = singleSpaAngularjs({\n  angular: angular,\n  mainAngularModule: 'app',\n  uiRouter: true,\n  preserveGlobal: false,\n  template: '<my-component />',\n})\n")),Object(r.b)("p",null,"\u4f60\u7684 ",Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"/docs/configuration.html#loading-function-or-application"}),"loading function")," \u5fc5\u987b\u662f\u5168\u5c40\u53d8\u91cf\u672c\u8eab\uff0c \u4f8b\u5982:"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"singleSpa.registerApplication({\n  name: 'my-angular-app',\n  app: myAngularApp,\n  activeWhen: () => true\n});\n")),Object(r.b)("h2",{id:"options"},"Options"),Object(r.b)("p",null,"\u5f53\u8c03\u7528",Object(r.b)("inlineCode",{parentName:"p"},"singleSpaAngularJS\uff08opts\uff09"),"\u65f6\uff0c\u6240\u6709\u9009\u9879\u90fd\u901a\u8fc7",Object(r.b)("inlineCode",{parentName:"p"},"opts"),"\u53c2\u6570\u4f20\u9012\u7ed9single-spa-angularjs\u3002\u63d0\u4f9b\u4ee5\u4e0b\u9009\u9879\uff1a"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"angular"),": (\u5fc5\u987b) angular\u4e3b\u5bf9\u8c61, \u901a\u5e38\u66b4\u9732\u5728window\u4e0a\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7'require\uff08'angular'\uff09'\u6216'import from'angular'`\u83b7\u5f97\u3002"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"domElementGetter"),": \uff08\u53ef\u9009\uff09\u4e0d\u5e26\u4efb\u4f55\u53c2\u6570\u5e76\u8fd4\u56deDOMElement\u7684\u51fd\u6570\u3002\u8fd9\u4e2adom\u5143\u7d20\u5c31\u662fangular\u5e94\u7528\u88ab\u521d\u59cb\u5316\uff0c\u5b89\u88c5\u548c\u5378\u8f7d\u7684\u4f4d\u7f6e\u3002\u5982\u679c\u6ca1\u6709\u63d0\u4f9b\uff0c\u9ed8\u8ba4\u662f\u521b\u5efa\u4e00\u4e2adiv\u5e76\u6dfb\u52a0\u5230 ",Object(r.b)("inlineCode",{parentName:"li"},"document.body")," \u4e0b\u3002"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"mainAngularModule"),": (\u5fc5\u987b) \u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u5b83\u662f\u7531angular\u521d\u59cb\u5316\u7684angular\u6a21\u5757\u7684\u540d\u79f0\u3002\u8bf7\u53c2\u9605 ",Object(r.b)("a",Object(t.a)({parentName:"li"},{href:"https://docs.angularjs.org/api/ng/function/angular.bootstrap"}),"angular docs")," \u4ee5\u4e86\u89e3 ",Object(r.b)("inlineCode",{parentName:"li"},"angular.bootstrap()"),"\u3002"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"uiRouter"),": \uff08\u53ef\u9009\uff09\u5982\u679c\u4f60\u4f7f\u7528\u4e86 angular-ui-router\uff0c\u8bf7\u5c06\u6b64\u9009\u9879\u8bbe\u7f6e\u4e3a",Object(r.b)("inlineCode",{parentName:"li"},"true"),"\u6216\u5b57\u7b26\u4e32\u503c\u3002\u5b57\u7b26\u4e32\u7684\u503c\u5c06\u4f5c\u4e3a ui-view html\u7684\u5c5e\u6027\u503c\u3002\u4f8b\u5982\uff0c ",Object(r.b)("inlineCode",{parentName:"li"},"uiRouter: 'core'")," \u5c06\u88ab\u89e3\u6790\u6210 ",Object(r.b)("inlineCode",{parentName:"li"},'<div ui-view="core" />')," \u800c ",Object(r.b)("inlineCode",{parentName:"li"},"uiRouter: true")," \u5219\u662f ",Object(r.b)("inlineCode",{parentName:"li"},"<div ui-view />"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"preserveGlobal"),": \uff08\u53ef\u9009\uff09\u9ed8\u8ba4\u4e3afalse\u7684\u5e03\u5c14\u503c\u3002 \u8bbe\u7f6e\u662f\u5426\u8981\u5728\u5378\u8f7d\u5e94\u7528\u540e\u4ecd\u4fdd\u6301\u5168\u5c40 angular\u3002"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"elementId"),": \uff08\u53ef\u9009\uff09\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u5c06\u7528\u4e8e\u6807\u8bc6\u9644\u52a0\u5230DOM\u5e76\u7531Angular\u5f15\u5bfc\u7684\u5143\u7d20\u3002"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"strictDi"),": (\u53ef\u9009 - \u521d\u59cb\u5316\u7a0b\u5e8f\u7684\u4e00\u90e8\u5206 ",Object(r.b)("a",Object(t.a)({parentName:"li"},{href:"https://docs.angularjs.org/api/ng/function/angular.bootstrap#usage"}),"config object"),") \u9ed8\u8ba4\u4e3afalse\u7684\u5e03\u5c14\u503c\uff0c\u4fee\u6539\u4ee5\u542f\u7528StrictDi\u6a21\u5f0f\u3002"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"template"),": \uff08\u53ef\u9009\uff09\u5728\u5e94\u7528\u7a0b\u5e8fmounted\u65f6\u5c06\u63d2\u5165DOM\u7684html\u5b57\u7b26\u4e32\u3002 \u8be5\u6a21\u677f\u4f4d\u4e8edomElementGetter\u8fd4\u56de\u7684\u5143\u7d20\u5185\u3002 \u5982\u679c\u672a\u63d0\u4f9b\uff0c\u5219\u4e0d\u4f1a\u63d2\u5165\u6a21\u677f\u3002 \u4f7f\u7528angular-ui-router\u65f6\uff0c\u7531\u4e8eui-router\u4f1a\u4e3a\u60a8\u5c06\u6a21\u677f\u653e\u5230dom\u4e0a\uff0c\u56e0\u6b64\u60a8\u901a\u5e38\u4e0d\u9700\u8981\u4f7f\u7528\u5b83\u3002")),Object(r.b)("h2",{id:"es5-\u793a\u4f8b"},"ES5 \u793a\u4f8b"),Object(r.b)("p",null,"\u67e5\u770b ",Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/joeldenning/single-spa-es5-angularjs"}),"\u793a\u4f8b")),Object(r.b)("h2",{id:"custom-props"},"Custom Props"),Object(r.b)("p",null,Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"/docs/building-applications#lifecycle-props"}),"single-spa custom props")," are made available as ",Object(r.b)("inlineCode",{parentName:"p"},"$rootScope.singleSpaProps"),"."),Object(r.b)("h2",{id:"examples"},"Examples"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(t.a)({parentName:"li"},{href:"https://github.com/polyglot-microfrontends/account-settings"}),"polyglot microfrontends account settings"),": Gulp + angularjs@1.7 project integrated with Vue microfrontends."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(t.a)({parentName:"li"},{href:"https://github.com/joeldenning/single-spa-es5-angularjs"}),"single-spa-es5-angularjs"),": No build process - just global variables.",Object(r.b)("blockquote",{parentName:"li"},Object(r.b)("blockquote",{parentName:"blockquote"},Object(r.b)("blockquote",{parentName:"blockquote"},Object(r.b)("blockquote",{parentName:"blockquote"},Object(r.b)("blockquote",{parentName:"blockquote"},Object(r.b)("blockquote",{parentName:"blockquote"},Object(r.b)("blockquote",{parentName:"blockquote"},Object(r.b)("p",{parentName:"blockquote"},"f82762b71cedc633132ad4b93d35ed962a728494")))))))))))}b.isMDXComponent=!0},308:function(e,n,a){"use strict";a.d(n,"a",(function(){return o})),a.d(n,"b",(function(){return u}));var t=a(0),l=a.n(t),r=l.a.createContext({}),i=function(e){var n=l.a.useContext(r),a=n;return e&&(a="function"==typeof e?e(n):Object.assign({},n,e)),a},o=function(e){var n=i(e.components);return l.a.createElement(r.Provider,{value:n},e.children)};var p="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return l.a.createElement(l.a.Fragment,{},n)}},b=Object(t.forwardRef)((function(e,n){var a=e.components,t=e.mdxType,r=e.originalType,o=e.parentName,p=function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&-1===n.indexOf(t)&&(a[t]=e[t]);return a}(e,["components","mdxType","originalType","parentName"]),b=i(a),u=t,s=b[o+"."+u]||b[u]||c[u]||r;return a?l.a.createElement(s,Object.assign({},{ref:n},p,{components:a})):l.a.createElement(s,Object.assign({},{ref:n},p))}));function u(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var r=a.length,i=new Array(r);i[0]=b;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[p]="string"==typeof e?e:t,i[1]=o;for(var u=2;u<r;u++)i[u]=a[u];return l.a.createElement.apply(null,i)}return l.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);