(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),c=a.n(o),s=(a(13),a(1)),i=a(2),l=a(4),h=a(3),u=a(5),m=(a(14),function(e){var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"search pa2 ba b--orange bg-white",type:"search",placeholder:"Search Robots...",onChange:t}))}),d=(a(15),function(e){var t=e.name,a=e.email,n=e.id;return r.a.createElement("div",{className:"tc bg-light-red dib br3 pa3 ma2 grow bw2 shadow-5 card"},r.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(n,"?set=set3")}),r.a.createElement("div",null,r.a.createElement("h2",{id:"robot-name"},t),r.a.createElement("p",{id:"robot-mail"},a)))}),f=function(e){var t=e.robots;return r.a.createElement("div",null,t.map((function(e,a){return r.a.createElement(d,{key:a,id:t[a].id,name:t[a].name,email:t[a].email})})))},b=(a(16),function(){return r.a.createElement("footer",{className:"pv4 ph3 ph5-m ph6-l",id:"m-footer"},r.a.createElement("small",{className:"f6 db tc",id:"sm"},r.a.createElement("a",{href:"https://github.com/code-plus-coffee",target:"_blank",rel:"noopener noreferrer"},"Code Plus Coffee")))}),p=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(h.a)(t).call(this,e))).state={hasError:!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Error, cannot process the robots. Try again later."):this.props.children}}]),t}(n.Component),E=(a(17),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(h.a)(t).call(this))).onSearchChange=function(t){e.setState({searchField:t.target.value})},e.state={robots:[],searchField:""},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,a=e.searchField,n=t.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}));return t.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"main-title"},"Robofriends"),r.a.createElement(m,{searchChange:this.onSearchChange}),r.a.createElement(p,null,r.a.createElement(f,{robots:n})),r.a.createElement(b,null)):r.a.createElement("h1",{className:"tc load"},"Loading...")}}]),t}(n.Component));a(18),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.5aa6758e.chunk.js.map