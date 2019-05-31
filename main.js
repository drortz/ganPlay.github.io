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

/***/ "./src/app/add-dishes/add-dishes.component.css":
/*!*****************************************************!*\
  !*** ./src/app/add-dishes/add-dishes.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1kaXNoZXMvYWRkLWRpc2hlcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/add-dishes/add-dishes.component.html":
/*!******************************************************!*\
  !*** ./src/app/add-dishes/add-dishes.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-date-picker></app-date-picker>\n<div class=\"container\">\n  <app-add-dish class=\"container\" *ngFor=\"let dish of menu?.dishs; let i = index\"  [dish]=\"dish\" [dishIndex]=i (dishRemoved)=\"onDishRemoved($event)\"></app-add-dish>\n  <button type=\"button\" class=\"btn btn-success\" (click)=\"addDish()\">הוסף</button>\n  <button type=\"button\" class=\"btn btn-success\" (click)=\"submit()\">שמור</button>\n</div>\n"

/***/ }),

/***/ "./src/app/add-dishes/add-dishes.component.ts":
/*!****************************************************!*\
  !*** ./src/app/add-dishes/add-dishes.component.ts ***!
  \****************************************************/
/*! exports provided: AddDishesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDishesComponent", function() { return AddDishesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _error_messages_holder_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../error-messages-holder-service */ "./src/app/error-messages-holder-service.ts");
/* harmony import */ var src_swaggergenerate_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/swaggergenerate/services */ "./src/swaggergenerate/services.ts");
/* harmony import */ var _date_picker_date_picker_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../date-picker/date-picker.service */ "./src/app/date-picker/date-picker.service.ts");
/* harmony import */ var _load_spinner_load_spinner_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../load-spinner/load-spinner-service */ "./src/app/load-spinner/load-spinner-service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");







var AddDishesComponent = /** @class */ (function () {
    function AddDishesComponent(menuRestControllerService, datePickerService, loadSpinnerService, userService, errorMessagesHolderService) {
        this.menuRestControllerService = menuRestControllerService;
        this.datePickerService = datePickerService;
        this.loadSpinnerService = loadSpinnerService;
        this.userService = userService;
        this.errorMessagesHolderService = errorMessagesHolderService;
        this.menu = {};
    }
    AddDishesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.datePickerService.date$.subscribe(function (date) {
            _this.date = date;
            _this.loadMenu(date);
        });
    };
    AddDishesComponent.prototype.onDishRemoved = function (dishRemoved) {
        if (this.menu.dishs !== undefined) {
            this.menu.dishs.splice(dishRemoved.index, 1);
        }
    };
    AddDishesComponent.prototype.loadMenu = function (date) {
        var _this = this;
        var dateKey = date.getDate() + '_' + (date.getMonth() + 1) + '_' + date.getFullYear();
        this.loadSpinnerService.addRequestor('loadMenu');
        this.menuRestControllerService.getMenusUsingGET(dateKey).subscribe(function (menu) {
            _this.loadSpinnerService.removeRequestor('loadMenu');
            _this.menu = menu;
            if (_this.menu.dishs == null) {
                _this.menu.dishs = [];
            }
        }, function (error) {
            _this.loadSpinnerService.removeRequestor('loadMenu');
        });
    };
    AddDishesComponent.prototype.addDish = function () {
        if (this.menu.dishs === undefined) {
            this.menu.dishs = [];
        }
        this.menu.dishs.push({
            dishItems: []
        });
    };
    AddDishesComponent.prototype.submit = function () {
        var _this = this;
        var dateKey = this.date.getDate() + '_' + (this.date.getMonth() + 1) + '_' + this.date.getFullYear();
        this.menu.dateId = dateKey;
        var user = this.userService.getUpdatedUser();
        if (user == null) {
            this.errorMessagesHolderService.clearMessages();
            this.errorMessagesHolderService.addMessage('בשביל לשמור תפריט צריך להתחבר');
            return;
        }
        var param = {
            authTokenId: user.tokenId,
            menu: this.menu
        };
        this.loadSpinnerService.addRequestor('submit');
        this.menuRestControllerService.addMenuUsingPOST(param).subscribe(function (menu) {
            _this.loadSpinnerService.removeRequestor('submit');
        }, function (error) {
            _this.loadSpinnerService.removeRequestor('submit');
        });
    };
    AddDishesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
            selector: 'app-add-dishes',
            template: __webpack_require__(/*! ./add-dishes.component.html */ "./src/app/add-dishes/add-dishes.component.html"),
            styles: [__webpack_require__(/*! ./add-dishes.component.css */ "./src/app/add-dishes/add-dishes.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_swaggergenerate_services__WEBPACK_IMPORTED_MODULE_2__["MenuRestControllerService"],
            _date_picker_date_picker_service__WEBPACK_IMPORTED_MODULE_3__["DatePickerService"],
            _load_spinner_load_spinner_service__WEBPACK_IMPORTED_MODULE_4__["LoadSpinnerService"],
            _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _error_messages_holder_service__WEBPACK_IMPORTED_MODULE_1__["ErrorMessagesHolderService"]])
    ], AddDishesComponent);
    return AddDishesComponent;
}());



/***/ }),

/***/ "./src/app/add-dishes/filter.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/add-dishes/filter.pipe.ts ***!
  \*******************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, searchText) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        // searchText = searchText.toLowerCase();
        return items.filter(function (it) {
            return it.includes(searchText);
        });
    };
    FilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/add-menu/add-dish/add-dish-item/add-dish-item.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/add-menu/add-dish/add-dish-item/add-dish-item.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1tZW51L2FkZC1kaXNoL2FkZC1kaXNoLWl0ZW0vYWRkLWRpc2gtaXRlbS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/add-menu/add-dish/add-dish-item/add-dish-item.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/add-menu/add-dish/add-dish-item/add-dish-item.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"input-group mb-2 mr-sm-2\">\r\n  <div class=\"input-group-prepend\">\r\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"remove()\"><i class=\"material-icons\" style=\"font-size: 18px;\">clear</i></button>\r\n  </div>\r\n  <input [(ngModel)]=\"dishItem.subject\"type=\"txt\" class=\"form-control\" placeholder=\"מנה\">\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/add-menu/add-dish/add-dish-item/add-dish-item.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/add-menu/add-dish/add-dish-item/add-dish-item.component.ts ***!
  \****************************************************************************/
/*! exports provided: AddDishItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDishItemComponent", function() { return AddDishItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AddDishItemComponent = /** @class */ (function () {
    function AddDishItemComponent() {
    }
    AddDishItemComponent.prototype.ngOnInit = function () {
    };
    AddDishItemComponent.prototype.remove = function () {
        this.dishItems.splice(this.index, 1);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddDishItemComponent.prototype, "dishItem", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], AddDishItemComponent.prototype, "dishItems", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], AddDishItemComponent.prototype, "index", void 0);
    AddDishItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-dish-item',
            template: __webpack_require__(/*! ./add-dish-item.component.html */ "./src/app/add-menu/add-dish/add-dish-item/add-dish-item.component.html"),
            styles: [__webpack_require__(/*! ./add-dish-item.component.css */ "./src/app/add-menu/add-dish/add-dish-item/add-dish-item.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AddDishItemComponent);
    return AddDishItemComponent;
}());



/***/ }),

/***/ "./src/app/add-menu/add-dish/add-dish.component.css":
/*!**********************************************************!*\
  !*** ./src/app/add-menu/add-dish/add-dish.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1tZW51L2FkZC1kaXNoL2FkZC1kaXNoLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/add-menu/add-dish/add-dish.component.html":
/*!***********************************************************!*\
  !*** ./src/app/add-menu/add-dish/add-dish.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-header\">\r\n      <button type=\"button\" class=\"btn btn-danger\" (click)=\"onRemoveDish()\"><i class=\"material-icons\">clear</i></button>\r\n      <h5><input [(ngModel)]=\"dish.subject\" type=\"txt\" class=\"form-control\" placeholder=\"סוג מנה\"></h5>\r\n  </div>\r\n\r\n  <div class=\"card-body\">\r\n    <app-add-dish-item class=\"container\" *ngFor=\"let dishItem of dish?.dishItems; let i = index\"  [dishItem]=\"dishItem\" [dishItems]=\"dish?.dishItems\" [index]=\"i\"></app-add-dish-item>\r\n    <a class=\"btn btn-primary\" (click)=\"addDishItem()\">הוספת מנה</a>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/add-menu/add-dish/add-dish.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/add-menu/add-dish/add-dish.component.ts ***!
  \*********************************************************/
/*! exports provided: AddDishComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDishComponent", function() { return AddDishComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AddDishComponent = /** @class */ (function () {
    function AddDishComponent() {
        this.dishRemoved = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    AddDishComponent.prototype.ngOnInit = function () {
    };
    AddDishComponent.prototype.addDishItem = function () {
        if (this.dish.dishItems === undefined) {
            this.dish.dishItems = [];
        }
        this.dish.dishItems.push({});
    };
    AddDishComponent.prototype.onRemoveDish = function () {
        this.dishRemoved.emit({ index: this.dishIndex });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddDishComponent.prototype, "dish", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], AddDishComponent.prototype, "dishIndex", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddDishComponent.prototype, "dishRemoved", void 0);
    AddDishComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-dish',
            template: __webpack_require__(/*! ./add-dish.component.html */ "./src/app/add-menu/add-dish/add-dish.component.html"),
            styles: [__webpack_require__(/*! ./add-dish.component.css */ "./src/app/add-menu/add-dish/add-dish.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AddDishComponent);
    return AddDishComponent;
}());



/***/ }),

/***/ "./src/app/add-menu/add-menu.component.css":
/*!*************************************************!*\
  !*** ./src/app/add-menu/add-menu.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "title {\r\n  text-align: center;\r\n}\r\n\r\n.col.align-self-center {\r\n  background: rgb(183, 235, 220);\r\n}\r\n\r\n.disableddiv {\r\n  pointer-events: none;\r\n  opacity: 0.4;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLW1lbnUvYWRkLW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9hZGQtbWVudS9hZGQtbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGl0bGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbC5hbGlnbi1zZWxmLWNlbnRlciB7XHJcbiAgYmFja2dyb3VuZDogcmdiKDE4MywgMjM1LCAyMjApO1xyXG59XHJcblxyXG4uZGlzYWJsZWRkaXYge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIG9wYWNpdHk6IDAuNDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/add-menu/add-menu.component.html":
/*!**************************************************!*\
  !*** ./src/app/add-menu/add-menu.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"row\">\r\n    <div class=\"col align-self-center\" style=\"margin: 0px;padding: 0px;height: 40px;\">\r\n        <p class=\"text-center\" style=\"font-size: 23px;font-weight: bold;\">בניית תפריט</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\"></div>\r\n  <div dir=\"ltr\" class=\"row text-right d-md-flex\" style=\"margin-right: 0px;margin-left: 0px;padding-top: 5px;\">\r\n    <div class=\"col\" style=\"margin-left: 10\">\r\n        <div class=\"row mr-auto\" style=\"width: 300px;\">\r\n          <app-date-picker></app-date-picker>\r\n        </div>\r\n        <div class=\"row mr-auto\" style=\"width: 300px;\">\r\n            <div class=\"col\">\r\n                <div class=\"row\">\r\n                    <div class=\"col text-right\"><button [disabled]=\"savedMenuElement.length == 0\" (click)=\"onSaveNewMenu()\" class=\"btn btn-primary text-right\" type=\"button\">שמירת תפריט</button></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row mr-auto\" style=\"width: 300px;\">\r\n            <div class=\"col\">\r\n                <div *ngFor=\"let saved of savedMenuElement\" class=\"card shadow\" style=\"margin-top: 10px;\">\r\n                    <div class=\"card-body\" style=\"margin-top: 0px;\">\r\n                        <div class=\"row mr-auto\" style=\"width: 30px;\">\r\n                            <div class=\"col\"><button (click)=\"onRemoveNewDish(saved.newMenuSubjects)\" class=\"close text-danger\"><span aria-hidden=\"true\">X</span></button></div>\r\n                        </div>\r\n                        <h3 style=\"text-align: right\" *ngFor=\"let subject of saved.newMenuSubjects\" class=\"card-subtitle mb-2\">{{subject}}</h3>\r\n                        <div class=\"card-footer\">\r\n                            <h6 style=\"text-align: right\" *ngFor=\"let dish of saved.newDishes\" class=\"card-title\">{{dish}}</h6>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div *ngFor=\"let subject of newMenuSubjects\" class=\"card shadow\" style=\"margin-top: 10px;\">\r\n                    <div class=\"card-body\" style=\"margin-top: 0px;\">\r\n                        <div class=\"row mr-auto\" style=\"width: 30px;\">\r\n                            <div class=\"col\"><button (click)=\"onCancelNewDish()\" class=\"close text-danger\"><span aria-hidden=\"true\">X</span></button></div>\r\n                        </div>\r\n                        <h3 style=\"text-align: right\" class=\"card-subtitle mb-2\">{{subject}}</h3>\r\n                        <div class=\"card-footer\">\r\n                            <h6 style=\"text-align: right\" *ngFor=\"let dish of newDishes\" class=\"card-title\">{{dish}}</h6>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col text-center\"><button (click)=\"onSaveNewDish()\" class=\"btn btn-success\" type=\"button\">שמירת מנה</button></div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-auto\" style=\"width: 230px;margin-right: -18px;\">\r\n        <div class=\"row\">\r\n            <div class=\"col\">\r\n                <div class=\"row padMar\">\r\n                    <div class=\"col padMar\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col\">\r\n                                <p class=\"text-center\" style=\"font-weight: bold;margin-top: 9px;\">מנות</p>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"input-group\">\r\n                            <div class=\"input-group-prepend\"></div><input [(ngModel)]=\"searchDishText\" class=\"form-control autocomplete\" type=\"text\" placeholder=\"חיפוש\">\r\n                            <div class=\"input-group-append\"><button class=\"btn btn-success\" type=\"button\" disabled=\"disabled\"><i class=\"fa fa-search\"></i></button></div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row disableddiv\">\r\n            <div class=\"col\">\r\n                <ul *ngFor=\"let dish of distinctDishes | filter : searchDishText\" class=\"list-group\" style=\"cursor: pointer; font-size: 25px;letter-spacing: 0px;line-height: 20px;padding: 0px;margin: 0px;width: 165px;\">\r\n                    <li id=\"dishCol\" (click)=\"onDishClick(dish)\" class=\"list-group-item list-group-item-success text-right\" style=\"margin: 0px;margin-top: 5px;width: 201px;padding-top: 9px;\"><span style=\"font-weight: bold;font-size: 20px;\">{{dish}}</span></li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-auto\" style=\"width: 230px;margin-right: 20px;\">\r\n        <div class=\"row\">\r\n            <div class=\"col\">\r\n                <div class=\"row padMar\">\r\n                    <div class=\"col padMar\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col\">\r\n                                <p class=\"text-center\" data-bs-hover-animate=\"swing\" style=\"font-weight: bold;margin-top: 8px;\">סוגי מנות</p>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"input-group\">\r\n                            <div class=\"input-group-prepend\"></div><input [(ngModel)]=\"searchSubjectText\" class=\"form-control autocomplete\" type=\"text\" placeholder=\"חיפוש\">\r\n                            <div class=\"input-group-append\"><button class=\"btn btn-info\" type=\"button\" disabled=\"disabled\"><i class=\"fa fa-search\"></i></button></div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col\">\r\n\r\n                <ul *ngFor=\"let subject of distinctSubjects | filter : searchSubjectText\" id=\"subjectCol\" class=\"list-group\" style=\"cursor: pointer; font-size: 25px;letter-spacing: 0px;line-height: 20px;padding: 0px;margin: 0px;width: 165px;\">\r\n                    <li (click)=\"onSubjectClick(subject)\" class=\"list-group-item list-group-item-info text-right\" style=\"margin: 0px;margin-top: 5px;width: 201px;\"><span class=\"d-sm-flex\" style=\"font-weight: bold;font-size: 20px;\">{{subject}}</span></li>\r\n                </ul>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n\r\n<!--\r\n\r\n<div class=\"container-fluid\" style=\"background-image:url('../../assets/images/background-2.jpg'); background-size: auto;\">\r\n\r\n    <div class=\"row\">\r\n      <div class=\"container d-flex justify-content-center\">\r\n        <app-date-picker></app-date-picker>\r\n      </div>\r\n    </div>\r\n\r\n  <div class=\"row\">\r\n\r\n    <div class=\"w-100\"></div>\r\n\r\n    <div class=\"col border-right\">\r\n        <div class=\"container mb-3\">\r\n            <div class=\"col d-flex justify-content-center\">\r\n                <i class=\"material-icons\">\r\n                    search\r\n                </i>\r\n                <div class=\"col\">\r\n                    <input [(ngModel)]=\"searchSubjectText\" class=\"form-control\" type=\"text\" placeholder=\"חיפוש סוג מנה\" aria-label=\"Search\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row-5\" >\r\n            <div class=\"col\" style=\"overflow: auto; height: 700px; max-height: 700px; direction: ltr\">\r\n              <div *ngFor=\"let subject of distinctSubjects | filter : searchSubjectText\" class=\"list-group\" style=\"cursor: pointer\">\r\n                      <a id=\"oneSubject\" (click)=\"onSubjectClick(subject)\" class=\"list-group-item list-group-item-action list-group-item-success\" id=\"subjectCol\">\r\n                        <div class=\"d-flex w-100 justify-content-between\">\r\n                          <h5 class=\"mb-1\" >{{subject}}</h5>\r\n                        </div>\r\n                      </a>\r\n              </div>\r\n            </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    <div class=\"col border-right\">\r\n      <div class=\"container mb-3\">\r\n          <div class=\"col d-flex justify-content-center\">\r\n              <i class=\"material-icons\">\r\n                  search\r\n              </i>\r\n              <div class=\"col\">\r\n                  <input [(ngModel)]=\"searchDishText\" class=\"form-control\" type=\"text\" placeholder=\"חיפוש מנה\" aria-label=\"Search\">\r\n              </div>\r\n          </div>\r\n      </div>\r\n\r\n\r\n        <div class=\"row-5\">\r\n          <div class=\"col\" style=\"overflow: auto; height: 700px; max-height: 700px; direction: ltr\">\r\n            <div *ngFor=\"let dish of distinctDishes | filter : searchDishText\" style=\"cursor: pointer\">\r\n                    <a (click)=\"onDishClick(dish)\" class=\"list-group-item list-group-item-action list-group-item-info\" id=\"dishList\">\r\n                      <div class=\"d-flex w-100 justify-content-between\">\r\n                        <h5 class=\"mb-1\" >{{dish}}</h5>\r\n                      </div>\r\n                    </a>\r\n            </div>\r\n          </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n\r\n    <div class=\"col ml-4 mr-4\" style=\"overflow: auto; height: 700px; max-height: 700px; direction: ltr\">\r\n      <div class=\"container\">\r\n          <div class=\"row justify-content-center\">\r\n              <h3>התפריט</h3>\r\n            </div>\r\n            <div class=\"row mt-2 mb-2 justify-content-center\">\r\n              <button [disabled]=\"savedMenuElement.length == 0\" (click)=\"onSaveNewMenu()\" type=\"button mr-5\" class=\"btn btn-success\">שמירת תפריט</button>\r\n            </div>\r\n      </div>\r\n\r\n\r\n      <ul *ngFor=\"let saved of savedMenuElement\" class=\"list-group\">\r\n          <li class=\"list-group-item\">\r\n              <div id=\"menuBuilderCard\" class=\"card bg-light mb-3\">\r\n                  <div class=\"card-body text-dark\" >\r\n                      <h3 *ngFor=\"let subject of saved.newMenuSubjects\" class=\"card-header mb-3\">{{subject}}</h3>\r\n                      <h5 *ngFor=\"let dish of saved.newDishes\" class=\"card-text\">{{dish}}</h5>\r\n                      <div class=\"container\">\r\n                          <a class=\"btn btn-danger \" (click)=\"onRemoveNewDish(saved.newMenuSubjects)\">הסרה</a>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </li>\r\n      </ul>\r\n\r\n      <ul *ngFor=\"let subject of newMenuSubjects\" class=\"list-group\" >\r\n          <li class=\"list-group-item\">\r\n              <div id=\"menuBuilderCard\" class=\"card border-primary mb-3\">\r\n                  <div class=\"card-body\" >\r\n                      <h3 class=\"card-header mb-3\">{{subject}}</h3>\r\n                      <h5 *ngFor=\"let dish of newDishes\" class=\"card-text\">{{dish}}</h5>\r\n                      <div class=\"container\">\r\n                          <a class=\"btn btn-success\" (click)=\"onSaveNewDish()\">שמירת מנה</a>\r\n                          <a class=\"btn btn-danger mr-2\" (click)=\"onCancelNewDish()\">ביטול</a>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </li>\r\n      </ul>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n\r\n</div>\r\n-->\r\n"

/***/ }),

/***/ "./src/app/add-menu/add-menu.component.ts":
/*!************************************************!*\
  !*** ./src/app/add-menu/add-menu.component.ts ***!
  \************************************************/
/*! exports provided: AddMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMenuComponent", function() { return AddMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _date_picker_date_picker_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../date-picker/date-picker.service */ "./src/app/date-picker/date-picker.service.ts");
/* harmony import */ var src_swaggergenerate_services_menu_rest_controller_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/swaggergenerate/services/menu-rest-controller.service */ "./src/swaggergenerate/services/menu-rest-controller.service.ts");
/* harmony import */ var _load_spinner_load_spinner_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../load-spinner/load-spinner-service */ "./src/app/load-spinner/load-spinner-service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _error_messages_holder_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../error-messages-holder-service */ "./src/app/error-messages-holder-service.ts");







var AddMenuComponent = /** @class */ (function () {
    function AddMenuComponent(datePickerService, menuRestControllerService, loadSpinnerService, userService, errorMessagesHolderService) {
        this.datePickerService = datePickerService;
        this.menuRestControllerService = menuRestControllerService;
        this.loadSpinnerService = loadSpinnerService;
        this.userService = userService;
        this.errorMessagesHolderService = errorMessagesHolderService;
        this.newMenu = {};
        this.distinctDishes = [];
        this.user = null;
        this.newMenuSubjects = [];
        this.newDishes = [];
        this.savedMenuElement = [];
    }
    AddMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.datePickerService.date$.subscribe(function (date) {
            _this.date = date;
        });
        // Load menu function here
        // this.loadMockMenu();
        this.loadSpinnerService.addRequestor('loadDistinctValues');
        this.loadDistinctSubjects();
        this.loadDistinctDishes();
        this.loadSpinnerService.removeRequestor('loadDistinctValues');
    };
    AddMenuComponent.prototype.loadDistinctSubjects = function () {
        var _this = this;
        this.menuRestControllerService.getDistinctDishesUsingGET().subscribe(function (dishes) {
            _this.distinctDishes = dishes;
        });
    };
    AddMenuComponent.prototype.loadDistinctDishes = function () {
        var _this = this;
        this.menuRestControllerService.getDistinctSubjectsUsingGET().subscribe(function (subjects) {
            _this.distinctSubjects = subjects;
        });
    };
    AddMenuComponent.prototype.onSubjectClick = function (subject) {
        if (!this.newMenuSubjects.includes(subject)) {
            this.newMenuSubjects.push(subject);
        }
        var divToChange = document.getElementById('subjectCol');
        divToChange.parentElement.parentElement.className = "row disableddiv";
        var divToChange2 = document.getElementById('dishCol');
        divToChange2.parentElement.parentElement.parentElement.className = "row";
    };
    AddMenuComponent.prototype.onDishClick = function (dishItemSubject) {
        if (this.newMenuSubjects.length !== 0 && !this.newDishes.includes(dishItemSubject)) {
            this.newDishes.push(dishItemSubject);
        }
    };
    AddMenuComponent.prototype.onSaveNewDish = function () {
        var saved = { newDishes: [], newMenuSubjects: [] };
        saved.newDishes = this.newDishes;
        saved.newMenuSubjects = this.newMenuSubjects;
        this.savedMenuElement.push(saved);
        this.newDishes = [];
        this.newMenuSubjects = [];
        var subjectCol = document.getElementById('subjectCol');
        subjectCol.parentElement.parentElement.className = 'row';
        var divToChange2 = document.getElementById('dishCol');
        divToChange2.parentElement.parentElement.parentElement.className = "row disableddiv";
    };
    AddMenuComponent.prototype.onRemoveNewDish = function (subject) {
        var _this = this;
        this.savedMenuElement.forEach(function (item, index) {
            if (item.newMenuSubjects.slice().pop() === subject.slice().pop()) {
                _this.savedMenuElement.splice(index, 1);
            }
        });
    };
    AddMenuComponent.prototype.onCancelNewDish = function () {
        this.newDishes = [];
        this.newMenuSubjects = [];
        var subjectCol = document.getElementById('subjectCol');
        subjectCol.parentElement.parentElement.className = 'row';
        var divToChange2 = document.getElementById('dishCol');
        divToChange2.parentElement.parentElement.parentElement.className = "row disableddiv";
    };
    AddMenuComponent.prototype.onSaveNewMenu = function () {
        this.populateNewMenu();
        this.postNewMenu();
    };
    AddMenuComponent.prototype.postNewMenu = function () {
        var _this = this;
        this.user = this.userService.getUpdatedUser();
        if (this.user == null) {
            this.errorMessagesHolderService.addMessage('בשביל לשמור תפריט צריך להתחבר');
            return;
        }
        var addMenuUsingPOSTParams = { menu: this.newMenu, authTokenId: this.user.tokenId };
        this.loadSpinnerService.addRequestor('addNewMenu');
        this.menuRestControllerService.addMenuUsingPOST(addMenuUsingPOSTParams).subscribe(function (menu) {
            _this.newMenu = {};
            _this.loadSpinnerService.removeRequestor('addNewMenu');
        }, function (error) {
            _this.loadSpinnerService.removeRequestor('addNewMenu');
            _this.errorMessagesHolderService.addMessage('שגיאה בשמירת התפריט');
            console.log(error);
        });
    };
    AddMenuComponent.prototype.populateNewMenu = function () {
        this.newMenu.dateId = this.date.getDate() + '_' + (this.date.getMonth() + 1) + '_' + this.date.getFullYear();
        this.newMenu.dishs = [];
        for (var _i = 0, _a = this.savedMenuElement; _i < _a.length; _i++) {
            var menuElement = _a[_i];
            var dishArr = [];
            var dish = {};
            for (var _b = 0, _c = menuElement.newMenuSubjects; _b < _c.length; _b++) {
                var menuSubject = _c[_b];
                dish.subject = menuSubject;
            }
            var dishItemArr = [];
            for (var _d = 0, _e = menuElement.newDishes; _d < _e.length; _d++) {
                var menuDishes = _e[_d];
                var dishItem = {};
                dishItem.subject = menuDishes;
                dishItemArr.push(dishItem);
            }
            dish.dishItems = dishItemArr;
            dishArr.push(dish);
            for (var _f = 0, dishArr_1 = dishArr; _f < dishArr_1.length; _f++) {
                var dish_1 = dishArr_1[_f];
                this.newMenu.dishs.push(dish_1);
            }
        }
    };
    AddMenuComponent.prototype.loadMockMenu = function () {
        this.distinctDishes = ["אורז", "אטריות", "דג", "קציצות", "חומוס", "עוף שלם"];
        this.distinctSubjects = ["מנת שף", "עיקרית", "מרק", "סלטים"];
    };
    AddMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-menu',
            template: __webpack_require__(/*! ./add-menu.component.html */ "./src/app/add-menu/add-menu.component.html"),
            styles: [__webpack_require__(/*! ./add-menu.component.css */ "./src/app/add-menu/add-menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_date_picker_date_picker_service__WEBPACK_IMPORTED_MODULE_2__["DatePickerService"],
            src_swaggergenerate_services_menu_rest_controller_service__WEBPACK_IMPORTED_MODULE_3__["MenuRestControllerService"],
            _load_spinner_load_spinner_service__WEBPACK_IMPORTED_MODULE_4__["LoadSpinnerService"],
            _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _error_messages_holder_service__WEBPACK_IMPORTED_MODULE_6__["ErrorMessagesHolderService"]])
    ], AddMenuComponent);
    return AddMenuComponent;
}());



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
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _add_menu_add_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-menu/add-menu.component */ "./src/app/add-menu/add-menu.component.ts");
/* harmony import */ var _add_dishes_add_dishes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-dishes/add-dishes.component */ "./src/app/add-dishes/add-dishes.component.ts");
/* harmony import */ var _show_menu_show_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./show-menu/show-menu.component */ "./src/app/show-menu/show-menu.component.ts");







var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'addDishes', component: _add_dishes_add_dishes_component__WEBPACK_IMPORTED_MODULE_5__["AddDishesComponent"] },
    { path: 'buildMenu', component: _add_menu_add_menu_component__WEBPACK_IMPORTED_MODULE_4__["AddMenuComponent"] },
    { path: 'showMenu', component: _show_menu_show_menu_component__WEBPACK_IMPORTED_MODULE_6__["ShowMenuComponent"] },
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

module.exports = "<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>\r\n<app-error-message-holder></app-error-message-holder>\r\n<app-load-spinner></app-load-spinner>\r\n"

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
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _comments_comments_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comments/comments.component */ "./src/app/comments/comments.component.ts");
/* harmony import */ var _comments_comment_comment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comments/comment/comment.component */ "./src/app/comments/comment/comment.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sign-in/sign-in.component */ "./src/app/sign-in/sign-in.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./material-module */ "./src/app/material-module.ts");
/* harmony import */ var _menu_dish_dish_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./menu/dish/dish.component */ "./src/app/menu/dish/dish.component.ts");
/* harmony import */ var _error_message_holder_error_message_holder_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./error-message-holder/error-message-holder.component */ "./src/app/error-message-holder/error-message-holder.component.ts");
/* harmony import */ var _load_spinner_load_spinner_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./load-spinner/load-spinner.component */ "./src/app/load-spinner/load-spinner.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var src_swaggergenerate_api_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/swaggergenerate/api.module */ "./src/swaggergenerate/api.module.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./date-picker/date-picker.component */ "./src/app/date-picker/date-picker.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _menu_dish_dish_item_dish_item_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./menu/dish/dish-item/dish-item.component */ "./src/app/menu/dish/dish-item/dish-item.component.ts");
/* harmony import */ var _add_menu_add_menu_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./add-menu/add-menu.component */ "./src/app/add-menu/add-menu.component.ts");
/* harmony import */ var _add_menu_add_dish_add_dish_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./add-menu/add-dish/add-dish.component */ "./src/app/add-menu/add-dish/add-dish.component.ts");
/* harmony import */ var _add_menu_add_dish_add_dish_item_add_dish_item_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./add-menu/add-dish/add-dish-item/add-dish-item.component */ "./src/app/add-menu/add-dish/add-dish-item/add-dish-item.component.ts");
/* harmony import */ var _add_dishes_add_dishes_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./add-dishes/add-dishes.component */ "./src/app/add-dishes/add-dishes.component.ts");
/* harmony import */ var _add_dishes_filter_pipe__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./add-dishes/filter.pipe */ "./src/app/add-dishes/filter.pipe.ts");
/* harmony import */ var _show_menu_show_menu_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./show-menu/show-menu.component */ "./src/app/show-menu/show-menu.component.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");





























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _comments_comments_component__WEBPACK_IMPORTED_MODULE_5__["CommentsComponent"],
                _comments_comment_comment_component__WEBPACK_IMPORTED_MODULE_6__["CommentComponent"],
                _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_9__["SignInComponent"],
                _menu_dish_dish_component__WEBPACK_IMPORTED_MODULE_11__["DishComponent"],
                _error_message_holder_error_message_holder_component__WEBPACK_IMPORTED_MODULE_12__["ErrorMessageHolderComponent"],
                _load_spinner_load_spinner_component__WEBPACK_IMPORTED_MODULE_13__["LoadSpinnerComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_14__["MenuComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_15__["NavbarComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"],
                _date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_19__["DatePickerComponent"],
                _menu_dish_dish_item_dish_item_component__WEBPACK_IMPORTED_MODULE_21__["DishItemComponent"],
                _add_menu_add_menu_component__WEBPACK_IMPORTED_MODULE_22__["AddMenuComponent"],
                _add_menu_add_dish_add_dish_component__WEBPACK_IMPORTED_MODULE_23__["AddDishComponent"],
                _add_menu_add_dish_add_dish_item_add_dish_item_component__WEBPACK_IMPORTED_MODULE_24__["AddDishItemComponent"],
                _add_dishes_add_dishes_component__WEBPACK_IMPORTED_MODULE_25__["AddDishesComponent"],
                _add_dishes_filter_pipe__WEBPACK_IMPORTED_MODULE_26__["FilterPipe"],
                _show_menu_show_menu_component__WEBPACK_IMPORTED_MODULE_27__["ShowMenuComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_10__["DemoMaterialModule"],
                src_swaggergenerate_api_module__WEBPACK_IMPORTED_MODULE_16__["ApiModule"].forRoot({ rootUrl: src_environments_environment__WEBPACK_IMPORTED_MODULE_17__["environment"].serverUrl })
            ],
            providers: [
                ngx_cookie_service__WEBPACK_IMPORTED_MODULE_28__["CookieService"],
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_20__["MAT_DATE_LOCALE"], useValue: 'en-GB' },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/comments/comment/comment.component.css":
/*!********************************************************!*\
  !*** ./src/app/comments/comment/comment.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1lbnRzL2NvbW1lbnQvY29tbWVudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/comments/comment/comment.component.html":
/*!*********************************************************!*\
  !*** ./src/app/comments/comment/comment.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"media text-muted pt-3\">\r\n    <img class=\"bd-placeholder-img mr-2 rounded\" width=\"32\" height=\"32\" src=\"{{comment.user?.pictureUrl}}\" />\r\n    <p class=\"media-body pb-3 mb-0 small lh-125 border-bottom border-gray\" dir=\"rtl\">\r\n        <strong class=\"d-block text-gray-dark\">{{comment.user?.name + '(' + comment.user?.email + ')'}}</strong>\r\n        <strong class=\"d-block\">{{comment.subject}}</strong>\r\n        <span style=\"white-space: pre-line\">{{comment.content}}</span>\r\n    </p>\r\n</div>"

/***/ }),

/***/ "./src/app/comments/comment/comment.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/comments/comment/comment.component.ts ***!
  \*******************************************************/
/*! exports provided: CommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentComponent", function() { return CommentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CommentComponent = /** @class */ (function () {
    function CommentComponent() {
    }
    CommentComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CommentComponent.prototype, "comment", void 0);
    CommentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-comment',
            template: __webpack_require__(/*! ./comment.component.html */ "./src/app/comments/comment/comment.component.html"),
            styles: [__webpack_require__(/*! ./comment.component.css */ "./src/app/comments/comment/comment.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CommentComponent);
    return CommentComponent;
}());



/***/ }),

/***/ "./src/app/comments/comments.component.css":
/*!*************************************************!*\
  !*** ./src/app/comments/comments.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1lbnRzL2NvbW1lbnRzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/comments/comments.component.html":
/*!**************************************************!*\
  !*** ./src/app/comments/comments.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <!-- Button trigger modal -->\r\n    <button type=\"button\" class=\"btn btn-warning\" data-toggle=\"modal\" data-target=\"#commentModal\">\r\n        הוסף תגובה\r\n    </button>\r\n    \r\n      <!-- Modal -->\r\n      <div class=\"modal fade\" id=\"commentModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\r\n        <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n          <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n              <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">התגובה שלך</h5>\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"subjectInput\">כותרת</label>\r\n                        <input [(ngModel)]=\"comment.subject\" type=\"text\" class=\"form-control\" id=\"subjectInput\" name=\"first\">\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"contentTextarea\">תוכן</label>\r\n                        <textarea [(ngModel)]=\"comment.content\" class=\"form-control\" id=\"contentTextarea\" rows=\"8\" name=\"sss\"></textarea>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n              <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">ביטול</button>\r\n              <button type=\"button\" class=\"btn btn-primary\" (click)=\"addComment()\">שלח</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    <div [hidden]=\"comments?.length == 0\" class=\"my-3 p-3 bg-white rounded shadow-sm\">\r\n        <h6 class=\"border-bottom border-gray pb-2 mb-0\">תגובות:</h6>\r\n        <app-comment *ngFor=\"let comment of comments; let i = index\" [comment]=\"comment\"></app-comment>\r\n    </div>\r\n    <div [hidden]=\"comments?.length > 0\" class=\"jumbotron\">\r\n      <p class=\"lead\">אין תגובות היום.</p>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/comments/comments.component.ts":
/*!************************************************!*\
  !*** ./src/app/comments/comments.component.ts ***!
  \************************************************/
/*! exports provided: CommentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsComponent", function() { return CommentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_swaggergenerate_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/swaggergenerate/services */ "./src/swaggergenerate/services.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _error_messages_holder_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../error-messages-holder-service */ "./src/app/error-messages-holder-service.ts");
/* harmony import */ var _load_spinner_load_spinner_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../load-spinner/load-spinner-service */ "./src/app/load-spinner/load-spinner-service.ts");
/* harmony import */ var _date_picker_date_picker_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../date-picker/date-picker.service */ "./src/app/date-picker/date-picker.service.ts");







var CommentsComponent = /** @class */ (function () {
    function CommentsComponent(commentRestControllerService, userService, errorMessagesHolderService, loadSpinnerService, datePickerService) {
        var _this = this;
        this.commentRestControllerService = commentRestControllerService;
        this.userService = userService;
        this.errorMessagesHolderService = errorMessagesHolderService;
        this.loadSpinnerService = loadSpinnerService;
        this.datePickerService = datePickerService;
        this.comment = {};
        this.user = null;
        userService.user$.subscribe(function (user) {
            _this.user = user;
        });
    }
    CommentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.datePickerService.date$.subscribe(function (date) {
            _this.date = date;
            _this.loadComments(date);
        });
    };
    CommentsComponent.prototype.loadComments = function (date) {
        var _this = this;
        var dateKey = date.getDate() + '_' + (date.getMonth() + 1) + '_' + date.getFullYear();
        this.loadSpinnerService.addRequestor('loadComments');
        this.commentRestControllerService.getCommentsByDateIdUsingGET(dateKey).subscribe(function (comments) {
            _this.loadSpinnerService.removeRequestor('loadComments');
            _this.comments = comments.reverse();
        }, function (error) {
            _this.loadSpinnerService.removeRequestor('loadComments');
            console.error(error);
        });
    };
    CommentsComponent.prototype.addComment = function () {
        var _this = this;
        var dateKey = this.date.getDate() + '_' + (this.date.getMonth() + 1) + '_' + this.date.getFullYear();
        this.user = this.userService.getUpdatedUser();
        if (this.user == null) {
            this.errorMessagesHolderService.addMessage('בשביל להוסיף תגובה צריך להתחבר');
            return;
        }
        this.comment.dateId = dateKey;
        var addCommentUsingPOSTParams = {
            authTokenId: this.user.tokenId,
            comment: this.comment
        };
        this.loadSpinnerService.addRequestor('addComment');
        this.commentRestControllerService.addCommentUsingPOST(addCommentUsingPOSTParams).subscribe(function (comment) {
            _this.loadComments(_this.date);
            _this.loadSpinnerService.removeRequestor('addComment');
        }, function (error) {
            _this.loadSpinnerService.removeRequestor('addComment');
            console.log(error);
        });
        this.comment = {};
    };
    CommentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-comments',
            template: __webpack_require__(/*! ./comments.component.html */ "./src/app/comments/comments.component.html"),
            styles: [__webpack_require__(/*! ./comments.component.css */ "./src/app/comments/comments.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_swaggergenerate_services__WEBPACK_IMPORTED_MODULE_2__["CommentRestControllerService"],
            _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _error_messages_holder_service__WEBPACK_IMPORTED_MODULE_4__["ErrorMessagesHolderService"],
            _load_spinner_load_spinner_service__WEBPACK_IMPORTED_MODULE_5__["LoadSpinnerService"],
            _date_picker_date_picker_service__WEBPACK_IMPORTED_MODULE_6__["DatePickerService"]])
    ], CommentsComponent);
    return CommentsComponent;
}());



/***/ }),

/***/ "./src/app/date-picker/date-picker.component.css":
/*!*******************************************************!*\
  !*** ./src/app/date-picker/date-picker.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RhdGUtcGlja2VyL2RhdGUtcGlja2VyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/date-picker/date-picker.component.html":
/*!********************************************************!*\
  !*** ./src/app/date-picker/date-picker.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field style=\"margin-right: 30%;\">\r\n  <input (ngModelChange)=\"dateChanged($event)\" [(ngModel)]=\"date\" matInput [matDatepicker]=\"picker\" placeholder=\"תאריך\" disabled>\r\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n  <mat-datepicker #picker disabled=\"false\"></mat-datepicker>\r\n</mat-form-field>"

/***/ }),

/***/ "./src/app/date-picker/date-picker.component.ts":
/*!******************************************************!*\
  !*** ./src/app/date-picker/date-picker.component.ts ***!
  \******************************************************/
/*! exports provided: DatePickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePickerComponent", function() { return DatePickerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _date_picker_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./date-picker.service */ "./src/app/date-picker/date-picker.service.ts");



var DatePickerComponent = /** @class */ (function () {
    function DatePickerComponent(datePickerService) {
        this.datePickerService = datePickerService;
        this.date = new Date();
        this.dateChanged(new Date());
    }
    DatePickerComponent.prototype.ngOnInit = function () {
    };
    DatePickerComponent.prototype.dateChanged = function (date) {
        this.datePickerService.setDate(date);
    };
    DatePickerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-date-picker',
            template: __webpack_require__(/*! ./date-picker.component.html */ "./src/app/date-picker/date-picker.component.html"),
            styles: [__webpack_require__(/*! ./date-picker.component.css */ "./src/app/date-picker/date-picker.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_date_picker_service__WEBPACK_IMPORTED_MODULE_2__["DatePickerService"]])
    ], DatePickerComponent);
    return DatePickerComponent;
}());



/***/ }),

/***/ "./src/app/date-picker/date-picker.service.ts":
/*!****************************************************!*\
  !*** ./src/app/date-picker/date-picker.service.ts ***!
  \****************************************************/
/*! exports provided: DatePickerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePickerService", function() { return DatePickerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var DatePickerService = /** @class */ (function () {
    function DatePickerService() {
        this.date$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    DatePickerService.prototype.setDate = function (date) {
        this.date$.next(date);
    };
    DatePickerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DatePickerService);
    return DatePickerService;
}());



/***/ }),

/***/ "./src/app/error-message-holder/error-message-holder.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/error-message-holder/error-message-holder.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yLW1lc3NhZ2UtaG9sZGVyL2Vycm9yLW1lc3NhZ2UtaG9sZGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/error-message-holder/error-message-holder.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/error-message-holder/error-message-holder.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- The Modal -->\r\n<div class=\"modal\" tabindex=\"-1\" role=\"dialog\" id=\"errorModal\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n      \r\n            <!-- Modal Header -->\r\n            <div class=\"modal-header\">\r\n                <h4 class=\"modal-title\">שגיאה</h4>\r\n            </div>\r\n        \r\n            <!-- Modal body -->\r\n            <div class=\"modal-body\">\r\n                <div *ngFor=\"let errorMessage of errorMessages\" class=\"alert alert-danger\">\r\n                    {{errorMessage}}\r\n                </div>\r\n            </div>\r\n        \r\n            <!-- Modal footer -->\r\n            <div class=\"modal-footer\">\r\n                <button (click)=\"clearMessages()\" type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\r\n            </div>\r\n        \r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/error-message-holder/error-message-holder.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/error-message-holder/error-message-holder.component.ts ***!
  \************************************************************************/
/*! exports provided: ErrorMessageHolderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorMessageHolderComponent", function() { return ErrorMessageHolderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _error_messages_holder_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../error-messages-holder-service */ "./src/app/error-messages-holder-service.ts");



var ErrorMessageHolderComponent = /** @class */ (function () {
    function ErrorMessageHolderComponent(errorMessagesHolderService) {
        var _this = this;
        this.errorMessagesHolderService = errorMessagesHolderService;
        this.errorMessages = [];
        errorMessagesHolderService.getErrorMessagesObs().subscribe(function (errorMessages) {
            _this.errorMessages = errorMessages;
            if (errorMessages.length > 0) {
                _this.show();
            }
            else {
                _this.hide();
            }
        });
    }
    ErrorMessageHolderComponent.prototype.ngOnInit = function () {
    };
    ErrorMessageHolderComponent.prototype.ngOnDestroy = function () {
    };
    ErrorMessageHolderComponent.prototype.clearMessages = function () {
        this.errorMessagesHolderService.clearMessages();
    };
    ErrorMessageHolderComponent.prototype.show = function () {
        $("#errorModal").modal('show');
    };
    ErrorMessageHolderComponent.prototype.hide = function () {
        $("#errorModal").modal('hide');
    };
    ErrorMessageHolderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-error-message-holder',
            template: __webpack_require__(/*! ./error-message-holder.component.html */ "./src/app/error-message-holder/error-message-holder.component.html"),
            styles: [__webpack_require__(/*! ./error-message-holder.component.css */ "./src/app/error-message-holder/error-message-holder.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_error_messages_holder_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesHolderService"]])
    ], ErrorMessageHolderComponent);
    return ErrorMessageHolderComponent;
}());



/***/ }),

/***/ "./src/app/error-messages-holder-service.ts":
/*!**************************************************!*\
  !*** ./src/app/error-messages-holder-service.ts ***!
  \**************************************************/
/*! exports provided: ErrorMessagesHolderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorMessagesHolderService", function() { return ErrorMessagesHolderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var ErrorMessagesHolderService = /** @class */ (function () {
    function ErrorMessagesHolderService() {
        this.errorMessages = [];
        this.errorMessagesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.errorMessagesObs = this.errorMessagesSubject.asObservable();
        this.errorMessagesSubject.next([]);
    }
    ErrorMessagesHolderService.prototype.addMessage = function (message) {
        this.errorMessages.push(message);
        this.errorMessagesSubject.next(this.errorMessages);
    };
    ErrorMessagesHolderService.prototype.addMessages = function (messages) {
        this.errorMessages = this.errorMessages.concat(messages);
        this.errorMessagesSubject.next(this.errorMessages);
    };
    ErrorMessagesHolderService.prototype.clearMessages = function () {
        this.errorMessages = [];
        this.errorMessagesSubject.next(this.errorMessages);
    };
    ErrorMessagesHolderService.prototype.getErrorMessagesObs = function () {
        return this.errorMessagesObs;
    };
    ErrorMessagesHolderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ErrorMessagesHolderService);
    return ErrorMessagesHolderService;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsR0FBRyIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqLyJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-date-picker></app-date-picker>\r\n<app-menu></app-menu>\r\n<app-comments></app-comments>\r\n"

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


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/load-spinner/load-spinner-service.ts":
/*!******************************************************!*\
  !*** ./src/app/load-spinner/load-spinner-service.ts ***!
  \******************************************************/
/*! exports provided: LoadSpinnerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadSpinnerService", function() { return LoadSpinnerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoadSpinnerService = /** @class */ (function () {
    function LoadSpinnerService() {
        this.requestors = [];
    }
    LoadSpinnerService.prototype.addRequestor = function (requestor) {
        this.loadSpinnerComponent.show();
        this.requestors.push(requestor);
    };
    LoadSpinnerService.prototype.removeRequestor = function (requestor) {
        var index = this.requestors.indexOf(requestor);
        if (index > -1) {
            this.requestors.splice(index, 1);
        }
        if (this.requestors.length == 0) {
            this.loadSpinnerComponent.hide();
        }
    };
    LoadSpinnerService.prototype.show = function () {
        this.loadSpinnerComponent.show();
    };
    LoadSpinnerService.prototype.hide = function () {
        this.loadSpinnerComponent.hide();
    };
    LoadSpinnerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoadSpinnerService);
    return LoadSpinnerService;
}());



/***/ }),

/***/ "./src/app/load-spinner/load-spinner.component.css":
/*!*********************************************************!*\
  !*** ./src/app/load-spinner/load-spinner.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loader {\r\n    border: 16px solid #f3f3f3;\r\n    border-radius: 50%;\r\n    border-top: 16px solid #3498db;\r\n    width: 120px;\r\n    height: 120px;\r\n    -webkit-animation: spin 2s linear infinite; /* Safari */\r\n    animation: spin 1s linear infinite;\r\n  }\r\n  \r\n  /* Safari */\r\n  \r\n  @-webkit-keyframes spin {\r\n    0% { -webkit-transform: rotate(0deg); }\r\n    100% { -webkit-transform: rotate(360deg); }\r\n  }\r\n  \r\n  @keyframes spin {\r\n    0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\r\n    100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\r\n  }\r\n  \r\n  .modal {\r\n    top: 50%;\r\n    right: 50%;\r\n    margin-top: -60px;\r\n    margin-right: -60px;\r\n  }\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9hZC1zcGlubmVyL2xvYWQtc3Bpbm5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQiw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLGFBQWE7SUFDYiwwQ0FBMEMsRUFBRSxXQUFXO0lBQ3ZELGtDQUFrQztFQUNwQzs7RUFFQSxXQUFXOztFQUNYO0lBQ0UsS0FBSywrQkFBK0IsRUFBRTtJQUN0QyxPQUFPLGlDQUFpQyxFQUFFO0VBQzVDOztFQUVBO0lBQ0UsS0FBSywrQkFBdUIsRUFBdkIsdUJBQXVCLEVBQUU7SUFDOUIsT0FBTyxpQ0FBeUIsRUFBekIseUJBQXlCLEVBQUU7RUFDcEM7O0VBSUE7SUFDRSxRQUFRO0lBQ1IsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixtQkFBbUI7RUFDckIiLCJmaWxlIjoic3JjL2FwcC9sb2FkLXNwaW5uZXIvbG9hZC1zcGlubmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGVyIHtcclxuICAgIGJvcmRlcjogMTZweCBzb2xpZCAjZjNmM2YzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyLXRvcDogMTZweCBzb2xpZCAjMzQ5OGRiO1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTsgLyogU2FmYXJpICovXHJcbiAgICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xyXG4gIH1cclxuICBcclxuICAvKiBTYWZhcmkgKi9cclxuICBALXdlYmtpdC1rZXlmcmFtZXMgc3BpbiB7XHJcbiAgICAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAgIDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBzcGluIHtcclxuICAgIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIC5tb2RhbCB7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHJpZ2h0OiA1MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAtNjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogLTYwcHg7XHJcbiAgfVxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/load-spinner/load-spinner.component.html":
/*!**********************************************************!*\
  !*** ./src/app/load-spinner/load-spinner.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\" data-backdrop=\"static\" data-keyboard=\"false\" id=\"spinner-modal\">\r\n  <div class=\"loader\"></div>\r\n</div>"

/***/ }),

/***/ "./src/app/load-spinner/load-spinner.component.ts":
/*!********************************************************!*\
  !*** ./src/app/load-spinner/load-spinner.component.ts ***!
  \********************************************************/
/*! exports provided: LoadSpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadSpinnerComponent", function() { return LoadSpinnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _load_spinner_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./load-spinner-service */ "./src/app/load-spinner/load-spinner-service.ts");



var LoadSpinnerComponent = /** @class */ (function () {
    function LoadSpinnerComponent(loadSpinnerService) {
        this.loadSpinnerService = loadSpinnerService;
        loadSpinnerService.loadSpinnerComponent = this;
    }
    LoadSpinnerComponent.prototype.ngOnInit = function () {
    };
    LoadSpinnerComponent.prototype.show = function () {
        $("#spinner-modal").modal('show');
    };
    LoadSpinnerComponent.prototype.hide = function () {
        $("#spinner-modal").modal('hide');
    };
    LoadSpinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-load-spinner',
            template: __webpack_require__(/*! ./load-spinner.component.html */ "./src/app/load-spinner/load-spinner.component.html"),
            styles: [__webpack_require__(/*! ./load-spinner.component.css */ "./src/app/load-spinner/load-spinner.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_load_spinner_service__WEBPACK_IMPORTED_MODULE_2__["LoadSpinnerService"]])
    ], LoadSpinnerComponent);
    return LoadSpinnerComponent;
}());



/***/ }),

/***/ "./src/app/material-module.ts":
/*!************************************!*\
  !*** ./src/app/material-module.ts ***!
  \************************************/
/*! exports provided: DemoMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoMaterialModule", function() { return DemoMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm5/stepper.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");











var DemoMaterialModule = /** @class */ (function () {
    function DemoMaterialModule() {
    }
    DemoMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"])({
            exports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
                _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__["CdkStepperModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTreeModule"],
                _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollingModule"],
            ]
        })
    ], DemoMaterialModule);
    return DemoMaterialModule;
}());

/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */ 


/***/ }),

/***/ "./src/app/menu/dish/dish-item/dish-item.component.css":
/*!*************************************************************!*\
  !*** ./src/app/menu/dish/dish-item/dish-item.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUvZGlzaC9kaXNoLWl0ZW0vZGlzaC1pdGVtLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/menu/dish/dish-item/dish-item.component.html":
/*!**************************************************************!*\
  !*** ./src/app/menu/dish/dish-item/dish-item.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p><strong>{{dishitem?.subject}}</strong> - {{dishitem?.content}}</p>\r\n"

/***/ }),

/***/ "./src/app/menu/dish/dish-item/dish-item.component.ts":
/*!************************************************************!*\
  !*** ./src/app/menu/dish/dish-item/dish-item.component.ts ***!
  \************************************************************/
/*! exports provided: DishItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DishItemComponent", function() { return DishItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DishItemComponent = /** @class */ (function () {
    function DishItemComponent() {
    }
    DishItemComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DishItemComponent.prototype, "dishitem", void 0);
    DishItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dish-item',
            template: __webpack_require__(/*! ./dish-item.component.html */ "./src/app/menu/dish/dish-item/dish-item.component.html"),
            styles: [__webpack_require__(/*! ./dish-item.component.css */ "./src/app/menu/dish/dish-item/dish-item.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DishItemComponent);
    return DishItemComponent;
}());



/***/ }),

/***/ "./src/app/menu/dish/dish.component.css":
/*!**********************************************!*\
  !*** ./src/app/menu/dish/dish.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUvZGlzaC9kaXNoLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/menu/dish/dish.component.html":
/*!***********************************************!*\
  !*** ./src/app/menu/dish/dish.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>{{dish.subject}}</h4>\r\n<app-dish-item *ngFor=\"let dishitem of dish?.dishItems; let i = index\" [dishitem]=\"dishitem\"></app-dish-item>\r\n"

/***/ }),

/***/ "./src/app/menu/dish/dish.component.ts":
/*!*********************************************!*\
  !*** ./src/app/menu/dish/dish.component.ts ***!
  \*********************************************/
/*! exports provided: DishComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DishComponent", function() { return DishComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DishComponent = /** @class */ (function () {
    function DishComponent() {
    }
    DishComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DishComponent.prototype, "dish", void 0);
    DishComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dish',
            template: __webpack_require__(/*! ./dish.component.html */ "./src/app/menu/dish/dish.component.html"),
            styles: [__webpack_require__(/*! ./dish.component.css */ "./src/app/menu/dish/dish.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DishComponent);
    return DishComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\t<p>\r\n  <app-dish class=\"container\" *ngFor=\"let dish of menu?.dishs; let i = index\"  [dish]=\"dish\"></app-dish>\r\n</div>"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_swaggergenerate_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/swaggergenerate/services */ "./src/swaggergenerate/services.ts");
/* harmony import */ var _date_picker_date_picker_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../date-picker/date-picker.service */ "./src/app/date-picker/date-picker.service.ts");
/* harmony import */ var _load_spinner_load_spinner_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../load-spinner/load-spinner-service */ "./src/app/load-spinner/load-spinner-service.ts");





var MenuComponent = /** @class */ (function () {
    function MenuComponent(menuRestControllerService, datePickerService, loadSpinnerService) {
        this.menuRestControllerService = menuRestControllerService;
        this.datePickerService = datePickerService;
        this.loadSpinnerService = loadSpinnerService;
    }
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.datePickerService.date$.subscribe(function (date) {
            _this.loadMenu(date);
        });
    };
    MenuComponent.prototype.loadMenu = function (date) {
        var _this = this;
        var dateKey = date.getDate() + '_' + (date.getMonth() + 1) + '_' + date.getFullYear();
        this.loadSpinnerService.addRequestor('loadMenu');
        this.menuRestControllerService.getMenusUsingGET(dateKey).subscribe(function (menu) {
            _this.loadSpinnerService.removeRequestor('loadMenu');
            _this.menu = menu;
        }, function (error) {
            _this.loadSpinnerService.removeRequestor('loadMenu');
        });
    };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_swaggergenerate_services__WEBPACK_IMPORTED_MODULE_2__["MenuRestControllerService"],
            _date_picker_date_picker_service__WEBPACK_IMPORTED_MODULE_3__["DatePickerService"],
            _load_spinner_load_spinner_service__WEBPACK_IMPORTED_MODULE_4__["LoadSpinnerService"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav [hidden]=\"!navbarToggleData?.isToShowNavBar\" class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\r\n  <a class=\"navbar-brand\" href=\"#\">מלכה פלוס</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor02\" aria-controls=\"navbarColor02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarColor02\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/home\" routerLinkActive=\"active\">ראשי</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/addDishes\" routerLinkActive=\"active\">הוספת מנות</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/buildMenu\" routerLinkActive=\"active\">בניית תפריט</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/showMenu\" routerLinkActive=\"active\">הצג תפריט</a>\r\n      </li>\r\n    </ul>\r\n    <form class=\"form-inline\">\r\n      <app-sign-in></app-sign-in>\r\n    </form>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _navbar_toggle_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar.toggle.service */ "./src/app/navbar/navbar.toggle.service.ts");



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(navbarToggleService) {
        this.navbarToggleService = navbarToggleService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.navbarToggleData = this.navbarToggleService.data;
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_navbar_toggle_service__WEBPACK_IMPORTED_MODULE_2__["NavbarToggleService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.toggle.service.ts":
/*!*************************************************!*\
  !*** ./src/app/navbar/navbar.toggle.service.ts ***!
  \*************************************************/
/*! exports provided: NavbarToggleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarToggleService", function() { return NavbarToggleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarToggleService = /** @class */ (function () {
    function NavbarToggleService() {
        this.data = {
            isToShowNavBar: true
        };
    }
    NavbarToggleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarToggleService);
    return NavbarToggleService;
}());



/***/ }),

/***/ "./src/app/show-menu/show-menu.component.css":
/*!***************************************************!*\
  !*** ./src/app/show-menu/show-menu.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3ctbWVudS9zaG93LW1lbnUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/show-menu/show-menu.component.html":
/*!****************************************************!*\
  !*** ./src/app/show-menu/show-menu.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"contentWithImage\" style=\"background-size: cover; width: 100%; height: 100%; \">\r\n    <div class=\"container\" style=\"padding-top: 100px;\">\r\n        <div class=\"row\">\r\n            <div *ngFor=\"let dish of menu?.dishs; let i = index\" class=\"col-4\">\r\n                <h4 [style.color]=\"headlineColor\">{{dish.subject}}</h4>\r\n                <div *ngFor=\"let dishitem of dish?.dishItems; let i = index\">\r\n                    <p [style.color]=\"contentColor\"><strong>{{dishitem?.subject}}</strong></p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<input type=\"file\" (change)=\"previewFile($event)\"><br>\r\n<label>צבע כותרת</label><br>\r\n<input type=\"color\" id=\"headlineColor\" (change)=\"headlineColorChange($event)\" value=\"#ff0000\" ><br>\r\n<label>צבע תוכן</label><br>\r\n<input type=\"color\" id=\"contentColor\" (change)=\"contentColorChange($event)\" value=\"#ff0000\" >\r\n"

/***/ }),

/***/ "./src/app/show-menu/show-menu.component.ts":
/*!**************************************************!*\
  !*** ./src/app/show-menu/show-menu.component.ts ***!
  \**************************************************/
/*! exports provided: ShowMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowMenuComponent", function() { return ShowMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _navbar_navbar_toggle_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../navbar/navbar.toggle.service */ "./src/app/navbar/navbar.toggle.service.ts");
/* harmony import */ var _load_spinner_load_spinner_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../load-spinner/load-spinner-service */ "./src/app/load-spinner/load-spinner-service.ts");
/* harmony import */ var src_swaggergenerate_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/swaggergenerate/services */ "./src/swaggergenerate/services.ts");





var ShowMenuComponent = /** @class */ (function () {
    function ShowMenuComponent(navbarToggleService, loadSpinnerService, menuRestControllerService) {
        this.navbarToggleService = navbarToggleService;
        this.loadSpinnerService = loadSpinnerService;
        this.menuRestControllerService = menuRestControllerService;
    }
    ShowMenuComponent.prototype.ngOnDestroy = function () {
        this.navbarToggleService.data.isToShowNavBar = true;
    };
    ShowMenuComponent.prototype.ngAfterViewInit = function () {
        var div = document.getElementById('contentWithImage');
        div.style.backgroundImage = "url(" + localStorage.getItem('imageResult') + ")";
        this.contentColor = localStorage.getItem('contentColor');
        this.headlineColor = localStorage.getItem('headlineColor');
    };
    ShowMenuComponent.prototype.ngOnInit = function () {
        this.navbarToggleService.data.isToShowNavBar = false;
        this.loadMenu(new Date());
    };
    ShowMenuComponent.prototype.previewFile = function (event) {
        var div = document.getElementById('contentWithImage');
        var file = event.target.files[0];
        var reader = new FileReader();
        reader.addEventListener("load", function () {
            div.style.backgroundImage = "url(" + reader.result + ")";
            localStorage.setItem('imageResult', reader.result);
        }, false);
        if (file) {
            reader.readAsDataURL(file);
        }
    };
    ShowMenuComponent.prototype.headlineColorChange = function (event) {
        localStorage.setItem('headlineColor', event.target.value);
        this.headlineColor = event.target.value;
    };
    ShowMenuComponent.prototype.contentColorChange = function (event) {
        localStorage.setItem('contentColor', event.target.value);
        this.contentColor = event.target.value;
    };
    ShowMenuComponent.prototype.loadMenu = function (date) {
        var _this = this;
        var dateKey = date.getDate() + '_' + (date.getMonth() + 1) + '_' + date.getFullYear();
        this.loadSpinnerService.addRequestor('loadMenu');
        this.menuRestControllerService.getMenusUsingGET(dateKey).subscribe(function (menu) {
            _this.loadSpinnerService.removeRequestor('loadMenu');
            _this.menu = menu;
            _this.menu.dishs.splice(2, 0, {});
        }, function (error) {
            _this.loadSpinnerService.removeRequestor('loadMenu');
        });
    };
    ShowMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-show-menu',
            template: __webpack_require__(/*! ./show-menu.component.html */ "./src/app/show-menu/show-menu.component.html"),
            styles: [__webpack_require__(/*! ./show-menu.component.css */ "./src/app/show-menu/show-menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_navbar_navbar_toggle_service__WEBPACK_IMPORTED_MODULE_2__["NavbarToggleService"],
            _load_spinner_load_spinner_service__WEBPACK_IMPORTED_MODULE_3__["LoadSpinnerService"],
            src_swaggergenerate_services__WEBPACK_IMPORTED_MODULE_4__["MenuRestControllerService"]])
    ], ShowMenuComponent);
    return ShowMenuComponent;
}());



/***/ }),

/***/ "./src/app/sign-in/sign-in.component.css":
/*!***********************************************!*\
  !*** ./src/app/sign-in/sign-in.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ24taW4vc2lnbi1pbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/sign-in/sign-in.component.html":
/*!************************************************!*\
  !*** ./src/app/sign-in/sign-in.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form-inline\">\r\n    <button class=\"btn btn-success\" id=\"googleBtn\" [hidden]=\"isSignIn\">התחבר ע\"י גוגל</button>\r\n    <label class=\"text-light\" [hidden]=\"!isSignIn\">שלום {{user?.givenName}}</label>\r\n    <button class=\"btn btn-outline-light my-2 my-sm-0\" id=\"disconnect\" (click)=\"signOut()\" [hidden]=\"!isSignIn\">התנתק</button>\r\n</form>"

/***/ }),

/***/ "./src/app/sign-in/sign-in.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sign-in/sign-in.component.ts ***!
  \**********************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");



var SignInComponent = /** @class */ (function () {
    function SignInComponent(userService, ngZone) {
        var _this = this;
        this.userService = userService;
        this.ngZone = ngZone;
        this.isSignIn = false;
        this.userService.user$.subscribe(function (user) {
            ngZone.run(function () {
                _this.user = user;
                if (user == null) {
                    _this.isSignIn = false;
                }
                else {
                    _this.isSignIn = true;
                }
            });
        });
    }
    SignInComponent.prototype.ngOnInit = function () {
    };
    SignInComponent.prototype.ngAfterViewInit = function () {
        this.userService.googleInit(document.getElementById("googleBtn"));
    };
    SignInComponent.prototype.signOut = function () {
        this.userService.signOut();
    };
    SignInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sign-in',
            template: __webpack_require__(/*! ./sign-in.component.html */ "./src/app/sign-in/sign-in.component.html"),
            styles: [__webpack_require__(/*! ./sign-in.component.css */ "./src/app/sign-in/sign-in.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var UserService = /** @class */ (function () {
    function UserService() {
        this.scope = [
            'profile',
            'email'
        ].join(' ');
        this.clientId = '795668388432-7lor70m45089bapr51bng6t14003g4hc.apps.googleusercontent.com';
        this.user$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    UserService.prototype.getUpdatedUser = function () {
        if (this.auth2.isSignedIn.get()) {
            var googleUser = this.auth2.currentUser.get();
            return this.handleGoogleUser(googleUser);
        }
    };
    UserService.prototype.setUser = function (user) {
        this.user$.next(user);
    };
    UserService.prototype.unsetUser = function () {
        this.user$.next(null);
    };
    UserService.prototype.googleInit = function (element) {
        var _this = this;
        var that = this;
        gapi.load('auth2', function () {
            gapi.auth2.init({
                client_id: that.clientId,
                cookiepolicy: 'single_host_origin',
                scope: that.scope
            }).then(function () {
                _this.auth2 = gapi.auth2.getAuthInstance();
                if (element != undefined) {
                    that.attachSignin(element);
                }
                if (_this.auth2.isSignedIn.get()) {
                    var googleUser = _this.auth2.currentUser.get();
                    _this.handleGoogleUser(googleUser);
                }
            });
        });
    };
    UserService.prototype.handleGoogleUser = function (googleUser) {
        var profile = googleUser.getBasicProfile();
        var user = {
            email: profile.getEmail(),
            familyName: profile.getFamilyName(),
            givenName: profile.getGivenName(),
            id: profile.getId(),
            imageUrl: profile.getImageUrl(),
            name: profile.getName(),
            tokenId: googleUser.getAuthResponse().id_token
        };
        this.setUser(user);
        return user;
    };
    UserService.prototype.attachSignin = function (element) {
        var _this = this;
        this.auth2.attachClickHandler(element, {}, function (googleUser) {
            _this.handleGoogleUser(googleUser);
        }, function (error) {
            console.log(JSON.stringify(error, undefined, 2));
        });
    };
    UserService.prototype.signOut = function () {
        var _this = this;
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
            _this.unsetUser();
            console.log('User signed out.');
        });
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserService);
    return UserService;
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
    production: false,
    serverUrl: '//localhost:8080'
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

/***/ "./src/swaggergenerate/api-configuration.ts":
/*!**************************************************!*\
  !*** ./src/swaggergenerate/api-configuration.ts ***!
  \**************************************************/
/*! exports provided: ApiConfiguration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiConfiguration", function() { return ApiConfiguration; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/* tslint:disable */

/**
 * Global configuration for Api services
 */
var ApiConfiguration = /** @class */ (function () {
    function ApiConfiguration() {
        this.rootUrl = '//localhost:8080';
    }
    ApiConfiguration = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        })
    ], ApiConfiguration);
    return ApiConfiguration;
}());



/***/ }),

/***/ "./src/swaggergenerate/api.module.ts":
/*!*******************************************!*\
  !*** ./src/swaggergenerate/api.module.ts ***!
  \*******************************************/
/*! exports provided: ApiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiModule", function() { return ApiModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api-configuration */ "./src/swaggergenerate/api-configuration.ts");
/* harmony import */ var _services_application_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/application.service */ "./src/swaggergenerate/services/application.service.ts");
/* harmony import */ var _services_menu_rest_controller_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/menu-rest-controller.service */ "./src/swaggergenerate/services/menu-rest-controller.service.ts");
/* harmony import */ var _services_comment_rest_controller_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/comment-rest-controller.service */ "./src/swaggergenerate/services/comment-rest-controller.service.ts");
/* harmony import */ var _services_dish_rest_controller_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/dish-rest-controller.service */ "./src/swaggergenerate/services/dish-rest-controller.service.ts");
/* harmony import */ var _services_basic_error_controller_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/basic-error-controller.service */ "./src/swaggergenerate/services/basic-error-controller.service.ts");
/* harmony import */ var _services_user_rest_controller_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/user-rest-controller.service */ "./src/swaggergenerate/services/user-rest-controller.service.ts");

/* tslint:disable */









/**
 * Provider for all Api services, plus ApiConfiguration
 */
var ApiModule = /** @class */ (function () {
    function ApiModule() {
    }
    ApiModule_1 = ApiModule;
    ApiModule.forRoot = function (customParams) {
        return {
            ngModule: ApiModule_1,
            providers: [
                {
                    provide: _api_configuration__WEBPACK_IMPORTED_MODULE_3__["ApiConfiguration"],
                    useValue: { rootUrl: customParams.rootUrl }
                }
            ]
        };
    };
    var ApiModule_1;
    ApiModule = ApiModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
            ],
            exports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
            ],
            declarations: [],
            providers: [
                _api_configuration__WEBPACK_IMPORTED_MODULE_3__["ApiConfiguration"],
                _services_application_service__WEBPACK_IMPORTED_MODULE_4__["ApplicationService"],
                _services_menu_rest_controller_service__WEBPACK_IMPORTED_MODULE_5__["MenuRestControllerService"],
                _services_comment_rest_controller_service__WEBPACK_IMPORTED_MODULE_6__["CommentRestControllerService"],
                _services_dish_rest_controller_service__WEBPACK_IMPORTED_MODULE_7__["DishRestControllerService"],
                _services_basic_error_controller_service__WEBPACK_IMPORTED_MODULE_8__["BasicErrorControllerService"],
                _services_user_rest_controller_service__WEBPACK_IMPORTED_MODULE_9__["UserRestControllerService"]
            ],
        })
    ], ApiModule);
    return ApiModule;
}());



/***/ }),

/***/ "./src/swaggergenerate/base-service.ts":
/*!*********************************************!*\
  !*** ./src/swaggergenerate/base-service.ts ***!
  \*********************************************/
/*! exports provided: BaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseService", function() { return BaseService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* tslint:disable */

/**
 * Custom parameter codec to correctly handle the plus sign in parameter
 * values. See https://github.com/angular/angular/issues/18261
 */
var ParameterCodec = /** @class */ (function () {
    function ParameterCodec() {
    }
    ParameterCodec.prototype.encodeKey = function (key) {
        return encodeURIComponent(key);
    };
    ParameterCodec.prototype.encodeValue = function (value) {
        return encodeURIComponent(value);
    };
    ParameterCodec.prototype.decodeKey = function (key) {
        return decodeURIComponent(key);
    };
    ParameterCodec.prototype.decodeValue = function (value) {
        return decodeURIComponent(value);
    };
    return ParameterCodec;
}());
var PARAMETER_CODEC = new ParameterCodec();
/**
 * Base class for API services
 */
var BaseService = /** @class */ (function () {
    function BaseService(config, http) {
        this.config = config;
        this.http = http;
        this._rootUrl = '';
    }
    Object.defineProperty(BaseService.prototype, "rootUrl", {
        /**
         * Returns the root url for API operations. If not set directly in this
         * service, will fallback to ApiConfiguration.rootUrl.
         */
        get: function () {
            return this._rootUrl || this.config.rootUrl;
        },
        /**
         * Sets the root URL for API operations in this service.
         */
        set: function (rootUrl) {
            this._rootUrl = rootUrl;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Creates a new `HttpParams` with the correct codec
     */
    BaseService.prototype.newParams = function () {
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]({
            encoder: PARAMETER_CODEC
        });
    };
    return BaseService;
}());



/***/ }),

/***/ "./src/swaggergenerate/services.ts":
/*!*****************************************!*\
  !*** ./src/swaggergenerate/services.ts ***!
  \*****************************************/
/*! exports provided: ApplicationService, MenuRestControllerService, CommentRestControllerService, DishRestControllerService, BasicErrorControllerService, UserRestControllerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_application_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/application.service */ "./src/swaggergenerate/services/application.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApplicationService", function() { return _services_application_service__WEBPACK_IMPORTED_MODULE_0__["ApplicationService"]; });

/* harmony import */ var _services_menu_rest_controller_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/menu-rest-controller.service */ "./src/swaggergenerate/services/menu-rest-controller.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MenuRestControllerService", function() { return _services_menu_rest_controller_service__WEBPACK_IMPORTED_MODULE_1__["MenuRestControllerService"]; });

/* harmony import */ var _services_comment_rest_controller_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/comment-rest-controller.service */ "./src/swaggergenerate/services/comment-rest-controller.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommentRestControllerService", function() { return _services_comment_rest_controller_service__WEBPACK_IMPORTED_MODULE_2__["CommentRestControllerService"]; });

/* harmony import */ var _services_dish_rest_controller_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/dish-rest-controller.service */ "./src/swaggergenerate/services/dish-rest-controller.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DishRestControllerService", function() { return _services_dish_rest_controller_service__WEBPACK_IMPORTED_MODULE_3__["DishRestControllerService"]; });

/* harmony import */ var _services_basic_error_controller_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/basic-error-controller.service */ "./src/swaggergenerate/services/basic-error-controller.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BasicErrorControllerService", function() { return _services_basic_error_controller_service__WEBPACK_IMPORTED_MODULE_4__["BasicErrorControllerService"]; });

/* harmony import */ var _services_user_rest_controller_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/user-rest-controller.service */ "./src/swaggergenerate/services/user-rest-controller.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserRestControllerService", function() { return _services_user_rest_controller_service__WEBPACK_IMPORTED_MODULE_5__["UserRestControllerService"]; });









/***/ }),

/***/ "./src/swaggergenerate/services/application.service.ts":
/*!*************************************************************!*\
  !*** ./src/swaggergenerate/services/application.service.ts ***!
  \*************************************************************/
/*! exports provided: ApplicationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationService", function() { return ApplicationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-service */ "./src/swaggergenerate/base-service.ts");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-configuration */ "./src/swaggergenerate/api-configuration.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

/* tslint:disable */





/**
 * Application
 */
var ApplicationService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ApplicationService, _super);
    function ApplicationService(config, http) {
        return _super.call(this, config, http) || this;
    }
    /**
     * @return OK
     */
    ApplicationService.prototype.hellowUsingGETResponse = function () {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/", __body, {
            headers: __headers,
            params: __params,
            responseType: 'text'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * @return OK
     */
    ApplicationService.prototype.hellowUsingGET = function () {
        return this.hellowUsingGETResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    ApplicationService.hellowUsingGETPath = '/';
    ApplicationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApplicationService);
    return ApplicationService;
}(_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/swaggergenerate/services/basic-error-controller.service.ts":
/*!************************************************************************!*\
  !*** ./src/swaggergenerate/services/basic-error-controller.service.ts ***!
  \************************************************************************/
/*! exports provided: BasicErrorControllerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicErrorControllerService", function() { return BasicErrorControllerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-service */ "./src/swaggergenerate/base-service.ts");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-configuration */ "./src/swaggergenerate/api-configuration.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

/* tslint:disable */





/**
 * Basic Error Controller
 */
var BasicErrorControllerService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](BasicErrorControllerService, _super);
    function BasicErrorControllerService(config, http) {
        return _super.call(this, config, http) || this;
    }
    /**
     * @return OK
     */
    BasicErrorControllerService.prototype.errorHtmlUsingGETResponse = function () {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/error", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * @return OK
     */
    BasicErrorControllerService.prototype.errorHtmlUsingGET = function () {
        return this.errorHtmlUsingGETResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * @return OK
     */
    BasicErrorControllerService.prototype.errorHtmlUsingHEADResponse = function () {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('HEAD', this.rootUrl + "/error", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * @return OK
     */
    BasicErrorControllerService.prototype.errorHtmlUsingHEAD = function () {
        return this.errorHtmlUsingHEADResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * @return OK
     */
    BasicErrorControllerService.prototype.errorHtmlUsingPOSTResponse = function () {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/error", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * @return OK
     */
    BasicErrorControllerService.prototype.errorHtmlUsingPOST = function () {
        return this.errorHtmlUsingPOSTResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * @return OK
     */
    BasicErrorControllerService.prototype.errorHtmlUsingPUTResponse = function () {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('PUT', this.rootUrl + "/error", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * @return OK
     */
    BasicErrorControllerService.prototype.errorHtmlUsingPUT = function () {
        return this.errorHtmlUsingPUTResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * @return OK
     */
    BasicErrorControllerService.prototype.errorHtmlUsingDELETEResponse = function () {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('DELETE', this.rootUrl + "/error", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * @return OK
     */
    BasicErrorControllerService.prototype.errorHtmlUsingDELETE = function () {
        return this.errorHtmlUsingDELETEResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * @return OK
     */
    BasicErrorControllerService.prototype.errorHtmlUsingOPTIONSResponse = function () {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('OPTIONS', this.rootUrl + "/error", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * @return OK
     */
    BasicErrorControllerService.prototype.errorHtmlUsingOPTIONS = function () {
        return this.errorHtmlUsingOPTIONSResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * @return OK
     */
    BasicErrorControllerService.prototype.errorHtmlUsingPATCHResponse = function () {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('PATCH', this.rootUrl + "/error", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * @return OK
     */
    BasicErrorControllerService.prototype.errorHtmlUsingPATCH = function () {
        return this.errorHtmlUsingPATCHResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    BasicErrorControllerService.errorHtmlUsingGETPath = '/error';
    BasicErrorControllerService.errorHtmlUsingHEADPath = '/error';
    BasicErrorControllerService.errorHtmlUsingPOSTPath = '/error';
    BasicErrorControllerService.errorHtmlUsingPUTPath = '/error';
    BasicErrorControllerService.errorHtmlUsingDELETEPath = '/error';
    BasicErrorControllerService.errorHtmlUsingOPTIONSPath = '/error';
    BasicErrorControllerService.errorHtmlUsingPATCHPath = '/error';
    BasicErrorControllerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], BasicErrorControllerService);
    return BasicErrorControllerService;
}(_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/swaggergenerate/services/comment-rest-controller.service.ts":
/*!*************************************************************************!*\
  !*** ./src/swaggergenerate/services/comment-rest-controller.service.ts ***!
  \*************************************************************************/
/*! exports provided: CommentRestControllerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentRestControllerService", function() { return CommentRestControllerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-service */ "./src/swaggergenerate/base-service.ts");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-configuration */ "./src/swaggergenerate/api-configuration.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

/* tslint:disable */





/**
 * Comment Rest Controller
 */
var CommentRestControllerService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CommentRestControllerService, _super);
    function CommentRestControllerService(config, http) {
        return _super.call(this, config, http) || this;
    }
    /**
     * @return OK
     */
    CommentRestControllerService.prototype.getCommentsUsingGETResponse = function () {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/comments", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * @return OK
     */
    CommentRestControllerService.prototype.getCommentsUsingGET = function () {
        return this.getCommentsUsingGETResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * @param params The `CommentRestControllerService.AddCommentUsingPOSTParams` containing the following parameters:
     *
     * - `comment`: comment
     *
     * - `authTokenId`: authTokenId
     *
     * @return OK
     */
    CommentRestControllerService.prototype.addCommentUsingPOSTResponse = function (params) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = params.comment;
        if (params.authTokenId != null)
            __headers = __headers.set('authTokenId', params.authTokenId.toString());
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/comments", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * @param params The `CommentRestControllerService.AddCommentUsingPOSTParams` containing the following parameters:
     *
     * - `comment`: comment
     *
     * - `authTokenId`: authTokenId
     *
     * @return OK
     */
    CommentRestControllerService.prototype.addCommentUsingPOST = function (params) {
        return this.addCommentUsingPOSTResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * @param dateId dateId
     * @return OK
     */
    CommentRestControllerService.prototype.getCommentsByDateIdUsingGETResponse = function (dateId) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + ("/comments/dateId/" + dateId), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * @param dateId dateId
     * @return OK
     */
    CommentRestControllerService.prototype.getCommentsByDateIdUsingGET = function (dateId) {
        return this.getCommentsByDateIdUsingGETResponse(dateId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    CommentRestControllerService.getCommentsUsingGETPath = '/comments';
    CommentRestControllerService.addCommentUsingPOSTPath = '/comments';
    CommentRestControllerService.getCommentsByDateIdUsingGETPath = '/comments/dateId/{dateId}';
    CommentRestControllerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CommentRestControllerService);
    return CommentRestControllerService;
}(_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/swaggergenerate/services/dish-rest-controller.service.ts":
/*!**********************************************************************!*\
  !*** ./src/swaggergenerate/services/dish-rest-controller.service.ts ***!
  \**********************************************************************/
/*! exports provided: DishRestControllerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DishRestControllerService", function() { return DishRestControllerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-service */ "./src/swaggergenerate/base-service.ts");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-configuration */ "./src/swaggergenerate/api-configuration.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

/* tslint:disable */





/**
 * Dish Rest Controller
 */
var DishRestControllerService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DishRestControllerService, _super);
    function DishRestControllerService(config, http) {
        return _super.call(this, config, http) || this;
    }
    /**
     * @return OK
     */
    DishRestControllerService.prototype.getDishesUsingGETResponse = function () {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/dishes", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * @return OK
     */
    DishRestControllerService.prototype.getDishesUsingGET = function () {
        return this.getDishesUsingGETResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * @param dish dish
     * @return OK
     */
    DishRestControllerService.prototype.addDishUsingPOSTResponse = function (dish) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = dish;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/dishes", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * @param dish dish
     * @return OK
     */
    DishRestControllerService.prototype.addDishUsingPOST = function (dish) {
        return this.addDishUsingPOSTResponse(dish).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    DishRestControllerService.getDishesUsingGETPath = '/dishes';
    DishRestControllerService.addDishUsingPOSTPath = '/dishes';
    DishRestControllerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DishRestControllerService);
    return DishRestControllerService;
}(_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/swaggergenerate/services/menu-rest-controller.service.ts":
/*!**********************************************************************!*\
  !*** ./src/swaggergenerate/services/menu-rest-controller.service.ts ***!
  \**********************************************************************/
/*! exports provided: MenuRestControllerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuRestControllerService", function() { return MenuRestControllerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-service */ "./src/swaggergenerate/base-service.ts");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-configuration */ "./src/swaggergenerate/api-configuration.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

/* tslint:disable */





/**
 * Menu Rest Controller
 */
var MenuRestControllerService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MenuRestControllerService, _super);
    function MenuRestControllerService(config, http) {
        return _super.call(this, config, http) || this;
    }
    /**
     * @return OK
     */
    MenuRestControllerService.prototype.getDistinctDishesUsingGETResponse = function () {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/DistinctDishes", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * @return OK
     */
    MenuRestControllerService.prototype.getDistinctDishesUsingGET = function () {
        return this.getDistinctDishesUsingGETResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * @return OK
     */
    MenuRestControllerService.prototype.getDistinctSubjectsUsingGETResponse = function () {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/DistinctSubjects", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * @return OK
     */
    MenuRestControllerService.prototype.getDistinctSubjectsUsingGET = function () {
        return this.getDistinctSubjectsUsingGETResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * @return OK
     */
    MenuRestControllerService.prototype.getMenusUsingGET1Response = function () {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/menus", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * @return OK
     */
    MenuRestControllerService.prototype.getMenusUsingGET1 = function () {
        return this.getMenusUsingGET1Response().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * @param params The `MenuRestControllerService.AddMenuUsingPOSTParams` containing the following parameters:
     *
     * - `menu`: menu
     *
     * - `authTokenId`: authTokenId
     *
     * @return OK
     */
    MenuRestControllerService.prototype.addMenuUsingPOSTResponse = function (params) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = params.menu;
        if (params.authTokenId != null)
            __headers = __headers.set('authTokenId', params.authTokenId.toString());
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/menus", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * @param params The `MenuRestControllerService.AddMenuUsingPOSTParams` containing the following parameters:
     *
     * - `menu`: menu
     *
     * - `authTokenId`: authTokenId
     *
     * @return OK
     */
    MenuRestControllerService.prototype.addMenuUsingPOST = function (params) {
        return this.addMenuUsingPOSTResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * @param id id
     * @return OK
     */
    MenuRestControllerService.prototype.getMenusUsingGETResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + ("/menus/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * @param id id
     * @return OK
     */
    MenuRestControllerService.prototype.getMenusUsingGET = function (id) {
        return this.getMenusUsingGETResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    MenuRestControllerService.getDistinctDishesUsingGETPath = '/DistinctDishes';
    MenuRestControllerService.getDistinctSubjectsUsingGETPath = '/DistinctSubjects';
    MenuRestControllerService.getMenusUsingGET1Path = '/menus';
    MenuRestControllerService.addMenuUsingPOSTPath = '/menus';
    MenuRestControllerService.getMenusUsingGETPath = '/menus/{id}';
    MenuRestControllerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MenuRestControllerService);
    return MenuRestControllerService;
}(_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/swaggergenerate/services/user-rest-controller.service.ts":
/*!**********************************************************************!*\
  !*** ./src/swaggergenerate/services/user-rest-controller.service.ts ***!
  \**********************************************************************/
/*! exports provided: UserRestControllerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRestControllerService", function() { return UserRestControllerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-service */ "./src/swaggergenerate/base-service.ts");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-configuration */ "./src/swaggergenerate/api-configuration.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

/* tslint:disable */





/**
 * User Rest Controller
 */
var UserRestControllerService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UserRestControllerService, _super);
    function UserRestControllerService(config, http) {
        return _super.call(this, config, http) || this;
    }
    /**
     * @param authTokenId authTokenId
     */
    UserRestControllerService.prototype.addUserUsingPOSTResponse = function (authTokenId) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        if (authTokenId != null)
            __headers = __headers.set('authTokenId', authTokenId.toString());
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/users", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * @param authTokenId authTokenId
     */
    UserRestControllerService.prototype.addUserUsingPOST = function (authTokenId) {
        return this.addUserUsingPOSTResponse(authTokenId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    UserRestControllerService.addUserUsingPOSTPath = '/users';
    UserRestControllerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserRestControllerService);
    return UserRestControllerService;
}(_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! c:\GitHub\malkaplus\clnt\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map