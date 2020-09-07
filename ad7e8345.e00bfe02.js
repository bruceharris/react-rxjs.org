(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{75:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(2),a=r(6),o=(r(0),r(83)),i={title:"shareLatest()"},c={unversionedId:"api/core/shareLatest",id:"api/core/shareLatest",isDocsHomePage:!1,title:"shareLatest()",description:"An RxJS pipeable operator which multicasts the source stream and replays the",source:"@site/docs/api/core/shareLatest.md",slug:"/api/core/shareLatest",permalink:"/react-rxjs.org/docs/api/core/shareLatest",editUrl:"https://github.com/re-rxjs/react-rxjs.org/tree/master/docs/api/core/shareLatest.md",version:"current",sidebar:"someSidebar",previous:{title:"bind(observable)",permalink:"/react-rxjs.org/docs/api/core/bind"},next:{title:"SUSPENSE",permalink:"/react-rxjs.org/docs/api/core/suspense"}},s=[{value:"Description",id:"description",children:[]},{value:"Example",id:"example",children:[]},{value:"See also",id:"see-also",children:[]}],p={rightToc:s};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"An RxJS pipeable operator which multicasts the source stream and replays the\nlatest emitted value."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"function shareLatest<T>(): MonoTypeOperatorFunction<T>\n")),Object(o.b)("h4",{id:"returns"},"Returns"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://rxjs-dev.firebaseapp.com/api/index/interface/MonoTypeOperatorFunction"}),Object(o.b)("inlineCode",{parentName:"a"},"MonoTypeOperatorFunction<T>")),": An observable that shares the latest emitted value from the\nsource observable with all subscribers, and restarts the stream when it completes or errors."),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"The observables returned from ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"bind"}),Object(o.b)("inlineCode",{parentName:"a"},"bind"))," have been enhanced with this operator."),Object(o.b)("p",null,"It's similar to RxJS's ",Object(o.b)("inlineCode",{parentName:"p"},"shareReplay({ refCount: true, bufferSize: 1 })"),", but\nwith one difference: If the source stream completes or errors, ",Object(o.b)("inlineCode",{parentName:"p"},"shareReplay"),"\nwill repeat that event for every new subscriber. On the other hand, ",Object(o.b)("inlineCode",{parentName:"p"},"shareLatest"),"\npropagates the event to all the current subscribers, and restarts the source\nsubscription on the next outer subscription."),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"import { filter, map } from 'rxjs/operators'\nimport { shareLatest } from '@react-rxjs/core'\n\nconst activePlanetName$ = planet$.pipe(\n  filter((planet) => planet.isActive),\n  map((planet) => planet.name),\n  shareLatest()\n);\n")),Object(o.b)("h2",{id:"see-also"},"See also"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"bind"}),Object(o.b)("inlineCode",{parentName:"a"},"bind"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://rxjs-dev.firebaseapp.com/api/operators/shareReplay"}),Object(o.b)("inlineCode",{parentName:"a"},"shareReplay"))," (RxJs)")))}l.isMDXComponent=!0},83:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=l(r),m=n,d=b["".concat(i,".").concat(m)]||b[m]||u[m]||o;return r?a.a.createElement(d,c(c({ref:t},p),{},{components:r})):a.a.createElement(d,c({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);