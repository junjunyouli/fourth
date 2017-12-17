"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _indexController = require("./indexController");

var _indexController2 = _interopRequireDefault(_indexController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var controllerInit = {
	init: function init(router) {
		router.get("/index/index", _indexController2.default.index());
		router.get("/index/update", _indexController2.default.update());
		router.get("/index/star", _indexController2.default.star());
		router.get("/index/hands", _indexController2.default.hands());
		router.get("/index/getAdv", _indexController2.default.getAdv());
	}
};

exports.default = controllerInit;