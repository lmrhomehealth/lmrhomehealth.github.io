"use strict";(self.webpackChunklmr_health=self.webpackChunklmr_health||[]).push([[999],{2999:(ae,I,c)=>{c.d(I,{pp:()=>ne,To:()=>ie,ib:()=>H,yz:()=>O,yK:()=>te});var t=c(9468);let A=(()=>{class i{constructor(){this._listeners=[]}notify(e,n){for(let o of this._listeners)o(e,n)}listen(e){return this._listeners.push(e),()=>{this._listeners=this._listeners.filter(n=>e!==n)}}ngOnDestroy(){this._listeners=[]}static#e=this.\u0275fac=function(n){return new(n||i)};static#t=this.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var m=c(2495),x=c(8645),w=c(7394);let V=0;const _=new t.OlP("CdkAccordion");let B=(()=>{class i{constructor(){this._stateChanges=new x.x,this._openCloseAllActions=new x.x,this.id="cdk-accordion-"+V++,this._multi=!1}get multi(){return this._multi}set multi(e){this._multi=(0,m.Ig)(e)}openAll(){this._multi&&this._openCloseAllActions.next(!0)}closeAll(){this._openCloseAllActions.next(!1)}ngOnChanges(e){this._stateChanges.next(e)}ngOnDestroy(){this._stateChanges.complete(),this._openCloseAllActions.complete()}static#e=this.\u0275fac=function(n){return new(n||i)};static#t=this.\u0275dir=t.lG2({type:i,selectors:[["cdk-accordion"],["","cdkAccordion",""]],inputs:{multi:"multi"},exportAs:["cdkAccordion"],features:[t._Bn([{provide:_,useExisting:i}]),t.TTD]})}return i})(),N=0,F=(()=>{class i{get expanded(){return this._expanded}set expanded(e){e=(0,m.Ig)(e),this._expanded!==e&&(this._expanded=e,this.expandedChange.emit(e),e?(this.opened.emit(),this._expansionDispatcher.notify(this.id,this.accordion?this.accordion.id:this.id)):this.closed.emit(),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled}set disabled(e){this._disabled=(0,m.Ig)(e)}constructor(e,n,o){this.accordion=e,this._changeDetectorRef=n,this._expansionDispatcher=o,this._openCloseAllSubscription=w.w0.EMPTY,this.closed=new t.vpe,this.opened=new t.vpe,this.destroyed=new t.vpe,this.expandedChange=new t.vpe,this.id="cdk-accordion-child-"+N++,this._expanded=!1,this._disabled=!1,this._removeUniqueSelectionListener=()=>{},this._removeUniqueSelectionListener=o.listen((s,r)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===r&&this.id!==s&&(this.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}toggle(){this.disabled||(this.expanded=!this.expanded)}close(){this.disabled||(this.expanded=!1)}open(){this.disabled||(this.expanded=!0)}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(e=>{this.disabled||(this.expanded=e)})}static#e=this.\u0275fac=function(n){return new(n||i)(t.Y36(_,12),t.Y36(t.sBO),t.Y36(A))};static#t=this.\u0275dir=t.lG2({type:i,selectors:[["cdk-accordion-item"],["","cdkAccordionItem",""]],inputs:{expanded:"expanded",disabled:"disabled"},outputs:{closed:"closed",opened:"opened",destroyed:"destroyed",expandedChange:"expandedChange"},exportAs:["cdkAccordionItem"],features:[t._Bn([{provide:_,useValue:void 0}])]})}return i})(),R=(()=>{class i{static#e=this.\u0275fac=function(n){return new(n||i)};static#t=this.\u0275mod=t.oAB({type:i});static#n=this.\u0275inj=t.cJS({})}return i})();var b=c(8484),y=c(6814),M=c(3680),C=c(5643),Y=c(3997),S=c(7921),f=c(2181),z=c(8180),v=c(6028),Q=c(6232),L=c(3019),h=c(6825);const G=["body"];function $(i,a){}const j=[[["mat-expansion-panel-header"]],"*",[["mat-action-row"]]],U=["mat-expansion-panel-header","*","mat-action-row"];function X(i,a){if(1&i&&t._UZ(0,"span",2),2&i){const e=t.oxw();t.Q6J("@indicatorRotate",e._getExpandedState())}}const J=[[["mat-panel-title"]],[["mat-panel-description"]],"*"],K=["mat-panel-title","mat-panel-description","*"],E=new t.OlP("MAT_ACCORDION"),T="225ms cubic-bezier(0.4,0.0,0.2,1)",P={indicatorRotate:(0,h.X$)("indicatorRotate",[(0,h.SB)("collapsed, void",(0,h.oB)({transform:"rotate(0deg)"})),(0,h.SB)("expanded",(0,h.oB)({transform:"rotate(180deg)"})),(0,h.eR)("expanded <=> collapsed, void => collapsed",(0,h.jt)(T))]),bodyExpansion:(0,h.X$)("bodyExpansion",[(0,h.SB)("collapsed, void",(0,h.oB)({height:"0px",visibility:"hidden"})),(0,h.SB)("expanded",(0,h.oB)({height:"*",visibility:""})),(0,h.eR)("expanded <=> collapsed, void => collapsed",(0,h.jt)(T))])},D=new t.OlP("MAT_EXPANSION_PANEL");let Z=(()=>{class i{constructor(e,n){this._template=e,this._expansionPanel=n}static#e=this.\u0275fac=function(n){return new(n||i)(t.Y36(t.Rgc),t.Y36(D,8))};static#t=this.\u0275dir=t.lG2({type:i,selectors:[["ng-template","matExpansionPanelContent",""]]})}return i})(),W=0;const k=new t.OlP("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS");let H=(()=>{class i extends F{get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(e){this._hideToggle=(0,m.Ig)(e)}get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(e){this._togglePosition=e}constructor(e,n,o,s,r,g,p){super(e,n,o),this._viewContainerRef=s,this._animationMode=g,this._hideToggle=!1,this.afterExpand=new t.vpe,this.afterCollapse=new t.vpe,this._inputChanges=new x.x,this._headerId="mat-expansion-panel-header-"+W++,this._bodyAnimationDone=new x.x,this.accordion=e,this._document=r,this._bodyAnimationDone.pipe((0,Y.x)((l,d)=>l.fromState===d.fromState&&l.toState===d.toState)).subscribe(l=>{"void"!==l.fromState&&("expanded"===l.toState?this.afterExpand.emit():"collapsed"===l.toState&&this.afterCollapse.emit())}),p&&(this.hideToggle=p.hideToggle)}_hasSpacing(){return!!this.accordion&&this.expanded&&"default"===this.accordion.displayMode}_getExpandedState(){return this.expanded?"expanded":"collapsed"}toggle(){this.expanded=!this.expanded}close(){this.expanded=!1}open(){this.expanded=!0}ngAfterContentInit(){this._lazyContent&&this._lazyContent._expansionPanel===this&&this.opened.pipe((0,S.O)(null),(0,f.h)(()=>this.expanded&&!this._portal),(0,z.q)(1)).subscribe(()=>{this._portal=new b.UE(this._lazyContent._template,this._viewContainerRef)})}ngOnChanges(e){this._inputChanges.next(e)}ngOnDestroy(){super.ngOnDestroy(),this._bodyAnimationDone.complete(),this._inputChanges.complete()}_containsFocus(){if(this._body){const e=this._document.activeElement,n=this._body.nativeElement;return e===n||n.contains(e)}return!1}static#e=this.\u0275fac=function(n){return new(n||i)(t.Y36(E,12),t.Y36(t.sBO),t.Y36(A),t.Y36(t.s_b),t.Y36(y.K0),t.Y36(t.QbO,8),t.Y36(k,8))};static#t=this.\u0275cmp=t.Xpm({type:i,selectors:[["mat-expansion-panel"]],contentQueries:function(n,o,s){if(1&n&&t.Suo(s,Z,5),2&n){let r;t.iGM(r=t.CRH())&&(o._lazyContent=r.first)}},viewQuery:function(n,o){if(1&n&&t.Gf(G,5),2&n){let s;t.iGM(s=t.CRH())&&(o._body=s.first)}},hostAttrs:[1,"mat-expansion-panel"],hostVars:6,hostBindings:function(n,o){2&n&&t.ekj("mat-expanded",o.expanded)("_mat-animation-noopable","NoopAnimations"===o._animationMode)("mat-expansion-panel-spacing",o._hasSpacing())},inputs:{disabled:"disabled",expanded:"expanded",hideToggle:"hideToggle",togglePosition:"togglePosition"},outputs:{opened:"opened",closed:"closed",expandedChange:"expandedChange",afterExpand:"afterExpand",afterCollapse:"afterCollapse"},exportAs:["matExpansionPanel"],features:[t._Bn([{provide:E,useValue:void 0},{provide:D,useExisting:i}]),t.qOj,t.TTD],ngContentSelectors:U,decls:7,vars:4,consts:[["role","region",1,"mat-expansion-panel-content",3,"id"],["body",""],[1,"mat-expansion-panel-body"],[3,"cdkPortalOutlet"]],template:function(n,o){1&n&&(t.F$t(j),t.Hsn(0),t.TgZ(1,"div",0,1),t.NdJ("@bodyExpansion.done",function(r){return o._bodyAnimationDone.next(r)}),t.TgZ(3,"div",2),t.Hsn(4,1),t.YNc(5,$,0,0,"ng-template",3),t.qZA(),t.Hsn(6,2),t.qZA()),2&n&&(t.xp6(1),t.Q6J("@bodyExpansion",o._getExpandedState())("id",o.id),t.uIk("aria-labelledby",o._headerId),t.xp6(4),t.Q6J("cdkPortalOutlet",o._portal))},dependencies:[b.Pl],styles:['.mat-expansion-panel{--mat-expansion-container-shape:4px;box-sizing:content-box;display:block;margin:0;overflow:hidden;transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);position:relative;background:var(--mat-expansion-container-background-color);color:var(--mat-expansion-container-text-color);border-radius:var(--mat-expansion-container-shape)}.mat-expansion-panel:not([class*=mat-elevation-z]){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:var(--mat-expansion-container-shape);border-top-left-radius:var(--mat-expansion-container-shape)}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:var(--mat-expansion-container-shape);border-bottom-left-radius:var(--mat-expansion-container-shape)}.cdk-high-contrast-active .mat-expansion-panel{outline:solid 1px}.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel,.mat-expansion-panel._mat-animation-noopable{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible;font-family:var(--mat-expansion-container-text-font);font-size:var(--mat-expansion-container-text-size);font-weight:var(--mat-expansion-container-text-weight);line-height:var(--mat-expansion-container-text-line-height);letter-spacing:var(--mat-expansion-container-text-tracking)}.mat-expansion-panel-content[style*="visibility: hidden"] *{visibility:hidden !important}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px;border-top-color:var(--mat-expansion-actions-divider-color)}.mat-action-row .mat-button-base,.mat-action-row .mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row .mat-button-base,[dir=rtl] .mat-action-row .mat-mdc-button-base{margin-left:0;margin-right:8px}'],encapsulation:2,data:{animation:[P.bodyExpansion]},changeDetection:0})}return i})();class q{}const ee=(0,M.sb)(q);let O=(()=>{class i extends ee{constructor(e,n,o,s,r,g,p){super(),this.panel=e,this._element=n,this._focusMonitor=o,this._changeDetectorRef=s,this._animationMode=g,this._parentChangeSubscription=w.w0.EMPTY;const l=e.accordion?e.accordion._stateChanges.pipe((0,f.h)(d=>!(!d.hideToggle&&!d.togglePosition))):Q.E;this.tabIndex=parseInt(p||"")||0,this._parentChangeSubscription=(0,L.T)(e.opened,e.closed,l,e._inputChanges.pipe((0,f.h)(d=>!!(d.hideToggle||d.disabled||d.togglePosition)))).subscribe(()=>this._changeDetectorRef.markForCheck()),e.closed.pipe((0,f.h)(()=>e._containsFocus())).subscribe(()=>o.focusVia(n,"program")),r&&(this.expandedHeight=r.expandedHeight,this.collapsedHeight=r.collapsedHeight)}get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle()}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return!this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){const e=this._isExpanded();return e&&this.expandedHeight?this.expandedHeight:!e&&this.collapsedHeight?this.collapsedHeight:null}_keydown(e){switch(e.keyCode){case v.L_:case v.K5:(0,v.Vb)(e)||(e.preventDefault(),this._toggle());break;default:return void(this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(e))}}focus(e,n){e?this._focusMonitor.focusVia(this._element,e,n):this._element.nativeElement.focus(n)}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe(e=>{e&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this)})}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}static#e=this.\u0275fac=function(n){return new(n||i)(t.Y36(H,1),t.Y36(t.SBq),t.Y36(C.tE),t.Y36(t.sBO),t.Y36(k,8),t.Y36(t.QbO,8),t.$8M("tabindex"))};static#t=this.\u0275cmp=t.Xpm({type:i,selectors:[["mat-expansion-panel-header"]],hostAttrs:["role","button",1,"mat-expansion-panel-header","mat-focus-indicator"],hostVars:15,hostBindings:function(n,o){1&n&&t.NdJ("click",function(){return o._toggle()})("keydown",function(r){return o._keydown(r)}),2&n&&(t.uIk("id",o.panel._headerId)("tabindex",o.tabIndex)("aria-controls",o._getPanelId())("aria-expanded",o._isExpanded())("aria-disabled",o.panel.disabled),t.Udp("height",o._getHeaderHeight()),t.ekj("mat-expanded",o._isExpanded())("mat-expansion-toggle-indicator-after","after"===o._getTogglePosition())("mat-expansion-toggle-indicator-before","before"===o._getTogglePosition())("_mat-animation-noopable","NoopAnimations"===o._animationMode))},inputs:{tabIndex:"tabIndex",expandedHeight:"expandedHeight",collapsedHeight:"collapsedHeight"},features:[t.qOj],ngContentSelectors:K,decls:5,vars:3,consts:[[1,"mat-content"],["class","mat-expansion-indicator",4,"ngIf"],[1,"mat-expansion-indicator"]],template:function(n,o){1&n&&(t.F$t(J),t.TgZ(0,"span",0),t.Hsn(1),t.Hsn(2,1),t.Hsn(3,2),t.qZA(),t.YNc(4,X,1,1,"span",1)),2&n&&(t.ekj("mat-content-hide-toggle",!o._showToggle()),t.xp6(4),t.Q6J("ngIf",o._showToggle()))},dependencies:[y.O5],styles:['.mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1);height:var(--mat-expansion-header-collapsed-state-height);font-family:var(--mat-expansion-header-text-font);font-size:var(--mat-expansion-header-text-size);font-weight:var(--mat-expansion-header-text-weight);line-height:var(--mat-expansion-header-text-line-height);letter-spacing:var(--mat-expansion-header-text-tracking)}.mat-expansion-panel-header.mat-expanded{height:var(--mat-expansion-header-expanded-state-height)}.mat-expansion-panel-header[aria-disabled=true]{color:var(--mat-expansion-header-disabled-state-text-color)}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-header-hover-state-layer-color)}@media(hover: none){.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-container-background-color)}}.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused,.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused{background:var(--mat-expansion-header-focus-state-layer-color)}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-content.mat-content-hide-toggle{margin-right:8px}[dir=rtl] .mat-content.mat-content-hide-toggle{margin-right:0;margin-left:8px}.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-left:24px;margin-right:0}[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-right:24px;margin-left:0}.mat-expansion-panel-header-title{color:var(--mat-expansion-header-text-color)}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;flex-basis:0;margin-right:16px;align-items:center}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description{color:inherit}.mat-expansion-panel-header-description{flex-grow:2;color:var(--mat-expansion-header-description-color)}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:"";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle;color:var(--mat-expansion-header-indicator-color)}.cdk-high-contrast-active .mat-expansion-panel-content{border-top:1px solid;border-top-left-radius:0;border-top-right-radius:0}'],encapsulation:2,data:{animation:[P.indicatorRotate]},changeDetection:0})}return i})(),te=(()=>{class i{static#e=this.\u0275fac=function(n){return new(n||i)};static#t=this.\u0275dir=t.lG2({type:i,selectors:[["mat-panel-title"]],hostAttrs:[1,"mat-expansion-panel-header-title"]})}return i})(),ne=(()=>{class i extends B{constructor(){super(...arguments),this._ownHeaders=new t.n_E,this._hideToggle=!1,this.displayMode="default",this.togglePosition="after"}get hideToggle(){return this._hideToggle}set hideToggle(e){this._hideToggle=(0,m.Ig)(e)}ngAfterContentInit(){this._headers.changes.pipe((0,S.O)(this._headers)).subscribe(e=>{this._ownHeaders.reset(e.filter(n=>n.panel.accordion===this)),this._ownHeaders.notifyOnChanges()}),this._keyManager=new C.Em(this._ownHeaders).withWrap().withHomeAndEnd()}_handleHeaderKeydown(e){this._keyManager.onKeydown(e)}_handleHeaderFocus(e){this._keyManager.updateActiveItem(e)}ngOnDestroy(){super.ngOnDestroy(),this._keyManager?.destroy(),this._ownHeaders.destroy()}static#e=this.\u0275fac=function(){let e;return function(o){return(e||(e=t.n5z(i)))(o||i)}}();static#t=this.\u0275dir=t.lG2({type:i,selectors:[["mat-accordion"]],contentQueries:function(n,o,s){if(1&n&&t.Suo(s,O,5),2&n){let r;t.iGM(r=t.CRH())&&(o._headers=r)}},hostAttrs:[1,"mat-accordion"],hostVars:2,hostBindings:function(n,o){2&n&&t.ekj("mat-accordion-multi",o.multi)},inputs:{multi:"multi",hideToggle:"hideToggle",displayMode:"displayMode",togglePosition:"togglePosition"},exportAs:["matAccordion"],features:[t._Bn([{provide:E,useExisting:i}]),t.qOj]})}return i})(),ie=(()=>{class i{static#e=this.\u0275fac=function(n){return new(n||i)};static#t=this.\u0275mod=t.oAB({type:i});static#n=this.\u0275inj=t.cJS({imports:[y.ez,M.BQ,R,b.eL]})}return i})()}}]);