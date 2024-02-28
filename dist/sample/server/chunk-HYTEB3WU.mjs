import './polyfills.server.mjs';
import{C as z,E as w,F as Y,G,H as g,I as V,L as B,P as q,S as U,T as J,a as F,b as p,c as _,d as D,e as P,f as R,g as l,h as m,i as S,j as x,k as L,l as r,m as n,n as v,o as N,p as y,q as M,r as H,s as c,t as j,u as k,v as d}from"./chunk-5ONB7SQF.mjs";var K=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p({type:e,selectors:[["app-header"]],standalone:!0,features:[d],decls:6,vars:0,consts:[[1,"jumbotron"],[1,"text-center","identiy-section"],[1,"display-4"]],template:function(t,a){t&1&&(r(0,"div",0)(1,"div",1)(2,"h1",2),c(3,"Aritra Dey"),n(),r(4,"h3"),c(5,"Developer"),n()()())},styles:[".jumbotron[_ngcontent-%COMP%]{padding:2rem 1rem;background-color:#15395e;border-radius:0}.identiy-section[_ngcontent-%COMP%]{color:#ced3d8}"]});let i=e;return i})();var $=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p({type:e,selectors:[["app-nav"]],standalone:!0,features:[d],decls:15,vars:0,consts:[[1,"navbar-expand-md","border-bottom","mb-3"],[1,"container"],[1,"nav","justify-content-center"],[1,"nav-item"],["routerLink","/home","routerLinkActive","router-link-active",1,"nav-link","text-secondary","nav-item-font"],["routerLink","/portfolio","routerLinkActive","router-link-active",1,"nav-link","text-secondary","nav-item-font"],["routerLink","/resume","routerLinkActive","router-link-active",1,"nav-link","text-secondary","nav-item-font"],["routerLink","/contact","routerLinkActive","router-link-active",1,"nav-link","text-secondary","nav-item-font"]],template:function(t,a){t&1&&(r(0,"nav",0)(1,"div",1)(2,"ul",2)(3,"li",3)(4,"a",4),c(5,"Home"),n()(),r(6,"li",3)(7,"a",5),c(8,"Portfolio"),n()(),r(9,"li",3)(10,"a",6),c(11,"Resume"),n()(),r(12,"li",3)(13,"a",7),c(14,"Contact"),n()()()()())},dependencies:[U],styles:[".nav-item-font[_ngcontent-%COMP%]:link, .nav-item-font[_ngcontent-%COMP%]:visited{color:#bfe8e8!important}.nav-item-font[_ngcontent-%COMP%]:hover{color:#b2a89a!important}"]});let i=e;return i})();var Q=(()=>{let e=class e{constructor(){this.title="Aritra Dey"}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p({type:e,selectors:[["app-root"]],standalone:!0,features:[d],decls:5,vars:0,consts:[[1,"main-body-section"],[1,"shadow-sm"]],template:function(t,a){t&1&&(r(0,"section",0)(1,"div",1),v(2,"app-header")(3,"app-nav"),n(),v(4,"router-outlet"),n())},dependencies:[q,K,$],styles:[".main-body-section[_ngcontent-%COMP%]{background:url(https://mdbootstrap.com/img/Photos/Others/img%20%2848%29.webp) no-repeat center center;background-size:cover}"]});let i=e;return i})();var W=(()=>{let e=class e{constructor(o){this.titleService=o,this.titleService.setTitle("Aritra Dey - Contact")}};e.\u0275fac=function(t){return new(t||e)(m(g))},e.\u0275cmp=p({type:e,selectors:[["app-contact"]],standalone:!0,features:[d],decls:2,vars:0,template:function(t,a){t&1&&(r(0,"p"),c(1,"contact works!"),n())}});let i=e;return i})();var s=class s{constructor(e,u){this.key=e,this.color=u}toString(){return this.key}};s.ANGULAR=new s("Angular","red"),s.TYPESCRIPT=new s("TypeScript","darkred"),s.PYTHON=new s("Python","pink"),s.FLASK=new s("Flask","darkcyan"),s.CSHARP=new s("C#","green"),s.ASPNET=new s("ASP.NET","purple"),s.NODEJS=new s("Node.JS","brown"),s.PYTORCH=new s("PyTorch","blue"),s.OPENCV=new s("OpenCV","orange");var f=s;var b=(()=>{let e=class e{constructor(){this.projects=[{id:0,name:"Sample Angular portfolio",summary:"Angular 17 based personal portfolio website",description:"This project has been developed using Angular 17 and deployed on Github Pages. This project describes my current and past projects and the skillset I have gained.",projectLink:"https://github.com/Aritra93/test-angular-app",tags:[f.ANGULAR,f.TYPESCRIPT],pictures:[]},{id:1,name:"Sample Python API repository",summary:"Rest API using Python and Flask",description:"This project develops custom APIs using Python and Flask web framework. Some of the APIs developed are consumed by Angular 17 portfolio project. The APIs are hosted on Render.",projectLink:"https://github.com/Aritra93/pyhton-api-respository",tags:[f.PYTHON,f.FLASK],pictures:[]},{id:2,name:"Facial Recognition",summary:"Facial features representation",description:"This project is currently in developing phase. This project aims to learn a common representation from different facial poses. A common represenatation from varied facial poses denotes its the same person.",projectLink:"https://github.com/Aritra93",tags:[f.PYTHON,f.PYTORCH,f.OPENCV],pictures:[]},{id:3,name:"Brain Tumor Segmentation",summary:"Tumor segmentation using Brain MRI",description:"As part of coursework project for Data Mining, worked on locating and segmenting tumors in Brain MRI scans using UNET with skip connection architecture",projectLink:"https://github.com/Aritra93",tags:[f.OPENCV,f.PYTORCH,f.PYTHON],pictures:[]}]}GetProjects(){return this.projects}GetProjectById(o){let t=this.projects.find(a=>a.id===o);if(t===void 0)throw new TypeError("There is no project that matches the id: "+o);return t}};e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=P({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var O=(()=>{let e=class e{constructor(o,t){this.titleService=o,this.projectService=t,this.featuredProject={},this.titleService.setTitle("Aritra Dey - Home")}ngOnInit(){this.featuredProject=this.projectService.GetProjectById(0)}};e.\u0275fac=function(t){return new(t||e)(m(g),m(b))},e.\u0275cmp=p({type:e,selectors:[["app-home"]],standalone:!0,features:[d],decls:15,vars:1,consts:[[1,"container"],[1,"row"],[1,"col-lg","shadow","border","m-1","home-column-bg"],[1,"text-center"],["src","https://github.com/Aritra93/test-angular-app/blob/main/website-profile.jpg?raw=true","alt","profile picture","width","256","height","256",1,"rounded-circle"]],template:function(t,a){t&1&&(r(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h2"),c(5,"About Me"),n(),v(6,"img",4),r(7,"p"),c(8,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),n()()(),r(9,"div",2)(10,"div",3)(11,"h2"),c(12,"Featured project"),n(),r(13,"h4"),c(14),n()()()()()),t&2&&(l(14),j(a.featuredProject.name))},styles:[".home-column-bg[_ngcontent-%COMP%]{background-color:azure}"]});let i=e;return i})();var C=(()=>{let e=class e{constructor(){this.showModal=!1}};e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=P({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var X=(()=>{let e=class e{constructor(o){this.modalService=o,this.proj_details={}}ngOnInit(){}closeModal(){this.modalService.showModal=!1}};e.\u0275fac=function(t){return new(t||e)(m(C))},e.\u0275cmp=p({type:e,selectors:[["app-modal"]],inputs:{proj_details:"proj_details"},standalone:!0,features:[d],decls:11,vars:3,consts:[["id","overlay",3,"click"],["id","container"],["id","header"],["id","content"],["target","_blank",1,"icon-link",3,"href"],[1,"fab","fa-2x","fa-github"],["id","actions"],[1,"cancel",3,"click"]],template:function(t,a){t&1&&(r(0,"div",0),y("click",function(){return a.closeModal()}),n(),r(1,"div",1)(2,"div",2),c(3),n(),r(4,"div",3),c(5),n(),r(6,"a",4),v(7,"i",5),n(),r(8,"div",6)(9,"button",7),y("click",function(){return a.closeModal()}),c(10,"Close"),n()()()),t&2&&(l(3),k(" ",a.proj_details.name," "),l(2),k(" ",a.proj_details.description," "),l(),H("href",a.proj_details.projectLink,R))},styles:["#overlay[_ngcontent-%COMP%]{position:fixed;top:0;right:0;width:100%;height:100%;background-color:#4c47473f;z-index:12}#container[_ngcontent-%COMP%]{z-index:13;margin:auto;position:fixed;inset:0;width:40%;font-family:Arial,Helvetica,sans-serif;box-shadow:5px 5px 4px #13131333;border-radius:10px;background-color:#fff;display:flex;flex-direction:column;height:fit-content}#content[_ngcontent-%COMP%]{flex-grow:1;padding:40px;font-size:18px}#header[_ngcontent-%COMP%]{border-bottom:1px solid #ccc;height:70px;padding-left:30px;align-items:center;display:flex;font-weight:700}#actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;height:50px;gap:20px;padding:5px 40px 40px;align-content:center}#actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{height:35px;width:auto;padding:3px 5px 5px;border-radius:5px;background-color:#6495ed;color:#fbfbfb;align-content:center}.icon-link[_ngcontent-%COMP%]{padding-left:30px;color:#256085}"]});let i=e;return i})();function re(i,e){if(i&1&&(r(0,"div")(1,"div",8),c(2),n()()),i&2){let u=e.$implicit;l(),L("background-color",u.color),l(),j(u)}}var Z=(()=>{let e=class e{constructor(o,t){this.modalService=o,this.projectService=t,this.project={},this.project_details={},this.modalEvent=new F}openModal(o){this.project_details=this.projectService.GetProjectById(o),this.modalEvent.emit(this.project_details)}closeModal(){this.modalService.showModal=!1}};e.\u0275fac=function(t){return new(t||e)(m(C),m(b))},e.\u0275cmp=p({type:e,selectors:[["app-project-card"]],inputs:{project:"project"},outputs:{modalEvent:"modalEvent"},standalone:!0,features:[d],decls:11,vars:3,consts:[[1,"card","shadow","text-center",2,"max-width","350px","min-width","350px"],[1,"card-body"],[1,"card-title"],[1,"card-text"],[1,"btn","btn-primary",3,"click"],[1,"card-footer"],[1,"d-flex","flex-wrap","justify-content-center"],[4,"ngFor","ngForOf"],[1,"tag","me-2","mb-1"]],template:function(t,a){t&1&&(r(0,"div",0)(1,"div",1)(2,"h5",2),c(3),n(),r(4,"p",3),c(5),n(),r(6,"button",4),y("click",function(){return a.openModal(a.project.id)}),c(7,"View More"),n()(),r(8,"div",5)(9,"div",6),S(10,re,3,3,"div",7),n()()()),t&2&&(l(3),j(a.project.name),l(2),j(a.project.summary),l(5),x("ngForOf",a.project.tags))},dependencies:[w],styles:[".tag[_ngcontent-%COMP%]{padding:15px;height:20px;width:auto;font-size:12px;line-height:3px;border-radius:15px;background-color:#191970;color:#fff;margin:2px}#overlay[_ngcontent-%COMP%]{position:fixed;top:0;right:0;width:100%;height:100%;background-color:#4c47473f;z-index:12}#container[_ngcontent-%COMP%]{z-index:13;margin:auto;position:fixed;inset:0;width:40%;font-family:Arial,Helvetica,sans-serif;box-shadow:5px 5px 4px #13131333;border-radius:10px;background-color:#fff;display:flex;flex-direction:column;height:fit-content}#content[_ngcontent-%COMP%]{flex-grow:1;padding:40px;font-size:18px}.header[_ngcontent-%COMP%]{border-bottom:1px solid #ccc;height:70px;padding-left:30px;align-items:center;display:flex;font-weight:700}#actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;height:50px;gap:20px;padding:5px 40px 40px;align-content:center}#actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{height:35px;width:auto;padding:3px 5px 5px;border-radius:5px;background-color:#6495ed;color:#fbfbfb;align-content:center}"]});let i=e;return i})();function ae(i,e){if(i&1){let u=N();r(0,"div",4)(1,"app-project-card",5),y("modalEvent",function(t){_(u);let a=M();return D(a.receiveModalData(t))}),n()()}if(i&2){let u=e.$implicit;l(),x("project",u)}}function ce(i,e){if(i&1&&v(0,"app-modal",6),i&2){let u=M();x("proj_details",u.project_details)}}var ee=(()=>{let e=class e{constructor(o,t,a){this.titleService=o,this.projectService=t,this.modalService=a,this.projects={},this.project_details={},this.titleService.setTitle("Aritra Dey - Portfolio")}ngOnInit(){this.projects=this.projectService.GetProjects()}receiveModalData(o){this.modalService.showModal=!0,this.project_details=o}};e.\u0275fac=function(t){return new(t||e)(m(g),m(b),m(C))},e.\u0275cmp=p({type:e,selectors:[["app-portfolio"]],standalone:!0,features:[d],decls:4,vars:2,consts:[[1,"container"],[1,"row"],["class","col-lg-4 col-md-6 mb-4","style","max-width: 380px; min-width: 380px;",4,"ngFor","ngForOf"],[3,"proj_details",4,"ngIf"],[1,"col-lg-4","col-md-6","mb-4",2,"max-width","380px","min-width","380px"],[3,"project","modalEvent"],[3,"proj_details"]],template:function(t,a){t&1&&(r(0,"div",0)(1,"div",1),S(2,ae,2,1,"div",2),n()(),S(3,ce,1,1,"app-modal",3)),t&2&&(l(2),x("ngForOf",a.projects),l(),x("ngIf",a.modalService.showModal))},dependencies:[Z,w,Y,X]});let i=e;return i})();var te=(()=>{let e=class e{constructor(o){this.titleService=o,this.titleService.setTitle("Aritra Dey - Resume")}};e.\u0275fac=function(t){return new(t||e)(m(g))},e.\u0275cmp=p({type:e,selectors:[["app-resume"]],standalone:!0,features:[d],decls:2,vars:0,template:function(t,a){t&1&&(r(0,"p"),c(1,"resume works!"),n())}});let i=e;return i})();var ie=[{path:"home",component:O},{path:"portfolio",component:ee},{path:"resume",component:te},{path:"contact",component:W},{path:"**",component:O,pathMatch:"full"}];var oe={providers:[J(ie),V()]};var se={providers:[B()]},ne=z(oe,se);var pe=()=>G(Q,ne),$e=pe;export{$e as a};