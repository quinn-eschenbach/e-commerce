(this.webpackJsonpe_commerce=this.webpackJsonpe_commerce||[]).push([[0],{102:function(t,e,n){"use strict";n.r(e);var a=n(2),r=n(0),c=n(8),i=n.n(c),o=n(14),s=n.n(o),l=n(21),d=n(34),u=n(52),j=new(n.n(u).a)("pk_21565c0065bef58fc46bf82b9af1a1d6bf75483246a0e",!0),b=n(124),p=n(126),h=n(127),m=n(128),x=n(129),f=n(130),O=n(19),g=n(122),v=n(11),y=Object(g.a)((function(t){return{appBar:Object(O.a)({boxShadow:"none",borderBottom:"1px solid rgba(0, 0, 0, 0.12)"},t.breakpoints.up("sm"),{width:"calc(100% - ".concat(0,"px)"),marginLeft:0}),title:{flexGrow:1,alignItems:"center",display:"flex",textDecoration:"none"},image:{marginRight:"10px"},menuButton:Object(O.a)({marginRight:t.spacing(2)},t.breakpoints.up("sm"),{display:"none"}),grow:{flexGrow:1},search:Object(O.a)({position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(v.b)(t.palette.common.white,.15),"&:hover":{backgroundColor:Object(v.b)(t.palette.common.white,.25)},marginRight:t.spacing(2),marginLeft:0,width:"100%"},t.breakpoints.up("sm"),{width:"auto"}),searchIcon:{padding:t.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(O.a)({padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),"px)"),transition:t.transitions.create("width"),width:"100%"},t.breakpoints.up("md"),{width:"20ch"})}})),C=n.p+"static/media/shop.34ff0682.svg",w=function(t){var e=t.onClick,n=t.cart,r=y();return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(b.a,{position:"fixed",className:r.appBar,color:"inherit",children:Object(a.jsxs)(p.a,{children:[Object(a.jsxs)(h.a,{variant:"h6",className:r.title,children:[Object(a.jsx)("img",{src:C,alt:"Agueta",height:"25px",className:r.image}),"Agueat"]}),Object(a.jsx)("div",{className:r.grow}),Object(a.jsx)("div",{className:r.button,children:Object(a.jsx)(m.a,{"aria-label":"Show cart Items",color:"inherit",className:r.openCart,onClick:e,children:Object(a.jsx)(x.a,{badgeContent:n.total_items,color:"secondary",children:Object(a.jsx)(f.a,{})})})})]})})})},k=n(136),N=n(131),_=n(132),B=n(133),R=n(134),A=n(135),I=Object(g.a)((function(){return{root:{maxWidth:"100%"},media:{height:0,paddingTop:"56.25%"},cardActions:{display:"flex",justifyContent:"flex-end"},cardContent:{display:"flex",justifyContent:"space-between"},description:{height:150,overflow:"auto"}}})),S=function(t){var e=t.product,n=t.onAddToCart,r=I();return Object(a.jsxs)(N.a,{className:r.root,children:[Object(a.jsx)(_.a,{className:r.media,image:e.media.source,title:e.name}),Object(a.jsxs)(B.a,{children:[Object(a.jsxs)("div",{className:r.cardContent,children:[Object(a.jsx)(h.a,{variant:"h5",gutterBottom:!0,children:e.name}),Object(a.jsx)(h.a,{variant:"h5",children:e.price.formatted_with_symbol})]}),Object(a.jsx)(h.a,{className:r.description,dangerouslySetInnerHTML:{__html:e.description},variant:"body2",color:"textSecondary"})]}),Object(a.jsx)(R.a,{children:Object(a.jsx)(m.a,{"aria-label":"Add to Card",onClick:function(){return n(e.id,1)},children:Object(a.jsx)(A.a,{})})})]})},T=Object(g.a)((function(t){return{toolbar:t.mixins.toolbar,content:{flexGrow:1,backgroundColor:t.palette.background.default,padding:t.spacing(3)},root:{flexGrow:1}}})),E=function(t){var e=t.products,n=t.onAddToCart,r=T();return Object(a.jsxs)("main",{className:r.content,children:[Object(a.jsx)("div",{className:r.toolbar}),Object(a.jsx)(k.a,{container:!0,justify:"center",spacing:4,children:e.map((function(t){return Object(a.jsx)(k.a,{item:!0,xs:12,sm:6,lg:3,children:Object(a.jsx)(S,{product:t,onAddToCart:n})},t.id)}))})]})},F=n(137),z=n(138),L=n(139),q=Object(g.a)((function(t){var e;return{toolbar:t.mixins.toolbar,title:{marginTop:"5%"},emptyButton:(e={minWidth:"150px"},Object(O.a)(e,t.breakpoints.down("xs"),{marginBottom:"5px"}),Object(O.a)(e,t.breakpoints.up("xs"),{marginRight:"20px"}),e),checkoutButton:{minWidth:"150px"},link:{textDecoration:"none"},cardDetails:{display:"flex",marginTop:"10%",width:"100%",justifyContent:"space-between"},buttonBack:{verticalAlign:"middle"}}})),D=Object(g.a)((function(){return{media:{height:260},cardContent:{display:"flex",justifyContent:"space-between"},cartActions:{justifyContent:"space-between"},buttons:{display:"flex",alignItems:"center"}}})),G=function(t){var e=t.item,n=t.onRemoveFromCart,r=t.onUpdateCartQty,c=D();return Object(a.jsxs)(N.a,{children:[Object(a.jsxs)(B.a,{className:c.cardContent,children:[Object(a.jsx)(h.a,{variant:"h4",children:e.name}),Object(a.jsx)(h.a,{variant:"h4",children:e.line_total.formatted_with_symbol})]}),Object(a.jsx)(R.a,{className:c.cartActions,children:Object(a.jsxs)("div",{className:c.buttons,children:[Object(a.jsx)(F.a,{type:"button",size:"small",onClick:function(){return r(e.id,e.quantity-1)},children:"-"}),Object(a.jsx)(h.a,{children:e.quantity}),Object(a.jsx)(F.a,{type:"button",size:"small",onClick:function(){return r(e.id,e.quantity+1)},children:"+"}),Object(a.jsx)(F.a,{variant:"contained",type:"button",color:"secondary",onClick:function(){return n(e.id)},children:"Remove"})]})})]})},Q=function(t){var e=t.cart,n=t.handleRemoveFromCart,r=t.handleUpdateCartQty,c=t.handleEmptyCart,i=t.onClick,o=q(),s=function(){return Object(a.jsx)(h.a,{variant:"subtitle1",children:"You have no items in your shopping cart"})},l=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(k.a,{container:!0,spacing:3,children:e.line_items.map((function(t){return Object(a.jsx)(k.a,{item:!0,xs:12,sm:12,children:Object(a.jsx)(G,{item:t,onRemoveFromCart:n,onUpdateCartQty:r})},t.id)}))}),Object(a.jsxs)("div",{className:o.cardDetails,children:[Object(a.jsxs)(h.a,{variant:"h4",children:["Subtotal: ",e.subtotal.formatted_with_symbol]}),Object(a.jsxs)("div",{children:[Object(a.jsx)(F.a,{className:o.emptyButton,size:"large",type:"button",variant:"contained",color:"secondary",onClick:c,children:"Empty Cart"}),Object(a.jsx)(F.a,{className:o.checkoutButton,size:"large",type:"button",variant:"contained",color:"primary",children:"Checkout"})]})]})]})};return e.line_items?Object(a.jsxs)(z.a,{children:[Object(a.jsx)(m.a,{"aria-label":"Close Cart",color:"inherit",onClick:i,children:Object(a.jsx)(L.a,{})}),Object(a.jsx)("div",{className:o.toolbar}),Object(a.jsx)(h.a,{className:o.title,variant:"h3",gutterBottom:!0,children:"Your Shopping Cart"}),e.line_items.length?Object(a.jsx)(l,{}):Object(a.jsx)(s,{})]}):"Loading"},U=n(140),W=Object(g.a)((function(t){return{openCart:{position:"fixed",zIndex:1e4,right:20},drawer:{width:240}}}));var J=function(){var t=Object(r.useState)([]),e=Object(d.a)(t,2),n=e[0],c=e[1],i=Object(r.useState)({}),o=Object(d.a)(i,2),u=o[0],b=o[1],p=Object(r.useState)(!1),h=Object(d.a)(p,2),m=h[0],x=h[1],f=(W(),function(){var t=Object(l.a)(s.a.mark((function t(){var e,n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.products.list();case 2:e=t.sent,n=e.data,c(n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()),O=function(){var t=Object(l.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=b,t.next=3,j.cart.retrieve();case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),g=function(){var t=Object(l.a)(s.a.mark((function t(e,n){var a,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.cart.add(e,n);case 2:a=t.sent,r=a.cart,b(r);case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),v=function(){var t=Object(l.a)(s.a.mark((function t(e,n){var a,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.cart.update(e,{quantity:n});case 2:a=t.sent,r=a.cart,b(r);case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),y=function(){var t=Object(l.a)(s.a.mark((function t(e){var n,a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.cart.remove(e);case 2:n=t.sent,a=n.cart,b(a);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),C=function(){var t=Object(l.a)(s.a.mark((function t(){var e,n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.cart.empty();case 2:e=t.sent,n=e.cart,b(n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),k=function(){x(!m)};return Object(r.useEffect)((function(){f(),O()}),[]),Object(a.jsxs)("div",{children:[Object(a.jsx)(w,{onClick:k,cart:u}),Object(a.jsx)(E,{products:n,onAddToCart:g}),Object(a.jsx)(U.a,{variant:"persistent",anchor:"right",open:m,width:"240",children:Object(a.jsx)(Q,{cart:u,onClick:k,handleRemoveFromCart:y,handleUpdateCartQty:v,handleEmptyCart:C})})]})};i.a.render(Object(a.jsx)(J,{}),document.getElementById("root"))}},[[102,1,2]]]);
//# sourceMappingURL=main.e5dec4e0.chunk.js.map