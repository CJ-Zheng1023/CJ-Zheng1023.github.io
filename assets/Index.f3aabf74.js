var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,n=(t,a,s)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s;import{d as i,E as l,c as o,a as d,h as r,I as c,M as m,s as p,n as v,L as _,q as u,o as b,G as f,K as x,H as j,r as y,J as k,A as g}from"./vendor.437e795d.js";import{_ as I}from"./Index.2ae52734.js";import{b as O}from"./index.6fdbf679.js";var w=i({props:{extendable:{type:Boolean,default:!1}},setup(){const e=l(!0);return{extended:e,clickExtendButton:()=>{e.value=!e.value}}}});const E=p();v("data-v-2b119e7d");const B=d("div",{class:"timeline-item__node"},null,-1),T=d("div",{class:"timeline-item__tail"},null,-1),h={class:"timeline-item__title"},P=_("-"),$=_("+");u();const q=E(((e,t,a,s,n,i)=>(b(),o("div",{class:["timeline-item",{"timeline-item--extendable":e.extendable}]},[B,T,d("div",h,[r(e.$slots,"title",{},void 0,!0),e.extendable?(b(),o("span",{key:0,class:"timeline-item__extender",onClick:t[1]||(t[1]=(...t)=>e.clickExtendButton&&e.clickExtendButton(...t))},[e.extended?(b(),o(c,{key:0},[P],64)):(b(),o(c,{key:1},[$],64))])):m("",!0)]),d("div",{class:["timeline-item__content",{"timeline-item__content--show":e.extended}]},[r(e.$slots,"default",{},void 0,!0)],2)],2))));w.render=q,w.__scopeId="data-v-2b119e7d";var A=i({components:{TimelineItem:w,Tag:I},setup(){const e=f({loading:!1,projects:[]});return x((async()=>{const t=await O();e.projects=t.data})),((e,i)=>{for(var l in i||(i={}))a.call(i,l)&&n(e,l,i[l]);if(t)for(var l of t(i))s.call(i,l)&&n(e,l,i[l]);return e})({},j(e))}});const C=p();v("data-v-cf620b28");const G={class:"page"},H={class:"project"},J={class:"project__title"},K={class:"project__text"},L={class:"project__tag"};u();const M=C(((e,t,a,s,n,i)=>{const l=y("tag"),r=y("timeline-item");return b(),o("div",G,[d("div",H,[(b(!0),o(c,null,k(e.projects,((e,t)=>(b(),o(r,{extendable:!0,key:t},{title:C((()=>[d("div",J,[d("div",K,g(e.name),1),d("div",L,[d(l,null,{default:C((()=>[_(g(e.startTime+"-"+e.endTime),1)])),_:2},1024)])])])),default:C((()=>[_(g(e.description),1)])),_:2},1024)))),128))])])}));A.render=M,A.__scopeId="data-v-cf620b28";export default A;
