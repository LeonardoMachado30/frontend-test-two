(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(6982)}])},6982:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return y}});var a=t(5893),s=t(7294);let l=(0,s.createContext)({loading:!1,setLoading(e){}}),i=(0,s.createContext)({compare:{Pokemon1:null,Pokemon2:null},setCompare(){}});var o=t(5675),d=t.n(o),c={src:"http://localhost:3000/public/_next/static/media/icon_compare.f65faae1.svg",height:512,width:512},r=function(e){let{id:n,handleCloseInfo:t}=e,[l,o]=(0,s.useState)(""),[r,u]=(0,s.useState)(!1),{compare:h,setCompare:p}=(0,s.useContext)(i);return(0,s.useEffect)(()=>{document.title="VISUALIZA\xc7\xc2O DE POKEMONS",async function(){await w("https://pokeapi.co/api/v2/pokemon/".concat(n)).then(e=>{o({id:e.id,name:e.name,speed:e.stats[0].base_stat,spDef:e.stats[1].base_stat,spAtk:e.stats[2].base_stat,def:e.stats[3].base_stat,atk:e.stats[4].base_stat,hp:e.stats[5].base_stat,sprite_front:e.sprites.front_default})})}()},[n]),(0,a.jsxs)("ul",{className:"info-container ".concat(""===l?"":"info-transition"),children:[(0,a.jsxs)("li",{children:[(0,a.jsx)("strong",{children:"HP: "}),(0,a.jsx)("p",{children:l.hp})]}),"|",(0,a.jsxs)("li",{children:[(0,a.jsx)("strong",{children:"ATA: "}),(0,a.jsx)("p",{children:l.atk})]}),"|",(0,a.jsxs)("li",{children:[(0,a.jsx)("strong",{children:"DEF: "}),(0,a.jsx)("p",{children:l.def})]}),"|",(0,a.jsxs)("li",{children:[(0,a.jsx)("strong",{children:"VEL: "}),(0,a.jsx)("p",{children:l.speed})]}),(0,a.jsx)("li",{children:(0,a.jsx)("button",{className:"btn-secondary",onClick:()=>t({_id:null}),children:"X"})}),(0,a.jsx)("li",{children:(0,a.jsx)("button",{className:"btn-primary",disabled:r,onClick(e){e.target.disabled=!0;let n=(null==h?void 0:h.Pokemon1)!==null;if(n){var t,a;if(p(e=>({...e,Pokemon2:l})),(null==h?void 0:null===(t=h.Pokemon1)||void 0===t?void 0:t.name)===l.name||(null==h?void 0:null===(a=h.Pokemon2)||void 0===a?void 0:a.name)===l.name){u(!0);return}}else p({Pokemon1:l})},children:(0,a.jsx)(d(),{src:c,width:18,height:20,alt:"compare"})})})]})},u=function(e){let{apiOptions:n}=e,[t,l]=(0,s.useState)(null),i=e=>{let{_id:n}=e;if(null!==n){l(n);return}l(null)};return(0,a.jsx)("ul",{className:"card-list",children:n.map((e,n)=>{let s=null!==t&&t===e[2];return n<15&&(0,a.jsxs)("li",{className:"card",children:[(0,a.jsx)(d(),{src:e[1],alt:e[1],width:200,height:200,loading:"lazy"}),(0,a.jsx)("p",{children:e[0]}),(0,a.jsx)("button",{className:"height-card ".concat(s?"opacity-0":"btn-card"),onClick(){i({_id:e[2]})},children:"Info"}),s&&(0,a.jsx)(r,{id:t,handleCloseInfo:i})]},n)})})},h=function(e){var n,t,s,l,i,o,d,c,r;let{prop:u}=e;return(0,a.jsxs)("div",{className:"compareInfo-container",children:[(0,a.jsx)("p",{className:"compareInfo-name",children:null==u?void 0:u.name}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("label",{children:["HP: ",null==u?void 0:u.hp," "]}),(0,a.jsx)("label",{className:null==u?void 0:null===(n=u.comparison)||void 0===n?void 0:n.hpClass,children:null==u?void 0:null===(t=u.comparison)||void 0===t?void 0:t.hp})]}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("label",{children:["ATA: ",null==u?void 0:u.atk," "]}),(0,a.jsx)("label",{className:null==u?void 0:null===(s=u.comparison)||void 0===s?void 0:s.atkClass,children:null==u?void 0:null===(l=u.comparison)||void 0===l?void 0:l.atk})]}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("label",{children:["DEF: ",null==u?void 0:u.def," "]}),(0,a.jsx)("label",{className:null==u?void 0:null===(i=u.comparison)||void 0===i?void 0:i.defClass,children:null==u?void 0:null===(o=u.comparison)||void 0===o?void 0:o.def})]}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("label",{children:["VEL: ",null==u?void 0:u.speed," "]}),(0,a.jsx)("label",{className:null==u?void 0:null===(d=u.comparison)||void 0===d?void 0:d.speedClass,children:null==u?void 0:null===(c=u.comparison)||void 0===c?void 0:c.speed})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{children:"Media: "}),(0,a.jsx)("label",{children:null==u?void 0:null===(r=u.comparison)||void 0===r?void 0:r.media})]})]})},p=function(){let[e,n]=(0,s.useState)(!0),[t,l]=(0,s.useState)({}),[o,r]=(0,s.useState)(""),{compare:u}=(0,s.useContext)(i),{Pokemon1:p,Pokemon2:m}=u,x=void 0!==p&&p,f=void 0!==p&&m,v=void 0!==p&&void 0!==m;console.log(u);let j=(0,s.useCallback)((e,n)=>{let t={Pokemon1:{...p,comparison:{atk:e.atk-n.atk,def:e.def-n.def,hp:e.hp-n.hp,speed:e.speed-n.speed,media:p.hp+p.atk+p.def+4*p.speed,atkClass:e.atk>n.atk?"compared-up":"compared-down",defClass:e.def>n.def?"compared-up":"compared-down",hpClass:e.hp>n.hp?"compared-up":"compared-down",speedClass:e.speed>n.speed?"compared-up":"compared-down"}},Pokemon2:{...m,comparison:{atk:n.atk-e.atk,def:n.def-e.def,hp:n.hp-e.hp,speed:n.speed-e.speed,media:n.hp+n.atk+n.def+4*n.speed,atkClass:n.atk>e.atk?"compared-up":"compared-down",defClass:n.def>e.def?"compared-up":"compared-down",hpClass:n.hp>e.hp?"compared-up":"compared-down",speedClass:n.speed>e.speed?"compared-up":"compared-down"}}};l(t)},[p,m]);return(0,s.useEffect)(()=>{if(v)return n(!1),j(p,m)},[p,m,v,j]),(0,a.jsxs)("section",{className:"compare-container",children:[v&&(0,a.jsxs)("div",{className:"card-comapre-body ".concat(o),children:[(0,a.jsx)("button",{className:"btn-secondary",onClick(){r("d-none")},children:"X"}),(0,a.jsx)(d(),{src:null==p?void 0:p.sprite_front,alt:null==p?void 0:p.name,width:60,height:60}),x&&(0,a.jsx)(h,{prop:t.Pokemon1}),f&&(0,a.jsx)(h,{prop:t.Pokemon2}),(0,a.jsx)(d(),{src:null==m?void 0:m.sprite_front,alt:null==m?void 0:m.name,width:60,height:60})]}),(0,a.jsxs)("div",{className:"card-comapre",children:[(0,a.jsx)("div",{children:x&&p.name}),(0,a.jsx)("button",{className:"btn-compare",disabled:e,onClick(){r("")},children:(0,a.jsx)(d(),{src:c,width:18,height:18,alt:"compare"})}),(0,a.jsx)("div",{children:f&&m.name})]})]})},m={src:"http://localhost:3000/public/_next/static/media/loading.906dba3d.gif",height:247,width:292},x=function(){let{loading:e}=(0,s.useContext)(l);if(e)return(0,a.jsx)("div",{className:"loading",children:(0,a.jsx)(d(),{src:m,width:200,height:200,alt:"loading",loading:"lazy"})})},f=function(e){let{apiRequest:n,hideBySearch:t}=e,[l,i]=(0,s.useState)(!0),[o,d]=(0,s.useState)(1),[c,r]=(0,s.useState)(["<",1,2,3,4,">"]),u=e=>{let[t,a]=[null],s=e.toString().includes("<")||e.toString().includes(">");if(d(e),!s){t="=".concat(15*e,"&"),a="https://pokeapi.co/api/v2/pokemon?offset=15&limit=15";let l=RegExp("=[0-9][0-9]&");a=a.replace(l,t)}if(s){let o=c.map(n=>">"===n?(i(!1),n):"<"===n?n:"<"===e?n-1:n+1);o.includes(1)&&i(!0),r(o);return}n(a)};return(0,a.jsx)("div",{className:"pagination-container ".concat(t),children:c.map((e,n)=>(0,a.jsx)("div",{children:n+1>1&&n+1<6?(0,a.jsx)("button",{className:"pagination-btn ".concat(o==e?"selected":""),onClick:()=>u(e),children:e}):n+1===1?(0,a.jsx)("button",{className:"pagination-btn",onClick:()=>u(e),disabled:l,children:e}):n+1===6?(0,a.jsx)("button",{className:"pagination-btn",onClick:()=>u(e),children:e}):""},n))})},v=function(e){let{handleApi:n}=e,[t,l]=(0,s.useState)(""),[i,o]=(0,s.useState)(null);async function d(){await n("/"+t)}return(0,s.useEffect)(()=>{document.title="PESQUISAR"},[]),(0,a.jsxs)("div",{className:"search",children:[(0,a.jsx)("input",{type:"text",className:"search-input",placeholder:"Digite o nome de um pokemon",value:t,onChange:e=>l(e.target.value.toLocaleLowerCase())}),(0,a.jsx)("div",{className:"flex-row gap-2",children:(0,a.jsx)("button",{className:"search-btn",onClick:()=>d(),children:"PESQUISAR"})})]})},j={src:"http://localhost:3000/public/_next/static/media/logo_linkedin.4144d115.svg",height:512,width:512},k={src:"http://localhost:3000/public/_next/static/media/logo_github.df17f4f7.svg",height:512,width:512},g=function(){let[e,n]=(0,s.useState)([]),[t,o]=(0,s.useState)(null),[c,r]=(0,s.useState)({Pokemon1:null,Pokemon2:null}),{setLoading:h}=(0,s.useContext)(l),m=(0,s.useCallback)(async e=>{await e.map(async e=>{await w(e.url).then(async e=>{n(n=>[...n,[e.name,e.sprites.front_default,e.id]])})})},[]),x=(0,s.useCallback)(async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;n([]),h(!0),await w("https://pokeapi.co/api/v2/pokemon".concat(null!=e?e:"?offset=0&limit=16")).then(async t=>{null===e?await m(t.results):n([t.name,t.sprites.front_default,t.id]),h(!1)})},[h,m]);return(0,s.useEffect)(()=>{x()},[x]),(0,a.jsxs)(i.Provider,{className:"container",value:{compare:c,setCompare:r},children:[(0,a.jsx)(v,{handleApi:x}),(0,a.jsx)("h1",{className:"".concat(t),style:{textAlign:"center"},children:"LISTA DE POKEMONS"}),(0,a.jsx)(u,{apiOptions:e}),(0,a.jsx)(f,{hideBySearch:t}),null!==c.Pokemon1&&(0,a.jsx)(p,{}),(0,a.jsxs)("ul",{className:"social",children:[(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"https://www.linkedin.com/in/flavio-leonardo-ads/",target:"_blank",children:(0,a.jsx)(d(),{src:j,width:40,height:40,alt:"LinkedIn",loading:"lazy"})})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"https://github.com/LeonardoMachado30",target:"_blank",children:(0,a.jsx)(d(),{src:k,width:40,height:40,alt:"GitHub",loading:"lazy"})})})]})]})};let b=async e=>await fetch(e).then(e=>e.json()).then(e=>e).catch(e=>{console.log({err:e})});var w=b,C=t(7297),N=t(9521);function _(){let e=(0,C.Z)(['\n  position: fixed;\n  bottom: 138px;\n  right: 10px;\n  z-index: 999;\n  background-image: url("/images/btn-dark.png");\n  background-repeat: no-repeat;\n  background-size: contain;\n  border: 0;\n  width: 80px;\n  height: 40px;\n']);return _=function(){return e},e}let S={dark:"dark-mode",light:""},P=(0,s.createContext)({theme:S.light,changeTheme(e){console.log(e)}}),E=N.ZP.button.withConfig({componentId:"sc-83dfc747-0"})(_());var y=function(){let[e,n]=(0,s.useState)(S.dark),[t,i]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{document.title="LISTA DE POKEMONS";let e=localStorage.getItem("theme");switch(e){case S.light:document.body.classList.remove("dark-mode");break;case S.dark:document.body.classList.add("dark-mode")}},[e]),(0,a.jsx)(P.Provider,{value:{theme:e},children:(0,a.jsx)(l.Provider,{value:{loading:t,setLoading:i},children:(0,a.jsxs)("section",{className:"container",children:[(0,a.jsx)(x,{}),(0,a.jsx)(E,{className:"darkMode-btn",value:e,onClick(e){!function(e){let n="dark-mode"===e?S.light:S.dark;localStorage.setItem("theme",n)}(e.target.value)}}),(0,a.jsx)(g,{})]})})})}}},function(e){e.O(0,[654,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);