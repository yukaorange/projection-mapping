(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();var Fo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Xa(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function Qv(i,t){for(var e=-1,n=i==null?0:i.length;++e<n&&t(i[e],e,i)!==!1;);return i}var tg=Qv;function eg(i){return function(t,e,n){for(var r=-1,s=Object(t),a=n(t),o=a.length;o--;){var l=a[i?o:++r];if(e(s[l],l,s)===!1)break}return t}}var ng=eg,ig=ng,rg=ig(),sg=rg;function og(i,t){for(var e=-1,n=Array(i);++e<i;)n[e]=t(e);return n}var ag=og,lg=typeof Fo=="object"&&Fo&&Fo.Object===Object&&Fo,Cf=lg,cg=Cf,ug=typeof self=="object"&&self&&self.Object===Object&&self,hg=cg||ug||Function("return this")(),gi=hg,dg=gi,pg=dg.Symbol,$a=pg,bh=$a,Af=Object.prototype,fg=Af.hasOwnProperty,mg=Af.toString,Ns=bh?bh.toStringTag:void 0;function _g(i){var t=fg.call(i,Ns),e=i[Ns];try{i[Ns]=void 0;var n=!0}catch{}var r=mg.call(i);return n&&(t?i[Ns]=e:delete i[Ns]),r}var vg=_g,gg=Object.prototype,bg=gg.toString;function xg(i){return bg.call(i)}var yg=xg,xh=$a,wg=vg,Eg=yg,Mg="[object Null]",Sg="[object Undefined]",yh=xh?xh.toStringTag:void 0;function Tg(i){return i==null?i===void 0?Sg:Mg:yh&&yh in Object(i)?wg(i):Eg(i)}var xo=Tg;function Cg(i){return i!=null&&typeof i=="object"}var yo=Cg,Ag=xo,Pg=yo,Rg="[object Arguments]";function Lg(i){return Pg(i)&&Ag(i)==Rg}var Dg=Lg,wh=Dg,Ig=yo,Pf=Object.prototype,Og=Pf.hasOwnProperty,Ug=Pf.propertyIsEnumerable,Ng=wh(function(){return arguments}())?wh:function(i){return Ig(i)&&Og.call(i,"callee")&&!Ug.call(i,"callee")},Rf=Ng,Fg=Array.isArray,Kn=Fg,Ma={exports:{}};function Bg(){return!1}var kg=Bg;Ma.exports;(function(i,t){var e=gi,n=kg,r=t&&!t.nodeType&&t,s=r&&!0&&i&&!i.nodeType&&i,a=s&&s.exports===r,o=a?e.Buffer:void 0,l=o?o.isBuffer:void 0,c=l||n;i.exports=c})(Ma,Ma.exports);var Lf=Ma.exports,zg=9007199254740991,Vg=/^(?:0|[1-9]\d*)$/;function Hg(i,t){var e=typeof i;return t=t??zg,!!t&&(e=="number"||e!="symbol"&&Vg.test(i))&&i>-1&&i%1==0&&i<t}var Df=Hg,Gg=9007199254740991;function Wg(i){return typeof i=="number"&&i>-1&&i%1==0&&i<=Gg}var ru=Wg,Xg=xo,$g=ru,jg=yo,qg="[object Arguments]",Yg="[object Array]",Kg="[object Boolean]",Zg="[object Date]",Jg="[object Error]",Qg="[object Function]",t0="[object Map]",e0="[object Number]",n0="[object Object]",i0="[object RegExp]",r0="[object Set]",s0="[object String]",o0="[object WeakMap]",a0="[object ArrayBuffer]",l0="[object DataView]",c0="[object Float32Array]",u0="[object Float64Array]",h0="[object Int8Array]",d0="[object Int16Array]",p0="[object Int32Array]",f0="[object Uint8Array]",m0="[object Uint8ClampedArray]",_0="[object Uint16Array]",v0="[object Uint32Array]",le={};le[c0]=le[u0]=le[h0]=le[d0]=le[p0]=le[f0]=le[m0]=le[_0]=le[v0]=!0;le[qg]=le[Yg]=le[a0]=le[Kg]=le[l0]=le[Zg]=le[Jg]=le[Qg]=le[t0]=le[e0]=le[n0]=le[i0]=le[r0]=le[s0]=le[o0]=!1;function g0(i){return jg(i)&&$g(i.length)&&!!le[Xg(i)]}var b0=g0;function x0(i){return function(t){return i(t)}}var y0=x0,Sa={exports:{}};Sa.exports;(function(i,t){var e=Cf,n=t&&!t.nodeType&&t,r=n&&!0&&i&&!i.nodeType&&i,s=r&&r.exports===n,a=s&&e.process,o=function(){try{var l=r&&r.require&&r.require("util").types;return l||a&&a.binding&&a.binding("util")}catch{}}();i.exports=o})(Sa,Sa.exports);var w0=Sa.exports,E0=b0,M0=y0,Eh=w0,Mh=Eh&&Eh.isTypedArray,S0=Mh?M0(Mh):E0,If=S0,T0=ag,C0=Rf,A0=Kn,P0=Lf,R0=Df,L0=If,D0=Object.prototype,I0=D0.hasOwnProperty;function O0(i,t){var e=A0(i),n=!e&&C0(i),r=!e&&!n&&P0(i),s=!e&&!n&&!r&&L0(i),a=e||n||r||s,o=a?T0(i.length,String):[],l=o.length;for(var c in i)(t||I0.call(i,c))&&!(a&&(c=="length"||r&&(c=="offset"||c=="parent")||s&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||R0(c,l)))&&o.push(c);return o}var U0=O0,N0=Object.prototype;function F0(i){var t=i&&i.constructor,e=typeof t=="function"&&t.prototype||N0;return i===e}var B0=F0;function k0(i,t){return function(e){return i(t(e))}}var z0=k0,V0=z0,H0=V0(Object.keys,Object),G0=H0,W0=B0,X0=G0,$0=Object.prototype,j0=$0.hasOwnProperty;function q0(i){if(!W0(i))return X0(i);var t=[];for(var e in Object(i))j0.call(i,e)&&e!="constructor"&&t.push(e);return t}var Y0=q0;function K0(i){var t=typeof i;return i!=null&&(t=="object"||t=="function")}var su=K0,Z0=xo,J0=su,Q0="[object AsyncFunction]",tb="[object Function]",eb="[object GeneratorFunction]",nb="[object Proxy]";function ib(i){if(!J0(i))return!1;var t=Z0(i);return t==tb||t==eb||t==Q0||t==nb}var Of=ib,rb=Of,sb=ru;function ob(i){return i!=null&&sb(i.length)&&!rb(i)}var ou=ob,ab=U0,lb=Y0,cb=ou;function ub(i){return cb(i)?ab(i):lb(i)}var au=ub,hb=sg,db=au;function pb(i,t){return i&&hb(i,t,db)}var fb=pb,mb=ou;function _b(i,t){return function(e,n){if(e==null)return e;if(!mb(e))return i(e,n);for(var r=e.length,s=t?r:-1,a=Object(e);(t?s--:++s<r)&&n(a[s],s,a)!==!1;);return e}}var vb=_b,gb=fb,bb=vb,xb=bb(gb),Uf=xb;function yb(i){return i}var Nf=yb,wb=Nf;function Eb(i){return typeof i=="function"?i:wb}var Mb=Eb,Sb=tg,Tb=Uf,Cb=Mb,Ab=Kn;function Pb(i,t){var e=Ab(i)?Sb:Tb;return e(i,Cb(t))}var Rb=Pb,Lb=Rb;const lu=Xa(Lb);var Sh=!1,rr,fc,mc,fa,ma,Ff,_a,_c,vc,gc,Bf,bc,xc,kf,zf;function Je(){if(!Sh){Sh=!0;var i=navigator.userAgent,t=/(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(i),e=/(Mac OS X)|(Windows)|(Linux)/.exec(i);if(bc=/\b(iPhone|iP[ao]d)/.exec(i),xc=/\b(iP[ao]d)/.exec(i),gc=/Android/i.exec(i),kf=/FBAN\/\w+;/i.exec(i),zf=/Mobile/i.exec(i),Bf=!!/Win64/.exec(i),t){rr=t[1]?parseFloat(t[1]):t[5]?parseFloat(t[5]):NaN,rr&&document&&document.documentMode&&(rr=document.documentMode);var n=/(?:Trident\/(\d+.\d+))/.exec(i);Ff=n?parseFloat(n[1])+4:rr,fc=t[2]?parseFloat(t[2]):NaN,mc=t[3]?parseFloat(t[3]):NaN,fa=t[4]?parseFloat(t[4]):NaN,fa?(t=/(?:Chrome\/(\d+\.\d+))/.exec(i),ma=t&&t[1]?parseFloat(t[1]):NaN):ma=NaN}else rr=fc=mc=ma=fa=NaN;if(e){if(e[1]){var r=/(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(i);_a=r?parseFloat(r[1].replace("_",".")):!0}else _a=!1;_c=!!e[2],vc=!!e[3]}else _a=_c=vc=!1}}var yc={ie:function(){return Je()||rr},ieCompatibilityMode:function(){return Je()||Ff>rr},ie64:function(){return yc.ie()&&Bf},firefox:function(){return Je()||fc},opera:function(){return Je()||mc},webkit:function(){return Je()||fa},safari:function(){return yc.webkit()},chrome:function(){return Je()||ma},windows:function(){return Je()||_c},osx:function(){return Je()||_a},linux:function(){return Je()||vc},iphone:function(){return Je()||bc},mobile:function(){return Je()||bc||xc||gc||zf},nativeApp:function(){return Je()||kf},android:function(){return Je()||gc},ipad:function(){return Je()||xc}},Db=yc,Bo=!!(typeof window<"u"&&window.document&&window.document.createElement),Ib={canUseDOM:Bo,canUseWorkers:typeof Worker<"u",canUseEventListeners:Bo&&!!(window.addEventListener||window.attachEvent),canUseViewport:Bo&&!!window.screen,isInWorker:!Bo},Ob=Ib,Vf=Ob,Hf;Vf.canUseDOM&&(Hf=document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("","")!==!0);/**
 * Checks if an event is supported in the current execution environment.
 *
 * NOTE: This will not work correctly for non-generic events such as `change`,
 * `reset`, `load`, `error`, and `select`.
 *
 * Borrows from Modernizr.
 *
 * @param {string} eventNameSuffix Event name, e.g. "click".
 * @param {?boolean} capture Check if the capture phase is supported.
 * @return {boolean} True if the event is supported.
 * @internal
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */function Ub(i,t){if(!Vf.canUseDOM||t&&!("addEventListener"in document))return!1;var e="on"+i,n=e in document;if(!n){var r=document.createElement("div");r.setAttribute(e,"return;"),n=typeof r[e]=="function"}return!n&&Hf&&i==="wheel"&&(n=document.implementation.hasFeature("Events.wheel","3.0")),n}var Nb=Ub,Fb=Db,Bb=Nb,Th=10,Ch=40,Ah=800;function Gf(i){var t=0,e=0,n=0,r=0;return"detail"in i&&(e=i.detail),"wheelDelta"in i&&(e=-i.wheelDelta/120),"wheelDeltaY"in i&&(e=-i.wheelDeltaY/120),"wheelDeltaX"in i&&(t=-i.wheelDeltaX/120),"axis"in i&&i.axis===i.HORIZONTAL_AXIS&&(t=e,e=0),n=t*Th,r=e*Th,"deltaY"in i&&(r=i.deltaY),"deltaX"in i&&(n=i.deltaX),(n||r)&&i.deltaMode&&(i.deltaMode==1?(n*=Ch,r*=Ch):(n*=Ah,r*=Ah)),n&&!t&&(t=n<1?-1:1),r&&!e&&(e=r<1?-1:1),{spinX:t,spinY:e,pixelX:n,pixelY:r}}Gf.getEventType=function(){return Fb.firefox()?"DOMMouseScroll":Bb("wheel")?"wheel":"mousewheel"};var kb=Gf,zb=kb;const Vb=Xa(zb);class Hb{constructor(){this.currentDevice=null,this.breakpoints={sp:868},this.body=document.querySelector("body"),this.init()}detectViewport(t){this.breakpoints.sp>=t?this.body.dataset.viewport="sp":this.body.dataset.viewport="pc",this.currentDevice=this.body.dataset.viewport}init(){const t=window.innerWidth;this.detectViewport(t),window.addEventListener("resize",()=>{const e=window.innerWidth;this.detectViewport(e)})}observerStartBody(t={sp:null,tablet:null,pc:null}){this.deviceFunctionController(this.currentDevice,t),new MutationObserver(n=>{const s=n[0].target.dataset.viewport;this.currentDevice!==s&&(this.currentDevice=s,this.deviceFunctionController(this.currentDevice,t))}).observe(this.body,{attributes:!0})}deviceFunctionController(t,e){t==="sp"&&(e.pc&&typeof e.pc.remove=="function"&&e.pc.remove(),e.tablet&&typeof e.tablet.remove=="function"&&e.tablet.remove(),e.sp&&typeof e.sp.add=="function"&&e.sp.add()),t==="tablet"&&(e.pc&&typeof e.pc.remove=="function"&&e.pc.remove(),e.sp&&typeof e.sp.remove=="function"&&e.sp.remove(),e.tablet&&typeof e.tablet.add=="function"&&e.tablet.add()),t==="pc"&&(e.sp&&typeof e.sp.remove=="function"&&e.sp.remove(),e.tablet&&typeof e.tablet.remove=="function"&&e.tablet.remove(),e.pc&&typeof e.pc.add=="function"&&e.pc.add())}}function oi(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function Wf(i,t){i.prototype=Object.create(t.prototype),i.prototype.constructor=i,i.__proto__=t}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var vn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},hs={duration:.5,overwrite:!1,delay:0},cu,He,ce,Cn=1e8,re=1/Cn,wc=Math.PI*2,Gb=wc/4,Wb=0,Xf=Math.sqrt,Xb=Math.cos,$b=Math.sin,Ie=function(t){return typeof t=="string"},ge=function(t){return typeof t=="function"},di=function(t){return typeof t=="number"},uu=function(t){return typeof t>"u"},$n=function(t){return typeof t=="object"},nn=function(t){return t!==!1},hu=function(){return typeof window<"u"},ko=function(t){return ge(t)||Ie(t)},$f=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ge=Array.isArray,Ec=/(?:-?\.?\d|\.)+/gi,jf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Jr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ml=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,qf=/[+-]=-?[.\d]+/,Yf=/[^,'"\[\]\s]+/gi,jb=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,de,kn,Mc,du,bn={},Ta={},Kf,Zf=function(t){return(Ta=vr(t,bn))&&cn},pu=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},io=function(t,e){return!e&&console.warn(t)},Jf=function(t,e){return t&&(bn[t]=e)&&Ta&&(Ta[t]=e)||bn},ro=function(){return 0},qb={suppressEvents:!0,isStart:!0,kill:!1},va={suppressEvents:!0,kill:!1},Yb={suppressEvents:!0},fu={},Ui=[],Sc={},Qf,fn={},_l={},Ph=30,ga=[],mu="",_u=function(t){var e=t[0],n,r;if($n(e)||ge(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(r=ga.length;r--&&!ga[r].targetTest(e););n=ga[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new Em(t[r],n)))||t.splice(r,1);return t},cr=function(t){return t._gsap||_u(An(t))[0]._gsap},tm=function(t,e,n){return(n=t[e])&&ge(n)?t[e]():uu(n)&&t.getAttribute&&t.getAttribute(e)||n},rn=function(t,e){return(t=t.split(",")).forEach(e)||t},we=function(t){return Math.round(t*1e5)/1e5||0},De=function(t){return Math.round(t*1e7)/1e7||0},ns=function(t,e){var n=e.charAt(0),r=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+r:n==="-"?t-r:n==="*"?t*r:t/r},Kb=function(t,e){for(var n=e.length,r=0;t.indexOf(e[r])<0&&++r<n;);return r<n},Ca=function(){var t=Ui.length,e=Ui.slice(0),n,r;for(Sc={},Ui.length=0,n=0;n<t;n++)r=e[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},em=function(t,e,n,r){Ui.length&&!He&&Ca(),t.render(e,n,r||He&&e<0&&(t._initted||t._startAt)),Ui.length&&!He&&Ca()},nm=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Yf).length<2?e:Ie(t)?t.trim():t},im=function(t){return t},Ln=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Zb=function(t){return function(e,n){for(var r in n)r in e||r==="duration"&&t||r==="ease"||(e[r]=n[r])}},vr=function(t,e){for(var n in e)t[n]=e[n];return t},Rh=function i(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=$n(e[n])?i(t[n]||(t[n]={}),e[n]):e[n]);return t},Aa=function(t,e){var n={},r;for(r in t)r in e||(n[r]=t[r]);return n},Zs=function(t){var e=t.parent||de,n=t.keyframes?Zb(Ge(t.keyframes)):Ln;if(nn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},Jb=function(t,e){for(var n=t.length,r=n===e.length;r&&n--&&t[n]===e[n];);return n<0},rm=function(t,e,n,r,s){n===void 0&&(n="_first"),r===void 0&&(r="_last");var a=t[r],o;if(s)for(o=e[s];a&&a[s]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[r]=e,e._prev=a,e.parent=e._dp=t,e},ja=function(t,e,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=e._prev,a=e._next;s?s._next=a:t[n]===e&&(t[n]=a),a?a._prev=s:t[r]===e&&(t[r]=s),e._next=e._prev=e.parent=null},Vi=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},ur=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},Qb=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Tc=function(t,e,n,r){return t._startAt&&(He?t._startAt.revert(va):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,r))},tx=function i(t){return!t||t._ts&&i(t.parent)},Lh=function(t){return t._repeat?ds(t._tTime,t=t.duration()+t._rDelay)*t:0},ds=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},Pa=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},qa=function(t){return t._end=De(t._start+(t._tDur/Math.abs(t._ts||t._rts||re)||0))},Ya=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=De(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),qa(t),n._dirty||ur(n,t)),t},sm=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Pa(t.rawTime(),e),(!e._dur||wo(0,e.totalDuration(),n)-e._tTime>re)&&e.render(n,!0)),ur(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-re}},Vn=function(t,e,n,r){return e.parent&&Vi(e),e._start=De((di(n)?n:n||t!==de?Sn(t,n,e):t._time)+e._delay),e._end=De(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),rm(t,e,"_first","_last",t._sort?"_start":0),Cc(e)||(t._recent=e),r||sm(t,e),t._ts<0&&Ya(t,t._tTime),t},om=function(t,e){return(bn.ScrollTrigger||pu("scrollTrigger",e))&&bn.ScrollTrigger.create(e,t)},am=function(t,e,n,r,s){if(gu(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!He&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Qf!==mn.frame)return Ui.push(t),t._lazy=[s,r],1},ex=function i(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||i(e))},Cc=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},nx=function(t,e,n,r){var s=t.ratio,a=e<0||!e&&(!t._start&&ex(t)&&!(!t._initted&&Cc(t))||(t._ts<0||t._dp._ts<0)&&!Cc(t))?0:1,o=t._rDelay,l=0,c,u,h;if(o&&t._repeat&&(l=wo(0,t._tDur,e),u=ds(l,o),t._yoyo&&u&1&&(a=1-a),u!==ds(t._tTime,o)&&(s=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==s||He||r||t._zTime===re||!e&&t._zTime){if(!t._initted&&am(t,e,r,n,l))return;for(h=t._zTime,t._zTime=e||(n?re:0),n||(n=e&&!h),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&Tc(t,e,n,!0),t._onUpdate&&!n&&_n(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&_n(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&Vi(t,1),!n&&!He&&(_n(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},ix=function(t,e,n){var r;if(n>e)for(r=t._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>e)return r;r=r._next}else for(r=t._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<e)return r;r=r._prev}},ps=function(t,e,n,r){var s=t._repeat,a=De(e)||0,o=t._tTime/t._tDur;return o&&!r&&(t._time*=a/t._dur),t._dur=a,t._tDur=s?s<0?1e10:De(a*(s+1)+t._rDelay*s):a,o>0&&!r&&Ya(t,t._tTime=t._tDur*o),t.parent&&qa(t),n||ur(t.parent,t),t},Dh=function(t){return t instanceof qe?ur(t):ps(t,t._dur)},rx={_start:0,endTime:ro,totalDuration:ro},Sn=function i(t,e,n){var r=t.labels,s=t._recent||rx,a=t.duration()>=Cn?s.endTime(!1):t._dur,o,l,c;return Ie(e)&&(isNaN(e)||e in r)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(e in r||(r[e]=a),r[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&n&&(l=l/100*(Ge(n)?n[0]:n).totalDuration()),o>1?i(t,e.substr(0,o-1),n)+l:a+l)):e==null?a:+e},Js=function(t,e,n){var r=di(e[1]),s=(r?2:1)+(t<2?0:1),a=e[s],o,l;if(r&&(a.duration=e[1]),a.parent=n,t){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=nn(l.vars.inherit)&&l.parent;a.immediateRender=nn(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[s-1]}return new Me(e[0],a,e[s+1])},Xi=function(t,e){return t||t===0?e(t):e},wo=function(t,e,n){return n<t?t:n>e?e:n},Ve=function(t,e){return!Ie(t)||!(e=jb.exec(t))?"":e[1]},sx=function(t,e,n){return Xi(n,function(r){return wo(t,e,r)})},Ac=[].slice,lm=function(t,e){return t&&$n(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&$n(t[0]))&&!t.nodeType&&t!==kn},ox=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(r){var s;return Ie(r)&&!e||lm(r,1)?(s=n).push.apply(s,An(r)):n.push(r)})||n},An=function(t,e,n){return ce&&!e&&ce.selector?ce.selector(t):Ie(t)&&!n&&(Mc||!fs())?Ac.call((e||du).querySelectorAll(t),0):Ge(t)?ox(t,n):lm(t)?Ac.call(t,0):t?[t]:[]},Pc=function(t){return t=An(t)[0]||io("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return An(e,n.querySelectorAll?n:n===t?io("Invalid scope")||du.createElement("div"):t)}},cm=function(t){return t.sort(function(){return .5-Math.random()})},um=function(t){if(ge(t))return t;var e=$n(t)?t:{each:t},n=hr(e.ease),r=e.from||0,s=parseFloat(e.base)||0,a={},o=r>0&&r<1,l=isNaN(r)||o,c=e.axis,u=r,h=r;return Ie(r)?u=h={center:.5,edges:.5,end:1}[r]||0:!o&&l&&(u=r[0],h=r[1]),function(d,m,v){var _=(v||e).length,p=a[_],f,y,g,w,T,C,M,D,N;if(!p){if(N=e.grid==="auto"?0:(e.grid||[1,Cn])[1],!N){for(M=-Cn;M<(M=v[N++].getBoundingClientRect().left)&&N<_;);N<_&&N--}for(p=a[_]=[],f=l?Math.min(N,_)*u-.5:r%N,y=N===Cn?0:l?_*h/N-.5:r/N|0,M=0,D=Cn,C=0;C<_;C++)g=C%N-f,w=y-(C/N|0),p[C]=T=c?Math.abs(c==="y"?w:g):Xf(g*g+w*w),T>M&&(M=T),T<D&&(D=T);r==="random"&&cm(p),p.max=M-D,p.min=D,p.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(N>_?_-1:c?c==="y"?_/N:N:Math.max(N,_/N))||0)*(r==="edges"?-1:1),p.b=_<0?s-_:s,p.u=Ve(e.amount||e.each)||0,n=n&&_<0?xm(n):n}return _=(p[d]-p.min)/p.max||0,De(p.b+(n?n(_):_)*p.v)+p.u}},Rc=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var r=De(Math.round(parseFloat(n)/t)*t*e);return(r-r%1)/e+(di(n)?0:Ve(n))}},hm=function(t,e){var n=Ge(t),r,s;return!n&&$n(t)&&(r=n=t.radius||Cn,t.values?(t=An(t.values),(s=!di(t[0]))&&(r*=r)):t=Rc(t.increment)),Xi(e,n?ge(t)?function(a){return s=t(a),Math.abs(s-a)<=r?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=Cn,u=0,h=t.length,d,m;h--;)s?(d=t[h].x-o,m=t[h].y-l,d=d*d+m*m):d=Math.abs(t[h]-o),d<c&&(c=d,u=h);return u=!r||c<=r?t[u]:a,s||u===a||di(a)?u:u+Ve(a)}:Rc(t))},dm=function(t,e,n,r){return Xi(Ge(t)?!e:n===!0?!!(n=0):!r,function(){return Ge(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*r)/r})},ax=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(r){return e.reduce(function(s,a){return a(s)},r)}},lx=function(t,e){return function(n){return t(parseFloat(n))+(e||Ve(n))}},cx=function(t,e,n){return fm(t,e,0,1,n)},pm=function(t,e,n){return Xi(n,function(r){return t[~~e(r)]})},ux=function i(t,e,n){var r=e-t;return Ge(t)?pm(t,i(0,t.length),e):Xi(n,function(s){return(r+(s-t)%r)%r+t})},hx=function i(t,e,n){var r=e-t,s=r*2;return Ge(t)?pm(t,i(0,t.length-1),e):Xi(n,function(a){return a=(s+(a-t)%s)%s||0,t+(a>r?s-a:a)})},so=function(t){for(var e=0,n="",r,s,a,o;~(r=t.indexOf("random(",e));)a=t.indexOf(")",r),o=t.charAt(r+7)==="[",s=t.substr(r+7,a-r-7).match(o?Yf:Ec),n+=t.substr(e,r-e)+dm(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),e=a+1;return n+t.substr(e,t.length-e)},fm=function(t,e,n,r,s){var a=e-t,o=r-n;return Xi(s,function(l){return n+((l-t)/a*o||0)})},dx=function i(t,e,n,r){var s=isNaN(t+e)?0:function(m){return(1-m)*t+m*e};if(!s){var a=Ie(t),o={},l,c,u,h,d;if(n===!0&&(r=1)&&(n=null),a)t={p:t},e={p:e};else if(Ge(t)&&!Ge(e)){for(u=[],h=t.length,d=h-2,c=1;c<h;c++)u.push(i(t[c-1],t[c]));h--,s=function(v){v*=h;var _=Math.min(d,~~v);return u[_](v-_)},n=e}else r||(t=vr(Ge(t)?[]:{},t));if(!u){for(l in e)vu.call(o,t,l,"get",e[l]);s=function(v){return yu(v,o)||(a?t.p:t)}}}return Xi(n,s)},Ih=function(t,e,n){var r=t.labels,s=Cn,a,o,l;for(a in r)o=r[a]-e,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},_n=function(t,e,n){var r=t.vars,s=r[e],a=ce,o=t._ctx,l,c,u;if(s)return l=r[e+"Params"],c=r.callbackScope||t,n&&Ui.length&&Ca(),o&&(ce=o),u=l?s.apply(c,l):s.call(c),ce=a,u},Ys=function(t){return Vi(t),t.scrollTrigger&&t.scrollTrigger.kill(!!He),t.progress()<1&&_n(t,"onInterrupt"),t},Qr,mm=[],_m=function(t){if(t)if(t=!t.name&&t.default||t,hu()||t.headless){var e=t.name,n=ge(t),r=e&&!n&&t.init?function(){this._props=[]}:t,s={init:ro,render:yu,add:vu,kill:Ax,modifier:Cx,rawVars:0},a={targetTest:0,get:0,getSetter:xu,aliases:{},register:0};if(fs(),t!==r){if(fn[e])return;Ln(r,Ln(Aa(t,s),a)),vr(r.prototype,vr(s,Aa(t,a))),fn[r.prop=e]=r,t.targetTest&&(ga.push(r),fu[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Jf(e,r),t.register&&t.register(cn,r,sn)}else mm.push(t)},ie=255,Ks={aqua:[0,ie,ie],lime:[0,ie,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ie],navy:[0,0,128],white:[ie,ie,ie],olive:[128,128,0],yellow:[ie,ie,0],orange:[ie,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ie,0,0],pink:[ie,192,203],cyan:[0,ie,ie],transparent:[ie,ie,ie,0]},vl=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*ie+.5|0},vm=function(t,e,n){var r=t?di(t)?[t>>16,t>>8&ie,t&ie]:0:Ks.black,s,a,o,l,c,u,h,d,m,v;if(!r){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Ks[t])r=Ks[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+s+s+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return r=parseInt(t.substr(1,6),16),[r>>16,r>>8&ie,r&ie,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),r=[t>>16,t>>8&ie,t&ie]}else if(t.substr(0,3)==="hsl"){if(r=v=t.match(Ec),!e)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,r.length>3&&(r[3]*=1),r[0]=vl(l+1/3,s,a),r[1]=vl(l,s,a),r[2]=vl(l-1/3,s,a);else if(~t.indexOf("="))return r=t.match(jf),n&&r.length<4&&(r[3]=1),r}else r=t.match(Ec)||Ks.transparent;r=r.map(Number)}return e&&!v&&(s=r[0]/ie,a=r[1]/ie,o=r[2]/ie,h=Math.max(s,a,o),d=Math.min(s,a,o),u=(h+d)/2,h===d?l=c=0:(m=h-d,c=u>.5?m/(2-h-d):m/(h+d),l=h===s?(a-o)/m+(a<o?6:0):h===a?(o-s)/m+2:(s-a)/m+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},gm=function(t){var e=[],n=[],r=-1;return t.split(Ni).forEach(function(s){var a=s.match(Jr)||[];e.push.apply(e,a),n.push(r+=a.length+1)}),e.c=n,e},Oh=function(t,e,n){var r="",s=(t+r).match(Ni),a=e?"hsla(":"rgba(",o=0,l,c,u,h;if(!s)return t;if(s=s.map(function(d){return(d=vm(d,e,1))&&a+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=gm(t),l=n.c,l.join(r)!==u.c.join(r)))for(c=t.replace(Ni,"1").split(Jr),h=c.length-1;o<h;o++)r+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=t.split(Ni),h=c.length-1;o<h;o++)r+=c[o]+s[o];return r+c[h]},Ni=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Ks)i+="|"+t+"\\b";return new RegExp(i+")","gi")}(),px=/hsl[a]?\(/,bm=function(t){var e=t.join(" "),n;if(Ni.lastIndex=0,Ni.test(e))return n=px.test(e),t[1]=Oh(t[1],n),t[0]=Oh(t[0],n,gm(t[1])),!0},oo,mn=function(){var i=Date.now,t=500,e=33,n=i(),r=n,s=1e3/240,a=s,o=[],l,c,u,h,d,m,v=function _(p){var f=i()-r,y=p===!0,g,w,T,C;if((f>t||f<0)&&(n+=f-e),r+=f,T=r-n,g=T-a,(g>0||y)&&(C=++h.frame,d=T-h.time*1e3,h.time=T=T/1e3,a+=g+(g>=s?4:s-g),w=1),y||(l=c(_)),w)for(m=0;m<o.length;m++)o[m](T,d,C,p)};return h={time:0,frame:0,tick:function(){v(!0)},deltaRatio:function(p){return d/(1e3/(p||60))},wake:function(){Kf&&(!Mc&&hu()&&(kn=Mc=window,du=kn.document||{},bn.gsap=cn,(kn.gsapVersions||(kn.gsapVersions=[])).push(cn.version),Zf(Ta||kn.GreenSockGlobals||!kn.gsap&&kn||{}),mm.forEach(_m)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(p){return setTimeout(p,a-h.time*1e3+1|0)},oo=1,v(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),oo=0,c=ro},lagSmoothing:function(p,f){t=p||1/0,e=Math.min(f||33,t)},fps:function(p){s=1e3/(p||240),a=h.time*1e3+s},add:function(p,f,y){var g=f?function(w,T,C,M){p(w,T,C,M),h.remove(g)}:p;return h.remove(p),o[y?"unshift":"push"](g),fs(),g},remove:function(p,f){~(f=o.indexOf(p))&&o.splice(f,1)&&m>=f&&m--},_listeners:o},h}(),fs=function(){return!oo&&mn.wake()},Xt={},fx=/^[\d.\-M][\d.\-,\s]/,mx=/["']/g,_x=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),r=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[r]=isNaN(c)?c.replace(mx,"").trim():+c,r=l.substr(o+1).trim();return e},vx=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),r=t.indexOf("(",e);return t.substring(e,~r&&r<n?t.indexOf(")",n+1):n)},gx=function(t){var e=(t+"").split("("),n=Xt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[_x(e[1])]:vx(t).split(",").map(nm)):Xt._CE&&fx.test(t)?Xt._CE("",t):n},xm=function(t){return function(e){return 1-t(1-e)}},ym=function i(t,e){for(var n=t._first,r;n;)n instanceof qe?i(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?i(n.timeline,e):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=e)),n=n._next},hr=function(t,e){return t&&(ge(t)?t:Xt[t]||gx(t))||e},Mr=function(t,e,n,r){n===void 0&&(n=function(l){return 1-e(1-l)}),r===void 0&&(r=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:r},a;return rn(t,function(o){Xt[o]=bn[o]=s,Xt[a=o.toLowerCase()]=n;for(var l in s)Xt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Xt[o+"."+l]=s[l]}),s},wm=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},gl=function i(t,e,n){var r=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),a=s/wc*(Math.asin(1/r)||0),o=function(u){return u===1?1:r*Math.pow(2,-10*u)*$b((u-a)*s)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:wm(o);return s=wc/s,l.config=function(c,u){return i(t,c,u)},l},bl=function i(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},r=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:wm(n);return r.config=function(s){return i(t,s)},r};rn("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,t){var e=t<5?t+1:t;Mr(i+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Xt.Linear.easeNone=Xt.none=Xt.Linear.easeIn;Mr("Elastic",gl("in"),gl("out"),gl());(function(i,t){var e=1/t,n=2*e,r=2.5*e,s=function(o){return o<e?i*o*o:o<n?i*Math.pow(o-1.5/t,2)+.75:o<r?i*(o-=2.25/t)*o+.9375:i*Math.pow(o-2.625/t,2)+.984375};Mr("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Mr("Expo",function(i){return i?Math.pow(2,10*(i-1)):0});Mr("Circ",function(i){return-(Xf(1-i*i)-1)});Mr("Sine",function(i){return i===1?1:-Xb(i*Gb)+1});Mr("Back",bl("in"),bl("out"),bl());Xt.SteppedEase=Xt.steps=bn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,r=t+(e?0:1),s=e?1:0,a=1-re;return function(o){return((r*wo(0,a,o)|0)+s)*n}}};hs.ease=Xt["quad.out"];rn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return mu+=i+","+i+"Params,"});var Em=function(t,e){this.id=Wb++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:tm,this.set=e?e.getSetter:xu},ao=function(){function i(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,ps(this,+e.duration,1,1),this.data=e.data,ce&&(this._ctx=ce,ce.data.push(this)),oo||mn.wake()}var t=i.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,ps(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,r){if(fs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Ya(this,n),!s._dp||s.parent||sm(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Vn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===re||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),em(this,n,r)),this},t.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Lh(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},t.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},t.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Lh(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?ds(this._tTime,s)+1:1},t.timeScale=function(n,r){if(!arguments.length)return this._rts===-re?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Pa(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-re?0:this._rts,this.totalTime(wo(-Math.abs(this._delay),this._tDur,s),r!==!1),qa(this),Qb(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(fs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==re&&(this._tTime-=re)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Vn(r,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(nn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Pa(r.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Yb);var r=He;return He=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),He=r,this},t.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Dh(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,Dh(this),r?this.time(r):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,r){return this.totalTime(Sn(this,n),nn(r))},t.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,nn(r))},t.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},t.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},t.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-re:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-re,this},t.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-re)},t.eventCallback=function(n,r,s){var a=this.vars;return arguments.length>1?(r?(a[n]=r,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete a[n],this):a[n]},t.then=function(n){var r=this;return new Promise(function(s){var a=ge(n)?n:im,o=function(){var c=r.then;r.then=null,ge(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=c),s(a),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?o():r._prom=o})},t.kill=function(){Ys(this)},i}();Ln(ao.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-re,_prom:0,_ps:!1,_rts:1});var qe=function(i){Wf(t,i);function t(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=nn(n.sortChildren),de&&Vn(n.parent||de,oi(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&om(oi(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(r,s,a){return Js(0,arguments,this),this},e.from=function(r,s,a){return Js(1,arguments,this),this},e.fromTo=function(r,s,a,o){return Js(2,arguments,this),this},e.set=function(r,s,a){return s.duration=0,s.parent=this,Zs(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Me(r,s,Sn(this,a),1),this},e.call=function(r,s,a){return Vn(this,Me.delayedCall(0,r,s),a)},e.staggerTo=function(r,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Me(r,a,Sn(this,l)),this},e.staggerFrom=function(r,s,a,o,l,c,u){return a.runBackwards=1,Zs(a).immediateRender=nn(a.immediateRender),this.staggerTo(r,s,a,o,l,c,u)},e.staggerFromTo=function(r,s,a,o,l,c,u,h){return o.startAt=a,Zs(o).immediateRender=nn(o.immediateRender),this.staggerTo(r,s,o,l,c,u,h)},e.render=function(r,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:De(r),h=this._zTime<0!=r<0&&(this._initted||!c),d,m,v,_,p,f,y,g,w,T,C,M;if(this!==de&&u>l&&r>=0&&(u=l),u!==this._tTime||a||h){if(o!==this._time&&c&&(u+=this._time-o,r+=this._time-o),d=u,w=this._start,g=this._ts,f=!g,h&&(c||(o=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(C=this._yoyo,p=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(p*100+r,s,a);if(d=De(u%p),u===l?(_=this._repeat,d=c):(_=~~(u/p),_&&_===u/p&&(d=c,_--),d>c&&(d=c)),T=ds(this._tTime,p),!o&&this._tTime&&T!==_&&this._tTime-T*p-this._dur<=0&&(T=_),C&&_&1&&(d=c-d,M=1),_!==T&&!this._lock){var D=C&&T&1,N=D===(C&&_&1);if(_<T&&(D=!D),o=D?0:u%c?c:u,this._lock=1,this.render(o||(M?0:De(_*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&_n(this,"onRepeat"),this.vars.repeatRefresh&&!M&&(this.invalidate()._lock=1),o&&o!==this._time||f!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,N&&(this._lock=2,o=D?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!M&&this.invalidate()),this._lock=0,!this._ts&&!f)return this;ym(this,M)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=ix(this,De(o),De(d)),y&&(u-=d-(d=y._start))),this._tTime=u,this._time=d,this._act=!g,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,o=0),!o&&d&&!s&&!_&&(_n(this,"onStart"),this._tTime!==u))return this;if(d>=o&&r>=0)for(m=this._first;m;){if(v=m._next,(m._act||d>=m._start)&&m._ts&&y!==m){if(m.parent!==this)return this.render(r,s,a);if(m.render(m._ts>0?(d-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(d-m._start)*m._ts,s,a),d!==this._time||!this._ts&&!f){y=0,v&&(u+=this._zTime=-re);break}}m=v}else{m=this._last;for(var b=r<0?r:d;m;){if(v=m._prev,(m._act||b<=m._end)&&m._ts&&y!==m){if(m.parent!==this)return this.render(r,s,a);if(m.render(m._ts>0?(b-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(b-m._start)*m._ts,s,a||He&&(m._initted||m._startAt)),d!==this._time||!this._ts&&!f){y=0,v&&(u+=this._zTime=b?-re:re);break}}m=v}}if(y&&!s&&(this.pause(),y.render(d>=o?0:-re)._zTime=d>=o?1:-1,this._ts))return this._start=w,qa(this),this.render(r,s,a);this._onUpdate&&!s&&_n(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(w===this._start||Math.abs(g)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Vi(this,1),!s&&!(r<0&&!o)&&(u||o||!l)&&(_n(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(r,s){var a=this;if(di(s)||(s=Sn(this,s,r)),!(r instanceof ao)){if(Ge(r))return r.forEach(function(o){return a.add(o,s)}),this;if(Ie(r))return this.addLabel(r,s);if(ge(r))r=Me.delayedCall(0,r);else return this}return this!==r?Vn(this,r,s):this},e.getChildren=function(r,s,a,o){r===void 0&&(r=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Cn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Me?s&&l.push(c):(a&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},e.getById=function(r){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===r)return s[a]},e.remove=function(r){return Ie(r)?this.removeLabel(r):ge(r)?this.killTweensOf(r):(ja(this,r),r===this._recent&&(this._recent=this._last),ur(this))},e.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=De(mn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},e.addLabel=function(r,s){return this.labels[r]=Sn(this,s),this},e.removeLabel=function(r){return delete this.labels[r],this},e.addPause=function(r,s,a){var o=Me.delayedCall(0,s||ro,a);return o.data="isPause",this._hasPause=1,Vn(this,o,Sn(this,r))},e.removePause=function(r){var s=this._first;for(r=Sn(this,r);s;)s._start===r&&s.data==="isPause"&&Vi(s),s=s._next},e.killTweensOf=function(r,s,a){for(var o=this.getTweensOf(r,a),l=o.length;l--;)Ri!==o[l]&&o[l].kill(r,s);return this},e.getTweensOf=function(r,s){for(var a=[],o=An(r),l=this._first,c=di(s),u;l;)l instanceof Me?Kb(l._targets,o)&&(c?(!Ri||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},e.tweenTo=function(r,s){s=s||{};var a=this,o=Sn(a,r),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,d=l.immediateRender,m,v=Me.to(a,Ln({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||re,onStart:function(){if(a.pause(),!m){var p=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());v._dur!==p&&ps(v,p,0,1).render(v._time,!0,!0),m=1}u&&u.apply(v,h||[])}},s));return d?v.render(0):v},e.tweenFromTo=function(r,s,a){return this.tweenTo(s,Ln({startAt:{time:Sn(this,r)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(r){return r===void 0&&(r=this._time),Ih(this,Sn(this,r))},e.previousLabel=function(r){return r===void 0&&(r=this._time),Ih(this,Sn(this,r),1)},e.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+re)},e.shiftChildren=function(r,s,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=r,o._end+=r),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=r);return ur(this)},e.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},e.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),ur(this)},e.totalDuration=function(r){var s=0,a=this,o=a._last,l=Cn,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-r:r));if(a._dirty){for(h=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Vn(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;ps(a,a===de&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(r){if(de._ts&&(em(de,Pa(r,de)),Qf=mn.frame),mn.frame>=Ph){Ph+=vn.autoSleep||120;var s=de._first;if((!s||!s._ts)&&vn.autoSleep&&mn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||mn.sleep()}}},t}(ao);Ln(qe.prototype,{_lock:0,_hasPause:0,_forcing:0});var bx=function(t,e,n,r,s,a,o){var l=new sn(this._pt,t,e,0,1,Pm,null,s),c=0,u=0,h,d,m,v,_,p,f,y;for(l.b=n,l.e=r,n+="",r+="",(f=~r.indexOf("random("))&&(r=so(r)),a&&(y=[n,r],a(y,t,e),n=y[0],r=y[1]),d=n.match(ml)||[];h=ml.exec(r);)v=h[0],_=r.substring(c,h.index),m?m=(m+1)%5:_.substr(-5)==="rgba("&&(m=1),v!==d[u++]&&(p=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:p,c:v.charAt(1)==="="?ns(p,v)-p:parseFloat(v)-p,m:m&&m<4?Math.round:0},c=ml.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=o,(qf.test(r)||f)&&(l.e=0),this._pt=l,l},vu=function(t,e,n,r,s,a,o,l,c,u){ge(r)&&(r=r(s||0,t,a));var h=t[e],d=n!=="get"?n:ge(h)?c?t[e.indexOf("set")||!ge(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():h,m=ge(h)?c?Mx:Cm:bu,v;if(Ie(r)&&(~r.indexOf("random(")&&(r=so(r)),r.charAt(1)==="="&&(v=ns(d,r)+(Ve(d)||0),(v||v===0)&&(r=v))),!u||d!==r||Lc)return!isNaN(d*r)&&r!==""?(v=new sn(this._pt,t,e,+d||0,r-(d||0),typeof h=="boolean"?Tx:Am,0,m),c&&(v.fp=c),o&&v.modifier(o,this,t),this._pt=v):(!h&&!(e in t)&&pu(e,r),bx.call(this,t,e,d,r,m,l||vn.stringFilter,c))},xx=function(t,e,n,r,s){if(ge(t)&&(t=Qs(t,s,e,n,r)),!$n(t)||t.style&&t.nodeType||Ge(t)||$f(t))return Ie(t)?Qs(t,s,e,n,r):t;var a={},o;for(o in t)a[o]=Qs(t[o],s,e,n,r);return a},Mm=function(t,e,n,r,s,a){var o,l,c,u;if(fn[t]&&(o=new fn[t]).init(s,o.rawVars?e[t]:xx(e[t],r,s,a,n),n,r,a)!==!1&&(n._pt=l=new sn(n._pt,s,t,0,1,o.render,o,0,o.priority),n!==Qr))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Ri,Lc,gu=function i(t,e,n){var r=t.vars,s=r.ease,a=r.startAt,o=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,h=r.yoyoEase,d=r.keyframes,m=r.autoRevert,v=t._dur,_=t._startAt,p=t._targets,f=t.parent,y=f&&f.data==="nested"?f.vars.targets:p,g=t._overwrite==="auto"&&!cu,w=t.timeline,T,C,M,D,N,b,P,G,$,L,k,F,j;if(w&&(!d||!s)&&(s="none"),t._ease=hr(s,hs.ease),t._yEase=h?xm(hr(h===!0?s:h,hs.ease)):0,h&&t._yoyo&&!t._repeat&&(h=t._yEase,t._yEase=t._ease,t._ease=h),t._from=!w&&!!r.runBackwards,!w||d&&!r.stagger){if(G=p[0]?cr(p[0]).harness:0,F=G&&r[G.prop],T=Aa(r,fu),_&&(_._zTime<0&&_.progress(1),e<0&&u&&o&&!m?_.render(-1,!0):_.revert(u&&v?va:qb),_._lazy=0),a){if(Vi(t._startAt=Me.set(p,Ln({data:"isStart",overwrite:!1,parent:f,immediateRender:!0,lazy:!_&&nn(l),startAt:null,delay:0,onUpdate:c&&function(){return _n(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(He||!o&&!m)&&t._startAt.revert(va),o&&v&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(u&&v&&!_){if(e&&(o=!1),M=Ln({overwrite:!1,data:"isFromStart",lazy:o&&!_&&nn(l),immediateRender:o,stagger:0,parent:f},T),F&&(M[G.prop]=F),Vi(t._startAt=Me.set(p,M)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(He?t._startAt.revert(va):t._startAt.render(-1,!0)),t._zTime=e,!o)i(t._startAt,re,re);else if(!e)return}for(t._pt=t._ptCache=0,l=v&&nn(l)||l&&!v,C=0;C<p.length;C++){if(N=p[C],P=N._gsap||_u(p)[C]._gsap,t._ptLookup[C]=L={},Sc[P.id]&&Ui.length&&Ca(),k=y===p?C:y.indexOf(N),G&&($=new G).init(N,F||T,t,k,y)!==!1&&(t._pt=D=new sn(t._pt,N,$.name,0,1,$.render,$,0,$.priority),$._props.forEach(function(X){L[X]=D}),$.priority&&(b=1)),!G||F)for(M in T)fn[M]&&($=Mm(M,T,t,k,N,y))?$.priority&&(b=1):L[M]=D=vu.call(t,N,M,"get",T[M],k,y,0,r.stringFilter);t._op&&t._op[C]&&t.kill(N,t._op[C]),g&&t._pt&&(Ri=t,de.killTweensOf(N,L,t.globalTime(e)),j=!t.parent,Ri=0),t._pt&&l&&(Sc[P.id]=1)}b&&Rm(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!j,d&&e<=0&&w.render(Cn,!0,!0)},yx=function(t,e,n,r,s,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,h,d,m;if(!c)for(c=t._ptCache[e]=[],d=t._ptLookup,m=t._targets.length;m--;){if(u=d[m][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return Lc=1,t.vars[e]="+=0",gu(t,o),Lc=0,l?io(e+" not eligible for reset"):1;c.push(u)}for(m=c.length;m--;)h=c[m],u=h._pt||h,u.s=(r||r===0)&&!s?r:u.s+(r||0)+a*u.c,u.c=n-u.s,h.e&&(h.e=we(n)+Ve(h.e)),h.b&&(h.b=u.s+Ve(h.b))},wx=function(t,e){var n=t[0]?cr(t[0]).harness:0,r=n&&n.aliases,s,a,o,l;if(!r)return e;s=vr({},e);for(a in r)if(a in s)for(l=r[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},Ex=function(t,e,n,r){var s=e.ease||r||"power1.inOut",a,o;if(Ge(e))o=n[t]||(n[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:s})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:s})},Qs=function(t,e,n,r,s){return ge(t)?t.call(e,n,r,s):Ie(t)&&~t.indexOf("random(")?so(t):t},Sm=mu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Tm={};rn(Sm+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return Tm[i]=1});var Me=function(i){Wf(t,i);function t(n,r,s,a){var o;typeof r=="number"&&(s.duration=r,r=s,s=null),o=i.call(this,a?r:Zs(r))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,d=l.stagger,m=l.overwrite,v=l.keyframes,_=l.defaults,p=l.scrollTrigger,f=l.yoyoEase,y=r.parent||de,g=(Ge(n)||$f(n)?di(n[0]):"length"in r)?[n]:An(n),w,T,C,M,D,N,b,P;if(o._targets=g.length?_u(g):io("GSAP target "+n+" not found. https://gsap.com",!vn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=m,v||d||ko(c)||ko(u)){if(r=o.vars,w=o.timeline=new qe({data:"nested",defaults:_||{},targets:y&&y.data==="nested"?y.vars.targets:g}),w.kill(),w.parent=w._dp=oi(o),w._start=0,d||ko(c)||ko(u)){if(M=g.length,b=d&&um(d),$n(d))for(D in d)~Sm.indexOf(D)&&(P||(P={}),P[D]=d[D]);for(T=0;T<M;T++)C=Aa(r,Tm),C.stagger=0,f&&(C.yoyoEase=f),P&&vr(C,P),N=g[T],C.duration=+Qs(c,oi(o),T,N,g),C.delay=(+Qs(u,oi(o),T,N,g)||0)-o._delay,!d&&M===1&&C.delay&&(o._delay=u=C.delay,o._start+=u,C.delay=0),w.to(N,C,b?b(T,N,g):0),w._ease=Xt.none;w.duration()?c=u=0:o.timeline=0}else if(v){Zs(Ln(w.vars.defaults,{ease:"none"})),w._ease=hr(v.ease||r.ease||"none");var G=0,$,L,k;if(Ge(v))v.forEach(function(F){return w.to(g,F,">")}),w.duration();else{C={};for(D in v)D==="ease"||D==="easeEach"||Ex(D,v[D],C,v.easeEach);for(D in C)for($=C[D].sort(function(F,j){return F.t-j.t}),G=0,T=0;T<$.length;T++)L=$[T],k={ease:L.e,duration:(L.t-(T?$[T-1].t:0))/100*c},k[D]=L.v,w.to(g,k,G),G+=k.duration;w.duration()<c&&w.to({},{duration:c-w.duration()})}}c||o.duration(c=w.duration())}else o.timeline=0;return m===!0&&!cu&&(Ri=oi(o),de.killTweensOf(g),Ri=0),Vn(y,oi(o),s),r.reversed&&o.reverse(),r.paused&&o.paused(!0),(h||!c&&!v&&o._start===De(y._time)&&nn(h)&&tx(oi(o))&&y.data!=="nested")&&(o._tTime=-re,o.render(Math.max(0,-u)||0)),p&&om(oi(o),p),o}var e=t.prototype;return e.render=function(r,s,a){var o=this._time,l=this._tDur,c=this._dur,u=r<0,h=r>l-re&&!u?l:r<re?0:r,d,m,v,_,p,f,y,g,w;if(!c)nx(this,r,s,a);else if(h!==this._tTime||!r||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(d=h,g=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+r,s,a);if(d=De(h%_),h===l?(v=this._repeat,d=c):(v=~~(h/_),v&&v===De(h/_)&&(d=c,v--),d>c&&(d=c)),f=this._yoyo&&v&1,f&&(w=this._yEase,d=c-d),p=ds(this._tTime,_),d===o&&!a&&this._initted&&v===p)return this._tTime=h,this;v!==p&&(g&&this._yEase&&ym(g,f),this.vars.repeatRefresh&&!f&&!this._lock&&this._time!==_&&this._initted&&(this._lock=a=1,this.render(De(_*v),!0).invalidate()._lock=0))}if(!this._initted){if(am(this,u?r:d,a,s,h))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&v!==p))return this;if(c!==this._dur)return this.render(r,s,a)}if(this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(w||this._ease)(d/c),this._from&&(this.ratio=y=1-y),d&&!o&&!s&&!v&&(_n(this,"onStart"),this._tTime!==h))return this;for(m=this._pt;m;)m.r(y,m.d),m=m._next;g&&g.render(r<0?r:g._dur*g._ease(d/this._dur),s,a)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&Tc(this,r,s,a),_n(this,"onUpdate")),this._repeat&&v!==p&&this.vars.onRepeat&&!s&&this.parent&&_n(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Tc(this,r,!0,!0),(r||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Vi(this,1),!s&&!(u&&!o)&&(h||o||f)&&(_n(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},e.resetTo=function(r,s,a,o,l){oo||mn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||gu(this,c),u=this._ease(c/this._dur),yx(this,r,s,a,o,u,c,l)?this.resetTo(r,s,a,o,1):(Ya(this,0),this.parent||rm(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Ys(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Ri&&Ri.vars.overwrite!==!0)._first||Ys(this),this.parent&&a!==this.timeline.totalDuration()&&ps(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=r?An(r):o,c=this._ptLookup,u=this._pt,h,d,m,v,_,p,f;if((!s||s==="all")&&Jb(o,l))return s==="all"&&(this._pt=0),Ys(this);for(h=this._op=this._op||[],s!=="all"&&(Ie(s)&&(_={},rn(s,function(y){return _[y]=1}),s=_),s=wx(o,s)),f=o.length;f--;)if(~l.indexOf(o[f])){d=c[f],s==="all"?(h[f]=s,v=d,m={}):(m=h[f]=h[f]||{},v=s);for(_ in v)p=d&&d[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&ja(this,p,"_pt"),delete d[_]),m!=="all"&&(m[_]=1)}return this._initted&&!this._pt&&u&&Ys(this),this},t.to=function(r,s){return new t(r,s,arguments[2])},t.from=function(r,s){return Js(1,arguments)},t.delayedCall=function(r,s,a,o){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(r,s,a){return Js(2,arguments)},t.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(r,s)},t.killTweensOf=function(r,s,a){return de.killTweensOf(r,s,a)},t}(ao);Ln(Me.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});rn("staggerTo,staggerFrom,staggerFromTo",function(i){Me[i]=function(){var t=new qe,e=Ac.call(arguments,0);return e.splice(i==="staggerFromTo"?5:4,0,0),t[i].apply(t,e)}});var bu=function(t,e,n){return t[e]=n},Cm=function(t,e,n){return t[e](n)},Mx=function(t,e,n,r){return t[e](r.fp,n)},Sx=function(t,e,n){return t.setAttribute(e,n)},xu=function(t,e){return ge(t[e])?Cm:uu(t[e])&&t.setAttribute?Sx:bu},Am=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},Tx=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Pm=function(t,e){var n=e._pt,r="";if(!t&&e.b)r=e.b;else if(t===1&&e.e)r=e.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+r,n=n._next;r+=e.c}e.set(e.t,e.p,r,e)},yu=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},Cx=function(t,e,n,r){for(var s=this._pt,a;s;)a=s._next,s.p===r&&s.modifier(t,e,n),s=a},Ax=function(t){for(var e=this._pt,n,r;e;)r=e._next,e.p===t&&!e.op||e.op===t?ja(this,e,"_pt"):e.dep||(n=1),e=r;return!n},Px=function(t,e,n,r){r.mSet(t,e,r.m.call(r.tween,n,r.mt),r)},Rm=function(t){for(var e=t._pt,n,r,s,a;e;){for(n=e._next,r=s;r&&r.pr>e.pr;)r=r._next;(e._prev=r?r._prev:a)?e._prev._next=e:s=e,(e._next=r)?r._prev=e:a=e,e=n}t._pt=s},sn=function(){function i(e,n,r,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=r,this.r=o||Am,this.d=l||this,this.set=c||bu,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=i.prototype;return t.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=Px,this.m=n,this.mt=s,this.tween=r},i}();rn(mu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return fu[i]=1});bn.TweenMax=bn.TweenLite=Me;bn.TimelineLite=bn.TimelineMax=qe;de=new qe({sortChildren:!1,defaults:hs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});vn.stringFilter=bm;var dr=[],ba={},Rx=[],Uh=0,Lx=0,xl=function(t){return(ba[t]||Rx).map(function(e){return e()})},Dc=function(){var t=Date.now(),e=[];t-Uh>2&&(xl("matchMediaInit"),dr.forEach(function(n){var r=n.queries,s=n.conditions,a,o,l,c;for(o in r)a=kn.matchMedia(r[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&e.push(n))}),xl("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),Uh=t,xl("matchMedia"))},Lm=function(){function i(e,n){this.selector=n&&Pc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Lx++,e&&this.add(e)}var t=i.prototype;return t.add=function(n,r,s){ge(n)&&(s=r,r=n,n=ge);var a=this,o=function(){var c=ce,u=a.selector,h;return c&&c!==a&&c.data.push(a),s&&(a.selector=Pc(s)),ce=a,h=r.apply(a,arguments),ge(h)&&a._r.push(h),ce=c,a.selector=u,a.isReverted=!1,h};return a.last=o,n===ge?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},t.ignore=function(n){var r=ce;ce=null,n(this),ce=r},t.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof Me&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,r){var s=this;if(n?function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof qe?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Me)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),r)for(var a=dr.length;a--;)dr[a].id===this.id&&dr.splice(a,1)},t.revert=function(n){this.kill(n||{})},i}(),Dx=function(){function i(e){this.contexts=[],this.scope=e,ce&&ce.data.push(this)}var t=i.prototype;return t.add=function(n,r,s){$n(n)||(n={matches:n});var a=new Lm(0,s||this.scope),o=a.conditions={},l,c,u;ce&&!a.selector&&(a.selector=ce.selector),this.contexts.push(a),r=a.add("onMatch",r),a.queries=n;for(c in n)c==="all"?u=1:(l=kn.matchMedia(n[c]),l&&(dr.indexOf(a)<0&&dr.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(Dc):l.addEventListener("change",Dc)));return u&&r(a,function(h){return a.add(null,h)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i}(),Ra={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(r){return _m(r)})},timeline:function(t){return new qe(t)},getTweensOf:function(t,e){return de.getTweensOf(t,e)},getProperty:function(t,e,n,r){Ie(t)&&(t=An(t)[0]);var s=cr(t||{}).get,a=n?im:nm;return n==="native"&&(n=""),t&&(e?a((fn[e]&&fn[e].get||s)(t,e,n,r)):function(o,l,c){return a((fn[o]&&fn[o].get||s)(t,o,l,c))})},quickSetter:function(t,e,n){if(t=An(t),t.length>1){var r=t.map(function(u){return cn.quickSetter(u,e,n)}),s=r.length;return function(u){for(var h=s;h--;)r[h](u)}}t=t[0]||{};var a=fn[e],o=cr(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(u){var h=new a;Qr._pt=0,h.init(t,n?u+n:u,Qr,0,[t]),h.render(1,h),Qr._pt&&yu(1,Qr)}:o.set(t,l);return a?c:function(u){return c(t,l,n?u+n:u,o,1)}},quickTo:function(t,e,n){var r,s=cn.to(t,vr((r={},r[e]="+=0.1",r.paused=!0,r),n||{})),a=function(l,c,u){return s.resetTo(e,l,c,u)};return a.tween=s,a},isTweening:function(t){return de.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=hr(t.ease,hs.ease)),Rh(hs,t||{})},config:function(t){return Rh(vn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,r=t.plugins,s=t.defaults,a=t.extendTimeline;(r||"").split(",").forEach(function(o){return o&&!fn[o]&&!bn[o]&&io(e+" effect requires "+o+" plugin.")}),_l[e]=function(o,l,c){return n(An(o),Ln(l||{},s),c)},a&&(qe.prototype[e]=function(o,l,c){return this.add(_l[e](o,$n(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){Xt[t]=hr(e)},parseEase:function(t,e){return arguments.length?hr(t,e):Xt},getById:function(t){return de.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new qe(t),r,s;for(n.smoothChildTiming=nn(t.smoothChildTiming),de.remove(n),n._dp=0,n._time=n._tTime=de._time,r=de._first;r;)s=r._next,(e||!(!r._dur&&r instanceof Me&&r.vars.onComplete===r._targets[0]))&&Vn(n,r,r._start-r._delay),r=s;return Vn(de,n,0),n},context:function(t,e){return t?new Lm(t,e):ce},matchMedia:function(t){return new Dx(t)},matchMediaRefresh:function(){return dr.forEach(function(t){var e=t.conditions,n,r;for(r in e)e[r]&&(e[r]=!1,n=1);n&&t.revert()})||Dc()},addEventListener:function(t,e){var n=ba[t]||(ba[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=ba[t],r=n&&n.indexOf(e);r>=0&&n.splice(r,1)},utils:{wrap:ux,wrapYoyo:hx,distribute:um,random:dm,snap:hm,normalize:cx,getUnit:Ve,clamp:sx,splitColor:vm,toArray:An,selector:Pc,mapRange:fm,pipe:ax,unitize:lx,interpolate:dx,shuffle:cm},install:Zf,effects:_l,ticker:mn,updateRoot:qe.updateRoot,plugins:fn,globalTimeline:de,core:{PropTween:sn,globals:Jf,Tween:Me,Timeline:qe,Animation:ao,getCache:cr,_removeLinkedListItem:ja,reverting:function(){return He},context:function(t){return t&&ce&&(ce.data.push(t),t._ctx=ce),ce},suppressOverwrites:function(t){return cu=t}}};rn("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return Ra[i]=Me[i]});mn.add(qe.updateRoot);Qr=Ra.to({},{duration:0});var Ix=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},Ox=function(t,e){var n=t._targets,r,s,a;for(r in e)for(s=n.length;s--;)a=t._ptLookup[s][r],a&&(a=a.d)&&(a._pt&&(a=Ix(a,r)),a&&a.modifier&&a.modifier(e[r],t,n[s],r))},yl=function(t,e){return{name:t,rawVars:1,init:function(r,s,a){a._onInit=function(o){var l,c;if(Ie(s)&&(l={},rn(s,function(u){return l[u]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}Ox(o,s)}}}},cn=Ra.registerPlugin({name:"attr",init:function(t,e,n,r,s){var a,o,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],r,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)He?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},yl("roundProps",Rc),yl("modifiers"),yl("snap",hm))||Ra;Me.version=qe.version=cn.version="3.12.5";Kf=1;hu()&&fs();Xt.Power0;Xt.Power1;Xt.Power2;Xt.Power3;Xt.Power4;Xt.Linear;Xt.Quad;Xt.Cubic;Xt.Quart;Xt.Quint;Xt.Strong;Xt.Elastic;Xt.Back;Xt.SteppedEase;Xt.Bounce;Xt.Sine;Xt.Expo;Xt.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Nh,Li,is,wu,ar,Fh,Eu,Ux=function(){return typeof window<"u"},pi={},er=180/Math.PI,rs=Math.PI/180,Pr=Math.atan2,Bh=1e8,Mu=/([A-Z])/g,Nx=/(left|right|width|margin|padding|x)/i,Fx=/[\s,\(]\S/,Gn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ic=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Bx=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},kx=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},zx=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Dm=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Im=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Vx=function(t,e,n){return t.style[e]=n},Hx=function(t,e,n){return t.style.setProperty(e,n)},Gx=function(t,e,n){return t._gsap[e]=n},Wx=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},Xx=function(t,e,n,r,s){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},$x=function(t,e,n,r,s){var a=t._gsap;a[e]=n,a.renderTransform(s,a)},pe="transform",on=pe+"Origin",jx=function i(t,e){var n=this,r=this.target,s=r.style,a=r._gsap;if(t in pi&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Gn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=ai(r,o)}):this.tfm[t]=a.x?a[t]:ai(r,t),t===on&&(this.tfm.zOrigin=a.zOrigin);else return Gn.transform.split(",").forEach(function(o){return i.call(n,o,e)});if(this.props.indexOf(pe)>=0)return;a.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(on,e,"")),t=pe}(s||e)&&this.props.push(t,e,s[t])},Om=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},qx=function(){var t=this.props,e=this.target,n=e.style,r=e._gsap,s,a;for(s=0;s<t.length;s+=3)t[s+1]?e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Mu,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Eu(),(!s||!s.isStart)&&!n[pe]&&(Om(n),r.zOrigin&&n[on]&&(n[on]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Um=function(t,e){var n={target:t,props:[],revert:qx,save:jx};return t._gsap||cn.core.getCache(t),e&&e.split(",").forEach(function(r){return n.save(r)}),n},Nm,Oc=function(t,e){var n=Li.createElementNS?Li.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Li.createElement(t);return n&&n.style?n:Li.createElement(t)},Xn=function i(t,e,n){var r=getComputedStyle(t);return r[e]||r.getPropertyValue(e.replace(Mu,"-$1").toLowerCase())||r.getPropertyValue(e)||!n&&i(t,ms(e)||e,1)||""},kh="O,Moz,ms,Ms,Webkit".split(","),ms=function(t,e,n){var r=e||ar,s=r.style,a=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(kh[a]+t in s););return a<0?null:(a===3?"ms":a>=0?kh[a]:"")+t},Uc=function(){Ux()&&window.document&&(Nh=window,Li=Nh.document,is=Li.documentElement,ar=Oc("div")||{style:{}},Oc("div"),pe=ms(pe),on=pe+"Origin",ar.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Nm=!!ms("perspective"),Eu=cn.core.reverting,wu=1)},wl=function i(t){var e=Oc("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,r=this.nextSibling,s=this.style.cssText,a;if(is.appendChild(e),e.appendChild(this),this.style.display="block",t)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=i}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(r?n.insertBefore(this,r):n.appendChild(this)),is.removeChild(e),this.style.cssText=s,a},zh=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Fm=function(t){var e;try{e=t.getBBox()}catch{e=wl.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===wl||(e=wl.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+zh(t,["x","cx","x1"])||0,y:+zh(t,["y","cy","y1"])||0,width:0,height:0}:e},Bm=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Fm(t))},gr=function(t,e){if(e){var n=t.style,r;e in pi&&e!==on&&(e=pe),n.removeProperty?(r=e.substr(0,2),(r==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(r==="--"?e:e.replace(Mu,"-$1").toLowerCase())):n.removeAttribute(e)}},Di=function(t,e,n,r,s,a){var o=new sn(t._pt,e,n,0,1,a?Im:Dm);return t._pt=o,o.b=r,o.e=s,t._props.push(n),o},Vh={deg:1,rad:1,turn:1},Yx={grid:1,flex:1},Hi=function i(t,e,n,r){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=ar.style,l=Nx.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,d=r==="px",m=r==="%",v,_,p,f;if(r===a||!s||Vh[r]||Vh[a])return s;if(a!=="px"&&!d&&(s=i(t,e,n,"px")),f=t.getCTM&&Bm(t),(m||a==="%")&&(pi[e]||~e.indexOf("adius")))return v=f?t.getBBox()[l?"width":"height"]:t[u],we(m?s/v*h:s/100*v);if(o[l?"width":"height"]=h+(d?a:r),_=~e.indexOf("adius")||r==="em"&&t.appendChild&&!c?t:t.parentNode,f&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===Li||!_.appendChild)&&(_=Li.body),p=_._gsap,p&&m&&p.width&&l&&p.time===mn.time&&!p.uncache)return we(s/p.width*h);if(m&&(e==="height"||e==="width")){var y=t.style[e];t.style[e]=h+r,v=t[u],y?t.style[e]=y:gr(t,e)}else(m||a==="%")&&!Yx[Xn(_,"display")]&&(o.position=Xn(t,"position")),_===t&&(o.position="static"),_.appendChild(ar),v=ar[u],_.removeChild(ar),o.position="absolute";return l&&m&&(p=cr(_),p.time=mn.time,p.width=_[u]),we(d?v*s/h:v&&s?h/v*s:0)},ai=function(t,e,n,r){var s;return wu||Uc(),e in Gn&&e!=="transform"&&(e=Gn[e],~e.indexOf(",")&&(e=e.split(",")[0])),pi[e]&&e!=="transform"?(s=co(t,r),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:Da(Xn(t,on))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=La[e]&&La[e](t,e,n)||Xn(t,e)||tm(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Hi(t,e,s,n)+n:s},Kx=function(t,e,n,r){if(!n||n==="none"){var s=ms(e,t,1),a=s&&Xn(t,s,1);a&&a!==n?(e=s,n=a):e==="borderColor"&&(n=Xn(t,"borderTopColor"))}var o=new sn(this._pt,t.style,e,0,1,Pm),l=0,c=0,u,h,d,m,v,_,p,f,y,g,w,T;if(o.b=n,o.e=r,n+="",r+="",r==="auto"&&(_=t.style[e],t.style[e]=r,r=Xn(t,e)||r,_?t.style[e]=_:gr(t,e)),u=[n,r],bm(u),n=u[0],r=u[1],d=n.match(Jr)||[],T=r.match(Jr)||[],T.length){for(;h=Jr.exec(r);)p=h[0],y=r.substring(l,h.index),v?v=(v+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(v=1),p!==(_=d[c++]||"")&&(m=parseFloat(_)||0,w=_.substr((m+"").length),p.charAt(1)==="="&&(p=ns(m,p)+w),f=parseFloat(p),g=p.substr((f+"").length),l=Jr.lastIndex-g.length,g||(g=g||vn.units[e]||w,l===r.length&&(r+=g,o.e+=g)),w!==g&&(m=Hi(t,e,_,g)||0),o._pt={_next:o._pt,p:y||c===1?y:",",s:m,c:f-m,m:v&&v<4||e==="zIndex"?Math.round:0});o.c=l<r.length?r.substring(l,r.length):""}else o.r=e==="display"&&r==="none"?Im:Dm;return qf.test(r)&&(o.e=0),this._pt=o,o},Hh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Zx=function(t){var e=t.split(" "),n=e[0],r=e[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(t=n,n=r,r=t),e[0]=Hh[n]||n,e[1]=Hh[r]||r,e.join(" ")},Jx=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,r=n.style,s=e.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],pi[o]&&(l=1,o=o==="transformOrigin"?on:pe),gr(n,o);l&&(gr(n,pe),a&&(a.svg&&n.removeAttribute("transform"),co(n,1),a.uncache=1,Om(r)))}},La={clearProps:function(t,e,n,r,s){if(s.data!=="isFromStart"){var a=t._pt=new sn(t._pt,e,n,0,0,Jx);return a.u=r,a.pr=-10,a.tween=s,t._props.push(n),1}}},lo=[1,0,0,1,0,0],km={},zm=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Gh=function(t){var e=Xn(t,pe);return zm(e)?lo:e.substr(7).match(jf).map(we)},Su=function(t,e){var n=t._gsap||cr(t),r=t.style,s=Gh(t),a,o,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?lo:s):(s===lo&&!t.offsetParent&&t!==is&&!n.svg&&(l=r.display,r.display="block",a=t.parentNode,(!a||!t.offsetParent)&&(c=1,o=t.nextElementSibling,is.appendChild(t)),s=Gh(t),l?r.display=l:gr(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):is.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Nc=function(t,e,n,r,s,a){var o=t._gsap,l=s||Su(t,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,d=o.yOffset||0,m=l[0],v=l[1],_=l[2],p=l[3],f=l[4],y=l[5],g=e.split(" "),w=parseFloat(g[0])||0,T=parseFloat(g[1])||0,C,M,D,N;n?l!==lo&&(M=m*p-v*_)&&(D=w*(p/M)+T*(-_/M)+(_*y-p*f)/M,N=w*(-v/M)+T*(m/M)-(m*y-v*f)/M,w=D,T=N):(C=Fm(t),w=C.x+(~g[0].indexOf("%")?w/100*C.width:w),T=C.y+(~(g[1]||g[0]).indexOf("%")?T/100*C.height:T)),r||r!==!1&&o.smooth?(f=w-c,y=T-u,o.xOffset=h+(f*m+y*_)-f,o.yOffset=d+(f*v+y*p)-y):o.xOffset=o.yOffset=0,o.xOrigin=w,o.yOrigin=T,o.smooth=!!r,o.origin=e,o.originIsAbsolute=!!n,t.style[on]="0px 0px",a&&(Di(a,o,"xOrigin",c,w),Di(a,o,"yOrigin",u,T),Di(a,o,"xOffset",h,o.xOffset),Di(a,o,"yOffset",d,o.yOffset)),t.setAttribute("data-svg-origin",w+" "+T)},co=function(t,e){var n=t._gsap||new Em(t);if("x"in n&&!e&&!n.uncache)return n;var r=t.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=Xn(t,on)||"0",u,h,d,m,v,_,p,f,y,g,w,T,C,M,D,N,b,P,G,$,L,k,F,j,X,q,Y,tt,st,Mt,H,K;return u=h=d=_=p=f=y=g=w=0,m=v=1,n.svg=!!(t.getCTM&&Bm(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[pe]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[pe]!=="none"?l[pe]:"")),r.scale=r.rotate=r.translate="none"),M=Su(t,n.svg),n.svg&&(n.uncache?(X=t.getBBox(),c=n.xOrigin-X.x+"px "+(n.yOrigin-X.y)+"px",j=""):j=!e&&t.getAttribute("data-svg-origin"),Nc(t,j||c,!!j||n.originIsAbsolute,n.smooth!==!1,M)),T=n.xOrigin||0,C=n.yOrigin||0,M!==lo&&(P=M[0],G=M[1],$=M[2],L=M[3],u=k=M[4],h=F=M[5],M.length===6?(m=Math.sqrt(P*P+G*G),v=Math.sqrt(L*L+$*$),_=P||G?Pr(G,P)*er:0,y=$||L?Pr($,L)*er+_:0,y&&(v*=Math.abs(Math.cos(y*rs))),n.svg&&(u-=T-(T*P+C*$),h-=C-(T*G+C*L))):(K=M[6],Mt=M[7],Y=M[8],tt=M[9],st=M[10],H=M[11],u=M[12],h=M[13],d=M[14],D=Pr(K,st),p=D*er,D&&(N=Math.cos(-D),b=Math.sin(-D),j=k*N+Y*b,X=F*N+tt*b,q=K*N+st*b,Y=k*-b+Y*N,tt=F*-b+tt*N,st=K*-b+st*N,H=Mt*-b+H*N,k=j,F=X,K=q),D=Pr(-$,st),f=D*er,D&&(N=Math.cos(-D),b=Math.sin(-D),j=P*N-Y*b,X=G*N-tt*b,q=$*N-st*b,H=L*b+H*N,P=j,G=X,$=q),D=Pr(G,P),_=D*er,D&&(N=Math.cos(D),b=Math.sin(D),j=P*N+G*b,X=k*N+F*b,G=G*N-P*b,F=F*N-k*b,P=j,k=X),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,f=180-f),m=we(Math.sqrt(P*P+G*G+$*$)),v=we(Math.sqrt(F*F+K*K)),D=Pr(k,F),y=Math.abs(D)>2e-4?D*er:0,w=H?1/(H<0?-H:H):0),n.svg&&(j=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!zm(Xn(t,pe)),j&&t.setAttribute("transform",j))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(m*=-1,y+=_<=0?180:-180,_+=_<=0?180:-180):(v*=-1,y+=y<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-h)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=we(m),n.scaleY=we(v),n.rotation=we(_)+o,n.rotationX=we(p)+o,n.rotationY=we(f)+o,n.skewX=y+o,n.skewY=g+o,n.transformPerspective=w+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(r[on]=Da(c)),n.xOffset=n.yOffset=0,n.force3D=vn.force3D,n.renderTransform=n.svg?ty:Nm?Vm:Qx,n.uncache=0,n},Da=function(t){return(t=t.split(" "))[0]+" "+t[1]},El=function(t,e,n){var r=Ve(e);return we(parseFloat(e)+parseFloat(Hi(t,"x",n+"px",r)))+r},Qx=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Vm(t,e)},qi="0deg",Fs="0px",Yi=") ",Vm=function(t,e){var n=e||this,r=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,d=n.skewX,m=n.skewY,v=n.scaleX,_=n.scaleY,p=n.transformPerspective,f=n.force3D,y=n.target,g=n.zOrigin,w="",T=f==="auto"&&t&&t!==1||f===!0;if(g&&(h!==qi||u!==qi)){var C=parseFloat(u)*rs,M=Math.sin(C),D=Math.cos(C),N;C=parseFloat(h)*rs,N=Math.cos(C),a=El(y,a,M*N*-g),o=El(y,o,-Math.sin(C)*-g),l=El(y,l,D*N*-g+g)}p!==Fs&&(w+="perspective("+p+Yi),(r||s)&&(w+="translate("+r+"%, "+s+"%) "),(T||a!==Fs||o!==Fs||l!==Fs)&&(w+=l!==Fs||T?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Yi),c!==qi&&(w+="rotate("+c+Yi),u!==qi&&(w+="rotateY("+u+Yi),h!==qi&&(w+="rotateX("+h+Yi),(d!==qi||m!==qi)&&(w+="skew("+d+", "+m+Yi),(v!==1||_!==1)&&(w+="scale("+v+", "+_+Yi),y.style[pe]=w||"translate(0, 0)"},ty=function(t,e){var n=e||this,r=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,d=n.scaleY,m=n.target,v=n.xOrigin,_=n.yOrigin,p=n.xOffset,f=n.yOffset,y=n.forceCSS,g=parseFloat(a),w=parseFloat(o),T,C,M,D,N;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=rs,c*=rs,T=Math.cos(l)*h,C=Math.sin(l)*h,M=Math.sin(l-c)*-d,D=Math.cos(l-c)*d,c&&(u*=rs,N=Math.tan(c-u),N=Math.sqrt(1+N*N),M*=N,D*=N,u&&(N=Math.tan(u),N=Math.sqrt(1+N*N),T*=N,C*=N)),T=we(T),C=we(C),M=we(M),D=we(D)):(T=h,D=d,C=M=0),(g&&!~(a+"").indexOf("px")||w&&!~(o+"").indexOf("px"))&&(g=Hi(m,"x",a,"px"),w=Hi(m,"y",o,"px")),(v||_||p||f)&&(g=we(g+v-(v*T+_*M)+p),w=we(w+_-(v*C+_*D)+f)),(r||s)&&(N=m.getBBox(),g=we(g+r/100*N.width),w=we(w+s/100*N.height)),N="matrix("+T+","+C+","+M+","+D+","+g+","+w+")",m.setAttribute("transform",N),y&&(m.style[pe]=N)},ey=function(t,e,n,r,s){var a=360,o=Ie(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?er:1),c=l-r,u=r+c+"deg",h,d;return o&&(h=s.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),h==="cw"&&c<0?c=(c+a*Bh)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*Bh)%a-~~(c/a)*a)),t._pt=d=new sn(t._pt,e,n,r,c,Bx),d.e=u,d.u="deg",t._props.push(n),d},Wh=function(t,e){for(var n in e)t[n]=e[n];return t},ny=function(t,e,n){var r=Wh({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,h,d,m,v;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[pe]=e,o=co(n,1),gr(n,pe),n.setAttribute("transform",c)):(c=getComputedStyle(n)[pe],a[pe]=e,o=co(n,1),a[pe]=c);for(l in pi)c=r[l],u=o[l],c!==u&&s.indexOf(l)<0&&(m=Ve(c),v=Ve(u),h=m!==v?Hi(n,l,c,v):parseFloat(c),d=parseFloat(u),t._pt=new sn(t._pt,o,l,h,d-h,Ic),t._pt.u=v||0,t._props.push(l));Wh(o,r)};rn("padding,margin,Width,Radius",function(i,t){var e="Top",n="Right",r="Bottom",s="Left",a=(t<3?[e,n,r,s]:[e+s,e+n,r+n,r+s]).map(function(o){return t<2?i+o:"border"+o+i});La[t>1?"border"+i:i]=function(o,l,c,u,h){var d,m;if(arguments.length<4)return d=a.map(function(v){return ai(o,v,c)}),m=d.join(" "),m.split(d[0]).length===5?d[0]:m;d=(u+"").split(" "),m={},a.forEach(function(v,_){return m[v]=d[_]=d[_]||d[(_-1)/2|0]}),o.init(l,m,h)}});var Hm={name:"css",register:Uc,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,r,s){var a=this._props,o=t.style,l=n.vars.startAt,c,u,h,d,m,v,_,p,f,y,g,w,T,C,M,D;wu||Uc(),this.styles=this.styles||Um(t),D=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(u=e[_],!(fn[_]&&Mm(_,e,n,r,t,s)))){if(m=typeof u,v=La[_],m==="function"&&(u=u.call(n,r,t,s),m=typeof u),m==="string"&&~u.indexOf("random(")&&(u=so(u)),v)v(this,t,_,u,n)&&(M=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),u+="",Ni.lastIndex=0,Ni.test(c)||(p=Ve(c),f=Ve(u)),f?p!==f&&(c=Hi(t,_,c,f)+f):p&&(u+=p),this.add(o,"setProperty",c,u,r,s,0,0,_),a.push(_),D.push(_,0,o[_]);else if(m!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,r,t,s):l[_],Ie(c)&&~c.indexOf("random(")&&(c=so(c)),Ve(c+"")||c==="auto"||(c+=vn.units[_]||Ve(ai(t,_))||""),(c+"").charAt(1)==="="&&(c=ai(t,_))):c=ai(t,_),d=parseFloat(c),y=m==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),h=parseFloat(u),_ in Gn&&(_==="autoAlpha"&&(d===1&&ai(t,"visibility")==="hidden"&&h&&(d=0),D.push("visibility",0,o.visibility),Di(this,o,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=Gn[_],~_.indexOf(",")&&(_=_.split(",")[0]))),g=_ in pi,g){if(this.styles.save(_),w||(T=t._gsap,T.renderTransform&&!e.parseTransform||co(t,e.parseTransform),C=e.smoothOrigin!==!1&&T.smooth,w=this._pt=new sn(this._pt,o,pe,0,1,T.renderTransform,T,0,-1),w.dep=1),_==="scale")this._pt=new sn(this._pt,T,"scaleY",T.scaleY,(y?ns(T.scaleY,y+h):h)-T.scaleY||0,Ic),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){D.push(on,0,o[on]),u=Zx(u),T.svg?Nc(t,u,0,C,0,this):(f=parseFloat(u.split(" ")[2])||0,f!==T.zOrigin&&Di(this,T,"zOrigin",T.zOrigin,f),Di(this,o,_,Da(c),Da(u)));continue}else if(_==="svgOrigin"){Nc(t,u,1,C,0,this);continue}else if(_ in km){ey(this,T,_,d,y?ns(d,y+u):u);continue}else if(_==="smoothOrigin"){Di(this,T,"smooth",T.smooth,u);continue}else if(_==="force3D"){T[_]=u;continue}else if(_==="transform"){ny(this,u,t);continue}}else _ in o||(_=ms(_)||_);if(g||(h||h===0)&&(d||d===0)&&!Fx.test(u)&&_ in o)p=(c+"").substr((d+"").length),h||(h=0),f=Ve(u)||(_ in vn.units?vn.units[_]:p),p!==f&&(d=Hi(t,_,c,f)),this._pt=new sn(this._pt,g?T:o,_,d,(y?ns(d,y+h):h)-d,!g&&(f==="px"||_==="zIndex")&&e.autoRound!==!1?zx:Ic),this._pt.u=f||0,p!==f&&f!=="%"&&(this._pt.b=c,this._pt.r=kx);else if(_ in o)Kx.call(this,t,_,c,y?y+u:u);else if(_ in t)this.add(t,_,c||t[_],y?y+u:u,r,s);else if(_!=="parseTransform"){pu(_,u);continue}g||(_ in o?D.push(_,0,o[_]):D.push(_,1,c||t[_])),a.push(_)}}M&&Rm(this)},render:function(t,e){if(e.tween._time||!Eu())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:ai,aliases:Gn,getSetter:function(t,e,n){var r=Gn[e];return r&&r.indexOf(",")<0&&(e=r),e in pi&&e!==on&&(t._gsap.x||ai(t,"x"))?n&&Fh===n?e==="scale"?Wx:Gx:(Fh=n||{})&&(e==="scale"?Xx:$x):t.style&&!uu(t.style[e])?Vx:~e.indexOf("-")?Hx:xu(t,e)},core:{_removeProperty:gr,_getMatrix:Su}};cn.utils.checkPrefix=ms;cn.core.getStyleSaver=Um;(function(i,t,e,n){var r=rn(i+","+t+","+e,function(s){pi[s]=1});rn(t,function(s){vn.units[s]="deg",km[s]=1}),Gn[r[13]]=i+","+t,rn(n,function(s){var a=s.split(":");Gn[a[1]]=r[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");rn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){vn.units[i]="px"});cn.registerPlugin(Hm);var br=cn.registerPlugin(Hm)||cn;br.core.Tween;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Tu="161",Rr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Lr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},iy=0,Xh=1,ry=2,Gm=1,sy=2,si=3,Gi=0,an=1,Un=2,Fi=0,ss=1,$h=2,jh=3,qh=4,oy=5,sr=100,ay=101,ly=102,Yh=103,Kh=104,cy=200,uy=201,hy=202,dy=203,Fc=204,Bc=205,py=206,fy=207,my=208,_y=209,vy=210,gy=211,by=212,xy=213,yy=214,wy=0,Ey=1,My=2,Ia=3,Sy=4,Ty=5,Cy=6,Ay=7,Wm=0,Py=1,Ry=2,Bi=0,Ly=1,Dy=2,Iy=3,Oy=4,Uy=5,Ny=6,Xm=300,_s=301,vs=302,kc=303,zc=304,Ka=306,Vc=1e3,Nn=1001,Hc=1002,je=1003,Zh=1004,Bs=1005,Qe=1006,Ml=1007,lr=1008,ki=1009,Fy=1010,By=1011,Cu=1012,$m=1013,Ii=1014,li=1015,uo=1016,jm=1017,qm=1018,pr=1020,ky=1021,Fn=1023,zy=1024,Vy=1025,fr=1026,gs=1027,Hy=1028,Ym=1029,Gy=1030,Km=1031,Zm=1033,Sl=33776,Tl=33777,Cl=33778,Al=33779,Jh=35840,Qh=35841,td=35842,ed=35843,Jm=36196,nd=37492,id=37496,rd=37808,sd=37809,od=37810,ad=37811,ld=37812,cd=37813,ud=37814,hd=37815,dd=37816,pd=37817,fd=37818,md=37819,_d=37820,vd=37821,Pl=36492,gd=36494,bd=36495,Wy=36283,xd=36284,yd=36285,wd=36286,Qm=3e3,mr=3001,Xy=3200,$y=3201,jy=0,qy=1,Tn="",Ue="srgb",fi="srgb-linear",Au="display-p3",Za="display-p3-linear",Oa="linear",ae="srgb",Ua="rec709",Na="p3",Dr=7680,Ed=519,Yy=512,Ky=513,Zy=514,t_=515,Jy=516,Qy=517,tw=518,ew=519,Md=35044,Sd="300 es",Gc=1035,ci=2e3,Fa=2001;class Sr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const Be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Td=1234567;const to=Math.PI/180,ho=180/Math.PI;function ys(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Be[i&255]+Be[i>>8&255]+Be[i>>16&255]+Be[i>>24&255]+"-"+Be[t&255]+Be[t>>8&255]+"-"+Be[t>>16&15|64]+Be[t>>24&255]+"-"+Be[e&63|128]+Be[e>>8&255]+"-"+Be[e>>16&255]+Be[e>>24&255]+Be[n&255]+Be[n>>8&255]+Be[n>>16&255]+Be[n>>24&255]).toLowerCase()}function ze(i,t,e){return Math.max(t,Math.min(e,i))}function Pu(i,t){return(i%t+t)%t}function nw(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function iw(i,t,e){return i!==t?(e-i)/(t-i):0}function eo(i,t,e){return(1-e)*i+e*t}function rw(i,t,e,n){return eo(i,t,1-Math.exp(-e*n))}function sw(i,t=1){return t-Math.abs(Pu(i,t*2)-t)}function ow(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function aw(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function lw(i,t){return i+Math.floor(Math.random()*(t-i+1))}function cw(i,t){return i+Math.random()*(t-i)}function uw(i){return i*(.5-Math.random())}function hw(i){i!==void 0&&(Td=i);let t=Td+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function dw(i){return i*to}function pw(i){return i*ho}function Wc(i){return(i&i-1)===0&&i!==0}function fw(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ba(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function mw(i,t,e,n,r){const s=Math.cos,a=Math.sin,o=s(e/2),l=a(e/2),c=s((t+n)/2),u=a((t+n)/2),h=s((t-n)/2),d=a((t-n)/2),m=s((n-t)/2),v=a((n-t)/2);switch(r){case"XYX":i.set(o*u,l*h,l*d,o*c);break;case"YZY":i.set(l*d,o*u,l*h,o*c);break;case"ZXZ":i.set(l*h,l*d,o*u,o*c);break;case"XZX":i.set(o*u,l*v,l*m,o*c);break;case"YXY":i.set(l*m,o*u,l*v,o*c);break;case"ZYZ":i.set(l*v,l*m,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Zr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Xe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const _w={DEG2RAD:to,RAD2DEG:ho,generateUUID:ys,clamp:ze,euclideanModulo:Pu,mapLinear:nw,inverseLerp:iw,lerp:eo,damp:rw,pingpong:sw,smoothstep:ow,smootherstep:aw,randInt:lw,randFloat:cw,randFloatSpread:uw,seededRandom:hw,degToRad:dw,radToDeg:pw,isPowerOfTwo:Wc,ceilPowerOfTwo:fw,floorPowerOfTwo:Ba,setQuaternionFromProperEuler:mw,normalize:Xe,denormalize:Zr};class Lt{constructor(t=0,e=0){Lt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ht{constructor(t,e,n,r,s,a,o,l,c){Ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,c)}set(t,e,n,r,s,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=r,u[2]=o,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],m=n[5],v=n[8],_=r[0],p=r[3],f=r[6],y=r[1],g=r[4],w=r[7],T=r[2],C=r[5],M=r[8];return s[0]=a*_+o*y+l*T,s[3]=a*p+o*g+l*C,s[6]=a*f+o*w+l*M,s[1]=c*_+u*y+h*T,s[4]=c*p+u*g+h*C,s[7]=c*f+u*w+h*M,s[2]=d*_+m*y+v*T,s[5]=d*p+m*g+v*C,s[8]=d*f+m*w+v*M,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*s*u+n*o*l+r*s*c-r*a*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*a-o*c,d=o*l-u*s,m=c*s-a*l,v=e*h+n*d+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/v;return t[0]=h*_,t[1]=(r*c-u*n)*_,t[2]=(o*n-r*a)*_,t[3]=d*_,t[4]=(u*e-r*l)*_,t[5]=(r*s-o*e)*_,t[6]=m*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-r*c,r*l,-r*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Rl.makeScale(t,e)),this}rotate(t){return this.premultiply(Rl.makeRotation(-t)),this}translate(t,e){return this.premultiply(Rl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Rl=new Ht;function e_(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function po(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function vw(){const i=po("canvas");return i.style.display="block",i}const Cd={};function os(i){i in Cd||(Cd[i]=!0,console.warn(i))}const Ad=new Ht().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Pd=new Ht().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),zo={[fi]:{transfer:Oa,primaries:Ua,toReference:i=>i,fromReference:i=>i},[Ue]:{transfer:ae,primaries:Ua,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Za]:{transfer:Oa,primaries:Na,toReference:i=>i.applyMatrix3(Pd),fromReference:i=>i.applyMatrix3(Ad)},[Au]:{transfer:ae,primaries:Na,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Pd),fromReference:i=>i.applyMatrix3(Ad).convertLinearToSRGB()}},gw=new Set([fi,Za]),te={enabled:!0,_workingColorSpace:fi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!gw.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=zo[t].toReference,r=zo[e].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return zo[i].primaries},getTransfer:function(i){return i===Tn?Oa:zo[i].transfer}};function as(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ll(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ir;class n_{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ir===void 0&&(Ir=po("canvas")),Ir.width=t.width,Ir.height=t.height;const n=Ir.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ir}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=po("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=as(s[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(as(e[n]/255)*255):e[n]=as(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let bw=0;class i_{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bw++}),this.uuid=ys(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Dl(r[a].image)):s.push(Dl(r[a]))}else s=Dl(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function Dl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?n_.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let xw=0;class Ye extends Sr{constructor(t=Ye.DEFAULT_IMAGE,e=Ye.DEFAULT_MAPPING,n=Nn,r=Nn,s=Qe,a=lr,o=Fn,l=ki,c=Ye.DEFAULT_ANISOTROPY,u=Tn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xw++}),this.uuid=ys(),this.name="",this.source=new i_(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(os("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===mr?Ue:Tn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Xm)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Vc:t.x=t.x-Math.floor(t.x);break;case Nn:t.x=t.x<0?0:1;break;case Hc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Vc:t.y=t.y-Math.floor(t.y);break;case Nn:t.y=t.y<0?0:1;break;case Hc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return os("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ue?mr:Qm}set encoding(t){os("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===mr?Ue:Tn}}Ye.DEFAULT_IMAGE=null;Ye.DEFAULT_MAPPING=Xm;Ye.DEFAULT_ANISOTROPY=1;class Ne{constructor(t=0,e=0,n=0,r=1){Ne.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],m=l[5],v=l[9],_=l[2],p=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(v-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(v+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const g=(c+1)/2,w=(m+1)/2,T=(f+1)/2,C=(u+d)/4,M=(h+_)/4,D=(v+p)/4;return g>w&&g>T?g<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(g),r=C/n,s=M/n):w>T?w<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(w),n=C/r,s=D/r):T<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),n=M/s,r=D/s),this.set(n,r,s,e),this}let y=Math.sqrt((p-v)*(p-v)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(p-v)/y,this.y=(h-_)/y,this.z=(d-u)/y,this.w=Math.acos((c+m+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yw extends Sr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ne(0,0,t,e),this.scissorTest=!1,this.viewport=new Ne(0,0,t,e);const r={width:t,height:e,depth:1};n.encoding!==void 0&&(os("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===mr?Ue:Tn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qe,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Ye(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new i_(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mi extends yw{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class r_ extends Ye{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=je,this.minFilter=je,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ww extends Ye{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=je,this.minFilter=je,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xr{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,a,o){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3];const d=s[a+0],m=s[a+1],v=s[a+2],_=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=d,t[e+1]=m,t[e+2]=v,t[e+3]=_;return}if(h!==_||l!==d||c!==m||u!==v){let p=1-o;const f=l*d+c*m+u*v+h*_,y=f>=0?1:-1,g=1-f*f;if(g>Number.EPSILON){const T=Math.sqrt(g),C=Math.atan2(T,f*y);p=Math.sin(p*C)/T,o=Math.sin(o*C)/T}const w=o*y;if(l=l*p+d*w,c=c*p+m*w,u=u*p+v*w,h=h*p+_*w,p===1-o){const T=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=T,c*=T,u*=T,h*=T}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[a],d=s[a+1],m=s[a+2],v=s[a+3];return t[e]=o*v+u*h+l*m-c*d,t[e+1]=l*v+u*d+c*h-o*m,t[e+2]=c*v+u*m+o*d-l*h,t[e+3]=u*v-o*h-l*d-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(r/2),h=o(s/2),d=l(n/2),m=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=d*u*h+c*m*v,this._y=c*m*h-d*u*v,this._z=c*u*v+d*m*h,this._w=c*u*h-d*m*v;break;case"YXZ":this._x=d*u*h+c*m*v,this._y=c*m*h-d*u*v,this._z=c*u*v-d*m*h,this._w=c*u*h+d*m*v;break;case"ZXY":this._x=d*u*h-c*m*v,this._y=c*m*h+d*u*v,this._z=c*u*v+d*m*h,this._w=c*u*h-d*m*v;break;case"ZYX":this._x=d*u*h-c*m*v,this._y=c*m*h+d*u*v,this._z=c*u*v-d*m*h,this._w=c*u*h+d*m*v;break;case"YZX":this._x=d*u*h+c*m*v,this._y=c*m*h+d*u*v,this._z=c*u*v-d*m*h,this._w=c*u*h-d*m*v;break;case"XZY":this._x=d*u*h-c*m*v,this._y=c*m*h-d*u*v,this._z=c*u*v+d*m*h,this._w=c*u*h+d*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=n+o+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(n>o&&n>h){const m=2*Math.sqrt(1+n-o-h);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>h){const m=2*Math.sqrt(1+o-n-h);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-n-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ze(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-r*o,this._w=a*u-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*r+e*this._y,this._z=m*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(r),n*Math.sin(s),n*Math.cos(s),e*Math.sin(r))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Rd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Rd.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*r-o*n),u=2*(o*e-s*r),h=2*(s*n-a*e);return this.x=e+l*c+a*h-o*u,this.y=n+l*u+o*c-s*h,this.z=r+l*h+s*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Il.copy(this).projectOnVector(t),this.sub(Il)}reflect(t){return this.sub(Il.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Il=new I,Rd=new xr;class Tr{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Dn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Dn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Dn):Dn.fromBufferAttribute(s,a),Dn.applyMatrix4(t.matrixWorld),this.expandByPoint(Dn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Vo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Vo.copy(n.boundingBox)),Vo.applyMatrix4(t.matrixWorld),this.union(Vo)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Dn),Dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ks),Ho.subVectors(this.max,ks),Or.subVectors(t.a,ks),Ur.subVectors(t.b,ks),Nr.subVectors(t.c,ks),xi.subVectors(Ur,Or),yi.subVectors(Nr,Ur),Ki.subVectors(Or,Nr);let e=[0,-xi.z,xi.y,0,-yi.z,yi.y,0,-Ki.z,Ki.y,xi.z,0,-xi.x,yi.z,0,-yi.x,Ki.z,0,-Ki.x,-xi.y,xi.x,0,-yi.y,yi.x,0,-Ki.y,Ki.x,0];return!Ol(e,Or,Ur,Nr,Ho)||(e=[1,0,0,0,1,0,0,0,1],!Ol(e,Or,Ur,Nr,Ho))?!1:(Go.crossVectors(xi,yi),e=[Go.x,Go.y,Go.z],Ol(e,Or,Ur,Nr,Ho))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Qn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Qn=[new I,new I,new I,new I,new I,new I,new I,new I],Dn=new I,Vo=new Tr,Or=new I,Ur=new I,Nr=new I,xi=new I,yi=new I,Ki=new I,ks=new I,Ho=new I,Go=new I,Zi=new I;function Ol(i,t,e,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Zi.fromArray(i,s);const o=r.x*Math.abs(Zi.x)+r.y*Math.abs(Zi.y)+r.z*Math.abs(Zi.z),l=t.dot(Zi),c=e.dot(Zi),u=n.dot(Zi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Ew=new Tr,zs=new I,Ul=new I;class ws{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ew.setFromPoints(t).getCenter(n);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;zs.subVectors(t,this.center);const e=zs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(zs,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ul.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(zs.copy(t.center).add(Ul)),this.expandByPoint(zs.copy(t.center).sub(Ul))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ti=new I,Nl=new I,Wo=new I,wi=new I,Fl=new I,Xo=new I,Bl=new I;class Ru{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ti)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ti.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ti.copy(this.origin).addScaledVector(this.direction,e),ti.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Nl.copy(t).add(e).multiplyScalar(.5),Wo.copy(e).sub(t).normalize(),wi.copy(this.origin).sub(Nl);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Wo),o=wi.dot(this.direction),l=-wi.dot(Wo),c=wi.lengthSq(),u=Math.abs(1-a*a);let h,d,m,v;if(u>0)if(h=a*l-o,d=a*o-l,v=s*u,h>=0)if(d>=-v)if(d<=v){const _=1/u;h*=_,d*=_,m=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;else d<=-v?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c):d<=v?(h=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Nl).addScaledVector(Wo,d),m}intersectSphere(t,e){ti.subVectors(t.center,this.origin);const n=ti.dot(this.direction),r=ti.dot(ti)-n*n,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,r=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,r=(t.min.x-d.x)*c),u>=0?(s=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(s=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(o=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,ti)!==null}intersectTriangle(t,e,n,r,s){Fl.subVectors(e,t),Xo.subVectors(n,t),Bl.crossVectors(Fl,Xo);let a=this.direction.dot(Bl),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;wi.subVectors(this.origin,t);const l=o*this.direction.dot(Xo.crossVectors(wi,Xo));if(l<0)return null;const c=o*this.direction.dot(Fl.cross(wi));if(c<0||l+c>a)return null;const u=-o*wi.dot(Bl);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qt{constructor(t,e,n,r,s,a,o,l,c,u,h,d,m,v,_,p){Qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,c,u,h,d,m,v,_,p)}set(t,e,n,r,s,a,o,l,c,u,h,d,m,v,_,p){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=m,f[7]=v,f[11]=_,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/Fr.setFromMatrixColumn(t,0).length(),s=1/Fr.setFromMatrixColumn(t,1).length(),a=1/Fr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const d=a*u,m=a*h,v=o*u,_=o*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=m+v*c,e[5]=d-_*c,e[9]=-o*l,e[2]=_-d*c,e[6]=v+m*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*u,m=l*h,v=c*u,_=c*h;e[0]=d+_*o,e[4]=v*o-m,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=m*o-v,e[6]=_+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*u,m=l*h,v=c*u,_=c*h;e[0]=d-_*o,e[4]=-a*h,e[8]=v+m*o,e[1]=m+v*o,e[5]=a*u,e[9]=_-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*u,m=a*h,v=o*u,_=o*h;e[0]=l*u,e[4]=v*c-m,e[8]=d*c+_,e[1]=l*h,e[5]=_*c+d,e[9]=m*c-v,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,m=a*c,v=o*l,_=o*c;e[0]=l*u,e[4]=_-d*h,e[8]=v*h+m,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=m*h+v,e[10]=d-_*h}else if(t.order==="XZY"){const d=a*l,m=a*c,v=o*l,_=o*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+_,e[5]=a*u,e[9]=m*h-v,e[2]=v*h-m,e[6]=o*u,e[10]=_*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Mw,t,Sw)}lookAt(t,e,n){const r=this.elements;return dn.subVectors(t,e),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),Ei.crossVectors(n,dn),Ei.lengthSq()===0&&(Math.abs(n.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),Ei.crossVectors(n,dn)),Ei.normalize(),$o.crossVectors(dn,Ei),r[0]=Ei.x,r[4]=$o.x,r[8]=dn.x,r[1]=Ei.y,r[5]=$o.y,r[9]=dn.y,r[2]=Ei.z,r[6]=$o.z,r[10]=dn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],m=n[13],v=n[2],_=n[6],p=n[10],f=n[14],y=n[3],g=n[7],w=n[11],T=n[15],C=r[0],M=r[4],D=r[8],N=r[12],b=r[1],P=r[5],G=r[9],$=r[13],L=r[2],k=r[6],F=r[10],j=r[14],X=r[3],q=r[7],Y=r[11],tt=r[15];return s[0]=a*C+o*b+l*L+c*X,s[4]=a*M+o*P+l*k+c*q,s[8]=a*D+o*G+l*F+c*Y,s[12]=a*N+o*$+l*j+c*tt,s[1]=u*C+h*b+d*L+m*X,s[5]=u*M+h*P+d*k+m*q,s[9]=u*D+h*G+d*F+m*Y,s[13]=u*N+h*$+d*j+m*tt,s[2]=v*C+_*b+p*L+f*X,s[6]=v*M+_*P+p*k+f*q,s[10]=v*D+_*G+p*F+f*Y,s[14]=v*N+_*$+p*j+f*tt,s[3]=y*C+g*b+w*L+T*X,s[7]=y*M+g*P+w*k+T*q,s[11]=y*D+g*G+w*F+T*Y,s[15]=y*N+g*$+w*j+T*tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],m=t[14],v=t[3],_=t[7],p=t[11],f=t[15];return v*(+s*l*h-r*c*h-s*o*d+n*c*d+r*o*m-n*l*m)+_*(+e*l*m-e*c*d+s*a*d-r*a*m+r*c*u-s*l*u)+p*(+e*c*h-e*o*m-s*a*h+n*a*m+s*o*u-n*c*u)+f*(-r*o*u-e*l*h+e*o*d+r*a*h-n*a*d+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],m=t[11],v=t[12],_=t[13],p=t[14],f=t[15],y=h*p*c-_*d*c+_*l*m-o*p*m-h*l*f+o*d*f,g=v*d*c-u*p*c-v*l*m+a*p*m+u*l*f-a*d*f,w=u*_*c-v*h*c+v*o*m-a*_*m-u*o*f+a*h*f,T=v*h*l-u*_*l-v*o*d+a*_*d+u*o*p-a*h*p,C=e*y+n*g+r*w+s*T;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/C;return t[0]=y*M,t[1]=(_*d*s-h*p*s-_*r*m+n*p*m+h*r*f-n*d*f)*M,t[2]=(o*p*s-_*l*s+_*r*c-n*p*c-o*r*f+n*l*f)*M,t[3]=(h*l*s-o*d*s-h*r*c+n*d*c+o*r*m-n*l*m)*M,t[4]=g*M,t[5]=(u*p*s-v*d*s+v*r*m-e*p*m-u*r*f+e*d*f)*M,t[6]=(v*l*s-a*p*s-v*r*c+e*p*c+a*r*f-e*l*f)*M,t[7]=(a*d*s-u*l*s+u*r*c-e*d*c-a*r*m+e*l*m)*M,t[8]=w*M,t[9]=(v*h*s-u*_*s-v*n*m+e*_*m+u*n*f-e*h*f)*M,t[10]=(a*_*s-v*o*s+v*n*c-e*_*c-a*n*f+e*o*f)*M,t[11]=(u*o*s-a*h*s-u*n*c+e*h*c+a*n*m-e*o*m)*M,t[12]=T*M,t[13]=(u*_*r-v*h*r+v*n*d-e*_*d-u*n*p+e*h*p)*M,t[14]=(v*o*r-a*_*r-v*n*l+e*_*l+a*n*p-e*o*p)*M,t[15]=(a*h*r-u*o*r+u*n*l-e*h*l-a*n*d+e*o*d)*M,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,u=a+a,h=o+o,d=s*c,m=s*u,v=s*h,_=a*u,p=a*h,f=o*h,y=l*c,g=l*u,w=l*h,T=n.x,C=n.y,M=n.z;return r[0]=(1-(_+f))*T,r[1]=(m+w)*T,r[2]=(v-g)*T,r[3]=0,r[4]=(m-w)*C,r[5]=(1-(d+f))*C,r[6]=(p+y)*C,r[7]=0,r[8]=(v+g)*M,r[9]=(p-y)*M,r[10]=(1-(d+_))*M,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=Fr.set(r[0],r[1],r[2]).length();const a=Fr.set(r[4],r[5],r[6]).length(),o=Fr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],In.copy(this);const c=1/s,u=1/a,h=1/o;return In.elements[0]*=c,In.elements[1]*=c,In.elements[2]*=c,In.elements[4]*=u,In.elements[5]*=u,In.elements[6]*=u,In.elements[8]*=h,In.elements[9]*=h,In.elements[10]*=h,e.setFromRotationMatrix(In),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,r,s,a,o=ci){const l=this.elements,c=2*s/(e-t),u=2*s/(n-r),h=(e+t)/(e-t),d=(n+r)/(n-r);let m,v;if(o===ci)m=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===Fa)m=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,s,a,o=ci){const l=this.elements,c=1/(e-t),u=1/(n-r),h=1/(a-s),d=(e+t)*c,m=(n+r)*u;let v,_;if(o===ci)v=(a+s)*h,_=-2*h;else if(o===Fa)v=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Fr=new I,In=new Qt,Mw=new I(0,0,0),Sw=new I(1,1,1),Ei=new I,$o=new I,dn=new I,Ld=new Qt,Dd=new xr;class Ja{constructor(t=0,e=0,n=0,r=Ja.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ze(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ld.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ld,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Dd.setFromEuler(this),this.setFromQuaternion(Dd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ja.DEFAULT_ORDER="XYZ";class s_{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Tw=0;const Id=new I,Br=new xr,ei=new Qt,jo=new I,Vs=new I,Cw=new I,Aw=new xr,Od=new I(1,0,0),Ud=new I(0,1,0),Nd=new I(0,0,1),Pw={type:"added"},Rw={type:"removed"};class ln extends Sr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tw++}),this.uuid=ys(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ln.DEFAULT_UP.clone();const t=new I,e=new Ja,n=new xr,r=new I(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Qt},normalMatrix:{value:new Ht}}),this.matrix=new Qt,this.matrixWorld=new Qt,this.matrixAutoUpdate=ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new s_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Br.setFromAxisAngle(t,e),this.quaternion.multiply(Br),this}rotateOnWorldAxis(t,e){return Br.setFromAxisAngle(t,e),this.quaternion.premultiply(Br),this}rotateX(t){return this.rotateOnAxis(Od,t)}rotateY(t){return this.rotateOnAxis(Ud,t)}rotateZ(t){return this.rotateOnAxis(Nd,t)}translateOnAxis(t,e){return Id.copy(t).applyQuaternion(this.quaternion),this.position.add(Id.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Od,t)}translateY(t){return this.translateOnAxis(Ud,t)}translateZ(t){return this.translateOnAxis(Nd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?jo.copy(t):jo.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(Vs,jo,this.up):ei.lookAt(jo,Vs,this.up),this.quaternion.setFromRotationMatrix(ei),r&&(ei.extractRotation(r.matrixWorld),Br.setFromRotationMatrix(ei),this.quaternion.premultiply(Br.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Pw)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Rw)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ei.multiply(t.parent.matrixWorld)),t.applyMatrix4(ei),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,t,Cw),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,Aw,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),d=a(t.skeletons),m=a(t.animations),v=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=r,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}ln.DEFAULT_UP=new I(0,1,0);ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const On=new I,ni=new I,kl=new I,ii=new I,kr=new I,zr=new I,Fd=new I,zl=new I,Vl=new I,Hl=new I;class Hn{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),On.subVectors(t,e),r.cross(On);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){On.subVectors(r,e),ni.subVectors(n,e),kl.subVectors(t,e);const a=On.dot(On),o=On.dot(ni),l=On.dot(kl),c=ni.dot(ni),u=ni.dot(kl),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,m=(c*l-o*u)*d,v=(a*u-o*l)*d;return s.set(1-m-v,v,m)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getInterpolation(t,e,n,r,s,a,o,l){return this.getBarycoord(t,e,n,r,ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ii.x),l.addScaledVector(a,ii.y),l.addScaledVector(o,ii.z),l)}static isFrontFacing(t,e,n,r){return On.subVectors(n,e),ni.subVectors(t,e),On.cross(ni).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return On.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),On.cross(ni).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Hn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Hn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return Hn.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return Hn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Hn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let a,o;kr.subVectors(r,n),zr.subVectors(s,n),zl.subVectors(t,n);const l=kr.dot(zl),c=zr.dot(zl);if(l<=0&&c<=0)return e.copy(n);Vl.subVectors(t,r);const u=kr.dot(Vl),h=zr.dot(Vl);if(u>=0&&h<=u)return e.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(kr,a);Hl.subVectors(t,s);const m=kr.dot(Hl),v=zr.dot(Hl);if(v>=0&&m<=v)return e.copy(s);const _=m*c-l*v;if(_<=0&&c>=0&&v<=0)return o=c/(c-v),e.copy(n).addScaledVector(zr,o);const p=u*v-m*h;if(p<=0&&h-u>=0&&m-v>=0)return Fd.subVectors(s,r),o=(h-u)/(h-u+(m-v)),e.copy(r).addScaledVector(Fd,o);const f=1/(p+_+d);return a=_*f,o=d*f,e.copy(n).addScaledVector(kr,a).addScaledVector(zr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const o_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mi={h:0,s:0,l:0},qo={h:0,s:0,l:0};function Gl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Wt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ue){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=te.workingColorSpace){if(t=Pu(t,1),e=ze(e,0,1),n=ze(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=Gl(a,s,t+1/3),this.g=Gl(a,s,t),this.b=Gl(a,s,t-1/3)}return te.toWorkingColorSpace(this,r),this}setStyle(t,e=Ue){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ue){const n=o_[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=as(t.r),this.g=as(t.g),this.b=as(t.b),this}copyLinearToSRGB(t){return this.r=Ll(t.r),this.g=Ll(t.g),this.b=Ll(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ue){return te.fromWorkingColorSpace(ke.copy(this),t),Math.round(ze(ke.r*255,0,255))*65536+Math.round(ze(ke.g*255,0,255))*256+Math.round(ze(ke.b*255,0,255))}getHexString(t=Ue){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(ke.copy(this),e);const n=ke.r,r=ke.g,s=ke.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(ke.copy(this),e),t.r=ke.r,t.g=ke.g,t.b=ke.b,t}getStyle(t=Ue){te.fromWorkingColorSpace(ke.copy(this),t);const e=ke.r,n=ke.g,r=ke.b;return t!==Ue?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Mi),this.setHSL(Mi.h+t,Mi.s+e,Mi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Mi),t.getHSL(qo);const n=eo(Mi.h,qo.h,e),r=eo(Mi.s,qo.s,e),s=eo(Mi.l,qo.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ke=new Wt;Wt.NAMES=o_;let Lw=0;class Eo extends Sr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lw++}),this.uuid=ys(),this.name="",this.type="Material",this.blending=ss,this.side=Gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fc,this.blendDst=Bc,this.blendEquation=sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Wt(0,0,0),this.blendAlpha=0,this.depthFunc=Ia,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ed,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Dr,this.stencilZFail=Dr,this.stencilZPass=Dr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ss&&(n.blending=this.blending),this.side!==Gi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Fc&&(n.blendSrc=this.blendSrc),this.blendDst!==Bc&&(n.blendDst=this.blendDst),this.blendEquation!==sr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ia&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ed&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Dr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Dr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Dr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class a_ extends Eo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Wm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ee=new I,Yo=new Lt;class Bn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Md,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=li,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return os("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Yo.fromBufferAttribute(this,e),Yo.applyMatrix3(t),this.setXY(e,Yo.x,Yo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix3(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix4(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyNormalMatrix(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.transformDirection(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Zr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Xe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Zr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Zr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Zr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Zr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array),r=Xe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array),r=Xe(r,this.array),s=Xe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Md&&(t.usage=this.usage),t}}class l_ extends Bn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class c_ extends Bn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class gn extends Bn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Dw=0;const En=new Qt,Wl=new ln,Vr=new I,pn=new Tr,Hs=new Tr,Le=new I;class Zn extends Sr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dw++}),this.uuid=ys(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(e_(t)?c_:l_)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ht().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return En.makeRotationFromQuaternion(t),this.applyMatrix4(En),this}rotateX(t){return En.makeRotationX(t),this.applyMatrix4(En),this}rotateY(t){return En.makeRotationY(t),this.applyMatrix4(En),this}rotateZ(t){return En.makeRotationZ(t),this.applyMatrix4(En),this}translate(t,e,n){return En.makeTranslation(t,e,n),this.applyMatrix4(En),this}scale(t,e,n){return En.makeScale(t,e,n),this.applyMatrix4(En),this}lookAt(t){return Wl.lookAt(t),Wl.updateMatrix(),this.applyMatrix4(Wl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vr).negate(),this.translate(Vr.x,Vr.y,Vr.z),this}setFromPoints(t){const e=[];for(let n=0,r=t.length;n<r;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new gn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];pn.setFromBufferAttribute(s),this.morphTargetsRelative?(Le.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(Le),Le.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(Le)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ws);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(pn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Hs.setFromBufferAttribute(o),this.morphTargetsRelative?(Le.addVectors(pn.min,Hs.min),pn.expandByPoint(Le),Le.addVectors(pn.max,Hs.max),pn.expandByPoint(Le)):(pn.expandByPoint(Hs.min),pn.expandByPoint(Hs.max))}pn.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)Le.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Le));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Le.fromBufferAttribute(o,c),l&&(Vr.fromBufferAttribute(t,c),Le.add(Vr)),r=Math.max(r,n.distanceToSquared(Le))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,r=e.position.array,s=e.normal.array,a=e.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let b=0;b<o;b++)c[b]=new I,u[b]=new I;const h=new I,d=new I,m=new I,v=new Lt,_=new Lt,p=new Lt,f=new I,y=new I;function g(b,P,G){h.fromArray(r,b*3),d.fromArray(r,P*3),m.fromArray(r,G*3),v.fromArray(a,b*2),_.fromArray(a,P*2),p.fromArray(a,G*2),d.sub(h),m.sub(h),_.sub(v),p.sub(v);const $=1/(_.x*p.y-p.x*_.y);isFinite($)&&(f.copy(d).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar($),y.copy(m).multiplyScalar(_.x).addScaledVector(d,-p.x).multiplyScalar($),c[b].add(f),c[P].add(f),c[G].add(f),u[b].add(y),u[P].add(y),u[G].add(y))}let w=this.groups;w.length===0&&(w=[{start:0,count:n.length}]);for(let b=0,P=w.length;b<P;++b){const G=w[b],$=G.start,L=G.count;for(let k=$,F=$+L;k<F;k+=3)g(n[k+0],n[k+1],n[k+2])}const T=new I,C=new I,M=new I,D=new I;function N(b){M.fromArray(s,b*3),D.copy(M);const P=c[b];T.copy(P),T.sub(M.multiplyScalar(M.dot(P))).normalize(),C.crossVectors(D,P);const $=C.dot(u[b])<0?-1:1;l[b*4]=T.x,l[b*4+1]=T.y,l[b*4+2]=T.z,l[b*4+3]=$}for(let b=0,P=w.length;b<P;++b){const G=w[b],$=G.start,L=G.count;for(let k=$,F=$+L;k<F;k+=3)N(n[k+0]),N(n[k+1]),N(n[k+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Bn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const r=new I,s=new I,a=new I,o=new I,l=new I,c=new I,u=new I,h=new I;if(t)for(let d=0,m=t.count;d<m;d+=3){const v=t.getX(d+0),_=t.getX(d+1),p=t.getX(d+2);r.fromBufferAttribute(e,v),s.fromBufferAttribute(e,_),a.fromBufferAttribute(e,p),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=e.count;d<m;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Le.fromBufferAttribute(t,e),Le.normalize(),t.setXYZ(e,Le.x,Le.y,Le.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let m=0,v=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*u;for(let f=0;f<u;f++)d[v++]=c[m++]}return new Bn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Zn,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],m=t(d,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const m=c[h];u.push(m.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,m=h.length;d<m;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bd=new Qt,Ji=new Ru,Ko=new ws,kd=new I,Hr=new I,Gr=new I,Wr=new I,Xl=new I,Zo=new I,Jo=new Lt,Qo=new Lt,ta=new Lt,zd=new I,Vd=new I,Hd=new I,ea=new I,na=new I;class Pn extends ln{constructor(t=new Zn,e=new a_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){Zo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(Xl.fromBufferAttribute(h,t),a?Zo.addScaledVector(Xl,u):Zo.addScaledVector(Xl.sub(e),u))}e.add(Zo)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ko.copy(n.boundingSphere),Ko.applyMatrix4(s),Ji.copy(t.ray).recast(t.near),!(Ko.containsPoint(Ji.origin)===!1&&(Ji.intersectSphere(Ko,kd)===null||Ji.origin.distanceToSquared(kd)>(t.far-t.near)**2))&&(Bd.copy(s).invert(),Ji.copy(t.ray).applyMatrix4(Bd),!(n.boundingBox!==null&&Ji.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ji)))}_computeIntersections(t,e,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,_=d.length;v<_;v++){const p=d[v],f=a[p.materialIndex],y=Math.max(p.start,m.start),g=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let w=y,T=g;w<T;w+=3){const C=o.getX(w),M=o.getX(w+1),D=o.getX(w+2);r=ia(this,f,t,n,c,u,h,C,M,D),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const v=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let p=v,f=_;p<f;p+=3){const y=o.getX(p),g=o.getX(p+1),w=o.getX(p+2);r=ia(this,a,t,n,c,u,h,y,g,w),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,_=d.length;v<_;v++){const p=d[v],f=a[p.materialIndex],y=Math.max(p.start,m.start),g=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let w=y,T=g;w<T;w+=3){const C=w,M=w+1,D=w+2;r=ia(this,f,t,n,c,u,h,C,M,D),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const v=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=v,f=_;p<f;p+=3){const y=p,g=p+1,w=p+2;r=ia(this,a,t,n,c,u,h,y,g,w),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}}}function Iw(i,t,e,n,r,s,a,o){let l;if(t.side===an?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,t.side===Gi,o),l===null)return null;na.copy(o),na.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(na);return c<e.near||c>e.far?null:{distance:c,point:na.clone(),object:i}}function ia(i,t,e,n,r,s,a,o,l,c){i.getVertexPosition(o,Hr),i.getVertexPosition(l,Gr),i.getVertexPosition(c,Wr);const u=Iw(i,t,e,n,Hr,Gr,Wr,ea);if(u){r&&(Jo.fromBufferAttribute(r,o),Qo.fromBufferAttribute(r,l),ta.fromBufferAttribute(r,c),u.uv=Hn.getInterpolation(ea,Hr,Gr,Wr,Jo,Qo,ta,new Lt)),s&&(Jo.fromBufferAttribute(s,o),Qo.fromBufferAttribute(s,l),ta.fromBufferAttribute(s,c),u.uv1=Hn.getInterpolation(ea,Hr,Gr,Wr,Jo,Qo,ta,new Lt),u.uv2=u.uv1),a&&(zd.fromBufferAttribute(a,o),Vd.fromBufferAttribute(a,l),Hd.fromBufferAttribute(a,c),u.normal=Hn.getInterpolation(ea,Hr,Gr,Wr,zd,Vd,Hd,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new I,materialIndex:0};Hn.getNormal(Hr,Gr,Wr,h.normal),u.face=h}return u}class Es extends Zn{constructor(t=1,e=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,m=0;v("z","y","x",-1,-1,n,e,t,a,s,0),v("z","y","x",1,-1,n,e,-t,a,s,1),v("x","z","y",1,1,t,n,e,r,a,2),v("x","z","y",1,-1,t,n,-e,r,a,3),v("x","y","z",1,-1,t,e,n,r,s,4),v("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new gn(c,3)),this.setAttribute("normal",new gn(u,3)),this.setAttribute("uv",new gn(h,2));function v(_,p,f,y,g,w,T,C,M,D,N){const b=w/M,P=T/D,G=w/2,$=T/2,L=C/2,k=M+1,F=D+1;let j=0,X=0;const q=new I;for(let Y=0;Y<F;Y++){const tt=Y*P-$;for(let st=0;st<k;st++){const Mt=st*b-G;q[_]=Mt*y,q[p]=tt*g,q[f]=L,c.push(q.x,q.y,q.z),q[_]=0,q[p]=0,q[f]=C>0?1:-1,u.push(q.x,q.y,q.z),h.push(st/M),h.push(1-Y/D),j+=1}}for(let Y=0;Y<D;Y++)for(let tt=0;tt<M;tt++){const st=d+tt+k*Y,Mt=d+tt+k*(Y+1),H=d+(tt+1)+k*(Y+1),K=d+(tt+1)+k*Y;l.push(st,Mt,K),l.push(Mt,H,K),X+=6}o.addGroup(m,X,N),m+=X,d+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Es(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function bs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function $e(i){const t={};for(let e=0;e<i.length;e++){const n=bs(i[e]);for(const r in n)t[r]=n[r]}return t}function Ow(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function u_(i){return i.getRenderTarget()===null?i.outputColorSpace:te.workingColorSpace}const Uw={clone:bs,merge:$e};var Nw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class jn extends Eo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nw,this.fragmentShader=Fw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=bs(t.uniforms),this.uniformsGroups=Ow(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Lu extends ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qt,this.projectionMatrix=new Qt,this.projectionMatrixInverse=new Qt,this.coordinateSystem=ci}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Si=new I,Gd=new Lt,Wd=new Lt;class tn extends Lu{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ho*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(to*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ho*2*Math.atan(Math.tan(to*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Si.x,Si.y).multiplyScalar(-t/Si.z),Si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Si.x,Si.y).multiplyScalar(-t/Si.z)}getViewSize(t,e){return this.getViewBounds(t,Gd,Wd),e.subVectors(Wd,Gd)}setViewOffset(t,e,n,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(to*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,e-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Xr=-90,$r=1;class Bw extends ln{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new tn(Xr,$r,t,e);r.layers=this.layers,this.add(r);const s=new tn(Xr,$r,t,e);s.layers=this.layers,this.add(s);const a=new tn(Xr,$r,t,e);a.layers=this.layers,this.add(a);const o=new tn(Xr,$r,t,e);o.layers=this.layers,this.add(o);const l=new tn(Xr,$r,t,e);l.layers=this.layers,this.add(l);const c=new tn(Xr,$r,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===ci)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Fa)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,a),t.setRenderTarget(n,2,r),t.render(e,o),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,r),t.render(e,u),t.setRenderTarget(h,d,m),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class h_ extends Ye{constructor(t,e,n,r,s,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:_s,super(t,e,n,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class kw extends mi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];e.encoding!==void 0&&(os("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===mr?Ue:Tn),this.texture=new h_(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Qe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Es(5,5,5),s=new jn({name:"CubemapFromEquirect",uniforms:bs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:an,blending:Fi});s.uniforms.tEquirect.value=e;const a=new Pn(r,s),o=e.minFilter;return e.minFilter===lr&&(e.minFilter=Qe),new Bw(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(s)}}const $l=new I,zw=new I,Vw=new Ht;class Pi{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=$l.subVectors(n,e).cross(zw.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta($l),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Vw.getNormalMatrix(t),r=this.coplanarPoint($l).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qi=new ws,ra=new I;class d_{constructor(t=new Pi,e=new Pi,n=new Pi,r=new Pi,s=new Pi,a=new Pi){this.planes=[t,e,n,r,s,a]}set(t,e,n,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ci){const n=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],h=r[6],d=r[7],m=r[8],v=r[9],_=r[10],p=r[11],f=r[12],y=r[13],g=r[14],w=r[15];if(n[0].setComponents(l-s,d-c,p-m,w-f).normalize(),n[1].setComponents(l+s,d+c,p+m,w+f).normalize(),n[2].setComponents(l+a,d+u,p+v,w+y).normalize(),n[3].setComponents(l-a,d-u,p-v,w-y).normalize(),n[4].setComponents(l-o,d-h,p-_,w-g).normalize(),e===ci)n[5].setComponents(l+o,d+h,p+_,w+g).normalize();else if(e===Fa)n[5].setComponents(o,h,_,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Qi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Qi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Qi)}intersectsSprite(t){return Qi.center.set(0,0,0),Qi.radius=.7071067811865476,Qi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Qi)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(ra.x=r.normal.x>0?t.max.x:t.min.x,ra.y=r.normal.y>0?t.max.y:t.min.y,ra.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(ra)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function p_(){let i=null,t=!1,e=null,n=null;function r(s,a){e(s,a),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Hw(i,t){const e=t.isWebGL2,n=new WeakMap;function r(c,u){const h=c.array,d=c.usage,m=h.byteLength,v=i.createBuffer();i.bindBuffer(u,v),i.bufferData(u,h,d),c.onUploadCallback();let _;if(h instanceof Float32Array)_=i.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=i.SHORT;else if(h instanceof Uint32Array)_=i.UNSIGNED_INT;else if(h instanceof Int32Array)_=i.INT;else if(h instanceof Int8Array)_=i.BYTE;else if(h instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:m}}function s(c,u,h){const d=u.array,m=u._updateRange,v=u.updateRanges;if(i.bindBuffer(h,c),m.count===-1&&v.length===0&&i.bufferSubData(h,0,d),v.length!==0){for(let _=0,p=v.length;_<p;_++){const f=v[_];e?i.bufferSubData(h,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):i.bufferSubData(h,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}u.clearUpdateRanges()}m.count!==-1&&(e?i.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):i.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);if(h===void 0)n.set(c,r(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,u),h.version=c.version}}return{get:a,remove:o,update:l}}class Mo extends Zn{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,h=t/o,d=e/l,m=[],v=[],_=[],p=[];for(let f=0;f<u;f++){const y=f*d-a;for(let g=0;g<c;g++){const w=g*h-s;v.push(w,-y,0),_.push(0,0,1),p.push(g/o),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<o;y++){const g=y+c*f,w=y+c*(f+1),T=y+1+c*(f+1),C=y+1+c*f;m.push(g,w,C),m.push(w,T,C)}this.setIndex(m),this.setAttribute("position",new gn(v,3)),this.setAttribute("normal",new gn(_,3)),this.setAttribute("uv",new gn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mo(t.width,t.height,t.widthSegments,t.heightSegments)}}var Gw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ww=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Xw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$w=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yw=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Kw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zw=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Jw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Qw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,eE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,nE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,iE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,rE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,sE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,oE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,aE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,uE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,hE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,dE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,pE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,fE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,mE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_E=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bE="gl_FragColor = linearToOutputTexel( gl_FragColor );",xE=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,yE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,wE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,EE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ME=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,SE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,TE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,CE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,AE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,PE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,RE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,LE=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,DE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,IE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,OE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,UE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,NE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,FE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,BE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,VE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,HE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,GE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,WE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,XE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$E=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,YE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,KE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ZE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,JE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,QE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,eM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,iM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,rM=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,sM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,oM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,aM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,lM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,dM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_M=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,gM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,EM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,MM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,SM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,TM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,CM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,AM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,PM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,RM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,LM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,DM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,IM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,OM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,UM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,NM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,FM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,BM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,VM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const HM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,GM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$M=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,YM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,KM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ZM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,JM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,QM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,eS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,iS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,aS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,cS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,uS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,pS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_S=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,vS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,xS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ft={alphahash_fragment:Gw,alphahash_pars_fragment:Ww,alphamap_fragment:Xw,alphamap_pars_fragment:$w,alphatest_fragment:jw,alphatest_pars_fragment:qw,aomap_fragment:Yw,aomap_pars_fragment:Kw,batching_pars_vertex:Zw,batching_vertex:Jw,begin_vertex:Qw,beginnormal_vertex:tE,bsdfs:eE,iridescence_fragment:nE,bumpmap_pars_fragment:iE,clipping_planes_fragment:rE,clipping_planes_pars_fragment:sE,clipping_planes_pars_vertex:oE,clipping_planes_vertex:aE,color_fragment:lE,color_pars_fragment:cE,color_pars_vertex:uE,color_vertex:hE,common:dE,cube_uv_reflection_fragment:pE,defaultnormal_vertex:fE,displacementmap_pars_vertex:mE,displacementmap_vertex:_E,emissivemap_fragment:vE,emissivemap_pars_fragment:gE,colorspace_fragment:bE,colorspace_pars_fragment:xE,envmap_fragment:yE,envmap_common_pars_fragment:wE,envmap_pars_fragment:EE,envmap_pars_vertex:ME,envmap_physical_pars_fragment:NE,envmap_vertex:SE,fog_vertex:TE,fog_pars_vertex:CE,fog_fragment:AE,fog_pars_fragment:PE,gradientmap_pars_fragment:RE,lightmap_fragment:LE,lightmap_pars_fragment:DE,lights_lambert_fragment:IE,lights_lambert_pars_fragment:OE,lights_pars_begin:UE,lights_toon_fragment:FE,lights_toon_pars_fragment:BE,lights_phong_fragment:kE,lights_phong_pars_fragment:zE,lights_physical_fragment:VE,lights_physical_pars_fragment:HE,lights_fragment_begin:GE,lights_fragment_maps:WE,lights_fragment_end:XE,logdepthbuf_fragment:$E,logdepthbuf_pars_fragment:jE,logdepthbuf_pars_vertex:qE,logdepthbuf_vertex:YE,map_fragment:KE,map_pars_fragment:ZE,map_particle_fragment:JE,map_particle_pars_fragment:QE,metalnessmap_fragment:tM,metalnessmap_pars_fragment:eM,morphcolor_vertex:nM,morphnormal_vertex:iM,morphtarget_pars_vertex:rM,morphtarget_vertex:sM,normal_fragment_begin:oM,normal_fragment_maps:aM,normal_pars_fragment:lM,normal_pars_vertex:cM,normal_vertex:uM,normalmap_pars_fragment:hM,clearcoat_normal_fragment_begin:dM,clearcoat_normal_fragment_maps:pM,clearcoat_pars_fragment:fM,iridescence_pars_fragment:mM,opaque_fragment:_M,packing:vM,premultiplied_alpha_fragment:gM,project_vertex:bM,dithering_fragment:xM,dithering_pars_fragment:yM,roughnessmap_fragment:wM,roughnessmap_pars_fragment:EM,shadowmap_pars_fragment:MM,shadowmap_pars_vertex:SM,shadowmap_vertex:TM,shadowmask_pars_fragment:CM,skinbase_vertex:AM,skinning_pars_vertex:PM,skinning_vertex:RM,skinnormal_vertex:LM,specularmap_fragment:DM,specularmap_pars_fragment:IM,tonemapping_fragment:OM,tonemapping_pars_fragment:UM,transmission_fragment:NM,transmission_pars_fragment:FM,uv_pars_fragment:BM,uv_pars_vertex:kM,uv_vertex:zM,worldpos_vertex:VM,background_vert:HM,background_frag:GM,backgroundCube_vert:WM,backgroundCube_frag:XM,cube_vert:$M,cube_frag:jM,depth_vert:qM,depth_frag:YM,distanceRGBA_vert:KM,distanceRGBA_frag:ZM,equirect_vert:JM,equirect_frag:QM,linedashed_vert:tS,linedashed_frag:eS,meshbasic_vert:nS,meshbasic_frag:iS,meshlambert_vert:rS,meshlambert_frag:sS,meshmatcap_vert:oS,meshmatcap_frag:aS,meshnormal_vert:lS,meshnormal_frag:cS,meshphong_vert:uS,meshphong_frag:hS,meshphysical_vert:dS,meshphysical_frag:pS,meshtoon_vert:fS,meshtoon_frag:mS,points_vert:_S,points_frag:vS,shadow_vert:gS,shadow_frag:bS,sprite_vert:xS,sprite_frag:yS},ot={common:{diffuse:{value:new Wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new Wt(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},zn={basic:{uniforms:$e([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:Ft.meshbasic_vert,fragmentShader:Ft.meshbasic_frag},lambert:{uniforms:$e([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Wt(0)}}]),vertexShader:Ft.meshlambert_vert,fragmentShader:Ft.meshlambert_frag},phong:{uniforms:$e([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Wt(0)},specular:{value:new Wt(1118481)},shininess:{value:30}}]),vertexShader:Ft.meshphong_vert,fragmentShader:Ft.meshphong_frag},standard:{uniforms:$e([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new Wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag},toon:{uniforms:$e([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new Wt(0)}}]),vertexShader:Ft.meshtoon_vert,fragmentShader:Ft.meshtoon_frag},matcap:{uniforms:$e([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:Ft.meshmatcap_vert,fragmentShader:Ft.meshmatcap_frag},points:{uniforms:$e([ot.points,ot.fog]),vertexShader:Ft.points_vert,fragmentShader:Ft.points_frag},dashed:{uniforms:$e([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ft.linedashed_vert,fragmentShader:Ft.linedashed_frag},depth:{uniforms:$e([ot.common,ot.displacementmap]),vertexShader:Ft.depth_vert,fragmentShader:Ft.depth_frag},normal:{uniforms:$e([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:Ft.meshnormal_vert,fragmentShader:Ft.meshnormal_frag},sprite:{uniforms:$e([ot.sprite,ot.fog]),vertexShader:Ft.sprite_vert,fragmentShader:Ft.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ft.background_vert,fragmentShader:Ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ft.backgroundCube_vert,fragmentShader:Ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ft.cube_vert,fragmentShader:Ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ft.equirect_vert,fragmentShader:Ft.equirect_frag},distanceRGBA:{uniforms:$e([ot.common,ot.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ft.distanceRGBA_vert,fragmentShader:Ft.distanceRGBA_frag},shadow:{uniforms:$e([ot.lights,ot.fog,{color:{value:new Wt(0)},opacity:{value:1}}]),vertexShader:Ft.shadow_vert,fragmentShader:Ft.shadow_frag}};zn.physical={uniforms:$e([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new Wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new Wt(0)},specularColor:{value:new Wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag};const sa={r:0,b:0,g:0};function wS(i,t,e,n,r,s,a){const o=new Wt(0);let l=s===!0?0:1,c,u,h=null,d=0,m=null;function v(p,f){let y=!1,g=f.isScene===!0?f.background:null;g&&g.isTexture&&(g=(f.backgroundBlurriness>0?e:t).get(g)),g===null?_(o,l):g&&g.isColor&&(_(g,1),y=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),g&&(g.isCubeTexture||g.mapping===Ka)?(u===void 0&&(u=new Pn(new Es(1,1,1),new jn({name:"BackgroundCubeMaterial",uniforms:bs(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,C,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=g,u.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=te.getTransfer(g.colorSpace)!==ae,(h!==g||d!==g.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,h=g,d=g.version,m=i.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new Pn(new Mo(2,2),new jn({name:"BackgroundMaterial",uniforms:bs(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:Gi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=te.getTransfer(g.colorSpace)!==ae,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),(h!==g||d!==g.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,h=g,d=g.version,m=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,f){p.getRGB(sa,u_(i)),n.buffers.color.setClear(sa.r,sa.g,sa.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(p,f=1){o.set(p),l=f,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(o,l)},render:v}}function ES(i,t,e,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=p(null);let c=l,u=!1;function h(L,k,F,j,X){let q=!1;if(a){const Y=_(j,F,k);c!==Y&&(c=Y,m(c.object)),q=f(L,j,F,X),q&&y(L,j,F,X)}else{const Y=k.wireframe===!0;(c.geometry!==j.id||c.program!==F.id||c.wireframe!==Y)&&(c.geometry=j.id,c.program=F.id,c.wireframe=Y,q=!0)}X!==null&&e.update(X,i.ELEMENT_ARRAY_BUFFER),(q||u)&&(u=!1,D(L,k,F,j),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function d(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function m(L){return n.isWebGL2?i.bindVertexArray(L):s.bindVertexArrayOES(L)}function v(L){return n.isWebGL2?i.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function _(L,k,F){const j=F.wireframe===!0;let X=o[L.id];X===void 0&&(X={},o[L.id]=X);let q=X[k.id];q===void 0&&(q={},X[k.id]=q);let Y=q[j];return Y===void 0&&(Y=p(d()),q[j]=Y),Y}function p(L){const k=[],F=[],j=[];for(let X=0;X<r;X++)k[X]=0,F[X]=0,j[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:F,attributeDivisors:j,object:L,attributes:{},index:null}}function f(L,k,F,j){const X=c.attributes,q=k.attributes;let Y=0;const tt=F.getAttributes();for(const st in tt)if(tt[st].location>=0){const H=X[st];let K=q[st];if(K===void 0&&(st==="instanceMatrix"&&L.instanceMatrix&&(K=L.instanceMatrix),st==="instanceColor"&&L.instanceColor&&(K=L.instanceColor)),H===void 0||H.attribute!==K||K&&H.data!==K.data)return!0;Y++}return c.attributesNum!==Y||c.index!==j}function y(L,k,F,j){const X={},q=k.attributes;let Y=0;const tt=F.getAttributes();for(const st in tt)if(tt[st].location>=0){let H=q[st];H===void 0&&(st==="instanceMatrix"&&L.instanceMatrix&&(H=L.instanceMatrix),st==="instanceColor"&&L.instanceColor&&(H=L.instanceColor));const K={};K.attribute=H,H&&H.data&&(K.data=H.data),X[st]=K,Y++}c.attributes=X,c.attributesNum=Y,c.index=j}function g(){const L=c.newAttributes;for(let k=0,F=L.length;k<F;k++)L[k]=0}function w(L){T(L,0)}function T(L,k){const F=c.newAttributes,j=c.enabledAttributes,X=c.attributeDivisors;F[L]=1,j[L]===0&&(i.enableVertexAttribArray(L),j[L]=1),X[L]!==k&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,k),X[L]=k)}function C(){const L=c.newAttributes,k=c.enabledAttributes;for(let F=0,j=k.length;F<j;F++)k[F]!==L[F]&&(i.disableVertexAttribArray(F),k[F]=0)}function M(L,k,F,j,X,q,Y){Y===!0?i.vertexAttribIPointer(L,k,F,X,q):i.vertexAttribPointer(L,k,F,j,X,q)}function D(L,k,F,j){if(n.isWebGL2===!1&&(L.isInstancedMesh||j.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;g();const X=j.attributes,q=F.getAttributes(),Y=k.defaultAttributeValues;for(const tt in q){const st=q[tt];if(st.location>=0){let Mt=X[tt];if(Mt===void 0&&(tt==="instanceMatrix"&&L.instanceMatrix&&(Mt=L.instanceMatrix),tt==="instanceColor"&&L.instanceColor&&(Mt=L.instanceColor)),Mt!==void 0){const H=Mt.normalized,K=Mt.itemSize,ht=e.get(Mt);if(ht===void 0)continue;const wt=ht.buffer,St=ht.type,pt=ht.bytesPerElement,$t=n.isWebGL2===!0&&(St===i.INT||St===i.UNSIGNED_INT||Mt.gpuType===$m);if(Mt.isInterleavedBufferAttribute){const Rt=Mt.data,U=Rt.stride,Te=Mt.offset;if(Rt.isInstancedInterleavedBuffer){for(let xt=0;xt<st.locationSize;xt++)T(st.location+xt,Rt.meshPerAttribute);L.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Rt.meshPerAttribute*Rt.count)}else for(let xt=0;xt<st.locationSize;xt++)w(st.location+xt);i.bindBuffer(i.ARRAY_BUFFER,wt);for(let xt=0;xt<st.locationSize;xt++)M(st.location+xt,K/st.locationSize,St,H,U*pt,(Te+K/st.locationSize*xt)*pt,$t)}else{if(Mt.isInstancedBufferAttribute){for(let Rt=0;Rt<st.locationSize;Rt++)T(st.location+Rt,Mt.meshPerAttribute);L.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let Rt=0;Rt<st.locationSize;Rt++)w(st.location+Rt);i.bindBuffer(i.ARRAY_BUFFER,wt);for(let Rt=0;Rt<st.locationSize;Rt++)M(st.location+Rt,K/st.locationSize,St,H,K*pt,K/st.locationSize*Rt*pt,$t)}}else if(Y!==void 0){const H=Y[tt];if(H!==void 0)switch(H.length){case 2:i.vertexAttrib2fv(st.location,H);break;case 3:i.vertexAttrib3fv(st.location,H);break;case 4:i.vertexAttrib4fv(st.location,H);break;default:i.vertexAttrib1fv(st.location,H)}}}}C()}function N(){G();for(const L in o){const k=o[L];for(const F in k){const j=k[F];for(const X in j)v(j[X].object),delete j[X];delete k[F]}delete o[L]}}function b(L){if(o[L.id]===void 0)return;const k=o[L.id];for(const F in k){const j=k[F];for(const X in j)v(j[X].object),delete j[X];delete k[F]}delete o[L.id]}function P(L){for(const k in o){const F=o[k];if(F[L.id]===void 0)continue;const j=F[L.id];for(const X in j)v(j[X].object),delete j[X];delete F[L.id]}}function G(){$(),u=!0,c!==l&&(c=l,m(c.object))}function $(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:G,resetDefaultState:$,dispose:N,releaseStatesOfGeometry:b,releaseStatesOfProgram:P,initAttributes:g,enableAttribute:w,disableUnusedAttributes:C}}function MS(i,t,e,n){const r=n.isWebGL2;let s;function a(u){s=u}function o(u,h){i.drawArrays(s,u,h),e.update(h,s,1)}function l(u,h,d){if(d===0)return;let m,v;if(r)m=i,v="drawArraysInstanced";else if(m=t.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[v](s,u,h,d),e.update(h,s,d)}function c(u,h,d){if(d===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<d;v++)this.render(u[v],h[v]);else{m.multiDrawArraysWEBGL(s,u,0,h,0,d);let v=0;for(let _=0;_<d;_++)v+=h[_];e.update(v,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function SS(i,t,e){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const M=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(M){if(M==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),g=d>0,w=a||t.has("OES_texture_float"),T=g&&w,C=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:v,maxAttributes:_,maxVertexUniforms:p,maxVaryings:f,maxFragmentUniforms:y,vertexTextures:g,floatFragmentTextures:w,floatVertexTextures:T,maxSamples:C}}function TS(i){const t=this;let e=null,n=0,r=!1,s=!1;const a=new Pi,o=new Ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||n!==0||r;return r=d,n=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,m){const v=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,f=i.get(h);if(!r||v===null||v.length===0||s&&!p)s?u(null):c();else{const y=s?0:n,g=y*4;let w=f.clippingState||null;l.value=w,w=u(v,d,g,m);for(let T=0;T!==g;++T)w[T]=e[T];f.clippingState=w,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,m,v){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=l.value,v!==!0||p===null){const f=m+_*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(p===null||p.length<f)&&(p=new Float32Array(f));for(let g=0,w=m;g!==_;++g,w+=4)a.copy(h[g]).applyMatrix4(y,o),a.normal.toArray(p,w),p[w+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function CS(i){let t=new WeakMap;function e(a,o){return o===kc?a.mapping=_s:o===zc&&(a.mapping=vs),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===kc||o===zc)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new kw(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",r),e(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class AS extends Lu{constructor(t=-1,e=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ts=4,Xd=[.125,.215,.35,.446,.526,.582],or=20,jl=new AS,$d=new Wt;let ql=null,Yl=0,Kl=0;const nr=(1+Math.sqrt(5))/2,jr=1/nr,jd=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,nr,jr),new I(0,nr,-jr),new I(jr,0,nr),new I(-jr,0,nr),new I(nr,jr,0),new I(-nr,jr,0)];class qd{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){ql=this._renderer.getRenderTarget(),Yl=this._renderer.getActiveCubeFace(),Kl=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ql,Yl,Kl),t.scissorTest=!1,oa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===_s||t.mapping===vs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ql=this._renderer.getRenderTarget(),Yl=this._renderer.getActiveCubeFace(),Kl=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Qe,minFilter:Qe,generateMipmaps:!1,type:uo,format:Fn,colorSpace:fi,depthBuffer:!1},r=Yd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yd(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=PS(s)),this._blurMaterial=RS(s,t,e)}return r}_compileMaterial(t){const e=new Pn(this._lodPlanes[0],t);this._renderer.compile(e,jl)}_sceneToCubeUV(t,e,n,r){const o=new tn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor($d),u.toneMapping=Bi,u.autoClear=!1;const m=new a_({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1}),v=new Pn(new Es,m);let _=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,_=!0):(m.color.copy($d),_=!0);for(let f=0;f<6;f++){const y=f%3;y===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):y===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const g=this._cubeSize;oa(r,y*g,f>2?g:0,g,g),u.setRenderTarget(r),_&&u.render(v,o),u.render(t,o)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===_s||t.mapping===vs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kd());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Pn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;oa(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,jl)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=jd[(r-1)%jd.length];this._blur(t,r-1,r,s,a)}e.autoClear=n}_blur(t,e,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,r,"latitudinal",s),this._halfBlur(a,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Pn(this._lodPlanes[r],c),d=c.uniforms,m=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*or-1),_=s/v,p=isFinite(s)?1+Math.floor(u*_):or;p>or&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${or}`);const f=[];let y=0;for(let M=0;M<or;++M){const D=M/_,N=Math.exp(-D*D/2);f.push(N),M===0?y+=N:M<p&&(y+=2*N)}for(let M=0;M<f.length;M++)f[M]=f[M]/y;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:g}=this;d.dTheta.value=v,d.mipInt.value=g-n;const w=this._sizeLods[r],T=3*w*(r>g-ts?r-g+ts:0),C=4*(this._cubeSize-w);oa(e,T,C,3*w,2*w),l.setRenderTarget(e),l.render(h,jl)}}function PS(i){const t=[],e=[],n=[];let r=i;const s=i-ts+1+Xd.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>i-ts?l=Xd[a-i+ts-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,v=6,_=3,p=2,f=1,y=new Float32Array(_*v*m),g=new Float32Array(p*v*m),w=new Float32Array(f*v*m);for(let C=0;C<m;C++){const M=C%3*2/3-1,D=C>2?0:-1,N=[M,D,0,M+2/3,D,0,M+2/3,D+1,0,M,D,0,M+2/3,D+1,0,M,D+1,0];y.set(N,_*v*C),g.set(d,p*v*C);const b=[C,C,C,C,C,C];w.set(b,f*v*C)}const T=new Zn;T.setAttribute("position",new Bn(y,_)),T.setAttribute("uv",new Bn(g,p)),T.setAttribute("faceIndex",new Bn(w,f)),t.push(T),r>ts&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Yd(i,t,e){const n=new mi(i,t,e);return n.texture.mapping=Ka,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function oa(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function RS(i,t,e){const n=new Float32Array(or),r=new I(0,1,0);return new jn({name:"SphericalGaussianBlur",defines:{n:or,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Du(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Kd(){return new jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Du(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Zd(){return new jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Du(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Du(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function LS(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===kc||l===zc,u=l===_s||l===vs;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=t.get(o);return e===null&&(e=new qd(i)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),t.set(o,h),h.texture}else{if(t.has(o))return t.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&r(h)){e===null&&(e=new qd(i));const d=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function DS(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const r=e(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function IS(i,t,e,n){const r={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const v in d.attributes)t.remove(d.attributes[v]);for(const v in d.morphAttributes){const _=d.morphAttributes[v];for(let p=0,f=_.length;p<f;p++)t.remove(_[p])}d.removeEventListener("dispose",a),delete r[d.id];const m=s.get(d);m&&(t.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,e.memory.geometries++),d}function l(h){const d=h.attributes;for(const v in d)t.update(d[v],i.ARRAY_BUFFER);const m=h.morphAttributes;for(const v in m){const _=m[v];for(let p=0,f=_.length;p<f;p++)t.update(_[p],i.ARRAY_BUFFER)}}function c(h){const d=[],m=h.index,v=h.attributes.position;let _=0;if(m!==null){const y=m.array;_=m.version;for(let g=0,w=y.length;g<w;g+=3){const T=y[g+0],C=y[g+1],M=y[g+2];d.push(T,C,C,M,M,T)}}else if(v!==void 0){const y=v.array;_=v.version;for(let g=0,w=y.length/3-1;g<w;g+=3){const T=g+0,C=g+1,M=g+2;d.push(T,C,C,M,M,T)}}else return;const p=new(e_(d)?c_:l_)(d,1);p.version=_;const f=s.get(h);f&&t.remove(f),s.set(h,p)}function u(h){const d=s.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function OS(i,t,e,n){const r=n.isWebGL2;let s;function a(m){s=m}let o,l;function c(m){o=m.type,l=m.bytesPerElement}function u(m,v){i.drawElements(s,v,o,m*l),e.update(v,s,1)}function h(m,v,_){if(_===0)return;let p,f;if(r)p=i,f="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](s,v,o,m*l,_),e.update(v,s,_)}function d(m,v,_){if(_===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<_;f++)this.render(m[f]/l,v[f]);else{p.multiDrawElementsWEBGL(s,v,0,o,m,0,_);let f=0;for(let y=0;y<_;y++)f+=v[y];e.update(f,s,1)}}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=d}function US(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(s/3);break;case i.LINES:e.lines+=o*(s/2);break;case i.LINE_STRIP:e.lines+=o*(s-1);break;case i.LINE_LOOP:e.lines+=o*s;break;case i.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function NS(i,t){return i[0]-t[0]}function FS(i,t){return Math.abs(t[1])-Math.abs(i[1])}function BS(i,t,e){const n={},r=new Float32Array(8),s=new WeakMap,a=new Ne,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h){const d=c.morphTargetInfluences;if(t.isWebGL2===!0){const v=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=v!==void 0?v.length:0;let p=s.get(u);if(p===void 0||p.count!==_){let k=function(){$.dispose(),s.delete(u),u.removeEventListener("dispose",k)};var m=k;p!==void 0&&p.texture.dispose();const g=u.morphAttributes.position!==void 0,w=u.morphAttributes.normal!==void 0,T=u.morphAttributes.color!==void 0,C=u.morphAttributes.position||[],M=u.morphAttributes.normal||[],D=u.morphAttributes.color||[];let N=0;g===!0&&(N=1),w===!0&&(N=2),T===!0&&(N=3);let b=u.attributes.position.count*N,P=1;b>t.maxTextureSize&&(P=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const G=new Float32Array(b*P*4*_),$=new r_(G,b,P,_);$.type=li,$.needsUpdate=!0;const L=N*4;for(let F=0;F<_;F++){const j=C[F],X=M[F],q=D[F],Y=b*P*4*F;for(let tt=0;tt<j.count;tt++){const st=tt*L;g===!0&&(a.fromBufferAttribute(j,tt),G[Y+st+0]=a.x,G[Y+st+1]=a.y,G[Y+st+2]=a.z,G[Y+st+3]=0),w===!0&&(a.fromBufferAttribute(X,tt),G[Y+st+4]=a.x,G[Y+st+5]=a.y,G[Y+st+6]=a.z,G[Y+st+7]=0),T===!0&&(a.fromBufferAttribute(q,tt),G[Y+st+8]=a.x,G[Y+st+9]=a.y,G[Y+st+10]=a.z,G[Y+st+11]=q.itemSize===4?a.w:1)}}p={count:_,texture:$,size:new Lt(b,P)},s.set(u,p),u.addEventListener("dispose",k)}let f=0;for(let g=0;g<d.length;g++)f+=d[g];const y=u.morphTargetsRelative?1:1-f;h.getUniforms().setValue(i,"morphTargetBaseInfluence",y),h.getUniforms().setValue(i,"morphTargetInfluences",d),h.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),h.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}else{const v=d===void 0?0:d.length;let _=n[u.id];if(_===void 0||_.length!==v){_=[];for(let w=0;w<v;w++)_[w]=[w,0];n[u.id]=_}for(let w=0;w<v;w++){const T=_[w];T[0]=w,T[1]=d[w]}_.sort(FS);for(let w=0;w<8;w++)w<v&&_[w][1]?(o[w][0]=_[w][0],o[w][1]=_[w][1]):(o[w][0]=Number.MAX_SAFE_INTEGER,o[w][1]=0);o.sort(NS);const p=u.morphAttributes.position,f=u.morphAttributes.normal;let y=0;for(let w=0;w<8;w++){const T=o[w],C=T[0],M=T[1];C!==Number.MAX_SAFE_INTEGER&&M?(p&&u.getAttribute("morphTarget"+w)!==p[C]&&u.setAttribute("morphTarget"+w,p[C]),f&&u.getAttribute("morphNormal"+w)!==f[C]&&u.setAttribute("morphNormal"+w,f[C]),r[w]=M,y+=M):(p&&u.hasAttribute("morphTarget"+w)===!0&&u.deleteAttribute("morphTarget"+w),f&&u.hasAttribute("morphNormal"+w)===!0&&u.deleteAttribute("morphNormal"+w),r[w]=0)}const g=u.morphTargetsRelative?1:1-y;h.getUniforms().setValue(i,"morphTargetBaseInfluence",g),h.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function kS(i,t,e,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(r.get(h)!==c&&(t.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}class f_ extends Ye{constructor(t,e,n,r,s,a,o,l,c,u){if(u=u!==void 0?u:fr,u!==fr&&u!==gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===fr&&(n=Ii),n===void 0&&u===gs&&(n=pr),super(null,r,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:je,this.minFilter=l!==void 0?l:je,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const m_=new Ye,__=new f_(1,1);__.compareFunction=t_;const v_=new r_,g_=new ww,b_=new h_,Jd=[],Qd=[],tp=new Float32Array(16),ep=new Float32Array(9),np=new Float32Array(4);function Ms(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=Jd[r];if(s===void 0&&(s=new Float32Array(r),Jd[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(s,o)}return s}function Ae(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Pe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Qa(i,t){let e=Qd[t];e===void 0&&(e=new Int32Array(t),Qd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function zS(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function VS(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2fv(this.addr,t),Pe(e,t)}}function HS(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ae(e,t))return;i.uniform3fv(this.addr,t),Pe(e,t)}}function GS(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4fv(this.addr,t),Pe(e,t)}}function WS(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Pe(e,t)}else{if(Ae(e,n))return;np.set(n),i.uniformMatrix2fv(this.addr,!1,np),Pe(e,n)}}function XS(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Pe(e,t)}else{if(Ae(e,n))return;ep.set(n),i.uniformMatrix3fv(this.addr,!1,ep),Pe(e,n)}}function $S(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Pe(e,t)}else{if(Ae(e,n))return;tp.set(n),i.uniformMatrix4fv(this.addr,!1,tp),Pe(e,n)}}function jS(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function qS(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2iv(this.addr,t),Pe(e,t)}}function YS(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;i.uniform3iv(this.addr,t),Pe(e,t)}}function KS(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4iv(this.addr,t),Pe(e,t)}}function ZS(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function JS(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2uiv(this.addr,t),Pe(e,t)}}function QS(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;i.uniform3uiv(this.addr,t),Pe(e,t)}}function tT(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4uiv(this.addr,t),Pe(e,t)}}function eT(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?__:m_;e.setTexture2D(t||s,r)}function nT(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||g_,r)}function iT(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||b_,r)}function rT(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||v_,r)}function sT(i){switch(i){case 5126:return zS;case 35664:return VS;case 35665:return HS;case 35666:return GS;case 35674:return WS;case 35675:return XS;case 35676:return $S;case 5124:case 35670:return jS;case 35667:case 35671:return qS;case 35668:case 35672:return YS;case 35669:case 35673:return KS;case 5125:return ZS;case 36294:return JS;case 36295:return QS;case 36296:return tT;case 35678:case 36198:case 36298:case 36306:case 35682:return eT;case 35679:case 36299:case 36307:return nT;case 35680:case 36300:case 36308:case 36293:return iT;case 36289:case 36303:case 36311:case 36292:return rT}}function oT(i,t){i.uniform1fv(this.addr,t)}function aT(i,t){const e=Ms(t,this.size,2);i.uniform2fv(this.addr,e)}function lT(i,t){const e=Ms(t,this.size,3);i.uniform3fv(this.addr,e)}function cT(i,t){const e=Ms(t,this.size,4);i.uniform4fv(this.addr,e)}function uT(i,t){const e=Ms(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function hT(i,t){const e=Ms(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function dT(i,t){const e=Ms(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function pT(i,t){i.uniform1iv(this.addr,t)}function fT(i,t){i.uniform2iv(this.addr,t)}function mT(i,t){i.uniform3iv(this.addr,t)}function _T(i,t){i.uniform4iv(this.addr,t)}function vT(i,t){i.uniform1uiv(this.addr,t)}function gT(i,t){i.uniform2uiv(this.addr,t)}function bT(i,t){i.uniform3uiv(this.addr,t)}function xT(i,t){i.uniform4uiv(this.addr,t)}function yT(i,t,e){const n=this.cache,r=t.length,s=Qa(e,r);Ae(n,s)||(i.uniform1iv(this.addr,s),Pe(n,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||m_,s[a])}function wT(i,t,e){const n=this.cache,r=t.length,s=Qa(e,r);Ae(n,s)||(i.uniform1iv(this.addr,s),Pe(n,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||g_,s[a])}function ET(i,t,e){const n=this.cache,r=t.length,s=Qa(e,r);Ae(n,s)||(i.uniform1iv(this.addr,s),Pe(n,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||b_,s[a])}function MT(i,t,e){const n=this.cache,r=t.length,s=Qa(e,r);Ae(n,s)||(i.uniform1iv(this.addr,s),Pe(n,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||v_,s[a])}function ST(i){switch(i){case 5126:return oT;case 35664:return aT;case 35665:return lT;case 35666:return cT;case 35674:return uT;case 35675:return hT;case 35676:return dT;case 5124:case 35670:return pT;case 35667:case 35671:return fT;case 35668:case 35672:return mT;case 35669:case 35673:return _T;case 5125:return vT;case 36294:return gT;case 36295:return bT;case 36296:return xT;case 35678:case 36198:case 36298:case 36306:case 35682:return yT;case 35679:case 36299:case 36307:return wT;case 35680:case 36300:case 36308:case 36293:return ET;case 36289:case 36303:case 36311:case 36292:return MT}}class TT{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=sT(e.type)}}class CT{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ST(e.type)}}class AT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],n)}}}const Zl=/(\w+)(\])?(\[|\.)?/g;function ip(i,t){i.seq.push(t),i.map[t.id]=t}function PT(i,t,e){const n=i.name,r=n.length;for(Zl.lastIndex=0;;){const s=Zl.exec(n),a=Zl.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){ip(e,c===void 0?new TT(o,i,t):new CT(o,i,t));break}else{let h=e.map[o];h===void 0&&(h=new AT(o),ip(e,h)),e=h}}}class xa{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);PT(s,a,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function rp(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const RT=37297;let LT=0;function DT(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function IT(i){const t=te.getPrimaries(te.workingColorSpace),e=te.getPrimaries(i);let n;switch(t===e?n="":t===Na&&e===Ua?n="LinearDisplayP3ToLinearSRGB":t===Ua&&e===Na&&(n="LinearSRGBToLinearDisplayP3"),i){case fi:case Za:return[n,"LinearTransferOETF"];case Ue:case Au:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function sp(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+DT(i.getShaderSource(t),a)}else return r}function OT(i,t){const e=IT(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function UT(i,t){let e;switch(t){case Ly:e="Linear";break;case Dy:e="Reinhard";break;case Iy:e="OptimizedCineon";break;case Oy:e="ACESFilmic";break;case Ny:e="AgX";break;case Uy:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function NT(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.alphaToCoverage||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(es).join(`
`)}function FT(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(es).join(`
`)}function BT(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function kT(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function es(i){return i!==""}function op(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ap(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const zT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xc(i){return i.replace(zT,HT)}const VT=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function HT(i,t){let e=Ft[t];if(e===void 0){const n=VT.get(t);if(n!==void 0)e=Ft[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Xc(e)}const GT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lp(i){return i.replace(GT,WT)}function WT(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function cp(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	`;return i.isWebGL2&&(t+=`precision ${i.precision} sampler3D;
		precision ${i.precision} sampler2DArray;
		precision ${i.precision} sampler2DShadow;
		precision ${i.precision} samplerCubeShadow;
		precision ${i.precision} sampler2DArrayShadow;
		precision ${i.precision} isampler2D;
		precision ${i.precision} isampler3D;
		precision ${i.precision} isamplerCube;
		precision ${i.precision} isampler2DArray;
		precision ${i.precision} usampler2D;
		precision ${i.precision} usampler3D;
		precision ${i.precision} usamplerCube;
		precision ${i.precision} usampler2DArray;
		`),i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function XT(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Gm?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===sy?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===si&&(t="SHADOWMAP_TYPE_VSM"),t}function $T(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case _s:case vs:t="ENVMAP_TYPE_CUBE";break;case Ka:t="ENVMAP_TYPE_CUBE_UV";break}return t}function jT(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case vs:t="ENVMAP_MODE_REFRACTION";break}return t}function qT(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Wm:t="ENVMAP_BLENDING_MULTIPLY";break;case Py:t="ENVMAP_BLENDING_MIX";break;case Ry:t="ENVMAP_BLENDING_ADD";break}return t}function YT(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function KT(i,t,e,n){const r=i.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=XT(e),c=$T(e),u=jT(e),h=qT(e),d=YT(e),m=e.isWebGL2?"":NT(e),v=FT(e),_=BT(s),p=r.createProgram();let f,y,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(es).join(`
`),f.length>0&&(f+=`
`),y=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(es).join(`
`),y.length>0&&(y+=`
`)):(f=[cp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(es).join(`
`),y=[m,cp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Bi?"#define TONE_MAPPING":"",e.toneMapping!==Bi?Ft.tonemapping_pars_fragment:"",e.toneMapping!==Bi?UT("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ft.colorspace_pars_fragment,OT("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(es).join(`
`)),a=Xc(a),a=op(a,e),a=ap(a,e),o=Xc(o),o=op(o,e),o=ap(o,e),a=lp(a),o=lp(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,f=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,y=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Sd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Sd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const w=g+f+a,T=g+y+o,C=rp(r,r.VERTEX_SHADER,w),M=rp(r,r.FRAGMENT_SHADER,T);r.attachShader(p,C),r.attachShader(p,M),e.index0AttributeName!==void 0?r.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function D(G){if(i.debug.checkShaderErrors){const $=r.getProgramInfoLog(p).trim(),L=r.getShaderInfoLog(C).trim(),k=r.getShaderInfoLog(M).trim();let F=!0,j=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(F=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,p,C,M);else{const X=sp(r,C,"vertex"),q=sp(r,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+$+`
`+X+`
`+q)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(L===""||k==="")&&(j=!1);j&&(G.diagnostics={runnable:F,programLog:$,vertexShader:{log:L,prefix:f},fragmentShader:{log:k,prefix:y}})}r.deleteShader(C),r.deleteShader(M),N=new xa(r,p),b=kT(r,p)}let N;this.getUniforms=function(){return N===void 0&&D(this),N};let b;this.getAttributes=function(){return b===void 0&&D(this),b};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(p,RT)),P},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=LT++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=C,this.fragmentShader=M,this}let ZT=0;class JT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new QT(t),e.set(t,n)),n}}class QT{constructor(t){this.id=ZT++,this.code=t,this.usedTimes=0}}function tC(i,t,e,n,r,s,a){const o=new s_,l=new JT,c=new Set,u=[],h=r.isWebGL2,d=r.logarithmicDepthBuffer,m=r.vertexTextures;let v=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(b){return c.add(b),b===0?"uv":`uv${b}`}function f(b,P,G,$,L){const k=$.fog,F=L.geometry,j=b.isMeshStandardMaterial?$.environment:null,X=(b.isMeshStandardMaterial?e:t).get(b.envMap||j),q=X&&X.mapping===Ka?X.image.height:null,Y=_[b.type];b.precision!==null&&(v=r.getMaxPrecision(b.precision),v!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",v,"instead."));const tt=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,st=tt!==void 0?tt.length:0;let Mt=0;F.morphAttributes.position!==void 0&&(Mt=1),F.morphAttributes.normal!==void 0&&(Mt=2),F.morphAttributes.color!==void 0&&(Mt=3);let H,K,ht,wt;if(Y){const Gt=zn[Y];H=Gt.vertexShader,K=Gt.fragmentShader}else H=b.vertexShader,K=b.fragmentShader,l.update(b),ht=l.getVertexShaderID(b),wt=l.getFragmentShaderID(b);const St=i.getRenderTarget(),pt=L.isInstancedMesh===!0,$t=L.isBatchedMesh===!0,Rt=!!b.map,U=!!b.matcap,Te=!!X,xt=!!b.aoMap,Ct=!!b.lightMap,_t=!!b.bumpMap,oe=!!b.normalMap,Dt=!!b.displacementMap,S=!!b.emissiveMap,x=!!b.metalnessMap,B=!!b.roughnessMap,it=b.anisotropy>0,Z=b.clearcoat>0,et=b.iridescence>0,ft=b.sheen>0,at=b.transmission>0,dt=it&&!!b.anisotropyMap,Et=Z&&!!b.clearcoatMap,It=Z&&!!b.clearcoatNormalMap,J=Z&&!!b.clearcoatRoughnessMap,Zt=et&&!!b.iridescenceMap,Bt=et&&!!b.iridescenceThicknessMap,At=ft&&!!b.sheenColorMap,gt=ft&&!!b.sheenRoughnessMap,ct=!!b.specularMap,Ut=!!b.specularColorMap,R=!!b.specularIntensityMap,rt=at&&!!b.transmissionMap,lt=at&&!!b.thicknessMap,bt=!!b.gradientMap,A=!!b.alphaMap,nt=b.alphaTest>0,Q=!!b.alphaHash,mt=!!b.extensions;let yt=Bi;b.toneMapped&&(St===null||St.isXRRenderTarget===!0)&&(yt=i.toneMapping);const qt={isWebGL2:h,shaderID:Y,shaderType:b.type,shaderName:b.name,vertexShader:H,fragmentShader:K,defines:b.defines,customVertexShaderID:ht,customFragmentShaderID:wt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:v,batching:$t,instancing:pt,instancingColor:pt&&L.instanceColor!==null,supportsVertexTextures:m,outputColorSpace:St===null?i.outputColorSpace:St.isXRRenderTarget===!0?St.texture.colorSpace:fi,alphaToCoverage:!!b.alphaToCoverage,map:Rt,matcap:U,envMap:Te,envMapMode:Te&&X.mapping,envMapCubeUVHeight:q,aoMap:xt,lightMap:Ct,bumpMap:_t,normalMap:oe,displacementMap:m&&Dt,emissiveMap:S,normalMapObjectSpace:oe&&b.normalMapType===qy,normalMapTangentSpace:oe&&b.normalMapType===jy,metalnessMap:x,roughnessMap:B,anisotropy:it,anisotropyMap:dt,clearcoat:Z,clearcoatMap:Et,clearcoatNormalMap:It,clearcoatRoughnessMap:J,iridescence:et,iridescenceMap:Zt,iridescenceThicknessMap:Bt,sheen:ft,sheenColorMap:At,sheenRoughnessMap:gt,specularMap:ct,specularColorMap:Ut,specularIntensityMap:R,transmission:at,transmissionMap:rt,thicknessMap:lt,gradientMap:bt,opaque:b.transparent===!1&&b.blending===ss&&b.alphaToCoverage===!1,alphaMap:A,alphaTest:nt,alphaHash:Q,combine:b.combine,mapUv:Rt&&p(b.map.channel),aoMapUv:xt&&p(b.aoMap.channel),lightMapUv:Ct&&p(b.lightMap.channel),bumpMapUv:_t&&p(b.bumpMap.channel),normalMapUv:oe&&p(b.normalMap.channel),displacementMapUv:Dt&&p(b.displacementMap.channel),emissiveMapUv:S&&p(b.emissiveMap.channel),metalnessMapUv:x&&p(b.metalnessMap.channel),roughnessMapUv:B&&p(b.roughnessMap.channel),anisotropyMapUv:dt&&p(b.anisotropyMap.channel),clearcoatMapUv:Et&&p(b.clearcoatMap.channel),clearcoatNormalMapUv:It&&p(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&p(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Zt&&p(b.iridescenceMap.channel),iridescenceThicknessMapUv:Bt&&p(b.iridescenceThicknessMap.channel),sheenColorMapUv:At&&p(b.sheenColorMap.channel),sheenRoughnessMapUv:gt&&p(b.sheenRoughnessMap.channel),specularMapUv:ct&&p(b.specularMap.channel),specularColorMapUv:Ut&&p(b.specularColorMap.channel),specularIntensityMapUv:R&&p(b.specularIntensityMap.channel),transmissionMapUv:rt&&p(b.transmissionMap.channel),thicknessMapUv:lt&&p(b.thicknessMap.channel),alphaMapUv:A&&p(b.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(oe||it),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!F.attributes.uv&&(Rt||A),fog:!!k,useFog:b.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:L.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:st,morphTextureStride:Mt,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&G.length>0,shadowMapType:i.shadowMap.type,toneMapping:yt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Rt&&b.map.isVideoTexture===!0&&te.getTransfer(b.map.colorSpace)===ae,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Un,flipSided:b.side===an,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:mt&&b.extensions.derivatives===!0,extensionFragDepth:mt&&b.extensions.fragDepth===!0,extensionDrawBuffers:mt&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:mt&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:mt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:mt&&b.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return qt.vertexUv1s=c.has(1),qt.vertexUv2s=c.has(2),qt.vertexUv3s=c.has(3),c.clear(),qt}function y(b){const P=[];if(b.shaderID?P.push(b.shaderID):(P.push(b.customVertexShaderID),P.push(b.customFragmentShaderID)),b.defines!==void 0)for(const G in b.defines)P.push(G),P.push(b.defines[G]);return b.isRawShaderMaterial===!1&&(g(P,b),w(P,b),P.push(i.outputColorSpace)),P.push(b.customProgramCacheKey),P.join()}function g(b,P){b.push(P.precision),b.push(P.outputColorSpace),b.push(P.envMapMode),b.push(P.envMapCubeUVHeight),b.push(P.mapUv),b.push(P.alphaMapUv),b.push(P.lightMapUv),b.push(P.aoMapUv),b.push(P.bumpMapUv),b.push(P.normalMapUv),b.push(P.displacementMapUv),b.push(P.emissiveMapUv),b.push(P.metalnessMapUv),b.push(P.roughnessMapUv),b.push(P.anisotropyMapUv),b.push(P.clearcoatMapUv),b.push(P.clearcoatNormalMapUv),b.push(P.clearcoatRoughnessMapUv),b.push(P.iridescenceMapUv),b.push(P.iridescenceThicknessMapUv),b.push(P.sheenColorMapUv),b.push(P.sheenRoughnessMapUv),b.push(P.specularMapUv),b.push(P.specularColorMapUv),b.push(P.specularIntensityMapUv),b.push(P.transmissionMapUv),b.push(P.thicknessMapUv),b.push(P.combine),b.push(P.fogExp2),b.push(P.sizeAttenuation),b.push(P.morphTargetsCount),b.push(P.morphAttributeCount),b.push(P.numDirLights),b.push(P.numPointLights),b.push(P.numSpotLights),b.push(P.numSpotLightMaps),b.push(P.numHemiLights),b.push(P.numRectAreaLights),b.push(P.numDirLightShadows),b.push(P.numPointLightShadows),b.push(P.numSpotLightShadows),b.push(P.numSpotLightShadowsWithMaps),b.push(P.numLightProbes),b.push(P.shadowMapType),b.push(P.toneMapping),b.push(P.numClippingPlanes),b.push(P.numClipIntersection),b.push(P.depthPacking)}function w(b,P){o.disableAll(),P.isWebGL2&&o.enable(0),P.supportsVertexTextures&&o.enable(1),P.instancing&&o.enable(2),P.instancingColor&&o.enable(3),P.matcap&&o.enable(4),P.envMap&&o.enable(5),P.normalMapObjectSpace&&o.enable(6),P.normalMapTangentSpace&&o.enable(7),P.clearcoat&&o.enable(8),P.iridescence&&o.enable(9),P.alphaTest&&o.enable(10),P.vertexColors&&o.enable(11),P.vertexAlphas&&o.enable(12),P.vertexUv1s&&o.enable(13),P.vertexUv2s&&o.enable(14),P.vertexUv3s&&o.enable(15),P.vertexTangents&&o.enable(16),P.anisotropy&&o.enable(17),P.alphaHash&&o.enable(18),P.batching&&o.enable(19),b.push(o.mask),o.disableAll(),P.fog&&o.enable(0),P.useFog&&o.enable(1),P.flatShading&&o.enable(2),P.logarithmicDepthBuffer&&o.enable(3),P.skinning&&o.enable(4),P.morphTargets&&o.enable(5),P.morphNormals&&o.enable(6),P.morphColors&&o.enable(7),P.premultipliedAlpha&&o.enable(8),P.shadowMapEnabled&&o.enable(9),P.useLegacyLights&&o.enable(10),P.doubleSided&&o.enable(11),P.flipSided&&o.enable(12),P.useDepthPacking&&o.enable(13),P.dithering&&o.enable(14),P.transmission&&o.enable(15),P.sheen&&o.enable(16),P.opaque&&o.enable(17),P.pointsUvs&&o.enable(18),P.decodeVideoTexture&&o.enable(19),P.alphaToCoverage&&o.enable(20),b.push(o.mask)}function T(b){const P=_[b.type];let G;if(P){const $=zn[P];G=Uw.clone($.uniforms)}else G=b.uniforms;return G}function C(b,P){let G;for(let $=0,L=u.length;$<L;$++){const k=u[$];if(k.cacheKey===P){G=k,++G.usedTimes;break}}return G===void 0&&(G=new KT(i,P,b,s),u.push(G)),G}function M(b){if(--b.usedTimes===0){const P=u.indexOf(b);u[P]=u[u.length-1],u.pop(),b.destroy()}}function D(b){l.remove(b)}function N(){l.dispose()}return{getParameters:f,getProgramCacheKey:y,getUniforms:T,acquireProgram:C,releaseProgram:M,releaseShaderCache:D,programs:u,dispose:N}}function eC(){let i=new WeakMap;function t(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function e(s){i.delete(s)}function n(s,a,o){i.get(s)[a]=o}function r(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:r}}function nC(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function up(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function hp(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function a(h,d,m,v,_,p){let f=i[t];return f===void 0?(f={id:h.id,object:h,geometry:d,material:m,groupOrder:v,renderOrder:h.renderOrder,z:_,group:p},i[t]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=m,f.groupOrder=v,f.renderOrder=h.renderOrder,f.z=_,f.group=p),t++,f}function o(h,d,m,v,_,p){const f=a(h,d,m,v,_,p);m.transmission>0?n.push(f):m.transparent===!0?r.push(f):e.push(f)}function l(h,d,m,v,_,p){const f=a(h,d,m,v,_,p);m.transmission>0?n.unshift(f):m.transparent===!0?r.unshift(f):e.unshift(f)}function c(h,d){e.length>1&&e.sort(h||nC),n.length>1&&n.sort(d||up),r.length>1&&r.sort(d||up)}function u(){for(let h=t,d=i.length;h<d;h++){const m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function iC(){let i=new WeakMap;function t(n,r){const s=i.get(n);let a;return s===void 0?(a=new hp,i.set(n,[a])):r>=s.length?(a=new hp,s.push(a)):a=s[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function rC(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Wt};break;case"SpotLight":e={position:new I,direction:new I,color:new Wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Wt,groundColor:new Wt};break;case"RectAreaLight":e={color:new Wt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function sC(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let oC=0;function aC(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function lC(i,t){const e=new rC,n=sC(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new I);const s=new I,a=new Qt,o=new Qt;function l(u,h){let d=0,m=0,v=0;for(let G=0;G<9;G++)r.probe[G].set(0,0,0);let _=0,p=0,f=0,y=0,g=0,w=0,T=0,C=0,M=0,D=0,N=0;u.sort(aC);const b=h===!0?Math.PI:1;for(let G=0,$=u.length;G<$;G++){const L=u[G],k=L.color,F=L.intensity,j=L.distance,X=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=k.r*F*b,m+=k.g*F*b,v+=k.b*F*b;else if(L.isLightProbe){for(let q=0;q<9;q++)r.probe[q].addScaledVector(L.sh.coefficients[q],F);N++}else if(L.isDirectionalLight){const q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity*b),L.castShadow){const Y=L.shadow,tt=n.get(L);tt.shadowBias=Y.bias,tt.shadowNormalBias=Y.normalBias,tt.shadowRadius=Y.radius,tt.shadowMapSize=Y.mapSize,r.directionalShadow[_]=tt,r.directionalShadowMap[_]=X,r.directionalShadowMatrix[_]=L.shadow.matrix,w++}r.directional[_]=q,_++}else if(L.isSpotLight){const q=e.get(L);q.position.setFromMatrixPosition(L.matrixWorld),q.color.copy(k).multiplyScalar(F*b),q.distance=j,q.coneCos=Math.cos(L.angle),q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),q.decay=L.decay,r.spot[f]=q;const Y=L.shadow;if(L.map&&(r.spotLightMap[M]=L.map,M++,Y.updateMatrices(L),L.castShadow&&D++),r.spotLightMatrix[f]=Y.matrix,L.castShadow){const tt=n.get(L);tt.shadowBias=Y.bias,tt.shadowNormalBias=Y.normalBias,tt.shadowRadius=Y.radius,tt.shadowMapSize=Y.mapSize,r.spotShadow[f]=tt,r.spotShadowMap[f]=X,C++}f++}else if(L.isRectAreaLight){const q=e.get(L);q.color.copy(k).multiplyScalar(F),q.halfWidth.set(L.width*.5,0,0),q.halfHeight.set(0,L.height*.5,0),r.rectArea[y]=q,y++}else if(L.isPointLight){const q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity*b),q.distance=L.distance,q.decay=L.decay,L.castShadow){const Y=L.shadow,tt=n.get(L);tt.shadowBias=Y.bias,tt.shadowNormalBias=Y.normalBias,tt.shadowRadius=Y.radius,tt.shadowMapSize=Y.mapSize,tt.shadowCameraNear=Y.camera.near,tt.shadowCameraFar=Y.camera.far,r.pointShadow[p]=tt,r.pointShadowMap[p]=X,r.pointShadowMatrix[p]=L.shadow.matrix,T++}r.point[p]=q,p++}else if(L.isHemisphereLight){const q=e.get(L);q.skyColor.copy(L.color).multiplyScalar(F*b),q.groundColor.copy(L.groundColor).multiplyScalar(F*b),r.hemi[g]=q,g++}}y>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ot.LTC_FLOAT_1,r.rectAreaLTC2=ot.LTC_FLOAT_2):(r.rectAreaLTC1=ot.LTC_HALF_1,r.rectAreaLTC2=ot.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ot.LTC_FLOAT_1,r.rectAreaLTC2=ot.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ot.LTC_HALF_1,r.rectAreaLTC2=ot.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=m,r.ambient[2]=v;const P=r.hash;(P.directionalLength!==_||P.pointLength!==p||P.spotLength!==f||P.rectAreaLength!==y||P.hemiLength!==g||P.numDirectionalShadows!==w||P.numPointShadows!==T||P.numSpotShadows!==C||P.numSpotMaps!==M||P.numLightProbes!==N)&&(r.directional.length=_,r.spot.length=f,r.rectArea.length=y,r.point.length=p,r.hemi.length=g,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.pointShadow.length=T,r.pointShadowMap.length=T,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=w,r.pointShadowMatrix.length=T,r.spotLightMatrix.length=C+M-D,r.spotLightMap.length=M,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=N,P.directionalLength=_,P.pointLength=p,P.spotLength=f,P.rectAreaLength=y,P.hemiLength=g,P.numDirectionalShadows=w,P.numPointShadows=T,P.numSpotShadows=C,P.numSpotMaps=M,P.numLightProbes=N,r.version=oC++)}function c(u,h){let d=0,m=0,v=0,_=0,p=0;const f=h.matrixWorldInverse;for(let y=0,g=u.length;y<g;y++){const w=u[y];if(w.isDirectionalLight){const T=r.directional[d];T.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(f),d++}else if(w.isSpotLight){const T=r.spot[v];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(f),T.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(f),v++}else if(w.isRectAreaLight){const T=r.rectArea[_];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(f),o.identity(),a.copy(w.matrixWorld),a.premultiply(f),o.extractRotation(a),T.halfWidth.set(w.width*.5,0,0),T.halfHeight.set(0,w.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),_++}else if(w.isPointLight){const T=r.point[m];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(f),m++}else if(w.isHemisphereLight){const T=r.hemi[p];T.direction.setFromMatrixPosition(w.matrixWorld),T.direction.transformDirection(f),p++}}}return{setup:l,setupView:c,state:r}}function dp(i,t){const e=new lC(i,t),n=[],r=[];function s(){n.length=0,r.length=0}function a(h){n.push(h)}function o(h){r.push(h)}function l(h){e.setup(n,h)}function c(h){e.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function cC(i,t){let e=new WeakMap;function n(s,a=0){const o=e.get(s);let l;return o===void 0?(l=new dp(i,t),e.set(s,[l])):a>=o.length?(l=new dp(i,t),o.push(l)):l=o[a],l}function r(){e=new WeakMap}return{get:n,dispose:r}}class uC extends Eo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class hC extends Eo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const dC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function fC(i,t,e){let n=new d_;const r=new Lt,s=new Lt,a=new Ne,o=new uC({depthPacking:$y}),l=new hC,c={},u=e.maxTextureSize,h={[Gi]:an,[an]:Gi,[Un]:Un},d=new jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:dC,fragmentShader:pC}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const v=new Zn;v.setAttribute("position",new Bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Pn(v,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gm;let f=this.type;this.render=function(C,M,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const N=i.getRenderTarget(),b=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),G=i.state;G.setBlending(Fi),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const $=f!==si&&this.type===si,L=f===si&&this.type!==si;for(let k=0,F=C.length;k<F;k++){const j=C[k],X=j.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const q=X.getFrameExtents();if(r.multiply(q),s.copy(X.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/q.x),r.x=s.x*q.x,X.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/q.y),r.y=s.y*q.y,X.mapSize.y=s.y)),X.map===null||$===!0||L===!0){const tt=this.type!==si?{minFilter:je,magFilter:je}:{};X.map!==null&&X.map.dispose(),X.map=new mi(r.x,r.y,tt),X.map.texture.name=j.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();const Y=X.getViewportCount();for(let tt=0;tt<Y;tt++){const st=X.getViewport(tt);a.set(s.x*st.x,s.y*st.y,s.x*st.z,s.y*st.w),G.viewport(a),X.updateMatrices(j,tt),n=X.getFrustum(),w(M,D,X.camera,j,this.type)}X.isPointLightShadow!==!0&&this.type===si&&y(X,D),X.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(N,b,P)};function y(C,M){const D=t.update(_);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new mi(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(M,null,D,d,_,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(M,null,D,m,_,null)}function g(C,M,D,N){let b=null;const P=D.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(P!==void 0)b=P;else if(b=D.isPointLight===!0?l:o,i.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const G=b.uuid,$=M.uuid;let L=c[G];L===void 0&&(L={},c[G]=L);let k=L[$];k===void 0&&(k=b.clone(),L[$]=k,M.addEventListener("dispose",T)),b=k}if(b.visible=M.visible,b.wireframe=M.wireframe,N===si?b.side=M.shadowSide!==null?M.shadowSide:M.side:b.side=M.shadowSide!==null?M.shadowSide:h[M.side],b.alphaMap=M.alphaMap,b.alphaTest=M.alphaTest,b.map=M.map,b.clipShadows=M.clipShadows,b.clippingPlanes=M.clippingPlanes,b.clipIntersection=M.clipIntersection,b.displacementMap=M.displacementMap,b.displacementScale=M.displacementScale,b.displacementBias=M.displacementBias,b.wireframeLinewidth=M.wireframeLinewidth,b.linewidth=M.linewidth,D.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const G=i.properties.get(b);G.light=D}return b}function w(C,M,D,N,b){if(C.visible===!1)return;if(C.layers.test(M.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&b===si)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,C.matrixWorld);const $=t.update(C),L=C.material;if(Array.isArray(L)){const k=$.groups;for(let F=0,j=k.length;F<j;F++){const X=k[F],q=L[X.materialIndex];if(q&&q.visible){const Y=g(C,q,N,b);C.onBeforeShadow(i,C,M,D,$,Y,X),i.renderBufferDirect(D,null,$,Y,C,X),C.onAfterShadow(i,C,M,D,$,Y,X)}}}else if(L.visible){const k=g(C,L,N,b);C.onBeforeShadow(i,C,M,D,$,k,null),i.renderBufferDirect(D,null,$,k,C,null),C.onAfterShadow(i,C,M,D,$,k,null)}}const G=C.children;for(let $=0,L=G.length;$<L;$++)w(G[$],M,D,N,b)}function T(C){C.target.removeEventListener("dispose",T);for(const D in c){const N=c[D],b=C.target.uuid;b in N&&(N[b].dispose(),delete N[b])}}}function mC(i,t,e){const n=e.isWebGL2;function r(){let A=!1;const nt=new Ne;let Q=null;const mt=new Ne(0,0,0,0);return{setMask:function(yt){Q!==yt&&!A&&(i.colorMask(yt,yt,yt,yt),Q=yt)},setLocked:function(yt){A=yt},setClear:function(yt,qt,Gt,ne,Oe){Oe===!0&&(yt*=ne,qt*=ne,Gt*=ne),nt.set(yt,qt,Gt,ne),mt.equals(nt)===!1&&(i.clearColor(yt,qt,Gt,ne),mt.copy(nt))},reset:function(){A=!1,Q=null,mt.set(-1,0,0,0)}}}function s(){let A=!1,nt=null,Q=null,mt=null;return{setTest:function(yt){yt?pt(i.DEPTH_TEST):$t(i.DEPTH_TEST)},setMask:function(yt){nt!==yt&&!A&&(i.depthMask(yt),nt=yt)},setFunc:function(yt){if(Q!==yt){switch(yt){case wy:i.depthFunc(i.NEVER);break;case Ey:i.depthFunc(i.ALWAYS);break;case My:i.depthFunc(i.LESS);break;case Ia:i.depthFunc(i.LEQUAL);break;case Sy:i.depthFunc(i.EQUAL);break;case Ty:i.depthFunc(i.GEQUAL);break;case Cy:i.depthFunc(i.GREATER);break;case Ay:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Q=yt}},setLocked:function(yt){A=yt},setClear:function(yt){mt!==yt&&(i.clearDepth(yt),mt=yt)},reset:function(){A=!1,nt=null,Q=null,mt=null}}}function a(){let A=!1,nt=null,Q=null,mt=null,yt=null,qt=null,Gt=null,ne=null,Oe=null;return{setTest:function(Yt){A||(Yt?pt(i.STENCIL_TEST):$t(i.STENCIL_TEST))},setMask:function(Yt){nt!==Yt&&!A&&(i.stencilMask(Yt),nt=Yt)},setFunc:function(Yt,be,We){(Q!==Yt||mt!==be||yt!==We)&&(i.stencilFunc(Yt,be,We),Q=Yt,mt=be,yt=We)},setOp:function(Yt,be,We){(qt!==Yt||Gt!==be||ne!==We)&&(i.stencilOp(Yt,be,We),qt=Yt,Gt=be,ne=We)},setLocked:function(Yt){A=Yt},setClear:function(Yt){Oe!==Yt&&(i.clearStencil(Yt),Oe=Yt)},reset:function(){A=!1,nt=null,Q=null,mt=null,yt=null,qt=null,Gt=null,ne=null,Oe=null}}}const o=new r,l=new s,c=new a,u=new WeakMap,h=new WeakMap;let d={},m={},v=new WeakMap,_=[],p=null,f=!1,y=null,g=null,w=null,T=null,C=null,M=null,D=null,N=new Wt(0,0,0),b=0,P=!1,G=null,$=null,L=null,k=null,F=null;const j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,q=0;const Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(Y)[1]),X=q>=1):Y.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),X=q>=2);let tt=null,st={};const Mt=i.getParameter(i.SCISSOR_BOX),H=i.getParameter(i.VIEWPORT),K=new Ne().fromArray(Mt),ht=new Ne().fromArray(H);function wt(A,nt,Q,mt){const yt=new Uint8Array(4),qt=i.createTexture();i.bindTexture(A,qt),i.texParameteri(A,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(A,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Gt=0;Gt<Q;Gt++)n&&(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)?i.texImage3D(nt,0,i.RGBA,1,1,mt,0,i.RGBA,i.UNSIGNED_BYTE,yt):i.texImage2D(nt+Gt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,yt);return qt}const St={};St[i.TEXTURE_2D]=wt(i.TEXTURE_2D,i.TEXTURE_2D,1),St[i.TEXTURE_CUBE_MAP]=wt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(St[i.TEXTURE_2D_ARRAY]=wt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),St[i.TEXTURE_3D]=wt(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),pt(i.DEPTH_TEST),l.setFunc(Ia),Dt(!1),S(Xh),pt(i.CULL_FACE),_t(Fi);function pt(A){d[A]!==!0&&(i.enable(A),d[A]=!0)}function $t(A){d[A]!==!1&&(i.disable(A),d[A]=!1)}function Rt(A,nt){return m[A]!==nt?(i.bindFramebuffer(A,nt),m[A]=nt,n&&(A===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=nt),A===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=nt)),!0):!1}function U(A,nt){let Q=_,mt=!1;if(A)if(Q=v.get(nt),Q===void 0&&(Q=[],v.set(nt,Q)),A.isWebGLMultipleRenderTargets){const yt=A.texture;if(Q.length!==yt.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let qt=0,Gt=yt.length;qt<Gt;qt++)Q[qt]=i.COLOR_ATTACHMENT0+qt;Q.length=yt.length,mt=!0}}else Q[0]!==i.COLOR_ATTACHMENT0&&(Q[0]=i.COLOR_ATTACHMENT0,mt=!0);else Q[0]!==i.BACK&&(Q[0]=i.BACK,mt=!0);mt&&(e.isWebGL2?i.drawBuffers(Q):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(Q))}function Te(A){return p!==A?(i.useProgram(A),p=A,!0):!1}const xt={[sr]:i.FUNC_ADD,[ay]:i.FUNC_SUBTRACT,[ly]:i.FUNC_REVERSE_SUBTRACT};if(n)xt[Yh]=i.MIN,xt[Kh]=i.MAX;else{const A=t.get("EXT_blend_minmax");A!==null&&(xt[Yh]=A.MIN_EXT,xt[Kh]=A.MAX_EXT)}const Ct={[cy]:i.ZERO,[uy]:i.ONE,[hy]:i.SRC_COLOR,[Fc]:i.SRC_ALPHA,[vy]:i.SRC_ALPHA_SATURATE,[my]:i.DST_COLOR,[py]:i.DST_ALPHA,[dy]:i.ONE_MINUS_SRC_COLOR,[Bc]:i.ONE_MINUS_SRC_ALPHA,[_y]:i.ONE_MINUS_DST_COLOR,[fy]:i.ONE_MINUS_DST_ALPHA,[gy]:i.CONSTANT_COLOR,[by]:i.ONE_MINUS_CONSTANT_COLOR,[xy]:i.CONSTANT_ALPHA,[yy]:i.ONE_MINUS_CONSTANT_ALPHA};function _t(A,nt,Q,mt,yt,qt,Gt,ne,Oe,Yt){if(A===Fi){f===!0&&($t(i.BLEND),f=!1);return}if(f===!1&&(pt(i.BLEND),f=!0),A!==oy){if(A!==y||Yt!==P){if((g!==sr||C!==sr)&&(i.blendEquation(i.FUNC_ADD),g=sr,C=sr),Yt)switch(A){case ss:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $h:i.blendFunc(i.ONE,i.ONE);break;case jh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case qh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}else switch(A){case ss:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $h:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case jh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case qh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}w=null,T=null,M=null,D=null,N.set(0,0,0),b=0,y=A,P=Yt}return}yt=yt||nt,qt=qt||Q,Gt=Gt||mt,(nt!==g||yt!==C)&&(i.blendEquationSeparate(xt[nt],xt[yt]),g=nt,C=yt),(Q!==w||mt!==T||qt!==M||Gt!==D)&&(i.blendFuncSeparate(Ct[Q],Ct[mt],Ct[qt],Ct[Gt]),w=Q,T=mt,M=qt,D=Gt),(ne.equals(N)===!1||Oe!==b)&&(i.blendColor(ne.r,ne.g,ne.b,Oe),N.copy(ne),b=Oe),y=A,P=!1}function oe(A,nt){A.side===Un?$t(i.CULL_FACE):pt(i.CULL_FACE);let Q=A.side===an;nt&&(Q=!Q),Dt(Q),A.blending===ss&&A.transparent===!1?_t(Fi):_t(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.blendColor,A.blendAlpha,A.premultipliedAlpha),l.setFunc(A.depthFunc),l.setTest(A.depthTest),l.setMask(A.depthWrite),o.setMask(A.colorWrite);const mt=A.stencilWrite;c.setTest(mt),mt&&(c.setMask(A.stencilWriteMask),c.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),c.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),B(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?pt(i.SAMPLE_ALPHA_TO_COVERAGE):$t(i.SAMPLE_ALPHA_TO_COVERAGE)}function Dt(A){G!==A&&(A?i.frontFace(i.CW):i.frontFace(i.CCW),G=A)}function S(A){A!==iy?(pt(i.CULL_FACE),A!==$&&(A===Xh?i.cullFace(i.BACK):A===ry?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):$t(i.CULL_FACE),$=A}function x(A){A!==L&&(X&&i.lineWidth(A),L=A)}function B(A,nt,Q){A?(pt(i.POLYGON_OFFSET_FILL),(k!==nt||F!==Q)&&(i.polygonOffset(nt,Q),k=nt,F=Q)):$t(i.POLYGON_OFFSET_FILL)}function it(A){A?pt(i.SCISSOR_TEST):$t(i.SCISSOR_TEST)}function Z(A){A===void 0&&(A=i.TEXTURE0+j-1),tt!==A&&(i.activeTexture(A),tt=A)}function et(A,nt,Q){Q===void 0&&(tt===null?Q=i.TEXTURE0+j-1:Q=tt);let mt=st[Q];mt===void 0&&(mt={type:void 0,texture:void 0},st[Q]=mt),(mt.type!==A||mt.texture!==nt)&&(tt!==Q&&(i.activeTexture(Q),tt=Q),i.bindTexture(A,nt||St[A]),mt.type=A,mt.texture=nt)}function ft(){const A=st[tt];A!==void 0&&A.type!==void 0&&(i.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function at(){try{i.compressedTexImage2D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function dt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Et(){try{i.texSubImage2D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function It(){try{i.texSubImage3D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function J(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Zt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Bt(){try{i.texStorage2D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function At(){try{i.texStorage3D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function gt(){try{i.texImage2D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ct(){try{i.texImage3D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Ut(A){K.equals(A)===!1&&(i.scissor(A.x,A.y,A.z,A.w),K.copy(A))}function R(A){ht.equals(A)===!1&&(i.viewport(A.x,A.y,A.z,A.w),ht.copy(A))}function rt(A,nt){let Q=h.get(nt);Q===void 0&&(Q=new WeakMap,h.set(nt,Q));let mt=Q.get(A);mt===void 0&&(mt=i.getUniformBlockIndex(nt,A.name),Q.set(A,mt))}function lt(A,nt){const mt=h.get(nt).get(A);u.get(nt)!==mt&&(i.uniformBlockBinding(nt,mt,A.__bindingPointIndex),u.set(nt,mt))}function bt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},tt=null,st={},m={},v=new WeakMap,_=[],p=null,f=!1,y=null,g=null,w=null,T=null,C=null,M=null,D=null,N=new Wt(0,0,0),b=0,P=!1,G=null,$=null,L=null,k=null,F=null,K.set(0,0,i.canvas.width,i.canvas.height),ht.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:pt,disable:$t,bindFramebuffer:Rt,drawBuffers:U,useProgram:Te,setBlending:_t,setMaterial:oe,setFlipSided:Dt,setCullFace:S,setLineWidth:x,setPolygonOffset:B,setScissorTest:it,activeTexture:Z,bindTexture:et,unbindTexture:ft,compressedTexImage2D:at,compressedTexImage3D:dt,texImage2D:gt,texImage3D:ct,updateUBOMapping:rt,uniformBlockBinding:lt,texStorage2D:Bt,texStorage3D:At,texSubImage2D:Et,texSubImage3D:It,compressedTexSubImage2D:J,compressedTexSubImage3D:Zt,scissor:Ut,viewport:R,reset:bt}}function _C(i,t,e,n,r,s,a){const o=r.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let h;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(S,x){return m?new OffscreenCanvas(S,x):po("canvas")}function _(S,x,B,it){let Z=1;if((S.width>it||S.height>it)&&(Z=it/Math.max(S.width,S.height)),Z<1||x===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){const et=x?Ba:Math.floor,ft=et(Z*S.width),at=et(Z*S.height);h===void 0&&(h=v(ft,at));const dt=B?v(ft,at):h;return dt.width=ft,dt.height=at,dt.getContext("2d").drawImage(S,0,0,ft,at),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+ft+"x"+at+")."),dt}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function p(S){return Wc(S.width)&&Wc(S.height)}function f(S){return o?!1:S.wrapS!==Nn||S.wrapT!==Nn||S.minFilter!==je&&S.minFilter!==Qe}function y(S,x){return S.generateMipmaps&&x&&S.minFilter!==je&&S.minFilter!==Qe}function g(S){i.generateMipmap(S)}function w(S,x,B,it,Z=!1){if(o===!1)return x;if(S!==null){if(i[S]!==void 0)return i[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let et=x;if(x===i.RED&&(B===i.FLOAT&&(et=i.R32F),B===i.HALF_FLOAT&&(et=i.R16F),B===i.UNSIGNED_BYTE&&(et=i.R8)),x===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(et=i.R8UI),B===i.UNSIGNED_SHORT&&(et=i.R16UI),B===i.UNSIGNED_INT&&(et=i.R32UI),B===i.BYTE&&(et=i.R8I),B===i.SHORT&&(et=i.R16I),B===i.INT&&(et=i.R32I)),x===i.RG&&(B===i.FLOAT&&(et=i.RG32F),B===i.HALF_FLOAT&&(et=i.RG16F),B===i.UNSIGNED_BYTE&&(et=i.RG8)),x===i.RGBA){const ft=Z?Oa:te.getTransfer(it);B===i.FLOAT&&(et=i.RGBA32F),B===i.HALF_FLOAT&&(et=i.RGBA16F),B===i.UNSIGNED_BYTE&&(et=ft===ae?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(et=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(et=i.RGB5_A1)}return(et===i.R16F||et===i.R32F||et===i.RG16F||et===i.RG32F||et===i.RGBA16F||et===i.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function T(S,x,B){return y(S,B)===!0||S.isFramebufferTexture&&S.minFilter!==je&&S.minFilter!==Qe?Math.log2(Math.max(x.width,x.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?x.mipmaps.length:1}function C(S){return S===je||S===Zh||S===Bs?i.NEAREST:i.LINEAR}function M(S){const x=S.target;x.removeEventListener("dispose",M),N(x),x.isVideoTexture&&u.delete(x)}function D(S){const x=S.target;x.removeEventListener("dispose",D),P(x)}function N(S){const x=n.get(S);if(x.__webglInit===void 0)return;const B=S.source,it=d.get(B);if(it){const Z=it[x.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&b(S),Object.keys(it).length===0&&d.delete(B)}n.remove(S)}function b(S){const x=n.get(S);i.deleteTexture(x.__webglTexture);const B=S.source,it=d.get(B);delete it[x.__cacheKey],a.memory.textures--}function P(S){const x=S.texture,B=n.get(S),it=n.get(x);if(it.__webglTexture!==void 0&&(i.deleteTexture(it.__webglTexture),a.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(B.__webglFramebuffer[Z]))for(let et=0;et<B.__webglFramebuffer[Z].length;et++)i.deleteFramebuffer(B.__webglFramebuffer[Z][et]);else i.deleteFramebuffer(B.__webglFramebuffer[Z]);B.__webglDepthbuffer&&i.deleteRenderbuffer(B.__webglDepthbuffer[Z])}else{if(Array.isArray(B.__webglFramebuffer))for(let Z=0;Z<B.__webglFramebuffer.length;Z++)i.deleteFramebuffer(B.__webglFramebuffer[Z]);else i.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&i.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&i.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let Z=0;Z<B.__webglColorRenderbuffer.length;Z++)B.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(B.__webglColorRenderbuffer[Z]);B.__webglDepthRenderbuffer&&i.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let Z=0,et=x.length;Z<et;Z++){const ft=n.get(x[Z]);ft.__webglTexture&&(i.deleteTexture(ft.__webglTexture),a.memory.textures--),n.remove(x[Z])}n.remove(x),n.remove(S)}let G=0;function $(){G=0}function L(){const S=G;return S>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+r.maxTextures),G+=1,S}function k(S){const x=[];return x.push(S.wrapS),x.push(S.wrapT),x.push(S.wrapR||0),x.push(S.magFilter),x.push(S.minFilter),x.push(S.anisotropy),x.push(S.internalFormat),x.push(S.format),x.push(S.type),x.push(S.generateMipmaps),x.push(S.premultiplyAlpha),x.push(S.flipY),x.push(S.unpackAlignment),x.push(S.colorSpace),x.join()}function F(S,x){const B=n.get(S);if(S.isVideoTexture&&oe(S),S.isRenderTargetTexture===!1&&S.version>0&&B.__version!==S.version){const it=S.image;if(it===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(B,S,x);return}}e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+x)}function j(S,x){const B=n.get(S);if(S.version>0&&B.__version!==S.version){K(B,S,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+x)}function X(S,x){const B=n.get(S);if(S.version>0&&B.__version!==S.version){K(B,S,x);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+x)}function q(S,x){const B=n.get(S);if(S.version>0&&B.__version!==S.version){ht(B,S,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+x)}const Y={[Vc]:i.REPEAT,[Nn]:i.CLAMP_TO_EDGE,[Hc]:i.MIRRORED_REPEAT},tt={[je]:i.NEAREST,[Zh]:i.NEAREST_MIPMAP_NEAREST,[Bs]:i.NEAREST_MIPMAP_LINEAR,[Qe]:i.LINEAR,[Ml]:i.LINEAR_MIPMAP_NEAREST,[lr]:i.LINEAR_MIPMAP_LINEAR},st={[Yy]:i.NEVER,[ew]:i.ALWAYS,[Ky]:i.LESS,[t_]:i.LEQUAL,[Zy]:i.EQUAL,[tw]:i.GEQUAL,[Jy]:i.GREATER,[Qy]:i.NOTEQUAL};function Mt(S,x,B){if(x.type===li&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Qe||x.magFilter===Ml||x.magFilter===Bs||x.magFilter===lr||x.minFilter===Qe||x.minFilter===Ml||x.minFilter===Bs||x.minFilter===lr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),B?(i.texParameteri(S,i.TEXTURE_WRAP_S,Y[x.wrapS]),i.texParameteri(S,i.TEXTURE_WRAP_T,Y[x.wrapT]),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,Y[x.wrapR]),i.texParameteri(S,i.TEXTURE_MAG_FILTER,tt[x.magFilter]),i.texParameteri(S,i.TEXTURE_MIN_FILTER,tt[x.minFilter])):(i.texParameteri(S,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(S,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(x.wrapS!==Nn||x.wrapT!==Nn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(S,i.TEXTURE_MAG_FILTER,C(x.magFilter)),i.texParameteri(S,i.TEXTURE_MIN_FILTER,C(x.minFilter)),x.minFilter!==je&&x.minFilter!==Qe&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(i.texParameteri(S,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(S,i.TEXTURE_COMPARE_FUNC,st[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const it=t.get("EXT_texture_filter_anisotropic");if(x.magFilter===je||x.minFilter!==Bs&&x.minFilter!==lr||x.type===li&&t.has("OES_texture_float_linear")===!1||o===!1&&x.type===uo&&t.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(i.texParameterf(S,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function H(S,x){let B=!1;S.__webglInit===void 0&&(S.__webglInit=!0,x.addEventListener("dispose",M));const it=x.source;let Z=d.get(it);Z===void 0&&(Z={},d.set(it,Z));const et=k(x);if(et!==S.__cacheKey){Z[et]===void 0&&(Z[et]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),Z[et].usedTimes++;const ft=Z[S.__cacheKey];ft!==void 0&&(Z[S.__cacheKey].usedTimes--,ft.usedTimes===0&&b(x)),S.__cacheKey=et,S.__webglTexture=Z[et].texture}return B}function K(S,x,B){let it=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(it=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(it=i.TEXTURE_3D);const Z=H(S,x),et=x.source;e.bindTexture(it,S.__webglTexture,i.TEXTURE0+B);const ft=n.get(et);if(et.version!==ft.__version||Z===!0){e.activeTexture(i.TEXTURE0+B);const at=te.getPrimaries(te.workingColorSpace),dt=x.colorSpace===Tn?null:te.getPrimaries(x.colorSpace),Et=x.colorSpace===Tn||at===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);const It=f(x)&&p(x.image)===!1;let J=_(x.image,It,!1,r.maxTextureSize);J=Dt(x,J);const Zt=p(J)||o,Bt=s.convert(x.format,x.colorSpace);let At=s.convert(x.type),gt=w(x.internalFormat,Bt,At,x.colorSpace,x.isVideoTexture);Mt(it,x,Zt);let ct;const Ut=x.mipmaps,R=o&&x.isVideoTexture!==!0&&gt!==Jm,rt=ft.__version===void 0||Z===!0,lt=et.dataReady,bt=T(x,J,Zt);if(x.isDepthTexture)gt=i.DEPTH_COMPONENT,o?x.type===li?gt=i.DEPTH_COMPONENT32F:x.type===Ii?gt=i.DEPTH_COMPONENT24:x.type===pr?gt=i.DEPTH24_STENCIL8:gt=i.DEPTH_COMPONENT16:x.type===li&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===fr&&gt===i.DEPTH_COMPONENT&&x.type!==Cu&&x.type!==Ii&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=Ii,At=s.convert(x.type)),x.format===gs&&gt===i.DEPTH_COMPONENT&&(gt=i.DEPTH_STENCIL,x.type!==pr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=pr,At=s.convert(x.type))),rt&&(R?e.texStorage2D(i.TEXTURE_2D,1,gt,J.width,J.height):e.texImage2D(i.TEXTURE_2D,0,gt,J.width,J.height,0,Bt,At,null));else if(x.isDataTexture)if(Ut.length>0&&Zt){R&&rt&&e.texStorage2D(i.TEXTURE_2D,bt,gt,Ut[0].width,Ut[0].height);for(let A=0,nt=Ut.length;A<nt;A++)ct=Ut[A],R?lt&&e.texSubImage2D(i.TEXTURE_2D,A,0,0,ct.width,ct.height,Bt,At,ct.data):e.texImage2D(i.TEXTURE_2D,A,gt,ct.width,ct.height,0,Bt,At,ct.data);x.generateMipmaps=!1}else R?(rt&&e.texStorage2D(i.TEXTURE_2D,bt,gt,J.width,J.height),lt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,J.width,J.height,Bt,At,J.data)):e.texImage2D(i.TEXTURE_2D,0,gt,J.width,J.height,0,Bt,At,J.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){R&&rt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,bt,gt,Ut[0].width,Ut[0].height,J.depth);for(let A=0,nt=Ut.length;A<nt;A++)ct=Ut[A],x.format!==Fn?Bt!==null?R?lt&&e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,A,0,0,0,ct.width,ct.height,J.depth,Bt,ct.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,A,gt,ct.width,ct.height,J.depth,0,ct.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):R?lt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,A,0,0,0,ct.width,ct.height,J.depth,Bt,At,ct.data):e.texImage3D(i.TEXTURE_2D_ARRAY,A,gt,ct.width,ct.height,J.depth,0,Bt,At,ct.data)}else{R&&rt&&e.texStorage2D(i.TEXTURE_2D,bt,gt,Ut[0].width,Ut[0].height);for(let A=0,nt=Ut.length;A<nt;A++)ct=Ut[A],x.format!==Fn?Bt!==null?R?lt&&e.compressedTexSubImage2D(i.TEXTURE_2D,A,0,0,ct.width,ct.height,Bt,ct.data):e.compressedTexImage2D(i.TEXTURE_2D,A,gt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):R?lt&&e.texSubImage2D(i.TEXTURE_2D,A,0,0,ct.width,ct.height,Bt,At,ct.data):e.texImage2D(i.TEXTURE_2D,A,gt,ct.width,ct.height,0,Bt,At,ct.data)}else if(x.isDataArrayTexture)R?(rt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,bt,gt,J.width,J.height,J.depth),lt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,Bt,At,J.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,gt,J.width,J.height,J.depth,0,Bt,At,J.data);else if(x.isData3DTexture)R?(rt&&e.texStorage3D(i.TEXTURE_3D,bt,gt,J.width,J.height,J.depth),lt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,Bt,At,J.data)):e.texImage3D(i.TEXTURE_3D,0,gt,J.width,J.height,J.depth,0,Bt,At,J.data);else if(x.isFramebufferTexture){if(rt)if(R)e.texStorage2D(i.TEXTURE_2D,bt,gt,J.width,J.height);else{let A=J.width,nt=J.height;for(let Q=0;Q<bt;Q++)e.texImage2D(i.TEXTURE_2D,Q,gt,A,nt,0,Bt,At,null),A>>=1,nt>>=1}}else if(Ut.length>0&&Zt){R&&rt&&e.texStorage2D(i.TEXTURE_2D,bt,gt,Ut[0].width,Ut[0].height);for(let A=0,nt=Ut.length;A<nt;A++)ct=Ut[A],R?lt&&e.texSubImage2D(i.TEXTURE_2D,A,0,0,Bt,At,ct):e.texImage2D(i.TEXTURE_2D,A,gt,Bt,At,ct);x.generateMipmaps=!1}else R?(rt&&e.texStorage2D(i.TEXTURE_2D,bt,gt,J.width,J.height),lt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Bt,At,J)):e.texImage2D(i.TEXTURE_2D,0,gt,Bt,At,J);y(x,Zt)&&g(it),ft.__version=et.version,x.onUpdate&&x.onUpdate(x)}S.__version=x.version}function ht(S,x,B){if(x.image.length!==6)return;const it=H(S,x),Z=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,S.__webglTexture,i.TEXTURE0+B);const et=n.get(Z);if(Z.version!==et.__version||it===!0){e.activeTexture(i.TEXTURE0+B);const ft=te.getPrimaries(te.workingColorSpace),at=x.colorSpace===Tn?null:te.getPrimaries(x.colorSpace),dt=x.colorSpace===Tn||ft===at?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);const Et=x.isCompressedTexture||x.image[0].isCompressedTexture,It=x.image[0]&&x.image[0].isDataTexture,J=[];for(let A=0;A<6;A++)!Et&&!It?J[A]=_(x.image[A],!1,!0,r.maxCubemapSize):J[A]=It?x.image[A].image:x.image[A],J[A]=Dt(x,J[A]);const Zt=J[0],Bt=p(Zt)||o,At=s.convert(x.format,x.colorSpace),gt=s.convert(x.type),ct=w(x.internalFormat,At,gt,x.colorSpace),Ut=o&&x.isVideoTexture!==!0,R=et.__version===void 0||it===!0,rt=Z.dataReady;let lt=T(x,Zt,Bt);Mt(i.TEXTURE_CUBE_MAP,x,Bt);let bt;if(Et){Ut&&R&&e.texStorage2D(i.TEXTURE_CUBE_MAP,lt,ct,Zt.width,Zt.height);for(let A=0;A<6;A++){bt=J[A].mipmaps;for(let nt=0;nt<bt.length;nt++){const Q=bt[nt];x.format!==Fn?At!==null?Ut?rt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+A,nt,0,0,Q.width,Q.height,At,Q.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+A,nt,ct,Q.width,Q.height,0,Q.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ut?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+A,nt,0,0,Q.width,Q.height,At,gt,Q.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+A,nt,ct,Q.width,Q.height,0,At,gt,Q.data)}}}else{bt=x.mipmaps,Ut&&R&&(bt.length>0&&lt++,e.texStorage2D(i.TEXTURE_CUBE_MAP,lt,ct,J[0].width,J[0].height));for(let A=0;A<6;A++)if(It){Ut?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+A,0,0,0,J[A].width,J[A].height,At,gt,J[A].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+A,0,ct,J[A].width,J[A].height,0,At,gt,J[A].data);for(let nt=0;nt<bt.length;nt++){const mt=bt[nt].image[A].image;Ut?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+A,nt+1,0,0,mt.width,mt.height,At,gt,mt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+A,nt+1,ct,mt.width,mt.height,0,At,gt,mt.data)}}else{Ut?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+A,0,0,0,At,gt,J[A]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+A,0,ct,At,gt,J[A]);for(let nt=0;nt<bt.length;nt++){const Q=bt[nt];Ut?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+A,nt+1,0,0,At,gt,Q.image[A]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+A,nt+1,ct,At,gt,Q.image[A])}}}y(x,Bt)&&g(i.TEXTURE_CUBE_MAP),et.__version=Z.version,x.onUpdate&&x.onUpdate(x)}S.__version=x.version}function wt(S,x,B,it,Z,et){const ft=s.convert(B.format,B.colorSpace),at=s.convert(B.type),dt=w(B.internalFormat,ft,at,B.colorSpace);if(!n.get(x).__hasExternalTextures){const It=Math.max(1,x.width>>et),J=Math.max(1,x.height>>et);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?e.texImage3D(Z,et,dt,It,J,x.depth,0,ft,at,null):e.texImage2D(Z,et,dt,It,J,0,ft,at,null)}e.bindFramebuffer(i.FRAMEBUFFER,S),_t(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,it,Z,n.get(B).__webglTexture,0,Ct(x)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,it,Z,n.get(B).__webglTexture,et),e.bindFramebuffer(i.FRAMEBUFFER,null)}function St(S,x,B){if(i.bindRenderbuffer(i.RENDERBUFFER,S),x.depthBuffer&&!x.stencilBuffer){let it=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(B||_t(x)){const Z=x.depthTexture;Z&&Z.isDepthTexture&&(Z.type===li?it=i.DEPTH_COMPONENT32F:Z.type===Ii&&(it=i.DEPTH_COMPONENT24));const et=Ct(x);_t(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,et,it,x.width,x.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,et,it,x.width,x.height)}else i.renderbufferStorage(i.RENDERBUFFER,it,x.width,x.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,S)}else if(x.depthBuffer&&x.stencilBuffer){const it=Ct(x);B&&_t(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,it,i.DEPTH24_STENCIL8,x.width,x.height):_t(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,it,i.DEPTH24_STENCIL8,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,S)}else{const it=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let Z=0;Z<it.length;Z++){const et=it[Z],ft=s.convert(et.format,et.colorSpace),at=s.convert(et.type),dt=w(et.internalFormat,ft,at,et.colorSpace),Et=Ct(x);B&&_t(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Et,dt,x.width,x.height):_t(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Et,dt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,dt,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function pt(S,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,S),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),F(x.depthTexture,0);const it=n.get(x.depthTexture).__webglTexture,Z=Ct(x);if(x.depthTexture.format===fr)_t(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0);else if(x.depthTexture.format===gs)_t(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function $t(S){const x=n.get(S),B=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!x.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");pt(x.__webglFramebuffer,S)}else if(B){x.__webglDepthbuffer=[];for(let it=0;it<6;it++)e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[it]),x.__webglDepthbuffer[it]=i.createRenderbuffer(),St(x.__webglDepthbuffer[it],S,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=i.createRenderbuffer(),St(x.__webglDepthbuffer,S,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Rt(S,x,B){const it=n.get(S);x!==void 0&&wt(it.__webglFramebuffer,S,S.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&$t(S)}function U(S){const x=S.texture,B=n.get(S),it=n.get(x);S.addEventListener("dispose",D),S.isWebGLMultipleRenderTargets!==!0&&(it.__webglTexture===void 0&&(it.__webglTexture=i.createTexture()),it.__version=x.version,a.memory.textures++);const Z=S.isWebGLCubeRenderTarget===!0,et=S.isWebGLMultipleRenderTargets===!0,ft=p(S)||o;if(Z){B.__webglFramebuffer=[];for(let at=0;at<6;at++)if(o&&x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer[at]=[];for(let dt=0;dt<x.mipmaps.length;dt++)B.__webglFramebuffer[at][dt]=i.createFramebuffer()}else B.__webglFramebuffer[at]=i.createFramebuffer()}else{if(o&&x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer=[];for(let at=0;at<x.mipmaps.length;at++)B.__webglFramebuffer[at]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(et)if(r.drawBuffers){const at=S.texture;for(let dt=0,Et=at.length;dt<Et;dt++){const It=n.get(at[dt]);It.__webglTexture===void 0&&(It.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&S.samples>0&&_t(S)===!1){const at=et?x:[x];B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let dt=0;dt<at.length;dt++){const Et=at[dt];B.__webglColorRenderbuffer[dt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[dt]);const It=s.convert(Et.format,Et.colorSpace),J=s.convert(Et.type),Zt=w(Et.internalFormat,It,J,Et.colorSpace,S.isXRRenderTarget===!0),Bt=Ct(S);i.renderbufferStorageMultisample(i.RENDERBUFFER,Bt,Zt,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,B.__webglColorRenderbuffer[dt])}i.bindRenderbuffer(i.RENDERBUFFER,null),S.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),St(B.__webglDepthRenderbuffer,S,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){e.bindTexture(i.TEXTURE_CUBE_MAP,it.__webglTexture),Mt(i.TEXTURE_CUBE_MAP,x,ft);for(let at=0;at<6;at++)if(o&&x.mipmaps&&x.mipmaps.length>0)for(let dt=0;dt<x.mipmaps.length;dt++)wt(B.__webglFramebuffer[at][dt],S,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,dt);else wt(B.__webglFramebuffer[at],S,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);y(x,ft)&&g(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(et){const at=S.texture;for(let dt=0,Et=at.length;dt<Et;dt++){const It=at[dt],J=n.get(It);e.bindTexture(i.TEXTURE_2D,J.__webglTexture),Mt(i.TEXTURE_2D,It,ft),wt(B.__webglFramebuffer,S,It,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,0),y(It,ft)&&g(i.TEXTURE_2D)}e.unbindTexture()}else{let at=i.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(o?at=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(at,it.__webglTexture),Mt(at,x,ft),o&&x.mipmaps&&x.mipmaps.length>0)for(let dt=0;dt<x.mipmaps.length;dt++)wt(B.__webglFramebuffer[dt],S,x,i.COLOR_ATTACHMENT0,at,dt);else wt(B.__webglFramebuffer,S,x,i.COLOR_ATTACHMENT0,at,0);y(x,ft)&&g(at),e.unbindTexture()}S.depthBuffer&&$t(S)}function Te(S){const x=p(S)||o,B=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let it=0,Z=B.length;it<Z;it++){const et=B[it];if(y(et,x)){const ft=S.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,at=n.get(et).__webglTexture;e.bindTexture(ft,at),g(ft),e.unbindTexture()}}}function xt(S){if(o&&S.samples>0&&_t(S)===!1){const x=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],B=S.width,it=S.height;let Z=i.COLOR_BUFFER_BIT;const et=[],ft=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=n.get(S),dt=S.isWebGLMultipleRenderTargets===!0;if(dt)for(let Et=0;Et<x.length;Et++)e.bindFramebuffer(i.FRAMEBUFFER,at.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,at.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,at.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,at.__webglFramebuffer);for(let Et=0;Et<x.length;Et++){et.push(i.COLOR_ATTACHMENT0+Et),S.depthBuffer&&et.push(ft);const It=at.__ignoreDepthValues!==void 0?at.__ignoreDepthValues:!1;if(It===!1&&(S.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),S.stencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),dt&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,at.__webglColorRenderbuffer[Et]),It===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[ft]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[ft])),dt){const J=n.get(x[Et]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,J,0)}i.blitFramebuffer(0,0,B,it,0,0,B,it,Z,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,et)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),dt)for(let Et=0;Et<x.length;Et++){e.bindFramebuffer(i.FRAMEBUFFER,at.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,at.__webglColorRenderbuffer[Et]);const It=n.get(x[Et]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,at.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,It,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,at.__webglMultisampledFramebuffer)}}function Ct(S){return Math.min(r.maxSamples,S.samples)}function _t(S){const x=n.get(S);return o&&S.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function oe(S){const x=a.render.frame;u.get(S)!==x&&(u.set(S,x),S.update())}function Dt(S,x){const B=S.colorSpace,it=S.format,Z=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===Gc||B!==fi&&B!==Tn&&(te.getTransfer(B)===ae?o===!1?t.has("EXT_sRGB")===!0&&it===Fn?(S.format=Gc,S.minFilter=Qe,S.generateMipmaps=!1):x=n_.sRGBToLinear(x):(it!==Fn||Z!==ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),x}this.allocateTextureUnit=L,this.resetTextureUnits=$,this.setTexture2D=F,this.setTexture2DArray=j,this.setTexture3D=X,this.setTextureCube=q,this.rebindTextures=Rt,this.setupRenderTarget=U,this.updateRenderTargetMipmap=Te,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=$t,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=_t}function vC(i,t,e){const n=e.isWebGL2;function r(s,a=Tn){let o;const l=te.getTransfer(a);if(s===ki)return i.UNSIGNED_BYTE;if(s===jm)return i.UNSIGNED_SHORT_4_4_4_4;if(s===qm)return i.UNSIGNED_SHORT_5_5_5_1;if(s===Fy)return i.BYTE;if(s===By)return i.SHORT;if(s===Cu)return i.UNSIGNED_SHORT;if(s===$m)return i.INT;if(s===Ii)return i.UNSIGNED_INT;if(s===li)return i.FLOAT;if(s===uo)return n?i.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===ky)return i.ALPHA;if(s===Fn)return i.RGBA;if(s===zy)return i.LUMINANCE;if(s===Vy)return i.LUMINANCE_ALPHA;if(s===fr)return i.DEPTH_COMPONENT;if(s===gs)return i.DEPTH_STENCIL;if(s===Gc)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Hy)return i.RED;if(s===Ym)return i.RED_INTEGER;if(s===Gy)return i.RG;if(s===Km)return i.RG_INTEGER;if(s===Zm)return i.RGBA_INTEGER;if(s===Sl||s===Tl||s===Cl||s===Al)if(l===ae)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Sl)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Tl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Cl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Al)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Sl)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Tl)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Cl)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Al)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Jh||s===Qh||s===td||s===ed)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Jh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Qh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===td)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ed)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Jm)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===nd||s===id)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(s===nd)return l===ae?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===id)return l===ae?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===rd||s===sd||s===od||s===ad||s===ld||s===cd||s===ud||s===hd||s===dd||s===pd||s===fd||s===md||s===_d||s===vd)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(s===rd)return l===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===sd)return l===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===od)return l===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ad)return l===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ld)return l===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===cd)return l===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ud)return l===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===hd)return l===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===dd)return l===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===pd)return l===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===fd)return l===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===md)return l===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===_d)return l===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===vd)return l===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Pl||s===gd||s===bd)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(s===Pl)return l===ae?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===gd)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===bd)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Wy||s===xd||s===yd||s===wd)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(s===Pl)return o.COMPRESSED_RED_RGTC1_EXT;if(s===xd)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===yd)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===wd)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===pr?n?i.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class gC extends tn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class aa extends ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bC={type:"move"};class Jl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new aa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new aa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new aa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),f=this._getHandJoint(c,_);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),m=.02,v=.005;c.inputState.pinching&&d>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(bC)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new aa;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const xC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class wC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new Ye,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}render(t,e){if(this.texture!==null){if(this.mesh===null){const n=e.cameras[0].viewport,r=new jn({extensions:{fragDepth:!0},vertexShader:xC,fragmentShader:yC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Pn(new Mo(20,20),r)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}}class EC extends Sr{constructor(t,e){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,m=null,v=null;const _=new wC,p=e.getContextAttributes();let f=null,y=null;const g=[],w=[],T=new Lt;let C=null;const M=new tn;M.layers.enable(1),M.viewport=new Ne;const D=new tn;D.layers.enable(2),D.viewport=new Ne;const N=[M,D],b=new gC;b.layers.enable(1),b.layers.enable(2);let P=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let K=g[H];return K===void 0&&(K=new Jl,g[H]=K),K.getTargetRaySpace()},this.getControllerGrip=function(H){let K=g[H];return K===void 0&&(K=new Jl,g[H]=K),K.getGripSpace()},this.getHand=function(H){let K=g[H];return K===void 0&&(K=new Jl,g[H]=K),K.getHandSpace()};function $(H){const K=w.indexOf(H.inputSource);if(K===-1)return;const ht=g[K];ht!==void 0&&(ht.update(H.inputSource,H.frame,c||a),ht.dispatchEvent({type:H.type,data:H.inputSource}))}function L(){r.removeEventListener("select",$),r.removeEventListener("selectstart",$),r.removeEventListener("selectend",$),r.removeEventListener("squeeze",$),r.removeEventListener("squeezestart",$),r.removeEventListener("squeezeend",$),r.removeEventListener("end",L),r.removeEventListener("inputsourceschange",k);for(let H=0;H<g.length;H++){const K=w[H];K!==null&&(w[H]=null,g[H].disconnect(K))}P=null,G=null,_.reset(),t.setRenderTarget(f),m=null,d=null,h=null,r=null,y=null,Mt.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(f=t.getRenderTarget(),r.addEventListener("select",$),r.addEventListener("selectstart",$),r.addEventListener("selectend",$),r.addEventListener("squeeze",$),r.addEventListener("squeezestart",$),r.addEventListener("squeezeend",$),r.addEventListener("end",L),r.addEventListener("inputsourceschange",k),p.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(T),r.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const K={antialias:r.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,K),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new mi(m.framebufferWidth,m.framebufferHeight,{format:Fn,type:ki,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let K=null,ht=null,wt=null;p.depth&&(wt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,K=p.stencil?gs:fr,ht=p.stencil?pr:Ii);const St={colorFormat:e.RGBA8,depthFormat:wt,scaleFactor:s};h=new XRWebGLBinding(r,e),d=h.createProjectionLayer(St),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new mi(d.textureWidth,d.textureHeight,{format:Fn,type:ki,depthTexture:new f_(d.textureWidth,d.textureHeight,ht,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0});const pt=t.properties.get(y);pt.__ignoreDepthValues=d.ignoreDepthValues}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Mt.setContext(r),Mt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function k(H){for(let K=0;K<H.removed.length;K++){const ht=H.removed[K],wt=w.indexOf(ht);wt>=0&&(w[wt]=null,g[wt].disconnect(ht))}for(let K=0;K<H.added.length;K++){const ht=H.added[K];let wt=w.indexOf(ht);if(wt===-1){for(let pt=0;pt<g.length;pt++)if(pt>=w.length){w.push(ht),wt=pt;break}else if(w[pt]===null){w[pt]=ht,wt=pt;break}if(wt===-1)break}const St=g[wt];St&&St.connect(ht)}}const F=new I,j=new I;function X(H,K,ht){F.setFromMatrixPosition(K.matrixWorld),j.setFromMatrixPosition(ht.matrixWorld);const wt=F.distanceTo(j),St=K.projectionMatrix.elements,pt=ht.projectionMatrix.elements,$t=St[14]/(St[10]-1),Rt=St[14]/(St[10]+1),U=(St[9]+1)/St[5],Te=(St[9]-1)/St[5],xt=(St[8]-1)/St[0],Ct=(pt[8]+1)/pt[0],_t=$t*xt,oe=$t*Ct,Dt=wt/(-xt+Ct),S=Dt*-xt;K.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(S),H.translateZ(Dt),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const x=$t+Dt,B=Rt+Dt,it=_t-S,Z=oe+(wt-S),et=U*Rt/B*x,ft=Te*Rt/B*x;H.projectionMatrix.makePerspective(it,Z,et,ft,x,B),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function q(H,K){K===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(K.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;_.texture!==null&&(H.near=_.depthNear,H.far=_.depthFar),b.near=D.near=M.near=H.near,b.far=D.far=M.far=H.far,(P!==b.near||G!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),P=b.near,G=b.far,M.near=P,M.far=G,D.near=P,D.far=G,M.updateProjectionMatrix(),D.updateProjectionMatrix(),H.updateProjectionMatrix());const K=H.parent,ht=b.cameras;q(b,K);for(let wt=0;wt<ht.length;wt++)q(ht[wt],K);ht.length===2?X(b,M,D):b.projectionMatrix.copy(M.projectionMatrix),Y(H,b,K)};function Y(H,K,ht){ht===null?H.matrix.copy(K.matrixWorld):(H.matrix.copy(ht.matrixWorld),H.matrix.invert(),H.matrix.multiply(K.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(K.projectionMatrix),H.projectionMatrixInverse.copy(K.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=ho*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(H){l=H,d!==null&&(d.fixedFoveation=H),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=H)},this.hasDepthSensing=function(){return _.texture!==null};let tt=null;function st(H,K){if(u=K.getViewerPose(c||a),v=K,u!==null){const ht=u.views;m!==null&&(t.setRenderTargetFramebuffer(y,m.framebuffer),t.setRenderTarget(y));let wt=!1;ht.length!==b.cameras.length&&(b.cameras.length=0,wt=!0);for(let pt=0;pt<ht.length;pt++){const $t=ht[pt];let Rt=null;if(m!==null)Rt=m.getViewport($t);else{const Te=h.getViewSubImage(d,$t);Rt=Te.viewport,pt===0&&(t.setRenderTargetTextures(y,Te.colorTexture,d.ignoreDepthValues?void 0:Te.depthStencilTexture),t.setRenderTarget(y))}let U=N[pt];U===void 0&&(U=new tn,U.layers.enable(pt),U.viewport=new Ne,N[pt]=U),U.matrix.fromArray($t.transform.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale),U.projectionMatrix.fromArray($t.projectionMatrix),U.projectionMatrixInverse.copy(U.projectionMatrix).invert(),U.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),pt===0&&(b.matrix.copy(U.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),wt===!0&&b.cameras.push(U)}const St=r.enabledFeatures;if(St&&St.includes("depth-sensing")){const pt=h.getDepthInformation(ht[0]);pt&&pt.isValid&&pt.texture&&_.init(t,pt,r.renderState)}}for(let ht=0;ht<g.length;ht++){const wt=w[ht],St=g[ht];wt!==null&&St!==void 0&&St.update(wt,K,c||a)}_.render(t,b),tt&&tt(H,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),v=null}const Mt=new p_;Mt.setAnimationLoop(st),this.setAnimationLoop=function(H){tt=H},this.dispose=function(){}}}function MC(i,t){function e(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,u_(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function r(p,f,y,g,w){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(p,f):f.isMeshToonMaterial?(s(p,f),h(p,f)):f.isMeshPhongMaterial?(s(p,f),u(p,f)):f.isMeshStandardMaterial?(s(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,w)):f.isMeshMatcapMaterial?(s(p,f),v(p,f)):f.isMeshDepthMaterial?s(p,f):f.isMeshDistanceMaterial?(s(p,f),_(p,f)):f.isMeshNormalMaterial?s(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?l(p,f,y,g):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,e(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===an&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,e(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===an&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,e(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,e(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const y=t.get(f).envMap;if(y&&(p.envMap.value=y,p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const g=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*g,e(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,y,g){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*y,p.scale.value=g*.5,f.map&&(p.map.value=f.map,e(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function h(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,p.roughnessMapTransform)),t.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,y){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===an&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,f){f.matcap&&(p.matcap.value=f.matcap)}function _(p,f){const y=t.get(f).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function SC(i,t,e,n){let r={},s={},a=[];const o=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,g){const w=g.program;n.uniformBlockBinding(y,w)}function c(y,g){let w=r[y.id];w===void 0&&(v(y),w=u(y),r[y.id]=w,y.addEventListener("dispose",p));const T=g.program;n.updateUBOMapping(y,T);const C=t.render.frame;s[y.id]!==C&&(d(y),s[y.id]=C)}function u(y){const g=h();y.__bindingPointIndex=g;const w=i.createBuffer(),T=y.__size,C=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,T,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,g,w),w}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const g=r[y.id],w=y.uniforms,T=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,g);for(let C=0,M=w.length;C<M;C++){const D=Array.isArray(w[C])?w[C]:[w[C]];for(let N=0,b=D.length;N<b;N++){const P=D[N];if(m(P,C,N,T)===!0){const G=P.__offset,$=Array.isArray(P.value)?P.value:[P.value];let L=0;for(let k=0;k<$.length;k++){const F=$[k],j=_(F);typeof F=="number"||typeof F=="boolean"?(P.__data[0]=F,i.bufferSubData(i.UNIFORM_BUFFER,G+L,P.__data)):F.isMatrix3?(P.__data[0]=F.elements[0],P.__data[1]=F.elements[1],P.__data[2]=F.elements[2],P.__data[3]=0,P.__data[4]=F.elements[3],P.__data[5]=F.elements[4],P.__data[6]=F.elements[5],P.__data[7]=0,P.__data[8]=F.elements[6],P.__data[9]=F.elements[7],P.__data[10]=F.elements[8],P.__data[11]=0):(F.toArray(P.__data,L),L+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(y,g,w,T){const C=y.value,M=g+"_"+w;if(T[M]===void 0)return typeof C=="number"||typeof C=="boolean"?T[M]=C:T[M]=C.clone(),!0;{const D=T[M];if(typeof C=="number"||typeof C=="boolean"){if(D!==C)return T[M]=C,!0}else if(D.equals(C)===!1)return D.copy(C),!0}return!1}function v(y){const g=y.uniforms;let w=0;const T=16;for(let M=0,D=g.length;M<D;M++){const N=Array.isArray(g[M])?g[M]:[g[M]];for(let b=0,P=N.length;b<P;b++){const G=N[b],$=Array.isArray(G.value)?G.value:[G.value];for(let L=0,k=$.length;L<k;L++){const F=$[L],j=_(F),X=w%T;X!==0&&T-X<j.boundary&&(w+=T-X),G.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=w,w+=j.storage}}}const C=w%T;return C>0&&(w+=T-C),y.__size=w,y.__cache={},this}function _(y){const g={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(g.boundary=4,g.storage=4):y.isVector2?(g.boundary=8,g.storage=8):y.isVector3||y.isColor?(g.boundary=16,g.storage=12):y.isVector4?(g.boundary=16,g.storage=16):y.isMatrix3?(g.boundary=48,g.storage=48):y.isMatrix4?(g.boundary=64,g.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),g}function p(y){const g=y.target;g.removeEventListener("dispose",p);const w=a.indexOf(g.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function f(){for(const y in r)i.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:l,update:c,dispose:f}}class x_{constructor(t={}){const{canvas:e=vw(),context:n=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;const m=new Uint32Array(4),v=new Int32Array(4);let _=null,p=null;const f=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ue,this._useLegacyLights=!1,this.toneMapping=Bi,this.toneMappingExposure=1;const g=this;let w=!1,T=0,C=0,M=null,D=-1,N=null;const b=new Ne,P=new Ne;let G=null;const $=new Wt(0);let L=0,k=e.width,F=e.height,j=1,X=null,q=null;const Y=new Ne(0,0,k,F),tt=new Ne(0,0,k,F);let st=!1;const Mt=new d_;let H=!1,K=!1,ht=null;const wt=new Qt,St=new Lt,pt=new I,$t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Rt(){return M===null?j:1}let U=n;function Te(E,O){for(let V=0;V<E.length;V++){const W=E[V],z=e.getContext(W,O);if(z!==null)return z}return null}try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Tu}`),e.addEventListener("webglcontextlost",bt,!1),e.addEventListener("webglcontextrestored",A,!1),e.addEventListener("webglcontextcreationerror",nt,!1),U===null){const O=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&O.shift(),U=Te(O,E),U===null)throw Te(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let xt,Ct,_t,oe,Dt,S,x,B,it,Z,et,ft,at,dt,Et,It,J,Zt,Bt,At,gt,ct,Ut,R;function rt(){xt=new DS(U),Ct=new SS(U,xt,t),xt.init(Ct),ct=new vC(U,xt,Ct),_t=new mC(U,xt,Ct),oe=new US(U),Dt=new eC,S=new _C(U,xt,_t,Dt,Ct,ct,oe),x=new CS(g),B=new LS(g),it=new Hw(U,Ct),Ut=new ES(U,xt,it,Ct),Z=new IS(U,it,oe,Ut),et=new kS(U,Z,it,oe),Bt=new BS(U,Ct,S),It=new TS(Dt),ft=new tC(g,x,B,xt,Ct,Ut,It),at=new MC(g,Dt),dt=new iC,Et=new cC(xt,Ct),Zt=new wS(g,x,B,_t,et,d,l),J=new fC(g,et,Ct),R=new SC(U,oe,Ct,_t),At=new MS(U,xt,oe,Ct),gt=new OS(U,xt,oe,Ct),oe.programs=ft.programs,g.capabilities=Ct,g.extensions=xt,g.properties=Dt,g.renderLists=dt,g.shadowMap=J,g.state=_t,g.info=oe}rt();const lt=new EC(g,U);this.xr=lt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const E=xt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=xt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(E){E!==void 0&&(j=E,this.setSize(k,F,!1))},this.getSize=function(E){return E.set(k,F)},this.setSize=function(E,O,V=!0){if(lt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=E,F=O,e.width=Math.floor(E*j),e.height=Math.floor(O*j),V===!0&&(e.style.width=E+"px",e.style.height=O+"px"),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(k*j,F*j).floor()},this.setDrawingBufferSize=function(E,O,V){k=E,F=O,j=V,e.width=Math.floor(E*V),e.height=Math.floor(O*V),this.setViewport(0,0,E,O)},this.getCurrentViewport=function(E){return E.copy(b)},this.getViewport=function(E){return E.copy(Y)},this.setViewport=function(E,O,V,W){E.isVector4?Y.set(E.x,E.y,E.z,E.w):Y.set(E,O,V,W),_t.viewport(b.copy(Y).multiplyScalar(j).floor())},this.getScissor=function(E){return E.copy(tt)},this.setScissor=function(E,O,V,W){E.isVector4?tt.set(E.x,E.y,E.z,E.w):tt.set(E,O,V,W),_t.scissor(P.copy(tt).multiplyScalar(j).floor())},this.getScissorTest=function(){return st},this.setScissorTest=function(E){_t.setScissorTest(st=E)},this.setOpaqueSort=function(E){X=E},this.setTransparentSort=function(E){q=E},this.getClearColor=function(E){return E.copy(Zt.getClearColor())},this.setClearColor=function(){Zt.setClearColor.apply(Zt,arguments)},this.getClearAlpha=function(){return Zt.getClearAlpha()},this.setClearAlpha=function(){Zt.setClearAlpha.apply(Zt,arguments)},this.clear=function(E=!0,O=!0,V=!0){let W=0;if(E){let z=!1;if(M!==null){const ut=M.texture.format;z=ut===Zm||ut===Km||ut===Ym}if(z){const ut=M.texture.type,vt=ut===ki||ut===Ii||ut===Cu||ut===pr||ut===jm||ut===qm,Tt=Zt.getClearColor(),Pt=Zt.getClearAlpha(),kt=Tt.r,Ot=Tt.g,Nt=Tt.b;vt?(m[0]=kt,m[1]=Ot,m[2]=Nt,m[3]=Pt,U.clearBufferuiv(U.COLOR,0,m)):(v[0]=kt,v[1]=Ot,v[2]=Nt,v[3]=Pt,U.clearBufferiv(U.COLOR,0,v))}else W|=U.COLOR_BUFFER_BIT}O&&(W|=U.DEPTH_BUFFER_BIT),V&&(W|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",bt,!1),e.removeEventListener("webglcontextrestored",A,!1),e.removeEventListener("webglcontextcreationerror",nt,!1),dt.dispose(),Et.dispose(),Dt.dispose(),x.dispose(),B.dispose(),et.dispose(),Ut.dispose(),R.dispose(),ft.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",Oe),lt.removeEventListener("sessionend",Yt),ht&&(ht.dispose(),ht=null),be.stop()};function bt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function A(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const E=oe.autoReset,O=J.enabled,V=J.autoUpdate,W=J.needsUpdate,z=J.type;rt(),oe.autoReset=E,J.enabled=O,J.autoUpdate=V,J.needsUpdate=W,J.type=z}function nt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Q(E){const O=E.target;O.removeEventListener("dispose",Q),mt(O)}function mt(E){yt(E),Dt.remove(E)}function yt(E){const O=Dt.get(E).programs;O!==void 0&&(O.forEach(function(V){ft.releaseProgram(V)}),E.isShaderMaterial&&ft.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,V,W,z,ut){O===null&&(O=$t);const vt=z.isMesh&&z.matrixWorld.determinant()<0,Tt=Yv(E,O,V,W,z);_t.setMaterial(W,vt);let Pt=V.index,kt=1;if(W.wireframe===!0){if(Pt=Z.getWireframeAttribute(V),Pt===void 0)return;kt=2}const Ot=V.drawRange,Nt=V.attributes.position;let xe=Ot.start*kt,hn=(Ot.start+Ot.count)*kt;ut!==null&&(xe=Math.max(xe,ut.start*kt),hn=Math.min(hn,(ut.start+ut.count)*kt)),Pt!==null?(xe=Math.max(xe,0),hn=Math.min(hn,Pt.count)):Nt!=null&&(xe=Math.max(xe,0),hn=Math.min(hn,Nt.count));const Re=hn-xe;if(Re<0||Re===1/0)return;Ut.setup(z,W,Tt,V,Pt);let Jn,he=At;if(Pt!==null&&(Jn=it.get(Pt),he=gt,he.setIndex(Jn)),z.isMesh)W.wireframe===!0?(_t.setLineWidth(W.wireframeLinewidth*Rt()),he.setMode(U.LINES)):he.setMode(U.TRIANGLES);else if(z.isLine){let Vt=W.linewidth;Vt===void 0&&(Vt=1),_t.setLineWidth(Vt*Rt()),z.isLineSegments?he.setMode(U.LINES):z.isLineLoop?he.setMode(U.LINE_LOOP):he.setMode(U.LINE_STRIP)}else z.isPoints?he.setMode(U.POINTS):z.isSprite&&he.setMode(U.TRIANGLES);if(z.isBatchedMesh)he.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else if(z.isInstancedMesh)he.renderInstances(xe,Re,z.count);else if(V.isInstancedBufferGeometry){const Vt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,hl=Math.min(V.instanceCount,Vt);he.renderInstances(xe,Re,hl)}else he.render(xe,Re)};function qt(E,O,V){E.transparent===!0&&E.side===Un&&E.forceSinglePass===!1?(E.side=an,E.needsUpdate=!0,No(E,O,V),E.side=Gi,E.needsUpdate=!0,No(E,O,V),E.side=Un):No(E,O,V)}this.compile=function(E,O,V=null){V===null&&(V=E),p=Et.get(V),p.init(),y.push(p),V.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),E!==V&&E.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights(g._useLegacyLights);const W=new Set;return E.traverse(function(z){const ut=z.material;if(ut)if(Array.isArray(ut))for(let vt=0;vt<ut.length;vt++){const Tt=ut[vt];qt(Tt,V,z),W.add(Tt)}else qt(ut,V,z),W.add(ut)}),y.pop(),p=null,W},this.compileAsync=function(E,O,V=null){const W=this.compile(E,O,V);return new Promise(z=>{function ut(){if(W.forEach(function(vt){Dt.get(vt).currentProgram.isReady()&&W.delete(vt)}),W.size===0){z(E);return}setTimeout(ut,10)}xt.get("KHR_parallel_shader_compile")!==null?ut():setTimeout(ut,10)})};let Gt=null;function ne(E){Gt&&Gt(E)}function Oe(){be.stop()}function Yt(){be.start()}const be=new p_;be.setAnimationLoop(ne),typeof self<"u"&&be.setContext(self),this.setAnimationLoop=function(E){Gt=E,lt.setAnimationLoop(E),E===null?be.stop():be.start()},lt.addEventListener("sessionstart",Oe),lt.addEventListener("sessionend",Yt),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(O),O=lt.getCamera()),E.isScene===!0&&E.onBeforeRender(g,E,O,M),p=Et.get(E,y.length),p.init(),y.push(p),wt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Mt.setFromProjectionMatrix(wt),K=this.localClippingEnabled,H=It.init(this.clippingPlanes,K),_=dt.get(E,f.length),_.init(),f.push(_),We(E,O,0,g.sortObjects),_.finish(),g.sortObjects===!0&&_.sort(X,q),this.info.render.frame++,H===!0&&It.beginShadows();const V=p.state.shadowsArray;if(J.render(V,E,O),H===!0&&It.endShadows(),this.info.autoReset===!0&&this.info.reset(),(lt.enabled===!1||lt.isPresenting===!1||lt.hasDepthSensing()===!1)&&Zt.render(_,E),p.setupLights(g._useLegacyLights),O.isArrayCamera){const W=O.cameras;for(let z=0,ut=W.length;z<ut;z++){const vt=W[z];ph(_,E,vt,vt.viewport)}}else ph(_,E,O);M!==null&&(S.updateMultisampleRenderTarget(M),S.updateRenderTargetMipmap(M)),E.isScene===!0&&E.onAfterRender(g,E,O),Ut.resetDefaultState(),D=-1,N=null,y.pop(),y.length>0?p=y[y.length-1]:p=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function We(E,O,V,W){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)V=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Mt.intersectsSprite(E)){W&&pt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(wt);const vt=et.update(E),Tt=E.material;Tt.visible&&_.push(E,vt,Tt,V,pt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Mt.intersectsObject(E))){const vt=et.update(E),Tt=E.material;if(W&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),pt.copy(E.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),pt.copy(vt.boundingSphere.center)),pt.applyMatrix4(E.matrixWorld).applyMatrix4(wt)),Array.isArray(Tt)){const Pt=vt.groups;for(let kt=0,Ot=Pt.length;kt<Ot;kt++){const Nt=Pt[kt],xe=Tt[Nt.materialIndex];xe&&xe.visible&&_.push(E,vt,xe,V,pt.z,Nt)}}else Tt.visible&&_.push(E,vt,Tt,V,pt.z,null)}}const ut=E.children;for(let vt=0,Tt=ut.length;vt<Tt;vt++)We(ut[vt],O,V,W)}function ph(E,O,V,W){const z=E.opaque,ut=E.transmissive,vt=E.transparent;p.setupLightsView(V),H===!0&&It.setGlobalState(g.clippingPlanes,V),ut.length>0&&qv(z,ut,O,V),W&&_t.viewport(b.copy(W)),z.length>0&&Uo(z,O,V),ut.length>0&&Uo(ut,O,V),vt.length>0&&Uo(vt,O,V),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function qv(E,O,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;const ut=Ct.isWebGL2;ht===null&&(ht=new mi(1,1,{generateMipmaps:!0,type:xt.has("EXT_color_buffer_half_float")?uo:ki,minFilter:lr,samples:ut?4:0})),g.getDrawingBufferSize(St),ut?ht.setSize(St.x,St.y):ht.setSize(Ba(St.x),Ba(St.y));const vt=g.getRenderTarget();g.setRenderTarget(ht),g.getClearColor($),L=g.getClearAlpha(),L<1&&g.setClearColor(16777215,.5),g.clear();const Tt=g.toneMapping;g.toneMapping=Bi,Uo(E,V,W),S.updateMultisampleRenderTarget(ht),S.updateRenderTargetMipmap(ht);let Pt=!1;for(let kt=0,Ot=O.length;kt<Ot;kt++){const Nt=O[kt],xe=Nt.object,hn=Nt.geometry,Re=Nt.material,Jn=Nt.group;if(Re.side===Un&&xe.layers.test(W.layers)){const he=Re.side;Re.side=an,Re.needsUpdate=!0,fh(xe,V,W,hn,Re,Jn),Re.side=he,Re.needsUpdate=!0,Pt=!0}}Pt===!0&&(S.updateMultisampleRenderTarget(ht),S.updateRenderTargetMipmap(ht)),g.setRenderTarget(vt),g.setClearColor($,L),g.toneMapping=Tt}function Uo(E,O,V){const W=O.isScene===!0?O.overrideMaterial:null;for(let z=0,ut=E.length;z<ut;z++){const vt=E[z],Tt=vt.object,Pt=vt.geometry,kt=W===null?vt.material:W,Ot=vt.group;Tt.layers.test(V.layers)&&fh(Tt,O,V,Pt,kt,Ot)}}function fh(E,O,V,W,z,ut){E.onBeforeRender(g,O,V,W,z,ut),E.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.onBeforeRender(g,O,V,W,E,ut),z.transparent===!0&&z.side===Un&&z.forceSinglePass===!1?(z.side=an,z.needsUpdate=!0,g.renderBufferDirect(V,O,W,z,E,ut),z.side=Gi,z.needsUpdate=!0,g.renderBufferDirect(V,O,W,z,E,ut),z.side=Un):g.renderBufferDirect(V,O,W,z,E,ut),E.onAfterRender(g,O,V,W,z,ut)}function No(E,O,V){O.isScene!==!0&&(O=$t);const W=Dt.get(E),z=p.state.lights,ut=p.state.shadowsArray,vt=z.state.version,Tt=ft.getParameters(E,z.state,ut,O,V),Pt=ft.getProgramCacheKey(Tt);let kt=W.programs;W.environment=E.isMeshStandardMaterial?O.environment:null,W.fog=O.fog,W.envMap=(E.isMeshStandardMaterial?B:x).get(E.envMap||W.environment),kt===void 0&&(E.addEventListener("dispose",Q),kt=new Map,W.programs=kt);let Ot=kt.get(Pt);if(Ot!==void 0){if(W.currentProgram===Ot&&W.lightsStateVersion===vt)return _h(E,Tt),Ot}else Tt.uniforms=ft.getUniforms(E),E.onBuild(V,Tt,g),E.onBeforeCompile(Tt,g),Ot=ft.acquireProgram(Tt,Pt),kt.set(Pt,Ot),W.uniforms=Tt.uniforms;const Nt=W.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Nt.clippingPlanes=It.uniform),_h(E,Tt),W.needsLights=Zv(E),W.lightsStateVersion=vt,W.needsLights&&(Nt.ambientLightColor.value=z.state.ambient,Nt.lightProbe.value=z.state.probe,Nt.directionalLights.value=z.state.directional,Nt.directionalLightShadows.value=z.state.directionalShadow,Nt.spotLights.value=z.state.spot,Nt.spotLightShadows.value=z.state.spotShadow,Nt.rectAreaLights.value=z.state.rectArea,Nt.ltc_1.value=z.state.rectAreaLTC1,Nt.ltc_2.value=z.state.rectAreaLTC2,Nt.pointLights.value=z.state.point,Nt.pointLightShadows.value=z.state.pointShadow,Nt.hemisphereLights.value=z.state.hemi,Nt.directionalShadowMap.value=z.state.directionalShadowMap,Nt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Nt.spotShadowMap.value=z.state.spotShadowMap,Nt.spotLightMatrix.value=z.state.spotLightMatrix,Nt.spotLightMap.value=z.state.spotLightMap,Nt.pointShadowMap.value=z.state.pointShadowMap,Nt.pointShadowMatrix.value=z.state.pointShadowMatrix),W.currentProgram=Ot,W.uniformsList=null,Ot}function mh(E){if(E.uniformsList===null){const O=E.currentProgram.getUniforms();E.uniformsList=xa.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function _h(E,O){const V=Dt.get(E);V.outputColorSpace=O.outputColorSpace,V.batching=O.batching,V.instancing=O.instancing,V.instancingColor=O.instancingColor,V.skinning=O.skinning,V.morphTargets=O.morphTargets,V.morphNormals=O.morphNormals,V.morphColors=O.morphColors,V.morphTargetsCount=O.morphTargetsCount,V.numClippingPlanes=O.numClippingPlanes,V.numIntersection=O.numClipIntersection,V.vertexAlphas=O.vertexAlphas,V.vertexTangents=O.vertexTangents,V.toneMapping=O.toneMapping}function Yv(E,O,V,W,z){O.isScene!==!0&&(O=$t),S.resetTextureUnits();const ut=O.fog,vt=W.isMeshStandardMaterial?O.environment:null,Tt=M===null?g.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:fi,Pt=(W.isMeshStandardMaterial?B:x).get(W.envMap||vt),kt=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ot=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Nt=!!V.morphAttributes.position,xe=!!V.morphAttributes.normal,hn=!!V.morphAttributes.color;let Re=Bi;W.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(Re=g.toneMapping);const Jn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,he=Jn!==void 0?Jn.length:0,Vt=Dt.get(W),hl=p.state.lights;if(H===!0&&(K===!0||E!==N)){const wn=E===N&&W.id===D;It.setState(W,E,wn)}let me=!1;W.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==hl.state.version||Vt.outputColorSpace!==Tt||z.isBatchedMesh&&Vt.batching===!1||!z.isBatchedMesh&&Vt.batching===!0||z.isInstancedMesh&&Vt.instancing===!1||!z.isInstancedMesh&&Vt.instancing===!0||z.isSkinnedMesh&&Vt.skinning===!1||!z.isSkinnedMesh&&Vt.skinning===!0||z.isInstancedMesh&&Vt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Vt.instancingColor===!1&&z.instanceColor!==null||Vt.envMap!==Pt||W.fog===!0&&Vt.fog!==ut||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==It.numPlanes||Vt.numIntersection!==It.numIntersection)||Vt.vertexAlphas!==kt||Vt.vertexTangents!==Ot||Vt.morphTargets!==Nt||Vt.morphNormals!==xe||Vt.morphColors!==hn||Vt.toneMapping!==Re||Ct.isWebGL2===!0&&Vt.morphTargetsCount!==he)&&(me=!0):(me=!0,Vt.__version=W.version);let $i=Vt.currentProgram;me===!0&&($i=No(W,O,z));let vh=!1,Us=!1,dl=!1;const Fe=$i.getUniforms(),ji=Vt.uniforms;if(_t.useProgram($i.program)&&(vh=!0,Us=!0,dl=!0),W.id!==D&&(D=W.id,Us=!0),vh||N!==E){Fe.setValue(U,"projectionMatrix",E.projectionMatrix),Fe.setValue(U,"viewMatrix",E.matrixWorldInverse);const wn=Fe.map.cameraPosition;wn!==void 0&&wn.setValue(U,pt.setFromMatrixPosition(E.matrixWorld)),Ct.logarithmicDepthBuffer&&Fe.setValue(U,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Fe.setValue(U,"isOrthographic",E.isOrthographicCamera===!0),N!==E&&(N=E,Us=!0,dl=!0)}if(z.isSkinnedMesh){Fe.setOptional(U,z,"bindMatrix"),Fe.setOptional(U,z,"bindMatrixInverse");const wn=z.skeleton;wn&&(Ct.floatVertexTextures?(wn.boneTexture===null&&wn.computeBoneTexture(),Fe.setValue(U,"boneTexture",wn.boneTexture,S)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}z.isBatchedMesh&&(Fe.setOptional(U,z,"batchingTexture"),Fe.setValue(U,"batchingTexture",z._matricesTexture,S));const pl=V.morphAttributes;if((pl.position!==void 0||pl.normal!==void 0||pl.color!==void 0&&Ct.isWebGL2===!0)&&Bt.update(z,V,$i),(Us||Vt.receiveShadow!==z.receiveShadow)&&(Vt.receiveShadow=z.receiveShadow,Fe.setValue(U,"receiveShadow",z.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(ji.envMap.value=Pt,ji.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),Us&&(Fe.setValue(U,"toneMappingExposure",g.toneMappingExposure),Vt.needsLights&&Kv(ji,dl),ut&&W.fog===!0&&at.refreshFogUniforms(ji,ut),at.refreshMaterialUniforms(ji,W,j,F,ht),xa.upload(U,mh(Vt),ji,S)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(xa.upload(U,mh(Vt),ji,S),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Fe.setValue(U,"center",z.center),Fe.setValue(U,"modelViewMatrix",z.modelViewMatrix),Fe.setValue(U,"normalMatrix",z.normalMatrix),Fe.setValue(U,"modelMatrix",z.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const wn=W.uniformsGroups;for(let fl=0,Jv=wn.length;fl<Jv;fl++)if(Ct.isWebGL2){const gh=wn[fl];R.update(gh,$i),R.bind(gh,$i)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return $i}function Kv(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function Zv(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(E,O,V){Dt.get(E.texture).__webglTexture=O,Dt.get(E.depthTexture).__webglTexture=V;const W=Dt.get(E);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||xt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,O){const V=Dt.get(E);V.__webglFramebuffer=O,V.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(E,O=0,V=0){M=E,T=O,C=V;let W=!0,z=null,ut=!1,vt=!1;if(E){const Pt=Dt.get(E);Pt.__useDefaultFramebuffer!==void 0?(_t.bindFramebuffer(U.FRAMEBUFFER,null),W=!1):Pt.__webglFramebuffer===void 0?S.setupRenderTarget(E):Pt.__hasExternalTextures&&S.rebindTextures(E,Dt.get(E.texture).__webglTexture,Dt.get(E.depthTexture).__webglTexture);const kt=E.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(vt=!0);const Ot=Dt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ot[O])?z=Ot[O][V]:z=Ot[O],ut=!0):Ct.isWebGL2&&E.samples>0&&S.useMultisampledRTT(E)===!1?z=Dt.get(E).__webglMultisampledFramebuffer:Array.isArray(Ot)?z=Ot[V]:z=Ot,b.copy(E.viewport),P.copy(E.scissor),G=E.scissorTest}else b.copy(Y).multiplyScalar(j).floor(),P.copy(tt).multiplyScalar(j).floor(),G=st;if(_t.bindFramebuffer(U.FRAMEBUFFER,z)&&Ct.drawBuffers&&W&&_t.drawBuffers(E,z),_t.viewport(b),_t.scissor(P),_t.setScissorTest(G),ut){const Pt=Dt.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+O,Pt.__webglTexture,V)}else if(vt){const Pt=Dt.get(E.texture),kt=O||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Pt.__webglTexture,V||0,kt)}D=-1},this.readRenderTargetPixels=function(E,O,V,W,z,ut,vt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=Dt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&vt!==void 0&&(Tt=Tt[vt]),Tt){_t.bindFramebuffer(U.FRAMEBUFFER,Tt);try{const Pt=E.texture,kt=Pt.format,Ot=Pt.type;if(kt!==Fn&&ct.convert(kt)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Nt=Ot===uo&&(xt.has("EXT_color_buffer_half_float")||Ct.isWebGL2&&xt.has("EXT_color_buffer_float"));if(Ot!==ki&&ct.convert(Ot)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ot===li&&(Ct.isWebGL2||xt.has("OES_texture_float")||xt.has("WEBGL_color_buffer_float")))&&!Nt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-W&&V>=0&&V<=E.height-z&&U.readPixels(O,V,W,z,ct.convert(kt),ct.convert(Ot),ut)}finally{const Pt=M!==null?Dt.get(M).__webglFramebuffer:null;_t.bindFramebuffer(U.FRAMEBUFFER,Pt)}}},this.copyFramebufferToTexture=function(E,O,V=0){const W=Math.pow(2,-V),z=Math.floor(O.image.width*W),ut=Math.floor(O.image.height*W);S.setTexture2D(O,0),U.copyTexSubImage2D(U.TEXTURE_2D,V,0,0,E.x,E.y,z,ut),_t.unbindTexture()},this.copyTextureToTexture=function(E,O,V,W=0){const z=O.image.width,ut=O.image.height,vt=ct.convert(V.format),Tt=ct.convert(V.type);S.setTexture2D(V,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,V.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,V.unpackAlignment),O.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,W,E.x,E.y,z,ut,vt,Tt,O.image.data):O.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,W,E.x,E.y,O.mipmaps[0].width,O.mipmaps[0].height,vt,O.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,W,E.x,E.y,vt,Tt,O.image),W===0&&V.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),_t.unbindTexture()},this.copyTextureToTexture3D=function(E,O,V,W,z=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ut=E.max.x-E.min.x+1,vt=E.max.y-E.min.y+1,Tt=E.max.z-E.min.z+1,Pt=ct.convert(W.format),kt=ct.convert(W.type);let Ot;if(W.isData3DTexture)S.setTexture3D(W,0),Ot=U.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)S.setTexture2DArray(W,0),Ot=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,W.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,W.unpackAlignment);const Nt=U.getParameter(U.UNPACK_ROW_LENGTH),xe=U.getParameter(U.UNPACK_IMAGE_HEIGHT),hn=U.getParameter(U.UNPACK_SKIP_PIXELS),Re=U.getParameter(U.UNPACK_SKIP_ROWS),Jn=U.getParameter(U.UNPACK_SKIP_IMAGES),he=V.isCompressedTexture?V.mipmaps[z]:V.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,he.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,he.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,E.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,E.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,E.min.z),V.isDataTexture||V.isData3DTexture?U.texSubImage3D(Ot,z,O.x,O.y,O.z,ut,vt,Tt,Pt,kt,he.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(Ot,z,O.x,O.y,O.z,ut,vt,Tt,Pt,he.data)):U.texSubImage3D(Ot,z,O.x,O.y,O.z,ut,vt,Tt,Pt,kt,he),U.pixelStorei(U.UNPACK_ROW_LENGTH,Nt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,xe),U.pixelStorei(U.UNPACK_SKIP_PIXELS,hn),U.pixelStorei(U.UNPACK_SKIP_ROWS,Re),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Jn),z===0&&W.generateMipmaps&&U.generateMipmap(Ot),_t.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?S.setTextureCube(E,0):E.isData3DTexture?S.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?S.setTexture2DArray(E,0):S.setTexture2D(E,0),_t.unbindTexture()},this.resetState=function(){T=0,C=0,M=null,_t.reset(),Ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Au?"display-p3":"srgb",e.unpackColorSpace=te.workingColorSpace===Za?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ue?mr:Qm}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===mr?Ue:fi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class TC extends x_{}TC.prototype.isWebGL1Renderer=!0;class y_ extends ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class no extends Bn{constructor(t,e,n,r=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const qr=new Qt,pp=new Qt,la=[],fp=new Tr,CC=new Qt,Gs=new Pn,Ws=new ws;class AC extends Pn{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new no(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,CC)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Tr),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,qr),fp.copy(t.boundingBox).applyMatrix4(qr),this.boundingBox.union(fp)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ws),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,qr),Ws.copy(t.boundingSphere).applyMatrix4(qr),this.boundingSphere.union(Ws)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){const n=this.matrixWorld,r=this.count;if(Gs.geometry=this.geometry,Gs.material=this.material,Gs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ws.copy(this.boundingSphere),Ws.applyMatrix4(n),t.ray.intersectsSphere(Ws)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,qr),pp.multiplyMatrices(n,qr),Gs.matrixWorld=pp,Gs.raycast(t,la);for(let a=0,o=la.length;a<o;a++){const l=la[a];l.instanceId=s,l.object=this,e.push(l)}la.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new no(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Iu extends Eo{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Wt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const mp=new I,_p=new I,vp=new Qt,Ql=new Ru,ca=new ws;class PC extends ln{constructor(t=new Zn,e=new Iu){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)mp.fromBufferAttribute(e,r-1),_p.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=mp.distanceTo(_p);t.setAttribute("lineDistance",new gn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ca.copy(n.boundingSphere),ca.applyMatrix4(r),ca.radius+=s,t.ray.intersectsSphere(ca)===!1)return;vp.copy(r).invert(),Ql.copy(t.ray).applyMatrix4(vp);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new I,u=new I,h=new I,d=new I,m=this.isLineSegments?2:1,v=n.index,p=n.attributes.position;if(v!==null){const f=Math.max(0,a.start),y=Math.min(v.count,a.start+a.count);for(let g=f,w=y-1;g<w;g+=m){const T=v.getX(g),C=v.getX(g+1);if(c.fromBufferAttribute(p,T),u.fromBufferAttribute(p,C),Ql.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const D=t.ray.origin.distanceTo(d);D<t.near||D>t.far||e.push({distance:D,point:h.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,a.start),y=Math.min(p.count,a.start+a.count);for(let g=f,w=y-1;g<w;g+=m){if(c.fromBufferAttribute(p,g),u.fromBufferAttribute(p,g+1),Ql.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const C=t.ray.origin.distanceTo(d);C<t.near||C>t.far||e.push({distance:C,point:h.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const gp=new I,bp=new I;class w_ extends PC{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)gp.fromBufferAttribute(e,r),bp.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+gp.distanceTo(bp);t.setAttribute("lineDistance",new gn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}const xp={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class RC{constructor(t,e,n){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const m=c[h],v=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return v}return null}}}const LC=new RC;class Ou{constructor(t){this.manager=t!==void 0?t:LC,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Ou.DEFAULT_MATERIAL_NAME="__DEFAULT";class DC extends Ou{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=xp.get(t);if(a!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0),a;const o=po("img");function l(){u(),xp.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(h){u(),r&&r(h),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(t),o.src=t,o}}class IC extends Ou{constructor(t){super(t)}load(t,e,n,r){const s=new Ye,a=new DC(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){s.image=o,s.needsUpdate=!0,e!==void 0&&e(s)},n,r),s}}class OC{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=yp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=yp();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function yp(){return(typeof performance>"u"?Date:performance).now()}class wp{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(ze(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const ua=new I,_e=new Lu;class UC extends w_{constructor(t){const e=new Zn,n=new Iu({color:16777215,vertexColors:!0,toneMapped:!1}),r=[],s=[],a={};o("n1","n2"),o("n2","n4"),o("n4","n3"),o("n3","n1"),o("f1","f2"),o("f2","f4"),o("f4","f3"),o("f3","f1"),o("n1","f1"),o("n2","f2"),o("n3","f3"),o("n4","f4"),o("p","n1"),o("p","n2"),o("p","n3"),o("p","n4"),o("u1","u2"),o("u2","u3"),o("u3","u1"),o("c","t"),o("p","c"),o("cn1","cn2"),o("cn3","cn4"),o("cf1","cf2"),o("cf3","cf4");function o(v,_){l(v),l(_)}function l(v){r.push(0,0,0),s.push(0,0,0),a[v]===void 0&&(a[v]=[]),a[v].push(r.length/3-1)}e.setAttribute("position",new gn(r,3)),e.setAttribute("color",new gn(s,3)),super(e,n),this.type="CameraHelper",this.camera=t,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update();const c=new Wt(16755200),u=new Wt(16711680),h=new Wt(43775),d=new Wt(16777215),m=new Wt(3355443);this.setColors(c,u,h,d,m)}setColors(t,e,n,r,s){const o=this.geometry.getAttribute("color");o.setXYZ(0,t.r,t.g,t.b),o.setXYZ(1,t.r,t.g,t.b),o.setXYZ(2,t.r,t.g,t.b),o.setXYZ(3,t.r,t.g,t.b),o.setXYZ(4,t.r,t.g,t.b),o.setXYZ(5,t.r,t.g,t.b),o.setXYZ(6,t.r,t.g,t.b),o.setXYZ(7,t.r,t.g,t.b),o.setXYZ(8,t.r,t.g,t.b),o.setXYZ(9,t.r,t.g,t.b),o.setXYZ(10,t.r,t.g,t.b),o.setXYZ(11,t.r,t.g,t.b),o.setXYZ(12,t.r,t.g,t.b),o.setXYZ(13,t.r,t.g,t.b),o.setXYZ(14,t.r,t.g,t.b),o.setXYZ(15,t.r,t.g,t.b),o.setXYZ(16,t.r,t.g,t.b),o.setXYZ(17,t.r,t.g,t.b),o.setXYZ(18,t.r,t.g,t.b),o.setXYZ(19,t.r,t.g,t.b),o.setXYZ(20,t.r,t.g,t.b),o.setXYZ(21,t.r,t.g,t.b),o.setXYZ(22,t.r,t.g,t.b),o.setXYZ(23,t.r,t.g,t.b),o.setXYZ(24,e.r,e.g,e.b),o.setXYZ(25,e.r,e.g,e.b),o.setXYZ(26,e.r,e.g,e.b),o.setXYZ(27,e.r,e.g,e.b),o.setXYZ(28,e.r,e.g,e.b),o.setXYZ(29,e.r,e.g,e.b),o.setXYZ(30,e.r,e.g,e.b),o.setXYZ(31,e.r,e.g,e.b),o.setXYZ(32,n.r,n.g,n.b),o.setXYZ(33,n.r,n.g,n.b),o.setXYZ(34,n.r,n.g,n.b),o.setXYZ(35,n.r,n.g,n.b),o.setXYZ(36,n.r,n.g,n.b),o.setXYZ(37,n.r,n.g,n.b),o.setXYZ(38,r.r,r.g,r.b),o.setXYZ(39,r.r,r.g,r.b),o.setXYZ(40,s.r,s.g,s.b),o.setXYZ(41,s.r,s.g,s.b),o.setXYZ(42,s.r,s.g,s.b),o.setXYZ(43,s.r,s.g,s.b),o.setXYZ(44,s.r,s.g,s.b),o.setXYZ(45,s.r,s.g,s.b),o.setXYZ(46,s.r,s.g,s.b),o.setXYZ(47,s.r,s.g,s.b),o.setXYZ(48,s.r,s.g,s.b),o.setXYZ(49,s.r,s.g,s.b),o.needsUpdate=!0}update(){const t=this.geometry,e=this.pointMap,n=1,r=1;_e.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),ye("c",e,t,_e,0,0,-1),ye("t",e,t,_e,0,0,1),ye("n1",e,t,_e,-n,-r,-1),ye("n2",e,t,_e,n,-r,-1),ye("n3",e,t,_e,-n,r,-1),ye("n4",e,t,_e,n,r,-1),ye("f1",e,t,_e,-n,-r,1),ye("f2",e,t,_e,n,-r,1),ye("f3",e,t,_e,-n,r,1),ye("f4",e,t,_e,n,r,1),ye("u1",e,t,_e,n*.7,r*1.1,-1),ye("u2",e,t,_e,-n*.7,r*1.1,-1),ye("u3",e,t,_e,0,r*2,-1),ye("cf1",e,t,_e,-n,0,1),ye("cf2",e,t,_e,n,0,1),ye("cf3",e,t,_e,0,-r,1),ye("cf4",e,t,_e,0,r,1),ye("cn1",e,t,_e,-n,0,-1),ye("cn2",e,t,_e,n,0,-1),ye("cn3",e,t,_e,0,-r,-1),ye("cn4",e,t,_e,0,r,-1),t.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function ye(i,t,e,n,r,s,a){ua.set(r,s,a).unproject(n);const o=t[i];if(o!==void 0){const l=e.getAttribute("position");for(let c=0,u=o.length;c<u;c++)l.setXYZ(o[c],ua.x,ua.y,ua.z)}}class NC extends w_{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new Zn;r.setAttribute("position",new gn(e,3)),r.setAttribute("color",new gn(n,3));const s=new Iu({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(t,e,n){const r=new Wt,s=this.geometry.attributes.color.array;return r.set(t),r.toArray(s,0),r.toArray(s,3),r.set(e),r.toArray(s,6),r.toArray(s,9),r.set(n),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Tu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Tu);/*! Tweakpane 4.0.3 (c) 2016 cocopon, licensed under the MIT license. */function se(i){return i==null}function Uu(i){return i!==null&&typeof i=="object"}function $c(i){return i!==null&&typeof i=="object"}function FC(i,t){if(i.length!==t.length)return!1;for(let e=0;e<i.length;e++)if(i[e]!==t[e])return!1;return!0}function yr(i,t){return Array.from(new Set([...Object.keys(i),...Object.keys(t)])).reduce((n,r)=>{const s=i[r],a=t[r];return $c(s)&&$c(a)?Object.assign(Object.assign({},n),{[r]:yr(s,a)}):Object.assign(Object.assign({},n),{[r]:r in t?a:s})},{})}function Nu(i){return Uu(i)?"target"in i:!1}const BC={alreadydisposed:()=>"View has been already disposed",invalidparams:i=>`Invalid parameters for '${i.name}'`,nomatchingcontroller:i=>`No matching controller for '${i.key}'`,nomatchingview:i=>`No matching view for '${JSON.stringify(i.params)}'`,notbindable:()=>"Value is not bindable",notcompatible:i=>`Not compatible with  plugin '${i.id}'`,propertynotfound:i=>`Property '${i.name}' not found`,shouldneverhappen:()=>"This error should never happen"};class ve{static alreadyDisposed(){return new ve({type:"alreadydisposed"})}static notBindable(){return new ve({type:"notbindable"})}static notCompatible(t,e){return new ve({type:"notcompatible",context:{id:`${t}.${e}`}})}static propertyNotFound(t){return new ve({type:"propertynotfound",context:{name:t}})}static shouldNeverHappen(){return new ve({type:"shouldneverhappen"})}constructor(t){var e;this.message=(e=BC[t.type](t.context))!==null&&e!==void 0?e:"Unexpected error",this.name=this.constructor.name,this.stack=new Error(this.message).stack,this.type=t.type}toString(){return this.message}}class ka{constructor(t,e){this.obj_=t,this.key=e}static isBindable(t){return!(t===null||typeof t!="object"&&typeof t!="function")}read(){return this.obj_[this.key]}write(t){this.obj_[this.key]=t}writeProperty(t,e){const n=this.read();if(!ka.isBindable(n))throw ve.notBindable();if(!(t in n))throw ve.propertyNotFound(t);n[t]=e}}class Se{constructor(){this.observers_={}}on(t,e,n){var r;let s=this.observers_[t];return s||(s=this.observers_[t]=[]),s.push({handler:e,key:(r=n==null?void 0:n.key)!==null&&r!==void 0?r:e}),this}off(t,e){const n=this.observers_[t];return n&&(this.observers_[t]=n.filter(r=>r.key!==e)),this}emit(t,e){const n=this.observers_[t];n&&n.forEach(r=>{r.handler(e)})}}class kC{constructor(t,e){var n;this.constraint_=e==null?void 0:e.constraint,this.equals_=(n=e==null?void 0:e.equals)!==null&&n!==void 0?n:(r,s)=>r===s,this.emitter=new Se,this.rawValue_=t}get constraint(){return this.constraint_}get rawValue(){return this.rawValue_}set rawValue(t){this.setRawValue(t,{forceEmit:!1,last:!0})}setRawValue(t,e){const n=e??{forceEmit:!1,last:!0},r=this.constraint_?this.constraint_.constrain(t):t,s=this.rawValue_;this.equals_(s,r)&&!n.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.rawValue_=r,this.emitter.emit("change",{options:n,previousRawValue:s,rawValue:r,sender:this}))}}class zC{constructor(t){this.emitter=new Se,this.value_=t}get rawValue(){return this.value_}set rawValue(t){this.setRawValue(t,{forceEmit:!1,last:!0})}setRawValue(t,e){const n=e??{forceEmit:!1,last:!0},r=this.value_;r===t&&!n.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.value_=t,this.emitter.emit("change",{options:n,previousRawValue:r,rawValue:this.value_,sender:this}))}}class VC{constructor(t){this.emitter=new Se,this.onValueBeforeChange_=this.onValueBeforeChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.value_=t,this.value_.emitter.on("beforechange",this.onValueBeforeChange_),this.value_.emitter.on("change",this.onValueChange_)}get rawValue(){return this.value_.rawValue}onValueBeforeChange_(t){this.emitter.emit("beforechange",Object.assign(Object.assign({},t),{sender:this}))}onValueChange_(t){this.emitter.emit("change",Object.assign(Object.assign({},t),{sender:this}))}}function ue(i,t){const e=t==null?void 0:t.constraint,n=t==null?void 0:t.equals;return!e&&!n?new zC(i):new kC(i,t)}function HC(i){return[new VC(i),(t,e)=>{i.setRawValue(t,e)}]}class zt{constructor(t){this.emitter=new Se,this.valMap_=t;for(const e in this.valMap_)this.valMap_[e].emitter.on("change",()=>{this.emitter.emit("change",{key:e,sender:this})})}static createCore(t){return Object.keys(t).reduce((n,r)=>Object.assign(n,{[r]:ue(t[r])}),{})}static fromObject(t){const e=this.createCore(t);return new zt(e)}get(t){return this.valMap_[t].rawValue}set(t,e){this.valMap_[t].rawValue=e}value(t){return this.valMap_[t]}}class So{constructor(t){this.values=zt.fromObject({max:t.max,min:t.min})}constrain(t){const e=this.values.get("max"),n=this.values.get("min");return Math.min(Math.max(t,n),e)}}class GC{constructor(t){this.values=zt.fromObject({max:t.max,min:t.min})}constrain(t){const e=this.values.get("max"),n=this.values.get("min");let r=t;return se(n)||(r=Math.max(r,n)),se(e)||(r=Math.min(r,e)),r}}class WC{constructor(t,e=0){this.step=t,this.origin=e}constrain(t){const e=this.origin%this.step,n=Math.round((t-e)/this.step);return e+n*this.step}}class XC{constructor(t){this.text=t}evaluate(){return Number(this.text)}toString(){return this.text}}const $C={"**":(i,t)=>Math.pow(i,t),"*":(i,t)=>i*t,"/":(i,t)=>i/t,"%":(i,t)=>i%t,"+":(i,t)=>i+t,"-":(i,t)=>i-t,"<<":(i,t)=>i<<t,">>":(i,t)=>i>>t,">>>":(i,t)=>i>>>t,"&":(i,t)=>i&t,"^":(i,t)=>i^t,"|":(i,t)=>i|t};class jC{constructor(t,e,n){this.left=e,this.operator=t,this.right=n}evaluate(){const t=$C[this.operator];if(!t)throw new Error(`unexpected binary operator: '${this.operator}`);return t(this.left.evaluate(),this.right.evaluate())}toString(){return["b(",this.left.toString(),this.operator,this.right.toString(),")"].join(" ")}}const qC={"+":i=>i,"-":i=>-i,"~":i=>~i};class YC{constructor(t,e){this.operator=t,this.expression=e}evaluate(){const t=qC[this.operator];if(!t)throw new Error(`unexpected unary operator: '${this.operator}`);return t(this.expression.evaluate())}toString(){return["u(",this.operator,this.expression.toString(),")"].join(" ")}}function Fu(i){return(t,e)=>{for(let n=0;n<i.length;n++){const r=i[n](t,e);if(r!=="")return r}return""}}function fo(i,t){var e;const n=i.substr(t).match(/^\s+/);return(e=n&&n[0])!==null&&e!==void 0?e:""}function KC(i,t){const e=i.substr(t,1);return e.match(/^[1-9]$/)?e:""}function mo(i,t){var e;const n=i.substr(t).match(/^[0-9]+/);return(e=n&&n[0])!==null&&e!==void 0?e:""}function ZC(i,t){const e=mo(i,t);if(e!=="")return e;const n=i.substr(t,1);if(t+=1,n!=="-"&&n!=="+")return"";const r=mo(i,t);return r===""?"":n+r}function Bu(i,t){const e=i.substr(t,1);if(t+=1,e.toLowerCase()!=="e")return"";const n=ZC(i,t);return n===""?"":e+n}function E_(i,t){const e=i.substr(t,1);if(e==="0")return e;const n=KC(i,t);return t+=n.length,n===""?"":n+mo(i,t)}function JC(i,t){const e=E_(i,t);if(t+=e.length,e==="")return"";const n=i.substr(t,1);if(t+=n.length,n!==".")return"";const r=mo(i,t);return t+=r.length,e+n+r+Bu(i,t)}function QC(i,t){const e=i.substr(t,1);if(t+=e.length,e!==".")return"";const n=mo(i,t);return t+=n.length,n===""?"":e+n+Bu(i,t)}function tA(i,t){const e=E_(i,t);return t+=e.length,e===""?"":e+Bu(i,t)}const eA=Fu([JC,QC,tA]);function nA(i,t){var e;const n=i.substr(t).match(/^[01]+/);return(e=n&&n[0])!==null&&e!==void 0?e:""}function iA(i,t){const e=i.substr(t,2);if(t+=e.length,e.toLowerCase()!=="0b")return"";const n=nA(i,t);return n===""?"":e+n}function rA(i,t){var e;const n=i.substr(t).match(/^[0-7]+/);return(e=n&&n[0])!==null&&e!==void 0?e:""}function sA(i,t){const e=i.substr(t,2);if(t+=e.length,e.toLowerCase()!=="0o")return"";const n=rA(i,t);return n===""?"":e+n}function oA(i,t){var e;const n=i.substr(t).match(/^[0-9a-f]+/i);return(e=n&&n[0])!==null&&e!==void 0?e:""}function aA(i,t){const e=i.substr(t,2);if(t+=e.length,e.toLowerCase()!=="0x")return"";const n=oA(i,t);return n===""?"":e+n}const lA=Fu([iA,sA,aA]),cA=Fu([lA,eA]);function uA(i,t){const e=cA(i,t);return t+=e.length,e===""?null:{evaluable:new XC(e),cursor:t}}function hA(i,t){const e=i.substr(t,1);if(t+=e.length,e!=="(")return null;const n=S_(i,t);if(!n)return null;t=n.cursor,t+=fo(i,t).length;const r=i.substr(t,1);return t+=r.length,r!==")"?null:{evaluable:n.evaluable,cursor:t}}function dA(i,t){var e;return(e=uA(i,t))!==null&&e!==void 0?e:hA(i,t)}function M_(i,t){const e=dA(i,t);if(e)return e;const n=i.substr(t,1);if(t+=n.length,n!=="+"&&n!=="-"&&n!=="~")return null;const r=M_(i,t);return r?(t=r.cursor,{cursor:t,evaluable:new YC(n,r.evaluable)}):null}function pA(i,t,e){e+=fo(t,e).length;const n=i.filter(r=>t.startsWith(r,e))[0];return n?(e+=n.length,e+=fo(t,e).length,{cursor:e,operator:n}):null}function fA(i,t){return(e,n)=>{const r=i(e,n);if(!r)return null;n=r.cursor;let s=r.evaluable;for(;;){const a=pA(t,e,n);if(!a)break;n=a.cursor;const o=i(e,n);if(!o)return null;n=o.cursor,s=new jC(a.operator,s,o.evaluable)}return s?{cursor:n,evaluable:s}:null}}const mA=[["**"],["*","/","%"],["+","-"],["<<",">>>",">>"],["&"],["^"],["|"]].reduce((i,t)=>fA(i,t),M_);function S_(i,t){return t+=fo(i,t).length,mA(i,t)}function _A(i){const t=S_(i,0);return!t||t.cursor+fo(i,t.cursor).length!==i.length?null:t.evaluable}function _i(i){var t;const e=_A(i);return(t=e==null?void 0:e.evaluate())!==null&&t!==void 0?t:null}function T_(i){if(typeof i=="number")return i;if(typeof i=="string"){const t=_i(i);if(!se(t))return t}return 0}function vA(i){return String(i)}function un(i){return t=>t.toFixed(Math.max(Math.min(i,20),0))}function Jt(i,t,e,n,r){const s=(i-t)/(e-t);return n+s*(r-n)}function Ep(i){return String(i.toFixed(10)).split(".")[1].replace(/0+$/,"").length}function Ce(i,t,e){return Math.min(Math.max(i,t),e)}function C_(i,t){return(i%t+t)%t}function gA(i,t){return se(i.step)?Math.max(Ep(t),2):Ep(i.step)}function A_(i){var t;return(t=i.step)!==null&&t!==void 0?t:1}function P_(i,t){var e;const n=Math.abs((e=i.step)!==null&&e!==void 0?e:t);return n===0?.1:Math.pow(10,Math.floor(Math.log10(n))-1)}function R_(i,t){return se(i.step)?null:new WC(i.step,t)}function L_(i){return!se(i.max)&&!se(i.min)?new So({max:i.max,min:i.min}):!se(i.max)||!se(i.min)?new GC({max:i.max,min:i.min}):null}function D_(i,t){var e,n,r;return{formatter:(e=i.format)!==null&&e!==void 0?e:un(gA(i,t)),keyScale:(n=i.keyScale)!==null&&n!==void 0?n:A_(i),pointerScale:(r=i.pointerScale)!==null&&r!==void 0?r:P_(i,t)}}function I_(i){return{format:i.optional.function,keyScale:i.optional.number,max:i.optional.number,min:i.optional.number,pointerScale:i.optional.number,step:i.optional.number}}function ku(i){return{constraint:i.constraint,textProps:zt.fromObject(D_(i.params,i.initialValue))}}class Cr{constructor(t){this.controller=t}get element(){return this.controller.view.element}get disabled(){return this.controller.viewProps.get("disabled")}set disabled(t){this.controller.viewProps.set("disabled",t)}get hidden(){return this.controller.viewProps.get("hidden")}set hidden(t){this.controller.viewProps.set("hidden",t)}dispose(){this.controller.viewProps.set("disposed",!0)}importState(t){return this.controller.importState(t)}exportState(){return this.controller.exportState()}}class tl{constructor(t){this.target=t}}class To extends tl{constructor(t,e,n){super(t),this.value=e,this.last=n??!0}}class bA extends tl{constructor(t,e){super(t),this.expanded=e}}class xA extends tl{constructor(t,e){super(t),this.index=e}}class yA extends tl{constructor(t,e){super(t),this.native=e}}class _o extends Cr{constructor(t){super(t),this.onValueChange_=this.onValueChange_.bind(this),this.emitter_=new Se,this.controller.value.emitter.on("change",this.onValueChange_)}get label(){return this.controller.labelController.props.get("label")}set label(t){this.controller.labelController.props.set("label",t)}get key(){return this.controller.value.binding.target.key}get tag(){return this.controller.tag}set tag(t){this.controller.tag=t}on(t,e){const n=e.bind(this);return this.emitter_.on(t,r=>{n(r)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}refresh(){this.controller.value.fetch()}onValueChange_(t){const e=this.controller.value;this.emitter_.emit("change",new To(this,e.binding.target.read(),t.options.last))}}class wA{constructor(t,e){this.onValueBeforeChange_=this.onValueBeforeChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.binding=e,this.value_=t,this.value_.emitter.on("beforechange",this.onValueBeforeChange_),this.value_.emitter.on("change",this.onValueChange_),this.emitter=new Se}get rawValue(){return this.value_.rawValue}set rawValue(t){this.value_.rawValue=t}setRawValue(t,e){this.value_.setRawValue(t,e)}fetch(){this.value_.rawValue=this.binding.read()}push(){this.binding.write(this.value_.rawValue)}onValueBeforeChange_(t){this.emitter.emit("beforechange",Object.assign(Object.assign({},t),{sender:this}))}onValueChange_(t){this.push(),this.emitter.emit("change",Object.assign(Object.assign({},t),{sender:this}))}}function EA(i){if(!("binding"in i))return!1;const t=i.binding;return Nu(t)&&"read"in t&&"write"in t}function MA(i,t){const n=Object.keys(t).reduce((r,s)=>{if(r===void 0)return;const a=t[s],o=a(i[s]);return o.succeeded?Object.assign(Object.assign({},r),{[s]:o.value}):void 0},{});return n}function SA(i,t){return i.reduce((e,n)=>{if(e===void 0)return;const r=t(n);if(!(!r.succeeded||r.value===void 0))return[...e,r.value]},[])}function TA(i){return i===null?!1:typeof i=="object"}function ri(i){return t=>e=>{if(!t&&e===void 0)return{succeeded:!1,value:void 0};if(t&&e===void 0)return{succeeded:!0,value:void 0};const n=i(e);return n!==void 0?{succeeded:!0,value:n}:{succeeded:!1,value:void 0}}}function Mp(i){return{custom:t=>ri(t)(i),boolean:ri(t=>typeof t=="boolean"?t:void 0)(i),number:ri(t=>typeof t=="number"?t:void 0)(i),string:ri(t=>typeof t=="string"?t:void 0)(i),function:ri(t=>typeof t=="function"?t:void 0)(i),constant:t=>ri(e=>e===t?t:void 0)(i),raw:ri(t=>t)(i),object:t=>ri(e=>{if(TA(e))return MA(e,t)})(i),array:t=>ri(e=>{if(Array.isArray(e))return SA(e,t)})(i)}}const jc={optional:Mp(!0),required:Mp(!1)};function fe(i,t){const e=t(jc),n=jc.required.object(e)(i);return n.succeeded?n.value:void 0}function xn(i,t,e,n){if(t&&!t(i))return!1;const r=fe(i,e);return r?n(r):!1}function yn(i,t){var e;return yr((e=i==null?void 0:i())!==null&&e!==void 0?e:{},t)}function _r(i){return"value"in i}function O_(i){if(!Uu(i)||!("binding"in i))return!1;const t=i.binding;return Nu(t)}const Wn="http://www.w3.org/2000/svg";function za(i){i.offsetHeight}function CA(i,t){const e=i.style.transition;i.style.transition="none",t(),i.style.transition=e}function zu(i){return i.ontouchstart!==void 0}function AA(){return globalThis}function PA(){return AA().document}function RA(i){const t=i.ownerDocument.defaultView;return t&&"document"in t?i.getContext("2d",{willReadFrequently:!0}):null}const LA={check:'<path d="M2 8l4 4l8 -8"/>',dropdown:'<path d="M5 7h6l-3 3 z"/>',p2dpad:'<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'};function el(i,t){const e=i.createElementNS(Wn,"svg");return e.innerHTML=LA[t],e}function U_(i,t,e){i.insertBefore(t,i.children[e])}function Vu(i){i.parentElement&&i.parentElement.removeChild(i)}function N_(i){for(;i.children.length>0;)i.removeChild(i.children[0])}function DA(i){for(;i.childNodes.length>0;)i.removeChild(i.childNodes[0])}function F_(i){return i.relatedTarget?i.relatedTarget:"explicitOriginalTarget"in i?i.explicitOriginalTarget:null}function hi(i,t){i.emitter.on("change",e=>{t(e.rawValue)}),t(i.rawValue)}function qn(i,t,e){hi(i.value(t),e)}const IA="tp";function jt(i){return(e,n)=>[IA,"-",i,"v",e?`_${e}`:"",n?`-${n}`:""].join("")}const Xs=jt("lbl");function OA(i,t){const e=i.createDocumentFragment();return t.split(`
`).map(r=>i.createTextNode(r)).forEach((r,s)=>{s>0&&e.appendChild(i.createElement("br")),e.appendChild(r)}),e}class B_{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(Xs()),e.viewProps.bindClassModifiers(this.element);const n=t.createElement("div");n.classList.add(Xs("l")),qn(e.props,"label",s=>{se(s)?this.element.classList.add(Xs(void 0,"nol")):(this.element.classList.remove(Xs(void 0,"nol")),DA(n),n.appendChild(OA(t,s)))}),this.element.appendChild(n),this.labelElement=n;const r=t.createElement("div");r.classList.add(Xs("v")),this.element.appendChild(r),this.valueElement=r}}class k_{constructor(t,e){this.props=e.props,this.valueController=e.valueController,this.viewProps=e.valueController.viewProps,this.view=new B_(t,{props:e.props,viewProps:this.viewProps}),this.view.valueElement.appendChild(this.valueController.view.element)}importProps(t){return xn(t,null,e=>({label:e.optional.string}),e=>(this.props.set("label",e.label),!0))}exportProps(){return yn(null,{label:this.props.get("label")})}}function UA(){return["veryfirst","first","last","verylast"]}const Sp=jt(""),Tp={veryfirst:"vfst",first:"fst",last:"lst",verylast:"vlst"};class nl{constructor(t){this.parent_=null,this.blade=t.blade,this.view=t.view,this.viewProps=t.viewProps;const e=this.view.element;this.blade.value("positions").emitter.on("change",()=>{UA().forEach(n=>{e.classList.remove(Sp(void 0,Tp[n]))}),this.blade.get("positions").forEach(n=>{e.classList.add(Sp(void 0,Tp[n]))})}),this.viewProps.handleDispose(()=>{Vu(e)})}get parent(){return this.parent_}set parent(t){this.parent_=t,this.viewProps.set("parent",this.parent_?this.parent_.viewProps:null)}importState(t){return xn(t,null,e=>({disabled:e.required.boolean,hidden:e.required.boolean}),e=>(this.viewProps.importState(e),!0))}exportState(){return yn(null,Object.assign({},this.viewProps.exportState()))}}class wr extends nl{constructor(t,e){if(e.value!==e.valueController.value)throw ve.shouldNeverHappen();const n=e.valueController.viewProps,r=new k_(t,{blade:e.blade,props:e.props,valueController:e.valueController});super(Object.assign(Object.assign({},e),{view:new B_(t,{props:e.props,viewProps:n}),viewProps:n})),this.labelController=r,this.value=e.value,this.valueController=e.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}importState(t){return xn(t,e=>{var n,r,s;return super.importState(e)&&this.labelController.importProps(e)&&((s=(r=(n=this.valueController).importProps)===null||r===void 0?void 0:r.call(n,t))!==null&&s!==void 0?s:!0)},e=>({value:e.optional.raw}),e=>(e.value&&(this.value.rawValue=e.value),!0))}exportState(){var t,e,n;return yn(()=>super.exportState(),Object.assign(Object.assign({value:this.value.rawValue},this.labelController.exportProps()),(n=(e=(t=this.valueController).exportProps)===null||e===void 0?void 0:e.call(t))!==null&&n!==void 0?n:{}))}}function Cp(i){const t=Object.assign({},i);return delete t.value,t}class z_ extends wr{constructor(t,e){super(t,e),this.tag=e.tag}importState(t){return xn(t,e=>super.importState(Cp(t)),e=>({tag:e.optional.string}),e=>(this.tag=e.tag,!0))}exportState(){return yn(()=>Cp(super.exportState()),{binding:{key:this.value.binding.target.key,value:this.value.binding.target.read()},tag:this.tag})}}function NA(i){return _r(i)&&O_(i.value)}class FA extends z_{importState(t){return xn(t,e=>super.importState(e),e=>({binding:e.required.object({value:e.required.raw})}),e=>(this.value.binding.inject(e.binding.value),this.value.fetch(),!0))}}function BA(i){return _r(i)&&EA(i.value)}function V_(i,t){for(;i.length<t;)i.push(void 0)}function kA(i){const t=[];return V_(t,i),t}function zA(i){const t=i.indexOf(void 0);return t<0?i:i.slice(0,t)}function VA(i,t){const e=[...zA(i),t];return e.length>i.length?e.splice(0,e.length-i.length):V_(e,i.length),e}class HA{constructor(t){this.emitter=new Se,this.onTick_=this.onTick_.bind(this),this.onValueBeforeChange_=this.onValueBeforeChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.binding=t.binding,this.value_=ue(kA(t.bufferSize)),this.value_.emitter.on("beforechange",this.onValueBeforeChange_),this.value_.emitter.on("change",this.onValueChange_),this.ticker=t.ticker,this.ticker.emitter.on("tick",this.onTick_),this.fetch()}get rawValue(){return this.value_.rawValue}set rawValue(t){this.value_.rawValue=t}setRawValue(t,e){this.value_.setRawValue(t,e)}fetch(){this.value_.rawValue=VA(this.value_.rawValue,this.binding.read())}onTick_(){this.fetch()}onValueBeforeChange_(t){this.emitter.emit("beforechange",Object.assign(Object.assign({},t),{sender:this}))}onValueChange_(t){this.emitter.emit("change",Object.assign(Object.assign({},t),{sender:this}))}}function GA(i){if(!("binding"in i))return!1;const t=i.binding;return Nu(t)&&"read"in t&&!("write"in t)}class WA extends z_{exportState(){return yn(()=>super.exportState(),{binding:{readonly:!0}})}}function XA(i){return _r(i)&&GA(i.value)}class $A extends Cr{get label(){return this.controller.labelController.props.get("label")}set label(t){this.controller.labelController.props.set("label",t)}get title(){var t;return(t=this.controller.buttonController.props.get("title"))!==null&&t!==void 0?t:""}set title(t){this.controller.buttonController.props.set("title",t)}on(t,e){const n=e.bind(this);return this.controller.buttonController.emitter.on(t,s=>{n(new yA(this,s.nativeEvent))}),this}off(t,e){return this.controller.buttonController.emitter.off(t,e),this}}function jA(i,t,e){e?i.classList.add(t):i.classList.remove(t)}function Ss(i,t){return e=>{jA(i,t,e)}}function Hu(i,t){hi(i,e=>{t.textContent=e??""})}const tc=jt("btn");class qA{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(tc()),e.viewProps.bindClassModifiers(this.element);const n=t.createElement("button");n.classList.add(tc("b")),e.viewProps.bindDisabled(n),this.element.appendChild(n),this.buttonElement=n;const r=t.createElement("div");r.classList.add(tc("t")),Hu(e.props.value("title"),r),this.buttonElement.appendChild(r)}}class YA{constructor(t,e){this.emitter=new Se,this.onClick_=this.onClick_.bind(this),this.props=e.props,this.viewProps=e.viewProps,this.view=new qA(t,{props:this.props,viewProps:this.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}importProps(t){return xn(t,null,e=>({title:e.optional.string}),e=>(this.props.set("title",e.title),!0))}exportProps(){return yn(null,{title:this.props.get("title")})}onClick_(t){this.emitter.emit("click",{nativeEvent:t,sender:this})}}class Ap extends nl{constructor(t,e){const n=new YA(t,{props:e.buttonProps,viewProps:e.viewProps}),r=new k_(t,{blade:e.blade,props:e.labelProps,valueController:n});super({blade:e.blade,view:r.view,viewProps:e.viewProps}),this.buttonController=n,this.labelController=r}importState(t){return xn(t,e=>super.importState(e)&&this.buttonController.importProps(e)&&this.labelController.importProps(e),()=>({}),()=>!0)}exportState(){return yn(()=>super.exportState(),Object.assign(Object.assign({},this.buttonController.exportProps()),this.labelController.exportProps()))}}class H_{constructor(t){const[e,n]=t.split("-"),r=e.split(".");this.major=parseInt(r[0],10),this.minor=parseInt(r[1],10),this.patch=parseInt(r[2],10),this.prerelease=n??null}toString(){const t=[this.major,this.minor,this.patch].join(".");return this.prerelease!==null?[t,this.prerelease].join("-"):t}}const Ts=new H_("2.0.3");function Ze(i){return Object.assign({core:Ts},i)}const KA=Ze({id:"button",type:"blade",accept(i){const t=fe(i,e=>({title:e.required.string,view:e.required.constant("button"),label:e.optional.string}));return t?{params:t}:null},controller(i){return new Ap(i.document,{blade:i.blade,buttonProps:zt.fromObject({title:i.params.title}),labelProps:zt.fromObject({label:i.params.label}),viewProps:i.viewProps})},api(i){return i.controller instanceof Ap?new $A(i.controller):null}});function ZA(i,t){return i.addBlade(Object.assign(Object.assign({},t),{view:"button"}))}function JA(i,t){return i.addBlade(Object.assign(Object.assign({},t),{view:"folder"}))}function QA(i,t){return i.addBlade(Object.assign(Object.assign({},t),{view:"tab"}))}function t1(i){return Uu(i)?"refresh"in i&&typeof i.refresh=="function":!1}function e1(i,t){if(!ka.isBindable(i))throw ve.notBindable();return new ka(i,t)}class n1{constructor(t,e){this.onRackValueChange_=this.onRackValueChange_.bind(this),this.controller_=t,this.emitter_=new Se,this.pool_=e,this.controller_.rack.emitter.on("valuechange",this.onRackValueChange_)}get children(){return this.controller_.rack.children.map(t=>this.pool_.createApi(t))}addBinding(t,e,n){const r=n??{},s=this.controller_.element.ownerDocument,a=this.pool_.createBinding(s,e1(t,e),r),o=this.pool_.createBindingApi(a);return this.add(o,r.index)}addFolder(t){return JA(this,t)}addButton(t){return ZA(this,t)}addTab(t){return QA(this,t)}add(t,e){const n=t.controller;return this.controller_.rack.add(n,e),t}remove(t){this.controller_.rack.remove(t.controller)}addBlade(t){const e=this.controller_.element.ownerDocument,n=this.pool_.createBlade(e,t),r=this.pool_.createApi(n);return this.add(r,t.index)}on(t,e){const n=e.bind(this);return this.emitter_.on(t,r=>{n(r)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}refresh(){this.children.forEach(t=>{t1(t)&&t.refresh()})}onRackValueChange_(t){const e=t.bladeController,n=this.pool_.createApi(e),r=O_(e.value)?e.value.binding:null;this.emitter_.emit("change",new To(n,r?r.target.read():e.value.rawValue,t.options.last))}}class Gu extends Cr{constructor(t,e){super(t),this.rackApi_=new n1(t.rackController,e)}refresh(){this.rackApi_.refresh()}}class Wu extends nl{constructor(t){super({blade:t.blade,view:t.view,viewProps:t.rackController.viewProps}),this.rackController=t.rackController}importState(t){return xn(t,e=>super.importState(e),e=>({children:e.required.array(e.required.raw)}),e=>this.rackController.rack.children.every((n,r)=>n.importState(e.children[r])))}exportState(){return yn(()=>super.exportState(),{children:this.rackController.rack.children.map(t=>t.exportState())})}}function qc(i){return"rackController"in i}class i1{constructor(t){this.emitter=new Se,this.items_=[],this.cache_=new Set,this.onSubListAdd_=this.onSubListAdd_.bind(this),this.onSubListRemove_=this.onSubListRemove_.bind(this),this.extract_=t}get items(){return this.items_}allItems(){return Array.from(this.cache_)}find(t){for(const e of this.allItems())if(t(e))return e;return null}includes(t){return this.cache_.has(t)}add(t,e){if(this.includes(t))throw ve.shouldNeverHappen();const n=e!==void 0?e:this.items_.length;this.items_.splice(n,0,t),this.cache_.add(t);const r=this.extract_(t);r&&(r.emitter.on("add",this.onSubListAdd_),r.emitter.on("remove",this.onSubListRemove_),r.allItems().forEach(s=>{this.cache_.add(s)})),this.emitter.emit("add",{index:n,item:t,root:this,target:this})}remove(t){const e=this.items_.indexOf(t);if(e<0)return;this.items_.splice(e,1),this.cache_.delete(t);const n=this.extract_(t);n&&(n.allItems().forEach(r=>{this.cache_.delete(r)}),n.emitter.off("add",this.onSubListAdd_),n.emitter.off("remove",this.onSubListRemove_)),this.emitter.emit("remove",{index:e,item:t,root:this,target:this})}onSubListAdd_(t){this.cache_.add(t.item),this.emitter.emit("add",{index:t.index,item:t.item,root:this,target:t.target})}onSubListRemove_(t){this.cache_.delete(t.item),this.emitter.emit("remove",{index:t.index,item:t.item,root:this,target:t.target})}}function r1(i,t){for(let e=0;e<i.length;e++){const n=i[e];if(_r(n)&&n.value===t)return n}return null}function s1(i){return qc(i)?i.rackController.rack.bcSet_:null}class o1{constructor(t){var e,n;this.emitter=new Se,this.onBladePositionsChange_=this.onBladePositionsChange_.bind(this),this.onSetAdd_=this.onSetAdd_.bind(this),this.onSetRemove_=this.onSetRemove_.bind(this),this.onChildDispose_=this.onChildDispose_.bind(this),this.onChildPositionsChange_=this.onChildPositionsChange_.bind(this),this.onChildValueChange_=this.onChildValueChange_.bind(this),this.onChildViewPropsChange_=this.onChildViewPropsChange_.bind(this),this.onRackLayout_=this.onRackLayout_.bind(this),this.onRackValueChange_=this.onRackValueChange_.bind(this),this.blade_=(e=t.blade)!==null&&e!==void 0?e:null,(n=this.blade_)===null||n===void 0||n.value("positions").emitter.on("change",this.onBladePositionsChange_),this.viewProps=t.viewProps,this.bcSet_=new i1(s1),this.bcSet_.emitter.on("add",this.onSetAdd_),this.bcSet_.emitter.on("remove",this.onSetRemove_)}get children(){return this.bcSet_.items}add(t,e){var n;(n=t.parent)===null||n===void 0||n.remove(t),t.parent=this,this.bcSet_.add(t,e)}remove(t){t.parent=null,this.bcSet_.remove(t)}find(t){return this.bcSet_.allItems().filter(t)}onSetAdd_(t){this.updatePositions_();const e=t.target===t.root;if(this.emitter.emit("add",{bladeController:t.item,index:t.index,root:e,sender:this}),!e)return;const n=t.item;if(n.viewProps.emitter.on("change",this.onChildViewPropsChange_),n.blade.value("positions").emitter.on("change",this.onChildPositionsChange_),n.viewProps.handleDispose(this.onChildDispose_),_r(n))n.value.emitter.on("change",this.onChildValueChange_);else if(qc(n)){const r=n.rackController.rack;if(r){const s=r.emitter;s.on("layout",this.onRackLayout_),s.on("valuechange",this.onRackValueChange_)}}}onSetRemove_(t){this.updatePositions_();const e=t.target===t.root;if(this.emitter.emit("remove",{bladeController:t.item,root:e,sender:this}),!e)return;const n=t.item;if(_r(n))n.value.emitter.off("change",this.onChildValueChange_);else if(qc(n)){const r=n.rackController.rack;if(r){const s=r.emitter;s.off("layout",this.onRackLayout_),s.off("valuechange",this.onRackValueChange_)}}}updatePositions_(){const t=this.bcSet_.items.filter(r=>!r.viewProps.get("hidden")),e=t[0],n=t[t.length-1];this.bcSet_.items.forEach(r=>{const s=[];r===e&&(s.push("first"),(!this.blade_||this.blade_.get("positions").includes("veryfirst"))&&s.push("veryfirst")),r===n&&(s.push("last"),(!this.blade_||this.blade_.get("positions").includes("verylast"))&&s.push("verylast")),r.blade.set("positions",s)})}onChildPositionsChange_(){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildViewPropsChange_(t){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildDispose_(){this.bcSet_.items.filter(e=>e.viewProps.get("disposed")).forEach(e=>{this.bcSet_.remove(e)})}onChildValueChange_(t){const e=r1(this.find(_r),t.sender);if(!e)throw ve.alreadyDisposed();this.emitter.emit("valuechange",{bladeController:e,options:t.options,sender:this})}onRackLayout_(t){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onRackValueChange_(t){this.emitter.emit("valuechange",{bladeController:t.bladeController,options:t.options,sender:this})}onBladePositionsChange_(){this.updatePositions_()}}class Xu{constructor(t){this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this),this.element=t.element,this.viewProps=t.viewProps;const e=new o1({blade:t.root?void 0:t.blade,viewProps:t.viewProps});e.emitter.on("add",this.onRackAdd_),e.emitter.on("remove",this.onRackRemove_),this.rack=e,this.viewProps.handleDispose(()=>{for(let n=this.rack.children.length-1;n>=0;n--)this.rack.children[n].viewProps.set("disposed",!0)})}onRackAdd_(t){t.root&&U_(this.element,t.bladeController.view.element,t.index)}onRackRemove_(t){t.root&&Vu(t.bladeController.view.element)}}function Cs(){return new zt({positions:ue([],{equals:FC})})}class Co extends zt{constructor(t){super(t)}static create(t){const e={completed:!0,expanded:t,expandedHeight:null,shouldFixHeight:!1,temporaryExpanded:null},n=zt.createCore(e);return new Co(n)}get styleExpanded(){var t;return(t=this.get("temporaryExpanded"))!==null&&t!==void 0?t:this.get("expanded")}get styleHeight(){if(!this.styleExpanded)return"0";const t=this.get("expandedHeight");return this.get("shouldFixHeight")&&!se(t)?`${t}px`:"auto"}bindExpandedClass(t,e){const n=()=>{this.styleExpanded?t.classList.add(e):t.classList.remove(e)};qn(this,"expanded",n),qn(this,"temporaryExpanded",n)}cleanUpTransition(){this.set("shouldFixHeight",!1),this.set("expandedHeight",null),this.set("completed",!0)}}function a1(i,t){let e=0;return CA(t,()=>{i.set("expandedHeight",null),i.set("temporaryExpanded",!0),za(t),e=t.clientHeight,i.set("temporaryExpanded",null),za(t)}),e}function Pp(i,t){t.style.height=i.styleHeight}function $u(i,t){i.value("expanded").emitter.on("beforechange",()=>{if(i.set("completed",!1),se(i.get("expandedHeight"))){const e=a1(i,t);e>0&&i.set("expandedHeight",e)}i.set("shouldFixHeight",!0),za(t)}),i.emitter.on("change",()=>{Pp(i,t)}),Pp(i,t),t.addEventListener("transitionend",e=>{e.propertyName==="height"&&i.cleanUpTransition()})}class G_ extends Gu{constructor(t,e){super(t,e),this.emitter_=new Se,this.controller.foldable.value("expanded").emitter.on("change",n=>{this.emitter_.emit("fold",new bA(this,n.sender.rawValue))}),this.rackApi_.on("change",n=>{this.emitter_.emit("change",n)})}get expanded(){return this.controller.foldable.get("expanded")}set expanded(t){this.controller.foldable.set("expanded",t)}get title(){return this.controller.props.get("title")}set title(t){this.controller.props.set("title",t)}get children(){return this.rackApi_.children}addBinding(t,e,n){return this.rackApi_.addBinding(t,e,n)}addFolder(t){return this.rackApi_.addFolder(t)}addButton(t){return this.rackApi_.addButton(t)}addTab(t){return this.rackApi_.addTab(t)}add(t,e){return this.rackApi_.add(t,e)}remove(t){this.rackApi_.remove(t)}addBlade(t){return this.rackApi_.addBlade(t)}on(t,e){const n=e.bind(this);return this.emitter_.on(t,r=>{n(r)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}}const W_=jt("cnt");class l1{constructor(t,e){var n;this.className_=jt((n=e.viewName)!==null&&n!==void 0?n:"fld"),this.element=t.createElement("div"),this.element.classList.add(this.className_(),W_()),e.viewProps.bindClassModifiers(this.element),this.foldable_=e.foldable,this.foldable_.bindExpandedClass(this.element,this.className_(void 0,"expanded")),qn(this.foldable_,"completed",Ss(this.element,this.className_(void 0,"cpl")));const r=t.createElement("button");r.classList.add(this.className_("b")),qn(e.props,"title",c=>{se(c)?this.element.classList.add(this.className_(void 0,"not")):this.element.classList.remove(this.className_(void 0,"not"))}),e.viewProps.bindDisabled(r),this.element.appendChild(r),this.buttonElement=r;const s=t.createElement("div");s.classList.add(this.className_("i")),this.element.appendChild(s);const a=t.createElement("div");a.classList.add(this.className_("t")),Hu(e.props.value("title"),a),this.buttonElement.appendChild(a),this.titleElement=a;const o=t.createElement("div");o.classList.add(this.className_("m")),this.buttonElement.appendChild(o);const l=t.createElement("div");l.classList.add(this.className_("c")),this.element.appendChild(l),this.containerElement=l}}class Yc extends Wu{constructor(t,e){var n;const r=Co.create((n=e.expanded)!==null&&n!==void 0?n:!0),s=new l1(t,{foldable:r,props:e.props,viewName:e.root?"rot":void 0,viewProps:e.viewProps});super(Object.assign(Object.assign({},e),{rackController:new Xu({blade:e.blade,element:s.containerElement,root:e.root,viewProps:e.viewProps}),view:s})),this.onTitleClick_=this.onTitleClick_.bind(this),this.props=e.props,this.foldable=r,$u(this.foldable,this.view.containerElement),this.rackController.rack.emitter.on("add",()=>{this.foldable.cleanUpTransition()}),this.rackController.rack.emitter.on("remove",()=>{this.foldable.cleanUpTransition()}),this.view.buttonElement.addEventListener("click",this.onTitleClick_)}get document(){return this.view.element.ownerDocument}importState(t){return xn(t,e=>super.importState(e),e=>({expanded:e.required.boolean,title:e.optional.string}),e=>(this.foldable.set("expanded",e.expanded),this.props.set("title",e.title),!0))}exportState(){return yn(()=>super.exportState(),{expanded:this.foldable.get("expanded"),title:this.props.get("title")})}onTitleClick_(){this.foldable.set("expanded",!this.foldable.get("expanded"))}}const c1=Ze({id:"folder",type:"blade",accept(i){const t=fe(i,e=>({title:e.required.string,view:e.required.constant("folder"),expanded:e.optional.boolean}));return t?{params:t}:null},controller(i){return new Yc(i.document,{blade:i.blade,expanded:i.params.expanded,props:zt.fromObject({title:i.params.title}),viewProps:i.viewProps})},api(i){return i.controller instanceof Yc?new G_(i.controller,i.pool):null}}),u1=jt("");function Rp(i,t){return Ss(i,u1(void 0,t))}class bi extends zt{constructor(t){var e;super(t),this.onDisabledChange_=this.onDisabledChange_.bind(this),this.onParentChange_=this.onParentChange_.bind(this),this.onParentGlobalDisabledChange_=this.onParentGlobalDisabledChange_.bind(this),[this.globalDisabled_,this.setGlobalDisabled_]=HC(ue(this.getGlobalDisabled_())),this.value("disabled").emitter.on("change",this.onDisabledChange_),this.value("parent").emitter.on("change",this.onParentChange_),(e=this.get("parent"))===null||e===void 0||e.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_)}static create(t){var e,n,r;const s=t??{};return new bi(zt.createCore({disabled:(e=s.disabled)!==null&&e!==void 0?e:!1,disposed:!1,hidden:(n=s.hidden)!==null&&n!==void 0?n:!1,parent:(r=s.parent)!==null&&r!==void 0?r:null}))}get globalDisabled(){return this.globalDisabled_}bindClassModifiers(t){hi(this.globalDisabled_,Rp(t,"disabled")),qn(this,"hidden",Rp(t,"hidden"))}bindDisabled(t){hi(this.globalDisabled_,e=>{t.disabled=e})}bindTabIndex(t){hi(this.globalDisabled_,e=>{t.tabIndex=e?-1:0})}handleDispose(t){this.value("disposed").emitter.on("change",e=>{e&&t()})}importState(t){this.set("disabled",t.disabled),this.set("hidden",t.hidden)}exportState(){return{disabled:this.get("disabled"),hidden:this.get("hidden")}}getGlobalDisabled_(){const t=this.get("parent");return(t?t.globalDisabled.rawValue:!1)||this.get("disabled")}updateGlobalDisabled_(){this.setGlobalDisabled_(this.getGlobalDisabled_())}onDisabledChange_(){this.updateGlobalDisabled_()}onParentGlobalDisabledChange_(){this.updateGlobalDisabled_()}onParentChange_(t){var e;const n=t.previousRawValue;n==null||n.globalDisabled.emitter.off("change",this.onParentGlobalDisabledChange_),(e=this.get("parent"))===null||e===void 0||e.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_),this.updateGlobalDisabled_()}}const Lp=jt("tbp");class h1{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(Lp()),e.viewProps.bindClassModifiers(this.element);const n=t.createElement("div");n.classList.add(Lp("c")),this.element.appendChild(n),this.containerElement=n}}const $s=jt("tbi");class d1{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add($s()),e.viewProps.bindClassModifiers(this.element),qn(e.props,"selected",s=>{s?this.element.classList.add($s(void 0,"sel")):this.element.classList.remove($s(void 0,"sel"))});const n=t.createElement("button");n.classList.add($s("b")),e.viewProps.bindDisabled(n),this.element.appendChild(n),this.buttonElement=n;const r=t.createElement("div");r.classList.add($s("t")),Hu(e.props.value("title"),r),this.buttonElement.appendChild(r),this.titleElement=r}}class p1{constructor(t,e){this.emitter=new Se,this.onClick_=this.onClick_.bind(this),this.props=e.props,this.viewProps=e.viewProps,this.view=new d1(t,{props:e.props,viewProps:e.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class Kc extends Wu{constructor(t,e){const n=new h1(t,{viewProps:e.viewProps});super(Object.assign(Object.assign({},e),{rackController:new Xu({blade:e.blade,element:n.containerElement,viewProps:e.viewProps}),view:n})),this.onItemClick_=this.onItemClick_.bind(this),this.ic_=new p1(t,{props:e.itemProps,viewProps:bi.create()}),this.ic_.emitter.on("click",this.onItemClick_),this.props=e.props,qn(this.props,"selected",r=>{this.itemController.props.set("selected",r),this.viewProps.set("hidden",!r)})}get itemController(){return this.ic_}importState(t){return xn(t,e=>super.importState(e),e=>({selected:e.required.boolean,title:e.required.string}),e=>(this.ic_.props.set("selected",e.selected),this.ic_.props.set("title",e.title),!0))}exportState(){return yn(()=>super.exportState(),{selected:this.ic_.props.get("selected"),title:this.ic_.props.get("title")})}onItemClick_(){this.props.set("selected",!0)}}class f1 extends Gu{constructor(t,e){super(t,e),this.emitter_=new Se,this.onSelect_=this.onSelect_.bind(this),this.pool_=e,this.rackApi_.on("change",n=>{this.emitter_.emit("change",n)}),this.controller.tab.selectedIndex.emitter.on("change",this.onSelect_)}get pages(){return this.rackApi_.children}addPage(t){const e=this.controller.view.element.ownerDocument,n=new Kc(e,{blade:Cs(),itemProps:zt.fromObject({selected:!1,title:t.title}),props:zt.fromObject({selected:!1}),viewProps:bi.create()}),r=this.pool_.createApi(n);return this.rackApi_.add(r,t.index)}removePage(t){this.rackApi_.remove(this.rackApi_.children[t])}on(t,e){const n=e.bind(this);return this.emitter_.on(t,r=>{n(r)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}onSelect_(t){this.emitter_.emit("select",new xA(this,t.rawValue))}}class m1 extends Gu{get title(){var t;return(t=this.controller.itemController.props.get("title"))!==null&&t!==void 0?t:""}set title(t){this.controller.itemController.props.set("title",t)}get selected(){return this.controller.props.get("selected")}set selected(t){this.controller.props.set("selected",t)}get children(){return this.rackApi_.children}addButton(t){return this.rackApi_.addButton(t)}addFolder(t){return this.rackApi_.addFolder(t)}addTab(t){return this.rackApi_.addTab(t)}add(t,e){this.rackApi_.add(t,e)}remove(t){this.rackApi_.remove(t)}addBinding(t,e,n){return this.rackApi_.addBinding(t,e,n)}addBlade(t){return this.rackApi_.addBlade(t)}}const Dp=-1;class _1{constructor(){this.onItemSelectedChange_=this.onItemSelectedChange_.bind(this),this.empty=ue(!0),this.selectedIndex=ue(Dp),this.items_=[]}add(t,e){const n=e??this.items_.length;this.items_.splice(n,0,t),t.emitter.on("change",this.onItemSelectedChange_),this.keepSelection_()}remove(t){const e=this.items_.indexOf(t);e<0||(this.items_.splice(e,1),t.emitter.off("change",this.onItemSelectedChange_),this.keepSelection_())}keepSelection_(){if(this.items_.length===0){this.selectedIndex.rawValue=Dp,this.empty.rawValue=!0;return}const t=this.items_.findIndex(e=>e.rawValue);t<0?(this.items_.forEach((e,n)=>{e.rawValue=n===0}),this.selectedIndex.rawValue=0):(this.items_.forEach((e,n)=>{e.rawValue=n===t}),this.selectedIndex.rawValue=t),this.empty.rawValue=!1}onItemSelectedChange_(t){if(t.rawValue){const e=this.items_.findIndex(n=>n===t.sender);this.items_.forEach((n,r)=>{n.rawValue=r===e}),this.selectedIndex.rawValue=e}else this.keepSelection_()}}const js=jt("tab");class v1{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(js(),W_()),e.viewProps.bindClassModifiers(this.element),hi(e.empty,Ss(this.element,js(void 0,"nop")));const n=t.createElement("div");n.classList.add(js("t")),this.element.appendChild(n),this.itemsElement=n;const r=t.createElement("div");r.classList.add(js("i")),this.element.appendChild(r);const s=t.createElement("div");s.classList.add(js("c")),this.element.appendChild(s),this.contentsElement=s}}class Ip extends Wu{constructor(t,e){const n=new _1,r=new v1(t,{empty:n.empty,viewProps:e.viewProps});super({blade:e.blade,rackController:new Xu({blade:e.blade,element:r.contentsElement,viewProps:e.viewProps}),view:r}),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this);const s=this.rackController.rack;s.emitter.on("add",this.onRackAdd_),s.emitter.on("remove",this.onRackRemove_),this.tab=n}add(t,e){this.rackController.rack.add(t,e)}remove(t){this.rackController.rack.remove(this.rackController.rack.children[t])}onRackAdd_(t){if(!t.root)return;const e=t.bladeController;U_(this.view.itemsElement,e.itemController.view.element,t.index),e.itemController.viewProps.set("parent",this.viewProps),this.tab.add(e.props.value("selected"))}onRackRemove_(t){if(!t.root)return;const e=t.bladeController;Vu(e.itemController.view.element),e.itemController.viewProps.set("parent",null),this.tab.remove(e.props.value("selected"))}}const X_=Ze({id:"tab",type:"blade",accept(i){const t=fe(i,e=>({pages:e.required.array(e.required.object({title:e.required.string})),view:e.required.constant("tab")}));return!t||t.pages.length===0?null:{params:t}},controller(i){const t=new Ip(i.document,{blade:i.blade,viewProps:i.viewProps});return i.params.pages.forEach(e=>{const n=new Kc(i.document,{blade:Cs(),itemProps:zt.fromObject({selected:!1,title:e.title}),props:zt.fromObject({selected:!1}),viewProps:bi.create()});t.add(n)}),t},api(i){return i.controller instanceof Ip?new f1(i.controller,i.pool):i.controller instanceof Kc?new m1(i.controller,i.pool):null}});function g1(i,t){const e=i.accept(t.params);if(!e)return null;const n=fe(t.params,r=>({disabled:r.optional.boolean,hidden:r.optional.boolean}));return i.controller({blade:Cs(),document:t.document,params:Object.assign(Object.assign({},e.params),{disabled:n==null?void 0:n.disabled,hidden:n==null?void 0:n.hidden}),viewProps:bi.create({disabled:n==null?void 0:n.disabled,hidden:n==null?void 0:n.hidden})})}class ju extends _o{get options(){return this.controller.valueController.props.get("options")}set options(t){this.controller.valueController.props.set("options",t)}}class b1{constructor(){this.disabled=!1,this.emitter=new Se}dispose(){}tick(){this.disabled||this.emitter.emit("tick",{sender:this})}}class x1{constructor(t,e){this.disabled_=!1,this.timerId_=null,this.onTick_=this.onTick_.bind(this),this.doc_=t,this.emitter=new Se,this.interval_=e,this.setTimer_()}get disabled(){return this.disabled_}set disabled(t){this.disabled_=t,this.disabled_?this.clearTimer_():this.setTimer_()}dispose(){this.clearTimer_()}clearTimer_(){if(this.timerId_===null)return;const t=this.doc_.defaultView;t&&t.clearInterval(this.timerId_),this.timerId_=null}setTimer_(){if(this.clearTimer_(),this.interval_<=0)return;const t=this.doc_.defaultView;t&&(this.timerId_=t.setInterval(this.onTick_,this.interval_))}onTick_(){this.disabled_||this.emitter.emit("tick",{sender:this})}}class Ao{constructor(t){this.constraints=t}constrain(t){return this.constraints.reduce((e,n)=>n.constrain(e),t)}}function Va(i,t){if(i instanceof t)return i;if(i instanceof Ao){const e=i.constraints.reduce((n,r)=>n||(r instanceof t?r:null),null);if(e)return e}return null}class Po{constructor(t){this.values=zt.fromObject({options:t})}constrain(t){const e=this.values.get("options");return e.length===0||e.filter(r=>r.value===t).length>0?t:e[0].value}}function Ro(i){var t;const e=jc;if(Array.isArray(i))return(t=fe({items:i},n=>({items:n.required.array(n.required.object({text:n.required.string,value:n.required.raw}))})))===null||t===void 0?void 0:t.items;if(typeof i=="object")return e.required.raw(i).value}function qu(i){if(Array.isArray(i))return i;const t=[];return Object.keys(i).forEach(e=>{t.push({text:e,value:i[e]})}),t}function Yu(i){return se(i)?null:new Po(qu(i))}const ec=jt("lst");class y1{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),this.props_=e.props,this.element=t.createElement("div"),this.element.classList.add(ec()),e.viewProps.bindClassModifiers(this.element);const n=t.createElement("select");n.classList.add(ec("s")),e.viewProps.bindDisabled(n),this.element.appendChild(n),this.selectElement=n;const r=t.createElement("div");r.classList.add(ec("m")),r.appendChild(el(t,"dropdown")),this.element.appendChild(r),e.value.emitter.on("change",this.onValueChange_),this.value_=e.value,qn(this.props_,"options",s=>{N_(this.selectElement),s.forEach(a=>{const o=t.createElement("option");o.textContent=a.text,this.selectElement.appendChild(o)}),this.update_()})}update_(){const t=this.props_.get("options").map(e=>e.value);this.selectElement.selectedIndex=t.indexOf(this.value_.rawValue)}onValueChange_(){this.update_()}}class Wi{constructor(t,e){this.onSelectChange_=this.onSelectChange_.bind(this),this.props=e.props,this.value=e.value,this.viewProps=e.viewProps,this.view=new y1(t,{props:this.props,value:this.value,viewProps:this.viewProps}),this.view.selectElement.addEventListener("change",this.onSelectChange_)}onSelectChange_(t){const e=t.currentTarget;this.value.rawValue=this.props.get("options")[e.selectedIndex].value}importProps(t){return xn(t,null,e=>({options:e.required.custom(Ro)}),e=>(this.props.set("options",qu(e.options)),!0))}exportProps(){return yn(null,{options:this.props.get("options")})}}const Op=jt("pop");class w1{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(Op()),e.viewProps.bindClassModifiers(this.element),hi(e.shows,Ss(this.element,Op(void 0,"v")))}}class $_{constructor(t,e){this.shows=ue(!1),this.viewProps=e.viewProps,this.view=new w1(t,{shows:this.shows,viewProps:this.viewProps})}}const Up=jt("txt");class E1{constructor(t,e){this.onChange_=this.onChange_.bind(this),this.element=t.createElement("div"),this.element.classList.add(Up()),e.viewProps.bindClassModifiers(this.element),this.props_=e.props,this.props_.emitter.on("change",this.onChange_);const n=t.createElement("input");n.classList.add(Up("i")),n.type="text",e.viewProps.bindDisabled(n),this.element.appendChild(n),this.inputElement=n,e.value.emitter.on("change",this.onChange_),this.value_=e.value,this.refresh()}refresh(){const t=this.props_.get("formatter");this.inputElement.value=t(this.value_.rawValue)}onChange_(){this.refresh()}}class vo{constructor(t,e){this.onInputChange_=this.onInputChange_.bind(this),this.parser_=e.parser,this.props=e.props,this.value=e.value,this.viewProps=e.viewProps,this.view=new E1(t,{props:e.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(t){const n=t.currentTarget.value,r=this.parser_(n);se(r)||(this.value.rawValue=r),this.view.refresh()}}function M1(i){return String(i)}function j_(i){return i==="false"?!1:!!i}function Np(i){return M1(i)}function S1(i){return t=>i.reduce((e,n)=>e!==null?e:n(t),null)}const T1=un(0);function Ha(i){return T1(i)+"%"}function q_(i){return String(i)}function Zc(i){return i}function As({primary:i,secondary:t,forward:e,backward:n}){let r=!1;function s(a){r||(r=!0,a(),r=!1)}i.emitter.on("change",a=>{s(()=>{t.setRawValue(e(i.rawValue,t.rawValue),a.options)})}),t.emitter.on("change",a=>{s(()=>{i.setRawValue(n(i.rawValue,t.rawValue),a.options)}),s(()=>{t.setRawValue(e(i.rawValue,t.rawValue),a.options)})}),s(()=>{t.setRawValue(e(i.rawValue,t.rawValue),{forceEmit:!1,last:!0})})}function en(i,t){const e=i*(t.altKey?.1:1)*(t.shiftKey?10:1);return t.upKey?+e:t.downKey?-e:0}function go(i){return{altKey:i.altKey,downKey:i.key==="ArrowDown",shiftKey:i.shiftKey,upKey:i.key==="ArrowUp"}}function vi(i){return{altKey:i.altKey,downKey:i.key==="ArrowLeft",shiftKey:i.shiftKey,upKey:i.key==="ArrowRight"}}function C1(i){return i==="ArrowUp"||i==="ArrowDown"}function Y_(i){return C1(i)||i==="ArrowLeft"||i==="ArrowRight"}function nc(i,t){var e,n;const r=t.ownerDocument.defaultView,s=t.getBoundingClientRect();return{x:i.pageX-(((e=r&&r.scrollX)!==null&&e!==void 0?e:0)+s.left),y:i.pageY-(((n=r&&r.scrollY)!==null&&n!==void 0?n:0)+s.top)}}class Ar{constructor(t){this.lastTouch_=null,this.onDocumentMouseMove_=this.onDocumentMouseMove_.bind(this),this.onDocumentMouseUp_=this.onDocumentMouseUp_.bind(this),this.onMouseDown_=this.onMouseDown_.bind(this),this.onTouchEnd_=this.onTouchEnd_.bind(this),this.onTouchMove_=this.onTouchMove_.bind(this),this.onTouchStart_=this.onTouchStart_.bind(this),this.elem_=t,this.emitter=new Se,t.addEventListener("touchstart",this.onTouchStart_,{passive:!1}),t.addEventListener("touchmove",this.onTouchMove_,{passive:!0}),t.addEventListener("touchend",this.onTouchEnd_),t.addEventListener("mousedown",this.onMouseDown_)}computePosition_(t){const e=this.elem_.getBoundingClientRect();return{bounds:{width:e.width,height:e.height},point:t?{x:t.x,y:t.y}:null}}onMouseDown_(t){var e;t.preventDefault(),(e=t.currentTarget)===null||e===void 0||e.focus();const n=this.elem_.ownerDocument;n.addEventListener("mousemove",this.onDocumentMouseMove_),n.addEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("down",{altKey:t.altKey,data:this.computePosition_(nc(t,this.elem_)),sender:this,shiftKey:t.shiftKey})}onDocumentMouseMove_(t){this.emitter.emit("move",{altKey:t.altKey,data:this.computePosition_(nc(t,this.elem_)),sender:this,shiftKey:t.shiftKey})}onDocumentMouseUp_(t){const e=this.elem_.ownerDocument;e.removeEventListener("mousemove",this.onDocumentMouseMove_),e.removeEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("up",{altKey:t.altKey,data:this.computePosition_(nc(t,this.elem_)),sender:this,shiftKey:t.shiftKey})}onTouchStart_(t){t.preventDefault();const e=t.targetTouches.item(0),n=this.elem_.getBoundingClientRect();this.emitter.emit("down",{altKey:t.altKey,data:this.computePosition_(e?{x:e.clientX-n.left,y:e.clientY-n.top}:void 0),sender:this,shiftKey:t.shiftKey}),this.lastTouch_=e}onTouchMove_(t){const e=t.targetTouches.item(0),n=this.elem_.getBoundingClientRect();this.emitter.emit("move",{altKey:t.altKey,data:this.computePosition_(e?{x:e.clientX-n.left,y:e.clientY-n.top}:void 0),sender:this,shiftKey:t.shiftKey}),this.lastTouch_=e}onTouchEnd_(t){var e;const n=(e=t.targetTouches.item(0))!==null&&e!==void 0?e:this.lastTouch_,r=this.elem_.getBoundingClientRect();this.emitter.emit("up",{altKey:t.altKey,data:this.computePosition_(n?{x:n.clientX-r.left,y:n.clientY-r.top}:void 0),sender:this,shiftKey:t.shiftKey})}}const Mn=jt("txt");class A1{constructor(t,e){this.onChange_=this.onChange_.bind(this),this.props_=e.props,this.props_.emitter.on("change",this.onChange_),this.element=t.createElement("div"),this.element.classList.add(Mn(),Mn(void 0,"num")),e.arrayPosition&&this.element.classList.add(Mn(void 0,e.arrayPosition)),e.viewProps.bindClassModifiers(this.element);const n=t.createElement("input");n.classList.add(Mn("i")),n.type="text",e.viewProps.bindDisabled(n),this.element.appendChild(n),this.inputElement=n,this.onDraggingChange_=this.onDraggingChange_.bind(this),this.dragging_=e.dragging,this.dragging_.emitter.on("change",this.onDraggingChange_),this.element.classList.add(Mn()),this.inputElement.classList.add(Mn("i"));const r=t.createElement("div");r.classList.add(Mn("k")),this.element.appendChild(r),this.knobElement=r;const s=t.createElementNS(Wn,"svg");s.classList.add(Mn("g")),this.knobElement.appendChild(s);const a=t.createElementNS(Wn,"path");a.classList.add(Mn("gb")),s.appendChild(a),this.guideBodyElem_=a;const o=t.createElementNS(Wn,"path");o.classList.add(Mn("gh")),s.appendChild(o),this.guideHeadElem_=o;const l=t.createElement("div");l.classList.add(jt("tt")()),this.knobElement.appendChild(l),this.tooltipElem_=l,e.value.emitter.on("change",this.onChange_),this.value=e.value,this.refresh()}onDraggingChange_(t){if(t.rawValue===null){this.element.classList.remove(Mn(void 0,"drg"));return}this.element.classList.add(Mn(void 0,"drg"));const e=t.rawValue/this.props_.get("pointerScale"),n=e+(e>0?-1:e<0?1:0),r=Ce(-n,-4,4);this.guideHeadElem_.setAttributeNS(null,"d",[`M ${n+r},0 L${n},4 L${n+r},8`,`M ${e},-1 L${e},9`].join(" ")),this.guideBodyElem_.setAttributeNS(null,"d",`M 0,4 L${e},4`);const s=this.props_.get("formatter");this.tooltipElem_.textContent=s(this.value.rawValue),this.tooltipElem_.style.left=`${e}px`}refresh(){const t=this.props_.get("formatter");this.inputElement.value=t(this.value.rawValue)}onChange_(){this.refresh()}}class Lo{constructor(t,e){var n;this.originRawValue_=0,this.onInputChange_=this.onInputChange_.bind(this),this.onInputKeyDown_=this.onInputKeyDown_.bind(this),this.onInputKeyUp_=this.onInputKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.parser_=e.parser,this.props=e.props,this.sliderProps_=(n=e.sliderProps)!==null&&n!==void 0?n:null,this.value=e.value,this.viewProps=e.viewProps,this.dragging_=ue(null),this.view=new A1(t,{arrayPosition:e.arrayPosition,dragging:this.dragging_,props:this.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.inputElement.addEventListener("keydown",this.onInputKeyDown_),this.view.inputElement.addEventListener("keyup",this.onInputKeyUp_);const r=new Ar(this.view.knobElement);r.emitter.on("down",this.onPointerDown_),r.emitter.on("move",this.onPointerMove_),r.emitter.on("up",this.onPointerUp_)}constrainValue_(t){var e,n;const r=(e=this.sliderProps_)===null||e===void 0?void 0:e.get("min"),s=(n=this.sliderProps_)===null||n===void 0?void 0:n.get("max");let a=t;return r!==void 0&&(a=Math.max(a,r)),s!==void 0&&(a=Math.min(a,s)),a}onInputChange_(t){const n=t.currentTarget.value,r=this.parser_(n);se(r)||(this.value.rawValue=this.constrainValue_(r)),this.view.refresh()}onInputKeyDown_(t){const e=en(this.props.get("keyScale"),go(t));e!==0&&this.value.setRawValue(this.constrainValue_(this.value.rawValue+e),{forceEmit:!1,last:!1})}onInputKeyUp_(t){en(this.props.get("keyScale"),go(t))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}onPointerDown_(){this.originRawValue_=this.value.rawValue,this.dragging_.rawValue=0}computeDraggingValue_(t){if(!t.point)return null;const e=t.point.x-t.bounds.width/2;return this.constrainValue_(this.originRawValue_+e*this.props.get("pointerScale"))}onPointerMove_(t){const e=this.computeDraggingValue_(t.data);e!==null&&(this.value.setRawValue(e,{forceEmit:!1,last:!1}),this.dragging_.rawValue=this.value.rawValue-this.originRawValue_)}onPointerUp_(t){const e=this.computeDraggingValue_(t.data);e!==null&&(this.value.setRawValue(e,{forceEmit:!0,last:!0}),this.dragging_.rawValue=null)}}const ic=jt("sld");class P1{constructor(t,e){this.onChange_=this.onChange_.bind(this),this.props_=e.props,this.props_.emitter.on("change",this.onChange_),this.element=t.createElement("div"),this.element.classList.add(ic()),e.viewProps.bindClassModifiers(this.element);const n=t.createElement("div");n.classList.add(ic("t")),e.viewProps.bindTabIndex(n),this.element.appendChild(n),this.trackElement=n;const r=t.createElement("div");r.classList.add(ic("k")),this.trackElement.appendChild(r),this.knobElement=r,e.value.emitter.on("change",this.onChange_),this.value=e.value,this.update_()}update_(){const t=Ce(Jt(this.value.rawValue,this.props_.get("min"),this.props_.get("max"),0,100),0,100);this.knobElement.style.width=`${t}%`}onChange_(){this.update_()}}class R1{constructor(t,e){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDownOrMove_=this.onPointerDownOrMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.props=e.props,this.view=new P1(t,{props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Ar(this.view.trackElement),this.ptHandler_.emitter.on("down",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("move",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.trackElement.addEventListener("keydown",this.onKeyDown_),this.view.trackElement.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(t,e){t.point&&this.value.setRawValue(Jt(Ce(t.point.x,0,t.bounds.width),0,t.bounds.width,this.props.get("min"),this.props.get("max")),e)}onPointerDownOrMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onKeyDown_(t){const e=en(this.props.get("keyScale"),vi(t));e!==0&&this.value.setRawValue(this.value.rawValue+e,{forceEmit:!1,last:!1})}onKeyUp_(t){en(this.props.get("keyScale"),vi(t))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const rc=jt("sldtxt");class L1{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(rc());const n=t.createElement("div");n.classList.add(rc("s")),this.sliderView_=e.sliderView,n.appendChild(this.sliderView_.element),this.element.appendChild(n);const r=t.createElement("div");r.classList.add(rc("t")),this.textView_=e.textView,r.appendChild(this.textView_.element),this.element.appendChild(r)}}class Ga{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.sliderC_=new R1(t,{props:e.sliderProps,value:e.value,viewProps:this.viewProps}),this.textC_=new Lo(t,{parser:e.parser,props:e.textProps,sliderProps:e.sliderProps,value:e.value,viewProps:e.viewProps}),this.view=new L1(t,{sliderView:this.sliderC_.view,textView:this.textC_.view})}get sliderController(){return this.sliderC_}get textController(){return this.textC_}importProps(t){return xn(t,null,e=>({max:e.required.number,min:e.required.number}),e=>{const n=this.sliderC_.props;return n.set("max",e.max),n.set("min",e.min),!0})}exportProps(){const t=this.sliderC_.props;return yn(null,{max:t.get("max"),min:t.get("min")})}}function K_(i){return{sliderProps:new zt({keyScale:i.keyScale,max:i.max,min:i.min}),textProps:new zt({formatter:ue(i.formatter),keyScale:i.keyScale,pointerScale:ue(i.pointerScale)})}}const D1={containerUnitSize:"cnt-usz"};function Z_(i){return`--${D1[i]}`}function bo(i){return I_(i)}function Oi(i){if($c(i))return fe(i,bo)}function ui(i,t){if(!i)return;const e=[],n=R_(i,t);n&&e.push(n);const r=L_(i);return r&&e.push(r),new Ao(e)}function I1(i){return i?i.major===Ts.major:!1}function J_(i){if(i==="inline"||i==="popup")return i}function Do(i,t){i.write(t)}const ha=jt("ckb");class O1{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),this.element=t.createElement("div"),this.element.classList.add(ha()),e.viewProps.bindClassModifiers(this.element);const n=t.createElement("label");n.classList.add(ha("l")),this.element.appendChild(n),this.labelElement=n;const r=t.createElement("input");r.classList.add(ha("i")),r.type="checkbox",this.labelElement.appendChild(r),this.inputElement=r,e.viewProps.bindDisabled(this.inputElement);const s=t.createElement("div");s.classList.add(ha("w")),this.labelElement.appendChild(s);const a=el(t,"check");s.appendChild(a),e.value.emitter.on("change",this.onValueChange_),this.value=e.value,this.update_()}update_(){this.inputElement.checked=this.value.rawValue}onValueChange_(){this.update_()}}class U1{constructor(t,e){this.onInputChange_=this.onInputChange_.bind(this),this.onLabelMouseDown_=this.onLabelMouseDown_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.view=new O1(t,{value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.labelElement.addEventListener("mousedown",this.onLabelMouseDown_)}onInputChange_(t){const e=t.currentTarget;this.value.rawValue=e.checked,t.preventDefault(),t.stopPropagation()}onLabelMouseDown_(t){t.preventDefault()}}function N1(i){const t=[],e=Yu(i.options);return e&&t.push(e),new Ao(t)}const F1=Ze({id:"input-bool",type:"input",accept:(i,t)=>{if(typeof i!="boolean")return null;const e=fe(t,n=>({options:n.optional.custom(Ro),readonly:n.optional.constant(!1)}));return e?{initialValue:i,params:e}:null},binding:{reader:i=>j_,constraint:i=>N1(i.params),writer:i=>Do},controller:i=>{const t=i.document,e=i.value,n=i.constraint,r=n&&Va(n,Po);return r?new Wi(t,{props:new zt({options:r.values.value("options")}),value:e,viewProps:i.viewProps}):new U1(t,{value:e,viewProps:i.viewProps})},api(i){return typeof i.controller.value.rawValue!="boolean"?null:i.controller.valueController instanceof Wi?new ju(i.controller):null}}),tr=jt("col");class B1{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(tr()),e.foldable.bindExpandedClass(this.element,tr(void 0,"expanded")),qn(e.foldable,"completed",Ss(this.element,tr(void 0,"cpl")));const n=t.createElement("div");n.classList.add(tr("h")),this.element.appendChild(n);const r=t.createElement("div");r.classList.add(tr("s")),n.appendChild(r),this.swatchElement=r;const s=t.createElement("div");if(s.classList.add(tr("t")),n.appendChild(s),this.textElement=s,e.pickerLayout==="inline"){const a=t.createElement("div");a.classList.add(tr("p")),this.element.appendChild(a),this.pickerElement=a}else this.pickerElement=null}}function k1(i,t,e){const n=Ce(i/255,0,1),r=Ce(t/255,0,1),s=Ce(e/255,0,1),a=Math.max(n,r,s),o=Math.min(n,r,s),l=a-o;let c=0,u=0;const h=(o+a)/2;return l!==0&&(u=l/(1-Math.abs(a+o-1)),n===a?c=(r-s)/l:r===a?c=2+(s-n)/l:c=4+(n-r)/l,c=c/6+(c<0?1:0)),[c*360,u*100,h*100]}function z1(i,t,e){const n=(i%360+360)%360,r=Ce(t/100,0,1),s=Ce(e/100,0,1),a=(1-Math.abs(2*s-1))*r,o=a*(1-Math.abs(n/60%2-1)),l=s-a/2;let c,u,h;return n>=0&&n<60?[c,u,h]=[a,o,0]:n>=60&&n<120?[c,u,h]=[o,a,0]:n>=120&&n<180?[c,u,h]=[0,a,o]:n>=180&&n<240?[c,u,h]=[0,o,a]:n>=240&&n<300?[c,u,h]=[o,0,a]:[c,u,h]=[a,0,o],[(c+l)*255,(u+l)*255,(h+l)*255]}function V1(i,t,e){const n=Ce(i/255,0,1),r=Ce(t/255,0,1),s=Ce(e/255,0,1),a=Math.max(n,r,s),o=Math.min(n,r,s),l=a-o;let c;l===0?c=0:a===n?c=60*(((r-s)/l%6+6)%6):a===r?c=60*((s-n)/l+2):c=60*((n-r)/l+4);const u=a===0?0:l/a,h=a;return[c,u*100,h*100]}function Q_(i,t,e){const n=C_(i,360),r=Ce(t/100,0,1),s=Ce(e/100,0,1),a=s*r,o=a*(1-Math.abs(n/60%2-1)),l=s-a;let c,u,h;return n>=0&&n<60?[c,u,h]=[a,o,0]:n>=60&&n<120?[c,u,h]=[o,a,0]:n>=120&&n<180?[c,u,h]=[0,a,o]:n>=180&&n<240?[c,u,h]=[0,o,a]:n>=240&&n<300?[c,u,h]=[o,0,a]:[c,u,h]=[a,0,o],[(c+l)*255,(u+l)*255,(h+l)*255]}function H1(i,t,e){const n=e+t*(100-Math.abs(2*e-100))/200;return[i,n!==0?t*(100-Math.abs(2*e-100))/n:0,e+t*(100-Math.abs(2*e-100))/(2*100)]}function G1(i,t,e){const n=100-Math.abs(e*(200-t)/100-100);return[i,n!==0?t*e/n:0,e*(200-t)/(2*100)]}function Yn(i){return[i[0],i[1],i[2]]}function il(i,t){return[i[0],i[1],i[2],t]}const W1={hsl:{hsl:(i,t,e)=>[i,t,e],hsv:H1,rgb:z1},hsv:{hsl:G1,hsv:(i,t,e)=>[i,t,e],rgb:Q_},rgb:{hsl:k1,hsv:V1,rgb:(i,t,e)=>[i,t,e]}};function xs(i,t){return[t==="float"?1:i==="rgb"?255:360,t==="float"?1:i==="rgb"?255:100,t==="float"?1:i==="rgb"?255:100]}function X1(i,t){return i===t?t:C_(i,t)}function tv(i,t,e){var n;const r=xs(t,e);return[t==="rgb"?Ce(i[0],0,r[0]):X1(i[0],r[0]),Ce(i[1],0,r[1]),Ce(i[2],0,r[2]),Ce((n=i[3])!==null&&n!==void 0?n:1,0,1)]}function Fp(i,t,e,n){const r=xs(t,e),s=xs(t,n);return i.map((a,o)=>a/r[o]*s[o])}function ev(i,t,e){const n=Fp(i,t.mode,t.type,"int"),r=W1[t.mode][e.mode](...n);return Fp(r,e.mode,"int",e.type)}class Kt{static black(){return new Kt([0,0,0],"rgb")}constructor(t,e){this.type="int",this.mode=e,this.comps_=tv(t,e,this.type)}getComponents(t){return il(ev(Yn(this.comps_),{mode:this.mode,type:this.type},{mode:t??this.mode,type:this.type}),this.comps_[3])}toRgbaObject(){const t=this.getComponents("rgb");return{r:t[0],g:t[1],b:t[2],a:t[3]}}}const Ti=jt("colp");class $1{constructor(t,e){this.alphaViews_=null,this.element=t.createElement("div"),this.element.classList.add(Ti()),e.viewProps.bindClassModifiers(this.element);const n=t.createElement("div");n.classList.add(Ti("hsv"));const r=t.createElement("div");r.classList.add(Ti("sv")),this.svPaletteView_=e.svPaletteView,r.appendChild(this.svPaletteView_.element),n.appendChild(r);const s=t.createElement("div");s.classList.add(Ti("h")),this.hPaletteView_=e.hPaletteView,s.appendChild(this.hPaletteView_.element),n.appendChild(s),this.element.appendChild(n);const a=t.createElement("div");if(a.classList.add(Ti("rgb")),this.textsView_=e.textsView,a.appendChild(this.textsView_.element),this.element.appendChild(a),e.alphaViews){this.alphaViews_={palette:e.alphaViews.palette,text:e.alphaViews.text};const o=t.createElement("div");o.classList.add(Ti("a"));const l=t.createElement("div");l.classList.add(Ti("ap")),l.appendChild(this.alphaViews_.palette.element),o.appendChild(l);const c=t.createElement("div");c.classList.add(Ti("at")),c.appendChild(this.alphaViews_.text.element),o.appendChild(c),this.element.appendChild(o)}}get allFocusableElements(){const t=[this.svPaletteView_.element,this.hPaletteView_.element,this.textsView_.modeSelectElement,...this.textsView_.inputViews.map(e=>e.inputElement)];return this.alphaViews_&&t.push(this.alphaViews_.palette.element,this.alphaViews_.text.inputElement),t}}function j1(i){return i==="int"?"int":i==="float"?"float":void 0}function Ku(i){return fe(i,t=>({color:t.optional.object({alpha:t.optional.boolean,type:t.optional.custom(j1)}),expanded:t.optional.boolean,picker:t.optional.custom(J_),readonly:t.optional.constant(!1)}))}function Er(i){return i?.1:1}function nv(i){var t;return(t=i.color)===null||t===void 0?void 0:t.type}class Zu{constructor(t,e){this.type="float",this.mode=e,this.comps_=tv(t,e,this.type)}getComponents(t){return il(ev(Yn(this.comps_),{mode:this.mode,type:this.type},{mode:t??this.mode,type:this.type}),this.comps_[3])}toRgbaObject(){const t=this.getComponents("rgb");return{r:t[0],g:t[1],b:t[2],a:t[3]}}}const q1={int:(i,t)=>new Kt(i,t),float:(i,t)=>new Zu(i,t)};function Ju(i,t,e){return q1[e](i,t)}function Y1(i){return i.type==="float"}function K1(i){return i.type==="int"}function Z1(i){const t=i.getComponents(),e=xs(i.mode,"int");return new Kt([Math.round(Jt(t[0],0,1,0,e[0])),Math.round(Jt(t[1],0,1,0,e[1])),Math.round(Jt(t[2],0,1,0,e[2])),t[3]],i.mode)}function J1(i){const t=i.getComponents(),e=xs(i.mode,"int");return new Zu([Jt(t[0],0,e[0],0,1),Jt(t[1],0,e[1],0,1),Jt(t[2],0,e[2],0,1),t[3]],i.mode)}function Ke(i,t){if(i.type===t)return i;if(K1(i)&&t==="float")return J1(i);if(Y1(i)&&t==="int")return Z1(i);throw ve.shouldNeverHappen()}function Q1(i,t){return i.alpha===t.alpha&&i.mode===t.mode&&i.notation===t.notation&&i.type===t.type}function Rn(i,t){const e=i.match(/^(.+)%$/);return Math.min(e?parseFloat(e[1])*.01*t:parseFloat(i),t)}const tP={deg:i=>i,grad:i=>i*360/400,rad:i=>i*360/(2*Math.PI),turn:i=>i*360};function iv(i){const t=i.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);if(!t)return parseFloat(i);const e=parseFloat(t[1]),n=t[2];return tP[n](e)}function rv(i){const t=i.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!t)return null;const e=[Rn(t[1],255),Rn(t[2],255),Rn(t[3],255)];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])?null:e}function eP(i){const t=rv(i);return t?new Kt(t,"rgb"):null}function sv(i){const t=i.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!t)return null;const e=[Rn(t[1],255),Rn(t[2],255),Rn(t[3],255),Rn(t[4],1)];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])||isNaN(e[3])?null:e}function nP(i){const t=sv(i);return t?new Kt(t,"rgb"):null}function ov(i){const t=i.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!t)return null;const e=[iv(t[1]),Rn(t[2],100),Rn(t[3],100)];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])?null:e}function iP(i){const t=ov(i);return t?new Kt(t,"hsl"):null}function av(i){const t=i.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!t)return null;const e=[iv(t[1]),Rn(t[2],100),Rn(t[3],100),Rn(t[4],1)];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])||isNaN(e[3])?null:e}function rP(i){const t=av(i);return t?new Kt(t,"hsl"):null}function lv(i){const t=i.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(t)return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)];const e=i.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return e?[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]:null}function sP(i){const t=lv(i);return t?new Kt(t,"rgb"):null}function cv(i){const t=i.match(/^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(t)return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16),Jt(parseInt(t[4]+t[4],16),0,255,0,1)];const e=i.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return e?[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16),Jt(parseInt(e[4],16),0,255,0,1)]:null}function oP(i){const t=cv(i);return t?new Kt(t,"rgb"):null}function uv(i){const t=i.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!t)return null;const e=[parseFloat(t[1]),parseFloat(t[2]),parseFloat(t[3])];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])?null:e}function Bp(i){return t=>{const e=uv(t);return e?Ju(e,"rgb",i):null}}function hv(i){const t=i.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!t)return null;const e=[parseFloat(t[1]),parseFloat(t[2]),parseFloat(t[3]),parseFloat(t[4])];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])||isNaN(e[3])?null:e}function kp(i){return t=>{const e=hv(t);return e?Ju(e,"rgb",i):null}}const aP=[{parser:lv,result:{alpha:!1,mode:"rgb",notation:"hex"}},{parser:cv,result:{alpha:!0,mode:"rgb",notation:"hex"}},{parser:rv,result:{alpha:!1,mode:"rgb",notation:"func"}},{parser:sv,result:{alpha:!0,mode:"rgb",notation:"func"}},{parser:ov,result:{alpha:!1,mode:"hsl",notation:"func"}},{parser:av,result:{alpha:!0,mode:"hsl",notation:"func"}},{parser:uv,result:{alpha:!1,mode:"rgb",notation:"object"}},{parser:hv,result:{alpha:!0,mode:"rgb",notation:"object"}}];function lP(i){return aP.reduce((t,{parser:e,result:n})=>t||(e(i)?n:null),null)}function cP(i,t="int"){const e=lP(i);return e?e.notation==="hex"&&t!=="float"?Object.assign(Object.assign({},e),{type:"int"}):e.notation==="func"?Object.assign(Object.assign({},e),{type:t}):null:null}function Io(i){const t=[sP,oP,eP,nP,iP,rP];i==="int"&&t.push(Bp("int"),kp("int")),i==="float"&&t.push(Bp("float"),kp("float"));const e=S1(t);return n=>{const r=e(n);return r?Ke(r,i):null}}function uP(i){const t=Io("int");if(typeof i!="string")return Kt.black();const e=t(i);return e??Kt.black()}function dv(i){const t=Ce(Math.floor(i),0,255).toString(16);return t.length===1?`0${t}`:t}function Qu(i,t="#"){const e=Yn(i.getComponents("rgb")).map(dv).join("");return`${t}${e}`}function th(i,t="#"){const e=i.getComponents("rgb"),n=[e[0],e[1],e[2],e[3]*255].map(dv).join("");return`${t}${n}`}function pv(i){const t=un(0),e=Ke(i,"int");return`rgb(${Yn(e.getComponents("rgb")).map(r=>t(r)).join(", ")})`}function ya(i){const t=un(2),e=un(0);return`rgba(${Ke(i,"int").getComponents("rgb").map((s,a)=>(a===3?t:e)(s)).join(", ")})`}function hP(i){const t=[un(0),Ha,Ha],e=Ke(i,"int");return`hsl(${Yn(e.getComponents("hsl")).map((r,s)=>t[s](r)).join(", ")})`}function dP(i){const t=[un(0),Ha,Ha,un(2)];return`hsla(${Ke(i,"int").getComponents("hsl").map((r,s)=>t[s](r)).join(", ")})`}function fv(i,t){const e=un(t==="float"?2:0),n=["r","g","b"],r=Ke(i,t);return`{${Yn(r.getComponents("rgb")).map((a,o)=>`${n[o]}: ${e(a)}`).join(", ")}}`}function pP(i){return t=>fv(t,i)}function mv(i,t){const e=un(2),n=un(t==="float"?2:0),r=["r","g","b","a"];return`{${Ke(i,t).getComponents("rgb").map((o,l)=>{const c=l===3?e:n;return`${r[l]}: ${c(o)}`}).join(", ")}}`}function fP(i){return t=>mv(t,i)}const mP=[{format:{alpha:!1,mode:"rgb",notation:"hex",type:"int"},stringifier:Qu},{format:{alpha:!0,mode:"rgb",notation:"hex",type:"int"},stringifier:th},{format:{alpha:!1,mode:"rgb",notation:"func",type:"int"},stringifier:pv},{format:{alpha:!0,mode:"rgb",notation:"func",type:"int"},stringifier:ya},{format:{alpha:!1,mode:"hsl",notation:"func",type:"int"},stringifier:hP},{format:{alpha:!0,mode:"hsl",notation:"func",type:"int"},stringifier:dP},...["int","float"].reduce((i,t)=>[...i,{format:{alpha:!1,mode:"rgb",notation:"object",type:t},stringifier:pP(t)},{format:{alpha:!0,mode:"rgb",notation:"object",type:t},stringifier:fP(t)}],[])];function _v(i){return mP.reduce((t,e)=>t||(Q1(e.format,i)?e.stringifier:null),null)}const qs=jt("apl");class _P{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.element=t.createElement("div"),this.element.classList.add(qs()),e.viewProps.bindClassModifiers(this.element),e.viewProps.bindTabIndex(this.element);const n=t.createElement("div");n.classList.add(qs("b")),this.element.appendChild(n);const r=t.createElement("div");r.classList.add(qs("c")),n.appendChild(r),this.colorElem_=r;const s=t.createElement("div");s.classList.add(qs("m")),this.element.appendChild(s),this.markerElem_=s;const a=t.createElement("div");a.classList.add(qs("p")),this.markerElem_.appendChild(a),this.previewElem_=a,this.update_()}update_(){const t=this.value.rawValue,e=t.getComponents("rgb"),n=new Kt([e[0],e[1],e[2],0],"rgb"),r=new Kt([e[0],e[1],e[2],255],"rgb"),s=["to right",ya(n),ya(r)];this.colorElem_.style.background=`linear-gradient(${s.join(",")})`,this.previewElem_.style.backgroundColor=ya(t);const a=Jt(e[3],0,1,0,100);this.markerElem_.style.left=`${a}%`}onValueChange_(){this.update_()}}class vP{constructor(t,e){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.view=new _P(t,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Ar(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(t,e){if(!t.point)return;const n=t.point.x/t.bounds.width,r=this.value.rawValue,[s,a,o]=r.getComponents("hsv");this.value.setRawValue(new Kt([s,a,o,n],"hsv"),e)}onPointerDown_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onKeyDown_(t){const e=en(Er(!0),vi(t));if(e===0)return;const n=this.value.rawValue,[r,s,a,o]=n.getComponents("hsv");this.value.setRawValue(new Kt([r,s,a,o+e],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(t){en(Er(!0),vi(t))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Yr=jt("coltxt");function gP(i){const t=i.createElement("select"),e=[{text:"RGB",value:"rgb"},{text:"HSL",value:"hsl"},{text:"HSV",value:"hsv"},{text:"HEX",value:"hex"}];return t.appendChild(e.reduce((n,r)=>{const s=i.createElement("option");return s.textContent=r.text,s.value=r.value,n.appendChild(s),n},i.createDocumentFragment())),t}class bP{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(Yr()),e.viewProps.bindClassModifiers(this.element);const n=t.createElement("div");n.classList.add(Yr("m")),this.modeElem_=gP(t),this.modeElem_.classList.add(Yr("ms")),n.appendChild(this.modeSelectElement),e.viewProps.bindDisabled(this.modeElem_);const r=t.createElement("div");r.classList.add(Yr("mm")),r.appendChild(el(t,"dropdown")),n.appendChild(r),this.element.appendChild(n);const s=t.createElement("div");s.classList.add(Yr("w")),this.element.appendChild(s),this.inputsElem_=s,this.inputViews_=e.inputViews,this.applyInputViews_(),hi(e.mode,a=>{this.modeElem_.value=a})}get modeSelectElement(){return this.modeElem_}get inputViews(){return this.inputViews_}set inputViews(t){this.inputViews_=t,this.applyInputViews_()}applyInputViews_(){N_(this.inputsElem_);const t=this.element.ownerDocument;this.inputViews_.forEach(e=>{const n=t.createElement("div");n.classList.add(Yr("c")),n.appendChild(e.element),this.inputsElem_.appendChild(n)})}}function xP(i){return un(i==="float"?2:0)}function yP(i,t,e){const n=xs(i,t)[e];return new So({min:0,max:n})}function wP(i,t,e){return new Lo(i,{arrayPosition:e===0?"fst":e===3-1?"lst":"mid",parser:t.parser,props:zt.fromObject({formatter:xP(t.colorType),keyScale:Er(!1),pointerScale:t.colorType==="float"?.01:1}),value:ue(0,{constraint:yP(t.colorMode,t.colorType,e)}),viewProps:t.viewProps})}function EP(i,t){const e={colorMode:t.colorMode,colorType:t.colorType,parser:_i,viewProps:t.viewProps};return[0,1,2].map(n=>{const r=wP(i,e,n);return As({primary:t.value,secondary:r.value,forward(s){return Ke(s,t.colorType).getComponents(t.colorMode)[n]},backward(s,a){const o=t.colorMode,c=Ke(s,t.colorType).getComponents(o);c[n]=a;const u=Ju(il(Yn(c),c[3]),o,t.colorType);return Ke(u,"int")}}),r})}function MP(i,t){const e=new vo(i,{parser:Io("int"),props:zt.fromObject({formatter:Qu}),value:ue(Kt.black()),viewProps:t.viewProps});return As({primary:t.value,secondary:e.value,forward:n=>new Kt(Yn(n.getComponents()),n.mode),backward:(n,r)=>new Kt(il(Yn(r.getComponents(n.mode)),n.getComponents()[3]),n.mode)}),[e]}function SP(i){return i!=="hex"}class TP{constructor(t,e){this.onModeSelectChange_=this.onModeSelectChange_.bind(this),this.colorType_=e.colorType,this.value=e.value,this.viewProps=e.viewProps,this.colorMode=ue(this.value.rawValue.mode),this.ccs_=this.createComponentControllers_(t),this.view=new bP(t,{mode:this.colorMode,inputViews:[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view],viewProps:this.viewProps}),this.view.modeSelectElement.addEventListener("change",this.onModeSelectChange_)}createComponentControllers_(t){const e=this.colorMode.rawValue;return SP(e)?EP(t,{colorMode:e,colorType:this.colorType_,value:this.value,viewProps:this.viewProps}):MP(t,{value:this.value,viewProps:this.viewProps})}onModeSelectChange_(t){const e=t.currentTarget;this.colorMode.rawValue=e.value,this.ccs_=this.createComponentControllers_(this.view.element.ownerDocument),this.view.inputViews=this.ccs_.map(n=>n.view)}}const sc=jt("hpl");class CP{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.element=t.createElement("div"),this.element.classList.add(sc()),e.viewProps.bindClassModifiers(this.element),e.viewProps.bindTabIndex(this.element);const n=t.createElement("div");n.classList.add(sc("c")),this.element.appendChild(n);const r=t.createElement("div");r.classList.add(sc("m")),this.element.appendChild(r),this.markerElem_=r,this.update_()}update_(){const t=this.value.rawValue,[e]=t.getComponents("hsv");this.markerElem_.style.backgroundColor=pv(new Kt([e,100,100],"hsv"));const n=Jt(e,0,360,0,100);this.markerElem_.style.left=`${n}%`}onValueChange_(){this.update_()}}class AP{constructor(t,e){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.view=new CP(t,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Ar(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(t,e){if(!t.point)return;const n=Jt(Ce(t.point.x,0,t.bounds.width),0,t.bounds.width,0,360),r=this.value.rawValue,[,s,a,o]=r.getComponents("hsv");this.value.setRawValue(new Kt([n,s,a,o],"hsv"),e)}onPointerDown_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onKeyDown_(t){const e=en(Er(!1),vi(t));if(e===0)return;const n=this.value.rawValue,[r,s,a,o]=n.getComponents("hsv");this.value.setRawValue(new Kt([r+e,s,a,o],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(t){en(Er(!1),vi(t))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const oc=jt("svp"),zp=64;class PP{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.element=t.createElement("div"),this.element.classList.add(oc()),e.viewProps.bindClassModifiers(this.element),e.viewProps.bindTabIndex(this.element);const n=t.createElement("canvas");n.height=zp,n.width=zp,n.classList.add(oc("c")),this.element.appendChild(n),this.canvasElement=n;const r=t.createElement("div");r.classList.add(oc("m")),this.element.appendChild(r),this.markerElem_=r,this.update_()}update_(){const t=RA(this.canvasElement);if(!t)return;const n=this.value.rawValue.getComponents("hsv"),r=this.canvasElement.width,s=this.canvasElement.height,a=t.getImageData(0,0,r,s),o=a.data;for(let u=0;u<s;u++)for(let h=0;h<r;h++){const d=Jt(h,0,r,0,100),m=Jt(u,0,s,100,0),v=Q_(n[0],d,m),_=(u*r+h)*4;o[_]=v[0],o[_+1]=v[1],o[_+2]=v[2],o[_+3]=255}t.putImageData(a,0,0);const l=Jt(n[1],0,100,0,100);this.markerElem_.style.left=`${l}%`;const c=Jt(n[2],0,100,100,0);this.markerElem_.style.top=`${c}%`}onValueChange_(){this.update_()}}class RP{constructor(t,e){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.view=new PP(t,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Ar(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(t,e){if(!t.point)return;const n=Jt(t.point.x,0,t.bounds.width,0,100),r=Jt(t.point.y,0,t.bounds.height,100,0),[s,,,a]=this.value.rawValue.getComponents("hsv");this.value.setRawValue(new Kt([s,n,r,a],"hsv"),e)}onPointerDown_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onKeyDown_(t){Y_(t.key)&&t.preventDefault();const[e,n,r,s]=this.value.rawValue.getComponents("hsv"),a=Er(!1),o=en(a,vi(t)),l=en(a,go(t));o===0&&l===0||this.value.setRawValue(new Kt([e,n+o,r+l,s],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(t){const e=Er(!1),n=en(e,vi(t)),r=en(e,go(t));n===0&&r===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class LP{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.hPaletteC_=new AP(t,{value:this.value,viewProps:this.viewProps}),this.svPaletteC_=new RP(t,{value:this.value,viewProps:this.viewProps}),this.alphaIcs_=e.supportsAlpha?{palette:new vP(t,{value:this.value,viewProps:this.viewProps}),text:new Lo(t,{parser:_i,props:zt.fromObject({pointerScale:.01,keyScale:.1,formatter:un(2)}),value:ue(0,{constraint:new So({min:0,max:1})}),viewProps:this.viewProps})}:null,this.alphaIcs_&&As({primary:this.value,secondary:this.alphaIcs_.text.value,forward:n=>n.getComponents()[3],backward:(n,r)=>{const s=n.getComponents();return s[3]=r,new Kt(s,n.mode)}}),this.textsC_=new TP(t,{colorType:e.colorType,value:this.value,viewProps:this.viewProps}),this.view=new $1(t,{alphaViews:this.alphaIcs_?{palette:this.alphaIcs_.palette.view,text:this.alphaIcs_.text.view}:null,hPaletteView:this.hPaletteC_.view,supportsAlpha:e.supportsAlpha,svPaletteView:this.svPaletteC_.view,textsView:this.textsC_.view,viewProps:this.viewProps})}get textsController(){return this.textsC_}}const ac=jt("colsw");class DP{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),e.value.emitter.on("change",this.onValueChange_),this.value=e.value,this.element=t.createElement("div"),this.element.classList.add(ac()),e.viewProps.bindClassModifiers(this.element);const n=t.createElement("div");n.classList.add(ac("sw")),this.element.appendChild(n),this.swatchElem_=n;const r=t.createElement("button");r.classList.add(ac("b")),e.viewProps.bindDisabled(r),this.element.appendChild(r),this.buttonElement=r,this.update_()}update_(){const t=this.value.rawValue;this.swatchElem_.style.backgroundColor=th(t)}onValueChange_(){this.update_()}}class IP{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.view=new DP(t,{value:this.value,viewProps:this.viewProps})}}class eh{constructor(t,e){this.onButtonBlur_=this.onButtonBlur_.bind(this),this.onButtonClick_=this.onButtonClick_.bind(this),this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.foldable_=Co.create(e.expanded),this.swatchC_=new IP(t,{value:this.value,viewProps:this.viewProps});const n=this.swatchC_.view.buttonElement;n.addEventListener("blur",this.onButtonBlur_),n.addEventListener("click",this.onButtonClick_),this.textC_=new vo(t,{parser:e.parser,props:zt.fromObject({formatter:e.formatter}),value:this.value,viewProps:this.viewProps}),this.view=new B1(t,{foldable:this.foldable_,pickerLayout:e.pickerLayout}),this.view.swatchElement.appendChild(this.swatchC_.view.element),this.view.textElement.appendChild(this.textC_.view.element),this.popC_=e.pickerLayout==="popup"?new $_(t,{viewProps:this.viewProps}):null;const r=new LP(t,{colorType:e.colorType,supportsAlpha:e.supportsAlpha,value:this.value,viewProps:this.viewProps});r.view.allFocusableElements.forEach(s=>{s.addEventListener("blur",this.onPopupChildBlur_),s.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=r,this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(r.view.element),As({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:s=>s,backward:(s,a)=>a})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),$u(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onButtonBlur_(t){if(!this.popC_)return;const e=this.view.element,n=t.relatedTarget;(!n||!e.contains(n))&&(this.popC_.shows.rawValue=!1)}onButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(t){if(!this.popC_)return;const e=this.popC_.view.element,n=F_(t);n&&e.contains(n)||n&&n===this.swatchC_.view.buttonElement&&!zu(e.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(t){this.popC_?t.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&t.key==="Escape"&&this.swatchC_.view.buttonElement.focus()}}function OP(i){return Yn(i.getComponents("rgb")).reduce((t,e)=>t<<8|Math.floor(e)&255,0)}function UP(i){return i.getComponents("rgb").reduce((t,e,n)=>{const r=Math.floor(n===3?e*255:e)&255;return t<<8|r},0)>>>0}function NP(i){return new Kt([i>>16&255,i>>8&255,i&255],"rgb")}function FP(i){return new Kt([i>>24&255,i>>16&255,i>>8&255,Jt(i&255,0,255,0,1)],"rgb")}function BP(i){return typeof i!="number"?Kt.black():NP(i)}function kP(i){return typeof i!="number"?Kt.black():FP(i)}function wa(i,t){return typeof i!="object"||se(i)?!1:t in i&&typeof i[t]=="number"}function vv(i){return wa(i,"r")&&wa(i,"g")&&wa(i,"b")}function gv(i){return vv(i)&&wa(i,"a")}function bv(i){return vv(i)}function nh(i,t){if(i.mode!==t.mode||i.type!==t.type)return!1;const e=i.getComponents(),n=t.getComponents();for(let r=0;r<e.length;r++)if(e[r]!==n[r])return!1;return!0}function Vp(i){return"a"in i?[i.r,i.g,i.b,i.a]:[i.r,i.g,i.b]}function zP(i){const t=_v(i);return t?(e,n)=>{Do(e,t(n))}:null}function VP(i){const t=i?UP:OP;return(e,n)=>{Do(e,t(n))}}function HP(i,t,e){const r=Ke(t,e).toRgbaObject();i.writeProperty("r",r.r),i.writeProperty("g",r.g),i.writeProperty("b",r.b),i.writeProperty("a",r.a)}function GP(i,t,e){const r=Ke(t,e).toRgbaObject();i.writeProperty("r",r.r),i.writeProperty("g",r.g),i.writeProperty("b",r.b)}function WP(i,t){return(e,n)=>{i?HP(e,n,t):GP(e,n,t)}}function XP(i){var t;return!!(!((t=i==null?void 0:i.color)===null||t===void 0)&&t.alpha)}function $P(i){return i?t=>th(t,"0x"):t=>Qu(t,"0x")}function jP(i){return"color"in i||i.view==="color"}const qP=Ze({id:"input-color-number",type:"input",accept:(i,t)=>{if(typeof i!="number"||!jP(t))return null;const e=Ku(t);return e?{initialValue:i,params:Object.assign(Object.assign({},e),{supportsAlpha:XP(t)})}:null},binding:{reader:i=>i.params.supportsAlpha?kP:BP,equals:nh,writer:i=>VP(i.params.supportsAlpha)},controller:i=>{var t,e;return new eh(i.document,{colorType:"int",expanded:(t=i.params.expanded)!==null&&t!==void 0?t:!1,formatter:$P(i.params.supportsAlpha),parser:Io("int"),pickerLayout:(e=i.params.picker)!==null&&e!==void 0?e:"popup",supportsAlpha:i.params.supportsAlpha,value:i.value,viewProps:i.viewProps})}});function YP(i,t){if(!bv(i))return Ke(Kt.black(),t);if(t==="int"){const e=Vp(i);return new Kt(e,"rgb")}if(t==="float"){const e=Vp(i);return new Zu(e,"rgb")}return Ke(Kt.black(),"int")}function KP(i){return gv(i)}function ZP(i){return t=>{const e=YP(t,i);return Ke(e,"int")}}function JP(i,t){return e=>i?mv(e,t):fv(e,t)}const QP=Ze({id:"input-color-object",type:"input",accept:(i,t)=>{var e;if(!bv(i))return null;const n=Ku(t);return n?{initialValue:i,params:Object.assign(Object.assign({},n),{colorType:(e=nv(t))!==null&&e!==void 0?e:"int"})}:null},binding:{reader:i=>ZP(i.params.colorType),equals:nh,writer:i=>WP(KP(i.initialValue),i.params.colorType)},controller:i=>{var t,e;const n=gv(i.initialValue);return new eh(i.document,{colorType:i.params.colorType,expanded:(t=i.params.expanded)!==null&&t!==void 0?t:!1,formatter:JP(n,i.params.colorType),parser:Io("int"),pickerLayout:(e=i.params.picker)!==null&&e!==void 0?e:"popup",supportsAlpha:n,value:i.value,viewProps:i.viewProps})}}),tR=Ze({id:"input-color-string",type:"input",accept:(i,t)=>{if(typeof i!="string"||t.view==="text")return null;const e=cP(i,nv(t));if(!e)return null;const n=_v(e);if(!n)return null;const r=Ku(t);return r?{initialValue:i,params:Object.assign(Object.assign({},r),{format:e,stringifier:n})}:null},binding:{reader:()=>uP,equals:nh,writer:i=>{const t=zP(i.params.format);if(!t)throw ve.notBindable();return t}},controller:i=>{var t,e;return new eh(i.document,{colorType:i.params.format.type,expanded:(t=i.params.expanded)!==null&&t!==void 0?t:!1,formatter:i.params.stringifier,parser:Io("int"),pickerLayout:(e=i.params.picker)!==null&&e!==void 0?e:"popup",supportsAlpha:i.params.format.alpha,value:i.value,viewProps:i.viewProps})}});class ih{constructor(t){this.components=t.components,this.asm_=t.assembly}constrain(t){const e=this.asm_.toComponents(t).map((n,r)=>{var s,a;return(a=(s=this.components[r])===null||s===void 0?void 0:s.constrain(n))!==null&&a!==void 0?a:n});return this.asm_.fromComponents(e)}}const Hp=jt("pndtxt");class eR{constructor(t,e){this.textViews=e.textViews,this.element=t.createElement("div"),this.element.classList.add(Hp()),this.textViews.forEach(n=>{const r=t.createElement("div");r.classList.add(Hp("a")),r.appendChild(n.element),this.element.appendChild(r)})}}function nR(i,t,e){return new Lo(i,{arrayPosition:e===0?"fst":e===t.axes.length-1?"lst":"mid",parser:t.parser,props:t.axes[e].textProps,value:ue(0,{constraint:t.axes[e].constraint}),viewProps:t.viewProps})}class rh{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.acs_=e.axes.map((n,r)=>nR(t,e,r)),this.acs_.forEach((n,r)=>{As({primary:this.value,secondary:n.value,forward:s=>e.assembly.toComponents(s)[r],backward:(s,a)=>{const o=e.assembly.toComponents(s);return o[r]=a,e.assembly.fromComponents(o)}})}),this.view=new eR(t,{textViews:this.acs_.map(n=>n.view)})}get textControllers(){return this.acs_}}class iR extends _o{get max(){return this.controller.valueController.sliderController.props.get("max")}set max(t){this.controller.valueController.sliderController.props.set("max",t)}get min(){return this.controller.valueController.sliderController.props.get("min")}set min(t){this.controller.valueController.sliderController.props.set("min",t)}}function rR(i,t){const e=[],n=R_(i,t);n&&e.push(n);const r=L_(i);r&&e.push(r);const s=Yu(i.options);return s&&e.push(s),new Ao(e)}const sR=Ze({id:"input-number",type:"input",accept:(i,t)=>{if(typeof i!="number")return null;const e=fe(t,n=>Object.assign(Object.assign({},I_(n)),{options:n.optional.custom(Ro),readonly:n.optional.constant(!1)}));return e?{initialValue:i,params:e}:null},binding:{reader:i=>T_,constraint:i=>rR(i.params,i.initialValue),writer:i=>Do},controller:i=>{const t=i.value,e=i.constraint,n=e&&Va(e,Po);if(n)return new Wi(i.document,{props:new zt({options:n.values.value("options")}),value:t,viewProps:i.viewProps});const r=D_(i.params,t.rawValue),s=e&&Va(e,So);return s?new Ga(i.document,Object.assign(Object.assign({},K_(Object.assign(Object.assign({},r),{keyScale:ue(r.keyScale),max:s.values.value("max"),min:s.values.value("min")}))),{parser:_i,value:t,viewProps:i.viewProps})):new Lo(i.document,{parser:_i,props:zt.fromObject(r),value:t,viewProps:i.viewProps})},api(i){return typeof i.controller.value.rawValue!="number"?null:i.controller.valueController instanceof Ga?new iR(i.controller):i.controller.valueController instanceof Wi?new ju(i.controller):null}});class zi{constructor(t=0,e=0){this.x=t,this.y=e}getComponents(){return[this.x,this.y]}static isObject(t){if(se(t))return!1;const e=t.x,n=t.y;return!(typeof e!="number"||typeof n!="number")}static equals(t,e){return t.x===e.x&&t.y===e.y}toObject(){return{x:this.x,y:this.y}}}const xv={toComponents:i=>i.getComponents(),fromComponents:i=>new zi(...i)},Kr=jt("p2d");class oR{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(Kr()),e.viewProps.bindClassModifiers(this.element),hi(e.expanded,Ss(this.element,Kr(void 0,"expanded")));const n=t.createElement("div");n.classList.add(Kr("h")),this.element.appendChild(n);const r=t.createElement("button");r.classList.add(Kr("b")),r.appendChild(el(t,"p2dpad")),e.viewProps.bindDisabled(r),n.appendChild(r),this.buttonElement=r;const s=t.createElement("div");if(s.classList.add(Kr("t")),n.appendChild(s),this.textElement=s,e.pickerLayout==="inline"){const a=t.createElement("div");a.classList.add(Kr("p")),this.element.appendChild(a),this.pickerElement=a}else this.pickerElement=null}}const Ci=jt("p2dp");class aR{constructor(t,e){this.onFoldableChange_=this.onFoldableChange_.bind(this),this.onPropsChange_=this.onPropsChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.props_=e.props,this.props_.emitter.on("change",this.onPropsChange_),this.element=t.createElement("div"),this.element.classList.add(Ci()),e.layout==="popup"&&this.element.classList.add(Ci(void 0,"p")),e.viewProps.bindClassModifiers(this.element);const n=t.createElement("div");n.classList.add(Ci("p")),e.viewProps.bindTabIndex(n),this.element.appendChild(n),this.padElement=n;const r=t.createElementNS(Wn,"svg");r.classList.add(Ci("g")),this.padElement.appendChild(r),this.svgElem_=r;const s=t.createElementNS(Wn,"line");s.classList.add(Ci("ax")),s.setAttributeNS(null,"x1","0"),s.setAttributeNS(null,"y1","50%"),s.setAttributeNS(null,"x2","100%"),s.setAttributeNS(null,"y2","50%"),this.svgElem_.appendChild(s);const a=t.createElementNS(Wn,"line");a.classList.add(Ci("ax")),a.setAttributeNS(null,"x1","50%"),a.setAttributeNS(null,"y1","0"),a.setAttributeNS(null,"x2","50%"),a.setAttributeNS(null,"y2","100%"),this.svgElem_.appendChild(a);const o=t.createElementNS(Wn,"line");o.classList.add(Ci("l")),o.setAttributeNS(null,"x1","50%"),o.setAttributeNS(null,"y1","50%"),this.svgElem_.appendChild(o),this.lineElem_=o;const l=t.createElement("div");l.classList.add(Ci("m")),this.padElement.appendChild(l),this.markerElem_=l,e.value.emitter.on("change",this.onValueChange_),this.value=e.value,this.update_()}get allFocusableElements(){return[this.padElement]}update_(){const[t,e]=this.value.rawValue.getComponents(),n=this.props_.get("max"),r=Jt(t,-n,+n,0,100),s=Jt(e,-n,+n,0,100),a=this.props_.get("invertsY")?100-s:s;this.lineElem_.setAttributeNS(null,"x2",`${r}%`),this.lineElem_.setAttributeNS(null,"y2",`${a}%`),this.markerElem_.style.left=`${r}%`,this.markerElem_.style.top=`${a}%`}onValueChange_(){this.update_()}onPropsChange_(){this.update_()}onFoldableChange_(){this.update_()}}function Gp(i,t,e){return[en(t[0],vi(i)),en(t[1],go(i))*(e?1:-1)]}class lR{constructor(t,e){this.onPadKeyDown_=this.onPadKeyDown_.bind(this),this.onPadKeyUp_=this.onPadKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.props=e.props,this.value=e.value,this.viewProps=e.viewProps,this.view=new aR(t,{layout:e.layout,props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Ar(this.view.padElement),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.padElement.addEventListener("keydown",this.onPadKeyDown_),this.view.padElement.addEventListener("keyup",this.onPadKeyUp_)}handlePointerEvent_(t,e){if(!t.point)return;const n=this.props.get("max"),r=Jt(t.point.x,0,t.bounds.width,-n,+n),s=Jt(this.props.get("invertsY")?t.bounds.height-t.point.y:t.point.y,0,t.bounds.height,-n,+n);this.value.setRawValue(new zi(r,s),e)}onPointerDown_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onPadKeyDown_(t){Y_(t.key)&&t.preventDefault();const[e,n]=Gp(t,[this.props.get("xKeyScale"),this.props.get("yKeyScale")],this.props.get("invertsY"));e===0&&n===0||this.value.setRawValue(new zi(this.value.rawValue.x+e,this.value.rawValue.y+n),{forceEmit:!1,last:!1})}onPadKeyUp_(t){const[e,n]=Gp(t,[this.props.get("xKeyScale"),this.props.get("yKeyScale")],this.props.get("invertsY"));e===0&&n===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class cR{constructor(t,e){var n,r;this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.onPadButtonBlur_=this.onPadButtonBlur_.bind(this),this.onPadButtonClick_=this.onPadButtonClick_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.foldable_=Co.create(e.expanded),this.popC_=e.pickerLayout==="popup"?new $_(t,{viewProps:this.viewProps}):null;const s=new lR(t,{layout:e.pickerLayout,props:new zt({invertsY:ue(e.invertsY),max:ue(e.max),xKeyScale:e.axes[0].textProps.value("keyScale"),yKeyScale:e.axes[1].textProps.value("keyScale")}),value:this.value,viewProps:this.viewProps});s.view.allFocusableElements.forEach(a=>{a.addEventListener("blur",this.onPopupChildBlur_),a.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=s,this.textC_=new rh(t,{assembly:xv,axes:e.axes,parser:e.parser,value:this.value,viewProps:this.viewProps}),this.view=new oR(t,{expanded:this.foldable_.value("expanded"),pickerLayout:e.pickerLayout,viewProps:this.viewProps}),this.view.textElement.appendChild(this.textC_.view.element),(n=this.view.buttonElement)===null||n===void 0||n.addEventListener("blur",this.onPadButtonBlur_),(r=this.view.buttonElement)===null||r===void 0||r.addEventListener("click",this.onPadButtonClick_),this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(this.pickerC_.view.element),As({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:a=>a,backward:(a,o)=>o})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),$u(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onPadButtonBlur_(t){if(!this.popC_)return;const e=this.view.element,n=t.relatedTarget;(!n||!e.contains(n))&&(this.popC_.shows.rawValue=!1)}onPadButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(t){if(!this.popC_)return;const e=this.popC_.view.element,n=F_(t);n&&e.contains(n)||n&&n===this.view.buttonElement&&!zu(e.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(t){this.popC_?t.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&t.key==="Escape"&&this.view.buttonElement.focus()}}function uR(i){return zi.isObject(i)?new zi(i.x,i.y):new zi}function hR(i,t){i.writeProperty("x",t.x),i.writeProperty("y",t.y)}function dR(i,t){return new ih({assembly:xv,components:[ui(Object.assign(Object.assign({},i),i.x),t.x),ui(Object.assign(Object.assign({},i),i.y),t.y)]})}function Wp(i,t){var e,n;if(!se(i.min)||!se(i.max))return Math.max(Math.abs((e=i.min)!==null&&e!==void 0?e:0),Math.abs((n=i.max)!==null&&n!==void 0?n:0));const r=A_(i);return Math.max(Math.abs(r)*10,Math.abs(t)*10)}function pR(i,t){var e,n;const r=Wp(yr(i,(e=i.x)!==null&&e!==void 0?e:{}),t.x),s=Wp(yr(i,(n=i.y)!==null&&n!==void 0?n:{}),t.y);return Math.max(r,s)}function fR(i){if(!("y"in i))return!1;const t=i.y;return t&&"inverted"in t?!!t.inverted:!1}const mR=Ze({id:"input-point2d",type:"input",accept:(i,t)=>{if(!zi.isObject(i))return null;const e=fe(t,n=>Object.assign(Object.assign({},bo(n)),{expanded:n.optional.boolean,picker:n.optional.custom(J_),readonly:n.optional.constant(!1),x:n.optional.custom(Oi),y:n.optional.object(Object.assign(Object.assign({},bo(n)),{inverted:n.optional.boolean}))}));return e?{initialValue:i,params:e}:null},binding:{reader:()=>uR,constraint:i=>dR(i.params,i.initialValue),equals:zi.equals,writer:()=>hR},controller:i=>{var t,e;const n=i.document,r=i.value,s=i.constraint,a=[i.params.x,i.params.y];return new cR(n,{axes:r.rawValue.getComponents().map((o,l)=>{var c;return ku({constraint:s.components[l],initialValue:o,params:yr(i.params,(c=a[l])!==null&&c!==void 0?c:{})})}),expanded:(t=i.params.expanded)!==null&&t!==void 0?t:!1,invertsY:fR(i.params),max:pR(i.params,r.rawValue),parser:_i,pickerLayout:(e=i.params.picker)!==null&&e!==void 0?e:"popup",value:r,viewProps:i.viewProps})}});class ls{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}getComponents(){return[this.x,this.y,this.z]}static isObject(t){if(se(t))return!1;const e=t.x,n=t.y,r=t.z;return!(typeof e!="number"||typeof n!="number"||typeof r!="number")}static equals(t,e){return t.x===e.x&&t.y===e.y&&t.z===e.z}toObject(){return{x:this.x,y:this.y,z:this.z}}}const yv={toComponents:i=>i.getComponents(),fromComponents:i=>new ls(...i)};function _R(i){return ls.isObject(i)?new ls(i.x,i.y,i.z):new ls}function vR(i,t){i.writeProperty("x",t.x),i.writeProperty("y",t.y),i.writeProperty("z",t.z)}function gR(i,t){return new ih({assembly:yv,components:[ui(Object.assign(Object.assign({},i),i.x),t.x),ui(Object.assign(Object.assign({},i),i.y),t.y),ui(Object.assign(Object.assign({},i),i.z),t.z)]})}const bR=Ze({id:"input-point3d",type:"input",accept:(i,t)=>{if(!ls.isObject(i))return null;const e=fe(t,n=>Object.assign(Object.assign({},bo(n)),{readonly:n.optional.constant(!1),x:n.optional.custom(Oi),y:n.optional.custom(Oi),z:n.optional.custom(Oi)}));return e?{initialValue:i,params:e}:null},binding:{reader:i=>_R,constraint:i=>gR(i.params,i.initialValue),equals:ls.equals,writer:i=>vR},controller:i=>{const t=i.value,e=i.constraint,n=[i.params.x,i.params.y,i.params.z];return new rh(i.document,{assembly:yv,axes:t.rawValue.getComponents().map((r,s)=>{var a;return ku({constraint:e.components[s],initialValue:r,params:yr(i.params,(a=n[s])!==null&&a!==void 0?a:{})})}),parser:_i,value:t,viewProps:i.viewProps})}});class cs{constructor(t=0,e=0,n=0,r=0){this.x=t,this.y=e,this.z=n,this.w=r}getComponents(){return[this.x,this.y,this.z,this.w]}static isObject(t){if(se(t))return!1;const e=t.x,n=t.y,r=t.z,s=t.w;return!(typeof e!="number"||typeof n!="number"||typeof r!="number"||typeof s!="number")}static equals(t,e){return t.x===e.x&&t.y===e.y&&t.z===e.z&&t.w===e.w}toObject(){return{x:this.x,y:this.y,z:this.z,w:this.w}}}const wv={toComponents:i=>i.getComponents(),fromComponents:i=>new cs(...i)};function xR(i){return cs.isObject(i)?new cs(i.x,i.y,i.z,i.w):new cs}function yR(i,t){i.writeProperty("x",t.x),i.writeProperty("y",t.y),i.writeProperty("z",t.z),i.writeProperty("w",t.w)}function wR(i,t){return new ih({assembly:wv,components:[ui(Object.assign(Object.assign({},i),i.x),t.x),ui(Object.assign(Object.assign({},i),i.y),t.y),ui(Object.assign(Object.assign({},i),i.z),t.z),ui(Object.assign(Object.assign({},i),i.w),t.w)]})}const ER=Ze({id:"input-point4d",type:"input",accept:(i,t)=>{if(!cs.isObject(i))return null;const e=fe(t,n=>Object.assign(Object.assign({},bo(n)),{readonly:n.optional.constant(!1),w:n.optional.custom(Oi),x:n.optional.custom(Oi),y:n.optional.custom(Oi),z:n.optional.custom(Oi)}));return e?{initialValue:i,params:e}:null},binding:{reader:i=>xR,constraint:i=>wR(i.params,i.initialValue),equals:cs.equals,writer:i=>yR},controller:i=>{const t=i.value,e=i.constraint,n=[i.params.x,i.params.y,i.params.z,i.params.w];return new rh(i.document,{assembly:wv,axes:t.rawValue.getComponents().map((r,s)=>{var a;return ku({constraint:e.components[s],initialValue:r,params:yr(i.params,(a=n[s])!==null&&a!==void 0?a:{})})}),parser:_i,value:t,viewProps:i.viewProps})}});function MR(i){const t=[],e=Yu(i.options);return e&&t.push(e),new Ao(t)}const SR=Ze({id:"input-string",type:"input",accept:(i,t)=>{if(typeof i!="string")return null;const e=fe(t,n=>({readonly:n.optional.constant(!1),options:n.optional.custom(Ro)}));return e?{initialValue:i,params:e}:null},binding:{reader:i=>q_,constraint:i=>MR(i.params),writer:i=>Do},controller:i=>{const t=i.document,e=i.value,n=i.constraint,r=n&&Va(n,Po);return r?new Wi(t,{props:new zt({options:r.values.value("options")}),value:e,viewProps:i.viewProps}):new vo(t,{parser:s=>s,props:zt.fromObject({formatter:Zc}),value:e,viewProps:i.viewProps})},api(i){return typeof i.controller.value.rawValue!="string"?null:i.controller.valueController instanceof Wi?new ju(i.controller):null}}),Oo={monitor:{defaultInterval:200,defaultRows:3}},Xp=jt("mll");class TR{constructor(t,e){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=e.formatter,this.element=t.createElement("div"),this.element.classList.add(Xp()),e.viewProps.bindClassModifiers(this.element);const n=t.createElement("textarea");n.classList.add(Xp("i")),n.style.height=`calc(var(${Z_("containerUnitSize")}) * ${e.rows})`,n.readOnly=!0,e.viewProps.bindDisabled(n),this.element.appendChild(n),this.textareaElem_=n,e.value.emitter.on("change",this.onValueUpdate_),this.value=e.value,this.update_()}update_(){const t=this.textareaElem_,e=t.scrollTop===t.scrollHeight-t.clientHeight,n=[];this.value.rawValue.forEach(r=>{r!==void 0&&n.push(this.formatter_(r))}),t.textContent=n.join(`
`),e&&(t.scrollTop=t.scrollHeight)}onValueUpdate_(){this.update_()}}class sh{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.view=new TR(t,{formatter:e.formatter,rows:e.rows,value:this.value,viewProps:this.viewProps})}}const $p=jt("sgl");class CR{constructor(t,e){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=e.formatter,this.element=t.createElement("div"),this.element.classList.add($p()),e.viewProps.bindClassModifiers(this.element);const n=t.createElement("input");n.classList.add($p("i")),n.readOnly=!0,n.type="text",e.viewProps.bindDisabled(n),this.element.appendChild(n),this.inputElement=n,e.value.emitter.on("change",this.onValueUpdate_),this.value=e.value,this.update_()}update_(){const t=this.value.rawValue,e=t[t.length-1];this.inputElement.value=e!==void 0?this.formatter_(e):""}onValueUpdate_(){this.update_()}}class oh{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.view=new CR(t,{formatter:e.formatter,value:this.value,viewProps:this.viewProps})}}const AR=Ze({id:"monitor-bool",type:"monitor",accept:(i,t)=>{if(typeof i!="boolean")return null;const e=fe(t,n=>({readonly:n.required.constant(!0),rows:n.optional.number}));return e?{initialValue:i,params:e}:null},binding:{reader:i=>j_},controller:i=>{var t;return i.value.rawValue.length===1?new oh(i.document,{formatter:Np,value:i.value,viewProps:i.viewProps}):new sh(i.document,{formatter:Np,rows:(t=i.params.rows)!==null&&t!==void 0?t:Oo.monitor.defaultRows,value:i.value,viewProps:i.viewProps})}});class PR extends _o{get max(){return this.controller.valueController.props.get("max")}set max(t){this.controller.valueController.props.set("max",t)}get min(){return this.controller.valueController.props.get("min")}set min(t){this.controller.valueController.props.set("min",t)}}const Ai=jt("grl");class RR{constructor(t,e){this.onCursorChange_=this.onCursorChange_.bind(this),this.onValueUpdate_=this.onValueUpdate_.bind(this),this.element=t.createElement("div"),this.element.classList.add(Ai()),e.viewProps.bindClassModifiers(this.element),this.formatter_=e.formatter,this.props_=e.props,this.cursor_=e.cursor,this.cursor_.emitter.on("change",this.onCursorChange_);const n=t.createElementNS(Wn,"svg");n.classList.add(Ai("g")),n.style.height=`calc(var(${Z_("containerUnitSize")}) * ${e.rows})`,this.element.appendChild(n),this.svgElem_=n;const r=t.createElementNS(Wn,"polyline");this.svgElem_.appendChild(r),this.lineElem_=r;const s=t.createElement("div");s.classList.add(Ai("t"),jt("tt")()),this.element.appendChild(s),this.tooltipElem_=s,e.value.emitter.on("change",this.onValueUpdate_),this.value=e.value,this.update_()}get graphElement(){return this.svgElem_}update_(){const{clientWidth:t,clientHeight:e}=this.element,n=this.value.rawValue.length-1,r=this.props_.get("min"),s=this.props_.get("max"),a=[];this.value.rawValue.forEach((h,d)=>{if(h===void 0)return;const m=Jt(d,0,n,0,t),v=Jt(h,r,s,e,0);a.push([m,v].join(","))}),this.lineElem_.setAttributeNS(null,"points",a.join(" "));const o=this.tooltipElem_,l=this.value.rawValue[this.cursor_.rawValue];if(l===void 0){o.classList.remove(Ai("t","a"));return}const c=Jt(this.cursor_.rawValue,0,n,0,t),u=Jt(l,r,s,e,0);o.style.left=`${c}px`,o.style.top=`${u}px`,o.textContent=`${this.formatter_(l)}`,o.classList.contains(Ai("t","a"))||(o.classList.add(Ai("t","a"),Ai("t","in")),za(o),o.classList.remove(Ai("t","in")))}onValueUpdate_(){this.update_()}onCursorChange_(){this.update_()}}class Ev{constructor(t,e){if(this.onGraphMouseMove_=this.onGraphMouseMove_.bind(this),this.onGraphMouseLeave_=this.onGraphMouseLeave_.bind(this),this.onGraphPointerDown_=this.onGraphPointerDown_.bind(this),this.onGraphPointerMove_=this.onGraphPointerMove_.bind(this),this.onGraphPointerUp_=this.onGraphPointerUp_.bind(this),this.props=e.props,this.value=e.value,this.viewProps=e.viewProps,this.cursor_=ue(-1),this.view=new RR(t,{cursor:this.cursor_,formatter:e.formatter,rows:e.rows,props:this.props,value:this.value,viewProps:this.viewProps}),!zu(t))this.view.element.addEventListener("mousemove",this.onGraphMouseMove_),this.view.element.addEventListener("mouseleave",this.onGraphMouseLeave_);else{const n=new Ar(this.view.element);n.emitter.on("down",this.onGraphPointerDown_),n.emitter.on("move",this.onGraphPointerMove_),n.emitter.on("up",this.onGraphPointerUp_)}}importProps(t){return xn(t,null,e=>({max:e.required.number,min:e.required.number}),e=>(this.props.set("max",e.max),this.props.set("min",e.min),!0))}exportProps(){return yn(null,{max:this.props.get("max"),min:this.props.get("min")})}onGraphMouseLeave_(){this.cursor_.rawValue=-1}onGraphMouseMove_(t){const{clientWidth:e}=this.view.element;this.cursor_.rawValue=Math.floor(Jt(t.offsetX,0,e,0,this.value.rawValue.length))}onGraphPointerDown_(t){this.onGraphPointerMove_(t)}onGraphPointerMove_(t){if(!t.data.point){this.cursor_.rawValue=-1;return}this.cursor_.rawValue=Math.floor(Jt(t.data.point.x,0,t.data.bounds.width,0,this.value.rawValue.length))}onGraphPointerUp_(){this.cursor_.rawValue=-1}}function Jc(i){return se(i.format)?un(2):i.format}function LR(i){var t;return i.value.rawValue.length===1?new oh(i.document,{formatter:Jc(i.params),value:i.value,viewProps:i.viewProps}):new sh(i.document,{formatter:Jc(i.params),rows:(t=i.params.rows)!==null&&t!==void 0?t:Oo.monitor.defaultRows,value:i.value,viewProps:i.viewProps})}function DR(i){var t,e,n;return new Ev(i.document,{formatter:Jc(i.params),rows:(t=i.params.rows)!==null&&t!==void 0?t:Oo.monitor.defaultRows,props:zt.fromObject({max:(e=i.params.max)!==null&&e!==void 0?e:100,min:(n=i.params.min)!==null&&n!==void 0?n:0}),value:i.value,viewProps:i.viewProps})}function jp(i){return i.view==="graph"}const IR=Ze({id:"monitor-number",type:"monitor",accept:(i,t)=>{if(typeof i!="number")return null;const e=fe(t,n=>({format:n.optional.function,max:n.optional.number,min:n.optional.number,readonly:n.required.constant(!0),rows:n.optional.number,view:n.optional.string}));return e?{initialValue:i,params:e}:null},binding:{defaultBufferSize:i=>jp(i)?64:1,reader:i=>T_},controller:i=>jp(i.params)?DR(i):LR(i),api:i=>i.controller.valueController instanceof Ev?new PR(i.controller):null}),OR=Ze({id:"monitor-string",type:"monitor",accept:(i,t)=>{if(typeof i!="string")return null;const e=fe(t,n=>({multiline:n.optional.boolean,readonly:n.required.constant(!0),rows:n.optional.number}));return e?{initialValue:i,params:e}:null},binding:{reader:i=>q_},controller:i=>{var t;const e=i.value;return e.rawValue.length>1||i.params.multiline?new sh(i.document,{formatter:Zc,rows:(t=i.params.rows)!==null&&t!==void 0?t:Oo.monitor.defaultRows,value:e,viewProps:i.viewProps}):new oh(i.document,{formatter:Zc,value:e,viewProps:i.viewProps})}});class UR{constructor(){this.map_=new Map}get(t){var e;return(e=this.map_.get(t))!==null&&e!==void 0?e:null}has(t){return this.map_.has(t)}add(t,e){return this.map_.set(t,e),t.viewProps.handleDispose(()=>{this.map_.delete(t)}),e}}class NR{constructor(t){this.target=t.target,this.reader_=t.reader,this.writer_=t.writer}read(){return this.reader_(this.target.read())}write(t){this.writer_(this.target,t)}inject(t){this.write(this.reader_(t))}}function FR(i,t){var e;const n=i.accept(t.target.read(),t.params);if(se(n))return null;const r={target:t.target,initialValue:n.initialValue,params:n.params},s=fe(t.params,h=>({disabled:h.optional.boolean,hidden:h.optional.boolean,label:h.optional.string,tag:h.optional.string})),a=i.binding.reader(r),o=i.binding.constraint?i.binding.constraint(r):void 0,l=new NR({reader:a,target:t.target,writer:i.binding.writer(r)}),c=new wA(ue(a(n.initialValue),{constraint:o,equals:i.binding.equals}),l),u=i.controller({constraint:o,document:t.document,initialValue:n.initialValue,params:n.params,value:c,viewProps:bi.create({disabled:s==null?void 0:s.disabled,hidden:s==null?void 0:s.hidden})});return new FA(t.document,{blade:Cs(),props:zt.fromObject({label:"label"in t.params?(e=s==null?void 0:s.label)!==null&&e!==void 0?e:null:t.target.key}),tag:s==null?void 0:s.tag,value:c,valueController:u})}class BR{constructor(t){this.target=t.target,this.reader_=t.reader}read(){return this.reader_(this.target.read())}}function kR(i,t){return t===0?new b1:new x1(i,t??Oo.monitor.defaultInterval)}function zR(i,t){var e,n,r;const s=i.accept(t.target.read(),t.params);if(se(s))return null;const a={target:t.target,initialValue:s.initialValue,params:s.params},o=fe(t.params,d=>({bufferSize:d.optional.number,disabled:d.optional.boolean,hidden:d.optional.boolean,interval:d.optional.number,label:d.optional.string})),l=i.binding.reader(a),c=(n=(e=o==null?void 0:o.bufferSize)!==null&&e!==void 0?e:i.binding.defaultBufferSize&&i.binding.defaultBufferSize(s.params))!==null&&n!==void 0?n:1,u=new HA({binding:new BR({reader:l,target:t.target}),bufferSize:c,ticker:kR(t.document,o==null?void 0:o.interval)}),h=i.controller({document:t.document,params:s.params,value:u,viewProps:bi.create({disabled:o==null?void 0:o.disabled,hidden:o==null?void 0:o.hidden})});return h.viewProps.bindDisabled(u.ticker),h.viewProps.handleDispose(()=>{u.ticker.dispose()}),new WA(t.document,{blade:Cs(),props:zt.fromObject({label:"label"in t.params?(r=o==null?void 0:o.label)!==null&&r!==void 0?r:null:t.target.key}),value:u,valueController:h})}class VR{constructor(t){this.pluginsMap_={blades:[],inputs:[],monitors:[]},this.apiCache_=t}getAll(){return[...this.pluginsMap_.blades,...this.pluginsMap_.inputs,...this.pluginsMap_.monitors]}register(t,e){if(!I1(e.core))throw ve.notCompatible(t,e.id);e.type==="blade"?this.pluginsMap_.blades.unshift(e):e.type==="input"?this.pluginsMap_.inputs.unshift(e):e.type==="monitor"&&this.pluginsMap_.monitors.unshift(e)}createInput_(t,e,n){return this.pluginsMap_.inputs.reduce((r,s)=>r??FR(s,{document:t,target:e,params:n}),null)}createMonitor_(t,e,n){return this.pluginsMap_.monitors.reduce((r,s)=>r??zR(s,{document:t,params:n,target:e}),null)}createBinding(t,e,n){const r=e.read();if(se(r))throw new ve({context:{key:e.key},type:"nomatchingcontroller"});const s=this.createInput_(t,e,n);if(s)return s;const a=this.createMonitor_(t,e,n);if(a)return a;throw new ve({context:{key:e.key},type:"nomatchingcontroller"})}createBlade(t,e){const n=this.pluginsMap_.blades.reduce((r,s)=>r??g1(s,{document:t,params:e}),null);if(!n)throw new ve({type:"nomatchingview",context:{params:e}});return n}createInputBindingApi_(t){const e=this.pluginsMap_.inputs.reduce((n,r)=>{var s,a;return n||((a=(s=r.api)===null||s===void 0?void 0:s.call(r,{controller:t}))!==null&&a!==void 0?a:null)},null);return this.apiCache_.add(t,e??new _o(t))}createMonitorBindingApi_(t){const e=this.pluginsMap_.monitors.reduce((n,r)=>{var s,a;return n||((a=(s=r.api)===null||s===void 0?void 0:s.call(r,{controller:t}))!==null&&a!==void 0?a:null)},null);return this.apiCache_.add(t,e??new _o(t))}createBindingApi(t){if(this.apiCache_.has(t))return this.apiCache_.get(t);if(BA(t))return this.createInputBindingApi_(t);if(XA(t))return this.createMonitorBindingApi_(t);throw ve.shouldNeverHappen()}createApi(t){if(this.apiCache_.has(t))return this.apiCache_.get(t);if(NA(t))return this.createBindingApi(t);const e=this.pluginsMap_.blades.reduce((n,r)=>n??r.api({controller:t,pool:this}),null);if(!e)throw ve.shouldNeverHappen();return this.apiCache_.add(t,e)}}const HR=new UR;function GR(){const i=new VR(HR);return[mR,bR,ER,SR,sR,tR,QP,qP,F1,AR,OR,IR,KA,c1,X_].forEach(t=>{i.register("core",t)}),i}class WR extends Cr{constructor(t){super(t),this.emitter_=new Se,this.controller.value.emitter.on("change",e=>{this.emitter_.emit("change",new To(this,e.rawValue))})}get label(){return this.controller.labelController.props.get("label")}set label(t){this.controller.labelController.props.set("label",t)}get options(){return this.controller.valueController.props.get("options")}set options(t){this.controller.valueController.props.set("options",t)}get value(){return this.controller.value.rawValue}set value(t){this.controller.value.rawValue=t}on(t,e){const n=e.bind(this);return this.emitter_.on(t,r=>{n(r)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}}class XR extends Cr{}class $R extends Cr{constructor(t){super(t),this.emitter_=new Se,this.controller.value.emitter.on("change",e=>{this.emitter_.emit("change",new To(this,e.rawValue))})}get label(){return this.controller.labelController.props.get("label")}set label(t){this.controller.labelController.props.set("label",t)}get max(){return this.controller.valueController.sliderController.props.get("max")}set max(t){this.controller.valueController.sliderController.props.set("max",t)}get min(){return this.controller.valueController.sliderController.props.get("min")}set min(t){this.controller.valueController.sliderController.props.set("min",t)}get value(){return this.controller.value.rawValue}set value(t){this.controller.value.rawValue=t}on(t,e){const n=e.bind(this);return this.emitter_.on(t,r=>{n(r)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}}class jR extends Cr{constructor(t){super(t),this.emitter_=new Se,this.controller.value.emitter.on("change",e=>{this.emitter_.emit("change",new To(this,e.rawValue))})}get label(){return this.controller.labelController.props.get("label")}set label(t){this.controller.labelController.props.set("label",t)}get formatter(){return this.controller.valueController.props.get("formatter")}set formatter(t){this.controller.valueController.props.set("formatter",t)}get value(){return this.controller.value.rawValue}set value(t){this.controller.value.rawValue=t}on(t,e){const n=e.bind(this);return this.emitter_.on(t,r=>{n(r)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}}const qR=function(){return{id:"list",type:"blade",core:Ts,accept(i){const t=fe(i,e=>({options:e.required.custom(Ro),value:e.required.raw,view:e.required.constant("list"),label:e.optional.string}));return t?{params:t}:null},controller(i){const t=new Po(qu(i.params.options)),e=ue(i.params.value,{constraint:t}),n=new Wi(i.document,{props:new zt({options:t.values.value("options")}),value:e,viewProps:i.viewProps});return new wr(i.document,{blade:i.blade,props:zt.fromObject({label:i.params.label}),value:e,valueController:n})},api(i){return!(i.controller instanceof wr)||!(i.controller.valueController instanceof Wi)?null:new WR(i.controller)}}}();class YR extends G_{constructor(t,e){super(t,e)}get element(){return this.controller.view.element}}class KR extends Yc{constructor(t,e){super(t,{expanded:e.expanded,blade:e.blade,props:e.props,root:!0,viewProps:e.viewProps})}}const qp=jt("spr");class ZR{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(qp()),e.viewProps.bindClassModifiers(this.element);const n=t.createElement("hr");n.classList.add(qp("r")),this.element.appendChild(n)}}class Yp extends nl{constructor(t,e){super(Object.assign(Object.assign({},e),{view:new ZR(t,{viewProps:e.viewProps})}))}}const JR={id:"separator",type:"blade",core:Ts,accept(i){const t=fe(i,e=>({view:e.required.constant("separator")}));return t?{params:t}:null},controller(i){return new Yp(i.document,{blade:i.blade,viewProps:i.viewProps})},api(i){return i.controller instanceof Yp?new XR(i.controller):null}},QR={id:"slider",type:"blade",core:Ts,accept(i){const t=fe(i,e=>({max:e.required.number,min:e.required.number,view:e.required.constant("slider"),format:e.optional.function,label:e.optional.string,value:e.optional.number}));return t?{params:t}:null},controller(i){var t,e;const n=(t=i.params.value)!==null&&t!==void 0?t:0,r=new So({max:i.params.max,min:i.params.min}),s=ue(n,{constraint:r}),a=new Ga(i.document,Object.assign(Object.assign({},K_({formatter:(e=i.params.format)!==null&&e!==void 0?e:vA,keyScale:ue(1),max:r.values.value("max"),min:r.values.value("min"),pointerScale:P_(i.params,n)})),{parser:_i,value:s,viewProps:i.viewProps}));return new wr(i.document,{blade:i.blade,props:zt.fromObject({label:i.params.label}),value:s,valueController:a})},api(i){return!(i.controller instanceof wr)||!(i.controller.valueController instanceof Ga)?null:new $R(i.controller)}},tL=function(){return{id:"text",type:"blade",core:Ts,accept(i){const t=fe(i,e=>({parse:e.required.function,value:e.required.raw,view:e.required.constant("text"),format:e.optional.function,label:e.optional.string}));return t?{params:t}:null},controller(i){var t;const e=ue(i.params.value),n=new vo(i.document,{parser:i.params.parse,props:zt.fromObject({formatter:(t=i.params.format)!==null&&t!==void 0?t:r=>String(r)}),value:e,viewProps:i.viewProps});return new wr(i.document,{blade:i.blade,props:zt.fromObject({label:i.params.label}),value:e,valueController:n})},api(i){return!(i.controller instanceof wr)||!(i.controller.valueController instanceof vo)?null:new jR(i.controller)}}}();function eL(i){const t=i.createElement("div");return t.classList.add(jt("dfw")()),i.body&&i.body.appendChild(t),t}function nL(i,t,e){if(i.querySelector(`style[data-tp-style=${t}]`))return;const n=i.createElement("style");n.dataset.tpStyle=t,n.textContent=e,i.head.appendChild(n)}class iL extends YR{constructor(t){var e,n;const r=t??{},s=(e=r.document)!==null&&e!==void 0?e:PA(),a=GR(),o=new KR(s,{expanded:r.expanded,blade:Cs(),props:zt.fromObject({title:r.title}),viewProps:bi.create()});super(o,a),this.pool_=a,this.containerElem_=(n=r.container)!==null&&n!==void 0?n:eL(s),this.containerElem_.appendChild(this.element),this.doc_=s,this.usesDefaultWrapper_=!r.container,this.setUpDefaultPlugins_()}get document(){if(!this.doc_)throw ve.alreadyDisposed();return this.doc_}dispose(){const t=this.containerElem_;if(!t)throw ve.alreadyDisposed();if(this.usesDefaultWrapper_){const e=t.parentElement;e&&e.removeChild(t)}this.containerElem_=null,this.doc_=null,super.dispose()}registerPlugin(t){t.css&&nL(this.document,`plugin-${t.id}`,t.css),("plugin"in t?[t.plugin]:"plugins"in t?t.plugins:[]).forEach(n=>{this.pool_.register(t.id,n)})}setUpDefaultPlugins_(){this.registerPlugin({id:"default",css:'.tp-tbiv_b,.tp-coltxtv_ms,.tp-colswv_b,.tp-ckbv_i,.tp-sglv_i,.tp-mllv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-rotv_b,.tp-fldv_b,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--bld-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--cnt-usz);line-height:var(--cnt-usz);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tbpv_c>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-vp))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tbpv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tbpv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tbpv_c>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--cnt-usp)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tbpv_c>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tbpv_c>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-vp)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tbpv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tbpv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-vp)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tbpv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tbpv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tbpv_c>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tbpv_c>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--bld-br);border-bottom-left-radius:var(--bld-br)}.tp-tbpv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tbpv_c .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--bld-br)}.tp-tbpv_c>.tp-cntv+.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-cntv+.tp-fldv>.tp-fldv_b{border-top-left-radius:0}.tp-tbpv_c>.tp-cntv+.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-cntv+.tp-tabv>.tp-tabv_t{border-top-left-radius:0}.tp-tbpv_c>.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-tabv>.tp-tabv_t{border-top-left-radius:var(--bld-br)}.tp-tbpv_c .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--bld-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--cnt-usz) + 4px);line-height:calc(var(--cnt-usz) + 4px);overflow:hidden;padding-left:var(--cnt-hp);padding-right:calc(4px + var(--cnt-usz) + var(--cnt-hp));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-hp) + (var(--cnt-usz) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-vp);padding-top:var(--cnt-vp);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--bld-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--cnt-usz);line-height:var(--cnt-usz);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-sglv_i,.tp-mllv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--bld-br);box-sizing:border-box;color:var(--mo-fg);height:var(--cnt-usz);scrollbar-color:currentColor rgba(0,0,0,0);scrollbar-width:thin;width:100%}.tp-sglv_i::-webkit-scrollbar,.tp-mllv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-sglv_i::-webkit-scrollbar-corner,.tp-mllv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0)}.tp-sglv_i::-webkit-scrollbar-thumb,.tp-mllv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:rgba(0,0,0,0) solid 2px;border-radius:4px}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-rotv{--bs-bg: var(--tp-base-background-color, hsl(230, 7%, 17%));--bs-br: var(--tp-base-border-radius, 6px);--bs-ff: var(--tp-base-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--bld-br: var(--tp-blade-border-radius, 2px);--bld-hp: var(--tp-blade-horizontal-padding, 4px);--bld-vw: var(--tp-blade-value-width, 160px);--btn-bg: var(--tp-button-background-color, hsl(230, 7%, 70%));--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, hsl(230, 7%, 17%));--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, hsl(230, 7%, 75%));--cnt-hp: var(--tp-container-horizontal-padding, 4px);--cnt-vp: var(--tp-container-vertical-padding, 4px);--cnt-usp: var(--tp-container-unit-spacing, 4px);--cnt-usz: var(--tp-container-unit-size, 20px);--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, hsl(230, 7%, 75%));--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--bld-br);cursor:pointer;display:block;height:var(--cnt-usz);position:relative;width:var(--cnt-usz)}.tp-ckbv_w svg{bottom:0;display:block;height:16px;left:0;margin:auto;opacity:0;position:absolute;right:0;top:0;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--cnt-usz)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-expanded.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--cnt-usp);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-hp));right:calc(-1*var(--cnt-hp));top:var(--cnt-usz)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--cnt-usp)}.tp-colpv_rgb{display:flex;margin-top:var(--cnt-usp);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-vp);padding-top:calc(var(--cnt-vp) + 2px);position:relative}.tp-colpv_a::before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-hp));position:absolute;right:calc(-1*var(--cnt-hp));top:0}.tp-colpv.tp-v-disabled .tp-colpv_a::before{opacity:.5}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--bld-br);outline:none;overflow:hidden;position:relative}.tp-svpv.tp-v-disabled{opacity:.5}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--cnt-usz)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--cnt-usz);outline:none;position:relative}.tp-hplv.tp-v-disabled{opacity:.5}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--bld-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--cnt-usz);outline:none;position:relative;width:100%}.tp-aplv.tp-v-disabled{opacity:.5}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--bld-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;pointer-events:none;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--bld-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--bld-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{cursor:pointer;display:block;height:var(--cnt-usz);left:0;position:absolute;top:0;width:var(--cnt-usz)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--bld-br);bottom:0;content:"";display:block;left:0;position:absolute;right:0;top:0}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--bld-br);color:var(--lbl-fg);cursor:pointer;height:var(--cnt-usz);line-height:var(--cnt-usz);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv.tp-v-disabled .tp-coltxtv_mm{opacity:.5}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv{position:relative}.tp-fldv_t{padding-left:4px}.tp-fldv_b:disabled .tp-fldv_m{display:none}.tp-fldv_c{padding-left:4px}.tp-fldv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--cnt-usz) + 4px);width:max(var(--bs-br),4px)}.tp-fldv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-fldv_b:hover+.tp-fldv_i{color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_i{color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_i{color:var(--cnt-bg-a)}.tp-fldv.tp-v-disabled>.tp-fldv_i{opacity:.5}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--cnt-usz)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-hp);padding-right:var(--cnt-hp)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:var(--bld-vw)}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 var(--bld-hp);width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding-left:var(--bld-hp);padding-right:var(--bld-hp)}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--cnt-usz)*3);line-height:var(--cnt-usz);padding-left:var(--bld-hp);padding-right:var(--bld-hp);resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--cnt-usz);margin-right:4px;position:relative;width:var(--cnt-usz)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--cnt-usp);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-hp));right:calc(-1*var(--cnt-hp));top:var(--cnt-usz)}.tp-p2dpv{padding-left:calc(var(--cnt-usz) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv.tp-v-disabled .tp-p2dpv_p{opacity:.5}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:var(--bld-vw);padding:var(--cnt-vp) var(--cnt-hp);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--cnt-usz);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin:auto;position:absolute;right:0;top:0}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin-bottom:auto;margin-top:auto;position:absolute;right:0;top:0}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--bld-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv{position:relative}.tp-tabv_t{align-items:flex-end;color:var(--cnt-bg);display:flex;overflow:hidden;position:relative}.tp-tabv_t:hover{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus){color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active){color:var(--cnt-bg-a)}.tp-tabv_t::before{background-color:currentColor;bottom:0;content:"";height:2px;left:0;pointer-events:none;position:absolute;right:0}.tp-tabv.tp-v-disabled .tp-tabv_t::before{opacity:.5}.tp-tabv.tp-tabv-nop .tp-tabv_t{height:calc(var(--cnt-usz) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_t::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--cnt-usz) + 4px);width:max(var(--bs-br),4px)}.tp-tabv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-tabv_t:hover+.tp-tabv_i{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus)+.tp-tabv_i{color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active)+.tp-tabv_i{color:var(--cnt-bg-a)}.tp-tabv.tp-v-disabled>.tp-tabv_i{opacity:.5}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv.tp-v-disabled::before{opacity:.5}.tp-tbiv_b{display:block;padding-left:calc(var(--cnt-hp) + 4px);padding-right:calc(var(--cnt-hp) + 4px);position:relative;width:100%}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_b::before{background-color:var(--cnt-bg);bottom:2px;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.tp-tbiv_b:hover::before{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus::before{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active::before{background-color:var(--cnt-bg-a)}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--cnt-usz) + 4px);line-height:calc(var(--cnt-usz) + 4px);opacity:.5;overflow:hidden;position:relative;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-tbpv_c{padding-bottom:var(--cnt-vp);padding-left:4px;padding-top:var(--cnt-vp)}.tp-txtv{position:relative}.tp-txtv_i{padding-left:var(--bld-hp);padding-right:var(--bld-hp)}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:calc(var(--bld-hp) - 5px);position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--cnt-usz) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--bld-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--bs-ff);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--cnt-usz) + var(--cnt-hp));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0;transition-delay:0s;transition-duration:0s}.tp-rotv.tp-rotv-not>.tp-rotv_b{display:none}.tp-rotv_b:disabled .tp-rotv_m{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst.tp-fldv-expanded>.tp-fldv_b{transition-delay:0s;transition-duration:0s}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-vp))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-vp))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_t{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sprv.tp-v-disabled .tp-sprv_r{opacity:.5}',plugins:[qR,JR,QR,X_,tL]})}}new H_("4.0.3");const Kp={type:"change"},lc={type:"start"},Zp={type:"end"},da=new Ru,Jp=new Pi,rL=Math.cos(70*_w.DEG2RAD);class sL extends Sr{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Rr.ROTATE,MIDDLE:Rr.DOLLY,RIGHT:Rr.PAN},this.touches={ONE:Lr.ROTATE,TWO:Lr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(R){R.addEventListener("keydown",Et),this._domElementKeyEvents=R},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Et),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Kp),n.update(),s=r.NONE},this.update=function(){const R=new I,rt=new xr().setFromUnitVectors(t.up,new I(0,1,0)),lt=rt.clone().invert(),bt=new I,A=new xr,nt=new I,Q=2*Math.PI;return function(yt=null){const qt=n.object.position;R.copy(qt).sub(n.target),R.applyQuaternion(rt),o.setFromVector3(R),n.autoRotate&&s===r.NONE&&G(b(yt)),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let Gt=n.minAzimuthAngle,ne=n.maxAzimuthAngle;isFinite(Gt)&&isFinite(ne)&&(Gt<-Math.PI?Gt+=Q:Gt>Math.PI&&(Gt-=Q),ne<-Math.PI?ne+=Q:ne>Math.PI&&(ne-=Q),Gt<=ne?o.theta=Math.max(Gt,Math.min(ne,o.theta)):o.theta=o.theta>(Gt+ne)/2?Math.max(Gt,o.theta):Math.min(ne,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&C||n.object.isOrthographicCamera?o.radius=Y(o.radius):o.radius=Y(o.radius*c),R.setFromSpherical(o),R.applyQuaternion(lt),qt.copy(n.target).add(R),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let Oe=!1;if(n.zoomToCursor&&C){let Yt=null;if(n.object.isPerspectiveCamera){const be=R.length();Yt=Y(be*c);const We=be-Yt;n.object.position.addScaledVector(w,We),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const be=new I(T.x,T.y,0);be.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Oe=!0;const We=new I(T.x,T.y,0);We.unproject(n.object),n.object.position.sub(We).add(be),n.object.updateMatrixWorld(),Yt=R.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Yt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Yt).add(n.object.position):(da.origin.copy(n.object.position),da.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(da.direction))<rL?t.lookAt(n.target):(Jp.setFromNormalAndCoplanarPoint(n.object.up,n.target),da.intersectPlane(Jp,n.target))))}else n.object.isOrthographicCamera&&(Oe=c!==1,Oe&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix()));return c=1,C=!1,Oe||bt.distanceToSquared(n.object.position)>a||8*(1-A.dot(n.object.quaternion))>a||nt.distanceToSquared(n.target)>0?(n.dispatchEvent(Kp),bt.copy(n.object.position),A.copy(n.object.quaternion),nt.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Zt),n.domElement.removeEventListener("pointerdown",S),n.domElement.removeEventListener("pointercancel",B),n.domElement.removeEventListener("wheel",et),n.domElement.removeEventListener("pointermove",x),n.domElement.removeEventListener("pointerup",B),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Et),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new wp,l=new wp;let c=1;const u=new I,h=new Lt,d=new Lt,m=new Lt,v=new Lt,_=new Lt,p=new Lt,f=new Lt,y=new Lt,g=new Lt,w=new I,T=new Lt;let C=!1;const M=[],D={};let N=!1;function b(R){return R!==null?2*Math.PI/60*n.autoRotateSpeed*R:2*Math.PI/60/60*n.autoRotateSpeed}function P(R){const rt=Math.abs(R*.01);return Math.pow(.95,n.zoomSpeed*rt)}function G(R){l.theta-=R}function $(R){l.phi-=R}const L=function(){const R=new I;return function(lt,bt){R.setFromMatrixColumn(bt,0),R.multiplyScalar(-lt),u.add(R)}}(),k=function(){const R=new I;return function(lt,bt){n.screenSpacePanning===!0?R.setFromMatrixColumn(bt,1):(R.setFromMatrixColumn(bt,0),R.crossVectors(n.object.up,R)),R.multiplyScalar(lt),u.add(R)}}(),F=function(){const R=new I;return function(lt,bt){const A=n.domElement;if(n.object.isPerspectiveCamera){const nt=n.object.position;R.copy(nt).sub(n.target);let Q=R.length();Q*=Math.tan(n.object.fov/2*Math.PI/180),L(2*lt*Q/A.clientHeight,n.object.matrix),k(2*bt*Q/A.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(L(lt*(n.object.right-n.object.left)/n.object.zoom/A.clientWidth,n.object.matrix),k(bt*(n.object.top-n.object.bottom)/n.object.zoom/A.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function j(R){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=R:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function X(R){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=R:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function q(R,rt){if(!n.zoomToCursor)return;C=!0;const lt=n.domElement.getBoundingClientRect(),bt=R-lt.left,A=rt-lt.top,nt=lt.width,Q=lt.height;T.x=bt/nt*2-1,T.y=-(A/Q)*2+1,w.set(T.x,T.y,1).unproject(n.object).sub(n.object.position).normalize()}function Y(R){return Math.max(n.minDistance,Math.min(n.maxDistance,R))}function tt(R){h.set(R.clientX,R.clientY)}function st(R){q(R.clientX,R.clientX),f.set(R.clientX,R.clientY)}function Mt(R){v.set(R.clientX,R.clientY)}function H(R){d.set(R.clientX,R.clientY),m.subVectors(d,h).multiplyScalar(n.rotateSpeed);const rt=n.domElement;G(2*Math.PI*m.x/rt.clientHeight),$(2*Math.PI*m.y/rt.clientHeight),h.copy(d),n.update()}function K(R){y.set(R.clientX,R.clientY),g.subVectors(y,f),g.y>0?j(P(g.y)):g.y<0&&X(P(g.y)),f.copy(y),n.update()}function ht(R){_.set(R.clientX,R.clientY),p.subVectors(_,v).multiplyScalar(n.panSpeed),F(p.x,p.y),v.copy(_),n.update()}function wt(R){q(R.clientX,R.clientY),R.deltaY<0?X(P(R.deltaY)):R.deltaY>0&&j(P(R.deltaY)),n.update()}function St(R){let rt=!1;switch(R.code){case n.keys.UP:R.ctrlKey||R.metaKey||R.shiftKey?$(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(0,n.keyPanSpeed),rt=!0;break;case n.keys.BOTTOM:R.ctrlKey||R.metaKey||R.shiftKey?$(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(0,-n.keyPanSpeed),rt=!0;break;case n.keys.LEFT:R.ctrlKey||R.metaKey||R.shiftKey?G(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(n.keyPanSpeed,0),rt=!0;break;case n.keys.RIGHT:R.ctrlKey||R.metaKey||R.shiftKey?G(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(-n.keyPanSpeed,0),rt=!0;break}rt&&(R.preventDefault(),n.update())}function pt(R){if(M.length===1)h.set(R.pageX,R.pageY);else{const rt=ct(R),lt=.5*(R.pageX+rt.x),bt=.5*(R.pageY+rt.y);h.set(lt,bt)}}function $t(R){if(M.length===1)v.set(R.pageX,R.pageY);else{const rt=ct(R),lt=.5*(R.pageX+rt.x),bt=.5*(R.pageY+rt.y);v.set(lt,bt)}}function Rt(R){const rt=ct(R),lt=R.pageX-rt.x,bt=R.pageY-rt.y,A=Math.sqrt(lt*lt+bt*bt);f.set(0,A)}function U(R){n.enableZoom&&Rt(R),n.enablePan&&$t(R)}function Te(R){n.enableZoom&&Rt(R),n.enableRotate&&pt(R)}function xt(R){if(M.length==1)d.set(R.pageX,R.pageY);else{const lt=ct(R),bt=.5*(R.pageX+lt.x),A=.5*(R.pageY+lt.y);d.set(bt,A)}m.subVectors(d,h).multiplyScalar(n.rotateSpeed);const rt=n.domElement;G(2*Math.PI*m.x/rt.clientHeight),$(2*Math.PI*m.y/rt.clientHeight),h.copy(d)}function Ct(R){if(M.length===1)_.set(R.pageX,R.pageY);else{const rt=ct(R),lt=.5*(R.pageX+rt.x),bt=.5*(R.pageY+rt.y);_.set(lt,bt)}p.subVectors(_,v).multiplyScalar(n.panSpeed),F(p.x,p.y),v.copy(_)}function _t(R){const rt=ct(R),lt=R.pageX-rt.x,bt=R.pageY-rt.y,A=Math.sqrt(lt*lt+bt*bt);y.set(0,A),g.set(0,Math.pow(y.y/f.y,n.zoomSpeed)),j(g.y),f.copy(y);const nt=(R.pageX+rt.x)*.5,Q=(R.pageY+rt.y)*.5;q(nt,Q)}function oe(R){n.enableZoom&&_t(R),n.enablePan&&Ct(R)}function Dt(R){n.enableZoom&&_t(R),n.enableRotate&&xt(R)}function S(R){n.enabled!==!1&&(M.length===0&&(n.domElement.setPointerCapture(R.pointerId),n.domElement.addEventListener("pointermove",x),n.domElement.addEventListener("pointerup",B)),Bt(R),R.pointerType==="touch"?It(R):it(R))}function x(R){n.enabled!==!1&&(R.pointerType==="touch"?J(R):Z(R))}function B(R){switch(At(R),M.length){case 0:n.domElement.releasePointerCapture(R.pointerId),n.domElement.removeEventListener("pointermove",x),n.domElement.removeEventListener("pointerup",B),n.dispatchEvent(Zp),s=r.NONE;break;case 1:const rt=M[0],lt=D[rt];It({pointerId:rt,pageX:lt.x,pageY:lt.y});break}}function it(R){let rt;switch(R.button){case 0:rt=n.mouseButtons.LEFT;break;case 1:rt=n.mouseButtons.MIDDLE;break;case 2:rt=n.mouseButtons.RIGHT;break;default:rt=-1}switch(rt){case Rr.DOLLY:if(n.enableZoom===!1)return;st(R),s=r.DOLLY;break;case Rr.ROTATE:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enablePan===!1)return;Mt(R),s=r.PAN}else{if(n.enableRotate===!1)return;tt(R),s=r.ROTATE}break;case Rr.PAN:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enableRotate===!1)return;tt(R),s=r.ROTATE}else{if(n.enablePan===!1)return;Mt(R),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(lc)}function Z(R){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;H(R);break;case r.DOLLY:if(n.enableZoom===!1)return;K(R);break;case r.PAN:if(n.enablePan===!1)return;ht(R);break}}function et(R){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(R.preventDefault(),n.dispatchEvent(lc),wt(ft(R)),n.dispatchEvent(Zp))}function ft(R){const rt=R.deltaMode,lt={clientX:R.clientX,clientY:R.clientY,deltaY:R.deltaY};switch(rt){case 1:lt.deltaY*=16;break;case 2:lt.deltaY*=100;break}return R.ctrlKey&&!N&&(lt.deltaY*=10),lt}function at(R){R.key==="Control"&&(N=!0,n.domElement.getRootNode().addEventListener("keyup",dt,{passive:!0,capture:!0}))}function dt(R){R.key==="Control"&&(N=!1,n.domElement.getRootNode().removeEventListener("keyup",dt,{passive:!0,capture:!0}))}function Et(R){n.enabled===!1||n.enablePan===!1||St(R)}function It(R){switch(gt(R),M.length){case 1:switch(n.touches.ONE){case Lr.ROTATE:if(n.enableRotate===!1)return;pt(R),s=r.TOUCH_ROTATE;break;case Lr.PAN:if(n.enablePan===!1)return;$t(R),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case Lr.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;U(R),s=r.TOUCH_DOLLY_PAN;break;case Lr.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Te(R),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(lc)}function J(R){switch(gt(R),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;xt(R),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;Ct(R),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;oe(R),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Dt(R),n.update();break;default:s=r.NONE}}function Zt(R){n.enabled!==!1&&R.preventDefault()}function Bt(R){M.push(R.pointerId)}function At(R){delete D[R.pointerId];for(let rt=0;rt<M.length;rt++)if(M[rt]==R.pointerId){M.splice(rt,1);return}}function gt(R){let rt=D[R.pointerId];rt===void 0&&(rt=new Lt,D[R.pointerId]=rt),rt.set(R.pageX,R.pageY)}function ct(R){const rt=R.pointerId===M[0]?M[1]:M[0];return D[rt]}n.domElement.addEventListener("contextmenu",Zt),n.domElement.addEventListener("pointerdown",S),n.domElement.addEventListener("pointercancel",B),n.domElement.addEventListener("wheel",et,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",at,{passive:!0,capture:!0}),this.update()}}function oL(i,t){for(var e=-1,n=i==null?0:i.length,r=Array(n);++e<n;)r[e]=t(i[e],e,i);return r}var Mv=oL;function aL(){this.__data__=[],this.size=0}var lL=aL;function cL(i,t){return i===t||i!==i&&t!==t}var Sv=cL,uL=Sv;function hL(i,t){for(var e=i.length;e--;)if(uL(i[e][0],t))return e;return-1}var rl=hL,dL=rl,pL=Array.prototype,fL=pL.splice;function mL(i){var t=this.__data__,e=dL(t,i);if(e<0)return!1;var n=t.length-1;return e==n?t.pop():fL.call(t,e,1),--this.size,!0}var _L=mL,vL=rl;function gL(i){var t=this.__data__,e=vL(t,i);return e<0?void 0:t[e][1]}var bL=gL,xL=rl;function yL(i){return xL(this.__data__,i)>-1}var wL=yL,EL=rl;function ML(i,t){var e=this.__data__,n=EL(e,i);return n<0?(++this.size,e.push([i,t])):e[n][1]=t,this}var SL=ML,TL=lL,CL=_L,AL=bL,PL=wL,RL=SL;function Ps(i){var t=-1,e=i==null?0:i.length;for(this.clear();++t<e;){var n=i[t];this.set(n[0],n[1])}}Ps.prototype.clear=TL;Ps.prototype.delete=CL;Ps.prototype.get=AL;Ps.prototype.has=PL;Ps.prototype.set=RL;var sl=Ps,LL=sl;function DL(){this.__data__=new LL,this.size=0}var IL=DL;function OL(i){var t=this.__data__,e=t.delete(i);return this.size=t.size,e}var UL=OL;function NL(i){return this.__data__.get(i)}var FL=NL;function BL(i){return this.__data__.has(i)}var kL=BL,zL=gi,VL=zL["__core-js_shared__"],HL=VL,cc=HL,Qp=function(){var i=/[^.]+$/.exec(cc&&cc.keys&&cc.keys.IE_PROTO||"");return i?"Symbol(src)_1."+i:""}();function GL(i){return!!Qp&&Qp in i}var WL=GL,XL=Function.prototype,$L=XL.toString;function jL(i){if(i!=null){try{return $L.call(i)}catch{}try{return i+""}catch{}}return""}var Tv=jL,qL=Of,YL=WL,KL=su,ZL=Tv,JL=/[\\^$.*+?()[\]{}|]/g,QL=/^\[object .+?Constructor\]$/,t2=Function.prototype,e2=Object.prototype,n2=t2.toString,i2=e2.hasOwnProperty,r2=RegExp("^"+n2.call(i2).replace(JL,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function s2(i){if(!KL(i)||YL(i))return!1;var t=qL(i)?r2:QL;return t.test(ZL(i))}var o2=s2;function a2(i,t){return i==null?void 0:i[t]}var l2=a2,c2=o2,u2=l2;function h2(i,t){var e=u2(i,t);return c2(e)?e:void 0}var Rs=h2,d2=Rs,p2=gi,f2=d2(p2,"Map"),ah=f2,m2=Rs,_2=m2(Object,"create"),ol=_2,tf=ol;function v2(){this.__data__=tf?tf(null):{},this.size=0}var g2=v2;function b2(i){var t=this.has(i)&&delete this.__data__[i];return this.size-=t?1:0,t}var x2=b2,y2=ol,w2="__lodash_hash_undefined__",E2=Object.prototype,M2=E2.hasOwnProperty;function S2(i){var t=this.__data__;if(y2){var e=t[i];return e===w2?void 0:e}return M2.call(t,i)?t[i]:void 0}var T2=S2,C2=ol,A2=Object.prototype,P2=A2.hasOwnProperty;function R2(i){var t=this.__data__;return C2?t[i]!==void 0:P2.call(t,i)}var L2=R2,D2=ol,I2="__lodash_hash_undefined__";function O2(i,t){var e=this.__data__;return this.size+=this.has(i)?0:1,e[i]=D2&&t===void 0?I2:t,this}var U2=O2,N2=g2,F2=x2,B2=T2,k2=L2,z2=U2;function Ls(i){var t=-1,e=i==null?0:i.length;for(this.clear();++t<e;){var n=i[t];this.set(n[0],n[1])}}Ls.prototype.clear=N2;Ls.prototype.delete=F2;Ls.prototype.get=B2;Ls.prototype.has=k2;Ls.prototype.set=z2;var V2=Ls,ef=V2,H2=sl,G2=ah;function W2(){this.size=0,this.__data__={hash:new ef,map:new(G2||H2),string:new ef}}var X2=W2;function $2(i){var t=typeof i;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?i!=="__proto__":i===null}var j2=$2,q2=j2;function Y2(i,t){var e=i.__data__;return q2(t)?e[typeof t=="string"?"string":"hash"]:e.map}var al=Y2,K2=al;function Z2(i){var t=K2(this,i).delete(i);return this.size-=t?1:0,t}var J2=Z2,Q2=al;function tD(i){return Q2(this,i).get(i)}var eD=tD,nD=al;function iD(i){return nD(this,i).has(i)}var rD=iD,sD=al;function oD(i,t){var e=sD(this,i),n=e.size;return e.set(i,t),this.size+=e.size==n?0:1,this}var aD=oD,lD=X2,cD=J2,uD=eD,hD=rD,dD=aD;function Ds(i){var t=-1,e=i==null?0:i.length;for(this.clear();++t<e;){var n=i[t];this.set(n[0],n[1])}}Ds.prototype.clear=lD;Ds.prototype.delete=cD;Ds.prototype.get=uD;Ds.prototype.has=hD;Ds.prototype.set=dD;var lh=Ds,pD=sl,fD=ah,mD=lh,_D=200;function vD(i,t){var e=this.__data__;if(e instanceof pD){var n=e.__data__;if(!fD||n.length<_D-1)return n.push([i,t]),this.size=++e.size,this;e=this.__data__=new mD(n)}return e.set(i,t),this.size=e.size,this}var gD=vD,bD=sl,xD=IL,yD=UL,wD=FL,ED=kL,MD=gD;function Is(i){var t=this.__data__=new bD(i);this.size=t.size}Is.prototype.clear=xD;Is.prototype.delete=yD;Is.prototype.get=wD;Is.prototype.has=ED;Is.prototype.set=MD;var Cv=Is,SD="__lodash_hash_undefined__";function TD(i){return this.__data__.set(i,SD),this}var CD=TD;function AD(i){return this.__data__.has(i)}var PD=AD,RD=lh,LD=CD,DD=PD;function Wa(i){var t=-1,e=i==null?0:i.length;for(this.__data__=new RD;++t<e;)this.add(i[t])}Wa.prototype.add=Wa.prototype.push=LD;Wa.prototype.has=DD;var ID=Wa;function OD(i,t){for(var e=-1,n=i==null?0:i.length;++e<n;)if(t(i[e],e,i))return!0;return!1}var UD=OD;function ND(i,t){return i.has(t)}var FD=ND,BD=ID,kD=UD,zD=FD,VD=1,HD=2;function GD(i,t,e,n,r,s){var a=e&VD,o=i.length,l=t.length;if(o!=l&&!(a&&l>o))return!1;var c=s.get(i),u=s.get(t);if(c&&u)return c==t&&u==i;var h=-1,d=!0,m=e&HD?new BD:void 0;for(s.set(i,t),s.set(t,i);++h<o;){var v=i[h],_=t[h];if(n)var p=a?n(_,v,h,t,i,s):n(v,_,h,i,t,s);if(p!==void 0){if(p)continue;d=!1;break}if(m){if(!kD(t,function(f,y){if(!zD(m,y)&&(v===f||r(v,f,e,n,s)))return m.push(y)})){d=!1;break}}else if(!(v===_||r(v,_,e,n,s))){d=!1;break}}return s.delete(i),s.delete(t),d}var Av=GD,WD=gi,XD=WD.Uint8Array,$D=XD;function jD(i){var t=-1,e=Array(i.size);return i.forEach(function(n,r){e[++t]=[r,n]}),e}var qD=jD;function YD(i){var t=-1,e=Array(i.size);return i.forEach(function(n){e[++t]=n}),e}var KD=YD,nf=$a,rf=$D,ZD=Sv,JD=Av,QD=qD,tI=KD,eI=1,nI=2,iI="[object Boolean]",rI="[object Date]",sI="[object Error]",oI="[object Map]",aI="[object Number]",lI="[object RegExp]",cI="[object Set]",uI="[object String]",hI="[object Symbol]",dI="[object ArrayBuffer]",pI="[object DataView]",sf=nf?nf.prototype:void 0,uc=sf?sf.valueOf:void 0;function fI(i,t,e,n,r,s,a){switch(e){case pI:if(i.byteLength!=t.byteLength||i.byteOffset!=t.byteOffset)return!1;i=i.buffer,t=t.buffer;case dI:return!(i.byteLength!=t.byteLength||!s(new rf(i),new rf(t)));case iI:case rI:case aI:return ZD(+i,+t);case sI:return i.name==t.name&&i.message==t.message;case lI:case uI:return i==t+"";case oI:var o=QD;case cI:var l=n&eI;if(o||(o=tI),i.size!=t.size&&!l)return!1;var c=a.get(i);if(c)return c==t;n|=nI,a.set(i,t);var u=JD(o(i),o(t),n,r,s,a);return a.delete(i),u;case hI:if(uc)return uc.call(i)==uc.call(t)}return!1}var mI=fI;function _I(i,t){for(var e=-1,n=t.length,r=i.length;++e<n;)i[r+e]=t[e];return i}var vI=_I,gI=vI,bI=Kn;function xI(i,t,e){var n=t(i);return bI(i)?n:gI(n,e(i))}var yI=xI;function wI(i,t){for(var e=-1,n=i==null?0:i.length,r=0,s=[];++e<n;){var a=i[e];t(a,e,i)&&(s[r++]=a)}return s}var EI=wI;function MI(){return[]}var SI=MI,TI=EI,CI=SI,AI=Object.prototype,PI=AI.propertyIsEnumerable,of=Object.getOwnPropertySymbols,RI=of?function(i){return i==null?[]:(i=Object(i),TI(of(i),function(t){return PI.call(i,t)}))}:CI,LI=RI,DI=yI,II=LI,OI=au;function UI(i){return DI(i,OI,II)}var NI=UI,af=NI,FI=1,BI=Object.prototype,kI=BI.hasOwnProperty;function zI(i,t,e,n,r,s){var a=e&FI,o=af(i),l=o.length,c=af(t),u=c.length;if(l!=u&&!a)return!1;for(var h=l;h--;){var d=o[h];if(!(a?d in t:kI.call(t,d)))return!1}var m=s.get(i),v=s.get(t);if(m&&v)return m==t&&v==i;var _=!0;s.set(i,t),s.set(t,i);for(var p=a;++h<l;){d=o[h];var f=i[d],y=t[d];if(n)var g=a?n(y,f,d,t,i,s):n(f,y,d,i,t,s);if(!(g===void 0?f===y||r(f,y,e,n,s):g)){_=!1;break}p||(p=d=="constructor")}if(_&&!p){var w=i.constructor,T=t.constructor;w!=T&&"constructor"in i&&"constructor"in t&&!(typeof w=="function"&&w instanceof w&&typeof T=="function"&&T instanceof T)&&(_=!1)}return s.delete(i),s.delete(t),_}var VI=zI,HI=Rs,GI=gi,WI=HI(GI,"DataView"),XI=WI,$I=Rs,jI=gi,qI=$I(jI,"Promise"),YI=qI,KI=Rs,ZI=gi,JI=KI(ZI,"Set"),QI=JI,tO=Rs,eO=gi,nO=tO(eO,"WeakMap"),iO=nO,Qc=XI,tu=ah,eu=YI,nu=QI,iu=iO,Pv=xo,Os=Tv,lf="[object Map]",rO="[object Object]",cf="[object Promise]",uf="[object Set]",hf="[object WeakMap]",df="[object DataView]",sO=Os(Qc),oO=Os(tu),aO=Os(eu),lO=Os(nu),cO=Os(iu),ir=Pv;(Qc&&ir(new Qc(new ArrayBuffer(1)))!=df||tu&&ir(new tu)!=lf||eu&&ir(eu.resolve())!=cf||nu&&ir(new nu)!=uf||iu&&ir(new iu)!=hf)&&(ir=function(i){var t=Pv(i),e=t==rO?i.constructor:void 0,n=e?Os(e):"";if(n)switch(n){case sO:return df;case oO:return lf;case aO:return cf;case lO:return uf;case cO:return hf}return t});var uO=ir,hc=Cv,hO=Av,dO=mI,pO=VI,pf=uO,ff=Kn,mf=Lf,fO=If,mO=1,_f="[object Arguments]",vf="[object Array]",pa="[object Object]",_O=Object.prototype,gf=_O.hasOwnProperty;function vO(i,t,e,n,r,s){var a=ff(i),o=ff(t),l=a?vf:pf(i),c=o?vf:pf(t);l=l==_f?pa:l,c=c==_f?pa:c;var u=l==pa,h=c==pa,d=l==c;if(d&&mf(i)){if(!mf(t))return!1;a=!0,u=!1}if(d&&!u)return s||(s=new hc),a||fO(i)?hO(i,t,e,n,r,s):dO(i,t,l,e,n,r,s);if(!(e&mO)){var m=u&&gf.call(i,"__wrapped__"),v=h&&gf.call(t,"__wrapped__");if(m||v){var _=m?i.value():i,p=v?t.value():t;return s||(s=new hc),r(_,p,e,n,s)}}return d?(s||(s=new hc),pO(i,t,e,n,r,s)):!1}var gO=vO,bO=gO,bf=yo;function Rv(i,t,e,n,r){return i===t?!0:i==null||t==null||!bf(i)&&!bf(t)?i!==i&&t!==t:bO(i,t,e,n,Rv,r)}var Lv=Rv,xO=Cv,yO=Lv,wO=1,EO=2;function MO(i,t,e,n){var r=e.length,s=r,a=!n;if(i==null)return!s;for(i=Object(i);r--;){var o=e[r];if(a&&o[2]?o[1]!==i[o[0]]:!(o[0]in i))return!1}for(;++r<s;){o=e[r];var l=o[0],c=i[l],u=o[1];if(a&&o[2]){if(c===void 0&&!(l in i))return!1}else{var h=new xO;if(n)var d=n(c,u,l,i,t,h);if(!(d===void 0?yO(u,c,wO|EO,n,h):d))return!1}}return!0}var SO=MO,TO=su;function CO(i){return i===i&&!TO(i)}var Dv=CO,AO=Dv,PO=au;function RO(i){for(var t=PO(i),e=t.length;e--;){var n=t[e],r=i[n];t[e]=[n,r,AO(r)]}return t}var LO=RO;function DO(i,t){return function(e){return e==null?!1:e[i]===t&&(t!==void 0||i in Object(e))}}var Iv=DO,IO=SO,OO=LO,UO=Iv;function NO(i){var t=OO(i);return t.length==1&&t[0][2]?UO(t[0][0],t[0][1]):function(e){return e===i||IO(e,i,t)}}var FO=NO,BO=xo,kO=yo,zO="[object Symbol]";function VO(i){return typeof i=="symbol"||kO(i)&&BO(i)==zO}var ch=VO,HO=Kn,GO=ch,WO=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,XO=/^\w*$/;function $O(i,t){if(HO(i))return!1;var e=typeof i;return e=="number"||e=="symbol"||e=="boolean"||i==null||GO(i)?!0:XO.test(i)||!WO.test(i)||t!=null&&i in Object(t)}var uh=$O,Ov=lh,jO="Expected a function";function hh(i,t){if(typeof i!="function"||t!=null&&typeof t!="function")throw new TypeError(jO);var e=function(){var n=arguments,r=t?t.apply(this,n):n[0],s=e.cache;if(s.has(r))return s.get(r);var a=i.apply(this,n);return e.cache=s.set(r,a)||s,a};return e.cache=new(hh.Cache||Ov),e}hh.Cache=Ov;var qO=hh,YO=qO,KO=500;function ZO(i){var t=YO(i,function(n){return e.size===KO&&e.clear(),n}),e=t.cache;return t}var JO=ZO,QO=JO,tU=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,eU=/\\(\\)?/g,nU=QO(function(i){var t=[];return i.charCodeAt(0)===46&&t.push(""),i.replace(tU,function(e,n,r,s){t.push(r?s.replace(eU,"$1"):n||e)}),t}),iU=nU,xf=$a,rU=Mv,sU=Kn,oU=ch,aU=1/0,yf=xf?xf.prototype:void 0,wf=yf?yf.toString:void 0;function Uv(i){if(typeof i=="string")return i;if(sU(i))return rU(i,Uv)+"";if(oU(i))return wf?wf.call(i):"";var t=i+"";return t=="0"&&1/i==-aU?"-0":t}var lU=Uv,cU=lU;function uU(i){return i==null?"":cU(i)}var hU=uU,dU=Kn,pU=uh,fU=iU,mU=hU;function _U(i,t){return dU(i)?i:pU(i,t)?[i]:fU(mU(i))}var Nv=_U,vU=ch,gU=1/0;function bU(i){if(typeof i=="string"||vU(i))return i;var t=i+"";return t=="0"&&1/i==-gU?"-0":t}var ll=bU,xU=Nv,yU=ll;function wU(i,t){t=xU(t,i);for(var e=0,n=t.length;i!=null&&e<n;)i=i[yU(t[e++])];return e&&e==n?i:void 0}var Fv=wU,EU=Fv;function MU(i,t,e){var n=i==null?void 0:EU(i,t);return n===void 0?e:n}var SU=MU;function TU(i,t){return i!=null&&t in Object(i)}var CU=TU,AU=Nv,PU=Rf,RU=Kn,LU=Df,DU=ru,IU=ll;function OU(i,t,e){t=AU(t,i);for(var n=-1,r=t.length,s=!1;++n<r;){var a=IU(t[n]);if(!(s=i!=null&&e(i,a)))break;i=i[a]}return s||++n!=r?s:(r=i==null?0:i.length,!!r&&DU(r)&&LU(a,r)&&(RU(i)||PU(i)))}var UU=OU,NU=CU,FU=UU;function BU(i,t){return i!=null&&FU(i,t,NU)}var kU=BU,zU=Lv,VU=SU,HU=kU,GU=uh,WU=Dv,XU=Iv,$U=ll,jU=1,qU=2;function YU(i,t){return GU(i)&&WU(t)?XU($U(i),t):function(e){var n=VU(e,i);return n===void 0&&n===t?HU(e,i):zU(t,n,jU|qU)}}var KU=YU;function ZU(i){return function(t){return t==null?void 0:t[i]}}var JU=ZU,QU=Fv;function t3(i){return function(t){return QU(t,i)}}var e3=t3,n3=JU,i3=e3,r3=uh,s3=ll;function o3(i){return r3(i)?n3(s3(i)):i3(i)}var a3=o3,l3=FO,c3=KU,u3=Nf,h3=Kn,d3=a3;function p3(i){return typeof i=="function"?i:i==null?u3:typeof i=="object"?h3(i)?c3(i[0],i[1]):l3(i):d3(i)}var f3=p3,m3=Uf,_3=ou;function v3(i,t){var e=-1,n=_3(i)?Array(i.length):[];return m3(i,function(r,s,a){n[++e]=t(r,s,a)}),n}var g3=v3,b3=Mv,x3=f3,y3=g3,w3=Kn;function E3(i,t){var e=w3(i)?b3:y3;return e(i,x3(t))}var M3=E3;const S3=Xa(M3);var T3=`precision mediump float;

const float PI = 3.1415926535897932384626433832795;\r
const float goldenAngle = PI * (3.0 - sqrt(5.0));

attribute float aInstanceIndex;

uniform mat4 uProjectorModelMatrix;\r
uniform mat4 uProjectorViewMatrix;\r
uniform mat4 uProjectorProjectionMatrix;

uniform float uCount;\r
uniform float uTime;\r
uniform float uProgress;\r
uniform float uAnimation01;\r
uniform float uAnimation02;\r
uniform float uAnimation03;\r
uniform float uAnimation04;

uniform bool uIsMobile;

varying vec2 vUv;\r
varying vec3 vNormal;\r
varying vec4 vTexCoords;\r
varying vec4 vWorldPosition;

vec4 rotateY(vec4 position, float angle) {\r
  float s = sin(angle);\r
  float c = cos(angle);\r
  mat4 rotationMatrix = mat4(c, 0.0, -s, 0.0, 0.0, 1.0, 0.0, 0.0, s, 0.0, c, 0.0, 0.0, 0.0, 0.0, 1.0);\r
  return rotationMatrix * position;\r
}

vec4 rotateZ(vec4 position, float angle) {\r
  float s = sin(angle);\r
  float c = cos(angle);\r
  mat4 rotationMatrix = mat4(c, s, 0.0, 0.0, -s, c, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0);\r
  return rotationMatrix * position;\r
}

vec4 calcScaling(vec4 position, float scale) {\r
  mat4 scalingMatrix = mat4(scale, 0.0, 0.0, 0.0, 0.0, scale, 0.0, 0.0, 0.0, 0.0, scale, 0.0, 0.0, 0.0, 0.0, 1.0);\r
  return scalingMatrix * position;\r
}

mat4 lookAt(vec3 source, vec3 target) {\r
  vec3 f = normalize(target - source);\r
  vec3 up = vec3(0.0, 1.0, 0.0);\r
  vec3 s = normalize(cross(up, f));\r
  vec3 u = cross(f, s);

  mat4 result = mat4(vec4(s, 0.0), vec4(u, 0.0), vec4(-f, 0.0), vec4(0.0, 0.0, 0.0, 1.0));

  return result;\r
}

vec3 calcSpherePos(float index, float radius) {\r
  float theta = index * goldenAngle;\r
  float phi = acos(1.0 - 2.0 * (index + 0.5) / uCount);\r
  float x = radius * sin(phi) * cos(theta);\r
  float y = radius * sin(phi) * sin(theta);\r
  float z = radius * cos(phi);\r
  return vec3(x, y, z);\r
}

vec2 calcPolygonPos(float n, float t, float radius) {\r
  float an = 2.0 * PI / n;\r
  float a = an * 0.5;\r
  float b = t / an;\r
  float x = cos(a) * cos(t) / cos(an * (b - floor(b)) - a) * radius;\r
  float y = cos(a) * sin(t) / cos(an * (b - floor(b)) - a) * radius;\r
  return vec2(x, y);\r
}

void main() {\r
  vUv = uv;

  

  vec4 projectionMappingPosition = instanceMatrix * vec4(position, 1.0);

  vNormal = normalize(normalMatrix * normal);

  vWorldPosition = projectionMappingPosition;

  vTexCoords = uProjectorProjectionMatrix * uProjectorViewMatrix * vWorldPosition;

  

  vec4 trianglePosition;

  float triangleWidth;\r
  float triangleSize;

  if(uIsMobile) {\r
    triangleWidth = 1.0;\r
    triangleSize = 0.08;\r
  } else {\r
    triangleWidth = 3.0;\r
    triangleSize = 0.1;\r
  }

  float numLayers_tri = 8.0;\r
  float layerHeightOffset_tri = 0.1;\r
  float layer_tri = floor(aInstanceIndex / (uCount / numLayers_tri));

  float indexInLayer = mod(aInstanceIndex, (uCount / numLayers_tri));

  float height = (layer_tri * layerHeightOffset_tri) - (numLayers_tri * layerHeightOffset_tri * 0.5);

  float radius = triangleWidth + (layer_tri * 0.2);

  float number_tri = 3.0;

  float t_tri = (2.0 * PI / (uCount / numLayers_tri)) * indexInLayer;

  vec4 originPos_tri = vec4(position, 1.0);

  vec4 translate_tri = vec4(calcPolygonPos(number_tri, t_tri, radius), height, 1.0);

  mat4 lookAtMatrix_tri = lookAt(translate_tri.xyz, vec3(0.0, 0.0, 0.0));

  vec4 rotatedPos_tri = lookAtMatrix_tri * originPos_tri;

  vec4 scaledPos_tri = calcScaling(rotatedPos_tri, triangleSize);

  vec4 result_tri = translate_tri + scaledPos_tri;

  trianglePosition = result_tri;

  

  vec4 squarePosition;

  float squareWidth;\r
  float squareSize;

  if(uIsMobile) {\r
    squareWidth = 1.5;\r
    squareSize = 0.08;\r
  } else {\r
    squareWidth = 2.5;\r
    squareSize = 0.1;\r
  }

  float numLayers_sq = 10.0;\r
  float layerHeightOffset_sq = 0.1;\r
  float layer_sq = floor(aInstanceIndex / (uCount / numLayers_sq));

  float indexInLayer_sq = mod(aInstanceIndex, (uCount / numLayers_sq));

  float height_sq = (layer_sq * layerHeightOffset_sq) - (numLayers_sq * layerHeightOffset_sq * 0.5);

  float radius_sq = squareWidth + (layer_sq * 0.2);

  float number_sq = 4.0; 

  float t_sq = (2.0 * PI / (uCount / numLayers_sq)) * indexInLayer_sq;

  vec4 originPos_sq = vec4(position, 1.0);

  vec4 translate_sq = vec4(calcPolygonPos(number_sq, t_sq, radius_sq), height_sq, 1.0);

  mat4 lookAtMatrix_sq = lookAt(translate_sq.xyz, vec3(0.0, 0.0, 0.0));

  vec4 rotatedPos_sq = lookAtMatrix_sq * originPos_sq;

  vec4 scaledPos_sq = calcScaling(rotatedPos_sq, squareSize);

  vec4 result_sq = translate_sq + scaledPos_sq;

  squarePosition = result_sq;

  

  float sphereRadius;\r
  float sphereSize;

  if(uIsMobile) {\r
    sphereRadius = 2.0;\r
    sphereSize = 0.08;\r
  } else {\r
    sphereRadius = 3.0;\r
    sphereSize = 0.1;\r
  }

  vec4 spherePosition;

  vec4 originPos_sphere = vec4(position, 1.0);

  vec4 translate_sphere = vec4(calcSpherePos(aInstanceIndex, sphereRadius), 1.0);

  vec4 scaledPos_sphere = calcScaling(originPos_sphere, sphereSize);

  mat4 lookAtMatrix = lookAt(translate_sphere.xyz, vec3(0.0, 0.0, 0.0));

  vec4 rotatedPos_sphere = lookAtMatrix * scaledPos_sphere;

  vec4 result_sphere = rotatedPos_sphere + translate_sphere;

  spherePosition = result_sphere;

  

  float rotationAngle = uTime * 0.1;

  spherePosition = rotateY(spherePosition, rotationAngle);

  trianglePosition = rotateY(trianglePosition, rotationAngle);

  squarePosition = rotateZ(squarePosition, PI / 4.0);

  squarePosition = rotateY(squarePosition, rotationAngle);

  

  vec4 resultPosition;

  vec4 resultPosition_projection = projectionMatrix * viewMatrix * projectionMappingPosition;

  vec4 resultPosition_triangle = projectionMatrix * viewMatrix * trianglePosition;

  vec4 resultPosition_square = projectionMatrix * viewMatrix * squarePosition;

  vec4 resultPosition_sphere = projectionMatrix * viewMatrix * spherePosition;

  

  vec4 mixPos1 = mix(resultPosition_square, resultPosition_projection, uAnimation01);

  vec4 mixPos2 = mix(mixPos1, resultPosition_sphere, uAnimation02);

  vec4 mixPos3 = mix(mixPos2, resultPosition_triangle, uAnimation03);

  vec4 mixPos4 = mix(mixPos3, resultPosition_square, uAnimation04);

  resultPosition = mixPos4;

  gl_Position = resultPosition;\r
}`,C3=`precision mediump float;

vec3 mod289(vec3 x) {\r
  return x - floor(x * (1.0 / 289.0)) * 289.0;\r
}

vec2 mod289(vec2 x) {\r
  return x - floor(x * (1.0 / 289.0)) * 289.0;\r
}

vec3 permute(vec3 x) {\r
  return mod289(((x * 34.0) + 1.0) * x);\r
}

float snoise(vec2 v) {\r
  const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);\r
  vec2 i = floor(v + dot(v, C.yy));\r
  vec2 x0 = v - i + dot(i, C.xx);

  vec2 i1;\r
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\r
  vec4 x12 = x0.xyxy + C.xxzz;\r
  x12.xy -= i1;

  i = mod289(i);\r
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));

  vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);\r
  m = m * m;\r
  m = m * m;

  vec3 x = 2.0 * fract(p * C.www) - 1.0;\r
  vec3 h = abs(x) - 0.5;\r
  vec3 ox = floor(x + 0.5);\r
  vec3 a0 = x - ox;

  m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);

  vec3 g;\r
  g.x = a0.x * x0.x + h.x * x0.y;\r
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;\r
  return 130.0 * dot(m, g);\r
}

uniform float uAlpha;\r
uniform sampler2D uTexture;\r
uniform vec3 uProjectorPosition;\r
uniform vec2 uResolution;

uniform float uTextureAspectX;\r
uniform float uTextureAspectY;\r
uniform float uProgress;\r
uniform float uAnimation01;\r
uniform float uAnimation02;\r
uniform float uAnimation03;\r
uniform float uAnimation04;

varying vec3 vNormal;\r
varying vec4 vWorldPosition;\r
varying vec4 vTexCoords;

varying vec2 vUv;

float triangleSDF(in vec2 p, in float r) {\r
  const float k = sqrt(3.0);\r
  p.x = abs(p.x) - r;\r
  p.y = p.y + r / k;\r
  if(p.x + k * p.y > 0.0)\r
    p = vec2(p.x - k * p.y, -k * p.x - p.y) / 2.0;\r
  p.x -= clamp(p.x, -2.0 * r, 0.0);\r
  return -length(p) * sign(p.y);\r
}

float circleSDF(vec2 st, vec2 resolution) {\r
  vec2 normalized = st;\r
  vec2 center = vec2(resolution / 2.0);\r
  return length(normalized - center);\r
}

void main() {

  vec2 uv_proj = (vTexCoords.xy / vTexCoords.w) * 0.5 + 0.5;

  uv_proj = uv_proj - vec2(0.5);\r
  uv_proj.x *= min(uTextureAspectX, 1.);\r
  uv_proj.y *= min(uTextureAspectY, 1.);\r
  uv_proj = uv_proj + vec2(0.5);

  vec4 projectionMapping = texture2D(uTexture, uv_proj);

  

  
  vec2 uv = vUv;

  vec2 coord = gl_FragCoord.xy / uResolution;

  float aspect = uResolution.x / uResolution.y;

  coord.x *= aspect;

  float circle = 1.0 - circleSDF(coord, vec2(aspect, 1.0));

  circle *= 2.0 * cos(circle * 2000.);

  vec3 red_circle = vec3(1.0, 0.0, 0.1);

  red_circle *= circle;

  vec4 color_01 = vec4(red_circle, 1.0);

  

  vec4 selectedColor;

  vec4 mixColor01 = mix(color_01, projectionMapping, uAnimation01);

  vec4 mixColor02 = mix(mixColor01, color_01, uAnimation02);

  vec4 mixColor03 = mix(mixColor02, color_01, uAnimation03);

  vec4 mixColor04 = mix(mixColor03, color_01, uAnimation04);

  selectedColor = mixColor04;

  gl_FragColor = selectedColor;

}`;class A3 extends jn{constructor({texture:t,instanceCount:e,device:n}){let r=t.source.data.width,s=t.source.data.height,a=r/s;const o=new tn(45,a,.01,5);o.position.set(0,0,5),o.lookAt(0,0,0),o.updateProjectionMatrix(),o.updateMatrixWorld(),o.updateWorldMatrix();const l=o.matrixWorldInverse.clone(),c=o.projectionMatrix.clone(),u=o.matrixWorld.clone(),h=o.position.clone();super({vertexShader:T3,fragmentShader:C3,side:Un,uniforms:{uTextureAspectX:{value:null},uTextureAspectY:{value:null},uTexture:{value:t},uProjectorProjectionMatrix:{value:c},uProjectorViewMatrix:{value:l},uProjectorModelMatrix:{value:u},uProjectorPosition:{value:h},uResolution:{value:new Lt(window.innerWidth,window.innerHeight)},uCount:{value:e},uAlpha:{value:1},uTime:{value:0},uProgress:{value:0},uAnimation01:{value:0},uAnimation02:{value:0},uAnimation03:{value:0},uAnimation04:{value:0},uIsMobile:{value:n==="sp"?1:0}}}),this.texture=t,this.device=n,this.projector=o}update(){}onResize(t){this.device=t.device;const e=new I(t.mesh.position.x+t.standardPositionX+t.scaleX/2-t.mesh.scale.x/2,t.mesh.position.y+t.standardPositionY-t.scaleY/2+t.mesh.scale.y/2,5);this.projector.position.set(e.x,e.y,e.z),this.projector.lookAt(e.x,e.y,0),this.projector.aspect=t.scaleX/t.scaleY;const n=t.scaleX/t.scaleY,r=t.scaleY/t.scaleX,s=this.projector.position.z,a=t.scaleY/2,o=Math.PI/180,l=Math.tan(a/s)*2/o;this.textureAspectX=this.texture.source.data.width/this.texture.source.data.height,this.textureAspectY=this.texture.source.data.height/this.texture.source.data.width,this.projector.fov=l,this.projector.updateProjectionMatrix(),this.projector.updateMatrixWorld(),this.projector.updateWorldMatrix(),this.uniforms.uProjectorProjectionMatrix.value=this.projector.projectionMatrix,this.uniforms.uProjectorViewMatrix.value=this.projector.matrixWorldInverse,this.uniforms.uProjectorModelMatrix.value=this.projector.matrixWorld,this.uniforms.uTextureAspectX.value=n/this.textureAspectX,this.uniforms.uTextureAspectY.value=r/this.textureAspectY,this.uniforms.uIsMobile.value=this.device==="sp"?1:0,this.uniforms.uResolution.value=new Lt(window.innerWidth,window.innerHeight)}}class P3{constructor({texture:t,element:e,sizes:n,device:r,instanceCount:s}){this.texture=t,this.instanceCount=s,this.createGeometry(),this.createMaterial(),this.sizes=n,this.element=e,this.device=r,this.texture=this.material.uniforms.uTexture.value,this.createMesh(),this.calculateBounds({sizes:this.sizes,device:this.device}),this.updateInstanceProperty()}createGeometry(){this.geometry=new Es(1,1,.25,10,10)}createMaterial(){this.material=new A3({texture:this.texture,instanceCount:this.instanceCount,device:this.device})}createMesh(){this.mesh=new AC(this.geometry,this.material,this.instanceCount)}calculateBounds({sizes:t,device:e}){this.sizes=t,this.device=e,this.bounds=this.element.getBoundingClientRect(),this.updateScale(),this.updateX(),this.updateY()}calclateMatrixToProjection(){const t=Math.sqrt(this.instanceCount),e=this.mesh.scale.x*t,n=this.mesh.scale.y*t;this.x=this.bounds.left/window.innerWidth,this.y=this.bounds.top/window.innerHeight,this.standardPositionX=-this.sizes.width/2+this.mesh.scale.x/2+this.x*this.sizes.width,this.standardPositionY=this.sizes.height/2-this.mesh.scale.y/2-this.y*this.sizes.height;const r=e/t,s=n/t,a=.01;for(let o=0;o<this.instanceCount;o++){const l=Math.floor(o/t),c=o%t;let u=this.standardPositionX+c*r,h=this.standardPositionY-l*s;const d=new Qt;d.makeScale(r,s,a);const m=new Qt;m.makeTranslation(u,h,0),m.multiply(d),this.mesh.setMatrixAt(o,m)}}calclateMatrixToSphere(){const e=new Float32Array(this.instanceCount*16),n=Math.PI*(3-Math.sqrt(5));for(let a=0;a<this.instanceCount;a++){const o=a*n,l=Math.acos(1-2*(a+.5)/this.instanceCount),c=2*Math.sin(l)*Math.cos(o),u=2*Math.sin(l)*Math.sin(o),h=2*Math.cos(l),d=new I(c,u,h),m=new I(0,0,0),v=new I(0,1,0),_=new Qt;_.lookAt(d,m,v);const p=new Qt;p.makeScale(.1,.1,.1);const f=new Qt;f.multiply(_),f.multiply(p),f.setPosition(d),f.toArray(e,a*16)}const r=new Float32Array(e),s=new no(r,16,!1);this.mesh.geometry.setAttribute("aSphereMatrix",s)}calclateMatrixToTriangle(t=3){const n=new Float32Array(this.instanceCount*16),r=8,s=.1;function a(c,u,h){const d=Math.PI*2/c,m=d/2,v=u/d,_=Math.cos(m)*Math.cos(u)/Math.cos(d*(v-Math.floor(v))-m)*h,p=Math.cos(m)*Math.sin(u)/Math.cos(d*(v-Math.floor(v))-m)*h;return{x:_,y:p}}for(let c=0;c<this.instanceCount;c++){const u=Math.floor(c/(this.instanceCount/r)),h=c%(this.instanceCount/r);let d=u*s;d=d-r*s*1;const m=3+u*.2,v=Math.PI*2/(this.instanceCount/r)*h,_=a(t,v,m),p=new I(_.x,_.y,_.z),f=new I(0,0,0),y=new I(0,1,0),g=new Qt;g.lookAt(p,f,y);const w=new Qt;w.makeScale(.1,.1,.1);const T=new Qt;T.multiply(g),T.multiply(w),T.setPosition(_.x,_.y,d),T.toArray(n,c*16)}const o=new Float32Array(n),l=new no(o,16,!1);this.mesh.geometry.setAttribute("aTriangleMatrix",l)}addIndices(){const t=new Float32Array(this.instanceCount);for(let n=0;n<this.instanceCount;n++)t[n]=n;const e=new no(t,1);this.mesh.geometry.setAttribute("aInstanceIndex",e)}updateInstanceProperty(){this.calclateMatrixToProjection(),this.addIndices(),this.mesh.instanceMatrix.needsUpdate=!0}show(){br.fromTo(this.mesh.material.uniforms.uAlpha,{value:0},{value:1})}hide(){br.to(this.mesh.material.uniforms.uAlpha,{value:0})}onResize(t){if(this.device=t.device,this.calculateBounds(t),this.updateInstanceProperty(),this.material){const e={scaleX:this.scaleX,scaleY:this.scaleY,standardPositionX:this.standardPositionX,standardPositionY:this.standardPositionY,resolution:[window.innerWidth,window.innerHeight],mesh:this.mesh,device:this.device};this.material.onResize(e)}}updateScale(){const t=Math.sqrt(this.instanceCount);this.width=this.bounds.width/window.innerWidth,this.height=this.bounds.height/window.innerHeight,this.scaleX=this.sizes.width*this.width,this.scaleY=this.sizes.height*this.height,this.mesh.scale.x=this.scaleX/t,this.mesh.scale.y=this.scaleY/t}updateX(t=0){}updateY(t=0){}update({scroll:t,time:e,texture:n,params:r,animations:s}){this.updateX(t.x),this.updateY(t.y),this.material.uniforms.uTexture.value=n,this.material.uniforms.uTime.value+=e.delta,this.material.uniforms.uProgress.value=r.progress,this.material.uniforms.uAnimation01.value=s.animation01.value,this.material.uniforms.uAnimation02.value=s.animation02.value,this.material.uniforms.uAnimation03.value=s.animation03.value,this.material.uniforms.uAnimation04.value=s.animation04.value}}var R3=`precision mediump float;

varying vec2 vUv;

void main() {\r
  vUv = uv;

  gl_Position = vec4(position, 1.0);

}`,L3=`precision mediump float;

uniform float uTime;\r
uniform sampler2D uBackBuffer;\r
uniform vec2 uResolution;

varying vec2 vUv;

#define PI 3.14159265358979323846

vec2 rotate2D(vec2 _st, float _angle) {\r
  _st -= 0.5;\r
  _st = mat2(cos(_angle), -sin(_angle), sin(_angle), cos(_angle)) * _st;\r
  _st += 0.5;\r
  return _st;\r
}

vec3 movingTiles(vec2 _st, float _zoom, float _speed, float _time) {\r
  _st *= _zoom;

  float time = _time * _speed;

  float index = 0.0;\r
  index += floor(mod(_st.x, _zoom));\r
  index += floor(mod(_st.y, _zoom)) * _zoom;

  if(fract(time) > 0.5) {\r
    if(fract(_st.y * 0.5) > 0.5) {\r
      _st.x += fract(time) * 2.0;\r
    } else {\r
      _st.x -= fract(time) * 2.0;\r
    }\r
  } else {\r
    if(fract(_st.x * 0.5) > 0.5) {\r
      _st.y += fract(time) * 2.0;\r
    } else {\r
      _st.y -= fract(time) * 2.0;\r
    }\r
  }

  return vec3(fract(_st), index);\r
}

float sdX(vec2 st, float w) {\r
  vec2 stAbs;\r
  stAbs = abs(st);\r
  float a = length(stAbs);\r
  float b = length(stAbs.x + stAbs.y);\r
    
    
    
    
  return length(stAbs - min(stAbs.x + stAbs.y, w) * 0.5);\r
}

float box(in vec2 _st, in vec2 _size) {\r
  _size = vec2(0.5) - _size * 0.5;\r
  vec2 uv = smoothstep(_size, _size + vec2(0.001), _st);\r
  uv *= smoothstep(_size, _size + vec2(0.001), vec2(1.0) - _st);\r
  return uv.x * uv.y;\r
}

float crossSDF(in vec2 _st, float _size) {\r
  return box(_st, vec2(_size, _size / 4.)) +\r
    box(_st, vec2(_size / 4., _size));\r
}

void main() {\r
  vec2 uv = vUv;

  float lt = uTime * 120.0 / 60.0;\r
  float bt = floor(lt);\r
  float tt = tanh(fract(lt) * 5.0);\r
  lt = bt + tt;

  vec3 color = vec3(0.);

  vec3 movingCell = movingTiles(uv, 11., 0.2, lt);

  uv = movingCell.xy;

  float cell_index = movingCell.z;

  float sdf_cross = crossSDF(uv, 0.3);

  uv = uv * 2.0 - 1.0;

  float width = 0.5;

  float sdf_X = sdX(uv, width);

  sdf_X = smoothstep(0.01, 0.05, sdf_X);

  float basis = 12.0;

  if(mod(cell_index, basis) == 0.0) {\r
    color = vec3(sdf_X);\r
  } else if(mod(cell_index, basis) == 1.0) {\r
    color = vec3(sdf_cross);\r
  } else if(mod(cell_index, basis) == 2.0) {\r
    color = vec3(sdf_X);\r
  } else if(mod(cell_index, basis) == 3.0) {\r
    color = vec3(sdf_cross);\r
  } else if(mod(cell_index, basis) == 4.0) {\r
    color = vec3(sdf_X);\r
  } else if(mod(cell_index, basis) == 5.0) {\r
    color = vec3(sdf_cross);\r
  } else if(mod(cell_index, basis) == 6.0) {\r
    color = vec3(sdf_X);\r
  } else if(mod(cell_index, basis) == 7.0) {\r
    color = vec3(sdf_cross);\r
  } else if(mod(cell_index, basis) == 8.0) {\r
    color = vec3(sdf_X);\r
  } else if(mod(cell_index, basis) == 9.0) {\r
    color = vec3(sdf_cross);\r
  } else if(mod(cell_index, basis) == 10.0) {\r
    color = vec3(sdf_X);\r
  } else if(mod(cell_index, basis) == 11.0) {\r
    color = vec3(sdf_cross);\r
  }

  gl_FragColor = vec4(color, 1.0);

}`;class D3{constructor({device:t,sizes:e}){this.device=t,this.sizes=e,this.aspect=this.sizes.width/this.sizes.height,this.createGeometry(),this.createMaterial(),this.createMesh(),this.createCamera(),this.createScene(),this.createRenderTargets(),this.onResize(),this.scene.add(this.mesh,this.camera)}createGeometry(){this.geometry=new Mo(2,2,10,10)}createMaterial(){this.material=new jn({vertexShader:R3,fragmentShader:L3,side:Un,uniforms:{uTime:{value:0},uResolution:{value:new Lt(window.innerWidth,window.innerHeight)},uBackBuffer:{value:null}}})}createMesh(){this.mesh=new Pn(this.geometry,this.material)}createCamera(){this.camera=new tn(45,this.aspect,.01,5),this.camera.position.set(0,0,5),this.camera.lookAt(0,0,0)}createScene(){this.scene=new y_}createRenderTargets(){this.rendererTargetA=new mi(1024,1024),this.rendererTargetB=new mi(1024,1024)}onResize(t){this.camera.updateProjectionMatrix()}update(t){this.material.uniforms.uTime.value=t.current}}let I3=class{constructor({scene:t,renderer:e,sizes:n,device:r}){this.scene=t,this.renderer=e,this.sizes=n,this.device=r,this.element=document.querySelector(".gl-layer__gallery"),this.x={current:0,target:0,lerp:.1},this.y={current:0,target:0,lerp:.1},this.scrollCurrent={x:0,y:0},this.scroll={x:0,y:0},this.speed={current:0,target:0,lerp:.1},this.createSDF(),this.createInstancedMesh(),this.scene.add(this.instancedPlane.mesh),this.onResize({sizes:this.sizes,device:this.device}),this.show()}createSDF(){this.sdf=new D3({device:this.device,sizes:this.sizes})}createSDFTexture({time:t}){this.sdf.update(t);let e=this.renderer.getRenderTarget();this.renderer.setRenderTarget(this.sdf.rendererTargetA),this.renderer.render(this.sdf.scene,this.sdf.camera),this.renderer.setRenderTarget(e);let n=this.sdf.rendererTargetA;this.sdf.rendererTargetA=this.sdf.rendererTargetB,this.sdf.rendererTargetB=n,this.sdf.mesh.material.uniforms.uBackBuffer.value=this.sdf.rendererTargetB.texture}createInstancedMesh(){this.texture=window.TEXTURES[1],this.instancedPlane=new P3({texture:this.texture,element:this.element,sizes:this.sizes,device:this.device,instanceCount:225})}createHelper(){this.cameraHelper=new UC(this.instancedPlane.material.projector),this.axesHelper=new NC(5),this.scene.add(this.cameraHelper),this.scene.add(this.axesHelper)}addAnimationsParam(t){this.animationsParam=t}show(){this.instancedPlane.show()}hide(){this.instancedPlane.hide()}onResize(t){this.device=t.device,this.instancedPlane&&this.instancedPlane.onResize(t),this.sdf&&this.sdf.onResize(t)}onTouchDown({x:t,y:e}){this.speed.target=1,this.scrollCurrent.x=this.scroll.x,this.scrollCurrent.y=this.scroll.y}onTouchMove({x:t,y:e}){const n=t.start-t.end,r=e.start-e.end;this.x.target=this.scrollCurrent.x-n,this.y.target=this.scrollCurrent.y-r}onTouchUp({x:t,y:e}){this.speed.target=0}onWheel({pixelX:t,pixelY:e}){this.x.target-=t,this.y.target-=e}update({scroll:t,time:e,params:n}){this.sdf&&(this.createSDFTexture({time:e}),this.instancedPlane&&this.instancedPlane.update({scroll:t,time:e,texture:this.sdf.rendererTargetB.texture,params:n,animations:this.animationsParam}))}destroy(){this.scene.remove(this.instancedPlane.mesh)}};class O3{constructor({template:t,dom:e,device:n}){this.template=t,this.container=e,this.device=n,this.renderInterval=this.isMobile?1e3/30:1e3/60,this.x={start:0,end:0},this.y={start:0,end:0},this.time={current:0,previous:0,delta:0},this.createRenderer(),this.createScene(),this.createCamera(),this.createPane(),this.createControls(),this.createClock(),this.onResize(this.device)}createRenderer(){this.renderer=new x_({alpha:!0,antialias:!0}),this.renderer.setClearColor(0,0),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.container.appendChild(this.renderer.domElement)}createScene(){this.scene=new y_}createCamera(){const e=window.innerWidth/window.innerHeight,n=.1,r=1e3;this.camera=new tn(45,e,n,r),this.camera.position.z=5}createPane(){this.pane=new iL,this.PARAMS={alpha:1,progress:0},this.pane.addBinding(this.PARAMS,"alpha",{min:0,max:1,step:.01}),this.pane.addBinding(this.PARAMS,"progress",{min:0,max:1,step:.01})}createControls(){this.controls=new sL(this.camera,this.renderer.domElement)}createClock(){this.clock=new OC}createHome(){this.home=new I3({scene:this.scene,renderer:this.renderer,sizes:this.sizes,device:this.device})}destroyHome(){this.home.destroy()}addAnimationsParam(t){this.animationsParam=t,this.home&&this.home.addAnimationsParam(this.animationsParam)}onPreloaded(){this.onChangeEnd(this.template)}onChangeStart(t){this.template!==t&&t!=="home"&&this.home.hide(),this.template=this.template!==t?t:this.template}onChangeEnd(t){t=="home"?this.createHome():this.destroyHome()}onResize(t){this.renderer.setSize(window.innerWidth,window.innerHeight);const e=window.innerWidth/window.innerHeight,n=this.camera.fov*(Math.PI/180),r=2*Math.tan(n/2)*this.camera.position.z,s=r*e;this.renderInterval=this.isMobile?1e3/30:1e3/60,this.sizes={height:r,width:s};const a={sizes:this.sizes,device:t};this.home&&this.home.onResize(a),this.camera.aspect=e,this.camera.updateProjectionMatrix()}onTouchDown(t){this.isDown=!0,this.x.start=t.touches?t.touches[0].clientX:t.clientX,this.y.start=t.touches?t.touches[0].clientY:t.clientY;const e={x:this.x,y:this.y};this.about&&this.about.onTouchDown(e),this.collections&&this.collections.onTouchDown(e),this.detail&&this.detail.onTouchDown(e),this.home&&this.home.onTouchDown(e)}onTouchMove(t){if(!this.isDown)return;const e=t.touches?t.touches[0].clientX:t.clientX,n=t.touches?t.touches[0].clientY:t.clientY;this.x.end=e,this.y.end=n;const r={x:this.x,y:this.y};this.about&&this.about.onTouchMove(r),this.collections&&this.collections.onTouchMove(r),this.detail&&this.detail.onTouchMove(r),this.home&&this.home.onTouchMove(r)}onTouchUp(t){this.isDown=!1;const e=t.changedTouches?t.changedTouches[0].clientX:t.clientX,n=t.changedTouches?t.changedTouches[0].clientY:t.clientY;this.x.end=e,this.y.end=n;const r={x:this.x,y:this.y};this.about&&this.about.onTouchUp(r),this.collections&&this.collections.onTouchUp(r),this.detail&&this.detail.onTouchUp(r),this.home&&this.home.onTouchUp(r)}onWheel({pixelX:t,pixelY:e}){this.collections&&this.collections.onWheel({pixelX:t,pixelY:e}),this.home&&this.home.onWheel({pixelX:t,pixelY:e})}update({scroll:t,device:e}){const n=this.clock.getElapsedTime();this.time.delta=this.time.current-this.time.previous,this.time.previous=this.time.current,this.time.current=n,this.home&&this.home.update({scroll:t,time:this.time,params:this.PARAMS}),this.renderer.render(this.scene,this.camera),this.time.delta>this.renderInterval&&(this.time.previous=this.time.current-this.time.delta%this.renderInterval)}}var dh={exports:{}},us=typeof Reflect=="object"?Reflect:null,Ef=us&&typeof us.apply=="function"?us.apply:function(t,e,n){return Function.prototype.apply.call(t,e,n)},Ea;us&&typeof us.ownKeys=="function"?Ea=us.ownKeys:Object.getOwnPropertySymbols?Ea=function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Ea=function(t){return Object.getOwnPropertyNames(t)};function U3(i){console&&console.warn&&console.warn(i)}var Bv=Number.isNaN||function(t){return t!==t};function ee(){ee.init.call(this)}dh.exports=ee;dh.exports.once=k3;ee.EventEmitter=ee;ee.prototype._events=void 0;ee.prototype._eventsCount=0;ee.prototype._maxListeners=void 0;var Mf=10;function cl(i){if(typeof i!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof i)}Object.defineProperty(ee,"defaultMaxListeners",{enumerable:!0,get:function(){return Mf},set:function(i){if(typeof i!="number"||i<0||Bv(i))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+i+".");Mf=i}});ee.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0};ee.prototype.setMaxListeners=function(t){if(typeof t!="number"||t<0||Bv(t))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+t+".");return this._maxListeners=t,this};function kv(i){return i._maxListeners===void 0?ee.defaultMaxListeners:i._maxListeners}ee.prototype.getMaxListeners=function(){return kv(this)};ee.prototype.emit=function(t){for(var e=[],n=1;n<arguments.length;n++)e.push(arguments[n]);var r=t==="error",s=this._events;if(s!==void 0)r=r&&s.error===void 0;else if(!r)return!1;if(r){var a;if(e.length>0&&(a=e[0]),a instanceof Error)throw a;var o=new Error("Unhandled error."+(a?" ("+a.message+")":""));throw o.context=a,o}var l=s[t];if(l===void 0)return!1;if(typeof l=="function")Ef(l,this,e);else for(var c=l.length,u=Wv(l,c),n=0;n<c;++n)Ef(u[n],this,e);return!0};function zv(i,t,e,n){var r,s,a;if(cl(e),s=i._events,s===void 0?(s=i._events=Object.create(null),i._eventsCount=0):(s.newListener!==void 0&&(i.emit("newListener",t,e.listener?e.listener:e),s=i._events),a=s[t]),a===void 0)a=s[t]=e,++i._eventsCount;else if(typeof a=="function"?a=s[t]=n?[e,a]:[a,e]:n?a.unshift(e):a.push(e),r=kv(i),r>0&&a.length>r&&!a.warned){a.warned=!0;var o=new Error("Possible EventEmitter memory leak detected. "+a.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");o.name="MaxListenersExceededWarning",o.emitter=i,o.type=t,o.count=a.length,U3(o)}return i}ee.prototype.addListener=function(t,e){return zv(this,t,e,!1)};ee.prototype.on=ee.prototype.addListener;ee.prototype.prependListener=function(t,e){return zv(this,t,e,!0)};function N3(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function Vv(i,t,e){var n={fired:!1,wrapFn:void 0,target:i,type:t,listener:e},r=N3.bind(n);return r.listener=e,n.wrapFn=r,r}ee.prototype.once=function(t,e){return cl(e),this.on(t,Vv(this,t,e)),this};ee.prototype.prependOnceListener=function(t,e){return cl(e),this.prependListener(t,Vv(this,t,e)),this};ee.prototype.removeListener=function(t,e){var n,r,s,a,o;if(cl(e),r=this._events,r===void 0)return this;if(n=r[t],n===void 0)return this;if(n===e||n.listener===e)--this._eventsCount===0?this._events=Object.create(null):(delete r[t],r.removeListener&&this.emit("removeListener",t,n.listener||e));else if(typeof n!="function"){for(s=-1,a=n.length-1;a>=0;a--)if(n[a]===e||n[a].listener===e){o=n[a].listener,s=a;break}if(s<0)return this;s===0?n.shift():F3(n,s),n.length===1&&(r[t]=n[0]),r.removeListener!==void 0&&this.emit("removeListener",t,o||e)}return this};ee.prototype.off=ee.prototype.removeListener;ee.prototype.removeAllListeners=function(t){var e,n,r;if(n=this._events,n===void 0)return this;if(n.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):n[t]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete n[t]),this;if(arguments.length===0){var s=Object.keys(n),a;for(r=0;r<s.length;++r)a=s[r],a!=="removeListener"&&this.removeAllListeners(a);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(e=n[t],typeof e=="function")this.removeListener(t,e);else if(e!==void 0)for(r=e.length-1;r>=0;r--)this.removeListener(t,e[r]);return this};function Hv(i,t,e){var n=i._events;if(n===void 0)return[];var r=n[t];return r===void 0?[]:typeof r=="function"?e?[r.listener||r]:[r]:e?B3(r):Wv(r,r.length)}ee.prototype.listeners=function(t){return Hv(this,t,!0)};ee.prototype.rawListeners=function(t){return Hv(this,t,!1)};ee.listenerCount=function(i,t){return typeof i.listenerCount=="function"?i.listenerCount(t):Gv.call(i,t)};ee.prototype.listenerCount=Gv;function Gv(i){var t=this._events;if(t!==void 0){var e=t[i];if(typeof e=="function")return 1;if(e!==void 0)return e.length}return 0}ee.prototype.eventNames=function(){return this._eventsCount>0?Ea(this._events):[]};function Wv(i,t){for(var e=new Array(t),n=0;n<t;++n)e[n]=i[n];return e}function F3(i,t){for(;t+1<i.length;t++)i[t]=i[t+1];i.pop()}function B3(i){for(var t=new Array(i.length),e=0;e<t.length;++e)t[e]=i[e].listener||i[e];return t}function k3(i,t){return new Promise(function(e,n){function r(a){i.removeListener(t,s),n(a)}function s(){typeof i.removeListener=="function"&&i.removeListener("error",r),e([].slice.call(arguments))}Xv(i,t,s,{once:!0}),t!=="error"&&z3(i,r,{once:!0})})}function z3(i,t,e){typeof i.on=="function"&&Xv(i,"error",t,e)}function Xv(i,t,e,n){if(typeof i.on=="function")n.once?i.once(t,e):i.on(t,e);else if(typeof i.addEventListener=="function")i.addEventListener(t,function r(s){n.once&&i.removeEventListener(t,r),e(s)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof i)}var V3=dh.exports;const H3=Xa(V3);class ul extends H3{constructor({element:t,elements:e}){super(),this.selector=t,this.selectorChildren={...e},this.create(),this.addEventListeners()}create(){this.selector instanceof window.HTMLElement?this.element=this.selector:this.element=document.querySelector(this.selector),this.elements={},lu(this.selectorChildren,(t,e)=>{t instanceof window.HTMLElement||t instanceof window.NodeList?this.elements[e]=t:(this.elements[e]=this.element.querySelectorAll(t),this.elements[e].length===0?this.elements[e]=null:this.elements[e].length===1&&(this.elements[e]=this.element.querySelector(t)))})}addEventListeners(){}removeEventListeners(){}}class G3 extends ul{constructor(){super({element:".preloader",elements:{loading:".preloader__loading",text:".preloader__text",assets:".preloader__assets"}}),window.TEXTURES={},this.length=0,this.createLoader()}createLoader(){this.assets=[...this.elements.assets.querySelectorAll("img")],this.totalAssetsLength=this.assets.length,this.textureLoader=new IC,this.assets.forEach(t=>{const e=new Image,n=t.getAttribute("data-id");e.crossOrigin="anonymous",e.src=t.getAttribute("data-src"),e.onload=async()=>{this.textureLoader.load(e.src,r=>{r.needsUpdate=!0,window.TEXTURES[n]=r,this.onAssetLoaded()})},e.onerror=r=>{console.error("An error happened while loading a texture",r)}})}onAssetLoaded(){this.length+=1;const t=this.length/this.totalAssetsLength;this.elements.text.innerHTML=`${Math.round(t*100)}%`,this.length===this.totalAssetsLength&&this.onLoaded()}onLoaded(){return new Promise(t=>{this.emit("completed"),this.destroy(),t()})}destroy(){br.to(this.element,{autoAlpha:0,duration:1.4,ease:"expo.out",onComplete:()=>{this.element.parentNode.removeChild(this.element)}})}}class W3{constructor({button:t,drawerNav:e,drawerInner:n,drawerNavButton:r,closeButton:s}){this.drawerButton=t,this.nav=e,this.navButtons=r,this.closeButton=s||null,this.drawerInner=n,this.drawerButton.setAttribute("aria-expanded","false"),this.nav.setAttribute("aria-hidden","true"),this.closeButton&&this.closeButton.setAttribute("tabindex","0"),this.init()}init(){this.setupDrawerToggleButton(),this.setupNavButtonActions(),this.setupCloseOutsideClick(),this.preventInnerPropagation(),this.setupCloseButtonClick(),this.setupButtonTextToggle()}setupDrawerToggleButton(){this.drawerButton.addEventListener("click",()=>{const t=this.drawerButton.getAttribute("aria-expanded")==="true";this.drawerButton.setAttribute("aria-expanded",!t),this.nav.setAttribute("aria-hidden",t),this.drawerButton.classList.toggle("active"),this.nav.classList.toggle("active"),this.setupButtonTextToggle()})}setupButtonTextToggle(){this.toggleText(),this.drawerButton.addEventListener("click",()=>{this.toggleText()})}toggleText(){const t=this.drawerButton.querySelector(".drawer-button__text--menu"),e=this.drawerButton.querySelector(".drawer-button__text--close");this.drawerButton.getAttribute("aria-expanded")==="true"?(t.classList.remove("active"),e.classList.add("active")):(t.classList.add("active"),e.classList.remove("active"))}setupNavButtonActions(){this.navButtons.forEach(t=>{t.addEventListener("click",()=>{(this.drawerButton.classList.contains("active")||this.nav.classList.contains("active"))&&this.closeDrawer()})})}setupCloseOutsideClick(){this.nav.addEventListener("click",t=>{(t.target===this.nav&&this.drawerButton.getAttribute("aria-expanded")==="true"||this.nav.getAttribute("aria-hidden")==="false")&&this.closeDrawer()})}preventInnerPropagation(){this.drawerInner.addEventListener("click",t=>{t.stopPropagation()})}setupCloseButtonClick(){this.closeButton!==null&&this.closeButton.addEventListener("click",()=>{this.closeDrawer()})}closeDrawer(){this.drawerButton.classList.remove("active"),this.nav.classList.remove("active"),this.drawerButton.setAttribute("aria-expanded","false"),this.nav.setAttribute("aria-hidden","true")}}class X3 extends ul{constructor(){super({element:".drawer-nav",elements:{inner:".drawer-nav__inner",list:".drawer-nav__list",item:".drawer-nav__list__item",link:".drawer-nav__list__item__link",button:document.querySelector(".drawer-button"),closeButton:document.querySelector(".drawer-nav__close")}}),this.createNav()}createNav(){this.drawerNav=new W3({button:this.elements.button,drawerNav:this.element,drawerInner:this.elements.inner,drawerNavButton:this.elements.link,closeButton:this.elements.closeButton})}}var $v={exports:{}},Sf=typeof document<"u"?document.createElement("p").style:{},Tf=["O","ms","Moz","Webkit"],dc=/([A-Z])/g,pc={};function jv(i){if(i=i.replace(/-([a-z])/g,function(r,s){return s.toUpperCase()}),Sf[i]!==void 0)return i;for(var t=i.charAt(0).toUpperCase()+i.slice(1),e=Tf.length;e--;){var n=Tf[e]+t;if(Sf[n]!==void 0)return n}return i}function $3(i){return i in pc?pc[i]:pc[i]=jv(i)}function j3(i){return i=jv(i),dc.test(i)&&(i="-"+i.replace(dc,"-$1"),dc.lastIndex=0),i.toLowerCase()}$v.exports=$3;$v.exports.dash=j3;class q3 extends ul{constructor({element:t}){super({element:t}),this.createObserver()}createObserver(){this.observer=new IntersectionObserver(t=>{t.forEach(e=>{e.isIntersecting&&(this.element.src||(this.element.src=this.element.getAttribute("data-src"),this.element.onload=n=>{this.element.classList.add("loaded")}))})}),this.observer.observe(this.element)}}class Y3{constructor({id:t,element:e,elements:n}){this.id=t,this.selector=e,this.selectorChildren={...n}}create(){this.scroll={current:0,target:0,last:0,limit:1e3},this.element=document.querySelector(this.selector),this.elements={},lu(this.selectorChildren,(t,e)=>{t instanceof window.HTMLElement||t instanceof window.NodeList?this.elements[e]=t:(this.elements[e]=this.element.querySelectorAll(t),this.elements[e].length===0?this.elements[e]=null:this.elements[e].length===1&&(this.elements[e]=this.element.querySelector(t)))})}createAsyncLoaders(){this.asyncImages=S3(this.elements.asyncImages,t=>new q3({element:t}))}show(t){return new Promise(e=>{t?this.animationIn=t:this.animationIn=br.timeline(),this.animationIn.call(n=>{this.addEventListeners(),e()})})}hide(){return new Promise(t=>{this.destroy(),this.animationOut=br.timeline(),this.animationOut.to(this.element,{autoAlpha:0,onComplete:t})})}destroy(){this.removeEventListeners()}onWheel({pixelY:t}){}onResize(){}update(){}addEventListeners(){}removeEventListeners(){}}class K3 extends ul{constructor(t){super({element:".ui",elements:{button:".ui__list__item__button"}}),this.params=t,this.addUIListeners()}addUIListeners(){this.elements.button.forEach(t=>{t.addEventListener("click",e=>{this.onButtonClick(t)})})}onButtonClick(t){for(let e in this.params){const n=t.dataset.control===e?1:0;br.to(this.params[e],{duration:1,ease:"expo.inOut",value:n,onComplete:()=>{}})}this.elements.button.forEach(e=>{e==t?(e.classList.add("active"),e.classList.remove("inactive")):(e.classList.remove("active"),e.classList.add("inactive"))})}}class Z3 extends Y3{constructor(){super({id:"home",element:".home",elements:{link:".home__link"}})}create(){super.create()}createUI(t){this.UI=new K3(t)}destroy(){super.destroy()}addEventListeners(){}}document.querySelectorAll(".preloader img");class J3{constructor(){this.createBreakPoint(),this.createContent(),this.createPreloader(),this.createCanvas(),this.createNavigation(),this.createPages(),this.addEventListeners(),this.addLinkListeners(),this.update(),this.onResize()}createContent(){this.content=document.querySelector(".content"),this.template=this.content.getAttribute("data-template")}createCanvas(){this.canvas=new O3({template:this.template,dom:document.querySelector("#webgl"),device:this.device})}createPreloader(){this.preloader=new G3,this.preloader.once("completed",()=>{this.onPreloaded()})}createBreakPoint(){this.breakPoint=new Hb,this.device=this.breakPoint.currentDevice}onPreloaded(){this.onResize(),this.canvas.onPreloaded(),this.addAnimationObserver(),this.page.show()}createNavigation(){this.navigation=new X3}createPages(){this.pages={home:new Z3},this.page=this.pages[this.template],this.page.create()}addAnimationObserver(){this.animationsParam={animation01:{value:1},animation02:{value:0},animation03:{value:0},animation04:{value:0}},this.pages.home&&this.pages.home.createUI(this.animationsParam),this.canvas&&this.canvas.addAnimationsParam(this.animationsParam)}addEventListeners(){window.addEventListener("popstate",t=>{this.onPopState(t)}),window.addEventListener("mousedown",t=>{this.onTouchDown(t)}),window.addEventListener("mousemove",t=>{this.onTouchMove(t)}),window.addEventListener("mouseup",t=>{this.onTouchUp(t)}),window.addEventListener("touchstart",t=>{this.onTouchDown(t)}),window.addEventListener("touchmove",t=>{this.onTouchMove(t)}),window.addEventListener("touchend",t=>{this.onTouchUp(t)}),window.addEventListener("wheel",t=>{this.onWheel(t)}),window.addEventListener("resize",t=>{this.onResize(t)})}onResize(){var t;this.device=this.breakPoint.currentDevice,this.page&&this.page.onResize&&this.page.onResize(),setTimeout(()=>{const e=window.innerWidth;Math.abs(this.currentWidth-e)<=.1?this.resizeFlag=!1:this.resizeFlag=!0},10),(t=this.canvas)!=null&&t.onResize&&this.canvas.onResize(this.device),this.currentWidth=window.innerWidth}onTouchDown(t){this.canvas&&this.canvas.onTouchDown&&this.canvas.onTouchDown(t)}onTouchMove(t){this.page&&this.canvas.onTouchMove&&this.canvas.onTouchMove(t)}onTouchUp(t){this.canvas&&this.canvas.onTouchUp&&this.canvas.onTouchUp(t)}onWheel(t){const e=Vb(t);this.canvas&&this.canvas.update&&this.canvas.onWheel(e),this.page&&this.page.update&&this.page.onWheel(e)}addLinkListeners(){const t=document.querySelectorAll("a");lu(t,e=>{e.onclick=n=>{const{href:r}=e;n.preventDefault(),this.onChange({url:r})}})}onPopState(){this.onChange({url:window.location.pathname,push:!1})}async onChange({url:t,push:e=!0}){if(this.onChanging)return;this.onChanging=!0,this.canvas.onChangeStart(this.template),await this.page.hide();const n=await window.fetch(t);if(n.status===200){const r=await n.text(),a=new DOMParser().parseFromString(r,"text/html"),o=a.querySelector("title").innerText;o&&(document.title=o);const l=a.querySelector('meta[name="description"]');this.updateMetaDescription(l);const c=document.createElement("div");e&&window.history.pushState({},"",t),c.innerHTML=r;const u=c.querySelector(".content");this.template=u.getAttribute("data-template"),this.content.setAttribute("data-template",this.template),this.content.innerHTML=u.innerHTML,this.canvas.onChangeEnd(this.template),this.page=this.pages[this.template],this.page.create(),this.onResize(),this.page.show(),this.addLinkListeners(),this.onChanging=!1}else console.log("error"),this.onChanging=!1}updateMetaDescription(t){let e=document.querySelector('meta[name="description"]');e?e.setAttribute("content",t):(e=document.createElement("meta"),e.setAttribute("name","description"),e.setAttribute("content",t),document.head.appendChild(e))}update(){this.page&&this.page.update&&this.page.update(),this.canvas&&this.canvas.update&&this.canvas.update({scroll:this.page.scroll}),this.frame=window.requestAnimationFrame(this.update.bind(this))}}new J3;
