(this["webpackJsonpphasmophobia-cheatsheet"]=this["webpackJsonpphasmophobia-cheatsheet"]||[]).push([[0],{40:function(e,t,a){e.exports=a.p+"static/media/ghost.c97139a7.svg"},48:function(e,t,a){e.exports=a(62)},53:function(e,t,a){},55:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(21),i=a.n(r),s=a(15),c=(a(53),a(24)),l=a(26),h=a(8),d=a(10),u=a(11),p=a(18),m=a(14),g=a(13),y=a(5),v=(a(54),a(55),a(22)),f=a(20),w=a(39),b=a(64),E=a(65),k=a(66),x=a(67),A=function(e){Object(m.a)(a,e);var t=Object(g.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.props.data.primaryevidence.map((function(t,a){var n=o.a.createElement(w.a,{className:"evidence-header"+(e.props.remainingEvidence[t]?"":" grey")},t),r=e.props.ghostNames.map((function(a){var n=" grey";return e.props.ignoredGhosts[a]||0!==e.props.selectedEvidenceAmount&&!e.props.selectedGhosts[a]||(n=""),o.a.createElement(w.a,{className:"ghost-evidence"+n,key:"col-"+a+"-"+t},e.props.ghostHasEvidence[a][t]?"X":"")})),i="evidence-row";return e.props.selectedEvidence[t]?i+=" green-background":e.props.ignoredEvidence[t]?i+=" red-background":a%2===0&&(i+=" darkgrey-background"),o.a.createElement(b.a,{className:i,onClick:function(a){return e.props.onEvidenceClick(a,t)},onContextMenu:function(a){return e.props.onEvidenceClick(a,t)},key:"row-"+t},n,r)})),a=0,n=null;(this.props.selectedEvidenceAmount>1||this.props.selectedSecondaryEvidenceAmount>0||this.props.showAllSecondaryEvidence)&&(n=this.props.data.secondaryevidence.map((function(t){var n,r=!1,i=Object(h.a)(e.props.ghostNames);try{for(i.s();!(n=i.n()).done;){var s=n.value;if(e.props.selectedGhosts[s]&&e.props.ghostHasEvidence[s][t]){r=!0;break}}}catch(u){i.e(u)}finally{i.f()}if(r||e.props.ignoredEvidence[t]||e.props.selectedEvidence[t]||e.props.showAllSecondaryEvidence){var c=o.a.createElement(w.a,{className:"evidence-header"+(e.props.remainingEvidence[t]?"":" grey"),key:"header-"+t},t),l=e.props.ghostNames.map((function(a){return o.a.createElement(w.a,{className:"ghost-evidence"+(0===e.props.selectedEvidenceAmount||e.props.selectedGhosts[a]?"":" grey"),key:"col-"+a+"-"+t},e.props.ghostHasEvidence[a][t]?"X":"")})),d="evidence-row";return e.props.selectedEvidence[t]?d+=" green-background":e.props.ignoredEvidence[t]?d+=" red-background":a%2===0&&(d+=" darkgrey-background"),a++,o.a.createElement(b.a,{className:d,onClick:function(a){return e.props.onEvidenceClick(a,t)},onContextMenu:function(a){return e.props.onEvidenceClick(a,t)},key:"row-"+t},c,l)}return null})));var r=this.props.ghostNames.map((function(t,a){var n=" grey";return e.props.ignoredGhosts[t]||0!==e.props.selectedEvidenceAmount&&!e.props.selectedGhosts[t]||(n=""),1===e.props.selectedGhostAmount&&e.props.selectedGhosts[t]&&(n=" green"),o.a.createElement(w.a,{className:"ghost-header"+n,key:"header-"+t},o.a.createElement("div",{className:"rotated45"},t))}));return o.a.createElement("div",{style:{display:"inline-block",width:"100%",height:"100%"}},o.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",margin:"25px 0px 15px 0px"}},o.a.createElement(E.a,{style:{padding:"0",margin:"20px",marginTop:"0px",maxWidth:"100000px"}},o.a.createElement(b.a,null,o.a.createElement(w.a,{style:{textAlign:"center"}},o.a.createElement("b",null,"Leftclick: Select/Unselect Evidence.",o.a.createElement("br",null),"Rightclick: Ignore/Unignore Evidence."))),o.a.createElement(b.a,null,o.a.createElement(w.a,{className:"evidence-header"},o.a.createElement(k.a,{variant:"danger",onClick:function(){return e.props.resetSelected()}},"Unselect All Evidence"))),o.a.createElement(b.a,{style:{width:"100%"}},o.a.createElement(w.a,{className:"evidence-header"},"EVIDENCE"),r),t,o.a.createElement(x.a.Check,{id:"toggleSecondaryEvidence",draggable:!1,type:"checkbox",custom:"true",label:"Always show all Secondary Evidence",checked:this.props.showAllSecondaryEvidence,style:{margin:"15px"},onChange:function(t){return e.props.toggleSetting("showAllSecondaryEvidence")}}),null!==n&&o.a.createElement(b.a,{style:{width:"100%",marginTop:"25px"}},o.a.createElement(w.a,{className:"evidence-header"},"SECONDARY EVIDENCE")),n)))}}]),a}(n.Component),S=function(e){Object(m.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={width:window.innerWidth,height:window.innerHeight},n.updateWindowDimensions=n.updateWindowDimensions.bind(Object(p.a)(n)),n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"updateWindowDimensions",value:function(){this.setState({width:window.innerWidth,height:window.innerHeight})}},{key:"render",value:function(){var e=this,t={marginTop:"5px",marginLeft:"5px"},a=function(e,a){return a<e.length?o.a.createElement(w.a,{style:t,key:"voiceline-"+e[a]},e[a]):o.a.createElement(w.a,null)},n=function(t){return o.a.createElement(b.a,{key:"voicelines-row-"+t},a(e.props.data.voicelines.general,t),a(e.props.data.voicelines.ouija,t),a(e.props.data.voicelines.spiritbox,t),a(e.props.data.voicelines.attacktrigger,t))};if(this.state.width>1e3){for(var r=[],i=0,s=Math.max(this.props.data.voicelines.general.length,this.props.data.voicelines.ouija.length,this.props.data.voicelines.spiritbox.length,this.props.data.voicelines.attacktrigger.length);i<s;)r.push(n(i++));var c=["General Questions","Ouija Board Questions","Spirit Box Questions","Anger and Attack Trigger Words"].map((function(e,t){return o.a.createElement(w.a,{key:"header-"+e},o.a.createElement("h3",null,e))}));return o.a.createElement("div",{style:{display:"inline-block",width:"100%",height:"100%"}},o.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",margin:"25px 0px 15px 0px"}},o.a.createElement(E.a,{style:{padding:"0",margin:"20px",maxWidth:"90%"}},o.a.createElement(b.a,{style:{width:"100%"}},c),r)))}var l=[],h={general:"General Questions",ouija:"Ouija Board Questions",spiritbox:"Spirit Box Questions",attacktrigger:"Anger and Attack Trigger Words"};for(var d in this.props.data.voicelines){console.log(d);var u=[];u.push(o.a.createElement(w.a,{key:"header-"+h[d],style:{marginTop:"35px"}},o.a.createElement("h3",null,h[d])));for(var p=0;p<this.props.data.voicelines[d].length;p++)u.push(a(this.props.data.voicelines[d],p)),p++;l.push(u)}return o.a.createElement("div",{style:{display:"inline-block",width:"100%",height:"100%"}},o.a.createElement("div",{style:{display:"flex",margin:"25px 0px 15px 0px"}},o.a.createElement(E.a,{style:{marginLeft:"20px"}},l)))}}]),a}(n.Component),j=function(e){Object(m.a)(a,e);var t=Object(g.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{style:{display:"inline-block",width:"100%",height:"100%"}},o.a.createElement("div",{style:{margin:"auto",width:"600px",backgroundColor:"#4e5d6c",borderRadius:"5px",textAlign:"justify",marginTop:"100px",boxShadow:"2px 2px 5px #000000"}},o.a.createElement("div",{className:"fadeIn",style:{margin:"5px",padding:"30px"}},o.a.createElement("h2",{style:{textAlign:"center"}},"About Phasmophobia CheatSheet"),o.a.createElement("br",null),o.a.createElement("p",null,"Phasmophobia CheatSheet provides an interactive 2D grid overview about all ghost types and their evidence. Add evidence to rule out ghosts and narrow down your search. If you set your game to Borderless Fullscreen window mode, you can quickly Alt+TAB in and out of your game."),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("p",null,"Phasmophobia CheatSheet isn\u2019t endorsed by Kinetic Games and doesn\u2019t reflect the views or opinions of Kinetic Games or anyone officially involved in producing or managing Phasmophobia."))))}}]),a}(n.Component),O=function(e){Object(m.a)(a,e);var t=Object(g.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{style:{display:"inline-block",width:"100%",height:"100%"}},o.a.createElement("div",{style:{margin:"auto",width:"600px",backgroundColor:"#4e5d6c",borderRadius:"5px",textAlign:"justify",marginTop:"100px",boxShadow:"2px 2px 5px #000000"}},o.a.createElement("div",{className:"fadeIn",style:{margin:"5px",padding:"30px"}},o.a.createElement("h2",{style:{textAlign:"center"}},"Contact"),o.a.createElement("br",null),o.a.createElement("p",null,"Hi, I am unobtanium. I created this project in my freetime. You can find the project repository with the source code on my GitHub page ",o.a.createElement("a",{href:"https://github.com/un0btanium/phasmophobia-cheatsheet"},"here"),"."),o.a.createElement("p",null,"If you want to send me some feedback, feel free to write me an ",o.a.createElement("a",{href:"mailto:unobtaniumlol@gmail.de?subject=Phasmophobia-Cheatsheet%20Feedback"},"eMail"),"."))))}}]),a}(n.Component),W={primaryevidence:["EMF Level 5","Fingerprints","Freezing Temperature","Ghost Orbs","Ghost Writing","Spirit Box"],secondaryevidence:["objects moved at great speeds","more active when people are nearby","smudge stick stops attacks for a long time","flying, no footprints","toxic reaction to salt","travelling through walls","looking at the ghost drops sanity considerably","taking a photo makes the ghost temporarily disappear","summoned by a Ouija Board","possesses the living","throws multiple objects at once","targets and hunts one person at a time","scared off easily by the Crucifix","territorial ghost that attacks when threatened","travels fast when victim is far away","turning off the locations power source slows down ghost movement","most powerful in the dark","increased chance of an attack in the dark","lower chance of an attack when lights are on","travels at significantly high speeds when hunting","hiding slows down the ghost significantly","shy ghost with no activity/hunting when multiple people are nearby","attacks often and without reason","sanity is not lowered when asking successful Ouija Board questions","reduces sanity more quickly","smudging the room will stop it from wandering around for a long time","attracted to human voices","haunts family homes","talking near ghost increases chance of attack","while hunting only hears voices closeby","rare ghost, found in hot climates","attack often during cold weather","moves faster at lower temperatures","moves slower in warm areas"],ghosts:[{name:"Spirit",description:"",uniquestrength:"",weaknesses:"",evidence:["Fingerprints","Ghost Writing","Spirit Box","smudge stick stops attacks for a long time"]},{name:"Wraith",description:"",uniquestrength:"",weaknesses:"",evidence:["Fingerprints","Freezing Temperature","Spirit Box","flying, no footprints","toxic reaction to salt","travelling through walls"]},{name:"Phantom",description:"",uniquestrength:"",weaknesses:"",evidence:["EMF Level 5","Freezing Temperature","Ghost Orbs","looking at the ghost drops sanity considerably","taking a photo makes the ghost temporarily disappear","summoned by a Ouija Board","possesses the living"]},{name:"Poltergeist",description:"",uniquestrength:"",weaknesses:"",evidence:["Fingerprints","Ghost Orbs","Spirit Box","throws multiple objects at once"]},{name:"Banshee",description:"",uniquestrength:"",weaknesses:"",evidence:["EMF Level 5","Fingerprints","Freezing Temperature","targets and hunts one person at a time","scared off easily by the Crucifix"]},{name:"Jinn",description:"",uniquestrength:"",weaknesses:"",evidence:["EMF Level 5","Ghost Orbs","Spirit Box","territorial ghost that attacks when threatened","travels fast when victim is far away","turning off the locations power source slows down ghost movement"]},{name:"Mare",description:"",uniquestrength:"",weaknesses:"",evidence:["Freezing Temperature","Ghost Orbs","Spirit Box","most powerful in the dark","increased chance of an attack in the dark","lower chance of an attack when lights are on"]},{name:"Revenant",description:"",uniquestrength:"",weaknesses:"",evidence:["EMF Level 5","Fingerprints","Ghost Writing","travels at significantly high speeds when hunting","hiding slows down the ghost significantly"]},{name:"Shade",description:"",uniquestrength:"",weaknesses:"",evidence:["EMF Level 5","Ghost Orbs","Ghost Writing","shy ghost with no activity/hunting when multiple people are nearby"]},{name:"Demon",description:"",uniquestrength:"",weaknesses:"",evidence:["Freezing Temperature","Ghost Writing","Spirit Box","attacks often and without reason","sanity is not lowered when asking successful Ouija Board questions"]},{name:"Yurei",description:"",uniquestrength:"",weaknesses:"",evidence:["Freezing Temperature","Ghost Orbs","Ghost Writing","reduces sanity more quickly","smudging the room will stop it from wandering around for a long time"]},{name:"Oni",description:"",uniquestrength:"",weaknesses:"",evidence:["EMF Level 5","Ghost Writing","Spirit Box","objects moved at great speeds","more active when people are nearby"]},{name:"Yokai",description:"",uniquestrength:"",weaknesses:"",evidence:["Spirit Box","Ghost Orbs","Ghost Writing","attracted to human voices","haunts family homes","talking near ghost increases chance of attack","while hunting only hears voices closeby"]},{name:"Hantu",description:"",uniquestrength:"",weaknesses:"",evidence:["Fingerprints","Ghost Orbs","Ghost Writing","rare ghost, found in hot climates","attack often during cold weather","moves faster at lower temperatures","moves slower in warm areas"]}],voicelines:{general:["What do you want?","Why are you here?","Do you want to hurt us?","Are you angry?","Do you want us here?","Shall we leave?","Should we leave?","Do you want us to leave?","What should we do?","Can we help?","Are you friendly?","What are you?","Are you close?","Can you show yourself?","Give us a sign.","Let us know you are here.","Show yourself.","Can you talk?","Speak to us.","Are you here?","Are you with us?","Anybody with us?","Is anyone here?","Anybody in the room?","Anybody here?","Is there a spirit here?","Is there a Ghost here?","Are you a girl?","Are you a boy?","Are you male?","Are you female?","Who are you?","What are you?","Who is this?","Who are we talking to?","Who am I talking to?","Hello?","What is your name?","Can you give me your name?","How old are you?","How young are you?","What is your age?","When were you born?","Are you a child?","Are you old?","Are you young?","What is your location?","What is your gender?","Are you male or female?","Are you a woman?"],ouija:["Who did you kill?","Who is your victim?","What is the name of the person you killed?","What is the name of the person you murdered?","What is your victim?","Did you murder?","Who did you murder?","Who died?","How old are you?","What is your age?","Are you old?","Are you young?","How long have you been dead?","How many years ago did you die?","How long have you been here?","How long ago did you die?","When did you die?","How many are in this room?","How many people are in this room?","How many people are in here?","How many ghosts are in this room?","How many ghosts are in here?","Are you alone?","Are we alone?","Who is here?","Who is in this room?","Where are you?","What is your favorite room?","Where is your room?","What is your room?","Are you here?","Are you close?","Are there any spirits?","Are you near?","Are you around?"],spiritbox:["Can you speak?","Can you speak to us?","Make a noise.","Open a door.","Open this door.","Turn on the light.","Turn off the light.","Are there any ghosts?","Give us a sign.","Show us.","Let us know you are here.","Do something.","Is there anyone with me?","Scream.","Can we speak?","Would like to speak to you.","Is there anyone here?","May I ask you?","Would you like to talk?","Are you the only one here?","Are you waiting?","Is there anything I can do?","Do you know who we are?","Are you happy?","Are you here all the time?","Are you male or female?","Do you want us to leave?","Can I ask you?","Can you make a sound?","Show us your presence.","Knock something.","Make a sound.","Open the door.","Throw something.","Talk to me.","Talk to us.","We mean you no harm.","We are friends.","Is this you're home?","Can you speak to us?"],attacktrigger:["<The Ghosts Name>","I'm scared.","I am scared.","Scared.","Scary.","Spooky.","Horror.","Scare.","Frighten.","Panic.","Fright.","Hide.","Run.","Show your presence.","Show us.","Show me.","Fuck","Bitch","Shit","Cunt","Ass","Bastard","Motherfucker (high response)","Arsehole","Crap","Pussy","Dickhead","Bloody Mary"]}},C=a(40),G=a.n(C),B=function(e){Object(m.a)(a,e);var t=Object(g.a)(a);function a(e){var n;Object(d.a)(this,a),n=t.call(this,e);var o,r=[],i={},s={},c={},l={},u={},m={},g={},y=Object(h.a)(W.ghosts);try{for(y.s();!(o=y.n()).done;){var v=o.value;s[v.name]=!1,c[v.name]=!1,i[v.name]=v,r.push(v.name)}}catch(I){y.e(I)}finally{y.f()}var f=function(e,t){return e<t?-1:e>t?1:0};for(var w in r.sort(f),W.voicelines)W.voicelines[w].sort(f);var b,E=Object(h.a)(W.primaryevidence);try{for(E.s();!(b=E.n()).done;){var k=b.value;u[k]=!1,m[k]=!1,g[k]=!0}}catch(I){E.e(I)}finally{E.f()}var x,A=Object(h.a)(W.secondaryevidence);try{for(A.s();!(x=A.n()).done;){var S=x.value;u[S]=!1,m[S]=!1,g[S]=!0}}catch(I){A.e(I)}finally{A.f()}for(var j=0,O=r;j<O.length;j++){var C=O[j];l[C]={};var G,B=Object(h.a)(i[C].evidence);try{for(B.s();!(G=B.n()).done;){var F=G.value;l[C][F]=!0}}catch(I){B.e(I)}finally{B.f()}}return n.onEvidenceClick=n.onEvidenceClick.bind(Object(p.a)(n)),n.toggleSetting=n.toggleSetting.bind(Object(p.a)(n)),n.resetSelected=n.resetSelected.bind(Object(p.a)(n)),n.state={showAllSecondaryEvidence:!1,data:W,ghostNames:r,ghostsByName:i,selectedGhosts:s,ignoredGhosts:c,selectedEvidence:u,ignoredEvidence:m,remainingEvidence:g,selectedGhostAmount:0,selectedEvidenceAmount:0,selectedSecondaryEvidenceAmount:0,ghostHasEvidence:l,onEvidenceClick:n.onEvidenceClick,toggleSetting:n.toggleSetting,resetSelected:n.resetSelected},n}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement(s.a,null,o.a.createElement("div",{className:"full-screenable-node"},o.a.createElement(v.a,{bg:"dark",variant:"dark",expand:"xl",style:{boxShadow:"0px 2px 5px #000000"}},o.a.createElement(v.a.Brand,{style:{marginLeft:"15%"}},o.a.createElement("a",{href:"http://un0btanium.github.io/phasmophobia-cheatsheet/"},o.a.createElement("img",{src:G.a,width:"35",height:"35",alt:"Logo"}),o.a.createElement("b",null," Phasmophobia CheatSheet"))),o.a.createElement(v.a.Toggle,{"aria-controls":"basic-navbar-nav"}),o.a.createElement(v.a.Collapse,{id:"basic-navbar-nav",style:{marginRight:"10%"}},o.a.createElement(f.a,{className:"mr-auto"},o.a.createElement(f.a.Link,{as:s.b,variant:"light",to:"/phasmophobia-cheatsheet/ghostsandevidence"},o.a.createElement("b",null,"Ghosts & Evidence")),o.a.createElement(f.a.Link,{as:s.b,variant:"light",to:"/phasmophobia-cheatsheet/voicelines"},o.a.createElement("b",null,"Voicelines"))),o.a.createElement(f.a,null,o.a.createElement(f.a.Link,{as:s.b,variant:"light",to:"/phasmophobia-cheatsheet/about"},o.a.createElement("b",null,"About")),o.a.createElement(f.a.Link,{as:s.b,variant:"light",to:"/phasmophobia-cheatsheet/contact"},o.a.createElement("b",null,"Contact")),o.a.createElement(v.a.Text,{style:{color:"rgb(223, 105, 26)",marginLeft:"20px"}},o.a.createElement("b",null,"Patch ",o.a.createElement("i",null,"May 2021")))))),o.a.createElement(y.c,null,o.a.createElement(y.a,{exact:!0,path:"/phasmophobia-cheatsheet/ghostsandevidence",render:function(t){return o.a.createElement(A,Object.assign({},t,e.state))}}),o.a.createElement(y.a,{exact:!0,path:"/phasmophobia-cheatsheet/voicelines",render:function(t){return o.a.createElement(S,Object.assign({},t,e.state))}}),o.a.createElement(y.a,{exact:!0,path:"/phasmophobia-cheatsheet/about",render:function(e){return o.a.createElement(j,e)}}),o.a.createElement(y.a,{exact:!0,path:"/phasmophobia-cheatsheet/contact",render:function(e){return o.a.createElement(O,e)}}),o.a.createElement(y.a,{render:function(t){return o.a.createElement(A,Object.assign({},t,e.state))}}))))}},{key:"preventEvent",value:function(e){e.preventDefault()}},{key:"toggleSetting",value:function(e){localStorage.setItem(e,!this.state[e]),this.setState(Object(l.a)({},e,!this.state[e]))}},{key:"onEvidenceClick",value:function(e,t){e.preventDefault();var a=Object(c.a)({},this.state.selectedEvidence),n=Object(c.a)({},this.state.ignoredEvidence);"click"===e.type?(a[t]=!a[t],a[t]&&(n[t]=!1)):"contextmenu"===e.type&&(n[t]=!n[t],n[t]&&(a[t]=!1));var o=0,r=0;for(var i in a)!0!==a[i]&&!0!==n[i]||(o++,this.state.data.secondaryevidence.includes(i)&&r++);var s,l={},d={},u=0,p={},m=Object(h.a)(this.state.data.ghosts);try{for(m.s();!(s=m.n()).done;){var g=s.value,y=!0;for(var v in a)if(a[v]&&!g.evidence.includes(v)){y=!1;break}for(var f in n)if(n[f]&&g.evidence.includes(f)){d[g.name]=!0,y=!1;break}if(y){l[g.name]=!0,u++;var w,b=Object(h.a)(g.evidence);try{for(b.s();!(w=b.n()).done;){p[w.value]=!0}}catch(E){b.e(E)}finally{b.f()}}else l[g.name]=!1}}catch(E){m.e(E)}finally{m.f()}this.setState({selectedGhosts:l,ignoredGhosts:d,selectedEvidence:a,ignoredEvidence:n,remainingEvidence:p,selectedGhostAmount:u,selectedEvidenceAmount:o,selectedSecondaryEvidenceAmount:r})}},{key:"resetSelected",value:function(){var e,t={},a={},n=Object(c.a)({},this.state.selectedEvidence),o=Object(c.a)({},this.state.ignoredEvidence),r={},i=Object(h.a)(W.ghosts);try{for(i.s();!(e=i.n()).done;){var s=e.value;t[s.name]=!1,a[s.name]=!1}}catch(y){i.e(y)}finally{i.f()}var l,d=Object(h.a)(W.primaryevidence);try{for(d.s();!(l=d.n()).done;){var u=l.value;n[u]=!1,o[u]=!1,r[u]=!0}}catch(y){d.e(y)}finally{d.f()}var p,m=Object(h.a)(W.secondaryevidence);try{for(m.s();!(p=m.n()).done;){var g=p.value;n[g]=!1,o[g]=!1,r[g]=!0}}catch(y){m.e(y)}finally{m.f()}this.setState({selectedGhosts:t,ignoredGhosts:a,selectedEvidence:n,ignoredEvidence:o,remainingEvidence:r,selectedGhostAmount:0,selectedEvidenceAmount:0,selectedSecondaryEvidenceAmount:0})}}]),a}(n.Component),F=Object(y.f)(B);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(s.a,null,o.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[48,1,2]]]);
//# sourceMappingURL=main.13eaceb2.chunk.js.map