(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_data/amenities.json":
/*!**************************************!*\
  !*** ./src/app/_data/amenities.json ***!
  \**************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"name\":\"Swimming pool\"},{\"name\":\"Club House\"},{\"name\":\"Jogging Track\"},{\"name\":\"Multiple Elevators\"},{\"name\":\"Multi-Utility Area\"},{\"name\":\"Children's Play Area\"},{\"name\":\"Grand entry lobby\"},{\"name\":\"Beautiful Gardens\"},{\"name\":\"Open Green Lawns\"},{\"name\":\"Spacious Apartments\"},{\"name\":\"Ventilated Bedrooms\"},{\"name\":\"Efficient Security System\"},{\"name\":\"Avant-garde clubhouse\"},{\"name\":\"Well-Equipped Gymnasium\"},{\"name\":\"Decorative compound wall\"},{\"name\":\"Double Height Grand Entrance Lobby\"}]");

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");

const routes = [];
class AppRoutingModule {
}


/***/ }),

/***/ "./src/app/app.component.ngfactory.js":
/*!********************************************!*\
  !*** ./src/app/app.component.ngfactory.js ***!
  \********************************************/
/*! exports provided: RenderType_AppComponent, View_AppComponent_0, View_AppComponent_Host_0, AppComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AppComponent", function() { return RenderType_AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_0", function() { return View_AppComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_Host_0", function() { return View_AppComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponentNgFactory", function() { return AppComponentNgFactory; });
/* harmony import */ var _app_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.scss.shim.ngstyle */ "./src/app/app.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _components_navbar_navbar_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/navbar/navbar.component.ngfactory */ "./src/app/components/navbar/navbar.component.ngfactory.js");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_about_us_about_us_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/about-us/about-us.component.ngfactory */ "./src/app/components/about-us/about-us.component.ngfactory.js");
/* harmony import */ var _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/about-us/about-us.component */ "./src/app/components/about-us/about-us.component.ts");
/* harmony import */ var _components_amenities_amenities_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/amenities/amenities.component.ngfactory */ "./src/app/components/amenities/amenities.component.ngfactory.js");
/* harmony import */ var _components_amenities_amenities_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/amenities/amenities.component */ "./src/app/components/amenities/amenities.component.ts");
/* harmony import */ var _components_floor_plan_floor_plan_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/floor-plan/floor-plan.component.ngfactory */ "./src/app/components/floor-plan/floor-plan.component.ngfactory.js");
/* harmony import */ var _components_floor_plan_floor_plan_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/floor-plan/floor-plan.component */ "./src/app/components/floor-plan/floor-plan.component.ts");
/* harmony import */ var _components_gallery_gallery_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/gallery/gallery.component.ngfactory */ "./src/app/components/gallery/gallery.component.ngfactory.js");
/* harmony import */ var _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/gallery/gallery.component */ "./src/app/components/gallery/gallery.component.ts");
/* harmony import */ var _components_contact_us_contact_us_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/contact-us/contact-us.component.ngfactory */ "./src/app/components/contact-us/contact-us.component.ngfactory.js");
/* harmony import */ var _components_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/contact-us/contact-us.component */ "./src/app/components/contact-us/contact-us.component.ts");
/* harmony import */ var _components_footer_footer_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/footer/footer.component.ngfactory */ "./src/app/components/footer/footer.component.ngfactory.js");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 

















var styles_AppComponent = [_app_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_AppComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_AppComponent, data: {} });

function View_AppComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-navbar", [], null, null, null, _components_navbar_navbar_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NavbarComponent_0"], _components_navbar_navbar_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NavbarComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "app-about-us", [], null, null, null, _components_about_us_about_us_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_AboutUsComponent_0"], _components_about_us_about_us_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_AboutUsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 114688, null, 0, _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_5__["AboutUsComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "app-amenities", [], null, null, null, _components_amenities_amenities_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_AmenitiesComponent_0"], _components_amenities_amenities_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_AmenitiesComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 114688, null, 0, _components_amenities_amenities_component__WEBPACK_IMPORTED_MODULE_7__["AmenitiesComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "app-floor-plan", [], null, null, null, _components_floor_plan_floor_plan_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_FloorPlanComponent_0"], _components_floor_plan_floor_plan_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_FloorPlanComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 114688, null, 0, _components_floor_plan_floor_plan_component__WEBPACK_IMPORTED_MODULE_9__["FloorPlanComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "app-gallery", [], null, null, null, _components_gallery_gallery_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_GalleryComponent_0"], _components_gallery_gallery_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_GalleryComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 114688, null, 0, _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_11__["GalleryComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "app-contact-us", [], null, null, null, _components_contact_us_contact_us_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_ContactUsComponent_0"], _components_contact_us_contact_us_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_ContactUsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 49152, null, 0, _components_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_13__["ContactUsComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 1, "app-footer", [], null, null, null, _components_footer_footer_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["View_FooterComponent_0"], _components_footer_footer_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["RenderType_FooterComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 114688, null, 0, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); _ck(_v, 3, 0); _ck(_v, 5, 0); _ck(_v, 7, 0); _ck(_v, 9, 0); _ck(_v, 13, 0); }, null); }
function View_AppComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"], [], null, null)], null, null); }
var AppComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-root", _app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"], View_AppComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/app.component.scss.shim.ngstyle.js":
/*!****************************************************!*\
  !*** ./src/app/app.component.scss.shim.ngstyle.js ***!
  \****************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"];



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
class AppComponent {
    constructor() {
        this.title = 'bwm-new';
    }
}


/***/ }),

/***/ "./src/app/app.module.ngfactory.js":
/*!*****************************************!*\
  !*** ./src/app/app.module.ngfactory.js ***!
  \*****************************************/
/*! exports provided: AppModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModuleNgFactory", function() { return AppModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component.ngfactory */ "./src/app/app.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/components.module */ "./src/app/components/components.module.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 











var AppModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_router_router_lNgFactory"], _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["AppComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_p"], [[3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_ba"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_r"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_f"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_o"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵDomSanitizerImpl"], [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Sanitizer"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["HAMMER_GESTURE_CONFIG"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["HammerGestureConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["EVENT_MANAGER_PLUGINS"], function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3) { return [new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵDomEventsPlugin"](p0_0, p0_1, p0_2), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵKeyEventsPlugin"](p1_0), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵHammerGesturesPlugin"](p2_0, p2_1, p2_2, p2_3)]; }, [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["HAMMER_GESTURE_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["HAMMER_LOADER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["EventManager"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["EVENT_MANAGER_PLUGINS"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵDomSharedStylesHost"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵDomSharedStylesHost"], [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵDomRendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵDomRendererFactory2"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵDomSharedStylesHost"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵDomRendererFactory2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵSharedStylesHost"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵDomSharedStylesHost"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_router_router_g"], [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_7__["NoPreloading"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["NoPreloading"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_router__WEBPACK_IMPORTED_MODULE_7__["PreloadingStrategy"], null, [_angular_router__WEBPACK_IMPORTED_MODULE_7__["NoPreloading"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterPreloader"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterPreloader"], [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["PreloadingStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_7__["PreloadAllModules"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["PreloadAllModules"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_router_router_o"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_router_router_c"], [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["ViewportScroller"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_7__["ROUTER_INITIALIZER"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_router_router_j"], [_angular_router__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0) { return [p0_0]; }, [_angular_router__WEBPACK_IMPORTED_MODULE_7__["ROUTER_INITIALIZER"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_o"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_o"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_platform_browser_platform_browser_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"], function () { return [_angular_router__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_router_router_b"]()]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_router_router_h"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_router_router_h"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0, p1_0) { return [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_platform_browser_platform_browser_j"](p0_0), _angular_router__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_router_router_i"](p1_0)]; }, [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"]], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"], [[3, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_router_router_a"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_router_router_e"], [[3, _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_7__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["DefaultUrlSerializer"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_7__["ChildrenOutletContexts"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ChildrenOutletContexts"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_router__WEBPACK_IMPORTED_MODULE_7__["ROUTER_CONFIGURATION"], {}, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_router_router_d"], [_angular_common__WEBPACK_IMPORTED_MODULE_5__["PlatformLocation"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_5__["APP_BASE_HREF"]], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], [_angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["PlatformLocation"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoader"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], [2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoaderConfig"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_7__["ROUTES"], function () { return [[]]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_router_router_f"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ChildrenOutletContexts"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ROUTES"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ROUTER_CONFIGURATION"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_7__["UrlHandlingStrategy"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouteReuseStrategy"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _components_components_module__WEBPACK_IMPORTED_MODULE_10__["ComponentsModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_10__["ComponentsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵAPP_ROOT"], true, [])]); });



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
class AppModule {
}


/***/ }),

/***/ "./src/app/components/about-us/about-us.component.ngfactory.js":
/*!*********************************************************************!*\
  !*** ./src/app/components/about-us/about-us.component.ngfactory.js ***!
  \*********************************************************************/
/*! exports provided: RenderType_AboutUsComponent, View_AboutUsComponent_0, View_AboutUsComponent_Host_0, AboutUsComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AboutUsComponent", function() { return RenderType_AboutUsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AboutUsComponent_0", function() { return View_AboutUsComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AboutUsComponent_Host_0", function() { return View_AboutUsComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponentNgFactory", function() { return AboutUsComponentNgFactory; });
/* harmony import */ var _about_us_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about-us.component.scss.shim.ngstyle */ "./src/app/components/about-us/about-us.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _about_us_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-us.component */ "./src/app/components/about-us/about-us.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_AboutUsComponent = [_about_us_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_AboutUsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_AboutUsComponent, data: {} });

function View_AboutUsComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 25, "section", [["id", "about"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 24, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 23, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 20, "div", [["class", "col-md-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "h1", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 17, "p", [["class", "text-justify"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "b", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["'Home'"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Even though this word is uttered, it feels like the warmth of the mother, the consciousness of her own existence and the security of your family's dream of achieving their dreams! And it helps us to finish it all the "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "b", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u2018Maitri Developers'"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" and that has been proven by many to this day. There is always something better that can be done from happy families in the completed project Inspiration is bringing friendship with developers."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 1, "b", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u2018Maitri Gold'"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" project Where your dreams start to come true, here is where everyone in your family gets their fantasy home, where we build the true meaning of the word intimacy, faith and home! That is why we say the beginning of the Golden Age '...!"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Gold"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" The beginning of the golden age.! Another reason to take a home on the "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 1, "b", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u2018Maitri Gold'"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" project is to help you stay healthy. One such specialty is the swimming pool, the gym And affordable housing in the area, plus a clubhouse where you can have small events and a special place for children to play, Which have different toys Where children can play safely so everyone in your family will enjoy all the happiness! "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 1, "div", [["class", "col-md-6"], ["style", "padding-top:65px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 0, "img", [["class", "img-responsive"], ["src", "../../../assets/images/about-us.jpg"], ["style", "height:auto;width:100%;"]], null, null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.aboutUs; _ck(_v, 5, 0, currVal_0); }); }
function View_AboutUsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-about-us", [], null, null, null, View_AboutUsComponent_0, RenderType_AboutUsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _about_us_component__WEBPACK_IMPORTED_MODULE_2__["AboutUsComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var AboutUsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-about-us", _about_us_component__WEBPACK_IMPORTED_MODULE_2__["AboutUsComponent"], View_AboutUsComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/components/about-us/about-us.component.scss.shim.ngstyle.js":
/*!*****************************************************************************!*\
  !*** ./src/app/components/about-us/about-us.component.scss.shim.ngstyle.js ***!
  \*****************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["#about[_ngcontent-%COMP%] {\n  background: #eee !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC11cy9DOlxcVXNlcnNcXGdhbGliXFxPbmVEcml2ZVxcRGVza3RvcFxcbWFpdHJpYnVpbGRlcnMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGFib3V0LXVzXFxhYm91dC11cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC11cy9hYm91dC11cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBQTtBQUVBO0VBQ0ksMkJBQUE7QUNBSjtBREdBLGNBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Fib3V0LXVzL2Fib3V0LXVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQWJvdXQgc3RhcnQgKi9cclxuXHJcbiNhYm91dCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWVlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIEFib3V0IGVuZCAqLyIsIi8qIEFib3V0IHN0YXJ0ICovXG4jYWJvdXQge1xuICBiYWNrZ3JvdW5kOiAjZWVlICFpbXBvcnRhbnQ7XG59XG5cbi8qIEFib3V0IGVuZCAqLyJdfQ== */"];



/***/ }),

/***/ "./src/app/components/about-us/about-us.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/about-us/about-us.component.ts ***!
  \***********************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

class AboutUsComponent {
    constructor() {
        this.aboutUs = "About Us";
    }
    ngOnInit() {
    }
}


/***/ }),

/***/ "./src/app/components/amenities/amenities.component.ngfactory.js":
/*!***********************************************************************!*\
  !*** ./src/app/components/amenities/amenities.component.ngfactory.js ***!
  \***********************************************************************/
/*! exports provided: RenderType_AmenitiesComponent, View_AmenitiesComponent_0, View_AmenitiesComponent_Host_0, AmenitiesComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AmenitiesComponent", function() { return RenderType_AmenitiesComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AmenitiesComponent_0", function() { return View_AmenitiesComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AmenitiesComponent_Host_0", function() { return View_AmenitiesComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmenitiesComponentNgFactory", function() { return AmenitiesComponentNgFactory; });
/* harmony import */ var _amenities_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./amenities.component.scss.shim.ngstyle */ "./src/app/components/amenities/amenities.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _amenities_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./amenities.component */ "./src/app/components/amenities/amenities.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_AmenitiesComponent = [_amenities_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_AmenitiesComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_AmenitiesComponent, data: {} });

function View_AmenitiesComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "col-sm-12 col-md-3  col-lg-3 amenities-heading"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, [" ", " "]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.name; _ck(_v, 2, 0, currVal_0); }); }
function View_AmenitiesComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "section", [["class", "amenities"], ["id", "amenities"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 6, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "h1", [["class", "title text-center text-light"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 0, "hr", [["class", "hr-tag"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 2, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AmenitiesComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.amenitiesList; _ck(_v, 7, 0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.title; _ck(_v, 3, 0, currVal_0); }); }
function View_AmenitiesComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-amenities", [], null, null, null, View_AmenitiesComponent_0, RenderType_AmenitiesComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _amenities_component__WEBPACK_IMPORTED_MODULE_3__["AmenitiesComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var AmenitiesComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-amenities", _amenities_component__WEBPACK_IMPORTED_MODULE_3__["AmenitiesComponent"], View_AmenitiesComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/components/amenities/amenities.component.scss.shim.ngstyle.js":
/*!*******************************************************************************!*\
  !*** ./src/app/components/amenities/amenities.component.scss.shim.ngstyle.js ***!
  \*******************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".amenities[_ngcontent-%COMP%] {\n  background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.8)), to(rgba(0, 0, 0, 0.8))), url('aminities.jpg') no-repeat center center/cover;\n  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('aminities.jpg') no-repeat center center/cover;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n}\n.amenities-heading[_ngcontent-%COMP%] {\n  color: #fff;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n.amenities-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hbWVuaXRpZXMvQzpcXFVzZXJzXFxnYWxpYlxcT25lRHJpdmVcXERlc2t0b3BcXG1haXRyaWJ1aWxkZXJzL3NyY1xcYXBwXFxjb21wb25lbnRzXFxhbWVuaXRpZXNcXGFtZW5pdGllcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9hbWVuaXRpZXMvYW1lbml0aWVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRCQUFBO0FBQ0E7RUFDSSxpS0FBQTtFQUFBLHVIQUFBO0VBRUEsc0JBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0FDQUo7QURHQTtFQUVJLFdBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0FDREo7QURJQTtFQUNJLGtCQUFBO0FDREo7QURLQSwwQkFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYW1lbml0aWVzL2FtZW5pdGllcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIENhbXB1cyAgYW1lbml0aWVzIHN0YXJ0ICovXHJcbi5hbWVuaXRpZXMge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwwLDAsLjgpLHJnYmEoMCwwLDAsLjgpKSwgdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2FtaW5pdGllcy5qcGcnKSBuby1yZXBlYXRcclxuXHRjZW50ZXIgY2VudGVyIC9jb3ZlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxufVxyXG5cclxuLmFtZW5pdGllcy1oZWFkaW5nXHJcbntcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdHJhbnNpdGlvbjogLjVzO1xyXG59XHJcblxyXG4uYW1lbml0aWVzLWhlYWRpbmcgcCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4vKiBDYW1wdXMgIGFtZW5pdGllcyBlbmQgKi8iLCIvKiBDYW1wdXMgIGFtZW5pdGllcyBzdGFydCAqL1xuLmFtZW5pdGllcyB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuOCksIHJnYmEoMCwgMCwgMCwgMC44KSksIHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYW1pbml0aWVzLmpwZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlci9jb3ZlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbn1cblxuLmFtZW5pdGllcy1oZWFkaW5nIHtcbiAgY29sb3I6ICNmZmY7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbi5hbWVuaXRpZXMtaGVhZGluZyBwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4vKiBDYW1wdXMgIGFtZW5pdGllcyBlbmQgKi8iXX0= */"];



/***/ }),

/***/ "./src/app/components/amenities/amenities.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/amenities/amenities.component.ts ***!
  \*************************************************************/
/*! exports provided: AmenitiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmenitiesComponent", function() { return AmenitiesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_amenities_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_data/amenities.json */ "./src/app/_data/amenities.json");
var _data_amenities_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../_data/amenities.json */ "./src/app/_data/amenities.json", 1);


class AmenitiesComponent {
    constructor() {
        this.title = "Lifestyle Campus Amenities";
        this.amenitiesList = _data_amenities_json__WEBPACK_IMPORTED_MODULE_1__;
    }
    ngOnInit() {
    }
}


/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
class ComponentsModule {
}


/***/ }),

/***/ "./src/app/components/contact-us/contact-us.component.ngfactory.js":
/*!*************************************************************************!*\
  !*** ./src/app/components/contact-us/contact-us.component.ngfactory.js ***!
  \*************************************************************************/
/*! exports provided: RenderType_ContactUsComponent, View_ContactUsComponent_0, View_ContactUsComponent_Host_0, ContactUsComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ContactUsComponent", function() { return RenderType_ContactUsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ContactUsComponent_0", function() { return View_ContactUsComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ContactUsComponent_Host_0", function() { return View_ContactUsComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponentNgFactory", function() { return ContactUsComponentNgFactory; });
/* harmony import */ var _contact_us_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact-us.component.scss.shim.ngstyle */ "./src/app/components/contact-us/contact-us.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _contact_us_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact-us.component */ "./src/app/components/contact-us/contact-us.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_ContactUsComponent = [_contact_us_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ContactUsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ContactUsComponent, data: {} });

function View_ContactUsComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 50, "section", [["class", "contact"], ["id", "contact"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 49, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 48, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 8, "div", [["class", "col-md-6 text-center py-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 0, "i", [["class", "fa fa-phone fa-3x text-light"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "span", [["class", "text-light"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["GIVE US A CALL "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 2, "span", [["class", "text-light"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "a", [["class", "text-light"], ["href", "tel:+91-4545454545"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["+91-9552522476"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 8, "div", [["class", "col-md-6 text-center text-light py-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 0, "i", [["class", "fa fa-envelope fa-3x text-light"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 1, "span", [["class", "text-light"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["SEND US A MESSAGE "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 2, "span", [["class", "text-light"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 1, "a", [["class", "text-light"], ["href", "mailto:dialyourproperties@gmail.com"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" maitridnb@gmail.com "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 29, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 28, "form", [["class", "contact-form"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("submit" === en)) {
        var pd_2 = (_co.sendEmail($event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_z"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 1, "div", [["class", "form-group col-md-12 "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 0, "input", [["class", "form-control"], ["name", "name"], ["placeholder", "Enter First Name"], ["required", ""], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 1, "div", [["class", "form-group col-md-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 0, "input", [["class", "form-control"], ["name", "phone"], ["placeholder", "Enter Mobile Number"], ["required", ""], ["type", "phone"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 1, "div", [["class", "form-group col-md-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 0, "input", [["class", "form-control"], ["name", "email"], ["placeholder", "Enter Email"], ["required", ""], ["type", "email"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 1, "div", [["class", "form-group col-md-12 "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 0, "input", [["class", "form-control"], ["name", "message"], ["placeholder", "Enter Message"], ["required", ""], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 13, "div", [["class", "form-group col-md-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 12, "select", [["class", "form-control element-block"], ["name", "area"], ["required", ""], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 3, "option", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Select Area"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 3, "option", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](42, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](43, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["1 BHK"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, null, 3, "option", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](46, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](47, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["2 BHK"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, null, 1, "button", [["class", "btn btn-primary"], ["type", "submit"], ["value", "submit"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Submit"]))], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).ngClassUntouched; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).ngClassTouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).ngClassPristine; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).ngClassDirty; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).ngClassValid; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).ngClassInvalid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).ngClassPending; _ck(_v, 22, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); }); }
function View_ContactUsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-contact-us", [], null, null, null, View_ContactUsComponent_0, RenderType_ContactUsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _contact_us_component__WEBPACK_IMPORTED_MODULE_3__["ContactUsComponent"], [], null, null)], null, null); }
var ContactUsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-contact-us", _contact_us_component__WEBPACK_IMPORTED_MODULE_3__["ContactUsComponent"], View_ContactUsComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/components/contact-us/contact-us.component.scss.shim.ngstyle.js":
/*!*********************************************************************************!*\
  !*** ./src/app/components/contact-us/contact-us.component.scss.shim.ngstyle.js ***!
  \*********************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".contact[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.contact[_ngcontent-%COMP%] {\n  background-image: url('contact.jpg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0LXVzL0M6XFxVc2Vyc1xcZ2FsaWJcXE9uZURyaXZlXFxEZXNrdG9wXFxtYWl0cmlidWlsZGVycy9zcmNcXGFwcFxcY29tcG9uZW50c1xcY29udGFjdC11c1xcY29udGFjdC11cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0LXVzL2NvbnRhY3QtdXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxxQkFBQTtBQ0NEOztBRENBO0VBQ0Msb0NBQUE7RUFDQyxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhY3QgYSB7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi5jb250YWN0IHtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvY29udGFjdC5qcGcnKTtcclxuXHRcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcblx0XHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cdFx0YmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxufSIsIi5jb250YWN0IGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5jb250YWN0IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9jb250YWN0LmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbn0iXX0= */"];



/***/ }),

/***/ "./src/app/components/contact-us/contact-us.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/contact-us/contact-us.component.ts ***!
  \***************************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! emailjs-com */ "./node_modules/emailjs-com/source/index.js");
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(emailjs_com__WEBPACK_IMPORTED_MODULE_0__);

class ContactUsComponent {
    sendEmail(e) {
        e.preventDefault();
        emailjs_com__WEBPACK_IMPORTED_MODULE_0___default.a.sendForm('gmail', 'template_i58viuq', e.target, 'user_MYnG46tsWxgwClSZSoUi3')
            .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }
}


/***/ }),

/***/ "./src/app/components/floor-plan/floor-plan.component.ngfactory.js":
/*!*************************************************************************!*\
  !*** ./src/app/components/floor-plan/floor-plan.component.ngfactory.js ***!
  \*************************************************************************/
/*! exports provided: RenderType_FloorPlanComponent, View_FloorPlanComponent_0, View_FloorPlanComponent_Host_0, FloorPlanComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_FloorPlanComponent", function() { return RenderType_FloorPlanComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_FloorPlanComponent_0", function() { return View_FloorPlanComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_FloorPlanComponent_Host_0", function() { return View_FloorPlanComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloorPlanComponentNgFactory", function() { return FloorPlanComponentNgFactory; });
/* harmony import */ var _floor_plan_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./floor-plan.component.scss.shim.ngstyle */ "./src/app/components/floor-plan/floor-plan.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _floor_plan_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./floor-plan.component */ "./src/app/components/floor-plan/floor-plan.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_FloorPlanComponent = [_floor_plan_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_FloorPlanComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_FloorPlanComponent, data: {} });

function View_FloorPlanComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 18, "section", [["id", "floor-plan"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 17, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "h1", [["class", "text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Unit Plan 1 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 14, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "div", [["class", "col-md-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 0, "img", [["class", "p-2"], ["width", "100%"]], [[8, "src", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "div", [["class", "col-md-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 0, "img", [["class", "p-2"], ["width", "100%"]], [[8, "src", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "div", [["class", "col-md-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 0, "img", [["class", "p-2"], ["width", "100%"]], [[8, "src", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "div", [["class", "col-md-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 0, "img", [["class", "p-2"], ["width", "100%"]], [[8, "src", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 1, "div", [["class", "col-md-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 0, "img", [["class", "p-2"], ["width", "100%"]], [[8, "src", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 1, "div", [["class", "col-md-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 0, "img", [["class", "p-2"], ["width", "100%"]], [[8, "src", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 1, "div", [["class", "col-md-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 0, "img", [["class", "p-2"], ["width", "100%"]], [[8, "src", 4]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.myGalleryImg1; _ck(_v, 6, 0, currVal_0); var currVal_1 = _co.myGalleryImg2; _ck(_v, 8, 0, currVal_1); var currVal_2 = _co.myGalleryImg3; _ck(_v, 10, 0, currVal_2); var currVal_3 = _co.myGalleryImg4; _ck(_v, 12, 0, currVal_3); var currVal_4 = _co.myGalleryImg5; _ck(_v, 14, 0, currVal_4); var currVal_5 = _co.myGalleryImg6; _ck(_v, 16, 0, currVal_5); var currVal_6 = _co.myGalleryImg7; _ck(_v, 18, 0, currVal_6); }); }
function View_FloorPlanComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-floor-plan", [], null, null, null, View_FloorPlanComponent_0, RenderType_FloorPlanComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _floor_plan_component__WEBPACK_IMPORTED_MODULE_2__["FloorPlanComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var FloorPlanComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-floor-plan", _floor_plan_component__WEBPACK_IMPORTED_MODULE_2__["FloorPlanComponent"], View_FloorPlanComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/components/floor-plan/floor-plan.component.scss.shim.ngstyle.js":
/*!*********************************************************************************!*\
  !*** ./src/app/components/floor-plan/floor-plan.component.scss.shim.ngstyle.js ***!
  \*********************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["h2[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  color: #fff;\n  text-align: center;\n  letter-spacing: 1px;\n}\n\np[_ngcontent-%COMP%] {\n  color: #fff;\n  text-align: center;\n}\n\n.wrap-box[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\n\n.gallery[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: auto;\n  height: auto;\n}\n\n.image-thumbnail[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: auto;\n  height: auto;\n  cursor: pointer;\n  -webkit-transition: 300ms ease;\n  transition: 300ms ease;\n}\n\n.image-thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 5px;\n}\n\n.gallery[_ngcontent-%COMP%]:hover   .image-thumbnail[_ngcontent-%COMP%]:not(:hover) {\n  z-index: 1000;\n  -webkit-filter: blur(2px) grayscale(1);\n          filter: blur(2px) grayscale(1);\n  opacity: 0.7;\n  -webkit-transform: scale(0.9);\n          transform: scale(0.9);\n}\n\n\n\n.light-box[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  visibility: hidden;\n  opacity: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(72, 73, 74, 0.7);\n  -webkit-transition: 500ms ease;\n  transition: 500ms ease;\n}\n\n.light-box[_ngcontent-%COMP%]:target {\n  visibility: visible;\n  opacity: 1;\n}\n\n.edges[_ngcontent-%COMP%] {\n  width: -webkit-min-content;\n  width: -moz-min-content;\n  width: min-content;\n  height: auto;\n  background-color: #ccc;\n  padding: 20px;\n  margin: 30px auto;\n  box-shadow: 0 0 30px #333;\n}\n\n.title[_ngcontent-%COMP%] {\n  color: #222;\n  font-size: 20px;\n  text-align: center;\n}\n\n.inner-image[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n\n.inner-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 700px;\n  max-height: 450px;\n}\n\n.close-btn[_ngcontent-%COMP%], .next-btn[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.close-btn[_ngcontent-%COMP%] {\n  padding: 5px 0;\n}\n\n.close-btn[_ngcontent-%COMP%], .next-btn[_ngcontent-%COMP%], .previous-btn[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\nspan[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #444;\n}\n\n.image-title[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 10px;\n  font-size: 16px;\n  color: #222;\n  background-color: transparent;\n  border-bottom: 5px solid #eee;\n  padding: 10px;\n  cursor: pointer;\n  opacity: 0;\n  -webkit-transition: 300ms ease;\n  transition: 300ms ease;\n}\n\ninner-image[_ngcontent-%COMP%]:hover   .image-title[_ngcontent-%COMP%] {\n  opacity: 0.8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mbG9vci1wbGFuL0M6XFxVc2Vyc1xcZ2FsaWJcXE9uZURyaXZlXFxEZXNrdG9wXFxtYWl0cmlidWlsZGVycy9zcmNcXGFwcFxcY29tcG9uZW50c1xcZmxvb3ItcGxhblxcZmxvb3ItcGxhbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9mbG9vci1wbGFuL2Zsb29yLXBsYW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFBRyxnQkFBQTtFQUFnQixXQUFBO0VBQVcsa0JBQUE7RUFBa0IsbUJBQUE7QUNJaEQ7O0FERkE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUNLSjs7QURIQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDTUo7O0FESEE7RUFBUyxxQkFBQTtFQUFxQixXQUFBO0VBQVcsWUFBQTtBQ1N6Qzs7QURQQTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7RUFBQSxzQkFBQTtBQ1VKOztBRFBBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDVUo7O0FEUEE7RUFFSSxhQUFBO0VBQ0Esc0NBQUE7VUFBQSw4QkFBQTtFQUNBLFlBQUE7RUFBWSw2QkFBQTtVQUFBLHFCQUFBO0FDVWhCOztBRFJBLHlDQUFBOztBQUVBO0VBQ0ksZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1Q0FBQTtFQUNBLDhCQUFBO0VBQUEsc0JBQUE7QUNVSjs7QURSQTtFQUNJLG1CQUFBO0VBQ0EsVUFBQTtBQ1dKOztBRFJBO0VBQ0ksMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUNXSjs7QURSQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNXSjs7QURSQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNXSjs7QURSQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUNXSjs7QURSQTtFQUNJLFlBQUE7QUNXSjs7QURSQTtFQUNJLGNBQUE7QUNXSjs7QURSQTtFQUNJLGVBQUE7QUNXSjs7QURSQTtFQUNJLFdBQUE7QUNXSjs7QURSQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFBYSxlQUFBO0VBQ2IsVUFBQTtFQUFVLDhCQUFBO0VBQUEsc0JBQUE7QUNhZDs7QURWQTtFQUNJLFlBQUE7QUNhSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZmxvb3ItcGxhbi9mbG9vci1wbGFuLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmgye21hcmdpbi10b3A6MTBweDtjb2xvcjojZmZmO3RleHQtYWxpZ246Y2VudGVyO2xldHRlci1zcGFjaW5nOjFweDt9XHJcblxyXG5we1xyXG4gICAgY29sb3I6I2ZmZjtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcbi53cmFwLWJveHtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6YXV0bztcclxufVxyXG5cclxuLmdhbGxlcnl7ZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6YXV0bztoZWlnaHQ6YXV0bzt9XHJcblxyXG4uaW1hZ2UtdGh1bWJuYWlse1xyXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDphdXRvO1xyXG4gICAgaGVpZ2h0OmF1dG87XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246MzAwbXMgZWFzZTtcclxufVxyXG5cclxuLmltYWdlLXRodW1ibmFpbCBpbWd7XHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLmdhbGxlcnk6aG92ZXIgLmltYWdlLXRodW1ibmFpbDpub3QoOmhvdmVyKVxyXG57XHJcbiAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgZmlsdGVyOmJsdXIoMnB4KSBncmF5c2NhbGUoMSk7XHJcbiAgICBvcGFjaXR5OjAuNzt0cmFuc2Zvcm06c2NhbGUoMC45KTtcclxufVxyXG4vKiAgICAgICAgTGlnaHQgQm94IFN0eWxpbmcgICAgICAgICAgICAgKi9cclxuXHJcbi5saWdodC1ib3h7XHJcbiAgICBwb3NpdGlvbjpmaXhlZDtcclxuICAgIHRvcDowO1xyXG4gICAgbGVmdDowO1xyXG4gICAgdmlzaWJpbGl0eTpoaWRkZW47XHJcbiAgICBvcGFjaXR5OjA7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoNzIsNzMsNzQsMC43KTtcclxuICAgIHRyYW5zaXRpb246NTAwbXMgZWFzZTt9XHJcblxyXG4ubGlnaHQtYm94OnRhcmdldHtcclxuICAgIHZpc2liaWxpdHk6dmlzaWJsZTtcclxuICAgIG9wYWNpdHk6MTtcclxufVxyXG5cclxuLmVkZ2Vze1xyXG4gICAgd2lkdGg6bWluLWNvbnRlbnQ7XHJcbiAgICBoZWlnaHQ6YXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2NjYztcclxuICAgIHBhZGRpbmc6MjBweDtcclxuICAgIG1hcmdpbjozMHB4IGF1dG87XHJcbiAgICBib3gtc2hhZG93OjAgMCAzMHB4ICMzMzM7XHJcbn1cclxuXHJcbi50aXRsZXtcclxuICAgIGNvbG9yOiMyMjI7XHJcbiAgICBmb250LXNpemU6MjBweDtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcblxyXG4uaW5uZXItaW1hZ2V7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxufVxyXG5cclxuLmlubmVyLWltYWdlIGltZ3tcclxuICAgIG1heC13aWR0aDo3MDBweDtcclxuICAgIG1heC1oZWlnaHQ6NDUwcHg7XHJcbn1cclxuXHJcbi5jbG9zZS1idG4sIC5uZXh0LWJ0bntcclxuICAgIGZsb2F0OnJpZ2h0O1xyXG59XHJcblxyXG4uY2xvc2UtYnRue1xyXG4gICAgcGFkZGluZzo1cHggMDtcclxufVxyXG5cclxuLmNsb3NlLWJ0biwgLm5leHQtYnRuLCAucHJldmlvdXMtYnRue1xyXG4gICAgZm9udC1zaXplOjE2cHg7XHJcbn1cclxuXHJcbnNwYW4gYXtcclxuICAgIGNvbG9yOiM0NDQ7XHJcbn1cclxuXHJcbi5pbWFnZS10aXRsZXtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgYm90dG9tOjEwcHg7XHJcbiAgICBmb250LXNpemU6MTZweDtcclxuICAgIGNvbG9yOiMyMjI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbTo1cHggc29saWQgI2VlZTtcclxuICAgIHBhZGRpbmc6MTBweDtjdXJzb3I6cG9pbnRlcjtcclxuICAgIG9wYWNpdHk6MDt0cmFuc2l0aW9uOjMwMG1zIGVhc2U7XHJcbn1cclxuXHJcbmlubmVyLWltYWdlOmhvdmVyIC5pbWFnZS10aXRsZXtcclxuICAgIG9wYWNpdHk6MC44O1xyXG59XHJcbiIsImgyIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cblxucCB7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi53cmFwLWJveCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5nYWxsZXJ5IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uaW1hZ2UtdGh1bWJuYWlsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDMwMG1zIGVhc2U7XG59XG5cbi5pbWFnZS10aHVtYm5haWwgaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5nYWxsZXJ5OmhvdmVyIC5pbWFnZS10aHVtYm5haWw6bm90KDpob3Zlcikge1xuICB6LWluZGV4OiAxMDAwO1xuICBmaWx0ZXI6IGJsdXIoMnB4KSBncmF5c2NhbGUoMSk7XG4gIG9wYWNpdHk6IDAuNztcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xufVxuXG4vKiAgICAgICAgTGlnaHQgQm94IFN0eWxpbmcgICAgICAgICAgICAgKi9cbi5saWdodC1ib3gge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBvcGFjaXR5OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDcyLCA3MywgNzQsIDAuNyk7XG4gIHRyYW5zaXRpb246IDUwMG1zIGVhc2U7XG59XG5cbi5saWdodC1ib3g6dGFyZ2V0IHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmVkZ2VzIHtcbiAgd2lkdGg6IG1pbi1jb250ZW50O1xuICBoZWlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbjogMzBweCBhdXRvO1xuICBib3gtc2hhZG93OiAwIDAgMzBweCAjMzMzO1xufVxuXG4udGl0bGUge1xuICBjb2xvcjogIzIyMjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbm5lci1pbWFnZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmlubmVyLWltYWdlIGltZyB7XG4gIG1heC13aWR0aDogNzAwcHg7XG4gIG1heC1oZWlnaHQ6IDQ1MHB4O1xufVxuXG4uY2xvc2UtYnRuLCAubmV4dC1idG4ge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5jbG9zZS1idG4ge1xuICBwYWRkaW5nOiA1cHggMDtcbn1cblxuLmNsb3NlLWJ0biwgLm5leHQtYnRuLCAucHJldmlvdXMtYnRuIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG5zcGFuIGEge1xuICBjb2xvcjogIzQ0NDtcbn1cblxuLmltYWdlLXRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMyMjI7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgI2VlZTtcbiAgcGFkZGluZzogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiAzMDBtcyBlYXNlO1xufVxuXG5pbm5lci1pbWFnZTpob3ZlciAuaW1hZ2UtdGl0bGUge1xuICBvcGFjaXR5OiAwLjg7XG59Il19 */"];



/***/ }),

/***/ "./src/app/components/floor-plan/floor-plan.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/floor-plan/floor-plan.component.ts ***!
  \***************************************************************/
/*! exports provided: FloorPlanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloorPlanComponent", function() { return FloorPlanComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

class FloorPlanComponent {
    constructor() {
        this.myGalleryImg1 = "../../../assets/images/gallery/1.jpg";
        this.myGalleryImg2 = "../../../assets/images/gallery/2.jpg";
        this.myGalleryImg3 = "../../../assets/images/gallery/3.jpg";
        this.myGalleryImg4 = "../../../assets/images/gallery/4.jpg";
        this.myGalleryImg5 = "../../../assets/images/gallery/5.jpg";
        this.myGalleryImg6 = "../../../assets/images/gallery/6.jpg";
        this.myGalleryImg7 = "../../../assets/images/gallery/7.jpg";
    }
    ngOnInit() {
    }
}


/***/ }),

/***/ "./src/app/components/footer/footer.component.ngfactory.js":
/*!*****************************************************************!*\
  !*** ./src/app/components/footer/footer.component.ngfactory.js ***!
  \*****************************************************************/
/*! exports provided: RenderType_FooterComponent, View_FooterComponent_0, View_FooterComponent_Host_0, FooterComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_FooterComponent", function() { return RenderType_FooterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_FooterComponent_0", function() { return View_FooterComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_FooterComponent_Host_0", function() { return View_FooterComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponentNgFactory", function() { return FooterComponentNgFactory; });
/* harmony import */ var _footer_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.component.scss.shim.ngstyle */ "./src/app/components/footer/footer.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.component */ "./src/app/components/footer/footer.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_FooterComponent = [_footer_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_FooterComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_FooterComponent, data: {} });

function View_FooterComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "section", [["class", "footer"], ["id", "footer"], ["style", "background-color: transparent;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 6, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 5, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 4, "div", [["class", "copyright col-md-12 col-lg-12 col-sm-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 3, "p", [["style", "text-align: center; color:#000;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "a", [["href", "http://netcom-india.com/"], ["style", "color:blue;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, [" ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.copyright; _ck(_v, 5, 0, currVal_0); var currVal_1 = _co.companyName; _ck(_v, 7, 0, currVal_1); }); }
function View_FooterComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-footer", [], null, null, null, View_FooterComponent_0, RenderType_FooterComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var FooterComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-footer", _footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"], View_FooterComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/components/footer/footer.component.scss.shim.ngstyle.js":
/*!*************************************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss.shim.ngstyle.js ***!
  \*************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["#footer[_ngcontent-%COMP%] {\n  background-color: #eee;\n}\n#footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n\n.bootom-footer[_ngcontent-%COMP%] {\n  background-color: #3e4095;\n  color: #fff;\n}\n.bootom-footer[_ngcontent-%COMP%]   .disclaimer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvQzpcXFVzZXJzXFxnYWxpYlxcT25lRHJpdmVcXERlc2t0b3BcXG1haXRyaWJ1aWxkZXJzL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlCQUFBO0FBQ0E7RUFDQyxzQkFBQTtBQ0NEO0FEQ0E7RUFDQyxxQkFBQTtBQ0VEO0FEQUEsZUFBQTtBQUVBLHdCQUFBO0FBQ0E7RUFDQyx5QkFBQTtFQUNBLFdBQUE7QUNFRDtBREFBO0VBQ0MscUJBQUE7QUNHRDtBRERBLHNCQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZm9vdGVyIHN0YXJ0ICovXHJcbiNmb290ZXIge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbn1cclxuI2Zvb3RlciBhIHtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLyogZm9vdGVyIGVuZCAqL1xyXG5cclxuLyogYm90dG9tIGZvb3RlciBzdGFydCAqL1xyXG4uYm9vdG9tLWZvb3RlciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzNlNDA5NTtcclxuXHRjb2xvcjogI2ZmZjtcclxufVxyXG4uYm9vdG9tLWZvb3RlciAuZGlzY2xhaW1lciBhIHtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLyogYm90dG9tIGZvb3RlciBlbmQgKi8iLCIvKiBmb290ZXIgc3RhcnQgKi9cbiNmb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xufVxuXG4jZm9vdGVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi8qIGZvb3RlciBlbmQgKi9cbi8qIGJvdHRvbSBmb290ZXIgc3RhcnQgKi9cbi5ib290b20tZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNlNDA5NTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5ib290b20tZm9vdGVyIC5kaXNjbGFpbWVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi8qIGJvdHRvbSBmb290ZXIgZW5kICovIl19 */"];



/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

class FooterComponent {
    constructor() {
        this.copyright = "Copyright © 2020 Maitri Developers And Builders  All Right Reserved. Designed And Developed By";
        this.companyName = "Netcom Business Solutions";
    }
    ngOnInit() {
    }
}


/***/ }),

/***/ "./src/app/components/gallery/gallery.component.ngfactory.js":
/*!*******************************************************************!*\
  !*** ./src/app/components/gallery/gallery.component.ngfactory.js ***!
  \*******************************************************************/
/*! exports provided: RenderType_GalleryComponent, View_GalleryComponent_0, View_GalleryComponent_Host_0, GalleryComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_GalleryComponent", function() { return RenderType_GalleryComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_GalleryComponent_0", function() { return View_GalleryComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_GalleryComponent_Host_0", function() { return View_GalleryComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponentNgFactory", function() { return GalleryComponentNgFactory; });
/* harmony import */ var _gallery_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gallery.component.scss.shim.ngstyle */ "./src/app/components/gallery/gallery.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _gallery_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gallery.component */ "./src/app/components/gallery/gallery.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_GalleryComponent = [_gallery_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_GalleryComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_GalleryComponent, data: {} });

function View_GalleryComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 18, "section", [["id", "gallery"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 17, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "h1", [["class", "text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Gallery"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 14, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "div", [["class", "col-md-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 0, "img", [["class", "p-2"], ["width", "100%"]], [[8, "src", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "div", [["class", "col-md-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 0, "img", [["class", "p-2"], ["width", "100%"]], [[8, "src", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "div", [["class", "col-md-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 0, "img", [["class", "p-2"], ["width", "100%"]], [[8, "src", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "div", [["class", "col-md-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 0, "img", [["class", "p-2"], ["width", "100%"]], [[8, "src", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 1, "div", [["class", "col-md-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 0, "img", [["class", "p-2"], ["width", "100%"]], [[8, "src", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 1, "div", [["class", "col-md-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 0, "img", [["class", "p-2"], ["width", "100%"]], [[8, "src", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 1, "div", [["class", "col-md-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 0, "img", [["class", "p-2"], ["width", "100%"]], [[8, "src", 4]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.myGalleryImg1; _ck(_v, 6, 0, currVal_0); var currVal_1 = _co.myGalleryImg2; _ck(_v, 8, 0, currVal_1); var currVal_2 = _co.myGalleryImg3; _ck(_v, 10, 0, currVal_2); var currVal_3 = _co.myGalleryImg4; _ck(_v, 12, 0, currVal_3); var currVal_4 = _co.myGalleryImg5; _ck(_v, 14, 0, currVal_4); var currVal_5 = _co.myGalleryImg6; _ck(_v, 16, 0, currVal_5); var currVal_6 = _co.myGalleryImg7; _ck(_v, 18, 0, currVal_6); }); }
function View_GalleryComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-gallery", [], null, null, null, View_GalleryComponent_0, RenderType_GalleryComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _gallery_component__WEBPACK_IMPORTED_MODULE_2__["GalleryComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var GalleryComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-gallery", _gallery_component__WEBPACK_IMPORTED_MODULE_2__["GalleryComponent"], View_GalleryComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/components/gallery/gallery.component.scss.shim.ngstyle.js":
/*!***************************************************************************!*\
  !*** ./src/app/components/gallery/gallery.component.scss.shim.ngstyle.js ***!
  \***************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["h2[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  color: #fff;\n  text-align: center;\n  letter-spacing: 1px;\n}\n\np[_ngcontent-%COMP%] {\n  color: #fff;\n  text-align: center;\n}\n\n.wrap-box[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\n\n.gallery[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: auto;\n  height: auto;\n}\n\n.image-thumbnail[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: auto;\n  height: auto;\n  cursor: pointer;\n  -webkit-transition: 300ms ease;\n  transition: 300ms ease;\n}\n\n.image-thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 5px;\n}\n\n.gallery[_ngcontent-%COMP%]:hover   .image-thumbnail[_ngcontent-%COMP%]:not(:hover) {\n  -webkit-filter: blur(2px) grayscale(1);\n          filter: blur(2px) grayscale(1);\n  opacity: 0.7;\n  -webkit-transform: scale(0.9);\n          transform: scale(0.9);\n}\n\n\n\n.light-box[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  visibility: hidden;\n  opacity: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(72, 73, 74, 0.7);\n  -webkit-transition: 500ms ease;\n  transition: 500ms ease;\n}\n\n.light-box[_ngcontent-%COMP%]:target {\n  visibility: visible;\n  opacity: 1;\n}\n\n.edges[_ngcontent-%COMP%] {\n  width: -webkit-min-content;\n  width: -moz-min-content;\n  width: min-content;\n  height: auto;\n  background-color: #ccc;\n  padding: 20px;\n  margin: 30px auto;\n  box-shadow: 0 0 30px #333;\n}\n\n.title[_ngcontent-%COMP%] {\n  color: #222;\n  font-size: 20px;\n  text-align: center;\n}\n\n.inner-image[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n\n.inner-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 700px;\n  max-height: 450px;\n}\n\n.close-btn[_ngcontent-%COMP%], .next-btn[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.close-btn[_ngcontent-%COMP%] {\n  padding: 5px 0;\n}\n\n.close-btn[_ngcontent-%COMP%], .next-btn[_ngcontent-%COMP%], .previous-btn[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\nspan[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #444;\n}\n\n.image-title[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 10px;\n  font-size: 16px;\n  color: #222;\n  background-color: transparent;\n  border-bottom: 5px solid #eee;\n  padding: 10px;\n  cursor: pointer;\n  opacity: 0;\n  -webkit-transition: 300ms ease;\n  transition: 300ms ease;\n}\n\ninner-image[_ngcontent-%COMP%]:hover   .image-title[_ngcontent-%COMP%] {\n  opacity: 0.8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nYWxsZXJ5L0M6XFxVc2Vyc1xcZ2FsaWJcXE9uZURyaXZlXFxEZXNrdG9wXFxtYWl0cmlidWlsZGVycy9zcmNcXGFwcFxcY29tcG9uZW50c1xcZ2FsbGVyeVxcZ2FsbGVyeS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9nYWxsZXJ5L2dhbGxlcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFBRyxnQkFBQTtFQUFnQixXQUFBO0VBQVcsa0JBQUE7RUFBa0IsbUJBQUE7QUNJaEQ7O0FERkE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUNLSjs7QURIQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDTUo7O0FESEE7RUFBUyxxQkFBQTtFQUFxQixXQUFBO0VBQVcsWUFBQTtBQ1N6Qzs7QURQQTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7RUFBQSxzQkFBQTtBQ1VKOztBRFBBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDVUo7O0FEUEE7RUFBNEMsc0NBQUE7VUFBQSw4QkFBQTtFQUE4QixZQUFBO0VBQVksNkJBQUE7VUFBQSxxQkFBQTtBQ2F0Rjs7QURaQSx5Q0FBQTs7QUFFQTtFQUNJLGVBQUE7RUFDQSxNQUFBO0VBQU0sT0FBQTtFQUFPLGtCQUFBO0VBQWtCLFVBQUE7RUFBVSxXQUFBO0VBQVcsWUFBQTtFQUFZLHVDQUFBO0VBQW9DLDhCQUFBO0VBQUEsc0JBQUE7QUNxQnhHOztBRG5CQTtFQUFrQixtQkFBQTtFQUFtQixVQUFBO0FDd0JyQzs7QUR0QkE7RUFBTywwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFBa0IsWUFBQTtFQUFZLHNCQUFBO0VBQXNCLGFBQUE7RUFBYSxpQkFBQTtFQUFpQix5QkFBQTtBQytCekY7O0FEN0JBO0VBQU8sV0FBQTtFQUFXLGVBQUE7RUFBZSxrQkFBQTtBQ21DakM7O0FEakNBO0VBQWEsa0JBQUE7RUFBa0IsV0FBQTtFQUFXLFlBQUE7QUN1QzFDOztBRHJDQTtFQUFpQixnQkFBQTtFQUFnQixpQkFBQTtBQzBDakM7O0FEeENBO0VBQXNCLFlBQUE7QUM0Q3RCOztBRDFDQTtFQUFXLGNBQUE7QUM4Q1g7O0FENUNBO0VBQXFDLGVBQUE7QUNnRHJDOztBRDlDQTtFQUFPLFdBQUE7QUNrRFA7O0FEakRBO0VBQWEsa0JBQUE7RUFBa0IsWUFBQTtFQUMzQixlQUFBO0VBQWUsV0FBQTtFQUFXLDZCQUFBO0VBQzFCLDZCQUFBO0VBQTZCLGFBQUE7RUFBYSxlQUFBO0VBQWUsVUFBQTtFQUFVLDhCQUFBO0VBQUEsc0JBQUE7QUM0RHZFOztBRDFEQTtFQUErQixZQUFBO0FDOEQvQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmgye21hcmdpbi10b3A6MTBweDtjb2xvcjojZmZmO3RleHQtYWxpZ246Y2VudGVyO2xldHRlci1zcGFjaW5nOjFweDt9XHJcblxyXG5we1xyXG4gICAgY29sb3I6I2ZmZjtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcbi53cmFwLWJveHtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6YXV0bztcclxufVxyXG5cclxuLmdhbGxlcnl7ZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6YXV0bztoZWlnaHQ6YXV0bzt9XHJcblxyXG4uaW1hZ2UtdGh1bWJuYWlse1xyXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDphdXRvO1xyXG4gICAgaGVpZ2h0OmF1dG87XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246MzAwbXMgZWFzZTtcclxufVxyXG5cclxuLmltYWdlLXRodW1ibmFpbCBpbWd7XHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLmdhbGxlcnk6aG92ZXIgLmltYWdlLXRodW1ibmFpbDpub3QoOmhvdmVyKXtmaWx0ZXI6Ymx1cigycHgpIGdyYXlzY2FsZSgxKTtvcGFjaXR5OjAuNzt0cmFuc2Zvcm06c2NhbGUoMC45KTt9XHJcbi8qICAgICAgICBMaWdodCBCb3ggU3R5bGluZyAgICAgICAgICAgICAqL1xyXG5cclxuLmxpZ2h0LWJveHtcclxuICAgIHBvc2l0aW9uOmZpeGVkO1xyXG4gICAgdG9wOjA7bGVmdDowO3Zpc2liaWxpdHk6aGlkZGVuO29wYWNpdHk6MDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2JhY2tncm91bmQtY29sb3I6cmdiYSg3Miw3Myw3NCwwLjcpO3RyYW5zaXRpb246NTAwbXMgZWFzZTt9XHJcblxyXG4ubGlnaHQtYm94OnRhcmdldHt2aXNpYmlsaXR5OnZpc2libGU7b3BhY2l0eToxO31cclxuXHJcbi5lZGdlc3t3aWR0aDptaW4tY29udGVudDtoZWlnaHQ6YXV0bztiYWNrZ3JvdW5kLWNvbG9yOiNjY2M7cGFkZGluZzoyMHB4O21hcmdpbjozMHB4IGF1dG87Ym94LXNoYWRvdzowIDAgMzBweCAjMzMzO31cclxuXHJcbi50aXRsZXtjb2xvcjojMjIyO2ZvbnQtc2l6ZToyMHB4O3RleHQtYWxpZ246Y2VudGVyO31cclxuXHJcbi5pbm5lci1pbWFnZXtwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO31cclxuXHJcbi5pbm5lci1pbWFnZSBpbWd7bWF4LXdpZHRoOjcwMHB4O21heC1oZWlnaHQ6NDUwcHg7fVxyXG5cclxuLmNsb3NlLWJ0biwgLm5leHQtYnRue2Zsb2F0OnJpZ2h0O31cclxuXHJcbi5jbG9zZS1idG57cGFkZGluZzo1cHggMDt9XHJcblxyXG4uY2xvc2UtYnRuLCAubmV4dC1idG4sIC5wcmV2aW91cy1idG57Zm9udC1zaXplOjE2cHg7fVxyXG5cclxuc3BhbiBhe2NvbG9yOiM0NDQ7fVxyXG4uaW1hZ2UtdGl0bGV7cG9zaXRpb246YWJzb2x1dGU7Ym90dG9tOjEwcHg7XHJcbiAgICBmb250LXNpemU6MTZweDtjb2xvcjojMjIyO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItYm90dG9tOjVweCBzb2xpZCAjZWVlO3BhZGRpbmc6MTBweDtjdXJzb3I6cG9pbnRlcjtvcGFjaXR5OjA7dHJhbnNpdGlvbjozMDBtcyBlYXNlO31cclxuXHJcbmlubmVyLWltYWdlOmhvdmVyIC5pbWFnZS10aXRsZXtvcGFjaXR5OjAuODt9XHJcbiIsImgyIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cblxucCB7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi53cmFwLWJveCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5nYWxsZXJ5IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uaW1hZ2UtdGh1bWJuYWlsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDMwMG1zIGVhc2U7XG59XG5cbi5pbWFnZS10aHVtYm5haWwgaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5nYWxsZXJ5OmhvdmVyIC5pbWFnZS10aHVtYm5haWw6bm90KDpob3Zlcikge1xuICBmaWx0ZXI6IGJsdXIoMnB4KSBncmF5c2NhbGUoMSk7XG4gIG9wYWNpdHk6IDAuNztcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xufVxuXG4vKiAgICAgICAgTGlnaHQgQm94IFN0eWxpbmcgICAgICAgICAgICAgKi9cbi5saWdodC1ib3gge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBvcGFjaXR5OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDcyLCA3MywgNzQsIDAuNyk7XG4gIHRyYW5zaXRpb246IDUwMG1zIGVhc2U7XG59XG5cbi5saWdodC1ib3g6dGFyZ2V0IHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmVkZ2VzIHtcbiAgd2lkdGg6IG1pbi1jb250ZW50O1xuICBoZWlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbjogMzBweCBhdXRvO1xuICBib3gtc2hhZG93OiAwIDAgMzBweCAjMzMzO1xufVxuXG4udGl0bGUge1xuICBjb2xvcjogIzIyMjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbm5lci1pbWFnZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmlubmVyLWltYWdlIGltZyB7XG4gIG1heC13aWR0aDogNzAwcHg7XG4gIG1heC1oZWlnaHQ6IDQ1MHB4O1xufVxuXG4uY2xvc2UtYnRuLCAubmV4dC1idG4ge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5jbG9zZS1idG4ge1xuICBwYWRkaW5nOiA1cHggMDtcbn1cblxuLmNsb3NlLWJ0biwgLm5leHQtYnRuLCAucHJldmlvdXMtYnRuIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG5zcGFuIGEge1xuICBjb2xvcjogIzQ0NDtcbn1cblxuLmltYWdlLXRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMyMjI7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgI2VlZTtcbiAgcGFkZGluZzogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiAzMDBtcyBlYXNlO1xufVxuXG5pbm5lci1pbWFnZTpob3ZlciAuaW1hZ2UtdGl0bGUge1xuICBvcGFjaXR5OiAwLjg7XG59Il19 */"];



/***/ }),

/***/ "./src/app/components/gallery/gallery.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/gallery/gallery.component.ts ***!
  \*********************************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

class GalleryComponent {
    constructor() {
        this.myGalleryImg1 = "../../../assets/images/gallery/1.jpg";
        this.myGalleryImg2 = "../../../assets/images/gallery/2.jpg";
        this.myGalleryImg3 = "../../../assets/images/gallery/3.jpg";
        this.myGalleryImg4 = "../../../assets/images/gallery/4.jpg";
        this.myGalleryImg5 = "../../../assets/images/gallery/5.jpg";
        this.myGalleryImg6 = "../../../assets/images/gallery/6.jpg";
        this.myGalleryImg7 = "../../../assets/images/gallery/7.jpg";
    }
    ngOnInit() {
    }
}


/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ngfactory.js":
/*!*****************************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ngfactory.js ***!
  \*****************************************************************/
/*! exports provided: RenderType_NavbarComponent, View_NavbarComponent_0, View_NavbarComponent_Host_0, NavbarComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_NavbarComponent", function() { return RenderType_NavbarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_NavbarComponent_0", function() { return View_NavbarComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_NavbarComponent_Host_0", function() { return View_NavbarComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponentNgFactory", function() { return NavbarComponentNgFactory; });
/* harmony import */ var _navbar_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar.component.scss.shim.ngstyle */ "./src/app/components/navbar/navbar.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_NavbarComponent = [_navbar_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_NavbarComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_NavbarComponent, data: {} });

function View_NavbarComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 37, "header", [["id", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 28, "nav", [["class", "navbar navbar-expand-lg  nav-menu"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "a", [["class", "navbar-brand"], ["href", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 0, "img", [["src", "../../../assets/images/maitribuilders-logo.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 2, "button", [["aria-controls", "navbarNavDropdown"], ["aria-expanded", "false"], ["aria-label", "Toggle navigation"], ["class", "navbar-toggler"], ["data-target", "#navbarNavDropdown"], ["data-toggle", "collapse"], ["type", "button"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "span", [["class", "navbar-toggler-icon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 0, "i", [["class", "fa fa-bars"], ["style", "color:#fff; font-size:28px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 22, "div", [["class", "collapse navbar-collapse text-center"], ["id", "navbarNavDropdown"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 21, "ul", [["class", "navbar-nav ml-auto pr-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 2, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "a", [["class", "nav-link"], ["href", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Home "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 2, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 1, "a", [["class", "nav-link"], ["href", "#about"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["About Us"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 2, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 1, "a", [["class", "nav-link"], ["href", "#amenities"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Amenities"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 2, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 1, "a", [["class", "nav-link"], ["href", "#floor-plan"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Floor Plan / Price"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 2, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 1, "a", [["class", "nav-link"], ["href", "#gallery"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Gallery "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 2, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 1, "a", [["class", "nav-link"], ["href", "#contact"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Contact Us"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 2, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 1, "a", [["class", "nav-link"], ["data-target", "#exampleModal"], ["data-toggle", "modal"], ["href", "#"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Book Now"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 7, "div", [["class", "text-light text-center banner"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 1, "h1", [["class", "display-6 banner-heading pt-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](32, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 2, "h2", [["class", "display-4 banner-para-1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 1, "b", [["style", "color:#d3b466;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](35, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 1, "h3", [["class", "display-6 banner-para-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](37, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 38, "div", [["aria-hidden", "true"], ["aria-labelledby", "exampleModalLabel"], ["class", "modal fade"], ["id", "exampleModal"], ["role", "dialog"], ["tabindex", "-1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 37, "div", [["class", "modal-dialog"], ["role", "document"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, null, 36, "div", [["class", "modal-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 5, "div", [["class", "modal-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 0, null, null, 1, "h5", [["class", "modal-title"], ["id", "exampleModalLabel"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Get In Touch"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, null, 2, "button", [["aria-label", "Close"], ["class", "close"], ["data-dismiss", "modal"], ["type", "button"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, null, 1, "span", [["aria-hidden", "true"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u00D7"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](47, 0, null, null, 29, "div", [["class", "modal-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](48, 0, null, null, 28, "form", [["action", "contact.php"], ["method", "post"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50).onReset() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](49, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_z"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](50, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](52, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](53, 0, null, null, 1, "div", [["class", "form-group col-md-12 offset md-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](54, 0, null, null, 0, "input", [["class", "form-control"], ["id", "first_name"], ["name", "first_name"], ["placeholder", "Enter First Name"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](55, 0, null, null, 1, "div", [["class", "form-group col-md-12 offset md-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](56, 0, null, null, 0, "input", [["class", "form-control"], ["id", "phone"], ["name", "phone"], ["placeholder", "Enter Mobile Number"], ["type", "phone"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](57, 0, null, null, 1, "div", [["class", "form-group col-md-12 offset md-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](58, 0, null, null, 0, "input", [["class", "form-control"], ["id", "email"], ["name", "email"], ["placeholder", "Enter Email"], ["type", "email"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](59, 0, null, null, 1, "div", [["class", "form-group col-md-12 offset md-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](60, 0, null, null, 0, "input", [["class", "form-control"], ["id", "message"], ["name", "message"], ["placeholder", "Enter Message"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](61, 0, null, null, 13, "div", [["class", "form-group col-md-12 offset md-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](62, 0, null, null, 12, "select", [["class", "form-control element-block"], ["name", "area"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](63, 0, null, null, 3, "option", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](64, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](65, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Select Area"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](67, 0, null, null, 3, "option", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](68, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](69, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["1 BHK"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](71, 0, null, null, 3, "option", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](72, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](73, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["2 BHK"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](75, 0, null, null, 1, "button", [["class", "btn btn-default"], ["style", "background-color:#3e4095"], ["type", "submit"], ["value", "submit"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Submit"]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.welcomeMsg; _ck(_v, 32, 0, currVal_0); var currVal_1 = _co.welcomeMsgParaFirst; _ck(_v, 35, 0, currVal_1); var currVal_2 = _co.welcomeMsgParaSecond; _ck(_v, 37, 0, currVal_2); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52).ngClassUntouched; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52).ngClassTouched; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52).ngClassPristine; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52).ngClassDirty; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52).ngClassValid; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52).ngClassInvalid; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52).ngClassPending; _ck(_v, 48, 0, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); }); }
function View_NavbarComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-navbar", [], null, null, null, View_NavbarComponent_0, RenderType_NavbarComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var NavbarComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-navbar", _navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], View_NavbarComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.scss.shim.ngstyle.js":
/*!*************************************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.scss.shim.ngstyle.js ***!
  \*************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["header[_ngcontent-%COMP%] {\n  height: 120vh;\n  background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.6)), to(rgba(0, 0, 0, 0.6))), url('banner.jpg') no-repeat center center/cover;\n  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('banner.jpg') no-repeat center center/cover;\n}\n\n\n.banner[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  width: 80%;\n}\n.banner-heading[_ngcontent-%COMP%] {\n  -webkit-animation: anim;\n          animation: anim;\n  -webkit-animation-duration: 3s;\n          animation-duration: 3s;\n}\n.banner-para-1[_ngcontent-%COMP%] {\n  -webkit-animation: anim-2;\n          animation: anim-2;\n  -webkit-animation-duration: 3s;\n          animation-duration: 3s;\n}\n.banner-para-2[_ngcontent-%COMP%] {\n  -webkit-animation: anim;\n          animation: anim;\n  -webkit-animation-duration: 3s;\n          animation-duration: 3s;\n  -webkit-animation-delay: 0.5s;\n          animation-delay: 0.5s;\n  -webkit-animation-fill-mode: backwards;\n          animation-fill-mode: backwards;\n}\n.nav-menu[_ngcontent-%COMP%] {\n  padding-top: 20px;\n}\n@-webkit-keyframes anim {\n  0% {\n    -webkit-transform: translateX(-100px);\n            transform: translateX(-100px);\n    opacity: 0;\n  }\n  100% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n    opacity: 1;\n  }\n}\n@keyframes anim {\n  0% {\n    -webkit-transform: translateX(-100px);\n            transform: translateX(-100px);\n    opacity: 0;\n  }\n  100% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n    opacity: 1;\n  }\n}\n@-webkit-keyframes anim-2 {\n  0% {\n    -webkit-transform: translateX(100px);\n            transform: translateX(100px);\n    opacity: 0;\n  }\n  100% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n    opacity: 1;\n  }\n}\n@keyframes anim-2 {\n  0% {\n    -webkit-transform: translateX(100px);\n            transform: translateX(100px);\n    opacity: 0;\n  }\n  100% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n    opacity: 1;\n  }\n}\n\n\n.nav-link[_ngcontent-%COMP%] {\n  font-size: 20px;\n  letter-spacing: 1px;\n  padding: 0px 12px !important;\n  color: #fff !important;\n  -webkit-transition: color 0.5s;\n  transition: color 0.5s;\n  text-align: center !important;\n}\n@media only screen and (max-width: 767px) {\n  .navbar-nav[_ngcontent-%COMP%] {\n    background: #3e4095;\n    height: 230px !important;\n  }\n\n  .navbar[_ngcontent-%COMP%] {\n    position: fixed !important;\n    z-index: 1000 !important;\n    height: 150px !important;\n    width: 100% !important;\n    background: transparent !important;\n    padding: 40px !important;\n    -webkit-transition: all ease-out 0.5s;\n    transition: all ease-out 0.5s !important;\n  }\n}\n\n\nsection[_ngcontent-%COMP%] {\n  padding: 20px 0px;\n}\n.hr-tag[_ngcontent-%COMP%] {\n  border-top: 1px solid #eee;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvQzpcXFVzZXJzXFxnYWxpYlxcT25lRHJpdmVcXERlc2t0b3BcXG1haXRyaWJ1aWxkZXJzL3NyY1xcYXBwXFxjb21wb25lbnRzXFxuYXZiYXJcXG5hdmJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFdBQUE7QUFDQTtFQUNDLGFBQUE7RUFDQSw4SkFBQTtFQUFBLG9IQUFBO0FDQ0Q7QURJQSxlQUFBO0FBRUEsV0FBQTtBQUNDO0VBQ0Msa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHdDQUFBO1VBQUEsZ0NBQUE7RUFDQSxVQUFBO0FDRkY7QURLQztFQUNDLHVCQUFBO1VBQUEsZUFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7QUNGRjtBREtDO0VBQ0MseUJBQUE7VUFBQSxpQkFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7QUNGRjtBREtDO0VBQ0MsdUJBQUE7VUFBQSxlQUFBO0VBQ0EsOEJBQUE7VUFBQSxzQkFBQTtFQUNBLDZCQUFBO1VBQUEscUJBQUE7RUFDQSxzQ0FBQTtVQUFBLDhCQUFBO0FDRkY7QURJQztFQUNDLGlCQUFBO0FDREY7QURJQztFQUNDO0lBQ0MscUNBQUE7WUFBQSw2QkFBQTtJQUNBLFVBQUE7RUNERDtFRElBO0lBQ0MsZ0NBQUE7WUFBQSx3QkFBQTtJQUNBLFVBQUE7RUNGRDtBQUNGO0FEUEM7RUFDQztJQUNDLHFDQUFBO1lBQUEsNkJBQUE7SUFDQSxVQUFBO0VDREQ7RURJQTtJQUNDLGdDQUFBO1lBQUEsd0JBQUE7SUFDQSxVQUFBO0VDRkQ7QUFDRjtBREtDO0VBQ0M7SUFDQyxvQ0FBQTtZQUFBLDRCQUFBO0lBQ0EsVUFBQTtFQ0hEO0VETUE7SUFDQyxnQ0FBQTtZQUFBLHdCQUFBO0lBQ0EsVUFBQTtFQ0pEO0FBQ0Y7QURMQztFQUNDO0lBQ0Msb0NBQUE7WUFBQSw0QkFBQTtJQUNBLFVBQUE7RUNIRDtFRE1BO0lBQ0MsZ0NBQUE7WUFBQSx3QkFBQTtJQUNBLFVBQUE7RUNKRDtBQUNGO0FETUEsZUFBQTtBQUlBLGlCQUFBO0FBQ0M7RUFDQyxlQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFBQSxzQkFBQTtFQUNBLDZCQUFBO0FDUEY7QURVQTtFQUVFO0lBQ0EsbUJBQUE7SUFDQSx3QkFBQTtFQ1JBOztFRFVBO0lBQ0EsMEJBQUE7SUFDRCx3QkFBQTtJQUNBLHdCQUFBO0lBQ0Msc0JBQUE7SUFDRCxrQ0FBQTtJQUNBLHdCQUFBO0lBQ0EscUNBQUE7SUFHQyx3Q0FBQTtFQ1BBO0FBQ0Y7QURXQSxlQUFBO0FBRUEsdUJBQUE7QUFDQztFQUNDLGlCQUFBO0FDVkY7QURZQztFQUNDLDBCQUFBO0FDVEY7QURXQSxvQkFBQTtBQUVBLGdCQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogaGVhZGVyICovXHJcbmhlYWRlciB7XHJcblx0aGVpZ2h0OiAxMjB2aDtcclxuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLDAsMCwuNikscmdiYSgwLDAsMCwuNikpLCB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2Jhbm5lci5qcGdcIikgbm8tcmVwZWF0XHJcblx0Y2VudGVyIGNlbnRlciAvY292ZXI7XHJcblxyXG59XHJcblxyXG4vKiBoZWFkZXIgZW5kICovXHJcblxyXG4vKiBCYW5uZXIgKi9cclxuXHQuYmFubmVyIHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHRvcDogNTAlO1xyXG5cdFx0bGVmdDogNTAlO1xyXG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcblx0XHR3aWR0aDogODAlO1xyXG5cdH1cclxuXHJcblx0LmJhbm5lci1oZWFkaW5nIHtcclxuXHRcdGFuaW1hdGlvbjogYW5pbTtcclxuXHRcdGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XHJcblx0fVxyXG5cclxuXHQuYmFubmVyLXBhcmEtMSB7XHJcblx0XHRhbmltYXRpb246IGFuaW0tMjtcclxuXHRcdGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XHJcblx0fVxyXG5cclxuXHQuYmFubmVyLXBhcmEtMiB7XHJcblx0XHRhbmltYXRpb246IGFuaW07XHJcblx0XHRhbmltYXRpb24tZHVyYXRpb246IDNzO1xyXG5cdFx0YW5pbWF0aW9uLWRlbGF5OiAuNXM7XHJcblx0XHRhbmltYXRpb24tZmlsbC1tb2RlOiBiYWNrd2FyZHM7XHJcblx0fVxyXG5cdC5uYXYtbWVudXtcclxuXHRcdHBhZGRpbmctdG9wOjIwcHg7XHJcblx0fVxyXG5cclxuXHRAa2V5ZnJhbWVzIGFuaW0ge1xyXG5cdFx0MCUge1xyXG5cdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMHB4KTtcclxuXHRcdFx0b3BhY2l0eTogMDtcclxuXHRcdH1cclxuXHJcblx0XHQxMDAlIHtcclxuXHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG5cdFx0XHRvcGFjaXR5OiAxO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0QGtleWZyYW1lcyBhbmltLTIge1xyXG5cdFx0MCUge1xyXG5cdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwcHgpO1xyXG5cdFx0XHRvcGFjaXR5OiAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdDEwMCUge1xyXG5cdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcblx0XHRcdG9wYWNpdHk6IDE7XHJcblx0XHR9XHJcblx0fVxyXG4vKiBCYW5uZXIgZW5kICovXHJcblxyXG5cclxuXHJcbi8qIE5hdmJhciBzdGFydCAqL1xyXG5cdC5uYXYtbGluayB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgcGFkZGluZzogMHB4IDEycHggIWltcG9ydGFudDtcclxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gIHRyYW5zaXRpb246IGNvbG9yIC41cztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweClcclxue1xyXG5cdCAubmF2YmFyLW5hdiB7XHJcblx0XHRiYWNrZ3JvdW5kOiAjM2U0MDk1O1xyXG5cdFx0aGVpZ2h0OiAyMzBweCAhaW1wb3J0YW50O1xyXG5cdFx0fVxyXG5cdFx0Lm5hdmJhciB7XHJcbiAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XHJcblx0ei1pbmRleDogMTAwMCAhaW1wb3J0YW50O1xyXG5cdGhlaWdodDogMTUwcHggIWltcG9ydGFudDtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50OyBcclxuXHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG5cdHBhZGRpbmc6IDQwcHggIWltcG9ydGFudDtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCBlYXNlLW91dCAuNXM7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgZWFzZS1vdXQgLjVzO1xyXG4gIC1vLXRyYW5zaXRpb246IGFsbCBlYXNlLW91dCAuNXM7XHJcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2Utb3V0IC41cyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG59XHJcbiBcclxuLyogTmF2YmFyIGVuZCAqL1xyXG5cclxuLyogIGFsbCBzZWN0aW9uIHN0YXJ0ICovXHJcblx0c2VjdGlvbiB7XHJcblx0XHRwYWRkaW5nOiAyMHB4IDBweFxyXG5cdH1cclxuXHQuaHItdGFnIHtcclxuXHRcdGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xyXG5cdH1cclxuLyogYWxsIHNlY3Rpb24gZW5kICovXHJcblxyXG4vKiBBYm91dCBzdGFydCAqLyIsIi8qIGhlYWRlciAqL1xuaGVhZGVyIHtcbiAgaGVpZ2h0OiAxMjB2aDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC42KSwgcmdiYSgwLCAwLCAwLCAwLjYpKSwgdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iYW5uZXIuanBnXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyL2NvdmVyO1xufVxuXG4vKiBoZWFkZXIgZW5kICovXG4vKiBCYW5uZXIgKi9cbi5iYW5uZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB3aWR0aDogODAlO1xufVxuXG4uYmFubmVyLWhlYWRpbmcge1xuICBhbmltYXRpb246IGFuaW07XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XG59XG5cbi5iYW5uZXItcGFyYS0xIHtcbiAgYW5pbWF0aW9uOiBhbmltLTI7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XG59XG5cbi5iYW5uZXItcGFyYS0yIHtcbiAgYW5pbWF0aW9uOiBhbmltO1xuICBhbmltYXRpb24tZHVyYXRpb246IDNzO1xuICBhbmltYXRpb24tZGVsYXk6IDAuNXM7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJhY2t3YXJkcztcbn1cblxuLm5hdi1tZW51IHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG5cbkBrZXlmcmFtZXMgYW5pbSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGFuaW0tMiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwcHgpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbi8qIEJhbm5lciBlbmQgKi9cbi8qIE5hdmJhciBzdGFydCAqL1xuLm5hdi1saW5rIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBwYWRkaW5nOiAwcHggMTJweCAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjVzO1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAubmF2YmFyLW5hdiB7XG4gICAgYmFja2dyb3VuZDogIzNlNDA5NTtcbiAgICBoZWlnaHQ6IDIzMHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubmF2YmFyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcbiAgICB6LWluZGV4OiAxMDAwICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAxNTBweCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiA0MHB4ICFpbXBvcnRhbnQ7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgZWFzZS1vdXQgMC41cztcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCBlYXNlLW91dCAwLjVzO1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCBlYXNlLW91dCAwLjVzO1xuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLW91dCAwLjVzICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi8qIE5hdmJhciBlbmQgKi9cbi8qICBhbGwgc2VjdGlvbiBzdGFydCAqL1xuc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDIwcHggMHB4O1xufVxuXG4uaHItdGFnIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7XG59XG5cbi8qIGFsbCBzZWN0aW9uIGVuZCAqL1xuLyogQWJvdXQgc3RhcnQgKi8iXX0= */"];



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

class NavbarComponent {
    constructor() {
        this.welcomeMsg = "Welcome To";
        this.welcomeMsgParaFirst = "Maitri Developers And Builders";
        this.welcomeMsgParaSecond = "Bookings Now Open for New Tower";
    }
    ngOnInit() {
    }
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module.ngfactory */ "./src/app/app.module.ngfactory.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModuleFactory(_app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__["AppModuleNgFactory"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\galib\OneDrive\Desktop\maitribuilders\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map