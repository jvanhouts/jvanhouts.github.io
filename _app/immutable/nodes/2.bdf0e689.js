import{S as de,i as me,s as ce,C as we,J as j,K as It,e as be,L as jt,m as d,h as u,M as pe,b as Ee,D as r,E as Ie,F as je,G as Be,N as ge,g as B,d as N,O as Bt,P as bt,Q as Y,y as F,z as U,A as J,R as lt,B as O,k as m,q as E,a as p,l as g,r as I,c as w,n as h,T as Nt,H as St}from"../chunks/index.048b930c.js";const pt={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};function wt(o,e,n){const l=o.slice();return l[9]=e[n][0],l[10]=e[n][1],l}function et(o){let e,n=[o[10]],l={};for(let t=0;t<n.length;t+=1)l=j(l,n[t]);return{c(){e=It(o[9]),this.h()},l(t){e=jt(t,o[9],{}),d(e).forEach(u),this.h()},h(){pe(e,l)},m(t,s){Ee(t,e,s)},p(t,s){pe(e,l=ge(n,[s&16&&t[10]]))},d(t){t&&u(e)}}}function Et(o){let e=o[9],n,l=o[9]&&et(o);return{c(){l&&l.c(),n=be()},l(t){l&&l.l(t),n=be()},m(t,s){l&&l.m(t,s),Ee(t,n,s)},p(t,s){t[9]?e?ce(e,t[9])?(l.d(1),l=et(t),e=t[9],l.c(),l.m(n.parentNode,n)):l.p(t,s):(l=et(t),e=t[9],l.c(),l.m(n.parentNode,n)):e&&(l.d(1),l=null,e=t[9])},d(t){t&&u(n),l&&l.d(t)}}}function Vt(o){let e,n,l,t,s=o[4],a=[];for(let i=0;i<s.length;i+=1)a[i]=Et(wt(o,s,i));const _=o[8].default,v=we(_,o,o[7],null);let k=[pt,o[5],{width:o[2]},{height:o[2]},{stroke:o[1]},{"stroke-width":o[3]},{class:l=`lucide-icon lucide lucide-${o[0]} ${o[6].class??""}`}],b={};for(let i=0;i<k.length;i+=1)b=j(b,k[i]);return{c(){e=It("svg");for(let i=0;i<a.length;i+=1)a[i].c();n=be(),v&&v.c(),this.h()},l(i){e=jt(i,"svg",{width:!0,height:!0,stroke:!0,"stroke-width":!0,class:!0});var c=d(e);for(let f=0;f<a.length;f+=1)a[f].l(c);n=be(),v&&v.l(c),c.forEach(u),this.h()},h(){pe(e,b)},m(i,c){Ee(i,e,c);for(let f=0;f<a.length;f+=1)a[f]&&a[f].m(e,null);r(e,n),v&&v.m(e,null),t=!0},p(i,[c]){if(c&16){s=i[4];let f;for(f=0;f<s.length;f+=1){const $=wt(i,s,f);a[f]?a[f].p($,c):(a[f]=Et($),a[f].c(),a[f].m(e,n))}for(;f<a.length;f+=1)a[f].d(1);a.length=s.length}v&&v.p&&(!t||c&128)&&Ie(v,_,i,i[7],t?Be(_,i[7],c,null):je(i[7]),null),pe(e,b=ge(k,[pt,c&32&&i[5],(!t||c&4)&&{width:i[2]},(!t||c&4)&&{height:i[2]},(!t||c&2)&&{stroke:i[1]},(!t||c&8)&&{"stroke-width":i[3]},(!t||c&65&&l!==(l=`lucide-icon lucide lucide-${i[0]} ${i[6].class??""}`))&&{class:l}]))},i(i){t||(B(v,i),t=!0)},o(i){N(v,i),t=!1},d(i){i&&u(e),Bt(a,i),v&&v.d(i)}}}function zt(o,e,n){const l=["name","color","size","strokeWidth","iconNode"];let t=bt(e,l),{$$slots:s={},$$scope:a}=e,{name:_}=e,{color:v="currentColor"}=e,{size:k=24}=e,{strokeWidth:b=2}=e,{iconNode:i}=e;return o.$$set=c=>{n(6,e=j(j({},e),Y(c))),n(5,t=bt(e,l)),"name"in c&&n(0,_=c.name),"color"in c&&n(1,v=c.color),"size"in c&&n(2,k=c.size),"strokeWidth"in c&&n(3,b=c.strokeWidth),"iconNode"in c&&n(4,i=c.iconNode),"$$scope"in c&&n(7,a=c.$$scope)},e=Y(e),[_,v,k,b,i,t,e,a,s]}class Qt extends de{constructor(e){super(),me(this,e,zt,Vt,ce,{name:0,color:1,size:2,strokeWidth:3,iconNode:4})}}const st=Qt;function Wt(o){let e;const n=o[2].default,l=we(n,o,o[3],null);return{c(){l&&l.c()},l(t){l&&l.l(t)},m(t,s){l&&l.m(t,s),e=!0},p(t,s){l&&l.p&&(!e||s&8)&&Ie(l,n,t,t[3],e?Be(n,t[3],s,null):je(t[3]),null)},i(t){e||(B(l,t),e=!0)},o(t){N(l,t),e=!1},d(t){l&&l.d(t)}}}function Ct(o){let e,n;const l=[{name:"arrow-right"},o[1],{iconNode:o[0]}];let t={$$slots:{default:[Wt]},$$scope:{ctx:o}};for(let s=0;s<l.length;s+=1)t=j(t,l[s]);return e=new st({props:t}),{c(){F(e.$$.fragment)},l(s){U(e.$$.fragment,s)},m(s,a){J(e,s,a),n=!0},p(s,[a]){const _=a&3?ge(l,[l[0],a&2&&lt(s[1]),a&1&&{iconNode:s[0]}]):{};a&8&&(_.$$scope={dirty:a,ctx:s}),e.$set(_)},i(s){n||(B(e.$$.fragment,s),n=!0)},o(s){N(e.$$.fragment,s),n=!1},d(s){O(e,s)}}}function $t(o,e,n){let{$$slots:l={},$$scope:t}=e;const s=[["line",{x1:"5",y1:"12",x2:"19",y2:"12"}],["polyline",{points:"12 5 19 12 12 19"}]];return o.$$set=a=>{n(1,e=j(j({},e),Y(a))),"$$scope"in a&&n(3,t=a.$$scope)},e=Y(e),[s,e,l,t]}class Dt extends de{constructor(e){super(),me(this,e,$t,Ct,ce,{})}}const tt=Dt;function Ht(o){let e;const n=o[2].default,l=we(n,o,o[3],null);return{c(){l&&l.c()},l(t){l&&l.l(t)},m(t,s){l&&l.m(t,s),e=!0},p(t,s){l&&l.p&&(!e||s&8)&&Ie(l,n,t,t[3],e?Be(n,t[3],s,null):je(t[3]),null)},i(t){e||(B(l,t),e=!0)},o(t){N(l,t),e=!1},d(t){l&&l.d(t)}}}function Mt(o){let e,n;const l=[{name:"github"},o[1],{iconNode:o[0]}];let t={$$slots:{default:[Ht]},$$scope:{ctx:o}};for(let s=0;s<l.length;s+=1)t=j(t,l[s]);return e=new st({props:t}),{c(){F(e.$$.fragment)},l(s){U(e.$$.fragment,s)},m(s,a){J(e,s,a),n=!0},p(s,[a]){const _=a&3?ge(l,[l[0],a&2&&lt(s[1]),a&1&&{iconNode:s[0]}]):{};a&8&&(_.$$scope={dirty:a,ctx:s}),e.$set(_)},i(s){n||(B(e.$$.fragment,s),n=!0)},o(s){N(e.$$.fragment,s),n=!1},d(s){O(e,s)}}}function Rt(o,e,n){let{$$slots:l={},$$scope:t}=e;const s=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}],["path",{d:"M9 18c-4.51 2-5-2-7-2"}]];return o.$$set=a=>{n(1,e=j(j({},e),Y(a))),"$$scope"in a&&n(3,t=a.$$scope)},e=Y(e),[s,e,l,t]}class Ft extends de{constructor(e){super(),me(this,e,Rt,Mt,ce,{})}}const Ut=Ft;function Jt(o){let e;const n=o[2].default,l=we(n,o,o[3],null);return{c(){l&&l.c()},l(t){l&&l.l(t)},m(t,s){l&&l.m(t,s),e=!0},p(t,s){l&&l.p&&(!e||s&8)&&Ie(l,n,t,t[3],e?Be(n,t[3],s,null):je(t[3]),null)},i(t){e||(B(l,t),e=!0)},o(t){N(l,t),e=!1},d(t){l&&l.d(t)}}}function Ot(o){let e,n;const l=[{name:"mail"},o[1],{iconNode:o[0]}];let t={$$slots:{default:[Jt]},$$scope:{ctx:o}};for(let s=0;s<l.length;s+=1)t=j(t,l[s]);return e=new st({props:t}),{c(){F(e.$$.fragment)},l(s){U(e.$$.fragment,s)},m(s,a){J(e,s,a),n=!0},p(s,[a]){const _=a&3?ge(l,[l[0],a&2&&lt(s[1]),a&1&&{iconNode:s[0]}]):{};a&8&&(_.$$scope={dirty:a,ctx:s}),e.$set(_)},i(s){n||(B(e.$$.fragment,s),n=!0)},o(s){N(e.$$.fragment,s),n=!1},d(s){O(e,s)}}}function Yt(o,e,n){let{$$slots:l={},$$scope:t}=e;const s=[["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}]];return o.$$set=a=>{n(1,e=j(j({},e),Y(a))),"$$scope"in a&&n(3,t=a.$$scope)},e=Y(e),[s,e,l,t]}class Gt extends de{constructor(e){super(),me(this,e,Yt,Ot,ce,{})}}const Pt=Gt,Kt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABhGlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw1AUhU9TpSIVBzuIOmRonSyIijhqFYpQIdQKrTqYvPQPmjQkKS6OgmvBwZ/FqoOLs64OroIg+APi6uKk6CIl3pcUWsR44fE+zrvn8t55gNCoMM3qGgc03TbTyYSYza2KoVcEMIwwRMRkZhlzkpSCb33dUzfVXZzP8u/7s/rUvMWAgEg8ywzTJt4gnt60Dc77xBFWklXic+Ixky5I/Mh1xeM3zkWXBT4zYmbS88QRYrHYwUoHs5KpEU8RR1VNp/lC1mOV8xZnrVJjrXvyF4bz+soy12mNIIlFLEGijBTUUEYFNuK066RYSNN5wsc/5PolcinkKoORYwFVaJBdP/gf/M7WKkxOeJPCCaD7xXE+YkBoF2jWHef72HGaJ0DwGbjS2/5qA5j5JL3e1qJHQP82cHHd1pQ94HIHGHwyZFN2pSAtoVAA3s/om3LAwC3Qu+bl1jrH6QOQoaxSN8DBITBapNnrPu/u6czt355Wfj+CB3KtuAtgugAAAAZiS0dEAAAAOgCMNLEUMgAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAAd0SU1FB+cBGw0yCniQVogAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAACQElEQVRYw71WsUsbYRT/veOG/AcuvSWgkQxaEJxEF4cWuhQ6ma2DOlbBQaI4xCBdOqfdpdBCoAhN1wOngEIzWI1mios6diqCz8Hc+d1377v7cpf0Qchd3ve93++933tfPsKzMeJGGJ2xFDsAYL8dx1+aJxMRTgAS1+rxB7HJNYH6bYbfZpWEMZi2nxUiYWJqXNUcKUjXb+obOAiWBK4S18G7fjOSJDMXVAKkZRojkQYsEZHAQ52I/gGAKgEtzRP7bcaUoVxZLIgnkRAbJi/owXEH2wszYkMrPUWmHohJoQaWnqX3JEl0czBi216YMRLSszcRiFXBVNZMpxFzBNO13RiQevXpN1qVAl4fdoz+FHMAPAxNILBfm7NA5QKtSiFats1nvwWJRAnESej1eomB0vxBIxLR/VibEAAuf3y0XuvaBixuHOLo3R/jmmKxGPo/3NVySWC0N9+nc/ltCUTG8P1WBVff9gAA15+Bl8tmkDS/dA7YT8FtFy/eWvq/IrcExiM5q0nZ21y5wnnkmwsrIJooxc5+E3iWO13qp99g6fd8Y6hesfqNp3hf+jsAgFVvP/I+7IU210G05kyKz0P8MbnD6hJWQMo6qAYAeOt2ujtZwQGgVq9HvlUbrOWxSrBbraJWr2O3WjVWxaax7OQajCFNlKA24nS5DAA4PzsLZfDWCer6JBw372wu/l15IoCdSA+MugKqniT1g9p8zDxHRCc2GG5esoNuh0qIiE5tk8ssQcf7mfj+P0w/Ztlm7HR7BFNQC8zYWEWcAAAAAElFTkSuQmCC";function qt(o){let e,n,l,t,s,a,_,v,k,b,i,c,f,$,Ne,Se,Z,D,T,G,Ve,S,L,ze,Qe,fe,We,Ce,V,$e,P,De,X,H,y,He,Me,z,x,Re,Fe,ue,Ue,Je,Q,Oe,K,Ye,ee,M,te,le,nt,Ge,W,se,Pe,Ke,he,qe,Ze,C,Te,q,ve;return b=new Pt({props:{class:"inline mr-1"}}),G=new Ut({props:{size:40}}),P=new tt({props:{class:"ml-2 inline arrow mb-0.5"}}),K=new tt({props:{class:"ml-2 inline arrow mb-0.5"}}),q=new tt({props:{class:"ml-2 inline arrow mb-0.5"}}),{c(){e=m("div"),n=m("section"),l=m("h1"),t=E("Over mij"),s=p(),a=m("p"),_=E(`Ik ben een full-stack softwareontwikkelaar en houd van technisch complexe projecten. Ik wil de
			best mogelijke software bouwen en ik ben ontzettend gemotiveerd en leergierig.`),v=p(),k=m("a"),F(b.$$.fragment),i=E("hi@jvanhouts.com"),c=p(),f=m("section"),$=m("h1"),Ne=E("Recente projecten"),Se=p(),Z=m("div"),D=m("div"),T=m("div"),F(G.$$.fragment),Ve=p(),S=m("div"),L=m("h2"),ze=E("GitHub"),Qe=p(),fe=m("p"),We=E("Al mijn publiekelijk beschikbare code & projecten"),Ce=p(),V=m("a"),$e=E("Bekijken "),F(P.$$.fragment),De=p(),X=m("div"),H=m("div"),y=m("div"),He=E("U"),Me=p(),z=m("div"),x=m("h2"),Re=E("Unoty"),Fe=p(),ue=m("p"),Ue=E("Een c++ game engine gebouwd in c++ met gebruik van SDL en Box2D."),Je=p(),Q=m("a"),Oe=E("Bekijken "),F(K.$$.fragment),Ye=p(),ee=m("div"),M=m("div"),te=m("div"),le=m("img"),Ge=p(),W=m("div"),se=m("h2"),Pe=E("Slime Shooter"),Ke=p(),he=m("p"),qe=E("Een game gemaakt in Unity."),Ze=p(),C=m("a"),Te=E("Bekijken "),F(q.$$.fragment),this.h()},l(A){e=g(A,"DIV",{class:!0});var ne=d(e);n=g(ne,"SECTION",{class:!0});var ae=d(n);l=g(ae,"H1",{});var at=d(l);t=I(at,"Over mij"),at.forEach(u),s=w(ae),a=g(ae,"P",{class:!0});var ot=d(a);_=I(ot,`Ik ben een full-stack softwareontwikkelaar en houd van technisch complexe projecten. Ik wil de
			best mogelijke software bouwen en ik ben ontzettend gemotiveerd en leergierig.`),ot.forEach(u),v=w(ae),k=g(ae,"A",{href:!0,target:!0,class:!0});var Le=d(k);U(b.$$.fragment,Le),i=I(Le,"hi@jvanhouts.com"),Le.forEach(u),ae.forEach(u),c=w(ne),f=g(ne,"SECTION",{class:!0});var R=d(f);$=g(R,"H1",{});var rt=d($);Ne=I(rt,"Recente projecten"),rt.forEach(u),Se=w(R),Z=g(R,"DIV",{class:!0});var it=d(Z);D=g(it,"DIV",{class:!0});var _e=d(D);T=g(_e,"DIV",{class:!0});var ct=d(T);U(G.$$.fragment,ct),ct.forEach(u),Ve=w(_e),S=g(_e,"DIV",{});var oe=d(S);L=g(oe,"H2",{class:!0});var ft=d(L);ze=I(ft,"GitHub"),ft.forEach(u),Qe=w(oe),fe=g(oe,"P",{});var ut=d(fe);We=I(ut,"Al mijn publiekelijk beschikbare code & projecten"),ut.forEach(u),Ce=w(oe),V=g(oe,"A",{href:!0,target:!0,class:!0});var Xe=d(V);$e=I(Xe,"Bekijken "),U(P.$$.fragment,Xe),Xe.forEach(u),oe.forEach(u),_e.forEach(u),it.forEach(u),De=w(R),X=g(R,"DIV",{class:!0});var ht=d(X);H=g(ht,"DIV",{class:!0});var Ae=d(H);y=g(Ae,"DIV",{class:!0});var dt=d(y);He=I(dt,"U"),dt.forEach(u),Me=w(Ae),z=g(Ae,"DIV",{});var re=d(z);x=g(re,"H2",{class:!0});var mt=d(x);Re=I(mt,"Unoty"),mt.forEach(u),Fe=w(re),ue=g(re,"P",{});var gt=d(ue);Ue=I(gt,"Een c++ game engine gebouwd in c++ met gebruik van SDL en Box2D."),gt.forEach(u),Je=w(re),Q=g(re,"A",{href:!0,target:!0,class:!0});var ye=d(Q);Oe=I(ye,"Bekijken "),U(K.$$.fragment,ye),ye.forEach(u),re.forEach(u),Ae.forEach(u),ht.forEach(u),Ye=w(R),ee=g(R,"DIV",{class:!0});var vt=d(ee);M=g(vt,"DIV",{class:!0});var ke=d(M);te=g(ke,"DIV",{class:!0});var _t=d(te);le=g(_t,"IMG",{src:!0,alt:!0}),_t.forEach(u),Ge=w(ke),W=g(ke,"DIV",{});var ie=d(W);se=g(ie,"H2",{class:!0});var At=d(se);Pe=I(At,"Slime Shooter"),At.forEach(u),Ke=w(ie),he=g(ie,"P",{});var kt=d(he);qe=I(kt,"Een game gemaakt in Unity."),kt.forEach(u),Ze=w(ie),C=g(ie,"A",{href:!0,target:!0,class:!0});var xe=d(C);Te=I(xe,"Bekijken "),U(q.$$.fragment,xe),xe.forEach(u),ie.forEach(u),ke.forEach(u),vt.forEach(u),R.forEach(u),ne.forEach(u),this.h()},h(){h(a,"class","text-xl mt-8"),h(k,"href","mailto:hi@jvanhouts.com"),h(k,"target","_blank"),h(k,"class","inline-block underline text-lg mt-4"),h(n,"class","w-full lg:w-5/12"),h(T,"class","card-shadow icon"),h(L,"class","title"),h(V,"href","https://github.com/jvanhouts"),h(V,"target","_blank"),h(V,"class","button"),h(D,"class","card card-shadow"),h(Z,"class","flex mt-12 ml-3"),h(y,"class","card-shadow icon font-semibold text-4xl"),h(x,"class","title"),h(Q,"href","https://github.com/school-projects-gwb/unoty/"),h(Q,"target","_blank"),h(Q,"class","button"),h(H,"class","card card-shadow"),h(X,"class","flex mt-12 ml-3"),Nt(le.src,nt=Kt)||h(le,"src",nt),h(le,"alt","Slime Shooter sprite van het hoofdkarakter; een meisje met blauw haar en een paarse outfit"),h(te,"class","card-shadow icon"),h(se,"class","title"),h(C,"href","https://simmer.io/@gunwunbun/slimeshooter"),h(C,"target","_blank"),h(C,"class","button"),h(M,"class","card card-shadow"),h(ee,"class","flex mt-12 ml-3"),h(f,"class","w-full lg:w-7/12 pb-8 lg:pb-0"),h(e,"class","h-screen w-full max-w-5xl px-8 lg:px-0 bg-[#F7FFF5] flex flex-col lg:flex-row pt-16 gap-20")},m(A,ne){Ee(A,e,ne),r(e,n),r(n,l),r(l,t),r(n,s),r(n,a),r(a,_),r(n,v),r(n,k),J(b,k,null),r(k,i),r(e,c),r(e,f),r(f,$),r($,Ne),r(f,Se),r(f,Z),r(Z,D),r(D,T),J(G,T,null),r(D,Ve),r(D,S),r(S,L),r(L,ze),r(S,Qe),r(S,fe),r(fe,We),r(S,Ce),r(S,V),r(V,$e),J(P,V,null),r(f,De),r(f,X),r(X,H),r(H,y),r(y,He),r(H,Me),r(H,z),r(z,x),r(x,Re),r(z,Fe),r(z,ue),r(ue,Ue),r(z,Je),r(z,Q),r(Q,Oe),J(K,Q,null),r(f,Ye),r(f,ee),r(ee,M),r(M,te),r(te,le),r(M,Ge),r(M,W),r(W,se),r(se,Pe),r(W,Ke),r(W,he),r(he,qe),r(W,Ze),r(W,C),r(C,Te),J(q,C,null),ve=!0},p:St,i(A){ve||(B(b.$$.fragment,A),B(G.$$.fragment,A),B(P.$$.fragment,A),B(K.$$.fragment,A),B(q.$$.fragment,A),ve=!0)},o(A){N(b.$$.fragment,A),N(G.$$.fragment,A),N(P.$$.fragment,A),N(K.$$.fragment,A),N(q.$$.fragment,A),ve=!1},d(A){A&&u(e),O(b),O(G),O(P),O(K),O(q)}}}class Tt extends de{constructor(e){super(),me(this,e,null,qt,ce,{})}}export{Tt as component};
