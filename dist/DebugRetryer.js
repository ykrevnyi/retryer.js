'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Retryer2 = require('./Retryer');

var _Retryer3 = _interopRequireDefault(_Retryer2);

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Test helper.
 *
 * This class only defines few spies for testing purposes.
 * Does not have any additinal functional.
 */
var DebugRetryer = function (_Retryer) {
  _inherits(DebugRetryer, _Retryer);

  function DebugRetryer(promise, options) {
    _classCallCheck(this, DebugRetryer);

    var _this = _possibleConstructorReturn(this, (DebugRetryer.__proto__ || Object.getPrototypeOf(DebugRetryer)).call(this, promise, options));

    _this._spies = {
      init: _sinon2.default.spy(),
      tick: _sinon2.default.spy(),
      error: _sinon2.default.spy(),
      success: _sinon2.default.spy()
    };

    _this._spies.init && _this._spies.init();
    return _this;
  }

  _createClass(DebugRetryer, [{
    key: 'getSpies',
    value: function getSpies() {
      return this._spies;
    }
  }, {
    key: 'retry',
    value: function retry() {
      this._spies.tick && this._spies.tick();

      return _get(DebugRetryer.prototype.__proto__ || Object.getPrototypeOf(DebugRetryer.prototype), 'retry', this).call(this);
    }
  }, {
    key: '_handleSuccess',
    value: function _handleSuccess(data) {
      this._spies.success && this._spies.success();

      return _get(DebugRetryer.prototype.__proto__ || Object.getPrototypeOf(DebugRetryer.prototype), '_handleSuccess', this).call(this, data);
    }
  }, {
    key: '_backoff',
    value: function _backoff() {
      this._spies.error && this._spies.error();

      return _get(DebugRetryer.prototype.__proto__ || Object.getPrototypeOf(DebugRetryer.prototype), '_backoff', this).call(this);
    }
  }]);

  return DebugRetryer;
}(_Retryer3.default);

exports.default = DebugRetryer;