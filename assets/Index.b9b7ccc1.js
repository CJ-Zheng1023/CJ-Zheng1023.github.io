import{_ as e}from"./Index.2ae52734.js";import{d as s,c as a,a as t,A as n,s as o,n as r,q as d,o as l,G as i,K as c,r as p,I as _,J as m,L as v}from"./vendor.437e795d.js";import{s as g}from"./index.6fdbf679.js";var h=s({props:{label:{type:String,require:!0},content:{type:String,require:!0},width:{type:Number,default:100}},setup(){}});const f=o();r("data-v-1e5d74de");const u={class:"property"},b={class:"property__content"};d();const y=f(((e,s,o,r,d,i)=>(l(),a("div",u,[t("div",{class:"property__label",style:{width:`${e.width}px`}},n(e.label),5),t("div",b,n(e.content),1)]))));h.render=y,h.__scopeId="data-v-1e5d74de";var x=s({components:{Tag:e,Property:h},setup(){const e=i({loading:!1,general:{info:{name:"",address:"",email:"",phone:""},jobs:[],description:""}});return c((async()=>{const{data:s}=await g();Object.assign(e.general,s)})),{map:{name:"姓名",address:"家庭住址",email:"邮箱",phone:"电话"},state:e}}});const j=o();r("data-v-ab41ed92");const w={class:"page"},I={class:"home"},q={class:"home__title"},k=t("span",{class:"home__text"},"您好，我叫",-1),S={class:"home__text home__text--special"},A={class:"home__tags"},G={class:"tags"},J={class:"home__description"},K={class:"home__info"},L=t("div",{class:"home__title"},[t("span",{class:"home__text"},"基本信息")],-1),N={class:"infos"};d();const O=j(((e,s,o,r,d,i)=>{const c=p("tag"),g=p("property");return l(),a("div",w,[t("div",I,[t("div",q,[k,t("span",S,n(e.state.general.info.name),1)]),t("div",A,[t("div",G,[(l(!0),a(_,null,m(e.state.general.jobs,((e,s)=>(l(),a(c,{key:s},{default:j((()=>[v(n(e),1)])),_:2},1024)))),128))])]),t("div",J,n(e.state.general.description),1),t("div",K,[L,t("div",N,[(l(!0),a(_,null,m(e.state.general.info,((s,t)=>(l(),a(g,{label:e.map[t],content:s,key:t},null,8,["label","content"])))),128))])])])])}));x.render=O,x.__scopeId="data-v-ab41ed92";export default x;
