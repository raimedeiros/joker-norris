(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,a){e.exports=a(45)},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(13),o=a.n(r),l=a(9),i=a(7),s=a(15),m=a(16),u=a(18),d=a(17),g=a(19),h=function(e){return{type:"SET_CATEGORIA",categoriaSelecionada:e}},E=a(10),v=function(){return c.a.createElement("div",{className:"text-center loadingStatus"},c.a.createElement("div",{className:"lds-dual-ring"}),c.a.createElement("div",null,"Carregando"))},p=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).state={loading:!0},a.state={categories:[]},a}return Object(g.a)(t,e),Object(m.a)(t,[{key:"setCategory",value:function(e){this.props.dispatch(h(e))}},{key:"render",value:function(){var e=this;return this.state.loading?c.a.createElement(v,null):c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"row text-center"},c.a.createElement("div",{className:"col-12 col-md-8 card"},c.a.createElement("div",{className:"title-card"},c.a.createElement("h2",null,"Escolha uma categoria")),c.a.createElement("div",{className:"content-card"},c.a.createElement("div",{className:"row"},this.state.categories.map(function(t){return c.a.createElement("div",{key:t,className:"col-6 col-md-4 text-center"},c.a.createElement(l.b,{className:"link-category",to:"/joke/",onClick:function(){return e.setCategory(t)}},t))}))))))}},{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),fetch("https://api.chucknorris.io/jokes/categories").then(function(e){return e.json()}).then(function(t){e.setState({categories:t}),e.setState({loading:!1})}).catch(console.log)}}]),t}(n.Component),k=Object(E.b)(function(e){return{categoria:e.categoriaSelecionada}})(p),f=function(){return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"header-block text-center"},c.a.createElement("img",{alt:"Chuck Norris icon",src:"https://assets.chucknorris.host/img/avatar/chuck-norris.png"}),c.a.createElement("h1",null,c.a.createElement("span",null,"Hey Norris,"),c.a.createElement("span",null,"make a joke!"))),c.a.createElement(k,null))},j=a(29),b=a.n(j),N=function(){return c.a.createElement("div",{className:"navigator"},c.a.createElement(l.b,{to:"/"}," Voltar "))},y=function(e,t,a,n){return{type:"SET_JOKE",created:e,icon:t,value:a,categories:n}},w=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).state={loading:!0},a}return Object(g.a)(t,e),Object(m.a)(t,[{key:"setJoke",value:function(e){e=e.joke,this.props.dispatch(y(e.created_at,e.icon_url,e.value,e.categories))}},{key:"render",value:function(){var e=this;return this.state.loading?c.a.createElement(v,null):c.a.createElement("div",{className:"joke-block"},c.a.createElement(N,null),c.a.createElement("div",{className:"row text-center"},c.a.createElement("div",{className:"col-12 col-md-8 card"},c.a.createElement("img",{alt:"\xedcone",src:this.props.jokeItem.icon}),c.a.createElement("div",{className:"title-card"},c.a.createElement("h2",null,c.a.createElement("i",null,"Joke"))),c.a.createElement("div",{className:"content-card"},c.a.createElement("p",{className:"joke-content"},this.props.jokeItem.value),c.a.createElement("p",null,c.a.createElement("i",null,"Created on: "),c.a.createElement(b.a,{format:"DD/MM/YYYY"},this.props.jokeItem.created),c.a.createElement("br",null)),c.a.createElement("p",{className:"text-right"},c.a.createElement("small",null,"Categories: ",this.props.jokeItem.categories))),c.a.createElement("div",{className:"footer-card"},!0===this.state.loading&&c.a.createElement("div",null,"loading"),c.a.createElement("p",{className:"carregar-outra",onClick:function(){return e.getJoke()}},"Carregar outra")))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"})))}},{key:"componentDidMount",value:function(){this.getJoke()}},{key:"getJoke",value:function(){var e=this;this.setState({loading:!0}),fetch("https://api.chucknorris.io/jokes/random?category="+(this.props.categoriaSelecionada.categoria?this.props.categoriaSelecionada.categoria:"animal")).then(function(e){return e.json()}).then(function(t){e.setJoke({joke:t}),e.setState({loading:!1})}).catch(console.log)}}]),t}(n.Component),O=Object(E.b)(function(e){return{categoriaSelecionada:e.categoria,jokeItem:e.joke}})(w);a(43);var S=function(){return c.a.createElement("div",{className:"container"},c.a.createElement(l.a,{basename:"/joker-norris"},c.a.createElement(i.c,null,c.a.createElement(i.a,{path:"/",exact:!0,component:f}),c.a.createElement(i.a,{path:"/joke/",component:O}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(44);var C=a(30),J=a.n(C),x=a(8),I=a(20),A={categoria:""},T={created:"",icon:"",value:"",categories:[]},_=Object(x.b)({categoria:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CATEGORIA":return Object(I.a)({},e,{categoria:t.categoriaSelecionada});default:return e}},joke:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_JOKE":return Object(I.a)({},e,{created:t.created,icon:t.icon,value:t.value,categories:t.categories});default:return e}}}),D=Object(x.c)(_);J.a.load({google:{families:["Dosis:400,500","sans-serif"]}}),o.a.render(c.a.createElement(E.a,{store:D},c.a.createElement("div",{className:"app container-fluid"},c.a.createElement(S,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,1,2]]]);
//# sourceMappingURL=main.d62f6353.chunk.js.map