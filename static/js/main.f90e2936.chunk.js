(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,function(e,a,t){e.exports=t(12)},,,,,function(e,a,t){},function(e,a,t){e.exports=t.p+"static/media/electron.b244f0a5.svg"},function(e,a,t){e.exports=t.p+"static/media/list.038c82e7.svg"},function(e,a,t){e.exports=t.p+"static/media/level up.6950f834.webp"},function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(2),o=t.n(r);t(8);class s extends l.Component{render(){let e=this.props.resumeData;return n.a.createElement(n.a.Fragment,null,n.a.createElement("header",{id:"home"},n.a.createElement("nav",{id:"nav-wrap"},n.a.createElement("ul",{id:"nav",className:"nav"},n.a.createElement("li",{className:"current"},n.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),n.a.createElement("li",null,n.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),n.a.createElement("li",null,n.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),n.a.createElement("li",null,n.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Works")))),n.a.createElement("div",{className:"row banner"},n.a.createElement("div",{className:"banner-text"},n.a.createElement("h1",{className:"responsive-headline"}," I'm ",e.name," \ud83d\udc4b\ud83c\udffe"),n.a.createElement("h3",{style:{color:"#fff",fontFamily:"sans-serif ",fontSize:20}},e.roleDescription),n.a.createElement("hr",null),n.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map(e=>n.a.createElement("li",{key:e.name},n.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},n.a.createElement("i",{className:e.className}))))))),n.a.createElement("p",{className:"scrolldown"},n.a.createElement("a",{className:"smoothscroll",href:"#about"},n.a.createElement("i",{className:"icon-down-circle"})))))}}class i extends l.Component{render(){let e=this.props.resumeData;return n.a.createElement("section",{id:"about"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"three columns"},n.a.createElement("img",{className:"profile-pic",src:"images/profilepic.jpg",alt:"Ahmed Ali"})),n.a.createElement("div",{className:"nine columns main-col"},n.a.createElement("h2",null,"About Me"),n.a.createElement("p",null,e.aboutme),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"columns contact-details"},n.a.createElement("h2",null,"Contact Details"),n.a.createElement("p",{className:"address"},n.a.createElement("span",null,e.name),n.a.createElement("br",null),n.a.createElement("span",null,e.address),n.a.createElement("br",null),n.a.createElement("span",null,e.email)))))))}}class c extends l.Component{render(){let e=this.props.resumeData;return n.a.createElement("section",{id:"resume"},n.a.createElement("div",{className:"row work"},n.a.createElement("div",{className:"three columns header-col"},n.a.createElement("h1",null,n.a.createElement("span",null,"Work"))),n.a.createElement("div",{className:"nine columns main-col"},e.work&&e.work.map(e=>n.a.createElement("div",{className:"row item"},n.a.createElement("div",{className:"twelve columns"},n.a.createElement("h3",null,e.CompanyName),n.a.createElement("h6",null,e.jobTitle),n.a.createElement("p",{className:"info"},n.a.createElement("em",{className:"date"},e.MonthOfStarting," ",e.YearOfStarting," -"," ",e.MonthOfLeaving," ",e.YearOfLeaving),n.a.createElement("br",null),n.a.createElement("span",null,"\u2022")," ",e.specialization,n.a.createElement("br",null),n.a.createElement("span",null,"\u2022")," ",e.specialization2,n.a.createElement("br",null),n.a.createElement("span",null,"\u2022")," ",e.specialization3,n.a.createElement("br",null))))))),n.a.createElement("div",{className:"row skill"},n.a.createElement("div",{className:"three columns header-col"},n.a.createElement("h1",null,n.a.createElement("span",null,"Skills"))),n.a.createElement("div",{style:{marginLeft:"1.2vw"}},n.a.createElement("div",{style:{marginTop:60}},n.a.createElement("h5",null,"Core"),n.a.createElement("img",{alt:"git",src:"https://img.icons8.com/color/96/000000/git.png"}),n.a.createElement("img",{alt:"github",src:"https://img.icons8.com/fluent/96/000000/github.png"}),n.a.createElement("img",{alt:"html5",src:"https://img.icons8.com/color/96/000000/html-5.png"}),n.a.createElement("img",{alt:"css3",src:"https://img.icons8.com/color/96/000000/css3.png"}),n.a.createElement("img",{alt:"javascript",src:"https://img.icons8.com/color/96/000000/javascript.png"}),n.a.createElement("p",{style:{font:"inherit",fontSize:12}},"Git, Github, Html, Css & Javascript")),n.a.createElement("div",null,n.a.createElement("h5",null,"Primary focuses"),n.a.createElement("img",{alt:"react",src:"https://img.icons8.com/plasticine/100/000000/react.png"}),n.a.createElement("img",{alt:"react native",src:"https://img.icons8.com/cute-clipart/100/000000/react-native.png"}),n.a.createElement("img",{alt:"electron",style:{height:80,margin:10},src:"https://upload.wikimedia.org/wikipedia/commons/9/91/Electron_Software_Framework_Logo.svg"}),n.a.createElement("img",{alt:"redux",src:"https://img.icons8.com/color/96/000000/redux.png"}),n.a.createElement("p",{style:{font:"inherit",fontSize:12}},"React, React Native, Electron & redux")),n.a.createElement("div",{style:{marginTop:10}},n.a.createElement("h5",null,"backend & database tech"),n.a.createElement("img",{alt:"node.js",src:"https://img.icons8.com/color/96/000000/nodejs.png"}),n.a.createElement("img",{alt:"mongoDB",src:"https://img.icons8.com/color/96/000000/mongodb.png"}),n.a.createElement("img",{alt:"firebase",src:"https://img.icons8.com/color/96/000000/firebase.png"}),n.a.createElement("img",{alt:"express",style:{height:80,margin:5},src:"https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"}),n.a.createElement("p",{style:{font:"inherit",fontSize:12}},"NodeJs, MongoDB, Google Firebase, Express")),n.a.createElement("div",null,n.a.createElement("h5",null,"Familiar workflow tech"),n.a.createElement("img",{alt:"jira",src:"https://img.icons8.com/color/96/000000/jira.png"}),n.a.createElement("img",{alt:"trello",src:"https://img.icons8.com/color/96/000000/trello.png"}),n.a.createElement("img",{alt:"source tree",src:"https://img.icons8.com/windows/96/000000/sourcetree.png"}),n.a.createElement("img",{alt:"slack",src:"https://img.icons8.com/officel/80/000000/slack.png"}),n.a.createElement("p",{style:{font:"inherit",fontSize:12}},"Jira, Trello, Sourcetree, Slack")),n.a.createElement("div",null,n.a.createElement("h5",null,"Familiar design & prototyping software "),n.a.createElement("img",{alt:"adobe xd",src:"https://img.icons8.com/color/96/000000/adobe-xd.png"}),n.a.createElement("img",{alt:"adobe illustrator",src:"https://img.icons8.com/color/96/000000/adobe-illustrator.png"}),n.a.createElement("img",{alt:"invision",src:"https://img.icons8.com/windows/96/000000/invision.png"}),n.a.createElement("p",{style:{font:"inherit",fontSize:12}},"Adobe Xd, Illustrator, Invision")))))}}class m extends l.Component{render(){let e=this.props.resumeData;return n.a.createElement("section",{id:"portfolio"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"twelve columns collapsed"},n.a.createElement("h1",{style:{color:"black",fontSize:20}},"Check Out Some of My Projects."),n.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},e.portfolio&&e.portfolio.map(e=>n.a.createElement("div",{className:"columns portfolio-item"},n.a.createElement("div",{className:"item-wrap",style:{backgroundColor:"transparent"}},n.a.createElement("a",{href:e.repourl,target:"_blank",rel:"noopener noreferrer"},n.a.createElement("img",{src:"".concat(e.imgurl),className:"item-img",alt:"portfolio item"}),n.a.createElement("div",{className:"overlay"},n.a.createElement("div",{className:"portfolio-item-meta"},n.a.createElement("h5",null,e.name),n.a.createElement("p",null,e.description)))))))))))}}class p extends l.Component{render(){let e=this.props.resumeData;return n.a.createElement("footer",null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"twelve columns"},n.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map(e=>n.a.createElement("li",null,n.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},n.a.createElement("i",{className:e.className})))))),n.a.createElement("div",{id:"go-top"},n.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},n.a.createElement("i",{className:"icon-up-open"})))))}}var d={name:"Ahmed Ali",linkedinId:"Your LinkedIn Id",email:"ahmedali.96@hotmail.com",roleDescription:" Looking for a front-end developer with a specialty in React Js \u269b\ufe0f and a intermediate understanding of back-end technologies \ud83e\uddd9\ud83c\udffe\u200d\u2642\ufe0f, one that could also double as a UI/UX designer \ud83e\udd39\ud83c\udffe\u200d\u2642\ufe0f, or perhaps just an eager and passionate programmer \ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbb. If this sounds like someone you're looking for, look no further!",socialLinks:[{name:"github",url:"https://github.com/AhmedAlihashi",className:"fa fa-github"}],aboutme:"I am a web developer based out of Toronto looking for his next project. My skill set / interests are primarily centered around Javascript, React & React Native. I'd classify myself as a Front-End developer but as my projects show not afraid to jump into the backend. Currently I'm working towards sharpening my skills with regards to developing desktop applications. If you're looking for a developer who will go the distance to get the job done and grow with your team, feel free to contact me.",address:"Toronto, On",work:[{CompanyName:"Your Fuse Inc",jobTitle:"Intern Software Engineer",specialization:"Primarily developed using React, Redux and Google Firebase.",specialization2:"Developed solutions based on the expectations of clients and the guide of senior developers.",specialization3:"Assisted in the integration of client approved design schemes using the design & prototyping tool Invision",MonthOfStarting:"Dec",YearOfStarting:"2019",MonthOfLeaving:"Jun",YearOfLeaving:"2020",Achievements:"Some Achievements"},{CompanyName:"Freelance",jobTitle:"Web Developer",specialization:"Created web sites and apps up to the industry standard for clients.",specialization2:"Used Adobe suite skills to create mock-ups for clients as well as trained them how to use it.",specialization3:"Developed easily readable documentation that a programmer of any level can understand.",MonthOfStarting:"Sept",YearOfStarting:"2018",MonthOfLeaving:"Nov",YearOfLeaving:"2019",Achievements:"Some Achievements"}],skills:[{skillname:"HTML5"},{skillname:"CSS"},{skillname:"JavaScript"},{skillname:"MongoDB"},{skillname:"Express"},{skillname:"React"},{skillname:"Nodejs"},{skillname:"Electron"},{skillname:"Adobe Illustrator / XD"}],portfolio:[{name:"Pokedex",description:"This is an index of all the characters within the popular video game/tv series Pok\xe9mon.",imgurl:"https://media0.giphy.com/media/WytSQL7115G6uPwDwK/giphy.gif?cid=ecf05e47d7bod3x4hh3rz44a9ecq07c1k5v527sppviek7ph&rid=giphy.gif",repourl:"https://github.com/AhmedAlihashi/pokedex"},{name:"Podcast App",description:"This is a fullstack React Native application made for both IOS & Android. The app uses Google Firebase as a database and storage solution.",imgurl:"https://media2.giphy.com/media/Y3eGW1HeYAGh2ztp8d/giphy.gif?cid=ecf05e479fxoxe9b17dyb6su14ylt6gvzxmt6ruvf9vydw92&rid=giphy.gif",repourl:"https://github.com/AhmedAlihashi/Podcast-App"},{name:"React Desktop App",description:"The purpose of the app is to provide a YouTube like experience without opening a browser.",imgurl:"".concat(t(9)),repourl:"https://github.com/AhmedAlihashi/Slang"},{name:"Contact List",description:"This is just a simple showcase of the functionality of Redux within React",imgurl:"".concat(t(10)),repourl:"https://github.com/AhmedAlihashi/contact-list"},{name:"Power Lv",description:"The purpose of this app is to track the fitness progress of a user and compare current progress with friends.",imgurl:"".concat(t(11)),repourl:"https://github.com/AhmedAlihashi/PowerLV"}]};class h extends l.Component{render(){return n.a.createElement("div",{className:"App"},n.a.createElement(s,{resumeData:d}),n.a.createElement(i,{resumeData:d}),n.a.createElement(c,{resumeData:d}),n.a.createElement(m,{resumeData:d}),n.a.createElement(p,{resumeData:d}))}}var u=h;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(u,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()})}],[[3,1,2]]]);
//# sourceMappingURL=main.f90e2936.chunk.js.map