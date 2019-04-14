'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties (target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./slider.css');

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn (self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_React$Component) {
  _inherits(_class, _React$Component);

  function _class (props) {
    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

    _this.index = 1;
    _this.container = _react2.default.createRef();
    return _this;
  }

  _createClass(_class, [{
    key: 'componentDidMount',
    value: function componentDidMount () {
      var _this2 = this;

      var delayTime = this.props.delayTime * 1000 || 2000;
      this.timer = setTimeout(this.loop.bind(this), delayTime);
      var parent = this.container.current.parentNode;
      //获取父容器的宽度
      var width = this.props.width || parent.clientWidth;
      //获取父容器的高度。
      var height = this.props.height || parent.clientHeight;
      var imgs = this.container.current.children;
      imgs[0].style.transform = 'translateZ(' + height / 2 + 'px)';
      imgs[2].style.transform = 'translateZ(-' + height / 2 + 'px) rotateX(180deg)';
      this.container.current.style.width = width + 'px';
      this.container.current.style.height = height + 'px';
      this.container.current.addEventListener('transitionend', function () {
        _this2.timer = setTimeout(_this2.loop.bind(_this2), delayTime);
      });
    }
  }, {
    key: 'loop',
    value: function loop () {
      this.container.current.style.transform = 'rotateX(' + (this.props.direction || 1) * this.index * 90 + 'deg)';
      this.container.current.style.transition = (this.props.transitionTime || 2) + 's';
      this.index++;
    }
  }, {
    key: 'render',
    value: function render () {
      return _react2.default.createElement(
        'div',
        { className: 'container', ref: this.container },
        this.props.imgList.map(function (item) {
          return _react2.default.createElement('img', { className: 'img-item', src: item.src });
        })
      );
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;