(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"82nj":function(n,e,t){"use strict";t("rGqo"),t("yt8O"),t("Btvt"),t("RW0V"),t("91GP");var a=t("N1om"),i=t.n(a),o=t("q1tI"),r=t("Wbzz"),l=t("9eSz"),s=t.n(l),c=t("vOnD"),m=t("bC0J"),p=c.c.div.withConfig({displayName:"post-card-minimalstyle__PostCardWrapper",componentId:"sc-1iic34k-0"})(["\n  position: relative;\n  &:hover {\n    .post_preview {\n      transform: translateY(0);\n    }\n    .post_date {\n      transform: translateY(100%);\n    }\n  }\n"]),d=c.c.div.withConfig({displayName:"post-card-minimalstyle__PostPreview",componentId:"sc-1iic34k-1"})(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  transform: translateY(-100%);\n  transition: 0.35s ease-in-out;\n  img {\n    border-radius: 3px;\n  }\n  @media (max-width: 1024px) {\n    transform: translateY(0);\n  }\n  @media (max-width: 575px) {\n    margin-bottom: 30px;\n    width: auto;\n    height: auto;\n    position: relative;\n    transform: translateY(0);\n  }\n"]),g=c.c.div.withConfig({displayName:"post-card-minimalstyle__PostDetails",componentId:"sc-1iic34k-2"})(["\n  display: flex;\n  @media (max-width: 575px) {\n    flex-direction: column;\n  }\n"]),f=c.c.div.withConfig({displayName:"post-card-minimalstyle__PostDate",componentId:"sc-1iic34k-3"})(["\n  font-size: 90px;\n  font-weight: 700;\n  text-align: center;\n  width: 100%;\n  height: 100%;\n  line-height: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: ",";\n  transition: 0.35s ease-in-out;\n  @media (max-width: 1200px) {\n    font-size: 70px;\n  }\n  @media (max-width: 990px) {\n    font-size: 56px;\n  }\n  @media (max-width: 575px) {\n    display: none;\n  }\n\n  > span {\n    font-size: 13px;\n    font-weight: 400;\n    display: block;\n    margin-top: 12px;\n    text-transform: uppercase;\n  }\n"],Object(m.a)("colors.textColor","#292929")),x=c.c.div.withConfig({displayName:"post-card-minimalstyle__PostContent",componentId:"sc-1iic34k-4"})(["\n  align-self: center;\n"]),u=c.c.h2.withConfig({displayName:"post-card-minimalstyle__PostTitle",componentId:"sc-1iic34k-5"})(["\n  font-size: 21px;\n  font-weight: 700;\n  color: ",";\n  line-height: 1.53;\n  margin-bottom: 10px;\n  font-family: 'Fira Sans', sans-serif;\n  a {\n    color: ",";\n  }\n  @media (max-width: 1200px) {\n    font-size: 21px;\n  }\n  @media (max-width: 990px) {\n    font-size: 19px;\n    margin-bottom: 12px;\n  }\n  @media (max-width: 575px) {\n    font-size: 17px;\n    margin-bottom: 10px;\n  }\n"],Object(m.a)("colors.textColor","#292929"),Object(m.a)("colors.textColor","#292929")),h=c.c.p.withConfig({displayName:"post-card-minimalstyle__Excerpt",componentId:"sc-1iic34k-6"})(["\n  font-size: ","px;\n  color: ",";\n  font-weight: 400;\n  line-height: 2;\n  margin-bottom: 0;\n  @media (max-width: 990px) {\n    font-size: 14px;\n  }\n"],Object(m.a)("fontSizes.3","15"),Object(m.a)("colors.textColor","#292929")),w=c.c.div.withConfig({displayName:"post-card-minimalstyle__PostTags",componentId:"sc-1iic34k-7"})(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  margin-bottom: 15px;\n\n  a {\n    display: block;\n    margin-right: 30px;\n    font-size: 14px;\n    font-weight: 400;\n    color: ",";\n    @media (max-width: 990px) {\n      font-size: 13px;\n      margin-right: 25px;\n    }\n  }\n"],Object(m.a)("colors.primary","#D10068")),y=c.c.div.withConfig({displayName:"post-card-minimalstyle__PostDateAndPreview",componentId:"sc-1iic34k-8"})(["\n  position: relative;\n  margin-right: 45px;\n  flex-shrink: 0;\n  overflow: hidden;\n  height: 170px;\n  width: 170px;\n  @media (max-width: 1200px) {\n    margin-right: 35px;\n  }\n  @media (max-width: 990px) {\n    margin-right: 25px;\n  }\n  @media (max-width: 575px) {\n    height: auto;\n    width: auto;\n  }\n"]),b=c.c.div.withConfig({displayName:"post-card-minimalstyle__ReadMore",componentId:"sc-1iic34k-9"})(["\n  margin-top: 16px;\n  a {\n    font-size: 13px;\n    font-weight: 500;\n    color: ",";\n    transition: 0.15s ease-in-out;\n    &:hover {\n      color: ",";\n    }\n  }\n"],Object(m.a)("colors.textColor","#292929"),Object(m.a)("colors.primary","#D10068"));var v=function(n){var e=n.image,t=n.title,a=n.description,l=n.url,c=n.date,m=n.tags,v=n.className,k=n.imageType,_=function(n,e){if(null==n)return{};var t,a,i={},o=Object.keys(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,["image","title","description","url","date","tags","className","imageType"]),E=["post_card"];return v&&E.push(v),o.createElement(p,Object.assign({className:E.join(" ")},_),o.createElement(g,{className:"post_details"},o.createElement(y,null,c&&o.createElement(f,{dangerouslySetInnerHTML:{__html:c},className:"post_date"}),null==e?null:o.createElement(d,{className:"post_preview"},o.createElement(r.Link,{to:l},"fluid"===k?o.createElement(s.a,{fluid:e,alt:"post preview"}):o.createElement(s.a,{fixed:e,alt:"post preview"})))),o.createElement(x,{className:"post_content"},null==m?null:o.createElement(w,{className:"post_tags"},m.map((function(n,e){return o.createElement(r.Link,{key:e,to:"/tags/"+i()(n)+"/"},"#"+n)}))),o.createElement(u,{className:"post_title"},o.createElement(r.Link,{to:l},t)),a&&o.createElement(h,{dangerouslySetInnerHTML:{__html:a},className:"excerpt"}),o.createElement(b,null,o.createElement(r.Link,{to:l},"Read More")))))};v.defaultProps={imageType:"fluid"};e.a=v},K392:function(n,e,t){"use strict";t.r(e),t.d(e,"pageQuery",(function(){return c}));t("a1Th"),t("Btvt");var a=t("q1tI"),i=t("82nj"),o=t("YEzi"),r=t("9Dj+"),l=t("H8eV"),s=t("GpQV");e.default=function(n){var e=n.data.allMarkdownRemark.edges,t=n.pageContext,c=t.currentPage,m=t.numPages,p=1===c,d=c===m,g=c-1==1?"/page/1":"/page/"+(c-1).toString(),f="/page/"+(c+1).toString(),x=!p&&g,u=!d&&f;return a.createElement(r.a,null,a.createElement(l.a,{title:"Page "+c}),a.createElement(s.d,null,e.map((function(n){var e=n.node;return a.createElement(i.a,{key:e.fields.slug,title:e.frontmatter.title||e.fields.slug,image:null==e.frontmatter.cover?null:e.frontmatter.cover.childImageSharp.fluid,url:e.fields.slug,description:e.frontmatter.description||e.excerpt,date:e.frontmatter.date,tags:e.frontmatter.tags})})),a.createElement(o.a,{prevLink:x,nextLink:u,currentPage:""+c,totalPage:""+m})))};var c="2608994571"},YEzi:function(n,e,t){"use strict";t("rGqo"),t("yt8O"),t("Btvt"),t("RW0V"),t("91GP");var a=t("q1tI"),i=t("Wbzz"),o=t("IdFE"),r=t("vOnD"),l=t("bC0J"),s=r.c.div.withConfig({displayName:"paginationstyle__PaginationWrapper",componentId:"n25amc-0"})(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]),c=r.c.div.withConfig({displayName:"paginationstyle__PrevPage",componentId:"n25amc-1"})(["\n  min-width: 32px;\n  a {\n    width: 32px;\n    height: 32px;\n    color: ",";\n    border-radius: 50%;\n    background-color: ",";\n    font-size: 18px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: 0.15s ease-in-out;\n    svg {\n      display: block;\n    }\n    &:hover {\n      color: ",";\n      background-color: ",";\n    }\n  }\n"],Object(l.a)("colors.black","#292929"),Object(l.a)("colors.lightTextColor","#D10068"),Object(l.a)("colors.black","#D10068"),Object(l.a)("colors.primary","#D10068")),m=r.c.div.withConfig({displayName:"paginationstyle__NextPage",componentId:"n25amc-2"})(["\n  min-width: 32px;\n  a {\n    width: 32px;\n    height: 32px;\n    color: ",";\n    border-radius: 50%;\n    background-color: ",";\n    font-size: 18px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: 0.15s ease-in-out;\n    svg {\n      display: block;\n    }\n    &:hover {\n      color: ",";\n      background-color: ",";\n    }\n  }\n"],Object(l.a)("colors.black","#292929"),Object(l.a)("colors.lightTextColor","#D10068"),Object(l.a)("colors.black","#D10068"),Object(l.a)("colors.primary","#D10068")),p=r.c.div.withConfig({displayName:"paginationstyle__PageNumber",componentId:"n25amc-3"})(["\n  color: ","\n"],Object(l.a)("colors.textColor","#292929"));e.a=function(n){var e=n.prevLink,t=n.nextLink,r=n.currentPage,l=n.totalPage,d=n.className,g=function(n,e){if(null==n)return{};var t,a,i={},o=Object.keys(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,["prevLink","nextLink","currentPage","totalPage","className"]);return a.createElement(s,Object.assign({},g,{className:d}),a.createElement(c,null,e&&a.createElement(i.Link,{to:""+e,"aria-label":"Prev"},a.createElement(o.c,null))),a.createElement(p,null,"Page "+r+" Of "+l),a.createElement(m,null,t&&a.createElement(i.Link,{to:""+t,"aria-label":"Next"},a.createElement(o.d,null))))}}}]);
//# sourceMappingURL=component---src-templates-blog-list-tsx-2241faf3e9b0f0685bd6.js.map