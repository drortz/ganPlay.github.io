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
/* harmony import */ var _games_counting_intro_counting_intro_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./games/counting-intro/counting-intro.component */ "./src/app/games/counting-intro/counting-intro.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _games_counting_counting_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./games/counting/counting.component */ "./src/app/games/counting/counting.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");






var routes = [
    { path: 'counting/:id', component: _games_counting_counting_component__WEBPACK_IMPORTED_MODULE_4__["CountingComponent"] },
    { path: 'counting', component: _games_counting_intro_counting_intro_component__WEBPACK_IMPORTED_MODULE_1__["CountingIntroComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: '**', redirectTo: '/home', pathMatch: 'full' },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
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

module.exports = "<app-nav-bar></app-nav-bar>\n<router-outlet></router-outlet>\n"

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
        this.title = 'GanPlay';
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _letters_letters_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./letters/letters.component */ "./src/app/letters/letters.component.ts");
/* harmony import */ var _games_counting_counting_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./games/counting/counting.component */ "./src/app/games/counting/counting.component.ts");
/* harmony import */ var _games_counting_numbers_numbers_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./games/counting/numbers/numbers.component */ "./src/app/games/counting/numbers/numbers.component.ts");
/* harmony import */ var _games_counting_image_image_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./games/counting/image/image.component */ "./src/app/games/counting/image/image.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _games_answer_feedback_answer_feedback_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./games/answer-feedback/answer-feedback.component */ "./src/app/games/answer-feedback/answer-feedback.component.ts");
/* harmony import */ var _load_spinner_load_spinner_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./load-spinner/load-spinner.component */ "./src/app/load-spinner/load-spinner.component.ts");
/* harmony import */ var _games_counting_intro_counting_intro_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./games/counting-intro/counting-intro.component */ "./src/app/games/counting-intro/counting-intro.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__["NavBarComponent"],
                _letters_letters_component__WEBPACK_IMPORTED_MODULE_7__["LettersComponent"],
                _games_counting_counting_component__WEBPACK_IMPORTED_MODULE_8__["CountingComponent"],
                _games_counting_numbers_numbers_component__WEBPACK_IMPORTED_MODULE_9__["NumbersComponent"],
                _games_counting_image_image_component__WEBPACK_IMPORTED_MODULE_10__["ImageComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _games_answer_feedback_answer_feedback_component__WEBPACK_IMPORTED_MODULE_12__["AnswerFeedbackComponent"],
                _load_spinner_load_spinner_component__WEBPACK_IMPORTED_MODULE_13__["LoadSpinnerComponent"],
                _games_counting_intro_counting_intro_component__WEBPACK_IMPORTED_MODULE_14__["CountingIntroComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/games/answer-feedback/answer-feedback.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/games/answer-feedback/answer-feedback.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".adjustImageSize {\r\n  width: 50px;\r\n  height: 50px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZXMvYW5zd2VyLWZlZWRiYWNrL2Fuc3dlci1mZWVkYmFjay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2dhbWVzL2Fuc3dlci1mZWVkYmFjay9hbnN3ZXItZmVlZGJhY2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGp1c3RJbWFnZVNpemUge1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/games/answer-feedback/answer-feedback.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/games/answer-feedback/answer-feedback.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Modal -->\n<div dir='rtl' class=\"modal fade \" id=\"answerFeedback\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header justify-content-center\">\n        <h2 class=\"modal-title \" id=\"exampleModalLabel\">{{feedbackMessage}}</h2>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"text-center\">\n          <img src=\"{{imagePath}}\" class=\"rounded adjustImageSize\" >\n        </div>\n      </div>\n      <div class=\"modal-footer justify-content-center\">\n          <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">סגור</button>\n        </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/games/answer-feedback/answer-feedback.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/games/answer-feedback/answer-feedback.component.ts ***!
  \********************************************************************/
/*! exports provided: AnswerFeedbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerFeedbackComponent", function() { return AnswerFeedbackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_answer_feedback_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/answer-feedback.service */ "./src/app/services/answer-feedback.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var AnswerFeedbackComponent = /** @class */ (function () {
    function AnswerFeedbackComponent(answerFeedbackService) {
        var _this = this;
        this.answerFeedbackService = answerFeedbackService;
        this.correctMessage = 'יפה מאוד !';
        this.correctImage = '../../../assets/images/CorrectAnswer.png';
        this.IncorrectMessage = 'נסו שוב';
        this.IncorrectImage = '../../../assets/images/IncorrectAnswer.png';
        answerFeedbackService.getIsAnswerCorrectObs().subscribe(function (isAnswerCorrect) {
            if (isAnswerCorrect) {
                _this.loadCorrectFeedback();
            }
            else {
                _this.loadWrongFeedback();
            }
            _this.show();
        });
    }
    AnswerFeedbackComponent.prototype.loadCorrectFeedback = function () {
        this.feedbackMessage = this.correctMessage;
        this.imagePath = this.correctImage;
    };
    AnswerFeedbackComponent.prototype.loadWrongFeedback = function () {
        this.feedbackMessage = this.IncorrectMessage;
        this.imagePath = this.IncorrectImage;
    };
    AnswerFeedbackComponent.prototype.ngOnInit = function () {
    };
    AnswerFeedbackComponent.prototype.show = function () {
        $("#answerFeedback").modal('show');
    };
    AnswerFeedbackComponent.prototype.hide = function () {
        $("#answerFeedback").modal('hide');
    };
    AnswerFeedbackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-answer-feedback',
            template: __webpack_require__(/*! ./answer-feedback.component.html */ "./src/app/games/answer-feedback/answer-feedback.component.html"),
            styles: [__webpack_require__(/*! ./answer-feedback.component.css */ "./src/app/games/answer-feedback/answer-feedback.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_answer_feedback_service__WEBPACK_IMPORTED_MODULE_1__["AnswerFeedbackService"]])
    ], AnswerFeedbackComponent);
    return AnswerFeedbackComponent;
}());



/***/ }),

/***/ "./src/app/games/counting-intro/counting-intro.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/games/counting-intro/counting-intro.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".imagesizing {\r\n  height: 70%;\r\n  width: 70%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZXMvY291bnRpbmctaW50cm8vY291bnRpbmctaW50cm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9nYW1lcy9jb3VudGluZy1pbnRyby9jb3VudGluZy1pbnRyby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdlc2l6aW5nIHtcclxuICBoZWlnaHQ6IDcwJTtcclxuICB3aWR0aDogNzAlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/games/counting-intro/counting-intro.component.html":
/*!********************************************************************!*\
  !*** ./src/app/games/counting-intro/counting-intro.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div dir =\"rtl\" class=\"jumbotron\">\n  <div class=\"container\">\n    <div class=\"row\">\n        <h1 class=\"display-4\">משחק ספירה</h1>\n    </div>\n    <hr class=\"my-4\">\n    <div class=\"row\">\n        <img src=\"../../../assets/images/Numbers.png\" class=\"img-fluid imagesizing\">\n    </div>\n    <div class=\"row mt-3\">\n        <p class=\"lead\">זהו משחק ספירה שבו צריך לספור את האובייקטים המופיעים וללחוץ על התשובה הנכונה.</p>\n    </div>\n    <hr class=\"my-4\">\n    <div class=\"row mt-5\">\n        <p>לחץ להתחלת המשחק</p>\n    </div>\n    <div class=\"row\">\n        <a (click)=\"router.navigate(['/counting/1']);\" class=\"btn btn-primary btn-lg\" role=\"button\">התחלת משחק</a>\n    </div>\n\n  </div>\n\n\n  <!-- <h1 class=\"display-4\">משחק ספירה</h1>\n  <img src=\"../../../assets/images/Numbers.png\" class=\"rounded float-right imagesizing\">\n  <p class=\"lead\">זהו משחק ספירה שבו צריך לספור את האובייקטים המופיעים וללחוץ על התשובה הנכונה.</p>\n\n  <hr class=\"my-4\">\n\n\n\n  <p>לחץ להתחלת המשחק</p>\n  <a (click)=\"router.navigate(['/counting/1']);\" class=\"btn btn-primary btn-lg\" role=\"button\">התחלת משחק</a> -->\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/games/counting-intro/counting-intro.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/games/counting-intro/counting-intro.component.ts ***!
  \******************************************************************/
/*! exports provided: CountingIntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountingIntroComponent", function() { return CountingIntroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var CountingIntroComponent = /** @class */ (function () {
    function CountingIntroComponent(router) {
        this.router = router;
    }
    CountingIntroComponent.prototype.ngOnInit = function () {
    };
    CountingIntroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-counting-intro',
            template: __webpack_require__(/*! ./counting-intro.component.html */ "./src/app/games/counting-intro/counting-intro.component.html"),
            styles: [__webpack_require__(/*! ./counting-intro.component.css */ "./src/app/games/counting-intro/counting-intro.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CountingIntroComponent);
    return CountingIntroComponent;
}());



/***/ }),

/***/ "./src/app/games/counting/counting.component.css":
/*!*******************************************************!*\
  !*** ./src/app/games/counting/counting.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".appear-as-disable{\r\n  pointer-events: none;\r\n  opacity: 0.2;\r\n}\r\n\r\n.nextback{\r\n  width: 110px;\r\n  border-radius: 100%;\r\n  cursor: pointer;\r\n}\r\n\r\n.nextback:hover{\r\n  /* transform: scale(1.2); */\r\n  /* filter: blur(5px); */\r\n}\r\n\r\n.nextback:active{\r\n  /* filter: blur(5px); */\r\n  -webkit-transform: scale(1.3);\r\n          transform: scale(1.3);\r\n}\r\n\r\n@media screen and (max-width: 994px) {\r\n  .nextback{\r\n    width: 70px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 760px) {\r\n  .nextback{\r\n    width: 45px;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZXMvY291bnRpbmcvY291bnRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFvQjtFQUNwQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLDZCQUFxQjtVQUFyQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRTtJQUNFLFdBQVc7RUFDYjtBQUNGOztBQUdBO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2dhbWVzL2NvdW50aW5nL2NvdW50aW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwZWFyLWFzLWRpc2FibGV7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgb3BhY2l0eTogMC4yO1xyXG59XHJcblxyXG4ubmV4dGJhY2t7XHJcbiAgd2lkdGg6IDExMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubmV4dGJhY2s6aG92ZXJ7XHJcbiAgLyogdHJhbnNmb3JtOiBzY2FsZSgxLjIpOyAqL1xyXG4gIC8qIGZpbHRlcjogYmx1cig1cHgpOyAqL1xyXG59XHJcblxyXG4ubmV4dGJhY2s6YWN0aXZle1xyXG4gIC8qIGZpbHRlcjogYmx1cig1cHgpOyAqL1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTk0cHgpIHtcclxuICAubmV4dGJhY2t7XHJcbiAgICB3aWR0aDogNzBweDtcclxuICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjBweCkge1xyXG4gIC5uZXh0YmFja3tcclxuICAgIHdpZHRoOiA0NXB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/games/counting/counting.component.html":
/*!********************************************************!*\
  !*** ./src/app/games/counting/counting.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"container\">\n  <div class=\"row \" dir='rtl'>\n    <div class=\"col\">\n        <p class=\"text-left mt-2 mb-2\">\n          <!-- <button (click)=\"loadPrevPage()\" id=\"backbutton\" type=\"button \" class=\"btn btn-warning\" [disabled]=\"isItTheFirstPic()\">הקודם</button> -->\n          <img id=\"backImg\" src=\"../../../assets/images/back.png\" (click)=\"loadPrevPage()\" [className]=\"!this.isItTheFirstPic() ? 'rounded mx-auto d-block nextback' : 'rounded mx-auto d-block nextback appear-as-disable'\" alt=\"Responsive image\">\n        </p>\n    </div>\n    <div class=\"col\">\n        <p class=\"text-right mt-2 mb-2\">\n            <img id=\"nextImg\" src=\"../../../assets/images/next.png\" (click)=\"loadNextPage()\" [className]=\"!this.isItTheLastPic() ? 'rounded mx-auto d-block nextback' : 'rounded mx-auto d-block nextback appear-as-disable'\" alt=\"Responsive image\">\n          <!-- <button (click)=\"loadNextPage()\" id=\"nextbutton\" type=\"button\" class=\"btn btn-warning\" [disabled]=\"isItTheLastPic()\">הבא</button> -->\n        </p>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"container\" dir=\"rtl\">\n  <div class=\"row justify-content-center\">\n    <h4 *ngIf=\"isLoaded\" >כמה {{countingDataToDisplay.subject}} יש בתמונה ?</h4>\n  </div>\n</div>\n\n<app-image *ngIf=\"isLoaded\" [imageUrl]=\"countingDataToDisplay.imageUrl\"></app-image>\n<app-numbers *ngIf=\"isLoaded\" (selectedNumber)=\"onSelectedNumber($event)\" ></app-numbers>\n<app-answer-feedback *ngIf=\"isLoaded\" ></app-answer-feedback>\n<app-load-spinner></app-load-spinner>\n\n"

/***/ }),

/***/ "./src/app/games/counting/counting.component.ts":
/*!******************************************************!*\
  !*** ./src/app/games/counting/counting.component.ts ***!
  \******************************************************/
/*! exports provided: CountingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountingComponent", function() { return CountingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_load_spinner_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/load-spinner.service */ "./src/app/services/load-spinner.service.ts");
/* harmony import */ var _services_answer_feedback_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/answer-feedback.service */ "./src/app/services/answer-feedback.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_http_counting_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/http/counting.service */ "./src/app/services/http/counting.service.ts");






var CountingComponent = /** @class */ (function () {
    function CountingComponent(route, answerFeedbackService, router, countingService, loadSpinner, activeRoute) {
        var _this = this;
        this.route = route;
        this.answerFeedbackService = answerFeedbackService;
        this.router = router;
        this.countingService = countingService;
        this.loadSpinner = loadSpinner;
        this.activeRoute = activeRoute;
        this.pathParam = 'id';
        this.countingData = [];
        this.isLoaded = false;
        activeRoute.params.subscribe(function (val) {
            _this.idToDisplay = val.id;
            _this.ngOnInit();
        });
    }
    CountingComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.countingData.length === 0) {
            this.loadSpinner.isDisplayLoading(true);
            this.countingService.getCountingData().subscribe(function (value) {
                _this.setCountingData(value);
                _this.loadCurrentPage();
                _this.loadSpinner.isDisplayLoading(false);
            });
            // this.loadMockDada();
        }
        else {
            this.loadCurrentPage();
        }
    };
    CountingComponent.prototype.setCountingData = function (data) {
        this.countingData = data;
    };
    CountingComponent.prototype.loadCurrentPage = function () {
        if (+this.idToDisplay > this.countingData.length || isNaN(+this.idToDisplay)) {
            this.idToDisplay = '1';
            this.router.navigateByUrl('/counting/' + this.idToDisplay);
        }
        this.countingDataToDisplay = this.countingData[+this.idToDisplay - 1];
        if (this.countingDataToDisplay === undefined) {
            this.countingDataToDisplay = this.countingData[this.countingData.length - 1];
        }
        this.isLoaded = true;
    };
    CountingComponent.prototype.onSelectedNumber = function (selectedNumber) {
        if (this.countingDataToDisplay.answer === selectedNumber) {
            // good asnwer
            this.answerFeedbackService.displayAnswerFeedback(true);
            if (!this.isItTheLastPic()) {
                this.loadNextPage();
            }
        }
        else {
            // wrong answer
            this.answerFeedbackService.displayAnswerFeedback(false);
        }
    };
    CountingComponent.prototype.loadMockDada = function () {
        this.countingData = [
            { imageUrl: "https://extension.usu.edu/yardandgarden/ou-images/apples.png", answer: '2', subject: 'תפוחים', id: '1' },
            { imageUrl: "https://target.scene7.com/is/image/Target/GUEST_f5d0cfc3-9d02-4ee0-a6c6-ed5dc09971d1?wid=488&hei=488&fmt=pjpeg", answer: '1', subject: 'בננות', id: '2' },
            { imageUrl: "http://ae01.alicdn.com/kf/HTB1JPz3ibZnBKNjSZFrq6yRLFXac/Ladybug-pen-drive-usb2-0-flash-drive-cartoon-cute-beetles-memory-stick-real-capacity-usb-flash.jpg_220x220q90.jpg", answer: '3', subject: 'חיפושיות', id: '3' }
        ];
    };
    CountingComponent.prototype.isItTheLastPic = function () {
        if (this.countingData.length !== 0) {
            return this.idToDisplay === this.countingData[this.countingData.length - 1].id;
        }
        return true;
    };
    CountingComponent.prototype.isItTheFirstPic = function () {
        return this.idToDisplay === '1';
    };
    CountingComponent.prototype.loadNextPage = function () {
        var nextId = +this.idToDisplay + 1;
        this.idToDisplay = String(nextId);
        this.router.navigateByUrl('/counting/' + this.idToDisplay);
    };
    CountingComponent.prototype.loadPrevPage = function () {
        var nextId = +this.idToDisplay - 1;
        this.idToDisplay = String(nextId);
        this.router.navigateByUrl('/counting/' + this.idToDisplay);
    };
    CountingComponent.prototype.disableBackButton = function () {
        $('backbutton').button('toggle');
    };
    CountingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-counting',
            template: __webpack_require__(/*! ./counting.component.html */ "./src/app/games/counting/counting.component.html"),
            styles: [__webpack_require__(/*! ./counting.component.css */ "./src/app/games/counting/counting.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _services_answer_feedback_service__WEBPACK_IMPORTED_MODULE_2__["AnswerFeedbackService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_services_http_counting_service__WEBPACK_IMPORTED_MODULE_5__["CountingService"],
            _services_load_spinner_service__WEBPACK_IMPORTED_MODULE_1__["LoadSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], CountingComponent);
    return CountingComponent;
}());



/***/ }),

/***/ "./src/app/games/counting/image/image.component.css":
/*!**********************************************************!*\
  !*** ./src/app/games/counting/image/image.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".imagesize{\r\n  height: 50%;\r\n  width: 50%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZXMvY291bnRpbmcvaW1hZ2UvaW1hZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9nYW1lcy9jb3VudGluZy9pbWFnZS9pbWFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdlc2l6ZXtcclxuICBoZWlnaHQ6IDUwJTtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/games/counting/image/image.component.html":
/*!***********************************************************!*\
  !*** ./src/app/games/counting/image/image.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mb-4 mt-2\">\n  <img src={{imageUrl}} class=\"rounded mx-auto d-block img-fluid shadow imagesize\" alt=\"Responsive image\">\n</div>\n\n"

/***/ }),

/***/ "./src/app/games/counting/image/image.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/games/counting/image/image.component.ts ***!
  \*********************************************************/
/*! exports provided: ImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageComponent", function() { return ImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ImageComponent = /** @class */ (function () {
    function ImageComponent() {
    }
    ImageComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ImageComponent.prototype, "imageUrl", void 0);
    ImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-image',
            template: __webpack_require__(/*! ./image.component.html */ "./src/app/games/counting/image/image.component.html"),
            styles: [__webpack_require__(/*! ./image.component.css */ "./src/app/games/counting/image/image.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ImageComponent);
    return ImageComponent;
}());



/***/ }),

/***/ "./src/app/games/counting/numbers/numbers.component.css":
/*!**************************************************************!*\
  !*** ./src/app/games/counting/numbers/numbers.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dynbamicfontsize{\r\n  font-size: 110px;\r\n}\r\n\r\n@media screen and (max-width: 994px) {\r\n  .dynbamicfontsize{\r\n    font-size: 70px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 770px) {\r\n  .dynbamicfontsize{\r\n    font-size: 15px;\r\n  }\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZXMvY291bnRpbmcvbnVtYmVycy9udW1iZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFHQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZ2FtZXMvY291bnRpbmcvbnVtYmVycy9udW1iZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHluYmFtaWNmb250c2l6ZXtcclxuICBmb250LXNpemU6IDExMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTRweCkge1xyXG4gIC5keW5iYW1pY2ZvbnRzaXple1xyXG4gICAgZm9udC1zaXplOiA3MHB4O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc3MHB4KSB7XHJcbiAgLmR5bmJhbWljZm9udHNpemV7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgfVxyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/games/counting/numbers/numbers.component.html":
/*!***************************************************************!*\
  !*** ./src/app/games/counting/numbers/numbers.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section bg-light\">\n    <div class=\"container pt-3 pb-2\" dir=\"rtl\" >\n        <div class=\"row justify-content-center \">\n            <div class=\"col-2  mb-3\" >\n                <button type=\"button\" class=\"btn btn-outline-primary btn-lg btn-block dynbamicfontsize shadow\" (click)=\"onNumberClick('1')\" >1</button>\n            </div>\n            <div class=\"col-2  mb-3\" >\n                <button type=\"button\" class=\"btn btn-outline-primary btn-lg btn-block dynbamicfontsize shadow\" (click)=\"onNumberClick('2')\" >2</button>\n            </div>\n            <div class=\"col-2  mb-3\" >\n                <button type=\"button\" class=\"btn btn-outline-primary btn-lg btn-block dynbamicfontsize shadow\" (click)=\"onNumberClick('3')\">3</button>\n            </div>\n            <div class=\"col-2  mb-3\" >\n                <button type=\"button\" class=\"btn btn-outline-primary btn-lg btn-block dynbamicfontsize shadow\" (click)=\"onNumberClick('4')\">4</button>\n            </div>\n            <div class=\"col-2  mb-3\" >\n                <button type=\"button\" class=\"btn btn-outline-primary btn-lg btn-block dynbamicfontsize shadow\"  (click)=\"onNumberClick('5')\">5</button>\n            </div>\n        </div>\n        <div class=\"row justify-content-center \">\n            <div class=\"col-2 mb-3\">\n                <button type=\"button\" class=\"btn btn-outline-primary btn-lg btn-block dynbamicfontsize shadow\" (click)=\"onNumberClick('6')\">6</button>\n            </div>\n            <div class=\"col-2 mb-3\">\n                <button type=\"button\" class=\"btn btn-outline-primary btn-lg btn-block dynbamicfontsize shadow\" (click)=\"onNumberClick('7')\">7</button>\n            </div>\n            <div class=\"col-2 mb-3\">\n                <button type=\"button\" class=\"btn btn-outline-primary btn-lg btn-block dynbamicfontsize shadow\" (click)=\"onNumberClick('8')\">8</button>\n            </div>\n            <div class=\"col-2 mb-3\">\n                <button type=\"button\" class=\"btn btn-outline-primary btn-lg btn-block dynbamicfontsize shadow\" (click)=\"onNumberClick('9')\">9</button>\n            </div>\n            <div class=\"col-2 mb-3\">\n                <button type=\"button\" class=\"btn btn-outline-primary btn-lg btn-block dynbamicfontsize shadow\" (click)=\"onNumberClick('10')\">10</button>\n            </div>\n          </div>\n      </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/games/counting/numbers/numbers.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/games/counting/numbers/numbers.component.ts ***!
  \*************************************************************/
/*! exports provided: NumbersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumbersComponent", function() { return NumbersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NumbersComponent = /** @class */ (function () {
    function NumbersComponent() {
        this.selectedNumber = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    NumbersComponent.prototype.ngOnInit = function () {
    };
    NumbersComponent.prototype.onNumberClick = function (clickedNumber) {
        this.selectedNumber.emit(clickedNumber);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NumbersComponent.prototype, "selectedNumber", void 0);
    NumbersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-numbers',
            template: __webpack_require__(/*! ./numbers.component.html */ "./src/app/games/counting/numbers/numbers.component.html"),
            styles: [__webpack_require__(/*! ./numbers.component.css */ "./src/app/games/counting/numbers/numbers.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NumbersComponent);
    return NumbersComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.card:hover{\r\n  border-style: outset;\r\n  border-width: 2px;\r\n  border-color: blue;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uY2FyZDpob3ZlcntcclxuICBib3JkZXItc3R5bGU6IG91dHNldDtcclxuICBib3JkZXItd2lkdGg6IDJweDtcclxuICBib3JkZXItY29sb3I6IGJsdWU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section >\n  <!-- Pictur of gan play-->\n</section>\n<section>\n  <div dir=\"rtl\" class=\"container\">\n    <div class=\"row justify-content-center\">\n      <h3>המשחקים שלנו</h3>\n    </div>\n    <div class=\"row\">\n      <div class=\"col col-sm-12 col-md-6 col-lg-6 mb-4\">\n          <div class=\"card\" style=\"width: 18rem;\">\n              <img src=\"../../assets/images/Numbers.png\" style=\"background:cornsilk\" class=\"card-img-top\">\n              <div class=\"card-body\">\n                <h5 class=\"card-title\">משחק ספירה</h5>\n                <hr class=\"my-4\">\n                <p class=\"card-text\">ספירת אלמנטים המופיעים בכל כרטיס ובחירת תשובה</p>\n                <a (click)=\"router.navigate(['/counting']);\" class=\"btn btn-primary\">למשחק</a>\n              </div>\n          </div>\n      </div>\n      <div class=\"col col-sm-12 col-md-6 col-lg-6 \">\n          <div class=\"card\" style=\"width: 18rem;\">\n              <img src=\"../../assets/images/Numbers.png\" style=\"background:cornsilk\" class=\"card-img-top\">\n              <div class=\"card-body\">\n                <h5 class=\"card-title\">משחק 2</h5>\n                <hr class=\"my-4\">\n                <p class=\"card-text\">הסבר על משחק 2 בלה בלה בלה בלה בלה</p>\n                <a class=\"btn btn-primary\">למשחק</a>\n              </div>\n          </div>\n      </div>\n      <div class=\"col col-sm-12 col-md-6 col-lg-6 \">\n          <div class=\"card\" style=\"width: 18rem;\">\n              <img src=\"../../assets/images/Numbers.png\" style=\"background:cornsilk\" class=\"card-img-top\">\n              <div class=\"card-body\">\n                <h5 class=\"card-title\">משחק 3</h5>\n                <hr class=\"my-4\">\n                <p class=\"card-text\">הסבר על משחק 3 בלה בלה בלה בלה</p>\n                <a class=\"btn btn-primary\">למשחק</a>\n              </div>\n          </div>\n      </div>\n    </div>\n  </div>\n\n</section>\n\n\n\n\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(router) {
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/letters/letters.component.css":
/*!***********************************************!*\
  !*** ./src/app/letters/letters.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xldHRlcnMvbGV0dGVycy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/letters/letters.component.html":
/*!************************************************!*\
  !*** ./src/app/letters/letters.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col\">\n          <div class=\"card shadow bg-white rounded\">\n              <img src=\"https://www.partyclick.co.il/files/products/product1847_image1_2018-09-10_12-06-12.png\" class=\"card-img-top\" alt=\"...\">\n          </div>\n      </div>\n      <div class=\"col\">\n          <div class=\"card shadow bg-white rounded\">\n              <img src=\"https://www.partyclick.co.il/files/products/product1847_image1_2018-09-10_12-06-12.png\" class=\"card-img-top\" alt=\"...\">\n          </div>\n      </div>\n      <div class=\"col\">\n          <div class=\"card shadow bg-white rounded\">\n              <img src=\"https://www.partyclick.co.il/files/products/product1847_image1_2018-09-10_12-06-12.png\" class=\"card-img-top\" alt=\"...\">\n          </div>\n      </div>\n      <div class=\"col\">\n          <div class=\"card shadow bg-white rounded\">\n              <img src=\"https://www.partyclick.co.il/files/products/product1847_image1_2018-09-10_12-06-12.png\" class=\"card-img-top\" alt=\"...\">\n          </div>\n      </div>\n      <div class=\"col\">\n          <div class=\"card shadow bg-white rounded\">\n              <img src=\"https://www.partyclick.co.il/files/products/product1847_image1_2018-09-10_12-06-12.png\" class=\"card-img-top\" alt=\"...\">\n          </div>\n      </div>\n      <div class=\"col\">\n          <div class=\"card shadow bg-white rounded\">\n              <img src=\"https://www.partyclick.co.il/files/products/product1847_image1_2018-09-10_12-06-12.png\" class=\"card-img-top\" alt=\"...\">\n          </div>\n      </div>\n      <div class=\"col\">\n          <div class=\"card shadow bg-white rounded\">\n              <img src=\"https://www.partyclick.co.il/files/products/product1847_image1_2018-09-10_12-06-12.png\" class=\"card-img-top\" alt=\"...\">\n          </div>\n      </div>\n      <div class=\"col\">\n          <div class=\"card shadow bg-white rounded\">\n              <img src=\"https://www.partyclick.co.il/files/products/product1847_image1_2018-09-10_12-06-12.png\" class=\"card-img-top\" alt=\"...\">\n          </div>\n      </div>\n      <div class=\"col\">\n          <div class=\"card shadow bg-white rounded\">\n              <img src=\"https://www.partyclick.co.il/files/products/product1847_image1_2018-09-10_12-06-12.png\" class=\"card-img-top\" alt=\"...\">\n          </div>\n      </div>\n      <div class=\"w-100\"></div>\n      <div class=\"col\">\n          <div class=\"card shadow bg-white rounded\">\n              <img src=\"https://www.partyclick.co.il/files/products/product1847_image1_2018-09-10_12-06-12.png\" class=\"card-img-top\" alt=\"...\">\n          </div>\n      </div>\n      <div class=\"col\">\n          <div class=\"card shadow bg-white rounded\">\n              <img src=\"https://www.partyclick.co.il/files/products/product1847_image1_2018-09-10_12-06-12.png\" class=\"card-img-top\" alt=\"...\">\n          </div>\n      </div>\n      <div class=\"col\">\n          <div class=\"card shadow bg-white rounded\">\n              <img src=\"https://www.partyclick.co.il/files/products/product1847_image1_2018-09-10_12-06-12.png\" class=\"card-img-top\" alt=\"...\">\n          </div>\n      </div>\n      <div class=\"col\">\n          <div class=\"card shadow bg-white rounded\">\n              <img src=\"https://www.partyclick.co.il/files/products/product1847_image1_2018-09-10_12-06-12.png\" class=\"card-img-top\" alt=\"...\">\n          </div>\n      </div>\n      <div class=\"col\">\n          <div class=\"card shadow bg-white rounded\">\n              <img src=\"https://www.partyclick.co.il/files/products/product1847_image1_2018-09-10_12-06-12.png\" class=\"card-img-top\" alt=\"...\">\n          </div>\n      </div>\n      <div class=\"col\">\n          <div class=\"card shadow bg-white rounded\">\n              <img src=\"https://www.partyclick.co.il/files/products/product1847_image1_2018-09-10_12-06-12.png\" class=\"card-img-top\" alt=\"...\">\n          </div>\n      </div>\n      <div class=\"col\">\n          <div class=\"card shadow bg-white rounded\">\n              <img src=\"https://www.partyclick.co.il/files/products/product1847_image1_2018-09-10_12-06-12.png\" class=\"card-img-top\" alt=\"...\">\n          </div>\n      </div>\n      <div class=\"col\">\n          <div class=\"card shadow bg-white rounded\">\n              <img src=\"https://www.partyclick.co.il/files/products/product1847_image1_2018-09-10_12-06-12.png\" class=\"card-img-top\" alt=\"...\">\n          </div>\n      </div>\n      <div class=\"col\">\n          <div class=\"card shadow bg-white rounded\">\n              <img src=\"https://www.partyclick.co.il/files/products/product1847_image1_2018-09-10_12-06-12.png\" class=\"card-img-top\" alt=\"...\">\n          </div>\n      </div>\n      <div class=\"w-100\"></div>\n      <div class=\"col\">\n          <div class=\"card shadow bg-white rounded\">\n              <img src=\"https://www.partyclick.co.il/files/products/product1847_image1_2018-09-10_12-06-12.png\" class=\"card-img-top\" alt=\"...\">\n          </div>\n      </div>\n      <div class=\"col\">\n          <div class=\"card shadow bg-white rounded\">\n              <img src=\"https://www.partyclick.co.il/files/products/product1847_image1_2018-09-10_12-06-12.png\" class=\"card-img-top\" alt=\"...\">\n          </div>\n      </div>\n      <div class=\"col\">\n          <div class=\"card shadow bg-white rounded\">\n              <img src=\"https://www.partyclick.co.il/files/products/product1847_image1_2018-09-10_12-06-12.png\" class=\"card-img-top\" alt=\"...\">\n          </div>\n      </div>\n      <div class=\"col\">\n          <div class=\"card shadow bg-white rounded\">\n              <img src=\"https://www.partyclick.co.il/files/products/product1847_image1_2018-09-10_12-06-12.png\" class=\"card-img-top\" alt=\"...\">\n          </div>\n      </div>\n      <div class=\"col\">\n          <div class=\"card shadow bg-white rounded\">\n              <img src=\"https://www.partyclick.co.il/files/products/product1847_image1_2018-09-10_12-06-12.png\" class=\"card-img-top\" alt=\"...\">\n          </div>\n      </div>\n      <div class=\"col\">\n          <div class=\"card shadow bg-white rounded\">\n              <img src=\"https://www.partyclick.co.il/files/products/product1847_image1_2018-09-10_12-06-12.png\" class=\"card-img-top\" alt=\"...\">\n          </div>\n      </div>\n      <div class=\"col\">\n          <div class=\"card shadow bg-white rounded\">\n              <img src=\"https://www.partyclick.co.il/files/products/product1847_image1_2018-09-10_12-06-12.png\" class=\"card-img-top\" alt=\"...\">\n          </div>\n      </div>\n      <div class=\"col\">\n          <div class=\"card shadow bg-white rounded\">\n              <img src=\"https://www.partyclick.co.il/files/products/product1847_image1_2018-09-10_12-06-12.png\" class=\"card-img-top\" alt=\"...\">\n          </div>\n      </div>\n      <div class=\"col\">\n          <div class=\"card shadow bg-white rounded\">\n              <img src=\"https://www.partyclick.co.il/files/products/product1847_image1_2018-09-10_12-06-12.png\" class=\"card-img-top\" alt=\"...\">\n          </div>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/letters/letters.component.ts":
/*!**********************************************!*\
  !*** ./src/app/letters/letters.component.ts ***!
  \**********************************************/
/*! exports provided: LettersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LettersComponent", function() { return LettersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LettersComponent = /** @class */ (function () {
    function LettersComponent() {
    }
    LettersComponent.prototype.ngOnInit = function () {
    };
    LettersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-letters',
            template: __webpack_require__(/*! ./letters.component.html */ "./src/app/letters/letters.component.html"),
            styles: [__webpack_require__(/*! ./letters.component.css */ "./src/app/letters/letters.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LettersComponent);
    return LettersComponent;
}());



/***/ }),

/***/ "./src/app/load-spinner/load-spinner.component.css":
/*!*********************************************************!*\
  !*** ./src/app/load-spinner/load-spinner.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loader {\r\n  border: 16px solid #f3f3f3;\r\n  border-radius: 50%;\r\n  border-top: 16px solid #3498db;\r\n  width: 120px;\r\n  height: 120px;\r\n  -webkit-animation: spin 2s linear infinite; /* Safari */\r\n  animation: spin 1s linear infinite;\r\n}\r\n\r\n/* Safari */\r\n\r\n@-webkit-keyframes spin {\r\n  0% { -webkit-transform: rotate(0deg); }\r\n  100% { -webkit-transform: rotate(360deg); }\r\n}\r\n\r\n@keyframes spin {\r\n  0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\r\n  100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\r\n}\r\n\r\n.modal {\r\n  top: 50%;\r\n  right: 50%;\r\n  margin-top: -60px;\r\n  margin-right: -60px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9hZC1zcGlubmVyL2xvYWQtc3Bpbm5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQiw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLGFBQWE7RUFDYiwwQ0FBMEMsRUFBRSxXQUFXO0VBQ3ZELGtDQUFrQztBQUNwQzs7QUFFQSxXQUFXOztBQUNYO0VBQ0UsS0FBSywrQkFBK0IsRUFBRTtFQUN0QyxPQUFPLGlDQUFpQyxFQUFFO0FBQzVDOztBQUVBO0VBQ0UsS0FBSywrQkFBdUIsRUFBdkIsdUJBQXVCLEVBQUU7RUFDOUIsT0FBTyxpQ0FBeUIsRUFBekIseUJBQXlCLEVBQUU7QUFDcEM7O0FBRUE7RUFDRSxRQUFRO0VBQ1IsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9sb2FkLXNwaW5uZXIvbG9hZC1zcGlubmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGVyIHtcclxuICBib3JkZXI6IDE2cHggc29saWQgI2YzZjNmMztcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm9yZGVyLXRvcDogMTZweCBzb2xpZCAjMzQ5OGRiO1xyXG4gIHdpZHRoOiAxMjBweDtcclxuICBoZWlnaHQ6IDEyMHB4O1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTsgLyogU2FmYXJpICovXHJcbiAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG5cclxuLyogU2FmYXJpICovXHJcbkAtd2Via2l0LWtleWZyYW1lcyBzcGluIHtcclxuICAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc3BpbiB7XHJcbiAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxyXG4gIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XHJcbn1cclxuXHJcbi5tb2RhbCB7XHJcbiAgdG9wOiA1MCU7XHJcbiAgcmlnaHQ6IDUwJTtcclxuICBtYXJnaW4tdG9wOiAtNjBweDtcclxuICBtYXJnaW4tcmlnaHQ6IC02MHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/load-spinner/load-spinner.component.html":
/*!**********************************************************!*\
  !*** ./src/app/load-spinner/load-spinner.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div dir=\"rtl\" class=\"modal\" data-backdrop=\"static\"  data-keyboard=\"false\" id=\"load-modal\">\n      <div class=\"loader\">\n      </div>\n</div>\n"

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
/* harmony import */ var _services_load_spinner_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/load-spinner.service */ "./src/app/services/load-spinner.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var LoadSpinnerComponent = /** @class */ (function () {
    function LoadSpinnerComponent(loadSpinner) {
        var _this = this;
        this.loadSpinner = loadSpinner;
        loadSpinner.getIsToShowLoadingObs().subscribe(function (isToShowLoading) {
            if (isToShowLoading) {
                _this.show();
            }
            else {
                _this.hide();
            }
        });
    }
    LoadSpinnerComponent.prototype.ngOnInit = function () {
    };
    LoadSpinnerComponent.prototype.show = function () {
        $("#load-modal").modal('show');
    };
    LoadSpinnerComponent.prototype.hide = function () {
        $("#load-modal").modal('hide');
    };
    LoadSpinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-load-spinner',
            template: __webpack_require__(/*! ./load-spinner.component.html */ "./src/app/load-spinner/load-spinner.component.html"),
            styles: [__webpack_require__(/*! ./load-spinner.component.css */ "./src/app/load-spinner/load-spinner.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_load_spinner_service__WEBPACK_IMPORTED_MODULE_1__["LoadSpinnerService"]])
    ], LoadSpinnerComponent);
    return LoadSpinnerComponent;
}());



/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.css":
/*!***********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.html":
/*!************************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light \" style=\"background-color: #69a5f9;\">\n    <a class=\"navbar-brand\" >גן פליי</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\" data-toggle=\"collapse\" data-target=\".navbar-collapse.show\">\n            <a class=\"nav-link\" routerLink='/counting' routerLinkActive='Active'>ספירה</a>\n        </li>\n        <li class=\"nav-item active\" data-toggle=\"collapse\" data-target=\".navbar-collapse.show\">\n          <a class=\"nav-link\" routerLink='/home' routerLinkActive='Active'>בית</a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavBarComponent = /** @class */ (function () {
    function NavBarComponent() {
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/nav-bar/nav-bar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/services/answer-feedback.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/answer-feedback.service.ts ***!
  \*****************************************************/
/*! exports provided: AnswerFeedbackService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerFeedbackService", function() { return AnswerFeedbackService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var AnswerFeedbackService = /** @class */ (function () {
    function AnswerFeedbackService() {
        this.isAnswerCorrectObs = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    AnswerFeedbackService.prototype.displayAnswerFeedback = function (isCorrect) {
        this.isAnswerCorrectObs.next(isCorrect);
    };
    AnswerFeedbackService.prototype.getIsAnswerCorrectObs = function () {
        return this.isAnswerCorrectObs;
    };
    AnswerFeedbackService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AnswerFeedbackService);
    return AnswerFeedbackService;
}());



/***/ }),

/***/ "./src/app/services/http/counting.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/http/counting.service.ts ***!
  \***************************************************/
/*! exports provided: CountingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountingService", function() { return CountingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var CountingService = /** @class */ (function () {
    function CountingService(httpClient) {
        this.httpClient = httpClient;
        this.url = 'https://ganplay.appspot.com/CountingData';
    }
    CountingService.prototype.getCountingData = function () {
        return this.httpClient.get(this.url);
    };
    CountingService.prototype.postCountingData = function (counitngData) {
        return this.httpClient.post(this.url, counitngData);
    };
    CountingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CountingService);
    return CountingService;
}());



/***/ }),

/***/ "./src/app/services/load-spinner.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/load-spinner.service.ts ***!
  \**************************************************/
/*! exports provided: LoadSpinnerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadSpinnerService", function() { return LoadSpinnerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var LoadSpinnerService = /** @class */ (function () {
    function LoadSpinnerService() {
        this.isToShowLoadingObs = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    LoadSpinnerService.prototype.isDisplayLoading = function (isToLoad) {
        this.isToShowLoadingObs.next(isToLoad);
    };
    LoadSpinnerService.prototype.getIsToShowLoadingObs = function () {
        return this.isToShowLoadingObs;
    };
    LoadSpinnerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoadSpinnerService);
    return LoadSpinnerService;
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

module.exports = __webpack_require__(/*! c:\GitHub\GanPlay\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map