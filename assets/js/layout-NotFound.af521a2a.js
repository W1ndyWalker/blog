(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{208:function(t,n){},209:function(t,n){},217:function(t,n){},219:function(t,n){},291:function(t,n,o){},427:function(t,n,o){"use strict";o(291)},460:function(t,n,o){"use strict";o.r(n);var e=o(3),i=o(1),s=o(228),a=o(176);let c=class extends i.e{get i18n(){return this.$themeLocaleConfig.error404||Object(a.getDefaultLocale)().error404}get msg(){return this.i18n.hint[Math.floor(Math.random()*this.i18n.hint.length)]}back(){window.history.go(-1)}};c=Object(e.a)([Object(i.a)({components:{Common:s.a}})],c);var r=c,u=(o(427),o(2)),l=Object(u.a)(r,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("Common",{attrs:{sidebar:!1}},[o("main",{staticClass:"page not-found"},[o("h1",[t._v("404")]),t._v(" "),o("blockquote",{domProps:{textContent:t._s(t.msg)}}),t._v(" "),o("div",{staticClass:"action-button",on:{click:t.back}},[t._v(t._s(t.i18n.back))]),t._v(" "),o("RouterLink",{staticClass:"action-button",attrs:{to:"/"}},[t._v(t._s(t.i18n.home))])],1)])}),[],!1,null,null,null);n.default=l.exports}}]);