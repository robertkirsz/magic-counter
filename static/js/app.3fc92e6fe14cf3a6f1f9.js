webpackJsonp([1],Array(18).concat([function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a}),n.d(e,"n",function(){return r}),n.d(e,"o",function(){return o}),n.d(e,"p",function(){return s}),n.d(e,"q",function(){return u}),n.d(e,"c",function(){return c}),n.d(e,"d",function(){return l}),n.d(e,"e",function(){return d}),n.d(e,"f",function(){return f}),n.d(e,"m",function(){return m}),n.d(e,"g",function(){return p}),n.d(e,"h",function(){return v}),n.d(e,"i",function(){return y}),n.d(e,"j",function(){return I}),n.d(e,"k",function(){return g}),n.d(e,"l",function(){return M});var i="START_NEW_GAME",a="RESET_CURRENT_GAME",r="OPEN_SETTINGS_MENU",o="CLOSE_SETTINGS_MENU",s="SHOW_POISON_COUNTERS",u="HIDE_POISON_COUNTERS",c="SHOW_COMMANDER_COUNTERS",l="HIDE_COMMANDER_COUNTERS",d="ADD_PLAYER",f="REMOVE_PLAYER",m="CHOOSE_COLOR",p="INCREASE_LIFE",v="DECREASE_LIFE",y="ADD_POISON_COUNTER",I="REMOVE_POISON_COUNTER",g="ADD_COMMANDER_DAMAGE",M="REMOVE_COMMANDER_DAMAGE"},,,,,,,,,,,,,,,,function(t,e,n){n(90);var i=n(0)(null,n(178),"data-v-2dfb68ee",null);t.exports=i.exports},function(t,e,n){n(89);var i=n(0)(n(53),n(177),"data-v-0d59a29d",null);t.exports=i.exports},function(t,e,n){"use strict";var i=n(3),a=n(191),r=n(170),o=n.n(r),s=n(171),u=n.n(s),c=n(173),l=n.n(c),d=n(172),f=n.n(d);i.default.use(a.a),e.a=new a.a({routes:[{path:"/",name:"CounterScreen",component:o.a,children:[{path:"dice",name:"DiceScreen",component:u.a},{path:"statistics",name:"StatisticsScreen",component:l.a}]},{path:"/sign-in",name:"SignIn",component:f.a}]})},function(t,e,n){"use strict";var i=n(1),a=n.n(i),r=n(3),o=n(2),s=n(193),u=n.n(s),c=n(144),l=n.n(c),d=n(40),f=n(41);r.default.use(o.c);e.a=new o.c.Store({plugins:[u()()],getters:{findById:function(t){return function(e,n){var i=l()(t,e).findIndex(function(t){return t.id===n});return{index:i,data:a()({},l()(t,e)[i])}}}},modules:{app:d.a,players:f.a},strict:!1})},function(t,e,n){n(86);var i=n(0)(n(42),n(174),null,null);t.exports=i.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(3),a=n(38),r=n.n(a),o=n(36),s=n(37);i.default.config.productionTip=!1,new i.default({el:"#app",router:o.a,store:s.a,template:"<App />",components:{App:r.a}})},function(t,e,n){"use strict";var i,a=n(19),r=n.n(a),o=n(1),s=n.n(o),u=n(18),c={settingsMenuOpened:!1,poisonCountersVisible:!1,commanderCountersVisible:!1},l=s()({},c),d={poisonCountersVisible:function(t){return t.poisonCountersVisible},commanderGame:function(t){return t.commanderCountersVisible}},f=(i={},r()(i,u.a,function(t){for(var e in t)t[e]=c[e]}),r()(i,u.b,function(t){t.settingsMenuOpened=!1}),r()(i,u.n,function(t){t.settingsMenuOpened=!0}),r()(i,u.o,function(t){t.settingsMenuOpened=!1}),r()(i,u.p,function(t){t.poisonCountersVisible=!0}),r()(i,u.q,function(t){t.poisonCountersVisible=!1}),r()(i,u.c,function(t){t.commanderCountersVisible=!0}),r()(i,u.d,function(t){t.commanderCountersVisible=!1}),i),m={startNewGame:function(t){(0,t.commit)(u.a)},resetCurrentGame:function(t){var e=t.commit,n=t.getters;e(u.b,{commanderGame:n.commanderGame})},toggleSettingsMenu:function(t){var e=t.state,n=t.commit;n(e.settingsMenuOpened?u.o:u.n)},togglePoisonCounters:function(t){var e=t.state,n=t.commit;n(e.poisonCountersVisible?u.q:u.p)},toggleCommanderCounters:function(t){var e=t.state,n=t.commit;n(e.commanderCountersVisible?u.d:u.c)}};e.a={state:l,getters:d,mutations:f,actions:m}},function(t,e,n){"use strict";var i,a=n(19),r=n.n(a),o=n(1),s=n.n(o),u=n(18),c=n(3),l={0:0,1:0,2:0,3:0},d=function(){return[{id:1,life:20,backupLife:40,color:"",poison:0,commanderDamage:l},{id:2,life:20,backupLife:40,color:"",poison:0,commanderDamage:l}]},f={all:d()},m={players:function(t){return t.all},getPlayer:function(t,e){var n=e.players;return function(t){return n.find(function(e){return e.id===t})}},getPlayerIndex:function(t,e){var n=e.players;return function(t){return n.findIndex(function(e){return e.id===t})}},otherPlayers:function(t,e){var n=e.players;return function(t){return n.filter(function(e){return e.id!==t})}},numberOfPlayers:function(t,e){return e.players.length},noPlayers:function(t,e){return 0===e.numberOfPlayers},lastPlayerIndex:function(t,e){return e.numberOfPlayers-1},playersColors:function(t,e){return e.players.map(function(t){return t.color})},divider:function(t,e){var n=e.numberOfPlayers;return Math.ceil(n/2)||1}},p=(i={},r()(i,u.a,function(t){c.default.set(t,"all",d())}),r()(i,u.b,function(t,e){var n=e.commanderGame,i=t.all.map(function(t){return s()({},t,{life:n?40:20,backupLife:n?20:40,poison:0,commanderDamage:{0:0,1:0,2:0,3:0}})});c.default.set(t,"all",i)}),r()(i,u.c,function(t){var e=t.all.map(function(t){return s()({},t,{life:t.backupLife,backupLife:t.life})});c.default.set(t,"all",e)}),r()(i,u.d,function(t){var e=t.all.map(function(t){return s()({},t,{life:t.backupLife,backupLife:t.life})});c.default.set(t,"all",e)}),r()(i,u.e,function(t,e){t.all.push(e)}),r()(i,u.f,function(t){t.all.pop()}),r()(i,u.g,function(t,e){t.all.splice(e.index,1,e.data)}),r()(i,u.h,function(t,e){t.all.splice(e.index,1,e.data)}),r()(i,u.i,function(t,e){t.all.splice(e.index,1,e.data)}),r()(i,u.j,function(t,e){t.all.splice(e.index,1,e.data)}),r()(i,u.k,function(t,e){var n=t.all,i=e.player,a=e.index,r=e.commanderId,o=e.amount;i.commanderDamage[r]+=o,i.life-=o,n.splice(a,1,i)}),r()(i,u.l,function(t,e){var n=t.all,i=e.player,a=e.index,r=e.commanderId,o=e.amount,s=i.commanderDamage[r];s-o<0?(i.life+=s,i.commanderDamage[r]=0):(i.life+=o,i.commanderDamage[r]-=o),n.splice(a,1,i)}),r()(i,u.m,function(t,e){t.all.splice(e.index,1,e.data)}),i),v={addPlayer:function(t){var e=t.commit,n=t.getters;if(n.numberOfPlayers<4){var i={id:n.numberOfPlayers+1,life:n.commanderGame?40:20,backupLife:n.commanderGame?20:40,color:"",poison:0,commanderDamage:l};e(u.e,i)}},removePlayer:function(t){var e=t.commit;t.getters.numberOfPlayers>0&&e(u.f)},increaseLife:function(t,e){var n=t.commit,i=t.getters,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=i.findById("players.all",e);r.data.life+=a,n(u.g,r)},decreaseLife:function(t,e){var n=t.commit,i=t.getters,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=i.findById("players.all",e);r.data.life-=a,n(u.h,r)},addPoisonCounter:function(t,e){var n=t.commit,i=t.getters,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=i.findById("players.all",e);r.data.poison+=a,n(u.i,r)},removePoisonCounter:function(t,e){var n=t.commit,i=t.getters,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=i.findById("players.all",e);0!==r.data.poison&&(r.data.poison-=a,n(u.j,r))},addCommanderDamage:function(t,e){var n=t.commit,i=t.getters,a=e.id,r=e.amount,o=void 0===r?1:r,s=e.commanderId,c=i.getPlayer(a),l=i.getPlayerIndex(a),d={player:c,index:l,commanderId:s,amount:o};n(u.k,d)},removeCommanderDamage:function(t,e){var n=t.commit,i=t.getters,a=e.id,r=e.amount,o=void 0===r?1:r,s=e.commanderId,c=i.getPlayer(a);if(0!==c.commanderDamage[s]){var l=i.getPlayerIndex(a),d={player:c,index:l,commanderId:s,amount:o};n(u.l,d)}},chooseColor:function(t,e){var n=t.commit,i=t.getters,a=e.id,r=e.color,o=i.findById("players.all",a);o.data.color=r,n(u.m,o)}};e.a={state:f,getters:m,mutations:p,actions:v}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(167),a=n.n(i);e.default={name:"App",components:{AppState:a.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),a=n.n(i),r=n(2);e.default={name:"ColorPicker",props:{playerId:Number},data:function(){return{manaColors:["white","blue","black","red","green"]}},computed:a()({},n.i(r.b)(["playersColors"])),methods:a()({},n.i(r.d)(["chooseColor"]))}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),a=n.n(i),r=n(2),o=n(162),s=n.n(o);e.default={name:"Counter",components:{CounterButton:s.a},props:{value:{type:Number,required:!0},type:{type:String,required:!0},label:{type:Number},animated:{type:Boolean,default:!1}},data:function(){return{animationDirection:""}},computed:a()({},n.i(r.b)(["numberOfPlayers","divider"]),{style:function(){return"life"!==this.type&&{fontSize:10/this.divider+"vmax",marginBottom:this.numberOfPlayers>2?"0.5em":0}},enterClass:function(){return this.animated?"fadeIn"+this.animationDirection:""},leaveClass:function(){return this.animated?"fadeOut"+this.animationDirection:""},showLabel:function(){return this.numberOfPlayers>2&&void 0!==this.label},moreThan100:function(){return this.value>99}}),methods:{minusClick:function(){this.$emit("minusClick")},plusClick:function(){this.$emit("plusClick")}},watch:{value:function(t,e){t>e&&this.animated&&(this.animationDirection="Up"),t<e&&this.animated&&(this.animationDirection="Down")}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"CounterButton",props:{icon:{type:String,required:!0}},data:function(){return{animation:!1}},methods:{click:function(){this.animation=!0,this.$emit("click")}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Die",props:{value:Number}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),a=n.n(i),r=n(2),o=n(161),s=n.n(o),u=n(160),c=n.n(u);e.default={name:"Player",components:{Counter:s.a,ColorPicker:c.a},props:{player:Object},computed:a()({},n.i(r.b)(["numberOfPlayers"]),{style:function(){return{marginTop:this.numberOfPlayers>2?"1em":0}},commanders:function(){return this.$store.getters.otherPlayers(this.player.id)},poisonCountersVisible:function(){return this.player.color&&this.$store.state.app.poisonCountersVisible},commanderCountersVisible:function(){return this.player.color&&this.$store.state.app.commanderCountersVisible}}),methods:a()({},n.i(r.d)(["increaseLife","decreaseLife","addPoisonCounter","removePoisonCounter","addCommanderDamage","removeCommanderDamage"]))}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(151),a=n.n(i);e.default={name:"SettingsButton",props:{button:Object},computed:{style:function(){return this.button.icon&&!this.fontAwesome&&{backgroundImage:"url("+n(195)("./"+this.button.icon)+")"}},fontAwesome:function(){return a()(this.button.icon,"fa ")}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),a=n.n(i),r=n(2),o=n(159),s=(n.n(o),n(165)),u=n.n(s);e.default={name:"SettingsMenu",mixins:[o.mixin],components:{SettingsButton:u.a},mounted:function(){},updated:function(){},watch:{poisonCountersVisible:function(){},commanderCountersVisible:function(){}},computed:a()({},n.i(r.a)({poisonCountersVisible:function(t){return t.app.poisonCountersVisible},settingsMenuOpened:function(t){return t.app.settingsMenuOpened},commanderCountersVisible:function(t){return t.app.commanderCountersVisible}}),n.i(r.b)(["numberOfPlayers","noPlayers"]),{buttons:function(){var t=this;return[{icon:"poison.svg",title:"Poison counter",action:this.togglePoisonCounters,active:this.poisonCountersVisible,disabled:this.noPlayers},{icon:"commander.svg",title:"Commander damage",action:this.toggleCommanderCounters,active:this.commanderCountersVisible,disabled:this.noPlayers},{icon:"dice.svg",title:"Roll dice",action:function(){return t.$router.push("/dice")}},{icon:"fa fa-user-plus",title:"Add player",action:this.addPlayer,disabled:this.numberOfPlayers>=4},{icon:"fa fa-user-times",title:"Remove player",action:this.removePlayer,disabled:this.numberOfPlayers<=2},{text:"Reset game",title:"Reset current game",action:this.resetCurrentGame},{text:"New game",title:"Start new game",action:this.startNewGame}]}}),methods:a()({},n.i(r.d)(["addPlayer","removePlayer","startNewGame","resetCurrentGame","togglePoisonCounters","toggleCommanderCounters"]),{clickedOutside:function(){this.settingsMenuOpened&&this.$store.dispatch("toggleSettingsMenu",!1)}})}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),a=n.n(i),r=n(2),o={template:'<span :class="className">{{ value }}</span>',props:{value:Boolean},computed:{className:function(){return this.value===!0?"true":"false"}}};e.default={name:"AppState",components:{bi:o},data:function(){return{hidden:!1}},computed:a()({},n.i(r.a)({poisonCountersVisible:function(t){return t.app.poisonCountersVisible},settingsMenuOpened:function(t){return t.app.settingsMenuOpened},commanderCountersVisible:function(t){return t.app.commanderCountersVisible}}),n.i(r.b)(["numberOfPlayers","noPlayers"]))}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),a=n.n(i),r=n(2);e.default={computed:a()({},n.i(r.b)(["numberOfPlayers"]))}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),a=n.n(i),r=n(2);e.default={name:"Tile",computed:a()({},n.i(r.b)(["numberOfPlayers","divider"]),{style:function(){return{width:100/this.divider+"vw",fontSize:4.5/this.divider+"vmin"}}})}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),a=n.n(i),r=n(2),o=n(169),s=n.n(o);e.default={name:"Tiles",props:["items","style"],components:{Tile:s.a},computed:a()({},n.i(r.b)(["numberOfPlayers"]))}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),a=n.n(i),r=n(2),o=n(35),s=n.n(o),u=n(166),c=n.n(u),l=n(164),d=n.n(l),f=n(168),m=n.n(f),p={white:["#FC9700","#FFE292"],blue:["#004394","#009AD0"],black:["#4C0064","#B3307E"],red:["#94001A","#E7093C"],green:["#01662C","#82B300"],clear:["hsl(0, 0%, 100%)","hsl(0, 0%, 100%)"]},v={upToTwo:["top","bottom"],moreThanTwo:["top right","bottom right","top left","bottom left"]};e.default={name:"CounterScreen",components:{Tiles:s.a,SettingsMenu:c.a,Player:d.a,ModifyPlayers:m.a},computed:a()({},n.i(r.b)(["players","playersColors","numberOfPlayers"]),{backgroundGradients:function(){var t='url("static/background.png"), linear-gradient(to bottom, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.25))',e=this.numberOfPlayers>2?"moreThanTwo":"upToTwo",n=this.numberOfPlayers>2?"50%":"65%";return this.playersColors.forEach(function(i,a){i&&(t+=", linear-gradient(to "+v[e][a]+", "+p[i][0]+", "+p[i][1]+", transparent "+n+")")}),{backgroundImage:t}}})}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),a=n.n(i),r=n(2),o=n(152),s=n.n(o),u=n(150),c=n.n(u),l=n(34),d=n.n(l),f=n(35),m=n.n(f),p=n(163),v=n.n(p);e.default={name:"DiceScreen",components:{Backdrop:d.a,Tiles:m.a,Die:v.a},data:function(){return{dice:[]}},beforeMount:function(){this.rollDice()},computed:a()({},n.i(r.b)(["numberOfPlayers","lastPlayerIndex"])),methods:{rollDice:function(){this.dice=s()(this.numberOfPlayers,function(){return c()(1,6)})},rollDie:function(t){var e=this.dice[t],n=void 0;do{n=c()(1,6)}while(n===e);this.$set(this.dice,t,n)}},watch:{numberOfPlayers:function(){this.rollDice()}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(34),a=n.n(i);e.default={name:"StatisticsScreen",components:{Backdrop:a.a}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MDAiIGhlaWdodD0iNjQ4LjgiPgogIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik02MDAgNjQ4LjhIMFY1MDMuNGwxNS04di0yOTRsMTUzLjctNzMuOHYtNThMMzAwIDBsMTMxLjMgNjkuNnY1OEw1ODUgMjAxLjN2Mjk0LjJsMTUgOHYxNDUuM3oiLz4KICA8cGF0aCBkPSJNNTUzLjcgNDY0LjRWMjIxbC0xMTgtNTYuNnYyNDMuNGwxMTggNTYuNnptLTM4OS4yLTU2LjZWMTY0LjRMNDYuNSAyMjF2MjQzLjRsMTE4LTU2LjZ6TTMwMCAzNS41bC0xMDAgNTN2MzAxLjJsMTAwLTUzIDEwMCA1M1Y4OC40bC0xMDAtNTN6bS0yNjguNyA1ODJ2LTk1LjJMMzAwIDM3OS41bDI2OC43IDE0Mi44djk1LjJIMzEuM3oiLz4KPC9zdmc+Cg=="},function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMjQuNyIgaGVpZ2h0PSIyMjcuNCI+CiAgPHBhdGggZD0iTTAgMTkzLjRjMCAxOC44IDE1LjIgMzQgMzQgMzRoMTU2LjdjMTguOCAwIDM0LTE1LjIgMzQtMzRWMzRjMC0xOC44LTE1LjItMzQtMzQtMzRIMzRDMTUuMiAwIDAgMTUuMiAwIDM0djE1OS40eiIvPgogIDxjaXJjbGUgY3g9IjQ3LjciIGN5PSIxODAuNCIgcj0iMjEuMyIgZmlsbD0iI0ZGRiIvPgogIDxjaXJjbGUgY3g9IjQ3LjciIGN5PSI1MSIgcj0iMjEuMyIgZmlsbD0iI0ZGRiIvPgogIDxjaXJjbGUgY3g9IjE3NyIgY3k9IjUxIiByPSIyMS4zIiBmaWxsPSIjRkZGIi8+CiAgPGNpcmNsZSBjeD0iMTc3IiBjeT0iMTgwLjQiIHI9IjIxLjMiIGZpbGw9IiNGRkYiLz4KICA8Y2lyY2xlIGN4PSIxMTIuNCIgY3k9IjExNS43IiByPSIyMS4zIiBmaWxsPSIjRkZGIi8+Cjwvc3ZnPgo="},function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTk2QkI4RkE3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTk2QkI4Rjk3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjU2QTEyNzk3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjU2QTEyN0E3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5WHowqAAAXNElEQVR42uxda4xd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"},function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NS41IiBoZWlnaHQ9Ijk4Ij4KICA8cGF0aCBmaWxsPSIjMEQxMDEzIiBkPSJNNTUuMyA0OWMwLTUuNC0xLjYtMTAuOC01LTE1LTEuNi0xLjgtMy0zLjgtNC42LTUuNS0zLjctMy43LTkuNC00LTE0LTYuMy0uMi0yLjMtMS00LjctLjUtNyAuMi0xIC40LTEuNyAwLTIuNEMzMCAxMCAzMSA3IDMwLjggNC4yYy0uMi0xLjUgMC0zLjMtMS41LTQuMkMyOSAzIDI4IDYgMjcgOWMtLjUgMi4yLS41IDQuNi0xLjUgNi44LjYgMi0uNiA0LTIgNS42LTMgMS41LTYuNCAyLTkgNC0yIDEuNy0zLjggMy02IDQuMy0xLjQgMi0zLjIgMy44LTMuOCA2LjMtMi44IDMuMy0zIDcuOC00LjcgMTEuNyAwIDUuOCAxIDEyIDQuOCAxNi43IDIuNyAyIDQuNiA1IDcuMiA3LjMgMi41IDEuNSA1LjIgMi43IDggNCAxLjYuNSAzLjMuNyA1IDEuMiAxLjQgNyAyLjQgMTQuMyA1IDIxIDEtMi44IDEtNS43IDEuNy04LjUgMS4yLTQuMi0xLTguNS4yLTEyLjUgMS44LTEuOCA1LS42IDcuMi0yIDQtMi42IDguNC01IDExLjQtOSAxLTIuMiAzLjQtMy44IDMuNC02LjUgMC0zLjYgMi03IDEuMy0xMC42ek0yNSA3MWMtMy0xLTUuOC0yLjMtOC4zLTQtMi43LTEuOC0zLjctNS02LjMtNy0yLjUtMy0yLTctMy0xMC40LjUtMi41IDEtNSAxLjItNy4zIDEuMi0yIDMtMy42IDMuNi02IDEuNy0yLjUgNC40LTQuMiA2LjYtNi40IDEuNi0yIDQtMSA2LTEuMiAwIDItLjIgNCAuMyA2IC4zIDEuMiAxIDIuNC43IDMuNy0uNCAyLjcuNiA1LjQgMCA4LTEuNiA1LjcgMCAxMS4zIDAgMTcgMCAyLjQtLjIgNS0uOCA3LjR6bTIyLjQtMTAuN2MtMiAxLjQtMy42IDMtNS4zIDQuOC0zIDItNiA0LjMtOS40IDUuMy4zLTIuNS42LTUtLjItNy42LTItNS42LjUtMTEuNCAxLTE3LS41LTMuNCAwLTctMS43LTEwLS4yLTIuNC44LTQuNyAxLjUtNyAyLjMgMSA0LjUgMi4zIDYuNSA0IDIuMyAxLjcgNiAyLjggNi41IDYgLjIgMi4zIDIuNiAzLjYgMi41IDUuOCAwIDUuMy42IDEwLjgtMS4zIDE1Ljh6Ii8+Cjwvc3ZnPgo="},,function(t,e,n){n(93);var i=n(0)(n(43),n(181),"data-v-48c71764",null);t.exports=i.exports},function(t,e,n){n(91);var i=n(0)(n(44),n(179),"data-v-3b6a878f",null);t.exports=i.exports},function(t,e,n){n(97);var i=n(0)(n(45),n(186),"data-v-7067cca1",null);t.exports=i.exports},function(t,e,n){n(95);var i=n(0)(n(46),n(183),"data-v-66258993",null);t.exports=i.exports},function(t,e,n){n(92);var i=n(0)(n(47),n(180),null,null);t.exports=i.exports},function(t,e,n){n(96);var i=n(0)(n(48),n(184),"data-v-6dd8c81c",null);t.exports=i.exports},function(t,e,n){n(98);var i=n(0)(n(49),n(187),"data-v-77f8559f",null);t.exports=i.exports},function(t,e,n){n(101);var i=n(0)(n(50),n(190),null,null);t.exports=i.exports},function(t,e,n){n(88);var i=n(0)(n(51),n(176),null,null);t.exports=i.exports},function(t,e,n){n(99);var i=n(0)(n(52),n(188),"data-v-7c2ee746",null);t.exports=i.exports},function(t,e,n){n(87);var i=n(0)(n(54),n(175),"data-v-022ddbe2",null);t.exports=i.exports},function(t,e,n){var i=n(0)(n(55),n(185),null,null);t.exports=i.exports},function(t,e,n){n(100);var i=n(0)(null,n(189),"data-v-d5dc436a",null);t.exports=i.exports},function(t,e,n){n(94);var i=n(0)(n(56),n(182),"data-v-53c45b90",null);t.exports=i.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{"enter-active-class":"fadeIn","leave-active-class":"fadeOut"}},[n("router-view")],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"counter-screen",style:t.backgroundGradients},[n("tiles",{attrs:{items:t.players},scopedSlots:t._u([["item",function(t){return[n("player",{attrs:{player:t.item}})]}]])}),t._v(" "),n("settings-menu"),t._v(" "),n("transition",{attrs:{"enter-active-class":"fadeIn","leave-active-class":"fadeOut"}},[n("router-view")],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modify-players"},[n("button",{attrs:{disabled:t.numberOfPlayers>7},on:{click:function(e){t.$store.dispatch("addPlayer")}}},[t._v("\n    Add player\n  ")]),t._v(" "),n("button",{attrs:{disabled:t.numberOfPlayers<1},on:{click:function(e){t.$store.dispatch("removePlayer")}}},[t._v("\n    Remove player\n  ")])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tiles"},[t._l(t.items,function(e,i){return[n("tile",[t._t("item",null,{item:e,index:i})],2)]})],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"backdrop",on:{click:function(e){t.$router.replace("/")}}},[t._t("default")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{"enter-active-class":"fadeIn","leave-active-class":"fadeOut"}},[n("div",{class:["counter","counter--"+t.type],style:t.style},[t.showLabel?n("span",{staticClass:"label"},[t._v("\n      "+t._s(t.label)+"\n    ")]):t._e(),t._v(" "),n("counter-button",{attrs:{icon:"fa fa-minus"},on:{click:t.minusClick}}),t._v(" "),n("div",{staticClass:"count",class:{moreThan100:t.moreThan100}},[n("transition",{attrs:{"enter-active-class":t.enterClass,"leave-active-class":t.leaveClass}},[n("span",{key:t.value,staticClass:"value"},[t._v("\n          "+t._s(t.value)+"\n        ")])]),t._v(" "),n("span",{staticClass:"placeholder"},[t._v("\n        "+t._s(t.value)+"\n      ")])],1),t._v(" "),n("counter-button",{attrs:{icon:"fa fa-plus"},on:{click:t.plusClick}})],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"player"},[t.player.color?n("counter",{attrs:{type:"life",value:t.player.life,label:t.player.id,animated:""},on:{minusClick:function(e){t.decreaseLife(t.player.id,1)},plusClick:function(e){t.increaseLife(t.player.id,1)}}}):n("color-picker",{attrs:{playerId:t.player.id}}),t._v(" "),t.poisonCountersVisible||t.commanderCountersVisible?n("div",{staticClass:"other",style:t.style},[t.poisonCountersVisible?n("counter",{attrs:{type:"poison",value:t.player.poison},on:{minusClick:function(e){t.removePoisonCounter(t.player.id,1)},plusClick:function(e){t.addPoisonCounter(t.player.id,1)}}}):t._e(),t._v(" "),t._l(t.commanders,function(e){return t.commanderCountersVisible&&e.color?n("counter",{key:e.id,attrs:{type:"commander",value:t.player.commanderDamage[e.id]||0,label:e.id},on:{minusClick:function(n){t.removeCommanderDamage({id:t.player.id,amount:1,commanderId:e.id})},plusClick:function(n){t.addCommanderDamage({id:t.player.id,amount:1,commanderId:e.id})}}}):t._e()})],2):t._e()],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{appear:"","enter-active-class":"scaleIn","leave-active-class":"scaleOut"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"color-picker"},t._l(t.manaColors,function(e){return n("img",{key:e,class:e,attrs:{src:"static/mana/"+e+".svg",alt:"Mana symbol",disabled:t.playersColors.includes(e)},on:{click:function(n){t.chooseColor({id:t.playerId,color:e})}}})}))])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("backdrop",[n("div",{staticClass:"content",on:{click:function(t){t.stopPropagation()}}},[n("h2",[t._v("Statistics")])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"die"},[n("transition",{attrs:{"enter-active-class":"fadeInRight","leave-active-class":"fadeOutLeft"}},[n("span",{key:t.value,staticClass:"number",class:"number-"+t.value},t._l(t.value,function(t){return n("span",{staticClass:"dot",class:"dot-"+t})}))])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"icon",class:[this.fontAwesome&&t.button.icon,{"graphic-button":!this.fontAwesome&&!t.button.text},{"text-button":t.button.text},{active:t.button.active}],style:t.style,attrs:{title:t.button.title,disabled:t.button.disabled},on:{click:function(e){e.stopPropagation(),t.button.action(e)}}},[t._v("\n  "+t._s(t.button.text)+"\n")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("backdrop",[n("tiles",{attrs:{items:t.dice},scopedSlots:t._u([["item",function(e){return[n("die",{attrs:{value:e.item},nativeOn:{click:function(n){n.stopPropagation(),t.rollDie(e.index)}}})]}]])})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{staticClass:"counter-button",class:[t.icon,{click:t.animation}],on:{click:t.click,touchend:function(e){e.preventDefault(),t.click(e)},animationend:function(e){t.animation=!1}}})},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"on-clickaway",rawName:"v-on-clickaway",value:t.clickedOutside,expression:"clickedOutside"}],staticClass:"settings-menu",class:{opened:t.settingsMenuOpened}},[n("transition",{attrs:{"enter-active-class":"fadeInRight","leave-active-class":"fadeOutRight"}},[t.settingsMenuOpened?n("div",{staticClass:"icons"},t._l(t.buttons,function(e){return e.hidden?t._e():n("settings-button",{key:e.title,attrs:{button:e}})})):t._e()]),t._v(" "),n("span",{staticClass:"fa fa-cog",style:t.settingsMenuOpened&&{transform:"rotate(-90deg)"},on:{click:function(e){t.$store.dispatch("toggleSettingsMenu")}}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{appear:"","enter-active-class":"fadeIn","leave-active-class":"fadeOut"}},[n("div",{staticClass:"tile",style:t.style},[t._t("default")],2)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("form",[n("input",{attrs:{type:"text",planceholder:"Email"}}),t._v(" "),n("input",{attrs:{type:"text",planceholder:"Password"}}),t._v(" "),n("button",[t._v("Sign In")])]),t._v(" "),n("p",[t._v("Or")]),t._v(" "),n("div",{staticClass:"social-buttons"},[n("button",[t._v("Log in with Facebook")]),t._v(" "),n("button",[t._v("Log in with Twitter")]),t._v(" "),n("button",[t._v("Log in with Google")]),t._v(" "),n("button",[t._v("Log in with GitHub")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-state",class:t.hidden&&"hidden",on:{click:function(e){t.hidden=!t.hidden}}},[t.hidden?n("button",{on:{click:function(e){e.stopPropagation(),t.hidden=!t.hidden}}},[n("i",{staticClass:"fa fa-info-circle"})]):t._e(),t._v(" "),n("p",[t._v("Poison visible: "),n("bi",{attrs:{value:t.poisonCountersVisible}})],1),t._v(" "),n("p",[t._v("Commander visible: "),n("bi",{attrs:{value:t.commanderCountersVisible}})],1),t._v(" "),n("p",[t._v("Settings opened: "),n("bi",{attrs:{value:t.settingsMenuOpened}})],1),t._v(" "),n("hr"),t._v(" "),n("p",[t._v("Number of players: "),n("span",[t._v(t._s(t.numberOfPlayers))])])])},staticRenderFns:[]}},,,,,function(t,e,n){function i(t){return n(a(t))}function a(t){var e=r[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var r={"./commander.svg":155,"./dice.svg":156,"./logo.png":157,"./poison.svg":158};i.keys=function(){return Object.keys(r)},i.resolve=a,t.exports=i,i.id=195}]),[39]);
//# sourceMappingURL=app.3fc92e6fe14cf3a6f1f9.js.map