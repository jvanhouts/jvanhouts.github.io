function w(){}function L(t,n){for(const e in n)t[e]=n[e];return t}function q(t){return t()}function C(){return Object.create(null)}function g(t){t.forEach(q)}function B(t){return typeof t=="function"}function st(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let b;function ft(t,n){return b||(b=document.createElement("a")),b.href=n,t===b.href}function G(t){return Object.keys(t).length===0}function J(t,...n){if(t==null)return w;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function at(t,n,e){t.$$.on_destroy.push(J(n,e))}function _t(t,n,e,i){if(t){const r=P(t,n,e,i);return t[0](r)}}function P(t,n,e,i){return t[1]&&i?L(e.ctx.slice(),t[1](i(n))):e.ctx}function dt(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const s=[],u=Math.max(n.dirty.length,r.length);for(let o=0;o<u;o+=1)s[o]=n.dirty[o]|r[o];return s}return n.dirty|r}return n.dirty}function ht(t,n,e,i,r,s){if(r){const u=P(n,e,i,s);t.p(u,r)}}function mt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function pt(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function yt(t,n){const e={};n=new Set(n);for(const i in t)!n.has(i)&&i[0]!=="$"&&(e[i]=t[i]);return e}let E=!1;function K(){E=!0}function Q(){E=!1}function R(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function W(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let l=0;l<n.length;l++){const a=n[l];a.claim_order!==void 0&&c.push(a)}n=c}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let c=0;c<n.length;c++){const l=n[c].claim_order,a=(r>0&&n[e[r]].claim_order<=l?r+1:R(1,r,x=>n[e[x]].claim_order,l))-1;i[c]=e[a]+1;const f=a+1;e[f]=c,r=Math.max(f,r)}const s=[],u=[];let o=n.length-1;for(let c=e[r]+1;c!=0;c=i[c-1]){for(s.push(n[c-1]);o>=c;o--)u.push(n[o]);o--}for(;o>=0;o--)u.push(n[o]);s.reverse(),u.sort((c,l)=>c.claim_order-l.claim_order);for(let c=0,l=0;c<u.length;c++){for(;l<s.length&&u[c].claim_order>=s[l].claim_order;)l++;const a=l<s.length?s[l]:null;t.insertBefore(u[c],a)}}function U(t,n){if(E){for(W(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function gt(t,n,e){E&&!e?U(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function V(t){t.parentNode&&t.parentNode.removeChild(t)}function xt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function X(t){return document.createElement(t)}function Y(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function j(t){return document.createTextNode(t)}function bt(){return j(" ")}function $t(){return j("")}function Z(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function wt(t,n){for(const e in n)Z(t,e,n[e])}function tt(t){return Array.from(t.childNodes)}function nt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function T(t,n,e,i,r=!1){nt(t);const s=(()=>{for(let u=t.claim_info.last_index;u<t.length;u++){const o=t[u];if(n(o)){const c=e(o);return c===void 0?t.splice(u,1):t[u]=c,r||(t.claim_info.last_index=u),o}}for(let u=t.claim_info.last_index-1;u>=0;u--){const o=t[u];if(n(o)){const c=e(o);return c===void 0?t.splice(u,1):t[u]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=u,o}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function z(t,n,e,i){return T(t,r=>r.nodeName===n,r=>{const s=[];for(let u=0;u<r.attributes.length;u++){const o=r.attributes[u];e[o.name]||s.push(o.name)}s.forEach(u=>r.removeAttribute(u))},()=>i(n))}function Et(t,n,e){return z(t,n,e,X)}function vt(t,n,e){return z(t,n,e,Y)}function et(t,n){return T(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>j(n),!0)}function Nt(t){return et(t," ")}function St(t,n){n=""+n,t.data!==n&&(t.data=n)}function jt(t,n,e,i){e==null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function kt(t,n){return new t(n)}let y;function p(t){y=t}function D(){if(!y)throw new Error("Function called outside component initialization");return y}function At(t){D().$$.on_mount.push(t)}function Ct(t){D().$$.after_update.push(t)}const h=[],M=[];let m=[];const O=[],F=Promise.resolve();let N=!1;function H(){N||(N=!0,F.then(I))}function Mt(){return H(),F}function S(t){m.push(t)}const v=new Set;let d=0;function I(){if(d!==0)return;const t=y;do{try{for(;d<h.length;){const n=h[d];d++,p(n),it(n.$$)}}catch(n){throw h.length=0,d=0,n}for(p(null),h.length=0,d=0;M.length;)M.pop()();for(let n=0;n<m.length;n+=1){const e=m[n];v.has(e)||(v.add(e),e())}m.length=0}while(h.length);for(;O.length;)O.pop()();N=!1,v.clear(),p(t)}function it(t){if(t.fragment!==null){t.update(),g(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(S)}}function rt(t){const n=[],e=[];m.forEach(i=>t.indexOf(i)===-1?n.push(i):e.push(i)),e.forEach(i=>i()),m=n}const $=new Set;let _;function Ot(){_={r:0,c:[],p:_}}function qt(){_.r||g(_.c),_=_.p}function ct(t,n){t&&t.i&&($.delete(t),t.i(n))}function Bt(t,n,e,i){if(t&&t.o){if($.has(t))return;$.add(t),_.c.push(()=>{$.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}function Pt(t,n){const e={},i={},r={$$scope:1};let s=t.length;for(;s--;){const u=t[s],o=n[s];if(o){for(const c in u)c in o||(i[c]=1);for(const c in o)r[c]||(e[c]=o[c],r[c]=1);t[s]=o}else for(const c in u)r[c]=1}for(const u in i)u in e||(e[u]=void 0);return e}function Tt(t){return typeof t=="object"&&t!==null?t:{}}function zt(t){t&&t.c()}function Dt(t,n){t&&t.l(n)}function ut(t,n,e,i){const{fragment:r,after_update:s}=t.$$;r&&r.m(n,e),i||S(()=>{const u=t.$$.on_mount.map(q).filter(B);t.$$.on_destroy?t.$$.on_destroy.push(...u):g(u),t.$$.on_mount=[]}),s.forEach(S)}function ot(t,n){const e=t.$$;e.fragment!==null&&(rt(e.after_update),g(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function lt(t,n){t.$$.dirty[0]===-1&&(h.push(t),H(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Ft(t,n,e,i,r,s,u,o=[-1]){const c=y;p(t);const l=t.$$={fragment:null,ctx:[],props:s,update:w,not_equal:r,bound:C(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(c?c.$$.context:[])),callbacks:C(),dirty:o,skip_bound:!1,root:n.target||c.$$.root};u&&u(l.root);let a=!1;if(l.ctx=e?e(t,n.props||{},(f,x,...k)=>{const A=k.length?k[0]:x;return l.ctx&&r(l.ctx[f],l.ctx[f]=A)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](A),a&&lt(t,f)),x}):[],l.update(),a=!0,g(l.before_update),l.fragment=i?i(l.ctx):!1,n.target){if(n.hydrate){K();const f=tt(n.target);l.fragment&&l.fragment.l(f),f.forEach(V)}else l.fragment&&l.fragment.c();n.intro&&ct(t.$$.fragment),ut(t,n.target,n.anchor,n.customElement),Q(),I()}p(c)}class Ht{$destroy(){ot(this,1),this.$destroy=w}$on(n,e){if(!B(e))return w;const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!G(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{ut as A,ot as B,_t as C,U as D,ht as E,mt as F,dt as G,w as H,at as I,L as J,Y as K,vt as L,wt as M,Pt as N,xt as O,yt as P,pt as Q,Tt as R,Ht as S,ft as T,bt as a,gt as b,Nt as c,Bt as d,$t as e,qt as f,ct as g,V as h,Ft as i,Ct as j,X as k,Et as l,tt as m,Z as n,At as o,jt as p,j as q,et as r,st as s,Mt as t,St as u,Ot as v,M as w,kt as x,zt as y,Dt as z};