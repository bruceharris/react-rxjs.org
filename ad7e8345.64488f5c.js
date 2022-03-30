(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{82:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return l}));var n=r(2),a=r(6),o=(r(0),r(94)),c={title:"shareLatest()"},s={unversionedId:"api/core/shareLatest",id:"api/core/shareLatest",isDocsHomePage:!1,title:"shareLatest()",description:"An RxJS [pipeable operator] which multicasts the source stream and replays the",source:"@site/docs/api/core/shareLatest.md",slug:"/api/core/shareLatest",permalink:"/docs/api/core/shareLatest",editUrl:"https://github.com/re-rxjs/react-rxjs.org/tree/master/docs/api/core/shareLatest.md",version:"current",sidebar:"someSidebar",previous:{title:"useStateObservable(observable)",permalink:"/docs/api/core/useStateObservable"},next:{title:"SUSPENSE",permalink:"/docs/api/core/suspense"}},i=[{value:"Example",id:"example",children:[]},{value:"See also",id:"see-also",children:[]}],p={rightToc:i};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"An RxJS ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://rxjs.dev/guide/v6/pipeable-operators"}),"pipeable operator")," which multicasts the source stream and replays the\nlatest emitted value."),Object(o.b)("p",null,"It's a utility function kept for historical purposes. Since RxJS@^7.0.0 released, it's equivalent to:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"import { share } from 'rxjs/operators';\n\nfunction shareLatest<T>() {\n  return share<T>({\n    connector: () => new ReplaySubject(1)\n  })\n}\n")),Object(o.b)("h4",{id:"returns"},"Returns"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://rxjs.dev/api/index/interface/MonoTypeOperatorFunction"}),Object(o.b)("inlineCode",{parentName:"a"},"MonoTypeOperatorFunction<T>")),": An Observable that shares the latest emitted value from the\nsource Observable with all subscribers, and restarts the stream when it completes or errors."),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),'import { filter, map } from "rxjs/operators"\nimport { shareLatest } from "@react-rxjs/core"\n\nconst activePlanetName$ = planet$.pipe(\n  filter((planet) => planet.isActive),\n  map((planet) => planet.name),\n  shareLatest(),\n)\n')),Object(o.b)("h2",{id:"see-also"},"See also"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://rxjs.dev/api/operators/share"}),Object(o.b)("inlineCode",{parentName:"a"},"share"))," (RxJS)")))}l.isMDXComponent=!0},94:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(r),m=n,f=u["".concat(c,".").concat(m)]||u[m]||b[m]||o;return r?a.a.createElement(f,s(s({ref:t},p),{},{components:r})):a.a.createElement(f,s({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var p=2;p<o;p++)c[p]=r[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);