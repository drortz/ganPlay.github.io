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
/* harmony import */ var _games_letters_letters_intro_letters_intro_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./games/letters/letters-intro/letters-intro.component */ "./src/app/games/letters/letters-intro/letters-intro.component.ts");
/* harmony import */ var _games_letters_letters_letters_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./games/letters/letters/letters.component */ "./src/app/games/letters/letters/letters.component.ts");








var routes = [
    { path: 'counting/:id', component: _games_counting_counting_component__WEBPACK_IMPORTED_MODULE_4__["CountingComponent"] },
    { path: 'counting', component: _games_counting_intro_counting_intro_component__WEBPACK_IMPORTED_MODULE_1__["CountingIntroComponent"] },
    { path: 'letters', component: _games_letters_letters_intro_letters_intro_component__WEBPACK_IMPORTED_MODULE_6__["LettersIntroComponent"] },
    { path: 'letters/:id', component: _games_letters_letters_letters_component__WEBPACK_IMPORTED_MODULE_7__["LettersComponent"] },
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);



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
/* harmony import */ var _games_counting_counting_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./games/counting/counting.component */ "./src/app/games/counting/counting.component.ts");
/* harmony import */ var _games_counting_numbers_numbers_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./games/counting/numbers/numbers.component */ "./src/app/games/counting/numbers/numbers.component.ts");
/* harmony import */ var _games_counting_image_image_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./games/counting/image/image.component */ "./src/app/games/counting/image/image.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _games_answer_feedback_answer_feedback_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./games/answer-feedback/answer-feedback.component */ "./src/app/games/answer-feedback/answer-feedback.component.ts");
/* harmony import */ var _load_spinner_load_spinner_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./load-spinner/load-spinner.component */ "./src/app/load-spinner/load-spinner.component.ts");
/* harmony import */ var _games_counting_intro_counting_intro_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./games/counting-intro/counting-intro.component */ "./src/app/games/counting-intro/counting-intro.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _games_letters_letters_letters_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./games/letters/letters/letters.component */ "./src/app/games/letters/letters/letters.component.ts");
/* harmony import */ var _games_letters_letters_intro_letters_intro_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./games/letters/letters-intro/letters-intro.component */ "./src/app/games/letters/letters-intro/letters-intro.component.ts");
/* harmony import */ var _games_letters_letters_bar_letters_bar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./games/letters/letters-bar/letters-bar.component */ "./src/app/games/letters/letters-bar/letters-bar.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__["NavBarComponent"],
                _games_counting_counting_component__WEBPACK_IMPORTED_MODULE_7__["CountingComponent"],
                _games_counting_numbers_numbers_component__WEBPACK_IMPORTED_MODULE_8__["NumbersComponent"],
                _games_counting_image_image_component__WEBPACK_IMPORTED_MODULE_9__["ImageComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _games_answer_feedback_answer_feedback_component__WEBPACK_IMPORTED_MODULE_11__["AnswerFeedbackComponent"],
                _load_spinner_load_spinner_component__WEBPACK_IMPORTED_MODULE_12__["LoadSpinnerComponent"],
                _games_counting_intro_counting_intro_component__WEBPACK_IMPORTED_MODULE_13__["CountingIntroComponent"],
                _games_letters_letters_letters_component__WEBPACK_IMPORTED_MODULE_15__["LettersComponent"],
                _games_letters_letters_intro_letters_intro_component__WEBPACK_IMPORTED_MODULE_16__["LettersIntroComponent"],
                _games_letters_letters_bar_letters_bar_component__WEBPACK_IMPORTED_MODULE_17__["LettersBarComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_20__["DragDropModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatCheckboxModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
            ],
            exports: [],
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

module.exports = ".adjustImageSize {\r\n  width: 50%;\r\n  height: 50%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZXMvYW5zd2VyLWZlZWRiYWNrL2Fuc3dlci1mZWVkYmFjay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2dhbWVzL2Fuc3dlci1mZWVkYmFjay9hbnN3ZXItZmVlZGJhY2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGp1c3RJbWFnZVNpemUge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgaGVpZ2h0OiA1MCU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/games/answer-feedback/answer-feedback.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/games/answer-feedback/answer-feedback.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Modal -->\n<div dir='rtl' class=\"modal fade \" id=\"answerFeedback\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header justify-content-center\">\n        <h2 class=\"modal-title \" id=\"exampleModalLabel\">{{feedbackMessage}}</h2>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"text-center\">\n          <img src=\"{{imagePath}}\" class=\"rounded adjustImageSize\" >\n        </div>\n      </div>\n      <!-- <div class=\"modal-footer justify-content-center\">\n          <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">סגור</button>\n        </div> -->\n    </div>\n  </div>\n</div>\n"

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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var AnswerFeedbackComponent = /** @class */ (function () {
    function AnswerFeedbackComponent(answerFeedbackService) {
        var _this = this;
        this.answerFeedbackService = answerFeedbackService;
        this.correctMessage = 'יפה מאוד !';
        this.correctImage = '../../../assets/images/Smily.png';
        this.IncorrectMessage = 'נסו שוב';
        this.IncorrectImage = '../../../assets/images/smilyConfuzed.png';
        this.audioCorrectSrc = "../../../assets/sound/correct.mp3";
        this.audio = new Audio();
        answerFeedbackService.getIsAnswerCorrectObs().subscribe(function (isAnswerCorrect) {
            if (isAnswerCorrect) {
                _this.loadCorrectFeedback();
            }
            else {
                _this.loadWrongFeedback();
            }
            _this.show();
            var source = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(1500);
            var abc = source.subscribe(function (val) {
                _this.hide();
            });
        });
        answerFeedbackService.getPlaySoundperInput().subscribe(function (isAnswerCorrect) {
            if (isAnswerCorrect) {
                //play correct sound
                _this.audio.src = _this.audioCorrectSrc;
            }
            else {
                //play incorrect sound
            }
            // this.audio.load();
            _this.audio.play();
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

module.exports = "\n<div dir =\"rtl\" class=\"jumbotron\">\n  <div class=\"container\">\n    <div class=\"row\">\n        <h1 class=\"display-4\">משחק ספירה</h1>\n    </div>\n    <hr class=\"my-4\">\n    <div class=\"row\">\n        <img src=\"../../../assets/images/Numbers.png\" class=\"img-fluid imagesizing\">\n    </div>\n    <div class=\"row mt-3\">\n        <p class=\"lead\">התאמת סיפרה לכמות הפריטים המופיעים בתמונה.</p>\n\n    </div>\n    <div class=\"row mt-3\">\n      <!-- Button trigger modal -->\n      <button dir=\"rtl\" type=\"button\" class=\"btn btn-outline-info\" data-toggle=\"modal\" data-target=\"#aboutCountingModal\">\n          למידע נוסף על ספירה ומניה\n      </button>\n    </div>\n    <hr class=\"my-4\">\n    <div class=\"row\">\n        <a routerLink='/counting/1' class=\"btn btn-primary btn-lg\" role=\"button\">התחלת משחק</a>\n    </div>\n  </div>\n</div>\n\n\n  <!-- Modal -->\n  <div dir=\"rtl\" class=\"modal fade\" id=\"aboutCountingModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLongTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">ספירה ומניה / ד\"ר מיכל איכט</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <p>\n              ספירה היא היכולת לנקוב בשם המספרים ברצף הנכון (קדימה או אחורה). לצורך ספירה הילד צריך לדעת את שמות המספרים ואת הרצף שלהם בצורה אוטומטית, ולהצליח לשלוף את שמות המספרים בצורה מדויקת.\n          </p>\n          <p>\n              לעומת זאת, מניה היא יכולת מורכבת יותר – זו היכולת להתאים בין הספירה (שם המספר) לבין כמות הפריטים הנספרים. היא דורשת מן הילד להצביע על כל פריט שנמנה פעם אחת בלבד, מבלי לדלג על פריטים, ולהתאים בין שם המספר לבין הפריט. על מנת לבצע היטב תהליך של מניה הילד נדרש לשלוט ברצף המספרים ולהבינו. עליו לערוך התאמה בין שם המספר לבין הפריט, תוך הבנה שעליו למנות את כל הפריטים, ובעיקר – להבין ששם המספר האחרון מייצג את כמות כל הפריטים שנמנו. הילד נדרש לקואורדינציה טובה המאפשרת לו לגעת רק פעם אחת בלבד בכל אחד מהפריטים הנמנים.\n          </p>\n          <p>\n              תהליך הספירה מתחיל בגיל צעיר מאד. ובהחלט ניתן לפגוש ילדים כבני שנתיים (ממש כמו עדי) המסוגלת לדקלם את שמות המספרים ברצף הנכון. ילד בעל יכולת זיכרון טובה מסוגל ללמוד את רצף המספרים ממש כמו שהוא לומד שירים או דקלומים.\n          </p>\n          <p>\n              לעומת זאת, המניה קשה יותר, ודורשת יכולות קוגניטיביות (חשיבה) ויכולות מוטוריות ההולכות ומבשילות סביב גיל 4-5 שנים. ואכן, בגיל צעיר מרבית הילדים מתקשים למנות. הם טועים טעויות הנובעות מהקושי להבחין ולהפריד בין פריטים שכבר נמנו, לבין פריטים שטרם נמנו. הם מדלגים על פריטים או מונים את אותו פריט כמה וכמה פעמים. יכולת המניה מבשילה סביב גיל 5 שנים, אז הילד אמור למנות בהצלחה סדרה של פריטים. בגיל 6, גיל הכניסה לכיתה א`, הילד אמור להצליח למנות 10 חפצים או יותר, המסודרים במרחב באופנים שונים.\n          </p>\n          <p>\n              שני גורמים מרכזיים משפיעים על דרגת הקושי של המניה. הראשון הוא אופן ארגון החפצים הנמנים במרחב, כאשר מניה מסודרת (בשורה, בטור או בתבנית) היא הקלה ביותר, מניה בתפזורת מהווה דרגת ביניים, ומניה במעגל נחשבת קשה ביותר (כאן קשה לזכור היכן התחלנו למנות, ואילו פריטים כבר נמנו). הגורם השני המשפיע על קושי המניה הוא כמות החפצים הנמנים. ככל שכמותם עולה, כך רמת הקושי של המנייה עולה.\n          </p>\n          <p>\n              כיצד ניתן לשפר את יכולת הספירה, ובעיקר את יכולת המניה?\n          </p>\n          <p>\n              הסביבה הטבעית שלנו מזמנת הזדמנויות אינ-סופיות ללמידת הספירה, וניתן לתרגל עם הפעוט את רצף המספרים בכל רגע – לספור ביחד את האצבעות (\"עשר אצבעות לי יש..\"), את הבובות שעל המדף, את הספרים, את הדמויות בתמונה, את הצעדים מהרכב ועד הכניסה לגן, את המדרגות המובילות לבית, את הסוכריות שעל העוגה ועוד ועוד. את הילדים המבוגרים יותר ניתן לשאול מפורשות \"כמה יש כאן?\" – ולוודא שהם מונים כנדרש, ועונים בשם המספר המתאים.\n          </p>\n          <p>\n              בנוסף ללמידה ה\"סביבתית\" הזו, קיימים לא מעט משחקים ועזרים דידקטיים ללימוד המספרים ורצף המספרים (כגון פאזלים בהם יש להתאים חלק ובו הספרה המתאימה לחלק ובו מספר פריטים תואם).\n          </p>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">סגירה</button>\n        </div>\n      </div>\n    </div>\n  </div>\n"

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

module.exports = ".appear-as-disable{\r\n  pointer-events: none;\r\n  opacity: 0.2;\r\n}\r\n\r\n.nextback{\r\n  width: 90px;\r\n  border-radius: 100%;\r\n  cursor: pointer;\r\n}\r\n\r\n.nextback:hover {\r\n  /* transform: scale(1.2); */\r\n  /* filter: blur(5px); */\r\n}\r\n\r\n.nextback:active {\r\n  /* filter: blur(5px); */\r\n  -webkit-transform: scale(1.3);\r\n          transform: scale(1.3);\r\n}\r\n\r\n@media screen and (max-width: 994px) {\r\n  .nextback{\r\n    width: 70px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 760px) {\r\n  .nextback{\r\n    width: 45px;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZXMvY291bnRpbmcvY291bnRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFvQjtFQUNwQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLDZCQUFxQjtVQUFyQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRTtJQUNFLFdBQVc7RUFDYjtBQUNGOztBQUdBO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2dhbWVzL2NvdW50aW5nL2NvdW50aW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwZWFyLWFzLWRpc2FibGV7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgb3BhY2l0eTogMC4yO1xyXG59XHJcblxyXG4ubmV4dGJhY2t7XHJcbiAgd2lkdGg6IDkwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5uZXh0YmFjazpob3ZlciB7XHJcbiAgLyogdHJhbnNmb3JtOiBzY2FsZSgxLjIpOyAqL1xyXG4gIC8qIGZpbHRlcjogYmx1cig1cHgpOyAqL1xyXG59XHJcblxyXG4ubmV4dGJhY2s6YWN0aXZlIHtcclxuICAvKiBmaWx0ZXI6IGJsdXIoNXB4KTsgKi9cclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5NHB4KSB7XHJcbiAgLm5leHRiYWNre1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzYwcHgpIHtcclxuICAubmV4dGJhY2t7XHJcbiAgICB3aWR0aDogNDVweDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/games/counting/counting.component.html":
/*!********************************************************!*\
  !*** ./src/app/games/counting/counting.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div *ngIf=\"isLoaded\" class=\"container pt-2 pb-2 mb-3\">\n  <div class=\"row \" dir='rtl'>\n    <div class=\"col-2\">\n        <p class=\"text-left\">\n          <!-- <button (click)=\"loadPrevPage()\" id=\"backbutton\" type=\"button \" class=\"btn btn-warning\" [disabled]=\"isItTheFirstPic()\">הקודם</button> -->\n          <img id=\"backImg\" src=\"../../../assets/images/back.png\" (click)=\"loadPrevPage()\" [className]=\"!this.isItTheFirstPic() ? 'rounded float-left nextback' : 'rounded float-left nextback appear-as-disable'\" alt=\"Responsive image\">\n        </p>\n    </div>\n    <div class=\"col-8\">\n      <em><p class=\"text-center h3\" style=\"font-size: 6vw;\">ספירה ומניה</p></em>\n    </div>\n    <div class=\"col-2\">\n        <p class=\"text-right\">\n            <img id=\"nextImg\" src=\"../../../assets/images/next.png\" (click)=\"loadNextPage()\" [className]=\"!this.isItTheLastPic() ? 'rounded float-right nextback' : 'rounded float-right nextback appear-as-disable'\" alt=\"Responsive image\">\n          <!-- <button (click)=\"loadNextPage()\" id=\"nextbutton\" type=\"button\" class=\"btn btn-warning\" [disabled]=\"isItTheLastPic()\">הבא</button> -->\n        </p>\n    </div>\n  </div>\n</div>\n\n\n<div *ngIf=\"isLoaded\" class=\"container\" dir=\"rtl\">\n  <div class=\"row justify-content-center\">\n    <h4>כמה {{countingDataToDisplay?.subject}} יש בתמונה ?</h4>\n  </div>\n</div>\n\n<app-image  (loaded)=\"imageLoaded($event)\" [imageUrl]=\"countingDataToDisplay?.imageUrl\" [isAnswered]=\"isAnswered\"></app-image>\n<app-numbers *ngIf=\"isLoaded\" (selectedNumber)=\"onSelectedNumber($event)\" [isAnswered]=\"isAnswered\" [answer]=\"this.countingDataToDisplay.answer\" ></app-numbers>\n<app-answer-feedback *ngIf=\"isLoaded\" ></app-answer-feedback>\n<app-load-spinner></app-load-spinner>\n\n"

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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");







var CountingComponent = /** @class */ (function () {
    function CountingComponent(route, answerFeedbackService, router, countingService, 
    // private snackBar: MatSnackBar,
    loadSpinner, activeRoute) {
        var _this = this;
        this.route = route;
        this.answerFeedbackService = answerFeedbackService;
        this.router = router;
        this.countingService = countingService;
        this.loadSpinner = loadSpinner;
        this.activeRoute = activeRoute;
        this.pathParam = 'id';
        this.countingData = [];
        this.countingDataCorrect = [];
        this.isLoaded = false;
        this.isAnswered = false;
        activeRoute.params.subscribe(function (val) {
            _this.idToDisplay = val.id;
            _this.ngOnInit();
        });
        this.countingService.getCountingData().subscribe(function (value) {
            _this.setCountingData(value);
            _this.loadCurrentPage();
        });
    }
    CountingComponent.prototype.ngOnInit = function () {
        this.loadSpinner.isDisplayLoading(true);
        this.loadCurrentPage();
    };
    CountingComponent.prototype.setCountingData = function (data) {
        this.countingData = data;
    };
    CountingComponent.prototype.loadCurrentPage = function () {
        if (+this.idToDisplay > this.countingData.length || isNaN(+this.idToDisplay)) {
            this.idToDisplay = '1';
            this.router.navigateByUrl('/counting/' + this.idToDisplay);
            return;
        }
        this.countingDataToDisplay = this.countingData[+this.idToDisplay - 1];
        if (this.countingDataToDisplay === undefined) {
            this.countingDataToDisplay = this.countingData[this.countingData.length - 1];
        }
        if (this.isCurrectCardWasAnsweredById(this.countingDataToDisplay.id)) {
            this.isAnswered = true;
        }
        else {
            this.isAnswered = false;
        }
    };
    CountingComponent.prototype.isCurrectCardWasAnsweredById = function (id) {
        for (var _i = 0, _a = this.countingDataCorrect; _i < _a.length; _i++) {
            var answeredCounting = _a[_i];
            if (answeredCounting.id === id) {
                return true;
            }
        }
        return false;
    };
    CountingComponent.prototype.onSelectedNumber = function (selectedNumber) {
        var _this = this;
        if (this.countingDataToDisplay.answer === selectedNumber) {
            // good asnwer
            this.countingDataCorrect.push(this.countingDataToDisplay);
            this.answerFeedbackService.displayAnswerFeedback(true);
            this.answerFeedbackService.playSound(true);
            var source = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["timer"])(1500);
            var abc = source.subscribe(function (val) {
                if (!_this.isItTheLastPic()) {
                    _this.loadNextPage();
                }
            });
            // if (!this.isItTheLastPic()) {
            //   this.loadNextPage();
            // }
        }
        else {
            // wrong answer
            // this.snackBar.open('נסו שוב');
            this.answerFeedbackService.displayAnswerFeedback(false);
            // this.answerFeedbackService.playSound(false);
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
    CountingComponent.prototype.imageLoaded = function (wasLoaded) {
        this.isLoaded = wasLoaded;
        this.loadSpinner.isDisplayLoading(false);
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

module.exports = ".imagesize{\r\n  height: 50%;\r\n  width: 50%;\r\n}\r\n\r\n.correctimage {\r\n  border: solid 5px #ccc;\r\n  border-color: rgb(6, 240, 6) ;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZXMvY291bnRpbmcvaW1hZ2UvaW1hZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsNkJBQTZCO0FBQy9CIiwiZmlsZSI6InNyYy9hcHAvZ2FtZXMvY291bnRpbmcvaW1hZ2UvaW1hZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZXNpemV7XHJcbiAgaGVpZ2h0OiA1MCU7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLmNvcnJlY3RpbWFnZSB7XHJcbiAgYm9yZGVyOiBzb2xpZCA1cHggI2NjYztcclxuICBib3JkZXItY29sb3I6IHJnYig2LCAyNDAsIDYpIDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/games/counting/image/image.component.html":
/*!***********************************************************!*\
  !*** ./src/app/games/counting/image/image.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mb-5 mt-2\">\n  <img src={{imageUrl}} (load)=\"imgLoaded($event)\" [className]=\"isAnswered ? 'rounded mx-auto d-block img-fluid shadow imagesize correctimage' : 'rounded mx-auto d-block img-fluid shadow imagesize'\"  alt=\"Responsive image\">\n</div>\n\n"

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
        this.loaded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ImageComponent.prototype.ngOnInit = function () {
    };
    ImageComponent.prototype.imgLoaded = function (event) {
        this.loaded.emit(true);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ImageComponent.prototype, "imageUrl", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], ImageComponent.prototype, "isAnswered", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ImageComponent.prototype, "loaded", void 0);
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

module.exports = ".dynbamicfontsize{\r\n  font-size: 110px;\r\n  height: 150px;\r\n  width: 150px;\r\n  border-style: inset;\r\n}\r\n\r\n.appear-as-disable{\r\n  pointer-events: none;\r\n  opacity: 0.6;\r\n}\r\n\r\n@media screen and (max-width: 994px) {\r\n  .dynbamicfontsize{\r\n    font-size: 70px;\r\n    height: 100px;\r\n    width: 100px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 760px) {\r\n  .dynbamicfontsize{\r\n    font-size: 40px;\r\n    font-weight: bold;\r\n    /* text-indent: -0.4em; */\r\n    height: 60px;\r\n    width: 60px;\r\n  }\r\n\r\n  @media screen and (max-width: 590px) {\r\n    .dynbamicfontsize{\r\n      font-size: 30px;\r\n      font-weight: bold;\r\n      /* text-indent: -0.4em; */\r\n      height: 50px;\r\n      width: 50px;\r\n      /* border-color: white; */\r\n    }\r\n  }\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZXMvY291bnRpbmcvbnVtYmVycy9udW1iZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsWUFBWTtBQUNkOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0lBQ2YsYUFBYTtJQUNiLFlBQVk7RUFDZDtBQUNGOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osV0FBVztFQUNiOztFQUVBO0lBQ0U7TUFDRSxlQUFlO01BQ2YsaUJBQWlCO01BQ2pCLHlCQUF5QjtNQUN6QixZQUFZO01BQ1osV0FBVztNQUNYLHlCQUF5QjtJQUMzQjtFQUNGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9nYW1lcy9jb3VudGluZy9udW1iZXJzL251bWJlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5keW5iYW1pY2ZvbnRzaXple1xyXG4gIGZvbnQtc2l6ZTogMTEwcHg7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgYm9yZGVyLXN0eWxlOiBpbnNldDtcclxufVxyXG5cclxuLmFwcGVhci1hcy1kaXNhYmxle1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIG9wYWNpdHk6IDAuNjtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTk0cHgpIHtcclxuICAuZHluYmFtaWNmb250c2l6ZXtcclxuICAgIGZvbnQtc2l6ZTogNzBweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjBweCkge1xyXG4gIC5keW5iYW1pY2ZvbnRzaXple1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAvKiB0ZXh0LWluZGVudDogLTAuNGVtOyAqL1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTBweCkge1xyXG4gICAgLmR5bmJhbWljZm9udHNpemV7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIC8qIHRleHQtaW5kZW50OiAtMC40ZW07ICovXHJcbiAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgIC8qIGJvcmRlci1jb2xvcjogd2hpdGU7ICovXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/games/counting/numbers/numbers.component.html":
/*!***************************************************************!*\
  !*** ./src/app/games/counting/numbers/numbers.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [className]=\"isAnswered ? 'section bg-light appear-as-disable' : 'section bg-light' \">\n    <div class=\"container pt-3 pb-2\" dir=\"rtl\" >\n        <div class=\"row justify-content-center \">\n            <div class=\"col-2  mb-3\" >\n                <button mat-fab [color]=\"this.isAnswered && this.isCorrectNumberPerInputNumber('1') ? 'warn' : 'primary'\" class=\"dynbamicfontsize\" (click)=\"onNumberClick('1')\" >1</button>\n            </div>\n            <div class=\"col-2  mb-3\" >\n                <button mat-fab [color]=\"this.isAnswered && this.isCorrectNumberPerInputNumber('2') ? 'warn' : 'primary'\" class=\"dynbamicfontsize\" (click)=\"onNumberClick('2')\" >2</button>\n            </div>\n            <div class=\"col-2  mb-3\" >\n                <button mat-fab [color]=\"this.isAnswered && this.isCorrectNumberPerInputNumber('3') ? 'warn' : 'primary'\" class=\"dynbamicfontsize\" (click)=\"onNumberClick('3')\">3</button>\n            </div>\n            <div class=\"col-2  mb-3\" >\n                <button mat-fab [color]=\"this.isAnswered && this.isCorrectNumberPerInputNumber('4') ? 'warn' : 'primary'\" class=\"dynbamicfontsize\" (click)=\"onNumberClick('4')\">4</button>\n            </div>\n            <div class=\"col-2  mb-3\" >\n                <button mat-fab [color]=\"this.isAnswered && this.isCorrectNumberPerInputNumber('5') ? 'warn' : 'primary'\"  class=\"dynbamicfontsize\" (click)=\"onNumberClick('5')\">5</button>\n            </div>\n        </div>\n        <div class=\"row justify-content-center \">\n            <div class=\"col-2 mb-3\">\n                <button mat-fab [color]=\"this.isAnswered && this.isCorrectNumberPerInputNumber('6') ? 'warn' : 'primary'\" class=\"dynbamicfontsize\" (click)=\"onNumberClick('6')\">6</button>\n            </div>\n            <div class=\"col-2 mb-3\">\n                <button mat-fab [color]=\"this.isAnswered && this.isCorrectNumberPerInputNumber('7') ? 'warn' : 'primary'\" class=\"dynbamicfontsize\" (click)=\"onNumberClick('7')\">7</button>\n            </div>\n            <div class=\"col-2 mb-3\">\n                <button mat-fab [color]=\"this.isAnswered && this.isCorrectNumberPerInputNumber('8') ? 'warn' : 'primary'\" class=\"dynbamicfontsize\" (click)=\"onNumberClick('8')\">8</button>\n            </div>\n            <div class=\"col-2 mb-3\">\n                <button mat-fab [color]=\"this.isAnswered && this.isCorrectNumberPerInputNumber('9') ? 'warn' : 'primary'\" class=\"dynbamicfontsize\" (click)=\"onNumberClick('9')\">9</button>\n            </div>\n            <div class=\"col-2 mb-3\">\n                <button mat-fab [color]=\"this.isAnswered && this.isCorrectNumberPerInputNumber('10') ? 'warn' : 'primary'\" class=\"dynbamicfontsize\" (click)=\"onNumberClick('10')\">10</button>\n            </div>\n          </div>\n      </div>\n\n</div>\n"

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
    NumbersComponent.prototype.isCorrectNumberPerInputNumber = function (number) {
        return number === this.answer;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], NumbersComponent.prototype, "isAnswered", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NumbersComponent.prototype, "answer", void 0);
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

/***/ "./src/app/games/letters/letters-bar/letters-bar.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/games/letters/letters-bar/letters-bar.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.example-list {\r\n  width: 1000px;\r\n  max-width: 100%;\r\n  border: solid 1px #ccc;\r\n  min-height: 60px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  background: white;\r\n  border-radius: 4px;\r\n  overflow: hidden;\r\n\r\n}\r\n\r\n@media screen and (max-width: 100) {\r\n\r\n}\r\n\r\n.example-list :hover{\r\n  background-color: cornflowerblue;\r\n}\r\n\r\n.example-box {\r\n  padding: 20px 10px;\r\n  border-right: solid 1px #ccc;\r\n  color: rgba(0, 0, 0, 0.87);\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  box-sizing: border-box;\r\n  cursor: move;\r\n  background: white;\r\n  font-size: 18px;\r\n  font-weight: bold;\r\n  flex-grow: 1;\r\n  flex-basis: 0;\r\n  justify-content: center;\r\n}\r\n\r\n.cdk-drag-preview {\r\n  box-sizing: border-box;\r\n  border-radius: 4px;\r\n  background-color: rgb(127, 168, 243);\r\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\r\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\r\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\r\n\r\n}\r\n\r\n.cdk-drag-placeholder {\r\n  opacity: 0;\r\n}\r\n\r\n.cdk-drag-animating {\r\n  transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n}\r\n\r\n.example-box:last-child {\r\n  border: none;\r\n}\r\n\r\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\r\n  transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZXMvbGV0dGVycy9sZXR0ZXJzLWJhci9sZXR0ZXJzLWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjs7QUFFbEI7O0FBRUE7O0FBRUE7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBSUE7RUFDRSxrQkFBa0I7RUFDbEIsNEJBQTRCO0VBQzVCLDBCQUEwQjtFQUMxQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsb0NBQW9DO0VBQ3BDOztnREFFOEM7O0FBRWhEOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsOERBQXNEO0VBQXRELHNEQUFzRDtFQUF0RCwwR0FBc0Q7QUFDeEQ7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSw4REFBc0Q7RUFBdEQsc0RBQXNEO0VBQXRELDBHQUFzRDtBQUN4RCIsImZpbGUiOiJzcmMvYXBwL2dhbWVzL2xldHRlcnMvbGV0dGVycy1iYXIvbGV0dGVycy1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLmV4YW1wbGUtbGlzdCB7XHJcbiAgd2lkdGg6IDEwMDBweDtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2NjYztcclxuICBtaW4taGVpZ2h0OiA2MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMCkge1xyXG5cclxufVxyXG5cclxuLmV4YW1wbGUtbGlzdCA6aG92ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XHJcbn1cclxuXHJcblxyXG5cclxuLmV4YW1wbGUtYm94IHtcclxuICBwYWRkaW5nOiAyMHB4IDEwcHg7XHJcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggI2NjYztcclxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBjdXJzb3I6IG1vdmU7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBmbGV4LWJhc2lzOiAwO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uY2RrLWRyYWctcHJldmlldyB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyNywgMTY4LCAyNDMpO1xyXG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSxcclxuICAgICAgICAgICAgICAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxyXG4gICAgICAgICAgICAgIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcblxyXG59XHJcblxyXG4uY2RrLWRyYWctcGxhY2Vob2xkZXIge1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5jZGstZHJhZy1hbmltYXRpbmcge1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcclxufVxyXG5cclxuLmV4YW1wbGUtYm94Omxhc3QtY2hpbGQge1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLmV4YW1wbGUtbGlzdC5jZGstZHJvcC1saXN0LWRyYWdnaW5nIC5leGFtcGxlLWJveDpub3QoLmNkay1kcmFnLXBsYWNlaG9sZGVyKSB7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/games/letters/letters-bar/letters-bar.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/games/letters/letters-bar/letters-bar.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n<div class=\"container\">\n    <div cdkDropList cdkDropListOrientation=\"horizontal\" class=\"example-list\" (cdkDropListDropped)=\"drop($event)\">\n        <div class=\"example-box\" *ngFor=\"let letter of letters\" cdkDrag>{{letter}}</div>\n    </div>\n    <div cdkDropList cdkDropListOrientation=\"horizontal\" class=\"example-list\" (cdkDropListDropped)=\"drop($event)\">\n        <div class=\"example-box\" *ngFor=\"let letter of letters2\" cdkDrag>{{letter}}</div>\n    </div>\n    <div cdkDropList cdkDropListOrientation=\"horizontal\" class=\"example-list\" (cdkDropListDropped)=\"drop($event)\">\n        <div class=\"example-box\" *ngFor=\"let letter of letters3\" cdkDrag>{{letter}}</div>\n    </div>\n</div> -->\n\n\n<!--\n<div class=\"container \">\n  <div dir=\"rtl\" class=\"row justify-content-center\">\n    <div id=\"alef\" class=\"col-2\" cdkDrag>\n      <h1>א</h1>\n    </div>\n    <div class=\"col-2\">\n      <h1>ב</h1>\n    </div>\n    <div class=\"col-2\">\n      <h1>ג</h1>\n    </div>\n    <div class=\"col-2\">\n      <h1>ד</h1>\n    </div>\n    <div class=\"col-2\">\n      <h1>ה</h1>\n    </div>\n  </div>\n  <div dir=\"rtl\" class=\"row justify-content-center\">\n    <div class=\"col-2\">\n      <h1>ו</h1>\n    </div>\n    <div class=\"col-2\">\n      <h1>ז</h1>\n    </div>\n    <div class=\"col-2\">\n      <h1>ח</h1>\n    </div>\n    <div class=\"col-2\">\n      <h1>ט</h1>\n    </div>\n    <div class=\"col-2\">\n      <h1>י</h1>\n    </div>\n  </div>\n  <div dir=\"rtl\" class=\"row justify-content-center\">\n    <div class=\"col-2\">\n        <h1>כ</h1>\n    </div>\n    <div class=\"col-2\">\n      <h1>ל</h1>\n    </div>\n    <div class=\"col-2\">\n      <h1>מ</h1>\n    </div>\n    <div class=\"col-2\">\n      <h1>נ</h1>\n    </div>\n    <div class=\"col-2\">\n      <h1>ס</h1>\n    </div>\n  </div>\n    <div dir=\"rtl\" class=\"row justify-content-center\">\n      <div class=\"col-2\">\n          <h1>ע</h1>\n      </div>\n      <div class=\"col-2\">\n          <h1>פ</h1>\n      </div>\n      <div class=\"col-2\">\n        <h1>צ</h1>\n      </div>\n      <div class=\"col-2\">\n          <h1>ק</h1>\n      </div>\n      <div class=\"col-2\">\n        <h1>ר</h1>\n      </div>\n      <div class=\"col-2\">\n        <h1>ש</h1>\n      </div>\n      <div class=\"col-2\">\n        <h1>ת</h1>\n      </div>\n    </div>\n    <div dir=\"rtl\" class=\"row justify-content-center\">\n        <div class=\"col-2\">\n          <h1>ך</h1>\n        </div>\n        <div class=\"col-2\">\n          <h1>ם</h1>\n        </div>\n        <div class=\"col-2\">\n          <h1>ן</h1>\n        </div>\n        <div class=\"col-2\">\n          <h1>ף</h1>\n        </div>\n        <div class=\"col-2\">\n          <h1>ץ</h1>\n        </div>\n      </div>\n</div>\n\n-->\n"

/***/ }),

/***/ "./src/app/games/letters/letters-bar/letters-bar.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/games/letters/letters-bar/letters-bar.component.ts ***!
  \********************************************************************/
/*! exports provided: LettersBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LettersBarComponent", function() { return LettersBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");



var LettersBarComponent = /** @class */ (function () {
    function LettersBarComponent(dragDrop) {
        this.dragDrop = dragDrop;
        this.letters = ['ט', 'ח', 'ז', 'ו', 'ה', 'ד', 'ג', 'ב', 'א'];
        this.letters2 = ['צ', 'פ', 'ע', 'ס', 'נ', 'מ', 'ל', 'כ', 'י'];
        this.letters3 = ['ץ', 'ף', 'ן', 'ם', 'ך', 'ת', 'ש', 'ר', 'ק'];
    }
    LettersBarComponent.prototype.ngOnInit = function () {
    };
    LettersBarComponent.prototype.noReturnPredicate = function () {
        return false;
    };
    LettersBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-letters-bar',
            template: __webpack_require__(/*! ./letters-bar.component.html */ "./src/app/games/letters/letters-bar/letters-bar.component.html"),
            styles: [__webpack_require__(/*! ./letters-bar.component.css */ "./src/app/games/letters/letters-bar/letters-bar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"]])
    ], LettersBarComponent);
    return LettersBarComponent;
}());



/***/ }),

/***/ "./src/app/games/letters/letters-intro/letters-intro.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/games/letters/letters-intro/letters-intro.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".imagesizing {\r\n  height: 40%;\r\n  width: 40%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZXMvbGV0dGVycy9sZXR0ZXJzLWludHJvL2xldHRlcnMtaW50cm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9nYW1lcy9sZXR0ZXJzL2xldHRlcnMtaW50cm8vbGV0dGVycy1pbnRyby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdlc2l6aW5nIHtcclxuICBoZWlnaHQ6IDQwJTtcclxuICB3aWR0aDogNDAlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/games/letters/letters-intro/letters-intro.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/games/letters/letters-intro/letters-intro.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div dir =\"rtl\" class=\"jumbotron\">\n    <div class=\"container\">\n      <div class=\"row\">\n          <h1 class=\"display-4\">אות פותחת ואות סוגרת</h1>\n      </div>\n      <hr class=\"my-4\">\n      <div class=\"row\">\n          <img src=\"../../../../assets/images/Letters.png\" class=\"img-fluid imagesizing\">\n      </div>\n      <div class=\"row mt-3\">\n          <p class=\"lead\">התאמת אות פותחת ואות סוגרת של התמונה המוצגת.</p>\n\n      </div>\n      <div class=\"row mt-3\">\n        <!-- Button trigger modal -->\n        <button dir=\"rtl\" type=\"button\" class=\"btn btn-outline-info\" data-toggle=\"modal\" data-target=\"#exampleModalLong\">\n            מידע נוסף על אות פותחת ואות סוגרת\n        </button>\n      </div>\n      <hr class=\"my-4\">\n      <div class=\"row\">\n          <a routerLink='/letters/1' class=\"btn btn-primary btn-lg\" role=\"button\">התחלת משחק</a>\n      </div>\n    </div>\n  </div>\n\n\n    <!-- Modal -->\n    <div dir=\"rtl\" class=\"modal fade\" id=\"exampleModalLong\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLongTitle\" aria-hidden=\"true\">\n      <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">אות פותחת ואות סוגרת</h5>\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n          <div class=\"modal-body\">\n            <p>\n\n            </p>\n            <p>\n\n            </p>\n            <p>\n\n            </p>\n            <p>\n\n            </p>\n            <p>\n\n            </p>\n            <p>\n\n            </p>\n            <p>\n\n            </p>\n            <p>\n\n            </p>\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">סגירה</button>\n          </div>\n        </div>\n      </div>\n    </div>\n"

/***/ }),

/***/ "./src/app/games/letters/letters-intro/letters-intro.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/games/letters/letters-intro/letters-intro.component.ts ***!
  \************************************************************************/
/*! exports provided: LettersIntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LettersIntroComponent", function() { return LettersIntroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var LettersIntroComponent = /** @class */ (function () {
    function LettersIntroComponent(router) {
        this.router = router;
    }
    LettersIntroComponent.prototype.ngOnInit = function () {
    };
    LettersIntroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-letters-intro',
            template: __webpack_require__(/*! ./letters-intro.component.html */ "./src/app/games/letters/letters-intro/letters-intro.component.html"),
            styles: [__webpack_require__(/*! ./letters-intro.component.css */ "./src/app/games/letters/letters-intro/letters-intro.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LettersIntroComponent);
    return LettersIntroComponent;
}());



/***/ }),

/***/ "./src/app/games/letters/letters/letters.component.css":
/*!*************************************************************!*\
  !*** ./src/app/games/letters/letters/letters.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".appear-as-disable{\r\n  pointer-events: none;\r\n  opacity: 0.2;\r\n}\r\n\r\n.nextback{\r\n  width: 90px;\r\n  border-radius: 100%;\r\n  cursor: pointer;\r\n}\r\n\r\n.correctimage {\r\n  border: solid 5px #ccc;\r\n  border-color: rgb(6, 240, 6) ;\r\n}\r\n\r\n.nextback:hover{\r\n  /* transform: scale(1.2); */\r\n  /* filter: blur(5px); */\r\n}\r\n\r\n.nextback:active{\r\n  /* filter: blur(5px); */\r\n  -webkit-transform: scale(1.3);\r\n          transform: scale(1.3);\r\n}\r\n\r\nimg {\r\n  max-height: 400px;\r\n  height: auto;\r\n  width: auto\\9; /* ie8 */\r\n}\r\n\r\n@media screen and (max-width: 994px) {\r\n  .nextback{\r\n    width: 70px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 760px) {\r\n  .nextback{\r\n    width: 45px;\r\n  }\r\n}\r\n\r\n.example-list {\r\n  width: 1000px;\r\n  max-width: 100%;\r\n  border: solid 1px black;\r\n  min-height: 60px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  background: white;\r\n  border-radius: 4px;\r\n  overflow: hidden;\r\n\r\n}\r\n\r\n.example-list-correct {\r\n  width: 1000px;\r\n  max-width: 100%;\r\n  border: solid 1px #ccc;\r\n  min-height: 60px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  background: rgb(69, 255, 100);\r\n  border-radius: 4px;\r\n  overflow: hidden;\r\n\r\n}\r\n\r\n.example-list :hover{\r\n  background-color: cornflowerblue;\r\n}\r\n\r\n.example-box {\r\n  padding: 15px 3px;\r\n  border-right: solid 1px black;\r\n  color: rgba(0, 0, 0, 0.87);\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  box-sizing: border-box;\r\n  cursor: move;\r\n  background: white;\r\n  font-size: 28px;\r\n  font-weight: bold;\r\n  flex-grow: 1;\r\n  flex-basis: 0;\r\n  justify-content: center;\r\n}\r\n\r\n.example-box-correct {\r\n  pointer-events: none;\r\n  padding: 15px 4px;\r\n  border-right: solid 1px #ccc;\r\n  color: rgba(0, 0, 0, 0.87);\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  box-sizing: border-box;\r\n  cursor: move;\r\n  background: rgb(69, 255, 100);\r\n  font-size: 28px;\r\n  font-weight: bold;\r\n  flex-grow: 1;\r\n  flex-basis: 0;\r\n  justify-content: center;\r\n}\r\n\r\n.cdk-drag-preview {\r\n  box-sizing: border-box;\r\n  border-radius: 4px;\r\n  background-color: rgb(127, 168, 243);\r\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\r\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\r\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\r\n\r\n}\r\n\r\n.cdk-drag-placeholder {\r\n  opacity: 0;\r\n}\r\n\r\n.cdk-drag-animating {\r\n  transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n}\r\n\r\n.example-box:last-child {\r\n  border: none;\r\n}\r\n\r\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\r\n  transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZXMvbGV0dGVycy9sZXR0ZXJzL2xldHRlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFvQjtFQUNwQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2Qiw2QkFBcUI7VUFBckIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixhQUFhLEVBQUUsUUFBUTtBQUN6Qjs7QUFFQTtFQUNFO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFdBQVc7RUFDYjtBQUNGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7O0FBRWxCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixnQkFBZ0I7O0FBRWxCOztBQUdBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUlBO0VBQ0UsaUJBQWlCO0VBQ2pCLDZCQUE2QjtFQUM3QiwwQkFBMEI7RUFDMUIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLDRCQUE0QjtFQUM1QiwwQkFBMEI7RUFDMUIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLG9DQUFvQztFQUNwQzs7Z0RBRThDOztBQUVoRDs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLDhEQUFzRDtFQUF0RCxzREFBc0Q7RUFBdEQsMEdBQXNEO0FBQ3hEOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsOERBQXNEO0VBQXRELHNEQUFzRDtFQUF0RCwwR0FBc0Q7QUFDeEQiLCJmaWxlIjoic3JjL2FwcC9nYW1lcy9sZXR0ZXJzL2xldHRlcnMvbGV0dGVycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcGVhci1hcy1kaXNhYmxle1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIG9wYWNpdHk6IDAuMjtcclxufVxyXG5cclxuLm5leHRiYWNre1xyXG4gIHdpZHRoOiA5MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY29ycmVjdGltYWdlIHtcclxuICBib3JkZXI6IHNvbGlkIDVweCAjY2NjO1xyXG4gIGJvcmRlci1jb2xvcjogcmdiKDYsIDI0MCwgNikgO1xyXG59XHJcblxyXG4ubmV4dGJhY2s6aG92ZXJ7XHJcbiAgLyogdHJhbnNmb3JtOiBzY2FsZSgxLjIpOyAqL1xyXG4gIC8qIGZpbHRlcjogYmx1cig1cHgpOyAqL1xyXG59XHJcblxyXG4ubmV4dGJhY2s6YWN0aXZle1xyXG4gIC8qIGZpbHRlcjogYmx1cig1cHgpOyAqL1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcclxufVxyXG5cclxuaW1nIHtcclxuICBtYXgtaGVpZ2h0OiA0MDBweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgd2lkdGg6IGF1dG9cXDk7IC8qIGllOCAqL1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTRweCkge1xyXG4gIC5uZXh0YmFja3tcclxuICAgIHdpZHRoOiA3MHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzYwcHgpIHtcclxuICAubmV4dGJhY2t7XHJcbiAgICB3aWR0aDogNDVweDtcclxuICB9XHJcbn1cclxuXHJcbi5leGFtcGxlLWxpc3Qge1xyXG4gIHdpZHRoOiAxMDAwcHg7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xyXG4gIG1pbi1oZWlnaHQ6IDYwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxufVxyXG5cclxuLmV4YW1wbGUtbGlzdC1jb3JyZWN0IHtcclxuICB3aWR0aDogMTAwMHB4O1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBib3JkZXI6IHNvbGlkIDFweCAjY2NjO1xyXG4gIG1pbi1oZWlnaHQ6IDYwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGJhY2tncm91bmQ6IHJnYig2OSwgMjU1LCAxMDApO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxufVxyXG5cclxuXHJcbi5leGFtcGxlLWxpc3QgOmhvdmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xyXG59XHJcblxyXG5cclxuXHJcbi5leGFtcGxlLWJveCB7XHJcbiAgcGFkZGluZzogMTVweCAzcHg7XHJcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggYmxhY2s7XHJcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgY3Vyc29yOiBtb3ZlO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgZmxleC1iYXNpczogMDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmV4YW1wbGUtYm94LWNvcnJlY3Qge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIHBhZGRpbmc6IDE1cHggNHB4O1xyXG4gIGJvcmRlci1yaWdodDogc29saWQgMXB4ICNjY2M7XHJcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgY3Vyc29yOiBtb3ZlO1xyXG4gIGJhY2tncm91bmQ6IHJnYig2OSwgMjU1LCAxMDApO1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgZmxleC1iYXNpczogMDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmNkay1kcmFnLXByZXZpZXcge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjcsIDE2OCwgMjQzKTtcclxuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksXHJcbiAgICAgICAgICAgICAgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcclxuICAgICAgICAgICAgICAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG5cclxufVxyXG5cclxuLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4uY2RrLWRyYWctYW5pbWF0aW5nIHtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XHJcbn1cclxuXHJcbi5leGFtcGxlLWJveDpsYXN0LWNoaWxkIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5leGFtcGxlLWxpc3QuY2RrLWRyb3AtbGlzdC1kcmFnZ2luZyAuZXhhbXBsZS1ib3g6bm90KC5jZGstZHJhZy1wbGFjZWhvbGRlcikge1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/games/letters/letters/letters.component.html":
/*!**************************************************************!*\
  !*** ./src/app/games/letters/letters/letters.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isLoaded\" class=\"container pt-2 pb-2 mb-3\">\n    <div class=\"row \" dir='rtl'>\n      <div class=\"col-2\">\n          <p class=\"text-left\">\n            <!-- <button (click)=\"loadPrevPage()\" id=\"backbutton\" type=\"button \" class=\"btn btn-warning\" [disabled]=\"isItTheFirstPic()\">הקודם</button> -->\n            <img id=\"backImg\" src=\"../../../assets/images/back.png\" (click)=\"loadPrevPage()\" [className]=\"!this.isItTheFirstPic() ? 'rounded float-left nextback' : 'rounded float-left nextback appear-as-disable'\" alt=\"Responsive image\">\n          </p>\n      </div>\n      <div class=\"col-8\">\n          <em><p class=\"text-center h3\" style=\"font-size: 5vw;\">אות פותחת ואות סוגרת</p></em>\n      </div>\n      <div class=\"col-2\">\n          <p class=\"text-right\">\n              <img id=\"nextImg\" src=\"../../../assets/images/next.png\" (click)=\"loadNextPage()\" [className]=\"!this.isItTheLastPic() ? 'rounded float-right nextback' : 'rounded float-right nextback appear-as-disable'\" alt=\"Responsive image\">\n            <!-- <button (click)=\"loadNextPage()\" id=\"nextbutton\" type=\"button\" class=\"btn btn-warning\" [disabled]=\"isItTheLastPic()\">הבא</button> -->\n          </p>\n      </div>\n    </div>\n</div>\n\n<div class=\"container mt-5\">\n    <div class=\"row justify-content-center\" dir='rtl'>\n        <div *ngIf=\"isLoaded\" class=\"col-3 align-self-center px-4\">\n          <p>אות פותחת</p>\n          <div cdkDropList id=\"firstLetter\" cdkDropListOrientation=\"horizontal\" class=\"example-list\" [cdkDropListEnterPredicate]=\"dynamicPredicateFirstLetter\" [cdkDropListData]=\"firstLetter\" (cdkDropListDropped)=\"drop($event)\">\n              <div [className]=\"isFirstLetterCorrect || this.isAnswered ? 'example-box-correct' : 'example-box'\" *ngFor=\"let letter of firstLetter\" cdkDrag>{{letter}}</div>\n          </div>\n        </div>\n        <div class=\"col-6 align-middle\">\n\n        <img src={{lettersDataToDisplay?.imageUrl}} (load)=\"onImgLoad()\" [className]=\"this.isAnswered ? 'rounded mx-auto d-block img-fluid shadow correctimage orig' : 'rounded mx-auto d-block img-fluid shadow orig'\" alt=\"Responsive image\">\n\n\n\n          <!-- <app-image  [imageUrl]=\"mockDataToDisplay.imageUrl\"></app-image> -->\n        </div>\n        <div *ngIf=\"isLoaded\" class=\"col-3 align-self-center px-4\">\n            <p>אות סוגרת</p>\n            <div cdkDropList id=\"lastLetter\" cdkDropListOrientation=\"horizontal\" class=\"example-list\" [cdkDropListEnterPredicate]=\"dynamicPredicateLastLetter\" [cdkDropListData]=\"lastLetter\" (cdkDropListDropped)=\"drop($event)\">\n                <div [className]=\"isLastLetterCorrect || this.isAnswered ? 'example-box-correct' : 'example-box'\" *ngFor=\"let letter of lastLetter\" cdkDrag>{{letter}}</div>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<div *ngIf=\"isLoaded\" class=\"container mt-5 pt-3 pb-3\" style=\"background: rgb(153, 187, 242)\">\n    <div class=\"example-container\">\n        <div id=\"src1\" cdkDropList cdkDropListOrientation=\"horizontal\" [cdkDropListConnectedTo]=\"['firstLetter','lastLetter']\" [cdkDropListData]=\"letters\" [cdkDropListEnterPredicate]=\"noReturnPredicate\" class=\"example-list\" (cdkDropListDropped)=\"drop($event)\">\n            <div class=\"example-box\" *ngFor=\"let letter of letters\" cdkDrag>{{letter}}</div>\n        </div>\n    </div>\n    <div class=\"example-container\">\n        <div id=\"src2\" cdkDropList cdkDropListOrientation=\"horizontal\" [cdkDropListConnectedTo]=\"['firstLetter','lastLetter']\" [cdkDropListData]=\"letters2\" [cdkDropListEnterPredicate]=\"noReturnPredicate\" class=\"example-list\" (cdkDropListDropped)=\"drop($event)\">\n            <div class=\"example-box\" *ngFor=\"let letter of letters2\" cdkDrag>{{letter}}</div>\n        </div>\n    </div>\n    <div class=\"example-container\">\n        <div id=\"src3\" cdkDropList cdkDropListOrientation=\"horizontal\" [cdkDropListConnectedTo]=\"['firstLetter','lastLetter']\" [cdkDropListData]=\"letters3\" [cdkDropListEnterPredicate]=\"noReturnPredicate\" class=\"example-list\" (cdkDropListDropped)=\"drop($event)\">\n            <div class=\"example-box\" *ngFor=\"let letter of letters3\" cdkDrag>{{letter}}</div>\n        </div>\n    </div>\n</div>\n\n<app-answer-feedback></app-answer-feedback>\n<app-load-spinner></app-load-spinner>\n"

/***/ }),

/***/ "./src/app/games/letters/letters/letters.component.ts":
/*!************************************************************!*\
  !*** ./src/app/games/letters/letters/letters.component.ts ***!
  \************************************************************/
/*! exports provided: LettersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LettersComponent", function() { return LettersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_load_spinner_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/load-spinner.service */ "./src/app/services/load-spinner.service.ts");
/* harmony import */ var _services_http_letters_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/http/letters.service */ "./src/app/services/http/letters.service.ts");
/* harmony import */ var _services_answer_feedback_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/answer-feedback.service */ "./src/app/services/answer-feedback.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");








var LettersComponent = /** @class */ (function () {
    function LettersComponent(dragDrop, router, lettersService, answerFeedback, loadSpinner, activeRoute) {
        var _this = this;
        this.dragDrop = dragDrop;
        this.router = router;
        this.lettersService = lettersService;
        this.answerFeedback = answerFeedback;
        this.loadSpinner = loadSpinner;
        this.activeRoute = activeRoute;
        this.letters = ['ט', 'ח', 'ז', 'ו', 'ה', 'ד', 'ג', 'ב', 'א'];
        this.letters2 = ['צ', 'פ', 'ע', 'ס', 'נ', 'מ', 'ל', 'כ', 'י'];
        this.letters3 = ['ץ', 'ף', 'ן', 'ם', 'ך', 'ת', 'ש', 'ר', 'ק'];
        this.firstLetter = [];
        this.lastLetter = [];
        this.lettersData = [];
        this.lettersDataCorrect = [];
        this.isLoaded = false;
        this.isAnswered = false;
        this.dynamicPredicateFirstLetter = function (item) {
            return item.element.nativeElement.textContent === _this.lettersDataToDisplay.firstLetter;
        };
        this.dynamicPredicateLastLetter = function (item) {
            return item.element.nativeElement.textContent === _this.lettersDataToDisplay.lastLetter;
        };
        activeRoute.params.subscribe(function (val) {
            _this.idToDisplay = val.id;
            _this.ngOnInit();
        });
        this.lettersService.getLettersData().subscribe(function (value) {
            _this.setLettersData(value);
            _this.ngOnInit();
        });
    }
    LettersComponent.prototype.ngOnInit = function () {
        this.loadSpinner.isDisplayLoading(true);
        this.loadCurrentPage();
    };
    LettersComponent.prototype.setLettersData = function (data) {
        this.lettersData = data;
    };
    LettersComponent.prototype.loadCurrentPage = function () {
        if (+this.idToDisplay > this.lettersData.length || isNaN(+this.idToDisplay)) {
            this.idToDisplay = '1';
            this.router.navigateByUrl('/letters/' + this.idToDisplay);
            return;
        }
        this.lettersDataToDisplay = this.lettersData[+this.idToDisplay - 1];
        if (this.lettersDataToDisplay === undefined) {
            this.lettersDataToDisplay = this.lettersData[this.lettersData.length - 1];
        }
        if (this.isAnsweredById(this.lettersDataToDisplay.id)) {
            this.isAnswered = true;
            this.firstLetter = [this.lettersDataToDisplay.firstLetter];
            this.lastLetter = [this.lettersDataToDisplay.lastLetter];
        }
        else {
            this.isAnswered = false;
            this.firstLetter = [];
            this.lastLetter = [];
        }
        this.clearFirstOrLastLetterCorrect();
    };
    LettersComponent.prototype.isAnsweredById = function (id) {
        for (var _i = 0, _a = this.lettersDataCorrect; _i < _a.length; _i++) {
            var answeredLetter = _a[_i];
            if (answeredLetter.id === id) {
                return true;
            }
        }
        return false;
    };
    LettersComponent.prototype.loadMockData = function () {
        this.lettersData = [{ imageUrl: "https://extension.usu.edu/yardandgarden/ou-images/apples.png", firstLetter: 'ת', lastLetter: 'ח', id: '1' },
            { imageUrl: "https://target.scene7.com/is/image/Target/GUEST_f5d0cfc3-9d02-4ee0-a6c6-ed5dc09971d1?wid=488&hei=488&fmt=pjpeg", firstLetter: 'ב', lastLetter: 'ה', id: '2' }];
    };
    LettersComponent.prototype.drop = function (event) {
        var _this = this;
        if (event.previousContainer === event.container) {
            // moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            // transferArrayItem(event.previousContainer.data,
            //   event.container.data,
            //   event.previousIndex,
            //   event.currentIndex);
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["copyArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
        if (this.isCompletelyAnswered()) {
            this.lettersDataCorrect.push(this.lettersDataToDisplay);
            this.answerFeedback.displayAnswerFeedback(true);
            this.answerFeedback.playSound(true);
            var source = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["timer"])(1500);
            var abc = source.subscribe(function (val) {
                if (!_this.isItTheLastPic()) {
                    _this.loadNextPage();
                }
            });
        }
    };
    LettersComponent.prototype.isCompletelyAnswered = function () {
        if (!this.lettersDataToDisplay) {
            return false;
        }
        if (this.lettersDataToDisplay.lastLetter && this.firstLetter[0]) {
            this.isFirstLetterCorrect = true;
        }
        if (this.lastLetter[0] === this.lettersDataToDisplay.lastLetter) {
            this.isLastLetterCorrect = true;
        }
        return this.lastLetter[0] === this.lettersDataToDisplay.lastLetter && this.firstLetter[0] === this.lettersDataToDisplay.firstLetter;
    };
    LettersComponent.prototype.noReturnPredicate = function () {
        return false;
    };
    LettersComponent.prototype.isItTheLastPic = function () {
        if (this.lettersData.length !== 0) {
            return this.idToDisplay === this.lettersData[this.lettersData.length - 1].id;
        }
        return true;
    };
    LettersComponent.prototype.isItTheFirstPic = function () {
        return this.idToDisplay === '1';
    };
    LettersComponent.prototype.loadNextPage = function () {
        var nextId = +this.idToDisplay + 1;
        this.idToDisplay = String(nextId);
        this.clearFirstAndLastLetters();
        this.router.navigateByUrl('/letters/' + this.idToDisplay);
    };
    LettersComponent.prototype.loadPrevPage = function () {
        var nextId = +this.idToDisplay - 1;
        this.idToDisplay = String(nextId);
        this.clearFirstAndLastLetters();
        this.router.navigateByUrl('/letters/' + this.idToDisplay);
    };
    LettersComponent.prototype.clearFirstAndLastLetters = function () {
        this.firstLetter = [];
        this.lastLetter = [];
    };
    LettersComponent.prototype.clearFirstOrLastLetterCorrect = function () {
        this.isFirstLetterCorrect = false;
        this.isLastLetterCorrect = false;
    };
    LettersComponent.prototype.onImgLoad = function () {
        this.isLoaded = true;
        this.loadSpinner.isDisplayLoading(false);
    };
    LettersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-letters',
            template: __webpack_require__(/*! ./letters.component.html */ "./src/app/games/letters/letters/letters.component.html"),
            styles: [__webpack_require__(/*! ./letters.component.css */ "./src/app/games/letters/letters/letters.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["DragDropModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _services_http_letters_service__WEBPACK_IMPORTED_MODULE_2__["LettersService"],
            _services_answer_feedback_service__WEBPACK_IMPORTED_MODULE_3__["AnswerFeedbackService"],
            _services_load_spinner_service__WEBPACK_IMPORTED_MODULE_1__["LoadSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], LettersComponent);
    return LettersComponent;
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

module.exports = "<section >\n  <!-- Pictur of gan play-->\n</section>\n<section>\n  <div dir=\"rtl\" class=\"container\">\n    <div class=\"row justify-content-center\">\n      <h3>המשחקים שלנו</h3>\n    </div>\n    <div class=\"row\">\n      <div class=\"col col-sm-12 col-md-6 col-lg-6 mb-4\">\n          <div class=\"card\" style=\"width: 20rem;\">\n              <img src=\"../../assets/images/Numbers.png\" style=\"background:cornsilk; height: 180px\" class=\"card-img-top\">\n              <div class=\"card-body\">\n                <h5 class=\"card-title\">משחק ספירה</h5>\n                <hr class=\"my-4\">\n                <p class=\"card-text\">ספירה ומניה של אובייקטים המופיעים בכל תמונה והתאמת מספר</p>\n                <a routerLink='/counting' class=\"btn btn-primary\">למשחק</a>\n              </div>\n          </div>\n      </div>\n      <div class=\"col col-sm-12 col-md-6 col-lg-6 mb-4\">\n          <div class=\"card\" style=\"width: 20rem;\">\n              <img src=\"../../assets/images/Letters.png\" style=\"background: cornsilk; height: 180px\" class=\"card-img-top\">\n              <div class=\"card-body\">\n                <h5 class=\"card-title\">אות פותחת אות סוגרת</h5>\n                <hr class=\"my-4\">\n                <p class=\"card-text\">התאמת אות פותחת ואות סוגרת לאובייקטים המופיעים בכל תמונה</p>\n                <a routerLink='/letters' class=\"btn btn-primary\">למשחק</a>\n              </div>\n          </div>\n      </div>\n      <div class=\"col col-sm-12 col-md-6 col-lg-6 mb-4\">\n          <div class=\"card\" style=\"width: 20rem;\">\n              <img src=\"../../assets/images/Numbers.png\" style=\"background:cornsilk\" class=\"card-img-top\">\n              <div class=\"card-body\">\n                <h5 class=\"card-title\">משחק 3</h5>\n                <hr class=\"my-4\">\n                <p class=\"card-text\">הסבר על משחק 3 בלה בלה בלה בלה</p>\n                <a class=\"btn btn-primary\">למשחק</a>\n              </div>\n          </div>\n      </div>\n    </div>\n  </div>\n\n</section>\n\n\n\n\n"

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
/* harmony import */ var _services_http_home_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/http/home.service */ "./src/app/services/http/home.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, homeService) {
        this.router = router;
        this.homeService = homeService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.callGetHello();
    };
    HomeComponent.prototype.callGetHello = function () {
        this.homeService.getHello().subscribe(function (res) {
            console.log(res);
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_http_home_service__WEBPACK_IMPORTED_MODULE_1__["HomeService"]])
    ], HomeComponent);
    return HomeComponent;
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

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light \" style=\"background-color: #69a5f9;\">\n    <a class=\"navbar-brand\" >\n        <img src=\"../../assets/images/logo2.png\" width=\"30\" height=\"30\" class=\"d-inline-block align-top\" alt=\"\">\n      גן פליי</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\" data-toggle=\"collapse\" data-target=\".navbar-collapse.show\">\n            <a class=\"nav-link\" routerLink='/letters' routerLinkActive='Active'>אות פותחת וסוגרת</a>\n        </li>\n        <li class=\"nav-item\" data-toggle=\"collapse\" data-target=\".navbar-collapse.show\">\n            <a class=\"nav-link\" routerLink='/counting' routerLinkActive='Active'>ספירה ומניה</a>\n        </li>\n        <li class=\"nav-item active\" data-toggle=\"collapse\" data-target=\".navbar-collapse.show\">\n          <a class=\"nav-link\" routerLink='/home' routerLinkActive='Active'>בית</a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n"

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
        this.playSoundperInput = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    AnswerFeedbackService.prototype.displayAnswerFeedback = function (isCorrect) {
        this.isAnswerCorrectObs.next(isCorrect);
    };
    AnswerFeedbackService.prototype.playSound = function (isCorrect) {
        this.playSoundperInput.next(isCorrect);
    };
    AnswerFeedbackService.prototype.getIsAnswerCorrectObs = function () {
        return this.isAnswerCorrectObs;
    };
    AnswerFeedbackService.prototype.getPlaySoundperInput = function () {
        return this.playSoundperInput;
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

/***/ "./src/app/services/http/home.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/http/home.service.ts ***!
  \***********************************************/
/*! exports provided: HomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeService", function() { return HomeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var HomeService = /** @class */ (function () {
    function HomeService(httpClient) {
        this.httpClient = httpClient;
        this.url = 'https://ganplay.appspot.com';
    }
    HomeService.prototype.getHello = function () {
        return this.httpClient.get(this.url);
    };
    HomeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HomeService);
    return HomeService;
}());



/***/ }),

/***/ "./src/app/services/http/letters.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/http/letters.service.ts ***!
  \**************************************************/
/*! exports provided: LettersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LettersService", function() { return LettersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var LettersService = /** @class */ (function () {
    function LettersService(httpClient) {
        this.httpClient = httpClient;
        this.url = 'https://ganplay.appspot.com/Letters';
    }
    LettersService.prototype.getLettersData = function () {
        return this.httpClient.get(this.url);
    };
    LettersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LettersService);
    return LettersService;
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