(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{519:function(e,t,r){"use strict";r.d(t,"a",(function(){return h}));var n=r(5),s=r(6),a=r(7),l=r(1),i=r(102),o=r(356),c=r(129),u=r(13),f=(r(375),r(0));const d=["children"];const p=Object(f.forwardRef)((e,t)=>{let{data:r,loading:o,value:p,refList:h,canRead:b,isMulti:g,search:m,autoFocus:O,serverErrors:y,onChange:j,htmlID:v,setSearch:N,selectProps:w,fetchMore:$,isDisabled:M}=e;const k=r&&r[h.gqlNames.listQueryName]?r[h.gqlNames.listQueryName].map(e=>({value:e,label:e._label_})):[],q=y&&y.find(e=>e instanceof Error&&"AccessDeniedError"===e.name);let D=null;const E=e=>"string"==typeof e?k.find(t=>t.value.id===e)||{label:e,value:e}:{label:e._label_,value:e};null!==p&&b&&(g?D=(Array.isArray(p)?p:[]).map(E):p&&(D=E(p)));const I=r&&r[h.gqlNames.listQueryMetaName]?r[h.gqlNames.listQueryMetaName].count:0,P=Object(f.useMemo)(()=>({MenuList:e=>{let{children:t}=e,r=Object(a.a)(e,d);const n=Object(f.useRef)(null),o=i.d`
            query RelationshipSelectMore($search: String!, $first: Int!, $skip: Int!) {
              ${h.gqlNames.listQueryName}(search: $search, first: $first, skip: $skip) {
                _label_
                id
              }
            }
          `;return function(e,t){Object(f.useEffect)(()=>{let r=new IntersectionObserver(e,{}),n=t.current;if(null!==n)return r.observe(n),()=>r.unobserve(n)})}(e=>{let[{isIntersecting:t}]=e;!r.isLoading&&t&&r.options.length<I&&$({query:o,variables:{search:m,first:50,skip:r.options.length},updateQuery:(e,t)=>{let{fetchMoreResult:r}=t;return r?Object(s.a)(Object(s.a)({},e),{},{[h.gqlNames.listQueryName]:[...e[h.gqlNames.listQueryName],...r[h.gqlNames.listQueryName]]}):e}})},n),Object(l.jsx)(u.f.MenuList,r,t,Object(l.jsx)("div",{css:{textAlign:"center"},ref:n},r.options.length<I&&Object(l.jsx)("span",{css:{padding:8}},"Loading...")))}}),[I,h.gqlNames.listQueryName]);return Object(l.jsx)(c.a,Object(n.a)({onInputChange:e=>N(e),isLoading:o,autoFocus:O,isMulti:g,components:P,getOptionValue:e=>e.value.id,value:D,placeholder:b?void 0:q&&q.message,options:k,onChange:j,id:"react-select-"+v,isClearable:!0,instanceId:v,inputId:v,innerRef:t,menuPortalTarget:document.body,isDisabled:M},w))}),h=e=>{let{innerRef:t,autoFocus:r,field:n,errors:s,renderContext:a,htmlID:c,onChange:u,isMulti:d,value:h,isDisabled:b}=e;const[g,m]=Object(f.useState)(""),O=n.getRefList(),{defaultWhere:y}=O,j=i.d`
    query RelationshipSelect(
      $search: String!,
      $first: Int!,
      $skip: Int!,
      $where: ${O.gqlNames.whereInputName}
    ) {
      ${O.gqlNames.listQueryName}(
        search: $search,
        first: $first,
        skip: $skip,
        where: $where,
      ) {
        _label_
        id
      }

      ${O.gqlNames.listQueryMetaName}(search: $search) {
        count
      }
    }
  `,v=!s||s.every(e=>!(e instanceof Error&&"AccessDeniedError"===e.name)),N="dialog"===a?{menuShouldBlockScroll:!0}:null,{data:w,error:$,loading:M,fetchMore:k}=Object(o.a)(j,{fetchPolicy:"network-only",variables:{search:g,first:10,skip:0,where:y}});return $?(console.log("ERROR!!!",$),"Error"):Object(l.jsx)(p,{data:w,loading:M,value:h,refList:O,canRead:v,isMulti:d,search:g,autoFocus:r,serverErrors:s,onChange:u,htmlID:c,setSearch:m,selectProps:N,fetchMore:k,ref:t,isDisabled:b})}},534:function(e,t,r){var n=r(25);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}e.exports=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e},e.exports.default=e.exports,e.exports.__esModule=!0},566:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return i}));var n=r(0),s=r.n(n),a=r(519);r(28),r(534),r(179),r(1),r(129),r(375);const l=e=>{let{children:t}=e;return s.a.createElement("div",{onClick:e=>{e.preventDefault(),e.stopPropagation()}},t)},i=e=>{let{onChange:t,filter:r,field:n,value:i}=e;if(!r)return null;const o="ks-input-"+n.path;return s.a.createElement(l,null,s.a.createElement(a.a,{field:n,renderContext:null,htmlID:o,onChange:e=>{if(null===e)t(null);else{const{value:r}=e;r&&t(r.id)}},value:i,isMulti:!1}))}}}]);