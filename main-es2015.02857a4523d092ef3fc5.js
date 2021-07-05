(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{0:function(e,t,o){e.exports=o("2v48")},"2v48":function(e,t,o){"use strict";o.r(t);var r=o("ENSU"),n=o("kZht");function s(e){return!0===e}function i(e){return null==e}function l(e){return!i(e)}var c=o("6uGs");let b=(()=>{class e{constructor(t){e.injector=t}static getInjector(){if(i(e.injector))throw new Error("You've forgotten to import `LoggerModule`");return e.injector}}return e.injector=null,e.\u0275fac=function(t){return new(t||e)(n.vb(n.m))},e.\u0275prov=n.nb({token:e,factory:e.\u0275fac}),e})();var a=o("D57K");function u(e){let t;return"undefined"!=typeof Reflect&&"function"==typeof Reflect.ownKeys?t=Reflect.ownKeys(e.prototype):(t=Object.getOwnPropertyNames(e.prototype),"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(e.prototype)))),t.forEach(t=>{if("constructor"===t)return;const o=Object.getOwnPropertyDescriptor(e.prototype,t);"function"==typeof(null==o?void 0:o.value)&&Object.defineProperty(e.prototype,t,function(e,t,o){let r=o.value;if("function"!=typeof r)throw new TypeError("@boundMethod decorator can only be applied to methods not: "+typeof r);let n=!1;return{configurable:!0,get(){if(n||this===e.prototype||this.hasOwnProperty(t)||"function"!=typeof r)return r;const o=r.bind(this);return n=!0,Object.defineProperty(this,t,{configurable:!0,get:()=>o,set(e){r=e,delete this[t]}}),n=!1,o},set(e){r=e}}}(e,t,o))}),e}const h=new n.l("LOGGER_OPTIONS");var g=function(e){return e[e.ALL=1]="ALL",e[e.TRACE=2]="TRACE",e[e.DEBUG=3]="DEBUG",e[e.INFO=4]="INFO",e[e.LOG=5]="LOG",e[e.WARN=6]="WARN",e[e.ERROR=7]="ERROR",e[e.OFF=8]="OFF",e}({});let p=(()=>{class e{constructor(){this.instance=console,this.minLevel=g.ALL,this.globalLineStyle="",this.cssClassMap={},this.useLevelGroup=!0,this.labelColors={[g.TRACE]:"#000080",[g.DEBUG]:"#00BFFE",[g.INFO]:"#000000",[g.WARN]:"#FF6419",[g.ERROR]:"#F1062D"},this.labelNames={[g.TRACE]:"TRACE",[g.DEBUG]:"DEBUG",[g.INFO]:"INFO",[g.WARN]:"WARN",[g.ERROR]:"ERROR"}}format(e,t){return{label:`[${e}]:`,style:t}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=n.nb({token:e,factory:e.\u0275fac}),e})(),d=(()=>{class e{constructor(e){this.options=e,this.minLevel=e.minLevel,this.instance=e.instance}get console(){return this.instance}set console(e){this.instance=e}get noop(){return()=>{}}getTemplateLabel(e){return`%c${e}`}getFormatTemplateLabel(e){return`%c${e} %c%s`}getTemplateWithoutLabel(){return"%c%s"}}return e.\u0275fac=function(t){return new(t||e)(n.vb(h))},e.\u0275prov=n.nb({token:e,factory:e.\u0275fac}),e})(),f=(()=>{class e{constructor(e){this.options=e,this.lineStyle=null}get style(){const e=this.localStyle;return this.clearLocalStyle(),`${this.globalStyles}${e}`}set style(e){this.lineStyle=e}get globalStyles(){return this.options.globalLineStyle?`${this.options.globalLineStyle};`:""}get localStyle(){var e,t;return(null!==(t=null===(e=this.lineStyle)||void 0===e?void 0:e.length)&&void 0!==t?t:0)>0?`${this.lineStyle};`:""}getStyleLabel(e){return`color: ${this.options.labelColors[e]}; font-weight: bold`}setClass(e){const t=e.split(/\s+/g),o=[];t.forEach(e=>{const t=this.options.cssClassMap[e];l(t)&&o.push(t)});const r=o.length?o.join("; "):"";this.lineStyle=`${this.globalStyles}${r}`}clearLocalStyle(){this.lineStyle=""}}return e.\u0275fac=function(t){return new(t||e)(n.vb(h))},e.\u0275prov=n.nb({token:e,factory:e.\u0275fac}),e})();const y={[g.TRACE]:"debug",[g.LOG]:"log",[g.DEBUG]:"info",[g.INFO]:"info",[g.WARN]:"warn",[g.ERROR]:"error"},A=/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g;let m=(()=>{class e{constructor(e,t,o){this.console=e,this.cssFactory=t,this.options=o,this.executePipesGroup=!1,this.counterOpenedGroup=0}close(){this.executePipesGroup&&(this.counterOpenedGroup--,this.console.instance.groupEnd())}closeAll(){for(;this.counterOpenedGroup>0;)this.close()}group(e,t,o,r){const n=this.console.instance.group.bind(this.console.instance);return this.createGroupLogger(n,e,t,o,r)}groupCollapsed(e,t,o,r){const n=this.console.instance.groupCollapsed.bind(this.console.instance);return this.createGroupLogger(n,e,t,o,r)}createGroupLogger(e,t,o,r,n){let s;if(this.console.minLevel<=n){this.executePipesGroup=!0,this.counterOpenedGroup++;const i=this.cssFactory.getStyleLabel(n),{label:c,style:b}=this.getLabel(g[n],i);if(e(`%c${c}`,b,t),l(o)){const e=o(r);this.close(),s=e}}else this.executePipesGroup=!1;return s}getLabel(e,t){return this.options.format(e,t)}}return e.\u0275fac=function(t){return new(t||e)(n.vb(d),n.vb(f),n.vb(h))},e.\u0275prov=n.nb({token:e,factory:e.\u0275fac}),e})(),O=(()=>{class e{constructor(e,t,o,r){this.options=e,this.console=t,this.cssFactory=o,this.groupFactory=r}createLogger(e,t){const o=this.getArgumentsByType(e),r=this.console.minLevel<=e?this.console.instance[y[e]].bind(...o):this.console.noop;return this.options.useLevelGroup?this.defineLevelGroups(e,r,t):r}defineLevelGroups(e,t,o){return Object.defineProperties(t,{group:this.setGroupMethod("group",e,o),groupCollapsed:this.setGroupMethod("groupCollapsed",e,o)}),t}setGroupMethod(e,t,o){return{enumerable:!0,configurable:!0,value:(r,n)=>(this.groupFactory[e].bind(this.groupFactory)(r,n,o,t),o)}}getArgumentsByType(e){const t=this.cssFactory.getStyleLabel(e),o=this.cssFactory.style,r=[this.console.instance];if(e!==g.LOG){const{label:n,style:s}=this.options.format(this.options.labelNames[e],t);if(o){const e=this.console.getFormatTemplateLabel(n);r.push(e,s,o)}else{const e=this.console.getTemplateLabel(n);r.push(e,s)}}else o&&r.push(this.console.getTemplateWithoutLabel(),o);return r}}return e.\u0275fac=function(t){return new(t||e)(n.vb(h),n.vb(d),n.vb(f),n.vb(m))},e.\u0275prov=n.nb({token:e,factory:e.\u0275fac}),e})(),v=(()=>{class e{constructor(){this._string="color:green",this._number="color:darkorange",this._boolean="color:blue",this._null="color:magenta",this._key="color:red",this.lexerTypeFinder=A}colorsJSON(e){let t=e;const o=[];return t=t.replace(this.lexerTypeFinder,e=>{let t=this._number;return/^"/.test(e)?t=/:$/.test(e)?this._key:this._string:/true|false/.test(e)?t=this._boolean:/null/.test(e)&&(t=this._null),o.push(t),o.push(""),`%c${e}%c`}),o.unshift(t),o}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=n.nb({token:e,factory:e.\u0275fac}),e})(),w=(()=>{class e{constructor(e){this.console=e,this.DIGITS_TO_FIX=4,this.SECONDS=1e3}startTime(e,t){let o=null;return!(this.console.minLevel>t)&&(o={startTime:performance.now(),title:e}),o}endTime(e,t,o,r){if(!(this.console.minLevel>t)){const n=y[t],s=this.ensureTime(e,o);(0,r[n])(`TimerLog: ${e.title}`,`took ${s} to execute`)}}ensureTime(e,t){const o=parseFloat((performance.now()-e.startTime).toFixed(this.DIGITS_TO_FIX));return t?`${o}ms`:`${Math.floor(o/this.SECONDS)}s`}}return e.\u0275fac=function(t){return new(t||e)(n.vb(d))},e.\u0275prov=n.nb({token:e,factory:e.\u0275fac}),e})(),k=(()=>{let e=class{constructor(e,t,o,r,n,s,i){this.cssFactory=e,this.console=t,this.factory=o,this.groupFactory=r,this.jsonFactory=n,this.timerFactory=s,this.options=i,this.DEFAULT_DEPTH=2}get clear(){return this.console.instance.clear.bind(this.console.instance)}get table(){return this.console.instance.table.bind(this.console.instance)}get log(){return this.factory.createLogger(g.LOG,this)}get trace(){return this.factory.createLogger(g.TRACE,this)}get assert(){return this.console.instance.assert.bind(this.console.instance)}get debug(){return this.factory.createLogger(g.DEBUG,this)}get info(){return this.factory.createLogger(g.INFO,this)}get warn(){return this.factory.createLogger(g.WARN,this)}get error(){return this.factory.createLogger(g.ERROR,this)}get level(){return this.console.minLevel}set level(e){this.console.minLevel=e}getCurrentLineStyle(){return this.cssFactory.style}clearCssCurrentLine(){this.cssFactory.style=""}setLabels(e){this.options.labelNames=Object.assign(Object.assign({},this.options.labelNames),e)}setColors(e){this.options.labelColors=Object.assign(Object.assign({},this.options.labelColors),e)}pipe(...e){return this.groupFactory.executePipesGroup&&e.forEach(e=>e(this)),this}groupCollapsed(e,t){return this.groupFactory.groupCollapsed(e,t,this,g.INFO),this}close(){return this.groupFactory.close(),this}closeAll(){return this.groupFactory.closeAll(),this}group(e,t){return this.groupFactory.group(e,t,this,g.INFO),this}css(e){return this.cssFactory.style=e,this}prettyJSON(e){return this.jsonFactory.colorsJSON(JSON.stringify(e,null,this.DEFAULT_DEPTH))}cssClass(e){return this.cssFactory.setClass(e),this}startTime(e,t=g.DEBUG){return this.timerFactory.startTime(e,t)}endTime(e,t=g.DEBUG,o=!0){l(e)&&this.timerFactory.endTime(e,t,o,this)}};return e.\u0275fac=function(t){return new(t||e)(n.vb(f),n.vb(d),n.vb(O),n.vb(m),n.vb(v),n.vb(w),n.vb(h))},e.\u0275prov=n.nb({token:e,factory:e.\u0275fac}),e=Object(a.a)([u,Object(a.b)("design:paramtypes",[f,d,O,m,v,w,p])],e),e})();function I(e,t=g.INFO){return(o,r,n)=>{const s=n.value;return n.value=function(...o){return function(e,t,o,r,n,s){const i=b.getInjector().get(k),l=b.getInjector().get(m);l.group.bind(l)("string"==typeof r?r:r(...n),null,i,e);const c=o.apply(s,n);return i.level<=e&&i.close(),c}(t,0,s,e,o,this)},n}}function j(e,t=g.DEBUG,o=!0){return(r,n,s)=>{let i;const l=s.value;return s.value=function(...r){const n=b.getInjector().get(k).startTime(e,t);return i=l.apply(this,r),b.getInjector().get(k).endTime(n,t,o),i},s}}let S=(()=>{class e{constructor(e){this.loggerInjector=e}static forRoot(t={}){return{ngModule:e,providers:[{provide:e.ROOT_OPTIONS,useValue:t},{provide:h,useFactory:e.loggerConfigFactory,deps:[e.ROOT_OPTIONS]}]}}static loggerConfigFactory(e){return Object.assign(new p,e)}}return e.ROOT_OPTIONS=new n.l("ROOT_OPTIONS"),e.\u0275fac=function(t){return new(t||e)(n.vb(b,2))},e.\u0275mod=n.pb({type:e}),e.\u0275inj=n.ob({providers:[k,O,d,m,f,v,w,b]}),e})();var L=o("pMED");let W=(()=>{class e{constructor(e){this.logger=e,this.isLoaded=!1,this.devToolsIsOpen=L.isOpen,this.traceIsWork="trace is worked",this.debugIsWork="debug is worked",this.infoIsWork="info is worked",this.warnIsWork="warn is worked",this.errorIsWork="error is worked"}ngOnInit(){this.isLoaded=!0,window.addEventListener("devtoolschange",e=>{this.devToolsIsOpen=e.detail.isOpen})}exampleBasicMethods(){this.logger.clear(),this.log("log is worked"),this.trace(this.traceIsWork,1,{a:1}),this.debug(this.debugIsWork,2,console),this.info(this.infoIsWork,3,Object),this.warn(this.warnIsWork,4,String),this.error(this.errorIsWork,5,2.55.toFixed())}exampleGroups(){this.logger.clear(),this.logger.groupCollapsed("EXAMPLE 2: show stack",()=>{this.trace(this.traceIsWork,1,{a:1}),this.debug(this.debugIsWork,2,console),this.info(this.infoIsWork,3,Object),this.warn(this.warnIsWork,4,String),this.error(this.errorIsWork,5,2.55.toFixed())}),this.logger.group("Show trace in opened group",({trace:e})=>{for(let t=0;t<20;t++)e(this.traceIsWork,t)}),this.logger.groupCollapsed("Show trace in collapsed group",({debug:e})=>{for(let t=0;t<15;t++)e(this.traceIsWork,t)}).closeAll()}exampleNestedGroups(){this.logger.clear(),this.logger.groupCollapsed("GROUP TEST").pipe(({trace:e,debug:t,info:o,warn:r,error:n})=>{e(this.traceIsWork),t(this.debugIsWork),o(this.infoIsWork),r(this.warnIsWork),n(this.errorIsWork)}).close(),this.logger.group("A").pipe(({trace:e})=>e(this.traceIsWork),({debug:e})=>e(this.debugIsWork),({info:e})=>e(this.infoIsWork),({warn:e})=>e(this.warnIsWork),({error:e})=>e(this.errorIsWork)).groupCollapsed("B").pipe(({trace:e})=>e(this.traceIsWork),({debug:e})=>e(this.debugIsWork),({info:e})=>e(this.infoIsWork),({warn:e})=>e(this.warnIsWork),({error:e})=>e(this.errorIsWork)).group("C").pipe(({trace:e})=>e(this.traceIsWork),({debug:e})=>e(this.debugIsWork),({info:e})=>e(this.infoIsWork),({warn:e})=>e(this.warnIsWork),({error:e})=>e(this.errorIsWork)).closeAll()}exampleSetMinimalLoggingLevel(){this.logger.clear(),this.logger.level=g.INFO,this.logger.log("log is working",1,String),this.trace(this.traceIsWork,4,String),this.debug(this.debugIsWork,4,String),this.warn(this.warnIsWork,4,String),this.error(this.errorIsWork,5,2.55.toFixed()),this.logger.level=g.ALL}exampleSetStyleLine(){this.logger.clear(),this.logger.css("text-transform: uppercase; font-weight: bold").debug("window current ",window),this.logger.css("color: red; text-decoration: underline; font-weight: bold").info("It is awesome logger"),this.debug({a:1}),this.warn("logger.css(...) does not define a global format!"),this.info("For global configuration, use the constructor parameters")}examplePrettyJson(){this.logger.clear();const e={id:1,hello:"world"};this.debug("Classic output json",e),this.logger.log(...this.logger.prettyJSON(e))}exampleLevelGroups(){this.logger.clear(),this.logger.level=g.INFO,this.trace.group("A").pipe(({trace:e})=>e(this.traceIsWork),({debug:e})=>e(this.debugIsWork),({info:e})=>e(this.infoIsWork),({warn:e})=>e(this.warnIsWork),({error:e})=>e(this.errorIsWork)).close().debug.group("B").pipe(({trace:e})=>e(this.traceIsWork),({debug:e})=>e(this.debugIsWork),({info:e})=>e(this.infoIsWork),({warn:e})=>e(this.warnIsWork),({error:e})=>e(this.errorIsWork)).close().info.group("C").pipe(({trace:e})=>e(this.traceIsWork),({debug:e})=>e(this.debugIsWork),({info:e})=>e(this.infoIsWork),({warn:e})=>e(this.warnIsWork),({error:e})=>e(this.errorIsWork)).close().warn.group("D").pipe(({trace:e})=>e(this.traceIsWork),({debug:e})=>e(this.debugIsWork),({info:e})=>e(this.infoIsWork),({warn:e})=>e(this.warnIsWork),({error:e})=>e(this.errorIsWork)).close().error.group("E").pipe(({trace:e})=>e(this.traceIsWork),({debug:e})=>e(this.debugIsWork),({info:e})=>e(this.infoIsWork),({warn:e})=>e(this.warnIsWork),({error:e})=>e(this.errorIsWork)).close(),this.logger.level=g.ALL}exampleSetGlobalStyleLine(){this.logger.clear(),this.logger.css("font-weight: normal; text-decoration: none; font-style: italic;").info(3.14),this.logger.css("font-weight: normal;").info(3.14),this.warn("global format with style!")}exampleCssClasses(){this.logger.clear(),this.logger.cssClass("bold line-through").log("JavaScript sucks","JavaScript is the best"),this.logger.cssClass("code-sandbox").log("\n   @Component({ .. })\n   export class AppComponent { .. }    \n\n"),this.logger.cssClass("bold line-through").debug("JavaScript sucks","JavaScript is the best"),this.logger.level=g.INFO}exampleDecorators(){this.loggerInjection.clear(),this.logger.log(this.helloWorld("Max"))}method(e){return this.loggerInjection.log("group is worked"),e}exampleDecoratorGroups(){this.loggerInjection.clear(),this.method("hello world")}exampleTimeDecorator(){this.logger.clear(),this.log("test log")}exampleTimerDecorator(){this.logger.clear(),this.log("Advanced test log")}helloWorld(e){return this.logger.log("log only in group",e),"hello world"}}return e.\u0275fac=function(t){return new(t||e)(n.rb(k))},e.\u0275cmp=n.lb({type:e,selectors:[["app-root"]],decls:183,vars:6,consts:[["id","app",1,"ext-box"],[1,"int-box"],[1,"container"],[1,"row"],[1,"col-12"],[1,"center","m-bottom"],[1,"center"],["id","console-activate",1,"row","example"],[1,"col-3"],[1,"center-block",3,"click"],[1,"col-6"],["id","console-dis-activate",1,"row","example"]],template:function(e,t){1&e&&(n.ub(0,"div",0),n.Ab(1,"\n    "),n.ub(2,"div",1),n.Ab(3,"\n        "),n.ub(4,"div",2),n.Ab(5,"\n            "),n.ub(6,"div",3),n.Ab(7,"\n                "),n.ub(8,"div",4),n.Ab(9,"\n                    "),n.ub(10,"h3",5),n.Ab(11,"Simple logger for javascript"),n.tb(),n.Ab(12,"\n                    "),n.ub(13,"p",6),n.Ab(14,"\n                        In order to see examples, you need to open the browser console or press F12. "),n.sb(15,"br"),n.Ab(16,"\n                    "),n.tb(),n.Ab(17,"\n                "),n.tb(),n.Ab(18,"\n            "),n.tb(),n.Ab(19,"\n\n            "),n.ub(20,"div",7),n.Ab(21,"\n                "),n.ub(22,"div",8),n.Ab(23,"\n                    "),n.ub(24,"button",9),n.yb("click",function(){return t.exampleBasicMethods()}),n.Ab(25,"Show me"),n.tb(),n.Ab(26,"\n                    "),n.ub(27,"h5",5),n.Ab(28,"\n                        Basic method "),n.sb(29,"br"),n.Ab(30,"\n                        (trace, debug, info, ..)\n                    "),n.tb(),n.Ab(31,"\n                "),n.tb(),n.Ab(32,"\n\n                "),n.ub(33,"div",8),n.Ab(34,"\n                    "),n.ub(35,"button",9),n.yb("click",function(){return t.exampleGroups()}),n.Ab(36,"Show me"),n.tb(),n.Ab(37,"\n                    "),n.ub(38,"h5",5),n.Ab(39,"\n                        Example groups "),n.sb(40,"br"),n.Ab(41,"\n                        (closed, opened)\n                    "),n.tb(),n.Ab(42,"\n                "),n.tb(),n.Ab(43,"\n\n                "),n.ub(44,"div",8),n.Ab(45,"\n                    "),n.ub(46,"button",9),n.yb("click",function(){return t.exampleNestedGroups()}),n.Ab(47,"Show me"),n.tb(),n.Ab(48,"\n                    "),n.ub(49,"h5",5),n.Ab(50,"\n                        Nested groups "),n.sb(51,"br"),n.Ab(52,"\n                        (deep)\n                    "),n.tb(),n.Ab(53,"\n                "),n.tb(),n.Ab(54,"\n\n                "),n.ub(55,"div",8),n.Ab(56,"\n                    "),n.ub(57,"button",9),n.yb("click",function(){return t.exampleSetMinimalLoggingLevel()}),n.Ab(58,"Show me"),n.tb(),n.Ab(59,"\n                    "),n.ub(60,"h5",5),n.Ab(61,"Show only warnings and error "),n.sb(62,"br"),n.tb(),n.Ab(63,"\n                "),n.tb(),n.Ab(64,"\n\n                "),n.ub(65,"div",8),n.Ab(66,"\n                    "),n.ub(67,"button",9),n.yb("click",function(){return t.exampleSetStyleLine()}),n.Ab(68,"Show me"),n.tb(),n.Ab(69,"\n                    "),n.ub(70,"h5",5),n.Ab(71,"\n                        Custom CSS styles "),n.sb(72,"br"),n.Ab(73,"\n                        for line\n                    "),n.tb(),n.Ab(74,"\n                "),n.tb(),n.Ab(75,"\n\n                "),n.ub(76,"div",8),n.Ab(77,"\n                    "),n.ub(78,"button",9),n.yb("click",function(){return t.examplePrettyJson()}),n.Ab(79,"Show me"),n.tb(),n.Ab(80,"\n                    "),n.ub(81,"h5",5),n.Ab(82,"\n                        Pretty JSON "),n.sb(83,"br"),n.Ab(84,"\n                        (output)\n                    "),n.tb(),n.Ab(85,"\n                "),n.tb(),n.Ab(86,"\n\n                "),n.ub(87,"div",8),n.Ab(88,"\n                    "),n.ub(89,"button",9),n.yb("click",function(){return t.exampleLevelGroups()}),n.Ab(90,"Show me"),n.tb(),n.Ab(91,"\n                    "),n.ub(92,"h5",5),n.Ab(93,"\n                        Level groups "),n.sb(94,"br"),n.Ab(95,"\n                        (trace, debug, info, ..)\n                    "),n.tb(),n.Ab(96,"\n                "),n.tb(),n.Ab(97,"\n\n                "),n.ub(98,"div",8),n.Ab(99,"\n                    "),n.ub(100,"button",9),n.yb("click",function(){return t.exampleSetGlobalStyleLine()}),n.Ab(101,"Show me"),n.tb(),n.Ab(102,"\n                    "),n.ub(103,"h5",5),n.Ab(104,"\n                        Global style line"),n.sb(105,"br"),n.Ab(106,"\n                        (css global style)\n                    "),n.tb(),n.Ab(107,"\n                "),n.tb(),n.Ab(108,"\n\n                "),n.ub(109,"div",8),n.Ab(110,"\n                    "),n.ub(111,"button",9),n.yb("click",function(){return t.exampleCssClasses()}),n.Ab(112,"Show me"),n.tb(),n.Ab(113,"\n                    "),n.ub(114,"h5",5),n.Ab(115,"\n                        CSS classes"),n.sb(116,"br"),n.Ab(117,"\n                        (set in console)\n                    "),n.tb(),n.Ab(118,"\n                "),n.tb(),n.Ab(119,"\n\n                "),n.ub(120,"div",8),n.Ab(121,"\n                    "),n.ub(122,"button",9),n.yb("click",function(){return t.exampleDecorators()}),n.Ab(123,"Show me"),n.tb(),n.Ab(124,"\n                    "),n.ub(125,"h5",5),n.Ab(126,"Decorator"),n.sb(127,"br"),n.tb(),n.Ab(128,"\n                "),n.tb(),n.Ab(129,"\n\n                "),n.ub(130,"div",8),n.Ab(131,"\n                    "),n.ub(132,"button",9),n.yb("click",function(){return t.exampleDecoratorGroups()}),n.Ab(133,"Show me"),n.tb(),n.Ab(134,"\n                    "),n.ub(135,"h5",5),n.Ab(136,"\n                        Decorator group"),n.sb(137,"br"),n.Ab(138,"\n                        with function title\n                    "),n.tb(),n.Ab(139,"\n                "),n.tb(),n.Ab(140,"\n\n                "),n.ub(141,"div",8),n.Ab(142,"\n                    "),n.ub(143,"button",9),n.yb("click",function(){return t.exampleTimeDecorator()}),n.Ab(144,"Show me"),n.tb(),n.Ab(145,"\n                    "),n.ub(146,"h5",5),n.Ab(147,"Decorator timer"),n.sb(148,"br"),n.tb(),n.Ab(149,"\n                "),n.tb(),n.Ab(150,"\n\n                "),n.ub(151,"div",10),n.Ab(152,"\n                    "),n.ub(153,"button",9),n.yb("click",function(){return t.exampleTimerDecorator()}),n.Ab(154,"Show me"),n.tb(),n.Ab(155,"\n                    "),n.ub(156,"h5",5),n.Ab(157,"Advanced timer decorator"),n.sb(158,"br"),n.tb(),n.Ab(159,"\n                "),n.tb(),n.Ab(160,"\n\n                "),n.ub(161,"div",10),n.Ab(162,"\n                    "),n.ub(163,"button",9),n.yb("click",function(){return t.exampleBasicMethods()}),n.Ab(164,"Show me"),n.tb(),n.Ab(165,"\n                    "),n.ub(166,"h5",5),n.Ab(167,"Full configuration"),n.tb(),n.Ab(168,"\n                "),n.tb(),n.Ab(169,"\n            "),n.tb(),n.Ab(170,"\n        "),n.tb(),n.Ab(171,"\n\n        "),n.ub(172,"div",11),n.Ab(173,"\n            "),n.ub(174,"div",4),n.Ab(175,"\n                "),n.ub(176,"h4",5),n.Ab(177,"You need open console"),n.tb(),n.Ab(178,"\n            "),n.tb(),n.Ab(179,"\n        "),n.tb(),n.Ab(180,"\n    "),n.tb(),n.Ab(181,"\n"),n.tb(),n.Ab(182,"\n")),2&e&&(n.kb("load",t.isLoaded),n.jb(20),n.kb("no-display",!t.devToolsIsOpen),n.jb(152),n.kb("no-display",t.devToolsIsOpen))},styles:[".ext-box{display:none}.ext-box.load{display:table;width:100%;height:100%}.int-box{display:table-cell;vertical-align:middle;opacity:0}.int-box,.load .int-box{transition:opacity .3s ease-out}.load .int-box{opacity:1}.center-block{margin:0 auto;display:block;padding:10px}.example.no-display{opacity:0;height:0;overflow:hidden}.example,.example.no-display{transition:opacity .3s ease-out}.example{opacity:1;height:auto}"],encapsulation:2,changeDetection:0}),Object(a.a)([(e,t)=>{Object.defineProperty(e,t,{configurable:!1,get:()=>b.getInjector().get(k)})},Object(a.b)("design:type",k)],e.prototype,"loggerInjection",void 0),Object(a.a)([(e,t)=>{Object.defineProperty(e,t,{configurable:!1,get:()=>b.getInjector().get(k).trace})},Object(a.b)("design:type",Object)],e.prototype,"trace",void 0),Object(a.a)([(e,t)=>{Object.defineProperty(e,t,{configurable:!1,get:()=>b.getInjector().get(k).debug})},Object(a.b)("design:type",Object)],e.prototype,"debug",void 0),Object(a.a)([(e,t)=>{Object.defineProperty(e,t,{configurable:!1,get:()=>b.getInjector().get(k).info})},Object(a.b)("design:type",Object)],e.prototype,"info",void 0),Object(a.a)([(e,t)=>{Object.defineProperty(e,t,{configurable:!1,get:()=>b.getInjector().get(k).error})},Object(a.b)("design:type",Object)],e.prototype,"error",void 0),Object(a.a)([(e,t)=>{Object.defineProperty(e,t,{configurable:!1,get:()=>b.getInjector().get(k).warn})},Object(a.b)("design:type",Object)],e.prototype,"warn",void 0),Object(a.a)([(e,t)=>{Object.defineProperty(e,t,{configurable:!1,get:()=>b.getInjector().get(k).log})},Object(a.b)("design:type",Object)],e.prototype,"log",void 0),Object(a.a)([I(e=>`Test group with ${e}`),Object(a.b)("design:type",Function),Object(a.b)("design:paramtypes",[String]),Object(a.b)("design:returntype",String)],e.prototype,"method",null),Object(a.a)([j("Test timer"),Object(a.b)("design:type",Function),Object(a.b)("design:paramtypes",[]),Object(a.b)("design:returntype",void 0)],e.prototype,"exampleTimeDecorator",null),Object(a.a)([j("Advanced timer",g.WARN,!1),Object(a.b)("design:type",Function),Object(a.b)("design:paramtypes",[]),Object(a.b)("design:returntype",void 0)],e.prototype,"exampleTimerDecorator",null),Object(a.a)([I("test title",g.WARN),Object(a.b)("design:type",Function),Object(a.b)("design:paramtypes",[String]),Object(a.b)("design:returntype",String)],e.prototype,"helloWorld",null),e})(),x=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.pb({type:e,bootstrap:[W]}),e.\u0275inj=n.ob({providers:[],imports:[[S.forRoot(s(!0)?{useLevelGroup:!0,cssClassMap:{bold:"font-weight: bold","line-through":"text-decoration: line-through","code-sandbox":"\n                            color: #666;\n                            background: #f4f4f4;\n                            border-left: 3px solid #f36d33;\n                            font-family: monospace;\n                            font-size: 15px;"}}:{}),r.a,c.a]]}),e})();s(!0)&&Object(n.H)(),r.b().bootstrapModule(x).catch(e=>console.error(e))},zn8P:function(e,t){function o(e){return Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}o.keys=function(){return[]},o.resolve=o,e.exports=o,o.id="zn8P"}},[[0,0,5]]]);