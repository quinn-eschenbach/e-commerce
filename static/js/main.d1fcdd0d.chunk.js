(this.webpackJsonpe_commerce=this.webpackJsonpe_commerce||[]).push([[0],{157:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(0),r=n(11),i=n.n(r),s=n(20),o=n.n(s),l=n(39),d=n(61),j=n(96),b=new(n.n(j).a)("pk_21565c0065bef58fc46bf82b9af1a1d6bf75483246a0e",!0),h=n(176),u=n(178),x=n(179),m=n(72),p=n(180),O=n(181),f=n(28),g=n(35),v=n(88),y=n(14),w=Object(v.a)((function(e){return{appBar:Object(g.a)({boxShadow:"none",borderBottom:"1px solid rgba(0, 0, 0, 0.12)"},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(0,"px)"),marginLeft:0}),title:{flexGrow:1,alignItems:"center",display:"flex",textDecoration:"none"},image:{marginRight:"10px"},menuButton:Object(g.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),grow:{display:"flex",justifyContent:"space-evenly",width:"100%",height:65,alignItems:"center",padding:"0 5%"},navitem:{display:"flex",justifyContent:"center",height:65,alignItems:"center",padding:"0 20px",cursor:"pointer",borderBottom:"5px solid transparent",textDecoration:"none",color:"black","&:hover":{borderBottom:"5px solid black"}},search:Object(g.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(y.d)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(y.d)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(g.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"})}})),C=n.p+"static/media/shop.34ff0682.svg",k=function(e){var t=e.onClick,n=e.cart,c=w();return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(h.a,{position:"fixed",className:c.appBar,color:"inherit",children:Object(a.jsxs)(u.a,{children:[Object(a.jsxs)(x.a,{variant:"h6",className:c.title,children:[Object(a.jsx)("img",{src:C,alt:"Agueta",height:"25px",className:c.image}),"AGUETA"]}),Object(a.jsxs)("div",{className:c.grow,children:[Object(a.jsx)(f.b,{to:"/",className:c.navitem,children:Object(a.jsx)(x.a,{children:"Home"})}),Object(a.jsx)(f.b,{to:"/shop",className:c.navitem,children:Object(a.jsx)(x.a,{children:"Shop"})}),Object(a.jsx)(f.b,{to:"/about",className:c.navitem,children:Object(a.jsx)(x.a,{children:"About Us"})})]}),Object(a.jsx)("div",{className:c.button,children:Object(a.jsx)(m.a,{"aria-label":"Show cart Items",color:"inherit",className:c.openCart,onClick:t,children:Object(a.jsx)(p.a,{badgeContent:n.total_items,color:"secondary",children:Object(a.jsx)(O.a,{})})})})]})})})},N=n(187),B=n(182),I=n(183),_=n(184),A=n(185),S=n(186),T=Object(v.a)((function(){return{root:{maxWidth:"100%"},media:{height:0,paddingTop:"56.25%"},cardActions:{display:"flex",justifyContent:"flex-end"},cardContent:{display:"flex",justifyContent:"space-between"},description:{height:150,overflow:"auto"},categories:{display:"flex",height:"1em"},link:{textDecoration:"none",color:"black"}}})),R=function(e){var t=e.product,n=e.onAddToCart,c=T();return Object(a.jsx)(f.b,{className:c.link,to:"/product/".concat(t.id),children:Object(a.jsxs)(B.a,{className:c.root,children:[Object(a.jsx)(I.a,{className:c.media,image:t.media.source,title:t.name}),Object(a.jsxs)(_.a,{children:[Object(a.jsxs)("div",{className:c.cardContent,children:[Object(a.jsx)(x.a,{variant:"h5",gutterBottom:!0,children:t.name}),Object(a.jsx)(x.a,{variant:"h5",children:t.price.formatted_with_symbol})]}),Object(a.jsx)("div",{className:c.categories,children:t.categories.map((function(e){return Object(a.jsxs)(x.a,{children:[e.name,","]})}))})]}),Object(a.jsx)(A.a,{children:Object(a.jsx)(m.a,{"aria-label":"Add to Card",onClick:function(){return n(t.id,1)},children:Object(a.jsx)(S.a,{})})})]})})},z=Object(v.a)((function(e){return{toolbar:e.mixins.toolbar,content:{flexGrow:1,backgroundColor:e.palette.background.default,padding:e.spacing(3)},root:{flexGrow:1}}})),D=function(e){var t=e.products,n=e.onAddToCart;z();return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(N.a,{container:!0,justify:"center",spacing:4,children:t.map((function(e){return Object(a.jsx)(N.a,{item:!0,xs:12,sm:6,lg:3,children:Object(a.jsx)(R,{product:e,onAddToCart:n})},e.id)}))})})},L=n(188),F=n(189),E=n(190),U=Object(v.a)((function(e){var t;return{toolbar:e.mixins.toolbar,title:{marginTop:"5%"},emptyButton:{minWidth:"150px",marginBottom:5},checkoutButton:{minWidth:"150px",marginBottom:5},link:{textDecoration:"none"},cardDetails:(t={display:"flex",marginTop:"10%",width:"100%",justifyContent:"space-between",flexDirection:"column",alignItems:"center"},Object(g.a)(t,"marginTop","auto"),Object(g.a)(t,"marginBottom",20),t),buttonWrapper:{marginTop:10,width:"100%",display:"flex",justifyContent:"space-evenly"},drawer:{width:400,display:"flex",flexDirection:"column",height:"100%"},grid:{overflowX:"hidden",marginBottom:20},buttonBack:{height:65,width:65}}})),W=Object(v.a)((function(){return{media:{height:260},cardContent:{display:"flex",justifyContent:"space-between"},cartActions:{justifyContent:"center"},buttons:{display:"flex",alignItems:"center"},card:{marginBottom:10}}})),q=function(e){var t=e.item,n=e.onRemoveFromCart,c=e.onUpdateCartQty,r=W();return Object(a.jsxs)(B.a,{className:r.card,children:[Object(a.jsxs)(_.a,{className:r.cardContent,children:[Object(a.jsx)(x.a,{variant:"h4",children:t.name}),Object(a.jsx)(x.a,{variant:"h4",children:t.line_total.formatted_with_symbol})]}),Object(a.jsx)(A.a,{className:r.cartActions,children:Object(a.jsxs)("div",{className:r.buttons,children:[Object(a.jsx)(L.a,{type:"button",size:"small",onClick:function(){return c(t.id,t.quantity-1)},children:"-"}),Object(a.jsx)(x.a,{children:t.quantity}),Object(a.jsx)(L.a,{type:"button",size:"small",onClick:function(){return c(t.id,t.quantity+1)},children:"+"}),Object(a.jsx)(L.a,{variant:"contained",type:"button",color:"secondary",onClick:function(){return n(t.id)},children:"Remove"})]})})]})},G=function(e){var t=e.cart,n=e.handleRemoveFromCart,c=e.handleUpdateCartQty,r=e.handleEmptyCart,i=e.onClick,s=U(),o=function(){return Object(a.jsx)(x.a,{variant:"subtitle1",children:"You have no items in your shopping cart"})},l=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(N.a,{className:s.grid,container:!0,spacing:3,children:t.line_items.map((function(e){return Object(a.jsx)(N.a,{item:!0,xs:12,children:Object(a.jsx)(q,{item:e,onRemoveFromCart:n,onUpdateCartQty:c})},e.id)}))}),Object(a.jsxs)("div",{className:s.cardDetails,children:[Object(a.jsxs)(x.a,{variant:"h4",children:["Subtotal: ",t.subtotal.formatted_with_symbol]}),Object(a.jsxs)("div",{className:s.buttonWrapper,children:[Object(a.jsx)(L.a,{className:s.emptyButton,size:"large",type:"button",variant:"contained",color:"secondary",onClick:r,children:"Empty Cart"}),Object(a.jsx)(L.a,{className:s.checkoutButton,size:"large",type:"button",variant:"contained",color:"primary",children:"Checkout"})]})]})]})};return t.line_items?Object(a.jsxs)(F.a,{fixed:!0,className:s.drawer,children:[Object(a.jsx)("div",{children:Object(a.jsx)(m.a,{"aria-label":"Close Cart",color:"inherit",onClick:i,className:s.buttonBack,children:Object(a.jsx)(E.a,{})})}),t.line_items.length?Object(a.jsx)(l,{}):Object(a.jsx)(o,{})]}):"Loading"},H=n(191),Q=n(199),P=n(195),J=n(197),M=n(192),V=n(193),X=n(194),Y=n(196),K=n(9),Z=Object(v.a)((function(){return{image:{maxHeight:"70vh",width:"100%"},icons:{display:"flex",flexDirection:"column",alignItems:"center"}}})),$=n(97),ee=n.n($),te=function(e){var t=e.products,n=Z(),c=Object(K.f)().id,r=t.filter((function(e){return e.id==c}))[0];return Object(a.jsxs)(a.Fragment,{children:[r&&r.id?Object(a.jsxs)(N.a,{container:!0,spacing:3,children:[Object(a.jsx)(N.a,{item:!0,xs:12,sm:8,children:Object(a.jsx)(B.a,{children:Object(a.jsx)(ee.a,{autoPlay:!1,children:r.assets.map((function(e){return Object(a.jsx)("div",{src:e.url,style:{height:"70vh",backgroundImage:'url("'.concat(e.url,'")'),backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"contain"}},e.id)}))})})}),Object(a.jsx)(N.a,{item:!0,xs:12,sm:4,children:Object(a.jsxs)(N.a,{container:!0,spacing:3,children:[Object(a.jsx)(N.a,{item:!0,xs:12,children:Object(a.jsxs)(B.a,{children:[Object(a.jsxs)(_.a,{children:[Object(a.jsx)(x.a,{variant:"h4",children:r.name}),Object(a.jsx)(x.a,{variant:"body2",gutterBottom:!0,children:"200ml"}),Object(a.jsx)(x.a,{variant:"h6",children:r.price.formatted_with_symbol}),Object(a.jsx)(x.a,{variant:"h6",gutterBottom:!0,children:"inkl. MwSt. zzgl. Versandkosten"}),Object(a.jsx)(x.a,{variant:"body1",children:"Sofort versandfertig, Lieferzeit ca. 2-4 Werktage"}),"kaufbutton"]}),Object(a.jsx)(A.a,{children:Object(a.jsxs)("div",{style:{display:"flex"},children:[Object(a.jsx)(L.a,{type:"button",size:"small",children:"-"}),Object(a.jsx)(x.a,{children:"1"}),Object(a.jsx)(L.a,{type:"button",size:"small",children:"+"}),Object(a.jsx)(L.a,{variant:"contained",type:"button",color:"primary",startIcon:Object(a.jsx)(S.a,{}),children:"in den Warenkorb"})]})})]})}),Object(a.jsx)(N.a,{item:!0,xs:12,children:Object(a.jsx)(B.a,{children:Object(a.jsx)(_.a,{children:Object(a.jsxs)(N.a,{container:!0,spacing:1,justify:"center",alignItems:"center",children:[Object(a.jsxs)(N.a,{item:!0,xs:4,style:n.icon,children:[Object(a.jsx)(M.a,{}),Object(a.jsx)(x.a,{children:"Sichere Bezahlung"})]}),Object(a.jsxs)(N.a,{item:!0,xs:4,style:n.icon,children:[Object(a.jsx)(V.a,{}),Object(a.jsx)(x.a,{children:"schneller Versand"})]}),Object(a.jsxs)(N.a,{item:!0,xs:4,style:n.icon,children:[Object(a.jsx)(X.a,{}),Object(a.jsx)(x.a,{children:"weltweite Lieferung"})]})]})})})}),Object(a.jsxs)(N.a,{item:!0,xs:12,children:[Object(a.jsxs)(Q.a,{children:[Object(a.jsx)(P.a,{expandIcon:Object(a.jsx)(Y.a,{}),children:Object(a.jsx)(x.a,{children:"Beschreibung"})}),Object(a.jsx)(J.a,{children:Object(a.jsx)(x.a,{dangerouslySetInnerHTML:{__html:r.description},variant:"body2"})})]}),Object(a.jsxs)(Q.a,{children:[Object(a.jsx)(P.a,{expandIcon:Object(a.jsx)(Y.a,{}),children:Object(a.jsx)(x.a,{children:"Anwendung"})}),Object(a.jsx)(J.a,{children:Object(a.jsx)(x.a,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),Object(a.jsxs)(Q.a,{children:[Object(a.jsx)(P.a,{expandIcon:Object(a.jsx)(Y.a,{}),children:Object(a.jsx)(x.a,{children:"Inhaltsstoffe"})}),Object(a.jsx)(J.a,{children:Object(a.jsx)(x.a,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]})]})]})})]}):Object(a.jsx)("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:Object(a.jsx)(H.a,{})}),console.log(r)]})},ne=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("h1",{children:"Home Page"})})},ae=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("h1",{children:"About Us"})})},ce=function(e){var t=e.products,n=e.handleAddToCart;return Object(a.jsx)("div",{children:Object(a.jsx)(D,{products:t,onAddToCart:n})})},re=n(198),ie={height:65};var se=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)({}),s=Object(d.a)(i,2),j=s[0],h=s[1],u=Object(c.useState)(!1),x=Object(d.a)(u,2),m=x[0],p=x[1],O=function(){var e=Object(l.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.products.list();case 2:t=e.sent,n=t.data,r(n),console.log(n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=h,e.next=3,b.cart.retrieve();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(l.a)(o.a.mark((function e(t,n){var a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.cart.add(t,n);case 2:a=e.sent,c=a.cart,h(c);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),y=function(){var e=Object(l.a)(o.a.mark((function e(t,n){var a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.cart.update(t,{quantity:n});case 2:a=e.sent,c=a.cart,h(c);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),w=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.cart.remove(t);case 2:n=e.sent,a=n.cart,h(a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(l.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.cart.empty();case 2:t=e.sent,n=t.cart,h(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){p(!m)};return Object(c.useEffect)((function(){O(),g()}),[]),Object(a.jsx)("div",{children:Object(a.jsxs)(f.a,{children:[Object(a.jsx)(k,{onClick:N,cart:j}),Object(a.jsx)("div",{style:ie}),Object(a.jsx)(re.a,{variant:"persistent",anchor:"right",open:m,children:Object(a.jsx)(G,{cart:j,onClick:N,handleRemoveFromCart:w,handleUpdateCartQty:y,handleEmptyCart:C})}),Object(a.jsx)("main",{style:{marginTop:65},children:Object(a.jsxs)(K.c,{children:[Object(a.jsx)(K.a,{exact:!0,path:"/",children:Object(a.jsx)(ne,{})}),Object(a.jsx)(K.a,{exact:!0,path:"/about",children:Object(a.jsx)(ae,{})}),Object(a.jsx)(K.a,{exact:!0,path:"/shop",children:Object(a.jsx)(ce,{products:n,handleAddToCart:v})}),Object(a.jsx)(K.a,{exact:!0,path:"/product/:id",children:Object(a.jsx)(te,{products:n})})]})})]})})};i.a.render(Object(a.jsx)(se,{}),document.getElementById("root"))}},[[157,1,2]]]);
//# sourceMappingURL=main.d1fcdd0d.chunk.js.map