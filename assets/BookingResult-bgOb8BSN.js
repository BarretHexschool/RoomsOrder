import{_ as h}from"./Line-UpEVw4si.js";import{d as m,s as v,v as d,x as f,D as g,o as y,c as x,b as s,t as o,f as r,a as w,p as I,e as b,_ as k}from"./index-cvQsoOqD.js";import{n as D}from"./NextRoom-ZzzD0sJb.js";import"./RoomService-dB8gQSya.js";import"./bootstrap.esm-gjMj9F3B.js";const L="data:image/svg+xml,%3csvg%20width='56'%20height='56'%20viewBox='0%200%2056%2056'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='56'%20height='56'%20rx='28'%20fill='%2352DD7E'%20/%3e%3cg%20clip-path='url(%23clip0_423_8954)'%3e%3cpath%20d='M22.9974%2035L15.9974%2028L13.6641%2030.3333L22.9974%2039.6667L42.9974%2019.6667L40.6641%2017.3333L22.9974%2035Z'%20fill='white'%20/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_423_8954'%3e%3crect%20width='40'%20height='40'%20fill='white'%20transform='translate(8%208)'%20/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",e=t=>(I("data-v-eb55468c"),t=t(),b(),t),B={class:"bg-neutral-bg text-white"},O={class:"container"},S=e(()=>s("div",{class:"row"},[s("div",{class:"p-5 d-flex gap-3 align-item-center"})],-1)),N={class:"container"},R={class:"row"},P={class:"col-md-7"},A={class:"d-flex gap-4"},E=e(()=>s("div",{class:"d-flex justify-content-center"},[s("img",{class:"rounded img-fluid",src:L,alt:"Room Image"})],-1)),V=e(()=>s("h3",null,"您已預訂成功",-1)),j=e(()=>s("div",{class:"py-3"},null,-1)),C=e(()=>s("div",{class:"d-flex justify-content-between"},[s("span",null,[s("p",null," 我們已發送訂房資訊及詳細內容至你的電子信箱，入住時需向櫃檯人員出示訂房人證件。 "),s("br")])],-1)),M=e(()=>s("hr",null,null,-1)),T=e(()=>s("div",{class:"py-5"},null,-1)),z=e(()=>s("div",{class:"py-4"},null,-1)),G=e(()=>s("div",{class:"py-5"},null,-1)),H=e(()=>s("hr",null,null,-1)),J=e(()=>s("h4",null,"訂房人資訊",-1)),U=e(()=>s("div",{class:"py-3"},null,-1)),Z=e(()=>s("div",null,"姓名",-1)),q=e(()=>s("div",{class:"py-3"},null,-1)),F=e(()=>s("div",null,"手機號碼",-1)),K=e(()=>s("div",{class:"py-3"},null,-1)),Q=e(()=>s("div",null,"電子信箱",-1)),W=e(()=>s("div",{class:"py-3"},null,-1)),X={class:"col-md-5 rounded text-black"},Y=e(()=>s("img",{src:h,alt:"Line",class:"mt-8 py-5"},null,-1)),$=m({__name:"BookingResult",props:["roomInfo"],setup(t){const c=v(),i=d({_id:"",checkInDate:"",checkOutDate:"",peopleNum:0,roomId:{name:"",amenityInfo:[],facilityInfo:[],imageUrl:"",layoutInfo:[],price:0}});JSON.parse(localStorage.getItem("user"));const l=d({_id:"",name:"",phone:"",birthday:"",address:{zipcode:1,detail:""},email:"",createdAt:"",updatedAt:""});f(()=>{u()});function _(){c.push("/user/myOrder")}async function u(){const n=await g("/api/v1/orders/","GET","");console.log(n);const{status:a,result:p}=n;a?i.value=p[0]:c.replace("login")}return(n,a)=>(y(),x("main",B,[s("div",O,[S,s("div",N,[s("div",R,[s("div",P,[s("div",A,[E,s("div",null,[s("h3",null,"恭喜，"+o(l.value.name)+"！",1),V])]),j,C,M,T,r(" 立即查看您的訂單紀錄 "),z,s("div",{class:"d-flex"},[s("button",{onClick:_,class:"btn btn-primary"},"前往我的訂單")]),G,H,J,U,Z,s("span",null,o(l.value.name),1),q,F,s("span",null,o(l.value.phone),1),K,Q,s("span",null,o(l.value.email),1),W]),s("div",X,[r(o(t.roomInfo)+" ",1),w(D,{"room-info":i.value},null,8,["room-info"])])])]),Y])]))}}),ns=k($,[["__scopeId","data-v-eb55468c"]]);export{ns as default};
