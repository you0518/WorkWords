(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{273:function(t,n,e){"use strict";e.r(n);var o=e(3),c=e(169),r=o.default.extend({data:function(){return{output:"",outputText:""}},mounted:function(){this.output=c.default.getImageInfo.url,this.outputText=this.output?"画像が生成されました。保存して共有しましょう！":"画像が生成されていません。"},methods:{back:function(){this.$router.go(-1)}}}),h=e(40),component=Object(h.a)(r,function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"p-3"},[n("div",[this._v(this._s(this.outputText))]),n("div",[n("b-button",{attrs:{variant:"warning"},on:{click:this.back}},[this._v("戻る")])],1),n("div",{staticClass:"p-3"},[n("img",{attrs:{src:this.output,width:"550"}})])])},[],!1,null,null,null);n.default=component.exports}}]);