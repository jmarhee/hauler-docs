"use strict";(self.webpackChunkhauler=self.webpackChunkhauler||[]).push([[8674],{4137:(e,r,n)=>{n.d(r,{Zo:()=>s,kt:()=>f});var t=n(7294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=t.createContext({}),u=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},s=function(e){var r=u(e.components);return t.createElement(c.Provider,{value:r},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(n),p=a,f=d["".concat(c,".").concat(p)]||d[p]||m[p]||o;return n?t.createElement(f,l(l({ref:r},s),{},{components:n})):t.createElement(f,l({ref:r},s))}));function f(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4227:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var t=n(7462),a=(n(7294),n(4137));const o={title:"Hauler (Command)",description:"Hauler CLI Reference for hauler",sidebar_label:"Hauler"},l=void 0,i={unversionedId:"guides-references/command-line/hauler",id:"guides-references/command-line/hauler",title:"Hauler (Command)",description:"Hauler CLI Reference for hauler",source:"@site/docs/guides-references/command-line/hauler.md",sourceDirName:"guides-references/command-line",slug:"/guides-references/command-line/hauler",permalink:"/hauler-docs/docs/next/guides-references/command-line/hauler",draft:!1,editUrl:"https://github.com/rancherfederal/hauler-docs/edit/main/docs/guides-references/command-line/hauler.md",tags:[],version:"current",frontMatter:{title:"Hauler (Command)",description:"Hauler CLI Reference for hauler",sidebar_label:"Hauler"},sidebar:"haulerSidebar",previous:{title:"Files",permalink:"/hauler-docs/docs/next/guides-references/hauler-content/files"},next:{title:"Hauler Store",permalink:"/hauler-docs/docs/next/guides-references/command-line/hauler-store"}},c={},u=[{value:"Command Overview",id:"command-overview",level:3}],s={toc:u},d="wrapper";function m(e){let{components:r,...n}=e;return(0,a.kt)(d,(0,t.Z)({},s,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"command-overview"},"Command Overview"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Interact with Hauler's command line.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'Usage:\n  hauler [flags]\n  hauler [command]\n\nAvailable Commands:\n  completion  Generate the autocompletion script for the specified shell\n  download    Download OCI content from a registry and populate it on disk\n  help        Help about any command\n  serve       Run one or more of hauler\'s embedded servers types\n  store       Interact with hauler\'s embedded content store\n  version     Print the current version\n\nFlags:\n  -h, --help               help for hauler\n  -l, --log-level string    (default "info")\n\nUse "hauler [command] --help" for more information about a command.\n')))}m.isMDXComponent=!0}}]);