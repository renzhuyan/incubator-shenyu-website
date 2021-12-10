"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[1390],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5810:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],c={title:"Custom Match Mode",keywords:["MatchStrategy"],description:"custom match mode"},s=void 0,l={unversionedId:"developer/spi/custom-match-mode",id:"version-2.4.1/developer/spi/custom-match-mode",isDocsHomePage:!1,title:"Custom Match Mode",description:"custom match mode",source:"@site/versioned_docs/version-2.4.1/developer/spi/custom-match-mode.md",sourceDirName:"developer/spi",slug:"/developer/spi/custom-match-mode",permalink:"/docs/developer/spi/custom-match-mode",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/versioned_docs/version-2.4.1/developer/spi/custom-match-mode.md",version:"2.4.1",frontMatter:{title:"Custom Match Mode",keywords:["MatchStrategy"],description:"custom match mode"},sidebar:"version-2.4.1/tutorialSidebar",previous:{title:"Custom Load Balancer",permalink:"/docs/developer/spi/custom-load-balance"},next:{title:"Custom Metrics Monitor",permalink:"/docs/developer/spi/custom-metrics-monitor"}},p=[],u={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"This paper describes how to customize the extension of  ",(0,o.kt)("inlineCode",{parentName:"li"},"org.apache.shenyu.plugin.base.condition.strategy.MatchStrategy"),".")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create a new class ",(0,o.kt)("inlineCode",{parentName:"li"},"CustomMatchStrategy"),", extends ",(0,o.kt)("inlineCode",{parentName:"li"},"org.apache.shenyu.plugin.base.condition.strategy.AbstractMatchStrategy"),", implements ",(0,o.kt)("inlineCode",{parentName:"li"},"org.apache.shenyu.plugin.base.condition.strategy.MatchStrategy"),", add annotation ",(0,o.kt)("inlineCode",{parentName:"li"},"org.apache.shenyu.spi.Join"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * This is custom match strategy.\n */\n@Join\npublic class CustomMatchStrategy extends AbstractMatchStrategy implements MatchStrategy {\n\n    @Override\n    public Boolean match(final List<ConditionData> conditionDataList, final ServerWebExchange exchange) {\n        // custom match strategy\n    }\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add key-value as following in  ",(0,o.kt)("inlineCode",{parentName:"li"},"org.apache.shenyu.plugin.base.condition.strategy.MatchStrategy")," file.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"${spi name} = ${custom class path}\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"${spi name}")," represents the name of ",(0,o.kt)("inlineCode",{parentName:"p"},"spi")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"${custom class path}")," represents the fully qualified name of the class. Such as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"custom = org.apache.shenyu.examples.http.strategy.CustomMatchStrategy\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add enum in ",(0,o.kt)("inlineCode",{parentName:"li"},"org.apache.shenyu.common.enums.MatchModeEnum")," class:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'\n    /**\n     * And custom mode enum.\n     */\n    CUSTOM(2, "custom"),\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In the ",(0,o.kt)("inlineCode",{parentName:"li"},"Apache ShenYu")," gateway management system --\x3e BasicConfig --\x3e Dictionary,  find the dictionary code as ",(0,o.kt)("inlineCode",{parentName:"li"},"MATCH_MODE"),", add a new piece of data, pay attention to the dictionary name: ",(0,o.kt)("inlineCode",{parentName:"li"},"${spi name}"),".")),(0,o.kt)("img",{src:"/img/shenyu/custom/custom_match_strategy_en.png",width:"70%",height:"60%"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"DictionaryType: ",(0,o.kt)("inlineCode",{parentName:"p"},"matchMode"),";"),(0,o.kt)("p",{parentName:"blockquote"},"DictionaryCode: ",(0,o.kt)("inlineCode",{parentName:"p"},"MATCH_MODE"),";"),(0,o.kt)("p",{parentName:"blockquote"},"DictionaryName: ",(0,o.kt)("inlineCode",{parentName:"p"},"${spi name}"),", input your custom spi name;"),(0,o.kt)("p",{parentName:"blockquote"},"DictionaryValue: When used, the value of the drop-down box, do not repeat with the existing;"),(0,o.kt)("p",{parentName:"blockquote"},"DictionaryDescribe: desc your custom match strategy;"),(0,o.kt)("p",{parentName:"blockquote"},"Sort: to sort;"),(0,o.kt)("p",{parentName:"blockquote"},"Status: open or close.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When adding selectors or rules, you can use custom MatchType:")),(0,o.kt)("img",{src:"/img/shenyu/custom/use_custom_match_strategy_en.png",width:"80%",height:"70%"}))}m.isMDXComponent=!0}}]);