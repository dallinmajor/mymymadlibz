(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(2),o=a.n(l),i=a(3),c=a(4),m=a(6),s=a(5),u=a(7),p=function(e){var t=e.handleInputChange,a=e.handleMadLibSubmit,n=e.text;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"component"},r.a.createElement("div",{className:"madlib"},"<MyLibs>"),r.a.createElement("h6",null,"Example:"),r.a.createElement("p",{className:"cursive"},"There once was a <ADJECTIVE> <MYTHICAL BEAST>. Who lived in a <PLACE>...")),r.a.createElement("div",{className:"component"},r.a.createElement("h6",null,"Create Mad Lib!"),r.a.createElement("br",null),r.a.createElement("form",null,r.a.createElement("textarea",{rows:"5",value:n,onChange:function(e){return t(e)}}),r.a.createElement("button",{onClick:function(e){e.preventDefault(),a()},className:"btn btn-primary"},"Submit"))))},h=function(e){var t=e.handleInputChange,a=e.prompt,n=e.text,l=e.nextPrompt;console.log(a);var o=a.split("");return o.pop(),o.shift(),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"component"},r.a.createElement("h2",null,"Pass to a friend!")),r.a.createElement("form",{className:"component"},r.a.createElement("h4",null,o.join("")),r.a.createElement("input",{value:n,onChange:function(e){return t(e)}}),r.a.createElement("button",{onClick:function(e){e.preventDefault(),l()},className:"btn btn-primary"},"Next")))},d=(a(13),new RegExp("<.*?>")),b=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={madLib:null,prompt:null,text:"",done:!1},a.handleInputChange=function(e){a.setState({text:e.target.value})},a.handleSubmit=function(){if(a.state.text){var e=a.state.text,t=e.match(d);t?a.setState({madLib:e,text:"",prompt:t[0]}):alert("Hmmmmm. something seems a little off. did you use < > to specify where a word will be inserted?")}},a.createNewML=function(){a.setState({madLib:null,prompt:null,text:"",done:!1})},a.nextPrompt=function(){var e=a.state,t=e.text,n=e.madLib;if(t){var r=n.replace(d,t),l=r.match(d);l?a.setState({madLib:r,prompt:l[0],text:""}):a.setState({madLib:r,done:!0})}},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.madLib,n=t.prompt;return t.done?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"component cursive"},r.a.createElement("p",null,a),r.a.createElement("button",{onClick:function(t){t.preventDefault(),e.createNewML()},className:"btn btn-primary"},"Play again?"))):n?r.a.createElement(h,{handleInputChange:this.handleInputChange,prompt:this.state.prompt,text:this.state.text,nextPrompt:this.nextPrompt}):r.a.createElement(p,{handleInputChange:this.handleInputChange,handleMadLibSubmit:this.handleSubmit,text:this.state.text})}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports=a(15)}},[[8,2,1]]]);
//# sourceMappingURL=main.ffb0a1fc.chunk.js.map