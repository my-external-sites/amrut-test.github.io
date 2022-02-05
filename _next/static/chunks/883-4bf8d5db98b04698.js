(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[883],{9618:function(e,t,r){var n={"./AuthorLayout":4152,"./AuthorLayout.js":4152,"./ListLayout":9795,"./ListLayout.js":9795,"./Policy":6427,"./Policy.js":6427,"./PostLayout":5105,"./PostLayout.js":5105,"./PostSimple":3259,"./PostSimple.js":3259};function a(e){var t=i(e);return r(t)}function i(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=i,e.exports=a,a.id=9618},3883:function(e,t,r){"use strict";r.d(t,{J:function(){return b}});var n=r(7320),a=r(1720),i=r(3194),l=r(6009),c=r(4373),d=function(e){var t=e.toc,r=e.indentDepth,a=void 0===r?3:r,i=e.fromHeading,l=void 0===i?1:i,c=e.toHeading,d=void 0===c?6:c,o=e.asDisclosure,s=void 0!==o&&o,u=e.exclude,m=void 0===u?"":u,h=Array.isArray(m)?new RegExp("^("+m.join("|")+")$","i"):new RegExp("^("+m+")$","i"),p=t.filter((function(e){return e.depth>=l&&e.depth<=d&&!h.test(e.value)})),f=(0,n.tZ)("ul",{children:p.map((function(e){return(0,n.tZ)("li",{className:"".concat(e.depth>=a&&"ml-6"),children:(0,n.tZ)("a",{href:e.url,children:e.value})},e.value)}))});return(0,n.tZ)(n.HY,{children:s?(0,n.BX)("details",{open:!0,children:[(0,n.tZ)("summary",{className:"pt-2 pb-2 ml-6 text-xl font-bold",children:"Table of Contents"}),(0,n.tZ)("div",{className:"ml-6",children:f})]}):f})},o=function(e){var t=(0,a.useRef)(null),r=(0,a.useState)(!1),i=r[0],l=r[1],c=(0,a.useState)(!1),d=c[0],o=c[1];return(0,n.BX)("div",{ref:t,onMouseEnter:function(){l(!0)},onMouseLeave:function(){l(!1),o(!1)},className:"relative",children:[i&&(0,n.tZ)("button",{"aria-label":"Copy code",type:"button",className:"absolute right-2 top-2 w-8 h-8 p-1 rounded border-2 bg-gray-700 dark:bg-gray-800 ".concat(d?"focus:outline-none focus:border-green-400 border-green-400":"border-gray-300"),onClick:function(){o(!0),navigator.clipboard.writeText(t.current.textContent),setTimeout((function(){o(!1)}),2e3)},children:(0,n.tZ)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",stroke:"currentColor",fill:"none",className:d?"text-green-400":"text-gray-300",children:d?(0,n.tZ)(n.HY,{children:(0,n.tZ)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"})}):(0,n.tZ)(n.HY,{children:(0,n.tZ)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"})})})}),(0,n.tZ)("pre",{children:e.children})]})},s=r(8520),u=r.n(s),m=r(7059),h=r.n(m);function p(e,t,r,n,a,i,l){try{var c=e[i](l),d=c.value}catch(o){return void r(o)}c.done?t(d):Promise.resolve(d).then(n,a)}var f=function(e){var t,r=e.title,i=void 0===r?"Subscribe to the newsletter":r,l=(0,a.useRef)(null),c=(0,a.useState)(!1),d=c[0],o=c[1],s=(0,a.useState)(""),m=s[0],f=s[1],y=(0,a.useState)(!1),v=y[0],x=y[1],g=(t=u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("/api/".concat(h().newsletter.provider),{body:JSON.stringify({email:l.current.value}),headers:{"Content-Type":"application/json"},method:"POST"});case 3:return r=e.sent,e.next=6,r.json();case 6:if(!e.sent.error){e.next=11;break}return o(!0),f("Your e-mail address is invalid or you are already subscribed!"),e.abrupt("return");case 11:l.current.value="",o(!1),x(!0),f("Successfully! \ud83c\udf89 You are now subscribed.");case 15:case"end":return e.stop()}}),e)})),function(){var e=this,r=arguments;return new Promise((function(n,a){var i=t.apply(e,r);function l(e){p(i,n,a,l,c,"next",e)}function c(e){p(i,n,a,l,c,"throw",e)}l(void 0)}))});return(0,n.BX)("div",{children:[(0,n.tZ)("div",{className:"pb-1 text-lg font-semibold text-gray-800 dark:text-gray-100",children:i}),(0,n.BX)("form",{className:"flex flex-col sm:flex-row",onSubmit:g,children:[(0,n.BX)("div",{children:[(0,n.tZ)("label",{className:"sr-only",htmlFor:"email-input",children:"Email address"}),(0,n.tZ)("input",{autoComplete:"email",className:"px-4 rounded-md w-72 dark:bg-black focus:outline-none focus:ring-2 focus:border-transparent focus:ring-primary-600",id:"email-input",name:"email",placeholder:v?"You're subscribed !  \ud83c\udf89":"Enter your email",ref:l,required:!0,type:"email",disabled:v})]}),(0,n.tZ)("div",{className:"flex w-full mt-2 rounded-md shadow-sm sm:mt-0 sm:ml-3",children:(0,n.tZ)("button",{className:"py-2 sm:py-0 w-full bg-primary-500 px-4 rounded-md font-medium text-white ".concat(v?"cursor-default":"hover:bg-primary-700 dark:hover:bg-primary-400"," focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-600 dark:ring-offset-black"),type:"submit",disabled:v,children:v?"Thank you!":"Sign up"})})]}),d&&(0,n.tZ)("div",{className:"pt-2 text-sm text-red-500 w-72 sm:w-96 dark:text-red-400",children:m})]})};function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){y(e,t,r[t])}))}return e}function x(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var g={Image:l.Z,TOCInline:d,a:c.Z,pre:o,BlogNewsletterForm:function(e){var t=e.title;return(0,n.tZ)("div",{className:"flex items-center justify-center",children:(0,n.tZ)("div",{className:"p-6 bg-gray-100 dark:bg-gray-800 sm:px-14 sm:py-8",children:(0,n.tZ)(f,{title:t})})})},wrapper:function(e){e.components;var t=e.layout,a=x(e,["components","layout"]),i=r(9618)("./".concat(t)).default;return(0,n.tZ)(i,v({},a))}},b=function(e){var t=e.layout,r=e.mdxSource,l=x(e,["layout","mdxSource"]),c=(0,a.useMemo)((function(){return(0,i.getMDXComponent)(r)}),[r]);return(0,n.tZ)(c,v({layout:t,components:g},l))}},8215:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(7320);function a(e){var t=e.children;return(0,n.tZ)("h1",{className:"text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14",children:t})}},2540:function(e,t,r){"use strict";var n=r(7320),a=r(1720),i=r(523),l=r.n(i);t.Z=function(){var e=(0,a.useState)(!1),t=e[0],r=e[1];(0,a.useEffect)((function(){l().polyfill();var e=function(){window.scrollY>50?r(!0):r(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]);return(0,n.tZ)("div",{className:"fixed flex-col hidden gap-3 right-8 bottom-8 md:flex",children:(0,n.tZ)("button",{"aria-label":"Scroll To Top",type:"button",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},style:{opacity:t?1:0},className:"p-2 text-gray-500 transition-all bg-gray-200 rounded-full dark:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-300",children:(0,n.tZ)("svg",{className:"w-5 h-5",viewBox:"0 0 20 20",fill:"currentColor",children:(0,n.tZ)("path",{fillRule:"evenodd",d:"M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z",clipRule:"evenodd"})})})})}},9367:function(e,t,r){"use strict";var n=r(7320),a=r(7059),i=r.n(a),l=r(5152),c=(0,l.default)((function(){return r.e(369).then(r.bind(r,369))}),{loadableGenerated:{webpack:function(){return[369]},modules:["../components/comments/index.js -> @/components/comments/Utterances"]},ssr:!1}),d=(0,l.default)((function(){return r.e(13).then(r.bind(r,6013))}),{loadableGenerated:{webpack:function(){return[6013]},modules:["../components/comments/index.js -> @/components/comments/Giscus"]},ssr:!1}),o=(0,l.default)((function(){return r.e(970).then(r.bind(r,9970))}),{loadableGenerated:{webpack:function(){return[9970]},modules:["../components/comments/index.js -> @/components/comments/Disqus"]},ssr:!1});t.Z=function(e){var t,r=e.frontMatter;switch(i().comment.giscusConfig.mapping||i().comment.utterancesConfig.issueTerm){case"pathname":t=r.slug;break;case"url":t=window.location.href;break;case"title":t=r.title}return(0,n.BX)("div",{id:"comment",children:[i().comment&&"giscus"===i().comment.provider&&(0,n.tZ)(d,{mapping:t}),i().comment&&"utterances"===i().comment.provider&&(0,n.tZ)(c,{issueTerm:t}),i().comment&&"disqus"===i().comment.provider&&(0,n.tZ)(o,{frontMatter:r})]})}},4152:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return c}});var n=r(7320),a=r(4642),i=r(6009),l=r(8590);function c(e){var t=e.children,r=e.frontMatter,c=r.name,d=r.avatarBig,o=r.occupation,s=r.company,u=r.email,m=r.twitter,h=r.linkedin,p=r.github;return(0,n.BX)(n.HY,{children:[(0,n.tZ)(l.TQ,{title:"About - ".concat(c),description:"About me - ".concat(c)}),(0,n.BX)("div",{className:"divide-y",children:[(0,n.tZ)("div",{className:"pt-6 pb-8 space-y-2 md:space-y-5",children:(0,n.tZ)("h1",{className:"text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14",children:"About"})}),(0,n.BX)("div",{className:"items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0",children:[(0,n.BX)("div",{className:"flex flex-col items-center pt-8 space-x-2",children:[(0,n.tZ)(i.Z,{src:d,alt:"avatar",width:"192px",height:"192px",className:"w-48 h-48 rounded-full"}),(0,n.tZ)("h3",{className:"pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight",children:c}),(0,n.tZ)("div",{className:"text-gray-500 dark:text-gray-400",children:o}),(0,n.tZ)("div",{className:"text-gray-500 dark:text-gray-400",children:s}),(0,n.BX)("div",{className:"flex pt-6 space-x-3",children:[(0,n.tZ)(a.Z,{kind:"mail",href:"mailto:".concat(u)}),(0,n.tZ)(a.Z,{kind:"github",href:p}),(0,n.tZ)(a.Z,{kind:"linkedin",href:h}),(0,n.tZ)(a.Z,{kind:"twitter",href:m})]})]}),(0,n.tZ)("div",{className:"pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2",children:t})]})]})]})}},6427:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return m}});var n=r(7320),a=r(8215),i=r(9072),l=r(8590),c=r(7059),d=r.n(c),o=r(2540);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){s(e,t,r[t])}))}return e}function m(e){var t=e.frontMatter,r=(e.authorDetails,e.next,e.prev,e.children),c=t.title;return(0,n.BX)(i.Z,{children:[(0,n.tZ)(l.Uy,u({url:"".concat(d().siteUrl,"/privacy")},t)),(0,n.tZ)(o.Z,{}),(0,n.tZ)("article",{children:(0,n.BX)("div",{children:[(0,n.tZ)("header",{children:(0,n.BX)("div",{className:"pb-10 space-y-1 text-center border-b border-gray-200 dark:border-gray-700",children:[(0,n.tZ)("dl",{children:(0,n.BX)("div",{children:[(0,n.tZ)("dt",{className:"sr-only",children:"Published on"}),(0,n.tZ)("dd",{className:"text-base font-medium leading-6 text-gray-500 dark:text-gray-400"})]})}),(0,n.tZ)("div",{children:(0,n.tZ)(a.Z,{children:c})})]})}),(0,n.tZ)("div",{className:"pb-8 divide-y divide-gray-200 xl:divide-y-0 dark:divide-gray-700 ",style:{gridTemplateRows:"auto 1fr"},children:(0,n.tZ)("div",{className:"divide-y divide-gray-200 dark:divide-gray-700 xl:pb-0 xl:col-span-3 xl:row-span-2",children:(0,n.tZ)("div",{className:"pt-10 pb-8 prose dark:prose-dark max-w-none",children:r})})})]})})]})}},5105:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return y}});var n=r(7320),a=r(4373),i=r(8215),l=r(9072),c=r(8590),d=r(6009),o=r(2917),s=r(7059),u=r.n(s),m=(r(9367),r(2540));function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){h(e,t,r[t])}))}return e}var f={weekday:"long",year:"numeric",month:"long",day:"numeric"};function y(e){var t=e.frontMatter,r=e.authorDetails,s=e.next,h=e.prev,y=e.children,v=t.slug,x=(t.fileName,t.date),g=t.title,b=t.tags,Z=t.imageUrl,w=t["photo-credits"],k=t.readingTime;return(0,n.BX)(l.Z,{children:[(0,n.tZ)(c.Uy,p({url:"".concat(u().siteUrl,"/").concat(v),authorDetails:r},t)),(0,n.tZ)(m.Z,{}),(0,n.tZ)("article",{children:(0,n.BX)("div",{className:"xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700",children:[(0,n.tZ)("header",{className:"pt-6 xl:pb-6",children:(0,n.BX)("div",{className:"space-y-1 text-center",children:[(0,n.tZ)("dl",{className:"space-y-10",children:(0,n.BX)("div",{children:[(0,n.tZ)("dt",{className:"sr-only",children:"Published on"}),(0,n.tZ)("dd",{className:"text-base font-medium leading-6 text-gray-500 dark:text-gray-400",children:(0,n.tZ)("time",{dateTime:x,children:new Date(x).toLocaleDateString(u().locale,f)})})]})}),(0,n.BX)("div",{children:[(0,n.tZ)(i.Z,{children:g}),(0,n.tZ)("div",{className:"mt-6",children:(0,n.tZ)(d.Z,{alt:g,src:Z,className:"object-cover object-center lg:h-48 md:h-36",width:744,height:406})}),(0,n.tZ)("div",{className:"text-primary-500 hover:text-primary-600 text-md dark:hover:text-primary-400",children:""!=w&&null!=w?(0,n.tZ)(a.Z,{href:w,children:" Photo Credits"}):(0,n.tZ)("div",{})}),(0,n.tZ)("div",{className:"mt-2 text-gray-500 dark:text-gray-400",children:k.text})]})]})}),(0,n.BX)("div",{className:"pb-8 divide-y divide-gray-200 xl:divide-y-0 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6",style:{gridTemplateRows:"auto 1fr"},children:[(0,n.BX)("dl",{className:"pt-6 pb-10 xl:pt-11 xl:border-b xl:border-gray-200 xl:dark:border-gray-700",children:[(0,n.tZ)("dt",{className:"sr-only",children:"Authors"}),(0,n.tZ)("dd",{children:(0,n.tZ)("ul",{className:"flex justify-center space-x-8 xl:block sm:space-x-12 xl:space-x-0 xl:space-y-8",children:r.map((function(e){return(0,n.BX)("li",{className:"flex items-center space-x-2",children:[e.avatar&&(0,n.tZ)(d.Z,{src:e.avatar,width:"38px",height:"38px",alt:"avatar",className:"w-10 h-10 rounded-full"}),(0,n.BX)("dl",{className:"text-sm font-medium leading-5 whitespace-nowrap",children:[(0,n.tZ)("dt",{className:"sr-only",children:"Name"}),(0,n.tZ)("dd",{className:"text-gray-900 dark:text-gray-100",children:e.name}),(0,n.tZ)("dt",{className:"sr-only",children:"Twitter"}),(0,n.tZ)("dd",{children:e.twitter&&(0,n.tZ)(a.Z,{href:e.twitter,className:"text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",children:e.twitter.replace("https://twitter.com/","@")})})]})]},e.name)}))})})]}),(0,n.BX)("div",{className:"divide-y divide-gray-200 dark:divide-gray-700 xl:pb-0 xl:col-span-3 xl:row-span-2",children:[(0,n.tZ)("div",{className:"pt-10 pb-8 prose text-md dark:prose-dark max-w-none",children:y}),(0,n.tZ)("hr",{})]}),(0,n.BX)("footer",{children:[(0,n.BX)("div",{className:"text-sm font-medium leading-5 divide-gray-200 xl:divide-y dark:divide-gray-700 xl:col-start-1 xl:row-start-2",children:[b&&(0,n.BX)("div",{className:"py-4 xl:py-8",children:[(0,n.tZ)("h2",{className:"text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400",children:"Tags"}),(0,n.tZ)("div",{className:"flex flex-wrap",children:b.map((function(e){return(0,n.tZ)(o.Z,{text:e},e)}))})]}),(s||h)&&(0,n.BX)("div",{className:"flex justify-between py-4 xl:block xl:space-y-8 xl:py-8",children:[h&&(0,n.BX)("div",{children:[(0,n.tZ)("h2",{className:"text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400",children:"Previous Article"}),(0,n.tZ)("div",{className:"text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",children:(0,n.tZ)(a.Z,{href:"/".concat(h.slug),children:h.title})})]}),s&&(0,n.BX)("div",{children:[(0,n.tZ)("h2",{className:"text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400",children:"Next Article"}),(0,n.tZ)("div",{className:"text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",children:(0,n.tZ)(a.Z,{href:"/".concat(s.slug),children:s.title})})]})]})]}),(0,n.tZ)("div",{className:"pt-4 xl:pt-8",children:(0,n.tZ)(a.Z,{href:"/",className:"text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",children:"\u2190 Back to the articles"})})]})]})]})})]})}},3259:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var n=r(7320),a=r(4373),i=r(8215),l=r(9072),c=r(8590),d=r(7059),o=r.n(d),s=r(811),u=r(9367),m=r(2540);function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){h(e,t,r[t])}))}return e}function f(e){var t=e.frontMatter,r=(e.authorDetails,e.next),d=e.prev,h=e.children,f=t.date,y=t.title;return(0,n.BX)(l.Z,{children:[(0,n.tZ)(c.Uy,p({url:"".concat(o().siteUrl,"/blog/").concat(t.slug)},t)),(0,n.tZ)(m.Z,{}),(0,n.tZ)("article",{children:(0,n.BX)("div",{children:[(0,n.tZ)("header",{children:(0,n.BX)("div",{className:"pb-10 space-y-1 text-center border-b border-gray-200 dark:border-gray-700",children:[(0,n.tZ)("dl",{children:(0,n.BX)("div",{children:[(0,n.tZ)("dt",{className:"sr-only",children:"Published on"}),(0,n.tZ)("dd",{className:"text-base font-medium leading-6 text-gray-500 dark:text-gray-400",children:(0,n.tZ)("time",{dateTime:f,children:(0,s.Z)(f)})})]})}),(0,n.tZ)("div",{children:(0,n.tZ)(i.Z,{children:y})})]})}),(0,n.BX)("div",{className:"pb-8 divide-y divide-gray-200 xl:divide-y-0 dark:divide-gray-700 ",style:{gridTemplateRows:"auto 1fr"},children:[(0,n.tZ)("div",{className:"divide-y divide-gray-200 dark:divide-gray-700 xl:pb-0 xl:col-span-3 xl:row-span-2",children:(0,n.tZ)("div",{className:"pt-10 pb-8 prose dark:prose-dark max-w-none",children:h})}),(0,n.tZ)(u.Z,{frontMatter:t}),(0,n.tZ)("footer",{children:(0,n.BX)("div",{className:"flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base",children:[d&&(0,n.tZ)("div",{className:"pt-4 xl:pt-8",children:(0,n.BX)(a.Z,{href:"/blog/".concat(d.slug),className:"text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",children:["\u2190 ",d.title]})}),r&&(0,n.tZ)("div",{className:"pt-4 xl:pt-8",children:(0,n.BX)(a.Z,{href:"/blog/".concat(r.slug),className:"text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",children:[r.title," \u2192"]})})]})})]})]})})]})}}}]);