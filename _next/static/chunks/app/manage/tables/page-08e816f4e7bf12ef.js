(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[872],{626:(e,a,n)=>{Promise.resolve().then(n.bind(n,4983))},2327:(e,a,n)=>{"use strict";n.d(a,{NavBar:()=>l});var s=n(5155),t=n(6046),i=n(2282);function l(){let e=(0,t.useRouter)();return(0,s.jsxs)("div",{className:"flex flex-row justify-between p-3 bg-gray-300",children:[(0,s.jsx)(i.A,{variant:"contained",onClick:()=>e.push("/login"),children:"Login"}),(0,s.jsx)(i.A,{variant:"contained",onClick:()=>e.push("/menu"),children:"Menu"}),(0,s.jsx)(i.A,{variant:"contained",onClick:()=>e.push("/manage"),children:"Manage"})]})}},2537:(e,a,n)=>{"use strict";n.r(a),n.d(a,{ManageNav:()=>c,default:()=>r});var s=n(5155),t=n(6046),i=n(2327),l=n(2282);function r(){return(0,s.jsxs)("div",{children:[(0,s.jsx)(i.NavBar,{}),(0,s.jsx)(c,{})]})}function c(){let e=(0,t.useRouter)();return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"flex flex-row justify-between p-3 bg-orange-300",children:[(0,s.jsx)(l.A,{variant:"contained",onClick:()=>e.push("/manage/staff"),children:"Manage Staff"}),(0,s.jsx)(l.A,{variant:"contained",onClick:()=>e.push("/manage/tables"),children:"Manage Tables"}),(0,s.jsx)(l.A,{variant:"contained",onClick:()=>e.push("/manage/menu"),children:"Manage Menu"})]})})}},4983:(e,a,n)=>{"use strict";n.r(a),n.d(a,{TableLayout:()=>o,default:()=>d});var s=n(5155),t=n(6046),i=n(2327),l=n(2537),r=n(2115),c=n(2282),u=n(8888);function d(){return(0,t.useRouter)(),(0,s.jsxs)("div",{children:[(0,s.jsx)(i.NavBar,{}),(0,s.jsx)(l.ManageNav,{}),(0,s.jsx)(o,{})]})}function o(){let[e,a]=(0,r.useState)([]),[n,t]=(0,r.useState)(1),i=n=>{a(e.filter(e=>e.id!==n))};return(0,s.jsxs)("div",{className:"h-screen",children:[(0,s.jsxs)("div",{className:"flex",children:[(0,s.jsx)(c.A,{variant:"outlined",className:"",onClick:()=>a([]),children:"Reset"}),(0,s.jsxs)("div",{className:"flex flex-row items-center",children:[(0,s.jsx)("div",{children:"Table Id:"}),(0,s.jsx)("input",{type:"number",className:"text-black",value:n,onChange:e=>{t(Number(e.target.value))}})]})]}),(0,s.jsx)("div",{className:"relative w-full h-3/4 bg-gray-100",onClick:s=>{let i=s.currentTarget.getBoundingClientRect(),l={id:n,x:s.clientX-i.left,y:s.clientY-i.top};t(n+1),a([...e,l])},children:e.map(e=>(0,s.jsx)(u.P.div,{style:{top:e.y-24,left:e.x-24},className:"absolute w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg",initial:{scale:0},animate:{scale:1},onClick:a=>{a.stopPropagation(),i(e.id)},children:e.id},e.id))})]})}}},e=>{var a=a=>e(e.s=a);e.O(0,[197,888,441,517,358],()=>a(626)),_N_E=e.O()}]);