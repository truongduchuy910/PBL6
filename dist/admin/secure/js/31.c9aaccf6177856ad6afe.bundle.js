(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{583:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return D}));var s=a(6),i=a(1),l=a(0),n=a(102),r=a(356),c=a(96),o=a(9),u=a(2),d=a(8),b=a(73),f=a(5),m=a(7),g=a(129),j=a(13),h=(a(375),a(209));const p=["children"];const O=e=>function(t){let{value:a,label:s}=t;return a[e.file]?Object(i.jsx)("img",{src:a[e.file].publicUrl,style:{maxHeight:100,maxWidth:200}}):Object(i.jsx)("small",null,a[e.search]?a[e.search]:s)},y=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;const a=e.find(e=>e.value.id===t.id);return a||{label:t._label_,value:t}},v=Object(l.forwardRef)((e,t)=>{let{data:a,loading:r,value:c,currentValue:o,refList:u,canRead:d,isMulti:b,search:h,autoFocus:v,serverErrors:x,onChange:$,htmlID:_,setSearch:N,selectProps:D,fetchMore:k,isDisabled:C,options:M,config:R}=e;const q=x&&x.find(e=>e instanceof Error&&"AccessDeniedError"===e.name);null!==c&&d&&(b?o=(Array.isArray(c)?c:[]).map(e=>y(M,e)):c&&(o=y(M,c)));const I=a&&a[u.gqlNames.listQueryMetaName]?a[u.gqlNames.listQueryMetaName].count:0,L=Object(l.useMemo)(()=>({MenuList:e=>{let{children:t}=e,a=Object(m.a)(e,p);const r=Object(l.useRef)(null),c=n.d`
            query RelationshipSelectMore($search: String!, $first: Int!, $skip: Int!) {
              ${u.gqlNames.listQueryName}(where: { ${R.search}_contains_i: $search }, first: $first, skip: $skip) {
                _label_
                id
                ${R.file} {
                  publicUrl
                }
              }
            }
          `;return function(e,t){Object(l.useEffect)(()=>{let a=new IntersectionObserver(e,{}),s=t.current;if(null!==s)return a.observe(s),()=>a.unobserve(s)})}(e=>{let[{isIntersecting:t}]=e;!a.isLoading&&t&&a.options.length<I&&k({query:c,variables:{search:h,first:50,skip:a.options.length},updateQuery:(e,t)=>{let{fetchMoreResult:a}=t;return a?Object(s.a)(Object(s.a)({},e),{},{[u.gqlNames.listQueryName]:[...e[u.gqlNames.listQueryName],...a[u.gqlNames.listQueryName]]}):e}})},r),Object(i.jsx)(j.f.MenuList,a,t,Object(i.jsx)("div",{css:{textAlign:"center"},ref:r},a.options.length<I&&Object(i.jsx)("span",{css:{padding:8}},"Loading...")))}}),[I,u.gqlNames.listQueryName]);return Object(i.jsx)(g.a,Object(f.a)({onInputChange:e=>N(e),isLoading:r,autoFocus:v,isMulti:b,components:L,formatOptionLabel:O(R),getOptionValue:e=>e.value.id,value:o,placeholder:d?void 0:q&&q.message,options:M,onChange:$,id:"react-select-"+_,isClearable:!0,instanceId:_,inputId:_,innerRef:t,menuPortalTarget:document.body,isDisabled:C,styles:{padding:0}},D))}),x=e=>{let{innerRef:t,autoFocus:a,field:s,errors:c,renderContext:o,htmlID:u,onChange:d,isMulti:b,value:f,isDisabled:m}=e;const[g,j]=Object(l.useState)(""),h=s.getRefList(),{config:p}=s,O=n.d`
    query RelationshipSelect($search: String!, $ids:[ID] $first: Int!, $skip: Int!) {
      ${h.gqlNames.listQueryName}(
        where: { 
          id_in: $ids 
        }, first: $first, skip: $skip) {
        _label_
        id
        ${p.file} {
          publicUrl
        }
      }
      search:${h.gqlNames.listQueryName}(
        where: { 
          ${p.search}_contains_i: $search
        }, first: $first, skip: $skip) {
        _label_
        id
        ${p.file} {
          publicUrl
        }
      }

      ${h.gqlNames.listQueryMetaName}(where: { 
        id_in: $ids 
      }) {
        count
      }
    }
  `,x=!c||c.every(e=>!(e instanceof Error&&"AccessDeniedError"===e.name)),$="dialog"===o?{menuShouldBlockScroll:!0}:null,_=(Array.isArray(f)?f:[f]).map(e=>e.id),{data:N,error:D,loading:k,fetchMore:C}=Object(r.a)(O,{fetchPolicy:"network-only",variables:{search:g,first:10,skip:0,ids:_}});if(D)return console.log("ERROR!!!",D),"Error";var M=N&&N[h.gqlNames.listQueryName]?N[h.gqlNames.listQueryName].map(e=>({value:e,label:e._label_})):[];N&&N.search&&(M=M.concat(N.search.map(e=>({value:e,label:e._label_}))));var R=null;return null!==f&&x&&(b?R=(Array.isArray(f)?f:[]).map(e=>y(M,e)):f&&(R=y(M,f))),Object(i.jsx)(v,{data:N,loading:k,value:f,currentValue:R,refList:h,canRead:x,isMulti:b,search:g,autoFocus:a,serverErrors:c,onChange:d,htmlID:u,setSearch:j,selectProps:$,fetchMore:C,ref:t,isDisabled:m,options:M,config:p})};function $(e){let{listKey:t,value:a,onAddUser:s,many:l,isDisabled:c}=e;const f="authenticated"+t,{data:m}=Object(r.a)(n.d`
    query User {
      ${f} {
        _label_
        id
      }
    }
  `);if(m&&m[f]){const e=m[f].id;if(null!==a&&(l?a.some(t=>t.id===e):a.id===e))return null;const t=`${l?"Add":"Set as"} ${m[f]._label_}`;return Object(i.jsx)(b.a,{placement:"top",content:t},e=>Object(i.jsx)(d.b,{css:{marginLeft:u.d},variant:"ghost",ref:e,onClick:()=>{s(m[f])},icon:o.u,"aria-label":t,isDisabled:c}))}return null}function _(e){let{field:t,value:a}=e;const{many:s}=t.config,{fullPath:l}=t.getRefList();let n,r=!1,c=l;return s?(n="View List of Related Items",a.length||(r=!0),c=`${c}?!id_in="${a.slice(0,100).map(e=>{let{id:t}=e;return t}).join(",")}"`):(n="View Item Details",a?c=`${c}/${a.id}`:r=!0),Object(i.jsx)(b.a,{placement:"top",content:n},e=>Object(i.jsx)(d.b,{ref:e,icon:o.o,"aria-label":n,variant:"ghost",css:{marginLeft:u.d},target:"_blank",to:c,isDisabled:r}))}function N(e){let{field:t,item:a,onCreate:n,isDisabled:r}=e;const{list:c,openCreateItemModal:f}=Object(h.e)();let m,g=t.getRefList(),j="Create and add "+g.singular;return a&&a.id&&(m=g.fields.filter(e=>"Relationship"===e.type&&e.config.ref===c.key&&e.config.refFieldPath===t.path).reduce((e,t)=>{const i={_label_:a._label_||"<link to parent>",id:a.id};return Object(s.a)(Object(s.a)({},e),{},{[t.path]:t.config.many?[i]:i})},{})),Object(i.jsx)(l.Fragment,null,Object(i.jsx)(b.a,{placement:"top",content:j},e=>Object(i.jsx)(d.b,{ref:e,onClick:f,icon:o.v,"aria-label":j,variant:"ghost",css:{marginLeft:u.d},isDisabled:r})),Object(i.jsx)(h.a,{prefillData:m,onCreate:e=>{let{data:t}=e;n(t[g.gqlNames.createMutationName])}}))}const D=e=>{let{autoFocus:t,field:a,value:s=[],renderContext:l,errors:n,onChange:r,item:o,list:u,isDisabled:d}=e;const{many:b,ref:f}=a.config,{authStrategy:m}=Object(h.d)(),g="ks-input-"+a.path,j=a.getRefList();return Object(i.jsx)(c.a,null,Object(i.jsx)(c.d,{htmlFor:g,field:a,errors:n}),Object(i.jsx)(c.b,{text:a.adminDoc}),Object(i.jsx)(c.c,null,Object(i.jsx)("div",{css:{flex:1}},Object(i.jsx)(x,{autoFocus:t,isMulti:b,field:a,value:s,errors:n,renderContext:l,htmlID:g,onChange:e=>{const{many:t}=a.config;r(t?e?e.map(e=>e.value):[]:e?e.value:null)},isDisabled:d})),Object(i.jsx)(h.b,{list:j},Object(i.jsx)(N,{onCreate:e=>{r(b?s.concat(e):e)},field:a,item:o,list:u,isDisabled:d})),m&&f===m.listKey&&Object(i.jsx)($,{many:b,onAddUser:e=>{r(b?s.concat(e):e)},value:s,listKey:m.listKey,isDisabled:d}),Object(i.jsx)(_,{field:a,value:s})))}}}]);