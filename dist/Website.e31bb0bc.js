// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/locomotive-scroll/dist/locomotive-scroll.esm.js":[function(require,module,exports) {
var global = arguments[3];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Smooth = exports.Native = exports.default = void 0;

/* locomotive-scroll v4.0.6 | MIT License | https://github.com/locomotivemtl/locomotive-scroll */
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);

      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var defaults = {
  el: document,
  name: 'scroll',
  offset: [0, 0],
  repeat: false,
  smooth: false,
  direction: 'vertical',
  gestureDirection: 'vertical',
  reloadOnContextChange: false,
  lerp: 0.1,
  "class": 'is-inview',
  scrollbarContainer: false,
  scrollbarClass: 'c-scrollbar',
  scrollingClass: 'has-scroll-scrolling',
  draggingClass: 'has-scroll-dragging',
  smoothClass: 'has-scroll-smooth',
  initClass: 'has-scroll-init',
  getSpeed: false,
  getDirection: false,
  scrollFromAnywhere: false,
  multiplier: 1,
  firefoxMultiplier: 50,
  touchMultiplier: 2,
  resetNativeScroll: true,
  tablet: {
    smooth: false,
    direction: 'vertical',
    gestureDirection: 'vertical',
    breakpoint: 1024
  },
  smartphone: {
    smooth: false,
    direction: 'vertical',
    gestureDirection: 'vertical'
  }
};

var _default = /*#__PURE__*/function () {
  function _default() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, _default);

    Object.assign(this, defaults, options);
    this.smartphone = defaults.smartphone;
    if (options.smartphone) Object.assign(this.smartphone, options.smartphone);
    this.tablet = defaults.tablet;
    if (options.tablet) Object.assign(this.tablet, options.tablet);
    this.namespace = 'locomotive';
    this.html = document.documentElement;
    this.windowHeight = window.innerHeight;
    this.windowWidth = window.innerWidth;
    this.windowMiddle = {
      x: this.windowWidth / 2,
      y: this.windowHeight / 2
    };
    this.els = {};
    this.currentElements = {};
    this.listeners = {};
    this.hasScrollTicking = false;
    this.hasCallEventSet = false;
    this.checkScroll = this.checkScroll.bind(this);
    this.checkResize = this.checkResize.bind(this);
    this.checkEvent = this.checkEvent.bind(this);
    this.instance = {
      scroll: {
        x: 0,
        y: 0
      },
      limit: {
        x: this.html.offsetHeight,
        y: this.html.offsetHeight
      },
      currentElements: this.currentElements
    };

    if (this.isMobile) {
      if (this.isTablet) {
        this.context = 'tablet';
      } else {
        this.context = 'smartphone';
      }
    } else {
      this.context = 'desktop';
    }

    if (this.isMobile) this.direction = this[this.context].direction;

    if (this.direction === 'horizontal') {
      this.directionAxis = 'x';
    } else {
      this.directionAxis = 'y';
    }

    if (this.getDirection) {
      this.instance.direction = null;
    }

    if (this.getDirection) {
      this.instance.speed = 0;
    }

    this.html.classList.add(this.initClass);
    window.addEventListener('resize', this.checkResize, false);
  }

  _createClass(_default, [{
    key: "init",
    value: function init() {
      this.initEvents();
    }
  }, {
    key: "checkScroll",
    value: function checkScroll() {
      this.dispatchScroll();
    }
  }, {
    key: "checkResize",
    value: function checkResize() {
      var _this = this;

      if (!this.resizeTick) {
        this.resizeTick = true;
        requestAnimationFrame(function () {
          _this.resize();

          _this.resizeTick = false;
        });
      }
    }
  }, {
    key: "resize",
    value: function resize() {}
  }, {
    key: "checkContext",
    value: function checkContext() {
      if (!this.reloadOnContextChange) return;
      this.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1 || this.windowWidth < this.tablet.breakpoint;
      this.isTablet = this.isMobile && this.windowWidth >= this.tablet.breakpoint;
      var oldContext = this.context;

      if (this.isMobile) {
        if (this.isTablet) {
          this.context = 'tablet';
        } else {
          this.context = 'smartphone';
        }
      } else {
        this.context = 'desktop';
      }

      if (oldContext != this.context) {
        var oldSmooth = oldContext == 'desktop' ? this.smooth : this[oldContext].smooth;
        var newSmooth = this.context == 'desktop' ? this.smooth : this[this.context].smooth;
        if (oldSmooth != newSmooth) window.location.reload();
      }
    }
  }, {
    key: "initEvents",
    value: function initEvents() {
      var _this2 = this;

      this.scrollToEls = this.el.querySelectorAll("[data-".concat(this.name, "-to]"));
      this.setScrollTo = this.setScrollTo.bind(this);
      this.scrollToEls.forEach(function (el) {
        el.addEventListener('click', _this2.setScrollTo, false);
      });
    }
  }, {
    key: "setScrollTo",
    value: function setScrollTo(event) {
      event.preventDefault();
      this.scrollTo(event.currentTarget.getAttribute("data-".concat(this.name, "-href")) || event.currentTarget.getAttribute('href'), {
        offset: event.currentTarget.getAttribute("data-".concat(this.name, "-offset"))
      });
    }
  }, {
    key: "addElements",
    value: function addElements() {}
  }, {
    key: "detectElements",
    value: function detectElements(hasCallEventSet) {
      var _this3 = this;

      var scrollTop = this.instance.scroll.y;
      var scrollBottom = scrollTop + this.windowHeight;
      var scrollLeft = this.instance.scroll.x;
      var scrollRight = scrollLeft + this.windowWidth;
      Object.entries(this.els).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            i = _ref2[0],
            el = _ref2[1];

        if (el && (!el.inView || hasCallEventSet)) {
          if (_this3.direction === 'horizontal') {
            if (scrollRight >= el.left && scrollLeft < el.right) {
              _this3.setInView(el, i);
            }
          } else {
            if (scrollBottom >= el.top && scrollTop < el.bottom) {
              _this3.setInView(el, i);
            }
          }
        }

        if (el && el.inView) {
          if (_this3.direction === 'horizontal') {
            var width = el.right - el.left;
            el.progress = (_this3.instance.scroll.x - (el.left - _this3.windowWidth)) / (width + _this3.windowWidth);

            if (scrollRight < el.left || scrollLeft > el.right) {
              _this3.setOutOfView(el, i);
            }
          } else {
            var height = el.bottom - el.top;
            el.progress = (_this3.instance.scroll.y - (el.top - _this3.windowHeight)) / (height + _this3.windowHeight);

            if (scrollBottom < el.top || scrollTop > el.bottom) {
              _this3.setOutOfView(el, i);
            }
          }
        }
      }); // this.els = this.els.filter((current, i) => {
      //     return current !== null;
      // });

      this.hasScrollTicking = false;
    }
  }, {
    key: "setInView",
    value: function setInView(current, i) {
      this.els[i].inView = true;
      current.el.classList.add(current["class"]);
      this.currentElements[i] = current;

      if (current.call && this.hasCallEventSet) {
        this.dispatchCall(current, 'enter');

        if (!current.repeat) {
          this.els[i].call = false;
        }
      } // if (!current.repeat && !current.speed && !current.sticky) {
      //     if (!current.call || current.call && this.hasCallEventSet) {
      //        this.els[i] = null
      //     }
      // }

    }
  }, {
    key: "setOutOfView",
    value: function setOutOfView(current, i) {
      var _this4 = this; // if (current.repeat || current.speed !== undefined) {


      this.els[i].inView = false; // }

      Object.keys(this.currentElements).forEach(function (el) {
        el === i && delete _this4.currentElements[el];
      });

      if (current.call && this.hasCallEventSet) {
        this.dispatchCall(current, 'exit');
      }

      if (current.repeat) {
        current.el.classList.remove(current["class"]);
      }
    }
  }, {
    key: "dispatchCall",
    value: function dispatchCall(current, way) {
      this.callWay = way;
      this.callValue = current.call.split(',').map(function (item) {
        return item.trim();
      });
      this.callObj = current;
      if (this.callValue.length == 1) this.callValue = this.callValue[0];
      var callEvent = new Event(this.namespace + 'call');
      this.el.dispatchEvent(callEvent);
    }
  }, {
    key: "dispatchScroll",
    value: function dispatchScroll() {
      var scrollEvent = new Event(this.namespace + 'scroll');
      this.el.dispatchEvent(scrollEvent);
    }
  }, {
    key: "setEvents",
    value: function setEvents(event, func) {
      if (!this.listeners[event]) {
        this.listeners[event] = [];
      }

      var list = this.listeners[event];
      list.push(func);

      if (list.length === 1) {
        this.el.addEventListener(this.namespace + event, this.checkEvent, false);
      }

      if (event === 'call') {
        this.hasCallEventSet = true;
        this.detectElements(true);
      }
    }
  }, {
    key: "unsetEvents",
    value: function unsetEvents(event, func) {
      if (!this.listeners[event]) return;
      var list = this.listeners[event];
      var index = list.indexOf(func);
      if (index < 0) return;
      list.splice(index, 1);

      if (list.index === 0) {
        this.el.removeEventListener(this.namespace + event, this.checkEvent, false);
      }
    }
  }, {
    key: "checkEvent",
    value: function checkEvent(event) {
      var _this5 = this;

      var name = event.type.replace(this.namespace, '');
      var list = this.listeners[name];
      if (!list || list.length === 0) return;
      list.forEach(function (func) {
        switch (name) {
          case 'scroll':
            return func(_this5.instance);

          case 'call':
            return func(_this5.callValue, _this5.callWay, _this5.callObj);

          default:
            return func();
        }
      });
    }
  }, {
    key: "startScroll",
    value: function startScroll() {}
  }, {
    key: "stopScroll",
    value: function stopScroll() {}
  }, {
    key: "setScroll",
    value: function setScroll(x, y) {
      this.instance.scroll = {
        x: 0,
        y: 0
      };
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var _this6 = this;

      window.removeEventListener('resize', this.checkResize, false);
      Object.keys(this.listeners).forEach(function (event) {
        _this6.el.removeEventListener(_this6.namespace + event, _this6.checkEvent, false);
      });
      this.listeners = {};
      this.scrollToEls.forEach(function (el) {
        el.removeEventListener('click', _this6.setScrollTo, false);
      });
      this.html.classList.remove(this.initClass);
    }
  }]);

  return _default;
}();

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
  return module = {
    exports: {}
  }, fn(module, module.exports), module.exports;
}

var smoothscroll = createCommonjsModule(function (module, exports) {
  /* smoothscroll v0.4.4 - 2019 - Dustan Kasten, Jeremias Menichelli - MIT License */
  (function () {
    // polyfill
    function polyfill() {
      // aliases
      var w = window;
      var d = document; // return if scroll behavior is supported and polyfill is not forced

      if ('scrollBehavior' in d.documentElement.style && w.__forceSmoothScrollPolyfill__ !== true) {
        return;
      } // globals


      var Element = w.HTMLElement || w.Element;
      var SCROLL_TIME = 468; // object gathering original scroll methods

      var original = {
        scroll: w.scroll || w.scrollTo,
        scrollBy: w.scrollBy,
        elementScroll: Element.prototype.scroll || scrollElement,
        scrollIntoView: Element.prototype.scrollIntoView
      }; // define timing method

      var now = w.performance && w.performance.now ? w.performance.now.bind(w.performance) : Date.now;
      /**
       * indicates if a the current browser is made by Microsoft
       * @method isMicrosoftBrowser
       * @param {String} userAgent
       * @returns {Boolean}
       */

      function isMicrosoftBrowser(userAgent) {
        var userAgentPatterns = ['MSIE ', 'Trident/', 'Edge/'];
        return new RegExp(userAgentPatterns.join('|')).test(userAgent);
      }
      /*
       * IE has rounding bug rounding down clientHeight and clientWidth and
       * rounding up scrollHeight and scrollWidth causing false positives
       * on hasScrollableSpace
       */


      var ROUNDING_TOLERANCE = isMicrosoftBrowser(w.navigator.userAgent) ? 1 : 0;
      /**
       * changes scroll position inside an element
       * @method scrollElement
       * @param {Number} x
       * @param {Number} y
       * @returns {undefined}
       */

      function scrollElement(x, y) {
        this.scrollLeft = x;
        this.scrollTop = y;
      }
      /**
       * returns result of applying ease math function to a number
       * @method ease
       * @param {Number} k
       * @returns {Number}
       */


      function ease(k) {
        return 0.5 * (1 - Math.cos(Math.PI * k));
      }
      /**
       * indicates if a smooth behavior should be applied
       * @method shouldBailOut
       * @param {Number|Object} firstArg
       * @returns {Boolean}
       */


      function shouldBailOut(firstArg) {
        if (firstArg === null || typeof firstArg !== 'object' || firstArg.behavior === undefined || firstArg.behavior === 'auto' || firstArg.behavior === 'instant') {
          // first argument is not an object/null
          // or behavior is auto, instant or undefined
          return true;
        }

        if (typeof firstArg === 'object' && firstArg.behavior === 'smooth') {
          // first argument is an object and behavior is smooth
          return false;
        } // throw error when behavior is not supported


        throw new TypeError('behavior member of ScrollOptions ' + firstArg.behavior + ' is not a valid value for enumeration ScrollBehavior.');
      }
      /**
       * indicates if an element has scrollable space in the provided axis
       * @method hasScrollableSpace
       * @param {Node} el
       * @param {String} axis
       * @returns {Boolean}
       */


      function hasScrollableSpace(el, axis) {
        if (axis === 'Y') {
          return el.clientHeight + ROUNDING_TOLERANCE < el.scrollHeight;
        }

        if (axis === 'X') {
          return el.clientWidth + ROUNDING_TOLERANCE < el.scrollWidth;
        }
      }
      /**
       * indicates if an element has a scrollable overflow property in the axis
       * @method canOverflow
       * @param {Node} el
       * @param {String} axis
       * @returns {Boolean}
       */


      function canOverflow(el, axis) {
        var overflowValue = w.getComputedStyle(el, null)['overflow' + axis];
        return overflowValue === 'auto' || overflowValue === 'scroll';
      }
      /**
       * indicates if an element can be scrolled in either axis
       * @method isScrollable
       * @param {Node} el
       * @param {String} axis
       * @returns {Boolean}
       */


      function isScrollable(el) {
        var isScrollableY = hasScrollableSpace(el, 'Y') && canOverflow(el, 'Y');
        var isScrollableX = hasScrollableSpace(el, 'X') && canOverflow(el, 'X');
        return isScrollableY || isScrollableX;
      }
      /**
       * finds scrollable parent of an element
       * @method findScrollableParent
       * @param {Node} el
       * @returns {Node} el
       */


      function findScrollableParent(el) {
        while (el !== d.body && isScrollable(el) === false) {
          el = el.parentNode || el.host;
        }

        return el;
      }
      /**
       * self invoked function that, given a context, steps through scrolling
       * @method step
       * @param {Object} context
       * @returns {undefined}
       */


      function step(context) {
        var time = now();
        var value;
        var currentX;
        var currentY;
        var elapsed = (time - context.startTime) / SCROLL_TIME; // avoid elapsed times higher than one

        elapsed = elapsed > 1 ? 1 : elapsed; // apply easing to elapsed time

        value = ease(elapsed);
        currentX = context.startX + (context.x - context.startX) * value;
        currentY = context.startY + (context.y - context.startY) * value;
        context.method.call(context.scrollable, currentX, currentY); // scroll more if we have not reached our destination

        if (currentX !== context.x || currentY !== context.y) {
          w.requestAnimationFrame(step.bind(w, context));
        }
      }
      /**
       * scrolls window or element with a smooth behavior
       * @method smoothScroll
       * @param {Object|Node} el
       * @param {Number} x
       * @param {Number} y
       * @returns {undefined}
       */


      function smoothScroll(el, x, y) {
        var scrollable;
        var startX;
        var startY;
        var method;
        var startTime = now(); // define scroll context

        if (el === d.body) {
          scrollable = w;
          startX = w.scrollX || w.pageXOffset;
          startY = w.scrollY || w.pageYOffset;
          method = original.scroll;
        } else {
          scrollable = el;
          startX = el.scrollLeft;
          startY = el.scrollTop;
          method = scrollElement;
        } // scroll looping over a frame


        step({
          scrollable: scrollable,
          method: method,
          startTime: startTime,
          startX: startX,
          startY: startY,
          x: x,
          y: y
        });
      } // ORIGINAL METHODS OVERRIDES
      // w.scroll and w.scrollTo


      w.scroll = w.scrollTo = function () {
        // avoid action when no arguments are passed
        if (arguments[0] === undefined) {
          return;
        } // avoid smooth behavior if not required


        if (shouldBailOut(arguments[0]) === true) {
          original.scroll.call(w, arguments[0].left !== undefined ? arguments[0].left : typeof arguments[0] !== 'object' ? arguments[0] : w.scrollX || w.pageXOffset, // use top prop, second argument if present or fallback to scrollY
          arguments[0].top !== undefined ? arguments[0].top : arguments[1] !== undefined ? arguments[1] : w.scrollY || w.pageYOffset);
          return;
        } // LET THE SMOOTHNESS BEGIN!


        smoothScroll.call(w, d.body, arguments[0].left !== undefined ? ~~arguments[0].left : w.scrollX || w.pageXOffset, arguments[0].top !== undefined ? ~~arguments[0].top : w.scrollY || w.pageYOffset);
      }; // w.scrollBy


      w.scrollBy = function () {
        // avoid action when no arguments are passed
        if (arguments[0] === undefined) {
          return;
        } // avoid smooth behavior if not required


        if (shouldBailOut(arguments[0])) {
          original.scrollBy.call(w, arguments[0].left !== undefined ? arguments[0].left : typeof arguments[0] !== 'object' ? arguments[0] : 0, arguments[0].top !== undefined ? arguments[0].top : arguments[1] !== undefined ? arguments[1] : 0);
          return;
        } // LET THE SMOOTHNESS BEGIN!


        smoothScroll.call(w, d.body, ~~arguments[0].left + (w.scrollX || w.pageXOffset), ~~arguments[0].top + (w.scrollY || w.pageYOffset));
      }; // Element.prototype.scroll and Element.prototype.scrollTo


      Element.prototype.scroll = Element.prototype.scrollTo = function () {
        // avoid action when no arguments are passed
        if (arguments[0] === undefined) {
          return;
        } // avoid smooth behavior if not required


        if (shouldBailOut(arguments[0]) === true) {
          // if one number is passed, throw error to match Firefox implementation
          if (typeof arguments[0] === 'number' && arguments[1] === undefined) {
            throw new SyntaxError('Value could not be converted');
          }

          original.elementScroll.call(this, // use left prop, first number argument or fallback to scrollLeft
          arguments[0].left !== undefined ? ~~arguments[0].left : typeof arguments[0] !== 'object' ? ~~arguments[0] : this.scrollLeft, // use top prop, second argument or fallback to scrollTop
          arguments[0].top !== undefined ? ~~arguments[0].top : arguments[1] !== undefined ? ~~arguments[1] : this.scrollTop);
          return;
        }

        var left = arguments[0].left;
        var top = arguments[0].top; // LET THE SMOOTHNESS BEGIN!

        smoothScroll.call(this, this, typeof left === 'undefined' ? this.scrollLeft : ~~left, typeof top === 'undefined' ? this.scrollTop : ~~top);
      }; // Element.prototype.scrollBy


      Element.prototype.scrollBy = function () {
        // avoid action when no arguments are passed
        if (arguments[0] === undefined) {
          return;
        } // avoid smooth behavior if not required


        if (shouldBailOut(arguments[0]) === true) {
          original.elementScroll.call(this, arguments[0].left !== undefined ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, arguments[0].top !== undefined ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop);
          return;
        }

        this.scroll({
          left: ~~arguments[0].left + this.scrollLeft,
          top: ~~arguments[0].top + this.scrollTop,
          behavior: arguments[0].behavior
        });
      }; // Element.prototype.scrollIntoView


      Element.prototype.scrollIntoView = function () {
        // avoid smooth behavior if not required
        if (shouldBailOut(arguments[0]) === true) {
          original.scrollIntoView.call(this, arguments[0] === undefined ? true : arguments[0]);
          return;
        } // LET THE SMOOTHNESS BEGIN!


        var scrollableParent = findScrollableParent(this);
        var parentRects = scrollableParent.getBoundingClientRect();
        var clientRects = this.getBoundingClientRect();

        if (scrollableParent !== d.body) {
          // reveal element inside parent
          smoothScroll.call(this, scrollableParent, scrollableParent.scrollLeft + clientRects.left - parentRects.left, scrollableParent.scrollTop + clientRects.top - parentRects.top); // reveal parent in viewport unless is fixed

          if (w.getComputedStyle(scrollableParent).position !== 'fixed') {
            w.scrollBy({
              left: parentRects.left,
              top: parentRects.top,
              behavior: 'smooth'
            });
          }
        } else {
          // reveal element in viewport
          w.scrollBy({
            left: clientRects.left,
            top: clientRects.top,
            behavior: 'smooth'
          });
        }
      };
    }

    {
      // commonjs
      module.exports = {
        polyfill: polyfill
      };
    }
  })();
});
var smoothscroll_1 = smoothscroll.polyfill;

var _default$1 = /*#__PURE__*/function (_Core) {
  _inherits(_default, _Core);

  var _super = _createSuper(_default);

  function _default() {
    var _this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, _default);

    _this = _super.call(this, options);

    if (_this.resetNativeScroll) {
      if (history.scrollRestoration) {
        history.scrollRestoration = 'manual';
      }

      window.scrollTo(0, 0);
    }

    window.addEventListener('scroll', _this.checkScroll, false);

    if (window.smoothscrollPolyfill === undefined) {
      window.smoothscrollPolyfill = smoothscroll;
      window.smoothscrollPolyfill.polyfill();
    }

    return _this;
  }

  _createClass(_default, [{
    key: "init",
    value: function init() {
      this.instance.scroll.y = window.pageYOffset;
      this.addElements();
      this.detectElements();

      _get(_getPrototypeOf(_default.prototype), "init", this).call(this);
    }
  }, {
    key: "checkScroll",
    value: function checkScroll() {
      var _this2 = this;

      _get(_getPrototypeOf(_default.prototype), "checkScroll", this).call(this);

      if (this.getDirection) {
        this.addDirection();
      }

      if (this.getSpeed) {
        this.addSpeed();
        this.speedTs = Date.now();
      }

      this.instance.scroll.y = window.pageYOffset;

      if (Object.entries(this.els).length) {
        if (!this.hasScrollTicking) {
          requestAnimationFrame(function () {
            _this2.detectElements();
          });
          this.hasScrollTicking = true;
        }
      }
    }
  }, {
    key: "addDirection",
    value: function addDirection() {
      if (window.pageYOffset > this.instance.scroll.y) {
        if (this.instance.direction !== 'down') {
          this.instance.direction = 'down';
        }
      } else if (window.pageYOffset < this.instance.scroll.y) {
        if (this.instance.direction !== 'up') {
          this.instance.direction = 'up';
        }
      }
    }
  }, {
    key: "addSpeed",
    value: function addSpeed() {
      if (window.pageYOffset != this.instance.scroll.y) {
        this.instance.speed = (window.pageYOffset - this.instance.scroll.y) / Math.max(1, Date.now() - this.speedTs);
      } else {
        this.instance.speed = 0;
      }
    }
  }, {
    key: "resize",
    value: function resize() {
      if (Object.entries(this.els).length) {
        this.windowHeight = window.innerHeight;
        this.updateElements();
      }
    }
  }, {
    key: "addElements",
    value: function addElements() {
      var _this3 = this;

      this.els = {};
      var els = this.el.querySelectorAll('[data-' + this.name + ']');
      els.forEach(function (el, index) {
        var BCR = el.getBoundingClientRect();
        var cl = el.dataset[_this3.name + 'Class'] || _this3["class"];
        var id = typeof el.dataset[_this3.name + 'Id'] === 'string' ? el.dataset[_this3.name + 'Id'] : index;
        var top;
        var left;
        var offset = typeof el.dataset[_this3.name + 'Offset'] === 'string' ? el.dataset[_this3.name + 'Offset'].split(',') : _this3.offset;
        var repeat = el.dataset[_this3.name + 'Repeat'];
        var call = el.dataset[_this3.name + 'Call'];
        var target = el.dataset[_this3.name + 'Target'];
        var targetEl;

        if (target !== undefined) {
          targetEl = document.querySelector("".concat(target));
        } else {
          targetEl = el;
        }

        var targetElBCR = targetEl.getBoundingClientRect();
        top = targetElBCR.top + _this3.instance.scroll.y;
        left = targetElBCR.left + _this3.instance.scroll.x;
        var bottom = top + targetEl.offsetHeight;
        var right = left + targetEl.offsetWidth;

        if (target === '#header') {
          console.log(top, bottom);
        }

        if (repeat == 'false') {
          repeat = false;
        } else if (repeat != undefined) {
          repeat = true;
        } else {
          repeat = _this3.repeat;
        }

        var relativeOffset = _this3.getRelativeOffset(offset);

        top = top + relativeOffset[0];
        bottom = bottom - relativeOffset[1];
        var mappedEl = {
          el: el,
          targetEl: targetEl,
          id: id,
          "class": cl,
          top: top,
          bottom: bottom,
          left: left,
          right: right,
          offset: offset,
          progress: 0,
          repeat: repeat,
          inView: false,
          call: call
        };
        _this3.els[id] = mappedEl;

        if (el.classList.contains(cl)) {
          _this3.setInView(_this3.els[id], id);
        }
      });
    }
  }, {
    key: "updateElements",
    value: function updateElements() {
      var _this4 = this;

      Object.entries(this.els).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            i = _ref2[0],
            el = _ref2[1];

        var top = el.targetEl.getBoundingClientRect().top + _this4.instance.scroll.y;

        var bottom = top + el.targetEl.offsetHeight;

        var relativeOffset = _this4.getRelativeOffset(el.offset);

        _this4.els[i].top = top + relativeOffset[0];
        _this4.els[i].bottom = bottom - relativeOffset[1];
      });
      this.hasScrollTicking = false;
    }
  }, {
    key: "getRelativeOffset",
    value: function getRelativeOffset(offset) {
      var relativeOffset = [0, 0];

      if (offset) {
        for (var i = 0; i < offset.length; i++) {
          if (typeof offset[i] == 'string') {
            if (offset[i].includes('%')) {
              relativeOffset[i] = parseInt(offset[i].replace('%', '') * this.windowHeight / 100);
            } else {
              relativeOffset[i] = parseInt(offset[i]);
            }
          } else {
            relativeOffset[i] = offset[i];
          }
        }
      }

      return relativeOffset;
    }
    /**
     * Scroll to a desired target.
     *
     * @param  Available options :
     *          target {node, string, "top", "bottom", int} - The DOM element we want to scroll to
     *          options {object} - Options object for additionnal settings.
     * @return {void}
     */

  }, {
    key: "scrollTo",
    value: function scrollTo(target) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}; // Parse options

      var offset = parseInt(options.offset) || 0; // An offset to apply on top of given `target` or `sourceElem`'s target

      var callback = options.callback ? options.callback : false; // function called when scrollTo completes (note that it won't wait for lerp to stabilize)

      if (typeof target === 'string') {
        // Selector or boundaries
        if (target === 'top') {
          target = this.html;
        } else if (target === 'bottom') {
          target = this.html.offsetHeight - window.innerHeight;
        } else {
          target = document.querySelector(target); // If the query fails, abort

          if (!target) {
            return;
          }
        }
      } else if (typeof target === 'number') {
        // Absolute coordinate
        target = parseInt(target);
      } else if (target && target.tagName) ;else {
        console.warn('`target` parameter is not valid');
        return;
      } // We have a target that is not a coordinate yet, get it


      if (typeof target !== 'number') {
        offset = target.getBoundingClientRect().top + offset + this.instance.scroll.y;
      } else {
        offset = target + offset;
      }

      if (callback) {
        offset = offset.toFixed();

        var onScroll = function onScroll() {
          if (window.pageYOffset.toFixed() === offset) {
            window.removeEventListener('scroll', onScroll);
            callback();
          }
        };

        window.addEventListener('scroll', onScroll);
      }

      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      });
    }
  }, {
    key: "update",
    value: function update() {
      this.addElements();
      this.detectElements();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      _get(_getPrototypeOf(_default.prototype), "destroy", this).call(this);

      window.removeEventListener('scroll', this.checkScroll, false);
    }
  }]);

  return _default;
}(_default);
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

/* eslint-disable no-unused-vars */


var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    } // Detect buggy property enumeration order in older V8 versions.
    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

    test1[5] = 'de';

    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test2 = {};

    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }

    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });

    if (order2.join('') !== '0123456789') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });

    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }

    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);

      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }

  return to;
};

function E() {// Keep this empty so it's easier to inherit from
  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
}

E.prototype = {
  on: function (name, callback, ctx) {
    var e = this.e || (this.e = {});
    (e[name] || (e[name] = [])).push({
      fn: callback,
      ctx: ctx
    });
    return this;
  },
  once: function (name, callback, ctx) {
    var self = this;

    function listener() {
      self.off(name, listener);
      callback.apply(ctx, arguments);
    }

    listener._ = callback;
    return this.on(name, listener, ctx);
  },
  emit: function (name) {
    var data = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;

    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data);
    }

    return this;
  },
  off: function (name, callback) {
    var e = this.e || (this.e = {});
    var evts = e[name];
    var liveEvents = [];

    if (evts && callback) {
      for (var i = 0, len = evts.length; i < len; i++) {
        if (evts[i].fn !== callback && evts[i].fn._ !== callback) liveEvents.push(evts[i]);
      }
    } // Remove event from queue to prevent memory leak
    // Suggested by https://github.com/lazd
    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910


    liveEvents.length ? e[name] = liveEvents : delete e[name];
    return this;
  }
};
var tinyEmitter = E;
var lethargy = createCommonjsModule(function (module, exports) {
  // Generated by CoffeeScript 1.9.2
  (function () {
    var root;
    root = exports !== null ? exports : this;

    root.Lethargy = function () {
      function Lethargy(stability, sensitivity, tolerance, delay) {
        this.stability = stability != null ? Math.abs(stability) : 8;
        this.sensitivity = sensitivity != null ? 1 + Math.abs(sensitivity) : 100;
        this.tolerance = tolerance != null ? 1 + Math.abs(tolerance) : 1.1;
        this.delay = delay != null ? delay : 150;

        this.lastUpDeltas = function () {
          var i, ref, results;
          results = [];

          for (i = 1, ref = this.stability * 2; 1 <= ref ? i <= ref : i >= ref; 1 <= ref ? i++ : i--) {
            results.push(null);
          }

          return results;
        }.call(this);

        this.lastDownDeltas = function () {
          var i, ref, results;
          results = [];

          for (i = 1, ref = this.stability * 2; 1 <= ref ? i <= ref : i >= ref; 1 <= ref ? i++ : i--) {
            results.push(null);
          }

          return results;
        }.call(this);

        this.deltasTimestamp = function () {
          var i, ref, results;
          results = [];

          for (i = 1, ref = this.stability * 2; 1 <= ref ? i <= ref : i >= ref; 1 <= ref ? i++ : i--) {
            results.push(null);
          }

          return results;
        }.call(this);
      }

      Lethargy.prototype.check = function (e) {
        var lastDelta;
        e = e.originalEvent || e;

        if (e.wheelDelta != null) {
          lastDelta = e.wheelDelta;
        } else if (e.deltaY != null) {
          lastDelta = e.deltaY * -40;
        } else if (e.detail != null || e.detail === 0) {
          lastDelta = e.detail * -40;
        }

        this.deltasTimestamp.push(Date.now());
        this.deltasTimestamp.shift();

        if (lastDelta > 0) {
          this.lastUpDeltas.push(lastDelta);
          this.lastUpDeltas.shift();
          return this.isInertia(1);
        } else {
          this.lastDownDeltas.push(lastDelta);
          this.lastDownDeltas.shift();
          return this.isInertia(-1);
        }
      };

      Lethargy.prototype.isInertia = function (direction) {
        var lastDeltas, lastDeltasNew, lastDeltasOld, newAverage, newSum, oldAverage, oldSum;
        lastDeltas = direction === -1 ? this.lastDownDeltas : this.lastUpDeltas;

        if (lastDeltas[0] === null) {
          return direction;
        }

        if (this.deltasTimestamp[this.stability * 2 - 2] + this.delay > Date.now() && lastDeltas[0] === lastDeltas[this.stability * 2 - 1]) {
          return false;
        }

        lastDeltasOld = lastDeltas.slice(0, this.stability);
        lastDeltasNew = lastDeltas.slice(this.stability, this.stability * 2);
        oldSum = lastDeltasOld.reduce(function (t, s) {
          return t + s;
        });
        newSum = lastDeltasNew.reduce(function (t, s) {
          return t + s;
        });
        oldAverage = oldSum / lastDeltasOld.length;
        newAverage = newSum / lastDeltasNew.length;

        if (Math.abs(oldAverage) < Math.abs(newAverage * this.tolerance) && this.sensitivity < Math.abs(newAverage)) {
          return direction;
        } else {
          return false;
        }
      };

      Lethargy.prototype.showLastUpDeltas = function () {
        return this.lastUpDeltas;
      };

      Lethargy.prototype.showLastDownDeltas = function () {
        return this.lastDownDeltas;
      };

      return Lethargy;
    }();
  }).call(commonjsGlobal);
});

var support = function getSupport() {
  return {
    hasWheelEvent: 'onwheel' in document,
    hasMouseWheelEvent: 'onmousewheel' in document,
    hasTouch: 'ontouchstart' in window || window.TouchEvent || window.DocumentTouch && document instanceof DocumentTouch,
    hasTouchWin: navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
    hasPointer: !!window.navigator.msPointerEnabled,
    hasKeyDown: 'onkeydown' in document,
    isFirefox: navigator.userAgent.indexOf('Firefox') > -1
  };
}();

var toString = Object.prototype.toString,
    hasOwnProperty$1 = Object.prototype.hasOwnProperty;

var bindallStandalone = function (object) {
  if (!object) return console.warn('bindAll requires at least one argument.');
  var functions = Array.prototype.slice.call(arguments, 1);

  if (functions.length === 0) {
    for (var method in object) {
      if (hasOwnProperty$1.call(object, method)) {
        if (typeof object[method] == 'function' && toString.call(object[method]) == "[object Function]") {
          functions.push(method);
        }
      }
    }
  }

  for (var i = 0; i < functions.length; i++) {
    var f = functions[i];
    object[f] = bind(object[f], object);
  }
};
/*
    Faster bind without specific-case checking. (see https://coderwall.com/p/oi3j3w).
    bindAll is only needed for events binding so no need to make slow fixes for constructor
    or partial application.
*/


function bind(func, context) {
  return function () {
    return func.apply(context, arguments);
  };
}

var Lethargy = lethargy.Lethargy;
var EVT_ID = 'virtualscroll';
var src = VirtualScroll;
var keyCodes = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  SPACE: 32
};

function VirtualScroll(options) {
  bindallStandalone(this, '_onWheel', '_onMouseWheel', '_onTouchStart', '_onTouchMove', '_onKeyDown');
  this.el = window;

  if (options && options.el) {
    this.el = options.el;
    delete options.el;
  }

  this.options = objectAssign({
    mouseMultiplier: 1,
    touchMultiplier: 2,
    firefoxMultiplier: 15,
    keyStep: 120,
    preventTouch: false,
    unpreventTouchClass: 'vs-touchmove-allowed',
    limitInertia: false,
    useKeyboard: true,
    useTouch: true
  }, options);
  if (this.options.limitInertia) this._lethargy = new Lethargy();
  this._emitter = new tinyEmitter();
  this._event = {
    y: 0,
    x: 0,
    deltaX: 0,
    deltaY: 0
  };
  this.touchStartX = null;
  this.touchStartY = null;
  this.bodyTouchAction = null;

  if (this.options.passive !== undefined) {
    this.listenerOptions = {
      passive: this.options.passive
    };
  }
}

VirtualScroll.prototype._notify = function (e) {
  var evt = this._event;
  evt.x += evt.deltaX;
  evt.y += evt.deltaY;

  this._emitter.emit(EVT_ID, {
    x: evt.x,
    y: evt.y,
    deltaX: evt.deltaX,
    deltaY: evt.deltaY,
    originalEvent: e
  });
};

VirtualScroll.prototype._onWheel = function (e) {
  var options = this.options;
  if (this._lethargy && this._lethargy.check(e) === false) return;
  var evt = this._event; // In Chrome and in Firefox (at least the new one)

  evt.deltaX = e.wheelDeltaX || e.deltaX * -1;
  evt.deltaY = e.wheelDeltaY || e.deltaY * -1; // for our purpose deltamode = 1 means user is on a wheel mouse, not touch pad
  // real meaning: https://developer.mozilla.org/en-US/docs/Web/API/WheelEvent#Delta_modes

  if (support.isFirefox && e.deltaMode == 1) {
    evt.deltaX *= options.firefoxMultiplier;
    evt.deltaY *= options.firefoxMultiplier;
  }

  evt.deltaX *= options.mouseMultiplier;
  evt.deltaY *= options.mouseMultiplier;

  this._notify(e);
};

VirtualScroll.prototype._onMouseWheel = function (e) {
  if (this.options.limitInertia && this._lethargy.check(e) === false) return;
  var evt = this._event; // In Safari, IE and in Chrome if 'wheel' isn't defined

  evt.deltaX = e.wheelDeltaX ? e.wheelDeltaX : 0;
  evt.deltaY = e.wheelDeltaY ? e.wheelDeltaY : e.wheelDelta;

  this._notify(e);
};

VirtualScroll.prototype._onTouchStart = function (e) {
  var t = e.targetTouches ? e.targetTouches[0] : e;
  this.touchStartX = t.pageX;
  this.touchStartY = t.pageY;
};

VirtualScroll.prototype._onTouchMove = function (e) {
  var options = this.options;

  if (options.preventTouch && !e.target.classList.contains(options.unpreventTouchClass)) {
    e.preventDefault();
  }

  var evt = this._event;
  var t = e.targetTouches ? e.targetTouches[0] : e;
  evt.deltaX = (t.pageX - this.touchStartX) * options.touchMultiplier;
  evt.deltaY = (t.pageY - this.touchStartY) * options.touchMultiplier;
  this.touchStartX = t.pageX;
  this.touchStartY = t.pageY;

  this._notify(e);
};

VirtualScroll.prototype._onKeyDown = function (e) {
  var evt = this._event;
  evt.deltaX = evt.deltaY = 0;
  var windowHeight = window.innerHeight - 40;

  switch (e.keyCode) {
    case keyCodes.LEFT:
    case keyCodes.UP:
      evt.deltaY = this.options.keyStep;
      break;

    case keyCodes.RIGHT:
    case keyCodes.DOWN:
      evt.deltaY = -this.options.keyStep;
      break;

    case e.shiftKey:
      evt.deltaY = windowHeight;
      break;

    case keyCodes.SPACE:
      evt.deltaY = -windowHeight;
      break;

    default:
      return;
  }

  this._notify(e);
};

VirtualScroll.prototype._bind = function () {
  if (support.hasWheelEvent) this.el.addEventListener('wheel', this._onWheel, this.listenerOptions);
  if (support.hasMouseWheelEvent) this.el.addEventListener('mousewheel', this._onMouseWheel, this.listenerOptions);

  if (support.hasTouch && this.options.useTouch) {
    this.el.addEventListener('touchstart', this._onTouchStart, this.listenerOptions);
    this.el.addEventListener('touchmove', this._onTouchMove, this.listenerOptions);
  }

  if (support.hasPointer && support.hasTouchWin) {
    this.bodyTouchAction = document.body.style.msTouchAction;
    document.body.style.msTouchAction = 'none';
    this.el.addEventListener('MSPointerDown', this._onTouchStart, true);
    this.el.addEventListener('MSPointerMove', this._onTouchMove, true);
  }

  if (support.hasKeyDown && this.options.useKeyboard) document.addEventListener('keydown', this._onKeyDown);
};

VirtualScroll.prototype._unbind = function () {
  if (support.hasWheelEvent) this.el.removeEventListener('wheel', this._onWheel);
  if (support.hasMouseWheelEvent) this.el.removeEventListener('mousewheel', this._onMouseWheel);

  if (support.hasTouch) {
    this.el.removeEventListener('touchstart', this._onTouchStart);
    this.el.removeEventListener('touchmove', this._onTouchMove);
  }

  if (support.hasPointer && support.hasTouchWin) {
    document.body.style.msTouchAction = this.bodyTouchAction;
    this.el.removeEventListener('MSPointerDown', this._onTouchStart, true);
    this.el.removeEventListener('MSPointerMove', this._onTouchMove, true);
  }

  if (support.hasKeyDown && this.options.useKeyboard) document.removeEventListener('keydown', this._onKeyDown);
};

VirtualScroll.prototype.on = function (cb, ctx) {
  this._emitter.on(EVT_ID, cb, ctx);

  var events = this._emitter.e;
  if (events && events[EVT_ID] && events[EVT_ID].length === 1) this._bind();
};

VirtualScroll.prototype.off = function (cb, ctx) {
  this._emitter.off(EVT_ID, cb, ctx);

  var events = this._emitter.e;
  if (!events[EVT_ID] || events[EVT_ID].length <= 0) this._unbind();
};

VirtualScroll.prototype.reset = function () {
  var evt = this._event;
  evt.x = 0;
  evt.y = 0;
};

VirtualScroll.prototype.destroy = function () {
  this._emitter.off();

  this._unbind();
};

function lerp(start, end, amt) {
  return (1 - amt) * start + amt * end;
}

function getTranslate(el) {
  var translate = {};
  if (!window.getComputedStyle) return;
  var style = getComputedStyle(el);
  var transform = style.transform || style.webkitTransform || style.mozTransform;
  var mat = transform.match(/^matrix3d\((.+)\)$/);

  if (mat) {
    translate.x = mat ? parseFloat(mat[1].split(', ')[12]) : 0;
    translate.y = mat ? parseFloat(mat[1].split(', ')[13]) : 0;
  } else {
    mat = transform.match(/^matrix\((.+)\)$/);
    translate.x = mat ? parseFloat(mat[1].split(', ')[4]) : 0;
    translate.y = mat ? parseFloat(mat[1].split(', ')[5]) : 0;
  }

  return translate;
}
/**
 * Returns an array containing all the parent nodes of the given node
 * @param  {object} node
 * @return {array} parent nodes
 */


function getParents(elem) {
  // Set up a parent array
  var parents = []; // Push each parent element to the array

  for (; elem && elem !== document; elem = elem.parentNode) {
    parents.push(elem);
  } // Return our parent array


  return parents;
} // https://gomakethings.com/how-to-get-the-closest-parent-element-with-a-matching-selector-using-vanilla-javascript/

/**
 * https://github.com/gre/bezier-easing
 * BezierEasing - use bezier curve for transition easing function
 * by Gaëtan Renaudeau 2014 - 2015 – MIT License
 */
// These values are established by empiricism with tests (tradeoff: performance VS precision)


var NEWTON_ITERATIONS = 4;
var NEWTON_MIN_SLOPE = 0.001;
var SUBDIVISION_PRECISION = 0.0000001;
var SUBDIVISION_MAX_ITERATIONS = 10;
var kSplineTableSize = 11;
var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);
var float32ArraySupported = typeof Float32Array === 'function';

function A(aA1, aA2) {
  return 1.0 - 3.0 * aA2 + 3.0 * aA1;
}

function B(aA1, aA2) {
  return 3.0 * aA2 - 6.0 * aA1;
}

function C(aA1) {
  return 3.0 * aA1;
} // Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.


function calcBezier(aT, aA1, aA2) {
  return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
} // Returns dx/dt given t, x1, and x2, or dy/dt given t, y1, and y2.


function getSlope(aT, aA1, aA2) {
  return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1);
}

function binarySubdivide(aX, aA, aB, mX1, mX2) {
  var currentX,
      currentT,
      i = 0;

  do {
    currentT = aA + (aB - aA) / 2.0;
    currentX = calcBezier(currentT, mX1, mX2) - aX;

    if (currentX > 0.0) {
      aB = currentT;
    } else {
      aA = currentT;
    }
  } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);

  return currentT;
}

function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
  for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
    var currentSlope = getSlope(aGuessT, mX1, mX2);

    if (currentSlope === 0.0) {
      return aGuessT;
    }

    var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
    aGuessT -= currentX / currentSlope;
  }

  return aGuessT;
}

function LinearEasing(x) {
  return x;
}

var src$1 = function bezier(mX1, mY1, mX2, mY2) {
  if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
    throw new Error('bezier x values must be in [0, 1] range');
  }

  if (mX1 === mY1 && mX2 === mY2) {
    return LinearEasing;
  } // Precompute samples table


  var sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);

  for (var i = 0; i < kSplineTableSize; ++i) {
    sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
  }

  function getTForX(aX) {
    var intervalStart = 0.0;
    var currentSample = 1;
    var lastSample = kSplineTableSize - 1;

    for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
      intervalStart += kSampleStepSize;
    }

    --currentSample; // Interpolate to provide an initial guess for t

    var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
    var guessForT = intervalStart + dist * kSampleStepSize;
    var initialSlope = getSlope(guessForT, mX1, mX2);

    if (initialSlope >= NEWTON_MIN_SLOPE) {
      return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
    } else if (initialSlope === 0.0) {
      return guessForT;
    } else {
      return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
    }
  }

  return function BezierEasing(x) {
    // Because JavaScript number are imprecise, we should guarantee the extremes are right.
    if (x === 0) {
      return 0;
    }

    if (x === 1) {
      return 1;
    }

    return calcBezier(getTForX(x), mY1, mY2);
  };
};

var keyCodes$1 = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  SPACE: 32,
  TAB: 9,
  PAGEUP: 33,
  PAGEDOWN: 34,
  HOME: 36,
  END: 35
};

var _default$2 = /*#__PURE__*/function (_Core) {
  _inherits(_default, _Core);

  var _super = _createSuper(_default);

  function _default() {
    var _this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, _default);

    if (history.scrollRestoration) {
      history.scrollRestoration = 'manual';
    }

    window.scrollTo(0, 0);
    _this = _super.call(this, options);
    if (_this.inertia) _this.lerp = _this.inertia * 0.1;
    _this.isScrolling = false;
    _this.isDraggingScrollbar = false;
    _this.isTicking = false;
    _this.hasScrollTicking = false;
    _this.parallaxElements = {};
    _this.stop = false;
    _this.scrollbarContainer = options.scrollbarContainer;
    _this.checkKey = _this.checkKey.bind(_assertThisInitialized(_this));
    window.addEventListener('keydown', _this.checkKey, false);
    return _this;
  }

  _createClass(_default, [{
    key: "init",
    value: function init() {
      var _this2 = this;

      this.html.classList.add(this.smoothClass);
      this.html.setAttribute("data-".concat(this.name, "-direction"), this.direction);
      this.instance = _objectSpread2({
        delta: {
          x: 0,
          y: 0
        }
      }, this.instance);
      this.vs = new src({
        el: this.scrollFromAnywhere ? document : this.el,
        mouseMultiplier: navigator.platform.indexOf('Win') > -1 ? 1 : 0.4,
        firefoxMultiplier: this.firefoxMultiplier,
        touchMultiplier: this.touchMultiplier,
        useKeyboard: false,
        passive: true
      });
      this.vs.on(function (e) {
        if (_this2.stop) {
          return;
        }

        if (!_this2.isDraggingScrollbar) {
          requestAnimationFrame(function () {
            _this2.updateDelta(e);

            if (!_this2.isScrolling) _this2.startScrolling();
          });
        }
      });
      this.setScrollLimit();
      this.initScrollBar();
      this.addSections();
      this.addElements();
      this.checkScroll(true);
      this.transformElements(true, true);

      _get(_getPrototypeOf(_default.prototype), "init", this).call(this);
    }
  }, {
    key: "setScrollLimit",
    value: function setScrollLimit() {
      this.instance.limit.y = this.el.offsetHeight - this.windowHeight;

      if (this.direction === 'horizontal') {
        var totalWidth = 0;
        var nodes = this.el.children;

        for (var i = 0; i < nodes.length; i++) {
          totalWidth += nodes[i].offsetWidth;
        }

        this.instance.limit.x = totalWidth - this.windowWidth;
      }
    }
  }, {
    key: "startScrolling",
    value: function startScrolling() {
      this.startScrollTs = Date.now(); // Record timestamp

      this.isScrolling = true;
      this.checkScroll();
      this.html.classList.add(this.scrollingClass);
    }
  }, {
    key: "stopScrolling",
    value: function stopScrolling() {
      cancelAnimationFrame(this.checkScrollRaf); // Prevent checkScroll to continue looping

      if (this.scrollToRaf) {
        cancelAnimationFrame(this.scrollToRaf);
        this.scrollToRaf = null;
      }

      this.isScrolling = false;
      this.instance.scroll.y = Math.round(this.instance.scroll.y);
      this.html.classList.remove(this.scrollingClass);
    }
  }, {
    key: "checkKey",
    value: function checkKey(e) {
      var _this3 = this;

      if (this.stop) {
        // If we are stopped, we don't want any scroll to occur because of a keypress
        // Prevent tab to scroll to activeElement
        if (e.keyCode == keyCodes$1.TAB) {
          requestAnimationFrame(function () {
            // Make sure native scroll is always at top of page
            _this3.html.scrollTop = 0;
            document.body.scrollTop = 0;
            _this3.html.scrollLeft = 0;
            document.body.scrollLeft = 0;
          });
        }

        return;
      }

      switch (e.keyCode) {
        case keyCodes$1.TAB:
          // Do not remove the RAF
          // It allows to override the browser's native scrollTo, which is essential
          requestAnimationFrame(function () {
            // Make sure native scroll is always at top of page
            _this3.html.scrollTop = 0;
            document.body.scrollTop = 0;
            _this3.html.scrollLeft = 0;
            document.body.scrollLeft = 0; // Request scrollTo on the focusedElement, putting it at the center of the screen

            _this3.scrollTo(document.activeElement, {
              offset: -window.innerHeight / 2
            });
          });
          break;

        case keyCodes$1.UP:
          this.instance.delta[this.directionAxis] -= 240;
          break;

        case keyCodes$1.DOWN:
          this.instance.delta[this.directionAxis] += 240;
          break;

        case keyCodes$1.PAGEUP:
          this.instance.delta[this.directionAxis] -= window.innerHeight;
          break;

        case keyCodes$1.PAGEDOWN:
          this.instance.delta[this.directionAxis] += window.innerHeight;
          break;

        case keyCodes$1.HOME:
          this.instance.delta[this.directionAxis] -= this.instance.limit[this.directionAxis];
          break;

        case keyCodes$1.END:
          this.instance.delta[this.directionAxis] += this.instance.limit[this.directionAxis];
          break;

        case keyCodes$1.SPACE:
          if (!(document.activeElement instanceof HTMLInputElement) && !(document.activeElement instanceof HTMLTextAreaElement)) {
            if (e.shiftKey) {
              this.instance.delta[this.directionAxis] -= window.innerHeight;
            } else {
              this.instance.delta[this.directionAxis] += window.innerHeight;
            }
          }

          break;

        default:
          return;
      }

      if (this.instance.delta[this.directionAxis] < 0) this.instance.delta[this.directionAxis] = 0;
      if (this.instance.delta[this.directionAxis] > this.instance.limit[this.directionAxis]) this.instance.delta[this.directionAxis] = this.instance.limit[this.directionAxis];
      this.stopScrolling(); // Stop any movement, allows to kill any other `scrollTo` still happening

      this.isScrolling = true;
      this.checkScroll();
      this.html.classList.add(this.scrollingClass);
    }
  }, {
    key: "checkScroll",
    value: function checkScroll() {
      var _this4 = this;

      var forced = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (forced || this.isScrolling || this.isDraggingScrollbar) {
        if (!this.hasScrollTicking) {
          this.checkScrollRaf = requestAnimationFrame(function () {
            return _this4.checkScroll();
          });
          this.hasScrollTicking = true;
        }

        this.updateScroll();
        var distance = Math.abs(this.instance.delta[this.directionAxis] - this.instance.scroll[this.directionAxis]);
        var timeSinceStart = Date.now() - this.startScrollTs; // Get the time since the scroll was started: the scroll can be stopped again only past 100ms

        if (!this.animatingScroll && timeSinceStart > 100 && (distance < 0.5 && this.instance.delta[this.directionAxis] != 0 || distance < 0.5 && this.instance.delta[this.directionAxis] == 0)) {
          this.stopScrolling();
        }

        Object.entries(this.sections).forEach(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              i = _ref2[0],
              section = _ref2[1];

          if (section.persistent || _this4.instance.scroll[_this4.directionAxis] > section.offset[_this4.directionAxis] && _this4.instance.scroll[_this4.directionAxis] < section.limit[_this4.directionAxis]) {
            if (_this4.direction === 'horizontal') {
              _this4.transform(section.el, -_this4.instance.scroll[_this4.directionAxis], 0);
            } else {
              _this4.transform(section.el, 0, -_this4.instance.scroll[_this4.directionAxis]);
            }

            if (!section.inView) {
              section.inView = true;
              section.el.style.opacity = 1;
              section.el.style.pointerEvents = 'all';
              section.el.setAttribute("data-".concat(_this4.name, "-section-inview"), '');
            }
          } else {
            if (section.inView) {
              section.inView = false;
              section.el.style.opacity = 0;
              section.el.style.pointerEvents = 'none';
              section.el.removeAttribute("data-".concat(_this4.name, "-section-inview"));
            }

            _this4.transform(section.el, 0, 0);
          }
        });

        if (this.getDirection) {
          this.addDirection();
        }

        if (this.getSpeed) {
          this.addSpeed();
          this.speedTs = Date.now();
        }

        this.detectElements();
        this.transformElements();

        if (this.hasScrollbar) {
          var scrollBarTranslation = this.instance.scroll[this.directionAxis] / this.instance.limit[this.directionAxis] * this.scrollBarLimit[this.directionAxis];

          if (this.direction === 'horizontal') {
            this.transform(this.scrollbarThumb, scrollBarTranslation, 0);
          } else {
            this.transform(this.scrollbarThumb, 0, scrollBarTranslation);
          }
        }

        _get(_getPrototypeOf(_default.prototype), "checkScroll", this).call(this);

        this.hasScrollTicking = false;
      }
    }
  }, {
    key: "resize",
    value: function resize() {
      this.windowHeight = window.innerHeight;
      this.windowWidth = window.innerWidth;
      this.checkContext();
      this.windowMiddle = {
        x: this.windowWidth / 2,
        y: this.windowHeight / 2
      };
      this.update();
    }
  }, {
    key: "updateDelta",
    value: function updateDelta(e) {
      var delta;
      var gestureDirection = this[this.context] && this[this.context].gestureDirection ? this[this.context].gestureDirection : this.gestureDirection;

      if (gestureDirection === 'both') {
        delta = e.deltaX + e.deltaY;
      } else if (gestureDirection === 'vertical') {
        delta = e.deltaY;
      } else if (gestureDirection === 'horizontal') {
        delta = e.deltaX;
      } else {
        delta = e.deltaY;
      }

      this.instance.delta[this.directionAxis] -= delta * this.multiplier;
      if (this.instance.delta[this.directionAxis] < 0) this.instance.delta[this.directionAxis] = 0;
      if (this.instance.delta[this.directionAxis] > this.instance.limit[this.directionAxis]) this.instance.delta[this.directionAxis] = this.instance.limit[this.directionAxis];
    }
  }, {
    key: "updateScroll",
    value: function updateScroll(e) {
      if (this.isScrolling || this.isDraggingScrollbar) {
        this.instance.scroll[this.directionAxis] = lerp(this.instance.scroll[this.directionAxis], this.instance.delta[this.directionAxis], this.lerp);
      } else {
        if (this.instance.scroll[this.directionAxis] > this.instance.limit[this.directionAxis]) {
          this.setScroll(this.instance.scroll[this.directionAxis], this.instance.limit[this.directionAxis]);
        } else if (this.instance.scroll.y < 0) {
          this.setScroll(this.instance.scroll[this.directionAxis], 0);
        } else {
          this.setScroll(this.instance.scroll[this.directionAxis], this.instance.delta[this.directionAxis]);
        }
      }
    }
  }, {
    key: "addDirection",
    value: function addDirection() {
      if (this.instance.delta.y > this.instance.scroll.y) {
        if (this.instance.direction !== 'down') {
          this.instance.direction = 'down';
        }
      } else if (this.instance.delta.y < this.instance.scroll.y) {
        if (this.instance.direction !== 'up') {
          this.instance.direction = 'up';
        }
      }

      if (this.instance.delta.x > this.instance.scroll.x) {
        if (this.instance.direction !== 'right') {
          this.instance.direction = 'right';
        }
      } else if (this.instance.delta.x < this.instance.scroll.x) {
        if (this.instance.direction !== 'left') {
          this.instance.direction = 'left';
        }
      }
    }
  }, {
    key: "addSpeed",
    value: function addSpeed() {
      if (this.instance.delta[this.directionAxis] != this.instance.scroll[this.directionAxis]) {
        this.instance.speed = (this.instance.delta[this.directionAxis] - this.instance.scroll[this.directionAxis]) / Math.max(1, Date.now() - this.speedTs);
      } else {
        this.instance.speed = 0;
      }
    }
  }, {
    key: "initScrollBar",
    value: function initScrollBar() {
      this.scrollbar = document.createElement('span');
      this.scrollbarThumb = document.createElement('span');
      this.scrollbar.classList.add("".concat(this.scrollbarClass));
      this.scrollbarThumb.classList.add("".concat(this.scrollbarClass, "_thumb"));
      this.scrollbar.append(this.scrollbarThumb);

      if (this.scrollbarContainer) {
        this.scrollbarContainer.append(this.scrollbar);
      } else {
        document.body.append(this.scrollbar);
      } // Scrollbar Events


      this.getScrollBar = this.getScrollBar.bind(this);
      this.releaseScrollBar = this.releaseScrollBar.bind(this);
      this.moveScrollBar = this.moveScrollBar.bind(this);
      this.scrollbarThumb.addEventListener('mousedown', this.getScrollBar);
      window.addEventListener('mouseup', this.releaseScrollBar);
      window.addEventListener('mousemove', this.moveScrollBar); // Set scrollbar values

      this.hasScrollbar = false;

      if (this.direction == 'horizontal') {
        if (this.instance.limit.x + this.windowWidth <= this.windowWidth) {
          return;
        }
      } else {
        if (this.instance.limit.y + this.windowHeight <= this.windowHeight) {
          return;
        }
      }

      this.hasScrollbar = true;
      this.scrollbarBCR = this.scrollbar.getBoundingClientRect();
      this.scrollbarHeight = this.scrollbarBCR.height;
      this.scrollbarWidth = this.scrollbarBCR.width;

      if (this.direction === 'horizontal') {
        this.scrollbarThumb.style.width = "".concat(this.scrollbarWidth * this.scrollbarWidth / (this.instance.limit.x + this.scrollbarWidth), "px");
      } else {
        this.scrollbarThumb.style.height = "".concat(this.scrollbarHeight * this.scrollbarHeight / (this.instance.limit.y + this.scrollbarHeight), "px");
      }

      this.scrollbarThumbBCR = this.scrollbarThumb.getBoundingClientRect();
      this.scrollBarLimit = {
        x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
        y: this.scrollbarHeight - this.scrollbarThumbBCR.height
      };
    }
  }, {
    key: "reinitScrollBar",
    value: function reinitScrollBar() {
      this.hasScrollbar = false;

      if (this.direction == 'horizontal') {
        if (this.instance.limit.x + this.windowWidth <= this.windowWidth) {
          return;
        }
      } else {
        if (this.instance.limit.y + this.windowHeight <= this.windowHeight) {
          return;
        }
      }

      this.hasScrollbar = true;
      this.scrollbarBCR = this.scrollbar.getBoundingClientRect();
      this.scrollbarHeight = this.scrollbarBCR.height;
      this.scrollbarWidth = this.scrollbarBCR.width;

      if (this.direction === 'horizontal') {
        this.scrollbarThumb.style.width = "".concat(this.scrollbarWidth * this.scrollbarWidth / (this.instance.limit.x + this.scrollbarWidth), "px");
      } else {
        this.scrollbarThumb.style.height = "".concat(this.scrollbarHeight * this.scrollbarHeight / (this.instance.limit.y + this.scrollbarHeight), "px");
      }

      this.scrollbarThumbBCR = this.scrollbarThumb.getBoundingClientRect();
      this.scrollBarLimit = {
        x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
        y: this.scrollbarHeight - this.scrollbarThumbBCR.height
      };
    }
  }, {
    key: "destroyScrollBar",
    value: function destroyScrollBar() {
      this.scrollbarThumb.removeEventListener('mousedown', this.getScrollBar);
      window.removeEventListener('mouseup', this.releaseScrollBar);
      window.removeEventListener('mousemove', this.moveScrollBar);
      this.scrollbar.remove();
    }
  }, {
    key: "getScrollBar",
    value: function getScrollBar(e) {
      this.isDraggingScrollbar = true;
      this.checkScroll();
      this.html.classList.remove(this.scrollingClass);
      this.html.classList.add(this.draggingClass);
    }
  }, {
    key: "releaseScrollBar",
    value: function releaseScrollBar(e) {
      this.isDraggingScrollbar = false;
      this.html.classList.add(this.scrollingClass);
      this.html.classList.remove(this.draggingClass);
    }
  }, {
    key: "moveScrollBar",
    value: function moveScrollBar(e) {
      var _this5 = this;

      if (this.isDraggingScrollbar) {
        requestAnimationFrame(function () {
          var x = (e.clientX - _this5.scrollbarBCR.left) * 100 / _this5.scrollbarWidth * _this5.instance.limit.x / 100;
          var y = (e.clientY - _this5.scrollbarBCR.top) * 100 / _this5.scrollbarHeight * _this5.instance.limit.y / 100;

          if (y > 0 && y < _this5.instance.limit.y) {
            _this5.instance.delta.y = y;
          }

          if (x > 0 && x < _this5.instance.limit.x) {
            _this5.instance.delta.x = x;
          }
        });
      }
    }
  }, {
    key: "addElements",
    value: function addElements() {
      var _this6 = this;

      this.els = {};
      this.parallaxElements = {}; // this.sections.forEach((section, y) => {

      var els = this.el.querySelectorAll("[data-".concat(this.name, "]"));
      els.forEach(function (el, index) {
        // Try and find the target's parent section
        var targetParents = getParents(el);
        var section = Object.entries(_this6.sections).map(function (_ref3) {
          var _ref4 = _slicedToArray(_ref3, 2),
              key = _ref4[0],
              section = _ref4[1];

          return section;
        }).find(function (section) {
          return targetParents.includes(section.el);
        });
        var cl = el.dataset[_this6.name + 'Class'] || _this6["class"];
        var id = typeof el.dataset[_this6.name + 'Id'] === 'string' ? el.dataset[_this6.name + 'Id'] : 'el' + index;
        var top;
        var left;
        var repeat = el.dataset[_this6.name + 'Repeat'];
        var call = el.dataset[_this6.name + 'Call'];
        var position = el.dataset[_this6.name + 'Position'];
        var delay = el.dataset[_this6.name + 'Delay'];
        var direction = el.dataset[_this6.name + 'Direction'];
        var sticky = typeof el.dataset[_this6.name + 'Sticky'] === 'string';
        var speed = el.dataset[_this6.name + 'Speed'] ? parseFloat(el.dataset[_this6.name + 'Speed']) / 10 : false;
        var offset = typeof el.dataset[_this6.name + 'Offset'] === 'string' ? el.dataset[_this6.name + 'Offset'].split(',') : _this6.offset;
        var target = el.dataset[_this6.name + 'Target'];
        var targetEl;

        if (target !== undefined) {
          targetEl = document.querySelector("".concat(target));
        } else {
          targetEl = el;
        }

        var targetElBCR = targetEl.getBoundingClientRect();

        if (section === null) {
          top = targetElBCR.top + _this6.instance.scroll.y - getTranslate(targetEl).y;
          left = targetElBCR.left + _this6.instance.scroll.x - getTranslate(targetEl).x;
        } else {
          if (!section.inView) {
            top = targetElBCR.top - getTranslate(section.el).y - getTranslate(targetEl).y;
            left = targetElBCR.left - getTranslate(section.el).x - getTranslate(targetEl).x;
          } else {
            top = targetElBCR.top + _this6.instance.scroll.y - getTranslate(targetEl).y;
            left = targetElBCR.left + _this6.instance.scroll.x - getTranslate(targetEl).x;
          }
        }

        var bottom = top + targetEl.offsetHeight;
        var right = left + targetEl.offsetWidth;
        var middle = {
          x: (right - left) / 2 + left,
          y: (bottom - top) / 2 + top
        };

        if (sticky) {
          var elBCR = el.getBoundingClientRect();
          var elTop = elBCR.top;
          var elLeft = elBCR.left;
          var elDistance = {
            x: elLeft - left,
            y: elTop - top
          };
          top += window.innerHeight;
          left += window.innerWidth;
          bottom = elTop + targetEl.offsetHeight - el.offsetHeight - elDistance[_this6.directionAxis];
          right = elLeft + targetEl.offsetWidth - el.offsetWidth - elDistance[_this6.directionAxis];
          middle = {
            x: (right - left) / 2 + left,
            y: (bottom - top) / 2 + top
          };
        }

        if (repeat == 'false') {
          repeat = false;
        } else if (repeat != undefined) {
          repeat = true;
        } else {
          repeat = _this6.repeat;
        }

        var relativeOffset = [0, 0];

        if (offset) {
          if (_this6.direction === 'horizontal') {
            for (var i = 0; i < offset.length; i++) {
              if (typeof offset[i] == 'string') {
                if (offset[i].includes('%')) {
                  relativeOffset[i] = parseInt(offset[i].replace('%', '') * _this6.windowWidth / 100);
                } else {
                  relativeOffset[i] = parseInt(offset[i]);
                }
              } else {
                relativeOffset[i] = offset[i];
              }
            }

            left = left + relativeOffset[0];
            right = right - relativeOffset[1];
          } else {
            for (var i = 0; i < offset.length; i++) {
              if (typeof offset[i] == 'string') {
                if (offset[i].includes('%')) {
                  relativeOffset[i] = parseInt(offset[i].replace('%', '') * _this6.windowHeight / 100);
                } else {
                  relativeOffset[i] = parseInt(offset[i]);
                }
              } else {
                relativeOffset[i] = offset[i];
              }
            }

            top = top + relativeOffset[0];
            bottom = bottom - relativeOffset[1];
          }
        }

        var mappedEl = {
          el: el,
          id: id,
          "class": cl,
          section: section,
          top: top,
          middle: middle,
          bottom: bottom,
          left: left,
          right: right,
          offset: offset,
          progress: 0,
          repeat: repeat,
          inView: false,
          call: call,
          speed: speed,
          delay: delay,
          position: position,
          target: targetEl,
          direction: direction,
          sticky: sticky
        };
        _this6.els[id] = mappedEl;

        if (el.classList.contains(cl)) {
          _this6.setInView(_this6.els[id], id);
        }

        if (speed !== false || sticky) {
          _this6.parallaxElements[id] = mappedEl;
        }
      }); // });
    }
  }, {
    key: "addSections",
    value: function addSections() {
      var _this7 = this;

      this.sections = {};
      var sections = this.el.querySelectorAll("[data-".concat(this.name, "-section]"));

      if (sections.length === 0) {
        sections = [this.el];
      }

      sections.forEach(function (section, index) {
        var id = typeof section.dataset[_this7.name + 'Id'] === 'string' ? section.dataset[_this7.name + 'Id'] : 'section' + index;
        var sectionBCR = section.getBoundingClientRect();
        var offset = {
          x: sectionBCR.left - window.innerWidth * 1.5 - getTranslate(section).x,
          y: sectionBCR.top - window.innerHeight * 1.5 - getTranslate(section).y
        };
        var limit = {
          x: offset.x + sectionBCR.width + window.innerWidth * 2,
          y: offset.y + sectionBCR.height + window.innerHeight * 2
        };
        var persistent = typeof section.dataset[_this7.name + 'Persistent'] === 'string';
        section.setAttribute('data-scroll-section-id', id);
        var mappedSection = {
          el: section,
          offset: offset,
          limit: limit,
          inView: false,
          persistent: persistent,
          id: id
        };
        _this7.sections[id] = mappedSection;
      });
    }
  }, {
    key: "transform",
    value: function transform(element, x, y, delay) {
      var transform;

      if (!delay) {
        transform = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(x, ",").concat(y, ",0,1)");
      } else {
        var start = getTranslate(element);
        var lerpX = lerp(start.x, x, delay);
        var lerpY = lerp(start.y, y, delay);
        transform = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(lerpX, ",").concat(lerpY, ",0,1)");
      }

      element.style.webkitTransform = transform;
      element.style.msTransform = transform;
      element.style.transform = transform;
    }
  }, {
    key: "transformElements",
    value: function transformElements(isForced) {
      var _this8 = this;

      var setAllElements = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var scrollRight = this.instance.scroll.x + this.windowWidth;
      var scrollBottom = this.instance.scroll.y + this.windowHeight;
      var scrollMiddle = {
        x: this.instance.scroll.x + this.windowMiddle.x,
        y: this.instance.scroll.y + this.windowMiddle.y
      };
      Object.entries(this.parallaxElements).forEach(function (_ref5) {
        var _ref6 = _slicedToArray(_ref5, 2),
            i = _ref6[0],
            current = _ref6[1];

        var transformDistance = false;

        if (isForced) {
          transformDistance = 0;
        }

        if (current.inView || setAllElements) {
          switch (current.position) {
            case 'top':
              transformDistance = _this8.instance.scroll[_this8.directionAxis] * -current.speed;
              break;

            case 'elementTop':
              transformDistance = (scrollBottom - current.top) * -current.speed;
              break;

            case 'bottom':
              transformDistance = (_this8.instance.limit[_this8.directionAxis] - scrollBottom + _this8.windowHeight) * current.speed;
              break;

            case 'left':
              transformDistance = _this8.instance.scroll[_this8.directionAxis] * -current.speed;
              break;

            case 'elementLeft':
              transformDistance = (scrollRight - current.left) * -current.speed;
              break;

            case 'right':
              transformDistance = (_this8.instance.limit[_this8.directionAxis] - scrollRight + _this8.windowHeight) * current.speed;
              break;

            default:
              transformDistance = (scrollMiddle[_this8.directionAxis] - current.middle[_this8.directionAxis]) * -current.speed;
              break;
          }
        }

        if (current.sticky) {
          if (current.inView) {
            if (_this8.direction === 'horizontal') {
              transformDistance = _this8.instance.scroll.x - current.left + window.innerWidth;
            } else {
              transformDistance = _this8.instance.scroll.y - current.top + window.innerHeight;
            }
          } else {
            if (_this8.direction === 'horizontal') {
              if (_this8.instance.scroll.x < current.left - window.innerWidth && _this8.instance.scroll.x < current.left - window.innerWidth / 2) {
                transformDistance = 0;
              } else if (_this8.instance.scroll.x > current.right && _this8.instance.scroll.x > current.right + 100) {
                transformDistance = current.right - current.left + window.innerWidth;
              } else {
                transformDistance = false;
              }
            } else {
              if (_this8.instance.scroll.y < current.top - window.innerHeight && _this8.instance.scroll.y < current.top - window.innerHeight / 2) {
                transformDistance = 0;
              } else if (_this8.instance.scroll.y > current.bottom && _this8.instance.scroll.y > current.bottom + 100) {
                transformDistance = current.bottom - current.top + window.innerHeight;
              } else {
                transformDistance = false;
              }
            }
          }
        }

        if (transformDistance !== false) {
          if (current.direction === 'horizontal' || _this8.direction === 'horizontal' && current.direction !== 'vertical') {
            _this8.transform(current.el, transformDistance, 0, isForced ? false : current.delay);
          } else {
            _this8.transform(current.el, 0, transformDistance, isForced ? false : current.delay);
          }
        }
      });
    }
    /**
     * Scroll to a desired target.
     *
     * @param  Available options :
     *          target {node, string, "top", "bottom", int} - The DOM element we want to scroll to
     *          options {object} - Options object for additionnal settings.
     * @return {void}
     */

  }, {
    key: "scrollTo",
    value: function scrollTo(target) {
      var _this9 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}; // Parse options

      var offset = parseInt(options.offset) || 0; // An offset to apply on top of given `target` or `sourceElem`'s target

      var duration = options.duration || 1000; // Duration of the scroll animation in milliseconds

      var easing = options.easing || [0.25, 0.0, 0.35, 1.0]; // An array of 4 floats between 0 and 1 defining the bezier curve for the animation's easing. See http://greweb.me/bezier-easing-editor/example/

      var disableLerp = options.disableLerp ? true : false; // Lerp effect won't be applied if set to true

      var callback = options.callback ? options.callback : false; // function called when scrollTo completes (note that it won't wait for lerp to stabilize)

      easing = src$1.apply(void 0, _toConsumableArray(easing));

      if (typeof target === 'string') {
        // Selector or boundaries
        if (target === 'top') {
          target = 0;
        } else if (target === 'bottom') {
          target = this.instance.limit.y;
        } else if (target === 'left') {
          target = 0;
        } else if (target === 'right') {
          target = this.instance.limit.x;
        } else {
          target = document.querySelector(target); // If the query fails, abort

          if (!target) {
            return;
          }
        }
      } else if (typeof target === 'number') {
        // Absolute coordinate
        target = parseInt(target);
      } else if (target && target.tagName) ;else {
        console.warn('`target` parameter is not valid');
        return;
      } // We have a target that is not a coordinate yet, get it


      if (typeof target !== 'number') {
        // Verify the given target belongs to this scroll scope
        var targetInScope = getParents(target).includes(this.el);

        if (!targetInScope) {
          // If the target isn't inside our main element, abort any action
          return;
        } // Get target offset from top


        var targetBCR = target.getBoundingClientRect();
        var offsetTop = targetBCR.top;
        var offsetLeft = targetBCR.left; // Try and find the target's parent section

        var targetParents = getParents(target);
        var parentSection = targetParents.find(function (candidate) {
          return Object.entries(_this9.sections) // Get sections associative array as a regular array
          .map(function (_ref7) {
            var _ref8 = _slicedToArray(_ref7, 2),
                key = _ref8[0],
                section = _ref8[1];

            return section;
          }) // map to section only (we dont need the key here)
          .find(function (section) {
            return section.el == candidate;
          }); // finally find the section that matches the candidate
        });
        var parentSectionOffset = 0;

        if (parentSection) {
          parentSectionOffset = getTranslate(parentSection)[this.directionAxis]; // We got a parent section, store it's current offset to remove it later
        } else {
          // if no parent section is found we need to use instance scroll directly
          parentSectionOffset = -this.instance.scroll[this.directionAxis];
        } // Final value of scroll destination : offsetTop + (optional offset given in options) - (parent's section translate)


        if (this.direction === 'horizontal') {
          offset = offsetLeft + offset - parentSectionOffset;
        } else {
          offset = offsetTop + offset - parentSectionOffset;
        }
      } else {
        offset = target + offset;
      } // Actual scrollto
      // ==========================================================================
      // Setup


      var scrollStart = parseFloat(this.instance.delta[this.directionAxis]);
      var scrollTarget = Math.max(0, Math.min(offset, this.instance.limit[this.directionAxis])); // Make sure our target is in the scroll boundaries

      var scrollDiff = scrollTarget - scrollStart;

      var render = function render(p) {
        if (disableLerp) {
          if (_this9.direction === 'horizontal') {
            _this9.setScroll(scrollStart + scrollDiff * p, _this9.instance.delta.y);
          } else {
            _this9.setScroll(_this9.instance.delta.x, scrollStart + scrollDiff * p);
          }
        } else {
          _this9.instance.delta[_this9.directionAxis] = scrollStart + scrollDiff * p;
        }
      }; // Prepare the scroll


      this.animatingScroll = true; // This boolean allows to prevent `checkScroll()` from calling `stopScrolling` when the animation is slow (i.e. at the beginning of an EaseIn)

      this.stopScrolling(); // Stop any movement, allows to kill any other `scrollTo` still happening

      this.startScrolling(); // Restart the scroll
      // Start the animation loop

      var start = Date.now();

      var loop = function loop() {
        var p = (Date.now() - start) / duration; // Animation progress

        if (p > 1) {
          // Animation ends
          render(1);
          _this9.animatingScroll = false;
          if (duration == 0) _this9.update();
          if (callback) callback();
        } else {
          _this9.scrollToRaf = requestAnimationFrame(loop);
          render(easing(p));
        }
      };

      loop();
    }
  }, {
    key: "update",
    value: function update() {
      this.setScrollLimit();
      this.addSections();
      this.addElements();
      this.detectElements();
      this.updateScroll();
      this.transformElements(true);
      this.reinitScrollBar();
      this.checkScroll(true);
    }
  }, {
    key: "startScroll",
    value: function startScroll() {
      this.stop = false;
    }
  }, {
    key: "stopScroll",
    value: function stopScroll() {
      this.stop = true;
    }
  }, {
    key: "setScroll",
    value: function setScroll(x, y) {
      this.instance = _objectSpread2(_objectSpread2({}, this.instance), {}, {
        scroll: {
          x: x,
          y: y
        },
        delta: {
          x: x,
          y: y
        },
        speed: 0
      });
    }
  }, {
    key: "destroy",
    value: function destroy() {
      _get(_getPrototypeOf(_default.prototype), "destroy", this).call(this);

      this.stopScrolling();
      this.html.classList.remove(this.smoothClass);
      this.vs.destroy();
      this.destroyScrollBar();
      window.removeEventListener('keydown', this.checkKey, false);
    }
  }]);

  return _default;
}(_default);

var Smooth = /*#__PURE__*/function () {
  function Smooth() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Smooth);

    this.options = options; // Override default options with given ones

    Object.assign(this, defaults, options);
    this.smartphone = defaults.smartphone;
    if (options.smartphone) Object.assign(this.smartphone, options.smartphone);
    this.tablet = defaults.tablet;
    if (options.tablet) Object.assign(this.tablet, options.tablet);
    if (!this.smooth && this.direction == 'horizontal') console.warn('🚨 `smooth:false` & `horizontal` direction are not yet compatible');
    if (!this.tablet.smooth && this.tablet.direction == 'horizontal') console.warn('🚨 `smooth:false` & `horizontal` direction are not yet compatible (tablet)');
    if (!this.smartphone.smooth && this.smartphone.direction == 'horizontal') console.warn('🚨 `smooth:false` & `horizontal` direction are not yet compatible (smartphone)');
    this.init();
  }

  _createClass(Smooth, [{
    key: "init",
    value: function init() {
      this.options.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1 || window.innerWidth < this.tablet.breakpoint;
      this.options.isTablet = this.options.isMobile && window.innerWidth >= this.tablet.breakpoint;

      if (this.smooth && !this.options.isMobile || this.tablet.smooth && this.options.isTablet || this.smartphone.smooth && this.options.isMobile && !this.options.isTablet) {
        this.scroll = new _default$2(this.options);
      } else {
        this.scroll = new _default$1(this.options);
      }

      this.scroll.init();

      if (window.location.hash) {
        // Get the hash without the '#' and find the matching element
        var id = window.location.hash.slice(1, window.location.hash.length);
        var target = document.getElementById(id); // If found, scroll to the element

        if (target) this.scroll.scrollTo(target);
      }
    }
  }, {
    key: "update",
    value: function update() {
      this.scroll.update();
    }
  }, {
    key: "start",
    value: function start() {
      this.scroll.startScroll();
    }
  }, {
    key: "stop",
    value: function stop() {
      this.scroll.stopScroll();
    }
  }, {
    key: "scrollTo",
    value: function scrollTo(target, options) {
      this.scroll.scrollTo(target, options);
    }
  }, {
    key: "setScroll",
    value: function setScroll(x, y) {
      this.scroll.setScroll(x, y);
    }
  }, {
    key: "on",
    value: function on(event, func) {
      this.scroll.setEvents(event, func);
    }
  }, {
    key: "off",
    value: function off(event, func) {
      this.scroll.unsetEvents(event, func);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.scroll.destroy();
    }
  }]);

  return Smooth;
}();

exports.Smooth = Smooth;

var Native = /*#__PURE__*/function () {
  function Native() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Native);

    this.options = options; // Override default options with given ones

    Object.assign(this, defaults, options);
    this.smartphone = defaults.smartphone;
    if (options.smartphone) Object.assign(this.smartphone, options.smartphone);
    this.tablet = defaults.tablet;
    if (options.tablet) Object.assign(this.tablet, options.tablet);
    this.init();
  }

  _createClass(Native, [{
    key: "init",
    value: function init() {
      this.scroll = new _default$1(this.options);
      this.scroll.init();

      if (window.location.hash) {
        // Get the hash without the '#' and find the matching element
        var id = window.location.hash.slice(1, window.location.hash.length);
        var target = document.getElementById(id); // If found, scroll to the element

        if (target) this.scroll.scrollTo(target);
      }
    }
  }, {
    key: "update",
    value: function update() {
      this.scroll.update();
    }
  }, {
    key: "start",
    value: function start() {
      this.scroll.startScroll();
    }
  }, {
    key: "stop",
    value: function stop() {
      this.scroll.stopScroll();
    }
  }, {
    key: "scrollTo",
    value: function scrollTo(target, options) {
      this.scroll.scrollTo(target, options);
    }
  }, {
    key: "setScroll",
    value: function setScroll(x, y) {
      this.scroll.setScroll(x, y);
    }
  }, {
    key: "on",
    value: function on(event, func) {
      this.scroll.setEvents(event, func);
    }
  }, {
    key: "off",
    value: function off(event, func) {
      this.scroll.unsetEvents(event, func);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.scroll.destroy();
    }
  }]);

  return Native;
}();

exports.Native = Native;
var _default2 = Smooth;
exports.default = _default2;
},{}],"node_modules/iterate-object/lib/index.js":[function(require,module,exports) {
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * iterateObject
 * Iterates an object. Note the object field order may differ.
 *
 * @name iterateObject
 * @function
 * @param {Object} obj The input object.
 * @param {Function} fn A function that will be called with the current value, field name and provided object.
 * @return {Function} The `iterateObject` function.
 */
function iterateObject(obj, fn) {
    var i = 0,
        keys = [];

    if (Array.isArray(obj)) {
        for (; i < obj.length; ++i) {
            if (fn(obj[i], i, obj) === false) {
                break;
            }
        }
    } else if ((typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object" && obj !== null) {
        keys = Object.keys(obj);
        for (; i < keys.length; ++i) {
            if (fn(obj[keys[i]], keys[i], obj) === false) {
                break;
            }
        }
    }
}

module.exports = iterateObject;
},{}],"node_modules/map-o/lib/index.js":[function(require,module,exports) {
"use strict";

// Dependencies
var iterateObject = require("iterate-object");

/**
 * mapObject
 * Array-map like for objects.
 *
 * @name mapObject
 * @function
 * @param {Object} obj The input object.
 * @param {Function} fn A function returning the field values.
 * @param {Boolean|Object} clone If `true`, the input object will be cloned.
 * If `clone` is an object, it will be used as target object.
 * @return {Object} The modified object.
 */
function mapObject(obj, fn, clone) {
    var dst = clone === true ? {} : clone ? clone : obj;
    iterateObject(obj, function (v, n, o) {
        dst[n] = fn(v, n, o);
    });
    return dst;
}

module.exports = mapObject;
},{"iterate-object":"node_modules/iterate-object/lib/index.js"}],"node_modules/emojilib/emojis.json":[function(require,module,exports) {
module.exports = {
  "grinning": {
    "keywords": ["face", "smile", "happy", "joy", ":D", "grin"],
    "char": "😀",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "grimacing": {
    "keywords": ["face", "grimace", "teeth"],
    "char": "😬",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "grin": {
    "keywords": ["face", "happy", "smile", "joy", "kawaii"],
    "char": "😁",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "joy": {
    "keywords": ["face", "cry", "tears", "weep", "happy", "happytears", "haha"],
    "char": "😂",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "rofl": {
    "keywords": ["face", "rolling", "floor", "laughing", "lol", "haha"],
    "char": "🤣",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "partying": {
    "keywords": ["face", "celebration", "woohoo"],
    "char": "🥳",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "smiley": {
    "keywords": ["face", "happy", "joy", "haha", ":D", ":)", "smile", "funny"],
    "char": "😃",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "smile": {
    "keywords": ["face", "happy", "joy", "funny", "haha", "laugh", "like", ":D", ":)"],
    "char": "😄",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "sweat_smile": {
    "keywords": ["face", "hot", "happy", "laugh", "sweat", "smile", "relief"],
    "char": "😅",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "laughing": {
    "keywords": ["happy", "joy", "lol", "satisfied", "haha", "face", "glad", "XD", "laugh"],
    "char": "😆",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "innocent": {
    "keywords": ["face", "angel", "heaven", "halo"],
    "char": "😇",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "wink": {
    "keywords": ["face", "happy", "mischievous", "secret", ";)", "smile", "eye"],
    "char": "😉",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "blush": {
    "keywords": ["face", "smile", "happy", "flushed", "crush", "embarrassed", "shy", "joy"],
    "char": "😊",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "slightly_smiling_face": {
    "keywords": ["face", "smile"],
    "char": "🙂",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "upside_down_face": {
    "keywords": ["face", "flipped", "silly", "smile"],
    "char": "🙃",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "relaxed": {
    "keywords": ["face", "blush", "massage", "happiness"],
    "char": "☺️",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "yum": {
    "keywords": ["happy", "joy", "tongue", "smile", "face", "silly", "yummy", "nom", "delicious", "savouring"],
    "char": "😋",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "relieved": {
    "keywords": ["face", "relaxed", "phew", "massage", "happiness"],
    "char": "😌",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "heart_eyes": {
    "keywords": ["face", "love", "like", "affection", "valentines", "infatuation", "crush", "heart"],
    "char": "😍",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "smiling_face_with_three_hearts": {
    "keywords": ["face", "love", "like", "affection", "valentines", "infatuation", "crush", "hearts", "adore"],
    "char": "🥰",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "kissing_heart": {
    "keywords": ["face", "love", "like", "affection", "valentines", "infatuation", "kiss"],
    "char": "😘",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "kissing": {
    "keywords": ["love", "like", "face", "3", "valentines", "infatuation", "kiss"],
    "char": "😗",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "kissing_smiling_eyes": {
    "keywords": ["face", "affection", "valentines", "infatuation", "kiss"],
    "char": "😙",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "kissing_closed_eyes": {
    "keywords": ["face", "love", "like", "affection", "valentines", "infatuation", "kiss"],
    "char": "😚",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "stuck_out_tongue_winking_eye": {
    "keywords": ["face", "prank", "childish", "playful", "mischievous", "smile", "wink", "tongue"],
    "char": "😜",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "zany": {
    "keywords": ["face", "goofy", "crazy"],
    "char": "🤪",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "raised_eyebrow": {
    "keywords": ["face", "distrust", "scepticism", "disapproval", "disbelief", "surprise"],
    "char": "🤨",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "monocle": {
    "keywords": ["face", "stuffy", "wealthy"],
    "char": "🧐",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "stuck_out_tongue_closed_eyes": {
    "keywords": ["face", "prank", "playful", "mischievous", "smile", "tongue"],
    "char": "😝",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "stuck_out_tongue": {
    "keywords": ["face", "prank", "childish", "playful", "mischievous", "smile", "tongue"],
    "char": "😛",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "money_mouth_face": {
    "keywords": ["face", "rich", "dollar", "money"],
    "char": "🤑",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "nerd_face": {
    "keywords": ["face", "nerdy", "geek", "dork"],
    "char": "🤓",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "sunglasses": {
    "keywords": ["face", "cool", "smile", "summer", "beach", "sunglass"],
    "char": "😎",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "star_struck": {
    "keywords": ["face", "smile", "starry", "eyes", "grinning"],
    "char": "🤩",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "clown_face": {
    "keywords": ["face"],
    "char": "🤡",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "cowboy_hat_face": {
    "keywords": ["face", "cowgirl", "hat"],
    "char": "🤠",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "hugs": {
    "keywords": ["face", "smile", "hug"],
    "char": "🤗",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "smirk": {
    "keywords": ["face", "smile", "mean", "prank", "smug", "sarcasm"],
    "char": "😏",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "no_mouth": {
    "keywords": ["face", "hellokitty"],
    "char": "😶",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "neutral_face": {
    "keywords": ["indifference", "meh", ":|", "neutral"],
    "char": "😐",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "expressionless": {
    "keywords": ["face", "indifferent", "-_-", "meh", "deadpan"],
    "char": "😑",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "unamused": {
    "keywords": ["indifference", "bored", "straight face", "serious", "sarcasm", "unimpressed", "skeptical", "dubious", "side_eye"],
    "char": "😒",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "roll_eyes": {
    "keywords": ["face", "eyeroll", "frustrated"],
    "char": "🙄",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "thinking": {
    "keywords": ["face", "hmmm", "think", "consider"],
    "char": "🤔",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "lying_face": {
    "keywords": ["face", "lie", "pinocchio"],
    "char": "🤥",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "hand_over_mouth": {
    "keywords": ["face", "whoops", "shock", "surprise"],
    "char": "🤭",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "shushing": {
    "keywords": ["face", "quiet", "shhh"],
    "char": "🤫",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "symbols_over_mouth": {
    "keywords": ["face", "swearing", "cursing", "cussing", "profanity", "expletive"],
    "char": "🤬",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "exploding_head": {
    "keywords": ["face", "shocked", "mind", "blown"],
    "char": "🤯",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "flushed": {
    "keywords": ["face", "blush", "shy", "flattered"],
    "char": "😳",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "disappointed": {
    "keywords": ["face", "sad", "upset", "depressed", ":("],
    "char": "😞",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "worried": {
    "keywords": ["face", "concern", "nervous", ":("],
    "char": "😟",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "angry": {
    "keywords": ["mad", "face", "annoyed", "frustrated"],
    "char": "😠",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "rage": {
    "keywords": ["angry", "mad", "hate", "despise"],
    "char": "😡",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "pensive": {
    "keywords": ["face", "sad", "depressed", "upset"],
    "char": "😔",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "confused": {
    "keywords": ["face", "indifference", "huh", "weird", "hmmm", ":/"],
    "char": "😕",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "slightly_frowning_face": {
    "keywords": ["face", "frowning", "disappointed", "sad", "upset"],
    "char": "🙁",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "frowning_face": {
    "keywords": ["face", "sad", "upset", "frown"],
    "char": "☹",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "persevere": {
    "keywords": ["face", "sick", "no", "upset", "oops"],
    "char": "😣",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "confounded": {
    "keywords": ["face", "confused", "sick", "unwell", "oops", ":S"],
    "char": "😖",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "tired_face": {
    "keywords": ["sick", "whine", "upset", "frustrated"],
    "char": "😫",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "weary": {
    "keywords": ["face", "tired", "sleepy", "sad", "frustrated", "upset"],
    "char": "😩",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "pleading": {
    "keywords": ["face", "begging", "mercy"],
    "char": "🥺",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "triumph": {
    "keywords": ["face", "gas", "phew", "proud", "pride"],
    "char": "😤",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "open_mouth": {
    "keywords": ["face", "surprise", "impressed", "wow", "whoa", ":O"],
    "char": "😮",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "scream": {
    "keywords": ["face", "munch", "scared", "omg"],
    "char": "😱",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "fearful": {
    "keywords": ["face", "scared", "terrified", "nervous", "oops", "huh"],
    "char": "😨",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "cold_sweat": {
    "keywords": ["face", "nervous", "sweat"],
    "char": "😰",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "hushed": {
    "keywords": ["face", "woo", "shh"],
    "char": "😯",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "frowning": {
    "keywords": ["face", "aw", "what"],
    "char": "😦",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "anguished": {
    "keywords": ["face", "stunned", "nervous"],
    "char": "😧",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "cry": {
    "keywords": ["face", "tears", "sad", "depressed", "upset", ":'("],
    "char": "😢",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "disappointed_relieved": {
    "keywords": ["face", "phew", "sweat", "nervous"],
    "char": "😥",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "drooling_face": {
    "keywords": ["face"],
    "char": "🤤",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "sleepy": {
    "keywords": ["face", "tired", "rest", "nap"],
    "char": "😪",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "sweat": {
    "keywords": ["face", "hot", "sad", "tired", "exercise"],
    "char": "😓",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "hot": {
    "keywords": ["face", "feverish", "heat", "red", "sweating"],
    "char": "🥵",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "cold": {
    "keywords": ["face", "blue", "freezing", "frozen", "frostbite", "icicles"],
    "char": "🥶",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "sob": {
    "keywords": ["face", "cry", "tears", "sad", "upset", "depressed"],
    "char": "😭",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "dizzy_face": {
    "keywords": ["spent", "unconscious", "xox", "dizzy"],
    "char": "😵",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "astonished": {
    "keywords": ["face", "xox", "surprised", "poisoned"],
    "char": "😲",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "zipper_mouth_face": {
    "keywords": ["face", "sealed", "zipper", "secret"],
    "char": "🤐",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "nauseated_face": {
    "keywords": ["face", "vomit", "gross", "green", "sick", "throw up", "ill"],
    "char": "🤢",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "sneezing_face": {
    "keywords": ["face", "gesundheit", "sneeze", "sick", "allergy"],
    "char": "🤧",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "vomiting": {
    "keywords": ["face", "sick"],
    "char": "🤮",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "mask": {
    "keywords": ["face", "sick", "ill", "disease"],
    "char": "😷",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "face_with_thermometer": {
    "keywords": ["sick", "temperature", "thermometer", "cold", "fever"],
    "char": "🤒",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "face_with_head_bandage": {
    "keywords": ["injured", "clumsy", "bandage", "hurt"],
    "char": "🤕",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "woozy": {
    "keywords": ["face", "dizzy", "intoxicated", "tipsy", "wavy"],
    "char": "🥴",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "sleeping": {
    "keywords": ["face", "tired", "sleepy", "night", "zzz"],
    "char": "😴",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "zzz": {
    "keywords": ["sleepy", "tired", "dream"],
    "char": "💤",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "poop": {
    "keywords": ["hankey", "shitface", "fail", "turd", "shit"],
    "char": "💩",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "smiling_imp": {
    "keywords": ["devil", "horns"],
    "char": "😈",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "imp": {
    "keywords": ["devil", "angry", "horns"],
    "char": "👿",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "japanese_ogre": {
    "keywords": ["monster", "red", "mask", "halloween", "scary", "creepy", "devil", "demon", "japanese", "ogre"],
    "char": "👹",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "japanese_goblin": {
    "keywords": ["red", "evil", "mask", "monster", "scary", "creepy", "japanese", "goblin"],
    "char": "👺",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "skull": {
    "keywords": ["dead", "skeleton", "creepy", "death"],
    "char": "💀",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "ghost": {
    "keywords": ["halloween", "spooky", "scary"],
    "char": "👻",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "alien": {
    "keywords": ["UFO", "paul", "weird", "outer_space"],
    "char": "👽",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "robot": {
    "keywords": ["computer", "machine", "bot"],
    "char": "🤖",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "smiley_cat": {
    "keywords": ["animal", "cats", "happy", "smile"],
    "char": "😺",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "smile_cat": {
    "keywords": ["animal", "cats", "smile"],
    "char": "😸",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "joy_cat": {
    "keywords": ["animal", "cats", "haha", "happy", "tears"],
    "char": "😹",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "heart_eyes_cat": {
    "keywords": ["animal", "love", "like", "affection", "cats", "valentines", "heart"],
    "char": "😻",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "smirk_cat": {
    "keywords": ["animal", "cats", "smirk"],
    "char": "😼",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "kissing_cat": {
    "keywords": ["animal", "cats", "kiss"],
    "char": "😽",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "scream_cat": {
    "keywords": ["animal", "cats", "munch", "scared", "scream"],
    "char": "🙀",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "crying_cat_face": {
    "keywords": ["animal", "tears", "weep", "sad", "cats", "upset", "cry"],
    "char": "😿",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "pouting_cat": {
    "keywords": ["animal", "cats"],
    "char": "😾",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "palms_up": {
    "keywords": ["hands", "gesture", "cupped", "prayer"],
    "char": "🤲",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "raised_hands": {
    "keywords": ["gesture", "hooray", "yea", "celebration", "hands"],
    "char": "🙌",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "clap": {
    "keywords": ["hands", "praise", "applause", "congrats", "yay"],
    "char": "👏",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "wave": {
    "keywords": ["hands", "gesture", "goodbye", "solong", "farewell", "hello", "hi", "palm"],
    "char": "👋",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "call_me_hand": {
    "keywords": ["hands", "gesture"],
    "char": "🤙",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "+1": {
    "keywords": ["thumbsup", "yes", "awesome", "good", "agree", "accept", "cool", "hand", "like"],
    "char": "👍",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "-1": {
    "keywords": ["thumbsdown", "no", "dislike", "hand"],
    "char": "👎",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "facepunch": {
    "keywords": ["angry", "violence", "fist", "hit", "attack", "hand"],
    "char": "👊",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "fist": {
    "keywords": ["fingers", "hand", "grasp"],
    "char": "✊",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "fist_left": {
    "keywords": ["hand", "fistbump"],
    "char": "🤛",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "fist_right": {
    "keywords": ["hand", "fistbump"],
    "char": "🤜",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "v": {
    "keywords": ["fingers", "ohyeah", "hand", "peace", "victory", "two"],
    "char": "✌",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "ok_hand": {
    "keywords": ["fingers", "limbs", "perfect", "ok", "okay"],
    "char": "👌",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "raised_hand": {
    "keywords": ["fingers", "stop", "highfive", "palm", "ban"],
    "char": "✋",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "raised_back_of_hand": {
    "keywords": ["fingers", "raised", "backhand"],
    "char": "🤚",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "open_hands": {
    "keywords": ["fingers", "butterfly", "hands", "open"],
    "char": "👐",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "muscle": {
    "keywords": ["arm", "flex", "hand", "summer", "strong", "biceps"],
    "char": "💪",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "pray": {
    "keywords": ["please", "hope", "wish", "namaste", "highfive"],
    "char": "🙏",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "foot": {
    "keywords": ["kick", "stomp"],
    "char": "🦶",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "leg": {
    "keywords": ["kick", "limb"],
    "char": "🦵",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "handshake": {
    "keywords": ["agreement", "shake"],
    "char": "🤝",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "point_up": {
    "keywords": ["hand", "fingers", "direction", "up"],
    "char": "☝",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "point_up_2": {
    "keywords": ["fingers", "hand", "direction", "up"],
    "char": "👆",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "point_down": {
    "keywords": ["fingers", "hand", "direction", "down"],
    "char": "👇",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "point_left": {
    "keywords": ["direction", "fingers", "hand", "left"],
    "char": "👈",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "point_right": {
    "keywords": ["fingers", "hand", "direction", "right"],
    "char": "👉",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "fu": {
    "keywords": ["hand", "fingers", "rude", "middle", "flipping"],
    "char": "🖕",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "raised_hand_with_fingers_splayed": {
    "keywords": ["hand", "fingers", "palm"],
    "char": "🖐",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "love_you": {
    "keywords": ["hand", "fingers", "gesture"],
    "char": "🤟",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "metal": {
    "keywords": ["hand", "fingers", "evil_eye", "sign_of_horns", "rock_on"],
    "char": "🤘",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "crossed_fingers": {
    "keywords": ["good", "lucky"],
    "char": "🤞",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "vulcan_salute": {
    "keywords": ["hand", "fingers", "spock", "star trek"],
    "char": "🖖",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "writing_hand": {
    "keywords": ["lower_left_ballpoint_pen", "stationery", "write", "compose"],
    "char": "✍",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "selfie": {
    "keywords": ["camera", "phone"],
    "char": "🤳",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "nail_care": {
    "keywords": ["beauty", "manicure", "finger", "fashion", "nail"],
    "char": "💅",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "lips": {
    "keywords": ["mouth", "kiss"],
    "char": "👄",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "tooth": {
    "keywords": ["teeth", "dentist"],
    "char": "🦷",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "tongue": {
    "keywords": ["mouth", "playful"],
    "char": "👅",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "ear": {
    "keywords": ["face", "hear", "sound", "listen"],
    "char": "👂",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "nose": {
    "keywords": ["smell", "sniff"],
    "char": "👃",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "eye": {
    "keywords": ["face", "look", "see", "watch", "stare"],
    "char": "👁",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "eyes": {
    "keywords": ["look", "watch", "stalk", "peek", "see"],
    "char": "👀",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "brain": {
    "keywords": ["smart", "intelligent"],
    "char": "🧠",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "bust_in_silhouette": {
    "keywords": ["user", "person", "human"],
    "char": "👤",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "busts_in_silhouette": {
    "keywords": ["user", "person", "human", "group", "team"],
    "char": "👥",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "speaking_head": {
    "keywords": ["user", "person", "human", "sing", "say", "talk"],
    "char": "🗣",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "baby": {
    "keywords": ["child", "boy", "girl", "toddler"],
    "char": "👶",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "child": {
    "keywords": ["gender-neutral", "young"],
    "char": "🧒",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "boy": {
    "keywords": ["man", "male", "guy", "teenager"],
    "char": "👦",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "girl": {
    "keywords": ["female", "woman", "teenager"],
    "char": "👧",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "adult": {
    "keywords": ["gender-neutral", "person"],
    "char": "🧑",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "man": {
    "keywords": ["mustache", "father", "dad", "guy", "classy", "sir", "moustache"],
    "char": "👨",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "woman": {
    "keywords": ["female", "girls", "lady"],
    "char": "👩",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "blonde_woman": {
    "keywords": ["woman", "female", "girl", "blonde", "person"],
    "char": "👱‍♀️",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "blonde_man": {
    "keywords": ["man", "male", "boy", "blonde", "guy", "person"],
    "char": "👱",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "bearded_person": {
    "keywords": ["person", "bewhiskered"],
    "char": "🧔",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "older_adult": {
    "keywords": ["human", "elder", "senior", "gender-neutral"],
    "char": "🧓",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "older_man": {
    "keywords": ["human", "male", "men", "old", "elder", "senior"],
    "char": "👴",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "older_woman": {
    "keywords": ["human", "female", "women", "lady", "old", "elder", "senior"],
    "char": "👵",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "man_with_gua_pi_mao": {
    "keywords": ["male", "boy", "chinese"],
    "char": "👲",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "woman_with_headscarf": {
    "keywords": ["female", "hijab", "mantilla", "tichel"],
    "char": "🧕",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "woman_with_turban": {
    "keywords": ["female", "indian", "hinduism", "arabs", "woman"],
    "char": "👳‍♀️",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "man_with_turban": {
    "keywords": ["male", "indian", "hinduism", "arabs"],
    "char": "👳",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "policewoman": {
    "keywords": ["woman", "police", "law", "legal", "enforcement", "arrest", "911", "female"],
    "char": "👮‍♀️",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "policeman": {
    "keywords": ["man", "police", "law", "legal", "enforcement", "arrest", "911"],
    "char": "👮",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "construction_worker_woman": {
    "keywords": ["female", "human", "wip", "build", "construction", "worker", "labor", "woman"],
    "char": "👷‍♀️",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "construction_worker_man": {
    "keywords": ["male", "human", "wip", "guy", "build", "construction", "worker", "labor"],
    "char": "👷",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "guardswoman": {
    "keywords": ["uk", "gb", "british", "female", "royal", "woman"],
    "char": "💂‍♀️",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "guardsman": {
    "keywords": ["uk", "gb", "british", "male", "guy", "royal"],
    "char": "💂",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "female_detective": {
    "keywords": ["human", "spy", "detective", "female", "woman"],
    "char": "🕵️‍♀️",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "male_detective": {
    "keywords": ["human", "spy", "detective"],
    "char": "🕵",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "woman_health_worker": {
    "keywords": ["doctor", "nurse", "therapist", "healthcare", "woman", "human"],
    "char": "👩‍⚕️",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "man_health_worker": {
    "keywords": ["doctor", "nurse", "therapist", "healthcare", "man", "human"],
    "char": "👨‍⚕️",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "woman_farmer": {
    "keywords": ["rancher", "gardener", "woman", "human"],
    "char": "👩‍🌾",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "man_farmer": {
    "keywords": ["rancher", "gardener", "man", "human"],
    "char": "👨‍🌾",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "woman_cook": {
    "keywords": ["chef", "woman", "human"],
    "char": "👩‍🍳",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "man_cook": {
    "keywords": ["chef", "man", "human"],
    "char": "👨‍🍳",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "woman_student": {
    "keywords": ["graduate", "woman", "human"],
    "char": "👩‍🎓",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "man_student": {
    "keywords": ["graduate", "man", "human"],
    "char": "👨‍🎓",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "woman_singer": {
    "keywords": ["rockstar", "entertainer", "woman", "human"],
    "char": "👩‍🎤",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "man_singer": {
    "keywords": ["rockstar", "entertainer", "man", "human"],
    "char": "👨‍🎤",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "woman_teacher": {
    "keywords": ["instructor", "professor", "woman", "human"],
    "char": "👩‍🏫",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "man_teacher": {
    "keywords": ["instructor", "professor", "man", "human"],
    "char": "👨‍🏫",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "woman_factory_worker": {
    "keywords": ["assembly", "industrial", "woman", "human"],
    "char": "👩‍🏭",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "man_factory_worker": {
    "keywords": ["assembly", "industrial", "man", "human"],
    "char": "👨‍🏭",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "woman_technologist": {
    "keywords": ["coder", "developer", "engineer", "programmer", "software", "woman", "human", "laptop", "computer"],
    "char": "👩‍💻",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "man_technologist": {
    "keywords": ["coder", "developer", "engineer", "programmer", "software", "man", "human", "laptop", "computer"],
    "char": "👨‍💻",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "woman_office_worker": {
    "keywords": ["business", "manager", "woman", "human"],
    "char": "👩‍💼",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "man_office_worker": {
    "keywords": ["business", "manager", "man", "human"],
    "char": "👨‍💼",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "woman_mechanic": {
    "keywords": ["plumber", "woman", "human", "wrench"],
    "char": "👩‍🔧",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "man_mechanic": {
    "keywords": ["plumber", "man", "human", "wrench"],
    "char": "👨‍🔧",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "woman_scientist": {
    "keywords": ["biologist", "chemist", "engineer", "physicist", "woman", "human"],
    "char": "👩‍🔬",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "man_scientist": {
    "keywords": ["biologist", "chemist", "engineer", "physicist", "man", "human"],
    "char": "👨‍🔬",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "woman_artist": {
    "keywords": ["painter", "woman", "human"],
    "char": "👩‍🎨",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "man_artist": {
    "keywords": ["painter", "man", "human"],
    "char": "👨‍🎨",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "woman_firefighter": {
    "keywords": ["fireman", "woman", "human"],
    "char": "👩‍🚒",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "man_firefighter": {
    "keywords": ["fireman", "man", "human"],
    "char": "👨‍🚒",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "woman_pilot": {
    "keywords": ["aviator", "plane", "woman", "human"],
    "char": "👩‍✈️",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "man_pilot": {
    "keywords": ["aviator", "plane", "man", "human"],
    "char": "👨‍✈️",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "woman_astronaut": {
    "keywords": ["space", "rocket", "woman", "human"],
    "char": "👩‍🚀",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "man_astronaut": {
    "keywords": ["space", "rocket", "man", "human"],
    "char": "👨‍🚀",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "woman_judge": {
    "keywords": ["justice", "court", "woman", "human"],
    "char": "👩‍⚖️",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "man_judge": {
    "keywords": ["justice", "court", "man", "human"],
    "char": "👨‍⚖️",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "woman_superhero": {
    "keywords": ["woman", "female", "good", "heroine", "superpowers"],
    "char": "🦸‍♀️",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "man_superhero": {
    "keywords": ["man", "male", "good", "hero", "superpowers"],
    "char": "🦸‍♂️",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "woman_supervillain": {
    "keywords": ["woman", "female", "evil", "bad", "criminal", "heroine", "superpowers"],
    "char": "🦹‍♀️",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "man_supervillain": {
    "keywords": ["man", "male", "evil", "bad", "criminal", "hero", "superpowers"],
    "char": "🦹‍♂️",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "mrs_claus": {
    "keywords": ["woman", "female", "xmas", "mother christmas"],
    "char": "🤶",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "santa": {
    "keywords": ["festival", "man", "male", "xmas", "father christmas"],
    "char": "🎅",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "sorceress": {
    "keywords": ["woman", "female", "mage", "witch"],
    "char": "🧙‍♀️",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "wizard": {
    "keywords": ["man", "male", "mage", "sorcerer"],
    "char": "🧙‍♂️",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "woman_elf": {
    "keywords": ["woman", "female"],
    "char": "🧝‍♀️",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "man_elf": {
    "keywords": ["man", "male"],
    "char": "🧝‍♂️",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "woman_vampire": {
    "keywords": ["woman", "female"],
    "char": "🧛‍♀️",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "man_vampire": {
    "keywords": ["man", "male", "dracula"],
    "char": "🧛‍♂️",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "woman_zombie": {
    "keywords": ["woman", "female", "undead", "walking dead"],
    "char": "🧟‍♀️",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "man_zombie": {
    "keywords": ["man", "male", "dracula", "undead", "walking dead"],
    "char": "🧟‍♂️",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "woman_genie": {
    "keywords": ["woman", "female"],
    "char": "🧞‍♀️",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "man_genie": {
    "keywords": ["man", "male"],
    "char": "🧞‍♂️",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "mermaid": {
    "keywords": ["woman", "female", "merwoman", "ariel"],
    "char": "🧜‍♀️",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "merman": {
    "keywords": ["man", "male", "triton"],
    "char": "🧜‍♂️",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "woman_fairy": {
    "keywords": ["woman", "female"],
    "char": "🧚‍♀️",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "man_fairy": {
    "keywords": ["man", "male"],
    "char": "🧚‍♂️",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "angel": {
    "keywords": ["heaven", "wings", "halo"],
    "char": "👼",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "pregnant_woman": {
    "keywords": ["baby"],
    "char": "🤰",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "breastfeeding": {
    "keywords": ["nursing", "baby"],
    "char": "🤱",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "princess": {
    "keywords": ["girl", "woman", "female", "blond", "crown", "royal", "queen"],
    "char": "👸",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "prince": {
    "keywords": ["boy", "man", "male", "crown", "royal", "king"],
    "char": "🤴",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "bride_with_veil": {
    "keywords": ["couple", "marriage", "wedding", "woman", "bride"],
    "char": "👰",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "man_in_tuxedo": {
    "keywords": ["couple", "marriage", "wedding", "groom"],
    "char": "🤵",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "running_woman": {
    "keywords": ["woman", "walking", "exercise", "race", "running", "female"],
    "char": "🏃‍♀️",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "running_man": {
    "keywords": ["man", "walking", "exercise", "race", "running"],
    "char": "🏃",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "walking_woman": {
    "keywords": ["human", "feet", "steps", "woman", "female"],
    "char": "🚶‍♀️",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "walking_man": {
    "keywords": ["human", "feet", "steps"],
    "char": "🚶",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "dancer": {
    "keywords": ["female", "girl", "woman", "fun"],
    "char": "💃",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "man_dancing": {
    "keywords": ["male", "boy", "fun", "dancer"],
    "char": "🕺",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "dancing_women": {
    "keywords": ["female", "bunny", "women", "girls"],
    "char": "👯",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "dancing_men": {
    "keywords": ["male", "bunny", "men", "boys"],
    "char": "👯‍♂️",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "couple": {
    "keywords": ["pair", "people", "human", "love", "date", "dating", "like", "affection", "valentines", "marriage"],
    "char": "👫",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "two_men_holding_hands": {
    "keywords": ["pair", "couple", "love", "like", "bromance", "friendship", "people", "human"],
    "char": "👬",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "two_women_holding_hands": {
    "keywords": ["pair", "friendship", "couple", "love", "like", "female", "people", "human"],
    "char": "👭",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "bowing_woman": {
    "keywords": ["woman", "female", "girl"],
    "char": "🙇‍♀️",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "bowing_man": {
    "keywords": ["man", "male", "boy"],
    "char": "🙇",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "man_facepalming": {
    "keywords": ["man", "male", "boy", "disbelief"],
    "char": "🤦‍♂️",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "woman_facepalming": {
    "keywords": ["woman", "female", "girl", "disbelief"],
    "char": "🤦‍♀️",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "woman_shrugging": {
    "keywords": ["woman", "female", "girl", "confused", "indifferent", "doubt"],
    "char": "🤷",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "man_shrugging": {
    "keywords": ["man", "male", "boy", "confused", "indifferent", "doubt"],
    "char": "🤷‍♂️",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "tipping_hand_woman": {
    "keywords": ["female", "girl", "woman", "human", "information"],
    "char": "💁",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "tipping_hand_man": {
    "keywords": ["male", "boy", "man", "human", "information"],
    "char": "💁‍♂️",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "no_good_woman": {
    "keywords": ["female", "girl", "woman", "nope"],
    "char": "🙅",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "no_good_man": {
    "keywords": ["male", "boy", "man", "nope"],
    "char": "🙅‍♂️",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "ok_woman": {
    "keywords": ["women", "girl", "female", "pink", "human", "woman"],
    "char": "🙆",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "ok_man": {
    "keywords": ["men", "boy", "male", "blue", "human", "man"],
    "char": "🙆‍♂️",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "raising_hand_woman": {
    "keywords": ["female", "girl", "woman"],
    "char": "🙋",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "raising_hand_man": {
    "keywords": ["male", "boy", "man"],
    "char": "🙋‍♂️",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "pouting_woman": {
    "keywords": ["female", "girl", "woman"],
    "char": "🙎",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "pouting_man": {
    "keywords": ["male", "boy", "man"],
    "char": "🙎‍♂️",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "frowning_woman": {
    "keywords": ["female", "girl", "woman", "sad", "depressed", "discouraged", "unhappy"],
    "char": "🙍",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "frowning_man": {
    "keywords": ["male", "boy", "man", "sad", "depressed", "discouraged", "unhappy"],
    "char": "🙍‍♂️",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "haircut_woman": {
    "keywords": ["female", "girl", "woman"],
    "char": "💇",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "haircut_man": {
    "keywords": ["male", "boy", "man"],
    "char": "💇‍♂️",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "massage_woman": {
    "keywords": ["female", "girl", "woman", "head"],
    "char": "💆",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "massage_man": {
    "keywords": ["male", "boy", "man", "head"],
    "char": "💆‍♂️",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "woman_in_steamy_room": {
    "keywords": ["female", "woman", "spa", "steamroom", "sauna"],
    "char": "🧖‍♀️",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "man_in_steamy_room": {
    "keywords": ["male", "man", "spa", "steamroom", "sauna"],
    "char": "🧖‍♂️",
    "fitzpatrick_scale": true,
    "category": "people"
  },
  "couple_with_heart_woman_man": {
    "keywords": ["pair", "love", "like", "affection", "human", "dating", "valentines", "marriage"],
    "char": "💑",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "couple_with_heart_woman_woman": {
    "keywords": ["pair", "love", "like", "affection", "human", "dating", "valentines", "marriage"],
    "char": "👩‍❤️‍👩",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "couple_with_heart_man_man": {
    "keywords": ["pair", "love", "like", "affection", "human", "dating", "valentines", "marriage"],
    "char": "👨‍❤️‍👨",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "couplekiss_man_woman": {
    "keywords": ["pair", "valentines", "love", "like", "dating", "marriage"],
    "char": "💏",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "couplekiss_woman_woman": {
    "keywords": ["pair", "valentines", "love", "like", "dating", "marriage"],
    "char": "👩‍❤️‍💋‍👩",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "couplekiss_man_man": {
    "keywords": ["pair", "valentines", "love", "like", "dating", "marriage"],
    "char": "👨‍❤️‍💋‍👨",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "family_man_woman_boy": {
    "keywords": ["home", "parents", "child", "mom", "dad", "father", "mother", "people", "human"],
    "char": "👪",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "family_man_woman_girl": {
    "keywords": ["home", "parents", "people", "human", "child"],
    "char": "👨‍👩‍👧",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "family_man_woman_girl_boy": {
    "keywords": ["home", "parents", "people", "human", "children"],
    "char": "👨‍👩‍👧‍👦",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "family_man_woman_boy_boy": {
    "keywords": ["home", "parents", "people", "human", "children"],
    "char": "👨‍👩‍👦‍👦",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "family_man_woman_girl_girl": {
    "keywords": ["home", "parents", "people", "human", "children"],
    "char": "👨‍👩‍👧‍👧",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "family_woman_woman_boy": {
    "keywords": ["home", "parents", "people", "human", "children"],
    "char": "👩‍👩‍👦",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "family_woman_woman_girl": {
    "keywords": ["home", "parents", "people", "human", "children"],
    "char": "👩‍👩‍👧",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "family_woman_woman_girl_boy": {
    "keywords": ["home", "parents", "people", "human", "children"],
    "char": "👩‍👩‍👧‍👦",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "family_woman_woman_boy_boy": {
    "keywords": ["home", "parents", "people", "human", "children"],
    "char": "👩‍👩‍👦‍👦",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "family_woman_woman_girl_girl": {
    "keywords": ["home", "parents", "people", "human", "children"],
    "char": "👩‍👩‍👧‍👧",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "family_man_man_boy": {
    "keywords": ["home", "parents", "people", "human", "children"],
    "char": "👨‍👨‍👦",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "family_man_man_girl": {
    "keywords": ["home", "parents", "people", "human", "children"],
    "char": "👨‍👨‍👧",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "family_man_man_girl_boy": {
    "keywords": ["home", "parents", "people", "human", "children"],
    "char": "👨‍👨‍👧‍👦",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "family_man_man_boy_boy": {
    "keywords": ["home", "parents", "people", "human", "children"],
    "char": "👨‍👨‍👦‍👦",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "family_man_man_girl_girl": {
    "keywords": ["home", "parents", "people", "human", "children"],
    "char": "👨‍👨‍👧‍👧",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "family_woman_boy": {
    "keywords": ["home", "parent", "people", "human", "child"],
    "char": "👩‍👦",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "family_woman_girl": {
    "keywords": ["home", "parent", "people", "human", "child"],
    "char": "👩‍👧",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "family_woman_girl_boy": {
    "keywords": ["home", "parent", "people", "human", "children"],
    "char": "👩‍👧‍👦",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "family_woman_boy_boy": {
    "keywords": ["home", "parent", "people", "human", "children"],
    "char": "👩‍👦‍👦",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "family_woman_girl_girl": {
    "keywords": ["home", "parent", "people", "human", "children"],
    "char": "👩‍👧‍👧",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "family_man_boy": {
    "keywords": ["home", "parent", "people", "human", "child"],
    "char": "👨‍👦",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "family_man_girl": {
    "keywords": ["home", "parent", "people", "human", "child"],
    "char": "👨‍👧",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "family_man_girl_boy": {
    "keywords": ["home", "parent", "people", "human", "children"],
    "char": "👨‍👧‍👦",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "family_man_boy_boy": {
    "keywords": ["home", "parent", "people", "human", "children"],
    "char": "👨‍👦‍👦",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "family_man_girl_girl": {
    "keywords": ["home", "parent", "people", "human", "children"],
    "char": "👨‍👧‍👧",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "yarn": {
    "keywords": ["ball", "crochet", "knit"],
    "char": "🧶",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "thread": {
    "keywords": ["needle", "sewing", "spool", "string"],
    "char": "🧵",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "coat": {
    "keywords": ["jacket"],
    "char": "🧥",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "labcoat": {
    "keywords": ["doctor", "experiment", "scientist", "chemist"],
    "char": "🥼",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "womans_clothes": {
    "keywords": ["fashion", "shopping_bags", "female"],
    "char": "👚",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "tshirt": {
    "keywords": ["fashion", "cloth", "casual", "shirt", "tee"],
    "char": "👕",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "jeans": {
    "keywords": ["fashion", "shopping"],
    "char": "👖",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "necktie": {
    "keywords": ["shirt", "suitup", "formal", "fashion", "cloth", "business"],
    "char": "👔",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "dress": {
    "keywords": ["clothes", "fashion", "shopping"],
    "char": "👗",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "bikini": {
    "keywords": ["swimming", "female", "woman", "girl", "fashion", "beach", "summer"],
    "char": "👙",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "kimono": {
    "keywords": ["dress", "fashion", "women", "female", "japanese"],
    "char": "👘",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "lipstick": {
    "keywords": ["female", "girl", "fashion", "woman"],
    "char": "💄",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "kiss": {
    "keywords": ["face", "lips", "love", "like", "affection", "valentines"],
    "char": "💋",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "footprints": {
    "keywords": ["feet", "tracking", "walking", "beach"],
    "char": "👣",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "flat_shoe": {
    "keywords": ["ballet", "slip-on", "slipper"],
    "char": "🥿",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "high_heel": {
    "keywords": ["fashion", "shoes", "female", "pumps", "stiletto"],
    "char": "👠",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "sandal": {
    "keywords": ["shoes", "fashion", "flip flops"],
    "char": "👡",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "boot": {
    "keywords": ["shoes", "fashion"],
    "char": "👢",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "mans_shoe": {
    "keywords": ["fashion", "male"],
    "char": "👞",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "athletic_shoe": {
    "keywords": ["shoes", "sports", "sneakers"],
    "char": "👟",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "hiking_boot": {
    "keywords": ["backpacking", "camping", "hiking"],
    "char": "🥾",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "socks": {
    "keywords": ["stockings", "clothes"],
    "char": "🧦",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "gloves": {
    "keywords": ["hands", "winter", "clothes"],
    "char": "🧤",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "scarf": {
    "keywords": ["neck", "winter", "clothes"],
    "char": "🧣",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "womans_hat": {
    "keywords": ["fashion", "accessories", "female", "lady", "spring"],
    "char": "👒",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "tophat": {
    "keywords": ["magic", "gentleman", "classy", "circus"],
    "char": "🎩",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "billed_hat": {
    "keywords": ["cap", "baseball"],
    "char": "🧢",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "rescue_worker_helmet": {
    "keywords": ["construction", "build"],
    "char": "⛑",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "mortar_board": {
    "keywords": ["school", "college", "degree", "university", "graduation", "cap", "hat", "legal", "learn", "education"],
    "char": "🎓",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "crown": {
    "keywords": ["king", "kod", "leader", "royalty", "lord"],
    "char": "👑",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "school_satchel": {
    "keywords": ["student", "education", "bag", "backpack"],
    "char": "🎒",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "luggage": {
    "keywords": ["packing", "travel"],
    "char": "🧳",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "pouch": {
    "keywords": ["bag", "accessories", "shopping"],
    "char": "👝",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "purse": {
    "keywords": ["fashion", "accessories", "money", "sales", "shopping"],
    "char": "👛",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "handbag": {
    "keywords": ["fashion", "accessory", "accessories", "shopping"],
    "char": "👜",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "briefcase": {
    "keywords": ["business", "documents", "work", "law", "legal", "job", "career"],
    "char": "💼",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "eyeglasses": {
    "keywords": ["fashion", "accessories", "eyesight", "nerdy", "dork", "geek"],
    "char": "👓",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "dark_sunglasses": {
    "keywords": ["face", "cool", "accessories"],
    "char": "🕶",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "goggles": {
    "keywords": ["eyes", "protection", "safety"],
    "char": "🥽",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "ring": {
    "keywords": ["wedding", "propose", "marriage", "valentines", "diamond", "fashion", "jewelry", "gem", "engagement"],
    "char": "💍",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "closed_umbrella": {
    "keywords": ["weather", "rain", "drizzle"],
    "char": "🌂",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  "dog": {
    "keywords": ["animal", "friend", "nature", "woof", "puppy", "pet", "faithful"],
    "char": "🐶",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "cat": {
    "keywords": ["animal", "meow", "nature", "pet", "kitten"],
    "char": "🐱",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "mouse": {
    "keywords": ["animal", "nature", "cheese_wedge", "rodent"],
    "char": "🐭",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "hamster": {
    "keywords": ["animal", "nature"],
    "char": "🐹",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "rabbit": {
    "keywords": ["animal", "nature", "pet", "spring", "magic", "bunny"],
    "char": "🐰",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "fox_face": {
    "keywords": ["animal", "nature", "face"],
    "char": "🦊",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "bear": {
    "keywords": ["animal", "nature", "wild"],
    "char": "🐻",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "panda_face": {
    "keywords": ["animal", "nature", "panda"],
    "char": "🐼",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "koala": {
    "keywords": ["animal", "nature"],
    "char": "🐨",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "tiger": {
    "keywords": ["animal", "cat", "danger", "wild", "nature", "roar"],
    "char": "🐯",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "lion": {
    "keywords": ["animal", "nature"],
    "char": "🦁",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "cow": {
    "keywords": ["beef", "ox", "animal", "nature", "moo", "milk"],
    "char": "🐮",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "pig": {
    "keywords": ["animal", "oink", "nature"],
    "char": "🐷",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "pig_nose": {
    "keywords": ["animal", "oink"],
    "char": "🐽",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "frog": {
    "keywords": ["animal", "nature", "croak", "toad"],
    "char": "🐸",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "squid": {
    "keywords": ["animal", "nature", "ocean", "sea"],
    "char": "🦑",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "octopus": {
    "keywords": ["animal", "creature", "ocean", "sea", "nature", "beach"],
    "char": "🐙",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "shrimp": {
    "keywords": ["animal", "ocean", "nature", "seafood"],
    "char": "🦐",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "monkey_face": {
    "keywords": ["animal", "nature", "circus"],
    "char": "🐵",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "gorilla": {
    "keywords": ["animal", "nature", "circus"],
    "char": "🦍",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "see_no_evil": {
    "keywords": ["monkey", "animal", "nature", "haha"],
    "char": "🙈",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "hear_no_evil": {
    "keywords": ["animal", "monkey", "nature"],
    "char": "🙉",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "speak_no_evil": {
    "keywords": ["monkey", "animal", "nature", "omg"],
    "char": "🙊",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "monkey": {
    "keywords": ["animal", "nature", "banana", "circus"],
    "char": "🐒",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "chicken": {
    "keywords": ["animal", "cluck", "nature", "bird"],
    "char": "🐔",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "penguin": {
    "keywords": ["animal", "nature"],
    "char": "🐧",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "bird": {
    "keywords": ["animal", "nature", "fly", "tweet", "spring"],
    "char": "🐦",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "baby_chick": {
    "keywords": ["animal", "chicken", "bird"],
    "char": "🐤",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "hatching_chick": {
    "keywords": ["animal", "chicken", "egg", "born", "baby", "bird"],
    "char": "🐣",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "hatched_chick": {
    "keywords": ["animal", "chicken", "baby", "bird"],
    "char": "🐥",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "duck": {
    "keywords": ["animal", "nature", "bird", "mallard"],
    "char": "🦆",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "eagle": {
    "keywords": ["animal", "nature", "bird"],
    "char": "🦅",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "owl": {
    "keywords": ["animal", "nature", "bird", "hoot"],
    "char": "🦉",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "bat": {
    "keywords": ["animal", "nature", "blind", "vampire"],
    "char": "🦇",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "wolf": {
    "keywords": ["animal", "nature", "wild"],
    "char": "🐺",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "boar": {
    "keywords": ["animal", "nature"],
    "char": "🐗",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "horse": {
    "keywords": ["animal", "brown", "nature"],
    "char": "🐴",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "unicorn": {
    "keywords": ["animal", "nature", "mystical"],
    "char": "🦄",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "honeybee": {
    "keywords": ["animal", "insect", "nature", "bug", "spring", "honey"],
    "char": "🐝",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "bug": {
    "keywords": ["animal", "insect", "nature", "worm"],
    "char": "🐛",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "butterfly": {
    "keywords": ["animal", "insect", "nature", "caterpillar"],
    "char": "🦋",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "snail": {
    "keywords": ["slow", "animal", "shell"],
    "char": "🐌",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "beetle": {
    "keywords": ["animal", "insect", "nature", "ladybug"],
    "char": "🐞",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "ant": {
    "keywords": ["animal", "insect", "nature", "bug"],
    "char": "🐜",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "grasshopper": {
    "keywords": ["animal", "cricket", "chirp"],
    "char": "🦗",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "spider": {
    "keywords": ["animal", "arachnid"],
    "char": "🕷",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "scorpion": {
    "keywords": ["animal", "arachnid"],
    "char": "🦂",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "crab": {
    "keywords": ["animal", "crustacean"],
    "char": "🦀",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "snake": {
    "keywords": ["animal", "evil", "nature", "hiss", "python"],
    "char": "🐍",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "lizard": {
    "keywords": ["animal", "nature", "reptile"],
    "char": "🦎",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "t-rex": {
    "keywords": ["animal", "nature", "dinosaur", "tyrannosaurus", "extinct"],
    "char": "🦖",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "sauropod": {
    "keywords": ["animal", "nature", "dinosaur", "brachiosaurus", "brontosaurus", "diplodocus", "extinct"],
    "char": "🦕",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "turtle": {
    "keywords": ["animal", "slow", "nature", "tortoise"],
    "char": "🐢",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "tropical_fish": {
    "keywords": ["animal", "swim", "ocean", "beach", "nemo"],
    "char": "🐠",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "fish": {
    "keywords": ["animal", "food", "nature"],
    "char": "🐟",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "blowfish": {
    "keywords": ["animal", "nature", "food", "sea", "ocean"],
    "char": "🐡",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "dolphin": {
    "keywords": ["animal", "nature", "fish", "sea", "ocean", "flipper", "fins", "beach"],
    "char": "🐬",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "shark": {
    "keywords": ["animal", "nature", "fish", "sea", "ocean", "jaws", "fins", "beach"],
    "char": "🦈",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "whale": {
    "keywords": ["animal", "nature", "sea", "ocean"],
    "char": "🐳",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "whale2": {
    "keywords": ["animal", "nature", "sea", "ocean"],
    "char": "🐋",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "crocodile": {
    "keywords": ["animal", "nature", "reptile", "lizard", "alligator"],
    "char": "🐊",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "leopard": {
    "keywords": ["animal", "nature"],
    "char": "🐆",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "zebra": {
    "keywords": ["animal", "nature", "stripes", "safari"],
    "char": "🦓",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "tiger2": {
    "keywords": ["animal", "nature", "roar"],
    "char": "🐅",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "water_buffalo": {
    "keywords": ["animal", "nature", "ox", "cow"],
    "char": "🐃",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "ox": {
    "keywords": ["animal", "cow", "beef"],
    "char": "🐂",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "cow2": {
    "keywords": ["beef", "ox", "animal", "nature", "moo", "milk"],
    "char": "🐄",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "deer": {
    "keywords": ["animal", "nature", "horns", "venison"],
    "char": "🦌",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "dromedary_camel": {
    "keywords": ["animal", "hot", "desert", "hump"],
    "char": "🐪",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "camel": {
    "keywords": ["animal", "nature", "hot", "desert", "hump"],
    "char": "🐫",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "giraffe": {
    "keywords": ["animal", "nature", "spots", "safari"],
    "char": "🦒",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "elephant": {
    "keywords": ["animal", "nature", "nose", "th", "circus"],
    "char": "🐘",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "rhinoceros": {
    "keywords": ["animal", "nature", "horn"],
    "char": "🦏",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "goat": {
    "keywords": ["animal", "nature"],
    "char": "🐐",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "ram": {
    "keywords": ["animal", "sheep", "nature"],
    "char": "🐏",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "sheep": {
    "keywords": ["animal", "nature", "wool", "shipit"],
    "char": "🐑",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "racehorse": {
    "keywords": ["animal", "gamble", "luck"],
    "char": "🐎",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "pig2": {
    "keywords": ["animal", "nature"],
    "char": "🐖",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "rat": {
    "keywords": ["animal", "mouse", "rodent"],
    "char": "🐀",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "mouse2": {
    "keywords": ["animal", "nature", "rodent"],
    "char": "🐁",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "rooster": {
    "keywords": ["animal", "nature", "chicken"],
    "char": "🐓",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "turkey": {
    "keywords": ["animal", "bird"],
    "char": "🦃",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "dove": {
    "keywords": ["animal", "bird"],
    "char": "🕊",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "dog2": {
    "keywords": ["animal", "nature", "friend", "doge", "pet", "faithful"],
    "char": "🐕",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "poodle": {
    "keywords": ["dog", "animal", "101", "nature", "pet"],
    "char": "🐩",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "cat2": {
    "keywords": ["animal", "meow", "pet", "cats"],
    "char": "🐈",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "rabbit2": {
    "keywords": ["animal", "nature", "pet", "magic", "spring"],
    "char": "🐇",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "chipmunk": {
    "keywords": ["animal", "nature", "rodent", "squirrel"],
    "char": "🐿",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "hedgehog": {
    "keywords": ["animal", "nature", "spiny"],
    "char": "🦔",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "raccoon": {
    "keywords": ["animal", "nature"],
    "char": "🦝",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "llama": {
    "keywords": ["animal", "nature", "alpaca"],
    "char": "🦙",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "hippopotamus": {
    "keywords": ["animal", "nature"],
    "char": "🦛",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "kangaroo": {
    "keywords": ["animal", "nature", "australia", "joey", "hop", "marsupial"],
    "char": "🦘",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "badger": {
    "keywords": ["animal", "nature", "honey"],
    "char": "🦡",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "swan": {
    "keywords": ["animal", "nature", "bird"],
    "char": "🦢",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "peacock": {
    "keywords": ["animal", "nature", "peahen", "bird"],
    "char": "🦚",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "parrot": {
    "keywords": ["animal", "nature", "bird", "pirate", "talk"],
    "char": "🦜",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "lobster": {
    "keywords": ["animal", "nature", "bisque", "claws", "seafood"],
    "char": "🦞",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "mosquito": {
    "keywords": ["animal", "nature", "insect", "malaria"],
    "char": "🦟",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "paw_prints": {
    "keywords": ["animal", "tracking", "footprints", "dog", "cat", "pet", "feet"],
    "char": "🐾",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "dragon": {
    "keywords": ["animal", "myth", "nature", "chinese", "green"],
    "char": "🐉",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "dragon_face": {
    "keywords": ["animal", "myth", "nature", "chinese", "green"],
    "char": "🐲",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "cactus": {
    "keywords": ["vegetable", "plant", "nature"],
    "char": "🌵",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "christmas_tree": {
    "keywords": ["festival", "vacation", "december", "xmas", "celebration"],
    "char": "🎄",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "evergreen_tree": {
    "keywords": ["plant", "nature"],
    "char": "🌲",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "deciduous_tree": {
    "keywords": ["plant", "nature"],
    "char": "🌳",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "palm_tree": {
    "keywords": ["plant", "vegetable", "nature", "summer", "beach", "mojito", "tropical"],
    "char": "🌴",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "seedling": {
    "keywords": ["plant", "nature", "grass", "lawn", "spring"],
    "char": "🌱",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "herb": {
    "keywords": ["vegetable", "plant", "medicine", "weed", "grass", "lawn"],
    "char": "🌿",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "shamrock": {
    "keywords": ["vegetable", "plant", "nature", "irish", "clover"],
    "char": "☘",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "four_leaf_clover": {
    "keywords": ["vegetable", "plant", "nature", "lucky", "irish"],
    "char": "🍀",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "bamboo": {
    "keywords": ["plant", "nature", "vegetable", "panda", "pine_decoration"],
    "char": "🎍",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "tanabata_tree": {
    "keywords": ["plant", "nature", "branch", "summer"],
    "char": "🎋",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "leaves": {
    "keywords": ["nature", "plant", "tree", "vegetable", "grass", "lawn", "spring"],
    "char": "🍃",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "fallen_leaf": {
    "keywords": ["nature", "plant", "vegetable", "leaves"],
    "char": "🍂",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "maple_leaf": {
    "keywords": ["nature", "plant", "vegetable", "ca", "fall"],
    "char": "🍁",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "ear_of_rice": {
    "keywords": ["nature", "plant"],
    "char": "🌾",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "hibiscus": {
    "keywords": ["plant", "vegetable", "flowers", "beach"],
    "char": "🌺",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "sunflower": {
    "keywords": ["nature", "plant", "fall"],
    "char": "🌻",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "rose": {
    "keywords": ["flowers", "valentines", "love", "spring"],
    "char": "🌹",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "wilted_flower": {
    "keywords": ["plant", "nature", "flower"],
    "char": "🥀",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "tulip": {
    "keywords": ["flowers", "plant", "nature", "summer", "spring"],
    "char": "🌷",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "blossom": {
    "keywords": ["nature", "flowers", "yellow"],
    "char": "🌼",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "cherry_blossom": {
    "keywords": ["nature", "plant", "spring", "flower"],
    "char": "🌸",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "bouquet": {
    "keywords": ["flowers", "nature", "spring"],
    "char": "💐",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "mushroom": {
    "keywords": ["plant", "vegetable"],
    "char": "🍄",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "chestnut": {
    "keywords": ["food", "squirrel"],
    "char": "🌰",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "jack_o_lantern": {
    "keywords": ["halloween", "light", "pumpkin", "creepy", "fall"],
    "char": "🎃",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "shell": {
    "keywords": ["nature", "sea", "beach"],
    "char": "🐚",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "spider_web": {
    "keywords": ["animal", "insect", "arachnid", "silk"],
    "char": "🕸",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "earth_americas": {
    "keywords": ["globe", "world", "USA", "international"],
    "char": "🌎",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "earth_africa": {
    "keywords": ["globe", "world", "international"],
    "char": "🌍",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "earth_asia": {
    "keywords": ["globe", "world", "east", "international"],
    "char": "🌏",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "full_moon": {
    "keywords": ["nature", "yellow", "twilight", "planet", "space", "night", "evening", "sleep"],
    "char": "🌕",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "waning_gibbous_moon": {
    "keywords": ["nature", "twilight", "planet", "space", "night", "evening", "sleep", "waxing_gibbous_moon"],
    "char": "🌖",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "last_quarter_moon": {
    "keywords": ["nature", "twilight", "planet", "space", "night", "evening", "sleep"],
    "char": "🌗",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "waning_crescent_moon": {
    "keywords": ["nature", "twilight", "planet", "space", "night", "evening", "sleep"],
    "char": "🌘",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "new_moon": {
    "keywords": ["nature", "twilight", "planet", "space", "night", "evening", "sleep"],
    "char": "🌑",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "waxing_crescent_moon": {
    "keywords": ["nature", "twilight", "planet", "space", "night", "evening", "sleep"],
    "char": "🌒",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "first_quarter_moon": {
    "keywords": ["nature", "twilight", "planet", "space", "night", "evening", "sleep"],
    "char": "🌓",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "waxing_gibbous_moon": {
    "keywords": ["nature", "night", "sky", "gray", "twilight", "planet", "space", "evening", "sleep"],
    "char": "🌔",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "new_moon_with_face": {
    "keywords": ["nature", "twilight", "planet", "space", "night", "evening", "sleep"],
    "char": "🌚",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "full_moon_with_face": {
    "keywords": ["nature", "twilight", "planet", "space", "night", "evening", "sleep"],
    "char": "🌝",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "first_quarter_moon_with_face": {
    "keywords": ["nature", "twilight", "planet", "space", "night", "evening", "sleep"],
    "char": "🌛",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "last_quarter_moon_with_face": {
    "keywords": ["nature", "twilight", "planet", "space", "night", "evening", "sleep"],
    "char": "🌜",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "sun_with_face": {
    "keywords": ["nature", "morning", "sky"],
    "char": "🌞",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "crescent_moon": {
    "keywords": ["night", "sleep", "sky", "evening", "magic"],
    "char": "🌙",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "star": {
    "keywords": ["night", "yellow"],
    "char": "⭐",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "star2": {
    "keywords": ["night", "sparkle", "awesome", "good", "magic"],
    "char": "🌟",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "dizzy": {
    "keywords": ["star", "sparkle", "shoot", "magic"],
    "char": "💫",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "sparkles": {
    "keywords": ["stars", "shine", "shiny", "cool", "awesome", "good", "magic"],
    "char": "✨",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "comet": {
    "keywords": ["space"],
    "char": "☄",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "sunny": {
    "keywords": ["weather", "nature", "brightness", "summer", "beach", "spring"],
    "char": "☀️",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "sun_behind_small_cloud": {
    "keywords": ["weather"],
    "char": "🌤",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "partly_sunny": {
    "keywords": ["weather", "nature", "cloudy", "morning", "fall", "spring"],
    "char": "⛅",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "sun_behind_large_cloud": {
    "keywords": ["weather"],
    "char": "🌥",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "sun_behind_rain_cloud": {
    "keywords": ["weather"],
    "char": "🌦",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "cloud": {
    "keywords": ["weather", "sky"],
    "char": "☁️",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "cloud_with_rain": {
    "keywords": ["weather"],
    "char": "🌧",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "cloud_with_lightning_and_rain": {
    "keywords": ["weather", "lightning"],
    "char": "⛈",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "cloud_with_lightning": {
    "keywords": ["weather", "thunder"],
    "char": "🌩",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "zap": {
    "keywords": ["thunder", "weather", "lightning bolt", "fast"],
    "char": "⚡",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "fire": {
    "keywords": ["hot", "cook", "flame"],
    "char": "🔥",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "boom": {
    "keywords": ["bomb", "explode", "explosion", "collision", "blown"],
    "char": "💥",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "snowflake": {
    "keywords": ["winter", "season", "cold", "weather", "christmas", "xmas"],
    "char": "❄️",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "cloud_with_snow": {
    "keywords": ["weather"],
    "char": "🌨",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "snowman": {
    "keywords": ["winter", "season", "cold", "weather", "christmas", "xmas", "frozen", "without_snow"],
    "char": "⛄",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "snowman_with_snow": {
    "keywords": ["winter", "season", "cold", "weather", "christmas", "xmas", "frozen"],
    "char": "☃",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "wind_face": {
    "keywords": ["gust", "air"],
    "char": "🌬",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "dash": {
    "keywords": ["wind", "air", "fast", "shoo", "fart", "smoke", "puff"],
    "char": "💨",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "tornado": {
    "keywords": ["weather", "cyclone", "twister"],
    "char": "🌪",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "fog": {
    "keywords": ["weather"],
    "char": "🌫",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "open_umbrella": {
    "keywords": ["weather", "spring"],
    "char": "☂",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "umbrella": {
    "keywords": ["rainy", "weather", "spring"],
    "char": "☔",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "droplet": {
    "keywords": ["water", "drip", "faucet", "spring"],
    "char": "💧",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "sweat_drops": {
    "keywords": ["water", "drip", "oops"],
    "char": "💦",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "ocean": {
    "keywords": ["sea", "water", "wave", "nature", "tsunami", "disaster"],
    "char": "🌊",
    "fitzpatrick_scale": false,
    "category": "animals_and_nature"
  },
  "green_apple": {
    "keywords": ["fruit", "nature"],
    "char": "🍏",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "apple": {
    "keywords": ["fruit", "mac", "school"],
    "char": "🍎",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "pear": {
    "keywords": ["fruit", "nature", "food"],
    "char": "🍐",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "tangerine": {
    "keywords": ["food", "fruit", "nature", "orange"],
    "char": "🍊",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "lemon": {
    "keywords": ["fruit", "nature"],
    "char": "🍋",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "banana": {
    "keywords": ["fruit", "food", "monkey"],
    "char": "🍌",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "watermelon": {
    "keywords": ["fruit", "food", "picnic", "summer"],
    "char": "🍉",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "grapes": {
    "keywords": ["fruit", "food", "wine"],
    "char": "🍇",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "strawberry": {
    "keywords": ["fruit", "food", "nature"],
    "char": "🍓",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "melon": {
    "keywords": ["fruit", "nature", "food"],
    "char": "🍈",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "cherries": {
    "keywords": ["food", "fruit"],
    "char": "🍒",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "peach": {
    "keywords": ["fruit", "nature", "food"],
    "char": "🍑",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "pineapple": {
    "keywords": ["fruit", "nature", "food"],
    "char": "🍍",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "coconut": {
    "keywords": ["fruit", "nature", "food", "palm"],
    "char": "🥥",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "kiwi_fruit": {
    "keywords": ["fruit", "food"],
    "char": "🥝",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "mango": {
    "keywords": ["fruit", "food", "tropical"],
    "char": "🥭",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "avocado": {
    "keywords": ["fruit", "food"],
    "char": "🥑",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "broccoli": {
    "keywords": ["fruit", "food", "vegetable"],
    "char": "🥦",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "tomato": {
    "keywords": ["fruit", "vegetable", "nature", "food"],
    "char": "🍅",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "eggplant": {
    "keywords": ["vegetable", "nature", "food", "aubergine"],
    "char": "🍆",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "cucumber": {
    "keywords": ["fruit", "food", "pickle"],
    "char": "🥒",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "carrot": {
    "keywords": ["vegetable", "food", "orange"],
    "char": "🥕",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "hot_pepper": {
    "keywords": ["food", "spicy", "chilli", "chili"],
    "char": "🌶",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "potato": {
    "keywords": ["food", "tuber", "vegatable", "starch"],
    "char": "🥔",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "corn": {
    "keywords": ["food", "vegetable", "plant"],
    "char": "🌽",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "leafy_greens": {
    "keywords": ["food", "vegetable", "plant", "bok choy", "cabbage", "kale", "lettuce"],
    "char": "🥬",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "sweet_potato": {
    "keywords": ["food", "nature"],
    "char": "🍠",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "peanuts": {
    "keywords": ["food", "nut"],
    "char": "🥜",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "honey_pot": {
    "keywords": ["bees", "sweet", "kitchen"],
    "char": "🍯",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "croissant": {
    "keywords": ["food", "bread", "french"],
    "char": "🥐",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "bread": {
    "keywords": ["food", "wheat", "breakfast", "toast"],
    "char": "🍞",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "baguette_bread": {
    "keywords": ["food", "bread", "french"],
    "char": "🥖",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "bagel": {
    "keywords": ["food", "bread", "bakery", "schmear"],
    "char": "🥯",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "pretzel": {
    "keywords": ["food", "bread", "twisted"],
    "char": "🥨",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "cheese": {
    "keywords": ["food", "chadder"],
    "char": "🧀",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "egg": {
    "keywords": ["food", "chicken", "breakfast"],
    "char": "🥚",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "bacon": {
    "keywords": ["food", "breakfast", "pork", "pig", "meat"],
    "char": "🥓",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "steak": {
    "keywords": ["food", "cow", "meat", "cut", "chop", "lambchop", "porkchop"],
    "char": "🥩",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "pancakes": {
    "keywords": ["food", "breakfast", "flapjacks", "hotcakes"],
    "char": "🥞",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "poultry_leg": {
    "keywords": ["food", "meat", "drumstick", "bird", "chicken", "turkey"],
    "char": "🍗",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "meat_on_bone": {
    "keywords": ["good", "food", "drumstick"],
    "char": "🍖",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "bone": {
    "keywords": ["skeleton"],
    "char": "🦴",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "fried_shrimp": {
    "keywords": ["food", "animal", "appetizer", "summer"],
    "char": "🍤",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "fried_egg": {
    "keywords": ["food", "breakfast", "kitchen", "egg"],
    "char": "🍳",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "hamburger": {
    "keywords": ["meat", "fast food", "beef", "cheeseburger", "mcdonalds", "burger king"],
    "char": "🍔",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "fries": {
    "keywords": ["chips", "snack", "fast food"],
    "char": "🍟",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "stuffed_flatbread": {
    "keywords": ["food", "flatbread", "stuffed", "gyro"],
    "char": "🥙",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "hotdog": {
    "keywords": ["food", "frankfurter"],
    "char": "🌭",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "pizza": {
    "keywords": ["food", "party"],
    "char": "🍕",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "sandwich": {
    "keywords": ["food", "lunch", "bread"],
    "char": "🥪",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "canned_food": {
    "keywords": ["food", "soup"],
    "char": "🥫",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "spaghetti": {
    "keywords": ["food", "italian", "noodle"],
    "char": "🍝",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "taco": {
    "keywords": ["food", "mexican"],
    "char": "🌮",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "burrito": {
    "keywords": ["food", "mexican"],
    "char": "🌯",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "green_salad": {
    "keywords": ["food", "healthy", "lettuce"],
    "char": "🥗",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "shallow_pan_of_food": {
    "keywords": ["food", "cooking", "casserole", "paella"],
    "char": "🥘",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "ramen": {
    "keywords": ["food", "japanese", "noodle", "chopsticks"],
    "char": "🍜",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "stew": {
    "keywords": ["food", "meat", "soup"],
    "char": "🍲",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "fish_cake": {
    "keywords": ["food", "japan", "sea", "beach", "narutomaki", "pink", "swirl", "kamaboko", "surimi", "ramen"],
    "char": "🍥",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "fortune_cookie": {
    "keywords": ["food", "prophecy"],
    "char": "🥠",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "sushi": {
    "keywords": ["food", "fish", "japanese", "rice"],
    "char": "🍣",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "bento": {
    "keywords": ["food", "japanese", "box"],
    "char": "🍱",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "curry": {
    "keywords": ["food", "spicy", "hot", "indian"],
    "char": "🍛",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "rice_ball": {
    "keywords": ["food", "japanese"],
    "char": "🍙",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "rice": {
    "keywords": ["food", "china", "asian"],
    "char": "🍚",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "rice_cracker": {
    "keywords": ["food", "japanese"],
    "char": "🍘",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "oden": {
    "keywords": ["food", "japanese"],
    "char": "🍢",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "dango": {
    "keywords": ["food", "dessert", "sweet", "japanese", "barbecue", "meat"],
    "char": "🍡",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "shaved_ice": {
    "keywords": ["hot", "dessert", "summer"],
    "char": "🍧",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "ice_cream": {
    "keywords": ["food", "hot", "dessert"],
    "char": "🍨",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "icecream": {
    "keywords": ["food", "hot", "dessert", "summer"],
    "char": "🍦",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "pie": {
    "keywords": ["food", "dessert", "pastry"],
    "char": "🥧",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "cake": {
    "keywords": ["food", "dessert"],
    "char": "🍰",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "cupcake": {
    "keywords": ["food", "dessert", "bakery", "sweet"],
    "char": "🧁",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "moon_cake": {
    "keywords": ["food", "autumn"],
    "char": "🥮",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "birthday": {
    "keywords": ["food", "dessert", "cake"],
    "char": "🎂",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "custard": {
    "keywords": ["dessert", "food"],
    "char": "🍮",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "candy": {
    "keywords": ["snack", "dessert", "sweet", "lolly"],
    "char": "🍬",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "lollipop": {
    "keywords": ["food", "snack", "candy", "sweet"],
    "char": "🍭",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "chocolate_bar": {
    "keywords": ["food", "snack", "dessert", "sweet"],
    "char": "🍫",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "popcorn": {
    "keywords": ["food", "movie theater", "films", "snack"],
    "char": "🍿",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "dumpling": {
    "keywords": ["food", "empanada", "pierogi", "potsticker"],
    "char": "🥟",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "doughnut": {
    "keywords": ["food", "dessert", "snack", "sweet", "donut"],
    "char": "🍩",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "cookie": {
    "keywords": ["food", "snack", "oreo", "chocolate", "sweet", "dessert"],
    "char": "🍪",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "milk_glass": {
    "keywords": ["beverage", "drink", "cow"],
    "char": "🥛",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "beer": {
    "keywords": ["relax", "beverage", "drink", "drunk", "party", "pub", "summer", "alcohol", "booze"],
    "char": "🍺",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "beers": {
    "keywords": ["relax", "beverage", "drink", "drunk", "party", "pub", "summer", "alcohol", "booze"],
    "char": "🍻",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "clinking_glasses": {
    "keywords": ["beverage", "drink", "party", "alcohol", "celebrate", "cheers", "wine", "champagne", "toast"],
    "char": "🥂",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "wine_glass": {
    "keywords": ["drink", "beverage", "drunk", "alcohol", "booze"],
    "char": "🍷",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "tumbler_glass": {
    "keywords": ["drink", "beverage", "drunk", "alcohol", "liquor", "booze", "bourbon", "scotch", "whisky", "glass", "shot"],
    "char": "🥃",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "cocktail": {
    "keywords": ["drink", "drunk", "alcohol", "beverage", "booze", "mojito"],
    "char": "🍸",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "tropical_drink": {
    "keywords": ["beverage", "cocktail", "summer", "beach", "alcohol", "booze", "mojito"],
    "char": "🍹",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "champagne": {
    "keywords": ["drink", "wine", "bottle", "celebration"],
    "char": "🍾",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "sake": {
    "keywords": ["wine", "drink", "drunk", "beverage", "japanese", "alcohol", "booze"],
    "char": "🍶",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "tea": {
    "keywords": ["drink", "bowl", "breakfast", "green", "british"],
    "char": "🍵",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "cup_with_straw": {
    "keywords": ["drink", "soda"],
    "char": "🥤",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "coffee": {
    "keywords": ["beverage", "caffeine", "latte", "espresso"],
    "char": "☕",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "baby_bottle": {
    "keywords": ["food", "container", "milk"],
    "char": "🍼",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "salt": {
    "keywords": ["condiment", "shaker"],
    "char": "🧂",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "spoon": {
    "keywords": ["cutlery", "kitchen", "tableware"],
    "char": "🥄",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "fork_and_knife": {
    "keywords": ["cutlery", "kitchen"],
    "char": "🍴",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "plate_with_cutlery": {
    "keywords": ["food", "eat", "meal", "lunch", "dinner", "restaurant"],
    "char": "🍽",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "bowl_with_spoon": {
    "keywords": ["food", "breakfast", "cereal", "oatmeal", "porridge"],
    "char": "🥣",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "takeout_box": {
    "keywords": ["food", "leftovers"],
    "char": "🥡",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "chopsticks": {
    "keywords": ["food"],
    "char": "🥢",
    "fitzpatrick_scale": false,
    "category": "food_and_drink"
  },
  "soccer": {
    "keywords": ["sports", "football"],
    "char": "⚽",
    "fitzpatrick_scale": false,
    "category": "activity"
  },
  "basketball": {
    "keywords": ["sports", "balls", "NBA"],
    "char": "🏀",
    "fitzpatrick_scale": false,
    "category": "activity"
  },
  "football": {
    "keywords": ["sports", "balls", "NFL"],
    "char": "🏈",
    "fitzpatrick_scale": false,
    "category": "activity"
  },
  "baseball": {
    "keywords": ["sports", "balls"],
    "char": "⚾",
    "fitzpatrick_scale": false,
    "category": "activity"
  },
  "softball": {
    "keywords": ["sports", "balls"],
    "char": "🥎",
    "fitzpatrick_scale": false,
    "category": "activity"
  },
  "tennis": {
    "keywords": ["sports", "balls", "green"],
    "char": "🎾",
    "fitzpatrick_scale": false,
    "category": "activity"
  },
  "volleyball": {
    "keywords": ["sports", "balls"],
    "char": "🏐",
    "fitzpatrick_scale": false,
    "category": "activity"
  },
  "rugby_football": {
    "keywords": ["sports", "team"],
    "char": "🏉",
    "fitzpatrick_scale": false,
    "category": "activity"
  },
  "flying_disc": {
    "keywords": ["sports", "frisbee", "ultimate"],
    "char": "🥏",
    "fitzpatrick_scale": false,
    "category": "activity"
  },
  "8ball": {
    "keywords": ["pool", "hobby", "game", "luck", "magic"],
    "char": "🎱",
    "fitzpatrick_scale": false,
    "category": "activity"
  },
  "golf": {
    "keywords": ["sports", "business", "flag", "hole", "summer"],
    "char": "⛳",
    "fitzpatrick_scale": false,
    "category": "activity"
  },
  "golfing_woman": {
    "keywords": ["sports", "business", "woman", "female"],
    "char": "🏌️‍♀️",
    "fitzpatrick_scale": false,
    "category": "activity"
  },
  "golfing_man": {
    "keywords": ["sports", "business"],
    "char": "🏌",
    "fitzpatrick_scale": true,
    "category": "activity"
  },
  "ping_pong": {
    "keywords": ["sports", "pingpong"],
    "char": "🏓",
    "fitzpatrick_scale": false,
    "category": "activity"
  },
  "badminton": {
    "keywords": ["sports"],
    "char": "🏸",
    "fitzpatrick_scale": false,
    "category": "activity"
  },
  "goal_net": {
    "keywords": ["sports"],
    "char": "🥅",
    "fitzpatrick_scale": false,
    "category": "activity"
  },
  "ice_hockey": {
    "keywords": ["sports"],
    "char": "🏒",
    "fitzpatrick_scale": false,
    "category": "activity"
  },
  "field_hockey": {
    "keywords": ["sports"],
    "char": "🏑",
    "fitzpatrick_scale": false,
    "category": "activity"
  },
  "lacrosse": {
    "keywords": ["sports", "ball", "stick"],
    "char": "🥍",
    "fitzpatrick_scale": false,
    "category": "activity"
  },
  "cricket": {
    "keywords": ["sports"],
    "char": "🏏",
    "fitzpatrick_scale": false,
    "category": "activity"
  },
  "ski": {
    "keywords": ["sports", "winter", "cold", "snow"],
    "char": "🎿",
    "fitzpatrick_scale": false,
    "category": "activity"
  },
  "skier": {
    "keywords": ["sports", "winter", "snow"],
    "char": "⛷",
    "fitzpatrick_scale": false,
    "category": "activity"
  },
  "snowboarder": {
    "keywords": ["sports", "winter"],
    "char": "🏂",
    "fitzpatrick_scale": true,
    "category": "activity"
  },
  "person_fencing": {
    "keywords": ["sports", "fencing", "sword"],
    "char": "🤺",
    "fitzpatrick_scale": false,
    "category": "activity"
  },
  "women_wrestling": {
    "keywords": ["sports", "wrestlers"],
    "char": "🤼‍♀️",
    "fitzpatrick_scale": false,
    "category": "activity"
  },
  "men_wrestling": {
    "keywords": ["sports", "wrestlers"],
    "char": "🤼‍♂️",
    "fitzpatrick_scale": false,
    "category": "activity"
  },
  "woman_cartwheeling": {
    "keywords": ["gymnastics"],
    "char": "🤸‍♀️",
    "fitzpatrick_scale": true,
    "category": "activity"
  },
  "man_cartwheeling": {
    "keywords": ["gymnastics"],
    "char": "🤸‍♂️",
    "fitzpatrick_scale": true,
    "category": "activity"
  },
  "woman_playing_handball": {
    "keywords": ["sports"],
    "char": "🤾‍♀️",
    "fitzpatrick_scale": true,
    "category": "activity"
  },
  "man_playing_handball": {
    "keywords": ["sports"],
    "char": "🤾‍♂️",
    "fitzpatrick_scale": true,
    "category": "activity"
  },
  "ice_skate": {
    "keywords": ["sports"],
    "char": "⛸",
    "fitzpatrick_scale": false,
    "category": "activity"
  },
  "curling_stone": {
    "keywords": ["sports"],
    "char": "🥌",
    "fitzpatrick_scale": false,
    "category": "activity"
  },
  "skateboard": {
    "keywords": ["board"],
    "char": "🛹",
    "fitzpatrick_scale": false,
    "category": "activity"
  },
  "sled": {
    "keywords": ["sleigh", "luge", "toboggan"],
    "char": "🛷",
    "fitzpatrick_scale": false,
    "category": "activity"
  },
  "bow_and_arrow": {
    "keywords": ["sports"],
    "char": "🏹",
    "fitzpatrick_scale": false,
    "category": "activity"
  },
  "fishing_pole_and_fish": {
    "keywords": ["food", "hobby", "summer"],
    "char": "🎣",
    "fitzpatrick_scale": false,
    "category": "activity"
  },
  "boxing_glove": {
    "keywords": ["sports", "fighting"],
    "char": "🥊",
    "fitzpatrick_scale": false,
    "category": "activity"
  },
  "martial_arts_uniform": {
    "keywords": ["judo", "karate", "taekwondo"],
    "char": "🥋",
    "fitzpatrick_scale": false,
    "category": "activity"
  },
  "rowing_woman": {
    "keywords": ["sports", "hobby", "water", "ship", "woman", "female"],
    "char": "🚣‍♀️",
    "fitzpatrick_scale": true,
    "category": "activity"
  },
  "rowing_man": {
    "keywords": ["sports", "hobby", "water", "ship"],
    "char": "🚣",
    "fitzpatrick_scale": true,
    "category": "activity"
  },
  "climbing_woman": {
    "keywords": ["sports", "hobby", "woman", "female", "rock"],
    "char": "🧗‍♀️",
    "fitzpatrick_scale": true,
    "category": "activity"
  },
  "climbing_man": {
    "keywords": ["sports", "hobby", "man", "male", "rock"],
    "char": "🧗‍♂️",
    "fitzpatrick_scale": true,
    "category": "activity"
  },
  "swimming_woman": {
    "keywords": ["sports", "exercise", "human", "athlete", "water", "summer", "woman", "female"],
    "char": "🏊‍♀️",
    "fitzpatrick_scale": true,
    "category": "activity"
  },
  "swimming_man": {
    "keywords": ["sports", "exercise", "human", "athlete", "water", "summer"],
    "char": "🏊",
    "fitzpatrick_scale": true,
    "category": "activity"
  },
  "woman_playing_water_polo": {
    "keywords": ["sports", "pool"],
    "char": "🤽‍♀️",
    "fitzpatrick_scale": true,
    "category": "activity"
  },
  "man_playing_water_polo": {
    "keywords": ["sports", "pool"],
    "char": "🤽‍♂️",
    "fitzpatrick_scale": true,
    "category": "activity"
  },
  "woman_in_lotus_position": {
    "keywords": ["woman", "female", "meditation", "yoga", "serenity", "zen", "mindfulness"],
    "char": "🧘‍♀️",
    "fitzpatrick_scale": true,
    "category": "activity"
  },
  "man_in_lotus_position": {
    "keywords": ["man", "male", "meditation", "yoga", "serenity", "zen", "mindfulness"],
    "char": "🧘‍♂️",
    "fitzpatrick_scale": true,
    "category": "activity"
  },
  "surfing_woman": {
    "keywords": ["sports", "ocean", "sea", "summer", "beach", "woman", "female"],
    "char": "🏄‍♀️",
    "fitzpatrick_scale": true,
    "category": "activity"
  },
  "surfing_man": {
    "keywords": ["sports", "ocean", "sea", "summer", "beach"],
    "char": "🏄",
    "fitzpatrick_scale": true,
    "category": "activity"
  },
  "bath": {
    "keywords": ["clean", "shower", "bathroom"],
    "char": "🛀",
    "fitzpatrick_scale": true,
    "category": "activity"
  },
  "basketball_woman": {
    "keywords": ["sports", "human", "woman", "female"],
    "char": "⛹️‍♀️",
    "fitzpatrick_scale": true,
    "category": "activity"
  },
  "basketball_man": {
    "keywords": ["sports", "human"],
    "char": "⛹",
    "fitzpatrick_scale": true,
    "category": "activity"
  },
  "weight_lifting_woman": {
    "keywords": ["sports", "training", "exercise", "woman", "female"],
    "char": "🏋️‍♀️",
    "fitzpatrick_scale": true,
    "category": "activity"
  },
  "weight_lifting_man": {
    "keywords": ["sports", "training", "exercise"],
    "char": "🏋",
    "fitzpatrick_scale": true,
    "category": "activity"
  },
  "biking_woman": {
    "keywords": ["sports", "bike", "exercise", "hipster", "woman", "female"],
    "char": "🚴‍♀️",
    "fitzpatrick_scale": true,
    "category": "activity"
  },
  "biking_man": {
    "keywords": ["sports", "bike", "exercise", "hipster"],
    "char": "🚴",
    "fitzpatrick_scale": true,
    "category": "activity"
  },
  "mountain_biking_woman": {
    "keywords": ["transportation", "sports", "human", "race", "bike", "woman", "female"],
    "char": "🚵‍♀️",
    "fitzpatrick_scale": true,
    "category": "activity"
  },
  "mountain_biking_man": {
    "keywords": ["transportation", "sports", "human", "race", "bike"],
    "char": "🚵",
    "fitzpatrick_scale": true,
    "category": "activity"
  },
  "horse_racing": {
    "keywords": ["animal", "betting", "competition", "gambling", "luck"],
    "char": "🏇",
    "fitzpatrick_scale": true,
    "category": "activity"
  },
  "business_suit_levitating": {
    "keywords": ["suit", "business", "levitate", "hover", "jump"],
    "char": "🕴",
    "fitzpatrick_scale": true,
    "category": "activity"
  },
  "trophy": {
    "keywords": ["win", "award", "contest", "place", "ftw", "ceremony"],
    "char": "🏆",
    "fitzpatrick_scale": false,
    "category": "activity"
  },
  "running_shirt_with_sash": {
    "keywords": ["play", "pageant"],
    "char": "🎽",
    "fitzpatrick_scale": false,
    "category": "activity"
  },
  "medal_sports": {
    "keywords": ["award", "winning"],
    "char": "🏅",
    "fitzpatrick_scale": false,
    "category": "activity"
  },
  "medal_military": {
    "keywords": ["award", "winning", "army"],
    "char": "🎖",
    "fitzpatrick_scale": false,
    "category": "activity"
  },
  "1st_place_medal": {
    "keywords": ["award", "winning", "first"],
    "char": "🥇",
    "fitzpatrick_scale": false,
    "category": "activity"
  },
  "2nd_place_medal": {
    "keywords": ["award", "second"],
    "char": "🥈",
    "fitzpatrick_scale": false,
    "category": "activity"
  },
  "3rd_place_medal": {
    "keywords": ["award", "third"],
    "char": "🥉",
    "fitzpatrick_scale": false,
    "category": "activity"
  },
  "reminder_ribbon": {
    "keywords": ["sports", "cause", "support", "awareness"],
    "char": "🎗",
    "fitzpatrick_scale": false,
    "category": "activity"
  },
  "rosette": {
    "keywords": ["flower", "decoration", "military"],
    "char": "🏵",
    "fitzpatrick_scale": false,
    "category": "activity"
  },
  "ticket": {
    "keywords": ["event", "concert", "pass"],
    "char": "🎫",
    "fitzpatrick_scale": false,
    "category": "activity"
  },
  "tickets": {
    "keywords": ["sports", "concert", "entrance"],
    "char": "🎟",
    "fitzpatrick_scale": false,
    "category": "activity"
  },
  "performing_arts": {
    "keywords": ["acting", "theater", "drama"],
    "char": "🎭",
    "fitzpatrick_scale": false,
    "category": "activity"
  },
  "art": {
    "keywords": ["design", "paint", "draw", "colors"],
    "char": "🎨",
    "fitzpatrick_scale": false,
    "category": "activity"
  },
  "circus_tent": {
    "keywords": ["festival", "carnival", "party"],
    "char": "🎪",
    "fitzpatrick_scale": false,
    "category": "activity"
  },
  "woman_juggling": {
    "keywords": ["juggle", "balance", "skill", "multitask"],
    "char": "🤹‍♀️",
    "fitzpatrick_scale": true,
    "category": "activity"
  },
  "man_juggling": {
    "keywords": ["juggle", "balance", "skill", "multitask"],
    "char": "🤹‍♂️",
    "fitzpatrick_scale": true,
    "category": "activity"
  },
  "microphone": {
    "keywords": ["sound", "music", "PA", "sing", "talkshow"],
    "char": "🎤",
    "fitzpatrick_scale": false,
    "category": "activity"
  },
  "headphones": {
    "keywords": ["music", "score", "gadgets"],
    "char": "🎧",
    "fitzpatrick_scale": false,
    "category": "activity"
  },
  "musical_score": {
    "keywords": ["treble", "clef", "compose"],
    "char": "🎼",
    "fitzpatrick_scale": false,
    "category": "activity"
  },
  "musical_keyboard": {
    "keywords": ["piano", "instrument", "compose"],
    "char": "🎹",
    "fitzpatrick_scale": false,
    "category": "activity"
  },
  "drum": {
    "keywords": ["music", "instrument", "drumsticks", "snare"],
    "char": "🥁",
    "fitzpatrick_scale": false,
    "category": "activity"
  },
  "saxophone": {
    "keywords": ["music", "instrument", "jazz", "blues"],
    "char": "🎷",
    "fitzpatrick_scale": false,
    "category": "activity"
  },
  "trumpet": {
    "keywords": ["music", "brass"],
    "char": "🎺",
    "fitzpatrick_scale": false,
    "category": "activity"
  },
  "guitar": {
    "keywords": ["music", "instrument"],
    "char": "🎸",
    "fitzpatrick_scale": false,
    "category": "activity"
  },
  "violin": {
    "keywords": ["music", "instrument", "orchestra", "symphony"],
    "char": "🎻",
    "fitzpatrick_scale": false,
    "category": "activity"
  },
  "clapper": {
    "keywords": ["movie", "film", "record"],
    "char": "🎬",
    "fitzpatrick_scale": false,
    "category": "activity"
  },
  "video_game": {
    "keywords": ["play", "console", "PS4", "controller"],
    "char": "🎮",
    "fitzpatrick_scale": false,
    "category": "activity"
  },
  "space_invader": {
    "keywords": ["game", "arcade", "play"],
    "char": "👾",
    "fitzpatrick_scale": false,
    "category": "activity"
  },
  "dart": {
    "keywords": ["game", "play", "bar", "target", "bullseye"],
    "char": "🎯",
    "fitzpatrick_scale": false,
    "category": "activity"
  },
  "game_die": {
    "keywords": ["dice", "random", "tabletop", "play", "luck"],
    "char": "🎲",
    "fitzpatrick_scale": false,
    "category": "activity"
  },
  "chess_pawn": {
    "keywords": ["expendable"],
    "char": "♟",
    "fitzpatrick_scale": false,
    "category": "activity"
  },
  "slot_machine": {
    "keywords": ["bet", "gamble", "vegas", "fruit machine", "luck", "casino"],
    "char": "🎰",
    "fitzpatrick_scale": false,
    "category": "activity"
  },
  "jigsaw": {
    "keywords": ["interlocking", "puzzle", "piece"],
    "char": "🧩",
    "fitzpatrick_scale": false,
    "category": "activity"
  },
  "bowling": {
    "keywords": ["sports", "fun", "play"],
    "char": "🎳",
    "fitzpatrick_scale": false,
    "category": "activity"
  },
  "red_car": {
    "keywords": ["red", "transportation", "vehicle"],
    "char": "🚗",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "taxi": {
    "keywords": ["uber", "vehicle", "cars", "transportation"],
    "char": "🚕",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "blue_car": {
    "keywords": ["transportation", "vehicle"],
    "char": "🚙",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "bus": {
    "keywords": ["car", "vehicle", "transportation"],
    "char": "🚌",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "trolleybus": {
    "keywords": ["bart", "transportation", "vehicle"],
    "char": "🚎",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "racing_car": {
    "keywords": ["sports", "race", "fast", "formula", "f1"],
    "char": "🏎",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "police_car": {
    "keywords": ["vehicle", "cars", "transportation", "law", "legal", "enforcement"],
    "char": "🚓",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "ambulance": {
    "keywords": ["health", "911", "hospital"],
    "char": "🚑",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "fire_engine": {
    "keywords": ["transportation", "cars", "vehicle"],
    "char": "🚒",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "minibus": {
    "keywords": ["vehicle", "car", "transportation"],
    "char": "🚐",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "truck": {
    "keywords": ["cars", "transportation"],
    "char": "🚚",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "articulated_lorry": {
    "keywords": ["vehicle", "cars", "transportation", "express"],
    "char": "🚛",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "tractor": {
    "keywords": ["vehicle", "car", "farming", "agriculture"],
    "char": "🚜",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "kick_scooter": {
    "keywords": ["vehicle", "kick", "razor"],
    "char": "🛴",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "motorcycle": {
    "keywords": ["race", "sports", "fast"],
    "char": "🏍",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "bike": {
    "keywords": ["sports", "bicycle", "exercise", "hipster"],
    "char": "🚲",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "motor_scooter": {
    "keywords": ["vehicle", "vespa", "sasha"],
    "char": "🛵",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "rotating_light": {
    "keywords": ["police", "ambulance", "911", "emergency", "alert", "error", "pinged", "law", "legal"],
    "char": "🚨",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "oncoming_police_car": {
    "keywords": ["vehicle", "law", "legal", "enforcement", "911"],
    "char": "🚔",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "oncoming_bus": {
    "keywords": ["vehicle", "transportation"],
    "char": "🚍",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "oncoming_automobile": {
    "keywords": ["car", "vehicle", "transportation"],
    "char": "🚘",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "oncoming_taxi": {
    "keywords": ["vehicle", "cars", "uber"],
    "char": "🚖",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "aerial_tramway": {
    "keywords": ["transportation", "vehicle", "ski"],
    "char": "🚡",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "mountain_cableway": {
    "keywords": ["transportation", "vehicle", "ski"],
    "char": "🚠",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "suspension_railway": {
    "keywords": ["vehicle", "transportation"],
    "char": "🚟",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "railway_car": {
    "keywords": ["transportation", "vehicle"],
    "char": "🚃",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "train": {
    "keywords": ["transportation", "vehicle", "carriage", "public", "travel"],
    "char": "🚋",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "monorail": {
    "keywords": ["transportation", "vehicle"],
    "char": "🚝",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "bullettrain_side": {
    "keywords": ["transportation", "vehicle"],
    "char": "🚄",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "bullettrain_front": {
    "keywords": ["transportation", "vehicle", "speed", "fast", "public", "travel"],
    "char": "🚅",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "light_rail": {
    "keywords": ["transportation", "vehicle"],
    "char": "🚈",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "mountain_railway": {
    "keywords": ["transportation", "vehicle"],
    "char": "🚞",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "steam_locomotive": {
    "keywords": ["transportation", "vehicle", "train"],
    "char": "🚂",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "train2": {
    "keywords": ["transportation", "vehicle"],
    "char": "🚆",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "metro": {
    "keywords": ["transportation", "blue-square", "mrt", "underground", "tube"],
    "char": "🚇",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "tram": {
    "keywords": ["transportation", "vehicle"],
    "char": "🚊",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "station": {
    "keywords": ["transportation", "vehicle", "public"],
    "char": "🚉",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "flying_saucer": {
    "keywords": ["transportation", "vehicle", "ufo"],
    "char": "🛸",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "helicopter": {
    "keywords": ["transportation", "vehicle", "fly"],
    "char": "🚁",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "small_airplane": {
    "keywords": ["flight", "transportation", "fly", "vehicle"],
    "char": "🛩",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "airplane": {
    "keywords": ["vehicle", "transportation", "flight", "fly"],
    "char": "✈️",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "flight_departure": {
    "keywords": ["airport", "flight", "landing"],
    "char": "🛫",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "flight_arrival": {
    "keywords": ["airport", "flight", "boarding"],
    "char": "🛬",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "sailboat": {
    "keywords": ["ship", "summer", "transportation", "water", "sailing"],
    "char": "⛵",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "motor_boat": {
    "keywords": ["ship"],
    "char": "🛥",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "speedboat": {
    "keywords": ["ship", "transportation", "vehicle", "summer"],
    "char": "🚤",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "ferry": {
    "keywords": ["boat", "ship", "yacht"],
    "char": "⛴",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "passenger_ship": {
    "keywords": ["yacht", "cruise", "ferry"],
    "char": "🛳",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "rocket": {
    "keywords": ["launch", "ship", "staffmode", "NASA", "outer space", "outer_space", "fly"],
    "char": "🚀",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "artificial_satellite": {
    "keywords": ["communication", "gps", "orbit", "spaceflight", "NASA", "ISS"],
    "char": "🛰",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "seat": {
    "keywords": ["sit", "airplane", "transport", "bus", "flight", "fly"],
    "char": "💺",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "canoe": {
    "keywords": ["boat", "paddle", "water", "ship"],
    "char": "🛶",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "anchor": {
    "keywords": ["ship", "ferry", "sea", "boat"],
    "char": "⚓",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "construction": {
    "keywords": ["wip", "progress", "caution", "warning"],
    "char": "🚧",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "fuelpump": {
    "keywords": ["gas station", "petroleum"],
    "char": "⛽",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "busstop": {
    "keywords": ["transportation", "wait"],
    "char": "🚏",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "vertical_traffic_light": {
    "keywords": ["transportation", "driving"],
    "char": "🚦",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "traffic_light": {
    "keywords": ["transportation", "signal"],
    "char": "🚥",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "checkered_flag": {
    "keywords": ["contest", "finishline", "race", "gokart"],
    "char": "🏁",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "ship": {
    "keywords": ["transportation", "titanic", "deploy"],
    "char": "🚢",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "ferris_wheel": {
    "keywords": ["photo", "carnival", "londoneye"],
    "char": "🎡",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "roller_coaster": {
    "keywords": ["carnival", "playground", "photo", "fun"],
    "char": "🎢",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "carousel_horse": {
    "keywords": ["photo", "carnival"],
    "char": "🎠",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "building_construction": {
    "keywords": ["wip", "working", "progress"],
    "char": "🏗",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "foggy": {
    "keywords": ["photo", "mountain"],
    "char": "🌁",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "tokyo_tower": {
    "keywords": ["photo", "japanese"],
    "char": "🗼",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "factory": {
    "keywords": ["building", "industry", "pollution", "smoke"],
    "char": "🏭",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "fountain": {
    "keywords": ["photo", "summer", "water", "fresh"],
    "char": "⛲",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "rice_scene": {
    "keywords": ["photo", "japan", "asia", "tsukimi"],
    "char": "🎑",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "mountain": {
    "keywords": ["photo", "nature", "environment"],
    "char": "⛰",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "mountain_snow": {
    "keywords": ["photo", "nature", "environment", "winter", "cold"],
    "char": "🏔",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "mount_fuji": {
    "keywords": ["photo", "mountain", "nature", "japanese"],
    "char": "🗻",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "volcano": {
    "keywords": ["photo", "nature", "disaster"],
    "char": "🌋",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "japan": {
    "keywords": ["nation", "country", "japanese", "asia"],
    "char": "🗾",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "camping": {
    "keywords": ["photo", "outdoors", "tent"],
    "char": "🏕",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "tent": {
    "keywords": ["photo", "camping", "outdoors"],
    "char": "⛺",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "national_park": {
    "keywords": ["photo", "environment", "nature"],
    "char": "🏞",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "motorway": {
    "keywords": ["road", "cupertino", "interstate", "highway"],
    "char": "🛣",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "railway_track": {
    "keywords": ["train", "transportation"],
    "char": "🛤",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "sunrise": {
    "keywords": ["morning", "view", "vacation", "photo"],
    "char": "🌅",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "sunrise_over_mountains": {
    "keywords": ["view", "vacation", "photo"],
    "char": "🌄",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "desert": {
    "keywords": ["photo", "warm", "saharah"],
    "char": "🏜",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "beach_umbrella": {
    "keywords": ["weather", "summer", "sunny", "sand", "mojito"],
    "char": "🏖",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "desert_island": {
    "keywords": ["photo", "tropical", "mojito"],
    "char": "🏝",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "city_sunrise": {
    "keywords": ["photo", "good morning", "dawn"],
    "char": "🌇",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "city_sunset": {
    "keywords": ["photo", "evening", "sky", "buildings"],
    "char": "🌆",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "cityscape": {
    "keywords": ["photo", "night life", "urban"],
    "char": "🏙",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "night_with_stars": {
    "keywords": ["evening", "city", "downtown"],
    "char": "🌃",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "bridge_at_night": {
    "keywords": ["photo", "sanfrancisco"],
    "char": "🌉",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "milky_way": {
    "keywords": ["photo", "space", "stars"],
    "char": "🌌",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "stars": {
    "keywords": ["night", "photo"],
    "char": "🌠",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "sparkler": {
    "keywords": ["stars", "night", "shine"],
    "char": "🎇",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "fireworks": {
    "keywords": ["photo", "festival", "carnival", "congratulations"],
    "char": "🎆",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "rainbow": {
    "keywords": ["nature", "happy", "unicorn_face", "photo", "sky", "spring"],
    "char": "🌈",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "houses": {
    "keywords": ["buildings", "photo"],
    "char": "🏘",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "european_castle": {
    "keywords": ["building", "royalty", "history"],
    "char": "🏰",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "japanese_castle": {
    "keywords": ["photo", "building"],
    "char": "🏯",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "stadium": {
    "keywords": ["photo", "place", "sports", "concert", "venue"],
    "char": "🏟",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "statue_of_liberty": {
    "keywords": ["american", "newyork"],
    "char": "🗽",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "house": {
    "keywords": ["building", "home"],
    "char": "🏠",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "house_with_garden": {
    "keywords": ["home", "plant", "nature"],
    "char": "🏡",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "derelict_house": {
    "keywords": ["abandon", "evict", "broken", "building"],
    "char": "🏚",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "office": {
    "keywords": ["building", "bureau", "work"],
    "char": "🏢",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "department_store": {
    "keywords": ["building", "shopping", "mall"],
    "char": "🏬",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "post_office": {
    "keywords": ["building", "envelope", "communication"],
    "char": "🏣",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "european_post_office": {
    "keywords": ["building", "email"],
    "char": "🏤",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "hospital": {
    "keywords": ["building", "health", "surgery", "doctor"],
    "char": "🏥",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "bank": {
    "keywords": ["building", "money", "sales", "cash", "business", "enterprise"],
    "char": "🏦",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "hotel": {
    "keywords": ["building", "accomodation", "checkin"],
    "char": "🏨",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "convenience_store": {
    "keywords": ["building", "shopping", "groceries"],
    "char": "🏪",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "school": {
    "keywords": ["building", "student", "education", "learn", "teach"],
    "char": "🏫",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "love_hotel": {
    "keywords": ["like", "affection", "dating"],
    "char": "🏩",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "wedding": {
    "keywords": ["love", "like", "affection", "couple", "marriage", "bride", "groom"],
    "char": "💒",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "classical_building": {
    "keywords": ["art", "culture", "history"],
    "char": "🏛",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "church": {
    "keywords": ["building", "religion", "christ"],
    "char": "⛪",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "mosque": {
    "keywords": ["islam", "worship", "minaret"],
    "char": "🕌",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "synagogue": {
    "keywords": ["judaism", "worship", "temple", "jewish"],
    "char": "🕍",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "kaaba": {
    "keywords": ["mecca", "mosque", "islam"],
    "char": "🕋",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "shinto_shrine": {
    "keywords": ["temple", "japan", "kyoto"],
    "char": "⛩",
    "fitzpatrick_scale": false,
    "category": "travel_and_places"
  },
  "watch": {
    "keywords": ["time", "accessories"],
    "char": "⌚",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "iphone": {
    "keywords": ["technology", "apple", "gadgets", "dial"],
    "char": "📱",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "calling": {
    "keywords": ["iphone", "incoming"],
    "char": "📲",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "computer": {
    "keywords": ["technology", "laptop", "screen", "display", "monitor"],
    "char": "💻",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "keyboard": {
    "keywords": ["technology", "computer", "type", "input", "text"],
    "char": "⌨",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "desktop_computer": {
    "keywords": ["technology", "computing", "screen"],
    "char": "🖥",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "printer": {
    "keywords": ["paper", "ink"],
    "char": "🖨",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "computer_mouse": {
    "keywords": ["click"],
    "char": "🖱",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "trackball": {
    "keywords": ["technology", "trackpad"],
    "char": "🖲",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "joystick": {
    "keywords": ["game", "play"],
    "char": "🕹",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "clamp": {
    "keywords": ["tool"],
    "char": "🗜",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "minidisc": {
    "keywords": ["technology", "record", "data", "disk", "90s"],
    "char": "💽",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "floppy_disk": {
    "keywords": ["oldschool", "technology", "save", "90s", "80s"],
    "char": "💾",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "cd": {
    "keywords": ["technology", "dvd", "disk", "disc", "90s"],
    "char": "💿",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "dvd": {
    "keywords": ["cd", "disk", "disc"],
    "char": "📀",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "vhs": {
    "keywords": ["record", "video", "oldschool", "90s", "80s"],
    "char": "📼",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "camera": {
    "keywords": ["gadgets", "photography"],
    "char": "📷",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "camera_flash": {
    "keywords": ["photography", "gadgets"],
    "char": "📸",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "video_camera": {
    "keywords": ["film", "record"],
    "char": "📹",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "movie_camera": {
    "keywords": ["film", "record"],
    "char": "🎥",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "film_projector": {
    "keywords": ["video", "tape", "record", "movie"],
    "char": "📽",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "film_strip": {
    "keywords": ["movie"],
    "char": "🎞",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "telephone_receiver": {
    "keywords": ["technology", "communication", "dial"],
    "char": "📞",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "phone": {
    "keywords": ["technology", "communication", "dial", "telephone"],
    "char": "☎️",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "pager": {
    "keywords": ["bbcall", "oldschool", "90s"],
    "char": "📟",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "fax": {
    "keywords": ["communication", "technology"],
    "char": "📠",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "tv": {
    "keywords": ["technology", "program", "oldschool", "show", "television"],
    "char": "📺",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "radio": {
    "keywords": ["communication", "music", "podcast", "program"],
    "char": "📻",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "studio_microphone": {
    "keywords": ["sing", "recording", "artist", "talkshow"],
    "char": "🎙",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "level_slider": {
    "keywords": ["scale"],
    "char": "🎚",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "control_knobs": {
    "keywords": ["dial"],
    "char": "🎛",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "compass": {
    "keywords": ["magnetic", "navigation", "orienteering"],
    "char": "🧭",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "stopwatch": {
    "keywords": ["time", "deadline"],
    "char": "⏱",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "timer_clock": {
    "keywords": ["alarm"],
    "char": "⏲",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "alarm_clock": {
    "keywords": ["time", "wake"],
    "char": "⏰",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "mantelpiece_clock": {
    "keywords": ["time"],
    "char": "🕰",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "hourglass_flowing_sand": {
    "keywords": ["oldschool", "time", "countdown"],
    "char": "⏳",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "hourglass": {
    "keywords": ["time", "clock", "oldschool", "limit", "exam", "quiz", "test"],
    "char": "⌛",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "satellite": {
    "keywords": ["communication", "future", "radio", "space"],
    "char": "📡",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "battery": {
    "keywords": ["power", "energy", "sustain"],
    "char": "🔋",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "electric_plug": {
    "keywords": ["charger", "power"],
    "char": "🔌",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "bulb": {
    "keywords": ["light", "electricity", "idea"],
    "char": "💡",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "flashlight": {
    "keywords": ["dark", "camping", "sight", "night"],
    "char": "🔦",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "candle": {
    "keywords": ["fire", "wax"],
    "char": "🕯",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "fire_extinguisher": {
    "keywords": ["quench"],
    "char": "🧯",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "wastebasket": {
    "keywords": ["bin", "trash", "rubbish", "garbage", "toss"],
    "char": "🗑",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "oil_drum": {
    "keywords": ["barrell"],
    "char": "🛢",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "money_with_wings": {
    "keywords": ["dollar", "bills", "payment", "sale"],
    "char": "💸",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "dollar": {
    "keywords": ["money", "sales", "bill", "currency"],
    "char": "💵",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "yen": {
    "keywords": ["money", "sales", "japanese", "dollar", "currency"],
    "char": "💴",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "euro": {
    "keywords": ["money", "sales", "dollar", "currency"],
    "char": "💶",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "pound": {
    "keywords": ["british", "sterling", "money", "sales", "bills", "uk", "england", "currency"],
    "char": "💷",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "moneybag": {
    "keywords": ["dollar", "payment", "coins", "sale"],
    "char": "💰",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "credit_card": {
    "keywords": ["money", "sales", "dollar", "bill", "payment", "shopping"],
    "char": "💳",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "gem": {
    "keywords": ["blue", "ruby", "diamond", "jewelry"],
    "char": "💎",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "balance_scale": {
    "keywords": ["law", "fairness", "weight"],
    "char": "⚖",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "toolbox": {
    "keywords": ["tools", "diy", "fix", "maintainer", "mechanic"],
    "char": "🧰",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "wrench": {
    "keywords": ["tools", "diy", "ikea", "fix", "maintainer"],
    "char": "🔧",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "hammer": {
    "keywords": ["tools", "build", "create"],
    "char": "🔨",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "hammer_and_pick": {
    "keywords": ["tools", "build", "create"],
    "char": "⚒",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "hammer_and_wrench": {
    "keywords": ["tools", "build", "create"],
    "char": "🛠",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "pick": {
    "keywords": ["tools", "dig"],
    "char": "⛏",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "nut_and_bolt": {
    "keywords": ["handy", "tools", "fix"],
    "char": "🔩",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "gear": {
    "keywords": ["cog"],
    "char": "⚙",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "brick": {
    "keywords": ["bricks"],
    "char": "🧱",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "chains": {
    "keywords": ["lock", "arrest"],
    "char": "⛓",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "magnet": {
    "keywords": ["attraction", "magnetic"],
    "char": "🧲",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "gun": {
    "keywords": ["violence", "weapon", "pistol", "revolver"],
    "char": "🔫",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "bomb": {
    "keywords": ["boom", "explode", "explosion", "terrorism"],
    "char": "💣",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "firecracker": {
    "keywords": ["dynamite", "boom", "explode", "explosion", "explosive"],
    "char": "🧨",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "hocho": {
    "keywords": ["knife", "blade", "cutlery", "kitchen", "weapon"],
    "char": "🔪",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "dagger": {
    "keywords": ["weapon"],
    "char": "🗡",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "crossed_swords": {
    "keywords": ["weapon"],
    "char": "⚔",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "shield": {
    "keywords": ["protection", "security"],
    "char": "🛡",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "smoking": {
    "keywords": ["kills", "tobacco", "cigarette", "joint", "smoke"],
    "char": "🚬",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "skull_and_crossbones": {
    "keywords": ["poison", "danger", "deadly", "scary", "death", "pirate", "evil"],
    "char": "☠",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "coffin": {
    "keywords": ["vampire", "dead", "die", "death", "rip", "graveyard", "cemetery", "casket", "funeral", "box"],
    "char": "⚰",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "funeral_urn": {
    "keywords": ["dead", "die", "death", "rip", "ashes"],
    "char": "⚱",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "amphora": {
    "keywords": ["vase", "jar"],
    "char": "🏺",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "crystal_ball": {
    "keywords": ["disco", "party", "magic", "circus", "fortune_teller"],
    "char": "🔮",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "prayer_beads": {
    "keywords": ["dhikr", "religious"],
    "char": "📿",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "nazar_amulet": {
    "keywords": ["bead", "charm"],
    "char": "🧿",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "barber": {
    "keywords": ["hair", "salon", "style"],
    "char": "💈",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "alembic": {
    "keywords": ["distilling", "science", "experiment", "chemistry"],
    "char": "⚗",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "telescope": {
    "keywords": ["stars", "space", "zoom", "science", "astronomy"],
    "char": "🔭",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "microscope": {
    "keywords": ["laboratory", "experiment", "zoomin", "science", "study"],
    "char": "🔬",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "hole": {
    "keywords": ["embarrassing"],
    "char": "🕳",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "pill": {
    "keywords": ["health", "medicine", "doctor", "pharmacy", "drug"],
    "char": "💊",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "syringe": {
    "keywords": ["health", "hospital", "drugs", "blood", "medicine", "needle", "doctor", "nurse"],
    "char": "💉",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "dna": {
    "keywords": ["biologist", "genetics", "life"],
    "char": "🧬",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "microbe": {
    "keywords": ["amoeba", "bacteria", "germs"],
    "char": "🦠",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "petri_dish": {
    "keywords": ["bacteria", "biology", "culture", "lab"],
    "char": "🧫",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "test_tube": {
    "keywords": ["chemistry", "experiment", "lab", "science"],
    "char": "🧪",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "thermometer": {
    "keywords": ["weather", "temperature", "hot", "cold"],
    "char": "🌡",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "broom": {
    "keywords": ["cleaning", "sweeping", "witch"],
    "char": "🧹",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "basket": {
    "keywords": ["laundry"],
    "char": "🧺",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "toilet_paper": {
    "keywords": ["roll"],
    "char": "🧻",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "label": {
    "keywords": ["sale", "tag"],
    "char": "🏷",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "bookmark": {
    "keywords": ["favorite", "label", "save"],
    "char": "🔖",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "toilet": {
    "keywords": ["restroom", "wc", "washroom", "bathroom", "potty"],
    "char": "🚽",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "shower": {
    "keywords": ["clean", "water", "bathroom"],
    "char": "🚿",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "bathtub": {
    "keywords": ["clean", "shower", "bathroom"],
    "char": "🛁",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "soap": {
    "keywords": ["bar", "bathing", "cleaning", "lather"],
    "char": "🧼",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "sponge": {
    "keywords": ["absorbing", "cleaning", "porous"],
    "char": "🧽",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "lotion_bottle": {
    "keywords": ["moisturizer", "sunscreen"],
    "char": "🧴",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "key": {
    "keywords": ["lock", "door", "password"],
    "char": "🔑",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "old_key": {
    "keywords": ["lock", "door", "password"],
    "char": "🗝",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "couch_and_lamp": {
    "keywords": ["read", "chill"],
    "char": "🛋",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "sleeping_bed": {
    "keywords": ["bed", "rest"],
    "char": "🛌",
    "fitzpatrick_scale": true,
    "category": "objects"
  },
  "bed": {
    "keywords": ["sleep", "rest"],
    "char": "🛏",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "door": {
    "keywords": ["house", "entry", "exit"],
    "char": "🚪",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "bellhop_bell": {
    "keywords": ["service"],
    "char": "🛎",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "teddy_bear": {
    "keywords": ["plush", "stuffed"],
    "char": "🧸",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "framed_picture": {
    "keywords": ["photography"],
    "char": "🖼",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "world_map": {
    "keywords": ["location", "direction"],
    "char": "🗺",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "parasol_on_ground": {
    "keywords": ["weather", "summer"],
    "char": "⛱",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "moyai": {
    "keywords": ["rock", "easter island", "moai"],
    "char": "🗿",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "shopping": {
    "keywords": ["mall", "buy", "purchase"],
    "char": "🛍",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "shopping_cart": {
    "keywords": ["trolley"],
    "char": "🛒",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "balloon": {
    "keywords": ["party", "celebration", "birthday", "circus"],
    "char": "🎈",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "flags": {
    "keywords": ["fish", "japanese", "koinobori", "carp", "banner"],
    "char": "🎏",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "ribbon": {
    "keywords": ["decoration", "pink", "girl", "bowtie"],
    "char": "🎀",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "gift": {
    "keywords": ["present", "birthday", "christmas", "xmas"],
    "char": "🎁",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "confetti_ball": {
    "keywords": ["festival", "party", "birthday", "circus"],
    "char": "🎊",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "tada": {
    "keywords": ["party", "congratulations", "birthday", "magic", "circus", "celebration"],
    "char": "🎉",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "dolls": {
    "keywords": ["japanese", "toy", "kimono"],
    "char": "🎎",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "wind_chime": {
    "keywords": ["nature", "ding", "spring", "bell"],
    "char": "🎐",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "crossed_flags": {
    "keywords": ["japanese", "nation", "country", "border"],
    "char": "🎌",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "izakaya_lantern": {
    "keywords": ["light", "paper", "halloween", "spooky"],
    "char": "🏮",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "red_envelope": {
    "keywords": ["gift"],
    "char": "🧧",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "email": {
    "keywords": ["letter", "postal", "inbox", "communication"],
    "char": "✉️",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "envelope_with_arrow": {
    "keywords": ["email", "communication"],
    "char": "📩",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "incoming_envelope": {
    "keywords": ["email", "inbox"],
    "char": "📨",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "e-mail": {
    "keywords": ["communication", "inbox"],
    "char": "📧",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "love_letter": {
    "keywords": ["email", "like", "affection", "envelope", "valentines"],
    "char": "💌",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "postbox": {
    "keywords": ["email", "letter", "envelope"],
    "char": "📮",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "mailbox_closed": {
    "keywords": ["email", "communication", "inbox"],
    "char": "📪",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "mailbox": {
    "keywords": ["email", "inbox", "communication"],
    "char": "📫",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "mailbox_with_mail": {
    "keywords": ["email", "inbox", "communication"],
    "char": "📬",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "mailbox_with_no_mail": {
    "keywords": ["email", "inbox"],
    "char": "📭",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "package": {
    "keywords": ["mail", "gift", "cardboard", "box", "moving"],
    "char": "📦",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "postal_horn": {
    "keywords": ["instrument", "music"],
    "char": "📯",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "inbox_tray": {
    "keywords": ["email", "documents"],
    "char": "📥",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "outbox_tray": {
    "keywords": ["inbox", "email"],
    "char": "📤",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "scroll": {
    "keywords": ["documents", "ancient", "history", "paper"],
    "char": "📜",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "page_with_curl": {
    "keywords": ["documents", "office", "paper"],
    "char": "📃",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "bookmark_tabs": {
    "keywords": ["favorite", "save", "order", "tidy"],
    "char": "📑",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "receipt": {
    "keywords": ["accounting", "expenses"],
    "char": "🧾",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "bar_chart": {
    "keywords": ["graph", "presentation", "stats"],
    "char": "📊",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "chart_with_upwards_trend": {
    "keywords": ["graph", "presentation", "stats", "recovery", "business", "economics", "money", "sales", "good", "success"],
    "char": "📈",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "chart_with_downwards_trend": {
    "keywords": ["graph", "presentation", "stats", "recession", "business", "economics", "money", "sales", "bad", "failure"],
    "char": "📉",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "page_facing_up": {
    "keywords": ["documents", "office", "paper", "information"],
    "char": "📄",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "date": {
    "keywords": ["calendar", "schedule"],
    "char": "📅",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "calendar": {
    "keywords": ["schedule", "date", "planning"],
    "char": "📆",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "spiral_calendar": {
    "keywords": ["date", "schedule", "planning"],
    "char": "🗓",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "card_index": {
    "keywords": ["business", "stationery"],
    "char": "📇",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "card_file_box": {
    "keywords": ["business", "stationery"],
    "char": "🗃",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "ballot_box": {
    "keywords": ["election", "vote"],
    "char": "🗳",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "file_cabinet": {
    "keywords": ["filing", "organizing"],
    "char": "🗄",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "clipboard": {
    "keywords": ["stationery", "documents"],
    "char": "📋",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "spiral_notepad": {
    "keywords": ["memo", "stationery"],
    "char": "🗒",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "file_folder": {
    "keywords": ["documents", "business", "office"],
    "char": "📁",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "open_file_folder": {
    "keywords": ["documents", "load"],
    "char": "📂",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "card_index_dividers": {
    "keywords": ["organizing", "business", "stationery"],
    "char": "🗂",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "newspaper_roll": {
    "keywords": ["press", "headline"],
    "char": "🗞",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "newspaper": {
    "keywords": ["press", "headline"],
    "char": "📰",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "notebook": {
    "keywords": ["stationery", "record", "notes", "paper", "study"],
    "char": "📓",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "closed_book": {
    "keywords": ["read", "library", "knowledge", "textbook", "learn"],
    "char": "📕",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "green_book": {
    "keywords": ["read", "library", "knowledge", "study"],
    "char": "📗",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "blue_book": {
    "keywords": ["read", "library", "knowledge", "learn", "study"],
    "char": "📘",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "orange_book": {
    "keywords": ["read", "library", "knowledge", "textbook", "study"],
    "char": "📙",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "notebook_with_decorative_cover": {
    "keywords": ["classroom", "notes", "record", "paper", "study"],
    "char": "📔",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "ledger": {
    "keywords": ["notes", "paper"],
    "char": "📒",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "books": {
    "keywords": ["literature", "library", "study"],
    "char": "📚",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "open_book": {
    "keywords": ["book", "read", "library", "knowledge", "literature", "learn", "study"],
    "char": "📖",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "safety_pin": {
    "keywords": ["diaper"],
    "char": "🧷",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "link": {
    "keywords": ["rings", "url"],
    "char": "🔗",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "paperclip": {
    "keywords": ["documents", "stationery"],
    "char": "📎",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "paperclips": {
    "keywords": ["documents", "stationery"],
    "char": "🖇",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "scissors": {
    "keywords": ["stationery", "cut"],
    "char": "✂️",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "triangular_ruler": {
    "keywords": ["stationery", "math", "architect", "sketch"],
    "char": "📐",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "straight_ruler": {
    "keywords": ["stationery", "calculate", "length", "math", "school", "drawing", "architect", "sketch"],
    "char": "📏",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "abacus": {
    "keywords": ["calculation"],
    "char": "🧮",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "pushpin": {
    "keywords": ["stationery", "mark", "here"],
    "char": "📌",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "round_pushpin": {
    "keywords": ["stationery", "location", "map", "here"],
    "char": "📍",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "triangular_flag_on_post": {
    "keywords": ["mark", "milestone", "place"],
    "char": "🚩",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "white_flag": {
    "keywords": ["losing", "loser", "lost", "surrender", "give up", "fail"],
    "char": "🏳",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "black_flag": {
    "keywords": ["pirate"],
    "char": "🏴",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "rainbow_flag": {
    "keywords": ["flag", "rainbow", "pride", "gay", "lgbt", "glbt", "queer", "homosexual", "lesbian", "bisexual", "transgender"],
    "char": "🏳️‍🌈",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "closed_lock_with_key": {
    "keywords": ["security", "privacy"],
    "char": "🔐",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "lock": {
    "keywords": ["security", "password", "padlock"],
    "char": "🔒",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "unlock": {
    "keywords": ["privacy", "security"],
    "char": "🔓",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "lock_with_ink_pen": {
    "keywords": ["security", "secret"],
    "char": "🔏",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "pen": {
    "keywords": ["stationery", "writing", "write"],
    "char": "🖊",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "fountain_pen": {
    "keywords": ["stationery", "writing", "write"],
    "char": "🖋",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "black_nib": {
    "keywords": ["pen", "stationery", "writing", "write"],
    "char": "✒️",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "memo": {
    "keywords": ["write", "documents", "stationery", "pencil", "paper", "writing", "legal", "exam", "quiz", "test", "study", "compose"],
    "char": "📝",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "pencil2": {
    "keywords": ["stationery", "write", "paper", "writing", "school", "study"],
    "char": "✏️",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "crayon": {
    "keywords": ["drawing", "creativity"],
    "char": "🖍",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "paintbrush": {
    "keywords": ["drawing", "creativity", "art"],
    "char": "🖌",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "mag": {
    "keywords": ["search", "zoom", "find", "detective"],
    "char": "🔍",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "mag_right": {
    "keywords": ["search", "zoom", "find", "detective"],
    "char": "🔎",
    "fitzpatrick_scale": false,
    "category": "objects"
  },
  "heart": {
    "keywords": ["love", "like", "valentines"],
    "char": "❤️",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "orange_heart": {
    "keywords": ["love", "like", "affection", "valentines"],
    "char": "🧡",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "yellow_heart": {
    "keywords": ["love", "like", "affection", "valentines"],
    "char": "💛",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "green_heart": {
    "keywords": ["love", "like", "affection", "valentines"],
    "char": "💚",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "blue_heart": {
    "keywords": ["love", "like", "affection", "valentines"],
    "char": "💙",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "purple_heart": {
    "keywords": ["love", "like", "affection", "valentines"],
    "char": "💜",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "black_heart": {
    "keywords": ["evil"],
    "char": "🖤",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "broken_heart": {
    "keywords": ["sad", "sorry", "break", "heart", "heartbreak"],
    "char": "💔",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "heavy_heart_exclamation": {
    "keywords": ["decoration", "love"],
    "char": "❣",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "two_hearts": {
    "keywords": ["love", "like", "affection", "valentines", "heart"],
    "char": "💕",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "revolving_hearts": {
    "keywords": ["love", "like", "affection", "valentines"],
    "char": "💞",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "heartbeat": {
    "keywords": ["love", "like", "affection", "valentines", "pink", "heart"],
    "char": "💓",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "heartpulse": {
    "keywords": ["like", "love", "affection", "valentines", "pink"],
    "char": "💗",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "sparkling_heart": {
    "keywords": ["love", "like", "affection", "valentines"],
    "char": "💖",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "cupid": {
    "keywords": ["love", "like", "heart", "affection", "valentines"],
    "char": "💘",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "gift_heart": {
    "keywords": ["love", "valentines"],
    "char": "💝",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "heart_decoration": {
    "keywords": ["purple-square", "love", "like"],
    "char": "💟",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "peace_symbol": {
    "keywords": ["hippie"],
    "char": "☮",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "latin_cross": {
    "keywords": ["christianity"],
    "char": "✝",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "star_and_crescent": {
    "keywords": ["islam"],
    "char": "☪",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "om": {
    "keywords": ["hinduism", "buddhism", "sikhism", "jainism"],
    "char": "🕉",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "wheel_of_dharma": {
    "keywords": ["hinduism", "buddhism", "sikhism", "jainism"],
    "char": "☸",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "star_of_david": {
    "keywords": ["judaism"],
    "char": "✡",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "six_pointed_star": {
    "keywords": ["purple-square", "religion", "jewish", "hexagram"],
    "char": "🔯",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "menorah": {
    "keywords": ["hanukkah", "candles", "jewish"],
    "char": "🕎",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "yin_yang": {
    "keywords": ["balance"],
    "char": "☯",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "orthodox_cross": {
    "keywords": ["suppedaneum", "religion"],
    "char": "☦",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "place_of_worship": {
    "keywords": ["religion", "church", "temple", "prayer"],
    "char": "🛐",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "ophiuchus": {
    "keywords": ["sign", "purple-square", "constellation", "astrology"],
    "char": "⛎",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "aries": {
    "keywords": ["sign", "purple-square", "zodiac", "astrology"],
    "char": "♈",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "taurus": {
    "keywords": ["purple-square", "sign", "zodiac", "astrology"],
    "char": "♉",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "gemini": {
    "keywords": ["sign", "zodiac", "purple-square", "astrology"],
    "char": "♊",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "cancer": {
    "keywords": ["sign", "zodiac", "purple-square", "astrology"],
    "char": "♋",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "leo": {
    "keywords": ["sign", "purple-square", "zodiac", "astrology"],
    "char": "♌",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "virgo": {
    "keywords": ["sign", "zodiac", "purple-square", "astrology"],
    "char": "♍",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "libra": {
    "keywords": ["sign", "purple-square", "zodiac", "astrology"],
    "char": "♎",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "scorpius": {
    "keywords": ["sign", "zodiac", "purple-square", "astrology", "scorpio"],
    "char": "♏",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "sagittarius": {
    "keywords": ["sign", "zodiac", "purple-square", "astrology"],
    "char": "♐",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "capricorn": {
    "keywords": ["sign", "zodiac", "purple-square", "astrology"],
    "char": "♑",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "aquarius": {
    "keywords": ["sign", "purple-square", "zodiac", "astrology"],
    "char": "♒",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "pisces": {
    "keywords": ["purple-square", "sign", "zodiac", "astrology"],
    "char": "♓",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "id": {
    "keywords": ["purple-square", "words"],
    "char": "🆔",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "atom_symbol": {
    "keywords": ["science", "physics", "chemistry"],
    "char": "⚛",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "u7a7a": {
    "keywords": ["kanji", "japanese", "chinese", "empty", "sky", "blue-square"],
    "char": "🈳",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "u5272": {
    "keywords": ["cut", "divide", "chinese", "kanji", "pink-square"],
    "char": "🈹",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "radioactive": {
    "keywords": ["nuclear", "danger"],
    "char": "☢",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "biohazard": {
    "keywords": ["danger"],
    "char": "☣",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "mobile_phone_off": {
    "keywords": ["mute", "orange-square", "silence", "quiet"],
    "char": "📴",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "vibration_mode": {
    "keywords": ["orange-square", "phone"],
    "char": "📳",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "u6709": {
    "keywords": ["orange-square", "chinese", "have", "kanji"],
    "char": "🈶",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "u7121": {
    "keywords": ["nothing", "chinese", "kanji", "japanese", "orange-square"],
    "char": "🈚",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "u7533": {
    "keywords": ["chinese", "japanese", "kanji", "orange-square"],
    "char": "🈸",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "u55b6": {
    "keywords": ["japanese", "opening hours", "orange-square"],
    "char": "🈺",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "u6708": {
    "keywords": ["chinese", "month", "moon", "japanese", "orange-square", "kanji"],
    "char": "🈷️",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "eight_pointed_black_star": {
    "keywords": ["orange-square", "shape", "polygon"],
    "char": "✴️",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "vs": {
    "keywords": ["words", "orange-square"],
    "char": "🆚",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "accept": {
    "keywords": ["ok", "good", "chinese", "kanji", "agree", "yes", "orange-circle"],
    "char": "🉑",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "white_flower": {
    "keywords": ["japanese", "spring"],
    "char": "💮",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "ideograph_advantage": {
    "keywords": ["chinese", "kanji", "obtain", "get", "circle"],
    "char": "🉐",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "secret": {
    "keywords": ["privacy", "chinese", "sshh", "kanji", "red-circle"],
    "char": "㊙️",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "congratulations": {
    "keywords": ["chinese", "kanji", "japanese", "red-circle"],
    "char": "㊗️",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "u5408": {
    "keywords": ["japanese", "chinese", "join", "kanji", "red-square"],
    "char": "🈴",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "u6e80": {
    "keywords": ["full", "chinese", "japanese", "red-square", "kanji"],
    "char": "🈵",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "u7981": {
    "keywords": ["kanji", "japanese", "chinese", "forbidden", "limit", "restricted", "red-square"],
    "char": "🈲",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "a": {
    "keywords": ["red-square", "alphabet", "letter"],
    "char": "🅰️",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "b": {
    "keywords": ["red-square", "alphabet", "letter"],
    "char": "🅱️",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "ab": {
    "keywords": ["red-square", "alphabet"],
    "char": "🆎",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "cl": {
    "keywords": ["alphabet", "words", "red-square"],
    "char": "🆑",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "o2": {
    "keywords": ["alphabet", "red-square", "letter"],
    "char": "🅾️",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "sos": {
    "keywords": ["help", "red-square", "words", "emergency", "911"],
    "char": "🆘",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "no_entry": {
    "keywords": ["limit", "security", "privacy", "bad", "denied", "stop", "circle"],
    "char": "⛔",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "name_badge": {
    "keywords": ["fire", "forbid"],
    "char": "📛",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "no_entry_sign": {
    "keywords": ["forbid", "stop", "limit", "denied", "disallow", "circle"],
    "char": "🚫",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "x": {
    "keywords": ["no", "delete", "remove", "cancel", "red"],
    "char": "❌",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "o": {
    "keywords": ["circle", "round"],
    "char": "⭕",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "stop_sign": {
    "keywords": ["stop"],
    "char": "🛑",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "anger": {
    "keywords": ["angry", "mad"],
    "char": "💢",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "hotsprings": {
    "keywords": ["bath", "warm", "relax"],
    "char": "♨️",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "no_pedestrians": {
    "keywords": ["rules", "crossing", "walking", "circle"],
    "char": "🚷",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "do_not_litter": {
    "keywords": ["trash", "bin", "garbage", "circle"],
    "char": "🚯",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "no_bicycles": {
    "keywords": ["cyclist", "prohibited", "circle"],
    "char": "🚳",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "non-potable_water": {
    "keywords": ["drink", "faucet", "tap", "circle"],
    "char": "🚱",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "underage": {
    "keywords": ["18", "drink", "pub", "night", "minor", "circle"],
    "char": "🔞",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "no_mobile_phones": {
    "keywords": ["iphone", "mute", "circle"],
    "char": "📵",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "exclamation": {
    "keywords": ["heavy_exclamation_mark", "danger", "surprise", "punctuation", "wow", "warning"],
    "char": "❗",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "grey_exclamation": {
    "keywords": ["surprise", "punctuation", "gray", "wow", "warning"],
    "char": "❕",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "question": {
    "keywords": ["doubt", "confused"],
    "char": "❓",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "grey_question": {
    "keywords": ["doubts", "gray", "huh", "confused"],
    "char": "❔",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "bangbang": {
    "keywords": ["exclamation", "surprise"],
    "char": "‼️",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "interrobang": {
    "keywords": ["wat", "punctuation", "surprise"],
    "char": "⁉️",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "100": {
    "keywords": ["score", "perfect", "numbers", "century", "exam", "quiz", "test", "pass", "hundred"],
    "char": "💯",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "low_brightness": {
    "keywords": ["sun", "afternoon", "warm", "summer"],
    "char": "🔅",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "high_brightness": {
    "keywords": ["sun", "light"],
    "char": "🔆",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "trident": {
    "keywords": ["weapon", "spear"],
    "char": "🔱",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "fleur_de_lis": {
    "keywords": ["decorative", "scout"],
    "char": "⚜",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "part_alternation_mark": {
    "keywords": ["graph", "presentation", "stats", "business", "economics", "bad"],
    "char": "〽️",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "warning": {
    "keywords": ["exclamation", "wip", "alert", "error", "problem", "issue"],
    "char": "⚠️",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "children_crossing": {
    "keywords": ["school", "warning", "danger", "sign", "driving", "yellow-diamond"],
    "char": "🚸",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "beginner": {
    "keywords": ["badge", "shield"],
    "char": "🔰",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "recycle": {
    "keywords": ["arrow", "environment", "garbage", "trash"],
    "char": "♻️",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "u6307": {
    "keywords": ["chinese", "point", "green-square", "kanji"],
    "char": "🈯",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "chart": {
    "keywords": ["green-square", "graph", "presentation", "stats"],
    "char": "💹",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "sparkle": {
    "keywords": ["stars", "green-square", "awesome", "good", "fireworks"],
    "char": "❇️",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "eight_spoked_asterisk": {
    "keywords": ["star", "sparkle", "green-square"],
    "char": "✳️",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "negative_squared_cross_mark": {
    "keywords": ["x", "green-square", "no", "deny"],
    "char": "❎",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "white_check_mark": {
    "keywords": ["green-square", "ok", "agree", "vote", "election", "answer", "tick"],
    "char": "✅",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "diamond_shape_with_a_dot_inside": {
    "keywords": ["jewel", "blue", "gem", "crystal", "fancy"],
    "char": "💠",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "cyclone": {
    "keywords": ["weather", "swirl", "blue", "cloud", "vortex", "spiral", "whirlpool", "spin", "tornado", "hurricane", "typhoon"],
    "char": "🌀",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "loop": {
    "keywords": ["tape", "cassette"],
    "char": "➿",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "globe_with_meridians": {
    "keywords": ["earth", "international", "world", "internet", "interweb", "i18n"],
    "char": "🌐",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "m": {
    "keywords": ["alphabet", "blue-circle", "letter"],
    "char": "Ⓜ️",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "atm": {
    "keywords": ["money", "sales", "cash", "blue-square", "payment", "bank"],
    "char": "🏧",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "sa": {
    "keywords": ["japanese", "blue-square", "katakana"],
    "char": "🈂️",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "passport_control": {
    "keywords": ["custom", "blue-square"],
    "char": "🛂",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "customs": {
    "keywords": ["passport", "border", "blue-square"],
    "char": "🛃",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "baggage_claim": {
    "keywords": ["blue-square", "airport", "transport"],
    "char": "🛄",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "left_luggage": {
    "keywords": ["blue-square", "travel"],
    "char": "🛅",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "wheelchair": {
    "keywords": ["blue-square", "disabled", "a11y", "accessibility"],
    "char": "♿",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "no_smoking": {
    "keywords": ["cigarette", "blue-square", "smell", "smoke"],
    "char": "🚭",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "wc": {
    "keywords": ["toilet", "restroom", "blue-square"],
    "char": "🚾",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "parking": {
    "keywords": ["cars", "blue-square", "alphabet", "letter"],
    "char": "🅿️",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "potable_water": {
    "keywords": ["blue-square", "liquid", "restroom", "cleaning", "faucet"],
    "char": "🚰",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "mens": {
    "keywords": ["toilet", "restroom", "wc", "blue-square", "gender", "male"],
    "char": "🚹",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "womens": {
    "keywords": ["purple-square", "woman", "female", "toilet", "loo", "restroom", "gender"],
    "char": "🚺",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "baby_symbol": {
    "keywords": ["orange-square", "child"],
    "char": "🚼",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "restroom": {
    "keywords": ["blue-square", "toilet", "refresh", "wc", "gender"],
    "char": "🚻",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "put_litter_in_its_place": {
    "keywords": ["blue-square", "sign", "human", "info"],
    "char": "🚮",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "cinema": {
    "keywords": ["blue-square", "record", "film", "movie", "curtain", "stage", "theater"],
    "char": "🎦",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "signal_strength": {
    "keywords": ["blue-square", "reception", "phone", "internet", "connection", "wifi", "bluetooth", "bars"],
    "char": "📶",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "koko": {
    "keywords": ["blue-square", "here", "katakana", "japanese", "destination"],
    "char": "🈁",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "ng": {
    "keywords": ["blue-square", "words", "shape", "icon"],
    "char": "🆖",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "ok": {
    "keywords": ["good", "agree", "yes", "blue-square"],
    "char": "🆗",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "up": {
    "keywords": ["blue-square", "above", "high"],
    "char": "🆙",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "cool": {
    "keywords": ["words", "blue-square"],
    "char": "🆒",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "new": {
    "keywords": ["blue-square", "words", "start"],
    "char": "🆕",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "free": {
    "keywords": ["blue-square", "words"],
    "char": "🆓",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "zero": {
    "keywords": ["0", "numbers", "blue-square", "null"],
    "char": "0️⃣",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "one": {
    "keywords": ["blue-square", "numbers", "1"],
    "char": "1️⃣",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "two": {
    "keywords": ["numbers", "2", "prime", "blue-square"],
    "char": "2️⃣",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "three": {
    "keywords": ["3", "numbers", "prime", "blue-square"],
    "char": "3️⃣",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "four": {
    "keywords": ["4", "numbers", "blue-square"],
    "char": "4️⃣",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "five": {
    "keywords": ["5", "numbers", "blue-square", "prime"],
    "char": "5️⃣",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "six": {
    "keywords": ["6", "numbers", "blue-square"],
    "char": "6️⃣",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "seven": {
    "keywords": ["7", "numbers", "blue-square", "prime"],
    "char": "7️⃣",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "eight": {
    "keywords": ["8", "blue-square", "numbers"],
    "char": "8️⃣",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "nine": {
    "keywords": ["blue-square", "numbers", "9"],
    "char": "9️⃣",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "keycap_ten": {
    "keywords": ["numbers", "10", "blue-square"],
    "char": "🔟",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "asterisk": {
    "keywords": ["star", "keycap"],
    "char": "*⃣",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "1234": {
    "keywords": ["numbers", "blue-square"],
    "char": "🔢",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "eject_button": {
    "keywords": ["blue-square"],
    "char": "⏏️",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "arrow_forward": {
    "keywords": ["blue-square", "right", "direction", "play"],
    "char": "▶️",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "pause_button": {
    "keywords": ["pause", "blue-square"],
    "char": "⏸",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "next_track_button": {
    "keywords": ["forward", "next", "blue-square"],
    "char": "⏭",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "stop_button": {
    "keywords": ["blue-square"],
    "char": "⏹",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "record_button": {
    "keywords": ["blue-square"],
    "char": "⏺",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "play_or_pause_button": {
    "keywords": ["blue-square", "play", "pause"],
    "char": "⏯",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "previous_track_button": {
    "keywords": ["backward"],
    "char": "⏮",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "fast_forward": {
    "keywords": ["blue-square", "play", "speed", "continue"],
    "char": "⏩",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "rewind": {
    "keywords": ["play", "blue-square"],
    "char": "⏪",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "twisted_rightwards_arrows": {
    "keywords": ["blue-square", "shuffle", "music", "random"],
    "char": "🔀",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "repeat": {
    "keywords": ["loop", "record"],
    "char": "🔁",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "repeat_one": {
    "keywords": ["blue-square", "loop"],
    "char": "🔂",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "arrow_backward": {
    "keywords": ["blue-square", "left", "direction"],
    "char": "◀️",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "arrow_up_small": {
    "keywords": ["blue-square", "triangle", "direction", "point", "forward", "top"],
    "char": "🔼",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "arrow_down_small": {
    "keywords": ["blue-square", "direction", "bottom"],
    "char": "🔽",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "arrow_double_up": {
    "keywords": ["blue-square", "direction", "top"],
    "char": "⏫",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "arrow_double_down": {
    "keywords": ["blue-square", "direction", "bottom"],
    "char": "⏬",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "arrow_right": {
    "keywords": ["blue-square", "next"],
    "char": "➡️",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "arrow_left": {
    "keywords": ["blue-square", "previous", "back"],
    "char": "⬅️",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "arrow_up": {
    "keywords": ["blue-square", "continue", "top", "direction"],
    "char": "⬆️",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "arrow_down": {
    "keywords": ["blue-square", "direction", "bottom"],
    "char": "⬇️",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "arrow_upper_right": {
    "keywords": ["blue-square", "point", "direction", "diagonal", "northeast"],
    "char": "↗️",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "arrow_lower_right": {
    "keywords": ["blue-square", "direction", "diagonal", "southeast"],
    "char": "↘️",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "arrow_lower_left": {
    "keywords": ["blue-square", "direction", "diagonal", "southwest"],
    "char": "↙️",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "arrow_upper_left": {
    "keywords": ["blue-square", "point", "direction", "diagonal", "northwest"],
    "char": "↖️",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "arrow_up_down": {
    "keywords": ["blue-square", "direction", "way", "vertical"],
    "char": "↕️",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "left_right_arrow": {
    "keywords": ["shape", "direction", "horizontal", "sideways"],
    "char": "↔️",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "arrows_counterclockwise": {
    "keywords": ["blue-square", "sync", "cycle"],
    "char": "🔄",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "arrow_right_hook": {
    "keywords": ["blue-square", "return", "rotate", "direction"],
    "char": "↪️",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "leftwards_arrow_with_hook": {
    "keywords": ["back", "return", "blue-square", "undo", "enter"],
    "char": "↩️",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "arrow_heading_up": {
    "keywords": ["blue-square", "direction", "top"],
    "char": "⤴️",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "arrow_heading_down": {
    "keywords": ["blue-square", "direction", "bottom"],
    "char": "⤵️",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "hash": {
    "keywords": ["symbol", "blue-square", "twitter"],
    "char": "#️⃣",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "information_source": {
    "keywords": ["blue-square", "alphabet", "letter"],
    "char": "ℹ️",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "abc": {
    "keywords": ["blue-square", "alphabet"],
    "char": "🔤",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "abcd": {
    "keywords": ["blue-square", "alphabet"],
    "char": "🔡",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "capital_abcd": {
    "keywords": ["alphabet", "words", "blue-square"],
    "char": "🔠",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "symbols": {
    "keywords": ["blue-square", "music", "note", "ampersand", "percent", "glyphs", "characters"],
    "char": "🔣",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "musical_note": {
    "keywords": ["score", "tone", "sound"],
    "char": "🎵",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "notes": {
    "keywords": ["music", "score"],
    "char": "🎶",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "wavy_dash": {
    "keywords": ["draw", "line", "moustache", "mustache", "squiggle", "scribble"],
    "char": "〰️",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "curly_loop": {
    "keywords": ["scribble", "draw", "shape", "squiggle"],
    "char": "➰",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "heavy_check_mark": {
    "keywords": ["ok", "nike", "answer", "yes", "tick"],
    "char": "✔️",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "arrows_clockwise": {
    "keywords": ["sync", "cycle", "round", "repeat"],
    "char": "🔃",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "heavy_plus_sign": {
    "keywords": ["math", "calculation", "addition", "more", "increase"],
    "char": "➕",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "heavy_minus_sign": {
    "keywords": ["math", "calculation", "subtract", "less"],
    "char": "➖",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "heavy_division_sign": {
    "keywords": ["divide", "math", "calculation"],
    "char": "➗",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "heavy_multiplication_x": {
    "keywords": ["math", "calculation"],
    "char": "✖️",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "infinity": {
    "keywords": ["forever"],
    "char": "♾",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "heavy_dollar_sign": {
    "keywords": ["money", "sales", "payment", "currency", "buck"],
    "char": "💲",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "currency_exchange": {
    "keywords": ["money", "sales", "dollar", "travel"],
    "char": "💱",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "copyright": {
    "keywords": ["ip", "license", "circle", "law", "legal"],
    "char": "©️",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "registered": {
    "keywords": ["alphabet", "circle"],
    "char": "®️",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "tm": {
    "keywords": ["trademark", "brand", "law", "legal"],
    "char": "™️",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "end": {
    "keywords": ["words", "arrow"],
    "char": "🔚",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "back": {
    "keywords": ["arrow", "words", "return"],
    "char": "🔙",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "on": {
    "keywords": ["arrow", "words"],
    "char": "🔛",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "top": {
    "keywords": ["words", "blue-square"],
    "char": "🔝",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "soon": {
    "keywords": ["arrow", "words"],
    "char": "🔜",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "ballot_box_with_check": {
    "keywords": ["ok", "agree", "confirm", "black-square", "vote", "election", "yes", "tick"],
    "char": "☑️",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "radio_button": {
    "keywords": ["input", "old", "music", "circle"],
    "char": "🔘",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "white_circle": {
    "keywords": ["shape", "round"],
    "char": "⚪",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "black_circle": {
    "keywords": ["shape", "button", "round"],
    "char": "⚫",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "red_circle": {
    "keywords": ["shape", "error", "danger"],
    "char": "🔴",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "large_blue_circle": {
    "keywords": ["shape", "icon", "button"],
    "char": "🔵",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "small_orange_diamond": {
    "keywords": ["shape", "jewel", "gem"],
    "char": "🔸",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "small_blue_diamond": {
    "keywords": ["shape", "jewel", "gem"],
    "char": "🔹",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "large_orange_diamond": {
    "keywords": ["shape", "jewel", "gem"],
    "char": "🔶",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "large_blue_diamond": {
    "keywords": ["shape", "jewel", "gem"],
    "char": "🔷",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "small_red_triangle": {
    "keywords": ["shape", "direction", "up", "top"],
    "char": "🔺",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "black_small_square": {
    "keywords": ["shape", "icon"],
    "char": "▪️",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "white_small_square": {
    "keywords": ["shape", "icon"],
    "char": "▫️",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "black_large_square": {
    "keywords": ["shape", "icon", "button"],
    "char": "⬛",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "white_large_square": {
    "keywords": ["shape", "icon", "stone", "button"],
    "char": "⬜",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "small_red_triangle_down": {
    "keywords": ["shape", "direction", "bottom"],
    "char": "🔻",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "black_medium_square": {
    "keywords": ["shape", "button", "icon"],
    "char": "◼️",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "white_medium_square": {
    "keywords": ["shape", "stone", "icon"],
    "char": "◻️",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "black_medium_small_square": {
    "keywords": ["icon", "shape", "button"],
    "char": "◾",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "white_medium_small_square": {
    "keywords": ["shape", "stone", "icon", "button"],
    "char": "◽",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "black_square_button": {
    "keywords": ["shape", "input", "frame"],
    "char": "🔲",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "white_square_button": {
    "keywords": ["shape", "input"],
    "char": "🔳",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "speaker": {
    "keywords": ["sound", "volume", "silence", "broadcast"],
    "char": "🔈",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "sound": {
    "keywords": ["volume", "speaker", "broadcast"],
    "char": "🔉",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "loud_sound": {
    "keywords": ["volume", "noise", "noisy", "speaker", "broadcast"],
    "char": "🔊",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "mute": {
    "keywords": ["sound", "volume", "silence", "quiet"],
    "char": "🔇",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "mega": {
    "keywords": ["sound", "speaker", "volume"],
    "char": "📣",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "loudspeaker": {
    "keywords": ["volume", "sound"],
    "char": "📢",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "bell": {
    "keywords": ["sound", "notification", "christmas", "xmas", "chime"],
    "char": "🔔",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "no_bell": {
    "keywords": ["sound", "volume", "mute", "quiet", "silent"],
    "char": "🔕",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "black_joker": {
    "keywords": ["poker", "cards", "game", "play", "magic"],
    "char": "🃏",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "mahjong": {
    "keywords": ["game", "play", "chinese", "kanji"],
    "char": "🀄",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "spades": {
    "keywords": ["poker", "cards", "suits", "magic"],
    "char": "♠️",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "clubs": {
    "keywords": ["poker", "cards", "magic", "suits"],
    "char": "♣️",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "hearts": {
    "keywords": ["poker", "cards", "magic", "suits"],
    "char": "♥️",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "diamonds": {
    "keywords": ["poker", "cards", "magic", "suits"],
    "char": "♦️",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "flower_playing_cards": {
    "keywords": ["game", "sunset", "red"],
    "char": "🎴",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "thought_balloon": {
    "keywords": ["bubble", "cloud", "speech", "thinking", "dream"],
    "char": "💭",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "right_anger_bubble": {
    "keywords": ["caption", "speech", "thinking", "mad"],
    "char": "🗯",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "speech_balloon": {
    "keywords": ["bubble", "words", "message", "talk", "chatting"],
    "char": "💬",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "left_speech_bubble": {
    "keywords": ["words", "message", "talk", "chatting"],
    "char": "🗨",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "clock1": {
    "keywords": ["time", "late", "early", "schedule"],
    "char": "🕐",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "clock2": {
    "keywords": ["time", "late", "early", "schedule"],
    "char": "🕑",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "clock3": {
    "keywords": ["time", "late", "early", "schedule"],
    "char": "🕒",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "clock4": {
    "keywords": ["time", "late", "early", "schedule"],
    "char": "🕓",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "clock5": {
    "keywords": ["time", "late", "early", "schedule"],
    "char": "🕔",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "clock6": {
    "keywords": ["time", "late", "early", "schedule", "dawn", "dusk"],
    "char": "🕕",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "clock7": {
    "keywords": ["time", "late", "early", "schedule"],
    "char": "🕖",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "clock8": {
    "keywords": ["time", "late", "early", "schedule"],
    "char": "🕗",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "clock9": {
    "keywords": ["time", "late", "early", "schedule"],
    "char": "🕘",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "clock10": {
    "keywords": ["time", "late", "early", "schedule"],
    "char": "🕙",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "clock11": {
    "keywords": ["time", "late", "early", "schedule"],
    "char": "🕚",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "clock12": {
    "keywords": ["time", "noon", "midnight", "midday", "late", "early", "schedule"],
    "char": "🕛",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "clock130": {
    "keywords": ["time", "late", "early", "schedule"],
    "char": "🕜",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "clock230": {
    "keywords": ["time", "late", "early", "schedule"],
    "char": "🕝",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "clock330": {
    "keywords": ["time", "late", "early", "schedule"],
    "char": "🕞",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "clock430": {
    "keywords": ["time", "late", "early", "schedule"],
    "char": "🕟",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "clock530": {
    "keywords": ["time", "late", "early", "schedule"],
    "char": "🕠",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "clock630": {
    "keywords": ["time", "late", "early", "schedule"],
    "char": "🕡",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "clock730": {
    "keywords": ["time", "late", "early", "schedule"],
    "char": "🕢",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "clock830": {
    "keywords": ["time", "late", "early", "schedule"],
    "char": "🕣",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "clock930": {
    "keywords": ["time", "late", "early", "schedule"],
    "char": "🕤",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "clock1030": {
    "keywords": ["time", "late", "early", "schedule"],
    "char": "🕥",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "clock1130": {
    "keywords": ["time", "late", "early", "schedule"],
    "char": "🕦",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "clock1230": {
    "keywords": ["time", "late", "early", "schedule"],
    "char": "🕧",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "afghanistan": {
    "keywords": ["af", "flag", "nation", "country", "banner"],
    "char": "🇦🇫",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "aland_islands": {
    "keywords": ["Åland", "islands", "flag", "nation", "country", "banner"],
    "char": "🇦🇽",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "albania": {
    "keywords": ["al", "flag", "nation", "country", "banner"],
    "char": "🇦🇱",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "algeria": {
    "keywords": ["dz", "flag", "nation", "country", "banner"],
    "char": "🇩🇿",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "american_samoa": {
    "keywords": ["american", "ws", "flag", "nation", "country", "banner"],
    "char": "🇦🇸",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "andorra": {
    "keywords": ["ad", "flag", "nation", "country", "banner"],
    "char": "🇦🇩",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "angola": {
    "keywords": ["ao", "flag", "nation", "country", "banner"],
    "char": "🇦🇴",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "anguilla": {
    "keywords": ["ai", "flag", "nation", "country", "banner"],
    "char": "🇦🇮",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "antarctica": {
    "keywords": ["aq", "flag", "nation", "country", "banner"],
    "char": "🇦🇶",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "antigua_barbuda": {
    "keywords": ["antigua", "barbuda", "flag", "nation", "country", "banner"],
    "char": "🇦🇬",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "argentina": {
    "keywords": ["ar", "flag", "nation", "country", "banner"],
    "char": "🇦🇷",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "armenia": {
    "keywords": ["am", "flag", "nation", "country", "banner"],
    "char": "🇦🇲",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "aruba": {
    "keywords": ["aw", "flag", "nation", "country", "banner"],
    "char": "🇦🇼",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "australia": {
    "keywords": ["au", "flag", "nation", "country", "banner"],
    "char": "🇦🇺",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "austria": {
    "keywords": ["at", "flag", "nation", "country", "banner"],
    "char": "🇦🇹",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "azerbaijan": {
    "keywords": ["az", "flag", "nation", "country", "banner"],
    "char": "🇦🇿",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "bahamas": {
    "keywords": ["bs", "flag", "nation", "country", "banner"],
    "char": "🇧🇸",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "bahrain": {
    "keywords": ["bh", "flag", "nation", "country", "banner"],
    "char": "🇧🇭",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "bangladesh": {
    "keywords": ["bd", "flag", "nation", "country", "banner"],
    "char": "🇧🇩",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "barbados": {
    "keywords": ["bb", "flag", "nation", "country", "banner"],
    "char": "🇧🇧",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "belarus": {
    "keywords": ["by", "flag", "nation", "country", "banner"],
    "char": "🇧🇾",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "belgium": {
    "keywords": ["be", "flag", "nation", "country", "banner"],
    "char": "🇧🇪",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "belize": {
    "keywords": ["bz", "flag", "nation", "country", "banner"],
    "char": "🇧🇿",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "benin": {
    "keywords": ["bj", "flag", "nation", "country", "banner"],
    "char": "🇧🇯",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "bermuda": {
    "keywords": ["bm", "flag", "nation", "country", "banner"],
    "char": "🇧🇲",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "bhutan": {
    "keywords": ["bt", "flag", "nation", "country", "banner"],
    "char": "🇧🇹",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "bolivia": {
    "keywords": ["bo", "flag", "nation", "country", "banner"],
    "char": "🇧🇴",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "caribbean_netherlands": {
    "keywords": ["bonaire", "flag", "nation", "country", "banner"],
    "char": "🇧🇶",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "bosnia_herzegovina": {
    "keywords": ["bosnia", "herzegovina", "flag", "nation", "country", "banner"],
    "char": "🇧🇦",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "botswana": {
    "keywords": ["bw", "flag", "nation", "country", "banner"],
    "char": "🇧🇼",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "brazil": {
    "keywords": ["br", "flag", "nation", "country", "banner"],
    "char": "🇧🇷",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "british_indian_ocean_territory": {
    "keywords": ["british", "indian", "ocean", "territory", "flag", "nation", "country", "banner"],
    "char": "🇮🇴",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "british_virgin_islands": {
    "keywords": ["british", "virgin", "islands", "bvi", "flag", "nation", "country", "banner"],
    "char": "🇻🇬",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "brunei": {
    "keywords": ["bn", "darussalam", "flag", "nation", "country", "banner"],
    "char": "🇧🇳",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "bulgaria": {
    "keywords": ["bg", "flag", "nation", "country", "banner"],
    "char": "🇧🇬",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "burkina_faso": {
    "keywords": ["burkina", "faso", "flag", "nation", "country", "banner"],
    "char": "🇧🇫",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "burundi": {
    "keywords": ["bi", "flag", "nation", "country", "banner"],
    "char": "🇧🇮",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "cape_verde": {
    "keywords": ["cabo", "verde", "flag", "nation", "country", "banner"],
    "char": "🇨🇻",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "cambodia": {
    "keywords": ["kh", "flag", "nation", "country", "banner"],
    "char": "🇰🇭",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "cameroon": {
    "keywords": ["cm", "flag", "nation", "country", "banner"],
    "char": "🇨🇲",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "canada": {
    "keywords": ["ca", "flag", "nation", "country", "banner"],
    "char": "🇨🇦",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "canary_islands": {
    "keywords": ["canary", "islands", "flag", "nation", "country", "banner"],
    "char": "🇮🇨",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "cayman_islands": {
    "keywords": ["cayman", "islands", "flag", "nation", "country", "banner"],
    "char": "🇰🇾",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "central_african_republic": {
    "keywords": ["central", "african", "republic", "flag", "nation", "country", "banner"],
    "char": "🇨🇫",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "chad": {
    "keywords": ["td", "flag", "nation", "country", "banner"],
    "char": "🇹🇩",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "chile": {
    "keywords": ["flag", "nation", "country", "banner"],
    "char": "🇨🇱",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "cn": {
    "keywords": ["china", "chinese", "prc", "flag", "country", "nation", "banner"],
    "char": "🇨🇳",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "christmas_island": {
    "keywords": ["christmas", "island", "flag", "nation", "country", "banner"],
    "char": "🇨🇽",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "cocos_islands": {
    "keywords": ["cocos", "keeling", "islands", "flag", "nation", "country", "banner"],
    "char": "🇨🇨",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "colombia": {
    "keywords": ["co", "flag", "nation", "country", "banner"],
    "char": "🇨🇴",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "comoros": {
    "keywords": ["km", "flag", "nation", "country", "banner"],
    "char": "🇰🇲",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "congo_brazzaville": {
    "keywords": ["congo", "flag", "nation", "country", "banner"],
    "char": "🇨🇬",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "congo_kinshasa": {
    "keywords": ["congo", "democratic", "republic", "flag", "nation", "country", "banner"],
    "char": "🇨🇩",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "cook_islands": {
    "keywords": ["cook", "islands", "flag", "nation", "country", "banner"],
    "char": "🇨🇰",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "costa_rica": {
    "keywords": ["costa", "rica", "flag", "nation", "country", "banner"],
    "char": "🇨🇷",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "croatia": {
    "keywords": ["hr", "flag", "nation", "country", "banner"],
    "char": "🇭🇷",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "cuba": {
    "keywords": ["cu", "flag", "nation", "country", "banner"],
    "char": "🇨🇺",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "curacao": {
    "keywords": ["curaçao", "flag", "nation", "country", "banner"],
    "char": "🇨🇼",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "cyprus": {
    "keywords": ["cy", "flag", "nation", "country", "banner"],
    "char": "🇨🇾",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "czech_republic": {
    "keywords": ["cz", "flag", "nation", "country", "banner"],
    "char": "🇨🇿",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "denmark": {
    "keywords": ["dk", "flag", "nation", "country", "banner"],
    "char": "🇩🇰",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "djibouti": {
    "keywords": ["dj", "flag", "nation", "country", "banner"],
    "char": "🇩🇯",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "dominica": {
    "keywords": ["dm", "flag", "nation", "country", "banner"],
    "char": "🇩🇲",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "dominican_republic": {
    "keywords": ["dominican", "republic", "flag", "nation", "country", "banner"],
    "char": "🇩🇴",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "ecuador": {
    "keywords": ["ec", "flag", "nation", "country", "banner"],
    "char": "🇪🇨",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "egypt": {
    "keywords": ["eg", "flag", "nation", "country", "banner"],
    "char": "🇪🇬",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "el_salvador": {
    "keywords": ["el", "salvador", "flag", "nation", "country", "banner"],
    "char": "🇸🇻",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "equatorial_guinea": {
    "keywords": ["equatorial", "gn", "flag", "nation", "country", "banner"],
    "char": "🇬🇶",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "eritrea": {
    "keywords": ["er", "flag", "nation", "country", "banner"],
    "char": "🇪🇷",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "estonia": {
    "keywords": ["ee", "flag", "nation", "country", "banner"],
    "char": "🇪🇪",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "ethiopia": {
    "keywords": ["et", "flag", "nation", "country", "banner"],
    "char": "🇪🇹",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "eu": {
    "keywords": ["european", "union", "flag", "banner"],
    "char": "🇪🇺",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "falkland_islands": {
    "keywords": ["falkland", "islands", "malvinas", "flag", "nation", "country", "banner"],
    "char": "🇫🇰",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "faroe_islands": {
    "keywords": ["faroe", "islands", "flag", "nation", "country", "banner"],
    "char": "🇫🇴",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "fiji": {
    "keywords": ["fj", "flag", "nation", "country", "banner"],
    "char": "🇫🇯",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "finland": {
    "keywords": ["fi", "flag", "nation", "country", "banner"],
    "char": "🇫🇮",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "fr": {
    "keywords": ["banner", "flag", "nation", "france", "french", "country"],
    "char": "🇫🇷",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "french_guiana": {
    "keywords": ["french", "guiana", "flag", "nation", "country", "banner"],
    "char": "🇬🇫",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "french_polynesia": {
    "keywords": ["french", "polynesia", "flag", "nation", "country", "banner"],
    "char": "🇵🇫",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "french_southern_territories": {
    "keywords": ["french", "southern", "territories", "flag", "nation", "country", "banner"],
    "char": "🇹🇫",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "gabon": {
    "keywords": ["ga", "flag", "nation", "country", "banner"],
    "char": "🇬🇦",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "gambia": {
    "keywords": ["gm", "flag", "nation", "country", "banner"],
    "char": "🇬🇲",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "georgia": {
    "keywords": ["ge", "flag", "nation", "country", "banner"],
    "char": "🇬🇪",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "de": {
    "keywords": ["german", "nation", "flag", "country", "banner"],
    "char": "🇩🇪",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "ghana": {
    "keywords": ["gh", "flag", "nation", "country", "banner"],
    "char": "🇬🇭",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "gibraltar": {
    "keywords": ["gi", "flag", "nation", "country", "banner"],
    "char": "🇬🇮",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "greece": {
    "keywords": ["gr", "flag", "nation", "country", "banner"],
    "char": "🇬🇷",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "greenland": {
    "keywords": ["gl", "flag", "nation", "country", "banner"],
    "char": "🇬🇱",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "grenada": {
    "keywords": ["gd", "flag", "nation", "country", "banner"],
    "char": "🇬🇩",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "guadeloupe": {
    "keywords": ["gp", "flag", "nation", "country", "banner"],
    "char": "🇬🇵",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "guam": {
    "keywords": ["gu", "flag", "nation", "country", "banner"],
    "char": "🇬🇺",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "guatemala": {
    "keywords": ["gt", "flag", "nation", "country", "banner"],
    "char": "🇬🇹",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "guernsey": {
    "keywords": ["gg", "flag", "nation", "country", "banner"],
    "char": "🇬🇬",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "guinea": {
    "keywords": ["gn", "flag", "nation", "country", "banner"],
    "char": "🇬🇳",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "guinea_bissau": {
    "keywords": ["gw", "bissau", "flag", "nation", "country", "banner"],
    "char": "🇬🇼",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "guyana": {
    "keywords": ["gy", "flag", "nation", "country", "banner"],
    "char": "🇬🇾",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "haiti": {
    "keywords": ["ht", "flag", "nation", "country", "banner"],
    "char": "🇭🇹",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "honduras": {
    "keywords": ["hn", "flag", "nation", "country", "banner"],
    "char": "🇭🇳",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "hong_kong": {
    "keywords": ["hong", "kong", "flag", "nation", "country", "banner"],
    "char": "🇭🇰",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "hungary": {
    "keywords": ["hu", "flag", "nation", "country", "banner"],
    "char": "🇭🇺",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "iceland": {
    "keywords": ["is", "flag", "nation", "country", "banner"],
    "char": "🇮🇸",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "india": {
    "keywords": ["in", "flag", "nation", "country", "banner"],
    "char": "🇮🇳",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "indonesia": {
    "keywords": ["flag", "nation", "country", "banner"],
    "char": "🇮🇩",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "iran": {
    "keywords": ["iran,", "islamic", "republic", "flag", "nation", "country", "banner"],
    "char": "🇮🇷",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "iraq": {
    "keywords": ["iq", "flag", "nation", "country", "banner"],
    "char": "🇮🇶",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "ireland": {
    "keywords": ["ie", "flag", "nation", "country", "banner"],
    "char": "🇮🇪",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "isle_of_man": {
    "keywords": ["isle", "man", "flag", "nation", "country", "banner"],
    "char": "🇮🇲",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "israel": {
    "keywords": ["il", "flag", "nation", "country", "banner"],
    "char": "🇮🇱",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "it": {
    "keywords": ["italy", "flag", "nation", "country", "banner"],
    "char": "🇮🇹",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "cote_divoire": {
    "keywords": ["ivory", "coast", "flag", "nation", "country", "banner"],
    "char": "🇨🇮",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "jamaica": {
    "keywords": ["jm", "flag", "nation", "country", "banner"],
    "char": "🇯🇲",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "jp": {
    "keywords": ["japanese", "nation", "flag", "country", "banner"],
    "char": "🇯🇵",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "jersey": {
    "keywords": ["je", "flag", "nation", "country", "banner"],
    "char": "🇯🇪",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "jordan": {
    "keywords": ["jo", "flag", "nation", "country", "banner"],
    "char": "🇯🇴",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "kazakhstan": {
    "keywords": ["kz", "flag", "nation", "country", "banner"],
    "char": "🇰🇿",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "kenya": {
    "keywords": ["ke", "flag", "nation", "country", "banner"],
    "char": "🇰🇪",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "kiribati": {
    "keywords": ["ki", "flag", "nation", "country", "banner"],
    "char": "🇰🇮",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "kosovo": {
    "keywords": ["xk", "flag", "nation", "country", "banner"],
    "char": "🇽🇰",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "kuwait": {
    "keywords": ["kw", "flag", "nation", "country", "banner"],
    "char": "🇰🇼",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "kyrgyzstan": {
    "keywords": ["kg", "flag", "nation", "country", "banner"],
    "char": "🇰🇬",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "laos": {
    "keywords": ["lao", "democratic", "republic", "flag", "nation", "country", "banner"],
    "char": "🇱🇦",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "latvia": {
    "keywords": ["lv", "flag", "nation", "country", "banner"],
    "char": "🇱🇻",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "lebanon": {
    "keywords": ["lb", "flag", "nation", "country", "banner"],
    "char": "🇱🇧",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "lesotho": {
    "keywords": ["ls", "flag", "nation", "country", "banner"],
    "char": "🇱🇸",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "liberia": {
    "keywords": ["lr", "flag", "nation", "country", "banner"],
    "char": "🇱🇷",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "libya": {
    "keywords": ["ly", "flag", "nation", "country", "banner"],
    "char": "🇱🇾",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "liechtenstein": {
    "keywords": ["li", "flag", "nation", "country", "banner"],
    "char": "🇱🇮",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "lithuania": {
    "keywords": ["lt", "flag", "nation", "country", "banner"],
    "char": "🇱🇹",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "luxembourg": {
    "keywords": ["lu", "flag", "nation", "country", "banner"],
    "char": "🇱🇺",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "macau": {
    "keywords": ["macao", "flag", "nation", "country", "banner"],
    "char": "🇲🇴",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "macedonia": {
    "keywords": ["macedonia,", "flag", "nation", "country", "banner"],
    "char": "🇲🇰",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "madagascar": {
    "keywords": ["mg", "flag", "nation", "country", "banner"],
    "char": "🇲🇬",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "malawi": {
    "keywords": ["mw", "flag", "nation", "country", "banner"],
    "char": "🇲🇼",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "malaysia": {
    "keywords": ["my", "flag", "nation", "country", "banner"],
    "char": "🇲🇾",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "maldives": {
    "keywords": ["mv", "flag", "nation", "country", "banner"],
    "char": "🇲🇻",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "mali": {
    "keywords": ["ml", "flag", "nation", "country", "banner"],
    "char": "🇲🇱",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "malta": {
    "keywords": ["mt", "flag", "nation", "country", "banner"],
    "char": "🇲🇹",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "marshall_islands": {
    "keywords": ["marshall", "islands", "flag", "nation", "country", "banner"],
    "char": "🇲🇭",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "martinique": {
    "keywords": ["mq", "flag", "nation", "country", "banner"],
    "char": "🇲🇶",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "mauritania": {
    "keywords": ["mr", "flag", "nation", "country", "banner"],
    "char": "🇲🇷",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "mauritius": {
    "keywords": ["mu", "flag", "nation", "country", "banner"],
    "char": "🇲🇺",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "mayotte": {
    "keywords": ["yt", "flag", "nation", "country", "banner"],
    "char": "🇾🇹",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "mexico": {
    "keywords": ["mx", "flag", "nation", "country", "banner"],
    "char": "🇲🇽",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "micronesia": {
    "keywords": ["micronesia,", "federated", "states", "flag", "nation", "country", "banner"],
    "char": "🇫🇲",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "moldova": {
    "keywords": ["moldova,", "republic", "flag", "nation", "country", "banner"],
    "char": "🇲🇩",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "monaco": {
    "keywords": ["mc", "flag", "nation", "country", "banner"],
    "char": "🇲🇨",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "mongolia": {
    "keywords": ["mn", "flag", "nation", "country", "banner"],
    "char": "🇲🇳",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "montenegro": {
    "keywords": ["me", "flag", "nation", "country", "banner"],
    "char": "🇲🇪",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "montserrat": {
    "keywords": ["ms", "flag", "nation", "country", "banner"],
    "char": "🇲🇸",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "morocco": {
    "keywords": ["ma", "flag", "nation", "country", "banner"],
    "char": "🇲🇦",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "mozambique": {
    "keywords": ["mz", "flag", "nation", "country", "banner"],
    "char": "🇲🇿",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "myanmar": {
    "keywords": ["mm", "flag", "nation", "country", "banner"],
    "char": "🇲🇲",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "namibia": {
    "keywords": ["na", "flag", "nation", "country", "banner"],
    "char": "🇳🇦",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "nauru": {
    "keywords": ["nr", "flag", "nation", "country", "banner"],
    "char": "🇳🇷",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "nepal": {
    "keywords": ["np", "flag", "nation", "country", "banner"],
    "char": "🇳🇵",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "netherlands": {
    "keywords": ["nl", "flag", "nation", "country", "banner"],
    "char": "🇳🇱",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "new_caledonia": {
    "keywords": ["new", "caledonia", "flag", "nation", "country", "banner"],
    "char": "🇳🇨",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "new_zealand": {
    "keywords": ["new", "zealand", "flag", "nation", "country", "banner"],
    "char": "🇳🇿",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "nicaragua": {
    "keywords": ["ni", "flag", "nation", "country", "banner"],
    "char": "🇳🇮",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "niger": {
    "keywords": ["ne", "flag", "nation", "country", "banner"],
    "char": "🇳🇪",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "nigeria": {
    "keywords": ["flag", "nation", "country", "banner"],
    "char": "🇳🇬",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "niue": {
    "keywords": ["nu", "flag", "nation", "country", "banner"],
    "char": "🇳🇺",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "norfolk_island": {
    "keywords": ["norfolk", "island", "flag", "nation", "country", "banner"],
    "char": "🇳🇫",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "northern_mariana_islands": {
    "keywords": ["northern", "mariana", "islands", "flag", "nation", "country", "banner"],
    "char": "🇲🇵",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "north_korea": {
    "keywords": ["north", "korea", "nation", "flag", "country", "banner"],
    "char": "🇰🇵",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "norway": {
    "keywords": ["no", "flag", "nation", "country", "banner"],
    "char": "🇳🇴",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "oman": {
    "keywords": ["om_symbol", "flag", "nation", "country", "banner"],
    "char": "🇴🇲",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "pakistan": {
    "keywords": ["pk", "flag", "nation", "country", "banner"],
    "char": "🇵🇰",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "palau": {
    "keywords": ["pw", "flag", "nation", "country", "banner"],
    "char": "🇵🇼",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "palestinian_territories": {
    "keywords": ["palestine", "palestinian", "territories", "flag", "nation", "country", "banner"],
    "char": "🇵🇸",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "panama": {
    "keywords": ["pa", "flag", "nation", "country", "banner"],
    "char": "🇵🇦",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "papua_new_guinea": {
    "keywords": ["papua", "new", "guinea", "flag", "nation", "country", "banner"],
    "char": "🇵🇬",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "paraguay": {
    "keywords": ["py", "flag", "nation", "country", "banner"],
    "char": "🇵🇾",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "peru": {
    "keywords": ["pe", "flag", "nation", "country", "banner"],
    "char": "🇵🇪",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "philippines": {
    "keywords": ["ph", "flag", "nation", "country", "banner"],
    "char": "🇵🇭",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "pitcairn_islands": {
    "keywords": ["pitcairn", "flag", "nation", "country", "banner"],
    "char": "🇵🇳",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "poland": {
    "keywords": ["pl", "flag", "nation", "country", "banner"],
    "char": "🇵🇱",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "portugal": {
    "keywords": ["pt", "flag", "nation", "country", "banner"],
    "char": "🇵🇹",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "puerto_rico": {
    "keywords": ["puerto", "rico", "flag", "nation", "country", "banner"],
    "char": "🇵🇷",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "qatar": {
    "keywords": ["qa", "flag", "nation", "country", "banner"],
    "char": "🇶🇦",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "reunion": {
    "keywords": ["réunion", "flag", "nation", "country", "banner"],
    "char": "🇷🇪",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "romania": {
    "keywords": ["ro", "flag", "nation", "country", "banner"],
    "char": "🇷🇴",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "ru": {
    "keywords": ["russian", "federation", "flag", "nation", "country", "banner"],
    "char": "🇷🇺",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "rwanda": {
    "keywords": ["rw", "flag", "nation", "country", "banner"],
    "char": "🇷🇼",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "st_barthelemy": {
    "keywords": ["saint", "barthélemy", "flag", "nation", "country", "banner"],
    "char": "🇧🇱",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "st_helena": {
    "keywords": ["saint", "helena", "ascension", "tristan", "cunha", "flag", "nation", "country", "banner"],
    "char": "🇸🇭",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "st_kitts_nevis": {
    "keywords": ["saint", "kitts", "nevis", "flag", "nation", "country", "banner"],
    "char": "🇰🇳",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "st_lucia": {
    "keywords": ["saint", "lucia", "flag", "nation", "country", "banner"],
    "char": "🇱🇨",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "st_pierre_miquelon": {
    "keywords": ["saint", "pierre", "miquelon", "flag", "nation", "country", "banner"],
    "char": "🇵🇲",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "st_vincent_grenadines": {
    "keywords": ["saint", "vincent", "grenadines", "flag", "nation", "country", "banner"],
    "char": "🇻🇨",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "samoa": {
    "keywords": ["ws", "flag", "nation", "country", "banner"],
    "char": "🇼🇸",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "san_marino": {
    "keywords": ["san", "marino", "flag", "nation", "country", "banner"],
    "char": "🇸🇲",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "sao_tome_principe": {
    "keywords": ["sao", "tome", "principe", "flag", "nation", "country", "banner"],
    "char": "🇸🇹",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "saudi_arabia": {
    "keywords": ["flag", "nation", "country", "banner"],
    "char": "🇸🇦",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "senegal": {
    "keywords": ["sn", "flag", "nation", "country", "banner"],
    "char": "🇸🇳",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "serbia": {
    "keywords": ["rs", "flag", "nation", "country", "banner"],
    "char": "🇷🇸",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "seychelles": {
    "keywords": ["sc", "flag", "nation", "country", "banner"],
    "char": "🇸🇨",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "sierra_leone": {
    "keywords": ["sierra", "leone", "flag", "nation", "country", "banner"],
    "char": "🇸🇱",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "singapore": {
    "keywords": ["sg", "flag", "nation", "country", "banner"],
    "char": "🇸🇬",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "sint_maarten": {
    "keywords": ["sint", "maarten", "dutch", "flag", "nation", "country", "banner"],
    "char": "🇸🇽",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "slovakia": {
    "keywords": ["sk", "flag", "nation", "country", "banner"],
    "char": "🇸🇰",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "slovenia": {
    "keywords": ["si", "flag", "nation", "country", "banner"],
    "char": "🇸🇮",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "solomon_islands": {
    "keywords": ["solomon", "islands", "flag", "nation", "country", "banner"],
    "char": "🇸🇧",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "somalia": {
    "keywords": ["so", "flag", "nation", "country", "banner"],
    "char": "🇸🇴",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "south_africa": {
    "keywords": ["south", "africa", "flag", "nation", "country", "banner"],
    "char": "🇿🇦",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "south_georgia_south_sandwich_islands": {
    "keywords": ["south", "georgia", "sandwich", "islands", "flag", "nation", "country", "banner"],
    "char": "🇬🇸",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "kr": {
    "keywords": ["south", "korea", "nation", "flag", "country", "banner"],
    "char": "🇰🇷",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "south_sudan": {
    "keywords": ["south", "sd", "flag", "nation", "country", "banner"],
    "char": "🇸🇸",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "es": {
    "keywords": ["spain", "flag", "nation", "country", "banner"],
    "char": "🇪🇸",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "sri_lanka": {
    "keywords": ["sri", "lanka", "flag", "nation", "country", "banner"],
    "char": "🇱🇰",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "sudan": {
    "keywords": ["sd", "flag", "nation", "country", "banner"],
    "char": "🇸🇩",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "suriname": {
    "keywords": ["sr", "flag", "nation", "country", "banner"],
    "char": "🇸🇷",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "swaziland": {
    "keywords": ["sz", "flag", "nation", "country", "banner"],
    "char": "🇸🇿",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "sweden": {
    "keywords": ["se", "flag", "nation", "country", "banner"],
    "char": "🇸🇪",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "switzerland": {
    "keywords": ["ch", "flag", "nation", "country", "banner"],
    "char": "🇨🇭",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "syria": {
    "keywords": ["syrian", "arab", "republic", "flag", "nation", "country", "banner"],
    "char": "🇸🇾",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "taiwan": {
    "keywords": ["tw", "flag", "nation", "country", "banner"],
    "char": "🇹🇼",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "tajikistan": {
    "keywords": ["tj", "flag", "nation", "country", "banner"],
    "char": "🇹🇯",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "tanzania": {
    "keywords": ["tanzania,", "united", "republic", "flag", "nation", "country", "banner"],
    "char": "🇹🇿",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "thailand": {
    "keywords": ["th", "flag", "nation", "country", "banner"],
    "char": "🇹🇭",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "timor_leste": {
    "keywords": ["timor", "leste", "flag", "nation", "country", "banner"],
    "char": "🇹🇱",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "togo": {
    "keywords": ["tg", "flag", "nation", "country", "banner"],
    "char": "🇹🇬",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "tokelau": {
    "keywords": ["tk", "flag", "nation", "country", "banner"],
    "char": "🇹🇰",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "tonga": {
    "keywords": ["to", "flag", "nation", "country", "banner"],
    "char": "🇹🇴",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "trinidad_tobago": {
    "keywords": ["trinidad", "tobago", "flag", "nation", "country", "banner"],
    "char": "🇹🇹",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "tunisia": {
    "keywords": ["tn", "flag", "nation", "country", "banner"],
    "char": "🇹🇳",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "tr": {
    "keywords": ["turkey", "flag", "nation", "country", "banner"],
    "char": "🇹🇷",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "turkmenistan": {
    "keywords": ["flag", "nation", "country", "banner"],
    "char": "🇹🇲",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "turks_caicos_islands": {
    "keywords": ["turks", "caicos", "islands", "flag", "nation", "country", "banner"],
    "char": "🇹🇨",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "tuvalu": {
    "keywords": ["flag", "nation", "country", "banner"],
    "char": "🇹🇻",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "uganda": {
    "keywords": ["ug", "flag", "nation", "country", "banner"],
    "char": "🇺🇬",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "ukraine": {
    "keywords": ["ua", "flag", "nation", "country", "banner"],
    "char": "🇺🇦",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "united_arab_emirates": {
    "keywords": ["united", "arab", "emirates", "flag", "nation", "country", "banner"],
    "char": "🇦🇪",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "uk": {
    "keywords": ["united", "kingdom", "great", "britain", "northern", "ireland", "flag", "nation", "country", "banner", "british", "UK", "english", "england", "union jack"],
    "char": "🇬🇧",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "england": {
    "keywords": ["flag", "english"],
    "char": "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "scotland": {
    "keywords": ["flag", "scottish"],
    "char": "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "wales": {
    "keywords": ["flag", "welsh"],
    "char": "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "us": {
    "keywords": ["united", "states", "america", "flag", "nation", "country", "banner"],
    "char": "🇺🇸",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "us_virgin_islands": {
    "keywords": ["virgin", "islands", "us", "flag", "nation", "country", "banner"],
    "char": "🇻🇮",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "uruguay": {
    "keywords": ["uy", "flag", "nation", "country", "banner"],
    "char": "🇺🇾",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "uzbekistan": {
    "keywords": ["uz", "flag", "nation", "country", "banner"],
    "char": "🇺🇿",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "vanuatu": {
    "keywords": ["vu", "flag", "nation", "country", "banner"],
    "char": "🇻🇺",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "vatican_city": {
    "keywords": ["vatican", "city", "flag", "nation", "country", "banner"],
    "char": "🇻🇦",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "venezuela": {
    "keywords": ["ve", "bolivarian", "republic", "flag", "nation", "country", "banner"],
    "char": "🇻🇪",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "vietnam": {
    "keywords": ["viet", "nam", "flag", "nation", "country", "banner"],
    "char": "🇻🇳",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "wallis_futuna": {
    "keywords": ["wallis", "futuna", "flag", "nation", "country", "banner"],
    "char": "🇼🇫",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "western_sahara": {
    "keywords": ["western", "sahara", "flag", "nation", "country", "banner"],
    "char": "🇪🇭",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "yemen": {
    "keywords": ["ye", "flag", "nation", "country", "banner"],
    "char": "🇾🇪",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "zambia": {
    "keywords": ["zm", "flag", "nation", "country", "banner"],
    "char": "🇿🇲",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "zimbabwe": {
    "keywords": ["zw", "flag", "nation", "country", "banner"],
    "char": "🇿🇼",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "united_nations": {
    "keywords": ["un", "flag", "banner"],
    "char": "🇺🇳",
    "fitzpatrick_scale": false,
    "category": "flags"
  },
  "pirate_flag": {
    "keywords": ["skull", "crossbones", "flag", "banner"],
    "char": "🏴‍☠️",
    "fitzpatrick_scale": false,
    "category": "flags"
  }
}
;
},{}],"node_modules/emojilib/ordered.json":[function(require,module,exports) {
module.exports = [
  "grinning",
  "smiley",
  "smile",
  "grin",
  "laughing",
  "sweat_smile",
  "joy",
  "rofl",
  "relaxed",
  "blush",
  "innocent",
  "slightly_smiling_face",
  "upside_down_face",
  "wink",
  "relieved",
  "heart_eyes",
  "smiling_face_with_three_hearts",
  "kissing_heart",
  "kissing",
  "kissing_smiling_eyes",
  "kissing_closed_eyes",
  "yum",
  "stuck_out_tongue",
  "stuck_out_tongue_closed_eyes",
  "stuck_out_tongue_winking_eye",
  "zany",
  "raised_eyebrow",
  "monocle",
  "nerd_face",
  "sunglasses",
  "star_struck",
  "partying",
  "smirk",
  "unamused",
  "disappointed",
  "pensive",
  "worried",
  "confused",
  "slightly_frowning_face",
  "frowning_face",
  "persevere",
  "confounded",
  "tired_face",
  "weary",
  "pleading",
  "cry",
  "sob",
  "triumph",
  "angry",
  "rage",
  "symbols_over_mouth",
  "exploding_head",
  "flushed",
  "hot",
  "cold",
  "scream",
  "fearful",
  "cold_sweat",
  "disappointed_relieved",
  "sweat",
  "hugs",
  "thinking",
  "hand_over_mouth",
  "shushing",
  "lying_face",
  "no_mouth",
  "neutral_face",
  "expressionless",
  "grimacing",
  "roll_eyes",
  "hushed",
  "frowning",
  "anguished",
  "open_mouth",
  "astonished",
  "sleeping",
  "drooling_face",
  "sleepy",
  "dizzy_face",
  "zipper_mouth_face",
  "woozy",
  "nauseated_face",
  "vomiting",
  "sneezing_face",
  "mask",
  "face_with_thermometer",
  "face_with_head_bandage",
  "money_mouth_face",
  "cowboy_hat_face",
  "smiling_imp",
  "imp",
  "japanese_ogre",
  "japanese_goblin",
  "clown_face",
  "poop",
  "ghost",
  "skull",
  "skull_and_crossbones",
  "alien",
  "space_invader",
  "robot",
  "jack_o_lantern",
  "smiley_cat",
  "smile_cat",
  "joy_cat",
  "heart_eyes_cat",
  "smirk_cat",
  "kissing_cat",
  "scream_cat",
  "crying_cat_face",
  "pouting_cat",
  "palms_up",
  "open_hands",
  "raised_hands",
  "clap",
  "handshake",
  "+1",
  "-1",
  "facepunch",
  "fist",
  "fist_left",
  "fist_right",
  "crossed_fingers",
  "v",
  "love_you",
  "metal",
  "ok_hand",
  "point_left",
  "point_right",
  "point_up",
  "point_down",
  "point_up_2",
  "raised_hand",
  "raised_back_of_hand",
  "raised_hand_with_fingers_splayed",
  "vulcan_salute",
  "wave",
  "call_me_hand",
  "muscle",
  "fu",
  "writing_hand",
  "pray",
  "foot",
  "leg",
  "ring",
  "lipstick",
  "kiss",
  "lips",
  "tooth",
  "tongue",
  "ear",
  "nose",
  "footprints",
  "eye",
  "eyes",
  "brain",
  "speaking_head",
  "bust_in_silhouette",
  "busts_in_silhouette",
  "baby",
  "girl",
  "child",
  "boy",
  "woman",
  "adult",
  "man",
  "blonde_woman",
  "blonde_man",
  "bearded_person",
  "older_woman",
  "older_adult",
  "older_man",
  "man_with_gua_pi_mao",
  "woman_with_headscarf",
  "woman_with_turban",
  "man_with_turban",
  "policewoman",
  "policeman",
  "construction_worker_woman",
  "construction_worker_man",
  "guardswoman",
  "guardsman",
  "female_detective",
  "male_detective",
  "woman_health_worker",
  "man_health_worker",
  "woman_farmer",
  "man_farmer",
  "woman_cook",
  "man_cook",
  "woman_student",
  "man_student",
  "woman_singer",
  "man_singer",
  "woman_teacher",
  "man_teacher",
  "woman_factory_worker",
  "man_factory_worker",
  "woman_technologist",
  "man_technologist",
  "woman_office_worker",
  "man_office_worker",
  "woman_mechanic",
  "man_mechanic",
  "woman_scientist",
  "man_scientist",
  "woman_artist",
  "man_artist",
  "woman_firefighter",
  "man_firefighter",
  "woman_pilot",
  "man_pilot",
  "woman_astronaut",
  "man_astronaut",
  "woman_judge",
  "man_judge",
  "bride_with_veil",
  "man_in_tuxedo",
  "princess",
  "prince",
  "woman_superhero",
  "man_superhero",
  "woman_supervillain",
  "man_supervillain",
  "mrs_claus",
  "santa",
  "sorceress",
  "wizard",
  "woman_elf",
  "man_elf",
  "woman_vampire",
  "man_vampire",
  "woman_zombie",
  "man_zombie",
  "woman_genie",
  "man_genie",
  "mermaid",
  "merman",
  "woman_fairy",
  "man_fairy",
  "angel",
  "pregnant_woman",
  "breastfeeding",
  "bowing_woman",
  "bowing_man",
  "tipping_hand_woman",
  "tipping_hand_man",
  "no_good_woman",
  "no_good_man",
  "ok_woman",
  "ok_man",
  "raising_hand_woman",
  "raising_hand_man",
  "woman_facepalming",
  "man_facepalming",
  "woman_shrugging",
  "man_shrugging",
  "pouting_woman",
  "pouting_man",
  "frowning_woman",
  "frowning_man",
  "haircut_woman",
  "haircut_man",
  "massage_woman",
  "massage_man",
  "woman_in_steamy_room",
  "man_in_steamy_room",
  "nail_care",
  "selfie",
  "dancer",
  "man_dancing",
  "dancing_women",
  "dancing_men",
  "business_suit_levitating",
  "walking_woman",
  "walking_man",
  "running_woman",
  "running_man",
  "couple",
  "two_women_holding_hands",
  "two_men_holding_hands",
  "couple_with_heart_woman_man",
  "couple_with_heart_woman_woman",
  "couple_with_heart_man_man",
  "couplekiss_man_woman",
  "couplekiss_woman_woman",
  "couplekiss_man_man",
  "family_man_woman_boy",
  "family_man_woman_girl",
  "family_man_woman_girl_boy",
  "family_man_woman_boy_boy",
  "family_man_woman_girl_girl",
  "family_woman_woman_boy",
  "family_woman_woman_girl",
  "family_woman_woman_girl_boy",
  "family_woman_woman_boy_boy",
  "family_woman_woman_girl_girl",
  "family_man_man_boy",
  "family_man_man_girl",
  "family_man_man_girl_boy",
  "family_man_man_boy_boy",
  "family_man_man_girl_girl",
  "family_woman_boy",
  "family_woman_girl",
  "family_woman_girl_boy",
  "family_woman_boy_boy",
  "family_woman_girl_girl",
  "family_man_boy",
  "family_man_girl",
  "family_man_girl_boy",
  "family_man_boy_boy",
  "family_man_girl_girl",
  "yarn",
  "thread",
  "coat",
  "labcoat",
  "womans_clothes",
  "tshirt",
  "jeans",
  "necktie",
  "dress",
  "bikini",
  "kimono",
  "flat_shoe",
  "high_heel",
  "sandal",
  "boot",
  "mans_shoe",
  "athletic_shoe",
  "hiking_boot",
  "socks",
  "gloves",
  "scarf",
  "tophat",
  "billed_hat",
  "womans_hat",
  "mortar_board",
  "rescue_worker_helmet",
  "crown",
  "pouch",
  "purse",
  "handbag",
  "briefcase",
  "school_satchel",
  "luggage",
  "eyeglasses",
  "dark_sunglasses",
  "goggles",
  "closed_umbrella",
  "dog",
  "cat",
  "mouse",
  "hamster",
  "rabbit",
  "fox_face",
  "bear",
  "panda_face",
  "koala",
  "tiger",
  "lion",
  "cow",
  "pig",
  "pig_nose",
  "frog",
  "monkey_face",
  "see_no_evil",
  "hear_no_evil",
  "speak_no_evil",
  "monkey",
  "chicken",
  "penguin",
  "bird",
  "baby_chick",
  "hatching_chick",
  "hatched_chick",
  "duck",
  "eagle",
  "owl",
  "bat",
  "wolf",
  "boar",
  "horse",
  "unicorn",
  "honeybee",
  "bug",
  "butterfly",
  "snail",
  "shell",
  "beetle",
  "ant",
  "mosquito",
  "grasshopper",
  "spider",
  "spider_web",
  "scorpion",
  "turtle",
  "snake",
  "lizard",
  "t-rex",
  "sauropod",
  "octopus",
  "squid",
  "shrimp",
  "lobster",
  "crab",
  "blowfish",
  "tropical_fish",
  "fish",
  "dolphin",
  "whale",
  "whale2",
  "shark",
  "crocodile",
  "tiger2",
  "leopard",
  "zebra",
  "gorilla",
  "elephant",
  "hippopotamus",
  "rhinoceros",
  "dromedary_camel",
  "giraffe",
  "kangaroo",
  "camel",
  "water_buffalo",
  "ox",
  "cow2",
  "racehorse",
  "pig2",
  "ram",
  "sheep",
  "llama",
  "goat",
  "deer",
  "dog2",
  "poodle",
  "cat2",
  "rooster",
  "turkey",
  "peacock",
  "parrot",
  "swan",
  "dove",
  "rabbit2",
  "raccoon",
  "badger",
  "rat",
  "mouse2",
  "chipmunk",
  "hedgehog",
  "paw_prints",
  "dragon",
  "dragon_face",
  "cactus",
  "christmas_tree",
  "evergreen_tree",
  "deciduous_tree",
  "palm_tree",
  "seedling",
  "herb",
  "shamrock",
  "four_leaf_clover",
  "bamboo",
  "tanabata_tree",
  "leaves",
  "fallen_leaf",
  "maple_leaf",
  "ear_of_rice",
  "hibiscus",
  "sunflower",
  "rose",
  "wilted_flower",
  "tulip",
  "blossom",
  "cherry_blossom",
  "bouquet",
  "mushroom",
  "earth_americas",
  "earth_africa",
  "earth_asia",
  "full_moon",
  "waning_gibbous_moon",
  "last_quarter_moon",
  "waning_crescent_moon",
  "new_moon",
  "waxing_crescent_moon",
  "first_quarter_moon",
  "waxing_gibbous_moon",
  "new_moon_with_face",
  "full_moon_with_face",
  "first_quarter_moon_with_face",
  "last_quarter_moon_with_face",
  "sun_with_face",
  "crescent_moon",
  "star",
  "star2",
  "dizzy",
  "sparkles",
  "comet",
  "sunny",
  "sun_behind_small_cloud",
  "partly_sunny",
  "sun_behind_large_cloud",
  "sun_behind_rain_cloud",
  "cloud",
  "cloud_with_rain",
  "cloud_with_lightning_and_rain",
  "cloud_with_lightning",
  "zap",
  "fire",
  "boom",
  "snowflake",
  "cloud_with_snow",
  "snowman",
  "snowman_with_snow",
  "wind_face",
  "dash",
  "tornado",
  "fog",
  "open_umbrella",
  "umbrella",
  "droplet",
  "sweat_drops",
  "ocean",
  "green_apple",
  "apple",
  "pear",
  "tangerine",
  "lemon",
  "banana",
  "watermelon",
  "grapes",
  "strawberry",
  "melon",
  "cherries",
  "peach",
  "mango",
  "pineapple",
  "coconut",
  "kiwi_fruit",
  "tomato",
  "eggplant",
  "avocado",
  "broccoli",
  "leafy_greens",
  "cucumber",
  "hot_pepper",
  "corn",
  "carrot",
  "potato",
  "sweet_potato",
  "croissant",
  "bagel",
  "bread",
  "baguette_bread",
  "pretzel",
  "cheese",
  "egg",
  "fried_egg",
  "pancakes",
  "bacon",
  "steak",
  "poultry_leg",
  "meat_on_bone",
  "bone",
  "hotdog",
  "hamburger",
  "fries",
  "pizza",
  "sandwich",
  "stuffed_flatbread",
  "taco",
  "burrito",
  "green_salad",
  "shallow_pan_of_food",
  "canned_food",
  "spaghetti",
  "ramen",
  "stew",
  "curry",
  "sushi",
  "bento",
  "fried_shrimp",
  "rice_ball",
  "rice",
  "rice_cracker",
  "fish_cake",
  "fortune_cookie",
  "moon_cake",
  "oden",
  "dango",
  "shaved_ice",
  "ice_cream",
  "icecream",
  "pie",
  "cupcake",
  "cake",
  "birthday",
  "custard",
  "lollipop",
  "candy",
  "chocolate_bar",
  "popcorn",
  "doughnut",
  "dumpling",
  "cookie",
  "chestnut",
  "peanuts",
  "honey_pot",
  "milk_glass",
  "baby_bottle",
  "coffee",
  "tea",
  "cup_with_straw",
  "sake",
  "beer",
  "beers",
  "clinking_glasses",
  "wine_glass",
  "tumbler_glass",
  "cocktail",
  "tropical_drink",
  "champagne",
  "spoon",
  "fork_and_knife",
  "plate_with_cutlery",
  "bowl_with_spoon",
  "takeout_box",
  "chopsticks",
  "salt",
  "soccer",
  "basketball",
  "football",
  "baseball",
  "softball",
  "tennis",
  "volleyball",
  "rugby_football",
  "flying_disc",
  "8ball",
  "golf",
  "golfing_woman",
  "golfing_man",
  "ping_pong",
  "badminton",
  "goal_net",
  "ice_hockey",
  "field_hockey",
  "lacrosse",
  "cricket",
  "ski",
  "skier",
  "snowboarder",
  "person_fencing",
  "women_wrestling",
  "men_wrestling",
  "woman_cartwheeling",
  "man_cartwheeling",
  "woman_playing_handball",
  "man_playing_handball",
  "ice_skate",
  "curling_stone",
  "skateboard",
  "sled",
  "bow_and_arrow",
  "fishing_pole_and_fish",
  "boxing_glove",
  "martial_arts_uniform",
  "rowing_woman",
  "rowing_man",
  "climbing_woman",
  "climbing_man",
  "swimming_woman",
  "swimming_man",
  "woman_playing_water_polo",
  "man_playing_water_polo",
  "woman_in_lotus_position",
  "man_in_lotus_position",
  "surfing_woman",
  "surfing_man",
  "basketball_woman",
  "basketball_man",
  "weight_lifting_woman",
  "weight_lifting_man",
  "biking_woman",
  "biking_man",
  "mountain_biking_woman",
  "mountain_biking_man",
  "horse_racing",
  "trophy",
  "running_shirt_with_sash",
  "medal_sports",
  "medal_military",
  "1st_place_medal",
  "2nd_place_medal",
  "3rd_place_medal",
  "reminder_ribbon",
  "rosette",
  "ticket",
  "tickets",
  "performing_arts",
  "art",
  "circus_tent",
  "woman_juggling",
  "man_juggling",
  "microphone",
  "headphones",
  "musical_score",
  "musical_keyboard",
  "drum",
  "saxophone",
  "trumpet",
  "guitar",
  "violin",
  "clapper",
  "video_game",
  "dart",
  "game_die",
  "chess_pawn",
  "slot_machine",
  "jigsaw",
  "bowling",
  "red_car",
  "taxi",
  "blue_car",
  "bus",
  "trolleybus",
  "racing_car",
  "police_car",
  "ambulance",
  "fire_engine",
  "minibus",
  "truck",
  "articulated_lorry",
  "tractor",
  "kick_scooter",
  "motorcycle",
  "bike",
  "motor_scooter",
  "rotating_light",
  "oncoming_police_car",
  "oncoming_bus",
  "oncoming_automobile",
  "oncoming_taxi",
  "aerial_tramway",
  "mountain_cableway",
  "suspension_railway",
  "railway_car",
  "train",
  "monorail",
  "bullettrain_side",
  "bullettrain_front",
  "light_rail",
  "mountain_railway",
  "steam_locomotive",
  "train2",
  "metro",
  "tram",
  "station",
  "flying_saucer",
  "helicopter",
  "small_airplane",
  "airplane",
  "flight_departure",
  "flight_arrival",
  "sailboat",
  "motor_boat",
  "speedboat",
  "ferry",
  "passenger_ship",
  "rocket",
  "artificial_satellite",
  "seat",
  "canoe",
  "anchor",
  "construction",
  "fuelpump",
  "busstop",
  "vertical_traffic_light",
  "traffic_light",
  "ship",
  "ferris_wheel",
  "roller_coaster",
  "carousel_horse",
  "building_construction",
  "foggy",
  "tokyo_tower",
  "factory",
  "fountain",
  "rice_scene",
  "mountain",
  "mountain_snow",
  "mount_fuji",
  "volcano",
  "japan",
  "camping",
  "tent",
  "national_park",
  "motorway",
  "railway_track",
  "sunrise",
  "sunrise_over_mountains",
  "desert",
  "beach_umbrella",
  "desert_island",
  "city_sunrise",
  "city_sunset",
  "cityscape",
  "night_with_stars",
  "bridge_at_night",
  "milky_way",
  "stars",
  "sparkler",
  "fireworks",
  "rainbow",
  "houses",
  "european_castle",
  "japanese_castle",
  "stadium",
  "statue_of_liberty",
  "house",
  "house_with_garden",
  "derelict_house",
  "office",
  "department_store",
  "post_office",
  "european_post_office",
  "hospital",
  "bank",
  "hotel",
  "convenience_store",
  "school",
  "love_hotel",
  "wedding",
  "classical_building",
  "church",
  "mosque",
  "synagogue",
  "kaaba",
  "shinto_shrine",
  "watch",
  "iphone",
  "calling",
  "computer",
  "keyboard",
  "desktop_computer",
  "printer",
  "computer_mouse",
  "trackball",
  "joystick",
  "clamp",
  "minidisc",
  "floppy_disk",
  "cd",
  "dvd",
  "vhs",
  "camera",
  "camera_flash",
  "video_camera",
  "movie_camera",
  "film_projector",
  "film_strip",
  "telephone_receiver",
  "phone",
  "pager",
  "fax",
  "tv",
  "radio",
  "studio_microphone",
  "level_slider",
  "control_knobs",
  "compass",
  "stopwatch",
  "timer_clock",
  "alarm_clock",
  "mantelpiece_clock",
  "hourglass_flowing_sand",
  "hourglass",
  "satellite",
  "battery",
  "electric_plug",
  "bulb",
  "flashlight",
  "candle",
  "fire_extinguisher",
  "wastebasket",
  "oil_drum",
  "money_with_wings",
  "dollar",
  "yen",
  "euro",
  "pound",
  "moneybag",
  "credit_card",
  "gem",
  "balance_scale",
  "toolbox",
  "wrench",
  "hammer",
  "hammer_and_pick",
  "hammer_and_wrench",
  "pick",
  "nut_and_bolt",
  "gear",
  "brick",
  "chains",
  "magnet",
  "gun",
  "bomb",
  "firecracker",
  "hocho",
  "dagger",
  "crossed_swords",
  "shield",
  "smoking",
  "coffin",
  "funeral_urn",
  "amphora",
  "crystal_ball",
  "prayer_beads",
  "nazar_amulet",
  "barber",
  "alembic",
  "telescope",
  "microscope",
  "hole",
  "pill",
  "syringe",
  "dna",
  "microbe",
  "petri_dish",
  "test_tube",
  "thermometer",
  "broom",
  "basket",
  "toilet_paper",
  "label",
  "bookmark",
  "toilet",
  "shower",
  "bathtub",
  "bath",
  "soap",
  "sponge",
  "lotion_bottle",
  "key",
  "old_key",
  "couch_and_lamp",
  "sleeping_bed",
  "bed",
  "door",
  "bellhop_bell",
  "teddy_bear",
  "framed_picture",
  "world_map",
  "parasol_on_ground",
  "moyai",
  "shopping",
  "shopping_cart",
  "balloon",
  "flags",
  "ribbon",
  "gift",
  "confetti_ball",
  "tada",
  "dolls",
  "wind_chime",
  "crossed_flags",
  "izakaya_lantern",
  "red_envelope",
  "email",
  "envelope_with_arrow",
  "incoming_envelope",
  "e-mail",
  "love_letter",
  "postbox",
  "mailbox_closed",
  "mailbox",
  "mailbox_with_mail",
  "mailbox_with_no_mail",
  "package",
  "postal_horn",
  "inbox_tray",
  "outbox_tray",
  "scroll",
  "page_with_curl",
  "bookmark_tabs",
  "receipt",
  "bar_chart",
  "chart_with_upwards_trend",
  "chart_with_downwards_trend",
  "page_facing_up",
  "date",
  "calendar",
  "spiral_calendar",
  "card_index",
  "card_file_box",
  "ballot_box",
  "file_cabinet",
  "clipboard",
  "spiral_notepad",
  "file_folder",
  "open_file_folder",
  "card_index_dividers",
  "newspaper_roll",
  "newspaper",
  "notebook",
  "closed_book",
  "green_book",
  "blue_book",
  "orange_book",
  "notebook_with_decorative_cover",
  "ledger",
  "books",
  "open_book",
  "safety_pin",
  "link",
  "paperclip",
  "paperclips",
  "scissors",
  "triangular_ruler",
  "straight_ruler",
  "abacus",
  "pushpin",
  "round_pushpin",
  "closed_lock_with_key",
  "lock",
  "unlock",
  "lock_with_ink_pen",
  "pen",
  "fountain_pen",
  "black_nib",
  "memo",
  "pencil2",
  "crayon",
  "paintbrush",
  "mag",
  "mag_right",
  "heart",
  "orange_heart",
  "yellow_heart",
  "green_heart",
  "blue_heart",
  "purple_heart",
  "black_heart",
  "broken_heart",
  "heavy_heart_exclamation",
  "two_hearts",
  "revolving_hearts",
  "heartbeat",
  "heartpulse",
  "sparkling_heart",
  "cupid",
  "gift_heart",
  "heart_decoration",
  "peace_symbol",
  "latin_cross",
  "star_and_crescent",
  "om",
  "wheel_of_dharma",
  "star_of_david",
  "six_pointed_star",
  "menorah",
  "yin_yang",
  "orthodox_cross",
  "place_of_worship",
  "ophiuchus",
  "aries",
  "taurus",
  "gemini",
  "cancer",
  "leo",
  "virgo",
  "libra",
  "scorpius",
  "sagittarius",
  "capricorn",
  "aquarius",
  "pisces",
  "id",
  "atom_symbol",
  "u7a7a",
  "u5272",
  "radioactive",
  "biohazard",
  "mobile_phone_off",
  "vibration_mode",
  "u6709",
  "u7121",
  "u7533",
  "u55b6",
  "u6708",
  "eight_pointed_black_star",
  "vs",
  "accept",
  "white_flower",
  "ideograph_advantage",
  "secret",
  "congratulations",
  "u5408",
  "u6e80",
  "u7981",
  "a",
  "b",
  "ab",
  "cl",
  "o2",
  "sos",
  "no_entry",
  "name_badge",
  "no_entry_sign",
  "x",
  "o",
  "stop_sign",
  "anger",
  "hotsprings",
  "no_pedestrians",
  "do_not_litter",
  "no_bicycles",
  "non-potable_water",
  "underage",
  "no_mobile_phones",
  "exclamation",
  "grey_exclamation",
  "question",
  "grey_question",
  "bangbang",
  "interrobang",
  "100",
  "low_brightness",
  "high_brightness",
  "trident",
  "fleur_de_lis",
  "part_alternation_mark",
  "warning",
  "children_crossing",
  "beginner",
  "recycle",
  "u6307",
  "chart",
  "sparkle",
  "eight_spoked_asterisk",
  "negative_squared_cross_mark",
  "white_check_mark",
  "diamond_shape_with_a_dot_inside",
  "cyclone",
  "loop",
  "globe_with_meridians",
  "m",
  "atm",
  "zzz",
  "sa",
  "passport_control",
  "customs",
  "baggage_claim",
  "left_luggage",
  "wheelchair",
  "no_smoking",
  "wc",
  "parking",
  "potable_water",
  "mens",
  "womens",
  "baby_symbol",
  "restroom",
  "put_litter_in_its_place",
  "cinema",
  "signal_strength",
  "koko",
  "ng",
  "ok",
  "up",
  "cool",
  "new",
  "free",
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "keycap_ten",
  "asterisk",
  "1234",
  "eject_button",
  "arrow_forward",
  "pause_button",
  "next_track_button",
  "stop_button",
  "record_button",
  "play_or_pause_button",
  "previous_track_button",
  "fast_forward",
  "rewind",
  "twisted_rightwards_arrows",
  "repeat",
  "repeat_one",
  "arrow_backward",
  "arrow_up_small",
  "arrow_down_small",
  "arrow_double_up",
  "arrow_double_down",
  "arrow_right",
  "arrow_left",
  "arrow_up",
  "arrow_down",
  "arrow_upper_right",
  "arrow_lower_right",
  "arrow_lower_left",
  "arrow_upper_left",
  "arrow_up_down",
  "left_right_arrow",
  "arrows_counterclockwise",
  "arrow_right_hook",
  "leftwards_arrow_with_hook",
  "arrow_heading_up",
  "arrow_heading_down",
  "hash",
  "information_source",
  "abc",
  "abcd",
  "capital_abcd",
  "symbols",
  "musical_note",
  "notes",
  "wavy_dash",
  "curly_loop",
  "heavy_check_mark",
  "arrows_clockwise",
  "heavy_plus_sign",
  "heavy_minus_sign",
  "heavy_division_sign",
  "heavy_multiplication_x",
  "infinity",
  "heavy_dollar_sign",
  "currency_exchange",
  "copyright",
  "registered",
  "tm",
  "end",
  "back",
  "on",
  "top",
  "soon",
  "ballot_box_with_check",
  "radio_button",
  "white_circle",
  "black_circle",
  "red_circle",
  "large_blue_circle",
  "small_orange_diamond",
  "small_blue_diamond",
  "large_orange_diamond",
  "large_blue_diamond",
  "small_red_triangle",
  "black_small_square",
  "white_small_square",
  "black_large_square",
  "white_large_square",
  "small_red_triangle_down",
  "black_medium_square",
  "white_medium_square",
  "black_medium_small_square",
  "white_medium_small_square",
  "black_square_button",
  "white_square_button",
  "speaker",
  "sound",
  "loud_sound",
  "mute",
  "mega",
  "loudspeaker",
  "bell",
  "no_bell",
  "black_joker",
  "mahjong",
  "spades",
  "clubs",
  "hearts",
  "diamonds",
  "flower_playing_cards",
  "thought_balloon",
  "right_anger_bubble",
  "speech_balloon",
  "left_speech_bubble",
  "clock1",
  "clock2",
  "clock3",
  "clock4",
  "clock5",
  "clock6",
  "clock7",
  "clock8",
  "clock9",
  "clock10",
  "clock11",
  "clock12",
  "clock130",
  "clock230",
  "clock330",
  "clock430",
  "clock530",
  "clock630",
  "clock730",
  "clock830",
  "clock930",
  "clock1030",
  "clock1130",
  "clock1230",
  "white_flag",
  "black_flag",
  "pirate_flag",
  "checkered_flag",
  "triangular_flag_on_post",
  "rainbow_flag",
  "united_nations",
  "afghanistan",
  "aland_islands",
  "albania",
  "algeria",
  "american_samoa",
  "andorra",
  "angola",
  "anguilla",
  "antarctica",
  "antigua_barbuda",
  "argentina",
  "armenia",
  "aruba",
  "australia",
  "austria",
  "azerbaijan",
  "bahamas",
  "bahrain",
  "bangladesh",
  "barbados",
  "belarus",
  "belgium",
  "belize",
  "benin",
  "bermuda",
  "bhutan",
  "bolivia",
  "caribbean_netherlands",
  "bosnia_herzegovina",
  "botswana",
  "brazil",
  "british_indian_ocean_territory",
  "british_virgin_islands",
  "brunei",
  "bulgaria",
  "burkina_faso",
  "burundi",
  "cape_verde",
  "cambodia",
  "cameroon",
  "canada",
  "canary_islands",
  "cayman_islands",
  "central_african_republic",
  "chad",
  "chile",
  "cn",
  "christmas_island",
  "cocos_islands",
  "colombia",
  "comoros",
  "congo_brazzaville",
  "congo_kinshasa",
  "cook_islands",
  "costa_rica",
  "croatia",
  "cuba",
  "curacao",
  "cyprus",
  "czech_republic",
  "denmark",
  "djibouti",
  "dominica",
  "dominican_republic",
  "ecuador",
  "egypt",
  "el_salvador",
  "equatorial_guinea",
  "eritrea",
  "estonia",
  "ethiopia",
  "eu",
  "falkland_islands",
  "faroe_islands",
  "fiji",
  "finland",
  "fr",
  "french_guiana",
  "french_polynesia",
  "french_southern_territories",
  "gabon",
  "gambia",
  "georgia",
  "de",
  "ghana",
  "gibraltar",
  "greece",
  "greenland",
  "grenada",
  "guadeloupe",
  "guam",
  "guatemala",
  "guernsey",
  "guinea",
  "guinea_bissau",
  "guyana",
  "haiti",
  "honduras",
  "hong_kong",
  "hungary",
  "iceland",
  "india",
  "indonesia",
  "iran",
  "iraq",
  "ireland",
  "isle_of_man",
  "israel",
  "it",
  "cote_divoire",
  "jamaica",
  "jp",
  "jersey",
  "jordan",
  "kazakhstan",
  "kenya",
  "kiribati",
  "kosovo",
  "kuwait",
  "kyrgyzstan",
  "laos",
  "latvia",
  "lebanon",
  "lesotho",
  "liberia",
  "libya",
  "liechtenstein",
  "lithuania",
  "luxembourg",
  "macau",
  "macedonia",
  "madagascar",
  "malawi",
  "malaysia",
  "maldives",
  "mali",
  "malta",
  "marshall_islands",
  "martinique",
  "mauritania",
  "mauritius",
  "mayotte",
  "mexico",
  "micronesia",
  "moldova",
  "monaco",
  "mongolia",
  "montenegro",
  "montserrat",
  "morocco",
  "mozambique",
  "myanmar",
  "namibia",
  "nauru",
  "nepal",
  "netherlands",
  "new_caledonia",
  "new_zealand",
  "nicaragua",
  "niger",
  "nigeria",
  "niue",
  "norfolk_island",
  "northern_mariana_islands",
  "north_korea",
  "norway",
  "oman",
  "pakistan",
  "palau",
  "palestinian_territories",
  "panama",
  "papua_new_guinea",
  "paraguay",
  "peru",
  "philippines",
  "pitcairn_islands",
  "poland",
  "portugal",
  "puerto_rico",
  "qatar",
  "reunion",
  "romania",
  "ru",
  "rwanda",
  "st_barthelemy",
  "st_helena",
  "st_kitts_nevis",
  "st_lucia",
  "st_pierre_miquelon",
  "st_vincent_grenadines",
  "samoa",
  "san_marino",
  "sao_tome_principe",
  "saudi_arabia",
  "senegal",
  "serbia",
  "seychelles",
  "sierra_leone",
  "singapore",
  "sint_maarten",
  "slovakia",
  "slovenia",
  "solomon_islands",
  "somalia",
  "south_africa",
  "south_georgia_south_sandwich_islands",
  "kr",
  "south_sudan",
  "es",
  "sri_lanka",
  "sudan",
  "suriname",
  "swaziland",
  "sweden",
  "switzerland",
  "syria",
  "taiwan",
  "tajikistan",
  "tanzania",
  "thailand",
  "timor_leste",
  "togo",
  "tokelau",
  "tonga",
  "trinidad_tobago",
  "tunisia",
  "tr",
  "turkmenistan",
  "turks_caicos_islands",
  "tuvalu",
  "uganda",
  "ukraine",
  "united_arab_emirates",
  "uk",
  "england",
  "scotland",
  "wales",
  "us",
  "us_virgin_islands",
  "uruguay",
  "uzbekistan",
  "vanuatu",
  "vatican_city",
  "venezuela",
  "vietnam",
  "wallis_futuna",
  "western_sahara",
  "yemen",
  "zambia",
  "zimbabwe"
]
;
},{}],"node_modules/emojilib/index.js":[function(require,module,exports) {
module.exports = {
  lib: require('./emojis'),
  ordered: require('./ordered'),
  fitzpatrick_scale_modifiers: ["🏻", "🏼", "🏽", "🏾", "🏿"]
}

},{"./emojis":"node_modules/emojilib/emojis.json","./ordered":"node_modules/emojilib/ordered.json"}],"node_modules/emoji-name-map/lib/index.js":[function(require,module,exports) {
"use strict";

var mapO = require("map-o"),
    iterateObject = require("iterate-object");

var emoji = require("emojilib");

var nameMap = module.exports = {};
nameMap.emoji = mapO(emoji.lib, function (value) {
    return value.char;
}, true);
iterateObject(nameMap.emoji, function (value, name, obj) {
    return !value && delete obj[name] || true;
});

/**
 * get
 * Gets the emoji character (unicode) by providing the name.
 *
 * @name get
 * @function
 * @param {String} name The emoji name.
 * @return {String} The emoji character (unicode).
 */
nameMap.get = function (name) {
    if (name.charAt(0) === ":") {
        name = name.slice(1, -1);
    }
    return this.emoji[name];
};

emoji = null;
},{"map-o":"node_modules/map-o/lib/index.js","iterate-object":"node_modules/iterate-object/lib/index.js","emojilib":"node_modules/emojilib/index.js"}],"node_modules/emoji-unicode-map/lib/index.js":[function(require,module,exports) {
"use strict";

var names = require("emoji-name-map"),
    iterateObject = require("iterate-object");

var unicode = module.exports = {};
unicode.emoji = {};

iterateObject(names.emoji, function (value, name) {
    return unicode.emoji[value] = name;
});

/**
 * get
 * Gets the emoji name, by providing the character.
 *
 * @name get
 * @function
 * @param {String} char The emoji character.
 * @return {String} The emoji name.
 */
unicode.get = function (char) {
    return unicode.emoji[char];
};
},{"emoji-name-map":"node_modules/emoji-name-map/lib/index.js","iterate-object":"node_modules/iterate-object/lib/index.js"}],"node_modules/emoji-names/lib/index.js":[function(require,module,exports) {
"use strict";

var emojis = require("emoji-name-map");

module.exports = Object.keys(emojis.emoji);
emojis = null;
},{"emoji-name-map":"node_modules/emoji-name-map/lib/index.js"}],"node_modules/emoji-chars/lib/index.js":[function(require,module,exports) {
"use strict";

var emojis = require("emoji-unicode-map");

module.exports = Object.keys(emojis.emoji);
},{"emoji-unicode-map":"node_modules/emoji-unicode-map/lib/index.js"}],"node_modules/emoji-dictionary/lib/index.js":[function(require,module,exports) {
"use strict";

var unicodeMap = require("emoji-unicode-map"),
    nameMap = require("emoji-name-map"),
    emojiNames = require("emoji-names"),
    emojiChars = require("emoji-chars");

var dict = module.exports = {};

/**
 * getName
 * Gets the name of the unicode emoji.
 *
 * @name getName
 * @function
 * @param {String} unicodeChar The emoji unicode character.
 * @return {String} The emoji name.
 */
dict.getName = function (unicodeChar) {
    return unicodeMap.get(unicodeChar);
};

/**
 * getUnicode
 * Gets the unicode character by providing the emoji name.
 *
 * @name getUnicode
 * @function
 * @param {String} name The emoji name.
 * @return {String} The emoji unicode character.
 */
dict.getUnicode = function (name) {
    return nameMap.get(name);
};

dict.names = emojiNames;
dict.unicode = emojiChars;
},{"emoji-unicode-map":"node_modules/emoji-unicode-map/lib/index.js","emoji-name-map":"node_modules/emoji-name-map/lib/index.js","emoji-names":"node_modules/emoji-names/lib/index.js","emoji-chars":"node_modules/emoji-chars/lib/index.js"}],"index.js":[function(require,module,exports) {
"use strict";

var _locomotiveScroll = _interopRequireDefault(require("locomotive-scroll"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var emoji = require("emoji-dictionary");

var scroll = new _locomotiveScroll.default({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
  multiplier: 0.8
});
},{"locomotive-scroll":"node_modules/locomotive-scroll/dist/locomotive-scroll.esm.js","emoji-dictionary":"node_modules/emoji-dictionary/lib/index.js"}],"../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62655" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/Website.e31bb0bc.js.map