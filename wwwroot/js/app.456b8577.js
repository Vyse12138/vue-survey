(function(e){function t(t){for(var i,a,o=t[0],c=t[1],u=t[2],l=0,b=[];l<o.length;l++)a=o[l],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&b.push(r[a][0]),r[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);d&&d(t);while(b.length)b.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],i=!0,a=1;a<n.length;a++){var c=n[a];0!==r[c]&&(i=!1)}i&&(s.splice(t--,1),e=o(o.s=n[0]))}return e}var i={},r={app:0},s=[];function a(e){return o.p+"js/"+({}[e]||e)+"."+{"chunk-2d0d6361":"d264d785"}[e]+".js"}function o(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,i){n=r[e]=[t,i]}));t.push(n[2]=i);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=a(e);var u=new Error;s=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=r[e];if(0!==n){if(n){var i=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+i+": "+s+")",u.name="ChunkLoadError",u.type=i,u.request=s,n[1](u)}r[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:c})}),12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(t)},o.m=e,o.c=i,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var d=u;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1645:function(e,t,n){},"17d7":function(e,t,n){"use strict";n("6bff")},"23ed":function(e,t,n){"use strict";n("c2c7")},2662:function(e,t,n){"use strict";n("6517")},"3bca":function(e,t,n){"use strict";n("1645")},"4ee6":function(e,t,n){"use strict";n("8979")},"522a":function(e,t,n){},"53b2":function(e,t,n){"use strict";n("f9a2")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("7a23");function r(e,t){var n=Object(i["x"])("router-view");return Object(i["q"])(),Object(i["e"])(n)}n("23ed");const s={};s.render=r;var a=s,o=(n("d3b7"),n("6c02")),c=Object(i["D"])("data-v-42ae4229");Object(i["t"])("data-v-42ae4229");var u={class:"home"},l=Object(i["g"])(" SURVEY ");Object(i["r"])();var d=c((function(e,t,n,r,s,a){var o=Object(i["x"])("router-link");return Object(i["q"])(),Object(i["e"])("div",u,[Object(i["h"])(o,{to:"/survey",class:"button"},{default:c((function(){return[l]})),_:1})])})),b={name:"Home"};n("53b2");b.render=d,b.__scopeId="data-v-42ae4229";var f=b,h=(n("a4d3"),n("e01a"),Object(i["D"])("data-v-4cf00f24"));Object(i["t"])("data-v-4cf00f24");var p={key:0,class:"result"},v={class:"heading"};Object(i["r"])();var O=h((function(e,t,n,r,s,a){var o=Object(i["x"])("ResultPieChart"),c=Object(i["x"])("ResultBarChart");return a.securityCheck()?(Object(i["q"])(),Object(i["e"])("div",p,[Object(i["h"])("div",v,[Object(i["h"])("h1",null,Object(i["z"])(s.title),1),Object(i["h"])("h3",null,Object(i["z"])(s.description),1)]),(Object(i["q"])(!0),Object(i["e"])(i["a"],null,Object(i["w"])(s.results,(function(e){return Object(i["q"])(),Object(i["e"])("div",{key:e.id},[1===e.items.length?(Object(i["q"])(),Object(i["e"])(o,{key:0,question:e.question,items:e.items,id:e.id},null,8,["question","items","id"])):Object(i["f"])("",!0),1!==e.items.length?(Object(i["q"])(),Object(i["e"])(c,{key:1,question:e.question,items:e.items,id:e.id},null,8,["question","items","id"])):Object(i["f"])("",!0)])})),128))])):Object(i["f"])("",!0)})),m=(n("c740"),n("b0c0"),n("ac1f"),n("466d"),n("b85c")),j=Object(i["D"])("data-v-42eb60b0");Object(i["t"])("data-v-42eb60b0");var y={class:"resultPieChart"};Object(i["r"])();var g=j((function(e,t,n,r,s,a){var o=Object(i["x"])("VueEcharts");return Object(i["q"])(),Object(i["e"])("div",y,[Object(i["h"])(o,{option:s.option,style:{height:"300px"}},null,8,["option"])])})),w=n("6f08"),q={name:"ResultPieChart",components:{VueEcharts:w["a"]},computed:{getResults:function(){return this.items[0].result}},props:{question:String,items:Array,id:String},data:function(){return{option:{title:{textAlign:"left",text:"".concat(this.question),subtext:"",left:"left"},tooltip:{trigger:"item"},legend:{orient:"vertical",right:"20%",top:"middle"},series:[{type:"pie",radius:"70%",center:["30%","50%"],data:[],label:{show:!0,position:"inside",formatter:"{d}%"},emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]}}},created:function(){var e=0;for(var t in this.getResults)e+=this.getResults[t];this.option.title.subtext="".concat(e," responses");var n=[];for(var i in this.getResults){var r={value:this.getResults[i],name:i};n.push(r)}this.option.series[0].data=n}};n("3bca");q.render=g,q.__scopeId="data-v-42eb60b0";var k=q,C=Object(i["D"])("data-v-a106764e");Object(i["t"])("data-v-a106764e");var S={class:"resultBarChart"};Object(i["r"])();var I=C((function(e,t,n,r,s,a){var o=Object(i["x"])("VueEcharts");return Object(i["q"])(),Object(i["e"])("div",S,[Object(i["h"])(o,{option:s.option,style:{height:"300px"}},null,8,["option"])])})),x={name:"ResultBarChart",components:{VueEcharts:w["a"]},computed:{getResults:function(){return this.items[0].result}},props:{question:String,items:Array,id:String},data:function(){return{option:{title:{textAlign:"left",text:"".concat(this.question),subtext:"",left:"left"},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:[]},xAxis:{type:"category",axisTick:{show:!1},data:[]},yAxis:{type:"value"},series:[]}}},created:function(){var e=0;for(var t in this.getResults)e+=this.getResults[t];this.option.title.subtext="".concat(e," responses");var n=[];for(var i in this.items[0].result)n.push(i);this.option.legend.data=n;var r,s=[],a=Object(m["a"])(this.items);try{for(a.s();!(r=a.n()).done;){var o=r.value;s.push(o.name)}}catch(p){a.e(p)}finally{a.f()}this.option.xAxis.data=s;var c=[],u=n.length;while(u--){var l,d={type:"bar",name:n[u]},b=[],f=Object(m["a"])(this.items);try{for(f.s();!(l=f.n()).done;){var h=l.value;b.push(h.result[n[u]])}}catch(p){f.e(p)}finally{f.f()}d.data=b,c.unshift(d)}this.option.series=c}};n("2662");x.render=I,x.__scopeId="data-v-a106764e";var A=x,_=n("bc3a"),E=n.n(_),P={name:"Result",components:{ResultPieChart:k,ResultBarChart:A},props:{surveyID:String,securityKey:String},data:function(){return{resultSet:[],title:"",description:"",results:[],loading:!0,error:!1}},methods:{securityCheck:function(){return!!this.securityKey.match(/kyle/)}},created:function(){var e=this;E.a.get("https://run.mocky.io/v3/3bd1adff-b50d-4ef8-8682-4a8fa4d46b86").then((function(t){e.resultSet=t.data,e.title=e.resultSet[0].surveyName,e.description=e.resultSet[0].description,e.results=[];var n,i=Object(m["a"])(e.resultSet[0].questions);try{for(i.s();!(n=i.n()).done;){var r=n.value;if(1===r.isCompulsory&&0!==r.items.length){var s={};s.id=r.id,s.question=r.body,s.items=[];var a,o=Object(m["a"])(r.items);try{for(o.s();!(a=o.n()).done;){var c=a.value,u={};u.name=c.name,u.result={};var l,d=Object(m["a"])(c.options);try{for(d.s();!(l=d.n()).done;){var b=l.value;u.result[b]=0}}catch(y){d.e(y)}finally{d.f()}s.items.push(u)}}catch(y){o.e(y)}finally{o.f()}e.results.push(s)}}}catch(y){i.e(y)}finally{i.f()}var f,h=Object(m["a"])(e.resultSet);try{for(h.s();!(f=h.n()).done;){var p=f.value;if(p.isCompleted){var v,O=Object(m["a"])(p.questions);try{var j=function(){var t=v.value;if(t.isCompulsory&&0!==t.items.length){var n,i=Object(m["a"])(t.items);try{var r=function(){var i=n.value,r=e.results.findIndex((function(e){return e.id===t.id})),s=e.results[r].items.findIndex((function(e){return e.name===i.name}))||0,a=i.answer;e.results[r].items[s].result[a]+=1};for(i.s();!(n=i.n()).done;)r()}catch(y){i.e(y)}finally{i.f()}}};for(O.s();!(v=O.n()).done;)j()}catch(y){O.e(y)}finally{O.f()}}}}catch(y){h.e(y)}finally{h.f()}})).catch((function(){e.error=!0})).finally((function(){e.loading=!1}))}};n("5c78");P.render=O,P.__scopeId="data-v-4cf00f24";var R=P,W=Object(i["D"])("data-v-1bdadce0");Object(i["t"])("data-v-1bdadce0");var M={class:"survey"},B=Object(i["h"])("div",{class:"frontImg"},null,-1),z={key:0,class:"loading"},D={key:1,class:"loading"},T={key:2},V={key:0,class:"heading"};Object(i["r"])();var N=W((function(e,t,n,r,s,a){var o=Object(i["x"])("MultipleChoice"),c=Object(i["x"])("OpenEnded");return Object(i["q"])(),Object(i["e"])("div",M,[B,s.loading?(Object(i["q"])(),Object(i["e"])("h2",z,"Loading...")):Object(i["f"])("",!0),s.error?(Object(i["q"])(),Object(i["e"])("h2",D,"There was some error...")):Object(i["f"])("",!0),s.loading||s.error?Object(i["f"])("",!0):(Object(i["q"])(),Object(i["e"])("div",T,[s.loading||s.error?Object(i["f"])("",!0):(Object(i["q"])(),Object(i["e"])("div",V,[Object(i["h"])("h1",null,Object(i["z"])(s.data.surveyName),1),Object(i["h"])("h3",null,Object(i["z"])(s.data.description),1)])),(Object(i["q"])(!0),Object(i["e"])(i["a"],null,Object(i["w"])(s.data.questions,(function(e){return Object(i["q"])(),Object(i["e"])("div",{key:e.id},[e.items.length>0?(Object(i["q"])(),Object(i["e"])(o,{key:0,onSaveAnswerWithSingleItem:a.saveAnswerWithSingleItem,onSaveAnswerWithMultipleItems:a.saveAnswerWithMultipleItems,body:e.body,isCompulsory:e.isCompulsory,items:e.items,id:e.id,unfinished:s.unfinished[e.id]},null,8,["onSaveAnswerWithSingleItem","onSaveAnswerWithMultipleItems","body","isCompulsory","items","id","unfinished"])):Object(i["f"])("",!0),0===e.items.length?(Object(i["q"])(),Object(i["e"])(c,{key:1,onSaveAnswer:a.saveAnswer,id:e.id,body:e.body,isCompulsory:e.isCompulsory,unfinished:s.unfinished[e.id]},null,8,["onSaveAnswer","id","body","isCompulsory","unfinished"])):Object(i["f"])("",!0)])})),128)),Object(i["h"])("button",{class:"submit",onClick:t[1]||(t[1]=Object(i["C"])((function(){return a.submitSurvey&&a.submitSurvey.apply(a,arguments)}),["prevent"]))}," submit ")]))])})),$=(n("7db0"),n("4160"),n("159b"),Object(i["D"])("data-v-daed431c"));Object(i["t"])("data-v-daed431c");var K={class:"multipleChoice"},F={class:"questionBody"},L={key:0,class:"isCompulsory"},H=Object(i["h"])("h3",null,"Please finish this question!",-1),J={key:1,class:"questionItem"},U={key:2,class:"questionItems"},X=Object(i["h"])("th",null,null,-1);Object(i["r"])();var Y=$((function(e,t,n,r,s,a){return Object(i["q"])(),Object(i["e"])("div",K,[Object(i["h"])("h3",F,[Object(i["g"])(Object(i["z"])(n.body)+" ",1),n.isCompulsory?(Object(i["q"])(),Object(i["e"])("span",L,"*")):Object(i["f"])("",!0)]),n.unfinished?(Object(i["q"])(),Object(i["e"])("div",{key:0,id:n.id,class:"required"},[H],8,["id"])):Object(i["f"])("",!0),1===n.items.length?(Object(i["q"])(),Object(i["e"])("table",J,[(Object(i["q"])(!0),Object(i["e"])(i["a"],null,Object(i["w"])(a.getFirstItemOptions,(function(e){return Object(i["q"])(),Object(i["e"])("tr",{class:"",key:e},[Object(i["h"])("th",null,Object(i["z"])(e),1),Object(i["h"])("td",null,[Object(i["h"])("input",{type:"radio",value:e,name:n.id,onClick:t[1]||(t[1]=function(){return a.saveAnswerWithSingleItem&&a.saveAnswerWithSingleItem.apply(a,arguments)})},null,8,["value","name"])])])})),128))])):(Object(i["q"])(),Object(i["e"])("table",U,[Object(i["h"])("tr",null,[X,(Object(i["q"])(!0),Object(i["e"])(i["a"],null,Object(i["w"])(a.getFirstItemOptions,(function(e){return Object(i["q"])(),Object(i["e"])("th",{key:e},Object(i["z"])(e),1)})),128))]),(Object(i["q"])(!0),Object(i["e"])(i["a"],null,Object(i["w"])(a.getItems,(function(e){return Object(i["q"])(),Object(i["e"])("tr",{class:"choice",key:e},[Object(i["h"])("th",null,Object(i["z"])(e.name),1),(Object(i["q"])(!0),Object(i["e"])(i["a"],null,Object(i["w"])(e.options,(function(r){return Object(i["q"])(),Object(i["e"])("td",{key:r},[Object(i["h"])("input",{type:"radio",id:e.name,value:r,name:n.id+"-"+e.name,onClick:t[2]||(t[2]=function(){return a.saveAnswerWithMultipleItems&&a.saveAnswerWithMultipleItems.apply(a,arguments)})},null,8,["id","value","name"])])})),128))])})),128))]))])})),G=(n("a9e3"),{name:"MultipleChoice",props:{body:String,isCompulsory:Number,items:Array,id:String,unfinished:Boolean},computed:{getFirstItemOptions:function(){return this.items[0].options},getItems:function(){return this.items}},methods:{saveAnswerWithSingleItem:function(e){this.$emit("saveAnswerWithSingleItem",this.id,e.target.value)},saveAnswerWithMultipleItems:function(e){this.$emit("saveAnswerWithMultipleItems",this.id,e.target.id,e.target.value)}}});n("c0a5");G.render=Y,G.__scopeId="data-v-daed431c";var Q=G,Z=Object(i["D"])("data-v-4c223a56");Object(i["t"])("data-v-4c223a56");var ee={class:"openEnded"},te={class:"questionBody"},ne={key:0,class:"isCompulsory"},ie=Object(i["h"])("h3",null,"Please finish this question!",-1);Object(i["r"])();var re=Z((function(e,t,n,r,s,a){return Object(i["q"])(),Object(i["e"])("div",ee,[Object(i["h"])("h3",te,[Object(i["g"])(Object(i["z"])(n.body)+" ",1),n.isCompulsory?(Object(i["q"])(),Object(i["e"])("span",ne,"*")):Object(i["f"])("",!0)]),n.unfinished?(Object(i["q"])(),Object(i["e"])("div",{key:0,id:n.id,class:"required"},[ie],8,["id"])):Object(i["f"])("",!0),Object(i["h"])("textarea",{class:"input",rows:"10",onKeyup:t[1]||(t[1]=function(){return a.saveAnswer&&a.saveAnswer.apply(a,arguments)})},null,32)])})),se={name:"OpenEnded",props:{body:String,isCompulsory:Number,id:String,unfinished:Boolean},methods:{saveAnswer:function(e){this.$emit("saveAnswer",this.id,e.target.value)}}};n("4ee6");se.render=re,se.__scopeId="data-v-4c223a56";var ae=se,oe={name:"Home",components:{MultipleChoice:Q,OpenEnded:ae},data:function(){return{data:{surveyName:"",description:"",isCompleted:0,questions:[{id:"",body:"",isCompulsory:0,items:[{name:"",answer:null,options:[]}]}]},loading:!0,error:!1,unfinished:[]}},created:function(){var e=this;E.a.get("https://run.mocky.io/v3/13048afe-8cd5-4417-a6ae-c83f0a5fb00c").then((function(t){e.data=t.data})).catch((function(){e.error=!0})).finally((function(){e.loading=!1}))},methods:{saveAnswerWithSingleItem:function(e,t){this.data.questions.find((function(t){return t.id===e})).items[0].answer=t},saveAnswerWithMultipleItems:function(e,t,n){this.data.questions.find((function(t){return t.id===e})).items.find((function(e){return e.name===t})).answer=n},saveAnswer:function(e,t){this.data.questions.find((function(t){return t.id===e})).answer=t},submitSurvey:function(){var e=this;this.data.questions.forEach((function(t){if(1===t.isCompulsory)if(t.items)t.items.forEach((function(n){if(e.unfinished[t.id]=!1,null===n.answer)throw e.unfinished[t.id]=!0,setTimeout((function(){document.getElementById(t.id).scrollIntoView({behavior:"smooth",block:"center"})}),0),new Error("A compulsory question is not being answered.")}));else if(e.unfinished[t.id]=!1,null===t.answer)throw e.unfinished[t.id]=!0,setTimeout((function(){document.getElementById(t.id).scrollIntoView({behavior:"smooth",block:"center"})}),0),new Error("A compulsory question is not being answered.")})),this.data.isCompleted=1,E.a.post("url goes here",this.data).then((function(){e.$router.push("/gratitude")})).catch((function(){console.log(e.data),alert("submit failed"),e.$router.push("/gratitude")}))}}};n("17d7");oe.render=N,oe.__scopeId="data-v-1bdadce0";var ce=oe,ue=[{path:"/",component:f},{path:"/survey",component:ce},{path:"/result/:surveyID/:securityKey",component:R,props:!0},{path:"/gratitude",component:function(){return n.e("chunk-2d0d6361").then(n.bind(null,"721a"))}}],le=Object(o["a"])({history:Object(o["b"])(),routes:ue}),de=le;Object(i["d"])(a).use(de).mount("#app")},"5c78":function(e,t,n){"use strict";n("8948")},6517:function(e,t,n){},"6bff":function(e,t,n){},8948:function(e,t,n){},8979:function(e,t,n){},c0a5:function(e,t,n){"use strict";n("522a")},c2c7:function(e,t,n){},f9a2:function(e,t,n){}});
//# sourceMappingURL=app.456b8577.js.map