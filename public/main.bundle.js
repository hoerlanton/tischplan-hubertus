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

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var tischplan_service_1 = __webpack_require__("../../../../../src/app/services/tischplan.service.ts");
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'App works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        providers: [tischplan_service_1.TischplanService],
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var tischplan_component_1 = __webpack_require__("../../../../../src/app/components/digitalerTischplan/tischplan.component.ts");
var angular2_flash_messages_1 = __webpack_require__("../../../../angular2-flash-messages/index.js");
var ng2_dragula_1 = __webpack_require__("../../../../ng2-dragula/index.js");
var dropdown_1 = __webpack_require__("../../../../ngx-bootstrap/dropdown/index.js");
var im_haus_liste_component_1 = __webpack_require__("../../../../../src/app/components/digitalerTischplan/im-haus-liste/im-haus-liste.component.ts");
var tableplan_component_1 = __webpack_require__("../../../../../src/app/components/digitalerTischplan/tableplan/tableplan.component.ts");
var navigation_component_1 = __webpack_require__("../../../../../src/app/components/digitalerTischplan/navigation/navigation.component.ts");
var print_component_1 = __webpack_require__("../../../../../src/app/components/digitalerTischplan/print/print.component.ts");
var form_component_1 = __webpack_require__("../../../../../src/app/components/digitalerTischplan/form/form.component.ts");
var departments_component_1 = __webpack_require__("../../../../../src/app/components/digitalerTischplan/departments/departments.component.ts");
var departmentmenu_component_1 = __webpack_require__("../../../../../src/app/components/digitalerTischplan/departmentmenu/departmentmenu.component.ts");
var bauernstube_component_1 = __webpack_require__("../../../../../src/app/components/digitalerTischplan/departments/bauernstube/bauernstube.component.ts");
var bergler_stube_hubertus_stube_component_1 = __webpack_require__("../../../../../src/app/components/digitalerTischplan/departments/bergler-stube-hubertus-stube/bergler-stube-hubertus-stube.component.ts");
var waeldler_stube_kristall_stube_component_1 = __webpack_require__("../../../../../src/app/components/digitalerTischplan/departments/waeldler-stube-kristall-stube/waeldler-stube-kristall-stube.component.ts");
var edelweiss_kamin_stube_component_1 = __webpack_require__("../../../../../src/app/components/digitalerTischplan/departments/edelweiss-kamin-stube/edelweiss-kamin-stube.component.ts");
var teestube_teelounge_component_1 = __webpack_require__("../../../../../src/app/components/digitalerTischplan/departments/teestube-teelounge/teestube-teelounge.component.ts");
var terasse_component_1 = __webpack_require__("../../../../../src/app/components/digitalerTischplan/departments/terasse/terasse.component.ts");
var terrasse_edelweiss_component_1 = __webpack_require__("../../../../../src/app/components/digitalerTischplan/departments/terrasse-edelweiss/terrasse-edelweiss.component.ts");
var alle_component_1 = __webpack_require__("../../../../../src/app/components/digitalerTischplan/departments/alle/alle.component.ts");
var ng2_search_filter_1 = __webpack_require__("../../../../ng2-search-filter/dist/index.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var login_component_1 = __webpack_require__("../../../../../src/app/components/digitalerTischplan/login/login.component.ts");
var register_component_1 = __webpack_require__("../../../../../src/app/components/digitalerTischplan/register/register.component.ts");
var profile_component_1 = __webpack_require__("../../../../../src/app/components/digitalerTischplan/profile/profile.component.ts");
var auth_guard_1 = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
var validate_service_1 = __webpack_require__("../../../../../src/app/services/validate.service.ts");
var auth_service_1 = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var appRoutes = [
    { path: '', component: login_component_1.LoginComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'dashboard', component: tischplan_component_1.TischplanComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: 'profile', component: profile_component_1.ProfileComponent, canActivate: [auth_guard_1.AuthGuard] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            tischplan_component_1.TischplanComponent,
            im_haus_liste_component_1.ImHausListeComponent,
            tableplan_component_1.TableplanComponent,
            navigation_component_1.NavigationComponent,
            print_component_1.PrintComponent,
            form_component_1.FormComponent,
            departments_component_1.DepartmentsComponent,
            departmentmenu_component_1.DepartmentmenuComponent,
            bauernstube_component_1.BauernstubeComponent,
            terasse_component_1.TerasseComponent,
            terrasse_edelweiss_component_1.TerrasseEdelweissComponent,
            bergler_stube_hubertus_stube_component_1.BerglerStubeHubertusStubeComponent,
            waeldler_stube_kristall_stube_component_1.WaeldlerStubeKristallStubeComponent,
            edelweiss_kamin_stube_component_1.EdelweissKaminStubeComponent,
            teestube_teelounge_component_1.TeestubeTeeloungeComponent,
            alle_component_1.AlleComponent,
            login_component_1.LoginComponent,
            register_component_1.RegisterComponent,
            profile_component_1.ProfileComponent
        ],
        imports: [
            forms_1.FormsModule,
            http_1.HttpModule,
            angular2_flash_messages_1.FlashMessagesModule,
            ng2_dragula_1.DragulaModule,
            forms_1.ReactiveFormsModule,
            platform_browser_1.BrowserModule,
            dropdown_1.BsDropdownModule.forRoot(),
            ng2_search_filter_1.Ng2SearchPipeModule,
            router_1.RouterModule.forRoot(appRoutes)
        ],
        providers: [validate_service_1.ValidateService, auth_service_1.AuthService, auth_guard_1.AuthGuard],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map

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

module.exports = "<div class=\"row4\" style=\"min-height: 80px;\">\n  <div class=\"col-md-3 col-xs-3\" style=\"width: 35%; min-height: 80px\">\n    <div class=\"btn-group-departments\" style=\" width: auto; margin: 0px 10px 5px 0px; float: left; text-align: right; display:table-cell; vertical-align:middle;\" dropdown>\n      <button dropdownToggle type=\"button\" style=\" color: #FFFFFF; border: none\" [ngStyle]=\"{'background-color': '#' + buttonBgColorDropdownToggle}\"   (mouseenter)=\"mouseEnterDropdownToggle()\"  (mouseleave)=\"mouseLeaveDropdownToggle()\" class=\"btn btn-group-departments\">\n        <div *ngIf=\"showAbteilungen\">\n          Abteilungen <i class=\"fa fa-th-large\" aria-hidden=\"true\"></i><span class=\"caret\"></span>\n        </div>\n        <div *ngIf=\"showAlleBool\">\n          Alle <i class=\"fa fa-th-large\" aria-hidden=\"true\"></i><span class=\"caret\"></span>\n        </div>\n        <div *ngIf=\"showBauernStubnBool\">\n          Bauernstube <br><i class=\"fa fa-th-large\" aria-hidden=\"true\"></i><span class=\"caret\"></span>\n        </div>\n        <div *ngIf=\"showBerglerBool\">\n          Berglerstube<br>HUBERTUS Stube <br><i class=\"fa fa-th-large\" aria-hidden=\"true\"></i><span class=\"caret\"></span>\n        </div>\n        <div *ngIf=\"showWaeldlerBool\">\n          Wäldlerstube<br>Kristallstube <br><i class=\"fa fa-th-large\" aria-hidden=\"true\"></i><span class=\"caret\"></span>\n        </div>\n        <div *ngIf=\"showEdelweissBool\">\n          EDELWEISS<br>Kaminstube <br><i class=\"fa fa-th-large\" aria-hidden=\"true\"></i><span class=\"caret\"></span>\n        </div>\n        <div *ngIf=\"showTeeStubeBool\">\n          TeeStube<br>Teelounge <br><i class=\"fa fa-th-large\" aria-hidden=\"true\"></i><span class=\"caret\"></span>\n        </div>\n        <div *ngIf=\"showTerasseBool\">\n          Terrasse <i class=\"fa fa-th-large\" aria-hidden=\"true\"></i><span class=\"caret\"></span>\n        </div>\n        <div *ngIf=\"showTerrasseEdelweissBool\">\n          Terrasse Edelweiss<i class=\"fa fa-th-large\" aria-hidden=\"true\"></i><span class=\"caret\"></span>\n        </div>\n      </button>\n      <ul *dropdownMenu class=\"dropdown-menu\"  role=\"menu\" style=\"overflow: auto; margin: 0 0 0 20px; width: 200px;\">\n        <li role=\"menuitem\" class=\"showBauernStubn\" style=\"padding: 10px\"  (click)=\"showBauernStubn()\" (mouseenter)=\"mouseEnterBauernStubn()\"  (mouseleave)=\"mouseLeaveBauernStubn()\" [ngStyle]=\"{'background-color': '#' + buttonBgColor1}\">\n          <p [ngStyle]=\"{'color': '#' + fontColor1}\">Bauernstube</p>\n        </li>\n        <li style=\"margin: 0px\" class=\"divider dropdown-divider\"></li>\n        <li role=\"menuitem\" class=\"showBergler\" style=\"padding: 10px\"  (click)=\"showBergler()\" (mouseenter)=\"mouseEnterBergler()\"  (mouseleave)=\"mouseLeaveBergler()\" [ngStyle]=\"{'background-color': '#' + buttonBgColor2}\">\n          <p [ngStyle]=\"{'color': '#' + fontColor2}\">Berglerstube<br>HUBERTUS Stube</p>\n        </li>\n        <li style=\"margin: 0px\" class=\"divider dropdown-divider\"></li>\n        <li role=\"menuitem\" class=\"showWaeldler\" style=\"padding: 10px\"  (click)=\"showWaeldler()\" (mouseenter)=\"mouseEnterWaeldler()\"  (mouseleave)=\"mouseLeaveWaeldler()\" [ngStyle]=\"{'background-color': '#' + buttonBgColor3}\">\n          <p [ngStyle]=\"{'color': '#' + fontColor3}\">Wäldlerstube<br>Kristallstube</p>\n        </li>\n        <li style=\"margin: 0px\" class=\"divider dropdown-divider\"></li>\n        <li role=\"menuitem\" class=\"showEdelweiss\" style=\"padding: 10px\" (click)=\"showEdelweiss()\" (mouseenter)=\"mouseEnterEdelweiss()\"  (mouseleave)=\"mouseLeaveEdelweiss()\" [ngStyle]=\"{'background-color': '#' + buttonBgColor4}\">\n          <p [ngStyle]=\"{'color': '#' + fontColor4}\">EDELWEISS<br>Kaminstube</p>\n        </li>\n        <li style=\"margin: 0px\" class=\"divider dropdown-divider\"></li>\n        <li role=\"menuitem\" class=\"showTeestube\" style=\"padding: 10px\"  (click)=\"showTeestube()\" (mouseenter)=\"mouseEnterTeestube()\"  (mouseleave)=\"mouseLeaveTeestube()\" [ngStyle]=\"{'background-color': '#' + buttonBgColor5}\">\n          <p [ngStyle]=\"{'color': '#' + fontColor5}\">TeeStube<br>Teelounge</p>\n        </li>\n        <li style=\"margin: 0px\" class=\"divider dropdown-divider\"></li>\n        <li role=\"menuitem\" class=\"showTerasse\" style=\"padding: 10px\"  (click)=\"showTerasse()\" (mouseenter)=\"mouseEnterTerasse()\"  (mouseleave)=\"mouseLeaveTerasse()\" [ngStyle]=\"{'background-color': '#' + buttonBgColor6}\">\n          <p [ngStyle]=\"{'color': '#' + fontColor6}\">Terrasse</p>\n        </li>\n        <li style=\"margin: 0px\" class=\"divider dropdown-divider\"></li>\n        <li role=\"menuitem\" class=\"showTerrasseEdelweiss\" style=\"padding: 10px\"  (click)=\"showTerrasseEdelweiss()\" (mouseenter)=\"mouseEnterTerrasseEdelweiss()\"  (mouseleave)=\"mouseLeaveTerrasseEdelweiss()\" [ngStyle]=\"{'background-color': '#' + buttonBgColor7}\">\n          <p [ngStyle]=\"{'color': '#' + fontColor7}\">Terrasse Edelweiss</p>\n        </li>\n        <li style=\"margin: 0px\" class=\"divider dropdown-divider\"></li>\n        <li role=\"menuitem\" class=\"showAlle\" style=\"padding: 10px\"  (click)=\"showAlle()\" (mouseenter)=\"mouseEnterAlle()\"  (mouseleave)=\"mouseLeaveAlle()\" [ngStyle]=\"{'background-color': '#' + buttonBgColor8}\">\n          <p [ngStyle]=\"{'color': '#' + fontColor8}\">Alle</p>\n        </li>\n        <li style=\"margin: 0px\" class=\"divider dropdown-divider\"></li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"col-md-3 col-xs-3\" style=\"min-height: 40px; width: 21%; border-radius: 3px\" (click)=\"showInfoForm()\"  (mouseenter)=\"mouseEnterShowInfoForm()\"  (mouseleave)=\"mouseLeaveShowInfoForm()\" [ngStyle]=\"{'background-color': '#' + buttonBgColorInfoForm}\">\n    <p style=\"margin: 8px 0px 0px 0px; text-align: center\" [ngStyle]=\"{'color': '#' + fontColorInfoForm}\">Trace</p>\n  </div>\n  <div class=\"col-md-3 col-xs-3\"  style=\"min-height: 40px; width: 21%; border-radius: 3px\" (click)=\"showNotizForm()\"  (mouseenter)=\"mouseEnterShowNotizForm()\"  (mouseleave)=\"mouseLeaveShowNotizForm()\" [ngStyle]=\"{'background-color': '#' + buttonBgColorNotizForm}\">\n    <p style=\"margin: 8px 0px 0px 0px; text-align: center\" [ngStyle]=\"{'color': '#' + fontColorNotizForm}\">Notiz</p>\n  </div>\n  <div class=\"col-md-3 col-xs-3\"  style=\"min-height: 40px; width: 21%; border-radius: 3px; padding-left: 5px\" (click)=\"showTablePlan()\"  (mouseenter)=\"mouseEnterShowTablePlan()\"  (mouseleave)=\"mouseLeaveShowTablePlan()\" [ngStyle]=\"{'background-color': '#' + buttonBgColorShowTablePlan}\">\n    <p style=\"margin: 8px 0px 0px 0px; text-align: center\" [ngStyle]=\"{'color': '#' + fontColorShowTablePlan}\">Tischplan</p>\n  </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/departmentmenu/departmentmenu.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var DepartmentmenuComponent = (function () {
    function DepartmentmenuComponent() {
        this.showBauernStubnBoolChange = new core_1.EventEmitter();
        this.showBerglerBoolChange = new core_1.EventEmitter();
        this.showEdelweissBoolChange = new core_1.EventEmitter();
        this.showWaeldlerBoolChange = new core_1.EventEmitter();
        this.showTeeStubeBoolChange = new core_1.EventEmitter();
        this.showTerasseBoolChange = new core_1.EventEmitter();
        this.showTerrasseEdelweissBoolChange = new core_1.EventEmitter();
        this.showAlleBoolChange = new core_1.EventEmitter();
        this.showNotizFormBoolChange = new core_1.EventEmitter();
        this.showInfoFormBoolChange = new core_1.EventEmitter();
        this.showTablePlanBoolChange = new core_1.EventEmitter();
        this.showAbteilungen = true;
        this.buttonBgColorShowTablePlan = "0a7a74";
        this.buttonBgColorInfoForm = "0a7a74";
        this.buttonBgColorNotizForm = "0a7a74";
        this.buttonBgColorDropdownToggle = "0a7a74";
    }
    DepartmentmenuComponent.prototype.ngOnInit = function () {
    };
    DepartmentmenuComponent.prototype.showBauernStubn = function () {
        //console.log("showBauernStubn!");
        this.showBauernStubnBool = true;
        this.showBerglerBool = false;
        this.showWaeldlerBool = false;
        this.showEdelweissBool = false;
        this.showTeeStubeBool = false;
        this.showTerasseBool = false;
        this.showTerrasseEdelweissBool = false;
        this.showAlleBool = false;
        this.showAbteilungen = false;
        if (this.buttonBgColor1 === "154846") {
            this.buttonBgColor1 = "0d2f2e";
            this.buttonBgColor2 = "0a7a74";
            this.buttonBgColor3 = "0a7a74";
            this.buttonBgColor4 = "0a7a74";
            this.buttonBgColor5 = "0a7a74";
            this.buttonBgColor6 = "0a7a74";
            this.buttonBgColor7 = "0a7a74";
            this.buttonBgColor8 = "0a7a74";
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
            this.fontColor7 = "f3efe4";
            this.fontColor8 = "f3efe4";
        }
        else {
            this.fontColor1 = "f3efe4";
        }
        this.showBauernStubnBoolChange.emit(this.showBauernStubnBool);
        this.showBerglerBoolChange.emit(this.showBerglerBool);
        this.showEdelweissBoolChange.emit(this.showEdelweissBool);
        this.showWaeldlerBoolChange.emit(this.showWaeldlerBool);
        this.showTeeStubeBoolChange.emit(this.showTeeStubeBool);
        this.showTerasseBoolChange.emit(this.showTerasseBool);
        this.showTerrasseEdelweissBoolChange.emit(this.showTerrasseEdelweissBool);
        this.showAlleBoolChange.emit(this.showAlleBool);
    };
    DepartmentmenuComponent.prototype.showBergler = function () {
        //console.log("showBergler!");
        this.showAbteilungen = false;
        this.showBauernStubnBool = false;
        this.showBerglerBool = true;
        //console.log(this.showBerglerBool);
        this.showWaeldlerBool = false;
        this.showEdelweissBool = false;
        this.showTeeStubeBool = false;
        this.showTerasseBool = false;
        this.showTerrasseEdelweissBool = false;
        this.showAlleBool = false;
        if (this.buttonBgColor2 === "154846") {
            this.buttonBgColor2 = "0d2f2e";
            this.buttonBgColor1 = "0a7a74";
            this.buttonBgColor3 = "0a7a74";
            this.buttonBgColor4 = "0a7a74";
            this.buttonBgColor5 = "0a7a74";
            this.buttonBgColor6 = "0a7a74";
            this.buttonBgColor7 = "0a7a74";
            this.buttonBgColor8 = "0a7a74";
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
            this.fontColor7 = "f3efe4";
            this.fontColor8 = "f3efe4";
        }
        else {
            this.fontColor2 = "f3efe4";
        }
        this.showBauernStubnBoolChange.emit(this.showBauernStubnBool);
        this.showBerglerBoolChange.emit(this.showBerglerBool);
        this.showEdelweissBoolChange.emit(this.showEdelweissBool);
        this.showWaeldlerBoolChange.emit(this.showWaeldlerBool);
        this.showTeeStubeBoolChange.emit(this.showTeeStubeBool);
        this.showTerasseBoolChange.emit(this.showTerasseBool);
        this.showTerrasseEdelweissBoolChange.emit(this.showTerrasseEdelweissBool);
        this.showAlleBoolChange.emit(this.showAlleBool);
    };
    DepartmentmenuComponent.prototype.showWaeldler = function () {
        //console.log("showWaeldler!");
        this.showBauernStubnBool = false;
        this.showBerglerBool = false;
        this.showWaeldlerBool = true;
        this.showEdelweissBool = false;
        this.showTeeStubeBool = false;
        this.showTerasseBool = false;
        this.showTerrasseEdelweissBool = false;
        this.showAlleBool = false;
        this.showAbteilungen = false;
        if (this.buttonBgColor3 === "154846") {
            this.buttonBgColor3 = "0d2f2e";
            this.buttonBgColor1 = "0a7a74";
            this.buttonBgColor2 = "0a7a74";
            this.buttonBgColor4 = "0a7a74";
            this.buttonBgColor5 = "0a7a74";
            this.buttonBgColor6 = "0a7a74";
            this.buttonBgColor7 = "0a7a74";
            this.buttonBgColor8 = "0a7a74";
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
            this.fontColor7 = "f3efe4";
            this.fontColor8 = "f3efe4";
        }
        else {
            this.fontColor3 = "f3efe4";
        }
        this.showBauernStubnBoolChange.emit(this.showBauernStubnBool);
        this.showBerglerBoolChange.emit(this.showBerglerBool);
        this.showEdelweissBoolChange.emit(this.showEdelweissBool);
        this.showWaeldlerBoolChange.emit(this.showWaeldlerBool);
        this.showTeeStubeBoolChange.emit(this.showTeeStubeBool);
        this.showTerasseBoolChange.emit(this.showTerasseBool);
        this.showTerrasseEdelweissBoolChange.emit(this.showTerrasseEdelweissBool);
        this.showAlleBoolChange.emit(this.showAlleBool);
    };
    DepartmentmenuComponent.prototype.showEdelweiss = function () {
        //console.log("showEdelweiss!");
        this.showBauernStubnBool = false;
        this.showBerglerBool = false;
        this.showWaeldlerBool = false;
        this.showEdelweissBool = true;
        this.showTeeStubeBool = false;
        this.showTerasseBool = false;
        this.showTerrasseEdelweissBool = false;
        this.showAlleBool = false;
        this.showAbteilungen = false;
        if (this.buttonBgColor4 === "154846") {
            this.buttonBgColor4 = "0d2f2e";
            this.buttonBgColor1 = "0a7a74";
            this.buttonBgColor2 = "0a7a74";
            this.buttonBgColor3 = "0a7a74";
            this.buttonBgColor5 = "0a7a74";
            this.buttonBgColor6 = "0a7a74";
            this.buttonBgColor7 = "0a7a74";
            this.buttonBgColor8 = "0a7a74";
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
            this.fontColor7 = "f3efe4";
            this.fontColor8 = "f3efe4";
        }
        else {
            this.fontColor4 = "f3efe4";
        }
        this.showBauernStubnBoolChange.emit(this.showBauernStubnBool);
        this.showBerglerBoolChange.emit(this.showBerglerBool);
        this.showEdelweissBoolChange.emit(this.showEdelweissBool);
        this.showWaeldlerBoolChange.emit(this.showWaeldlerBool);
        this.showTeeStubeBoolChange.emit(this.showTeeStubeBool);
        this.showTerasseBoolChange.emit(this.showTerasseBool);
        this.showTerrasseEdelweissBoolChange.emit(this.showTerrasseEdelweissBool);
        this.showAlleBoolChange.emit(this.showAlleBool);
    };
    DepartmentmenuComponent.prototype.showTeestube = function () {
        //console.log("showTeeStube!");
        this.showBauernStubnBool = false;
        this.showBerglerBool = false;
        this.showWaeldlerBool = false;
        this.showEdelweissBool = false;
        this.showTeeStubeBool = true;
        this.showTerasseBool = false;
        this.showTerrasseEdelweissBool = false;
        this.showAlleBool = false;
        this.showAbteilungen = false;
        if (this.buttonBgColor5 === "154846") {
            this.buttonBgColor5 = "0d2f2e";
            this.buttonBgColor1 = "0a7a74";
            this.buttonBgColor2 = "0a7a74";
            this.buttonBgColor3 = "0a7a74";
            this.buttonBgColor4 = "0a7a74";
            this.buttonBgColor6 = "0a7a74";
            this.buttonBgColor7 = "0a7a74";
            this.buttonBgColor8 = "0a7a74";
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
            this.fontColor7 = "f3efe4";
            this.fontColor8 = "f3efe4";
        }
        else {
            this.fontColor5 = "f3efe4";
        }
        this.showBauernStubnBoolChange.emit(this.showBauernStubnBool);
        this.showBerglerBoolChange.emit(this.showBerglerBool);
        this.showEdelweissBoolChange.emit(this.showEdelweissBool);
        this.showWaeldlerBoolChange.emit(this.showWaeldlerBool);
        this.showTeeStubeBoolChange.emit(this.showTeeStubeBool);
        this.showTerasseBoolChange.emit(this.showTerasseBool);
        this.showTerrasseEdelweissBoolChange.emit(this.showTerrasseEdelweissBool);
        this.showAlleBoolChange.emit(this.showAlleBool);
    };
    DepartmentmenuComponent.prototype.showTerasse = function () {
        //console.log("showAlle!");
        this.showBauernStubnBool = false;
        this.showBerglerBool = false;
        this.showWaeldlerBool = false;
        this.showEdelweissBool = false;
        this.showTeeStubeBool = false;
        this.showTerasseBool = true;
        this.showTerrasseEdelweissBool = false;
        this.showAlleBool = false;
        this.showAbteilungen = false;
        if (this.buttonBgColor6 === "154846") {
            this.buttonBgColor6 = "0d2f2e";
            this.buttonBgColor1 = "0a7a74";
            this.buttonBgColor2 = "0a7a74";
            this.buttonBgColor3 = "0a7a74";
            this.buttonBgColor4 = "0a7a74";
            this.buttonBgColor5 = "0a7a74";
            this.buttonBgColor7 = "0a7a74";
            this.buttonBgColor8 = "0a7a74";
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
            this.fontColor7 = "f3efe4";
            this.fontColor8 = "f3efe4";
        }
        else {
            this.fontColor6 = "f3efe4";
        }
        this.showBauernStubnBoolChange.emit(this.showBauernStubnBool);
        this.showBerglerBoolChange.emit(this.showBerglerBool);
        this.showEdelweissBoolChange.emit(this.showEdelweissBool);
        this.showWaeldlerBoolChange.emit(this.showWaeldlerBool);
        this.showTeeStubeBoolChange.emit(this.showTeeStubeBool);
        this.showTerasseBoolChange.emit(this.showTerasseBool);
        this.showTerrasseEdelweissBoolChange.emit(this.showTerrasseEdelweissBool);
        this.showAlleBoolChange.emit(this.showAlleBool);
    };
    DepartmentmenuComponent.prototype.showTerrasseEdelweiss = function () {
        //console.log("showAlle!");
        this.showBauernStubnBool = false;
        this.showBerglerBool = false;
        this.showWaeldlerBool = false;
        this.showEdelweissBool = false;
        this.showTeeStubeBool = false;
        this.showTerasseBool = false;
        this.showTerrasseEdelweissBool = true;
        this.showAlleBool = false;
        this.showAbteilungen = false;
        if (this.buttonBgColor7 === "154846") {
            this.buttonBgColor7 = "0d2f2e";
            this.buttonBgColor1 = "0a7a74";
            this.buttonBgColor2 = "0a7a74";
            this.buttonBgColor3 = "0a7a74";
            this.buttonBgColor4 = "0a7a74";
            this.buttonBgColor5 = "0a7a74";
            this.buttonBgColor6 = "0a7a74";
            this.buttonBgColor8 = "0a7a74";
        }
        else {
            this.buttonBgColor7 = "0a7a74";
        }
        if (this.fontColor7 === "f3efe4") {
            this.fontColor7 = "0a7a74";
            this.fontColor4 = "f3efe4";
            this.fontColor1 = "f3efe4";
            this.fontColor2 = "f3efe4";
            this.fontColor3 = "f3efe4";
            this.fontColor5 = "f3efe4";
            this.fontColor6 = "f3efe4";
            this.fontColor8 = "f3efe4";
        }
        else {
            this.fontColor7 = "f3efe4";
        }
        this.showBauernStubnBoolChange.emit(this.showBauernStubnBool);
        this.showBerglerBoolChange.emit(this.showBerglerBool);
        this.showEdelweissBoolChange.emit(this.showEdelweissBool);
        this.showWaeldlerBoolChange.emit(this.showWaeldlerBool);
        this.showTeeStubeBoolChange.emit(this.showTeeStubeBool);
        this.showTerasseBoolChange.emit(this.showTerasseBool);
        this.showTerrasseEdelweissBoolChange.emit(this.showTerrasseEdelweissBool);
        this.showAlleBoolChange.emit(this.showAlleBool);
    };
    DepartmentmenuComponent.prototype.showAlle = function () {
        //console.log("showAlle!");
        this.showBauernStubnBool = false;
        this.showBerglerBool = false;
        this.showWaeldlerBool = false;
        this.showEdelweissBool = false;
        this.showTeeStubeBool = false;
        this.showTerasseBool = false;
        this.showTerrasseEdelweissBool = false;
        this.showAlleBool = true;
        this.showAbteilungen = false;
        if (this.buttonBgColor8 === "154846") {
            this.buttonBgColor8 = "0d2f2e";
            this.buttonBgColor1 = "0a7a74";
            this.buttonBgColor2 = "0a7a74";
            this.buttonBgColor3 = "0a7a74";
            this.buttonBgColor4 = "0a7a74";
            this.buttonBgColor5 = "0a7a74";
            this.buttonBgColor6 = "0a7a74";
            this.buttonBgColor7 = "0a7a74";
        }
        else {
            this.buttonBgColor8 = "0a7a74";
        }
        if (this.fontColor8 === "f3efe4") {
            this.fontColor8 = "0a7a74";
            this.fontColor4 = "f3efe4";
            this.fontColor1 = "f3efe4";
            this.fontColor2 = "f3efe4";
            this.fontColor3 = "f3efe4";
            this.fontColor5 = "f3efe4";
            this.fontColor6 = "f3efe4";
            this.fontColor7 = "f3efe4";
        }
        else {
            this.fontColor8 = "f3efe4";
        }
        this.showBauernStubnBoolChange.emit(this.showBauernStubnBool);
        this.showBerglerBoolChange.emit(this.showBerglerBool);
        this.showEdelweissBoolChange.emit(this.showEdelweissBool);
        this.showWaeldlerBoolChange.emit(this.showWaeldlerBool);
        this.showTeeStubeBoolChange.emit(this.showTeeStubeBool);
        this.showTerasseBoolChange.emit(this.showTerasseBool);
        this.showTerrasseEdelweissBoolChange.emit(this.showTerrasseEdelweissBool);
        this.showAlleBoolChange.emit(this.showAlleBool);
    };
    DepartmentmenuComponent.prototype.showInfoForm = function () {
        //console.log("showTraceForm!");
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
        //console.log("showNotizForm!");
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
        //console.log("showTablePlan!");
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
        //console.log("mouse enter : ");
        if (this.buttonBgColorInfoForm === "0a7a74") {
            //console.log('mouse enter1 :');
            this.buttonBgColorInfoForm = "154846";
        }
    };
    DepartmentmenuComponent.prototype.mouseLeaveShowInfoForm = function () {
        if (this.buttonBgColorInfoForm === "0a7a74") {
            //console.log('mouse leave1 :');
            this.buttonBgColorInfoForm = "154846";
        }
        else if (this.buttonBgColorInfoForm === "154846") {
            //console.log('mouse leave2 :');
            this.buttonBgColorInfoForm = "0a7a74";
        }
    };
    DepartmentmenuComponent.prototype.mouseEnterShowNotizForm = function () {
        //console.log("mouse enter : ");
        if (this.buttonBgColorNotizForm === "0a7a74") {
            //console.log('mouse enter1 :');
            this.buttonBgColorNotizForm = "154846";
        }
    };
    DepartmentmenuComponent.prototype.mouseLeaveShowNotizForm = function () {
        if (this.buttonBgColorNotizForm === "0a7a74") {
            //console.log('mouse leave1 :');
            this.buttonBgColorNotizForm = "154846";
        }
        else if (this.buttonBgColorNotizForm === "154846") {
            //console.log('mouse leave2 :');
            this.buttonBgColorNotizForm = "0a7a74";
        }
    };
    DepartmentmenuComponent.prototype.mouseEnterShowTablePlan = function () {
        //console.log("mouse enter mouseEnterShowTablePlan: ");
        if (this.buttonBgColorShowTablePlan === "0a7a74") {
            //console.log('mouse enter1 mouseEnterShowTablePlan:');
            this.buttonBgColorShowTablePlan = "154846";
        }
    };
    DepartmentmenuComponent.prototype.mouseLeaveShowTablePlan = function () {
        if (this.buttonBgColorShowTablePlan === "0a7a74") {
            //console.log('mouse leave1 mouseEnterShowTablePlan:');
            this.buttonBgColorShowTablePlan = "154846";
        }
        else if (this.buttonBgColorShowTablePlan === "154846") {
            //console.log('mouse leave2 mouseEnterShowTablePlan:');
            this.buttonBgColorShowTablePlan = "0a7a74";
        }
    };
    DepartmentmenuComponent.prototype.mouseEnterDropdownToggle = function () {
        //console.log("mouse enter mouseEnterShowTablePlan: ");
        if (this.buttonBgColorDropdownToggle === "0a7a74") {
            //console.log('mouse enter1 mouseEnterShowTablePlan:');
            this.buttonBgColorDropdownToggle = "154846";
        }
    };
    DepartmentmenuComponent.prototype.mouseLeaveDropdownToggle = function () {
        if (this.buttonBgColorDropdownToggle === "0a7a74") {
            //console.log('mouse leave1 mouseEnterShowTablePlan:');
            this.buttonBgColorDropdownToggle = "154846";
        }
        else if (this.buttonBgColorDropdownToggle === "154846") {
            //console.log('mouse leave2 mouseEnterShowTablePlan:');
            this.buttonBgColorDropdownToggle = "0a7a74";
        }
    };
    DepartmentmenuComponent.prototype.mouseEnterBauernStubn = function () {
        //console.log("mouse enter mouseEnterBauernStubn: ");
        if (this.buttonBgColor1 === "0a7a74") {
            //console.log('mouse enter1 mouseEnterBauernStubn:');
            this.buttonBgColor1 = "154846";
        }
    };
    DepartmentmenuComponent.prototype.mouseLeaveBauernStubn = function () {
        if (this.buttonBgColor1 === "0a7a74") {
            //console.log('mouse leave1 mouseLeaveBauernStubn:');
            this.buttonBgColor1 = "154846";
        }
        else if (this.buttonBgColor1 === "154846") {
            //console.log('mouse leave2 mouseLeaveBauernStubn:');
            this.buttonBgColor1 = "0a7a74";
        }
    };
    DepartmentmenuComponent.prototype.mouseEnterBergler = function () {
        //console.log("mouse enter mouseEnterShowTablePlan: ");
        if (this.buttonBgColor2 === "0a7a74") {
            //console.log('mouse enter1 mouseEnterShowTablePlan:');
            this.buttonBgColor2 = "154846";
        }
    };
    DepartmentmenuComponent.prototype.mouseLeaveBergler = function () {
        if (this.buttonBgColor2 === "0a7a74") {
            //console.log('mouse leave1 mouseEnterShowTablePlan:');
            this.buttonBgColor2 = "154846";
        }
        else if (this.buttonBgColor2 === "154846") {
            //console.log('mouse leave2 mouseEnterShowTablePlan:');
            this.buttonBgColor2 = "0a7a74";
        }
    };
    DepartmentmenuComponent.prototype.mouseEnterWaeldler = function () {
        //console.log("mouse enter mouseEnterShowTablePlan: ");
        if (this.buttonBgColor3 === "0a7a74") {
            //console.log('mouse enter1 mouseEnterShowTablePlan:');
            this.buttonBgColor3 = "154846";
        }
    };
    DepartmentmenuComponent.prototype.mouseLeaveWaeldler = function () {
        if (this.buttonBgColor3 === "0a7a74") {
            //console.log('mouse leave1 mouseEnterShowTablePlan:');
            this.buttonBgColor3 = "154846";
        }
        else if (this.buttonBgColor3 === "154846") {
            //console.log('mouse leave2 mouseEnterShowTablePlan:');
            this.buttonBgColor3 = "0a7a74";
        }
    };
    DepartmentmenuComponent.prototype.mouseEnterEdelweiss = function () {
        //console.log("mouse enter mouseEnterShowTablePlan: ");
        if (this.buttonBgColor4 === "0a7a74") {
            //console.log('mouse enter1 mouseEnterShowTablePlan:');
            this.buttonBgColor4 = "154846";
        }
    };
    DepartmentmenuComponent.prototype.mouseLeaveEdelweiss = function () {
        if (this.buttonBgColor4 === "0a7a74") {
            //console.log('mouse leave1 mouseEnterShowTablePlan:');
            this.buttonBgColor4 = "154846";
        }
        else if (this.buttonBgColor4 === "154846") {
            //console.log('mouse leave2 mouseEnterShowTablePlan:');
            this.buttonBgColor4 = "0a7a74";
        }
    };
    DepartmentmenuComponent.prototype.mouseEnterTeestube = function () {
        //console.log("mouse enter mouseEnterShowTablePlan: ");
        if (this.buttonBgColor5 === "0a7a74") {
            //console.log('mouse enter1 mouseEnterShowTablePlan:');
            this.buttonBgColor5 = "154846";
        }
    };
    DepartmentmenuComponent.prototype.mouseLeaveTeestube = function () {
        if (this.buttonBgColor5 === "0a7a74") {
            //console.log('mouse leave1 mouseEnterShowTablePlan:');
            this.buttonBgColor5 = "154846";
        }
        else if (this.buttonBgColor5 === "154846") {
            //console.log('mouse leave2 mouseEnterShowTablePlan:');
            this.buttonBgColor5 = "0a7a74";
        }
    };
    DepartmentmenuComponent.prototype.mouseEnterTerasse = function () {
        //console.log("mouse enter mouseEnterShowTablePlan: ");
        if (this.buttonBgColor6 === "0a7a74") {
            //console.log('mouse enter1 mouseEnterShowTablePlan:');
            this.buttonBgColor6 = "154846";
        }
    };
    DepartmentmenuComponent.prototype.mouseLeaveTerasse = function () {
        if (this.buttonBgColor6 === "0a7a74") {
            //console.log('mouse leave1 mouseEnterShowTablePlan:');
            this.buttonBgColor6 = "154846";
        }
        else if (this.buttonBgColor6 === "154846") {
            //console.log('mouse leave2 mouseEnterShowTablePlan:');
            this.buttonBgColor6 = "0a7a74";
        }
    };
    DepartmentmenuComponent.prototype.mouseEnterTerrasseEdelweiss = function () {
        //console.log("mouse enter mouseEnterShowTablePlan: ");
        if (this.buttonBgColor7 === "0a7a74") {
            //console.log('mouse enter1 mouseEnterShowTablePlan:');
            this.buttonBgColor7 = "154846";
        }
    };
    DepartmentmenuComponent.prototype.mouseLeaveTerrasseEdelweiss = function () {
        if (this.buttonBgColor7 === "0a7a74") {
            //console.log('mouse leave1 mouseEnterShowTablePlan:');
            this.buttonBgColor7 = "154846";
        }
        else if (this.buttonBgColor7 === "154846") {
            //console.log('mouse leave2 mouseEnterShowTablePlan:');
            this.buttonBgColor7 = "0a7a74";
        }
    };
    DepartmentmenuComponent.prototype.mouseEnterAlle = function () {
        //console.log("mouse enter mouseEnterShowTablePlan: ");
        if (this.buttonBgColor8 === "0a7a74") {
            //console.log('mouse enter1 mouseEnterShowTablePlan:');
            this.buttonBgColor8 = "154846";
        }
    };
    DepartmentmenuComponent.prototype.mouseLeaveAlle = function () {
        if (this.buttonBgColor8 === "0a7a74") {
            //console.log('mouse leave1 mouseEnterShowTablePlan:');
            this.buttonBgColor8 = "154846";
        }
        else if (this.buttonBgColor8 === "154846") {
            //console.log('mouse leave2 mouseEnterShowTablePlan:');
            this.buttonBgColor8 = "0a7a74";
        }
    };
    DepartmentmenuComponent.prototype.none = function (event) {
        event.stopPropagation();
    };
    return DepartmentmenuComponent;
}());
__decorate([
    core_1.Input('buttonBgColor1'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "buttonBgColor1", void 0);
__decorate([
    core_1.Input('buttonBgColor2'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "buttonBgColor2", void 0);
__decorate([
    core_1.Input('buttonBgColor3'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "buttonBgColor3", void 0);
__decorate([
    core_1.Input('buttonBgColor4'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "buttonBgColor4", void 0);
__decorate([
    core_1.Input('buttonBgColor5'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "buttonBgColor5", void 0);
__decorate([
    core_1.Input('buttonBgColor6'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "buttonBgColor6", void 0);
__decorate([
    core_1.Input('buttonBgColor7'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "buttonBgColor7", void 0);
__decorate([
    core_1.Input('buttonBgColor8'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "buttonBgColor8", void 0);
__decorate([
    core_1.Input('fontColor1'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "fontColor1", void 0);
__decorate([
    core_1.Input('fontColor2'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "fontColor2", void 0);
__decorate([
    core_1.Input('fontColor3'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "fontColor3", void 0);
__decorate([
    core_1.Input('fontColor4'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "fontColor4", void 0);
__decorate([
    core_1.Input('fontColor5'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "fontColor5", void 0);
__decorate([
    core_1.Input('fontColor6'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "fontColor6", void 0);
__decorate([
    core_1.Input('fontColor7'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "fontColor7", void 0);
__decorate([
    core_1.Input('fontColor8'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "fontColor8", void 0);
__decorate([
    core_1.Input('showBauernStubnBool'),
    __metadata("design:type", Boolean)
], DepartmentmenuComponent.prototype, "showBauernStubnBool", void 0);
__decorate([
    core_1.Input('showBerglerBool'),
    __metadata("design:type", Boolean)
], DepartmentmenuComponent.prototype, "showBerglerBool", void 0);
__decorate([
    core_1.Input('showEdelweissBool'),
    __metadata("design:type", Boolean)
], DepartmentmenuComponent.prototype, "showEdelweissBool", void 0);
__decorate([
    core_1.Input('showWaeldlerBool'),
    __metadata("design:type", Boolean)
], DepartmentmenuComponent.prototype, "showWaeldlerBool", void 0);
__decorate([
    core_1.Input('showTeeStubeBool'),
    __metadata("design:type", Boolean)
], DepartmentmenuComponent.prototype, "showTeeStubeBool", void 0);
__decorate([
    core_1.Input('showTerasseBool'),
    __metadata("design:type", Boolean)
], DepartmentmenuComponent.prototype, "showTerasseBool", void 0);
__decorate([
    core_1.Input('showTerrasseEdelweissBool'),
    __metadata("design:type", Boolean)
], DepartmentmenuComponent.prototype, "showTerrasseEdelweissBool", void 0);
__decorate([
    core_1.Input('showAlleBool'),
    __metadata("design:type", Boolean)
], DepartmentmenuComponent.prototype, "showAlleBool", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], DepartmentmenuComponent.prototype, "showBauernStubnBoolChange", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_b = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _b || Object)
], DepartmentmenuComponent.prototype, "showBerglerBoolChange", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_c = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _c || Object)
], DepartmentmenuComponent.prototype, "showEdelweissBoolChange", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_d = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _d || Object)
], DepartmentmenuComponent.prototype, "showWaeldlerBoolChange", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_e = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _e || Object)
], DepartmentmenuComponent.prototype, "showTeeStubeBoolChange", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_f = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _f || Object)
], DepartmentmenuComponent.prototype, "showTerasseBoolChange", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_g = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _g || Object)
], DepartmentmenuComponent.prototype, "showTerrasseEdelweissBoolChange", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_h = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _h || Object)
], DepartmentmenuComponent.prototype, "showAlleBoolChange", void 0);
__decorate([
    core_1.Input('buttonBgColorInfoForm'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "buttonBgColorInfoForm", void 0);
__decorate([
    core_1.Input('fontColorInfoForm'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "fontColorInfoForm", void 0);
__decorate([
    core_1.Input('fontColorNotizForm'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "fontColorNotizForm", void 0);
__decorate([
    core_1.Input('buttonBgColorNotizForm'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "buttonBgColorNotizForm", void 0);
__decorate([
    core_1.Input('buttonBgColorShowTablePlan'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "buttonBgColorShowTablePlan", void 0);
__decorate([
    core_1.Input('fontColorShowTablePlan'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "fontColorShowTablePlan", void 0);
__decorate([
    core_1.Input('showNotizFormBool'),
    __metadata("design:type", Boolean)
], DepartmentmenuComponent.prototype, "showNotizFormBool", void 0);
__decorate([
    core_1.Input('showInfoFormBool'),
    __metadata("design:type", Boolean)
], DepartmentmenuComponent.prototype, "showInfoFormBool", void 0);
__decorate([
    core_1.Input('showTablePlanBool'),
    __metadata("design:type", Boolean)
], DepartmentmenuComponent.prototype, "showTablePlanBool", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_j = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _j || Object)
], DepartmentmenuComponent.prototype, "showNotizFormBoolChange", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_k = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _k || Object)
], DepartmentmenuComponent.prototype, "showInfoFormBoolChange", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_l = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _l || Object)
], DepartmentmenuComponent.prototype, "showTablePlanBoolChange", void 0);
DepartmentmenuComponent = __decorate([
    core_1.Component({
        selector: 'app-departmentmenu',
        template: __webpack_require__("../../../../../src/app/components/digitalerTischplan/departmentmenu/departmentmenu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digitalerTischplan/departmentmenu/departmentmenu.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DepartmentmenuComponent);
exports.DepartmentmenuComponent = DepartmentmenuComponent;
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
//# sourceMappingURL=departmentmenu.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/departments/alle/alle.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showAlleBool\">\n  <div *ngFor=\"let table of tables; let j = index;\">\n      <h4><b> Tisch:</b>{{table.number}} </h4><br>\n      <div class='cards-container' id='containerTables' [ngStyle]=\"{'background-color': + table.bgColor}\">\n        <div class=\"table\" [ngStyle]=\"{'background-color': '#' + table.bgColor}\">\n          <div *ngIf=\"table.isBesetzt === 'true'\">\n            <div [style.border]=\"getStyle(table.traceValue)\">\n              <div *ngIf=\"table.nameValue\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                <b> Zimmernummer:</b> {{table.zimmernummerValue}}<br>\n                <b> Name:</b> {{table.nameValue}}<br>\n                <b> Anreise Datum:</b> {{table.anreiseValue}}<br>\n                <b> Abreise Datum:</b> {{table.abreiseValue}}<br>\n                <b> Personenanzahl:</b> {{table.personenAnzahlValue}}<br>\n                <b> Nation:</b> {{table.nationValue}}<br>\n                <b> Sprache:</b> {{table.spracheValue}}<br>\n                <b> Preis Typ:</b> {{table.preisTypValue}}<br>\n                <b> Reisebüro:</b> {{table.reisebueroValue}}<br>\n                <b> Kategorie:</b> {{table.kategorieValue}}<br>\n                <b> Notiz1:</b> {{table.notiz1Value}}<br>\n                <b> Notiz2:</b> {{table.notiz2Value}}<br>\n                <b> Trace:</b> {{table.traceValue}}<br>\n                <b> Bemerkung:</b> {{table.bemerkungValue}}<br>\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"table.newTraceText\">\n              <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                <b> Zimmernummer: </b>{{table.newTraceRoomNumber}}<br> <b> Neuer Trace: </b>{{table.newTraceText}} <br> <b> Tischnummer: </b>{{table.newTraceTableNumber}} <br> <b> Mitarbeiter: </b>{{table.newTraceEmployee}} <br> <b> Name: </b>{{table.newTraceName}} <br> <b> Datum: </b>{{table.newTraceDate}}\n              </p>\n            </div>\n          </div>\n        </div>\n        <div *ngIf=\"table.placeholder === 'true'\">\n          <p [dragula]='\"evented-bag\"' id=\"tables\" style=\"background-color: #9d9d9d; border: dashed 3px black; margin-top: 50px; opacity: 0.4; padding: 10px 10px 10px 10px\">Listen-Element hier hin ziehen! {{table.number}} {{table.department}} {{j}}</p>\n        </div>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/departments/alle/alle.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var core_2 = __webpack_require__("../../../core/@angular/core.es5.js");
var AlleComponent = (function () {
    function AlleComponent() {
        this.occupied = new core_1.EventEmitter();
    }
    AlleComponent.prototype.ngOnInit = function () {
    };
    AlleComponent.prototype.occupy = function (table, j) {
        this.occupied.emit({ table: table, j: j });
    };
    AlleComponent.prototype.getStyle = function (j) {
        if (j != "-") {
            return "solid 3px red";
        }
        else {
            return "";
        }
    };
    AlleComponent.prototype.transform = function (tables, term) {
        //console.log("term");
        //console.log(term);
        if (Array.isArray(tables) && tables.length && term && term.length) {
            this.tables = tables.filter(function (item) {
                //console.log(item);
                var keys = Object.keys(item);
                //console.log(keys);
                if (Array.isArray(keys) && keys.length) {
                    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                        var key = keys_1[_i];
                        if (item.hasOwnProperty(key) && item[key] && item[key].length && (item[key].toString().toLowerCase().replace(/ /g, '')).includes((term.toString().toLowerCase().replace(/ /g, '')))) {
                            return true;
                        }
                    }
                    return false;
                }
                else {
                    return false;
                }
            });
        }
        else {
            return tables;
        }
    };
    return AlleComponent;
}());
__decorate([
    core_1.Input('tables'),
    __metadata("design:type", Object)
], AlleComponent.prototype, "tables", void 0);
__decorate([
    core_1.Input('tablesBauernstube'),
    __metadata("design:type", Array)
], AlleComponent.prototype, "tablesBauernstube", void 0);
__decorate([
    core_1.Input('tablesTerasse'),
    __metadata("design:type", Array)
], AlleComponent.prototype, "tablesTerasse", void 0);
__decorate([
    core_1.Input('tablesTerrasseEdelweiss'),
    __metadata("design:type", Array)
], AlleComponent.prototype, "tablesTerrasseEdelweiss", void 0);
__decorate([
    core_1.Input('tablesBerglerStubeHubertusStube'),
    __metadata("design:type", Array)
], AlleComponent.prototype, "tablesBerglerStubeHubertusStube", void 0);
__decorate([
    core_1.Input('tablesEdelweissKaminStube'),
    __metadata("design:type", Array)
], AlleComponent.prototype, "tablesEdelweissKaminStube", void 0);
__decorate([
    core_1.Input('tablesTeestubeTeelounge'),
    __metadata("design:type", Array)
], AlleComponent.prototype, "tablesTeestubeTeelounge", void 0);
__decorate([
    core_1.Input('tablesWaeldlerStubeKristallStube'),
    __metadata("design:type", Array)
], AlleComponent.prototype, "tablesWaeldlerStubeKristallStube", void 0);
__decorate([
    core_1.Input('term'),
    __metadata("design:type", String)
], AlleComponent.prototype, "term", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], AlleComponent.prototype, "occupied", void 0);
__decorate([
    core_1.Input('showAlleBool'),
    __metadata("design:type", Boolean)
], AlleComponent.prototype, "showAlleBool", void 0);
AlleComponent = __decorate([
    core_2.Pipe({
        name: 'filter',
    }),
    core_1.Component({
        selector: 'app-alle',
        template: __webpack_require__("../../../../../src/app/components/digitalerTischplan/departments/alle/alle.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digitalerTischplan/tischplan.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AlleComponent);
exports.AlleComponent = AlleComponent;
var _a;
//# sourceMappingURL=alle.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/departments/bauernstube/bauernstube.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showBauernStubnBool\">\n  <div *ngFor=\"let tableBauernstube of tablesBauernstube; let j = index;\">\n    <div *ngIf=\"tablesBauernstube[j] !== tablesBauernstube[j+1]\">\n      <button style=\"float: right; margin: 20px 0px 20px 0px; background-color: #0a7a74; color: #FFFFFF\"  type=\"button\" class=\"btn btn-send\" (click)=\"occupy(tableBauernstube)\">{{tableBauernstube.isBesetzt === 'true' ? 'FREI MACHEN' : ''}}</button>\n      <h4><b> Tisch:</b>{{tableBauernstube.number}} </h4><br>\n      <div class='cards-container' id='containerBauernstube' [ngStyle]=\"{'background-color': + tableBauernstube.bgColor}\">\n        <div class=\"table\" [ngStyle]=\"{'background-color': '#' + tableBauernstube.bgColor}\">\n          <div *ngIf=\"tableBauernstube.isBesetzt === 'true'\">\n            <div *ngFor=\"let group of tableBauernstube.groups; let j = index;\">\n              <div [style.border]=\"getStyle(group.traceValue)\">\n                <div *ngIf=\"group.nameValue\">\n                  <p style=\"background-color: #FFFFFF; padding: 10px\">\n                    <b> Name:</b> {{group.nameValue}}<br>\n                    <b> Zimmernummer:</b> {{group.zimmernummerValue}}<br>\n                    <b> Anreise Datum:</b> {{group.anreiseValue}}<br>\n                    <b> Abreise Datum:</b> {{group.abreiseValue}}<br>\n                    <b> Personenanzahl:</b> {{group.personenAnzahlValue}}<br>\n                    <b> Notiz1:</b> {{group.notiz1Value}}<br>\n                    <b> Notiz2:</b> {{group.notiz2Value}}<br>\n                    <b> Trace:</b> {{group.traceValue}}<br>\n                    <b> Bemerkung:</b> {{group.bemerkungValue}}<br>\n                  </p>\n                </div>\n              </div>\n              <div *ngIf=\"group.newTraceText\">\n                <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                  <b> Zimmernummer: </b>{{group.newTraceRoomNumber}}<br> <b> Neuer Trace: </b>{{group.newTraceText}} <br> <b> Tischnummer: </b>{{group.newTraceTableNumber}} <br> <b> Mitarbeiter: </b>{{group.newTraceEmployee}} <br> <b> Name: </b>{{group.newTraceName}} <br> <b> Datum: </b>{{group.newTraceDate}}\n                </p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div *ngIf=\"tableBauernstube.placeholder === 'true'\">\n          <p [dragula]='\"evented-bag\"' id=\"Bauernstube\" style=\"background-color: #9d9d9d; border: dashed 3px black; margin-top: 50px; opacity: 0.4; padding: 10px 10px 10px 10px\">Listen-Element hier hin ziehen!{{tableBauernstube.number}} {{tableBauernstube.department}} {{j}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/departments/bauernstube/bauernstube.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var BauernstubeComponent = (function () {
    function BauernstubeComponent() {
        this.occupied = new core_1.EventEmitter();
        this.t = 1;
    }
    BauernstubeComponent.prototype.ngOnInit = function () {
    };
    BauernstubeComponent.prototype.occupy = function (table) {
        var t = this.t;
        this.occupied.emit({ table: table, t: t });
    };
    BauernstubeComponent.prototype.getStyle = function (j) {
        if (j != "-") {
            return "solid 3px red";
        }
        else {
            return "";
        }
    };
    BauernstubeComponent.prototype.transform = function (tables, term) {
        console.log("term");
        console.log(term);
        if (term == "") {
            this.tablesBauernstube = tables;
        }
        else {
            if (Array.isArray(tables) && tables.length && term && term.length) {
                this.tablesBauernstube = tables.filter(function (item) {
                    console.log(item);
                    var keys = Object.keys(item);
                    if (item.groups) {
                        var keysGroups = Object.keys(item.groups);
                        console.log(keys);
                        console.log(keysGroups);
                        console.log();
                        if (Array.isArray(keys) && keys.length) {
                            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                                var key = keys_1[_i];
                                if (item.hasOwnProperty(key) && item[key] && item[key].length && (item[key].toString().toLowerCase().replace(/ /g, '')).includes((term.toString().toLowerCase().replace(/ /g, '')))) {
                                    return true;
                                }
                                else if (item.groups) {
                                    for (var _a = 0, keysGroups_1 = keysGroups; _a < keysGroups_1.length; _a++) {
                                        var keyGroups = keysGroups_1[_a];
                                        var keysGroupsGroups = Object.keys(item.groups[keyGroups]);
                                        for (var _b = 0, keysGroupsGroups_1 = keysGroupsGroups; _b < keysGroupsGroups_1.length; _b++) {
                                            var keyGroupsGroups = keysGroupsGroups_1[_b];
                                            if (item.groups[keyGroups][keyGroupsGroups]) {
                                                if (item.groups[keyGroups][keyGroupsGroups].toString().toLowerCase().replace(/ /g, '').includes((term.toString().toLowerCase().replace(/ /g, '')))) {
                                                    return true;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            return false;
                        }
                        else {
                            return false;
                        }
                    }
                });
            }
            else {
                return tables;
            }
        }
    };
    return BauernstubeComponent;
}());
__decorate([
    core_1.Input('tablesBauernstube'),
    __metadata("design:type", Array)
], BauernstubeComponent.prototype, "tablesBauernstube", void 0);
__decorate([
    core_1.Input('showBauernStubnBool'),
    __metadata("design:type", Boolean)
], BauernstubeComponent.prototype, "showBauernStubnBool", void 0);
__decorate([
    core_1.Input('term'),
    __metadata("design:type", String)
], BauernstubeComponent.prototype, "term", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], BauernstubeComponent.prototype, "occupied", void 0);
BauernstubeComponent = __decorate([
    core_1.Component({
        selector: 'app-bauernstube',
        template: __webpack_require__("../../../../../src/app/components/digitalerTischplan/departments/bauernstube/bauernstube.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digitalerTischplan/tischplan.component.css")]
    }),
    __metadata("design:paramtypes", [])
], BauernstubeComponent);
exports.BauernstubeComponent = BauernstubeComponent;
var _a;
//# sourceMappingURL=bauernstube.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/departments/bergler-stube-hubertus-stube/bergler-stube-hubertus-stube.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showBerglerBool\">\n  <div *ngFor=\"let tableBerglerStubeHubertusStube of tablesBerglerStubeHubertusStube; let j = index;\">\n    <div *ngIf=\"tablesBerglerStubeHubertusStube[j] !== tablesBerglerStubeHubertusStube[j+1]\">\n      <button style=\"float: right; margin: 20px 0px 20px 0px; background-color: #0a7a74; color: #FFFFFF\" type=\"button\" class=\"btn btn-send\" (click)=\"occupy(tableBerglerStubeHubertusStube)\">{{tableBerglerStubeHubertusStube.isBesetzt === 'true' ? 'FREI MACHEN' : '' }}</button>\n      <h4><b> Tisch: </b>{{tableBerglerStubeHubertusStube.number}} </h4><br>\n      <div class='cards-container' id='containerBerglerStubeHubertusStube'  [ngStyle]=\"{'background-color': + tableBerglerStubeHubertusStube.bgColor}\">\n        <div class=\"table\" [ngStyle]=\"{'background-color': '#' + tableBerglerStubeHubertusStube.bgColor}\">\n          <div *ngIf=\"tableBerglerStubeHubertusStube.isBesetzt === 'true'\">\n            <div *ngFor=\"let group of tableBerglerStubeHubertusStube.groups; let j = index;\">\n              <div [style.border]=\"getStyle(group.traceValue)\">\n                <div *ngIf=\"group\">\n                  <div *ngIf=\"group.nameValue\">\n                    <p style=\"background-color: #FFFFFF; padding: 10px\">\n                      <b> Name:</b> {{group.nameValue}}<br>\n                      <b> Zimmernummer:</b> {{group.zimmernummerValue}}<br>\n                      <b> Anreise Datum:</b> {{group.anreiseValue}}<br>\n                      <b> Abreise Datum:</b> {{group.abreiseValue}}<br>\n                      <b> Personenanzahl:</b> {{group.personenAnzahlValue}}<br>\n                      <b> Notiz1:</b> {{group.notiz1Value}}<br>\n                      <b> Notiz2:</b> {{group.notiz2Value}}<br>\n                      <b> Trace:</b> {{group.traceValue}}<br>\n                      <b> Bemerkung:</b> {{group.bemerkungValue}}<br>\n                    </p>\n                  </div>\n                </div>\n              </div>\n              <div *ngIf=\"group.newTraceText\">\n                <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                  <b> Zimmernummer: </b>{{group.newTraceRoomNumber}}<br> <b> Neuer Trace: </b>{{group.newTraceText}} <br> <b> Tischnummer: </b>{{group.newTraceTableNumber}} <br> <b> Mitarbeiter: </b>{{group.newTraceEmployee}} <br> <b> Name: </b>{{group.newTraceName}} <br> <b> Datum: </b>{{group.newTraceDate}}\n                </p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div *ngIf=\"tableBerglerStubeHubertusStube.placeholder === 'true'\">\n          <p [dragula]='\"evented-bag\"' id=\"BerglerStubeHubertusStube\" style=\"background-color: #9d9d9d; border: dashed 3px black; margin-top: 50px; opacity: 0.4; padding: 10px 10px 10px 10px\">Listen-Element hier hin ziehen!{{tableBerglerStubeHubertusStube.number}} {{tableBerglerStubeHubertusStube.department}} {{j}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/departments/bergler-stube-hubertus-stube/bergler-stube-hubertus-stube.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var BerglerStubeHubertusStubeComponent = (function () {
    function BerglerStubeHubertusStubeComponent() {
        this.occupied = new core_1.EventEmitter();
        this.t = 1;
    }
    BerglerStubeHubertusStubeComponent.prototype.ngOnInit = function () {
    };
    BerglerStubeHubertusStubeComponent.prototype.occupy = function (table) {
        var t = this.t;
        this.occupied.emit({ table: table, t: t });
    };
    BerglerStubeHubertusStubeComponent.prototype.getStyle = function (j) {
        if (j != "-") {
            return "solid 3px red";
        }
        else {
            return "";
        }
    };
    BerglerStubeHubertusStubeComponent.prototype.transform = function (tables, term) {
        console.log("term");
        console.log(term);
        if (term == "") {
            this.tablesBerglerStubeHubertusStube = tables;
        }
        else {
            if (Array.isArray(tables) && tables.length && term && term.length) {
                this.tablesBerglerStubeHubertusStube = tables.filter(function (item) {
                    console.log(item);
                    var keys = Object.keys(item);
                    if (item.groups) {
                        var keysGroups = Object.keys(item.groups);
                        console.log(keys);
                        console.log(keysGroups);
                        console.log();
                        if (Array.isArray(keys) && keys.length) {
                            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                                var key = keys_1[_i];
                                if (item.hasOwnProperty(key) && item[key] && item[key].length && (item[key].toString().toLowerCase().replace(/ /g, '')).includes((term.toString().toLowerCase().replace(/ /g, '')))) {
                                    return true;
                                }
                                else if (item.groups) {
                                    for (var _a = 0, keysGroups_1 = keysGroups; _a < keysGroups_1.length; _a++) {
                                        var keyGroups = keysGroups_1[_a];
                                        var keysGroupsGroups = Object.keys(item.groups[keyGroups]);
                                        for (var _b = 0, keysGroupsGroups_1 = keysGroupsGroups; _b < keysGroupsGroups_1.length; _b++) {
                                            var keyGroupsGroups = keysGroupsGroups_1[_b];
                                            if (item.groups[keyGroups][keyGroupsGroups]) {
                                                if (item.groups[keyGroups][keyGroupsGroups].toString().toLowerCase().replace(/ /g, '').includes((term.toString().toLowerCase().replace(/ /g, '')))) {
                                                    return true;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            return false;
                        }
                        else {
                            return false;
                        }
                    }
                });
            }
            else {
                return tables;
            }
        }
    };
    return BerglerStubeHubertusStubeComponent;
}());
__decorate([
    core_1.Input('tablesBerglerStubeHubertusStube'),
    __metadata("design:type", Array)
], BerglerStubeHubertusStubeComponent.prototype, "tablesBerglerStubeHubertusStube", void 0);
__decorate([
    core_1.Input('showBerglerBool'),
    __metadata("design:type", Boolean)
], BerglerStubeHubertusStubeComponent.prototype, "showBerglerBool", void 0);
__decorate([
    core_1.Input('term'),
    __metadata("design:type", String)
], BerglerStubeHubertusStubeComponent.prototype, "term", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], BerglerStubeHubertusStubeComponent.prototype, "occupied", void 0);
BerglerStubeHubertusStubeComponent = __decorate([
    core_1.Component({
        selector: 'app-bergler-stube-hubertus-stube',
        template: __webpack_require__("../../../../../src/app/components/digitalerTischplan/departments/bergler-stube-hubertus-stube/bergler-stube-hubertus-stube.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digitalerTischplan/tischplan.component.css")]
    }),
    __metadata("design:paramtypes", [])
], BerglerStubeHubertusStubeComponent);
exports.BerglerStubeHubertusStubeComponent = BerglerStubeHubertusStubeComponent;
var _a;
//# sourceMappingURL=bergler-stube-hubertus-stube.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/departments/departments.component.html":
/***/ (function(module, exports) {

module.exports = "<app-bauernstube [term]=\"term\" [tablesBauernstube]=\"tablesBauernstube\" [showBauernStubnBool]=\"showBauernStubnBool\" (occupied)=\"occupied($event)\"></app-bauernstube>\n<app-bergler-stube-hubertus-stube [term]=\"term\" [tablesBerglerStubeHubertusStube]=\"tablesBerglerStubeHubertusStube\" [showBerglerBool]=\"showBerglerBool\" (occupied)=\"occupied($event)\"></app-bergler-stube-hubertus-stube>\n<app-edelweiss-kamin-stube [term]=\"term\" [tablesEdelweissKaminStube]=\"tablesEdelweissKaminStube\" [showEdelweissBool]=\"showEdelweissBool\" (occupied)=\"occupied($event)\"></app-edelweiss-kamin-stube>\n<app-teestube-teelounge  [term]=\"term\" [tablesTeestubeTeelounge]=\"tablesTeestubeTeelounge\" [showTeeStubeBool]=\"showTeeStubeBool\" (occupied)=\"occupied($event)\"></app-teestube-teelounge>\n<app-waeldler-stube-kristall-stube [term]=\"term\" [tablesWaeldlerStubeKristallStube]=\"tablesWaeldlerStubeKristallStube\" [showWaeldlerBool]=\"showWaeldlerBool\" (occupied)=\"occupied($event)\"></app-waeldler-stube-kristall-stube>\n<app-terasse [term]=\"term\" [tablesTerasse]=\"tablesTerasse\" [showTerasseBool]=\"showTerasseBool\" (occupied)=\"occupied($event)\"></app-terasse>\n<app-terrasse-edelweiss [term]=\"term\" [tablesTerrasseEdelweiss]=\"tablesTerrasseEdelweiss\" [showTerrasseEdelweissBool]=\"showTerrasseEdelweissBool\" (occupied)=\"occupied($event)\"></app-terrasse-edelweiss>\n<app-alle [showAlleBool]=\"showAlleBool\" [term]=\"term\" [tables]=\"tables\" [tablesBauernstube]=\"tablesBauernstube\" [tablesWaeldlerStubeKristallStube]=\"tablesWaeldlerStubeKristallStube\" [tablesTeestubeTeelounge]=\"tablesTeestubeTeelounge\" [tablesEdelweissKaminStube]=\"tablesEdelweissKaminStube\" [tablesBerglerStubeHubertusStube]=\"tablesBerglerStubeHubertusStube\" [tablesTerasse]=\"tablesTerasse\" [tablesTerrasseEdelweiss]=\"tablesTerrasseEdelweiss\" (occupied)=\"occupied($event)\"></app-alle>\n"

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/departments/departments.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var tischplan_service_1 = __webpack_require__("../../../../../src/app/services/tischplan.service.ts");
var waeldler_stube_kristall_stube_component_1 = __webpack_require__("../../../../../src/app/components/digitalerTischplan/departments/waeldler-stube-kristall-stube/waeldler-stube-kristall-stube.component.ts");
var teestube_teelounge_component_1 = __webpack_require__("../../../../../src/app/components/digitalerTischplan/departments/teestube-teelounge/teestube-teelounge.component.ts");
var edelweiss_kamin_stube_component_1 = __webpack_require__("../../../../../src/app/components/digitalerTischplan/departments/edelweiss-kamin-stube/edelweiss-kamin-stube.component.ts");
var bergler_stube_hubertus_stube_component_1 = __webpack_require__("../../../../../src/app/components/digitalerTischplan/departments/bergler-stube-hubertus-stube/bergler-stube-hubertus-stube.component.ts");
var bauernstube_component_1 = __webpack_require__("../../../../../src/app/components/digitalerTischplan/departments/bauernstube/bauernstube.component.ts");
var terasse_component_1 = __webpack_require__("../../../../../src/app/components/digitalerTischplan/departments/terasse/terasse.component.ts");
var terrasse_edelweiss_component_1 = __webpack_require__("../../../../../src/app/components/digitalerTischplan/departments/terrasse-edelweiss/terrasse-edelweiss.component.ts");
var alle_component_1 = __webpack_require__("../../../../../src/app/components/digitalerTischplan/departments/alle/alle.component.ts");
var DepartmentsComponent = (function () {
    function DepartmentsComponent(tischplanService) {
        this.tischplanService = tischplanService;
        this.dispensedBauernstube = new core_1.EventEmitter();
        this.dispensedBerglerStubeHubertusStube = new core_1.EventEmitter();
        this.dispensedEdelweissKaminStube = new core_1.EventEmitter();
        this.dispensedTeestubeTeelounge = new core_1.EventEmitter();
        this.dispensedTerasse = new core_1.EventEmitter();
        this.dispensedTerrasseEdelweiss = new core_1.EventEmitter();
        this.dispensedWaeldlerStubeKristallStube = new core_1.EventEmitter();
        this.updateAzList = new core_1.EventEmitter();
        this.updateImHausListeElement = new core_1.EventEmitter();
        this.parts = [];
        this.date = [];
        this.parsedDate = [];
    }
    DepartmentsComponent.prototype.ngOnInit = function () {
    };
    DepartmentsComponent.prototype.occupied = function (table) {
        //console.log("table.j");
        //console.log(table.j);
        //console.log("table.table");
        //console.log(table.table);
        this.occupy(table.table, table.t);
    };
    DepartmentsComponent.prototype.occupy = function (table, j) {
        var _this = this;
        console.log("occupy called");
        console.log(table);
        this.tischplanService.dispenseTable(table).subscribe(function (response) {
            console.log(JSON.stringify(response));
            console.log(j);
            //console.log(j);
            //console.log("bgColor:" + JSON.stringify(response));
            //console.log("bgColor:" + JSON.stringify(response[0].tables[j].bgColor));
            //console.log("isBesetzt:" + JSON.stringify(response[0].tables[j].isBesetzt));
            if (typeof response == null || typeof response[j] == null) {
                return;
            }
            else {
                if (response[j].department === "berglerStubeHubertusStube") {
                    _this.dispensedBerglerStubeHubertusStube.emit(response[j].tables);
                }
                else if (response[j].department === "Bauernstube") {
                    _this.dispensedBauernstube.emit(response[j].tables);
                }
                else if (response[j].department === "waeldlerStubeKristallStube") {
                    _this.dispensedWaeldlerStubeKristallStube.emit(response[j].tables);
                }
                else if (response[j].department === "edelweissKaminStube") {
                    _this.dispensedEdelweissKaminStube.emit(response[j].tables);
                }
                else if (response[j].department === "teestubeTeelounge") {
                    _this.dispensedTeestubeTeelounge.emit(response[j].tables);
                }
                else if (response[j].department === "terasse") {
                    _this.dispensedTerasse.emit(response[j].tables);
                }
                else if (response[j].department === "terrasseEdelweiss") {
                    _this.dispensedTerrasseEdelweiss.emit(response[j].tables);
                }
            }
        }, function (error) { return console.log("Error: ", error); }, function () {
            console.log(table);
            _this.updateAzList.emit();
            if (table.length > 1) {
                for (var i = 0; i < table.length; i++) {
                    _this.updateImHausListeElement.emit(table[i].table);
                }
            }
            else {
                if (table.constructor === Array) {
                    console.log("isarray");
                    _this.updateImHausListeElement.emit(table[0].table);
                }
                else {
                    _this.updateImHausListeElement.emit(table);
                }
            }
        });
        this.tischplanService.addPlaceholder(table).subscribe(function (response) {
            console.log("Add placeholder!");
            //console.log("Add placeholder! table ... " + JSON.stringify(table));
            //console.log("placeholder:" + JSON.stringify(response));
            /*
            if (typeof response == null) {
              return;
            } else {
              if (response[j].department === "berglerStubeHubertusStube") {
                this.dispensedBerglerStubeHubertusStube.emit(response[j].tables);
              }
              else if (response[j].department === "Bauernstube") {
                this.dispensedBauernstube.emit(response[j].tables);
              }
              else if (response[j].department === "waeldlerStubeKristallStube") {
                this.dispensedWaeldlerStubeKristallStube.emit(response[j].tables);
              }
              else if (response[j].department === "edelweissKaminStube") {
                this.dispensedEdelweissKaminStube.emit(response[j].tables);
              }
              else if (response[j].department === "teestubeTeelounge") {
                this.dispensedTeestubeTeelounge.emit(response[j].tables);
              }
            }
            */
        });
    };
    DepartmentsComponent.prototype.addInformationToTable = function (dataString, arrayIndex) {
        var _this = this;
        //console.log("dataString");
        //console.log(dataString);
        this.tischplanService.addInformationToTable(dataString)
            .subscribe(function (response) {
            // let arrayIndex = response[1];
            //console.log("RESPONSE addInformationToTable:" + JSON.stringify(response));
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
                else if (response[0].department === "terasse") {
                    _this.dispensedTerasse.emit(response[0].tables);
                }
                else if (response[0].department === "terrasseEdelweiss") {
                    _this.dispensedTerrasseEdelweiss.emit(response[0].tables);
                }
            }
            // //console.log(this.tablesBerglerStubeHubertusStube[arrayIndex]);
        });
        this.updateAzList.emit();
    };
    DepartmentsComponent.prototype.occupyTableOnDrop = function (dataString, arrayIndex) {
        var _this = this;
        //console.log("Occupy Table!");
        this.tischplanService.occupyTable(dataString)
            .subscribe(function (response) {
            //let arrayIndex = response[1];
            //console.log("arrayIndex:" + arrayIndex);
            //console.log("bgColor:" + JSON.stringify(response[0].tables[arrayIndex].bgColor));
            //console.log("Response occupyTable:" + JSON.stringify(response));
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
                else if (response.tables[0].department === "terasse") {
                    _this.tablesTerasse[arrayIndex] = response.tables[0];
                }
                else if (response.tables[0].department === "terrasseEdelweiss") {
                    _this.tablesTerrasseEdelweiss[arrayIndex] = response.tables[0];
                }
            }
            //console.log("bgColor:" + JSON.stringify(this.tablesBerglerStubeHubertusStube[arrayIndex]));
        });
        //console.log("placeholder:" + JSON.stringify(this.tablesBerglerStubeHubertusStube[arrayIndex]));
    };
    DepartmentsComponent.prototype.changeBgColorIfAnreise = function () {
        var _this = this;
        setTimeout(function () {
            _this.tablesChangeBgColorIfAnreise = _this.tablesTempAbreise;
            //console.log('=================================================changeBgColorIfAnreise');
            //console.log(this.tablesChangeBgColorIfAnreise);
            _this.dateTodayGenerated = new Date();
            _this.parts = [];
            _this.parsedDate = [];
            _this.date = [];
            for (var a = 0; a < _this.tablesChangeBgColorIfAnreise.length; a++) {
                for (var b = 0; b < _this.tablesChangeBgColorIfAnreise[a].tables.length; b++) {
                    if (_this.tablesChangeBgColorIfAnreise[a].tables[b].groups) {
                        for (var c = 0; c < _this.tablesChangeBgColorIfAnreise[a].tables[b].groups.length; c++) {
                            if (_this.tablesChangeBgColorIfAnreise[a].tables[b].groups[c]) {
                                if (_this.tablesChangeBgColorIfAnreise[a].tables[b].groups[c].anreiseValue) {
                                    //console.log('tablesChangeBgColorIfAnreise[a].tables[b].groups[c].anreiseValue: ' + c + " " + this.tablesChangeBgColorIfAnreise[a].tables[b].groups[c].anreiseValue);
                                    _this.parts[0] = _this.tablesChangeBgColorIfAnreise[a].tables[b].groups[c].anreiseValue.match(/(\d+)/g);
                                }
                                else {
                                    _this.parts[0] = "undefined";
                                }
                                if (_this.parts[0]) {
                                    _this.date[0] = new Date(2018, _this.parts[0][1] - 1, _this.parts[0][0]);
                                    _this.parsedDate[0] = String(_this.date[0]).substring(0, 15);
                                }
                                // note parts[1]-1
                                // console.log('parts[2]' + parts[2] + 'parts[1]' + (parts[1] - 1) + 'parts[0]' + parts[0]);
                                // Mon May 31 2010 00:00:00
                                // this.tablesRestaurant[j].anreiseValue
                                var dateToday = String(_this.dateTodayGenerated).substring(0, 15);
                                //console.log('Parsed Date --->: ' + this.parsedDate[0]);
                                //console.log('this.dateGenerated --->: ' + dateToday);
                                if (dateToday.indexOf(_this.parsedDate[0]) !== -1) {
                                    if (_this.tablesChangeBgColorIfAnreise[a].department === "berglerStubeHubertusStube") {
                                        if (_this.tablesBerglerStubeHubertusStube[b]) {
                                            _this.tablesBerglerStubeHubertusStube[b].bgColor = "#0a7a74";
                                        }
                                    }
                                    else if (_this.tablesChangeBgColorIfAnreise[a].department === "Bauernstube") {
                                        if (_this.tablesBauernstube[b]) {
                                            _this.tablesBauernstube[b].bgColor = "#0a7a74";
                                        }
                                    }
                                    else if (_this.tablesChangeBgColorIfAnreise[a].department === "waeldlerStubeKristallStube") {
                                        if (_this.tablesWaeldlerStubeKristallStube[b]) {
                                            _this.tablesWaeldlerStubeKristallStube[b].bgColor = "#0a7a74";
                                        }
                                    }
                                    else if (_this.tablesChangeBgColorIfAnreise[a].department === "edelweissKaminStube") {
                                        if (_this.tablesEdelweissKaminStube[b]) {
                                            _this.tablesEdelweissKaminStube[b].bgColor = "#0a7a74";
                                        }
                                    }
                                    else if (_this.tablesChangeBgColorIfAnreise[a].department === "teestubeTeelounge") {
                                        if (_this.tablesTeestubeTeelounge[b]) {
                                            _this.tablesTeestubeTeelounge[b].bgColor = "#0a7a74";
                                        }
                                    }
                                    else if (_this.tablesChangeBgColorIfAnreise[a].department === "terasse") {
                                        if (_this.tablesTerasse[b]) {
                                            _this.tablesTerasse[b].bgColor = "#0a7a74";
                                        }
                                    }
                                    else if (_this.tablesChangeBgColorIfAnreise[a].department === "terrasseEdelweiss") {
                                        if (_this.tablesTerrasseEdelweiss[b]) {
                                            _this.tablesTerrasseEdelweiss[b].bgColor = "#0a7a74";
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }, 1000);
    };
    DepartmentsComponent.prototype.transform = function (term) {
        if (this.showAlleBool) {
            this.alleComponent.transform(this.tables, term);
        }
        else if (this.showBauernStubnBool) {
            this.bauernstubeComponent.transform(this.tablesBauernstube, term);
        }
        else if (this.showBerglerBool) {
            this.berglerStubeHubertusStubeComponent.transform(this.tablesBerglerStubeHubertusStube, term);
        }
        else if (this.showEdelweissBool) {
            this.edelweissKaminStubeComponent.transform(this.tablesEdelweissKaminStube, term);
        }
        else if (this.showTeeStubeBool) {
            this.teestubeTeeloungeComponent.transform(this.tablesTeestubeTeelounge, term);
        }
        else if (this.showWaeldlerBool) {
            this.waeldlerStubeKristallStubeComponent.transform(this.tablesWaeldlerStubeKristallStube, term);
        }
        else if (this.showTerasseBool) {
            this.terasseComponent.transform(this.tablesTerasse, term);
        }
        else if (this.showTerrasseEdelweissBool) {
            this.terrasseEdelweissComponent.transform(this.tablesTerrasseEdelweiss, term);
        }
    };
    return DepartmentsComponent;
}());
__decorate([
    core_1.Input('tablesBauernstube'),
    __metadata("design:type", Array)
], DepartmentsComponent.prototype, "tablesBauernstube", void 0);
__decorate([
    core_1.Input('tablesTerasse'),
    __metadata("design:type", Array)
], DepartmentsComponent.prototype, "tablesTerasse", void 0);
__decorate([
    core_1.Input('showTerasseBool'),
    __metadata("design:type", Boolean)
], DepartmentsComponent.prototype, "showTerasseBool", void 0);
__decorate([
    core_1.Input('tablesTerrasseEdelweiss'),
    __metadata("design:type", Array)
], DepartmentsComponent.prototype, "tablesTerrasseEdelweiss", void 0);
__decorate([
    core_1.Input('showTerrasseEdelweissBool'),
    __metadata("design:type", Boolean)
], DepartmentsComponent.prototype, "showTerrasseEdelweissBool", void 0);
__decorate([
    core_1.Input('showBauernStubnBool'),
    __metadata("design:type", Boolean)
], DepartmentsComponent.prototype, "showBauernStubnBool", void 0);
__decorate([
    core_1.Input('tablesEdelweissKaminStube'),
    __metadata("design:type", Array)
], DepartmentsComponent.prototype, "tablesEdelweissKaminStube", void 0);
__decorate([
    core_1.Input('showEdelweissBool'),
    __metadata("design:type", Boolean)
], DepartmentsComponent.prototype, "showEdelweissBool", void 0);
__decorate([
    core_1.Input('tablesBerglerStubeHubertusStube'),
    __metadata("design:type", Array)
], DepartmentsComponent.prototype, "tablesBerglerStubeHubertusStube", void 0);
__decorate([
    core_1.Input('showBerglerBool'),
    __metadata("design:type", Boolean)
], DepartmentsComponent.prototype, "showBerglerBool", void 0);
__decorate([
    core_1.Input('tablesTeestubeTeelounge'),
    __metadata("design:type", Array)
], DepartmentsComponent.prototype, "tablesTeestubeTeelounge", void 0);
__decorate([
    core_1.Input('showTeeStubeBool'),
    __metadata("design:type", Boolean)
], DepartmentsComponent.prototype, "showTeeStubeBool", void 0);
__decorate([
    core_1.Input('tablesWaeldlerStubeKristallStube'),
    __metadata("design:type", Array)
], DepartmentsComponent.prototype, "tablesWaeldlerStubeKristallStube", void 0);
__decorate([
    core_1.Input('showWaeldlerBool'),
    __metadata("design:type", Boolean)
], DepartmentsComponent.prototype, "showWaeldlerBool", void 0);
__decorate([
    core_1.Input('tables'),
    __metadata("design:type", Object)
], DepartmentsComponent.prototype, "tables", void 0);
__decorate([
    core_1.Input('term'),
    __metadata("design:type", String)
], DepartmentsComponent.prototype, "term", void 0);
__decorate([
    core_1.Input('showAlleBool'),
    __metadata("design:type", Boolean)
], DepartmentsComponent.prototype, "showAlleBool", void 0);
__decorate([
    core_1.Input('tablesTempAbreise'),
    __metadata("design:type", Object)
], DepartmentsComponent.prototype, "tablesTempAbreise", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], DepartmentsComponent.prototype, "dispensedBauernstube", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_b = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _b || Object)
], DepartmentsComponent.prototype, "dispensedBerglerStubeHubertusStube", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_c = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _c || Object)
], DepartmentsComponent.prototype, "dispensedEdelweissKaminStube", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_d = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _d || Object)
], DepartmentsComponent.prototype, "dispensedTeestubeTeelounge", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_e = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _e || Object)
], DepartmentsComponent.prototype, "dispensedTerasse", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_f = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _f || Object)
], DepartmentsComponent.prototype, "dispensedTerrasseEdelweiss", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_g = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _g || Object)
], DepartmentsComponent.prototype, "dispensedWaeldlerStubeKristallStube", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_h = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _h || Object)
], DepartmentsComponent.prototype, "updateAzList", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_j = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _j || Object)
], DepartmentsComponent.prototype, "updateImHausListeElement", void 0);
__decorate([
    core_1.ViewChild(alle_component_1.AlleComponent),
    __metadata("design:type", typeof (_k = typeof alle_component_1.AlleComponent !== "undefined" && alle_component_1.AlleComponent) === "function" && _k || Object)
], DepartmentsComponent.prototype, "alleComponent", void 0);
__decorate([
    core_1.ViewChild(waeldler_stube_kristall_stube_component_1.WaeldlerStubeKristallStubeComponent),
    __metadata("design:type", typeof (_l = typeof waeldler_stube_kristall_stube_component_1.WaeldlerStubeKristallStubeComponent !== "undefined" && waeldler_stube_kristall_stube_component_1.WaeldlerStubeKristallStubeComponent) === "function" && _l || Object)
], DepartmentsComponent.prototype, "waeldlerStubeKristallStubeComponent", void 0);
__decorate([
    core_1.ViewChild(teestube_teelounge_component_1.TeestubeTeeloungeComponent),
    __metadata("design:type", typeof (_m = typeof teestube_teelounge_component_1.TeestubeTeeloungeComponent !== "undefined" && teestube_teelounge_component_1.TeestubeTeeloungeComponent) === "function" && _m || Object)
], DepartmentsComponent.prototype, "teestubeTeeloungeComponent", void 0);
__decorate([
    core_1.ViewChild(edelweiss_kamin_stube_component_1.EdelweissKaminStubeComponent),
    __metadata("design:type", typeof (_o = typeof edelweiss_kamin_stube_component_1.EdelweissKaminStubeComponent !== "undefined" && edelweiss_kamin_stube_component_1.EdelweissKaminStubeComponent) === "function" && _o || Object)
], DepartmentsComponent.prototype, "edelweissKaminStubeComponent", void 0);
__decorate([
    core_1.ViewChild(bergler_stube_hubertus_stube_component_1.BerglerStubeHubertusStubeComponent),
    __metadata("design:type", typeof (_p = typeof bergler_stube_hubertus_stube_component_1.BerglerStubeHubertusStubeComponent !== "undefined" && bergler_stube_hubertus_stube_component_1.BerglerStubeHubertusStubeComponent) === "function" && _p || Object)
], DepartmentsComponent.prototype, "berglerStubeHubertusStubeComponent", void 0);
__decorate([
    core_1.ViewChild(bauernstube_component_1.BauernstubeComponent),
    __metadata("design:type", typeof (_q = typeof bauernstube_component_1.BauernstubeComponent !== "undefined" && bauernstube_component_1.BauernstubeComponent) === "function" && _q || Object)
], DepartmentsComponent.prototype, "bauernstubeComponent", void 0);
__decorate([
    core_1.ViewChild(terasse_component_1.TerasseComponent),
    __metadata("design:type", typeof (_r = typeof terasse_component_1.TerasseComponent !== "undefined" && terasse_component_1.TerasseComponent) === "function" && _r || Object)
], DepartmentsComponent.prototype, "terasseComponent", void 0);
__decorate([
    core_1.ViewChild(terrasse_edelweiss_component_1.TerrasseEdelweissComponent),
    __metadata("design:type", typeof (_s = typeof terrasse_edelweiss_component_1.TerrasseEdelweissComponent !== "undefined" && terrasse_edelweiss_component_1.TerrasseEdelweissComponent) === "function" && _s || Object)
], DepartmentsComponent.prototype, "terrasseEdelweissComponent", void 0);
DepartmentsComponent = __decorate([
    core_1.Component({
        selector: 'app-departments',
        template: __webpack_require__("../../../../../src/app/components/digitalerTischplan/departments/departments.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digitalerTischplan/tischplan.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_t = typeof tischplan_service_1.TischplanService !== "undefined" && tischplan_service_1.TischplanService) === "function" && _t || Object])
], DepartmentsComponent);
exports.DepartmentsComponent = DepartmentsComponent;
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
//# sourceMappingURL=departments.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/departments/edelweiss-kamin-stube/edelweiss-kamin-stube.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showEdelweissBool\">\n  <div *ngFor=\"let tableEdelweissKaminStube of tablesEdelweissKaminStube; let j = index;\">\n    <div *ngIf=\"tablesEdelweissKaminStube[j] !== tablesEdelweissKaminStube[j+1]\">\n      <button style=\"float: right; margin: 20px 0px 20px 0px; background-color: #0a7a74; color: #FFFFFF\" type=\"button\" class=\"btn btn-send\" (click)=\"occupy(tableEdelweissKaminStube)\">{{tableEdelweissKaminStube.isBesetzt === 'true' ? 'FREI MACHEN' : ''}}</button>\n      <h4><b> Tisch:</b>{{tableEdelweissKaminStube.number}} </h4><br>\n      <div class='cards-container' id='containerEdelweissKaminStube' [ngStyle]=\"{'background-color': + tableEdelweissKaminStube.bgColor}\">\n        <div class=\"table\" [ngStyle]=\"{'background-color': '#' + tableEdelweissKaminStube.bgColor}\">\n          <div *ngIf=\"tableEdelweissKaminStube.isBesetzt === 'true'\">\n            <div *ngFor=\"let group of tableEdelweissKaminStube.groups; let j = index;\">\n              <div [style.border]=\"getStyle(group.traceValue)\">\n                <div *ngIf=\"group.nameValue\">\n                  <p style=\"background-color: #FFFFFF; padding: 10px\">\n                    <b> Name:</b> {{group.nameValue}}<br>\n                    <b> Zimmernummer:</b> {{group.zimmernummerValue}}<br>\n                    <b> Anreise Datum:</b> {{group.anreiseValue}}<br>\n                    <b> Abreise Datum:</b> {{group.abreiseValue}}<br>\n                    <b> Personenanzahl:</b> {{group.personenAnzahlValue}}<br>\n                    <b> Notiz1:</b> {{group.notiz1Value}}<br>\n                    <b> Notiz2:</b> {{group.notiz2Value}}<br>\n                    <b> Trace:</b> {{group.traceValue}}<br>\n                    <b> Bemerkung:</b> {{group.bemerkungValue}}<br>\n                  </p>\n                </div>\n              </div>\n              <div *ngIf=\"group.newTraceText\">\n                <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                  <b> Zimmernummer: </b>{{group.newTraceRoomNumber}}<br> <b> Neuer Trace: </b>{{group.newTraceText}} <br> <b> Tischnummer: </b>{{group.newTraceTableNumber}} <br> <b> Mitarbeiter: </b>{{group.newTraceEmployee}} <br> <b> Name: </b>{{group.newTraceName}} <br> <b> Datum: </b>{{group.newTraceDate}}\n                </p>\n              </div>\n            </div>\n        </div>\n        <div *ngIf=\"tableEdelweissKaminStube.placeholder === 'true'\">\n          <p [dragula]='\"evented-bag\"' id=\"EdelweissKaminStube\" style=\"background-color: #9d9d9d; border: dashed 3px black; margin-top: 50px; opacity: 0.4; padding: 10px 10px 10px 10px\">Listen-Element hier hin ziehen! {{tableEdelweissKaminStube.number}} {{tableEdelweissKaminStube.department}} {{j}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/departments/edelweiss-kamin-stube/edelweiss-kamin-stube.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var EdelweissKaminStubeComponent = (function () {
    function EdelweissKaminStubeComponent() {
        this.occupied = new core_1.EventEmitter();
        this.t = 3;
    }
    EdelweissKaminStubeComponent.prototype.ngOnInit = function () {
    };
    EdelweissKaminStubeComponent.prototype.occupy = function (table) {
        var t = this.t;
        this.occupied.emit({ table: table, t: t });
    };
    EdelweissKaminStubeComponent.prototype.getStyle = function (j) {
        if (j != "-") {
            return "solid 3px red";
        }
        else {
            return "";
        }
    };
    EdelweissKaminStubeComponent.prototype.transform = function (tables, term) {
        console.log("term");
        console.log(term);
        if (term == "") {
            this.tablesEdelweissKaminStube = tables;
        }
        else {
            if (Array.isArray(tables) && tables.length && term && term.length) {
                this.tablesEdelweissKaminStube = tables.filter(function (item) {
                    console.log(item);
                    var keys = Object.keys(item);
                    if (item.groups) {
                        var keysGroups = Object.keys(item.groups);
                        console.log(keys);
                        console.log(keysGroups);
                        console.log();
                        if (Array.isArray(keys) && keys.length) {
                            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                                var key = keys_1[_i];
                                if (item.hasOwnProperty(key) && item[key] && item[key].length && (item[key].toString().toLowerCase().replace(/ /g, '')).includes((term.toString().toLowerCase().replace(/ /g, '')))) {
                                    return true;
                                }
                                else if (item.groups) {
                                    for (var _a = 0, keysGroups_1 = keysGroups; _a < keysGroups_1.length; _a++) {
                                        var keyGroups = keysGroups_1[_a];
                                        var keysGroupsGroups = Object.keys(item.groups[keyGroups]);
                                        for (var _b = 0, keysGroupsGroups_1 = keysGroupsGroups; _b < keysGroupsGroups_1.length; _b++) {
                                            var keyGroupsGroups = keysGroupsGroups_1[_b];
                                            if (item.groups[keyGroups][keyGroupsGroups]) {
                                                if (item.groups[keyGroups][keyGroupsGroups].toString().toLowerCase().replace(/ /g, '').includes((term.toString().toLowerCase().replace(/ /g, '')))) {
                                                    return true;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            return false;
                        }
                        else {
                            return false;
                        }
                    }
                });
            }
            else {
                return tables;
            }
        }
    };
    return EdelweissKaminStubeComponent;
}());
__decorate([
    core_1.Input('tablesEdelweissKaminStube'),
    __metadata("design:type", Array)
], EdelweissKaminStubeComponent.prototype, "tablesEdelweissKaminStube", void 0);
__decorate([
    core_1.Input('showEdelweissBool'),
    __metadata("design:type", Boolean)
], EdelweissKaminStubeComponent.prototype, "showEdelweissBool", void 0);
__decorate([
    core_1.Input('term'),
    __metadata("design:type", String)
], EdelweissKaminStubeComponent.prototype, "term", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], EdelweissKaminStubeComponent.prototype, "occupied", void 0);
EdelweissKaminStubeComponent = __decorate([
    core_1.Component({
        selector: 'app-edelweiss-kamin-stube',
        template: __webpack_require__("../../../../../src/app/components/digitalerTischplan/departments/edelweiss-kamin-stube/edelweiss-kamin-stube.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digitalerTischplan/tischplan.component.css")]
    }),
    __metadata("design:paramtypes", [])
], EdelweissKaminStubeComponent);
exports.EdelweissKaminStubeComponent = EdelweissKaminStubeComponent;
var _a;
//# sourceMappingURL=edelweiss-kamin-stube.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/departments/teestube-teelounge/teestube-teelounge.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showTeeStubeBool\">\n  <div *ngFor=\"let tableTeestubeTeelounge of tablesTeestubeTeelounge; let j = index;\">\n    <div *ngIf=\"tablesTeestubeTeelounge[j] !== tablesTeestubeTeelounge[j+1]\">\n      <button style=\"float: right; margin: 20px 0px 20px 0px; background-color: #0a7a74; color: #FFFFFF\" type=\"button\" class=\"btn btn-send\" (click)=\"occupy(tableTeestubeTeelounge)\">{{tableTeestubeTeelounge.isBesetzt === 'true' ? 'FREI MACHEN' : ''}}</button>\n      <h4><b> Tisch:</b>{{tableTeestubeTeelounge.number}} </h4><br>\n      <div class='cards-container' id='containerTeestubeTeelounge' [ngStyle]=\"{'background-color': + tableTeestubeTeelounge.bgColor}\">\n        <div class=\"table\" [ngStyle]=\"{'background-color': '#' + tableTeestubeTeelounge.bgColor}\">\n          <div *ngIf=\"tableTeestubeTeelounge.isBesetzt === 'true'\">\n            <div *ngFor=\"let group of tableTeestubeTeelounge.groups; let j = index;\">\n              <div [style.border]=\"getStyle(group.traceValue)\">\n                <div *ngIf=\"group.nameValue\">\n                  <p style=\"background-color: #FFFFFF; padding: 10px\">\n                    <b> Name:</b> {{group.nameValue}}<br>\n                    <b> Zimmernummer:</b> {{group.zimmernummerValue}}<br>\n                    <b> Anreise Datum:</b> {{group.anreiseValue}}<br>\n                    <b> Abreise Datum:</b> {{group.abreiseValue}}<br>\n                    <b> Personenanzahl:</b> {{group.personenAnzahlValue}}<br>\n                    <b> Notiz1:</b> {{group.notiz1Value}}<br>\n                    <b> Notiz2:</b> {{group.notiz2Value}}<br>\n                    <b> Trace:</b> {{group.traceValue}}<br>\n                    <b> Bemerkung:</b> {{group.bemerkungValue}}<br>\n                  </p>\n                </div>\n              </div>\n              <div *ngIf=\"group.newTraceText\">\n                <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                  <b> Zimmernummer: </b>{{group.newTraceRoomNumber}}<br> <b> Neuer Trace: </b>{{group.newTraceText}} <br> <b> Tischnummer: </b>{{group.newTraceTableNumber}} <br> <b> Mitarbeiter: </b>{{group.newTraceEmployee}} <br> <b> Name: </b>{{group.newTraceName}} <br> <b> Datum: </b>{{group.newTraceDate}}\n                </p>\n              </div>\n            </div>\n\n          </div>\n        </div>\n        <div *ngIf=\"tableTeestubeTeelounge.placeholder === 'true'\">\n          <p [dragula]='\"evented-bag\"' id=\"TeestubeTeelounge\" style=\"background-color: #9d9d9d; border: dashed 3px black; margin-top: 50px; opacity: 0.4; padding: 10px 10px 10px 10px\">Listen-Element hier hin ziehen! {{tableTeestubeTeelounge.number}} {{tableTeestubeTeelounge.department}} {{j}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/departments/teestube-teelounge/teestube-teelounge.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var TeestubeTeeloungeComponent = (function () {
    function TeestubeTeeloungeComponent() {
        this.occupied = new core_1.EventEmitter();
        this.t = 0;
    }
    TeestubeTeeloungeComponent.prototype.ngOnInit = function () {
    };
    TeestubeTeeloungeComponent.prototype.occupy = function (table) {
        var t = this.t;
        this.occupied.emit({ table: table, t: t });
    };
    TeestubeTeeloungeComponent.prototype.getStyle = function (j) {
        if (j != "-") {
            return "solid 3px red";
        }
        else {
            return "";
        }
    };
    TeestubeTeeloungeComponent.prototype.transform = function (tables, term) {
        console.log("term");
        console.log(term);
        if (term == "") {
            this.tablesTeestubeTeelounge = tables;
        }
        else {
            if (Array.isArray(tables) && tables.length && term && term.length) {
                this.tablesTeestubeTeelounge = tables.filter(function (item) {
                    console.log(item);
                    var keys = Object.keys(item);
                    if (item.groups) {
                        var keysGroups = Object.keys(item.groups);
                        console.log(keys);
                        console.log(keysGroups);
                        console.log();
                        if (Array.isArray(keys) && keys.length) {
                            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                                var key = keys_1[_i];
                                if (item.hasOwnProperty(key) && item[key] && item[key].length && (item[key].toString().toLowerCase().replace(/ /g, '')).includes((term.toString().toLowerCase().replace(/ /g, '')))) {
                                    return true;
                                }
                                else if (item.groups) {
                                    for (var _a = 0, keysGroups_1 = keysGroups; _a < keysGroups_1.length; _a++) {
                                        var keyGroups = keysGroups_1[_a];
                                        var keysGroupsGroups = Object.keys(item.groups[keyGroups]);
                                        for (var _b = 0, keysGroupsGroups_1 = keysGroupsGroups; _b < keysGroupsGroups_1.length; _b++) {
                                            var keyGroupsGroups = keysGroupsGroups_1[_b];
                                            if (item.groups[keyGroups][keyGroupsGroups]) {
                                                if (item.groups[keyGroups][keyGroupsGroups].toString().toLowerCase().replace(/ /g, '').includes((term.toString().toLowerCase().replace(/ /g, '')))) {
                                                    return true;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            return false;
                        }
                        else {
                            return false;
                        }
                    }
                });
            }
            else {
                return tables;
            }
        }
    };
    return TeestubeTeeloungeComponent;
}());
__decorate([
    core_1.Input('tablesTeestubeTeelounge'),
    __metadata("design:type", Array)
], TeestubeTeeloungeComponent.prototype, "tablesTeestubeTeelounge", void 0);
__decorate([
    core_1.Input('showTeeStubeBool'),
    __metadata("design:type", Boolean)
], TeestubeTeeloungeComponent.prototype, "showTeeStubeBool", void 0);
__decorate([
    core_1.Input('term'),
    __metadata("design:type", String)
], TeestubeTeeloungeComponent.prototype, "term", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], TeestubeTeeloungeComponent.prototype, "occupied", void 0);
TeestubeTeeloungeComponent = __decorate([
    core_1.Component({
        selector: 'app-teestube-teelounge',
        template: __webpack_require__("../../../../../src/app/components/digitalerTischplan/departments/teestube-teelounge/teestube-teelounge.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digitalerTischplan/tischplan.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TeestubeTeeloungeComponent);
exports.TeestubeTeeloungeComponent = TeestubeTeeloungeComponent;
var _a;
//# sourceMappingURL=teestube-teelounge.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/departments/terasse/terasse.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showTerasseBool\">\n  <div *ngFor=\"let tableTerasse of tablesTerasse; let j = index;\">\n    <div *ngIf=\"tablesTerasse[j] !== tablesTerasse[j+1]\">\n      <button style=\"float: right; margin: 20px 0px 20px 0px; background-color: #0a7a74; color: #FFFFFF\" type=\"button\" class=\"btn btn-send\" (click)=\"occupy(tableTerasse)\">{{tableTerasse.isBesetzt === 'true' ? 'FREI MACHEN' : ''}}</button>\n      <h4><b> Tisch:</b>{{tableTerasse.number}} </h4><br>\n      <div class='cards-container' id='containerTerasse' [ngStyle]=\"{'background-color': + tableTerasse.bgColor}\">\n        <div class=\"table\" [ngStyle]=\"{'background-color': '#' + tableTerasse.bgColor}\">\n          <div *ngIf=\"tableTerasse.isBesetzt === 'true'\">\n            <div *ngFor=\"let group of tableTerasse.groups; let j = index;\">\n              <div [style.border]=\"getStyle(group.traceValue)\">\n                <div *ngIf=\"group.nameValue\">\n                  <p style=\"background-color: #FFFFFF; padding: 10px\">\n                    <b> Name:</b> {{group.nameValue}}<br>\n                    <b> Zimmernummer:</b> {{group.zimmernummerValue}}<br>\n                    <b> Anreise Datum:</b> {{group.anreiseValue}}<br>\n                    <b> Abreise Datum:</b> {{group.abreiseValue}}<br>\n                    <b> Personenanzahl:</b> {{group.personenAnzahlValue}}<br>\n                    <b> Notiz1:</b> {{group.notiz1Value}}<br>\n                    <b> Notiz2:</b> {{group.notiz2Value}}<br>\n                    <b> Trace:</b> {{group.traceValue}}<br>\n                    <b> Bemerkung:</b> {{group.bemerkungValue}}<br>\n                  </p>\n                </div>\n              </div>\n              <div *ngIf=\"group.newTraceText\">\n                <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                  <b> Zimmernummer: </b>{{group.newTraceRoomNumber}}<br> <b> Neuer Trace: </b>{{group.newTraceText}} <br> <b> Tischnummer: </b>{{group.newTraceTableNumber}} <br> <b> Mitarbeiter: </b>{{group.newTraceEmployee}} <br> <b> Name: </b>{{group.newTraceName}} <br> <b> Datum: </b>{{group.newTraceDate}}\n                </p>\n              </div>\n            </div>\n\n          </div>\n        </div>\n        <div *ngIf=\"tableTerasse.placeholder === 'true'\">\n          <p [dragula]='\"evented-bag\"' id=\"Terasse\" style=\"background-color: #9d9d9d; border: dashed 3px black; margin-top: 50px; opacity: 0.4; padding: 10px 10px 10px 10px\">Listen-Element hier hin ziehen! {{tableTerasse.number}} {{tableTerasse.department}} {{j}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/departments/terasse/terasse.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var TerasseComponent = (function () {
    function TerasseComponent() {
        this.occupied = new core_1.EventEmitter();
        this.t = 0;
    }
    TerasseComponent.prototype.ngOnInit = function () {
    };
    TerasseComponent.prototype.occupy = function (table) {
        var t = this.t;
        this.occupied.emit({ table: table, t: t });
    };
    TerasseComponent.prototype.getStyle = function (j) {
        if (j != "-") {
            return "solid 3px red";
        }
        else {
            return "";
        }
    };
    TerasseComponent.prototype.transform = function (tables, term) {
        console.log("term");
        console.log(term);
        if (term == "") {
            this.tablesTerasse = tables;
        }
        else {
            if (Array.isArray(tables) && tables.length && term && term.length) {
                this.tablesTerasse = tables.filter(function (item) {
                    console.log(item);
                    var keys = Object.keys(item);
                    if (item.groups) {
                        var keysGroups = Object.keys(item.groups);
                        console.log(keys);
                        console.log(keysGroups);
                        console.log();
                        if (Array.isArray(keys) && keys.length) {
                            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                                var key = keys_1[_i];
                                if (item.hasOwnProperty(key) && item[key] && item[key].length && (item[key].toString().toLowerCase().replace(/ /g, '')).includes((term.toString().toLowerCase().replace(/ /g, '')))) {
                                    return true;
                                }
                                else if (item.groups) {
                                    for (var _a = 0, keysGroups_1 = keysGroups; _a < keysGroups_1.length; _a++) {
                                        var keyGroups = keysGroups_1[_a];
                                        var keysGroupsGroups = Object.keys(item.groups[keyGroups]);
                                        for (var _b = 0, keysGroupsGroups_1 = keysGroupsGroups; _b < keysGroupsGroups_1.length; _b++) {
                                            var keyGroupsGroups = keysGroupsGroups_1[_b];
                                            if (item.groups[keyGroups][keyGroupsGroups]) {
                                                if (item.groups[keyGroups][keyGroupsGroups].toString().toLowerCase().replace(/ /g, '').includes((term.toString().toLowerCase().replace(/ /g, '')))) {
                                                    return true;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            return false;
                        }
                        else {
                            return false;
                        }
                    }
                });
            }
            else {
                return tables;
            }
        }
    };
    return TerasseComponent;
}());
__decorate([
    core_1.Input('tablesTerasse'),
    __metadata("design:type", Array)
], TerasseComponent.prototype, "tablesTerasse", void 0);
__decorate([
    core_1.Input('showTerasseBool'),
    __metadata("design:type", Boolean)
], TerasseComponent.prototype, "showTerasseBool", void 0);
__decorate([
    core_1.Input('term'),
    __metadata("design:type", String)
], TerasseComponent.prototype, "term", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], TerasseComponent.prototype, "occupied", void 0);
TerasseComponent = __decorate([
    core_1.Component({
        selector: 'app-terasse',
        template: __webpack_require__("../../../../../src/app/components/digitalerTischplan/departments/terasse/terasse.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digitalerTischplan/tischplan.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TerasseComponent);
exports.TerasseComponent = TerasseComponent;
var _a;
//# sourceMappingURL=terasse.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/departments/terrasse-edelweiss/terrasse-edelweiss.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showTerrasseEdelweissBool\">\n  <div *ngFor=\"let tableTerrasseEdelweiss of tablesTerrasseEdelweiss; let j = index;\">\n    <div *ngIf=\"tablesTerrasseEdelweiss[j] !== tablesTerrasseEdelweiss[j+1]\">\n      <button style=\"float: right; margin: 20px 0px 20px 0px; background-color: #0a7a74; color: #FFFFFF\" type=\"button\" class=\"btn btn-send\" (click)=\"occupy(tableTerrasseEdelweiss)\">{{tableTerrasseEdelweiss.isBesetzt === 'true' ? 'FREI MACHEN' : ''}}</button>\n      <h4><b> Tisch:</b>{{tableTerrasseEdelweiss.number}} </h4><br>\n      <div class='cards-container' id='containerTerrasseEdelweiss' [ngStyle]=\"{'background-color': + tableTerrasseEdelweiss.bgColor}\">\n        <div class=\"table\" [ngStyle]=\"{'background-color': '#' + tableTerrasseEdelweiss.bgColor}\">\n          <div *ngIf=\"tableTerrasseEdelweiss.isBesetzt === 'true'\">\n            <div *ngFor=\"let group of tableTerrasseEdelweiss.groups; let j = index;\">\n              <div [style.border]=\"getStyle(group.traceValue)\">\n                <div *ngIf=\"group.nameValue\">\n                  <p style=\"background-color: #FFFFFF; padding: 10px\">\n                    <b> Name:</b> {{group.nameValue}}<br>\n                    <b> Zimmernummer:</b> {{group.zimmernummerValue}}<br>\n                    <b> Anreise Datum:</b> {{group.anreiseValue}}<br>\n                    <b> Abreise Datum:</b> {{group.abreiseValue}}<br>\n                    <b> Personenanzahl:</b> {{group.personenAnzahlValue}}<br>\n                    <b> Notiz1:</b> {{group.notiz1Value}}<br>\n                    <b> Notiz2:</b> {{group.notiz2Value}}<br>\n                    <b> Trace:</b> {{group.traceValue}}<br>\n                    <b> Bemerkung:</b> {{group.bemerkungValue}}<br>\n                  </p>\n                </div>\n              </div>\n              <div *ngIf=\"group.newTraceText\">\n                <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                  <b> Zimmernummer: </b>{{group.newTraceRoomNumber}}<br> <b> Neuer Trace: </b>{{group.newTraceText}} <br> <b> Tischnummer: </b>{{group.newTraceTableNumber}} <br> <b> Mitarbeiter: </b>{{group.newTraceEmployee}} <br> <b> Name: </b>{{group.newTraceName}} <br> <b> Datum: </b>{{group.newTraceDate}}\n                </p>\n              </div>\n            </div>\n\n          </div>\n        </div>\n        <div *ngIf=\"tableTerrasseEdelweiss.placeholder === 'true'\">\n          <p [dragula]='\"evented-bag\"' id=\"TerrasseEdelweiss\" style=\"background-color: #9d9d9d; border: dashed 3px black; margin-top: 50px; opacity: 0.4; padding: 10px 10px 10px 10px\">Listen-Element hier hin ziehen! {{tableTerrasseEdelweiss.number}} {{tableTerrasseEdelweiss.department}} {{j}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/departments/terrasse-edelweiss/terrasse-edelweiss.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var TerrasseEdelweissComponent = (function () {
    function TerrasseEdelweissComponent() {
        this.occupied = new core_1.EventEmitter();
        this.t = 0;
    }
    TerrasseEdelweissComponent.prototype.ngOnInit = function () {
    };
    TerrasseEdelweissComponent.prototype.occupy = function (table) {
        var t = this.t;
        this.occupied.emit({ table: table, t: t });
    };
    TerrasseEdelweissComponent.prototype.getStyle = function (j) {
        if (j != "-") {
            return "solid 3px red";
        }
        else {
            return "";
        }
    };
    TerrasseEdelweissComponent.prototype.transform = function (tables, term) {
        console.log("term");
        console.log(term);
        if (term == "") {
            this.tablesTerrasseEdelweiss = tables;
        }
        else {
            if (Array.isArray(tables) && tables.length && term && term.length) {
                this.tablesTerrasseEdelweiss = tables.filter(function (item) {
                    console.log(item);
                    var keys = Object.keys(item);
                    if (item.groups) {
                        var keysGroups = Object.keys(item.groups);
                        console.log(keys);
                        console.log(keysGroups);
                        console.log();
                        if (Array.isArray(keys) && keys.length) {
                            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                                var key = keys_1[_i];
                                if (item.hasOwnProperty(key) && item[key] && item[key].length && (item[key].toString().toLowerCase().replace(/ /g, '')).includes((term.toString().toLowerCase().replace(/ /g, '')))) {
                                    return true;
                                }
                                else if (item.groups) {
                                    for (var _a = 0, keysGroups_1 = keysGroups; _a < keysGroups_1.length; _a++) {
                                        var keyGroups = keysGroups_1[_a];
                                        var keysGroupsGroups = Object.keys(item.groups[keyGroups]);
                                        for (var _b = 0, keysGroupsGroups_1 = keysGroupsGroups; _b < keysGroupsGroups_1.length; _b++) {
                                            var keyGroupsGroups = keysGroupsGroups_1[_b];
                                            if (item.groups[keyGroups][keyGroupsGroups]) {
                                                if (item.groups[keyGroups][keyGroupsGroups].toString().toLowerCase().replace(/ /g, '').includes((term.toString().toLowerCase().replace(/ /g, '')))) {
                                                    return true;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            return false;
                        }
                        else {
                            return false;
                        }
                    }
                });
            }
            else {
                return tables;
            }
        }
    };
    return TerrasseEdelweissComponent;
}());
__decorate([
    core_1.Input('tablesTerrasseEdelweiss'),
    __metadata("design:type", Array)
], TerrasseEdelweissComponent.prototype, "tablesTerrasseEdelweiss", void 0);
__decorate([
    core_1.Input('showTerrasseEdelweissBool'),
    __metadata("design:type", Boolean)
], TerrasseEdelweissComponent.prototype, "showTerrasseEdelweissBool", void 0);
__decorate([
    core_1.Input('term'),
    __metadata("design:type", String)
], TerrasseEdelweissComponent.prototype, "term", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], TerrasseEdelweissComponent.prototype, "occupied", void 0);
TerrasseEdelweissComponent = __decorate([
    core_1.Component({
        selector: 'app-terrasse-edelweiss',
        template: __webpack_require__("../../../../../src/app/components/digitalerTischplan/departments/terrasse-edelweiss/terrasse-edelweiss.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digitalerTischplan/tischplan.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TerrasseEdelweissComponent);
exports.TerrasseEdelweissComponent = TerrasseEdelweissComponent;
var _a;
//# sourceMappingURL=terrasse-edelweiss.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/departments/waeldler-stube-kristall-stube/waeldler-stube-kristall-stube.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showWaeldlerBool\">\n  <div *ngFor=\"let tableWaeldlerStubeKristallStube of tablesWaeldlerStubeKristallStube; let j = index;\">\n    <div *ngIf=\"tablesWaeldlerStubeKristallStube[j] !== tablesWaeldlerStubeKristallStube[j+1]\">\n      <button style=\"float: right; margin: 20px 0px 20px 0px; background-color: #0a7a74; color: #FFFFFF\" type=\"button\" class=\"btn btn-send\" (click)=\"occupy(tableWaeldlerStubeKristallStube)\">{{tableWaeldlerStubeKristallStube.isBesetzt === 'true' ? 'FREI MACHEN' : ''}}</button>\n      <h4><b> Tisch:</b>{{tableWaeldlerStubeKristallStube.number}} </h4><br>\n      <div class='cards-container' id='containerWaeldlerStubeKristallStube' [ngStyle]=\"{'background-color': + tableWaeldlerStubeKristallStube.bgColor}\">\n        <div class=\"table\" [ngStyle]=\"{'background-color': '#' + tableWaeldlerStubeKristallStube.bgColor}\">\n          <div *ngIf=\"tableWaeldlerStubeKristallStube.isBesetzt === 'true'\">\n            <div *ngFor=\"let group of tableWaeldlerStubeKristallStube.groups; let j = index;\">\n              <div [style.border]=\"getStyle(group.traceValue)\">\n                <div *ngIf=\"group.nameValue\">\n                  <p style=\"background-color: #FFFFFF; padding: 10px\">\n                    <b> Name:</b> {{group.nameValue}}<br>\n                    <b> Zimmernummer:</b> {{group.zimmernummerValue}}<br>\n                    <b> Anreise Datum:</b> {{group.anreiseValue}}<br>\n                    <b> Abreise Datum:</b> {{group.abreiseValue}}<br>\n                    <b> Personenanzahl:</b> {{group.personenAnzahlValue}}<br>\n                    <b> Notiz1:</b> {{group.notiz1Value}}<br>\n                    <b> Notiz2:</b> {{group.notiz2Value}}<br>\n                    <b> Trace:</b> {{group.traceValue}}<br>\n                    <b> Bemerkung:</b> {{group.bemerkungValue}}<br>\n                  </p>\n                </div>\n              </div>\n              <div *ngIf=\"group.newTraceText\">\n                <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                  <b> Zimmernummer: </b>{{group.newTraceRoomNumber}}<br> <b> Neuer Trace: </b>{{group.newTraceText}} <br> <b> Tischnummer: </b>{{group.newTraceTableNumber}} <br> <b> Mitarbeiter: </b>{{group.newTraceEmployee}} <br> <b> Name: </b>{{group.newTraceName}} <br> <b> Datum: </b>{{group.newTraceDate}}\n                </p>\n              </div>\n            </div>\n\n          </div>\n        </div>\n        <div *ngIf=\"tableWaeldlerStubeKristallStube.placeholder === 'true'\">\n          <p [dragula]='\"evented-bag\"' id=\"WaeldlerStubeKristallStube\" style=\"background-color: #9d9d9d; border: dashed 3px black; margin-top: 50px; opacity: 0.4; padding: 10px 10px 10px 10px\">Listen-Element hier hin ziehen!{{tableWaeldlerStubeKristallStube.number}} {{tableWaeldlerStubeKristallStube.department}} {{j}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/departments/waeldler-stube-kristall-stube/waeldler-stube-kristall-stube.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var WaeldlerStubeKristallStubeComponent = (function () {
    function WaeldlerStubeKristallStubeComponent() {
        this.occupied = new core_1.EventEmitter();
        this.t = 4;
    }
    WaeldlerStubeKristallStubeComponent.prototype.ngOnInit = function () {
    };
    WaeldlerStubeKristallStubeComponent.prototype.occupy = function (table) {
        var t = this.t;
        this.occupied.emit({ table: table, t: t });
    };
    WaeldlerStubeKristallStubeComponent.prototype.getStyle = function (j) {
        if (j != "-") {
            return "solid 3px red";
        }
        else {
            return "";
        }
    };
    WaeldlerStubeKristallStubeComponent.prototype.transform = function (tables, term) {
        console.log("term");
        console.log(term);
        if (term == "") {
            this.tablesWaeldlerStubeKristallStube = tables;
        }
        else {
            if (Array.isArray(tables) && tables.length && term && term.length) {
                this.tablesWaeldlerStubeKristallStube = tables.filter(function (item) {
                    console.log(item);
                    var keys = Object.keys(item);
                    if (item.groups) {
                        var keysGroups = Object.keys(item.groups);
                        console.log(keys);
                        console.log(keysGroups);
                        console.log();
                        if (Array.isArray(keys) && keys.length) {
                            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                                var key = keys_1[_i];
                                if (item.hasOwnProperty(key) && item[key] && item[key].length && (item[key].toString().toLowerCase().replace(/ /g, '')).includes((term.toString().toLowerCase().replace(/ /g, '')))) {
                                    return true;
                                }
                                else if (item.groups) {
                                    for (var _a = 0, keysGroups_1 = keysGroups; _a < keysGroups_1.length; _a++) {
                                        var keyGroups = keysGroups_1[_a];
                                        var keysGroupsGroups = Object.keys(item.groups[keyGroups]);
                                        for (var _b = 0, keysGroupsGroups_1 = keysGroupsGroups; _b < keysGroupsGroups_1.length; _b++) {
                                            var keyGroupsGroups = keysGroupsGroups_1[_b];
                                            if (item.groups[keyGroups][keyGroupsGroups]) {
                                                if (item.groups[keyGroups][keyGroupsGroups].toString().toLowerCase().replace(/ /g, '').includes((term.toString().toLowerCase().replace(/ /g, '')))) {
                                                    return true;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            return false;
                        }
                        else {
                            return false;
                        }
                    }
                });
            }
            else {
                return tables;
            }
        }
    };
    return WaeldlerStubeKristallStubeComponent;
}());
__decorate([
    core_1.Input('tablesWaeldlerStubeKristallStube'),
    __metadata("design:type", Array)
], WaeldlerStubeKristallStubeComponent.prototype, "tablesWaeldlerStubeKristallStube", void 0);
__decorate([
    core_1.Input('showWaeldlerBool'),
    __metadata("design:type", Boolean)
], WaeldlerStubeKristallStubeComponent.prototype, "showWaeldlerBool", void 0);
__decorate([
    core_1.Input('term'),
    __metadata("design:type", String)
], WaeldlerStubeKristallStubeComponent.prototype, "term", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], WaeldlerStubeKristallStubeComponent.prototype, "occupied", void 0);
WaeldlerStubeKristallStubeComponent = __decorate([
    core_1.Component({
        selector: 'app-waeldler-stube-kristall-stube',
        template: __webpack_require__("../../../../../src/app/components/digitalerTischplan/departments/waeldler-stube-kristall-stube/waeldler-stube-kristall-stube.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digitalerTischplan/tischplan.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WaeldlerStubeKristallStubeComponent);
exports.WaeldlerStubeKristallStubeComponent = WaeldlerStubeKristallStubeComponent;
var _a;
//# sourceMappingURL=waeldler-stube-kristall-stube.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/form/form.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showNotizFormBool\">\n  <div *ngIf=\"showAlleBool === false\">\n    <div class=\"notiz\">\n      <div *ngIf=\"showBauernStubnBool\">\n        <div *ngFor=\"let notizElement of notizElements\" >\n          <div *ngIf=\"notizElement.departmentNotizInput === 'Bauernstube'\">\n            <div style=\"border: solid 3px greenyellow; padding: 10px; margin: 20px;\">\n              <p  style=\"color: white\"> {{notizElement.notizInput === '' ? \"Keine Notiz\" : notizElement.notizInput}} <br><b>  Datum: </b> {{notizElement.notizInput === '' ? \"\" : notizElement.date}}</p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"showEdelweissBool\">\n        <div *ngFor=\"let notizElement of notizElements\">\n          <div *ngIf=\"notizElement.departmentNotizInput === 'EdelweissKaminStube'\">\n            <div style=\"border: solid 3px greenyellow; padding: 10px; margin: 20px;\">\n              <p  style=\"color: white\"> {{notizElement.notizInput === '' ? \"Keine Notiz\" : notizElement.notizInput}} <br><b>  Datum: </b> {{notizElement.notizInput === '' ? \"\" : notizElement.date}}</p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"showBerglerBool\">\n        <div *ngFor=\"let notizElement of notizElements\">\n          <div *ngIf=\"notizElement.departmentNotizInput === 'BerglerStubeHubertusStube'\">\n            <div style=\"border: solid 3px greenyellow; padding: 10px; margin: 20px;\">\n              <p  style=\"color: white\"> {{notizElement.notizInput === '' ? \"Keine Notiz\" : notizElement.notizInput}} <br><b>  Datum: </b> {{notizElement.notizInput === '' ? \"\" : notizElement.date}}</p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"showTeeStubeBool\">\n        <div *ngFor=\"let notizElement of notizElements\">\n          <div *ngIf=\"notizElement.departmentNotizInput === 'TeestubeTeelounge'\">\n            <div style=\"border: solid 3px greenyellow; padding: 10px; margin: 20px;\">\n              <p  style=\"color: white\"> {{notizElement.notizInput === '' ? \"Keine Notiz\" : notizElement.notizInput}} <br><b>  Datum: </b> {{notizElement.notizInput === '' ? \"\" : notizElement.date}}</p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"showWaeldlerBool\">\n        <div *ngFor=\"let notizElement of notizElements\">\n          <div *ngIf=\"notizElement.departmentNotizInput === 'WaeldlerStubeKristallStube'\">\n            <div style=\"border: solid 3px greenyellow; padding: 10px; margin: 10px;\">\n              <p  style=\"color: white\"> {{notizElement.notizInput === '' ? \"Keine Notiz\" : notizElement.notizInput}} <br><b>  Datum: </b> {{notizElement.notizInput === '' ? \"\" : notizElement.date}}</p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"showTerasseBool\">\n        <div *ngFor=\"let notizElement of notizElements\">\n          <div *ngIf=\"notizElement.departmentNotizInput === 'Terasse'\">\n            <div style=\"border: solid 3px greenyellow; padding: 10px; margin: 10px;\">\n              <p  style=\"color: white\"> {{notizElement.notizInput === '' ? \"Keine Notiz\" : notizElement.notizInput}} <br><b>  Datum: </b> {{notizElement.notizInput === '' ? \"\" : notizElement.date}}</p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"showTerrasseEdelweissBool\">\n        <div *ngFor=\"let notizElement of notizElements\">\n          <div *ngIf=\"notizElement.departmentNotizInput === 'TerrasseEdelweiss'\">\n            <div style=\"border: solid 3px greenyellow; padding: 10px; margin: 10px;\">\n              <p  style=\"color: white\"> {{notizElement.notizInput === '' ? \"Keine Notiz\" : notizElement.notizInput}} <br><b>  Datum: </b> {{notizElement.notizInput === '' ? \"\" : notizElement.date}}</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <form class=\"SendNotiz\"  #myForm=\"ngForm\" (submit)=\"sendNotiz($event); myForm.reset() \">\n    <div class=\"form-row\">\n      <div class=\"form-group\" style=\"min-height: 250px\">\n        <div class=\"col-lg-12\">\n          <label for=\"department\" style=\"padding-bottom: 20px\">Abteilung</label>\n          <select class=\"form-control\"  id=\"department\" style=\"margin-bottom: 10px;\" required [(ngModel)]=\"departmentNotizInput\" placeholder=\"Abteilung auswählen\" name=\"departmentNotizInput\">\n            <option *ngFor=\"let department of departments\"\n                    [value]=\"department\">\n              {{department}}\n            </option>\n          </select>\n        </div>\n        <div class=\"col-lg-12\">\n                <textarea id=\"notizText\" rows=\"5\" type=\"text\" style=\"margin-bottom: 10px; margin-top: 20px\" [(ngModel)]=\"notizInput\" placeholder=\"Notiz hinzufügen\" name=\"title\" class=\"form-control\" required>\n                </textarea>\n        </div>\n      </div>\n      <button type=\"button|submit|reset\" style=\"float: right; margin: 10px 20px 0px 0px;\" class=\"btn btn-primary\">Hinzufügen</button>\n    </div>\n  </form>\n</div>\n<div *ngIf=\"showInfoFormBool\">\n  <form class=\"SendInformation\" #myForm=\"ngForm\" (submit)=\"sendInformation($event); myForm.reset() \">\n    <div class=\"form-row\">\n      <div class=\"form-group\">\n        <div class=\"col-lg-6 col-xs-6\">\n          <input  class=\"form-control\" style=\"margin-top: 20px\" id=\"name\" [(ngModel)]=\"nameTraceInput\" name=\"Name\" placeholder=\"Name\">\n          <input  class=\"form-control\" style=\"margin-top: 20px\" id=\"roomNumber\" [(ngModel)]=\"roomNumber\" name=\"roomNumber\" placeholder=\"Zimmer Nummer\">\n        </div>\n        <div class=\"col-lg-6 col-xs-6\">\n          <input  class=\"form-control\" style=\"margin-top: 20px\" id=\"tableNumber\" [(ngModel)]=\"tableNumber\" name=\"tableNumber\" placeholder=\"Tisch Nummer\">\n          <input  class=\"form-control\" style=\"margin-top: 20px\" id=\"employee\" [(ngModel)]=\"employee\" name=\"employee\" placeholder=\"Mitarbeiter\">\n        </div>\n        <div class=\"col-lg-12 col-xs-12\">\n                <textarea id=\"informationText\" rows=\"5\" type=\"text\" style=\"margin-bottom: 10px; margin-top: 20px\" [(ngModel)]=\"title\" placeholder=\"Trace hinzufügen\" name=\"title\" class=\"form-control\" required>\n                </textarea>\n        </div>\n      </div>\n      <button type=\"button|submit|reset\" style=\"float: right; margin: 10px 20px 0px 0px;\" class=\"btn btn-primary\">Hinzufügen</button>\n    </div>\n  </form>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/form/form.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var tischplan_service_1 = __webpack_require__("../../../../../src/app/services/tischplan.service.ts");
var angular2_flash_messages_1 = __webpack_require__("../../../../angular2-flash-messages/index.js");
var FormComponent = (function () {
    function FormComponent(tischplanService, _flashMessagesService) {
        this.tischplanService = tischplanService;
        this._flashMessagesService = _flashMessagesService;
        this.newInformationElements = [];
        this.notizResponse = new core_1.EventEmitter();
        this.changeColorIfAnreiseExport = new core_1.EventEmitter();
        this.departments = [];
        this.departments = ["Bauernstube", "BerglerStubeHubertusStube", "EdelweissKaminStube", "WaeldlerStubeKristallStube", "TeestubeTeelounge", "Terasse", "TerrasseEdelweiss"];
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
                        else if (Information.tables[0].department === "terasse") {
                            for (var i = 0; i < _this.tablesTerasse.length; i++) {
                                if (_this.tablesTerasse[i].number === Information.tables[0].number) {
                                    _this.tablesTerasse[i] = Information.tables[0];
                                }
                            }
                        }
                        else if (Information.tables[0].department === "terrasseEdelweiss") {
                            for (var i = 0; i < _this.tablesTerrasseEdelweiss.length; i++) {
                                if (_this.tablesTerrasseEdelweiss[i].number === Information.tables[0].number) {
                                    _this.tablesTerrasseEdelweiss[i] = Information.tables[0];
                                }
                            }
                        }
                    }
                });
                this.changeColorIfAnreiseExport.emit();
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
        this.notizDate = String(new Date()).substring(0, 15);
        var newNotiz = {
            notizInput: this.notizInput,
            departmentNotizInput: this.departmentNotizInput,
            date: this.notizDate
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
    core_1.Input('newInformationElements'),
    __metadata("design:type", Array)
], FormComponent.prototype, "newInformationElements", void 0);
__decorate([
    core_1.Input('dateGenerated'),
    __metadata("design:type", Object)
], FormComponent.prototype, "dateGenerated", void 0);
__decorate([
    core_1.Input('title'),
    __metadata("design:type", String)
], FormComponent.prototype, "title", void 0);
__decorate([
    core_1.Input('roomNumber'),
    __metadata("design:type", String)
], FormComponent.prototype, "roomNumber", void 0);
__decorate([
    core_1.Input('tableNumber'),
    __metadata("design:type", String)
], FormComponent.prototype, "tableNumber", void 0);
__decorate([
    core_1.Input('nameTraceInput'),
    __metadata("design:type", String)
], FormComponent.prototype, "nameTraceInput", void 0);
__decorate([
    core_1.Input('employee'),
    __metadata("design:type", String)
], FormComponent.prototype, "employee", void 0);
__decorate([
    core_1.Input('tablesBauernstube'),
    __metadata("design:type", Array)
], FormComponent.prototype, "tablesBauernstube", void 0);
__decorate([
    core_1.Input('tablesTerasse'),
    __metadata("design:type", Array)
], FormComponent.prototype, "tablesTerasse", void 0);
__decorate([
    core_1.Input('tablesTerrasseEdelweiss'),
    __metadata("design:type", Array)
], FormComponent.prototype, "tablesTerrasseEdelweiss", void 0);
__decorate([
    core_1.Input('tablesBerglerStubeHubertusStube'),
    __metadata("design:type", Array)
], FormComponent.prototype, "tablesBerglerStubeHubertusStube", void 0);
__decorate([
    core_1.Input('tablesEdelweissKaminStube'),
    __metadata("design:type", Array)
], FormComponent.prototype, "tablesEdelweissKaminStube", void 0);
__decorate([
    core_1.Input('tablesTeestubeTeelounge'),
    __metadata("design:type", Array)
], FormComponent.prototype, "tablesTeestubeTeelounge", void 0);
__decorate([
    core_1.Input('tablesWaeldlerStubeKristallStube'),
    __metadata("design:type", Array)
], FormComponent.prototype, "tablesWaeldlerStubeKristallStube", void 0);
__decorate([
    core_1.Input('showInfoFormBool'),
    __metadata("design:type", Boolean)
], FormComponent.prototype, "showInfoFormBool", void 0);
__decorate([
    core_1.Input('showNotizFormBool'),
    __metadata("design:type", Boolean)
], FormComponent.prototype, "showNotizFormBool", void 0);
__decorate([
    core_1.Input('notizElements'),
    __metadata("design:type", Object)
], FormComponent.prototype, "notizElements", void 0);
__decorate([
    core_1.Input('showBauernStubnBool'),
    __metadata("design:type", Boolean)
], FormComponent.prototype, "showBauernStubnBool", void 0);
__decorate([
    core_1.Input('showBerglerBool'),
    __metadata("design:type", Boolean)
], FormComponent.prototype, "showBerglerBool", void 0);
__decorate([
    core_1.Input('showEdelweissBool'),
    __metadata("design:type", Boolean)
], FormComponent.prototype, "showEdelweissBool", void 0);
__decorate([
    core_1.Input('showWaeldlerBool'),
    __metadata("design:type", Boolean)
], FormComponent.prototype, "showWaeldlerBool", void 0);
__decorate([
    core_1.Input('showTeeStubeBool'),
    __metadata("design:type", Boolean)
], FormComponent.prototype, "showTeeStubeBool", void 0);
__decorate([
    core_1.Input('showTerasseBool'),
    __metadata("design:type", Boolean)
], FormComponent.prototype, "showTerasseBool", void 0);
__decorate([
    core_1.Input('showTerrasseEdelweissBool'),
    __metadata("design:type", Boolean)
], FormComponent.prototype, "showTerrasseEdelweissBool", void 0);
__decorate([
    core_1.Input('showAlleBool'),
    __metadata("design:type", Boolean)
], FormComponent.prototype, "showAlleBool", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], FormComponent.prototype, "notizResponse", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_b = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _b || Object)
], FormComponent.prototype, "changeColorIfAnreiseExport", void 0);
FormComponent = __decorate([
    core_1.Component({
        selector: 'app-form',
        template: __webpack_require__("../../../../../src/app/components/digitalerTischplan/form/form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digitalerTischplan/tischplan.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof tischplan_service_1.TischplanService !== "undefined" && tischplan_service_1.TischplanService) === "function" && _c || Object, typeof (_d = typeof angular2_flash_messages_1.FlashMessagesService !== "undefined" && angular2_flash_messages_1.FlashMessagesService) === "function" && _d || Object])
], FormComponent);
exports.FormComponent = FormComponent;
var _a, _b, _c, _d;
//# sourceMappingURL=form.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/im-haus-liste/im-haus-liste.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 style=\"margin-top: 0;margin-bottom: 0;color: #0a7a74;\">Im-Haus</h3>\n<div class=\"row1\">\n  <div class='wrapper'>\n    <div *ngFor=\"let imHausListeElement of imHausListeElemente\">\n          <div *ngIf=\"imHausListeElement.trace === '-' && !imHausListeElement.isAnreise\">\n            <div class='cards-container' id='container1' [dragula]='\"evented-bag\"'>\n              <div class=\"card\" id=\"card1\" [ngStyle]=\"{'background-color': '#' + imHausListeElement.bgColor}\">\n            <p>\n              <b>Name:</b> {{imHausListeElement.name}}<br>\n              <b>Personen Anzahl:</b> {{imHausListeElement.erwKi}}<br>\n              <b>Zimmernummer:</b> {{imHausListeElement.zimmernummer}}<br>\n              <b>Anreise:</b> {{imHausListeElement.anreise}}<br>\n              <b>Abreise:</b> {{imHausListeElement.abreise}}<br>\n              <b>Notiz1:</b> {{imHausListeElement.notiz1}}<br>\n              <b>Notiz2:</b> {{imHausListeElement.notiz2}}<br>\n              <b>Trace:</b> {{imHausListeElement.trace}}<br>\n              <b>Bemerkung:</b> {{imHausListeElement.bemerkung}}<br>\n            </p>\n            <div *ngIf=\"imHausListeElement.bgColor === '0a7a74'\">\n              <i class=\"fa fa-check\" style=\"float: right; color: white\"></i>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"anreiseTextButton\" style=\"height: 45px\">\n  <h3 style=\"margin-top: 0;margin-bottom: 0;color: #0a7a74; max-width: 50%; float: left\">Anreisen</h3>\n  <div class=\"btn-group\" style=\"float: right\" dropdown>\n    <button style=\"margin: 10px 0 0 0\" dropdownToggle class=\"btn btn-primary dropdown-toggle\" type=\"button\">Heute/Morgen<span class=\"caret\"></span></button>\n    <ul *dropdownMenu class=\"dropdown-menu\" style=\"padding: 0px; height: auto\" role=\"menu\">\n      <div style=\"margin: 0 0 0 0; padding: 10px\" class=\"changeToday\" (mouseenter)=\"mouseEnterChangeTodayButton()\"  (mouseleave)=\"mouseLeaveChangeTodayButton()\" (click)=\"changeDayToToday($event); sortList($event)\" [ngStyle]=\"{'background-color': '#' + bgColorToday}\"><p >Heute</p></div>\n      <div style=\"margin: 0 0 0 0; padding: 10px\" class=\"changeTomorrow\" (mouseenter)=\"mouseEnterChangeTomorrowButton()\"  (mouseleave)=\"mouseLeaveChangeTomorrowButton()\" (click)=\"changeDayToTomorrow($event); sortList($event)\" [ngStyle]=\"{'background-color': '#' + bgColorTomorrow}\"><p >Morgen</p></div>\n    </ul>\n  </div>\n</div>\n<div class=\"row1\">\n  <div class='wrapper'>\n    <div *ngFor=\"let imHausListeElement of imHausListeElemente\">\n          <div *ngIf=\"imHausListeElement.trace === '-' && imHausListeElement.isAnreise\">\n            <div class='cards-container' id='container2' [dragula]='\"evented-bag\"'>\n              <div class=\"card\" id=\"card2\" [ngStyle]=\"{'background-color': '#' + imHausListeElement.bgColor}\">\n            <p>\n              <b>Name:</b> {{imHausListeElement.name}}<br>\n              <b>Personen Anzahl:</b> {{imHausListeElement.erwKi}}<br>\n              <b>Zimmernummer:</b> {{imHausListeElement.zimmernummer}}<br>\n              <b>Anreise:</b> {{imHausListeElement.anreise}}<br>\n              <b>Abreise:</b> {{imHausListeElement.abreise}}<br>\n              <b>Notiz1:</b> {{imHausListeElement.notiz1}}<br>\n              <b>Notiz2:</b> {{imHausListeElement.notiz2}}<br>\n              <b>Trace:</b> {{imHausListeElement.trace}}<br>\n              <b>Bemerkung:</b> {{imHausListeElement.bemerkung}}<br>\n            </p>\n            <div *ngIf=\"imHausListeElement.bgColor === '0a7a74'\">\n              <i class=\"fa fa-check\" style=\"float: right; color: white\"></i>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<h3 style=\"margin-top: 0;margin-bottom: 0;color: #0a7a74;\">Traces</h3>\n<div class=\"row1\">\n  <div class='wrapper'>\n    <div *ngFor=\"let imHausListeElement of imHausListeElemente\">\n          <div *ngIf=\"imHausListeElement.trace != '-'\">\n            <div class='cards-container' id='container3' [dragula]='\"evented-bag\"'>\n              <div class=\"card\" id=\"card3\" [ngStyle]=\"{'background-color': '#' + imHausListeElement.bgColor}\">\n            <p>\n              <b>Name:</b> {{imHausListeElement.name}}<br>\n              <b>Personen Anzahl:</b> {{imHausListeElement.erwKi}}<br>\n              <b>Zimmernummer:</b> {{imHausListeElement.zimmernummer}}<br>\n              <b>Anreise:</b> {{imHausListeElement.anreise}}<br>\n              <b>Abreise:</b> {{imHausListeElement.abreise}}<br>\n              <b>Notiz1:</b> {{imHausListeElement.notiz1}}<br>\n              <b>Notiz2:</b> {{imHausListeElement.notiz2}}<br>\n              <b>Trace:</b> {{imHausListeElement.trace}}<br>\n              <b>Bemerkung:</b> {{imHausListeElement.bemerkung}}<br>\n            </p>\n            <div *ngIf=\"imHausListeElement.bgColor === '0a7a74'\">\n              <i class=\"fa fa-check\" style=\"float: right; color: white\"></i>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/im-haus-liste/im-haus-liste.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var tischplan_service_1 = __webpack_require__("../../../../../src/app/services/tischplan.service.ts");
var ImHausListeComponent = (function () {
    function ImHausListeComponent(tischplanService) {
        this.tischplanService = tischplanService;
        this.parts = [];
        this.tomorrow = false;
        this.bgColorTomorrow = "ffffff";
        this.bgColorToday = "ffffff";
    }
    ImHausListeComponent.prototype.ngOnInit = function () {
    };
    ImHausListeComponent.prototype.updateImHausListeElement = function (informationElements2) {
        var _this = this;
        this.tischplanService.updateImHausListeElement(informationElements2)
            .subscribe(function (response) {
            response.sort(function (a, b) {
                if (a.name < b.name)
                    return -1;
                if (a.name > b.name)
                    return 1;
                return 0;
            });
            _this.imHausListeElemente = response;
            //console.log('updateImHausListeElement response: ');
            //console.log(response);
            _this.sortList();
        });
    };
    ImHausListeComponent.prototype.changeDayToToday = function () {
        this.tomorrow = null;
        this.bgColorTomorrow = "ffffff";
        this.bgColorToday = "0a7a74";
    };
    ImHausListeComponent.prototype.changeDayToTomorrow = function () {
        this.tomorrow = true;
        this.bgColorTomorrow = "0a7a74";
        this.bgColorToday = "ffffff";
    };
    ImHausListeComponent.prototype.mouseEnterChangeTodayButton = function () {
        //console.log("mouse enter : ");
        if (this.bgColorToday === "ffffff") {
            //console.log('mouse enter1 :');
            this.bgColorToday = "bdbdbd";
        }
        if (this.bgColorToday === "0a7a74") {
            //console.log('mouse enter1 :');
            this.bgColorToday = "05504c";
        }
    };
    ImHausListeComponent.prototype.mouseLeaveChangeTodayButton = function () {
        if (this.bgColorToday === "bdbdbd") {
            //console.log('mouse leave1 :');
            this.bgColorToday = "ffffff";
        }
        if (this.bgColorToday === "05504c") {
            //console.log('mouse enter1 :');
            this.bgColorToday = "0a7a74";
        }
    };
    ImHausListeComponent.prototype.mouseEnterChangeTomorrowButton = function () {
        //console.log("mouse enter : ");
        if (this.bgColorTomorrow === "ffffff") {
            //console.log('mouse enter1 :');
            this.bgColorTomorrow = "bdbdbd";
        }
        if (this.bgColorTomorrow === "0a7a74") {
            //console.log('mouse enter1 :');
            this.bgColorTomorrow = "05504c";
        }
    };
    ImHausListeComponent.prototype.mouseLeaveChangeTomorrowButton = function () {
        if (this.bgColorTomorrow === "bdbdbd") {
            //console.log('mouse leave1 :');
            this.bgColorTomorrow = "ffffff";
        }
        if (this.bgColorTomorrow === "05504c") {
            //console.log('mouse enter1 :');
            this.bgColorTomorrow = "0a7a74";
        }
    };
    ImHausListeComponent.prototype.sortList = function () {
        if (this.tomorrow) {
            this.dateTodayGenerated = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
        }
        else {
            this.dateTodayGenerated = new Date();
        }
        var dateToday = String(this.dateTodayGenerated).substring(0, 15);
        //console.log("===========================ANREISEN===============================");
        //console.log(dateToday);
        for (var i = 0; i < this.imHausListeElemente.length; i++) {
            this.imHausListeElemente[i].isAnreise = false;
            if (this.imHausListeElemente[i].anreise) {
                this.parts = this.imHausListeElemente[i].anreise.match(/(\d+)/g);
                //console.log(this.parts);
            }
            if (this.parts) {
                this.date = new Date(2018, this.parts[1] - 1, this.parts[0]);
                //console.log(this.date);
                this.parsedDate = String(this.date).substring(0, 15);
                //console.log(this.parsedDate);
            }
            if (dateToday.indexOf(this.parsedDate) !== -1) {
                this.imHausListeElemente[i].isAnreise = true;
            }
        }
    };
    return ImHausListeComponent;
}());
__decorate([
    core_1.Input('imHausListeElemente'),
    __metadata("design:type", Array)
], ImHausListeComponent.prototype, "imHausListeElemente", void 0);
ImHausListeComponent = __decorate([
    core_1.Component({
        selector: 'app-im-haus-liste',
        template: __webpack_require__("../../../../../src/app/components/digitalerTischplan/im-haus-liste/im-haus-liste.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digitalerTischplan/tischplan.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof tischplan_service_1.TischplanService !== "undefined" && tischplan_service_1.TischplanService) === "function" && _a || Object])
], ImHausListeComponent);
exports.ImHausListeComponent = ImHausListeComponent;
var _a;
//# sourceMappingURL=im-haus-liste.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html, body {\n    padding: 0;\n    margin: 0;\n    height: 100%;\n    background-color: #0a7a74;\n}\n\n.row {\n    height: 100%;\n    background-color: #0a7a74;\n  margin: 0;\n\n}\n\n.row .container-fluid {\n    background-color: #0a7a74;\n    height: 100vh;\n\n}\n\n.row .container-fluid .col-md-4 {\n    background-color: #0a7a74;\n    height: 100%;\n}\n\n\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\" crossorigin=\"anonymous\">\n</head>\n<body>\n<div class=\"row\">\n<div class=\"container-fluid\">\n    <div class=\"col-md-4  hidden-xs hidden-sm\">\n    </div>\n    <div class=\"col-md-4\" style=\"padding-top: 20px\">\n      <div class=\"brand\" style=\"text-align: center\"><img alt=\"Brand\" href=\"http://www.servicio.io\" src=\"http://servicio.io/wp-content/uploads/2017/05/servicio-logo-lang-weiss.png\" style=\"height: 45px; width: auto; margin-top:0px; margin-right: 10px; text-align: center; display:inline-block; vertical-align:middle;\"></div>\n      <h2 style=\"color: #FFFFFF\">Login</h2>\n      <form (submit)=\"onLoginSubmit()\">\n        <div class=\"form-group\">\n          <label style=\"color: #FFFFFF\">Benutzername</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\">\n        </div>\n        <div class=\"form-group\">\n          <label style=\"color: #FFFFFF\">Passwort</label>\n          <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\n        </div>\n        <input type=\"submit\" class=\"btn btn-primary\" style=\"background-color: #ffffff; color: #0a7a74\" value=\"Login\">\n      </form>\n    </div>\n    <div class=\"col-md-4  hidden-xs  hidden-sm\">\n    </div>\n</div>\n</div>\n</body>\n</html>\n"

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/login/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var auth_service_1 = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
//import {FlashMessagesService} from 'angular2-flash-messages';
var LoginComponent = (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        console.log("Login submit");
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                // this.flashMessage.show('You are now logged in', {
                //   cssClass: 'alert-success',
                //   timeout: 5000});
                _this.router.navigate(['dashboard']);
            }
            else {
                //  this.flashMessage.show(data.msg, {
                //    cssClass: 'alert-danger',
                //    timeout: 5000});
                _this.router.navigate(['login']);
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/digitalerTischplan/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digitalerTischplan/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
], LoginComponent);
exports.LoginComponent = LoginComponent;
var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/navigation/navigation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar-fixed-top {\n  max-width: 100%;\n  background-color: #0d2f2e;\n  border-radius: 0px;\n  max-height: 120px;\n  display: block;\n}\n\n.container {\n  max-height: 120px;\n  display: block;\n  padding: 0;\n  margin: 0\n}\n\nul.navbar-nav {\n  margin-right: 0px;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  margin-left: 10px;\n  max-height:  40px;\n}\n\n.navbar-logout {\n  float: right;\n}\n\n.brand {\n  display: inline-block;\n  vertical-align: middle;\n  max-width: 30%;\n}\n\n.Tisch {\n  color: #0a7a74;\n  float: right;\n  margin-right: 10px;\n}\n\n.TischDiv{\n  background-color: #0a7a74;\n  border-radius: 50%;\n  height: 30px;\n  width: 30px;\n  text-align: center;\n  margin-top: 12px;\n  margin-left: 48px;\n  max-width: 50px;\n}\n\n.TischH3 {\n  color: #eaf3f3;\n  margin: 0;\n  line-height: 29px;\n  font-size: 20px;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  align: center;\n}\n\n.dropdown-toggle {\n  background-color: #0a7a74;\n  color: #FFFFFF;\n}\n\n.dropdown-menu {\n  overflow: auto;\n  height: 350px;\n  width: 200px;\n  padding: 20px;\n}\n\n.xls {\n  width: 100%;\n  height: 100px;\n}\n\n.file {\n  float: left;\n  margin-top: 10px;\n  color: #0a7a74;\n}\n\n.navbar-inverse .navbar-collapse, .navbar-inverse .navbar-form {\n  border: none;\n}\n\n.navbar-form {\n  margin: 11px 0 0 0;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  padding: 0;\n}\n\n.btn-send {\n  background-color: #0a7a74;\n  float: right;\n  color: white;\n  margin-right: 10px;\n  display: none;\n}\n\nh6 {\n  color: #0a7a74;\n}\n\n.navbar-right{\n\n}\n\n.btn-default {\n  background-color: #0a7a74;\n  color: #FFFFFF;\n  float: left;\n  vertical-align: middle;\n  margin: 10px 10px 5px 10px;\n  border: none;\n  display: none;\n}\n\n.btn-default:hover {\n  background-color: #1f5452;\n  color: #FFFFFF;\n}\n\n.btn-primary {\n  background-color: #0a7a74;\n  color: #FFFFFF;\n  margin-left: 20px;\n  border: none;\n}\n\n.btn-primary:hover {\n  background-color: #1f5452;\n  color: #FFFFFF;\n  margin-left: 20px;\n  border: none;\n}\n\n.btn-primary.active, .btn-primary:active, .open>.dropdown-toggle.btn-primary {\n  background-color: #1f5452;\n  color: #FFFFFF;\n}\n\n.btn-primary.focus, .btn-primary:focus {\n  background-color: #0a7a74;\n  color: #FFFFFF;\n}\n\n.btn-group {\n  height: 45px;\n  width: auto;\n  margin: 10px 10px 5px 10px;\n  float: left;\n  text-align: right;\n  display:none;\n  vertical-align:middle;\n}\n\n.menuitem {\n  padding: 5px;\n}\n\n.navbar-left {\n  max-width: 100%;\n  display: -webkit-inline-box;\n  border: none;\n}\n\n.form-group {\n  max-height: 45px;\n  margin: 0 5px 0 0;\n}\n\n.form-group-search {\n  float: left;\n  width: calc(100% - 52px);\n}\n\n.form-control {\n  background-color: #0a7a74;\n  color: #FFFFFF;\n  border: none;\n  height: 32px;\n  opacity: 80;\n  margin: 0px 0px 0px 0px;\n}\n\n.search-btn-default {\n  background-color: #0a7a74;\n  color: #FFFFFF;\n  border: none;\n  float: right;\n  margin-right: 10px;\n  min-width: 30px;\n  height: 32px;\n}\n\n.Partner {\n  height: 45px;\n  width: auto;\n  margin-top: 4px;\n  margin-bottom: 5px;\n  margin-right: 25px;\n  float: right;\n  text-align: right;\n  display:none;\n  vertical-align:middle;\n}\n\n.xls {\n  margin-bottom: 30px;\n}\n\n@media (max-width: 500px) {\n\n  .navbar-left {\n    display: block;\n  }\n}\n\n@media (min-width: 766px ) and  (max-width: 774px) {\n  .navbar-right {\n    margin-top: -23px;\n  }\n\n  .search-btn-default {\n    margin-top: 0px;\n    margin-left: 40px;\n    min-width: 30px;\n    min-height: 30px;\n  }\n}\n\n@media (min-width: 500px ) and  (max-width: 774px) {\n  .navbar-fixed-top {\n    display: block;\n    max-height: 56px;\n  }\n  .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: auto;\n    max-height: 55px;\n  }\n  .navbar-nav {\n    margin-top: 0;\n\n    display: -webkit-inline-box;\n\n    display: -ms-inline-flexbox;\n\n    display: inline-flex;\n    max-height: 50px;\n  }\n  .navbar-right{\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    max-width: 79%;\n    margin-right: 10px;\n\n  }\n  .navbar-left{\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n  }\n  .form-group {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n  }\n  .form-control{\n\n  }\n  .search-btn-default {\n    margin-top: 0px;\n  }\n}\n\n@media (min-width: 775px) {\n  .Partner {\n    display: none;\n    max-width: 100%;\n    float: right;\n  }\n\n  .form-group {\n    display: block;\n  }\n\n  .form-group-search {\n    float: none;\n    width: auto;\n  }\n\n  .navbar-left {\n    float: right;\n  }\n\n  .navbar-right {\n    max-width: 100%;\n    margin-right: 10px;\n  }\n\n  .container {\n    display: block;\n    width: auto;\n  }\n\n  .navbar-fixed-top {\n    max-height: 45px;\n    display: block;\n  }\n\n  .btn-group {\n    display:none;\n  }\n\n  .brand {\n    max-width: 100%;\n  }\n\n  .partnerLi {\n    float: right;\n  }\n\n  .navbar-left {\n    display: block;\n    margin-top: 11px;\n  }\n\n  .search-btn-default {\n    float: right;\n    margin-right: 20px;\n    margin-top: 0px;\n  }\n\n  .Tisch {\n    margin-right: 0px;\n  }\n\n  .TischDiv{\n    margin-left: 35px;\n  }\n  .navbar-nav {\n\n  }\n\n}\n\n@media (min-width: 1250px) {\n  .btn-default {\n    display: block;\n  }\n\n  .btn-send {\n    display: block;\n  }\n\n  .row4 {\n    margin-top: 60px;\n  }\n\n  .print-col {\n    width: 32%\n  }\n\n  .search-btn-default {\n    display: block;\n  }\n\n  .btn-group {\n    display: block;\n  }\n\n  .navbar-nav {\n    display: block;\n\n  }\n\n  .container {\n    display: block;\n    width: 100%;\n  }\n\n  .navbar-right {\n    max-width: 65%;\n    min-width: 50%;\n  }\n  .form-group {\n    margin: 0;\n    width: 70%;\n    max-height: 100%;\n    margin: 0 2px 20px 10px;\n  }\n\n  .form-control {\n    background-color: #0a7a74;\n    color: #FFFFFF;\n    border: none;\n    opacity: 80;\n    width: 135px;\n    margin: 0px 0px 0px 0px;\n  }\n\n  .TischDiv{\n    margin-left: 0px;\n  }\n}\n\n@media (min-width: 1650px) {\n  .Partner {\n    display: inline-block;\n    max-width: 100%;\n    float: right;\n  }\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n  <div class=\"container\">\n    <ul class=\"nav navbar-nav\">\n      <li class=\"brand\" ><img alt=\"Brand\" href=\"http://www.servicio.io\" src=\"http://servicio.io/wp-content/uploads/2018/01/servicio-logo-neu-laden-1.png\" (click)=\"brandClick()\" style=\"height: 45px; width: auto; margin-top:0px; margin-right: 10px; text-align: left; display:inline-block; vertical-align:middle;\"></li>\n      <li class=\"Belegte Tisch\" ><div class=\"TischDiv\"><h3 class=\"TischH3\">{{tablesOccupied}}</h3></div></li>\n      <div class=\"btn-group\" dropdown>\n        <button dropdownToggle type=\"button\" class=\"btn btn-primary dropdown-toggle\"><i class=\"fa fa-print\" aria-hidden=\"true\"></i><span class=\"caret\"></span>\n        </button>\n        <ul *dropdownMenu class=\"dropdown-menu\" style=\"height: auto; padding: 0\" role=\"menu\">\n          <li class=\"printToCart1\" (click)=\"printToCart1('printSectionId1')\" (mouseenter)=\"mouseEnterprintToCart1Button()\"  (mouseleave)=\"mouseLeaveprintToCart1Button()\" [ngStyle]=\"{'background-color': '#' + printToCart1Button}\"  style=\" display:table-cell; vertical-align:middle; margin-top: 15px; margin-right: 0px; padding: 10px; width:200px;\" >Tisch Übersicht Drucken</li>\n          <li class=\"divider dropdown-divider\" style=\"margin: 0\"></li>\n          <li class=\"printToCart2\" (click)=\"printToCart2('printSectionId2')\" (mouseenter)=\"mouseEnterprintToCart2Button()\"  (mouseleave)=\"mouseLeaveprintToCart2Button()\" [ngStyle]=\"{'background-color': '#' + printToCart2Button}\"  style=\"text-align: left; display:table-cell; vertical-align:middle; margin-top: 15px; margin-right: 0px; padding: 10px; width:200px;\" class=\"printToCart2\">Tisch Plan Drucken</li>\n          <li class=\"divider dropdown-divider\" style=\"margin: 0\"></li>\n          <li class=\"printToCart3\" (click)=\"printToCart3('printSectionId3')\" (mouseenter)=\"mouseEnterprintToCart3Button()\"  (mouseleave)=\"mouseLeaveprintToCart3Button()\" [ngStyle]=\"{'background-color': '#' + printToCart3Button}\"  style=\"text-align: left; display:table-cell; vertical-align:middle; margin-top: 15px; margin-right: 0px; padding: 10px; width:200px;\" class=\"printToCart3\">A-Z Liste Drucken</li>\n        </ul>\n      </div>\n      <div class=\"btn-group\" dropdown>\n        <button dropdownToggle class=\"btn btn-primary dropdown-toggle\" type=\"button\">XLS<i class=\"fa fa-upload\" aria-hidden=\"true\"></i><span class=\"caret\"></span>\n        </button>\n        <ul *dropdownMenu class=\"dropdown-menu\" style=\"padding: 10px; height: auto\" role=\"menu\">\n          <div class=\"xls\" (click)=\"none($event)\" ><h6 >XLS-Datei hochladen</h6>\n            <form class=\"SendMessage\" (submit)=\"sendMessage($event)\">\n              <input type=\"file\" style=\"max-width: 160px; min-height: 50px\" (change)=\"fileChangeEvent($event)\" placeholder=\"Upload file...\" />\n              <button type=\"button\" class=\"btn btn-send\" (click)=\"upload()\">XLS hochladen</button>\n            </form>\n          </div>\n        </ul>\n      </div>\n      <li class=\"navbar-logout\" *ngIf=\"authService.loggedIn()\"><a (click)=\"onLogoutClick()\" href=\"/\">LOGOUT</a></li>\n    </ul>\n    <ul class=\"nav navbar-nav navbar-right\">\n      <div class=\"btn-group\" dropdown>\n        <button dropdownToggle class=\"btn btn-primary dropdown-toggle\" type=\"button\">Abreisen entfernen <i class=\"fa fa-calendar-check-o\" aria-hidden=\"true\"></i><span class=\"caret\"></span>\n        </button>\n        <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\" style=\"max-height: 130px; padding: 0\">\n          <li role=\"menuitem\" class=\"menuitem\" (mouseenter)=\"mouseEnterAbreiseAbbrechenButton()\"  (mouseleave)=\"mouseLeaveAbreiseAbbrechenButton()\" [ngStyle]=\"{'background-color': '#' + abreiseAbbrechenButton}\" style=\"color: black;\">Abbrechen</li>\n          <li class=\"divider dropdown-divider\" style=\"margin: 0\"></li>\n          <li role=\"menuitem\" class=\"menuitem\" style=\"background-color: red; color: white;\" (mouseenter)=\"mouseEnterAbreiseAusfuehrenButton()\"  (mouseleave)=\"mouseLeaveAbreiseAusfuehrenButton()\" [ngStyle]=\"{'background-color': '#' + abreiseAusfuehrenButton}\" style=\"color: white;\" (click)=\"dispenseIfAbreiseHeute()\"><b> Abreisen für Heute entfernen</b></li>\n          <li class=\"divider dropdown-divider\" style=\"margin: 0\"></li>\n          <li role=\"menuitem\" class=\"menuitem\" style=\"background-color: red; color: white;\" (mouseenter)=\"mouseEnterAbreiseMorgenAusfuehrenButton()\"  (mouseleave)=\"mouseLeaveAbreiseMorgenAusfuehrenButton()\" [ngStyle]=\"{'background-color': '#' + abreiseAusfuehrenMorgenButton}\" style=\"color: white;\" (click)=\"dispenseIfAbreiseMorgen()\"><b> Abreisen für Morgen entfernen</b></li>\n          <li class=\"divider dropdown-divider\" style=\"margin: 0\"></li>\n        </ul>\n      </div>\n      <div class=\"btn-group\" dropdown>\n        <button dropdownToggle type=\"button\" class=\"btn btn-primary dropdown-toggle\">Umsetzen <i class=\"fa fa-exchange\" aria-hidden=\"true\"></i><span class=\"caret\"></span>\n        </button>\n        <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\" style=\"height: auto\">\n          <form class=\"SendInformation\" #myForm=\"ngForm\" (submit)=\"umsetzen($event)\">\n            <div class=\"form-group\" (click)=\"none($event)\">\n              <label for=\"quellTisch\">Quell-Tisch:</label>\n              <input class=\"form-control\" id=\"quellTisch\" [(ngModel)]=\"quellTisch\" name=\"quellTisch\" placeholder=\"Von Tischnummer:\" >\n            </div>\n            <div class=\"form-group\" (click)=\"none($event)\">\n              <label for=\"zielTisch\">Ziel-Tisch</label>\n              <input class=\"form-control\" id=\"zielTisch\" [(ngModel)]=\"zielTisch\" name=\"zielTisch\" placeholder=\"Zu Tischnummer:\" >\n            </div>\n            <button type=\"submit\" class=\"btn btn-primary\" >Umsetzen</button>\n          </form>\n        </ul>\n      </div>\n      <div class=\"btn-group\" dropdown>\n        <button dropdownToggle type=\"button\" class=\"btn btn-primary dropdown-toggle\">Traces <i class=\"fa fa-folder-open\" aria-hidden=\"true\"></i> <span class=\"caret\"></span>\n        </button>\n        <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\" style=\"padding: 0\">\n          <div *ngFor=\"let newInformationElement of newInformationElements; let j = index;\">\n            <button type=\"submit\" style=\"margin: 10px\" class=\"btn btn-send\" (click)=\"delete(newInformationElement, j, $event)\">x</button>\n            <li role=\"menuitem\" style=\"padding: 10px;\" class=\"menuitem\" (click)=\"none($event)\"> <b>Zimmer Nummer: </b> {{newInformationElement.roomNumber}} <br><b>Trace: </b> {{newInformationElement.text}} <br><b>Tisch: </b> {{newInformationElement.tableNumber}}<br><b>Datum: </b> {{newInformationElement.date}}<br><b>Name: </b> {{newInformationElement.name}}<br><b>Mitarbeiter: </b> {{newInformationElement.employee}}</li>\n            <li class=\"divider dropdown-divider\"></li>\n          </div>\n        </ul>\n      </div>\n      <form class=\"navbar-form navbar-left\">\n        <div class=\"form-group form-group-search\">\n          <input type=\"text\" class=\"form-control\" (keyup)=\"onKey($event)\">\n        </div>\n        <button type=\"submit\" class=\"btn search-btn-default\" ><i class=\"fa fa-search\" aria-hidden=\"true\"></i></button>\n      </form>\n      <li class=\"partnerLi\" ><img class=\"Partner\" alt=\"Partner\" href=\"http://www.salzburgerhof.servicio.io/wlanlandingpage\" src=\"http://servicio.io/wp-content/uploads/2017/12/680001_160527_7E4EAE33_logo_779px.jpg\" ></li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/navigation/navigation.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var tischplan_service_1 = __webpack_require__("../../../../../src/app/services/tischplan.service.ts");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
var angular2_flash_messages_1 = __webpack_require__("../../../../angular2-flash-messages/index.js");
var auth_service_1 = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var NavigationComponent = (function () {
    function NavigationComponent(tischplanService, http, _flashMessagesService, authService, router) {
        this.tischplanService = tischplanService;
        this.http = http;
        this._flashMessagesService = _flashMessagesService;
        this.authService = authService;
        this.router = router;
        this.filesToUpload = [];
        this.tablesTempAbreise = [];
        this.newInformationElements = [];
        this.umsetzenExport = new core_1.EventEmitter();
        this.abreisenExportExport = new core_1.EventEmitter();
        this.termExport = new core_1.EventEmitter();
        this.date = [];
        this.parts = [];
        this.parsedDate = [];
        this.tableInformation = [];
        this.reloadLists = new core_1.EventEmitter();
        this.transformExport = new core_1.EventEmitter();
        this.printToCart1Button = "ffffff";
        this.printToCart2Button = "ffffff";
        this.printToCart3Button = "ffffff";
        this.abreiseAbbrechenButton = "ffffff";
        this.abreiseAusfuehrenButton = "ff0000";
        this.abreiseAusfuehrenMorgenButton = "ff0000";
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
        popupWinindow.document.write('<html><head><style> .row .tTee1 { width: 30px; height: 60px; position: absolute; border: solid 1px #0a7a74; } .row .tTee2 { width: 30px; height: 60px; position: absolute; border: solid 1px #0a7a74; } .row .tTee3 { width: 30px; height: 60px; position: absolute; border: solid 1px #0a7a74; } .row .tTee4 { width: 30px; height: 60px; position: absolute; border: solid 1px #0a7a74; } .row .tTee5 { width: 30px; height: 80px; border: solid 1px #0a7a74; position: absolute; } .row .tTee6 { width: 30px; height: 80px; border: solid 1px #0a7a74; position: absolute; } .row .t7 { width: 30px; height: 80px; border: solid 1px #0a7a74; position: absolute; } .row .t8 { width: 100px; height: 90px; border: solid 1px #0a7a74; position: absolute; } .row .t9 { width: 40px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t10 { width: 40px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t11 { width: 30px; height: 80px; border: solid 1px #0a7a74; position: absolute; } .row .t12 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t13 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t14 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t15 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t16 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t17 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t18 { position: absolute; } .row .t19 { position: absolute; }.row .t20 { position: absolute; } .row .t21 { position: absolute; }  .row .t22 { position: absolute; } .row .t23 { position: absolute; } .row .t24 { position: absolute; } .row .t40 { width: 60px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t41 { width: 60px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t42 { width: 80px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t43 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t44 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t45 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t46 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t47 { width: 80px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t48 { width: 60px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t49 { width: 60px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t50 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t51 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t52 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t53 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t54 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t55 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t56 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t57 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t58 { width: 60px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t59 { width: 60px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t60 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t61 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t62 { width: 30px; height: 60px; position: absolute; border: solid 1px #0a7a74; } .row .t63 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t64 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t65 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t66 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t67 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t68 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t69 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t70 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t71 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t72 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t73 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t74 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t75 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t76 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t77 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t78 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t79 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t80 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t81 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t82 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t83 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t84 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t85 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t86 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t87 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t88 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t89 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t501 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t502 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t503 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t504 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t505 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t506 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t507 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t508 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t509 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t510 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t511 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t512 { width: 80px; height: 45px; border: solid 1px #0a7a74; position: absolute; } .row .t513 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t514 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t515 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t516 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t517 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; transform: rotate(10deg); } .row .t518 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; transform: rotate(30deg); } .row .t519 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; transform: rotate(50deg); } .row .t520 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; transform: rotate(70deg); } .row .t521 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; transform: rotate(90deg); } .row .t522 { width: 80px; height: 45px; border: solid 1px #0a7a74; position: absolute; } .row .t523 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t524 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t525 { width: 40px; height: 40px; position: absolute; transform: rotate(45deg); } .row .t25 { position: absolute; } .row .t26 { position: absolute; } .row .t30 { position: absolute; } .row  [class~="t30.1"] { position: absolute; } [class~="t30.2"] { position: absolute; } .row  [class~="t30.3"]{ position: absolute; } .row  [class~="t30.4"] { position: absolute; }.t31 { position: absolute; } .t32 { position: absolute; } .t33 { position: absolute; } .t34 { position: absolute; } .t35 { position: absolute; } .t36 { position: absolute; } .t37 { position: absolute; } .t38 { position: absolute; }  .t90 { position: absolute; } .t91 { position: absolute; } .t92 { position: absolute; } .t93 { position: absolute; } .t94 { position: absolute; } .t95 { position: absolute; } .t96 { position: absolute; } .t97 { position: absolute; } .t98 { position: absolute; } .t100 { position: absolute; } .t101 { position: absolute; } .t102 { position: absolute; } .t103 { position: absolute; } .t104 { position: absolute; } .t110 { position: absolute; } .t111 { position: absolute; } .t112 { position: absolute; } .t113 { position: absolute; } .t114 { position: absolute; } .t115 { position: absolute; } .t116 { position: absolute; } .t117 { position: absolute; } .t118 { position: absolute; }  .t120 { position: absolute; }  .t121 { position: absolute; }  .t122 { position: absolute; }  .t123 { position: absolute; }  .t124 { position: absolute; }  .t125 { position: absolute; }  .t126 { position: absolute; }  .t160 { position: absolute; }  .t161 { position: absolute; }  .t162 { position: absolute; }  .t163 { position: absolute; }  .t164 { position: absolute; }  .t165 { position: absolute; }  .t150 { position: absolute; }  .t151 { position: absolute; }  .t140 { position: absolute; }  .t141 { position: absolute; }  .t142 { position: absolute; }  .t143 { position: absolute; } .t144 { position: absolute; } .t152 { position: absolute; } .t153 { position: absolute; } .t154 { position: absolute; } .t180 { position: absolute; } .t181 { position: absolute; } .t182 { position: absolute; } .t183 { position: absolute; } .t184 { position: absolute; } .t185 { position: absolute; } .t186 { position: absolute; } .t187 { position: absolute; } .t188 { position: absolute; } .t189 { position: absolute; } .t190 { position: absolute; } .t191 { position: absolute; } .t192 { position: absolute; } .t193 { position: absolute; }</style></head><body onload="window.print()">' + innerContents + '</html>');
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
        var quellTisch = this.quellTisch.charAt(0).toUpperCase() + this.quellTisch.slice(1);
        var zielTisch = this.zielTisch.charAt(0).toUpperCase() + this.zielTisch.slice(1);
        this.tableInformation = [];
        //this.umsetzenExport.emit({quellTisch, zielTisch});
        // let targetTable = this.quellTisch.zielTisch;
        // let quellTischNumber = this.quellTisch.quellTisch;
        // let targetTableNumber = Number(this.quellTisch.zielTisch);
        // let quellTischNumberNumber = Number(this.quellTisch.quellTisch);
        console.log('targetTable' + zielTisch);
        console.log('quellTischNumber' + quellTisch);
        var tableToMove = { department: "Empty", number: "0", targetTable: "0", targetDepartment: "Empty" };
        var indexZiel = 0;
        var indexQuell = 0;
        if (Number(quellTisch) >= 30 && Number(quellTisch) <= 47) {
            tableToMove.department = "berglerStubeHubertusStube";
            indexQuell = 3;
        }
        else if (Number(quellTisch) >= 10 && Number(quellTisch) <= 26) {
            tableToMove.department = "Bauernstube";
            indexQuell = 2;
        }
        else if (Number(quellTisch) >= 50 && Number(quellTisch) <= 77) {
            tableToMove.department = "waeldlerStubeKristallStube";
            indexQuell = 1;
        }
        else if (Number(quellTisch) >= 80 && Number(quellTisch) <= 99) {
            tableToMove.department = "edelweissKaminStube";
            indexQuell = 4;
        }
        else if ((Number(quellTisch) >= 1 && Number(quellTisch) <= 6) || quellTisch === "Tee1" || quellTisch === "Tee2" || quellTisch === "Tee3" || quellTisch === "Tee4" || quellTisch === "Tee5" || quellTisch === "Tee6") {
            tableToMove.department = "teestubeTeelounge";
            indexQuell = 0;
        }
        else if (Number(quellTisch) >= 100 && Number(quellTisch) < 180) {
            tableToMove.department = "terasse";
            indexQuell = 5;
        }
        else if (Number(quellTisch) >= 180) {
            tableToMove.department = "terrasseEdelweiss";
            indexZiel = 6;
        }
        if (Number(zielTisch) >= 30 && Number(zielTisch) <= 47) {
            tableToMove.targetDepartment = "berglerStubeHubertusStube";
            indexZiel = 3;
        }
        else if (Number(zielTisch) >= 10 && Number(zielTisch) <= 26) {
            tableToMove.targetDepartment = "Bauernstube";
            indexZiel = 2;
        }
        else if (Number(zielTisch) >= 50 && Number(zielTisch) <= 77) {
            tableToMove.targetDepartment = "waeldlerStubeKristallStube";
            indexZiel = 1;
        }
        else if (Number(zielTisch) >= 80 && Number(zielTisch) <= 99) {
            tableToMove.targetDepartment = "edelweissKaminStube";
            indexZiel = 4;
        }
        else if ((Number(zielTisch) >= 1 && Number(zielTisch) <= 6) || zielTisch === "Tee1" || zielTisch === "Tee2" || zielTisch === "Tee3" || zielTisch === "Tee4" || zielTisch === "Tee5" ||
            zielTisch === "Tee6") {
            tableToMove.targetDepartment = "teestubeTeelounge";
            indexZiel = 0;
        }
        else if (Number(zielTisch) >= 100 && Number(zielTisch) < 180) {
            tableToMove.targetDepartment = "terasse";
            indexZiel = 5;
        }
        else if (Number(zielTisch) >= 180) {
            tableToMove.targetDepartment = "terrasseEdelweiss";
            indexZiel = 6;
        }
        tableToMove.number = quellTisch;
        tableToMove.targetTable = zielTisch;
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
                            console.log(_this.tableInformation);
                        }
                    }
                }
            }
            console.log("this.tableInformation IIIIIIIII");
            var tableInformationExport = _this.tableInformation;
            _this.umsetzenExport.emit({ tableToMove: tableToMove, indexZiel: indexZiel, indexQuell: indexQuell, tableInformationExport: tableInformationExport });
        });
    };
    ;
    NavigationComponent.prototype.keyDownFunction = function (event) {
        if (event.keyCode == 13) {
            //alert('you just clicked enter');
            this.termExport.emit(this.term);
        }
    };
    NavigationComponent.prototype.brandClick = function () {
        window.location.reload();
    };
    NavigationComponent.prototype.onKey = function (event) {
        this.term = event.target.value;
        console.log(this.term);
        this.termExport.emit(this.term);
        this.transformExport.emit(this.term);
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
            if (res[0].originalname) {
                _this._flashMessagesService.show('Erfolgreich ' + JSON.stringify(res[0].originalname) + " hochgeladen", {
                    cssClass: 'alert-success',
                    timeout: 10000
                });
            }
            else {
                _this._flashMessagesService.show(JSON.stringify(res), {
                    cssClass: 'alert-danger',
                    timeout: 10000
                });
            }
        })
            .subscribe(function (files) { return console.log("files", files); });
        setTimeout(function () {
            _this.reloadLists.emit();
        }, 3000);
    };
    NavigationComponent.prototype.dispenseIfAbreiseHeute = function () {
        this.dateTodayGenerated = new Date(); //Today
        this.dispenseIfAbreise();
    };
    NavigationComponent.prototype.dispenseIfAbreiseMorgen = function () {
        console.log("dispenseIfAbreiseMorgen");
        this.dateTodayGenerated = new Date(new Date().getTime() + 24 * 60 * 60 * 1000); //Tomorrow
        this.dispenseIfAbreise();
        console.log(this.dateTodayGenerated);
    };
    NavigationComponent.prototype.dispenseIfAbreise = function () {
        var _this = this;
        var tables = this.tablesTempAbreise;
        var abreisenExport = [];
        var a = 0;
        console.log('=================================================dispenseIfAbreise');
        for (var a_1 = 0; a_1 < tables.length; a_1++) {
            for (var b = 0; b < tables[a_1].tables.length; b++) {
                if (tables[a_1].tables[b].groups) {
                    var abreisenExportObject = {
                        table: tables[a_1].tables[b],
                        group: [],
                        date: String(this.dateTodayGenerated).substring(0, 15)
                    };
                    for (var c = 0; c < tables[a_1].tables[b].groups.length; c++) {
                        if (tables[a_1].tables[b].groups[c].abreiseValue) {
                            this.parts[0] = tables[a_1].tables[b].groups[c].abreiseValue.match(/(\d+)/g);
                        }
                        else {
                            this.parts[0] = "undefined";
                        }
                        if (this.parts[0]) {
                            this.date[0] = new Date(2018, this.parts[0][1] - 1, this.parts[0][0]);
                            this.parsedDate[0] = String(this.date[0]).substring(0, 15);
                        }
                        var dateToday = String(this.dateTodayGenerated).substring(0, 15);
                        if (dateToday.indexOf(this.parsedDate[0]) !== -1 || tables[a_1].tables[b].groups[c].newTraceText) {
                            abreisenExportObject.group.push(c);
                        }
                        if (c === (tables[a_1].tables[b].groups.length - 1) && (typeof abreisenExportObject.group !== 'undefined' && abreisenExportObject.group.length > 0)) {
                            console.log("abreisenExport.push(abreisenExportObject)");
                            abreisenExport.push(abreisenExportObject);
                        }
                    }
                }
            }
        }
        console.log(abreisenExport);
        setTimeout(function () {
            _this.abreisenExportExport.emit({ abreisenExport: abreisenExport, a: a });
        }, 100);
    };
    NavigationComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        //this._flashMessagesService.show('You are logged out', {
        //  cssClass: 'alert-success',
        //  timeout: 3000
        //});
        this.router.navigate(['/login']);
        return false;
    };
    NavigationComponent.prototype.mouseEnterprintToCart1Button = function () {
        //console.log("mouse enter : ");
        if (this.printToCart1Button === "ffffff") {
            //console.log('mouse enter1 :');
            this.printToCart1Button = "cfcfcf";
        }
    };
    NavigationComponent.prototype.mouseLeaveprintToCart1Button = function () {
        if (this.printToCart1Button === "cfcfcf") {
            //console.log('mouse leave1 :');
            this.printToCart1Button = "ffffff";
        }
    };
    NavigationComponent.prototype.mouseEnterprintToCart2Button = function () {
        //console.log("mouse enter : ");
        if (this.printToCart2Button === "ffffff") {
            //console.log('mouse enter1 :');
            this.printToCart2Button = "cfcfcf";
        }
    };
    NavigationComponent.prototype.mouseLeaveprintToCart2Button = function () {
        if (this.printToCart2Button === "cfcfcf") {
            //console.log('mouse leave1 :');
            this.printToCart2Button = "ffffff";
        }
    };
    NavigationComponent.prototype.mouseEnterprintToCart3Button = function () {
        //console.log("mouse enter : ");
        if (this.printToCart3Button === "ffffff") {
            //console.log('mouse enter1 :');
            this.printToCart3Button = "cfcfcf";
        }
    };
    NavigationComponent.prototype.mouseLeaveprintToCart3Button = function () {
        if (this.printToCart3Button === "cfcfcf") {
            //console.log('mouse leave1 :');
            this.printToCart3Button = "ffffff";
        }
    };
    NavigationComponent.prototype.mouseEnterAbreiseAusfuehrenButton = function () {
        //console.log("mouse enter : ");
        if (this.abreiseAusfuehrenButton === "ff0000") {
            //console.log('mouse enter1 :');
            this.abreiseAusfuehrenButton = "a00000";
        }
    };
    NavigationComponent.prototype.mouseLeaveAbreiseAusfuehrenButton = function () {
        if (this.abreiseAusfuehrenButton === "a00000") {
            //console.log('mouse leave1 :');
            this.abreiseAusfuehrenButton = "ff0000";
        }
    };
    NavigationComponent.prototype.mouseEnterAbreiseMorgenAusfuehrenButton = function () {
        //console.log("mouse enter : ");
        if (this.abreiseAusfuehrenMorgenButton === "ff0000") {
            //console.log('mouse enter1 :');
            this.abreiseAusfuehrenMorgenButton = "a00000";
        }
    };
    NavigationComponent.prototype.mouseLeaveAbreiseMorgenAusfuehrenButton = function () {
        if (this.abreiseAusfuehrenMorgenButton === "a00000") {
            //console.log('mouse leave1 :');
            this.abreiseAusfuehrenMorgenButton = "ff0000";
        }
    };
    NavigationComponent.prototype.mouseEnterAbreiseAbbrechenButton = function () {
        //console.log("mouse enter : ");
        if (this.abreiseAbbrechenButton === "ffffff") {
            //console.log('mouse enter1 :');
            this.abreiseAbbrechenButton = "cfcfcf";
        }
    };
    NavigationComponent.prototype.mouseLeaveAbreiseAbbrechenButton = function () {
        if (this.abreiseAbbrechenButton === "cfcfcf") {
            //console.log('mouse leave1 :');
            this.abreiseAbbrechenButton = "ffffff";
        }
    };
    return NavigationComponent;
}());
__decorate([
    core_1.Input('tablesTempAbreise'),
    __metadata("design:type", Array)
], NavigationComponent.prototype, "tablesTempAbreise", void 0);
__decorate([
    core_1.Input('newInformationElements'),
    __metadata("design:type", Array)
], NavigationComponent.prototype, "newInformationElements", void 0);
__decorate([
    core_1.Input('tablesOccupied'),
    __metadata("design:type", Number)
], NavigationComponent.prototype, "tablesOccupied", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], NavigationComponent.prototype, "umsetzenExport", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_b = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _b || Object)
], NavigationComponent.prototype, "abreisenExportExport", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_c = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _c || Object)
], NavigationComponent.prototype, "termExport", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_d = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _d || Object)
], NavigationComponent.prototype, "reloadLists", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_e = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _e || Object)
], NavigationComponent.prototype, "transformExport", void 0);
NavigationComponent = __decorate([
    core_1.Component({
        selector: 'app-navigation',
        template: __webpack_require__("../../../../../src/app/components/digitalerTischplan/navigation/navigation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digitalerTischplan/navigation/navigation.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_f = typeof tischplan_service_1.TischplanService !== "undefined" && tischplan_service_1.TischplanService) === "function" && _f || Object, typeof (_g = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _g || Object, typeof (_h = typeof angular2_flash_messages_1.FlashMessagesService !== "undefined" && angular2_flash_messages_1.FlashMessagesService) === "function" && _h || Object, typeof (_j = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _j || Object, typeof (_k = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _k || Object])
], NavigationComponent);
exports.NavigationComponent = NavigationComponent;
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
//# sourceMappingURL=navigation.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/print/print.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"printSectionId3\" class=\"section3\">\n  <table style=\"border: solid 1px black; border-collapse: collapse;\">\n    <tr>\n      {{dateGeneratedListe}}\n    </tr>\n    <tr style=\"border: solid 1px black;\">\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">#</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Name</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Tisch</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">PAX</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Anreise</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Abreise</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">GRP</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Bemerkung</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Notiz1</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Notiz2</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Trace</th>\n    </tr>\n    <div *ngFor=\"let table of tables\">\n      <tr style=\"border: solid 1px black;\">\n        <div *ngIf=\"table.nameValue\">\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.zimmernummerValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.nameValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.personenAnzahlValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.anreiseValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.abreiseValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.bemerkungValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz1Value}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz2Value}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.traceValue}}</td>\n          </div>\n      </tr>\n    </div>\n  </table>\n</div>\n<div id=\"printSectionId1\" class=\"section3\">\n  <div *ngIf=\"showBauernStubnBool\">\n    <table style=\"border: solid 1px black; border-collapse: collapse;\">\n      <tr>\n        {{dateGeneratedListe}}\n      </tr>\n      <tr>\n        Bauernstube\n      </tr>\n      <tr style=\"border: solid 1px black;\">\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Tisch</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">#</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Name</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">PAX</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Anreise</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Abreise</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">GRP</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Trace</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Bemerkung</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Notiz1</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Notiz2</th>\n      </tr>\n      <div *ngFor=\"let table of tablesBauernstube\">\n        <div *ngIf=\"!table.groups || table.groups.length < 1\">\n          <tr style=\"border: solid 1px black;\">\n          <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n          <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n          <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n          <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n          <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n          <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n          <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n          <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n          <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n          <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n          <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n        </div>\n        <div *ngFor=\"let group of table.groups\">\n          <tr style=\"border: solid 1px black;\">\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.zimmernummerValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.nameValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.personenAnzahlValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.anreiseValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.abreiseValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.traceValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.bemerkungValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.notiz1Value}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.notiz2Value}}</td>\n            <div *ngIf=\"group.newTraceText\">\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceRoomNumber}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceName}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceTableNumber}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceText}} {{group.newTraceDate}} {{table.newTraceEmployee}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            </div>\n          </tr>\n        </div>\n      </div>\n    </table>\n  </div>\n  <div *ngIf=\"showWaeldlerBool\">\n    <table style=\"border: solid 1px black; border-collapse: collapse;\">\n      <tr>\n        {{dateGeneratedListe}}\n      </tr>\n      <tr>\n        Wäldlerstube / Kristallstube\n      </tr>\n      <tr style=\"border: solid 1px black;\">\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Tisch</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">#</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Name</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">PAX</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Anreise</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Abreise</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">GRP</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Trace</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Bemerkung</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Notiz1</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Notiz2</th>\n      </tr>\n      <div *ngFor=\"let table of tablesWaeldlerStubeKristallStube\">\n        <div *ngIf=\"!table.groups || table.groups.length < 1\">\n          <tr style=\"border: solid 1px black;\">\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n        </div>\n        <div *ngFor=\"let group of table.groups\">\n          <tr style=\"border: solid 1px black;\">\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.zimmernummerValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.nameValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.personenAnzahlValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.anreiseValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.abreiseValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.traceValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.bemerkungValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.notiz1Value}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.notiz2Value}}</td>\n            <div *ngIf=\"group.newTraceText\">\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceRoomNumber}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceName}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceTableNumber}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceText}} {{group.newTraceDate}} {{table.newTraceEmployee}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            </div>\n          </tr>\n        </div>\n      </div>\n    </table>\n  </div>\n  <div *ngIf=\"showBerglerBool\">\n    <table style=\"border: solid 1px black; border-collapse: collapse;\">\n      <tr>\n        {{dateGeneratedListe}}\n      </tr>\n      <tr>\n        Berglerstube / HUBERTUS Stube\n      </tr>\n      <tr style=\"border: solid 1px black;\">\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Tisch</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">#</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Name</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">PAX</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Anreise</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Abreise</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">GRP</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Trace</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Bemerkung</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Notiz1</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Notiz2</th>\n      </tr>\n      <div *ngFor=\"let table of tablesBerglerStubeHubertusStube\">\n        <div *ngIf=\"!table.groups || table.groups.length < 1\">\n          <tr style=\"border: solid 1px black;\">\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n        </div>\n        <div *ngFor=\"let group of table.groups\">\n          <tr style=\"border: solid 1px black;\">\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.zimmernummerValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.nameValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.personenAnzahlValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.anreiseValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.abreiseValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.traceValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.bemerkungValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.notiz1Value}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.notiz2Value}}</td>\n            <div *ngIf=\"group.newTraceText\">\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceRoomNumber}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceName}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceTableNumber}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceText}} {{group.newTraceDate}} {{table.newTraceEmployee}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            </div>\n          </tr>\n        </div>\n      </div>\n    </table>\n  </div>\n  <div *ngIf=\"showEdelweissBool\">\n    <table style=\"border: solid 1px black; border-collapse: collapse;\">\n      <tr>\n        {{dateGeneratedListe}}\n      </tr>\n      <tr>\n        EDELWEISS / Kaminstube\n      </tr>\n          <tr style=\"border: solid 1px black;\">\n            <th style=\"border: solid 1px black; border-collapse: collapse;\">Tisch</th>\n            <th style=\"border: solid 1px black; border-collapse: collapse;\">#</th>\n            <th style=\"border: solid 1px black; border-collapse: collapse;\">Name</th>\n            <th style=\"border: solid 1px black; border-collapse: collapse;\">PAX</th>\n            <th style=\"border: solid 1px black; border-collapse: collapse;\">Anreise</th>\n            <th style=\"border: solid 1px black; border-collapse: collapse;\">Abreise</th>\n            <th style=\"border: solid 1px black; border-collapse: collapse;\">GRP</th>\n            <th style=\"border: solid 1px black; border-collapse: collapse;\">Trace</th>\n            <th style=\"border: solid 1px black; border-collapse: collapse;\">Bemerkung</th>\n            <th style=\"border: solid 1px black; border-collapse: collapse;\">Notiz1</th>\n            <th style=\"border: solid 1px black; border-collapse: collapse;\">Notiz2</th>\n          </tr>\n          <div *ngFor=\"let table of tablesEdelweissKaminStube\">\n            <div *ngIf=\"!table.groups || table.groups.length < 1\">\n              <tr style=\"border: solid 1px black;\">\n                <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n                <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n                <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n                <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n                <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n                <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n                <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n                <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n                <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n                <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n                <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n            </div>\n            <div *ngFor=\"let group of table.groups\">\n              <tr style=\"border: solid 1px black;\">\n                <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n                <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.zimmernummerValue}}</td>\n                <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.nameValue}}</td>\n                <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.personenAnzahlValue}}</td>\n                <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.anreiseValue}}</td>\n                <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.abreiseValue}}</td>\n                <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n                <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.traceValue}}</td>\n                <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.bemerkungValue}}</td>\n                <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.notiz1Value}}</td>\n                <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.notiz2Value}}</td>\n                <div *ngIf=\"group.newTraceText\">\n                  <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceRoomNumber}}</td>\n                  <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceName}}</td>\n                  <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceTableNumber}}</td>\n                  <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n                  <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n                  <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n                  <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n                  <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceText}} {{group.newTraceDate}} {{table.newTraceEmployee}}</td>\n                  <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n                  <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n                  <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n                </div>\n              </tr>\n            </div>\n          </div>\n        </table>\n      </div>\n  <div *ngIf=\"showTeeStubeBool\">\n    <table style=\"border: solid 1px black; border-collapse: collapse;\">\n      <tr>\n        {{dateGeneratedListe}}\n      </tr>\n      <tr>\n        TeeStube / Teelounge\n      </tr>\n      <tr style=\"border: solid 1px black;\">\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Tisch</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">#</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Name</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">PAX</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Anreise</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Abreise</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">GRP</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Trace</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Bemerkung</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Notiz1</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Notiz2</th>\n      </tr>\n      <div *ngFor=\"let table of tablesTeestubeTeelounge\">\n        <div *ngIf=\"!table.groups || table.groups.length < 1\">\n          <tr style=\"border: solid 1px black;\">\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n        </div>\n        <div *ngFor=\"let group of table.groups\">\n          <tr style=\"border: solid 1px black;\">\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.zimmernummerValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.nameValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.personenAnzahlValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.anreiseValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.abreiseValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.traceValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.bemerkungValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.notiz1Value}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.notiz2Value}}</td>\n            <div *ngIf=\"group.newTraceText\">\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceRoomNumber}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceName}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceTableNumber}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceText}} {{group.newTraceDate}} {{table.newTraceEmployee}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            </div>\n          </tr>\n        </div>\n      </div>\n    </table>\n  </div>\n  <div *ngIf=\"showTerasseBool\">\n    <table style=\"border: solid 1px black; border-collapse: collapse;\">\n      <tr>\n        {{dateGeneratedListe}}\n      </tr>\n      <tr>\n        Terrasse\n      </tr>\n      <tr style=\"border: solid 1px black;\">\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Tisch</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">#</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Name</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">PAX</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Anreise</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Abreise</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">GRP</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Trace</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Bemerkung</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Notiz1</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Notiz2</th>\n      </tr>\n      <div *ngFor=\"let table of tablesTerasse\">\n        <div *ngIf=\"!table.groups || table.groups.length < 1\">\n          <tr style=\"border: solid 1px black;\">\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n        </div>\n        <div *ngFor=\"let group of table.groups\">\n          <tr style=\"border: solid 1px black;\">\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.zimmernummerValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.nameValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.personenAnzahlValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.anreiseValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.abreiseValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.traceValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.bemerkungValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.notiz1Value}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.notiz2Value}}</td>\n            <div *ngIf=\"group.newTraceText\">\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceRoomNumber}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceName}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceTableNumber}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceText}} {{group.newTraceDate}} {{table.newTraceEmployee}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            </div>\n          </tr>\n        </div>\n      </div>\n    </table>\n  </div>\n  <div *ngIf=\"showTerrasseEdelweissBool\">\n    <table style=\"border: solid 1px black; border-collapse: collapse;\">\n      <tr>\n        {{dateGeneratedListe}}\n      </tr>\n      <tr>\n        Terrasse\n      </tr>\n      <tr style=\"border: solid 1px black;\">\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Tisch</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">#</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Name</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">PAX</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Anreise</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Abreise</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">GRP</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Trace</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Bemerkung</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Notiz1</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Notiz2</th>\n      </tr>\n      <div *ngFor=\"let table of tablesTerrasseEdelweiss\">\n        <div *ngIf=\"!table.groups || table.groups.length < 1\">\n          <tr style=\"border: solid 1px black;\">\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"> -</td>\n        </div>\n        <div *ngFor=\"let group of table.groups\">\n          <tr style=\"border: solid 1px black;\">\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.zimmernummerValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.nameValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.personenAnzahlValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.anreiseValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.abreiseValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.traceValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.bemerkungValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.notiz1Value}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.notiz2Value}}</td>\n            <div *ngIf=\"group.newTraceText\">\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceRoomNumber}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceName}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceTableNumber}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceText}} {{group.newTraceDate}} {{table.newTraceEmployee}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            </div>\n          </tr>\n        </div>\n      </div>\n    </table>\n  </div>\n</div>\n<div id=\"printSectionId2\" class=\"section2\">\n  <div class=\"row\" style=\" border-left: 5px solid #0a7a74; border-right: 5px solid #0a7a74;\">\n    <div *ngIf=\"showBerglerBool\">\n      <div *ngFor=\"let tableBerglerStubeHubertusStube of tablesBerglerStubeHubertusStube; let j = index;\">\n        <div dropdownToggle type=\"button\" class=\"t{{tableBerglerStubeHubertusStube.number}} table-item\"\n             [ngStyle]=\"{'top': tableBerglerStubeHubertusStube.topValue + 'px', 'left': tableBerglerStubeHubertusStube.leftValue + 'px', 'background-color': + tableBerglerStubeHubertusStube.bgColor, 'height': + tableBerglerStubeHubertusStube.height + 'px', 'width': + tableBerglerStubeHubertusStube.width + 'px', 'border': + tableBerglerStubeHubertusStube.border}\"\n             [style.border]=\"getStyle(tablesBerglerStubeHubertusStube[j].groups)\" dropdown>\n          <div *ngIf=\"tablesBerglerStubeHubertusStube[j] !== tablesBerglerStubeHubertusStube[j+1]\">\n            <p><b>{{tableBerglerStubeHubertusStube.number}} <br>{{erwBerglerStubeHubertusStube[j]}}/{{kiBerglerStubeHubertusStube[j]}}</b></p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"showBauernStubnBool\">\n      <div *ngFor=\"let tableBauernstube of tablesBauernstube; let j = index;\">\n        <div dropdownToggle type=\"button\" class=\"t{{tableBauernstube.number}} table-item\" [ngStyle]=\"{'top': tableBauernstube.topValue + 'px', 'left': tableBauernstube.leftValue + 'px', 'background-color': + tableBauernstube.bgColor, 'height': + tableBauernstube.height + 'px', 'width': + tableBauernstube.width + 'px', 'border': + tableBauernstube.border}\" [style.border]=\"getStyle(tablesBauernstube[j].groups)\" dropdown>\n          <div *ngIf=\"tablesBauernstube[j] !== tablesBauernstube[j+1]\">\n            <p><b>{{tableBauernstube.number}} <br>{{erwBauernstube[j]}}/{{kiBauernstube[j]}}</b></p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"showWaeldlerBool\">\n      <div *ngFor=\"let tableWaeldlerStubeKristallStube of tablesWaeldlerStubeKristallStube; let j = index;\">\n        <div dropdownToggle type=\"button\" class=\"t{{tableWaeldlerStubeKristallStube.number}} table-item\" [ngStyle]=\"{'top': tableWaeldlerStubeKristallStube.topValue + 'px', 'left': tableWaeldlerStubeKristallStube.leftValue + 'px', 'background-color': + tableWaeldlerStubeKristallStube.bgColor, 'height': + tableWaeldlerStubeKristallStube.height + 'px', 'width': + tableWaeldlerStubeKristallStube.width + 'px', 'border': + tableWaeldlerStubeKristallStube.border}\" [style.border]=\"getStyle(tablesWaeldlerStubeKristallStube[j].groups)\" dropdown>\n          <div *ngIf=\"tablesWaeldlerStubeKristallStube[j] !== tablesWaeldlerStubeKristallStube[j+1]\">\n            <p><b>{{tableWaeldlerStubeKristallStube.number}} <br>{{erwWaeldlerStubeKristallStube[j]}}/{{kiWaeldlerStubeKristallStube[j]}}</b></p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"showEdelweissBool\">\n      <div *ngFor=\"let tableEdelweissKaminStube of tablesEdelweissKaminStube; let j = index;\">\n        <div dropdownToggle type=\"button\" class=\"t{{tableEdelweissKaminStube.number}} table-item\" [ngStyle]=\"{'top': tableEdelweissKaminStube.topValue + 'px', 'left': tableEdelweissKaminStube.leftValue + 'px', 'background-color': + tableEdelweissKaminStube.bgColor, 'height': + tableEdelweissKaminStube.height + 'px', 'width': + tableEdelweissKaminStube.width + 'px', 'border': + tableEdelweissKaminStube.border}\" [style.border]=\"getStyle(tablesEdelweissKaminStube[j].groups)\" dropdown>\n          <div *ngIf=\"tablesEdelweissKaminStube[j] !== tablesEdelweissKaminStube[j+1]\">\n            <p><b>{{tableEdelweissKaminStube.number}} <br>{{erwEdelweiss[j]}}/{{kiEdelweiss[j]}}</b></p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"showTeeStubeBool\">\n      <div *ngFor=\"let tableTeestubeTeelounge of tablesTeestubeTeelounge; let j = index;\">\n        <div dropdownToggle type=\"button\" class=\"t{{tableTeestubeTeelounge.number}} table-item\" [ngStyle]=\"{'top': tableTeestubeTeelounge.topValue + 'px', 'left': tableTeestubeTeelounge.leftValue + 'px', 'background-color': + tableTeestubeTeelounge.bgColor, 'height': + tableTeestubeTeelounge.height + 'px', 'width': + tableTeestubeTeelounge.width + 'px', 'border': + tableTeestubeTeelounge.border}\" [style.border]=\"getStyle(tablesTeestubeTeelounge[j].groups)\" dropdown>\n          <div *ngIf=\"tablesTeestubeTeelounge[j] !== tablesTeestubeTeelounge[j+1]\">\n            <p><b>{{tableTeestubeTeelounge.number}} <br>{{erwTeestubeTeelounge[j]}}/{{kiTeestubeTeelounge[j]}}</b></p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"showTerasseBool\">\n      <div *ngFor=\"let tableTerasse of tablesTerasse; let j = index;\">\n        <div dropdownToggle type=\"button\" class=\"t{{tableTerasse.number}} table-item\" [ngStyle]=\"{'top': tableTerasse.topValue + 'px', 'left': tableTerasse.leftValue + 'px', 'background-color': + tableTerasse.bgColor, 'height': + tableTerasse.height + 'px', 'width': + tableTerasse.width + 'px', 'border': + tableTerasse.border}\" [style.border]=\"getStyle(tablesTerasse[j].groups)\" dropdown>\n          <div *ngIf=\"tablesTerasse[j] !== tablesTerasse[j+1]\">\n            <p><b>{{tableTerasse.number}} <br>{{erwTerasse[j]}}/{{kiTerasse[j]}}</b></p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"showTerrasseEdelweissBool\">\n      <div *ngFor=\"let tableTerrasseEdelweiss of tablesTerrasseEdelweiss; let j = index;\">\n        <div dropdownToggle type=\"button\" class=\"t{{tableTerrasseEdelweiss.number}} table-item\" [ngStyle]=\"{'top': tableTerrasseEdelweiss.topValue + 'px', 'left': tableTerrasseEdelweiss.leftValue + 'px', 'background-color': + tableTerrasseEdelweiss.bgColor, 'height': + tableTerrasseEdelweiss.height + 'px', 'width': + tableTerrasseEdelweiss.width + 'px', 'border': + tableTerrasseEdelweiss.border}\" [style.border]=\"getStyle(tablesTerrasseEdelweiss[j].groups)\" dropdown>\n          <div *ngIf=\"tablesTerrasseEdelweiss[j] !== tablesTerrasseEdelweiss[j+1]\">\n            <p><b>{{tableTerrasseEdelweiss.number}} <br>{{erwTerrasseEdelweiss[j]}}/{{kiTerrasseEdelweiss[j]}}</b></p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/print/print.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var PrintComponent = (function () {
    function PrintComponent() {
        this.getTablesOccupied = new core_1.EventEmitter();
        this.getTablesforAzListe = new core_1.EventEmitter();
        this.tempTablesArray = [];
        this.tempTablesArray2 = [];
        this.tempTablesArray1 = [];
        this.tempTablesArray3 = [];
        this.uniqueTables = [];
        this.tableNumbers = [];
        this.tableTemp = [];
        this.trace = false;
    }
    PrintComponent.prototype.ngOnInit = function () {
    };
    PrintComponent.prototype.formatAzListe = function (tables) {
        this.tables = tables;
        this.tableNumbers = [];
        this.uniqueTables = [];
        this.tableTemp = [];
        //(<any>Object).assign( this.photos, photos )
        for (var i = 0; i < this.tables.length; i++) {
            if (this.tables[i].groups) {
                for (var j = 0; j < this.tables[i].groups.length; j++) {
                    var tempObject = {
                        number: this.tables[i].number,
                        department: this.tables[i].department,
                        bgColor: this.tables[i].bgColor,
                        isBesetzt: this.tables[i].isBesetzt,
                        placeholder: this.tables[i].placeholder,
                        border: this.tables[i].border,
                    };
                    //console.log(this.tables[i].number);
                    if (this.tables[i].groups[j]) {
                        //console.log(this.tables[i].groups[j]);
                        this.object = Object.assign(this.tables[i].groups[j], tempObject);
                        //console.log("this.object");
                        //console.log(this.object);
                        this.tableTemp.push(this.object);
                    }
                }
            }
        }
        //console.log("this.tableTemp");
        //console.log(this.tableTemp);
        this.tables = this.tableTemp.sort(function (a, b) {
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
        for (var i = 0; i < this.tables.length; i++) {
            //console.log(i);
            if ("nameValue" in this.tables[i]) {
                //console.log("--->" + i);
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
        //console.log(this.tableTemp);
        //console.log(this.tables);
        //console.log("this.tablesOccupied" + this.tablesOccupied);
        //console.log(tables);
        /*
        function filterByID(obj) {
          if (obj.groups) {
            if (obj.groups in obj || obj.groups in obj) {
              return true;
            } else {
              return false;
            }
          }
        }
    
        this.tempTablesArray = this.tables.filter(filterByID);
    
        for (let i: number = 0; i < this.tables.length; i++) {
          if (typeof this.tables[i].groups !== "undefined") {
            if (this.tables[i].groups[1]) {
              if (this.tables[i].groups[1].nameValue) {
                this.tables.splice(i, 1);
              }
            }
            else if (this.tables[i].groups) {
              if (this.tables[i].groups[2].nameValue) {
                this.tables.splice(i, 1);
              }
            }
          }
        }
    
        for (let i: number = 0; i < this.tempTablesArray.length; i++) {
          this.tempTablesArray2[i] = new Table();
        }
    
        for (let i: number = 0; i < this.tempTablesArray.length; i++) {
          this.tempTablesArray3[i] = new Table();
        }
    
        for (let i: number = 0; i < this.tempTablesArray.length; i++) {
          this.tempTablesArray1[i] = new Table();
        }
    
    
        for (let a: number = 0; a < this.tempTablesArray.length; a++) {
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
    
    
        for (let a: number = 0; a < this.tempTablesArray.length; a++) {
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
    
    
        for (let a: number = 0; a < this.tempTablesArray.length; a++) {
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
    
        for (let i: number = 0; i < this.tables.length; i++) {
          if (!("nameValue" in this.tables[i])) {
            this.tables.splice(i,1);
          }
        }
    
        this.tables = this.tables.sort(function(a, b) {
          let nameA = "";
          let nameB = "";
          if (a.groups) {
            if (typeof a.groups.nameValue !== "undefined" && a.groups.nameValue !== null) {
              nameA = a.groups.nameValue.toUpperCase(); // ignore upper and lowercase
            }
          }
          if (b.groups) {
            if (typeof b.groups.nameValue !== "undefined" && b.groups.nameValue !== null) {
              nameB = b.groups.nameValue.toUpperCase(); // ignore upper and lowercase
            }
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
    
        for (let i: number = 0; i < this.tables.length; i++) {
          console.log(i);
          if ("nameValue" in this.tables[i]) {
            console.log("--->" + i);
            this.tableNumbers.push(this.tables[i].number);
          }
        }
    
        function onlyUnique(value, index, self) {
          return self.indexOf(value) === index;
        }
    
        this.uniqueTables = this.tableNumbers.filter( onlyUnique );
        this.tablesOccupied = this.uniqueTables.length;
    
        this.getTablesOccupied.emit(this.tablesOccupied);
        this.getTablesforAzListe.emit(this.tables);
    
        console.log(this.tables);
        console.log("this.tablesOccupied" + this.tablesOccupied);
    
        console.log(tables);
        */
    };
    PrintComponent.prototype.getStyle = function (a) {
        //console.log("a");
        //console.log(a);
        if (typeof a === "undefined") {
            return "solid 3px rgb(243, 239, 228)";
        }
        else {
            for (var b = 0; b < a.length; b++) {
                //console.log("LOOOOOOOOOOOOOOP");
                //console.log(a[b].traceValue);
                if (a[b].traceValue != "-" || a[b].newTraceText) {
                    this.trace = true;
                }
            }
            if (this.trace) {
                this.trace = false;
                return "solid 3px red";
            }
            else {
                return "solid 3px rgb(243, 239, 228)";
            }
        }
    };
    return PrintComponent;
}());
__decorate([
    core_1.Input('tables'),
    __metadata("design:type", Array)
], PrintComponent.prototype, "tables", void 0);
__decorate([
    core_1.Input('dateGeneratedListe'),
    __metadata("design:type", String)
], PrintComponent.prototype, "dateGeneratedListe", void 0);
__decorate([
    core_1.Input('tablesBauernstube'),
    __metadata("design:type", Array)
], PrintComponent.prototype, "tablesBauernstube", void 0);
__decorate([
    core_1.Input('showBauernStubnBool'),
    __metadata("design:type", Boolean)
], PrintComponent.prototype, "showBauernStubnBool", void 0);
__decorate([
    core_1.Input('tablesEdelweissKaminStube'),
    __metadata("design:type", Array)
], PrintComponent.prototype, "tablesEdelweissKaminStube", void 0);
__decorate([
    core_1.Input('showEdelweissBool'),
    __metadata("design:type", Boolean)
], PrintComponent.prototype, "showEdelweissBool", void 0);
__decorate([
    core_1.Input('tablesBerglerStubeHubertusStube'),
    __metadata("design:type", Array)
], PrintComponent.prototype, "tablesBerglerStubeHubertusStube", void 0);
__decorate([
    core_1.Input('showBerglerBool'),
    __metadata("design:type", Boolean)
], PrintComponent.prototype, "showBerglerBool", void 0);
__decorate([
    core_1.Input('tablesTeestubeTeelounge'),
    __metadata("design:type", Array)
], PrintComponent.prototype, "tablesTeestubeTeelounge", void 0);
__decorate([
    core_1.Input('showTeeStubeBool'),
    __metadata("design:type", Boolean)
], PrintComponent.prototype, "showTeeStubeBool", void 0);
__decorate([
    core_1.Input('tablesWaeldlerStubeKristallStube'),
    __metadata("design:type", Array)
], PrintComponent.prototype, "tablesWaeldlerStubeKristallStube", void 0);
__decorate([
    core_1.Input('showWaeldlerBool'),
    __metadata("design:type", Boolean)
], PrintComponent.prototype, "showWaeldlerBool", void 0);
__decorate([
    core_1.Input('showTerasseBool'),
    __metadata("design:type", Boolean)
], PrintComponent.prototype, "showTerasseBool", void 0);
__decorate([
    core_1.Input('showTerrasseEdelweissBool'),
    __metadata("design:type", Boolean)
], PrintComponent.prototype, "showTerrasseEdelweissBool", void 0);
__decorate([
    core_1.Input('tablesTerasse'),
    __metadata("design:type", Array)
], PrintComponent.prototype, "tablesTerasse", void 0);
__decorate([
    core_1.Input('tablesTerrasseEdelweiss'),
    __metadata("design:type", Array)
], PrintComponent.prototype, "tablesTerrasseEdelweiss", void 0);
__decorate([
    core_1.Input('tablesTerrasse'),
    __metadata("design:type", Array)
], PrintComponent.prototype, "tablesTerrasse", void 0);
__decorate([
    core_1.Input('erwBerglerStubeHubertusStube'),
    __metadata("design:type", Object)
], PrintComponent.prototype, "erwBerglerStubeHubertusStube", void 0);
__decorate([
    core_1.Input('kiBerglerStubeHubertusStube'),
    __metadata("design:type", Object)
], PrintComponent.prototype, "kiBerglerStubeHubertusStube", void 0);
__decorate([
    core_1.Input('erwBauernstube'),
    __metadata("design:type", Object)
], PrintComponent.prototype, "erwBauernstube", void 0);
__decorate([
    core_1.Input('kiBauernstube'),
    __metadata("design:type", Object)
], PrintComponent.prototype, "kiBauernstube", void 0);
__decorate([
    core_1.Input('kiEdelweiss'),
    __metadata("design:type", Object)
], PrintComponent.prototype, "kiEdelweiss", void 0);
__decorate([
    core_1.Input('erwTeestubeTeelounge'),
    __metadata("design:type", Object)
], PrintComponent.prototype, "erwTeestubeTeelounge", void 0);
__decorate([
    core_1.Input('kiTeestubeTeelounge'),
    __metadata("design:type", Object)
], PrintComponent.prototype, "kiTeestubeTeelounge", void 0);
__decorate([
    core_1.Input('erwWaeldlerStubeKristallStube'),
    __metadata("design:type", Object)
], PrintComponent.prototype, "erwWaeldlerStubeKristallStube", void 0);
__decorate([
    core_1.Input('kiWaeldlerStubeKristallStube'),
    __metadata("design:type", Object)
], PrintComponent.prototype, "kiWaeldlerStubeKristallStube", void 0);
__decorate([
    core_1.Input('erwEdelweiss'),
    __metadata("design:type", Object)
], PrintComponent.prototype, "erwEdelweiss", void 0);
__decorate([
    core_1.Input('erwTerasse'),
    __metadata("design:type", Object)
], PrintComponent.prototype, "erwTerasse", void 0);
__decorate([
    core_1.Input('erwTerrasseEdelweiss'),
    __metadata("design:type", Object)
], PrintComponent.prototype, "erwTerrasseEdelweiss", void 0);
__decorate([
    core_1.Input('kiTerasse'),
    __metadata("design:type", Object)
], PrintComponent.prototype, "kiTerasse", void 0);
__decorate([
    core_1.Input('kiTerrasseEdelweiss'),
    __metadata("design:type", Object)
], PrintComponent.prototype, "kiTerrasseEdelweiss", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], PrintComponent.prototype, "getTablesOccupied", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_b = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _b || Object)
], PrintComponent.prototype, "getTablesforAzListe", void 0);
PrintComponent = __decorate([
    core_1.Component({
        selector: 'app-print',
        template: __webpack_require__("../../../../../src/app/components/digitalerTischplan/print/print.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digitalerTischplan/tischplan.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PrintComponent);
exports.PrintComponent = PrintComponent;
var _a, _b;
//# sourceMappingURL=print.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <h2 class=\"page-header\">{{user.name}}</h2>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Username: {{user.username}}</li>\n    <li class=\"list-group-item\">Email: {{user.email}}</li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/profile/profile.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var auth_service_1 = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var ProfileComponent = (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    core_1.Component({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/digitalerTischplan/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digitalerTischplan/tischplan.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
], ProfileComponent);
exports.ProfileComponent = ProfileComponent;
var _a, _b;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Register</h2>\n<form (submit)=\"onRegisterSubmit()\">\n  <div class=\"form-group\">\n    <label>Name</label>\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Email</label>\n    <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" >\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/register/register.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var validate_service_1 = __webpack_require__("../../../../../src/app/services/validate.service.ts");
var auth_service_1 = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var angular2_flash_messages_1 = __webpack_require__("../../../../angular2-flash-messages/index.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var RegisterComponent = (function () {
    function RegisterComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
        };
        // Required Fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Register user
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You are now registered and can log in', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    core_1.Component({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/digitalerTischplan/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digitalerTischplan/tischplan.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof validate_service_1.ValidateService !== "undefined" && validate_service_1.ValidateService) === "function" && _a || Object, typeof (_b = typeof angular2_flash_messages_1.FlashMessagesService !== "undefined" && angular2_flash_messages_1.FlashMessagesService) === "function" && _b || Object, typeof (_c = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _c || Object, typeof (_d = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _d || Object])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/tableplan/tableplan.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showTablePlanBool\">\n  <div class=\"col-xs-12 printTwo\">\n    <div class=\"row\" style=\" border-left: 5px solid #0a7a74; border-right: 5px solid #0a7a74;\">\n      <div *ngIf=\"showBerglerBool\">\n        <div *ngFor=\"let tableBerglerStubeHubertusStube of tablesBerglerStubeHubertusStube; let j = index;\">\n          <div dropdownToggle type=\"button\" class=\"t{{tableBerglerStubeHubertusStube.number}} table-item\" [ngStyle]=\"{'top': tableBerglerStubeHubertusStube.topValue + 'px', 'left': tableBerglerStubeHubertusStube.leftValue + 'px', 'background-color': + tableBerglerStubeHubertusStube.bgColor, 'height': + tableBerglerStubeHubertusStube.height + 'px', 'width': + tableBerglerStubeHubertusStube.width + 'px', 'border': + tableBerglerStubeHubertusStube.border}\" [style.border]=\"getStyle(tablesBerglerStubeHubertusStube[j].groups)\" dropdown>\n            <div *ngIf=\"tablesBerglerStubeHubertusStube[j] !== tablesBerglerStubeHubertusStube[j+1]\">\n              <p><b>{{tableBerglerStubeHubertusStube.number}} <br>{{erwBerglerStubeHubertusStube[j]}}/{{kiBerglerStubeHubertusStube[j]}}</b></p>\n            </div>\n            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n              <div dropdownToggle type=\"button\" style=\"color: white; padding: 10px;\" (mouseenter)=\"mouseEnterMoveTableButton()\"  (mouseleave)=\"mouseLeaveMoveTableButton()\" [ngStyle]=\"{'background-color': '#' + buttonMoveTable}\" (click)=\"none($event)\" class=\"dropdownMoveTable\" dropdown><b>Tisch verschieben</b>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\" style=\"max-height: 240px; margin: 0px;  padding: 0px; overflow: auto\">\n                  <li class=\"dropdown-item\" (click)=\"addTable(tableBerglerStubeHubertusStube, j)\" style=\"color: black; padding: 10px;\" (mouseenter)=\"mouseEnterHinzufuegenButton()\"  (mouseleave)=\"mouseLeaveHinzufuegenButton()\" [ngStyle]=\"{'background-color': '#' + buttonHinzufuegen}\" ><b>Tisch hinzufügen</b></li>\n                  <li class=\"divider dropdown-divider\" style=\"padding: 0 0 0 0; margin: 0; \"></li>\n                  <li class=\"dropdown-item\" (click)=\"removeTable(tableBerglerStubeHubertusStube, j)\" (mouseenter)=\"mouseEnterEntfernenButton()\"  (mouseleave)=\"mouseLeaveEntfernenButton()\" [ngStyle]=\"{'background-color': '#' + buttonEntfernen}\" style=\"color: black; padding: 10px\"><b>Tisch entfernen</b></li>\n                </div>\n              </div>\n              <li class=\"divider dropdown-divider\" style=\"padding: 0 0 0 0; margin: 0;\"></li>\n              <div dropdownToggle type=\"button\" (click)=\"none($event)\" style=\"padding: 10px; \" (mouseenter)=\"mouseEnterInfoButton()\"  (mouseleave)=\"mouseLeaveInfoButton()\" [ngStyle]=\"{'background-color': '#' + buttonInfo}\" class=\"dropdownShowinfo\"  class=\"dropdownShowinfo\" dropdown><b>Infos anzeigen</b>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\" style=\"max-height: 240px; padding: 10px; overflow: auto\">\n                  <div *ngFor=\"let group of tableBerglerStubeHubertusStube.groups\">\n                    <div *ngIf=\"group\">\n                      <div *ngIf=\"group.nameValue\">\n                        <div class=\"dropdown-item\" [style.border]=\"getStyleTrace(group.traceValue)\"><b>Name:</b> {{group.nameValue}}<br><b>Nation:</b> {{group.nationValue}}<br><b>Sprache:</b> {{group.spracheValue}}<br><b>Zimmer Nummer: </b>{{group.zimmernummerValue}}<br><b>Preistyp: </b>{{group.preistypValue}}<br><b>Anreise: </b>{{group.anreiseValue}}<br><b>Abreise:</b> {{group.abreiseValue}}<br><b>Personen Anzahl:</b>{{group.personenAnzahlValue}}<br><b>Kategorie: </b>{{group.kategorieValue}}<br><b>Reisebüro: </b>{{group.reisebueroValue}}<br><b>Notiz1:</b> {{group.notiz1Value}}<br><b>Notiz2:</b> {{group.notiz2Value}}<br><b>Bemerkung:</b> {{group.bemerkungValue}}<br><b>Trace:</b> {{group.traceValue}}</div>\n                        <li class=\"divider dropdown-divider\" style=\"padding: 0 0 0 0\"></li>\n                      </div>\n                      <div *ngIf=\"group.newTraceText\">\n                        <div class=\"dropdown-item\"  style=\"background-color: #FFFFFF; border: solid 3px red\">\n                          <b> Zimmernummer: </b>{{group.newTraceRoomNumber}}<br> <b> Neuer Trace: </b>{{group.newTraceText}} <br> <b> Tischnummer: </b>{{group.newTraceTableNumber}} <br> <b> Mitarbeiter: </b>{{group.newTraceEmployee}} <br> <b> Name: </b>{{group.newTraceName}} <br> <b> Datum: </b>{{group.newTraceDate}}\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"showBauernStubnBool\">\n        <div *ngFor=\"let tableBauernstube of tablesBauernstube; let j = index;\">\n          <div dropdownToggle type=\"button\" class=\"t{{tableBauernstube.number}} table-item\" [ngStyle]=\"{'top': tableBauernstube.topValue + 'px', 'left': tableBauernstube.leftValue + 'px', 'background-color': + tableBauernstube.bgColor, 'height': + tableBauernstube.height + 'px', 'width': + tableBauernstube.width + 'px', 'border': + tableBauernstube.border}\" [style.border]=\"getStyle(tablesBauernstube[j].groups)\" dropdown>\n            <div *ngIf=\"tablesBauernstube[j] !== tablesBauernstube[j+1]\">\n              <p><b>{{tableBauernstube.number}} <br>{{erwBauernstube[j]}}/{{kiBauernstube[j]}}</b></p>\n            </div>\n            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n              <div dropdownToggle type=\"button\" style=\"color: white; padding: 10px;\" (mouseenter)=\"mouseEnterMoveTableButton()\"  (mouseleave)=\"mouseLeaveMoveTableButton()\" [ngStyle]=\"{'background-color': '#' + buttonMoveTable}\" (click)=\"none($event)\" class=\"dropdownMoveTable\" dropdown><b>Tisch verschieben</b>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\" style=\"max-height: 240px; margin: 0px;  padding: 0px; overflow: auto\">\n                  <li class=\"dropdown-item\" (click)=\"addTable(tableBauernstube, j)\" style=\"color: black; padding: 10px;\" (mouseenter)=\"mouseEnterHinzufuegenButton()\"  (mouseleave)=\"mouseLeaveHinzufuegenButton()\" [ngStyle]=\"{'background-color': '#' + buttonHinzufuegen}\" ><b>Tisch hinzufügen</b></li>\n                  <li class=\"divider dropdown-divider\" style=\"padding: 0 0 0 0; margin: 0; \"></li>\n                  <li class=\"dropdown-item\" (click)=\"removeTable(tableBauernstube, j)\" (mouseenter)=\"mouseEnterEntfernenButton()\"  (mouseleave)=\"mouseLeaveEntfernenButton()\" [ngStyle]=\"{'background-color': '#' + buttonEntfernen}\" style=\"color: black; padding: 10px\"><b>Tisch entfernen</b></li>\n                </div>\n              </div>\n              <li class=\"divider dropdown-divider\" style=\"padding: 0 0 0 0; margin: 0;\"></li>\n              <div dropdownToggle type=\"button\" (click)=\"none($event)\" style=\"padding: 10px; \" (mouseenter)=\"mouseEnterInfoButton()\"  (mouseleave)=\"mouseLeaveInfoButton()\" [ngStyle]=\"{'background-color': '#' + buttonInfo}\" class=\"dropdownShowinfo\"  class=\"dropdownShowinfo\" dropdown><b>Infos anzeigen</b>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\" style=\"max-height: 240px; padding: 10px; overflow: auto\">\n                  <div *ngFor=\"let group of tableBauernstube.groups\">\n                    <div *ngIf=\"group\">\n                      <div *ngIf=\"group.nameValue\">\n                        <div class=\"dropdown-item\" [style.border]=\"getStyleTrace(group.traceValue)\"><b>Name:</b> {{group.nameValue}}<br><b>Nation:</b> {{group.nationValue}}<br><b>Sprache:</b> {{group.spracheValue}}<br><b>Zimmer Nummer: </b>{{group.zimmernummerValue}}<br><b>Preistyp: </b>{{group.preistypValue}}<br><b>Anreise: </b>{{group.anreiseValue}}<br><b>Abreise:</b> {{group.abreiseValue}}<br><b>Personen Anzahl:</b>{{group.personenAnzahlValue}}<br><b>Kategorie: </b>{{group.kategorieValue}}<br><b>Reisebüro: </b>{{group.reisebueroValue}}<br><b>Notiz1:</b> {{group.notiz1Value}}<br><b>Notiz2:</b> {{group.notiz2Value}}<br><b>Bemerkung:</b> {{group.bemerkungValue}}<br><b>Trace:</b> {{group.traceValue}}</div>\n                        <li class=\"divider dropdown-divider\" style=\"padding: 0 0 0 0\"></li>\n                      </div>\n                      <div *ngIf=\"group.newTraceText\">\n                        <div class=\"dropdown-item\"  style=\"background-color: #FFFFFF; border: solid 3px red\">\n                          <b> Zimmernummer: </b>{{group.newTraceRoomNumber}}<br> <b> Neuer Trace: </b>{{group.newTraceText}} <br> <b> Tischnummer: </b>{{group.newTraceTableNumber}} <br> <b> Mitarbeiter: </b>{{group.newTraceEmployee}} <br> <b> Name: </b>{{group.newTraceName}} <br> <b> Datum: </b>{{group.newTraceDate}}\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"showWaeldlerBool\">\n        <div *ngFor=\"let tableWaeldlerStubeKristallStube of tablesWaeldlerStubeKristallStube; let j = index;\">\n          <div dropdownToggle type=\"button\" class=\"t{{tableWaeldlerStubeKristallStube.number}} table-item\" [ngStyle]=\"{'top': tableWaeldlerStubeKristallStube.topValue + 'px', 'left': tableWaeldlerStubeKristallStube.leftValue + 'px', 'background-color': + tableWaeldlerStubeKristallStube.bgColor, 'height': + tableWaeldlerStubeKristallStube.height + 'px', 'width': + tableWaeldlerStubeKristallStube.width + 'px', 'border': + tableWaeldlerStubeKristallStube.border}\" [style.border]=\"getStyle(tablesWaeldlerStubeKristallStube[j].groups)\" dropdown>\n            <div *ngIf=\"tablesWaeldlerStubeKristallStube[j] !== tablesWaeldlerStubeKristallStube[j+1]\">\n              <p><b>{{tableWaeldlerStubeKristallStube.number}} <br>{{erwWaeldlerStubeKristallStube[j]}}/{{kiWaeldlerStubeKristallStube[j]}}</b></p>\n            </div>\n            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n              <div dropdownToggle type=\"button\" style=\"color: white; padding: 10px;\" (mouseenter)=\"mouseEnterMoveTableButton()\"  (mouseleave)=\"mouseLeaveMoveTableButton()\" [ngStyle]=\"{'background-color': '#' + buttonMoveTable}\" (click)=\"none($event)\" class=\"dropdownMoveTable\" dropdown><b>Tisch verschieben</b>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\" style=\"max-height: 240px; margin: 0px;  padding: 0px; overflow: auto\">\n                  <li class=\"dropdown-item\" (click)=\"addTable(tableWaeldlerStubeKristallStube, j)\" style=\"color: black; padding: 10px;\" (mouseenter)=\"mouseEnterHinzufuegenButton()\"  (mouseleave)=\"mouseLeaveHinzufuegenButton()\" [ngStyle]=\"{'background-color': '#' + buttonHinzufuegen}\" ><b>Tisch hinzufügen</b></li>\n                  <li class=\"divider dropdown-divider\" style=\"padding: 0 0 0 0; margin: 0; \"></li>\n                  <li class=\"dropdown-item\" (click)=\"removeTable(tableWaeldlerStubeKristallStube, j)\" (mouseenter)=\"mouseEnterEntfernenButton()\"  (mouseleave)=\"mouseLeaveEntfernenButton()\" [ngStyle]=\"{'background-color': '#' + buttonEntfernen}\" style=\"color: black; padding: 10px\"><b>Tisch entfernen</b></li>\n                </div>\n              </div>\n              <li class=\"divider dropdown-divider\" style=\"padding: 0 0 0 0; margin: 0;\"></li>\n              <div dropdownToggle type=\"button\" (click)=\"none($event)\" style=\"padding: 10px; \" (mouseenter)=\"mouseEnterInfoButton()\"  (mouseleave)=\"mouseLeaveInfoButton()\" [ngStyle]=\"{'background-color': '#' + buttonInfo}\" class=\"dropdownShowinfo\"  class=\"dropdownShowinfo\" dropdown><b>Infos anzeigen</b>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\" style=\"max-height: 240px; padding: 10px; overflow: auto\">\n                  <div *ngFor=\"let group of tableWaeldlerStubeKristallStube.groups\">\n                    <div *ngIf=\"group\">\n                      <div *ngIf=\"group.nameValue\">\n                        <div class=\"dropdown-item\" [style.border]=\"getStyleTrace(group.traceValue)\"><b>Name:</b> {{group.nameValue}}<br><b>Nation:</b> {{group.nationValue}}<br><b>Sprache:</b> {{group.spracheValue}}<br><b>Zimmer Nummer: </b>{{group.zimmernummerValue}}<br><b>Preistyp: </b>{{group.preistypValue}}<br><b>Anreise: </b>{{group.anreiseValue}}<br><b>Abreise:</b> {{group.abreiseValue}}<br><b>Personen Anzahl:</b>{{group.personenAnzahlValue}}<br><b>Kategorie: </b>{{group.kategorieValue}}<br><b>Reisebüro: </b>{{group.reisebueroValue}}<br><b>Notiz1:</b> {{group.notiz1Value}}<br><b>Notiz2:</b> {{group.notiz2Value}}<br><b>Bemerkung:</b> {{group.bemerkungValue}}<br><b>Trace:</b> {{group.traceValue}}</div>\n                        <li class=\"divider dropdown-divider\" style=\"padding: 0 0 0 0\"></li>\n                      </div>\n                      <div *ngIf=\"group.newTraceText\">\n                        <div class=\"dropdown-item\"  style=\"background-color: #FFFFFF; border: solid 3px red\">\n                          <b> Zimmernummer: </b>{{group.newTraceRoomNumber}}<br> <b> Neuer Trace: </b>{{group.newTraceText}} <br> <b> Tischnummer: </b>{{group.newTraceTableNumber}} <br> <b> Mitarbeiter: </b>{{group.newTraceEmployee}} <br> <b> Name: </b>{{group.newTraceName}} <br> <b> Datum: </b>{{group.newTraceDate}}\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"showEdelweissBool\">\n        <div *ngFor=\"let tableEdelweissKaminStube of tablesEdelweissKaminStube; let j = index;\">\n          <div dropdownToggle type=\"button\" class=\"t{{tableEdelweissKaminStube.number}} table-item\" [ngStyle]=\"{'top': tableEdelweissKaminStube.topValue + 'px', 'left': tableEdelweissKaminStube.leftValue + 'px', 'background-color': + tableEdelweissKaminStube.bgColor, 'height': + tableEdelweissKaminStube.height + 'px', 'width': + tableEdelweissKaminStube.width + 'px', 'border': + tableEdelweissKaminStube.border}\" [style.border]=\"getStyle(tablesEdelweissKaminStube[j].groups)\" dropdown>\n            <div *ngIf=\"tablesEdelweissKaminStube[j] !== tablesEdelweissKaminStube[j+1]\">\n              <p><b>{{tableEdelweissKaminStube.number}} <br>{{erwEdelweiss[j]}}/{{kiEdelweiss[j]}}</b></p>\n            </div>\n            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n              <div dropdownToggle type=\"button\" style=\"color: white; padding: 10px;\" (mouseenter)=\"mouseEnterMoveTableButton()\"  (mouseleave)=\"mouseLeaveMoveTableButton()\" [ngStyle]=\"{'background-color': '#' + buttonMoveTable}\" (click)=\"none($event)\" class=\"dropdownMoveTable\" dropdown><b>Tisch verschieben</b>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\" style=\"max-height: 240px; margin: 0px;  padding: 0px; overflow: auto\">\n                  <li class=\"dropdown-item\" (click)=\"addTable(tableEdelweissKaminStube, j)\" style=\"color: black; padding: 10px;\" (mouseenter)=\"mouseEnterHinzufuegenButton()\"  (mouseleave)=\"mouseLeaveHinzufuegenButton()\" [ngStyle]=\"{'background-color': '#' + buttonHinzufuegen}\" ><b>Tisch hinzufügen</b></li>\n                  <li class=\"divider dropdown-divider\" style=\"padding: 0 0 0 0; margin: 0; \"></li>\n                  <li class=\"dropdown-item\" (click)=\"removeTable(tableEdelweissKaminStube, j)\" (mouseenter)=\"mouseEnterEntfernenButton()\"  (mouseleave)=\"mouseLeaveEntfernenButton()\" [ngStyle]=\"{'background-color': '#' + buttonEntfernen}\" style=\"color: black; padding: 10px\"><b>Tisch entfernen</b></li>\n                </div>\n              </div>\n              <li class=\"divider dropdown-divider\" style=\"padding: 0 0 0 0; margin: 0;\"></li>\n              <div dropdownToggle type=\"button\" (click)=\"none($event)\" style=\"padding: 10px; \" (mouseenter)=\"mouseEnterInfoButton()\"  (mouseleave)=\"mouseLeaveInfoButton()\" [ngStyle]=\"{'background-color': '#' + buttonInfo}\" class=\"dropdownShowinfo\"  class=\"dropdownShowinfo\" dropdown><b>Infos anzeigen</b>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\" style=\"max-height: 240px; padding: 10px; overflow: auto\">\n                  <div *ngFor=\"let group of tableEdelweissKaminStube.groups\">\n                    <div *ngIf=\"group\">\n                      <div *ngIf=\"group.nameValue\">\n                        <div class=\"dropdown-item\" [style.border]=\"getStyleTrace(group.traceValue)\"><b>Name:</b> {{group.nameValue}}<br><b>Nation:</b> {{group.nationValue}}<br><b>Sprache:</b> {{group.spracheValue}}<br><b>Zimmer Nummer: </b>{{group.zimmernummerValue}}<br><b>Preistyp: </b>{{group.preistypValue}}<br><b>Anreise: </b>{{group.anreiseValue}}<br><b>Abreise:</b> {{group.abreiseValue}}<br><b>Personen Anzahl:</b>{{group.personenAnzahlValue}}<br><b>Kategorie: </b>{{group.kategorieValue}}<br><b>Reisebüro: </b>{{group.reisebueroValue}}<br><b>Notiz1:</b> {{group.notiz1Value}}<br><b>Notiz2:</b> {{group.notiz2Value}}<br><b>Bemerkung:</b> {{group.bemerkungValue}}<br><b>Trace:</b> {{group.traceValue}}</div>\n                        <li class=\"divider dropdown-divider\" style=\"padding: 0 0 0 0\"></li>\n                      </div>\n                      <div *ngIf=\"group.newTraceText\">\n                        <div class=\"dropdown-item\"  style=\"background-color: #FFFFFF; border: solid 3px red\">\n                          <b> Zimmernummer: </b>{{group.newTraceRoomNumber}}<br> <b> Neuer Trace: </b>{{group.newTraceText}} <br> <b> Tischnummer: </b>{{group.newTraceTableNumber}} <br> <b> Mitarbeiter: </b>{{group.newTraceEmployee}} <br> <b> Name: </b>{{group.newTraceName}} <br> <b> Datum: </b>{{group.newTraceDate}}\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"showTeeStubeBool\">\n        <div *ngFor=\"let tableTeestubeTeelounge of tablesTeestubeTeelounge; let j = index;\">\n          <div dropdownToggle type=\"button\" class=\"t{{tableTeestubeTeelounge.number}} table-item\" [ngStyle]=\"{'top': tableTeestubeTeelounge.topValue + 'px', 'left': tableTeestubeTeelounge.leftValue + 'px', 'background-color': + tableTeestubeTeelounge.bgColor, 'height': + tableTeestubeTeelounge.height + 'px', 'width': + tableTeestubeTeelounge.width + 'px', 'border': + tableTeestubeTeelounge.border}\" [style.border]=\"getStyle(tablesTeestubeTeelounge[j].groups)\" dropdown>\n            <div *ngIf=\"tablesTeestubeTeelounge[j] !== tablesTeestubeTeelounge[j+1]\">\n              <p><b>{{tableTeestubeTeelounge.number}} <br>{{erwTeestubeTeelounge[j]}}/{{kiTeestubeTeelounge[j]}}</b></p>\n            </div>\n            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n              <div dropdownToggle type=\"button\" style=\"color: white; padding: 10px;\" (mouseenter)=\"mouseEnterMoveTableButton()\"  (mouseleave)=\"mouseLeaveMoveTableButton()\" [ngStyle]=\"{'background-color': '#' + buttonMoveTable}\" (click)=\"none($event)\" class=\"dropdownMoveTable\" dropdown><b>Tisch verschieben</b>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\" style=\"max-height: 240px; margin: 0px;  padding: 0px; overflow: auto\">\n                  <li class=\"dropdown-item\" (click)=\"addTable(tableTeestubeTeelounge, j)\" style=\"color: black; padding: 10px;\" (mouseenter)=\"mouseEnterHinzufuegenButton()\"  (mouseleave)=\"mouseLeaveHinzufuegenButton()\" [ngStyle]=\"{'background-color': '#' + buttonHinzufuegen}\" ><b>Tisch hinzufügen</b></li>\n                  <li class=\"divider dropdown-divider\" style=\"padding: 0 0 0 0; margin: 0; \"></li>\n                  <li class=\"dropdown-item\" (click)=\"removeTable(tableTeestubeTeelounge, j)\" (mouseenter)=\"mouseEnterEntfernenButton()\"  (mouseleave)=\"mouseLeaveEntfernenButton()\" [ngStyle]=\"{'background-color': '#' + buttonEntfernen}\" style=\"color: black; padding: 10px\"><b>Tisch entfernen</b></li>\n                </div>\n              </div>\n              <li class=\"divider dropdown-divider\" style=\"padding: 0 0 0 0; margin: 0;\"></li>\n              <div dropdownToggle type=\"button\" (click)=\"none($event)\" style=\"padding: 10px; \" (mouseenter)=\"mouseEnterInfoButton()\"  (mouseleave)=\"mouseLeaveInfoButton()\" [ngStyle]=\"{'background-color': '#' + buttonInfo}\" class=\"dropdownShowinfo\"  class=\"dropdownShowinfo\" dropdown><b>Infos anzeigen</b>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\" style=\"max-height: 240px; padding: 10px; overflow: auto\">\n                  <div *ngFor=\"let group of tableTeestubeTeelounge.groups\">\n                    <div *ngIf=\"group\">\n                      <div *ngIf=\"group.nameValue\">\n                        <div class=\"dropdown-item\" [style.border]=\"getStyleTrace(group.traceValue)\"><b>Name:</b> {{group.nameValue}}<br><b>Nation:</b> {{group.nationValue}}<br><b>Sprache:</b> {{group.spracheValue}}<br><b>Zimmer Nummer: </b>{{group.zimmernummerValue}}<br><b>Preistyp: </b>{{group.preistypValue}}<br><b>Anreise: </b>{{group.anreiseValue}}<br><b>Abreise:</b> {{group.abreiseValue}}<br><b>Personen Anzahl:</b>{{group.personenAnzahlValue}}<br><b>Kategorie: </b>{{group.kategorieValue}}<br><b>Reisebüro: </b>{{group.reisebueroValue}}<br><b>Notiz1:</b> {{group.notiz1Value}}<br><b>Notiz2:</b> {{group.notiz2Value}}<br><b>Bemerkung:</b> {{group.bemerkungValue}}<br><b>Trace:</b> {{group.traceValue}}</div>\n                        <li class=\"divider dropdown-divider\" style=\"padding: 0 0 0 0\"></li>\n                      </div>\n                      <div *ngIf=\"group.newTraceText\">\n                        <div class=\"dropdown-item\"  style=\"background-color: #FFFFFF; border: solid 3px red\">\n                          <b> Zimmernummer: </b>{{group.newTraceRoomNumber}}<br> <b> Neuer Trace: </b>{{group.newTraceText}} <br> <b> Tischnummer: </b>{{group.newTraceTableNumber}} <br> <b> Mitarbeiter: </b>{{group.newTraceEmployee}} <br> <b> Name: </b>{{group.newTraceName}} <br> <b> Datum: </b>{{group.newTraceDate}}\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"showTerasseBool\">\n        <div *ngFor=\"let tableTerasse of tablesTerasse; let j = index;\">\n          <div dropdownToggle type=\"button\" class=\"t{{tableTerasse.number}} table-item\" [ngStyle]=\"{'top': tableTerasse.topValue + 'px', 'left': tableTerasse.leftValue + 'px', 'background-color': + tableTerasse.bgColor, 'height': + tableTerasse.height + 'px', 'width': + tableTerasse.width + 'px', 'border': + tableTerasse.border, 'border-radius': + tableTerasse.borderRadius}\" [style.border]=\"getStyle(tablesTerasse[j].groups)\" dropdown>\n            <div *ngIf=\"tablesTerasse[j] !== tablesTerasse[j+1]\">\n              <p><b>{{tableTerasse.number}} <br>{{erwTerasse[j]}}/{{kiTerasse[j]}}</b></p>\n            </div>\n            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n              <div dropdownToggle type=\"button\" style=\"color: white; padding: 10px;\" (mouseenter)=\"mouseEnterMoveTableButton()\"  (mouseleave)=\"mouseLeaveMoveTableButton()\" [ngStyle]=\"{'background-color': '#' + buttonMoveTable}\" (click)=\"none($event)\" class=\"dropdownMoveTable\" dropdown><b>Tisch verschieben</b>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\" style=\"max-height: 240px; margin: 0px;  padding: 0px; overflow: auto\">\n                  <li class=\"dropdown-item\" (click)=\"addTable(tableTerasse, j)\" style=\"color: black; padding: 10px;\" (mouseenter)=\"mouseEnterHinzufuegenButton()\"  (mouseleave)=\"mouseLeaveHinzufuegenButton()\" [ngStyle]=\"{'background-color': '#' + buttonHinzufuegen}\" ><b>Tisch hinzufügen</b></li>\n                  <li class=\"divider dropdown-divider\" style=\"padding: 0 0 0 0; margin: 0; \"></li>\n                  <li class=\"dropdown-item\" (click)=\"removeTable(tableTerasse, j)\" (mouseenter)=\"mouseEnterEntfernenButton()\"  (mouseleave)=\"mouseLeaveEntfernenButton()\" [ngStyle]=\"{'background-color': '#' + buttonEntfernen}\" style=\"color: black; padding: 10px\"><b>Tisch entfernen</b></li>\n                </div>\n              </div>\n              <li class=\"divider dropdown-divider\" style=\"padding: 0 0 0 0; margin: 0;\"></li>\n              <div dropdownToggle type=\"button\" (click)=\"none($event)\" style=\"padding: 10px; \" (mouseenter)=\"mouseEnterInfoButton()\"  (mouseleave)=\"mouseLeaveInfoButton()\" [ngStyle]=\"{'background-color': '#' + buttonInfo}\" class=\"dropdownShowinfo\"  class=\"dropdownShowinfo\" dropdown><b>Infos anzeigen</b>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\" style=\"max-height: 240px; padding: 10px; overflow: auto\">\n                  <div *ngFor=\"let group of tableTerasse.groups\">\n                    <div *ngIf=\"group\">\n                      <div *ngIf=\"group.nameValue\">\n                        <div class=\"dropdown-item\" [style.border]=\"getStyleTrace(group.traceValue)\"><b>Name:</b> {{group.nameValue}}<br><b>Nation:</b> {{group.nationValue}}<br><b>Sprache:</b> {{group.spracheValue}}<br><b>Zimmer Nummer: </b>{{group.zimmernummerValue}}<br><b>Preistyp: </b>{{group.preistypValue}}<br><b>Anreise: </b>{{group.anreiseValue}}<br><b>Abreise:</b> {{group.abreiseValue}}<br><b>Personen Anzahl:</b>{{group.personenAnzahlValue}}<br><b>Kategorie: </b>{{group.kategorieValue}}<br><b>Reisebüro: </b>{{group.reisebueroValue}}<br><b>Notiz1:</b> {{group.notiz1Value}}<br><b>Notiz2:</b> {{group.notiz2Value}}<br><b>Bemerkung:</b> {{group.bemerkungValue}}<br><b>Trace:</b> {{group.traceValue}}</div>\n                        <li class=\"divider dropdown-divider\" style=\"padding: 0 0 0 0\"></li>\n                      </div>\n                      <div *ngIf=\"group.newTraceText\">\n                        <div class=\"dropdown-item\"  style=\"background-color: #FFFFFF; border: solid 3px red\">\n                          <b> Zimmernummer: </b>{{group.newTraceRoomNumber}}<br> <b> Neuer Trace: </b>{{group.newTraceText}} <br> <b> Tischnummer: </b>{{group.newTraceTableNumber}} <br> <b> Mitarbeiter: </b>{{group.newTraceEmployee}} <br> <b> Name: </b>{{group.newTraceName}} <br> <b> Datum: </b>{{group.newTraceDate}}\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"showTerrasseEdelweissBool\">\n        <div *ngFor=\"let tableTerrasseEdelweiss of tablesTerrasseEdelweiss; let j = index;\">\n          <div dropdownToggle type=\"button\" class=\"t{{tableTerrasseEdelweiss.number}} table-item\" [ngStyle]=\"{'top': tableTerrasseEdelweiss.topValue + 'px', 'left': tableTerrasseEdelweiss.leftValue + 'px', 'background-color': + tableTerrasseEdelweiss.bgColor, 'height': + tableTerrasseEdelweiss.height + 'px', 'width': + tableTerrasseEdelweiss.width + 'px', 'border': + tableTerrasseEdelweiss.border, 'border-radius': + tableTerrasseEdelweiss.borderRadius}\" [style.border]=\"getStyle(tablesTerrasseEdelweiss[j].groups)\" dropdown>\n            <div *ngIf=\"tablesTerrasseEdelweiss[j] !== tablesTerrasseEdelweiss[j+1]\">\n              <p><b>{{tableTerrasseEdelweiss.number}} <br>{{erwTerrasseEdelweiss[j]}}/{{kiTerrasseEdelweiss[j]}}</b></p>\n            </div>\n            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n              <div dropdownToggle type=\"button\" style=\"color: white; padding: 10px;\" (mouseenter)=\"mouseEnterMoveTableButton()\"  (mouseleave)=\"mouseLeaveMoveTableButton()\" [ngStyle]=\"{'background-color': '#' + buttonMoveTable}\" (click)=\"none($event)\" class=\"dropdownMoveTable\" dropdown><b>Tisch verschieben</b>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\" style=\"max-height: 240px; margin: 0px;  padding: 0px; overflow: auto\">\n                  <li class=\"dropdown-item\" (click)=\"addTable(tableTerrasseEdelweiss, j)\" style=\"color: black; padding: 10px;\" (mouseenter)=\"mouseEnterHinzufuegenButton()\"  (mouseleave)=\"mouseLeaveHinzufuegenButton()\" [ngStyle]=\"{'background-color': '#' + buttonHinzufuegen}\" ><b>Tisch hinzufügen</b></li>\n                  <li class=\"divider dropdown-divider\" style=\"padding: 0 0 0 0; margin: 0; \"></li>\n                  <li class=\"dropdown-item\" (click)=\"removeTable(tableTerrasseEdelweiss, j)\" (mouseenter)=\"mouseEnterEntfernenButton()\"  (mouseleave)=\"mouseLeaveEntfernenButton()\" [ngStyle]=\"{'background-color': '#' + buttonEntfernen}\" style=\"color: black; padding: 10px\"><b>Tisch entfernen</b></li>\n                </div>\n              </div>\n              <li class=\"divider dropdown-divider\" style=\"padding: 0 0 0 0; margin: 0;\"></li>\n              <div dropdownToggle type=\"button\" (click)=\"none($event)\" style=\"padding: 10px; \" (mouseenter)=\"mouseEnterInfoButton()\"  (mouseleave)=\"mouseLeaveInfoButton()\" [ngStyle]=\"{'background-color': '#' + buttonInfo}\" class=\"dropdownShowinfo\"  class=\"dropdownShowinfo\" dropdown><b>Infos anzeigen</b>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\" style=\"max-height: 240px; padding: 10px; overflow: auto\">\n                  <div *ngFor=\"let group of tableTerrasseEdelweiss.groups\">\n                    <div *ngIf=\"group\">\n                      <div *ngIf=\"group.nameValue\">\n                        <div class=\"dropdown-item\" [style.border]=\"getStyleTrace(group.traceValue)\"><b>Name:</b> {{group.nameValue}}<br><b>Nation:</b> {{group.nationValue}}<br><b>Sprache:</b> {{group.spracheValue}}<br><b>Zimmer Nummer: </b>{{group.zimmernummerValue}}<br><b>Preistyp: </b>{{group.preistypValue}}<br><b>Anreise: </b>{{group.anreiseValue}}<br><b>Abreise:</b> {{group.abreiseValue}}<br><b>Personen Anzahl:</b>{{group.personenAnzahlValue}}<br><b>Kategorie: </b>{{group.kategorieValue}}<br><b>Reisebüro: </b>{{group.reisebueroValue}}<br><b>Notiz1:</b> {{group.notiz1Value}}<br><b>Notiz2:</b> {{group.notiz2Value}}<br><b>Bemerkung:</b> {{group.bemerkungValue}}<br><b>Trace:</b> {{group.traceValue}}</div>\n                        <li class=\"divider dropdown-divider\" style=\"padding: 0 0 0 0\"></li>\n                      </div>\n                      <div *ngIf=\"group.newTraceText\">\n                        <div class=\"dropdown-item\"  style=\"background-color: #FFFFFF; border: solid 3px red\">\n                          <b> Zimmernummer: </b>{{group.newTraceRoomNumber}}<br> <b> Neuer Trace: </b>{{group.newTraceText}} <br> <b> Tischnummer: </b>{{group.newTraceTableNumber}} <br> <b> Mitarbeiter: </b>{{group.newTraceEmployee}} <br> <b> Name: </b>{{group.newTraceName}} <br> <b> Datum: </b>{{group.newTraceDate}}\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"showAlleBool\">\n        <br>\n        <br>\n        <br>\n        <h1 style=\"color: white; margin-top: 200px\">Perfekt um eine Suche zu starten ;-)</h1>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/tableplan/tableplan.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var tischplan_service_1 = __webpack_require__("../../../../../src/app/services/tischplan.service.ts");
var TableplanComponent = (function () {
    function TableplanComponent(tischplanService) {
        this.tischplanService = tischplanService;
        this.movedBerglerStubeHubertusStube = new core_1.EventEmitter();
        this.movedBauernstube = new core_1.EventEmitter();
        this.movedWaeldlerStubeKristallStube = new core_1.EventEmitter();
        this.movedEdelweissKaminStube = new core_1.EventEmitter();
        this.movedTeestubeTeelounge = new core_1.EventEmitter();
        this.movedTerasse = new core_1.EventEmitter();
        this.movedTerrasseEdelweiss = new core_1.EventEmitter();
        this.changeBgColorIfAnreise = new core_1.EventEmitter();
        this.exportKiTeestubeTeelounge = new core_1.EventEmitter();
        this.exportErwTeestubeTeelounge = new core_1.EventEmitter();
        this.exportKiWaeldlerStubeKristallStube = new core_1.EventEmitter();
        this.exportErwWaeldlerStubeKristallStube = new core_1.EventEmitter();
        this.exportKiBerglerStubeHubertusStube = new core_1.EventEmitter();
        this.exportErwBerglerStubeHubertusStube = new core_1.EventEmitter();
        this.exportKiEdelweiss = new core_1.EventEmitter();
        this.exportErwEdelweiss = new core_1.EventEmitter();
        this.exportKiBauernstube = new core_1.EventEmitter();
        this.exportErwBauernstube = new core_1.EventEmitter();
        this.exportKiTerasse = new core_1.EventEmitter();
        this.exportKiTerrasseEdelweiss = new core_1.EventEmitter();
        this.exportErwTerasse = new core_1.EventEmitter();
        this.exportErwTerrasseEdelweiss = new core_1.EventEmitter();
        this.erwBauernstube = [];
        this.kiBauernstube = [];
        this.erwEdelweiss = [];
        this.kiEdelweiss = [];
        this.erwWaeldlerStubeKristallStube = [];
        this.kiWaeldlerStubeKristallStube = [];
        this.erwBerglerStubeHubertusStube = [];
        this.kiBerglerStubeHubertusStube = [];
        this.erwTeestubeTeelounge = [];
        this.kiTeestubeTeelounge = [];
        this.erwTerasse = [];
        this.kiTerasse = [];
        this.erwTerrasseEdelweiss = [];
        this.kiTerrasseEdelweiss = [];
        this.buttonMoveTable = "ff0000";
        this.buttonInfo = "ffffff";
        this.buttonHinzufuegen = "ffffff";
        this.buttonEntfernen = "ffffff";
        this.trace = false;
    }
    TableplanComponent.prototype.ngAfterViewChecked = function () {
    };
    TableplanComponent.prototype.addTable = function (table, j) {
        var _this = this;
        console.log("moveTable clicked");
        console.log('table :' + table.number + 'j' + j);
        this.tischplanService.addTable(table).subscribe(function (response) {
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
            else if (response[0].tables[j].department === "terasse") {
                _this.movedTerasse.emit(response[0].tables);
            }
            else if (response[0].tables[j].department === "terreasseEdelweiss") {
                _this.movedTerrasseEdelweiss.emit(response[0].tables);
            }
            _this.changeBgColorIfAnreise.emit();
        });
    };
    TableplanComponent.prototype.removeTable = function (table, j) {
        var _this = this;
        console.log("moveTable clicked");
        console.log('table :' + table.number + 'j' + j);
        this.tischplanService.removeTable(table).subscribe(function (response) {
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
            else if (response[0].tables[j].department === "terasse") {
                _this.movedTerasse.emit(response[0].tables);
            }
            else if (response[0].tables[j].department === "terasse") {
                _this.movedTerrasseEdelweiss.emit(response[0].tables);
            }
            _this.changeBgColorIfAnreise.emit();
        });
    };
    TableplanComponent.prototype.getStyle = function (a) {
        //console.log("a");
        //console.log(a);
        if (typeof a == null || typeof a === "undefined") {
            return "solid 3px rgb(243, 239, 228)";
        }
        else {
            for (var b = 0; b < a.length; b++) {
                //console.log("LOOOOOOOOOOOOOOP");
                //console.log(a[b].traceValue);
                if (typeof a[b] != null) {
                    if (a[b].traceValue != "-" || a[b].newTraceText) {
                        this.trace = true;
                    }
                }
            }
            if (this.trace) {
                this.trace = false;
                return "solid 3px red";
            }
            else {
                return "solid 3px rgb(243, 239, 228)";
            }
        }
    };
    TableplanComponent.prototype.none = function (event) {
        event.stopPropagation();
    };
    TableplanComponent.prototype.mouseEnterMoveTableButton = function () {
        console.log("mouse enter : ");
        if (this.buttonMoveTable === "ff0000") {
            console.log('mouse enter1 :');
            this.buttonMoveTable = "bc0000";
        }
    };
    TableplanComponent.prototype.mouseLeaveMoveTableButton = function () {
        if (this.buttonMoveTable === "bc0000") {
            console.log('mouse leave1 :');
            this.buttonMoveTable = "ff0000";
        }
    };
    TableplanComponent.prototype.mouseEnterInfoButton = function () {
        console.log("mouse enter : ");
        if (this.buttonInfo === "ffffff") {
            console.log('mouse enter1 :');
            this.buttonInfo = "cfcfcf";
        }
    };
    TableplanComponent.prototype.mouseLeaveInfoButton = function () {
        if (this.buttonInfo === "cfcfcf") {
            console.log('mouse leave1 :');
            this.buttonInfo = "ffffff";
        }
    };
    TableplanComponent.prototype.mouseEnterHinzufuegenButton = function () {
        console.log("mouse enter : ");
        if (this.buttonHinzufuegen === "ffffff") {
            console.log('mouse enter1 :');
            this.buttonHinzufuegen = "cfcfcf";
        }
    };
    TableplanComponent.prototype.mouseLeaveHinzufuegenButton = function () {
        if (this.buttonHinzufuegen === "cfcfcf") {
            console.log('mouse leave1 :');
            this.buttonHinzufuegen = "ffffff";
        }
    };
    TableplanComponent.prototype.mouseEnterEntfernenButton = function () {
        console.log("mouse enter : ");
        if (this.buttonEntfernen === "ffffff") {
            console.log('mouse enter1 :');
            this.buttonEntfernen = "cfcfcf";
        }
    };
    TableplanComponent.prototype.mouseLeaveEntfernenButton = function () {
        if (this.buttonEntfernen === "cfcfcf") {
            console.log('mouse leave1 :');
            this.buttonEntfernen = "ffffff";
        }
    };
    TableplanComponent.prototype.getStyleTrace = function (j) {
        if (j != "-") {
            return "solid 3px red";
        }
        else {
            return "";
        }
    };
    TableplanComponent.prototype.sumUpPersonenAnzahl = function () {
        console.log("sumUpPersonenAnzahl called");
        if (this.tablesTeestubeTeelounge) {
            for (var p = 0; p < this.tablesTeestubeTeelounge.length; p++) {
                this.erwTeestubeTeelounge[p] = 0;
                this.kiTeestubeTeelounge[p] = 0;
                if (this.tablesTeestubeTeelounge[p].groups) {
                    for (var g = 0; g < this.tablesTeestubeTeelounge[p].groups.length; g++) {
                        if (this.tablesTeestubeTeelounge[p].groups[g].personenAnzahlValue) {
                            var erwKi = this.tablesTeestubeTeelounge[p].groups[g].personenAnzahlValue.match(/\d+/g);
                            if (erwKi != null) {
                                //console.log(erwKi);
                                this.erwTeestubeTeelounge[p] = this.erwTeestubeTeelounge[p] + Number(erwKi[0]);
                                //console.log(this.erw[p]);
                            }
                            if (erwKi != null) {
                                //console.log(erwKi);
                                this.kiTeestubeTeelounge[p] = this.kiTeestubeTeelounge[p] + Number(erwKi[1]);
                                //console.log(this.ki[p]);
                            }
                        }
                    }
                }
            }
        }
        if (this.tablesEdelweissKaminStube) {
            for (var p = 0; p < this.tablesEdelweissKaminStube.length; p++) {
                this.erwEdelweiss[p] = 0;
                this.kiEdelweiss[p] = 0;
                if (this.tablesEdelweissKaminStube[p].groups) {
                    for (var g = 0; g < this.tablesEdelweissKaminStube[p].groups.length; g++) {
                        if (this.tablesEdelweissKaminStube[p].groups[g].personenAnzahlValue) {
                            var erwKi = this.tablesEdelweissKaminStube[p].groups[g].personenAnzahlValue.match(/\d+/g);
                            if (erwKi != null) {
                                //console.log(erwKi);
                                this.erwEdelweiss[p] = this.erwEdelweiss[p] + Number(erwKi[0]);
                                //console.log(this.erw[p]);
                            }
                            if (erwKi != null) {
                                //console.log(erwKi);
                                this.kiEdelweiss[p] = this.kiEdelweiss[p] + Number(erwKi[1]);
                                //console.log(this.ki[p]);
                            }
                        }
                    }
                }
            }
        }
        if (this.tablesBauernstube) {
            for (var p = 0; p < this.tablesBauernstube.length; p++) {
                this.erwBauernstube[p] = 0;
                this.kiBauernstube[p] = 0;
                if (this.tablesBauernstube[p].groups) {
                    for (var g = 0; g < this.tablesBauernstube[p].groups.length; g++) {
                        if (this.tablesBauernstube[p].groups[g].personenAnzahlValue) {
                            var erwKi = this.tablesBauernstube[p].groups[g].personenAnzahlValue.match(/\d+/g);
                            if (erwKi != null) {
                                //console.log(erwKi);
                                this.erwBauernstube[p] = this.erwBauernstube[p] + Number(erwKi[0]);
                                //console.log(this.erw[p]);
                            }
                            if (erwKi != null) {
                                //console.log(erwKi);
                                this.kiBauernstube[p] = this.kiBauernstube[p] + Number(erwKi[1]);
                                //console.log(this.ki[p]);
                            }
                        }
                    }
                }
            }
        }
        if (this.tablesBerglerStubeHubertusStube) {
            for (var p = 0; p < this.tablesBerglerStubeHubertusStube.length; p++) {
                this.erwBerglerStubeHubertusStube[p] = 0;
                this.kiBerglerStubeHubertusStube[p] = 0;
                if (this.tablesBerglerStubeHubertusStube[p].groups) {
                    for (var g = 0; g < this.tablesBerglerStubeHubertusStube[p].groups.length; g++) {
                        if (this.tablesBerglerStubeHubertusStube[p].groups[g].personenAnzahlValue) {
                            var erwKi = this.tablesBerglerStubeHubertusStube[p].groups[g].personenAnzahlValue.match(/\d+/g);
                            if (erwKi != null) {
                                //console.log(erwKi);
                                this.erwBerglerStubeHubertusStube[p] = this.erwBerglerStubeHubertusStube[p] + Number(erwKi[0]);
                                //console.log(this.erw[p]);
                            }
                            if (erwKi != null) {
                                //console.log(erwKi);
                                this.kiBerglerStubeHubertusStube[p] = this.kiBerglerStubeHubertusStube[p] + Number(erwKi[1]);
                                //console.log(this.ki[p]);
                            }
                        }
                    }
                }
            }
        }
        if (this.tablesWaeldlerStubeKristallStube) {
            for (var p = 0; p < this.tablesWaeldlerStubeKristallStube.length; p++) {
                this.erwWaeldlerStubeKristallStube[p] = 0;
                this.kiWaeldlerStubeKristallStube[p] = 0;
                if (this.tablesWaeldlerStubeKristallStube[p].groups) {
                    for (var g = 0; g < this.tablesWaeldlerStubeKristallStube[p].groups.length; g++) {
                        if (this.tablesWaeldlerStubeKristallStube[p].groups[g].personenAnzahlValue) {
                            var erwKi = this.tablesWaeldlerStubeKristallStube[p].groups[g].personenAnzahlValue.match(/\d+/g);
                            if (erwKi != null) {
                                //console.log(erwKi);
                                this.erwWaeldlerStubeKristallStube[p] = this.erwWaeldlerStubeKristallStube[p] + Number(erwKi[0]);
                                //console.log(this.erw[p]);
                            }
                            if (erwKi != null) {
                                //console.log(erwKi);
                                this.kiWaeldlerStubeKristallStube[p] = this.kiWaeldlerStubeKristallStube[p] + Number(erwKi[1]);
                                //console.log(this.ki[p]);
                            }
                        }
                    }
                }
            }
        }
        if (this.tablesTerasse) {
            for (var p = 0; p < this.tablesTerasse.length; p++) {
                this.erwTerasse[p] = 0;
                this.kiTerasse[p] = 0;
                if (this.tablesTerasse[p].groups) {
                    for (var g = 0; g < this.tablesTerasse[p].groups.length; g++) {
                        if (this.tablesTerasse[p].groups[g].personenAnzahlValue) {
                            var erwKi = this.tablesTerasse[p].groups[g].personenAnzahlValue.match(/\d+/g);
                            if (erwKi != null) {
                                //console.log(erwKi);
                                this.erwTerasse[p] = this.erwTerasse[p] + Number(erwKi[0]);
                                //console.log(this.erw[p]);
                            }
                            if (erwKi != null) {
                                //console.log(erwKi);
                                this.kiTerasse[p] = this.kiTerasse[p] + Number(erwKi[1]);
                                //console.log(this.ki[p]);
                            }
                        }
                    }
                }
            }
        }
        if (this.tablesTerrasseEdelweiss) {
            for (var p = 0; p < this.tablesTerrasseEdelweiss.length; p++) {
                this.erwTerrasseEdelweiss[p] = 0;
                this.kiTerrasseEdelweiss[p] = 0;
                if (this.tablesTerrasseEdelweiss[p].groups) {
                    for (var g = 0; g < this.tablesTerrasseEdelweiss[p].groups.length; g++) {
                        if (this.tablesTerrasseEdelweiss[p].groups[g].personenAnzahlValue) {
                            var erwKi = this.tablesTerrasseEdelweiss[p].groups[g].personenAnzahlValue.match(/\d+/g);
                            if (erwKi != null) {
                                //console.log(erwKi);
                                this.erwTerrasseEdelweiss[p] = this.erwTerrasseEdelweiss[p] + Number(erwKi[0]);
                                //console.log(this.erw[p]);
                            }
                            if (erwKi != null) {
                                //console.log(erwKi);
                                this.kiTerrasseEdelweiss[p] = this.kiTerrasseEdelweiss[p] + Number(erwKi[1]);
                                //console.log(this.ki[p]);
                            }
                        }
                    }
                }
            }
        }
        this.exportKiTeestubeTeelounge.emit(this.kiTeestubeTeelounge);
        this.exportErwTeestubeTeelounge.emit(this.erwTeestubeTeelounge);
        this.exportKiWaeldlerStubeKristallStube.emit(this.kiWaeldlerStubeKristallStube);
        this.exportErwWaeldlerStubeKristallStube.emit(this.erwWaeldlerStubeKristallStube);
        this.exportKiBerglerStubeHubertusStube.emit(this.kiBerglerStubeHubertusStube);
        this.exportErwBerglerStubeHubertusStube.emit(this.erwBerglerStubeHubertusStube);
        this.exportKiEdelweiss.emit(this.kiEdelweiss);
        this.exportErwEdelweiss.emit(this.erwEdelweiss);
        this.exportKiBauernstube.emit(this.kiBauernstube);
        this.exportErwBauernstube.emit(this.erwBauernstube);
        this.exportErwTerasse.emit(this.erwTerasse);
        this.exportKiTerasse.emit(this.kiTerasse);
        this.exportErwTerrasseEdelweiss.emit(this.erwTerrasseEdelweiss);
        this.exportKiTerrasseEdelweiss.emit(this.kiTerrasseEdelweiss);
    };
    return TableplanComponent;
}());
__decorate([
    core_1.Input('tables'),
    __metadata("design:type", Array)
], TableplanComponent.prototype, "tables", void 0);
__decorate([
    core_1.Input('dateGeneratedListe'),
    __metadata("design:type", String)
], TableplanComponent.prototype, "dateGeneratedListe", void 0);
__decorate([
    core_1.Input('tablesBauernstube'),
    __metadata("design:type", Array)
], TableplanComponent.prototype, "tablesBauernstube", void 0);
__decorate([
    core_1.Input('tablesTerasse'),
    __metadata("design:type", Array)
], TableplanComponent.prototype, "tablesTerasse", void 0);
__decorate([
    core_1.Input('tablesTerrasseEdelweiss'),
    __metadata("design:type", Array)
], TableplanComponent.prototype, "tablesTerrasseEdelweiss", void 0);
__decorate([
    core_1.Input('showBauernStubnBool'),
    __metadata("design:type", Boolean)
], TableplanComponent.prototype, "showBauernStubnBool", void 0);
__decorate([
    core_1.Input('tablesEdelweissKaminStube'),
    __metadata("design:type", Array)
], TableplanComponent.prototype, "tablesEdelweissKaminStube", void 0);
__decorate([
    core_1.Input('showEdelweissBool'),
    __metadata("design:type", Boolean)
], TableplanComponent.prototype, "showEdelweissBool", void 0);
__decorate([
    core_1.Input('tablesBerglerStubeHubertusStube'),
    __metadata("design:type", Array)
], TableplanComponent.prototype, "tablesBerglerStubeHubertusStube", void 0);
__decorate([
    core_1.Input('showBerglerBool'),
    __metadata("design:type", Boolean)
], TableplanComponent.prototype, "showBerglerBool", void 0);
__decorate([
    core_1.Input('tablesTeestubeTeelounge'),
    __metadata("design:type", Array)
], TableplanComponent.prototype, "tablesTeestubeTeelounge", void 0);
__decorate([
    core_1.Input('showTeeStubeBool'),
    __metadata("design:type", Boolean)
], TableplanComponent.prototype, "showTeeStubeBool", void 0);
__decorate([
    core_1.Input('tablesWaeldlerStubeKristallStube'),
    __metadata("design:type", Array)
], TableplanComponent.prototype, "tablesWaeldlerStubeKristallStube", void 0);
__decorate([
    core_1.Input('showWaeldlerBool'),
    __metadata("design:type", Boolean)
], TableplanComponent.prototype, "showWaeldlerBool", void 0);
__decorate([
    core_1.Input('showTerasseBool'),
    __metadata("design:type", Boolean)
], TableplanComponent.prototype, "showTerasseBool", void 0);
__decorate([
    core_1.Input('showTerrasseEdelweissBool'),
    __metadata("design:type", Boolean)
], TableplanComponent.prototype, "showTerrasseEdelweissBool", void 0);
__decorate([
    core_1.Input('showAlleBool'),
    __metadata("design:type", Boolean)
], TableplanComponent.prototype, "showAlleBool", void 0);
__decorate([
    core_1.Input('showTablePlanBool'),
    __metadata("design:type", Boolean)
], TableplanComponent.prototype, "showTablePlanBool", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], TableplanComponent.prototype, "movedBerglerStubeHubertusStube", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_b = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _b || Object)
], TableplanComponent.prototype, "movedBauernstube", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_c = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _c || Object)
], TableplanComponent.prototype, "movedWaeldlerStubeKristallStube", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_d = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _d || Object)
], TableplanComponent.prototype, "movedEdelweissKaminStube", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_e = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _e || Object)
], TableplanComponent.prototype, "movedTeestubeTeelounge", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_f = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _f || Object)
], TableplanComponent.prototype, "movedTerasse", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_g = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _g || Object)
], TableplanComponent.prototype, "movedTerrasseEdelweiss", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_h = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _h || Object)
], TableplanComponent.prototype, "changeBgColorIfAnreise", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_j = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _j || Object)
], TableplanComponent.prototype, "exportKiTeestubeTeelounge", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_k = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _k || Object)
], TableplanComponent.prototype, "exportErwTeestubeTeelounge", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_l = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _l || Object)
], TableplanComponent.prototype, "exportKiWaeldlerStubeKristallStube", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_m = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _m || Object)
], TableplanComponent.prototype, "exportErwWaeldlerStubeKristallStube", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_o = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _o || Object)
], TableplanComponent.prototype, "exportKiBerglerStubeHubertusStube", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_p = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _p || Object)
], TableplanComponent.prototype, "exportErwBerglerStubeHubertusStube", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_q = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _q || Object)
], TableplanComponent.prototype, "exportKiEdelweiss", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_r = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _r || Object)
], TableplanComponent.prototype, "exportErwEdelweiss", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_s = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _s || Object)
], TableplanComponent.prototype, "exportKiBauernstube", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_t = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _t || Object)
], TableplanComponent.prototype, "exportErwBauernstube", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_u = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _u || Object)
], TableplanComponent.prototype, "exportKiTerasse", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_v = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _v || Object)
], TableplanComponent.prototype, "exportKiTerrasseEdelweiss", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_w = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _w || Object)
], TableplanComponent.prototype, "exportErwTerasse", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_x = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _x || Object)
], TableplanComponent.prototype, "exportErwTerrasseEdelweiss", void 0);
TableplanComponent = __decorate([
    core_1.Component({
        selector: 'app-tableplan',
        template: __webpack_require__("../../../../../src/app/components/digitalerTischplan/tableplan/tableplan.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digitalerTischplan/tischplan.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_y = typeof tischplan_service_1.TischplanService !== "undefined" && tischplan_service_1.TischplanService) === "function" && _y || Object])
], TableplanComponent);
exports.TableplanComponent = TableplanComponent;
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y;
//# sourceMappingURL=tableplan.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/tischplan.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html {\n  background-color: #0a7a74;\n}\n\nhtml, body {\n  padding: 0;\n  margin: 0;\n  height: 100vh;\n  background-color: #0a7a74;\n}\n\nspan {\n  color: #9d9d9d;\n}\n\n.container-fluid {\n  padding: 0 0 10px 0;\n  margin: 0;\n  height: 100vh;\n  max-width: 100vw;\n  background-color: #0a7a74;\n}\n\n.row {\n  max-width: 100vw;\n  min-height: 100vh;\n  padding: 0 15px 15px 15px;\n  background-color: #0a7a74;\n  margin: 0 0 0 0;\n}\n\n.line{\n  width: 100%;\n  height: 20px;\n  border-bottom: solid 10px #0a7a74;\n  position: absolute;\n  right: 0px;\n  top: 115px;\n}\n\n.line1{\n  width: 100%;\n  height: 20px;\n  border-bottom: solid 10px #0a7a74;\n  position: absolute;\n  right: 0px;\n  top: 95px;\n}\n\n.printTwo {\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n  background-color: #0a7a74;\n  max-height: calc(100vh - 240px);\n}\n\n.row .inner-table {\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n  max-height: calc(100vh - 120px);\n}\n\n.row .table-col {\n  min-height: calc(100vh - 70px);\n  max-height: calc(100vh - 70px);\n  background-color: #f3efe4;\n  padding: 10px 10px 20px 10px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  border-radius: 3px;\n  width: calc(100vw - 20px);\n  max-width: 100%;\n}\n\n.print-col {\n  padding: 0;\n  min-height: auto;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  z-index: 2;\n}\n\n.row .upload-col {\n  background-color: #f3efe4;\n  padding: 10px 10px 20px 10px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  min-height: calc(100vh - 70px);\n  max-height: calc(100vh - 70px);\n  border-radius: 3px;\n  z-index: 1;\n\n}\n\n.section3 {\n  display: none;\n}\n\n.section2 {\n  display: none;\n}\n\n.row1 {\n  height: calc((100vh - 195px) / 3);\n  overflow: auto;\n}\n\n.row .upload-col, .printToCart2, .dropdown-toggle, .printToCart1, .printToCart3, .Tisch, .anleitung {\n  display: none;\n}\n\n.cards-container {\n  margin: 10px 0px 10px 0px;\n  padding: 10px 10px 40px 10px;\n}\n\n.row .container-fluid  .table-col .inner-table .row3 .wrapper .cards-container {\n  border-radius: 3px;\n  border: solid 1px grey;\n  padding: 10px 10px 15px 10px;\n\n}\n\n#containerRestaurant, #containerPanorama, #containerWintergarten, #containerSonnbergZirbn, #containerTerasse, #containerTerrasseEdelweiss, #containerBauernstube {\n  border-radius: 3px;\n  border: solid 1px grey;\n}\n\n.row .container-fluid .col-md-4 .row1 {\n  overflow: auto;\n  margin: 0 0 0 0;\n  display: inline-block;\n  width: 105%;\n  height: 232.5px;\n  padding-top: 20px;\n}\n\n.row .container-fluid .col-md-4 .row1 .wrapper {\n  overflow: auto;\n  margin: 0 0 0 0;\n  display: inline-block;\n  max-width: 100%;\n}\n\n.row .container-fluid .col-md-4 .row1 .wrapper .container {\n  overflow: auto;\n  margin: 20px 40px 20px 0;\n  display: inline-block;\n  max-width: 100%;\n  border-radius: 3px;\n}\n\n.row .container-fluid .col-md-4 .col-xs-12 .row1 {\n  overflow: auto;\n  margin: 0 auto;\n  display: inline-block;\n  width: 100%;\n  height: 800px;\n  padding-top: 20px;\n}\n\n.row .container-fluid h3 {\n  -ms-flex-line-pack: center;\n      align-content: center;\n  margin: 0 auto;\n  display: inline-block;\n  color: #0a7a74;\n  position: relative;\n  text-align: center;\n}\n\n.row .container-fluid .col-md-4 h3 {\n  margin: 0 auto;\n  color: #0a7a74;\n  position: relative;\n}\n\nbody html .row .container-fluid .upload-col .outer-cards h3 {\n  margin-top: 0px;\n  margin-bottom: 0px;\n  color: #0a7a74;\n}\n\n.row1 .col {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n\n.row1 .col:nth-child(1) {\n  -webkit-box-ordinal-group: 2;\n      -ms-flex-order: 1;\n          order: 1;\n}\n\n.row1 .col:nth-child(2) {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n}\n\n.row1 .col:nth-child(3) {\n  -webkit-box-ordinal-group: 3;\n      -ms-flex-order: 2;\n          order: 2;\n}\n\n.row .col-md-4 .row2 {\n  padding-bottom: 10px;\n  position: relative;\n  min-height: 100%;\n  border-bottom: 1px solid red;\n}\n\n.card {\n  background: rgb(255,255,255); /* Fall-back for browsers that don support rgba */\n  background: rgba(255,255,255, 1);\n  border-radius: 3px;\n  border: solid 1px grey;\n  padding: 10px 10px 15px 10px;\n}\n\n.row .container-fluid .col-md-4 .row1 .wrapper .container .card p {\n  /*padding:10px 10px 10px 10px;*/\n  max-width: 100%;\n}\n\n.row .container-fluid .col-md-4 .wrapper .container .card p {\n  /*padding:10px 10px 10px 10px;*/\n  max-width: 100%;\n}\n\n.row .container-fluid .col-md-4 .row3 .row1 p {\n  /*padding: 10px 10px 10px 10px;*/\n  background: rgb(255,255,255); /* Fall-back for browsers that don support rgba */\n  background: rgba(255,255,255, 1);\n  max-width: 100%;\n}\n\n.row .container-fluid .col-md-4 .col-xs-12 .row1 .wrapper .container .card p {\n  /*padding: 10px 10px 10px 10px;*/\n  max-width: 100%;\n}\n\n.row .container-fluid .col-md-6 .row {\n  background-color: #eaf3f3;\n  padding: 20px 10px 20px 10px;\n  height: 100%;\n}\n\n.table-item {\n  position: absolute;\n}\n\n.btn-send {\n  display: none;\n}\n\n.csv {\n  margin-bottom: 30px;\n}\n\n.btn-default {\n  display: none;\n}\n\n.btn-primary {\n  background-color: #0a7a74;\n  color: #FFFFFF;\n  margin: 10px 20px 20px 0px;\n  border: none;\n}\n\n.btn-group-departments {\n  margin: 0px 10px 5px 0px;\n}\n\n.btn-primary:hover {\n  background-color: #1f5452;\n  color: #FFFFFF;\n  margin-left: 20px;\n  border: none;\n}\n\n.btn-primary.active, .btn-primary:active, .open>.dropdown-toggle.btn-primary {\n  background-color: #1f5452;\n  color: #FFFFFF;\n}\n\n.btn-primary.focus, .btn-primary:focus {\n  background-color: #0a7a74;\n  color: #FFFFFF;\n}\n\n@media (min-width: 701px) {\n\n  .row {\n    max-width: 100vw;\n    max-height: calc(100vh - 60px);\n    padding: 0 15px 15px 15px;\n    background-color: #0a7a74;\n  }\n\n  .row .table-col {\n    max-height: calc(100vh - 70px);\n    min-height: calc(100vh - 70px);\n    background-color: #f3efe4;\n    padding: 20px 10px 20px 10px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    max-width: calc(100vw - 20px);\n    width: 30%;\n    margin: 60px 0 0 10px;\n  }\n\n  .btn-group-departments {\n    margin: 0 10px 5px 20px;\n  }\n\n  .printTwo {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    background-color: #0a7a74;\n    height: 100vh;\n    top: -100px;\n    z-index: -1;\n    min-height: calc(100vh - 60px);\n    max-height: calc(100vh - 60px);\n  }\n\n  .row .inner-table {\n    max-height: calc(100vh - 121px);\n    overflow: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n\n  .row .upload-col {\n    background-color: #f3efe4;\n    padding: 20px 10px 20px 10px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    min-height:  calc(100vh - 10px);\n    max-height: calc(100vh - 10px);\n  }\n\n  .print-col {\n    margin-left: 15px;\n    width: 65%;\n    max-height: calc(100vh - 60px);\n  }\n}\n\n@media (min-width: 1200px) {\n  .btn-default {\n    display: inline-block;\n  }\n\n  .btn-send {\n    display: block;\n  }\n\n  .printTwo {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    background-color: #0a7a74;\n    min-height: calc(100vh - 60px);\n    max-height: calc(100vh - 60px);\n  }\n\n  .row .table-col {\n    min-height: calc(100vh - 70px);\n    max-height: calc(100vh - 70px);\n    background-color: #f3efe4;\n    padding: 20px 10px 20px 10px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 24%;\n    margin: 60px 0 0 10px;\n\n  }\n\n  .row .upload-col, .printToCart2, .dropdown-toggle, .printToCart1, .printToCart3, .Tisch, .anleitung {\n    display: block;\n  }\n\n  .print-col {\n    width: 48%;\n    margin-left: 15px;\n    margin-top: 60px;\n    max-height: calc(100vh - 60px);\n  }\n\n  .row .upload-col {\n    background-color: #f3efe4;\n    padding: 20px 10px 20px 10px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    min-height: calc(100vh - 70px);\n    max-height: calc(100vh - 70px);\n    margin-top: 60px;\n  }\n\n  .row .inner-table {\n    max-height: calc(100vh - 125px);\n    overflow: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n}\n\n@media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none) {\n  .navbar-nav {\n    display: inline-block;\n  }\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/tischplan.component.html":
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n  <title>Dashboard</title>\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no\">\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\" crossorigin=\"anonymous\">\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n  <script src=\"node_modules/core-js/client/shim.min.js\"></script>\n  <script src=\"<your-libs-directory>/object-assign.min.js\"></script>\n\n</head>\n<body>\n<div id=\"charge-error\" class=\"alert alert-danger <% if ( !errMsg ) { %> hidden <% } %>\">\n  <%= errMsg  %>\n</div>\n<app-navigation [newInformationElements]=\"newInformationElements\"\n                [tablesOccupied]=\"tablesOccupied\"\n                (getTablesOccupied)=\"tablesOccupied = $event\"\n                (umsetzenExport)=\"umsetzenInfoVar = $event; umsetzen($event)\"\n                [tablesTempAbreise]=\"tablesTempAbreise\"\n                (abreisenExportExport)=\"abreiseTablePlusIndex = $event; abreisenRemoval($event)\"\n                (transformExport)=\"term = $event; transform($event)\"\n                (termExport)=\"term = $event\"\n                (reloadLists)=\"reloadLists($event)\"\n                (getTablesExport)=\"getTables($event)\">\n</app-navigation>\n<div class=\"row\">\n  <div class=\"container-fluid\">\n   <flash-messages></flash-messages>\n    <div class=\"col-xs-12 col-sm-8 col-lg-6 print-col\">\n      <app-departmentmenu\n        [buttonBgColor1]=\"buttonBgColor1\"\n        [buttonBgColor2]=\"buttonBgColor2\"\n        [buttonBgColor3]=\"buttonBgColor3\"\n        [buttonBgColor4]=\"buttonBgColor4\"\n        [buttonBgColor5]=\"buttonBgColor5\"\n        [buttonBgColor6]=\"buttonBgColor6\"\n        [buttonBgColor7]=\"buttonBgColor7\"\n        [buttonBgColor8]=\"buttonBgColor8\"\n        [fontColor1]=\"fontColor1\"\n        [fontColor2]=\"fontColor2\"\n        [fontColor3]=\"fontColor3\"\n        [fontColor4]=\"fontColor4\"\n        [fontColor5]=\"fontColor5\"\n        [fontColor6]=\"fontColor6\"\n        [fontColor7]=\"fontColor7\"\n        [fontColor8]=\"fontColor8\"\n        [showBauernStubnBool]=\"showBauernStubnBool\"\n        [showTerasseBool]=\"showTerasseBool\"\n        [showTerrasseEdelweissBool]=\"showTerrasseEdelweissBool\"\n        [showBerglerBool]=\"showBerglerBool\"\n        [showEdelweissBool]=\"showEdelweissBool\"\n        [showWaeldlerBool]=\"showWaeldlerBool\"\n        [showTeeStubeBool]=\"showTeeStubeBool\"\n        [showAlleBool]=\"showAlleBool\"\n        (showBauernStubnBoolChange)=\"showBauernStubnBool=$event\"\n        (showTerasseBoolChange)=\"showTerasseBool=$event\"\n        (showTerrasseEdelweissBoolChange)=\"showTerrasseEdelweissBool=$event\"\n        (showBerglerBoolChange)=\"showBerglerBool=$event\"\n        (showEdelweissBoolChange)=\"showEdelweissBool=$event\"\n        (showWaeldlerBoolChange)=\"showWaeldlerBool=$event\"\n        (showTeeStubeBoolChange)=\"showTeeStubeBool=$event\"\n        (showAlleBoolChange)=\"showAlleBool=$event\"\n        [buttonBgColorInfoForm]=\"buttonBgColorInfoForm\"\n        [buttonBgColorNotizForm]=\"buttonBgColorNotizForm\"\n        [fontColorInfoForm]=\"fontColorInfoForm\"\n        [fontColorNotizForm]=\"fontColorNotizForm\"\n        [showNotizFormBool]=\"showNotizFormBool\"\n        [showInfoFormBool]=\"showInfoFormBool\"\n        (showInfoFormBoolChange)=\"showInfoFormBool=$event\"\n        (showNotizFormBoolChange)=\"showNotizFormBool=$event\"\n        (showTablePlanBoolChange)=\"showTablePlanBool=$event\"\n        [showTablePlanBool]=\"showTablePlanBool\"\n        [buttonBgColorShowTablePlan]=\"buttonBgColorShowTablePlan\"\n        [fontColorShowTablePlan]=\"fontColorShowTablePlan\">\n      </app-departmentmenu><flash-messages></flash-messages>\n      <app-form [newInformationElements]=\"newInformationElements\"\n                [dateGenerated]=\"dateGenerated\"\n                [title]=\"title\"\n                [roomNumber]=\"roomNumber\"\n                [tableNumber]=\"tableNumber\"\n                [employee]=\"employee\"\n                [nameTraceInput]=\"nameTraceInput\"\n                [tablesBauernstube]=\"tablesBauernstube\"\n                [tablesTerasse]=\"tablesTerasse\"\n                [tablesTerrasseEdelweiss]=\"tablesTerrasseEdelweiss\"\n                [tablesBerglerStubeHubertusStube]=\"tablesBerglerStubeHubertusStube\"\n                [tablesEdelweissKaminStube]=\"tablesEdelweissKaminStube\"\n                [tablesTeestubeTeelounge]=\"tablesTeestubeTeelounge\"\n                [tablesWaeldlerStubeKristallStube]=\"tablesWaeldlerStubeKristallStube\"\n                [showNotizFormBool]=\"showNotizFormBool\"\n                [showInfoFormBool]=\"showInfoFormBool\"\n                [notizElements]=\"notizElements\"\n                (notizResponse)=\"notizElements=$event\"\n                [showBauernStubnBool]=\"showBauernStubnBool\"\n                [showTerasseBool]=\"showTerasseBool\"\n                [showTerrasseEdelweissBool]=\"showTerrasseEdelweissBool\"\n                [showBerglerBool]=\"showBerglerBool\"\n                [showEdelweissBool]=\"showEdelweissBool\"\n                [showWaeldlerBool]=\"showWaeldlerBool\"\n                [showTeeStubeBool]=\"showTeeStubeBool\"\n                [showAlleBool]=\"showAlleBool\"\n                (changeColorIfAnreiseExport)=\"changeBgColorIfAnreise($event)\">\n      </app-form>\n      <app-tableplan [tablesBauernstube]=\"tablesBauernstube\"\n                     [tablesTerasse]=\"tablesTerasse\"\n                     [tablesTerrasseEdelweiss]=\"tablesTerrasseEdelweiss\"\n                     [tablesBerglerStubeHubertusStube]=\"tablesBerglerStubeHubertusStube\"\n                     [tablesEdelweissKaminStube]=\"tablesEdelweissKaminStube\"\n                     [tablesTeestubeTeelounge]=\"tablesTeestubeTeelounge\"\n                     [tablesWaeldlerStubeKristallStube]=\"tablesWaeldlerStubeKristallStube\"\n                     [showBauernStubnBool]=\"showBauernStubnBool\"\n                     [showTerasseBool]=\"showTerasseBool\"\n                     [showTerrasseEdelweissBool]=\"showTerrasseEdelweissBool\"\n                     [showBerglerBool]=\"showBerglerBool\"\n                     [showEdelweissBool]=\"showEdelweissBool\"\n                     [showWaeldlerBool]=\"showWaeldlerBool\"\n                     [showTeeStubeBool]=\"showTeeStubeBool\"\n                     [showAlleBool]=\"showAlleBool\"\n                     (movedBauernstube)=\"tablesBauernstube = $event\"\n                     (movedTerasse)=\"tablesTerasse = $event\"\n                     (movedTerrasseEdelweiss)=\"tablesTerrasseEdelweiss = $event\"\n                     (movedBerglerStubeHubertusStube)=\"tablesBerglerStubeHubertusStube = $event\"\n                     (movedEdelweissKaminStube)=\"tablesEdelweissKaminStube = $event\"\n                     (movedTeestubeTeelounge)=\"tablesTeestubeTeelounge = $event\"\n                     (movedWaeldlerStubeKristallStube)=\"tablesWaeldlerStubeKristallStube = $event\"\n                     [showTablePlanBool]=\"showTablePlanBool\"\n                     (changeBgColorIfAnreise)=\"changeBgColorIfAnreise($event)\"\n                     (exportErwBerglerStubeHubertusStube)=\"erwBerglerStubeHubertusStube = $event\"\n                     (exportKiBerglerStubeHubertusStube)=\"kiBerglerStubeHubertusStube = $event\"\n                     (exportErwBauernstube)=\"erwBauernstube = $event\"\n                     (exportKiBauernstube)=\"kiBauernstube = $event\"\n                     (exportErwEdelweiss)=\"erwEdelweiss = $event\"\n                     (exportKiEdelweiss)=\"kiEdelweiss = $event\"\n                     (exportErwTerasse)=\"erwTerasse = $event\"\n                     (exportErwTerrasseEdelweiss)=\"erwTerrasseEdelweiss = $event\"\n                     (exportKiTerasse)=\"kiTerasse = $event\"\n                     (exportKiTerrasseEdelweiss)=\"kiTerrasseEdelweiss = $event\"\n                     (exportErwTeestubeTeelounge)=\"erwTeestubeTeelounge = $event\"\n                     (exportKiTeestubeTeelounge)=\"kiTeestubeTeelounge = $event\"\n                     (exportErwWaeldlerStubeKristallStube)=\"erwWaeldlerStubeKristallStube = $event\"\n                     (exportKiWaeldlerStubeKristallStube)=\"kiWaeldlerStubeKristallStube = $event\">\n      </app-tableplan>\n    </div>\n    <div class=\"col-xs-12 col-lg-3 upload-col\">\n      <div class=\"outer-cards\">\n        <app-im-haus-liste [imHausListeElemente]=\"imHausListeElemente\">\n        </app-im-haus-liste>\n      </div>\n    </div>\n\n    <div class=\"col-xs-12 col-sm-4 col-lg-3 table-col\">\n      <h3 >Tisch Übersicht</h3>\n        <div class=\"inner-table\" style=\"padding: 0px 0px 0px 0px;\">\n          <div class=\"row3\">\n            <div class='wrapper' id=\"wrapper\">\n              <app-departments  [tables]=\"tables\"\n                                [tablesBauernstube]=\"tablesBauernstube\"\n                                [tablesTerasse]=\"tablesTerasse\"\n                                [tablesTerrasseEdelweiss]=\"tablesTerrasseEdelweiss\"\n                                [tablesBerglerStubeHubertusStube]=\"tablesBerglerStubeHubertusStube\"\n                                [tablesEdelweissKaminStube]=\"tablesEdelweissKaminStube\"\n                                [tablesTeestubeTeelounge]=\"tablesTeestubeTeelounge\"\n                                [tablesWaeldlerStubeKristallStube]=\"tablesWaeldlerStubeKristallStube\"\n                                [showBauernStubnBool]=\"showBauernStubnBool\"\n                                [showTerasseBool]=\"showTerasseBool\"\n                                [showTerrasseEdelweissBool]=\"showTerrasseEdelweissBool\"\n                                [showBerglerBool]=\"showBerglerBool\"\n                                [showEdelweissBool]=\"showEdelweissBool\"\n                                [showWaeldlerBool]=\"showWaeldlerBool\"\n                                [showTeeStubeBool]=\"showTeeStubeBool\"\n                                (dispensedBauernstube)=\"tablesBauernstube=$event\"\n                                (dispensedTerasse)=\"tablesTerasse=$event\"\n                                (dispensedTerrasseEdelweiss)=\"tablesTerrasseEdelweiss=$event\"\n                                (dispensedBerglerStubeHubertusStube)=\"tablesBerglerStubeHubertusStube=$event\"\n                                (dispensedEdelweissKaminStube)=\"tablesEdelweissKaminStube=$event\"\n                                (dispensedTeestubeTeelounge)=\"tablesTeestubeTeelounge=$event\"\n                                (dispensedWaeldlerStubeKristallStube)=\"tablesWaeldlerStubeKristallStube=$event\"\n                                (infoAddedBauernstube)=\"tablesBauernstube=$event\"\n                                (infoAddedTerasse)=\"tablesTerasse=$event\"\n                                (infoAddedTerrasseEdelweiss)=\"tablesTerrasseEdelweiss=$event\"\n                                (infoAddedBerglerStubeHubertusStube)=\"tablesBerglerStubeHubertusStube=$event\"\n                                (infoAddedEdelweissKaminStube)=\"tablesEdelweissKaminStube=$event\"\n                                (infoAddedTeestubeTeelounge)=\"tablesTeestubeTeelounge=$event\"\n                                (infoAddedWaeldlerStubeKristallStube)=\"tablesWaeldlerStubeKristallStube=$event\"\n                                [term]=\"term\"\n                                [tablesTempAbreise]=\"tablesTempAbreise\"\n                                [showAlleBool]=\"showAlleBool\"\n                                (updateAzList)=\"updateAzList($event)\"\n                                (updateImHausListeElement)=\"updateImHausListeElement($event); table = $event;\">\n              </app-departments>\n            </div>\n          </div>\n        </div>\n    </div>\n  </div>\n</div>\n</body>\n<app-print  [tables]=\"tables\"\n            [dateGeneratedListe]=\"dateGeneratedListe\"\n            [tablesBauernstube]=\"tablesBauernstube\"\n            [tablesTerasse]=\"tablesTerasse\"\n            [tablesTerrasseEdelweiss]=\"tablesTerrasseEdelweiss\"\n            [tablesBerglerStubeHubertusStube]=\"tablesBerglerStubeHubertusStube\"\n            [tablesEdelweissKaminStube]=\"tablesEdelweissKaminStube\"\n            [tablesTeestubeTeelounge]=\"tablesTeestubeTeelounge\"\n            [tablesWaeldlerStubeKristallStube]=\"tablesWaeldlerStubeKristallStube\"\n            [showBauernStubnBool]=\"showBauernStubnBool\"\n            [showTerasseBool]=\"showTerasseBool\"\n            [showTerrasseEdelweissBool]=\"showTerrasseEdelweissBool\"\n            [showBerglerBool]=\"showBerglerBool\"\n            [showEdelweissBool]=\"showEdelweissBool\"\n            [showWaeldlerBool]=\"showWaeldlerBool\"\n            [showTeeStubeBool]=\"showTeeStubeBool\"\n            (getTablesOccupied)=\"tablesOccupied = $event\"\n            (getTablesforAzListe)=\"tables = $event\"\n            [erwBerglerStubeHubertusStube]=\"erwBerglerStubeHubertusStube\"\n            [kiBerglerStubeHubertusStube]=\"kiBerglerStubeHubertusStube\"\n            [erwBauernstube]=\"erwBauernstube\"\n            [kiBauernstube]=\"kiBauernstube\"\n            [erwTerasse]=\"erwTerasse\"\n            [kiTerasse]=\"kiTerasse\"\n            [erwTerrasseEdelweiss]=\"erwTerrasseEdelweiss\"\n            [kiTerrasseEdelweiss]=\"kiTerrasseEdelweiss\"\n            [erwEdelweiss]=\"erwEdelweiss\"\n            [kiEdelweiss]=\"kiEdelweiss\"\n            [erwTeestubeTeelounge]=\"erwTeestubeTeelounge\"\n            [kiTeestubeTeelounge]=\"kiTeestubeTeelounge\"\n            [erwWaeldlerStubeKristallStube]=\"erwWaeldlerStubeKristallStube\"\n            [kiWaeldlerStubeKristallStube]=\"kiWaeldlerStubeKristallStube\">\n</app-print>\n</html>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/tischplan.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var tischplan_service_1 = __webpack_require__("../../../../../src/app/services/tischplan.service.ts");
var ng2_dragula_1 = __webpack_require__("../../../../ng2-dragula/index.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
var angular2_flash_messages_1 = __webpack_require__("../../../../angular2-flash-messages/index.js");
var print_component_1 = __webpack_require__("../../../../../src/app/components/digitalerTischplan/print/print.component.ts");
var departmentmenu_component_1 = __webpack_require__("../../../../../src/app/components/digitalerTischplan/departmentmenu/departmentmenu.component.ts");
var form_component_1 = __webpack_require__("../../../../../src/app/components/digitalerTischplan/form/form.component.ts");
var im_haus_liste_component_1 = __webpack_require__("../../../../../src/app/components/digitalerTischplan/im-haus-liste/im-haus-liste.component.ts");
var navigation_component_1 = __webpack_require__("../../../../../src/app/components/digitalerTischplan/navigation/navigation.component.ts");
var tableplan_component_1 = __webpack_require__("../../../../../src/app/components/digitalerTischplan/tableplan/tableplan.component.ts");
var departments_component_1 = __webpack_require__("../../../../../src/app/components/digitalerTischplan/departments/departments.component.ts");
var TischplanComponent = (function () {
    function TischplanComponent(tischplanService, http, _flashMessagesService, dragulaService) {
        var _this = this;
        this.tischplanService = tischplanService;
        this.http = http;
        this._flashMessagesService = _flashMessagesService;
        this.dragulaService = dragulaService;
        this.topValues = [];
        this.newInformationElements = [];
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
        this.tablesTerasse = [];
        this.tablesTerrasseEdelweiss = [];
        this.filesToUpload = [];
        this.isDropped = [];
        this.notizElements = [];
        this.date = [];
        this.parts = [];
        this.parsedDate = [];
        this.tableInformation = [];
        this.tablesTempAbreise = [];
        this.erwBauernstube = [];
        this.kiBauernstube = [];
        this.erwEdelweiss = [];
        this.kiEdelweiss = [];
        this.erwWaeldlerStubeKristallStube = [];
        this.kiWaeldlerStubeKristallStube = [];
        this.erwBerglerStubeHubertusStube = [];
        this.kiBerglerStubeHubertusStube = [];
        this.erwTeestubeTeelounge = [];
        this.kiTeestubeTeelounge = [];
        this.erwTerasse = [];
        this.kiTerasse = [];
        this.erwTerrasseEdelweiss = [];
        this.kiTerrasseEdelweiss = [];
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
        this.buttonBgColor7 = "0a7a74";
        this.buttonBgColor8 = "0a7a74";
        this.fontColor1 = "f3efe4";
        this.fontColor2 = "f3efe4";
        this.fontColor3 = "f3efe4";
        this.fontColor4 = "f3efe4";
        this.fontColor5 = "f3efe4";
        this.fontColor6 = "f3efe4";
        this.fontColor7 = "f3efe4";
        this.fontColor8 = "f3efe4";
        this.tablesOccupied = 0;
        this.backgroundColor = "ffffff";
        this.showBauernStubnBool = false;
        this.showBerglerBool = false;
        this.showWaeldlerBool = false;
        this.showEdelweissBool = false;
        this.showTeeStubeBool = false;
        this.showTerasseBool = false;
        this.showTerrasseEdelweissBool = false;
        this.term = "";
        this.tischplanService.getNotizElements()
            .subscribe(function (informationElemente) {
            if (informationElemente === null) {
                return;
            }
            else {
                _this.notizElements = informationElemente;
                //console.log(this.notizElements);
            }
        });
        this.getTables();
        this.reloadLists();
        this.tischplanService.getInformationElements()
            .subscribe(function (informationElemente) {
            if (informationElemente === null) {
                return;
            }
            else {
                _this.newInformationElements = informationElemente;
                //console.log(this.newInformationElements);
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
        var innerText = args[1].innerText;
        console.log(innerText);
        //console.log("tableNumber: " + tableNumber);
        var tableNumberSubstring = innerText.toString().match(/\d+/);
        //console.log('tableNumberSubstring');
        //console.log(tableNumberSubstring);
        var numbers = innerText.match(/\d+/g);
        var arrayIndex = [];
        //console.log(innerText.substring(33, 34));
        if (innerText.substring(33, 34) === ".") {
            arrayIndex = numbers[2];
            tableNumberSubstring = numbers[0] + "." + numbers[1];
        }
        else {
            arrayIndex = numbers[1];
        }
        //console.log("numbers: " + numbers);
        //console.log("arrayIndex: " + arrayIndex);
        //console.log("tableNumberSubstring: " + tableNumberSubstring);
        var dataString = [];
        dataString.push(information + departementSubstring + tableNumberSubstring);
        var jBefore = innerText.toString().match(/\d+/g);
        console.log(jBefore);
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
        this.tableplanComponent.sumUpPersonenAnzahl();
        this.updateImHausListeElement(informationElements2);
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
    TischplanComponent.prototype.updateImHausListeElement = function (x) {
        this.imHausListeComponent.updateImHausListeElement(x);
    };
    /*
    moveTable(table, j) {
      this.tableplanComponent.moveTable(table, j);
    }
    */
    TischplanComponent.prototype.sendInformation = function (event) {
        this.formComponent.sendInformation(event);
    };
    TischplanComponent.prototype.delete = function (informationElement, j, event) {
        this.navigationComponent.delete(informationElement, j, event);
    };
    TischplanComponent.prototype.changeBgColorIfAnreise = function () {
        this.departmentsComponent.changeBgColorIfAnreise();
    };
    TischplanComponent.prototype.abreisenRemoval = function () {
        this.departmentsComponent.occupy(this.abreiseTablePlusIndex.abreisenExport, this.abreiseTablePlusIndex.a);
    };
    TischplanComponent.prototype.umsetzen = function () {
        var _this = this;
        this.departmentsComponent.addInformationToTable(this.umsetzenInfoVar.tableInformationExport, this.umsetzenInfoVar.indexZiel);
        this.departmentsComponent.occupyTableOnDrop(this.umsetzenInfoVar.tableToMove, this.umsetzenInfoVar.indexZiel);
        setTimeout(function () {
            _this.departmentsComponent.occupy(_this.umsetzenInfoVar.tableToMove, _this.umsetzenInfoVar.indexQuell);
        }, 2000);
    };
    TischplanComponent.prototype.transform = function (term) {
        this.departmentsComponent.transform(term);
    };
    TischplanComponent.prototype.reloadLists = function () {
        var _this = this;
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
            //console.log('IM-HAUS-LISTE:');
            //console.log(this.imHausListeElemente);
            setTimeout(function () {
                _this.imHausListeComponent.sortList();
            }, 3000);
        });
    };
    TischplanComponent.prototype.updateAzList = function () {
        var _this = this;
        setTimeout(function () {
            console.log("gettables in updateAzList");
            _this.getTables();
            setTimeout(function () {
                _this.tables = _this.tablesBauernstube.concat(_this.tablesTeestubeTeelounge).concat(_this.tablesBerglerStubeHubertusStube).concat(_this.tablesEdelweissKaminStube).concat(_this.tablesWaeldlerStubeKristallStube).concat(_this.tablesTerasse).concat(_this.tablesTerrasseEdelweiss);
                ;
                //console.log('this.tables: in updateAzList');
                //console.log(this.tables);
                _this.printComponent.formatAzListe(_this.tables);
            }, 3000);
        }, 1000);
    };
    TischplanComponent.prototype.getTables = function () {
        var _this = this;
        this.tischplanService.getTables()
            .subscribe(function (tables) {
            console.log("TABLES LENGTH: " + tables.length);
            if (typeof tables == null) {
                return;
            }
            else {
                for (var a = 0; a < tables.length; a++) {
                    if (tables[a].department === "Bauernstube") {
                        _this.tablesBauernstube = tables[a].tables;
                    }
                    else if (tables[a].department === "edelweissKaminStube") {
                        _this.tablesEdelweissKaminStube = tables[a].tables;
                        //console.log('Test' + JSON.stringify(this.tablesEdelweissKaminStube));
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
                    else if (tables[a].department === "terasse") {
                        _this.tablesTerasse = tables[a].tables;
                    }
                    else if (tables[a].department === "terrasseEdelweiss") {
                        _this.tablesTerrasseEdelweiss = tables[a].tables;
                    }
                }
            }
            //console.log(JSON.stringify(tables));
            console.log(_this.tablesBauernstube);
            console.log(_this.tablesEdelweissKaminStube);
            console.log(_this.tablesBerglerStubeHubertusStube);
            console.log(_this.tablesWaeldlerStubeKristallStube);
            console.log(_this.tablesTeestubeTeelounge);
            console.log(_this.tablesTerasse);
            console.log(_this.tablesTerrasseEdelweiss);
            _this.tablesTempAbreise = tables;
            _this.tables = _this.tablesBauernstube.concat(_this.tablesTeestubeTeelounge).concat(_this.tablesBerglerStubeHubertusStube).concat(_this.tablesEdelweissKaminStube).concat(_this.tablesWaeldlerStubeKristallStube).concat(_this.tablesTerasse).concat(_this.tablesTerrasseEdelweiss);
            //console.log(this.tables);
            _this.changeBgColorIfAnreise();
            _this.printComponent.formatAzListe(_this.tables);
            //this.dispenseIfAbreise(tables);
            setTimeout(function () {
                _this.tableplanComponent.sumUpPersonenAnzahl();
            }, 1000);
        });
    };
    return TischplanComponent;
}());
__decorate([
    core_1.ViewChild(print_component_1.PrintComponent),
    __metadata("design:type", typeof (_a = typeof print_component_1.PrintComponent !== "undefined" && print_component_1.PrintComponent) === "function" && _a || Object)
], TischplanComponent.prototype, "printComponent", void 0);
__decorate([
    core_1.ViewChild(departmentmenu_component_1.DepartmentmenuComponent),
    __metadata("design:type", typeof (_b = typeof departmentmenu_component_1.DepartmentmenuComponent !== "undefined" && departmentmenu_component_1.DepartmentmenuComponent) === "function" && _b || Object)
], TischplanComponent.prototype, "departmentmenuComponent", void 0);
__decorate([
    core_1.ViewChild(form_component_1.FormComponent),
    __metadata("design:type", typeof (_c = typeof form_component_1.FormComponent !== "undefined" && form_component_1.FormComponent) === "function" && _c || Object)
], TischplanComponent.prototype, "formComponent", void 0);
__decorate([
    core_1.ViewChild(departments_component_1.DepartmentsComponent),
    __metadata("design:type", typeof (_d = typeof departments_component_1.DepartmentsComponent !== "undefined" && departments_component_1.DepartmentsComponent) === "function" && _d || Object)
], TischplanComponent.prototype, "departmentsComponent", void 0);
__decorate([
    core_1.ViewChild(im_haus_liste_component_1.ImHausListeComponent),
    __metadata("design:type", typeof (_e = typeof im_haus_liste_component_1.ImHausListeComponent !== "undefined" && im_haus_liste_component_1.ImHausListeComponent) === "function" && _e || Object)
], TischplanComponent.prototype, "imHausListeComponent", void 0);
__decorate([
    core_1.ViewChild(navigation_component_1.NavigationComponent),
    __metadata("design:type", typeof (_f = typeof navigation_component_1.NavigationComponent !== "undefined" && navigation_component_1.NavigationComponent) === "function" && _f || Object)
], TischplanComponent.prototype, "navigationComponent", void 0);
__decorate([
    core_1.ViewChild(tableplan_component_1.TableplanComponent),
    __metadata("design:type", typeof (_g = typeof tableplan_component_1.TableplanComponent !== "undefined" && tableplan_component_1.TableplanComponent) === "function" && _g || Object)
], TischplanComponent.prototype, "tableplanComponent", void 0);
TischplanComponent = __decorate([
    core_1.Component({
        selector: 'tischplan',
        template: __webpack_require__("../../../../../src/app/components/digitalerTischplan/tischplan.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digitalerTischplan/tischplan.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_h = typeof tischplan_service_1.TischplanService !== "undefined" && tischplan_service_1.TischplanService) === "function" && _h || Object, typeof (_j = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _j || Object, typeof (_k = typeof angular2_flash_messages_1.FlashMessagesService !== "undefined" && angular2_flash_messages_1.FlashMessagesService) === "function" && _k || Object, typeof (_l = typeof ng2_dragula_1.DragulaService !== "undefined" && ng2_dragula_1.DragulaService) === "function" && _l || Object])
], TischplanComponent);
exports.TischplanComponent = TischplanComponent;
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
//# sourceMappingURL=tischplan.component.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var auth_service_1 = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            console.log('CAN ACTIVATE IS TRUE');
            return true;
        }
        else {
            this.router.navigate(['/login']);
            console.log('CAN ACTIVATE IS FALSE');
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
], AuthGuard);
exports.AuthGuard = AuthGuard;
var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var angular2_jwt_1 = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.isDev = true; // Change to false before deployment
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('register');
        return this.http.post(ep, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // Gets called from submit login form
    AuthService.prototype.authenticateUser = function (user) {
        console.log("Check1");
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('authenticate');
        return this.http.post(ep, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new http_1.Headers();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('profile');
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // Gets called from submit login form
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
        console.log(JSON.stringify(user));
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return angular2_jwt_1.tokenNotExpired('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService.prototype.prepEndpoint = function (ep) {
        if (this.isDev) {
            return ep;
        }
        else {
            return 'http://localhost:8000/' + ep;
        }
    };
    return AuthService;
}());
AuthService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
], AuthService);
exports.AuthService = AuthService;
var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/tischplan.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
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
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('occupyTable', dataString, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.addTable = function (dataString) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('addTable', dataString, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.removeTable = function (dataString) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('removeTable', dataString, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.dispenseTable = function (table) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('dispenseTable', table, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.removePlaceholder = function (dataString) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('removePlaceholder', dataString, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.addPlaceholder = function (tableSonnbergZirbn) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('addPlaceholder', tableSonnbergZirbn, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.addInformationToTable = function (dataString) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('addInformationToTable', dataString, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.sendInformation = function (newInformation) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        console.log(headers);
        return this.http.post('newInformationToTables', newInformation, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.sendInformationToBox = function (newInformation) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        console.log(headers);
        return this.http.post('newInformationToBox', newInformation, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.deleteInformationElement = function (informationElement) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        console.log(headers);
        return this.http.post('deleteInformationElement', informationElement, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.updateImHausListeElement = function (informationElements2) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        console.log(headers);
        return this.http.post('updateImHausListeElement', informationElements2, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.updateAnreiseListeElement = function (informationElements2) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        console.log(headers);
        return this.http.post('updateAnreiseListeElement', informationElements2, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.updateTracesListeElement = function (informationElements2) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        console.log(headers);
        return this.http.post('updateTracesListeElement', informationElements2, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.sendInformationToNotizBlock = function (newInformation) {
        var headers = new http_1.Headers();
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
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
], TischplanService);
exports.TischplanService = TischplanService;
var _a;
//# sourceMappingURL=tischplan.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name === undefined || user.email === undefined || user.username === undefined || user.password === undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    return ValidateService;
}());
ValidateService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], ValidateService);
exports.ValidateService = ValidateService;
//# sourceMappingURL=validate.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map