(function(e){function t(t){for(var n,u,o=t[0],s=t[1],i=t[2],f=0,b=[];f<o.length;f++)u=o[f],Object.prototype.hasOwnProperty.call(c,u)&&c[u]&&b.push(c[u][0]),c[u]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);l&&l(t);while(b.length)b.shift()();return a.push.apply(a,i||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,o=1;o<r.length;o++){var s=r[o];0!==c[s]&&(n=!1)}n&&(a.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},c={app:0},a=[];function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var i=0;i<o.length;i++)t(o[i]);var l=s;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"404f":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),c=function(e){return Object(n["h"])("data-v-2a883264"),e=e(),Object(n["g"])(),e},a={class:"container"},u={class:"main"},o=c((function(){return Object(n["e"])("h1",{"data-cy":"title"},"Search on Itunes",-1)})),s={class:"section section__form"},i=c((function(){return Object(n["e"])("br",null,null,-1)})),l=c((function(){return Object(n["e"])("button",{"data-cy":"submit-button",type:"submit"},"SEARCH",-1)})),f={key:0,class:"grid","data-cy":"albums"},b=["href"],p=["src","alt"],d={class:"album__copyright"},m={key:1,"data-cy":"no-albums-found"},h=c((function(){return Object(n["e"])("p",null,"No albums found for this artist",-1)})),j=[h];function O(e,t,r,c,h,O){return Object(n["f"])(),Object(n["d"])("div",a,[Object(n["e"])("main",u,[o,Object(n["e"])("section",s,[Object(n["e"])("form",{class:"form",onSubmit:t[1]||(t[1]=Object(n["m"])((function(){return O.getAlbums&&O.getAlbums.apply(O,arguments)}),["prevent"]))},[Object(n["l"])(Object(n["e"])("input",{"data-cy":"artist-input","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.form.artist=t}),type:"text",name:"search"},null,512),[[n["k"],e.form.artist]]),i,l],32)]),e.hasSearched?(Object(n["f"])(),Object(n["d"])(n["a"],{key:0},[O.hasAlbums?(Object(n["f"])(),Object(n["d"])("section",f,[(Object(n["f"])(!0),Object(n["d"])(n["a"],null,Object(n["i"])(e.albums,(function(e){return Object(n["f"])(),Object(n["d"])("a",{key:e.collectionId,href:e.collectionViewUrl,target:"_blank",rel:"noopener noreferrer",class:"album"},[Object(n["e"])("figure",null,[Object(n["e"])("img",{src:e.artworkUrl100,alt:e.collectionName},null,8,p),Object(n["e"])("h3",null,Object(n["j"])(e.collectionName),1),Object(n["e"])("p",d,Object(n["j"])(e.copyright),1)])],8,b)})),128))])):(Object(n["f"])(),Object(n["d"])("div",m,j))],64)):Object(n["c"])("",!0)])])}var v=r("1da1"),y=(r("96cf"),r("ac1f"),r("5319"),r("d3b7"),"/api/artists"),g=function(){var e=Object(v["a"])(regeneratorRuntime.mark((function e(t){var r,n,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,r="".concat(y,"/").concat(t,"/albums"),e.next=4,fetch(r);case 4:return n=e.sent,e.next=7,n.json();case 7:return c=e.sent,e.abrupt("return",c.results);case 11:e.prev=11,e.t0=e["catch"](0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),w=function(e){var t=e.replace(/\s/g,"+");return encodeURI(t)},k={name:"App",data:function(){return{albums:[],hasSearched:!1,form:{artist:""}}},computed:{parsedArtist:function(){return w(this.form.artist)},hasAlbums:function(){var e;return null===(e=this.albums)||void 0===e?void 0:e.length}},methods:{getAlbums:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,r=e.parsedArtist,t.next=4,g(r);case 4:n=t.sent,e.albums=n,t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),console.error(t.t0);case 11:return t.prev=11,e.hasSearched=!0,t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})))()}}},x=(r("acc0"),r("6b0d")),_=r.n(x);const S=_()(k,[["render",O],["__scopeId","data-v-2a883264"]]);var A=S;r("404f");Object(n["b"])(A).mount("#app")},acc0:function(e,t,r){"use strict";r("e079")},e079:function(e,t,r){}});
//# sourceMappingURL=app.c4d26e8b.js.map