webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Flaired edges, by Tomas Theunissen */\n\nhr.style-seven {\n    overflow: visible;\n    /* For IE */\n    height: 30px;\n    border-style: solid;\n    border-color: black;\n    border-width: 1px 0 0 0;\n    border-radius: 20px;\n}\n\nhr.style-seven:before {\n    /* Not really supposed to work, but does */\n    display: block;\n    content: \"\";\n    height: 30px;\n    margin-top: -31px;\n    border-style: solid;\n    border-color: black;\n    border-width: 0 0 1px 0;\n    border-radius: 20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" id=\"about\">\n  <!-- <h2 class=\"section-heading h1 pt-4 pl-3\">  </h2>\n  <hr class=\"style-seven\"> -->\n  <div class=\"heading-box\">\n    <h2>About\n      <span>Us</span>\n    </h2>\n    <!-- Title -->\n    <div class=\"subtitle\">Our Best Staff And Our Best services</div>\n    <!-- Subtitle -->\n  </div>\n  <app-staff></app-staff>\n  <app-services></app-services>\n</div>"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/about/about.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav>\n</app-nav>\n<app-navbar></app-navbar>\n<app-home></app-home>\n<app-about></app-about>\n<app-gallery></app-gallery>\n<app-book-now></app-book-now>\n<app-contact></app-contact>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_bootstrap_md__ = __webpack_require__("../../../../angular-bootstrap-md/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__carousel_carousel_component__ = __webpack_require__("../../../../../src/app/carousel/carousel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__booking_card_booking_card_component__ = __webpack_require__("../../../../../src/app/booking-card/booking-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__gallery_gallery_component__ = __webpack_require__("../../../../../src/app/gallery/gallery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__staff_staff_component__ = __webpack_require__("../../../../../src/app/staff/staff.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_services_component__ = __webpack_require__("../../../../../src/app/services/services.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__nav_nav_component__ = __webpack_require__("../../../../../src/app/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__book_now_book_now_component__ = __webpack_require__("../../../../../src/app/book-now/book-now.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// import { FormBuilder } from '@angular/forms';
















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_6__carousel_carousel_component__["a" /* CarouselComponent */],
            __WEBPACK_IMPORTED_MODULE_7__booking_card_booking_card_component__["a" /* BookingCardComponent */],
            __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_9__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_10__gallery_gallery_component__["a" /* GalleryComponent */],
            __WEBPACK_IMPORTED_MODULE_11__contact_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_12__staff_staff_component__["a" /* StaffComponent */],
            __WEBPACK_IMPORTED_MODULE_13__services_services_component__["a" /* ServicesComponent */],
            __WEBPACK_IMPORTED_MODULE_14__nav_nav_component__["a" /* NavComponent */],
            __WEBPACK_IMPORTED_MODULE_15__book_now_book_now_component__["a" /* BookNowComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_angular_bootstrap_md__["a" /* MDBBootstrapModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
        ],
        schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NO_ERRORS_SCHEMA */]],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/book-now/book-now.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, " ngb-tabset /deep/ .nav-link.active {\n     background: #333333;\n     border-bottom: 3px solid #333333;\n     color: #ffffff;\n }\n\n ngb-tabset /deep/ .nav-link.active .number {\n     background: #333333;\n     border-bottom: 3px solid #333333;\n     color: #C5A46D;\n }\n\n ngb-tabset /deep/ .nav-link.active .title {\n     background: #333333;\n     border-bottom: 3px solid #333333;\n     color: #ffffff;\n }\n\n ngb-tabset /deep/ .nav-link {\n     display: block;\n     position: relative;\n     text-align: center;\n     border: 0;\n     border-bottom: 3px solid #333333;\n     transition: all 0.3s ease;\n     padding-left: 80px;\n     padding-right: 68px;\n }\n\n ngb-tabset /deep/ .nav-link .number {\n     /* position: absolute; */\n     left: 40px;\n     top: 5px;\n     font: 48px \"Lobster\", Arial, Helvetica, sans-serif;\n     /* color: #C5A46D; */\n     color: #dde1e1;\n     transition: all 0.3s ease;\n }\n\n ngb-tabset /deep/ .nav-link .title {\n     transition: all 0.3s ease;\n     line-height: 50px;\n     color: #C5A46D;\n     font-size: 18px;\n     vertical-align: super;\n }\n\n ngb-tabset /deep/ .nav-link .title b {\n     transition: all 0.3s ease;\n     line-height: 50px;\n     color: #C5A46D;\n     font-size: 18px;\n     vertical-align: top;\n }\n\n h4 {\n     font-size: 20px;\n     color: #C5A46D;\n     line-height: 70px;\n     text-align: center;\n     letter-spacing: -1px;\n     border-bottom: 1px solid #d0d4d7;\n     margin-bottom: 30px;\n     margin-top: 15px;\n }\n\n .fadeInUp {\n     -webkit-animation-name: fadeInUp;\n     animation-name: fadeInUp;\n     -webkit-animation-duration: 1s;\n     animation-duration: 1s;\n     -webkit-animation-delay: 0.2s;\n     animation-delay: 0.2s;\n     -webkit-animation-timing-function: ease;\n     animation-timing-function: ease;\n     -webkit-animation-fill-mode: both;\n     animation-fill-mode: both;\n     -webkit-backface-visibility: hidden;\n     backface-visibility: hidden;\n }\n\n .room-container {\n     margin: 80px auto 30px;\n }\n\n .clearfix:before,\n .clearfix:after {\n     content: \" \";\n     display: table;\n }\n\n .room-container .room-box {\n     text-align: center;\n     margin-bottom: 60px;\n }\n\n .room-container .room-box .img-container {\n     position: relative;\n     height: 250px;\n     overflow: hidden;\n }\n\n .room-container .room-box .img-container:before {\n     display: block;\n     content: \"\";\n     position: absolute;\n     left: 10px;\n     top: 10px;\n     z-index: 1;\n     transition: all 0.5s ease;\n     width: calc(100% - 20px);\n     height: calc(100% - 20px);\n     box-shadow: 0 0 0 10px rgba(51, 51, 51, 0.3);\n }\n\n .room-container .room-box .img-container .check-box-container {\n     position: absolute;\n     left: 20px;\n     top: 20px;\n     z-index: 2;\n }\n\n .room-container .room-box .img-container .check-box-container input {\n     /* display: none; */\n }\n\n input[type=\"radio\"],\n input[type=\"checkbox\"] {\n     margin: 4px 0 0;\n     margin-top: 1px \\9;\n     line-height: normal;\n }\n\n input[type=\"checkbox\"],\n input[type=\"radio\"] {\n     box-sizing: border-box;\n     padding: 0;\n }\n\n input,\n button,\n select,\n textarea {\n     font-family: inherit;\n     font-size: inherit;\n     line-height: inherit;\n }\n\n input {\n     line-height: normal;\n }\n\n button,\n input,\n optgroup,\n select,\n textarea {\n     color: inherit;\n     font: inherit;\n     margin: 0;\n }\n\n .room-container .room-box .img-container .check-box-container label {\n     font-size: 14px !important;\n     color: #FFFFFF;\n     text-align: left;\n     line-height: 17px !important;\n     margin: 0;\n     width: 120px;\n     cursor: pointer;\n }\n\n label {\n     display: inline-block;\n     max-width: 100%;\n     margin-bottom: 5px;\n     font-weight: bold;\n }\n\n .room-container .room-box .img-container .check-box-container label span {\n     display: inline-block;\n     width: 30px;\n     height: 30px;\n     border: 1px solid #FFFFFF;\n     background: rgba(255, 255, 255, 0.4);\n     margin-right: 10px;\n     float: left;\n     position: relative;\n }\n\n .room-container .room-box .img-container .check-box-container label span:before {\n     font: 20px \"FontAwesome\";\n     content: \"\\F00C\";\n     position: absolute;\n     left: 5px;\n     top: 4px;\n     visibility: hidden;\n     color: #C5A46D;\n     opacity: 0;\n     filter: alpha(opacity=0);\n     -webkit-transform: rotate(360deg);\n     transform: rotate(360deg);\n     transition: all 0.3s ease;\n }\n\n .room-container .room-box .img-container img {\n     position: absolute;\n     left: 0;\n     top: 50%;\n     max-width: 100%;\n     transition: all 0.5s ease;\n     -webkit-transform: scale(1.05) translateY(-50%);\n     transform: scale(1.05) translateY(-50%);\n }\n\n img {\n     vertical-align: middle;\n }\n\n img {\n     border: 0;\n }\n\n .room-container .room-box .img-container a.btn,\n .room-container .room-box .img-container aside.sidebar .widget.widget_tag_cloud .tagcloud a,\n aside.sidebar .widget.widget_tag_cloud .tagcloud .room-container .room-box .img-container a {\n     position: absolute;\n     left: 50%;\n     top: 20%;\n     z-index: 2;\n     visibility: hidden;\n     opacity: 0;\n     filter: alpha(opacity=0);\n     transition: all 0.5s ease;\n     -webkit-transform: translateX(-50%) translateY(-50%);\n     transform: translateX(-50%) translateY(-50%);\n }\n\n .btn-default {\n     color: #FFFFFF;\n     background-color: #C5A46D;\n     border-color: #C5A46D;\n }\n\n .btn,\n aside.sidebar .widget.widget_tag_cloud .tagcloud a {\n     display: inline-block;\n     margin-bottom: 0;\n     font-weight: normal;\n     text-align: center;\n     vertical-align: middle;\n     -ms-touch-action: manipulation;\n         touch-action: manipulation;\n     cursor: pointer;\n     background-image: none;\n     border: 1px solid transparent;\n     white-space: nowrap;\n     padding: 6px 12px;\n     font-size: 14px;\n     line-height: 1.42857143;\n     border-radius: 0;\n     -webkit-user-select: none;\n     -moz-user-select: none;\n     -ms-user-select: none;\n     user-select: none;\n }\n\n a {\n     transition: all 0.3s ease;\n     color: #C5A46D;\n }\n\n a {\n     color: #337ab7;\n     text-decoration: none;\n }\n\n .room-container .room-box .details {\n     border-bottom: 1px solid #C5A46D;\n     position: relative;\n     padding: 40px 0 50px;\n     transition: all 0.5s ease;\n }\n\n .room-container .room-box .details .title {\n     color: #C5A46D;\n     font-size: 26px;\n     margin-bottom: 30px;\n     letter-spacing: -2px;\n }\n\n .room-container .room-box .details .title a {\n     color: #C5A46D;\n }\n\n .room-container .room-box .details .title span {\n     font-weight: bold;\n }\n\n .room-container .room-box .details .desc {\n     line-height: 30px;\n     max-width: 85%;\n     margin: 0 auto;\n }\n\n .room-container .room-box .details .price {\n     padding: 0 20px;\n     border: 1px solid #C5A46D;\n     background: #FFFFFF;\n     font-family: \"Lobster\", Arial, Helvetica, sans-serif;\n     position: absolute;\n     left: 50%;\n     bottom: -23px;\n     color: #C5A46D;\n     height: 45px;\n     line-height: 45px;\n     white-space: nowrap;\n     -webkit-transform: translateX(-50%);\n     transform: translateX(-50%);\n }\n\n .room-container .room-box .details .price span {\n     vertical-align: middle;\n     font-size: 30px;\n }\n\n .room-container .room-box:hover .img-container:before {\n     background: rgba(51, 51, 51, 0.6);\n }\n\n .room-container .room-box:hover .img-container img {\n     -webkit-transform: scale(1) translateY(-50%);\n     transform: scale(1) translateY(-50%);\n }\n\n .room-container .room-box:hover .img-container a.btn,\n .room-container .room-box:hover .img-container aside.sidebar .widget.widget_tag_cloud .tagcloud a,\n aside.sidebar .widget.widget_tag_cloud .tagcloud .room-container .room-box:hover .img-container a {\n     top: 50%;\n     visibility: visible;\n     opacity: 1;\n     filter: alpha(opacity=100);\n }\n\n .room-container .room-box:hover .details {\n     background-color: #f0f2f2;\n     border-color: #333333;\n }\n /* ------------------------------------------------------------- */\n\n #booking-reservation .title,\n #booking-confirmation .title {\n     color: #C5A46D;\n     line-height: 30px;\n     overflow: hidden;\n     font-size: 16px;\n }\n\n ul {\n     list-style: none;\n     padding: 0;\n     margin: 0;\n }\n\n #booking-reservation ul li,\n #booking-reservation .total-cost,\n #booking-confirmation ul li,\n #booking-confirmation .total-cost {\n     line-height: 40px;\n }\n\n #booking-reservation ul li .info,\n #booking-reservation .total-cost .info,\n #booking-confirmation ul li .info,\n #booking-confirmation .total-cost .info {\n     float: left;\n }\n\n #booking-reservation ul li:before,\n #booking-reservation ul li:after,\n #booking-reservation .total-cost:before,\n #booking-reservation .total-cost:after,\n #booking-confirmation ul li:before,\n #booking-confirmation ul li:after,\n #booking-confirmation .total-cost:before,\n #booking-confirmation .total-cost:after {\n     content: \" \";\n     display: table;\n }\n\n #booking-reservation ul li .value,\n #booking-reservation .total-cost .value,\n #booking-confirmation ul li .value,\n #booking-confirmation .total-cost .value {\n     float: right;\n     font: 18px/40px \"Lobster\", Arial, Helvetica, sans-serif;\n     color: #C5A46D;\n     text-align: right;\n     max-width: 250px;\n }\n\n #booking-reservation ul li:after,\n #booking-reservation .total-cost:after,\n #booking-confirmation ul li:after,\n #booking-confirmation .total-cost:after {\n     clear: both;\n }\n\n #booking-reservation ul li:before,\n #booking-reservation ul li:after,\n #booking-reservation .total-cost:before,\n #booking-reservation .total-cost:after,\n #booking-confirmation ul li:before,\n #booking-confirmation ul li:after,\n #booking-confirmation .total-cost:before,\n #booking-confirmation .total-cost:after {\n     content: \" \";\n     display: table;\n }\n\n #booking-reservation .title span:before,\n #booking-confirmation .title span:before {\n     display: block;\n     content: \"\";\n     background: #ecedee;\n     width: 500px;\n     height: 1px;\n     position: absolute;\n     left: 100%;\n     top: 15px;\n }\n\n #booking-reservation .field-container,\n #booking-confirmation .field-container {\n     margin-bottom: 14px;\n }\n\n #booking-reservation .field-container input,\n #booking-confirmation .field-container input {\n     width: 100%;\n     height: 40px;\n }\n\n input[type=\"text\"],\n input[type=\"email\"] {\n     padding: 0 15px;\n }\n\n #booking-tab-contents input[type=\"text\"],\n #booking-tab-contents input[type=\"email\"],\n #booking-tab-contents textarea,\n #booking-tab-contents .chosen-container {\n     border: 1px solid #C5A46D !important;\n     width: 100%;\n     height: 40px;\n     background: #FFFFFF;\n     color: #333333;\n }\n\n input,\n button,\n select,\n textarea {\n     font-family: inherit;\n     font-size: inherit;\n     line-height: inherit;\n }\n\n input {\n     line-height: normal;\n }\n\n button,\n input,\n optgroup,\n select,\n textarea {\n     color: inherit;\n     font: inherit;\n     margin: 0;\n }\n\n #booking-reservation .field-container,\n #booking-confirmation .field-container {\n     margin-bottom: 14px;\n }\n\n #booking-reservation .field-container textarea,\n #booking-confirmation .field-container textarea {\n     padding: 15px;\n     height: 257px;\n }\n\n input[type=\"text\"],\n input[type=\"email\"],\n textarea,\n .chosen-container {\n     border: 1px solid #C5A46D;\n     width: 100%;\n     height: 40px;\n     background: #FFFFFF;\n     color: #333333;\n }\n\n #booking-reservation .field-container.btn-field,\n #booking-confirmation .field-container.btn-field {\n     margin-top: -6px;\n }\n\n #booking-reservation .field-container,\n #booking-confirmation .field-container {\n     margin-bottom: 14px;\n }\n /* --------------------------************************************************ */\n\n .pay-tabs {\n     margin: 0 0 2em 0;\n     padding: 1em 1em 1.5em 1em;\n     background: #fff;\n     border: 1px solid #e7ebee;\n }\n\n .pay-tabs[_ngcontent-c3] {\n     margin: 0 0 2em 0;\n     padding: 1em 1em 1.5em 1em;\n     background: #fff;\n     border: 1px solid #e7ebee;\n     display: flow-root;\n     margin: 0 auto;\n     text-align: center;\n }\n\n .pay-tabs h2 {\n     font-size: 26px;\n     text-align: center;\n     margin-bottom: 25px;\n     color: #3AD5A0;\n     font-weight: 500;\n     font-family: 'Alegreya Sans', sans-serif;\n }\n\n .resp-tabs-list {\n     list-style: none;\n     margin: 0 0 0em 0;\n     padding: 0;\n     text-align: center;\n     margin: 0 auto;\n     width: 100%;\n }\n\n .resp-tab-item {\n     font-size: 14px;\n     text-decoration: none;\n     color: #a9acb1;\n     font-weight: 600;\n     cursor: pointer;\n     text-align: center;\n     list-style: none;\n     outline: none;\n     transition: all 0.3s ease-out;\n     text-transform: capitalize;\n     /* display: inline-block; */\n     margin: 0 auto;\n     float: left;\n     width: 25%;\n     text-align: center;\n }\n\n li.resp-tab-item span .pic1 {\n     background: url('https://GangawaneRavi.github.io/mybooking/assets/images/pic2.png') no-repeat 75px 10px #fafafa !important;\n }\n\n li.resp-tab-item span .pic2 {\n     background: url('https://GangawaneRavi.github.io/mybooking/assets/images/pic3.png') no-repeat 75px 10px #fafafa !important;\n }\n\n li.resp-tab-item span .pic3 {\n     background: url('https://GangawaneRavi.github.io/mybooking/assets/images/pic1.png') no-repeat 45px 10px #fafafa !important;\n }\n\n li.resp-tab-item span .pic4 {\n     background: url('https://GangawaneRavi.github.io/mybooking/assets/images/pic4.png') no-repeat 75px 10px #fafafa !important;\n }\n\n li.resp-tab-item span .pic1,\n li.resp-tab-item span .pic2,\n li.resp-tab-item span .pic3,\n li.resp-tab-item span .pic4 {\n     width: 100%;\n     height: 50px;\n     display: block;\n     border: 1px solid #e7ebee;\n     padding: 15px 0px;\n     margin-bottom: 15px;\n     cursor: pointer;\n }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/book-now/book-now.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5\" id=\"booking\">\n  <div class=\"heading-box\">\n    <h2>Book\n      <span>Now</span>\n    </h2>\n    <!-- Title -->\n    <div class=\"subtitle\">Our Best Staff And Our Best services</div>\n    <!-- Subtitle -->\n  </div>\n\n  <section>\n    <ngb-tabset>\n      <ngb-tab>\n\n        <ng-template ngbTabTitle>\n          <span class=\"number\">1</span>\n          <!-- Tab number -->\n          <span class=\"title\">Choose\n            <b>Date</b>\n          </span>\n          <!-- Tab title -->\n        </ng-template>\n        <ng-template ngbTabContent>\n\n          <div class=\"container fadeInUp mb-5\">\n            <div class=\"row\">\n              <div class=\"col-lg-4\">\n                <h4>\n                  <b>In</b> Date\n                </h4>\n                <div class=\"datectn text-center mx-auto\">\n                  <ngb-datepicker #dp [(ngModel)]=\"model\" (navigate)=\"date = $event.next\"></ngb-datepicker>\n                </div>\n\n\n              </div>\n              <div class=\"col-lg-4\">\n                <h4>\n                  <b>Out </b> Date\n                </h4>\n                <div class=\"datectn text-center mx-auto\">\n                  <ngb-datepicker #dp [(ngModel)]=\"model\" (navigate)=\"date = $event.next\"></ngb-datepicker>\n                </div>\n              </div>\n              <div class=\"col-lg-4\">\n                <h4>\n                  <b>More</b> Details\n                </h4>\n                <div class=\"moreD text-center mx-a uto\">\n                  <form>\n\n                    <div class=\"form-group\">\n                      <div class=\"input-group\">\n                        <input type=\"number\" class=\"form-control pl-4\" placeholder=\"Hours\">\n                      </div>\n                    </div>\n\n                    <div class=\"form-group\">\n                      <div class=\"input-group\">\n                        <input type=\"number\" class=\"form-control pl-4\" placeholder=\"Members\">\n                      </div>\n                    </div>\n\n\n\n                    <div class=\"text-center\">\n                      <button class=\"btn  btn-default waves-light w-100 m-0\" mdbRippleRadius>Check Availability</button>\n                    </div>\n\n                  </form>\n                </div>\n              </div>\n            </div>\n          </div>\n\n        </ng-template>\n      </ngb-tab>\n\n\n      <ngb-tab>\n\n        <ng-template ngbTabTitle>\n          <span class=\"number\">2</span>\n          <!-- Tab number -->\n          <span class=\"title\">Choose\n            <b>Hall</b>\n          </span>\n          <!-- Tab title -->\n        </ng-template>\n        <ng-template ngbTabContent>\n\n          <div class=\"room-container room-grid fadeInUp clearfix\">\n            <div class=\"row\">\n              <!-- Room Boxes -->\n              <div class=\"room-box col-lg-6\">\n                <div class=\"img-container\">\n                  <div class=\"check-box-container\">\n                    <input type=\"checkbox\" value=\"1\" id=\"room-1\">\n                    <label for=\"room-1\">\n                      <span></span>\n                      Select This\n                      <b>Room</b>\n                    </label>\n                  </div>\n                  <img src=\"/assets/images/1.jpg\" alt=\"1\">\n                  <a href=\"#\" class=\"btn btn-default\">More Details</a>\n                </div>\n                <div class=\"details\">\n                  <div class=\"title\">\n                    <a href=\"#\">Single\n                      <span>Room</span>\n                    </a>\n                  </div>\n                  <div class=\"desc\">\n                    Short description of rooms will be located in this section that you can describe some special features and equipment of rooms.\n                  </div>\n                  <div class=\"price\">\n                    <span>$240</span>\n                    - Per Night\n                  </div>\n                </div>\n              </div>\n\n              <!-- Room Boxes -->\n              <div class=\"room-box col-lg-6\">\n                <div class=\"img-container\">\n                  <div class=\"check-box-container\">\n                    <input type=\"checkbox\" value=\"2\" id=\"room-2\">\n                    <label for=\"room-2\">\n                      <span></span>\n                      Select This\n                      <b>Room</b>\n                    </label>\n                  </div>\n                  <img src=\"/assets/images/2.jpg\" alt=\"2\">\n                  <a href=\"#\" class=\"btn btn-default\">More Details</a>\n                </div>\n                <div class=\"details\">\n                  <div class=\"title\">\n                    <a href=\"#\">Double\n                      <span>Room</span>\n                    </a>\n                  </div>\n                  <div class=\"desc\">\n                    Short description of rooms will be located in this section that you can describe some special features and equipment of rooms.\n                  </div>\n                  <div class=\"price\">\n                    <span>$350</span>\n                    - Per Night\n                  </div>\n                </div>\n              </div>\n\n              <!-- Room Boxes -->\n              <div class=\"room-box col-lg-6\">\n                <div class=\"img-container\">\n                  <div class=\"check-box-container\">\n                    <input type=\"checkbox\" value=\"3\" id=\"room-3\">\n                    <label for=\"room-3\">\n                      <span></span>\n                      Select This\n                      <b>Room</b>\n                    </label>\n                  </div>\n                  <img src=\"/assets/images/3.jpg\" alt=\"\">\n                  <a href=\"#\" class=\"btn btn-default\">More Details</a>\n                </div>\n                <div class=\"details\">\n                  <div class=\"title\">\n                    <a href=\"#\">Deluxe\n                      <span>One-bedroom</span> Suite</a>\n                  </div>\n                  <div class=\"desc\">\n                    Short description of rooms will be located in this section that you can describe some special features and equipment of rooms.\n                  </div>\n                  <div class=\"price\">\n                    <span>$440</span>\n                    - Per Night\n                  </div>\n                </div>\n              </div>\n\n              <!-- Room Boxes -->\n              <div class=\"room-box col-lg-6\">\n                <div class=\"img-container\">\n                  <div class=\"check-box-container\">\n                    <input type=\"checkbox\" value=\"4\" id=\"room-4\">\n                    <label for=\"room-4\">\n                      <span></span>\n                      Select This\n                      <b>Room</b>\n                    </label>\n                  </div>\n                  <img src=\"/assets/images/4.jpg\" alt=\"\">\n                  <a href=\"#\" class=\"btn btn-default\">More Details</a>\n                </div>\n                <div class=\"details\">\n                  <div class=\"title\">\n                    <a href=\"#\">Deluxe\n                      <span>Two-bedroom</span> Suite</a>\n                  </div>\n                  <div class=\"desc\">\n                    Short description of rooms will be located in this section that you can describe some special features and equipment of rooms.\n                  </div>\n                  <div class=\"price\">\n                    <span>$480</span>\n                    - Per Night\n                  </div>\n                </div>\n              </div>\n\n\n\n\n            </div>\n          </div>\n\n        </ng-template>\n      </ngb-tab>\n\n      <ngb-tab>\n\n        <ng-template ngbTabTitle>\n\n          <span class=\"number\">3</span>\n          <!-- Tab number -->\n          <span class=\"title\">Reservation\n            <!-- <b>Date</b> -->\n          </span>\n          <!-- Tab title -->\n        </ng-template>\n        <ng-template ngbTabContent>\n\n          <div class=\"tab-pane fadeInUp clearfix active mb-5\" id=\"booking-reservation\">\n            <div class=\"row\">\n              <div class=\"reservation-summary col-md-4\">\n                <h4>Reservation\n                  <b>Summary</b>\n                </h4>\n                <div class=\"info-boxes\">\n                  <div class=\"title\">\n                    <span>Reservation\n                      <b>Info</b>\n                    </span>\n                  </div>\n                  <ul>\n                    <li>\n                      <div class=\"info\">Check in :</div>\n                      <div class=\"value\">2015-04-29</div>\n                    </li>\n                    <li>\n                      <div class=\"info\">Check out :</div>\n                      <div class=\"value\">2015-04-30</div>\n                    </li>\n                    <li>\n                      <div class=\"info\">Adult :</div>\n                      <div class=\"value\">1</div>\n                    </li>\n                    <li>\n                      <div class=\"info\">Child :</div>\n                      <div class=\"value\">0</div>\n                    </li>\n                  </ul>\n                  <div class=\"title\">\n                    <span>Room\n                      <b>Info</b>\n                    </span>\n                  </div>\n                  <ul>\n                    <li>\n                      <div class=\"info\">Deluxe One-bedroom Suite</div>\n                      <div class=\"value\">$214</div>\n                    </li>\n                  </ul>\n                  <div class=\"total-cost\">\n                    <div class=\"info\">Total Cost :</div>\n                    <div class=\"value\">$1,785</div>\n                  </div>\n\n                </div>\n              </div>\n              <div class=\"reservation-info col-md-8\">\n                <h4>Reservation\n                  <b>Info</b>\n                </h4>\n                <div class=\"row\">\n                  <div class=\"col-md-6\">\n                    <div>\n                      <div class=\"field-container\">\n                        <input type=\"text\" placeholder=\"First Name *\">\n                        <!-- First Name Field -->\n                      </div>\n                      <div class=\"field-container\">\n                        <input type=\"text\" placeholder=\"Last Name *\">\n                        <!-- Last Name Field -->\n                      </div>\n                      <div class=\"field-container\">\n                        <input type=\"email\" placeholder=\"Email *\">\n                        <!-- Email Field -->\n                      </div>\n                      <div class=\"field-container\">\n                        <input type=\"text\" placeholder=\"Phone *\">\n                        <!-- Phone Field -->\n                      </div>\n                      <div class=\"field-container\">\n                        <input type=\"text\" placeholder=\"City\">\n                        <!-- City Field -->\n                      </div>\n                      <div class=\"field-container\">\n                        <input type=\"text\" placeholder=\"Address\">\n                        <!-- Address Field -->\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <div class=\"pl-3\">\n                      <div class=\"field-container message-field\">\n                        <textarea id=\"message-field\" placeholder=\"Special Requirements\"></textarea>\n                        <!-- Special Requirements Field -->\n                      </div>\n                      <div class=\"field-container btn-field\">\n                        <input type=\"submit\" class=\"btn btn-default\" value=\"Submit\">\n                        <!-- Payment Button -->\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <!-- End of Guest Info form -->\n          </div>\n\n\n        </ng-template>\n      </ngb-tab>\n\n      <ngb-tab>\n\n        <ng-template ngbTabTitle>\n          <span class=\"number\">4</span>\n          <!-- Tab number -->\n          <span class=\"title\">Confirmation\n            <!-- <b>Date</b> -->\n          </span>\n          <!-- Tab title -->\n        </ng-template>\n        <ng-template ngbTabContent>\n          <div class=\"container\">\n            <div class=\"pay-tabs card mx-auto col-lg-8\">\n              <h2>Select Payment Method</h2>\n              <ul class=\"resp-tabs-list\">\n                <li class=\"resp-tab-item\" aria-controls=\"tab_item-0\" role=\"tab\">\n                  <span>\n                    <label class=\"pic1\"></label>Credit Card</span>\n                </li>\n                <li class=\"resp-tab-item\" aria-controls=\"tab_item-1\" role=\"tab\">\n                  <span>\n                    <label class=\"pic3\"></label>Net Banking</span>\n                </li>\n                <li class=\"resp-tab-item\" aria-controls=\"tab_item-2\" role=\"tab\">\n                  <span>\n                    <label class=\"pic4\"></label>PayPal</span>\n                </li>\n                <li class=\"resp-tab-item resp-tab-active\" aria-controls=\"tab_item-3\" role=\"tab\">\n                  <span>\n                    <label class=\"pic2\"></label>Debit Card</span>\n                </li>\n                <div class=\"clear\"></div>\n              </ul>\n            </div>\n\n            <div class=\"resp-tabs-container card mx-auto col-lg-8\" style=\"display: none;\">\n              <h2 class=\"resp-accordion resp-tab-active\" role=\"tab\" aria-controls=\"tab_item-0\">\n                <span class=\"resp-arrow\"></span>\n\n                Credit Card\n              </h2>\n              <div class=\"tab-1 resp-tab-content resp-tab-content-active\" aria-labelledby=\"tab_item-0\" style=\"display:block\">\n                <div class=\"payment-info\">\n                  <h3>Personal Information</h3>\n                  <form>\n                    <div class=\"tab-for\">\n                      <h5>EMAIL ADDRESS</h5>\n                      <input type=\"text\" value=\"\">\n                      <h5>FIRST NAME</h5>\n                      <input type=\"text\" value=\"\">\n                    </div>\n                  </form>\n                  <h3 class=\"pay-title\">Credit Card Info</h3>\n                  <form>\n                    <div class=\"tab-for\">\n                      <h5>NAME ON CARD</h5>\n                      <input type=\"text\" value=\"\">\n                      <h5>CARD NUMBER</h5>\n                      <input class=\"pay-logo\" type=\"text\" value=\"0000-0000-0000-0000\" onfocus=\"this.value = '';\" onblur=\"if (this.value == '') {this.value = '0000-0000-0000-0000';}\"\n                        required=\"\">\n                    </div>\n                    <div class=\"transaction\">\n                      <div class=\"tab-form-left user-form\">\n                        <h5>EXPIRATION</h5>\n                        <ul>\n                          <li>\n                            <input type=\"number\" class=\"text_box\" value=\"6\" min=\"1\">\n                          </li>\n                          <li>\n                            <input type=\"number\" class=\"text_box\" value=\"1988\" min=\"1\">\n                          </li>\n\n                        </ul>\n                      </div>\n                      <div class=\"tab-form-right user-form-rt\">\n                        <h5>CVV NUMBER</h5>\n                        <input type=\"text\" value=\"xxxx\" onfocus=\"this.value = '';\" onblur=\"if (this.value == '') {this.value = 'xxxx';}\" required=\"\">\n                      </div>\n                      <div class=\"clear\"></div>\n                    </div>\n                    <input type=\"submit\" value=\"SUBMIT\">\n                  </form>\n                  <div class=\"single-bottom\">\n                    <ul>\n                      <li>\n                        <input type=\"checkbox\" id=\"brand\" value=\"\">\n                        <label for=\"brand\">\n                          <span></span>By checking this box, I agree to the Terms &amp; Conditions &amp; Privacy Policy.</label>\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n              </div>\n              <h2 class=\"resp-accordion\" role=\"tab\" aria-controls=\"tab_item-1\">\n                <span class=\"resp-arrow\"></span>\n\n                Net Banking\n              </h2>\n              <div class=\"tab-1 resp-tab-content\" aria-labelledby=\"tab_item-1\">\n                <div class=\"payment-info\">\n                  <h3>Net Banking</h3>\n                  <div class=\"radio-btns\">\n                    <div class=\"swit\">\n                      <div class=\"check_box\">\n                        <div class=\"radio\">\n                          <label>\n                            <input type=\"radio\" name=\"radio\" checked=\"\">\n                            <i></i>Andhra Bank</label>\n                        </div>\n                      </div>\n                      <div class=\"check_box\">\n                        <div class=\"radio\">\n                          <label>\n                            <input type=\"radio\" name=\"radio\">\n                            <i></i>Allahabad Bank</label>\n                        </div>\n                      </div>\n                      <div class=\"check_box\">\n                        <div class=\"radio\">\n                          <label>\n                            <input type=\"radio\" name=\"radio\">\n                            <i></i>Bank of Baroda</label>\n                        </div>\n                      </div>\n                      <div class=\"check_box\">\n                        <div class=\"radio\">\n                          <label>\n                            <input type=\"radio\" name=\"radio\">\n                            <i></i>Canara Bank</label>\n                        </div>\n                      </div>\n                      <div class=\"check_box\">\n                        <div class=\"radio\">\n                          <label>\n                            <input type=\"radio\" name=\"radio\">\n                            <i></i>IDBI Bank</label>\n                        </div>\n                      </div>\n                      <div class=\"check_box\">\n                        <div class=\"radio\">\n                          <label>\n                            <input type=\"radio\" name=\"radio\">\n                            <i></i>Icici Bank</label>\n                        </div>\n                      </div>\n                      <div class=\"check_box\">\n                        <div class=\"radio\">\n                          <label>\n                            <input type=\"radio\" name=\"radio\">\n                            <i></i>Indian Overseas Bank</label>\n                        </div>\n                      </div>\n                      <div class=\"check_box\">\n                        <div class=\"radio\">\n                          <label>\n                            <input type=\"radio\" name=\"radio\">\n                            <i></i>Punjab National Bank</label>\n                        </div>\n                      </div>\n                      <div class=\"check_box\">\n                        <div class=\"radio\">\n                          <label>\n                            <input type=\"radio\" name=\"radio\">\n                            <i></i>South Indian Bank</label>\n                        </div>\n                      </div>\n                      <div class=\"check_box\">\n                        <div class=\"radio\">\n                          <label>\n                            <input type=\"radio\" name=\"radio\">\n                            <i></i>State Bank Of India</label>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"swit\">\n                      <div class=\"check_box\">\n                        <div class=\"radio\">\n                          <label>\n                            <input type=\"radio\" name=\"radio\" checked=\"\">\n                            <i></i>City Union Bank</label>\n                        </div>\n                      </div>\n                      <div class=\"check_box\">\n                        <div class=\"radio\">\n                          <label>\n                            <input type=\"radio\" name=\"radio\">\n                            <i></i>HDFC Bank</label>\n                        </div>\n                      </div>\n                      <div class=\"check_box\">\n                        <div class=\"radio\">\n                          <label>\n                            <input type=\"radio\" name=\"radio\">\n                            <i></i>IndusInd Bank</label>\n                        </div>\n                      </div>\n                      <div class=\"check_box\">\n                        <div class=\"radio\">\n                          <label>\n                            <input type=\"radio\" name=\"radio\">\n                            <i></i>Syndicate Bank</label>\n                        </div>\n                      </div>\n                      <div class=\"check_box\">\n                        <div class=\"radio\">\n                          <label>\n                            <input type=\"radio\" name=\"radio\">\n                            <i></i>Deutsche Bank</label>\n                        </div>\n                      </div>\n                      <div class=\"check_box\">\n                        <div class=\"radio\">\n                          <label>\n                            <input type=\"radio\" name=\"radio\">\n                            <i></i>Corporation Bank</label>\n                        </div>\n                      </div>\n                      <div class=\"check_box\">\n                        <div class=\"radio\">\n                          <label>\n                            <input type=\"radio\" name=\"radio\">\n                            <i></i>UCO Bank</label>\n                        </div>\n                      </div>\n                      <div class=\"check_box\">\n                        <div class=\"radio\">\n                          <label>\n                            <input type=\"radio\" name=\"radio\">\n                            <i></i>Indian Bank</label>\n                        </div>\n                      </div>\n                      <div class=\"check_box\">\n                        <div class=\"radio\">\n                          <label>\n                            <input type=\"radio\" name=\"radio\">\n                            <i></i>Federal Bank</label>\n                        </div>\n                      </div>\n                      <div class=\"check_box\">\n                        <div class=\"radio\">\n                          <label>\n                            <input type=\"radio\" name=\"radio\">\n                            <i></i>ING Vysya Bank</label>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"clear\"></div>\n                  </div>\n                  <a href=\"#\">Continue</a>\n                </div>\n              </div>\n              <h2 class=\"resp-accordion\" role=\"tab\" aria-controls=\"tab_item-2\">\n                <span class=\"resp-arrow\"></span>\n\n                PayPal\n              </h2>\n              <div class=\"tab-1 resp-tab-content\" aria-labelledby=\"tab_item-2\">\n                <div class=\"payment-info\">\n                  <h3>PayPal</h3>\n                  <h4>Already Have A PayPal Account?</h4>\n                  <div class=\"login-tab\">\n                    <div class=\"user-login\">\n                      <h2>Login</h2>\n\n                      <form>\n                        <input type=\"text\" value=\"name@email.com\" onfocus=\"this.value = '';\" onblur=\"if (this.value == '') {this.value = 'name@email.com';}\"\n                          required=\"\">\n                        <input type=\"password\" value=\"PASSWORD\" onfocus=\"this.value = '';\" onblur=\"if (this.value == '') {this.value = 'PASSWORD';}\"\n                          required=\"\">\n                        <div class=\"user-grids\">\n                          <div class=\"user-left\">\n                            <div class=\"single-bottom\">\n                              <ul>\n                                <li>\n                                  <input type=\"checkbox\" id=\"brand1\" value=\"\">\n                                  <label for=\"brand1\">\n                                    <span></span>Remember me?</label>\n                                </li>\n                              </ul>\n                            </div>\n                          </div>\n                          <div class=\"user-right\">\n                            <input type=\"submit\" value=\"LOGIN\">\n                          </div>\n                          <div class=\"clear\"></div>\n                        </div>\n                      </form>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <h2 class=\"resp-accordion\" role=\"tab\" aria-controls=\"tab_item-3\">\n                <span class=\"resp-arrow\"></span>\n\n                Debit Card\n              </h2>\n              <div class=\"tab-1 resp-tab-content\" aria-labelledby=\"tab_item-3\">\n                <div class=\"payment-info\">\n\n                  <h3 class=\"pay-title\">Dedit Card Info</h3>\n                  <form>\n                    <div class=\"tab-for\">\n                      <h5>NAME ON CARD</h5>\n                      <input type=\"text\" value=\"\">\n                      <h5>CARD NUMBER</h5>\n                      <input class=\"pay-logo\" type=\"text\" value=\"0000-0000-0000-0000\" onfocus=\"this.value = '';\" onblur=\"if (this.value == '') {this.value = '0000-0000-0000-0000';}\"\n                        required=\"\">\n                    </div>\n                    <div class=\"transaction\">\n                      <div class=\"tab-form-left user-form\">\n                        <h5>EXPIRATION</h5>\n                        <ul>\n                          <li>\n                            <input type=\"number\" class=\"text_box\" value=\"6\" min=\"1\">\n                          </li>\n                          <li>\n                            <input type=\"number\" class=\"text_box\" value=\"1988\" min=\"1\">\n                          </li>\n\n                        </ul>\n                      </div>\n                      <div class=\"tab-form-right user-form-rt\">\n                        <h5>CVV NUMBER</h5>\n                        <input type=\"text\" value=\"xxxx\" onfocus=\"this.value = '';\" onblur=\"if (this.value == '') {this.value = 'xxxx';}\" required=\"\">\n                      </div>\n                      <div class=\"clear\"></div>\n                    </div>\n                    <input type=\"submit\" value=\"SUBMIT\">\n                  </form>\n                  <div class=\"single-bottom\">\n                    <ul>\n                      <li>\n                        <input type=\"checkbox\" id=\"brand\" value=\"\">\n                        <label for=\"brand\">\n                          <span></span>By checking this box, I agree to the Terms &amp; Conditions &amp; Privacy Policy.</label>\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n        </ng-template>\n      </ngb-tab>\n\n\n    </ngb-tabset>\n  </section>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/book-now/book-now.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookNowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BookNowComponent = (function () {
    function BookNowComponent() {
    }
    BookNowComponent.prototype.ngOnInit = function () {
    };
    return BookNowComponent;
}());
BookNowComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-book-now',
        template: __webpack_require__("../../../../../src/app/book-now/book-now.component.html"),
        styles: [__webpack_require__("../../../../../src/app/book-now/book-now.component.css")]
    }),
    __metadata("design:paramtypes", [])
], BookNowComponent);

//# sourceMappingURL=book-now.component.js.map

/***/ }),

/***/ "../../../../../src/app/booking-card/booking-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".booking-form-container {\n    position: absolute;\n    left: 50%;\n    top: 0;\n    height: 100%;\n    -webkit-transform: translateX(-50%);\n    transform: translateX(-50%);\n}\n\n.booking-card {\n    background: rgba(255, 255, 255, 0.8);\n    position: absolute;\n    left: 15px;\n    top: 54%;\n    text-align: center;\n    color: #333333;\n    width: 380px;\n    height: auto;\n    border-radius: 0;\n    box-shadow: none;\n    -webkit-transform: translateX(0) translateY(-50%);\n    transform: translateX(0) translateY(-50%);\n    padding: 20px;\n}\n\nh2 {\n    color: #C5A46D;\n    margin-top: 0;\n}\n\nh2 {\n    font-weight: 300;\n    font-size: 30px;\n    margin: 20px 0 20px;\n}\n\nh2 span {\n    font-weight: bold;\n}\n\n.btn-default {\n    color: #FFFFFF;\n    background-color: #C5A46D;\n    border-color: #C5A46D;\n}\n\n.btn-default:hover,\n.btn-default:focus,\n.btn-default:active,\n.btn-default.active {\n    color: #FFFFFF;\n    background-color: #C5A46D !important;\n    border-color: #C5A46D;\n}\n\n.booking-card input {\n    border: 1px solid #aaaaaa\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/booking-card/booking-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container booking-form-container   mx-auto\">\n  <!--Card-->\n  <div class=\"card booking-card col-lg-4 mt-4 pt-2\">\n\n\n\n    <!--Card content-->\n    <div class=\"card-body\">\n      <!--Title-->\n      <h2>Find A\n        <span>Booking</span>\n      </h2>\n      <!--Text-->\n      <!--Register form-->\n      <form>\n\n        <div class=\"form-group\">\n          <div class=\"input-group\">\n            <input class=\"form-control pl-4\" placeholder=\"yyyy-mm-dd\" name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker #d1=\"ngbDatepicker\"\n              (click)=\"d1.toggle()\">\n\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"input-group\">\n            <input class=\"form-control pl-4\" placeholder=\"yyyy-mm-dd\" name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker #d2=\"ngbDatepicker\"\n              (click)=\"d2.toggle()\">\n\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"input-group\">\n            <input type=\"number\" class=\"form-control pl-4\" placeholder=\"Hours\">\n          </div>\n        </div>\n\n\n        <div class=\"form-group\">\n          <div class=\"input-group\">\n            <input type=\"number\" class=\"form-control pl-4\" placeholder=\"Members\">\n          </div>\n        </div>\n\n\n\n        <div class=\"text-center\">\n          <button class=\"btn  btn-default waves-light w-100 m-0\" mdbRippleRadius>Check Availability</button>\n        </div>\n\n      </form>\n      <div></div>\n      <!--/Register form-->\n\n    </div>\n\n  </div>\n  <!--/.Card-->\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/booking-card/booking-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BookingCardComponent = (function () {
    function BookingCardComponent() {
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' }
        ];
    }
    BookingCardComponent.prototype.ngOnInit = function () {
    };
    return BookingCardComponent;
}());
BookingCardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-booking-card',
        template: __webpack_require__("../../../../../src/app/booking-card/booking-card.component.html"),
        styles: [__webpack_require__("../../../../../src/app/booking-card/booking-card.component.css")]
    }),
    __metadata("design:paramtypes", [])
], BookingCardComponent);

//# sourceMappingURL=booking-card.component.js.map

/***/ }),

/***/ "../../../../../src/app/carousel/carousel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/carousel/carousel.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"height: 100% ;margin-top: -60px\">\n  <mdb-carousel class=\"carousel slide carousel-fade\" [animation]=\"'fade'\">\n    <!--First slide-->\n    <mdb-slide>\n      <div class=\"view hm-black-light\">\n        <img class=\"d-block w-100\" src=\"assets/images/1.jpg\" alt=\"First slide\">\n        <div class=\"mask waves-light\" mdbRippleRadius></div>\n      </div>\n      <!-- <div class=\"carousel-caption\">\n      <h3 class=\"h3-responsive\">Light mask</h3>\n      <p>First text</p>\n    </div> -->\n    </mdb-slide>\n    <!--/First slide-->\n    <!--Second slide-->\n    <mdb-slide>\n      <div class=\"view hm-black-strong\">\n        <img class=\"d-block w-100\" src=\"assets/images/2.jpg\" alt=\"Second slide\">\n        <div class=\"mask waves-light\" mdbRippleRadius></div>\n      </div>\n      <!-- <div class=\"carousel-caption\">\n      <h3 class=\"h3-responsive\">Strong mask</h3>\n      <p>Secondary text</p>\n    </div> -->\n    </mdb-slide>\n    <!--/Second slide-->\n    <!--Third slide-->\n    <mdb-slide>\n      <div class=\"view hm-black-slight\">\n        <img class=\"d-block w-100\" src=\"assets/images/3.jpg\" alt=\"Third slide\">\n        <div class=\"mask waves-light\" mdbRippleRadius></div>\n      </div>\n      <!-- <div class=\"carousel-caption\">\n      <h3 class=\"h3-responsive\">Slight mask</h3>\n      <p>Third text</p>\n    </div> -->\n    </mdb-slide>\n    <!--/Third slide-->\n  </mdb-carousel>\n</div>"

/***/ }),

/***/ "../../../../../src/app/carousel/carousel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CarouselComponent = (function () {
    function CarouselComponent() {
    }
    CarouselComponent.prototype.ngOnInit = function () {
    };
    return CarouselComponent;
}());
CarouselComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-carousel',
        template: __webpack_require__("../../../../../src/app/carousel/carousel.component.html"),
        styles: [__webpack_require__("../../../../../src/app/carousel/carousel.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CarouselComponent);

//# sourceMappingURL=carousel.component.js.map

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-header {\n  color: #fff;\n  text-align: center;\n  margin-top: -50px;\n  margin-bottom: 3rem;\n  padding: 1rem;\n  border-radius: 2px;\n}\n.card .card-body h3 {\n  margin-bottom: 0;\n  padding: .7rem;\n}\n.btn-floating {\n  z-index: 1;\n  overflow: hidden;\n  width: 47px;\n  height: 47px;\n  padding: 0;\n  border-radius: 50%;\n  background-color: #a6c;\n  transition: .3s;\n}\n.btn-floating.btn-sm,\n.btn-floating.btn-small,\n.btn-floating.wishlist {\n  width: 36.15px;\n  height: 36.15px;\n}\n.blue.accent-1 {\n  background-color: #82B1FF!important;\n}\n.btn-floating {\n  position: relative;\n  margin: 10px;\n}\n.btn-floating,\n.btn-floating.btn-flat.active,\n.btn:active,\n.btn:focus,\n.btn:hover,\n.card.card-cascade.card-avatar img,\n.card.card-cascade.wider.reverse .card-body,\n.colorful-select .dropdown-content li.active span,\n.comments-list .badge,\n.dropdown .dropdown-menu .dropdown-item:active,\n.dropdown .dropdown-menu .dropdown-item:hover,\n.form-header,\n.md-pills .nav-link.active:hover,\n.media .media-left img,\n.modal-dialog .modal-content,\n.modal-dialog.cascading-modal .modal-header,\n.nav-tabs,\n.picker__box .picker__table .picker--focused,\n.picker__box .picker__table .picker__day--selected,\n.picker__box .picker__table .picker__day--selected:hover,\n.pricing-card .header,\n.reply-form .badge,\n.z-depth-1-half,\nul.instagram-photos li img {\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n}\n.btn-floating.btn-small i,\n.btn-floating.wishlist i {\n  font-size: .96154rem;\n  line-height: 36.15px;\n}\n.btn-floating i {\n  width: inherit;\n  font-size: 1.25rem;\n  line-height: 47px;\n  text-align: center;\n}\n.btn-floating i {\n  display: inline-block;\n  color: #fff;\n}\n.md-form .prefix {\n  transition: color 0.2s;\n  position: absolute;\n  width: 3rem;\n  font-size: 1.5rem;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5\" id=\"contact\">\n  <div class=\"heading-box\">\n    <h2>Contact\n      <span>Us</span>\n    </h2>\n    <!-- Title -->\n    <div class=\"subtitle\">Our Best Staff And Our Best services</div>\n    <!-- Subtitle -->\n  </div>\n  <section class=\"section pb-1 mt-5\">\n\n    <h2 class=\"section-heading h1 pt-4\"> </h2>\n    <p class=\"section-description pb-4\"> </p>\n\n    <div class=\"row\">\n      <div class=\"col-lg-5 mb-4\">\n\n        <!--Form with header-->\n        <div class=\"card\">\n\n          <div class=\"card-body\">\n            <!--Header-->\n            <div class=\"form-header blue accent-1\">\n              <h3>\n                <i class=\"fa fa-envelope\"></i> Write to us:</h3>\n            </div>\n            <!-- <p>We'll write rarely, but only the best content.</p> -->\n            <br>\n\n            <!--Body-->\n            <div class=\"md-form\">\n              <i class=\"fa fa-user prefix grey-text\"></i>\n              <input mdbActive type=\"text\" id=\"form3\" class=\"form-control\">\n              <label for=\"form3\">Your name</label>\n            </div>\n\n            <div class=\"md-form\">\n              <i class=\"fa fa-envelope prefix grey-text\"></i>\n              <input mdbActive type=\"text\" id=\"form2\" class=\"form-control\">\n              <label for=\"form2\">Your email</label>\n            </div>\n\n            <div class=\"md-form\">\n              <i class=\"fa fa-tag prefix grey-text\"></i>\n              <input mdbActive type=\"text\" id=\"form32\" class=\"form-control\">\n              <label for=\"form34\">Subject</label>\n            </div>\n\n            <div class=\"md-form\">\n              <i class=\"fa fa-pencil prefix grey-text\"></i>\n              <textarea mdbActive type=\"text\" id=\"form8\" class=\"md-textarea\"></textarea>\n              <label for=\"form8\">Icon Prefix</label>\n            </div>\n\n            <div class=\"text-center\">\n              <button class=\"btn btn-light-blue waves-light\" mdbRippleRadius>Submit</button>\n            </div>\n\n          </div>\n\n        </div>\n        <!--Form with header-->\n\n      </div>\n      <div class=\"col-lg-7\">\n\n        <!--Google map-->\n        <div class=\"card p-0\">\n          <div class=\"card-body p-1 mx-auto\">\n            <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.4328424407745!2d73.83091924990843!3d18.509332174288197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfc2df9304fd%3A0x33c54d61d579b1ac!2sCodekul!5e0!3m2!1sen!2sin!4v1508825555442\"\n              width=\"600\" height=\"300\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>\n          </div>\n        </div>\n        <br>\n        <!--Buttons-->\n        <div class=\"row text-center\">\n          <div class=\"col-md-4\">\n            <a class=\"btn-floating blue accent-1 waves-light\" mdbRippleRadius>\n              <i class=\"fa fa-map-marker\"></i>\n            </a>\n            <p>\n              Codekul, 11/4, 2nd Floor, Opp. Indian Oil Petrol Pump, Near Nal Stop, Karve Road, Pune 411004, Maharashtra\n            </p>\n          </div>\n\n          <div class=\"col-md-4\">\n            <a class=\"btn-floating blue accent-1 waves-light\" mdbRippleRadius>\n              <i class=\"fa fa-phone\"></i>\n            </a>\n            <p>+91 7875330760</p>\n            <p>Open Today : 09 AM - 10 PM</p>\n          </div>\n\n          <div class=\"col-md-4\">\n            <a class=\"btn-floating blue accent-1 waves-light\" mdbRippleRadius>\n              <i class=\"fa fa-envelope\"></i>\n            </a>\n            <p>getin@codekul.com </p>\n            <p>sale@melayer.com</p>\n          </div>\n        </div>\n        <!--Grid column-->\n      </div>\n    </div>\n  </section>\n</div>"

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-contact',
        template: __webpack_require__("../../../../../src/app/contact/contact.component.html"),
        styles: [__webpack_require__("../../../../../src/app/contact/contact.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ContactComponent);

//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ "../../../../../src/app/gallery/gallery.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n}\n\n.gallery-container .image-main-box .item {\n    padding: 0 5px;\n    margin-bottom: 10px;\n}\n\n.gallery-container .image-main-box .item figure {\n    position: relative;\n    overflow: hidden;\n    padding: 1px;\n    width: 100%;\n    height: 100%;\n    border: 2px solid #FFFFFF;\n    transition: all 0.3s ease;\n    box-shadow: 0 0 0 2px #C5A46D, inset 0 0 0 1px #C5A46D;\n}\n.gallery-container .image-main-box .item figure img {\n    max-width: 100%;\n    transition: all 0.5s ease;\n}\n.gallery-container .image-main-box .item figure a {\n    display: block;\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    text-indent: -999999px;\n    overflow: hidden;\n    z-index: 11;\n}\n.gallery-container .image-main-box .item figcaption {\n    display: block;\n    position: absolute;\n    left: -10px;\n    top: 10px;\n    background: rgba(0, 0, 0, 0.8);\n    opacity: 0;\n    filter: alpha(opacity=0);\n    transition: all 0.5s ease;\n    width: calc(100% - 20px);\n    height: calc(100% - 20px);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gallery/gallery.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-4\" id=\"gallery\">\n  <div class=\"heading-box\">\n    <h2>Our\n      <span>gallery</span>\n    </h2>\n    <!-- Title -->\n    <div class=\"subtitle\">Our Best Staff And Our Best services</div>\n    <!-- Subtitle -->\n  </div>\n  <div class=\"container\">\n    <div class=\"gallery-container\">\n      <div class=\"sort-section\">\n        <div class=\"sort-section-container\">\n          <div class=\"sort-handle\">Filters</div>\n\n        </div>\n      </div>\n      <ul class=\"image-main-box clearfix\" style=\"position: relative; height: 860.016px;\">\n        <li class=\"item col-xs-6 col-md-4 lobby\" style=\"position: absolute; left: 0px; top: 0px;\">\n          <figure>\n            <img src=\"assets/images/1.jpg\" alt=\"11\">\n            <a href=\"assets/images/1.jpg\" class=\"more-details\" data-title=\"Great View\">Enlarge</a>\n            <figcaption>\n              <h4>\n                <span>Great</span> View</h4>\n            </figcaption>\n          </figure>\n        </li>\n        <li class=\"item col-xs-6 col-md-4 pool\" style=\"position: absolute; left: 380px; top: 0px;\">\n          <figure>\n            <img src=\"assets/images/2.jpg\" alt=\"11\">\n            <a href=\"assets/images/2.jpg\" class=\"more-details\" data-title=\"Cozy Spaces\">Enlarge</a>\n            <figcaption>\n              <h4>\n                <span>Cozy</span> Spaces</h4>\n            </figcaption>\n          </figure>\n        </li>\n        <li class=\"item col-xs-6 col-md-4 rooms\" style=\"position: absolute; left: 760px; top: 0px;\">\n          <figure>\n            <img src=\"assets/images/3.jpg\" alt=\"11\">\n            <a href=\"assets/images/3.jpg\" class=\"more-details\" data-title=\"Comfortable Rooms\">Enlarge</a>\n            <figcaption>\n              <h4>\n                <span>Comfortable </span> Rooms</h4>\n            </figcaption>\n          </figure>\n        </li>\n        <li class=\"item col-xs-6 col-md-4 pool\" style=\"position: absolute; left: 0px; top: 286px;\">\n          <figure>\n            <img src=\"assets/images/4.jpg\" alt=\"11\">\n            <a href=\"assets/images/4.jpg\" class=\"more-details\" data-title=\"Relaxation Spaces\">Enlarge</a>\n            <figcaption>\n              <h4>\n                <span>Relaxation</span> Spaces</h4>\n            </figcaption>\n          </figure>\n        </li>\n        <li class=\"item col-xs-6 col-md-4 pool\" style=\"position: absolute; left: 380px; top: 286px;\">\n          <figure>\n            <img src=\"assets/images/4.jpg\" alt=\"11\">\n            <a href=\"assets/images/4.jpg\" class=\"more-details\" data-title=\"Indoor Pool\">Enlarge</a>\n            <figcaption>\n              <h4>\n                <span>Outdoor</span> Pool </h4>\n            </figcaption>\n          </figure>\n        </li>\n        <li class=\"item col-xs-6 col-md-4 relaxation\" style=\"position: absolute; left: 760px; top: 286px;\">\n          <figure>\n            <img src=\"assets/images/4.jpg\" alt=\"11\">\n            <a href=\"assets/images/4.jpg\" class=\"more-details\" data-title=\"Indoor Pool\">Enlarge</a>\n            <figcaption>\n              <h4>\n                <span>Calm</span> &amp; Relax Space </h4>\n            </figcaption>\n          </figure>\n        </li>\n        <li class=\"item col-xs-6 col-md-4 relaxation\" style=\"position: absolute; left: 0px; top: 573px;\">\n          <figure>\n            <img src=\"assets/images/1.jpg\" alt=\"11\">\n            <a href=\"assets/images/1.jpg\" class=\"more-details\" data-title=\"Indoor Pool\">Enlarge</a>\n            <figcaption>\n              <h4>\n                <span>Enjoy</span> in Sunlight </h4>\n            </figcaption>\n          </figure>\n        </li>\n        <li class=\"item col-xs-6 col-md-4 lobby\" style=\"position: absolute; left: 380px; top: 573px;\">\n          <figure>\n            <img src=\"assets/images/2.jpg\" alt=\"11\">\n            <a href=\"assets/images/2.jpg\" class=\"more-details\" data-title=\"Indoor Pool\">Enlarge</a>\n            <figcaption>\n              <h4>\n                <span>Lobby</span> &amp; Great View </h4>\n            </figcaption>\n          </figure>\n        </li>\n        <li class=\"item col-xs-6 col-md-4 sauna\" style=\"position: absolute; left: 760px; top: 573px;\">\n          <figure>\n            <img src=\"assets/images/3.jpg\" alt=\"11\">\n            <a href=\"assets/images/3.jpg\" class=\"more-details\" data-title=\"Indoor Pool\">Enlarge</a>\n            <figcaption>\n              <h4>\n                <span>Sauna</span> &amp; Jacuzzi </h4>\n            </figcaption>\n          </figure>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/gallery/gallery.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GalleryComponent = (function () {
    function GalleryComponent() {
    }
    GalleryComponent.prototype.ngOnInit = function () {
    };
    return GalleryComponent;
}());
GalleryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-gallery',
        template: __webpack_require__("../../../../../src/app/gallery/gallery.component.html"),
        styles: [__webpack_require__("../../../../../src/app/gallery/gallery.component.css")]
    }),
    __metadata("design:paramtypes", [])
], GalleryComponent);

//# sourceMappingURL=gallery.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-carousel></app-carousel>\n<app-booking-card></app-booking-card>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, " a {\n     color: #ffffff;\n     margin: 0 10px;\n }\n\n .nav-bg {\n     background: rgba(226, 149, 62, 0.4);\n     /* background: rgba(255, 255, 255, 0.8); */\n }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ind igo nav-bg  bg-info  fixed-top\">\n  <div class=\"container clearfix  \">\n\n    <div class=\"list-inline float-left \">\n\n      <a href=\"#\">\n        <i class=\"fa fa-phone mr-2\"></i>+91 7875330760\n      </a>\n\n      <a href=\"#\">\n        <i class=\"fa fa-envelope-o mr-2\"></i>getin@codekul.com\n      </a>\n\n    </div>\n    <div class=\"list-inline float-right \">\n\n      <a href=\"#\">\n        <i class=\"fa fa-phone mr-2\"></i>+91 7875330760\n      </a>\n\n\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    return NavComponent;
}());
NavComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-nav',
        template: __webpack_require__("../../../../../src/app/nav/nav.component.html"),
        styles: [__webpack_require__("../../../../../src/app/nav/nav.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NavComponent);

//# sourceMappingURL=nav.component.js.map

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mdb-navbar /deep/ .nav-bg {\n    background: rgba(226, 149, 62, 0.4);\n    /* background: rgba(255, 255, 255, 0.4); */\n    color: #000000\n}\n\nmdb-navbar /deep/ .top-nav-collapse {\n    background: rgba(226, 149, 62, 1.4);\n}\n\nmdb-navbar /deep/ .top-nav-collapse .btn-default {\n    color: #FFFFFF;\n    background-color: #33b5e5 !important;\n    border-color: #C5A46D;\n}\n\n.btn-default {\n    color: #FFFFFF;\n    background-color: #C5A46D !important;\n    border-color: #C5A46D;\n}\n\n.btn-default:hover,\n.btn-default:focus,\n.btn-default:active,\n.btn-default.active {\n    color: #FFFFFF;\n    background-color: #C5A46D !important;\n    border-color: #C5A46D;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<mdb-navbar SideClass=\"navbar navbar-expand-lg navbar-dark ind igo  nav-bg fixed-top scrolling-navbar mt-4  \">\n  <logo>\n    <a class=\"navbar-brand\" href=\"#\">\n      <strong> Booking</strong>\n    </a>\n  </logo>\n  <links>\n    <div class=\"collapse navbar-collapse\">\n      <ul class=\"navbar-nav ml-auto mt-lg-0\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"#\">Home\n            <span class=\"sr-only\">(current)</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#about\">About us</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#gallery\">Gallery</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#contact\">Contact</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link btn-default\" href=\"#booking\">Book Now</a>\n        </li>\n      </ul>\n    </div>\n  </links>\n</mdb-navbar>"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/services.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/services/services.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <!--Section: Features v.1-->\n  <section class=\"section feature-box\">\n\n    <!--Section heading-->\n    <h1 class=\"section-heading pt-4\">Our Services </h1>\n    <!-- <h1 class=\"section-heading pt-4\">Why is it so great?</h1> -->\n    <!--Section description-->\n    <p class=\"section-description lead grey-text\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n      Ut enim ad minim veniam.</p>\n\n    <!--Grid row-->\n    <div class=\"row features-big\">\n\n      <!--Grid column-->\n      <div class=\"col-md-3 mb-r\">\n        <i class=\"fa fa-area-chart red-text\"></i>\n        <h5 class=\"feature-title\">Analytics</h5>\n        <p class=\"grey-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda deleniti\n          hic.\n        </p>\n      </div>\n      <!--Grid column-->\n\n      <!--Grid column-->\n      <div class=\"col-md-3 mb-r\">\n        <i class=\"fa fa-book cyan-text\"></i>\n        <h5 class=\"feature-title\">Tutorials</h5>\n        <p class=\"grey-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda deleniti\n          hic.\n        </p>\n      </div>\n      <!--Grid column-->\n\n      <!--Grid column-->\n      <div class=\"col-md-3 mb-r\">\n        <i class=\"fa fa-coffee orange-text\"></i>\n        <h5 class=\"feature-title\">Relax</h5>\n        <p class=\"grey-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda deleniti\n          hic.\n        </p>\n      </div>\n      <!--Grid column-->\n\n      <!--Grid column-->\n      <div class=\"col-md-3 mb-r\">\n        <i class=\"fa fa-coffee orange-text\"></i>\n        <h5 class=\"feature-title\">Relax</h5>\n        <p class=\"grey-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda deleniti\n          hic.\n        </p>\n      </div>\n      <!--Grid column-->\n\n    </div>\n    <!--Grid row-->\n\n  </section>\n  <!--Section: Features v.1-->\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/services/services.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServicesComponent = (function () {
    function ServicesComponent() {
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    return ServicesComponent;
}());
ServicesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-services',
        template: __webpack_require__("../../../../../src/app/services/services.component.html"),
        styles: [__webpack_require__("../../../../../src/app/services/services.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ServicesComponent);

//# sourceMappingURL=services.component.js.map

/***/ }),

/***/ "../../../../../src/app/staff/staff.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".section.team-section .avatar .rounded-circle {\n    max-width: 170px;\n}\n\n.icons-sm {\n    padding: .5rem;\n    margin: .5rem;\n    font-size: 1.2rem;\n}\n\n.fb-ic {\n    color: #3B5998!important;\n}\n\n.tw-ic {\n    color: #55ACEE!important;\n}\n\n.ins-ic {\n    color: #2E5E86!important;\n}\n\n.li-ic {\n    color: #0082CA!important;\n}\n\n.gplus-ic {\n    color: #DD4B39!important;\n}\n\n.dribbble-ic {\n    color: #EC4A89!important;\n}\n\n.email-ic {\n    color: #4B515D!important;\n}\n\n.git-ic {\n    color: #333!important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/staff/staff.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <section class=\"section team-section pb-3\">\n\n    <!--Section heading-->\n    <h2 class=\"section-heading h1 pt-4\">Our Staff</h2>\n    <!--Section description-->\n    <p class=\"section-description\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi,\n      veritatis totam voluptas nostrum quisquam eum porro a pariatur accusamus veniam.</p>\n\n    <!--Grid row-->\n    <div class=\"row text-center\">\n\n      <!--Grid column-->\n      <div class=\"col-lg-3 col-md-6 mb-r\">\n\n        <div class=\"avatar\">\n          <img src=\"https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg\" class=\"rounded-circle z-depth-1\" alt=\"First sample avatar image\">\n        </div>\n        <h4>Anna Deynah</h4>\n        <h6 class=\"font-bold blue-text\">Web Designer</h6>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur.</p>\n\n        <!--Facebook-->\n        <a class=\"icons-sm fb-ic\">\n          <i class=\"fa fa-facebook\"> </i>\n        </a>\n        <!--Twitter-->\n        <a class=\"icons-sm tw-ic\">\n          <i class=\"fa fa-twitter\"> </i>\n        </a>\n        <!--Instagram-->\n        <a class=\"icons-sm ins-ic\">\n          <i class=\"fa fa-instagram\"> </i>\n        </a>\n\n      </div>\n      <!--Grid column-->\n\n      <!--Grid column-->\n      <div class=\"col-lg-3 col-md-6 mb-r\">\n\n        <div class=\"avatar\">\n          <img src=\"https://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg\" class=\"rounded-circle z-depth-1\" alt=\"Second sample avatar image\">\n        </div>\n        <h4>John Doe</h4>\n        <h6 class=\"font-bold blue-text\">Web Developer</h6>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur.</p>\n\n        <!--Linkedin-->\n        <a class=\"icons-sm li-ic\">\n          <i class=\"fa fa-linkedin\"> </i>\n        </a>\n        <!--Facebook-->\n        <a class=\"icons-sm fb-ic\">\n          <i class=\"fa fa-facebook\"> </i>\n        </a>\n        <!--Dribbble-->\n        <a class=\"icons-sm dribbble-ic\">\n          <i class=\"fa fa-dribbble\"> </i>\n        </a>\n\n      </div>\n      <!--Grid column-->\n\n      <!--Grid column-->\n      <div class=\"col-lg-3 col-md-6 mb-r\">\n\n        <div class=\"avatar\">\n          <img src=\"https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg\" class=\"rounded-circle z-depth-1\" alt=\"Third sample avatar image\">\n        </div>\n        <h4>Maria Kate</h4>\n        <h6 class=\"font-bold blue-text\">Photographer</h6>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur.</p>\n\n        <!--Facebook-->\n        <a class=\"icons-sm fb-ic\">\n          <i class=\"fa fa-facebook\"> </i>\n        </a>\n        <!--Pinterest-->\n        <a class=\"icons-sm tw-ic\">\n          <i class=\"fa fa-twitter\"> </i>\n        </a>\n        <!--Email-->\n        <a class=\"icons-sm email-ic\">\n          <i class=\"fa fa-envelope-o\"> </i>\n        </a>\n\n      </div>\n      <!--Grid column-->\n\n      <!--Grid column-->\n      <div class=\"col-lg-3 col-md-6 mb-r\">\n\n        <div class=\"avatar\">\n          <img src=\"https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg\" class=\"rounded-circle z-depth-1\" alt=\"Fourth sample avatar image\">\n        </div>\n        <h4>Tom Williams</h4>\n        <h6 class=\"font-bold blue-text\">Front-end Developer</h6>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur.</p>\n\n        <!--Google +-->\n        <a class=\"icons-sm gplus-ic\">\n          <i class=\"fa fa-google-plus\"> </i>\n        </a>\n        <!--Facebook-->\n        <a class=\"icons-sm fb-ic\">\n          <i class=\"fa fa-facebook\"> </i>\n        </a>\n        <!--GitHub-->\n        <a class=\"icons-sm git-ic\">\n          <i class=\"fa fa-github\"> </i>\n        </a>\n\n      </div>\n      <!--Grid column-->\n\n    </div>\n    <!--Grid row-->\n\n  </section>\n  <!--Section: Team v.1-->\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/staff/staff.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaffComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StaffComponent = (function () {
    function StaffComponent() {
    }
    StaffComponent.prototype.ngOnInit = function () {
    };
    return StaffComponent;
}());
StaffComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-staff',
        template: __webpack_require__("../../../../../src/app/staff/staff.component.html"),
        styles: [__webpack_require__("../../../../../src/app/staff/staff.component.css")]
    }),
    __metadata("design:paramtypes", [])
], StaffComponent);

//# sourceMappingURL=staff.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map