import{_ as q}from"./Line-xgTspo1m.js";import{d as N,v as d,o as a,c as l,b as e,z as u,A as g,y as A,s as z,E as S,x as P,G as B,H as k,F as b,g as w,t as h,u as L,C as U,D as F,r as H,I as Y,n as T,l as I,a as G,w as R,f as Z,p as j,e as E,_ as O}from"./index-lIHObT2d.js";import{c as W,a as J}from"./validate-TebDixuM.js";import{C as V}from"./cityCountyData-3AYHRziG.js";const K={class:"mb-3"},Q=e("label",{for:"email",class:"form-label"},"電子信箱",-1),X={class:"mb-3"},ee=e("label",{for:"password",class:"form-label"},"密碼",-1),se={class:"mb-7"},te=e("label",{for:"checkPassword",class:"form-label"},"確認密碼",-1),ae=e("input",{type:"submit",class:"btn btn-primary w-100 py-3 px-6",value:"下一步"},null,-1),oe=N({__name:"StepOne",emits:["nextStep"],setup(_,{emit:y}){const i=d({email:"",password:""}),r=d(""),p=y;function v(m){f(i.value)&&p("nextStep",{step:m,account:i.value})}function f(m){return W(m.email)&&J(m.password,r.value)}return(m,n)=>(a(),l("form",{class:"needs-validation mb-3",onSubmit:n[3]||(n[3]=A(o=>v(2),["prevent"]))},[e("div",K,[Q,u(e("input",{type:"email",class:"form-control p-3",id:"email","aria-describedby":"emailHelp",placeholder:"hello@exsample.com",required:"","onUpdate:modelValue":n[0]||(n[0]=o=>i.value.email=o)},null,512),[[g,i.value.email]])]),e("div",X,[ee,u(e("input",{type:"password",class:"form-control p-3",id:"password","aria-describedby":"password",autocomplete:"on",placeholder:"請輸入密碼",required:"","onUpdate:modelValue":n[1]||(n[1]=o=>i.value.password=o)},null,512),[[g,i.value.password]])]),e("div",se,[te,u(e("input",{type:"password",class:"form-control p-3",id:"checkPassword","aria-describedby":"checkPassword",autocomplete:"on",placeholder:"請再輸入一次密碼",required:"","onUpdate:modelValue":n[2]||(n[2]=o=>r.value=o)},null,512),[[g,r.value]])]),ae],32))}}),le={class:"mb-3"},ne=e("label",{for:"name",class:"form-label"},"姓名",-1),ie={class:"mb-3"},re=e("label",{for:"phoneNum",class:"form-label"},"手機號碼",-1),ce={class:"mb-3"},de=e("label",{for:"year",class:"form-label"},"生日",-1),ue={class:"d-flex gap-2"},pe=["value"],me=["value"],ve=["value"],_e={class:"mb-3 d-flex flex-column gap-3"},fe=e("label",{class:"form-label"},"地址",-1),be={class:"d-flex gap-2"},he=["value"],ye=["value"],we=e("div",{class:"form-check mb-7"},[e("input",{class:"form-check-input",type:"checkbox",value:"",id:"finish",required:""}),e("label",{class:"form-check-label",for:"finish"},"我已閱讀並同意本網站個資使用規範 ")],-1),ge=e("input",{type:"submit",class:"btn btn-primary w-100 py-3 px-6",value:"立即註冊"},null,-1),xe=N({__name:"StepTwo",props:{account:{}},setup(_){const y=_,i=z(),r=d(new Date().getFullYear()-25),p=d(1),v=d(1),f=d(31),m=()=>{p.value===2?f.value=r.value%4?28:29:[1,3,5,7,8,10,12].includes(p.value)?f.value=31:f.value=30};S(()=>r.value,m),S(()=>p.value,m);const n=d([]),o=d("");P(()=>{o.value=V[0].CityName,D()}),S(()=>o.value,()=>D());const D=()=>{const x=V.find(t=>t.CityName===o.value);n.value=x.AreaList,c.value.address.zipcode=Number(x.AreaList[0].ZipCode)},c=d({name:"",phone:"",birthday:"",address:{zipcode:null,detail:""}});async function M(){if(c.value.name.length<2){U.fire({icon:"error",title:"姓名至少兩個字"});return}c.value.birthday=`${r.value}/${p.value}/${v.value}`;const x={...y.account,...c.value},t=await F("/api/v1/user/signup","POST",x),C=await U.fire({icon:t.status?"success":"error",title:t.status?"註冊成功":t.message});(C.isConfirmed||C.isDismissed)&&i.push("/login")}return(x,t)=>{const C=B("tel");return a(),l("form",{class:"needs-validation mb-3",onSubmit:A(M,["prevent"])},[e("div",le,[ne,u(e("input",{type:"text",class:"form-control p-3",id:"name","aria-describedby":"userName",placeholder:"請輸入姓名",required:"","onUpdate:modelValue":t[0]||(t[0]=s=>c.value.name=s)},null,512),[[g,c.value.name]])]),e("div",ie,[re,u(e("input",{type:"tel",class:"form-control p-3",id:"phoneNum","aria-describedby":"password",autocomplete:"on",placeholder:"請輸入手機號碼",required:"","onUpdate:modelValue":t[1]||(t[1]=s=>c.value.phone=s)},null,512),[[C],[g,c.value.phone]])]),e("div",ce,[de,e("div",ue,[u(e("select",{id:"year",class:"form-select p-3","onUpdate:modelValue":t[2]||(t[2]=s=>r.value=s)},[(a(),l(b,null,w(100,s=>e("option",{key:s,value:new Date().getFullYear()-(100-s)},h(new Date().getFullYear()-(100-s))+" 年 ",9,pe)),64))],512),[[k,r.value]]),u(e("select",{id:"month",class:"form-select p-3","onUpdate:modelValue":t[3]||(t[3]=s=>p.value=s)},[(a(),l(b,null,w(12,s=>e("option",{key:s,value:s},h(s)+" 月",9,me)),64))],512),[[k,p.value]]),u(e("select",{id:"day",class:"form-select p-3","onUpdate:modelValue":t[4]||(t[4]=s=>v.value=s)},[(a(!0),l(b,null,w(f.value,s=>(a(),l("option",{key:s,value:s},h(s)+" 日",9,ve))),128))],512),[[k,v.value]])])]),e("div",_e,[fe,e("div",be,[u(e("select",{id:"address",class:"form-select p-3","onUpdate:modelValue":t[5]||(t[5]=s=>o.value=s)},[(a(!0),l(b,null,w(L(V),s=>(a(),l("option",{key:s.CityName,value:s.CityName},h(s.CityName),9,he))),128))],512),[[k,o.value]]),u(e("select",{class:"form-select p-3","onUpdate:modelValue":t[6]||(t[6]=s=>c.value.address.zipcode=s)},[(a(!0),l(b,null,w(n.value,s=>(a(),l("option",{key:s.ZipCode,value:s.ZipCode},h(s.AreaName),9,ye))),128))],512),[[k,c.value.address.zipcode,void 0,{number:!0}]])]),u(e("input",{type:"text",class:"form-control p-3",id:"address","aria-describedby":"address",autocomplete:"on",placeholder:"請輸入詳細地址",required:"","onUpdate:modelValue":t[7]||(t[7]=s=>c.value.address.detail=s)},null,512),[[g,c.value.address.detail]])]),we,ge],32)}}}),$=_=>(j("data-v-d9950b7c"),_=_(),E(),_),ke={class:"container-fluid d-flex align-items-center bg-neutral-bg text-white position-relative"},$e=$(()=>e("img",{src:q,alt:"Line",class:"position-absolute end-0 top-0 mt-8 py-5"},null,-1)),Ce=$(()=>e("img",{src:"https://images.unsplash.com/photo-1630587148265-761cbd139043?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",alt:"loginImg",class:"w-50 object-fit-cover position-relative z-1 d-none d-lg-block",style:{"max-height":"1078px"}},null,-1)),Se={class:"row w-lg-50 flex-grow-1 position-relative z-1 py-4"},Ve={class:"col-lg-6 col mx-auto"},Ne=$(()=>e("p",{class:"mb-2 text-primary fw-bold fs-small fs-lg-0"},"享樂酒店，誠摯歡迎",-1)),De=$(()=>e("h1",{class:"fw-bold fs-lg-1 fs-3 mb-3"},"立即註冊",-1)),Ue={class:"mb-7 py-3 d-flex align-items-center gap-2"},Ie={class:"steps-num"},Ae={key:0,class:"material-symbols-outlined"},Me={key:1},qe={class:"step-text"},ze={key:0,class:"border border-neutral-60 flex-grow-1"},Pe=$(()=>e("span",null,"已經有會員了嗎？",-1)),Be=N({__name:"SignInView",setup(_){const y=d(["輸入信箱及密碼","填寫基本資料"]),i=d(1),r=d({email:"",password:""});function p(v){r.value=v.account,i.value=v.step}return(v,f)=>{const m=H("router-link");return a(),l("main",ke,[$e,Ce,e("div",Se,[e("div",Ve,[Ne,De,e("div",Ue,[(a(!0),l(b,null,w(y.value,(n,o)=>(a(),l(b,{key:n.name},[e("div",{class:Y(["steps d-flex flex-column align-items-center gap-1",{active:o+1<=i.value}])},[e("div",Ie,[o+1<i.value?(a(),l("span",Ae," check ")):(a(),l("span",Me,h(o+1),1))]),e("div",qe,h(n),1)],2),o!==y.value.length-1?(a(),l("span",ze)):T("",!0)],64))),128))]),i.value===1?(a(),I(oe,{key:0,onNextStep:p})):(a(),I(xe,{key:1,account:r.value},null,8,["account"])),Pe,G(m,{to:"/login"},{default:R(()=>[Z("立即登入")]),_:1})])])])}}}),Te=O(Be,[["__scopeId","data-v-d9950b7c"]]);export{Te as default};
