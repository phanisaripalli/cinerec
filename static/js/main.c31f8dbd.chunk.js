(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},26:function(e,t,n){e.exports=n(62)},31:function(e,t,n){},33:function(e,t,n){},51:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(13),o=n.n(i),s=(n(31),n(64)),c=n(65),l=n(5),d=n(6),m=n(8),u=n(7),p=n(9),h=n(21),f=n.n(h),g=(n(33),function(e){function t(e,n){var a;Object(l.a)(this,t),a=Object(m.a)(this,Object(u.a)(t).call(this,e,n));var r=e.location.search.split("=")[1];return console.log(r),a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:f.a,className:"App-logo",alt:"logo"}),r.a.createElement("p",null,"Edit ",r.a.createElement("code",null,"src/App.js")," and save to reload."),r.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")))}}]),t}(a.Component)),v=(n(17),n(22)),b=n(10),E=n(23),j=n.n(E),w=(n(51),function(e){function t(e,n){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e,n))).handleSelect=a.handleSelect.bind(Object(b.a)(Object(b.a)(a))),a.state={index:0,direction:null},a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"handleSelect",value:function(e,t){alert("selected=".concat(e,", direction=").concat(t.direction)),this.setState({index:e,direction:t.direction})}},{key:"render",value:function(){var e=this.state;e.index,e.direction;return r.a.createElement("div",{className:"rec-slider"},this.props.recommendations.length>0&&r.a.createElement("div",{className:"rec-title"},"Recommended"),this.props.recommendations.length>0&&r.a.createElement(j.a,{dots:!1,infinite:!0,speed:500,slidesToShow:5,slidesToScroll:5,accessibility:!0,adaptiveHeight:!0,arrows:!0,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2,initialSlide:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]},this.props.recommendations.map(function(e,t){return r.a.createElement("a",{href:"https://www.universcine.de/de_DE/films/"+e.slug_recommended,key:t},r.a.createElement("div",null,r.a.createElement("img",Object(v.a)({className:"img img-responsive",height:350.92,width:"100%",alt:"300x200",src:e.metadata.poster_url},"className","film-img"))))})))}}]),t}(r.a.Component)),O=n(53),S=n(55),k=function(e){var t=x+"recommendations?slug="+e;return console.log(t),function(e){var t=new XMLHttpRequest;t.open("GET",e,!1),t.send(null);var n=t.responseText;return JSON.parse(n)}(t)},y=function(e){return O.parse(e).title},x="https://ryskn4s5c5.execute-api.eu-west-1.amazonaws.com/v1/",T=function(e){function t(e){var n;return Object(l.a)(this,t),console.log(e),(n=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={title:y(e.location.search),slug:"",recommendations:[]},console.log(e),n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentWillMount",value:function(e){var t=this,n=this.state.title,a=S(this.state.title,{lower:!0}),r=k(a);console.log(r),this.setState({title:n,slug:a,recommendations:r},function(){console.log(t.state)})}},{key:"render",value:function(){return r.a.createElement("div",{style:{padding:"20px"}},r.a.createElement(w,{recommendations:this.state.recommendations}))}}]),t}(r.a.Component),N=n(24),A=n.n(N)()(),_=r.a.createElement(s.a,{basename:"/cinerec",history:A,component:g},r.a.createElement("div",null,r.a.createElement(c.a,{exact:!0,path:"/",render:function(e){return r.a.createElement(T,e)}}),r.a.createElement(c.a,{path:"/?title=:title",render:function(e){return r.a.createElement(T,e)}})));o.a.render(_,document.getElementById("root"))}},[[26,2,1]]]);
//# sourceMappingURL=main.c31f8dbd.chunk.js.map