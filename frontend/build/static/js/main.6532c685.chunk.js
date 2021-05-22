(this["webpackJsonpreact-ts-tic-tac-toe"]=this["webpackJsonpreact-ts-tic-tac-toe"]||[]).push([[0],{68:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var s=a(1),o=a.n(s),r=a(32),n=a.n(r),c=a(8),i=a(17),d=a(10),l=a(11),h=a(13),b=a(12),p=a(2),u=a(14),m=a.n(u),j=a(18),x=a(33),k=a(16),O=a.n(k),N=a(0),y=function(e){return Object(N.jsx)("button",{className:e.darkMode?"board__box board__box-dark":"board__box",onClick:e.onClick,children:e.value})},g=a(35);function _(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var s=Object(g.a)(t[a],3),o=s[0],r=s[1],n=s[2];if(e[o]&&e[o]===e[r]&&e[o]===e[n])return e[o]}return null}function v(e){var t=0;return e.forEach((function(e){null!==e&&t++})),9===t}var f=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(d.a)(this,a);for(var s=arguments.length,o=new Array(s),r=0;r<s;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={boxes:Array(9).fill(null),history:[],playerOneName:e.props.state.playerOneName,playerTwoName:e.props.state.playerTwoName,xIsNext:!0,room:e.props.state.roomcode},e.client=new x.w3cwebsocket("ws://jedah.herokuapp.com/ws/play/"+e.state.room+"/"),e.handleBoardRestart=function(){e.setState({boxes:Array(9).fill(null),history:[],xIsNext:!0});e.client.send(JSON.stringify({event:"END"}))},e}return Object(l.a)(a,[{key:"handleBoxClick",value:function(e){console.log(this.state.room);var t=this.state.boxes.slice(),a=this.state.history;if(!_(t)&&!t[e]&&!0!==v(t)){t[e]=this.state.xIsNext?"x":"o",a.push(this.state.xIsNext?this.state.playerOneName:this.state.playerTwoName);var s={event:"MOVE",message:{index:t,player:this.state.xIsNext?this.state.playerOneName:this.state.playerTwoName,xIsNext:this.state.xIsNext,history:this.state.history}};console.log(e),this.client.send(JSON.stringify(s)),this.setState({boxes:t,history:a,xIsNext:!this.state.xIsNext})}}},{key:"componentDidMount",value:function(){var e=Object(j.a)(m.a.mark((function e(){var t,a=this;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=function(){var e=this;this.client.onopen=function(){e.client.send(JSON.stringify({event:"START",message:""})),console.log("WebSocket Client Connected")}},_(this.state.boxes),this.client.onclose=function(e){console.log("Socket is closed. Reconnect will be attempted in 1 second.",e.reason),setTimeout((function(){t()}),1e3)},this.client.onmessage=function(e){var t=JSON.parse(e.data),s=(t=t.payload).message;switch(t.event){case"START":a.handleBoardRestart();break;case"MOVE":s.player&&(a.setState((function(e){return{boxes:s.index,xIsNext:!s.xIsNext,history:s.history}})),console.log(s.index));break;default:console.log("No event")}};case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t=this,a=_(this.state.boxes),s=v(this.state.boxes);return a?(console.log(9),e="The winner is: ".concat("x"===a?this.state.playerOneName:this.state.playerTwoName,"!"),O.a.post("https://jedah.herokuapp.com/api/historys/",{title:"".concat("x"===a?this.state.playerOneName:this.state.playerTwoName," won"),text:""})):!a&&s?(e="Game drawn!",O.a.post("https://jedah.herokuapp.com/api/historys/",{title:"Game drawn",text:""})):e="It is ".concat(this.state.xIsNext?this.state.playerOneName:this.state.playerTwoName,"'s turn."),Object(N.jsxs)("div",{className:this.props.darkMode?"view view-dark":"view view--board",children:[Object(N.jsx)(c.b,{to:"/",className:this.props.darkMode?"board-back-link-dark board-back-link":"board-back-link",children:"Go back to scoreboard"}),Object(N.jsxs)("label",{className:"switch",children:[Object(N.jsx)("input",{type:"checkbox",onChange:this.props.onDarkModeToggle,checked:this.props.darkMode}),Object(N.jsx)("span",{className:"slider"})]}),Object(N.jsxs)("div",{className:"board-wrapper",children:[Object(N.jsxs)("div",{className:"board",children:[Object(N.jsx)("h2",{className:this.props.darkMode?"board-heading board-heading-dark":"board-heading",children:e}),Object(N.jsxs)("div",{className:"board-row",children:[Object(N.jsx)(y,{value:this.state.boxes[0],onClick:function(){return t.handleBoxClick(0)},darkMode:this.props.darkMode}),Object(N.jsx)(y,{value:this.state.boxes[1],onClick:function(){return t.handleBoxClick(1)},darkMode:this.props.darkMode}),Object(N.jsx)(y,{value:this.state.boxes[2],onClick:function(){return t.handleBoxClick(2)},darkMode:this.props.darkMode})]}),Object(N.jsxs)("div",{className:"board-row",children:[Object(N.jsx)(y,{value:this.state.boxes[3],onClick:function(){return t.handleBoxClick(3)},darkMode:this.props.darkMode}),Object(N.jsx)(y,{value:this.state.boxes[4],onClick:function(){return t.handleBoxClick(4)},darkMode:this.props.darkMode}),Object(N.jsx)(y,{value:this.state.boxes[5],onClick:function(){return t.handleBoxClick(5)},darkMode:this.props.darkMode})]}),Object(N.jsxs)("div",{className:"board-row",children:[Object(N.jsx)(y,{value:this.state.boxes[6],onClick:function(){return t.handleBoxClick(6)},darkMode:this.props.darkMode}),Object(N.jsx)(y,{value:this.state.boxes[7],onClick:function(){return t.handleBoxClick(7)},darkMode:this.props.darkMode}),Object(N.jsx)(y,{value:this.state.boxes[8],onClick:function(){return t.handleBoxClick(8)},darkMode:this.props.darkMode})]})]}),Object(N.jsxs)("div",{className:"board-history",children:[Object(N.jsx)("h2",{className:this.props.darkMode?"board-heading board-heading-dark":"board-heading",children:"Moves history:"}),Object(N.jsxs)("ul",{className:this.props.darkMode?"board-history-list board-history-list-dark":"board-history-list",children:[0===this.state.history.length&&Object(N.jsx)("span",{children:"No moves to show."}),0!==this.state.history.length&&this.state.history.map((function(e,t){return Object(N.jsxs)("li",{children:["Move ",t+1,": ",Object(N.jsx)("strong",{children:e})]},t)}))]})]}),a&&Object(N.jsx)("button",{className:"board__btn btn",onClick:this.handleBoardRestart,children:"Start new game"}),!a&&s&&Object(N.jsx)("button",{className:"board__btn btn",onClick:this.handleBoardRestart,children:"Start new game"})]})]})}}]),a}(o.a.Component),M=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(e){var s;return Object(d.a)(this,a),(s=t.call(this,e)).refreshList=function(){O.a.get("https://jedah.herokuapp.com/api/historys").then((function(e){Promise.all(e.data.map((function(e){return e.title}))).then((function(e){s.setState({scoreboard:e})}))})).catch((function(e){return console.error(e)}))},s.handleInputChange=function(e){e.preventDefault();var t=e.target.dataset.name,a=e.target.value;console.log(s.state.roomcode),s.setState(Object(i.a)({},t,a)),s.props.nameChangeHandler(t,a)},s.handleNameValidation=function(e){0!==s.state.playerOneName.length&&0!==s.state.playerTwoName.length||e.preventDefault()},s.state={playerOneName:s.props.state.playerOneName,playerTwoName:s.props.state.playerTwoName,scoreboard:[],roomcode:s.props.state.roomcode},s}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(j.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.refreshList(),console.log(this.state.roomcode.length);case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(N.jsxs)("div",{className:this.props.darkMode?"view view-dark":"view view--scoreboard",children:[Object(N.jsx)("h1",{className:this.props.darkMode?"scoreboard__title scoreboard__title-dark":"scoreboard__title",children:"Welcome to Jedah"}),Object(N.jsxs)("label",{className:"switch",children:[Object(N.jsx)("input",{type:"checkbox",onChange:this.props.onDarkModeToggle,checked:this.props.darkMode}),Object(N.jsx)("span",{className:"slider"})]}),Object(N.jsx)("h2",{className:this.props.darkMode?"scoreboard__subtitle scoreboard__subtitle-dark":"scoreboard__subtitle",children:"Would you like to play a game?"}),Object(N.jsxs)("div",{className:this.props.darkMode?"scoreboard__name-box scoreboard__name-box-dark":"scoreboard__name-box",children:[Object(N.jsx)("label",{htmlFor:"playerTwoName",children:"gameid:"}),Object(N.jsx)("input",{id:"roomcode",className:this.props.darkMode?"scoreboard__input scoreboard__input-dark":"scoreboard__input",type:"text",value:this.state.roomcode,placeholder:"input 4 digit gameid",onChange:this.handleInputChange,"data-name":"roomcode",disabled:this.state.roomcode.length>3})]}),Object(N.jsx)("br",{}),Object(N.jsxs)("div",{className:"scoreboard__names",children:[Object(N.jsxs)("div",{className:this.props.darkMode?"scoreboard__name-box scoreboard__name-box-dark":"scoreboard__name-box",children:[Object(N.jsx)("label",{htmlFor:"playerOneName",children:"Player one name (x):"}),Object(N.jsx)("input",{id:"playerOneName",className:this.props.darkMode?"scoreboard__input scoreboard__input-dark":"scoreboard__input",type:"text",value:this.state.playerOneName,disabled:!0,"data-name":"playerOneName"})]}),Object(N.jsxs)("div",{className:this.props.darkMode?"scoreboard__name-box scoreboard__name-box-dark":"scoreboard__name-box",children:[Object(N.jsx)("label",{htmlFor:"playerTwoName",children:"Player two name (o):"}),Object(N.jsx)("input",{id:"playerTwoName",className:this.props.darkMode?"scoreboard__input scoreboard__input-dark":"scoreboard__input",type:"text",value:this.state.playerTwoName,disabled:!0,"data-name":"playerTwoName"})]})]}),this.state.roomcode.length<=3?Object(N.jsx)("h2",{className:this.props.darkMode?"scoreboard__subtitle scoreboard__subtitle-dark info":"scoreboard__subtitle danger info",children:"input your 4 digit gameid to continue"}):Object(N.jsx)(c.b,{to:"/board",onClick:this.handleNameValidation,className:"scoreboard__btn btn",children:"Start new game"}),Object(N.jsx)("h2",{className:this.props.darkMode?"scoreboard__subtitle scoreboard__subtitle-dark":"scoreboard__subtitle",children:"Recent games:"}),0===this.state.scoreboard.length&&Object(N.jsx)("p",{className:this.props.darkMode?"p-dark":"",children:"There are no previous games to show."}),0!==this.state.scoreboard.length&&Object(N.jsx)("ul",{className:this.props.darkMode?"scoreboard__list scoreboard__list-dark":"scoreboard__list",children:this.state.scoreboard.map((function(e,t){return Object(N.jsxs)("li",{children:["- ",e]},t)}))})]})}}]),a}(o.a.Component),w=(a(68),function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(d.a)(this,a);for(var s=arguments.length,o=new Array(s),r=0;r<s;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={playerOneName:"x",playerTwoName:"o",darkMode:!!localStorage.getItem("darkmode")&&JSON.parse(localStorage.getItem("darkmode")),roomcode:""},e.handlePlayerNameChange=function(t,a){e.setState(Object(i.a)({},t,a))},e.handleDarkModeToggle=function(){var t=!e.state.darkMode;localStorage.setItem("darkmode",JSON.stringify(t)),e.setState({darkMode:t})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(N.jsxs)("div",{className:"app",children:[Object(N.jsx)(p.a,{exact:!0,path:"/",render:function(){return Object(N.jsx)(M,{state:e.state,nameChangeHandler:e.handlePlayerNameChange,onDarkModeToggle:e.handleDarkModeToggle,darkMode:e.state.darkMode,roomcode:e.state.roomcode})}}),Object(N.jsx)(p.a,{path:"/board",render:function(){return Object(N.jsx)(f,{state:e.state,nameChangeHandler:e.handlePlayerNameChange,onDarkModeToggle:e.handleDarkModeToggle,darkMode:e.state.darkMode,roomcode:e.state.roomcode})}})]})}}]),a}(o.a.Component));n.a.render(Object(N.jsx)(c.a,{children:Object(N.jsx)(o.a.StrictMode,{children:Object(N.jsx)(w,{})})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.6532c685.chunk.js.map