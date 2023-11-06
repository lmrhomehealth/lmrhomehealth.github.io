"use strict";
(self["webpackChunklmr_health"] = self["webpackChunklmr_health"] || []).push([["main"],{

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);



const routes = [];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);


class AppComponent {
  constructor() {
    this.title = 'lmr-health';
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 1,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
    styles: ["\n\n.lmr-title-text-with-outline[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", serif;\n  font-weight: 900;\n  font-style: normal;\n  font-size: 3.4vw;\n  line-height: 3.3vw;\n  align-self: center;\n  alignment: center;\n  color: #4FA8DB;\n  letter-spacing: 1px;\n  text-shadow: -1.4px -1.4px 0 #FFF, 0 -1.4px 0 #FFF, 1.4px -1.4px 0 #FFF, 1.4px 0 0 #FFF, 1.4px 1.4px 0 #FFF, 0 1.4px 0 #FFF, -1.4px 1.4px 0 #FFF, -1.4px 0 0 #FFF;\n}\n\n.lmr-title-text-medium[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", serif;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 28px;\n  line-height: 33px;\n  align-self: center;\n  alignment: center;\n  color: #3D81A8;\n}\n\n.lmr-title-text-small[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", serif;\n  font-weight: 700;\n  font-style: normal;\n  font-size: 20px;\n  line-height: 25.3px;\n  align-self: center;\n  alignment: center;\n  color: #25688F;\n}\n\n.lmr-logo-text[_ngcontent-%COMP%], .serving-list-text[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", serif;\n  font-weight: 900;\n  font-style: normal;\n  font-size: 4.8vh;\n  line-height: 4.3vw;\n  align-self: center;\n  alignment: center;\n  color: #4FA8DB;\n  z-index: 0;\n}\n\n.lmr-georgia-text-xlarge[_ngcontent-%COMP%] {\n  font-family: Georgia, Times, \"Times New Roman\", serif;\n  font-weight: 700;\n  font-style: normal;\n  font-size: 48px;\n  line-height: 20px;\n  align-self: center;\n  alignment: center;\n  color: white;\n}\n\n.lmr-georgia-text-large[_ngcontent-%COMP%], .page-description[_ngcontent-%COMP%] {\n  font-family: Georgia, Times, \"Times New Roman\", serif;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 20px;\n  line-height: 25px;\n  align-self: center;\n  alignment: center;\n  color: #25688F;\n}\n\n.lmr-georgia-text-medium[_ngcontent-%COMP%], .contact-us-address-description[_ngcontent-%COMP%], .health-service-description[_ngcontent-%COMP%], .health-service-child-description[_ngcontent-%COMP%], .more-information-text[_ngcontent-%COMP%], .lmr-georgia-text-medium-italic[_ngcontent-%COMP%] {\n  font-family: Georgia, Times, \"Times New Roman\", serif;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 16px;\n  line-height: 19px;\n  align-self: center;\n  alignment: center;\n  color: black;\n}\n\n.lmr-georgia-text-medium-italic[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n\n.lmr-text-large[_ngcontent-%COMP%], .info-container-text[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 15px;\n  line-height: 18px;\n  color: #000000;\n}\n\n.lmr-text-small[_ngcontent-%COMP%], .contact-us-text-small[_ngcontent-%COMP%], .polygons-body-text[_ngcontent-%COMP%], .polygons-title-text[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", serif;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 12px;\n  line-height: 16px;\n  align-self: center;\n  alignment: center;\n  color: white;\n}\n\n\n\n\n\n.polygons-title-text[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 1.4vw;\n  line-height: 27px;\n}\n\n.polygons-body-text[_ngcontent-%COMP%] {\n  font-size: 1.1vw;\n  line-height: 1.4vw;\n}\n\n.more-information-text[_ngcontent-%COMP%] {\n  font-size: 4.9vw;\n  line-height: 3.4vw;\n  color: white;\n}\n\n.mobile-landing-subtitle[_ngcontent-%COMP%] {\n  font-family: Georgia, Times, \"Times New Roman\", serif;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 16px;\n  line-height: 20px;\n  align-self: center;\n  alignment: center;\n  color: #25688F;\n}\n\n.mobile-buttons-text-info[_ngcontent-%COMP%] {\n  font-family: Georgia, Times, \"Times New Roman\", serif;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 5vw;\n  line-height: 20px;\n  align-self: center;\n  alignment: center;\n  color: #25688F;\n  margin: 0;\n}\n\n\n\n\n\n.contact-us-text-small[_ngcontent-%COMP%] {\n  color: #5A5A5A;\n  line-height: 14px;\n}\n\n.carousel-title-text[_ngcontent-%COMP%] {\n  color: #25688F;\n  font-family: \"Roboto\", serif;\n  font-weight: 700;\n  font-size: 48px;\n}\n\n@media screen and (max-width: 768px) {\n  .carousel-title-text[_ngcontent-%COMP%] {\n    font-family: \"Roboto\", serif;\n    font-style: normal;\n    font-size: 28px;\n    line-height: 33px;\n    align-self: center;\n    alignment: center;\n    color: #3D81A8;\n    text-align: center;\n    font-weight: 700;\n  }\n}\n.info-container-text[_ngcontent-%COMP%] {\n  font-weight: 400;\n  line-height: 22px;\n  color: white;\n}\n\n\n\n\n\n.page-title[_ngcontent-%COMP%] {\n  color: #25688F;\n  font-family: \"Roboto\", serif;\n  font-weight: 700;\n  font-size: 48px;\n}\n\n.page-description[_ngcontent-%COMP%] {\n  font-size: 30px;\n  line-height: 38px;\n}\n\n@media screen and (max-width: 768px) {\n  .page-description[_ngcontent-%COMP%] {\n    font-family: Georgia, Times, \"Times New Roman\", serif;\n    font-weight: 400;\n    font-style: normal;\n    font-size: 16px;\n    line-height: 20px;\n    align-self: center;\n    alignment: center;\n    color: #25688F;\n  }\n}\n\n\n\n\n.panel-title[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", serif;\n  font-weight: 200;\n  font-size: 48px;\n  line-height: 47px;\n}\n\n.health-service-description[_ngcontent-%COMP%], .health-service-child-description[_ngcontent-%COMP%] {\n  font-size: 18px;\n  text-align: center;\n  line-height: 25.3px;\n  font-weight: 400;\n}\n\n.health-service-child-description[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n@media screen and (max-width: 768px) {\n  .panel-title[_ngcontent-%COMP%] {\n    font-size: 6vw;\n    font-weight: 700;\n    margin-right: 5px !important;\n  }\n}\n\n\n\n\n.contact-us-address-description[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n\n\n\n\n.about-information-text[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", serif;\n  font-weight: 400;\n  font-size: 33px;\n  line-height: 40px;\n  color: #95C5E1;\n}\n\n.serving-title-text[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", serif;\n  font-weight: 200;\n  font-size: 100px;\n  line-height: 25px;\n  color: #95C5E1;\n}\n\n.serving-list-text[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 38px;\n  line-height: 25.3px;\n}\n\n.our-values-title-text[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", serif;\n  font-weight: 700;\n  font-size: 75px;\n  line-height: 25px;\n  color: #4FA8DB;\n}\n\n.value-title-text[_ngcontent-%COMP%] {\n  color: white;\n  font-family: \"Roboto\", serif;\n  font-weight: 700;\n  font-size: 48px;\n}\n\n.value-description-text[_ngcontent-%COMP%] {\n  color: white;\n  font-family: \"Roboto\", serif;\n  font-weight: 300;\n  font-size: 25px;\n}\n\n@media screen and (max-width: 768px) {\n  .about-information-text[_ngcontent-%COMP%] {\n    font-size: 23px;\n    line-height: 25px;\n  }\n  .serving-list-text[_ngcontent-%COMP%] {\n    font-size: 24px;\n    line-height: 2px;\n  }\n  .our-values-title-text[_ngcontent-%COMP%] {\n    font-size: 50px;\n    line-height: 2px;\n  }\n  .serving-title-text[_ngcontent-%COMP%] {\n    font-size: 45px;\n    line-height: 10px;\n    color: #95C5E1;\n  }\n}\n.lmr-primary-button[_ngcontent-%COMP%] {\n  color: white;\n  background-color: #25688F;\n  display: flex;\n  border: none;\n  border-radius: 2px;\n  cursor: pointer;\n  justify-content: center;\n  padding: 6px 16px;\n  font-weight: bold;\n  line-height: 20px;\n  font-size: 14px;\n}\n.lmr-primary-button[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.lmr-primary-button[_ngcontent-%COMP%]:hover {\n  background-color: #95C5E1;\n  transition: background-color 0.2s linear;\n}\n.lmr-primary-button[_ngcontent-%COMP%]:active {\n  background-color: #3D505C;\n}\n\n@media screen and (max-width: 768px) {\n  .lmr-primary-button[_ngcontent-%COMP%] {\n    color: white;\n    background-color: #25688F;\n    display: flex;\n    border: none;\n    border-radius: 2px;\n    cursor: pointer;\n    justify-content: center;\n    padding: 6px 16px;\n    font-weight: bold;\n    line-height: 20px;\n    font-size: 2.8vw;\n  }\n  .lmr-primary-button[_ngcontent-%COMP%]:focus {\n    outline: none;\n  }\n  .lmr-primary-button[_ngcontent-%COMP%]:hover {\n    background-color: #95C5E1;\n    transition: background-color 0.2s linear;\n  }\n  .lmr-primary-button[_ngcontent-%COMP%]:active {\n    background-color: #3D505C;\n  }\n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n\n\n\n[_nghost-%COMP%] {\n  background-color: #E5E5E5;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvcmUvdGV4dC5zY3NzIiwid2VicGFjazovLy4vc3JjL3Njc3MvY29yZS92YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL3Njc3MvY29tcG9uZW50cy9lbGVtZW50cy9idXR0b24uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQ2FBO0VBQ0UsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQ0xZO0VETVosbUJBQUE7RUFuQkEsaUtBQUE7QUVTRjs7QUZjQTtFQUNFLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQ2hCWTtBQ0tkOztBRmNBO0VBQ0UsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNDMUJZO0FDZWQ7O0FGY0E7RUFDRSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNDeENZO0VEeUNaLFVBQUE7QUVYRjs7QUZjQTtFQUNFLHFEQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FFWEY7O0FGY0E7RUFDRSxxREFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0M1RFk7QUNpRGQ7O0FGY0E7RUFDRSxx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Q0UsZUFBQTtJQUNBLGdCQUFBO0VFaENGO0VGbUNBO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0lBQ0EsY0N0VVU7RUNxU1o7QUFDRjtBQzlTQTtFQUNFLFlBQUE7RUFDQSx5QkZVWTtFRVRaLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FEZ1RGO0FDL1NFO0VBQ0UsYUFBQTtBRGlUSjtBQzlTRTtFQUNFLHlCRlRVO0VFVVYsd0NBQUE7QURnVEo7QUM3U0U7RUFDRSx5QkZaVTtBQzJUZDs7QUMxU0E7RUFDRTtJQUNFLFlBQUE7SUFDQSx5QkZsQlU7SUVtQlYsYUFBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtJQUNBLGVBQUE7SUFDQSx1QkFBQTtJQUNBLGlCQUFBO0lBQ0EsaUJBQUE7SUFDQSxpQkFBQTtJQUNBLGdCQUFBO0VENlNGO0VDNVNFO0lBQ0UsYUFBQTtFRDhTSjtFQzNTRTtJQUNFLHlCRnJDUTtJRXNDUix3Q0FBQTtFRDZTSjtFQzFTRTtJQUNFLHlCRnhDUTtFQ29WWjtBQUNGO0FIbldBO0VBQWEsWUFBQTtBR3NXYjs7QUhyV0E7RUFBTyxTQUFBO0VBQVcsaURBQUE7QUcwV2xCOztBSHhXQSxtQ0FBQTtBR0pBO0VBQ0UseUJESFk7QUNtWGQiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5AaW1wb3J0IFwic2Nzcy9sbXItcm9vdFwiO1xuXG5odG1sLCBib2R5IHsgaGVpZ2h0OiAxMDAlOyB9XG5ib2R5IHsgbWFyZ2luOiAwOyBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7IH1cblxuLyogSW1wb3J0aW5nIEJvb3RzdHJhcCBTQ1NTIGZpbGUuICovXG4iLCJAaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cbkBtaXhpbiBzdHJva2UoJGNvbG9yOiAjMDAwLCAkc2l6ZTogMXB4KSB7XG4gIHRleHQtc2hhZG93OiAtI3skc2l6ZX0gLSN7JHNpemV9IDAgJGNvbG9yLFxuICAwICAgICAgICAtI3skc2l6ZX0gMCAkY29sb3IsXG4gICN7JHNpemV9IC0jeyRzaXplfSAwICRjb2xvcixcbiAgI3skc2l6ZX0gIDAgMCAkY29sb3IsXG4gICN7JHNpemV9ICAjeyRzaXplfSAwICRjb2xvcixcbiAgMCAgICAgICAgICN7JHNpemV9IDAgJGNvbG9yLFxuICAtI3skc2l6ZX0gICN7JHNpemV9IDAgJGNvbG9yLFxuICAtI3skc2l6ZX0gMCAwICRjb2xvcjtcbn1cblxuLmxtci10aXRsZS10ZXh0LXdpdGgtb3V0bGluZSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAzLjR2dztcbiAgbGluZS1oZWlnaHQ6IDMuM3Z3O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGFsaWdubWVudDogY2VudGVyO1xuICBjb2xvcjogJHVpLWJsdWUtMzAwO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBAaW5jbHVkZSBzdHJva2UoJGNvbG9yOiAjRkZGLCAkc2l6ZTogMS40cHgpO1xufVxuXG4ubG1yLXRpdGxlLXRleHQtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDI4cHg7XG4gIGxpbmUtaGVpZ2h0OiAzM3B4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGFsaWdubWVudDogY2VudGVyO1xuICBjb2xvcjogJHVpLWJsdWUtNTAwO1xufVxuXG4ubG1yLXRpdGxlLXRleHQtc21hbGwge1xuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI1LjNweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBhbGlnbm1lbnQ6IGNlbnRlcjtcbiAgY29sb3I6ICR1aS1ibHVlLTYwMDtcbn1cblxuLmxtci1sb2dvLXRleHQge1xuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNlcmlmO1xuICBmb250LXdlaWdodDogOTAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogNC44dmg7XG4gIGxpbmUtaGVpZ2h0OiA0LjN2dztcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBhbGlnbm1lbnQ6IGNlbnRlcjtcbiAgY29sb3I6ICR1aS1ibHVlLTMwMDtcbiAgei1pbmRleDogMDtcbn1cblxuLmxtci1nZW9yZ2lhLXRleHQteGxhcmdlIHtcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsIFRpbWVzLCBcIlRpbWVzIE5ldyBSb21hblwiLCBzZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDQ4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGFsaWdubWVudDogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5sbXItZ2VvcmdpYS10ZXh0LWxhcmdlIHtcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsIFRpbWVzLCBcIlRpbWVzIE5ldyBSb21hblwiLCBzZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGFsaWdubWVudDogY2VudGVyO1xuICBjb2xvcjogJHVpLWJsdWUtNjAwO1xufVxuXG4ubG1yLWdlb3JnaWEtdGV4dC1tZWRpdW0ge1xuICBmb250LWZhbWlseTogR2VvcmdpYSwgVGltZXMsIFwiVGltZXMgTmV3IFJvbWFuXCIsIHNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgYWxpZ25tZW50OiBjZW50ZXI7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmxtci1nZW9yZ2lhLXRleHQtbWVkaXVtLWl0YWxpYyB7XG4gIEBleHRlbmQgLmxtci1nZW9yZ2lhLXRleHQtbWVkaXVtO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5sbXItdGV4dC1sYXJnZSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cblxuLmxtci10ZXh0LXNtYWxsIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGFsaWdubWVudDogY2VudGVyO1xuICBjb2xvcjogJHVpLXdoaXRlLTEwMDtcbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICBDb21wb25lbnQ6IGxhbmRpbmcgcGFnZVxuID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4vL0hlYWx0aCBDYXJlIFByb2Zlc3Npb25hbHMgLyBJbmRpdmlkdWFscyBBbmQgRmFtaWxpZXNcbi5wb2x5Z29ucy10aXRsZS10ZXh0IHtcbiAgQGV4dGVuZCAubG1yLXRleHQtc21hbGw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMS40dnc7XG4gIGxpbmUtaGVpZ2h0OiAyN3B4O1xufVxuXG4ucG9seWdvbnMtYm9keS10ZXh0IHtcbiAgQGV4dGVuZCAubG1yLXRleHQtc21hbGw7XG4gIGZvbnQtc2l6ZTogMS4xdnc7XG4gIGxpbmUtaGVpZ2h0OiAxLjR2dztcbn1cblxuLm1vcmUtaW5mb3JtYXRpb24tdGV4dHtcbiAgQGV4dGVuZCAubG1yLWdlb3JnaWEtdGV4dC1tZWRpdW07XG4gIGZvbnQtc2l6ZTogNC45dnc7XG4gIGxpbmUtaGVpZ2h0OiAzLjR2dztcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubW9iaWxlLWxhbmRpbmctc3VidGl0bGUge1xuICBmb250LWZhbWlseTogR2VvcmdpYSwgVGltZXMsIFwiVGltZXMgTmV3IFJvbWFuXCIsIHNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgYWxpZ25tZW50OiBjZW50ZXI7XG4gIGNvbG9yOiAkdWktYmx1ZS02MDA7XG59XG5cbi5tb2JpbGUtYnV0dG9ucy10ZXh0LWluZm97XG4gICAgZm9udC1mYW1pbHk6IEdlb3JnaWEsIFRpbWVzLCBcIlRpbWVzIE5ldyBSb21hblwiLCBzZXJpZjtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAvL2ZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXNpemU6IDUuMHZ3O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBhbGlnbm1lbnQ6IGNlbnRlcjtcbiAgICBjb2xvcjogJHVpLWJsdWUtNjAwO1xuICAgIG1hcmdpbjogMDtcbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICBDb21wb25lbnQ6IGluZGl2aWR1YWxzLWFuZC1mYW1pbGllcyBwYWdlXG4gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi5jb250YWN0LXVzLXRleHQtc21hbGwge1xuICBAZXh0ZW5kIC5sbXItdGV4dC1zbWFsbDtcbiAgY29sb3I6ICR1aS1ncmV5LTUwMDtcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XG59XG5cbi8vSG9tZSBIZWFsdGgsIEhvc3BpY2UsIFBlcnNvbmFsIENhcmUgU2VydmljZXNcbi5jYXJvdXNlbC10aXRsZS10ZXh0IHtcbiAgY29sb3I6ICR1aS1ibHVlLTYwMDtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiA0OHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuY2Fyb3VzZWwtdGl0bGUtdGV4dCB7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzZXJpZjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzM3B4O1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBhbGlnbm1lbnQ6IGNlbnRlcjtcbiAgICBjb2xvcjogJHVpLWJsdWUtNTAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICB9XG59XG5cbi8vaGVhbHRoIHNlcnZpY2VzIGluZm9ybWF0aW9uIHRleHQgKGhvbWUgaGVhbHRoIGFpZGVzIGluZm8sIGxhYiBzZXJ2aWNlcyBpbmZvKVxuLmluZm8tY29udGFpbmVyLXRleHQge1xuICBAZXh0ZW5kIC5sbXItdGV4dC1sYXJnZTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICBDb21wb25lbnQ6IGhlYWx0aC1jYXJlLXByb2Zlc3Npb25hbHMgcGFnZVxuID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4ucGFnZS10aXRsZSB7XG4gIGNvbG9yOiAkdWktYmx1ZS02MDA7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogNDhweDtcbn1cblxuLnBhZ2UtZGVzY3JpcHRpb24ge1xuICBAZXh0ZW5kIC5sbXItZ2VvcmdpYS10ZXh0LWxhcmdlO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzOHB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnBhZ2UtZGVzY3JpcHRpb24ge1xuICAgIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCBUaW1lcywgXCJUaW1lcyBOZXcgUm9tYW5cIiwgc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBhbGlnbm1lbnQ6IGNlbnRlcjtcbiAgICBjb2xvcjogJHVpLWJsdWUtNjAwO1xuICB9XG59XG5cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICBDb21wb25lbnQ6IGhlYWx0aC1zZXJ2aWNlcyBwYWdlXG4gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi5wYW5lbC10aXRsZXtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgZm9udC1zaXplOiA0OHB4O1xuICBsaW5lLWhlaWdodDogNDdweDtcbn1cblxuLmhlYWx0aC1zZXJ2aWNlLWRlc2NyaXB0aW9uIHtcbiAgQGV4dGVuZCAubG1yLWdlb3JnaWEtdGV4dC1tZWRpdW07XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMjUuM3B4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uaGVhbHRoLXNlcnZpY2UtY2hpbGQtZGVzY3JpcHRpb24ge1xuICBAZXh0ZW5kIC5oZWFsdGgtc2VydmljZS1kZXNjcmlwdGlvbjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnBhbmVsLXRpdGxle1xuICAgIGZvbnQtc2l6ZTogNi4wdnc7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweCAhaW1wb3J0YW50O1xuICB9XG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgQ29tcG9uZW50OiBjb250YWN0LXVzIHBhZ2VcbiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLmNvbnRhY3QtdXMtYWRkcmVzcy1kZXNjcmlwdGlvbiB7XG4gIEBleHRlbmQgLmxtci1nZW9yZ2lhLXRleHQtbWVkaXVtO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgIENvbXBvbmVudDogYWJvdXQtdXMgcGFnZVxuID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4uYWJvdXQtaW5mb3JtYXRpb24tdGV4dCB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMzNweDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIGNvbG9yOiAkdWktYmx1ZS0yMDA7XG59XG5cbi5zZXJ2aW5nLXRpdGxlLXRleHQge1xuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNlcmlmO1xuICBmb250LXdlaWdodDogMjAwO1xuICBmb250LXNpemU6IDEwMHB4O1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgY29sb3I6ICR1aS1ibHVlLTIwMDtcbn1cblxuLnNlcnZpbmctbGlzdC10ZXh0e1xuICBAZXh0ZW5kIC5sbXItbG9nby10ZXh0O1xuICBmb250LXdlaWdodDogNzAwIDtcbiAgZm9udC1zaXplOiAzOHB4IDtcbiAgbGluZS1oZWlnaHQ6IDI1LjNweDtcbn1cblxuLm91ci12YWx1ZXMtdGl0bGUtdGV4dCB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogNzVweDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIGNvbG9yOiAkdWktYmx1ZS0zMDA7XG59XG5cbi52YWx1ZS10aXRsZS10ZXh0e1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogNDhweDtcbn1cblxuLnZhbHVlLWRlc2NyaXB0aW9uLXRleHQge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmFib3V0LWluZm9ybWF0aW9uLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgfVxuXG4gIC5zZXJ2aW5nLWxpc3QtdGV4dHtcbiAgICBmb250LXNpemU6IDI0cHggO1xuICAgIGxpbmUtaGVpZ2h0OiAycHg7XG4gIH1cblxuICAub3VyLXZhbHVlcy10aXRsZS10ZXh0e1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICBsaW5lLWhlaWdodDogMnB4O1xuICB9XG5cbiAgLnNlcnZpbmctdGl0bGUtdGV4dCB7XG4gICAgZm9udC1zaXplOiA0NXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xuICAgIGNvbG9yOiAkdWktYmx1ZS0yMDA7XG4gIH1cblxufVxuIiwiJHVpLWdyZXktMTAwOiAjRTVFNUU1ICFkZWZhdWx0O1xuJHVpLWdyZXktMjAwOiAjRTBFMEUwICFkZWZhdWx0O1xuJHVpLWdyZXktMzAwOiAjQkRCREJEICFkZWZhdWx0O1xuJHVpLWdyZXktNDAwOiAjRDlEOUQ5ICFkZWZhdWx0O1xuJHVpLWdyZXktNTAwOiAjNUE1QTVBICFkZWZhdWx0O1xuJHVpLWdyZXktNjAwOiAjRjhGOEY4ICFkZWZhdWx0O1xuXG5cbiR1aS10ZWFsLTEwMDogIzI2QTY5QSAhZGVmYXVsdDtcblxuJHVpLXdoaXRlLTEwMDogI0ZGRkYgIWRlZmF1bHQ7XG5cbi8vJHVpLWJsdWUtMTAwOiAjMjhBNkI3ICFkZWZhdWx0O1xuXG4kdWktYmx1ZS0xMDA6ICMyMTQ2NWMgIWRlZmF1bHQ7XG4kdWktYmx1ZS0yMDA6ICM5NUM1RTEgIWRlZmF1bHQ7XG4kdWktYmx1ZS0zMDA6ICM0RkE4REIgIWRlZmF1bHQ7XG4kdWktYmx1ZS00MDA6ICMzRDUwNUMgIWRlZmF1bHQ7XG4kdWktYmx1ZS01MDA6ICMzRDgxQTggIWRlZmF1bHQ7XG4kdWktYmx1ZS02MDA6ICMyNTY4OEYgIWRlZmF1bHQ7XG5cblxuIiwiQGltcG9ydCBcInNyYy9zdHlsZXNcIjtcblxuOmhvc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkdWktZ3JleS0xMDA7XG59XG4iLCJAaW1wb3J0IFwiLi4vLi4vY29yZS92YXJpYWJsZXNcIjtcblxuJHByaW1hcnktYnV0dG9uLXRleHQtY29sb3I6ICR1aS1ibHVlLTMwMCAhZGVmYXVsdDtcbiRwcmltYXJ5LWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yOiAkdWktYmx1ZS02MDAgIWRlZmF1bHQ7XG4kcHJpbWFyeS1idXR0b24taG92ZXItY29sb3I6ICR1aS1ibHVlLTIwMCAhZGVmYXVsdDtcbiRwcmltYXJ5LWJ1dHRvbi1hY3RpdmUtY29sb3I6ICR1aS1ibHVlLTQwMCAhZGVmYXVsdDtcblxuLmxtci1wcmltYXJ5LWJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktYnV0dG9uLWJhY2tncm91bmQtY29sb3I7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiA2cHggMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1idXR0b24taG92ZXItY29sb3I7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGxpbmVhcjtcbiAgfVxuXG4gICY6YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1idXR0b24tYWN0aXZlLWNvbG9yO1xuICB9XG59XG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmxtci1wcmltYXJ5LWJ1dHRvbiB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZzogNnB4IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgZm9udC1zaXplOiAyLjh2dztcbiAgICAmOmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1idXR0b24taG92ZXItY29sb3I7XG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgbGluZWFyO1xuICAgIH1cblxuICAgICY6YWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWJ1dHRvbi1hY3RpdmUtY29sb3I7XG4gICAgfVxuICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ 4987);
/* harmony import */ var _assets_icons_icons_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/icons/icons.module */ 758);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);






class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.BrowserAnimationsModule, _assets_icons_icons_module__WEBPACK_IMPORTED_MODULE_2__.IconsModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.BrowserAnimationsModule, _assets_icons_icons_module__WEBPACK_IMPORTED_MODULE_2__.IconsModule]
  });
})();

/***/ }),

/***/ 5464:
/*!***************************************************************!*\
  !*** ./src/assets/icons/cooperation-icon/cooperation-icon.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CooperationIcon: () => (/* binding */ CooperationIcon)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class CooperationIcon {
  static #_ = this.ɵfac = function CooperationIcon_Factory(t) {
    return new (t || CooperationIcon)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: CooperationIcon,
    selectors: [["app-cooperation-icon"]],
    decls: 3,
    vars: 0,
    consts: [["xmlns", "http://www.w3.org/2000/svg", "x", "0px", "y", "0px", "viewBox", "0 0 100 100", 0, "xml", "space", "preserve"], ["d", "M85.4,56.3c4.9-4.9,7.7-11.5,7.7-18.5c0-7-2.7-13.6-7.7-18.5c-4.9-4.9-11.5-7.7-18.5-7.7c-6.3,0-12.2,2.2-16.9,6.2   c-4.7-4-10.6-6.1-16.8-6.1c-7,0-13.6,2.7-18.5,7.7C9.7,24.3,7,30.9,7,37.9s2.7,13.6,7.7,18.5c0.4,0.4,1,0.7,1.6,0.7   c0.2,0,0.3,0,0.5-0.1c0.4,1.4,1.1,2.6,2.1,3.6c1.6,1.6,3.6,2.4,5.8,2.4c0.1,0,0.1,0,0.2,0c-0.1,2.2,0.7,4.4,2.4,6   c1.6,1.6,3.7,2.4,5.8,2.4c0.1,0,0.1,0,0.2,0c0,0.1,0,0.1,0,0.2c0,2.2,0.9,4.3,2.4,5.8c1.6,1.6,3.6,2.4,5.8,2.4c0,0,0,0,0,0   c0,2.2,0.8,4.4,2.5,6c1.6,1.6,3.8,2.5,6,2.5c2.2,0,4.3-0.8,6-2.5c0.2-0.2,0.3-0.4,0.4-0.6l28.8-28.9C85.2,56.4,85.3,56.3,85.4,56.3   z M11.5,37.9c0-5.8,2.2-11.2,6.3-15.3c4.1-4.1,9.5-6.3,15.3-6.3c5.8,0,11.2,2.2,15.3,6.3c0,0,0,0,0,0l9.1,9.1c0,0,0,0,0,0   c0,0,0,0,0,0c1.9,1.9,1.9,5,0,7c-1.9,1.9-5,1.9-7,0c0,0,0,0,0,0c0,0,0,0,0,0L49.9,38c0,0,0,0,0,0s0,0,0,0l-8.4-8.4c0,0,0,0,0,0   s0,0,0,0l-6.3-6.3c-0.9-0.9-2.3-0.9-3.2,0s-0.9,2.3,0,3.2l4.7,4.7L18.9,48.9c-0.9,0.9-1.6,2-2,3.2C13.4,48.1,11.5,43.2,11.5,37.9z    M22.1,57.4c-0.7-0.7-1.1-1.6-1.1-2.6c0-1,0.4-1.9,1.1-2.6l17.8-17.8l5.2,5.2L27.3,57.4C25.9,58.8,23.5,58.8,22.1,57.4z M47.3,82.7   c-1.2-1.2-1.4-3.1-0.7-4.5c0.3-0.2,0.6-0.5,0.8-0.7l19.4-19.4c0.9-0.9,0.9-2.3,0-3.2c-0.9-0.9-2.3-0.9-3.2,0L45,73.4   c-0.3,0.1-0.7,0.3-1,0.6c-0.3,0.3-0.5,0.6-0.8,0.9c-1.4,0.7-3.2,0.5-4.4-0.6c-0.7-0.7-1.1-1.6-1.1-2.6c0-1,0.4-1.9,1.1-2.6   l19.4-19.4c0.9-0.9,0.9-2.3,0-3.2c-0.9-0.9-2.3-0.9-3.2,0L35.8,65.8c-1.4,1.4-3.8,1.4-5.2,0c-1.4-1.4-1.4-3.8,0-5.2l17.9-17.9   c1.7,1.3,3.7,1.9,5.7,1.9c2.4,0,4.8-0.9,6.7-2.8c3.7-3.7,3.7-9.7,0-13.4c0,0,0,0,0,0c0,0,0,0,0,0L53.3,21c3.8-3.1,8.6-4.8,13.6-4.8   c5.8,0,11.2,2.2,15.3,6.3c4.1,4.1,6.3,9.5,6.3,15.3c0,5.7-2.2,11.1-6.2,15.2c0,0-0.1,0.1-0.1,0.1L52.6,82.7   c-0.1,0.1-0.2,0.3-0.3,0.4C50.8,84.2,48.6,84,47.3,82.7z"]],
    template: function CooperationIcon_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0)(1, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 8575:
/*!*****************************************************!*\
  !*** ./src/assets/icons/doctor-icon/doctor-icon.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DoctorIcon: () => (/* binding */ DoctorIcon)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class DoctorIcon {
  static #_ = this.ɵfac = function DoctorIcon_Factory(t) {
    return new (t || DoctorIcon)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: DoctorIcon,
    selectors: [["app-doctor-icon"]],
    decls: 3,
    vars: 0,
    consts: [["xmlns", "http://www.w3.org/2000/svg", "x", "0px", "y", "0px", "viewBox", "0 0 100 100", "enable-background", "new 0 0 100 100", 0, "xml", "space", "preserve"], ["d", "M85.45,80.9l-1.36-22.42c-0.45-7.33-6.36-13.08-13.46-13.08h-8.77h-3.6c6.76-3.1,11.48-9.92,11.48-17.84  c0-10.83-8.81-19.63-19.64-19.63s-19.64,8.81-19.64,19.63c0,7.92,4.72,14.74,11.48,17.84h-3.6h-8.98c-7.1,0-13.02,5.74-13.46,13.08  L14.55,80.9c-0.23,3.72,1.09,7.39,3.6,10.06c2.43,2.58,5.68,4,9.17,4h45.37c3.48,0,6.74-1.42,9.17-4  C84.37,88.29,85.68,84.63,85.45,80.9z M32.47,27.56c0-9.72,7.91-17.63,17.64-17.63s17.64,7.91,17.64,17.63  c0,9.72-7.91,17.64-17.64,17.64S32.47,37.29,32.47,27.56z M58.01,47.41l-7.9,11.25l-7.9-11.25H58.01z M80.4,89.6  c-2.05,2.18-4.79,3.37-7.71,3.37H27.32c-2.93,0-5.67-1.2-7.71-3.37c-2.14-2.27-3.26-5.4-3.06-8.57l1.36-22.42  c0.38-6.28,5.42-11.2,11.47-11.2h10.39l10.35,14.73l10.35-14.73h10.17c6.05,0,11.08,4.92,11.47,11.2l1.36,22.42  C83.65,84.2,82.53,87.32,80.4,89.6z"], ["fill", "#FFF", "points", "74.22,65.36 69.82,65.36 69.82,60.96 65.76,60.96 65.76,65.36 61.36,65.36 61.36,69.42 65.76,69.42 65.76,73.82   69.82,73.82 69.82,69.42 74.22,69.42 "]],
    template: function DoctorIcon_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 1)(2, "polygon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 9478:
/*!***********************************************************!*\
  !*** ./src/assets/icons/hamburger-icon/hamburger-icon.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HamburgerIcon: () => (/* binding */ HamburgerIcon)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class HamburgerIcon {
  static #_ = this.ɵfac = function HamburgerIcon_Factory(t) {
    return new (t || HamburgerIcon)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: HamburgerIcon,
    selectors: [["app-hamburger-icon"]],
    decls: 4,
    vars: 0,
    consts: [["viewBox", "0 0 100 80", "width", "40", "height", "40", "xmlns", "http://www.w3.org/2000/svg"], ["width", "100", "height", "15", "fill", "#4FA8DB"], ["y", "30", "width", "100", "height", "15", "fill", "#4FA8DB"], ["y", "60", "width", "100", "height", "15", "fill", "#4FA8DB"]],
    template: function HamburgerIcon_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "rect", 1)(2, "rect", 2)(3, "rect", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["\n\n.lmr-title-text-with-outline[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", serif;\n  font-weight: 900;\n  font-style: normal;\n  font-size: 3.4vw;\n  line-height: 3.3vw;\n  align-self: center;\n  alignment: center;\n  color: #4FA8DB;\n  letter-spacing: 1px;\n  text-shadow: -1.4px -1.4px 0 #FFF, 0 -1.4px 0 #FFF, 1.4px -1.4px 0 #FFF, 1.4px 0 0 #FFF, 1.4px 1.4px 0 #FFF, 0 1.4px 0 #FFF, -1.4px 1.4px 0 #FFF, -1.4px 0 0 #FFF;\n}\n\n.lmr-title-text-medium[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", serif;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 28px;\n  line-height: 33px;\n  align-self: center;\n  alignment: center;\n  color: #3D81A8;\n}\n\n.lmr-title-text-small[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", serif;\n  font-weight: 700;\n  font-style: normal;\n  font-size: 20px;\n  line-height: 25.3px;\n  align-self: center;\n  alignment: center;\n  color: #25688F;\n}\n\n.lmr-logo-text[_ngcontent-%COMP%], .serving-list-text[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", serif;\n  font-weight: 900;\n  font-style: normal;\n  font-size: 4.8vh;\n  line-height: 4.3vw;\n  align-self: center;\n  alignment: center;\n  color: #4FA8DB;\n  z-index: 0;\n}\n\n.lmr-georgia-text-xlarge[_ngcontent-%COMP%] {\n  font-family: Georgia, Times, \"Times New Roman\", serif;\n  font-weight: 700;\n  font-style: normal;\n  font-size: 48px;\n  line-height: 20px;\n  align-self: center;\n  alignment: center;\n  color: white;\n}\n\n.lmr-georgia-text-large[_ngcontent-%COMP%], .page-description[_ngcontent-%COMP%] {\n  font-family: Georgia, Times, \"Times New Roman\", serif;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 20px;\n  line-height: 25px;\n  align-self: center;\n  alignment: center;\n  color: #25688F;\n}\n\n.lmr-georgia-text-medium[_ngcontent-%COMP%], .contact-us-address-description[_ngcontent-%COMP%], .health-service-description[_ngcontent-%COMP%], .health-service-child-description[_ngcontent-%COMP%], .more-information-text[_ngcontent-%COMP%], .lmr-georgia-text-medium-italic[_ngcontent-%COMP%] {\n  font-family: Georgia, Times, \"Times New Roman\", serif;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 16px;\n  line-height: 19px;\n  align-self: center;\n  alignment: center;\n  color: black;\n}\n\n.lmr-georgia-text-medium-italic[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n\n.lmr-text-large[_ngcontent-%COMP%], .info-container-text[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 15px;\n  line-height: 18px;\n  color: #000000;\n}\n\n.lmr-text-small[_ngcontent-%COMP%], .contact-us-text-small[_ngcontent-%COMP%], .polygons-body-text[_ngcontent-%COMP%], .polygons-title-text[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", serif;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 12px;\n  line-height: 16px;\n  align-self: center;\n  alignment: center;\n  color: white;\n}\n\n\n\n\n\n.polygons-title-text[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 1.4vw;\n  line-height: 27px;\n}\n\n.polygons-body-text[_ngcontent-%COMP%] {\n  font-size: 1.1vw;\n  line-height: 1.4vw;\n}\n\n.more-information-text[_ngcontent-%COMP%] {\n  font-size: 4.9vw;\n  line-height: 3.4vw;\n  color: white;\n}\n\n.mobile-landing-subtitle[_ngcontent-%COMP%] {\n  font-family: Georgia, Times, \"Times New Roman\", serif;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 16px;\n  line-height: 20px;\n  align-self: center;\n  alignment: center;\n  color: #25688F;\n}\n\n.mobile-buttons-text-info[_ngcontent-%COMP%] {\n  font-family: Georgia, Times, \"Times New Roman\", serif;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 5vw;\n  line-height: 20px;\n  align-self: center;\n  alignment: center;\n  color: #25688F;\n  margin: 0;\n}\n\n\n\n\n\n.contact-us-text-small[_ngcontent-%COMP%] {\n  color: #5A5A5A;\n  line-height: 14px;\n}\n\n.carousel-title-text[_ngcontent-%COMP%] {\n  color: #25688F;\n  font-family: \"Roboto\", serif;\n  font-weight: 700;\n  font-size: 48px;\n}\n\n@media screen and (max-width: 768px) {\n  .carousel-title-text[_ngcontent-%COMP%] {\n    font-family: \"Roboto\", serif;\n    font-style: normal;\n    font-size: 28px;\n    line-height: 33px;\n    align-self: center;\n    alignment: center;\n    color: #3D81A8;\n    text-align: center;\n    font-weight: 700;\n  }\n}\n.info-container-text[_ngcontent-%COMP%] {\n  font-weight: 400;\n  line-height: 22px;\n  color: white;\n}\n\n\n\n\n\n.page-title[_ngcontent-%COMP%] {\n  color: #25688F;\n  font-family: \"Roboto\", serif;\n  font-weight: 700;\n  font-size: 48px;\n}\n\n.page-description[_ngcontent-%COMP%] {\n  font-size: 30px;\n  line-height: 38px;\n}\n\n@media screen and (max-width: 768px) {\n  .page-description[_ngcontent-%COMP%] {\n    font-family: Georgia, Times, \"Times New Roman\", serif;\n    font-weight: 400;\n    font-style: normal;\n    font-size: 16px;\n    line-height: 20px;\n    align-self: center;\n    alignment: center;\n    color: #25688F;\n  }\n}\n\n\n\n\n.panel-title[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", serif;\n  font-weight: 200;\n  font-size: 48px;\n  line-height: 47px;\n}\n\n.health-service-description[_ngcontent-%COMP%], .health-service-child-description[_ngcontent-%COMP%] {\n  font-size: 18px;\n  text-align: center;\n  line-height: 25.3px;\n  font-weight: 400;\n}\n\n.health-service-child-description[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n@media screen and (max-width: 768px) {\n  .panel-title[_ngcontent-%COMP%] {\n    font-size: 6vw;\n    font-weight: 700;\n    margin-right: 5px !important;\n  }\n}\n\n\n\n\n.contact-us-address-description[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n\n\n\n\n.about-information-text[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", serif;\n  font-weight: 400;\n  font-size: 33px;\n  line-height: 40px;\n  color: #95C5E1;\n}\n\n.serving-title-text[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", serif;\n  font-weight: 200;\n  font-size: 100px;\n  line-height: 25px;\n  color: #95C5E1;\n}\n\n.serving-list-text[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 38px;\n  line-height: 25.3px;\n}\n\n.our-values-title-text[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", serif;\n  font-weight: 700;\n  font-size: 75px;\n  line-height: 25px;\n  color: #4FA8DB;\n}\n\n.value-title-text[_ngcontent-%COMP%] {\n  color: white;\n  font-family: \"Roboto\", serif;\n  font-weight: 700;\n  font-size: 48px;\n}\n\n.value-description-text[_ngcontent-%COMP%] {\n  color: white;\n  font-family: \"Roboto\", serif;\n  font-weight: 300;\n  font-size: 25px;\n}\n\n@media screen and (max-width: 768px) {\n  .about-information-text[_ngcontent-%COMP%] {\n    font-size: 23px;\n    line-height: 25px;\n  }\n  .serving-list-text[_ngcontent-%COMP%] {\n    font-size: 24px;\n    line-height: 2px;\n  }\n  .our-values-title-text[_ngcontent-%COMP%] {\n    font-size: 50px;\n    line-height: 2px;\n  }\n  .serving-title-text[_ngcontent-%COMP%] {\n    font-size: 45px;\n    line-height: 10px;\n    color: #95C5E1;\n  }\n}\n.lmr-primary-button[_ngcontent-%COMP%] {\n  color: white;\n  background-color: #25688F;\n  display: flex;\n  border: none;\n  border-radius: 2px;\n  cursor: pointer;\n  justify-content: center;\n  padding: 6px 16px;\n  font-weight: bold;\n  line-height: 20px;\n  font-size: 14px;\n}\n.lmr-primary-button[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.lmr-primary-button[_ngcontent-%COMP%]:hover {\n  background-color: #95C5E1;\n  transition: background-color 0.2s linear;\n}\n.lmr-primary-button[_ngcontent-%COMP%]:active {\n  background-color: #3D505C;\n}\n\n@media screen and (max-width: 768px) {\n  .lmr-primary-button[_ngcontent-%COMP%] {\n    color: white;\n    background-color: #25688F;\n    display: flex;\n    border: none;\n    border-radius: 2px;\n    cursor: pointer;\n    justify-content: center;\n    padding: 6px 16px;\n    font-weight: bold;\n    line-height: 20px;\n    font-size: 2.8vw;\n  }\n  .lmr-primary-button[_ngcontent-%COMP%]:focus {\n    outline: none;\n  }\n  .lmr-primary-button[_ngcontent-%COMP%]:hover {\n    background-color: #95C5E1;\n    transition: background-color 0.2s linear;\n  }\n  .lmr-primary-button[_ngcontent-%COMP%]:active {\n    background-color: #3D505C;\n  }\n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n\n\n\nsvg[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\nsvg[_ngcontent-%COMP%]:hover   rect[_ngcontent-%COMP%] {\n  fill: #3D81A8;\n}\nsvg[_ngcontent-%COMP%]:active   rect[_ngcontent-%COMP%] {\n  fill: #25688F;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvcmUvdGV4dC5zY3NzIiwid2VicGFjazovLy4vc3JjL3Njc3MvY29yZS92YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvaWNvbnMvaGFtYnVyZ2VyLWljb24vaGFtYnVyZ2VyLWljb24uc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbXBvbmVudHMvZWxlbWVudHMvYnV0dG9uLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUNhQTtFQUNFLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0NMWTtFRE1aLG1CQUFBO0VBbkJBLGlLQUFBO0FFU0Y7O0FGY0E7RUFDRSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0NoQlk7QUNLZDs7QUZjQTtFQUNFLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQzFCWTtBQ2VkOztBRmNBO0VBQ0UsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQ3hDWTtFRHlDWixVQUFBO0FFWEY7O0FGY0E7RUFDRSxxREFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBRVhGOztBRmNBO0VBQ0UscURBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNB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SUFDQSxnQkFBQTtFRS9CRjtFRmtDQTtJQUNFLGVBQUE7SUFDQSxnQkFBQTtFRWhDRjtFRm1DQTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtJQUNBLGNDdFVVO0VDcVNaO0FBQ0Y7QUM5U0E7RUFDRSxZQUFBO0VBQ0EseUJGVVk7RUVUWixhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBRGdURjtBQy9TRTtFQUNFLGFBQUE7QURpVEo7QUM5U0U7RUFDRSx5QkZUVTtFRVVWLHdDQUFBO0FEZ1RKO0FDN1NFO0VBQ0UseUJGWlU7QUMyVGQ7O0FDMVNBO0VBQ0U7SUFDRSxZQUFBO0lBQ0EseUJGbEJVO0lFbUJWLGFBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSxlQUFBO0lBQ0EsdUJBQUE7SUFDQSxpQkFBQTtJQUNBLGlCQUFBO0lBQ0EsaUJBQUE7SUFDQSxnQkFBQTtFRDZTRjtFQzVTRTtJQUNFLGFBQUE7RUQ4U0o7RUMzU0U7SUFDRSx5QkZyQ1E7SUVzQ1Isd0NBQUE7RUQ2U0o7RUMxU0U7SUFDRSx5QkZ4Q1E7RUNvVlo7QUFDRjtBSG5XQTtFQUFhLFlBQUE7QUdzV2I7O0FIcldBO0VBQU8sU0FBQTtFQUFXLGlEQUFBO0FHMFdsQjs7QUh4V0EsbUNBQUE7QUdKQTtFQUNFLGVBQUE7QUFnWEY7QUE3V0k7RUFDRSxhRFdRO0FDb1dkO0FBMVdJO0VBQ0UsYURNUTtBQ3NXZCIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbkBpbXBvcnQgXCJzY3NzL2xtci1yb290XCI7XG5cbmh0bWwsIGJvZHkgeyBoZWlnaHQ6IDEwMCU7IH1cbmJvZHkgeyBtYXJnaW46IDA7IGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjsgfVxuXG4vKiBJbXBvcnRpbmcgQm9vdHN0cmFwIFNDU1MgZmlsZS4gKi9cbiIsIkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuQG1peGluIHN0cm9rZSgkY29sb3I6ICMwMDAsICRzaXplOiAxcHgpIHtcbiAgdGV4dC1zaGFkb3c6IC0jeyRzaXplfSAtI3skc2l6ZX0gMCAkY29sb3IsXG4gIDAgICAgICAgIC0jeyRzaXplfSAwICRjb2xvcixcbiAgI3skc2l6ZX0gLSN7JHNpemV9IDAgJGNvbG9yLFxuICAjeyRzaXplfSAgMCAwICRjb2xvcixcbiAgI3skc2l6ZX0gICN7JHNpemV9IDAgJGNvbG9yLFxuICAwICAgICAgICAgI3skc2l6ZX0gMCAkY29sb3IsXG4gIC0jeyRzaXplfSAgI3skc2l6ZX0gMCAkY29sb3IsXG4gIC0jeyRzaXplfSAwIDAgJGNvbG9yO1xufVxuXG4ubG1yLXRpdGxlLXRleHQtd2l0aC1vdXRsaW5lIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDMuNHZ3O1xuICBsaW5lLWhlaWdodDogMy4zdnc7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgYWxpZ25tZW50OiBjZW50ZXI7XG4gIGNvbG9yOiAkdWktYmx1ZS0zMDA7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIEBpbmNsdWRlIHN0cm9rZSgkY29sb3I6ICNGRkYsICRzaXplOiAxLjRweCk7XG59XG5cbi5sbXItdGl0bGUtdGV4dC1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgbGluZS1oZWlnaHQ6IDMzcHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgYWxpZ25tZW50OiBjZW50ZXI7XG4gIGNvbG9yOiAkdWktYmx1ZS01MDA7XG59XG5cbi5sbXItdGl0bGUtdGV4dC1zbWFsbCB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjUuM3B4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGFsaWdubWVudDogY2VudGVyO1xuICBjb2xvcjogJHVpLWJsdWUtNjAwO1xufVxuXG4ubG1yLWxvZ28tdGV4dCB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiA0Ljh2aDtcbiAgbGluZS1oZWlnaHQ6IDQuM3Z3O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGFsaWdubWVudDogY2VudGVyO1xuICBjb2xvcjogJHVpLWJsdWUtMzAwO1xuICB6LWluZGV4OiAwO1xufVxuXG4ubG1yLWdlb3JnaWEtdGV4dC14bGFyZ2Uge1xuICBmb250LWZhbWlseTogR2VvcmdpYSwgVGltZXMsIFwiVGltZXMgTmV3IFJvbWFuXCIsIHNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogNDhweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgYWxpZ25tZW50OiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmxtci1nZW9yZ2lhLXRleHQtbGFyZ2Uge1xuICBmb250LWZhbWlseTogR2VvcmdpYSwgVGltZXMsIFwiVGltZXMgTmV3IFJvbWFuXCIsIHNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgYWxpZ25tZW50OiBjZW50ZXI7XG4gIGNvbG9yOiAkdWktYmx1ZS02MDA7XG59XG5cbi5sbXItZ2VvcmdpYS10ZXh0LW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCBUaW1lcywgXCJUaW1lcyBOZXcgUm9tYW5cIiwgc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMTlweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBhbGlnbm1lbnQ6IGNlbnRlcjtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4ubG1yLWdlb3JnaWEtdGV4dC1tZWRpdW0taXRhbGljIHtcbiAgQGV4dGVuZCAubG1yLWdlb3JnaWEtdGV4dC1tZWRpdW07XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLmxtci10ZXh0LWxhcmdlIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuXG4ubG1yLXRleHQtc21hbGwge1xuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgYWxpZ25tZW50OiBjZW50ZXI7XG4gIGNvbG9yOiAkdWktd2hpdGUtMTAwO1xufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgIENvbXBvbmVudDogbGFuZGluZyBwYWdlXG4gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi8vSGVhbHRoIENhcmUgUHJvZmVzc2lvbmFscyAvIEluZGl2aWR1YWxzIEFuZCBGYW1pbGllc1xuLnBvbHlnb25zLXRpdGxlLXRleHQge1xuICBAZXh0ZW5kIC5sbXItdGV4dC1zbWFsbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxLjR2dztcbiAgbGluZS1oZWlnaHQ6IDI3cHg7XG59XG5cbi5wb2x5Z29ucy1ib2R5LXRleHQge1xuICBAZXh0ZW5kIC5sbXItdGV4dC1zbWFsbDtcbiAgZm9udC1zaXplOiAxLjF2dztcbiAgbGluZS1oZWlnaHQ6IDEuNHZ3O1xufVxuXG4ubW9yZS1pbmZvcm1hdGlvbi10ZXh0e1xuICBAZXh0ZW5kIC5sbXItZ2VvcmdpYS10ZXh0LW1lZGl1bTtcbiAgZm9udC1zaXplOiA0Ljl2dztcbiAgbGluZS1oZWlnaHQ6IDMuNHZ3O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5tb2JpbGUtbGFuZGluZy1zdWJ0aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCBUaW1lcywgXCJUaW1lcyBOZXcgUm9tYW5cIiwgc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBhbGlnbm1lbnQ6IGNlbnRlcjtcbiAgY29sb3I6ICR1aS1ibHVlLTYwMDtcbn1cblxuLm1vYmlsZS1idXR0b25zLXRleHQtaW5mb3tcbiAgICBmb250LWZhbWlseTogR2VvcmdpYSwgVGltZXMsIFwiVGltZXMgTmV3IFJvbWFuXCIsIHNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIC8vZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtc2l6ZTogNS4wdnc7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGFsaWdubWVudDogY2VudGVyO1xuICAgIGNvbG9yOiAkdWktYmx1ZS02MDA7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgIENvbXBvbmVudDogaW5kaXZpZHVhbHMtYW5kLWZhbWlsaWVzIHBhZ2VcbiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLmNvbnRhY3QtdXMtdGV4dC1zbWFsbCB7XG4gIEBleHRlbmQgLmxtci10ZXh0LXNtYWxsO1xuICBjb2xvcjogJHVpLWdyZXktNTAwO1xuICBsaW5lLWhlaWdodDogMTRweDtcbn1cblxuLy9Ib21lIEhlYWx0aCwgSG9zcGljZSwgUGVyc29uYWwgQ2FyZSBTZXJ2aWNlc1xuLmNhcm91c2VsLXRpdGxlLXRleHQge1xuICBjb2xvcjogJHVpLWJsdWUtNjAwO1xuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDQ4cHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jYXJvdXNlbC10aXRsZS10ZXh0IHtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNlcmlmO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDMzcHg7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGFsaWdubWVudDogY2VudGVyO1xuICAgIGNvbG9yOiAkdWktYmx1ZS01MDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cbn1cblxuLy9oZWFsdGggc2VydmljZXMgaW5mb3JtYXRpb24gdGV4dCAoaG9tZSBoZWFsdGggYWlkZXMgaW5mbywgbGFiIHNlcnZpY2VzIGluZm8pXG4uaW5mby1jb250YWluZXItdGV4dCB7XG4gIEBleHRlbmQgLmxtci10ZXh0LWxhcmdlO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgIENvbXBvbmVudDogaGVhbHRoLWNhcmUtcHJvZmVzc2lvbmFscyBwYWdlXG4gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi5wYWdlLXRpdGxlIHtcbiAgY29sb3I6ICR1aS1ibHVlLTYwMDtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiA0OHB4O1xufVxuXG4ucGFnZS1kZXNjcmlwdGlvbiB7XG4gIEBleHRlbmQgLmxtci1nZW9yZ2lhLXRleHQtbGFyZ2U7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbGluZS1oZWlnaHQ6IDM4cHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucGFnZS1kZXNjcmlwdGlvbiB7XG4gICAgZm9udC1mYW1pbHk6IEdlb3JnaWEsIFRpbWVzLCBcIlRpbWVzIE5ldyBSb21hblwiLCBzZXJpZjtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGFsaWdubWVudDogY2VudGVyO1xuICAgIGNvbG9yOiAkdWktYmx1ZS02MDA7XG4gIH1cbn1cblxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgIENvbXBvbmVudDogaGVhbHRoLXNlcnZpY2VzIHBhZ2VcbiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLnBhbmVsLXRpdGxle1xuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNlcmlmO1xuICBmb250LXdlaWdodDogMjAwO1xuICBmb250LXNpemU6IDQ4cHg7XG4gIGxpbmUtaGVpZ2h0OiA0N3B4O1xufVxuXG4uaGVhbHRoLXNlcnZpY2UtZGVzY3JpcHRpb24ge1xuICBAZXh0ZW5kIC5sbXItZ2VvcmdpYS10ZXh0LW1lZGl1bTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAyNS4zcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5oZWFsdGgtc2VydmljZS1jaGlsZC1kZXNjcmlwdGlvbiB7XG4gIEBleHRlbmQgLmhlYWx0aC1zZXJ2aWNlLWRlc2NyaXB0aW9uO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucGFuZWwtdGl0bGV7XG4gICAgZm9udC1zaXplOiA2LjB2dztcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIG1hcmdpbi1yaWdodDogNXB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICBDb21wb25lbnQ6IGNvbnRhY3QtdXMgcGFnZVxuID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4uY29udGFjdC11cy1hZGRyZXNzLWRlc2NyaXB0aW9uIHtcbiAgQGV4dGVuZCAubG1yLWdlb3JnaWEtdGV4dC1tZWRpdW07XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgQ29tcG9uZW50OiBhYm91dC11cyBwYWdlXG4gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi5hYm91dC1pbmZvcm1hdGlvbi10ZXh0IHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAzM3B4O1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgY29sb3I6ICR1aS1ibHVlLTIwMDtcbn1cblxuLnNlcnZpbmctdGl0bGUtdGV4dCB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIGZvbnQtc2l6ZTogMTAwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICBjb2xvcjogJHVpLWJsdWUtMjAwO1xufVxuXG4uc2VydmluZy1saXN0LXRleHR7XG4gIEBleHRlbmQgLmxtci1sb2dvLXRleHQ7XG4gIGZvbnQtd2VpZ2h0OiA3MDAgO1xuICBmb250LXNpemU6IDM4cHggO1xuICBsaW5lLWhlaWdodDogMjUuM3B4O1xufVxuXG4ub3VyLXZhbHVlcy10aXRsZS10ZXh0IHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiA3NXB4O1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgY29sb3I6ICR1aS1ibHVlLTMwMDtcbn1cblxuLnZhbHVlLXRpdGxlLXRleHR7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiA0OHB4O1xufVxuXG4udmFsdWUtZGVzY3JpcHRpb24tdGV4dCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuYWJvdXQtaW5mb3JtYXRpb24tdGV4dCB7XG4gICAgZm9udC1zaXplOiAyM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICB9XG5cbiAgLnNlcnZpbmctbGlzdC10ZXh0e1xuICAgIGZvbnQtc2l6ZTogMjRweCA7XG4gICAgbGluZS1oZWlnaHQ6IDJweDtcbiAgfVxuXG4gIC5vdXItdmFsdWVzLXRpdGxlLXRleHR7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAycHg7XG4gIH1cblxuICAuc2VydmluZy10aXRsZS10ZXh0IHtcbiAgICBmb250LXNpemU6IDQ1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XG4gICAgY29sb3I6ICR1aS1ibHVlLTIwMDtcbiAgfVxuXG59XG4iLCIkdWktZ3JleS0xMDA6ICNFNUU1RTUgIWRlZmF1bHQ7XG4kdWktZ3JleS0yMDA6ICNFMEUwRTAgIWRlZmF1bHQ7XG4kdWktZ3JleS0zMDA6ICNCREJEQkQgIWRlZmF1bHQ7XG4kdWktZ3JleS00MDA6ICNEOUQ5RDkgIWRlZmF1bHQ7XG4kdWktZ3JleS01MDA6ICM1QTVBNUEgIWRlZmF1bHQ7XG4kdWktZ3JleS02MDA6ICNGOEY4RjggIWRlZmF1bHQ7XG5cblxuJHVpLXRlYWwtMTAwOiAjMjZBNjlBICFkZWZhdWx0O1xuXG4kdWktd2hpdGUtMTAwOiAjRkZGRiAhZGVmYXVsdDtcblxuLy8kdWktYmx1ZS0xMDA6ICMyOEE2QjcgIWRlZmF1bHQ7XG5cbiR1aS1ibHVlLTEwMDogIzIxNDY1YyAhZGVmYXVsdDtcbiR1aS1ibHVlLTIwMDogIzk1QzVFMSAhZGVmYXVsdDtcbiR1aS1ibHVlLTMwMDogIzRGQThEQiAhZGVmYXVsdDtcbiR1aS1ibHVlLTQwMDogIzNENTA1QyAhZGVmYXVsdDtcbiR1aS1ibHVlLTUwMDogIzNEODFBOCAhZGVmYXVsdDtcbiR1aS1ibHVlLTYwMDogIzI1Njg4RiAhZGVmYXVsdDtcblxuXG4iLCJAaW1wb3J0IFwic3JjL3N0eWxlc1wiO1xuXG5zdmcge1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgJjpob3ZlciB7XG4gICAgcmVjdCB7XG4gICAgICBmaWxsOiAkdWktYmx1ZS01MDA7XG4gICAgfVxuICB9XG5cbiAgJjphY3RpdmUge1xuICAgIHJlY3Qge1xuICAgICAgZmlsbDogJHVpLWJsdWUtNjAwO1xuICAgIH1cbiAgfVxufVxuIiwiQGltcG9ydCBcIi4uLy4uL2NvcmUvdmFyaWFibGVzXCI7XG5cbiRwcmltYXJ5LWJ1dHRvbi10ZXh0LWNvbG9yOiAkdWktYmx1ZS0zMDAgIWRlZmF1bHQ7XG4kcHJpbWFyeS1idXR0b24tYmFja2dyb3VuZC1jb2xvcjogJHVpLWJsdWUtNjAwICFkZWZhdWx0O1xuJHByaW1hcnktYnV0dG9uLWhvdmVyLWNvbG9yOiAkdWktYmx1ZS0yMDAgIWRlZmF1bHQ7XG4kcHJpbWFyeS1idXR0b24tYWN0aXZlLWNvbG9yOiAkdWktYmx1ZS00MDAgIWRlZmF1bHQ7XG5cbi5sbXItcHJpbWFyeS1idXR0b24ge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yO1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogNnB4IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktYnV0dG9uLWhvdmVyLWNvbG9yO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBsaW5lYXI7XG4gIH1cblxuICAmOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktYnV0dG9uLWFjdGl2ZS1jb2xvcjtcbiAgfVxufVxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5sbXItcHJpbWFyeS1idXR0b24ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1idXR0b24tYmFja2dyb3VuZC1jb2xvcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IDZweCAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMi44dnc7XG4gICAgJjpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgIH1cblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktYnV0dG9uLWhvdmVyLWNvbG9yO1xuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGxpbmVhcjtcbiAgICB9XG5cbiAgICAmOmFjdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1idXR0b24tYWN0aXZlLWNvbG9yO1xuICAgIH1cbiAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 7553:
/*!***************************************************************!*\
  !*** ./src/assets/icons/hand-health-icon/hand-health-icon.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HandHealthIcon: () => (/* binding */ HandHealthIcon)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class HandHealthIcon {
  static #_ = this.ɵfac = function HandHealthIcon_Factory(t) {
    return new (t || HandHealthIcon)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: HandHealthIcon,
    selectors: [["app-hand-health-icon"]],
    decls: 2,
    vars: 0,
    consts: [["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 11.71875 11.6484375", "x", "0px", "y", "0px"], ["d", "m 7.1660455,1.1342572 c -0.2250497,0 -0.4411498,0.08778 -0.6028889,0.244312 -0.010274,0.0048 -0.1775729,0.198801 -0.2038988,0.297063 -0.040949,0.100458 -0.062953,0.20769 -0.064509,0.316242 -0.0069,0.145239 -0.00336,0.18467 -0.00174,0.396889 l 0,2.41321 c 0,0.284055 0.138833,0.550214 0.371631,0.713087 0.068656,0.0252 0.105839,0.07823 0.3226345,0.141848 0.059008,0.01233 0.1188534,0.01852 0.1790874,0.01846 l 0,0.698647 c 0,0.09646 0.078703,0.174438 0.1751536,0.174438 0.078405,0 0.00588,0.03704 1.2782443,-0.873085 l 2.0399694,0 c 0.4821,0 0.872662,-0.391337 0.873353,-0.873398 l 0,-2.794631 c 0,-0.482078 -0.391253,-0.8725 -0.873353,-0.873085 l -3.4936801,0 z m 0,0.349145 3.4933675,0 c 0.289405,0 0.524253,0.234507 0.524253,0.523895 l 0,2.794676 c 0,0.289371 -0.234848,0.523896 -0.524253,0.523896 -2.2813496,0 -2.1328628,-0.01382 -2.1975542,0.03259 l -0.9463559,0.67616 0,-0.533999 c 0,-0.09648 -0.077782,-0.174751 -0.1742593,-0.174751 l -0.1751981,0 c -0.2892273,0 -0.5238956,-0.234525 -0.5238956,-0.523896 l 0,-2.794631 c 0,-0.289389 0.2346683,-0.52394 0.5238956,-0.52394 z m 1.5581857,0.448925 c -0.2071251,0 -0.3750733,0.167961 -0.3750733,0.375118 l 0,0.562655 -0.5626099,0 c -0.2071231,0 -0.3750731,0.167916 -0.3750731,0.375073 l 0,0.375118 c 0,0.207175 0.16795,0.375118 0.3750731,0.375118 l 0.5626099,0 0,0.562655 c 0,0.207174 0.1679482,0.375073 0.3750733,0.375073 l 0.3750733,0 c 0.2072971,0 0.3752521,-0.167899 0.3752521,-0.375073 l 0,-0.562655 0.5626104,0 c 0.207125,0 0.375073,-0.167943 0.375073,-0.375118 l 0,-0.375118 c 0,-0.207157 -0.167948,-0.375073 -0.375073,-0.375073 l -0.5626104,0 0,-0.562655 c 0,-0.207157 -0.167955,-0.375118 -0.3752521,-0.375118 l -0.3750733,0 z m 0,0.375118 0.3750733,0 0,0.562655 c 0,0.207157 0.1679551,0.375073 0.3752521,0.375073 l 0.5626104,0 0,0.375118 -0.5626104,0 c -0.207297,0 -0.3752521,0.167961 -0.3752521,0.375118 l 0,0.562655 -0.3750733,0 0,-0.562655 c 0,-0.207157 -0.1679479,-0.375118 -0.3750733,-0.375118 l -0.5626099,0 0,-0.375118 0.5626099,0 c 0.2071254,0 0.3750733,-0.167916 0.3750733,-0.375073 l 0,-0.562655 z m -8.13828542,3.003448 c -0.3236138,0 -0.585945801713105,0.262332 -0.585945801713105,0.585946 l 0,4.10171 C -2.1713105e-8,10.322163 0.26233198,10.584495 0.58594578,10.584495 l 0.97662112,0 c 0.1657264,-5.28e-4 0.3233855,-0.07154 0.4335918,-0.195316 l 4.8985732,0 c 0.2865752,9.6e-5 0.5676387,-0.07878 0.8123311,-0.227949 l 3.660474,-2.2284008 c 0.317903,-0.1934 0.439822,-0.594728 0.283205,-0.932274 -0.156618,-0.337546 -0.541817,-0.503581 -0.894767,-0.385713 -4.0719952,1.357658 -3.6159086,1.235194 -3.9122065,1.235194 0.2367257,-0.65666 -0.3553127,-1.367252 -1.0951781,-1.367252 l -1.0219071,0 C 4.3663643,6.4823552 4.0168634,6.3597302 3.7352649,6.1349362 3.3843687,5.8549852 2.948959,5.7022052 2.5000712,5.7015232 l -0.3875012,0 C 2.030096,5.4682452 1.8099931,5.3119182 1.5625669,5.3108932 l -0.97662112,0 z m 0,0.39063 0.97662112,0 c 0.1078713,0 0.1953153,0.08744 0.1953153,0.195316 l 0,4.10171 c 0,0.1078708 -0.087444,0.1953148 -0.1953153,0.1953148 l -0.97662112,0 c -0.1078713,0 -0.1953152,-0.08744 -0.1953152,-0.1953148 l 0,-4.10171 c 0,-0.107872 0.087444,-0.195316 0.1953152,-0.195316 z m 1.72806412,0.389916 c 0.3844928,-0.0013 0.7594418,0.01428 1.177301,0.348563 0.3509485,0.279992 0.7864177,0.432775 1.2353724,0.433413 l 1.0217281,0 c 0.5181795,0 0.9680083,0.561179 0.6582337,0.976621 l -1.1867784,0 c -0.3856761,-3.71e-4 -0.7627595,0.113838 -1.0834209,0.328133 l -0.1431447,0.09531 c -0.089749,0.05987 -0.1140062,0.181162 -0.054138,0.270911 0.059868,0.08975 0.1811621,0.113961 0.2709111,0.05409 0.2874976,-0.228148 0.6427881,-0.354041 1.0097921,-0.357817 1.8570859,0 1.8413041,0.01755 2.0450211,-0.05003 l 3.6155006,-1.205277 c 0.114818,-0.03838 0.241406,-0.01286 0.332381,0.06701 0.09098,0.07988 0.13264,0.202072 0.109437,0.320891 -0.01752,0.09409 -0.07436,0.176253 -0.156243,0.225804 l -3.6618152,2.228581 c -0.1836124,0.11178 -0.3944549,0.170907 -0.6094159,0.170907 l -4.7462192,0 0,-3.906395 c 0.05547,0 0.1105696,-5.27e-4 0.1654972,-7.15e-4 z"]],
    template: function HandHealthIcon_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 5222:
/*!***********************************************************!*\
  !*** ./src/assets/icons/home-care-icon/home-care-icon.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeCareIcon: () => (/* binding */ HomeCareIcon)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class HomeCareIcon {
  static #_ = this.ɵfac = function HomeCareIcon_Factory(t) {
    return new (t || HomeCareIcon)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: HomeCareIcon,
    selectors: [["app-home-care-icon"]],
    decls: 4,
    vars: 0,
    consts: [["xmlns", "http://www.w3.org/2000/svg", "x", "0px", "y", "0px", "viewBox", "0 0 100 100"], ["d", "M72.081,87.122c1.451,0,2.698-1.031,2.97-2.457l6.32-33.149l5.921,5.921c0.591,0.591,1.364,0.886,2.138,0.886   c1.197,0,2.393-0.706,2.912-2.118c0.386-1.049,0.037-2.232-0.754-3.023L80.484,42.077c-0.002-0.002-28.347-28.348-28.347-28.348   c-1.134-1.135-3.141-1.135-4.275,0c0,0-28.345,28.345-28.347,28.348L8.411,53.18c-0.798,0.798-1.143,1.995-0.746,3.051   c0.865,2.3,3.542,2.703,5.04,1.205l5.921-5.921l6.32,33.149c0.272,1.426,1.518,2.457,2.97,2.457H72.081z M69.58,81.075H54.985   l1.534-21.733c0.082-1.166-0.842-2.158-2.011-2.158h-9.492c-1.173,0-2.098,0.998-2.01,2.168l1.645,21.723H30.418l-6.622-34.729   l26.203-26.203l26.203,26.203L69.58,81.075z"], ["fill", "#FFF", "cx", "50", "cy", "43.824", "r", "6.5"]],
    template: function HomeCareIcon_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0)(1, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 1)(3, "circle", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 5582:
/*!*****************************************************************!*\
  !*** ./src/assets/icons/home-nursing-icon/home-nursing-icon.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeNursingIcon: () => (/* binding */ HomeNursingIcon)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class HomeNursingIcon {
  static #_ = this.ɵfac = function HomeNursingIcon_Factory(t) {
    return new (t || HomeNursingIcon)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: HomeNursingIcon,
    selectors: [["app-home-nursing-icon"]],
    decls: 3,
    vars: 0,
    consts: [["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 25 25", "x", "0px", "y", "0px"], ["d", "M21,6H16.9A5,5,0,0,0,7.1,6H3A1,1,0,0,0,2,7v5.07L8.29,16H22V7A1,1,0,0,0,21,6ZM12,4a3,3,0,0,1,2.82,2H9.18A3,3,0,0,1,12,4Zm6,9H17v1a1,1,0,0,1-2,0V13H14a1,1,0,0,1,0-2h1V10a1,1,0,0,1,2,0v1h1a1,1,0,0,1,0,2ZM8,18H22v3a1,1,0,0,1-1,1H3a1,1,0,0,1-1-1V14.43l5.47,3.42A1,1,0,0,0,8,18Z"]],
    template: function HomeNursingIcon_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0)(1, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 758:
/*!******************************************!*\
  !*** ./src/assets/icons/icons.module.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IconsModule: () => (/* binding */ IconsModule)
/* harmony export */ });
/* harmony import */ var _left_arrow_icon_left_arrow_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./left-arrow-icon/left-arrow-icon */ 3122);
/* harmony import */ var _right_arrow_icon_right_arrow_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./right-arrow-icon/right-arrow-icon */ 6432);
/* harmony import */ var _doctor_icon_doctor_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./doctor-icon/doctor-icon */ 8575);
/* harmony import */ var _hand_health_icon_hand_health_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hand-health-icon/hand-health-icon */ 7553);
/* harmony import */ var _lab_icon_lab_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lab-icon/lab-icon */ 7053);
/* harmony import */ var _cooperation_icon_cooperation_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cooperation-icon/cooperation-icon */ 5464);
/* harmony import */ var _physical_icon_physical_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./physical-icon/physical-icon */ 8478);
/* harmony import */ var _nurse_icon_nurse_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nurse-icon/nurse-icon */ 9895);
/* harmony import */ var _speech_icon_speech_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./speech-icon/speech-icon */ 5189);
/* harmony import */ var _home_care_icon_home_care_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home-care-icon/home-care-icon */ 5222);
/* harmony import */ var _home_nursing_icon_home_nursing_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home-nursing-icon/home-nursing-icon */ 5582);
/* harmony import */ var _hamburger_icon_hamburger_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./hamburger-icon/hamburger-icon */ 9478);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 1699);













class IconsModule {
  static #_ = this.ɵfac = function IconsModule_Factory(t) {
    return new (t || IconsModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
    type: IconsModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({});
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](IconsModule, {
    declarations: [_left_arrow_icon_left_arrow_icon__WEBPACK_IMPORTED_MODULE_0__.LeftArrowIcon, _right_arrow_icon_right_arrow_icon__WEBPACK_IMPORTED_MODULE_1__.RightArrowIcon, _doctor_icon_doctor_icon__WEBPACK_IMPORTED_MODULE_2__.DoctorIcon, _hand_health_icon_hand_health_icon__WEBPACK_IMPORTED_MODULE_3__.HandHealthIcon, _lab_icon_lab_icon__WEBPACK_IMPORTED_MODULE_4__.LabIcon, _cooperation_icon_cooperation_icon__WEBPACK_IMPORTED_MODULE_5__.CooperationIcon, _physical_icon_physical_icon__WEBPACK_IMPORTED_MODULE_6__.PhysicalIcon, _nurse_icon_nurse_icon__WEBPACK_IMPORTED_MODULE_7__.NurseIcon, _speech_icon_speech_icon__WEBPACK_IMPORTED_MODULE_8__.SpeechIcon, _home_care_icon_home_care_icon__WEBPACK_IMPORTED_MODULE_9__.HomeCareIcon, _home_nursing_icon_home_nursing_icon__WEBPACK_IMPORTED_MODULE_10__.HomeNursingIcon, _hamburger_icon_hamburger_icon__WEBPACK_IMPORTED_MODULE_11__.HamburgerIcon],
    exports: [_left_arrow_icon_left_arrow_icon__WEBPACK_IMPORTED_MODULE_0__.LeftArrowIcon, _right_arrow_icon_right_arrow_icon__WEBPACK_IMPORTED_MODULE_1__.RightArrowIcon, _doctor_icon_doctor_icon__WEBPACK_IMPORTED_MODULE_2__.DoctorIcon, _hand_health_icon_hand_health_icon__WEBPACK_IMPORTED_MODULE_3__.HandHealthIcon, _lab_icon_lab_icon__WEBPACK_IMPORTED_MODULE_4__.LabIcon, _cooperation_icon_cooperation_icon__WEBPACK_IMPORTED_MODULE_5__.CooperationIcon, _physical_icon_physical_icon__WEBPACK_IMPORTED_MODULE_6__.PhysicalIcon, _nurse_icon_nurse_icon__WEBPACK_IMPORTED_MODULE_7__.NurseIcon, _speech_icon_speech_icon__WEBPACK_IMPORTED_MODULE_8__.SpeechIcon, _home_care_icon_home_care_icon__WEBPACK_IMPORTED_MODULE_9__.HomeCareIcon, _home_nursing_icon_home_nursing_icon__WEBPACK_IMPORTED_MODULE_10__.HomeNursingIcon, _hamburger_icon_hamburger_icon__WEBPACK_IMPORTED_MODULE_11__.HamburgerIcon]
  });
})();

/***/ }),

/***/ 7053:
/*!***********************************************!*\
  !*** ./src/assets/icons/lab-icon/lab-icon.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LabIcon: () => (/* binding */ LabIcon)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class LabIcon {
  static #_ = this.ɵfac = function LabIcon_Factory(t) {
    return new (t || LabIcon)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: LabIcon,
    selectors: [["app-lab-icon"]],
    decls: 6,
    vars: 0,
    consts: [["xmlns", "http://www.w3.org/2000/svg", "x", "0px", "y", "0px", "viewBox", "0 0 100 100", "enable-background", "new 0 0 100 100", 0, "xml", "space", "preserve"], ["d", "M79.7885742,48.8134766H65.2114258c-0.3574219,0-0.6875,0.1904297-0.8662109,0.5l-7.2885742,12.6245117  c-0.1782227,0.3095703-0.1782227,0.6904297,0,1l7.2885742,12.6240234c0.1787109,0.3095703,0.5087891,0.5,0.8662109,0.5h14.5771484  c0.3574219,0,0.6875-0.1904297,0.8662109-0.5l7.2885742-12.6240234c0.1782227-0.3095703,0.1782227-0.6904297,0-1  l-7.2885742-12.6245117C80.4760742,49.0039063,80.1459961,48.8134766,79.7885742,48.8134766z M79.2114258,74.0620117H65.7885742  l-6.7109375-11.6240234l6.7109375-11.6245117h13.4228516l6.7109375,11.6245117L79.2114258,74.0620117z"], ["d", "M19.3452148,75.5620117c0.1787109,0.3095703,0.5087891,0.5,0.8662109,0.5h14.5771484  c0.3574219,0,0.6875-0.1904297,0.8662109-0.5l7.2885742-12.6240234c0.1782227-0.3095703,0.1782227-0.6904297,0-1  l-7.2885742-12.6245117c-0.1787109-0.3095703-0.5087891-0.5-0.8662109-0.5H20.2114258c-0.3574219,0-0.6875,0.1904297-0.8662109,0.5  l-7.2885742,12.6245117c-0.1782227,0.3095703-0.1782227,0.6904297,0,1L19.3452148,75.5620117z M20.7885742,50.8134766h13.4228516  l6.7109375,11.6245117l-6.7109375,11.6240234H20.7885742l-6.7109375-11.6240234L20.7885742,50.8134766z"], ["d", "M20.5952148,40.0717773c0.1787109,0.3095703,0.5087891,0.5,0.8662109,0.5h7.0771484  c0.3574219,0,0.6875-0.1904297,0.8662109-0.5l3.5385742-6.1293945c0.1782227-0.3095703,0.1782227-0.6904297,0-1  l-3.5385742-6.1289063c-0.1787109-0.3095703-0.5087891-0.5-0.8662109-0.5h-7.0771484c-0.3574219,0-0.6875,0.1904297-0.8662109,0.5  l-3.5385742,6.1289063c-0.1782227,0.3095703-0.1782227,0.6904297,0,1L20.5952148,40.0717773z M22.0385742,28.3134766h5.9228516  l2.9609375,5.1289063l-2.9609375,5.1293945h-5.9228516l-2.9609375-5.1293945L22.0385742,28.3134766z"], ["d", "M71.4404297,40.0717773c0.1787109,0.3095703,0.5087891,0.5,0.8662109,0.5h7.0771484  c0.3574219,0,0.6875-0.1904297,0.8662109-0.5l3.5390625-6.1293945c0.1782227-0.3095703,0.1782227-0.6904297,0-1L80.25,26.8134766  c-0.1787109-0.3095703-0.5087891-0.5-0.8662109-0.5h-7.0771484c-0.3574219,0-0.6875,0.1904297-0.8662109,0.5l-3.5385742,6.1289063  c-0.1782227,0.3095703-0.1782227,0.6904297,0,1L71.4404297,40.0717773z M72.8837891,28.3134766h5.9228516l2.9614258,5.1289063  l-2.9614258,5.1293945h-5.9228516l-2.9609375-5.1293945L72.8837891,28.3134766z"], ["d", "M42.2675781,50.6865234c0.1787109,0.3095703,0.5087891,0.5,0.8662109,0.5h14.5776367  c0.3574219,0,0.6875-0.1904297,0.8662109-0.5l7.2885742-12.6245117c0.1782227-0.3095703,0.1782227-0.6904297,0-1  l-7.2885742-12.6240234c-0.1787109-0.3095703-0.5087891-0.5-0.8662109-0.5H43.1337891c-0.3574219,0-0.6875,0.1904297-0.8662109,0.5  l-7.2885742,12.6240234c-0.1782227,0.3095703-0.1782227,0.6904297,0,1L42.2675781,50.6865234z M43.7109375,25.9379883h13.4233398  l6.7109375,11.6240234l-6.7109375,11.6245117H43.7109375L37,37.5620117L43.7109375,25.9379883z"]],
    template: function LabIcon_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 1)(2, "path", 2)(3, "path", 3)(4, "path", 4)(5, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 3122:
/*!*************************************************************!*\
  !*** ./src/assets/icons/left-arrow-icon/left-arrow-icon.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LeftArrowIcon: () => (/* binding */ LeftArrowIcon)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class LeftArrowIcon {
  static #_ = this.ɵfac = function LeftArrowIcon_Factory(t) {
    return new (t || LeftArrowIcon)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: LeftArrowIcon,
    selectors: [["app-left-arrow-icon"]],
    decls: 2,
    vars: 0,
    consts: [["width", "17", "height", "30", "viewBox", "0 0 17 30", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M0.585786 13.5858C-0.195262 14.3668 -0.195262 15.6332 0.585786 16.4142L13.3137 29.1421C14.0948 29.9232 15.3611 29.9232 16.1421 29.1421C16.9232 28.3611 16.9232 27.0948 16.1421 26.3137L4.82843 15L16.1421 3.68629C16.9232 2.90524 16.9232 1.63891 16.1421 0.857864C15.3611 0.0768156 14.0948 0.0768156 13.3137 0.857864L0.585786 13.5858ZM3 13H2L2 17H3L3 13Z", "fill", "#25688F"]],
    template: function LeftArrowIcon_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 9895:
/*!***************************************************!*\
  !*** ./src/assets/icons/nurse-icon/nurse-icon.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NurseIcon: () => (/* binding */ NurseIcon)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class NurseIcon {
  static #_ = this.ɵfac = function NurseIcon_Factory(t) {
    return new (t || NurseIcon)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NurseIcon,
    selectors: [["app-nurse-icon"]],
    decls: 3,
    vars: 0,
    consts: [["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 100 100", "x", "0px", "y", "0px"], ["d", "M91.42,40.51a64.08,64.08,0,0,0-8.53-5.06A19.38,19.38,0,0,0,63.76,18H36.24A19.38,19.38,0,0,0,17.11,35.45a64.08,64.08,0,0,0-8.53,5.06l-1.13.8L18.46,83H81.54l11-41.69ZM36.24,22H63.76A15.38,15.38,0,0,1,78.51,33.48a76.9,76.9,0,0,0-57,0A15.38,15.38,0,0,1,36.24,22ZM80.57,71H66v4H79.52l-1.06,4H21.54l-1.06-4H62V71H19.43L12,43c10.56-7.1,24-11,38-11s27.41,3.89,38,11Z"], ["d", "M44,37v9H35V59h9v9H57V59h9V46H57V37ZM62,50v5H53v9H48V55H39V50h9V41h5v9Z"]],
    template: function NurseIcon_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 1)(2, "path", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 8478:
/*!*********************************************************!*\
  !*** ./src/assets/icons/physical-icon/physical-icon.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PhysicalIcon: () => (/* binding */ PhysicalIcon)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class PhysicalIcon {
  static #_ = this.ɵfac = function PhysicalIcon_Factory(t) {
    return new (t || PhysicalIcon)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: PhysicalIcon,
    selectors: [["app-physical-icon"]],
    decls: 7,
    vars: 0,
    consts: [["xmlns", "http://www.w3.org/2000/svg", "x", "0px", "y", "0px", "viewBox", "0 0 50 50", 0, "xml", "space", "preserve"], ["d", "M43.4,44.6c0-1.9,0,6.9,0-18.7c0-1.6-1.3-2.9-2.9-2.9L4.2,23c-1.6,0-2.9,1.3-2.9,3c0,1.9,0-6.9,0,18.7h3.4v-4.5l35.3,0v4.5   H43.4z M4.7,37.8v-7l35.3,0l0,7L4.7,37.8z"], ["d", "M34.3,20.2H3c-1.1,0-2-0.9-2-2c0-1.1,0.9-2,2-2h31.3c0.3,0,0.7-0.1,0.9-0.3l10.6-7.2c0.9-0.6,2.2-0.4,2.8,0.5    c0.6,0.9,0.4,2.2-0.5,2.8l-10.6,7.2C36.6,19.9,35.5,20.2,34.3,20.2z"], ["d", "M36.6,11.1c-0.5-0.7-0.3-1.6,0.4-2.1l5.2-3.4c0.7-0.5,1.6-0.3,2.1,0.4c0.5,0.7,0.3,1.6-0.4,2.1l-5.2,3.4    C38,12,37.1,11.8,36.6,11.1z"]],
    template: function PhysicalIcon_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0)(1, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 6432:
/*!***************************************************************!*\
  !*** ./src/assets/icons/right-arrow-icon/right-arrow-icon.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RightArrowIcon: () => (/* binding */ RightArrowIcon)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class RightArrowIcon {
  static #_ = this.ɵfac = function RightArrowIcon_Factory(t) {
    return new (t || RightArrowIcon)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: RightArrowIcon,
    selectors: [["app-right-arrow-icon"]],
    decls: 2,
    vars: 0,
    consts: [["width", "17", "height", "30", "viewBox", "0 0 17 30", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M16.4142 16.4142C17.1953 15.6332 17.1953 14.3668 16.4142 13.5858L3.68629 0.857864C2.90524 0.0768156 1.63891 0.0768156 0.857864 0.857864C0.0768156 1.63891 0.0768156 2.90524 0.857864 3.68629L12.1716 15L0.857864 26.3137C0.0768156 27.0948 0.0768156 28.3611 0.857864 29.1421C1.63891 29.9232 2.90524 29.9232 3.68629 29.1421L16.4142 16.4142ZM14 17H15V13H14V17Z", "fill", "#25688F"]],
    template: function RightArrowIcon_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 5189:
/*!*****************************************************!*\
  !*** ./src/assets/icons/speech-icon/speech-icon.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SpeechIcon: () => (/* binding */ SpeechIcon)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class SpeechIcon {
  static #_ = this.ɵfac = function SpeechIcon_Factory(t) {
    return new (t || SpeechIcon)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SpeechIcon,
    selectors: [["app-speech-icon"]],
    decls: 10,
    vars: 0,
    consts: [["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 100 100", "x", "0px", "y", "0px"], ["d", "M8.50012,42.24864a3.999,3.999,0,0,0-4,4v8a4,4,0,0,0,8,0v-8A3.99894,3.99894,0,0,0,8.50012,42.24864Z"], ["d", "M20.50012,18.24864a3.999,3.999,0,0,0-4,4v56a4,4,0,0,0,8,0v-56A3.99894,3.99894,0,0,0,20.50012,18.24864Z"], ["d", "M32.50012,30.24864a3.999,3.999,0,0,0-4,4v32a4,4,0,1,0,8,0v-32A3.99894,3.99894,0,0,0,32.50012,30.24864Z"], ["d", "M56.49988,18.24864a3.9977,3.9977,0,0,0-4,4v56a4,4,0,0,0,8,0v-56A3.9977,3.9977,0,0,0,56.49988,18.24864Z"], ["d", "M68.49988,30.24864a3.9977,3.9977,0,0,0-4,4v32a4,4,0,0,0,8,0v-32A3.9977,3.9977,0,0,0,68.49988,30.24864Z"], ["d", "M80.49988,38.24864a3.9977,3.9977,0,0,0-4,4v16a4,4,0,1,0,8,0v-16A3.9977,3.9977,0,0,0,80.49988,38.24864Z"], ["d", "M92.49988,42.24864a3.9977,3.9977,0,0,0-4,4v8a4,4,0,1,0,8,0v-8A3.9977,3.9977,0,0,0,92.49988,42.24864Z"], ["d", "M44.50012,42.24864a3.999,3.999,0,0,0-4,4v8a3.99988,3.99988,0,1,0,7.99976,0v-8A3.99874,3.99874,0,0,0,44.50012,42.24864Z"]],
    template: function SpeechIcon_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0)(1, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 1)(3, "path", 2)(4, "path", 3)(5, "path", 4)(6, "path", 5)(7, "path", 6)(8, "path", 7)(9, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map