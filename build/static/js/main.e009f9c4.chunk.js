(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(23)},15:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){},21:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),c=n.n(o),l=(n(15),n(2)),s=n(3),i=n(5),u=n(4),h=n(6),d=n(9),p=n(1),m=(n(17),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleClick=n.handleClick.bind(Object(p.a)(Object(p.a)(n))),n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"handleClick",value:function(e){console.log("inside the cell handle click"+this.props.coord),this.props.flipCellsAroundMe(this.props.coord)}},{key:"render",value:function(){var e="Cell"+(this.props.isLit?" Cell-lit":"");return r.a.createElement("td",{className:e,onClick:this.handleClick})}}]),t}(a.Component)),b=(n(19),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={hasWon:!1,board:n.createBoard()},n.flipCellsAround=n.flipCellsAround.bind(Object(p.a)(Object(p.a)(n))),n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"createBoard",value:function(){for(var e=[],t=0;t<this.props.nrows;t++){for(var n=[],a=0;a<this.props.ncols;a++)n.push(Math.random()<this.props.chanceLightStartsOn);e.push(n)}return e}},{key:"flipCellsAround",value:function(e){console.log(e);var t=this.props,n=t.ncols,a=t.nrows,r=this.state.board,o=e.split("-").map(Number),c=Object(d.a)(o,2),l=c[0],s=c[1];function i(e,t){t>=0&&t<n&&e>=0&&e<a&&(r[e][t]=!r[e][t])}i(l,s),i(l,s-1),i(l,s+1),i(l-1,s),i(l+1,s);var u=r.every(function(e){return e.every(function(e){return!e})});this.setState({board:r,hasWon:u})}},{key:"makeTable",value:function(){for(var e=[],t=0;t<this.props.nrows;t++){for(var n=[],a=0;a<this.props.ncols;a++){var o="".concat(t,"-").concat(a);n.push(r.a.createElement(m,{coord:o,key:o,isLit:this.state.board[t][a],flipCellsAroundMe:this.flipCellsAround}))}e.push(r.a.createElement("tr",{key:t},n))}return r.a.createElement("table",{className:"Board"},r.a.createElement("tbody",null,e))}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.hasWon?r.a.createElement("div",{className:"winner"},r.a.createElement("span",{className:"neon-orange"},"YOU"),r.a.createElement("span",{className:"neon-blue"},"WIN!")):r.a.createElement("div",null,r.a.createElement("div",{className:"Board-title"},r.a.createElement("div",{className:"neon-orange"},"Lights"),r.a.createElement("div",{className:"neon-blue"},"Out")),this.makeTable()))}}]),t}(a.Component));b.defaultProps={nrows:5,ncols:5,chanceLightStartsOn:.25};var f=b,v=(n(21),function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f,null))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,2,1]]]);
//# sourceMappingURL=main.e009f9c4.chunk.js.map