webpackJsonp([10],{20:function(t,n){},42:function(t,n,e){"use strict";(function(t){e(6),e(4),e(5),e(20);var n=e(1),a=function(t){if(t&&t.__esModule)return t;var n={};if(null!=t)for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e]);return n.default=t,n}(n),i=e(3),o=e(2);t(function(t){(0,i.initNav)("custody"),(0,i.initNavAction)(),c(),(0,i.initLoginAction)(),r(),u(),(0,o.initLoginUserAction)()});var c=function(){(0,o.loadLoginInfo)(function(t){})},r=function(){var n=t(".content .tab .tab-page.jianhu .menu .item a"),e=t(".content .tab .tab-page.jianhu .main > article"),i=t("body > .content"),o=1;n.click(function(c){var r=n.index(c.currentTarget);if(r!==o){var u=t(e[r]),h=u.parent(),g=h.parent();t(e[o]).removeClass("checked"),t(u).addClass("checked"),t(n[o]).parent().removeClass("checked"),t(n[r]).parent().addClass("checked"),o=r;var f=a.getBoxSize$(h,"height")+a.getBoxSize$(g,"height");i.height(f)}})},u=function(){var n=t("body > .content"),e=t(".content .tab .tab-page.jianhu .main"),i=t(".content .tab .tab-page.jianhu .tab-content"),o=a.getBoxSize$(e,"height")+a.getBoxSize$(i,"height");n.height(o)}}).call(n,e(0))}},[42]);