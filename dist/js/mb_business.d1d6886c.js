(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mb_business"],{"0bde":function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"Area"},[t._v(" "+t._s(t.text)+" ")])},i=[],a={name:"Area",created:function(){},props:{text:{require:!0}},mounted:function(){},components:{},methods:{}},c=a,r=(s("b7dc"),s("2877")),u=Object(r["a"])(c,n,i,!1,null,"13dac5c2",null);e["a"]=u.exports},1638:function(t,e,s){},"4ba6":function(t,e,s){t.exports=s.p+"img/b2.60467a5f.png"},"91d1":function(t,e,s){t.exports=s.p+"img/b3.c1f51a2e.png"},"927e":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"business_template"},[s("Area",{attrs:{text:t.business.Title}}),s("div",{staticClass:"mb-row"},[s("Underline",{attrs:{text:t.business.businessTitle}}),s("div",{staticClass:"mb-text"},[t._v(" "+t._s(t.business.businessDoc)+" ")]),t._m(0)],1),s("div",{staticClass:"mb-row model-row"},[s("Underline",{attrs:{text:t.business.modelTitle}}),s("div",{staticClass:"mb-text"},[t._v(" "+t._s(t.business.modelDoc)+" ")]),t._m(1)],1),s("div",{staticClass:"mb-row map-row"},[s("Underline",{attrs:{text:t.business.ecologyTitle,color:"#fff"}}),s("div",{staticClass:"mb-text"},[t._v(" "+t._s(t.business.ecologyDoc)+" ")]),t._m(2)],1)],1)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mb-img"},[n("img",{attrs:{src:s("f195"),alt:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mb-img"},[n("img",{attrs:{src:s("4ba6"),alt:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mb-img"},[n("img",{attrs:{src:s("91d1"),alt:""}})])}],a=s("0bde"),c=s("de3e"),r={name:"business",components:{Area:a["a"],Underline:c["a"]},data:function(){return{business:this.$language[this.$store.state.language].business}},watch:{languagetype:function(){this.business=this.$language[this.languagetype].business}},computed:{languagetype:function(){return this.$store.state.language}}},u=r,o=(s("dbf6"),s("2877")),l=Object(o["a"])(u,n,i,!1,null,null,null);e["default"]=l.exports},b7dc:function(t,e,s){"use strict";var n=s("1638"),i=s.n(n);i.a},c6fa:function(t,e,s){"use strict";var n=s("e458"),i=s.n(n);i.a},dbf6:function(t,e,s){"use strict";var n=s("e73f"),i=s.n(n);i.a},de3e:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"Underline",style:{color:t.color}},[t._v(" "+t._s(t.text)+" ")])},i=[],a={name:"Underline",props:{text:{require:!0},color:{default:"#07070D"}},created:function(){},mounted:function(){},compontents:{},methods:{}},c=a,r=(s("c6fa"),s("2877")),u=Object(r["a"])(c,n,i,!1,null,"a98bdf26",null);e["a"]=u.exports},e458:function(t,e,s){},e73f:function(t,e,s){},f195:function(t,e,s){t.exports=s.p+"img/b1.1878de2b.png"}}]);