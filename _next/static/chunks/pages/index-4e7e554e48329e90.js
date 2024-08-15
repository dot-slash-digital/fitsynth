(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(1979)}])},1979:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return pages}});var i=s(5893),r=s(9752),n=s(7294),a=s(7492),c=s(1277),l=s(9898),o=s.n(l);let Benefit=e=>{let{description:t,image:s,title:r}=e;return(0,i.jsxs)("div",{className:o().benefit,children:[(0,i.jsx)("div",{className:o().image,style:{backgroundImage:"url(".concat(s,")")}}),(0,i.jsx)("div",{className:o()["benefit-title"],children:r}),(0,i.jsx)("div",{className:o().description,children:t})]})},Benefits=()=>{let{title:e,benefitList:t}=a.default[c.T3.HOME].benefits;return(0,i.jsx)("div",{className:o().component,children:(0,i.jsxs)(r.S$,{children:[(0,i.jsx)("div",{className:o().title,children:e}),(0,i.jsx)("div",{className:o().contents,children:t.map((e,t)=>(0,n.createElement)(Benefit,{...e,key:t}))})]})})};var u=s(8146),d=s.n(u);let Feature=e=>{let{active:t,description:s,icon:r,onClick:a,title:c}=e;return(0,i.jsxs)("div",{onClick:a,className:"".concat(d().feature," ").concat(t?d().active:""),children:[(0,i.jsx)("div",{className:d().icon,children:(0,n.createElement)(r)}),(0,i.jsxs)("div",{className:d()["feature-info"],children:[(0,i.jsx)("div",{className:d()["feature-title"],children:c}),(0,i.jsx)("div",{className:d().description,children:s})]})]})},Features=()=>{let{title:e,featureList:t,deviceMockup:s}=a.default[c.T3.HOME].features,[l,o]=(0,n.useState)(0),u=t.filter((e,s)=>s<Math.floor(t.length/2)),_=t.filter((e,s)=>s>=Math.floor(t.length/2));return(0,i.jsx)("div",{id:c._j[c.T3.HOME].sections?c._j[c.T3.HOME].sections[c.$0.FEATURES]:void 0,className:d().component,children:(0,i.jsxs)(r.S$,{children:[(0,i.jsx)("div",{className:d().title,children:e}),(0,i.jsxs)("div",{className:d().contents,children:[(0,i.jsx)("div",{className:d()["edge-col"],children:u.map((e,t)=>(0,n.createElement)(Feature,{...e,active:l===t,key:"left-".concat(t),onClick:()=>o(t)}))}),(0,i.jsxs)("div",{className:d().device,children:[(0,i.jsx)("img",{className:d()["device-mockup-wrapper"],src:s}),(0,i.jsx)("img",{alt:t[l].title,className:d()["device-mockup"],src:t[l].image||""})]}),(0,i.jsx)("div",{className:d()["edge-col"],children:_.map((e,t)=>(0,n.createElement)(Feature,{...e,active:l===t+u.length,key:"right-".concat(t),onClick:()=>o(t+u.length)}))}),(0,i.jsx)("div",{className:d()["mobile-features"],children:t.map((e,t)=>(0,n.createElement)(Feature,{...e,active:l===t,key:t,onClick:()=>o(t)}))})]})]})})};var _=s(6139),p=s(7985),m=s.n(p);let JumbotronImage=e=>{let{src:t,updateBounds:s}=e,[r,a]=(0,n.useState)(),[c,l]=(0,n.useState)(),o=(0,n.useRef)(null),{breakpoint:u}=(0,_.iP)();return(0,n.useEffect)(()=>{if(!o.current)return;let e=getComputedStyle(o.current),t=o.current.getBoundingClientRect();a(parseFloat(e.height)),l(parseFloat(e.width)),s(t)},[u,o.current,s]),(0,i.jsxs)("div",{className:m()["jumbotron-image"],style:c&&r?{aspectRatio:c/r}:void 0,children:[(0,i.jsx)("img",{src:t,alt:"App preview",className:m()["app-preview"]}),(0,i.jsx)("img",{alt:"Device mockup",className:m()["device-mockup"],ref:o,src:"/device-mockup.png"})]})},Jumbotron=()=>{let{title:e,description:t,button:s}=a.default[c.T3.HOME].jumbotron,[l,o]=(0,n.useState)(),[u,d]=(0,n.useState)();return(0,i.jsx)("div",{className:m().component,children:(0,i.jsx)(r.S$,{children:(0,i.jsxs)("div",{className:m().contents,children:[(0,i.jsxs)("div",{className:m()["left-col"],children:[(0,i.jsx)("div",{className:m().title,children:e}),(0,i.jsx)("div",{className:m().description,children:t}),(0,i.jsx)("div",{className:m()["button-wrapper"],children:(0,i.jsx)(r.zx,{...s,large:!0})})]}),(0,i.jsxs)("div",{className:m()["right-col"],style:l&&u&&{width:l.width+u.width-(l.right-u.left)},children:[(0,i.jsx)(JumbotronImage,{src:"/mockup-recipe.jpg",updateBounds:o}),(0,i.jsx)(JumbotronImage,{src:"/mockup-workout.jpg",updateBounds:d})]})]})})})};var f=s(7813),v=s(1436),h=s.n(v);let UserTypes=()=>{let{title:e,userTypeList:t,button:s}=a.default[c.T3.HOME].userTypes,[l,o]=(0,n.useState)(0),[u,d]=(0,n.useState)(0),p=(0,n.useRef)(null),{breakpoint:m}=(0,_.iP)();return(0,n.useEffect)(()=>{if(!p.current)return;let e=p.current.children;d(e.length?e[0].clientHeight:0)},[m]),(0,i.jsx)("div",{id:c._j[c.T3.HOME].sections?c._j[c.T3.HOME].sections[c.$0.USERS]:void 0,className:h().component,children:(0,i.jsxs)(r.S$,{children:[(0,i.jsx)("div",{className:h().title,children:e}),(0,i.jsxs)("div",{className:h().contents,children:[(0,i.jsxs)("div",{className:h().sidenav,children:[(0,i.jsx)("div",{className:h()["active-border"],style:{height:u,marginTop:l*u+16*l}}),(0,i.jsx)("div",{className:h()["user-type-titles"],ref:p,style:{gap:16},children:t.map((e,t)=>{let{title:s}=e;return(0,i.jsx)("div",{className:"".concat(h()["user-type-title"]," ").concat(l===t?h().active:""),onClick:()=>o(t),children:s},s)})})]}),(0,i.jsxs)("div",{className:h()["mobile-dropdown"],children:[(0,i.jsx)("select",{onChange:e=>o(parseInt(e.target.value)),value:l,children:t.map((e,t)=>{let{title:s}=e;return(0,i.jsx)("option",{value:t,children:s},t)})}),(0,i.jsx)("div",{className:h()["svg-wrapper"],children:(0,i.jsx)(f.v4,{size:20})})]}),(0,i.jsxs)("div",{className:h()["current-type-info"],children:[(0,i.jsx)("div",{className:h()["info-title"],children:t[l].title}),(0,i.jsx)("div",{className:h().features,children:t[l].featureList.map((e,t)=>(0,i.jsxs)("div",{className:h().feature,children:[e.icon&&(0,i.jsx)("div",{className:h()["feature-icon"],children:(0,n.createElement)(e.icon)}),(0,i.jsxs)("div",{className:h()["feature-info"],children:[(0,i.jsx)("div",{className:h()["feature-title"],children:e.title}),(0,i.jsx)("div",{className:h()["feature-description"],children:e.description})]})]},t))}),(0,i.jsx)("div",{className:h()["button-wrapper"],children:(0,i.jsx)(r.zx,{...s,large:!0})})]})]})]})})};var pages=()=>{let{ctaBanner:e}=a.default[c.T3.HOME];return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.Fb,{}),(0,i.jsx)(r.wp,{}),(0,i.jsx)(Jumbotron,{}),(0,i.jsx)(Features,{}),(0,i.jsx)(Benefits,{}),(0,i.jsx)(r.rV,{title:e}),(0,i.jsx)(UserTypes,{}),(0,i.jsx)(r.$_,{})]})}},6139:function(e,t,s){"use strict";s.d(t,{Sh:function(){return classes},Uo:function(){return r},iP:function(){return useWindowSize},iX:function(){return u},pY:function(){return d}});var i,r,n=s(7294),a=s(4068),c=s.n(a),l=s(23),o=s.n(l);(i=r||(r={})).MOBILE_PORTRAIT="MOBILE_PORTRAIT",i.MOBILE_LANDSCAPE="MOBILE_LANDSCAPE",i.TABLET="TABLET",i.SMALL_DESKTOP="SMALL_DESKTOP",i.DESKTOP="DESKTOP";let u={MOBILE_PORTRAIT:0,MOBILE_LANDSCAPE:parseInt(c().mobilePortrait),TABLET:parseInt(c().mobileLandscape),SMALL_DESKTOP:parseInt(c().tablet),DESKTOP:parseInt(c().smallDesktop)},d={MOBILE_PORTRAIT:parseInt(o().mobilePortrait),MOBILE_LANDSCAPE:parseInt(o().mobileLandscape),TABLET:parseInt(o().tablet),SMALL_DESKTOP:parseInt(o().smallDesktop),DESKTOP:parseInt(o().desktop)},useWindowSize=()=>{let[e,t]=(0,n.useState)();return(0,n.useEffect)(()=>{let handleResize=()=>{t({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",handleResize),handleResize(),()=>window.removeEventListener("resize",handleResize)},[]),{breakpoint:e?e.width<=parseInt(c().mobilePortrait)?"MOBILE_PORTRAIT":e.width<=parseInt(c().mobileLandscape)?"MOBILE_LANDSCAPE":e.width<=parseInt(c().tablet)?"TABLET":e.width<=parseInt(c().smallDesktop)?"SMALL_DESKTOP":"DESKTOP":null,windowSize:e}},classes=(e,t)=>({className:t.filter(e=>"string"==typeof e).map(t=>e[t]).join(" ")})},4068:function(e){e.exports={mobilePortrait:"560px",mobileLandscape:"920px",tablet:"1140px",smallDesktop:"1360px"}},9898:function(e){e.exports={component:"benefits_component__Lk58t",title:"benefits_title__JwK9O",contents:"benefits_contents__1S3Jv",benefit:"benefits_benefit__bwwzz",image:"benefits_image__PLJ_W","benefit-title":"benefits_benefit-title__q7ite",description:"benefits_description___JrzO"}},8146:function(e){e.exports={component:"features_component__uz8Ee",title:"features_title__mO90w",contents:"features_contents__pHQ74","edge-col":"features_edge-col__rwd72",device:"features_device__mNZtB","device-mockup-wrapper":"features_device-mockup-wrapper__PK_d3","device-mockup":"features_device-mockup___0wIH","mobile-features":"features_mobile-features__d7xcO",feature:"features_feature__qqSPx",active:"features_active__n_dul",icon:"features_icon__nTi1r","feature-info":"features_feature-info__5roAv","feature-title":"features_feature-title__GBiPs",description:"features_description__bl5j3"}},7985:function(e){e.exports={component:"jumbotron_component__bgsp7",contents:"jumbotron_contents___34Mb","left-col":"jumbotron_left-col__LMUUc",title:"jumbotron_title__g908z",description:"jumbotron_description__MoJ8h","button-wrapper":"jumbotron_button-wrapper__SX92Z","right-col":"jumbotron_right-col__YvWDx","jumbotron-image":"jumbotron_jumbotron-image__v1lP_","app-preview":"jumbotron_app-preview__GY_Ib","device-mockup":"jumbotron_device-mockup__7S_ZP"}},1436:function(e){e.exports={component:"user-types_component__HQnEu",title:"user-types_title__4JpW9",contents:"user-types_contents__iL7sT",sidenav:"user-types_sidenav__IPog8","mobile-dropdown":"user-types_mobile-dropdown___axBz","svg-wrapper":"user-types_svg-wrapper__znudr","active-border":"user-types_active-border__O99PO","user-type-titles":"user-types_user-type-titles__0bPL2","user-type-title":"user-types_user-type-title__0fESH",active:"user-types_active__Ec6IS","current-type-info":"user-types_current-type-info__AUPGW","info-title":"user-types_info-title___2YaT",features:"user-types_features__wOyFd",feature:"user-types_feature__d4_DI","feature-icon":"user-types_feature-icon__g8P3Y","feature-info":"user-types_feature-info__Twvhl","feature-title":"user-types_feature-title__Tsskh","feature-description":"user-types_feature-description__UCEsL","button-wrapper":"user-types_button-wrapper__D1AZ_"}},23:function(e){e.exports={mobilePortrait:"16px",mobileLandscape:"16px",tablet:"24px",smallDesktop:"32px",desktop:"32px"}}},function(e){e.O(0,[161,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);