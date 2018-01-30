webpackJsonp(["main"],{

/***/ "../../../../../Table.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Table; });
var Table = (function () {
    function Table() {
    }
    return Table;
}());

//# sourceMappingURL=Table.js.map

/***/ }),

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

module.exports = "<tischplan></tischplan>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_tischplan_service__ = __webpack_require__("../../../../../src/app/services/tischplan.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
        this.title = 'App works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_tischplan_service__["a" /* TischplanService */]],
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_digitalerTischplan_tischplan_component__ = __webpack_require__("../../../../../src/app/components/digitalerTischplan/tischplan.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_dragula__ = __webpack_require__("../../../../ng2-dragula/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_dropdown__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_digitalerTischplan_traces_liste_traces_liste_component__ = __webpack_require__("../../../../../src/app/components/digitalerTischplan/traces-liste/traces-liste.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_digitalerTischplan_im_haus_liste_im_haus_liste_component__ = __webpack_require__("../../../../../src/app/components/digitalerTischplan/im-haus-liste/im-haus-liste.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_digitalerTischplan_anreise_liste_anreise_liste_component__ = __webpack_require__("../../../../../src/app/components/digitalerTischplan/anreise-liste/anreise-liste.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_digitalerTischplan_tableplan_tableplan_component__ = __webpack_require__("../../../../../src/app/components/digitalerTischplan/tableplan/tableplan.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_digitalerTischplan_navigation_navigation_component__ = __webpack_require__("../../../../../src/app/components/digitalerTischplan/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_digitalerTischplan_print_print_component__ = __webpack_require__("../../../../../src/app/components/digitalerTischplan/print/print.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_digitalerTischplan_form_form_component__ = __webpack_require__("../../../../../src/app/components/digitalerTischplan/form/form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_digitalerTischplan_departments_departments_component__ = __webpack_require__("../../../../../src/app/components/digitalerTischplan/departments/departments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_digitalerTischplan_departmentmenu_departmentmenu_component__ = __webpack_require__("../../../../../src/app/components/digitalerTischplan/departmentmenu/departmentmenu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_digitalerTischplan_departments_bauernstube_bauernstube_component__ = __webpack_require__("../../../../../src/app/components/digitalerTischplan/departments/bauernstube/bauernstube.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_digitalerTischplan_departments_bergler_stube_hubertus_stube_bergler_stube_hubertus_stube_component__ = __webpack_require__("../../../../../src/app/components/digitalerTischplan/departments/bergler-stube-hubertus-stube/bergler-stube-hubertus-stube.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_digitalerTischplan_departments_waeldler_stube_kristall_stube_waeldler_stube_kristall_stube_component__ = __webpack_require__("../../../../../src/app/components/digitalerTischplan/departments/waeldler-stube-kristall-stube/waeldler-stube-kristall-stube.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_digitalerTischplan_departments_edelweiss_kamin_stube_edelweiss_kamin_stube_component__ = __webpack_require__("../../../../../src/app/components/digitalerTischplan/departments/edelweiss-kamin-stube/edelweiss-kamin-stube.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_digitalerTischplan_departments_teestube_teelounge_teestube_teelounge_component__ = __webpack_require__("../../../../../src/app/components/digitalerTischplan/departments/teestube-teelounge/teestube-teelounge.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_digitalerTischplan_departments_alle_alle_component__ = __webpack_require__("../../../../../src/app/components/digitalerTischplan/departments/alle/alle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ng2_search_filter__ = __webpack_require__("../../../../ng2-search-filter/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ng2_search_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_ng2_search_filter__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_5__components_digitalerTischplan_tischplan_component__["a" /* TischplanComponent */], __WEBPACK_IMPORTED_MODULE_9__components_digitalerTischplan_traces_liste_traces_liste_component__["a" /* TracesListeComponent */], __WEBPACK_IMPORTED_MODULE_10__components_digitalerTischplan_im_haus_liste_im_haus_liste_component__["a" /* ImHausListeComponent */], __WEBPACK_IMPORTED_MODULE_11__components_digitalerTischplan_anreise_liste_anreise_liste_component__["a" /* AnreiseListeComponent */], __WEBPACK_IMPORTED_MODULE_12__components_digitalerTischplan_tableplan_tableplan_component__["a" /* TableplanComponent */], __WEBPACK_IMPORTED_MODULE_13__components_digitalerTischplan_navigation_navigation_component__["a" /* NavigationComponent */], __WEBPACK_IMPORTED_MODULE_14__components_digitalerTischplan_print_print_component__["a" /* PrintComponent */], __WEBPACK_IMPORTED_MODULE_15__components_digitalerTischplan_form_form_component__["a" /* FormComponent */], __WEBPACK_IMPORTED_MODULE_16__components_digitalerTischplan_departments_departments_component__["a" /* DepartmentsComponent */], __WEBPACK_IMPORTED_MODULE_17__components_digitalerTischplan_departmentmenu_departmentmenu_component__["a" /* DepartmentmenuComponent */], __WEBPACK_IMPORTED_MODULE_18__components_digitalerTischplan_departments_bauernstube_bauernstube_component__["a" /* BauernstubeComponent */], __WEBPACK_IMPORTED_MODULE_19__components_digitalerTischplan_departments_bergler_stube_hubertus_stube_bergler_stube_hubertus_stube_component__["a" /* BerglerStubeHubertusStubeComponent */], __WEBPACK_IMPORTED_MODULE_20__components_digitalerTischplan_departments_waeldler_stube_kristall_stube_waeldler_stube_kristall_stube_component__["a" /* WaeldlerStubeKristallStubeComponent */], __WEBPACK_IMPORTED_MODULE_21__components_digitalerTischplan_departments_edelweiss_kamin_stube_edelweiss_kamin_stube_component__["a" /* EdelweissKaminStubeComponent */], __WEBPACK_IMPORTED_MODULE_22__components_digitalerTischplan_departments_teestube_teelounge_teestube_teelounge_component__["a" /* TeestubeTeeloungeComponent */], __WEBPACK_IMPORTED_MODULE_23__components_digitalerTischplan_departments_alle_alle_component__["a" /* AlleComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__["FlashMessagesModule"],
            __WEBPACK_IMPORTED_MODULE_7_ng2_dragula__["DragulaModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_24_ng2_search_filter__["Ng2SearchPipeModule"]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/anreise-liste/anreise-liste.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row1\">\n  <div class='wrapper'>\n    <div *ngFor=\"let anreiseListeElement of anreiseListeElemente\">\n      <div class='cards-container' id='container2' [dragula]='\"evented-bag\"'>\n        <div class=\"card\" id=\"card2\" [ngStyle]=\"{'background-color': '#' + anreiseListeElement.bgColor}\">\n          <p> <b>Name:</b> {{anreiseListeElement.name}}<br>\n            <b>Zimmernummer:</b> {{anreiseListeElement.zimmernummer}}<br>\n            <b>Abreise:</b> {{anreiseListeElement.abreise}}<br>\n            <b>Personen Anzahl:</b> {{anreiseListeElement.personenAnzahl}}<br>\n            <b>Notiz1:</b> {{anreiseListeElement.notiz1}}<br>\n            <b>Notiz2:</b> {{anreiseListeElement.notiz2}}<br>\n            <b>Bemerkung:</b> {{anreiseListeElement.bemerkung}}<br>\n          </p>\n          <div *ngIf=\"anreiseListeElement.bgColor === '0a7a74'\">\n            <i class=\"fa fa-check\" style=\"float: right; color: white\"></i>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/anreise-liste/anreise-liste.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnreiseListeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_tischplan_service__ = __webpack_require__("../../../../../src/app/services/tischplan.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AnreiseListeComponent = (function () {
    function AnreiseListeComponent(tischplanService) {
        this.tischplanService = tischplanService;
    }
    AnreiseListeComponent.prototype.ngOnInit = function () {
    };
    AnreiseListeComponent.prototype.updateAnreiseListeElement = function (informationElements2) {
        this.tischplanService.updateAnreiseListeElement(informationElements2)
            .subscribe(function (response) {
            //this.imHausListeElemente = response;
            console.log('updateAnreiseListeElement response: ');
            console.log(response);
        });
    };
    return AnreiseListeComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('anreiseListeElemente'),
    __metadata("design:type", Array)
], AnreiseListeComponent.prototype, "anreiseListeElemente", void 0);
AnreiseListeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-anreise-liste',
        template: __webpack_require__("../../../../../src/app/components/digitalerTischplan/anreise-liste/anreise-liste.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digitalerTischplan/tischplan.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_tischplan_service__["a" /* TischplanService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_tischplan_service__["a" /* TischplanService */]) === "function" && _a || Object])
], AnreiseListeComponent);

var _a;
//# sourceMappingURL=anreise-liste.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/departmentmenu/departmentmenu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row4 {\n  margin-top: 90px;\n}\n\n\n@media (min-width: 1200px) {\n  .btn-default {\n    display: inline-block;\n  }\n  .btn-send {\n    display: block;\n  }\n  .row4 {\n    margin-top: 0px;\n  }\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/departmentmenu/departmentmenu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row4\" style=\"min-height: 40px;\">\n  <div class=\"col-md-3 col-xs-3\" style=\"width: 35%\">\n    <div class=\"btn-group-departments\" style=\"height: 45px; width: auto; margin: 0px 10px 5px 0px; float: left; text-align: right; display:table-cell; vertical-align:middle;\" dropdown>\n      <button dropdownToggle type=\"button\" style=\" color: #FFFFFF; border: none\" [ngStyle]=\"{'background-color': '#' + buttonBgColorDropdownToggle}\"   (mouseenter)=\"mouseEnterDropdownToggle()\"  (mouseleave)=\"mouseLeaveDropdownToggle()\" class=\"btn btn-group-departments\">\n        <div *ngIf=\"showAbteilungen\">\n          Abteilungen <i class=\"fa fa-th-large\" aria-hidden=\"true\"></i><span class=\"caret\"></span>\n        </div>\n        <div *ngIf=\"showAlleBool\">\n          Alle <i class=\"fa fa-th-large\" aria-hidden=\"true\"></i><span class=\"caret\"></span>\n        </div>\n        <div *ngIf=\"showBauernStubnBool\">\n          Bauernstube <i class=\"fa fa-th-large\" aria-hidden=\"true\"></i><span class=\"caret\"></span>\n        </div>\n        <div *ngIf=\"showBerglerBool\">\n          Berglerstube<br>HUBERTUS Stube <i class=\"fa fa-th-large\" aria-hidden=\"true\"></i><span class=\"caret\"></span>\n        </div>\n        <div *ngIf=\"showWaeldlerBool\">\n          Wäldlerstube<br>Kristallstube <i class=\"fa fa-th-large\" aria-hidden=\"true\"></i><span class=\"caret\"></span>\n        </div>\n        <div *ngIf=\"showEdelweissBool\">\n          EDELWEISS<br>Kaminstube <i class=\"fa fa-th-large\" aria-hidden=\"true\"></i><span class=\"caret\"></span>\n        </div>\n        <div *ngIf=\"showTeeStubeBool\">\n          TeeStube<br>Teelounge <i class=\"fa fa-th-large\" aria-hidden=\"true\"></i><span class=\"caret\"></span>\n        </div>\n      </button>\n      <ul *dropdownMenu class=\"dropdown-menu\"  role=\"menu\" style=\"overflow: auto; margin: 0px; width: 200px;\">\n        <li role=\"menuitem\" class=\"showBauernStubn\" style=\"padding: 10px\"  (click)=\"showBauernStubn()\" (mouseenter)=\"mouseEnterBauernStubn()\"  (mouseleave)=\"mouseLeaveBauernStubn()\" [ngStyle]=\"{'background-color': '#' + buttonBgColor1}\">\n          <p [ngStyle]=\"{'color': '#' + fontColor1}\">Bauernstube</p>\n        </li>\n        <li style=\"margin: 0px\" class=\"divider dropdown-divider\"></li>\n        <li role=\"menuitem\" class=\"showBergler\" style=\"padding: 10px\"  (click)=\"showBergler()\" (mouseenter)=\"mouseEnterBergler()\"  (mouseleave)=\"mouseLeaveBergler()\" [ngStyle]=\"{'background-color': '#' + buttonBgColor2}\">\n          <p [ngStyle]=\"{'color': '#' + fontColor2}\">Berglerstube<br>HUBERTUS Stube</p>\n        </li>\n        <li style=\"margin: 0px\" class=\"divider dropdown-divider\"></li>\n        <li role=\"menuitem\" class=\"showWaeldler\" style=\"padding: 10px\"  (click)=\"showWaeldler()\" (mouseenter)=\"mouseEnterWaeldler()\"  (mouseleave)=\"mouseLeaveWaeldler()\" [ngStyle]=\"{'background-color': '#' + buttonBgColor3}\">\n          <p [ngStyle]=\"{'color': '#' + fontColor3}\">Wäldlerstube<br>Kristallstube</p>\n        </li>\n        <li style=\"margin: 0px\" class=\"divider dropdown-divider\"></li>\n        <li role=\"menuitem\" class=\"showEdelweiss\" style=\"padding: 10px\" (click)=\"showEdelweiss()\" (mouseenter)=\"mouseEnterEdelweiss()\"  (mouseleave)=\"mouseLeaveEdelweiss()\" [ngStyle]=\"{'background-color': '#' + buttonBgColor4}\">\n          <p [ngStyle]=\"{'color': '#' + fontColor4}\">EDELWEISS<br>Kaminstube</p>\n        </li>\n        <li style=\"margin: 0px\" class=\"divider dropdown-divider\"></li>\n        <li role=\"menuitem\" class=\"showTeestube\" style=\"padding: 10px\"  (click)=\"showTeestube()\" (mouseenter)=\"mouseEnterTeestube()\"  (mouseleave)=\"mouseLeaveTeestube()\" [ngStyle]=\"{'background-color': '#' + buttonBgColor5}\">\n          <p [ngStyle]=\"{'color': '#' + fontColor5}\">TeeStube<br>Teelounge</p>\n        </li>\n        <li style=\"margin: 0px\" class=\"divider dropdown-divider\"></li>\n        <li role=\"menuitem\" class=\"showAlle\" style=\"padding: 10px\"  (click)=\"showAlle()\" (mouseenter)=\"mouseEnterAlle()\"  (mouseleave)=\"mouseLeaveAlle()\" [ngStyle]=\"{'background-color': '#' + buttonBgColor6}\">\n          <p [ngStyle]=\"{'color': '#' + fontColor6}\">Alle</p>\n        </li>\n        <li style=\"margin: 0px\" class=\"divider dropdown-divider\"></li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"col-md-3 col-xs-3\" style=\"min-height: 40px; width: 21%; border-radius: 3px\" (click)=\"showInfoForm()\"  (mouseenter)=\"mouseEnterShowInfoForm()\"  (mouseleave)=\"mouseLeaveShowInfoForm()\" [ngStyle]=\"{'background-color': '#' + buttonBgColorInfoForm}\">\n    <p style=\"margin: 8px 0px 0px 0px; text-align: center\" [ngStyle]=\"{'color': '#' + fontColorInfoForm}\">Trace</p>\n  </div>\n  <div class=\"col-md-3 col-xs-3\"  style=\"min-height: 40px; width: 21%; border-radius: 3px\" (click)=\"showNotizForm()\"  (mouseenter)=\"mouseEnterShowNotizForm()\"  (mouseleave)=\"mouseLeaveShowNotizForm()\" [ngStyle]=\"{'background-color': '#' + buttonBgColorNotizForm}\">\n    <p style=\"margin: 8px 0px 0px 0px; text-align: center\" [ngStyle]=\"{'color': '#' + fontColorNotizForm}\">Notiz</p>\n  </div>\n  <div class=\"col-md-3 col-xs-3\"  style=\"min-height: 40px; width: 21%; border-radius: 3px\" (click)=\"showTablePlan()\"  (mouseenter)=\"mouseEnterShowTablePlan()\"  (mouseleave)=\"mouseLeaveShowTablePlan()\" [ngStyle]=\"{'background-color': '#' + buttonBgColorShowTablePlan}\">\n    <p style=\"margin: 8px 0px 0px 0px; text-align: center\" [ngStyle]=\"{'color': '#' + fontColorShowTablePlan}\">Tischplan</p>\n  </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/departmentmenu/departmentmenu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DepartmentmenuComponent; });
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

var DepartmentmenuComponent = (function () {
    function DepartmentmenuComponent() {
        this.showBauernStubnBoolChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.showBerglerBoolChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.showEdelweissBoolChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.showWaeldlerBoolChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.showTeeStubeBoolChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.showAlleBoolChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.showNotizFormBoolChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.showInfoFormBoolChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.showTablePlanBoolChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.showAbteilungen = true;
        this.buttonBgColorShowTablePlan = "0a7a74";
        this.buttonBgColorInfoForm = "0a7a74";
        this.buttonBgColorNotizForm = "0a7a74";
        this.buttonBgColorDropdownToggle = "0a7a74";
    }
    DepartmentmenuComponent.prototype.ngOnInit = function () {
    };
    DepartmentmenuComponent.prototype.showBauernStubn = function () {
        console.log("showBauernStubn!");
        this.showBauernStubnBool = true;
        this.showBerglerBool = false;
        this.showWaeldlerBool = false;
        this.showEdelweissBool = false;
        this.showTeeStubeBool = false;
        this.showAlleBool = false;
        this.showAbteilungen = false;
        if (this.buttonBgColor1 === "154846") {
            this.buttonBgColor1 = "0d2f2e";
            this.buttonBgColor2 = "0a7a74";
            this.buttonBgColor3 = "0a7a74";
            this.buttonBgColor4 = "0a7a74";
            this.buttonBgColor5 = "0a7a74";
            this.buttonBgColor6 = "0a7a74";
        }
        else {
            this.buttonBgColor1 = "0a7a74";
        }
        if (this.fontColor1 === "f3efe4") {
            this.fontColor1 = "0a7a74";
            this.fontColor2 = "f3efe4";
            this.fontColor3 = "f3efe4";
            this.fontColor4 = "f3efe4";
            this.fontColor5 = "f3efe4";
            this.fontColor6 = "f3efe4";
        }
        else {
            this.fontColor1 = "f3efe4";
        }
        this.showBauernStubnBoolChange.emit(this.showBauernStubnBool);
        this.showBerglerBoolChange.emit(this.showBerglerBool);
        this.showEdelweissBoolChange.emit(this.showEdelweissBool);
        this.showWaeldlerBoolChange.emit(this.showWaeldlerBool);
        this.showTeeStubeBoolChange.emit(this.showTeeStubeBool);
        this.showAlleBoolChange.emit(this.showAlleBool);
    };
    DepartmentmenuComponent.prototype.showBergler = function () {
        console.log("showBergler!");
        this.showAbteilungen = false;
        this.showBauernStubnBool = false;
        this.showBerglerBool = true;
        console.log(this.showBerglerBool);
        this.showWaeldlerBool = false;
        this.showEdelweissBool = false;
        this.showTeeStubeBool = false;
        this.showAlleBool = false;
        if (this.buttonBgColor2 === "154846") {
            this.buttonBgColor2 = "0d2f2e";
            this.buttonBgColor1 = "0a7a74";
            this.buttonBgColor3 = "0a7a74";
            this.buttonBgColor4 = "0a7a74";
            this.buttonBgColor5 = "0a7a74";
            this.buttonBgColor6 = "0a7a74";
        }
        else {
            this.buttonBgColor2 = "0a7a74";
        }
        if (this.fontColor2 === "f3efe4") {
            this.fontColor2 = "0a7a74";
            this.fontColor1 = "f3efe4";
            this.fontColor3 = "f3efe4";
            this.fontColor4 = "f3efe4";
            this.fontColor5 = "f3efe4";
            this.fontColor6 = "f3efe4";
        }
        else {
            this.fontColor2 = "f3efe4";
        }
        this.showBauernStubnBoolChange.emit(this.showBauernStubnBool);
        this.showBerglerBoolChange.emit(this.showBerglerBool);
        this.showEdelweissBoolChange.emit(this.showEdelweissBool);
        this.showWaeldlerBoolChange.emit(this.showWaeldlerBool);
        this.showTeeStubeBoolChange.emit(this.showTeeStubeBool);
        this.showAlleBoolChange.emit(this.showAlleBool);
    };
    DepartmentmenuComponent.prototype.showWaeldler = function () {
        console.log("showWaeldler!");
        this.showBauernStubnBool = false;
        this.showBerglerBool = false;
        this.showWaeldlerBool = true;
        this.showEdelweissBool = false;
        this.showTeeStubeBool = false;
        this.showAlleBool = false;
        this.showAbteilungen = false;
        if (this.buttonBgColor3 === "154846") {
            this.buttonBgColor3 = "0d2f2e";
            this.buttonBgColor1 = "0a7a74";
            this.buttonBgColor2 = "0a7a74";
            this.buttonBgColor4 = "0a7a74";
            this.buttonBgColor5 = "0a7a74";
            this.buttonBgColor6 = "0a7a74";
        }
        else {
            this.buttonBgColor3 = "0a7a74";
        }
        if (this.fontColor3 === "f3efe4") {
            this.fontColor3 = "0a7a74";
            this.fontColor1 = "f3efe4";
            this.fontColor2 = "f3efe4";
            this.fontColor4 = "f3efe4";
            this.fontColor5 = "f3efe4";
            this.fontColor6 = "f3efe4";
        }
        else {
            this.fontColor3 = "f3efe4";
        }
        this.showBauernStubnBoolChange.emit(this.showBauernStubnBool);
        this.showBerglerBoolChange.emit(this.showBerglerBool);
        this.showEdelweissBoolChange.emit(this.showEdelweissBool);
        this.showWaeldlerBoolChange.emit(this.showWaeldlerBool);
        this.showTeeStubeBoolChange.emit(this.showTeeStubeBool);
        this.showAlleBoolChange.emit(this.showAlleBool);
    };
    DepartmentmenuComponent.prototype.showEdelweiss = function () {
        console.log("showEdelweiss!");
        this.showBauernStubnBool = false;
        this.showBerglerBool = false;
        this.showWaeldlerBool = false;
        this.showEdelweissBool = true;
        this.showTeeStubeBool = false;
        this.showAlleBool = false;
        this.showAbteilungen = false;
        if (this.buttonBgColor4 === "154846") {
            this.buttonBgColor4 = "0d2f2e";
            this.buttonBgColor1 = "0a7a74";
            this.buttonBgColor2 = "0a7a74";
            this.buttonBgColor3 = "0a7a74";
            this.buttonBgColor5 = "0a7a74";
            this.buttonBgColor6 = "0a7a74";
        }
        else {
            this.buttonBgColor4 = "0a7a74";
        }
        if (this.fontColor4 === "f3efe4") {
            this.fontColor4 = "0a7a74";
            this.fontColor1 = "f3efe4";
            this.fontColor2 = "f3efe4";
            this.fontColor3 = "f3efe4";
            this.fontColor5 = "f3efe4";
            this.fontColor6 = "f3efe4";
        }
        else {
            this.fontColor4 = "f3efe4";
        }
        this.showBauernStubnBoolChange.emit(this.showBauernStubnBool);
        this.showBerglerBoolChange.emit(this.showBerglerBool);
        this.showEdelweissBoolChange.emit(this.showEdelweissBool);
        this.showWaeldlerBoolChange.emit(this.showWaeldlerBool);
        this.showTeeStubeBoolChange.emit(this.showTeeStubeBool);
        this.showAlleBoolChange.emit(this.showAlleBool);
    };
    DepartmentmenuComponent.prototype.showTeestube = function () {
        console.log("showTeeStube!");
        this.showBauernStubnBool = false;
        this.showBerglerBool = false;
        this.showWaeldlerBool = false;
        this.showEdelweissBool = false;
        this.showTeeStubeBool = true;
        this.showAlleBool = false;
        this.showAbteilungen = false;
        if (this.buttonBgColor5 === "154846") {
            this.buttonBgColor5 = "0d2f2e";
            this.buttonBgColor1 = "0a7a74";
            this.buttonBgColor2 = "0a7a74";
            this.buttonBgColor3 = "0a7a74";
            this.buttonBgColor4 = "0a7a74";
            this.buttonBgColor6 = "0a7a74";
        }
        else {
            this.buttonBgColor5 = "0a7a74";
        }
        if (this.fontColor5 === "f3efe4") {
            this.fontColor5 = "0a7a74";
            this.fontColor4 = "f3efe4";
            this.fontColor1 = "f3efe4";
            this.fontColor2 = "f3efe4";
            this.fontColor3 = "f3efe4";
            this.fontColor6 = "f3efe4";
        }
        else {
            this.fontColor5 = "f3efe4";
        }
        this.showBauernStubnBoolChange.emit(this.showBauernStubnBool);
        this.showBerglerBoolChange.emit(this.showBerglerBool);
        this.showEdelweissBoolChange.emit(this.showEdelweissBool);
        this.showWaeldlerBoolChange.emit(this.showWaeldlerBool);
        this.showTeeStubeBoolChange.emit(this.showTeeStubeBool);
        this.showAlleBoolChange.emit(this.showAlleBool);
    };
    DepartmentmenuComponent.prototype.showAlle = function () {
        console.log("showAlle!");
        this.showBauernStubnBool = false;
        this.showBerglerBool = false;
        this.showWaeldlerBool = false;
        this.showEdelweissBool = false;
        this.showTeeStubeBool = false;
        this.showAlleBool = true;
        if (this.buttonBgColor6 === "154846") {
            this.buttonBgColor6 = "f3efe4";
            this.buttonBgColor1 = "0a7a74";
            this.buttonBgColor2 = "0a7a74";
            this.buttonBgColor3 = "0a7a74";
            this.buttonBgColor4 = "0a7a74";
            this.buttonBgColor5 = "0a7a74";
        }
        else {
            this.buttonBgColor6 = "0a7a74";
        }
        if (this.fontColor6 === "f3efe4") {
            this.fontColor6 = "0a7a74";
            this.fontColor4 = "f3efe4";
            this.fontColor1 = "f3efe4";
            this.fontColor2 = "f3efe4";
            this.fontColor3 = "f3efe4";
            this.fontColor5 = "f3efe4";
        }
        else {
            this.fontColor6 = "f3efe4";
        }
        this.showBauernStubnBoolChange.emit(this.showBauernStubnBool);
        this.showBerglerBoolChange.emit(this.showBerglerBool);
        this.showEdelweissBoolChange.emit(this.showEdelweissBool);
        this.showWaeldlerBoolChange.emit(this.showWaeldlerBool);
        this.showTeeStubeBoolChange.emit(this.showTeeStubeBool);
        this.showAlleBoolChange.emit(this.showAlleBool);
    };
    DepartmentmenuComponent.prototype.showInfoForm = function () {
        console.log("showTraceForm!");
        this.showNotizFormBool = false;
        this.showInfoFormBool = true;
        this.showTablePlanBool = false;
        if (this.buttonBgColorInfoForm === "154846") {
            this.buttonBgColorInfoForm = "0d2f2e";
            this.buttonBgColorNotizForm = "0a7a74";
            this.buttonBgColorShowTablePlan = "0a7a74";
        }
        else {
            this.buttonBgColorInfoForm = "0a7a74";
        }
        if (this.fontColorInfoForm === "f3efe4") {
            this.fontColorInfoForm = "0a7a74";
            this.fontColorNotizForm = "f3efe4";
            this.fontColorShowTablePlan = "f3efe4";
        }
        else {
            this.fontColorInfoForm = "f3efe4";
        }
        this.showNotizFormBoolChange.emit(this.showNotizFormBool);
        this.showInfoFormBoolChange.emit(this.showInfoFormBool);
        this.showTablePlanBoolChange.emit(this.showTablePlanBool);
    };
    DepartmentmenuComponent.prototype.showNotizForm = function () {
        console.log("showNotizForm!");
        this.showNotizFormBool = true;
        this.showTablePlanBool = false;
        this.showInfoFormBool = false;
        if (this.buttonBgColorNotizForm === "154846") {
            this.buttonBgColorNotizForm = "0d2f2e";
            this.buttonBgColorInfoForm = "0a7a74";
            this.buttonBgColorShowTablePlan = "0a7a74";
        }
        else {
            this.buttonBgColorNotizForm = "0a7a74";
        }
        if (this.fontColorNotizForm === "f3efe4") {
            this.fontColorNotizForm = "0a7a74";
            this.fontColorInfoForm = "f3efe4";
            this.fontColorShowTablePlan = "f3efe4";
        }
        else {
            this.fontColorNotizForm = "f3efe4";
        }
        this.showNotizFormBoolChange.emit(this.showNotizFormBool);
        this.showInfoFormBoolChange.emit(this.showInfoFormBool);
        this.showTablePlanBoolChange.emit(this.showTablePlanBool);
    };
    DepartmentmenuComponent.prototype.showTablePlan = function () {
        console.log("showTablePlan!");
        this.showNotizFormBool = false;
        this.showTablePlanBool = true;
        this.showInfoFormBool = false;
        if (this.buttonBgColorShowTablePlan = "154846") {
            this.buttonBgColorShowTablePlan = "0d2f2e";
            this.buttonBgColorNotizForm = "0a7a74";
            this.buttonBgColorInfoForm = "0a7a74";
        }
        else {
            this.buttonBgColorShowTablePlan = "0a7a74";
        }
        if (this.fontColorShowTablePlan = "f3efe4") {
            this.fontColorShowTablePlan = "0a7a74";
            this.fontColorNotizForm = "f3efe4";
            this.fontColorInfoForm = "f3efe4";
        }
        else {
            this.fontColorShowTablePlan = "0a7a74";
        }
        this.showNotizFormBoolChange.emit(this.showNotizFormBool);
        this.showInfoFormBoolChange.emit(this.showInfoFormBool);
        this.showTablePlanBoolChange.emit(this.showTablePlanBool);
    };
    DepartmentmenuComponent.prototype.mouseEnterShowInfoForm = function () {
        console.log("mouse enter : ");
        if (this.buttonBgColorInfoForm === "0a7a74") {
            console.log('mouse enter1 :');
            this.buttonBgColorInfoForm = "154846";
        }
    };
    DepartmentmenuComponent.prototype.mouseLeaveShowInfoForm = function () {
        if (this.buttonBgColorInfoForm === "0a7a74") {
            console.log('mouse leave1 :');
            this.buttonBgColorInfoForm = "154846";
        }
        else if (this.buttonBgColorInfoForm === "154846") {
            console.log('mouse leave2 :');
            this.buttonBgColorInfoForm = "0a7a74";
        }
    };
    DepartmentmenuComponent.prototype.mouseEnterShowNotizForm = function () {
        console.log("mouse enter : ");
        if (this.buttonBgColorNotizForm === "0a7a74") {
            console.log('mouse enter1 :');
            this.buttonBgColorNotizForm = "154846";
        }
    };
    DepartmentmenuComponent.prototype.mouseLeaveShowNotizForm = function () {
        if (this.buttonBgColorNotizForm === "0a7a74") {
            console.log('mouse leave1 :');
            this.buttonBgColorNotizForm = "154846";
        }
        else if (this.buttonBgColorNotizForm === "154846") {
            console.log('mouse leave2 :');
            this.buttonBgColorNotizForm = "0a7a74";
        }
    };
    DepartmentmenuComponent.prototype.mouseEnterShowTablePlan = function () {
        console.log("mouse enter mouseEnterShowTablePlan: ");
        if (this.buttonBgColorShowTablePlan === "0a7a74") {
            console.log('mouse enter1 mouseEnterShowTablePlan:');
            this.buttonBgColorShowTablePlan = "154846";
        }
    };
    DepartmentmenuComponent.prototype.mouseLeaveShowTablePlan = function () {
        if (this.buttonBgColorShowTablePlan === "0a7a74") {
            console.log('mouse leave1 mouseEnterShowTablePlan:');
            this.buttonBgColorShowTablePlan = "154846";
        }
        else if (this.buttonBgColorShowTablePlan === "154846") {
            console.log('mouse leave2 mouseEnterShowTablePlan:');
            this.buttonBgColorShowTablePlan = "0a7a74";
        }
    };
    DepartmentmenuComponent.prototype.mouseEnterDropdownToggle = function () {
        console.log("mouse enter mouseEnterShowTablePlan: ");
        if (this.buttonBgColorDropdownToggle === "0a7a74") {
            console.log('mouse enter1 mouseEnterShowTablePlan:');
            this.buttonBgColorDropdownToggle = "154846";
        }
    };
    DepartmentmenuComponent.prototype.mouseLeaveDropdownToggle = function () {
        if (this.buttonBgColorDropdownToggle === "0a7a74") {
            console.log('mouse leave1 mouseEnterShowTablePlan:');
            this.buttonBgColorDropdownToggle = "154846";
        }
        else if (this.buttonBgColorDropdownToggle === "154846") {
            console.log('mouse leave2 mouseEnterShowTablePlan:');
            this.buttonBgColorDropdownToggle = "0a7a74";
        }
    };
    DepartmentmenuComponent.prototype.mouseEnterBauernStubn = function () {
        console.log("mouse enter mouseEnterBauernStubn: ");
        if (this.buttonBgColor1 === "0a7a74") {
            console.log('mouse enter1 mouseEnterBauernStubn:');
            this.buttonBgColor1 = "154846";
        }
    };
    DepartmentmenuComponent.prototype.mouseLeaveBauernStubn = function () {
        if (this.buttonBgColor1 === "0a7a74") {
            console.log('mouse leave1 mouseLeaveBauernStubn:');
            this.buttonBgColor1 = "154846";
        }
        else if (this.buttonBgColor1 === "154846") {
            console.log('mouse leave2 mouseLeaveBauernStubn:');
            this.buttonBgColor1 = "0a7a74";
        }
    };
    DepartmentmenuComponent.prototype.mouseEnterBergler = function () {
        console.log("mouse enter mouseEnterShowTablePlan: ");
        if (this.buttonBgColor2 === "0a7a74") {
            console.log('mouse enter1 mouseEnterShowTablePlan:');
            this.buttonBgColor2 = "154846";
        }
    };
    DepartmentmenuComponent.prototype.mouseLeaveBergler = function () {
        if (this.buttonBgColor2 === "0a7a74") {
            console.log('mouse leave1 mouseEnterShowTablePlan:');
            this.buttonBgColor2 = "154846";
        }
        else if (this.buttonBgColor2 === "154846") {
            console.log('mouse leave2 mouseEnterShowTablePlan:');
            this.buttonBgColor2 = "0a7a74";
        }
    };
    DepartmentmenuComponent.prototype.mouseEnterWaeldler = function () {
        console.log("mouse enter mouseEnterShowTablePlan: ");
        if (this.buttonBgColor3 === "0a7a74") {
            console.log('mouse enter1 mouseEnterShowTablePlan:');
            this.buttonBgColor3 = "154846";
        }
    };
    DepartmentmenuComponent.prototype.mouseLeaveWaeldler = function () {
        if (this.buttonBgColor3 === "0a7a74") {
            console.log('mouse leave1 mouseEnterShowTablePlan:');
            this.buttonBgColor3 = "154846";
        }
        else if (this.buttonBgColor3 === "154846") {
            console.log('mouse leave2 mouseEnterShowTablePlan:');
            this.buttonBgColor3 = "0a7a74";
        }
    };
    DepartmentmenuComponent.prototype.mouseEnterEdelweiss = function () {
        console.log("mouse enter mouseEnterShowTablePlan: ");
        if (this.buttonBgColor4 === "0a7a74") {
            console.log('mouse enter1 mouseEnterShowTablePlan:');
            this.buttonBgColor4 = "154846";
        }
    };
    DepartmentmenuComponent.prototype.mouseLeaveEdelweiss = function () {
        if (this.buttonBgColor4 === "0a7a74") {
            console.log('mouse leave1 mouseEnterShowTablePlan:');
            this.buttonBgColor4 = "154846";
        }
        else if (this.buttonBgColor4 === "154846") {
            console.log('mouse leave2 mouseEnterShowTablePlan:');
            this.buttonBgColor4 = "0a7a74";
        }
    };
    DepartmentmenuComponent.prototype.mouseEnterTeestube = function () {
        console.log("mouse enter mouseEnterShowTablePlan: ");
        if (this.buttonBgColor5 === "0a7a74") {
            console.log('mouse enter1 mouseEnterShowTablePlan:');
            this.buttonBgColor5 = "154846";
        }
    };
    DepartmentmenuComponent.prototype.mouseLeaveTeestube = function () {
        if (this.buttonBgColor5 === "0a7a74") {
            console.log('mouse leave1 mouseEnterShowTablePlan:');
            this.buttonBgColor5 = "154846";
        }
        else if (this.buttonBgColor5 === "154846") {
            console.log('mouse leave2 mouseEnterShowTablePlan:');
            this.buttonBgColor5 = "0a7a74";
        }
    };
    DepartmentmenuComponent.prototype.mouseEnterAlle = function () {
        console.log("mouse enter mouseEnterShowTablePlan: ");
        if (this.buttonBgColor6 === "0a7a74") {
            console.log('mouse enter1 mouseEnterShowTablePlan:');
            this.buttonBgColor6 = "154846";
        }
    };
    DepartmentmenuComponent.prototype.mouseLeaveAlle = function () {
        if (this.buttonBgColor6 === "0a7a74") {
            console.log('mouse leave1 mouseEnterShowTablePlan:');
            this.buttonBgColor6 = "154846";
        }
        else if (this.buttonBgColor6 === "154846") {
            console.log('mouse leave2 mouseEnterShowTablePlan:');
            this.buttonBgColor6 = "0a7a74";
        }
    };
    DepartmentmenuComponent.prototype.none = function (event) {
        event.stopPropagation();
    };
    return DepartmentmenuComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('buttonBgColor1'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "buttonBgColor1", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('buttonBgColor2'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "buttonBgColor2", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('buttonBgColor3'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "buttonBgColor3", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('buttonBgColor4'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "buttonBgColor4", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('buttonBgColor5'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "buttonBgColor5", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('buttonBgColor6'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "buttonBgColor6", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('fontColor1'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "fontColor1", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('fontColor2'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "fontColor2", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('fontColor3'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "fontColor3", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('fontColor4'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "fontColor4", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('fontColor5'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "fontColor5", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('fontColor6'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "fontColor6", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showBauernStubnBool'),
    __metadata("design:type", Boolean)
], DepartmentmenuComponent.prototype, "showBauernStubnBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showBerglerBool'),
    __metadata("design:type", Boolean)
], DepartmentmenuComponent.prototype, "showBerglerBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showEdelweissBool'),
    __metadata("design:type", Boolean)
], DepartmentmenuComponent.prototype, "showEdelweissBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showWaeldlerBool'),
    __metadata("design:type", Boolean)
], DepartmentmenuComponent.prototype, "showWaeldlerBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showTeeStubeBool'),
    __metadata("design:type", Boolean)
], DepartmentmenuComponent.prototype, "showTeeStubeBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showAlleBool'),
    __metadata("design:type", Boolean)
], DepartmentmenuComponent.prototype, "showAlleBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], DepartmentmenuComponent.prototype, "showBauernStubnBoolChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], DepartmentmenuComponent.prototype, "showBerglerBoolChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _c || Object)
], DepartmentmenuComponent.prototype, "showEdelweissBoolChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _d || Object)
], DepartmentmenuComponent.prototype, "showWaeldlerBoolChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _e || Object)
], DepartmentmenuComponent.prototype, "showTeeStubeBoolChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _f || Object)
], DepartmentmenuComponent.prototype, "showAlleBoolChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('buttonBgColorInfoForm'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "buttonBgColorInfoForm", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('fontColorInfoForm'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "fontColorInfoForm", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('fontColorNotizForm'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "fontColorNotizForm", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('buttonBgColorNotizForm'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "buttonBgColorNotizForm", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('buttonBgColorShowTablePlan'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "buttonBgColorShowTablePlan", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('fontColorShowTablePlan'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "fontColorShowTablePlan", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showNotizFormBool'),
    __metadata("design:type", Boolean)
], DepartmentmenuComponent.prototype, "showNotizFormBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showInfoFormBool'),
    __metadata("design:type", Boolean)
], DepartmentmenuComponent.prototype, "showInfoFormBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showTablePlanBool'),
    __metadata("design:type", Boolean)
], DepartmentmenuComponent.prototype, "showTablePlanBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _g || Object)
], DepartmentmenuComponent.prototype, "showNotizFormBoolChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _h || Object)
], DepartmentmenuComponent.prototype, "showInfoFormBoolChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _j || Object)
], DepartmentmenuComponent.prototype, "showTablePlanBoolChange", void 0);
DepartmentmenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-departmentmenu',
        template: __webpack_require__("../../../../../src/app/components/digitalerTischplan/departmentmenu/departmentmenu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digitalerTischplan/departmentmenu/departmentmenu.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DepartmentmenuComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=departmentmenu.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/departments/alle/alle.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showAlleBool\">\n  <div *ngFor=\"let tableBauernstube of tablesBauernstube | filter:term; let j = index;\">\n    <div *ngIf=\"tablesBauernstube[j] !== tablesBauernstube[j+1]\">\n      <button style=\"float: right; margin: 20px 0px 20px 0px; background-color: #0a7a74; color: #FFFFFF\"  type=\"button\" class=\"btn btn-send\" (click)=\"occupy(tableBauernstube, j)\">{{tableBauernstube.isBesetzt === 'true' ? 'FREI MACHEN' : ''}}</button>\n      <h4><b> Tisch:</b>{{tableBauernstube.number}} </h4><br>\n      <div class='cards-container' id='containerBauernstube' [ngStyle]=\"{'background-color': + tableBauernstube.bgColor}\">\n        <div class=\"table\" [ngStyle]=\"{'background-color': '#' + tableBauernstube.bgColor}\">\n          <div *ngIf=\"tableBauernstube.isBesetzt === 'true'\">\n            <div [style.border]=\"getStyle(tablesBauernstube[j].trace)\">\n            <p style=\"background-color: #FFFFFF; padding: 10px\">\n              <b> Name:</b> {{tableBauernstube.nameValue}}<br>\n              <b> Zimmernummer:</b> {{tableBauernstube.zimmernummerValue}}<br>\n              <b> Anreise Datum:</b> {{tableBauernstube.anreiseValue}}<br>\n              <b> Abreise Datum:</b> {{tableBauernstube.abreiseValue}}<br>\n              <b> Personenanzahl:</b> {{tableBauernstube.personenAnzahlValue}}<br>\n              <b> Notiz1:</b> {{tableBauernstube.notiz1Value}}<br>\n              <b> Notiz2:</b> {{tableBauernstube.notiz2Value}}<br>\n              <b> Trace:</b> {{tableBauernstube.trace}}<br>\n              <b> Bemerkung:</b> {{tableBauernstube.bemerkungValue}}<br>\n            </p>\n            </div>\n            <div *ngIf=\"tableBauernstube.nameValue2\">\n              <div [style.border]=\"getStyle(tablesBauernstube[j].trace2)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableBauernstube.nameValue2}}<br>\n                  <b> Zimmernummer:</b> {{tableBauernstube.zimmernummerValue2}}<br>\n                  <b> Anreise Datum:</b> {{tableBauernstube.anreiseValue2}}<br>\n                  <b> Abreise Datum:</b> {{tableBauernstube.abreiseValue2}}<br>\n                  <b> Personenanzahl:</b> {{tableBauernstube.personenAnzahlValue2}}<br>\n                  <b> Notiz1:</b> {{tableBauernstube.notiz1Value2}}<br>\n                  <b> Notiz2:</b> {{tableBauernstube.notiz2Value2}}<br>\n                  <b> Trace:</b> {{tableBauernstube.trace2}}<br>\n                  <b> BemerkungValue:</b> {{tableBauernstube.bemerkungValue2}}<br>\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableBauernstube.nameValue3\">\n              <div [style.border]=\"getStyle(tablesBauernstube[j].trace3)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableBauernstube.nameValue3}}<br>\n                  <b> Zimmernummer:</b> {{tableBauernstube.zimmernummerValue3}}<br>\n                  <b> Anreise Datum:</b> {{tableBauernstube.anreiseValue3}}<br>\n                  <b> Abreise Datum:</b> {{tableBauernstube.abreiseValue3}}<br>\n                  <b> Personenanzahl:</b> {{tableBauernstube.personenAnzahlValue3}}<br>\n                  <b> Notiz1:</b> {{tableBauernstube.notiz1Value3}}<br>\n                  <b> Notiz2:</b> {{tableBauernstube.notiz2Value3}}<br>\n                  <b> Trace:</b> {{tableBauernstube.trace3}}<br>\n                  <b> BemerkungValue:</b> {{tableBauernstube.bemerkungValue3}}<br>\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableBauernstube.nameValue4\">\n              <div [style.border]=\"getStyle(tablesBauernstube[j].trace4)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableBauernstube.nameValue4}}<br>\n                  <b> Zimmernummer:</b> {{tableBauernstube.zimmernummerValue4}}<br>\n                  <b> Anreise Datum:</b> {{tableBauernstube.anreiseValue4}}<br>\n                  <b> Abreise Datum:</b> {{tableBauernstube.abreiseValue4}}<br>\n                  <b> Personenanzahl:</b> {{tableBauernstube.personenAnzahlValue4}}<br>\n                  <b> Notiz1:</b> {{tableBauernstube.notiz1Value4}}<br>\n                  <b> Notiz2:</b> {{tableBauernstube.notiz2Value4}}<br>\n                  <b> Trace:</b> {{tableBauernstube.trace4}}<br>\n                  <b> BemerkungValue:</b> {{tableBauernstube.bemerkungValue4}}<br>\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableBauernstube.nameValue5\">\n              <div [style.border]=\"getStyle(tablesBauernstube[j].trace5)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableBauernstube.nameValue5}}<br>\n                  <b> Zimmernummer:</b> {{tableBauernstube.zimmernummerValue5}}<br>\n                  <b> Anreise Datum:</b> {{tableBauernstube.anreiseValue5}}<br>\n                  <b> Abreise Datum:</b> {{tableBauernstube.abreiseValue5}}<br>\n                  <b> Personenanzahl:</b> {{tableBauernstube.personenAnzahlValue5}}<br>\n                  <b> Notiz1:</b> {{tableBauernstube.notiz1Value5}}<br>\n                  <b> Notiz2:</b> {{tableBauernstube.notiz2Value5}}<br>\n                  <b> Trace:</b> {{tableBauernstube.trace5}}<br>\n                  <b> BemerkungValue:</b> {{tableBauernstube.bemerkungValue5}}<br>\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableBauernstube.nameValue6\">\n              <div [style.border]=\"getStyle(tablesBauernstube[j].trace6)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableBauernstube.nameValue6}}<br>\n                  <b> Zimmernummer:</b> {{tableBauernstube.zimmernummerValue6}}<br>\n                  <b> Anreise Datum:</b> {{tableBauernstube.anreiseValue6}}<br>\n                  <b> Abreise Datum:</b> {{tableBauernstube.abreiseValue6}}<br>\n                  <b> Personenanzahl:</b> {{tableBauernstube.personenAnzahlValue6}}<br>\n                  <b> Notiz1:</b> {{tableBauernstube.notiz1Value6}}<br>\n                  <b> Notiz2:</b> {{tableBauernstube.notiz2Value6}}<br>\n                  <b> Trace:</b> {{tableBauernstube.trace6}}<br>\n                  <b> BemerkungValue:</b> {{tableBauernstube.bemerkungValue6}}<br>\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableBauernstube.nameValue7\">\n              <div [style.border]=\"getStyle(tablesBauernstube[j].trace7)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableBauernstube.nameValue7}}<br>\n                  <b> Zimmernummer:</b> {{tableBauernstube.zimmernummerValue7}}<br>\n                  <b> Anreise Datum:</b> {{tableBauernstube.anreiseValue7}}<br>\n                  <b> Abreise Datum:</b> {{tableBauernstube.abreiseValue7}}<br>\n                  <b> Personenanzahl:</b> {{tableBauernstube.personenAnzahlValue7}}<br>\n                  <b> Notiz1:</b> {{tableBauernstube.notiz1Value7}}<br>\n                  <b> Notiz2:</b> {{tableBauernstube.notiz2Value7}}<br>\n                  <b> Trace:</b> {{tableBauernstube.trace7}}<br>\n                  <b> BemerkungValue:</b> {{tableBauernstube.bemerkungValue7}}<br>\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableBauernstube.nameValue8\">\n              <div [style.border]=\"getStyle(tablesBauernstube[j].trace8)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableBauernstube.nameValue8}}<br>\n                  <b> Zimmernummer:</b> {{tableBauernstube.zimmernummerValue8}}<br>\n                  <b> Anreise Datum:</b> {{tableBauernstube.anreiseValue8}}<br>\n                  <b> Abreise Datum:</b> {{tableBauernstube.abreiseValue8}}<br>\n                  <b> Personenanzahl:</b> {{tableBauernstube.personenAnzahlValue8}}<br>\n                  <b> Notiz1:</b> {{tableBauernstube.notiz1Value8}}<br>\n                  <b> Notiz2:</b> {{tableBauernstube.notiz2Value8}}<br>\n                  <b> Trace:</b> {{tableBauernstube.trace8}}<br>\n                  <b> BemerkungValue:</b> {{tableBauernstube.bemerkungValue8}}<br>\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableBauernstube.nameValue9\">\n              <div [style.border]=\"getStyle(tablesBauernstube[j].trace9)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableBauernstube.nameValue9}}<br>\n                  <b> Zimmernummer:</b> {{tableBauernstube.zimmernummerValue9}}<br>\n                  <b> Anreise Datum:</b> {{tableBauernstube.anreiseValue9}}<br>\n                  <b> Abreise Datum:</b> {{tableBauernstube.abreiseValue9}}<br>\n                  <b> Personenanzahl:</b> {{tableBauernstube.personenAnzahlValue9}}<br>\n                  <b> Notiz1:</b> {{tableBauernstube.notiz1Value9}}<br>\n                  <b> Notiz2:</b> {{tableBauernstube.notiz2Value9}}<br>\n                  <b> Trace:</b> {{tableBauernstube.trace9}}<br>\n                  <b> BemerkungValue:</b> {{tableBauernstube.bemerkungValue9}}<br>\n                </p>\n              </div>\n              <div *ngIf=\"tableBauernstube.nameValue10\">\n                <div [style.border]=\"getStyle(tablesBauernstube[j].trace10)\">\n                  <p style=\"background-color: #FFFFFF; padding: 10px\">\n                    <b> Name:</b> {{tableBauernstube.nameValue10}}<br>\n                    <b> Zimmernummer:</b> {{tableBauernstube.zimmernummerValue10}}<br>\n                    <b> Anreise Datum:</b> {{tableBauernstube.anreiseValue10}}<br>\n                    <b> Abreise Datum:</b> {{tableBauernstube.abreiseValue10}}<br>\n                    <b> Personenanzahl:</b> {{tableBauernstube.personenAnzahlValue10}}<br>\n                    <b> Notiz1:</b> {{tableBauernstube.notiz1Value10}}<br>\n                    <b> Notiz2:</b> {{tableBauernstube.notiz2Value10}}<br>\n                    <b> Trace:</b> {{tableBauernstube.trace10}}<br>\n                    <b> BemerkungValue:</b> {{tableBauernstube.bemerkungValue10}}<br>\n                  </p>\n                </div>\n              </div>\n              <div *ngIf=\"tableBauernstube.nameValue11\">\n                <div [style.border]=\"getStyle(tablesBauernstube[j].trace11)\">\n                  <p style=\"background-color: #FFFFFF; padding: 10px\">\n                    <b> Name:</b> {{tableBauernstube.nameValue11}}<br>\n                    <b> Zimmernummer:</b> {{tableBauernstube.zimmernummerValue11}}<br>\n                    <b> Anreise Datum:</b> {{tableBauernstube.anreiseValue11}}<br>\n                    <b> Abreise Datum:</b> {{tableBauernstube.abreiseValue11}}<br>\n                    <b> Personenanzahl:</b> {{tableBauernstube.personenAnzahlValue11}}<br>\n                    <b> Notiz1:</b> {{tableBauernstube.notiz1Value11}}<br>\n                    <b> Notiz2:</b> {{tableBauernstube.notiz2Value11}}<br>\n                    <b> Trace:</b> {{tableBauernstube.trace11}}<br>\n                    <b> BemerkungValue:</b> {{tableBauernstube.bemerkungValue11}}<br>\n                  </p>\n                </div>\n              </div>\n              <div *ngIf=\"tableBauernstube.nameValue12\">\n                <div [style.border]=\"getStyle(tablesBauernstube[j].trace12)\">\n                  <p style=\"background-color: #FFFFFF; padding: 10px\">\n                    <b> Name:</b> {{tableBauernstube.nameValue12}}<br>\n                    <b> Zimmernummer:</b> {{tableBauernstube.zimmernummerValue12}}<br>\n                    <b> Anreise Datum:</b> {{tableBauernstube.anreiseValue12}}<br>\n                    <b> Abreise Datum:</b> {{tableBauernstube.abreiseValue12}}<br>\n                    <b> Personenanzahl:</b> {{tableBauernstube.personenAnzahlValue12}}<br>\n                    <b> Notiz1:</b> {{tableBauernstube.notiz1Value12}}<br>\n                    <b> Notiz2:</b> {{tableBauernstube.notiz2Value12}}<br>\n                    <b> Trace:</b> {{tableBauernstube.trace12}}<br>\n                    <b> BemerkungValue:</b> {{tableBauernstube.bemerkungValue12}}<br>\n                  </p>\n                </div>\n              </div>\n              <div *ngIf=\"tableBauernstube.nameValue13\">\n                <div [style.border]=\"getStyle(tablesBauernstube[j].trace13)\">\n                  <p style=\"background-color: #FFFFFF; padding: 10px\">\n                    <b> Name:</b> {{tableBauernstube.nameValue13}}<br>\n                    <b> Zimmernummer:</b> {{tableBauernstube.zimmernummerValue13}}<br>\n                    <b> Anreise Datum:</b> {{tableBauernstube.anreiseValue13}}<br>\n                    <b> Abreise Datum:</b> {{tableBauernstube.abreiseValue13}}<br>\n                    <b> Personenanzahl:</b> {{tableBauernstube.personenAnzahlValue13}}<br>\n                    <b> Notiz1:</b> {{tableBauernstube.notiz1Value13}}<br>\n                    <b> Notiz2:</b> {{tableBauernstube.notiz2Value13}}<br>\n                    <b> Trace:</b> {{tableBauernstube.trace13}}<br>\n                    <b> BemerkungValue:</b> {{tableBauernstube.bemerkungValue13}}<br>\n                  </p>\n                </div>\n              </div>\n              <div *ngIf=\"tableBauernstube.nameValue14\">\n                <div [style.border]=\"getStyle(tablesBauernstube[j].trace14)\">\n                  <p style=\"background-color: #FFFFFF; padding: 10px\">\n                    <b> Name:</b> {{tableBauernstube.nameValue14}}<br>\n                    <b> Zimmernummer:</b> {{tableBauernstube.zimmernummerValue14}}<br>\n                    <b> Anreise Datum:</b> {{tableBauernstube.anreiseValue14}}<br>\n                    <b> Abreise Datum:</b> {{tableBauernstube.abreiseValue14}}<br>\n                    <b> Personenanzahl:</b> {{tableBauernstube.personenAnzahlValue14}}<br>\n                    <b> Notiz1:</b> {{tableBauernstube.notiz1Value14}}<br>\n                    <b> Notiz2:</b> {{tableBauernstube.notiz2Value14}}<br>\n                    <b> Trace:</b> {{tableBauernstube.trace14}}<br>\n                    <b> BemerkungValue:</b> {{tableBauernstube.bemerkungValue14}}<br>\n                  </p>\n                </div>\n              </div>\n              <div *ngIf=\"tableBauernstube.nameValue15\">\n                <div [style.border]=\"getStyle(tablesBauernstube[j].trace15)\">\n                  <p style=\"background-color: #FFFFFF; padding: 10px\">\n                    <b> Name:</b> {{tableBauernstube.nameValue15}}<br>\n                    <b> Zimmernummer:</b> {{tableBauernstube.zimmernummerValue15}}<br>\n                    <b> Anreise Datum:</b> {{tableBauernstube.anreiseValue15}}<br>\n                    <b> Abreise Datum:</b> {{tableBauernstube.abreiseValue15}}<br>\n                    <b> Personenanzahl:</b> {{tableBauernstube.personenAnzahlValue15}}<br>\n                    <b> Notiz1:</b> {{tableBauernstube.notiz1Value15}}<br>\n                    <b> Notiz2:</b> {{tableBauernstube.notiz2Value15}}<br>\n                    <b> Trace:</b> {{tableBauernstube.trace15}}<br>\n                    <b> BemerkungValue:</b> {{tableBauernstube.bemerkungValue15}}<br>\n                  </p>\n                </div>\n              </div>\n              <div *ngIf=\"tableBauernstube.newTraceName\">\n                <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                  <b> Zimmernummer: </b>{{tableBauernstube.newTraceRoomNumber}}<br> <b> Neuer Trace: </b>{{tableBauernstube.newTraceText}} <br> <b> Tischnummer: </b>{{tableBauernstube.newTraceTableNumber}} <br> <b> Mitarbeiter: </b>{{tableBauernstube.newTraceEmployee}} <br> <b> Name: </b>{{tableBauernstube.newTraceName}} <br> <b> Datum: </b>{{tableBauernstube.newTraceDate}}\n                </p>\n              </div>\n              <div *ngIf=\"tableBauernstube.newTraceName1\">\n                <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                  <b> Zimmernummer: </b>{{tableBauernstube.newTraceRoomNumber1}}<br> <b> Neuer Trace: </b>{{tableBauernstube.newTraceText1}} <br> <b> Tischnummer: </b>{{tableBauernstube.newTraceTableNumber1}} <br> <b> Mitarbeiter: </b>{{tableBauernstube.newTraceEmployee1}} <br> <b> Name: </b>{{tableBauernstube.newTraceName1}} <br> <b> Datum: </b>{{tableBauernstube.newTraceDate1}}                            </p>\n              </div>\n              <div *ngIf=\"tableBauernstube.newTraceName2\">\n                <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                  <b> Zimmernummer: </b>{{tableBauernstube.newTraceRoomNumber2}}<br> <b> Neuer Trace: </b>{{tableBauernstube.newTraceText2}} <br> <b> Tischnummer: </b>{{tableBauernstube.newTraceTableNumber2}} <br> <b> Mitarbeiter: </b>{{tableBauernstube.newTraceEmployee2}} <br> <b> Name: </b>{{tableBauernstube.newTraceName2}} <br> <b> Datum: </b>{{tableBauernstube.newTraceDate2}}\n                </p>\n              </div>\n            </div>\n          </div>\n          <div *ngIf=\"tableBauernstube.placeholder === 'true'\">\n            <p [dragula]='\"evented-bag\"' id=\"Bauernstube\" style=\"background-color: #9d9d9d; border: dashed 3px black; margin-top: 50px; opacity: 0.4; padding: 10px 10px 10px 10px\">Listen-Element hier hin ziehen! {{tableBauernstube.number}} {{tableBauernstube.department}} {{j}}</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div *ngFor=\"let tableBerglerStubeHubertusStube of tablesBerglerStubeHubertusStube | filter:term; let j = index;\">\n    <div *ngIf=\"tablesBerglerStubeHubertusStube[j] !== tablesBerglerStubeHubertusStube[j+1]\">\n      <button style=\"float: right; margin: 20px 0px 20px 0px; background-color: #0a7a74; color: #FFFFFF\" type=\"button\" class=\"btn btn-send\" (click)=\"occupy(tableBerglerStubeHubertusStube, j)\">{{tableBerglerStubeHubertusStube.isBesetzt === 'true' ? 'FREI MACHEN' : '' }}</button>\n      <h4><b> Tisch: </b>{{tableBerglerStubeHubertusStube.number}} </h4><br>\n      <div class='cards-container' id='containerBerglerStubeHubertusStube'  [ngStyle]=\"{'background-color': + tableBerglerStubeHubertusStube.bgColor}\">\n        <div class=\"table\" [ngStyle]=\"{'background-color': '#' + tableBerglerStubeHubertusStube.bgColor}\">\n          <div *ngIf=\"tableBerglerStubeHubertusStube.isBesetzt === 'true'\">\n            <div [style.border]=\"getStyle(tablesBerglerStubeHubertusStube[j].trace)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableBerglerStubeHubertusStube.nameValue}}<br>\n                <b> Zimmernummer:</b> {{tableBerglerStubeHubertusStube.zimmernummerValue}}<br>\n                <b> Anreise Datum:</b> {{tableBerglerStubeHubertusStube.anreiseValue}}<br>\n                <b> Abreise Datum:</b> {{tableBerglerStubeHubertusStube.abreiseValue}}<br>\n                <b> Personenanzahl:</b> {{tableBerglerStubeHubertusStube.personenAnzahlValue}}<br>\n                <b> Notiz1:</b> {{tableBerglerStubeHubertusStube.notiz1Value}}<br>\n                <b> Notiz2:</b> {{tableBerglerStubeHubertusStube.notiz2Value}}<br>\n                <b> Trace:</b> {{tableBerglerStubeHubertusStube.trace}}<br>\n                <b> Bemerkung:</b> {{tableBerglerStubeHubertusStube.bemerkungValue}}<br>\n              </p>\n            </div>\n            <div *ngIf=\"tableBerglerStubeHubertusStube.nameValue2\">\n              <div [style.border]=\"getStyle(tablesBerglerStubeHubertusStube[j].trace2)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableBerglerStubeHubertusStube.nameValue2}}<br>\n                  <b> Zimmernummer:</b> {{tableBerglerStubeHubertusStube.zimmernummerValue2}}<br>\n                  <b> Anreise Datum:</b> {{tableBerglerStubeHubertusStube.anreiseValue2}}<br>\n                  <b> Abreise Datum:</b> {{tableBerglerStubeHubertusStube.abreiseValue2}}<br>\n                  <b> Personenanzahl:</b> {{tableBerglerStubeHubertusStube.personenAnzahlValue2}}<br>\n                  <b> Notiz1:</b> {{tableBerglerStubeHubertusStube.notiz1Value2}}<br>\n                  <b> Notiz2:</b> {{tableBerglerStubeHubertusStube.notiz2Value2}}<br>\n                  <b> Trace:</b> {{tableBerglerStubeHubertusStube.trace2}}<br>\n                  <b> BemerkungValue:</b> {{tableBerglerStubeHubertusStube.bemerkungValue2}}<br>\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableBerglerStubeHubertusStube.nameValue3\">\n              <div [style.border]=\"getStyle(tablesBerglerStubeHubertusStube[j].trace3)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableBerglerStubeHubertusStube.nameValue3}}<br>\n                  <b> Zimmernummer:</b> {{tableBerglerStubeHubertusStube.zimmernummerValue3}}<br>\n                  <b> Anreise Datum:</b> {{tableBerglerStubeHubertusStube.anreiseValue3}}<br>\n                  <b> Abreise Datum:</b> {{tableBerglerStubeHubertusStube.abreiseValue3}}<br>\n                  <b> Personenanzahl:</b> {{tableBerglerStubeHubertusStube.personenAnzahlValue3}}<br>\n                  <b> Notiz1:</b> {{tableBerglerStubeHubertusStube.notiz1Value3}}<br>\n                  <b> Notiz2:</b> {{tableBerglerStubeHubertusStube.notiz2Value3}}<br>\n                  <b> Trace:</b> {{tableBerglerStubeHubertusStube.trace3}}<br>\n                  <b> BemerkungValue:</b> {{tableBerglerStubeHubertusStube.bemerkungValue3}}<br>\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableBerglerStubeHubertusStube.nameValue4\">\n              <div [style.border]=\"getStyle(tablesBerglerStubeHubertusStube[j].trace4)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableBerglerStubeHubertusStube.nameValue4}}<br>\n                  <b> Zimmernummer:</b> {{tableBerglerStubeHubertusStube.zimmernummerValue4}}<br>\n                  <b> Anreise Datum:</b> {{tableBerglerStubeHubertusStube.anreiseValue4}}<br>\n                  <b> Abreise Datum:</b> {{tableBerglerStubeHubertusStube.abreiseValue4}}<br>\n                  <b> Personenanzahl:</b> {{tableBerglerStubeHubertusStube.personenAnzahlValue4}}<br>\n                  <b> Notiz1:</b> {{tableBerglerStubeHubertusStube.notiz1Value4}}<br>\n                  <b> Notiz2:</b> {{tableBerglerStubeHubertusStube.notiz2Value4}}<br>\n                  <b> Trace:</b> {{tableBerglerStubeHubertusStube.trace4}}<br>\n                  <b> BemerkungValue:</b> {{tableBerglerStubeHubertusStube.bemerkungValue4}}<br>\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableBerglerStubeHubertusStube.nameValue5\">\n              <div [style.border]=\"getStyle(tablesBerglerStubeHubertusStube[j].trace5)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableBerglerStubeHubertusStube.nameValue5}}<br>\n                  <b> Zimmernummer:</b> {{tableBerglerStubeHubertusStube.zimmernummerValue5}}<br>\n                  <b> Anreise Datum:</b> {{tableBerglerStubeHubertusStube.anreiseValue5}}<br>\n                  <b> Abreise Datum:</b> {{tableBerglerStubeHubertusStube.abreiseValue5}}<br>\n                  <b> Personenanzahl:</b> {{tableBerglerStubeHubertusStube.personenAnzahlValue5}}<br>\n                  <b> Notiz1:</b> {{tableBerglerStubeHubertusStube.notiz1Value5}}<br>\n                  <b> Notiz2:</b> {{tableBerglerStubeHubertusStube.notiz2Value5}}<br>\n                  <b> Trace:</b> {{tableBerglerStubeHubertusStube.trace5}}<br>\n                  <b> BemerkungValue:</b> {{tableBerglerStubeHubertusStube.bemerkungValue5}}<br>\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableBerglerStubeHubertusStube.nameValue6\">\n              <div [style.border]=\"getStyle(tablesBerglerStubeHubertusStube[j].trace6)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableBerglerStubeHubertusStube.nameValue6}}<br>\n                  <b> Zimmernummer:</b> {{tableBerglerStubeHubertusStube.zimmernummerValue6}}<br>\n                  <b> Anreise Datum:</b> {{tableBerglerStubeHubertusStube.anreiseValue6}}<br>\n                  <b> Abreise Datum:</b> {{tableBerglerStubeHubertusStube.abreiseValue6}}<br>\n                  <b> Personenanzahl:</b> {{tableBerglerStubeHubertusStube.personenAnzahlValue6}}<br>\n                  <b> Notiz1:</b> {{tableBerglerStubeHubertusStube.notiz1Value6}}<br>\n                  <b> Notiz2:</b> {{tableBerglerStubeHubertusStube.notiz2Value6}}<br>\n                  <b> Trace:</b> {{tableBerglerStubeHubertusStube.trace6}}<br>\n                  <b> BemerkungValue:</b> {{tableBerglerStubeHubertusStube.bemerkungValue6}}<br>\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableBerglerStubeHubertusStube.nameValue7\">\n              <div [style.border]=\"getStyle(tablesBerglerStubeHubertusStube[j].trace7)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableBerglerStubeHubertusStube.nameValue7}}<br>\n                  <b> Zimmernummer:</b> {{tableBerglerStubeHubertusStube.zimmernummerValue7}}<br>\n                  <b> Anreise Datum:</b> {{tableBerglerStubeHubertusStube.anreiseValue7}}<br>\n                  <b> Abreise Datum:</b> {{tableBerglerStubeHubertusStube.abreiseValue7}}<br>\n                  <b> Personenanzahl:</b> {{tableBerglerStubeHubertusStube.personenAnzahlValue7}}<br>\n                  <b> Notiz1:</b> {{tableBerglerStubeHubertusStube.notiz1Value7}}<br>\n                  <b> Notiz2:</b> {{tableBerglerStubeHubertusStube.notiz2Value7}}<br>\n                  <b> Trace:</b> {{tableBerglerStubeHubertusStube.trace7}}<br>\n                  <b> BemerkungValue:</b> {{tableBerglerStubeHubertusStube.bemerkungValue7}}<br>\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableBerglerStubeHubertusStube.nameValue8\">\n              <div [style.border]=\"getStyle(tablesBerglerStubeHubertusStube[j].trace8)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableBerglerStubeHubertusStube.nameValue8}}<br>\n                  <b> Zimmernummer:</b> {{tableBerglerStubeHubertusStube.zimmernummerValue8}}<br>\n                  <b> Anreise Datum:</b> {{tableBerglerStubeHubertusStube.anreiseValue8}}<br>\n                  <b> Abreise Datum:</b> {{tableBerglerStubeHubertusStube.abreiseValue8}}<br>\n                  <b> Personenanzahl:</b> {{tableBerglerStubeHubertusStube.personenAnzahlValue8}}<br>\n                  <b> Notiz1:</b> {{tableBerglerStubeHubertusStube.notiz1Value8}}<br>\n                  <b> Notiz2:</b> {{tableBerglerStubeHubertusStube.notiz2Value8}}<br>\n                  <b> Trace:</b> {{tableBerglerStubeHubertusStube.trace8}}<br>\n                  <b> BemerkungValue:</b> {{tableBerglerStubeHubertusStube.bemerkungValue8}}<br>\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableBerglerStubeHubertusStube.nameValue9\">\n              <div [style.border]=\"getStyle(tablesBerglerStubeHubertusStube[j].trace9)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableBerglerStubeHubertusStube.nameValue9}}<br>\n                  <b> Zimmernummer:</b> {{tableBerglerStubeHubertusStube.zimmernummerValue9}}<br>\n                  <b> Anreise Datum:</b> {{tableBerglerStubeHubertusStube.anreiseValue9}}<br>\n                  <b> Abreise Datum:</b> {{tableBerglerStubeHubertusStube.abreiseValue9}}<br>\n                  <b> Personenanzahl:</b> {{tableBerglerStubeHubertusStube.personenAnzahlValue9}}<br>\n                  <b> Notiz1:</b> {{tableBerglerStubeHubertusStube.notiz1Value9}}<br>\n                  <b> Notiz2:</b> {{tableBerglerStubeHubertusStube.notiz2Value9}}<br>\n                  <b> Trace:</b> {{tableBerglerStubeHubertusStube.trace9}}<br>\n                  <b> BemerkungValue:</b> {{tableBerglerStubeHubertusStube.bemerkungValue9}}<br>\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableBerglerStubeHubertusStube.nameValue10\">\n              <div [style.border]=\"getStyle(tablesBerglerStubeHubertusStube[j].trace10)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableBerglerStubeHubertusStube.nameValue10}}<br>\n                  <b> Zimmernummer:</b> {{tableBerglerStubeHubertusStube.zimmernummerValue10}}<br>\n                  <b> Anreise Datum:</b> {{tableBerglerStubeHubertusStube.anreiseValue10}}<br>\n                  <b> Abreise Datum:</b> {{tableBerglerStubeHubertusStube.abreiseValue10}}<br>\n                  <b> Personenanzahl:</b> {{tableBerglerStubeHubertusStube.personenAnzahlValue10}}<br>\n                  <b> Notiz1:</b> {{tableBerglerStubeHubertusStube.notiz1Value10}}<br>\n                  <b> Notiz2:</b> {{tableBerglerStubeHubertusStube.notiz2Value10}}<br>\n                  <b> Trace:</b> {{tableBerglerStubeHubertusStube.trace10}}<br>\n                  <b> BemerkungValue:</b> {{tableBerglerStubeHubertusStube.bemerkungValue10}}<br>\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableBerglerStubeHubertusStube.nameValue11\">\n              <div [style.border]=\"getStyle(tablesBerglerStubeHubertusStube[j].trace11)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableBerglerStubeHubertusStube.nameValue11}}<br>\n                  <b> Zimmernummer:</b> {{tableBerglerStubeHubertusStube.zimmernummerValue11}}<br>\n                  <b> Anreise Datum:</b> {{tableBerglerStubeHubertusStube.anreiseValue11}}<br>\n                  <b> Abreise Datum:</b> {{tableBerglerStubeHubertusStube.abreiseValue11}}<br>\n                  <b> Personenanzahl:</b> {{tableBerglerStubeHubertusStube.personenAnzahlValue11}}<br>\n                  <b> Notiz1:</b> {{tableBerglerStubeHubertusStube.notiz1Value11}}<br>\n                  <b> Notiz2:</b> {{tableBerglerStubeHubertusStube.notiz2Value11}}<br>\n                  <b> Trace:</b> {{tableBerglerStubeHubertusStube.trace11}}<br>\n                  <b> BemerkungValue:</b> {{tableBerglerStubeHubertusStube.bemerkungValue11}}<br>\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableBerglerStubeHubertusStube.nameValue12\">\n              <div [style.border]=\"getStyle(tablesBerglerStubeHubertusStube[j].trace12)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableBerglerStubeHubertusStube.nameValue12}}<br>\n                  <b> Zimmernummer:</b> {{tableBerglerStubeHubertusStube.zimmernummerValue12}}<br>\n                  <b> Anreise Datum:</b> {{tableBerglerStubeHubertusStube.anreiseValue12}}<br>\n                  <b> Abreise Datum:</b> {{tableBerglerStubeHubertusStube.abreiseValue12}}<br>\n                  <b> Personenanzahl:</b> {{tableBerglerStubeHubertusStube.personenAnzahlValue12}}<br>\n                  <b> Notiz1:</b> {{tableBerglerStubeHubertusStube.notiz1Value12}}<br>\n                  <b> Notiz2:</b> {{tableBerglerStubeHubertusStube.notiz2Value12}}<br>\n                  <b> Trace:</b> {{tableBerglerStubeHubertusStube.trace12}}<br>\n                  <b> BemerkungValue:</b> {{tableBerglerStubeHubertusStube.bemerkungValue12}}<br>\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableBerglerStubeHubertusStube.nameValue13\">\n              <div [style.border]=\"getStyle(tablesBerglerStubeHubertusStube[j].trace13)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableBerglerStubeHubertusStube.nameValue13}}<br>\n                  <b> Zimmernummer:</b> {{tableBerglerStubeHubertusStube.zimmernummerValue13}}<br>\n                  <b> Anreise Datum:</b> {{tableBerglerStubeHubertusStube.anreiseValue13}}<br>\n                  <b> Abreise Datum:</b> {{tableBerglerStubeHubertusStube.abreiseValue13}}<br>\n                  <b> Personenanzahl:</b> {{tableBerglerStubeHubertusStube.personenAnzahlValue13}}<br>\n                  <b> Notiz1:</b> {{tableBerglerStubeHubertusStube.notiz1Value13}}<br>\n                  <b> Notiz2:</b> {{tableBerglerStubeHubertusStube.notiz2Value13}}<br>\n                  <b> Trace:</b> {{tableBerglerStubeHubertusStube.trace13}}<br>\n                  <b> BemerkungValue:</b> {{tableBerglerStubeHubertusStube.bemerkungValue13}}<br>\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableBerglerStubeHubertusStube.nameValue14\">\n              <div [style.border]=\"getStyle(tablesBerglerStubeHubertusStube[j].trace14)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableBerglerStubeHubertusStube.nameValue14}}<br>\n                  <b> Zimmernummer:</b> {{tableBerglerStubeHubertusStube.zimmernummerValue14}}<br>\n                  <b> Anreise Datum:</b> {{tableBerglerStubeHubertusStube.anreiseValue14}}<br>\n                  <b> Abreise Datum:</b> {{tableBerglerStubeHubertusStube.abreiseValue14}}<br>\n                  <b> Personenanzahl:</b> {{tableBerglerStubeHubertusStube.personenAnzahlValue14}}<br>\n                  <b> Notiz1:</b> {{tableBerglerStubeHubertusStube.notiz1Value14}}<br>\n                  <b> Notiz2:</b> {{tableBerglerStubeHubertusStube.notiz2Value14}}<br>\n                  <b> Trace:</b> {{tableBerglerStubeHubertusStube.trace14}}<br>\n                  <b> BemerkungValue:</b> {{tableBerglerStubeHubertusStube.bemerkungValue14}}<br>\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableBerglerStubeHubertusStube.nameValue15\">\n              <div [style.border]=\"getStyle(tablesBerglerStubeHubertusStube[j].trace15)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableBerglerStubeHubertusStube.nameValue15}}<br>\n                  <b> Zimmernummer:</b> {{tableBerglerStubeHubertusStube.zimmernummerValue15}}<br>\n                  <b> Anreise Datum:</b> {{tableBerglerStubeHubertusStube.anreiseValue15}}<br>\n                  <b> Abreise Datum:</b> {{tableBerglerStubeHubertusStube.abreiseValue15}}<br>\n                  <b> Personenanzahl:</b> {{tableBerglerStubeHubertusStube.personenAnzahlValue15}}<br>\n                  <b> Notiz1:</b> {{tableBerglerStubeHubertusStube.notiz1Value15}}<br>\n                  <b> Notiz2:</b> {{tableBerglerStubeHubertusStube.notiz2Value15}}<br>\n                  <b> Trace:</b> {{tableBerglerStubeHubertusStube.trace15}}<br>\n                  <b> BemerkungValue:</b> {{tableBerglerStubeHubertusStube.bemerkungValue15}}<br>\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableBerglerStubeHubertusStube.newTraceName\">\n              <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                <b> Zimmernummer: </b>{{tableBerglerStubeHubertusStube.newTraceRoomNumber}}<br> <b> Neuer Trace: </b>{{tableBerglerStubeHubertusStube.newTraceText}} <br> <b> Tischnummer: </b>{{tableBerglerStubeHubertusStube.newTraceTableNumber}} <br> <b> Mitarbeiter: </b>{{tableBerglerStubeHubertusStube.newTraceEmployee}} <br> <b> Name: </b>{{tableBerglerStubeHubertusStube.newTraceName}} <br> <b> Datum: </b>{{tableBerglerStubeHubertusStube.newTraceDate}}\n              </p>\n            </div>\n            <div *ngIf=\"tableBerglerStubeHubertusStube.newTraceName1\">\n              <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                <b> Zimmernummer: </b>{{tableBerglerStubeHubertusStube.newTraceRoomNumber1}}<br> <b> Neuer Trace: </b>{{tableBerglerStubeHubertusStube.newTraceText1}} <br> <b> Tischnummer: </b>{{tableBerglerStubeHubertusStube.newTraceTableNumber1}} <br> <b> Mitarbeiter: </b>{{tableBerglerStubeHubertusStube.newTraceEmployee1}} <br> <b> Name: </b>{{tableBerglerStubeHubertusStube.newTraceName1}} <br> <b> Datum: </b>{{tableBerglerStubeHubertusStube.newTraceDate1}}                            </p>\n            </div>\n            <div *ngIf=\"tableBerglerStubeHubertusStube.newTraceName2\">\n              <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                <b> Zimmernummer: </b>{{tableBerglerStubeHubertusStube.newTraceRoomNumber2}}<br> <b> Neuer Trace: </b>{{tableBerglerStubeHubertusStube.newTraceText2}} <br> <b> Tischnummer: </b>{{tableBerglerStubeHubertusStube.newTraceTableNumber2}} <br> <b> Mitarbeiter: </b>{{tableBerglerStubeHubertusStube.newTraceEmployee2}} <br> <b> Name: </b>{{tableBerglerStubeHubertusStube.newTraceName2}} <br> <b> Datum: </b>{{tableBerglerStubeHubertusStube.newTraceDate2}}\n              </p>\n            </div>\n          </div>\n        </div>\n        <div *ngIf=\"tableBerglerStubeHubertusStube.placeholder === 'true'\">\n          <p [dragula]='\"evented-bag\"' id=\"BerglerStubeHubertusStube\" style=\"background-color: #9d9d9d; border: dashed 3px black; margin-top: 50px; opacity: 0.4; padding: 10px 10px 10px 10px\">Listen-Element hier hin ziehen! {{tableBerglerStubeHubertusStube.number}} {{tableBerglerStubeHubertusStube.department}} {{j}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div *ngFor=\"let tableEdelweissKaminStube of tablesEdelweissKaminStube | filter:term; let j = index;\">\n    <div *ngIf=\"tablesEdelweissKaminStube[j] !== tablesEdelweissKaminStube[j+1]\">\n      <button style=\"float: right; margin: 20px 0px 20px 0px; background-color: #0a7a74; color: #FFFFFF\" type=\"button\" class=\"btn btn-send\" (click)=\"occupy(tableEdelweissKaminStube, j)\">{{tableEdelweissKaminStube.isBesetzt === 'true' ? 'FREI MACHEN' : ''}}</button>\n      <h4><b> Tisch:</b>{{tableEdelweissKaminStube.number}} </h4><br>\n      <div class='cards-container' id='containerEdelweissKaminStube' [ngStyle]=\"{'background-color': + tableEdelweissKaminStube.bgColor}\">\n        <div class=\"table\" [ngStyle]=\"{'background-color': '#' + tableEdelweissKaminStube.bgColor}\">\n          <div *ngIf=\"tableEdelweissKaminStube.isBesetzt === 'true'\">\n            <div [style.border]=\"getStyle(tablesEdelweissKaminStube[j].trace)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableEdelweissKaminStube.nameValue}}<br>\n                <b> Zimmernummer:</b> {{tableEdelweissKaminStube.zimmernummerValue}}<br>\n                <b> Anreise Datum:</b> {{tableEdelweissKaminStube.anreiseValue}}<br>\n                <b> Abreise Datum:</b> {{tableEdelweissKaminStube.abreiseValue}}<br>\n                <b> Personenanzahl:</b> {{tableEdelweissKaminStube.personenAnzahlValue}}<br>\n                <b> Notiz1:</b> {{tableEdelweissKaminStube.notiz1Value}}<br>\n                <b> Notiz2:</b> {{tableEdelweissKaminStube.notiz2Value}}<br>\n                <b> Trace:</b> {{tableEdelweissKaminStube.trace}}<br>\n                <b> Bemerkung:</b> {{tableEdelweissKaminStube.bemerkungValue}}<br>\n              </p>\n            </div>\n            <div *ngIf=\"tableEdelweissKaminStube.nameValue2\">\n              <div [style.border]=\"getStyle(tablesEdelweissKaminStube[j].trace2)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableEdelweissKaminStube.nameValue2}}<br>\n                  <b> Zimmernummer:</b> {{tableEdelweissKaminStube.zimmernummerValue2}}<br>\n                  <b> Anreise Datum:</b> {{tableEdelweissKaminStube.anreiseValue2}}<br>\n                  <b> Abreise Datum:</b> {{tableEdelweissKaminStube.abreiseValue2}}<br>\n                  <b> Personenanzahl:</b> {{tableEdelweissKaminStube.personenAnzahlValue2}}<br>\n                  <b> Notiz1:</b> {{tableEdelweissKaminStube.notiz1Value2}}<br>\n                  <b> Notiz2:</b> {{tableEdelweissKaminStube.notiz2Value2}}<br>\n                  <b> Trace:</b> {{tableEdelweissKaminStube.trace2}}<br>\n                  <b> BemerkungValue:</b> {{tableEdelweissKaminStube.bemerkungValue2}}<br>\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableEdelweissKaminStube.nameValue3\">\n              <div [style.border]=\"getStyle(tablesEdelweissKaminStube[j].trace3)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableEdelweissKaminStube.nameValue3}}<br>\n                  <b> Zimmernummer:</b> {{tableEdelweissKaminStube.zimmernummerValue3}}<br>\n                  <b> Anreise Datum:</b> {{tableEdelweissKaminStube.anreiseValue3}}<br>\n                  <b> Abreise Datum:</b> {{tableEdelweissKaminStube.abreiseValue3}}<br>\n                  <b> Personenanzahl:</b> {{tableEdelweissKaminStube.personenAnzahlValue3}}<br>\n                  <b> Notiz1:</b> {{tableEdelweissKaminStube.notiz1Value3}}<br>\n                  <b> Notiz2:</b> {{tableEdelweissKaminStube.notiz2Value3}}<br>\n                  <b> Trace:</b> {{tableEdelweissKaminStube.trace3}}<br>\n                  <b> BemerkungValue:</b> {{tableEdelweissKaminStube.bemerkungValue3}}<br>\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableEdelweissKaminStube.nameValue4\">\n              <div [style.border]=\"getStyle(tablesEdelweissKaminStube[j].trace4)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableEdelweissKaminStube.nameValue4}}<br>\n                  <b> Zimmernummer:</b> {{tableEdelweissKaminStube.zimmernummerValue4}}<br>\n                  <b> Anreise Datum:</b> {{tableEdelweissKaminStube.anreiseValue4}}<br>\n                  <b> Abreise Datum:</b> {{tableEdelweissKaminStube.abreiseValue4}}<br>\n                  <b> Personenanzahl:</b> {{tableEdelweissKaminStube.personenAnzahlValue4}}<br>\n                  <b> Notiz1:</b> {{tableEdelweissKaminStube.notiz1Value4}}<br>\n                  <b> Notiz2:</b> {{tableEdelweissKaminStube.notiz2Value4}}<br>\n                  <b> Trace:</b> {{tableEdelweissKaminStube.trace4}}<br>\n                  <b> BemerkungValue:</b> {{tableEdelweissKaminStube.bemerkungValue4}}<br>\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableEdelweissKaminStube.nameValue5\">\n              <div [style.border]=\"getStyle(tablesEdelweissKaminStube[j].trace5)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableEdelweissKaminStube.nameValue5}}<br>\n                  <b> Zimmernummer:</b> {{tableEdelweissKaminStube.zimmernummerValue5}}<br>\n                  <b> Anreise Datum:</b> {{tableEdelweissKaminStube.anreiseValue5}}<br>\n                  <b> Abreise Datum:</b> {{tableEdelweissKaminStube.abreiseValue5}}<br>\n                  <b> Personenanzahl:</b> {{tableEdelweissKaminStube.personenAnzahlValue5}}<br>\n                  <b> Notiz1:</b> {{tableEdelweissKaminStube.notiz1Value5}}<br>\n                  <b> Notiz2:</b> {{tableEdelweissKaminStube.notiz2Value5}}<br>\n                  <b> Trace:</b> {{tableEdelweissKaminStube.trace5}}<br>\n                  <b> BemerkungValue:</b> {{tableEdelweissKaminStube.bemerkungValue5}}<br>\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableEdelweissKaminStube.nameValue6\">\n              <div [style.border]=\"getStyle(tablesEdelweissKaminStube[j].trace6)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableEdelweissKaminStube.nameValue6}}<br>\n                  <b> Zimmernummer:</b> {{tableEdelweissKaminStube.zimmernummerValue6}}<br>\n                  <b> Anreise Datum:</b> {{tableEdelweissKaminStube.anreiseValue6}}<br>\n                  <b> Abreise Datum:</b> {{tableEdelweissKaminStube.abreiseValue6}}<br>\n                  <b> Personenanzahl:</b> {{tableEdelweissKaminStube.personenAnzahlValue6}}<br>\n                  <b> Notiz1:</b> {{tableEdelweissKaminStube.notiz1Value6}}<br>\n                  <b> Notiz2:</b> {{tableEdelweissKaminStube.notiz2Value6}}<br>\n                  <b> Trace:</b> {{tableEdelweissKaminStube.trace6}}<br>\n                  <b> BemerkungValue:</b> {{tableEdelweissKaminStube.bemerkungValue6}}<br>\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableEdelweissKaminStube.nameValue7\">\n              <div [style.border]=\"getStyle(tablesEdelweissKaminStube[j].trace7)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableEdelweissKaminStube.nameValue7}}<br>\n                  <b> Zimmernummer:</b> {{tableEdelweissKaminStube.zimmernummerValue7}}<br>\n                  <b> Anreise Datum:</b> {{tableEdelweissKaminStube.anreiseValue7}}<br>\n                  <b> Abreise Datum:</b> {{tableEdelweissKaminStube.abreiseValue7}}<br>\n                  <b> Personenanzahl:</b> {{tableEdelweissKaminStube.personenAnzahlValue7}}<br>\n                  <b> Notiz1:</b> {{tableEdelweissKaminStube.notiz1Value7}}<br>\n                  <b> Notiz2:</b> {{tableEdelweissKaminStube.notiz2Value7}}<br>\n                  <b> Trace:</b> {{tableEdelweissKaminStube.trace7}}<br>\n                  <b> BemerkungValue:</b> {{tableEdelweissKaminStube.bemerkungValue7}}<br>\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableEdelweissKaminStube.nameValue8\">\n              <div [style.border]=\"getStyle(tablesEdelweissKaminStube[j].trace8)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableEdelweissKaminStube.nameValue8}}<br>\n                  <b> Zimmernummer:</b> {{tableEdelweissKaminStube.zimmernummerValue8}}<br>\n                  <b> Anreise Datum:</b> {{tableEdelweissKaminStube.anreiseValue8}}<br>\n                  <b> Abreise Datum:</b> {{tableEdelweissKaminStube.abreiseValue8}}<br>\n                  <b> Personenanzahl:</b> {{tableEdelweissKaminStube.personenAnzahlValue8}}<br>\n                  <b> Notiz1:</b> {{tableEdelweissKaminStube.notiz1Value8}}<br>\n                  <b> Notiz2:</b> {{tableEdelweissKaminStube.notiz2Value8}}<br>\n                  <b> Trace:</b> {{tableEdelweissKaminStube.trace8}}<br>\n                  <b> BemerkungValue:</b> {{tableEdelweissKaminStube.bemerkungValue8}}<br>\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableEdelweissKaminStube.nameValue9\">\n              <div [style.border]=\"getStyle(tablesEdelweissKaminStube[j].trace9)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableEdelweissKaminStube.nameValue9}}<br>\n                  <b> Zimmernummer:</b> {{tableEdelweissKaminStube.zimmernummerValue9}}<br>\n                  <b> Anreise Datum:</b> {{tableEdelweissKaminStube.anreiseValue9}}<br>\n                  <b> Abreise Datum:</b> {{tableEdelweissKaminStube.abreiseValue9}}<br>\n                  <b> Personenanzahl:</b> {{tableEdelweissKaminStube.personenAnzahlValue9}}<br>\n                  <b> Notiz1:</b> {{tableEdelweissKaminStube.notiz1Value9}}<br>\n                  <b> Notiz2:</b> {{tableEdelweissKaminStube.notiz2Value9}}<br>\n                  <b> Trace:</b> {{tableEdelweissKaminStube.trace9}}<br>\n                  <b> BemerkungValue:</b> {{tableEdelweissKaminStube.bemerkungValue9}}<br>\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableEdelweissKaminStube.nameValue10\">\n              <div [style.border]=\"getStyle(tablesEdelweissKaminStube[j].trace10)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableEdelweissKaminStube.nameValue10}}<br>\n                  <b> Zimmernummer:</b> {{tableEdelweissKaminStube.zimmernummerValue10}}<br>\n                  <b> Anreise Datum:</b> {{tableEdelweissKaminStube.anreiseValue10}}<br>\n                  <b> Abreise Datum:</b> {{tableEdelweissKaminStube.abreiseValue10}}<br>\n                  <b> Personenanzahl:</b> {{tableEdelweissKaminStube.personenAnzahlValue10}}<br>\n                  <b> Notiz1:</b> {{tableEdelweissKaminStube.notiz1Value10}}<br>\n                  <b> Notiz2:</b> {{tableEdelweissKaminStube.notiz2Value10}}<br>\n                  <b> Trace:</b> {{tableEdelweissKaminStube.trace10}}<br>\n                  <b> BemerkungValue:</b> {{tableEdelweissKaminStube.bemerkungValue10}}<br>\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableEdelweissKaminStube.nameValue11\">\n              <div [style.border]=\"getStyle(tablesEdelweissKaminStube[j].trace11)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableEdelweissKaminStube.nameValue11}}<br>\n                  <b> Zimmernummer:</b> {{tableEdelweissKaminStube.zimmernummerValue11}}<br>\n                  <b> Anreise Datum:</b> {{tableEdelweissKaminStube.anreiseValue11}}<br>\n                  <b> Abreise Datum:</b> {{tableEdelweissKaminStube.abreiseValue11}}<br>\n                  <b> Personenanzahl:</b> {{tableEdelweissKaminStube.personenAnzahlValue11}}<br>\n                  <b> Notiz1:</b> {{tableEdelweissKaminStube.notiz1Value11}}<br>\n                  <b> Notiz2:</b> {{tableEdelweissKaminStube.notiz2Value11}}<br>\n                  <b> Trace:</b> {{tableEdelweissKaminStube.trace11}}<br>\n                  <b> BemerkungValue:</b> {{tableEdelweissKaminStube.bemerkungValue11}}<br>\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableEdelweissKaminStube.nameValue12\">\n              <div [style.border]=\"getStyle(tablesEdelweissKaminStube[j].trace12)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableEdelweissKaminStube.nameValue12}}<br>\n                  <b> Zimmernummer:</b> {{tableEdelweissKaminStube.zimmernummerValue12}}<br>\n                  <b> Anreise Datum:</b> {{tableEdelweissKaminStube.anreiseValue12}}<br>\n                  <b> Abreise Datum:</b> {{tableEdelweissKaminStube.abreiseValue12}}<br>\n                  <b> Personenanzahl:</b> {{tableEdelweissKaminStube.personenAnzahlValue12}}<br>\n                  <b> Notiz1:</b> {{tableEdelweissKaminStube.notiz1Value12}}<br>\n                  <b> Notiz2:</b> {{tableEdelweissKaminStube.notiz2Value12}}<br>\n                  <b> Trace:</b> {{tableEdelweissKaminStube.trace12}}<br>\n                  <b> BemerkungValue:</b> {{tableEdelweissKaminStube.bemerkungValue12}}<br>\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableEdelweissKaminStube.nameValue13\">\n              <div [style.border]=\"getStyle(tablesEdelweissKaminStube[j].trace13)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableEdelweissKaminStube.nameValue13}}<br>\n                  <b> Zimmernummer:</b> {{tableEdelweissKaminStube.zimmernummerValue13}}<br>\n                  <b> Anreise Datum:</b> {{tableEdelweissKaminStube.anreiseValue13}}<br>\n                  <b> Abreise Datum:</b> {{tableEdelweissKaminStube.abreiseValue13}}<br>\n                  <b> Personenanzahl:</b> {{tableEdelweissKaminStube.personenAnzahlValue13}}<br>\n                  <b> Notiz1:</b> {{tableEdelweissKaminStube.notiz1Value13}}<br>\n                  <b> Notiz2:</b> {{tableEdelweissKaminStube.notiz2Value13}}<br>\n                  <b> Trace:</b> {{tableEdelweissKaminStube.trace13}}<br>\n                  <b> BemerkungValue:</b> {{tableEdelweissKaminStube.bemerkungValue13}}<br>\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableEdelweissKaminStube.nameValue14\">\n              <div [style.border]=\"getStyle(tablesEdelweissKaminStube[j].trace14)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableEdelweissKaminStube.nameValue14}}<br>\n                  <b> Zimmernummer:</b> {{tableEdelweissKaminStube.zimmernummerValue14}}<br>\n                  <b> Anreise Datum:</b> {{tableEdelweissKaminStube.anreiseValue14}}<br>\n                  <b> Abreise Datum:</b> {{tableEdelweissKaminStube.abreiseValue14}}<br>\n                  <b> Personenanzahl:</b> {{tableEdelweissKaminStube.personenAnzahlValue14}}<br>\n                  <b> Notiz1:</b> {{tableEdelweissKaminStube.notiz1Value14}}<br>\n                  <b> Notiz2:</b> {{tableEdelweissKaminStube.notiz2Value14}}<br>\n                  <b> Trace:</b> {{tableEdelweissKaminStube.trace14}}<br>\n                  <b> BemerkungValue:</b> {{tableEdelweissKaminStube.bemerkungValue14}}<br>\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableEdelweissKaminStube.nameValue15\">\n              <div [style.border]=\"getStyle(tablesEdelweissKaminStube[j].trace15)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableEdelweissKaminStube.nameValue15}}<br>\n                  <b> Zimmernummer:</b> {{tableEdelweissKaminStube.zimmernummerValue15}}<br>\n                  <b> Anreise Datum:</b> {{tableEdelweissKaminStube.anreiseValue15}}<br>\n                  <b> Abreise Datum:</b> {{tableEdelweissKaminStube.abreiseValue15}}<br>\n                  <b> Personenanzahl:</b> {{tableEdelweissKaminStube.personenAnzahlValue15}}<br>\n                  <b> Notiz1:</b> {{tableEdelweissKaminStube.notiz1Value15}}<br>\n                  <b> Notiz2:</b> {{tableEdelweissKaminStube.notiz2Value15}}<br>\n                  <b> Trace:</b> {{tableEdelweissKaminStube.trace15}}<br>\n                  <b> BemerkungValue:</b> {{tableEdelweissKaminStube.bemerkungValue15}}<br>\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableEdelweissKaminStube.newTraceName\">\n              <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                <b> Zimmernummer: </b>{{tableEdelweissKaminStube.newTraceRoomNumber}}<br> <b> Neuer Trace: </b>{{tableEdelweissKaminStube.newTraceText}} <br> <b> Tischnummer: </b>{{tableEdelweissKaminStube.newTraceTableNumber}} <br> <b> Mitarbeiter: </b>{{tableEdelweissKaminStube.newTraceEmployee}} <br> <b> Name: </b>{{tableEdelweissKaminStube.newTraceName}} <br> <b> Datum: </b>{{tableEdelweissKaminStube.newTraceDate}}\n              </p>\n            </div>\n            <div *ngIf=\"tableEdelweissKaminStube.newTraceName1\">\n              <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                <b> Zimmernummer: </b>{{tableEdelweissKaminStube.newTraceRoomNumber1}}<br> <b> Neuer Trace: </b>{{tableEdelweissKaminStube.newTraceText1}} <br> <b> Tischnummer: </b>{{tableEdelweissKaminStube.newTraceTableNumber1}} <br> <b> Mitarbeiter: </b>{{tableEdelweissKaminStube.newTraceEmployee1}} <br> <b> Name: </b>{{tableEdelweissKaminStube.newTraceName1}} <br> <b> Datum: </b>{{tableEdelweissKaminStube.newTraceDate1}}                            </p>\n            </div>\n            <div *ngIf=\"tableEdelweissKaminStube.newTraceName2\">\n              <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                <b> Zimmernummer: </b>{{tableEdelweissKaminStube.newTraceRoomNumber2}}<br> <b> Neuer Trace: </b>{{tableEdelweissKaminStube.newTraceText2}} <br> <b> Tischnummer: </b>{{tableEdelweissKaminStube.newTraceTableNumber2}} <br> <b> Mitarbeiter: </b>{{tableEdelweissKaminStube.newTraceEmployee2}} <br> <b> Name: </b>{{tableEdelweissKaminStube.newTraceName2}} <br> <b> Datum: </b>{{tableEdelweissKaminStube.newTraceDate2}}\n              </p>\n            </div>\n\n          </div>\n        </div>\n        <div *ngIf=\"tableEdelweissKaminStube.placeholder === 'true'\">\n          <p [dragula]='\"evented-bag\"' id=\"EdelweissKaminStube\" style=\"background-color: #9d9d9d; border: dashed 3px black; margin-top: 50px; opacity: 0.4; padding: 10px 10px 10px 10px\">Listen-Element hier hin ziehen! {{tableEdelweissKaminStube.number}} {{tableEdelweissKaminStube.department}} {{j}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div *ngFor=\"let tableTeestubeTeelounge of tablesTeestubeTeelounge | filter:term; let j = index;\">\n    <div *ngIf=\"tablesTeestubeTeelounge[j] !== tablesTeestubeTeelounge[j+1]\">\n      <button style=\"float: right; margin: 20px 0px 20px 0px; background-color: #0a7a74; color: #FFFFFF\" type=\"button\" class=\"btn btn-send\" (click)=\"occupy(tableTeestubeTeelounge, j)\">{{tableTeestubeTeelounge.isBesetzt === 'true' ? 'FREI MACHEN' : ''}}</button>\n      <h4><b> Tisch:</b>{{tableTeestubeTeelounge.number}} </h4><br>\n      <div class='cards-container' id='containerTeestubeTeelounge' [ngStyle]=\"{'background-color': + tableTeestubeTeelounge.bgColor}\">\n        <div class=\"table\" [ngStyle]=\"{'background-color': '#' + tableTeestubeTeelounge.bgColor}\">\n          <div *ngIf=\"tableTeestubeTeelounge.isBesetzt === 'true'\">\n            <div [style.border]=\"getStyle(tablesTeestubeTeelounge[j].trace)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableTeestubeTeelounge.nameValue}}<br>\n                <b> Zimmernummer:</b> {{tableTeestubeTeelounge.zimmernummerValue}}<br>\n                <b> Anreise Datum:</b> {{tableTeestubeTeelounge.anreiseValue}}<br>\n                <b> Abreise Datum:</b> {{tableTeestubeTeelounge.abreiseValue}}<br>\n                <b> Personenanzahl:</b> {{tableTeestubeTeelounge.personenAnzahlValue}}<br>\n                <b> Notiz1:</b> {{tableTeestubeTeelounge.notiz1Value}}<br>\n                <b> Notiz2:</b> {{tableTeestubeTeelounge.notiz2Value}}<br>\n                <b> Trace:</b> {{tableTeestubeTeelounge.trace}}<br>\n                <b> Bemerkung:</b> {{tableTeestubeTeelounge.bemerkungValue}}<br>\n              </p>\n            </div>\n            <div *ngIf=\"tableTeestubeTeelounge.nameValue2\">\n              <div [style.border]=\"getStyle(tablesTeestubeTeelounge[j].trace2)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableTeestubeTeelounge.nameValue2}}<br>\n                  <b> Zimmernummer:</b> {{tableTeestubeTeelounge.zimmernummerValue2}}<br>\n                  <b> Anreise Datum:</b> {{tableTeestubeTeelounge.anreiseValue2}}<br>\n                  <b> Abreise Datum:</b> {{tableTeestubeTeelounge.abreiseValue2}}<br>\n                  <b> Personenanzahl:</b> {{tableTeestubeTeelounge.personenAnzahlValue2}}<br>\n                  <b> Notiz1:</b> {{tableTeestubeTeelounge.notiz1Value2}}<br>\n                  <b> Notiz2:</b> {{tableTeestubeTeelounge.notiz2Value2}}<br>\n                  <b> Trace:</b> {{tableTeestubeTeelounge.trace2}}<br>\n                  <b> BemerkungValue:</b> {{tableTeestubeTeelounge.bemerkungValue2}}<br>\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableTeestubeTeelounge.nameValue3\">\n              <div [style.border]=\"getStyle(tablesTeestubeTeelounge[j].trace3)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableTeestubeTeelounge.nameValue3}}<br>\n                  <b> Zimmernummer:</b> {{tableTeestubeTeelounge.zimmernummerValue3}}<br>\n                  <b> Anreise Datum:</b> {{tableTeestubeTeelounge.anreiseValue3}}<br>\n                  <b> Abreise Datum:</b> {{tableTeestubeTeelounge.abreiseValue3}}<br>\n                  <b> Personenanzahl:</b> {{tableTeestubeTeelounge.personenAnzahlValue3}}<br>\n                  <b> Notiz1:</b> {{tableTeestubeTeelounge.notiz1Value3}}<br>\n                  <b> Notiz2:</b> {{tableTeestubeTeelounge.notiz2Value3}}<br>\n                  <b> Trace:</b> {{tableTeestubeTeelounge.trace3}}<br>\n                  <b> BemerkungValue:</b> {{tableTeestubeTeelounge.bemerkungValue3}}<br>\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableTeestubeTeelounge.nameValue4\">\n              <div [style.border]=\"getStyle(tablesTeestubeTeelounge[j].trace4)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableTeestubeTeelounge.nameValue4}}<br>\n                  <b> Zimmernummer:</b> {{tableTeestubeTeelounge.zimmernummerValue4}}<br>\n                  <b> Anreise Datum:</b> {{tableTeestubeTeelounge.anreiseValue4}}<br>\n                  <b> Abreise Datum:</b> {{tableTeestubeTeelounge.abreiseValue4}}<br>\n                  <b> Personenanzahl:</b> {{tableTeestubeTeelounge.personenAnzahlValue4}}<br>\n                  <b> Notiz1:</b> {{tableTeestubeTeelounge.notiz1Value4}}<br>\n                  <b> Notiz2:</b> {{tableTeestubeTeelounge.notiz2Value4}}<br>\n                  <b> Trace:</b> {{tableTeestubeTeelounge.trace4}}<br>\n                  <b> BemerkungValue:</b> {{tableTeestubeTeelounge.bemerkungValue4}}<br>\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableTeestubeTeelounge.nameValue5\">\n              <div [style.border]=\"getStyle(tablesTeestubeTeelounge[j].trace5)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableTeestubeTeelounge.nameValue5}}<br>\n                  <b> Zimmernummer:</b> {{tableTeestubeTeelounge.zimmernummerValue5}}<br>\n                  <b> Anreise Datum:</b> {{tableTeestubeTeelounge.anreiseValue5}}<br>\n                  <b> Abreise Datum:</b> {{tableTeestubeTeelounge.abreiseValue5}}<br>\n                  <b> Personenanzahl:</b> {{tableTeestubeTeelounge.personenAnzahlValue5}}<br>\n                  <b> Notiz1:</b> {{tableTeestubeTeelounge.notiz1Value5}}<br>\n                  <b> Notiz2:</b> {{tableTeestubeTeelounge.notiz2Value5}}<br>\n                  <b> Trace:</b> {{tableTeestubeTeelounge.trace5}}<br>\n                  <b> BemerkungValue:</b> {{tableTeestubeTeelounge.bemerkungValue5}}<br>\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableTeestubeTeelounge.nameValue6\">\n              <div [style.border]=\"getStyle(tablesTeestubeTeelounge[j].trace6)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableTeestubeTeelounge.nameValue6}}<br>\n                  <b> Zimmernummer:</b> {{tableTeestubeTeelounge.zimmernummerValue6}}<br>\n                  <b> Anreise Datum:</b> {{tableTeestubeTeelounge.anreiseValue6}}<br>\n                  <b> Abreise Datum:</b> {{tableTeestubeTeelounge.abreiseValue6}}<br>\n                  <b> Personenanzahl:</b> {{tableTeestubeTeelounge.personenAnzahlValue6}}<br>\n                  <b> Notiz1:</b> {{tableTeestubeTeelounge.notiz1Value6}}<br>\n                  <b> Notiz2:</b> {{tableTeestubeTeelounge.notiz2Value6}}<br>\n                  <b> Trace:</b> {{tableTeestubeTeelounge.trace6}}<br>\n                  <b> BemerkungValue:</b> {{tableTeestubeTeelounge.bemerkungValue6}}<br>\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableTeestubeTeelounge.nameValue7\">\n              <div [style.border]=\"getStyle(tablesTeestubeTeelounge[j].trace7)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableTeestubeTeelounge.nameValue7}}<br>\n                  <b> Zimmernummer:</b> {{tableTeestubeTeelounge.zimmernummerValue7}}<br>\n                  <b> Anreise Datum:</b> {{tableTeestubeTeelounge.anreiseValue7}}<br>\n                  <b> Abreise Datum:</b> {{tableTeestubeTeelounge.abreiseValue7}}<br>\n                  <b> Personenanzahl:</b> {{tableTeestubeTeelounge.personenAnzahlValue7}}<br>\n                  <b> Notiz1:</b> {{tableTeestubeTeelounge.notiz1Value7}}<br>\n                  <b> Notiz2:</b> {{tableTeestubeTeelounge.notiz2Value7}}<br>\n                  <b> Trace:</b> {{tableTeestubeTeelounge.trace7}}<br>\n                  <b> BemerkungValue:</b> {{tableTeestubeTeelounge.bemerkungValue7}}<br>\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableTeestubeTeelounge.nameValue8\">\n              <div [style.border]=\"getStyle(tablesTeestubeTeelounge[j].trace8)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableTeestubeTeelounge.nameValue8}}<br>\n                  <b> Zimmernummer:</b> {{tableTeestubeTeelounge.zimmernummerValue8}}<br>\n                  <b> Anreise Datum:</b> {{tableTeestubeTeelounge.anreiseValue8}}<br>\n                  <b> Abreise Datum:</b> {{tableTeestubeTeelounge.abreiseValue8}}<br>\n                  <b> Personenanzahl:</b> {{tableTeestubeTeelounge.personenAnzahlValue8}}<br>\n                  <b> Notiz1:</b> {{tableTeestubeTeelounge.notiz1Value8}}<br>\n                  <b> Notiz2:</b> {{tableTeestubeTeelounge.notiz2Value8}}<br>\n                  <b> Trace:</b> {{tableTeestubeTeelounge.trace8}}<br>\n                  <b> BemerkungValue:</b> {{tableTeestubeTeelounge.bemerkungValue8}}<br>\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableTeestubeTeelounge.nameValue9\">\n              <div [style.border]=\"getStyle(tablesTeestubeTeelounge[j].trace9)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableTeestubeTeelounge.nameValue9}}<br>\n                  <b> Zimmernummer:</b> {{tableTeestubeTeelounge.zimmernummerValue9}}<br>\n                  <b> Anreise Datum:</b> {{tableTeestubeTeelounge.anreiseValue9}}<br>\n                  <b> Abreise Datum:</b> {{tableTeestubeTeelounge.abreiseValue9}}<br>\n                  <b> Personenanzahl:</b> {{tableTeestubeTeelounge.personenAnzahlValue9}}<br>\n                  <b> Notiz1:</b> {{tableTeestubeTeelounge.notiz1Value9}}<br>\n                  <b> Notiz2:</b> {{tableTeestubeTeelounge.notiz2Value9}}<br>\n                  <b> Trace:</b> {{tableTeestubeTeelounge.trace9}}<br>\n                  <b> BemerkungValue:</b> {{tableTeestubeTeelounge.bemerkungValue9}}<br>\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableTeestubeTeelounge.nameValue10\">\n              <div [style.border]=\"getStyle(tablesTeestubeTeelounge[j].trace10)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableTeestubeTeelounge.nameValue10}}<br>\n                  <b> Zimmernummer:</b> {{tableTeestubeTeelounge.zimmernummerValue10}}<br>\n                  <b> Anreise Datum:</b> {{tableTeestubeTeelounge.anreiseValue10}}<br>\n                  <b> Abreise Datum:</b> {{tableTeestubeTeelounge.abreiseValue10}}<br>\n                  <b> Personenanzahl:</b> {{tableTeestubeTeelounge.personenAnzahlValue10}}<br>\n                  <b> Notiz1:</b> {{tableTeestubeTeelounge.notiz1Value10}}<br>\n                  <b> Notiz2:</b> {{tableTeestubeTeelounge.notiz2Value10}}<br>\n                  <b> Trace:</b> {{tableTeestubeTeelounge.trace10}}<br>\n                  <b> BemerkungValue:</b> {{tableTeestubeTeelounge.bemerkungValue10}}<br>\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableTeestubeTeelounge.nameValue11\">\n              <div [style.border]=\"getStyle(tablesTeestubeTeelounge[j].trace11)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableTeestubeTeelounge.nameValue11}}<br>\n                  <b> Zimmernummer:</b> {{tableTeestubeTeelounge.zimmernummerValue11}}<br>\n                  <b> Anreise Datum:</b> {{tableTeestubeTeelounge.anreiseValue11}}<br>\n                  <b> Abreise Datum:</b> {{tableTeestubeTeelounge.abreiseValue11}}<br>\n                  <b> Personenanzahl:</b> {{tableTeestubeTeelounge.personenAnzahlValue11}}<br>\n                  <b> Notiz1:</b> {{tableTeestubeTeelounge.notiz1Value11}}<br>\n                  <b> Notiz2:</b> {{tableTeestubeTeelounge.notiz2Value11}}<br>\n                  <b> Trace:</b> {{tableTeestubeTeelounge.trace11}}<br>\n                  <b> BemerkungValue:</b> {{tableTeestubeTeelounge.bemerkungValue11}}<br>\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableTeestubeTeelounge.nameValue12\">\n              <div [style.border]=\"getStyle(tablesTeestubeTeelounge[j].trace12)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableTeestubeTeelounge.nameValue12}}<br>\n                  <b> Zimmernummer:</b> {{tableTeestubeTeelounge.zimmernummerValue12}}<br>\n                  <b> Anreise Datum:</b> {{tableTeestubeTeelounge.anreiseValue12}}<br>\n                  <b> Abreise Datum:</b> {{tableTeestubeTeelounge.abreiseValue12}}<br>\n                  <b> Personenanzahl:</b> {{tableTeestubeTeelounge.personenAnzahlValue12}}<br>\n                  <b> Notiz1:</b> {{tableTeestubeTeelounge.notiz1Value12}}<br>\n                  <b> Notiz2:</b> {{tableTeestubeTeelounge.notiz2Value12}}<br>\n                  <b> Trace:</b> {{tableTeestubeTeelounge.trace12}}<br>\n                  <b> BemerkungValue:</b> {{tableTeestubeTeelounge.bemerkungValue12}}<br>\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableTeestubeTeelounge.nameValue13\">\n              <div [style.border]=\"getStyle(tablesTeestubeTeelounge[j].trace13)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableTeestubeTeelounge.nameValue13}}<br>\n                  <b> Zimmernummer:</b> {{tableTeestubeTeelounge.zimmernummerValue13}}<br>\n                  <b> Anreise Datum:</b> {{tableTeestubeTeelounge.anreiseValue13}}<br>\n                  <b> Abreise Datum:</b> {{tableTeestubeTeelounge.abreiseValue13}}<br>\n                  <b> Personenanzahl:</b> {{tableTeestubeTeelounge.personenAnzahlValue13}}<br>\n                  <b> Notiz1:</b> {{tableTeestubeTeelounge.notiz1Value13}}<br>\n                  <b> Notiz2:</b> {{tableTeestubeTeelounge.notiz2Value13}}<br>\n                  <b> Trace:</b> {{tableTeestubeTeelounge.trace13}}<br>\n                  <b> BemerkungValue:</b> {{tableTeestubeTeelounge.bemerkungValue13}}<br>\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableTeestubeTeelounge.nameValue14\">\n              <div [style.border]=\"getStyle(tablesTeestubeTeelounge[j].trace14)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableTeestubeTeelounge.nameValue14}}<br>\n                  <b> Zimmernummer:</b> {{tableTeestubeTeelounge.zimmernummerValue14}}<br>\n                  <b> Anreise Datum:</b> {{tableTeestubeTeelounge.anreiseValue14}}<br>\n                  <b> Abreise Datum:</b> {{tableTeestubeTeelounge.abreiseValue14}}<br>\n                  <b> Personenanzahl:</b> {{tableTeestubeTeelounge.personenAnzahlValue14}}<br>\n                  <b> Notiz1:</b> {{tableTeestubeTeelounge.notiz1Value14}}<br>\n                  <b> Notiz2:</b> {{tableTeestubeTeelounge.notiz2Value14}}<br>\n                  <b> Trace:</b> {{tableTeestubeTeelounge.trace14}}<br>\n                  <b> BemerkungValue:</b> {{tableTeestubeTeelounge.bemerkungValue14}}<br>\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableTeestubeTeelounge.nameValue15\">\n              <div [style.border]=\"getStyle(tablesTeestubeTeelounge[j].trace15)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableTeestubeTeelounge.nameValue15}}<br>\n                  <b> Zimmernummer:</b> {{tableTeestubeTeelounge.zimmernummerValue15}}<br>\n                  <b> Anreise Datum:</b> {{tableTeestubeTeelounge.anreiseValue15}}<br>\n                  <b> Abreise Datum:</b> {{tableTeestubeTeelounge.abreiseValue15}}<br>\n                  <b> Personenanzahl:</b> {{tableTeestubeTeelounge.personenAnzahlValue15}}<br>\n                  <b> Notiz1:</b> {{tableTeestubeTeelounge.notiz1Value15}}<br>\n                  <b> Notiz2:</b> {{tableTeestubeTeelounge.notiz2Value15}}<br>\n                  <b> Trace:</b> {{tableTeestubeTeelounge.trace15}}<br>\n                  <b> BemerkungValue:</b> {{tableTeestubeTeelounge.bemerkungValue15}}<br>\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableTeestubeTeelounge.newTraceName\">\n              <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                <b> Zimmernummer: </b>{{tableTeestubeTeelounge.newTraceRoomNumber}}<br> <b> Neuer Trace: </b>{{tableTeestubeTeelounge.newTraceText}} <br> <b> Tischnummer: </b>{{tableTeestubeTeelounge.newTraceTableNumber}} <br> <b> Mitarbeiter: </b>{{tableTeestubeTeelounge.newTraceEmployee}} <br> <b> Name: </b>{{tableTeestubeTeelounge.newTraceName}} <br> <b> Datum: </b>{{tableTeestubeTeelounge.newTraceDate}}\n              </p>\n            </div>\n            <div *ngIf=\"tableTeestubeTeelounge.newTraceName1\">\n              <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                <b> Zimmernummer: </b>{{tableTeestubeTeelounge.newTraceRoomNumber1}}<br> <b> Neuer Trace: </b>{{tableTeestubeTeelounge.newTraceText1}} <br> <b> Tischnummer: </b>{{tableTeestubeTeelounge.newTraceTableNumber1}} <br> <b> Mitarbeiter: </b>{{tableTeestubeTeelounge.newTraceEmployee1}} <br> <b> Name: </b>{{tableTeestubeTeelounge.newTraceName1}} <br> <b> Datum: </b>{{tableTeestubeTeelounge.newTraceDate1}}                            </p>\n            </div>\n            <div *ngIf=\"tableTeestubeTeelounge.newTraceName2\">\n              <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                <b> Zimmernummer: </b>{{tableTeestubeTeelounge.newTraceRoomNumber2}}<br> <b> Neuer Trace: </b>{{tableTeestubeTeelounge.newTraceText2}} <br> <b> Tischnummer: </b>{{tableTeestubeTeelounge.newTraceTableNumber2}} <br> <b> Mitarbeiter: </b>{{tableTeestubeTeelounge.newTraceEmployee2}} <br> <b> Name: </b>{{tableTeestubeTeelounge.newTraceName2}} <br> <b> Datum: </b>{{tableTeestubeTeelounge.newTraceDate2}}\n              </p>\n            </div>\n\n          </div>\n        </div>\n        <div *ngIf=\"tableTeestubeTeelounge.placeholder === 'true'\">\n          <p [dragula]='\"evented-bag\"' id=\"TeestubeTeelounge\" style=\"background-color: #9d9d9d; border: dashed 3px black; margin-top: 50px; opacity: 0.4; padding: 10px 10px 10px 10px\">Listen-Element hier hin ziehen! {{tableTeestubeTeelounge.number}} {{tableTeestubeTeelounge.department}} {{j}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div *ngFor=\"let tableWaeldlerStubeKristallStube of tablesWaeldlerStubeKristallStube | filter:term; let j = index;\">\n    <div *ngIf=\"tablesWaeldlerStubeKristallStube[j] !== tablesWaeldlerStubeKristallStube[j+1]\">\n      <button style=\"float: right; margin: 20px 0px 20px 0px; background-color: #0a7a74; color: #FFFFFF\" type=\"button\" class=\"btn btn-send\" (click)=\"occupy(tableWaeldlerStubeKristallStube, j)\">{{tableWaeldlerStubeKristallStube.isBesetzt === 'true' ? 'FREI MACHEN' : ''}}</button>\n      <h4><b> Tisch:</b>{{tableWaeldlerStubeKristallStube.number}} </h4><br>\n      <div class='cards-container' id='containerWaeldlerStubeKristallStube' [ngStyle]=\"{'background-color': + tableWaeldlerStubeKristallStube.bgColor}\">\n        <div class=\"table\" [ngStyle]=\"{'background-color': '#' + tableWaeldlerStubeKristallStube.bgColor}\">\n          <div *ngIf=\"tableWaeldlerStubeKristallStube.isBesetzt === 'true'\">\n            <div [style.border]=\"getStyle(tablesWaeldlerStubeKristallStube[j].trace)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableWaeldlerStubeKristallStube.nameValue}}<br>\n                <b> Zimmernummer:</b> {{tableWaeldlerStubeKristallStube.zimmernummerValue}}<br>\n                <b> Anreise Datum:</b> {{tableWaeldlerStubeKristallStube.anreiseValue}}<br>\n                <b> Abreise Datum:</b> {{tableWaeldlerStubeKristallStube.abreiseValue}}<br>\n                <b> Personenanzahl:</b> {{tableWaeldlerStubeKristallStube.personenAnzahlValue}}<br>\n                <b> Notiz1:</b> {{tableWaeldlerStubeKristallStube.notiz1Value}}<br>\n                <b> Notiz2:</b> {{tableWaeldlerStubeKristallStube.notiz2Value}}<br>\n                <b> Trace:</b> {{tableWaeldlerStubeKristallStube.trace}}<br>\n                <b> Bemerkung:</b> {{tableWaeldlerStubeKristallStube.bemerkungValue}}<br>\n              </p>\n            </div>\n            <div *ngIf=\"tableWaeldlerStubeKristallStube.nameValue2\">\n              <div [style.border]=\"getStyle(tablesWaeldlerStubeKristallStube[j].trace2)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableWaeldlerStubeKristallStube.nameValue2}}<br>\n                  <b> Zimmernummer:</b> {{tableWaeldlerStubeKristallStube.zimmernummerValue2}}<br>\n                  <b> Anreise Datum:</b> {{tableWaeldlerStubeKristallStube.anreiseValue2}}<br>\n                  <b> Abreise Datum:</b> {{tableWaeldlerStubeKristallStube.abreiseValue2}}<br>\n                  <b> Personenanzahl:</b> {{tableWaeldlerStubeKristallStube.personenAnzahlValue2}}<br>\n                  <b> Notiz1:</b> {{tableWaeldlerStubeKristallStube.notiz1Value2}}<br>\n                  <b> Notiz2:</b> {{tableWaeldlerStubeKristallStube.notiz2Value2}}<br>\n                  <b> Trace:</b> {{tableWaeldlerStubeKristallStube.trace2}}<br>\n                  <b> BemerkungValue:</b> {{tableWaeldlerStubeKristallStube.bemerkungValue2}}<br>\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableWaeldlerStubeKristallStube.nameValue3\">\n              <div [style.border]=\"getStyle(tablesWaeldlerStubeKristallStube[j].trace3)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableWaeldlerStubeKristallStube.nameValue3}}<br>\n                  <b> Zimmernummer:</b> {{tableWaeldlerStubeKristallStube.zimmernummerValue3}}<br>\n                  <b> Anreise Datum:</b> {{tableWaeldlerStubeKristallStube.anreiseValue3}}<br>\n                  <b> Abreise Datum:</b> {{tableWaeldlerStubeKristallStube.abreiseValue3}}<br>\n                  <b> Personenanzahl:</b> {{tableWaeldlerStubeKristallStube.personenAnzahlValue3}}<br>\n                  <b> Notiz1:</b> {{tableWaeldlerStubeKristallStube.notiz1Value3}}<br>\n                  <b> Notiz2:</b> {{tableWaeldlerStubeKristallStube.notiz2Value3}}<br>\n                  <b> Trace:</b> {{tableWaeldlerStubeKristallStube.trace3}}<br>\n                  <b> BemerkungValue:</b> {{tableWaeldlerStubeKristallStube.bemerkungValue3}}<br>\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableWaeldlerStubeKristallStube.nameValue4\">\n              <div [style.border]=\"getStyle(tablesWaeldlerStubeKristallStube[j].trace4)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableWaeldlerStubeKristallStube.nameValue4}}<br>\n                  <b> Zimmernummer:</b> {{tableWaeldlerStubeKristallStube.zimmernummerValue4}}<br>\n                  <b> Anreise Datum:</b> {{tableWaeldlerStubeKristallStube.anreiseValue4}}<br>\n                  <b> Abreise Datum:</b> {{tableWaeldlerStubeKristallStube.abreiseValue4}}<br>\n                  <b> Personenanzahl:</b> {{tableWaeldlerStubeKristallStube.personenAnzahlValue4}}<br>\n                  <b> Notiz1:</b> {{tableWaeldlerStubeKristallStube.notiz1Value4}}<br>\n                  <b> Notiz2:</b> {{tableWaeldlerStubeKristallStube.notiz1Value4}}<br>\n                  <b> Trace:</b> {{tableWaeldlerStubeKristallStube.trace4}}<br>\n                  <b> BemerkungValue:</b> {{tableWaeldlerStubeKristallStube.bemerkungValue4}}<br>\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableWaeldlerStubeKristallStube.nameValue5\">\n              <div [style.border]=\"getStyle(tablesWaeldlerStubeKristallStube[j].trace5)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableWaeldlerStubeKristallStube.nameValue5}}<br>\n                  <b> Zimmernummer:</b> {{tableWaeldlerStubeKristallStube.zimmernummerValue5}}<br>\n                  <b> Anreise Datum:</b> {{tableWaeldlerStubeKristallStube.anreiseValue5}}<br>\n                  <b> Abreise Datum:</b> {{tableWaeldlerStubeKristallStube.abreiseValue5}}<br>\n                  <b> Personenanzahl:</b> {{tableWaeldlerStubeKristallStube.personenAnzahlValue5}}<br>\n                  <b> Notiz1:</b> {{tableWaeldlerStubeKristallStube.notiz1Value5}}<br>\n                  <b> Notiz2:</b> {{tableWaeldlerStubeKristallStube.notiz2Value5}}<br>\n                  <b> Trace:</b> {{tableWaeldlerStubeKristallStube.trace5}}<br>\n                  <b> BemerkungValue:</b> {{tableWaeldlerStubeKristallStube.bemerkungValue5}}<br>\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableWaeldlerStubeKristallStube.nameValue6\">\n              <div [style.border]=\"getStyle(tablesWaeldlerStubeKristallStube[j].trace6)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableWaeldlerStubeKristallStube.nameValue6}}<br>\n                  <b> Zimmernummer:</b> {{tableWaeldlerStubeKristallStube.zimmernummerValue6}}<br>\n                  <b> Anreise Datum:</b> {{tableWaeldlerStubeKristallStube.anreiseValue6}}<br>\n                  <b> Abreise Datum:</b> {{tableWaeldlerStubeKristallStube.abreiseValue6}}<br>\n                  <b> Personenanzahl:</b> {{tableWaeldlerStubeKristallStube.personenAnzahlValue6}}<br>\n                  <b> Notiz1:</b> {{tableWaeldlerStubeKristallStube.notiz1Value6}}<br>\n                  <b> Notiz2:</b> {{tableWaeldlerStubeKristallStube.notiz2Value6}}<br>\n                  <b> Trace:</b> {{tableWaeldlerStubeKristallStube.trace6}}<br>\n                  <b> BemerkungValue:</b> {{tableWaeldlerStubeKristallStube.bemerkungValue6}}<br>\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableWaeldlerStubeKristallStube.nameValue7\">\n              <div [style.border]=\"getStyle(tablesWaeldlerStubeKristallStube[j].trace7)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableWaeldlerStubeKristallStube.nameValue7}}<br>\n                  <b> Zimmernummer:</b> {{tableWaeldlerStubeKristallStube.zimmernummerValue7}}<br>\n                  <b> Anreise Datum:</b> {{tableWaeldlerStubeKristallStube.anreiseValue7}}<br>\n                  <b> Abreise Datum:</b> {{tableWaeldlerStubeKristallStube.abreiseValue7}}<br>\n                  <b> Personenanzahl:</b> {{tableWaeldlerStubeKristallStube.personenAnzahlValue7}}<br>\n                  <b> Notiz1:</b> {{tableWaeldlerStubeKristallStube.notiz1Value7}}<br>\n                  <b> Notiz2:</b> {{tableWaeldlerStubeKristallStube.notiz2Value7}}<br>\n                  <b> Trace:</b> {{tableWaeldlerStubeKristallStube.trace7}}<br>\n                  <b> BemerkungValue:</b> {{tableWaeldlerStubeKristallStube.bemerkungValue7}}<br>\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableWaeldlerStubeKristallStube.nameValue8\">\n              <div [style.border]=\"getStyle(tablesWaeldlerStubeKristallStube[j].trace8)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableWaeldlerStubeKristallStube.nameValue8}}<br>\n                  <b> Zimmernummer:</b> {{tableWaeldlerStubeKristallStube.zimmernummerValue8}}<br>\n                  <b> Anreise Datum:</b> {{tableWaeldlerStubeKristallStube.anreiseValue8}}<br>\n                  <b> Abreise Datum:</b> {{tableWaeldlerStubeKristallStube.abreiseValue8}}<br>\n                  <b> Personenanzahl:</b> {{tableWaeldlerStubeKristallStube.personenAnzahlValue8}}<br>\n                  <b> Notiz1:</b> {{tableWaeldlerStubeKristallStube.notiz1Value8}}<br>\n                  <b> Notiz2:</b> {{tableWaeldlerStubeKristallStube.notiz2Value8}}<br>\n                  <b> Trace:</b> {{tableWaeldlerStubeKristallStube.trace8}}<br>\n                  <b> BemerkungValue:</b> {{tableWaeldlerStubeKristallStube.bemerkungValue8}}<br>\n                </p>\n              </div>\n            </div>\n\n            <div *ngIf=\"tableWaeldlerStubeKristallStube.nameValue9\">\n              <div [style.border]=\"getStyle(tablesWaeldlerStubeKristallStube[j].trace9)\">\n\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableWaeldlerStubeKristallStube.nameValue9}}<br>\n                  <b> Zimmernummer:</b> {{tableWaeldlerStubeKristallStube.zimmernummerValue9}}<br>\n                  <b> Anreise Datum:</b> {{tableWaeldlerStubeKristallStube.anreiseValue9}}<br>\n                  <b> Abreise Datum:</b> {{tableWaeldlerStubeKristallStube.abreiseValue9}}<br>\n                  <b> Personenanzahl:</b> {{tableWaeldlerStubeKristallStube.personenAnzahlValue9}}<br>\n                  <b> Notiz1:</b> {{tableWaeldlerStubeKristallStube.notiz1Value9}}<br>\n                  <b> Notiz2:</b> {{tableWaeldlerStubeKristallStube.notiz1Value9}}<br>\n                  <b> Trace:</b> {{tableWaeldlerStubeKristallStube.trace9}}<br>\n                  <b> BemerkungValue:</b> {{tableWaeldlerStubeKristallStube.bemerkungValue9}}<br>\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableWaeldlerStubeKristallStube.nameValue10\">\n              <div [style.border]=\"getStyle(tablesWaeldlerStubeKristallStube[j].trace10)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableWaeldlerStubeKristallStube.nameValue10}}<br>\n                  <b> Zimmernummer:</b> {{tableWaeldlerStubeKristallStube.zimmernummerValue10}}<br>\n                  <b> Anreise Datum:</b> {{tableWaeldlerStubeKristallStube.anreiseValue10}}<br>\n                  <b> Abreise Datum:</b> {{tableWaeldlerStubeKristallStube.abreiseValue10}}<br>\n                  <b> Personenanzahl:</b> {{tableWaeldlerStubeKristallStube.personenAnzahlValue10}}<br>\n                  <b> Notiz1:</b> {{tableWaeldlerStubeKristallStube.notiz1Value10}}<br>\n                  <b> Notiz2:</b> {{tableWaeldlerStubeKristallStube.notiz2Value10}}<br>\n                  <b> Trace:</b> {{tableWaeldlerStubeKristallStube.trace10}}<br>\n                  <b> BemerkungValue:</b> {{tableWaeldlerStubeKristallStube.bemerkungValue10}}<br>\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableWaeldlerStubeKristallStube.nameValue11\">\n              <div [style.border]=\"getStyle(tablesWaeldlerStubeKristallStube[j].trace11)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableWaeldlerStubeKristallStube.nameValue11}}<br>\n                  <b> Zimmernummer:</b> {{tableWaeldlerStubeKristallStube.zimmernummerValue11}}<br>\n                  <b> Anreise Datum:</b> {{tableWaeldlerStubeKristallStube.anreiseValue11}}<br>\n                  <b> Abreise Datum:</b> {{tableWaeldlerStubeKristallStube.abreiseValue11}}<br>\n                  <b> Personenanzahl:</b> {{tableWaeldlerStubeKristallStube.personenAnzahlValue11}}<br>\n                  <b> Notiz1:</b> {{tableWaeldlerStubeKristallStube.notiz1Value11}}<br>\n                  <b> Notiz2:</b> {{tableWaeldlerStubeKristallStube.notiz2Value11}}<br>\n                  <b> Trace:</b> {{tableWaeldlerStubeKristallStube.trace11}}<br>\n                  <b> BemerkungValue:</b> {{tableWaeldlerStubeKristallStube.bemerkungValue11}}<br>\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableWaeldlerStubeKristallStube.nameValue12\">\n              <div [style.border]=\"getStyle(tablesWaeldlerStubeKristallStube[j].trace12)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableWaeldlerStubeKristallStube.nameValue12}}<br>\n                  <b> Zimmernummer:</b> {{tableWaeldlerStubeKristallStube.zimmernummerValue12}}<br>\n                  <b> Anreise Datum:</b> {{tableWaeldlerStubeKristallStube.anreiseValue12}}<br>\n                  <b> Abreise Datum:</b> {{tableWaeldlerStubeKristallStube.abreiseValue12}}<br>\n                  <b> Personenanzahl:</b> {{tableWaeldlerStubeKristallStube.personenAnzahlValue12}}<br>\n                  <b> Notiz1:</b> {{tableWaeldlerStubeKristallStube.notiz1Value12}}<br>\n                  <b> Notiz2:</b> {{tableWaeldlerStubeKristallStube.notiz2Value12}}<br>\n                  <b> Trace:</b> {{tableWaeldlerStubeKristallStube.trace12}}<br>\n                  <b> BemerkungValue:</b> {{tableWaeldlerStubeKristallStube.bemerkungValue12}}<br>\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableWaeldlerStubeKristallStube.nameValue13\">\n              <div [style.border]=\"getStyle(tablesWaeldlerStubeKristallStube[j].trace13)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableWaeldlerStubeKristallStube.nameValue13}}<br>\n                  <b> Zimmernummer:</b> {{tableWaeldlerStubeKristallStube.zimmernummerValue13}}<br>\n                  <b> Anreise Datum:</b> {{tableWaeldlerStubeKristallStube.anreiseValue13}}<br>\n                  <b> Abreise Datum:</b> {{tableWaeldlerStubeKristallStube.abreiseValue13}}<br>\n                  <b> Personenanzahl:</b> {{tableWaeldlerStubeKristallStube.personenAnzahlValue13}}<br>\n                  <b> Notiz1:</b> {{tableWaeldlerStubeKristallStube.notiz1Value13}}<br>\n                  <b> Notiz2:</b> {{tableWaeldlerStubeKristallStube.notiz2Value13}}<br>\n                  <b> Trace:</b> {{tableWaeldlerStubeKristallStube.trace13}}<br>\n                  <b> BemerkungValue:</b> {{tableWaeldlerStubeKristallStube.bemerkungValue13}}<br>\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableWaeldlerStubeKristallStube.nameValue14\">\n              <div [style.border]=\"getStyle(tablesWaeldlerStubeKristallStube[j].trace14)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableWaeldlerStubeKristallStube.nameValue14}}<br>\n                  <b> Zimmernummer:</b> {{tableWaeldlerStubeKristallStube.zimmernummerValue14}}<br>\n                  <b> Anreise Datum:</b> {{tableWaeldlerStubeKristallStube.anreiseValue14}}<br>\n                  <b> Abreise Datum:</b> {{tableWaeldlerStubeKristallStube.abreiseValue14}}<br>\n                  <b> Personenanzahl:</b> {{tableWaeldlerStubeKristallStube.personenAnzahlValue14}}<br>\n                  <b> Notiz1:</b> {{tableWaeldlerStubeKristallStube.notiz1Value14}}<br>\n                  <b> Notiz2:</b> {{tableWaeldlerStubeKristallStube.notiz2Value14}}<br>\n                  <b> Trace:</b> {{tableWaeldlerStubeKristallStube.trace14}}<br>\n                  <b> BemerkungValue:</b> {{tableWaeldlerStubeKristallStube.bemerkungValue14}}<br>\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableWaeldlerStubeKristallStube.nameValue15\">\n              <div [style.border]=\"getStyle(tablesWaeldlerStubeKristallStube[j].trace15)\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Name:</b> {{tableWaeldlerStubeKristallStube.nameValue15}}<br>\n                  <b> Zimmernummer:</b> {{tableWaeldlerStubeKristallStube.zimmernummerValue15}}<br>\n                  <b> Anreise Datum:</b> {{tableWaeldlerStubeKristallStube.anreiseValue15}}<br>\n                  <b> Abreise Datum:</b> {{tableWaeldlerStubeKristallStube.abreiseValue15}}<br>\n                  <b> Personenanzahl:</b> {{tableWaeldlerStubeKristallStube.personenAnzahlValue15}}<br>\n                  <b> Notiz1:</b> {{tableWaeldlerStubeKristallStube.notiz1Value15}}<br>\n                  <b> Notiz2:</b> {{tableWaeldlerStubeKristallStube.notiz2Value15}}<br>\n                  <b> Trace:</b> {{tableWaeldlerStubeKristallStube.trace15}}<br>\n                  <b> BemerkungValue:</b> {{tableWaeldlerStubeKristallStube.bemerkungValue15}}<br>\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableWaeldlerStubeKristallStube.newTraceName\">\n              <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                <b> Zimmernummer: </b>{{tableWaeldlerStubeKristallStube.newTraceRoomNumber}}<br> <b> Neuer Trace: </b>{{tableWaeldlerStubeKristallStube.newTraceText}} <br> <b> Tischnummer: </b>{{tableWaeldlerStubeKristallStube.newTraceTableNumber}} <br> <b> Mitarbeiter: </b>{{tableWaeldlerStubeKristallStube.newTraceEmployee}} <br> <b> Name: </b>{{tableWaeldlerStubeKristallStube.newTraceName}} <br> <b> Datum: </b>{{tableWaeldlerStubeKristallStube.newTraceDate}}\n              </p>\n            </div>\n            <div *ngIf=\"tableWaeldlerStubeKristallStube.newTraceName1\">\n              <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                <b> Zimmernummer: </b>{{tableWaeldlerStubeKristallStube.newTraceRoomNumber1}}<br> <b> Neuer Trace: </b>{{tableWaeldlerStubeKristallStube.newTraceText1}} <br> <b> Tischnummer: </b>{{tableWaeldlerStubeKristallStube.newTraceTableNumber1}} <br> <b> Mitarbeiter: </b>{{tableWaeldlerStubeKristallStube.newTraceEmployee1}} <br> <b> Name: </b>{{tableWaeldlerStubeKristallStube.newTraceName1}} <br> <b> Datum: </b>{{tableWaeldlerStubeKristallStube.newTraceDate1}}                            </p>\n            </div>\n            <div *ngIf=\"tableWaeldlerStubeKristallStube.newTraceName2\">\n              <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                <b> Zimmernummer: </b>{{tableWaeldlerStubeKristallStube.newTraceRoomNumber2}}<br> <b> Neuer Trace: </b>{{tableWaeldlerStubeKristallStube.newTraceText2}} <br> <b> Tischnummer: </b>{{tableWaeldlerStubeKristallStube.newTraceTableNumber2}} <br> <b> Mitarbeiter: </b>{{tableWaeldlerStubeKristallStube.newTraceEmployee2}} <br> <b> Name: </b>{{tableWaeldlerStubeKristallStube.newTraceName2}} <br> <b> Datum: </b>{{tableWaeldlerStubeKristallStube.newTraceDate2}}\n              </p>\n            </div>\n\n          </div>\n        </div>\n        <div *ngIf=\"tableWaeldlerStubeKristallStube.placeholder === 'true'\">\n          <p [dragula]='\"evented-bag\"' id=\"WaeldlerStubeKristallStube\" style=\"background-color: #9d9d9d; border: dashed 3px black; margin-top: 50px; opacity: 0.4; padding: 10px 10px 10px 10px\">Listen-Element hier hin ziehen! {{tableWaeldlerStubeKristallStube.number}} {{tableWaeldlerStubeKristallStube.department}} {{j}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/departments/alle/alle.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlleComponent; });
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

var AlleComponent = (function () {
    function AlleComponent() {
        this.occupied = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    AlleComponent.prototype.ngOnInit = function () {
    };
    AlleComponent.prototype.occupy = function (table, j) {
        this.occupied.emit({ table: table, j: j });
    };
    AlleComponent.prototype.getStyle = function (j) {
        if (j) {
            return "solid 3px red";
        }
        else {
            return "";
        }
    };
    return AlleComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesBauernstube'),
    __metadata("design:type", Array)
], AlleComponent.prototype, "tablesBauernstube", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesBerglerStubeHubertusStube'),
    __metadata("design:type", Array)
], AlleComponent.prototype, "tablesBerglerStubeHubertusStube", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesEdelweissKaminStube'),
    __metadata("design:type", Array)
], AlleComponent.prototype, "tablesEdelweissKaminStube", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesTeestubeTeelounge'),
    __metadata("design:type", Array)
], AlleComponent.prototype, "tablesTeestubeTeelounge", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesWaeldlerStubeKristallStube'),
    __metadata("design:type", Array)
], AlleComponent.prototype, "tablesWaeldlerStubeKristallStube", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('term'),
    __metadata("design:type", String)
], AlleComponent.prototype, "term", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], AlleComponent.prototype, "occupied", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showAlleBool'),
    __metadata("design:type", Boolean)
], AlleComponent.prototype, "showAlleBool", void 0);
AlleComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-alle',
        template: __webpack_require__("../../../../../src/app/components/digitalerTischplan/departments/alle/alle.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digitalerTischplan/tischplan.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AlleComponent);

var _a;
//# sourceMappingURL=alle.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/departments/bauernstube/bauernstube.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showBauernStubnBool\">\n  <div *ngFor=\"let tableBauernstube of tablesBauernstube | filter:term; let j = index;\">\n    <div *ngIf=\"tablesBauernstube[j] !== tablesBauernstube[j+1]\">\n      <button style=\"float: right; margin: 20px 0px 20px 0px; background-color: #0a7a74; color: #FFFFFF\"  type=\"button\" class=\"btn btn-send\" (click)=\"occupy(tableBauernstube, j)\">{{tableBauernstube.isBesetzt === 'true' ? 'FREI MACHEN' : ''}}</button>\n      <h4><b> Tisch:</b>{{tableBauernstube.number}} </h4><br>\n      <div class='cards-container' id='containerBauernstube' [ngStyle]=\"{'background-color': + tableBauernstube.bgColor}\">\n        <div class=\"table\" [ngStyle]=\"{'background-color': '#' + tableBauernstube.bgColor}\">\n          <div *ngIf=\"tableBauernstube.isBesetzt === 'true'\">\n            <div [style.border]=\"getStyle(tablesBauernstube[j].trace)\">\n            <p style=\"background-color: #FFFFFF; padding: 10px\">\n              <b> Name:</b> {{tableBauernstube.nameValue}}<br>\n              <b> Zimmernummer:</b> {{tableBauernstube.zimmernummerValue}}<br>\n              <b> Anreise Datum:</b> {{tableBauernstube.anreiseValue}}<br>\n              <b> Abreise Datum:</b> {{tableBauernstube.abreiseValue}}<br>\n              <b> Personenanzahl:</b> {{tableBauernstube.personenAnzahlValue}}<br>\n              <b> Notiz1:</b> {{tableBauernstube.notiz1Value}}<br>\n              <b> Notiz2:</b> {{tableBauernstube.notiz2Value}}<br>\n              <b> Trace:</b> {{tableBauernstube.trace}}<br>\n              <b> Bemerkung:</b> {{tableBauernstube.bemerkungValue}}<br>\n            </p>\n            </div>\n            <div *ngIf=\"tableBauernstube.nameValue2\">\n              <div [style.border]=\"getStyle(tablesBauernstube[j].trace2)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableBauernstube.nameValue2}}<br>\n                <b> Zimmernummer:</b> {{tableBauernstube.zimmernummerValue2}}<br>\n                <b> Anreise Datum:</b> {{tableBauernstube.anreiseValue2}}<br>\n                <b> Abreise Datum:</b> {{tableBauernstube.abreiseValue2}}<br>\n                <b> Personenanzahl:</b> {{tableBauernstube.personenAnzahlValue2}}<br>\n                <b> Notiz1:</b> {{tableBauernstube.notiz1Value2}}<br>\n                <b> Notiz2:</b> {{tableBauernstube.notiz2Value2}}<br>\n                <b> Trace:</b> {{tableBauernstube.trace2}}<br>\n                <b> BemerkungValue:</b> {{tableBauernstube.bemerkungValue2}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableBauernstube.nameValue3\">\n              <div [style.border]=\"getStyle(tablesBauernstube[j].trace3)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableBauernstube.nameValue3}}<br>\n                <b> Zimmernummer:</b> {{tableBauernstube.zimmernummerValue3}}<br>\n                <b> Anreise Datum:</b> {{tableBauernstube.anreiseValue3}}<br>\n                <b> Abreise Datum:</b> {{tableBauernstube.abreiseValue3}}<br>\n                <b> Personenanzahl:</b> {{tableBauernstube.personenAnzahlValue3}}<br>\n                <b> Notiz1:</b> {{tableBauernstube.notiz1Value3}}<br>\n                <b> Notiz2:</b> {{tableBauernstube.notiz2Value3}}<br>\n                <b> Trace:</b> {{tableBauernstube.trace3}}<br>\n                <b> BemerkungValue:</b> {{tableBauernstube.bemerkungValue3}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableBauernstube.nameValue4\">\n              <div [style.border]=\"getStyle(tablesBauernstube[j].trace4)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableBauernstube.nameValue4}}<br>\n                <b> Zimmernummer:</b> {{tableBauernstube.zimmernummerValue4}}<br>\n                <b> Anreise Datum:</b> {{tableBauernstube.anreiseValue4}}<br>\n                <b> Abreise Datum:</b> {{tableBauernstube.abreiseValue4}}<br>\n                <b> Personenanzahl:</b> {{tableBauernstube.personenAnzahlValue4}}<br>\n                <b> Notiz1:</b> {{tableBauernstube.notiz1Value4}}<br>\n                <b> Notiz2:</b> {{tableBauernstube.notiz2Value4}}<br>\n                <b> Trace:</b> {{tableBauernstube.trace4}}<br>\n                <b> BemerkungValue:</b> {{tableBauernstube.bemerkungValue4}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableBauernstube.nameValue5\">\n              <div [style.border]=\"getStyle(tablesBauernstube[j].trace5)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableBauernstube.nameValue5}}<br>\n                <b> Zimmernummer:</b> {{tableBauernstube.zimmernummerValue5}}<br>\n                <b> Anreise Datum:</b> {{tableBauernstube.anreiseValue5}}<br>\n                <b> Abreise Datum:</b> {{tableBauernstube.abreiseValue5}}<br>\n                <b> Personenanzahl:</b> {{tableBauernstube.personenAnzahlValue5}}<br>\n                <b> Notiz1:</b> {{tableBauernstube.notiz1Value5}}<br>\n                <b> Notiz2:</b> {{tableBauernstube.notiz2Value5}}<br>\n                <b> Trace:</b> {{tableBauernstube.trace5}}<br>\n                <b> BemerkungValue:</b> {{tableBauernstube.bemerkungValue5}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableBauernstube.nameValue6\">\n              <div [style.border]=\"getStyle(tablesBauernstube[j].trace6)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableBauernstube.nameValue6}}<br>\n                <b> Zimmernummer:</b> {{tableBauernstube.zimmernummerValue6}}<br>\n                <b> Anreise Datum:</b> {{tableBauernstube.anreiseValue6}}<br>\n                <b> Abreise Datum:</b> {{tableBauernstube.abreiseValue6}}<br>\n                <b> Personenanzahl:</b> {{tableBauernstube.personenAnzahlValue6}}<br>\n                <b> Notiz1:</b> {{tableBauernstube.notiz1Value6}}<br>\n                <b> Notiz2:</b> {{tableBauernstube.notiz2Value6}}<br>\n                <b> Trace:</b> {{tableBauernstube.trace6}}<br>\n                <b> BemerkungValue:</b> {{tableBauernstube.bemerkungValue6}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableBauernstube.nameValue7\">\n              <div [style.border]=\"getStyle(tablesBauernstube[j].trace7)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableBauernstube.nameValue7}}<br>\n                <b> Zimmernummer:</b> {{tableBauernstube.zimmernummerValue7}}<br>\n                <b> Anreise Datum:</b> {{tableBauernstube.anreiseValue7}}<br>\n                <b> Abreise Datum:</b> {{tableBauernstube.abreiseValue7}}<br>\n                <b> Personenanzahl:</b> {{tableBauernstube.personenAnzahlValue7}}<br>\n                <b> Notiz1:</b> {{tableBauernstube.notiz1Value7}}<br>\n                <b> Notiz2:</b> {{tableBauernstube.notiz2Value7}}<br>\n                <b> Trace:</b> {{tableBauernstube.trace7}}<br>\n                <b> BemerkungValue:</b> {{tableBauernstube.bemerkungValue7}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableBauernstube.nameValue8\">\n              <div [style.border]=\"getStyle(tablesBauernstube[j].trace8)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableBauernstube.nameValue8}}<br>\n                <b> Zimmernummer:</b> {{tableBauernstube.zimmernummerValue8}}<br>\n                <b> Anreise Datum:</b> {{tableBauernstube.anreiseValue8}}<br>\n                <b> Abreise Datum:</b> {{tableBauernstube.abreiseValue8}}<br>\n                <b> Personenanzahl:</b> {{tableBauernstube.personenAnzahlValue8}}<br>\n                <b> Notiz1:</b> {{tableBauernstube.notiz1Value8}}<br>\n                <b> Notiz2:</b> {{tableBauernstube.notiz2Value8}}<br>\n                <b> Trace:</b> {{tableBauernstube.trace8}}<br>\n                <b> BemerkungValue:</b> {{tableBauernstube.bemerkungValue8}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableBauernstube.nameValue9\">\n              <div [style.border]=\"getStyle(tablesBauernstube[j].trace9)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableBauernstube.nameValue9}}<br>\n                <b> Zimmernummer:</b> {{tableBauernstube.zimmernummerValue9}}<br>\n                <b> Anreise Datum:</b> {{tableBauernstube.anreiseValue9}}<br>\n                <b> Abreise Datum:</b> {{tableBauernstube.abreiseValue9}}<br>\n                <b> Personenanzahl:</b> {{tableBauernstube.personenAnzahlValue9}}<br>\n                <b> Notiz1:</b> {{tableBauernstube.notiz1Value9}}<br>\n                <b> Notiz2:</b> {{tableBauernstube.notiz2Value9}}<br>\n                <b> Trace:</b> {{tableBauernstube.trace9}}<br>\n                <b> BemerkungValue:</b> {{tableBauernstube.bemerkungValue9}}<br>\n              </p>\n            </div>\n            <div *ngIf=\"tableBauernstube.nameValue10\">\n              <div [style.border]=\"getStyle(tablesBauernstube[j].trace10)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableBauernstube.nameValue10}}<br>\n                <b> Zimmernummer:</b> {{tableBauernstube.zimmernummerValue10}}<br>\n                <b> Anreise Datum:</b> {{tableBauernstube.anreiseValue10}}<br>\n                <b> Abreise Datum:</b> {{tableBauernstube.abreiseValue10}}<br>\n                <b> Personenanzahl:</b> {{tableBauernstube.personenAnzahlValue10}}<br>\n                <b> Notiz1:</b> {{tableBauernstube.notiz1Value10}}<br>\n                <b> Notiz2:</b> {{tableBauernstube.notiz2Value10}}<br>\n                <b> Trace:</b> {{tableBauernstube.trace10}}<br>\n                <b> BemerkungValue:</b> {{tableBauernstube.bemerkungValue10}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableBauernstube.nameValue11\">\n              <div [style.border]=\"getStyle(tablesBauernstube[j].trace11)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableBauernstube.nameValue11}}<br>\n                <b> Zimmernummer:</b> {{tableBauernstube.zimmernummerValue11}}<br>\n                <b> Anreise Datum:</b> {{tableBauernstube.anreiseValue11}}<br>\n                <b> Abreise Datum:</b> {{tableBauernstube.abreiseValue11}}<br>\n                <b> Personenanzahl:</b> {{tableBauernstube.personenAnzahlValue11}}<br>\n                <b> Notiz1:</b> {{tableBauernstube.notiz1Value11}}<br>\n                <b> Notiz2:</b> {{tableBauernstube.notiz2Value11}}<br>\n                <b> Trace:</b> {{tableBauernstube.trace11}}<br>\n                <b> BemerkungValue:</b> {{tableBauernstube.bemerkungValue11}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableBauernstube.nameValue12\">\n              <div [style.border]=\"getStyle(tablesBauernstube[j].trace12)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableBauernstube.nameValue12}}<br>\n                <b> Zimmernummer:</b> {{tableBauernstube.zimmernummerValue12}}<br>\n                <b> Anreise Datum:</b> {{tableBauernstube.anreiseValue12}}<br>\n                <b> Abreise Datum:</b> {{tableBauernstube.abreiseValue12}}<br>\n                <b> Personenanzahl:</b> {{tableBauernstube.personenAnzahlValue12}}<br>\n                <b> Notiz1:</b> {{tableBauernstube.notiz1Value12}}<br>\n                <b> Notiz2:</b> {{tableBauernstube.notiz2Value12}}<br>\n                <b> Trace:</b> {{tableBauernstube.trace12}}<br>\n                <b> BemerkungValue:</b> {{tableBauernstube.bemerkungValue12}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableBauernstube.nameValue13\">\n              <div [style.border]=\"getStyle(tablesBauernstube[j].trace13)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableBauernstube.nameValue13}}<br>\n                <b> Zimmernummer:</b> {{tableBauernstube.zimmernummerValue13}}<br>\n                <b> Anreise Datum:</b> {{tableBauernstube.anreiseValue13}}<br>\n                <b> Abreise Datum:</b> {{tableBauernstube.abreiseValue13}}<br>\n                <b> Personenanzahl:</b> {{tableBauernstube.personenAnzahlValue13}}<br>\n                <b> Notiz1:</b> {{tableBauernstube.notiz1Value13}}<br>\n                <b> Notiz2:</b> {{tableBauernstube.notiz2Value13}}<br>\n                <b> Trace:</b> {{tableBauernstube.trace13}}<br>\n                <b> BemerkungValue:</b> {{tableBauernstube.bemerkungValue13}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableBauernstube.nameValue14\">\n              <div [style.border]=\"getStyle(tablesBauernstube[j].trace14)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableBauernstube.nameValue14}}<br>\n                <b> Zimmernummer:</b> {{tableBauernstube.zimmernummerValue14}}<br>\n                <b> Anreise Datum:</b> {{tableBauernstube.anreiseValue14}}<br>\n                <b> Abreise Datum:</b> {{tableBauernstube.abreiseValue14}}<br>\n                <b> Personenanzahl:</b> {{tableBauernstube.personenAnzahlValue14}}<br>\n                <b> Notiz1:</b> {{tableBauernstube.notiz1Value14}}<br>\n                <b> Notiz2:</b> {{tableBauernstube.notiz2Value14}}<br>\n                <b> Trace:</b> {{tableBauernstube.trace14}}<br>\n                <b> BemerkungValue:</b> {{tableBauernstube.bemerkungValue14}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableBauernstube.nameValue15\">\n              <div [style.border]=\"getStyle(tablesBauernstube[j].trace15)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableBauernstube.nameValue15}}<br>\n                <b> Zimmernummer:</b> {{tableBauernstube.zimmernummerValue15}}<br>\n                <b> Anreise Datum:</b> {{tableBauernstube.anreiseValue15}}<br>\n                <b> Abreise Datum:</b> {{tableBauernstube.abreiseValue15}}<br>\n                <b> Personenanzahl:</b> {{tableBauernstube.personenAnzahlValue15}}<br>\n                <b> Notiz1:</b> {{tableBauernstube.notiz1Value15}}<br>\n                <b> Notiz2:</b> {{tableBauernstube.notiz2Value15}}<br>\n                <b> Trace:</b> {{tableBauernstube.trace15}}<br>\n                <b> BemerkungValue:</b> {{tableBauernstube.bemerkungValue15}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableBauernstube.newTraceName\">\n              <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                <b> Zimmernummer: </b>{{tableBauernstube.newTraceRoomNumber}}<br> <b> Neuer Trace: </b>{{tableBauernstube.newTraceText}} <br> <b> Tischnummer: </b>{{tableBauernstube.newTraceTableNumber}} <br> <b> Mitarbeiter: </b>{{tableBauernstube.newTraceEmployee}} <br> <b> Name: </b>{{tableBauernstube.newTraceName}} <br> <b> Datum: </b>{{tableBauernstube.newTraceDate}}\n              </p>\n            </div>\n            <div *ngIf=\"tableBauernstube.newTraceName1\">\n              <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                <b> Zimmernummer: </b>{{tableBauernstube.newTraceRoomNumber1}}<br> <b> Neuer Trace: </b>{{tableBauernstube.newTraceText1}} <br> <b> Tischnummer: </b>{{tableBauernstube.newTraceTableNumber1}} <br> <b> Mitarbeiter: </b>{{tableBauernstube.newTraceEmployee1}} <br> <b> Name: </b>{{tableBauernstube.newTraceName1}} <br> <b> Datum: </b>{{tableBauernstube.newTraceDate1}}                            </p>\n            </div>\n            <div *ngIf=\"tableBauernstube.newTraceName2\">\n              <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                <b> Zimmernummer: </b>{{tableBauernstube.newTraceRoomNumber2}}<br> <b> Neuer Trace: </b>{{tableBauernstube.newTraceText2}} <br> <b> Tischnummer: </b>{{tableBauernstube.newTraceTableNumber2}} <br> <b> Mitarbeiter: </b>{{tableBauernstube.newTraceEmployee2}} <br> <b> Name: </b>{{tableBauernstube.newTraceName2}} <br> <b> Datum: </b>{{tableBauernstube.newTraceDate2}}\n              </p>\n            </div>\n          </div>\n        </div>\n        <div *ngIf=\"tableBauernstube.placeholder === 'true'\">\n          <p [dragula]='\"evented-bag\"' id=\"Bauernstube\" style=\"background-color: #9d9d9d; border: dashed 3px black; margin-top: 50px; opacity: 0.4; padding: 10px 10px 10px 10px\">Listen-Element hier hin ziehen! {{tableBauernstube.number}} {{tableBauernstube.department}} {{j}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/departments/bauernstube/bauernstube.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BauernstubeComponent; });
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

var BauernstubeComponent = (function () {
    function BauernstubeComponent() {
        this.occupied = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    BauernstubeComponent.prototype.ngOnInit = function () {
    };
    BauernstubeComponent.prototype.occupy = function (table, j) {
        this.occupied.emit({ table: table, j: j });
    };
    BauernstubeComponent.prototype.getStyle = function (j) {
        if (j) {
            return "solid 3px red";
        }
        else {
            return "";
        }
    };
    return BauernstubeComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesBauernstube'),
    __metadata("design:type", Array)
], BauernstubeComponent.prototype, "tablesBauernstube", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showBauernStubnBool'),
    __metadata("design:type", Boolean)
], BauernstubeComponent.prototype, "showBauernStubnBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('term'),
    __metadata("design:type", String)
], BauernstubeComponent.prototype, "term", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], BauernstubeComponent.prototype, "occupied", void 0);
BauernstubeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-bauernstube',
        template: __webpack_require__("../../../../../src/app/components/digitalerTischplan/departments/bauernstube/bauernstube.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digitalerTischplan/tischplan.component.css")]
    }),
    __metadata("design:paramtypes", [])
], BauernstubeComponent);

var _a;
//# sourceMappingURL=bauernstube.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/departments/bergler-stube-hubertus-stube/bergler-stube-hubertus-stube.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showBerglerBool\">\n  <div *ngFor=\"let tableBerglerStubeHubertusStube of tablesBerglerStubeHubertusStube | filter:term; let j = index;\">\n    <div *ngIf=\"tablesBerglerStubeHubertusStube[j] !== tablesBerglerStubeHubertusStube[j+1]\">\n      <button style=\"float: right; margin: 20px 0px 20px 0px; background-color: #0a7a74; color: #FFFFFF\" type=\"button\" class=\"btn btn-send\" (click)=\"occupy(tableBerglerStubeHubertusStube, j)\">{{tableBerglerStubeHubertusStube.isBesetzt === 'true' ? 'FREI MACHEN' : '' }}</button>\n      <h4><b> Tisch: </b>{{tableBerglerStubeHubertusStube.number}} </h4><br>\n      <div class='cards-container' id='containerBerglerStubeHubertusStube'  [ngStyle]=\"{'background-color': + tableBerglerStubeHubertusStube.bgColor}\">\n        <div class=\"table\" [ngStyle]=\"{'background-color': '#' + tableBerglerStubeHubertusStube.bgColor}\">\n          <div *ngIf=\"tableBerglerStubeHubertusStube.isBesetzt === 'true'\">\n            <div [style.border]=\"getStyle(tablesBerglerStubeHubertusStube[j].trace)\">\n            <p style=\"background-color: #FFFFFF; padding: 10px\">\n            <b> Name:</b> {{tableBerglerStubeHubertusStube.nameValue}}<br>\n              <b> Zimmernummer:</b> {{tableBerglerStubeHubertusStube.zimmernummerValue}}<br>\n              <b> Anreise Datum:</b> {{tableBerglerStubeHubertusStube.anreiseValue}}<br>\n              <b> Abreise Datum:</b> {{tableBerglerStubeHubertusStube.abreiseValue}}<br>\n              <b> Personenanzahl:</b> {{tableBerglerStubeHubertusStube.personenAnzahlValue}}<br>\n              <b> Notiz1:</b> {{tableBerglerStubeHubertusStube.notiz1Value}}<br>\n              <b> Notiz2:</b> {{tableBerglerStubeHubertusStube.notiz2Value}}<br>\n              <b> Trace:</b> {{tableBerglerStubeHubertusStube.trace}}<br>\n              <b> Bemerkung:</b> {{tableBerglerStubeHubertusStube.bemerkungValue}}<br>\n            </p>\n            </div>\n            <div *ngIf=\"tableBerglerStubeHubertusStube.nameValue2\">\n              <div [style.border]=\"getStyle(tablesBerglerStubeHubertusStube[j].trace2)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableBerglerStubeHubertusStube.nameValue2}}<br>\n                <b> Zimmernummer:</b> {{tableBerglerStubeHubertusStube.zimmernummerValue2}}<br>\n                <b> Anreise Datum:</b> {{tableBerglerStubeHubertusStube.anreiseValue2}}<br>\n                <b> Abreise Datum:</b> {{tableBerglerStubeHubertusStube.abreiseValue2}}<br>\n                <b> Personenanzahl:</b> {{tableBerglerStubeHubertusStube.personenAnzahlValue2}}<br>\n                <b> Notiz1:</b> {{tableBerglerStubeHubertusStube.notiz1Value2}}<br>\n                <b> Notiz2:</b> {{tableBerglerStubeHubertusStube.notiz2Value2}}<br>\n                <b> Trace:</b> {{tableBerglerStubeHubertusStube.trace2}}<br>\n                <b> BemerkungValue:</b> {{tableBerglerStubeHubertusStube.bemerkungValue2}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableBerglerStubeHubertusStube.nameValue3\">\n              <div [style.border]=\"getStyle(tablesBerglerStubeHubertusStube[j].trace3)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableBerglerStubeHubertusStube.nameValue3}}<br>\n                <b> Zimmernummer:</b> {{tableBerglerStubeHubertusStube.zimmernummerValue3}}<br>\n                <b> Anreise Datum:</b> {{tableBerglerStubeHubertusStube.anreiseValue3}}<br>\n                <b> Abreise Datum:</b> {{tableBerglerStubeHubertusStube.abreiseValue3}}<br>\n                <b> Personenanzahl:</b> {{tableBerglerStubeHubertusStube.personenAnzahlValue3}}<br>\n                <b> Notiz1:</b> {{tableBerglerStubeHubertusStube.notiz1Value3}}<br>\n                <b> Notiz2:</b> {{tableBerglerStubeHubertusStube.notiz2Value3}}<br>\n                <b> Trace:</b> {{tableBerglerStubeHubertusStube.trace3}}<br>\n                <b> BemerkungValue:</b> {{tableBerglerStubeHubertusStube.bemerkungValue3}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableBerglerStubeHubertusStube.nameValue4\">\n              <div [style.border]=\"getStyle(tablesBerglerStubeHubertusStube[j].trace4)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableBerglerStubeHubertusStube.nameValue4}}<br>\n                <b> Zimmernummer:</b> {{tableBerglerStubeHubertusStube.zimmernummerValue4}}<br>\n                <b> Anreise Datum:</b> {{tableBerglerStubeHubertusStube.anreiseValue4}}<br>\n                <b> Abreise Datum:</b> {{tableBerglerStubeHubertusStube.abreiseValue4}}<br>\n                <b> Personenanzahl:</b> {{tableBerglerStubeHubertusStube.personenAnzahlValue4}}<br>\n                <b> Notiz1:</b> {{tableBerglerStubeHubertusStube.notiz1Value4}}<br>\n                <b> Notiz2:</b> {{tableBerglerStubeHubertusStube.notiz2Value4}}<br>\n                <b> Trace:</b> {{tableBerglerStubeHubertusStube.trace4}}<br>\n                <b> BemerkungValue:</b> {{tableBerglerStubeHubertusStube.bemerkungValue4}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableBerglerStubeHubertusStube.nameValue5\">\n              <div [style.border]=\"getStyle(tablesBerglerStubeHubertusStube[j].trace5)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableBerglerStubeHubertusStube.nameValue5}}<br>\n                <b> Zimmernummer:</b> {{tableBerglerStubeHubertusStube.zimmernummerValue5}}<br>\n                <b> Anreise Datum:</b> {{tableBerglerStubeHubertusStube.anreiseValue5}}<br>\n                <b> Abreise Datum:</b> {{tableBerglerStubeHubertusStube.abreiseValue5}}<br>\n                <b> Personenanzahl:</b> {{tableBerglerStubeHubertusStube.personenAnzahlValue5}}<br>\n                <b> Notiz1:</b> {{tableBerglerStubeHubertusStube.notiz1Value5}}<br>\n                <b> Notiz2:</b> {{tableBerglerStubeHubertusStube.notiz2Value5}}<br>\n                <b> Trace:</b> {{tableBerglerStubeHubertusStube.trace5}}<br>\n                <b> BemerkungValue:</b> {{tableBerglerStubeHubertusStube.bemerkungValue5}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableBerglerStubeHubertusStube.nameValue6\">\n              <div [style.border]=\"getStyle(tablesBerglerStubeHubertusStube[j].trace6)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableBerglerStubeHubertusStube.nameValue6}}<br>\n                <b> Zimmernummer:</b> {{tableBerglerStubeHubertusStube.zimmernummerValue6}}<br>\n                <b> Anreise Datum:</b> {{tableBerglerStubeHubertusStube.anreiseValue6}}<br>\n                <b> Abreise Datum:</b> {{tableBerglerStubeHubertusStube.abreiseValue6}}<br>\n                <b> Personenanzahl:</b> {{tableBerglerStubeHubertusStube.personenAnzahlValue6}}<br>\n                <b> Notiz1:</b> {{tableBerglerStubeHubertusStube.notiz1Value6}}<br>\n                <b> Notiz2:</b> {{tableBerglerStubeHubertusStube.notiz2Value6}}<br>\n                <b> Trace:</b> {{tableBerglerStubeHubertusStube.trace6}}<br>\n                <b> BemerkungValue:</b> {{tableBerglerStubeHubertusStube.bemerkungValue6}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableBerglerStubeHubertusStube.nameValue7\">\n              <div [style.border]=\"getStyle(tablesBerglerStubeHubertusStube[j].trace7)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableBerglerStubeHubertusStube.nameValue7}}<br>\n                <b> Zimmernummer:</b> {{tableBerglerStubeHubertusStube.zimmernummerValue7}}<br>\n                <b> Anreise Datum:</b> {{tableBerglerStubeHubertusStube.anreiseValue7}}<br>\n                <b> Abreise Datum:</b> {{tableBerglerStubeHubertusStube.abreiseValue7}}<br>\n                <b> Personenanzahl:</b> {{tableBerglerStubeHubertusStube.personenAnzahlValue7}}<br>\n                <b> Notiz1:</b> {{tableBerglerStubeHubertusStube.notiz1Value7}}<br>\n                <b> Notiz2:</b> {{tableBerglerStubeHubertusStube.notiz2Value7}}<br>\n                <b> Trace:</b> {{tableBerglerStubeHubertusStube.trace7}}<br>\n                <b> BemerkungValue:</b> {{tableBerglerStubeHubertusStube.bemerkungValue7}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableBerglerStubeHubertusStube.nameValue8\">\n              <div [style.border]=\"getStyle(tablesBerglerStubeHubertusStube[j].trace8)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableBerglerStubeHubertusStube.nameValue8}}<br>\n                <b> Zimmernummer:</b> {{tableBerglerStubeHubertusStube.zimmernummerValue8}}<br>\n                <b> Anreise Datum:</b> {{tableBerglerStubeHubertusStube.anreiseValue8}}<br>\n                <b> Abreise Datum:</b> {{tableBerglerStubeHubertusStube.abreiseValue8}}<br>\n                <b> Personenanzahl:</b> {{tableBerglerStubeHubertusStube.personenAnzahlValue8}}<br>\n                <b> Notiz1:</b> {{tableBerglerStubeHubertusStube.notiz1Value8}}<br>\n                <b> Notiz2:</b> {{tableBerglerStubeHubertusStube.notiz2Value8}}<br>\n                <b> Trace:</b> {{tableBerglerStubeHubertusStube.trace8}}<br>\n                <b> BemerkungValue:</b> {{tableBerglerStubeHubertusStube.bemerkungValue8}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableBerglerStubeHubertusStube.nameValue9\">\n              <div [style.border]=\"getStyle(tablesBerglerStubeHubertusStube[j].trace9)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableBerglerStubeHubertusStube.nameValue9}}<br>\n                <b> Zimmernummer:</b> {{tableBerglerStubeHubertusStube.zimmernummerValue9}}<br>\n                <b> Anreise Datum:</b> {{tableBerglerStubeHubertusStube.anreiseValue9}}<br>\n                <b> Abreise Datum:</b> {{tableBerglerStubeHubertusStube.abreiseValue9}}<br>\n                <b> Personenanzahl:</b> {{tableBerglerStubeHubertusStube.personenAnzahlValue9}}<br>\n                <b> Notiz1:</b> {{tableBerglerStubeHubertusStube.notiz1Value9}}<br>\n                <b> Notiz2:</b> {{tableBerglerStubeHubertusStube.notiz2Value9}}<br>\n                <b> Trace:</b> {{tableBerglerStubeHubertusStube.trace9}}<br>\n                <b> BemerkungValue:</b> {{tableBerglerStubeHubertusStube.bemerkungValue9}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableBerglerStubeHubertusStube.nameValue10\">\n              <div [style.border]=\"getStyle(tablesBerglerStubeHubertusStube[j].trace10)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableBerglerStubeHubertusStube.nameValue10}}<br>\n                <b> Zimmernummer:</b> {{tableBerglerStubeHubertusStube.zimmernummerValue10}}<br>\n                <b> Anreise Datum:</b> {{tableBerglerStubeHubertusStube.anreiseValue10}}<br>\n                <b> Abreise Datum:</b> {{tableBerglerStubeHubertusStube.abreiseValue10}}<br>\n                <b> Personenanzahl:</b> {{tableBerglerStubeHubertusStube.personenAnzahlValue10}}<br>\n                <b> Notiz1:</b> {{tableBerglerStubeHubertusStube.notiz1Value10}}<br>\n                <b> Notiz2:</b> {{tableBerglerStubeHubertusStube.notiz2Value10}}<br>\n                <b> Trace:</b> {{tableBerglerStubeHubertusStube.trace10}}<br>\n                <b> BemerkungValue:</b> {{tableBerglerStubeHubertusStube.bemerkungValue10}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableBerglerStubeHubertusStube.nameValue11\">\n              <div [style.border]=\"getStyle(tablesBerglerStubeHubertusStube[j].trace11)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableBerglerStubeHubertusStube.nameValue11}}<br>\n                <b> Zimmernummer:</b> {{tableBerglerStubeHubertusStube.zimmernummerValue11}}<br>\n                <b> Anreise Datum:</b> {{tableBerglerStubeHubertusStube.anreiseValue11}}<br>\n                <b> Abreise Datum:</b> {{tableBerglerStubeHubertusStube.abreiseValue11}}<br>\n                <b> Personenanzahl:</b> {{tableBerglerStubeHubertusStube.personenAnzahlValue11}}<br>\n                <b> Notiz1:</b> {{tableBerglerStubeHubertusStube.notiz1Value11}}<br>\n                <b> Notiz2:</b> {{tableBerglerStubeHubertusStube.notiz2Value11}}<br>\n                <b> Trace:</b> {{tableBerglerStubeHubertusStube.trace11}}<br>\n                <b> BemerkungValue:</b> {{tableBerglerStubeHubertusStube.bemerkungValue11}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableBerglerStubeHubertusStube.nameValue12\">\n              <div [style.border]=\"getStyle(tablesBerglerStubeHubertusStube[j].trace12)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableBerglerStubeHubertusStube.nameValue12}}<br>\n                <b> Zimmernummer:</b> {{tableBerglerStubeHubertusStube.zimmernummerValue12}}<br>\n                <b> Anreise Datum:</b> {{tableBerglerStubeHubertusStube.anreiseValue12}}<br>\n                <b> Abreise Datum:</b> {{tableBerglerStubeHubertusStube.abreiseValue12}}<br>\n                <b> Personenanzahl:</b> {{tableBerglerStubeHubertusStube.personenAnzahlValue12}}<br>\n                <b> Notiz1:</b> {{tableBerglerStubeHubertusStube.notiz1Value12}}<br>\n                <b> Notiz2:</b> {{tableBerglerStubeHubertusStube.notiz2Value12}}<br>\n                <b> Trace:</b> {{tableBerglerStubeHubertusStube.trace12}}<br>\n                <b> BemerkungValue:</b> {{tableBerglerStubeHubertusStube.bemerkungValue12}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableBerglerStubeHubertusStube.nameValue13\">\n              <div [style.border]=\"getStyle(tablesBerglerStubeHubertusStube[j].trace13)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableBerglerStubeHubertusStube.nameValue13}}<br>\n                <b> Zimmernummer:</b> {{tableBerglerStubeHubertusStube.zimmernummerValue13}}<br>\n                <b> Anreise Datum:</b> {{tableBerglerStubeHubertusStube.anreiseValue13}}<br>\n                <b> Abreise Datum:</b> {{tableBerglerStubeHubertusStube.abreiseValue13}}<br>\n                <b> Personenanzahl:</b> {{tableBerglerStubeHubertusStube.personenAnzahlValue13}}<br>\n                <b> Notiz1:</b> {{tableBerglerStubeHubertusStube.notiz1Value13}}<br>\n                <b> Notiz2:</b> {{tableBerglerStubeHubertusStube.notiz2Value13}}<br>\n                <b> Trace:</b> {{tableBerglerStubeHubertusStube.trace13}}<br>\n                <b> BemerkungValue:</b> {{tableBerglerStubeHubertusStube.bemerkungValue13}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableBerglerStubeHubertusStube.nameValue14\">\n              <div [style.border]=\"getStyle(tablesBerglerStubeHubertusStube[j].trace14)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableBerglerStubeHubertusStube.nameValue14}}<br>\n                <b> Zimmernummer:</b> {{tableBerglerStubeHubertusStube.zimmernummerValue14}}<br>\n                <b> Anreise Datum:</b> {{tableBerglerStubeHubertusStube.anreiseValue14}}<br>\n                <b> Abreise Datum:</b> {{tableBerglerStubeHubertusStube.abreiseValue14}}<br>\n                <b> Personenanzahl:</b> {{tableBerglerStubeHubertusStube.personenAnzahlValue14}}<br>\n                <b> Notiz1:</b> {{tableBerglerStubeHubertusStube.notiz1Value14}}<br>\n                <b> Notiz2:</b> {{tableBerglerStubeHubertusStube.notiz2Value14}}<br>\n                <b> Trace:</b> {{tableBerglerStubeHubertusStube.trace14}}<br>\n                <b> BemerkungValue:</b> {{tableBerglerStubeHubertusStube.bemerkungValue14}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableBerglerStubeHubertusStube.nameValue15\">\n              <div [style.border]=\"getStyle(tablesBerglerStubeHubertusStube[j].trace15)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableBerglerStubeHubertusStube.nameValue15}}<br>\n                <b> Zimmernummer:</b> {{tableBerglerStubeHubertusStube.zimmernummerValue15}}<br>\n                <b> Anreise Datum:</b> {{tableBerglerStubeHubertusStube.anreiseValue15}}<br>\n                <b> Abreise Datum:</b> {{tableBerglerStubeHubertusStube.abreiseValue15}}<br>\n                <b> Personenanzahl:</b> {{tableBerglerStubeHubertusStube.personenAnzahlValue15}}<br>\n                <b> Notiz1:</b> {{tableBerglerStubeHubertusStube.notiz1Value15}}<br>\n                <b> Notiz2:</b> {{tableBerglerStubeHubertusStube.notiz2Value15}}<br>\n                <b> Trace:</b> {{tableBerglerStubeHubertusStube.trace15}}<br>\n                <b> BemerkungValue:</b> {{tableBerglerStubeHubertusStube.bemerkungValue15}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableBerglerStubeHubertusStube.newTraceName\">\n              <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                <b> Zimmernummer: </b>{{tableBerglerStubeHubertusStube.newTraceRoomNumber}}<br> <b> Neuer Trace: </b>{{tableBerglerStubeHubertusStube.newTraceText}} <br> <b> Tischnummer: </b>{{tableBerglerStubeHubertusStube.newTraceTableNumber}} <br> <b> Mitarbeiter: </b>{{tableBerglerStubeHubertusStube.newTraceEmployee}} <br> <b> Name: </b>{{tableBerglerStubeHubertusStube.newTraceName}} <br> <b> Datum: </b>{{tableBerglerStubeHubertusStube.newTraceDate}}\n              </p>\n            </div>\n            <div *ngIf=\"tableBerglerStubeHubertusStube.newTraceName1\">\n              <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                <b> Zimmernummer: </b>{{tableBerglerStubeHubertusStube.newTraceRoomNumber1}}<br> <b> Neuer Trace: </b>{{tableBerglerStubeHubertusStube.newTraceText1}} <br> <b> Tischnummer: </b>{{tableBerglerStubeHubertusStube.newTraceTableNumber1}} <br> <b> Mitarbeiter: </b>{{tableBerglerStubeHubertusStube.newTraceEmployee1}} <br> <b> Name: </b>{{tableBerglerStubeHubertusStube.newTraceName1}} <br> <b> Datum: </b>{{tableBerglerStubeHubertusStube.newTraceDate1}}                            </p>\n            </div>\n            <div *ngIf=\"tableBerglerStubeHubertusStube.newTraceName2\">\n              <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                <b> Zimmernummer: </b>{{tableBerglerStubeHubertusStube.newTraceRoomNumber2}}<br> <b> Neuer Trace: </b>{{tableBerglerStubeHubertusStube.newTraceText2}} <br> <b> Tischnummer: </b>{{tableBerglerStubeHubertusStube.newTraceTableNumber2}} <br> <b> Mitarbeiter: </b>{{tableBerglerStubeHubertusStube.newTraceEmployee2}} <br> <b> Name: </b>{{tableBerglerStubeHubertusStube.newTraceName2}} <br> <b> Datum: </b>{{tableBerglerStubeHubertusStube.newTraceDate2}}\n              </p>\n            </div>\n          </div>\n        </div>\n        <div *ngIf=\"tableBerglerStubeHubertusStube.placeholder === 'true'\">\n          <p [dragula]='\"evented-bag\"' id=\"BerglerStubeHubertusStube\" style=\"background-color: #9d9d9d; border: dashed 3px black; margin-top: 50px; opacity: 0.4; padding: 10px 10px 10px 10px\">Listen-Element hier hin ziehen! {{tableBerglerStubeHubertusStube.number}} {{tableBerglerStubeHubertusStube.department}} {{j}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/departments/bergler-stube-hubertus-stube/bergler-stube-hubertus-stube.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BerglerStubeHubertusStubeComponent; });
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

var BerglerStubeHubertusStubeComponent = (function () {
    function BerglerStubeHubertusStubeComponent() {
        this.occupied = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    BerglerStubeHubertusStubeComponent.prototype.ngOnInit = function () {
    };
    BerglerStubeHubertusStubeComponent.prototype.occupy = function (table, j) {
        this.occupied.emit({ table: table, j: j });
    };
    BerglerStubeHubertusStubeComponent.prototype.getStyle = function (j) {
        if (j) {
            return "solid 3px red";
        }
        else {
            return "";
        }
    };
    return BerglerStubeHubertusStubeComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesBerglerStubeHubertusStube'),
    __metadata("design:type", Array)
], BerglerStubeHubertusStubeComponent.prototype, "tablesBerglerStubeHubertusStube", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showBerglerBool'),
    __metadata("design:type", Boolean)
], BerglerStubeHubertusStubeComponent.prototype, "showBerglerBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('term'),
    __metadata("design:type", String)
], BerglerStubeHubertusStubeComponent.prototype, "term", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], BerglerStubeHubertusStubeComponent.prototype, "occupied", void 0);
BerglerStubeHubertusStubeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-bergler-stube-hubertus-stube',
        template: __webpack_require__("../../../../../src/app/components/digitalerTischplan/departments/bergler-stube-hubertus-stube/bergler-stube-hubertus-stube.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digitalerTischplan/tischplan.component.css")]
    }),
    __metadata("design:paramtypes", [])
], BerglerStubeHubertusStubeComponent);

var _a;
//# sourceMappingURL=bergler-stube-hubertus-stube.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/departments/departments.component.html":
/***/ (function(module, exports) {

module.exports = "<app-bauernstube [term]=\"term\" [tablesBauernstube]=\"tablesBauernstube\" [showBauernStubnBool]=\"showBauernStubnBool\" (occupied)=\"occupied($event)\"></app-bauernstube>\n<app-bergler-stube-hubertus-stube [term]=\"term\" [tablesBerglerStubeHubertusStube]=\"tablesBerglerStubeHubertusStube\" [showBerglerBool]=\"showBerglerBool\" (occupied)=\"occupied($event)\"></app-bergler-stube-hubertus-stube>\n<app-edelweiss-kamin-stube [term]=\"term\" [tablesEdelweissKaminStube]=\"tablesEdelweissKaminStube\" [showEdelweissBool]=\"showEdelweissBool\" (occupied)=\"occupied($event)\"></app-edelweiss-kamin-stube>\n<app-teestube-teelounge  [term]=\"term\" [tablesTeestubeTeelounge]=\"tablesTeestubeTeelounge\" [showTeeStubeBool]=\"showTeeStubeBool\" (occupied)=\"occupied($event)\"></app-teestube-teelounge>\n<app-waeldler-stube-kristall-stube [term]=\"term\" [tablesWaeldlerStubeKristallStube]=\"tablesWaeldlerStubeKristallStube\" [showWaeldlerBool]=\"showWaeldlerBool\" (occupied)=\"occupied($event)\"></app-waeldler-stube-kristall-stube>\n<app-alle [showAlleBool]=\"showAlleBool\" [term]=\"term\" [tablesBauernstube]=\"tablesBauernstube\" [tablesWaeldlerStubeKristallStube]=\"tablesWaeldlerStubeKristallStube\" [tablesTeestubeTeelounge]=\"tablesTeestubeTeelounge\" [tablesEdelweissKaminStube]=\"tablesEdelweissKaminStube\" [tablesBerglerStubeHubertusStube]=\"tablesBerglerStubeHubertusStube\" (occupied)=\"occupied($event)\"></app-alle>\n"

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/departments/departments.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DepartmentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_tischplan_service__ = __webpack_require__("../../../../../src/app/services/tischplan.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DepartmentsComponent = (function () {
    function DepartmentsComponent(tischplanService) {
        this.tischplanService = tischplanService;
        this.dispensedBauernstube = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.dispensedBerglerStubeHubertusStube = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.dispensedEdelweissKaminStube = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.dispensedTeestubeTeelounge = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.dispensedWaeldlerStubeKristallStube = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.parts = [];
        this.date = [];
        this.parsedDate = [];
    }
    DepartmentsComponent.prototype.ngOnInit = function () {
    };
    DepartmentsComponent.prototype.occupied = function (table) {
        console.log("table.j");
        console.log(table.j);
        console.log("table.table");
        console.log(table.table);
        this.occupy(table.table, table.j);
    };
    DepartmentsComponent.prototype.occupy = function (table, j) {
        var _this = this;
        this.tischplanService.dispenseTable(table).subscribe(function (response) {
            console.log("Dispense Table:");
            console.log(j);
            console.log("bgColor:" + JSON.stringify(response));
            console.log("bgColor:" + JSON.stringify(response[0].tables[j].bgColor));
            console.log("isBesetzt:" + JSON.stringify(response[0].tables[j].isBesetzt));
            if (response === null) {
                return;
            }
            else {
                if (response[0].tables[j].department === "berglerStubeHubertusStube") {
                    _this.dispensedBerglerStubeHubertusStube.emit(response[0].tables);
                }
                else if (response[0].tables[j].department === "Bauernstube") {
                    _this.dispensedBauernstube.emit(response[0].tables);
                }
                else if (response[0].tables[j].department === "waeldlerStubeKristallStube") {
                    _this.dispensedWaeldlerStubeKristallStube.emit(response[0].tables);
                }
                else if (response[0].tables[j].department === "edelweissKaminStube") {
                    _this.dispensedEdelweissKaminStube.emit(response[0].tables);
                }
                else if (response[0].tables[j].department === "teestubeTeelounge") {
                    _this.dispensedTeestubeTeelounge.emit(response[0].tables);
                }
            }
        });
        this.tischplanService.addPlaceholder(table).subscribe(function (response) {
            console.log("Add placeholder!");
            console.log("Add placeholder! table ... " + JSON.stringify(table));
            console.log("placeholder:" + JSON.stringify(response[0].tables[j].placeholder));
            if (response === null) {
                return;
            }
            else {
                //console.log(this.tablesBerglerStubeHubertusStube[j].placeholder);
                if (response[0].tables[j].department === "berglerStubeHubertusStube") {
                    _this.tablesBerglerStubeHubertusStube[j].placeholder = response[0].tables[j].placeholder;
                }
                else if (response[0].tables[j].department === "Bauernstube") {
                    _this.tablesBauernstube[j].placeholder = response[0].tables[j].placeholder;
                }
                else if (response[0].tables[j].department === "waeldlerStubeKristallStube") {
                    _this.tablesWaeldlerStubeKristallStube[j].placeholder = response[0].tables[j].placeholder;
                }
                else if (response[0].tables[j].department === "edelweissKaminStube") {
                    _this.tablesEdelweissKaminStube[j].placeholder = response[0].tables[j].placeholder;
                }
                else if (response[0].tables[j].department === "teestubeTeelounge") {
                    _this.tablesTeestubeTeelounge[j].placeholder = response[0].tables[j].placeholder;
                }
            }
        });
    };
    DepartmentsComponent.prototype.addInformationToTable = function (dataString, arrayIndex) {
        var _this = this;
        this.tischplanService.addInformationToTable(dataString)
            .subscribe(function (response) {
            // let arrayIndex = response[1];
            console.log("RESPONSE addInformationToTable:" + JSON.stringify(response));
            if (response === null) {
                return;
            }
            else {
                if (response[0].department === "berglerStubeHubertusStube") {
                    _this.dispensedBerglerStubeHubertusStube.emit(response[0].tables);
                }
                else if (response[0].department === "Bauernstube") {
                    _this.dispensedBauernstube.emit(response[0].tables);
                }
                else if (response[0].department === "waeldlerStubeKristallStube") {
                    _this.dispensedWaeldlerStubeKristallStube.emit(response[0].tables);
                }
                else if (response[0].department === "edelweissKaminStube") {
                    _this.dispensedEdelweissKaminStube.emit(response[0].tables);
                }
                else if (response[0].department === "teestubeTeelounge") {
                    _this.dispensedTeestubeTeelounge.emit(response[0].tables);
                    //this.tablesTeestubeTeelounge[arrayIndex] = response.tables[0];
                }
            }
            // console.log(this.tablesBerglerStubeHubertusStube[arrayIndex]);
        });
    };
    DepartmentsComponent.prototype.occupyTableOnDrop = function (dataString, arrayIndex) {
        var _this = this;
        console.log("Occupy Table!");
        this.tischplanService.occupyTable(dataString)
            .subscribe(function (response) {
            //let arrayIndex = response[1];
            //console.log("arrayIndex:" + arrayIndex);
            //console.log("bgColor:" + JSON.stringify(response[0].tables[arrayIndex].bgColor));
            console.log("Response occupyTable:" + JSON.stringify(response));
            if (response === null) {
                return;
            }
            else {
                if (response.tables[0].department === "berglerStubeHubertusStube") {
                    _this.tablesBerglerStubeHubertusStube[arrayIndex] = response.tables[0];
                }
                else if (response.tables[0].department === "Bauernstube") {
                    _this.tablesBauernstube[arrayIndex] = response.tables[0];
                }
                else if (response.tables[0].department === "waeldlerStubeKristallStube") {
                    _this.tablesWaeldlerStubeKristallStube[arrayIndex] = response.tables[0];
                }
                else if (response.tables[0].department === "edelweissKaminStube") {
                    _this.tablesEdelweissKaminStube[arrayIndex] = response.tables[0];
                }
                else if (response.tables[0].department === "teestubeTeelounge") {
                    _this.tablesTeestubeTeelounge[arrayIndex] = response.tables[0];
                }
            }
            //console.log("bgColor:" + JSON.stringify(this.tablesBerglerStubeHubertusStube[arrayIndex]));
        });
        //console.log("placeholder:" + JSON.stringify(this.tablesBerglerStubeHubertusStube[arrayIndex]));
    };
    DepartmentsComponent.prototype.changeBgColorIfAnreise = function (tables) {
        console.log('=================================================changeBgColorIfAnreise');
        this.dateTodayGenerated = new Date();
        for (var a = 0; a < tables.length; a++) {
            for (var b = 0; b < tables[a].tables.length; b++) {
                if (tables[a].tables[b].anreiseValue) {
                    console.log('tables[a].tables[b].anreiseValue: ' + b + " " + tables[a].tables[b].anreiseValue);
                    this.parts[0] = tables[a].tables[b].anreiseValue.match(/(\d+)/g);
                }
                else {
                    this.parts[0] = "undefined";
                }
                if (tables[a].tables[b].anreiseValue2) {
                    this.parts[1] = tables[a].tables[b].anreiseValue2.match(/(\d+)/g);
                }
                else {
                    this.parts[1] = "undefined";
                }
                if (tables[a].tables[b].anreiseValue3) {
                    this.parts[2] = tables[a].tables[b].anreiseValue3.match(/(\d+)/g);
                }
                else {
                    this.parts[2] = "undefined";
                }
                if (tables[a].tables[b].anreiseValue4) {
                    this.parts[3] = tables[a].tables[b].anreiseValue4.match(/(\d+)/g);
                }
                else {
                    this.parts[3] = "undefined";
                }
                if (tables[a].tables[b].anreiseValue5) {
                    this.parts[4] = tables[a].tables[b].anreiseValue5.match(/(\d+)/g);
                }
                else {
                    this.parts[4] = "undefined";
                }
                if (tables[a].tables[b].anreiseValue6) {
                    this.parts[5] = tables[a].tables[b].anreiseValue6.match(/(\d+)/g);
                }
                else {
                    this.parts[5] = "undefined";
                }
                if (tables[a].tables[b].anreiseValue7) {
                    this.parts[6] = tables[a].tables[b].anreiseValue7.match(/(\d+)/g);
                }
                else {
                    this.parts[6] = "undefined";
                }
                if (tables[a].tables[b].anreiseValue8) {
                    this.parts[7] = tables[a].tables[b].anreiseValue8.match(/(\d+)/g);
                }
                else {
                    this.parts[7] = "undefined";
                }
                if (tables[a].tables[b].anreiseValue9) {
                    this.parts[8] = tables[a].tables[b].anreiseValue9.match(/(\d+)/g);
                }
                else {
                    this.parts[8] = "undefined";
                }
                if (tables[a].tables[b].anreiseValue10) {
                    this.parts[9] = tables[a].tables[b].anreiseValue10.match(/(\d+)/g);
                }
                else {
                    this.parts[9] = "undefined";
                }
                if (tables[a].tables[b].anreiseValue11) {
                    this.parts[10] = tables[a].tables[b].anreiseValue11.match(/(\d+)/g);
                }
                else {
                    this.parts[10] = "undefined";
                }
                if (tables[a].tables[b].anreiseValue12) {
                    this.parts[11] = tables[a].tables[b].anreiseValue12.match(/(\d+)/g);
                }
                else {
                    this.parts[11] = "undefined";
                }
                if (tables[a].tables[b].anreiseValue13) {
                    this.parts[12] = tables[a].tables[b].anreiseValue13.match(/(\d+)/g);
                }
                else {
                    this.parts[12] = "undefined";
                }
                if (tables[a].tables[b].anreiseValue14) {
                    this.parts[13] = tables[a].tables[b].anreiseValue14.match(/(\d+)/g);
                }
                else {
                    this.parts[13] = "undefined";
                }
                if (tables[a].tables[b].anreiseValue15) {
                    this.parts[14] = tables[a].tables[b].anreiseValue15.match(/(\d+)/g);
                }
                else {
                    this.parts[14] = "undefined";
                }
                for (var c = 0; c <= 14; c++) {
                    if (this.parts[c]) {
                        this.date[c] = new Date(2018, this.parts[c][1] - 1, this.parts[c][0]);
                        this.parsedDate[c] = String(this.date[c]).substring(0, 15);
                    }
                }
                // note parts[1]-1
                //console.log('parts[2]' + parts[2] + 'parts[1]' + (parts[1] - 1) + 'parts[0]' + parts[0]);
                // Mon May 31 2010 00:00:00
                //this.tablesRestaurant[j].anreiseValue
                var dateToday = String(this.dateTodayGenerated).substring(0, 15);
                console.log('Parsed Date --->: ' + this.parsedDate[0]);
                console.log('this.dateGenerated --->: ' + dateToday);
                if (dateToday.indexOf(this.parsedDate[0] || this.parsedDate[1] || this.parsedDate[2] || this.parsedDate[3] || this.parsedDate[4] || this.parsedDate[5] || this.parsedDate[6] || this.parsedDate[7] || this.parsedDate[8] || this.parsedDate[9] || this.parsedDate[10] || this.parsedDate[11] || this.parsedDate[12] || this.parsedDate[13] || this.parsedDate[14] || this.parsedDate[15]) !== -1) {
                    if (tables[a].department === "berglerStubeHubertusStube") {
                        this.tablesBerglerStubeHubertusStube[b].bgColor = "#0a7a74";
                    }
                    else if (tables[a].department === "Bauernstube") {
                        this.tablesBauernstube[b].bgColor = "#0a7a74";
                    }
                    else if (tables[a].department === "waeldlerStubeKristallStube") {
                        this.tablesWaeldlerStubeKristallStube[b].bgColor = "#0a7a74";
                    }
                    else if (tables[a].department === "edelweissKaminStube") {
                        this.tablesEdelweissKaminStube[b].bgColor = "#0a7a74";
                    }
                    else if (tables[a].department === "teestubeTeelounge") {
                        this.tablesTeestubeTeelounge[b].bgColor = "#0a7a74";
                    }
                }
            }
        }
    };
    return DepartmentsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesBauernstube'),
    __metadata("design:type", Array)
], DepartmentsComponent.prototype, "tablesBauernstube", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showBauernStubnBool'),
    __metadata("design:type", Boolean)
], DepartmentsComponent.prototype, "showBauernStubnBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesEdelweissKaminStube'),
    __metadata("design:type", Array)
], DepartmentsComponent.prototype, "tablesEdelweissKaminStube", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showEdelweissBool'),
    __metadata("design:type", Boolean)
], DepartmentsComponent.prototype, "showEdelweissBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesBerglerStubeHubertusStube'),
    __metadata("design:type", Array)
], DepartmentsComponent.prototype, "tablesBerglerStubeHubertusStube", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showBerglerBool'),
    __metadata("design:type", Boolean)
], DepartmentsComponent.prototype, "showBerglerBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesTeestubeTeelounge'),
    __metadata("design:type", Array)
], DepartmentsComponent.prototype, "tablesTeestubeTeelounge", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showTeeStubeBool'),
    __metadata("design:type", Boolean)
], DepartmentsComponent.prototype, "showTeeStubeBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesWaeldlerStubeKristallStube'),
    __metadata("design:type", Array)
], DepartmentsComponent.prototype, "tablesWaeldlerStubeKristallStube", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showWaeldlerBool'),
    __metadata("design:type", Boolean)
], DepartmentsComponent.prototype, "showWaeldlerBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('term'),
    __metadata("design:type", String)
], DepartmentsComponent.prototype, "term", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showAlleBool'),
    __metadata("design:type", Boolean)
], DepartmentsComponent.prototype, "showAlleBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], DepartmentsComponent.prototype, "dispensedBauernstube", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], DepartmentsComponent.prototype, "dispensedBerglerStubeHubertusStube", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _c || Object)
], DepartmentsComponent.prototype, "dispensedEdelweissKaminStube", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _d || Object)
], DepartmentsComponent.prototype, "dispensedTeestubeTeelounge", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _e || Object)
], DepartmentsComponent.prototype, "dispensedWaeldlerStubeKristallStube", void 0);
DepartmentsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-departments',
        template: __webpack_require__("../../../../../src/app/components/digitalerTischplan/departments/departments.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digitalerTischplan/tischplan.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__services_tischplan_service__["a" /* TischplanService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_tischplan_service__["a" /* TischplanService */]) === "function" && _f || Object])
], DepartmentsComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=departments.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/departments/edelweiss-kamin-stube/edelweiss-kamin-stube.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showEdelweissBool\">\n  <div *ngFor=\"let tableEdelweissKaminStube of tablesEdelweissKaminStube | filter:term; let j = index;\">\n    <div *ngIf=\"tablesEdelweissKaminStube[j] !== tablesEdelweissKaminStube[j+1]\">\n      <button style=\"float: right; margin: 20px 0px 20px 0px; background-color: #0a7a74; color: #FFFFFF\" type=\"button\" class=\"btn btn-send\" (click)=\"occupy(tableEdelweissKaminStube, j)\">{{tableEdelweissKaminStube.isBesetzt === 'true' ? 'FREI MACHEN' : ''}}</button>\n      <h4><b> Tisch:</b>{{tableEdelweissKaminStube.number}} </h4><br>\n      <div class='cards-container' id='containerEdelweissKaminStube' [ngStyle]=\"{'background-color': + tableEdelweissKaminStube.bgColor}\">\n        <div class=\"table\" [ngStyle]=\"{'background-color': '#' + tableEdelweissKaminStube.bgColor}\">\n          <div *ngIf=\"tableEdelweissKaminStube.isBesetzt === 'true'\">\n            <div [style.border]=\"getStyle(tablesEdelweissKaminStube[j].trace)\">\n            <p style=\"background-color: #FFFFFF; padding: 10px\">\n              <b> Name:</b> {{tableEdelweissKaminStube.nameValue}}<br>\n              <b> Zimmernummer:</b> {{tableEdelweissKaminStube.zimmernummerValue}}<br>\n              <b> Anreise Datum:</b> {{tableEdelweissKaminStube.anreiseValue}}<br>\n              <b> Abreise Datum:</b> {{tableEdelweissKaminStube.abreiseValue}}<br>\n              <b> Personenanzahl:</b> {{tableEdelweissKaminStube.personenAnzahlValue}}<br>\n              <b> Notiz1:</b> {{tableEdelweissKaminStube.notiz1Value}}<br>\n              <b> Notiz2:</b> {{tableEdelweissKaminStube.notiz2Value}}<br>\n              <b> Trace:</b> {{tableEdelweissKaminStube.trace}}<br>\n              <b> Bemerkung:</b> {{tableEdelweissKaminStube.bemerkungValue}}<br>\n            </p>\n            </div>\n            <div *ngIf=\"tableEdelweissKaminStube.nameValue2\">\n              <div [style.border]=\"getStyle(tablesEdelweissKaminStube[j].trace2)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableEdelweissKaminStube.nameValue2}}<br>\n                <b> Zimmernummer:</b> {{tableEdelweissKaminStube.zimmernummerValue2}}<br>\n                <b> Anreise Datum:</b> {{tableEdelweissKaminStube.anreiseValue2}}<br>\n                <b> Abreise Datum:</b> {{tableEdelweissKaminStube.abreiseValue2}}<br>\n                <b> Personenanzahl:</b> {{tableEdelweissKaminStube.personenAnzahlValue2}}<br>\n                <b> Notiz1:</b> {{tableEdelweissKaminStube.notiz1Value2}}<br>\n                <b> Notiz2:</b> {{tableEdelweissKaminStube.notiz2Value2}}<br>\n                <b> Trace:</b> {{tableEdelweissKaminStube.trace2}}<br>\n                <b> BemerkungValue:</b> {{tableEdelweissKaminStube.bemerkungValue2}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableEdelweissKaminStube.nameValue3\">\n              <div [style.border]=\"getStyle(tablesEdelweissKaminStube[j].trace3)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableEdelweissKaminStube.nameValue3}}<br>\n                <b> Zimmernummer:</b> {{tableEdelweissKaminStube.zimmernummerValue3}}<br>\n                <b> Anreise Datum:</b> {{tableEdelweissKaminStube.anreiseValue3}}<br>\n                <b> Abreise Datum:</b> {{tableEdelweissKaminStube.abreiseValue3}}<br>\n                <b> Personenanzahl:</b> {{tableEdelweissKaminStube.personenAnzahlValue3}}<br>\n                <b> Notiz1:</b> {{tableEdelweissKaminStube.notiz1Value3}}<br>\n                <b> Notiz2:</b> {{tableEdelweissKaminStube.notiz2Value3}}<br>\n                <b> Trace:</b> {{tableEdelweissKaminStube.trace3}}<br>\n                <b> BemerkungValue:</b> {{tableEdelweissKaminStube.bemerkungValue3}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableEdelweissKaminStube.nameValue4\">\n              <div [style.border]=\"getStyle(tablesEdelweissKaminStube[j].trace4)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableEdelweissKaminStube.nameValue4}}<br>\n                <b> Zimmernummer:</b> {{tableEdelweissKaminStube.zimmernummerValue4}}<br>\n                <b> Anreise Datum:</b> {{tableEdelweissKaminStube.anreiseValue4}}<br>\n                <b> Abreise Datum:</b> {{tableEdelweissKaminStube.abreiseValue4}}<br>\n                <b> Personenanzahl:</b> {{tableEdelweissKaminStube.personenAnzahlValue4}}<br>\n                <b> Notiz1:</b> {{tableEdelweissKaminStube.notiz1Value4}}<br>\n                <b> Notiz2:</b> {{tableEdelweissKaminStube.notiz2Value4}}<br>\n                <b> Trace:</b> {{tableEdelweissKaminStube.trace4}}<br>\n                <b> BemerkungValue:</b> {{tableEdelweissKaminStube.bemerkungValue4}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableEdelweissKaminStube.nameValue5\">\n              <div [style.border]=\"getStyle(tablesEdelweissKaminStube[j].trace5)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableEdelweissKaminStube.nameValue5}}<br>\n                <b> Zimmernummer:</b> {{tableEdelweissKaminStube.zimmernummerValue5}}<br>\n                <b> Anreise Datum:</b> {{tableEdelweissKaminStube.anreiseValue5}}<br>\n                <b> Abreise Datum:</b> {{tableEdelweissKaminStube.abreiseValue5}}<br>\n                <b> Personenanzahl:</b> {{tableEdelweissKaminStube.personenAnzahlValue5}}<br>\n                <b> Notiz1:</b> {{tableEdelweissKaminStube.notiz1Value5}}<br>\n                <b> Notiz2:</b> {{tableEdelweissKaminStube.notiz2Value5}}<br>\n                <b> Trace:</b> {{tableEdelweissKaminStube.trace5}}<br>\n                <b> BemerkungValue:</b> {{tableEdelweissKaminStube.bemerkungValue5}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableEdelweissKaminStube.nameValue6\">\n              <div [style.border]=\"getStyle(tablesEdelweissKaminStube[j].trace6)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableEdelweissKaminStube.nameValue6}}<br>\n                <b> Zimmernummer:</b> {{tableEdelweissKaminStube.zimmernummerValue6}}<br>\n                <b> Anreise Datum:</b> {{tableEdelweissKaminStube.anreiseValue6}}<br>\n                <b> Abreise Datum:</b> {{tableEdelweissKaminStube.abreiseValue6}}<br>\n                <b> Personenanzahl:</b> {{tableEdelweissKaminStube.personenAnzahlValue6}}<br>\n                <b> Notiz1:</b> {{tableEdelweissKaminStube.notiz1Value6}}<br>\n                <b> Notiz2:</b> {{tableEdelweissKaminStube.notiz2Value6}}<br>\n                <b> Trace:</b> {{tableEdelweissKaminStube.trace6}}<br>\n                <b> BemerkungValue:</b> {{tableEdelweissKaminStube.bemerkungValue6}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableEdelweissKaminStube.nameValue7\">\n              <div [style.border]=\"getStyle(tablesEdelweissKaminStube[j].trace7)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableEdelweissKaminStube.nameValue7}}<br>\n                <b> Zimmernummer:</b> {{tableEdelweissKaminStube.zimmernummerValue7}}<br>\n                <b> Anreise Datum:</b> {{tableEdelweissKaminStube.anreiseValue7}}<br>\n                <b> Abreise Datum:</b> {{tableEdelweissKaminStube.abreiseValue7}}<br>\n                <b> Personenanzahl:</b> {{tableEdelweissKaminStube.personenAnzahlValue7}}<br>\n                <b> Notiz1:</b> {{tableEdelweissKaminStube.notiz1Value7}}<br>\n                <b> Notiz2:</b> {{tableEdelweissKaminStube.notiz2Value7}}<br>\n                <b> Trace:</b> {{tableEdelweissKaminStube.trace7}}<br>\n                <b> BemerkungValue:</b> {{tableEdelweissKaminStube.bemerkungValue7}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableEdelweissKaminStube.nameValue8\">\n              <div [style.border]=\"getStyle(tablesEdelweissKaminStube[j].trace8)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableEdelweissKaminStube.nameValue8}}<br>\n                <b> Zimmernummer:</b> {{tableEdelweissKaminStube.zimmernummerValue8}}<br>\n                <b> Anreise Datum:</b> {{tableEdelweissKaminStube.anreiseValue8}}<br>\n                <b> Abreise Datum:</b> {{tableEdelweissKaminStube.abreiseValue8}}<br>\n                <b> Personenanzahl:</b> {{tableEdelweissKaminStube.personenAnzahlValue8}}<br>\n                <b> Notiz1:</b> {{tableEdelweissKaminStube.notiz1Value8}}<br>\n                <b> Notiz2:</b> {{tableEdelweissKaminStube.notiz2Value8}}<br>\n                <b> Trace:</b> {{tableEdelweissKaminStube.trace8}}<br>\n                <b> BemerkungValue:</b> {{tableEdelweissKaminStube.bemerkungValue8}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableEdelweissKaminStube.nameValue9\">\n              <div [style.border]=\"getStyle(tablesEdelweissKaminStube[j].trace9)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableEdelweissKaminStube.nameValue9}}<br>\n                <b> Zimmernummer:</b> {{tableEdelweissKaminStube.zimmernummerValue9}}<br>\n                <b> Anreise Datum:</b> {{tableEdelweissKaminStube.anreiseValue9}}<br>\n                <b> Abreise Datum:</b> {{tableEdelweissKaminStube.abreiseValue9}}<br>\n                <b> Personenanzahl:</b> {{tableEdelweissKaminStube.personenAnzahlValue9}}<br>\n                <b> Notiz1:</b> {{tableEdelweissKaminStube.notiz1Value9}}<br>\n                <b> Notiz2:</b> {{tableEdelweissKaminStube.notiz2Value9}}<br>\n                <b> Trace:</b> {{tableEdelweissKaminStube.trace9}}<br>\n                <b> BemerkungValue:</b> {{tableEdelweissKaminStube.bemerkungValue9}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableEdelweissKaminStube.nameValue10\">\n              <div [style.border]=\"getStyle(tablesEdelweissKaminStube[j].trace10)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableEdelweissKaminStube.nameValue10}}<br>\n                <b> Zimmernummer:</b> {{tableEdelweissKaminStube.zimmernummerValue10}}<br>\n                <b> Anreise Datum:</b> {{tableEdelweissKaminStube.anreiseValue10}}<br>\n                <b> Abreise Datum:</b> {{tableEdelweissKaminStube.abreiseValue10}}<br>\n                <b> Personenanzahl:</b> {{tableEdelweissKaminStube.personenAnzahlValue10}}<br>\n                <b> Notiz1:</b> {{tableEdelweissKaminStube.notiz1Value10}}<br>\n                <b> Notiz2:</b> {{tableEdelweissKaminStube.notiz2Value10}}<br>\n                <b> Trace:</b> {{tableEdelweissKaminStube.trace10}}<br>\n                <b> BemerkungValue:</b> {{tableEdelweissKaminStube.bemerkungValue10}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableEdelweissKaminStube.nameValue11\">\n              <div [style.border]=\"getStyle(tablesEdelweissKaminStube[j].trace11)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableEdelweissKaminStube.nameValue11}}<br>\n                <b> Zimmernummer:</b> {{tableEdelweissKaminStube.zimmernummerValue11}}<br>\n                <b> Anreise Datum:</b> {{tableEdelweissKaminStube.anreiseValue11}}<br>\n                <b> Abreise Datum:</b> {{tableEdelweissKaminStube.abreiseValue11}}<br>\n                <b> Personenanzahl:</b> {{tableEdelweissKaminStube.personenAnzahlValue11}}<br>\n                <b> Notiz1:</b> {{tableEdelweissKaminStube.notiz1Value11}}<br>\n                <b> Notiz2:</b> {{tableEdelweissKaminStube.notiz2Value11}}<br>\n                <b> Trace:</b> {{tableEdelweissKaminStube.trace11}}<br>\n                <b> BemerkungValue:</b> {{tableEdelweissKaminStube.bemerkungValue11}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableEdelweissKaminStube.nameValue12\">\n              <div [style.border]=\"getStyle(tablesEdelweissKaminStube[j].trace12)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableEdelweissKaminStube.nameValue12}}<br>\n                <b> Zimmernummer:</b> {{tableEdelweissKaminStube.zimmernummerValue12}}<br>\n                <b> Anreise Datum:</b> {{tableEdelweissKaminStube.anreiseValue12}}<br>\n                <b> Abreise Datum:</b> {{tableEdelweissKaminStube.abreiseValue12}}<br>\n                <b> Personenanzahl:</b> {{tableEdelweissKaminStube.personenAnzahlValue12}}<br>\n                <b> Notiz1:</b> {{tableEdelweissKaminStube.notiz1Value12}}<br>\n                <b> Notiz2:</b> {{tableEdelweissKaminStube.notiz2Value12}}<br>\n                <b> Trace:</b> {{tableEdelweissKaminStube.trace12}}<br>\n                <b> BemerkungValue:</b> {{tableEdelweissKaminStube.bemerkungValue12}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableEdelweissKaminStube.nameValue13\">\n              <div [style.border]=\"getStyle(tablesEdelweissKaminStube[j].trace13)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableEdelweissKaminStube.nameValue13}}<br>\n                <b> Zimmernummer:</b> {{tableEdelweissKaminStube.zimmernummerValue13}}<br>\n                <b> Anreise Datum:</b> {{tableEdelweissKaminStube.anreiseValue13}}<br>\n                <b> Abreise Datum:</b> {{tableEdelweissKaminStube.abreiseValue13}}<br>\n                <b> Personenanzahl:</b> {{tableEdelweissKaminStube.personenAnzahlValue13}}<br>\n                <b> Notiz1:</b> {{tableEdelweissKaminStube.notiz1Value13}}<br>\n                <b> Notiz2:</b> {{tableEdelweissKaminStube.notiz2Value13}}<br>\n                <b> Trace:</b> {{tableEdelweissKaminStube.trace13}}<br>\n                <b> BemerkungValue:</b> {{tableEdelweissKaminStube.bemerkungValue13}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableEdelweissKaminStube.nameValue14\">\n              <div [style.border]=\"getStyle(tablesEdelweissKaminStube[j].trace14)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableEdelweissKaminStube.nameValue14}}<br>\n                <b> Zimmernummer:</b> {{tableEdelweissKaminStube.zimmernummerValue14}}<br>\n                <b> Anreise Datum:</b> {{tableEdelweissKaminStube.anreiseValue14}}<br>\n                <b> Abreise Datum:</b> {{tableEdelweissKaminStube.abreiseValue14}}<br>\n                <b> Personenanzahl:</b> {{tableEdelweissKaminStube.personenAnzahlValue14}}<br>\n                <b> Notiz1:</b> {{tableEdelweissKaminStube.notiz1Value14}}<br>\n                <b> Notiz2:</b> {{tableEdelweissKaminStube.notiz2Value14}}<br>\n                <b> Trace:</b> {{tableEdelweissKaminStube.trace14}}<br>\n                <b> BemerkungValue:</b> {{tableEdelweissKaminStube.bemerkungValue14}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableEdelweissKaminStube.nameValue15\">\n              <div [style.border]=\"getStyle(tablesEdelweissKaminStube[j].trace15)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableEdelweissKaminStube.nameValue15}}<br>\n                <b> Zimmernummer:</b> {{tableEdelweissKaminStube.zimmernummerValue15}}<br>\n                <b> Anreise Datum:</b> {{tableEdelweissKaminStube.anreiseValue15}}<br>\n                <b> Abreise Datum:</b> {{tableEdelweissKaminStube.abreiseValue15}}<br>\n                <b> Personenanzahl:</b> {{tableEdelweissKaminStube.personenAnzahlValue15}}<br>\n                <b> Notiz1:</b> {{tableEdelweissKaminStube.notiz1Value15}}<br>\n                <b> Notiz2:</b> {{tableEdelweissKaminStube.notiz2Value15}}<br>\n                <b> Trace:</b> {{tableEdelweissKaminStube.trace15}}<br>\n                <b> BemerkungValue:</b> {{tableEdelweissKaminStube.bemerkungValue15}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableEdelweissKaminStube.newTraceName\">\n              <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                <b> Zimmernummer: </b>{{tableEdelweissKaminStube.newTraceRoomNumber}}<br> <b> Neuer Trace: </b>{{tableEdelweissKaminStube.newTraceText}} <br> <b> Tischnummer: </b>{{tableEdelweissKaminStube.newTraceTableNumber}} <br> <b> Mitarbeiter: </b>{{tableEdelweissKaminStube.newTraceEmployee}} <br> <b> Name: </b>{{tableEdelweissKaminStube.newTraceName}} <br> <b> Datum: </b>{{tableEdelweissKaminStube.newTraceDate}}\n              </p>\n            </div>\n            <div *ngIf=\"tableEdelweissKaminStube.newTraceName1\">\n              <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                <b> Zimmernummer: </b>{{tableEdelweissKaminStube.newTraceRoomNumber1}}<br> <b> Neuer Trace: </b>{{tableEdelweissKaminStube.newTraceText1}} <br> <b> Tischnummer: </b>{{tableEdelweissKaminStube.newTraceTableNumber1}} <br> <b> Mitarbeiter: </b>{{tableEdelweissKaminStube.newTraceEmployee1}} <br> <b> Name: </b>{{tableEdelweissKaminStube.newTraceName1}} <br> <b> Datum: </b>{{tableEdelweissKaminStube.newTraceDate1}}                            </p>\n            </div>\n            <div *ngIf=\"tableEdelweissKaminStube.newTraceName2\">\n              <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                <b> Zimmernummer: </b>{{tableEdelweissKaminStube.newTraceRoomNumber2}}<br> <b> Neuer Trace: </b>{{tableEdelweissKaminStube.newTraceText2}} <br> <b> Tischnummer: </b>{{tableEdelweissKaminStube.newTraceTableNumber2}} <br> <b> Mitarbeiter: </b>{{tableEdelweissKaminStube.newTraceEmployee2}} <br> <b> Name: </b>{{tableEdelweissKaminStube.newTraceName2}} <br> <b> Datum: </b>{{tableEdelweissKaminStube.newTraceDate2}}\n              </p>\n            </div>\n\n          </div>\n        </div>\n        <div *ngIf=\"tableEdelweissKaminStube.placeholder === 'true'\">\n          <p [dragula]='\"evented-bag\"' id=\"EdelweissKaminStube\" style=\"background-color: #9d9d9d; border: dashed 3px black; margin-top: 50px; opacity: 0.4; padding: 10px 10px 10px 10px\">Listen-Element hier hin ziehen! {{tableEdelweissKaminStube.number}} {{tableEdelweissKaminStube.department}} {{j}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/departments/edelweiss-kamin-stube/edelweiss-kamin-stube.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EdelweissKaminStubeComponent; });
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

var EdelweissKaminStubeComponent = (function () {
    function EdelweissKaminStubeComponent() {
        this.occupied = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    EdelweissKaminStubeComponent.prototype.ngOnInit = function () {
    };
    EdelweissKaminStubeComponent.prototype.occupy = function (table, j) {
        this.occupied.emit({ table: table, j: j });
    };
    EdelweissKaminStubeComponent.prototype.getStyle = function (j) {
        if (j) {
            return "solid 3px red";
        }
        else {
            return "";
        }
    };
    return EdelweissKaminStubeComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesEdelweissKaminStube'),
    __metadata("design:type", Array)
], EdelweissKaminStubeComponent.prototype, "tablesEdelweissKaminStube", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showEdelweissBool'),
    __metadata("design:type", Boolean)
], EdelweissKaminStubeComponent.prototype, "showEdelweissBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('term'),
    __metadata("design:type", String)
], EdelweissKaminStubeComponent.prototype, "term", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], EdelweissKaminStubeComponent.prototype, "occupied", void 0);
EdelweissKaminStubeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-edelweiss-kamin-stube',
        template: __webpack_require__("../../../../../src/app/components/digitalerTischplan/departments/edelweiss-kamin-stube/edelweiss-kamin-stube.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digitalerTischplan/tischplan.component.css")]
    }),
    __metadata("design:paramtypes", [])
], EdelweissKaminStubeComponent);

var _a;
//# sourceMappingURL=edelweiss-kamin-stube.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/departments/teestube-teelounge/teestube-teelounge.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showTeeStubeBool\">\n  <div *ngFor=\"let tableTeestubeTeelounge of tablesTeestubeTeelounge | filter:term; let j = index;\">\n    <div *ngIf=\"tablesTeestubeTeelounge[j] !== tablesTeestubeTeelounge[j+1]\">\n      <button style=\"float: right; margin: 20px 0px 20px 0px; background-color: #0a7a74; color: #FFFFFF\" type=\"button\" class=\"btn btn-send\" (click)=\"occupy(tableTeestubeTeelounge, j)\">{{tableTeestubeTeelounge.isBesetzt === 'true' ? 'FREI MACHEN' : ''}}</button>\n      <h4><b> Tisch:</b>{{tableTeestubeTeelounge.number}} </h4><br>\n      <div class='cards-container' id='containerTeestubeTeelounge' [ngStyle]=\"{'background-color': + tableTeestubeTeelounge.bgColor}\">\n        <div class=\"table\" [ngStyle]=\"{'background-color': '#' + tableTeestubeTeelounge.bgColor}\">\n          <div *ngIf=\"tableTeestubeTeelounge.isBesetzt === 'true'\">\n            <div [style.border]=\"getStyle(tablesTeestubeTeelounge[j].trace)\">\n            <p style=\"background-color: #FFFFFF; padding: 10px\">\n            <b> Name:</b> {{tableTeestubeTeelounge.nameValue}}<br>\n              <b> Zimmernummer:</b> {{tableTeestubeTeelounge.zimmernummerValue}}<br>\n              <b> Anreise Datum:</b> {{tableTeestubeTeelounge.anreiseValue}}<br>\n              <b> Abreise Datum:</b> {{tableTeestubeTeelounge.abreiseValue}}<br>\n              <b> Personenanzahl:</b> {{tableTeestubeTeelounge.personenAnzahlValue}}<br>\n              <b> Notiz1:</b> {{tableTeestubeTeelounge.notiz1Value}}<br>\n              <b> Notiz2:</b> {{tableTeestubeTeelounge.notiz2Value}}<br>\n              <b> Trace:</b> {{tableTeestubeTeelounge.trace}}<br>\n              <b> Bemerkung:</b> {{tableTeestubeTeelounge.bemerkungValue}}<br>\n            </p>\n            </div>\n            <div *ngIf=\"tableTeestubeTeelounge.nameValue2\">\n              <div [style.border]=\"getStyle(tablesTeestubeTeelounge[j].trace2)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableTeestubeTeelounge.nameValue2}}<br>\n                <b> Zimmernummer:</b> {{tableTeestubeTeelounge.zimmernummerValue2}}<br>\n                <b> Anreise Datum:</b> {{tableTeestubeTeelounge.anreiseValue2}}<br>\n                <b> Abreise Datum:</b> {{tableTeestubeTeelounge.abreiseValue2}}<br>\n                <b> Personenanzahl:</b> {{tableTeestubeTeelounge.personenAnzahlValue2}}<br>\n                <b> Notiz1:</b> {{tableTeestubeTeelounge.notiz1Value2}}<br>\n                <b> Notiz2:</b> {{tableTeestubeTeelounge.notiz2Value2}}<br>\n                <b> Trace:</b> {{tableTeestubeTeelounge.trace2}}<br>\n                <b> BemerkungValue:</b> {{tableTeestubeTeelounge.bemerkungValue2}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableTeestubeTeelounge.nameValue3\">\n              <div [style.border]=\"getStyle(tablesTeestubeTeelounge[j].trace3)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableTeestubeTeelounge.nameValue3}}<br>\n                <b> Zimmernummer:</b> {{tableTeestubeTeelounge.zimmernummerValue3}}<br>\n                <b> Anreise Datum:</b> {{tableTeestubeTeelounge.anreiseValue3}}<br>\n                <b> Abreise Datum:</b> {{tableTeestubeTeelounge.abreiseValue3}}<br>\n                <b> Personenanzahl:</b> {{tableTeestubeTeelounge.personenAnzahlValue3}}<br>\n                <b> Notiz1:</b> {{tableTeestubeTeelounge.notiz1Value3}}<br>\n                <b> Notiz2:</b> {{tableTeestubeTeelounge.notiz2Value3}}<br>\n                <b> Trace:</b> {{tableTeestubeTeelounge.trace3}}<br>\n                <b> BemerkungValue:</b> {{tableTeestubeTeelounge.bemerkungValue3}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableTeestubeTeelounge.nameValue4\">\n              <div [style.border]=\"getStyle(tablesTeestubeTeelounge[j].trace4)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableTeestubeTeelounge.nameValue4}}<br>\n                <b> Zimmernummer:</b> {{tableTeestubeTeelounge.zimmernummerValue4}}<br>\n                <b> Anreise Datum:</b> {{tableTeestubeTeelounge.anreiseValue4}}<br>\n                <b> Abreise Datum:</b> {{tableTeestubeTeelounge.abreiseValue4}}<br>\n                <b> Personenanzahl:</b> {{tableTeestubeTeelounge.personenAnzahlValue4}}<br>\n                <b> Notiz1:</b> {{tableTeestubeTeelounge.notiz1Value4}}<br>\n                <b> Notiz2:</b> {{tableTeestubeTeelounge.notiz2Value4}}<br>\n                <b> Trace:</b> {{tableTeestubeTeelounge.trace4}}<br>\n                <b> BemerkungValue:</b> {{tableTeestubeTeelounge.bemerkungValue4}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableTeestubeTeelounge.nameValue5\">\n              <div [style.border]=\"getStyle(tablesTeestubeTeelounge[j].trace5)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableTeestubeTeelounge.nameValue5}}<br>\n                <b> Zimmernummer:</b> {{tableTeestubeTeelounge.zimmernummerValue5}}<br>\n                <b> Anreise Datum:</b> {{tableTeestubeTeelounge.anreiseValue5}}<br>\n                <b> Abreise Datum:</b> {{tableTeestubeTeelounge.abreiseValue5}}<br>\n                <b> Personenanzahl:</b> {{tableTeestubeTeelounge.personenAnzahlValue5}}<br>\n                <b> Notiz1:</b> {{tableTeestubeTeelounge.notiz1Value5}}<br>\n                <b> Notiz2:</b> {{tableTeestubeTeelounge.notiz2Value5}}<br>\n                <b> Trace:</b> {{tableTeestubeTeelounge.trace5}}<br>\n                <b> BemerkungValue:</b> {{tableTeestubeTeelounge.bemerkungValue5}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableTeestubeTeelounge.nameValue6\">\n              <div [style.border]=\"getStyle(tablesTeestubeTeelounge[j].trace6)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableTeestubeTeelounge.nameValue6}}<br>\n                <b> Zimmernummer:</b> {{tableTeestubeTeelounge.zimmernummerValue6}}<br>\n                <b> Anreise Datum:</b> {{tableTeestubeTeelounge.anreiseValue6}}<br>\n                <b> Abreise Datum:</b> {{tableTeestubeTeelounge.abreiseValue6}}<br>\n                <b> Personenanzahl:</b> {{tableTeestubeTeelounge.personenAnzahlValue6}}<br>\n                <b> Notiz1:</b> {{tableTeestubeTeelounge.notiz1Value6}}<br>\n                <b> Notiz2:</b> {{tableTeestubeTeelounge.notiz2Value6}}<br>\n                <b> Trace:</b> {{tableTeestubeTeelounge.trace6}}<br>\n                <b> BemerkungValue:</b> {{tableTeestubeTeelounge.bemerkungValue6}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableTeestubeTeelounge.nameValue7\">\n              <div [style.border]=\"getStyle(tablesTeestubeTeelounge[j].trace7)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableTeestubeTeelounge.nameValue7}}<br>\n                <b> Zimmernummer:</b> {{tableTeestubeTeelounge.zimmernummerValue7}}<br>\n                <b> Anreise Datum:</b> {{tableTeestubeTeelounge.anreiseValue7}}<br>\n                <b> Abreise Datum:</b> {{tableTeestubeTeelounge.abreiseValue7}}<br>\n                <b> Personenanzahl:</b> {{tableTeestubeTeelounge.personenAnzahlValue7}}<br>\n                <b> Notiz1:</b> {{tableTeestubeTeelounge.notiz1Value7}}<br>\n                <b> Notiz2:</b> {{tableTeestubeTeelounge.notiz2Value7}}<br>\n                <b> Trace:</b> {{tableTeestubeTeelounge.trace7}}<br>\n                <b> BemerkungValue:</b> {{tableTeestubeTeelounge.bemerkungValue7}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableTeestubeTeelounge.nameValue8\">\n              <div [style.border]=\"getStyle(tablesTeestubeTeelounge[j].trace8)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableTeestubeTeelounge.nameValue8}}<br>\n                <b> Zimmernummer:</b> {{tableTeestubeTeelounge.zimmernummerValue8}}<br>\n                <b> Anreise Datum:</b> {{tableTeestubeTeelounge.anreiseValue8}}<br>\n                <b> Abreise Datum:</b> {{tableTeestubeTeelounge.abreiseValue8}}<br>\n                <b> Personenanzahl:</b> {{tableTeestubeTeelounge.personenAnzahlValue8}}<br>\n                <b> Notiz1:</b> {{tableTeestubeTeelounge.notiz1Value8}}<br>\n                <b> Notiz2:</b> {{tableTeestubeTeelounge.notiz2Value8}}<br>\n                <b> Trace:</b> {{tableTeestubeTeelounge.trace8}}<br>\n                <b> BemerkungValue:</b> {{tableTeestubeTeelounge.bemerkungValue8}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableTeestubeTeelounge.nameValue9\">\n              <div [style.border]=\"getStyle(tablesTeestubeTeelounge[j].trace9)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableTeestubeTeelounge.nameValue9}}<br>\n                <b> Zimmernummer:</b> {{tableTeestubeTeelounge.zimmernummerValue9}}<br>\n                <b> Anreise Datum:</b> {{tableTeestubeTeelounge.anreiseValue9}}<br>\n                <b> Abreise Datum:</b> {{tableTeestubeTeelounge.abreiseValue9}}<br>\n                <b> Personenanzahl:</b> {{tableTeestubeTeelounge.personenAnzahlValue9}}<br>\n                <b> Notiz1:</b> {{tableTeestubeTeelounge.notiz1Value9}}<br>\n                <b> Notiz2:</b> {{tableTeestubeTeelounge.notiz2Value9}}<br>\n                <b> Trace:</b> {{tableTeestubeTeelounge.trace9}}<br>\n                <b> BemerkungValue:</b> {{tableTeestubeTeelounge.bemerkungValue9}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableTeestubeTeelounge.nameValue10\">\n              <div [style.border]=\"getStyle(tablesTeestubeTeelounge[j].trace10)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableTeestubeTeelounge.nameValue10}}<br>\n                <b> Zimmernummer:</b> {{tableTeestubeTeelounge.zimmernummerValue10}}<br>\n                <b> Anreise Datum:</b> {{tableTeestubeTeelounge.anreiseValue10}}<br>\n                <b> Abreise Datum:</b> {{tableTeestubeTeelounge.abreiseValue10}}<br>\n                <b> Personenanzahl:</b> {{tableTeestubeTeelounge.personenAnzahlValue10}}<br>\n                <b> Notiz1:</b> {{tableTeestubeTeelounge.notiz1Value10}}<br>\n                <b> Notiz2:</b> {{tableTeestubeTeelounge.notiz2Value10}}<br>\n                <b> Trace:</b> {{tableTeestubeTeelounge.trace10}}<br>\n                <b> BemerkungValue:</b> {{tableTeestubeTeelounge.bemerkungValue10}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableTeestubeTeelounge.nameValue11\">\n              <div [style.border]=\"getStyle(tablesTeestubeTeelounge[j].trace11)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableTeestubeTeelounge.nameValue11}}<br>\n                <b> Zimmernummer:</b> {{tableTeestubeTeelounge.zimmernummerValue11}}<br>\n                <b> Anreise Datum:</b> {{tableTeestubeTeelounge.anreiseValue11}}<br>\n                <b> Abreise Datum:</b> {{tableTeestubeTeelounge.abreiseValue11}}<br>\n                <b> Personenanzahl:</b> {{tableTeestubeTeelounge.personenAnzahlValue11}}<br>\n                <b> Notiz1:</b> {{tableTeestubeTeelounge.notiz1Value11}}<br>\n                <b> Notiz2:</b> {{tableTeestubeTeelounge.notiz2Value11}}<br>\n                <b> Trace:</b> {{tableTeestubeTeelounge.trace11}}<br>\n                <b> BemerkungValue:</b> {{tableTeestubeTeelounge.bemerkungValue11}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableTeestubeTeelounge.nameValue12\">\n              <div [style.border]=\"getStyle(tablesTeestubeTeelounge[j].trace12)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableTeestubeTeelounge.nameValue12}}<br>\n                <b> Zimmernummer:</b> {{tableTeestubeTeelounge.zimmernummerValue12}}<br>\n                <b> Anreise Datum:</b> {{tableTeestubeTeelounge.anreiseValue12}}<br>\n                <b> Abreise Datum:</b> {{tableTeestubeTeelounge.abreiseValue12}}<br>\n                <b> Personenanzahl:</b> {{tableTeestubeTeelounge.personenAnzahlValue12}}<br>\n                <b> Notiz1:</b> {{tableTeestubeTeelounge.notiz1Value12}}<br>\n                <b> Notiz2:</b> {{tableTeestubeTeelounge.notiz2Value12}}<br>\n                <b> Trace:</b> {{tableTeestubeTeelounge.trace12}}<br>\n                <b> BemerkungValue:</b> {{tableTeestubeTeelounge.bemerkungValue12}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableTeestubeTeelounge.nameValue13\">\n              <div [style.border]=\"getStyle(tablesTeestubeTeelounge[j].trace13)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableTeestubeTeelounge.nameValue13}}<br>\n                <b> Zimmernummer:</b> {{tableTeestubeTeelounge.zimmernummerValue13}}<br>\n                <b> Anreise Datum:</b> {{tableTeestubeTeelounge.anreiseValue13}}<br>\n                <b> Abreise Datum:</b> {{tableTeestubeTeelounge.abreiseValue13}}<br>\n                <b> Personenanzahl:</b> {{tableTeestubeTeelounge.personenAnzahlValue13}}<br>\n                <b> Notiz1:</b> {{tableTeestubeTeelounge.notiz1Value13}}<br>\n                <b> Notiz2:</b> {{tableTeestubeTeelounge.notiz2Value13}}<br>\n                <b> Trace:</b> {{tableTeestubeTeelounge.trace13}}<br>\n                <b> BemerkungValue:</b> {{tableTeestubeTeelounge.bemerkungValue13}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableTeestubeTeelounge.nameValue14\">\n              <div [style.border]=\"getStyle(tablesTeestubeTeelounge[j].trace14)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableTeestubeTeelounge.nameValue14}}<br>\n                <b> Zimmernummer:</b> {{tableTeestubeTeelounge.zimmernummerValue14}}<br>\n                <b> Anreise Datum:</b> {{tableTeestubeTeelounge.anreiseValue14}}<br>\n                <b> Abreise Datum:</b> {{tableTeestubeTeelounge.abreiseValue14}}<br>\n                <b> Personenanzahl:</b> {{tableTeestubeTeelounge.personenAnzahlValue14}}<br>\n                <b> Notiz1:</b> {{tableTeestubeTeelounge.notiz1Value14}}<br>\n                <b> Notiz2:</b> {{tableTeestubeTeelounge.notiz2Value14}}<br>\n                <b> Trace:</b> {{tableTeestubeTeelounge.trace14}}<br>\n                <b> BemerkungValue:</b> {{tableTeestubeTeelounge.bemerkungValue14}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableTeestubeTeelounge.nameValue15\">\n              <div [style.border]=\"getStyle(tablesTeestubeTeelounge[j].trace15)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableTeestubeTeelounge.nameValue15}}<br>\n                <b> Zimmernummer:</b> {{tableTeestubeTeelounge.zimmernummerValue15}}<br>\n                <b> Anreise Datum:</b> {{tableTeestubeTeelounge.anreiseValue15}}<br>\n                <b> Abreise Datum:</b> {{tableTeestubeTeelounge.abreiseValue15}}<br>\n                <b> Personenanzahl:</b> {{tableTeestubeTeelounge.personenAnzahlValue15}}<br>\n                <b> Notiz1:</b> {{tableTeestubeTeelounge.notiz1Value15}}<br>\n                <b> Notiz2:</b> {{tableTeestubeTeelounge.notiz2Value15}}<br>\n                <b> Trace:</b> {{tableTeestubeTeelounge.trace15}}<br>\n                <b> BemerkungValue:</b> {{tableTeestubeTeelounge.bemerkungValue15}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableTeestubeTeelounge.newTraceName\">\n              <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                <b> Zimmernummer: </b>{{tableTeestubeTeelounge.newTraceRoomNumber}}<br> <b> Neuer Trace: </b>{{tableTeestubeTeelounge.newTraceText}} <br> <b> Tischnummer: </b>{{tableTeestubeTeelounge.newTraceTableNumber}} <br> <b> Mitarbeiter: </b>{{tableTeestubeTeelounge.newTraceEmployee}} <br> <b> Name: </b>{{tableTeestubeTeelounge.newTraceName}} <br> <b> Datum: </b>{{tableTeestubeTeelounge.newTraceDate}}\n              </p>\n            </div>\n            <div *ngIf=\"tableTeestubeTeelounge.newTraceName1\">\n              <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                <b> Zimmernummer: </b>{{tableTeestubeTeelounge.newTraceRoomNumber1}}<br> <b> Neuer Trace: </b>{{tableTeestubeTeelounge.newTraceText1}} <br> <b> Tischnummer: </b>{{tableTeestubeTeelounge.newTraceTableNumber1}} <br> <b> Mitarbeiter: </b>{{tableTeestubeTeelounge.newTraceEmployee1}} <br> <b> Name: </b>{{tableTeestubeTeelounge.newTraceName1}} <br> <b> Datum: </b>{{tableTeestubeTeelounge.newTraceDate1}}                            </p>\n            </div>\n            <div *ngIf=\"tableTeestubeTeelounge.newTraceName2\">\n              <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                <b> Zimmernummer: </b>{{tableTeestubeTeelounge.newTraceRoomNumber2}}<br> <b> Neuer Trace: </b>{{tableTeestubeTeelounge.newTraceText2}} <br> <b> Tischnummer: </b>{{tableTeestubeTeelounge.newTraceTableNumber2}} <br> <b> Mitarbeiter: </b>{{tableTeestubeTeelounge.newTraceEmployee2}} <br> <b> Name: </b>{{tableTeestubeTeelounge.newTraceName2}} <br> <b> Datum: </b>{{tableTeestubeTeelounge.newTraceDate2}}\n              </p>\n            </div>\n\n          </div>\n        </div>\n        <div *ngIf=\"tableTeestubeTeelounge.placeholder === 'true'\">\n          <p [dragula]='\"evented-bag\"' id=\"TeestubeTeelounge\" style=\"background-color: #9d9d9d; border: dashed 3px black; margin-top: 50px; opacity: 0.4; padding: 10px 10px 10px 10px\">Listen-Element hier hin ziehen! {{tableTeestubeTeelounge.number}} {{tableTeestubeTeelounge.department}} {{j}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/departments/teestube-teelounge/teestube-teelounge.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeestubeTeeloungeComponent; });
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

var TeestubeTeeloungeComponent = (function () {
    function TeestubeTeeloungeComponent() {
        this.occupied = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    TeestubeTeeloungeComponent.prototype.ngOnInit = function () {
    };
    TeestubeTeeloungeComponent.prototype.occupy = function (table, j) {
        this.occupied.emit({ table: table, j: j });
    };
    TeestubeTeeloungeComponent.prototype.getStyle = function (j) {
        if (j) {
            return "solid 3px red";
        }
        else {
            return "";
        }
    };
    return TeestubeTeeloungeComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesTeestubeTeelounge'),
    __metadata("design:type", Array)
], TeestubeTeeloungeComponent.prototype, "tablesTeestubeTeelounge", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showTeeStubeBool'),
    __metadata("design:type", Boolean)
], TeestubeTeeloungeComponent.prototype, "showTeeStubeBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('term'),
    __metadata("design:type", String)
], TeestubeTeeloungeComponent.prototype, "term", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], TeestubeTeeloungeComponent.prototype, "occupied", void 0);
TeestubeTeeloungeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-teestube-teelounge',
        template: __webpack_require__("../../../../../src/app/components/digitalerTischplan/departments/teestube-teelounge/teestube-teelounge.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digitalerTischplan/tischplan.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TeestubeTeeloungeComponent);

var _a;
//# sourceMappingURL=teestube-teelounge.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/departments/waeldler-stube-kristall-stube/waeldler-stube-kristall-stube.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showWaeldlerBool\">\n  <div *ngFor=\"let tableWaeldlerStubeKristallStube of tablesWaeldlerStubeKristallStube | filter:term; let j = index;\">\n    <div *ngIf=\"tablesWaeldlerStubeKristallStube[j] !== tablesWaeldlerStubeKristallStube[j+1]\">\n      <button style=\"float: right; margin: 20px 0px 20px 0px; background-color: #0a7a74; color: #FFFFFF\" type=\"button\" class=\"btn btn-send\" (click)=\"occupy(tableWaeldlerStubeKristallStube, j)\">{{tableWaeldlerStubeKristallStube.isBesetzt === 'true' ? 'FREI MACHEN' : ''}}</button>\n      <h4><b> Tisch:</b>{{tableWaeldlerStubeKristallStube.number}} </h4><br>\n      <div class='cards-container' id='containerWaeldlerStubeKristallStube' [ngStyle]=\"{'background-color': + tableWaeldlerStubeKristallStube.bgColor}\">\n        <div class=\"table\" [ngStyle]=\"{'background-color': '#' + tableWaeldlerStubeKristallStube.bgColor}\">\n          <div *ngIf=\"tableWaeldlerStubeKristallStube.isBesetzt === 'true'\">\n            <div [style.border]=\"getStyle(tablesWaeldlerStubeKristallStube[j].trace1)\">\n            <p style=\"background-color: #FFFFFF; padding: 10px\">\n              <b> Name:</b> {{tableWaeldlerStubeKristallStube.nameValue}}<br>\n              <b> Zimmernummer:</b> {{tableWaeldlerStubeKristallStube.zimmernummerValue}}<br>\n              <b> Anreise Datum:</b> {{tableWaeldlerStubeKristallStube.anreiseValue}}<br>\n              <b> Abreise Datum:</b> {{tableWaeldlerStubeKristallStube.abreiseValue}}<br>\n              <b> Personenanzahl:</b> {{tableWaeldlerStubeKristallStube.personenAnzahlValue}}<br>\n              <b> Notiz1:</b> {{tableWaeldlerStubeKristallStube.notiz1Value}}<br>\n              <b> Notiz2:</b> {{tableWaeldlerStubeKristallStube.notiz2Value}}<br>\n              <b> Trace:</b> {{tableWaeldlerStubeKristallStube.trace}}<br>\n              <b> Bemerkung:</b> {{tableWaeldlerStubeKristallStube.bemerkungValue}}<br>\n            </p>\n            </div>\n            <div *ngIf=\"tableWaeldlerStubeKristallStube.nameValue2\">\n              <div [style.border]=\"getStyle(tablesWaeldlerStubeKristallStube[j].trace2)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableWaeldlerStubeKristallStube.nameValue2}}<br>\n                <b> Zimmernummer:</b> {{tableWaeldlerStubeKristallStube.zimmernummerValue2}}<br>\n                <b> Anreise Datum:</b> {{tableWaeldlerStubeKristallStube.anreiseValue2}}<br>\n                <b> Abreise Datum:</b> {{tableWaeldlerStubeKristallStube.abreiseValue2}}<br>\n                <b> Personenanzahl:</b> {{tableWaeldlerStubeKristallStube.personenAnzahlValue2}}<br>\n                <b> Notiz1:</b> {{tableWaeldlerStubeKristallStube.notiz1Value2}}<br>\n                <b> Notiz2:</b> {{tableWaeldlerStubeKristallStube.notiz2Value2}}<br>\n                <b> Trace:</b> {{tableWaeldlerStubeKristallStube.trace2}}<br>\n                <b> BemerkungValue:</b> {{tableWaeldlerStubeKristallStube.bemerkungValue2}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableWaeldlerStubeKristallStube.nameValue3\">\n              <div [style.border]=\"getStyle(tablesWaeldlerStubeKristallStube[j].trace3)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableWaeldlerStubeKristallStube.nameValue3}}<br>\n                <b> Zimmernummer:</b> {{tableWaeldlerStubeKristallStube.zimmernummerValue3}}<br>\n                <b> Anreise Datum:</b> {{tableWaeldlerStubeKristallStube.anreiseValue3}}<br>\n                <b> Abreise Datum:</b> {{tableWaeldlerStubeKristallStube.abreiseValue3}}<br>\n                <b> Personenanzahl:</b> {{tableWaeldlerStubeKristallStube.personenAnzahlValue3}}<br>\n                <b> Notiz1:</b> {{tableWaeldlerStubeKristallStube.notiz1Value3}}<br>\n                <b> Notiz2:</b> {{tableWaeldlerStubeKristallStube.notiz2Value3}}<br>\n                <b> Trace:</b> {{tableWaeldlerStubeKristallStube.trace3}}<br>\n                <b> BemerkungValue:</b> {{tableWaeldlerStubeKristallStube.bemerkungValue3}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableWaeldlerStubeKristallStube.nameValue4\">\n              <div [style.border]=\"getStyle(tablesWaeldlerStubeKristallStube[j].trace4)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableWaeldlerStubeKristallStube.nameValue4}}<br>\n                <b> Zimmernummer:</b> {{tableWaeldlerStubeKristallStube.zimmernummerValue4}}<br>\n                <b> Anreise Datum:</b> {{tableWaeldlerStubeKristallStube.anreiseValue4}}<br>\n                <b> Abreise Datum:</b> {{tableWaeldlerStubeKristallStube.abreiseValue4}}<br>\n                <b> Personenanzahl:</b> {{tableWaeldlerStubeKristallStube.personenAnzahlValue4}}<br>\n                <b> Notiz1:</b> {{tableWaeldlerStubeKristallStube.notiz1Value4}}<br>\n                <b> Notiz2:</b> {{tableWaeldlerStubeKristallStube.notiz1Value4}}<br>\n                <b> Trace:</b> {{tableWaeldlerStubeKristallStube.trace4}}<br>\n                <b> BemerkungValue:</b> {{tableWaeldlerStubeKristallStube.bemerkungValue4}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableWaeldlerStubeKristallStube.nameValue5\">\n              <div [style.border]=\"getStyle(tablesWaeldlerStubeKristallStube[j].trace5)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableWaeldlerStubeKristallStube.nameValue5}}<br>\n                <b> Zimmernummer:</b> {{tableWaeldlerStubeKristallStube.zimmernummerValue5}}<br>\n                <b> Anreise Datum:</b> {{tableWaeldlerStubeKristallStube.anreiseValue5}}<br>\n                <b> Abreise Datum:</b> {{tableWaeldlerStubeKristallStube.abreiseValue5}}<br>\n                <b> Personenanzahl:</b> {{tableWaeldlerStubeKristallStube.personenAnzahlValue5}}<br>\n                <b> Notiz1:</b> {{tableWaeldlerStubeKristallStube.notiz1Value5}}<br>\n                <b> Notiz2:</b> {{tableWaeldlerStubeKristallStube.notiz2Value5}}<br>\n                <b> Trace:</b> {{tableWaeldlerStubeKristallStube.trace5}}<br>\n                <b> BemerkungValue:</b> {{tableWaeldlerStubeKristallStube.bemerkungValue5}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableWaeldlerStubeKristallStube.nameValue6\">\n              <div [style.border]=\"getStyle(tablesWaeldlerStubeKristallStube[j].trace6)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableWaeldlerStubeKristallStube.nameValue6}}<br>\n                <b> Zimmernummer:</b> {{tableWaeldlerStubeKristallStube.zimmernummerValue6}}<br>\n                <b> Anreise Datum:</b> {{tableWaeldlerStubeKristallStube.anreiseValue6}}<br>\n                <b> Abreise Datum:</b> {{tableWaeldlerStubeKristallStube.abreiseValue6}}<br>\n                <b> Personenanzahl:</b> {{tableWaeldlerStubeKristallStube.personenAnzahlValue6}}<br>\n                <b> Notiz1:</b> {{tableWaeldlerStubeKristallStube.notiz1Value6}}<br>\n                <b> Notiz2:</b> {{tableWaeldlerStubeKristallStube.notiz2Value6}}<br>\n                <b> Trace:</b> {{tableWaeldlerStubeKristallStube.trace6}}<br>\n                <b> BemerkungValue:</b> {{tableWaeldlerStubeKristallStube.bemerkungValue6}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableWaeldlerStubeKristallStube.nameValue7\">\n              <div [style.border]=\"getStyle(tablesWaeldlerStubeKristallStube[j].trace7)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableWaeldlerStubeKristallStube.nameValue7}}<br>\n                <b> Zimmernummer:</b> {{tableWaeldlerStubeKristallStube.zimmernummerValue7}}<br>\n                <b> Anreise Datum:</b> {{tableWaeldlerStubeKristallStube.anreiseValue7}}<br>\n                <b> Abreise Datum:</b> {{tableWaeldlerStubeKristallStube.abreiseValue7}}<br>\n                <b> Personenanzahl:</b> {{tableWaeldlerStubeKristallStube.personenAnzahlValue7}}<br>\n                <b> Notiz1:</b> {{tableWaeldlerStubeKristallStube.notiz1Value7}}<br>\n                <b> Notiz2:</b> {{tableWaeldlerStubeKristallStube.notiz2Value7}}<br>\n                <b> Trace:</b> {{tableWaeldlerStubeKristallStube.trace7}}<br>\n                <b> BemerkungValue:</b> {{tableWaeldlerStubeKristallStube.bemerkungValue7}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableWaeldlerStubeKristallStube.nameValue8\">\n              <div [style.border]=\"getStyle(tablesWaeldlerStubeKristallStube[j].trace8)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableWaeldlerStubeKristallStube.nameValue8}}<br>\n                <b> Zimmernummer:</b> {{tableWaeldlerStubeKristallStube.zimmernummerValue8}}<br>\n                <b> Anreise Datum:</b> {{tableWaeldlerStubeKristallStube.anreiseValue8}}<br>\n                <b> Abreise Datum:</b> {{tableWaeldlerStubeKristallStube.abreiseValue8}}<br>\n                <b> Personenanzahl:</b> {{tableWaeldlerStubeKristallStube.personenAnzahlValue8}}<br>\n                <b> Notiz1:</b> {{tableWaeldlerStubeKristallStube.notiz1Value8}}<br>\n                <b> Notiz2:</b> {{tableWaeldlerStubeKristallStube.notiz2Value8}}<br>\n                <b> Trace:</b> {{tableWaeldlerStubeKristallStube.trace8}}<br>\n                <b> BemerkungValue:</b> {{tableWaeldlerStubeKristallStube.bemerkungValue8}}<br>\n              </p>\n              </div>\n            </div>\n\n            <div *ngIf=\"tableWaeldlerStubeKristallStube.nameValue9\">\n              <div [style.border]=\"getStyle(tablesWaeldlerStubeKristallStube[j].trace9)\">\n\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableWaeldlerStubeKristallStube.nameValue9}}<br>\n                <b> Zimmernummer:</b> {{tableWaeldlerStubeKristallStube.zimmernummerValue9}}<br>\n                <b> Anreise Datum:</b> {{tableWaeldlerStubeKristallStube.anreiseValue9}}<br>\n                <b> Abreise Datum:</b> {{tableWaeldlerStubeKristallStube.abreiseValue9}}<br>\n                <b> Personenanzahl:</b> {{tableWaeldlerStubeKristallStube.personenAnzahlValue9}}<br>\n                <b> Notiz1:</b> {{tableWaeldlerStubeKristallStube.notiz1Value9}}<br>\n                <b> Notiz2:</b> {{tableWaeldlerStubeKristallStube.notiz1Value9}}<br>\n                <b> Trace:</b> {{tableWaeldlerStubeKristallStube.trace9}}<br>\n                <b> BemerkungValue:</b> {{tableWaeldlerStubeKristallStube.bemerkungValue9}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableWaeldlerStubeKristallStube.nameValue10\">\n              <div [style.border]=\"getStyle(tablesWaeldlerStubeKristallStube[j].trace10)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableWaeldlerStubeKristallStube.nameValue10}}<br>\n                <b> Zimmernummer:</b> {{tableWaeldlerStubeKristallStube.zimmernummerValue10}}<br>\n                <b> Anreise Datum:</b> {{tableWaeldlerStubeKristallStube.anreiseValue10}}<br>\n                <b> Abreise Datum:</b> {{tableWaeldlerStubeKristallStube.abreiseValue10}}<br>\n                <b> Personenanzahl:</b> {{tableWaeldlerStubeKristallStube.personenAnzahlValue10}}<br>\n                <b> Notiz1:</b> {{tableWaeldlerStubeKristallStube.notiz1Value10}}<br>\n                <b> Notiz2:</b> {{tableWaeldlerStubeKristallStube.notiz2Value10}}<br>\n                <b> Trace:</b> {{tableWaeldlerStubeKristallStube.trace10}}<br>\n                <b> BemerkungValue:</b> {{tableWaeldlerStubeKristallStube.bemerkungValue10}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableWaeldlerStubeKristallStube.nameValue11\">\n              <div [style.border]=\"getStyle(tablesWaeldlerStubeKristallStube[j].trace11)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableWaeldlerStubeKristallStube.nameValue11}}<br>\n                <b> Zimmernummer:</b> {{tableWaeldlerStubeKristallStube.zimmernummerValue11}}<br>\n                <b> Anreise Datum:</b> {{tableWaeldlerStubeKristallStube.anreiseValue11}}<br>\n                <b> Abreise Datum:</b> {{tableWaeldlerStubeKristallStube.abreiseValue11}}<br>\n                <b> Personenanzahl:</b> {{tableWaeldlerStubeKristallStube.personenAnzahlValue11}}<br>\n                <b> Notiz1:</b> {{tableWaeldlerStubeKristallStube.notiz1Value11}}<br>\n                <b> Notiz2:</b> {{tableWaeldlerStubeKristallStube.notiz2Value11}}<br>\n                <b> Trace:</b> {{tableWaeldlerStubeKristallStube.trace11}}<br>\n                <b> BemerkungValue:</b> {{tableWaeldlerStubeKristallStube.bemerkungValue11}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableWaeldlerStubeKristallStube.nameValue12\">\n              <div [style.border]=\"getStyle(tablesWaeldlerStubeKristallStube[j].trace12)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableWaeldlerStubeKristallStube.nameValue12}}<br>\n                <b> Zimmernummer:</b> {{tableWaeldlerStubeKristallStube.zimmernummerValue12}}<br>\n                <b> Anreise Datum:</b> {{tableWaeldlerStubeKristallStube.anreiseValue12}}<br>\n                <b> Abreise Datum:</b> {{tableWaeldlerStubeKristallStube.abreiseValue12}}<br>\n                <b> Personenanzahl:</b> {{tableWaeldlerStubeKristallStube.personenAnzahlValue12}}<br>\n                <b> Notiz1:</b> {{tableWaeldlerStubeKristallStube.notiz1Value12}}<br>\n                <b> Notiz2:</b> {{tableWaeldlerStubeKristallStube.notiz2Value12}}<br>\n                <b> Trace:</b> {{tableWaeldlerStubeKristallStube.trace12}}<br>\n                <b> BemerkungValue:</b> {{tableWaeldlerStubeKristallStube.bemerkungValue12}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableWaeldlerStubeKristallStube.nameValue13\">\n              <div [style.border]=\"getStyle(tablesWaeldlerStubeKristallStube[j].trace13)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableWaeldlerStubeKristallStube.nameValue13}}<br>\n                <b> Zimmernummer:</b> {{tableWaeldlerStubeKristallStube.zimmernummerValue13}}<br>\n                <b> Anreise Datum:</b> {{tableWaeldlerStubeKristallStube.anreiseValue13}}<br>\n                <b> Abreise Datum:</b> {{tableWaeldlerStubeKristallStube.abreiseValue13}}<br>\n                <b> Personenanzahl:</b> {{tableWaeldlerStubeKristallStube.personenAnzahlValue13}}<br>\n                <b> Notiz1:</b> {{tableWaeldlerStubeKristallStube.notiz1Value13}}<br>\n                <b> Notiz2:</b> {{tableWaeldlerStubeKristallStube.notiz2Value13}}<br>\n                <b> Trace:</b> {{tableWaeldlerStubeKristallStube.trace13}}<br>\n                <b> BemerkungValue:</b> {{tableWaeldlerStubeKristallStube.bemerkungValue13}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableWaeldlerStubeKristallStube.nameValue14\">\n              <div [style.border]=\"getStyle(tablesWaeldlerStubeKristallStube[j].trace14)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableWaeldlerStubeKristallStube.nameValue14}}<br>\n                <b> Zimmernummer:</b> {{tableWaeldlerStubeKristallStube.zimmernummerValue14}}<br>\n                <b> Anreise Datum:</b> {{tableWaeldlerStubeKristallStube.anreiseValue14}}<br>\n                <b> Abreise Datum:</b> {{tableWaeldlerStubeKristallStube.abreiseValue14}}<br>\n                <b> Personenanzahl:</b> {{tableWaeldlerStubeKristallStube.personenAnzahlValue14}}<br>\n                <b> Notiz1:</b> {{tableWaeldlerStubeKristallStube.notiz1Value14}}<br>\n                <b> Notiz2:</b> {{tableWaeldlerStubeKristallStube.notiz2Value14}}<br>\n                <b> Trace:</b> {{tableWaeldlerStubeKristallStube.trace14}}<br>\n                <b> BemerkungValue:</b> {{tableWaeldlerStubeKristallStube.bemerkungValue14}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableWaeldlerStubeKristallStube.nameValue15\">\n              <div [style.border]=\"getStyle(tablesWaeldlerStubeKristallStube[j].trace15)\">\n              <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Name:</b> {{tableWaeldlerStubeKristallStube.nameValue15}}<br>\n                <b> Zimmernummer:</b> {{tableWaeldlerStubeKristallStube.zimmernummerValue15}}<br>\n                <b> Anreise Datum:</b> {{tableWaeldlerStubeKristallStube.anreiseValue15}}<br>\n                <b> Abreise Datum:</b> {{tableWaeldlerStubeKristallStube.abreiseValue15}}<br>\n                <b> Personenanzahl:</b> {{tableWaeldlerStubeKristallStube.personenAnzahlValue15}}<br>\n                <b> Notiz1:</b> {{tableWaeldlerStubeKristallStube.notiz1Value15}}<br>\n                <b> Notiz2:</b> {{tableWaeldlerStubeKristallStube.notiz2Value15}}<br>\n                <b> Trace:</b> {{tableWaeldlerStubeKristallStube.trace15}}<br>\n                <b> BemerkungValue:</b> {{tableWaeldlerStubeKristallStube.bemerkungValue15}}<br>\n              </p>\n              </div>\n            </div>\n            <div *ngIf=\"tableWaeldlerStubeKristallStube.newTraceName\">\n              <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                <b> Zimmernummer: </b>{{tableWaeldlerStubeKristallStube.newTraceRoomNumber}}<br> <b> Neuer Trace: </b>{{tableWaeldlerStubeKristallStube.newTraceText}} <br> <b> Tischnummer: </b>{{tableWaeldlerStubeKristallStube.newTraceTableNumber}} <br> <b> Mitarbeiter: </b>{{tableWaeldlerStubeKristallStube.newTraceEmployee}} <br> <b> Name: </b>{{tableWaeldlerStubeKristallStube.newTraceName}} <br> <b> Datum: </b>{{tableWaeldlerStubeKristallStube.newTraceDate}}\n              </p>\n            </div>\n            <div *ngIf=\"tableWaeldlerStubeKristallStube.newTraceName1\">\n              <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                <b> Zimmernummer: </b>{{tableWaeldlerStubeKristallStube.newTraceRoomNumber1}}<br> <b> Neuer Trace: </b>{{tableWaeldlerStubeKristallStube.newTraceText1}} <br> <b> Tischnummer: </b>{{tableWaeldlerStubeKristallStube.newTraceTableNumber1}} <br> <b> Mitarbeiter: </b>{{tableWaeldlerStubeKristallStube.newTraceEmployee1}} <br> <b> Name: </b>{{tableWaeldlerStubeKristallStube.newTraceName1}} <br> <b> Datum: </b>{{tableWaeldlerStubeKristallStube.newTraceDate1}}                            </p>\n            </div>\n            <div *ngIf=\"tableWaeldlerStubeKristallStube.newTraceName2\">\n              <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                <b> Zimmernummer: </b>{{tableWaeldlerStubeKristallStube.newTraceRoomNumber2}}<br> <b> Neuer Trace: </b>{{tableWaeldlerStubeKristallStube.newTraceText2}} <br> <b> Tischnummer: </b>{{tableWaeldlerStubeKristallStube.newTraceTableNumber2}} <br> <b> Mitarbeiter: </b>{{tableWaeldlerStubeKristallStube.newTraceEmployee2}} <br> <b> Name: </b>{{tableWaeldlerStubeKristallStube.newTraceName2}} <br> <b> Datum: </b>{{tableWaeldlerStubeKristallStube.newTraceDate2}}\n              </p>\n            </div>\n\n          </div>\n        </div>\n        <div *ngIf=\"tableWaeldlerStubeKristallStube.placeholder === 'true'\">\n          <p [dragula]='\"evented-bag\"' id=\"WaeldlerStubeKristallStube\" style=\"background-color: #9d9d9d; border: dashed 3px black; margin-top: 50px; opacity: 0.4; padding: 10px 10px 10px 10px\">Listen-Element hier hin ziehen! {{tableWaeldlerStubeKristallStube.number}} {{tableWaeldlerStubeKristallStube.department}} {{j}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/departments/waeldler-stube-kristall-stube/waeldler-stube-kristall-stube.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WaeldlerStubeKristallStubeComponent; });
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

var WaeldlerStubeKristallStubeComponent = (function () {
    function WaeldlerStubeKristallStubeComponent() {
        this.occupied = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    WaeldlerStubeKristallStubeComponent.prototype.ngOnInit = function () {
    };
    WaeldlerStubeKristallStubeComponent.prototype.occupy = function (table, j) {
        this.occupied.emit({ table: table, j: j });
    };
    WaeldlerStubeKristallStubeComponent.prototype.getStyle = function (j) {
        if (j) {
            return "solid 3px red";
        }
        else {
            return "";
        }
    };
    return WaeldlerStubeKristallStubeComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesWaeldlerStubeKristallStube'),
    __metadata("design:type", Array)
], WaeldlerStubeKristallStubeComponent.prototype, "tablesWaeldlerStubeKristallStube", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showWaeldlerBool'),
    __metadata("design:type", Boolean)
], WaeldlerStubeKristallStubeComponent.prototype, "showWaeldlerBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('term'),
    __metadata("design:type", String)
], WaeldlerStubeKristallStubeComponent.prototype, "term", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], WaeldlerStubeKristallStubeComponent.prototype, "occupied", void 0);
WaeldlerStubeKristallStubeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-waeldler-stube-kristall-stube',
        template: __webpack_require__("../../../../../src/app/components/digitalerTischplan/departments/waeldler-stube-kristall-stube/waeldler-stube-kristall-stube.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digitalerTischplan/tischplan.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WaeldlerStubeKristallStubeComponent);

var _a;
//# sourceMappingURL=waeldler-stube-kristall-stube.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/form/form.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showNotizFormBool\">\n  <div *ngIf=\"showAlleBool === false\">\n    <br><h3 style=\"color: #0a7a74; margin-top: 10px\">Übergabe Notiz</h3><br>\n    <div class=\"notiz\">\n      <div *ngIf=\"showBauernStubnBool\">\n        <div *ngFor=\"let notizElement of notizElements\" >\n          <div *ngIf=\"notizElement.departmentNotizInput === 'Bauernstube'\">\n            <div style=\"border: solid 3px greenyellow; padding: 10px; margin: 10px;\">\n              <p> {{notizElement.notizInput === '' ? \"Keine Notiz\" : notizElement.notizInput}}</p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"showEdelweissBool\">\n        <div *ngFor=\"let notizElement of notizElements\">\n          <div *ngIf=\"notizElement.departmentNotizInput === 'EdelweissKaminStube'\">\n            <div style=\"border: solid 3px greenyellow; padding: 10px; margin: 10px;\">\n              <p> {{notizElement.notizInput === '' ? \"Keine Notiz\" : notizElement.notizInput}}</p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"showBerglerBool\">\n        <div *ngFor=\"let notizElement of notizElements\">\n          <div *ngIf=\"notizElement.departmentNotizInput === 'BerglerStubeHubertusStube'\">\n            <div style=\"border: solid 3px greenyellow; padding: 10px; margin: 10px;\">\n              <p> {{notizElement.notizInput === '' ? \"Keine Notiz\" : notizElement.notizInput}}</p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"showTeeStubeBool\">\n        <div *ngFor=\"let notizElement of notizElements\">\n          <div *ngIf=\"notizElement.departmentNotizInput === 'TeestubeTeelounge'\">\n            <div style=\"border: solid 3px greenyellow; padding: 10px; margin: 10px;\">\n              <p> {{notizElement.notizInput === '' ? \"Keine Notiz\" : notizElement.notizInput}}</p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"showWaeldlerBool\">\n        <div *ngFor=\"let notizElement of notizElements\">\n          <div *ngIf=\"notizElement.departmentNotizInput === 'WaeldlerStubeKristallStube'\">\n            <div style=\"border: solid 3px greenyellow; padding: 10px; margin: 10px;\">\n              <p> {{notizElement.notizInput === '' ? \"Keine Notiz\" : notizElement.notizInput}}</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <form class=\"SendNotiz\"  #myForm=\"ngForm\" (submit)=\"sendNotiz($event); myForm.reset() \">\n    <div class=\"form-row\">\n      <div class=\"form-group\" style=\"min-height: 250px\">\n        <div class=\"col-lg-12\">\n          <label for=\"department\" style=\"padding-bottom: 20px\">Abteilung</label>\n          <select class=\"form-control\"  id=\"department\" style=\"margin-bottom: 10px;\" required [(ngModel)]=\"departmentNotizInput\" placeholder=\"Abteilung auswählen\" name=\"departmentNotizInput\">\n            <option *ngFor=\"let department of departments\"\n                    [value]=\"department\">\n              {{department}}\n            </option>\n          </select>\n        </div>\n        <div class=\"col-lg-12\">\n                <textarea id=\"notizText\" rows=\"5\" type=\"text\" style=\"margin-bottom: 10px; margin-top: 20px\" [(ngModel)]=\"notizInput\" placeholder=\"Notiz hinzufügen\" name=\"title\" class=\"form-control\" required>\n                </textarea>\n        </div>\n      </div>\n      <button type=\"button|submit|reset\" style=\"float: right; margin: 10px 20px 0px 0px;\" class=\"btn btn-primary\">Hinzufügen</button>\n    </div>\n  </form>\n</div>\n<div *ngIf=\"showInfoFormBool\">\n  <form class=\"SendInformation\" #myForm=\"ngForm\" (submit)=\"sendInformation($event); myForm.reset() \">\n    <div class=\"form-row\">\n      <div class=\"form-group\">\n        <div class=\"col-lg-6 col-xs-6\">\n          <input  class=\"form-control\" style=\"margin-top: 20px\" id=\"name\" [(ngModel)]=\"nameTraceInput\" name=\"Name\" placeholder=\"Name\">\n          <input  class=\"form-control\" style=\"margin-top: 20px\" id=\"roomNumber\" [(ngModel)]=\"roomNumber\" name=\"roomNumber\" placeholder=\"Zimmer Nummer\">\n        </div>\n        <div class=\"col-lg-6 col-xs-6\">\n          <input  class=\"form-control\" style=\"margin-top: 20px\" id=\"tableNumber\" [(ngModel)]=\"tableNumber\" name=\"tableNumber\" placeholder=\"Tisch Nummer\">\n          <input  class=\"form-control\" style=\"margin-top: 20px\" id=\"employee\" [(ngModel)]=\"employee\" name=\"employee\" placeholder=\"Mitarbeiter\">\n        </div>\n        <div class=\"col-lg-12 col-xs-12\">\n                <textarea id=\"informationText\" rows=\"5\" type=\"text\" style=\"margin-bottom: 10px; margin-top: 20px\" [(ngModel)]=\"title\" placeholder=\"Trace hinzufügen\" name=\"title\" class=\"form-control\" required>\n                </textarea>\n        </div>\n      </div>\n      <button type=\"button|submit|reset\" style=\"float: right; margin: 10px 20px 0px 0px;\" class=\"btn btn-primary\">Hinzufügen</button>\n    </div>\n  </form>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/form/form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_tischplan_service__ = __webpack_require__("../../../../../src/app/services/tischplan.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FormComponent = (function () {
    function FormComponent(tischplanService, _flashMessagesService) {
        this.tischplanService = tischplanService;
        this._flashMessagesService = _flashMessagesService;
        this.newInformationElements = [];
        this.notizResponse = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.departments = [];
        this.departments = ["Bauernstube", "BerglerStubeHubertusStube", "EdelweissKaminStube", "WaeldlerStubeKristallStube", "TeestubeTeelounge"];
    }
    FormComponent.prototype.ngOnInit = function () {
    };
    FormComponent.prototype.sendInformation = function (event) {
        var _this = this;
        event.preventDefault();
        this.dateGenerated = new Date();
        var newInformation = {
            text: this.title,
            roomNumber: this.roomNumber,
            tableNumber: this.tableNumber,
            date: this.dateGenerated,
            name: this.nameTraceInput,
            employee: this.employee
        };
        if (newInformation.text === undefined) {
            this._flashMessagesService.show('Die Nachricht ist leer ... ', { cssClass: 'alert-danger', timeout: 20000 });
            return;
        }
        else {
            this._flashMessagesService.show('Erfolgreich Information gespeichert ... ', { cssClass: 'alert-success', timeout: 20000 });
            console.log(newInformation.tableNumber);
            if (newInformation.tableNumber) {
                this.tischplanService.sendInformation(newInformation)
                    .subscribe(function (Information) {
                    //console.log('Information: ' + JSON.stringify(Information.tables[0].tableNumber));
                    console.log('Information: ' + JSON.stringify(Information));
                    console.log(Information.tables[0]);
                    console.log("------");
                    //console.log(Information[0].tables);
                    if (Information === null) {
                        return;
                    }
                    else {
                        if (Information.tables[0].department === "Bauernstube") {
                            for (var i = 0; i < _this.tablesBauernstube.length; i++) {
                                if (_this.tablesBauernstube[i].number === Information.tables[0].number) {
                                    _this.tablesBauernstube[i] = Information.tables[0];
                                }
                            }
                        }
                        else if (Information.tables[0].department === "waeldlerStubeKristallStube") {
                            for (var i = 0; i < _this.tablesWaeldlerStubeKristallStube.length; i++) {
                                if (_this.tablesWaeldlerStubeKristallStube[i].number === Information.tables[0].number) {
                                    _this.tablesWaeldlerStubeKristallStube[i] = Information.tables[0];
                                }
                            }
                        }
                        else if (Information.tables[0].department === "berglerStubeHubertusStube") {
                            for (var i = 0; i < _this.tablesBerglerStubeHubertusStube.length; i++) {
                                if (_this.tablesBerglerStubeHubertusStube[i].number === Information.tables[0].number) {
                                    _this.tablesBerglerStubeHubertusStube[i] = Information.tables[0];
                                }
                            }
                        }
                        else if (Information.tables[0].department === "edelweissKaminStube") {
                            for (var i = 0; i < _this.tablesEdelweissKaminStube.length; i++) {
                                if (_this.tablesEdelweissKaminStube[i].number === Information.tables[0].number) {
                                    _this.tablesEdelweissKaminStube[i] = Information.tables[0];
                                }
                            }
                        }
                        else if (Information.tables[0].department === "teestubeTeelounge") {
                            for (var i = 0; i < _this.tablesTeestubeTeelounge.length; i++) {
                                if (_this.tablesTeestubeTeelounge[i].number === Information.tables[0].number) {
                                    _this.tablesTeestubeTeelounge[i] = Information.tables[0];
                                }
                            }
                        }
                    }
                });
            }
            this.tischplanService.sendInformationToBox(newInformation)
                .subscribe(function (Information) {
                //console.log('Information: ' + JSON.stringify(Information.tables[0].tableNumber));
                console.log('Information: ' + JSON.stringify(Information));
                //console.log(Information.tables[0]);
                //console.log("------");
                //console.log(Information[0].tables);
                _this.newInformationElements.push(Information);
                console.log('this.newInformationElements' + _this.newInformationElements);
            });
        }
    };
    FormComponent.prototype.sendNotiz = function (event) {
        var _this = this;
        event.preventDefault();
        var newNotiz = {
            notizInput: this.notizInput,
            departmentNotizInput: this.departmentNotizInput,
        };
        if (newNotiz.notizInput === undefined) {
            this._flashMessagesService.show('Die Nachricht ist leer ... ', { cssClass: 'alert-danger', timeout: 20000 });
            return;
        }
        else {
            this._flashMessagesService.show('Erfolgreich Information gespeichert ... ', { cssClass: 'alert-success', timeout: 20000 });
        }
        this.tischplanService.sendInformationToNotizBlock(newNotiz)
            .subscribe(function (Notiz) {
            //console.log('Information: ' + JSON.stringify(Information.tables[0].tableNumber));
            console.log('Information: ' + JSON.stringify(Notiz));
            //console.log(Information.tables[0]);
            //console.log("------");
            //console.log(Information[0].tables);
            _this.notizResponse.emit(Notiz);
            _this.notizElements = Notiz;
            console.log('this.newInformationElements' + _this.newInformationElements);
        });
    };
    return FormComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('newInformationElements'),
    __metadata("design:type", Array)
], FormComponent.prototype, "newInformationElements", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('dateGenerated'),
    __metadata("design:type", Object)
], FormComponent.prototype, "dateGenerated", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('title'),
    __metadata("design:type", String)
], FormComponent.prototype, "title", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('roomNumber'),
    __metadata("design:type", String)
], FormComponent.prototype, "roomNumber", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tableNumber'),
    __metadata("design:type", String)
], FormComponent.prototype, "tableNumber", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('nameTraceInput'),
    __metadata("design:type", String)
], FormComponent.prototype, "nameTraceInput", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('employee'),
    __metadata("design:type", String)
], FormComponent.prototype, "employee", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesBauernstube'),
    __metadata("design:type", Array)
], FormComponent.prototype, "tablesBauernstube", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesBerglerStubeHubertusStube'),
    __metadata("design:type", Array)
], FormComponent.prototype, "tablesBerglerStubeHubertusStube", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesEdelweissKaminStube'),
    __metadata("design:type", Array)
], FormComponent.prototype, "tablesEdelweissKaminStube", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesTeestubeTeelounge'),
    __metadata("design:type", Array)
], FormComponent.prototype, "tablesTeestubeTeelounge", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesWaeldlerStubeKristallStube'),
    __metadata("design:type", Array)
], FormComponent.prototype, "tablesWaeldlerStubeKristallStube", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showInfoFormBool'),
    __metadata("design:type", Boolean)
], FormComponent.prototype, "showInfoFormBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showNotizFormBool'),
    __metadata("design:type", Boolean)
], FormComponent.prototype, "showNotizFormBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('notizElements'),
    __metadata("design:type", Object)
], FormComponent.prototype, "notizElements", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showBauernStubnBool'),
    __metadata("design:type", Boolean)
], FormComponent.prototype, "showBauernStubnBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showBerglerBool'),
    __metadata("design:type", Boolean)
], FormComponent.prototype, "showBerglerBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showEdelweissBool'),
    __metadata("design:type", Boolean)
], FormComponent.prototype, "showEdelweissBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showWaeldlerBool'),
    __metadata("design:type", Boolean)
], FormComponent.prototype, "showWaeldlerBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showTeeStubeBool'),
    __metadata("design:type", Boolean)
], FormComponent.prototype, "showTeeStubeBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showAlleBool'),
    __metadata("design:type", Boolean)
], FormComponent.prototype, "showAlleBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], FormComponent.prototype, "notizResponse", void 0);
FormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-form',
        template: __webpack_require__("../../../../../src/app/components/digitalerTischplan/form/form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digitalerTischplan/tischplan.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_tischplan_service__["a" /* TischplanService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_tischplan_service__["a" /* TischplanService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], FormComponent);

var _a, _b, _c;
//# sourceMappingURL=form.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/im-haus-liste/im-haus-liste.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row1\">\n  <div class='wrapper'>\n    <div *ngFor=\"let imHausListeElement of imHausListeElemente\">\n      <div class='cards-container' id='container1' [dragula]='\"evented-bag\"'>\n        <div class=\"card\" id=\"card1\" [ngStyle]=\"{'background-color': '#' + imHausListeElement.bgColor}\">\n          <p> <b>Name:</b> {{imHausListeElement.name}}<br>\n            <b>Zimmernummer:</b> {{imHausListeElement.zimmernummer}}<br>\n            <b>Anreise:</b> {{imHausListeElement.anreise}}<br>\n            <b>Abreise:</b> {{imHausListeElement.abreise}}<br>\n            <b>Personen Anzahl:</b> {{imHausListeElement.personenAnzahl}}<br>\n            <b>Notiz1:</b> {{imHausListeElement.notiz1}}<br>\n            <b>Notiz2:</b> {{imHausListeElement.notiz2}}<br>\n            <b>Bemerkung:</b> {{imHausListeElement.bemerkung}}<br>\n          </p>\n          <div *ngIf=\"imHausListeElement.bgColor === '0a7a74'\">\n            <i class=\"fa fa-check\" style=\"float: right; color: white\"></i>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/im-haus-liste/im-haus-liste.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImHausListeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_tischplan_service__ = __webpack_require__("../../../../../src/app/services/tischplan.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ImHausListeComponent = (function () {
    function ImHausListeComponent(tischplanService) {
        this.tischplanService = tischplanService;
    }
    ImHausListeComponent.prototype.ngOnInit = function () {
    };
    ImHausListeComponent.prototype.updateImHausListeElement = function (informationElements2) {
        this.tischplanService.updateImHausListeElement(informationElements2)
            .subscribe(function (response) {
            //this.imHausListeElemente = response;
            console.log('updateImHausListeElement response: ');
            console.log(response);
        });
    };
    return ImHausListeComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('imHausListeElemente'),
    __metadata("design:type", Array)
], ImHausListeComponent.prototype, "imHausListeElemente", void 0);
ImHausListeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-im-haus-liste',
        template: __webpack_require__("../../../../../src/app/components/digitalerTischplan/im-haus-liste/im-haus-liste.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digitalerTischplan/tischplan.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_tischplan_service__["a" /* TischplanService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_tischplan_service__["a" /* TischplanService */]) === "function" && _a || Object])
], ImHausListeComponent);

var _a;
//# sourceMappingURL=im-haus-liste.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/navigation/navigation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar-fixed-top {\n  max-width: 100vw;\n  background-color: #0d2f2e;\n  border-radius: 0px;\n  max-height: 80px;\n  display: -webkit-box;\n}\n\n.container {\n  max-height: 80px;\n  display: -webkit-box;\n  padding: 0;\n  margin: 0\n}\n\n.navbar-nav {\n  max-width: 100%;\n  margin-left: 10px;\n  max-height:  80px;\n  display: -webkit-box;\n  min-width: 25%;\n}\n\n.brand {\n  display: inline-block;\n  vertical-align: middle;\n  max-width: 30%;\n}\n\n.Tisch {\n  color: #0a7a74;\n}\n\n.TischDiv{\n  background-color: #0a7a74;\n  border-radius: 50%;\n  min-height: 30px;\n  min-width: 30px;\n  text-align: center;\n  margin-top: 12px;\n}\n\n.TischH3 {\n  color: #eaf3f3;\n  margin: 10px 10px 5px 10px;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  align: center;\n}\n\n.dropdown-toggle {\n  background-color: #0a7a74;\n  color: #FFFFFF;\n\n}\n\n.dropdown-menu {\n  overflow: auto;\n  height: 350px;\n  width: 200px;\n  padding: 20px;\n}\n\n.csv {\n  width: 100%;\n  height: 100px;\n}\n\n.file {\n  float: left;\n  margin-top: 10px;\n  color: #0a7a74;\n}\n\n.btn-send {\n  background-color: #0a7a74;\n  float: right;\n  color: white;\n  margin-right: 10px;\n  display: none;\n}\n\nh6 {\n  color: #0a7a74;\n}\n\n.navbar-right{\n  display: inline;\n  max-width: 50%;\n}\n\n.btn-default {\n  background-color: #0a7a74;\n  color: #FFFFFF;\n  float: left;\n  vertical-align: middle;\n  margin: 10px 10px 5px 10px;\n  border: none;\n  display: none;\n}\n\n.btn-default:hover {\n  background-color: #1f5452;\n  color: #FFFFFF;\n}\n\n.btn-primary {\n  background-color: #0a7a74;\n  color: #FFFFFF;\n  margin-left: 20px;\n  border: none;\n}\n\n.btn-primary:hover {\n  background-color: #1f5452;\n  color: #FFFFFF;\n  margin-left: 20px;\n  border: none;\n}\n\n.btn-group {\n  height: 45px;\n  width: auto;\n  margin: 10px 10px 5px 10px;\n  float: left;\n  text-align: right;\n  display:none;\n  vertical-align:middle;\n}\n\n.menuitem {\n  padding: 5px;\n}\n\n.navbar-left {\n  margin-top: 0px;\n  max-width: 100%;\n  display: -webkit-inline-box;\n  float: right;\n}\n\n.form-group {\n  max-height: 45px;\n  margin: 0;\n  width: 50%;\n}\n\n.form-control {\n  background-color: #0a7a74;\n  color: #FFFFFF;\n  border: none;\n  opacity: 80;\n  width: 90%;\n  margin: 0px 0px 0px 0px;\n}\n\n.search-btn-default {\n  background-color: #0a7a74;\n  color: #FFFFFF;\n  border: none;\n}\n\n.Partner {\n  height: 40px;\n  width: auto;\n  margin-top: 4px;\n  margin-bottom: 5px;\n  margin-right: 25px;\n  float: right;\n  text-align: right;\n  display:none;\n  vertical-align:middle;\n}\n\n.csv {\n  margin-bottom: 30px;\n}\n\n.btn-primary.active, .btn-primary:active, .open>.dropdown-toggle.btn-primary {\n  background-color: #1f5452;\n  color: #FFFFFF;\n}\n\n.btn-primary.focus, .btn-primary:focus {\n  background-color: #0a7a74;\n  color: #FFFFFF;\n}\n\n@media (min-width: 700px) {\n  .Partner {\n    display: inline-block;\n    max-width: 100%;\n    float: right;\n  }\n\n  .form-group {\n    display: block;\n    margin-right: 5px;\n  }\n\n  .navbar-right {\n    max-width: 100%;\n    min-width: calc(100vw - 300px);\n  }\n\n  .container {\n    display: block;\n  }\n\n  .navbar-fixed-top {\n    max-height: 45px;\n    display: block;\n  }\n\n  .btn-group {\n    display:none;\n  }\n\n  .brand {\n    max-width: 100%;\n  }\n\n  .partnerLi {\n    float: right;\n  }\n\n  .navbar-left {\n    display: block;\n    margin-top: 10px;\n  }\n\n  .search-btn-default {\n    float: right;\n  }\n}\n\n@media (min-width: 1200px) {\n  .btn-default {\n    display: block;\n  }\n\n  .btn-send {\n    display: block;\n  }\n\n  .row4 {\n    margin-top: 60px;\n  }\n\n  .print-col {\n    width: 32%\n  }\n\n  .search-btn-default {\n    display: block;\n  }\n\n  .btn-group {\n    display: block;\n  }\n\n  .navbar-nav {\n    display: block;\n    min-width: 40%;\n  }\n\n  .container {\n    display: block;\n    width: 100%;\n  }\n\n  .navbar-right {\n    max-width: 100%;\n    min-width: 50%;\n  }\n  .form-group {\n    margin: 0;\n    width: 70%;\n    max-height: 100%;\n    margin: 0 2px 20px 10px;\n  }\n\n  .form-control {\n    background-color: #0a7a74;\n    color: #FFFFFF;\n    border: none;\n    opacity: 80;\n    width: 130%;\n    margin: 0px 0px 0px 0px;\n  }\n\n\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n  <div class=\"container\">\n    <ul class=\"nav navbar-nav\">\n      <li class=\"brand\" ><img alt=\"Brand\" href=\"http://www.servicio.io\" src=\"http://servicio.io/wp-content/uploads/2018/01/servicio-logo-neu-laden-1.png\" (click)=\"brandClick()\" style=\"height: 45px; width: auto; margin-top:0px; margin-right: 10px; text-align: left; display:inline-block; vertical-align:middle;\"></li>\n      <li class=\"Belegte Tisch\" ><div class=\"TischDiv\"><h3 class=\"TischH3\">{{tablesOccupied}}</h3></div></li>\n      <div class=\"btn-group\" dropdown>\n        <button dropdownToggle type=\"button\" class=\"btn btn-primary dropdown-toggle\"><i class=\"fa fa-print\" aria-hidden=\"true\"></i><span class=\"caret\"></span>\n        </button>\n        <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\n          <li class=\"printToCart1\"><button (click)=\"printToCart1('printSectionId1')\" style=\" display:table-cell; vertical-align:middle; margin-top: 15px; margin-right: 20px\" class=\"printToCart1\">Tisch Übersicht Drucken</button></li>\n          <li class=\"printToCart2\"><button (click)=\"printToCart2('printSectionId2')\" style=\"text-align: left; display:table-cell; vertical-align:middle; margin-top: 15px; margin-right: 20px\" class=\"printToCart2\">Tisch Plan Drucken</button></li>\n          <li class=\"printToCart3\"><button (click)=\"printToCart3('printSectionId3')\" style=\"text-align: left; display:table-cell; vertical-align:middle; margin-top: 15px; margin-right: 20px\" class=\"printToCart3\">A-Z Liste Drucken</button></li>\n        </ul>\n      </div>\n      <div class=\"btn-group\" dropdown>\n        <button dropdownToggle class=\"btn btn-primary dropdown-toggle\" type=\"button\">CSV<i class=\"fa fa-upload\" aria-hidden=\"true\"></i><span class=\"caret\"></span>\n        </button>\n        <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\n          <div class=\"csv\" (click)=\"none($event)\" ><h6 >CSV-Datei hochladen</h6>\n            <form class=\"SendMessage\" (submit)=\"sendMessage($event)\">\n              <input type=\"file\" (change)=\"fileChangeEvent($event)\" placeholder=\"Upload file...\" />\n              <button type=\"button\" class=\"btn btn-send\" (click)=\"upload()\">CSV HOCHLADEN</button>\n            </form>\n          </div>\n        </ul>\n      </div>\n    </ul>\n    <ul class=\"nav navbar-nav navbar-right\" >\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"dispenseIfAbreise()\">Abreisen entfernen</button>\n      <div class=\"btn-group\" dropdown>\n        <button dropdownToggle type=\"button\" class=\"btn btn-primary dropdown-toggle\">Umsetzen<span class=\"caret\"></span>\n        </button>\n        <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\" >\n          <form class=\"SendInformation\" #myForm=\"ngForm\" (submit)=\"umsetzen($event)\">\n            <div class=\"form-group\" (click)=\"none($event)\">\n              <label for=\"quellTisch\">Quell-Tisch:</label>\n              <input class=\"form-control\" id=\"quellTisch\" [(ngModel)]=\"quellTisch\" name=\"quellTisch\" placeholder=\"Von Tischnummer:\" >\n            </div>\n            <div class=\"form-group\" (click)=\"none($event)\">\n              <label for=\"zielTisch\">Ziel-Tisch</label>\n              <input class=\"form-control\" id=\"zielTisch\" [(ngModel)]=\"zielTisch\" name=\"zielTisch\" placeholder=\"Zu Tischnummer:\" >\n            </div>\n            <button type=\"submit\" class=\"btn btn-primary\" >Umsetzen</button>\n          </form>\n        </ul>\n      </div>\n      <div class=\"btn-group\"  dropdown>\n        <button dropdownToggle type=\"button\"  class=\"btn btn-primary dropdown-toggle\">Traces <i class=\"fa fa-folder-open\" aria-hidden=\"true\"></i> <span class=\"caret\"></span>\n        </button>\n        <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\" >\n          <div *ngFor=\"let newInformationElement of newInformationElements; let j = index;\">\n            <button type=\"submit\" class=\"btn btn-send\" (click)=\"delete(newInformationElement, j, $event)\">x</button>\n            <li role=\"menuitem\" class=\"menuitem\" (click)=\"none($event)\"> <b>Zimmer Nummer: </b> {{newInformationElement.roomNumber}} <br><b>Trace: </b> {{newInformationElement.text}} <br><b>Tisch: </b> {{newInformationElement.tableNumber}}<br><b>Datum: </b> {{newInformationElement.date}}<br><b>Name: </b> {{newInformationElement.name}}<br><b>Mitarbeiter: </b> {{newInformationElement.employee}}</li>\n            <li class=\"divider dropdown-divider\"></li>\n          </div>\n        </ul>\n      </div>\n      <form class=\"navbar-form navbar-left\">\n        <div class=\"form-group\" >\n          <input type=\"text\" class=\"form-control\" (keyup)=\"onKey($event)\">\n        </div>\n        <button type=\"submit\" class=\"btn search-btn-default\" ><i class=\"fa fa-search\" aria-hidden=\"true\"></i></button>\n      </form>\n      <li class=\"partnerLi\" ><img class=\"Partner\" alt=\"Partner\" href=\"http://www.salzburgerhof.servicio.io/wlanlandingpage\" src=\"http://servicio.io/wp-content/uploads/2017/12/680001_160527_7E4EAE33_logo_779px.jpg\" ></li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_tischplan_service__ = __webpack_require__("../../../../../src/app/services/tischplan.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavigationComponent = (function () {
    function NavigationComponent(tischplanService, http, _flashMessagesService) {
        this.tischplanService = tischplanService;
        this.http = http;
        this._flashMessagesService = _flashMessagesService;
        this.filesToUpload = [];
        this.tablesTempAbreise = [];
        this.newInformationElements = [];
        this.umsetzenExport = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.abreisenExport = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.termExport = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.date = [];
        this.parts = [];
        this.parsedDate = [];
        this.tableInformation = [];
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent.prototype.delete = function (informationElement, j, event) {
        var _this = this;
        console.log(informationElement);
        console.log(j);
        event.stopPropagation();
        this.tischplanService.deleteInformationElement(informationElement)
            .subscribe(function (informationElement) {
            _this.newInformationElements.splice(j, 1);
        });
    };
    NavigationComponent.prototype.none = function (event) {
        event.stopPropagation();
    };
    NavigationComponent.prototype.printToCart1 = function (printSectionId1) {
        var popupWinindow;
        var innerContents = document.getElementById(printSectionId1).innerHTML;
        popupWinindow = window.open('', '_blank', 'width=600,height=700,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
        popupWinindow.document.open();
        popupWinindow.document.write('<html><head><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">\n' +
            '<script src="node_modules/core-js/client/shim.min.js"></script>\n' +
            '<script src="<your-libs-directory>/object-assign.min.js"></script></head><body onload="window.print()">' + innerContents + '</html>');
        popupWinindow.document.close();
    };
    NavigationComponent.prototype.printToCart2 = function (printSectionId2) {
        var popupWinindow;
        var innerContents = document.getElementById(printSectionId2).innerHTML;
        popupWinindow = window.open('', '_blank', 'width=1000,height=1000,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
        popupWinindow.document.open();
        popupWinindow.document.write('<html><head><style> .row .t1 { width: 30px; height: 60px; position: absolute; border: solid 1px #0a7a74; } .row .t2 { width: 30px; height: 60px; position: absolute; border: solid 1px #0a7a74; } .row .t3 { width: 30px; height: 60px; position: absolute; border: solid 1px #0a7a74; } .row .t4 { width: 30px; height: 60px; position: absolute; border: solid 1px #0a7a74; } .row .t5 { width: 30px; height: 80px; border: solid 1px #0a7a74; position: absolute; } .row .t6 { width: 30px; height: 80px; border: solid 1px #0a7a74; position: absolute; } .row .t7 { width: 30px; height: 80px; border: solid 1px #0a7a74; position: absolute; } .row .t8 { width: 100px; height: 90px; border: solid 1px #0a7a74; position: absolute; } .row .t9 { width: 40px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t10 { width: 40px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t11 { width: 30px; height: 80px; border: solid 1px #0a7a74; position: absolute; } .row .t12 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t13 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t14 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t15 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t16 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t17 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t18 { position: absolute; } .row .t19 { position: absolute; }.row .t20 { position: absolute; } .row .t21 { position: absolute; }  .row .t22 { position: absolute; } .row .t23 { position: absolute; } .row .t24 { position: absolute; } .row .t40 { width: 60px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t41 { width: 60px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t42 { width: 80px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t43 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t44 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t45 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t46 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t47 { width: 80px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t48 { width: 60px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t49 { width: 60px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t50 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t51 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t52 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t53 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t54 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t55 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t56 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t57 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t58 { width: 60px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t59 { width: 60px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t60 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t61 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t62 { width: 30px; height: 60px; position: absolute; border: solid 1px #0a7a74; } .row .t63 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t64 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t65 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t66 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t67 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t68 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t69 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t70 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t71 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t72 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t73 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t74 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t75 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t76 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t77 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t78 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t79 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t80 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t81 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t82 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t83 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t84 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t85 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t86 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t87 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t88 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t89 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t501 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t502 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t503 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t504 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t505 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t506 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t507 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t508 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t509 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t510 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t511 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t512 { width: 80px; height: 45px; border: solid 1px #0a7a74; position: absolute; } .row .t513 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t514 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t515 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t516 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t517 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; transform: rotate(10deg); } .row .t518 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; transform: rotate(30deg); } .row .t519 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; transform: rotate(50deg); } .row .t520 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; transform: rotate(70deg); } .row .t521 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; transform: rotate(90deg); } .row .t522 { width: 80px; height: 45px; border: solid 1px #0a7a74; position: absolute; } .row .t523 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t524 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t525 { width: 40px; height: 40px; position: absolute; transform: rotate(45deg); } .t25 { position: absolute; } .t26 { position: absolute; } .t30 { position: absolute; } .t31 { position: absolute; } .t32 { position: absolute; } .t33 { position: absolute; } .t34 { position: absolute; } .t35 { position: absolute; } .t36 { position: absolute; } .t37 { position: absolute; } .t38 { position: absolute; }  .t90 { position: absolute; } .t91 { position: absolute; } .t92 { position: absolute; } .t93 { position: absolute; } .t94 { position: absolute; } .t95 { position: absolute; } .t96 { position: absolute; } .t97 { position: absolute; } .t98 { position: absolute; } .t99 { position: absolute; } </style></head><body onload="window.print()">' + innerContents + '</html>');
        popupWinindow.document.close();
    };
    NavigationComponent.prototype.printToCart3 = function (printSectionId3) {
        var popupWinindow;
        var innerContents = document.getElementById(printSectionId3).innerHTML;
        popupWinindow = window.open('', '_blank', 'width=1000,height=1000,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
        popupWinindow.document.open();
        popupWinindow.document.write('<html><head><style></style></head><body onload="window.print()">' + innerContents + '</html>');
        popupWinindow.document.close();
    };
    NavigationComponent.prototype.neuLaden = function () {
        window.location.reload();
    };
    NavigationComponent.prototype.umsetzen = function () {
        var _this = this;
        event.preventDefault();
        console.log("UMSETZTEN CALLED");
        var quellTisch = this.quellTisch;
        var zielTisch = this.zielTisch;
        //this.umsetzenExport.emit({quellTisch, zielTisch});
        // let targetTable = this.quellTisch.zielTisch;
        // let quellTischNumber = this.quellTisch.quellTisch;
        // let targetTableNumber = Number(this.quellTisch.zielTisch);
        // let quellTischNumberNumber = Number(this.quellTisch.quellTisch);
        console.log('targetTable' + zielTisch);
        console.log('quellTischNumber' + quellTisch);
        var tableToMove = { department: "Empty", number: "0", targetTable: "0", targetDepartment: "Empty" };
        var j = 0;
        if (Number(this.quellTisch) >= 30 && Number(this.quellTisch) <= 47) {
            tableToMove.department = "berglerStubeHubertusStube";
            j = 1;
        }
        else if (Number(this.quellTisch) >= 10 && Number(this.quellTisch) <= 26) {
            tableToMove.department = "Bauernstube";
            j = 0;
        }
        else if (Number(this.quellTisch) >= 50 && Number(this.quellTisch) <= 77) {
            tableToMove.department = "waeldlerStubeKristallStube";
            j = 4;
        }
        else if (Number(this.quellTisch) >= 80 && Number(this.quellTisch) <= 99) {
            tableToMove.department = "edelweissKaminStube";
            j = 3;
        }
        else if (Number(this.quellTisch) >= 1 && Number(this.quellTisch) <= 6) {
            tableToMove.department = "teestubeTeelounge";
            j = 2;
        }
        if (Number(this.zielTisch) >= 30 && Number(this.zielTisch) <= 47) {
            tableToMove.targetDepartment = "berglerStubeHubertusStube";
        }
        else if (Number(this.zielTisch) >= 10 && Number(this.zielTisch) <= 26) {
            tableToMove.targetDepartment = "Bauernstube";
        }
        else if (Number(this.zielTisch) >= 50 && Number(this.zielTisch) <= 77) {
            tableToMove.targetDepartment = "waeldlerStubeKristallStube";
        }
        else if (Number(this.zielTisch) >= 80 && Number(this.zielTisch) <= 99) {
            tableToMove.targetDepartment = "edelweissKaminStube";
        }
        else if (Number(this.zielTisch) >= 1 && Number(this.zielTisch) <= 6) {
            tableToMove.targetDepartment = "teestubeTeelounge";
        }
        var indexZiel = 0;
        var indexQuell = 0;
        tableToMove.number = this.quellTisch;
        tableToMove.targetTable = this.zielTisch;
        console.log(tableToMove);
        this.tischplanService.getTables()
            .subscribe(function (tables) {
            for (var a = 0; a < tables.length; a++) {
                for (var b = 0; b < tables[a].tables.length; b++) {
                    if (tables[a].department === tableToMove.department) {
                        console.log("YEEEES BEFORE");
                        if (tables[a].tables[b].number === tableToMove.number) {
                            console.log("YEEEEEEEESSSSS AFFFTEEEER!!!");
                            console.log(tables[a].tables[b]);
                            _this.tableInformation.push(tables[a].tables[b]);
                            console.log(_this.tableInformation);
                            _this.tableInformation.push(tableToMove);
                        }
                    }
                }
            }
            for (var a = 0; a < tables.length; a++) {
                for (var b = 0; b < tables[a].tables.length; b++) {
                    if (tables[a].department === tableToMove.targetDepartment) {
                        if (tables[a].tables[b].number === tableToMove.targetTable) {
                            indexZiel = b;
                        }
                    }
                }
            }
            for (var a = 0; a < tables.length; a++) {
                for (var b = 0; b < tables[a].tables.length; b++) {
                    if (tables[a].department === tableToMove.department) {
                        if (tables[a].tables[b].number === tableToMove.number) {
                            indexQuell = b;
                        }
                    }
                }
            }
            var tableInformationExport = _this.tableInformation;
            _this.umsetzenExport.emit({ tableToMove: tableToMove, indexZiel: indexZiel, indexQuell: indexQuell, tableInformationExport: tableInformationExport });
        });
        //this.departmentsComponent.umsetzen(this.tableInformation, index);
    };
    ;
    NavigationComponent.prototype.keyDownFunction = function (event) {
        if (event.keyCode == 13) {
            //alert('you just clicked enter');
            this.termExport.emit(this.term);
        }
    };
    NavigationComponent.prototype.onKey = function (event) {
        this.term = event.target.value;
        console.log(this.term);
        this.termExport.emit(this.term);
    };
    NavigationComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
    };
    NavigationComponent.prototype.upload = function () {
        var _this = this;
        var formData = new FormData();
        var files = this.filesToUpload;
        formData.append('uploads[]', files[0], files[0]['name']);
        this.http.post('/upload', formData)
            .map(function (files) { return files.json(); }).map(function (res) {
            // 1st parameter is a flash message text
            // 2nd parameter is optional. You can pass object with options.
            return _this._flashMessagesService.show('Erfolgreich CSV Datei hochgeladen', { cssClass: 'alert-success', timeout: 10000 });
        })
            .subscribe(function (files) { return console.log('files', files); });
    };
    NavigationComponent.prototype.dispenseIfAbreise = function (tables) {
        console.log('=================================================dispenseIfAbreise');
        this.dateTodayGenerated = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
        for (var a = 0; a < tables.length; a++) {
            for (var b = 0; b < tables[a].tables.length; b++) {
                if (tables[a].tables[b].abreiseValue) {
                    console.log('tables[a].tables[b].abreiseValue: ' + b + " " + tables[a].tables[b].anreiseValue);
                    this.parts[0] = tables[a].tables[b].abreiseValue.match(/(\d+)/g);
                }
                else {
                    this.parts[0] = "undefined";
                }
                if (tables[a].tables[b].abreiseValue2) {
                    this.parts[1] = tables[a].tables[b].abreiseValue2.match(/(\d+)/g);
                }
                else {
                    this.parts[1] = "undefined";
                }
                if (tables[a].tables[b].abreiseValue3) {
                    this.parts[2] = tables[a].tables[b].abreiseValue3.match(/(\d+)/g);
                }
                else {
                    this.parts[2] = "undefined";
                }
                if (tables[a].tables[b].abreiseValue4) {
                    this.parts[3] = tables[a].tables[b].abreiseValue4.match(/(\d+)/g);
                }
                else {
                    this.parts[3] = "undefined";
                }
                if (tables[a].tables[b].abreiseValue4) {
                    this.parts[4] = tables[a].tables[b].abreiseValue4.match(/(\d+)/g);
                }
                else {
                    this.parts[4] = "undefined";
                }
                if (tables[a].tables[b].abreiseValue4) {
                    this.parts[5] = tables[a].tables[b].abreiseValue4.match(/(\d+)/g);
                }
                else {
                    this.parts[5] = "undefined";
                }
                if (tables[a].tables[b].abreiseValue7) {
                    this.parts[6] = tables[a].tables[b].abreiseValue7.match(/(\d+)/g);
                }
                else {
                    this.parts[6] = "undefined";
                }
                if (tables[a].tables[b].abreiseValue8) {
                    this.parts[7] = tables[a].tables[b].abreiseValue8.match(/(\d+)/g);
                }
                else {
                    this.parts[7] = "undefined";
                }
                if (tables[a].tables[b].abreiseValue9) {
                    this.parts[8] = tables[a].tables[b].abreiseValue9.match(/(\d+)/g);
                }
                else {
                    this.parts[8] = "undefined";
                }
                if (tables[a].tables[b].abreiseValue10) {
                    this.parts[9] = tables[a].tables[b].abreiseValue10.match(/(\d+)/g);
                }
                else {
                    this.parts[9] = "undefined";
                }
                if (tables[a].tables[b].abreiseValue11) {
                    this.parts[10] = tables[a].tables[b].abreiseValue11.match(/(\d+)/g);
                }
                else {
                    this.parts[10] = "undefined";
                }
                if (tables[a].tables[b].abreiseValue12) {
                    this.parts[11] = tables[a].tables[b].abreiseValue12.match(/(\d+)/g);
                }
                else {
                    this.parts[11] = "undefined";
                }
                if (tables[a].tables[b].abreiseValue13) {
                    this.parts[12] = tables[a].tables[b].abreiseValue13.match(/(\d+)/g);
                }
                else {
                    this.parts[12] = "undefined";
                }
                if (tables[a].tables[b].abreiseValue14) {
                    this.parts[13] = tables[a].tables[b].abreiseValue14.match(/(\d+)/g);
                }
                else {
                    this.parts[13] = "undefined";
                }
                if (tables[a].tables[b].abreiseValue15) {
                    this.parts[14] = tables[a].tables[b].abreiseValue15.match(/(\d+)/g);
                }
                else {
                    this.parts[14] = "undefined";
                }
                for (var c = 0; c <= 14; c++) {
                    if (this.parts[c]) {
                        this.date[c] = new Date(2018, this.parts[c][1] - 1, this.parts[c][0]);
                        this.parsedDate[c] = String(this.date[c]).substring(0, 15);
                    }
                }
                // note parts[1]-1
                //console.log('parts[2]' + parts[2] + 'parts[1]' + (parts[1] - 1) + 'parts[0]' + parts[0]);
                // Mon May 31 2010 00:00:00
                //this.tablesRestaurant[j].anreiseValue
                var dateToday = String(this.dateTodayGenerated).substring(0, 15);
                console.log('Parsed Date --->: ' + this.parsedDate[0]);
                console.log('this.dateGenerated --->: ' + dateToday);
                var abreisenExport = tables[a].tables[b];
                if (dateToday.indexOf(this.parsedDate[0] || this.parsedDate[1] || this.parsedDate[2] || this.parsedDate[3] || this.parsedDate[4] || this.parsedDate[5] || this.parsedDate[6] || this.parsedDate[7] || this.parsedDate[8] || this.parsedDate[9] || this.parsedDate[10] || this.parsedDate[11] || this.parsedDate[12] || this.parsedDate[13] || this.parsedDate[14] || this.parsedDate[15]) !== -1) {
                    this.abreisenExport.emit({ abreisenExport: abreisenExport, b: b });
                }
            }
        }
    };
    return NavigationComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesTempAbreise'),
    __metadata("design:type", Array)
], NavigationComponent.prototype, "tablesTempAbreise", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('newInformationElements'),
    __metadata("design:type", Array)
], NavigationComponent.prototype, "newInformationElements", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesOccupied'),
    __metadata("design:type", Number)
], NavigationComponent.prototype, "tablesOccupied", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], NavigationComponent.prototype, "umsetzenExport", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], NavigationComponent.prototype, "abreisenExport", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _c || Object)
], NavigationComponent.prototype, "termExport", void 0);
NavigationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navigation',
        template: __webpack_require__("../../../../../src/app/components/digitalerTischplan/navigation/navigation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digitalerTischplan/navigation/navigation.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__services_tischplan_service__["a" /* TischplanService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_tischplan_service__["a" /* TischplanService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _f || Object])
], NavigationComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=navigation.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/print/print.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"printSectionId3\" class=\"section3\">\n  <table style=\"border: solid 1px black; border-collapse: collapse;\">\n    <tr>\n      {{dateGeneratedListe}}\n    </tr>\n    <tr style=\"border: solid 1px black;\">\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Zimmernummer</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Name</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">PAX</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Abreise</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">GRP</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Tisch</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Bemerkung</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Notiz1</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Notiz2</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Trace</th>\n    </tr>\n    <div *ngFor=\"let table of tables\">\n      <tr style=\"border: solid 1px black;\">\n        <div *ngIf=\"table.nameValue\">\n          <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.zimmernummerValue}}</td>\n          <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.nameValue}}</td>\n          <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.personenAnzahlValue}}</td>\n          <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.abreiseValue}}</td>\n          <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n          <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n          <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.bemerkungValue}}</td>\n          <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz1Value}}</td>\n          <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz2Value}}</td>\n          <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.trace}}</td>\n        </div>\n      </tr>\n    </div>\n  </table>\n</div>\n<div id=\"printSectionId1\" class=\"section3\">\n  <div *ngIf=\"showBauernStubnBool\">\n    <table style=\"border: solid 1px black; border-collapse: collapse;\">\n      <tr>\n        {{dateGeneratedListe}}\n      </tr>\n      <tr>\n        Bauernstube\n      </tr>\n      <tr style=\"border: solid 1px black;\">\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Zimmernummer</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Name</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">PAX</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Abreise</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">GRP</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Tisch</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Bemerkung</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Notiz1</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Notiz2</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Trace</th>\n      </tr>\n      <div *ngFor=\"let table of tablesBauernstube\">\n        <tr style=\"border: solid 1px black;\">\n          <div *ngIf=\"table.nameValue\">\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.zimmernummerValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.nameValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.personenAnzahlValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.abreiseValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.bemerkungValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz1Value}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz2Value}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.trace}}</td>\n          </div>\n        </tr>\n        <div *ngIf=\"table.nameValue2\">\n          <tr style=\"border: solid 1px black;\">\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.zimmernummerValue2}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.nameValue2}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.personenAnzahlValue2}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.abreiseValue2}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.bemerkungValue3}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz3Value}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz4Value}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.trace2}}</td>\n          </tr>\n        </div>\n        <div *ngIf=\"table.nameValue3\">\n          <tr style=\"border: solid 1px black;\">\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.zimmernummerValue3}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.nameValue3}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.personenAnzahlValue3}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.abreiseValue3}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.bemerkungValue6}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz5Value}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz6Value}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.trace}}</td>\n          </tr>\n        </div>\n      </div>\n    </table>\n  </div>\n  <div *ngIf=\"showWaeldlerBool\">\n    <table style=\"border: solid 1px black; border-collapse: collapse;\">\n      <tr>\n        {{dateGeneratedListe}}\n      </tr>\n      <tr>\n        Wäldlerstube / Kristallstube\n      </tr>\n      <tr style=\"border: solid 1px black;\">\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Zimmernummer</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Name</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">PAX</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Abreise</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">GRP</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Tisch</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Bemerkung</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Notiz1</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Notiz2</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Trace</th>\n      </tr>\n      <div *ngFor=\"let table of tablesWaeldlerStubeKristallStube\">\n        <tr style=\"border: solid 1px black;\">\n          <div *ngIf=\"table.nameValue\">\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.zimmernummerValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.nameValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.personenAnzahlValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.abreiseValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.bemerkungValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz1Value}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz2Value}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.trace}}</td>\n          </div>\n        </tr>\n        <div *ngIf=\"table.nameValue2\">\n          <tr style=\"border: solid 1px black;\">\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.zimmernummerValue2}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.nameValue2}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.personenAnzahlValue2}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.abreiseValue2}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.bemerkungValue3}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz3Value}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz4Value}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.trace2}}</td>\n          </tr>\n        </div>\n        <div *ngIf=\"table.nameValue3\">\n          <tr style=\"border: solid 1px black;\">\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.zimmernummerValue3}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.nameValue3}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.personenAnzahlValue3}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.abreiseValue3}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.bemerkungValue6}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz5Value}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz6Value}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.trace}}</td>\n          </tr>\n        </div>\n      </div>\n    </table>\n  </div>\n  <div *ngIf=\"showBerglerBool\">\n    <table style=\"border: solid 1px black; border-collapse: collapse;\">\n      <tr>\n        {{dateGeneratedListe}}\n      </tr>\n      <tr>\n        Berglerstube / HUBERTUS Stube\n      </tr>\n      <tr style=\"border: solid 1px black;\">\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Zimmernummer</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Name</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">PAX</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Abreise</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">GRP</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Tisch</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Bemerkung</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Notiz1</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Notiz2</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Trace</th>\n      </tr>\n      <div *ngFor=\"let table of tablesBerglerStubeHubertusStube\">\n        <tr style=\"border: solid 1px black;\">\n          <div *ngIf=\"table.nameValue\">\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.zimmernummerValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.nameValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.personenAnzahlValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.abreiseValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.bemerkungValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz1Value}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz2Value}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.trace}}</td>\n          </div>\n        </tr>\n        <div *ngIf=\"table.nameValue2\">\n          <tr style=\"border: solid 1px black;\">\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.zimmernummerValue2}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.nameValue2}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.personenAnzahlValue2}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.abreiseValue2}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.bemerkungValue3}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz3Value}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz4Value}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.trace2}}</td>\n          </tr>\n        </div>\n        <div *ngIf=\"table.nameValue3\">\n          <tr style=\"border: solid 1px black;\">\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.zimmernummerValue3}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.nameValue3}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.personenAnzahlValue3}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.abreiseValue3}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.bemerkungValue6}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz5Value}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz6Value}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.trace}}</td>\n          </tr>\n        </div>\n      </div>\n    </table>\n  </div>\n  <div *ngIf=\"showEdelweissBool\">\n    <table style=\"border: solid 1px black; border-collapse: collapse;\">\n      <tr>\n        {{dateGeneratedListe}}\n      </tr>\n      <tr>\n        EDELWEISS / Kaminstube\n      </tr>\n      <tr style=\"border: solid 1px black;\">\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Zimmernummer</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Name</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">PAX</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Abreise</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">GRP</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Tisch</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Bemerkung</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Notiz1</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Notiz2</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Trace</th>\n      </tr>\n      <div *ngFor=\"let table of tablesEdelweissKaminStube\">\n        <tr style=\"border: solid 1px black;\">\n          <div *ngIf=\"table.nameValue\">\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.zimmernummerValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.nameValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.personenAnzahlValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.abreiseValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.bemerkungValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz1Value}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz2Value}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.trace}}</td>\n          </div>\n        </tr>\n        <div *ngIf=\"table.nameValue2\">\n          <tr style=\"border: solid 1px black;\">\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.zimmernummerValue2}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.nameValue2}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.personenAnzahlValue2}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.abreiseValue2}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.bemerkungValue3}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz3Value}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz4Value}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.trace2}}</td>\n          </tr>\n        </div>\n        <div *ngIf=\"table.nameValue3\">\n          <tr style=\"border: solid 1px black;\">\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.zimmernummerValue3}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.nameValue3}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.personenAnzahlValue3}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.abreiseValue3}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.bemerkungValue6}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz5Value}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz6Value}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.trace}}</td>\n          </tr>\n        </div>\n      </div>\n    </table>\n  </div>\n  <div *ngIf=\"showTeeStubeBool\">\n    <table style=\"border: solid 1px black; border-collapse: collapse;\">\n      <tr>\n        {{dateGeneratedListe}}\n      </tr>\n      <tr>\n        TeeStube / Teelounge\n      </tr>\n      <tr style=\"border: solid 1px black;\">\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Zimmernummer</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Name</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">PAX</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Abreise</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">GRP</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Tisch</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Bemerkung</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Notiz1</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Notiz2</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Trace</th>\n      </tr>\n      <div *ngFor=\"let table of tablesTeestubeTeelounge\">\n        <tr style=\"border: solid 1px black;\">\n          <div *ngIf=\"table.nameValue\">\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.zimmernummerValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.nameValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.personenAnzahlValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.abreiseValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.bemerkungValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz1Value}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz2Value}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.trace}}</td>\n          </div>\n        </tr>\n        <div *ngIf=\"table.nameValue2\">\n          <tr style=\"border: solid 1px black;\">\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.zimmernummerValue2}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.nameValue2}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.personenAnzahlValue2}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.abreiseValue2}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.bemerkungValue3}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz3Value}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz4Value}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.trace2}}</td>\n          </tr>\n        </div>\n        <div *ngIf=\"table.nameValue3\">\n          <tr style=\"border: solid 1px black;\">\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.zimmernummerValue3}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.nameValue3}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.personenAnzahlValue3}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.abreiseValue3}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.bemerkungValue6}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz5Value}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz6Value}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.trace}}</td>\n          </tr>\n        </div>\n      </div>\n    </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/print/print.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrintComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Table__ = __webpack_require__("../../../../../Table.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PrintComponent = (function () {
    function PrintComponent() {
        this.getTablesOccupied = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.getTablesforAzListe = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.tempTablesArray = [];
        this.tempTablesArray2 = [];
        this.tempTablesArray1 = [];
        this.tempTablesArray3 = [];
        this.uniqueTables = [];
        this.tableNumbers = [];
    }
    PrintComponent.prototype.ngOnInit = function () {
    };
    PrintComponent.prototype.formatAzListe = function (tables) {
        this.tables = tables;
        function filterByID(obj) {
            if ('nameValue2' in obj || 'nameValue3' in obj) {
                return true;
            }
            else {
                return false;
            }
        }
        this.tempTablesArray = this.tables.filter(filterByID);
        for (var i = 0; i < this.tables.length; i++) {
            if (this.tables[i].nameValue2 || this.tables[i].nameValue3) {
                this.tables.splice(i, 1);
            }
        }
        for (var i = 0; i < this.tempTablesArray.length; i++) {
            this.tempTablesArray2[i] = new __WEBPACK_IMPORTED_MODULE_1__Table__["a" /* Table */]();
        }
        for (var i = 0; i < this.tempTablesArray.length; i++) {
            this.tempTablesArray3[i] = new __WEBPACK_IMPORTED_MODULE_1__Table__["a" /* Table */]();
        }
        for (var i = 0; i < this.tempTablesArray.length; i++) {
            this.tempTablesArray1[i] = new __WEBPACK_IMPORTED_MODULE_1__Table__["a" /* Table */]();
        }
        for (var a = 0; a < this.tempTablesArray.length; a++) {
            if (typeof this.tempTablesArray[a].nameValue !== "undefined") {
                this.tempTablesArray2[a].nameValue = this.tempTablesArray[a].nameValue;
                this.tempTablesArray2[a].notiz1Value = this.tempTablesArray[a].notiz1Value;
                this.tempTablesArray2[a].notiz2Value = this.tempTablesArray[a].notiz2Value;
                this.tempTablesArray2[a].personenAnzahlValue = this.tempTablesArray[a].personenAnzahlValue;
                this.tempTablesArray2[a].number = this.tempTablesArray[a].number;
                this.tempTablesArray2[a].zimmernummerValue = this.tempTablesArray[a].zimmernummerValue;
                this.tempTablesArray2[a].anreiseValue = this.tempTablesArray[a].anreiseValue;
                this.tempTablesArray2[a].abreiseValue = this.tempTablesArray[a].abreiseValue;
                this.tempTablesArray2[a].bemerkungValue = this.tempTablesArray[a].bemerkungValue;
                this.tempTablesArray2[a].trace = this.tempTablesArray[a].trace;
                this.tables = this.tables.concat(this.tempTablesArray2[a]);
            }
        }
        for (var a = 0; a < this.tempTablesArray.length; a++) {
            if (typeof this.tempTablesArray[a].nameValue2 !== "undefined") {
                this.tempTablesArray1[a].nameValue = this.tempTablesArray[a].nameValue2;
                this.tempTablesArray1[a].notiz1Value = this.tempTablesArray[a].notiz3Value;
                this.tempTablesArray1[a].notiz2Value = this.tempTablesArray[a].notiz4Value;
                this.tempTablesArray1[a].personenAnzahlValue = this.tempTablesArray[a].personenAnzahlValue2;
                this.tempTablesArray1[a].number = this.tempTablesArray[a].number;
                this.tempTablesArray1[a].zimmernummerValue = this.tempTablesArray[a].zimmernummerValue2;
                this.tempTablesArray1[a].anreiseValue = this.tempTablesArray[a].anreiseValue2;
                this.tempTablesArray1[a].abreiseValue = this.tempTablesArray[a].abreiseValue2;
                this.tempTablesArray1[a].bemerkungValue = this.tempTablesArray[a].bemerkungValue3;
                this.tempTablesArray1[a].trace = this.tempTablesArray[a].trace2;
                this.tables = this.tables.concat(this.tempTablesArray1[a]);
            }
        }
        for (var a = 0; a < this.tempTablesArray.length; a++) {
            if (typeof this.tempTablesArray[a].nameValue3 !== "undefined") {
                this.tempTablesArray3[a].nameValue = this.tempTablesArray[a].nameValue3;
                this.tempTablesArray3[a].notiz1Value = this.tempTablesArray[a].notiz5Value;
                this.tempTablesArray3[a].notiz2Value = this.tempTablesArray[a].notiz6Value;
                this.tempTablesArray3[a].personenAnzahlValue = this.tempTablesArray[a].personenAnzahlValue3;
                this.tempTablesArray3[a].number = this.tempTablesArray[a].number;
                this.tempTablesArray3[a].zimmernummerValue = this.tempTablesArray[a].zimmernummerValue3;
                this.tempTablesArray3[a].anreiseValue = this.tempTablesArray[a].anreiseValue3;
                this.tempTablesArray3[a].abreiseValue = this.tempTablesArray[a].abreiseValue3;
                this.tempTablesArray3[a].bemerkungValue = this.tempTablesArray[a].bemerkungValue6;
                this.tempTablesArray3[a].trace = this.tempTablesArray[a].trace3;
                this.tables = this.tables.concat(this.tempTablesArray3[a]);
            }
        }
        console.log(this.tempTablesArray1);
        console.log(this.tempTablesArray);
        console.log(this.tempTablesArray2);
        console.log(this.tempTablesArray3);
        console.log('this.tables before sort ');
        console.log(this.tables);
        for (var i = 0; i < this.tables.length; i++) {
            if (!("nameValue" in this.tables[i])) {
                this.tables.splice(i, 1);
            }
        }
        this.tables = this.tables.sort(function (a, b) {
            var nameA = "";
            var nameB = "";
            if (typeof a.nameValue !== "undefined" && a.nameValue !== null) {
                nameA = a.nameValue.toUpperCase(); // ignore upper and lowercase
            }
            if (typeof b.nameValue !== "undefined" && b.nameValue !== null) {
                nameB = b.nameValue.toUpperCase(); // ignore upper and lowercase
            }
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            // names must be equal
            return 0;
            //}
        });
        console.log('this.tables after sort: ');
        console.log("this.uniqueTables: ");
        console.log(this.uniqueTables);
        for (var i = 0; i < this.tables.length; i++) {
            console.log(i);
            if ("nameValue" in this.tables[i]) {
                console.log("--->" + i);
                this.tableNumbers.push(this.tables[i].number);
            }
        }
        function onlyUnique(value, index, self) {
            return self.indexOf(value) === index;
        }
        this.uniqueTables = this.tableNumbers.filter(onlyUnique);
        this.tablesOccupied = this.uniqueTables.length;
        this.getTablesOccupied.emit(this.tablesOccupied);
        this.getTablesforAzListe.emit(this.tables);
        console.log(this.tables);
        console.log("this.tablesOccupied" + this.tablesOccupied);
        console.log(tables);
    };
    return PrintComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tables'),
    __metadata("design:type", Array)
], PrintComponent.prototype, "tables", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('dateGeneratedListe'),
    __metadata("design:type", String)
], PrintComponent.prototype, "dateGeneratedListe", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesBauernstube'),
    __metadata("design:type", Array)
], PrintComponent.prototype, "tablesBauernstube", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showBauernStubnBool'),
    __metadata("design:type", Boolean)
], PrintComponent.prototype, "showBauernStubnBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesEdelweissKaminStube'),
    __metadata("design:type", Array)
], PrintComponent.prototype, "tablesEdelweissKaminStube", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showEdelweissBool'),
    __metadata("design:type", Boolean)
], PrintComponent.prototype, "showEdelweissBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesBerglerStubeHubertusStube'),
    __metadata("design:type", Array)
], PrintComponent.prototype, "tablesBerglerStubeHubertusStube", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showBerglerBool'),
    __metadata("design:type", Boolean)
], PrintComponent.prototype, "showBerglerBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesTeestubeTeelounge'),
    __metadata("design:type", Array)
], PrintComponent.prototype, "tablesTeestubeTeelounge", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showTeeStubeBool'),
    __metadata("design:type", Boolean)
], PrintComponent.prototype, "showTeeStubeBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesWaeldlerStubeKristallStube'),
    __metadata("design:type", Array)
], PrintComponent.prototype, "tablesWaeldlerStubeKristallStube", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showWaeldlerBool'),
    __metadata("design:type", Boolean)
], PrintComponent.prototype, "showWaeldlerBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], PrintComponent.prototype, "getTablesOccupied", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], PrintComponent.prototype, "getTablesforAzListe", void 0);
PrintComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-print',
        template: __webpack_require__("../../../../../src/app/components/digitalerTischplan/print/print.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digitalerTischplan/tischplan.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PrintComponent);

var _a, _b;
//# sourceMappingURL=print.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/tableplan/tableplan.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showTablePlanBool\">\n  <div id=\"printSectionId2\" class=\"col-xs-12 printTwo\">\n    <div class=\"row\" style=\" border-left: 5px solid #0a7a74; border-right: 5px solid #0a7a74;\" >\n      <div *ngIf=\"showBerglerBool\">\n        <div *ngFor=\"let tableBerglerStubeHubertusStube of tablesBerglerStubeHubertusStube; let j = index;\">\n          <div class=\"t{{tableBerglerStubeHubertusStube.number}} table-item\" (click)=\"moveTable(tableBerglerStubeHubertusStube, j)\" [ngStyle]=\"{'top': tableBerglerStubeHubertusStube.topValue + 'px', 'left': tableBerglerStubeHubertusStube.leftValue + 'px', 'background-color': + tableBerglerStubeHubertusStube.bgColor, 'height': + tableBerglerStubeHubertusStube.height + 'px', 'width': + tableBerglerStubeHubertusStube.width + 'px', 'border': + tableBerglerStubeHubertusStube.border}\" [style.border]=\"getStyle(tablesBerglerStubeHubertusStube[j].trace, tablesBerglerStubeHubertusStube[j].trace2, tablesBerglerStubeHubertusStube[j].trace3, tablesBerglerStubeHubertusStube[j].trace4, tablesBerglerStubeHubertusStube[j].trace5, tablesBerglerStubeHubertusStube[j].trace6, tablesBerglerStubeHubertusStube[j].trace7, tablesBerglerStubeHubertusStube[j].trace8, tablesBerglerStubeHubertusStube[j].trace9, tablesBerglerStubeHubertusStube[j].trace10, tablesBerglerStubeHubertusStube[j].trace11, tablesBerglerStubeHubertusStube[j].trace12, tablesBerglerStubeHubertusStube[j].trace13, tablesBerglerStubeHubertusStube[j].trace14, tablesBerglerStubeHubertusStube[j].trace15, tablesBerglerStubeHubertusStube[j].newTraceText)\">\n            <div *ngIf=\"tablesBerglerStubeHubertusStube[j] !== tablesBerglerStubeHubertusStube[j+1]\">\n              <p><b>{{tableBerglerStubeHubertusStube.number}} | {{tableBerglerStubeHubertusStube.personenAnzahlValue}} {{tableBerglerStubeHubertusStube.personenAnzahlValue2}} {{tableBerglerStubeHubertusStube.personenAnzahlValue3}} {{tableBerglerStubeHubertusStube.personenAnzahlValue4}} {{tableBerglerStubeHubertusStube.personenAnzahlValue5}} {{tableBerglerStubeHubertusStube.personenAnzahlValue6}} {{tableBerglerStubeHubertusStube.personenAnzahlValue7}} {{tableBerglerStubeHubertusStube.personenAnzahlValue8}} {{tableBerglerStubeHubertusStube.personenAnzahlValue9}} {{tableBerglerStubeHubertusStube.personenAnzahlValue10}} {{tableBerglerStubeHubertusStube.personenAnzahlValue11}} {{tableBerglerStubeHubertusStube.personenAnzahlValue12}} {{tableBerglerStubeHubertusStube.personenAnzahlValue13}} {{tableBerglerStubeHubertusStube.personenAnzahlValue14}} {{tableBerglerStubeHubertusStube.personenAnzahlValue15}}</b></p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"showBauernStubnBool\">\n        <div *ngFor=\"let tableBauernstube of tablesBauernstube; let j = index;\">\n          <div class=\"t{{tableBauernstube.number}} table-item\" (click)=\"moveTable(tableBauernstube, j)\" [ngStyle]=\"{'top': tableBauernstube.topValue + 'px', 'left': tableBauernstube.leftValue + 'px', 'background-color': + tableBauernstube.bgColor,  'height': + tableBauernstube.height + 'px', 'width': + tableBauernstube.width + 'px', 'border': + tableBauernstube.border}\" [style.border]=\"getStyle(tablesBauernstube[j].trace, tablesBauernstube[j].trace2, tablesBauernstube[j].trace3, tablesBauernstube[j].trace4, tablesBauernstube[j].trace5, tablesBauernstube[j].trace6, tablesBauernstube[j].trace7, tablesBauernstube[j].trace8, tablesBauernstube[j].trace9, tablesBauernstube[j].trace10, tablesBauernstube[j].trace11, tablesBauernstube[j].trace12, tablesBauernstube[j].trace13, tablesBauernstube[j].trace14, tablesBauernstube[j].trace15, tablesBauernstube[j].newTraceText)\">\n            <p><b>{{tableBauernstube.number}} | {{tableBauernstube.personenAnzahlValue}} {{tableBauernstube.personenAnzahlValue2}} {{tableBauernstube.personenAnzahlValue3}} {{tableBauernstube.personenAnzahlValue4}} {{tableBauernstube.personenAnzahlValue5}} {{tableBauernstube.personenAnzahlValue6}} {{tableBauernstube.personenAnzahlValue7}} {{tableBauernstube.personenAnzahlValue8}} {{tableBauernstube.personenAnzahlValue9}} {{tableBauernstube.personenAnzahlValue10}} {{tableBauernstube.personenAnzahlValue11}} {{tableBauernstube.personenAnzahlValue12}} {{tableBauernstube.personenAnzahlValue13}} {{tableBauernstube.personenAnzahlValue14}} {{tableBauernstube.personenAnzahlValue15}}</b></p>\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"showWaeldlerBool\">\n        <div *ngFor=\"let tableWaeldlerStubeKristallStube of tablesWaeldlerStubeKristallStube; let j = index;\">\n          <div class=\"t{{tableWaeldlerStubeKristallStube.number}} table-item\" (click)=\"moveTable(tableWaeldlerStubeKristallStube, j)\" [ngStyle]=\"{'top': tableWaeldlerStubeKristallStube.topValue + 'px', 'left': tableWaeldlerStubeKristallStube.leftValue + 'px', 'background-color': + tableWaeldlerStubeKristallStube.bgColor, 'height': + tableWaeldlerStubeKristallStube.height + 'px', 'width': + tableWaeldlerStubeKristallStube.width + 'px', 'border': + tableWaeldlerStubeKristallStube.border}\" [style.border]=\"getStyle(tablesWaeldlerStubeKristallStube[j].trace, tablesWaeldlerStubeKristallStube[j].trace2, tablesWaeldlerStubeKristallStube[j].trace3, tablesWaeldlerStubeKristallStube[j].trace4, tablesWaeldlerStubeKristallStube[j].trace5, tablesWaeldlerStubeKristallStube[j].trace6, tablesWaeldlerStubeKristallStube[j].trace7, tablesWaeldlerStubeKristallStube[j].trace8, tablesWaeldlerStubeKristallStube[j].trace9, tablesWaeldlerStubeKristallStube[j].trace10, tablesWaeldlerStubeKristallStube[j].trace11, tablesWaeldlerStubeKristallStube[j].trace12, tablesWaeldlerStubeKristallStube[j].trace13, tablesWaeldlerStubeKristallStube[j].trace14, tablesWaeldlerStubeKristallStube[j].trace15, tablesWaeldlerStubeKristallStube[j].newTraceText)\">\n            <div *ngIf=\"tablesWaeldlerStubeKristallStube[j] !== tablesWaeldlerStubeKristallStube[j+1]\">\n              <p><b>{{tableWaeldlerStubeKristallStube.number}} | {{tableWaeldlerStubeKristallStube.personenAnzahlValue}} {{tableWaeldlerStubeKristallStube.personenAnzahlValue2}} {{tableWaeldlerStubeKristallStube.personenAnzahlValue3}} {{tableWaeldlerStubeKristallStube.personenAnzahlValue4}} {{tableWaeldlerStubeKristallStube.personenAnzahlValue5}} {{tableWaeldlerStubeKristallStube.personenAnzahlValue6}} {{tableWaeldlerStubeKristallStube.personenAnzahlValue7}} {{tableWaeldlerStubeKristallStube.personenAnzahlValue8}} {{tableWaeldlerStubeKristallStube.personenAnzahlValue9}} {{tableWaeldlerStubeKristallStube.personenAnzahlValue10}} {{tableWaeldlerStubeKristallStube.personenAnzahlValue11}} {{tableWaeldlerStubeKristallStube.personenAnzahlValue12}} {{tableWaeldlerStubeKristallStube.personenAnzahlValue13}} {{tableWaeldlerStubeKristallStube.personenAnzahlValue14}} {{tableWaeldlerStubeKristallStube.personenAnzahlValue15}}</b></p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"showEdelweissBool\">\n        <div *ngFor=\"let tableEdelweissKaminStube of tablesEdelweissKaminStube; let j = index;\">\n          <div class=\"t{{tableEdelweissKaminStube.number}} table-item\" (click)=\"moveTable(tableEdelweissKaminStube, j)\" [ngStyle]=\"{'top': tableEdelweissKaminStube.topValue + 'px', 'left': tableEdelweissKaminStube.leftValue + 'px', 'background-color': + tableEdelweissKaminStube.bgColor,  'height': + tableEdelweissKaminStube.height + 'px', 'width': + tableEdelweissKaminStube.width + 'px', 'border': + tableEdelweissKaminStube.border, 'border-radius': + tableEdelweissKaminStube.borderRadius, 'transform':  + tableEdelweissKaminStube.transformValue}\" [style.border]=\"getStyle(tablesEdelweissKaminStube[j].trace, tablesEdelweissKaminStube[j].trace2, tablesEdelweissKaminStube[j].trace3, tablesEdelweissKaminStube[j].trace4, tablesEdelweissKaminStube[j].trace5, tablesEdelweissKaminStube[j].trace6, tablesEdelweissKaminStube[j].trace7, tablesEdelweissKaminStube[j].trace8, tablesEdelweissKaminStube[j].trace9, tablesEdelweissKaminStube[j].trace10, tablesEdelweissKaminStube[j].trace11, tablesEdelweissKaminStube[j].trace12, tablesEdelweissKaminStube[j].trace13, tablesEdelweissKaminStube[j].trace14, tablesEdelweissKaminStube[j].trace15, tablesEdelweissKaminStube[j].newTraceText)\">\n            <div *ngIf=\"tablesEdelweissKaminStube[j] !== tablesEdelweissKaminStube[j+1]\">\n              <p><b>{{tableEdelweissKaminStube.number}} | {{tableEdelweissKaminStube.personenAnzahlValue}} {{tableEdelweissKaminStube.personenAnzahlValue2}} {{tableEdelweissKaminStube.personenAnzahlValue3}} {{tableEdelweissKaminStube.personenAnzahlValue4}} {{tableEdelweissKaminStube.personenAnzahlValue5}} {{tableEdelweissKaminStube.personenAnzahlValue6}} {{tableEdelweissKaminStube.personenAnzahlValue7}} {{tableEdelweissKaminStube.personenAnzahlValue8}} {{tableEdelweissKaminStube.personenAnzahlValue9}} {{tableEdelweissKaminStube.personenAnzahlValue10}} {{tableEdelweissKaminStube.personenAnzahlValue11}} {{tableEdelweissKaminStube.personenAnzahlValue12}} {{tableEdelweissKaminStube.personenAnzahlValue13}} {{tableEdelweissKaminStube.personenAnzahlValue14}} {{tableEdelweissKaminStube.personenAnzahlValue15}}</b></p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"showTeeStubeBool\">\n        <div *ngFor=\"let tableTeestubeTeelounge  of tablesTeestubeTeelounge; let j = index;\">\n          <div class=\"t{{tableTeestubeTeelounge.number}} table-item\" (click)=\"moveTable(tableTeestubeTeelounge, j)\" [ngStyle]=\"{'top': tableTeestubeTeelounge.topValue + 'px', 'left': tableTeestubeTeelounge.leftValue + 'px', 'background-color': + tableTeestubeTeelounge.bgColor,  'height': + tableTeestubeTeelounge.height + 'px', 'width': + tableTeestubeTeelounge.width + 'px', 'border': + tableTeestubeTeelounge.border, 'border-radius': + tableTeestubeTeelounge.borderRadius, 'transform':  + tableTeestubeTeelounge.transformValue}\" [style.border]=\"getStyle(tablesTeestubeTeelounge[j].trace, tablesTeestubeTeelounge[j].trace2, tablesTeestubeTeelounge[j].trace3, tablesTeestubeTeelounge[j].trace4, tablesTeestubeTeelounge[j].trace5, tablesTeestubeTeelounge[j].trace6, tablesTeestubeTeelounge[j].trace7, tablesTeestubeTeelounge[j].trace8, tablesTeestubeTeelounge[j].trace9, tablesTeestubeTeelounge[j].trace10, tablesTeestubeTeelounge[j].trace11, tablesTeestubeTeelounge[j].trace12, tablesTeestubeTeelounge[j].trace13, tablesTeestubeTeelounge[j].trace14, tablesTeestubeTeelounge[j].trace15, tablesTeestubeTeelounge[j].newTraceText)\">\n            <div *ngIf=\"tablesTeestubeTeelounge[j] !== tablesTeestubeTeelounge[j+1]\">\n              <p><b>{{tableTeestubeTeelounge.number}} | {{tableTeestubeTeelounge.personenAnzahlValue}} {{tableTeestubeTeelounge.personenAnzahlValue2}} {{tableTeestubeTeelounge.personenAnzahlValue3}} {{tableTeestubeTeelounge.personenAnzahlValue4}} {{tableTeestubeTeelounge.personenAnzahlValue5}} {{tableTeestubeTeelounge.personenAnzahlValue6}} {{tableTeestubeTeelounge.personenAnzahlValue7}} {{tableTeestubeTeelounge.personenAnzahlValue8}} {{tableTeestubeTeelounge.personenAnzahlValue9}} {{tableTeestubeTeelounge.personenAnzahlValue10}} {{tableTeestubeTeelounge.personenAnzahlValue11}} {{tableTeestubeTeelounge.personenAnzahlValue12}} {{tableTeestubeTeelounge.personenAnzahlValue13}} {{tableTeestubeTeelounge.personenAnzahlValue14}} {{tableTeestubeTeelounge.personenAnzahlValue15}}</b></p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"showAlleBool\">\n        <br>\n        <br>\n        <br>\n        <h1 style=\"color: white\">Perfekt um eine Suche zu starten ;-)</h1>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/tableplan/tableplan.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableplanComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_tischplan_service__ = __webpack_require__("../../../../../src/app/services/tischplan.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TableplanComponent = (function () {
    function TableplanComponent(tischplanService) {
        this.tischplanService = tischplanService;
        this.movedBerglerStubeHubertusStube = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.movedBauernstube = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.movedWaeldlerStubeKristallStube = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.movedEdelweissKaminStube = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.movedTeestubeTeelounge = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    TableplanComponent.prototype.ngOnInit = function () {
    };
    TableplanComponent.prototype.moveTable = function (table, j) {
        var _this = this;
        console.log("moveTable clicked");
        console.log('table :' + table.number + 'j' + j);
        this.tischplanService.moveTable(table).subscribe(function (response) {
            console.log('Response:' + JSON.stringify(response));
            //console.log("topValue:" + JSON.stringify(response[0].tables[0].topValue));
            console.log("topValue:" + JSON.stringify(response[0].tables[j].topValue));
            console.log("leftValue:" + JSON.stringify(response[0].tables[j].leftValue));
            if (response[0].tables[j].department === "berglerStubeHubertusStube") {
                _this.movedBerglerStubeHubertusStube.emit(response[0].tables);
            }
            else if (response[0].tables[j].department === "Bauernstube") {
                _this.movedBauernstube.emit(response[0].tables);
            }
            else if (response[0].tables[j].department === "waeldlerStubeKristallStube") {
                _this.movedWaeldlerStubeKristallStube.emit(response[0].tables);
            }
            else if (response[0].tables[j].department === "edelweissKaminStube") {
                _this.movedEdelweissKaminStube.emit(response[0].tables);
            }
            else if (response[0].tables[j].department === "teestubeTeelounge") {
                _this.movedTeestubeTeelounge.emit(response[0].tables);
            }
        });
    };
    TableplanComponent.prototype.getStyle = function (j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y) {
        if (j || k || l || m || n || o || p || q || r || s || t || u || v || w || x || y) {
            return "solid 3px red";
        }
        else {
            return "solid 3px rgb(243, 239, 228)";
        }
    };
    return TableplanComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tables'),
    __metadata("design:type", Array)
], TableplanComponent.prototype, "tables", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('dateGeneratedListe'),
    __metadata("design:type", String)
], TableplanComponent.prototype, "dateGeneratedListe", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesBauernstube'),
    __metadata("design:type", Array)
], TableplanComponent.prototype, "tablesBauernstube", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showBauernStubnBool'),
    __metadata("design:type", Boolean)
], TableplanComponent.prototype, "showBauernStubnBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesEdelweissKaminStube'),
    __metadata("design:type", Array)
], TableplanComponent.prototype, "tablesEdelweissKaminStube", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showEdelweissBool'),
    __metadata("design:type", Boolean)
], TableplanComponent.prototype, "showEdelweissBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesBerglerStubeHubertusStube'),
    __metadata("design:type", Array)
], TableplanComponent.prototype, "tablesBerglerStubeHubertusStube", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showBerglerBool'),
    __metadata("design:type", Boolean)
], TableplanComponent.prototype, "showBerglerBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesTeestubeTeelounge'),
    __metadata("design:type", Array)
], TableplanComponent.prototype, "tablesTeestubeTeelounge", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showTeeStubeBool'),
    __metadata("design:type", Boolean)
], TableplanComponent.prototype, "showTeeStubeBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesWaeldlerStubeKristallStube'),
    __metadata("design:type", Array)
], TableplanComponent.prototype, "tablesWaeldlerStubeKristallStube", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showWaeldlerBool'),
    __metadata("design:type", Boolean)
], TableplanComponent.prototype, "showWaeldlerBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showAlleBool'),
    __metadata("design:type", Boolean)
], TableplanComponent.prototype, "showAlleBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showTablePlanBool'),
    __metadata("design:type", Boolean)
], TableplanComponent.prototype, "showTablePlanBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], TableplanComponent.prototype, "movedBerglerStubeHubertusStube", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], TableplanComponent.prototype, "movedBauernstube", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _c || Object)
], TableplanComponent.prototype, "movedWaeldlerStubeKristallStube", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _d || Object)
], TableplanComponent.prototype, "movedEdelweissKaminStube", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _e || Object)
], TableplanComponent.prototype, "movedTeestubeTeelounge", void 0);
TableplanComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-tableplan',
        template: __webpack_require__("../../../../../src/app/components/digitalerTischplan/tableplan/tableplan.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digitalerTischplan/tischplan.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__services_tischplan_service__["a" /* TischplanService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_tischplan_service__["a" /* TischplanService */]) === "function" && _f || Object])
], TableplanComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=tableplan.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/tischplan.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html, body {\n  padding: 0;\n  margin: 0;\n  height: 100%;\n  background-color: #0a7a74;\n}\n\n.row {\n  height: 100%;\n}\n\n.line{\n  width: 100%;\n  height: 20px;\n  border-bottom: solid 10px #0a7a74;\n  position: absolute;\n  right: 0px;\n  top: 115px;\n}\n\n.line1{\n  width: 100%;\n  height: 20px;\n  border-bottom: solid 10px #0a7a74;\n  position: absolute;\n  right: 0px;\n  top: 95px;\n}\n\n.printTwo {\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n  background-color: #0a7a74;\n  min-height: 580px;\n}\n\n.row .inner-table {\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n  max-height: calc(100vh - 70px);\n}\n\n.row4 {\n  margin-top: 90px;\n}\n\n.row .table-col {\n  min-height: calc(100vh - 10px);\n  max-height: calc(100vh - 10px);\n  background-color: #f3efe4;\n  padding: 10px 10px 20px 10px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  border-radius: 3px;\n  margin-left: 10px;\n  width: calc(100vw - 20px);\n}\n\n.row .print-col {\n  padding: 0;\n  border-left: 5px solid #0a7a74;\n  border-right: 5px solid #0a7a74;\n  min-height: 100vh;\n  border-bottom: 20px solid #0a7a74;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n.row .upload-col {\n  background-color: #f3efe4;\n  padding: 10px 10px 20px 10px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  min-height: calc(100vh - 10px);\n  max-height: calc(100vh - 10px);\n  border-radius: 3px;\n}\n\n.section3 {\n  display: none;\n}\n\n.row1 {\n  height: calc((100vh - 125px) / 3);\n  overflow: auto;\n}\n\n.row .upload-col, .printToCart2, .dropdown-toggle, .printToCart1, .printToCart3, .Tisch, .anleitung {\n  display: none;\n}\n\n.cards-container {\n  margin: 10px 0px 10px 0px;\n  padding: 10px 10px 40px 10px;\n}\n\n.row .container-fluid  .table-col .inner-table .row3 .wrapper .cards-container {\n  border-radius: 3px;\n  border: solid 1px grey;\n  padding: 10px 10px 15px 10px;\n\n}\n\n#containerTeestubeTeelounge, #containerBauernstube, #containerBerglerStubeHubertusStube, #containerEdelweissKaminStube, #containerWaeldlerStubeKristallStube {\n  border-radius: 3px;\n  border: solid 1px grey;\n}\n\n.row .container-fluid .col-md-4 .row1 {\n  overflow: auto;\n  margin: 0 0 0 0;\n  display: inline-block;\n  width: 105%;\n  height: 232.5px;\n  padding-top: 20px;\n}\n\n.row .container-fluid .col-md-4 .row1 .wrapper {\n  overflow: auto;\n  margin: 0 0 0 0;\n  display: inline-block;\n  max-width: 100%;\n}\n\n.row .container-fluid .col-md-4 .row1 .wrapper .container {\n  overflow: auto;\n  margin: 20px 40px 20px 0;\n  display: inline-block;\n  max-width: 100%;\n  border-radius: 3px;\n}\n\n.row .container-fluid .col-md-4 .col-xs-12 .row1 {\n  overflow: auto;\n  margin: 0 auto;\n  display: inline-block;\n  width: 100%;\n  height: 800px;\n  padding-top: 20px;\n}\n\n.row .container-fluid h3 {\n  -ms-flex-line-pack: center;\n      align-content: center;\n  margin: 0 auto;\n  display: inline-block;\n  color: #0a7a74;\n  position: relative;\n  text-align: center;\n}\n\n.row .container-fluid .col-md-4 h3 {\n  margin: 0 auto;\n  color: #0a7a74;\n  position: relative;\n}\n\n.row .container-fluid .upload-col .csv h3 {\n  margin: 0;\n}\n\n.row1 .col {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n\n.row1 .col:nth-child(1) {\n  -webkit-box-ordinal-group: 2;\n      -ms-flex-order: 1;\n          order: 1;\n}\n\n.row1 .col:nth-child(2) {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n}\n\n.row1 .col:nth-child(3) {\n  -webkit-box-ordinal-group: 3;\n      -ms-flex-order: 2;\n          order: 2;\n}\n\n.row .col-md-4 .row2 {\n  padding-bottom: 10px;\n  position: relative;\n  min-height: 100%;\n  border-bottom: 1px solid red;\n}\n\n.card {\n  background: rgb(255,255,255); /* Fall-back for browsers that don support rgba */\n  background: rgba(255,255,255, 1);\n  border-radius: 3px;\n  border: solid 1px grey;\n  padding: 10px 10px 15px 10px;\n}\n\n.row .container-fluid .col-md-4 .row1 .wrapper .container .card p {\n  /*padding:10px 10px 10px 10px;*/\n  max-width: 100%;\n}\n\n.row .container-fluid .col-md-4 .wrapper .container .card p {\n  /*padding:10px 10px 10px 10px;*/\n  max-width: 100%;\n}\n\n.row .container-fluid .col-md-4 .row3 .row1 p {\n  /*padding: 10px 10px 10px 10px;*/\n  background: rgb(255,255,255); /* Fall-back for browsers that don support rgba */\n  background: rgba(255,255,255, 1);\n  max-width: 100%;\n}\n\n.row .container-fluid .col-md-4 .col-xs-12 .row1 .wrapper .container .card p {\n  /*padding: 10px 10px 10px 10px;*/\n  max-width: 100%;\n}\n\n.row .container-fluid .col-md-6 .row {\n  background-color: #eaf3f3;\n  padding: 20px 10px 20px 10px;\n  height: 100%;\n}\n\n.table-item {\n  position: absolute;\n}\n\n.btn-send {\n  display: none;\n}\n\n.csv {\n  margin-bottom: 30px;\n}\n\n.btn-default {\n  display: none;\n}\n\n.btn-primary {\n  background-color: #0a7a74;\n  color: #FFFFFF;\n  margin-left: 20px;\n  border: none;\n}\n\n.btn-primary:hover {\n  background-color: #1f5452;\n  color: #FFFFFF;\n  margin-left: 20px;\n  border: none;\n}\n\n.btn-primary.active, .btn-primary:active, .open>.dropdown-toggle.btn-primary {\n  background-color: #1f5452;\n  color: #FFFFFF;\n}\n\n.btn-primary.focus, .btn-primary:focus {\n  background-color: #0a7a74;\n  color: #FFFFFF;\n}\n\n@media (min-width: 700px) {\n  .row .table-col {\n    max-height: calc(100vh - 10px);\n    min-height: calc(100vh - 10px);\n    background-color: #f3efe4;\n    padding: 20px 10px 20px 10px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    max-width: calc(100vw - 20px);\n  }\n\n  .printTwo {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    background-color: #0a7a74;\n    min-height: 580px;\n  }\n\n  .row .inner-table {\n    max-height: calc(100vh - 70px);\n    overflow: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n\n  .row .upload-col {\n    background-color: #f3efe4;\n    padding: 20px 10px 20px 10px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    min-height:  calc(100vh - 10px);\n    max-height: calc(100vh - 10px);\n  }\n\n  .print-col {\n    width: 100vw;\n  }\n}\n\n@media (min-width: 1200px) {\n  .btn-default {\n    display: inline-block;\n  }\n\n  .btn-send {\n    display: block;\n  }\n\n  .row4 {\n    margin-top: 0px;\n  }\n\n  .printTwo {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    background-color: #0a7a74;\n    min-height: calc(100vh);\n  }\n\n  .row .table-col {\n    max-height: calc(100vh - 10px);\n    min-height: calc(100vh - 10px);\n    background-color: #f3efe4;\n    padding: 20px 10px 20px 10px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 32%;\n    margin-top: 60px;\n  }\n\n  .row .upload-col, .printToCart2, .dropdown-toggle, .printToCart1, .printToCart3, .Tisch, .anleitung {\n    display: block;\n  }\n\n  .print-col {\n    width: 33%;\n    margin-top: 70px;\n  }\n\n  .row .upload-col {\n    background-color: #f3efe4;\n    padding: 20px 10px 20px 10px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    min-height: calc(100vh - 10px);\n    max-height: calc(100vh - 10px);\n    margin-top: 60px;\n  }\n\n  .row .inner-table {\n    max-height: calc(100vh - 70px);\n    overflow: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n\n}\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/tischplan.component.html":
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n  <title>Dashboard</title>\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no\">\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\" crossorigin=\"anonymous\">\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n  <script src=\"node_modules/core-js/client/shim.min.js\"></script>\n  <script src=\"<your-libs-directory>/object-assign.min.js\"></script>\n</head>\n<body>\n<div id=\"charge-error\" class=\"alert alert-danger <% if ( !errMsg ) { %> hidden <% } %>\">\n  <%= errMsg  %>\n</div>\n<div class=\"row\">\n  <div class=\"container-fluid\">\n    <app-navigation [newInformationElements]=\"newInformationElements\"\n                    [tablesOccupied]=\"tablesOccupied\"\n                    (getTablesOccupied)=\"tablesOccupied = $event\"\n                    (umsetzenExport)=\"umsetzenInfoVar = $event; umsetzen($event)\"\n                    [tablesTempAbreise]=\"tablesTempAbreise\"\n                    (abreisenExport)=\"abreiseTablePlusIndex = $event; abreisenRemoval($event)\"\n                    (termExport)=\"term = $event\">\n    </app-navigation><flash-messages></flash-messages>\n    <div class=\"col-xs-12 col-sm-8 col-lg-4 print-col\">\n      <app-departmentmenu\n        [buttonBgColor1]=\"buttonBgColor1\"\n        [buttonBgColor2]=\"buttonBgColor2\"\n        [buttonBgColor3]=\"buttonBgColor3\"\n        [buttonBgColor4]=\"buttonBgColor4\"\n        [buttonBgColor5]=\"buttonBgColor5\"\n        [buttonBgColor6]=\"buttonBgColor6\"\n        [fontColor1]=\"fontColor1\"\n        [fontColor2]=\"fontColor2\"\n        [fontColor3]=\"fontColor3\"\n        [fontColor4]=\"fontColor4\"\n        [fontColor5]=\"fontColor5\"\n        [fontColor6]=\"fontColor6\"\n        [showBauernStubnBool]=\"showBauernStubnBool\"\n        [showBerglerBool]=\"showBerglerBool\"\n        [showEdelweissBool]=\"showEdelweissBool\"\n        [showWaeldlerBool]=\"showWaeldlerBool\"\n        [showTeeStubeBool]=\"showTeeStubeBool\"\n        [showAlleBool]=\"showAlleBool\"\n        (showBauernStubnBoolChange)=\"showBauernStubnBool=$event\"\n        (showBerglerBoolChange)=\"showBerglerBool=$event\"\n        (showEdelweissBoolChange)=\"showEdelweissBool=$event\"\n        (showWaeldlerBoolChange)=\"showWaeldlerBool=$event\"\n        (showTeeStubeBoolChange)=\"showTeeStubeBool=$event\"\n        (showAlleBoolChange)=\"showAlleBool=$event\"\n        [buttonBgColorInfoForm]=\"buttonBgColorInfoForm\"\n        [buttonBgColorNotizForm]=\"buttonBgColorNotizForm\"\n        [fontColorInfoForm]=\"fontColorInfoForm\"\n        [fontColorNotizForm]=\"fontColorNotizForm\"\n        [showNotizFormBool]=\"showNotizFormBool\"\n        [showInfoFormBool]=\"showInfoFormBool\"\n        (showInfoFormBoolChange)=\"showInfoFormBool=$event\"\n        (showNotizFormBoolChange)=\"showNotizFormBool=$event\"\n        (showTablePlanBoolChange)=\"showTablePlanBool=$event\"\n        [showTablePlanBool]=\"showTablePlanBool\"\n        [buttonBgColorShowTablePlan]=\"buttonBgColorShowTablePlan\"\n        [fontColorShowTablePlan]=\"fontColorShowTablePlan\">\n      </app-departmentmenu><flash-messages></flash-messages>\n      <app-form [newInformationElements]=\"newInformationElements\"\n                [dateGenerated]=\"dateGenerated\"\n                [title]=\"title\"\n                [roomNumber]=\"roomNumber\"\n                [tableNumber]=\"tableNumber\"\n                [employee]=\"employee\"\n                [nameTraceInput]=\"nameTraceInput\"\n                [tablesBauernstube]=\"tablesBauernstube\"\n                [tablesBerglerStubeHubertusStube]=\"tablesBerglerStubeHubertusStube\"\n                [tablesEdelweissKaminStube]=\"tablesEdelweissKaminStube\"\n                [tablesTeestubeTeelounge]=\"tablesTeestubeTeelounge\"\n                [tablesWaeldlerStubeKristallStube]=\"tablesWaeldlerStubeKristallStube\"\n                [showNotizFormBool]=\"showNotizFormBool\"\n                [showInfoFormBool]=\"showInfoFormBool\"\n                [notizElements]=\"notizElements\"\n                (notizResponse)=\"notizElements=$event\"\n                [showBauernStubnBool]=\"showBauernStubnBool\"\n                [showBerglerBool]=\"showBerglerBool\"\n                [showEdelweissBool]=\"showEdelweissBool\"\n                [showWaeldlerBool]=\"showWaeldlerBool\"\n                [showTeeStubeBool]=\"showTeeStubeBool\"\n                [showAlleBool]=\"showAlleBool\">\n      </app-form>\n      <app-tableplan [tablesBauernstube]=\"tablesBauernstube\"\n                     [tablesBerglerStubeHubertusStube]=\"tablesBerglerStubeHubertusStube\"\n                     [tablesEdelweissKaminStube]=\"tablesEdelweissKaminStube\"\n                     [tablesTeestubeTeelounge]=\"tablesTeestubeTeelounge\"\n                     [tablesWaeldlerStubeKristallStube]=\"tablesWaeldlerStubeKristallStube\"\n                     [showBauernStubnBool]=\"showBauernStubnBool\"\n                     [showBerglerBool]=\"showBerglerBool\"\n                     [showEdelweissBool]=\"showEdelweissBool\"\n                     [showWaeldlerBool]=\"showWaeldlerBool\"\n                     [showTeeStubeBool]=\"showTeeStubeBool\"\n                     [showAlleBool]=\"showAlleBool\"\n                     (movedBauernstube)=\"tablesBauernstube = $event\"\n                     (movedBerglerStubeHubertusStube)=\"tablesBerglerStubeHubertusStube = $event\"\n                     (movedEdelweissKaminStube)=\"tablesEdelweissKaminStube = $event\"\n                     (movedTeestubeTeelounge)=\"tablesTeestubeTeelounge = $event\"\n                     (movedWaeldlerStubeKristallStube)=\"tablesWaeldlerStubeKristallStube = $event\"\n                     [showTablePlanBool]=\"showTablePlanBool\">\n      </app-tableplan>\n    </div>\n    <div class=\"col-xs-12 col-lg-4 upload-col\">\n      <div class=\"outer-cards\">\n        <h3>Im-Haus-Liste</h3>\n        <app-im-haus-liste [imHausListeElemente]=\"imHausListeElemente\"></app-im-haus-liste>\n        <h3>Anreise-Liste</h3>\n        <app-anreise-liste [anreiseListeElemente]=\"anreiseListeElemente\"></app-anreise-liste>\n        <h3>Traces-Liste</h3>\n        <app-traces-liste [tracesListeElemente]=\"tracesListeElemente\" ></app-traces-liste>\n      </div>\n    </div>\n\n    <div class=\"col-xs-12 col-sm-4 col-lg-4 table-col\">\n      <h3 >Tisch Übersicht</h3>\n        <div class=\"inner-table\" style=\"padding: 0px 0px 0px 0px;\">\n          <div class=\"row3\">\n            <div class='wrapper' id=\"wrapper\">\n              <app-departments [tablesBauernstube]=\"tablesBauernstube\"\n                               [tablesBerglerStubeHubertusStube]=\"tablesBerglerStubeHubertusStube\"\n                               [tablesEdelweissKaminStube]=\"tablesEdelweissKaminStube\"\n                               [tablesTeestubeTeelounge]=\"tablesTeestubeTeelounge\"\n                               [tablesWaeldlerStubeKristallStube]=\"tablesWaeldlerStubeKristallStube\"\n                               [showBauernStubnBool]=\"showBauernStubnBool\"\n                               [showBerglerBool]=\"showBerglerBool\"\n                               [showEdelweissBool]=\"showEdelweissBool\"\n                               [showWaeldlerBool]=\"showWaeldlerBool\"\n                               [showTeeStubeBool]=\"showTeeStubeBool\"\n                               (dispensedBauernstube)=\"tablesBauernstube=$event\"\n                               (dispensedBerglerStubeHubertusStube)=\"tablesBerglerStubeHubertusStube=$event\"\n                               (dispensedEdelweissKaminStube)=\"tablesEdelweissKaminStube=$event\"\n                               (dispensedTeestubeTeelounge)=\"tablesTeestubeTeelounge=$event\"\n                               (dispensedWaeldlerStubeKristallStube)=\"tablesWaeldlerStubeKristallStube=$event\"\n                               (infoAddedBauernstube)=\"tablesBauernstube=$event\"\n                               (infoAddedBerglerStubeHubertusStube)=\"tablesBerglerStubeHubertusStube=$event\"\n                               (infoAddedEdelweissKaminStube)=\"tablesEdelweissKaminStube=$event\"\n                               (infoAddedTeestubeTeelounge)=\"tablesTeestubeTeelounge=$event\"\n                               (infoAddedWaeldlerStubeKristallStube)=\"tablesWaeldlerStubeKristallStube=$event\"\n                               [term]=\"term\"\n                               [showAlleBool]=\"showAlleBool\">\n              </app-departments>\n            </div>\n          </div>\n        </div>\n    </div>\n  </div>\n</div>\n</body>\n<app-print  [tables]=\"tables\"\n            [dateGeneratedListe]=\"dateGeneratedListe\"\n            [tablesBauernstube]=\"tablesBauernstube\"\n            [tablesBerglerStubeHubertusStube]=\"tablesBerglerStubeHubertusStube\"\n            [tablesEdelweissKaminStube]=\"tablesEdelweissKaminStube\"\n            [tablesTeestubeTeelounge]=\"tablesTeestubeTeelounge\"\n            [tablesWaeldlerStubeKristallStube]=\"tablesWaeldlerStubeKristallStube\"\n            [showBauernStubnBool]=\"showBauernStubnBool\"\n            [showBerglerBool]=\"showBerglerBool\"\n            [showEdelweissBool]=\"showEdelweissBool\"\n            [showWaeldlerBool]=\"showWaeldlerBool\"\n            [showTeeStubeBool]=\"showTeeStubeBool\"\n            (getTablesOccupied)=\"tablesOccupied = $event\"\n            (getTablesforAzListe)=\"tables = $event\">\n</app-print>\n</html>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/tischplan.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TischplanComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_tischplan_service__ = __webpack_require__("../../../../../src/app/services/tischplan.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_dragula__ = __webpack_require__("../../../../ng2-dragula/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__print_print_component__ = __webpack_require__("../../../../../src/app/components/digitalerTischplan/print/print.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__departmentmenu_departmentmenu_component__ = __webpack_require__("../../../../../src/app/components/digitalerTischplan/departmentmenu/departmentmenu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__form_form_component__ = __webpack_require__("../../../../../src/app/components/digitalerTischplan/form/form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__im_haus_liste_im_haus_liste_component__ = __webpack_require__("../../../../../src/app/components/digitalerTischplan/im-haus-liste/im-haus-liste.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__navigation_navigation_component__ = __webpack_require__("../../../../../src/app/components/digitalerTischplan/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__tableplan_tableplan_component__ = __webpack_require__("../../../../../src/app/components/digitalerTischplan/tableplan/tableplan.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__anreise_liste_anreise_liste_component__ = __webpack_require__("../../../../../src/app/components/digitalerTischplan/anreise-liste/anreise-liste.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__traces_liste_traces_liste_component__ = __webpack_require__("../../../../../src/app/components/digitalerTischplan/traces-liste/traces-liste.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__departments_departments_component__ = __webpack_require__("../../../../../src/app/components/digitalerTischplan/departments/departments.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var TischplanComponent = (function () {
    function TischplanComponent(tischplanService, http, _flashMessagesService, dragulaService) {
        var _this = this;
        this.tischplanService = tischplanService;
        this.http = http;
        this._flashMessagesService = _flashMessagesService;
        this.dragulaService = dragulaService;
        this.topValues = [];
        this.newInformationElements = [];
        this.tracesListeElemente = [];
        this.tables = [];
        this.uniqueTables = [];
        this.tableNumbers = [];
        this.tablesTemp = [];
        this.tempTablesArray = [];
        this.tempTablesArray2 = [];
        this.tempTablesArray1 = [];
        this.tempTablesArray3 = [];
        this.tablesBerglerStubeHubertusStube = [];
        this.tablesBauernstube = [];
        this.tablesWaeldlerStubeKristallStube = [];
        this.tablesEdelweissKaminStube = [];
        this.tablesTeestubeTeelounge = [];
        this.filesToUpload = [];
        this.isDropped = [];
        this.notizElements = [];
        this.date = [];
        this.parts = [];
        this.parsedDate = [];
        this.tableInformation = [];
        this.tablesTempAbreise = [];
        this.buttonBgColorInfoForm = "0a7a74";
        this.buttonBgColorNotizForm = "0a7a74";
        this.fontColorInfoForm = "f3efe4";
        this.fontColorNotizForm = "f3efe4";
        this.buttonBgColorShowTablePlan = "0a7a74";
        this.fontColorShowTablePlan = "f3efe4";
        this.dateGeneratedListe = new Date();
        this.buttonBgColor1 = "0a7a74";
        this.buttonBgColor2 = "0a7a74";
        this.buttonBgColor3 = "0a7a74";
        this.buttonBgColor4 = "0a7a74";
        this.buttonBgColor5 = "0a7a74";
        this.buttonBgColor6 = "0a7a74";
        this.fontColor1 = "f3efe4";
        this.fontColor2 = "f3efe4";
        this.fontColor3 = "f3efe4";
        this.fontColor4 = "f3efe4";
        this.fontColor5 = "f3efe4";
        this.fontColor6 = "f3efe4";
        this.tablesOccupied = 0;
        this.backgroundColor = "ffffff";
        this.showBauernStubnBool = false;
        this.showBerglerBool = false;
        this.showWaeldlerBool = false;
        this.showEdelweissBool = false;
        this.showTeeStubeBool = false;
        this.tischplanService.getImHausListe()
            .subscribe(function (imHausListeElemente) {
            //console.log('IM-HAUS-LISTE before:');
            //console.log(imHausListeElemente);
            imHausListeElemente.sort(function (a, b) {
                if (a.name < b.name)
                    return -1;
                if (a.name > b.name)
                    return 1;
                return 0;
            });
            _this.imHausListeElemente = imHausListeElemente;
            console.log('IM-HAUS-LISTE:');
            console.log(_this.imHausListeElemente);
        });
        this.tischplanService.getAnreiseListe()
            .subscribe(function (anreiseListeElemente) {
            anreiseListeElemente.sort(function (a, b) {
                if (a.name < b.name)
                    return -1;
                if (a.name > b.name)
                    return 1;
                return 0;
            });
            _this.anreiseListeElemente = anreiseListeElemente;
            console.log(_this.anreiseListeElemente);
        });
        this.tischplanService.getNotizElements()
            .subscribe(function (informationElemente) {
            if (informationElemente === null) {
                return;
            }
            else {
                _this.notizElements = informationElemente;
                console.log(_this.notizElements);
            }
        });
        this.tischplanService.getTables()
            .subscribe(function (tables) {
            console.log("TABLES LENGTH: " + tables.length);
            if (tables === null) {
                return;
            }
            else {
                for (var a = 0; a < tables.length; a++) {
                    if (tables[a].department === "Bauernstube") {
                        _this.tablesBauernstube = tables[a].tables;
                    }
                    else if (tables[a].department === "edelweissKaminStube") {
                        _this.tablesEdelweissKaminStube = tables[a].tables;
                        console.log('Test' + JSON.stringify(_this.tablesEdelweissKaminStube));
                    }
                    else if (tables[a].department === "berglerStubeHubertusStube") {
                        _this.tablesBerglerStubeHubertusStube = tables[a].tables;
                    }
                    else if (tables[a].department === "waeldlerStubeKristallStube") {
                        _this.tablesWaeldlerStubeKristallStube = tables[a].tables;
                    }
                    else if (tables[a].department === "teestubeTeelounge") {
                        _this.tablesTeestubeTeelounge = tables[a].tables;
                    }
                }
            }
            console.log(_this.tablesBauernstube);
            console.log(_this.tablesEdelweissKaminStube);
            console.log(_this.tablesBerglerStubeHubertusStube);
            console.log(_this.tablesWaeldlerStubeKristallStube);
            console.log(_this.tablesTeestubeTeelounge);
            _this.tables = _this.tables.concat(_this.tablesBauernstube).concat(_this.tablesTeestubeTeelounge).concat(_this.tablesBerglerStubeHubertusStube).concat(_this.tablesEdelweissKaminStube).concat(_this.tablesWaeldlerStubeKristallStube);
            _this.changeBgColorIfAnreise(tables);
            _this.printComponent.formatAzListe(_this.tables);
            //this.dispenseIfAbreise(tables);
        });
        this.tischplanService.getTracesListe()
            .subscribe(function (tracesListeElemente) {
            console.log(tracesListeElemente);
            tracesListeElemente.sort(function (a, b) {
                if (a.name < b.name)
                    return -1;
                if (a.name > b.name)
                    return 1;
                return 0;
            });
            //console.log("2:" + tracesListeElemente[0].data[0]);
            //console.log(tracesListeElemente[0].data.length);
            //this.tracesListeElemente = tracesListeElemente[0].data;
            _this.tracesListeElemente = tracesListeElemente;
            //this.formatTracesListeElements(tracesListeElemente);
        });
        this.tischplanService.getInformationElements()
            .subscribe(function (informationElemente) {
            if (informationElemente === null) {
                return;
            }
            else {
                _this.newInformationElements = informationElemente;
                console.log(_this.newInformationElements);
            }
        });
        dragulaService.drag.subscribe(function (value) {
            console.log("drag: " + value[0]);
            _this.onDrag(value.slice(1));
        });
        dragulaService.drop.subscribe(function (value) {
            console.log("drop: " + value[0]);
            _this.onDrop(value.slice(1));
        });
        dragulaService.over.subscribe(function (value) {
            console.log("over: " + value[0]);
            _this.onOver(value.slice(1));
        });
        dragulaService.out.subscribe(function (value) {
            console.log("out: " + value[0]);
            _this.onOut(value.slice(1));
        });
    }
    TischplanComponent.prototype.onDrag = function (args) {
        var e = args[0], el = args[1];
    };
    TischplanComponent.prototype.onDrop = function (args) {
        var e = args[0], el = args[1];
        console.log("Args = " + JSON.stringify(args));
        console.log("Args1 = " + JSON.stringify(args[1]));
        console.log("Args2 = " + JSON.stringify(args[2]));
        console.log("Args3 = " + JSON.stringify(args[3]));
        console.log("Args4 = " + JSON.stringify(args[4]));
        console.log("e = " + JSON.stringify(e));
        console.log("el = " + JSON.stringify(el));
        var information = args[0].innerText;
        //console.log("information: " + information);
        var informationElements = information.split(/\n/);
        //console.log(informationElements);
        var informationElements2 = [];
        for (var s = 0; s < informationElements.length; s++) {
            informationElements2.push(informationElements[s].split(/:(.+)/)[1]);
            if (informationElements2[s] === undefined) {
                informationElements2[s] = informationElements[s];
            }
        }
        //console.log(informationElements2);
        var department = JSON.stringify(args[1].id);
        //console.log("departement" + department);
        var departementSubstring = department.substring(1, department.length - 1);
        //console.log("departementSubstring: " + departementSubstring);
        var tableNumber = args[1].innerText;
        //console.log("tableNumber: " + tableNumber);
        var tableNumberSubstring = tableNumber.toString().match(/\d+/);
        var numbers = tableNumber.match(/\d+/g);
        //console.log("numbers: " + numbers);
        var arrayIndex = numbers[1];
        //console.log("arrayIndex: " + arrayIndex);
        //console.log("tableNumberSubstring: " + tableNumberSubstring);
        var dataString = [];
        dataString.push(information + departementSubstring + tableNumberSubstring);
        var jBefore = tableNumber.toString().match(/\d+/g);
        var j = jBefore[1];
        //let j = jArray[1];
        var addPlaceholderDataString = [];
        addPlaceholderDataString.push(departementSubstring);
        addPlaceholderDataString.push(tableNumberSubstring);
        console.log('j ===================>>>>>>>>>>>' + addPlaceholderDataString + 'END');
        //console.log(departementSubstring);
        //console.log(tableNumberSubstring);
        this.departmentsComponent.addInformationToTable(dataString, arrayIndex);
        this.departmentsComponent.occupyTableOnDrop(dataString, arrayIndex);
        this.imHausListeComponent.updateImHausListeElement(informationElements2);
        this.anreiseListeComponent.updateAnreiseListeElement(informationElements2);
        this.tracesListeComponent.updateTracesListeElement(informationElements2);
    };
    TischplanComponent.prototype.onOver = function (args) {
        var e = args[0], el = args[1], container = args[2];
        // do something
    };
    TischplanComponent.prototype.onOut = function (args) {
        var e = args[0], el = args[1], container = args[2];
        // do something
    };
    TischplanComponent.prototype.ngOnInit = function () {
        // this.renderer.invokeElementMethod(this.input.nativeElement, 'focus');
    };
    TischplanComponent.prototype.showBauernStubn = function () {
        this.departmentmenuComponent.showBauernStubn();
    };
    TischplanComponent.prototype.showBergler = function () {
        this.departmentmenuComponent.showBergler();
    };
    TischplanComponent.prototype.showWaeldler = function () {
        this.departmentmenuComponent.showWaeldler();
    };
    TischplanComponent.prototype.showEdelweiss = function () {
        this.departmentmenuComponent.showEdelweiss();
    };
    TischplanComponent.prototype.showTeestube = function () {
        this.departmentmenuComponent.showTeestube();
    };
    TischplanComponent.prototype.moveTable = function (table, j) {
        this.tableplanComponent.moveTable(table, j);
    };
    TischplanComponent.prototype.sendInformation = function (event) {
        this.formComponent.sendInformation(event);
    };
    TischplanComponent.prototype.delete = function (informationElement, j, event) {
        this.navigationComponent.delete(informationElement, j, event);
    };
    TischplanComponent.prototype.changeBgColorIfAnreise = function (tables) {
        this.departmentsComponent.changeBgColorIfAnreise(tables);
    };
    TischplanComponent.prototype.abreisenRemoval = function () {
        this.departmentsComponent.occupy(this.abreiseTablePlusIndex.abreisenExport, this.abreiseTablePlusIndex.b);
    };
    TischplanComponent.prototype.umsetzen = function () {
        var _this = this;
        this.departmentsComponent.addInformationToTable(this.umsetzenInfoVar.tableInformationExport, this.umsetzenInfoVar.indexZiel);
        this.departmentsComponent.occupyTableOnDrop(this.umsetzenInfoVar.tableToMove, this.umsetzenInfoVar.indexZiel);
        setTimeout(function () {
            _this.departmentsComponent.occupy(_this.umsetzenInfoVar.tableToMove, _this.umsetzenInfoVar.indexQuell);
        }, 2000);
    };
    return TischplanComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5__print_print_component__["a" /* PrintComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__print_print_component__["a" /* PrintComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__print_print_component__["a" /* PrintComponent */]) === "function" && _a || Object)
], TischplanComponent.prototype, "printComponent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_6__departmentmenu_departmentmenu_component__["a" /* DepartmentmenuComponent */]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__departmentmenu_departmentmenu_component__["a" /* DepartmentmenuComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__departmentmenu_departmentmenu_component__["a" /* DepartmentmenuComponent */]) === "function" && _b || Object)
], TischplanComponent.prototype, "departmentmenuComponent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_7__form_form_component__["a" /* FormComponent */]),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__form_form_component__["a" /* FormComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__form_form_component__["a" /* FormComponent */]) === "function" && _c || Object)
], TischplanComponent.prototype, "formComponent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_13__departments_departments_component__["a" /* DepartmentsComponent */]),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_13__departments_departments_component__["a" /* DepartmentsComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_13__departments_departments_component__["a" /* DepartmentsComponent */]) === "function" && _d || Object)
], TischplanComponent.prototype, "departmentsComponent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_8__im_haus_liste_im_haus_liste_component__["a" /* ImHausListeComponent */]),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_8__im_haus_liste_im_haus_liste_component__["a" /* ImHausListeComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__im_haus_liste_im_haus_liste_component__["a" /* ImHausListeComponent */]) === "function" && _e || Object)
], TischplanComponent.prototype, "imHausListeComponent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_9__navigation_navigation_component__["a" /* NavigationComponent */]),
    __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_9__navigation_navigation_component__["a" /* NavigationComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__navigation_navigation_component__["a" /* NavigationComponent */]) === "function" && _f || Object)
], TischplanComponent.prototype, "navigationComponent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_10__tableplan_tableplan_component__["a" /* TableplanComponent */]),
    __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_10__tableplan_tableplan_component__["a" /* TableplanComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__tableplan_tableplan_component__["a" /* TableplanComponent */]) === "function" && _g || Object)
], TischplanComponent.prototype, "tableplanComponent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_11__anreise_liste_anreise_liste_component__["a" /* AnreiseListeComponent */]),
    __metadata("design:type", typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_11__anreise_liste_anreise_liste_component__["a" /* AnreiseListeComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__anreise_liste_anreise_liste_component__["a" /* AnreiseListeComponent */]) === "function" && _h || Object)
], TischplanComponent.prototype, "anreiseListeComponent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_12__traces_liste_traces_liste_component__["a" /* TracesListeComponent */]),
    __metadata("design:type", typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_12__traces_liste_traces_liste_component__["a" /* TracesListeComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12__traces_liste_traces_liste_component__["a" /* TracesListeComponent */]) === "function" && _j || Object)
], TischplanComponent.prototype, "tracesListeComponent", void 0);
TischplanComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'tischplan',
        template: __webpack_require__("../../../../../src/app/components/digitalerTischplan/tischplan.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digitalerTischplan/tischplan.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_1__services_tischplan_service__["a" /* TischplanService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_tischplan_service__["a" /* TischplanService */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_dragula__["DragulaService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_dragula__["DragulaService"]) === "function" && _o || Object])
], TischplanComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
//# sourceMappingURL=tischplan.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/traces-liste/traces-liste.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row1\">\n  <div class='wrapper'>\n    <div *ngFor=\"let tracesListeElement of tracesListeElemente; let t = index;\">\n      <div class='cards-container' id='container3' [dragula]='\"evented-bag\"' >\n        <div class=\"card\" id=\"card3\" [ngStyle]=\"{'background-color': '#' + tracesListeElement.bgColor}\">\n          <p><b>Zimmernummer:</b> {{tracesListeElement.zimmernummer}}<br>\n            <b>Name:</b> {{tracesListeElement.name}}<br>\n            <b>Personen:</b> {{tracesListeElement.personenAnzahl}}<br>\n            <b>Anreise:</b> {{tracesListeElement.anreise}}<br>\n            <b>Abreise:</b> {{tracesListeElement.abreise}}<br>\n            <b>Trace:</b> {{tracesListeElement.trace}}<br>\n          </p>\n          <div *ngIf=\"tracesListeElement.bgColor === '0a7a74'\">\n            <i class=\"fa fa-check\" style=\"float: right; color: white\"></i>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/traces-liste/traces-liste.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TracesListeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_tischplan_service__ = __webpack_require__("../../../../../src/app/services/tischplan.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TracesListeComponent = (function () {
    function TracesListeComponent(tischplanService) {
        this.tischplanService = tischplanService;
    }
    TracesListeComponent.prototype.ngOnInit = function () {
    };
    TracesListeComponent.prototype.updateTracesListeElement = function (informationElements2) {
        this.tischplanService.updateTracesListeElement(informationElements2)
            .subscribe(function (response) {
            //this.imHausListeElemente = response;
            console.log('updateTracesListeElement response: ');
            console.log(response);
        });
    };
    return TracesListeComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tracesListeElemente'),
    __metadata("design:type", Array)
], TracesListeComponent.prototype, "tracesListeElemente", void 0);
TracesListeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-traces-liste',
        template: __webpack_require__("../../../../../src/app/components/digitalerTischplan/traces-liste/traces-liste.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digitalerTischplan/tischplan.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_tischplan_service__["a" /* TischplanService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_tischplan_service__["a" /* TischplanService */]) === "function" && _a || Object])
], TracesListeComponent);

var _a;
//# sourceMappingURL=traces-liste.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/tischplan.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TischplanService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TischplanService = (function () {
    function TischplanService(http) {
        this.http = http;
        console.log('Task service initialized!');
    }
    TischplanService.prototype.getImHausListe = function () {
        return this.http.get('imHausListe')
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.getAnreiseListe = function () {
        return this.http.get('anreiseListe')
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.getTracesListe = function () {
        return this.http.get('tracesListe')
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.getTables = function () {
        return this.http.get('tables')
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.getInformationElements = function () {
        return this.http.get('information')
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.occupyTable = function (dataString) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('occupyTable', dataString, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.moveTable = function (dataString) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('moveTable', dataString, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.dispenseTable = function (tableSonnbergZirbn) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('dispenseTable', tableSonnbergZirbn, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.removePlaceholder = function (dataString) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('removePlaceholder', dataString, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.addPlaceholder = function (tableSonnbergZirbn) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('addPlaceholder', tableSonnbergZirbn, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.addInformationToTable = function (dataString) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('addInformationToTable', dataString, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.sendInformation = function (newInformation) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        console.log(headers);
        return this.http.post('newInformationToTables', newInformation, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.sendInformationToBox = function (newInformation) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        console.log(headers);
        return this.http.post('newInformationToBox', newInformation, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.deleteInformationElement = function (informationElement) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        console.log(headers);
        return this.http.post('deleteInformationElement', informationElement, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.updateImHausListeElement = function (informationElements2) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        console.log(headers);
        return this.http.post('updateImHausListeElement', informationElements2, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.updateAnreiseListeElement = function (informationElements2) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        console.log(headers);
        return this.http.post('updateAnreiseListeElement', informationElements2, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.updateTracesListeElement = function (informationElements2) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        console.log(headers);
        return this.http.post('updateTracesListeElement', informationElements2, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.sendInformationToNotizBlock = function (newInformation) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        console.log(headers);
        return this.http.post('newNotiz', newInformation, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.getNotizElements = function () {
        return this.http.get('getNotiz')
            .map(function (res) { return res.json(); });
    };
    return TischplanService;
}());
TischplanService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], TischplanService);

var _a;
//# sourceMappingURL=tischplan.service.js.map

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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map