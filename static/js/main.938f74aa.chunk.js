(this.webpackJsonpfirst_react_app=this.webpackJsonpfirst_react_app||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),l=a.n(c),u=(a(13),a(1)),i=a(2),s=a(4),o=a(3),v=a(7);function h(e){return r.a.createElement("button",{className:"btn",onClick:e.clicked},e.value)}var f=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).changevalue=function(t){return r.a.createElement(h,{value:e.props.square[t],clicked:function(){return e.props.onclick(t)}})},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"board"},r.a.createElement("div",{className:" frow"},this.changevalue(0),this.changevalue(1),this.changevalue(2)),r.a.createElement("div",{className:" srow"},this.changevalue(3),this.changevalue(4),this.changevalue(5)),r.a.createElement("div",{className:" lrow"},this.changevalue(6),this.changevalue(7),this.changevalue(8)))}}]),a}(r.a.Component),m=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).handleclick=function(e){var t=n.state.previous,a=t[t.length-1].boxes;if(!a[e]){a[e]=n.state.flag?"X":"O",n.setState({temp:t.concat({boxes:a}),flag:!n.state.flag,count:t.length});var r=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var n=Object(v.a)(t[a],3),r=n[0],c=n[1],l=n[2];if(e[r]&&e[r]===e[c]&&e[c]===e[l])return e[r]}return null}(a);return r?(n.setState({previous:[{boxes:Array(9).fill(null)}]}),void alert("Player "+r+" Wins")):function(e){for(var t=0;t<9;t++)if(null==e[t])return!1;return!0}(a)?(n.setState({previous:[{boxes:Array(9).fill(null)}]}),void alert("Game ties")):void 0}},n.state={flag:!0,count:0,previous:[{boxes:Array(9).fill(null)}]},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.state.previous;return r.a.createElement(f,{onclick:function(t){return e.handleclick(t)},square:t[t.length-1].boxes})}}]),a}(r.a.Component);a(14);var p=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Tic Tak Toe"),r.a.createElement("div",{className:"game"},r.a.createElement(m,null)),r.a.createElement("h4",null,"\xa9Harjot Singh"))}}]),a}(r.a.Component);l.a.render(r.a.createElement(p,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.938f74aa.chunk.js.map