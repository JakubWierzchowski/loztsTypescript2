(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[951],{573:function(e,t,a){Promise.resolve().then(a.bind(a,1678))},1678:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return K}});var i=a(7437),o=a(2265),n=a(118),r=a.n(n),l=a(171),s=a(4046),d=a(4872),c=e=>{let{details:t,title:a,timeDone:o,pathTournament:n,index:c,fetchData:m}=e,{user:u}=(0,s.useUserContext)();async function p(e){try{var t;let a=await fetch("/api/calendar/".concat(n,"/").concat(e),{method:"DELETE"}),i=await a.json();m&&m();let o=null===(t=i.filterPlayer)||void 0===t?void 0:t.find(e=>e);l.toast.success("".concat(i.message," ").concat(o.player),{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})}catch(e){console.error("Wystąpił błąd podczas usuwania artykułu:",e)}}let{ref:y,getAnimationClass:h}=(0,d.Z)("slideIn","slideOut");return(0,i.jsxs)("section",{className:"".concat(r().wrapper," ").concat(h(c||0)),ref:y,children:[(0,i.jsx)("h2",{className:r().tableTitle,children:a}),(0,i.jsxs)("table",{className:r().table,children:[(0,i.jsx)("thead",{className:r().thead,children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{className:r().th,children:(0,i.jsx)("strong",{children:"L.P"})}),(0,i.jsx)("th",{className:r().th,children:(0,i.jsx)("strong",{children:"Zawodnik"})}),(0,i.jsx)("th",{className:r().th,children:(0,i.jsx)("strong",{children:"Klub"})}),(0,i.jsx)("th",{className:r().th,children:(0,i.jsx)("strong",{children:"Dodano"})}),(0,i.jsx)("th",{className:r().th,children:(0,i.jsx)("strong",{children:"Usuń"})})]})}),(0,i.jsx)("tbody",{className:r().tbody,children:null==t?void 0:t.map((e,t)=>(0,i.jsxs)("tr",{className:r().tr,children:[(0,i.jsx)("td",{className:r().td,children:t+1}),(0,i.jsx)("td",{className:r().td,children:e.player}),(0,i.jsxs)("td",{className:r().td,children:[null==e?void 0:e.club," "]}),(0,i.jsxs)("td",{className:r().td,children:[null==e?void 0:e.timeadd," "]}),(0,i.jsx)("td",{className:r().td,children:o?(0,i.jsx)("div",{children:"Czas minął"}):(null==u?void 0:u.email)===e.users?(0,i.jsx)("button",{className:r().deleteButton,onClick:()=>e.id&&p(e.id),children:"Usuń"}):(0,i.jsx)("div",{children:"Brak dostępu"})})]},t))})]})]})},m=JSON.parse('[{"month":"Wrzesień","dataMonth":"2023-10-01","details":[{"title":"I WTK Młodzik\xf3w","link":"IWTKmlodzikow","data":"09.09","place":"Dzierzkowice","categories":"Młodzicy","datamomentInvite":"2023-09-07","datamoment":"2023-09-10","typeofTournaments":[{"title":"WTK/DMW","table":["Wybierz kategorię","Mężczyźni","Kobiety"]}],"players":[]},{"title":"I WTK Junior\xf3w","link":"IWTKjuniorow","data":"09.09","place":"Dzierzkowice","categories":"Juniorzy","datamomentInvite":"2023-09-07","datamoment":"2023-09-10","typeofTournaments":[{"title":"WTK/DMW","table":["Wybierz kategorię","Mężczyźni","Kobiety"]}],"players":[]},{"title":"I WTK Senior\xf3w","link":"IWTKseniorow","data":"10.09","place":"Dzierzkowice","categories":"Seniorzy","datamomentInvite":"2023-09-08","datamoment":"2023-09-11","typeofTournaments":[{"title":"WTK/DMW","table":["Wybierz kategorię","Mężczyźni","Kobiety"]}],"players":[]},{"title":"Drużynowe Uczn. MW Żak\xf3w","link":"druzynoweUcznMWZakow","data":"10.09","place":"Dzierzkowice","categories":"Żacy","datamomentInvite":"2023-09-08","datamoment":"2023-09-11","typeofTournaments":[{"title":"WTK/DMW","table":["Wybierz kategorię","Mężczyźni","Kobiety"]}],"players":[]},{"title":"Drużynowe Uczn. MW Młodzik\xf3w","link":"druzynoweUcznMWMlodzikow","data":"10.09","place":"Dzierzkowice","categories":"Młodzicy","datamomentInvite":"2023-09-08","datamoment":"2023-09-11","typeofTournaments":[{"title":"WTK/DMW","table":["Wybierz kategorię","Mężczyźni","Kobiety"]}],"players":[]},{"title":"I WTK Żak\xf3w","link":"IWTKzakow","data":"17.09","place":"Szczebrzeszyn?","categories":"Żacy","datamomentInvite":"2023-09-15","datamoment":"2023-09-18","typeofTournaments":[{"title":"WTK/DMW","table":["Wybierz kategorię","Mężczyźni","Kobiety"]}],"players":[]},{"title":"I WTK Kadet\xf3w","link":"IWTKKadetow","data":"17.09","place":"Szczebrzeszyn?","categories":"Kadeci","datamomentInvite":"2023-09-15","datamoment":"2023-09-18","typeofTournaments":[{"title":"WTK/DMW","table":["Wybierz kategorię","Mężczyźni","Kobiety"]}],"players":[]},{"title":"1. Grand Prix Polski Senior\xf3w","link":"IGrandPrixPolskiSeniorow","data":"22-24.09","place":"Gliwice","categories":"Seniorzy","datamomentInvite":"","datamoment":"2023-09-25","typeofTournaments":[],"players":[]},{"title":"1. Grand Prix Polski Młodzik\xf3w","link":"IGrandPrixPolskiMlodzikow","data":"22-24.09","place":"Olkusz","categories":"Młodzicy","datamomentInvite":"","datamoment":"2023-09-25","typeofTournaments":[],"players":[]},{"title":"1. Grand Prix Polski Junior\xf3w","link":"IGrandPrixPolskiJuniorow","data":"29.09 - 01.10","place":"Szczawno-Zdr\xf3j","categories":"Juniorzy","datamomentInvite":"","datamoment":"2023-10-02","typeofTournaments":[],"players":[]},{"title":"1. Grand Prix Polski Żak\xf3w","link":"IGrandPrixPolskiZacy","data":"29.09 - 01.10","place":"Zielona G\xf3ra","categories":"Żacy","datamomentInvite":"","datamoment":"2023-10-02","typeofTournaments":[],"players":[]}]},{"month":"Październik","dataMonth":"2023-11-01","details":[{"title":"II, III, IV LM - 1","link":"","data":"01.10","place":"Kluby","categories":"","datamoment":"2023-10-02","players":[]},{"title":"1. Grand Prix Polski Kadet\xf3w","link":"IGrandPrixPolskiKadetow","data":"06-08.10","place":"Krak\xf3w","categories":"Kadeci","datamomentInvite":"","datamoment":"2023-10-09","typeofTournaments":[],"players":[]},{"title":"II, III, IV LM - 2","link":"","data":"08.10","place":"Kluby","categories":"","datamoment":"2023-10-09","players":[],"datamomentInvite":"","typeofTournaments":[]},{"title":"II, III, IV LM - 3","link":"","data":"15.10","place":"Kluby","categories":"","datamoment":"2023-10-16","players":[],"datamomentInvite":"","typeofTournaments":[]},{"title":"II, III, IV LM - 4","link":"","data":"22.10","place":"Kluby","categories":"","datamoment":"2023-10-23","players":[],"datamomentInvite":"","typeofTournaments":[]},{"title":"II LK - 1","link":"","data":"29.10","place":"Kluby","categories":"","datamoment":"2023-10-30","players":[],"datamomentInvite":"","typeofTournaments":[]}]},{"month":"Listopad","dataMonth":"2023-12-01","details":[{"title":"II, III, IV LM - 5","link":"","data":"05.11","place":"Kluby","categories":"","datamoment":"2023-11-06","players":[],"datamomentInvite":"","typeofTournaments":[]},{"title":"II WTK Senior\xf3w","link":"IIWTKSeniorow","data":"11.10","place":"","categories":"Seniorzy","datamomentInvite":"2023-11-09","datamoment":"2023-11-10","typeofTournaments":[{"title":"WTK/DMW","table":["Wybierz kategorię","Mężczyźni","Kobiety"]}],"players":[]},{"title":"II, III, IV LM - 6","link":"","data":"12.11","place":"Kluby","categories":"","datamoment":"2023-11-13","players":[],"datamomentInvite":"","typeofTournaments":[]},{"title":"II WTK Żak\xf3w","link":"IIWTKZakow","data":"18.11","place":"","categories":"Żacy","datamomentInvite":"2023-11-16","datamoment":"2023-11-17","typeofTournaments":[{"title":"WTK/DMW","table":["Wybierz kategorię","Mężczyźni","Kobiety"]}],"players":[]},{"title":"II WTK Kadet\xf3w","link":"IIWTKKadetow","data":"18.11","place":"","categories":"Kadeci","datamomentInvite":"2023-11-16","datamoment":"2023-11-17","typeofTournaments":[{"title":"WTK/DMW","table":["Wybierz kategorię","Mężczyźni","Kobiety"]}],"players":[]},{"title":"II WTK Młodzik\xf3w","link":"IIWTKMlodzikow","data":"19.11","place":"","categories":"Żacy","datamomentInvite":"2023-11-17","datamoment":"2023-11-20","typeofTournaments":[{"title":"WTK/DMW","table":["Wybierz kategorię","Mężczyźni","Kobiety"]}],"players":[]},{"title":"II WTK Junior\xf3w","link":"IIWTKJuniorow","data":"19.11","place":"","categories":"Juniorzy","datamomentInvite":"2023-11-17","datamoment":"2023-11-20","typeofTournaments":[{"title":"WTK/DMW","table":["Wybierz kategorię","Mężczyźni","Kobiety"]}],"players":[]},{"title":"2. Grand Prix Polski Senior\xf3w","link":"IIGrandPrixPolskiSeniorow","data":"24-26.11","place":"Bilcza","categories":"Seniorzy","datamomentInvite":"","datamoment":"2023-11-27","typeofTournaments":[],"players":[]},{"title":"2. Grand Prix Polski Młodzik\xf3w","link":"IIGrandPrixPolskiMlodzikow","data":"24-26.11","place":"Jastrzębie-Zdr\xf3j","categories":"Młodzicy","datamomentInvite":"","datamoment":"2023-11-27","typeofTournaments":[],"players":[]},{"title":"II LK - 2","link":"","data":"26.11","place":"Kluby","categories":"","datamoment":"2023-11-27","players":[],"datamomentInvite":"","typeofTournaments":[]}]},{"month":"Grudzień","dataMonth":"2024-01-01","details":[{"title":"II, III, IV LM - 7","data":"03.12","link":"","place":"Kluby","categories":"","datamoment":"2023-12-04","players":[],"datamomentInvite":"","typeofTournaments":[]},{"title":"2. Grand Prix Polski Kadet\xf3w","link":"IIGrandPrixPolskiKadetow","data":"08-10.12","place":"Zielona G\xf3ra","categories":"Kadeci","datamomentInvite":"","datamoment":"2023-12-11","typeofTournaments":[],"players":[]},{"title":"Mikołajkowy Turniej 2023 Skrzaci","link":"MikolajkowyTurniej2023Skrzatow","data":"09.12","place":"Wola Skromowska","categories":"Skrzaci","datamomentInvite":"2023-12-07","datamoment":"2023-12-10","typeofTournaments":[{"title":"WTK/DMW","table":["Wybierz kategorię","Mężczyźni","Kobiety"]}],"players":[]},{"title":"Mikołajkowy Turniej 2023 Żak\xf3w","link":"MikolajkowyTurniej2023Zakow","data":"09.12","place":"Wola Skromowska","categories":"Żacy","datamomentInvite":"2023-12-07","datamoment":"2023-12-10","typeofTournaments":[{"title":"WTK/DMW","table":["Wybierz kategorię","Mężczyźni","Kobiety"]}],"players":[]},{"title":"II, III, IV LM - 8","link":"","data":"10.12","place":"Kluby","categories":"","datamoment":"2023-12-11","players":[],"datamomentInvite":"","typeofTournaments":[]},{"title":"Grand Prix Polski Junior\xf3w","link":"GrandPrixPolskiJuniorow","data":"15-17.12","place":"Ostr\xf3da","categories":"Juniorzy","datamomentInvite":"","datamoment":"2023-12-18","typeofTournaments":[],"players":[]},{"title":"Grand Prix Polski Żak\xf3w","link":"GrandPrixPolskiZakow","data":"15-17.12","place":"Świdwin","categories":"Żacy","datamomentInvite":"","datamoment":"2023-12-18","typeofTournaments":[],"players":[]}]},{"month":"Styczeń 2024","dataMonth":"2024-02-01","details":[{"title":"II, III, IV LM – 10, II LK – 3","link":"","data":"07.01","place":"Kluby","categories":"","datamoment":"2024-01-08","players":[],"datamomentInvite":"","typeofTournaments":[]},{"title":"II, III, IV LM – 10, II LK – 4","link":"","data":"14.01","place":"Kluby","categories":"","datamoment":"2024-01-15","players":[],"datamomentInvite":"","typeofTournaments":[]}]}]'),u=a(966),p=a.n(u),y=a(1212),h=a.n(y),g=a(2067),I=a.n(g),k=e=>{let{days:t,hours:a,mins:o,seconds:n}=e;return(0,i.jsxs)("section",{className:p().wrapperTimer,children:[(0,i.jsxs)("section",{className:p().wrapperSection,children:[(0,i.jsx)("p",{className:p().time,children:t}),(0,i.jsx)("small",{className:p().timeString,children:"Dni"})]}),(0,i.jsx)("span",{className:p().time,children:":"}),(0,i.jsxs)("section",{className:p().wrapperSection,children:[(0,i.jsx)("p",{className:p().time,children:a}),(0,i.jsx)("small",{className:p().timeString,children:"Godzin"})]}),(0,i.jsx)("span",{className:p().time,children:":"}),(0,i.jsxs)("section",{className:p().wrapperSection,children:[(0,i.jsx)("p",{className:p().time,children:o}),(0,i.jsx)("small",{className:p().timeString,children:"Minut"})]}),(0,i.jsx)("span",{className:p().time,children:":"}),(0,i.jsxs)("section",{className:p().wrapperSection,children:[(0,i.jsx)("p",{className:p().time,children:n}),(0,i.jsx)("small",{className:p().timeString,children:"Sekund"})]})]})},b=e=>{let{setTimeDone:t,settimeToMuch:a,timeToMuch:n,findTournaments:r}=e,[l,s]=(0,o.useState)("0"),[d,c]=(0,o.useState)("0"),[m,u]=(0,o.useState)("0"),[y,h]=(0,o.useState)("0"),g=(0,o.useCallback)(()=>{let e;return e=setInterval(()=>{let i=new Date().getTime();r.length>0?r.forEach(o=>{if(o&&o.datamomentInvite){let n=I()(o.datamomentInvite,"YYYY-MM-DD").valueOf(),r=n-i,l=parseInt((r/864e5).toFixed(0)),d=parseInt((r%864e5/36e5).toFixed(0)),m=parseInt((r%36e5/6e4).toFixed(0)),p=parseInt((r%6e4/1e3).toFixed(0));r<0&&(t(!0),clearInterval(e)),r>6048e5&&a(!0),0===r?window.location.reload():(s(Math.max(l,0)),c(Math.max(d,0)),u(Math.max(m,0)),h(Math.max(p,0)))}}):(t(!0),clearInterval(e))},1e3),()=>clearInterval(e)},[r,t,a]);return(0,o.useEffect)(()=>{g()},[g]),(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("section",{className:p().wrapper,children:[n?(0,i.jsx)("h2",{className:p().clockTitle,children:"Do zawod\xf3w zostało jeszcze zbyt dużo czasu. Wr\xf3ć za"}):(0,i.jsx)("h2",{className:p().clockTitle,children:"Do końca zgłoszeń pozostało: "}),(0,i.jsx)(k,{seconds:y,mins:m,hours:d,days:l})]})})},f=a(2424),x=a(8529),_=a.n(x),w=a(1865),z=a(1314),v=a.n(z),j=e=>{var t,a,n;let{findTournaments:r,handleClose:d,isOpen:c,tournaments:m,fetchData:u}=e,{user:p}=(0,s.useUserContext)(),y=null==p?void 0:p.email,g=(0,w.cI)({defaultValues:{zawodnicy:"",klub:"",kategoria:"Wybierz kategorię"}}),{register:I,handleSubmit:k,formState:b,reset:f}=g,{errors:x,isSubmitSuccessful:z}=b,j=async e=>{try{let t={club:e.klub,player:e.zawodnicy,turnament:m,gender:e.kategoria,users:null==p?void 0:p.email},a=await fetch("/api/calendar",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}),i=await a.json();u(),d(),409===i.status&&l.toast.error("".concat(i.message," - ").concat(i.newPlayer.player),{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),l.toast.success("".concat(i.message," - ").concat(i.player.player),{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})}catch(e){"Error: 500"===e.message&&(console.log("bład"),l.toast.error("Ups.. Coś poszło nie tak",{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}))}};return(0,o.useEffect)(()=>{z&&f({zawodnicy:"",klub:"",kategoria:"Wybierz kategorię"})},[z,f]),(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(_(),{isOpen:c,onRequestClose:d,ariaHideApp:!1,className:h().modalWrapper,children:[(0,i.jsx)("button",{className:h().modalCloseButton,onClick:d,children:"X"}),(0,i.jsx)("section",{className:h().wrapperForm,children:(0,i.jsxs)("form",{className:h().form,onSubmit:k(j,e=>{console.log("Form errors",e)}),noValidate:!0,children:[(0,i.jsxs)("div",{className:"".concat(h().formSection,"  ").concat(v().slideIn),children:[(0,i.jsx)("label",{className:h().label,htmlFor:"zawodnicy",children:"Zawodnicy"}),(0,i.jsx)("input",{defaultValue:"",placeholder:"Zawodnicy",className:h().inputForm,id:"zawodnicy",type:"text",...I("zawodnicy",{required:"Dodaj zawodnika",validate:e=>""!==e||"Niepoprawna wartość"})}),x.zawodnicy?(0,i.jsx)("p",{className:h().error,children:null===(t=x.zawodnicy)||void 0===t?void 0:t.message}):null]}),(0,i.jsxs)("div",{className:"".concat(h().formSection,"  ").concat(v().slideIn),children:[(0,i.jsx)("label",{className:h().label,htmlFor:"klub",children:"Nazwa Klubu"}),(0,i.jsx)("input",{defaultValue:"",placeholder:"Nazwa Klubu",className:h().inputForm,id:"klub",...I("klub",{required:"Wpisz nazwę klubu",validate:e=>""!==e.trim()||"Niepoprawna wartość"})}),x.klub?(0,i.jsx)("p",{className:h().error,children:null===(a=x.klub)||void 0===a?void 0:a.message}):null]}),(0,i.jsxs)("div",{className:"".concat(h().formSection,"  ").concat(v().slideOut),children:[(0,i.jsx)("label",{className:h().label,htmlFor:"kategoria",children:"Kategoria"}),(0,i.jsx)("select",{className:"".concat(h().selectCategory," ").concat(v().slideIn),defaultValue:"Wybierz kategorię",id:"kategoria",...I("kategoria",{required:"Wybierz kategorię",validate:e=>"Wybierz kategorię"!==e||"Wybierz kategorię!"}),children:null==r?void 0:r.map(e=>{var t;return null==e?void 0:null===(t=e.typeofTournaments)||void 0===t?void 0:t.map(e=>e.table.map((e,t)=>(0,i.jsx)("option",{value:e,children:e},t)))})}),x.kategoria?(0,i.jsx)("p",{className:h().error,children:null===(n=x.kategoria)||void 0===n?void 0:n.message}):null]}),(0,i.jsxs)("div",{className:"".concat(h().formSection,"  ").concat(v().slideOut),children:[(0,i.jsx)("label",{className:h().label,htmlFor:"email",children:"Użytkownik"}),(0,i.jsx)("input",{disabled:!0,defaultValue:y,className:h().inputForm,id:"email"})]}),(0,i.jsxs)("div",{className:"".concat(h().formSection,"  ").concat(v().slideIn),children:[(0,i.jsx)("label",{className:h().label,htmlFor:"turniej",children:"Turniej"}),(0,i.jsx)("input",{disabled:!0,defaultValue:m,placeholder:"Turniej",className:h().inputForm,id:"turniej"})]}),(0,i.jsx)("button",{type:"submit",className:"".concat(h().sendButton,"  ").concat(v().slideIn),children:"Wyślij"})]})})]})})},T=function(e){let{findTournaments:t,tournaments:a,timeDone:n,setTimeDone:r,fetchData:l}=e,{isOpen:d,handleOpenModal:c,handleCloseModal:m}=(0,f.Z)(),[u,y]=(0,o.useState)(!1),{user:g}=(0,s.useUserContext)();return(0,i.jsx)(i.Fragment,{children:n?(0,i.jsx)("h2",{className:p().clockTitle,children:"Czas zgłoszeń minął!"}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(b,{findTournaments:t,setTimeDone:r,settimeToMuch:y,timeToMuch:u}),u?null:(0,i.jsx)(i.Fragment,{children:(null==g?void 0:g.email)?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("button",{onClick:c,className:h().modalButton,children:"Dodaj zawodnika"}),(0,i.jsx)(j,{findTournaments:t,tournaments:a,isOpen:d,handleClose:m,fetchData:l})]}):null})]})})};function K(e){var t;let{params:a}=e,n=a.tournamentsId,[l,s]=(0,o.useState)(!1),u=m.map(e=>e.details.find(e=>e.link===n)),[p,y]=(0,o.useState)(u);async function h(){try{let e=await fetch("/api/calendar/".concat(n)),t=await e.json();y(t)}catch(e){console.error("Wystąpił błąd podczas pobierania danych:",e)}}(0,o.useEffect)(()=>{h()},[]);let g=p.filter(e=>void 0!==e),{ref:I,getShowAnimationClass:k}=(0,d.Z)("showAnimationDelay",""),b=p.map(e=>null==e?void 0:e.title);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:"".concat(r().titleClockAnimation," ").concat(k()),ref:I,children:[(0,i.jsx)("h1",{className:r().tableTitle,children:b}),(0,i.jsx)(T,{findTournaments:g,tournaments:n,timeDone:l,setTimeDone:s,fetchData:h})]}),p.map(e=>{var a;return null==e?void 0:null===(a=e.typeofTournaments)||void 0===a?void 0:a.map(a=>a.table.map((a,o)=>"Wybierz kategorię"===a?null:(0,i.jsx)(c,{fetchData:h,pathTournament:n,index:o,title:a,timeDone:l,details:(null!==(t=null==e?void 0:e.players)&&void 0!==t?t:[]).filter(e=>e.gender===a)},a)))})]})}},4046:function(e,t,a){"use strict";a.r(t),a.d(t,{UserContext:function(){return d},UserContextProvider:function(){return m},useUserContext:function(){return c}});var i=a(7437),o=a(2265),n=a(171),r=a(2424),l=a(3085),s=a(1402);let d=(0,o.createContext)(void 0),c=()=>{let e=(0,o.useContext)(d);if(!e)throw Error("useUserContext must be used within a UserContextProvider");return e},m=e=>{let{children:t}=e,[a,c]=(0,o.useState)(null),[m,u]=(0,o.useState)(!1),[p,y]=(0,o.useState)(""),{handleCloseModal:h}=(0,r.Z)();(0,o.useEffect)(()=>{u(!0);let e=(0,l.Aj)(s.I8,e=>{e?c(e):c(null),y(""),u(!1)});return e},[]);let g=async(e,t)=>{u(!0);try{let a=await (0,l.Nr)(s.I8,e);if(0===a.length){console.log(a),n.toast.error("Konto z takim adresem email nie zostało zarejestrowane",{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),u(!1);return}await (0,l.e5)(s.I8,e,t),n.toast.success("Zalogowano pomyślnie ".concat(e,"!"),{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),console.log(e)}catch(e){"auth/wrong-password"===e.code?n.toast.error("Błędne hasło!",{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}):n.toast.error("".concat(e.code),{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})}finally{u(!1)}},I=async e=>{try{let t=await (0,l.Nr)(s.I8,e);if(0===t.length){n.toast.error("Konto z takim adresem email nie zostało zarejestrowane",{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),u(!1);return}await (0,l.LS)(s.I8,e),n.toast.success("Link do resetowania hasła został wysłany na Tw\xf3j adres email",{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})}catch(e){console.error("Wystąpił błąd podczas resetowania hasła:",e)}};return(0,i.jsx)(d.Provider,{value:{user:a,loading:m,error:p,signInUser:g,registerUser:(e,t)=>{u(!0),(0,l.Xb)(s.I8,e,t).then(()=>{let e=s.I8.currentUser;return e?(0,l.ck)(e,{}):null}).then(e=>console.log(e)).catch(e=>y(e.message)).finally(()=>u(!1))},logoutUser:()=>{(0,l.w7)(s.I8).then(()=>n.toast.success("Wylogowano pomyślnie!",{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})).then(h).catch(()=>n.toast.error("Ups.. Coś poszło nie tak. Spr\xf3buj jeszcze raz.",{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}))},forgotPassword:I},children:t})}},1402:function(e,t,a){"use strict";a.d(t,{I8:function(){return c},db:function(){return d},tO:function(){return m}});var i=a(994),o=a(4086),n=a(9584),r=a(3085);let l={apiKey:"AIzaSyBWh-CnTSM3DbbQxUcx0lPqGLAHyyfPv_U",authDomain:"lozts-official-e6d38.firebaseapp.com",projectId:"lozts-official-e6d38",storageBucket:"lozts-official-e6d38.appspot.com",messagingSenderId:"1010072225522",appId:"1:1010072225522:web:258e1d8308f7f96288f26b",measurementId:"G-CXKGC9SK5Y"},s=(0,i.ZF)(l);t.ZP=(0,o.ad)();let d=(0,o.ad)((0,i.ZF)(l)),c=(0,r.v0)(s),m=(0,n.cF)(s)},4872:function(e,t,a){"use strict";a.d(t,{Z:function(){return m}});var i=a(2265),o=Object.defineProperty,n=new Map,r=new WeakMap,l=0,s=void 0;i.Component;var d=a(1314),c=a.n(d),m=(e,t)=>{let{ref:a,inView:o}=function({threshold:e,delay:t,trackVisibility:a,rootMargin:o,root:d,triggerOnce:c,skip:m,initialInView:u,fallbackInView:p,onChange:y}={}){var h;let[g,I]=i.useState(null),k=i.useRef(),[b,f]=i.useState({inView:!!u,entry:void 0});k.current=y,i.useEffect(()=>{let i;if(!m&&g)return i=function(e,t,a={},i=s){if(void 0===window.IntersectionObserver&&void 0!==i){let o=e.getBoundingClientRect();return t(i,{isIntersecting:i,target:e,intersectionRatio:"number"==typeof a.threshold?a.threshold:0,time:0,boundingClientRect:o,intersectionRect:o,rootBounds:o}),()=>{}}let{id:o,observer:d,elements:c}=function(e){let t=Object.keys(e).sort().filter(t=>void 0!==e[t]).map(t=>{var a;return`${t}_${"root"===t?(a=e.root)?(r.has(a)||(l+=1,r.set(a,l.toString())),r.get(a)):"0":e[t]}`}).toString(),a=n.get(t);if(!a){let i;let o=new Map,r=new IntersectionObserver(t=>{t.forEach(t=>{var a;let n=t.isIntersecting&&i.some(e=>t.intersectionRatio>=e);e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=n),null==(a=o.get(t.target))||a.forEach(e=>{e(n,t)})})},e);i=r.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),a={id:t,observer:r,elements:o},n.set(t,a)}return a}(a),m=c.get(e)||[];return c.has(e)||c.set(e,m),m.push(t),d.observe(e),function(){m.splice(m.indexOf(t),1),0===m.length&&(c.delete(e),d.unobserve(e)),0===c.size&&(d.disconnect(),n.delete(o))}}(g,(e,t)=>{f({inView:e,entry:t}),k.current&&k.current(e,t),t.isIntersecting&&c&&i&&(i(),i=void 0)},{root:d,rootMargin:o,threshold:e,trackVisibility:a,delay:t},p),()=>{i&&i()}},[Array.isArray(e)?e.toString():e,g,d,o,c,m,a,p,t]);let x=null==(h=b.entry)?void 0:h.target,_=i.useRef();g||!x||c||m||_.current===x||(_.current=x,f({inView:!!u,entry:void 0}));let w=[I,b.inView,b.entry];return w.ref=w[0],w.inView=w[1],w.entry=w[2],w}({triggerOnce:!0,threshold:.2});return{ref:a,getAnimationClass:a=>o?a%2==0?c()[e]:c()[t]:"",getShowAnimationClass:()=>o?c()[e]:""}}},2424:function(e,t,a){"use strict";var i=a(2265);t.Z=function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],[t,a]=(0,i.useState)(e);return{isOpen:t,handleOpenModal:()=>a(!0),handleCloseModal:()=>a(!1)}}},1212:function(e){e.exports={modalWrapper:"addplayers_modalWrapper__k0cWG",modalButton:"addplayers_modalButton__oVb8b",modalCloseButton:"addplayers_modalCloseButton__ZctAx",wrapperForm:"addplayers_wrapperForm__fZVUd",form:"addplayers_form__ptKeJ",formSection:"addplayers_formSection__ePj0E",label:"addplayers_label__GXQyX",inputForm:"addplayers_inputForm__dn5Cn",selectCategory:"addplayers_selectCategory__IKwRF",sendButton:"addplayers_sendButton__RGbN6",error:"addplayers_error__3lCtX"}},966:function(e){e.exports={clockTitle:"tournamentsTable_clockTitle__jJaqj",wrapper:"tournamentsTable_wrapper__vwYW2",wrapperTimer:"tournamentsTable_wrapperTimer__AoCGW",wrapperSection:"tournamentsTable_wrapperSection__zKxje",time:"tournamentsTable_time__jNzoe",timeString:"tournamentsTable_timeString__UNI8K"}},118:function(e){e.exports={wrapper:"table_wrapper__T2f_b",titleClockAnimation:"table_titleClockAnimation__kGZfK",wrapperSection:"table_wrapperSection__XN7TV",tableTitle:"table_tableTitle__4hfly",table:"table_table__kiO1d",thead:"table_thead__ZkPxK",th:"table_th__rbLaz",tr:"table_tr__zVCDH",td:"table_td__Jbf4v",links:"table_links__qb9o2",deleteButton:"table_deleteButton__WwxGd",categories:"table_categories__VGshB",spanCategories:"table_spanCategories__1_jiT",categoryList:"table_categoryList__MlXts",Żacy:"table__acy__MK9P8",skrzaci:"table_skrzaci__FUx62",Młodzicy_Młodsi:"table_M_odzicy_M_odsi__rCn2R",Młodzicy:"table_M_odzicy__I7PdG",Kadeci:"table_Kadeci__oCWa7",Juniorzy:"table_Juniorzy__RweDA",Młodzieżowcy:"table_M_odzie_owcy__YE_AP",Seniorzy:"table_Seniorzy__A1zf3",Liga:"table_Liga__7qwNH"}},1314:function(e){e.exports={slideIn:"getAnimationStyles_slideIn__WjWHg",slideInAnimationRight:"getAnimationStyles_slideInAnimationRight__hZBN4",slideOut:"getAnimationStyles_slideOut__Wg2L9",slideInAnimationLeft:"getAnimationStyles_slideInAnimationLeft__NxbYP",slideInTop:"getAnimationStyles_slideInTop__KEZhb",slideInAnimationTop:"getAnimationStyles_slideInAnimationTop__bViRP",slideInBottom:"getAnimationStyles_slideInBottom__1BFwT",slideInAnimationBottom:"getAnimationStyles_slideInAnimationBottom__SswQB",showAnimationDelay:"getAnimationStyles_showAnimationDelay__x7yGm",showItems:"getAnimationStyles_showItems___yUM4"}}},function(e){e.O(0,[358,315,990,994,617,865,971,596,744],function(){return e(e.s=573)}),_N_E=e.O()}]);