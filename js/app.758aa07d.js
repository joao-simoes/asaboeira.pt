(function(t){function e(e){for(var o,r,n=e[0],c=e[1],l=e[2],m=0,d=[];m<n.length;m++)r=n[m],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],o=!0,n=1;n<a.length;n++){var c=a[n];0!==s[c]&&(o=!1)}o&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var o={},s={app:0},i=[];function r(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=o,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(a,o,function(e){return t[e]}.bind(null,o));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/asaboeira.pt/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],c=n.push.bind(n);n.push=e,n=n.slice();for(var l=0;l<n.length;l++)e(n[l]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"08db":function(t,e,a){t.exports=a.p+"img/1.4d79dbbf.jpg"},"0e7e":function(t,e,a){"use strict";a("57d8")},1045:function(t,e,a){"use strict";a("2264")},1342:function(t,e,a){"use strict";a("93f4")},1899:function(t,e,a){t.exports=a.p+"img/3.a824ac09.jpg"},"1eef":function(t,e,a){},"1fbb":function(t,e,a){},2264:function(t,e,a){},"332e":function(t,e,a){t.exports=a.p+"img/1.62d25e5e.jpg"},"38f3":function(t,e,a){t.exports=a.p+"img/1.03a187e6.jpg"},4131:function(t,e,a){"use strict";a("1fbb")},"42ce":function(t,e,a){var o={"./quarto1/1.jpg":"ea4f","./quarto1/2.jpg":"e5f2","./quarto1/3.jpg":"1899","./quarto1/4.jpg":"7340","./quarto10/1.jpg":"f472","./quarto2/1.jpg":"8c03","./quarto2/2.jpg":"f2d6","./quarto2/3.jpg":"9e68","./quarto3/1.jpg":"08db","./quarto3/2.jpg":"cacf","./quarto4/1.jpg":"fd6f","./quarto4/2.jpg":"cb44","./quarto5/1.jpg":"b70e","./quarto6/1.jpg":"801d","./quarto7/1.jpg":"7539","./quarto8/1.jpg":"8774","./quarto8/2.jpg":"c0a2","./quarto9/1.jpg":"332e"};function s(t){var e=i(t);return a(e)}function i(t){if(!a.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}s.keys=function(){return Object.keys(o)},s.resolve=i,t.exports=s,s.id="42ce"},"4e68":function(t,e,a){t.exports=a.p+"img/5.221f4470.jpg"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-center",attrs:{id:"app"}},[a("div",{staticClass:"container"},[a("Nav")],1),a("div",{staticClass:"mt-5 pages"},[a("vue-page-transition",{attrs:{name:"fade"}},[a("router-view")],1)],1),a("div",{staticClass:"container"},[a("Footer")],1)])},i=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row m-4"},[t._m(0),a("div",{staticClass:"col-4 col-md-9 d-none d-md-block"},[a("ul",{staticClass:"d-flex justify-content-around align-items-end h-100"},[a("li",{staticClass:"p-2",attrs:{id:"home"}},[a("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),a("li",{staticClass:"p-2",attrs:{id:"nossoespaco"}},[a("router-link",{attrs:{to:"/nossoespaco"}},[t._v("O nosso espaço")])],1),a("li",{staticClass:"p-2",attrs:{id:"alojamento"}},[a("router-link",{attrs:{to:"/alojamentos"}},[t._v("Alojamentos")])],1),a("li",{staticClass:"p-2",attrs:{id:"servicos"}},[a("router-link",{attrs:{to:"/servicos"}},[t._v("Serviços")])],1),a("li",{staticClass:"p-2",attrs:{id:"contactos"}},[a("router-link",{attrs:{to:"/contactos"}},[t._v("Contactos")])],1)])]),a("div",{staticClass:"col-4 col-md-9 d-block d-md-none"},[a("font-awesome-icon",{staticClass:"\n        fa-lg\n        d-block d-md-none\n        position-fixed\n        top-25\n        end-0\n        me-4\n        text-end\n      ",staticStyle:{"z-index":"1000"},attrs:{icon:"fa-solid fa-bars"},on:{click:function(e){return t.menu()}}}),a("div",{staticClass:"sideMenu",attrs:{id:"sideMenu"}},[a("div",{staticClass:"position-relative"},[a("ul",{staticStyle:{"margin-top":"30%"}},[a("li",{staticClass:"py-4",attrs:{id:"home"},on:{click:function(e){return t.menu()}}},[a("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),a("li",{staticClass:"py-4",attrs:{id:"nossoespaco"},on:{click:function(e){return t.menu()}}},[a("router-link",{attrs:{to:"/nossoespaco"}},[t._v("O nosso espaço")])],1),a("li",{staticClass:"py-4",attrs:{id:"alojamento"},on:{click:function(e){return t.menu()}}},[a("router-link",{attrs:{to:"/alojamentos"}},[t._v("Alojamentos")])],1),a("li",{staticClass:"py-4",attrs:{id:"servicos"},on:{click:function(e){return t.menu()}}},[a("router-link",{attrs:{to:"/servicos"}},[t._v("Serviços")])],1),a("li",{staticClass:"py-4",attrs:{id:"contactos"},on:{click:function(e){return t.menu()}}},[a("router-link",{attrs:{to:"/contactos"}},[t._v("Contactos")])],1)])])])],1)])},n=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"col-8 col-md-3"},[o("img",{attrs:{src:a("cf05"),alt:"A Saboeira",width:"100%",height:"auto"}})])}],c=(a("d3b7"),a("159b"),{name:"Nav",data:function(){return{active:"home",open:!1}},methods:{setActive:function(t){document.getElementById(this.active).classList.remove("activeTab"),this.active=t,document.getElementById(this.active).classList.add("activeTab")},menu:function(){var t=document.getElementById("sideMenu");this.open?t.style.right="-100%":t.style.right="0",this.open=!this.open}},mounted:function(){var t=this;document.getElementById(this.active).classList.add("activeTab");var e=document.querySelectorAll("li");e.forEach((function(e){e.addEventListener("click",(function(){t.setActive(e.id)}))}))}}),l=c,u=(a("760c"),a("2877")),m=Object(u["a"])(l,r,n,!1,null,"4e239d2d",null),d=m.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"d-flex justify-content-between align-items-end mt-4"},[a("div",{staticClass:"text-start"},[t._m(0),a("p",[a("font-awesome-icon",{staticClass:"me-2",attrs:{icon:"fa-solid fa-envelope"}}),t._v("asaboeira@hotmail.com ")],1),a("p",[a("font-awesome-icon",{staticClass:"me-2",attrs:{icon:"fa-solid fa-phone-alt"}}),t._v("+351 241 094 913 ")],1),a("p",[a("font-awesome-icon",{staticClass:"me-2",attrs:{icon:"fa-solid fa-home"}}),t._v("Rua da Estação 3, 6040-024 Belver ")],1)]),a("div",{staticClass:"text-end w-25 w-md-50"},[a("div",[a("a",{attrs:{href:"https://www.facebook.com/turismorural.asaboeira",target:"_blank"}},[a("font-awesome-icon",{staticClass:"me-2",attrs:{icon:"fab fa-facebook",size:"xl"}})],1),a("a",{attrs:{href:"https://www.instagram.com/asaboeira.turismorural/",target:"_blank"}},[a("font-awesome-icon",{staticClass:"me-2",attrs:{icon:"fab fa-instagram",size:"xl"}})],1)]),t._m(1)])]),a("div",{staticClass:"row mt-4 text-center"},[a("p",{staticClass:"my-4 credits"},[t._v(" All Rights Reserved © "),t._m(2),t._v(", "+t._s(t.year)+" ")])])])},f=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h5",[a("b",[t._v("A Saboeira - Turismo Rural")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"my-3"},[o("a",{attrs:{href:"https://www.livroreclamacoes.pt/inicio/reclamacao ",target:"_blank"}},[o("img",{attrs:{src:a("e7f9"),alt:"Livro de Reclamações",width:"40%"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"https://www.joao-simoes.pt",target:"_blank"}},[a("b",[t._v("João Simões")])])}],v={name:"Footer",data:function(){return{year:0}},mounted:function(){var t=new Date;this.year=t.getFullYear()}},g=v,h=(a("bbf7"),Object(u["a"])(g,p,f,!1,null,"163632c4",null)),b=h.exports,_={name:"App",components:{Nav:d,Footer:b}},C=_,x=(a("5c0b"),Object(u["a"])(C,s,i,!1,null,null,null)),w=x.exports,j=a("8c4f"),y=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},q=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container py-5 my-5"},[o("div",{staticClass:"position-relative"},[o("img",{attrs:{src:a("d1f5"),alt:"Rio Tejo",width:"80%"}}),o("img",{staticClass:"d-none d-md-block",staticStyle:{position:"absolute",bottom:"-5%",right:"0"},attrs:{src:a("38f3"),alt:"Pessoa",width:"20%"}})])])}],k={name:"Index"},O=k,E=(a("0e7e"),Object(u["a"])(O,y,q,!1,null,"6a2e3a30",null)),N=E.exports,S=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Q=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"nossoespaco"},[o("div",{staticClass:"container"},[o("div",{staticClass:"py-5",staticStyle:{position:"relative","text-align":"left"}},[o("img",{attrs:{src:a("cedd"),alt:"Nosso Espaço #1"}}),o("div",{staticClass:"infoBox p-3"},[o("p",[t._v(" Nesta casa cheia de história, vamos acrescentar mais uma. História essa que me envolve, uma saboeira, nascida e criada na Vila de Belver, e por isso mesmo, sou com orgulho filha desta terra. Preservando e homenageando as pessoas que edificaram este espaço, o Sr. António Seara e o Sr. Giorgio Formica, que reconstruiu esta belíssima casa, com o seu toque pessoal, que se vê em cada canto e recanto, desejamos que quem por aqui passar sinta a história aqui presente. Outrora uma fábrica de alpergatas, que pertenceu ao Sr. António Seara, edificada por sugestão do chefe da estação de Belver, pelas vantagens evidentes de proximidade da estação. Este introduziu o fabrico de diversos novos modelos de alpergatas e tornou-se importador de uma grande diversidade de papéis de tabaco, sendo que duas marcas seriam exclusivas – O Alentejano e o Luce. Com o seu sentido de empreendedorismo e inovação, deu trabalho a mais de 100 pessoas, tanto de Belver como do Gavião. Foi uma grande figura na história do concelho, sem dúvida. Mais tarde, tomou outro rumo pelas mãos do Sr. Giorgio Formica e família, com o desejo tornar o edifício num turismo rural. A primeira vez que a família Formica foi a Belver foi em 1996 e o adquiram a propriedade no ano seguinte. A restruturação ocorreu de 1997 até 2006, ano esse em que abriu ao público enquanto turismo rural. ")])])]),o("div",{staticClass:"py-5",staticStyle:{position:"relative","text-align":"right"}},[o("img",{attrs:{src:a("a760"),alt:"Nosso Espaço #1"}}),o("div",{staticClass:"infoBox2 p-3"},[o("p",[t._v(" A serenidade do espaço e toda a sua envolvência natural é de extrema beleza, que aconselhamos vivamente a experienciar. Estamos de coração e braços abertos para vos receber. Venham fazer parte da nossa história. Esperamos que quem por aqui passar, leve aquilo que procurou ao escolher este lugar. ")])])])])])}],P=(a("4131"),{}),M=Object(u["a"])(P,S,Q,!1,null,"7770b646",null),A=M.exports,$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"contactos"},[a("div",{staticClass:"container py-5"},t._l(t.rooms,(function(t,e){return a("Room",{key:e,attrs:{index:e,name:t.name,desc:t.desc,priceOneNight:t.priceOneNight,priceMoreNights:t.priceMoreNights,nrPeople:t.nrPeople,extras:t.extras,imgsQt:t.imgsQt}})})),1)])},T=[],B=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"row py-5"},[o("div",{staticClass:"col-12 col-md-7"},[o("carousel",{attrs:{perPage:1}},t._l(t.imgsQt,(function(e){return o("slide",{key:e},[o("img",{attrs:{src:a("42ce")("./quarto"+(t.index+1)+"/"+e+".jpg"),alt:"Quarto"+e,width:"100%"}})])})),1)],1),o("div",{staticClass:"col-12 col-md-5 text-start ps-5"},[o("h2",{staticClass:"mt-5"},[o("b",[t._v(t._s(t.name))])]),o("h6",{staticClass:"mt-4"},[t._v(t._s(t.desc))]),o("h6",{staticClass:"mt-5"},[o("b",[t._v(t._s(t.priceOneNight))]),t._v(" uma noite")]),o("h6",{staticClass:"mt-2"},[o("b",[t._v(t._s(t.priceMoreNights))]),t._v(" p/ noite")]),o("h6",{staticClass:"mt-4"},[t._v("Nr. Pessoas: "),o("b",[t._v(t._s(t.nrPeople))])]),t._m(0),o("ul",t._l(t.extras,(function(e){return o("li",{key:e},[t._v(" "+t._s(e)+" ")])})),0)])])},R=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h6",{staticClass:"mt-4"},[a("b",[t._v("Extras:")])])}],V=(a("a9e3"),{props:{name:String,desc:String,priceOneNight:String,priceMoreNights:String,nrPeople:String,index:Number,extras:Array,imgsQt:Number}}),F=V,z=Object(u["a"])(F,B,R,!1,null,"55975306",null),W=z.exports,D={data:function(){return{rooms:[{name:"Quarto 1",priceOneNight:"70€",priceMoreNights:"65€",desc:"Quarto com uma cama de casal e uma cama de solteiro.",nrPeople:"3",extras:["WC","Aquecimento","TV"],imgsQt:4},{name:"Quarto 2",priceOneNight:"80€",priceMoreNights:"75€",desc:"Quarto com 1 cama de casal, com uma deslumbrante vista para o Rio Tejo.",nrPeople:"2",extras:["WC","Ar-condicionado","TV","Vista Rio Tejo"],imgsQt:3},{name:"Quarto 3",priceOneNight:"80€",priceMoreNights:"75€",desc:"Quarto com 1 cama de casal, com uma deslumbrante vista para o Rio Tejo .",nrPeople:"3",extras:["WC","Ar-condicionado","TV","Vista Rio Tejo"],imgsQt:2},{name:"Quarto 4",priceOneNight:"70€",priceMoreNights:"65€",desc:"Quarto com 1 cama de casal e uma cama de solteiro.",nrPeople:"3",extras:["WC","Aquecimento","TV"],imgsQt:2},{name:"Quarto 5",priceOneNight:"70€",priceMoreNights:"65€",desc:"Duas camas de solteiro.",nrPeople:"2",extras:["WC","Aquecimento","TV"],imgsQt:1},{name:"Quarto 6",priceOneNight:"70€",priceMoreNights:"65€",desc:"Quarto com 1 cama de casal .",nrPeople:"2",extras:["WC","Ar-condicionado","TV"],imgsQt:1},{name:"Quarto 7",priceOneNight:"70€",priceMoreNights:"65€",desc:"Quarto com 1 cama de casal.",nrPeople:"2",extras:["WC","Ar-condicionado","TV"],imgsQt:1},{name:"Quarto 8",priceOneNight:"100€",priceMoreNights:"120€",desc:"Quarto com 1 cama de casal, 1 casa de solteiro e beliche. (Mínimo de 2 noites)",nrPeople:"4",extras:["WC Partilhado","Sala e Cozinha comum","Espaço independente da casa ","TV"],imgsQt:2},{name:"Quarto 9",priceOneNight:"100€",priceMoreNights:"120€",desc:"Quarto com 1 cama de casal, 1 casa de solteiro e beliche. (Mínimo de 2 noites)",nrPeople:"4",extras:["WC Partilhado","Espaço independente da casa ","TV"],imgsQt:1},{name:"Quarto 10",priceOneNight:"100€",priceMoreNights:"120€",desc:"Quarto com 1 cama de casal, 1 casa de solteiro e beliche. (Mínimo de 2 noites)",nrPeople:"3",extras:["WC Privado","Sala e Cozinha privativa","Espaço Independente da Casa","TV"],imgsQt:1}]}},components:{Room:W}},L=D,I=(a("1045"),Object(u["a"])(L,$,T,!1,null,"e883aee6",null)),G=I.exports,H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nossoespaco"},[a("div",{staticClass:"container"},[t._m(0),a("div",{staticClass:"pb-5",staticStyle:{"text-align":"left"}},[a("h4",{staticClass:"my-5"},[t._v(" Podemos ser o elo de ligação para diversos tipos de atividades *, tais como: ")]),a("ul",[t._m(1),a("li",[a("a",{attrs:{href:"https://gaviadventure.com/",target:"_blank"}},[t._v("GaviAdventure "),a("font-awesome-icon",{attrs:{icon:"fa-solid fa-long-arrow-alt-right"}})],1)]),t._m(2),a("li",[a("a",{attrs:{href:"http://www.cm-gaviao.pt/pt/turismo/museus",target:"_blank"}},[t._v("Núcleo Museológico das Mantas e Tapeçarias de Belver "),a("font-awesome-icon",{attrs:{icon:"fa-solid fa-long-arrow-alt-right"}})],1)]),a("li",[a("a",{attrs:{href:"http://www.cm-gaviao.pt/pt/turismo/museus",target:"_blank"}},[t._v("Museu do Sabão "),a("font-awesome-icon",{attrs:{icon:"fa-solid fa-long-arrow-alt-right"}})],1)]),t._m(3),a("li",[a("a",{attrs:{href:"http://www.cm-gaviao.pt/pt/turismo/gastronomia",target:"_blank"}},[t._v("O Belver "),a("font-awesome-icon",{attrs:{icon:"fa-solid fa-long-arrow-alt-right"}})],1)]),a("li",[a("a",{attrs:{href:"http://www.cm-gaviao.pt/pt/turismo/gastronomia",target:"_blank"}},[t._v("O Castelo "),a("font-awesome-icon",{attrs:{icon:"fa-solid fa-long-arrow-alt-right"}})],1)]),a("li",[a("a",{attrs:{href:"http://www.cm-gaviao.pt/pt/turismo/gastronomia",target:"_blank"}},[t._v("O Dente Leve "),a("font-awesome-icon",{attrs:{icon:"fa-solid fa-long-arrow-alt-right"}})],1)]),a("li",[a("a",{attrs:{href:"http://www.cm-gaviao.pt/pt/turismo/gastronomia",target:"_blank"}},[t._v("O Alamal")]),a("font-awesome-icon",{attrs:{icon:"fa-solid fa-long-arrow-alt-right"}})],1)]),t._m(4)])])])},J=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"py-5",staticStyle:{position:"relative","text-align":"left"}},[o("img",{attrs:{src:a("ab86"),alt:"Serviços #1"}}),o("img",{staticClass:"imgOver d-none d-md-block",attrs:{src:a("4e68"),alt:"Serviços #2"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"mt-4 mb-2",staticStyle:{"border-bottom":"1px solid black",width:"20%"}},[a("h5",[a("b",[t._v("Desporto / Aventura")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"mt-4 mb-2",staticStyle:{"border-bottom":"1px solid black",width:"20%"}},[a("h5",[a("b",[t._v("Cultura")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"mt-4 mb-2",staticStyle:{"border-bottom":"1px solid black",width:"20%"}},[a("h5",[a("b",[t._v("Restaurantes em Belver")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("b",[t._v("* todas as atividades devem ser solicitadas antecipadamente!")])])}],U=(a("de5b"),{}),Y=Object(u["a"])(U,H,J,!1,null,"5201fd36",null),K=Y.exports,X=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"contactos"},[o("div",{staticClass:"container"},[o("div",{staticClass:"row py-4"},[t._m(0),o("div",{staticClass:"col-12 col-md-6 my-5 py-3 text-md-start text-center"},[o("p",[t._v(" A Saboeira gostaria de vos pedir que deixem aqui as vossas opiniões, sugestões ou dúvidas, para que desta forma possamos oferecer-vos a melhor estadia, neste paraíso junto ao Rio Tejo. ")]),o("p",[o("font-awesome-icon",{staticClass:"me-2",attrs:{icon:"fa-solid fa-envelope"}}),t._v("asaboeira@hotmail.com ")],1),o("p",[o("font-awesome-icon",{staticClass:"me-2",attrs:{icon:"fa-solid fa-phone-alt"}}),t._v("+351 241 094 913 ")],1),o("p",[o("font-awesome-icon",{staticClass:"me-2",attrs:{icon:"fa-solid fa-home"}}),t._v("Rua da Estação 3, 6040-024 Belver ")],1),o("img",{staticClass:"mt-4",attrs:{src:a("7220"),alt:"Contactos #2",width:"100%",height:"auto"}})])]),o("div",{staticClass:"row py-4"},[o("form",{staticClass:"w-50 mx-auto form_contact",attrs:{id:"request_form"}},[o("h3",{staticClass:"mb-2"},[t._v("Formulário")]),t._m(1),t._m(2),t._m(3),o("button",{staticClass:"btn",staticStyle:{"background-color":"#202020",color:"white"},attrs:{id:"btt_submit",type:"submit"},on:{click:t.submit_form}},[t._v(" Enviar ")])])]),t._m(4)])])},Z=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"col-12 col-md-6"},[o("div",{staticStyle:{position:"relative"}},[o("img",{attrs:{src:a("de17"),alt:"Contactos #1",width:"70%",height:"auto"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"my-3"},[a("input",{staticClass:"form-control rounded-pill",attrs:{id:"client_name",type:"text",name:"client_name",placeholder:"Nome"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"my-3"},[a("input",{staticClass:"form-control rounded-pill",attrs:{id:"client_email",type:"email",name:"client_email",placeholder:"oteu@mail.pt"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"my-3"},[a("textarea",{staticClass:"form-control rounded-3",attrs:{id:"client_desc",type:"text",name:"client_desc",placeholder:"Descrição",rows:"15"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row py-4"},[a("iframe",{attrs:{width:"900",height:"500",frameborder:"0",scrolling:"no",marginheight:"0",marginwidth:"0",id:"gmap_canvas",src:"https://maps.google.com/maps?width=900&height=500&hl=en&q=Saboeira%20Belver+()&t=k&z=16&ie=UTF8&iwloc=B&output=embed"}})])}],tt={methods:{submit_form:function(t){t.preventDefault(),alert("Pedimos desculpa, mas este formulário estará disponível em breve. Por favor, sinta-se à vontade para usar qualquer outro meio de comunicação! :)")}}},et=tt,at=(a("1342"),Object(u["a"])(et,X,Z,!1,null,"1d795a16",null)),ot=at.exports;o["a"].use(j["a"]);var st=[{path:"/",name:"Index",component:N},{path:"/nossoespaco",name:"ONossoEspaço",component:A},{path:"/alojamentos",name:"Alojamentos",component:G},{path:"/servicos",name:"Serviços",component:K},{path:"/contactos",name:"Contactos",component:ot}],it=new j["a"]({mode:"hash",base:"/asaboeira.pt/",routes:st,scrollBehavior:function(){return{x:0,y:0}}}),rt=it,nt=a("f0eb"),ct=a("0a63"),lt=a.n(ct),ut=a("ecee"),mt=a("c074"),dt=a("f2d1"),pt=a("ad3d");ut["c"].add(mt["d"],mt["b"],mt["e"],mt["c"],dt["b"],dt["a"],mt["a"]),o["a"].component("font-awesome-icon",pt["a"]),o["a"].use(nt["default"]),o["a"].use(lt.a),o["a"].config.productionTip=!1,new o["a"]({router:rt,render:function(t){return t(w)}}).$mount("#app")},"57d8":function(t,e,a){},"5c0b":function(t,e,a){"use strict";a("9c0c")},"5df2":function(t,e,a){},7220:function(t,e,a){t.exports=a.p+"img/6.e871ff6b.jpg"},7340:function(t,e,a){t.exports=a.p+"img/4.7b516a45.jpg"},7539:function(t,e,a){t.exports=a.p+"img/1.854ab9bc.jpg"},"760c":function(t,e,a){"use strict";a("b754")},"801d":function(t,e,a){t.exports=a.p+"img/1.55c17d66.jpg"},8774:function(t,e,a){t.exports=a.p+"img/1.751f0770.jpg"},"8c03":function(t,e,a){t.exports=a.p+"img/1.b61fc778.jpg"},"93f4":function(t,e,a){},"9c0c":function(t,e,a){},"9e68":function(t,e,a){t.exports=a.p+"img/3.82e955d0.jpg"},a760:function(t,e,a){t.exports=a.p+"img/3.d2169267.jpg"},ab86:function(t,e,a){t.exports=a.p+"img/4.965c2d60.jpg"},b70e:function(t,e,a){t.exports=a.p+"img/1.b4be31db.jpg"},b754:function(t,e,a){},bbf7:function(t,e,a){"use strict";a("1eef")},c0a2:function(t,e,a){t.exports=a.p+"img/2.e8841287.jpg"},cacf:function(t,e,a){t.exports=a.p+"img/2.62d884e3.jpg"},cb44:function(t,e,a){t.exports=a.p+"img/2.a6f9835d.jpg"},cedd:function(t,e,a){t.exports=a.p+"img/2.92a28459.jpg"},cf05:function(t,e,a){t.exports=a.p+"img/logo.530e6157.png"},d1f5:function(t,e,a){t.exports=a.p+"img/0.dca1023d.jpg"},de17:function(t,e,a){t.exports=a.p+"img/7.2e8903da.jpg"},de5b:function(t,e,a){"use strict";a("5df2")},e5f2:function(t,e,a){t.exports=a.p+"img/2.dc72c12d.jpg"},e7f9:function(t,e,a){t.exports=a.p+"img/livro_de_reclamacoes.fa13a2e2.jpeg"},ea4f:function(t,e,a){t.exports=a.p+"img/1.b88ca89a.jpg"},f2d6:function(t,e,a){t.exports=a.p+"img/2.0448efe7.jpg"},f472:function(t,e,a){t.exports=a.p+"img/1.3fb91d72.jpg"},fd6f:function(t,e,a){t.exports=a.p+"img/1.8e90cbee.jpg"}});
//# sourceMappingURL=app.758aa07d.js.map