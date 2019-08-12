(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _app_spellbook_spellbook_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/spellbook/spellbook.component */ "./src/app/spellbook/spellbook.component.ts");
/* harmony import */ var _app_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app/contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _app_team_page_team_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app/team-page/team-page.component */ "./src/app/team-page/team-page.component.ts");







var routes = [
    { path: 'home', component: _app_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'spellbook', component: _app_spellbook_spellbook_component__WEBPACK_IMPORTED_MODULE_4__["SpellbookComponent"] },
    { path: 'contact', component: _app_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"] },
    { path: 'team', component: _app_team_page_team_page_component__WEBPACK_IMPORTED_MODULE_6__["TeamPageComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-navbar></app-navbar>\n<div class=\"body\">\n    <router-outlet></router-outlet>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  height: 100%;\n  padding: 0px;\n  flex-flow: column nowrap;\n  align-content: flex-start;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYWlnZXphbGVwcGEvd2l0Y2gtb2Ytd2NhZy9zcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcbn0iLCIuYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDBweDtcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuIl19 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _spellbook_spellbook_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./spellbook/spellbook.component */ "./src/app/spellbook/spellbook.component.ts");
/* harmony import */ var _team_page_team_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./team-page/team-page.component */ "./src/app/team-page/team-page.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _spellbook_spellbook_component__WEBPACK_IMPORTED_MODULE_8__["SpellbookComponent"],
                _team_page_team_page_component__WEBPACK_IMPORTED_MODULE_9__["TeamPageComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bottom-bar\">\n  Created with ❤️ by Paige Zaleppa <br>\n  Background cred: Photo by Artem Maltsev on Unsplash \n</div>\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.less":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.less ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap');\nbody {\n  margin: 0px;\n  background: #E8E8E8;\n  font-family: 'Source Sans Pro', sans-serif;\n}\nh1 {\n  font-size: 36pt;\n}\nh2 {\n  font-size: 33pt;\n}\nh3 {\n  font-size: 30pt;\n}\nh4 {\n  font-size: 27pt;\n}\n.bottom-bar {\n  background-color: #505050;\n  color: white;\n  width: 100%;\n  align-content: center;\n  text-align: center;\n  height: 50px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5sZXNzIiwiL1VzZXJzL3BhaWdlemFsZXBwYS93aXRjaC1vZi13Y2FnL3NyYy9zdHlsZXMubGVzcyIsIi9Vc2Vycy9wYWlnZXphbGVwcGEvd2l0Y2gtb2Ytd2NhZy9zcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtRkNBa0I7QUFDbEI7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtBRENKO0FDbUJBO0VBQ0ksZUFBQTtBRGpCSjtBQ21CQTtFQUNJLGVBQUE7QURqQko7QUNtQkE7RUFDSSxlQUFBO0FEakJKO0FDbUJBO0VBQ0ksZUFBQTtBRGpCSjtBRWhCQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBRmtCSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9U291cmNlK1NhbnMrUHJvJmRpc3BsYXk9c3dhcCcpO1xuYm9keSB7XG4gIG1hcmdpbjogMHB4O1xuICBiYWNrZ3JvdW5kOiAjRThFOEU4O1xuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XG59XG5oMSB7XG4gIGZvbnQtc2l6ZTogMzZwdDtcbn1cbmgyIHtcbiAgZm9udC1zaXplOiAzM3B0O1xufVxuaDMge1xuICBmb250LXNpemU6IDMwcHQ7XG59XG5oNCB7XG4gIGZvbnQtc2l6ZTogMjdwdDtcbn1cbi5ib3R0b20tYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUwNTA1MDtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogNTBweDtcbn1cbiIsIkBpbXBvcnQgKGNzcykgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9U291cmNlK1NhbnMrUHJvJmRpc3BsYXk9c3dhcCcpO1xuYm9keSB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgYmFja2dyb3VuZDogI0U4RThFODtcbiAgICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XG59XG4vLyBHcmV5IGFjY2VudHNcbkBkYXJrLWdyZXk6ICM3ODc4Nzg7IFxuQGxpZ2h0LWdyZXk6ICNCRUJFQkU7XG5Ac21va2Utc2NyZWVuOiAjRjVGNUY1O1xuXG4vLyBHcmV5IGJhY2tncm91bmRzXG5AbmF2YmFyLWdyZXk6ICM1MDUwNTA7XG5cbi8vZm9udC1zaXplc1xuQHNtYWxsZXN0OiAxMHB0O1xuQHNtYWxsZXI6IDEycHQ7XG5Ac21hbGw6IDE0cHQ7XG5Abm9ybWFsOiAxNnB0O1xuQGxhcmdlOiAxOHB0O1xuQGxhcmdlcjogMjBwdDtcbkBsYXJnZXN0OiAyNHB0O1xuXG4vLyB0aXRsZSBzaXplcyBcbmgxIHtcbiAgICBmb250LXNpemU6IDM2cHQ7XG59XG5oMiB7XG4gICAgZm9udC1zaXplOiAzM3B0O1xufVxuaDMge1xuICAgIGZvbnQtc2l6ZTogMzBwdDtcbn1cbmg0IHtcbiAgICBmb250LXNpemU6IDI3cHQ7XG59XG5cblxuIiwiQGltcG9ydCAnLi4vLi4vLi4vc3R5bGVzLmxlc3MnO1xuLmJvdHRvbS1iYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBuYXZiYXItZ3JleTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDUwcHg7XG59Il19 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.less */ "./src/app/components/footer/footer.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"skip-link\">Skip directly to site content</button>\n<div role=\"navigation\" class=\"topbar\">\n  <img class=\"logo\" width=\"100\" alt=\"Witch of WCAG Logo\" src=\"../assets/small-grey-logo.jpg\">\n  <p class=\"left-message\">Because accessibility doesn't have to involve magic</p>\n</div>\n<div class=\"navigation-bar\">\n    <a routerLink=\"/home\" class=\"nav-link\" aria-label=\"Home\">HOME</a>\n    <a routerLink=\"/team\" class=\"nav-link\" aria-label=\"Who we are\">WHO WE ARE</a>\n    <a routerLink=\"/spellbook\" class=\"nav-link\" aria-label=\"508 Spellbook\">508 SPELLBOOK</a>\n    <a routerLink=\"/contact\" class=\"nav-link\" aria-label=\"Contact\">CONTACT</a>\n  </div>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.less":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.less ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap');\nbody {\n  margin: 0px;\n  background: #E8E8E8;\n  font-family: 'Source Sans Pro', sans-serif;\n}\nh1 {\n  font-size: 36pt;\n}\nh2 {\n  font-size: 33pt;\n}\nh3 {\n  font-size: 30pt;\n}\nh4 {\n  font-size: 27pt;\n}\n.skip-link {\n  left: -100px;\n  position: absolute;\n  top: auto;\n  width: 0;\n  height: 0;\n  z-index: -1;\n}\n.skip-link:focus,\n.skip-link:active {\n  color: #505050;\n  background-color: white;\n  left: auto;\n  width: 25%;\n  height: auto;\n  overflow: auto;\n  margin: 10px;\n  padding: 5px;\n  text-align: center;\n  font-size: 16px;\n  z-index: 999;\n}\n.topbar {\n  position: relative;\n  width: 100%;\n  margin: 0;\n  padding-bottom: 10px;\n  height: 80px;\n  background: #505050;\n  color: white;\n  overflow: hidden;\n}\n.topbar .logo {\n  padding: 10px;\n}\n.topbar .left-message {\n  display: block;\n  float: right;\n  padding: 20px;\n  color: white;\n  font-size: 18pt;\n  text-transform: uppercase;\n  font-weight: bold;\n}\n.navigation-bar {\n  padding: 5px;\n  background-color: white;\n  width: 100%;\n}\n.navigation-bar .nav-link {\n  color: black;\n  padding: 20px;\n  font-size: 18pt;\n  text-decoration: none;\n  font-weight: bold;\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5sZXNzIiwiL1VzZXJzL3BhaWdlemFsZXBwYS93aXRjaC1vZi13Y2FnL3NyYy9zdHlsZXMubGVzcyIsIi9Vc2Vycy9wYWlnZXphbGVwcGEvd2l0Y2gtb2Ytd2NhZy9zcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtRkNBa0I7QUFDbEI7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtBRENKO0FDbUJBO0VBQ0ksZUFBQTtBRGpCSjtBQ21CQTtFQUNJLGVBQUE7QURqQko7QUNtQkE7RUFDSSxlQUFBO0FEakJKO0FDbUJBO0VBQ0ksZUFBQTtBRGpCSjtBRWZBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBRmlCRjtBRWRBOztFQUNFLGNBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUZpQkY7QUVkQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBRmdCRjtBRXhCQTtFQVdNLGFBQUE7QUZnQk47QUUzQkE7RUFlSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUZlSjtBRVZBO0VBQ0UsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBRllGO0FFZkE7RUFNTSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBRllOIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Tb3VyY2UrU2FucytQcm8mZGlzcGxheT1zd2FwJyk7XG5ib2R5IHtcbiAgbWFyZ2luOiAwcHg7XG4gIGJhY2tncm91bmQ6ICNFOEU4RTg7XG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcbn1cbmgxIHtcbiAgZm9udC1zaXplOiAzNnB0O1xufVxuaDIge1xuICBmb250LXNpemU6IDMzcHQ7XG59XG5oMyB7XG4gIGZvbnQtc2l6ZTogMzBwdDtcbn1cbmg0IHtcbiAgZm9udC1zaXplOiAyN3B0O1xufVxuLnNraXAtbGluayB7XG4gIGxlZnQ6IC0xMDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IGF1dG87XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIHotaW5kZXg6IC0xO1xufVxuLnNraXAtbGluazpmb2N1cyxcbi5za2lwLWxpbms6YWN0aXZlIHtcbiAgY29sb3I6ICM1MDUwNTA7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBsZWZ0OiBhdXRvO1xuICB3aWR0aDogMjUlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG92ZXJmbG93OiBhdXRvO1xuICBtYXJnaW46IDEwcHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHotaW5kZXg6IDk5OTtcbn1cbi50b3BiYXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJhY2tncm91bmQ6ICM1MDUwNTA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi50b3BiYXIgLmxvZ28ge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLnRvcGJhciAubGVmdC1tZXNzYWdlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZsb2F0OiByaWdodDtcbiAgcGFkZGluZzogMjBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE4cHQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLm5hdmlnYXRpb24tYmFyIHtcbiAgcGFkZGluZzogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubmF2aWdhdGlvbi1iYXIgLm5hdi1saW5rIHtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAyMHB4O1xuICBmb250LXNpemU6IDE4cHQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuIiwiQGltcG9ydCAoY3NzKSB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Tb3VyY2UrU2FucytQcm8mZGlzcGxheT1zd2FwJyk7XG5ib2R5IHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBiYWNrZ3JvdW5kOiAjRThFOEU4O1xuICAgIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcbn1cbi8vIEdyZXkgYWNjZW50c1xuQGRhcmstZ3JleTogIzc4Nzg3ODsgXG5AbGlnaHQtZ3JleTogI0JFQkVCRTtcbkBzbW9rZS1zY3JlZW46ICNGNUY1RjU7XG5cbi8vIEdyZXkgYmFja2dyb3VuZHNcbkBuYXZiYXItZ3JleTogIzUwNTA1MDtcblxuLy9mb250LXNpemVzXG5Ac21hbGxlc3Q6IDEwcHQ7XG5Ac21hbGxlcjogMTJwdDtcbkBzbWFsbDogMTRwdDtcbkBub3JtYWw6IDE2cHQ7XG5AbGFyZ2U6IDE4cHQ7XG5AbGFyZ2VyOiAyMHB0O1xuQGxhcmdlc3Q6IDI0cHQ7XG5cbi8vIHRpdGxlIHNpemVzIFxuaDEge1xuICAgIGZvbnQtc2l6ZTogMzZwdDtcbn1cbmgyIHtcbiAgICBmb250LXNpemU6IDMzcHQ7XG59XG5oMyB7XG4gICAgZm9udC1zaXplOiAzMHB0O1xufVxuaDQge1xuICAgIGZvbnQtc2l6ZTogMjdwdDtcbn1cblxuXG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzLmxlc3NcIjsgXG5cbi5za2lwLWxpbmsge1xuICBsZWZ0OiAtMTAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiBhdXRvO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICB6LWluZGV4OiAtMTtcbn1cblxuLnNraXAtbGluazpmb2N1cywgLnNraXAtbGluazphY3RpdmUge1xuICBjb2xvcjogQG5hdmJhci1ncmV5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbGVmdDogYXV0bztcbiAgd2lkdGg6IDI1JTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBvdmVyZmxvdzphdXRvO1xuICBtYXJnaW46IDEwcHg7XG4gIHBhZGRpbmc6NXB4O1xuICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB6LWluZGV4Ojk5OTtcbn1cbi8vIGZpeGVkIHBvc2l0aW9uIG5hdiBiYXJcbi50b3BiYXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJhY2tncm91bmQ6QG5hdmJhci1ncmV5O1xuICBjb2xvcjogd2hpdGU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgLmxvZ28ge1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgfVxuXG4gIC5sZWZ0LW1lc3NhZ2Uge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IEBsYXJnZTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5cbn1cblxuLm5hdmlnYXRpb24tYmFyIHtcbiAgcGFkZGluZzogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDEwMCU7IFxuXG4gIC5uYXYtbGluayB7XG4gICAgICBjb2xvcjogYmxhY2s7XG4gICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgZm9udC1zaXplOiBAbGFyZ2U7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbiAgXG4gICAiXX0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.less */ "./src/app/components/navbar/navbar.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"splash\">\n  <h1 class=\"title\">Contact Us</h1>\n</div>\n"

/***/ }),

/***/ "./src/app/contact/contact.component.less":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.less ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap');\nbody {\n  margin: 0px;\n  background: #E8E8E8;\n  font-family: 'Source Sans Pro', sans-serif;\n}\nh1 {\n  font-size: 36pt;\n}\nh2 {\n  font-size: 33pt;\n}\nh3 {\n  font-size: 30pt;\n}\nh4 {\n  font-size: 27pt;\n}\n.splash {\n  background: url('splash.jpg') no-repeat;\n  background-size: cover;\n  background-position: right 35% center;\n  width: 100%;\n  position: relative;\n  padding: 0px;\n  height: 300px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  box-sizing: border-box;\n  z-index: -1;\n}\n.splash:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  color: black;\n  background: #F5F5F5;\n  opacity: 0.8;\n  z-index: 1;\n}\n.splash .title {\n  color: black;\n  z-index: 10;\n  padding: 5px;\n  margin: 0px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5sZXNzIiwiL1VzZXJzL3BhaWdlemFsZXBwYS93aXRjaC1vZi13Y2FnL3NyYy9zdHlsZXMubGVzcyIsIi9Vc2Vycy9wYWlnZXphbGVwcGEvd2l0Y2gtb2Ytd2NhZy9zcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtRkNBa0I7QUFDbEI7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtBRENKO0FDbUJBO0VBQ0ksZUFBQTtBRGpCSjtBQ21CQTtFQUNJLGVBQUE7QURqQko7QUNtQkE7RUFDSSxlQUFBO0FEakJKO0FDbUJBO0VBQ0ksZUFBQTtBRGpCSjtBRWhCQTtFQUNJLHVDQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQ0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBRmtCSjtBRWhCSTtFQUVJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBRmlCUjtBRTNDQTtFQThCUSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FGZ0JSIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Tb3VyY2UrU2FucytQcm8mZGlzcGxheT1zd2FwJyk7XG5ib2R5IHtcbiAgbWFyZ2luOiAwcHg7XG4gIGJhY2tncm91bmQ6ICNFOEU4RTg7XG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcbn1cbmgxIHtcbiAgZm9udC1zaXplOiAzNnB0O1xufVxuaDIge1xuICBmb250LXNpemU6IDMzcHQ7XG59XG5oMyB7XG4gIGZvbnQtc2l6ZTogMzBwdDtcbn1cbmg0IHtcbiAgZm9udC1zaXplOiAyN3B0O1xufVxuLnNwbGFzaCB7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL3NwbGFzaC5qcGcnKSBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IDM1JSBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHotaW5kZXg6IC0xO1xufVxuLnNwbGFzaDphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kOiAjRjVGNUY1O1xuICBvcGFjaXR5OiAwLjg7XG4gIHotaW5kZXg6IDE7XG59XG4uc3BsYXNoIC50aXRsZSB7XG4gIGNvbG9yOiBibGFjaztcbiAgei1pbmRleDogMTA7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luOiAwcHg7XG59XG4iLCJAaW1wb3J0IChjc3MpIHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVNvdXJjZStTYW5zK1BybyZkaXNwbGF5PXN3YXAnKTtcbmJvZHkge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGJhY2tncm91bmQ6ICNFOEU4RTg7XG4gICAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xufVxuLy8gR3JleSBhY2NlbnRzXG5AZGFyay1ncmV5OiAjNzg3ODc4OyBcbkBsaWdodC1ncmV5OiAjQkVCRUJFO1xuQHNtb2tlLXNjcmVlbjogI0Y1RjVGNTtcblxuLy8gR3JleSBiYWNrZ3JvdW5kc1xuQG5hdmJhci1ncmV5OiAjNTA1MDUwO1xuXG4vL2ZvbnQtc2l6ZXNcbkBzbWFsbGVzdDogMTBwdDtcbkBzbWFsbGVyOiAxMnB0O1xuQHNtYWxsOiAxNHB0O1xuQG5vcm1hbDogMTZwdDtcbkBsYXJnZTogMThwdDtcbkBsYXJnZXI6IDIwcHQ7XG5AbGFyZ2VzdDogMjRwdDtcblxuLy8gdGl0bGUgc2l6ZXMgXG5oMSB7XG4gICAgZm9udC1zaXplOiAzNnB0O1xufVxuaDIge1xuICAgIGZvbnQtc2l6ZTogMzNwdDtcbn1cbmgzIHtcbiAgICBmb250LXNpemU6IDMwcHQ7XG59XG5oNCB7XG4gICAgZm9udC1zaXplOiAyN3B0O1xufVxuXG5cbiIsIkBpbXBvcnQgXCIuLi8uLi9zdHlsZXMubGVzc1wiOyBcbi5zcGxhc2gge1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL3NwbGFzaC5qcGcnKSBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCAzNSUgY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHotaW5kZXg6IC0xO1xuXG4gICAgJjphZnRlciB7XG4gICAgICAgIC8vIG92ZXJsYXkgZ3JhZGllbnRcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIGJhY2tncm91bmQ6IEBzbW9rZS1zY3JlZW47XG4gICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgIH1cbiAgICBcbiAgICAudGl0bGUge1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var ContactComponent = /** @class */ (function () {
    function ContactComponent(titleService) {
        this.titleService = titleService;
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('Contact Us | Witch of WCAG');
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.less */ "./src/app/contact/contact.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"splash\">\n  <h1 class=\"title\">Welcome to Witch of WCAG!</h1>\n  <p class=\"title\">Taking the magic (but not the fun!) out of accessibility.</p>\n</div>\n<div class=\"mission\">\n  <p>The goal of this website is to provide web developers with a one stop shop for all of their accessibility needs.</p>\n  <p>We believe that accessibility doesn't have to be hard (or seem like magic).</p>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.less":
/*!******************************************!*\
  !*** ./src/app/home/home.component.less ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap');\nbody {\n  margin: 0px;\n  background: #E8E8E8;\n  font-family: 'Source Sans Pro', sans-serif;\n}\nh1 {\n  font-size: 36pt;\n}\nh2 {\n  font-size: 33pt;\n}\nh3 {\n  font-size: 30pt;\n}\nh4 {\n  font-size: 27pt;\n}\n.splash {\n  background: url('splash.jpg') no-repeat;\n  background-size: cover;\n  background-position: right 35% center;\n  width: 100%;\n  position: relative;\n  padding: 0px;\n  height: 300px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  box-sizing: border-box;\n  z-index: -1;\n}\n.splash:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  color: black;\n  background: #F5F5F5;\n  opacity: 0.8;\n  z-index: 1;\n}\n.splash .title {\n  color: black;\n  z-index: 10;\n  padding: 5px;\n  margin: 0px;\n}\n.mission {\n  text-align: center;\n  font-size: 20pt;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5sZXNzIiwiL1VzZXJzL3BhaWdlemFsZXBwYS93aXRjaC1vZi13Y2FnL3NyYy9zdHlsZXMubGVzcyIsIi9Vc2Vycy9wYWlnZXphbGVwcGEvd2l0Y2gtb2Ytd2NhZy9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtRkNBa0I7QUFDbEI7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtBRENKO0FDbUJBO0VBQ0ksZUFBQTtBRGpCSjtBQ21CQTtFQUNJLGVBQUE7QURqQko7QUNtQkE7RUFDSSxlQUFBO0FEakJKO0FDbUJBO0VBQ0ksZUFBQTtBRGpCSjtBRWhCQTtFQUNJLHVDQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQ0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBRmtCSjtBRWhCSTtFQUVJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBRmlCUjtBRTNDQTtFQThCUSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FGZ0JSO0FFYkE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUZlRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9U291cmNlK1NhbnMrUHJvJmRpc3BsYXk9c3dhcCcpO1xuYm9keSB7XG4gIG1hcmdpbjogMHB4O1xuICBiYWNrZ3JvdW5kOiAjRThFOEU4O1xuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XG59XG5oMSB7XG4gIGZvbnQtc2l6ZTogMzZwdDtcbn1cbmgyIHtcbiAgZm9udC1zaXplOiAzM3B0O1xufVxuaDMge1xuICBmb250LXNpemU6IDMwcHQ7XG59XG5oNCB7XG4gIGZvbnQtc2l6ZTogMjdwdDtcbn1cbi5zcGxhc2gge1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9zcGxhc2guanBnJykgbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCAzNSUgY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAwcHg7XG4gIGhlaWdodDogMzAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB6LWluZGV4OiAtMTtcbn1cbi5zcGxhc2g6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZDogI0Y1RjVGNTtcbiAgb3BhY2l0eTogMC44O1xuICB6LWluZGV4OiAxO1xufVxuLnNwbGFzaCAudGl0bGUge1xuICBjb2xvcjogYmxhY2s7XG4gIHotaW5kZXg6IDEwO1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbjogMHB4O1xufVxuLm1pc3Npb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBwdDtcbn1cbiIsIkBpbXBvcnQgKGNzcykgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9U291cmNlK1NhbnMrUHJvJmRpc3BsYXk9c3dhcCcpO1xuYm9keSB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgYmFja2dyb3VuZDogI0U4RThFODtcbiAgICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XG59XG4vLyBHcmV5IGFjY2VudHNcbkBkYXJrLWdyZXk6ICM3ODc4Nzg7IFxuQGxpZ2h0LWdyZXk6ICNCRUJFQkU7XG5Ac21va2Utc2NyZWVuOiAjRjVGNUY1O1xuXG4vLyBHcmV5IGJhY2tncm91bmRzXG5AbmF2YmFyLWdyZXk6ICM1MDUwNTA7XG5cbi8vZm9udC1zaXplc1xuQHNtYWxsZXN0OiAxMHB0O1xuQHNtYWxsZXI6IDEycHQ7XG5Ac21hbGw6IDE0cHQ7XG5Abm9ybWFsOiAxNnB0O1xuQGxhcmdlOiAxOHB0O1xuQGxhcmdlcjogMjBwdDtcbkBsYXJnZXN0OiAyNHB0O1xuXG4vLyB0aXRsZSBzaXplcyBcbmgxIHtcbiAgICBmb250LXNpemU6IDM2cHQ7XG59XG5oMiB7XG4gICAgZm9udC1zaXplOiAzM3B0O1xufVxuaDMge1xuICAgIGZvbnQtc2l6ZTogMzBwdDtcbn1cbmg0IHtcbiAgICBmb250LXNpemU6IDI3cHQ7XG59XG5cblxuIiwiQGltcG9ydCBcIi4uLy4uL3N0eWxlcy5sZXNzXCI7IFxuLnNwbGFzaCB7XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvc3BsYXNoLmpwZycpIG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IDM1JSBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgei1pbmRleDogLTE7XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgICAgLy8gb3ZlcmxheSBncmFkaWVudFxuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgYmFja2dyb3VuZDogQHNtb2tlLXNjcmVlbjtcbiAgICAgICAgb3BhY2l0eTogMC44O1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgfVxuICAgIFxuICAgIC50aXRsZSB7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICB9XG59XG4ubWlzc2lvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiBAbGFyZ2VyO1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(titleService) {
        this.titleService = titleService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('Home | Witch of WCAG');
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.less */ "./src/app/home/home.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/spellbook/spellbook.component.html":
/*!****************************************************!*\
  !*** ./src/app/spellbook/spellbook.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"splash\">\n  <h1 class=\"title\">Section 508 Spellbook</h1>\n  <h4 class=\"title\">Sorry, no real magic here just accessibility here.</h4>\n</div>\n"

/***/ }),

/***/ "./src/app/spellbook/spellbook.component.less":
/*!****************************************************!*\
  !*** ./src/app/spellbook/spellbook.component.less ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap');\nbody {\n  margin: 0px;\n  background: #E8E8E8;\n  font-family: 'Source Sans Pro', sans-serif;\n}\nh1 {\n  font-size: 36pt;\n}\nh2 {\n  font-size: 33pt;\n}\nh3 {\n  font-size: 30pt;\n}\nh4 {\n  font-size: 27pt;\n}\n.splash {\n  background: url('splash.jpg') no-repeat;\n  background-size: cover;\n  background-position: right 35% center;\n  width: 100%;\n  position: relative;\n  padding: 0px;\n  height: 300px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  box-sizing: border-box;\n  z-index: -1;\n}\n.splash:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  color: black;\n  background: #F5F5F5;\n  opacity: 0.8;\n  z-index: 1;\n}\n.splash .title {\n  color: black;\n  z-index: 10;\n  padding: 5px;\n  margin: 0px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3BlbGxib29rL3NwZWxsYm9vay5jb21wb25lbnQubGVzcyIsIi9Vc2Vycy9wYWlnZXphbGVwcGEvd2l0Y2gtb2Ytd2NhZy9zcmMvc3R5bGVzLmxlc3MiLCIvVXNlcnMvcGFpZ2V6YWxlcHBhL3dpdGNoLW9mLXdjYWcvc3JjL2FwcC9zcGVsbGJvb2svc3BlbGxib29rLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG1GQ0FrQjtBQUNsQjtFQUNJLFdBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0FEQ0o7QUNtQkE7RUFDSSxlQUFBO0FEakJKO0FDbUJBO0VBQ0ksZUFBQTtBRGpCSjtBQ21CQTtFQUNJLGVBQUE7QURqQko7QUNtQkE7RUFDSSxlQUFBO0FEakJKO0FFaEJBO0VBQ0ksdUNBQUE7RUFDQSxzQkFBQTtFQUNBLHFDQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FGa0JKO0FFaEJJO0VBRUksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FGaUJSO0FFM0NBO0VBOEJRLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUZnQlIiLCJmaWxlIjoic3JjL2FwcC9zcGVsbGJvb2svc3BlbGxib29rLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Tb3VyY2UrU2FucytQcm8mZGlzcGxheT1zd2FwJyk7XG5ib2R5IHtcbiAgbWFyZ2luOiAwcHg7XG4gIGJhY2tncm91bmQ6ICNFOEU4RTg7XG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcbn1cbmgxIHtcbiAgZm9udC1zaXplOiAzNnB0O1xufVxuaDIge1xuICBmb250LXNpemU6IDMzcHQ7XG59XG5oMyB7XG4gIGZvbnQtc2l6ZTogMzBwdDtcbn1cbmg0IHtcbiAgZm9udC1zaXplOiAyN3B0O1xufVxuLnNwbGFzaCB7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL3NwbGFzaC5qcGcnKSBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IDM1JSBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHotaW5kZXg6IC0xO1xufVxuLnNwbGFzaDphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kOiAjRjVGNUY1O1xuICBvcGFjaXR5OiAwLjg7XG4gIHotaW5kZXg6IDE7XG59XG4uc3BsYXNoIC50aXRsZSB7XG4gIGNvbG9yOiBibGFjaztcbiAgei1pbmRleDogMTA7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luOiAwcHg7XG59XG4iLCJAaW1wb3J0IChjc3MpIHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVNvdXJjZStTYW5zK1BybyZkaXNwbGF5PXN3YXAnKTtcbmJvZHkge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGJhY2tncm91bmQ6ICNFOEU4RTg7XG4gICAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xufVxuLy8gR3JleSBhY2NlbnRzXG5AZGFyay1ncmV5OiAjNzg3ODc4OyBcbkBsaWdodC1ncmV5OiAjQkVCRUJFO1xuQHNtb2tlLXNjcmVlbjogI0Y1RjVGNTtcblxuLy8gR3JleSBiYWNrZ3JvdW5kc1xuQG5hdmJhci1ncmV5OiAjNTA1MDUwO1xuXG4vL2ZvbnQtc2l6ZXNcbkBzbWFsbGVzdDogMTBwdDtcbkBzbWFsbGVyOiAxMnB0O1xuQHNtYWxsOiAxNHB0O1xuQG5vcm1hbDogMTZwdDtcbkBsYXJnZTogMThwdDtcbkBsYXJnZXI6IDIwcHQ7XG5AbGFyZ2VzdDogMjRwdDtcblxuLy8gdGl0bGUgc2l6ZXMgXG5oMSB7XG4gICAgZm9udC1zaXplOiAzNnB0O1xufVxuaDIge1xuICAgIGZvbnQtc2l6ZTogMzNwdDtcbn1cbmgzIHtcbiAgICBmb250LXNpemU6IDMwcHQ7XG59XG5oNCB7XG4gICAgZm9udC1zaXplOiAyN3B0O1xufVxuXG5cbiIsIkBpbXBvcnQgXCIuLi8uLi9zdHlsZXMubGVzc1wiOyBcbi5zcGxhc2gge1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL3NwbGFzaC5qcGcnKSBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCAzNSUgY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHotaW5kZXg6IC0xO1xuXG4gICAgJjphZnRlciB7XG4gICAgICAgIC8vIG92ZXJsYXkgZ3JhZGllbnRcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIGJhY2tncm91bmQ6IEBzbW9rZS1zY3JlZW47XG4gICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgIH1cbiAgICBcbiAgICAudGl0bGUge1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/spellbook/spellbook.component.ts":
/*!**************************************************!*\
  !*** ./src/app/spellbook/spellbook.component.ts ***!
  \**************************************************/
/*! exports provided: SpellbookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpellbookComponent", function() { return SpellbookComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var SpellbookComponent = /** @class */ (function () {
    function SpellbookComponent(titleService) {
        this.titleService = titleService;
    }
    SpellbookComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('508 Spellbook | Witch of WCAG');
    };
    SpellbookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-spellbook',
            template: __webpack_require__(/*! ./spellbook.component.html */ "./src/app/spellbook/spellbook.component.html"),
            styles: [__webpack_require__(/*! ./spellbook.component.less */ "./src/app/spellbook/spellbook.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
    ], SpellbookComponent);
    return SpellbookComponent;
}());



/***/ }),

/***/ "./src/app/team-page/team-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/team-page/team-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"splash\">\n    <h1 class=\"title\">Meet the Witches</h1>\n</div>\n\n"

/***/ }),

/***/ "./src/app/team-page/team-page.component.less":
/*!****************************************************!*\
  !*** ./src/app/team-page/team-page.component.less ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap');\nbody {\n  margin: 0px;\n  background: #E8E8E8;\n  font-family: 'Source Sans Pro', sans-serif;\n}\nh1 {\n  font-size: 36pt;\n}\nh2 {\n  font-size: 33pt;\n}\nh3 {\n  font-size: 30pt;\n}\nh4 {\n  font-size: 27pt;\n}\n.body {\n  min-height: 100vh;\n  height: 100%;\n}\n.splash {\n  background: url('splash.jpg') no-repeat;\n  background-size: cover;\n  background-position: right 35% center;\n  width: 100%;\n  position: relative;\n  padding: 0px;\n  height: 300px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  box-sizing: border-box;\n  z-index: -1;\n}\n.splash:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  color: black;\n  background: #F5F5F5;\n  opacity: 0.8;\n  z-index: 1;\n}\n.splash .title {\n  color: black;\n  z-index: 10;\n  padding: 5px;\n  margin: 0px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhbS1wYWdlL3RlYW0tcGFnZS5jb21wb25lbnQubGVzcyIsIi9Vc2Vycy9wYWlnZXphbGVwcGEvd2l0Y2gtb2Ytd2NhZy9zcmMvc3R5bGVzLmxlc3MiLCIvVXNlcnMvcGFpZ2V6YWxlcHBhL3dpdGNoLW9mLXdjYWcvc3JjL2FwcC90ZWFtLXBhZ2UvdGVhbS1wYWdlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG1GQ0FrQjtBQUNsQjtFQUNJLFdBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0FEQ0o7QUNtQkE7RUFDSSxlQUFBO0FEakJKO0FDbUJBO0VBQ0ksZUFBQTtBRGpCSjtBQ21CQTtFQUNJLGVBQUE7QURqQko7QUNtQkE7RUFDSSxlQUFBO0FEakJKO0FFZkE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUZpQkY7QUVmQTtFQUNJLHVDQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQ0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBRmlCSjtBRWZJO0VBRUksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FGZ0JSO0FFMUNBO0VBOEJRLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUZlUiIsImZpbGUiOiJzcmMvYXBwL3RlYW0tcGFnZS90ZWFtLXBhZ2UuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVNvdXJjZStTYW5zK1BybyZkaXNwbGF5PXN3YXAnKTtcbmJvZHkge1xuICBtYXJnaW46IDBweDtcbiAgYmFja2dyb3VuZDogI0U4RThFODtcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xufVxuaDEge1xuICBmb250LXNpemU6IDM2cHQ7XG59XG5oMiB7XG4gIGZvbnQtc2l6ZTogMzNwdDtcbn1cbmgzIHtcbiAgZm9udC1zaXplOiAzMHB0O1xufVxuaDQge1xuICBmb250LXNpemU6IDI3cHQ7XG59XG4uYm9keSB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uc3BsYXNoIHtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvc3BsYXNoLmpwZycpIG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgMzUlIGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMHB4O1xuICBoZWlnaHQ6IDMwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgei1pbmRleDogLTE7XG59XG4uc3BsYXNoOmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBjb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQ6ICNGNUY1RjU7XG4gIG9wYWNpdHk6IDAuODtcbiAgei1pbmRleDogMTtcbn1cbi5zcGxhc2ggLnRpdGxlIHtcbiAgY29sb3I6IGJsYWNrO1xuICB6LWluZGV4OiAxMDtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW46IDBweDtcbn1cbiIsIkBpbXBvcnQgKGNzcykgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9U291cmNlK1NhbnMrUHJvJmRpc3BsYXk9c3dhcCcpO1xuYm9keSB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgYmFja2dyb3VuZDogI0U4RThFODtcbiAgICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XG59XG4vLyBHcmV5IGFjY2VudHNcbkBkYXJrLWdyZXk6ICM3ODc4Nzg7IFxuQGxpZ2h0LWdyZXk6ICNCRUJFQkU7XG5Ac21va2Utc2NyZWVuOiAjRjVGNUY1O1xuXG4vLyBHcmV5IGJhY2tncm91bmRzXG5AbmF2YmFyLWdyZXk6ICM1MDUwNTA7XG5cbi8vZm9udC1zaXplc1xuQHNtYWxsZXN0OiAxMHB0O1xuQHNtYWxsZXI6IDEycHQ7XG5Ac21hbGw6IDE0cHQ7XG5Abm9ybWFsOiAxNnB0O1xuQGxhcmdlOiAxOHB0O1xuQGxhcmdlcjogMjBwdDtcbkBsYXJnZXN0OiAyNHB0O1xuXG4vLyB0aXRsZSBzaXplcyBcbmgxIHtcbiAgICBmb250LXNpemU6IDM2cHQ7XG59XG5oMiB7XG4gICAgZm9udC1zaXplOiAzM3B0O1xufVxuaDMge1xuICAgIGZvbnQtc2l6ZTogMzBwdDtcbn1cbmg0IHtcbiAgICBmb250LXNpemU6IDI3cHQ7XG59XG5cblxuIiwiQGltcG9ydCBcIi4uLy4uL3N0eWxlcy5sZXNzXCI7IFxuXG4uYm9keSB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uc3BsYXNoIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9zcGxhc2guanBnJykgbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgMzUlIGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB6LWluZGV4OiAtMTtcblxuICAgICY6YWZ0ZXIge1xuICAgICAgICAvLyBvdmVybGF5IGdyYWRpZW50XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICBiYWNrZ3JvdW5kOiBAc21va2Utc2NyZWVuO1xuICAgICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICB9XG4gICAgXG4gICAgLnRpdGxlIHtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/team-page/team-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/team-page/team-page.component.ts ***!
  \**************************************************/
/*! exports provided: TeamPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamPageComponent", function() { return TeamPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var TeamPageComponent = /** @class */ (function () {
    function TeamPageComponent(titleService) {
        this.titleService = titleService;
    }
    TeamPageComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('Who We Are | Witch of WCAG');
    };
    TeamPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-team-page',
            template: __webpack_require__(/*! ./team-page.component.html */ "./src/app/team-page/team-page.component.html"),
            styles: [__webpack_require__(/*! ./team-page.component.less */ "./src/app/team-page/team-page.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
    ], TeamPageComponent);
    return TeamPageComponent;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/paigezaleppa/witch-of-wcag/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map