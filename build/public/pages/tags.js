webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(5);
module.exports = __webpack_require__(6);


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(0);

var thumb = new _index.Thumb();

xtag.register('x-praise', {
    content: '<div id="hands" >' + ' <div class="pd ">' + '<span class="hs1"></span>' + '<span class="hs2"></span>' + '<span class="hs3"></span>' + ' <span class="hs4"></span>' + '<span class="hs5"></span>' + '<span class="hs6"></span>' + '</div>' + '<div id="add" class="hide" ><span >+1</span></div>' + '</div>',
    methods: {
        parise: function parise() {
            var _this = this;
            thumb.addThumb();
            var add = _this.querySelector("#add");
            add.className = "show";
            setTimeout(function () {
                add.className = "hide";
            }, 800);
        }
    },
    events: {
        click: function click(e) {
            var _this = this;
            if (e.path[2].id == "hands") {
                var t = "";
                if (t) {
                    clearTimeout(t);
                }
                t = setTimeout(function () {
                    _this.parise();
                }, 500);
            }
        }
    }
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(0);

var star = new _index.Star();

xtag.register('x-star', {
    content: '<div id="star" >' + '<div class="star">' + '<div class="five">' + '</div>' + '</div>' + '<div id="add" class="hide" ><span >+1</span></div>' + '</div>',
    methods: {
        parise: function parise() {
            var _this = this;
            star.addThumb();
            var add = _this.querySelector("#add");
            add.className = "show";
            setTimeout(function () {
                add.className = "hide";
            }, 800);
        }
    },
    events: {
        click: function click(e) {
            var _this = this;
            if (e.path[2].id == "star") {
                var t = "";
                if (t) {
                    clearTimeout(t);
                }
                t = setTimeout(function () {
                    _this.parise();
                }, 500);
            }
        }
    }
});

/***/ })
],[4]);