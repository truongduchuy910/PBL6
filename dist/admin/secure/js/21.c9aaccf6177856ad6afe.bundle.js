(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{519:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var s=a(5),n=a(6),i=a(7),l=a(1),r=a(102),c=a(356),o=a(129),u=a(13),d=(a(375),a(0));const b=["children"];const f=Object(d.forwardRef)((e,t)=>{let{data:a,loading:c,value:f,refList:m,canRead:j,isMulti:g,search:h,autoFocus:p,serverErrors:O,onChange:y,htmlID:v,setSearch:x,selectProps:N,fetchMore:$,isDisabled:D}=e;const k=a&&a[m.gqlNames.listQueryName]?a[m.gqlNames.listQueryName].map(e=>({value:e,label:e._label_})):[],C=O&&O.find(e=>e instanceof Error&&"AccessDeniedError"===e.name);let M=null;const R=e=>"string"==typeof e?k.find(t=>t.value.id===e)||{label:e,value:e}:{label:e._label_,value:e};null!==f&&j&&(g?M=(Array.isArray(f)?f:[]).map(R):f&&(M=R(f)));const _=a&&a[m.gqlNames.listQueryMetaName]?a[m.gqlNames.listQueryMetaName].count:0,q=Object(d.useMemo)(()=>({MenuList:e=>{let{children:t}=e,a=Object(i.a)(e,b);const s=Object(d.useRef)(null),c=r.d`
            query RelationshipSelectMore($search: String!, $first: Int!, $skip: Int!) {
              ${m.gqlNames.listQueryName}(search: $search, first: $first, skip: $skip) {
                _label_
                id
              }
            }
          `;return function(e,t){Object(d.useEffect)(()=>{let a=new IntersectionObserver(e,{}),s=t.current;if(null!==s)return a.observe(s),()=>a.unobserve(s)})}(e=>{let[{isIntersecting:t}]=e;!a.isLoading&&t&&a.options.length<_&&$({query:c,variables:{search:h,first:50,skip:a.options.length},updateQuery:(e,t)=>{let{fetchMoreResult:a}=t;return a?Object(n.a)(Object(n.a)({},e),{},{[m.gqlNames.listQueryName]:[...e[m.gqlNames.listQueryName],...a[m.gqlNames.listQueryName]]}):e}})},s),Object(l.jsx)(u.f.MenuList,a,t,Object(l.jsx)("div",{css:{textAlign:"center"},ref:s},a.options.length<_&&Object(l.jsx)("span",{css:{padding:8}},"Loading...")))}}),[_,m.gqlNames.listQueryName]);return Object(l.jsx)(o.a,Object(s.a)({onInputChange:e=>x(e),isLoading:c,autoFocus:p,isMulti:g,components:q,getOptionValue:e=>e.value.id,value:M,placeholder:j?void 0:C&&C.message,options:k,onChange:y,id:"react-select-"+v,isClearable:!0,instanceId:v,inputId:v,innerRef:t,menuPortalTarget:document.body,isDisabled:D},N))}),m=e=>{let{innerRef:t,autoFocus:a,field:s,errors:n,renderContext:i,htmlID:o,onChange:u,isMulti:b,value:m,isDisabled:j}=e;const[g,h]=Object(d.useState)(""),p=s.getRefList(),{defaultWhere:O}=p,y=r.d`
    query RelationshipSelect(
      $search: String!,
      $first: Int!,
      $skip: Int!,
      $where: ${p.gqlNames.whereInputName}
    ) {
      ${p.gqlNames.listQueryName}(
        search: $search,
        first: $first,
        skip: $skip,
        where: $where,
      ) {
        _label_
        id
      }

      ${p.gqlNames.listQueryMetaName}(search: $search) {
        count
      }
    }
  `,v=!n||n.every(e=>!(e instanceof Error&&"AccessDeniedError"===e.name)),x="dialog"===i?{menuShouldBlockScroll:!0}:null,{data:N,error:$,loading:D,fetchMore:k}=Object(c.a)(y,{fetchPolicy:"network-only",variables:{search:g,first:10,skip:0,where:O}});return $?(console.log("ERROR!!!",$),"Error"):Object(l.jsx)(f,{data:N,loading:D,value:m,refList:p,canRead:v,isMulti:b,search:g,autoFocus:a,serverErrors:n,onChange:u,htmlID:o,setSearch:h,selectProps:x,fetchMore:k,ref:t,isDisabled:j})}},565:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return p}));var s=a(6),n=a(1),i=a(0),l=a(356),r=a(102),c=a(96),o=a(9),u=a(2),d=a(8),b=a(73),f=a(519),m=a(209);a(28),a(179),a(129),a(375);function j(e){let{listKey:t,value:a,onAddUser:s,many:i,isDisabled:c}=e;const f="authenticated"+t,{data:m}=Object(l.a)(r.d`
    query User {
      ${f} {
        _label_
        id
      }
    }
  `);if(m&&m[f]){const e=m[f].id;if(null!==a&&(i?a.some(t=>t.id===e):a.id===e))return null;const t=`${i?"Add":"Set as"} ${m[f]._label_}`;return Object(n.jsx)(b.a,{placement:"top",content:t},e=>Object(n.jsx)(d.b,{css:{marginLeft:u.d},variant:"ghost",ref:e,onClick:()=>{s(m[f])},icon:o.u,"aria-label":t,isDisabled:c}))}return null}function g(e){let{field:t,value:a}=e;const{many:s}=t.config,{fullPath:i}=t.getRefList();let l,r=!1,c=i;return s?(l="View List of Related Items",a.length||(r=!0),c=`${c}?!id_in="${a.slice(0,100).map(e=>{let{id:t}=e;return t}).join(",")}"`):(l="View Item Details",a?c=`${c}/${a.id}`:r=!0),Object(n.jsx)(b.a,{placement:"top",content:l},e=>Object(n.jsx)(d.b,{ref:e,icon:o.o,"aria-label":l,variant:"ghost",css:{marginLeft:u.d},target:"_blank",to:c,isDisabled:r}))}function h(e){let{field:t,item:a,onCreate:l,isDisabled:r}=e;const{list:c,openCreateItemModal:f}=Object(m.e)();let j,g=t.getRefList(),h="Create and add "+g.singular;return a&&a.id&&(j=g.fields.filter(e=>"Relationship"===e.type&&e.config.ref===c.key&&e.config.refFieldPath===t.path).reduce((e,t)=>{const n={_label_:a._label_||"<link to parent>",id:a.id};return Object(s.a)(Object(s.a)({},e),{},{[t.path]:t.config.many?[n]:n})},{})),Object(n.jsx)(i.Fragment,null,Object(n.jsx)(b.a,{placement:"top",content:h},e=>Object(n.jsx)(d.b,{ref:e,onClick:f,icon:o.v,"aria-label":h,variant:"ghost",css:{marginLeft:u.d},isDisabled:r})),Object(n.jsx)(m.a,{prefillData:j,onCreate:e=>{let{data:t}=e;l(t[g.gqlNames.createMutationName])}}))}const p=e=>{let{autoFocus:t,field:a,value:s=[],renderContext:i,errors:l,onChange:r,item:o,list:u,isDisabled:d}=e;const{many:b,ref:p}=a.config,{authStrategy:O}=Object(m.d)(),y="ks-input-"+a.path,v=a.getRefList();return Object(n.jsx)(c.a,null,Object(n.jsx)(c.d,{htmlFor:y,field:a,errors:l}),Object(n.jsx)(c.b,{text:a.adminDoc}),Object(n.jsx)(c.c,null,Object(n.jsx)("div",{css:{flex:1}},Object(n.jsx)(f.a,{autoFocus:t,isMulti:b,field:a,value:s,errors:l,renderContext:i,htmlID:y,onChange:e=>{const{many:t}=a.config;r(t?e?e.map(e=>e.value):[]:e?e.value:null)},isDisabled:d})),Object(n.jsx)(m.b,{list:v},Object(n.jsx)(h,{onCreate:e=>{r(b?s.concat(e):e)},field:a,item:o,list:u,isDisabled:d})),O&&p===O.listKey&&Object(n.jsx)(j,{many:b,onAddUser:e=>{r(b?s.concat(e):e)},value:s,listKey:O.listKey,isDisabled:d}),Object(n.jsx)(g,{field:a,value:s})))}}}]);