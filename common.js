"use strict";(self.webpackChunklmr_health=self.webpackChunklmr_health||[]).push([["common"],{6041:(m,g,i)=>{i.d(g,{g:()=>s});var t=i(3845),n=i(2024);let s=(()=>{class o{constructor(){}ngOnInit(){}submitEmail(l){const{firstName:e,lastName:a,email:c,message:r}=l.value;console.log("firstName: ",e),console.log("lastName: ",a),console.log("email: ",c),console.log("message: ",r)}static#t=this.\u0275fac=function(e){return new(e||o)};static#n=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-contact-dialog"]],decls:25,vars:0,consts:[[1,"contact-dialog-container"],[1,"contact-us-form",3,"ngSubmit"],["f","ngForm"],[1,"lmr-text-large"],[1,"first-and-last-container"],[1,"contact-us-text-small"],["ngModel","","id","firstName","type","text","name","firstName"],["ngModel","","id","lastName","type","text","name","lastName"],[1,"email-container"],["ngModel","","id","email","type","email","name","email"],[1,"message-container"],["ngModel","","id","message","type","text","name","message"],["type","submit",1,"lmr-primary-button"]],template:function(e,a){if(1&e){const c=t.EpF();t.TgZ(0,"div",0)(1,"form",1,2),t.NdJ("ngSubmit",function(){t.CHM(c);const f=t.MAs(2);return t.KtG(a.submitEmail(f))}),t.TgZ(3,"p",3),t._uU(4,"Contact Us"),t.qZA(),t.TgZ(5,"div",4)(6,"div")(7,"label",5),t._uU(8," First Name "),t._UZ(9,"input",6),t.qZA()(),t.TgZ(10,"div")(11,"label",5),t._uU(12," Last Name "),t._UZ(13,"input",7),t.qZA()()(),t.TgZ(14,"div",8)(15,"label",5),t._uU(16," Email "),t._UZ(17,"input",9),t.qZA()(),t.TgZ(18,"div",10)(19,"label",5),t._uU(20," Message "),t._UZ(21,"input",11),t.qZA()(),t.TgZ(22,"div")(23,"button",12),t._uU(24,"Submit"),t.qZA()()()()}},dependencies:[n._Y,n.Fj,n.JJ,n.JL,n.On,n.F],styles:[".lmr-title-text-with-outline[_ngcontent-%COMP%]{font-family:Roboto,serif;font-weight:900;font-style:normal;font-size:3.4vw;line-height:3.3vw;align-self:center;alignment:center;color:#4fa8db;letter-spacing:1px;text-shadow:-1.4px -1.4px 0 #FFF,0 -1.4px 0 #FFF,1.4px -1.4px 0 #FFF,1.4px 0 0 #FFF,1.4px 1.4px 0 #FFF,0 1.4px 0 #FFF,-1.4px 1.4px 0 #FFF,-1.4px 0 0 #FFF}.lmr-title-text-medium[_ngcontent-%COMP%]{font-family:Roboto,serif;font-weight:400;font-style:normal;font-size:28px;line-height:33px;align-self:center;alignment:center;color:#3d81a8}.lmr-title-text-small[_ngcontent-%COMP%]{font-family:Roboto,serif;font-weight:700;font-style:normal;font-size:20px;line-height:25.3px;align-self:center;alignment:center;color:#25688f}.lmr-logo-text[_ngcontent-%COMP%], .serving-list-text[_ngcontent-%COMP%]{font-family:Roboto,serif;font-weight:900;font-style:normal;font-size:4.8vh;line-height:4.3vw;align-self:center;alignment:center;color:#4fa8db;z-index:0}.lmr-georgia-text-xlarge[_ngcontent-%COMP%]{font-family:Georgia,Times,Times New Roman,serif;font-weight:700;font-style:normal;font-size:48px;line-height:20px;align-self:center;alignment:center;color:#fff}.lmr-georgia-text-large[_ngcontent-%COMP%], .page-description[_ngcontent-%COMP%]{font-family:Georgia,Times,Times New Roman,serif;font-weight:400;font-style:normal;font-size:20px;line-height:25px;align-self:center;alignment:center;color:#25688f}.lmr-georgia-text-medium[_ngcontent-%COMP%], .contact-us-address-description[_ngcontent-%COMP%], .health-service-description[_ngcontent-%COMP%], .health-service-child-description[_ngcontent-%COMP%], .more-information-text[_ngcontent-%COMP%], .lmr-georgia-text-medium-italic[_ngcontent-%COMP%]{font-family:Georgia,Times,Times New Roman,serif;font-weight:400;font-style:normal;font-size:16px;line-height:19px;align-self:center;alignment:center;color:#000}.lmr-georgia-text-medium-italic[_ngcontent-%COMP%]{font-style:italic}.lmr-text-large[_ngcontent-%COMP%], .info-container-text[_ngcontent-%COMP%]{font-family:Roboto,serif;font-style:normal;font-weight:400;font-size:15px;line-height:18px;color:#000}.lmr-text-small[_ngcontent-%COMP%], .contact-us-text-small[_ngcontent-%COMP%], .polygons-body-text[_ngcontent-%COMP%], .polygons-title-text[_ngcontent-%COMP%]{font-family:Roboto,serif;font-weight:400;font-style:normal;font-size:12px;line-height:16px;align-self:center;alignment:center;color:#fff}.polygons-title-text[_ngcontent-%COMP%]{font-weight:500;font-size:1.4vw;line-height:27px}.polygons-body-text[_ngcontent-%COMP%]{font-size:1.1vw;line-height:1.4vw}.more-information-text[_ngcontent-%COMP%]{font-size:4.9vw;line-height:3.4vw;color:#fff}.mobile-landing-subtitle[_ngcontent-%COMP%]{font-family:Georgia,Times,Times New Roman,serif;font-weight:400;font-style:normal;font-size:16px;line-height:20px;align-self:center;alignment:center;color:#25688f}.mobile-buttons-text-info[_ngcontent-%COMP%]{font-family:Georgia,Times,Times New Roman,serif;font-weight:400;font-style:normal;font-size:5vw;line-height:20px;align-self:center;alignment:center;color:#25688f;margin:0}.contact-us-text-small[_ngcontent-%COMP%]{color:#5a5a5a;line-height:14px}.carousel-title-text[_ngcontent-%COMP%]{color:#25688f;font-family:Roboto,serif;font-weight:700;font-size:48px}@media screen and (max-width: 768px){.carousel-title-text[_ngcontent-%COMP%]{font-family:Roboto,serif;font-style:normal;font-size:28px;line-height:33px;align-self:center;alignment:center;color:#3d81a8;text-align:center;font-weight:700}}.info-container-text[_ngcontent-%COMP%]{font-weight:400;line-height:22px;color:#fff}.page-title[_ngcontent-%COMP%]{color:#25688f;font-family:Roboto,serif;font-weight:700;font-size:48px}.page-description[_ngcontent-%COMP%]{font-size:30px;line-height:38px}@media screen and (max-width: 768px){.page-description[_ngcontent-%COMP%]{font-family:Georgia,Times,Times New Roman,serif;font-weight:400;font-style:normal;font-size:16px;line-height:20px;align-self:center;alignment:center;color:#25688f}}.panel-title[_ngcontent-%COMP%]{font-family:Roboto,serif;font-weight:200;font-size:48px;line-height:47px}.health-service-description[_ngcontent-%COMP%], .health-service-child-description[_ngcontent-%COMP%]{font-size:18px;text-align:center;line-height:25.3px;font-weight:400}.health-service-child-description[_ngcontent-%COMP%]{text-align:left}@media screen and (max-width: 768px){.panel-title[_ngcontent-%COMP%]{font-size:6vw;font-weight:700;margin-right:5px!important}}.contact-us-address-description[_ngcontent-%COMP%]{text-align:left}.about-information-text[_ngcontent-%COMP%]{font-family:Roboto,serif;font-weight:400;font-size:33px;line-height:40px;color:#95c5e1}.serving-title-text[_ngcontent-%COMP%]{font-family:Roboto,serif;font-weight:200;font-size:100px;line-height:25px;color:#95c5e1}.serving-list-text[_ngcontent-%COMP%]{font-weight:700;font-size:38px;line-height:25.3px}.our-values-title-text[_ngcontent-%COMP%]{font-family:Roboto,serif;font-weight:700;font-size:75px;line-height:25px;color:#4fa8db}.value-title-text[_ngcontent-%COMP%]{color:#fff;font-family:Roboto,serif;font-weight:700;font-size:48px}.value-description-text[_ngcontent-%COMP%]{color:#fff;font-family:Roboto,serif;font-weight:300;font-size:25px}@media screen and (max-width: 768px){.about-information-text[_ngcontent-%COMP%]{font-size:23px;line-height:25px}.serving-list-text[_ngcontent-%COMP%]{font-size:24px;line-height:2px}.our-values-title-text[_ngcontent-%COMP%]{font-size:50px;line-height:2px}.serving-title-text[_ngcontent-%COMP%]{font-size:45px;line-height:10px;color:#95c5e1}}.lmr-primary-button[_ngcontent-%COMP%]{color:#fff;background-color:#25688f;display:flex;border:none;border-radius:2px;cursor:pointer;justify-content:center;padding:6px 16px;font-weight:700;line-height:20px;font-size:14px}.lmr-primary-button[_ngcontent-%COMP%]:focus{outline:none}.lmr-primary-button[_ngcontent-%COMP%]:hover{background-color:#95c5e1;transition:background-color .2s linear}.lmr-primary-button[_ngcontent-%COMP%]:active{background-color:#3d505c}@media screen and (max-width: 768px){.lmr-primary-button[_ngcontent-%COMP%]{color:#fff;background-color:#25688f;display:flex;border:none;border-radius:2px;cursor:pointer;justify-content:center;padding:6px 16px;font-weight:700;line-height:20px;font-size:2.8vw}.lmr-primary-button[_ngcontent-%COMP%]:focus{outline:none}.lmr-primary-button[_ngcontent-%COMP%]:hover{background-color:#95c5e1;transition:background-color .2s linear}.lmr-primary-button[_ngcontent-%COMP%]:active{background-color:#3d505c}}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{height:100%}body[_ngcontent-%COMP%]{margin:0;font-family:Roboto,Helvetica Neue,sans-serif}.contact-dialog-container[_ngcontent-%COMP%]{background-color:#fff;border-radius:20px;height:100%;width:100%;display:flex}.contact-us-form[_ngcontent-%COMP%]{height:100%;width:100%;margin:5px 10px;display:block}.contact-us-form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{border-bottom:1px solid #D9D9D9;padding-bottom:6px}.contact-us-form[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex}.contact-us-form[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{width:100%}.contact-us-form[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{height:28px}.contact-us-form[_ngcontent-%COMP%]   .first-and-last-container[_ngcontent-%COMP%], .contact-us-form[_ngcontent-%COMP%]   .first-and-last-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child{margin-right:10px}.contact-us-form[_ngcontent-%COMP%]   .first-and-last-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child   input[_ngcontent-%COMP%]{width:100%}.contact-us-form[_ngcontent-%COMP%]   .email-container[_ngcontent-%COMP%]{margin-top:10px;margin-right:10px;display:block}.contact-us-form[_ngcontent-%COMP%]   .email-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%}.contact-us-form[_ngcontent-%COMP%]   .message-container[_ngcontent-%COMP%]{margin-top:10px;margin-right:10px;display:block}.contact-us-form[_ngcontent-%COMP%]   .message-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;height:75px}.contact-us-form[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child{margin-top:10px;justify-content:center}"]})}return o})()}}]);
//# sourceMappingURL=common.js.map