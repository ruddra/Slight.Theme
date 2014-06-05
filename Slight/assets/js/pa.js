"object"!=typeof JSON2&&(JSON2={}),function(){function d(f){return 10>f?"0"+f:f}function l(n,m){var f=Object.prototype.toString.apply(n);return"[object Date]"===f?isFinite(n.valueOf())?n.getUTCFullYear()+"-"+d(n.getUTCMonth()+1)+"-"+d(n.getUTCDate())+"T"+d(n.getUTCHours())+":"+d(n.getUTCMinutes())+":"+d(n.getUTCSeconds())+"Z":null:"[object String]"===f||"[object Number]"===f||"[object Boolean]"===f?n.valueOf():"[object Array]"!==f&&"function"==typeof n.toJSON?n.toJSON(m):n}function a(f){return i.lastIndex=0,i.test(f)?'"'+f.replace(i,function(m){var n=k[m];return"string"==typeof n?n:"\\u"+("0000"+m.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+f+'"'}function g(s,p){var n,m,t,f,o,q=j,r=p[s];switch(r&&"object"==typeof r&&(r=l(r,s)),"function"==typeof h&&(r=h.call(p,s,r)),typeof r){case"string":return a(r);case"number":return isFinite(r)?String(r):"null";case"boolean":case"null":return String(r);case"object":if(!r)return"null";if(j+=b,o=[],"[object Array]"===Object.prototype.toString.apply(r)){for(f=r.length,n=0;f>n;n+=1)o[n]=g(n,r)||"null";return t=0===o.length?"[]":j?"[\n"+j+o.join(",\n"+j)+"\n"+q+"]":"["+o.join(",")+"]",j=q,t}if(h&&"object"==typeof h)for(f=h.length,n=0;f>n;n+=1)"string"==typeof h[n]&&(m=h[n],t=g(m,r),t&&o.push(a(m)+(j?": ":":")+t));else for(m in r)Object.prototype.hasOwnProperty.call(r,m)&&(t=g(m,r),t&&o.push(a(m)+(j?": ":":")+t));return t=0===o.length?"{}":j?"{\n"+j+o.join(",\n"+j)+"\n"+q+"}":"{"+o.join(",")+"}",j=q,t}}var c=new RegExp("[\x00­؀-؄܏឴឵‌-‏\u2028- ⁠-⁯﻿￰-￿]","g"),e='\\\\\\"\x00--­؀-؄܏឴឵‌-‏\u2028- ⁠-⁯﻿￰-￿]',i=new RegExp("["+e,"g"),j,b,k={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},h;"function"!=typeof JSON2.stringify&&(JSON2.stringify=function(o,m,n){var f;if(j="",b="","number"==typeof n)for(f=0;n>f;f+=1)b+=" ";else"string"==typeof n&&(b=n);if(h=m,m&&"function"!=typeof m&&("object"!=typeof m||"number"!=typeof m.length))throw new Error("JSON2.stringify");return g("",{"":o})}),"function"!=typeof JSON2.parse&&(JSON2.parse=function(o,f){function m(s,r){var q,p,t=s[r];if(t&&"object"==typeof t)for(q in t)Object.prototype.hasOwnProperty.call(t,q)&&(p=m(t,q),void 0!==p?t[q]=p:delete t[q]);return f.call(s,r,t)}var n;if(o=String(o),c.lastIndex=0,c.test(o)&&(o=o.replace(c,function(p){return"\\u"+("0000"+p.charCodeAt(0).toString(16)).slice(-4)})),new RegExp("^[\\],:{}\\s]*$").test(o.replace(new RegExp('\\\\(?:["\\\\/bfnrt]|u[0-9a-fA-F]{4})',"g"),"@").replace(new RegExp('"[^"\\\\\n\r]*"|true|false|null|-?\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d+)?',"g"),"]").replace(new RegExp("(?:^|:|,)(?:\\s*\\[)+","g"),"")))return n=eval("("+o+")"),"function"==typeof f?m({"":n},""):n;throw new SyntaxError("JSON2.parse")})}(),"object"!=typeof _paq&&(_paq=[]),"object"!=typeof Piwik&&(Piwik=function(){function u(R){var Q=typeof R;return"undefined"!==Q}function o(Q){return"function"==typeof Q}function E(Q){return"object"==typeof Q}function l(Q){return"string"==typeof Q||Q instanceof String}function L(){var Q,S,R;for(Q=0;Q<arguments.length;Q+=1)R=arguments[Q],S=R.shift(),l(S)?G[S].apply(G,R):S.apply(G,R)}function O(T,S,R,Q){return T.addEventListener?(T.addEventListener(S,R,Q),!0):T.attachEvent?T.attachEvent("on"+S,R):void(T["on"+S]=R)}function J(R,U){var T,S,Q="";for(T in a)Object.prototype.hasOwnProperty.call(a,T)&&(S=a[T][R],o(S)&&(Q+=S(U)));return Q}function M(){var Q;if(J("unload"),i)do Q=new Date;while(Q.getTimeAlias()<i)}function K(){var Q;if(!n)for(n=!0,J("load"),Q=0;Q<A.length;Q++)A[Q]();return!0}function m(){var R;s.addEventListener?O(s,"DOMContentLoaded",function Q(){s.removeEventListener("DOMContentLoaded",Q,!1),K()}):s.attachEvent&&(s.attachEvent("onreadystatechange",function Q(){"complete"===s.readyState&&(s.detachEvent("onreadystatechange",Q),K())}),s.documentElement.doScroll&&C===C.top&&!function Q(){if(!n){try{s.documentElement.doScroll("left")}catch(S){return void setTimeout(Q,0)}K()}}()),new RegExp("WebKit").test(e.userAgent)&&(R=setInterval(function(){(n||/loaded|complete/.test(s.readyState))&&(clearInterval(R),K())},10)),O(C,"load",K,!1)}function h(S,R){var Q=s.createElement("script");Q.type="text/javascript",Q.src=S,Q.readyState?Q.onreadystatechange=function(){var T=this.readyState;("loaded"===T||"complete"===T)&&(Q.onreadystatechange=null,R())}:Q.onload=R,s.getElementsByTagName("head")[0].appendChild(Q)}function v(){var Q="";try{Q=C.top.document.referrer}catch(S){if(C.parent)try{Q=C.parent.document.referrer}catch(R){Q=""}}return""===Q&&(Q=s.referrer),Q}function j(Q){var S=new RegExp("^([a-z]+):"),R=S.exec(Q);return R?R[1]:null}function b(Q){var S=new RegExp("^(?:(?:https?|ftp):)/*(?:[^@]+@)?([^:/#]+)"),R=S.exec(Q);return R?R[1]:Q}function D(S,R){var Q="[\\?&#]"+R+"=([^&#]*)",U=new RegExp(Q),T=U.exec(S);return T?B(T[1]):""}function q(Q){return g(k(Q))}function N(ag){var V,aj,ai,af,ae,ad,ac,ab,ak,Q,S=function(al,W){return al<<W|al>>>32-W},ah=function(an){var am,W,al="";for(am=7;am>=0;am--)W=an>>>4*am&15,al+=W.toString(16);return al},R=[],aa=1732584193,Y=4023233417,X=2562383102,U=271733878,T=3285377520,Z=[];for(ag=q(ag),Q=ag.length,aj=0;Q-3>aj;aj+=4)ai=ag.charCodeAt(aj)<<24|ag.charCodeAt(aj+1)<<16|ag.charCodeAt(aj+2)<<8|ag.charCodeAt(aj+3),Z.push(ai);switch(3&Q){case 0:aj=2147483648;break;case 1:aj=ag.charCodeAt(Q-1)<<24|8388608;break;case 2:aj=ag.charCodeAt(Q-2)<<24|ag.charCodeAt(Q-1)<<16|32768;break;case 3:aj=ag.charCodeAt(Q-3)<<24|ag.charCodeAt(Q-2)<<16|ag.charCodeAt(Q-1)<<8|128}for(Z.push(aj);14!==(15&Z.length);)Z.push(0);for(Z.push(Q>>>29),Z.push(Q<<3&4294967295),V=0;V<Z.length;V+=16){for(aj=0;16>aj;aj++)R[aj]=Z[V+aj];for(aj=16;79>=aj;aj++)R[aj]=S(R[aj-3]^R[aj-8]^R[aj-14]^R[aj-16],1);for(af=aa,ae=Y,ad=X,ac=U,ab=T,aj=0;19>=aj;aj++)ak=S(af,5)+(ae&ad|~ae&ac)+ab+R[aj]+1518500249&4294967295,ab=ac,ac=ad,ad=S(ae,30),ae=af,af=ak;for(aj=20;39>=aj;aj++)ak=S(af,5)+(ae^ad^ac)+ab+R[aj]+1859775393&4294967295,ab=ac,ac=ad,ad=S(ae,30),ae=af,af=ak;for(aj=40;59>=aj;aj++)ak=S(af,5)+(ae&ad|ae&ac|ad&ac)+ab+R[aj]+2400959708&4294967295,ab=ac,ac=ad,ad=S(ae,30),ae=af,af=ak;for(aj=60;79>=aj;aj++)ak=S(af,5)+(ae^ad^ac)+ab+R[aj]+3395469782&4294967295,ab=ac,ac=ad,ad=S(ae,30),ae=af,af=ak;aa=aa+af&4294967295,Y=Y+ae&4294967295,X=X+ad&4294967295,U=U+ac&4294967295,T=T+ab&4294967295}return ak=ah(aa)+ah(Y)+ah(X)+ah(U)+ah(T),ak.toLowerCase()}function I(S,Q,R){return"translate.googleusercontent.com"===S?(""===R&&(R=Q),Q=D(Q,"u"),S=b(Q)):("cc.bingj.com"===S||"webcache.googleusercontent.com"===S||"74.6."===S.slice(0,5))&&(Q=s.links[0].href,S=b(Q)),[S,Q,R]}function w(R){var Q=R.length;return"."===R.charAt(--Q)&&(R=R.slice(0,Q)),"*."===R.slice(0,2)&&(R=R.slice(1)),R}function P(R){if(R=R&&R.text?R.text:R,!l(R)){var Q=s.getElementsByTagName("title");Q&&u(Q[0])&&(R=Q[0].text)}return R}function y(Q,R){return R?R:("piwik.php"===Q.slice(-9)&&(Q=Q.slice(0,Q.length-9)),Q)}function x(U){var Q="Piwik_Overlay",X=new RegExp("index\\.php\\?module=Overlay&action=startOverlaySession&idSite=([0-9]+)&period=([^&]+)&date=([^&]+)$"),S=X.exec(s.referrer);if(S){var T=S[1];if(T!==String(U))return!1;var W=S[2],R=S[3];C.name=Q+"###"+W+"###"+R}var V=C.name.split("###");return 3===V.length&&V[0]===Q}function H(R,W,T){var V=C.name.split("###"),U=V[1],Q=V[2],S=y(R,W);h(S+"plugins/Overlay/client/client.js?v=1",function(){Piwik_Overlay_Client.initialize(S,T,U,Q)})}function z(ao,aP){function a4(by,bv,bu,bx,bt,bw){if(!ae){var bs;bu&&(bs=new Date,bs.setTime(bs.getTime()+bu)),s.cookie=by+"="+k(bv)+(bu?";expires="+bs.toGMTString():"")+";path="+(bx||"/")+(bt?";domain="+bt:"")+(bw?";secure":"")}}function aj(bu){if(ae)return 0;var bs=new RegExp("(^|;)[ ]*"+bu+"=([^;]*)"),bt=bs.exec(s.cookie);return bt?B(bt[2]):0}function bj(bs){var bt;return ab?(bt=new RegExp("#.*"),bs.replace(bt,"")):bs}function a8(bu,bs){var bt,bv=j(bs);return bv?bs:"/"===bs.slice(0,1)?j(bu)+"://"+b(bu)+bs:(bu=bj(bu),bt=bu.indexOf("?"),bt>=0&&(bu=bu.slice(0,bt)),bt=bu.lastIndexOf("/"),bt!==bu.length-1&&(bu=bu.slice(0,bt+1)),bu+bs)}function aT(bv){var bt,bs,bu;for(bt=0;bt<aS.length;bt++){if(bs=w(aS[bt].toLowerCase()),bv===bs)return!0;if("."===bs.slice(0,1)){if(bv===bs.slice(1))return!0;if(bu=bv.length-bs.length,bu>0&&bv.slice(bu)===bs)return!0}}return!1}function br(bs){var bt=new Image(1,1);bt.onload=function(){r=0},bt.src=U+(U.indexOf("?")<0?"?":"&")+bs}function a5(bs){try{var bu=C.XMLHttpRequest?new C.XMLHttpRequest:C.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):null;bu.open("POST",U,!0),bu.onreadystatechange=function(){4===this.readyState&&200!==this.status&&br(bs)},bu.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),bu.send(bs)}catch(bt){br(bs)}}function aB(bu,bt){var bs=new Date;bh||("POST"===aU?a5(bu):br(bu),i=bs.getTime()+bt)}function a3(bs){return bm+bs+"."+be+"."+aY}function X(){if(ae)return"0";if(!u(e.cookieEnabled)){var bs=a3("testcookie");return a4(bs,"1"),"1"===aj(bs)?"1":"0"}return e.cookieEnabled?"1":"0"}function aN(){aY=az((ag||a9)+(bn||"/")).slice(0,4)}function ai(){var bt=a3("cvar"),bs=aj(bt);return bs.length&&(bs=JSON2.parse(bs),E(bs))?bs:{}}function T(){Y===!1&&(Y=ai())}function bd(){var bs=new Date;aV=bs.getTime()}function af(bw,bt,bs,bv,bu,bx){a4(a3("id"),bw+"."+bt+"."+bs+"."+bv+"."+bu+"."+bx,ak,bn,ag)}function S(){var bu,bt=new Date,bs=Math.round(bt.getTime()/1e3),bv=aj(a3("id"));return bv?(bu=bv.split("."),bu.unshift("0")):(aE||(aE=az((e.userAgent||"")+(e.platform||"")+JSON2.stringify(bf)+bt.getTime()+Math.random()).slice(0,16)),bu=["1",aE,bs,0,bs,"",""]),bu}function Q(){var bs=aj(a3("ref"));if(bs.length)try{if(bs=JSON2.parse(bs),E(bs))return bs}catch(bt){}return["","",0,""]}function R(){var bs=ae;ae=!1,a4(a3("id"),"",-86400,bn,ag),a4(a3("ses"),"",-86400,bn,ag),a4(a3("cvar"),"",-86400,bn,ag),a4(a3("ref"),"",-86400,bn,ag),ae=bs}function bc(bw){if(bw&&E(bw)){var bu,bv=[];for(bu in bw)Object.prototype.hasOwnProperty.call(bw,bu)&&bv.push(bu);var bx={};bv.sort();var bt,bs=bv.length;for(bt=0;bs>bt;bt++)bx[bv[bt]]=bw[bv[bt]];return bx}}function ax(bu,bS,bT,bv){function bA(b0,b1){var b2=JSON2.stringify(b0);return b2.length>2?"&"+b1+"="+k(b2):""}var bQ,bW,bR,bx,bI,bN,bB,bL,by,bP,bY,bF,bz,bs,bt=new Date,bC=Math.round(bt.getTime()/1e3),bw=1024,bM=Y,bD=a3("ses"),bE=a3("ref"),bZ=a3("cvar"),bJ=S(),bH=aj(bD),bO=Q(),bV=aG||bo;if(ae&&R(),bh)return"";bW=bJ[0],bR=bJ[1],bI=bJ[2],bx=bJ[3],bN=bJ[4],bB=bJ[5],u(bJ[6])||(bJ[6]=""),bL=bJ[6],u(bv)||(bv="");var bG=s.characterSet||s.charset;if(bG&&"utf-8"!==bG.toLowerCase()||(bG=null),bz=bO[0],bs=bO[1],by=bO[2],bP=bO[3],!bH){var bU=am/1e3;if((!bB||bC-bB>bU)&&(bx++,bB=bN),!aF||!bz.length){for(bQ in aA)if(Object.prototype.hasOwnProperty.call(aA,bQ)&&(bz=D(bV,aA[bQ]),bz.length))break;for(bQ in av)if(Object.prototype.hasOwnProperty.call(av,bQ)&&(bs=D(bV,av[bQ]),bs.length))break}bY=b(aW),bF=bP.length?b(bP):"",!bY.length||aT(bY)||aF&&bF.length&&!aT(bF)||(bP=aW),(bP.length||bz.length)&&(by=bC,bO=[bz,bs,by,bj(bP.slice(0,bw))],a4(bE,JSON2.stringify(bO),aH,bn,ag))}bu+="&idsite="+be+"&rec=1&r="+String(Math.random()).slice(2,8)+"&h="+bt.getHours()+"&m="+bt.getMinutes()+"&s="+bt.getSeconds()+"&url="+k(bj(bV))+(aW.length?"&urlref="+k(bj(aW)):"")+"&_id="+bR+"&_idts="+bI+"&_idvc="+bx+"&_idn="+bW+(bz.length?"&_rcn="+k(bz):"")+(bs.length?"&_rck="+k(bs):"")+"&_refts="+by+"&_viewts="+bB+(String(bL).length?"&_ects="+bL:"")+(String(bP).length?"&_ref="+k(bj(bP.slice(0,bw))):"")+(bG?"&cs="+k(bG):"");for(bQ in bf)Object.prototype.hasOwnProperty.call(bf,bQ)&&(bu+="&"+bQ+"="+bf[bQ]);bS?bu+="&data="+k(JSON2.stringify(bS)):ad&&(bu+="&data="+k(JSON2.stringify(ad)));var bX=bc(aL),bK=bc(V);if(bu+=bA(bX,"cvar"),bu+=bA(bK,"e_cvar"),Y){bu+=bA(Y,"_cvar");for(bQ in bM)Object.prototype.hasOwnProperty.call(bM,bQ)&&(""===Y[bQ][0]||""===Y[bQ][1])&&delete Y[bQ];a4(bZ,JSON2.stringify(Y),am,bn,ag)}return aD&&(ar?bu+="&gt_ms="+ar:f&&f.timing&&f.timing.requestStart&&f.timing.responseEnd&&(bu+="&gt_ms="+(f.timing.responseEnd-f.timing.requestStart))),af(bR,bI,bx,bC,bB,u(bv)&&String(bv).length?bv:bL),a4(bD,"*",am,bn,ag),bu+=J(bT),aR.length&&(bu+="&"+aR),bu}function a7(bv,bu,bz,bw,bs,bC){var by,bB,bx="idgoal=0",bt=new Date,bA=[];if(String(bv).length&&(bx+="&ec_id="+k(bv),by=Math.round(bt.getTime()/1e3)),bx+="&revenue="+bu,String(bz).length&&(bx+="&ec_st="+bz),String(bw).length&&(bx+="&ec_tx="+bw),String(bs).length&&(bx+="&ec_sh="+bs),String(bC).length&&(bx+="&ec_dt="+bC),a2){for(bB in a2)Object.prototype.hasOwnProperty.call(a2,bB)&&(u(a2[bB][1])||(a2[bB][1]=""),u(a2[bB][2])||(a2[bB][2]=""),u(a2[bB][3])&&0!==String(a2[bB][3]).length||(a2[bB][3]=0),u(a2[bB][4])&&0!==String(a2[bB][4]).length||(a2[bB][4]=1),bA.push(a2[bB]));bx+="&ec_items="+k(JSON2.stringify(bA))}bx=ax(bx,ad,"ecommerce",by),aB(bx,aQ)}function a6(bs,bw,bv,bu,bt,bx){String(bs).length&&u(bw)&&a7(bs,bw,bv,bu,bt,bx)}function bl(bs){u(bs)&&a7("",bs,"","","","")}function aJ(bv,bw){var bs=new Date,bu=ax("action_name="+k(P(bv||aw)),bw,"log");aB(bu,aQ),aa&&ap&&!aX&&(aX=!0,O(s,"click",bd),O(s,"mouseup",bd),O(s,"mousedown",bd),O(s,"mousemove",bd),O(s,"mousewheel",bd),O(C,"DOMMouseScroll",bd),O(C,"scroll",bd),O(s,"keypress",bd),O(s,"keydown",bd),O(s,"keyup",bd),O(C,"resize",bd),O(C,"focus",bd),O(C,"blur",bd),aV=bs.getTime(),setTimeout(function bt(){var bx;bs=new Date,aV+ap>bs.getTime()&&(aa<bs.getTime()&&(bx=ax("ping=1",bw,"ping"),aB(bx,aQ)),setTimeout(bt,ap))},ap))}function ac(bu,bw,bs,bv,bx){if(0===String(bu).length||0===String(bw).length)return!1;var bt=ax("e_c="+k(bu)+"&e_a="+k(bw)+(u(bs)?"&e_n="+k(bs):"")+(u(bv)?"&e_v="+k(bv):""),bx,"event");aB(bt,aQ)}function au(bs,bv,bt,bw){var bu=ax("search="+k(bs)+(bv?"&search_cat="+k(bv):"")+(u(bt)?"&search_count="+bt:""),bw,"sitesearch");aB(bu,aQ)}function aO(bs,bv,bu){var bt=ax("idgoal="+bs+(bv?"&revenue="+bv:""),bu,"goal");aB(bt,aQ)}function bb(bt,bs,bv){var bu=ax(bs+"="+k(bj(bt)),bv,"link");aB(bu,aQ)}function bg(bt,bs){return""!==bt?bt+bs.charAt(0).toUpperCase()+bs.slice(1):bs}function at(bx){var bw,bs,bu,bv=["","webkit","ms","moz"];if(!aC)for(bs=0;bs<bv.length;bs++)if(bu=bv[bs],Object.prototype.hasOwnProperty.call(s,bg(bu,"hidden"))){"prerender"===s[bg(bu,"visibilityState")]&&(bw=!0);break}return bw?void O(s,bu+"visibilitychange",function bt(){s.removeEventListener(bu+"visibilitychange",bt,!1),bx()}):void bx()}function aq(bu,bt){var bv,bs="(^| )(piwik[_-]"+bt;if(bu)for(bv=0;bv<bu.length;bv++)bs+="|"+bu[bv];return bs+=")( |$)",new RegExp(bs)}function ba(bv,bs,bw){var bu=aq(aK,"download"),bt=aq(an,"link"),bx=new RegExp("\\.("+ay+")([?&#]|$)","i");return bt.test(bv)?"link":bu.test(bv)||bx.test(bs)?"download":bw?0:"link"}function a1(bx){var bv,bt,bs;for(bv=bx.parentNode;null!==bv&&u(bv)&&(bt=bx.tagName.toUpperCase(),"A"!==bt&&"AREA"!==bt);)bx=bv,bv=bx.parentNode;if(u(bx.href)){var by=bx.hostname||b(bx.href),bz=by.toLowerCase(),bu=bx.href.replace(by,bz),bw=new RegExp("^(javascript|vbscript|jscript|mocha|livescript|ecmascript|mailto):","i");bw.test(bu)||(bs=ba(bx.className,bu,aT(bz)),bs&&(bu=g(bu),bb(bu,bs)))}}function bq(bs){var bt,bu;bs=bs||C.event,bt=bs.which||bs.button,bu=bs.target||bs.srcElement,"click"===bs.type?bu&&a1(bu):"mousedown"===bs.type?1!==bt&&2!==bt||!bu?aM=ah=null:(aM=bt,ah=bu):"mouseup"===bs.type&&(bt===aM&&bu===ah&&a1(bu),aM=ah=null)}function a0(bt,bs){bs?(O(bt,"mouseup",bq,!1),O(bt,"mousedown",bq,!1)):O(bt,"click",bq,!1)}function aI(bt){if(!aZ){aZ=!0;var bu,bs=aq(Z,"ignore"),bv=s.links;if(bv)for(bu=0;bu<bv.length;bu++)bs.test(bv[bu].className)||a0(bv[bu],bt)}}function bk(){var bt,bu,bv={pdf:"application/pdf",qt:"video/quicktime",realp:"audio/x-pn-realaudio-plugin",wma:"application/x-mplayer2",dir:"application/x-director",fla:"application/x-shockwave-flash",java:"application/x-java-vm",gears:"application/x-googlegears",ag:"application/x-silverlight"},bs=new RegExp("Mac OS X.*Safari/").test(e.userAgent)?C.devicePixelRatio||1:1;if(!new RegExp("MSIE").test(e.userAgent)){if(e.mimeTypes&&e.mimeTypes.length)for(bt in bv)Object.prototype.hasOwnProperty.call(bv,bt)&&(bu=e.mimeTypes[bv[bt]],bf[bt]=bu&&bu.enabledPlugin?"1":"0");"unknown"!=typeof navigator.javaEnabled&&u(e.javaEnabled)&&e.javaEnabled()&&(bf.java="1"),o(C.GearsFactory)&&(bf.gears="1"),bf.cookie=X()}bf.res=F.width*bs+"x"+F.height*bs}var aG,aa,ap,ab,ad,ag,bn,bh,aC,aF,aV,aM,ah,aY,aE,W=I(s.domain,C.location.href,v()),a9=w(W[0]),bo=W[1],aW=W[2],bp=!1,aU="GET",U=ao||"",al="",aR="",be=aP||"",aw=s.title,ay="7z|aac|apk|ar[cj]|as[fx]|avi|azw3|bin|csv|deb|dmg|docx?|epub|exe|flv|gif|gz|gzip|hqx|jar|jpe?g|js|mobi|mp(2|3|4|e?g)|mov(ie)?|ms[ip]|od[bfgpst]|og[gv]|pdf|phps|png|pptx?|qtm?|ra[mr]?|rpm|sea|sit|tar|t?bz2?|tgz|torrent|txt|wav|wm[av]|wpd||xlsx?|xml|z|zip",aS=[a9],Z=[],aK=[],an=[],aQ=500,aA=["pk_campaign","piwik_campaign","utm_campaign","utm_source","utm_medium"],av=["pk_kwd","piwik_kwd","utm_term"],bm="_pk_",ae=!1,ak=63072e6,am=18e5,aH=15768e6,aD=!0,ar=0,Y=!1,aL={},V={},bi=200,a2={},bf={},aZ=!1,aX=!1,az=N;return bk(),aN(),{getVisitorId:function(){return S()[1]},getVisitorInfo:function(){return S()},getAttributionInfo:function(){return Q()},getAttributionCampaignName:function(){return Q()[0]},getAttributionCampaignKeyword:function(){return Q()[1]},getAttributionReferrerTimestamp:function(){return Q()[2]},getAttributionReferrerUrl:function(){return Q()[3]},setTrackerUrl:function(bs){U=bs},setSiteId:function(bs){be=bs},setCustomData:function(bs,bt){E(bs)?ad=bs:(ad||(ad=[]),ad[bs]=bt)},getCustomData:function(){return ad},appendToTrackingUrl:function(bs){aR=bs},getRequest:function(bs){return ax(bs)},setCustomVariable:function(bt,bs,bw,bu){var bv;u(bu)||(bu="visit"),u(bs)&&(u(bw)||(bw=""),bt>0&&(bs=l(bs)?bs:String(bs),bw=l(bw)?bw:String(bw),bv=[bs.slice(0,bi),bw.slice(0,bi)],"visit"===bu||2===bu?(T(),Y[bt]=bv):"page"===bu||3===bu?aL[bt]=bv:"event"===bu&&(V[bt]=bv)))},getCustomVariable:function(bt,bu){var bs;return u(bu)||(bu="visit"),"page"===bu||3===bu?bs=aL[bt]:"event"===bu?bs=V[bt]:("visit"===bu||2===bu)&&(T(),bs=Y[bt]),!u(bs)||bs&&""===bs[0]?!1:bs},deleteCustomVariable:function(bs,bt){this.getCustomVariable(bs,bt)&&this.setCustomVariable(bs,"","",bt)},setLinkTrackingTimer:function(bs){aQ=bs},setDownloadExtensions:function(bs){ay=bs},addDownloadExtensions:function(bs){ay+="|"+bs},setDomains:function(bs){aS=l(bs)?[bs]:bs,aS.push(a9)},setIgnoreClasses:function(bs){Z=l(bs)?[bs]:bs},setRequestMethod:function(bs){aU=bs||"GET"},setReferrerUrl:function(bs){aW=bs},setCustomUrl:function(bs){aG=a8(bo,bs)},setDocumentTitle:function(bs){aw=bs},setAPIUrl:function(bs){al=bs},setDownloadClasses:function(bs){aK=l(bs)?[bs]:bs},setLinkClasses:function(bs){an=l(bs)?[bs]:bs},setCampaignNameKey:function(bs){aA=l(bs)?[bs]:bs},setCampaignKeywordKey:function(bs){av=l(bs)?[bs]:bs},discardHashTag:function(bs){ab=bs},setCookieNamePrefix:function(bs){bm=bs,Y=ai()},setCookieDomain:function(bs){ag=w(bs),aN()},setCookiePath:function(bs){bn=bs,aN()},setVisitorCookieTimeout:function(bs){ak=1e3*bs},setSessionCookieTimeout:function(bs){am=1e3*bs},setReferralCookieTimeout:function(bs){aH=1e3*bs},setConversionAttributionFirstReferrer:function(bs){aF=bs},disableCookies:function(){ae=!0,bf.cookie="0"},deleteCookies:function(){R()},setDoNotTrack:function(bt){var bs=e.doNotTrack||e.msDoNotTrack;bh=bt&&("yes"===bs||"1"===bs),bh&&this.disableCookies()},addListener:function(bt,bs){a0(bt,bs)},enableLinkTracking:function(bs){n?aI(bs):A.push(function(){aI(bs)})},enableJSErrorTracking:function(){if(!bp){bp=!0;var bs=C.onerror;C.onerror=function(bx,bv,bu,bw,bt){return at(function(){var by="JavaScript Errors",bz=bv+":"+bu;bw&&(bz+=":"+bw),ac(by,bz,bx)}),bs?bs(bx,bv,bu,bw,bt):!1}}},disablePerformanceTracking:function(){aD=!1},setGenerationTimeMs:function(bs){ar=parseInt(bs,10)},setHeartBeatTimer:function(bu,bt){var bs=new Date;aa=bs.getTime()+1e3*bu,ap=1e3*bt},killFrame:function(){C.location!==C.top.location&&(C.top.location=C.location)},redirectFile:function(bs){"file:"===C.location.protocol&&(C.location=bs)},setCountPreRendered:function(bs){aC=bs},trackGoal:function(bs,bu,bt){at(function(){aO(bs,bu,bt)})},trackLink:function(bt,bs,bu){at(function(){bb(bt,bs,bu)})},trackPageView:function(bs,bt){at(x(be)?function(){H(U,al,be)}:function(){aJ(bs,bt)})},trackEvent:function(bt,bv,bs,bu){at(function(){ac(bt,bv,bs,bu)})},trackSiteSearch:function(bs,bu,bt){at(function(){au(bs,bu,bt)})},setEcommerceView:function(bv,bs,bu,bt){u(bu)&&bu.length?bu instanceof Array&&(bu=JSON2.stringify(bu)):bu="",aL[5]=["_pkc",bu],u(bt)&&String(bt).length&&(aL[2]=["_pkp",bt]),(u(bv)&&bv.length||u(bs)&&bs.length)&&(u(bv)&&bv.length&&(aL[3]=["_pks",bv]),u(bs)&&bs.length||(bs=""),aL[4]=["_pkn",bs])},addEcommerceItem:function(bw,bs,bu,bt,bv){bw.length&&(a2[bw]=[bw,bs,bu,bt,bv])},trackEcommerceOrder:function(bs,bw,bv,bu,bt,bx){a6(bs,bw,bv,bu,bt,bx)},trackEcommerceCartUpdate:function(bs){bl(bs)}}}function t(){return{push:L}}var i,G,r,c,a={},s=document,e=navigator,F=screen,C=window,f=C.performance||C.mozPerformance||C.msPerformance||C.webkitPerformance,n=!1,A=[],k=C.encodeURIComponent,B=C.decodeURIComponent,g=unescape;O(C,"beforeunload",M,!1),m(),Date.prototype.getTimeAlias=Date.prototype.getTime,G=new z;var d,p={setTrackerUrl:1,setAPIUrl:1,setSiteId:1};for(r=0;r<_paq.length;r++)d=_paq[r][0],p[d]&&(L(_paq[r]),delete _paq[r],p[d]>1&&void 0!==console&&console&&console.error&&console.error("The method "+d+' is registered more than once in "_paq" variable. Only the last call has an effect. Please have a look at the multiple Piwik trackers documentation: http://developer.piwik.org/api-reference/tracking-javascript#multiple-piwik-trackers'),p[d]++);for(r=0;r<_paq.length;r++)_paq[r]&&L(_paq[r]);return _paq=new t,c={addPlugin:function(Q,R){a[Q]=R},getTracker:function(Q,R){return new z(Q,R)},getAsyncTracker:function(){return G}},"function"==typeof define&&define.amd&&define("piwik",[],function(){return c}),c}()),window&&window.piwikAsyncInit&&window.piwikAsyncInit(),function(){var a=typeof AnalyticsTracker;"undefined"===a&&(AnalyticsTracker=Piwik)}(),"function"!=typeof piwik_log&&(piwik_log=function(b,f,d,g){function a(h){try{return eval("piwik_"+h)}catch(i){}}var c,e=Piwik.getTracker(d,f);e.setDocumentTitle(b),e.setCustomData(g),c=a("tracker_pause"),c&&e.setLinkTrackingTimer(c),c=a("download_extensions"),c&&e.setDownloadExtensions(c),c=a("hosts_alias"),c&&e.setDomains(c),c=a("ignore_classes"),c&&e.setIgnoreClasses(c),e.trackPageView(),a("install_tracker")&&(piwik_track=function(i,k,j,h){e.setSiteId(k),e.setTrackerUrl(j),e.trackLink(i,h)},e.enableLinkTracking())});