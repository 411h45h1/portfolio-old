(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,function(e,a,t){e.exports=t(14)},,,,,function(e,a,t){},function(e,a,t){e.exports=t.p+"static/media/squirtleStep.c1abed3b.gif"},function(e,a,t){e.exports=t.p+"static/media/mic.2970de30.png"},function(e,a,t){e.exports=t.p+"static/media/electron.b244f0a5.svg"},function(e,a,t){e.exports=t.p+"static/media/list.038c82e7.svg"},function(e,a,t){e.exports=t.p+"static/media/level up.6950f834.webp"},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(2),o=t.n(r);t(8);class s extends n.Component{render(){let e=this.props.resumeData;return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Works")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"}," I'm ",e.name," \ud83d\udc4b\ud83c\udffe"),l.a.createElement("h3",{style:{color:"#fff",fontFamily:"sans-serif ",fontSize:20}},e.roleDescription),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map(e=>l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:e.className}))))))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"})))))}}class i extends n.Component{render(){let e=this.props.resumeData;return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:"images/profilepic.jpg",alt:"Ahmed Ali"})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,e.aboutme),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns contact-details"},l.a.createElement("h2",null,"Contact Details"),l.a.createElement("p",{className:"address"},l.a.createElement("span",null,e.name),l.a.createElement("br",null),l.a.createElement("span",null,e.address),l.a.createElement("br",null),l.a.createElement("span",null,e.email)))))))}}class c extends n.Component{render(){let e=this.props.resumeData;return l.a.createElement("section",{id:"resume"},l.a.createElement("div",{className:"row work"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Work"))),l.a.createElement("div",{className:"nine columns main-col"},e.work&&e.work.map(e=>l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.CompanyName),l.a.createElement("h6",null,e.jobTitle),l.a.createElement("p",{className:"info"},l.a.createElement("em",{className:"date"},e.MonthOfStarting," ",e.YearOfStarting," -"," ",e.MonthOfLeaving," ",e.YearOfLeaving),l.a.createElement("br",null),l.a.createElement("span",null,"\u2022")," ",e.specialization,l.a.createElement("br",null),l.a.createElement("span",null,"\u2022")," ",e.specialization2,l.a.createElement("br",null),l.a.createElement("span",null,"\u2022")," ",e.specialization3,l.a.createElement("br",null))))))),l.a.createElement("div",{className:"row skill"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Skills"))),l.a.createElement("div",{style:{marginLeft:"1.2vw"}},l.a.createElement("div",{style:{marginTop:60}},l.a.createElement("h5",null,"Core"),l.a.createElement("img",{alt:"git",src:"https://img.icons8.com/color/96/000000/git.png"}),l.a.createElement("img",{alt:"github",src:"https://img.icons8.com/fluent/96/000000/github.png"}),l.a.createElement("img",{alt:"html5",src:"https://img.icons8.com/color/96/000000/html-5.png"}),l.a.createElement("img",{alt:"css3",src:"https://img.icons8.com/color/96/000000/css3.png"}),l.a.createElement("img",{alt:"javascript",src:"https://img.icons8.com/color/96/000000/javascript.png"}),l.a.createElement("p",{style:{font:"inherit",fontSize:12}},"Git, Github, Html, Css & Javascript")),l.a.createElement("div",null,l.a.createElement("h5",null,"Primary focuses"),l.a.createElement("img",{alt:"react",src:"https://img.icons8.com/plasticine/100/000000/react.png"}),l.a.createElement("img",{alt:"react native",src:"https://img.icons8.com/cute-clipart/100/000000/react-native.png"}),l.a.createElement("img",{alt:"electron",style:{height:80,margin:10},src:"https://upload.wikimedia.org/wikipedia/commons/9/91/Electron_Software_Framework_Logo.svg"}),l.a.createElement("img",{alt:"redux",src:"https://img.icons8.com/color/96/000000/redux.png"}),l.a.createElement("p",{style:{font:"inherit",fontSize:12}},"React, React Native, Electron & redux")),l.a.createElement("div",{style:{marginTop:10}},l.a.createElement("h5",null,"backend & database tech"),l.a.createElement("img",{alt:"node.js",src:"https://img.icons8.com/color/96/000000/nodejs.png"}),l.a.createElement("img",{alt:"mongoDB",src:"https://img.icons8.com/color/96/000000/mongodb.png"}),l.a.createElement("img",{alt:"firebase",src:"https://img.icons8.com/color/96/000000/firebase.png"}),l.a.createElement("img",{alt:"express",style:{height:80,margin:5},src:"https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"}),l.a.createElement("p",{style:{font:"inherit",fontSize:12}},"NodeJs, MongoDB, Google Firebase, Express")),l.a.createElement("div",null,l.a.createElement("h5",null,"Familiar workflow tech"),l.a.createElement("img",{alt:"jira",src:"https://img.icons8.com/color/96/000000/jira.png"}),l.a.createElement("img",{alt:"trello",src:"https://img.icons8.com/color/96/000000/trello.png"}),l.a.createElement("img",{alt:"source tree",src:"https://img.icons8.com/windows/96/000000/sourcetree.png"}),l.a.createElement("img",{alt:"slack",src:"https://img.icons8.com/officel/80/000000/slack.png"}),l.a.createElement("p",{style:{font:"inherit",fontSize:12}},"Jira, Trello, Sourcetree, Slack")),l.a.createElement("div",null,l.a.createElement("h5",null,"Familiar design & prototyping software "),l.a.createElement("img",{alt:"adobe xd",src:"https://img.icons8.com/color/96/000000/adobe-xd.png"}),l.a.createElement("img",{alt:"adobe illustrator",src:"https://img.icons8.com/color/96/000000/adobe-illustrator.png"}),l.a.createElement("img",{alt:"invision",src:"https://img.icons8.com/windows/96/000000/invision.png"}),l.a.createElement("p",{style:{font:"inherit",fontSize:12}},"Adobe Xd, Illustrator, Invision")))))}}class m extends n.Component{render(){let e=this.props.resumeData;return l.a.createElement("section",{id:"portfolio"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns collapsed"},l.a.createElement("h1",null,"Check Out Some of My Projects."),l.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},e.portfolio&&e.portfolio.map(e=>l.a.createElement("div",{className:"columns portfolio-item"},l.a.createElement("div",{className:"item-wrap"},l.a.createElement("a",{href:e.repourl,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:"".concat(e.imgurl),className:"item-img",alt:"portfolio item"}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"portfolio-item-meta"},l.a.createElement("h5",null,e.name),l.a.createElement("p",null,e.description)))))))))))}}class p extends n.Component{render(){let e=this.props.resumeData;return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map(e=>l.a.createElement("li",null,l.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:e.className})))))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}var d={name:"Ahmed Ali",linkedinId:"Your LinkedIn Id",email:"ahmedali.96@hotmail.com",roleDescription:" Looking for a front-end developer with a specialty in React Js \u269b\ufe0f and a intermediate understanding of back-end technologies \ud83e\uddd9\ud83c\udffe\u200d\u2642\ufe0f, one that could also double as a UI/UX designer \ud83e\udd39\ud83c\udffe\u200d\u2642\ufe0f, or perhaps just an eager and passionate programmer \ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbb. If this sounds like someone you're looking for, look no further!",socialLinks:[{name:"github",url:"https://github.com/AhmedAlihashi",className:"fa fa-github"}],aboutme:"I am a web developer based out of Toronto looking for his next project. My skill set / interests are primarily centered around Javascript, React & React Native. I'd classify myself as a Front-End developer but as my projects show not afraid to jump into the backend. Currently I'm working towards sharpening my skills with regards to developing desktop applications. If you're looking for a developer who will go the distance to get the job done and grow with your team, feel free to contact me.",address:"Toronto, On",work:[{CompanyName:"Your Fuse Inc",jobTitle:"Intern Software Engineer",specialization:"Primarily developed using React, Redux and Google Firebase.",specialization2:"Developed solutions based on the expectations of clients and the guide of senior developers.",specialization3:"Assisted in the integration of client approved design schemes using the design & prototyping tool Invision",MonthOfStarting:"Dec",YearOfStarting:"2019",MonthOfLeaving:"Jun",YearOfLeaving:"2020",Achievements:"Some Achievements"},{CompanyName:"Freelance",jobTitle:"Web Developer",specialization:"Created web sites and apps up to the industry standard for clients.",specialization2:"Used Adobe suite skills to create mock-ups for clients as well as trained them how to use it.",specialization3:"Developed easily readable documentation that a programmer of any level can understand.",MonthOfStarting:"Sept",YearOfStarting:"2018",MonthOfLeaving:"Nov",YearOfLeaving:"2019",Achievements:"Some Achievements"}],skills:[{skillname:"HTML5"},{skillname:"CSS"},{skillname:"JavaScript"},{skillname:"MongoDB"},{skillname:"Express"},{skillname:"React"},{skillname:"Nodejs"},{skillname:"Electron"},{skillname:"Adobe Illustrator / XD"}],portfolio:[{name:"Pokedex",description:"This is an index of all the characters within the popular video game/tv series Pok\xe9mon.",imgurl:"".concat(t(9)),repourl:"https://github.com/AhmedAlihashi/pokedex"},{name:"Podcast App",description:"This is a fullstack React Native application made for both IOS & Android. The app uses Google Firebase as a database and storage solution.",imgurl:"".concat(t(10)),repourl:"https://github.com/AhmedAlihashi/Podcast-App"},{name:"React Desktop App",description:"The purpose of the app is to provide a YouTube like experience without opening a browser.",imgurl:"".concat(t(11)),repourl:"https://github.com/AhmedAlihashi/Slang"},{name:"Contact List",description:"This is just a simple showcase of the functionality of Redux within React",imgurl:"".concat(t(12)),repourl:"https://github.com/AhmedAlihashi/contact-list"},{name:"Power Lv",description:"The purpose of this app is to track the fitness progress of a user and compare current progress with friends.",imgurl:"".concat(t(13)),repourl:"https://github.com/AhmedAlihashi/PowerLV"}]};class h extends n.Component{render(){return l.a.createElement("div",{className:"App"},l.a.createElement(s,{resumeData:d}),l.a.createElement(i,{resumeData:d}),l.a.createElement(c,{resumeData:d}),l.a.createElement(m,{resumeData:d}),l.a.createElement(p,{resumeData:d}))}}var u=h;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(u,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()})}],[[3,1,2]]]);
//# sourceMappingURL=main.d20504c2.chunk.js.map