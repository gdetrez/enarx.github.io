"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[59],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(t),f=a,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return t?r.createElement(m,l(l({ref:n},p),{},{components:t})):r.createElement(m,l({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5705:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),l=["components"],i={},s="Installing Enarx",c={unversionedId:"Installation/Enarx",id:"Installation/Enarx",isDocsHomePage:!1,title:"Installing Enarx",description:"You can install Enarx from crates.io, GitHub, or Nix.",source:"@site/docs/Installation/Enarx.md",sourceDirName:"Installation",slug:"/Installation/Enarx",permalink:"/docs/Installation/Enarx",editUrl:"https://github.com/enarx/docs/blob/main/docs/Installation/Enarx.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Initial Setup",permalink:"/docs/Installation/Setup"},next:{title:"Running Enarx",permalink:"/docs/Installation/Wasm"}},p=[{value:"Install directly from crates.io",id:"install-directly-from-cratesio",children:[],level:2},{value:"Install from GitHub",id:"install-from-github",children:[],level:2},{value:"Install from Nix",id:"install-from-nix",children:[{value:"Known Issue for Enarx 0.1",id:"known-issue-for-enarx-01",children:[],level:3}],level:2}],u={toc:p};function d(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installing-enarx"},"Installing Enarx"),(0,o.kt)("p",null,"You can install Enarx from crates.io, GitHub, or Nix."),(0,o.kt)("h2",{id:"install-directly-from-cratesio"},"Install directly from crates.io"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ cargo +nightly install --bin enarx -- enarx\n")),(0,o.kt)("h2",{id:"install-from-github"},"Install from GitHub"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ git clone https://github.com/enarx/enarx\n$ cd enarx/\n$ cargo build\n\n$ cargo install --bin enarx --path ./\n")),(0,o.kt)("h2",{id:"install-from-nix"},"Install from Nix"),(0,o.kt)("p",null,"Users with ",(0,o.kt)("inlineCode",{parentName:"p"},"nix")," package manager installed (see ",(0,o.kt)("a",{parentName:"p",href:"https://nixos.org"},"https://nixos.org"),") should be able to just do in the checked out repository:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ git clone https://github.com/enarx/enarx\n$ cd enarx/\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ nix-shell\n")),(0,o.kt)("p",null,"(on legacy, stable ",(0,o.kt)("inlineCode",{parentName:"p"},"nix")," installs)"),(0,o.kt)("p",null,"or:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ nix develop\n")),(0,o.kt)("h3",{id:"known-issue-for-enarx-01"},"Known Issue for Enarx 0.1"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"nix-shell")," opens file descriptors ",(0,o.kt)("inlineCode",{parentName:"p"},"3")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"4")," and the enarx ",(0,o.kt)("inlineCode",{parentName:"p"},"cargo test")," fails therefore. ",(0,o.kt)("inlineCode",{parentName:"p"},"nix develop")," does not seem to have this problem."))}d.isMDXComponent=!0}}]);