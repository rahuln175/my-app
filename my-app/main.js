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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n      <img src=\"assets/images/symbol.PNG\">Cross Border Partner\n  </h1>\n</div>\n<hr>\n\n<router-outlet></router-outlet>\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'my-app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var _cross_border_onboarding_cross_border_onboarding_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cross-border-onboarding/cross-border-onboarding.module */ "./src/app/cross-border-onboarding/cross-border-onboarding.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
            ],
            imports: [
                _cross_border_onboarding_cross_border_onboarding_module__WEBPACK_IMPORTED_MODULE_0__["CrossBorderOnboardingModule"],
            ],
            entryComponents: [],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cross-border-onboarding/create-new-partner/create-new-partner.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/cross-border-onboarding/create-new-partner/create-new-partner.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.add-btn{\r\n    background-color: #080808 !important;\r\n    border-color: #080808 \r\n}\r\n\r\n.btn-spc {\r\n    margin-right: 20px;\r\n    margin-left: 20px;\r\n    float: right;\r\n}\r\n\r\n.sv-btn {\r\n    width: 150px;\r\n}\r\n\r\n.cstm-margin{\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\ninput.ng-invalid.ng-touched{\r\n    border: 1px solid red;\r\n}\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3Jvc3MtYm9yZGVyLW9uYm9hcmRpbmcvY3JlYXRlLW5ldy1wYXJ0bmVyL2NyZWF0ZS1uZXctcGFydG5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLHFDQUFxQztJQUNyQyxxQkFBcUI7Q0FDeEI7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtDQUN2Qjs7QUFFRDtJQUNJLHNCQUFzQjtDQUN6QiIsImZpbGUiOiJzcmMvYXBwL2Nyb3NzLWJvcmRlci1vbmJvYXJkaW5nL2NyZWF0ZS1uZXctcGFydG5lci9jcmVhdGUtbmV3LXBhcnRuZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uYWRkLWJ0bntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwODA4MDggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1jb2xvcjogIzA4MDgwOCBcclxufVxyXG5cclxuLmJ0bi1zcGMge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5zdi1idG4ge1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG59XHJcblxyXG4uY3N0bS1tYXJnaW57XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVke1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG59XHJcblxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/cross-border-onboarding/create-new-partner/create-new-partner.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/cross-border-onboarding/create-new-partner/create-new-partner.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"width: 900px !important\">\n  <div  class=\"row\"style=\"text-align:center\">\n      <h1>\n          Add Partner\n      </h1>\n  </div>     \n  <form (ngSubmit) = \"savePartner()\" #partnerInfo=\"ngForm\"> \n    <div class=\"form-group\">\n      <div class=\"row cstm-margin\" *ngIf=\"!saveSuccess\">        \n          <div class=\"col-sm-offset-2 col-sm-9\">\n              <button type=\"submit\" class=\"btn btn-primary add-btn btn-spc sv-btn\" [disabled] =\"!partnerInfo.valid\">Save</button>\n              <button class=\"btn btn-primary add-btn btn-spc\"  (click) = \"closeDialog()\">Cancel</button>\n          </div>\n      </div>\n    </div>\n    <hr>\n    <div class=\"form-horizontal\" >\n        <div class=\"row\">\n          <div *ngIf=\"!saveSuccess\" ngModelGroup=\"participantData\">\n          <div class=\"form-group\">\n            <label class=\"control-label col-sm-3\" for=\"participantName\">Program Participant Name</label>\n            <div class=\"col-sm-5\">\n                <input type=\"text\" name=\"participantName\" #participantName =\"ngModel\" class=\"form-control\" id=\"participantName\" placeholder=\"Program Participant Name\" ngModel required pattern=\"[a-zA-Z ]*\">\n                <span class=\"help-block alert-danger\" *ngIf=\"!participantName.valid && participantName.touched\"> Please enter valid Program Participant Name</span>    \n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"control-label col-sm-3\" for=\"participantICA\">Program Participant ICA</label>\n            <div class=\"col-sm-5\">          \n              <input type=\"text\" name=\"participantICA\" #participantICA =\"ngModel\" class=\"form-control\" id=\"participantICA\" placeholder=\"Program Participant ICA\"  ngModel required> \n              <span class=\"help-block alert-danger\" *ngIf=\"!participantICA.valid && participantICA.touched\"> Please enter valid Program Participant ICA</span>\n            </div>\n          </div>\n          <div class=\"form-group\">\n              <label class=\"control-label col-sm-3\" for=\"channelId\">Provider Assigned Channel ID</label>\n              <div class=\"col-sm-5\">          \n                <input type=\"text\" name=\"channelId\"  #channelId =\"ngModel\" class=\"form-control\" id=\"channelId\" placeholder=\"Provider Assigned Channel ID\" ngModel required>\n                <span class=\"help-block alert-danger\" *ngIf=\"!channelId.valid && channelId.touched\"> Please enter valid Provider Assigned Channel ID</span>   \n              </div>\n          </div>\n          <div class=\"form-group\">\n              <label class=\"control-label col-sm-3\" for=\"companyId\">Company ID associated with partner</label>\n              <div class=\"col-sm-5\">          \n                <input type=\"text\" name=\"companyId\"  #companyId =\"ngModel\" class=\"form-control\" id=\"companyId\" placeholder=\"Company ID associated with partner\"  ngModel required>\n                <span class=\"help-block alert-danger\" *ngIf=\"!companyId.valid && companyId.touched\"> Please enter valid Company ID</span>   \n              </div>\n          </div>\n      \n          <div class=\"form-group\">\n              <label class=\"control-label col-sm-3\" for=\"apiKey\">Sending OI API Consumer Key</label>\n              <div class=\"col-sm-5\">          \n                 <input type=\"text\" name=\"apiKey\"  #apiKey =\"ngModel\" class=\"form-control\" id=\"apiKey\" placeholder=\"Sending OI API Consumer Key\" ngModel required>\n                 <span class=\"help-block alert-danger\" *ngIf=\"!apiKey.valid && apiKey.touched\"> Please enter API Consumer Key</span>   \n              </div>\n              <div class=\"col-sm-4\">          \n                  <mat-checkbox>CIS Team has verified it from Open API</mat-checkbox>\n              </div>\n            </div>\n          <div class=\"form-group\">        \n            <div class=\"col-sm-offset-2 col-sm-9\">\n                <button type=\"submit\" class=\"btn btn-primary add-btn btn-spc sv-btn\" [disabled] =\"!partnerInfo.valid\">Save</button>\n                <button class=\"btn btn-primary add-btn btn-spc\" (click) = \"closeDialog()\">Cancel</button>\n              </div>\n          </div>\n          </div>\n        <div class=\"row\" *ngIf=\"saveSuccess\" style=\"text-align:center\">\n            <div class=\"col-sm-12\"><app-system-error [successData] = \"successData\"></app-system-error>\n            <div class=\"row\"><button class=\"btn btn-primary add-btn cstm-margin\" (click) = \"closeDialog()\">OK</button></div>\n            </div>\n        </div>\n      </div>\n    </div>\n    </form>\n    </div>"

/***/ }),

/***/ "./src/app/cross-border-onboarding/create-new-partner/create-new-partner.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/cross-border-onboarding/create-new-partner/create-new-partner.component.ts ***!
  \********************************************************************************************/
/*! exports provided: CreateNewPartnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateNewPartnerComponent", function() { return CreateNewPartnerComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_cross_border_util_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/cross-border-util.service */ "./src/app/cross-border-onboarding/services/cross-border-util.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var CreateNewPartnerComponent = /** @class */ (function () {
    function CreateNewPartnerComponent(crossBorderUtilService, dialogRef, data) {
        this.crossBorderUtilService = crossBorderUtilService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.successData = { prop1: '1st prop', prop2: '2nd prop' };
        this.participantName = '';
        this.saveSuccess = false;
    }
    CreateNewPartnerComponent.prototype.ngOnInit = function () {
    };
    CreateNewPartnerComponent.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    CreateNewPartnerComponent.prototype.savePartner = function () {
        var _this = this;
        console.log(this.partnerInfomation.value.participantData);
        var url = '';
        this.crossBorderUtilService.save(this.partnerInfomation.value, url).subscribe(function (response) {
            _this.participantName = _this.partnerInfomation.value.participantData.participantName;
            _this.dialogRef.updateSize('1000px', '350px');
            _this.saveSuccess = true;
        }, function (errors) {
            console.log(errors);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('partnerInfo'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgForm"])
    ], CreateNewPartnerComponent.prototype, "partnerInfomation", void 0);
    CreateNewPartnerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-create-new-partner',
            template: __webpack_require__(/*! ./create-new-partner.component.html */ "./src/app/cross-border-onboarding/create-new-partner/create-new-partner.component.html"),
            styles: [__webpack_require__(/*! ./create-new-partner.component.css */ "./src/app/cross-border-onboarding/create-new-partner/create-new-partner.component.css")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_services_cross_border_util_service__WEBPACK_IMPORTED_MODULE_1__["CrossBorderUtilService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object])
    ], CreateNewPartnerComponent);
    return CreateNewPartnerComponent;
}());



/***/ }),

/***/ "./src/app/cross-border-onboarding/cross-border-home/cross-border-home.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/cross-border-onboarding/cross-border-home/cross-border-home.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".margin-botton{\r\n    margin-bottom:10px;\r\n}\r\n\r\n.search-box{\r\n    border: 3px solid !important;\r\n    height: 40px;\r\n    width: 78%;\r\n    margin-right: 15px;\r\n    display: inline !important;\r\n}\r\n\r\n.add-btn{\r\n    background-color: #080808 !important;\r\n    border-color: #080808; \r\n    padding: 10px 12px !important;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3Jvc3MtYm9yZGVyLW9uYm9hcmRpbmcvY3Jvc3MtYm9yZGVyLWhvbWUvY3Jvc3MtYm9yZGVyLWhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2IsV0FBVztJQUNYLG1CQUFtQjtJQUNuQiwyQkFBMkI7Q0FDOUI7O0FBRUQ7SUFDSSxxQ0FBcUM7SUFDckMsc0JBQXNCO0lBQ3RCLDhCQUE4QjtDQUNqQyIsImZpbGUiOiJzcmMvYXBwL2Nyb3NzLWJvcmRlci1vbmJvYXJkaW5nL2Nyb3NzLWJvcmRlci1ob21lL2Nyb3NzLWJvcmRlci1ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFyZ2luLWJvdHRvbntcclxuICAgIG1hcmdpbi1ib3R0b206MTBweDtcclxufVxyXG5cclxuLnNlYXJjaC1ib3h7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDc4JTtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIGRpc3BsYXk6IGlubGluZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYWRkLWJ0bntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwODA4MDggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1jb2xvcjogIzA4MDgwODsgXHJcbiAgICBwYWRkaW5nOiAxMHB4IDEycHggIWltcG9ydGFudDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/cross-border-onboarding/cross-border-home/cross-border-home.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/cross-border-onboarding/cross-border-home/cross-border-home.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row margin-botton\">\n      <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2 margin-botton\">\n            <div class=\"form-group \">\n              <input\n                type=\"text\"\n                id=\"username\"\n                class=\"form-control search-box\"\n                [(ngModel)]=\"username\"\n                placeholder=\"Enter company, status\"\n                (input) = \"findCompany(username)\">\n                <button class=\"btn btn-primary add-btn\" (click) = \"createNewPartner()\">Create New Partner</button>\n        </div>\n           \n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2 margin-botton\">\n          Showing 1 - 4 of 4.     \n      </div>\n      <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\n        <app-data-table></app-data-table> \n      </div>\n    </div>\n  </div>\n  <hr>\n    "

/***/ }),

/***/ "./src/app/cross-border-onboarding/cross-border-home/cross-border-home.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/cross-border-onboarding/cross-border-home/cross-border-home.component.ts ***!
  \******************************************************************************************/
/*! exports provided: CrossBorderHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrossBorderHomeComponent", function() { return CrossBorderHomeComponent; });
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _create_new_partner_create_new_partner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../create-new-partner/create-new-partner.component */ "./src/app/cross-border-onboarding/create-new-partner/create-new-partner.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CrossBorderHomeComponent = /** @class */ (function () {
    function CrossBorderHomeComponent(dialog, router) {
        this.dialog = dialog;
        this.router = router;
    }
    CrossBorderHomeComponent.prototype.findCompany = function (searchData) {
        // do something
        console.log(searchData);
    };
    CrossBorderHomeComponent.prototype.createNewPartner = function () {
        this.openDialog();
    };
    CrossBorderHomeComponent.prototype.openDialog = function () {
        this.dialog.open(_create_new_partner_create_new_partner_component__WEBPACK_IMPORTED_MODULE_3__["CreateNewPartnerComponent"], {
            height: '650px',
        });
    };
    CrossBorderHomeComponent.prototype.openDetail = function () {
        this.router.navigate(['details']);
    };
    CrossBorderHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cross-border-home',
            template: __webpack_require__(/*! ./cross-border-home.component.html */ "./src/app/cross-border-onboarding/cross-border-home/cross-border-home.component.html"),
            styles: [__webpack_require__(/*! ./cross-border-home.component.css */ "./src/app/cross-border-onboarding/cross-border-home/cross-border-home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_0__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CrossBorderHomeComponent);
    return CrossBorderHomeComponent;
}());



/***/ }),

/***/ "./src/app/cross-border-onboarding/cross-border-onboarding.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/cross-border-onboarding/cross-border-onboarding.module.ts ***!
  \***************************************************************************/
/*! exports provided: CrossBorderOnboardingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrossBorderOnboardingModule", function() { return CrossBorderOnboardingModule; });
/* harmony import */ var _services_cross_border_util_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/cross-border-util.service */ "./src/app/cross-border-onboarding/services/cross-border-util.service.ts");
/* harmony import */ var _partner_details_partner_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./partner-details/partner-details.component */ "./src/app/cross-border-onboarding/partner-details/partner-details.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _create_new_partner_create_new_partner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-new-partner/create-new-partner.component */ "./src/app/cross-border-onboarding/create-new-partner/create-new-partner.component.ts");
/* harmony import */ var _modify_general_information_modify_general_information_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modify-general-information/modify-general-information.component */ "./src/app/cross-border-onboarding/modify-general-information/modify-general-information.component.ts");
/* harmony import */ var _cross_border_home_cross_border_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cross-border-home/cross-border-home.component */ "./src/app/cross-border-onboarding/cross-border-home/cross-border-home.component.ts");
/* harmony import */ var _data_table_data_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./data-table/data-table.component */ "./src/app/cross-border-onboarding/data-table/data-table.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _cross_border_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./cross-border-routing.module */ "./src/app/cross-border-onboarding/cross-border-routing.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _system_error_system_error_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./system-error/system-error.component */ "./src/app/cross-border-onboarding/system-error/system-error.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var CrossBorderOnboardingModule = /** @class */ (function () {
    function CrossBorderOnboardingModule() {
    }
    CrossBorderOnboardingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [
                _data_table_data_table_component__WEBPACK_IMPORTED_MODULE_8__["DataTableComponent"],
                _create_new_partner_create_new_partner_component__WEBPACK_IMPORTED_MODULE_5__["CreateNewPartnerComponent"],
                _partner_details_partner_details_component__WEBPACK_IMPORTED_MODULE_1__["PartnerDetailsComponent"],
                _modify_general_information_modify_general_information_component__WEBPACK_IMPORTED_MODULE_6__["ModifyGeneralInformationComponent"],
                _cross_border_home_cross_border_home_component__WEBPACK_IMPORTED_MODULE_7__["CrossBorderHomeComponent"],
                _system_error_system_error_component__WEBPACK_IMPORTED_MODULE_14__["SystemErrorComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_11__["HttpModule"],
                _cross_border_routing_module__WEBPACK_IMPORTED_MODULE_12__["CrossBorderRoutingModule"]
            ],
            entryComponents: [
                _create_new_partner_create_new_partner_component__WEBPACK_IMPORTED_MODULE_5__["CreateNewPartnerComponent"],
                _modify_general_information_modify_general_information_component__WEBPACK_IMPORTED_MODULE_6__["ModifyGeneralInformationComponent"],
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"]],
            providers: [_services_cross_border_util_service__WEBPACK_IMPORTED_MODULE_0__["CrossBorderUtilService"]],
            bootstrap: []
        })
    ], CrossBorderOnboardingModule);
    return CrossBorderOnboardingModule;
}());



/***/ }),

/***/ "./src/app/cross-border-onboarding/cross-border-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/cross-border-onboarding/cross-border-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: CrossBorderRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrossBorderRoutingModule", function() { return CrossBorderRoutingModule; });
/* harmony import */ var _partner_details_partner_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partner-details/partner-details.component */ "./src/app/cross-border-onboarding/partner-details/partner-details.component.ts");
/* harmony import */ var _cross_border_home_cross_border_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cross-border-home/cross-border-home.component */ "./src/app/cross-border-onboarding/cross-border-home/cross-border-home.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var appRoutes = [
    { path: 'details', component: _partner_details_partner_details_component__WEBPACK_IMPORTED_MODULE_0__["PartnerDetailsComponent"] },
    { path: '', component: _cross_border_home_cross_border_home_component__WEBPACK_IMPORTED_MODULE_1__["CrossBorderHomeComponent"] }
];
var CrossBorderRoutingModule = /** @class */ (function () {
    function CrossBorderRoutingModule() {
    }
    CrossBorderRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], CrossBorderRoutingModule);
    return CrossBorderRoutingModule;
}());



/***/ }),

/***/ "./src/app/cross-border-onboarding/data-table/data-table-datasource.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/cross-border-onboarding/data-table/data-table-datasource.ts ***!
  \*****************************************************************************/
/*! exports provided: DataTableDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableDataSource", function() { return DataTableDataSource; });
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



// TODO: replace this with real data from your application
var EXAMPLE_DATA = [
    { company: 'test1', status: 'pending', updated: '10/10/18', details: 'detail' },
    { company: 'test2', status: 'pending', updated: '10/10/18', details: 'detail' },
    { company: 'test3', status: 'declined', updated: '10/10/18', details: 'detail' },
    { company: 'test4', status: 'approved', updated: '10/10/18', details: 'detail' },
];
/**
 * Data source for the DataTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
var DataTableDataSource = /** @class */ (function (_super) {
    __extends(DataTableDataSource, _super);
    function DataTableDataSource(paginator, sort, crossBorderUtilService) {
        var _this = _super.call(this) || this;
        _this.paginator = paginator;
        _this.sort = sort;
        _this.crossBorderUtilService = crossBorderUtilService;
        _this.data = EXAMPLE_DATA;
        // console.log(this.crossBorderUtilService.serviceVariable);
        _this.getData();
        return _this;
    }
    DataTableDataSource.prototype.ngOnInit = function () {
        this.getData();
    };
    DataTableDataSource.prototype.getData = function () {
        this.crossBorderUtilService.get().subscribe(function (data) {
            console.log(data);
        });
    };
    /**
     * Connect this data source to the table. The table will only update when
     * the returned stream emits new items.
     * @returns A stream of the items to be rendered.
     */
    DataTableDataSource.prototype.connect = function () {
        var _this = this;
        // Combine everything that affects the rendered data into one update
        // stream for the data-table to consume.
        var dataMutations = [
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.data),
            this.paginator.page,
            this.sort.sortChange
        ];
        // Set the paginator's length
        this.paginator.length = this.data.length;
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"].apply(void 0, dataMutations).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function () {
            return _this.getPagedData(_this.getSortedData(_this.data.slice()));
        }));
    };
    /**
     *  Called when the table is being destroyed. Use this function, to clean up
     * any open connections or free any held resources that were set up during connect.
     */
    DataTableDataSource.prototype.disconnect = function () { };
    /**
     * Paginate the data (client-side). If you're using server-side pagination,
     * this would be replaced by requesting the appropriate data from the server.
     */
    DataTableDataSource.prototype.getPagedData = function (data) {
        var startIndex = this.paginator.pageIndex * this.paginator.pageSize;
        return data.splice(startIndex, this.paginator.pageSize);
    };
    /**
     * Sort the data (client-side). If you're using server-side sorting,
     * this would be replaced by requesting the appropriate data from the server.
     */
    DataTableDataSource.prototype.getSortedData = function (data) {
        var _this = this;
        if (!this.sort.active || this.sort.direction === '') {
            return data;
        }
        return data.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            switch (_this.sort.active) {
                case 'company': return compare(a.company, b.company, isAsc);
                default: return 0;
            }
        });
    };
    return DataTableDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["DataSource"]));

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ "./src/app/cross-border-onboarding/data-table/data-table.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/cross-border-onboarding/data-table/data-table.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".data-table {\n  width: 100%\n}\n\n#company {\n \n  border-collapse: collapse;\n  width: 100%;\n}\n\n#company td, #customers th {\n  border: 1px solid #ddd;\n  padding: 8px;\n}\n\n#company tr:nth-child(even){background-color: #f2f2f2;}\n\n#company tr:hover {background-color: #ddd;}\n\n#company th {\n  font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  padding-left: 8px;\n  text-align: left;\n  background-color: gray;\n  color: white;\n  opacity: 1 !important;\n}\n\n.mat-sort-header-arrow {\n  color: #fff !important;\n  opacity: 1 !important;\n  }\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3Jvc3MtYm9yZGVyLW9uYm9hcmRpbmcvZGF0YS10YWJsZS9kYXRhLXRhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0NBQ1o7O0FBRUQ7O0VBRUUsMEJBQTBCO0VBQzFCLFlBQVk7Q0FDYjs7QUFFRDtFQUNFLHVCQUF1QjtFQUN2QixhQUFhO0NBQ2Q7O0FBRUQsNEJBQTRCLDBCQUEwQixDQUFDOztBQUV2RCxtQkFBbUIsdUJBQXVCLENBQUM7O0FBRTNDO0VBQ0UsMERBQTBEO0VBQzFELGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLHNCQUFzQjtDQUN2Qjs7QUFFRDtFQUNFLHVCQUF1QjtFQUN2QixzQkFBc0I7R0FDckIiLCJmaWxlIjoic3JjL2FwcC9jcm9zcy1ib3JkZXItb25ib2FyZGluZy9kYXRhLXRhYmxlL2RhdGEtdGFibGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXRhLXRhYmxlIHtcbiAgd2lkdGg6IDEwMCVcbn1cblxuI2NvbXBhbnkge1xuIFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuI2NvbXBhbnkgdGQsICNjdXN0b21lcnMgdGgge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbiNjb21wYW55IHRyOm50aC1jaGlsZChldmVuKXtiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO31cblxuI2NvbXBhbnkgdHI6aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICNkZGQ7fVxuXG4jY29tcGFueSB0aCB7XG4gIGZvbnQtZmFtaWx5OiBcIlRyZWJ1Y2hldCBNU1wiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBwYWRkaW5nLXRvcDogOHB4O1xuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbiAgY29sb3I6IHdoaXRlO1xuICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtc29ydC1oZWFkZXItYXJyb3cge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG4gIH1cblxuIl19 */"

/***/ }),

/***/ "./src/app/cross-border-onboarding/data-table/data-table.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/cross-border-onboarding/data-table/data-table.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <table id=\"company\" mat-table [dataSource]=\"dataSource\" matSort aria-label=\"Elements\" class=\"data-table\">\n    <!-- Id Column -->\n    <ng-container matColumnDef=\"company\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Company</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.company}}</td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"status\">\n      <th mat-header-cell *matHeaderCellDef >Status</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.status}}</td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"updated\">\n        <th mat-header-cell *matHeaderCellDef >Updated</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.updated}}</td>\n      </ng-container>\n    \n      <ng-container matColumnDef=\"details\">\n          <th mat-header-cell *matHeaderCellDef >Details</th>\n          <td mat-cell *matCellDef=\"let row\"> <a ng-href=\"\" (click) = \"openDetails()\"> Details</a></td>\n      </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n\n  <mat-paginator #paginator\n      [length]=\"dataSource.data.length\"\n      [pageIndex]=\"0\"\n      [pageSize]=\"50\"\n      [pageSizeOptions]=\"[25, 50]\">\n  </mat-paginator>\n</div>\n"

/***/ }),

/***/ "./src/app/cross-border-onboarding/data-table/data-table.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/cross-border-onboarding/data-table/data-table.component.ts ***!
  \****************************************************************************/
/*! exports provided: DataTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableComponent", function() { return DataTableComponent; });
/* harmony import */ var _services_cross_border_util_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/cross-border-util.service */ "./src/app/cross-border-onboarding/services/cross-border-util.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _data_table_datasource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data-table-datasource */ "./src/app/cross-border-onboarding/data-table/data-table-datasource.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DataTableComponent = /** @class */ (function () {
    function DataTableComponent(router, route, crossBorderUtilService) {
        this.router = router;
        this.route = route;
        this.crossBorderUtilService = crossBorderUtilService;
        /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
        this.displayedColumns = ['company', 'status', 'updated', 'details'];
    }
    DataTableComponent.prototype.ngOnInit = function () {
        this.dataSource = new _data_table_datasource__WEBPACK_IMPORTED_MODULE_3__["DataTableDataSource"](this.paginator, this.sort, this.crossBorderUtilService);
        // this.getData();
    };
    DataTableComponent.prototype.openDetails = function () {
        this.router.navigate(['/details'], { relativeTo: this.route });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], DataTableComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], DataTableComponent.prototype, "sort", void 0);
    DataTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-data-table',
            template: __webpack_require__(/*! ./data-table.component.html */ "./src/app/cross-border-onboarding/data-table/data-table.component.html"),
            styles: [__webpack_require__(/*! ./data-table.component.css */ "./src/app/cross-border-onboarding/data-table/data-table.component.css")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _services_cross_border_util_service__WEBPACK_IMPORTED_MODULE_0__["CrossBorderUtilService"]])
    ], DataTableComponent);
    return DataTableComponent;
}());



/***/ }),

/***/ "./src/app/cross-border-onboarding/modify-general-information/modify-general-information.component.css":
/*!*************************************************************************************************************!*\
  !*** ./src/app/cross-border-onboarding/modify-general-information/modify-general-information.component.css ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.add-btn{\r\n    background-color: #080808 !important;\r\n    border-color: #080808 \r\n}\r\n\r\n.btn-spc {\r\n    margin-right: 20px;\r\n    margin-left: 20px;\r\n    float: right;\r\n}\r\n\r\n.sv-btn {\r\n    width: 150px;\r\n}\r\n\r\n.cstm-margin{\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3Jvc3MtYm9yZGVyLW9uYm9hcmRpbmcvbW9kaWZ5LWdlbmVyYWwtaW5mb3JtYXRpb24vbW9kaWZ5LWdlbmVyYWwtaW5mb3JtYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxxQ0FBcUM7SUFDckMscUJBQXFCO0NBQ3hCOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksYUFBYTtDQUNoQjs7QUFFRDtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7Q0FDdkIiLCJmaWxlIjoic3JjL2FwcC9jcm9zcy1ib3JkZXItb25ib2FyZGluZy9tb2RpZnktZ2VuZXJhbC1pbmZvcm1hdGlvbi9tb2RpZnktZ2VuZXJhbC1pbmZvcm1hdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5hZGQtYnRue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA4MDgwOCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMDgwODA4IFxyXG59XHJcblxyXG4uYnRuLXNwYyB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLnN2LWJ0biB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbn1cclxuXHJcbi5jc3RtLW1hcmdpbntcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/cross-border-onboarding/modify-general-information/modify-general-information.component.html":
/*!**************************************************************************************************************!*\
  !*** ./src/app/cross-border-onboarding/modify-general-information/modify-general-information.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n   <div class=\"container\" style=\"width: 900px !important\">\n    <div  class=\"row\"style=\"text-align:center\">\n        <h1>\n          Modify General Information\n        </h1>\n      </div>\n      <hr>\n      <div class=\"row cstm-margin\" *ngIf=\"!saveSuccess\">        \n          <div class=\"col-sm-offset-2 col-sm-9\">\n              <button type=\"submit\" class=\"btn btn-primary add-btn btn-spc sv-btn\" (click) = \"closeDialog()\" >Save</button>\n              <button type=\"submit\" class=\"btn btn-primary add-btn btn-spc\"  (click) = \"closeDialog()\">Cancel</button>\n            </div>\n      </div>\n      \n    <div class=\"form-horizontal\" >\n      <div class=\"row\">\n        <div class=\"form-group\">\n              <label class=\"control-label col-sm-4\" for=\"participantName\"></label>\n              <div class=\"col-sm-3\">\n                  <label class=\"control-label\"> Old Value</label>\n              </div>\n              <div class=\"col-sm-3\">\n                  <label class=\"control-label\"> New Value</label>\n               </div>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"control-label col-sm-4\" for=\"participantName\">Program Participant Name</label>\n          <div class=\"col-sm-3\">\n              Bank Of East Asia\n          </div>\n          <div class=\"col-sm-3\">\n              Bank Of East Asia\n           </div>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"control-label col-sm-4\" for=\"participantICA\">Program Participant ICA</label>\n          <div class=\"col-sm-3\">\n              99901\n           </div>\n           <div class=\"col-sm-3\">\n              99904\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label class=\"control-label col-sm-4\" for=\"apiKey\">API Consumer Key</label>\n            <div class=\"col-sm-3\">\n                C7XbnxPcGlWIFvZ5aRQcSGMQ8\n             </div>\n             <div class=\"col-sm-3\">\n                C7XbnxPcGlWIFvZ5aRQcSGMQ8\n              </div>\n          </div>\n          <div class=\"form-group\">\n              <label class=\"control-label col-sm-4\" for=\"apiKey\">Company ID associated with partner</label>\n              <div class=\"col-sm-3\">\n                  IND_JPMCvaw9uh\n               </div>\n               <div class=\"col-sm-3\">\n                  IND_JPMCvaw9uh\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"control-label col-sm-4\" for=\"apiKey\">Provider Assigned Channel ID</label>\n                <div class=\"col-sm-3\">\n                   1233435\n                 </div>\n                 <div class=\"col-sm-3\">\n                    1233435\n                  </div>\n              </div>\n              \n        <div class=\"form-group\">        \n          <div class=\"col-sm-offset-2 col-sm-9\">\n              <button class=\"btn btn-primary add-btn btn-spc sv-btn\" (click) = \"closeDialog()\" >Save</button>\n              <button class=\"btn btn-primary add-btn btn-spc\" (click) = \"closeDialog()\">Cancel</button>\n            </div>\n        </div> \n    </div>\n  </div>\n  </div>"

/***/ }),

/***/ "./src/app/cross-border-onboarding/modify-general-information/modify-general-information.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/cross-border-onboarding/modify-general-information/modify-general-information.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: ModifyGeneralInformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifyGeneralInformationComponent", function() { return ModifyGeneralInformationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ModifyGeneralInformationComponent = /** @class */ (function () {
    function ModifyGeneralInformationComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ModifyGeneralInformationComponent.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    ModifyGeneralInformationComponent.prototype.ngOnInit = function () {
    };
    ModifyGeneralInformationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modify-general-information',
            template: __webpack_require__(/*! ./modify-general-information.component.html */ "./src/app/cross-border-onboarding/modify-general-information/modify-general-information.component.html"),
            styles: [__webpack_require__(/*! ./modify-general-information.component.css */ "./src/app/cross-border-onboarding/modify-general-information/modify-general-information.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], ModifyGeneralInformationComponent);
    return ModifyGeneralInformationComponent;
}());



/***/ }),

/***/ "./src/app/cross-border-onboarding/partner-details/partner-details.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/cross-border-onboarding/partner-details/partner-details.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.add-btn{\r\n    background-color: #080808 !important;\r\n    border-color: #080808 \r\n}\r\n\r\n.btn-spc {\r\n    margin-left: 20px;\r\n    float: right;\r\n}\r\n\r\n.sv-btn {\r\n    width: 150px;\r\n}\r\n\r\n.cstm-margin{\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.lb-left{\r\n        text-align: left !important;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3Jvc3MtYm9yZGVyLW9uYm9hcmRpbmcvcGFydG5lci1kZXRhaWxzL3BhcnRuZXItZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLHFDQUFxQztJQUNyQyxxQkFBcUI7Q0FDeEI7O0FBRUQ7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtDQUNoQjs7QUFFRDtJQUNJLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0NBQ3ZCOztBQUVEO1FBQ1EsNEJBQTRCO0NBQ25DIiwiZmlsZSI6InNyYy9hcHAvY3Jvc3MtYm9yZGVyLW9uYm9hcmRpbmcvcGFydG5lci1kZXRhaWxzL3BhcnRuZXItZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5hZGQtYnRue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA4MDgwOCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMDgwODA4IFxyXG59XHJcblxyXG4uYnRuLXNwYyB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLnN2LWJ0biB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbn1cclxuXHJcbi5jc3RtLW1hcmdpbntcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4ubGItbGVmdHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/cross-border-onboarding/partner-details/partner-details.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/cross-border-onboarding/partner-details/partner-details.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row margin-botton\">\n      <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2 margin-botton\">\n  \n  <mat-accordion>\n    <mat-expansion-panel style=\"margin-bottom:20px\">\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          General Information\n        </mat-panel-title>\n     \n      </mat-expansion-panel-header>\n      <div class=\"form-horizontal\" >      \n          <div class=\"form-group\">\n            <label class=\"control-label lb-left col-sm-3\" for=\"participantName\">Program Participant Name</label>\n            <div class=\"col-sm-5\">\n              <input type=\"text\" class=\"form-control\" id=\"participantName\" placeholder=\"Participant Name\" [(ngModel)]=\"participantName\">\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"control-label lb-left col-sm-3\" for=\"participantICA\">Program Participant ICA</label>\n            <div class=\"col-sm-5\">          \n              <input type=\"text\" class=\"form-control\" id=\"participantICA\" placeholder=\"Program Participant ICA\" name=\"participantICA\">\n            </div>\n          </div>\n          <div class=\"form-group\">\n              <label class=\"control-label lb-left col-sm-3\" for=\"channelID\"> Provider Assigned Channel ID</label>\n              <div class=\"col-sm-5\">\n                <input type=\"text\" class=\"form-control\" id=\"channelID\" placeholder=\"Channel ID\" [(ngModel)]=\"channelID\">\n              </div>\n          </div>\n          <div class=\"form-group\">\n              <label class=\"control-label lb-left col-sm-3\" for=\"companyId\"> Company ID associated with partner</label>\n              <div class=\"col-sm-5\">\n                <input type=\"text\" class=\"form-control\" id=\"companyId\" placeholder=\"Company ID associated with partner\" [(ngModel)]=\"companyId\">\n              </div>\n          </div>\n          \n          <div class=\"form-group\">\n              <label class=\"control-label lb-left col-sm-3\" for=\"apiKey\">API Consumer Key</label>\n              <div class=\"col-sm-5\">          \n                <input type=\"text\" class=\"form-control\" id=\"apiKey\" placeholder=\"API Consumer Key\" name=\"apiKey\">\n              </div>\n              <div class=\"col-sm-4\">          \n                  <mat-checkbox>Verified from open API</mat-checkbox>\n                </div>\n            </div>\n          <div class=\"form-group\">        \n            <div class=\"col-sm-offset-2 col-sm-9\">\n                <button class=\"btn btn-primary add-btn btn-spc sv-btn\" (click) = \"editSection()\" >Edit Section</button>\n              </div>\n          </div>\n         \n    </div>\n    </mat-expansion-panel>\n  \n    <mat-expansion-panel  style=\"margin-bottom:20px\" (opened)=\"panelOpenState = true\"\n                         (closed)=\"panelOpenState = false\">\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          Settlement Reconcilation\n        </mat-panel-title>\n        \n      </mat-expansion-panel-header>\n      <div class=\"form-horizontal\" >\n          <div class=\"row\">\n            <div *ngIf=\"!saveSuccess\">\n            <div class=\"form-group\">\n              <label class=\"control-label lb-left col-sm-3\" for=\"OIfileTeansferEndpoint\">OI Global File Transfer Endpoint</label>\n              <div class=\"col-sm-5\">\n                <input type=\"text\" class=\"form-control\" id=\"OIfileTeansferEndpoint\" placeholder=\"OI Global File Transefer Endpoint\" [(ngModel)]=\"OIfileTeansferEndpoint\">\n              </div>\n              <div class=\"col-sm-4\">          \n                  <mat-checkbox>Verified from GFT</mat-checkbox>\n                </div>\n            </div>\n            <div class=\"form-group\">\n              <label class=\"control-label lb-left col-sm-3\" for=\"SFfileTeansferEndpoint\">Sponsor Financial Institute Settlement Global File Transfer Endpoint</label>\n              <div class=\"col-sm-5\">          \n                <input type=\"text\" class=\"form-control\" id=\"SFfileTeansferEndpoint\" name=\"SFfileTeansferEndpoint\" placeholder=\"Settlement Global File Transefer Endpoint\">\n              </div>\n              <div class=\"col-sm-4\">          \n                  <mat-checkbox>Verified from GFT</mat-checkbox>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"control-label lb-left col-sm-3\" for=\"dtr\">Daily Transaction Report (DTR) version</label>\n                <div class=\"col-sm-5\">\n                    <mat-select placeholder=\"1.3\" class=\"form-control\">\n                        <mat-option value=\"yes\">1.1</mat-option>\n                        <mat-option value=\"no\">1.2</mat-option>\n                    </mat-select>\n                  </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"control-label lb-left col-sm-3\" for=\"scr\">Status Change Report (SCR)</label>\n                <div class=\"col-sm-5\">\n                    <mat-select placeholder=\"1.3\" class=\"form-control\">\n                        <mat-option value=\"yes\">1.1</mat-option>\n                        <mat-option value=\"no\">1.2</mat-option>\n                    </mat-select>\n                  </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"control-label lb-left col-sm-3\" for=\"bdf\">Batch Data File (BDF) version</label>\n                <div class=\"col-sm-5\">\n                    <mat-select placeholder=\"1.3\" class=\"form-control\">\n                        <mat-option value=\"yes\">1.1</mat-option>\n                        <mat-option value=\"no\">1.2</mat-option>\n                    </mat-select>\n                  </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"control-label lb-left col-sm-3\" for=\"endPoint\">Endpoint for Reconciliation file</label>\n                <div class=\"col-sm-5\">\n                  <input type=\"text\" class=\"form-control\" id=\"endPoint\" placeholder=\"Endpoint for Reconciliation file\" [(ngModel)]=\"endPoint\">\n                </div>\n                <div class=\"col-sm-4\">          \n                    <mat-checkbox>Verified from GFT</mat-checkbox>\n                </div>\n              </div>\n            <div class=\"form-group\">        \n              <div class=\"col-sm-offset-2 col-sm-9\">\n                  <button class=\"btn btn-primary add-btn btn-spc sv-btn\" (click) = \"editSection()\" >Edit Section</button>\n                </div>\n            </div>\n            </div>\n         \n        </div>\n      </div>\n    </mat-expansion-panel>\n  \n    <mat-expansion-panel style=\"margin-bottom:20px\">\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          Ol Corridor\n        </mat-panel-title>\n        \n      </mat-expansion-panel-header>\n      <div class=\"form-horizontal\" >\n          <div class=\"form-group\">\n          <img src=\"assets/images/OI.PNG\" style=\" width: 100%;\">\n          </div>\n          <div class=\"form-group\">\n              <div class=\"col-sm-12\" style=\"float: right;\">          \n                  <mat-checkbox>Verified from SAM</mat-checkbox>\n              </div>\n          </div>\n       </div>\n    </mat-expansion-panel>\n   \n    <mat-expansion-panel style=\"margin-bottom:20px\">\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          Moneysend Information\n        </mat-panel-title>\n     \n      </mat-expansion-panel-header>\n      <div class=\"form-horizontal\" >\n          <div class=\"form-group\">\n              <label class=\"control-label lb-left col-sm-4\" for=\"MastercardId\">Mastercard assign ID</label>\n              <div class=\"col-sm-5\">          \n                <input type=\"text\" class=\"form-control\" id=\"MastercardId\" placeholder=\"Mastercard assign ID\" name=\"MastercardId\">\n              </div>\n          </div>\n          \n          <div class=\"form-group\">\n              <label class=\"control-label lb-left col-sm-4\" for=\"ProcessorId\">Processor ID</label>\n              <div class=\"col-sm-5\">          \n                <input type=\"text\" class=\"form-control\" id=\"ProcessorId\" placeholder=\"Processor ID\" name=\"ProcessorId\">\n              </div>\n          </div>\n          \n          <div class=\"form-group\">\n              <label class=\"control-label lb-left col-sm-4\" for=\"routingNumber\">Routing and Transit Number</label>\n              <div class=\"col-sm-5\">          \n                <input type=\"text\" class=\"form-control\" id=\"routingNumber\" placeholder=\"Routing and Transit Number\" name=\"routingNumber\">\n              </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"control-label lb-left col-sm-4\" for=\"ucafSwitch\">uCAF Support Switch</label>\n            <div class=\"col-sm-5\">\n                <mat-select placeholder=\"Select\" class=\"form-control\" placeholder=\"Select atleast one ICA type\">\n                    <mat-option value=\"yes\">Yes</mat-option>\n                    <mat-option value=\"no\">No</mat-option>\n                </mat-select>\n            </div>\n          </div>\n          \n          <div class=\"form-group\">        \n            <div class=\"col-sm-offset-2 col-sm-9\">\n                <button class=\"btn btn-primary add-btn btn-spc sv-btn\" (click) = \"editSection()\" >Edit Section</button>\n              </div>\n          </div>    \n    </div>\n    </mat-expansion-panel>\n    \n    \n    <mat-expansion-panel style=\"margin-bottom:20px\">\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            Portal Functionality\n          </mat-panel-title>\n       \n        </mat-expansion-panel-header>\n    \n        <div class=\"form-horizontal\" >\n            <!-- <div class=\"form-group\">\n                <label class=\"control-label lb-left col-sm-4\" for=\"companyId\">Company ID associated with partner</label>\n                <div class=\"col-sm-5\">          \n                  <input type=\"text\" class=\"form-control\" id=\"companyId\" placeholder=\"Company ID\" name=\"companyId\">\n                </div>\n              </div>\n             -->\n            <!-- <div class=\"form-group\">\n              <label class=\"control-label lb-left col-sm-4\" for=\"participantName\">Select ICA Types</label>\n              <div class=\"col-sm-5\">\n                  <mat-select placeholder=\"Select\" class=\"form-control\" placeholder=\"Select atleast one ICA type\">\n                      <mat-option value=\"t1\">type1</mat-option>\n                      <mat-option value=\"t2\">type2</mat-option>\n                  </mat-select>\n              </div>\n            </div> -->\n          <div class=\"form-group\">\n            <label class=\"control-label lb-left col-sm-4\" for=\"participantName\">Select ICA Types</label>\n            <div class=\"col-sm-5\">\n                <mat-select  [formControl]=\"toppings\" class=\"form-control\" multiple placeholder=\"Select atleast one ICA type\">\n                    <mat-option *ngFor=\"let topping of toppingList\" [value]=\"topping\">{{topping}}</mat-option>\n                </mat-select>\n            </div>\n          </div>\n          <div class=\"form-group\">\n              <label class=\"control-label lb-left col-sm-4\" for=\"companyId\">provisional ICA</label>\n              <div class=\"col-sm-5\">          \n                <input type=\"text\" class=\"form-control\" id=\"companyId\" placeholder=\"\" name=\"companyId\">\n              </div>\n            </div>\n\n            \n\n\n            <div class=\"form-group\">        \n              <div class=\"col-sm-offset-2 col-sm-9\">\n                  <button class=\"btn btn-primary add-btn btn-spc sv-btn\" (click) = \"editSection()\" >Edit Section</button>\n                </div>\n            </div>    \n        </div>\n      </mat-expansion-panel>\n  \n\n    <mat-expansion-panel style=\"margin-bottom:20px\">\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n              Carded FX rate\n          </mat-panel-title>\n       \n        </mat-expansion-panel-header>\n    \n        <div class=\"form-horizontal\" >\n            \n              <div class=\"form-group\">\n                <label class=\"control-label lb-left col-sm-4\" for=\"participantName\">Does partner want to enroll for carded FX rate functionality?</label>\n                <div class=\"col-sm-5\">\n                    <mat-select placeholder=\"Select\" class=\"form-control\">\n                        <mat-option value=\"yes\">Yes</mat-option>\n                        <mat-option value=\"no\">No</mat-option>\n                    </mat-select>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                  <label class=\"control-label lb-left col-sm-4\" for=\"participantName\">Delivery Mode</label>\n                  <div class=\"col-sm-5\">\n                      <mat-select placeholder=\"Select\" class=\"form-control\">\n                          <mat-option value=\"yes\">WEBHOOK</mat-option>\n                          <mat-option value=\"no\">email</mat-option>\n                      </mat-select>\n                  </div>\n                </div>\n              <div class=\"form-group\">\n                <label class=\"control-label lb-left col-sm-4\" for=\"participantICA\">Endpoint URL</label>\n                <div class=\"col-sm-5\">          \n                  <input type=\"text\" class=\"form-control\" id=\"participantICA\" placeholder=\"xyz.com\" name=\"participantICA\">\n                </div>\n              </div>\n             \n              <div class=\"form-group\">        \n                <div class=\"col-sm-offset-2 col-sm-9\">\n                    <button class=\"btn btn-primary add-btn btn-spc sv-btn\" (click) = \"editSection()\" >Edit Section</button>\n                  </div>\n              </div>\n              \n        </div>\n        \n      </mat-expansion-panel>\n    \n      \n      <mat-expansion-panel style=\"margin-bottom:20px\">\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            Batch Payment Processing\n          </mat-panel-title>\n       \n        </mat-expansion-panel-header>\n        <div class=\"form-horizontal\" >\n         <div class=\"form-group\">\n            <label class=\"control-label lb-left col-sm-6\" for=\"participantName\">Does OI want to opt batch payment Processing ?</label>\n            <div class=\"col-sm-5\">\n                <mat-select placeholder=\"Select\" class=\"form-control\">\n                    <mat-option value=\"yes\">N</mat-option>\n                    <mat-option value=\"no\">Y</mat-option>\n                </mat-select>\n            </div>\n          </div>\n          <div class=\"form-group\">        \n              <div class=\"col-sm-offset-2 col-sm-9\">\n                  <button class=\"btn btn-primary add-btn btn-spc sv-btn\" (click) = \"editSection()\" >Edit Section</button>\n                </div>\n            </div>\n        </div>\n      </mat-expansion-panel>\n\n      <mat-expansion-panel style=\"margin-bottom:20px\">\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n               General Configuration\n            </mat-panel-title>\n         \n          </mat-expansion-panel-header>\n          <div class=\"form-horizontal\" >\n           <div class=\"form-group\">\n              <label class=\"control-label lb-left col-sm-6\" for=\"participantName\">Debit Credit Indicator</label>\n              <div class=\"col-sm-5\">\n                  <mat-select placeholder=\"B\" class=\"form-control\">\n                      <mat-option value=\"yes\">D</mat-option>\n                      <mat-option value=\"no\">C</mat-option>\n                  </mat-select>\n              </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"control-label lb-left col-sm-6\" for=\"participantName\">Refund Enable Swtich</label>\n                <div class=\"col-sm-5\">\n                    <mat-select placeholder=\"\" class=\"form-control\">\n                        <mat-option value=\"yes\">Y</mat-option>\n                        <mat-option value=\"no\">N</mat-option>\n                    </mat-select>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                  <label class=\"control-label lb-left col-sm-6\" for=\"participantName\">Environment</label>\n                  <div class=\"col-sm-5\">\n                      <mat-select placeholder=\"B\" class=\"form-control\">\n                          <mat-option value=\"yes\">Y</mat-option>\n                          <mat-option value=\"no\">N</mat-option>\n                      </mat-select>\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"control-label lb-left col-sm-6\" for=\"participantName\">Msend Error Code Version</label>\n                    <div class=\"col-sm-5\">\n                        <mat-select placeholder=\"\" class=\"form-control\">\n                            <mat-option value=\"yes\">1</mat-option>\n                            <mat-option value=\"no\">2</mat-option>\n                        </mat-select>\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                      <label class=\"control-label lb-left col-sm-6\" for=\"participantName\">File Format for Reconcilation (BDF)</label>\n                      <div class=\"col-sm-5\">\n                          <mat-select placeholder=\"\" class=\"form-control\">\n                              <mat-option value=\"yes\">BAI2</mat-option>\n                              <mat-option value=\"no\">2</mat-option>\n                          </mat-select>\n                      </div>\n                    </div>\n                    \n            <div class=\"form-group\">        \n                <div class=\"col-sm-offset-2 col-sm-9\">\n                    <button class=\"btn btn-primary add-btn btn-spc sv-btn\" (click) = \"editSection()\" >Edit Section</button>\n                  </div>\n              </div>\n          </div>\n        </mat-expansion-panel>\n    \n  \n    </mat-accordion>\n  \n    <div class=\"form-group\">        \n      <div class=\"col-sm-offset-2 col-sm-10\">\n          <button class=\"btn btn-primary add-btn btn-spc\" (click) = \"cancel()\">Submit</button>\n          <button class=\"btn btn-primary add-btn btn-spc\" (click) = \"cancel()\">Cancel</button>\n      </div> \n    </div>\n  \n    </div>\n    </div>\n    </div>\n    \n  \n    \n  "

/***/ }),

/***/ "./src/app/cross-border-onboarding/partner-details/partner-details.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/cross-border-onboarding/partner-details/partner-details.component.ts ***!
  \**************************************************************************************/
/*! exports provided: PartnerDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartnerDetailsComponent", function() { return PartnerDetailsComponent; });
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modify_general_information_modify_general_information_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modify-general-information/modify-general-information.component */ "./src/app/cross-border-onboarding/modify-general-information/modify-general-information.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PartnerDetailsComponent = /** @class */ (function () {
    function PartnerDetailsComponent(router, dialog) {
        this.router = router;
        this.dialog = dialog;
        this.panelOpenState = false;
        this.toppings = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.toppingList = ['Provisional ICA', 'Acquiring ICA', 'Billing ICA'];
    }
    PartnerDetailsComponent.prototype.ngOnInit = function () {
    };
    PartnerDetailsComponent.prototype.cancel = function () {
        this.router.navigate(['']);
    };
    PartnerDetailsComponent.prototype.editSection = function () {
        this.openDialog();
    };
    PartnerDetailsComponent.prototype.openDialog = function () {
        this.dialog.open(_modify_general_information_modify_general_information_component__WEBPACK_IMPORTED_MODULE_3__["ModifyGeneralInformationComponent"], {
            height: '550px',
        });
    };
    PartnerDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-partner-details',
            template: __webpack_require__(/*! ./partner-details.component.html */ "./src/app/cross-border-onboarding/partner-details/partner-details.component.html"),
            styles: [__webpack_require__(/*! ./partner-details.component.css */ "./src/app/cross-border-onboarding/partner-details/partner-details.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatDialog"]])
    ], PartnerDetailsComponent);
    return PartnerDetailsComponent;
}());



/***/ }),

/***/ "./src/app/cross-border-onboarding/services/cross-border-util.service.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/cross-border-onboarding/services/cross-border-util.service.ts ***!
  \*******************************************************************************/
/*! exports provided: CrossBorderUtilService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrossBorderUtilService", function() { return CrossBorderUtilService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CrossBorderUtilService = /** @class */ (function () {
    function CrossBorderUtilService(http) {
        this.http = http;
        this.serviceVariable = 'this is test variable';
    }
    CrossBorderUtilService.prototype.save = function (data, url) {
        url = 'https://test-http-b3fee.firebaseio.com/data.json';
        var header = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'content-type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: header });
        return this.http.post(url, data, options);
    };
    CrossBorderUtilService.prototype.get = function () {
        return this.http.get('https://test-http-b3fee.firebaseio.com/data.json');
    };
    CrossBorderUtilService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], CrossBorderUtilService);
    return CrossBorderUtilService;
}());



/***/ }),

/***/ "./src/app/cross-border-onboarding/system-error/system-error.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/cross-border-onboarding/system-error/system-error.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nyb3NzLWJvcmRlci1vbmJvYXJkaW5nL3N5c3RlbS1lcnJvci9zeXN0ZW0tZXJyb3IuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/cross-border-onboarding/system-error/system-error.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/cross-border-onboarding/system-error/system-error.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  system-error works!\n</p>\n"

/***/ }),

/***/ "./src/app/cross-border-onboarding/system-error/system-error.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/cross-border-onboarding/system-error/system-error.component.ts ***!
  \********************************************************************************/
/*! exports provided: SystemErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemErrorComponent", function() { return SystemErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SystemErrorComponent = /** @class */ (function () {
    function SystemErrorComponent() {
        console.log(this.successData);
    }
    SystemErrorComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SystemErrorComponent.prototype, "successData", void 0);
    SystemErrorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-system-error',
            template: __webpack_require__(/*! ./system-error.component.html */ "./src/app/cross-border-onboarding/system-error/system-error.component.html"),
            styles: [__webpack_require__(/*! ./system-error.component.css */ "./src/app/cross-border-onboarding/system-error/system-error.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SystemErrorComponent);
    return SystemErrorComponent;
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

module.exports = __webpack_require__(/*! C:\angular setup\my-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map