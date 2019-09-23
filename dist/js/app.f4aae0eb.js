(function(t){function e(e){for(var n,i,o=e[0],c=e[1],l=e[2],d=0,p=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(p.length)p.shift()();return a.push.apply(a,l||[]),s()}function s(){for(var t,e=0;e<a.length;e++){for(var s=a[e],n=!0,o=1;o<s.length;o++){var c=s[o];0!==r[c]&&(n=!1)}n&&(a.splice(e--,1),t=i(i.s=s[0]))}return t}var n={},r={app:0},a=[];function i(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=n,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(s,n,function(e){return t[e]}.bind(null,n));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;a.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0084":function(t,e,s){"use strict";var n=s("8ea3"),r=s.n(n);e["default"]=r.a},"4bdd":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("f751"),s("097d"),s("f9e3");var n=s("2b0e"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("NavBar"),s("router-view",{staticClass:"container"})],1)},a=[],i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm"},[s("h5",{staticClass:"my-0 mr-md-auto font-weight-normal"},[s("router-link",{staticClass:"logo",attrs:{to:"/"}},[t._v("DemoApp Bike Rental")])],1),s("nav",{staticClass:"my-2 my-md-0 mr-md-3"},[s("router-link",{staticClass:"p-2 text-dark",attrs:{to:"/"}},[t._v("Home")]),t._v("| "),s("router-link",{staticClass:"p-2 text-dark",attrs:{to:"/rent-a-bike"}},[t._v("Rent-A-Bike")])],1),s("Total")],1)},o=[],c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("router-link",{attrs:{to:"/checkout",href:"#"}},[t._v("\n  Checkout "),s("CartIcon"),t._v(" $"+t._s(t.totalCost)+"\n")],1)},l=[],u=s("ffef"),d={name:"Total",components:{CartIcon:u["default"]},data:function(){return{}},computed:{totalCost:function(){return this.$store.getters.getTotalCost}}},p=d,f=s("2877"),m=Object(f["a"])(p,c,l,!1,null,"469aa264",null),v=m.exports,h={name:"NavBar",components:{Total:v}},b=h,g=(s("a290"),Object(f["a"])(b,i,o,!1,null,"70b0c8e8",null)),_=g.exports,y={name:"home",components:{NavBar:_}},C=y,x=Object(f["a"])(C,r,a,!1,null,null,null),k=x.exports,w=s("8c4f"),j=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("Welcome")],1)},$=[],S=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"px-3 py-3 pt-md-5 text-center d-flex justify-conten-between flex-column"},[t._m(0),t._m(1),s("p",{staticClass:"lead"},[t._v("\n    We have an amazing collection of bikes for rent. Your satisfaction is very important to us. Click\n    below to browse our not-so-large collection of bikes\n  ")]),s("router-link",{staticClass:"btn btn-outline-primary align-self-center mb-3",attrs:{to:"/rent-a-bike"}},[t._v("Rent-A-Bike")]),t._m(2)],1)},B=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("img",{staticClass:"img-fluid",attrs:{alt:"Vue logo",src:s("cf05")}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h1",{staticClass:"display-4"},[t._v("\n    Welcome to\n    "),s("br"),t._v("DemoApp Bike Rental\n  ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("small",{staticClass:"text-muted"},[t._v("\n    This App was developed by Julian Tejera using Vue.js. jats.tejera@gmail.com. Click\n    "),s("a",{attrs:{href:"/download",target:"_blank",rel:"noopener noreferrer"}},[t._v("HERE")]),t._v(" to download this app\n  ")])}],A={name:"Welcome"},O=A,T=Object(f["a"])(O,S,B,!1,null,null,null),E=T.exports,M={name:"home",components:{Welcome:E},created:function(){}},R=M,H=Object(f["a"])(R,j,$,!1,null,null,null),P=H.exports,L=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"about"},[t.isBike?s("div",[s("div",{staticClass:"px-3 py-3 text-center d-flex flex-column"},[s("h1",{staticClass:"display-4"},[t._v("Available Bikes")]),s("p",{staticClass:"lead"},[t._v("Choose the Bike that best fits your need")]),t.topMessage?s("p",{staticClass:"lead",class:[t.isErrorMessage?"text-danger":"text-success"],domProps:{innerHTML:t._s(t.topMessage)}}):t._e()]),t._l(t.bikes,(function(t){return s("BikeSpec",{key:t.id,attrs:{product:t}})}))],2):t._e(),t.isAccesories?s("div",[t._m(0),t._l(t.accesories,(function(t){return s("BikeSpec",{key:t.id,attrs:{product:t}})}))],2):t._e(),s("div",{staticClass:"col text-center"},[t.isAnySelected?s("p",{staticClass:"lead text-success"},[t._v("Click below to continue")]):t._e(),t.isBike?s("button",{staticClass:"btn btn-outline-primary align-self-center mb-3",on:{click:t.goToAccesories}},[t._v("Select\n      Accesories")]):t._e(),t.isAccesories?s("router-link",{staticClass:"btn btn-outline-primary align-self-center mb-3",attrs:{to:"/checkout"}},[t._v("Checkout!\n    ")]):t._e()],1)])},I=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"px-3 py-3 text-center d-flex flex-column"},[s("h1",{staticClass:"display-4"},[t._v("Accesories")]),s("p",{staticClass:"lead"},[t._v("Be safe, choose from the accesories and addons below")])])}],z=(s("96cf"),s("3b8d")),N=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card my-3 d-flex justify-content-around flex-sm-row flex-column"},[s("div",{staticClass:"col-auto d-flex justify-content-center"},[s("img",{staticClass:"img-fluid m-1 align-self-center",attrs:{width:"100",height:"100",src:t.product.image,alt:""}})]),s("div",{staticClass:"card-body text-center"},[s("h4",{staticClass:"card-title"},[t._v(t._s(t.product.name))]),s("p",{staticClass:"card-text"},[t._v("Product Type: "+t._s(t.product.product_type))])]),s("div",{staticClass:"card-body text-center"},[s("p",{staticClass:"card-text d-flex justify-content-between"},[t._v("\n      $"+t._s(t.product.price)+"\n      "),s("span",{staticClass:"badge"},[t._v("\n        X\n        "+t._s(t.itemCount(t.product.id))+"\n      ")])]),s("div",{staticClass:"col-auto"},[s("button",{staticClass:"btn btn-block btn-outline-primary",attrs:{type:"button"},on:{click:t.selectThisItem}},[t._v("Select")]),t.itemCount(t.product.id)?s("button",{staticClass:"btn btn-block btn-outline-danger",attrs:{type:"button"},on:{click:t.removeThisItem}},[t._v("Remove")]):t._e()])])])},W=[],D={name:"BikeSpec",props:{product:Object},created:function(){console.log("Bike Spec was Created")},methods:{selectThisItem:function(){var t=this.product.id;this.$store.commit("addToList",t)},removeThisItem:function(){var t=this.product.id;this.$store.commit("removeFromList",t)},itemCount:function(t){var e=this.$store.state.cart.filter((function(e){return e.id==t}));return e.length}}},J=D,V=Object(f["a"])(J,N,W,!1,null,"0804c915",null),q=V.exports,F={name:"Rent-A-Bike",components:{BikeSpec:q},data:function(){return{isBike:!1,isAccesories:!1,isErrorMessage:!1,topMessage:""}},created:function(){var t=Object(z["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.isBike=!0,this.$store.dispatch("getBikesList");case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),computed:{isAnySelected:function(){return this.$store.state.cart.length>=1},bikes:function(){return this.$store.getters.getBikes},accesories:function(){return this.$store.getters.getAccesories}},methods:{goToAccesories:function(){this.validateSelection()?(console.log("going to accesories"),this.isBike=!1,this.isAccesories=!0):console.log("Not going to accesories")},updateProductList:function(){this.validateSelection(),this.products=this.$store.state.products,console.log(this.$store.state.products),console.log(this.products)},validateSelection:function(){var t="";return this.isAnySelected?(t="Great! You can add more bikes to your rental reservation, or blick below to choose your accesories",this.isErrorMessage=!1,this.topMessage=t,!0):(t="Please select a bike before choosing accesory",this.isErrorMessage=!0,this.topMessage=t,!1)}},watch:{isAnySelected:function(){this.validateSelection()}}},U=F,Y=Object(f["a"])(U,L,I,!1,null,null,null),X=Y.exports,G=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"about"},[t.cart<=0&&!t.isComplete?s("div",[s("div",{staticClass:"px-3 py-3 pt-md-5 text-center d-flex justify-conten-between flex-column"},[s("h3",{staticClass:"display-5"},[t._v(" Ups!! Your cart is empty ")]),s("p",{staticClass:"lead"},[t._v("Click below to begin your amazing rental experience with DemoApp")]),s("router-link",{staticClass:"btn btn-outline-primary align-self-center mb-3",attrs:{to:"/rent-a-bike"}},[t._v("Rent-A-Bike")]),s("small",{staticClass:"text-muted"},[t._v("This App was developed by Julian Tejera using Vue.js. jats.tejera@gmail.com")])],1)]):s("div",[t.isSummary?s("div",[t._m(0),t._l(t.cart,(function(t){return s("CheckoutBikeSpec",{key:t.id,attrs:{product:t}})})),s("div",{staticClass:"col text-center d-flex flex-column"},[s("router-link",{staticClass:"btn btn-outline-secondary align-self-center mb-3",attrs:{to:"/rent-a-bike"}},[t._v("Modify Reservation\n        ")]),s("button",{staticClass:"btn btn-primary align-self-center mb-3",on:{click:t.reserveNow}},[t._v("Reserve Now")]),s("small",{staticClass:"text-muted"},[t._v("All reservations are subject to a cancellation fee if, if cancelled within 24 hours\n          prior to the reservation time.")])],1)],2):t._e()]),t.isComplete?s("div",[t._m(1)]):t._e()])},K=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"px-3 py-3 text-center d-flex flex-column"},[s("h1",{staticClass:"display-4"},[t._v("Checkout")]),s("p",{staticClass:"lead"},[t._v("Here is your reservation summary")]),s("small",{staticClass:"text-muted"},[t._v('If everything looks correct, click "Reserve Now" to proceed. or modify\n          reservation')])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"px-3 py-3 pt-md-5 text-center d-flex justify-conten-between flex-column"},[n("div",[n("img",{staticClass:"img-fluid",attrs:{alt:"Vue logo",src:s("cf05")}})]),n("h1",{staticClass:"display-4"},[t._v(" Thank you!")]),n("p",{staticClass:"lead"},[t._v(" I hope you liked this small SPA Vue App.")]),n("p",{staticClass:"lead"},[t._v(" Please feel free to contact me at any time (at the email below) if you have any questions")]),n("p",{staticClass:"lead"},[t._v(" Julian Tejera. jats.tejera@gmail.com or 917-773-2818")]),n("a",{staticClass:"btn btn-outline-success align-self-center mb-3",attrs:{href:"/download",target:"_blank"}},[t._v("DOWNLOAD THIS APP")])])}],Q=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card my-3 d-flex justify-content-around flex-sm-row flex-column"},[s("div",{staticClass:"col-auto d-flex justify-content-center"},[s("img",{staticClass:"img-fluid m-1 align-self-center",attrs:{width:"100",height:"100",src:t.product.image,alt:""}})]),s("div",{staticClass:"card-body text-center"},[s("h4",{staticClass:"card-title"},[t._v(t._s(t.product.name))]),s("p",{staticClass:"card-text"},[t._v("Product Type: "+t._s(t.product.product_type))])]),s("div",{staticClass:"card-body text-center d-flex justify-content-center"},[s("p",{staticClass:"card-text align-self-center"},[t._v("$"+t._s(t.product.price)+" X "+t._s(t.itemCount(t.product.id)))])])])},Z=[],tt={name:"BikeSpec",props:{product:Object},created:function(){console.log("Bike Spec was Created")},methods:{selectThisItem:function(){var t=this.product.id;this.$store.commit("addToList",t)},removeThisItem:function(){var t=this.product.id;this.$store.commit("removeFromList",t)},itemCount:function(t){var e=this.$store.state.cart.filter((function(e){return e.id==t}));return e.length}}},et=tt,st=Object(f["a"])(et,Q,Z,!1,null,"8ad3c986",null),nt=st.exports,rt={name:"Rent-A-Bike",components:{CheckoutBikeSpec:nt},data:function(){return{isSummary:!1,isComplete:!1}},created:function(){var t=Object(z["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.isSummary=!0;case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),computed:{isAnySelected:function(){return this.$store.state.cart.length>=1},cart:function(){return this.$store.getters.getCart.filter(this.onlyUnique)}},methods:{onlyUnique:function(t,e,s){return s.indexOf(t)===e},reserveNow:function(){this.isSummary=!1,this.isComplete=!0,this.$store.dispatch("complete")}},watch:{}},at=rt,it=Object(f["a"])(at,G,K,!1,null,null,null),ot=it.exports;n["a"].use(w["a"]);var ct=new w["a"]({routes:[{path:"/",name:"home",component:P},{path:"/rent-a-bike",name:"rent-a-bike",component:X},{path:"/checkout",name:"checkout",component:ot}]}),lt=s("2f62");n["a"].use(lt["a"]);var ut=new lt["a"].Store({state:{totalCost:0,products:[],cart:[]},mutations:{updateProducts:function(t){this.products=t},addToList:function(t,e){console.log(t.cart);var s=t.products.filter((function(t){return t.id==e}));console.log(s),t.cart.push(s[0])},removeFromList:function(t,e){var s=t.cart.filter((function(t){return t.id!=e}));console.log(s),t.cart=s}},actions:{getBikesList:function(){var t=Object(z["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("/bikerentals.json").then(function(){var t=Object(z["a"])(regeneratorRuntime.mark((function t(e){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.json();case 2:return s=t.sent,t.next=5,s.products;case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 2:return this.state.products=t.sent,t.next=5,console.log(this.state.products);case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),complete:function(){console.log("running"),this.state.totalCost=0,this.state.products=[],this.state.cart=[]}},getters:{getBikes:function(t){return t.products.filter((function(t){return"bike"==t.product_type}))},getCart:function(t){return console.log("getting cart"),t.cart},getAccesories:function(t){return t.products.filter((function(t){return"bike"!=t.product_type}))},getTotalCost:function(t){return t.cart.length>=1?t.cart.reduce((function(t,e){return t+e.price}),0):0}}});n["a"].config.productionTip=!1,new n["a"]({router:ct,store:ut,render:function(t){return t(k)}}).$mount("#app")},"71a6":function(t,e,s){"use strict";var n=s("4bdd"),r=s.n(n);r.a},"7f2a":function(t,e,s){},"8ea3":function(t,e){},a290:function(t,e,s){"use strict";var n=s("7f2a"),r=s.n(n);r.a},b2a0:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("svg",{staticClass:"CartSvg",attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 19.25 19.25","xml:space":"preserve"}},[s("g",[s("g",{attrs:{id:"Layer_1_107_"}},[s("g",[s("path",{attrs:{d:"M19.006,2.97c-0.191-0.219-0.466-0.345-0.756-0.345H4.431L4.236,1.461     C4.156,0.979,3.739,0.625,3.25,0.625H1c-0.553,0-1,0.447-1,1s0.447,1,1,1h1.403l1.86,11.164c0.008,0.045,0.031,0.082,0.045,0.124     c0.016,0.053,0.029,0.103,0.054,0.151c0.032,0.066,0.075,0.122,0.12,0.179c0.031,0.039,0.059,0.078,0.095,0.112     c0.058,0.054,0.125,0.092,0.193,0.13c0.038,0.021,0.071,0.049,0.112,0.065c0.116,0.047,0.238,0.075,0.367,0.075     c0.001,0,11.001,0,11.001,0c0.553,0,1-0.447,1-1s-0.447-1-1-1H6.097l-0.166-1H17.25c0.498,0,0.92-0.366,0.99-0.858l1-7     C19.281,3.479,19.195,3.188,19.006,2.97z M17.097,4.625l-0.285,2H13.25v-2H17.097z M12.25,4.625v2h-3v-2H12.25z M12.25,7.625v2     h-3v-2H12.25z M8.25,4.625v2h-3c-0.053,0-0.101,0.015-0.148,0.03l-0.338-2.03H8.25z M5.264,7.625H8.25v2H5.597L5.264,7.625z      M13.25,9.625v-2h3.418l-0.285,2H13.25z"}}),s("circle",{attrs:{cx:"6.75",cy:"17.125",r:"1.5"}}),s("circle",{attrs:{cx:"15.75",cy:"17.125",r:"1.5"}})])])])])},r=[];s.d(e,"a",(function(){return n})),s.d(e,"b",(function(){return r}))},cf05:function(t,e,s){t.exports=s.p+"img/logo.82b9c7a5.png"},ffef:function(t,e,s){"use strict";var n=s("b2a0"),r=s("0084"),a=(s("71a6"),s("2877")),i=Object(a["a"])(r["default"],n["a"],n["b"],!1,null,"45bf9766",null);e["default"]=i.exports}});
//# sourceMappingURL=app.f4aae0eb.js.map