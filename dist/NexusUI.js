(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["NexusUI"] = factory();
	else
		root["NexusUI"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var NexusUI = __webpack_require__(1);
	var Nexus = new NexusUI();
	
	if (window) {
	  window.Nexus = Nexus;
	}
	
	module.exports = Nexus;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var Interfaces = _interopRequire(__webpack_require__(2));
	
	var math = _interopRequire(__webpack_require__(5));
	
	var Rack = _interopRequire(__webpack_require__(38));
	
	var Tune = _interopRequire(__webpack_require__(40));
	
	var Transform = _interopRequireWildcard(__webpack_require__(39));
	
	var Counter = __webpack_require__(28);
	var Radio = __webpack_require__(41);
	var Drunk = __webpack_require__(27);
	var Sequence = __webpack_require__(26);
	var Matrix = __webpack_require__(25);
	
	var WAAClock = _interopRequire(__webpack_require__(42));
	
	var Interval = _interopRequire(__webpack_require__(45));
	
	/**
	NexusUI => created as Nexus
	*/
	
	var NexusUI = (function () {
	  function NexusUI(context) {
	    _classCallCheck(this, NexusUI);
	
	    for (var key in Interfaces) {
	      this[key] = Interfaces[key];
	    }
	
	    for (var key in math) {
	      this[key] = math[key];
	    }
	
	    var Core = {
	      Rack: Rack
	    };
	
	    var Models = {
	      Counter: Counter,
	      Radio: Radio,
	      Drunk: Drunk,
	      Sequence: Sequence,
	      Matrix: Matrix
	    };
	
	    for (var key in Models) {
	      this[key] = Models[key];
	    }
	
	    for (var key in Core) {
	      this[key] = Core[key];
	    }
	
	    var DefaultContext = window.AudioContext || window.webkitAudioContext;
	    this._context = context || new DefaultContext();
	
	    this.tune = new Tune();
	    this.note = this.tune.note.bind(this.tune);
	
	    this.clock = new WAAClock(this._context);
	    this.clock.start();
	    this.Interval = Interval;
	
	    this.colors = {
	      accent: "#2bb",
	      fill: "#eee",
	      light: "#fff",
	      dark: "#333",
	      mediumLight: "#ccc",
	      mediumDark: "#666"
	    };
	
	    this.transform = Transform;
	    this.add = Transform.add;
	
	    this.Add = {};
	    for (var key in Interfaces) {
	      this.Add[key] = Transform.add.bind(this, key);
	    }
	
	    /* create default component size */
	    /* jshint ignore:start */
	    var existingStylesheets = document.getElementsByTagName("style");
	    var defaultSizeDeclaration = "[nexus-ui]{height:5000px;width:5000px}";
	    var defaultStyleNode = document.createElement("style");
	    defaultStyleNode.type = "text/css";
	    defaultStyleNode.innerHTML = defaultSizeDeclaration;
	    if (existingStylesheets.length > 0) {
	      var parent = existingStylesheets[0].parentNode;
	      parent.insertBefore(defaultStyleNode, existingStylesheets[0]);
	    } else {
	      document.write("<style>" + defaultSizeDeclaration + "</style>");
	    }
	    /* jshint ignore:end */
	  }
	
	  _createClass(NexusUI, {
	    context: {
	      get: function () {
	        return this._context;
	      },
	      set: function (ctx) {
	        this.clock.stop();
	        this._context = ctx;
	        this.clock = new WAAClock(this.context);
	        this.clock.start();
	      }
	    }
	  });
	
	  return NexusUI;
	})();
	
	module.exports = NexusUI;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = {
	  Position: __webpack_require__(3),
	  Slider: __webpack_require__(14),
	  Toggle: __webpack_require__(15),
	  /*  Range: require('./rangeslider'),
	    Waveform: require('./waveform'), */
	  Button: __webpack_require__(16),
	  TextButton: __webpack_require__(18),
	  RadioButton: __webpack_require__(19),
	  Number: __webpack_require__(20),
	  Select: __webpack_require__(21),
	  Dial: __webpack_require__(22),
	  Piano: __webpack_require__(23),
	  Sequencer: __webpack_require__(24),
	  Pan2D: __webpack_require__(29),
	  Tilt: __webpack_require__(30),
	  Multislider: __webpack_require__(31),
	  Pan: __webpack_require__(33),
	  Envelope: __webpack_require__(34),
	  Spectrogram: __webpack_require__(35),
	  Meter: __webpack_require__(36),
	  Oscilloscope: __webpack_require__(37)
	};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	
	"use strict";
	
	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var svg = __webpack_require__(4);
	var Interface = __webpack_require__(6);
	var Step = __webpack_require__(11);
	
	var Interaction = _interopRequireWildcard(__webpack_require__(12));
	
	/**
	* Position
	*
	* @description Two-dimensional touch slider.
	*
	* @demo <span nexus-ui="position"></span>
	*
	* @example
	* var position = new Nexus.Position('#target')
	*
	* @example
	* var position = new Nexus.Position('#target',{
	*   'size': [200,200],
	*   'mode': 'absolute',  // "absolute" or "relative"
	*   'x': 0.5,  // initial x value
	*   'minX': 0,
	*   'maxX': 1,
	*   'stepX': 0,
	*   'y': 0.5,  // initial y value
	*   'minY': 0,
	*   'maxY': 1,
	*   'stepY': 0
	* })
	*
	* @output
	* change
	* Fires any time the interface's value changes. <br>
	* The event data is an object with x and y properties containing the x and y values of the interface.
	*
	* @outputexample
	* position.on('change',function(v) {
	*   console.log(v);
	* })
	*
	*
	*/
	
	var Position = (function (_Interface) {
	  function Position() {
	    _classCallCheck(this, Position);
	
	    var options = ["value"];
	
	    var defaults = {
	      size: [200, 200],
	      mode: "absolute",
	      minX: 0,
	      maxX: 1,
	      stepX: 0,
	      x: 0.5,
	      minY: 0,
	      maxY: 1,
	      stepY: 0,
	      y: 0.5
	    };
	
	    _get(Object.getPrototypeOf(Position.prototype), "constructor", this).call(this, arguments, options, defaults);
	
	    this._x = new Step(this.settings.minX, this.settings.maxX, this.settings.stepX, this.settings.x);
	    this._y = new Step(this.settings.minY, this.settings.maxY, this.settings.stepY, this.settings.y);
	
	    this.position = {
	      x: new Interaction.Handle(this.settings.mode, "horizontal", [0, this.width], [this.height, 0]),
	      y: new Interaction.Handle(this.settings.mode, "vertical", [0, this.width], [this.height, 0])
	    };
	    this.position.x.value = this._x.normalized;
	    this.position.y.value = this._y.normalized;
	
	    this.init();
	    this.render();
	  }
	
	  _inherits(Position, _Interface);
	
	  _createClass(Position, {
	    buildInterface: {
	      value: function buildInterface() {
	
	        this.knob = svg.create("circle");
	        this.element.appendChild(this.knob);
	      }
	    },
	    sizeInterface: {
	      value: function sizeInterface() {
	
	        this.position.x.resize([0, this.width], [this.height, 0]);
	        this.position.y.resize([0, this.width], [this.height, 0]);
	
	        this._minDimension = Math.min(this.width, this.height);
	
	        this.knobRadius = {
	          off: ~ ~(this._minDimension / 100) * 5 + 5 };
	        this.knobRadius.on = this.knobRadius.off * 2;
	
	        this.knob.setAttribute("cx", this.width / 2);
	        this.knob.setAttribute("cy", this.height / 2);
	        this.knob.setAttribute("r", this.knobRadius.off);
	      }
	    },
	    colorInterface: {
	      value: function colorInterface() {
	        this.element.style.backgroundColor = this.colors.fill;
	        this.knob.setAttribute("fill", this.colors.accent);
	      }
	    },
	    render: {
	      value: function render() {
	        if (this.clicked) {
	          //  this.knobRadius = 30;
	          this.knob.setAttribute("r", this.knobRadius.on);
	        } else {
	          //  this.knobRadius = 15;
	          this.knob.setAttribute("r", this.knobRadius.off);
	        }
	
	        this.knobCoordinates = {
	          x: this._x.normalized * this.width,
	          y: this.height - this._y.normalized * this.height
	        };
	
	        this.knob.setAttribute("cx", this.knobCoordinates.x);
	        this.knob.setAttribute("cy", this.knobCoordinates.y);
	      }
	    },
	    click: {
	      value: function click() {
	        this.position.x.anchor = this.mouse;
	        this.position.y.anchor = this.mouse;
	        this.move();
	      }
	    },
	    move: {
	      value: function move() {
	        if (this.clicked) {
	          this.position.x.update(this.mouse);
	          this.position.y.update(this.mouse);
	          this._x.updateNormal(this.position.x.value);
	          this._y.updateNormal(this.position.y.value);
	          this.emit("change", {
	            x: this._x.value,
	            y: this._y.value
	          });
	          this.render();
	        }
	      }
	    },
	    release: {
	      value: function release() {
	        this.render();
	      }
	    },
	    x: {
	
	      /**
	      * The interface's x value. When set, it will automatically adjust to fit min/max/step settings of the interface.
	      * @type {object}
	      * @example position.x = 0.5;
	      */
	
	      get: function () {
	        return this._x.value;
	      },
	      set: function (value) {
	        this._x.update(value);
	        this.emit("change", {
	          x: this._x.value,
	          y: this._y.value
	        });
	        this.render();
	      }
	    },
	    y: {
	
	      /**
	      * The interface's y values. When set, it will automatically adjust to fit min/max/step settings of the interface.
	      * @type {object}
	      * @example position.x = 0.5;
	      */
	
	      get: function () {
	        return this._y.value;
	      },
	      set: function (value) {
	        this._y.update(value);
	        this.emit("change", {
	          x: this._x.value,
	          y: this._y.value
	        });
	        this.render();
	      }
	    },
	    normalized: {
	      get: function () {
	        return {
	          x: this._x.normalized,
	          y: this._y.normalized
	        };
	      }
	    },
	    minX: {
	
	      /**
	      * The lower limit of value on the x axis
	      * @type {object}
	      */
	
	      get: function () {
	        return this._x.min;
	      },
	      set: function (v) {
	        this._x.min = v;
	        this.render();
	      }
	    },
	    minY: {
	
	      /**
	      * The lower limit of value on the y axis
	      * @type {object}
	      */
	
	      get: function () {
	        return this._y.min;
	      },
	      set: function (v) {
	        this._y.min = v;
	        this.render();
	      }
	    },
	    maxX: {
	
	      /**
	      * The upper limit of value on the x axis
	      * @type {object}
	      */
	
	      get: function () {
	        return this._x.max;
	      },
	      set: function (v) {
	        this._x.max = v;
	        this.render();
	      }
	    },
	    maxY: {
	
	      /**
	      * The upper limit of value on the y axis
	      * @type {object}
	      */
	
	      get: function () {
	        return this._y.max;
	      },
	      set: function (v) {
	        this._y.max = v;
	        this.render();
	      }
	    },
	    stepX: {
	
	      /**
	      * The incremental step of values on the x axis
	      * @type {object}
	      */
	
	      get: function () {
	        return this._x.step;
	      },
	      set: function (v) {
	        this._x.step = v;
	        this.render();
	      }
	    },
	    stepY: {
	
	      /**
	      * The incremental step of values on the y axis
	      * @type {object}
	      */
	
	      get: function () {
	        return this._y.step;
	      },
	      set: function (v) {
	        this._y.step = v;
	        this.render();
	      }
	    },
	    mode: {
	
	      /**
	      Absolute mode (position's value jumps to mouse click position) or relative mode (mouse drag changes value relative to its current position). Default: "absolute".
	      @type {string}
	      @example position.mode = "relative";
	      */
	
	      get: function () {
	        return this.position.x.mode;
	      },
	      set: function (v) {
	        this.position.x.mode = v;
	        this.position.y.mode = v;
	      }
	    }
	  });
	
	  return Position;
	})(Interface);
	
	module.exports = Position;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var math = __webpack_require__(5);
	
	module.exports = {
	
	  create: function (type) {
	    return document.createElementNS("http://www.w3.org/2000/svg", type);
	  },
	
	  arc: function (x, y, radius, startAngle, endAngle) {
	
	    var start = math.toCartesian(radius, endAngle);
	    var end = math.toCartesian(radius, startAngle);
	
	    var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
	
	    var d = ["M", start.x + x, start.y + y, "A", radius, radius, 0, largeArcFlag, 0, end.x + x, end.y + y].join(" ");
	
	    return d;
	  },
	
	  radialGradient: function (defs, numberOfStops) {
	
	    var id = "gradient" + math.ri(100000000000);
	    var stops = [];
	
	    var gradient = document.createElementNS("http://www.w3.org/2000/svg", "radialGradient");
	    gradient.setAttribute("id", id);
	    gradient.setAttribute("cx", "50%");
	    gradient.setAttribute("cy", "50%");
	    gradient.setAttribute("r", "50%");
	
	    defs.appendChild(gradient);
	
	    for (var i = 0; i < numberOfStops; i++) {
	      var _stop = document.createElementNS("http://www.w3.org/2000/svg", "stop");
	      _stop.setAttribute("id", "stop" + i);
	      //stop.setAttribute('offset', '70%');
	      //stop.setAttribute('stop-color', 'White');
	      gradient.appendChild(_stop);
	      stops.push(_stop);
	    }
	
	    return {
	      id: id,
	      stops: stops,
	      element: gradient
	    };
	  }
	
	};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * Limit a number to within a minimum and maximum
	 * @param  {number} value Input value
	 * @param  {number} min   Lower limit
	 * @param  {number} max   Upper limit
	 * @return {number}       The input value constrained within the lower and upper limits
	 * @example
	 * Nexus.clip(11,0,10)   // returns 10
	 * Nexus.clip(-1,0,10)   // returns 0
	 * Nexus.clip(5,0,10)    // returns 5
	 */
	
	exports.clip = function (value, min, max) {
	  return Math.min(Math.max(value, min), max);
	};
	
	exports.normalize = function (value, min, max) {
	  return (value - min) / (max - min);
	};
	
	/**
	 * Scale a value from one range to another range.
	 * @param  {number} inNum  Input value
	 * @param  {number} inMin  Input range minimum
	 * @param  {number} inMax  Input range maximum
	 * @param  {number} outMin Output range minimum
	 * @param  {number} outMax Output range maximum
	 * @return {number}        The input value scaled to its new range
	 * @example
	 * Nexus.scale(0.5,0,1,0,10)   // returns 5
	 * Nexus.scale(0.9,0,1,1,0)    // returns 0.1
	 */
	exports.scale = function (inNum, inMin, inMax, outMin, outMax) {
	  if (inMin === inMax) {
	    return outMin;
	  }
	  return (inNum - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
	};
	
	exports.toPolar = function (x, y) {
	  var r = Math.sqrt(x * x + y * y);
	
	  var theta = Math.atan2(y, x);
	  if (theta < 0) {
	    theta = theta + 2 * Math.PI;
	  }
	  return { radius: r, angle: theta };
	};
	
	exports.toCartesian = function (radius, angle) {
	  var cos = Math.cos(angle);
	  var sin = Math.sin(angle);
	  return { x: radius * cos, y: radius * sin * -1 };
	};
	/*
	exports.polarToCartesian(centerX, centerY, radius, angleInDegrees) {
	  var angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;
	
	  return {
	    x: centerX + (radius * Math.cos(angleInRadians)),
	    y: centerY + (radius * Math.sin(angleInRadians))
	  };
	}  */
	
	exports.prune = function (data, scale) {
	  return parseFloat(data.toFixed(scale));
	};
	
	exports.invert = function (inNum) {
	  return exports.scale(inNum, 1, 0, 0, 1);
	};
	
	/**
	 * Convert a MIDi note number to a frequency value in equal temperament.
	 * @param  {number} midi MIDI note value
	 * @return {number}      Frequence value
	 * @example
	 * Nexus.mtof(60)  // returns the frequency number of Middle C
	 */
	exports.mtof = function (midi) {
	  return Math.pow(2, (midi - 69) / 12) * 440;
	};
	
	/**
	 * Interpolate between two numbers
	 * @param  {number} loc Interpolation index (0-1)
	 * @param  {number} min Lower value
	 * @param  {number} max Upper value
	 * @return {number}     Interpolated value
	 * @example
	 * Nexus.interp(0.5,2,4)   // returns 3
	 * Nexus.interp(0.1,0,10)     // returns 1
	 */
	exports.interp = function (loc, min, max) {
	  return loc * (max - min) + min;
	};
	
	/**
	 * Return a random choice from a list of arguments
	 * @return {various} One random argument
	 * @example
	 * Nexus.pick(1,2,3,4)   // returns 1, 2, 3, or 4
	 * Nexus.pick(function1,function2)   // returns either function1 or function2
	 */
	exports.pick = function () {
	  return arguments[~ ~(Math.random() * arguments.length)];
	};
	
	/**
	 * Returns an octave multiplier for frequency values
	 * @param  {number} num Relative octave number (e.g. -1 for one octave down, 1 for one octave up)
	 * @return {number}     Octave multiplier
	 * @example
	 * Nexus.octave(-1)  // returns 0.5
	 * Nexus.octave(0)   // returns 1
	 * Nexus.octave(1)   // returns 2
	 * Nexus.octave(2)   // returns 4
	 */
	exports.octave = function (num) {
	  return Math.pow(2, num);
	};
	
	/**
	 * Random integer generator. If no second argument is given, will return random integer from 0 to bound1.
	 * @param  {number} bound1 Minimum random value
	 * @param  {number} bound2 Maximum random value
	 * @return {number}        Random integer between lower and upper boundary
	 * @example
	 * Nexus.ri(10)    // returns random int from 0 to 10
	 * Nexus.ri(20,2000) // returns random int from 20 to 2000
	 */
	exports.ri = function (bound1, bound2) {
	  if (!bound2) {
	    bound2 = bound1;
	    bound1 = 0;
	  }
	  var low = Math.min(bound1, bound2);
	  var high = Math.max(bound1, bound2);
	  return Math.floor(Math.random() * (high - low) + low);
	};
	
	/**
	 * Random float number generator. If no second argument is given, will return random float from 0 to bound1.
	 * @param  {number} bound1 Minimum random value
	 * @param  {number} bound2 Maximum random value
	 * @return {number}        Random float between lower and upper boundary
	 * @example
	 * Nexus.rf(1)    // returns random float from 0 to 1
	 * Nexus.rf(1,2) // returns random float from 1 to 2
	 */
	exports.rf = function (bound1, bound2) {
	  if (!bound2) {
	    bound2 = bound1;
	    bound1 = 0;
	  }
	  var low = Math.min(bound1, bound2);
	  var high = Math.max(bound1, bound2);
	  return Math.random() * (high - low) + low;
	};
	
	exports.cycle = function (input, min, max) {
	  input++;
	  if (input >= max) {
	    input = min;
	  }
	  return input;
	};
	
	/**
	 * Average an array of numbers
	 * @param  {Array} data Array of numbers to average
	 * @return {number}      Average of the input data
	 * @example
	 * Nexus.average([0,2,4,6,8,10])   // returns 5
	 */
	exports.average = function (data) {
	  var total = 0;
	  for (var i = 0; i < data.length; i++) {
	    total += data[i];
	  }
	  return total / data.length;
	};
	
	/**
	 * Get the distance from one (x,y) point to another (x,y) point
	 * @param  {number} x1 x of first point
	 * @param  {number} y1 y of first point
	 * @param  {number} x2 x of second point
	 * @param  {number} y2 y of second poiny
	 * @return {number}    Distance
	 * @example
	 * Nexus.distance(0,0,3,4)   // returns 5
	 */
	exports.distance = function (x1, y1, x2, y2) {
	  var a = x1 - x2;
	  var b = y1 - y2;
	  return Math.sqrt(a * a + b * b);
	};
	
	exports.gainToDB = function (gain) {
	  return 20 * Math.log10(gain);
	};
	
	/**
	 * Flip a coin, returning either 0 or 1 according to a probability
	 * @param  {number} [odds=0.5] Likelihood of returning 1
	 * @return {number}            1 or 0
	 * @example
	 * Nexus.coin(0.1)   // returns 1 (10% of the time) or 0 (90% of the time)
	 */
	exports.coin = function () {
	  var odds = arguments[0] === undefined ? 0.5 : arguments[0];
	
	  if (exports.rf(0, 1) < odds) {
	    return 1;
	  } else {
	    return 0;
	  }
	};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var svg = __webpack_require__(4);
	var dom = __webpack_require__(7);
	var util = __webpack_require__(8);
	var touch = __webpack_require__(9);
	var EventEmitter = __webpack_require__(10);
	
	/**
	Interface
	*/
	
	var Interface = (function (_EventEmitter) {
	  function Interface(args, options, defaults) {
	    _classCallCheck(this, Interface);
	
	    _get(Object.getPrototypeOf(Interface.prototype), "constructor", this).call(this);
	    this.type = this.constructor.name;
	    this.settings = this.parseSettings(args, options, defaults);
	    this.mouse = {};
	    this.wait = false;
	    this.colors = {};
	    var defaultColors = Nexus.colors; // jshint ignore:line
	    this.colors.accent = defaultColors.accent;
	    this.colors.fill = defaultColors.fill;
	    this.colors.light = defaultColors.light;
	    this.colors.dark = defaultColors.dark;
	    this.colors.mediumLight = defaultColors.mediumLight;
	    this.colors.mediumDark = defaultColors.mediumDark;
	  }
	
	  _inherits(Interface, _EventEmitter);
	
	  _createClass(Interface, {
	    parseSettings: {
	      value: function parseSettings(args, options, defaults) {
	
	        options.unshift("target");
	        defaults.defaultSize = defaults.size.splice(0, 2);
	        defaults.size = false;
	
	        var settings = {
	          target: document.body,
	          colors: {}, // should inherit from a colors module,
	          snapWithParent: true,
	          event: function event() {},
	          component: false
	        };
	
	        for (var key in defaults) {
	          settings[key] = defaults[key];
	        }
	
	        for (var i = 0; i < args.length; i++) {
	          // grabs the next argument
	          var setting = args[i];
	          // if it's an object, it must be the settings object
	          if (util.isObject(setting)) {
	            for (var key in setting) {
	              settings[key] = setting[key];
	            }
	            // if it's a function, it must be the event setting
	          } else if (typeof setting === "function") {
	            settings.event = setting;
	            // otherwise, consider it one of the widget's custom options
	          } else if (options.length >= 1) {
	            // grab the first option -- i.e. 'target'
	            var key = options.splice(0, 1)[0];
	            settings[key] = setting;
	          }
	        }
	
	        /*  handle common settings  */
	
	        // target
	        this.parent = dom.parseElement(settings.target);
	
	        // nexus-ui attribute
	        if (this.parent && this.parent instanceof HTMLElement && !settings.component) {
	          if (!this.parent.hasAttribute("nexus-ui")) {
	            this.parent.setAttribute("nexus-ui", "");
	          }
	        }
	
	        // size
	
	        if (settings.size && Array.isArray(settings.size) && settings.snapWithParent) {
	          this.width = settings.size[0];
	          this.height = settings.size[1];
	          this.parent.style.width = this.width + "px";
	          this.parent.style.height = this.height + "px";
	        } else if (settings.snapWithParent && !settings.component) {
	
	          this.width = parseFloat(window.getComputedStyle(this.parent, null).getPropertyValue("width").replace("px", ""));
	          this.height = parseFloat(window.getComputedStyle(this.parent, null).getPropertyValue("height").replace("px", ""));
	
	          if (this.width == 5000) {
	            this.width = settings.defaultSize[0];
	            this.parent.style.width = this.parent.width = this.width + "px";
	          }
	          if (this.height == 5000) {
	            this.height = settings.defaultSize[1];
	            this.parent.style.height = this.parent.height = this.height + "px";
	          }
	        } else {
	          settings.size = settings.defaultSize;
	          this.width = settings.size[0];
	          this.height = settings.size[1];
	        }
	
	        // event
	        if (settings.event) {
	          this.event = this.on("change", settings.event);
	        } else {
	          this.event = false;
	        }
	
	        return settings;
	      }
	    },
	    init: {
	      value: function init() {
	        this.buildFrame();
	        this.buildInterface();
	        this.sizeInterface();
	        this.attachListeners();
	        this.colorInterface();
	        this.finalTouches();
	      }
	    },
	    buildFrame: {
	      value: function buildFrame() {
	        this.element = svg.create("svg");
	        this.element.setAttribute("width", this.width);
	        this.element.setAttribute("height", this.height);
	        this.parent.appendChild(this.element);
	      }
	    },
	    buildInterface: {
	      value: function buildInterface() {}
	    },
	    sizeInterface: {
	      value: function sizeInterface() {}
	    },
	    colorInterface: {
	      value: function colorInterface() {}
	    },
	    attachListeners: {
	      value: function attachListeners() {
	        var _this = this;
	
	        this.interactionTarget = this.interactionTarget || this.element;
	
	        // Setup interaction
	        if (touch.exists) {
	          this.interactionTarget.addEventListener("touchstart", function (evt) {
	            return _this.preTouch(evt);
	          });
	          this.interactionTarget.addEventListener("touchmove", function (evt) {
	            return _this.preTouchMove(evt);
	          });
	          this.interactionTarget.addEventListener("touchend", function (evt) {
	            return _this.preTouchRelease(evt);
	          });
	        }
	        this.boundPreMove = function (evt) {
	          return _this.preMove(evt);
	        };
	        this.boundPreRelease = function (evt) {
	          return _this.preRelease(evt);
	        };
	        this.interactionTarget.addEventListener("mousedown", function (evt) {
	          return _this.preClick(evt);
	        });
	      }
	    },
	    finalTouches: {
	      value: function finalTouches() {
	        this.element.style.cursor = "pointer";
	      }
	    },
	    preClick: {
	      value: function preClick(e) {
	        // 10000 getComputedStyle calls takes 100 ms.
	        // .:. one takes about .01ms
	        if (this.element instanceof HTMLElement) {
	          this.width = window.getComputedStyle(this.element, null).getPropertyValue("width").replace("px", "");
	        }
	        // 10000 getComputedStyle calls takes 40 ms.
	        // .:. one takes about .004ms
	        this.offset = dom.findPosition(this.element);
	        this.mouse = dom.locateMouse(e, this.offset);
	        this.clicked = true;
	        this.click();
	        this.moveEvent = document.addEventListener("mousemove", this.boundPreMove);
	        this.releaseEvent = document.addEventListener("mouseup", this.boundPreRelease);
	        this.emit("click");
	        e.preventDefault();
	        e.stopPropagation();
	      }
	    },
	    preMove: {
	      value: function preMove(e) {
	        var _this = this;
	
	        if (!this.wait) {
	          this.mouse = dom.locateMouse(e, this.offset);
	          this.move();
	          this.wait = true;
	          setTimeout(function () {
	            _this.wait = false;
	          }, 25);
	        }
	        e.preventDefault();
	        e.stopPropagation();
	      }
	    },
	    preRelease: {
	      value: function preRelease(e) {
	        this.mouse = dom.locateMouse(e, this.offset);
	        this.clicked = false;
	        this.release();
	        this.emit("release");
	        document.removeEventListener("mousemove", this.boundPreMove);
	        document.removeEventListener("mouseup", this.boundPreRelease);
	        e.preventDefault();
	        e.stopPropagation();
	      }
	    },
	    click: {
	      value: function click() {}
	    },
	    move: {
	      value: function move() {}
	    },
	    release: {
	      value: function release() {}
	    },
	    preTouch: {
	
	      /* touch */
	
	      value: function preTouch(e) {
	        if (this.element instanceof HTMLElement) {
	          this.width = window.getComputedStyle(this.element, null).getPropertyValue("width").replace("px", "");
	        }
	        this.offset = dom.findPosition(this.element);
	        this.mouse = dom.locateTouch(e, this.offset);
	        this.clicked = true;
	        this.touch(e);
	        this.emit("click");
	        e.preventDefault();
	        e.stopPropagation();
	      }
	    },
	    preTouchMove: {
	      value: function preTouchMove(e) {
	        if (this.clicked) {
	          this.mouse = dom.locateTouch(e, this.offset);
	          this.touchMove();
	          e.preventDefault();
	          e.stopPropagation();
	        }
	      }
	    },
	    preTouchRelease: {
	      value: function preTouchRelease(e) {
	        this.mouse = dom.locateTouch(e, this.offset);
	        this.clicked = false;
	        this.touchRelease();
	        this.emit("release");
	        e.preventDefault();
	        e.stopPropagation();
	      }
	    },
	    touch: {
	      value: function touch() {
	        this.click();
	      }
	    },
	    touchMove: {
	      value: function touchMove() {
	        this.move();
	      }
	    },
	    touchRelease: {
	      value: function touchRelease() {
	        this.release();
	      }
	    },
	    resize: {
	
	      /**
	      * Resize the interface
	      * @param width {number} New width in pixels
	      * @param height {number} New height in pixels
	      *
	      * @example
	      * button.resize(100,100);
	      */
	
	      value: function resize(width, height) {
	        this.width = width;
	        this.height = height;
	        this.parent.style.width = this.width + "px";
	        this.parent.style.height = this.height + "px";
	        this.element.setAttribute("width", this.width);
	        this.element.setAttribute("height", this.height);
	        this.sizeInterface();
	      }
	    },
	    empty: {
	      value: function empty() {
	        while (this.element.lastChild) {
	          this.element.removeChild(this.element.lastChild);
	        }
	      }
	    },
	    destroy: {
	
	      /**
	      * Remove the interface from the page and cancel its event listener(s).
	      *
	      * @example
	      * button.destroy();
	      */
	
	      value: function destroy() {
	        this.empty();
	        this.parent.removeChild(this.element);
	        this.removeAllListeners();
	        if (this.instrument) {
	          delete this.instrument[this.id];
	        }
	        this.customDestroy();
	      }
	    },
	    customDestroy: {
	      value: function customDestroy() {}
	    },
	    colorize: {
	      value: function colorize(type, color) {
	        this.colors[type] = color;
	        this.colorInterface();
	      }
	    }
	  });
	
	  return Interface;
	})(EventEmitter);
	
	module.exports = Interface;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.findPosition = function (el) {
	  var viewportOffset = el.getBoundingClientRect();
	  var top = viewportOffset.top + window.scrollY;
	  var left = viewportOffset.left + window.scrollX;
	  return { top: top, left: left };
	};
	
	exports.parseElement = function (parent) {
	  if (typeof parent === "string") {
	    parent = document.getElementById(parent.replace("#", ""));
	  }
	
	  if (parent instanceof HTMLElement || parent instanceof SVGElement) {
	    return parent;
	  } else {
	    return "No valid parent argument";
	  }
	};
	
	exports.locateMouse = function (e, offset) {
	  return {
	    x: e.pageX - offset.left,
	    y: e.pageY - offset.top
	  };
	};
	
	exports.locateTouch = function (e, offset) {
	  return {
	    x: e.targetTouches.length ? e.targetTouches[0].pageX - offset.left : false,
	    y: e.targetTouches.length ? e.targetTouches[0].pageY - offset.top : false
	  };
	};
	
	exports.SmartCanvas = function (parent) {
	  var _this = this;
	
	  this.element = document.createElement("canvas");
	  this.context = this.element.getContext("2d");
	  parent.appendChild(this.element);
	
	  this.resize = function (w, h) {
	    _this.element.width = w * 2;
	    _this.element.height = h * 2;
	    _this.element.style.width = w + "px";
	    _this.element.style.height = h + "px";
	  };
	};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.isObject = function (obj) {
	  if (typeof obj === "object" && !Array.isArray(obj) && obj !== null && obj instanceof SVGElement === false && obj instanceof HTMLElement === false) {
	    return true;
	  } else {
	    return false;
	  }
	};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.exists = "ontouchstart" in document.documentElement;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;
	
	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;
	
	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;
	
	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;
	
	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function(n) {
	  if (!isNumber(n) || n < 0 || isNaN(n))
	    throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};
	
	EventEmitter.prototype.emit = function(type) {
	  var er, handler, len, args, i, listeners;
	
	  if (!this._events)
	    this._events = {};
	
	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error ||
	        (isObject(this._events.error) && !this._events.error.length)) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      } else {
	        // At least give some kind of context to the user
	        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
	        err.context = er;
	        throw err;
	      }
	    }
	  }
	
	  handler = this._events[type];
	
	  if (isUndefined(handler))
	    return false;
	
	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        args = Array.prototype.slice.call(arguments, 1);
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    args = Array.prototype.slice.call(arguments, 1);
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++)
	      listeners[i].apply(this, args);
	  }
	
	  return true;
	};
	
	EventEmitter.prototype.addListener = function(type, listener) {
	  var m;
	
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  if (!this._events)
	    this._events = {};
	
	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener)
	    this.emit('newListener', type,
	              isFunction(listener.listener) ?
	              listener.listener : listener);
	
	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;
	  else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);
	  else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];
	
	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }
	
	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' +
	                    'leak detected. %d listeners added. ' +
	                    'Use emitter.setMaxListeners() to increase limit.',
	                    this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }
	
	  return this;
	};
	
	EventEmitter.prototype.on = EventEmitter.prototype.addListener;
	
	EventEmitter.prototype.once = function(type, listener) {
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  var fired = false;
	
	  function g() {
	    this.removeListener(type, g);
	
	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }
	
	  g.listener = listener;
	  this.on(type, g);
	
	  return this;
	};
	
	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function(type, listener) {
	  var list, position, length, i;
	
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  if (!this._events || !this._events[type])
	    return this;
	
	  list = this._events[type];
	  length = list.length;
	  position = -1;
	
	  if (list === listener ||
	      (isFunction(list.listener) && list.listener === listener)) {
	    delete this._events[type];
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	
	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener ||
	          (list[i].listener && list[i].listener === listener)) {
	        position = i;
	        break;
	      }
	    }
	
	    if (position < 0)
	      return this;
	
	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }
	
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	  }
	
	  return this;
	};
	
	EventEmitter.prototype.removeAllListeners = function(type) {
	  var key, listeners;
	
	  if (!this._events)
	    return this;
	
	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0)
	      this._events = {};
	    else if (this._events[type])
	      delete this._events[type];
	    return this;
	  }
	
	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }
	
	  listeners = this._events[type];
	
	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else if (listeners) {
	    // LIFO order
	    while (listeners.length)
	      this.removeListener(type, listeners[listeners.length - 1]);
	  }
	  delete this._events[type];
	
	  return this;
	};
	
	EventEmitter.prototype.listeners = function(type) {
	  var ret;
	  if (!this._events || !this._events[type])
	    ret = [];
	  else if (isFunction(this._events[type]))
	    ret = [this._events[type]];
	  else
	    ret = this._events[type].slice();
	  return ret;
	};
	
	EventEmitter.prototype.listenerCount = function(type) {
	  if (this._events) {
	    var evlistener = this._events[type];
	
	    if (isFunction(evlistener))
	      return 1;
	    else if (evlistener)
	      return evlistener.length;
	  }
	  return 0;
	};
	
	EventEmitter.listenerCount = function(emitter, type) {
	  return emitter.listenerCount(type);
	};
	
	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	
	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	
	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	
	function isUndefined(arg) {
	  return arg === void 0;
	}


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var math = __webpack_require__(5);
	
	/**
	  Creates a steppable value with minimum, maximum, and step size. This is used in many interfaces to constrict their values to certain ranges.
	  @param {number} [min=0] minimum
	  @param {number} [max=1] maximum
	  @param {number} [step=0]
	  @param {number} [value=0] initial value
	  @returns {Object} Step
	*/
	
	var Step = (function () {
	  function Step() {
	    var min = arguments[0] === undefined ? 0 : arguments[0];
	    var max = arguments[1] === undefined ? 1 : arguments[1];
	    var step = arguments[2] === undefined ? 0 : arguments[2];
	    var value = arguments[3] === undefined ? 0 : arguments[3];
	
	    _classCallCheck(this, Step);
	
	    //Object.assign(this,{min,max,step});
	    //Cannot use Object.assign because not supported in Safari.
	    //I would expect for Babel to take care of this but it is not.
	    this.min = min;
	    this.max = max;
	    this.step = step;
	    this.value = value;
	    this.changed = false;
	    this.oldValue = false;
	    this.update(this.value);
	  }
	
	  _createClass(Step, {
	    update: {
	
	      /**
	        Update with a new value. The value will be auto-adjusted to fit the min/max/step.
	        @param {number} value
	      */
	
	      value: function update(value) {
	        if (this.step) {
	          // this.value = math.clip(Math.round(value / (this.step)) * this.step, this.min,this.max);
	          this.value = math.clip(Math.round((value - this.min) / this.step) * this.step + this.min, this.min, this.max);
	        } else {
	          this.value = math.clip(value, this.min, this.max);
	        }
	        if (this.oldValue !== this.value) {
	          this.oldValue = this.value;
	          this.changed = true;
	        } else {
	          this.changed = false;
	        }
	        return this.value;
	      }
	    },
	    updateNormal: {
	
	      /**
	        Update with a normalized value 0-1.
	        @param {number} value
	      */
	
	      value: function updateNormal(value) {
	        this.value = math.scale(value, 0, 1, this.min, this.max);
	        return this.update(this.value);
	      }
	    },
	    normalized: {
	
	      /**
	        Get a normalized version of this.value . Not settable.
	      */
	
	      get: function () {
	        return math.normalize(this.value, this.min, this.max);
	      }
	    }
	  });
	
	  return Step;
	})();
	
	module.exports = Step;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	"use strict";
	
	var math = _interopRequire(__webpack_require__(5));
	
	var ToggleModel = _interopRequire(__webpack_require__(13));
	
	/*
	how to use :
	
	dial.interaction = new Handle('radial','relative',this.width,this.height);
	// dial.interaction.mode = 'relative'
	// dial.interaction.direction = 'radial'
	
	on click:
	dial.interaction.anchor = this.mouse;
	
	on move:
	dial.interaction.update(this.mouse);
	
	console.log( dial.interaction.value ); should be a normalized value.
	
	*/
	
	/*
	  absolute/relative are property: mode
	  radial/vertical/horizontal/2d are property: direction
	
	  plan :
	
	  if relative --
	  NO on click, get value offset between current value and click value.
	  NO on move, use click value - offset
	  INSTEAD
	  use delta -- bc vertical motion on dial is impossible otherwise
	  also allow to set sensitivity
	
	*/
	
	var Handle = exports.Handle = (function () {
	  function Handle() {
	    var mode = arguments[0] === undefined ? "absolute" : arguments[0];
	    var direction = arguments[1] === undefined ? "vertical" : arguments[1];
	    var xbound = arguments[2] === undefined ? [0, 100] : arguments[2];
	    var ybound = arguments[3] === undefined ? [0, 100] : arguments[3];
	
	    _classCallCheck(this, Handle);
	
	    this.mode = mode;
	    this.direction = direction;
	    this.previous = 0;
	    this.value = 0;
	    this.sensitivity = 1;
	    this.resize(xbound, ybound);
	  }
	
	  _createClass(Handle, {
	    resize: {
	      value: function resize(xbound, ybound) {
	        this.boundary = {
	          min: {
	            x: xbound[0],
	            y: ybound[0]
	          },
	          max: {
	            x: xbound[1],
	            y: ybound[1]
	          },
	          center: {
	            x: (xbound[1] - xbound[0]) / 2 + xbound[0],
	            y: (ybound[1] - ybound[0]) / 2 + ybound[0]
	          }
	        };
	      }
	    },
	    anchor: {
	      set: function (mouse) {
	        this._anchor = this.convertPositionToValue(mouse);
	      },
	      get: function () {
	        return this._anchor;
	      }
	    },
	    update: {
	      value: function update(mouse) {
	        if (this.mode === "relative") {
	          var increment = this.convertPositionToValue(mouse) - this.anchor;
	          if (Math.abs(increment) > 0.5) {
	            increment = 0;
	          }
	          this.anchor = mouse;
	          this.value = this.value + increment * this.sensitivity;
	        } else {
	          this.value = this.convertPositionToValue(mouse);
	        }
	        this.value = math.clip(this.value, 0, 1);
	      }
	    },
	    convertPositionToValue: {
	      value: function convertPositionToValue(current) {
	        switch (this.direction) {
	          case "radial":
	            var position = math.toPolar(current.x - this.boundary.center.x, current.y - this.boundary.center.y);
	            position = position.angle / (Math.PI * 2);
	            position = (position - 0.25 + 1) % 1;
	            return position;
	          case "vertical":
	            return math.scale(current.y, this.boundary.min.y, this.boundary.max.y, 0, 1);
	          case "horizontal":
	            return math.scale(current.x, this.boundary.min.x, this.boundary.max.x, 0, 1);
	        }
	      }
	    }
	  });
	
	  return Handle;
	})();
	
	var Button = exports.Button = (function () {
	  function Button() {
	    var mode = arguments[0] === undefined ? "button" : arguments[0];
	
	    _classCallCheck(this, Button);
	
	    this.mode = mode;
	    this.state = new ToggleModel();
	    this.paintbrush = false;
	  }
	
	  _createClass(Button, {
	    click: {
	      value: function click() {
	        switch (this.mode) {
	          case "impulse":
	            this.state.on();
	            if (this.timeout) {
	              clearTimeout(this.timeout);
	            }
	            this.timeout = setTimeout(this.state.off.bind(this), 30);
	            this.emit("change", this.state);
	            break;
	          case "button":
	            this.turnOn();
	            this.emit("change", this.state);
	            break;
	          case "aftertouch":
	            this.position = {
	              x: math.clip(this.mouse.x / this.width, 0, 1),
	              y: math.clip(1 - this.mouse.y / this.height, 0, 1)
	            };
	            this.turnOn();
	            this.emit("change", {
	              state: this.state,
	              x: this.position.x,
	              y: this.position.y });
	            break;
	          case "toggle":
	            this.flip();
	            this.emit("change", this.state);
	            break;
	        }
	      }
	    },
	    move: {
	      value: function move() {
	        if (this.mode === "aftertouch") {
	          this.position = {
	            x: math.clip(this.mouse.x / this.width, 0, 1),
	            y: math.clip(1 - this.mouse.y / this.height, 0, 1)
	          };
	          this.emit("change", {
	            state: this.state,
	            x: this.position.x,
	            y: this.position.y });
	          this.render();
	        }
	      }
	    },
	    release: {
	      value: function release() {
	        switch (this.mode) {
	          case "button":
	            this.turnOff();
	            this.emit("change", this.state);
	            break;
	          case "aftertouch":
	            this.turnOff();
	            this.position = {
	              x: this.mouse.x / this.width,
	              y: 1 - this.mouse.y / this.height
	            };
	            this.emit("change", {
	              state: this.state,
	              x: this.position.x,
	              y: this.position.y });
	            break;
	        }
	      }
	    }
	  });
	
	  return Button;
	})();

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var Toggle = (function () {
	  function Toggle(state) {
	    _classCallCheck(this, Toggle);
	
	    this.state = state || false;
	  }
	
	  _createClass(Toggle, {
	    flip: {
	      value: function flip(state) {
	        if (state || state === false) {
	          this.state = state;
	        } else {
	          this.state = !this.state;
	        }
	      }
	    },
	    on: {
	      value: function on() {
	        this.state = true;
	      }
	    },
	    off: {
	      value: function off() {
	        this.state = false;
	      }
	    }
	  });
	
	  return Toggle;
	})();
	
	module.exports = Toggle;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var svg = __webpack_require__(4);
	var Interface = __webpack_require__(6);
	var Step = __webpack_require__(11);
	
	var Interaction = _interopRequireWildcard(__webpack_require__(12));
	
	/**
	* Slider
	*
	* @description Horizontal or vertical slider with settable interaction modes.
	*
	* @demo <span nexus-ui="slider" step=0.2></span>
	*
	* @example
	* var slider = new Nexus.Slider('#target')
	*
	* @example
	* var slider = new Nexus.Slider('#target',{
	*     'size': [120,20],
	*     'mode': 'relative',  // 'relative' or 'absolute'
	*     'min': 0,
	*     'max': 1,
	*     'step': 0,
	*     'value': 0
	* })
	*
	* @output
	* change
	* Fires when the interface's value changes. <br>
	* Event data: <i>number</i> The number value of the interface.
	*
	* @outputexample
	* slider.on('change',function(v) {
	*   console.log(v);
	* })
	*
	*
	*/
	
	var Slider = (function (_Interface) {
	  function Slider() {
	    _classCallCheck(this, Slider);
	
	    var options = ["min", "max", "value"];
	
	    var defaults = {
	      size: [120, 20],
	      mode: "relative", // 'relative' or 'absolute'
	      min: 0,
	      max: 1,
	      step: 0,
	      value: 0
	    };
	
	    _get(Object.getPrototypeOf(Slider.prototype), "constructor", this).call(this, arguments, options, defaults);
	
	    this.orientation = "vertical"; // This will change automatically to 'horizontal'if the interface is wider than it is tall.
	
	    this._value = new Step(this.settings.min, this.settings.max, this.settings.step, this.settings.value);
	
	    this.position = new Interaction.Handle(this.settings.mode, this.orientation, [0, this.width], [this.height, 0]);
	    this.position.value = this._value.normalized;
	
	    this.init();
	
	    this.position.direction = this.orientation;
	
	    this.emit("change", this.value);
	  }
	
	  _inherits(Slider, _Interface);
	
	  _createClass(Slider, {
	    buildInterface: {
	      value: function buildInterface() {
	
	        this.bar = svg.create("rect");
	        this.fillbar = svg.create("rect");
	        this.knob = svg.create("circle");
	
	        this.element.appendChild(this.bar);
	        this.element.appendChild(this.fillbar);
	        this.element.appendChild(this.knob);
	      }
	    },
	    sizeInterface: {
	      value: function sizeInterface() {
	
	        if (this.width < this.height) {
	          this.orientation = "vertical";
	        } else {
	          this.orientation = "horizontal";
	        }
	
	        if (this.position) {
	          this.position.resize([0, this.width], [this.height, 0]);
	        }
	
	        var x = undefined,
	            y = undefined,
	            w = undefined,
	            h = undefined,
	            barOffset = undefined,
	            cornerRadius = undefined;
	        this.knobData = {
	          level: 0,
	          r: 0
	        };
	
	        if (this.orientation === "vertical") {
	          this.thickness = this.width / 2;
	          x = this.width / 2;
	          y = 0;
	          w = this.thickness;
	          h = this.height;
	          this.knobData.r = this.thickness * 0.8;
	          this.knobData.level = h - this.knobData.r - this.normalized * (h - this.knobData.r * 2);
	          barOffset = "translate(" + this.thickness * -1 / 2 + ",0)";
	          cornerRadius = w / 2;
	        } else {
	          this.thickness = this.height / 2;
	          x = 0;
	          y = this.height / 2;
	          w = this.width;
	          h = this.thickness;
	          this.knobData.r = this.thickness * 0.8;
	          this.knobData.level = this.normalized * (w - this.knobData.r * 2) + this.knobData.r;
	          barOffset = "translate(0," + this.thickness * -1 / 2 + ")";
	          cornerRadius = h / 2;
	        }
	
	        this.bar.setAttribute("x", x);
	        this.bar.setAttribute("y", y);
	        this.bar.setAttribute("transform", barOffset);
	        this.bar.setAttribute("rx", cornerRadius); // corner radius
	        this.bar.setAttribute("ry", cornerRadius);
	        this.bar.setAttribute("width", w);
	        this.bar.setAttribute("height", h);
	
	        if (this.orientation === "vertical") {
	          this.fillbar.setAttribute("x", x);
	          this.fillbar.setAttribute("y", this.knobData.level);
	          this.fillbar.setAttribute("width", w);
	          this.fillbar.setAttribute("height", h - this.knobData.level);
	        } else {
	          this.fillbar.setAttribute("x", 0);
	          this.fillbar.setAttribute("y", y);
	          this.fillbar.setAttribute("width", this.knobData.level);
	          this.fillbar.setAttribute("height", h);
	        }
	        this.fillbar.setAttribute("transform", barOffset);
	        this.fillbar.setAttribute("rx", cornerRadius);
	        this.fillbar.setAttribute("ry", cornerRadius);
	
	        if (this.orientation === "vertical") {
	          this.knob.setAttribute("cx", x);
	          this.knob.setAttribute("cy", this.knobData.level);
	        } else {
	          this.knob.setAttribute("cx", this.knobData.level);
	          this.knob.setAttribute("cy", y);
	        }
	        this.knob.setAttribute("r", this.knobData.r);
	      }
	    },
	    colorInterface: {
	      value: function colorInterface() {
	        this.bar.setAttribute("fill", this.colors.fill);
	        this.fillbar.setAttribute("fill", this.colors.accent);
	        this.knob.setAttribute("fill", this.colors.accent);
	      }
	    },
	    render: {
	      value: function render() {
	        if (!this.clicked) {
	          this.knobData.r = this.thickness * 0.75;
	        }
	        this.knob.setAttribute("r", this.knobData.r);
	
	        if (this.orientation === "vertical") {
	          this.knobData.level = this.knobData.r + this._value.normalized * (this.height - this.knobData.r * 2);
	          this.knob.setAttribute("cy", this.height - this.knobData.level);
	          this.fillbar.setAttribute("y", this.height - this.knobData.level);
	          this.fillbar.setAttribute("height", this.knobData.level);
	        } else {
	          this.knobData.level = this._value.normalized * (this.width - this.knobData.r * 2) + this.knobData.r;
	          this.knob.setAttribute("cx", this.knobData.level);
	          this.fillbar.setAttribute("x", 0);
	          this.fillbar.setAttribute("width", this.knobData.level);
	        }
	      }
	    },
	    click: {
	      value: function click() {
	        this.knobData.r = this.thickness * 0.9;
	        this.position.anchor = this.mouse;
	        this.move();
	      }
	    },
	    move: {
	      value: function move() {
	        if (this.clicked) {
	          this.position.update(this.mouse);
	          this._value.updateNormal(this.position.value);
	          this.emit("change", this._value.value);
	          this.render();
	        }
	      }
	    },
	    release: {
	      value: function release() {
	        this.render();
	      }
	    },
	    normalized: {
	      get: function () {
	        return this._value.normalized;
	      }
	    },
	    value: {
	
	      /**
	      The slider's current value. If set manually, will update the interface and trigger the output event.
	      @type {number}
	      @example slider.value = 10;
	      */
	
	      get: function () {
	        return this._value.value;
	      },
	      set: function (v) {
	        this._value.update(v);
	        this.position.value = this._value.normalized;
	        this.emit("change", this._value.value);
	        this.render();
	      }
	    },
	    min: {
	
	      /**
	      Lower limit of the sliders's output range
	      @type {number}
	      @example slider.min = 1000;
	      */
	
	      get: function () {
	        return this._value.min;
	      },
	      set: function (v) {
	        this._value.min = v;
	      }
	    },
	    max: {
	
	      /**
	      Upper limit of the slider's output range
	      @type {number}
	      @example slider.max = 1000;
	      */
	
	      get: function () {
	        return this._value.max;
	      },
	      set: function (v) {
	        this._value.max = v;
	      }
	    },
	    step: {
	
	      /**
	      The increment that the slider's value changes by.
	      @type {number}
	      @example slider.step = 5;
	      */
	
	      get: function () {
	        return this._value.step;
	      },
	      set: function (v) {
	        this._value.step = v;
	      }
	    },
	    mode: {
	
	      /**
	      Absolute mode (slider's value jumps to mouse click position) or relative mode (mouse drag changes value relative to its current position). Default: "relative".
	      @type {string}
	      @example slider.mode = "relative";
	      */
	
	      get: function () {
	        return this.position.mode;
	      },
	      set: function (v) {
	        this.position.mode = v;
	      }
	    }
	  });
	
	  return Slider;
	})(Interface);
	
	module.exports = Slider;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var svg = __webpack_require__(4);
	var ToggleModel = __webpack_require__(13);
	var Interface = __webpack_require__(6);
	
	/**
	* Toggle
	*
	* @description Binary switch
	*
	* @demo <span nexus-ui="toggle"></span>
	*
	* @example
	* var toggle = new Nexus.Toggle('#target')
	*
	* @example
	* var toggle = new Nexus.Toggle('#target',{
	*     'size': [40,20],
	*     'state': false
	* })
	*
	* @output
	* change
	* Fires any time the interface's value changes. <br>
	* Parameter: The boolean state of the interface.
	*
	* @outputexample
	* toggle.on('change',function(v) {
	*   console.log(v);
	* })
	*
	*
	*/
	
	var Toggle = (function (_Interface) {
	  function Toggle() {
	    _classCallCheck(this, Toggle);
	
	    var options = ["value"];
	
	    var defaults = {
	      size: [40, 20],
	      target: false,
	      state: false
	    };
	
	    _get(Object.getPrototypeOf(Toggle.prototype), "constructor", this).call(this, arguments, options, defaults);
	
	    this._state = new ToggleModel(this.settings.state);
	
	    this.init();
	  }
	
	  _inherits(Toggle, _Interface);
	
	  _createClass(Toggle, {
	    buildInterface: {
	      value: function buildInterface() {
	
	        this.bar = svg.create("rect");
	        this.knob = svg.create("circle");
	        this.element.appendChild(this.bar);
	        this.element.appendChild(this.knob);
	      }
	    },
	    sizeInterface: {
	      value: function sizeInterface() {
	
	        if (this.height < this.width / 2) {
	          this.knobSize = this.height / 2;
	        } else {
	          this.knobSize = this.width / 4;
	        }
	
	        this.bar.setAttribute("x", this.width / 2 - this.knobSize * 1.5);
	        this.bar.setAttribute("y", this.height / 2 - this.knobSize / 2);
	        this.bar.setAttribute("rx", this.knobSize / 2);
	        this.bar.setAttribute("ry", this.knobSize / 2);
	        this.bar.setAttribute("width", this.knobSize * 3);
	        this.bar.setAttribute("height", this.knobSize);
	
	        this.knob.setAttribute("cx", this.width / 2 - this.knobSize);
	        this.knob.setAttribute("cy", this.height / 2);
	        this.knob.setAttribute("r", this.knobSize);
	      }
	    },
	    colorInterface: {
	      value: function colorInterface() {
	        this.knob.setAttribute("fill", this.colors.accent);
	        this.render();
	      }
	    },
	    render: {
	      value: function render() {
	        if (!this.state) {
	          this.knob.setAttribute("cx", this.width / 2 - this.knobSize);
	          this.bar.setAttribute("fill", this.colors.fill);
	        } else {
	          this.knob.setAttribute("cx", this.width / 2 + this.knobSize);
	          this.bar.setAttribute("fill", this.colors.accent);
	        }
	      }
	    },
	    click: {
	      value: function click() {
	        this.flip();
	        this.render();
	        this.emit("change", this.state);
	      }
	    },
	    state: {
	
	      /**
	      Whether the toggle is currently on or off. Setting this property will update the toggle interface and trigger the output event.
	      @type {boolean}
	      @example toggle.state = false;
	      */
	
	      get: function () {
	        return this._state.state;
	      },
	      set: function (value) {
	        this._state.flip(value);
	        this.emit("change", this.state);
	        this.render();
	      }
	    },
	    flip: {
	
	      /**
	      * Switch the toggle state to its opposite state
	      * @example
	      * toggle.flip();
	      */
	
	      value: function flip() {
	        this._state.flip();
	        this.render();
	      }
	    }
	  });
	
	  return Toggle;
	})(Interface);
	
	module.exports = Toggle;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var svg = __webpack_require__(4);
	var ButtonTemplate = __webpack_require__(17);
	
	/**
	* Button
	*
	* @description Circular button with optional aftertouch.
	*
	* @demo <span nexus-ui="button"></span>
	*
	* @example
	* var button = new Nexus.Button('#target')
	*
	* @example
	* var button = new Nexus.Button('#target',{
	*   'size': [80,80],
	*   'mode': 'aftertouch',
	*   'state': false
	* })
	*
	* @output
	* change
	* Fires any time the interface's value changes. <br>
	* In <b>button mode</b>, <b>toggle mode</b>, and <b>impulse mode</b>, the output data is a boolean describing the state of the button.<br>
	* In <b>aftertouch mode</b>, the output data is an object containing x (0-1) and y (0-1) positions of aftertouch.
	*
	* @outputexample
	* button.on('change',function(v) {
	*   // v is the value of the button
	*   console.log(v);
	* })
	*
	*/
	
	var Button = (function (_ButtonTemplate) {
	  function Button() {
	    _classCallCheck(this, Button);
	
	    var options = ["mode"];
	
	    var defaults = {
	      size: [80, 80],
	      mode: "aftertouch", // button, aftertouch, impulse, toggle
	      state: false
	    };
	
	    _get(Object.getPrototypeOf(Button.prototype), "constructor", this).call(this, arguments, options, defaults);
	
	    /**
	    * Interaction mode: supports "button", "aftertouch", "impulse", or "toggle"
	    * @type {string}
	    * @example button.mode = 'toggle';
	    */
	    this.mode = this.settings.mode;
	
	    this.init();
	    this.render();
	  }
	
	  _inherits(Button, _ButtonTemplate);
	
	  _createClass(Button, {
	    buildInterface: {
	      value: function buildInterface() {
	        this.pad = svg.create("circle");
	        this.element.appendChild(this.pad);
	
	        this.interactionTarget = this.pad;
	
	        // only used if in 'aftertouch' mode
	        this.defs = svg.create("defs");
	        this.element.appendChild(this.defs);
	
	        this.gradient = svg.radialGradient(this.defs, 2);
	
	        this.gradient.stops[0].setAttribute("offset", "30%");
	
	        this.gradient.stops[1].setAttribute("offset", "100%");
	      }
	    },
	    sizeInterface: {
	      value: function sizeInterface() {
	
	        this.pad.setAttribute("cx", this.width / 2);
	        this.pad.setAttribute("cy", this.height / 2);
	        this.pad.setAttribute("r", Math.min(this.width, this.height) / 2 - this.width / 40);
	        this.pad.setAttribute("stroke-width", this.width / 20);
	      }
	    },
	    colorInterface: {
	      value: function colorInterface() {
	
	        this.gradient.stops[0].setAttribute("stop-color", this.colors.accent);
	        this.gradient.stops[1].setAttribute("stop-color", this.colors.fill);
	        this.render();
	      }
	    },
	    render: {
	
	      /*
	      * Update the visual interface using its current state
	      *
	      * @example
	      * button.render();
	      */
	
	      value: function render() {
	        if (!this.state) {
	          this.pad.setAttribute("fill", this.colors.fill);
	          this.pad.setAttribute("stroke", this.colors.mediumLight);
	        } else {
	          if (this.mode === "aftertouch") {
	            this.pad.setAttribute("stroke", "url(#" + this.gradient.id + ")");
	            this.gradient.element.setAttribute("cx", this.position.x * 100 + "%");
	            this.gradient.element.setAttribute("cy", (1 - this.position.y) * 100 + "%");
	          } else {
	            this.pad.setAttribute("stroke", this.colors.accent);
	          }
	          this.pad.setAttribute("fill", this.colors.accent);
	        }
	      }
	    }
	  });
	
	  return Button;
	})(ButtonTemplate);
	
	module.exports = Button;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var svg = __webpack_require__(4);
	var math = __webpack_require__(5);
	var ToggleModel = __webpack_require__(13);
	var Interface = __webpack_require__(6);
	
	/**
	Button Template
	*/
	
	var ButtonTemplate = (function (_Interface) {
	  function ButtonTemplate(args, options, defaults) {
	    _classCallCheck(this, ButtonTemplate);
	
	    _get(Object.getPrototypeOf(ButtonTemplate.prototype), "constructor", this).call(this, args, options, defaults);
	
	    this.mode = this.settings.mode || "button";
	
	    this.position = {
	      x: 0,
	      y: 0
	    };
	
	    this._state = new ToggleModel(this.settings.state);
	  }
	
	  _inherits(ButtonTemplate, _Interface);
	
	  _createClass(ButtonTemplate, {
	    buildInterface: {
	      value: function buildInterface() {
	        this.pad = svg.create("circle");
	        this.pad.setAttribute("fill", "#d18");
	        this.pad.setAttribute("stroke", "#d18");
	        this.pad.setAttribute("stroke-width", 4);
	
	        this.element.appendChild(this.pad);
	
	        this.interactionTarget = this.pad;
	
	        this.sizeInterface();
	      }
	    },
	    sizeInterface: {
	      value: function sizeInterface() {
	        this.pad.setAttribute("cx", this.width / 2);
	        this.pad.setAttribute("cy", this.height / 2);
	        this.pad.setAttribute("r", Math.min(this.width, this.height) / 2 - 2);
	      }
	    },
	    render: {
	      value: function render() {
	        if (!this.state) {
	          this.pad.setAttribute("fill", this.colors.fill);
	          this.pad.setAttribute("stroke", this.colors.mediumLight);
	        } else {
	          this.pad.setAttribute("fill", this.colors.accent);
	          this.pad.setAttribute("stroke", this.colors.accent);
	        }
	      }
	    },
	    down: {
	      value: function down(paintbrush) {
	        switch (this.mode) {
	          case "impulse":
	            this.turnOn();
	            if (this.timeout) {
	              clearTimeout(this.timeout);
	            }
	            this.timeout = setTimeout(this.turnOff.bind(this), 30);
	            //    this.emit('change',this.state);
	            break;
	          case "button":
	            this.turnOn();
	            //    this.emit('change',this.state);
	            break;
	          case "aftertouch":
	            this.position = {
	              x: math.clip(this.mouse.x / this.width, 0, 1),
	              y: math.clip(1 - this.mouse.y / this.height, 0, 1)
	            };
	            this.turnOn();
	            //    this.emit('change',{
	            //      state: this.state,
	            //      x: this.position.x,
	            //      y: this.position.y,
	            //    });
	            break;
	          case "toggle":
	            this.flip(paintbrush);
	            //    this.emit('change',this.state);
	            break;
	        }
	      }
	    },
	    bend: {
	      value: function bend(mouse) {
	        if (this.mode === "aftertouch") {
	          this.mouse = mouse || this.mouse;
	          this.position = {
	            x: math.clip(this.mouse.x / this.width, 0, 1),
	            y: math.clip(1 - this.mouse.y / this.height, 0, 1)
	          };
	          this.emit("change", {
	            state: this.state,
	            x: this.position.x,
	            y: this.position.y });
	          this.render();
	        }
	      }
	    },
	    up: {
	      value: function up() {
	        switch (this.mode) {
	          case "button":
	            this.turnOff();
	            //  this.emit('change',this.state);
	            break;
	          case "aftertouch":
	            this.turnOff();
	            this.position = {
	              x: math.clip(this.mouse.x / this.width, 0, 1),
	              y: math.clip(1 - this.mouse.y / this.height, 0, 1)
	            };
	            //  this.emit('change',{
	            //    state: this.state,
	            //    x: this.position.x,
	            //    y: this.position.y,
	            //  });
	            break;
	        }
	      }
	    },
	    click: {
	
	      /* overwritable interaction handlers */
	
	      value: function click() {
	        this.down();
	      }
	    },
	    move: {
	      value: function move() {
	        this.bend();
	      }
	    },
	    release: {
	      value: function release() {
	        this.up();
	      }
	    },
	    state: {
	
	      /**
	      Whether the button is on (pressed) or off (not pressed)
	      @type {boolean}
	      @example button.state = true;
	      */
	
	      get: function () {
	        return this._state.state;
	      },
	      set: function (value) {
	        this._state.flip(value);
	        if (this.mode === "aftertouch") {
	          this.emit("change", {
	            state: this.state,
	            x: this.position.x,
	            y: this.position.y });
	        } else {
	          this.emit("change", this.state);
	        }
	        this.render();
	      }
	    },
	    flip: {
	
	      /**
	      Change the button to its alternate state (off=>on, on=>off), or flip it to a specified state.
	      @param value {boolean} (Optional) State to flip to.
	      @example button.flip();
	      */
	
	      value: function flip(value) {
	        this._state.flip(value);
	        if (this.mode === "aftertouch") {
	          this.emit("change", {
	            state: this.state,
	            x: this.position.x,
	            y: this.position.y });
	        } else {
	          this.emit("change", this.state);
	        }
	        this.render();
	      }
	    },
	    turnOn: {
	
	      /**
	      Turn the button's state to true.
	      @example button.turnOn();
	      */
	
	      value: function turnOn(emitting) {
	        this._state.on();
	        if (emitting !== false) {
	          if (this.mode === "aftertouch") {
	            this.emit("change", {
	              state: this.state,
	              x: this.position.x,
	              y: this.position.y });
	          } else {
	            this.emit("change", this.state);
	          }
	        }
	        this.render();
	      }
	    },
	    turnOff: {
	
	      /**
	      Turn the button's state to false.
	      @example button.turnOff();
	      */
	
	      value: function turnOff(emitting) {
	        this._state.off();
	        if (emitting !== false) {
	          if (this.mode === "aftertouch") {
	            this.emit("change", {
	              state: this.state,
	              x: this.position.x,
	              y: this.position.y });
	          } else {
	            this.emit("change", this.state);
	          }
	        }
	        this.render();
	      }
	    }
	  });
	
	  return ButtonTemplate;
	})(Interface);
	
	module.exports = ButtonTemplate;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var ButtonTemplate = __webpack_require__(17);
	
	/**
	* TextButton
	*
	* @description Text button
	*
	* @demo <span nexus-ui="textButton"></span>
	*
	* @example
	* var textbutton = new Nexus.TextButton('#target')
	*
	* @example
	* var textbutton = new Nexus.TextButton('#target',{
	*     'size': [150,50],
	*     'state': false,
	*     'text': 'Play',
	*     'alternate': false
	* })
	*
	* @output
	* change
	* Fires any time the interface's value changes. <br>
	* The event data is a <i>string</i> of the text on the button at the moment it was clicked.
	*
	* @outputexample
	* textbutton.on('change',function(v) {
	*   console.log(v);
	* })
	*
	*/
	
	var TextButton = (function (_ButtonTemplate) {
	  function TextButton() {
	    _classCallCheck(this, TextButton);
	
	    var options = ["value"];
	
	    var defaults = {
	      size: [150, 50],
	      state: false,
	      text: "Play",
	      alternate: false
	    };
	
	    _get(Object.getPrototypeOf(TextButton.prototype), "constructor", this).call(this, arguments, options, defaults);
	
	    this._text = this.settings.text;
	    this._alternateText = this.settings.alternate;
	
	    this.init();
	    this.render();
	
	    this.state = this.settings.state;
	  }
	
	  _inherits(TextButton, _ButtonTemplate);
	
	  _createClass(TextButton, {
	    buildFrame: {
	      value: function buildFrame() {
	
	        this.element = document.createElement("div");
	        this.parent.appendChild(this.element);
	
	        this.textElement = document.createElement("div");
	        this.textElement.innerHTML = this._text;
	        this.element.appendChild(this.textElement);
	      }
	    },
	    buildInterface: {
	      value: function buildInterface() {}
	    },
	    colorInterface: {
	      value: function colorInterface() {
	        this.element.style.color = this.colors.dark;
	        this.render();
	      }
	    },
	    sizeInterface: {
	      value: function sizeInterface() {
	        var textsize = this.height / 3;
	        var textsize2 = this.width / (this._text.length + 2);
	        textsize = Math.min(textsize, textsize2);
	        if (this.alternateText) {
	          var textsize3 = this.width / (this.alternateText.length + 2);
	          textsize = Math.min(textsize, textsize3);
	        }
	        var styles = "width: " + this.width + "px;";
	        styles += "height: " + this.height + "px;";
	        styles += "padding: " + (this.height - textsize) / 2 + "px 0px;";
	        styles += "box-sizing: border-box;";
	        styles += "text-align: center;";
	        styles += "font-family: inherit;";
	        styles += "font-weight: 700;";
	        styles += "opacity: 1;";
	        styles += "font-size:" + textsize + "px;";
	        this.textElement.style.cssText = styles;
	        this.render();
	      }
	    },
	    render: {
	      value: function render() {
	        if (!this.state) {
	          this.element.style.backgroundColor = this.colors.fill;
	          this.textElement.style.color = this.colors.dark;
	          this.textElement.innerHTML = this._text;
	        } else {
	          this.element.style.backgroundColor = this.colors.accent;
	          this.textElement.style.color = this.colors.fill;
	          if (this.alternateText) {
	            this.textElement.innerHTML = this._alternateText;
	          } else {
	            this.textElement.innerHTML = this._text;
	          }
	        }
	      }
	    },
	    alternateText: {
	
	      /**
	      The text to display when the button is in its "on" state. If set, this puts the button in "toggle" mode.
	      @type {String}
	      */
	
	      get: function () {
	        return this._alternateText;
	      },
	      set: function (text) {
	        if (text) {
	          this.mode = "toggle";
	        } else {
	          this.mode = "button";
	        }
	        this._alternateText = text;
	        this.render();
	      }
	    },
	    text: {
	
	      /**
	      The text to display. (If .alternateText exists, then this .text will only be displayed when the button is in its "off" state.)
	      @type {String}
	      */
	
	      get: function () {
	        return this._text;
	      },
	      set: function (text) {
	        this._text = text;
	        this.sizeInterface();
	        this.render();
	      }
	    }
	  });
	
	  return TextButton;
	})(ButtonTemplate);
	
	module.exports = TextButton;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	//let svg = require('../util/svg');
	var Interface = __webpack_require__(6);
	var Button = __webpack_require__(16);
	
	/**
	* RadioButton
	*
	* @description An array of buttons. By default, selecting one button will deselect all other buttons, but this can be customized using the API below.
	*
	* @demo <div nexus-ui="RadioButton"></div>
	*
	* @example
	* var radiobutton = new Nexus.RadioButton('#target')
	*
	* @example
	* var radiobutton = new Nexus.RadioButton('#target',{
	*   'size': [120,25],
	*   'numberOfButtons': 4,
	*   'active': -1
	* })
	*
	* @output
	* change
	* Fires any time the interface's value changes. <br>
	* The event data an <i>integer</i>, the index of the button that is currently on. If no button is selected, the value will be -1.
	*
	* @outputexample
	* radiobutton.on('change',function(v) {
	*   console.log(v);
	* })
	*
	*/
	
	var RadioButton = (function (_Interface) {
	  function RadioButton() {
	    _classCallCheck(this, RadioButton);
	
	    var options = ["value"];
	
	    var defaults = {
	      size: [120, 25],
	      numberOfButtons: 4,
	      active: -1
	    };
	
	    _get(Object.getPrototypeOf(RadioButton.prototype), "constructor", this).call(this, arguments, options, defaults);
	
	    this.buttons = [];
	    this._numberOfButtons = this.settings.numberOfButtons;
	    this.active = this.settings.active;
	
	    this.init();
	    this.render();
	  }
	
	  _inherits(RadioButton, _Interface);
	
	  _createClass(RadioButton, {
	    buildFrame: {
	      value: function buildFrame() {
	        this.element = document.createElement("div");
	        this.parent.appendChild(this.element);
	      }
	    },
	    buildInterface: {
	      value: function buildInterface() {
	
	        for (var i = 0; i < this._numberOfButtons; i++) {
	          var container = document.createElement("span");
	
	          var button = new Button(container, {
	            mode: "toggle",
	            component: true }, this.update.bind(this, i));
	
	          this.buttons.push(button);
	          this.element.appendChild(container);
	        }
	      }
	    },
	    sizeInterface: {
	      value: function sizeInterface() {
	
	        var buttonWidth = this.width / this._numberOfButtons;
	        var buttonHeight = this.height;
	
	        for (var i = 0; i < this._numberOfButtons; i++) {
	          this.buttons[i].resize(buttonWidth, buttonHeight);
	        }
	      }
	    },
	    colorInterface: {
	      value: function colorInterface() {
	        for (var i = 0; i < this._numberOfButtons; i++) {
	          this.buttons[i].colors = this.colors;
	          this.buttons[i].render();
	        }
	      }
	    },
	    update: {
	      value: function update(index) {
	        if (this.buttons[index].state) {
	          this.select(index);
	        } else {
	          this.deselect();
	        }
	        //  this.render();
	      }
	    },
	    render: {
	      value: function render() {
	        for (var i = 0; i < this.buttons.length; i++) {
	          if (i === this.active) {
	            this.buttons[i].turnOn(false);
	          } else {
	            this.buttons[i].turnOff(false);
	          }
	        }
	      }
	    },
	    select: {
	
	      /**
	      Select one button and deselect all other buttons.
	      @param index {number} The index of the button to select
	      */
	
	      value: function select(index) {
	        if (index >= 0 && index < this.buttons.length) {
	          this.active = index;
	          this.emit("change", this.active);
	          this.render();
	        }
	      }
	    },
	    deselect: {
	
	      /**
	      Deselect all buttons.
	      */
	
	      value: function deselect() {
	        this.active = -1;
	        this.emit("change", this.active);
	        this.render();
	      }
	    },
	    numberOfButtons: {
	      get: function () {
	        return this._numberOfButtons;
	      },
	
	      /**
	       * Update how many buttons are in the interface
	       * @param  {number} buttons How many buttons are in the interface
	       */
	      set: function (buttons) {
	        this._numberOfButtons = buttons;
	        for (var i = 0; i < this.buttons.length; i++) {
	          this.buttons[i].destroy();
	        }
	        this.buttons = [];
	        //  for (let i=0;i<this.buttons.length;i++) {
	        //    this.buttons[i].destroy();
	        //  }
	        this.empty();
	        this.buildInterface();
	      }
	    }
	  });
	
	  return RadioButton;
	})(Interface);
	
	module.exports = RadioButton;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var Interface = __webpack_require__(6);
	var Step = __webpack_require__(11);
	var math = __webpack_require__(5);
	
	/**
	* Number
	*
	* @description Number interface which is controllable by dragging or typing.
	*
	* @demo <span nexus-ui="number"></span>
	*
	* @example
	* var number = new Nexus.Number('#target')
	*
	* @example
	* var number = new Nexus.Number('#target',{
	*   'size': [60,30],
	*   'value': 0,
	*   'min': 0,
	*   'max': 20000,
	*   'step': 1
	* })
	*
	* @output
	* change
	* Fires any time the interface's value changes. <br>
	* The event data is the number value of the interface.
	*
	* @outputexample
	* number.on('change',function(v) {
	*   console.log(v);
	* })
	*
	*
	*/
	
	var Number = (function (_Interface) {
	  function Number() {
	    _classCallCheck(this, Number);
	
	    var options = ["value"];
	
	    var defaults = {
	      size: [60, 30],
	      value: 0,
	      min: 0,
	      max: 20000,
	      step: 1
	    };
	
	    _get(Object.getPrototypeOf(Number.prototype), "constructor", this).call(this, arguments, options, defaults);
	
	    this._value = new Step(this.settings.min, this.settings.max, this.settings.step, this.settings.value);
	
	    /*
	    Default: 2. How many decimal places to clip the number's visual rendering to. This does not affect number's actual value output -- for that, set the step property to .01, .1, or 1.
	    @type {number}
	    @example number.decimalPlaces = 2;
	    */
	    this.decimalPlaces = 2;
	    this.actual = 0;
	
	    this.max = this._value.max;
	
	    this.min = this._value.min;
	
	    this.step = this._value.step;
	
	    this.init();
	    this.render();
	  }
	
	  _inherits(Number, _Interface);
	
	  _createClass(Number, {
	    buildFrame: {
	      value: function buildFrame() {
	        this.element = document.createElement("input");
	        this.element.type = "text";
	
	        this.element.addEventListener("blur", (function () {
	          this.element.style.backgroundColor = this.colors.fill;
	          this.element.style.color = this.colors.dark;
	          if (this.element.value !== this.value) {
	            this.value = parseFloat(this.element.value);
	            this.render();
	          }
	        }).bind(this));
	
	        this.element.addEventListener("keydown", (function (e) {
	          if (e.which < 48 || e.which > 57) {
	            if (e.which !== 189 && e.which !== 190 && e.which !== 8) {
	              e.preventDefault();
	            }
	          }
	          if (e.which === 13) {
	            this.element.blur();
	            this.value = this.element.value;
	            this.emit("change", this.value);
	            this.render();
	          }
	        }).bind(this));
	
	        this.parent.appendChild(this.element);
	      }
	    },
	    sizeInterface: {
	      value: function sizeInterface() {
	
	        this._minDimension = Math.min(this.width, this.height);
	
	        var styles = "width: " + this.width + "px;";
	        styles += "height: " + this.height + "px;";
	        styles += "background-color: #e7e7e7;";
	        styles += "color: #333;";
	        styles += "font-family: arial;";
	        styles += "font-weight: 500;";
	        styles += "font-size:" + this._minDimension / 2 + "px;";
	        //  styles += 'highlight: #d18;';
	        styles += "border: none;";
	        styles += "outline: none;";
	        styles += "padding: " + this._minDimension / 4 + "px " + this._minDimension / 4 + "px;";
	        styles += "box-sizing: border-box;";
	        styles += "userSelect: text;";
	        styles += "mozUserSelect: text;";
	        styles += "webkitUserSelect: text;";
	        this.element.style.cssText += styles;
	
	        // to add eventually
	        // var css = '#'+this.elementID+'::selection{ background-color: transparent }';
	
	        this.element.value = this.value;
	      }
	    },
	    colorInterface: {
	      value: function colorInterface() {
	        this.element.style.backgroundColor = this.colors.fill;
	        this.element.style.color = this.colors.dark;
	      }
	    },
	    render: {
	      value: function render() {
	
	        this.element.value = math.prune(this.value, this.decimalPlaces);
	      }
	    },
	    click: {
	      value: function click() {
	        this.hasMoved = false;
	        this.element.readOnly = true;
	        this.actual = this.value;
	        this.initial = { y: this.mouse.y };
	        this.changeFactor = math.invert(this.mouse.x / this.width);
	        console.log(this.changeFactor);
	      }
	    },
	    move: {
	      value: function move() {
	        this.hasMoved = true;
	        if (this.clicked) {
	
	          var newvalue = this.actual - (this.mouse.y - this.initial.y) * (math.clip(this.max - this.min, 0, 1000) / 200) * Math.pow(this.changeFactor, 2);
	          this.value = newvalue;
	
	          this.render();
	          if (this._value.changed) {
	            this.emit("change", this.value);
	          }
	        }
	      }
	    },
	    release: {
	      value: function release() {
	        if (!this.hasMoved) {
	          this.element.readOnly = false;
	          this.element.focus();
	          this.element.setSelectionRange(0, this.element.value.length);
	          this.element.style.backgroundColor = this.colors.accent;
	          this.element.style.color = this.colors.light;
	        } else {
	          document.body.focus();
	        }
	      }
	    },
	    link: {
	
	      /**
	      Connect this number interface to a dial or slider
	      @param {Interface} element Element to connect to.
	      @example number.link(slider)
	      */
	
	      value: function link(destination) {
	        var _this = this;
	
	        this.min = destination.min;
	        this.max = destination.max;
	        this.step = destination.step;
	        destination.on("change", function (v) {
	          _this.passiveUpdate(v);
	        });
	        this.on("change", function (v) {
	          destination.value = v;
	        });
	        this.value = destination.value;
	        /*  return {
	            listener1: listener1,
	            listener2: listener2,
	            destroy: () => {
	              listener1.remove() (or similar)
	              listener2.remove() (or similar)
	            }
	          } */
	      }
	    },
	    passiveUpdate: {
	      value: function passiveUpdate(v) {
	        this._value.update(v);
	        this.render();
	      }
	    },
	    value: {
	
	      /**
	      The interface's current value. If set manually, will update the interface and trigger the output event.
	      @type {number}
	      @example number.value = 10;
	      */
	
	      get: function () {
	        return this._value.value;
	      },
	      set: function (v) {
	        this._value.update(v);
	        this.emit("change", this.value);
	        this.render();
	      }
	    },
	    min: {
	
	      /**
	      Lower limit of the number's output range
	      @type {number}
	      @example number.min = 1000;
	      */
	
	      get: function () {
	        return this._value.min;
	      },
	      set: function (v) {
	        this._value.min = v;
	      }
	    },
	    max: {
	
	      /**
	      Upper limit of the number's output range
	      @type {number}
	      @example number.max = 1000;
	      */
	
	      get: function () {
	        return this._value.max;
	      },
	      set: function (v) {
	        this._value.max = v;
	      }
	    },
	    step: {
	
	      /**
	      The increment that the number's value changes by.
	      @type {number}
	      @example number.step = 5;
	      */
	
	      get: function () {
	        return this._value.step;
	      },
	      set: function (v) {
	        this._value.step = v;
	      }
	    }
	  });
	
	  return Number;
	})(Interface);
	
	module.exports = Number;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var Interface = __webpack_require__(6);
	
	/**
	* Select
	*
	* @description Dropdown menu
	*
	* @demo <span nexus-ui="select"></span>
	*
	* @example
	* var select = new Nexus.Select('#target')
	*
	* @example
	* var select = new Nexus.Select('#target',{
	*   'size': [100,30],
	*   'options': ['default','options']
	* })
	*
	* @output
	* change
	* Fires any time the interface's value changes. <br>
	* The event data is an object containing the text value of the selected option, as well as the numeric index of the selection.
	*
	* @outputexample
	* select.on('change',function(v) {
	*   console.log(v);
	* })
	*
	*
	*/
	
	var Select = (function (_Interface) {
	  function Select() {
	    _classCallCheck(this, Select);
	
	    var options = ["value"];
	
	    var defaults = {
	      size: [100, 30],
	      options: ["default", "options"]
	    };
	
	    _get(Object.getPrototypeOf(Select.prototype), "constructor", this).call(this, arguments, options, defaults);
	
	    this._selectedIndex = -1;
	    this._value = false;
	
	    this._options = this.settings.options;
	
	    this.init();
	    this.render();
	  }
	
	  _inherits(Select, _Interface);
	
	  _createClass(Select, {
	    buildFrame: {
	      value: function buildFrame() {
	        this.element = document.createElement("select");
	        this.element.style.fontSize = this.height / 2 + "px";
	        this.element.style.outline = "none";
	        this.element.style.highlight = "none";
	        this.element.style.width = this.width + "px";
	        this.element.style.height = this.height + "px";
	
	        this.boundRender = this.render.bind(this);
	
	        this.element.addEventListener("change", this.boundRender);
	
	        this.parent.appendChild(this.element);
	      }
	    },
	    attachListeners: {
	      value: function attachListeners() {}
	    },
	    buildInterface: {
	      value: function buildInterface() {
	
	        this.defineOptions();
	      }
	    },
	    colorInterface: {
	      value: function colorInterface() {
	        this.element.style.backgroundColor = this.colors.fill;
	        this.element.style.color = this.colors.dark;
	        this.element.style.border = "solid 0px " + this.colors.mediumLight;
	      }
	    },
	    render: {
	      value: function render() {
	
	        this._value = this.element.options[this.element.selectedIndex].text;
	        this._selectedIndex = this.element.selectedIndex;
	        this.emit("change", {
	          value: this._value,
	          index: this._selectedIndex
	        });
	      }
	    },
	    click: {
	      value: function click() {}
	    },
	    move: {
	      value: function move() {}
	    },
	    release: {
	      value: function release() {}
	    },
	    defineOptions: {
	
	      /**
	       * Update the list of options. This removes all existing options and creates a new list of options.
	       * @param  {array} options New array of options
	       */
	
	      value: function defineOptions(options) {
	        if (options) {
	          this._options = options;
	        }
	
	        for (var i = 0; i < this.element.options.length; i++) {
	          this.element.remove(i);
	        }
	
	        for (var i = 0; i < this._options.length; i++) {
	          this.element.options.add(new Option(this._options[i], i));
	        }
	      }
	    },
	    value: {
	
	      /**
	      The text of the option that is currently selected. If set, will update the interface and trigger the output event.
	      @type {String}
	      @example select.value = "sawtooth";
	      */
	
	      get: function () {
	        return this._value;
	      },
	      set: function (v) {
	        this._value = v;
	        for (var i = 0; i < this.element.options.length; i++) {
	          if (v === this.element.options[i].text) {
	            this.selectedIndex = i;
	            break;
	          }
	        }
	      }
	    },
	    selectedIndex: {
	
	      /**
	      The numeric index of the option that is currently selected. If set, will update the interface and trigger the output event.
	      @type {number}
	      @example select.selectedIndex = 2;
	      */
	
	      get: function () {
	        return this._selectedIndex;
	      },
	      set: function (v) {
	        this._selectedIndex = v;
	        this.element.selectedIndex = v;
	        this.render();
	      }
	    },
	    customDestroy: {
	      value: function customDestroy() {
	        this.element.removeEventListener("change", this.boundRender);
	      }
	    }
	  });
	
	  return Select;
	})(Interface);
	
	module.exports = Select;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var svg = __webpack_require__(4);
	var math = __webpack_require__(5);
	var Interface = __webpack_require__(6);
	var Step = __webpack_require__(11);
	
	var Interaction = _interopRequireWildcard(__webpack_require__(12));
	
	/**
	* Dial
	*
	*
	* @description Dial with radial or linear interaction.
	*
	* @demo <span nexus-ui="dial"></span>
	*
	* @example
	* var dial = new Nexus.Dial('#target')
	*
	* @example
	* var dial = new Nexus.Dial('#target',{
	*   'size': [75,75],
	*   'interaction': 'radial', // "radial", "vertical", or "horizontal"
	*   'mode': 'relative', // "absolute" or "relative"
	*   'min': 0,
	*   'max': 1,
	*   'step': 0,
	*   'value': 0
	* })
	*
	* @output
	* change
	* Fires any time the interface's value changes. <br>
	* The event data is the number value of the interface.
	*
	* @outputexample
	* dial.on('change',function(v) {
	*   console.log(v);
	* })
	*
	* @tutorial
	* Dial
	* ygGMxq
	*
	*/
	
	var Dial = (function (_Interface) {
	  function Dial() {
	    _classCallCheck(this, Dial);
	
	    var options = ["min", "max", "value"];
	
	    var defaults = {
	      size: [75, 75],
	      interaction: "radial", // radial, vertical, horizontal
	      mode: "relative", // absolute, relative
	      min: 0,
	      max: 1,
	      step: 0,
	      value: 0
	    };
	
	    _get(Object.getPrototypeOf(Dial.prototype), "constructor", this).call(this, arguments, options, defaults);
	
	    this.interaction = this.settings.interaction;
	
	    this._value = new Step(this.settings.min, this.settings.max, this.settings.step, this.settings.value);
	
	    this.position = new Interaction.Handle(this.settings.mode, this.interaction, [0, this.width], [this.height, 0]);
	
	    this.init();
	
	    this.value = this._value.value;
	
	    this.position.value = this._value.normalized;
	
	    this.previousAngle = false;
	
	    this.emit("change", this.value);
	  }
	
	  _inherits(Dial, _Interface);
	
	  _createClass(Dial, {
	    buildInterface: {
	      value: function buildInterface() {
	
	        this.background = svg.create("circle");
	        this.screw = svg.create("circle");
	        this.handle = svg.create("path");
	        this.handle2 = svg.create("path");
	        this.handleFill = svg.create("path");
	        this.handle2Fill = svg.create("path");
	        this.handleLine = svg.create("path");
	
	        this.element.appendChild(this.background);
	        this.element.appendChild(this.handle);
	        this.element.appendChild(this.handle2);
	        this.element.appendChild(this.handleFill);
	        this.element.appendChild(this.handle2Fill);
	        this.element.appendChild(this.handleLine);
	        this.element.appendChild(this.screw);
	      }
	    },
	    sizeInterface: {
	      value: function sizeInterface() {
	
	        this.position.resize([0, this.width], [this.height, 0]);
	
	        var center = {
	          x: this.width / 2,
	          y: this.height / 2
	        };
	
	        var diameter = Math.min(this.width, this.height);
	
	        this.background.setAttribute("cx", center.x);
	        this.background.setAttribute("cy", center.y);
	        this.background.setAttribute("r", diameter / 2 - diameter / 40);
	
	        this.screw.setAttribute("cx", center.x);
	        this.screw.setAttribute("cy", center.y);
	        this.screw.setAttribute("r", diameter / 12);
	
	        var value = this.value;
	
	        var handlePoints = {
	          start: Math.PI * 1.5,
	          end: math.clip(math.scale(value, 0, 0.5, Math.PI * 1.5, Math.PI * 0.5), Math.PI * 0.5, Math.PI * 1.5)
	        };
	        var handle2Points = {
	          start: Math.PI * 2.5,
	          end: math.clip(math.scale(value, 0.5, 1, Math.PI * 2.5, Math.PI * 1.5), Math.PI * 1.5, Math.PI * 2.5)
	        };
	
	        var handlePath = svg.arc(center.x, center.y, diameter / 2 - diameter / 40, handlePoints.start, handlePoints.end);
	        var handle2Path = svg.arc(center.x, center.y, diameter / 2 - diameter / 40, handle2Points.start, handle2Points.end);
	
	        this.handle.setAttribute("d", handlePath);
	        this.handle.setAttribute("stroke-width", diameter / 20);
	        this.handle.setAttribute("fill", "none");
	
	        this.handle2.setAttribute("d", handle2Path);
	        this.handle2.setAttribute("stroke-width", diameter / 20);
	        this.handle2.setAttribute("fill", "none");
	
	        handlePath += " L " + center.x + " " + center.y;
	
	        this.handleFill.setAttribute("d", handlePath);
	        this.handleFill.setAttribute("fill-opacity", "0.3");
	
	        handle2Path += " L " + center.x + " " + center.y;
	
	        this.handle2Fill.setAttribute("d", handle2Path);
	        this.handle2Fill.setAttribute("fill-opacity", "0.3");
	
	        var arcEndingA = undefined;
	        if (value < 0.5) {
	          arcEndingA = handlePoints.end;
	        } else {
	          arcEndingA = handle2Points.end;
	        }
	
	        var arcEndingX = center.x + Math.cos(arcEndingA) * (diameter / 2);
	        var arcEndingY = center.y + Math.sin(arcEndingA) * (diameter / 2) * -1;
	
	        this.handleLine.setAttribute("d", "M " + center.x + " " + center.y + " L " + arcEndingX + " " + arcEndingY);
	        this.handleLine.setAttribute("stroke-width", diameter / 20);
	      }
	    },
	    colorInterface: {
	      value: function colorInterface() {
	        this.background.setAttribute("fill", this.colors.fill);
	        this.screw.setAttribute("fill", this.colors.accent);
	        this.handle.setAttribute("stroke", this.colors.accent);
	        this.handle2.setAttribute("stroke", this.colors.accent);
	        this.handleFill.setAttribute("fill", this.colors.accent);
	        this.handle2Fill.setAttribute("fill", this.colors.accent);
	        this.handleLine.setAttribute("stroke", this.colors.accent);
	      }
	    },
	    render: {
	      value: function render() {
	        var value = this._value.normalized;
	
	        var center = {
	          x: this.width / 2,
	          y: this.height / 2
	        };
	
	        var diameter = Math.min(this.width, this.height);
	
	        var handlePoints = {
	          start: Math.PI * 1.5,
	          end: math.clip(math.scale(value, 0, 0.5, Math.PI * 1.5, Math.PI * 0.5), Math.PI * 0.5, Math.PI * 1.5)
	        };
	        var handle2Points = {
	          start: Math.PI * 2.5,
	          end: math.clip(math.scale(value, 0.5, 1, Math.PI * 2.5, Math.PI * 1.5), Math.PI * 1.5, Math.PI * 2.5)
	        };
	
	        var handlePath = svg.arc(center.x, center.y, diameter / 2 - diameter / 40, handlePoints.start, handlePoints.end);
	        var handle2Path = svg.arc(center.x, center.y, diameter / 2 - diameter / 40, handle2Points.start, handle2Points.end);
	
	        this.handle.setAttribute("d", handlePath);
	        this.handle2.setAttribute("d", handle2Path);
	
	        handlePath += " L " + center.x + " " + center.y;
	
	        this.handleFill.setAttribute("d", handlePath);
	
	        handle2Path += " L " + center.x + " " + center.y;
	
	        this.handle2Fill.setAttribute("d", handle2Path);
	
	        var arcEndingA = undefined;
	        if (value <= 0.5) {
	          arcEndingA = handlePoints.end;
	        } else {
	          arcEndingA = handle2Points.end;
	        }
	
	        var arcEndingX = center.x + Math.cos(arcEndingA) * (diameter / 2);
	        var arcEndingY = center.y + Math.sin(arcEndingA) * (diameter / 2) * -1;
	
	        this.handleLine.setAttribute("d", "M " + center.x + " " + center.y + " L " + arcEndingX + " " + arcEndingY);
	      }
	    },
	    click: {
	      value: function click() {
	        if (this.mode === "relative") {
	          this.previousAngle = false;
	        }
	        this.position.anchor = this.mouse;
	        this.position.value = this._value.normalized;
	        this.move();
	      }
	    },
	    move: {
	      value: function move() {
	        if (this.clicked) {
	
	          this.position.update(this.mouse);
	
	          var angle = this.position.value * Math.PI * 2;
	
	          if (angle < 0) {
	            angle += Math.PI * 2;
	          }
	
	          if (this.mode === "relative") {
	            if (this.previousAngle !== false && Math.abs(this.previousAngle - angle) > 2) {
	              if (this.previousAngle > 3) {
	                angle = Math.PI * 2;
	              } else {
	                angle = 0;
	              }
	            }
	          } /* else {
	            if (this.previousAngle !== false && Math.abs(this.previousAngle - angle) > 2) {
	              if (this.previousAngle > 3) {
	                angle = Math.PI*2;
	              } else {
	                angle = 0;
	              }
	            }
	            } */
	          this.previousAngle = angle;
	
	          var realValue = angle / (Math.PI * 2);
	
	          this.value = this._value.updateNormal(realValue);
	
	          if (this.mode === "relative") {
	            this.position.value = realValue;
	          }
	
	          this.emit("change", this._value.value);
	
	          this.render();
	        }
	      }
	    },
	    release: {
	      value: function release() {}
	    },
	    value: {
	
	      /*
	      Dial's value. When set, it will automatically be adjust to fit min/max/step settings of the interface.
	      @type {number}
	      @example dial.value = 10;
	       get value() {
	        return this._value.value;
	      }
	       set value(value) {
	        this._value.update(value);
	        this.emit('change',this.value);
	        this.render();
	      }
	      */
	
	      /**
	      Dial's value. When set, it will automatically be adjust to fit min/max/step settings of the interface.
	      @type {number}
	      @example dial.value = 10;
	      */
	
	      get: function () {
	        return this._value.value;
	      },
	      set: function (v) {
	        this._value.update(v);
	        this.position.value = this._value.normalized;
	        this.emit("change", this._value.value);
	        this.render();
	      }
	    },
	    min: {
	
	      /**
	      Lower limit of the dial's output range
	      @type {number}
	      @example dial.min = 1000;
	      */
	
	      get: function () {
	        return this._value.min;
	      },
	      set: function (v) {
	        this._value.min = v;
	      }
	    },
	    max: {
	
	      /**
	      Upper limit of the dial's output range
	      @type {number}
	      @example dial.max = 1000;
	      */
	
	      get: function () {
	        return this._value.max;
	      },
	      set: function (v) {
	        this._value.max = v;
	      }
	    },
	    step: {
	
	      /**
	      The increment that the dial's value changes by.
	      @type {number}
	      @example dial.step = 5;
	      */
	
	      get: function () {
	        return this._value.step;
	      },
	      set: function (v) {
	        this._value.step = v;
	      }
	    },
	    mode: {
	
	      /**
	      Absolute mode (dial's value jumps to mouse click position) or relative mode (mouse drag changes value relative to its current position). Default: "relative".
	      @type {string}
	      @example dial.mode = "relative";
	      */
	
	      get: function () {
	        return this.position.mode;
	      },
	      set: function (v) {
	        this.position.mode = v;
	      }
	    },
	    normalized: {
	
	      /**
	      Normalized value of the dial.
	      @type {number}
	      @example dial.normalized = 0.5;
	      */
	
	      get: function () {
	        return this._value.normalized;
	      },
	      set: function (v) {
	        this._value.updateNormal(v);
	        this.emit("change", this.value);
	      }
	    }
	  });
	
	  return Dial;
	})(Interface);
	
	module.exports = Dial;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var svg = __webpack_require__(4);
	var Interface = __webpack_require__(6);
	var ButtonTemplate = __webpack_require__(17);
	var touch = __webpack_require__(9);
	
	var PianoKey = (function (_ButtonTemplate) {
	  function PianoKey() {
	    _classCallCheck(this, PianoKey);
	
	    var options = ["value", "note", "color"];
	
	    var defaults = {
	      size: [80, 80],
	      target: false,
	      mode: "button",
	      value: 0
	    };
	
	    _get(Object.getPrototypeOf(PianoKey.prototype), "constructor", this).call(this, arguments, options, defaults);
	
	    this.note = this.settings.note;
	    this.color = this.settings.color;
	
	    this.colors = {
	      w: "#fff",
	      b: "#666" };
	
	    this.init();
	    this.render();
	  }
	
	  _inherits(PianoKey, _ButtonTemplate);
	
	  _createClass(PianoKey, {
	    buildFrame: {
	      value: function buildFrame() {
	        this.element = svg.create("svg");
	        this.element.setAttribute("width", this.width);
	        this.element.setAttribute("height", this.height);
	        this.parent.appendChild(this.element);
	      }
	    },
	    buildInterface: {
	      value: function buildInterface() {
	        var _this = this;
	
	        this.pad = svg.create("rect");
	
	        this.element.appendChild(this.pad);
	
	        this.interactionTarget = this.pad;
	
	        /* events */
	
	        if (!touch.exists) {
	
	          this.click = function () {
	            //  console.log('click');
	            _this.piano.interacting = true;
	            _this.piano.paintbrush = !_this.state;
	            _this.down(_this.piano.paintbrush);
	          };
	
	          this.pad.addEventListener("mouseover", function () {
	            if (_this.piano.interacting) {
	              //    console.log('mouseover');
	              _this.down(_this.piano.paintbrush);
	            }
	          });
	
	          this.move = function () {
	            if (_this.piano.interacting) {
	              //  console.log('move');
	              _this.bend();
	            }
	          };
	
	          this.release = function () {
	            _this.piano.interacting = false;
	            //  console.log('release');
	            //  this.up();
	          };
	          this.pad.addEventListener("mouseup", function () {
	            if (_this.piano.interacting) {
	              //  console.log('mouseup');
	              _this.up();
	            }
	          });
	          this.pad.addEventListener("mouseout", function () {
	            if (_this.piano.interacting) {
	              //  console.log('mouseout');
	              _this.up();
	            }
	          });
	        }
	      }
	    },
	    sizeInterface: {
	      value: function sizeInterface() {
	
	        //let radius = Math.min(this.width,this.height) / 5;
	        var radius = 0;
	
	        this.pad.setAttribute("x", 0.5);
	        this.pad.setAttribute("y", 0.5);
	        if (this.width > 2) {
	          this.pad.setAttribute("width", this.width - 1);
	        } else {
	          this.pad.setAttribute("width", this.width);
	        }
	        if (this.height > 2) {
	          this.pad.setAttribute("height", this.height);
	        } else {
	          this.pad.setAttribute("height", this.height);
	        }
	        this.pad.setAttribute("rx", radius);
	        this.pad.setAttribute("ry", radius);
	      }
	    },
	    render: {
	      value: function render() {
	        if (!this.state) {
	          this.pad.setAttribute("fill", this.colors[this.color]);
	        } else {
	          this.pad.setAttribute("fill", this.colors.accent);
	        }
	      }
	    }
	  });
	
	  return PianoKey;
	})(ButtonTemplate);
	
	/**
	* Piano
	*
	* @description Piano keyboard interface
	*
	* @demo <div nexus-ui="piano"></div>
	*
	* @example
	* var piano = new Nexus.Piano('#target')
	*
	* @example
	* var piano = new Nexus.Piano('#target',{
	*     'size': [500,125],
	*     'mode': 'button',  // 'button', 'toggle', or 'impulse'
	*     'lowNote': 24,
	*     'highNote': 60
	* })
	*
	* @output
	* change
	* Fires any time a new key is pressed or released <br>
	* The event data is an object containing <i>note</i> and <i>state</i> properties.
	*
	* @outputexample
	* piano.on('change',function(v) {
	*   console.log(v);
	* })
	*
	*/
	
	var Piano = (function (_Interface) {
	  function Piano() {
	    _classCallCheck(this, Piano);
	
	    var options = ["value"];
	
	    var defaults = {
	      size: [500, 125],
	      lowNote: 24,
	      highNote: 60,
	      mode: "button"
	    };
	
	    _get(Object.getPrototypeOf(Piano.prototype), "constructor", this).call(this, arguments, options, defaults);
	
	    this.keyPattern = ["w", "b", "w", "b", "w", "w", "b", "w", "b", "w", "b", "w"];
	
	    this.paintbrush = false;
	
	    this.mode = this.settings.mode;
	
	    this.range = {
	      low: this.settings.lowNote,
	      high: this.settings.highNote
	    };
	
	    this.range.size = this.range.high - this.range.low;
	
	    this.keys = [];
	
	    this.toggleTo = false;
	
	    this.init();
	    this.render();
	  }
	
	  _inherits(Piano, _Interface);
	
	  _createClass(Piano, {
	    buildFrame: {
	      value: function buildFrame() {
	        this.element = document.createElement("div");
	        this.element.style.position = "relative";
	        this.element.style.borderRadius = "0px";
	        this.element.style.display = "block";
	        this.element.style.width = "100%";
	        this.element.style.height = "100%";
	        this.parent.appendChild(this.element);
	      }
	    },
	    buildInterface: {
	      value: function buildInterface() {
	
	        this.keys = [];
	
	        for (var i = 0; i < this.range.high - this.range.low; i++) {
	
	          var container = document.createElement("span");
	          var scaleIndex = (i + this.range.low) % this.keyPattern.length;
	
	          var key = new PianoKey(container, {
	            component: true,
	            note: i + this.range.low,
	            color: this.keyPattern[scaleIndex],
	            mode: this.mode
	          }, this.keyChange.bind(this, i + this.range.low));
	
	          key.piano = this;
	
	          if (touch.exists) {
	            key.pad.index = i;
	            key.preClick = key.preMove = key.preRelease = function () {};
	            key.click = key.move = key.release = function () {};
	            key.preTouch = key.preTouchMove = key.preTouchRelease = function () {};
	            key.touch = key.touchMove = key.touchRelease = function () {};
	          }
	
	          this.keys.push(key);
	          this.element.appendChild(container);
	        }
	        if (touch.exists) {
	          this.addTouchListeners();
	        }
	      }
	    },
	    sizeInterface: {
	      value: function sizeInterface() {
	
	        var keyX = 0;
	
	        var keyPositions = [];
	
	        for (var i = 0; i < this.range.high - this.range.low; i++) {
	
	          keyPositions.push(keyX);
	
	          var scaleIndex = (i + this.range.low) % this.keyPattern.length;
	          var nextScaleIndex = (i + 1 + this.range.low) % this.keyPattern.length;
	          if (i + 1 + this.range.low >= this.range.high) {
	            keyX += 1;
	          } else if (this.keyPattern[scaleIndex] === "w" && this.keyPattern[nextScaleIndex] === "w") {
	            keyX += 1;
	          } else {
	            keyX += 0.5;
	          }
	        }
	        var keysWide = keyX;
	
	        //  let padding = this.width / 120;
	        var padding = 1;
	        var buttonWidth = (this.width - padding * 2) / keysWide;
	        var buttonHeight = (this.height - padding * 2) / 2;
	
	        for (var i = 0; i < this.keys.length; i++) {
	
	          var container = this.keys[i].parent;
	          container.style.position = "absolute";
	          container.style.left = keyPositions[i] * buttonWidth + padding + "px";
	          if (this.keys[i].color === "w") {
	            container.style.top = padding + "px";
	            this.keys[i].resize(buttonWidth, buttonHeight * 2);
	          } else {
	            container.style.zIndex = 1;
	            container.style.top = padding + "px";
	            this.keys[i].resize(buttonWidth, buttonHeight * 1.1);
	          }
	        }
	      }
	    },
	    colorInterface: {
	      value: function colorInterface() {
	
	        // Piano keys don't actually have a stroke border
	        // They have space between them, which shows the Piano bg color
	        this.element.style.backgroundColor = this.colors.mediumLight;
	
	        for (var i = 0; i < this.keys.length; i++) {
	          this.keys[i].colors = {
	            w: this.colors.light,
	            b: this.colors.dark,
	            accent: this.colors.accent,
	            border: this.colors.mediumLight
	          };
	          this.keys[i].colorInterface();
	          this.keys[i].render();
	        }
	      }
	    },
	    keyChange: {
	      value: function keyChange(note, on) {
	        // emit data for any key turning on/off
	        // "note" is the note value
	        // "on" is a boolean whether it is on or off
	        // in aftertouch mode, "on: is an object with state/x/y properties
	        var data = {
	          note: note
	        };
	        if (typeof on === "object") {
	          data.state = on.state;
	          //  data.x = on.x
	          //  data.y = on.y
	        } else {
	          data.state = on;
	        }
	        this.emit("change", data);
	      }
	    },
	    render: {
	
	      /* drag(note,on) {
	        this.emit('change',{
	          note: note,
	          state: on
	        });
	      } */
	
	      value: function render() {}
	    },
	    addTouchListeners: {
	      value: function addTouchListeners() {
	        var _this = this;
	
	        this.preClick = this.preMove = this.preRelease = function () {};
	        this.click = this.move = this.release = function () {};
	        this.preTouch = this.preTouchMove = this.preTouchRelease = function () {};
	        this.touch = this.touchMove = this.touchRelease = function () {};
	
	        this.currentElement = false;
	
	        this.element.addEventListener("touchstart", function (e) {
	          console.log("touchstart");
	          var element = document.elementFromPoint(e.targetTouches[0].clientX, e.targetTouches[0].clientY);
	          var key = _this.keys[element.index];
	          _this.paintbrush = !key.state;
	          key.down(_this.paintbrush);
	          _this.currentElement = element.index;
	          e.preventDefault();
	          e.stopPropagation();
	        });
	
	        this.element.addEventListener("touchmove", function (e) {
	          var element = document.elementFromPoint(e.targetTouches[0].clientX, e.targetTouches[0].clientY);
	          var key = _this.keys[element.index];
	          if (element.index !== _this.currentElement) {
	            if (_this.currentElement) {
	              var pastKey = _this.keys[_this.currentElement];
	              pastKey.up();
	            }
	            key.down(_this.paintbrush);
	          } else {
	            key.bend();
	          }
	          _this.currentElement = element.index;
	          e.preventDefault();
	          e.stopPropagation();
	        });
	
	        this.element.addEventListener("touchend", function (e) {
	          // no touches to calculate because none remaining
	          var key = _this.keys[_this.currentElement];
	          key.up();
	          _this.interacting = false;
	          _this.currentElement = false;
	          e.preventDefault();
	          e.stopPropagation();
	        });
	      }
	    },
	    setRange: {
	
	      /**
	      Define the pitch range (lowest and highest note) of the piano keyboard.
	      @param low {number} MIDI note value of the lowest note on the keyboard
	      @param high {number} MIDI note value of the highest note on the keyboard
	      */
	
	      value: function setRange(low, high) {
	        this.range.low = low;
	        this.range.high = high;
	        this.empty();
	        this.buildInterface();
	      }
	    },
	    toggleKey: {
	
	      /**
	      Turn a key on or off using its MIDI note value;
	      @param note {number} MIDI note value of the key to change
	      @param on {boolean} Whether the note should turn on or off
	      */
	
	      value: function toggleKey(note, on) {
	        this.keys[note - this.range.low].flip(on);
	      }
	    },
	    toggleIndex: {
	
	      /**
	      Turn a key on or off using its key index on the piano interface.
	      @param index {number} Index of the key to change
	      @param on {boolean} Whether the note should turn on or off
	      */
	
	      value: function toggleIndex(index, on) {
	        this.keys[index].flip(on);
	      }
	    }
	  });
	
	  return Piano;
	})(Interface);
	
	module.exports = Piano;
	
	// loop through and render the keys?

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var svg = __webpack_require__(4);
	var dom = __webpack_require__(7);
	var Interface = __webpack_require__(6);
	var ButtonTemplate = __webpack_require__(17);
	var MatrixModel = __webpack_require__(25);
	var CounterModel = __webpack_require__(28);
	var touch = __webpack_require__(9);
	
	var MatrixCell = (function (_ButtonTemplate) {
	  function MatrixCell() {
	    _classCallCheck(this, MatrixCell);
	
	    var options = ["value"];
	
	    var defaults = {
	      size: [80, 80],
	      target: false,
	      mode: "toggle",
	      value: 0
	    };
	
	    _get(Object.getPrototypeOf(MatrixCell.prototype), "constructor", this).call(this, arguments, options, defaults);
	
	    this.index = this.settings.index;
	    this.row = this.settings.row;
	    this.column = this.settings.column;
	
	    this.matrix = this.settings.matrix;
	
	    this.interacting = false;
	    this.paintbrush = false;
	
	    this.init();
	    this.render();
	  }
	
	  _inherits(MatrixCell, _ButtonTemplate);
	
	  _createClass(MatrixCell, {
	    buildFrame: {
	      value: function buildFrame() {
	        this.element = svg.create("svg");
	        this.element.setAttribute("width", this.width);
	        this.element.setAttribute("height", this.height);
	        this.element.style.top = "0px";
	        this.element.style.left = "0px";
	        this.element.style.position = "absolute";
	        this.parent.appendChild(this.element);
	      }
	    },
	    buildInterface: {
	      value: function buildInterface() {
	        var _this = this;
	
	        this.pad = svg.create("rect");
	        this.element.appendChild(this.pad);
	
	        this.interactionTarget = this.pad;
	
	        /* events */
	
	        if (!touch.exists) {
	
	          this.click = function () {
	            _this.matrix.interacting = true;
	            _this.matrix.paintbrush = !_this.state;
	            _this.down(_this.matrix.paintbrush);
	          };
	          this.pad.addEventListener("mouseover", function () {
	            if (_this.matrix.interacting) {
	              _this.down(_this.matrix.paintbrush);
	            }
	          });
	
	          this.move = function () {};
	          this.pad.addEventListener("mousemove", function (e) {
	            if (_this.matrix.interacting) {
	              if (!_this.offset) {
	                _this.offset = dom.findPosition(_this.element);
	              }
	              _this.mouse = dom.locateMouse(e, _this.offset);
	              _this.bend();
	            }
	          });
	
	          this.release = function () {
	            _this.matrix.interacting = false;
	          };
	          this.pad.addEventListener("mouseup", function () {
	            if (_this.matrix.interacting) {
	              _this.up();
	            }
	          });
	          this.pad.addEventListener("mouseout", function () {
	            if (_this.matrix.interacting) {
	              _this.up();
	            }
	          });
	        }
	      }
	    },
	    sizeInterface: {
	      value: function sizeInterface() {
	
	        this.pad.setAttribute("x", 1);
	        this.pad.setAttribute("y", 1);
	        if (this.width > 2) {
	          this.pad.setAttribute("width", this.width - 2);
	        } else {
	          this.pad.setAttribute("width", this.width);
	        }
	        if (this.height > 2) {
	          this.pad.setAttribute("height", this.height - 2);
	        } else {
	          this.pad.setAttribute("height", this.height);
	        }
	        //this.pad.setAttribute('height', this.height - 2);
	        this.pad.setAttribute("fill", this.matrix.colors.fill);
	      }
	    },
	    render: {
	      value: function render() {
	        if (!this.state) {
	          this.pad.setAttribute("fill", this.matrix.colors.fill);
	        } else {
	          this.pad.setAttribute("fill", this.matrix.colors.accent);
	        }
	      }
	    }
	  });
	
	  return MatrixCell;
	})(ButtonTemplate);
	
	/**
	* Sequencer
	*
	* @description Grid of buttons with built-in step sequencer.
	*
	* @demo <div nexus-ui="sequencer" style="width:400px;height:200px;"></div>
	*
	* @example
	* var sequencer = new Nexus.Sequencer('#target')
	*
	* @example
	* var sequencer = new Nexus.Sequencer('#target',{
	*  'size': [400,200],
	*  'mode': 'toggle',
	*  'rows': 5,
	*  'columns': 10
	*})
	*
	* @output
	* change
	* Fires any time the interface's matrix changes. <br>
	* The event data is an object containing <i>row</i> (number), <i>column</i> (number), and <i>state</i> (boolean) properties.
	*
	* @outputexample
	* sequencer.on('change',function(v) {
	*   console.log(v);
	* })
	*
	* @output
	* step
	* Fires any time the sequencer steps to the next column, in sequece mode. <br>
	* The event data is an <i>array</i> containing all values in the column, top first.
	*
	* @outputexample
	* sequencer.on('step',function(v) {
	*   console.log(v);
	* })
	*/
	
	var Sequencer = (function (_Interface) {
	  function Sequencer() {
	    _classCallCheck(this, Sequencer);
	
	    var options = ["value"];
	
	    var defaults = {
	      size: [400, 200],
	      mode: "toggle",
	      rows: 5,
	      columns: 10
	    };
	
	    _get(Object.getPrototypeOf(Sequencer.prototype), "constructor", this).call(this, arguments, options, defaults);
	
	    this.active = -1;
	
	    /**
	    * Button interaction mode: see Button
	    * @type {string}
	    * @example button.mode = 'toggle';
	    */
	    this.mode = this.settings.mode;
	
	    /**
	    * The interval object which controls timing and sequence scheduling.
	    * @type {interval}
	    */
	    this.interval = new Nexus.Interval(200, function () {}, false); // jshint ignore:line
	
	    /**
	    * A Matrix model containing methods for manipulating the sequencer's array of values. To learn how to manipulate the matrix, read about the matrix model.
	    * @type {matrix}
	    */
	    this.matrix = new MatrixModel(this.settings.rows, this.settings.columns);
	    this.matrix.ui = this;
	
	    /**
	    * A Counter model which the sequencer steps through. For example, you could use this model to step through the sequencer in reverse, randomly, or in a drunk walk.
	    * @type {counter}
	    */
	    this.stepper = new CounterModel(0, this.columns);
	
	    this.init();
	  }
	
	  _inherits(Sequencer, _Interface);
	
	  _createClass(Sequencer, {
	    buildFrame: {
	      value: function buildFrame() {
	        this.element = document.createElement("div");
	        this.element.style.position = "relative";
	        this.element.style.display = "block";
	        this.element.style.width = "100%";
	        this.element.style.height = "100%";
	        this.parent.appendChild(this.element);
	        if (touch.exists) {
	          this.addTouchListeners();
	        }
	      }
	    },
	    buildInterface: {
	      value: function buildInterface() {
	
	        this.cells = [];
	        for (var i = 0; i < this.matrix.length; i++) {
	
	          var _location = this.matrix.locate(i);
	          // returns {row,col}
	
	          var container = document.createElement("span");
	          container.style.position = "absolute";
	
	          var cell = new MatrixCell(container, {
	            component: true,
	            index: i,
	            row: _location.row,
	            column: _location.column,
	            mode: this.mode,
	            matrix: this
	          }, this.keyChange.bind(this, i));
	
	          //  cell.matrix = this;
	          if (touch.exists) {
	            cell.pad.index = i;
	            cell.preClick = cell.preMove = cell.preRelease = function () {};
	            cell.click = cell.move = cell.release = function () {};
	            cell.preTouch = cell.preTouchMove = cell.preTouchRelease = function () {};
	            cell.touch = cell.touchMove = cell.touchRelease = function () {};
	          }
	
	          this.cells.push(cell);
	          this.element.appendChild(container);
	        }
	        this.sizeInterface();
	      }
	    },
	    sizeInterface: {
	      value: function sizeInterface() {
	
	        var cellWidth = this.width / this.columns;
	        var cellHeight = this.height / this.rows;
	
	        for (var i = 0; i < this.cells.length; i++) {
	          var container = this.cells[i].parent;
	          container.style.left = this.cells[i].column * cellWidth + "px";
	          container.style.top = this.cells[i].row * cellHeight + "px";
	          this.cells[i].resize(cellWidth, cellHeight);
	        }
	      }
	    },
	    colorInterface: {
	      value: function colorInterface() {
	        for (var i = 0; i < this.cells.length; i++) {
	          this.cells[i].render();
	        }
	      }
	    },
	    update: {
	      value: function update() {
	        var _this = this;
	
	        //  console.log("updating...")
	        //on = on || false;
	        this.matrix.iterate(function (r, c, i) {
	          //  console.log(this.matrix.pattern[r][c], this.cells[i].state);
	          if (_this.matrix.pattern[r][c] !== _this.cells[i].state) {
	            if (_this.matrix.pattern[r][c] > 0) {
	              _this.cells[i].turnOn();
	            } else {
	              _this.cells[i].turnOff();
	            }
	          }
	        });
	      }
	    },
	    keyChange: {
	
	      // update => cell.turnOn => cell.emit => keyChange (seq.emit) => matrix.set.cell => update
	      //
	      // interaction => keyChange => matrix.set.cell => update => cell.turnOn
	      //                                             => emit
	      //
	      // set.cell => update => needs to emit.
	
	      value: function keyChange(note, on) {
	        // emit data for any key turning on/off
	        // i is the note index
	        // v is whether it is on or off
	        var cell = this.matrix.locate(note);
	        //  this.matrix.set.cell(cell.column,cell.row,on);
	        this.matrix.pattern[cell.row][cell.column] = on;
	        var data = {
	          row: cell.row,
	          column: cell.column,
	          state: on
	        };
	        this.emit("change", data);
	      }
	    },
	    render: {
	      value: function render() {
	        var _this = this;
	
	        if (this.stepper.value >= 0) {
	          this.matrix.iterate(function (r, c, i) {
	            if (c === _this.stepper.value) {
	              _this.cells[i].pad.setAttribute("stroke", _this.colors.mediumLight);
	              _this.cells[i].pad.setAttribute("stroke-width", "1");
	              _this.cells[i].pad.setAttribute("stroke-opacity", "1");
	            } else {
	              _this.cells[i].pad.setAttribute("stroke", "none");
	            }
	          });
	        }
	      }
	    },
	    start: {
	
	      /**
	       * Start sequencing
	       * @param  {number} ms Beat tempo in milliseconds
	       */
	
	      value: function start(ms) {
	        this.interval.event = this.next.bind(this);
	        if (ms) {
	          this.interval.ms(ms);
	        }
	        this.interval.start();
	      }
	    },
	    stop: {
	
	      /**
	      Stop sequencing
	      */
	
	      value: function stop() {
	        this.interval.stop();
	      }
	    },
	    next: {
	
	      /**
	      Manually jump to the next column and trigger the 'change' event. The "next" column is determined by your mode of sequencing.
	      */
	
	      value: function next() {
	        this.stepper.next();
	        this.emit("step", this.matrix.column(this.stepper.value).reverse());
	        this.render();
	      }
	    },
	    addTouchListeners: {
	      value: function addTouchListeners() {
	        var _this = this;
	
	        this.preClick = this.preMove = this.preRelease = function () {};
	        this.click = this.move = this.release = function () {};
	        this.preTouch = this.preTouchMove = this.preTouchRelease = function () {};
	        this.touch = this.touchMove = this.touchRelease = function () {};
	
	        this.currentElement = false;
	
	        this.element.addEventListener("touchstart", function (e) {
	          var element = document.elementFromPoint(e.targetTouches[0].clientX, e.targetTouches[0].clientY);
	          var cell = _this.cells[element.index];
	          _this.paintbrush = !cell.state;
	          cell.down(_this.paintbrush);
	          _this.currentElement = element.index;
	          e.preventDefault();
	          e.stopPropagation();
	        });
	
	        this.element.addEventListener("touchmove", function (e) {
	          var element = document.elementFromPoint(e.targetTouches[0].clientX, e.targetTouches[0].clientY);
	          var cell = _this.cells[element.index];
	          if (element.index !== _this.currentElement) {
	            if (_this.currentElement >= 0) {
	              var pastCell = _this.cells[_this.currentElement];
	              pastCell.up();
	            }
	            cell.down(_this.paintbrush);
	          } else {
	            cell.bend();
	          }
	          _this.currentElement = element.index;
	          e.preventDefault();
	          e.stopPropagation();
	        });
	
	        this.element.addEventListener("touchend", function (e) {
	          // no touches to calculate because none remaining
	          var cell = _this.cells[_this.currentElement];
	          cell.up();
	          _this.interacting = false;
	          _this.currentElement = false;
	          e.preventDefault();
	          e.stopPropagation();
	        });
	      }
	    },
	    rows: {
	
	      /**
	      Number of rows in the sequencer
	      @type {number}
	      */
	
	      get: function () {
	        return this.matrix.rows;
	      },
	      set: function (v) {
	        this.matrix.rows = v;
	        this.empty();
	        this.buildInterface();
	        this.update();
	      }
	    },
	    columns: {
	
	      /**
	      Number of columns in the sequencer
	      @type {number}
	      */
	
	      get: function () {
	        return this.matrix.columns;
	      },
	      set: function (v) {
	        this.matrix.columns = v;
	        this.stepper.max = v;
	        this.empty();
	        this.buildInterface();
	        this.update();
	      }
	    }
	  });
	
	  return Sequencer;
	})(Interface);
	
	module.exports = Sequencer;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var math = _interopRequire(__webpack_require__(5));
	
	var Sequence = _interopRequire(__webpack_require__(26));
	
	// For the tutorial, looking at
	
	//Pattern section:
	// .create(), .rows, .columns,
	// .pattern, .length, .formatAsText(), .log(),
	// .locate(i), .indexOf(c,r)
	// row(), column() (returns contents of row or colum)
	
	//Control section:
	// toggle x3
	// set x4
	// rotate x3
	// populate x3
	// erase x3
	
	// should some version of this have a float value for each cell?
	// could be like a mirror .pattern that has values. by default, everything is 1, but could be set...
	// not a good way to do that on interface, but as a model it would be nice...
	// for .formatAsText(), could multiply by 100 and floor, so each cell is an int from 0 to 9
	
	var Matrix = (function () {
	  function Matrix(rows, columns) {
	    var _this = this;
	
	    _classCallCheck(this, Matrix);
	
	    // should also have ability to create using an existing matrix (2d array)
	    this.pattern = [];
	    this.create(rows, columns);
	
	    this.toggle = {
	      cell: function (column, row) {
	        _this.pattern[row][column] = !_this.pattern[row][column]; // math.invert(this.pattern[row][column]);
	        if (_this.ui) {
	          _this.ui.update();
	        }
	        return _this.pattern[row][column];
	      },
	      all: function () {
	        _this.iterate(function (r, c) {
	          _this.toggle.cell(c, r);
	        });
	        if (_this.ui) {
	          _this.ui.update();
	        }
	      },
	      row: function (row) {
	        for (var i = 0; i < _this.columns; i++) {
	          _this.toggle.cell(i, row);
	        }
	        if (_this.ui) {
	          _this.ui.update();
	        }
	      },
	      column: function (column) {
	        for (var i = 0; i < _this.rows; i++) {
	          _this.toggle.cell(column, i);
	        }
	        if (_this.ui) {
	          _this.ui.update();
	        }
	      }
	    };
	
	    this.set = {
	      cell: function (column, row, value) {
	        _this.pattern[row][column] = value;
	        if (_this.ui) {
	          _this.ui.update();
	        }
	      },
	      all: function (values) {
	        // set the whole matrix using a 2d array as input
	        // this should also resize the array?
	        _this.pattern = values;
	        if (_this.ui) {
	          _this.ui.update();
	        }
	      },
	      row: function (row, values) {
	        // set a row using an array as input
	        _this.pattern[row] = values;
	        if (_this.ui) {
	          _this.ui.update();
	        }
	      },
	      column: function (column, values) {
	        // set a column using an array as input
	        _this.pattern.forEach(function (row, i) {
	          _this.pattern[i][column] = values[i];
	        });
	        if (_this.ui) {
	          _this.ui.update();
	        }
	      }
	    };
	
	    this.rotate = {
	      //should eventually do (amountX, amountY) here
	      // could just use a loop and this.rotate.row(i,amountX);
	      all: function (amount) {
	        if (!amount && amount !== 0) {
	          amount = 1;
	        }
	        amount %= _this.pattern[0].length;
	        if (amount < 0) {
	          amount = _this.pattern[0].length + amount;
	        }
	        for (var i = 0; i < _this.rows; i++) {
	          var cut = _this.pattern[i].splice(_this.pattern[i].length - amount, amount);
	          _this.pattern[i] = cut.concat(_this.pattern[i]);
	        }
	        if (_this.ui) {
	          _this.ui.update();
	        }
	      },
	      row: function (row, amount) {
	        if (!amount && amount !== 0) {
	          amount = 1;
	        }
	        amount %= _this.pattern[0].length;
	        if (amount < 0) {
	          amount = _this.pattern[0].length + amount;
	        }
	        var cut = _this.pattern[row].splice(_this.pattern[row].length - amount, amount);
	        _this.pattern[row] = cut.concat(_this.pattern[row]);
	        if (_this.ui) {
	          _this.ui.update();
	        }
	      },
	      column: function (column, amount) {
	        if (!amount && amount !== 0) {
	          amount = 1;
	        }
	        amount %= _this.pattern.length;
	        if (amount < 0) {
	          amount = _this.pattern.length + amount;
	        }
	        var proxy = [];
	        _this.pattern.forEach(function (row) {
	          proxy.push(row[column]);
	        });
	        var cut = proxy.splice(proxy.length - amount, amount);
	        proxy = cut.concat(proxy);
	        _this.pattern.forEach(function (row, i) {
	          row[column] = proxy[i];
	        });
	        if (_this.ui) {
	          _this.ui.update();
	        }
	      }
	    };
	
	    // the idea behind populate is to be able to set a whole row or column to 0 or 1
	    // IF the value is a float, such as 0.7, then it would become a probability
	    // so populate(0.7) would give each cell a 70% chance of being 1
	    this.populate = {
	      all: function (odds) {
	        var oddsSequence = new Sequence(odds);
	        _this.iterate(function (r, c) {
	          _this.pattern[r][c] = math.coin(oddsSequence.next());
	        });
	        // This could be used so that each row has same odds pattern, even if row length is not divisibly by sequence length.
	        //,() => {
	        //  odds.pos = -1;
	        // }
	        if (_this.ui) {
	          _this.ui.update();
	        }
	      },
	      row: function () {
	        var row = arguments[0] === undefined ? 0 : arguments[0];
	        var odds = arguments[1] === undefined ? 1 : arguments[1];
	
	        var oddsSequence = new Sequence(odds);
	        _this.pattern[row].forEach(function (cell, i) {
	          _this.pattern[row][i] = math.coin(oddsSequence.next());
	        });
	        if (_this.ui) {
	          _this.ui.update();
	        }
	      },
	      column: function () {
	        var column = arguments[0] === undefined ? 0 : arguments[0];
	        var odds = arguments[1] === undefined ? 1 : arguments[1];
	
	        var oddsSequence = new Sequence(odds);
	        _this.pattern.forEach(function (row, i) {
	          _this.pattern[i][column] = math.coin(oddsSequence.next());
	        });
	        if (_this.ui) {
	          _this.ui.update();
	        }
	      }
	    };
	
	    // essentiall populate(0) so i'm not sure if this is necessary but is nice
	    this.erase = {
	      all: function () {
	        _this.set.all(0);
	      },
	      row: function (row) {
	        _this.set.row(row, 0);
	      },
	      column: function (column) {
	        _this.set.column(column, 0);
	      }
	    };
	
	    // end constructor
	  }
	
	  _createClass(Matrix, {
	    create: {
	      value: function create(rows, columns) {
	        var _this = this;
	
	        this.pattern = [];
	        for (var row = 0; row < rows; row++) {
	          var arr = new Array(columns);
	          this.pattern.push(arr);
	        }
	        this.iterate(function (r, c) {
	          _this.pattern[r][c] = false;
	        });
	      }
	    },
	    iterate: {
	      value: function iterate(f, f2) {
	        var i = 0;
	        for (var row = 0; row < this.rows; row++) {
	          if (f2) {
	            f2(row);
	          }
	          for (var column = 0; column < this.columns; column++) {
	            f(row, column, i);
	            i++;
	          }
	        }
	      }
	    },
	    formatAsText: {
	      value: function formatAsText() {
	        var _this = this;
	
	        var patternString = "";
	        this.iterate(function (r, c) {
	          patternString += (_this.pattern[r][c] ? 1 : 0) + " ";
	        }, function () {
	          patternString += "\n";
	        });
	        return patternString;
	      }
	    },
	    log: {
	      value: function log() {
	        console.log(this.formatAsText());
	      }
	    },
	    update: {
	      value: function update(pattern) {
	        this.pattern = pattern || this.pattern;
	      }
	    },
	    length: {
	      get: function () {
	        return this.rows * this.columns;
	      }
	    },
	    locate: {
	      value: function locate(index) {
	        // returns row and column of cell by index
	        return {
	          row: ~ ~(index / this.columns),
	          column: index % this.columns
	        };
	      }
	    },
	    indexOf: {
	      value: function indexOf(row, column) {
	        return column + row * this.columns;
	        // returns index of cell by row and column
	      }
	    },
	    row: {
	      value: (function (_row) {
	        var _rowWrapper = function row(_x) {
	          return _row.apply(this, arguments);
	        };
	
	        _rowWrapper.toString = function () {
	          return _row.toString();
	        };
	
	        return _rowWrapper;
	      })(function (row) {
	        var data = [];
	        for (var i = 0; i < this.columns; i++) {
	          data.push(this.pattern[row] ? 1 : 0);
	        }
	        return data;
	      })
	    },
	    column: {
	      value: (function (_column) {
	        var _columnWrapper = function column(_x2) {
	          return _column.apply(this, arguments);
	        };
	
	        _columnWrapper.toString = function () {
	          return _column.toString();
	        };
	
	        return _columnWrapper;
	      })(function (column) {
	        var data = [];
	        for (var i = 0; i < this.rows; i++) {
	          data.push(this.pattern[i][column] ? 1 : 0);
	        }
	        return data;
	      })
	    },
	    rows: {
	      get: function () {
	        return this.pattern.length;
	      },
	      set: function (v) {
	        var _this = this;
	
	        var previous = this.pattern.slice(0);
	        this.create(v, this.columns);
	        this.iterate(function (r, c) {
	          if (previous[r] && previous[r][c]) {
	            _this.pattern[r][c] = previous[r][c];
	          }
	        });
	      }
	    },
	    columns: {
	      get: function () {
	        return this.pattern[0].length;
	      },
	      set: function (v) {
	        var _this = this;
	
	        var previous = this.pattern.slice(0);
	        this.create(this.rows, v);
	        this.iterate(function (r, c) {
	          if (previous[r] && previous[r][c]) {
	            _this.pattern[r][c] = previous[r][c];
	          }
	        });
	      }
	    }
	  });
	
	  return Matrix;
	})();
	
	module.exports = Matrix;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var math = _interopRequire(__webpack_require__(5));
	
	var Drunk = _interopRequire(__webpack_require__(27));
	
	var Sequence = (function () {
	  function Sequence() {
	    var sequence = arguments[0] === undefined ? [0, 10, 20, 30] : arguments[0];
	    var mode = arguments[1] === undefined ? "up" : arguments[1];
	    var position = arguments[2] === undefined ? false : arguments[2];
	
	    _classCallCheck(this, Sequence);
	
	    this.values = sequence;
	    if (!Array.isArray(this.values)) {
	      this.values = [this.values];
	    }
	    this._mode = mode;
	    this.position = position;
	
	    this.drunkWalk = new Drunk(0, this.values.length - 1);
	
	    this.startValues = {
	      up: 0,
	      down: this.values.length - 1,
	      drunk: ~ ~(this.values.length / 2),
	      random: math.ri(this.values.length)
	    };
	
	    if (this.position !== false) {
	      this.next = this[this._mode];
	    } else {
	      this.next = this.first;
	    }
	  }
	
	  _createClass(Sequence, {
	    mode: {
	      get: function () {
	        return this._mode;
	      },
	      set: function (mode) {
	        if (!(mode === "up" || mode === "down" || mode === "random" || mode === "drunk")) {
	          console.error("The only modes currently allowed are: up, down, random, drunk");
	          return;
	        }
	        this._mode = mode;
	        if (this.position) {
	          this.next = this[this._mode];
	        }
	      }
	    },
	    value: {
	      get: function () {
	        return this.values[this.position];
	      },
	      set: function (v) {
	        this.position = this.values.indexOf(v);
	      }
	    },
	    first: {
	      value: function first() {
	        if (this.position !== false) {
	          this.next = this[this._mode];
	          return this.next();
	        }
	        this.position = this.startValues[this._mode];
	        this.next = this[this._mode];
	        return this.value;
	      }
	    },
	    up: {
	      value: function up() {
	        this.position++;
	        this.position %= this.values.length;
	        return this.value;
	      }
	    },
	    down: {
	      value: function down() {
	        this.position--;
	        if (this.position < 0) {
	          this.position = (this.position + this.values.length) % this.values.length;
	        }
	        return this.value;
	      }
	    },
	    random: {
	      value: function random() {
	        this.position = math.ri(0, this.values.length);
	        return this.value;
	      }
	    },
	    drunk: {
	      value: function drunk() {
	        this.drunkWalk.max = this.values.length;
	        this.drunkWalk.value = this.position;
	        this.position = this.drunkWalk.next();
	        return this.value;
	      }
	
	      /* future methods
	      .group(start,stop) -- outputs a group of n items from the list, with wrapping
	      .loop(start,stop) -- confines sequencing to a subset of the values
	          (could even have a distinction between .originalValues and the array of values being used)
	      */
	
	    }
	  });
	
	  return Sequence;
	})();
	
	module.exports = Sequence;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var math = _interopRequire(__webpack_require__(5));
	
	var Drunk = (function () {
	    function Drunk() {
	        var min = arguments[0] === undefined ? 0 : arguments[0];
	        var max = arguments[1] === undefined ? 9 : arguments[1];
	        var value = arguments[2] === undefined ? 0 : arguments[2];
	        var increment = arguments[3] === undefined ? 1 : arguments[3];
	        var loop = arguments[4] === undefined ? false : arguments[4];
	
	        _classCallCheck(this, Drunk);
	
	        this.min = min;
	        this.max = max;
	        this.value = value;
	        this.increment = increment;
	        this.loop = loop;
	    }
	
	    _createClass(Drunk, {
	        next: {
	            value: function next() {
	                this.value += math.pick(-1 * this.increment, this.increment);
	                if (this.value > this.max) {
	                    if (this.loop) {
	                        this.value = this.min;
	                    } else {
	                        this.value = this.max - this.increment;
	                    }
	                }
	
	                if (this.value < this.min) {
	                    if (this.loop) {
	                        this.value = this.max;
	                    } else {
	                        this.value = this.min + this.increment;
	                    }
	                }
	                return this.value;
	            }
	        }
	    });
	
	    return Drunk;
	})();
	
	module.exports = Drunk;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var math = _interopRequire(__webpack_require__(5));
	
	var Drunk = _interopRequire(__webpack_require__(27));
	
	var Counter = (function () {
	    function Counter() {
	        var min = arguments[0] === undefined ? 0 : arguments[0];
	        var max = arguments[1] === undefined ? 10 : arguments[1];
	        var mode = arguments[2] === undefined ? "up" : arguments[2];
	        var value = arguments[3] === undefined ? false : arguments[3];
	
	        _classCallCheck(this, Counter);
	
	        this.min = min;
	        this.max = max;
	        this.value = value;
	        this.mode = mode;
	        this.drunkWalk = new Drunk(this.min, this.max);
	        if (this.value !== false) {
	            this.next = this[this._mode];
	        } else {
	            this.next = this.first;
	        }
	    }
	
	    _createClass(Counter, {
	        mode: {
	            set: function (mode) {
	                if (!(mode === "up" || mode === "down" || mode === "random" || mode === "drunk")) {
	                    console.error("The only modes currently allowed are: up, down, random, drunk");
	                    return;
	                }
	                this._mode = mode;
	                if (this.value) {
	                    this.next = this[this._mode];
	                }
	            },
	            get: function () {
	                return this._mode;
	            }
	        },
	        first: {
	            value: function first() {
	                if (this.value !== false) {
	                    this.next = this[this._mode];
	                    return this.next();
	                }
	                this.startValues = {
	                    up: this.min,
	                    down: this.max,
	                    drunk: ~ ~math.average(this.min, this.max),
	                    random: math.ri(this.min, this.max)
	                };
	                this.value = this.startValues[this._mode];
	                this.next = this[this._mode];
	                return this.value;
	            }
	        },
	        up: {
	            value: function up() {
	                this.value++;
	                if (this.value >= this.max) {
	                    this.value = this.min;
	                }
	                return this.value;
	            }
	        },
	        down: {
	            value: function down() {
	                this.value--;
	                if (this.value < this.min) {
	                    this.value = this.max;
	                }
	                return this.value;
	            }
	        },
	        random: {
	            value: function random() {
	                this.value = math.ri(this.min, this.max);
	                return this.value;
	            }
	        },
	        drunk: {
	            value: function drunk() {
	                this.drunkWalk.min = this.min;
	                this.drunkWalk.max = this.max;
	                this.drunkWalk.value = this.value;
	                this.value = this.drunkWalk.next();
	                return this.value;
	            }
	        }
	    });
	
	    return Counter;
	})();
	
	module.exports = Counter;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var svg = __webpack_require__(4);
	var math = __webpack_require__(5);
	var Interface = __webpack_require__(6);
	var Step = __webpack_require__(11);
	
	var Interaction = _interopRequireWildcard(__webpack_require__(12));
	
	/**
	* Pan2D
	*
	* @description Interface for moving a sound around an array of speakers. Speaker locations can be customized. The interface calculates the closeness of the sound source to each speaker and returns that distance as a numeric value.
	*
	* @demo <span nexus-ui="pan2D"></span>
	*
	* @example
	* var pan2d = new Nexus.Pan2d('#target')
	*
	* @example
	* var pan2d = new Nexus.Pan2D('#target',{
	*   'size': [200,200],
	*   'range': 0.5,  // detection radius of each speaker
	*   'mode': 'absolute',   // 'absolute' or 'relative' sound movement
	*   'speakers': [  // the speaker [x,y] positions
	*       [0.5,0.2],
	*       [0.75,0.25],
	*       [0.8,0.5],
	*       [0.75,0.75],
	*       [0.5,0.8],
	*       [0.25,0.75]
	*       [0.2,0.5],
	*       [0.25,0.25]
	*   ]
	* })
	*
	* @output
	* change
	* Fires any time the "source" node's position changes. <br>
	* The event data is an array of the amplitudes (0-1), representing the level of each speaker (as calculated by its distance to the audio source).
	*
	* @outputexample
	* pan2d.on('change',function(v) {
	*   console.log(v);
	* })
	*
	*/
	
	var Pan2D = (function (_Interface) {
	  function Pan2D() {
	    _classCallCheck(this, Pan2D);
	
	    var options = ["range"];
	
	    var defaults = {
	      size: [200, 200],
	      range: 0.5,
	      mode: "absolute",
	      speakers: [[0.5, 0.2], [0.75, 0.25], [0.8, 0.5], [0.75, 0.75], [0.5, 0.8], [0.25, 0.75], [0.2, 0.5], [0.25, 0.25]]
	    };
	
	    _get(Object.getPrototypeOf(Pan2D.prototype), "constructor", this).call(this, arguments, options, defaults);
	
	    this.value = {
	      x: new Step(0, 1, 0, 0.5),
	      y: new Step(0, 1, 0, 0.5)
	    };
	
	    /**
	    Absolute or relative mouse interaction. In "absolute" mode, the source node will jump to your mouse position on mouse click. In "relative" mode, it does not.
	    */
	    this.mode = this.settings.mode;
	
	    this.position = {
	      x: new Interaction.Handle(this.mode, "horizontal", [0, this.width], [this.height, 0]),
	      y: new Interaction.Handle(this.mode, "vertical", [0, this.width], [this.height, 0])
	    };
	    this.position.x.value = this.value.x.normalized;
	    this.position.y.value = this.value.y.normalized;
	
	    /**
	    An array of speaker locations. Update this with .moveSpeaker() or .moveAllSpeakers()
	    */
	    this.speakers = this.settings.speakers;
	
	    /**
	    Rewrite: The maximum distance from a speaker that the source node can be for it to be heard from that speaker. A low range (0.1) will result in speakers only playing when the sound is very close it. Default is 0.5 (half of the interface).
	    */
	    this.range = this.settings.range;
	
	    /**
	    The current levels for each speaker. This is calculated when a source node or speaker node is moved through interaction or programatically.
	    */
	    this.levels = [];
	
	    this.init();
	
	    this.calculateLevels();
	    this.render();
	  }
	
	  _inherits(Pan2D, _Interface);
	
	  _createClass(Pan2D, {
	    buildInterface: {
	      value: function buildInterface() {
	
	        this.knob = svg.create("circle");
	
	        this.element.appendChild(this.knob);
	
	        // add speakers
	        this.speakerElements = [];
	
	        for (var i = 0; i < this.speakers.length; i++) {
	          var speakerElement = svg.create("circle");
	
	          this.element.appendChild(speakerElement);
	
	          this.speakerElements.push(speakerElement);
	        }
	      }
	    },
	    sizeInterface: {
	      value: function sizeInterface() {
	
	        this._minDimension = Math.min(this.width, this.height);
	
	        this.knobRadius = {
	          off: ~ ~(this._minDimension / 100) * 3 + 5 };
	        this.knobRadius.on = this.knobRadius.off * 2;
	
	        this.knob.setAttribute("cx", this.width / 2);
	        this.knob.setAttribute("cy", this.height / 2);
	        this.knob.setAttribute("r", this.knobRadius.off);
	
	        for (var i = 0; i < this.speakers.length; i++) {
	          var speakerElement = this.speakerElements[i];
	          var speaker = this.speakers[i];
	          speakerElement.setAttribute("cx", speaker[0] * this.width);
	          speakerElement.setAttribute("cy", speaker[1] * this.height);
	          speakerElement.setAttribute("r", this._minDimension / 20 + 5);
	          speakerElement.setAttribute("fill-opacity", "0");
	        }
	
	        this.position.x.resize([0, this.width], [this.height, 0]);
	        this.position.y.resize([0, this.width], [this.height, 0]);
	
	        // next, need to
	        // resize positions
	        // calculate speaker distances
	        this.calculateLevels();
	        this.render();
	      }
	    },
	    colorInterface: {
	      value: function colorInterface() {
	
	        this.element.style.backgroundColor = this.colors.fill;
	        this.knob.setAttribute("fill", this.colors.mediumLight);
	
	        for (var i = 0; i < this.speakers.length; i++) {
	          var speakerElement = this.speakerElements[i];
	          speakerElement.setAttribute("fill", this.colors.accent);
	          speakerElement.setAttribute("stroke", this.colors.accent);
	        }
	      }
	    },
	    render: {
	      value: function render() {
	        this.knobCoordinates = {
	          x: this.value.x.normalized * this.width,
	          y: this.height - this.value.y.normalized * this.height
	        };
	
	        this.knob.setAttribute("cx", this.knobCoordinates.x);
	        this.knob.setAttribute("cy", this.knobCoordinates.y);
	      }
	    },
	    click: {
	      value: function click() {
	        this.position.x.anchor = this.mouse;
	        this.position.y.anchor = this.mouse;
	        this.move();
	      }
	    },
	    move: {
	      value: function move() {
	        if (this.clicked) {
	          this.position.x.update(this.mouse);
	          this.position.y.update(this.mouse);
	          // position.x and position.y are normalized
	          // so are the levels
	          // likely don't need this.value at all -- only used for drawing
	          // not going to be a 'step' or 'min' and 'max' in this one.
	          this.calculateLevels();
	          this.emit("change", this.levels);
	          this.render();
	        }
	      }
	    },
	    release: {
	      value: function release() {
	        this.render();
	      }
	    },
	    normalized: {
	      get: function () {
	        return {
	          x: this.value.x.normalized,
	          y: this.value.y.normalized
	        };
	      }
	    },
	    calculateLevels: {
	      value: function calculateLevels() {
	        var _this = this;
	
	        this.value.x.updateNormal(this.position.x.value);
	        this.value.y.updateNormal(this.position.y.value);
	        this.levels = [];
	        this.speakers.forEach(function (s, i) {
	          var distance = math.distance(s[0] * _this.width, s[1] * _this.height, _this.position.x.value * _this.width, (1 - _this.position.y.value) * _this.height);
	          var level = math.clip(1 - distance / (_this.range * _this.width), 0, 1);
	          _this.levels.push(level);
	          _this.speakerElements[i].setAttribute("fill-opacity", level);
	        });
	      }
	    },
	    moveSource: {
	
	      /**
	      Move the audio source node and trigger the output event.
	      @param x {number} New x location, normalized 0-1
	      @param y {number} New y location, normalized 0-1
	      */
	
	      value: function moveSource(x, y) {
	        var location = {
	          x: x * this.width,
	          y: y * this.height
	        };
	        this.position.x.update(location);
	        this.position.y.update(location);
	        this.calculateLevels();
	        this.emit("change", this.levels);
	        this.render();
	      }
	    },
	    moveSpeaker: {
	
	      /**
	      Move a speaker node and trigger the output event.
	      @param index {number} Index of the speaker to move
	      @param x {number} New x location, normalized 0-1
	      @param y {number} New y location, normalized 0-1
	      */
	
	      value: function moveSpeaker(index, x, y) {
	
	        this.speakers[index] = [x, y];
	        this.speakerElements[index].setAttribute("cx", x * this.width);
	        this.speakerElements[index].setAttribute("cy", y * this.height);
	        this.calculateLevels();
	        this.emit("change", this.levels);
	        this.render();
	      }
	
	      /**
	      Set all speaker locations
	      @param locations {Array} Array of speaker locations. Each item in the array should be an array of normalized x and y coordinates.
	       setSpeakers(locations) {
	       }
	      */
	
	    }
	  });
	
	  return Pan2D;
	})(Interface);
	
	module.exports = Pan2D;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var math = __webpack_require__(5);
	var svg = __webpack_require__(4);
	var Interface = __webpack_require__(6);
	
	/**
	* Tilt
	*
	* @description Device tilt sensor with 2 or 3 axes (depending on your device and browser).
	*
	* @demo <span nexus-ui='tilt'></span>
	*
	* @example
	* var tilt = new Nexus.Tilt('#target')
	*
	* @output
	* change
	* Fires at a regular interval, as long as this interface is active (see the interface's <i>.active</i> property)<br>
	* The event data is an <i>object</i> containing x (number) and y (number) properties which represent the current tilt state of the device.
	*
	* @outputexample
	* tilt.on('change',function(v) {
	*   console.log(v);
	* })
	*
	*
	*/
	
	var Tilt = (function (_Interface) {
	  function Tilt() {
	    _classCallCheck(this, Tilt);
	
	    var options = ["value"];
	
	    var defaults = {
	      size: [80, 80]
	    };
	
	    _get(Object.getPrototypeOf(Tilt.prototype), "constructor", this).call(this, arguments, options, defaults);
	
	    this._active = true;
	
	    this.init();
	
	    // add event listener for device orientation
	
	    this.boundUpdate = this.update.bind(this);
	    //	this.boundMozTilt = this.mozTilt.bind(this)
	
	    if (window.DeviceOrientationEvent) {
	      this.orientationListener = window.addEventListener("deviceorientation", this.boundUpdate, false);
	    } else {
	      this._active = false;
	      this.colorInterface();
	    }
	
	    /*else if (window.OrientationEvent) {
	    //	  	window.addEventListener('MozOrientation', this.boundMozTilt, false);
	    } else {
	    console.log('Not supported on your device or browser.');
	    } */
	  }
	
	  _inherits(Tilt, _Interface);
	
	  _createClass(Tilt, {
	    buildInterface: {
	      value: function buildInterface() {
	
	        this.title = svg.create("text");
	        this.circleX = svg.create("circle");
	        this.circleY = svg.create("circle");
	        this.circleZ = svg.create("circle");
	
	        this.barX = svg.create("path");
	        this.barY = svg.create("path");
	        this.barZ = svg.create("path");
	
	        this.barX2 = svg.create("path");
	        this.barY2 = svg.create("path");
	        this.barZ2 = svg.create("path");
	
	        this.barX.setAttribute("opacity", "0.8");
	        this.barY.setAttribute("opacity", "0.8");
	        this.barZ.setAttribute("opacity", "0.8");
	        this.barX2.setAttribute("opacity", "0.8");
	        this.barY2.setAttribute("opacity", "0.8");
	        this.barZ2.setAttribute("opacity", "0.8");
	
	        this.circleX.setAttribute("cx", this.width * 3 / 12);
	        this.circleX.setAttribute("cy", this.height * 3 / 4);
	        this.circleX.setAttribute("r", this.height / 10);
	        this.circleX.setAttribute("opacity", "0.4");
	
	        this.circleY.setAttribute("cx", this.width * 6 / 12);
	        this.circleY.setAttribute("cy", this.height * 3 / 4);
	        this.circleY.setAttribute("r", this.height / 10);
	        this.circleY.setAttribute("opacity", "0.4");
	
	        this.circleZ.setAttribute("cx", this.width * 9 / 12);
	        this.circleZ.setAttribute("cy", this.height * 3 / 4);
	        this.circleZ.setAttribute("r", this.height / 10);
	        this.circleZ.setAttribute("opacity", "0.4");
	
	        this.barX.setAttribute("stroke-width", Math.round(this.height / 30));
	        this.barY.setAttribute("stroke-width", Math.round(this.height / 30));
	        this.barZ.setAttribute("stroke-width", Math.round(this.height / 30));
	
	        this.barX.setAttribute("fill", "none");
	        this.barY.setAttribute("fill", "none");
	        this.barZ.setAttribute("fill", "none");
	
	        this.barX2.setAttribute("stroke-width", Math.round(this.height / 30));
	        this.barY2.setAttribute("stroke-width", Math.round(this.height / 30));
	        this.barZ2.setAttribute("stroke-width", Math.round(this.height / 30));
	
	        this.barX2.setAttribute("fill", "none");
	        this.barY2.setAttribute("fill", "none");
	        this.barZ2.setAttribute("fill", "none");
	
	        this.title.setAttribute("x", this.width / 2);
	        this.title.setAttribute("y", this.height / 3 + 7);
	        this.title.setAttribute("font-size", "15px");
	        this.title.setAttribute("font-weight", "bold");
	        this.title.setAttribute("letter-spacing", "2px");
	        this.title.setAttribute("opacity", "0.7");
	        this.title.setAttribute("text-anchor", "middle");
	        this.title.textContent = "TILT";
	
	        this.element.appendChild(this.circleX);
	        this.element.appendChild(this.circleY);
	        this.element.appendChild(this.circleZ);
	
	        this.element.appendChild(this.barX);
	        this.element.appendChild(this.barY);
	        this.element.appendChild(this.barZ);
	
	        this.element.appendChild(this.barX2);
	        this.element.appendChild(this.barY2);
	        this.element.appendChild(this.barZ2);
	
	        this.element.appendChild(this.title);
	      }
	    },
	    colorInterface: {
	      value: function colorInterface() {
	
	        if (this._active) {
	          this.element.style.backgroundColor = this.colors.accent;
	          this.circleX.setAttribute("fill", this.colors.light);
	          this.circleY.setAttribute("fill", this.colors.light);
	          this.circleZ.setAttribute("fill", this.colors.light);
	          this.circleX.setAttribute("stroke", this.colors.light);
	          this.circleY.setAttribute("stroke", this.colors.light);
	          this.circleZ.setAttribute("stroke", this.colors.light);
	          this.barX.setAttribute("stroke", this.colors.light);
	          this.barY.setAttribute("stroke", this.colors.light);
	          this.barZ.setAttribute("stroke", this.colors.light);
	          this.barX2.setAttribute("stroke", this.colors.light);
	          this.barY2.setAttribute("stroke", this.colors.light);
	          this.barZ2.setAttribute("stroke", this.colors.light);
	          this.title.setAttribute("fill", this.colors.light);
	        } else {
	          this.element.style.backgroundColor = this.colors.fill;
	          this.circleX.setAttribute("fill", this.colors.mediumLight);
	          this.circleY.setAttribute("fill", this.colors.mediumLight);
	          this.circleZ.setAttribute("fill", this.colors.mediumLight);
	          this.circleX.setAttribute("stroke", this.colors.mediumLight);
	          this.circleY.setAttribute("stroke", this.colors.mediumLight);
	          this.circleZ.setAttribute("stroke", this.colors.mediumLight);
	          this.barX.setAttribute("stroke", this.colors.mediumLight);
	          this.barY.setAttribute("stroke", this.colors.mediumLight);
	          this.barZ.setAttribute("stroke", this.colors.mediumLight);
	          this.barX2.setAttribute("stroke", this.colors.mediumLight);
	          this.barY2.setAttribute("stroke", this.colors.mediumLight);
	          this.barZ2.setAttribute("stroke", this.colors.mediumLight);
	          this.title.setAttribute("fill", this.colors.mediumLight);
	        }
	      }
	    },
	    update: {
	      value: function update(v) {
	        if (this._active) {
	
	          var y = v.beta;
	          var x = v.gamma;
	          var z = v.alpha;
	
	          // take the original -90 to 90 scale and normalize it 0-1
	          x = math.scale(x, -90, 90, 0, 1);
	          y = math.scale(y, -90, 90, 0, 1);
	          z = math.scale(z, 0, 360, 0, 1);
	
	          var handlePoints = {
	            start: Math.PI * 1.5,
	            end: math.clip(math.scale(x, 0, 0.5, Math.PI * 1.5, Math.PI * 0.5), Math.PI * 0.5, Math.PI * 1.5)
	          };
	          var handle2Points = {
	            start: Math.PI * 2.5,
	            end: math.clip(math.scale(x, 0.5, 1, Math.PI * 2.5, Math.PI * 1.5), Math.PI * 1.5, Math.PI * 2.5)
	          };
	
	          var handlePath = svg.arc(this.circleX.cx.baseVal.value, this.circleX.cy.baseVal.value, this.circleX.r.baseVal.value, handlePoints.start, handlePoints.end);
	          var handle2Path = svg.arc(this.circleX.cx.baseVal.value, this.circleX.cy.baseVal.value, this.circleX.r.baseVal.value, handle2Points.start, handle2Points.end);
	
	          this.barX.setAttribute("d", handlePath);
	          this.barX2.setAttribute("d", handle2Path);
	
	          handlePoints = {
	            start: Math.PI * 1.5,
	            end: math.clip(math.scale(y, 0, 0.5, Math.PI * 1.5, Math.PI * 0.5), Math.PI * 0.5, Math.PI * 1.5)
	          };
	          handle2Points = {
	            start: Math.PI * 2.5,
	            end: math.clip(math.scale(y, 0.5, 1, Math.PI * 2.5, Math.PI * 1.5), Math.PI * 1.5, Math.PI * 2.5)
	          };
	
	          handlePath = svg.arc(this.circleY.cx.baseVal.value, this.circleY.cy.baseVal.value, this.circleY.r.baseVal.value, handlePoints.start, handlePoints.end);
	          handle2Path = svg.arc(this.circleY.cx.baseVal.value, this.circleY.cy.baseVal.value, this.circleY.r.baseVal.value, handle2Points.start, handle2Points.end);
	
	          this.barY.setAttribute("d", handlePath);
	          this.barY2.setAttribute("d", handle2Path);
	
	          handlePoints = {
	            start: Math.PI * 1.5,
	            end: math.clip(math.scale(z, 0, 0.5, Math.PI * 1.5, Math.PI * 0.5), Math.PI * 0.5, Math.PI * 1.5)
	          };
	          handle2Points = {
	            start: Math.PI * 2.5,
	            end: math.clip(math.scale(z, 0.5, 1, Math.PI * 2.5, Math.PI * 1.5), Math.PI * 1.5, Math.PI * 2.5)
	          };
	
	          handlePath = svg.arc(this.circleZ.cx.baseVal.value, this.circleZ.cy.baseVal.value, this.circleZ.r.baseVal.value, handlePoints.start, handlePoints.end);
	          handle2Path = svg.arc(this.circleZ.cx.baseVal.value, this.circleZ.cy.baseVal.value, this.circleZ.r.baseVal.value, handle2Points.start, handle2Points.end);
	
	          this.barZ.setAttribute("d", handlePath);
	          this.barZ2.setAttribute("d", handle2Path);
	
	          /*
	           let pointsX = {
	            start: 0,
	            end: math.scale( x, 0, 1, 0, Math.PI*2 )
	          };
	          //  console.log(this.circleX.cx.baseVal.value);
	           let pathX = svg.arc(this.circleX.cx.baseVal.value, this.circleX.cy.baseVal.value, this.circleX.r.baseVal.value*2, pointsX.start, pointsX.end);
	           this.barX.setAttribute('d',pathX); */
	
	          //this.textH.textContent = math.prune(x,2);
	          //this.textV.textContent = math.prune(y,2);
	          //
	          //  this.circleX.setAttribute('opacity',x);
	          //  this.circleY.setAttribute('opacity',y);
	          //  this.circleZ.setAttribute('opacity',z);
	
	          this.emit("change", {
	            x: x,
	            y: y,
	            z: z
	          });
	        }
	      }
	    },
	    click: {
	      value: function click() {
	        if (window.DeviceOrientationEvent) {
	          this.active = !this.active;
	        }
	      }
	    },
	    active: {
	
	      /**
	      Whether the interface is on (emitting values) or off (paused & not emitting values). Setting this property will update it.
	      @type {boolean}
	      */
	
	      get: function () {
	        return this._active;
	      },
	      set: function (on) {
	        this._active = on;
	        this.colorInterface();
	      }
	    },
	    customDestroy: {
	      value: function customDestroy() {
	        window.removeEventListener("deviceorientation", this.boundUpdate, false);
	      }
	    }
	  });
	
	  return Tilt;
	})(Interface);
	
	module.exports = Tilt;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var dom = __webpack_require__(7);
	var math = __webpack_require__(5);
	var Interface = __webpack_require__(6);
	var SliderTemplate = __webpack_require__(32);
	var touch = __webpack_require__(9);
	
	var SingleSlider = (function (_SliderTemplate) {
	  function SingleSlider() {
	    var _this = this;
	
	    _classCallCheck(this, SingleSlider);
	
	    var options = ["scale", "value"];
	
	    var defaults = {
	      size: [120, 20],
	      orientation: "vertical",
	      mode: "absolute",
	      scale: [0, 1],
	      step: 0,
	      value: 0,
	      hasKnob: true
	    };
	
	    _get(Object.getPrototypeOf(SingleSlider.prototype), "constructor", this).call(this, arguments, options, defaults);
	
	    /* events */
	
	    if (!touch.exists) {
	
	      this.click = function () {
	        _this.multislider.interacting = true;
	        _this.multislider.interpolation = {
	          index: _this.index,
	          value: _this.value
	        };
	        _this.down();
	        _this.multislider.values[_this.index] = _this.value;
	      };
	      this.element.addEventListener("mouseover", function (e) {
	        if (_this.multislider.interacting) {
	          if (!_this.offset) {
	            _this.offset = dom.findPosition(_this.element);
	          }
	          _this.mouse = dom.locateMouse(e, _this.offset);
	          _this.down();
	          _this.multislider.values[_this.index] = _this.value;
	          if (_this.multislider.interpolation) {
	            var distance = Math.abs(_this.multislider.interpolation.index - _this.index);
	            if (distance > 1) {
	              var low = Math.min(_this.multislider.interpolation.index, _this.index);
	              var high = Math.max(_this.multislider.interpolation.index, _this.index);
	              var lowValue = _this.multislider.sliders[low].value;
	              var highValue = _this.multislider.sliders[high].value;
	              for (var i = low; i < high; i++) {
	                _this.multislider.sliders[i].value = math.interp((i - low) / distance, lowValue, highValue);
	              }
	            }
	          }
	
	          _this.multislider.interpolation = {
	            index: _this.index,
	            value: _this.value
	          };
	        }
	      });
	
	      this.move = function () {};
	      this.element.addEventListener("mousemove", function (e) {
	        if (_this.multislider.interacting) {
	          if (!_this.offset) {
	            _this.offset = dom.findPosition(_this.element);
	          }
	          _this.mouse = dom.locateMouse(e, _this.offset);
	          _this.slide();
	          _this.multislider.values[_this.index] = _this.value;
	        }
	      });
	
	      this.release = function () {
	        _this.multislider.interacting = false;
	        _this.multislider.interpolation = false;
	      };
	      this.element.addEventListener("mouseup", function () {
	        if (_this.multislider.interacting) {
	          _this.up();
	          _this.multislider.interpolation = false;
	          _this.multislider.values[_this.index] = _this.value;
	        }
	      });
	      this.element.addEventListener("mouseout", function () {
	        if (_this.multislider.interacting) {
	          _this.up();
	          _this.multislider.values[_this.index] = _this.value;
	        }
	      });
	    }
	
	    this.customStyle();
	  }
	
	  _inherits(SingleSlider, _SliderTemplate);
	
	  _createClass(SingleSlider, {
	    customStyle: {
	      value: function customStyle() {
	
	        /* style changes */
	
	        this.bar.setAttribute("x", 0);
	        this.bar.setAttribute("transform", "translate(0,0)");
	        this.bar.setAttribute("rx", 0); // corner radius
	        this.bar.setAttribute("ry", 0);
	        this.bar.setAttribute("width", this.width);
	        this.bar.setAttribute("height", this.height);
	
	        this.fillbar.setAttribute("x", 0);
	        this.fillbar.setAttribute("transform", "translate(0,0)");
	        this.fillbar.setAttribute("rx", 0); // corner radius
	        this.fillbar.setAttribute("ry", 0);
	        this.fillbar.setAttribute("width", this.width);
	        this.fillbar.setAttribute("height", this.height);
	      }
	    }
	  });
	
	  return SingleSlider;
	})(SliderTemplate);
	
	/**
	* Multislider
	*
	* @description Multislider
	*
	* @demo <span nexus-ui="multislider"></span>
	*
	* @example
	* var multislider = new Nexus.Multislider('#target')
	*
	* @example
	* var multislider = new Nexus.Multislider('#target',{
	*  'size': [200,100],
	*  'numberOfSliders': 5,
	*  'min': 0,
	*  'max': 1,
	*  'step': 0,
	*  'values': [0.7,0.7,0.7,0.7,0.7]
	* })
	*
	* @output
	* change
	* Fires any time the interface's value changes. <br>
	* The event data an object containing <i>index</i> and <i>value</i> properties
	*
	* @outputexample
	* multislider.on('change',function(v) {
	*   console.log(v);
	* })
	*
	*/
	
	/*
	Properties
	.values
	
	*/
	
	var Multislider = (function (_Interface) {
	  function Multislider() {
	    _classCallCheck(this, Multislider);
	
	    var options = ["value"];
	
	    var defaults = {
	      size: [200, 100],
	      numberOfSliders: 5,
	      min: 0,
	      max: 1,
	      step: 0,
	      values: [0.7, 0.7, 0.7, 0.7, 0.7]
	    };
	
	    _get(Object.getPrototypeOf(Multislider.prototype), "constructor", this).call(this, arguments, options, defaults);
	
	    this._numberOfSliders = this.settings.numberOfSliders;
	    this.values = this.settings.values;
	
	    this.sliders = [];
	
	    this.interacting = false;
	
	    this.init();
	  }
	
	  _inherits(Multislider, _Interface);
	
	  _createClass(Multislider, {
	    buildFrame: {
	      value: function buildFrame() {
	        this.element = document.createElement("div");
	        this.parent.appendChild(this.element);
	      }
	    },
	    buildInterface: {
	      value: function buildInterface() {
	
	        var min = this.settings.min;
	        var max = this.settings.max;
	        var step = this.settings.step;
	
	        if (this.sliders.length) {
	          min = this.sliders[0].min;
	          max = this.sliders[0].max;
	          step = this.sliders[0].step;
	        }
	
	        this.sliders = [];
	
	        for (var i = 0; i < this._numberOfSliders; i++) {
	          var container = document.createElement("span");
	
	          var slider = new SingleSlider(container, {
	            scale: [min, max],
	            step: step,
	            mode: "absolute",
	            orientation: "vertical",
	            value: this.values[i],
	            hasKnob: false,
	            component: true }, this.update.bind(this, i));
	          slider.multislider = this;
	
	          slider.index = i;
	          if (touch.exists) {
	            slider.bar.index = i;
	            slider.fillbar.index = i;
	            slider.preClick = slider.preMove = slider.preRelease = function () {};
	            slider.click = slider.move = slider.release = function () {};
	            slider.preTouch = slider.preTouchMove = slider.preTouchRelease = function () {};
	            slider.touch = slider.touchMove = slider.touchRelease = function () {};
	          }
	
	          this.sliders.push(slider);
	          this.element.appendChild(container);
	        }
	        if (touch.exists) {
	          this.addTouchListeners();
	        }
	      }
	    },
	    colorInterface: {
	      value: function colorInterface() {
	        for (var i = 0; i < this.sliders.length; i++) {
	          this.sliders[i].colors = this.colors;
	          this.sliders[i].colorInterface();
	        }
	      }
	    },
	    sizeInterface: {
	      value: function sizeInterface() {
	
	        var sliderWidth = this.width / this.sliders.length;
	        var sliderHeight = this.height;
	
	        for (var i = 0; i < this.sliders.length; i++) {
	          this.sliders[i].resize(sliderWidth, sliderHeight);
	          this.sliders[i].customStyle();
	        }
	      }
	    },
	    update: {
	      value: function update(index, value) {
	        this.emit("change", {
	          index: index,
	          value: value
	        });
	      }
	    },
	    addTouchListeners: {
	      value: function addTouchListeners() {
	        var _this = this;
	
	        this.preClick = this.preMove = this.preRelease = function () {};
	        this.click = this.move = this.release = function () {};
	        this.preTouch = this.preTouchMove = this.preTouchRelease = function () {};
	        this.touch = this.touchMove = this.touchRelease = function () {};
	
	        this.currentElement = false;
	
	        this.element.addEventListener("touchstart", function (e) {
	          var element = document.elementFromPoint(e.targetTouches[0].clientX, e.targetTouches[0].clientY);
	          var slider = _this.sliders[element.index];
	          if (!slider.offset) {
	            slider.offset = dom.findPosition(slider.element);
	          }
	          slider.mouse = dom.locateMouse(e, slider.offset);
	          slider.down();
	          _this.currentElement = element.index;
	          e.preventDefault();
	          e.stopPropagation();
	        });
	
	        this.element.addEventListener("touchmove", function (e) {
	          var element = document.elementFromPoint(e.targetTouches[0].clientX, e.targetTouches[0].clientY);
	          var slider = _this.sliders[element.index];
	          if (!slider.offset) {
	            slider.offset = dom.findPosition(slider.element);
	          }
	          slider.mouse = dom.locateMouse(e, slider.offset);
	          if (element.index !== _this.currentElement) {
	            if (_this.currentElement >= 0) {
	              var pastslider = _this.sliders[_this.currentElement];
	              pastslider.up();
	            }
	            slider.down();
	          } else {
	            slider.slide();
	          }
	          _this.currentElement = element.index;
	          e.preventDefault();
	          e.stopPropagation();
	        });
	
	        this.element.addEventListener("touchend", function (e) {
	          // no touches to calculate because none remaining
	          var slider = _this.sliders[_this.currentElement];
	          slider.up();
	          _this.interacting = false;
	          _this.currentElement = false;
	          e.preventDefault();
	          e.stopPropagation();
	        });
	      }
	    },
	    numberOfSliders: {
	
	      /**
	      Get or set the number of sliders
	      @type {Number}
	      */
	
	      get: function () {
	        return this.sliders.length;
	      },
	      set: function (v) {
	        if (v === this.sliders.length) {
	          return;
	        }
	        this.sliders.forEach(function (slider) {
	          slider.destroy();
	        });
	        this.empty();
	        this._numberOfSliders = v;
	        this.buildInterface();
	      }
	    },
	    min: {
	
	      /**
	      Lower limit of the multislider's output range
	      @type {number}
	      @example multislider.min = 1000;
	      */
	
	      get: function () {
	        return this.sliders[0].min;
	      },
	      set: function (v) {
	        this.sliders.forEach(function (slider) {
	          slider.min = v;
	        });
	      }
	    },
	    max: {
	
	      /**
	      Upper limit of the multislider's output range
	      @type {number}
	      @example multislider.max = 1000;
	      */
	
	      get: function () {
	        return this.sliders[0].max;
	      },
	      set: function (v) {
	        this.sliders.forEach(function (slider) {
	          slider.max = v;
	        });
	      }
	    },
	    step: {
	
	      /**
	      The increment that the multislider's value changes by.
	      @type {number}
	      @example multislider.step = 5;
	      */
	
	      get: function () {
	        return this.sliders[0].step;
	      },
	      set: function (v) {
	        this.sliders.forEach(function (slider) {
	          slider.step = v;
	        });
	      }
	    },
	    setSlider: {
	
	      /**
	      Set the value of an individual slider
	      @param index {number} Slider index
	      @param value {number} New slider value
	      @example
	      // Set the first slider to value 0.5
	      multislider.setSlider(0,0.5)
	      */
	
	      value: function setSlider(index, value) {
	        this.sliders[index].value = value;
	        this.emit("change", {
	          index: index,
	          value: value
	        });
	      }
	    },
	    setAllSliders: {
	
	      /**
	      Set the value of all sliders at once. If the size of the input array does not match the current number of sliders, the value array will repeat until all sliders have been set. I.e. an input array of length 1 will set all sliders to that value.
	      @param values {Array} All slider values
	      @example
	      multislider.setAllSliders([0.2,0.3,0.4,0.5,0.6])
	      */
	
	      value: function setAllSliders(values) {
	        var _this = this;
	
	        this.values = values;
	        this.sliders.forEach(function (slider, i) {
	          slider.value = values[i % values.length];
	          _this.emit("change", {
	            index: i,
	            value: slider.value
	          });
	        });
	      }
	    }
	  });
	
	  return Multislider;
	})(Interface);
	
	module.exports = Multislider;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var svg = __webpack_require__(4);
	var Interface = __webpack_require__(6);
	var Step = __webpack_require__(11);
	
	var Interaction = _interopRequireWildcard(__webpack_require__(12));
	
	var SliderTemplate = (function (_Interface) {
	  function SliderTemplate(args, options, defaults) {
	    _classCallCheck(this, SliderTemplate);
	
	    _get(Object.getPrototypeOf(SliderTemplate.prototype), "constructor", this).call(this, args, options, defaults);
	
	    this.orientation = this.settings.orientation;
	
	    //  this.mode = this.settings.mode;
	
	    this.hasKnob = this.settings.hasKnob;
	
	    // this.step should eventually be get/set
	    // updating it will update the _value step model
	    //  this.step = this.settings.step; // float
	
	    this._value = new Step(this.settings.scale[0], this.settings.scale[1], this.settings.step, this.settings.value);
	
	    this.init();
	
	    this.position = new Interaction.Handle(this.settings.mode, this.orientation, [0, this.width], [this.height, 0]);
	    this.position.value = this._value.normalized;
	
	    this.value = this._value.value;
	
	    this.emit("change", this.value);
	  }
	
	  _inherits(SliderTemplate, _Interface);
	
	  _createClass(SliderTemplate, {
	    buildInterface: {
	      value: function buildInterface() {
	
	        this.bar = svg.create("rect");
	        this.fillbar = svg.create("rect");
	        this.knob = svg.create("circle");
	
	        this.element.appendChild(this.bar);
	        this.element.appendChild(this.fillbar);
	        this.element.appendChild(this.knob);
	
	        this.sizeInterface();
	      }
	    },
	    sizeInterface: {
	      value: function sizeInterface() {
	
	        if (!this.settings.orientation) {
	          if (this.width < this.height) {
	            this.orientation = "vertical";
	          } else {
	            this.orientation = "horizontal";
	          }
	        }
	
	        var x = undefined,
	            y = undefined,
	            w = undefined,
	            h = undefined,
	            barOffset = undefined,
	            cornerRadius = undefined;
	        this.knobData = {
	          level: 0,
	          r: 0
	        };
	
	        if (this.orientation === "vertical") {
	          this.thickness = this.width / 2;
	          x = this.width / 2;
	          y = 0;
	          w = this.thickness;
	          h = this.height;
	          this.knobData.r = this.thickness * 0.8;
	          this.knobData.level = h - this.normalized * h;
	          barOffset = "translate(" + this.thickness * -1 / 2 + ",0)";
	          cornerRadius = w / 2;
	        } else {
	          this.thickness = this.height / 2;
	          x = 0;
	          y = this.height / 2;
	          w = this.width;
	          h = this.thickness;
	          this.knobData.r = this.thickness * 0.8;
	          this.knobData.level = this.normalized * w;
	          barOffset = "translate(0," + this.thickness * -1 / 2 + ")";
	          cornerRadius = h / 2;
	        }
	
	        this.bar.setAttribute("x", x);
	        this.bar.setAttribute("y", y);
	        this.bar.setAttribute("transform", barOffset);
	        this.bar.setAttribute("rx", cornerRadius); // corner radius
	        this.bar.setAttribute("ry", cornerRadius);
	        this.bar.setAttribute("width", w);
	        this.bar.setAttribute("height", h);
	
	        if (this.orientation === "vertical") {
	          this.fillbar.setAttribute("x", x);
	          this.fillbar.setAttribute("y", this.knobData.level);
	          this.fillbar.setAttribute("width", w);
	          this.fillbar.setAttribute("height", h - this.knobData.level);
	        } else {
	          this.fillbar.setAttribute("x", 0);
	          this.fillbar.setAttribute("y", y);
	          this.fillbar.setAttribute("width", this.knobData.level);
	          this.fillbar.setAttribute("height", h);
	        }
	        this.fillbar.setAttribute("transform", barOffset);
	        this.fillbar.setAttribute("rx", cornerRadius);
	        this.fillbar.setAttribute("ry", cornerRadius);
	
	        if (this.orientation === "vertical") {
	          this.knob.setAttribute("cx", x);
	          this.knob.setAttribute("cy", this.knobData.level);
	        } else {
	          this.knob.setAttribute("cx", this.knobData.level);
	          this.knob.setAttribute("cy", y);
	        }
	        this.knob.setAttribute("r", this.knobData.r);
	
	        if (this.position) {
	          this.position.resize([0, this.width], [this.height, 0]);
	        }
	      }
	    },
	    colorInterface: {
	      value: function colorInterface() {
	
	        this.bar.setAttribute("fill", this.colors.fill);
	        this.fillbar.setAttribute("fill", this.colors.accent);
	        this.knob.setAttribute("fill", this.colors.accent);
	        if (!this.hasKnob) {
	          this.knob.setAttribute("fill", "none");
	        }
	      }
	    },
	    render: {
	      value: function render() {
	        if (!this.clicked) {
	          this.knobData.r = this.thickness * 0.75;
	        }
	        this.knob.setAttribute("r", this.knobData.r);
	
	        if (this.orientation === "vertical") {
	          this.knobData.level = this._value.normalized * this.height;
	          this.knob.setAttribute("cy", this.height - this.knobData.level);
	          this.fillbar.setAttribute("y", this.height - this.knobData.level);
	          this.fillbar.setAttribute("height", this.knobData.level);
	        } else {
	          this.knobData.level = this._value.normalized * this.width;
	          this.knob.setAttribute("cx", this.knobData.level);
	          this.fillbar.setAttribute("x", 0);
	          this.fillbar.setAttribute("width", this.knobData.level);
	        }
	      }
	    },
	    down: {
	      value: function down() {
	        this.clicked = true;
	        this.knobData.r = this.thickness * 0.9;
	        this.position.anchor = this.mouse;
	        this.slide();
	      }
	    },
	    slide: {
	      value: function slide() {
	        if (this.clicked) {
	          this.position.update(this.mouse);
	          this.value = this._value.updateNormal(this.position.value);
	          this.emit("change", this.value);
	        }
	      }
	    },
	    up: {
	      value: function up() {
	        this.clicked = false;
	        this.render();
	      }
	    },
	    normalized: {
	      get: function () {
	        return this._value.normalized;
	      }
	    },
	    value: {
	
	      /**
	      The slider's current value. If set manually, will update the interface and trigger the output event.
	      @type {number}
	      @example slider.value = 10;
	      */
	
	      get: function () {
	        return this._value.value;
	      },
	      set: function (v) {
	        this._value.update(v);
	        this.position.value = this._value.normalized;
	        this.render();
	      }
	    },
	    min: {
	
	      /**
	      Lower limit of the sliders's output range
	      @type {number}
	      @example slider.min = 1000;
	      */
	
	      get: function () {
	        return this._value.min;
	      },
	      set: function (v) {
	        this._value.min = v;
	      }
	    },
	    max: {
	
	      /**
	      Upper limit of the slider's output range
	      @type {number}
	      @example slider.max = 1000;
	      */
	
	      get: function () {
	        return this._value.max;
	      },
	      set: function (v) {
	        this._value.max = v;
	      }
	    },
	    step: {
	
	      /**
	      The increment that the slider's value changes by.
	      @type {number}
	      @example slider.step = 5;
	      */
	
	      get: function () {
	        return this._value.step;
	      },
	      set: function (v) {
	        this._value.step = v;
	      }
	    },
	    mode: {
	
	      /**
	      Absolute mode (slider's value jumps to mouse click position) or relative mode (mouse drag changes value relative to its current position). Default: "relative".
	      @type {string}
	      @example slider.mode = "relative";
	      */
	
	      get: function () {
	        return this.position.mode;
	      },
	      set: function (v) {
	        this.position.mode = v;
	      }
	    }
	  });
	
	  return SliderTemplate;
	})(Interface);
	
	module.exports = SliderTemplate;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var svg = __webpack_require__(4);
	var math = __webpack_require__(5);
	var Interface = __webpack_require__(6);
	var Step = __webpack_require__(11);
	
	var Interaction = _interopRequireWildcard(__webpack_require__(12));
	
	/**
	* Pan
	*
	* @description Stereo crossfader.
	*
	* @demo <span nexus-ui="pan"></span>
	*
	* @example
	* var pan = new Nexus.Pan('#target')
	*
	* @output
	* change
	* Fires any time the interface's value changes. <br>
	* The event data is an object containing the interface's <i>value</i> (-1 to 1), as well as <i>L</i> and <i>R</i> amplitude values (0-1) for left and right speakers, calculated by a square-root crossfade algorithm.
	*
	* @outputexample
	* pan.on('change',function(v) {
	*   console.log(v);
	* })
	*
	*
	*/
	
	var Pan = (function (_Interface) {
	  function Pan() {
	    _classCallCheck(this, Pan);
	
	    var options = ["scale", "value"];
	
	    var defaults = {
	      size: [120, 20],
	      orientation: "horizontal",
	      mode: "relative",
	      scale: [-1, 1],
	      step: 0,
	      value: 0,
	      hasKnob: true
	    };
	
	    _get(Object.getPrototypeOf(Pan.prototype), "constructor", this).call(this, arguments, options, defaults);
	
	    this.orientation = this.settings.orientation;
	
	    this.mode = this.settings.mode;
	
	    this.hasKnob = this.settings.hasKnob;
	
	    // this.step should eventually be get/set
	    // updating it will update the _value step model
	    this.step = this.settings.step; // float
	
	    this._value = new Step(this.settings.scale[0], this.settings.scale[1], this.settings.step, this.settings.value);
	
	    this.init();
	
	    this.position = new Interaction.Handle(this.mode, this.orientation, [0, this.width], [this.height, 0]);
	    this.position.value = this._value.normalized;
	
	    this.value = this._value.value;
	
	    this.emit("change", this.value);
	  }
	
	  _inherits(Pan, _Interface);
	
	  _createClass(Pan, {
	    buildInterface: {
	      value: function buildInterface() {
	
	        this.bar = svg.create("rect");
	        this.knob = svg.create("circle");
	
	        this.element.appendChild(this.bar);
	        this.element.appendChild(this.knob);
	      }
	    },
	    sizeInterface: {
	      value: function sizeInterface() {
	
	        if (this.position) {
	          this.position.resize([0, this.width], [this.height, 0]);
	        }
	
	        if (this.width < this.height) {
	          this.orientation = "vertical";
	        } else {
	          this.orientation = "horizontal";
	        }
	
	        var x = undefined,
	            y = undefined,
	            w = undefined,
	            h = undefined,
	            barOffset = undefined,
	            cornerRadius = undefined;
	        this.knobData = {
	          level: 0,
	          r: 0
	        };
	
	        if (this.orientation === "vertical") {
	          this.thickness = this.width / 2;
	          x = this.width / 2;
	          y = 0;
	          w = this.thickness;
	          h = this.height;
	          this.knobData.r = this.thickness * 0.8;
	          this.knobData.level = h - this.knobData.r - this.normalized * (h - this.knobData.r * 2);
	          barOffset = "translate(" + this.thickness * -1 / 2 + ",0)";
	          cornerRadius = w / 2;
	        } else {
	          this.thickness = this.height / 2;
	          x = 0;
	          y = this.height / 2;
	          w = this.width;
	          h = this.thickness;
	          this.knobData.r = this.thickness * 0.8;
	          this.knobData.level = this.normalized * (w - this.knobData.r * 2) + this.knobData.r;
	          barOffset = "translate(0," + this.thickness * -1 / 2 + ")";
	          cornerRadius = h / 2;
	        }
	
	        this.bar.setAttribute("x", x);
	        this.bar.setAttribute("y", y);
	        this.bar.setAttribute("transform", barOffset);
	        this.bar.setAttribute("rx", cornerRadius); // corner radius
	        this.bar.setAttribute("ry", cornerRadius);
	        this.bar.setAttribute("width", w);
	        this.bar.setAttribute("height", h);
	
	        if (this.orientation === "vertical") {
	          this.knob.setAttribute("cx", x);
	          this.knob.setAttribute("cy", this.knobData.level);
	        } else {
	          this.knob.setAttribute("cx", this.knobData.level);
	          this.knob.setAttribute("cy", y);
	        }
	        this.knob.setAttribute("r", this.knobData.r);
	      }
	    },
	    colorInterface: {
	      value: function colorInterface() {
	
	        this.bar.setAttribute("fill", this.colors.fill);
	        this.knob.setAttribute("fill", this.colors.accent);
	
	        if (!this.hasKnob) {
	          this.knob.setAttribute("fill", "transparent");
	        }
	      }
	    },
	    render: {
	      value: function render() {
	        if (!this.clicked) {
	          this.knobData.r = this.thickness * 0.75;
	        }
	        this.knob.setAttribute("r", this.knobData.r);
	
	        if (this.orientation === "vertical") {
	          this.knobData.level = this.knobData.r + this._value.normalized * (this.height - this.knobData.r * 2);
	          this.knob.setAttribute("cy", this.height - this.knobData.level);
	        } else {
	          this.knobData.level = this._value.normalized * (this.width - this.knobData.r * 2) + this.knobData.r;
	          this.knob.setAttribute("cx", this.knobData.level);
	        }
	      }
	    },
	    click: {
	      value: function click() {
	        this.knobData.r = this.thickness * 0.9;
	        this.position.anchor = this.mouse;
	        this.move();
	      }
	    },
	    move: {
	      value: function move() {
	        if (this.clicked) {
	          this.position.update(this.mouse);
	
	          this.value = this._value.updateNormal(this.position.value);
	
	          this.emit("change", {
	            value: this.value,
	            L: Math.pow(math.scale(this.value, -1, 1, 1, 0), 2),
	            R: Math.pow(math.scale(this.value, -1, 1, 0, 1), 2)
	          });
	        }
	      }
	    },
	    release: {
	      value: function release() {
	        this.render();
	      }
	    },
	    value: {
	
	      /**
	      The position of crossfader, from -1 (left) to 1 (right). Setting this value updates the interface and triggers the output event.
	      @type {number}
	      */
	
	      get: function () {
	        return this._value.value;
	      },
	      set: function (value) {
	        this._value.update(value);
	        this.position.value = this._value.normalized;
	        this.emit("change", {
	          value: this.value,
	          L: Math.pow(math.scale(this.value, -1, 1, 1, 0), 2),
	          R: Math.pow(math.scale(this.value, -1, 1, 0, 1), 2)
	        });
	        this.render();
	      }
	    },
	    normalized: {
	      get: function () {
	        return this._value.normalized;
	      }
	    }
	  });
	
	  return Pan;
	})(Interface);
	
	module.exports = Pan;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var math = __webpack_require__(5);
	var svg = __webpack_require__(4);
	var Interface = __webpack_require__(6);
	
	var Point = function Point(point, envelope) {
	
	  this.x = point.x;
	  this.y = point.y;
	  this.envelope = envelope;
	
	  this.element = svg.create("circle");
	  this.element.setAttribute("fill", this.envelope.colors.accent);
	
	  this.envelope.element.appendChild(this.element);
	
	  this.resize = function () {
	    var r = ~ ~(Math.min(this.envelope.width, this.envelope.height) / 50) + 2;
	    this.element.setAttribute("r", r);
	  };
	
	  this.move = function (x, y) {
	
	    this.x = x || x === 0 ? x : this.x;
	    this.y = y || y === 0 ? y : this.y;
	
	    if (this.envelope.nodes.indexOf(this) >= 0) {
	
	      var prevIndex = this.envelope.nodes.indexOf(this) - 1;
	      var nextIndex = this.envelope.nodes.indexOf(this) + 1;
	
	      var prevNode = this.envelope.nodes[prevIndex];
	      var nextNode = this.envelope.nodes[nextIndex];
	
	      var lowX = prevIndex >= 0 ? prevNode.x : 0;
	      var highX = nextIndex < this.envelope.nodes.length ? nextNode.x : 1;
	
	      if (this.x < lowX) {
	        this.x = lowX;
	      }
	      if (this.x > highX) {
	        this.x = highX;
	      }
	    }
	
	    this.location = this.getCoordinates();
	    this.element.setAttribute("cx", this.location.x);
	    this.element.setAttribute("cy", this.location.y);
	  };
	
	  this.getCoordinates = function () {
	    return {
	      x: this.x * this.envelope.width,
	      y: (1 - this.y) * this.envelope.height
	    };
	  };
	
	  this.move(this.x, this.y, true);
	  this.resize();
	
	  this.destroy = function () {
	    this.envelope.element.removeChild(this.element);
	    this.envelope.nodes.splice(this.envelope.nodes.indexOf(this), 1);
	  };
	};
	
	/**
	* Envelope
	*
	* @description Interactive linear ramp visualization.
	*
	* @demo <span nexus-ui="envelope"></span>
	*
	* @example
	* var envelope = new Nexus.Envelope('#target')
	*
	* @example
	* var envelope = new Nexus.Envelope('#target',{
	*   'size': [300,150],
	*   'points': [
	*     {
	*       x: 0.1,
	*       y: 0.4
	*     },
	*     {
	*       x: 0.35,
	*       y: 0.6
	*     },
	*     {
	*       x: 0.65,
	*       y: 0.2
	*     },
	*     {
	*       x: 0.9,
	*       y: 0.4
	*     },
	*   ]
	* })
	*
	* @output
	* change
	* Fires any time a node is moved. <br>
	* The event data is an array of point locations. Each item in the array is an object containing <i>x</i> and <i>y</i> properties describing the location of a point on the envelope.
	*
	* @outputexample
	* envelope.on('change',function(v) {
	*   console.log(v);
	* })
	*
	*/
	
	var Envelope = (function (_Interface) {
	  function Envelope() {
	    _classCallCheck(this, Envelope);
	
	    var options = ["value"];
	
	    var defaults = {
	      size: [300, 150],
	      points: [{
	        x: 0.1,
	        y: 0.4
	      }, {
	        x: 0.35,
	        y: 0.6
	      }, {
	        x: 0.65,
	        y: 0.2
	      }, {
	        x: 0.9,
	        y: 0.4
	      }]
	    };
	
	    _get(Object.getPrototypeOf(Envelope.prototype), "constructor", this).call(this, arguments, options, defaults);
	
	    this.points = this.settings.points;
	
	    this.nodes = [];
	
	    this.selected = false;
	
	    this.init();
	  }
	
	  _inherits(Envelope, _Interface);
	
	  _createClass(Envelope, {
	    buildInterface: {
	      value: function buildInterface() {
	        var _this = this;
	
	        this.points.forEach(function (point) {
	          var node = new Point(point, _this);
	          _this.nodes.push(node);
	        });
	
	        this.sortPoints();
	
	        this.line = svg.create("polyline");
	        this.line.setAttribute("stroke-width", 2);
	        this.line.setAttribute("fill", "none");
	
	        this.element.appendChild(this.line);
	
	        this.fill = svg.create("polyline");
	        this.fill.setAttribute("fill-opacity", "0.2");
	
	        this.element.appendChild(this.fill);
	      }
	    },
	    sizeInterface: {
	      value: function sizeInterface() {
	
	        for (var i = 0; i < this.nodes.length; i++) {
	          this.nodes[i].resize();
	          this.nodes[i].move();
	        }
	
	        this.render();
	      }
	    },
	    colorInterface: {
	      value: function colorInterface() {
	        var _this = this;
	
	        this.element.style.backgroundColor = this.colors.fill;
	        this.line.setAttribute("stroke", this.colors.accent);
	        this.fill.setAttribute("fill", this.colors.accent);
	        this.nodes.forEach(function (node) {
	          node.element.setAttribute("fill", _this.colors.accent);
	        });
	      }
	    },
	    render: {
	      value: function render() {
	        //  this.nodes[this.selected].move( this.points )
	        this.calculatePath();
	      }
	    },
	    calculatePoints: {
	      value: function calculatePoints() {
	        var _this = this;
	
	        this.points = [];
	        this.nodes.forEach(function (node) {
	          _this.points.push({ x: node.x, y: node.y });
	        });
	      }
	    },
	    calculatePath: {
	      value: function calculatePath() {
	
	        //stroke data
	        var data = "0 " + this.nodes[0].location.y + ", ";
	
	        // data should be re-ordered based on x location.
	        // whatever function adds a node should add it at the right index
	
	        this.nodes.forEach(function (node) {
	          //  let location = node.getCoordinates();
	          data += node.location.x + " " + node.location.y + ", ";
	        });
	
	        //  data += point.x*this.width+' '+ point.y*this.height+', ';
	        data += this.width + " " + this.nodes[this.nodes.length - 1].location.y;
	
	        this.line.setAttribute("points", data);
	
	        // fill data
	        // add bottom corners
	
	        data += ", " + this.width + " " + this.height + ", ";
	        data += "0 " + this.height;
	
	        this.fill.setAttribute("points", data);
	      }
	    },
	    click: {
	      value: function click() {
	        // find nearest node and set this.selected (index)
	        this.hasMoved = false;
	        this.selected = this.findNearestNode();
	
	        this.nodes[this.selected].move(this.mouse.x / this.width, 1 - this.mouse.y / this.height);
	        this.scaleNode(this.selected);
	
	        // must do this b/c new node may have been created
	        this.calculatePoints();
	        this.emit("change", this.points);
	        this.render();
	      }
	    },
	    move: {
	      value: function move() {
	        if (this.clicked) {
	          this.mouse.x = math.clip(this.mouse.x, 0, this.width);
	          this.hasMoved = true;
	
	          this.nodes[this.selected].move(this.mouse.x / this.width, 1 - this.mouse.y / this.height);
	          this.scaleNode(this.selected);
	
	          this.calculatePoints();
	          this.emit("change", this.points);
	          this.render();
	        }
	      }
	    },
	    release: {
	      value: function release() {
	
	        if (!this.hasMoved) {
	          this.nodes[this.selected].destroy();
	        }
	
	        this.calculatePoints();
	        this.emit("change", this.points);
	        this.render();
	
	        // reset this.selected
	        this.selected = null;
	      }
	    },
	    findNearestNode: {
	      value: function findNearestNode() {
	        var nearestIndex = null;
	        // set this unreasonably high so that every distance will be lower than it.
	        var nearestDist = 10000;
	        var before = false;
	        var x = this.mouse.x / this.width;
	        var y = 1 - this.mouse.y / this.height;
	        var nodes = this.nodes;
	        for (var i = 0; i < nodes.length; i++) {
	
	          // calculate the distance from mouse to this node using pythagorean theorem
	          var distance = Math.sqrt(Math.pow(nodes[i].x - x, 2) + Math.pow(nodes[i].y - y, 2));
	
	          // if this distance is less than the previous shortest distance, use this index
	          if (distance < nearestDist) {
	            nearestDist = distance;
	            nearestIndex = i;
	            before = x > nodes[i].x;
	          }
	        }
	
	        // if not very close to any node, create a node
	        if (nearestDist > 0.07) {
	
	          nearestIndex = this.getIndexFromX(this.mouse.x / this.width);
	
	          this.nodes.splice(nearestIndex, 0, new Point({
	            x: this.mouse.x / this.width,
	            y: 1 - this.mouse.y / this.height
	          }, this));
	          this.hasMoved = true;
	        }
	
	        return nearestIndex;
	      }
	    },
	    getIndexFromX: {
	      value: function getIndexFromX(x) {
	        var _this = this;
	
	        var index = 0;
	        this.nodes.forEach(function (node, i) {
	          if (_this.nodes[i].x <= x) {
	            index = i + 1;
	          }
	        });
	        return index;
	      }
	    },
	    scaleNode: {
	      value: function scaleNode(i) {
	
	        var clippedX = math.clip(this.nodes[i].x, 0, 1);
	        var clippedY = math.clip(this.nodes[i].y, 0, 1);
	
	        this.nodes[i].move(clippedX, clippedY);
	      }
	    },
	    sortPoints: {
	
	      /**
	      Sort the this.points array from left-most point to right-most point. You should not regularly need to use this, however it may be useful if the points get unordered.
	      */
	
	      value: function sortPoints() {
	        this.nodes.sort(function (a, b) {
	          return a.x > b.x;
	        });
	      }
	    },
	    addPoint: {
	
	      /**
	      Add a breakpoint on the envelope.
	      @param x {number} x location of the point, normalized (0-1)
	      @param y {number} y location of the point, normalized (0-1)
	      */
	
	      value: function addPoint(x, y) {
	        var index = this.nodes.length;
	
	        this.sortPoints();
	
	        for (var i = 0; i < this.nodes.length; i++) {
	          if (x < this.nodes[i].x) {
	            index = i;
	            break;
	          }
	        }
	
	        this.nodes.splice(index, 0, new Point({
	          x: x,
	          y: y
	        }, this));
	
	        this.scaleNode(index);
	
	        this.calculatePoints();
	        this.emit("change", this.points);
	
	        this.render();
	      }
	    },
	    scan: {
	
	      /**
	      Find the level at a certain x location on the envelope.
	      @param x {number} The x location to find the level of, normalized 0-1
	      */
	
	      value: function scan(x) {
	        // find surrounding points
	        var nextIndex = this.getIndexFromX(x);
	        var priorIndex = nextIndex - 1;
	        if (priorIndex < 0) {
	          priorIndex = 0;
	        }
	        if (nextIndex >= this.nodes.length) {
	          nextIndex = this.nodes.length - 1;
	        }
	        var priorPoint = this.nodes[priorIndex];
	        var nextPoint = this.nodes[nextIndex];
	        var loc = math.scale(x, priorPoint.x, nextPoint.x, 0, 1);
	        var value = math.interp(loc, priorPoint.y, nextPoint.y);
	        this.emit("scan", value);
	        return value;
	      }
	    },
	    movePoint: {
	
	      /**
	      Move a breakpoint on the envelope.
	      @param index {number} The index of the breakpoint to move
	      @param x {number} New x location, normalized 0-1
	      @param y {number} New y location, normalized 0-1
	      */
	
	      value: function movePoint(index, x, y) {
	        this.nodes[index].move(x, y);
	        this.scaleNode(index);
	        this.calculatePoints();
	        this.emit("change", this.points);
	        this.render();
	      }
	    },
	    adjustPoint: {
	
	      /**
	      Move a breakpoint on the envelope by a certain amount.
	      @param index {number} The index of the breakpoint to move
	      @param xOffset {number} X displacement, normalized 0-1
	      @param yOffset {number} Y displacement, normalized 0-1
	      */
	
	      value: function adjustPoint(index, xOffset, yOffset) {
	        this.nodes[index].move(this.nodes[index].x + xOffset, this.nodes[index].y + yOffset);
	        this.scaleNode(index);
	        this.calculatePoints();
	        this.emit("change", this.points);
	        this.render();
	      }
	    },
	    destroyPoint: {
	
	      /**
	      Remove a breakpoint from the envelope.
	      @param index {number} Index of the breakpoint to remove
	      */
	
	      value: function destroyPoint(index) {
	        this.nodes[index].destroy();
	        this.calculatePoints();
	        this.emit("change", this.points);
	        this.render();
	      }
	    },
	    setPoints: {
	
	      /**
	      Remove all existing breakpoints and add an entirely new set of breakpoints.
	      @param allPoints {array} An array of objects with x/y properties (normalized 0-1). Each object in the array specifices the x/y location of a new breakpoint to be added.
	      */
	
	      value: function setPoints(allPoints) {
	        var _this = this;
	
	        while (this.nodes.length) {
	          this.nodes[0].destroy();
	        }
	        allPoints.forEach(function (point) {
	          _this.addPoint(point.x, point.y);
	        });
	        this.calculatePoints();
	        this.emit("change", this.points);
	        this.render();
	      }
	    }
	  });
	
	  return Envelope;
	})(Interface);
	
	module.exports = Envelope;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var dom = __webpack_require__(7);
	//let math = require('../util/math');
	var Interface = __webpack_require__(6);
	
	/**
	* Spectrogram
	*
	* @description Audio spectrum visualization
	*
	* @demo <span nexus-ui="spectrogram"></span>
	*
	* @example
	* var spectrogram = new Nexus.Spectrogram('#target')
	*
	* @example
	* var spectrogram = new Nexus.Spectrogram('#target',{
	*   'size': [300,150]
	* })
	*
	* @output
	* &nbsp;
	* No events
	*
	*/
	
	var Spectrogram = (function (_Interface) {
	  function Spectrogram() {
	    _classCallCheck(this, Spectrogram);
	
	    var options = ["scale", "value"];
	
	    var defaults = {
	      size: [300, 150]
	    };
	
	    _get(Object.getPrototypeOf(Spectrogram.prototype), "constructor", this).call(this, arguments, options, defaults);
	
	    this.context = Nexus.context; // jshint ignore:line
	
	    this.analyser = this.context.createAnalyser();
	    this.analyser.fftSize = 2048;
	    this.bufferLength = this.analyser.frequencyBinCount;
	    this.dataArray = new Uint8Array(this.bufferLength);
	
	    this.active = true;
	
	    this.source = false;
	
	    this.init();
	  }
	
	  _inherits(Spectrogram, _Interface);
	
	  _createClass(Spectrogram, {
	    buildFrame: {
	      value: function buildFrame() {
	        this.canvas = new dom.SmartCanvas(this.parent);
	        this.element = this.canvas.element;
	      }
	    },
	    sizeInterface: {
	      value: function sizeInterface() {
	        this.canvas.resize(this.width, this.height);
	      }
	    },
	    colorInterface: {
	      value: function colorInterface() {
	        this.canvas.element.style.backgroundColor = this.colors.fill;
	      }
	    },
	    render: {
	      value: function render() {
	
	        if (this.active) {
	          requestAnimationFrame(this.render.bind(this));
	        }
	
	        this.analyser.getByteFrequencyData(this.dataArray);
	
	        this.canvas.context.fillStyle = this.colors.fill;
	        this.canvas.context.fillRect(0, 0, this.canvas.element.width, this.canvas.element.height);
	
	        if (this.source && this.dataArray) {
	
	          //console.log(this.dataArray);
	
	          var barWidth = this.canvas.element.width / this.bufferLength;
	          var barHeight = undefined;
	          var x = 0;
	
	          var definition = this.canvas.element.width / 50;
	
	          for (var i = 0; i < this.bufferLength; i = i + definition) {
	            barHeight = Math.max.apply(null, this.dataArray.subarray(i, i + definition));
	            barHeight /= 255;
	            barHeight *= this.canvas.element.height;
	
	            this.canvas.context.fillStyle = this.colors.accent;
	            this.canvas.context.fillRect(x, this.canvas.element.height - barHeight, barWidth * definition, barHeight);
	
	            x += barWidth * definition;
	          }
	        }
	      }
	    },
	    connect: {
	
	      /**
	      Equivalent to "patching in" an audio node to visualize. NOTE: You cannot connect audio nodes across two different audio contexts. NexusUI runs its audio analysis on its own audio context, Nexus.context. If the audio node you are visualizing is created on a different audio context, you will need to tell NexusUI to use that context instead: i.e. Nexus.context = YourAudioContextName. For example, in ToneJS projects, the line would be: Nexus.context = Tone.context . We recommend that you write that line of code only once at the beginning of your project.
	      @param node {AudioNode} The audio node to visualize
	      @example Nexus.context = Tone.context // or another audio context you have created
	      spectrogram.connect( Tone.Master );
	      */
	
	      value: function connect(node) {
	        if (this.source) {
	          this.disconnect();
	        }
	        this.source = node;
	        this.source.connect(this.analyser);
	        this.render();
	      }
	    },
	    disconnect: {
	
	      /**
	      Stop visualizing the source node and disconnect it.
	      */
	
	      value: function disconnect() {
	        this.source.disconnect(this.analyser);
	        this.source = null;
	      }
	    },
	    click: {
	      value: function click() {
	        this.active = !this.active;
	        this.render();
	      }
	    },
	    customDestroy: {
	      value: function customDestroy() {
	        this.active = false;
	      }
	    }
	  });
	
	  return Spectrogram;
	})(Interface);
	
	module.exports = Spectrogram;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var dom = __webpack_require__(7);
	var math = __webpack_require__(5);
	var Interface = __webpack_require__(6);
	
	/**
	* Meter
	*
	* @description Stereo decibel meter
	*
	* @demo <span nexus-ui="meter"></span>
	*
	* @example
	* var meter = new Nexus.Meter('#target')
	*
	* @example
	* var meter = new Nexus.Meter('#target',{
	*   size: [75,75]
	* })
	*
	* @output
	* &nbsp;
	* No events
	*
	*/
	
	var Meter = (function (_Interface) {
	  function Meter() {
	    _classCallCheck(this, Meter);
	
	    var options = ["scale", "value"];
	
	    var defaults = {
	      size: [30, 100]
	    };
	
	    _get(Object.getPrototypeOf(Meter.prototype), "constructor", this).call(this, arguments, options, defaults);
	
	    this.context = Nexus.context; // jshint ignore:line
	
	    this.channels = 2;
	
	    this.splitter = this.context.createChannelSplitter(this.channels);
	
	    this.analysers = [];
	
	    for (var i = 0; i < this.channels; i++) {
	      var analyser = this.context.createAnalyser();
	      this.splitter.connect(analyser, i);
	      analyser.fftSize = 1024;
	      analyser.smoothingTimeConstant = 1;
	      this.analysers.push(analyser);
	    }
	    this.bufferLength = this.analysers[0].frequencyBinCount;
	    this.dataArray = new Float32Array(this.bufferLength);
	
	    /*
	        // add linear gradient
	        var grd = canvasCtx.createLinearGradient(0, 0, 0, canvas.height);
	        // light blue
	        grd.addColorStop(0, '#000');
	        grd.addColorStop(0.2, '#bbb');
	        grd.addColorStop(0.4, '#d18');
	        // dark blue
	        grd.addColorStop(1, '#d18');
	        canvasCtx.fillStyle = grd; */
	
	    this.active = true;
	
	    this.db = -Infinity;
	
	    this.init();
	
	    this.meterWidth = this.canvas.element.width / this.channels;
	
	    this.render();
	  }
	
	  _inherits(Meter, _Interface);
	
	  _createClass(Meter, {
	    buildFrame: {
	      value: function buildFrame() {
	        this.canvas = new dom.SmartCanvas(this.parent);
	        this.element = this.canvas.element;
	      }
	    },
	    sizeInterface: {
	      value: function sizeInterface() {
	        this.canvas.resize(this.width, this.height);
	      }
	    },
	    colorInterface: {
	      value: function colorInterface() {
	        this.canvas.element.style.backgroundColor = this.colors.fill;
	      }
	    },
	    render: {
	      value: function render() {
	
	        if (this.active) {
	          requestAnimationFrame(this.render.bind(this));
	        }
	
	        this.canvas.context.fillStyle = this.colors.fill;
	        this.canvas.context.fillRect(0, 0, this.canvas.element.width, this.canvas.element.height);
	
	        for (var i = 0; i < this.analysers.length; i++) {
	
	          if (this.source) {
	
	            this.analysers[i].getFloatTimeDomainData(this.dataArray);
	
	            var rms = 0;
	
	            for (var _i = 0; _i < this.dataArray.length; _i++) {
	              rms += this.dataArray[_i] * this.dataArray[_i];
	            }
	
	            rms = Math.sqrt(rms / this.dataArray.length);
	
	            this.db = 20 * Math.log10(rms);
	          } else if (this.db > -200 && this.db !== -Infinity) {
	            this.db -= 1;
	          } else {
	            this.db = -Infinity;
	          }
	
	          //console.log(db)
	
	          if (this.db > -70) {
	
	            var linear = math.normalize(this.db, -70, 5);
	            var exp = linear * linear;
	            var y = math.scale(exp, 0, 1, this.element.height, 0);
	
	            this.canvas.context.fillStyle = this.colors.accent;
	            this.canvas.context.fillRect(this.meterWidth * i, y, this.meterWidth, this.canvas.element.height - y);
	
	            //console.log("rendering...")
	          }
	        }
	      }
	    },
	    connect: {
	
	      /**
	      Equivalent to "patching in" an audio node to visualize. NOTE: You cannot connect audio nodes across two different audio contexts. NexusUI runs its audio analysis on its own audio context, Nexus.context. If the audio node you are visualizing is created on a different audio context, you will need to tell NexusUI to use that context instead: i.e. Nexus.context = YourAudioContextName. For example, in ToneJS projects, the line would be: Nexus.context = Tone.context . We recommend that you write that line of code only once at the beginning of your project.
	      @param node {AudioNode} The audio node to visualize
	      @param channels {number} (optional) The number of channels in the source node to watch. If not specified, the interface will look for a .channelCount property on the input node. If it does not exist, the interface will default to 1 channel.
	      @example Nexus.context = Tone.context // or another audio context you have created
	      meter.connect( Tone.Master, 2 );
	      */
	
	      value: function connect(node, channels) {
	        if (this.source) {
	          this.disconnect();
	        }
	        //this.dummy.disconnect(this.splitter);
	
	        if (channels) {
	          this.channels = channels;
	        } else if (node.channelCount) {
	          this.channels = node.channelCount;
	        } else {
	          this.channels = 2;
	        }
	        this.meterWidth = this.canvas.element.width / this.channels;
	
	        this.source = node;
	        this.source.connect(this.splitter);
	
	        //  this.render();
	      }
	    },
	    disconnect: {
	
	      /**
	      Stop visualizing the source node and disconnect it.
	      */
	
	      value: function disconnect() {
	
	        this.source.disconnect(this.splitter);
	        this.source = false;
	        //  this.dummy.connect(this.splitter);
	        this.meterWidth = this.canvas.element.width / this.channels;
	      }
	    },
	    click: {
	      value: function click() {
	        this.active = !this.active;
	        this.render();
	      }
	    },
	    customDestroy: {
	      value: function customDestroy() {
	        this.active = false;
	      }
	    }
	  });
	
	  return Meter;
	})(Interface);
	
	module.exports = Meter;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var dom = __webpack_require__(7);
	var Interface = __webpack_require__(6);
	
	/**
	* Oscilloscope
	*
	* @description Visualizes a waveform's stream of values.
	*
	* @demo <span nexus-ui="oscilloscope"></span>
	*
	* @example
	* var oscilloscope = new Nexus.Oscilloscope('#target')
	*
	* @example
	* var oscilloscope = new Nexus.Oscilloscope('#target',{
	*   'size': [300,150]
	* })
	*
	* @output
	* &nbsp;
	* No events
	*
	*/
	
	var Oscilloscope = (function (_Interface) {
	  function Oscilloscope() {
	    _classCallCheck(this, Oscilloscope);
	
	    var options = ["scale", "value"];
	
	    var defaults = {
	      size: [300, 150]
	    };
	
	    _get(Object.getPrototypeOf(Oscilloscope.prototype), "constructor", this).call(this, arguments, options, defaults);
	
	    this.context = Nexus.context; // jshint ignore:line
	
	    this.analyser = this.context.createAnalyser();
	    this.analyser.fftSize = 2048;
	    this.bufferLength = this.analyser.frequencyBinCount;
	    this.dataArray = new Uint8Array(this.bufferLength);
	    this.analyser.getByteTimeDomainData(this.dataArray);
	
	    this.active = true;
	
	    this.source = false;
	
	    this.init();
	
	    this.render();
	  }
	
	  _inherits(Oscilloscope, _Interface);
	
	  _createClass(Oscilloscope, {
	    buildFrame: {
	      value: function buildFrame() {
	        this.canvas = new dom.SmartCanvas(this.parent);
	        this.element = this.canvas.element;
	      }
	    },
	    sizeInterface: {
	      value: function sizeInterface() {
	        this.canvas.resize(this.width, this.height);
	      }
	    },
	    colorInterface: {
	      value: function colorInterface() {
	        this.canvas.element.style.backgroundColor = this.colors.fill;
	      }
	    },
	    render: {
	      value: function render() {
	
	        if (this.active) {
	          requestAnimationFrame(this.render.bind(this));
	        }
	
	        this.analyser.getByteTimeDomainData(this.dataArray);
	
	        this.canvas.context.fillStyle = this.colors.fill;
	        this.canvas.context.fillRect(0, 0, this.canvas.element.width, this.canvas.element.height);
	
	        this.canvas.context.lineWidth = ~ ~(this.height / 100 + 2);
	        this.canvas.context.strokeStyle = this.colors.accent;
	
	        this.canvas.context.beginPath();
	
	        if (this.source) {
	
	          var sliceWidth = this.canvas.element.width * 1 / this.bufferLength;
	          var x = 0;
	
	          for (var i = 0; i < this.bufferLength; i++) {
	
	            var v = this.dataArray[i] / 128;
	            var y = v * this.canvas.element.height / 2;
	
	            if (i === 0) {
	              this.canvas.context.moveTo(x, y);
	            } else {
	              this.canvas.context.lineTo(x, y);
	            }
	
	            x += sliceWidth;
	          }
	        } else {
	          this.canvas.context.moveTo(0, this.canvas.element.height / 2);
	          this.canvas.context.lineTo(this.canvas.element.width, this.canvas.element.height / 2);
	        }
	
	        this.canvas.context.stroke();
	      }
	    },
	    connect: {
	
	      /**
	      Equivalent to "patching in" an audio node to visualize. NOTE: You cannot connect audio nodes across two different audio contexts. NexusUI runs its audio analysis on its own audio context, Nexus.context. If the audio node you are visualizing is created on a different audio context, you will need to tell NexusUI to use that context instead: i.e. Nexus.context = YourAudioContextName. For example, in ToneJS projects, the line would be: Nexus.context = Tone.context . We recommend that you write that line of code only once at the beginning of your project.
	      @param node {AudioNode} The audio node to visualize
	      @example Nexus.context = Tone.context // or another audio context you have created
	      oscilloscope.connect( Tone.Master );
	      */
	
	      value: function connect(node) {
	
	        if (this.source) {
	          this.disconnect();
	        }
	
	        this.source = node;
	        this.source.connect(this.analyser);
	
	        this.render();
	      }
	    },
	    disconnect: {
	
	      /**
	      Stop visualizing the source node and disconnect it.
	      */
	
	      value: function disconnect() {
	        if (this.source) {
	          this.source.disconnect(this.analyser);
	          this.source = null;
	        }
	      }
	    },
	    click: {
	      value: function click() {
	        this.active = !this.active;
	        this.render();
	      }
	    },
	    customDestroy: {
	      value: function customDestroy() {
	        this.active = false;
	      }
	    }
	  });
	
	  return Oscilloscope;
	})(Interface);
	
	module.exports = Oscilloscope;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	/*
	Main concept:
	synth = new Nexus.Rack('elementID');
	
	Transform all elements inside the div
	synth.elementID will hold the first slider interface
	
	2) In future, potentially writing a rack that is re-usable?
	Could also take JSON
	
	new Nexus.Rack('#target',{
	  pre: () => {
	    create some divs here, or some audio code
	  },
	  interface: {
	    slider1: Nexus.add.slider({
	      top:10,
	      left:10,
	      width:50,
	      height:100,
	      min: 0,
	      max: 100,
	      step: 1
	    }),
	    wave1: Nexus.add.waveform({
	      file: './path/to/file.mp3',
	      width:500,
	      height:100,
	      mode: 'range'
	    })
	  },
	  init: () => {
	    // some audio init code goes here...
	  }
	});
	
	*/
	
	var transform = _interopRequireWildcard(__webpack_require__(39));
	
	var dom = _interopRequire(__webpack_require__(7));
	
	var Rack = (function () {
	  function Rack(target, settings) {
	    _classCallCheck(this, Rack);
	
	    this.meta = {};
	    this.meta.target = target;
	    this.meta.parent = dom.parseElement(target); // should be a generic function for parsing a 'target' argument that checks for string/DOM/jQUERY
	    this.meta.colors = {};
	
	    if (settings) {
	      this.meta.attribute = settings.attribute || "nexus-ui";
	      this.meta.title = settings.name || false;
	      this.meta.open = settings.open || false;
	    } else {
	      this.meta.attribute = "nexus-ui";
	      this.meta.title = false;
	      this.meta.open = false;
	    }
	
	    var defaultColors = Nexus.colors; // jshint ignore:line
	    this.meta.colors.accent = defaultColors.accent;
	    this.meta.colors.fill = defaultColors.fill;
	    this.meta.colors.light = defaultColors.light;
	    this.meta.colors.dark = defaultColors.dark;
	    this.meta.colors.mediumLight = defaultColors.mediumLight;
	    this.meta.colors.mediumDark = defaultColors.mediumDark;
	    this.buildInterface();
	    this.colorInterface();
	  }
	
	  _createClass(Rack, {
	    buildInterface: {
	      value: function buildInterface() {
	        var _this = this;
	
	        this.meta.parent.style.boxSizing = "border-box";
	        this.meta.parent.style.userSelect = "none";
	        this.meta.parent.style.mozUserSelect = "none";
	        this.meta.parent.style.webkitUserSelect = "none";
	
	        this.meta.contents = document.createElement("div");
	
	        while (this.meta.parent.childNodes.length > 0) {
	          this.meta.contents.appendChild(this.meta.parent.childNodes[0]);
	        }
	
	        this.meta.contents.style.padding = "0px";
	        this.meta.contents.style.boxSizing = "border-box";
	
	        if (this.meta.title) {
	          this.meta.titleBar = document.createElement("div");
	          this.meta.titleBar.innerHTML = this.meta.title;
	          this.meta.titleBar.style.fontFamily = "arial";
	          this.meta.titleBar.style.position = "relative";
	          this.meta.titleBar.style.color = "#888";
	          this.meta.titleBar.style.padding = "7px";
	          this.meta.titleBar.style.fontSize = "12px";
	
	          this.meta.button = document.createElement("div");
	          this.meta.button.style.position = "absolute";
	          this.meta.button.style.top = "5px";
	          this.meta.button.style.right = "5px";
	          this.meta.button.innerHTML = "-";
	          this.meta.button.style.padding = "0px 5px 2px";
	          this.meta.button.style.lineHeight = "12px";
	          this.meta.button.style.fontSize = "15px";
	
	          this.meta.button.style.cursor = "pointer";
	
	          this.meta.button.addEventListener("mouseover", function () {
	            _this.meta.button.style.backgroundColor = _this.meta.colors.mediumDark;
	          });
	          this.meta.button.addEventListener("mouseleave", function () {
	            _this.meta.button.style.backgroundColor = _this.meta.colors.mediumLight;
	          });
	          this.meta.button.addEventListener("click", function () {
	            if (_this.meta.open) {
	              _this.hide();
	            } else {
	              _this.show();
	            }
	          });
	
	          this.meta.titleBar.appendChild(this.meta.button);
	
	          this.meta.parent.appendChild(this.meta.titleBar);
	        }
	        this.meta.parent.appendChild(this.meta.contents);
	
	        //  var width = this.meta.parent.style.width = getComputedStyle(this.meta.parent).getPropertyValue('width');
	        //    this.meta.parent.style.width = width;
	
	        var ui = transform.section(this.meta.target, this.meta.attribute);
	        for (var key in ui) {
	          this[key] = ui[key];
	        }
	      }
	    },
	    colorInterface: {
	      value: function colorInterface() {
	        if (this.meta.title) {
	          this.meta.button.style.backgroundColor = this.meta.colors.mediumLight;
	          this.meta.button.style.border = "solid 0px " + this.meta.colors.fill;
	          this.meta.parent.style.border = "solid 1px " + this.meta.colors.mediumLight;
	          this.meta.parent.style.backgroundColor = this.meta.colors.light;
	          this.meta.titleBar.style.backgroundColor = this.meta.colors.fill;
	        }
	      }
	    },
	    show: {
	      value: function show() {
	        this.meta.contents.style.display = "block";
	        this.meta.open = true;
	      }
	    },
	    hide: {
	      value: function hide() {
	        this.meta.contents.style.display = "none";
	        this.meta.open = false;
	      }
	    },
	    colorize: {
	      value: function colorize(type, color) {
	        for (var key in this) {
	          if (this[key].colorize) {
	            this[key].colorize(type, color);
	          }
	        }
	        this.meta.colors[type] = color;
	        this.colorInterface();
	      }
	    },
	    empty: {
	      value: function empty() {
	        for (var key in this) {
	          if (this[key].destroy) {
	            this[key].destroy();
	          }
	        }
	      }
	    }
	  });
	
	  return Rack;
	})();
	
	module.exports = Rack;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	"use strict";
	
	var dom = _interopRequire(__webpack_require__(7));
	
	var Interfaces = _interopRequire(__webpack_require__(2));
	
	var createInterfaceID = function (widget, interfaceIDs) {
	  var type = widget.type;
	  if (interfaceIDs[type]) {
	    interfaceIDs[type]++;
	  } else {
	    interfaceIDs[type] = 1;
	  }
	  return type + interfaceIDs[type];
	};
	
	var element = function (element, type, options) {
	  options = options || {};
	  for (var i = 0; i < element.attributes.length; i++) {
	    var att = element.attributes[i];
	    //  try {
	    //    options[att.nodeName] = eval(att.nodeValue);
	    //  } catch(e) {
	    options[att.nodeName] = att.nodeValue;
	    //  }
	  }
	  type = type[0].toUpperCase() + type.slice(1);
	  var widget = new Interfaces[type](element, options);
	  widget.id = element.id;
	  return widget;
	};
	
	var section = function (parent, keyword) {
	
	  keyword = keyword || "nexus-ui";
	
	  var interfaceIDs = {};
	
	  var container = dom.parseElement(parent);
	
	  var ui = {};
	
	  var htmlElements = container.getElementsByTagName("*");
	  var elements = [];
	  for (var i = 0; i < htmlElements.length; i++) {
	    elements.push(htmlElements[i]);
	  }
	  for (var i = 0; i < elements.length; i++) {
	    var type = elements[i].getAttribute(keyword);
	    if (type) {
	      var formattedType = false;
	      for (var key in Interfaces) {
	        if (type.toLowerCase() === key.toLowerCase()) {
	          formattedType = key;
	        }
	      }
	      console.log(formattedType);
	      var widget = element(elements[i], formattedType);
	      if (widget.id) {
	        ui[widget.id] = widget;
	      } else {
	        var id = createInterfaceID(widget, interfaceIDs);
	        ui[id] = widget;
	      }
	    }
	  }
	
	  return ui;
	};
	
	var add = function (type, parent, options) {
	  var target = document.createElement("div");
	  options = options || {};
	  if (parent) {
	    parent = dom.parseElement(parent);
	  } else {
	    parent = document.body;
	  }
	  parent.appendChild(target);
	  options.target = target;
	  if (options.size) {
	    target.style.width = options.size[0] + "px";
	    target.style.height = options.size[1] + "px";
	  }
	  return element(target, type, options);
	};
	
	exports.element = element;
	exports.section = section;
	exports.add = add;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var math = _interopRequire(__webpack_require__(5));
	
	var Tune = (function () {
	  function Tune() {
	    _classCallCheck(this, Tune);
	
	    // the scale as ratios
	    this.scale = [];
	
	    // i/o modes
	    this.mode = {
	      output: "frequency",
	      input: "step"
	    };
	
	    // ET major
	    this.etmajor = [261.62558, 293.664764, 329.627563, 349.228241, 391.995422, 440, 493.883301, 523.25116];
	
	    // Root frequency.
	    this.root = math.mtof(60); // * Math.pow(2,(60-69)/12);
	
	    // default is a major scale
	    this.createScale(0, 2, 4, 5, 7, 9, 11);
	  }
	
	  _createClass(Tune, {
	    note: {
	
	      /* Return data in the mode you are in (freq, ratio, or midi) */
	
	      value: function note(input, octave) {
	
	        var newvalue = undefined;
	
	        if (this.mode.output === "frequency") {
	          newvalue = this.frequency(input, octave);
	        } else if (this.mode.output === "ratio") {
	          newvalue = this.ratio(input, octave);
	        } else if (this.mode.output === "MIDI") {
	          newvalue = this.MIDI(input, octave);
	        } else {
	          newvalue = this.frequency(input, octave);
	        }
	
	        return newvalue;
	      }
	    },
	    frequency: {
	
	      /* Return freq data */
	
	      value: function frequency(stepIn, octaveIn) {
	
	        if (this.mode.input === "midi" || this.mode.input === "MIDI") {
	          this.stepIn += 60;
	        }
	
	        // what octave is our input
	        var octave = Math.floor(stepIn / this.scale.length);
	
	        if (octaveIn) {
	          octave += octaveIn;
	        }
	
	        // which scale degree (0 - scale length) is our input
	        var scaleDegree = stepIn % this.scale.length;
	
	        while (scaleDegree < 0) {
	          scaleDegree += this.scale.length;
	        }
	
	        var ratio = this.scale[scaleDegree];
	
	        var freq = this.root * ratio;
	
	        freq = freq * Math.pow(2, octave);
	
	        // truncate irrational numbers
	        freq = Math.floor(freq * 100000000000) / 100000000000;
	
	        return freq;
	      }
	    },
	    ratio: {
	
	      /* Force return ratio data */
	
	      value: function ratio(stepIn, octaveIn) {
	
	        if (this.mode.input === "midi" || this.mode.input === "MIDI") {
	          this.stepIn += 60;
	        }
	
	        // what octave is our input
	        var octave = Math.floor(stepIn / this.scale.length);
	
	        if (octaveIn) {
	          octave += octaveIn;
	        }
	
	        // which scale degree (0 - scale length) is our input
	        var scaleDegree = stepIn % this.scale.length;
	
	        // what ratio is our input to our key
	        var ratio = Math.pow(2, octave) * this.scale[scaleDegree];
	
	        ratio = Math.floor(ratio * 100000000000) / 100000000000;
	
	        return ratio;
	      }
	    },
	    MIDI: {
	
	      /* Force return adjusted MIDI data */
	
	      value: function MIDI(stepIn, octaveIn) {
	
	        var newvalue = this.frequency(stepIn, octaveIn);
	
	        var n = 69 + 12 * Math.log(newvalue / 440) / Math.log(2);
	
	        n = Math.floor(n * 1000000000) / 1000000000;
	
	        return n;
	      }
	    },
	    createScale: {
	      value: function createScale() {
	        var newScale = [];
	        for (var i = 0; i < arguments.length; i++) {
	          newScale.push(math.mtof(60 + arguments[i]));
	        }
	        this.loadScaleFromFrequencies(newScale);
	      }
	    },
	    createJIScale: {
	      value: function createJIScale() {
	        this.scale = [];
	        for (var i = 0; i < arguments.length; i++) {
	          this.scale.push(arguments[i]);
	        }
	      }
	    },
	    loadScaleFromFrequencies: {
	      value: function loadScaleFromFrequencies(freqs) {
	        this.scale = [];
	        for (var i = 0; i < freqs.length - 1; i++) {
	          this.scale.push(freqs[i] / freqs[0]);
	        }
	      }
	    },
	    loadScale: {
	
	      /* Load a new scale */
	
	      value: function loadScale(name) {
	
	        /* load the scale */
	        var freqs = this.scales[name].frequencies;
	        this.loadScaleFromFrequencies(freqs);
	      }
	    },
	    search: {
	
	      /* Search the names of tunings
	      	 Returns an array of names of tunings */
	
	      value: function search(letters) {
	        var possible = [];
	        for (var key in this.scales) {
	          if (key.toLowerCase().indexOf(letters.toLowerCase()) !== -1) {
	            possible.push(key);
	          }
	        }
	        return possible;
	      }
	    },
	    chord: {
	
	      /* Return a collection of notes as an array */
	
	      value: function chord(midis) {
	        var output = [];
	        for (var i = 0; i < midis.length; i++) {
	          output.push(this.note(midis[i]));
	        }
	        return output;
	      }
	    }
	  });
	
	  return Tune;
	})();
	
	module.exports = Tune;

/***/ }),
/* 41 */
/***/ (function(module, exports) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	//Disable jshint warning concerning trailing regular params
	/*jshint -W138 */
	
	var Radio = (function () {
	    //if non-existent buttons are switched, they are ignored
	
	    function Radio() {
	        for (var _len = arguments.length, onVals = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	            onVals[_key - 1] = arguments[_key];
	        }
	
	        var length = arguments[0] === undefined ? 3 : arguments[0];
	
	        _classCallCheck(this, Radio);
	
	        //each optional 'onVals' argument switches on that value in the Radio if it exists
	        //In the example below, a 3-button radio is created, index 0 is switched on, index 1 is switched on then then attempted again producing an warning, and the final argument produces a warning because the index value does not exist.
	        //Example:
	        //`  radio = new Radio(3, 0, 1, 1, 3);
	        //…  [1,1,0]
	
	        if (length < 0) {
	            length = 1;
	        }
	
	        this.length = length;
	        this.onVals = onVals;
	        this.array = new Array(length).fill(0);
	
	        if (onVals.length > 0) {
	            this.on.apply(this, onVals);
	        }
	    }
	
	    _createClass(Radio, {
	        select: {
	            value: function select(value) {
	                this.array.fill(0);
	                this.array[value] = 1;
	                return this.array;
	            }
	        },
	        flip: {
	            value: function flip() {
	                for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
	                    values[_key] = arguments[_key];
	                }
	
	                //flips the specified values. if no value is specified, flips all buttons
	                var a = this.array;
	                if (values.length > 0) {
	                    values.forEach(function (v) {
	                        if (v > a.length - 1) {
	                            console.warn("Warning: AnonRadio[" + v + "] does not exist");
	                        } else {
	                            a[v] = a[v] ? 0 : 1;
	                        }
	                    });
	                } else {
	                    a.forEach(function (v, i, arr) {
	                        arr[i] = v ? 0 : 1;
	                    });
	                }
	                return a;
	            }
	        },
	        on: {
	            value: function on() {
	                for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
	                    values[_key] = arguments[_key];
	                }
	
	                //switch on the specified values. if no value specified, flips on all buttons
	                var a = this.array;
	                if (values.length > 0) {
	                    values.forEach(function (v) {
	                        if (v > a.length - 1) {
	                            console.warn("Warning: AnonRadio[" + v + "] exceeds size of object");
	                        } else {
	                            if (a[v] === 1) {
	                                console.warn("Warning: AnonRadio[" + v + "] was already on.");
	                            }
	                            a[v] = 1;
	                        }
	                    });
	                } else {
	                    a.fill(1);
	                }
	                return a;
	            }
	        },
	        off: {
	            value: function off() {
	                for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
	                    values[_key] = arguments[_key];
	                }
	
	                //switch off the specified values. if no value specified, flips off all buttons
	                var a = this.array;
	                if (values.length > 0) {
	                    values.forEach(function (v) {
	                        a[v] = 0;
	                    });
	                } else {
	                    a.fill(0);
	                }
	                return a;
	            }
	        }
	    });
	
	    return Radio;
	})();
	
	module.exports = Radio;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	var WAAClock = __webpack_require__(43)
	
	module.exports = WAAClock
	if (typeof window !== 'undefined') window.WAAClock = WAAClock


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var isBrowser = (typeof window !== 'undefined')
	
	var CLOCK_DEFAULTS = {
	  toleranceLate: 0.10,
	  toleranceEarly: 0.001
	}
	
	// ==================== Event ==================== //
	var Event = function(clock, deadline, func) {
	  this.clock = clock
	  this.func = func
	  this._cleared = false // Flag used to clear an event inside callback
	
	  this.toleranceLate = clock.toleranceLate
	  this.toleranceEarly = clock.toleranceEarly
	  this._latestTime = null
	  this._earliestTime = null
	  this.deadline = null
	  this.repeatTime = null
	
	  this.schedule(deadline)
	}
	
	// Unschedules the event
	Event.prototype.clear = function() {
	  this.clock._removeEvent(this)
	  this._cleared = true
	  return this
	}
	
	// Sets the event to repeat every `time` seconds.
	Event.prototype.repeat = function(time) {
	  if (time === 0)
	    throw new Error('delay cannot be 0')
	  this.repeatTime = time
	  if (!this.clock._hasEvent(this))
	    this.schedule(this.deadline + this.repeatTime)
	  return this
	}
	
	// Sets the time tolerance of the event.
	// The event will be executed in the interval `[deadline - early, deadline + late]`
	// If the clock fails to execute the event in time, the event will be dropped.
	Event.prototype.tolerance = function(values) {
	  if (typeof values.late === 'number')
	    this.toleranceLate = values.late
	  if (typeof values.early === 'number')
	    this.toleranceEarly = values.early
	  this._refreshEarlyLateDates()
	  if (this.clock._hasEvent(this)) {
	    this.clock._removeEvent(this)
	    this.clock._insertEvent(this)
	  }
	  return this
	}
	
	// Returns true if the event is repeated, false otherwise
	Event.prototype.isRepeated = function() { return this.repeatTime !== null }
	
	// Schedules the event to be ran before `deadline`.
	// If the time is within the event tolerance, we handle the event immediately.
	// If the event was already scheduled at a different time, it is rescheduled.
	Event.prototype.schedule = function(deadline) {
	  this._cleared = false
	  this.deadline = deadline
	  this._refreshEarlyLateDates()
	
	  if (this.clock.context.currentTime >= this._earliestTime) {
	    this._execute()
	  
	  } else if (this.clock._hasEvent(this)) {
	    this.clock._removeEvent(this)
	    this.clock._insertEvent(this)
	  
	  } else this.clock._insertEvent(this)
	}
	
	Event.prototype.timeStretch = function(tRef, ratio) {
	  if (this.isRepeated())
	    this.repeatTime = this.repeatTime * ratio
	
	  var deadline = tRef + ratio * (this.deadline - tRef)
	  // If the deadline is too close or past, and the event has a repeat,
	  // we calculate the next repeat possible in the stretched space.
	  if (this.isRepeated()) {
	    while (this.clock.context.currentTime >= deadline - this.toleranceEarly)
	      deadline += this.repeatTime
	  }
	  this.schedule(deadline)
	}
	
	// Executes the event
	Event.prototype._execute = function() {
	  if (this.clock._started === false) return
	  this.clock._removeEvent(this)
	
	  if (this.clock.context.currentTime < this._latestTime)
	    this.func(this)
	  else {
	    if (this.onexpired) this.onexpired(this)
	    console.warn('event expired')
	  }
	  // In the case `schedule` is called inside `func`, we need to avoid
	  // overrwriting with yet another `schedule`.
	  if (!this.clock._hasEvent(this) && this.isRepeated() && !this._cleared)
	    this.schedule(this.deadline + this.repeatTime) 
	}
	
	// Updates cached times
	Event.prototype._refreshEarlyLateDates = function() {
	  this._latestTime = this.deadline + this.toleranceLate
	  this._earliestTime = this.deadline - this.toleranceEarly
	}
	
	// ==================== WAAClock ==================== //
	var WAAClock = module.exports = function(context, opts) {
	  var self = this
	  opts = opts || {}
	  this.tickMethod = opts.tickMethod || 'ScriptProcessorNode'
	  this.toleranceEarly = opts.toleranceEarly || CLOCK_DEFAULTS.toleranceEarly
	  this.toleranceLate = opts.toleranceLate || CLOCK_DEFAULTS.toleranceLate
	  this.context = context
	  this._events = []
	  this._started = false
	}
	
	// ---------- Public API ---------- //
	// Schedules `func` to run after `delay` seconds.
	WAAClock.prototype.setTimeout = function(func, delay) {
	  return this._createEvent(func, this._absTime(delay))
	}
	
	// Schedules `func` to run before `deadline`.
	WAAClock.prototype.callbackAtTime = function(func, deadline) {
	  return this._createEvent(func, deadline)
	}
	
	// Stretches `deadline` and `repeat` of all scheduled `events` by `ratio`, keeping
	// their relative distance to `tRef`. In fact this is equivalent to changing the tempo.
	WAAClock.prototype.timeStretch = function(tRef, events, ratio) {
	  events.forEach(function(event) { event.timeStretch(tRef, ratio) })
	  return events
	}
	
	// Removes all scheduled events and starts the clock 
	WAAClock.prototype.start = function() {
	  if (this._started === false) {
	    var self = this
	    this._started = true
	    this._events = []
	
	    if (this.tickMethod === 'ScriptProcessorNode') {
	      var bufferSize = 256
	      // We have to keep a reference to the node to avoid garbage collection
	      this._clockNode = this.context.createScriptProcessor(bufferSize, 1, 1)
	      this._clockNode.connect(this.context.destination)
	      this._clockNode.onaudioprocess = function () {
	        process.nextTick(function() { self._tick() })
	      }
	    } else if (this.tickMethod === 'manual') null // _tick is called manually
	
	    else throw new Error('invalid tickMethod ' + this.tickMethod)
	  }
	}
	
	// Stops the clock
	WAAClock.prototype.stop = function() {
	  if (this._started === true) {
	    this._started = false
	    this._clockNode.disconnect()
	  }  
	}
	
	// ---------- Private ---------- //
	
	// This function is ran periodically, and at each tick it executes
	// events for which `currentTime` is included in their tolerance interval.
	WAAClock.prototype._tick = function() {
	  var event = this._events.shift()
	
	  while(event && event._earliestTime <= this.context.currentTime) {
	    event._execute()
	    event = this._events.shift()
	  }
	
	  // Put back the last event
	  if(event) this._events.unshift(event)
	}
	
	// Creates an event and insert it to the list
	WAAClock.prototype._createEvent = function(func, deadline) {
	  return new Event(this, deadline, func)
	}
	
	// Inserts an event to the list
	WAAClock.prototype._insertEvent = function(event) {
	  this._events.splice(this._indexByTime(event._earliestTime), 0, event)
	}
	
	// Removes an event from the list
	WAAClock.prototype._removeEvent = function(event) {
	  var ind = this._events.indexOf(event)
	  if (ind !== -1) this._events.splice(ind, 1)
	}
	
	// Returns true if `event` is in queue, false otherwise
	WAAClock.prototype._hasEvent = function(event) {
	 return this._events.indexOf(event) !== -1
	}
	
	// Returns the index of the first event whose deadline is >= to `deadline`
	WAAClock.prototype._indexByTime = function(deadline) {
	  // performs a binary search
	  var low = 0
	    , high = this._events.length
	    , mid
	  while (low < high) {
	    mid = Math.floor((low + high) / 2)
	    if (this._events[mid]._earliestTime < deadline)
	      low = mid + 1
	    else high = mid
	  }
	  return low
	}
	
	// Converts from relative time to absolute time
	WAAClock.prototype._absTime = function(relTime) {
	  return relTime + this.context.currentTime
	}
	
	// Converts from absolute time to relative time 
	WAAClock.prototype._relTime = function(absTime) {
	  return absTime - this.context.currentTime
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(44)))

/***/ }),
/* 44 */
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;
	
	process.listeners = function (name) { return [] }
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),
/* 45 */
/***/ (function(module, exports) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var Interval = (function () {
	  function Interval(rate, func, on) {
	    _classCallCheck(this, Interval);
	
	    this.rate = rate;
	    this.on = on;
	    this.clock = Nexus.clock; // jshint ignore:line
	
	    this.pattern = [1];
	    this.index = 0;
	
	    this.event = func ? func : function () {};
	
	    if (this.on) {
	      this.start();
	    }
	  }
	
	  _createClass(Interval, {
	    _event: {
	      value: function _event(e) {
	        //  if (this.pattern[this.index%this.pattern.length]) {
	        this.event(e);
	        //  }
	        this.index++;
	      }
	    },
	    stop: {
	      value: function stop() {
	        this.on = false;
	        this.interval.clear();
	      }
	    },
	    start: {
	      value: function start() {
	        this.on = true;
	        this.interval = this.clock.callbackAtTime(this._event.bind(this), this.clock.context.currentTime).repeat(this.rate / 1000).tolerance({ early: 0.1, late: 1 });
	      }
	    },
	    ms: {
	      value: function ms(newrate) {
	        if (this.on) {
	          var ratio = newrate / this.rate;
	          this.rate = newrate;
	          this.clock.timeStretch(this.clock.context.currentTime, [this.interval], ratio);
	        } else {
	          this.rate = newrate;
	        }
	      }
	    }
	  });
	
	  return Interval;
	})();
	
	module.exports = Interval;

/***/ })
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA5MGM1NTkwMmI1ZDU4ODk5ZWQ0NCIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9saWIvaW50ZXJmYWNlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvaW50ZXJmYWNlcy9wb3NpdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9saWIvdXRpbC9zdmcuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL3V0aWwvbWF0aC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvY29yZS9pbnRlcmZhY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL3V0aWwvZG9tLmpzIiwid2VicGFjazovLy8uL2xpYi91dGlsL3V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL3V0aWwvdG91Y2guanMiLCJ3ZWJwYWNrOi8vLy4vfi9ldmVudHMvZXZlbnRzLmpzIiwid2VicGFjazovLy8uL2xpYi9tb2RlbHMvc3RlcC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvdXRpbC9pbnRlcmFjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9saWIvbW9kZWxzL3RvZ2dsZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvaW50ZXJmYWNlcy9zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2ludGVyZmFjZXMvdG9nZ2xlLmpzIiwid2VicGFjazovLy8uL2xpYi9pbnRlcmZhY2VzL2J1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9saWIvY29tcG9uZW50cy9idXR0b250ZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvaW50ZXJmYWNlcy90ZXh0YnV0dG9uLmpzIiwid2VicGFjazovLy8uL2xpYi9pbnRlcmZhY2VzL3JhZGlvYnV0dG9uLmpzIiwid2VicGFjazovLy8uL2xpYi9pbnRlcmZhY2VzL251bWJlci5qcyIsIndlYnBhY2s6Ly8vLi9saWIvaW50ZXJmYWNlcy9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2ludGVyZmFjZXMvZGlhbC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvaW50ZXJmYWNlcy9waWFuby5qcyIsIndlYnBhY2s6Ly8vLi9saWIvaW50ZXJmYWNlcy9zZXF1ZW5jZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL21vZGVscy9tYXRyaXguanMiLCJ3ZWJwYWNrOi8vLy4vbGliL21vZGVscy9zZXF1ZW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvbW9kZWxzL2RydW5rLmpzIiwid2VicGFjazovLy8uL2xpYi9tb2RlbHMvY291bnRlci5qcyIsIndlYnBhY2s6Ly8vLi9saWIvaW50ZXJmYWNlcy9wYW4yZC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvaW50ZXJmYWNlcy90aWx0LmpzIiwid2VicGFjazovLy8uL2xpYi9pbnRlcmZhY2VzL211bHRpc2xpZGVyLmpzIiwid2VicGFjazovLy8uL2xpYi9jb21wb25lbnRzL3NsaWRlcnRlbXBsYXRlLmpzIiwid2VicGFjazovLy8uL2xpYi9pbnRlcmZhY2VzL3Bhbi5qcyIsIndlYnBhY2s6Ly8vLi9saWIvaW50ZXJmYWNlcy9lbnZlbG9wZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvaW50ZXJmYWNlcy9zcGVjdHJvZ3JhbS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvaW50ZXJmYWNlcy9tZXRlci5qcyIsIndlYnBhY2s6Ly8vLi9saWIvaW50ZXJmYWNlcy9vc2NpbGxvc2NvcGUuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2NvcmUvcmFjay5qcyIsIndlYnBhY2s6Ly8vLi9saWIvdXRpbC90cmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vbGliL3R1bmluZy90dW5pbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL21vZGVscy9yYWRpby5qcyIsIndlYnBhY2s6Ly8vLi9+L3dhYWNsb2NrL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vd2FhY2xvY2svbGliL1dBQUNsb2NrLmpzIiwid2VicGFjazovLy8uL34vcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL2xpYi90aW1lL2ludGVydmFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3RDQSxhQUFZLENBQUM7O0FBRWIsS0FBSSxPQUFPLEdBQUcsbUJBQU8sQ0FBQyxDQUFZLENBQUMsQ0FBQztBQUNwQyxLQUFJLEtBQUssR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDOztBQUUxQixLQUFJLE1BQU0sRUFBRTtBQUNWLFNBQU0sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0VBQ3RCOztBQUVELE9BQU0sQ0FBQyxPQUFPLEdBQUcsS0FBSyxDOzs7Ozs7QUNUdEIsYUFBWSxDQUFDOzs7Ozs7Ozs7O0tBRU4sVUFBVSx1Q0FBTSxDQUFlOztLQUMvQixJQUFJLHVDQUFNLENBQWE7O0tBQ3ZCLElBQUksdUNBQU0sRUFBYTs7S0FDdkIsSUFBSSx1Q0FBTSxFQUFpQjs7S0FDdEIsU0FBUywrQ0FBTSxFQUFrQjs7QUFFN0MsS0FBSSxPQUFPLEdBQUcsbUJBQU8sQ0FBQyxFQUFrQixDQUFDLENBQUM7QUFDMUMsS0FBSSxLQUFLLEdBQUcsbUJBQU8sQ0FBQyxFQUFnQixDQUFDLENBQUM7QUFDdEMsS0FBSSxLQUFLLEdBQUcsbUJBQU8sQ0FBQyxFQUFnQixDQUFDLENBQUM7QUFDdEMsS0FBSSxRQUFRLEdBQUcsbUJBQU8sQ0FBQyxFQUFtQixDQUFDLENBQUM7QUFDNUMsS0FBSSxNQUFNLEdBQUcsbUJBQU8sQ0FBQyxFQUFpQixDQUFDLENBQUM7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFHO0FBQ0gscUJBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7QUM3U0EsYUFBWSxDQUFDOzs7Ozs7QUFFYixLQUFJLElBQUksR0FBRyxtQkFBTyxDQUFDLENBQWMsQ0FBQyxDQUFDOzs7Ozs7Ozs7OztLQVdkLElBQUk7QUFFWixZQUZRLElBQUksR0FFeUI7U0FBcEMsR0FBRyxnQ0FBRyxDQUFDO1NBQUMsR0FBRyxnQ0FBRyxDQUFDO1NBQUMsSUFBSSxnQ0FBRyxDQUFDO1NBQUMsS0FBSyxnQ0FBRyxDQUFDOzsyQkFGM0IsSUFBSTs7Ozs7QUFNckIsU0FBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDZixTQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUNmLFNBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLFNBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0FBQ25CLFNBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0FBQ3JCLFNBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0FBQ3RCLFNBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pCOztnQkFia0IsSUFBSTtBQW9CdkIsV0FBTTs7Ozs7OztjQUFBLGdCQUFDLEtBQUssRUFBRTtBQUNaLGFBQUksSUFBSSxDQUFDLElBQUksRUFBRTs7QUFFYixlQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssR0FBQyxJQUFJLENBQUMsR0FBRyxJQUFLLElBQUksQ0FBQyxJQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7VUFDOUcsTUFBTTtBQUNMLGVBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUMsSUFBSSxDQUFDLEdBQUcsRUFBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7VUFDakQ7QUFDRCxhQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLEtBQUssRUFBRTtBQUNoQyxlQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7QUFDM0IsZUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7VUFDckIsTUFBTTtBQUNMLGVBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1VBQ3RCO0FBQ0QsZ0JBQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNuQjs7QUFNRCxpQkFBWTs7Ozs7OztjQUFBLHNCQUFDLEtBQUssRUFBRTtBQUNsQixhQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLEdBQUcsRUFBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDckQsZ0JBQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEM7O0FBS0csZUFBVTs7Ozs7O1lBQUEsWUFBRztBQUNmLGdCQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBQyxJQUFJLENBQUMsR0FBRyxFQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyRDs7OztVQWxEa0IsSUFBSTs7O2tCQUFKLElBQUksQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiekIsYUFBWSxDQUFDOztLQUVOLElBQUksdUNBQU0sQ0FBYzs7S0FDeEIsV0FBVyx1Q0FBTSxFQUFrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQW1DN0IsTUFBTSxXQUFOLE1BQU07QUFFTixZQUZBLE1BQU0sR0FFK0Q7U0FBcEUsSUFBSSxnQ0FBQyxVQUFVO1NBQUMsU0FBUyxnQ0FBQyxVQUFVO1NBQUMsTUFBTSxnQ0FBQyxDQUFDLENBQUMsRUFBQyxHQUFHLENBQUM7U0FBQyxNQUFNLGdDQUFDLENBQUMsQ0FBQyxFQUFDLEdBQUcsQ0FBQzs7MkJBRm5FLE1BQU07O0FBR2YsU0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7QUFDakIsU0FBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7QUFDM0IsU0FBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7QUFDbEIsU0FBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7QUFDZixTQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztBQUNyQixTQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBQyxNQUFNLENBQUMsQ0FBQztJQUM1Qjs7Z0JBVFUsTUFBTTtBQVdqQixXQUFNO2NBQUEsZ0JBQUMsTUFBTSxFQUFDLE1BQU0sRUFBRTtBQUNwQixhQUFJLENBQUMsUUFBUSxHQUFHO0FBQ2QsY0FBRyxFQUFFO0FBQ0gsY0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDWixjQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNiO0FBQ0QsY0FBRyxFQUFFO0FBQ0gsY0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDWixjQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNiO0FBQ0QsaUJBQU0sRUFBRTtBQUNOLGNBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDeEMsY0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUN6QztVQUNGLENBQUM7UUFDSDs7QUFNRyxXQUFNO1lBSkEsVUFBQyxLQUFLLEVBQUU7QUFDaEIsYUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkQ7WUFFUyxZQUFHO0FBQ1gsZ0JBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNyQjs7QUFHRCxXQUFNO2NBQUEsZ0JBQUMsS0FBSyxFQUFFO0FBQ1osYUFBSSxJQUFJLENBQUMsSUFBSSxLQUFHLFVBQVUsRUFBRTtBQUMxQixlQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztBQUNqRSxlQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBRyxFQUFFO0FBQUUsc0JBQVMsR0FBRyxDQUFDLENBQUM7WUFBRTtBQUNqRCxlQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztBQUNwQixlQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7VUFDeEQsTUFBTTtBQUNMLGVBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxDQUFDO1VBQ2pEO0FBQ0QsYUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hDOztBQUVELDJCQUFzQjtjQUFBLGdDQUFDLE9BQU8sRUFBRTtBQUM5QixpQkFBTyxJQUFJLENBQUMsU0FBUztBQUNuQixnQkFBSyxRQUFRO0FBQ1gsaUJBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNwRyxxQkFBUSxHQUFHLFFBQVEsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEVBQUUsR0FBQyxDQUFDLENBQUMsQ0FBQztBQUN4QyxxQkFBUSxHQUFHLENBQUUsUUFBUSxHQUFHLElBQUksR0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3ZDLG9CQUFPLFFBQVEsQ0FBQztBQUNsQixnQkFBSyxVQUFVO0FBQ2Isb0JBQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzNFLGdCQUFLLFlBQVk7QUFDZixvQkFBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7QUFBQSxVQUM1RTtRQUNGOzs7O1VBN0RVLE1BQU07OztLQWtFTixNQUFNLFdBQU4sTUFBTTtBQUVOLFlBRkEsTUFBTSxHQUVVO1NBQWYsSUFBSSxnQ0FBQyxRQUFROzsyQkFGZCxNQUFNOztBQUdmLFNBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLFNBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztBQUMvQixTQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUN6Qjs7Z0JBTlUsTUFBTTtBQVFqQixVQUFLO2NBQUEsaUJBQUc7QUFDTixpQkFBUSxJQUFJLENBQUMsSUFBSTtBQUNmLGdCQUFLLFNBQVM7QUFDWixpQkFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQztBQUNoQixpQkFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO0FBQ2hCLDJCQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2NBQzVCO0FBQ0QsaUJBQUksQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQyxFQUFFLENBQUMsQ0FBQztBQUN4RCxpQkFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQy9CLG1CQUFNO0FBQ1IsZ0JBQUssUUFBUTtBQUNYLGlCQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDZCxpQkFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQy9CLG1CQUFNO0FBQ1IsZ0JBQUssWUFBWTtBQUNmLGlCQUFJLENBQUMsUUFBUSxHQUFHO0FBQ2QsZ0JBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztBQUMzQyxnQkFBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztjQUNqRCxDQUFDO0FBQ0YsaUJBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUNkLGlCQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBQztBQUNqQixvQkFBSyxFQUFFLElBQUksQ0FBQyxLQUFLO0FBQ2pCLGdCQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2xCLGdCQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQ25CLENBQUMsQ0FBQztBQUNILG1CQUFNO0FBQ1IsZ0JBQUssUUFBUTtBQUNYLGlCQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDWixpQkFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQy9CLG1CQUFNO0FBQUEsVUFDVDtRQUVGOztBQUVELFNBQUk7Y0FBQSxnQkFBRztBQUNMLGFBQUksSUFBSSxDQUFDLElBQUksS0FBRyxZQUFZLEVBQUU7QUFDNUIsZUFBSSxDQUFDLFFBQVEsR0FBRztBQUNkLGNBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztBQUMzQyxjQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1lBQ2pELENBQUM7QUFDRixlQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBQztBQUNqQixrQkFBSyxFQUFFLElBQUksQ0FBQyxLQUFLO0FBQ2pCLGNBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDbEIsY0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUNuQixDQUFDLENBQUM7QUFDSCxlQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7VUFDZjtRQUNGOztBQUVELFlBQU87Y0FBQSxtQkFBRztBQUNSLGlCQUFRLElBQUksQ0FBQyxJQUFJO0FBQ2YsZ0JBQUssUUFBUTtBQUNYLGlCQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDZixpQkFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQy9CLG1CQUFNO0FBQ1IsZ0JBQUssWUFBWTtBQUNmLGlCQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDZixpQkFBSSxDQUFDLFFBQVEsR0FBRztBQUNkLGdCQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUs7QUFDNUIsZ0JBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU07Y0FDbEMsQ0FBQztBQUNGLGlCQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBQztBQUNqQixvQkFBSyxFQUFFLElBQUksQ0FBQyxLQUFLO0FBQ2pCLGdCQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2xCLGdCQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQ25CLENBQUMsQ0FBQztBQUNILG1CQUFNO0FBQUEsVUFDVDtRQUNGOzs7O1VBNUVVLE1BQU07Ozs7Ozs7QUN4R25CLGFBQVksQ0FBQzs7Ozs7O0tBRVEsTUFBTTtBQUVkLFlBRlEsTUFBTSxDQUViLEtBQUssRUFBRTsyQkFGQSxNQUFNOztBQUd2QixTQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssSUFBSSxLQUFLLENBQUM7SUFDN0I7O2dCQUprQixNQUFNO0FBTXpCLFNBQUk7Y0FBQSxjQUFDLEtBQUssRUFBRTtBQUNWLGFBQUksS0FBSyxJQUFJLEtBQUssS0FBSyxLQUFLLEVBQUU7QUFDNUIsZUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7VUFDcEIsTUFBTTtBQUNMLGVBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1VBQzFCO1FBQ0Y7O0FBRUQsT0FBRTtjQUFBLGNBQUc7QUFDSCxhQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNuQjs7QUFFRCxRQUFHO2NBQUEsZUFBRztBQUNKLGFBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ3BCOzs7O1VBcEJrQixNQUFNOzs7a0JBQU4sTUFBTSxDOzs7Ozs7QUNGM0IsYUFBWSxDQUFDOzs7Ozs7Ozs7Ozs7QUFFYixLQUFJLEdBQUcsR0FBRyxtQkFBTyxDQUFDLENBQWEsQ0FBQyxDQUFDO0FBQ2pDLEtBQUksU0FBUyxHQUFHLG1CQUFPLENBQUMsQ0FBbUIsQ0FBQyxDQUFDO0FBQzdDLEtBQUksSUFBSSxHQUFHLG1CQUFPLENBQUMsRUFBZ0IsQ0FBQyxDQUFDOztLQUN6QixXQUFXLCtDQUFNLEVBQXFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQW1DN0IsTUFBTTtBQUVkLFlBRlEsTUFBTSxHQUVYOzJCQUZLLE1BQU07O0FBSXZCLFNBQUksT0FBTyxHQUFHLENBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxPQUFPLENBQUMsQ0FBQzs7QUFFcEMsU0FBSSxRQUFRLEdBQUc7QUFDYixhQUFRLENBQUMsR0FBRyxFQUFDLEVBQUUsQ0FBQztBQUNoQixhQUFRLFVBQVU7QUFDbEIsWUFBTyxDQUFDO0FBQ1IsWUFBTyxDQUFDO0FBQ1IsYUFBUSxDQUFDO0FBQ1QsY0FBUyxDQUFDO01BQ1gsQ0FBQzs7QUFFRixnQ0FmaUIsTUFBTSw2Q0FlakIsU0FBUyxFQUFDLE9BQU8sRUFBQyxRQUFRLEVBQUU7O0FBRWxDLFNBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDOztBQUU5QixTQUFJLENBQUMsTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7O0FBRXRHLFNBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxXQUFXLEVBQUMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzNHLFNBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDOztBQUU3QyxTQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7O0FBRVosU0FBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQzs7QUFFM0MsU0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRWhDOzthQTlCa0IsTUFBTTs7Z0JBQU4sTUFBTTtBQWdDekIsbUJBQWM7Y0FBQSwwQkFBRzs7QUFFZixhQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDOUIsYUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2xDLGFBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQzs7QUFFakMsYUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ25DLGFBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN2QyxhQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFckM7O0FBRUQsa0JBQWE7Y0FBQSx5QkFBRzs7QUFFZCxhQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRTtBQUM1QixlQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztVQUMvQixNQUFNO0FBQ0wsZUFBSSxDQUFDLFdBQVcsR0FBRyxZQUFZLENBQUM7VUFDakM7O0FBRUQsYUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO0FBQ2pCLGVBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztVQUN0RDs7QUFFRCxhQUFJLENBQUM7YUFBRSxDQUFDO2FBQUUsQ0FBQzthQUFFLENBQUM7YUFBRSxTQUFTO2FBQUUsWUFBWSxhQUFDO0FBQ3hDLGFBQUksQ0FBQyxRQUFRLEdBQUc7QUFDZCxnQkFBSyxFQUFFLENBQUM7QUFDUixZQUFDLEVBQUUsQ0FBQztVQUNMLENBQUM7O0FBRUYsYUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLFVBQVUsRUFBRTtBQUNuQyxlQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0FBQ2pDLFlBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFDLENBQUMsQ0FBQztBQUNqQixZQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ04sWUFBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7QUFDbkIsWUFBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7QUFDZixlQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztBQUN4QyxlQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLFVBQVUsSUFBRSxDQUFDLEdBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUM7QUFDN0Usb0JBQVMsR0FBRyxZQUFZLEdBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRSxDQUFDLENBQUUsR0FBQyxDQUFDLEdBQUMsS0FBSyxDQUFDO0FBQ3JELHVCQUFZLEdBQUcsQ0FBQyxHQUFDLENBQUMsQ0FBQztVQUNwQixNQUFNO0FBQ0wsZUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztBQUNsQyxZQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ04sWUFBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDO0FBQ2xCLFlBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0FBQ2YsWUFBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7QUFDbEIsZUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7QUFDeEMsZUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsSUFBRSxDQUFDLEdBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7QUFDM0Usb0JBQVMsR0FBRyxjQUFjLEdBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRSxDQUFDLENBQUUsR0FBQyxDQUFDLEdBQUMsR0FBRyxDQUFDO0FBQ3JELHVCQUFZLEdBQUcsQ0FBQyxHQUFDLENBQUMsQ0FBQztVQUNwQjs7QUFFRCxhQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDLENBQUM7QUFDN0IsYUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzdCLGFBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBQyxTQUFTLENBQUMsQ0FBQztBQUM3QyxhQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUMsWUFBWSxDQUFDLENBQUM7QUFDekMsYUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ3pDLGFBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBQyxDQUFDLENBQUMsQ0FBQztBQUNqQyxhQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUMsQ0FBQyxDQUFDLENBQUM7O0FBRWxDLGFBQUksSUFBSSxDQUFDLFdBQVcsS0FBSyxVQUFVLEVBQUU7QUFDbkMsZUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2pDLGVBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ25ELGVBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBQyxDQUFDLENBQUMsQ0FBQztBQUNyQyxlQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7VUFDM0QsTUFBTTtBQUNMLGVBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBQyxDQUFDLENBQUMsQ0FBQztBQUNqQyxlQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDLENBQUM7QUFDakMsZUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDdkQsZUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFDLENBQUMsQ0FBQyxDQUFDO1VBQ3ZDO0FBQ0QsYUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ2pELGFBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksRUFBQyxZQUFZLENBQUMsQ0FBQztBQUM3QyxhQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUMsWUFBWSxDQUFDLENBQUM7O0FBRTdDLGFBQUksSUFBSSxDQUFDLFdBQVcsS0FBSyxVQUFVLEVBQUU7QUFDbkMsZUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQyxDQUFDO0FBQy9CLGVBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1VBQ2xELE1BQU07QUFDTCxlQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNqRCxlQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDLENBQUM7VUFDaEM7QUFDRCxhQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUU3Qzs7QUFFRCxtQkFBYztjQUFBLDBCQUFHO0FBQ2YsYUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDaEQsYUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDdEQsYUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEQ7O0FBR0QsV0FBTTtjQUFBLGtCQUFHO0FBQ1AsYUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7QUFDakIsZUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBQyxJQUFJLENBQUM7VUFDdkM7QUFDRCxhQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7QUFFNUMsYUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLFVBQVUsRUFBRTtBQUNuQyxlQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsSUFBRSxJQUFJLENBQUMsTUFBTSxHQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzVGLGVBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDL0QsZUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNqRSxlQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztVQUMxRCxNQUFNO0FBQ0wsZUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLElBQUUsSUFBSSxDQUFDLEtBQUssR0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztBQUMzRixlQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNqRCxlQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDLENBQUM7QUFDakMsZUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7VUFDekQ7UUFDRjs7QUFHRCxVQUFLO2NBQUEsaUJBQUc7QUFDTixhQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFDLEdBQUcsQ0FBQztBQUNyQyxhQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0FBQ2xDLGFBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNiOztBQUVELFNBQUk7Y0FBQSxnQkFBRztBQUNMLGFBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtBQUNoQixlQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDakMsZUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUUsQ0FBQztBQUNoRCxlQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3RDLGVBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztVQUVmO1FBQ0Y7O0FBRUQsWUFBTztjQUFBLG1CQUFHO0FBQ1IsYUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2Y7O0FBRUcsZUFBVTtZQUFBLFlBQUc7QUFDZixnQkFBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztRQUMvQjs7QUFVRyxVQUFLOzs7Ozs7OztZQUhBLFlBQUc7QUFDVixnQkFBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUMxQjtZQUNRLFVBQUMsQ0FBQyxFQUFFO0FBQ1gsYUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdEIsYUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7QUFDN0MsYUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN0QyxhQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZjs7QUFVRyxRQUFHOzs7Ozs7OztZQUhBLFlBQUc7QUFDUixnQkFBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUN4QjtZQUNNLFVBQUMsQ0FBQyxFQUFFO0FBQ1QsYUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCOztBQVVHLFFBQUc7Ozs7Ozs7O1lBSEEsWUFBRztBQUNSLGdCQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO1FBQ3hCO1lBQ00sVUFBQyxDQUFDLEVBQUU7QUFDVCxhQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDckI7O0FBVUcsU0FBSTs7Ozs7Ozs7WUFIQSxZQUFHO0FBQ1QsZ0JBQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDekI7WUFDTyxVQUFDLENBQUMsRUFBRTtBQUNWLGFBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztRQUN0Qjs7QUFVRyxTQUFJOzs7Ozs7OztZQUhBLFlBQUc7QUFDVCxnQkFBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztRQUMzQjtZQUNPLFVBQUMsQ0FBQyxFQUFFO0FBQ1YsYUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCOzs7O1VBdE9rQixNQUFNO0lBQVMsU0FBUzs7a0JBQXhCLE1BQU0sQzs7Ozs7O0FDeEMzQixhQUFZLENBQUM7Ozs7Ozs7Ozs7QUFFYixLQUFJLEdBQUcsR0FBRyxtQkFBTyxDQUFDLENBQWEsQ0FBQyxDQUFDO0FBQ2pDLEtBQUksV0FBVyxHQUFHLG1CQUFPLENBQUMsRUFBa0IsQ0FBQyxDQUFDO0FBQzlDLEtBQUksU0FBUyxHQUFHLG1CQUFPLENBQUMsQ0FBbUIsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBOEJ4QixNQUFNO0FBRWQsWUFGUSxNQUFNLEdBRVg7MkJBRkssTUFBTTs7QUFJdkIsU0FBSSxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQzs7QUFFeEIsU0FBSSxRQUFRLEdBQUc7QUFDYixhQUFRLENBQUMsRUFBRSxFQUFDLEVBQUUsQ0FBQztBQUNmLGVBQVUsS0FBSztBQUNmLGNBQVMsS0FBSztNQUNmLENBQUM7O0FBRUYsZ0NBWmlCLE1BQU0sNkNBWWpCLFNBQVMsRUFBQyxPQUFPLEVBQUMsUUFBUSxFQUFFOztBQUVsQyxTQUFJLENBQUMsTUFBTSxHQUFHLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7O0FBRW5ELFNBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUViOzthQWxCa0IsTUFBTTs7Z0JBQU4sTUFBTTtBQW9CekIsbUJBQWM7Y0FBQSwwQkFBRzs7QUFFZixhQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDOUIsYUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2pDLGFBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNuQyxhQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFckM7O0FBRUQsa0JBQWE7Y0FBQSx5QkFBRzs7QUFFZCxhQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBQyxDQUFDLEVBQUU7QUFDOUIsZUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQztVQUMvQixNQUFNO0FBQ0wsZUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFDLENBQUMsQ0FBQztVQUM5Qjs7QUFFRCxhQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUMsSUFBSSxDQUFDLEtBQUssR0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBQyxHQUFHLENBQUMsQ0FBQztBQUM1RCxhQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUMsSUFBSSxDQUFDLE1BQU0sR0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBQyxDQUFDLENBQUMsQ0FBQztBQUMzRCxhQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLFFBQVEsR0FBQyxDQUFDLENBQUMsQ0FBQztBQUM1QyxhQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLFFBQVEsR0FBQyxDQUFDLENBQUMsQ0FBQztBQUM1QyxhQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUMsSUFBSSxDQUFDLFFBQVEsR0FBQyxDQUFDLENBQUMsQ0FBQztBQUMvQyxhQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDOztBQUU5QyxhQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLEtBQUssR0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzFELGFBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzNDLGFBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFM0M7O0FBRUQsbUJBQWM7Y0FBQSwwQkFBRztBQUNmLGFBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ25ELGFBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNmOztBQUVELFdBQU07Y0FBQSxrQkFBRztBQUNQLGFBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO0FBQ2YsZUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxLQUFLLEdBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMxRCxlQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztVQUNqRCxNQUFNO0FBQ0wsZUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxLQUFLLEdBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMxRCxlQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztVQUNuRDtRQUNGOztBQUVELFVBQUs7Y0FBQSxpQkFBRztBQUNOLGFBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNaLGFBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUNkLGFBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoQzs7QUFVRyxVQUFLOzs7Ozs7OztZQUhBLFlBQUc7QUFDVixnQkFBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUMxQjtZQUNRLFVBQUMsS0FBSyxFQUFFO0FBQ2YsYUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDeEIsYUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQy9CLGFBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNmOztBQVFELFNBQUk7Ozs7Ozs7O2NBQUEsZ0JBQUc7QUFDTCxhQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ25CLGFBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNmOzs7O1VBOUZrQixNQUFNO0lBQVMsU0FBUzs7a0JBQXhCLE1BQU0sQzs7Ozs7O0FDbEMzQixhQUFZLENBQUM7Ozs7Ozs7Ozs7QUFFYixLQUFJLEdBQUcsR0FBRyxtQkFBTyxDQUFDLENBQWEsQ0FBQyxDQUFDO0FBQ2pDLEtBQUksY0FBYyxHQUFHLG1CQUFPLENBQUMsRUFBOEIsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FpQ3hDLE1BQU07QUFFZCxZQUZRLE1BQU0sR0FFWDsyQkFGSyxNQUFNOztBQUl2QixTQUFJLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDOztBQUd2QixTQUFJLFFBQVEsR0FBRztBQUNiLGFBQVEsQ0FBQyxFQUFFLEVBQUMsRUFBRSxDQUFDO0FBQ2YsYUFBUSxZQUFZO0FBQ3BCLGNBQVMsS0FBSztNQUNmLENBQUM7O0FBRUYsZ0NBYmlCLE1BQU0sNkNBYWpCLFNBQVMsRUFBQyxPQUFPLEVBQUMsUUFBUSxFQUFFOzs7Ozs7O0FBUWxDLFNBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7O0FBRS9CLFNBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNaLFNBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUVmOzthQTFCa0IsTUFBTTs7Z0JBQU4sTUFBTTtBQTRCekIsbUJBQWM7Y0FBQSwwQkFBRztBQUNmLGFBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNoQyxhQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7O0FBRW5DLGFBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDOzs7QUFHbEMsYUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQy9CLGFBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzs7QUFFcEMsYUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDLENBQUM7O0FBRWhELGFBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7O0FBRXJELGFBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFdkQ7O0FBRUQsa0JBQWE7Y0FBQSx5QkFBRzs7QUFFZCxhQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLEtBQUssR0FBQyxDQUFDLENBQUMsQ0FBQztBQUN6QyxhQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUMsQ0FBQztBQUMxQyxhQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBQyxFQUFFLENBQUMsQ0FBQztBQUNqRixhQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLEtBQUssR0FBQyxFQUFFLENBQUMsQ0FBQztRQUN0RDs7QUFFRCxtQkFBYztjQUFBLDBCQUFHOztBQUVmLGFBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN0RSxhQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDcEUsYUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2Y7O0FBUUQsV0FBTTs7Ozs7Ozs7O2NBQUEsa0JBQUc7QUFDUCxhQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtBQUNmLGVBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2hELGVBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1VBQzFELE1BQU07QUFDTCxlQUFJLElBQUksQ0FBQyxJQUFJLEtBQUcsWUFBWSxFQUFFO0FBQzVCLGlCQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsT0FBTyxHQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxHQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzlELGlCQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFDLEdBQUcsR0FBRSxHQUFHLENBQUMsQ0FBQztBQUNwRSxpQkFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRyxDQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBRSxHQUFHLEdBQUUsR0FBRyxDQUFDLENBQUM7WUFDekUsTUFBTTtBQUNMLGlCQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNyRDtBQUNELGVBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1VBQ25EO1FBQ0Y7Ozs7VUFqRmtCLE1BQU07SUFBUyxjQUFjOztrQkFBN0IsTUFBTSxDOzs7Ozs7QUNwQzNCLGFBQVksQ0FBQzs7Ozs7Ozs7OztBQUViLEtBQUksR0FBRyxHQUFHLG1CQUFPLENBQUMsQ0FBYSxDQUFDLENBQUM7QUFDakMsS0FBSSxJQUFJLEdBQUcsbUJBQU8sQ0FBQyxDQUFjLENBQUMsQ0FBQztBQUNuQyxLQUFJLFdBQVcsR0FBRyxtQkFBTyxDQUFDLEVBQWtCLENBQUMsQ0FBQztBQUM5QyxLQUFJLFNBQVMsR0FBRyxtQkFBTyxDQUFDLENBQW1CLENBQUMsQ0FBQzs7Ozs7O0tBTXhCLGNBQWM7QUFFdEIsWUFGUSxjQUFjLENBRXJCLElBQUksRUFBQyxPQUFPLEVBQUMsUUFBUSxFQUFFOzJCQUZoQixjQUFjOztBQUkvQixnQ0FKaUIsY0FBYyw2Q0FJekIsSUFBSSxFQUFDLE9BQU8sRUFBQyxRQUFRLEVBQUU7O0FBRTdCLFNBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUksUUFBUSxDQUFDOztBQUUzQyxTQUFJLENBQUMsUUFBUSxHQUFHO0FBQ2QsUUFBQyxFQUFFLENBQUM7QUFDSixRQUFDLEVBQUUsQ0FBQztNQUNMLENBQUM7O0FBRUYsU0FBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRXBEOzthQWZrQixjQUFjOztnQkFBZCxjQUFjO0FBaUJqQyxtQkFBYztjQUFBLDBCQUFHO0FBQ2YsYUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2hDLGFBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztBQUN0QyxhQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDeEMsYUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDOztBQUV6QyxhQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7O0FBRW5DLGFBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDOztBQUVsQyxhQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdEI7O0FBRUQsa0JBQWE7Y0FBQSx5QkFBRztBQUNkLGFBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsS0FBSyxHQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3pDLGFBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzFDLGFBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN0RTs7QUFFRCxXQUFNO2NBQUEsa0JBQUc7QUFDUCxhQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtBQUNmLGVBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2hELGVBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1VBQzFELE1BQU07QUFDTCxlQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNsRCxlQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztVQUNyRDtRQUNGOztBQUVELFNBQUk7Y0FBQSxjQUFDLFVBQVUsRUFBRTtBQUNmLGlCQUFRLElBQUksQ0FBQyxJQUFJO0FBQ2YsZ0JBQUssU0FBUztBQUNaLGlCQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDZCxpQkFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO0FBQ2hCLDJCQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2NBQzVCO0FBQ0QsaUJBQUksQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFDLEVBQUUsQ0FBQyxDQUFDOztBQUV0RCxtQkFBTTtBQUNSLGdCQUFLLFFBQVE7QUFDWCxpQkFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDOztBQUVkLG1CQUFNO0FBQ1IsZ0JBQUssWUFBWTtBQUNmLGlCQUFJLENBQUMsUUFBUSxHQUFHO0FBQ2QsZ0JBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztBQUMzQyxnQkFBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztjQUMvQyxDQUFDO0FBQ0YsaUJBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7Ozs7O0FBTWQsbUJBQU07QUFDUixnQkFBSyxRQUFRO0FBQ1gsaUJBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7O0FBRXRCLG1CQUFNO0FBQUEsVUFDVDtRQUVGOztBQUVELFNBQUk7Y0FBQSxjQUFDLEtBQUssRUFBRTtBQUNWLGFBQUksSUFBSSxDQUFDLElBQUksS0FBRyxZQUFZLEVBQUU7QUFDNUIsZUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQztBQUNqQyxlQUFJLENBQUMsUUFBUSxHQUFHO0FBQ2QsY0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0FBQzNDLGNBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7WUFDakQsQ0FBQztBQUNGLGVBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFDO0FBQ2pCLGtCQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7QUFDakIsY0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNsQixjQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQ25CLENBQUMsQ0FBQztBQUNILGVBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztVQUNmO1FBQ0Y7O0FBRUQsT0FBRTtjQUFBLGNBQUc7QUFDSCxpQkFBUSxJQUFJLENBQUMsSUFBSTtBQUNmLGdCQUFLLFFBQVE7QUFDWCxpQkFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDOztBQUVmLG1CQUFNO0FBQ1IsZ0JBQUssWUFBWTtBQUNmLGlCQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDZixpQkFBSSxDQUFDLFFBQVEsR0FBRztBQUNkLGdCQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7QUFDM0MsZ0JBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7Y0FDakQsQ0FBQzs7Ozs7O0FBTUYsbUJBQU07QUFBQSxVQUNUO1FBQ0Y7O0FBSUQsVUFBSzs7OztjQUFBLGlCQUFHO0FBQ04sYUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2I7O0FBQ0QsU0FBSTtjQUFBLGdCQUFHO0FBQ0wsYUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2I7O0FBQ0QsWUFBTztjQUFBLG1CQUFHO0FBQ1IsYUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQ1g7O0FBVUcsVUFBSzs7Ozs7Ozs7WUFIQSxZQUFHO0FBQ1YsZ0JBQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDMUI7WUFDUSxVQUFDLEtBQUssRUFBRTtBQUNmLGFBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3hCLGFBQUksSUFBSSxDQUFDLElBQUksS0FBRyxZQUFZLEVBQUU7QUFDNUIsZUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUM7QUFDakIsa0JBQUssRUFBRSxJQUFJLENBQUMsS0FBSztBQUNqQixjQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2xCLGNBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFDbkIsQ0FBQyxDQUFDO1VBQ0osTUFBTTtBQUNMLGVBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztVQUNoQztBQUNELGFBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNmOztBQU9ELFNBQUk7Ozs7Ozs7O2NBQUEsY0FBQyxLQUFLLEVBQUU7QUFDVixhQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN4QixhQUFJLElBQUksQ0FBQyxJQUFJLEtBQUcsWUFBWSxFQUFFO0FBQzVCLGVBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFDO0FBQ2pCLGtCQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7QUFDakIsY0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNsQixjQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQ25CLENBQUMsQ0FBQztVQUNKLE1BQU07QUFDTCxlQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7VUFDaEM7QUFDRCxhQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZjs7QUFNRCxXQUFNOzs7Ozs7O2NBQUEsZ0JBQUMsUUFBUSxFQUFFO0FBQ2YsYUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsQ0FBQztBQUNqQixhQUFJLFFBQVEsS0FBRyxLQUFLLEVBQUU7QUFDcEIsZUFBSSxJQUFJLENBQUMsSUFBSSxLQUFHLFlBQVksRUFBRTtBQUM1QixpQkFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUM7QUFDakIsb0JBQUssRUFBRSxJQUFJLENBQUMsS0FBSztBQUNqQixnQkFBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNsQixnQkFBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUNuQixDQUFDLENBQUM7WUFDSixNQUFNO0FBQ0wsaUJBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNoQztVQUNGO0FBQ0QsYUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2Y7O0FBTUQsWUFBTzs7Ozs7OztjQUFBLGlCQUFDLFFBQVEsRUFBRTtBQUNoQixhQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ2xCLGFBQUksUUFBUSxLQUFHLEtBQUssRUFBRTtBQUNwQixlQUFJLElBQUksQ0FBQyxJQUFJLEtBQUcsWUFBWSxFQUFFO0FBQzVCLGlCQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBQztBQUNqQixvQkFBSyxFQUFFLElBQUksQ0FBQyxLQUFLO0FBQ2pCLGdCQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2xCLGdCQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQ25CLENBQUMsQ0FBQztZQUNKLE1BQU07QUFDTCxpQkFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2hDO1VBQ0Y7QUFDRCxhQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZjs7OztVQWhOa0IsY0FBYztJQUFTLFNBQVM7O2tCQUFoQyxjQUFjLEM7Ozs7OztBQ1huQyxhQUFZLENBQUM7Ozs7Ozs7Ozs7QUFFYixLQUFJLGNBQWMsR0FBRyxtQkFBTyxDQUFDLEVBQThCLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FnQ3hDLFVBQVU7QUFFbEIsWUFGUSxVQUFVLEdBRWY7MkJBRkssVUFBVTs7QUFJM0IsU0FBSSxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQzs7QUFFeEIsU0FBSSxRQUFRLEdBQUc7QUFDYixhQUFRLENBQUMsR0FBRyxFQUFDLEVBQUUsQ0FBQztBQUNoQixjQUFTLEtBQUs7QUFDZCxhQUFRLE1BQU07QUFDZCxrQkFBYSxLQUFLO01BQ25CLENBQUM7O0FBRUYsZ0NBYmlCLFVBQVUsNkNBYXJCLFNBQVMsRUFBQyxPQUFPLEVBQUMsUUFBUSxFQUFFOztBQUVsQyxTQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO0FBQ2hDLFNBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUM7O0FBRTlDLFNBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNaLFNBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7QUFFZCxTQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO0lBRWxDOzthQXZCa0IsVUFBVTs7Z0JBQVYsVUFBVTtBQXlCN0IsZUFBVTtjQUFBLHNCQUFHOztBQUVYLGFBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM3QyxhQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7O0FBRXRDLGFBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNqRCxhQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0FBQ3hDLGFBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM1Qzs7QUFFRCxtQkFBYztjQUFBLDBCQUFHLEVBRWhCOztBQUVELG1CQUFjO2NBQUEsMEJBQUc7QUFDZixhQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7QUFDNUMsYUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2Y7O0FBRUQsa0JBQWE7Y0FBQSx5QkFBRztBQUNaLGFBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDO0FBQzdCLGFBQUksU0FBUyxHQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFHLENBQUM7QUFDeEQsaUJBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBQyxTQUFTLENBQUMsQ0FBQztBQUN4QyxhQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7QUFDdEIsZUFBSSxTQUFTLEdBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUcsQ0FBQztBQUNoRSxtQkFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFDLFNBQVMsQ0FBQyxDQUFDO1VBQ3pDO0FBQ0QsYUFBSSxNQUFNLEdBQUcsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0FBQzVDLGVBQU0sSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7QUFDM0MsZUFBTSxJQUFJLFdBQVcsR0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUMsUUFBUSxJQUFFLENBQUMsR0FBQyxTQUFTLENBQUM7QUFDekQsZUFBTSxJQUFJLHlCQUF5QixDQUFDO0FBQ3BDLGVBQU0sSUFBSSxxQkFBcUIsQ0FBQztBQUNoQyxlQUFNLElBQUksdUJBQXVCLENBQUM7QUFDbEMsZUFBTSxJQUFJLG1CQUFtQixDQUFDO0FBQzlCLGVBQU0sSUFBSSxhQUFhLENBQUM7QUFDeEIsZUFBTSxJQUFJLFlBQVksR0FBRyxRQUFRLEdBQUcsS0FBSyxDQUFDO0FBQzFDLGFBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7QUFDeEMsYUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2pCOztBQUVELFdBQU07Y0FBQSxrQkFBRztBQUNQLGFBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO0FBQ2YsZUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO0FBQ3RELGVBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztBQUNoRCxlQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1VBQ3pDLE1BQU07QUFDTCxlQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7QUFDeEQsZUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO0FBQ2hELGVBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtBQUN0QixpQkFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztZQUNsRCxNQUFNO0FBQ0wsaUJBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDekM7VUFDRjtRQUNGOztBQVVHLGtCQUFhOzs7Ozs7O1lBSkEsWUFBRztBQUNsQixnQkFBTyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQzVCO1lBRWdCLFVBQUMsSUFBSSxFQUFFO0FBQ3RCLGFBQUksSUFBSSxFQUFFO0FBQ1IsZUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7VUFDdEIsTUFBTTtBQUNMLGVBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO1VBQ3RCO0FBQ0QsYUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7QUFDM0IsYUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2Y7O0FBV0csU0FBSTs7Ozs7OztZQUpBLFlBQUc7QUFDVCxnQkFBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ25CO1lBRU8sVUFBQyxJQUFJLEVBQUU7QUFDYixhQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztBQUNsQixhQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7QUFDckIsYUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2Y7Ozs7VUFoSGtCLFVBQVU7SUFBUyxjQUFjOztrQkFBakMsVUFBVSxDOzs7Ozs7QUNsQy9CLGFBQVksQ0FBQzs7Ozs7Ozs7Ozs7QUFHYixLQUFJLFNBQVMsR0FBRyxtQkFBTyxDQUFDLENBQW1CLENBQUMsQ0FBQztBQUM3QyxLQUFJLE1BQU0sR0FBRyxtQkFBTyxDQUFDLEVBQXNCLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQStCeEIsV0FBVztBQUVuQixZQUZRLFdBQVcsR0FFaEI7MkJBRkssV0FBVzs7QUFJNUIsU0FBSSxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQzs7QUFFeEIsU0FBSSxRQUFRLEdBQUc7QUFDYixhQUFRLENBQUMsR0FBRyxFQUFDLEVBQUUsQ0FBQztBQUNoQix3QkFBbUIsQ0FBQztBQUNwQixlQUFVLENBQUMsQ0FBQztNQUNiLENBQUM7O0FBRUYsZ0NBWmlCLFdBQVcsNkNBWXRCLFNBQVMsRUFBQyxPQUFPLEVBQUMsUUFBUSxFQUFFOztBQUVsQyxTQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztBQUNsQixTQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUM7QUFDdEQsU0FBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQzs7QUFFbkMsU0FBSSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ1osU0FBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBRWY7O2FBckJrQixXQUFXOztnQkFBWCxXQUFXO0FBdUI5QixlQUFVO2NBQUEsc0JBQUc7QUFDWCxhQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDN0MsYUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZDOztBQUVELG1CQUFjO2NBQUEsMEJBQUc7O0FBRWYsY0FBSyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBQyxDQUFDLEVBQUUsRUFBRTtBQUN4QyxlQUFJLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDOztBQUUvQyxlQUFJLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQyxTQUFTLEVBQUU7QUFDL0IsaUJBQUksRUFBRSxRQUFRO0FBQ2Qsc0JBQVMsRUFBRSxJQUFJLEVBQ2hCLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7O0FBRS9CLGVBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzFCLGVBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1VBQ3JDO1FBRUY7O0FBRUQsa0JBQWE7Y0FBQSx5QkFBRzs7QUFFZCxhQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztBQUNyRCxhQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDOztBQUUvQixjQUFLLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFDLENBQUMsRUFBRSxFQUFFO0FBQ3hDLGVBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBQyxZQUFZLENBQUMsQ0FBQztVQUNsRDtRQUVGOztBQUVELG1CQUFjO2NBQUEsMEJBQUc7QUFDZixjQUFLLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFDLENBQUMsRUFBRSxFQUFFO0FBQ3hDLGVBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7QUFDckMsZUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztVQUMxQjtRQUNGOztBQUVELFdBQU07Y0FBQSxnQkFBQyxLQUFLLEVBQUU7QUFDWixhQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFO0FBQzdCLGVBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7VUFDcEIsTUFBTTtBQUNMLGVBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztVQUNqQjs7QUFBQSxRQUVGOztBQUVELFdBQU07Y0FBQSxrQkFBRztBQUNQLGNBQUssSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUUsRUFBRTtBQUN0QyxlQUFJLENBQUMsS0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFO0FBQ25CLGlCQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMvQixNQUFNO0FBQ0wsaUJBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2hDO1VBQ0Y7UUFDRjs7QUFNRCxXQUFNOzs7Ozs7O2NBQUEsZ0JBQUMsS0FBSyxFQUFFO0FBQ1osYUFBSSxLQUFLLElBQUUsQ0FBQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRTtBQUMzQyxlQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztBQUNwQixlQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDaEMsZUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1VBQ2Y7UUFDRjs7QUFLRCxhQUFROzs7Ozs7Y0FBQSxvQkFBRztBQUNULGFBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDakIsYUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2hDLGFBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNmOztBQVVHLG9CQUFlO1lBUkEsWUFBRztBQUNwQixnQkFBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFDOUI7Ozs7OztZQU1rQixVQUFDLE9BQU8sRUFBRTtBQUMzQixhQUFJLENBQUMsZ0JBQWdCLEdBQUcsT0FBTyxDQUFDO0FBQ2hDLGNBQUssSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUUsRUFBRTtBQUN0QyxlQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1VBQzNCO0FBQ0QsYUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7Ozs7QUFJbEIsYUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ2IsYUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCOzs7O1VBekhrQixXQUFXO0lBQVMsU0FBUzs7a0JBQTdCLFdBQVcsQzs7Ozs7O0FDbkNoQyxhQUFZLENBQUM7Ozs7Ozs7Ozs7QUFFYixLQUFJLFNBQVMsR0FBRyxtQkFBTyxDQUFDLENBQW1CLENBQUMsQ0FBQztBQUM3QyxLQUFJLElBQUksR0FBRyxtQkFBTyxDQUFDLEVBQWdCLENBQUMsQ0FBQztBQUNyQyxLQUFJLElBQUksR0FBRyxtQkFBTyxDQUFDLENBQWMsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBbUNkLE1BQU07QUFFZCxZQUZRLE1BQU0sR0FFWDsyQkFGSyxNQUFNOztBQUl2QixTQUFJLE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDOztBQUV4QixTQUFJLFFBQVEsR0FBRztBQUNiLGFBQVEsQ0FBQyxFQUFFLEVBQUMsRUFBRSxDQUFDO0FBQ2YsY0FBUyxDQUFDO0FBQ1YsWUFBTyxDQUFDO0FBQ1IsWUFBTyxLQUFLO0FBQ1osYUFBUSxDQUFDO01BQ1YsQ0FBQzs7QUFFRixnQ0FkaUIsTUFBTSw2Q0FjakIsU0FBUyxFQUFDLE9BQU8sRUFBQyxRQUFRLEVBQUU7O0FBRWxDLFNBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7Ozs7OztBQU9uRyxTQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztBQUN2QixTQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzs7QUFFaEIsU0FBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQzs7QUFFM0IsU0FBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQzs7QUFFM0IsU0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQzs7QUFFN0IsU0FBSSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ1osU0FBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBRWY7O2FBbkNrQixNQUFNOztnQkFBTixNQUFNO0FBcUN6QixlQUFVO2NBQUEsc0JBQUc7QUFDWCxhQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDL0MsYUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDOztBQUUzQixhQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxhQUFZO0FBQ2pELGVBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztBQUN0RCxlQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7QUFDNUMsZUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsS0FBSyxFQUFFO0FBQ3BDLGlCQUFJLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzVDLGlCQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDaEI7VUFDRixFQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDOztBQUdiLGFBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLFdBQVUsQ0FBQyxFQUFFO0FBQ3JELGVBQUksQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFLEVBQUU7QUFDakMsaUJBQUksQ0FBQyxDQUFDLEtBQUssS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLEtBQUssS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLEVBQUU7QUFDeEQsZ0JBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztjQUNuQjtZQUNEO0FBQ0QsZUFBSSxDQUFDLENBQUMsS0FBSyxLQUFHLEVBQUUsRUFBRTtBQUNqQixpQkFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNsQixpQkFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztBQUNoQyxpQkFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQy9CLGlCQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDaEI7VUFDRixFQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDOztBQUViLGFBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUV2Qzs7QUFFRCxrQkFBYTtjQUFBLHlCQUFHOztBQUVkLGFBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzs7QUFFdEQsYUFBSSxNQUFNLEdBQUcsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0FBQzVDLGVBQU0sSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7QUFDM0MsZUFBTSxJQUFJLDRCQUE0QixDQUFDO0FBQ3ZDLGVBQU0sSUFBSSxjQUFjLENBQUM7QUFDekIsZUFBTSxJQUFJLHFCQUFxQixDQUFDO0FBQ2hDLGVBQU0sSUFBSSxtQkFBbUIsQ0FBQztBQUM5QixlQUFNLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLEdBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQzs7QUFFdEQsZUFBTSxJQUFJLGVBQWUsQ0FBQztBQUMxQixlQUFNLElBQUksZ0JBQWdCLENBQUM7QUFDM0IsZUFBTSxJQUFJLFdBQVcsR0FBQyxJQUFJLENBQUMsYUFBYSxHQUFDLENBQUMsR0FBQyxLQUFLLEdBQUMsSUFBSSxDQUFDLGFBQWEsR0FBQyxDQUFDLEdBQUMsS0FBSyxDQUFDO0FBQzVFLGVBQU0sSUFBSSx5QkFBeUIsQ0FBQztBQUNwQyxlQUFNLElBQUksbUJBQW1CLENBQUM7QUFDOUIsZUFBTSxJQUFJLHNCQUFzQixDQUFDO0FBQ2pDLGVBQU0sSUFBSSx5QkFBeUIsQ0FBQztBQUNwQyxhQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUksTUFBTSxDQUFDOzs7OztBQUtyQyxhQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBRWpDOztBQUVELG1CQUFjO2NBQUEsMEJBQUc7QUFDYixhQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7QUFDdEQsYUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQy9DOztBQUVELFdBQU07Y0FBQSxrQkFBRzs7QUFFUCxhQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRWhFOztBQUVELFVBQUs7Y0FBQSxpQkFBRztBQUNOLGFBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0FBQ3RCLGFBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztBQUM5QixhQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7QUFDeEIsYUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQ25DLGFBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFFLENBQUM7QUFDN0QsZ0JBQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2hDOztBQUVELFNBQUk7Y0FBQSxnQkFBRztBQUNMLGFBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0FBQ3JCLGFBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTs7QUFFaEIsZUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFNLElBQUksQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFDLEdBQUcsR0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUUsR0FBRyxHQUFHLENBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUMsQ0FBQyxDQUFDLENBQUM7QUFDakosZUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7O0FBRXhCLGVBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUNaLGVBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7QUFDdkIsaUJBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNoQztVQUVIO1FBQ0Q7O0FBRUQsWUFBTztjQUFBLG1CQUFHO0FBQ1IsYUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7QUFDbEIsZUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0FBQ2hDLGVBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDckIsZUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDN0QsZUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO0FBQ3hELGVBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztVQUM1QyxNQUFNO0FBQ0wsbUJBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7VUFDdkI7UUFDRjs7QUFPRCxTQUFJOzs7Ozs7OztjQUFBLGNBQUMsV0FBVyxFQUFFOzs7QUFDaEIsYUFBSSxDQUFDLEdBQUcsR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDO0FBQzNCLGFBQUksQ0FBQyxHQUFHLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQztBQUMzQixhQUFJLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUM7QUFDN0Isb0JBQVcsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFDLFVBQUMsQ0FBQyxFQUFLO0FBQzdCLGlCQUFLLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztVQUN2QixDQUFDLENBQUM7QUFDSCxhQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBQyxVQUFDLENBQUMsRUFBSztBQUN0QixzQkFBVyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7VUFDdkIsQ0FBQyxDQUFDO0FBQ0gsYUFBSSxDQUFDLEtBQUssR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDOzs7Ozs7Ozs7UUFTaEM7O0FBRUQsa0JBQWE7Y0FBQSx1QkFBQyxDQUFDLEVBQUU7QUFDZixhQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN0QixhQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZjs7QUFVRyxVQUFLOzs7Ozs7OztZQUhBLFlBQUc7QUFDVixnQkFBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUMxQjtZQUNRLFVBQUMsQ0FBQyxFQUFFO0FBQ1gsYUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdEIsYUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQy9CLGFBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNmOztBQVVHLFFBQUc7Ozs7Ozs7O1lBSEEsWUFBRztBQUNSLGdCQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO1FBQ3hCO1lBQ00sVUFBQyxDQUFDLEVBQUU7QUFDVCxhQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDckI7O0FBVUcsUUFBRzs7Ozs7Ozs7WUFIQSxZQUFHO0FBQ1IsZ0JBQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7UUFDeEI7WUFDTSxVQUFDLENBQUMsRUFBRTtBQUNULGFBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUNyQjs7QUFVRyxTQUFJOzs7Ozs7OztZQUhBLFlBQUc7QUFDVCxnQkFBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUN6QjtZQUNPLFVBQUMsQ0FBQyxFQUFFO0FBQ1YsYUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCOzs7O1VBL05rQixNQUFNO0lBQVMsU0FBUzs7a0JBQXhCLE1BQU0sQzs7Ozs7O0FDdkMzQixhQUFZLENBQUM7Ozs7Ozs7Ozs7QUFFYixLQUFJLFNBQVMsR0FBRyxtQkFBTyxDQUFDLENBQW1CLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQWdDeEIsTUFBTTtBQUVkLFlBRlEsTUFBTSxHQUVYOzJCQUZLLE1BQU07O0FBSXZCLFNBQUksT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7O0FBRXhCLFNBQUksUUFBUSxHQUFHO0FBQ1osYUFBUSxDQUFDLEdBQUcsRUFBQyxFQUFFLENBQUM7QUFDaEIsZ0JBQVcsQ0FBQyxTQUFTLEVBQUMsU0FBUyxDQUFDO01BQ2xDLENBQUM7O0FBRUYsZ0NBWGlCLE1BQU0sNkNBV2pCLFNBQVMsRUFBQyxPQUFPLEVBQUMsUUFBUSxFQUFFOztBQUVsQyxTQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3pCLFNBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDOztBQUVwQixTQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDOztBQUV0QyxTQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDWixTQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFFZjs7YUFyQmtCLE1BQU07O2dCQUFOLE1BQU07QUF1QnpCLGVBQVU7Y0FBQSxzQkFBRztBQUNYLGFBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNoRCxhQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBQyxDQUFDLEdBQUMsSUFBSSxDQUFDO0FBQ2pELGFBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7QUFDcEMsYUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztBQUN0QyxhQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBQyxJQUFJLENBQUM7QUFDM0MsYUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUMsSUFBSSxDQUFDOztBQUU3QyxhQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDOztBQUUxQyxhQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7O0FBRTFELGFBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUV2Qzs7QUFFRCxvQkFBZTtjQUFBLDJCQUFHLEVBRWpCOztBQUVELG1CQUFjO2NBQUEsMEJBQUc7O0FBRWYsYUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBRXRCOztBQUVELG1CQUFjO2NBQUEsMEJBQUc7QUFDZixhQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7QUFDdEQsYUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO0FBQzVDLGFBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxZQUFZLEdBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFDbEU7O0FBRUQsV0FBTTtjQUFBLGtCQUFHOztBQUVQLGFBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUM7QUFDcEUsYUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztBQUNqRCxhQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBQztBQUNqQixnQkFBSyxFQUFFLElBQUksQ0FBQyxNQUFNO0FBQ2xCLGdCQUFLLEVBQUUsSUFBSSxDQUFDLGNBQWM7VUFDM0IsQ0FBQyxDQUFDO1FBRUo7O0FBRUQsVUFBSztjQUFBLGlCQUFHLEVBRVA7O0FBRUQsU0FBSTtjQUFBLGdCQUFHLEVBRU47O0FBRUQsWUFBTztjQUFBLG1CQUFHLEVBRVQ7O0FBT0Qsa0JBQWE7Ozs7Ozs7Y0FBQSx1QkFBQyxPQUFPLEVBQUU7QUFDckIsYUFBSSxPQUFPLEVBQUU7QUFDWCxlQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztVQUN6Qjs7QUFFRCxjQUFJLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUFFO0FBQzdDLGVBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1VBQ3hCOztBQUVELGNBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUUsRUFBRTtBQUN0QyxlQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1VBQzNEO1FBRUY7O0FBV0csVUFBSzs7Ozs7Ozs7WUFIQSxZQUFHO0FBQ1YsZ0JBQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNwQjtZQUNRLFVBQUMsQ0FBQyxFQUFFO0FBQ1gsYUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFDaEIsY0FBSSxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUUsRUFBRTtBQUM3QyxlQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUU7QUFDdEMsaUJBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO0FBQ3ZCLG1CQUFNO1lBQ1A7VUFDRjtRQUNGOztBQVdHLGtCQUFhOzs7Ozs7OztZQUhBLFlBQUc7QUFDbEIsZ0JBQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUM1QjtZQUNnQixVQUFDLENBQUMsRUFBRTtBQUNuQixhQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztBQUN4QixhQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7QUFDL0IsYUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2Y7O0FBRUQsa0JBQWE7Y0FBQSx5QkFBRztBQUNkLGFBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM5RDs7OztVQXRJa0IsTUFBTTtJQUFTLFNBQVM7O2tCQUF4QixNQUFNLEM7Ozs7OztBQ2xDM0IsYUFBWSxDQUFDOzs7Ozs7Ozs7Ozs7QUFFYixLQUFJLEdBQUcsR0FBRyxtQkFBTyxDQUFDLENBQWEsQ0FBQyxDQUFDO0FBQ2pDLEtBQUksSUFBSSxHQUFHLG1CQUFPLENBQUMsQ0FBYyxDQUFDLENBQUM7QUFDbkMsS0FBSSxTQUFTLEdBQUcsbUJBQU8sQ0FBQyxDQUFtQixDQUFDLENBQUM7QUFDN0MsS0FBSSxJQUFJLEdBQUcsbUJBQU8sQ0FBQyxFQUFnQixDQUFDLENBQUM7O0tBQ3pCLFdBQVcsK0NBQU0sRUFBcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0F3QzdCLElBQUk7QUFFWixZQUZRLElBQUksR0FFVDsyQkFGSyxJQUFJOztBQUlyQixTQUFJLE9BQU8sR0FBRyxDQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsT0FBTyxDQUFDLENBQUM7O0FBRXBDLFNBQUksUUFBUSxHQUFHO0FBQ2IsYUFBUSxDQUFDLEVBQUUsRUFBQyxFQUFFLENBQUM7QUFDZixvQkFBZSxRQUFRO0FBQ3ZCLGFBQVEsVUFBVTtBQUNsQixZQUFPLENBQUM7QUFDUixZQUFPLENBQUM7QUFDUixhQUFRLENBQUM7QUFDVCxjQUFTLENBQUM7TUFDWCxDQUFDOztBQUVGLGdDQWhCaUIsSUFBSSw2Q0FnQmYsU0FBUyxFQUFDLE9BQU8sRUFBQyxRQUFRLEVBQUU7O0FBRWxDLFNBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUM7O0FBRTdDLFNBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7QUFFdEcsU0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLFdBQVcsRUFBQyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7O0FBRTNHLFNBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7QUFFWixTQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDOztBQUUvQixTQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQzs7QUFFN0MsU0FBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7O0FBRTNCLFNBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUVoQzs7YUFsQ2tCLElBQUk7O2dCQUFKLElBQUk7QUFvQ3ZCLG1CQUFjO2NBQUEsMEJBQUc7O0FBRWYsYUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3ZDLGFBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNsQyxhQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDakMsYUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2xDLGFBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNyQyxhQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDdEMsYUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDOztBQUVyQyxhQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDMUMsYUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3RDLGFBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN2QyxhQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDMUMsYUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQzNDLGFBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUMxQyxhQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFdEM7O0FBR0Qsa0JBQWE7Y0FBQSx5QkFBRzs7QUFFZCxhQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7O0FBRXJELGFBQUksTUFBTSxHQUFHO0FBQ1gsWUFBQyxFQUFFLElBQUksQ0FBQyxLQUFLLEdBQUMsQ0FBQztBQUNmLFlBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxHQUFDLENBQUM7VUFDakIsQ0FBQzs7QUFFRixhQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDOztBQUVoRCxhQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzdDLGFBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDN0MsYUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLFFBQVEsR0FBQyxDQUFDLEdBQUMsUUFBUSxHQUFDLEVBQUUsQ0FBQyxDQUFDOztBQUUxRCxhQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3hDLGFBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDeEMsYUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLFFBQVEsR0FBQyxFQUFFLENBQUMsQ0FBQzs7QUFFMUMsYUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQzs7QUFFdkIsYUFBSSxZQUFZLEdBQUc7QUFDakIsZ0JBQUssRUFBRSxJQUFJLENBQUMsRUFBRSxHQUFDLEdBQUc7QUFDbEIsY0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLEdBQUcsRUFBQyxJQUFJLENBQUMsRUFBRSxHQUFDLEdBQUcsRUFBQyxJQUFJLENBQUMsRUFBRSxHQUFDLEdBQUcsQ0FBQyxFQUFHLElBQUksQ0FBQyxFQUFFLEdBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxFQUFFLEdBQUMsR0FBRyxDQUFFO1VBQzdGLENBQUM7QUFDRixhQUFJLGFBQWEsR0FBRztBQUNsQixnQkFBSyxFQUFFLElBQUksQ0FBQyxFQUFFLEdBQUMsR0FBRztBQUNsQixjQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBQyxHQUFHLEVBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxFQUFFLEdBQUMsR0FBRyxFQUFDLElBQUksQ0FBQyxFQUFFLEdBQUMsR0FBRyxDQUFDLEVBQUcsSUFBSSxDQUFDLEVBQUUsR0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEVBQUUsR0FBQyxHQUFHLENBQUU7VUFDN0YsQ0FBQzs7QUFFRixhQUFJLFVBQVUsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsRUFBRSxRQUFRLEdBQUMsQ0FBQyxHQUFDLFFBQVEsR0FBQyxFQUFFLEVBQUUsWUFBWSxDQUFDLEtBQUssRUFBRSxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDM0csYUFBSSxXQUFXLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEVBQUUsUUFBUSxHQUFDLENBQUMsR0FBQyxRQUFRLEdBQUMsRUFBRSxFQUFFLGFBQWEsQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDOztBQUU5RyxhQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUMsVUFBVSxDQUFDLENBQUM7QUFDekMsYUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsY0FBYyxFQUFFLFFBQVEsR0FBQyxFQUFFLENBQUMsQ0FBQztBQUN0RCxhQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7O0FBRXpDLGFBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBQyxXQUFXLENBQUMsQ0FBQztBQUMzQyxhQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxjQUFjLEVBQUUsUUFBUSxHQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3ZELGFBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQzs7QUFFMUMsbUJBQVUsSUFBSSxLQUFLLEdBQUMsTUFBTSxDQUFDLENBQUMsR0FBQyxHQUFHLEdBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzs7QUFFMUMsYUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQzdDLGFBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FBQzs7QUFFcEQsb0JBQVcsSUFBSSxLQUFLLEdBQUMsTUFBTSxDQUFDLENBQUMsR0FBQyxHQUFHLEdBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzs7QUFFM0MsYUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQy9DLGFBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FBQzs7QUFFckQsYUFBSSxVQUFVLGFBQUM7QUFDZixhQUFJLEtBQUssR0FBRyxHQUFHLEVBQUU7QUFDZixxQkFBVSxHQUFHLFlBQVksQ0FBQyxHQUFHLENBQUM7VUFDL0IsTUFBTTtBQUNMLHFCQUFVLEdBQUcsYUFBYSxDQUFDLEdBQUcsQ0FBQztVQUNoQzs7QUFFRCxhQUFJLFVBQVUsR0FBRyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksUUFBUSxHQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2hFLGFBQUksVUFBVSxHQUFHLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxRQUFRLEdBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7O0FBRXJFLGFBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBQyxJQUFJLEdBQUMsTUFBTSxDQUFDLENBQUMsR0FBQyxHQUFHLEdBQUMsTUFBTSxDQUFDLENBQUMsR0FBQyxLQUFLLEdBQUMsVUFBVSxHQUFDLEdBQUcsR0FBQyxVQUFVLENBQUMsQ0FBQztBQUM3RixhQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxjQUFjLEVBQUUsUUFBUSxHQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRTNEOztBQUVELG1CQUFjO2NBQUEsMEJBQUc7QUFDZixhQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN2RCxhQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNwRCxhQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN2RCxhQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN4RCxhQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN6RCxhQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUMxRCxhQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUU1RDs7QUFFRCxXQUFNO2NBQUEsa0JBQUc7QUFDUCxhQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQzs7QUFFbkMsYUFBSSxNQUFNLEdBQUc7QUFDWCxZQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssR0FBQyxDQUFDO0FBQ2YsWUFBQyxFQUFFLElBQUksQ0FBQyxNQUFNLEdBQUMsQ0FBQztVQUNqQixDQUFDOztBQUVGLGFBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7O0FBRWhELGFBQUksWUFBWSxHQUFHO0FBQ2pCLGdCQUFLLEVBQUUsSUFBSSxDQUFDLEVBQUUsR0FBQyxHQUFHO0FBQ2xCLGNBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxHQUFHLEVBQUMsSUFBSSxDQUFDLEVBQUUsR0FBQyxHQUFHLEVBQUMsSUFBSSxDQUFDLEVBQUUsR0FBQyxHQUFHLENBQUMsRUFBRyxJQUFJLENBQUMsRUFBRSxHQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsRUFBRSxHQUFDLEdBQUcsQ0FBRTtVQUM3RixDQUFDO0FBQ0YsYUFBSSxhQUFhLEdBQUc7QUFDbEIsZ0JBQUssRUFBRSxJQUFJLENBQUMsRUFBRSxHQUFFLEdBQUc7QUFDbkIsY0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsRUFBRSxHQUFDLEdBQUcsRUFBQyxJQUFJLENBQUMsRUFBRSxHQUFDLEdBQUcsQ0FBQyxFQUFHLElBQUksQ0FBQyxFQUFFLEdBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxFQUFFLEdBQUMsR0FBRyxDQUFFO1VBQzdGLENBQUM7O0FBRUYsYUFBSSxVQUFVLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEVBQUUsUUFBUSxHQUFDLENBQUMsR0FBQyxRQUFRLEdBQUMsRUFBRSxFQUFFLFlBQVksQ0FBQyxLQUFLLEVBQUUsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzNHLGFBQUksV0FBVyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxFQUFFLFFBQVEsR0FBQyxDQUFDLEdBQUMsUUFBUSxHQUFDLEVBQUUsRUFBRSxhQUFhLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQzs7QUFFOUcsYUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ3pDLGFBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBQyxXQUFXLENBQUMsQ0FBQzs7QUFHM0MsbUJBQVUsSUFBSSxLQUFLLEdBQUMsTUFBTSxDQUFDLENBQUMsR0FBQyxHQUFHLEdBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzs7QUFFMUMsYUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFDLFVBQVUsQ0FBQyxDQUFDOztBQUU3QyxvQkFBVyxJQUFJLEtBQUssR0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFDLEdBQUcsR0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDOztBQUUzQyxhQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUMsV0FBVyxDQUFDLENBQUM7O0FBRS9DLGFBQUksVUFBVSxhQUFDO0FBQ2YsYUFBSSxLQUFLLElBQUksR0FBRyxFQUFFO0FBQ2hCLHFCQUFVLEdBQUcsWUFBWSxDQUFDLEdBQUcsQ0FBQztVQUMvQixNQUFNO0FBQ0wscUJBQVUsR0FBRyxhQUFhLENBQUMsR0FBRyxDQUFDO1VBQ2hDOztBQUVELGFBQUksVUFBVSxHQUFHLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxRQUFRLEdBQUMsQ0FBQyxDQUFDLENBQUM7QUFDaEUsYUFBSSxVQUFVLEdBQUcsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLFFBQVEsR0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzs7QUFFckUsYUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFDLElBQUksR0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFDLEdBQUcsR0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFDLEtBQUssR0FBQyxVQUFVLEdBQUMsR0FBRyxHQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRTlGOztBQUdELFVBQUs7Y0FBQSxpQkFBRztBQUNOLGFBQUksSUFBSSxDQUFDLElBQUksS0FBRyxVQUFVLEVBQUU7QUFDMUIsZUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7VUFDNUI7QUFDRCxhQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0FBQ2xDLGFBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO0FBQzdDLGFBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNaOztBQUVGLFNBQUk7Y0FBQSxnQkFBRztBQUNMLGFBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTs7QUFFaEIsZUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDOztBQUVqQyxlQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBQyxJQUFJLENBQUMsRUFBRSxHQUFDLENBQUMsQ0FBQzs7QUFFMUMsZUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFHO0FBQUUsa0JBQUssSUFBSyxJQUFJLENBQUMsRUFBRSxHQUFDLENBQUUsQ0FBQztZQUFFOztBQUV6QyxlQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssVUFBVSxFQUFFO0FBQzVCLGlCQUFJLElBQUksQ0FBQyxhQUFhLEtBQUssS0FBSyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUU7QUFDNUUsbUJBQUksSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLEVBQUU7QUFDMUIsc0JBQUssR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFDLENBQUMsQ0FBQztnQkFDbkIsTUFBTTtBQUNMLHNCQUFLLEdBQUcsQ0FBQyxDQUFDO2dCQUNYO2NBQ0Y7WUFDRjs7Ozs7Ozs7O0FBU0QsZUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7O0FBRTNCLGVBQUksU0FBUyxHQUFHLEtBQUssSUFBSSxJQUFJLENBQUMsRUFBRSxHQUFDLENBQUMsQ0FBQyxDQUFDOztBQUVwQyxlQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFFLFNBQVMsQ0FBRSxDQUFDOztBQUVuRCxlQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssVUFBVSxFQUFFO0FBQzVCLGlCQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7WUFDakM7O0FBRUQsZUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQzs7QUFFdEMsZUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1VBRWY7UUFDRjs7QUFFRCxZQUFPO2NBQUEsbUJBQUcsRUFDVDs7QUEwQkssVUFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUhBLFlBQUc7QUFDVixnQkFBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUMxQjtZQUNRLFVBQUMsQ0FBQyxFQUFFO0FBQ1gsYUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdEIsYUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7QUFDN0MsYUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN0QyxhQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZjs7QUFVRyxRQUFHOzs7Ozs7OztZQUhBLFlBQUc7QUFDUixnQkFBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUN4QjtZQUNNLFVBQUMsQ0FBQyxFQUFFO0FBQ1QsYUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCOztBQVVHLFFBQUc7Ozs7Ozs7O1lBSEEsWUFBRztBQUNSLGdCQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO1FBQ3hCO1lBQ00sVUFBQyxDQUFDLEVBQUU7QUFDVCxhQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDckI7O0FBVUcsU0FBSTs7Ozs7Ozs7WUFIQSxZQUFHO0FBQ1QsZ0JBQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDekI7WUFDTyxVQUFDLENBQUMsRUFBRTtBQUNWLGFBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztRQUN0Qjs7QUFVRyxTQUFJOzs7Ozs7OztZQUhBLFlBQUc7QUFDVCxnQkFBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztRQUMzQjtZQUNPLFVBQUMsQ0FBQyxFQUFFO0FBQ1YsYUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCOztBQVlDLGVBQVU7Ozs7Ozs7O1lBSkEsWUFBRztBQUNmLGdCQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO1FBQy9CO1lBRWEsVUFBQyxDQUFDLEVBQUU7QUFDaEIsYUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDNUIsYUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hDOzs7O1VBMVVrQixJQUFJO0lBQVMsU0FBUzs7a0JBQXRCLElBQUksQzs7Ozs7O0FDOUN6QixhQUFZLENBQUM7Ozs7Ozs7Ozs7QUFFYixLQUFJLEdBQUcsR0FBRyxtQkFBTyxDQUFDLENBQWEsQ0FBQyxDQUFDO0FBQ2pDLEtBQUksU0FBUyxHQUFHLG1CQUFPLENBQUMsQ0FBbUIsQ0FBQyxDQUFDO0FBQzdDLEtBQUksY0FBYyxHQUFHLG1CQUFPLENBQUMsRUFBOEIsQ0FBQyxDQUFDO0FBQzdELEtBQUksS0FBSyxHQUFHLG1CQUFPLENBQUMsQ0FBZSxDQUFDLENBQUM7O0tBRS9CLFFBQVE7QUFFRCxZQUZQLFFBQVEsR0FFRTsyQkFGVixRQUFROztBQUlWLFNBQUksT0FBTyxHQUFHLENBQUMsT0FBTyxFQUFDLE1BQU0sRUFBQyxPQUFPLENBQUMsQ0FBQzs7QUFFdkMsU0FBSSxRQUFRLEdBQUc7QUFDYixhQUFRLENBQUMsRUFBRSxFQUFDLEVBQUUsQ0FBQztBQUNmLGVBQVUsS0FBSztBQUNmLGFBQVEsUUFBUTtBQUNoQixjQUFTLENBQUM7TUFDWCxDQUFDOztBQUVGLGdDQWJFLFFBQVEsNkNBYUosU0FBUyxFQUFDLE9BQU8sRUFBQyxRQUFRLEVBQUU7O0FBRWxDLFNBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7QUFDL0IsU0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQzs7QUFFakMsU0FBSSxDQUFDLE1BQU0sR0FBRztBQUNaLFVBQUssTUFBTTtBQUNYLFVBQUssTUFBTSxFQUNaLENBQUM7O0FBRUYsU0FBSSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ1osU0FBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBRWY7O2FBMUJHLFFBQVE7O2dCQUFSLFFBQVE7QUE0QlosZUFBVTtjQUFBLHNCQUFHO0FBQ1gsYUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2pDLGFBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDOUMsYUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNoRCxhQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkM7O0FBRUQsbUJBQWM7Y0FBQSwwQkFBRzs7O0FBRWYsYUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDOztBQUU5QixhQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7O0FBRW5DLGFBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDOzs7O0FBSWxDLGFBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFOztBQUVqQixlQUFJLENBQUMsS0FBSyxHQUFHLFlBQU07O0FBRWpCLG1CQUFLLEtBQUssQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO0FBQzlCLG1CQUFLLEtBQUssQ0FBQyxVQUFVLEdBQUcsQ0FBQyxNQUFLLEtBQUssQ0FBQztBQUNwQyxtQkFBSyxJQUFJLENBQUMsTUFBSyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDbEMsQ0FBQzs7QUFFRixlQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxZQUFNO0FBQzNDLGlCQUFJLE1BQUssS0FBSyxDQUFDLFdBQVcsRUFBRTs7QUFFMUIscUJBQUssSUFBSSxDQUFDLE1BQUssS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2NBQ2xDO1lBQ0YsQ0FBQyxDQUFDOztBQUdILGVBQUksQ0FBQyxJQUFJLEdBQUcsWUFBTTtBQUNoQixpQkFBSSxNQUFLLEtBQUssQ0FBQyxXQUFXLEVBQUU7O0FBRTFCLHFCQUFLLElBQUksRUFBRSxDQUFDO2NBQ2I7WUFDRixDQUFDOztBQUdGLGVBQUksQ0FBQyxPQUFPLEdBQUcsWUFBTTtBQUNuQixtQkFBSyxLQUFLLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQzs7O1lBR2hDLENBQUM7QUFDRixlQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxZQUFNO0FBQ3pDLGlCQUFJLE1BQUssS0FBSyxDQUFDLFdBQVcsRUFBRTs7QUFFMUIscUJBQUssRUFBRSxFQUFFLENBQUM7Y0FDWDtZQUNGLENBQUMsQ0FBQztBQUNILGVBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLFlBQU07QUFDMUMsaUJBQUksTUFBSyxLQUFLLENBQUMsV0FBVyxFQUFFOztBQUUxQixxQkFBSyxFQUFFLEVBQUUsQ0FBQztjQUNYO1lBQ0YsQ0FBQyxDQUFDO1VBRUo7UUFFRjs7QUFFRCxrQkFBYTtjQUFBLHlCQUFHOzs7QUFHVixhQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7O0FBRWYsYUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQy9CLGFBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsQ0FBQztBQUMvQixhQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFO0FBQ2xCLGVBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1VBQ2hELE1BQU07QUFDTCxlQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1VBQzVDO0FBQ0QsYUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtBQUNuQixlQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1VBQzlDLE1BQU07QUFDTCxlQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1VBQzlDO0FBQ0QsYUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ3BDLGFBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUV6Qzs7QUFFRCxXQUFNO2NBQUEsa0JBQUc7QUFDUCxhQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtBQUNmLGVBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1VBQ3hELE1BQU07QUFDTCxlQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztVQUNuRDtRQUNGOzs7O1VBeEhHLFFBQVE7SUFBUyxjQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQTBKaEIsS0FBSztBQUViLFlBRlEsS0FBSyxHQUVWOzJCQUZLLEtBQUs7O0FBSXRCLFNBQUksT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7O0FBRXhCLFNBQUksUUFBUSxHQUFHO0FBQ2IsYUFBUSxDQUFDLEdBQUcsRUFBQyxHQUFHLENBQUM7QUFDakIsZ0JBQVcsRUFBRTtBQUNiLGlCQUFZLEVBQUU7QUFDZCxhQUFRLFFBQVE7TUFDakIsQ0FBQzs7QUFFRixnQ0FiaUIsS0FBSyw2Q0FhaEIsU0FBUyxFQUFDLE9BQU8sRUFBQyxRQUFRLEVBQUU7O0FBRWxDLFNBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxDQUFDOztBQUVwRSxTQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQzs7QUFFeEIsU0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQzs7QUFFL0IsU0FBSSxDQUFDLEtBQUssR0FBRztBQUNYLFVBQUcsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU87QUFDMUIsV0FBSSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUTtNQUM3QixDQUFDOztBQUVGLFNBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDOztBQUVuRCxTQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQzs7QUFFZixTQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQzs7QUFFdEIsU0FBSSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ1osU0FBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBRWY7O2FBbkNrQixLQUFLOztnQkFBTCxLQUFLO0FBcUN4QixlQUFVO2NBQUEsc0JBQUc7QUFDWCxhQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDN0MsYUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztBQUN6QyxhQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0FBQ3hDLGFBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDckMsYUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztBQUNsQyxhQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0FBQ25DLGFBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2Qzs7QUFFRCxtQkFBYztjQUFBLDBCQUFHOztBQUVmLGFBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDOztBQUVmLGNBQUssSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUUsRUFBRTs7QUFFbkQsZUFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUMvQyxlQUFJLFVBQVUsR0FBRyxDQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQzs7QUFFN0QsZUFBSSxHQUFHLEdBQUcsSUFBSSxRQUFRLENBQUMsU0FBUyxFQUFFO0FBQzlCLHNCQUFTLEVBQUUsSUFBSTtBQUNmLGlCQUFJLEVBQUUsQ0FBQyxHQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRztBQUN0QixrQkFBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDO0FBQ2xDLGlCQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDaEIsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzs7QUFFakQsY0FBRyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7O0FBRWpCLGVBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTtBQUNoQixnQkFBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0FBQ2xCLGdCQUFHLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLFVBQVUsR0FBRyxZQUFNLEVBQUUsQ0FBQztBQUN2RCxnQkFBRyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxPQUFPLEdBQUcsWUFBTSxFQUFFLENBQUM7QUFDOUMsZ0JBQUcsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUMsZUFBZSxHQUFHLFlBQU0sRUFBRSxDQUFDO0FBQ2pFLGdCQUFHLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLFlBQVksR0FBRyxZQUFNLEVBQUUsQ0FBQztZQUN6RDs7QUFFRCxlQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNwQixlQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztVQUVyQztBQUNELGFBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTtBQUNoQixlQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztVQUMxQjtRQUVGOztBQUVELGtCQUFhO2NBQUEseUJBQUc7O0FBRWQsYUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDOztBQUViLGFBQUksWUFBWSxHQUFHLEVBQUUsQ0FBQzs7QUFFdEIsY0FBSyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFDLENBQUMsRUFBRSxFQUFFOztBQUVuRCx1QkFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzs7QUFFeEIsZUFBSSxVQUFVLEdBQUcsQ0FBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7QUFDN0QsZUFBSSxjQUFjLEdBQUcsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO0FBQ25FLGVBQUksQ0FBQyxHQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRTtBQUN6QyxpQkFBSSxJQUFJLENBQUMsQ0FBQztZQUNYLE1BQU0sSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEdBQUcsRUFBRTtBQUN6RixpQkFBSSxJQUFJLENBQUMsQ0FBQztZQUNYLE1BQU07QUFDTCxpQkFBSSxJQUFJLEdBQUcsQ0FBQztZQUNiO1VBQ0Y7QUFDRCxhQUFJLFFBQVEsR0FBRyxJQUFJLENBQUM7OztBQUlwQixhQUFJLE9BQU8sR0FBRyxDQUFDLENBQUM7QUFDaEIsYUFBSSxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFDLE9BQU8sR0FBQyxDQUFDLElBQUksUUFBUSxDQUFDO0FBQ3BELGFBQUksWUFBWSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBQyxPQUFPLEdBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7QUFFL0MsY0FBSyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUFFOztBQUVuQyxlQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztBQUNwQyxvQkFBUyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO0FBQ3RDLG9CQUFTLENBQUMsS0FBSyxDQUFDLElBQUksR0FBSSxZQUFZLENBQUMsQ0FBQyxDQUFDLEdBQUMsV0FBVyxHQUFDLE9BQU8sR0FBSSxJQUFJLENBQUM7QUFDcEUsZUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxHQUFHLEVBQUU7QUFDOUIsc0JBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFJLE9BQU8sR0FBSSxJQUFJLENBQUM7QUFDdkMsaUJBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxZQUFZLEdBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEQsTUFBTTtBQUNMLHNCQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFDM0Isc0JBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLE9BQU8sR0FBQyxJQUFJLENBQUM7QUFDbkMsaUJBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxZQUFZLEdBQUMsR0FBRyxDQUFDLENBQUM7WUFDcEQ7VUFFRjtRQUVGOztBQUVELG1CQUFjO2NBQUEsMEJBQUc7Ozs7QUFJZixhQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUM7O0FBRTdELGNBQUssSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUUsRUFBRTtBQUNuQyxlQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRztBQUNwQixnQkFBSyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7QUFDdEIsZ0JBQUssSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJO0FBQ3JCLHFCQUFVLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTTtBQUM1QixxQkFBVSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVc7WUFDbEMsQ0FBQztBQUNGLGVBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDOUIsZUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztVQUN2QjtRQUdGOztBQUVELGNBQVM7Y0FBQSxtQkFBQyxJQUFJLEVBQUMsRUFBRSxFQUFFOzs7OztBQUtqQixhQUFJLElBQUksR0FBRztBQUNULGVBQUksRUFBRSxJQUFJO1VBQ1gsQ0FBQztBQUNGLGFBQUksT0FBTyxFQUFFLEtBQUssUUFBUSxFQUFFO0FBQzFCLGVBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQzs7O1VBR3ZCLE1BQU07QUFDTCxlQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztVQUNqQjtBQUNELGFBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCOztBQVNELFdBQU07Ozs7Ozs7OztjQUFBLGtCQUFHLEVBRVI7O0FBR0Qsc0JBQWlCO2NBQUEsNkJBQUc7OztBQUVsQixhQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxZQUFNLEVBQUUsQ0FBQztBQUMxRCxhQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxZQUFNLEVBQUUsQ0FBQztBQUNqRCxhQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGVBQWUsR0FBRyxZQUFNLEVBQUUsQ0FBQztBQUNwRSxhQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFNLEVBQUUsQ0FBQzs7QUFFM0QsYUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7O0FBRTVCLGFBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLFVBQUMsQ0FBQyxFQUFLO0FBQ2pELGtCQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQzFCLGVBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQy9GLGVBQUksR0FBRyxHQUFHLE1BQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNuQyxpQkFBSyxVQUFVLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO0FBQzdCLGNBQUcsQ0FBQyxJQUFJLENBQUMsTUFBSyxVQUFVLENBQUMsQ0FBQztBQUMxQixpQkFBSyxjQUFjLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztBQUNwQyxZQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDbkIsWUFBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1VBQ3JCLENBQUMsQ0FBQzs7QUFFSCxhQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxVQUFDLENBQUMsRUFBSztBQUNoRCxlQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUMvRixlQUFJLEdBQUcsR0FBRyxNQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDbkMsZUFBSSxPQUFPLENBQUMsS0FBSyxLQUFHLE1BQUssY0FBYyxFQUFFO0FBQ3ZDLGlCQUFJLE1BQUssY0FBYyxFQUFFO0FBQ3ZCLG1CQUFJLE9BQU8sR0FBRyxNQUFLLElBQUksQ0FBQyxNQUFLLGNBQWMsQ0FBQyxDQUFDO0FBQzdDLHNCQUFPLENBQUMsRUFBRSxFQUFFLENBQUM7Y0FDZDtBQUNELGdCQUFHLENBQUMsSUFBSSxDQUFDLE1BQUssVUFBVSxDQUFDLENBQUM7WUFDM0IsTUFBTTtBQUNMLGdCQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDWjtBQUNELGlCQUFLLGNBQWMsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO0FBQ3BDLFlBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUNuQixZQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7VUFDckIsQ0FBQyxDQUFDOztBQUVILGFBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLFVBQUMsQ0FBQyxFQUFLOztBQUUvQyxlQUFJLEdBQUcsR0FBRyxNQUFLLElBQUksQ0FBQyxNQUFLLGNBQWMsQ0FBQyxDQUFDO0FBQ3pDLGNBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQztBQUNULGlCQUFLLFdBQVcsR0FBRyxLQUFLLENBQUM7QUFDekIsaUJBQUssY0FBYyxHQUFHLEtBQUssQ0FBQztBQUM1QixZQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDbkIsWUFBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1VBQ3JCLENBQUMsQ0FBQztRQUVKOztBQU9ELGFBQVE7Ozs7Ozs7O2NBQUEsa0JBQUMsR0FBRyxFQUFDLElBQUksRUFBRTtBQUNqQixhQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDckIsYUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ3ZCLGFBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNiLGFBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2Qjs7QUFPRCxjQUFTOzs7Ozs7OztjQUFBLG1CQUFDLElBQUksRUFBRSxFQUFFLEVBQUU7QUFDbEIsYUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDekM7O0FBT0QsZ0JBQVc7Ozs7Ozs7O2NBQUEscUJBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTtBQUNyQixhQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMzQjs7OztVQWhRa0IsS0FBSztJQUFTLFNBQVM7O2tCQUF2QixLQUFLOzs7Ozs7OztBQ2pLMUIsYUFBWSxDQUFDOzs7Ozs7Ozs7O0FBRWIsS0FBSSxHQUFHLEdBQUcsbUJBQU8sQ0FBQyxDQUFhLENBQUMsQ0FBQztBQUNqQyxLQUFJLEdBQUcsR0FBRyxtQkFBTyxDQUFDLENBQWEsQ0FBQyxDQUFDO0FBQ2pDLEtBQUksU0FBUyxHQUFHLG1CQUFPLENBQUMsQ0FBbUIsQ0FBQyxDQUFDO0FBQzdDLEtBQUksY0FBYyxHQUFHLG1CQUFPLENBQUMsRUFBOEIsQ0FBQyxDQUFDO0FBQzdELEtBQUksV0FBVyxHQUFHLG1CQUFPLENBQUMsRUFBa0IsQ0FBQyxDQUFDO0FBQzlDLEtBQUksWUFBWSxHQUFHLG1CQUFPLENBQUMsRUFBbUIsQ0FBQyxDQUFDO0FBQ2hELEtBQUksS0FBSyxHQUFHLG1CQUFPLENBQUMsQ0FBZSxDQUFDLENBQUM7O0tBSS9CLFVBQVU7QUFFSCxZQUZQLFVBQVUsR0FFQTsyQkFGVixVQUFVOztBQUlaLFNBQUksT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFFLENBQUM7O0FBRXpCLFNBQUksUUFBUSxHQUFHO0FBQ2IsYUFBUSxDQUFDLEVBQUUsRUFBQyxFQUFFLENBQUM7QUFDZixlQUFVLEtBQUs7QUFDZixhQUFRLFFBQVE7QUFDaEIsY0FBUyxDQUFDO01BQ1gsQ0FBQzs7QUFFRixnQ0FiRSxVQUFVLDZDQWFOLFNBQVMsRUFBQyxPQUFPLEVBQUMsUUFBUSxFQUFFOztBQUVsQyxTQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO0FBQ2pDLFNBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUM7QUFDN0IsU0FBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQzs7QUFFbkMsU0FBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQzs7QUFFbkMsU0FBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7QUFDekIsU0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7O0FBRXhCLFNBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNaLFNBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUVmOzthQTNCRyxVQUFVOztnQkFBVixVQUFVO0FBNkJkLGVBQVU7Y0FBQSxzQkFBRztBQUNYLGFBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNqQyxhQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzlDLGFBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDaEQsYUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztBQUMvQixhQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO0FBQ2hDLGFBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7QUFDekMsYUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZDOztBQUVELG1CQUFjO2NBQUEsMEJBQUc7OztBQUVmLGFBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM5QixhQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7O0FBRW5DLGFBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDOzs7O0FBSWxDLGFBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFOztBQUVqQixlQUFJLENBQUMsS0FBSyxHQUFHLFlBQU07QUFDakIsbUJBQUssTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7QUFDL0IsbUJBQUssTUFBTSxDQUFDLFVBQVUsR0FBRyxDQUFDLE1BQUssS0FBSyxDQUFDO0FBQ3JDLG1CQUFLLElBQUksQ0FBQyxNQUFLLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNuQyxDQUFDO0FBQ0YsZUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsWUFBTTtBQUMzQyxpQkFBSSxNQUFLLE1BQU0sQ0FBQyxXQUFXLEVBQUU7QUFDM0IscUJBQUssSUFBSSxDQUFDLE1BQUssTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2NBQ25DO1lBQ0YsQ0FBQyxDQUFDOztBQUdILGVBQUksQ0FBQyxJQUFJLEdBQUcsWUFBTSxFQUNqQixDQUFDO0FBQ0YsZUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsVUFBQyxDQUFDLEVBQUs7QUFDNUMsaUJBQUksTUFBSyxNQUFNLENBQUMsV0FBVyxFQUFFO0FBQzNCLG1CQUFJLENBQUMsTUFBSyxNQUFNLEVBQUU7QUFDaEIsdUJBQUssTUFBTSxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUMsTUFBSyxPQUFPLENBQUMsQ0FBQztnQkFDOUM7QUFDRCxxQkFBSyxLQUFLLEdBQUcsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUMsTUFBSyxNQUFNLENBQUMsQ0FBQztBQUM1QyxxQkFBSyxJQUFJLEVBQUUsQ0FBQztjQUNiO1lBQ0YsQ0FBQyxDQUFDOztBQUdILGVBQUksQ0FBQyxPQUFPLEdBQUcsWUFBTTtBQUNuQixtQkFBSyxNQUFNLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztZQUNqQyxDQUFDO0FBQ0YsZUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsWUFBTTtBQUN6QyxpQkFBSSxNQUFLLE1BQU0sQ0FBQyxXQUFXLEVBQUU7QUFDM0IscUJBQUssRUFBRSxFQUFFLENBQUM7Y0FDWDtZQUNGLENBQUMsQ0FBQztBQUNILGVBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLFlBQU07QUFDMUMsaUJBQUksTUFBSyxNQUFNLENBQUMsV0FBVyxFQUFFO0FBQzNCLHFCQUFLLEVBQUUsRUFBRSxDQUFDO2NBQ1g7WUFDRixDQUFDLENBQUM7VUFDSjtRQUVGOztBQUVELGtCQUFhO2NBQUEseUJBQUc7O0FBRWQsYUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzdCLGFBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBQyxDQUFDLENBQUMsQ0FBQztBQUM3QixhQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFO0FBQ2xCLGVBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1VBQ2hELE1BQU07QUFDTCxlQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1VBQzVDO0FBQ0QsYUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtBQUNuQixlQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztVQUNsRCxNQUFNO0FBQ0wsZUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztVQUM5Qzs7QUFFRCxhQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFeEQ7O0FBRUQsV0FBTTtjQUFBLGtCQUFHO0FBQ1AsYUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7QUFDZixlQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7VUFDeEQsTUFBTTtBQUNMLGVBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztVQUMxRDtRQUNGOzs7O1VBckhHLFVBQVU7SUFBUyxjQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQWdLbEIsU0FBUztBQUVqQixZQUZRLFNBQVMsR0FFZDsyQkFGSyxTQUFTOztBQUkxQixTQUFJLE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDOztBQUV4QixTQUFJLFFBQVEsR0FBRztBQUNiLGFBQVEsQ0FBQyxHQUFHLEVBQUMsR0FBRyxDQUFDO0FBQ2pCLGFBQVEsUUFBUTtBQUNoQixhQUFRLENBQUM7QUFDVCxnQkFBVyxFQUFFO01BQ2QsQ0FBQzs7QUFFRixnQ0FiaUIsU0FBUyw2Q0FhcEIsU0FBUyxFQUFDLE9BQU8sRUFBQyxRQUFRLEVBQUU7O0FBRWxDLFNBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7QUFPakIsU0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQzs7Ozs7O0FBTS9CLFNBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBQyxZQUFXLEVBQUUsRUFBQyxLQUFLLENBQUMsQ0FBQzs7Ozs7O0FBTTVELFNBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN4RSxTQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUM7Ozs7OztBQU10QixTQUFJLENBQUMsT0FBTyxHQUFHLElBQUksWUFBWSxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7O0FBRWhELFNBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUViOzthQTdDa0IsU0FBUzs7Z0JBQVQsU0FBUztBQStDNUIsZUFBVTtjQUFBLHNCQUFHO0FBQ1gsYUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzdDLGFBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7QUFDekMsYUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUNyQyxhQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO0FBQ2xDLGFBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDbkMsYUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3RDLGFBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTtBQUNoQixlQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztVQUMxQjtRQUNGOztBQUVELG1CQUFjO2NBQUEsMEJBQUc7O0FBRWYsYUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7QUFDaEIsY0FBSyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUFFOztBQUVyQyxlQUFJLFNBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzs7O0FBR3JDLGVBQUksU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDL0Msb0JBQVMsQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQzs7QUFHdEMsZUFBSSxJQUFJLEdBQUcsSUFBSSxVQUFVLENBQUMsU0FBUyxFQUFFO0FBQ2pDLHNCQUFTLEVBQUUsSUFBSTtBQUNmLGtCQUFLLEVBQUUsQ0FBQztBQUNSLGdCQUFHLEVBQUUsU0FBUSxDQUFDLEdBQUc7QUFDakIsbUJBQU0sRUFBRSxTQUFRLENBQUMsTUFBTTtBQUN2QixpQkFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO0FBQ2YsbUJBQU0sRUFBRSxJQUFJO1lBQ2IsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7O0FBR2xDLGVBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTtBQUNoQixpQkFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0FBQ25CLGlCQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxZQUFNLEVBQUUsQ0FBQztBQUMxRCxpQkFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsWUFBTSxFQUFFLENBQUM7QUFDakQsaUJBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsZUFBZSxHQUFHLFlBQU0sRUFBRSxDQUFDO0FBQ3BFLGlCQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFNLEVBQUUsQ0FBQztZQUM1RDs7QUFFRCxlQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN0QixlQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztVQUVyQztBQUNELGFBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN0Qjs7QUFFRCxrQkFBYTtjQUFBLHlCQUFHOztBQUVkLGFBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztBQUMxQyxhQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7O0FBRXpDLGNBQUssSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUN0QyxlQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztBQUNyQyxvQkFBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsU0FBUyxHQUFHLElBQUksQ0FBQztBQUMvRCxvQkFBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsVUFBVSxHQUFHLElBQUksQ0FBQztBQUM1RCxlQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUMsVUFBVSxDQUFDLENBQUM7VUFDNUM7UUFHRjs7QUFFRCxtQkFBYztjQUFBLDBCQUFHO0FBQ2YsY0FBSyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ3RDLGVBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7VUFDeEI7UUFDRjs7QUFFRCxXQUFNO2NBQUEsa0JBQUc7Ozs7O0FBR1AsYUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBSzs7QUFFN0IsZUFBSSxNQUFLLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssTUFBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFO0FBQ3JELGlCQUFJLE1BQUssTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUU7QUFDakMscUJBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO2NBQ3hCLE1BQU07QUFDTCxxQkFBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7Y0FDekI7WUFDRjtVQUNGLENBQUMsQ0FBQztRQUNKOztBQVNELGNBQVM7Ozs7Ozs7OztjQUFBLG1CQUFDLElBQUksRUFBQyxFQUFFLEVBQUU7Ozs7QUFJakIsYUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7O0FBRXBDLGFBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ2hELGFBQUksSUFBSSxHQUFHO0FBQ1QsY0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHO0FBQ2IsaUJBQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtBQUNuQixnQkFBSyxFQUFFLEVBQUU7VUFDVixDQUFDO0FBQ0YsYUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUI7O0FBRUQsV0FBTTtjQUFBLGtCQUFHOzs7QUFDUCxhQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLENBQUMsRUFBRTtBQUMzQixlQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFLO0FBQzdCLGlCQUFJLENBQUMsS0FBRyxNQUFLLE9BQU8sQ0FBQyxLQUFLLEVBQUU7QUFDMUIscUJBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFDLE1BQUssTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ2pFLHFCQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLGNBQWMsRUFBQyxHQUFHLENBQUMsQ0FBQztBQUNuRCxxQkFBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsRUFBQyxHQUFHLENBQUMsQ0FBQztjQUN0RCxNQUFNO0FBQ0wscUJBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFDLE1BQU0sQ0FBQyxDQUFDO2NBQ2pEO1lBQ0YsQ0FBQyxDQUFDO1VBQ0o7UUFDRjs7QUFNRCxVQUFLOzs7Ozs7O2NBQUEsZUFBQyxFQUFFLEVBQUU7QUFDUixhQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMzQyxhQUFJLEVBQUUsRUFBRTtBQUNOLGVBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1VBQ3RCO0FBQ0QsYUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN2Qjs7QUFLRCxTQUFJOzs7Ozs7Y0FBQSxnQkFBRztBQUNMLGFBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdEI7O0FBS0QsU0FBSTs7Ozs7O2NBQUEsZ0JBQUc7QUFDTCxhQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ3BCLGFBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztBQUNuRSxhQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZjs7QUFFRCxzQkFBaUI7Y0FBQSw2QkFBRzs7O0FBRWxCLGFBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLFlBQU0sRUFBRSxDQUFDO0FBQzFELGFBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLFlBQU0sRUFBRSxDQUFDO0FBQ2pELGFBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsZUFBZSxHQUFHLFlBQU0sRUFBRSxDQUFDO0FBQ3BFLGFBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQU0sRUFBRSxDQUFDOztBQUUzRCxhQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQzs7QUFFNUIsYUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsVUFBQyxDQUFDLEVBQUs7QUFDakQsZUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDL0YsZUFBSSxJQUFJLEdBQUcsTUFBSyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3JDLGlCQUFLLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7QUFDOUIsZUFBSSxDQUFDLElBQUksQ0FBQyxNQUFLLFVBQVUsQ0FBQyxDQUFDO0FBQzNCLGlCQUFLLGNBQWMsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO0FBQ3BDLFlBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUNuQixZQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7VUFDckIsQ0FBQyxDQUFDOztBQUVILGFBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLFVBQUMsQ0FBQyxFQUFLO0FBQ2hELGVBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQy9GLGVBQUksSUFBSSxHQUFHLE1BQUssS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNyQyxlQUFJLE9BQU8sQ0FBQyxLQUFLLEtBQUcsTUFBSyxjQUFjLEVBQUU7QUFDdkMsaUJBQUksTUFBSyxjQUFjLElBQUksQ0FBQyxFQUFFO0FBQzVCLG1CQUFJLFFBQVEsR0FBRyxNQUFLLEtBQUssQ0FBQyxNQUFLLGNBQWMsQ0FBQyxDQUFDO0FBQy9DLHVCQUFRLENBQUMsRUFBRSxFQUFFLENBQUM7Y0FDZjtBQUNELGlCQUFJLENBQUMsSUFBSSxDQUFDLE1BQUssVUFBVSxDQUFDLENBQUM7WUFDNUIsTUFBTTtBQUNMLGlCQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDYjtBQUNELGlCQUFLLGNBQWMsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO0FBQ3BDLFlBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUNuQixZQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7VUFDckIsQ0FBQyxDQUFDOztBQUVILGFBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLFVBQUMsQ0FBQyxFQUFLOztBQUUvQyxlQUFJLElBQUksR0FBRyxNQUFLLEtBQUssQ0FBQyxNQUFLLGNBQWMsQ0FBQyxDQUFDO0FBQzNDLGVBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQztBQUNWLGlCQUFLLFdBQVcsR0FBRyxLQUFLLENBQUM7QUFDekIsaUJBQUssY0FBYyxHQUFHLEtBQUssQ0FBQztBQUM1QixZQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDbkIsWUFBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1VBQ3JCLENBQUMsQ0FBQztRQUVKOztBQVVHLFNBQUk7Ozs7Ozs7WUFKQSxZQUFHO0FBQ1QsZ0JBQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDekI7WUFFTyxVQUFDLENBQUMsRUFBRTtBQUNWLGFBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztBQUNyQixhQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDYixhQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDdEIsYUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2Y7O0FBVUcsWUFBTzs7Ozs7OztZQUpBLFlBQUc7QUFDWixnQkFBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUM1QjtZQUVVLFVBQUMsQ0FBQyxFQUFFO0FBQ2IsYUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO0FBQ3hCLGFBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztBQUNyQixhQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDYixhQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDdEIsYUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2Y7Ozs7VUFqUmtCLFNBQVM7SUFBUyxTQUFTOztrQkFBM0IsU0FBUyxDOzs7Ozs7QUM1SzlCLGFBQVksQ0FBQzs7Ozs7Ozs7S0FFTixJQUFJLHVDQUFNLENBQWM7O0tBQ3hCLFFBQVEsdUNBQU0sRUFBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0F1QnBCLE1BQU07QUFFZCxZQUZRLE1BQU0sQ0FFYixJQUFJLEVBQUMsT0FBTyxFQUFFOzs7MkJBRlAsTUFBTTs7O0FBSXZCLFNBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO0FBQ2xCLFNBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFDLE9BQU8sQ0FBQyxDQUFDOztBQUUxQixTQUFJLENBQUMsTUFBTSxHQUFHO0FBQ1osV0FBSSxFQUFFLFVBQUMsTUFBTSxFQUFFLEdBQUcsRUFBSztBQUNyQixlQUFLLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQUssT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3ZELGFBQUksTUFBSyxFQUFFLEVBQUU7QUFBRSxpQkFBSyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7VUFBRTtBQUNsQyxnQkFBTyxNQUFLLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsQztBQUNELFVBQUcsRUFBRSxZQUFNO0FBQ1QsZUFBSyxPQUFPLENBQUMsVUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFLO0FBQUUsaUJBQUssTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7VUFBRSxDQUFDLENBQUM7QUFDbEQsYUFBSSxNQUFLLEVBQUUsRUFBRTtBQUFFLGlCQUFLLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztVQUFFO1FBQ25DO0FBQ0QsVUFBRyxFQUFFLFVBQUMsR0FBRyxFQUFLO0FBQ1osY0FBSyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFDLE1BQUssT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ2pDLGlCQUFLLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxDQUFDO1VBQ3pCO0FBQ0QsYUFBSSxNQUFLLEVBQUUsRUFBRTtBQUFFLGlCQUFLLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztVQUFFO1FBQ25DO0FBQ0QsYUFBTSxFQUFFLFVBQUMsTUFBTSxFQUFLO0FBQ2xCLGNBQUssSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBQyxNQUFLLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUM5QixpQkFBSyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBQyxDQUFDLENBQUMsQ0FBQztVQUM1QjtBQUNELGFBQUksTUFBSyxFQUFFLEVBQUU7QUFBRSxpQkFBSyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7VUFBRTtRQUNuQztNQUNGLENBQUM7O0FBRUYsU0FBSSxDQUFDLEdBQUcsR0FBRztBQUNULFdBQUksRUFBRSxVQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFLO0FBQzVCLGVBQUssT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQztBQUNsQyxhQUFJLE1BQUssRUFBRSxFQUFFO0FBQUUsaUJBQUssRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO1VBQUU7UUFDbkM7QUFDRCxVQUFHLEVBQUUsVUFBQyxNQUFNLEVBQUs7OztBQUdmLGVBQUssT0FBTyxHQUFHLE1BQU0sQ0FBQztBQUN0QixhQUFJLE1BQUssRUFBRSxFQUFFO0FBQUUsaUJBQUssRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO1VBQUU7UUFDbkM7QUFDRCxVQUFHLEVBQUUsVUFBQyxHQUFHLEVBQUMsTUFBTSxFQUFLOztBQUVuQixlQUFLLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDM0IsYUFBSSxNQUFLLEVBQUUsRUFBRTtBQUFFLGlCQUFLLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztVQUFFO1FBQ25DO0FBQ0QsYUFBTSxFQUFFLFVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBSzs7QUFFekIsZUFBSyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBRyxFQUFDLENBQUMsRUFBSztBQUM5QixpQkFBSyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1VBQ3JDLENBQUMsQ0FBQztBQUNILGFBQUksTUFBSyxFQUFFLEVBQUU7QUFBRSxpQkFBSyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7VUFBRTtRQUNuQztNQUNGLENBQUM7O0FBRUYsU0FBSSxDQUFDLE1BQU0sR0FBRzs7O0FBR1osVUFBRyxFQUFFLFVBQUMsTUFBTSxFQUFLO0FBQ2YsYUFBSSxDQUFDLE1BQU0sSUFBSSxNQUFNLEtBQUcsQ0FBQyxFQUFFO0FBQ3pCLGlCQUFNLEdBQUcsQ0FBQyxDQUFDO1VBQ1o7QUFDRCxlQUFNLElBQUksTUFBSyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO0FBQ2pDLGFBQUksTUFBTSxHQUFHLENBQUMsRUFBRTtBQUNkLGlCQUFNLEdBQUcsTUFBSyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztVQUMxQztBQUNELGNBQUssSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBQyxNQUFLLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUM5QixlQUFJLEdBQUcsR0FBRyxNQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUUsTUFBSyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLE1BQU0sRUFBRSxNQUFNLENBQUUsQ0FBQztBQUM1RSxpQkFBSyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBRSxNQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO1VBQ2pEO0FBQ0QsYUFBSSxNQUFLLEVBQUUsRUFBRTtBQUFFLGlCQUFLLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztVQUFFO1FBQ25DO0FBQ0QsVUFBRyxFQUFFLFVBQUMsR0FBRyxFQUFDLE1BQU0sRUFBSztBQUNuQixhQUFJLENBQUMsTUFBTSxJQUFJLE1BQU0sS0FBRyxDQUFDLEVBQUU7QUFDekIsaUJBQU0sR0FBRyxDQUFDLENBQUM7VUFDWjtBQUNELGVBQU0sSUFBSSxNQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFDakMsYUFBSSxNQUFNLEdBQUcsQ0FBQyxFQUFFO0FBQ2QsaUJBQU0sR0FBRyxNQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1VBQzFDO0FBQ0QsYUFBSSxHQUFHLEdBQUcsTUFBSyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFFLE1BQUssT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxNQUFNLEVBQUUsTUFBTSxDQUFFLENBQUM7QUFDaEYsZUFBSyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBRSxNQUFLLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBRSxDQUFDO0FBQ3BELGFBQUksTUFBSyxFQUFFLEVBQUU7QUFBRSxpQkFBSyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7VUFBRTtRQUNuQztBQUNELGFBQU0sRUFBRSxVQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUs7QUFDMUIsYUFBSSxDQUFDLE1BQU0sSUFBSSxNQUFNLEtBQUcsQ0FBQyxFQUFFO0FBQ3pCLGlCQUFNLEdBQUcsQ0FBQyxDQUFDO1VBQ1o7QUFDRCxlQUFNLElBQUksTUFBSyxPQUFPLENBQUMsTUFBTSxDQUFDO0FBQzlCLGFBQUksTUFBTSxHQUFHLENBQUMsRUFBRTtBQUNkLGlCQUFNLEdBQUcsTUFBSyxPQUFPLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztVQUN2QztBQUNELGFBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztBQUNmLGVBQUssT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQUcsRUFBSztBQUM1QixnQkFBSyxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUUsQ0FBQztVQUMzQixDQUFDLENBQUM7QUFDSCxhQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFFLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxFQUFFLE1BQU0sQ0FBRSxDQUFDO0FBQ3hELGNBQUssR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFFLEtBQUssQ0FBRSxDQUFDO0FBQzVCLGVBQUssT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUs7QUFDOUIsY0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztVQUN4QixDQUFDLENBQUM7QUFDSCxhQUFJLE1BQUssRUFBRSxFQUFFO0FBQUUsaUJBQUssRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO1VBQUU7UUFDbkM7TUFDRixDQUFDOzs7OztBQUtGLFNBQUksQ0FBQyxRQUFRLEdBQUc7QUFDZCxVQUFHLEVBQUUsVUFBQyxJQUFJLEVBQUs7QUFDYixhQUFJLFlBQVksR0FBRyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN0QyxlQUFLLE9BQU8sQ0FBQyxVQUFDLENBQUMsRUFBQyxDQUFDLEVBQUs7QUFDcEIsaUJBQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7VUFDckQsQ0FBQyxDQUFDOzs7OztBQUtILGFBQUksTUFBSyxFQUFFLEVBQUU7QUFBRSxpQkFBSyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7VUFBRTtRQUNuQztBQUNELFVBQUcsRUFBRSxZQUFrQjthQUFqQixHQUFHLGdDQUFDLENBQUM7YUFBQyxJQUFJLGdDQUFDLENBQUM7O0FBQ2hCLGFBQUksWUFBWSxHQUFHLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3RDLGVBQUssT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUksRUFBQyxDQUFDLEVBQUs7QUFDcEMsaUJBQUssT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7VUFDdkQsQ0FBQyxDQUFDO0FBQ0gsYUFBSSxNQUFLLEVBQUUsRUFBRTtBQUFFLGlCQUFLLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztVQUFFO1FBQ25DO0FBQ0QsYUFBTSxFQUFFLFlBQXFCO2FBQXBCLE1BQU0sZ0NBQUMsQ0FBQzthQUFDLElBQUksZ0NBQUMsQ0FBQzs7QUFDdEIsYUFBSSxZQUFZLEdBQUcsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDdEMsZUFBSyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBRyxFQUFDLENBQUMsRUFBSztBQUM5QixpQkFBSyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztVQUMxRCxDQUFDLENBQUM7QUFDSCxhQUFJLE1BQUssRUFBRSxFQUFFO0FBQUUsaUJBQUssRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO1VBQUU7UUFDbkM7TUFDRixDQUFDOzs7QUFHRixTQUFJLENBQUMsS0FBSyxHQUFHO0FBQ1gsVUFBRyxFQUFFLFlBQU07QUFDVCxlQUFLLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakI7QUFDRCxVQUFHLEVBQUUsVUFBQyxHQUFHLEVBQUs7QUFDWixlQUFLLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JCO0FBQ0QsYUFBTSxFQUFFLFVBQUMsTUFBTSxFQUFLO0FBQ2xCLGVBQUssR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0I7TUFDRixDQUFDOzs7SUFHSDs7Z0JBdkprQixNQUFNO0FBMEp6QixXQUFNO2NBQUEsZ0JBQUMsSUFBSSxFQUFDLE9BQU8sRUFBRTs7O0FBQ25CLGFBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO0FBQ2xCLGNBQU0sSUFBSSxHQUFHLEdBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUc7QUFDbkMsZUFBSSxHQUFHLEdBQUcsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDN0IsZUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7VUFDeEI7QUFDRCxhQUFJLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBSztBQUFFLGlCQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7VUFBRSxDQUFDLENBQUM7UUFDeEQ7O0FBRUQsWUFBTztjQUFBLGlCQUFDLENBQUMsRUFBRSxFQUFFLEVBQUU7QUFDYixhQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDVixjQUFNLElBQUksR0FBRyxHQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsRUFBRztBQUN4QyxlQUFJLEVBQUUsRUFBRTtBQUFFLGVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUFFO0FBQ3BCLGdCQUFNLElBQUksTUFBTSxHQUFDLENBQUMsRUFBRSxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRztBQUNwRCxjQUFDLENBQUMsR0FBRyxFQUFDLE1BQU0sRUFBQyxDQUFDLENBQUMsQ0FBQztBQUNoQixjQUFDLEVBQUUsQ0FBQztZQUNMO1VBQ0Y7UUFDRjs7QUFFRCxpQkFBWTtjQUFBLHdCQUFHOzs7QUFDYixhQUFJLGFBQWEsR0FBRyxFQUFFLENBQUM7QUFDdkIsYUFBSSxDQUFDLE9BQU8sQ0FDVixVQUFDLENBQUMsRUFBQyxDQUFDLEVBQUs7QUFBRSx3QkFBYSxJQUFJLENBQUMsTUFBSyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUM7VUFBRSxFQUNqRSxZQUFNO0FBQUUsd0JBQWEsSUFBSSxJQUFJLENBQUM7VUFBRSxDQUNqQyxDQUFDO0FBQ0YsZ0JBQU8sYUFBYSxDQUFDO1FBQ3RCOztBQUVELFFBQUc7Y0FBQSxlQUFHO0FBQ0osZ0JBQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7UUFDbEM7O0FBRUQsV0FBTTtjQUFBLGdCQUFDLE9BQU8sRUFBRTtBQUNkLGFBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDeEM7O0FBRUcsV0FBTTtZQUFBLFlBQUc7QUFDWCxnQkFBTyxJQUFJLENBQUMsSUFBSSxHQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDL0I7O0FBRUQsV0FBTTtjQUFBLGdCQUFDLEtBQUssRUFBRTs7QUFFWixnQkFBTztBQUNMLGNBQUcsRUFBRSxFQUFDLEVBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUU7QUFDL0IsaUJBQU0sRUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU87VUFDN0IsQ0FBQztRQUNIOztBQUVELFlBQU87Y0FBQSxpQkFBQyxHQUFHLEVBQUMsTUFBTSxFQUFFO0FBQ2xCLGdCQUFPLE1BQU0sR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQzs7UUFFcEM7O0FBRUQsUUFBRzs7Ozs7Ozs7Ozs7VUFBQSxVQUFDLEdBQUcsRUFBRTtBQUNQLGFBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztBQUNkLGNBQUssSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ2pDLGVBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7VUFDdEM7QUFDRCxnQkFBTyxJQUFJLENBQUM7UUFDYjs7QUFFRCxXQUFNOzs7Ozs7Ozs7OztVQUFBLFVBQUMsTUFBTSxFQUFFO0FBQ2IsYUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO0FBQ2QsY0FBSyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDOUIsZUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztVQUM1QztBQUNELGdCQUFPLElBQUksQ0FBQztRQUNiOztBQUtHLFNBQUk7WUFIQSxZQUFHO0FBQ1QsZ0JBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFDNUI7WUFDTyxVQUFDLENBQUMsRUFBRTs7O0FBQ1YsYUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDckMsYUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzVCLGFBQUksQ0FBQyxPQUFPLENBQUMsVUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFLO0FBQ3BCLGVBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtBQUNqQyxtQkFBSyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JDO1VBQ0YsQ0FBQyxDQUFDO1FBQ0o7O0FBS0csWUFBTztZQUhBLFlBQUc7QUFDWixnQkFBTyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUMvQjtZQUNVLFVBQUMsQ0FBQyxFQUFFOzs7QUFDYixhQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNyQyxhQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDLENBQUM7QUFDekIsYUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFDLENBQUMsRUFBQyxDQUFDLEVBQUs7QUFDcEIsZUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO0FBQ2pDLG1CQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckM7VUFDRixDQUFDLENBQUM7UUFDSjs7OztVQXhQa0IsTUFBTTs7O2tCQUFOLE1BQU0sQzs7Ozs7O0FDMUIzQixhQUFZLENBQUM7Ozs7Ozs7O0tBRU4sSUFBSSx1Q0FBTSxDQUFjOztLQUN4QixLQUFLLHVDQUFNLEVBQVM7O0tBRU4sUUFBUTtBQUVkLFlBRk0sUUFBUSxHQUV1QztTQUFwRCxRQUFRLGdDQUFHLENBQUMsQ0FBQyxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxDQUFDO1NBQUUsSUFBSSxnQ0FBQyxJQUFJO1NBQUUsUUFBUSxnQ0FBQyxLQUFLOzsyQkFGN0MsUUFBUTs7QUFHckIsU0FBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUM7QUFDdkIsU0FBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO0FBQy9CLFdBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7TUFDN0I7QUFDRCxTQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztBQUNsQixTQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQzs7QUFFekIsU0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7O0FBRXRELFNBQUksQ0FBQyxXQUFXLEdBQUc7QUFDakIsV0FBTSxDQUFDO0FBQ1AsYUFBUSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDO0FBQzlCLGNBQVMsRUFBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQztBQUNqQyxlQUFVLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7TUFDdEMsQ0FBQzs7QUFFRixTQUFJLElBQUksQ0FBQyxRQUFRLEtBQUcsS0FBSyxFQUFFO0FBQ3pCLFdBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztNQUM5QixNQUFNO0FBQ0wsV0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO01BQ3hCO0lBR0o7O2dCQTFCZ0IsUUFBUTtBQWdDckIsU0FBSTtZQUpBLFlBQUc7QUFDVCxnQkFBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ25CO1lBRU8sVUFBQyxJQUFJLEVBQUU7QUFDWCxhQUFJLEVBQUUsSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLEtBQUssTUFBTSxJQUFJLElBQUksS0FBSyxRQUFRLElBQUksSUFBSSxLQUFLLE9BQU8sQ0FBQyxFQUFFO0FBQzlFLGtCQUFPLENBQUMsS0FBSyxDQUFDLCtEQUErRCxDQUFDLENBQUM7QUFDL0Usa0JBQU87VUFDVjtBQUNELGFBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0FBQ2xCLGFBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtBQUNqQixlQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7VUFDOUI7UUFDSjs7QUFNRyxVQUFLO1lBSkEsWUFBRztBQUNWLGdCQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ25DO1lBRVEsVUFBQyxDQUFDLEVBQUU7QUFDWCxhQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hDOztBQUVELFVBQUs7Y0FBQSxpQkFBRztBQUNOLGFBQUksSUFBSSxDQUFDLFFBQVEsS0FBRyxLQUFLLEVBQUU7QUFDekIsZUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzdCLGtCQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztVQUNwQjtBQUNELGFBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDN0MsYUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzdCLGdCQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDbkI7O0FBRUQsT0FBRTtjQUFBLGNBQUc7QUFDSCxhQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDaEIsYUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztBQUNwQyxnQkFBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ25COztBQUVELFNBQUk7Y0FBQSxnQkFBRztBQUNMLGFBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUNoQixhQUFJLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxFQUFFO0FBQ3JCLGVBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1VBQzNFO0FBQ0QsZ0JBQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNuQjs7QUFFRCxXQUFNO2NBQUEsa0JBQUc7QUFDUCxhQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDL0MsZ0JBQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNuQjs7QUFFRCxVQUFLO2NBQUEsaUJBQUc7QUFDTixhQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztBQUN4QyxhQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO0FBQ3JDLGFBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUN0QyxnQkFBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ25COzs7Ozs7O0FBQUE7Ozs7VUFyRmdCLFFBQVE7OztrQkFBUixRQUFRLEM7Ozs7OztBQ0w3QixhQUFZLENBQUM7Ozs7Ozs7O0tBRU4sSUFBSSx1Q0FBTSxDQUFjOztLQUVWLEtBQUs7QUFFWCxjQUZNLEtBQUssR0FFc0M7YUFBaEQsR0FBRyxnQ0FBQyxDQUFDO2FBQUUsR0FBRyxnQ0FBQyxDQUFDO2FBQUUsS0FBSyxnQ0FBQyxDQUFDO2FBQUUsU0FBUyxnQ0FBQyxDQUFDO2FBQUUsSUFBSSxnQ0FBQyxLQUFLOzsrQkFGekMsS0FBSzs7QUFHbEIsYUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDZixhQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUNmLGFBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0FBQ25CLGFBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0FBQzNCLGFBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO01BQ3BCOztrQkFSZ0IsS0FBSztBQVV0QixhQUFJO29CQUFBLGdCQUFHO0FBQ0gscUJBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUM3RCxxQkFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUU7QUFDdkIseUJBQUksSUFBSSxDQUFDLElBQUksRUFBRTtBQUNYLDZCQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7c0JBQ3pCLE1BQU07QUFDSCw2QkFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7c0JBQzFDO2tCQUNKOztBQUVELHFCQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRTtBQUN2Qix5QkFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO0FBQ1gsNkJBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztzQkFDekIsTUFBTTtBQUNILDZCQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztzQkFDMUM7a0JBQ0o7QUFDRCx3QkFBTyxJQUFJLENBQUMsS0FBSyxDQUFDO2NBQ3JCOzs7O1lBNUJnQixLQUFLOzs7a0JBQUwsS0FBSyxDOzs7Ozs7QUNKMUIsYUFBWSxDQUFDOzs7Ozs7OztLQUVOLElBQUksdUNBQU0sQ0FBYzs7S0FDeEIsS0FBSyx1Q0FBTSxFQUFTOztLQUVOLE9BQU87QUFFYixjQUZNLE9BQU8sR0FFMkI7YUFBdkMsR0FBRyxnQ0FBQyxDQUFDO2FBQUUsR0FBRyxnQ0FBQyxFQUFFO2FBQUUsSUFBSSxnQ0FBQyxJQUFJO2FBQUUsS0FBSyxnQ0FBQyxLQUFLOzsrQkFGaEMsT0FBTzs7QUFHcEIsYUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDZixhQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUNmLGFBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0FBQ25CLGFBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLGFBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDL0MsYUFBSSxJQUFJLENBQUMsS0FBSyxLQUFHLEtBQUssRUFBRTtBQUN0QixpQkFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1VBQzlCLE1BQU07QUFDTCxpQkFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1VBQ3hCO01BQ0o7O2tCQWJnQixPQUFPO0FBMEJwQixhQUFJO2tCQVhBLFVBQUMsSUFBSSxFQUFFO0FBQ1gscUJBQUksRUFBRSxJQUFJLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxNQUFNLElBQUksSUFBSSxLQUFLLFFBQVEsSUFBSSxJQUFJLEtBQUssT0FBTyxDQUFDLEVBQUU7QUFDOUUsNEJBQU8sQ0FBQyxLQUFLLENBQUMsK0RBQStELENBQUMsQ0FBQztBQUMvRSw0QkFBTztrQkFDVjtBQUNELHFCQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztBQUNsQixxQkFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO0FBQ2QseUJBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztrQkFDOUI7Y0FDSjtrQkFFTyxZQUFHO0FBQ1Asd0JBQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztjQUNyQjs7QUFFRCxjQUFLO29CQUFBLGlCQUFHO0FBQ04scUJBQUksSUFBSSxDQUFDLEtBQUssS0FBRyxLQUFLLEVBQUU7QUFDdEIseUJBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM3Qiw0QkFBTyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7a0JBQ3BCO0FBQ0QscUJBQUksQ0FBQyxXQUFXLEdBQUc7QUFDakIseUJBQU0sSUFBSSxDQUFDLEdBQUc7QUFDZCwyQkFBUSxJQUFJLENBQUMsR0FBRztBQUNoQiw0QkFBUyxFQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7QUFDMUMsNkJBQVUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7a0JBQ3JDLENBQUM7QUFDRixxQkFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMxQyxxQkFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzdCLHdCQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7Y0FDbkI7O0FBRUQsV0FBRTtvQkFBQSxjQUFHO0FBQ0QscUJBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNiLHFCQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRTtBQUN4Qix5QkFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO2tCQUN6QjtBQUNELHdCQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7Y0FDckI7O0FBRUQsYUFBSTtvQkFBQSxnQkFBRztBQUNILHFCQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDYixxQkFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUU7QUFDdkIseUJBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztrQkFDekI7QUFDRCx3QkFBTyxJQUFJLENBQUMsS0FBSyxDQUFDO2NBQ3JCOztBQUVELGVBQU07b0JBQUEsa0JBQUc7QUFDTCxxQkFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3pDLHdCQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7Y0FDckI7O0FBRUQsY0FBSztvQkFBQSxpQkFBRztBQUNKLHFCQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO0FBQzlCLHFCQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO0FBQzlCLHFCQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0FBQ2xDLHFCQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDbkMsd0JBQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztjQUNyQjs7OztZQXpFZ0IsT0FBTzs7O2tCQUFQLE9BQU8sQzs7Ozs7O0FDTDVCLGFBQVksQ0FBQzs7Ozs7Ozs7Ozs7O0FBRWIsS0FBSSxHQUFHLEdBQUcsbUJBQU8sQ0FBQyxDQUFhLENBQUMsQ0FBQztBQUNqQyxLQUFJLElBQUksR0FBRyxtQkFBTyxDQUFDLENBQWMsQ0FBQyxDQUFDO0FBQ25DLEtBQUksU0FBUyxHQUFHLG1CQUFPLENBQUMsQ0FBbUIsQ0FBQyxDQUFDO0FBQzdDLEtBQUksSUFBSSxHQUFHLG1CQUFPLENBQUMsRUFBZ0IsQ0FBQyxDQUFDOztLQUN6QixXQUFXLCtDQUFNLEVBQXFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQXlDN0IsS0FBSztBQUViLFlBRlEsS0FBSyxHQUVWOzJCQUZLLEtBQUs7O0FBSXRCLFNBQUksT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7O0FBRXhCLFNBQUksUUFBUSxHQUFHO0FBQ2IsYUFBUSxDQUFDLEdBQUcsRUFBQyxHQUFHLENBQUM7QUFDakIsY0FBUyxHQUFHO0FBQ1osYUFBUSxVQUFVO0FBQ2xCLGlCQUFZLENBQ1YsQ0FBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLEVBQ1QsQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLEVBQ1gsQ0FBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLEVBQ1QsQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLEVBQ1gsQ0FBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLEVBQ1QsQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLEVBQ1gsQ0FBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLEVBQ1QsQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLENBQ1o7TUFDRixDQUFDOztBQUVGLGdDQXRCaUIsS0FBSyw2Q0FzQmhCLFNBQVMsRUFBQyxPQUFPLEVBQUMsUUFBUSxFQUFFOztBQUVsQyxTQUFJLENBQUMsS0FBSyxHQUFHO0FBQ1gsUUFBQyxFQUFFLElBQUksSUFBSSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEdBQUcsQ0FBQztBQUN0QixRQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsR0FBRyxDQUFDO01BQ3ZCLENBQUM7Ozs7O0FBS0YsU0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQzs7QUFFL0IsU0FBSSxDQUFDLFFBQVEsR0FBRztBQUNkLFFBQUMsRUFBRSxJQUFJLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxZQUFZLEVBQUMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBQyxDQUFDLENBQUMsQ0FBQztBQUNoRixRQUFDLEVBQUUsSUFBSSxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsVUFBVSxFQUFDLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDLENBQUM7TUFDL0UsQ0FBQztBQUNGLFNBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUM7QUFDaEQsU0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQzs7Ozs7QUFLaEQsU0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQzs7Ozs7QUFLdkMsU0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQzs7Ozs7QUFLakMsU0FBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7O0FBRWpCLFNBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7QUFFWixTQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7QUFDdkIsU0FBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBRWY7O2FBN0RrQixLQUFLOztnQkFBTCxLQUFLO0FBK0R4QixtQkFBYztjQUFBLDBCQUFHOztBQUVmLGFBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQzs7QUFHakMsYUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDOzs7QUFJcEMsYUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7O0FBRTFCLGNBQUssSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUUsRUFBRTtBQUN2QyxlQUFJLGNBQWMsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDOztBQUUxQyxlQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQzs7QUFFekMsZUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7VUFDM0M7UUFFRjs7QUFFRCxrQkFBYTtjQUFBLHlCQUFHOztBQUVWLGFBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzs7QUFFdEQsYUFBSSxDQUFDLFVBQVUsR0FBRztBQUNoQixjQUFHLEVBQUUsRUFBQyxFQUFFLElBQUksQ0FBQyxhQUFhLEdBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFDeEMsQ0FBQztBQUNGLGFBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQzs7QUFFN0MsYUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxLQUFLLEdBQUMsQ0FBQyxDQUFDLENBQUM7QUFDMUMsYUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDLENBQUM7QUFDM0MsYUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7O0FBRWhELGNBQUssSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUUsRUFBRTtBQUN2QyxlQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzdDLGVBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDL0IseUJBQWMsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDeEQseUJBQWMsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDekQseUJBQWMsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFDLElBQUksQ0FBQyxhQUFhLEdBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQzNELHlCQUFjLENBQUMsWUFBWSxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsQ0FBQztVQUNsRDs7QUFFSCxhQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3ZELGFBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Ozs7O0FBS3ZELGFBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztBQUN2QixhQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFFakI7O0FBRUQsbUJBQWM7Y0FBQSwwQkFBRzs7QUFFZixhQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7QUFDdEQsYUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7O0FBRXhELGNBQUssSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUUsRUFBRTtBQUN2QyxlQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzdDLHlCQUFjLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3hELHlCQUFjLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1VBQzNEO1FBRUY7O0FBRUQsV0FBTTtjQUFBLGtCQUFHO0FBQ1AsYUFBSSxDQUFDLGVBQWUsR0FBRztBQUNyQixZQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLO0FBQ3ZDLFlBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTTtVQUN2RCxDQUFDOztBQUVGLGFBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3BELGFBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JEOztBQUdELFVBQUs7Y0FBQSxpQkFBRztBQUNOLGFBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0FBQ3BDLGFBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0FBQ3BDLGFBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNiOztBQUVELFNBQUk7Y0FBQSxnQkFBRztBQUNMLGFBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtBQUNoQixlQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ25DLGVBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Ozs7O0FBS25DLGVBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztBQUN2QixlQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDaEMsZUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1VBQ2Y7UUFDRjs7QUFFRCxZQUFPO2NBQUEsbUJBQUc7QUFDUixhQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZjs7QUFFRyxlQUFVO1lBQUEsWUFBRztBQUNmLGdCQUFPO0FBQ0wsWUFBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFVBQVU7QUFDMUIsWUFBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFVBQVU7VUFDM0IsQ0FBQztRQUNIOztBQUVELG9CQUFlO2NBQUEsMkJBQUc7OztBQUNoQixhQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFFLENBQUM7QUFDbkQsYUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBRSxDQUFDO0FBQ25ELGFBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO0FBQ2pCLGFBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBSztBQUM3QixlQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxNQUFLLEtBQUssRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUMsTUFBSyxNQUFNLEVBQUMsTUFBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBQyxNQUFLLEtBQUssRUFBQyxDQUFDLENBQUMsR0FBQyxNQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFFLE1BQUssTUFBTSxDQUFDLENBQUM7QUFDdEksZUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUMsUUFBUSxJQUFFLE1BQUssS0FBSyxHQUFDLE1BQUssS0FBSyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzlELGlCQUFLLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDeEIsaUJBQUssZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUM7VUFDN0QsQ0FBQyxDQUFDO1FBQ0o7O0FBT0QsZUFBVTs7Ozs7Ozs7Y0FBQSxvQkFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFO0FBQ2QsYUFBSSxRQUFRLEdBQUc7QUFDYixZQUFDLEVBQUUsQ0FBQyxHQUFDLElBQUksQ0FBQyxLQUFLO0FBQ2YsWUFBQyxFQUFFLENBQUMsR0FBQyxJQUFJLENBQUMsTUFBTTtVQUNqQixDQUFDO0FBQ0YsYUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2pDLGFBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNqQyxhQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7QUFDdkIsYUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2hDLGFBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNmOztBQVFELGdCQUFXOzs7Ozs7Ozs7Y0FBQSxxQkFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBRTs7QUFFckIsYUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztBQUM3QixhQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM3RCxhQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM5RCxhQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7QUFDdkIsYUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2hDLGFBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUVmOzs7Ozs7Ozs7QUFBQTs7O1VBeE5rQixLQUFLO0lBQVMsU0FBUzs7a0JBQXZCLEtBQUssQzs7Ozs7O0FDL0MxQixhQUFZLENBQUM7Ozs7Ozs7Ozs7QUFFYixLQUFJLElBQUksR0FBRyxtQkFBTyxDQUFDLENBQWMsQ0FBQyxDQUFDO0FBQ25DLEtBQUksR0FBRyxHQUFHLG1CQUFPLENBQUMsQ0FBYSxDQUFDLENBQUM7QUFDakMsS0FBSSxTQUFTLEdBQUcsbUJBQU8sQ0FBQyxDQUFtQixDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0F5QnhCLElBQUk7QUFFWixZQUZRLElBQUksR0FFVDsyQkFGSyxJQUFJOztBQUlyQixTQUFJLE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDOztBQUV4QixTQUFJLFFBQVEsR0FBRztBQUNiLGFBQVEsQ0FBQyxFQUFFLEVBQUMsRUFBRSxDQUFDO01BQ2hCLENBQUM7O0FBRUYsZ0NBVmlCLElBQUksNkNBVWYsU0FBUyxFQUFDLE9BQU8sRUFBQyxRQUFRLEVBQUU7O0FBRWxDLFNBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDOztBQUVwQixTQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7Ozs7QUFJYixTQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDOzs7QUFHMUMsU0FBSSxNQUFNLENBQUMsc0JBQXNCLEVBQUU7QUFDbEMsV0FBSSxDQUFDLG1CQUFtQixHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO01BQ2pHLE1BQU07QUFDSixXQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztBQUNyQixXQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7TUFDdkI7Ozs7Ozs7SUFXRjtBQVhFO2FBMUJnQixJQUFJOztnQkFBSixJQUFJO0FBd0N2QixtQkFBYztjQUFBLDBCQUFHOztBQUVmLGFBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNoQyxhQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDcEMsYUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3BDLGFBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQzs7QUFFcEMsYUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQy9CLGFBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUMvQixhQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7O0FBRS9CLGFBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNoQyxhQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDaEMsYUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDOztBQUVoQyxhQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUMsS0FBSyxDQUFDLENBQUM7QUFDeEMsYUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3hDLGFBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBQyxLQUFLLENBQUMsQ0FBQztBQUN4QyxhQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUMsS0FBSyxDQUFDLENBQUM7QUFDekMsYUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3pDLGFBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBQyxLQUFLLENBQUMsQ0FBQzs7QUFFekMsYUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxLQUFLLEdBQUMsQ0FBQyxHQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ2hELGFBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsTUFBTSxHQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQztBQUNoRCxhQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUMsSUFBSSxDQUFDLE1BQU0sR0FBQyxFQUFFLENBQUMsQ0FBQztBQUM5QyxhQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUMsS0FBSyxDQUFDLENBQUM7O0FBRTNDLGFBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsS0FBSyxHQUFDLENBQUMsR0FBQyxFQUFFLENBQUMsQ0FBQztBQUNoRCxhQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLE1BQU0sR0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUM7QUFDaEQsYUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFDLElBQUksQ0FBQyxNQUFNLEdBQUMsRUFBRSxDQUFDLENBQUM7QUFDOUMsYUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFDLEtBQUssQ0FBQyxDQUFDOztBQUUzQyxhQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLEtBQUssR0FBQyxDQUFDLEdBQUMsRUFBRSxDQUFDLENBQUM7QUFDaEQsYUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxNQUFNLEdBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2hELGFBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBQyxJQUFJLENBQUMsTUFBTSxHQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzlDLGFBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBQyxLQUFLLENBQUMsQ0FBQzs7QUFHM0MsYUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ2xFLGFBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsRUFBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNsRSxhQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7O0FBRWxFLGFBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztBQUN2QyxhQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDdkMsYUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDOztBQUV2QyxhQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxjQUFjLEVBQUMsSUFBSSxDQUFDLEtB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O0FBQ3BELGVBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3BELGVBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3BELGVBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3RELGVBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3RELGVBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3RELGVBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ25ELGVBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ25ELGVBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ25ELGVBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3BELGVBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3BELGVBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3BELGVBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1VBQ25ELE1BQU07QUFDTCxlQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7QUFDdEQsZUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDMUQsZUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDMUQsZUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDMUQsZUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDNUQsZUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDNUQsZUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDNUQsZUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDekQsZUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDekQsZUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDekQsZUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDMUQsZUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDMUQsZUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDMUQsZUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7VUFDekQ7UUFFRjs7QUFFRCxXQUFNO2NBQUEsZ0JBQUMsQ0FBQyxFQUFFO0FBQ1IsYUFBSSxJQUFJLENBQUMsT0FBTyxFQUFDOztBQUVmLGVBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7QUFDZixlQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO0FBQ2hCLGVBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7OztBQUdoQixZQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztBQUM3QixZQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztBQUM3QixZQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7O0FBRzVCLGVBQUksWUFBWSxHQUFHO0FBQ2pCLGtCQUFLLEVBQUUsSUFBSSxDQUFDLEVBQUUsR0FBQyxHQUFHO0FBQ2xCLGdCQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsR0FBRyxFQUFDLElBQUksQ0FBQyxFQUFFLEdBQUMsR0FBRyxFQUFDLElBQUksQ0FBQyxFQUFFLEdBQUMsR0FBRyxDQUFDLEVBQUcsSUFBSSxDQUFDLEVBQUUsR0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEVBQUUsR0FBQyxHQUFHLENBQUU7WUFDekYsQ0FBQztBQUNGLGVBQUksYUFBYSxHQUFHO0FBQ2xCLGtCQUFLLEVBQUUsSUFBSSxDQUFDLEVBQUUsR0FBQyxHQUFHO0FBQ2xCLGdCQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBQyxHQUFHLEVBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxFQUFFLEdBQUMsR0FBRyxFQUFDLElBQUksQ0FBQyxFQUFFLEdBQUMsR0FBRyxDQUFDLEVBQUcsSUFBSSxDQUFDLEVBQUUsR0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEVBQUUsR0FBQyxHQUFHLENBQUU7WUFDekYsQ0FBQzs7QUFFRixlQUFJLFVBQVUsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLFlBQVksQ0FBQyxLQUFLLEVBQUUsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzNKLGVBQUksV0FBVyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFD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UUFBUSxDQUFDLEtBQUssRUFBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFDLEVBQUUsQ0FBQyxHQUFDLENBQUMsQ0FBQztBQUNwRSxTQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7QUFFRixPQUFJLENBQUMsSUFBSSxHQUFHLFVBQVMsQ0FBQyxFQUFDLENBQUMsRUFBRTs7QUFFeEIsU0FBSSxDQUFDLENBQUMsR0FBSSxDQUFDLElBQUksQ0FBQyxLQUFHLENBQUMsR0FBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUNuQyxTQUFJLENBQUMsQ0FBQyxHQUFJLENBQUMsSUFBSSxDQUFDLEtBQUcsQ0FBQyxHQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDOztBQUVuQyxTQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBRSxDQUFDLEVBQUU7O0FBRXhDLFdBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBQyxDQUFDLENBQUM7QUFDcEQsV0FBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFDLENBQUMsQ0FBQzs7QUFFcEQsV0FBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDOUMsV0FBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7O0FBRTlDLFdBQUksSUFBSSxHQUFHLFNBQVMsSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDM0MsV0FBSSxLQUFLLEdBQUcsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FB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LENBQUM7Y0FDWjs7OztZQTNFZ0IsS0FBSzs7O2tCQUFMLEtBQUssQzs7Ozs7O0FDTDFCOztBQUVBO0FBQ0E7Ozs7Ozs7QUNIQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMENBQXlDOztBQUV6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLElBQUc7QUFDSDtBQUNBOztBQUVBLElBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQWtDLGlDQUFpQztBQUNuRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBcUMsZUFBZTtBQUNwRDtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7O0FDek9BO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTs7QUFFQSw0QkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsNkJBQTRCLFVBQVU7Ozs7Ozs7QUN2THRDLGFBQVksQ0FBQzs7Ozs7O0tBRVEsUUFBUTtBQUVoQixZQUZRLFFBQVEsQ0FFZixJQUFJLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBRTsyQkFGUCxRQUFROztBQUl6QixTQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNqQixTQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztBQUNiLFNBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQzs7QUFFekIsU0FBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ25CLFNBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDOztBQUVmLFNBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxZQUFXLEVBQUcsQ0FBQzs7QUFFMUMsU0FBSSxJQUFJLENBQUMsRUFBRSxFQUFFO0FBQ1gsV0FBSSxDQUFDLEtBQUssRUFBRSxDQUFDO01BQ2Q7SUFFRjs7Z0JBakJrQixRQUFRO0FBbUIzQixXQUFNO2NBQUEsZ0JBQUMsQ0FBQyxFQUFFOztBQUVOLGFBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7O0FBRWhCLGFBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNkOztBQUVELFNBQUk7Y0FBQSxnQkFBRztBQUNMLGFBQUksQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDO0FBQ2hCLGFBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdkI7O0FBRUQsVUFBSztjQUFBLGlCQUFHO0FBQ04sYUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUM7QUFDZixhQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7UUFDMUo7O0FBRUQsT0FBRTtjQUFBLFlBQUMsT0FBTyxFQUFFO0FBQ1YsYUFBSSxJQUFJLENBQUMsRUFBRSxFQUFFO0FBQ1gsZUFBSSxLQUFLLEdBQUcsT0FBTyxHQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7QUFDOUIsZUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7QUFDcEIsZUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1VBQ2hGLE1BQU07QUFDTCxlQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztVQUNyQjtRQUNGOzs7O1VBNUNrQixRQUFROzs7a0JBQVIsUUFBUSxDIiwiZmlsZSI6Ii4vZGlzdC9OZXh1c1VJLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiTmV4dXNVSVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJOZXh1c1VJXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDkwYzU1OTAyYjVkNTg4OTllZDQ0IiwiJ3VzZSBzdHJpY3QnO1xuXG5sZXQgTmV4dXNVSSA9IHJlcXVpcmUoJy4vbGliL21haW4nKTtcbmxldCBOZXh1cyA9IG5ldyBOZXh1c1VJKCk7XG5cbmlmICh3aW5kb3cpIHtcbiAgd2luZG93Lk5leHVzID0gTmV4dXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTmV4dXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2pzaGludC1sb2FkZXIhLi9pbmRleC5qcyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IEludGVyZmFjZXMgZnJvbSAnLi9pbnRlcmZhY2VzLyc7XG5pbXBvcnQgbWF0aCBmcm9tICcuL3V0aWwvbWF0aCc7XG5pbXBvcnQgUmFjayBmcm9tICcuL2NvcmUvcmFjayc7XG5pbXBvcnQgVHVuZSBmcm9tICcuL3R1bmluZy90dW5pbmcnO1xuaW1wb3J0ICogYXMgVHJhbnNmb3JtIGZyb20gJy4vdXRpbC90cmFuc2Zvcm0nO1xuXG5sZXQgQ291bnRlciA9IHJlcXVpcmUoJy4vbW9kZWxzL2NvdW50ZXInKTtcbmxldCBSYWRpbyA9IHJlcXVpcmUoJy4vbW9kZWxzL3JhZGlvJyk7XG5sZXQgRHJ1bmsgPSByZXF1aXJlKCcuL21vZGVscy9kcnVuaycpO1xubGV0IFNlcXVlbmNlID0gcmVxdWlyZSgnLi9tb2RlbHMvc2VxdWVuY2UnKTtcbmxldCBNYXRyaXggPSByZXF1aXJlKCcuL21vZGVscy9tYXRyaXgnKTtcblxuaW1wb3J0IFdBQUNsb2NrIGZyb20gJ3dhYWNsb2NrJztcbmltcG9ydCBJbnRlcnZhbCBmcm9tICcuL3RpbWUvaW50ZXJ2YWwnO1xuXG5cbi8qKlxuTmV4dXNVSSA9PiBjcmVhdGVkIGFzIE5leHVzXG4qL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXh1c1VJIHtcblxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcblxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gSW50ZXJmYWNlcykge1xuICAgICAgICAgICAgdGhpc1trZXldID0gSW50ZXJmYWNlc1trZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQga2V5IGluIG1hdGgpIHtcbiAgICAgICAgICAgIHRoaXNba2V5XSA9IG1hdGhba2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBDb3JlID0ge1xuICAgICAgICAgICdSYWNrJzogUmFja1xuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBNb2RlbHMgPSB7XG4gICAgICAgICAgJ0NvdW50ZXInOiBDb3VudGVyLFxuICAgICAgICAgICdSYWRpbyc6IFJhZGlvLFxuICAgICAgICAgICdEcnVuayc6IERydW5rLFxuICAgICAgICAgICdTZXF1ZW5jZSc6IFNlcXVlbmNlLFxuICAgICAgICAgICdNYXRyaXgnOiBNYXRyaXhcbiAgICAgICAgfTtcblxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gTW9kZWxzKSB7XG4gICAgICAgICAgdGhpc1trZXldID0gTW9kZWxzW2tleV07XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gQ29yZSkge1xuICAgICAgICAgIHRoaXNba2V5XSA9IENvcmVba2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBEZWZhdWx0Q29udGV4dCA9IHdpbmRvdy5BdWRpb0NvbnRleHQgfHwgd2luZG93LndlYmtpdEF1ZGlvQ29udGV4dDtcbiAgICAgICAgdGhpcy5fY29udGV4dCA9IGNvbnRleHQgfHwgbmV3IERlZmF1bHRDb250ZXh0KCk7XG5cbiAgICAgICAgdGhpcy50dW5lID0gbmV3IFR1bmUoKTtcbiAgICAgICAgdGhpcy5ub3RlID0gdGhpcy50dW5lLm5vdGUuYmluZCh0aGlzLnR1bmUpO1xuXG4gICAgICAgIHRoaXMuY2xvY2sgPSBuZXcgV0FBQ2xvY2sodGhpcy5fY29udGV4dCk7XG4gICAgICAgIHRoaXMuY2xvY2suc3RhcnQoKTtcbiAgICAgICAgdGhpcy5JbnRlcnZhbCA9IEludGVydmFsO1xuXG4gICAgICAgIHRoaXMuY29sb3JzID0ge1xuICAgICAgICAgIGFjY2VudDogJyMyYmInLFxuICAgICAgICAgIGZpbGw6ICcjZWVlJyxcbiAgICAgICAgICBsaWdodDogJyNmZmYnLFxuICAgICAgICAgIGRhcms6ICcjMzMzJyxcbiAgICAgICAgICBtZWRpdW1MaWdodDogJyNjY2MnLFxuICAgICAgICAgIG1lZGl1bURhcms6ICcjNjY2J1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMudHJhbnNmb3JtID0gVHJhbnNmb3JtO1xuICAgICAgICB0aGlzLmFkZCA9IFRyYW5zZm9ybS5hZGQ7XG5cblxuICAgICAgICB0aGlzLkFkZCA9IHt9O1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gSW50ZXJmYWNlcykge1xuICAgICAgICAgIHRoaXMuQWRkW2tleV0gPSBUcmFuc2Zvcm0uYWRkLmJpbmQodGhpcyxrZXkpO1xuICAgICAgICB9XG5cblxuXG5cbiAgICAgICAgLyogY3JlYXRlIGRlZmF1bHQgY29tcG9uZW50IHNpemUgKi9cbiAgICAgICAgLyoganNoaW50IGlnbm9yZTpzdGFydCAqL1xuICAgICAgICB2YXIgZXhpc3RpbmdTdHlsZXNoZWV0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic3R5bGVcIik7XG4gICAgICAgIHZhciBkZWZhdWx0U2l6ZURlY2xhcmF0aW9uID0gJ1tuZXh1cy11aV17aGVpZ2h0OjUwMDBweDt3aWR0aDo1MDAwcHh9JztcbiAgICAgICAgdmFyIGRlZmF1bHRTdHlsZU5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgICBkZWZhdWx0U3R5bGVOb2RlLnR5cGUgPSAndGV4dC9jc3MnO1xuICAgICAgICBkZWZhdWx0U3R5bGVOb2RlLmlubmVySFRNTCA9IGRlZmF1bHRTaXplRGVjbGFyYXRpb247XG4gICAgICAgIGlmIChleGlzdGluZ1N0eWxlc2hlZXRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICB2YXIgcGFyZW50ID0gZXhpc3RpbmdTdHlsZXNoZWV0c1swXS5wYXJlbnROb2RlXG4gICAgICAgICAgcGFyZW50Lmluc2VydEJlZm9yZSggZGVmYXVsdFN0eWxlTm9kZSwgZXhpc3RpbmdTdHlsZXNoZWV0c1swXSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkb2N1bWVudC53cml0ZSgnPHN0eWxlPicrZGVmYXVsdFNpemVEZWNsYXJhdGlvbisnPFxcL3N0eWxlPicpO1xuICAgICAgICB9XG4gICAgICAgIC8qIGpzaGludCBpZ25vcmU6ZW5kICovXG5cbiAgICB9XG5cbiAgICBnZXQgY29udGV4dCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9jb250ZXh0O1xuICAgIH1cblxuICAgIHNldCBjb250ZXh0KGN0eCkge1xuICAgICAgdGhpcy5jbG9jay5zdG9wKCk7XG4gICAgICB0aGlzLl9jb250ZXh0ID0gY3R4O1xuICAgICAgdGhpcy5jbG9jayA9IG5ldyBXQUFDbG9jayh0aGlzLmNvbnRleHQpO1xuICAgICAgdGhpcy5jbG9jay5zdGFydCgpO1xuICAgIH1cblxuXG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vanNoaW50LWxvYWRlciEuL2xpYi9tYWluLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBQb3NpdGlvbjogcmVxdWlyZSgnLi9wb3NpdGlvbicpLFxuICBTbGlkZXI6IHJlcXVpcmUoJy4vc2xpZGVyJyksXG4gIFRvZ2dsZTogcmVxdWlyZSgnLi90b2dnbGUnKSxcbi8qICBSYW5nZTogcmVxdWlyZSgnLi9yYW5nZXNsaWRlcicpLFxuICBXYXZlZm9ybTogcmVxdWlyZSgnLi93YXZlZm9ybScpLCAqL1xuICBCdXR0b246IHJlcXVpcmUoJy4vYnV0dG9uJyksXG4gIFRleHRCdXR0b246IHJlcXVpcmUoJy4vdGV4dGJ1dHRvbicpLFxuICBSYWRpb0J1dHRvbjogcmVxdWlyZSgnLi9yYWRpb2J1dHRvbicpLFxuICBOdW1iZXI6IHJlcXVpcmUoJy4vbnVtYmVyJyksXG4gIFNlbGVjdDogcmVxdWlyZSgnLi9zZWxlY3QnKSxcbiAgRGlhbDogcmVxdWlyZSgnLi9kaWFsJyksXG4gIFBpYW5vOiByZXF1aXJlKCcuL3BpYW5vJyksXG4gIFNlcXVlbmNlcjogcmVxdWlyZSgnLi9zZXF1ZW5jZXInKSxcbiAgUGFuMkQ6IHJlcXVpcmUoJy4vcGFuMmQnKSxcbiAgVGlsdDogcmVxdWlyZSgnLi90aWx0JyksXG4gIE11bHRpc2xpZGVyOiByZXF1aXJlKCcuL211bHRpc2xpZGVyJyksXG4gIFBhbjogcmVxdWlyZSgnLi9wYW4nKSxcbiAgRW52ZWxvcGU6IHJlcXVpcmUoJy4vZW52ZWxvcGUnKSxcbiAgU3BlY3Ryb2dyYW06IHJlcXVpcmUoJy4vc3BlY3Ryb2dyYW0nKSxcbiAgTWV0ZXI6IHJlcXVpcmUoJy4vbWV0ZXInKSxcbiAgT3NjaWxsb3Njb3BlOiByZXF1aXJlKCcuL29zY2lsbG9zY29wZScpXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9qc2hpbnQtbG9hZGVyIS4vbGliL2ludGVyZmFjZXMvaW5kZXguanMiLCJcbid1c2Ugc3RyaWN0JztcblxubGV0IHN2ZyA9IHJlcXVpcmUoJy4uL3V0aWwvc3ZnJyk7XG5sZXQgSW50ZXJmYWNlID0gcmVxdWlyZSgnLi4vY29yZS9pbnRlcmZhY2UnKTtcbmxldCBTdGVwID0gcmVxdWlyZSgnLi4vbW9kZWxzL3N0ZXAnKTtcbmltcG9ydCAqIGFzIEludGVyYWN0aW9uIGZyb20gJy4uL3V0aWwvaW50ZXJhY3Rpb24nO1xuXG4vKipcbiogUG9zaXRpb25cbipcbiogQGRlc2NyaXB0aW9uIFR3by1kaW1lbnNpb25hbCB0b3VjaCBzbGlkZXIuXG4qXG4qIEBkZW1vIDxzcGFuIG5leHVzLXVpPVwicG9zaXRpb25cIj48L3NwYW4+XG4qXG4qIEBleGFtcGxlXG4qIHZhciBwb3NpdGlvbiA9IG5ldyBOZXh1cy5Qb3NpdGlvbignI3RhcmdldCcpXG4qXG4qIEBleGFtcGxlXG4qIHZhciBwb3NpdGlvbiA9IG5ldyBOZXh1cy5Qb3NpdGlvbignI3RhcmdldCcse1xuKiAgICdzaXplJzogWzIwMCwyMDBdLFxuKiAgICdtb2RlJzogJ2Fic29sdXRlJywgIC8vIFwiYWJzb2x1dGVcIiBvciBcInJlbGF0aXZlXCJcbiogICAneCc6IDAuNSwgIC8vIGluaXRpYWwgeCB2YWx1ZVxuKiAgICdtaW5YJzogMCxcbiogICAnbWF4WCc6IDEsXG4qICAgJ3N0ZXBYJzogMCxcbiogICAneSc6IDAuNSwgIC8vIGluaXRpYWwgeSB2YWx1ZVxuKiAgICdtaW5ZJzogMCxcbiogICAnbWF4WSc6IDEsXG4qICAgJ3N0ZXBZJzogMFxuKiB9KVxuKlxuKiBAb3V0cHV0XG4qIGNoYW5nZVxuKiBGaXJlcyBhbnkgdGltZSB0aGUgaW50ZXJmYWNlJ3MgdmFsdWUgY2hhbmdlcy4gPGJyPlxuKiBUaGUgZXZlbnQgZGF0YSBpcyBhbiBvYmplY3Qgd2l0aCB4IGFuZCB5IHByb3BlcnRpZXMgY29udGFpbmluZyB0aGUgeCBhbmQgeSB2YWx1ZXMgb2YgdGhlIGludGVyZmFjZS5cbipcbiogQG91dHB1dGV4YW1wbGVcbiogcG9zaXRpb24ub24oJ2NoYW5nZScsZnVuY3Rpb24odikge1xuKiAgIGNvbnNvbGUubG9nKHYpO1xuKiB9KVxuKlxuKlxuKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9zaXRpb24gZXh0ZW5kcyBJbnRlcmZhY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgbGV0IG9wdGlvbnMgPSBbJ3ZhbHVlJ107XG5cbiAgICBsZXQgZGVmYXVsdHMgPSB7XG4gICAgICAnc2l6ZSc6IFsyMDAsMjAwXSxcbiAgICAgICdtb2RlJzogJ2Fic29sdXRlJyxcbiAgICAgICdtaW5YJzogMCxcbiAgICAgICdtYXhYJzogMSxcbiAgICAgICdzdGVwWCc6IDAsXG4gICAgICAneCc6IDAuNSxcbiAgICAgICdtaW5ZJzogMCxcbiAgICAgICdtYXhZJzogMSxcbiAgICAgICdzdGVwWSc6IDAsXG4gICAgICAneSc6IDAuNVxuICAgIH07XG5cbiAgICBzdXBlcihhcmd1bWVudHMsb3B0aW9ucyxkZWZhdWx0cyk7XG5cblxuICAgIHRoaXMuX3ggPSBuZXcgU3RlcCggdGhpcy5zZXR0aW5ncy5taW5YLCB0aGlzLnNldHRpbmdzLm1heFgsIHRoaXMuc2V0dGluZ3Muc3RlcFgsIHRoaXMuc2V0dGluZ3MueCApO1xuICAgIHRoaXMuX3kgPSBuZXcgU3RlcCggdGhpcy5zZXR0aW5ncy5taW5ZLCB0aGlzLnNldHRpbmdzLm1heFksIHRoaXMuc2V0dGluZ3Muc3RlcFksIHRoaXMuc2V0dGluZ3MueSApO1xuXG4gICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgIHg6IG5ldyBJbnRlcmFjdGlvbi5IYW5kbGUodGhpcy5zZXR0aW5ncy5tb2RlLCdob3Jpem9udGFsJyxbMCx0aGlzLndpZHRoXSxbdGhpcy5oZWlnaHQsMF0pLFxuICAgICAgeTogbmV3IEludGVyYWN0aW9uLkhhbmRsZSh0aGlzLnNldHRpbmdzLm1vZGUsJ3ZlcnRpY2FsJyxbMCx0aGlzLndpZHRoXSxbdGhpcy5oZWlnaHQsMF0pXG4gICAgfTtcbiAgICB0aGlzLnBvc2l0aW9uLngudmFsdWUgPSB0aGlzLl94Lm5vcm1hbGl6ZWQ7XG4gICAgdGhpcy5wb3NpdGlvbi55LnZhbHVlID0gdGhpcy5feS5ub3JtYWxpemVkO1xuXG4gICAgdGhpcy5pbml0KCk7XG4gICAgdGhpcy5yZW5kZXIoKTtcblxuICB9XG5cbiAgYnVpbGRJbnRlcmZhY2UoKSB7XG5cbiAgICB0aGlzLmtub2IgPSBzdmcuY3JlYXRlKCdjaXJjbGUnKTtcbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5rbm9iKTtcbiAgICBcbiAgfVxuXG4gIHNpemVJbnRlcmZhY2UoKSB7XG5cbiAgICAgIHRoaXMucG9zaXRpb24ueC5yZXNpemUoWzAsdGhpcy53aWR0aF0sW3RoaXMuaGVpZ2h0LDBdKTtcbiAgICAgIHRoaXMucG9zaXRpb24ueS5yZXNpemUoWzAsdGhpcy53aWR0aF0sW3RoaXMuaGVpZ2h0LDBdKTtcblxuICAgICAgdGhpcy5fbWluRGltZW5zaW9uID0gTWF0aC5taW4odGhpcy53aWR0aCx0aGlzLmhlaWdodCk7XG5cbiAgICAgIHRoaXMua25vYlJhZGl1cyA9IHtcbiAgICAgICAgb2ZmOiB+fih0aGlzLl9taW5EaW1lbnNpb24vMTAwKSAqIDUgKyA1LFxuICAgICAgfTtcbiAgICAgIHRoaXMua25vYlJhZGl1cy5vbiA9IHRoaXMua25vYlJhZGl1cy5vZmYgKiAyO1xuXG4gICAgICB0aGlzLmtub2Iuc2V0QXR0cmlidXRlKCdjeCcsdGhpcy53aWR0aC8yKTtcbiAgICAgIHRoaXMua25vYi5zZXRBdHRyaWJ1dGUoJ2N5Jyx0aGlzLmhlaWdodC8yKTtcbiAgICAgIHRoaXMua25vYi5zZXRBdHRyaWJ1dGUoJ3InLHRoaXMua25vYlJhZGl1cy5vZmYpO1xuICB9XG5cbiAgY29sb3JJbnRlcmZhY2UoKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gdGhpcy5jb2xvcnMuZmlsbDtcbiAgICAgIHRoaXMua25vYi5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCB0aGlzLmNvbG9ycy5hY2NlbnQpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLmNsaWNrZWQpIHtcbiAgICAvLyAgdGhpcy5rbm9iUmFkaXVzID0gMzA7XG4gICAgICB0aGlzLmtub2Iuc2V0QXR0cmlidXRlKCdyJyx0aGlzLmtub2JSYWRpdXMub24pO1xuICAgIH0gZWxzZSB7XG4gICAgLy8gIHRoaXMua25vYlJhZGl1cyA9IDE1O1xuICAgICAgdGhpcy5rbm9iLnNldEF0dHJpYnV0ZSgncicsdGhpcy5rbm9iUmFkaXVzLm9mZik7XG4gICAgfVxuXG4gICAgdGhpcy5rbm9iQ29vcmRpbmF0ZXMgPSB7XG4gICAgICB4OiB0aGlzLl94Lm5vcm1hbGl6ZWQgKiB0aGlzLndpZHRoLFxuICAgICAgeTogdGhpcy5oZWlnaHQgLSB0aGlzLl95Lm5vcm1hbGl6ZWQgKiB0aGlzLmhlaWdodFxuICAgIH07XG5cbiAgICB0aGlzLmtub2Iuc2V0QXR0cmlidXRlKCdjeCcsdGhpcy5rbm9iQ29vcmRpbmF0ZXMueCk7XG4gICAgdGhpcy5rbm9iLnNldEF0dHJpYnV0ZSgnY3knLHRoaXMua25vYkNvb3JkaW5hdGVzLnkpO1xuICB9XG5cblxuICBjbGljaygpIHtcbiAgICB0aGlzLnBvc2l0aW9uLnguYW5jaG9yID0gdGhpcy5tb3VzZTtcbiAgICB0aGlzLnBvc2l0aW9uLnkuYW5jaG9yID0gdGhpcy5tb3VzZTtcbiAgICB0aGlzLm1vdmUoKTtcbiAgfVxuXG4gIG1vdmUoKSB7XG4gICAgaWYgKHRoaXMuY2xpY2tlZCkge1xuICAgICAgdGhpcy5wb3NpdGlvbi54LnVwZGF0ZSh0aGlzLm1vdXNlKTtcbiAgICAgIHRoaXMucG9zaXRpb24ueS51cGRhdGUodGhpcy5tb3VzZSk7XG4gICAgICB0aGlzLl94LnVwZGF0ZU5vcm1hbCggdGhpcy5wb3NpdGlvbi54LnZhbHVlICk7XG4gICAgICB0aGlzLl95LnVwZGF0ZU5vcm1hbCggdGhpcy5wb3NpdGlvbi55LnZhbHVlICk7XG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZScse1xuICAgICAgICB4OiB0aGlzLl94LnZhbHVlLFxuICAgICAgICB5OiB0aGlzLl95LnZhbHVlXG4gICAgICB9KTtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgcmVsZWFzZSgpIHtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgLyoqXG4gICogVGhlIGludGVyZmFjZSdzIHggdmFsdWUuIFdoZW4gc2V0LCBpdCB3aWxsIGF1dG9tYXRpY2FsbHkgYWRqdXN0IHRvIGZpdCBtaW4vbWF4L3N0ZXAgc2V0dGluZ3Mgb2YgdGhlIGludGVyZmFjZS5cbiAgKiBAdHlwZSB7b2JqZWN0fVxuICAqIEBleGFtcGxlIHBvc2l0aW9uLnggPSAwLjU7XG4gICovXG5cbiAgZ2V0IHgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3gudmFsdWU7XG4gIH1cblxuICBzZXQgeCh2YWx1ZSkge1xuICAgIHRoaXMuX3gudXBkYXRlKHZhbHVlKTtcbiAgICB0aGlzLmVtaXQoJ2NoYW5nZScse1xuICAgICAgeDogdGhpcy5feC52YWx1ZSxcbiAgICAgIHk6IHRoaXMuX3kudmFsdWVcbiAgICB9KTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgLyoqXG4gICogVGhlIGludGVyZmFjZSdzIHkgdmFsdWVzLiBXaGVuIHNldCwgaXQgd2lsbCBhdXRvbWF0aWNhbGx5IGFkanVzdCB0byBmaXQgbWluL21heC9zdGVwIHNldHRpbmdzIG9mIHRoZSBpbnRlcmZhY2UuXG4gICogQHR5cGUge29iamVjdH1cbiAgKiBAZXhhbXBsZSBwb3NpdGlvbi54ID0gMC41O1xuICAqL1xuXG4gIGdldCB5KCkge1xuICAgIHJldHVybiB0aGlzLl95LnZhbHVlO1xuICB9XG5cbiAgc2V0IHkodmFsdWUpIHtcbiAgICB0aGlzLl95LnVwZGF0ZSh2YWx1ZSk7XG4gICAgdGhpcy5lbWl0KCdjaGFuZ2UnLHtcbiAgICAgIHg6IHRoaXMuX3gudmFsdWUsXG4gICAgICB5OiB0aGlzLl95LnZhbHVlXG4gICAgfSk7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG5cblxuICBnZXQgbm9ybWFsaXplZCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgeDogdGhpcy5feC5ub3JtYWxpemVkLFxuICAgICAgeTogdGhpcy5feS5ub3JtYWxpemVkXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAqIFRoZSBsb3dlciBsaW1pdCBvZiB2YWx1ZSBvbiB0aGUgeCBheGlzXG4gICogQHR5cGUge29iamVjdH1cbiAgKi9cbiAgZ2V0IG1pblgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3gubWluO1xuICB9XG5cbiAgc2V0IG1pblgodikge1xuICAgIHRoaXMuX3gubWluID0gdjtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgLyoqXG4gICogVGhlIGxvd2VyIGxpbWl0IG9mIHZhbHVlIG9uIHRoZSB5IGF4aXNcbiAgKiBAdHlwZSB7b2JqZWN0fVxuICAqL1xuICBnZXQgbWluWSgpIHtcbiAgICByZXR1cm4gdGhpcy5feS5taW47XG4gIH1cblxuICBzZXQgbWluWSh2KSB7XG4gICAgdGhpcy5feS5taW4gPSB2O1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuXG4gIC8qKlxuICAqIFRoZSB1cHBlciBsaW1pdCBvZiB2YWx1ZSBvbiB0aGUgeCBheGlzXG4gICogQHR5cGUge29iamVjdH1cbiAgKi9cbiAgZ2V0IG1heFgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3gubWF4O1xuICB9XG5cbiAgc2V0IG1heFgodikge1xuICAgIHRoaXMuX3gubWF4ID0gdjtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cblxuICAvKipcbiAgKiBUaGUgdXBwZXIgbGltaXQgb2YgdmFsdWUgb24gdGhlIHkgYXhpc1xuICAqIEB0eXBlIHtvYmplY3R9XG4gICovXG4gIGdldCBtYXhZKCkge1xuICAgIHJldHVybiB0aGlzLl95Lm1heDtcbiAgfVxuXG4gIHNldCBtYXhZKHYpIHtcbiAgICB0aGlzLl95Lm1heCA9IHY7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG5cbiAgLyoqXG4gICogVGhlIGluY3JlbWVudGFsIHN0ZXAgb2YgdmFsdWVzIG9uIHRoZSB4IGF4aXNcbiAgKiBAdHlwZSB7b2JqZWN0fVxuICAqL1xuICBnZXQgc3RlcFgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3guc3RlcDtcbiAgfVxuXG4gIHNldCBzdGVwWCh2KSB7XG4gICAgdGhpcy5feC5zdGVwID0gdjtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cblxuICAvKipcbiAgKiBUaGUgaW5jcmVtZW50YWwgc3RlcCBvZiB2YWx1ZXMgb24gdGhlIHkgYXhpc1xuICAqIEB0eXBlIHtvYmplY3R9XG4gICovXG4gIGdldCBzdGVwWSgpIHtcbiAgICByZXR1cm4gdGhpcy5feS5zdGVwO1xuICB9XG5cbiAgc2V0IHN0ZXBZKHYpIHtcbiAgICB0aGlzLl95LnN0ZXAgPSB2O1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuXG4gIC8qKlxuICBBYnNvbHV0ZSBtb2RlIChwb3NpdGlvbidzIHZhbHVlIGp1bXBzIHRvIG1vdXNlIGNsaWNrIHBvc2l0aW9uKSBvciByZWxhdGl2ZSBtb2RlIChtb3VzZSBkcmFnIGNoYW5nZXMgdmFsdWUgcmVsYXRpdmUgdG8gaXRzIGN1cnJlbnQgcG9zaXRpb24pLiBEZWZhdWx0OiBcImFic29sdXRlXCIuXG4gIEB0eXBlIHtzdHJpbmd9XG4gIEBleGFtcGxlIHBvc2l0aW9uLm1vZGUgPSBcInJlbGF0aXZlXCI7XG4gICovXG4gIGdldCBtb2RlKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLngubW9kZTtcbiAgfVxuICBzZXQgbW9kZSh2KSB7XG4gICAgdGhpcy5wb3NpdGlvbi54Lm1vZGUgPSB2O1xuICAgIHRoaXMucG9zaXRpb24ueS5tb2RlID0gdjtcbiAgfVxuXG5cblxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2pzaGludC1sb2FkZXIhLi9saWIvaW50ZXJmYWNlcy9wb3NpdGlvbi5qcyIsIid1c2Ugc3RyaWN0JztcblxubGV0IG1hdGggPSByZXF1aXJlKCcuLi91dGlsL21hdGgnKTtcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gIGNyZWF0ZTogKHR5cGUpID0+IHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsIHR5cGUpO1xuICB9LFxuXG4gIGFyYzogKHgsIHksIHJhZGl1cywgc3RhcnRBbmdsZSwgZW5kQW5nbGUpID0+IHtcblxuICAgIHZhciBzdGFydCA9IG1hdGgudG9DYXJ0ZXNpYW4ocmFkaXVzLCBlbmRBbmdsZSk7XG4gICAgdmFyIGVuZCA9IG1hdGgudG9DYXJ0ZXNpYW4ocmFkaXVzLCBzdGFydEFuZ2xlKTtcblxuICAgIHZhciBsYXJnZUFyY0ZsYWcgPSBlbmRBbmdsZSAtIHN0YXJ0QW5nbGUgPD0gMTgwID8gJzAnIDogJzEnO1xuXG4gICAgdmFyIGQgPSBbXG4gICAgICAgICdNJywgc3RhcnQueCt4LCBzdGFydC55K3ksXG4gICAgICAgICdBJywgcmFkaXVzLCByYWRpdXMsIDAsIGxhcmdlQXJjRmxhZywgMCwgZW5kLngreCwgZW5kLnkreVxuICAgIF0uam9pbignICcpO1xuXG4gICAgcmV0dXJuIGQ7XG4gIH0sXG5cbiAgcmFkaWFsR3JhZGllbnQ6IChkZWZzLG51bWJlck9mU3RvcHMpID0+IHtcblxuICAgIGxldCBpZCA9ICdncmFkaWVudCcgKyBtYXRoLnJpKDEwMDAwMDAwMDAwMCk7XG4gICAgbGV0IHN0b3BzID0gW107XG5cbiAgICBsZXQgZ3JhZGllbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3JhZGlhbEdyYWRpZW50Jyk7XG4gICAgZ3JhZGllbnQuc2V0QXR0cmlidXRlKCdpZCcsIGlkKTtcbiAgICBncmFkaWVudC5zZXRBdHRyaWJ1dGUoJ2N4JywgJzUwJScpO1xuICAgIGdyYWRpZW50LnNldEF0dHJpYnV0ZSgnY3knLCAnNTAlJyk7XG4gICAgZ3JhZGllbnQuc2V0QXR0cmlidXRlKCdyJywgJzUwJScpO1xuXG4gICAgZGVmcy5hcHBlbmRDaGlsZChncmFkaWVudCk7XG5cbiAgICBmb3IgKGxldCBpPTA7aTxudW1iZXJPZlN0b3BzO2krKykge1xuICAgICAgbGV0IHN0b3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N0b3AnKTtcbiAgICAgIHN0b3Auc2V0QXR0cmlidXRlKCdpZCcsICdzdG9wJytpKTtcbiAgICAgIC8vc3RvcC5zZXRBdHRyaWJ1dGUoJ29mZnNldCcsICc3MCUnKTtcbiAgICAgIC8vc3RvcC5zZXRBdHRyaWJ1dGUoJ3N0b3AtY29sb3InLCAnV2hpdGUnKTtcbiAgICAgIGdyYWRpZW50LmFwcGVuZENoaWxkKHN0b3ApO1xuICAgICAgc3RvcHMucHVzaChzdG9wKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IGlkLFxuICAgICAgc3RvcHM6IHN0b3BzLFxuICAgICAgZWxlbWVudDogZ3JhZGllbnRcbiAgICB9O1xuXG4gIH1cblxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vanNoaW50LWxvYWRlciEuL2xpYi91dGlsL3N2Zy5qcyIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBMaW1pdCBhIG51bWJlciB0byB3aXRoaW4gYSBtaW5pbXVtIGFuZCBtYXhpbXVtXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHZhbHVlIElucHV0IHZhbHVlXG4gKiBAcGFyYW0gIHtudW1iZXJ9IG1pbiAgIExvd2VyIGxpbWl0XG4gKiBAcGFyYW0gIHtudW1iZXJ9IG1heCAgIFVwcGVyIGxpbWl0XG4gKiBAcmV0dXJuIHtudW1iZXJ9ICAgICAgIFRoZSBpbnB1dCB2YWx1ZSBjb25zdHJhaW5lZCB3aXRoaW4gdGhlIGxvd2VyIGFuZCB1cHBlciBsaW1pdHNcbiAqIEBleGFtcGxlXG4gKiBOZXh1cy5jbGlwKDExLDAsMTApICAgLy8gcmV0dXJucyAxMFxuICogTmV4dXMuY2xpcCgtMSwwLDEwKSAgIC8vIHJldHVybnMgMFxuICogTmV4dXMuY2xpcCg1LDAsMTApICAgIC8vIHJldHVybnMgNVxuICovXG5cbmV4cG9ydHMuY2xpcCA9ICh2YWx1ZSxtaW4sbWF4KSA9PiB7XG4gIHJldHVybiBNYXRoLm1pbihNYXRoLm1heCh2YWx1ZSxtaW4pLG1heCk7XG59O1xuXG5leHBvcnRzLm5vcm1hbGl6ZSA9ICh2YWx1ZSxtaW4sbWF4KSA9PiB7XG4gIHJldHVybiAoICh2YWx1ZS1taW4pIC8gKG1heC1taW4pICk7XG59O1xuXG4vKipcbiAqIFNjYWxlIGEgdmFsdWUgZnJvbSBvbmUgcmFuZ2UgdG8gYW5vdGhlciByYW5nZS5cbiAqIEBwYXJhbSAge251bWJlcn0gaW5OdW0gIElucHV0IHZhbHVlXG4gKiBAcGFyYW0gIHtudW1iZXJ9IGluTWluICBJbnB1dCByYW5nZSBtaW5pbXVtXG4gKiBAcGFyYW0gIHtudW1iZXJ9IGluTWF4ICBJbnB1dCByYW5nZSBtYXhpbXVtXG4gKiBAcGFyYW0gIHtudW1iZXJ9IG91dE1pbiBPdXRwdXQgcmFuZ2UgbWluaW11bVxuICogQHBhcmFtICB7bnVtYmVyfSBvdXRNYXggT3V0cHV0IHJhbmdlIG1heGltdW1cbiAqIEByZXR1cm4ge251bWJlcn0gICAgICAgIFRoZSBpbnB1dCB2YWx1ZSBzY2FsZWQgdG8gaXRzIG5ldyByYW5nZVxuICogQGV4YW1wbGVcbiAqIE5leHVzLnNjYWxlKDAuNSwwLDEsMCwxMCkgICAvLyByZXR1cm5zIDVcbiAqIE5leHVzLnNjYWxlKDAuOSwwLDEsMSwwKSAgICAvLyByZXR1cm5zIDAuMVxuICovXG5leHBvcnRzLnNjYWxlID0gKGluTnVtLCBpbk1pbiwgaW5NYXgsIG91dE1pbiwgb3V0TWF4KSA9PiB7XG4gIGlmIChpbk1pbiA9PT0gaW5NYXgpIHtcbiAgICByZXR1cm4gb3V0TWluO1xuICB9XG4gIHJldHVybiAoKChpbk51bSAtIGluTWluKSAqIChvdXRNYXggLSBvdXRNaW4pKSAvIChpbk1heCAtIGluTWluKSkgKyBvdXRNaW47XG59O1xuXG5leHBvcnRzLnRvUG9sYXIgPSAoeCx5KSA9PiB7XG4gIHZhciByID0gTWF0aC5zcXJ0KHgqeCArIHkqeSk7XG5cbiAgdmFyIHRoZXRhID0gTWF0aC5hdGFuMih5LHgpO1xuICBpZiAodGhldGEgPCAwKSB7XG4gICAgdGhldGEgPSB0aGV0YSArICgyICogTWF0aC5QSSk7XG4gIH1cbiAgcmV0dXJuIHtyYWRpdXM6IHIsIGFuZ2xlOiB0aGV0YX07XG59O1xuXG5leHBvcnRzLnRvQ2FydGVzaWFuID0gZnVuY3Rpb24ocmFkaXVzLCBhbmdsZSl7XG4gIHZhciBjb3MgPSBNYXRoLmNvcyhhbmdsZSk7XG4gIHZhciBzaW4gPSBNYXRoLnNpbihhbmdsZSk7XG4gIHJldHVybiB7eDogcmFkaXVzKmNvcywgeTogcmFkaXVzKnNpbiotMX07XG59O1xuLypcbmV4cG9ydHMucG9sYXJUb0NhcnRlc2lhbihjZW50ZXJYLCBjZW50ZXJZLCByYWRpdXMsIGFuZ2xlSW5EZWdyZWVzKSB7XG4gIHZhciBhbmdsZUluUmFkaWFucyA9IChhbmdsZUluRGVncmVlcy05MCkgKiBNYXRoLlBJIC8gMTgwLjA7XG5cbiAgcmV0dXJuIHtcbiAgICB4OiBjZW50ZXJYICsgKHJhZGl1cyAqIE1hdGguY29zKGFuZ2xlSW5SYWRpYW5zKSksXG4gICAgeTogY2VudGVyWSArIChyYWRpdXMgKiBNYXRoLnNpbihhbmdsZUluUmFkaWFucykpXG4gIH07XG59ICAqL1xuXG5cblxuZXhwb3J0cy5wcnVuZSA9IGZ1bmN0aW9uKGRhdGEsIHNjYWxlKSB7XG4gIHJldHVybiBwYXJzZUZsb2F0KGRhdGEudG9GaXhlZChzY2FsZSkpO1xufTtcblxuZXhwb3J0cy5pbnZlcnQgPSBmdW5jdGlvbiAoaW5OdW0pIHtcbiAgcmV0dXJuIGV4cG9ydHMuc2NhbGUoaW5OdW0sIDEsIDAsIDAsIDEpO1xufTtcblxuLyoqXG4gKiBDb252ZXJ0IGEgTUlEaSBub3RlIG51bWJlciB0byBhIGZyZXF1ZW5jeSB2YWx1ZSBpbiBlcXVhbCB0ZW1wZXJhbWVudC5cbiAqIEBwYXJhbSAge251bWJlcn0gbWlkaSBNSURJIG5vdGUgdmFsdWVcbiAqIEByZXR1cm4ge251bWJlcn0gICAgICBGcmVxdWVuY2UgdmFsdWVcbiAqIEBleGFtcGxlXG4gKiBOZXh1cy5tdG9mKDYwKSAgLy8gcmV0dXJucyB0aGUgZnJlcXVlbmN5IG51bWJlciBvZiBNaWRkbGUgQ1xuICovXG5leHBvcnRzLm10b2YgPSBmdW5jdGlvbihtaWRpKSB7XG4gIHJldHVybiBNYXRoLnBvdygyLCAoKG1pZGktNjkpLzEyKSkgKiA0NDA7XG59O1xuXG4vKipcbiAqIEludGVycG9sYXRlIGJldHdlZW4gdHdvIG51bWJlcnNcbiAqIEBwYXJhbSAge251bWJlcn0gbG9jIEludGVycG9sYXRpb24gaW5kZXggKDAtMSlcbiAqIEBwYXJhbSAge251bWJlcn0gbWluIExvd2VyIHZhbHVlXG4gKiBAcGFyYW0gIHtudW1iZXJ9IG1heCBVcHBlciB2YWx1ZVxuICogQHJldHVybiB7bnVtYmVyfSAgICAgSW50ZXJwb2xhdGVkIHZhbHVlXG4gKiBAZXhhbXBsZVxuICogTmV4dXMuaW50ZXJwKDAuNSwyLDQpICAgLy8gcmV0dXJucyAzXG4gKiBOZXh1cy5pbnRlcnAoMC4xLDAsMTApICAgICAvLyByZXR1cm5zIDFcbiAqL1xuZXhwb3J0cy5pbnRlcnAgPSBmdW5jdGlvbihsb2MsbWluLG1heCkge1xuICByZXR1cm4gbG9jICogKG1heCAtIG1pbikgKyBtaW47XG59O1xuXG4vKipcbiAqIFJldHVybiBhIHJhbmRvbSBjaG9pY2UgZnJvbSBhIGxpc3Qgb2YgYXJndW1lbnRzXG4gKiBAcmV0dXJuIHt2YXJpb3VzfSBPbmUgcmFuZG9tIGFyZ3VtZW50XG4gKiBAZXhhbXBsZVxuICogTmV4dXMucGljaygxLDIsMyw0KSAgIC8vIHJldHVybnMgMSwgMiwgMywgb3IgNFxuICogTmV4dXMucGljayhmdW5jdGlvbjEsZnVuY3Rpb24yKSAgIC8vIHJldHVybnMgZWl0aGVyIGZ1bmN0aW9uMSBvciBmdW5jdGlvbjJcbiAqL1xuZXhwb3J0cy5waWNrID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBhcmd1bWVudHNbfn4oTWF0aC5yYW5kb20oKSphcmd1bWVudHMubGVuZ3RoKV07XG59O1xuXG4vKipcbiAqIFJldHVybnMgYW4gb2N0YXZlIG11bHRpcGxpZXIgZm9yIGZyZXF1ZW5jeSB2YWx1ZXNcbiAqIEBwYXJhbSAge251bWJlcn0gbnVtIFJlbGF0aXZlIG9jdGF2ZSBudW1iZXIgKGUuZy4gLTEgZm9yIG9uZSBvY3RhdmUgZG93biwgMSBmb3Igb25lIG9jdGF2ZSB1cClcbiAqIEByZXR1cm4ge251bWJlcn0gICAgIE9jdGF2ZSBtdWx0aXBsaWVyXG4gKiBAZXhhbXBsZVxuICogTmV4dXMub2N0YXZlKC0xKSAgLy8gcmV0dXJucyAwLjVcbiAqIE5leHVzLm9jdGF2ZSgwKSAgIC8vIHJldHVybnMgMVxuICogTmV4dXMub2N0YXZlKDEpICAgLy8gcmV0dXJucyAyXG4gKiBOZXh1cy5vY3RhdmUoMikgICAvLyByZXR1cm5zIDRcbiAqL1xuZXhwb3J0cy5vY3RhdmUgPSBmdW5jdGlvbihudW0pIHtcbiAgcmV0dXJuIE1hdGgucG93KDIsbnVtKTtcbn07XG5cbi8qKlxuICogUmFuZG9tIGludGVnZXIgZ2VuZXJhdG9yLiBJZiBubyBzZWNvbmQgYXJndW1lbnQgaXMgZ2l2ZW4sIHdpbGwgcmV0dXJuIHJhbmRvbSBpbnRlZ2VyIGZyb20gMCB0byBib3VuZDEuXG4gKiBAcGFyYW0gIHtudW1iZXJ9IGJvdW5kMSBNaW5pbXVtIHJhbmRvbSB2YWx1ZVxuICogQHBhcmFtICB7bnVtYmVyfSBib3VuZDIgTWF4aW11bSByYW5kb20gdmFsdWVcbiAqIEByZXR1cm4ge251bWJlcn0gICAgICAgIFJhbmRvbSBpbnRlZ2VyIGJldHdlZW4gbG93ZXIgYW5kIHVwcGVyIGJvdW5kYXJ5XG4gKiBAZXhhbXBsZVxuICogTmV4dXMucmkoMTApICAgIC8vIHJldHVybnMgcmFuZG9tIGludCBmcm9tIDAgdG8gMTBcbiAqIE5leHVzLnJpKDIwLDIwMDApIC8vIHJldHVybnMgcmFuZG9tIGludCBmcm9tIDIwIHRvIDIwMDBcbiAqL1xuZXhwb3J0cy5yaSA9IGZ1bmN0aW9uKGJvdW5kMSxib3VuZDIpIHtcbiAgaWYgKCFib3VuZDIpIHtcbiAgICBib3VuZDIgPSBib3VuZDE7XG4gICAgYm91bmQxID0gMDtcbiAgfVxuICB2YXIgbG93ID0gTWF0aC5taW4oYm91bmQxLGJvdW5kMik7XG4gIHZhciBoaWdoID0gTWF0aC5tYXgoYm91bmQxLGJvdW5kMik7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqKGhpZ2gtbG93KStsb3cpO1xufTtcblxuLyoqXG4gKiBSYW5kb20gZmxvYXQgbnVtYmVyIGdlbmVyYXRvci4gSWYgbm8gc2Vjb25kIGFyZ3VtZW50IGlzIGdpdmVuLCB3aWxsIHJldHVybiByYW5kb20gZmxvYXQgZnJvbSAwIHRvIGJvdW5kMS5cbiAqIEBwYXJhbSAge251bWJlcn0gYm91bmQxIE1pbmltdW0gcmFuZG9tIHZhbHVlXG4gKiBAcGFyYW0gIHtudW1iZXJ9IGJvdW5kMiBNYXhpbXVtIHJhbmRvbSB2YWx1ZVxuICogQHJldHVybiB7bnVtYmVyfSAgICAgICAgUmFuZG9tIGZsb2F0IGJldHdlZW4gbG93ZXIgYW5kIHVwcGVyIGJvdW5kYXJ5XG4gKiBAZXhhbXBsZVxuICogTmV4dXMucmYoMSkgICAgLy8gcmV0dXJucyByYW5kb20gZmxvYXQgZnJvbSAwIHRvIDFcbiAqIE5leHVzLnJmKDEsMikgLy8gcmV0dXJucyByYW5kb20gZmxvYXQgZnJvbSAxIHRvIDJcbiAqL1xuZXhwb3J0cy5yZiA9IGZ1bmN0aW9uKGJvdW5kMSxib3VuZDIpIHtcbiAgaWYgKCFib3VuZDIpIHtcbiAgICBib3VuZDIgPSBib3VuZDE7XG4gICAgYm91bmQxID0gMDtcbiAgfVxuICB2YXIgbG93ID0gTWF0aC5taW4oYm91bmQxLGJvdW5kMik7XG4gIHZhciBoaWdoID0gTWF0aC5tYXgoYm91bmQxLGJvdW5kMik7XG4gIHJldHVybiBNYXRoLnJhbmRvbSgpKihoaWdoLWxvdykrbG93O1xufTtcblxuXG5leHBvcnRzLmN5Y2xlID0gZnVuY3Rpb24oaW5wdXQsbWluLG1heCkge1xuICBpbnB1dCsrO1xuICBpZiAoaW5wdXQgPj0gbWF4KSB7XG4gICAgaW5wdXQgPSBtaW47XG4gIH1cbiAgcmV0dXJuIGlucHV0O1xufTtcblxuLyoqXG4gKiBBdmVyYWdlIGFuIGFycmF5IG9mIG51bWJlcnNcbiAqIEBwYXJhbSAge0FycmF5fSBkYXRhIEFycmF5IG9mIG51bWJlcnMgdG8gYXZlcmFnZVxuICogQHJldHVybiB7bnVtYmVyfSAgICAgIEF2ZXJhZ2Ugb2YgdGhlIGlucHV0IGRhdGFcbiAqIEBleGFtcGxlXG4gKiBOZXh1cy5hdmVyYWdlKFswLDIsNCw2LDgsMTBdKSAgIC8vIHJldHVybnMgNVxuICovXG5leHBvcnRzLmF2ZXJhZ2UgPSBmdW5jdGlvbihkYXRhKSB7XG4gIGxldCB0b3RhbCA9IDA7XG4gIGZvciAodmFyIGk9MDtpPGRhdGEubGVuZ3RoO2krKykge1xuICAgIHRvdGFsICs9IGRhdGFbaV07XG4gIH1cbiAgcmV0dXJuIHRvdGFsIC8gZGF0YS5sZW5ndGg7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgZGlzdGFuY2UgZnJvbSBvbmUgKHgseSkgcG9pbnQgdG8gYW5vdGhlciAoeCx5KSBwb2ludFxuICogQHBhcmFtICB7bnVtYmVyfSB4MSB4IG9mIGZpcnN0IHBvaW50XG4gKiBAcGFyYW0gIHtudW1iZXJ9IHkxIHkgb2YgZmlyc3QgcG9pbnRcbiAqIEBwYXJhbSAge251bWJlcn0geDIgeCBvZiBzZWNvbmQgcG9pbnRcbiAqIEBwYXJhbSAge251bWJlcn0geTIgeSBvZiBzZWNvbmQgcG9pbnlcbiAqIEByZXR1cm4ge251bWJlcn0gICAgRGlzdGFuY2VcbiAqIEBleGFtcGxlXG4gKiBOZXh1cy5kaXN0YW5jZSgwLDAsMyw0KSAgIC8vIHJldHVybnMgNVxuICovXG5leHBvcnRzLmRpc3RhbmNlID0gZnVuY3Rpb24oeDEseTEseDIseTIpIHtcbiAgbGV0IGEgPSB4MSAtIHgyO1xuICBsZXQgYiA9IHkxIC0geTI7XG4gIHJldHVybiBNYXRoLnNxcnQoIGEqYSArIGIqYiApO1xufTtcblxuZXhwb3J0cy5nYWluVG9EQiA9IGZ1bmN0aW9uKGdhaW4pIHtcbiAgcmV0dXJuIDIwICogTWF0aC5sb2cxMChnYWluKTtcbn07XG5cbi8qKlxuICogRmxpcCBhIGNvaW4sIHJldHVybmluZyBlaXRoZXIgMCBvciAxIGFjY29yZGluZyB0byBhIHByb2JhYmlsaXR5XG4gKiBAcGFyYW0gIHtudW1iZXJ9IFtvZGRzPTAuNV0gTGlrZWxpaG9vZCBvZiByZXR1cm5pbmcgMVxuICogQHJldHVybiB7bnVtYmVyfSAgICAgICAgICAgIDEgb3IgMFxuICogQGV4YW1wbGVcbiAqIE5leHVzLmNvaW4oMC4xKSAgIC8vIHJldHVybnMgMSAoMTAlIG9mIHRoZSB0aW1lKSBvciAwICg5MCUgb2YgdGhlIHRpbWUpXG4gKi9cbmV4cG9ydHMuY29pbiA9IGZ1bmN0aW9uKG9kZHM9MC41KSB7XG4gIGlmIChleHBvcnRzLnJmKDAsMSkgPCBvZGRzKSB7XG4gICAgcmV0dXJuIDE7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2pzaGludC1sb2FkZXIhLi9saWIvdXRpbC9tYXRoLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5sZXQgc3ZnID0gcmVxdWlyZSgnLi4vdXRpbC9zdmcnKTtcbmxldCBkb20gPSByZXF1aXJlKCcuLi91dGlsL2RvbScpO1xubGV0IHV0aWwgPSByZXF1aXJlKCcuLi91dGlsL3V0aWwnKTtcbmxldCB0b3VjaCA9IHJlcXVpcmUoJy4uL3V0aWwvdG91Y2gnKTtcbmNvbnN0IEV2ZW50RW1pdHRlciA9IHJlcXVpcmUoJ2V2ZW50cycpO1xuXG4vKipcbkludGVyZmFjZVxuKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEludGVyZmFjZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG5cbiAgY29uc3RydWN0b3IoYXJncyxvcHRpb25zLGRlZmF1bHRzKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnR5cGUgPSB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgdGhpcy5zZXR0aW5ncyA9IHRoaXMucGFyc2VTZXR0aW5ncyhhcmdzLG9wdGlvbnMsZGVmYXVsdHMpO1xuICAgIHRoaXMubW91c2UgPSB7fTtcbiAgICB0aGlzLndhaXQgPSBmYWxzZTtcbiAgICB0aGlzLmNvbG9ycyA9IHt9O1xuICAgIGxldCBkZWZhdWx0Q29sb3JzID0gTmV4dXMuY29sb3JzOyAvLyBqc2hpbnQgaWdub3JlOmxpbmVcbiAgICB0aGlzLmNvbG9ycy5hY2NlbnQgPSBkZWZhdWx0Q29sb3JzLmFjY2VudDtcbiAgICB0aGlzLmNvbG9ycy5maWxsID0gZGVmYXVsdENvbG9ycy5maWxsO1xuICAgIHRoaXMuY29sb3JzLmxpZ2h0ID0gZGVmYXVsdENvbG9ycy5saWdodDtcbiAgICB0aGlzLmNvbG9ycy5kYXJrID0gZGVmYXVsdENvbG9ycy5kYXJrO1xuICAgIHRoaXMuY29sb3JzLm1lZGl1bUxpZ2h0ID0gZGVmYXVsdENvbG9ycy5tZWRpdW1MaWdodDtcbiAgICB0aGlzLmNvbG9ycy5tZWRpdW1EYXJrID0gZGVmYXVsdENvbG9ycy5tZWRpdW1EYXJrO1xuICB9XG5cbiAgcGFyc2VTZXR0aW5ncyhhcmdzLG9wdGlvbnMsZGVmYXVsdHMpIHtcblxuICAgIG9wdGlvbnMudW5zaGlmdCgndGFyZ2V0Jyk7XG4gICAgZGVmYXVsdHMuZGVmYXVsdFNpemUgPSBkZWZhdWx0cy5zaXplLnNwbGljZSgwLDIpO1xuICAgIGRlZmF1bHRzLnNpemUgPSBmYWxzZTtcblxuICAgIGxldCBzZXR0aW5ncyA9IHtcbiAgICAgICd0YXJnZXQnOiBkb2N1bWVudC5ib2R5LFxuICAgICAgJ2NvbG9ycyc6IHt9LCAvLyBzaG91bGQgaW5oZXJpdCBmcm9tIGEgY29sb3JzIG1vZHVsZSxcbiAgICAgICdzbmFwV2l0aFBhcmVudCc6IHRydWUsXG4gICAgICAnZXZlbnQnOiBmdW5jdGlvbigpIHt9LFxuICAgICAgJ2NvbXBvbmVudCc6IGZhbHNlXG4gICAgfTtcblxuICAgIGZvciAobGV0IGtleSBpbiBkZWZhdWx0cykge1xuICAgICAgc2V0dGluZ3Nba2V5XSA9IGRlZmF1bHRzW2tleV07XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaT0wOyBpPGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIGdyYWJzIHRoZSBuZXh0IGFyZ3VtZW50XG4gICAgICBsZXQgc2V0dGluZyA9IGFyZ3NbaV07XG4gICAgICAvLyBpZiBpdCdzIGFuIG9iamVjdCwgaXQgbXVzdCBiZSB0aGUgc2V0dGluZ3Mgb2JqZWN0XG4gICAgICBpZiAoIHV0aWwuaXNPYmplY3Qoc2V0dGluZykgKSB7XG4gICAgICAgIGZvciAoIGxldCBrZXkgaW4gc2V0dGluZyApIHtcbiAgICAgICAgICBzZXR0aW5nc1trZXldID0gc2V0dGluZ1trZXldO1xuICAgICAgICB9XG4gICAgICAvLyBpZiBpdCdzIGEgZnVuY3Rpb24sIGl0IG11c3QgYmUgdGhlIGV2ZW50IHNldHRpbmdcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHNldHRpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgc2V0dGluZ3MuZXZlbnQgPSBzZXR0aW5nO1xuICAgICAgLy8gb3RoZXJ3aXNlLCBjb25zaWRlciBpdCBvbmUgb2YgdGhlIHdpZGdldCdzIGN1c3RvbSBvcHRpb25zXG4gICAgICB9IGVsc2UgaWYgKG9wdGlvbnMubGVuZ3RoPj0xKSB7XG4gICAgICAgIC8vIGdyYWIgdGhlIGZpcnN0IG9wdGlvbiAtLSBpLmUuICd0YXJnZXQnXG4gICAgICAgIGxldCBrZXkgPSBvcHRpb25zLnNwbGljZSgwLDEpWzBdO1xuICAgICAgICBzZXR0aW5nc1trZXldID0gc2V0dGluZztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKiAgaGFuZGxlIGNvbW1vbiBzZXR0aW5ncyAgKi9cblxuICAgIC8vIHRhcmdldFxuICAgIHRoaXMucGFyZW50ID0gZG9tLnBhcnNlRWxlbWVudChzZXR0aW5ncy50YXJnZXQpO1xuXG4gICAgLy8gbmV4dXMtdWkgYXR0cmlidXRlXG4gICAgaWYgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgIXNldHRpbmdzLmNvbXBvbmVudCkge1xuICAgICAgaWYgKCF0aGlzLnBhcmVudC5oYXNBdHRyaWJ1dGUoJ25leHVzLXVpJykpIHtcbiAgICAgICAgdGhpcy5wYXJlbnQuc2V0QXR0cmlidXRlKCduZXh1cy11aScsJycpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHNpemVcblxuICAgIGlmIChzZXR0aW5ncy5zaXplICYmIEFycmF5LmlzQXJyYXkoc2V0dGluZ3Muc2l6ZSkgJiYgc2V0dGluZ3Muc25hcFdpdGhQYXJlbnQpIHtcbiAgICAgIHRoaXMud2lkdGggPSBzZXR0aW5ncy5zaXplWzBdO1xuICAgICAgdGhpcy5oZWlnaHQgPSBzZXR0aW5ncy5zaXplWzFdO1xuICAgICAgdGhpcy5wYXJlbnQuc3R5bGUud2lkdGggPSB0aGlzLndpZHRoICsgJ3B4JztcbiAgICAgIHRoaXMucGFyZW50LnN0eWxlLmhlaWdodCA9IHRoaXMuaGVpZ2h0ICsgJ3B4JztcbiAgICB9IGVsc2UgaWYgKHNldHRpbmdzLnNuYXBXaXRoUGFyZW50ICYmICFzZXR0aW5ncy5jb21wb25lbnQpIHtcblxuICAgICAgdGhpcy53aWR0aCA9IHBhcnNlRmxvYXQod2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5wYXJlbnQsIG51bGwpLmdldFByb3BlcnR5VmFsdWUoJ3dpZHRoJykucmVwbGFjZSgncHgnLCcnKSk7XG4gICAgICB0aGlzLmhlaWdodCA9IHBhcnNlRmxvYXQod2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5wYXJlbnQsIG51bGwpLmdldFByb3BlcnR5VmFsdWUoJ2hlaWdodCcpLnJlcGxhY2UoJ3B4JywnJykpO1xuXG4gICAgICBpZiAodGhpcy53aWR0aD09NTAwMCkge1xuICAgICAgICB0aGlzLndpZHRoID0gc2V0dGluZ3MuZGVmYXVsdFNpemVbMF07XG4gICAgICAgIHRoaXMucGFyZW50LnN0eWxlLndpZHRoID0gdGhpcy5wYXJlbnQud2lkdGggPSB0aGlzLndpZHRoICsgJ3B4JztcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmhlaWdodD09NTAwMCkge1xuICAgICAgICB0aGlzLmhlaWdodCA9IHNldHRpbmdzLmRlZmF1bHRTaXplWzFdO1xuICAgICAgICB0aGlzLnBhcmVudC5zdHlsZS5oZWlnaHQgPSB0aGlzLnBhcmVudC5oZWlnaHQgPSB0aGlzLmhlaWdodCArICdweCc7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgc2V0dGluZ3Muc2l6ZSA9IHNldHRpbmdzLmRlZmF1bHRTaXplO1xuICAgICAgdGhpcy53aWR0aCA9IHNldHRpbmdzLnNpemVbMF07XG4gICAgICB0aGlzLmhlaWdodCA9IHNldHRpbmdzLnNpemVbMV07XG4gICAgfVxuXG4gICAgLy8gZXZlbnRcbiAgICBpZiAoc2V0dGluZ3MuZXZlbnQpIHtcbiAgICAgIHRoaXMuZXZlbnQgPSB0aGlzLm9uKCdjaGFuZ2UnLCBzZXR0aW5ncy5ldmVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZXZlbnQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2V0dGluZ3M7XG5cbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5idWlsZEZyYW1lKCk7XG4gICAgdGhpcy5idWlsZEludGVyZmFjZSgpO1xuICAgIHRoaXMuc2l6ZUludGVyZmFjZSgpO1xuICAgIHRoaXMuYXR0YWNoTGlzdGVuZXJzKCk7XG4gICAgdGhpcy5jb2xvckludGVyZmFjZSgpO1xuICAgIHRoaXMuZmluYWxUb3VjaGVzKCk7XG4gIH1cblxuICBidWlsZEZyYW1lKCkge1xuICAgIHRoaXMuZWxlbWVudCA9IHN2Zy5jcmVhdGUoJ3N2ZycpO1xuICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3dpZHRoJyx0aGlzLndpZHRoKTtcbiAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdoZWlnaHQnLHRoaXMuaGVpZ2h0KTtcbiAgICB0aGlzLnBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICB9XG5cbiAgYnVpbGRJbnRlcmZhY2UoKSB7fVxuICBzaXplSW50ZXJmYWNlKCkge31cbiAgY29sb3JJbnRlcmZhY2UoKSB7fVxuXG4gIGF0dGFjaExpc3RlbmVycygpIHtcblxuICAgIHRoaXMuaW50ZXJhY3Rpb25UYXJnZXQgPSB0aGlzLmludGVyYWN0aW9uVGFyZ2V0IHx8IHRoaXMuZWxlbWVudDtcblxuICAgIC8vIFNldHVwIGludGVyYWN0aW9uXG4gICAgaWYgKHRvdWNoLmV4aXN0cykge1xuICAgICAgdGhpcy5pbnRlcmFjdGlvblRhcmdldC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgZXZ0ID0+IHRoaXMucHJlVG91Y2goZXZ0KSk7XG4gICAgICB0aGlzLmludGVyYWN0aW9uVGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGV2dCA9PiB0aGlzLnByZVRvdWNoTW92ZShldnQpKTtcbiAgICAgIHRoaXMuaW50ZXJhY3Rpb25UYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBldnQgPT4gdGhpcy5wcmVUb3VjaFJlbGVhc2UoZXZ0KSk7XG4gICAgfVxuICAgIHRoaXMuYm91bmRQcmVNb3ZlID0gZXZ0ID0+IHRoaXMucHJlTW92ZShldnQpO1xuICAgIHRoaXMuYm91bmRQcmVSZWxlYXNlID0gZXZ0ID0+IHRoaXMucHJlUmVsZWFzZShldnQpO1xuICAgIHRoaXMuaW50ZXJhY3Rpb25UYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZXZ0ID0+IHRoaXMucHJlQ2xpY2soZXZ0KSk7XG4gIH1cblxuICBmaW5hbFRvdWNoZXMoKSB7XG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcbiAgfVxuXG4gIHByZUNsaWNrKGUpIHtcbiAgICAvLyAxMDAwMCBnZXRDb21wdXRlZFN0eWxlIGNhbGxzIHRha2VzIDEwMCBtcy5cbiAgICAvLyAuOi4gb25lIHRha2VzIGFib3V0IC4wMW1zXG4gICAgaWYgKHRoaXMuZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICB0aGlzLndpZHRoID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5lbGVtZW50LCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKCd3aWR0aCcpLnJlcGxhY2UoJ3B4JywnJyk7XG4gICAgfVxuICAgIC8vIDEwMDAwIGdldENvbXB1dGVkU3R5bGUgY2FsbHMgdGFrZXMgNDAgbXMuXG4gICAgLy8gLjouIG9uZSB0YWtlcyBhYm91dCAuMDA0bXNcbiAgICB0aGlzLm9mZnNldCA9IGRvbS5maW5kUG9zaXRpb24odGhpcy5lbGVtZW50KTtcbiAgICB0aGlzLm1vdXNlID0gZG9tLmxvY2F0ZU1vdXNlKGUsdGhpcy5vZmZzZXQpO1xuICAgIHRoaXMuY2xpY2tlZCA9IHRydWU7XG4gICAgdGhpcy5jbGljaygpO1xuICAgIHRoaXMubW92ZUV2ZW50ID0gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5ib3VuZFByZU1vdmUpO1xuICAgIHRoaXMucmVsZWFzZUV2ZW50ID0gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuYm91bmRQcmVSZWxlYXNlKTtcbiAgICB0aGlzLmVtaXQoJ2NsaWNrJyk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICBwcmVNb3ZlKGUpIHtcbiAgICBpZiAoIXRoaXMud2FpdCkge1xuICAgICAgdGhpcy5tb3VzZSA9IGRvbS5sb2NhdGVNb3VzZShlLHRoaXMub2Zmc2V0KTtcbiAgICAgIHRoaXMubW92ZSgpO1xuICAgICAgdGhpcy53YWl0ID0gdHJ1ZTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLndhaXQgPSBmYWxzZTsgfSwyNSk7XG4gICAgfVxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgcHJlUmVsZWFzZShlKSB7XG4gICAgdGhpcy5tb3VzZSA9IGRvbS5sb2NhdGVNb3VzZShlLHRoaXMub2Zmc2V0KTtcbiAgICB0aGlzLmNsaWNrZWQgPSBmYWxzZTtcbiAgICB0aGlzLnJlbGVhc2UoKTtcbiAgICB0aGlzLmVtaXQoJ3JlbGVhc2UnKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLHRoaXMuYm91bmRQcmVNb3ZlKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJyx0aGlzLmJvdW5kUHJlUmVsZWFzZSk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICBjbGljaygpIHtcblxuICB9XG5cbiAgbW92ZSgpIHtcblxuICB9XG5cbiAgcmVsZWFzZSgpIHtcblxuICB9XG5cblxuICAvKiB0b3VjaCAqL1xuXG4gIHByZVRvdWNoKGUpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgIHRoaXMud2lkdGggPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsZW1lbnQsIG51bGwpLmdldFByb3BlcnR5VmFsdWUoJ3dpZHRoJykucmVwbGFjZSgncHgnLCcnKTtcbiAgICB9XG4gICAgdGhpcy5vZmZzZXQgPSBkb20uZmluZFBvc2l0aW9uKHRoaXMuZWxlbWVudCk7XG4gICAgdGhpcy5tb3VzZSA9IGRvbS5sb2NhdGVUb3VjaChlLHRoaXMub2Zmc2V0KTtcbiAgICB0aGlzLmNsaWNrZWQgPSB0cnVlO1xuICAgIHRoaXMudG91Y2goZSk7XG4gICAgdGhpcy5lbWl0KCdjbGljaycpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgcHJlVG91Y2hNb3ZlKGUpIHtcbiAgICBpZiAodGhpcy5jbGlja2VkKSB7XG4gICAgICB0aGlzLm1vdXNlID0gZG9tLmxvY2F0ZVRvdWNoKGUsdGhpcy5vZmZzZXQpO1xuICAgICAgdGhpcy50b3VjaE1vdmUoKTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgcHJlVG91Y2hSZWxlYXNlKGUpIHtcbiAgICB0aGlzLm1vdXNlID0gZG9tLmxvY2F0ZVRvdWNoKGUsIHRoaXMub2Zmc2V0KTtcbiAgICB0aGlzLmNsaWNrZWQgPSBmYWxzZTtcbiAgICB0aGlzLnRvdWNoUmVsZWFzZSgpO1xuICAgIHRoaXMuZW1pdCgncmVsZWFzZScpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgdG91Y2goKSB7XG4gICAgdGhpcy5jbGljaygpO1xuICB9XG5cbiAgdG91Y2hNb3ZlKCkge1xuICAgIHRoaXMubW92ZSgpO1xuICB9XG5cbiAgdG91Y2hSZWxlYXNlKCkge1xuICAgIHRoaXMucmVsZWFzZSgpO1xuICB9XG5cbiAgLyoqXG4gICogUmVzaXplIHRoZSBpbnRlcmZhY2VcbiAgKiBAcGFyYW0gd2lkdGgge251bWJlcn0gTmV3IHdpZHRoIGluIHBpeGVsc1xuICAqIEBwYXJhbSBoZWlnaHQge251bWJlcn0gTmV3IGhlaWdodCBpbiBwaXhlbHNcbiAgKlxuICAqIEBleGFtcGxlXG4gICogYnV0dG9uLnJlc2l6ZSgxMDAsMTAwKTtcbiAgKi9cbiAgcmVzaXplKHdpZHRoLGhlaWdodCkge1xuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLnBhcmVudC5zdHlsZS53aWR0aCA9IHRoaXMud2lkdGgrJ3B4JztcbiAgICB0aGlzLnBhcmVudC5zdHlsZS5oZWlnaHQgPSB0aGlzLmhlaWdodCsncHgnO1xuICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3dpZHRoJyx0aGlzLndpZHRoKTtcbiAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdoZWlnaHQnLHRoaXMuaGVpZ2h0KTtcbiAgICB0aGlzLnNpemVJbnRlcmZhY2UoKTtcbiAgfVxuXG4gIGVtcHR5KCkge1xuICAgIHdoaWxlICh0aGlzLmVsZW1lbnQubGFzdENoaWxkKSB7XG4gICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50Lmxhc3RDaGlsZCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICogUmVtb3ZlIHRoZSBpbnRlcmZhY2UgZnJvbSB0aGUgcGFnZSBhbmQgY2FuY2VsIGl0cyBldmVudCBsaXN0ZW5lcihzKS5cbiAgKlxuICAqIEBleGFtcGxlXG4gICogYnV0dG9uLmRlc3Ryb3koKTtcbiAgKi9cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmVtcHR5KCk7XG4gICAgdGhpcy5wYXJlbnQucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycygpO1xuICAgIGlmICh0aGlzLmluc3RydW1lbnQpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLmluc3RydW1lbnRbdGhpcy5pZF07XG4gICAgfVxuICAgIHRoaXMuY3VzdG9tRGVzdHJveSgpO1xuICB9XG5cbiAgY3VzdG9tRGVzdHJveSgpIHtcblxuICB9XG5cbiAgY29sb3JpemUodHlwZSxjb2xvcikge1xuICAgIHRoaXMuY29sb3JzW3R5cGVdID0gY29sb3I7XG4gICAgdGhpcy5jb2xvckludGVyZmFjZSgpO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vanNoaW50LWxvYWRlciEuL2xpYi9jb3JlL2ludGVyZmFjZS5qcyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5maW5kUG9zaXRpb24gPSAoZWwpID0+IHtcbiAgbGV0IHZpZXdwb3J0T2Zmc2V0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIGxldCB0b3AgPSB2aWV3cG9ydE9mZnNldC50b3AgKyB3aW5kb3cuc2Nyb2xsWTtcbiAgbGV0IGxlZnQgPSB2aWV3cG9ydE9mZnNldC5sZWZ0ICsgd2luZG93LnNjcm9sbFg7XG4gIHJldHVybiB7dG9wLGxlZnR9O1xufTtcblxuZXhwb3J0cy5wYXJzZUVsZW1lbnQgPSAocGFyZW50KSA9PiB7XG4gIGlmICh0eXBlb2YgcGFyZW50ID09PSAnc3RyaW5nJykge1xuICAgIHBhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBhcmVudC5yZXBsYWNlKCcjJywnJykpO1xuICB9XG5cbiAgaWYgKHBhcmVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8IHBhcmVudCBpbnN0YW5jZW9mIFNWR0VsZW1lbnQpe1xuICAgIHJldHVybiBwYXJlbnQ7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICdObyB2YWxpZCBwYXJlbnQgYXJndW1lbnQnO1xuICB9XG59O1xuXG5leHBvcnRzLmxvY2F0ZU1vdXNlID0gKGUsb2Zmc2V0KSA9PiB7XG4gIHJldHVybiB7XG4gICAgeDogZS5wYWdlWCAtIG9mZnNldC5sZWZ0LFxuICAgIHk6IGUucGFnZVkgLSBvZmZzZXQudG9wXG4gIH07XG59O1xuXG5leHBvcnRzLmxvY2F0ZVRvdWNoID0gKGUsb2Zmc2V0KSA9PiB7XG4gIHJldHVybiB7XG4gICAgeDogZS50YXJnZXRUb3VjaGVzLmxlbmd0aCA/IGUudGFyZ2V0VG91Y2hlc1swXS5wYWdlWCAtIG9mZnNldC5sZWZ0IDogZmFsc2UsXG4gICAgeTogZS50YXJnZXRUb3VjaGVzLmxlbmd0aCA/IGUudGFyZ2V0VG91Y2hlc1swXS5wYWdlWSAtIG9mZnNldC50b3AgOiBmYWxzZVxuICB9O1xufTtcblxuZXhwb3J0cy5TbWFydENhbnZhcyA9IGZ1bmN0aW9uKHBhcmVudCkge1xuXG4gIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICB0aGlzLmNvbnRleHQgPSB0aGlzLmVsZW1lbnQuZ2V0Q29udGV4dCgnMmQnKTtcbiAgcGFyZW50LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XG5cbiAgdGhpcy5yZXNpemUgPSAodyxoKSA9PiB7XG4gICAgdGhpcy5lbGVtZW50LndpZHRoID0gdyoyO1xuICAgIHRoaXMuZWxlbWVudC5oZWlnaHQgPSBoKjI7XG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLndpZHRoID0gdysncHgnO1xuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBoKydweCc7XG4gIH07XG5cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2pzaGludC1sb2FkZXIhLi9saWIvdXRpbC9kb20uanMiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuaXNPYmplY3QgPSAob2JqKSA9PiB7XG4gIGlmICh0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShvYmopICYmIG9iaiAhPT0gbnVsbCAmJiBvYmogaW5zdGFuY2VvZiBTVkdFbGVtZW50ID09PSBmYWxzZSAmJiBvYmogaW5zdGFuY2VvZiBIVE1MRWxlbWVudCA9PT0gZmFsc2UgKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9qc2hpbnQtbG9hZGVyIS4vbGliL3V0aWwvdXRpbC5qcyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5leGlzdHMgPSAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vanNoaW50LWxvYWRlciEuL2xpYi91dGlsL3RvdWNoLmpzIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmZ1bmN0aW9uIEV2ZW50RW1pdHRlcigpIHtcbiAgdGhpcy5fZXZlbnRzID0gdGhpcy5fZXZlbnRzIHx8IHt9O1xuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSB0aGlzLl9tYXhMaXN0ZW5lcnMgfHwgdW5kZWZpbmVkO1xufVxubW9kdWxlLmV4cG9ydHMgPSBFdmVudEVtaXR0ZXI7XG5cbi8vIEJhY2t3YXJkcy1jb21wYXQgd2l0aCBub2RlIDAuMTAueFxuRXZlbnRFbWl0dGVyLkV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fZXZlbnRzID0gdW5kZWZpbmVkO1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fbWF4TGlzdGVuZXJzID0gdW5kZWZpbmVkO1xuXG4vLyBCeSBkZWZhdWx0IEV2ZW50RW1pdHRlcnMgd2lsbCBwcmludCBhIHdhcm5pbmcgaWYgbW9yZSB0aGFuIDEwIGxpc3RlbmVycyBhcmVcbi8vIGFkZGVkIHRvIGl0LiBUaGlzIGlzIGEgdXNlZnVsIGRlZmF1bHQgd2hpY2ggaGVscHMgZmluZGluZyBtZW1vcnkgbGVha3MuXG5FdmVudEVtaXR0ZXIuZGVmYXVsdE1heExpc3RlbmVycyA9IDEwO1xuXG4vLyBPYnZpb3VzbHkgbm90IGFsbCBFbWl0dGVycyBzaG91bGQgYmUgbGltaXRlZCB0byAxMC4gVGhpcyBmdW5jdGlvbiBhbGxvd3Ncbi8vIHRoYXQgdG8gYmUgaW5jcmVhc2VkLiBTZXQgdG8gemVybyBmb3IgdW5saW1pdGVkLlxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5zZXRNYXhMaXN0ZW5lcnMgPSBmdW5jdGlvbihuKSB7XG4gIGlmICghaXNOdW1iZXIobikgfHwgbiA8IDAgfHwgaXNOYU4obikpXG4gICAgdGhyb3cgVHlwZUVycm9yKCduIG11c3QgYmUgYSBwb3NpdGl2ZSBudW1iZXInKTtcbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gbjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbih0eXBlKSB7XG4gIHZhciBlciwgaGFuZGxlciwgbGVuLCBhcmdzLCBpLCBsaXN0ZW5lcnM7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMpXG4gICAgdGhpcy5fZXZlbnRzID0ge307XG5cbiAgLy8gSWYgdGhlcmUgaXMgbm8gJ2Vycm9yJyBldmVudCBsaXN0ZW5lciB0aGVuIHRocm93LlxuICBpZiAodHlwZSA9PT0gJ2Vycm9yJykge1xuICAgIGlmICghdGhpcy5fZXZlbnRzLmVycm9yIHx8XG4gICAgICAgIChpc09iamVjdCh0aGlzLl9ldmVudHMuZXJyb3IpICYmICF0aGlzLl9ldmVudHMuZXJyb3IubGVuZ3RoKSkge1xuICAgICAgZXIgPSBhcmd1bWVudHNbMV07XG4gICAgICBpZiAoZXIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICB0aHJvdyBlcjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEF0IGxlYXN0IGdpdmUgc29tZSBraW5kIG9mIGNvbnRleHQgdG8gdGhlIHVzZXJcbiAgICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcignVW5jYXVnaHQsIHVuc3BlY2lmaWVkIFwiZXJyb3JcIiBldmVudC4gKCcgKyBlciArICcpJyk7XG4gICAgICAgIGVyci5jb250ZXh0ID0gZXI7XG4gICAgICAgIHRocm93IGVycjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBoYW5kbGVyID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuXG4gIGlmIChpc1VuZGVmaW5lZChoYW5kbGVyKSlcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKGlzRnVuY3Rpb24oaGFuZGxlcikpIHtcbiAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIC8vIGZhc3QgY2FzZXNcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMsIGFyZ3VtZW50c1sxXSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOlxuICAgICAgICBoYW5kbGVyLmNhbGwodGhpcywgYXJndW1lbnRzWzFdLCBhcmd1bWVudHNbMl0pO1xuICAgICAgICBicmVhaztcbiAgICAgIC8vIHNsb3dlclxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgICAgIGhhbmRsZXIuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzT2JqZWN0KGhhbmRsZXIpKSB7XG4gICAgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgbGlzdGVuZXJzID0gaGFuZGxlci5zbGljZSgpO1xuICAgIGxlbiA9IGxpc3RlbmVycy5sZW5ndGg7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKVxuICAgICAgbGlzdGVuZXJzW2ldLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyID0gZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIpIHtcbiAgdmFyIG07XG5cbiAgaWYgKCFpc0Z1bmN0aW9uKGxpc3RlbmVyKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ2xpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzKVxuICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuXG4gIC8vIFRvIGF2b2lkIHJlY3Vyc2lvbiBpbiB0aGUgY2FzZSB0aGF0IHR5cGUgPT09IFwibmV3TGlzdGVuZXJcIiEgQmVmb3JlXG4gIC8vIGFkZGluZyBpdCB0byB0aGUgbGlzdGVuZXJzLCBmaXJzdCBlbWl0IFwibmV3TGlzdGVuZXJcIi5cbiAgaWYgKHRoaXMuX2V2ZW50cy5uZXdMaXN0ZW5lcilcbiAgICB0aGlzLmVtaXQoJ25ld0xpc3RlbmVyJywgdHlwZSxcbiAgICAgICAgICAgICAgaXNGdW5jdGlvbihsaXN0ZW5lci5saXN0ZW5lcikgP1xuICAgICAgICAgICAgICBsaXN0ZW5lci5saXN0ZW5lciA6IGxpc3RlbmVyKTtcblxuICBpZiAoIXRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICAvLyBPcHRpbWl6ZSB0aGUgY2FzZSBvZiBvbmUgbGlzdGVuZXIuIERvbid0IG5lZWQgdGhlIGV4dHJhIGFycmF5IG9iamVjdC5cbiAgICB0aGlzLl9ldmVudHNbdHlwZV0gPSBsaXN0ZW5lcjtcbiAgZWxzZSBpZiAoaXNPYmplY3QodGhpcy5fZXZlbnRzW3R5cGVdKSlcbiAgICAvLyBJZiB3ZSd2ZSBhbHJlYWR5IGdvdCBhbiBhcnJheSwganVzdCBhcHBlbmQuXG4gICAgdGhpcy5fZXZlbnRzW3R5cGVdLnB1c2gobGlzdGVuZXIpO1xuICBlbHNlXG4gICAgLy8gQWRkaW5nIHRoZSBzZWNvbmQgZWxlbWVudCwgbmVlZCB0byBjaGFuZ2UgdG8gYXJyYXkuXG4gICAgdGhpcy5fZXZlbnRzW3R5cGVdID0gW3RoaXMuX2V2ZW50c1t0eXBlXSwgbGlzdGVuZXJdO1xuXG4gIC8vIENoZWNrIGZvciBsaXN0ZW5lciBsZWFrXG4gIGlmIChpc09iamVjdCh0aGlzLl9ldmVudHNbdHlwZV0pICYmICF0aGlzLl9ldmVudHNbdHlwZV0ud2FybmVkKSB7XG4gICAgaWYgKCFpc1VuZGVmaW5lZCh0aGlzLl9tYXhMaXN0ZW5lcnMpKSB7XG4gICAgICBtID0gdGhpcy5fbWF4TGlzdGVuZXJzO1xuICAgIH0gZWxzZSB7XG4gICAgICBtID0gRXZlbnRFbWl0dGVyLmRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gICAgfVxuXG4gICAgaWYgKG0gJiYgbSA+IDAgJiYgdGhpcy5fZXZlbnRzW3R5cGVdLmxlbmd0aCA+IG0pIHtcbiAgICAgIHRoaXMuX2V2ZW50c1t0eXBlXS53YXJuZWQgPSB0cnVlO1xuICAgICAgY29uc29sZS5lcnJvcignKG5vZGUpIHdhcm5pbmc6IHBvc3NpYmxlIEV2ZW50RW1pdHRlciBtZW1vcnkgJyArXG4gICAgICAgICAgICAgICAgICAgICdsZWFrIGRldGVjdGVkLiAlZCBsaXN0ZW5lcnMgYWRkZWQuICcgK1xuICAgICAgICAgICAgICAgICAgICAnVXNlIGVtaXR0ZXIuc2V0TWF4TGlzdGVuZXJzKCkgdG8gaW5jcmVhc2UgbGltaXQuJyxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXZlbnRzW3R5cGVdLmxlbmd0aCk7XG4gICAgICBpZiAodHlwZW9mIGNvbnNvbGUudHJhY2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gbm90IHN1cHBvcnRlZCBpbiBJRSAxMFxuICAgICAgICBjb25zb2xlLnRyYWNlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIpIHtcbiAgaWYgKCFpc0Z1bmN0aW9uKGxpc3RlbmVyKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ2xpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXG4gIHZhciBmaXJlZCA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIGcoKSB7XG4gICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBnKTtcblxuICAgIGlmICghZmlyZWQpIHtcbiAgICAgIGZpcmVkID0gdHJ1ZTtcbiAgICAgIGxpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgZy5saXN0ZW5lciA9IGxpc3RlbmVyO1xuICB0aGlzLm9uKHR5cGUsIGcpO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLy8gZW1pdHMgYSAncmVtb3ZlTGlzdGVuZXInIGV2ZW50IGlmZiB0aGUgbGlzdGVuZXIgd2FzIHJlbW92ZWRcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgbGlzdCwgcG9zaXRpb24sIGxlbmd0aCwgaTtcblxuICBpZiAoIWlzRnVuY3Rpb24obGlzdGVuZXIpKVxuICAgIHRocm93IFR5cGVFcnJvcignbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMgfHwgIXRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICByZXR1cm4gdGhpcztcblxuICBsaXN0ID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuICBsZW5ndGggPSBsaXN0Lmxlbmd0aDtcbiAgcG9zaXRpb24gPSAtMTtcblxuICBpZiAobGlzdCA9PT0gbGlzdGVuZXIgfHxcbiAgICAgIChpc0Z1bmN0aW9uKGxpc3QubGlzdGVuZXIpICYmIGxpc3QubGlzdGVuZXIgPT09IGxpc3RlbmVyKSkge1xuICAgIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG4gICAgaWYgKHRoaXMuX2V2ZW50cy5yZW1vdmVMaXN0ZW5lcilcbiAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBsaXN0ZW5lcik7XG5cbiAgfSBlbHNlIGlmIChpc09iamVjdChsaXN0KSkge1xuICAgIGZvciAoaSA9IGxlbmd0aDsgaS0tID4gMDspIHtcbiAgICAgIGlmIChsaXN0W2ldID09PSBsaXN0ZW5lciB8fFxuICAgICAgICAgIChsaXN0W2ldLmxpc3RlbmVyICYmIGxpc3RbaV0ubGlzdGVuZXIgPT09IGxpc3RlbmVyKSkge1xuICAgICAgICBwb3NpdGlvbiA9IGk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwb3NpdGlvbiA8IDApXG4gICAgICByZXR1cm4gdGhpcztcblxuICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgbGlzdC5sZW5ndGggPSAwO1xuICAgICAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGlzdC5zcGxpY2UocG9zaXRpb24sIDEpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9ldmVudHMucmVtb3ZlTGlzdGVuZXIpXG4gICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgbGlzdGVuZXIpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgdmFyIGtleSwgbGlzdGVuZXJzO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzKVxuICAgIHJldHVybiB0aGlzO1xuXG4gIC8vIG5vdCBsaXN0ZW5pbmcgZm9yIHJlbW92ZUxpc3RlbmVyLCBubyBuZWVkIHRvIGVtaXRcbiAgaWYgKCF0aGlzLl9ldmVudHMucmVtb3ZlTGlzdGVuZXIpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMClcbiAgICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuICAgIGVsc2UgaWYgKHRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICAgIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBlbWl0IHJlbW92ZUxpc3RlbmVyIGZvciBhbGwgbGlzdGVuZXJzIG9uIGFsbCBldmVudHNcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICBmb3IgKGtleSBpbiB0aGlzLl9ldmVudHMpIHtcbiAgICAgIGlmIChrZXkgPT09ICdyZW1vdmVMaXN0ZW5lcicpIGNvbnRpbnVlO1xuICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoa2V5KTtcbiAgICB9XG4gICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoJ3JlbW92ZUxpc3RlbmVyJyk7XG4gICAgdGhpcy5fZXZlbnRzID0ge307XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHNbdHlwZV07XG5cbiAgaWYgKGlzRnVuY3Rpb24obGlzdGVuZXJzKSkge1xuICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzKTtcbiAgfSBlbHNlIGlmIChsaXN0ZW5lcnMpIHtcbiAgICAvLyBMSUZPIG9yZGVyXG4gICAgd2hpbGUgKGxpc3RlbmVycy5sZW5ndGgpXG4gICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyc1tsaXN0ZW5lcnMubGVuZ3RoIC0gMV0pO1xuICB9XG4gIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgdmFyIHJldDtcbiAgaWYgKCF0aGlzLl9ldmVudHMgfHwgIXRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICByZXQgPSBbXTtcbiAgZWxzZSBpZiAoaXNGdW5jdGlvbih0aGlzLl9ldmVudHNbdHlwZV0pKVxuICAgIHJldCA9IFt0aGlzLl9ldmVudHNbdHlwZV1dO1xuICBlbHNlXG4gICAgcmV0ID0gdGhpcy5fZXZlbnRzW3R5cGVdLnNsaWNlKCk7XG4gIHJldHVybiByZXQ7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbih0eXBlKSB7XG4gIGlmICh0aGlzLl9ldmVudHMpIHtcbiAgICB2YXIgZXZsaXN0ZW5lciA9IHRoaXMuX2V2ZW50c1t0eXBlXTtcblxuICAgIGlmIChpc0Z1bmN0aW9uKGV2bGlzdGVuZXIpKVxuICAgICAgcmV0dXJuIDE7XG4gICAgZWxzZSBpZiAoZXZsaXN0ZW5lcilcbiAgICAgIHJldHVybiBldmxpc3RlbmVyLmxlbmd0aDtcbiAgfVxuICByZXR1cm4gMDtcbn07XG5cbkV2ZW50RW1pdHRlci5saXN0ZW5lckNvdW50ID0gZnVuY3Rpb24oZW1pdHRlciwgdHlwZSkge1xuICByZXR1cm4gZW1pdHRlci5saXN0ZW5lckNvdW50KHR5cGUpO1xufTtcblxuZnVuY3Rpb24gaXNGdW5jdGlvbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdmdW5jdGlvbic7XG59XG5cbmZ1bmN0aW9uIGlzTnVtYmVyKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ251bWJlcic7XG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ29iamVjdCcgJiYgYXJnICE9PSBudWxsO1xufVxuXG5mdW5jdGlvbiBpc1VuZGVmaW5lZChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gdm9pZCAwO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2V2ZW50cy9ldmVudHMuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxubGV0IG1hdGggPSByZXF1aXJlKCcuLi91dGlsL21hdGgnKTtcblxuLyoqXG4gIENyZWF0ZXMgYSBzdGVwcGFibGUgdmFsdWUgd2l0aCBtaW5pbXVtLCBtYXhpbXVtLCBhbmQgc3RlcCBzaXplLiBUaGlzIGlzIHVzZWQgaW4gbWFueSBpbnRlcmZhY2VzIHRvIGNvbnN0cmljdCB0aGVpciB2YWx1ZXMgdG8gY2VydGFpbiByYW5nZXMuXG4gIEBwYXJhbSB7bnVtYmVyfSBbbWluPTBdIG1pbmltdW1cbiAgQHBhcmFtIHtudW1iZXJ9IFttYXg9MV0gbWF4aW11bVxuICBAcGFyYW0ge251bWJlcn0gW3N0ZXA9MF1cbiAgQHBhcmFtIHtudW1iZXJ9IFt2YWx1ZT0wXSBpbml0aWFsIHZhbHVlXG4gIEByZXR1cm5zIHtPYmplY3R9IFN0ZXBcbiovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0ZXAge1xuXG4gIGNvbnN0cnVjdG9yKG1pbiA9IDAsbWF4ID0gMSxzdGVwID0gMCx2YWx1ZSA9IDApIHtcbiAgICAvL09iamVjdC5hc3NpZ24odGhpcyx7bWluLG1heCxzdGVwfSk7XG4gICAgLy9DYW5ub3QgdXNlIE9iamVjdC5hc3NpZ24gYmVjYXVzZSBub3Qgc3VwcG9ydGVkIGluIFNhZmFyaS5cbiAgICAvL0kgd291bGQgZXhwZWN0IGZvciBCYWJlbCB0byB0YWtlIGNhcmUgb2YgdGhpcyBidXQgaXQgaXMgbm90LlxuICAgIHRoaXMubWluID0gbWluO1xuICAgIHRoaXMubWF4ID0gbWF4O1xuICAgIHRoaXMuc3RlcCA9IHN0ZXA7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuY2hhbmdlZCA9IGZhbHNlO1xuICAgIHRoaXMub2xkVmFsdWUgPSBmYWxzZTtcbiAgICB0aGlzLnVwZGF0ZSh0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgIFVwZGF0ZSB3aXRoIGEgbmV3IHZhbHVlLiBUaGUgdmFsdWUgd2lsbCBiZSBhdXRvLWFkanVzdGVkIHRvIGZpdCB0aGUgbWluL21heC9zdGVwLlxuICAgIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZVxuICAqL1xuXG4gIHVwZGF0ZSh2YWx1ZSkge1xuICAgIGlmICh0aGlzLnN0ZXApIHtcbiAgICAgIC8vIHRoaXMudmFsdWUgPSBtYXRoLmNsaXAoTWF0aC5yb3VuZCh2YWx1ZSAvICh0aGlzLnN0ZXApKSAqIHRoaXMuc3RlcCwgdGhpcy5taW4sdGhpcy5tYXgpO1xuICAgICAgdGhpcy52YWx1ZSA9IG1hdGguY2xpcChNYXRoLnJvdW5kKCh2YWx1ZS10aGlzLm1pbikgLyAodGhpcy5zdGVwKSkgKiB0aGlzLnN0ZXAgKyB0aGlzLm1pbiwgdGhpcy5taW4sdGhpcy5tYXgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZhbHVlID0gbWF0aC5jbGlwKHZhbHVlLHRoaXMubWluLHRoaXMubWF4KTtcbiAgICB9XG4gICAgaWYgKHRoaXMub2xkVmFsdWUgIT09IHRoaXMudmFsdWUpIHtcbiAgICAgIHRoaXMub2xkVmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgdGhpcy5jaGFuZ2VkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jaGFuZ2VkID0gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAgVXBkYXRlIHdpdGggYSBub3JtYWxpemVkIHZhbHVlIDAtMS5cbiAgICBAcGFyYW0ge251bWJlcn0gdmFsdWVcbiAgKi9cbiAgdXBkYXRlTm9ybWFsKHZhbHVlKSB7XG4gICAgdGhpcy52YWx1ZSA9IG1hdGguc2NhbGUodmFsdWUsMCwxLHRoaXMubWluLHRoaXMubWF4KTtcbiAgICByZXR1cm4gdGhpcy51cGRhdGUodGhpcy52YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICBHZXQgYSBub3JtYWxpemVkIHZlcnNpb24gb2YgdGhpcy52YWx1ZSAuIE5vdCBzZXR0YWJsZS5cbiAgKi9cbiAgZ2V0IG5vcm1hbGl6ZWQoKSB7XG4gICAgcmV0dXJuIG1hdGgubm9ybWFsaXplKHRoaXMudmFsdWUsdGhpcy5taW4sdGhpcy5tYXgpO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vanNoaW50LWxvYWRlciEuL2xpYi9tb2RlbHMvc3RlcC5qcyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IG1hdGggZnJvbSAnLi4vdXRpbC9tYXRoJztcbmltcG9ydCBUb2dnbGVNb2RlbCBmcm9tICcuLi9tb2RlbHMvdG9nZ2xlJztcblxuXG4vKlxuaG93IHRvIHVzZSA6XG5cbmRpYWwuaW50ZXJhY3Rpb24gPSBuZXcgSGFuZGxlKCdyYWRpYWwnLCdyZWxhdGl2ZScsdGhpcy53aWR0aCx0aGlzLmhlaWdodCk7XG4vLyBkaWFsLmludGVyYWN0aW9uLm1vZGUgPSAncmVsYXRpdmUnXG4vLyBkaWFsLmludGVyYWN0aW9uLmRpcmVjdGlvbiA9ICdyYWRpYWwnXG5cbm9uIGNsaWNrOlxuZGlhbC5pbnRlcmFjdGlvbi5hbmNob3IgPSB0aGlzLm1vdXNlO1xuXG5vbiBtb3ZlOlxuZGlhbC5pbnRlcmFjdGlvbi51cGRhdGUodGhpcy5tb3VzZSk7XG5cbmNvbnNvbGUubG9nKCBkaWFsLmludGVyYWN0aW9uLnZhbHVlICk7IHNob3VsZCBiZSBhIG5vcm1hbGl6ZWQgdmFsdWUuXG5cbiovXG5cbi8qXG4gIGFic29sdXRlL3JlbGF0aXZlIGFyZSBwcm9wZXJ0eTogbW9kZVxuICByYWRpYWwvdmVydGljYWwvaG9yaXpvbnRhbC8yZCBhcmUgcHJvcGVydHk6IGRpcmVjdGlvblxuXG4gIHBsYW4gOlxuXG4gIGlmIHJlbGF0aXZlIC0tXG4gIE5PIG9uIGNsaWNrLCBnZXQgdmFsdWUgb2Zmc2V0IGJldHdlZW4gY3VycmVudCB2YWx1ZSBhbmQgY2xpY2sgdmFsdWUuXG4gIE5PIG9uIG1vdmUsIHVzZSBjbGljayB2YWx1ZSAtIG9mZnNldFxuICBJTlNURUFEXG4gIHVzZSBkZWx0YSAtLSBiYyB2ZXJ0aWNhbCBtb3Rpb24gb24gZGlhbCBpcyBpbXBvc3NpYmxlIG90aGVyd2lzZVxuICBhbHNvIGFsbG93IHRvIHNldCBzZW5zaXRpdml0eVxuXG4qL1xuXG5leHBvcnQgY2xhc3MgSGFuZGxlIHtcblxuICBjb25zdHJ1Y3Rvcihtb2RlPSdhYnNvbHV0ZScsZGlyZWN0aW9uPSd2ZXJ0aWNhbCcseGJvdW5kPVswLDEwMF0seWJvdW5kPVswLDEwMF0pIHtcbiAgICB0aGlzLm1vZGUgPSBtb2RlO1xuICAgIHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuICAgIHRoaXMucHJldmlvdXMgPSAwO1xuICAgIHRoaXMudmFsdWUgPSAwO1xuICAgIHRoaXMuc2Vuc2l0aXZpdHkgPSAxO1xuICAgIHRoaXMucmVzaXplKHhib3VuZCx5Ym91bmQpO1xuICB9XG5cbiAgcmVzaXplKHhib3VuZCx5Ym91bmQpIHtcbiAgICB0aGlzLmJvdW5kYXJ5ID0ge1xuICAgICAgbWluOiB7XG4gICAgICAgIHg6IHhib3VuZFswXSxcbiAgICAgICAgeTogeWJvdW5kWzBdXG4gICAgICB9LFxuICAgICAgbWF4OiB7XG4gICAgICAgIHg6IHhib3VuZFsxXSxcbiAgICAgICAgeTogeWJvdW5kWzFdXG4gICAgICB9LFxuICAgICAgY2VudGVyOiB7XG4gICAgICAgIHg6ICh4Ym91bmRbMV0gLSB4Ym91bmRbMF0pLzIgKyB4Ym91bmRbMF0sXG4gICAgICAgIHk6ICh5Ym91bmRbMV0gLSB5Ym91bmRbMF0pLzIgKyB5Ym91bmRbMF1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgc2V0IGFuY2hvcihtb3VzZSkge1xuICAgIHRoaXMuX2FuY2hvciA9IHRoaXMuY29udmVydFBvc2l0aW9uVG9WYWx1ZShtb3VzZSk7XG4gIH1cblxuICBnZXQgYW5jaG9yKCkge1xuICAgIHJldHVybiB0aGlzLl9hbmNob3I7XG4gIH1cblxuXG4gIHVwZGF0ZShtb3VzZSkge1xuICAgIGlmICh0aGlzLm1vZGU9PT0ncmVsYXRpdmUnKSB7XG4gICAgICBsZXQgaW5jcmVtZW50ID0gdGhpcy5jb252ZXJ0UG9zaXRpb25Ub1ZhbHVlKG1vdXNlKSAtIHRoaXMuYW5jaG9yO1xuICAgICAgaWYgKE1hdGguYWJzKGluY3JlbWVudCkgPiAwLjUpIHsgaW5jcmVtZW50ID0gMDsgfVxuICAgICAgdGhpcy5hbmNob3IgPSBtb3VzZTtcbiAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnZhbHVlICsgaW5jcmVtZW50ICogdGhpcy5zZW5zaXRpdml0eTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuY29udmVydFBvc2l0aW9uVG9WYWx1ZShtb3VzZSk7XG4gICAgfVxuICAgIHRoaXMudmFsdWUgPSBtYXRoLmNsaXAodGhpcy52YWx1ZSwwLDEpO1xuICB9XG5cbiAgY29udmVydFBvc2l0aW9uVG9WYWx1ZShjdXJyZW50KSB7XG4gICAgc3dpdGNoKHRoaXMuZGlyZWN0aW9uKSB7XG4gICAgICBjYXNlICdyYWRpYWwnOlxuICAgICAgICBsZXQgcG9zaXRpb24gPSBtYXRoLnRvUG9sYXIoY3VycmVudC54IC0gdGhpcy5ib3VuZGFyeS5jZW50ZXIueCwgY3VycmVudC55IC0gdGhpcy5ib3VuZGFyeS5jZW50ZXIueSk7XG4gICAgICAgIHBvc2l0aW9uID0gcG9zaXRpb24uYW5nbGUgLyAoTWF0aC5QSSoyKTtcbiAgICAgICAgcG9zaXRpb24gPSAoKHBvc2l0aW9uIC0gMC4yNSkgKyAxKSAlIDE7XG4gICAgICAgIHJldHVybiBwb3NpdGlvbjtcbiAgICAgIGNhc2UgJ3ZlcnRpY2FsJzpcbiAgICAgICAgcmV0dXJuIG1hdGguc2NhbGUoY3VycmVudC55LHRoaXMuYm91bmRhcnkubWluLnksdGhpcy5ib3VuZGFyeS5tYXgueSwwLDEpO1xuICAgICAgY2FzZSAnaG9yaXpvbnRhbCc6XG4gICAgICAgIHJldHVybiBtYXRoLnNjYWxlKGN1cnJlbnQueCx0aGlzLmJvdW5kYXJ5Lm1pbi54LHRoaXMuYm91bmRhcnkubWF4LngsMCwxKTtcbiAgICB9XG4gIH1cblxufVxuXG5cbmV4cG9ydCBjbGFzcyBCdXR0b24ge1xuXG4gIGNvbnN0cnVjdG9yKG1vZGU9J2J1dHRvbicpIHtcbiAgICB0aGlzLm1vZGUgPSBtb2RlO1xuICAgIHRoaXMuc3RhdGUgPSBuZXcgVG9nZ2xlTW9kZWwoKTtcbiAgICB0aGlzLnBhaW50YnJ1c2ggPSBmYWxzZTtcbiAgfVxuXG4gIGNsaWNrKCkge1xuICAgIHN3aXRjaCAodGhpcy5tb2RlKSB7XG4gICAgICBjYXNlICdpbXB1bHNlJzpcbiAgICAgICAgdGhpcy5zdGF0ZS5vbigpO1xuICAgICAgICBpZiAodGhpcy50aW1lb3V0KSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCh0aGlzLnN0YXRlLm9mZi5iaW5kKHRoaXMpLDMwKTtcbiAgICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnLHRoaXMuc3RhdGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2J1dHRvbic6XG4gICAgICAgIHRoaXMudHVybk9uKCk7XG4gICAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJyx0aGlzLnN0YXRlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdhZnRlcnRvdWNoJzpcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICB4OiBtYXRoLmNsaXAodGhpcy5tb3VzZS54IC8gdGhpcy53aWR0aCwwLDEpLFxuICAgICAgICAgIHk6IG1hdGguY2xpcCgxIC0gdGhpcy5tb3VzZS55IC8gdGhpcy5oZWlnaHQsMCwxKVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnR1cm5PbigpO1xuICAgICAgICB0aGlzLmVtaXQoJ2NoYW5nZScse1xuICAgICAgICAgIHN0YXRlOiB0aGlzLnN0YXRlLFxuICAgICAgICAgIHg6IHRoaXMucG9zaXRpb24ueCxcbiAgICAgICAgICB5OiB0aGlzLnBvc2l0aW9uLnksXG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3RvZ2dsZSc6XG4gICAgICAgIHRoaXMuZmxpcCgpO1xuICAgICAgICB0aGlzLmVtaXQoJ2NoYW5nZScsdGhpcy5zdGF0ZSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICB9XG5cbiAgbW92ZSgpIHtcbiAgICBpZiAodGhpcy5tb2RlPT09J2FmdGVydG91Y2gnKSB7XG4gICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICB4OiBtYXRoLmNsaXAodGhpcy5tb3VzZS54IC8gdGhpcy53aWR0aCwwLDEpLFxuICAgICAgICB5OiBtYXRoLmNsaXAoMSAtIHRoaXMubW91c2UueSAvIHRoaXMuaGVpZ2h0LDAsMSlcbiAgICAgIH07XG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZScse1xuICAgICAgICBzdGF0ZTogdGhpcy5zdGF0ZSxcbiAgICAgICAgeDogdGhpcy5wb3NpdGlvbi54LFxuICAgICAgICB5OiB0aGlzLnBvc2l0aW9uLnksXG4gICAgICB9KTtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgcmVsZWFzZSgpIHtcbiAgICBzd2l0Y2ggKHRoaXMubW9kZSkge1xuICAgICAgY2FzZSAnYnV0dG9uJzpcbiAgICAgICAgdGhpcy50dXJuT2ZmKCk7XG4gICAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJyx0aGlzLnN0YXRlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdhZnRlcnRvdWNoJzpcbiAgICAgICAgdGhpcy50dXJuT2ZmKCk7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgeDogdGhpcy5tb3VzZS54IC8gdGhpcy53aWR0aCxcbiAgICAgICAgICB5OiAxIC0gdGhpcy5tb3VzZS55IC8gdGhpcy5oZWlnaHRcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnLHtcbiAgICAgICAgICBzdGF0ZTogdGhpcy5zdGF0ZSxcbiAgICAgICAgICB4OiB0aGlzLnBvc2l0aW9uLngsXG4gICAgICAgICAgeTogdGhpcy5wb3NpdGlvbi55LFxuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2pzaGludC1sb2FkZXIhLi9saWIvdXRpbC9pbnRlcmFjdGlvbi5qcyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9nZ2xlIHtcblxuICBjb25zdHJ1Y3RvcihzdGF0ZSkge1xuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZSB8fCBmYWxzZTtcbiAgfVxuXG4gIGZsaXAoc3RhdGUpIHtcbiAgICBpZiAoc3RhdGUgfHwgc3RhdGUgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RhdGUgPSAhdGhpcy5zdGF0ZTtcbiAgICB9XG4gIH1cblxuICBvbigpIHtcbiAgICB0aGlzLnN0YXRlID0gdHJ1ZTtcbiAgfVxuXG4gIG9mZigpIHtcbiAgICB0aGlzLnN0YXRlID0gZmFsc2U7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9qc2hpbnQtbG9hZGVyIS4vbGliL21vZGVscy90b2dnbGUuanMiLCIndXNlIHN0cmljdCc7XG5cbmxldCBzdmcgPSByZXF1aXJlKCcuLi91dGlsL3N2ZycpO1xubGV0IEludGVyZmFjZSA9IHJlcXVpcmUoJy4uL2NvcmUvaW50ZXJmYWNlJyk7XG5sZXQgU3RlcCA9IHJlcXVpcmUoJy4uL21vZGVscy9zdGVwJyk7XG5pbXBvcnQgKiBhcyBJbnRlcmFjdGlvbiBmcm9tICcuLi91dGlsL2ludGVyYWN0aW9uJztcblxuLyoqXG4qIFNsaWRlclxuKlxuKiBAZGVzY3JpcHRpb24gSG9yaXpvbnRhbCBvciB2ZXJ0aWNhbCBzbGlkZXIgd2l0aCBzZXR0YWJsZSBpbnRlcmFjdGlvbiBtb2Rlcy5cbipcbiogQGRlbW8gPHNwYW4gbmV4dXMtdWk9XCJzbGlkZXJcIiBzdGVwPTAuMj48L3NwYW4+XG4qXG4qIEBleGFtcGxlXG4qIHZhciBzbGlkZXIgPSBuZXcgTmV4dXMuU2xpZGVyKCcjdGFyZ2V0JylcbipcbiogQGV4YW1wbGVcbiogdmFyIHNsaWRlciA9IG5ldyBOZXh1cy5TbGlkZXIoJyN0YXJnZXQnLHtcbiogICAgICdzaXplJzogWzEyMCwyMF0sXG4qICAgICAnbW9kZSc6ICdyZWxhdGl2ZScsICAvLyAncmVsYXRpdmUnIG9yICdhYnNvbHV0ZSdcbiogICAgICdtaW4nOiAwLFxuKiAgICAgJ21heCc6IDEsXG4qICAgICAnc3RlcCc6IDAsXG4qICAgICAndmFsdWUnOiAwXG4qIH0pXG4qXG4qIEBvdXRwdXRcbiogY2hhbmdlXG4qIEZpcmVzIHdoZW4gdGhlIGludGVyZmFjZSdzIHZhbHVlIGNoYW5nZXMuIDxicj5cbiogRXZlbnQgZGF0YTogPGk+bnVtYmVyPC9pPiBUaGUgbnVtYmVyIHZhbHVlIG9mIHRoZSBpbnRlcmZhY2UuXG4qXG4qIEBvdXRwdXRleGFtcGxlXG4qIHNsaWRlci5vbignY2hhbmdlJyxmdW5jdGlvbih2KSB7XG4qICAgY29uc29sZS5sb2codik7XG4qIH0pXG4qXG4qXG4qL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbGlkZXIgZXh0ZW5kcyBJbnRlcmZhY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgbGV0IG9wdGlvbnMgPSBbJ21pbicsJ21heCcsJ3ZhbHVlJ107XG5cbiAgICBsZXQgZGVmYXVsdHMgPSB7XG4gICAgICAnc2l6ZSc6IFsxMjAsMjBdLFxuICAgICAgJ21vZGUnOiAncmVsYXRpdmUnLCAgLy8gJ3JlbGF0aXZlJyBvciAnYWJzb2x1dGUnXG4gICAgICAnbWluJzogMCxcbiAgICAgICdtYXgnOiAxLFxuICAgICAgJ3N0ZXAnOiAwLFxuICAgICAgJ3ZhbHVlJzogMFxuICAgIH07XG5cbiAgICBzdXBlcihhcmd1bWVudHMsb3B0aW9ucyxkZWZhdWx0cyk7XG5cbiAgICB0aGlzLm9yaWVudGF0aW9uID0gJ3ZlcnRpY2FsJzsgLy8gVGhpcyB3aWxsIGNoYW5nZSBhdXRvbWF0aWNhbGx5IHRvICdob3Jpem9udGFsJ2lmIHRoZSBpbnRlcmZhY2UgaXMgd2lkZXIgdGhhbiBpdCBpcyB0YWxsLlxuXG4gICAgdGhpcy5fdmFsdWUgPSBuZXcgU3RlcCh0aGlzLnNldHRpbmdzLm1pbiwgdGhpcy5zZXR0aW5ncy5tYXgsIHRoaXMuc2V0dGluZ3Muc3RlcCwgdGhpcy5zZXR0aW5ncy52YWx1ZSk7XG5cbiAgICB0aGlzLnBvc2l0aW9uID0gbmV3IEludGVyYWN0aW9uLkhhbmRsZSh0aGlzLnNldHRpbmdzLm1vZGUsdGhpcy5vcmllbnRhdGlvbixbMCx0aGlzLndpZHRoXSxbdGhpcy5oZWlnaHQsMF0pO1xuICAgIHRoaXMucG9zaXRpb24udmFsdWUgPSB0aGlzLl92YWx1ZS5ub3JtYWxpemVkO1xuXG4gICAgdGhpcy5pbml0KCk7XG5cbiAgICB0aGlzLnBvc2l0aW9uLmRpcmVjdGlvbiA9IHRoaXMub3JpZW50YXRpb247XG5cbiAgICB0aGlzLmVtaXQoJ2NoYW5nZScsdGhpcy52YWx1ZSk7XG5cbiAgfVxuXG4gIGJ1aWxkSW50ZXJmYWNlKCkge1xuXG4gICAgdGhpcy5iYXIgPSBzdmcuY3JlYXRlKCdyZWN0Jyk7XG4gICAgdGhpcy5maWxsYmFyID0gc3ZnLmNyZWF0ZSgncmVjdCcpO1xuICAgIHRoaXMua25vYiA9IHN2Zy5jcmVhdGUoJ2NpcmNsZScpO1xuXG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuYmFyKTtcbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5maWxsYmFyKTtcbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5rbm9iKTtcblxuICB9XG5cbiAgc2l6ZUludGVyZmFjZSgpIHtcblxuICAgIGlmICh0aGlzLndpZHRoIDwgdGhpcy5oZWlnaHQpIHtcbiAgICAgIHRoaXMub3JpZW50YXRpb24gPSAndmVydGljYWwnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9yaWVudGF0aW9uID0gJ2hvcml6b250YWwnO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnBvc2l0aW9uKSB7XG4gICAgICB0aGlzLnBvc2l0aW9uLnJlc2l6ZShbMCx0aGlzLndpZHRoXSxbdGhpcy5oZWlnaHQsMF0pO1xuICAgIH1cblxuICAgIGxldCB4LCB5LCB3LCBoLCBiYXJPZmZzZXQsIGNvcm5lclJhZGl1cztcbiAgICB0aGlzLmtub2JEYXRhID0ge1xuICAgICAgbGV2ZWw6IDAsXG4gICAgICByOiAwXG4gICAgfTtcblxuICAgIGlmICh0aGlzLm9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICB0aGlzLnRoaWNrbmVzcyA9IHRoaXMud2lkdGggLyAyO1xuICAgIFx0eCA9IHRoaXMud2lkdGgvMjtcbiAgICBcdHkgPSAwO1xuICAgIFx0dyA9IHRoaXMudGhpY2tuZXNzO1xuICAgIFx0aCA9IHRoaXMuaGVpZ2h0O1xuICAgICAgdGhpcy5rbm9iRGF0YS5yID0gdGhpcy50aGlja25lc3MgKiAwLjg7XG4gICAgXHR0aGlzLmtub2JEYXRhLmxldmVsID0gaC10aGlzLmtub2JEYXRhLnItdGhpcy5ub3JtYWxpemVkKihoLXRoaXMua25vYkRhdGEucioyKTtcbiAgICAgIGJhck9mZnNldCA9ICd0cmFuc2xhdGUoJyt0aGlzLnRoaWNrbmVzcyooLTEpLzIrJywwKSc7XG4gICAgICBjb3JuZXJSYWRpdXMgPSB3LzI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudGhpY2tuZXNzID0gdGhpcy5oZWlnaHQgLyAyO1xuICAgIFx0eCA9IDA7XG4gICAgXHR5ID0gdGhpcy5oZWlnaHQvMjtcbiAgICBcdHcgPSB0aGlzLndpZHRoO1xuICAgIFx0aCA9IHRoaXMudGhpY2tuZXNzO1xuICAgICAgdGhpcy5rbm9iRGF0YS5yID0gdGhpcy50aGlja25lc3MgKiAwLjg7XG4gICAgXHR0aGlzLmtub2JEYXRhLmxldmVsID0gdGhpcy5ub3JtYWxpemVkKih3LXRoaXMua25vYkRhdGEucioyKSt0aGlzLmtub2JEYXRhLnI7XG4gICAgICBiYXJPZmZzZXQgPSAndHJhbnNsYXRlKDAsJyt0aGlzLnRoaWNrbmVzcyooLTEpLzIrJyknO1xuICAgICAgY29ybmVyUmFkaXVzID0gaC8yO1xuICAgIH1cblxuICAgIHRoaXMuYmFyLnNldEF0dHJpYnV0ZSgneCcseCk7XG4gICAgdGhpcy5iYXIuc2V0QXR0cmlidXRlKCd5Jyx5KTtcbiAgICB0aGlzLmJhci5zZXRBdHRyaWJ1dGUoJ3RyYW5zZm9ybScsYmFyT2Zmc2V0KTtcbiAgICB0aGlzLmJhci5zZXRBdHRyaWJ1dGUoJ3J4Jyxjb3JuZXJSYWRpdXMpOyAvLyBjb3JuZXIgcmFkaXVzXG4gICAgdGhpcy5iYXIuc2V0QXR0cmlidXRlKCdyeScsY29ybmVyUmFkaXVzKTtcbiAgICB0aGlzLmJhci5zZXRBdHRyaWJ1dGUoJ3dpZHRoJyx3KTtcbiAgICB0aGlzLmJhci5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsaCk7XG5cbiAgICBpZiAodGhpcy5vcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgdGhpcy5maWxsYmFyLnNldEF0dHJpYnV0ZSgneCcseCk7XG4gICAgICB0aGlzLmZpbGxiYXIuc2V0QXR0cmlidXRlKCd5Jyx0aGlzLmtub2JEYXRhLmxldmVsKTtcbiAgICAgIHRoaXMuZmlsbGJhci5zZXRBdHRyaWJ1dGUoJ3dpZHRoJyx3KTtcbiAgICAgIHRoaXMuZmlsbGJhci5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsaC10aGlzLmtub2JEYXRhLmxldmVsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5maWxsYmFyLnNldEF0dHJpYnV0ZSgneCcsMCk7XG4gICAgICB0aGlzLmZpbGxiYXIuc2V0QXR0cmlidXRlKCd5Jyx5KTtcbiAgICAgIHRoaXMuZmlsbGJhci5zZXRBdHRyaWJ1dGUoJ3dpZHRoJyx0aGlzLmtub2JEYXRhLmxldmVsKTtcbiAgICAgIHRoaXMuZmlsbGJhci5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsaCk7XG4gICAgfVxuICAgIHRoaXMuZmlsbGJhci5zZXRBdHRyaWJ1dGUoJ3RyYW5zZm9ybScsYmFyT2Zmc2V0KTtcbiAgICB0aGlzLmZpbGxiYXIuc2V0QXR0cmlidXRlKCdyeCcsY29ybmVyUmFkaXVzKTtcbiAgICB0aGlzLmZpbGxiYXIuc2V0QXR0cmlidXRlKCdyeScsY29ybmVyUmFkaXVzKTtcblxuICAgIGlmICh0aGlzLm9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICB0aGlzLmtub2Iuc2V0QXR0cmlidXRlKCdjeCcseCk7XG4gICAgICB0aGlzLmtub2Iuc2V0QXR0cmlidXRlKCdjeScsdGhpcy5rbm9iRGF0YS5sZXZlbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMua25vYi5zZXRBdHRyaWJ1dGUoJ2N4Jyx0aGlzLmtub2JEYXRhLmxldmVsKTtcbiAgICAgIHRoaXMua25vYi5zZXRBdHRyaWJ1dGUoJ2N5Jyx5KTtcbiAgICB9XG4gICAgdGhpcy5rbm9iLnNldEF0dHJpYnV0ZSgncicsdGhpcy5rbm9iRGF0YS5yKTtcblxuICB9XG5cbiAgY29sb3JJbnRlcmZhY2UoKSB7XG4gICAgdGhpcy5iYXIuc2V0QXR0cmlidXRlKCdmaWxsJywgdGhpcy5jb2xvcnMuZmlsbCk7XG4gICAgdGhpcy5maWxsYmFyLnNldEF0dHJpYnV0ZSgnZmlsbCcsIHRoaXMuY29sb3JzLmFjY2VudCk7XG4gICAgdGhpcy5rbm9iLnNldEF0dHJpYnV0ZSgnZmlsbCcsIHRoaXMuY29sb3JzLmFjY2VudCk7XG4gIH1cblxuXG4gIHJlbmRlcigpIHtcbiAgICBpZiAoIXRoaXMuY2xpY2tlZCkge1xuICAgICAgdGhpcy5rbm9iRGF0YS5yID0gdGhpcy50aGlja25lc3MqMC43NTtcbiAgICB9XG4gICAgdGhpcy5rbm9iLnNldEF0dHJpYnV0ZSgncicsdGhpcy5rbm9iRGF0YS5yKTtcblxuICAgIGlmICh0aGlzLm9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gIFx0ICAgdGhpcy5rbm9iRGF0YS5sZXZlbCA9IHRoaXMua25vYkRhdGEucit0aGlzLl92YWx1ZS5ub3JtYWxpemVkKih0aGlzLmhlaWdodC10aGlzLmtub2JEYXRhLnIqMik7XG4gICAgICAgdGhpcy5rbm9iLnNldEF0dHJpYnV0ZSgnY3knLHRoaXMuaGVpZ2h0IC0gdGhpcy5rbm9iRGF0YS5sZXZlbCk7XG4gICAgICAgdGhpcy5maWxsYmFyLnNldEF0dHJpYnV0ZSgneScsdGhpcy5oZWlnaHQgLSB0aGlzLmtub2JEYXRhLmxldmVsKTtcbiAgICAgICB0aGlzLmZpbGxiYXIuc2V0QXR0cmlidXRlKCdoZWlnaHQnLHRoaXMua25vYkRhdGEubGV2ZWwpO1xuICAgIH0gZWxzZSB7XG4gIFx0ICAgdGhpcy5rbm9iRGF0YS5sZXZlbCA9IHRoaXMuX3ZhbHVlLm5vcm1hbGl6ZWQqKHRoaXMud2lkdGgtdGhpcy5rbm9iRGF0YS5yKjIpK3RoaXMua25vYkRhdGEucjtcbiAgICAgICB0aGlzLmtub2Iuc2V0QXR0cmlidXRlKCdjeCcsdGhpcy5rbm9iRGF0YS5sZXZlbCk7XG4gICAgICAgdGhpcy5maWxsYmFyLnNldEF0dHJpYnV0ZSgneCcsMCk7XG4gICAgICAgdGhpcy5maWxsYmFyLnNldEF0dHJpYnV0ZSgnd2lkdGgnLHRoaXMua25vYkRhdGEubGV2ZWwpO1xuICAgIH1cbiAgfVxuXG5cbiAgY2xpY2soKSB7XG4gICAgdGhpcy5rbm9iRGF0YS5yID0gdGhpcy50aGlja25lc3MqMC45O1xuICAgIHRoaXMucG9zaXRpb24uYW5jaG9yID0gdGhpcy5tb3VzZTtcbiAgICB0aGlzLm1vdmUoKTtcbiAgfVxuXG4gIG1vdmUoKSB7XG4gICAgaWYgKHRoaXMuY2xpY2tlZCkge1xuICAgICAgdGhpcy5wb3NpdGlvbi51cGRhdGUodGhpcy5tb3VzZSk7XG4gICAgICB0aGlzLl92YWx1ZS51cGRhdGVOb3JtYWwoIHRoaXMucG9zaXRpb24udmFsdWUgKTtcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJyx0aGlzLl92YWx1ZS52YWx1ZSk7XG4gICAgICB0aGlzLnJlbmRlcigpO1xuXG4gICAgfVxuICB9XG5cbiAgcmVsZWFzZSgpIHtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgZ2V0IG5vcm1hbGl6ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlLm5vcm1hbGl6ZWQ7XG4gIH1cblxuICAvKipcbiAgVGhlIHNsaWRlcidzIGN1cnJlbnQgdmFsdWUuIElmIHNldCBtYW51YWxseSwgd2lsbCB1cGRhdGUgdGhlIGludGVyZmFjZSBhbmQgdHJpZ2dlciB0aGUgb3V0cHV0IGV2ZW50LlxuICBAdHlwZSB7bnVtYmVyfVxuICBAZXhhbXBsZSBzbGlkZXIudmFsdWUgPSAxMDtcbiAgKi9cbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZS52YWx1ZTtcbiAgfVxuICBzZXQgdmFsdWUodikge1xuICAgIHRoaXMuX3ZhbHVlLnVwZGF0ZSh2KTtcbiAgICB0aGlzLnBvc2l0aW9uLnZhbHVlID0gdGhpcy5fdmFsdWUubm9ybWFsaXplZDtcbiAgICB0aGlzLmVtaXQoJ2NoYW5nZScsdGhpcy5fdmFsdWUudmFsdWUpO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICAvKipcbiAgTG93ZXIgbGltaXQgb2YgdGhlIHNsaWRlcnMncyBvdXRwdXQgcmFuZ2VcbiAgQHR5cGUge251bWJlcn1cbiAgQGV4YW1wbGUgc2xpZGVyLm1pbiA9IDEwMDA7XG4gICovXG4gIGdldCBtaW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlLm1pbjtcbiAgfVxuICBzZXQgbWluKHYpIHtcbiAgICB0aGlzLl92YWx1ZS5taW4gPSB2O1xuICB9XG5cbiAgLyoqXG4gIFVwcGVyIGxpbWl0IG9mIHRoZSBzbGlkZXIncyBvdXRwdXQgcmFuZ2VcbiAgQHR5cGUge251bWJlcn1cbiAgQGV4YW1wbGUgc2xpZGVyLm1heCA9IDEwMDA7XG4gICovXG4gIGdldCBtYXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlLm1heDtcbiAgfVxuICBzZXQgbWF4KHYpIHtcbiAgICB0aGlzLl92YWx1ZS5tYXggPSB2O1xuICB9XG5cbiAgLyoqXG4gIFRoZSBpbmNyZW1lbnQgdGhhdCB0aGUgc2xpZGVyJ3MgdmFsdWUgY2hhbmdlcyBieS5cbiAgQHR5cGUge251bWJlcn1cbiAgQGV4YW1wbGUgc2xpZGVyLnN0ZXAgPSA1O1xuICAqL1xuICBnZXQgc3RlcCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWUuc3RlcDtcbiAgfVxuICBzZXQgc3RlcCh2KSB7XG4gICAgdGhpcy5fdmFsdWUuc3RlcCA9IHY7XG4gIH1cblxuICAvKipcbiAgQWJzb2x1dGUgbW9kZSAoc2xpZGVyJ3MgdmFsdWUganVtcHMgdG8gbW91c2UgY2xpY2sgcG9zaXRpb24pIG9yIHJlbGF0aXZlIG1vZGUgKG1vdXNlIGRyYWcgY2hhbmdlcyB2YWx1ZSByZWxhdGl2ZSB0byBpdHMgY3VycmVudCBwb3NpdGlvbikuIERlZmF1bHQ6IFwicmVsYXRpdmVcIi5cbiAgQHR5cGUge3N0cmluZ31cbiAgQGV4YW1wbGUgc2xpZGVyLm1vZGUgPSBcInJlbGF0aXZlXCI7XG4gICovXG4gIGdldCBtb2RlKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLm1vZGU7XG4gIH1cbiAgc2V0IG1vZGUodikge1xuICAgIHRoaXMucG9zaXRpb24ubW9kZSA9IHY7XG4gIH1cblxuXG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vanNoaW50LWxvYWRlciEuL2xpYi9pbnRlcmZhY2VzL3NsaWRlci5qcyIsIid1c2Ugc3RyaWN0JztcblxubGV0IHN2ZyA9IHJlcXVpcmUoJy4uL3V0aWwvc3ZnJyk7XG5sZXQgVG9nZ2xlTW9kZWwgPSByZXF1aXJlKCcuLi9tb2RlbHMvdG9nZ2xlJyk7XG5sZXQgSW50ZXJmYWNlID0gcmVxdWlyZSgnLi4vY29yZS9pbnRlcmZhY2UnKTtcblxuLyoqXG4qIFRvZ2dsZVxuKlxuKiBAZGVzY3JpcHRpb24gQmluYXJ5IHN3aXRjaFxuKlxuKiBAZGVtbyA8c3BhbiBuZXh1cy11aT1cInRvZ2dsZVwiPjwvc3Bhbj5cbipcbiogQGV4YW1wbGVcbiogdmFyIHRvZ2dsZSA9IG5ldyBOZXh1cy5Ub2dnbGUoJyN0YXJnZXQnKVxuKlxuKiBAZXhhbXBsZVxuKiB2YXIgdG9nZ2xlID0gbmV3IE5leHVzLlRvZ2dsZSgnI3RhcmdldCcse1xuKiAgICAgJ3NpemUnOiBbNDAsMjBdLFxuKiAgICAgJ3N0YXRlJzogZmFsc2VcbiogfSlcbipcbiogQG91dHB1dFxuKiBjaGFuZ2VcbiogRmlyZXMgYW55IHRpbWUgdGhlIGludGVyZmFjZSdzIHZhbHVlIGNoYW5nZXMuIDxicj5cbiogUGFyYW1ldGVyOiBUaGUgYm9vbGVhbiBzdGF0ZSBvZiB0aGUgaW50ZXJmYWNlLlxuKlxuKiBAb3V0cHV0ZXhhbXBsZVxuKiB0b2dnbGUub24oJ2NoYW5nZScsZnVuY3Rpb24odikge1xuKiAgIGNvbnNvbGUubG9nKHYpO1xuKiB9KVxuKlxuKlxuKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZ2dsZSBleHRlbmRzIEludGVyZmFjZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICBsZXQgb3B0aW9ucyA9IFsndmFsdWUnXTtcblxuICAgIGxldCBkZWZhdWx0cyA9IHtcbiAgICAgICdzaXplJzogWzQwLDIwXSxcbiAgICAgICd0YXJnZXQnOiBmYWxzZSxcbiAgICAgICdzdGF0ZSc6IGZhbHNlXG4gICAgfTtcblxuICAgIHN1cGVyKGFyZ3VtZW50cyxvcHRpb25zLGRlZmF1bHRzKTtcblxuICAgIHRoaXMuX3N0YXRlID0gbmV3IFRvZ2dsZU1vZGVsKHRoaXMuc2V0dGluZ3Muc3RhdGUpO1xuXG4gICAgdGhpcy5pbml0KCk7XG5cbiAgfVxuXG4gIGJ1aWxkSW50ZXJmYWNlKCkge1xuXG4gICAgdGhpcy5iYXIgPSBzdmcuY3JlYXRlKCdyZWN0Jyk7XG4gICAgdGhpcy5rbm9iID0gc3ZnLmNyZWF0ZSgnY2lyY2xlJyk7XG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuYmFyKTtcbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5rbm9iKTtcblxuICB9XG5cbiAgc2l6ZUludGVyZmFjZSgpIHtcblxuICAgIGlmICh0aGlzLmhlaWdodCA8IHRoaXMud2lkdGgvMikge1xuICAgICAgdGhpcy5rbm9iU2l6ZSA9IHRoaXMuaGVpZ2h0LzI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMua25vYlNpemUgPSB0aGlzLndpZHRoLzQ7XG4gICAgfVxuXG4gICAgdGhpcy5iYXIuc2V0QXR0cmlidXRlKCd4Jyx0aGlzLndpZHRoLzIgLSB0aGlzLmtub2JTaXplKjEuNSk7XG4gICAgdGhpcy5iYXIuc2V0QXR0cmlidXRlKCd5Jyx0aGlzLmhlaWdodC8yIC0gdGhpcy5rbm9iU2l6ZS8yKTtcbiAgICB0aGlzLmJhci5zZXRBdHRyaWJ1dGUoJ3J4Jyx0aGlzLmtub2JTaXplLzIpO1xuICAgIHRoaXMuYmFyLnNldEF0dHJpYnV0ZSgncnknLHRoaXMua25vYlNpemUvMik7XG4gICAgdGhpcy5iYXIuc2V0QXR0cmlidXRlKCd3aWR0aCcsdGhpcy5rbm9iU2l6ZSozKTtcbiAgICB0aGlzLmJhci5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsdGhpcy5rbm9iU2l6ZSk7XG5cbiAgICB0aGlzLmtub2Iuc2V0QXR0cmlidXRlKCdjeCcsdGhpcy53aWR0aC8yIC0gdGhpcy5rbm9iU2l6ZSk7XG4gICAgdGhpcy5rbm9iLnNldEF0dHJpYnV0ZSgnY3knLHRoaXMuaGVpZ2h0LzIpO1xuICAgIHRoaXMua25vYi5zZXRBdHRyaWJ1dGUoJ3InLHRoaXMua25vYlNpemUpO1xuXG4gIH1cblxuICBjb2xvckludGVyZmFjZSgpIHtcbiAgICB0aGlzLmtub2Iuc2V0QXR0cmlidXRlKCdmaWxsJywgdGhpcy5jb2xvcnMuYWNjZW50KTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICghdGhpcy5zdGF0ZSkge1xuICAgICAgdGhpcy5rbm9iLnNldEF0dHJpYnV0ZSgnY3gnLHRoaXMud2lkdGgvMiAtIHRoaXMua25vYlNpemUpO1xuICAgICAgdGhpcy5iYXIuc2V0QXR0cmlidXRlKCdmaWxsJywgdGhpcy5jb2xvcnMuZmlsbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMua25vYi5zZXRBdHRyaWJ1dGUoJ2N4Jyx0aGlzLndpZHRoLzIgKyB0aGlzLmtub2JTaXplKTtcbiAgICAgIHRoaXMuYmFyLnNldEF0dHJpYnV0ZSgnZmlsbCcsIHRoaXMuY29sb3JzLmFjY2VudCk7XG4gICAgfVxuICB9XG5cbiAgY2xpY2soKSB7XG4gICAgdGhpcy5mbGlwKCk7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgICB0aGlzLmVtaXQoJ2NoYW5nZScsdGhpcy5zdGF0ZSk7XG4gIH1cblxuICAvKipcbiAgV2hldGhlciB0aGUgdG9nZ2xlIGlzIGN1cnJlbnRseSBvbiBvciBvZmYuIFNldHRpbmcgdGhpcyBwcm9wZXJ0eSB3aWxsIHVwZGF0ZSB0aGUgdG9nZ2xlIGludGVyZmFjZSBhbmQgdHJpZ2dlciB0aGUgb3V0cHV0IGV2ZW50LlxuICBAdHlwZSB7Ym9vbGVhbn1cbiAgQGV4YW1wbGUgdG9nZ2xlLnN0YXRlID0gZmFsc2U7XG4gICovXG4gIGdldCBzdGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGUuc3RhdGU7XG4gIH1cbiAgc2V0IHN0YXRlKHZhbHVlKSB7XG4gICAgdGhpcy5fc3RhdGUuZmxpcCh2YWx1ZSk7XG4gICAgdGhpcy5lbWl0KCdjaGFuZ2UnLHRoaXMuc3RhdGUpO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuXG4gIC8qKlxuICAqIFN3aXRjaCB0aGUgdG9nZ2xlIHN0YXRlIHRvIGl0cyBvcHBvc2l0ZSBzdGF0ZVxuICAqIEBleGFtcGxlXG4gICogdG9nZ2xlLmZsaXAoKTtcbiAgKi9cbiAgZmxpcCgpIHtcbiAgICB0aGlzLl9zdGF0ZS5mbGlwKCk7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2pzaGludC1sb2FkZXIhLi9saWIvaW50ZXJmYWNlcy90b2dnbGUuanMiLCIndXNlIHN0cmljdCc7XG5cbmxldCBzdmcgPSByZXF1aXJlKCcuLi91dGlsL3N2ZycpO1xubGV0IEJ1dHRvblRlbXBsYXRlID0gcmVxdWlyZSgnLi4vY29tcG9uZW50cy9idXR0b250ZW1wbGF0ZScpO1xuXG4vKipcbiogQnV0dG9uXG4qXG4qIEBkZXNjcmlwdGlvbiBDaXJjdWxhciBidXR0b24gd2l0aCBvcHRpb25hbCBhZnRlcnRvdWNoLlxuKlxuKiBAZGVtbyA8c3BhbiBuZXh1cy11aT1cImJ1dHRvblwiPjwvc3Bhbj5cbipcbiogQGV4YW1wbGVcbiogdmFyIGJ1dHRvbiA9IG5ldyBOZXh1cy5CdXR0b24oJyN0YXJnZXQnKVxuKlxuKiBAZXhhbXBsZVxuKiB2YXIgYnV0dG9uID0gbmV3IE5leHVzLkJ1dHRvbignI3RhcmdldCcse1xuKiAgICdzaXplJzogWzgwLDgwXSxcbiogICAnbW9kZSc6ICdhZnRlcnRvdWNoJyxcbiogICAnc3RhdGUnOiBmYWxzZVxuKiB9KVxuKlxuKiBAb3V0cHV0XG4qIGNoYW5nZVxuKiBGaXJlcyBhbnkgdGltZSB0aGUgaW50ZXJmYWNlJ3MgdmFsdWUgY2hhbmdlcy4gPGJyPlxuKiBJbiA8Yj5idXR0b24gbW9kZTwvYj4sIDxiPnRvZ2dsZSBtb2RlPC9iPiwgYW5kIDxiPmltcHVsc2UgbW9kZTwvYj4sIHRoZSBvdXRwdXQgZGF0YSBpcyBhIGJvb2xlYW4gZGVzY3JpYmluZyB0aGUgc3RhdGUgb2YgdGhlIGJ1dHRvbi48YnI+XG4qIEluIDxiPmFmdGVydG91Y2ggbW9kZTwvYj4sIHRoZSBvdXRwdXQgZGF0YSBpcyBhbiBvYmplY3QgY29udGFpbmluZyB4ICgwLTEpIGFuZCB5ICgwLTEpIHBvc2l0aW9ucyBvZiBhZnRlcnRvdWNoLlxuKlxuKiBAb3V0cHV0ZXhhbXBsZVxuKiBidXR0b24ub24oJ2NoYW5nZScsZnVuY3Rpb24odikge1xuKiAgIC8vIHYgaXMgdGhlIHZhbHVlIG9mIHRoZSBidXR0b25cbiogICBjb25zb2xlLmxvZyh2KTtcbiogfSlcbipcbiovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbiBleHRlbmRzIEJ1dHRvblRlbXBsYXRlIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIGxldCBvcHRpb25zID0gWydtb2RlJ107XG5cblxuICAgIGxldCBkZWZhdWx0cyA9IHtcbiAgICAgICdzaXplJzogWzgwLDgwXSxcbiAgICAgICdtb2RlJzogJ2FmdGVydG91Y2gnLCAvLyBidXR0b24sIGFmdGVydG91Y2gsIGltcHVsc2UsIHRvZ2dsZVxuICAgICAgJ3N0YXRlJzogZmFsc2VcbiAgICB9O1xuXG4gICAgc3VwZXIoYXJndW1lbnRzLG9wdGlvbnMsZGVmYXVsdHMpO1xuXG5cbiAgICAvKipcbiAgICAqIEludGVyYWN0aW9uIG1vZGU6IHN1cHBvcnRzIFwiYnV0dG9uXCIsIFwiYWZ0ZXJ0b3VjaFwiLCBcImltcHVsc2VcIiwgb3IgXCJ0b2dnbGVcIlxuICAgICogQHR5cGUge3N0cmluZ31cbiAgICAqIEBleGFtcGxlIGJ1dHRvbi5tb2RlID0gJ3RvZ2dsZSc7XG4gICAgKi9cbiAgICB0aGlzLm1vZGUgPSB0aGlzLnNldHRpbmdzLm1vZGU7XG5cbiAgICB0aGlzLmluaXQoKTtcbiAgICB0aGlzLnJlbmRlcigpO1xuXG4gIH1cblxuICBidWlsZEludGVyZmFjZSgpIHtcbiAgICB0aGlzLnBhZCA9IHN2Zy5jcmVhdGUoJ2NpcmNsZScpO1xuICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLnBhZCk7XG5cbiAgICB0aGlzLmludGVyYWN0aW9uVGFyZ2V0ID0gdGhpcy5wYWQ7XG5cbiAgICAvLyBvbmx5IHVzZWQgaWYgaW4gJ2FmdGVydG91Y2gnIG1vZGVcbiAgICB0aGlzLmRlZnMgPSBzdmcuY3JlYXRlKCdkZWZzJyk7XG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuZGVmcyk7XG5cbiAgICB0aGlzLmdyYWRpZW50ID0gc3ZnLnJhZGlhbEdyYWRpZW50KHRoaXMuZGVmcywyKTtcblxuICAgIHRoaXMuZ3JhZGllbnQuc3RvcHNbMF0uc2V0QXR0cmlidXRlKCdvZmZzZXQnLCAnMzAlJyk7XG5cbiAgICB0aGlzLmdyYWRpZW50LnN0b3BzWzFdLnNldEF0dHJpYnV0ZSgnb2Zmc2V0JywgJzEwMCUnKTtcblxuICB9XG5cbiAgc2l6ZUludGVyZmFjZSgpIHtcblxuICAgIHRoaXMucGFkLnNldEF0dHJpYnV0ZSgnY3gnLHRoaXMud2lkdGgvMik7XG4gICAgdGhpcy5wYWQuc2V0QXR0cmlidXRlKCdjeScsdGhpcy5oZWlnaHQvMik7XG4gICAgdGhpcy5wYWQuc2V0QXR0cmlidXRlKCdyJywgTWF0aC5taW4odGhpcy53aWR0aCx0aGlzLmhlaWdodCkgLyAyIC0gdGhpcy53aWR0aC80MCk7XG4gICAgdGhpcy5wYWQuc2V0QXR0cmlidXRlKCdzdHJva2Utd2lkdGgnLCB0aGlzLndpZHRoLzIwKTtcbiAgfVxuXG4gIGNvbG9ySW50ZXJmYWNlKCkge1xuXG4gICAgdGhpcy5ncmFkaWVudC5zdG9wc1swXS5zZXRBdHRyaWJ1dGUoJ3N0b3AtY29sb3InLCB0aGlzLmNvbG9ycy5hY2NlbnQpO1xuICAgIHRoaXMuZ3JhZGllbnQuc3RvcHNbMV0uc2V0QXR0cmlidXRlKCdzdG9wLWNvbG9yJywgdGhpcy5jb2xvcnMuZmlsbCk7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIC8qXG4gICogVXBkYXRlIHRoZSB2aXN1YWwgaW50ZXJmYWNlIHVzaW5nIGl0cyBjdXJyZW50IHN0YXRlXG4gICpcbiAgKiBAZXhhbXBsZVxuICAqIGJ1dHRvbi5yZW5kZXIoKTtcbiAgKi9cbiAgcmVuZGVyKCkge1xuICAgIGlmICghdGhpcy5zdGF0ZSkge1xuICAgICAgdGhpcy5wYWQuc2V0QXR0cmlidXRlKCdmaWxsJywgdGhpcy5jb2xvcnMuZmlsbCk7XG4gICAgICB0aGlzLnBhZC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsIHRoaXMuY29sb3JzLm1lZGl1bUxpZ2h0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMubW9kZT09PSdhZnRlcnRvdWNoJykge1xuICAgICAgICB0aGlzLnBhZC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsICd1cmwoIycrdGhpcy5ncmFkaWVudC5pZCsnKScpO1xuICAgICAgICB0aGlzLmdyYWRpZW50LmVsZW1lbnQuc2V0QXR0cmlidXRlKCdjeCcsICh0aGlzLnBvc2l0aW9uLngqMTAwKSsnJScpO1xuICAgICAgICB0aGlzLmdyYWRpZW50LmVsZW1lbnQuc2V0QXR0cmlidXRlKCdjeScsICgoMS10aGlzLnBvc2l0aW9uLnkpKjEwMCkrJyUnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucGFkLnNldEF0dHJpYnV0ZSgnc3Ryb2tlJywgdGhpcy5jb2xvcnMuYWNjZW50KTtcbiAgICAgIH1cbiAgICAgIHRoaXMucGFkLnNldEF0dHJpYnV0ZSgnZmlsbCcsIHRoaXMuY29sb3JzLmFjY2VudCk7XG4gICAgfVxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vanNoaW50LWxvYWRlciEuL2xpYi9pbnRlcmZhY2VzL2J1dHRvbi5qcyIsIid1c2Ugc3RyaWN0JztcblxubGV0IHN2ZyA9IHJlcXVpcmUoJy4uL3V0aWwvc3ZnJyk7XG5sZXQgbWF0aCA9IHJlcXVpcmUoJy4uL3V0aWwvbWF0aCcpO1xubGV0IFRvZ2dsZU1vZGVsID0gcmVxdWlyZSgnLi4vbW9kZWxzL3RvZ2dsZScpO1xubGV0IEludGVyZmFjZSA9IHJlcXVpcmUoJy4uL2NvcmUvaW50ZXJmYWNlJyk7XG5cbi8qKlxuQnV0dG9uIFRlbXBsYXRlXG4qL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b25UZW1wbGF0ZSBleHRlbmRzIEludGVyZmFjZSB7XG5cbiAgY29uc3RydWN0b3IoYXJncyxvcHRpb25zLGRlZmF1bHRzKSB7XG5cbiAgICBzdXBlcihhcmdzLG9wdGlvbnMsZGVmYXVsdHMpO1xuXG4gICAgdGhpcy5tb2RlID0gdGhpcy5zZXR0aW5ncy5tb2RlIHx8ICdidXR0b24nO1xuXG4gICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwXG4gICAgfTtcblxuICAgIHRoaXMuX3N0YXRlID0gbmV3IFRvZ2dsZU1vZGVsKHRoaXMuc2V0dGluZ3Muc3RhdGUpO1xuXG4gIH1cblxuICBidWlsZEludGVyZmFjZSgpIHtcbiAgICB0aGlzLnBhZCA9IHN2Zy5jcmVhdGUoJ2NpcmNsZScpO1xuICAgIHRoaXMucGFkLnNldEF0dHJpYnV0ZSgnZmlsbCcsICcjZDE4Jyk7XG4gICAgdGhpcy5wYWQuc2V0QXR0cmlidXRlKCdzdHJva2UnLCAnI2QxOCcpO1xuICAgIHRoaXMucGFkLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLXdpZHRoJywgNCk7XG5cbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5wYWQpO1xuXG4gICAgdGhpcy5pbnRlcmFjdGlvblRhcmdldCA9IHRoaXMucGFkO1xuXG4gICAgdGhpcy5zaXplSW50ZXJmYWNlKCk7XG4gIH1cblxuICBzaXplSW50ZXJmYWNlKCkge1xuICAgIHRoaXMucGFkLnNldEF0dHJpYnV0ZSgnY3gnLHRoaXMud2lkdGgvMik7XG4gICAgdGhpcy5wYWQuc2V0QXR0cmlidXRlKCdjeScsdGhpcy5oZWlnaHQvMik7XG4gICAgdGhpcy5wYWQuc2V0QXR0cmlidXRlKCdyJywgTWF0aC5taW4odGhpcy53aWR0aCx0aGlzLmhlaWdodCkgLyAyIC0gMik7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKCF0aGlzLnN0YXRlKSB7XG4gICAgICB0aGlzLnBhZC5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCB0aGlzLmNvbG9ycy5maWxsKTtcbiAgICAgIHRoaXMucGFkLnNldEF0dHJpYnV0ZSgnc3Ryb2tlJywgdGhpcy5jb2xvcnMubWVkaXVtTGlnaHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBhZC5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCB0aGlzLmNvbG9ycy5hY2NlbnQpO1xuICAgICAgdGhpcy5wYWQuc2V0QXR0cmlidXRlKCdzdHJva2UnLCB0aGlzLmNvbG9ycy5hY2NlbnQpO1xuICAgIH1cbiAgfVxuXG4gIGRvd24ocGFpbnRicnVzaCkge1xuICAgIHN3aXRjaCAodGhpcy5tb2RlKSB7XG4gICAgICBjYXNlICdpbXB1bHNlJzpcbiAgICAgICAgdGhpcy50dXJuT24oKTtcbiAgICAgICAgaWYgKHRoaXMudGltZW91dCkge1xuICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQodGhpcy50dXJuT2ZmLmJpbmQodGhpcyksMzApO1xuICAgIC8vICAgIHRoaXMuZW1pdCgnY2hhbmdlJyx0aGlzLnN0YXRlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdidXR0b24nOlxuICAgICAgICB0aGlzLnR1cm5PbigpO1xuICAgIC8vICAgIHRoaXMuZW1pdCgnY2hhbmdlJyx0aGlzLnN0YXRlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdhZnRlcnRvdWNoJzpcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICB4OiBtYXRoLmNsaXAodGhpcy5tb3VzZS54IC8gdGhpcy53aWR0aCwwLDEpLFxuICAgICAgICAgIHk6IG1hdGguY2xpcCgxLXRoaXMubW91c2UueSAvIHRoaXMuaGVpZ2h0LDAsMSlcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy50dXJuT24oKTtcbiAgICAvLyAgICB0aGlzLmVtaXQoJ2NoYW5nZScse1xuICAgIC8vICAgICAgc3RhdGU6IHRoaXMuc3RhdGUsXG4gICAgLy8gICAgICB4OiB0aGlzLnBvc2l0aW9uLngsXG4gICAgLy8gICAgICB5OiB0aGlzLnBvc2l0aW9uLnksXG4gICAgLy8gICAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndG9nZ2xlJzpcbiAgICAgICAgdGhpcy5mbGlwKHBhaW50YnJ1c2gpO1xuICAgIC8vICAgIHRoaXMuZW1pdCgnY2hhbmdlJyx0aGlzLnN0YXRlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gIH1cblxuICBiZW5kKG1vdXNlKSB7XG4gICAgaWYgKHRoaXMubW9kZT09PSdhZnRlcnRvdWNoJykge1xuICAgICAgdGhpcy5tb3VzZSA9IG1vdXNlIHx8IHRoaXMubW91c2U7XG4gICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICB4OiBtYXRoLmNsaXAodGhpcy5tb3VzZS54IC8gdGhpcy53aWR0aCwwLDEpLFxuICAgICAgICB5OiBtYXRoLmNsaXAoMSAtIHRoaXMubW91c2UueSAvIHRoaXMuaGVpZ2h0LDAsMSlcbiAgICAgIH07XG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZScse1xuICAgICAgICBzdGF0ZTogdGhpcy5zdGF0ZSxcbiAgICAgICAgeDogdGhpcy5wb3NpdGlvbi54LFxuICAgICAgICB5OiB0aGlzLnBvc2l0aW9uLnksXG4gICAgICB9KTtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgdXAoKSB7XG4gICAgc3dpdGNoICh0aGlzLm1vZGUpIHtcbiAgICAgIGNhc2UgJ2J1dHRvbic6XG4gICAgICAgIHRoaXMudHVybk9mZigpO1xuICAgICAgLy8gIHRoaXMuZW1pdCgnY2hhbmdlJyx0aGlzLnN0YXRlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdhZnRlcnRvdWNoJzpcbiAgICAgICAgdGhpcy50dXJuT2ZmKCk7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgeDogbWF0aC5jbGlwKHRoaXMubW91c2UueCAvIHRoaXMud2lkdGgsMCwxKSxcbiAgICAgICAgICB5OiBtYXRoLmNsaXAoMSAtIHRoaXMubW91c2UueSAvIHRoaXMuaGVpZ2h0LDAsMSlcbiAgICAgICAgfTtcbiAgICAgIC8vICB0aGlzLmVtaXQoJ2NoYW5nZScse1xuICAgICAgLy8gICAgc3RhdGU6IHRoaXMuc3RhdGUsXG4gICAgICAvLyAgICB4OiB0aGlzLnBvc2l0aW9uLngsXG4gICAgICAvLyAgICB5OiB0aGlzLnBvc2l0aW9uLnksXG4gICAgICAvLyAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIC8qIG92ZXJ3cml0YWJsZSBpbnRlcmFjdGlvbiBoYW5kbGVycyAqL1xuXG4gIGNsaWNrKCkge1xuICAgIHRoaXMuZG93bigpO1xuICB9XG4gIG1vdmUoKSB7XG4gICAgdGhpcy5iZW5kKCk7XG4gIH1cbiAgcmVsZWFzZSgpIHtcbiAgICB0aGlzLnVwKCk7XG4gIH1cblxuICAvKipcbiAgV2hldGhlciB0aGUgYnV0dG9uIGlzIG9uIChwcmVzc2VkKSBvciBvZmYgKG5vdCBwcmVzc2VkKVxuICBAdHlwZSB7Ym9vbGVhbn1cbiAgQGV4YW1wbGUgYnV0dG9uLnN0YXRlID0gdHJ1ZTtcbiAgKi9cbiAgZ2V0IHN0YXRlKCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZS5zdGF0ZTtcbiAgfVxuICBzZXQgc3RhdGUodmFsdWUpIHtcbiAgICB0aGlzLl9zdGF0ZS5mbGlwKHZhbHVlKTtcbiAgICBpZiAodGhpcy5tb2RlPT09J2FmdGVydG91Y2gnKSB7XG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZScse1xuICAgICAgICBzdGF0ZTogdGhpcy5zdGF0ZSxcbiAgICAgICAgeDogdGhpcy5wb3NpdGlvbi54LFxuICAgICAgICB5OiB0aGlzLnBvc2l0aW9uLnksXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnLHRoaXMuc3RhdGUpO1xuICAgIH1cbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgLyoqXG4gIENoYW5nZSB0aGUgYnV0dG9uIHRvIGl0cyBhbHRlcm5hdGUgc3RhdGUgKG9mZj0+b24sIG9uPT5vZmYpLCBvciBmbGlwIGl0IHRvIGEgc3BlY2lmaWVkIHN0YXRlLlxuICBAcGFyYW0gdmFsdWUge2Jvb2xlYW59IChPcHRpb25hbCkgU3RhdGUgdG8gZmxpcCB0by5cbiAgQGV4YW1wbGUgYnV0dG9uLmZsaXAoKTtcbiAgKi9cbiAgZmxpcCh2YWx1ZSkge1xuICAgIHRoaXMuX3N0YXRlLmZsaXAodmFsdWUpO1xuICAgIGlmICh0aGlzLm1vZGU9PT0nYWZ0ZXJ0b3VjaCcpIHtcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJyx7XG4gICAgICAgIHN0YXRlOiB0aGlzLnN0YXRlLFxuICAgICAgICB4OiB0aGlzLnBvc2l0aW9uLngsXG4gICAgICAgIHk6IHRoaXMucG9zaXRpb24ueSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZScsdGhpcy5zdGF0ZSk7XG4gICAgfVxuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICAvKipcbiAgVHVybiB0aGUgYnV0dG9uJ3Mgc3RhdGUgdG8gdHJ1ZS5cbiAgQGV4YW1wbGUgYnV0dG9uLnR1cm5PbigpO1xuICAqL1xuICB0dXJuT24oZW1pdHRpbmcpIHtcbiAgICB0aGlzLl9zdGF0ZS5vbigpO1xuICAgIGlmIChlbWl0dGluZyE9PWZhbHNlKSB7XG4gICAgICBpZiAodGhpcy5tb2RlPT09J2FmdGVydG91Y2gnKSB7XG4gICAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJyx7XG4gICAgICAgICAgc3RhdGU6IHRoaXMuc3RhdGUsXG4gICAgICAgICAgeDogdGhpcy5wb3NpdGlvbi54LFxuICAgICAgICAgIHk6IHRoaXMucG9zaXRpb24ueSxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVtaXQoJ2NoYW5nZScsdGhpcy5zdGF0ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICAvKipcbiAgVHVybiB0aGUgYnV0dG9uJ3Mgc3RhdGUgdG8gZmFsc2UuXG4gIEBleGFtcGxlIGJ1dHRvbi50dXJuT2ZmKCk7XG4gICovXG4gIHR1cm5PZmYoZW1pdHRpbmcpIHtcbiAgICB0aGlzLl9zdGF0ZS5vZmYoKTtcbiAgICBpZiAoZW1pdHRpbmchPT1mYWxzZSkge1xuICAgICAgaWYgKHRoaXMubW9kZT09PSdhZnRlcnRvdWNoJykge1xuICAgICAgICB0aGlzLmVtaXQoJ2NoYW5nZScse1xuICAgICAgICAgIHN0YXRlOiB0aGlzLnN0YXRlLFxuICAgICAgICAgIHg6IHRoaXMucG9zaXRpb24ueCxcbiAgICAgICAgICB5OiB0aGlzLnBvc2l0aW9uLnksXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnLHRoaXMuc3RhdGUpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vanNoaW50LWxvYWRlciEuL2xpYi9jb21wb25lbnRzL2J1dHRvbnRlbXBsYXRlLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5sZXQgQnV0dG9uVGVtcGxhdGUgPSByZXF1aXJlKCcuLi9jb21wb25lbnRzL2J1dHRvbnRlbXBsYXRlJyk7XG5cbi8qKlxuKiBUZXh0QnV0dG9uXG4qXG4qIEBkZXNjcmlwdGlvbiBUZXh0IGJ1dHRvblxuKlxuKiBAZGVtbyA8c3BhbiBuZXh1cy11aT1cInRleHRCdXR0b25cIj48L3NwYW4+XG4qXG4qIEBleGFtcGxlXG4qIHZhciB0ZXh0YnV0dG9uID0gbmV3IE5leHVzLlRleHRCdXR0b24oJyN0YXJnZXQnKVxuKlxuKiBAZXhhbXBsZVxuKiB2YXIgdGV4dGJ1dHRvbiA9IG5ldyBOZXh1cy5UZXh0QnV0dG9uKCcjdGFyZ2V0Jyx7XG4qICAgICAnc2l6ZSc6IFsxNTAsNTBdLFxuKiAgICAgJ3N0YXRlJzogZmFsc2UsXG4qICAgICAndGV4dCc6ICdQbGF5JyxcbiogICAgICdhbHRlcm5hdGUnOiBmYWxzZVxuKiB9KVxuKlxuKiBAb3V0cHV0XG4qIGNoYW5nZVxuKiBGaXJlcyBhbnkgdGltZSB0aGUgaW50ZXJmYWNlJ3MgdmFsdWUgY2hhbmdlcy4gPGJyPlxuKiBUaGUgZXZlbnQgZGF0YSBpcyBhIDxpPnN0cmluZzwvaT4gb2YgdGhlIHRleHQgb24gdGhlIGJ1dHRvbiBhdCB0aGUgbW9tZW50IGl0IHdhcyBjbGlja2VkLlxuKlxuKiBAb3V0cHV0ZXhhbXBsZVxuKiB0ZXh0YnV0dG9uLm9uKCdjaGFuZ2UnLGZ1bmN0aW9uKHYpIHtcbiogICBjb25zb2xlLmxvZyh2KTtcbiogfSlcbipcbiovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHRCdXR0b24gZXh0ZW5kcyBCdXR0b25UZW1wbGF0ZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICBsZXQgb3B0aW9ucyA9IFsndmFsdWUnXTtcblxuICAgIGxldCBkZWZhdWx0cyA9IHtcbiAgICAgICdzaXplJzogWzE1MCw1MF0sXG4gICAgICAnc3RhdGUnOiBmYWxzZSxcbiAgICAgICd0ZXh0JzogJ1BsYXknLFxuICAgICAgJ2FsdGVybmF0ZSc6IGZhbHNlXG4gICAgfTtcblxuICAgIHN1cGVyKGFyZ3VtZW50cyxvcHRpb25zLGRlZmF1bHRzKTtcblxuICAgIHRoaXMuX3RleHQgPSB0aGlzLnNldHRpbmdzLnRleHQ7XG4gICAgdGhpcy5fYWx0ZXJuYXRlVGV4dCA9IHRoaXMuc2V0dGluZ3MuYWx0ZXJuYXRlO1xuXG4gICAgdGhpcy5pbml0KCk7XG4gICAgdGhpcy5yZW5kZXIoKTtcblxuICAgIHRoaXMuc3RhdGUgPSB0aGlzLnNldHRpbmdzLnN0YXRlO1xuXG4gIH1cblxuICBidWlsZEZyYW1lKCkge1xuXG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5wYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcblxuICAgIHRoaXMudGV4dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLnRleHRFbGVtZW50LmlubmVySFRNTCA9IHRoaXMuX3RleHQ7XG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMudGV4dEVsZW1lbnQpO1xuICB9XG5cbiAgYnVpbGRJbnRlcmZhY2UoKSB7XG5cbiAgfVxuXG4gIGNvbG9ySW50ZXJmYWNlKCkge1xuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5jb2xvciA9IHRoaXMuY29sb3JzLmRhcms7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHNpemVJbnRlcmZhY2UoKSB7XG4gICAgICBsZXQgdGV4dHNpemUgPSB0aGlzLmhlaWdodC8zO1xuICAgICAgbGV0IHRleHRzaXplMiA9ICh0aGlzLndpZHRoIC8gKHRoaXMuX3RleHQubGVuZ3RoICsgMikgKTtcbiAgICAgIHRleHRzaXplID0gTWF0aC5taW4odGV4dHNpemUsdGV4dHNpemUyKTtcbiAgICAgIGlmICh0aGlzLmFsdGVybmF0ZVRleHQpIHtcbiAgICAgICAgbGV0IHRleHRzaXplMyA9ICh0aGlzLndpZHRoIC8gKHRoaXMuYWx0ZXJuYXRlVGV4dC5sZW5ndGggKyAyKSApO1xuICAgICAgICB0ZXh0c2l6ZSA9IE1hdGgubWluKHRleHRzaXplLHRleHRzaXplMyk7XG4gICAgICB9XG4gICAgICBsZXQgc3R5bGVzID0gJ3dpZHRoOiAnICsgdGhpcy53aWR0aCArICdweDsnO1xuICAgICAgc3R5bGVzICs9ICdoZWlnaHQ6ICcgKyB0aGlzLmhlaWdodCArICdweDsnO1xuICAgICAgc3R5bGVzICs9ICdwYWRkaW5nOiAnKyh0aGlzLmhlaWdodC10ZXh0c2l6ZSkvMisncHggMHB4Oyc7XG4gICAgICBzdHlsZXMgKz0gJ2JveC1zaXppbmc6IGJvcmRlci1ib3g7JztcbiAgICAgIHN0eWxlcyArPSAndGV4dC1hbGlnbjogY2VudGVyOyc7XG4gICAgICBzdHlsZXMgKz0gJ2ZvbnQtZmFtaWx5OiBpbmhlcml0Oyc7XG4gICAgICBzdHlsZXMgKz0gJ2ZvbnQtd2VpZ2h0OiA3MDA7JztcbiAgICAgIHN0eWxlcyArPSAnb3BhY2l0eTogMTsnO1xuICAgICAgc3R5bGVzICs9ICdmb250LXNpemU6JyArIHRleHRzaXplICsgJ3B4Oyc7XG4gICAgICB0aGlzLnRleHRFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZXM7XG4gICAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICghdGhpcy5zdGF0ZSkge1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHRoaXMuY29sb3JzLmZpbGw7XG4gICAgICB0aGlzLnRleHRFbGVtZW50LnN0eWxlLmNvbG9yID0gdGhpcy5jb2xvcnMuZGFyaztcbiAgICAgIHRoaXMudGV4dEVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy5fdGV4dDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHRoaXMuY29sb3JzLmFjY2VudDtcbiAgICAgIHRoaXMudGV4dEVsZW1lbnQuc3R5bGUuY29sb3IgPSB0aGlzLmNvbG9ycy5maWxsO1xuICAgICAgaWYgKHRoaXMuYWx0ZXJuYXRlVGV4dCkge1xuICAgICAgICB0aGlzLnRleHRFbGVtZW50LmlubmVySFRNTCA9IHRoaXMuX2FsdGVybmF0ZVRleHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRleHRFbGVtZW50LmlubmVySFRNTCA9IHRoaXMuX3RleHQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gIFRoZSB0ZXh0IHRvIGRpc3BsYXkgd2hlbiB0aGUgYnV0dG9uIGlzIGluIGl0cyBcIm9uXCIgc3RhdGUuIElmIHNldCwgdGhpcyBwdXRzIHRoZSBidXR0b24gaW4gXCJ0b2dnbGVcIiBtb2RlLlxuICBAdHlwZSB7U3RyaW5nfVxuICAqL1xuICBnZXQgYWx0ZXJuYXRlVGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWx0ZXJuYXRlVGV4dDtcbiAgfVxuXG4gIHNldCBhbHRlcm5hdGVUZXh0KHRleHQpIHtcbiAgICBpZiAodGV4dCkge1xuICAgICAgdGhpcy5tb2RlID0gJ3RvZ2dsZSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubW9kZSA9ICdidXR0b24nO1xuICAgIH1cbiAgICB0aGlzLl9hbHRlcm5hdGVUZXh0ID0gdGV4dDtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cblxuICAvKipcbiAgVGhlIHRleHQgdG8gZGlzcGxheS4gKElmIC5hbHRlcm5hdGVUZXh0IGV4aXN0cywgdGhlbiB0aGlzIC50ZXh0IHdpbGwgb25seSBiZSBkaXNwbGF5ZWQgd2hlbiB0aGUgYnV0dG9uIGlzIGluIGl0cyBcIm9mZlwiIHN0YXRlLilcbiAgQHR5cGUge1N0cmluZ31cbiAgKi9cbiAgZ2V0IHRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RleHQ7XG4gIH1cblxuICBzZXQgdGV4dCh0ZXh0KSB7XG4gICAgdGhpcy5fdGV4dCA9IHRleHQ7XG4gICAgdGhpcy5zaXplSW50ZXJmYWNlKCk7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vanNoaW50LWxvYWRlciEuL2xpYi9pbnRlcmZhY2VzL3RleHRidXR0b24uanMiLCIndXNlIHN0cmljdCc7XG5cbi8vbGV0IHN2ZyA9IHJlcXVpcmUoJy4uL3V0aWwvc3ZnJyk7XG5sZXQgSW50ZXJmYWNlID0gcmVxdWlyZSgnLi4vY29yZS9pbnRlcmZhY2UnKTtcbmxldCBCdXR0b24gPSByZXF1aXJlKCcuLi9pbnRlcmZhY2VzL2J1dHRvbicpO1xuXG4vKipcbiogUmFkaW9CdXR0b25cbipcbiogQGRlc2NyaXB0aW9uIEFuIGFycmF5IG9mIGJ1dHRvbnMuIEJ5IGRlZmF1bHQsIHNlbGVjdGluZyBvbmUgYnV0dG9uIHdpbGwgZGVzZWxlY3QgYWxsIG90aGVyIGJ1dHRvbnMsIGJ1dCB0aGlzIGNhbiBiZSBjdXN0b21pemVkIHVzaW5nIHRoZSBBUEkgYmVsb3cuXG4qXG4qIEBkZW1vIDxkaXYgbmV4dXMtdWk9XCJSYWRpb0J1dHRvblwiPjwvZGl2PlxuKlxuKiBAZXhhbXBsZVxuKiB2YXIgcmFkaW9idXR0b24gPSBuZXcgTmV4dXMuUmFkaW9CdXR0b24oJyN0YXJnZXQnKVxuKlxuKiBAZXhhbXBsZVxuKiB2YXIgcmFkaW9idXR0b24gPSBuZXcgTmV4dXMuUmFkaW9CdXR0b24oJyN0YXJnZXQnLHtcbiogICAnc2l6ZSc6IFsxMjAsMjVdLFxuKiAgICdudW1iZXJPZkJ1dHRvbnMnOiA0LFxuKiAgICdhY3RpdmUnOiAtMVxuKiB9KVxuKlxuKiBAb3V0cHV0XG4qIGNoYW5nZVxuKiBGaXJlcyBhbnkgdGltZSB0aGUgaW50ZXJmYWNlJ3MgdmFsdWUgY2hhbmdlcy4gPGJyPlxuKiBUaGUgZXZlbnQgZGF0YSBhbiA8aT5pbnRlZ2VyPC9pPiwgdGhlIGluZGV4IG9mIHRoZSBidXR0b24gdGhhdCBpcyBjdXJyZW50bHkgb24uIElmIG5vIGJ1dHRvbiBpcyBzZWxlY3RlZCwgdGhlIHZhbHVlIHdpbGwgYmUgLTEuXG4qXG4qIEBvdXRwdXRleGFtcGxlXG4qIHJhZGlvYnV0dG9uLm9uKCdjaGFuZ2UnLGZ1bmN0aW9uKHYpIHtcbiogICBjb25zb2xlLmxvZyh2KTtcbiogfSlcbipcbiovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhZGlvQnV0dG9uIGV4dGVuZHMgSW50ZXJmYWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIGxldCBvcHRpb25zID0gWyd2YWx1ZSddO1xuXG4gICAgbGV0IGRlZmF1bHRzID0ge1xuICAgICAgJ3NpemUnOiBbMTIwLDI1XSxcbiAgICAgICdudW1iZXJPZkJ1dHRvbnMnOiA0LFxuICAgICAgJ2FjdGl2ZSc6IC0xXG4gICAgfTtcblxuICAgIHN1cGVyKGFyZ3VtZW50cyxvcHRpb25zLGRlZmF1bHRzKTtcblxuICAgIHRoaXMuYnV0dG9ucyA9IFtdO1xuICAgIHRoaXMuX251bWJlck9mQnV0dG9ucyA9IHRoaXMuc2V0dGluZ3MubnVtYmVyT2ZCdXR0b25zO1xuICAgIHRoaXMuYWN0aXZlID0gdGhpcy5zZXR0aW5ncy5hY3RpdmU7XG5cbiAgICB0aGlzLmluaXQoKTtcbiAgICB0aGlzLnJlbmRlcigpO1xuXG4gIH1cblxuICBidWlsZEZyYW1lKCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMucGFyZW50LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XG4gIH1cblxuICBidWlsZEludGVyZmFjZSgpIHtcblxuICAgIGZvciAobGV0IGk9MDtpPHRoaXMuX251bWJlck9mQnV0dG9ucztpKyspIHtcbiAgICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cbiAgICAgIGxldCBidXR0b24gPSBuZXcgQnV0dG9uKGNvbnRhaW5lciwge1xuICAgICAgICAgIG1vZGU6ICd0b2dnbGUnLFxuICAgICAgICAgIGNvbXBvbmVudDogdHJ1ZSxcbiAgICAgICAgfSwgdGhpcy51cGRhdGUuYmluZCh0aGlzLGkpKTtcblxuICAgICAgdGhpcy5idXR0b25zLnB1c2goYnV0dG9uKTtcbiAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgIH1cblxuICB9XG5cbiAgc2l6ZUludGVyZmFjZSgpIHtcblxuICAgIGxldCBidXR0b25XaWR0aCA9IHRoaXMud2lkdGggLyB0aGlzLl9udW1iZXJPZkJ1dHRvbnM7XG4gICAgbGV0IGJ1dHRvbkhlaWdodCA9IHRoaXMuaGVpZ2h0O1xuXG4gICAgZm9yIChsZXQgaT0wO2k8dGhpcy5fbnVtYmVyT2ZCdXR0b25zO2krKykge1xuICAgICAgdGhpcy5idXR0b25zW2ldLnJlc2l6ZShidXR0b25XaWR0aCxidXR0b25IZWlnaHQpO1xuICAgIH1cblxuICB9XG5cbiAgY29sb3JJbnRlcmZhY2UoKSB7XG4gICAgZm9yIChsZXQgaT0wO2k8dGhpcy5fbnVtYmVyT2ZCdXR0b25zO2krKykge1xuICAgICAgdGhpcy5idXR0b25zW2ldLmNvbG9ycyA9IHRoaXMuY29sb3JzO1xuICAgICAgdGhpcy5idXR0b25zW2ldLnJlbmRlcigpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZShpbmRleCkge1xuICAgIGlmICh0aGlzLmJ1dHRvbnNbaW5kZXhdLnN0YXRlKSB7XG4gICAgICB0aGlzLnNlbGVjdChpbmRleCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGVzZWxlY3QoKTtcbiAgICB9XG4gIC8vICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGZvciAobGV0IGk9MDtpPHRoaXMuYnV0dG9ucy5sZW5ndGg7aSsrKSB7XG4gICAgICBpZiAoaT09PXRoaXMuYWN0aXZlKSB7XG4gICAgICAgIHRoaXMuYnV0dG9uc1tpXS50dXJuT24oZmFsc2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5idXR0b25zW2ldLnR1cm5PZmYoZmFsc2UpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICBTZWxlY3Qgb25lIGJ1dHRvbiBhbmQgZGVzZWxlY3QgYWxsIG90aGVyIGJ1dHRvbnMuXG4gIEBwYXJhbSBpbmRleCB7bnVtYmVyfSBUaGUgaW5kZXggb2YgdGhlIGJ1dHRvbiB0byBzZWxlY3RcbiAgKi9cbiAgc2VsZWN0KGluZGV4KSB7XG4gICAgaWYgKGluZGV4Pj0wICYmIGluZGV4IDwgdGhpcy5idXR0b25zLmxlbmd0aCkge1xuICAgICAgdGhpcy5hY3RpdmUgPSBpbmRleDtcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJyx0aGlzLmFjdGl2ZSk7XG4gICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICBEZXNlbGVjdCBhbGwgYnV0dG9ucy5cbiAgKi9cbiAgZGVzZWxlY3QoKSB7XG4gICAgdGhpcy5hY3RpdmUgPSAtMTtcbiAgICB0aGlzLmVtaXQoJ2NoYW5nZScsdGhpcy5hY3RpdmUpO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBnZXQgbnVtYmVyT2ZCdXR0b25zKCkge1xuICAgIHJldHVybiB0aGlzLl9udW1iZXJPZkJ1dHRvbnM7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIGhvdyBtYW55IGJ1dHRvbnMgYXJlIGluIHRoZSBpbnRlcmZhY2VcbiAgICogQHBhcmFtICB7bnVtYmVyfSBidXR0b25zIEhvdyBtYW55IGJ1dHRvbnMgYXJlIGluIHRoZSBpbnRlcmZhY2VcbiAgICovXG4gIHNldCBudW1iZXJPZkJ1dHRvbnMoYnV0dG9ucykge1xuICAgIHRoaXMuX251bWJlck9mQnV0dG9ucyA9IGJ1dHRvbnM7XG4gICAgZm9yIChsZXQgaT0wO2k8dGhpcy5idXR0b25zLmxlbmd0aDtpKyspIHtcbiAgICAgIHRoaXMuYnV0dG9uc1tpXS5kZXN0cm95KCk7XG4gICAgfVxuICAgIHRoaXMuYnV0dG9ucyA9IFtdO1xuICAvLyAgZm9yIChsZXQgaT0wO2k8dGhpcy5idXR0b25zLmxlbmd0aDtpKyspIHtcbiAgLy8gICAgdGhpcy5idXR0b25zW2ldLmRlc3Ryb3koKTtcbiAgLy8gIH1cbiAgICB0aGlzLmVtcHR5KCk7XG4gICAgdGhpcy5idWlsZEludGVyZmFjZSgpO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vanNoaW50LWxvYWRlciEuL2xpYi9pbnRlcmZhY2VzL3JhZGlvYnV0dG9uLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5sZXQgSW50ZXJmYWNlID0gcmVxdWlyZSgnLi4vY29yZS9pbnRlcmZhY2UnKTtcbmxldCBTdGVwID0gcmVxdWlyZSgnLi4vbW9kZWxzL3N0ZXAnKTtcbmxldCBtYXRoID0gcmVxdWlyZSgnLi4vdXRpbC9tYXRoJyk7XG5cbi8qKlxuKiBOdW1iZXJcbipcbiogQGRlc2NyaXB0aW9uIE51bWJlciBpbnRlcmZhY2Ugd2hpY2ggaXMgY29udHJvbGxhYmxlIGJ5IGRyYWdnaW5nIG9yIHR5cGluZy5cbipcbiogQGRlbW8gPHNwYW4gbmV4dXMtdWk9XCJudW1iZXJcIj48L3NwYW4+XG4qXG4qIEBleGFtcGxlXG4qIHZhciBudW1iZXIgPSBuZXcgTmV4dXMuTnVtYmVyKCcjdGFyZ2V0JylcbipcbiogQGV4YW1wbGVcbiogdmFyIG51bWJlciA9IG5ldyBOZXh1cy5OdW1iZXIoJyN0YXJnZXQnLHtcbiogICAnc2l6ZSc6IFs2MCwzMF0sXG4qICAgJ3ZhbHVlJzogMCxcbiogICAnbWluJzogMCxcbiogICAnbWF4JzogMjAwMDAsXG4qICAgJ3N0ZXAnOiAxXG4qIH0pXG4qXG4qIEBvdXRwdXRcbiogY2hhbmdlXG4qIEZpcmVzIGFueSB0aW1lIHRoZSBpbnRlcmZhY2UncyB2YWx1ZSBjaGFuZ2VzLiA8YnI+XG4qIFRoZSBldmVudCBkYXRhIGlzIHRoZSBudW1iZXIgdmFsdWUgb2YgdGhlIGludGVyZmFjZS5cbipcbiogQG91dHB1dGV4YW1wbGVcbiogbnVtYmVyLm9uKCdjaGFuZ2UnLGZ1bmN0aW9uKHYpIHtcbiogICBjb25zb2xlLmxvZyh2KTtcbiogfSlcbipcbipcbiovXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTnVtYmVyIGV4dGVuZHMgSW50ZXJmYWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIGxldCBvcHRpb25zID0gWyd2YWx1ZSddO1xuXG4gICAgbGV0IGRlZmF1bHRzID0ge1xuICAgICAgJ3NpemUnOiBbNjAsMzBdLFxuICAgICAgJ3ZhbHVlJzogMCxcbiAgICAgICdtaW4nOiAwLFxuICAgICAgJ21heCc6IDIwMDAwLFxuICAgICAgJ3N0ZXAnOiAxXG4gICAgfTtcblxuICAgIHN1cGVyKGFyZ3VtZW50cyxvcHRpb25zLGRlZmF1bHRzKTtcblxuICAgIHRoaXMuX3ZhbHVlID0gbmV3IFN0ZXAodGhpcy5zZXR0aW5ncy5taW4sdGhpcy5zZXR0aW5ncy5tYXgsdGhpcy5zZXR0aW5ncy5zdGVwLHRoaXMuc2V0dGluZ3MudmFsdWUpO1xuXG4gICAgLypcbiAgICBEZWZhdWx0OiAyLiBIb3cgbWFueSBkZWNpbWFsIHBsYWNlcyB0byBjbGlwIHRoZSBudW1iZXIncyB2aXN1YWwgcmVuZGVyaW5nIHRvLiBUaGlzIGRvZXMgbm90IGFmZmVjdCBudW1iZXIncyBhY3R1YWwgdmFsdWUgb3V0cHV0IC0tIGZvciB0aGF0LCBzZXQgdGhlIHN0ZXAgcHJvcGVydHkgdG8gLjAxLCAuMSwgb3IgMS5cbiAgICBAdHlwZSB7bnVtYmVyfVxuICAgIEBleGFtcGxlIG51bWJlci5kZWNpbWFsUGxhY2VzID0gMjtcbiAgICAqL1xuICAgIHRoaXMuZGVjaW1hbFBsYWNlcyA9IDI7XG4gICAgdGhpcy5hY3R1YWwgPSAwO1xuXG4gICAgdGhpcy5tYXggPSB0aGlzLl92YWx1ZS5tYXg7XG5cbiAgICB0aGlzLm1pbiA9IHRoaXMuX3ZhbHVlLm1pbjtcblxuICAgIHRoaXMuc3RlcCA9IHRoaXMuX3ZhbHVlLnN0ZXA7XG5cbiAgICB0aGlzLmluaXQoKTtcbiAgICB0aGlzLnJlbmRlcigpO1xuXG4gIH1cblxuICBidWlsZEZyYW1lKCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdGhpcy5lbGVtZW50LnR5cGUgPSAndGV4dCc7XG5cbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGZ1bmN0aW9uICgpIHtcbiAgXHQgIHRoaXMuZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLmNvbG9ycy5maWxsO1xuICBcdCAgdGhpcy5lbGVtZW50LnN0eWxlLmNvbG9yID0gdGhpcy5jb2xvcnMuZGFyaztcbiAgXHQgIGlmICh0aGlzLmVsZW1lbnQudmFsdWUgIT09IHRoaXMudmFsdWUpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHBhcnNlRmxvYXQodGhpcy5lbGVtZW50LnZhbHVlKTtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgXHQgIH1cbiAgXHR9LmJpbmQodGhpcykpO1xuXG5cbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uIChlKSB7XG4gIFx0ICBpZiAoZS53aGljaCA8IDQ4IHx8IGUud2hpY2ggPiA1Nykge1xuICBcdCAgXHRpZiAoZS53aGljaCAhPT0gMTg5ICYmIGUud2hpY2ggIT09IDE5MCAmJiBlLndoaWNoICE9PSA4KSB7XG4gIFx0ICBcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBcdCAgXHR9XG4gIFx0ICB9XG4gIFx0ICBpZiAoZS53aGljaD09PTEzKSB7XG4gIFx0ICBcdHRoaXMuZWxlbWVudC5ibHVyKCk7XG4gICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLmVsZW1lbnQudmFsdWU7XG4gICAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJyx0aGlzLnZhbHVlKTtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgXHQgIH1cbiAgXHR9LmJpbmQodGhpcykpO1xuXG4gICAgdGhpcy5wYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcblxuICB9XG5cbiAgc2l6ZUludGVyZmFjZSgpIHtcblxuICAgIHRoaXMuX21pbkRpbWVuc2lvbiA9IE1hdGgubWluKHRoaXMud2lkdGgsdGhpcy5oZWlnaHQpO1xuXG4gICAgbGV0IHN0eWxlcyA9ICd3aWR0aDogJyArIHRoaXMud2lkdGggKyAncHg7JztcbiAgICBzdHlsZXMgKz0gJ2hlaWdodDogJyArIHRoaXMuaGVpZ2h0ICsgJ3B4Oyc7XG4gICAgc3R5bGVzICs9ICdiYWNrZ3JvdW5kLWNvbG9yOiAjZTdlN2U3Oyc7XG4gICAgc3R5bGVzICs9ICdjb2xvcjogIzMzMzsnO1xuICAgIHN0eWxlcyArPSAnZm9udC1mYW1pbHk6IGFyaWFsOyc7XG4gICAgc3R5bGVzICs9ICdmb250LXdlaWdodDogNTAwOyc7XG4gICAgc3R5bGVzICs9ICdmb250LXNpemU6JyArIHRoaXMuX21pbkRpbWVuc2lvbi8yICsgJ3B4Oyc7XG4gIC8vICBzdHlsZXMgKz0gJ2hpZ2hsaWdodDogI2QxODsnO1xuICAgIHN0eWxlcyArPSAnYm9yZGVyOiBub25lOyc7XG4gICAgc3R5bGVzICs9ICdvdXRsaW5lOiBub25lOyc7XG4gICAgc3R5bGVzICs9ICdwYWRkaW5nOiAnK3RoaXMuX21pbkRpbWVuc2lvbi80KydweCAnK3RoaXMuX21pbkRpbWVuc2lvbi80KydweDsnO1xuICAgIHN0eWxlcyArPSAnYm94LXNpemluZzogYm9yZGVyLWJveDsnO1xuICAgIHN0eWxlcyArPSAndXNlclNlbGVjdDogdGV4dDsnO1xuICAgIHN0eWxlcyArPSAnbW96VXNlclNlbGVjdDogdGV4dDsnO1xuICAgIHN0eWxlcyArPSAnd2Via2l0VXNlclNlbGVjdDogdGV4dDsnO1xuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5jc3NUZXh0ICs9IHN0eWxlcztcblxuICAgIC8vIHRvIGFkZCBldmVudHVhbGx5XG4gICAgLy8gdmFyIGNzcyA9ICcjJyt0aGlzLmVsZW1lbnRJRCsnOjpzZWxlY3Rpb257IGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50IH0nO1xuXG4gICAgdGhpcy5lbGVtZW50LnZhbHVlID0gdGhpcy52YWx1ZTtcblxuICB9XG5cbiAgY29sb3JJbnRlcmZhY2UoKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gdGhpcy5jb2xvcnMuZmlsbDtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5jb2xvciA9IHRoaXMuY29sb3JzLmRhcms7XG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICB0aGlzLmVsZW1lbnQudmFsdWUgPSBtYXRoLnBydW5lKHRoaXMudmFsdWUsdGhpcy5kZWNpbWFsUGxhY2VzKTtcblxuICB9XG5cbiAgY2xpY2soKSB7XG4gICAgdGhpcy5oYXNNb3ZlZCA9IGZhbHNlO1xuICAgIHRoaXMuZWxlbWVudC5yZWFkT25seSA9IHRydWU7XG5cdCAgdGhpcy5hY3R1YWwgPSB0aGlzLnZhbHVlO1xuICAgIHRoaXMuaW5pdGlhbCA9IHsgeTogdGhpcy5tb3VzZS55IH07XG4gICAgdGhpcy5jaGFuZ2VGYWN0b3IgPSBtYXRoLmludmVydCggdGhpcy5tb3VzZS54IC8gdGhpcy53aWR0aCApO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuY2hhbmdlRmFjdG9yKTtcbiAgfVxuXG4gIG1vdmUoKSB7XG4gICAgdGhpcy5oYXNNb3ZlZCA9IHRydWU7XG4gICAgaWYgKHRoaXMuY2xpY2tlZCkge1xuXG4gICAgICBsZXQgbmV3dmFsdWUgPSB0aGlzLmFjdHVhbCAtICh0aGlzLm1vdXNlLnkgLSB0aGlzLmluaXRpYWwueSkgKiAoIG1hdGguY2xpcCggdGhpcy5tYXgtdGhpcy5taW4sIDAsIDEwMDAgKSAvIDIwMCApICogTWF0aC5wb3codGhpcy5jaGFuZ2VGYWN0b3IsMik7XG4gICAgICB0aGlzLnZhbHVlID0gbmV3dmFsdWU7XG5cbiAgXHRcdHRoaXMucmVuZGVyKCk7XG4gICAgICBpZiAodGhpcy5fdmFsdWUuY2hhbmdlZCkge1xuICAgICAgICB0aGlzLmVtaXQoJ2NoYW5nZScsdGhpcy52YWx1ZSk7XG4gICAgICB9XG5cbiAgXHR9XG4gIH1cblxuICByZWxlYXNlKCkge1xuICAgIGlmICghdGhpcy5oYXNNb3ZlZCkge1xuICAgICAgdGhpcy5lbGVtZW50LnJlYWRPbmx5ID0gZmFsc2U7XG4gIFx0XHR0aGlzLmVsZW1lbnQuZm9jdXMoKTtcbiAgXHRcdHRoaXMuZWxlbWVudC5zZXRTZWxlY3Rpb25SYW5nZSgwLCB0aGlzLmVsZW1lbnQudmFsdWUubGVuZ3RoKTtcbiAgXHRcdHRoaXMuZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLmNvbG9ycy5hY2NlbnQ7XG4gIFx0XHR0aGlzLmVsZW1lbnQuc3R5bGUuY29sb3IgPSB0aGlzLmNvbG9ycy5saWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICBDb25uZWN0IHRoaXMgbnVtYmVyIGludGVyZmFjZSB0byBhIGRpYWwgb3Igc2xpZGVyXG4gIEBwYXJhbSB7SW50ZXJmYWNlfSBlbGVtZW50IEVsZW1lbnQgdG8gY29ubmVjdCB0by5cbiAgQGV4YW1wbGUgbnVtYmVyLmxpbmsoc2xpZGVyKVxuICAqL1xuICBsaW5rKGRlc3RpbmF0aW9uKSB7XG4gICAgdGhpcy5taW4gPSBkZXN0aW5hdGlvbi5taW47XG4gICAgdGhpcy5tYXggPSBkZXN0aW5hdGlvbi5tYXg7XG4gICAgdGhpcy5zdGVwID0gZGVzdGluYXRpb24uc3RlcDtcbiAgICBkZXN0aW5hdGlvbi5vbignY2hhbmdlJywodikgPT4ge1xuICAgICAgdGhpcy5wYXNzaXZlVXBkYXRlKHYpO1xuICAgIH0pO1xuICAgIHRoaXMub24oJ2NoYW5nZScsKHYpID0+IHtcbiAgICAgIGRlc3RpbmF0aW9uLnZhbHVlID0gdjtcbiAgICB9KTtcbiAgICB0aGlzLnZhbHVlID0gZGVzdGluYXRpb24udmFsdWU7XG4gIC8qICByZXR1cm4ge1xuICAgICAgbGlzdGVuZXIxOiBsaXN0ZW5lcjEsXG4gICAgICBsaXN0ZW5lcjI6IGxpc3RlbmVyMixcbiAgICAgIGRlc3Ryb3k6ICgpID0+IHtcbiAgICAgICAgbGlzdGVuZXIxLnJlbW92ZSgpIChvciBzaW1pbGFyKVxuICAgICAgICBsaXN0ZW5lcjIucmVtb3ZlKCkgKG9yIHNpbWlsYXIpXG4gICAgICB9XG4gICAgfSAqL1xuICB9XG5cbiAgcGFzc2l2ZVVwZGF0ZSh2KSB7XG4gICAgdGhpcy5fdmFsdWUudXBkYXRlKHYpO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICAvKipcbiAgVGhlIGludGVyZmFjZSdzIGN1cnJlbnQgdmFsdWUuIElmIHNldCBtYW51YWxseSwgd2lsbCB1cGRhdGUgdGhlIGludGVyZmFjZSBhbmQgdHJpZ2dlciB0aGUgb3V0cHV0IGV2ZW50LlxuICBAdHlwZSB7bnVtYmVyfVxuICBAZXhhbXBsZSBudW1iZXIudmFsdWUgPSAxMDtcbiAgKi9cbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZS52YWx1ZTtcbiAgfVxuICBzZXQgdmFsdWUodikge1xuICAgIHRoaXMuX3ZhbHVlLnVwZGF0ZSh2KTtcbiAgICB0aGlzLmVtaXQoJ2NoYW5nZScsdGhpcy52YWx1ZSk7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIC8qKlxuICBMb3dlciBsaW1pdCBvZiB0aGUgbnVtYmVyJ3Mgb3V0cHV0IHJhbmdlXG4gIEB0eXBlIHtudW1iZXJ9XG4gIEBleGFtcGxlIG51bWJlci5taW4gPSAxMDAwO1xuICAqL1xuICBnZXQgbWluKCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZS5taW47XG4gIH1cbiAgc2V0IG1pbih2KSB7XG4gICAgdGhpcy5fdmFsdWUubWluID0gdjtcbiAgfVxuXG4gIC8qKlxuICBVcHBlciBsaW1pdCBvZiB0aGUgbnVtYmVyJ3Mgb3V0cHV0IHJhbmdlXG4gIEB0eXBlIHtudW1iZXJ9XG4gIEBleGFtcGxlIG51bWJlci5tYXggPSAxMDAwO1xuICAqL1xuICBnZXQgbWF4KCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZS5tYXg7XG4gIH1cbiAgc2V0IG1heCh2KSB7XG4gICAgdGhpcy5fdmFsdWUubWF4ID0gdjtcbiAgfVxuXG4gIC8qKlxuICBUaGUgaW5jcmVtZW50IHRoYXQgdGhlIG51bWJlcidzIHZhbHVlIGNoYW5nZXMgYnkuXG4gIEB0eXBlIHtudW1iZXJ9XG4gIEBleGFtcGxlIG51bWJlci5zdGVwID0gNTtcbiAgKi9cbiAgZ2V0IHN0ZXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlLnN0ZXA7XG4gIH1cbiAgc2V0IHN0ZXAodikge1xuICAgIHRoaXMuX3ZhbHVlLnN0ZXAgPSB2O1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vanNoaW50LWxvYWRlciEuL2xpYi9pbnRlcmZhY2VzL251bWJlci5qcyIsIid1c2Ugc3RyaWN0JztcblxubGV0IEludGVyZmFjZSA9IHJlcXVpcmUoJy4uL2NvcmUvaW50ZXJmYWNlJyk7XG5cbi8qKlxuKiBTZWxlY3RcbipcbiogQGRlc2NyaXB0aW9uIERyb3Bkb3duIG1lbnVcbipcbiogQGRlbW8gPHNwYW4gbmV4dXMtdWk9XCJzZWxlY3RcIj48L3NwYW4+XG4qXG4qIEBleGFtcGxlXG4qIHZhciBzZWxlY3QgPSBuZXcgTmV4dXMuU2VsZWN0KCcjdGFyZ2V0JylcbipcbiogQGV4YW1wbGVcbiogdmFyIHNlbGVjdCA9IG5ldyBOZXh1cy5TZWxlY3QoJyN0YXJnZXQnLHtcbiogICAnc2l6ZSc6IFsxMDAsMzBdLFxuKiAgICdvcHRpb25zJzogWydkZWZhdWx0Jywnb3B0aW9ucyddXG4qIH0pXG4qXG4qIEBvdXRwdXRcbiogY2hhbmdlXG4qIEZpcmVzIGFueSB0aW1lIHRoZSBpbnRlcmZhY2UncyB2YWx1ZSBjaGFuZ2VzLiA8YnI+XG4qIFRoZSBldmVudCBkYXRhIGlzIGFuIG9iamVjdCBjb250YWluaW5nIHRoZSB0ZXh0IHZhbHVlIG9mIHRoZSBzZWxlY3RlZCBvcHRpb24sIGFzIHdlbGwgYXMgdGhlIG51bWVyaWMgaW5kZXggb2YgdGhlIHNlbGVjdGlvbi5cbipcbiogQG91dHB1dGV4YW1wbGVcbiogc2VsZWN0Lm9uKCdjaGFuZ2UnLGZ1bmN0aW9uKHYpIHtcbiogICBjb25zb2xlLmxvZyh2KTtcbiogfSlcbipcbipcbiovXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0IGV4dGVuZHMgSW50ZXJmYWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIGxldCBvcHRpb25zID0gWyd2YWx1ZSddO1xuXG4gICAgbGV0IGRlZmF1bHRzID0ge1xuICAgICAgICdzaXplJzogWzEwMCwzMF0sXG4gICAgICAgJ29wdGlvbnMnOiBbJ2RlZmF1bHQnLCdvcHRpb25zJ11cbiAgICB9O1xuXG4gICAgc3VwZXIoYXJndW1lbnRzLG9wdGlvbnMsZGVmYXVsdHMpO1xuXG4gICAgdGhpcy5fc2VsZWN0ZWRJbmRleCA9IC0xO1xuICAgIHRoaXMuX3ZhbHVlID0gZmFsc2U7XG5cbiAgICB0aGlzLl9vcHRpb25zID0gdGhpcy5zZXR0aW5ncy5vcHRpb25zO1xuXG4gICAgdGhpcy5pbml0KCk7XG4gICAgdGhpcy5yZW5kZXIoKTtcblxuICB9XG5cbiAgYnVpbGRGcmFtZSgpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUuZm9udFNpemUgPSB0aGlzLmhlaWdodC8yKydweCc7XG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLm91dGxpbmUgPSAnbm9uZSc7XG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLmhpZ2hsaWdodCA9ICdub25lJztcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUud2lkdGggPSB0aGlzLndpZHRoKydweCc7XG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLmhlaWdodCA9IHRoaXMuaGVpZ2h0KydweCc7XG5cbiAgICB0aGlzLmJvdW5kUmVuZGVyID0gdGhpcy5yZW5kZXIuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmJvdW5kUmVuZGVyKTtcblxuICAgIHRoaXMucGFyZW50LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XG5cbiAgfVxuXG4gIGF0dGFjaExpc3RlbmVycygpIHtcblxuICB9XG5cbiAgYnVpbGRJbnRlcmZhY2UoKSB7XG5cbiAgICB0aGlzLmRlZmluZU9wdGlvbnMoKTtcblxuICB9XG5cbiAgY29sb3JJbnRlcmZhY2UoKSB7XG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHRoaXMuY29sb3JzLmZpbGw7XG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLmNvbG9yID0gdGhpcy5jb2xvcnMuZGFyaztcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUuYm9yZGVyID0gJ3NvbGlkIDBweCAnK3RoaXMuY29sb3JzLm1lZGl1bUxpZ2h0O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgdGhpcy5fdmFsdWUgPSB0aGlzLmVsZW1lbnQub3B0aW9uc1t0aGlzLmVsZW1lbnQuc2VsZWN0ZWRJbmRleF0udGV4dDtcbiAgICB0aGlzLl9zZWxlY3RlZEluZGV4ID0gdGhpcy5lbGVtZW50LnNlbGVjdGVkSW5kZXg7XG4gICAgdGhpcy5lbWl0KCdjaGFuZ2UnLHtcbiAgICAgIHZhbHVlOiB0aGlzLl92YWx1ZSxcbiAgICAgIGluZGV4OiB0aGlzLl9zZWxlY3RlZEluZGV4XG4gICAgfSk7XG5cbiAgfVxuXG4gIGNsaWNrKCkge1xuXG4gIH1cblxuICBtb3ZlKCkge1xuXG4gIH1cblxuICByZWxlYXNlKCkge1xuXG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIHRoZSBsaXN0IG9mIG9wdGlvbnMuIFRoaXMgcmVtb3ZlcyBhbGwgZXhpc3Rpbmcgb3B0aW9ucyBhbmQgY3JlYXRlcyBhIG5ldyBsaXN0IG9mIG9wdGlvbnMuXG4gICAqIEBwYXJhbSAge2FycmF5fSBvcHRpb25zIE5ldyBhcnJheSBvZiBvcHRpb25zXG4gICAqL1xuXG4gIGRlZmluZU9wdGlvbnMob3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zKSB7XG4gICAgICB0aGlzLl9vcHRpb25zID0gb3B0aW9ucztcbiAgICB9XG5cbiAgICBmb3IobGV0IGk9MDtpPHRoaXMuZWxlbWVudC5vcHRpb25zLmxlbmd0aDtpKyspIHtcbiAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmUoaSk7XG4gICAgfVxuXG4gICAgZm9yKGxldCBpPTA7aTx0aGlzLl9vcHRpb25zLmxlbmd0aDtpKyspIHtcbiAgICAgIHRoaXMuZWxlbWVudC5vcHRpb25zLmFkZChuZXcgT3B0aW9uKHRoaXMuX29wdGlvbnNbaV0sIGkpKTtcbiAgICB9XG5cbiAgfVxuXG5cbiAgLyoqXG4gIFRoZSB0ZXh0IG9mIHRoZSBvcHRpb24gdGhhdCBpcyBjdXJyZW50bHkgc2VsZWN0ZWQuIElmIHNldCwgd2lsbCB1cGRhdGUgdGhlIGludGVyZmFjZSBhbmQgdHJpZ2dlciB0aGUgb3V0cHV0IGV2ZW50LlxuICBAdHlwZSB7U3RyaW5nfVxuICBAZXhhbXBsZSBzZWxlY3QudmFsdWUgPSBcInNhd3Rvb3RoXCI7XG4gICovXG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cbiAgc2V0IHZhbHVlKHYpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHY7XG4gICAgZm9yKGxldCBpPTA7aTx0aGlzLmVsZW1lbnQub3B0aW9ucy5sZW5ndGg7aSsrKSB7XG4gICAgICBpZiAodiA9PT0gdGhpcy5lbGVtZW50Lm9wdGlvbnNbaV0udGV4dCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG4gIC8qKlxuICBUaGUgbnVtZXJpYyBpbmRleCBvZiB0aGUgb3B0aW9uIHRoYXQgaXMgY3VycmVudGx5IHNlbGVjdGVkLiBJZiBzZXQsIHdpbGwgdXBkYXRlIHRoZSBpbnRlcmZhY2UgYW5kIHRyaWdnZXIgdGhlIG91dHB1dCBldmVudC5cbiAgQHR5cGUge251bWJlcn1cbiAgQGV4YW1wbGUgc2VsZWN0LnNlbGVjdGVkSW5kZXggPSAyO1xuICAqL1xuICBnZXQgc2VsZWN0ZWRJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWRJbmRleDtcbiAgfVxuICBzZXQgc2VsZWN0ZWRJbmRleCh2KSB7XG4gICAgdGhpcy5fc2VsZWN0ZWRJbmRleCA9IHY7XG4gICAgdGhpcy5lbGVtZW50LnNlbGVjdGVkSW5kZXggPSB2O1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBjdXN0b21EZXN0cm95KCkge1xuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmJvdW5kUmVuZGVyKTtcbiAgfVxuXG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vanNoaW50LWxvYWRlciEuL2xpYi9pbnRlcmZhY2VzL3NlbGVjdC5qcyIsIid1c2Ugc3RyaWN0JztcblxubGV0IHN2ZyA9IHJlcXVpcmUoJy4uL3V0aWwvc3ZnJyk7XG5sZXQgbWF0aCA9IHJlcXVpcmUoJy4uL3V0aWwvbWF0aCcpO1xubGV0IEludGVyZmFjZSA9IHJlcXVpcmUoJy4uL2NvcmUvaW50ZXJmYWNlJyk7XG5sZXQgU3RlcCA9IHJlcXVpcmUoJy4uL21vZGVscy9zdGVwJyk7XG5pbXBvcnQgKiBhcyBJbnRlcmFjdGlvbiBmcm9tICcuLi91dGlsL2ludGVyYWN0aW9uJztcblxuLyoqXG4qIERpYWxcbipcbipcbiogQGRlc2NyaXB0aW9uIERpYWwgd2l0aCByYWRpYWwgb3IgbGluZWFyIGludGVyYWN0aW9uLlxuKlxuKiBAZGVtbyA8c3BhbiBuZXh1cy11aT1cImRpYWxcIj48L3NwYW4+XG4qXG4qIEBleGFtcGxlXG4qIHZhciBkaWFsID0gbmV3IE5leHVzLkRpYWwoJyN0YXJnZXQnKVxuKlxuKiBAZXhhbXBsZVxuKiB2YXIgZGlhbCA9IG5ldyBOZXh1cy5EaWFsKCcjdGFyZ2V0Jyx7XG4qICAgJ3NpemUnOiBbNzUsNzVdLFxuKiAgICdpbnRlcmFjdGlvbic6ICdyYWRpYWwnLCAvLyBcInJhZGlhbFwiLCBcInZlcnRpY2FsXCIsIG9yIFwiaG9yaXpvbnRhbFwiXG4qICAgJ21vZGUnOiAncmVsYXRpdmUnLCAvLyBcImFic29sdXRlXCIgb3IgXCJyZWxhdGl2ZVwiXG4qICAgJ21pbic6IDAsXG4qICAgJ21heCc6IDEsXG4qICAgJ3N0ZXAnOiAwLFxuKiAgICd2YWx1ZSc6IDBcbiogfSlcbipcbiogQG91dHB1dFxuKiBjaGFuZ2VcbiogRmlyZXMgYW55IHRpbWUgdGhlIGludGVyZmFjZSdzIHZhbHVlIGNoYW5nZXMuIDxicj5cbiogVGhlIGV2ZW50IGRhdGEgaXMgdGhlIG51bWJlciB2YWx1ZSBvZiB0aGUgaW50ZXJmYWNlLlxuKlxuKiBAb3V0cHV0ZXhhbXBsZVxuKiBkaWFsLm9uKCdjaGFuZ2UnLGZ1bmN0aW9uKHYpIHtcbiogICBjb25zb2xlLmxvZyh2KTtcbiogfSlcbipcbiogQHR1dG9yaWFsXG4qIERpYWxcbiogeWdHTXhxXG4qXG4qL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaWFsIGV4dGVuZHMgSW50ZXJmYWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIGxldCBvcHRpb25zID0gWydtaW4nLCdtYXgnLCd2YWx1ZSddO1xuXG4gICAgbGV0IGRlZmF1bHRzID0ge1xuICAgICAgJ3NpemUnOiBbNzUsNzVdLFxuICAgICAgJ2ludGVyYWN0aW9uJzogJ3JhZGlhbCcsIC8vIHJhZGlhbCwgdmVydGljYWwsIGhvcml6b250YWxcbiAgICAgICdtb2RlJzogJ3JlbGF0aXZlJywgLy8gYWJzb2x1dGUsIHJlbGF0aXZlXG4gICAgICAnbWluJzogMCxcbiAgICAgICdtYXgnOiAxLFxuICAgICAgJ3N0ZXAnOiAwLFxuICAgICAgJ3ZhbHVlJzogMFxuICAgIH07XG5cbiAgICBzdXBlcihhcmd1bWVudHMsb3B0aW9ucyxkZWZhdWx0cyk7XG5cbiAgICB0aGlzLmludGVyYWN0aW9uID0gdGhpcy5zZXR0aW5ncy5pbnRlcmFjdGlvbjtcblxuICAgIHRoaXMuX3ZhbHVlID0gbmV3IFN0ZXAodGhpcy5zZXR0aW5ncy5taW4sIHRoaXMuc2V0dGluZ3MubWF4LCB0aGlzLnNldHRpbmdzLnN0ZXAsIHRoaXMuc2V0dGluZ3MudmFsdWUpO1xuXG4gICAgdGhpcy5wb3NpdGlvbiA9IG5ldyBJbnRlcmFjdGlvbi5IYW5kbGUodGhpcy5zZXR0aW5ncy5tb2RlLHRoaXMuaW50ZXJhY3Rpb24sWzAsdGhpcy53aWR0aF0sW3RoaXMuaGVpZ2h0LDBdKTtcblxuICAgIHRoaXMuaW5pdCgpO1xuXG4gICAgdGhpcy52YWx1ZSA9IHRoaXMuX3ZhbHVlLnZhbHVlO1xuXG4gICAgdGhpcy5wb3NpdGlvbi52YWx1ZSA9IHRoaXMuX3ZhbHVlLm5vcm1hbGl6ZWQ7XG5cbiAgICB0aGlzLnByZXZpb3VzQW5nbGUgPSBmYWxzZTtcblxuICAgIHRoaXMuZW1pdCgnY2hhbmdlJyx0aGlzLnZhbHVlKTtcblxuICB9XG5cbiAgYnVpbGRJbnRlcmZhY2UoKSB7XG5cbiAgICB0aGlzLmJhY2tncm91bmQgPSBzdmcuY3JlYXRlKCdjaXJjbGUnKTtcbiAgICB0aGlzLnNjcmV3ID0gc3ZnLmNyZWF0ZSgnY2lyY2xlJyk7XG4gICAgdGhpcy5oYW5kbGUgPSBzdmcuY3JlYXRlKCdwYXRoJyk7XG4gICAgdGhpcy5oYW5kbGUyID0gc3ZnLmNyZWF0ZSgncGF0aCcpO1xuICAgIHRoaXMuaGFuZGxlRmlsbCA9IHN2Zy5jcmVhdGUoJ3BhdGgnKTtcbiAgICB0aGlzLmhhbmRsZTJGaWxsID0gc3ZnLmNyZWF0ZSgncGF0aCcpO1xuICAgIHRoaXMuaGFuZGxlTGluZSA9IHN2Zy5jcmVhdGUoJ3BhdGgnKTtcblxuICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmJhY2tncm91bmQpO1xuICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmhhbmRsZSk7XG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuaGFuZGxlMik7XG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuaGFuZGxlRmlsbCk7XG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuaGFuZGxlMkZpbGwpO1xuICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmhhbmRsZUxpbmUpO1xuICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLnNjcmV3KTtcblxuICB9XG5cblxuICBzaXplSW50ZXJmYWNlKCkge1xuXG4gICAgdGhpcy5wb3NpdGlvbi5yZXNpemUoWzAsdGhpcy53aWR0aF0sW3RoaXMuaGVpZ2h0LDBdKTtcblxuICAgIGxldCBjZW50ZXIgPSB7XG4gICAgICB4OiB0aGlzLndpZHRoLzIsXG4gICAgICB5OiB0aGlzLmhlaWdodC8yXG4gICAgfTtcblxuICAgIGxldCBkaWFtZXRlciA9IE1hdGgubWluKHRoaXMud2lkdGgsdGhpcy5oZWlnaHQpO1xuXG4gICAgdGhpcy5iYWNrZ3JvdW5kLnNldEF0dHJpYnV0ZSgnY3gnLCBjZW50ZXIueCk7XG4gICAgdGhpcy5iYWNrZ3JvdW5kLnNldEF0dHJpYnV0ZSgnY3knLCBjZW50ZXIueSk7XG4gICAgdGhpcy5iYWNrZ3JvdW5kLnNldEF0dHJpYnV0ZSgncicsIGRpYW1ldGVyLzItZGlhbWV0ZXIvNDApO1xuXG4gICAgdGhpcy5zY3Jldy5zZXRBdHRyaWJ1dGUoJ2N4JywgY2VudGVyLngpO1xuICAgIHRoaXMuc2NyZXcuc2V0QXR0cmlidXRlKCdjeScsIGNlbnRlci55KTtcbiAgICB0aGlzLnNjcmV3LnNldEF0dHJpYnV0ZSgncicsIGRpYW1ldGVyLzEyKTtcblxuICAgIGxldCB2YWx1ZSA9IHRoaXMudmFsdWU7XG5cbiAgICBsZXQgaGFuZGxlUG9pbnRzID0ge1xuICAgICAgc3RhcnQ6IE1hdGguUEkqMS41LFxuICAgICAgZW5kOiBtYXRoLmNsaXAoIG1hdGguc2NhbGUodmFsdWUsMCwwLjUsTWF0aC5QSSoxLjUsTWF0aC5QSSowLjUpICwgTWF0aC5QSSowLjUsIE1hdGguUEkqMS41IClcbiAgICB9O1xuICAgIGxldCBoYW5kbGUyUG9pbnRzID0ge1xuICAgICAgc3RhcnQ6IE1hdGguUEkqMi41LFxuICAgICAgZW5kOiBtYXRoLmNsaXAoIG1hdGguc2NhbGUodmFsdWUsMC41LDEsTWF0aC5QSSoyLjUsTWF0aC5QSSoxLjUpICwgTWF0aC5QSSoxLjUsIE1hdGguUEkqMi41IClcbiAgICB9O1xuXG4gICAgbGV0IGhhbmRsZVBhdGggPSBzdmcuYXJjKGNlbnRlci54LCBjZW50ZXIueSwgZGlhbWV0ZXIvMi1kaWFtZXRlci80MCwgaGFuZGxlUG9pbnRzLnN0YXJ0LCBoYW5kbGVQb2ludHMuZW5kKTtcbiAgICBsZXQgaGFuZGxlMlBhdGggPSBzdmcuYXJjKGNlbnRlci54LCBjZW50ZXIueSwgZGlhbWV0ZXIvMi1kaWFtZXRlci80MCwgaGFuZGxlMlBvaW50cy5zdGFydCwgaGFuZGxlMlBvaW50cy5lbmQpO1xuXG4gICAgdGhpcy5oYW5kbGUuc2V0QXR0cmlidXRlKCdkJyxoYW5kbGVQYXRoKTtcbiAgICB0aGlzLmhhbmRsZS5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS13aWR0aCcsIGRpYW1ldGVyLzIwKTtcbiAgICB0aGlzLmhhbmRsZS5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCAnbm9uZScpO1xuXG4gICAgdGhpcy5oYW5kbGUyLnNldEF0dHJpYnV0ZSgnZCcsaGFuZGxlMlBhdGgpO1xuICAgIHRoaXMuaGFuZGxlMi5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS13aWR0aCcsIGRpYW1ldGVyLzIwKTtcbiAgICB0aGlzLmhhbmRsZTIuc2V0QXR0cmlidXRlKCdmaWxsJywgJ25vbmUnKTtcblxuICAgIGhhbmRsZVBhdGggKz0gJyBMICcrY2VudGVyLngrJyAnK2NlbnRlci55O1xuXG4gICAgdGhpcy5oYW5kbGVGaWxsLnNldEF0dHJpYnV0ZSgnZCcsaGFuZGxlUGF0aCk7XG4gICAgdGhpcy5oYW5kbGVGaWxsLnNldEF0dHJpYnV0ZSgnZmlsbC1vcGFjaXR5JywgJzAuMycpO1xuXG4gICAgaGFuZGxlMlBhdGggKz0gJyBMICcrY2VudGVyLngrJyAnK2NlbnRlci55O1xuXG4gICAgdGhpcy5oYW5kbGUyRmlsbC5zZXRBdHRyaWJ1dGUoJ2QnLGhhbmRsZTJQYXRoKTtcbiAgICB0aGlzLmhhbmRsZTJGaWxsLnNldEF0dHJpYnV0ZSgnZmlsbC1vcGFjaXR5JywgJzAuMycpO1xuXG4gICAgbGV0IGFyY0VuZGluZ0E7XG4gICAgaWYgKHZhbHVlIDwgMC41KSB7XG4gICAgICBhcmNFbmRpbmdBID0gaGFuZGxlUG9pbnRzLmVuZDtcbiAgICB9IGVsc2Uge1xuICAgICAgYXJjRW5kaW5nQSA9IGhhbmRsZTJQb2ludHMuZW5kO1xuICAgIH1cblxuICAgIGxldCBhcmNFbmRpbmdYID0gY2VudGVyLnggKyBNYXRoLmNvcyhhcmNFbmRpbmdBKSAqIChkaWFtZXRlci8yKTtcbiAgICBsZXQgYXJjRW5kaW5nWSA9IGNlbnRlci55ICsgTWF0aC5zaW4oYXJjRW5kaW5nQSkgKiAoZGlhbWV0ZXIvMikgKiAtMTtcblxuICAgIHRoaXMuaGFuZGxlTGluZS5zZXRBdHRyaWJ1dGUoJ2QnLCdNICcrY2VudGVyLngrJyAnK2NlbnRlci55KycgTCAnK2FyY0VuZGluZ1grJyAnK2FyY0VuZGluZ1kpO1xuICAgIHRoaXMuaGFuZGxlTGluZS5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS13aWR0aCcsIGRpYW1ldGVyLzIwKTtcblxuICB9XG5cbiAgY29sb3JJbnRlcmZhY2UoKSB7XG4gICAgdGhpcy5iYWNrZ3JvdW5kLnNldEF0dHJpYnV0ZSgnZmlsbCcsIHRoaXMuY29sb3JzLmZpbGwpO1xuICAgIHRoaXMuc2NyZXcuc2V0QXR0cmlidXRlKCdmaWxsJywgdGhpcy5jb2xvcnMuYWNjZW50KTtcbiAgICB0aGlzLmhhbmRsZS5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsIHRoaXMuY29sb3JzLmFjY2VudCk7XG4gICAgdGhpcy5oYW5kbGUyLnNldEF0dHJpYnV0ZSgnc3Ryb2tlJywgdGhpcy5jb2xvcnMuYWNjZW50KTtcbiAgICB0aGlzLmhhbmRsZUZpbGwuc2V0QXR0cmlidXRlKCdmaWxsJywgdGhpcy5jb2xvcnMuYWNjZW50KTtcbiAgICB0aGlzLmhhbmRsZTJGaWxsLnNldEF0dHJpYnV0ZSgnZmlsbCcsIHRoaXMuY29sb3JzLmFjY2VudCk7XG4gICAgdGhpcy5oYW5kbGVMaW5lLnNldEF0dHJpYnV0ZSgnc3Ryb2tlJywgdGhpcy5jb2xvcnMuYWNjZW50KTtcblxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB2YWx1ZSA9IHRoaXMuX3ZhbHVlLm5vcm1hbGl6ZWQ7XG5cbiAgICBsZXQgY2VudGVyID0ge1xuICAgICAgeDogdGhpcy53aWR0aC8yLFxuICAgICAgeTogdGhpcy5oZWlnaHQvMlxuICAgIH07XG5cbiAgICBsZXQgZGlhbWV0ZXIgPSBNYXRoLm1pbih0aGlzLndpZHRoLHRoaXMuaGVpZ2h0KTtcblxuICAgIGxldCBoYW5kbGVQb2ludHMgPSB7XG4gICAgICBzdGFydDogTWF0aC5QSSoxLjUsXG4gICAgICBlbmQ6IG1hdGguY2xpcCggbWF0aC5zY2FsZSh2YWx1ZSwwLDAuNSxNYXRoLlBJKjEuNSxNYXRoLlBJKjAuNSkgLCBNYXRoLlBJKjAuNSwgTWF0aC5QSSoxLjUgKVxuICAgIH07XG4gICAgbGV0IGhhbmRsZTJQb2ludHMgPSB7XG4gICAgICBzdGFydDogTWF0aC5QSSAqMi41LFxuICAgICAgZW5kOiBtYXRoLmNsaXAoIG1hdGguc2NhbGUodmFsdWUsMC41LDEsTWF0aC5QSSoyLjUsTWF0aC5QSSoxLjUpICwgTWF0aC5QSSoxLjUsIE1hdGguUEkqMi41IClcbiAgICB9O1xuXG4gICAgbGV0IGhhbmRsZVBhdGggPSBzdmcuYXJjKGNlbnRlci54LCBjZW50ZXIueSwgZGlhbWV0ZXIvMi1kaWFtZXRlci80MCwgaGFuZGxlUG9pbnRzLnN0YXJ0LCBoYW5kbGVQb2ludHMuZW5kKTtcbiAgICBsZXQgaGFuZGxlMlBhdGggPSBzdmcuYXJjKGNlbnRlci54LCBjZW50ZXIueSwgZGlhbWV0ZXIvMi1kaWFtZXRlci80MCwgaGFuZGxlMlBvaW50cy5zdGFydCwgaGFuZGxlMlBvaW50cy5lbmQpO1xuXG4gICAgdGhpcy5oYW5kbGUuc2V0QXR0cmlidXRlKCdkJyxoYW5kbGVQYXRoKTtcbiAgICB0aGlzLmhhbmRsZTIuc2V0QXR0cmlidXRlKCdkJyxoYW5kbGUyUGF0aCk7XG5cblxuICAgIGhhbmRsZVBhdGggKz0gJyBMICcrY2VudGVyLngrJyAnK2NlbnRlci55O1xuXG4gICAgdGhpcy5oYW5kbGVGaWxsLnNldEF0dHJpYnV0ZSgnZCcsaGFuZGxlUGF0aCk7XG5cbiAgICBoYW5kbGUyUGF0aCArPSAnIEwgJytjZW50ZXIueCsnICcrY2VudGVyLnk7XG5cbiAgICB0aGlzLmhhbmRsZTJGaWxsLnNldEF0dHJpYnV0ZSgnZCcsaGFuZGxlMlBhdGgpO1xuXG4gICAgbGV0IGFyY0VuZGluZ0E7XG4gICAgaWYgKHZhbHVlIDw9IDAuNSkge1xuICAgICAgYXJjRW5kaW5nQSA9IGhhbmRsZVBvaW50cy5lbmQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFyY0VuZGluZ0EgPSBoYW5kbGUyUG9pbnRzLmVuZDtcbiAgICB9XG5cbiAgICBsZXQgYXJjRW5kaW5nWCA9IGNlbnRlci54ICsgTWF0aC5jb3MoYXJjRW5kaW5nQSkgKiAoZGlhbWV0ZXIvMik7XG4gICAgbGV0IGFyY0VuZGluZ1kgPSBjZW50ZXIueSArIE1hdGguc2luKGFyY0VuZGluZ0EpICogKGRpYW1ldGVyLzIpICogLTE7XG5cbiAgICB0aGlzLmhhbmRsZUxpbmUuc2V0QXR0cmlidXRlKCdkJywnTSAnK2NlbnRlci54KycgJytjZW50ZXIueSsnIEwgJythcmNFbmRpbmdYKycgJythcmNFbmRpbmdZKTtcblxuICB9XG5cblxuICBjbGljaygpIHtcbiAgICBpZiAodGhpcy5tb2RlPT09J3JlbGF0aXZlJykge1xuICAgICAgdGhpcy5wcmV2aW91c0FuZ2xlID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMucG9zaXRpb24uYW5jaG9yID0gdGhpcy5tb3VzZTtcbiAgICB0aGlzLnBvc2l0aW9uLnZhbHVlID0gdGhpcy5fdmFsdWUubm9ybWFsaXplZDtcbiAgICB0aGlzLm1vdmUoKTtcbiAgIH1cblxuICBtb3ZlKCkge1xuICAgIGlmICh0aGlzLmNsaWNrZWQpIHtcblxuICAgICAgdGhpcy5wb3NpdGlvbi51cGRhdGUodGhpcy5tb3VzZSk7XG5cbiAgICAgIGxldCBhbmdsZSA9IHRoaXMucG9zaXRpb24udmFsdWUqTWF0aC5QSSoyO1xuXG4gICAgICBpZiAoYW5nbGUgPCAwICkgeyBhbmdsZSArPSAoTWF0aC5QSSoyKTsgfVxuXG4gICAgICBpZiAodGhpcy5tb2RlID09PSAncmVsYXRpdmUnKSB7XG4gICAgICAgIGlmICh0aGlzLnByZXZpb3VzQW5nbGUgIT09IGZhbHNlICYmIE1hdGguYWJzKHRoaXMucHJldmlvdXNBbmdsZSAtIGFuZ2xlKSA+IDIpIHtcbiAgICAgICAgICBpZiAodGhpcy5wcmV2aW91c0FuZ2xlID4gMykge1xuICAgICAgICAgICAgYW5nbGUgPSBNYXRoLlBJKjI7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFuZ2xlID0gMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gLyogZWxzZSB7XG4gICAgICAgIGlmICh0aGlzLnByZXZpb3VzQW5nbGUgIT09IGZhbHNlICYmIE1hdGguYWJzKHRoaXMucHJldmlvdXNBbmdsZSAtIGFuZ2xlKSA+IDIpIHtcbiAgICAgICAgICBpZiAodGhpcy5wcmV2aW91c0FuZ2xlID4gMykge1xuICAgICAgICAgICAgYW5nbGUgPSBNYXRoLlBJKjI7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFuZ2xlID0gMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gKi9cbiAgICAgIHRoaXMucHJldmlvdXNBbmdsZSA9IGFuZ2xlO1xuXG4gICAgICBsZXQgcmVhbFZhbHVlID0gYW5nbGUgLyAoTWF0aC5QSSoyKTtcblxuICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuX3ZhbHVlLnVwZGF0ZU5vcm1hbCggcmVhbFZhbHVlICk7XG5cbiAgICAgIGlmICh0aGlzLm1vZGUgPT09ICdyZWxhdGl2ZScpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi52YWx1ZSA9IHJlYWxWYWx1ZTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnLHRoaXMuX3ZhbHVlLnZhbHVlKTtcblxuICAgICAgdGhpcy5yZW5kZXIoKTtcblxuICAgIH1cbiAgfVxuXG4gIHJlbGVhc2UoKSB7XG4gIH1cblxuICAvKlxuICBEaWFsJ3MgdmFsdWUuIFdoZW4gc2V0LCBpdCB3aWxsIGF1dG9tYXRpY2FsbHkgYmUgYWRqdXN0IHRvIGZpdCBtaW4vbWF4L3N0ZXAgc2V0dGluZ3Mgb2YgdGhlIGludGVyZmFjZS5cbiAgQHR5cGUge251bWJlcn1cbiAgQGV4YW1wbGUgZGlhbC52YWx1ZSA9IDEwO1xuXG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWUudmFsdWU7XG4gIH1cblxuICBzZXQgdmFsdWUodmFsdWUpIHtcbiAgICB0aGlzLl92YWx1ZS51cGRhdGUodmFsdWUpO1xuICAgIHRoaXMuZW1pdCgnY2hhbmdlJyx0aGlzLnZhbHVlKTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG4qL1xuXG4gICAgLyoqXG4gICAgRGlhbCdzIHZhbHVlLiBXaGVuIHNldCwgaXQgd2lsbCBhdXRvbWF0aWNhbGx5IGJlIGFkanVzdCB0byBmaXQgbWluL21heC9zdGVwIHNldHRpbmdzIG9mIHRoZSBpbnRlcmZhY2UuXG4gICAgQHR5cGUge251bWJlcn1cbiAgICBAZXhhbXBsZSBkaWFsLnZhbHVlID0gMTA7XG4gICAgKi9cbiAgICBnZXQgdmFsdWUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdmFsdWUudmFsdWU7XG4gICAgfVxuICAgIHNldCB2YWx1ZSh2KSB7XG4gICAgICB0aGlzLl92YWx1ZS51cGRhdGUodik7XG4gICAgICB0aGlzLnBvc2l0aW9uLnZhbHVlID0gdGhpcy5fdmFsdWUubm9ybWFsaXplZDtcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJyx0aGlzLl92YWx1ZS52YWx1ZSk7XG4gICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgIExvd2VyIGxpbWl0IG9mIHRoZSBkaWFsJ3Mgb3V0cHV0IHJhbmdlXG4gICAgQHR5cGUge251bWJlcn1cbiAgICBAZXhhbXBsZSBkaWFsLm1pbiA9IDEwMDA7XG4gICAgKi9cbiAgICBnZXQgbWluKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlLm1pbjtcbiAgICB9XG4gICAgc2V0IG1pbih2KSB7XG4gICAgICB0aGlzLl92YWx1ZS5taW4gPSB2O1xuICAgIH1cblxuICAgIC8qKlxuICAgIFVwcGVyIGxpbWl0IG9mIHRoZSBkaWFsJ3Mgb3V0cHV0IHJhbmdlXG4gICAgQHR5cGUge251bWJlcn1cbiAgICBAZXhhbXBsZSBkaWFsLm1heCA9IDEwMDA7XG4gICAgKi9cbiAgICBnZXQgbWF4KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlLm1heDtcbiAgICB9XG4gICAgc2V0IG1heCh2KSB7XG4gICAgICB0aGlzLl92YWx1ZS5tYXggPSB2O1xuICAgIH1cblxuICAgIC8qKlxuICAgIFRoZSBpbmNyZW1lbnQgdGhhdCB0aGUgZGlhbCdzIHZhbHVlIGNoYW5nZXMgYnkuXG4gICAgQHR5cGUge251bWJlcn1cbiAgICBAZXhhbXBsZSBkaWFsLnN0ZXAgPSA1O1xuICAgICovXG4gICAgZ2V0IHN0ZXAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdmFsdWUuc3RlcDtcbiAgICB9XG4gICAgc2V0IHN0ZXAodikge1xuICAgICAgdGhpcy5fdmFsdWUuc3RlcCA9IHY7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgQWJzb2x1dGUgbW9kZSAoZGlhbCdzIHZhbHVlIGp1bXBzIHRvIG1vdXNlIGNsaWNrIHBvc2l0aW9uKSBvciByZWxhdGl2ZSBtb2RlIChtb3VzZSBkcmFnIGNoYW5nZXMgdmFsdWUgcmVsYXRpdmUgdG8gaXRzIGN1cnJlbnQgcG9zaXRpb24pLiBEZWZhdWx0OiBcInJlbGF0aXZlXCIuXG4gICAgQHR5cGUge3N0cmluZ31cbiAgICBAZXhhbXBsZSBkaWFsLm1vZGUgPSBcInJlbGF0aXZlXCI7XG4gICAgKi9cbiAgICBnZXQgbW9kZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLm1vZGU7XG4gICAgfVxuICAgIHNldCBtb2RlKHYpIHtcbiAgICAgIHRoaXMucG9zaXRpb24ubW9kZSA9IHY7XG4gICAgfVxuXG5cbiAgLyoqXG4gIE5vcm1hbGl6ZWQgdmFsdWUgb2YgdGhlIGRpYWwuXG4gIEB0eXBlIHtudW1iZXJ9XG4gIEBleGFtcGxlIGRpYWwubm9ybWFsaXplZCA9IDAuNTtcbiAgKi9cbiAgZ2V0IG5vcm1hbGl6ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlLm5vcm1hbGl6ZWQ7XG4gIH1cblxuICBzZXQgbm9ybWFsaXplZCh2KSB7XG4gICAgdGhpcy5fdmFsdWUudXBkYXRlTm9ybWFsKHYpO1xuICAgIHRoaXMuZW1pdCgnY2hhbmdlJyx0aGlzLnZhbHVlKTtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2pzaGludC1sb2FkZXIhLi9saWIvaW50ZXJmYWNlcy9kaWFsLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5sZXQgc3ZnID0gcmVxdWlyZSgnLi4vdXRpbC9zdmcnKTtcbmxldCBJbnRlcmZhY2UgPSByZXF1aXJlKCcuLi9jb3JlL2ludGVyZmFjZScpO1xubGV0IEJ1dHRvblRlbXBsYXRlID0gcmVxdWlyZSgnLi4vY29tcG9uZW50cy9idXR0b250ZW1wbGF0ZScpO1xubGV0IHRvdWNoID0gcmVxdWlyZSgnLi4vdXRpbC90b3VjaCcpO1xuXG5jbGFzcyBQaWFub0tleSBleHRlbmRzIEJ1dHRvblRlbXBsYXRlIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIGxldCBvcHRpb25zID0gWyd2YWx1ZScsJ25vdGUnLCdjb2xvciddO1xuXG4gICAgbGV0IGRlZmF1bHRzID0ge1xuICAgICAgJ3NpemUnOiBbODAsODBdLFxuICAgICAgJ3RhcmdldCc6IGZhbHNlLFxuICAgICAgJ21vZGUnOiAnYnV0dG9uJyxcbiAgICAgICd2YWx1ZSc6IDBcbiAgICB9O1xuXG4gICAgc3VwZXIoYXJndW1lbnRzLG9wdGlvbnMsZGVmYXVsdHMpO1xuXG4gICAgdGhpcy5ub3RlID0gdGhpcy5zZXR0aW5ncy5ub3RlO1xuICAgIHRoaXMuY29sb3IgPSB0aGlzLnNldHRpbmdzLmNvbG9yO1xuXG4gICAgdGhpcy5jb2xvcnMgPSB7XG4gICAgICAndyc6ICcjZmZmJyxcbiAgICAgICdiJzogJyM2NjYnLFxuICAgIH07XG5cbiAgICB0aGlzLmluaXQoKTtcbiAgICB0aGlzLnJlbmRlcigpO1xuXG4gIH1cblxuICBidWlsZEZyYW1lKCkge1xuICAgIHRoaXMuZWxlbWVudCA9IHN2Zy5jcmVhdGUoJ3N2ZycpO1xuICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3dpZHRoJyx0aGlzLndpZHRoKTtcbiAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdoZWlnaHQnLHRoaXMuaGVpZ2h0KTtcbiAgICB0aGlzLnBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICB9XG5cbiAgYnVpbGRJbnRlcmZhY2UoKSB7XG5cbiAgICB0aGlzLnBhZCA9IHN2Zy5jcmVhdGUoJ3JlY3QnKTtcblxuICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLnBhZCk7XG5cbiAgICB0aGlzLmludGVyYWN0aW9uVGFyZ2V0ID0gdGhpcy5wYWQ7XG5cbiAgICAvKiBldmVudHMgKi9cblxuICAgIGlmICghdG91Y2guZXhpc3RzKSB7XG5cbiAgICAgIHRoaXMuY2xpY2sgPSAoKSA9PiB7XG4gICAgICAvLyAgY29uc29sZS5sb2coJ2NsaWNrJyk7XG4gICAgICAgIHRoaXMucGlhbm8uaW50ZXJhY3RpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLnBpYW5vLnBhaW50YnJ1c2ggPSAhdGhpcy5zdGF0ZTtcbiAgICAgICAgdGhpcy5kb3duKHRoaXMucGlhbm8ucGFpbnRicnVzaCk7XG4gICAgICB9O1xuXG4gICAgICB0aGlzLnBhZC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnBpYW5vLmludGVyYWN0aW5nKSB7XG4gICAgICAvLyAgICBjb25zb2xlLmxvZygnbW91c2VvdmVyJyk7XG4gICAgICAgICAgdGhpcy5kb3duKHRoaXMucGlhbm8ucGFpbnRicnVzaCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG5cbiAgICAgIHRoaXMubW92ZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMucGlhbm8uaW50ZXJhY3RpbmcpIHtcbiAgICAgICAgLy8gIGNvbnNvbGUubG9nKCdtb3ZlJyk7XG4gICAgICAgICAgdGhpcy5iZW5kKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cblxuICAgICAgdGhpcy5yZWxlYXNlID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnBpYW5vLmludGVyYWN0aW5nID0gZmFsc2U7XG4gICAgICAvLyAgY29uc29sZS5sb2coJ3JlbGVhc2UnKTtcbiAgICAgIC8vICB0aGlzLnVwKCk7XG4gICAgICB9O1xuICAgICAgdGhpcy5wYWQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMucGlhbm8uaW50ZXJhY3RpbmcpIHtcbiAgICAgICAgLy8gIGNvbnNvbGUubG9nKCdtb3VzZXVwJyk7XG4gICAgICAgICAgdGhpcy51cCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMucGFkLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5waWFuby5pbnRlcmFjdGluZykge1xuICAgICAgICAvLyAgY29uc29sZS5sb2coJ21vdXNlb3V0Jyk7XG4gICAgICAgICAgdGhpcy51cCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgIH1cblxuICB9XG5cbiAgc2l6ZUludGVyZmFjZSgpIHtcblxuICAgICAgICAvL2xldCByYWRpdXMgPSBNYXRoLm1pbih0aGlzLndpZHRoLHRoaXMuaGVpZ2h0KSAvIDU7XG4gICAgICAgIGxldCByYWRpdXMgPSAwO1xuXG4gICAgICAgIHRoaXMucGFkLnNldEF0dHJpYnV0ZSgneCcsMC41KTtcbiAgICAgICAgdGhpcy5wYWQuc2V0QXR0cmlidXRlKCd5JywwLjUpO1xuICAgICAgICBpZiAodGhpcy53aWR0aCA+IDIpIHtcbiAgICAgICAgICB0aGlzLnBhZC5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgdGhpcy53aWR0aCAtIDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucGFkLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCB0aGlzLndpZHRoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5oZWlnaHQgPiAyKSB7XG4gICAgICAgICAgdGhpcy5wYWQuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5wYWQuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wYWQuc2V0QXR0cmlidXRlKCdyeCcsIHJhZGl1cyk7XG4gICAgICAgIHRoaXMucGFkLnNldEF0dHJpYnV0ZSgncnknLCByYWRpdXMpO1xuXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKCF0aGlzLnN0YXRlKSB7XG4gICAgICB0aGlzLnBhZC5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCB0aGlzLmNvbG9yc1t0aGlzLmNvbG9yXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucGFkLnNldEF0dHJpYnV0ZSgnZmlsbCcsIHRoaXMuY29sb3JzLmFjY2VudCk7XG4gICAgfVxuICB9XG5cbn1cblxuLyoqXG4qIFBpYW5vXG4qXG4qIEBkZXNjcmlwdGlvbiBQaWFubyBrZXlib2FyZCBpbnRlcmZhY2VcbipcbiogQGRlbW8gPGRpdiBuZXh1cy11aT1cInBpYW5vXCI+PC9kaXY+XG4qXG4qIEBleGFtcGxlXG4qIHZhciBwaWFubyA9IG5ldyBOZXh1cy5QaWFubygnI3RhcmdldCcpXG4qXG4qIEBleGFtcGxlXG4qIHZhciBwaWFubyA9IG5ldyBOZXh1cy5QaWFubygnI3RhcmdldCcse1xuKiAgICAgJ3NpemUnOiBbNTAwLDEyNV0sXG4qICAgICAnbW9kZSc6ICdidXR0b24nLCAgLy8gJ2J1dHRvbicsICd0b2dnbGUnLCBvciAnaW1wdWxzZSdcbiogICAgICdsb3dOb3RlJzogMjQsXG4qICAgICAnaGlnaE5vdGUnOiA2MFxuKiB9KVxuKlxuKiBAb3V0cHV0XG4qIGNoYW5nZVxuKiBGaXJlcyBhbnkgdGltZSBhIG5ldyBrZXkgaXMgcHJlc3NlZCBvciByZWxlYXNlZCA8YnI+XG4qIFRoZSBldmVudCBkYXRhIGlzIGFuIG9iamVjdCBjb250YWluaW5nIDxpPm5vdGU8L2k+IGFuZCA8aT5zdGF0ZTwvaT4gcHJvcGVydGllcy5cbipcbiogQG91dHB1dGV4YW1wbGVcbiogcGlhbm8ub24oJ2NoYW5nZScsZnVuY3Rpb24odikge1xuKiAgIGNvbnNvbGUubG9nKHYpO1xuKiB9KVxuKlxuKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGlhbm8gZXh0ZW5kcyBJbnRlcmZhY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgbGV0IG9wdGlvbnMgPSBbJ3ZhbHVlJ107XG5cbiAgICBsZXQgZGVmYXVsdHMgPSB7XG4gICAgICAnc2l6ZSc6IFs1MDAsMTI1XSxcbiAgICAgICdsb3dOb3RlJzogMjQsXG4gICAgICAnaGlnaE5vdGUnOiA2MCxcbiAgICAgICdtb2RlJzogJ2J1dHRvbidcbiAgICB9O1xuXG4gICAgc3VwZXIoYXJndW1lbnRzLG9wdGlvbnMsZGVmYXVsdHMpO1xuXG4gICAgdGhpcy5rZXlQYXR0ZXJuID0gWyd3JywnYicsJ3cnLCdiJywndycsJ3cnLCdiJywndycsJ2InLCd3JywnYicsJ3cnXTtcblxuICAgIHRoaXMucGFpbnRicnVzaCA9IGZhbHNlO1xuXG4gICAgdGhpcy5tb2RlID0gdGhpcy5zZXR0aW5ncy5tb2RlO1xuXG4gICAgdGhpcy5yYW5nZSA9IHtcbiAgICAgIGxvdzogdGhpcy5zZXR0aW5ncy5sb3dOb3RlLFxuICAgICAgaGlnaDogdGhpcy5zZXR0aW5ncy5oaWdoTm90ZVxuICAgIH07XG5cbiAgICB0aGlzLnJhbmdlLnNpemUgPSB0aGlzLnJhbmdlLmhpZ2ggLSB0aGlzLnJhbmdlLmxvdztcblxuICAgIHRoaXMua2V5cyA9IFtdO1xuXG4gICAgdGhpcy50b2dnbGVUbyA9IGZhbHNlO1xuXG4gICAgdGhpcy5pbml0KCk7XG4gICAgdGhpcy5yZW5kZXIoKTtcblxuICB9XG5cbiAgYnVpbGRGcmFtZSgpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5ib3JkZXJSYWRpdXMgPSAnMHB4JztcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XG4gICAgdGhpcy5wYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgfVxuXG4gIGJ1aWxkSW50ZXJmYWNlKCkge1xuXG4gICAgdGhpcy5rZXlzID0gW107XG5cbiAgICBmb3IgKGxldCBpPTA7aTx0aGlzLnJhbmdlLmhpZ2ggLSB0aGlzLnJhbmdlLmxvdztpKyspIHtcblxuICAgICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIGxldCBzY2FsZUluZGV4ID0gKGkrdGhpcy5yYW5nZS5sb3cpICUgdGhpcy5rZXlQYXR0ZXJuLmxlbmd0aDtcblxuICAgICAgbGV0IGtleSA9IG5ldyBQaWFub0tleShjb250YWluZXIsIHtcbiAgICAgICAgICBjb21wb25lbnQ6IHRydWUsXG4gICAgICAgICAgbm90ZTogaSt0aGlzLnJhbmdlLmxvdyxcbiAgICAgICAgICBjb2xvcjogdGhpcy5rZXlQYXR0ZXJuW3NjYWxlSW5kZXhdLFxuICAgICAgICAgIG1vZGU6IHRoaXMubW9kZVxuICAgICAgICB9LCB0aGlzLmtleUNoYW5nZS5iaW5kKHRoaXMsaSt0aGlzLnJhbmdlLmxvdykpO1xuXG4gICAgICBrZXkucGlhbm8gPSB0aGlzO1xuXG4gICAgICBpZiAodG91Y2guZXhpc3RzKSB7XG4gICAgICAgIGtleS5wYWQuaW5kZXggPSBpO1xuICAgICAgICBrZXkucHJlQ2xpY2sgPSBrZXkucHJlTW92ZSA9IGtleS5wcmVSZWxlYXNlID0gKCkgPT4ge307XG4gICAgICAgIGtleS5jbGljayA9IGtleS5tb3ZlID0ga2V5LnJlbGVhc2UgPSAoKSA9PiB7fTtcbiAgICAgICAga2V5LnByZVRvdWNoID0ga2V5LnByZVRvdWNoTW92ZSA9IGtleS5wcmVUb3VjaFJlbGVhc2UgPSAoKSA9PiB7fTtcbiAgICAgICAga2V5LnRvdWNoID0ga2V5LnRvdWNoTW92ZSA9IGtleS50b3VjaFJlbGVhc2UgPSAoKSA9PiB7fTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5rZXlzLnB1c2goa2V5KTtcbiAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gICAgfVxuICAgIGlmICh0b3VjaC5leGlzdHMpIHtcbiAgICAgIHRoaXMuYWRkVG91Y2hMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgfVxuXG4gIHNpemVJbnRlcmZhY2UoKSB7XG5cbiAgICBsZXQga2V5WCA9IDA7XG5cbiAgICBsZXQga2V5UG9zaXRpb25zID0gW107XG5cbiAgICBmb3IgKGxldCBpPTA7aTx0aGlzLnJhbmdlLmhpZ2ggLSB0aGlzLnJhbmdlLmxvdztpKyspIHtcblxuICAgICAga2V5UG9zaXRpb25zLnB1c2goa2V5WCk7XG5cbiAgICAgIGxldCBzY2FsZUluZGV4ID0gKGkrdGhpcy5yYW5nZS5sb3cpICUgdGhpcy5rZXlQYXR0ZXJuLmxlbmd0aDtcbiAgICAgIGxldCBuZXh0U2NhbGVJbmRleCA9IChpKzErdGhpcy5yYW5nZS5sb3cpICUgdGhpcy5rZXlQYXR0ZXJuLmxlbmd0aDtcbiAgICAgIGlmIChpKzErdGhpcy5yYW5nZS5sb3cgPj0gdGhpcy5yYW5nZS5oaWdoKSB7XG4gICAgICAgIGtleVggKz0gMTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5rZXlQYXR0ZXJuW3NjYWxlSW5kZXhdID09PSAndycgJiYgdGhpcy5rZXlQYXR0ZXJuW25leHRTY2FsZUluZGV4XSA9PT0gJ3cnKSB7XG4gICAgICAgIGtleVggKz0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGtleVggKz0gMC41O1xuICAgICAgfVxuICAgIH1cbiAgICBsZXQga2V5c1dpZGUgPSBrZXlYO1xuXG5cbiAgLy8gIGxldCBwYWRkaW5nID0gdGhpcy53aWR0aCAvIDEyMDtcbiAgICBsZXQgcGFkZGluZyA9IDE7XG4gICAgbGV0IGJ1dHRvbldpZHRoID0gKHRoaXMud2lkdGgtcGFkZGluZyoyKSAvIGtleXNXaWRlO1xuICAgIGxldCBidXR0b25IZWlnaHQgPSAodGhpcy5oZWlnaHQtcGFkZGluZyoyKSAvIDI7XG5cbiAgICBmb3IgKGxldCBpPTA7aTx0aGlzLmtleXMubGVuZ3RoO2krKykge1xuXG4gICAgICBsZXQgY29udGFpbmVyID0gdGhpcy5rZXlzW2ldLnBhcmVudDtcbiAgICAgIGNvbnRhaW5lci5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICBjb250YWluZXIuc3R5bGUubGVmdCA9IChrZXlQb3NpdGlvbnNbaV0qYnV0dG9uV2lkdGgrcGFkZGluZykgKyAncHgnO1xuICAgICAgaWYgKHRoaXMua2V5c1tpXS5jb2xvciA9PT0gJ3cnKSB7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS50b3AgPSAocGFkZGluZykgKyAncHgnO1xuICAgICAgICB0aGlzLmtleXNbaV0ucmVzaXplKGJ1dHRvbldpZHRoLCBidXR0b25IZWlnaHQqMik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250YWluZXIuc3R5bGUuekluZGV4ID0gMTtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLnRvcCA9IHBhZGRpbmcrJ3B4JztcbiAgICAgICAgdGhpcy5rZXlzW2ldLnJlc2l6ZShidXR0b25XaWR0aCwgYnV0dG9uSGVpZ2h0KjEuMSk7XG4gICAgICB9XG5cbiAgICB9XG5cbiAgfVxuXG4gIGNvbG9ySW50ZXJmYWNlKCkge1xuXG4gICAgLy8gUGlhbm8ga2V5cyBkb24ndCBhY3R1YWxseSBoYXZlIGEgc3Ryb2tlIGJvcmRlclxuICAgIC8vIFRoZXkgaGF2ZSBzcGFjZSBiZXR3ZWVuIHRoZW0sIHdoaWNoIHNob3dzIHRoZSBQaWFubyBiZyBjb2xvclxuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLmNvbG9ycy5tZWRpdW1MaWdodDtcblxuICAgIGZvciAobGV0IGk9MDtpPHRoaXMua2V5cy5sZW5ndGg7aSsrKSB7XG4gICAgICB0aGlzLmtleXNbaV0uY29sb3JzID0ge1xuICAgICAgICAndyc6IHRoaXMuY29sb3JzLmxpZ2h0LFxuICAgICAgICAnYic6IHRoaXMuY29sb3JzLmRhcmssXG4gICAgICAgICdhY2NlbnQnOiB0aGlzLmNvbG9ycy5hY2NlbnQsXG4gICAgICAgICdib3JkZXInOiB0aGlzLmNvbG9ycy5tZWRpdW1MaWdodFxuICAgICAgfTtcbiAgICAgIHRoaXMua2V5c1tpXS5jb2xvckludGVyZmFjZSgpO1xuICAgICAgdGhpcy5rZXlzW2ldLnJlbmRlcigpO1xuICAgIH1cblxuXG4gIH1cblxuICBrZXlDaGFuZ2Uobm90ZSxvbikge1xuICAgIC8vIGVtaXQgZGF0YSBmb3IgYW55IGtleSB0dXJuaW5nIG9uL29mZlxuICAgIC8vIFwibm90ZVwiIGlzIHRoZSBub3RlIHZhbHVlXG4gICAgLy8gXCJvblwiIGlzIGEgYm9vbGVhbiB3aGV0aGVyIGl0IGlzIG9uIG9yIG9mZlxuICAgIC8vIGluIGFmdGVydG91Y2ggbW9kZSwgXCJvbjogaXMgYW4gb2JqZWN0IHdpdGggc3RhdGUveC95IHByb3BlcnRpZXNcbiAgICB2YXIgZGF0YSA9IHtcbiAgICAgIG5vdGU6IG5vdGVcbiAgICB9O1xuICAgIGlmICh0eXBlb2Ygb24gPT09ICdvYmplY3QnKSB7XG4gICAgICBkYXRhLnN0YXRlID0gb24uc3RhdGU7XG4gICAgLy8gIGRhdGEueCA9IG9uLnhcbiAgICAvLyAgZGF0YS55ID0gb24ueVxuICAgIH0gZWxzZSB7XG4gICAgICBkYXRhLnN0YXRlID0gb247XG4gICAgfVxuICAgIHRoaXMuZW1pdCgnY2hhbmdlJyxkYXRhKTtcbiAgfVxuXG4gIC8qIGRyYWcobm90ZSxvbikge1xuICAgIHRoaXMuZW1pdCgnY2hhbmdlJyx7XG4gICAgICBub3RlOiBub3RlLFxuICAgICAgc3RhdGU6IG9uXG4gICAgfSk7XG4gIH0gKi9cblxuICByZW5kZXIoKSB7XG4gICAgLy8gbG9vcCB0aHJvdWdoIGFuZCByZW5kZXIgdGhlIGtleXM/XG4gIH1cblxuXG4gIGFkZFRvdWNoTGlzdGVuZXJzKCkge1xuXG4gICAgdGhpcy5wcmVDbGljayA9IHRoaXMucHJlTW92ZSA9IHRoaXMucHJlUmVsZWFzZSA9ICgpID0+IHt9O1xuICAgIHRoaXMuY2xpY2sgPSB0aGlzLm1vdmUgPSB0aGlzLnJlbGVhc2UgPSAoKSA9PiB7fTtcbiAgICB0aGlzLnByZVRvdWNoID0gdGhpcy5wcmVUb3VjaE1vdmUgPSB0aGlzLnByZVRvdWNoUmVsZWFzZSA9ICgpID0+IHt9O1xuICAgIHRoaXMudG91Y2ggPSB0aGlzLnRvdWNoTW92ZSA9IHRoaXMudG91Y2hSZWxlYXNlID0gKCkgPT4ge307XG5cbiAgICB0aGlzLmN1cnJlbnRFbGVtZW50ID0gZmFsc2U7XG5cbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIChlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygndG91Y2hzdGFydCcpO1xuICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KGUudGFyZ2V0VG91Y2hlc1swXS5jbGllbnRYLGUudGFyZ2V0VG91Y2hlc1swXS5jbGllbnRZKTtcbiAgICAgIGxldCBrZXkgPSB0aGlzLmtleXNbZWxlbWVudC5pbmRleF07XG4gICAgICB0aGlzLnBhaW50YnJ1c2ggPSAha2V5LnN0YXRlO1xuICAgICAga2V5LmRvd24odGhpcy5wYWludGJydXNoKTtcbiAgICAgIHRoaXMuY3VycmVudEVsZW1lbnQgPSBlbGVtZW50LmluZGV4O1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9KTtcblxuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCAoZSkgPT4ge1xuICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KGUudGFyZ2V0VG91Y2hlc1swXS5jbGllbnRYLGUudGFyZ2V0VG91Y2hlc1swXS5jbGllbnRZKTtcbiAgICAgIGxldCBrZXkgPSB0aGlzLmtleXNbZWxlbWVudC5pbmRleF07XG4gICAgICBpZiAoZWxlbWVudC5pbmRleCE9PXRoaXMuY3VycmVudEVsZW1lbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudEVsZW1lbnQpIHtcbiAgICAgICAgICBsZXQgcGFzdEtleSA9IHRoaXMua2V5c1t0aGlzLmN1cnJlbnRFbGVtZW50XTtcbiAgICAgICAgICBwYXN0S2V5LnVwKCk7XG4gICAgICAgIH1cbiAgICAgICAga2V5LmRvd24odGhpcy5wYWludGJydXNoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGtleS5iZW5kKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmN1cnJlbnRFbGVtZW50ID0gZWxlbWVudC5pbmRleDtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCAoZSkgPT4ge1xuICAgICAgLy8gbm8gdG91Y2hlcyB0byBjYWxjdWxhdGUgYmVjYXVzZSBub25lIHJlbWFpbmluZ1xuICAgICAgbGV0IGtleSA9IHRoaXMua2V5c1t0aGlzLmN1cnJlbnRFbGVtZW50XTtcbiAgICAgIGtleS51cCgpO1xuICAgICAgdGhpcy5pbnRlcmFjdGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5jdXJyZW50RWxlbWVudCA9IGZhbHNlO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9KTtcblxuICB9XG5cbiAgLyoqXG4gIERlZmluZSB0aGUgcGl0Y2ggcmFuZ2UgKGxvd2VzdCBhbmQgaGlnaGVzdCBub3RlKSBvZiB0aGUgcGlhbm8ga2V5Ym9hcmQuXG4gIEBwYXJhbSBsb3cge251bWJlcn0gTUlESSBub3RlIHZhbHVlIG9mIHRoZSBsb3dlc3Qgbm90ZSBvbiB0aGUga2V5Ym9hcmRcbiAgQHBhcmFtIGhpZ2gge251bWJlcn0gTUlESSBub3RlIHZhbHVlIG9mIHRoZSBoaWdoZXN0IG5vdGUgb24gdGhlIGtleWJvYXJkXG4gICovXG4gIHNldFJhbmdlKGxvdyxoaWdoKSB7XG4gICAgdGhpcy5yYW5nZS5sb3cgPSBsb3c7XG4gICAgdGhpcy5yYW5nZS5oaWdoID0gaGlnaDtcbiAgICB0aGlzLmVtcHR5KCk7XG4gICAgdGhpcy5idWlsZEludGVyZmFjZSgpO1xuICB9XG5cbiAgLyoqXG4gIFR1cm4gYSBrZXkgb24gb3Igb2ZmIHVzaW5nIGl0cyBNSURJIG5vdGUgdmFsdWU7XG4gIEBwYXJhbSBub3RlIHtudW1iZXJ9IE1JREkgbm90ZSB2YWx1ZSBvZiB0aGUga2V5IHRvIGNoYW5nZVxuICBAcGFyYW0gb24ge2Jvb2xlYW59IFdoZXRoZXIgdGhlIG5vdGUgc2hvdWxkIHR1cm4gb24gb3Igb2ZmXG4gICovXG4gIHRvZ2dsZUtleShub3RlLCBvbikge1xuICAgIHRoaXMua2V5c1tub3RlLXRoaXMucmFuZ2UubG93XS5mbGlwKG9uKTtcbiAgfVxuXG4gIC8qKlxuICBUdXJuIGEga2V5IG9uIG9yIG9mZiB1c2luZyBpdHMga2V5IGluZGV4IG9uIHRoZSBwaWFubyBpbnRlcmZhY2UuXG4gIEBwYXJhbSBpbmRleCB7bnVtYmVyfSBJbmRleCBvZiB0aGUga2V5IHRvIGNoYW5nZVxuICBAcGFyYW0gb24ge2Jvb2xlYW59IFdoZXRoZXIgdGhlIG5vdGUgc2hvdWxkIHR1cm4gb24gb3Igb2ZmXG4gICovXG4gIHRvZ2dsZUluZGV4KGluZGV4LCBvbikge1xuICAgIHRoaXMua2V5c1tpbmRleF0uZmxpcChvbik7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9qc2hpbnQtbG9hZGVyIS4vbGliL2ludGVyZmFjZXMvcGlhbm8uanMiLCIndXNlIHN0cmljdCc7XG5cbmxldCBzdmcgPSByZXF1aXJlKCcuLi91dGlsL3N2ZycpO1xubGV0IGRvbSA9IHJlcXVpcmUoJy4uL3V0aWwvZG9tJyk7XG5sZXQgSW50ZXJmYWNlID0gcmVxdWlyZSgnLi4vY29yZS9pbnRlcmZhY2UnKTtcbmxldCBCdXR0b25UZW1wbGF0ZSA9IHJlcXVpcmUoJy4uL2NvbXBvbmVudHMvYnV0dG9udGVtcGxhdGUnKTtcbmxldCBNYXRyaXhNb2RlbCA9IHJlcXVpcmUoJy4uL21vZGVscy9tYXRyaXgnKTtcbmxldCBDb3VudGVyTW9kZWwgPSByZXF1aXJlKCcuLi9tb2RlbHMvY291bnRlcicpO1xubGV0IHRvdWNoID0gcmVxdWlyZSgnLi4vdXRpbC90b3VjaCcpO1xuXG5cblxuY2xhc3MgTWF0cml4Q2VsbCBleHRlbmRzIEJ1dHRvblRlbXBsYXRlIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIGxldCBvcHRpb25zID0gWyd2YWx1ZScsXTtcblxuICAgIGxldCBkZWZhdWx0cyA9IHtcbiAgICAgICdzaXplJzogWzgwLDgwXSxcbiAgICAgICd0YXJnZXQnOiBmYWxzZSxcbiAgICAgICdtb2RlJzogJ3RvZ2dsZScsXG4gICAgICAndmFsdWUnOiAwXG4gICAgfTtcblxuICAgIHN1cGVyKGFyZ3VtZW50cyxvcHRpb25zLGRlZmF1bHRzKTtcblxuICAgIHRoaXMuaW5kZXggPSB0aGlzLnNldHRpbmdzLmluZGV4O1xuICAgIHRoaXMucm93ID0gdGhpcy5zZXR0aW5ncy5yb3c7XG4gICAgdGhpcy5jb2x1bW4gPSB0aGlzLnNldHRpbmdzLmNvbHVtbjtcblxuICAgIHRoaXMubWF0cml4ID0gdGhpcy5zZXR0aW5ncy5tYXRyaXg7XG5cbiAgICB0aGlzLmludGVyYWN0aW5nID0gZmFsc2U7XG4gICAgdGhpcy5wYWludGJydXNoID0gZmFsc2U7XG5cbiAgICB0aGlzLmluaXQoKTtcbiAgICB0aGlzLnJlbmRlcigpO1xuXG4gIH1cblxuICBidWlsZEZyYW1lKCkge1xuICAgIHRoaXMuZWxlbWVudCA9IHN2Zy5jcmVhdGUoJ3N2ZycpO1xuICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3dpZHRoJyx0aGlzLndpZHRoKTtcbiAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdoZWlnaHQnLHRoaXMuaGVpZ2h0KTtcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUudG9wID0gJzBweCc7XG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLmxlZnQgPSAnMHB4JztcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIHRoaXMucGFyZW50LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XG4gIH1cblxuICBidWlsZEludGVyZmFjZSgpIHtcblxuICAgIHRoaXMucGFkID0gc3ZnLmNyZWF0ZSgncmVjdCcpO1xuICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLnBhZCk7XG5cbiAgICB0aGlzLmludGVyYWN0aW9uVGFyZ2V0ID0gdGhpcy5wYWQ7XG5cbiAgICAvKiBldmVudHMgKi9cblxuICAgIGlmICghdG91Y2guZXhpc3RzKSB7XG5cbiAgICAgIHRoaXMuY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMubWF0cml4LmludGVyYWN0aW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5tYXRyaXgucGFpbnRicnVzaCA9ICF0aGlzLnN0YXRlO1xuICAgICAgICB0aGlzLmRvd24odGhpcy5tYXRyaXgucGFpbnRicnVzaCk7XG4gICAgICB9O1xuICAgICAgdGhpcy5wYWQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5tYXRyaXguaW50ZXJhY3RpbmcpIHtcbiAgICAgICAgICB0aGlzLmRvd24odGhpcy5tYXRyaXgucGFpbnRicnVzaCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG5cbiAgICAgIHRoaXMubW92ZSA9ICgpID0+IHtcbiAgICAgIH07XG4gICAgICB0aGlzLnBhZC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZSkgPT4ge1xuICAgICAgICBpZiAodGhpcy5tYXRyaXguaW50ZXJhY3RpbmcpIHtcbiAgICAgICAgICBpZiAoIXRoaXMub2Zmc2V0KSB7XG4gICAgICAgICAgICB0aGlzLm9mZnNldCA9IGRvbS5maW5kUG9zaXRpb24odGhpcy5lbGVtZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5tb3VzZSA9IGRvbS5sb2NhdGVNb3VzZShlLHRoaXMub2Zmc2V0KTtcbiAgICAgICAgICB0aGlzLmJlbmQoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cblxuICAgICAgdGhpcy5yZWxlYXNlID0gKCkgPT4ge1xuICAgICAgICB0aGlzLm1hdHJpeC5pbnRlcmFjdGluZyA9IGZhbHNlO1xuICAgICAgfTtcbiAgICAgIHRoaXMucGFkLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLm1hdHJpeC5pbnRlcmFjdGluZykge1xuICAgICAgICAgIHRoaXMudXAoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLnBhZC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMubWF0cml4LmludGVyYWN0aW5nKSB7XG4gICAgICAgICAgdGhpcy51cCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgfVxuXG4gIHNpemVJbnRlcmZhY2UoKSB7XG5cbiAgICB0aGlzLnBhZC5zZXRBdHRyaWJ1dGUoJ3gnLDEpO1xuICAgIHRoaXMucGFkLnNldEF0dHJpYnV0ZSgneScsMSk7XG4gICAgaWYgKHRoaXMud2lkdGggPiAyKSB7XG4gICAgICB0aGlzLnBhZC5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgdGhpcy53aWR0aCAtIDIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBhZC5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgdGhpcy53aWR0aCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmhlaWdodCA+IDIpIHtcbiAgICAgIHRoaXMucGFkLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgdGhpcy5oZWlnaHQgLSAyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wYWQuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCB0aGlzLmhlaWdodCk7XG4gICAgfVxuICAgIC8vdGhpcy5wYWQuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCB0aGlzLmhlaWdodCAtIDIpO1xuICAgIHRoaXMucGFkLnNldEF0dHJpYnV0ZSgnZmlsbCcsIHRoaXMubWF0cml4LmNvbG9ycy5maWxsKTtcblxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICghdGhpcy5zdGF0ZSkge1xuICAgICAgdGhpcy5wYWQuc2V0QXR0cmlidXRlKCdmaWxsJywgdGhpcy5tYXRyaXguY29sb3JzLmZpbGwpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBhZC5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCB0aGlzLm1hdHJpeC5jb2xvcnMuYWNjZW50KTtcbiAgICB9XG4gIH1cblxufVxuXG4vKipcbiogU2VxdWVuY2VyXG4qXG4qIEBkZXNjcmlwdGlvbiBHcmlkIG9mIGJ1dHRvbnMgd2l0aCBidWlsdC1pbiBzdGVwIHNlcXVlbmNlci5cbipcbiogQGRlbW8gPGRpdiBuZXh1cy11aT1cInNlcXVlbmNlclwiIHN0eWxlPVwid2lkdGg6NDAwcHg7aGVpZ2h0OjIwMHB4O1wiPjwvZGl2PlxuKlxuKiBAZXhhbXBsZVxuKiB2YXIgc2VxdWVuY2VyID0gbmV3IE5leHVzLlNlcXVlbmNlcignI3RhcmdldCcpXG4qXG4qIEBleGFtcGxlXG4qIHZhciBzZXF1ZW5jZXIgPSBuZXcgTmV4dXMuU2VxdWVuY2VyKCcjdGFyZ2V0Jyx7XG4qICAnc2l6ZSc6IFs0MDAsMjAwXSxcbiogICdtb2RlJzogJ3RvZ2dsZScsXG4qICAncm93cyc6IDUsXG4qICAnY29sdW1ucyc6IDEwXG4qfSlcbipcbiogQG91dHB1dFxuKiBjaGFuZ2VcbiogRmlyZXMgYW55IHRpbWUgdGhlIGludGVyZmFjZSdzIG1hdHJpeCBjaGFuZ2VzLiA8YnI+XG4qIFRoZSBldmVudCBkYXRhIGlzIGFuIG9iamVjdCBjb250YWluaW5nIDxpPnJvdzwvaT4gKG51bWJlciksIDxpPmNvbHVtbjwvaT4gKG51bWJlciksIGFuZCA8aT5zdGF0ZTwvaT4gKGJvb2xlYW4pIHByb3BlcnRpZXMuXG4qXG4qIEBvdXRwdXRleGFtcGxlXG4qIHNlcXVlbmNlci5vbignY2hhbmdlJyxmdW5jdGlvbih2KSB7XG4qICAgY29uc29sZS5sb2codik7XG4qIH0pXG4qXG4qIEBvdXRwdXRcbiogc3RlcFxuKiBGaXJlcyBhbnkgdGltZSB0aGUgc2VxdWVuY2VyIHN0ZXBzIHRvIHRoZSBuZXh0IGNvbHVtbiwgaW4gc2VxdWVjZSBtb2RlLiA8YnI+XG4qIFRoZSBldmVudCBkYXRhIGlzIGFuIDxpPmFycmF5PC9pPiBjb250YWluaW5nIGFsbCB2YWx1ZXMgaW4gdGhlIGNvbHVtbiwgdG9wIGZpcnN0LlxuKlxuKiBAb3V0cHV0ZXhhbXBsZVxuKiBzZXF1ZW5jZXIub24oJ3N0ZXAnLGZ1bmN0aW9uKHYpIHtcbiogICBjb25zb2xlLmxvZyh2KTtcbiogfSlcbiovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlcXVlbmNlciBleHRlbmRzIEludGVyZmFjZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICBsZXQgb3B0aW9ucyA9IFsndmFsdWUnXTtcblxuICAgIGxldCBkZWZhdWx0cyA9IHtcbiAgICAgICdzaXplJzogWzQwMCwyMDBdLFxuICAgICAgJ21vZGUnOiAndG9nZ2xlJyxcbiAgICAgICdyb3dzJzogNSxcbiAgICAgICdjb2x1bW5zJzogMTBcbiAgICB9O1xuXG4gICAgc3VwZXIoYXJndW1lbnRzLG9wdGlvbnMsZGVmYXVsdHMpO1xuXG4gICAgdGhpcy5hY3RpdmUgPSAtMTtcblxuICAgIC8qKlxuICAgICogQnV0dG9uIGludGVyYWN0aW9uIG1vZGU6IHNlZSBCdXR0b25cbiAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgKiBAZXhhbXBsZSBidXR0b24ubW9kZSA9ICd0b2dnbGUnO1xuICAgICovXG4gICAgdGhpcy5tb2RlID0gdGhpcy5zZXR0aW5ncy5tb2RlO1xuXG4gICAgLyoqXG4gICAgKiBUaGUgaW50ZXJ2YWwgb2JqZWN0IHdoaWNoIGNvbnRyb2xzIHRpbWluZyBhbmQgc2VxdWVuY2Ugc2NoZWR1bGluZy5cbiAgICAqIEB0eXBlIHtpbnRlcnZhbH1cbiAgICAqL1xuICAgIHRoaXMuaW50ZXJ2YWwgPSBuZXcgTmV4dXMuSW50ZXJ2YWwoMjAwLGZ1bmN0aW9uKCkge30sZmFsc2UpOyAvLyBqc2hpbnQgaWdub3JlOmxpbmVcblxuICAgIC8qKlxuICAgICogQSBNYXRyaXggbW9kZWwgY29udGFpbmluZyBtZXRob2RzIGZvciBtYW5pcHVsYXRpbmcgdGhlIHNlcXVlbmNlcidzIGFycmF5IG9mIHZhbHVlcy4gVG8gbGVhcm4gaG93IHRvIG1hbmlwdWxhdGUgdGhlIG1hdHJpeCwgcmVhZCBhYm91dCB0aGUgbWF0cml4IG1vZGVsLlxuICAgICogQHR5cGUge21hdHJpeH1cbiAgICAqL1xuICAgIHRoaXMubWF0cml4ID0gbmV3IE1hdHJpeE1vZGVsKHRoaXMuc2V0dGluZ3Mucm93cyx0aGlzLnNldHRpbmdzLmNvbHVtbnMpO1xuICAgIHRoaXMubWF0cml4LnVpID0gdGhpcztcblxuICAgIC8qKlxuICAgICogQSBDb3VudGVyIG1vZGVsIHdoaWNoIHRoZSBzZXF1ZW5jZXIgc3RlcHMgdGhyb3VnaC4gRm9yIGV4YW1wbGUsIHlvdSBjb3VsZCB1c2UgdGhpcyBtb2RlbCB0byBzdGVwIHRocm91Z2ggdGhlIHNlcXVlbmNlciBpbiByZXZlcnNlLCByYW5kb21seSwgb3IgaW4gYSBkcnVuayB3YWxrLlxuICAgICogQHR5cGUge2NvdW50ZXJ9XG4gICAgKi9cbiAgICB0aGlzLnN0ZXBwZXIgPSBuZXcgQ291bnRlck1vZGVsKDAsdGhpcy5jb2x1bW5zKTtcblxuICAgIHRoaXMuaW5pdCgpO1xuXG4gIH1cblxuICBidWlsZEZyYW1lKCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIHRoaXMuZWxlbWVudC5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xuICAgIHRoaXMucGFyZW50LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XG4gICAgaWYgKHRvdWNoLmV4aXN0cykge1xuICAgICAgdGhpcy5hZGRUb3VjaExpc3RlbmVycygpO1xuICAgIH1cbiAgfVxuXG4gIGJ1aWxkSW50ZXJmYWNlKCkge1xuXG4gICAgdGhpcy5jZWxscyA9IFtdO1xuICAgIGZvciAobGV0IGk9MDtpPHRoaXMubWF0cml4Lmxlbmd0aDtpKyspIHtcblxuICAgICAgbGV0IGxvY2F0aW9uID0gdGhpcy5tYXRyaXgubG9jYXRlKGkpO1xuICAgICAgICAgICAgICAgICAgICAgLy8gcmV0dXJucyB7cm93LGNvbH1cblxuICAgICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIGNvbnRhaW5lci5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG5cblxuICAgICAgbGV0IGNlbGwgPSBuZXcgTWF0cml4Q2VsbChjb250YWluZXIsIHtcbiAgICAgICAgICBjb21wb25lbnQ6IHRydWUsXG4gICAgICAgICAgaW5kZXg6IGksXG4gICAgICAgICAgcm93OiBsb2NhdGlvbi5yb3csXG4gICAgICAgICAgY29sdW1uOiBsb2NhdGlvbi5jb2x1bW4sXG4gICAgICAgICAgbW9kZTogdGhpcy5tb2RlLFxuICAgICAgICAgIG1hdHJpeDogdGhpc1xuICAgICAgICB9LCB0aGlzLmtleUNoYW5nZS5iaW5kKHRoaXMsaSkpO1xuXG4gICAgLy8gIGNlbGwubWF0cml4ID0gdGhpcztcbiAgICAgIGlmICh0b3VjaC5leGlzdHMpIHtcbiAgICAgICAgY2VsbC5wYWQuaW5kZXggPSBpO1xuICAgICAgICBjZWxsLnByZUNsaWNrID0gY2VsbC5wcmVNb3ZlID0gY2VsbC5wcmVSZWxlYXNlID0gKCkgPT4ge307XG4gICAgICAgIGNlbGwuY2xpY2sgPSBjZWxsLm1vdmUgPSBjZWxsLnJlbGVhc2UgPSAoKSA9PiB7fTtcbiAgICAgICAgY2VsbC5wcmVUb3VjaCA9IGNlbGwucHJlVG91Y2hNb3ZlID0gY2VsbC5wcmVUb3VjaFJlbGVhc2UgPSAoKSA9PiB7fTtcbiAgICAgICAgY2VsbC50b3VjaCA9IGNlbGwudG91Y2hNb3ZlID0gY2VsbC50b3VjaFJlbGVhc2UgPSAoKSA9PiB7fTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jZWxscy5wdXNoKGNlbGwpO1xuICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgICB9XG4gICAgdGhpcy5zaXplSW50ZXJmYWNlKCk7XG4gIH1cblxuICBzaXplSW50ZXJmYWNlKCkge1xuXG4gICAgbGV0IGNlbGxXaWR0aCA9IHRoaXMud2lkdGggLyB0aGlzLmNvbHVtbnM7XG4gICAgbGV0IGNlbGxIZWlnaHQgPSB0aGlzLmhlaWdodCAvIHRoaXMucm93cztcblxuICAgIGZvciAobGV0IGk9MDsgaTx0aGlzLmNlbGxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgY29udGFpbmVyID0gdGhpcy5jZWxsc1tpXS5wYXJlbnQ7XG4gICAgICBjb250YWluZXIuc3R5bGUubGVmdCA9IHRoaXMuY2VsbHNbaV0uY29sdW1uICogY2VsbFdpZHRoICsgJ3B4JztcbiAgICAgIGNvbnRhaW5lci5zdHlsZS50b3AgPSB0aGlzLmNlbGxzW2ldLnJvdyAqIGNlbGxIZWlnaHQgKyAncHgnO1xuICAgICAgdGhpcy5jZWxsc1tpXS5yZXNpemUoY2VsbFdpZHRoLGNlbGxIZWlnaHQpO1xuICAgIH1cblxuXG4gIH1cblxuICBjb2xvckludGVyZmFjZSgpIHtcbiAgICBmb3IgKHZhciBpPTA7IGk8dGhpcy5jZWxscy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5jZWxsc1tpXS5yZW5kZXIoKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gIC8vICBjb25zb2xlLmxvZyhcInVwZGF0aW5nLi4uXCIpXG4gICAgLy9vbiA9IG9uIHx8IGZhbHNlO1xuICAgIHRoaXMubWF0cml4Lml0ZXJhdGUoKHIsYyxpKSA9PiB7XG4gICAgICAvLyAgY29uc29sZS5sb2codGhpcy5tYXRyaXgucGF0dGVybltyXVtjXSwgdGhpcy5jZWxsc1tpXS5zdGF0ZSk7XG4gICAgICBpZiAodGhpcy5tYXRyaXgucGF0dGVybltyXVtjXSAhPT0gdGhpcy5jZWxsc1tpXS5zdGF0ZSkge1xuICAgICAgICBpZiAodGhpcy5tYXRyaXgucGF0dGVybltyXVtjXSA+IDApIHtcbiAgICAgICAgICB0aGlzLmNlbGxzW2ldLnR1cm5PbigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY2VsbHNbaV0udHVybk9mZigpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuLy8gdXBkYXRlID0+IGNlbGwudHVybk9uID0+IGNlbGwuZW1pdCA9PiBrZXlDaGFuZ2UgKHNlcS5lbWl0KSA9PiBtYXRyaXguc2V0LmNlbGwgPT4gdXBkYXRlXG4vL1xuLy8gaW50ZXJhY3Rpb24gPT4ga2V5Q2hhbmdlID0+IG1hdHJpeC5zZXQuY2VsbCA9PiB1cGRhdGUgPT4gY2VsbC50dXJuT25cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPT4gZW1pdFxuLy9cbi8vIHNldC5jZWxsID0+IHVwZGF0ZSA9PiBuZWVkcyB0byBlbWl0LlxuXG4gIGtleUNoYW5nZShub3RlLG9uKSB7XG4gICAgLy8gZW1pdCBkYXRhIGZvciBhbnkga2V5IHR1cm5pbmcgb24vb2ZmXG4gICAgLy8gaSBpcyB0aGUgbm90ZSBpbmRleFxuICAgIC8vIHYgaXMgd2hldGhlciBpdCBpcyBvbiBvciBvZmZcbiAgICBsZXQgY2VsbCA9IHRoaXMubWF0cml4LmxvY2F0ZShub3RlKTtcbiAgLy8gIHRoaXMubWF0cml4LnNldC5jZWxsKGNlbGwuY29sdW1uLGNlbGwucm93LG9uKTtcbiAgICB0aGlzLm1hdHJpeC5wYXR0ZXJuW2NlbGwucm93XVtjZWxsLmNvbHVtbl0gPSBvbjtcbiAgICB2YXIgZGF0YSA9IHtcbiAgICAgIHJvdzogY2VsbC5yb3csXG4gICAgICBjb2x1bW46IGNlbGwuY29sdW1uLFxuICAgICAgc3RhdGU6IG9uXG4gICAgfTtcbiAgICB0aGlzLmVtaXQoJ2NoYW5nZScsZGF0YSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMuc3RlcHBlci52YWx1ZSA+PSAwKSB7XG4gICAgICB0aGlzLm1hdHJpeC5pdGVyYXRlKChyLGMsaSkgPT4ge1xuICAgICAgICBpZiAoYz09PXRoaXMuc3RlcHBlci52YWx1ZSkge1xuICAgICAgICAgIHRoaXMuY2VsbHNbaV0ucGFkLnNldEF0dHJpYnV0ZSgnc3Ryb2tlJyx0aGlzLmNvbG9ycy5tZWRpdW1MaWdodCk7XG4gICAgICAgICAgdGhpcy5jZWxsc1tpXS5wYWQuc2V0QXR0cmlidXRlKCdzdHJva2Utd2lkdGgnLCcxJyk7XG4gICAgICAgICAgdGhpcy5jZWxsc1tpXS5wYWQuc2V0QXR0cmlidXRlKCdzdHJva2Utb3BhY2l0eScsJzEnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmNlbGxzW2ldLnBhZC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsJ25vbmUnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0IHNlcXVlbmNpbmdcbiAgICogQHBhcmFtICB7bnVtYmVyfSBtcyBCZWF0IHRlbXBvIGluIG1pbGxpc2Vjb25kc1xuICAgKi9cbiAgc3RhcnQobXMpIHtcbiAgICB0aGlzLmludGVydmFsLmV2ZW50ID0gdGhpcy5uZXh0LmJpbmQodGhpcyk7XG4gICAgaWYgKG1zKSB7XG4gICAgICB0aGlzLmludGVydmFsLm1zKG1zKTtcbiAgICB9XG4gICAgdGhpcy5pbnRlcnZhbC5zdGFydCgpO1xuICB9XG5cbiAgLyoqXG4gIFN0b3Agc2VxdWVuY2luZ1xuICAqL1xuICBzdG9wKCkge1xuICAgIHRoaXMuaW50ZXJ2YWwuc3RvcCgpO1xuICB9XG5cbiAgLyoqXG4gIE1hbnVhbGx5IGp1bXAgdG8gdGhlIG5leHQgY29sdW1uIGFuZCB0cmlnZ2VyIHRoZSAnY2hhbmdlJyBldmVudC4gVGhlIFwibmV4dFwiIGNvbHVtbiBpcyBkZXRlcm1pbmVkIGJ5IHlvdXIgbW9kZSBvZiBzZXF1ZW5jaW5nLlxuICAqL1xuICBuZXh0KCkge1xuICAgIHRoaXMuc3RlcHBlci5uZXh0KCk7XG4gICAgdGhpcy5lbWl0KCdzdGVwJyx0aGlzLm1hdHJpeC5jb2x1bW4odGhpcy5zdGVwcGVyLnZhbHVlKS5yZXZlcnNlKCkpO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBhZGRUb3VjaExpc3RlbmVycygpIHtcblxuICAgIHRoaXMucHJlQ2xpY2sgPSB0aGlzLnByZU1vdmUgPSB0aGlzLnByZVJlbGVhc2UgPSAoKSA9PiB7fTtcbiAgICB0aGlzLmNsaWNrID0gdGhpcy5tb3ZlID0gdGhpcy5yZWxlYXNlID0gKCkgPT4ge307XG4gICAgdGhpcy5wcmVUb3VjaCA9IHRoaXMucHJlVG91Y2hNb3ZlID0gdGhpcy5wcmVUb3VjaFJlbGVhc2UgPSAoKSA9PiB7fTtcbiAgICB0aGlzLnRvdWNoID0gdGhpcy50b3VjaE1vdmUgPSB0aGlzLnRvdWNoUmVsZWFzZSA9ICgpID0+IHt9O1xuXG4gICAgdGhpcy5jdXJyZW50RWxlbWVudCA9IGZhbHNlO1xuXG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCAoZSkgPT4ge1xuICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KGUudGFyZ2V0VG91Y2hlc1swXS5jbGllbnRYLGUudGFyZ2V0VG91Y2hlc1swXS5jbGllbnRZKTtcbiAgICAgIGxldCBjZWxsID0gdGhpcy5jZWxsc1tlbGVtZW50LmluZGV4XTtcbiAgICAgIHRoaXMucGFpbnRicnVzaCA9ICFjZWxsLnN0YXRlO1xuICAgICAgY2VsbC5kb3duKHRoaXMucGFpbnRicnVzaCk7XG4gICAgICB0aGlzLmN1cnJlbnRFbGVtZW50ID0gZWxlbWVudC5pbmRleDtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgKGUpID0+IHtcbiAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludChlLnRhcmdldFRvdWNoZXNbMF0uY2xpZW50WCxlLnRhcmdldFRvdWNoZXNbMF0uY2xpZW50WSk7XG4gICAgICBsZXQgY2VsbCA9IHRoaXMuY2VsbHNbZWxlbWVudC5pbmRleF07XG4gICAgICBpZiAoZWxlbWVudC5pbmRleCE9PXRoaXMuY3VycmVudEVsZW1lbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudEVsZW1lbnQgPj0gMCkge1xuICAgICAgICAgIGxldCBwYXN0Q2VsbCA9IHRoaXMuY2VsbHNbdGhpcy5jdXJyZW50RWxlbWVudF07XG4gICAgICAgICAgcGFzdENlbGwudXAoKTtcbiAgICAgICAgfVxuICAgICAgICBjZWxsLmRvd24odGhpcy5wYWludGJydXNoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNlbGwuYmVuZCgpO1xuICAgICAgfVxuICAgICAgdGhpcy5jdXJyZW50RWxlbWVudCA9IGVsZW1lbnQuaW5kZXg7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgKGUpID0+IHtcbiAgICAgIC8vIG5vIHRvdWNoZXMgdG8gY2FsY3VsYXRlIGJlY2F1c2Ugbm9uZSByZW1haW5pbmdcbiAgICAgIGxldCBjZWxsID0gdGhpcy5jZWxsc1t0aGlzLmN1cnJlbnRFbGVtZW50XTtcbiAgICAgIGNlbGwudXAoKTtcbiAgICAgIHRoaXMuaW50ZXJhY3RpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuY3VycmVudEVsZW1lbnQgPSBmYWxzZTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSk7XG5cbiAgfVxuXG4gIC8qKlxuICBOdW1iZXIgb2Ygcm93cyBpbiB0aGUgc2VxdWVuY2VyXG4gIEB0eXBlIHtudW1iZXJ9XG4gICovXG4gIGdldCByb3dzKCkge1xuICAgIHJldHVybiB0aGlzLm1hdHJpeC5yb3dzO1xuICB9XG5cbiAgc2V0IHJvd3Modikge1xuICAgIHRoaXMubWF0cml4LnJvd3MgPSB2O1xuICAgIHRoaXMuZW1wdHkoKTtcbiAgICB0aGlzLmJ1aWxkSW50ZXJmYWNlKCk7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIC8qKlxuICBOdW1iZXIgb2YgY29sdW1ucyBpbiB0aGUgc2VxdWVuY2VyXG4gIEB0eXBlIHtudW1iZXJ9XG4gICovXG4gIGdldCBjb2x1bW5zKCkge1xuICAgIHJldHVybiB0aGlzLm1hdHJpeC5jb2x1bW5zO1xuICB9XG5cbiAgc2V0IGNvbHVtbnModikge1xuICAgIHRoaXMubWF0cml4LmNvbHVtbnMgPSB2O1xuICAgIHRoaXMuc3RlcHBlci5tYXggPSB2O1xuICAgIHRoaXMuZW1wdHkoKTtcbiAgICB0aGlzLmJ1aWxkSW50ZXJmYWNlKCk7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2pzaGludC1sb2FkZXIhLi9saWIvaW50ZXJmYWNlcy9zZXF1ZW5jZXIuanMiLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBtYXRoIGZyb20gJy4uL3V0aWwvbWF0aCc7XG5pbXBvcnQgU2VxdWVuY2UgZnJvbSAnLi4vbW9kZWxzL3NlcXVlbmNlJztcblxuLy8gRm9yIHRoZSB0dXRvcmlhbCwgbG9va2luZyBhdFxuXG4vL1BhdHRlcm4gc2VjdGlvbjpcbi8vIC5jcmVhdGUoKSwgLnJvd3MsIC5jb2x1bW5zLFxuLy8gLnBhdHRlcm4sIC5sZW5ndGgsIC5mb3JtYXRBc1RleHQoKSwgLmxvZygpLFxuLy8gLmxvY2F0ZShpKSwgLmluZGV4T2YoYyxyKVxuLy8gcm93KCksIGNvbHVtbigpIChyZXR1cm5zIGNvbnRlbnRzIG9mIHJvdyBvciBjb2x1bSlcblxuLy9Db250cm9sIHNlY3Rpb246XG4vLyB0b2dnbGUgeDNcbi8vIHNldCB4NFxuLy8gcm90YXRlIHgzXG4vLyBwb3B1bGF0ZSB4M1xuLy8gZXJhc2UgeDNcblxuXG4vLyBzaG91bGQgc29tZSB2ZXJzaW9uIG9mIHRoaXMgaGF2ZSBhIGZsb2F0IHZhbHVlIGZvciBlYWNoIGNlbGw/XG4vLyBjb3VsZCBiZSBsaWtlIGEgbWlycm9yIC5wYXR0ZXJuIHRoYXQgaGFzIHZhbHVlcy4gYnkgZGVmYXVsdCwgZXZlcnl0aGluZyBpcyAxLCBidXQgY291bGQgYmUgc2V0Li4uXG4vLyBub3QgYSBnb29kIHdheSB0byBkbyB0aGF0IG9uIGludGVyZmFjZSwgYnV0IGFzIGEgbW9kZWwgaXQgd291bGQgYmUgbmljZS4uLlxuLy8gZm9yIC5mb3JtYXRBc1RleHQoKSwgY291bGQgbXVsdGlwbHkgYnkgMTAwIGFuZCBmbG9vciwgc28gZWFjaCBjZWxsIGlzIGFuIGludCBmcm9tIDAgdG8gOVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXRyaXgge1xuXG4gIGNvbnN0cnVjdG9yKHJvd3MsY29sdW1ucykge1xuICAgIC8vIHNob3VsZCBhbHNvIGhhdmUgYWJpbGl0eSB0byBjcmVhdGUgdXNpbmcgYW4gZXhpc3RpbmcgbWF0cml4ICgyZCBhcnJheSlcbiAgICB0aGlzLnBhdHRlcm4gPSBbXTtcbiAgICB0aGlzLmNyZWF0ZShyb3dzLGNvbHVtbnMpO1xuXG4gICAgdGhpcy50b2dnbGUgPSB7XG4gICAgICBjZWxsOiAoY29sdW1uLCByb3cpID0+IHtcbiAgICAgICAgdGhpcy5wYXR0ZXJuW3Jvd11bY29sdW1uXSA9ICF0aGlzLnBhdHRlcm5bcm93XVtjb2x1bW5dOyAvLyBtYXRoLmludmVydCh0aGlzLnBhdHRlcm5bcm93XVtjb2x1bW5dKTtcbiAgICAgICAgaWYgKHRoaXMudWkpIHsgdGhpcy51aS51cGRhdGUoKTsgfVxuICAgICAgICByZXR1cm4gdGhpcy5wYXR0ZXJuW3Jvd11bY29sdW1uXTtcbiAgICAgIH0sXG4gICAgICBhbGw6ICgpID0+IHtcbiAgICAgICAgdGhpcy5pdGVyYXRlKChyLGMpID0+IHsgdGhpcy50b2dnbGUuY2VsbChjLHIpOyB9KTtcbiAgICAgICAgaWYgKHRoaXMudWkpIHsgdGhpcy51aS51cGRhdGUoKTsgfVxuICAgICAgfSxcbiAgICAgIHJvdzogKHJvdykgPT4ge1xuICAgICAgICBmb3IgKGxldCBpPTA7IGk8dGhpcy5jb2x1bW5zOyBpKyspIHtcbiAgICAgICAgICB0aGlzLnRvZ2dsZS5jZWxsKGkscm93KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy51aSkgeyB0aGlzLnVpLnVwZGF0ZSgpOyB9XG4gICAgICB9LFxuICAgICAgY29sdW1uOiAoY29sdW1uKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGk9MDsgaTx0aGlzLnJvd3M7IGkrKykge1xuICAgICAgICAgIHRoaXMudG9nZ2xlLmNlbGwoY29sdW1uLGkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnVpKSB7IHRoaXMudWkudXBkYXRlKCk7IH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5zZXQgPSB7XG4gICAgICBjZWxsOiAoY29sdW1uLCByb3csIHZhbHVlKSA9PiB7XG4gICAgICAgIHRoaXMucGF0dGVybltyb3ddW2NvbHVtbl0gPSB2YWx1ZTtcbiAgICAgICAgaWYgKHRoaXMudWkpIHsgdGhpcy51aS51cGRhdGUoKTsgfVxuICAgICAgfSxcbiAgICAgIGFsbDogKHZhbHVlcykgPT4ge1xuICAgICAgICAvLyBzZXQgdGhlIHdob2xlIG1hdHJpeCB1c2luZyBhIDJkIGFycmF5IGFzIGlucHV0XG4gICAgICAgIC8vIHRoaXMgc2hvdWxkIGFsc28gcmVzaXplIHRoZSBhcnJheT9cbiAgICAgICAgdGhpcy5wYXR0ZXJuID0gdmFsdWVzO1xuICAgICAgICBpZiAodGhpcy51aSkgeyB0aGlzLnVpLnVwZGF0ZSgpOyB9XG4gICAgICB9LFxuICAgICAgcm93OiAocm93LHZhbHVlcykgPT4ge1xuICAgICAgICAvLyBzZXQgYSByb3cgdXNpbmcgYW4gYXJyYXkgYXMgaW5wdXRcbiAgICAgICAgdGhpcy5wYXR0ZXJuW3Jvd10gPSB2YWx1ZXM7XG4gICAgICAgIGlmICh0aGlzLnVpKSB7IHRoaXMudWkudXBkYXRlKCk7IH1cbiAgICAgIH0sXG4gICAgICBjb2x1bW46IChjb2x1bW4sdmFsdWVzKSA9PiB7XG4gICAgICAgIC8vIHNldCBhIGNvbHVtbiB1c2luZyBhbiBhcnJheSBhcyBpbnB1dFxuICAgICAgICB0aGlzLnBhdHRlcm4uZm9yRWFjaCgocm93LGkpID0+IHtcbiAgICAgICAgICB0aGlzLnBhdHRlcm5baV1bY29sdW1uXSA9IHZhbHVlc1tpXTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh0aGlzLnVpKSB7IHRoaXMudWkudXBkYXRlKCk7IH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5yb3RhdGUgPSB7XG4gICAgICAvL3Nob3VsZCBldmVudHVhbGx5IGRvIChhbW91bnRYLCBhbW91bnRZKSBoZXJlXG4gICAgICAvLyBjb3VsZCBqdXN0IHVzZSBhIGxvb3AgYW5kIHRoaXMucm90YXRlLnJvdyhpLGFtb3VudFgpO1xuICAgICAgYWxsOiAoYW1vdW50KSA9PiB7XG4gICAgICAgIGlmICghYW1vdW50ICYmIGFtb3VudCE9PTApIHtcbiAgICAgICAgICBhbW91bnQgPSAxO1xuICAgICAgICB9XG4gICAgICAgIGFtb3VudCAlPSB0aGlzLnBhdHRlcm5bMF0ubGVuZ3RoO1xuICAgICAgICBpZiAoYW1vdW50IDwgMCkge1xuICAgICAgICAgIGFtb3VudCA9IHRoaXMucGF0dGVyblswXS5sZW5ndGggKyBhbW91bnQ7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPHRoaXMucm93czsgaSsrKSB7XG4gICAgICAgICAgbGV0IGN1dCA9IHRoaXMucGF0dGVybltpXS5zcGxpY2UoIHRoaXMucGF0dGVybltpXS5sZW5ndGggLSBhbW91bnQsIGFtb3VudCApO1xuICAgICAgICAgIHRoaXMucGF0dGVybltpXSA9IGN1dC5jb25jYXQoIHRoaXMucGF0dGVybltpXSApO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnVpKSB7IHRoaXMudWkudXBkYXRlKCk7IH1cbiAgICAgIH0sXG4gICAgICByb3c6IChyb3csYW1vdW50KSA9PiB7XG4gICAgICAgIGlmICghYW1vdW50ICYmIGFtb3VudCE9PTApIHtcbiAgICAgICAgICBhbW91bnQgPSAxO1xuICAgICAgICB9XG4gICAgICAgIGFtb3VudCAlPSB0aGlzLnBhdHRlcm5bMF0ubGVuZ3RoO1xuICAgICAgICBpZiAoYW1vdW50IDwgMCkge1xuICAgICAgICAgIGFtb3VudCA9IHRoaXMucGF0dGVyblswXS5sZW5ndGggKyBhbW91bnQ7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGN1dCA9IHRoaXMucGF0dGVybltyb3ddLnNwbGljZSggdGhpcy5wYXR0ZXJuW3Jvd10ubGVuZ3RoIC0gYW1vdW50LCBhbW91bnQgKTtcbiAgICAgICAgdGhpcy5wYXR0ZXJuW3Jvd10gPSBjdXQuY29uY2F0KCB0aGlzLnBhdHRlcm5bcm93XSApO1xuICAgICAgICBpZiAodGhpcy51aSkgeyB0aGlzLnVpLnVwZGF0ZSgpOyB9XG4gICAgICB9LFxuICAgICAgY29sdW1uOiAoY29sdW1uLCBhbW91bnQpID0+IHtcbiAgICAgICAgaWYgKCFhbW91bnQgJiYgYW1vdW50IT09MCkge1xuICAgICAgICAgIGFtb3VudCA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgYW1vdW50ICU9IHRoaXMucGF0dGVybi5sZW5ndGg7XG4gICAgICAgIGlmIChhbW91bnQgPCAwKSB7XG4gICAgICAgICAgYW1vdW50ID0gdGhpcy5wYXR0ZXJuLmxlbmd0aCArIGFtb3VudDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcHJveHkgPSBbXTtcbiAgICAgICAgdGhpcy5wYXR0ZXJuLmZvckVhY2goKHJvdykgPT4ge1xuICAgICAgICAgIHByb3h5LnB1c2goIHJvd1tjb2x1bW5dICk7XG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgY3V0ID0gcHJveHkuc3BsaWNlKCBwcm94eS5sZW5ndGggLSBhbW91bnQsIGFtb3VudCApO1xuICAgICAgICBwcm94eSA9IGN1dC5jb25jYXQoIHByb3h5ICk7XG4gICAgICAgIHRoaXMucGF0dGVybi5mb3JFYWNoKChyb3csaSkgPT4ge1xuICAgICAgICAgIHJvd1tjb2x1bW5dID0gcHJveHlbaV07XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodGhpcy51aSkgeyB0aGlzLnVpLnVwZGF0ZSgpOyB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIHRoZSBpZGVhIGJlaGluZCBwb3B1bGF0ZSBpcyB0byBiZSBhYmxlIHRvIHNldCBhIHdob2xlIHJvdyBvciBjb2x1bW4gdG8gMCBvciAxXG4gICAgLy8gSUYgdGhlIHZhbHVlIGlzIGEgZmxvYXQsIHN1Y2ggYXMgMC43LCB0aGVuIGl0IHdvdWxkIGJlY29tZSBhIHByb2JhYmlsaXR5XG4gICAgLy8gc28gcG9wdWxhdGUoMC43KSB3b3VsZCBnaXZlIGVhY2ggY2VsbCBhIDcwJSBjaGFuY2Ugb2YgYmVpbmcgMVxuICAgIHRoaXMucG9wdWxhdGUgPSB7XG4gICAgICBhbGw6IChvZGRzKSA9PiB7XG4gICAgICAgIGxldCBvZGRzU2VxdWVuY2UgPSBuZXcgU2VxdWVuY2Uob2Rkcyk7XG4gICAgICAgIHRoaXMuaXRlcmF0ZSgocixjKSA9PiB7XG4gICAgICAgICAgdGhpcy5wYXR0ZXJuW3JdW2NdID0gbWF0aC5jb2luKG9kZHNTZXF1ZW5jZS5uZXh0KCkpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gVGhpcyBjb3VsZCBiZSB1c2VkIHNvIHRoYXQgZWFjaCByb3cgaGFzIHNhbWUgb2RkcyBwYXR0ZXJuLCBldmVuIGlmIHJvdyBsZW5ndGggaXMgbm90IGRpdmlzaWJseSBieSBzZXF1ZW5jZSBsZW5ndGguXG4gICAgICAgIC8vLCgpID0+IHtcbiAgICAgICAgLy8gIG9kZHMucG9zID0gLTE7XG4gICAgICAgIC8vIH1cbiAgICAgICAgaWYgKHRoaXMudWkpIHsgdGhpcy51aS51cGRhdGUoKTsgfVxuICAgICAgfSxcbiAgICAgIHJvdzogKHJvdz0wLG9kZHM9MSkgPT4ge1xuICAgICAgICBsZXQgb2Rkc1NlcXVlbmNlID0gbmV3IFNlcXVlbmNlKG9kZHMpO1xuICAgICAgICB0aGlzLnBhdHRlcm5bcm93XS5mb3JFYWNoKChjZWxsLGkpID0+IHtcbiAgICAgICAgICB0aGlzLnBhdHRlcm5bcm93XVtpXSA9IG1hdGguY29pbihvZGRzU2VxdWVuY2UubmV4dCgpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh0aGlzLnVpKSB7IHRoaXMudWkudXBkYXRlKCk7IH1cbiAgICAgIH0sXG4gICAgICBjb2x1bW46IChjb2x1bW49MCxvZGRzPTEpID0+IHtcbiAgICAgICAgbGV0IG9kZHNTZXF1ZW5jZSA9IG5ldyBTZXF1ZW5jZShvZGRzKTtcbiAgICAgICAgdGhpcy5wYXR0ZXJuLmZvckVhY2goKHJvdyxpKSA9PiB7XG4gICAgICAgICAgdGhpcy5wYXR0ZXJuW2ldW2NvbHVtbl0gPSBtYXRoLmNvaW4ob2Rkc1NlcXVlbmNlLm5leHQoKSk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodGhpcy51aSkgeyB0aGlzLnVpLnVwZGF0ZSgpOyB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIGVzc2VudGlhbGwgcG9wdWxhdGUoMCkgc28gaSdtIG5vdCBzdXJlIGlmIHRoaXMgaXMgbmVjZXNzYXJ5IGJ1dCBpcyBuaWNlXG4gICAgdGhpcy5lcmFzZSA9IHtcbiAgICAgIGFsbDogKCkgPT4ge1xuICAgICAgICB0aGlzLnNldC5hbGwoMCk7XG4gICAgICB9LFxuICAgICAgcm93OiAocm93KSA9PiB7XG4gICAgICAgIHRoaXMuc2V0LnJvdyhyb3csMCk7XG4gICAgICB9LFxuICAgICAgY29sdW1uOiAoY29sdW1uKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0LmNvbHVtbihjb2x1bW4sMCk7XG4gICAgICB9XG4gICAgfTtcblxuICAvLyBlbmQgY29uc3RydWN0b3JcbiAgfVxuXG5cbiAgY3JlYXRlKHJvd3MsY29sdW1ucykge1xuICAgIHRoaXMucGF0dGVybiA9IFtdO1xuICAgIGZvciAoIGxldCByb3c9MDsgcm93IDwgcm93czsgcm93KysgKSB7XG4gICAgICBsZXQgYXJyID0gbmV3IEFycmF5KGNvbHVtbnMpO1xuICAgICAgdGhpcy5wYXR0ZXJuLnB1c2goYXJyKTtcbiAgICB9XG4gICAgdGhpcy5pdGVyYXRlKChyLGMpID0+IHsgdGhpcy5wYXR0ZXJuW3JdW2NdID0gZmFsc2U7IH0pO1xuICB9XG5cbiAgaXRlcmF0ZShmLCBmMikge1xuICAgIGxldCBpID0gMDtcbiAgICBmb3IgKCBsZXQgcm93PTA7IHJvdyA8IHRoaXMucm93czsgcm93KysgKSB7XG4gICAgICBpZiAoZjIpIHsgZjIocm93KTsgfVxuICAgICAgZm9yICggbGV0IGNvbHVtbj0wOyBjb2x1bW4gPCB0aGlzLmNvbHVtbnM7IGNvbHVtbisrICkge1xuICAgICAgICBmKHJvdyxjb2x1bW4saSk7XG4gICAgICAgIGkrKztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmb3JtYXRBc1RleHQoKSB7XG4gICAgbGV0IHBhdHRlcm5TdHJpbmcgPSAnJztcbiAgICB0aGlzLml0ZXJhdGUoXG4gICAgICAocixjKSA9PiB7IHBhdHRlcm5TdHJpbmcgKz0gKHRoaXMucGF0dGVybltyXVtjXSA/IDEgOiAwKSArICcgJzsgfSxcbiAgICAgICgpID0+IHsgcGF0dGVyblN0cmluZyArPSAnXFxuJzsgfVxuICAgICk7XG4gICAgcmV0dXJuIHBhdHRlcm5TdHJpbmc7XG4gIH1cblxuICBsb2coKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5mb3JtYXRBc1RleHQoKSk7XG4gIH1cblxuICB1cGRhdGUocGF0dGVybikge1xuICAgIHRoaXMucGF0dGVybiA9IHBhdHRlcm4gfHwgdGhpcy5wYXR0ZXJuO1xuICB9XG5cbiAgZ2V0IGxlbmd0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5yb3dzKnRoaXMuY29sdW1ucztcbiAgfVxuXG4gIGxvY2F0ZShpbmRleCkge1xuICAgIC8vIHJldHVybnMgcm93IGFuZCBjb2x1bW4gb2YgY2VsbCBieSBpbmRleFxuICAgIHJldHVybiB7XG4gICAgICByb3c6IH5+KCBpbmRleCAvIHRoaXMuY29sdW1ucyApLFxuICAgICAgY29sdW1uOiBpbmRleCAlIHRoaXMuY29sdW1uc1xuICAgIH07XG4gIH1cblxuICBpbmRleE9mKHJvdyxjb2x1bW4pIHtcbiAgICByZXR1cm4gY29sdW1uICsgcm93ICogdGhpcy5jb2x1bW5zO1xuICAgIC8vIHJldHVybnMgaW5kZXggb2YgY2VsbCBieSByb3cgYW5kIGNvbHVtblxuICB9XG5cbiAgcm93KHJvdykge1xuICAgIGxldCBkYXRhID0gW107XG4gICAgZm9yIChsZXQgaT0wOyBpPHRoaXMuY29sdW1uczsgaSsrKSB7XG4gICAgICBkYXRhLnB1c2godGhpcy5wYXR0ZXJuW3Jvd10gPyAxIDogMCk7XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgY29sdW1uKGNvbHVtbikge1xuICAgIGxldCBkYXRhID0gW107XG4gICAgZm9yIChsZXQgaT0wOyBpPHRoaXMucm93czsgaSsrKSB7XG4gICAgICBkYXRhLnB1c2godGhpcy5wYXR0ZXJuW2ldW2NvbHVtbl0gPyAxIDogMCk7XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgZ2V0IHJvd3MoKSB7XG4gICAgcmV0dXJuIHRoaXMucGF0dGVybi5sZW5ndGg7XG4gIH1cbiAgc2V0IHJvd3Modikge1xuICAgIGxldCBwcmV2aW91cyA9IHRoaXMucGF0dGVybi5zbGljZSgwKTtcbiAgICB0aGlzLmNyZWF0ZSh2LHRoaXMuY29sdW1ucyk7XG4gICAgdGhpcy5pdGVyYXRlKChyLGMpID0+IHtcbiAgICAgIGlmIChwcmV2aW91c1tyXSAmJiBwcmV2aW91c1tyXVtjXSkge1xuICAgICAgICB0aGlzLnBhdHRlcm5bcl1bY10gPSBwcmV2aW91c1tyXVtjXTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGdldCBjb2x1bW5zKCkge1xuICAgIHJldHVybiB0aGlzLnBhdHRlcm5bMF0ubGVuZ3RoO1xuICB9XG4gIHNldCBjb2x1bW5zKHYpIHtcbiAgICBsZXQgcHJldmlvdXMgPSB0aGlzLnBhdHRlcm4uc2xpY2UoMCk7XG4gICAgdGhpcy5jcmVhdGUodGhpcy5yb3dzLHYpO1xuICAgIHRoaXMuaXRlcmF0ZSgocixjKSA9PiB7XG4gICAgICBpZiAocHJldmlvdXNbcl0gJiYgcHJldmlvdXNbcl1bY10pIHtcbiAgICAgICAgdGhpcy5wYXR0ZXJuW3JdW2NdID0gcHJldmlvdXNbcl1bY107XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9qc2hpbnQtbG9hZGVyIS4vbGliL21vZGVscy9tYXRyaXguanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgbWF0aCBmcm9tICcuLi91dGlsL21hdGgnO1xyXG5pbXBvcnQgRHJ1bmsgZnJvbSAnLi9kcnVuayc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXF1ZW5jZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2VxdWVuY2UgPSBbMCwxMCwyMCwzMF0sIG1vZGU9J3VwJywgcG9zaXRpb249ZmFsc2UpIHtcclxuICAgICAgICB0aGlzLnZhbHVlcyA9IHNlcXVlbmNlO1xyXG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheSh0aGlzLnZhbHVlcykpIHtcclxuICAgICAgICAgIHRoaXMudmFsdWVzID0gW3RoaXMudmFsdWVzXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fbW9kZSA9IG1vZGU7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xyXG5cclxuICAgICAgICB0aGlzLmRydW5rV2FsayA9IG5ldyBEcnVuaygwLCB0aGlzLnZhbHVlcy5sZW5ndGggLSAxKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGFydFZhbHVlcyA9IHtcclxuICAgICAgICAgICd1cCc6IDAsXHJcbiAgICAgICAgICAnZG93bic6IHRoaXMudmFsdWVzLmxlbmd0aCAtIDEsXHJcbiAgICAgICAgICAnZHJ1bmsnOiB+fih0aGlzLnZhbHVlcy5sZW5ndGgvMiksXHJcbiAgICAgICAgICAncmFuZG9tJzogbWF0aC5yaSh0aGlzLnZhbHVlcy5sZW5ndGgpXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24hPT1mYWxzZSkge1xyXG4gICAgICAgICAgdGhpcy5uZXh0ID0gdGhpc1t0aGlzLl9tb2RlXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5uZXh0ID0gdGhpcy5maXJzdDtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXQgbW9kZSgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX21vZGU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IG1vZGUobW9kZSkge1xyXG4gICAgICAgIGlmICghKG1vZGUgPT09ICd1cCcgfHwgbW9kZSA9PT0gJ2Rvd24nIHx8IG1vZGUgPT09ICdyYW5kb20nIHx8IG1vZGUgPT09ICdkcnVuaycpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZSBvbmx5IG1vZGVzIGN1cnJlbnRseSBhbGxvd2VkIGFyZTogdXAsIGRvd24sIHJhbmRvbSwgZHJ1bmsnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9tb2RlID0gbW9kZTtcclxuICAgICAgICBpZiAodGhpcy5wb3NpdGlvbikge1xyXG4gICAgICAgICAgdGhpcy5uZXh0ID0gdGhpc1t0aGlzLl9tb2RlXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHZhbHVlKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy52YWx1ZXNbdGhpcy5wb3NpdGlvbl07XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHZhbHVlKHYpIHtcclxuICAgICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMudmFsdWVzLmluZGV4T2Yodik7XHJcbiAgICB9XHJcblxyXG4gICAgZmlyc3QoKSB7XHJcbiAgICAgIGlmICh0aGlzLnBvc2l0aW9uIT09ZmFsc2UpIHtcclxuICAgICAgICB0aGlzLm5leHQgPSB0aGlzW3RoaXMuX21vZGVdO1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5leHQoKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5zdGFydFZhbHVlc1t0aGlzLl9tb2RlXTtcclxuICAgICAgdGhpcy5uZXh0ID0gdGhpc1t0aGlzLl9tb2RlXTtcclxuICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgdXAoKSB7XHJcbiAgICAgIHRoaXMucG9zaXRpb24rKztcclxuICAgICAgdGhpcy5wb3NpdGlvbiAlPSB0aGlzLnZhbHVlcy5sZW5ndGg7XHJcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGRvd24oKSB7XHJcbiAgICAgIHRoaXMucG9zaXRpb24tLTtcclxuICAgICAgaWYgKHRoaXMucG9zaXRpb24gPCAwKSB7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9ICh0aGlzLnBvc2l0aW9uICsgdGhpcy52YWx1ZXMubGVuZ3RoKSAlIHRoaXMudmFsdWVzLmxlbmd0aDtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdGhpcy52YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICByYW5kb20oKSB7XHJcbiAgICAgIHRoaXMucG9zaXRpb24gPSBtYXRoLnJpKDAsIHRoaXMudmFsdWVzLmxlbmd0aCk7XHJcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGRydW5rKCkge1xyXG4gICAgICB0aGlzLmRydW5rV2Fsay5tYXggPSB0aGlzLnZhbHVlcy5sZW5ndGg7XHJcbiAgICAgIHRoaXMuZHJ1bmtXYWxrLnZhbHVlID0gdGhpcy5wb3NpdGlvbjtcclxuICAgICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMuZHJ1bmtXYWxrLm5leHQoKTtcclxuICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyogZnV0dXJlIG1ldGhvZHNcclxuICAgIC5ncm91cChzdGFydCxzdG9wKSAtLSBvdXRwdXRzIGEgZ3JvdXAgb2YgbiBpdGVtcyBmcm9tIHRoZSBsaXN0LCB3aXRoIHdyYXBwaW5nXHJcbiAgICAubG9vcChzdGFydCxzdG9wKSAtLSBjb25maW5lcyBzZXF1ZW5jaW5nIHRvIGEgc3Vic2V0IG9mIHRoZSB2YWx1ZXNcclxuICAgICAgICAoY291bGQgZXZlbiBoYXZlIGEgZGlzdGluY3Rpb24gYmV0d2VlbiAub3JpZ2luYWxWYWx1ZXMgYW5kIHRoZSBhcnJheSBvZiB2YWx1ZXMgYmVpbmcgdXNlZClcclxuICAgICovXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9qc2hpbnQtbG9hZGVyIS4vbGliL21vZGVscy9zZXF1ZW5jZS5qcyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IG1hdGggZnJvbSAnLi4vdXRpbC9tYXRoJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJ1bmsge1xuXG4gICAgY29uc3RydWN0b3IobWluPTAsIG1heD05LCB2YWx1ZT0wLCBpbmNyZW1lbnQ9MSwgbG9vcD1mYWxzZSkge1xuICAgICAgICB0aGlzLm1pbiA9IG1pbjtcbiAgICAgICAgdGhpcy5tYXggPSBtYXg7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5pbmNyZW1lbnQgPSBpbmNyZW1lbnQ7XG4gICAgICAgIHRoaXMubG9vcCA9IGxvb3A7XG4gICAgfVxuXG4gICAgbmV4dCgpIHtcbiAgICAgICAgdGhpcy52YWx1ZSArPSBtYXRoLnBpY2soLTEgKiB0aGlzLmluY3JlbWVudCwgdGhpcy5pbmNyZW1lbnQpO1xuICAgICAgICBpZiAodGhpcy52YWx1ZSA+IHRoaXMubWF4KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5sb29wKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMubWluO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5tYXggLSB0aGlzLmluY3JlbWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnZhbHVlIDwgdGhpcy5taW4pIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmxvb3ApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5tYXg7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLm1pbiArIHRoaXMuaW5jcmVtZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vanNoaW50LWxvYWRlciEuL2xpYi9tb2RlbHMvZHJ1bmsuanMiLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBtYXRoIGZyb20gJy4uL3V0aWwvbWF0aCc7XG5pbXBvcnQgRHJ1bmsgZnJvbSAnLi9kcnVuayc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvdW50ZXIge1xuXG4gICAgY29uc3RydWN0b3IobWluPTAsIG1heD0xMCwgbW9kZT0ndXAnLCB2YWx1ZT1mYWxzZSkge1xuICAgICAgICB0aGlzLm1pbiA9IG1pbjtcbiAgICAgICAgdGhpcy5tYXggPSBtYXg7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5tb2RlID0gbW9kZTtcbiAgICAgICAgdGhpcy5kcnVua1dhbGsgPSBuZXcgRHJ1bmsodGhpcy5taW4sIHRoaXMubWF4KTtcbiAgICAgICAgaWYgKHRoaXMudmFsdWUhPT1mYWxzZSkge1xuICAgICAgICAgIHRoaXMubmV4dCA9IHRoaXNbdGhpcy5fbW9kZV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5uZXh0ID0gdGhpcy5maXJzdDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldCBtb2RlKG1vZGUpIHtcbiAgICAgICAgaWYgKCEobW9kZSA9PT0gJ3VwJyB8fCBtb2RlID09PSAnZG93bicgfHwgbW9kZSA9PT0gJ3JhbmRvbScgfHwgbW9kZSA9PT0gJ2RydW5rJykpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZSBvbmx5IG1vZGVzIGN1cnJlbnRseSBhbGxvd2VkIGFyZTogdXAsIGRvd24sIHJhbmRvbSwgZHJ1bmsnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9tb2RlID0gbW9kZTtcbiAgICAgICAgaWYgKHRoaXMudmFsdWUpIHtcbiAgICAgICAgICB0aGlzLm5leHQgPSB0aGlzW3RoaXMuX21vZGVdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IG1vZGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tb2RlO1xuICAgIH1cblxuICAgIGZpcnN0KCkge1xuICAgICAgaWYgKHRoaXMudmFsdWUhPT1mYWxzZSkge1xuICAgICAgICB0aGlzLm5leHQgPSB0aGlzW3RoaXMuX21vZGVdO1xuICAgICAgICByZXR1cm4gdGhpcy5uZXh0KCk7XG4gICAgICB9XG4gICAgICB0aGlzLnN0YXJ0VmFsdWVzID0ge1xuICAgICAgICAndXAnOiB0aGlzLm1pbixcbiAgICAgICAgJ2Rvd24nOiB0aGlzLm1heCxcbiAgICAgICAgJ2RydW5rJzogfn5tYXRoLmF2ZXJhZ2UodGhpcy5taW4sdGhpcy5tYXgpLFxuICAgICAgICAncmFuZG9tJzogbWF0aC5yaSh0aGlzLm1pbix0aGlzLm1heClcbiAgICAgIH07XG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy5zdGFydFZhbHVlc1t0aGlzLl9tb2RlXTtcbiAgICAgIHRoaXMubmV4dCA9IHRoaXNbdGhpcy5fbW9kZV07XG4gICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICB9XG5cbiAgICB1cCgpIHtcbiAgICAgICAgdGhpcy52YWx1ZSsrO1xuICAgICAgICBpZiAodGhpcy52YWx1ZSA+PSB0aGlzLm1heCkge1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMubWluO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICAgIH1cblxuICAgIGRvd24oKSB7XG4gICAgICAgIHRoaXMudmFsdWUtLTtcbiAgICAgICAgaWYgKHRoaXMudmFsdWUgPCB0aGlzLm1pbikge1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMubWF4O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICAgIH1cblxuICAgIHJhbmRvbSgpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IG1hdGgucmkodGhpcy5taW4sIHRoaXMubWF4KTtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgfVxuXG4gICAgZHJ1bmsoKSB7XG4gICAgICAgIHRoaXMuZHJ1bmtXYWxrLm1pbiA9IHRoaXMubWluO1xuICAgICAgICB0aGlzLmRydW5rV2Fsay5tYXggPSB0aGlzLm1heDtcbiAgICAgICAgdGhpcy5kcnVua1dhbGsudmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5kcnVua1dhbGsubmV4dCgpO1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2pzaGludC1sb2FkZXIhLi9saWIvbW9kZWxzL2NvdW50ZXIuanMiLCIndXNlIHN0cmljdCc7XG5cbmxldCBzdmcgPSByZXF1aXJlKCcuLi91dGlsL3N2ZycpO1xubGV0IG1hdGggPSByZXF1aXJlKCcuLi91dGlsL21hdGgnKTtcbmxldCBJbnRlcmZhY2UgPSByZXF1aXJlKCcuLi9jb3JlL2ludGVyZmFjZScpO1xubGV0IFN0ZXAgPSByZXF1aXJlKCcuLi9tb2RlbHMvc3RlcCcpO1xuaW1wb3J0ICogYXMgSW50ZXJhY3Rpb24gZnJvbSAnLi4vdXRpbC9pbnRlcmFjdGlvbic7XG5cbi8qKlxuKiBQYW4yRFxuKlxuKiBAZGVzY3JpcHRpb24gSW50ZXJmYWNlIGZvciBtb3ZpbmcgYSBzb3VuZCBhcm91bmQgYW4gYXJyYXkgb2Ygc3BlYWtlcnMuIFNwZWFrZXIgbG9jYXRpb25zIGNhbiBiZSBjdXN0b21pemVkLiBUaGUgaW50ZXJmYWNlIGNhbGN1bGF0ZXMgdGhlIGNsb3NlbmVzcyBvZiB0aGUgc291bmQgc291cmNlIHRvIGVhY2ggc3BlYWtlciBhbmQgcmV0dXJucyB0aGF0IGRpc3RhbmNlIGFzIGEgbnVtZXJpYyB2YWx1ZS5cbipcbiogQGRlbW8gPHNwYW4gbmV4dXMtdWk9XCJwYW4yRFwiPjwvc3Bhbj5cbipcbiogQGV4YW1wbGVcbiogdmFyIHBhbjJkID0gbmV3IE5leHVzLlBhbjJkKCcjdGFyZ2V0JylcbipcbiogQGV4YW1wbGVcbiogdmFyIHBhbjJkID0gbmV3IE5leHVzLlBhbjJEKCcjdGFyZ2V0Jyx7XG4qICAgJ3NpemUnOiBbMjAwLDIwMF0sXG4qICAgJ3JhbmdlJzogMC41LCAgLy8gZGV0ZWN0aW9uIHJhZGl1cyBvZiBlYWNoIHNwZWFrZXJcbiogICAnbW9kZSc6ICdhYnNvbHV0ZScsICAgLy8gJ2Fic29sdXRlJyBvciAncmVsYXRpdmUnIHNvdW5kIG1vdmVtZW50XG4qICAgJ3NwZWFrZXJzJzogWyAgLy8gdGhlIHNwZWFrZXIgW3gseV0gcG9zaXRpb25zXG4qICAgICAgIFswLjUsMC4yXSxcbiogICAgICAgWzAuNzUsMC4yNV0sXG4qICAgICAgIFswLjgsMC41XSxcbiogICAgICAgWzAuNzUsMC43NV0sXG4qICAgICAgIFswLjUsMC44XSxcbiogICAgICAgWzAuMjUsMC43NV1cbiogICAgICAgWzAuMiwwLjVdLFxuKiAgICAgICBbMC4yNSwwLjI1XVxuKiAgIF1cbiogfSlcbipcbiogQG91dHB1dFxuKiBjaGFuZ2VcbiogRmlyZXMgYW55IHRpbWUgdGhlIFwic291cmNlXCIgbm9kZSdzIHBvc2l0aW9uIGNoYW5nZXMuIDxicj5cbiogVGhlIGV2ZW50IGRhdGEgaXMgYW4gYXJyYXkgb2YgdGhlIGFtcGxpdHVkZXMgKDAtMSksIHJlcHJlc2VudGluZyB0aGUgbGV2ZWwgb2YgZWFjaCBzcGVha2VyIChhcyBjYWxjdWxhdGVkIGJ5IGl0cyBkaXN0YW5jZSB0byB0aGUgYXVkaW8gc291cmNlKS5cbipcbiogQG91dHB1dGV4YW1wbGVcbiogcGFuMmQub24oJ2NoYW5nZScsZnVuY3Rpb24odikge1xuKiAgIGNvbnNvbGUubG9nKHYpO1xuKiB9KVxuKlxuKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFuMkQgZXh0ZW5kcyBJbnRlcmZhY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgbGV0IG9wdGlvbnMgPSBbJ3JhbmdlJ107XG5cbiAgICBsZXQgZGVmYXVsdHMgPSB7XG4gICAgICAnc2l6ZSc6IFsyMDAsMjAwXSxcbiAgICAgICdyYW5nZSc6IDAuNSxcbiAgICAgICdtb2RlJzogJ2Fic29sdXRlJyxcbiAgICAgICdzcGVha2Vycyc6IFtcbiAgICAgICAgWzAuNSwwLjJdLFxuICAgICAgICBbMC43NSwwLjI1XSxcbiAgICAgICAgWzAuOCwwLjVdLFxuICAgICAgICBbMC43NSwwLjc1XSxcbiAgICAgICAgWzAuNSwwLjhdLFxuICAgICAgICBbMC4yNSwwLjc1XSxcbiAgICAgICAgWzAuMiwwLjVdLFxuICAgICAgICBbMC4yNSwwLjI1XVxuICAgICAgXVxuICAgIH07XG5cbiAgICBzdXBlcihhcmd1bWVudHMsb3B0aW9ucyxkZWZhdWx0cyk7XG5cbiAgICB0aGlzLnZhbHVlID0ge1xuICAgICAgeDogbmV3IFN0ZXAoMCwxLDAsMC41KSxcbiAgICAgIHk6IG5ldyBTdGVwKDAsMSwwLDAuNSlcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgQWJzb2x1dGUgb3IgcmVsYXRpdmUgbW91c2UgaW50ZXJhY3Rpb24uIEluIFwiYWJzb2x1dGVcIiBtb2RlLCB0aGUgc291cmNlIG5vZGUgd2lsbCBqdW1wIHRvIHlvdXIgbW91c2UgcG9zaXRpb24gb24gbW91c2UgY2xpY2suIEluIFwicmVsYXRpdmVcIiBtb2RlLCBpdCBkb2VzIG5vdC5cbiAgICAqL1xuICAgIHRoaXMubW9kZSA9IHRoaXMuc2V0dGluZ3MubW9kZTtcblxuICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICB4OiBuZXcgSW50ZXJhY3Rpb24uSGFuZGxlKHRoaXMubW9kZSwnaG9yaXpvbnRhbCcsWzAsdGhpcy53aWR0aF0sW3RoaXMuaGVpZ2h0LDBdKSxcbiAgICAgIHk6IG5ldyBJbnRlcmFjdGlvbi5IYW5kbGUodGhpcy5tb2RlLCd2ZXJ0aWNhbCcsWzAsdGhpcy53aWR0aF0sW3RoaXMuaGVpZ2h0LDBdKVxuICAgIH07XG4gICAgdGhpcy5wb3NpdGlvbi54LnZhbHVlID0gdGhpcy52YWx1ZS54Lm5vcm1hbGl6ZWQ7XG4gICAgdGhpcy5wb3NpdGlvbi55LnZhbHVlID0gdGhpcy52YWx1ZS55Lm5vcm1hbGl6ZWQ7XG5cbiAgICAvKipcbiAgICBBbiBhcnJheSBvZiBzcGVha2VyIGxvY2F0aW9ucy4gVXBkYXRlIHRoaXMgd2l0aCAubW92ZVNwZWFrZXIoKSBvciAubW92ZUFsbFNwZWFrZXJzKClcbiAgICAqL1xuICAgIHRoaXMuc3BlYWtlcnMgPSB0aGlzLnNldHRpbmdzLnNwZWFrZXJzO1xuXG4gICAgLyoqXG4gICAgUmV3cml0ZTogVGhlIG1heGltdW0gZGlzdGFuY2UgZnJvbSBhIHNwZWFrZXIgdGhhdCB0aGUgc291cmNlIG5vZGUgY2FuIGJlIGZvciBpdCB0byBiZSBoZWFyZCBmcm9tIHRoYXQgc3BlYWtlci4gQSBsb3cgcmFuZ2UgKDAuMSkgd2lsbCByZXN1bHQgaW4gc3BlYWtlcnMgb25seSBwbGF5aW5nIHdoZW4gdGhlIHNvdW5kIGlzIHZlcnkgY2xvc2UgaXQuIERlZmF1bHQgaXMgMC41IChoYWxmIG9mIHRoZSBpbnRlcmZhY2UpLlxuICAgICovXG4gICAgdGhpcy5yYW5nZSA9IHRoaXMuc2V0dGluZ3MucmFuZ2U7XG5cbiAgICAvKipcbiAgICBUaGUgY3VycmVudCBsZXZlbHMgZm9yIGVhY2ggc3BlYWtlci4gVGhpcyBpcyBjYWxjdWxhdGVkIHdoZW4gYSBzb3VyY2Ugbm9kZSBvciBzcGVha2VyIG5vZGUgaXMgbW92ZWQgdGhyb3VnaCBpbnRlcmFjdGlvbiBvciBwcm9ncmFtYXRpY2FsbHkuXG4gICAgKi9cbiAgICB0aGlzLmxldmVscyA9IFtdO1xuXG4gICAgdGhpcy5pbml0KCk7XG5cbiAgICB0aGlzLmNhbGN1bGF0ZUxldmVscygpO1xuICAgIHRoaXMucmVuZGVyKCk7XG5cbiAgfVxuXG4gIGJ1aWxkSW50ZXJmYWNlKCkge1xuXG4gICAgdGhpcy5rbm9iID0gc3ZnLmNyZWF0ZSgnY2lyY2xlJyk7XG5cblxuICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmtub2IpO1xuXG5cbiAgICAvLyBhZGQgc3BlYWtlcnNcbiAgICB0aGlzLnNwZWFrZXJFbGVtZW50cyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaT0wO2k8dGhpcy5zcGVha2Vycy5sZW5ndGg7aSsrKSB7XG4gICAgICBsZXQgc3BlYWtlckVsZW1lbnQgPSBzdmcuY3JlYXRlKCdjaXJjbGUnKTtcblxuICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHNwZWFrZXJFbGVtZW50KTtcblxuICAgICAgdGhpcy5zcGVha2VyRWxlbWVudHMucHVzaChzcGVha2VyRWxlbWVudCk7XG4gICAgfVxuXG4gIH1cblxuICBzaXplSW50ZXJmYWNlKCkge1xuXG4gICAgICAgIHRoaXMuX21pbkRpbWVuc2lvbiA9IE1hdGgubWluKHRoaXMud2lkdGgsdGhpcy5oZWlnaHQpO1xuXG4gICAgICAgIHRoaXMua25vYlJhZGl1cyA9IHtcbiAgICAgICAgICBvZmY6IH5+KHRoaXMuX21pbkRpbWVuc2lvbi8xMDApICogMyArIDUsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMua25vYlJhZGl1cy5vbiA9IHRoaXMua25vYlJhZGl1cy5vZmYgKiAyO1xuXG4gICAgICAgIHRoaXMua25vYi5zZXRBdHRyaWJ1dGUoJ2N4Jyx0aGlzLndpZHRoLzIpO1xuICAgICAgICB0aGlzLmtub2Iuc2V0QXR0cmlidXRlKCdjeScsdGhpcy5oZWlnaHQvMik7XG4gICAgICAgIHRoaXMua25vYi5zZXRBdHRyaWJ1dGUoJ3InLHRoaXMua25vYlJhZGl1cy5vZmYpO1xuXG4gICAgICAgIGZvciAobGV0IGk9MDtpPHRoaXMuc3BlYWtlcnMubGVuZ3RoO2krKykge1xuICAgICAgICAgIGxldCBzcGVha2VyRWxlbWVudCA9IHRoaXMuc3BlYWtlckVsZW1lbnRzW2ldO1xuICAgICAgICAgIGxldCBzcGVha2VyID0gdGhpcy5zcGVha2Vyc1tpXTtcbiAgICAgICAgICBzcGVha2VyRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2N4JyxzcGVha2VyWzBdKnRoaXMud2lkdGgpO1xuICAgICAgICAgIHNwZWFrZXJFbGVtZW50LnNldEF0dHJpYnV0ZSgnY3knLHNwZWFrZXJbMV0qdGhpcy5oZWlnaHQpO1xuICAgICAgICAgIHNwZWFrZXJFbGVtZW50LnNldEF0dHJpYnV0ZSgncicsdGhpcy5fbWluRGltZW5zaW9uLzIwICsgNSk7XG4gICAgICAgICAgc3BlYWtlckVsZW1lbnQuc2V0QXR0cmlidXRlKCdmaWxsLW9wYWNpdHknLCAnMCcpO1xuICAgICAgICB9XG5cbiAgICAgIHRoaXMucG9zaXRpb24ueC5yZXNpemUoWzAsdGhpcy53aWR0aF0sW3RoaXMuaGVpZ2h0LDBdKTtcbiAgICAgIHRoaXMucG9zaXRpb24ueS5yZXNpemUoWzAsdGhpcy53aWR0aF0sW3RoaXMuaGVpZ2h0LDBdKTtcblxuICAgICAgICAvLyBuZXh0LCBuZWVkIHRvXG4gICAgICAgIC8vIHJlc2l6ZSBwb3NpdGlvbnNcbiAgICAgICAgLy8gY2FsY3VsYXRlIHNwZWFrZXIgZGlzdGFuY2VzXG4gICAgICB0aGlzLmNhbGN1bGF0ZUxldmVscygpO1xuICAgICAgdGhpcy5yZW5kZXIoKTtcblxuICB9XG5cbiAgY29sb3JJbnRlcmZhY2UoKSB7XG5cbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gdGhpcy5jb2xvcnMuZmlsbDtcbiAgICB0aGlzLmtub2Iuc2V0QXR0cmlidXRlKCdmaWxsJywgdGhpcy5jb2xvcnMubWVkaXVtTGlnaHQpO1xuXG4gICAgZm9yIChsZXQgaT0wO2k8dGhpcy5zcGVha2Vycy5sZW5ndGg7aSsrKSB7XG4gICAgICBsZXQgc3BlYWtlckVsZW1lbnQgPSB0aGlzLnNwZWFrZXJFbGVtZW50c1tpXTtcbiAgICAgIHNwZWFrZXJFbGVtZW50LnNldEF0dHJpYnV0ZSgnZmlsbCcsIHRoaXMuY29sb3JzLmFjY2VudCk7XG4gICAgICBzcGVha2VyRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsIHRoaXMuY29sb3JzLmFjY2VudCk7XG4gICAgfVxuXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdGhpcy5rbm9iQ29vcmRpbmF0ZXMgPSB7XG4gICAgICB4OiB0aGlzLnZhbHVlLngubm9ybWFsaXplZCAqIHRoaXMud2lkdGgsXG4gICAgICB5OiB0aGlzLmhlaWdodCAtIHRoaXMudmFsdWUueS5ub3JtYWxpemVkICogdGhpcy5oZWlnaHRcbiAgICB9O1xuXG4gICAgdGhpcy5rbm9iLnNldEF0dHJpYnV0ZSgnY3gnLHRoaXMua25vYkNvb3JkaW5hdGVzLngpO1xuICAgIHRoaXMua25vYi5zZXRBdHRyaWJ1dGUoJ2N5Jyx0aGlzLmtub2JDb29yZGluYXRlcy55KTtcbiAgfVxuXG5cbiAgY2xpY2soKSB7XG4gICAgdGhpcy5wb3NpdGlvbi54LmFuY2hvciA9IHRoaXMubW91c2U7XG4gICAgdGhpcy5wb3NpdGlvbi55LmFuY2hvciA9IHRoaXMubW91c2U7XG4gICAgdGhpcy5tb3ZlKCk7XG4gIH1cblxuICBtb3ZlKCkge1xuICAgIGlmICh0aGlzLmNsaWNrZWQpIHtcbiAgICAgIHRoaXMucG9zaXRpb24ueC51cGRhdGUodGhpcy5tb3VzZSk7XG4gICAgICB0aGlzLnBvc2l0aW9uLnkudXBkYXRlKHRoaXMubW91c2UpO1xuICAgICAgLy8gcG9zaXRpb24ueCBhbmQgcG9zaXRpb24ueSBhcmUgbm9ybWFsaXplZFxuICAgICAgLy8gc28gYXJlIHRoZSBsZXZlbHNcbiAgICAgIC8vIGxpa2VseSBkb24ndCBuZWVkIHRoaXMudmFsdWUgYXQgYWxsIC0tIG9ubHkgdXNlZCBmb3IgZHJhd2luZ1xuICAgICAgLy8gbm90IGdvaW5nIHRvIGJlIGEgJ3N0ZXAnIG9yICdtaW4nIGFuZCAnbWF4JyBpbiB0aGlzIG9uZS5cbiAgICAgIHRoaXMuY2FsY3VsYXRlTGV2ZWxzKCk7XG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZScsdGhpcy5sZXZlbHMpO1xuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG4gIH1cblxuICByZWxlYXNlKCkge1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBnZXQgbm9ybWFsaXplZCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgeDogdGhpcy52YWx1ZS54Lm5vcm1hbGl6ZWQsXG4gICAgICB5OiB0aGlzLnZhbHVlLnkubm9ybWFsaXplZFxuICAgIH07XG4gIH1cblxuICBjYWxjdWxhdGVMZXZlbHMoKSB7XG4gICAgdGhpcy52YWx1ZS54LnVwZGF0ZU5vcm1hbCggdGhpcy5wb3NpdGlvbi54LnZhbHVlICk7XG4gICAgdGhpcy52YWx1ZS55LnVwZGF0ZU5vcm1hbCggdGhpcy5wb3NpdGlvbi55LnZhbHVlICk7XG4gICAgdGhpcy5sZXZlbHMgPSBbXTtcbiAgICB0aGlzLnNwZWFrZXJzLmZvckVhY2goKHMsaSkgPT4ge1xuICAgICAgbGV0IGRpc3RhbmNlID0gbWF0aC5kaXN0YW5jZShzWzBdKnRoaXMud2lkdGgsc1sxXSp0aGlzLmhlaWdodCx0aGlzLnBvc2l0aW9uLngudmFsdWUqdGhpcy53aWR0aCwoMS10aGlzLnBvc2l0aW9uLnkudmFsdWUpKnRoaXMuaGVpZ2h0KTtcbiAgICAgIGxldCBsZXZlbCA9IG1hdGguY2xpcCgxLWRpc3RhbmNlLyh0aGlzLnJhbmdlKnRoaXMud2lkdGgpLDAsMSk7XG4gICAgICB0aGlzLmxldmVscy5wdXNoKGxldmVsKTtcbiAgICAgIHRoaXMuc3BlYWtlckVsZW1lbnRzW2ldLnNldEF0dHJpYnV0ZSgnZmlsbC1vcGFjaXR5JywgbGV2ZWwpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gIE1vdmUgdGhlIGF1ZGlvIHNvdXJjZSBub2RlIGFuZCB0cmlnZ2VyIHRoZSBvdXRwdXQgZXZlbnQuXG4gIEBwYXJhbSB4IHtudW1iZXJ9IE5ldyB4IGxvY2F0aW9uLCBub3JtYWxpemVkIDAtMVxuICBAcGFyYW0geSB7bnVtYmVyfSBOZXcgeSBsb2NhdGlvbiwgbm9ybWFsaXplZCAwLTFcbiAgKi9cbiAgbW92ZVNvdXJjZSh4LHkpIHtcbiAgICBsZXQgbG9jYXRpb24gPSB7XG4gICAgICB4OiB4KnRoaXMud2lkdGgsXG4gICAgICB5OiB5KnRoaXMuaGVpZ2h0XG4gICAgfTtcbiAgICB0aGlzLnBvc2l0aW9uLngudXBkYXRlKGxvY2F0aW9uKTtcbiAgICB0aGlzLnBvc2l0aW9uLnkudXBkYXRlKGxvY2F0aW9uKTtcbiAgICB0aGlzLmNhbGN1bGF0ZUxldmVscygpO1xuICAgIHRoaXMuZW1pdCgnY2hhbmdlJyx0aGlzLmxldmVscyk7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIC8qKlxuICBNb3ZlIGEgc3BlYWtlciBub2RlIGFuZCB0cmlnZ2VyIHRoZSBvdXRwdXQgZXZlbnQuXG4gIEBwYXJhbSBpbmRleCB7bnVtYmVyfSBJbmRleCBvZiB0aGUgc3BlYWtlciB0byBtb3ZlXG4gIEBwYXJhbSB4IHtudW1iZXJ9IE5ldyB4IGxvY2F0aW9uLCBub3JtYWxpemVkIDAtMVxuICBAcGFyYW0geSB7bnVtYmVyfSBOZXcgeSBsb2NhdGlvbiwgbm9ybWFsaXplZCAwLTFcbiAgKi9cbiAgbW92ZVNwZWFrZXIoaW5kZXgseCx5KSB7XG5cbiAgICB0aGlzLnNwZWFrZXJzW2luZGV4XSA9IFt4LHldO1xuICAgIHRoaXMuc3BlYWtlckVsZW1lbnRzW2luZGV4XS5zZXRBdHRyaWJ1dGUoJ2N4JywgeCp0aGlzLndpZHRoKTtcbiAgICB0aGlzLnNwZWFrZXJFbGVtZW50c1tpbmRleF0uc2V0QXR0cmlidXRlKCdjeScsIHkqdGhpcy5oZWlnaHQpO1xuICAgIHRoaXMuY2FsY3VsYXRlTGV2ZWxzKCk7XG4gICAgdGhpcy5lbWl0KCdjaGFuZ2UnLHRoaXMubGV2ZWxzKTtcbiAgICB0aGlzLnJlbmRlcigpO1xuXG4gIH1cblxuICAvKipcbiAgU2V0IGFsbCBzcGVha2VyIGxvY2F0aW9uc1xuICBAcGFyYW0gbG9jYXRpb25zIHtBcnJheX0gQXJyYXkgb2Ygc3BlYWtlciBsb2NhdGlvbnMuIEVhY2ggaXRlbSBpbiB0aGUgYXJyYXkgc2hvdWxkIGJlIGFuIGFycmF5IG9mIG5vcm1hbGl6ZWQgeCBhbmQgeSBjb29yZGluYXRlcy5cblxuICBzZXRTcGVha2Vycyhsb2NhdGlvbnMpIHtcblxuICB9XG4gICovXG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vanNoaW50LWxvYWRlciEuL2xpYi9pbnRlcmZhY2VzL3BhbjJkLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5sZXQgbWF0aCA9IHJlcXVpcmUoJy4uL3V0aWwvbWF0aCcpO1xubGV0IHN2ZyA9IHJlcXVpcmUoJy4uL3V0aWwvc3ZnJyk7XG5sZXQgSW50ZXJmYWNlID0gcmVxdWlyZSgnLi4vY29yZS9pbnRlcmZhY2UnKTtcblxuLyoqXG4qIFRpbHRcbipcbiogQGRlc2NyaXB0aW9uIERldmljZSB0aWx0IHNlbnNvciB3aXRoIDIgb3IgMyBheGVzIChkZXBlbmRpbmcgb24geW91ciBkZXZpY2UgYW5kIGJyb3dzZXIpLlxuKlxuKiBAZGVtbyA8c3BhbiBuZXh1cy11aT0ndGlsdCc+PC9zcGFuPlxuKlxuKiBAZXhhbXBsZVxuKiB2YXIgdGlsdCA9IG5ldyBOZXh1cy5UaWx0KCcjdGFyZ2V0JylcbipcbiogQG91dHB1dFxuKiBjaGFuZ2VcbiogRmlyZXMgYXQgYSByZWd1bGFyIGludGVydmFsLCBhcyBsb25nIGFzIHRoaXMgaW50ZXJmYWNlIGlzIGFjdGl2ZSAoc2VlIHRoZSBpbnRlcmZhY2UncyA8aT4uYWN0aXZlPC9pPiBwcm9wZXJ0eSk8YnI+XG4qIFRoZSBldmVudCBkYXRhIGlzIGFuIDxpPm9iamVjdDwvaT4gY29udGFpbmluZyB4IChudW1iZXIpIGFuZCB5IChudW1iZXIpIHByb3BlcnRpZXMgd2hpY2ggcmVwcmVzZW50IHRoZSBjdXJyZW50IHRpbHQgc3RhdGUgb2YgdGhlIGRldmljZS5cbipcbiogQG91dHB1dGV4YW1wbGVcbiogdGlsdC5vbignY2hhbmdlJyxmdW5jdGlvbih2KSB7XG4qICAgY29uc29sZS5sb2codik7XG4qIH0pXG4qXG4qXG4qL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWx0IGV4dGVuZHMgSW50ZXJmYWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIGxldCBvcHRpb25zID0gWyd2YWx1ZSddO1xuXG4gICAgbGV0IGRlZmF1bHRzID0ge1xuICAgICAgJ3NpemUnOiBbODAsODBdXG4gICAgfTtcblxuICAgIHN1cGVyKGFyZ3VtZW50cyxvcHRpb25zLGRlZmF1bHRzKTtcblxuICAgIHRoaXMuX2FjdGl2ZSA9IHRydWU7XG5cbiAgICB0aGlzLmluaXQoKTtcblxuICAgIC8vIGFkZCBldmVudCBsaXN0ZW5lciBmb3IgZGV2aWNlIG9yaWVudGF0aW9uXG5cbiAgXHR0aGlzLmJvdW5kVXBkYXRlID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKTtcbiAgLy9cdHRoaXMuYm91bmRNb3pUaWx0ID0gdGhpcy5tb3pUaWx0LmJpbmQodGhpcylcblxuICBcdGlmICh3aW5kb3cuRGV2aWNlT3JpZW50YXRpb25FdmVudCkge1xuICBcdFx0dGhpcy5vcmllbnRhdGlvbkxpc3RlbmVyID0gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2RldmljZW9yaWVudGF0aW9uJywgdGhpcy5ib3VuZFVwZGF0ZSwgZmFsc2UpO1xuICBcdH0gZWxzZSB7XG4gICAgICB0aGlzLl9hY3RpdmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuY29sb3JJbnRlcmZhY2UoKTtcbiAgICB9XG5cblxuXG4gICAgICAvKmVsc2UgaWYgKHdpbmRvdy5PcmllbnRhdGlvbkV2ZW50KSB7XG4gIC8vXHQgIFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ01vek9yaWVudGF0aW9uJywgdGhpcy5ib3VuZE1velRpbHQsIGZhbHNlKTtcbiAgXHR9IGVsc2Uge1xuICBcdCAgXHRjb25zb2xlLmxvZygnTm90IHN1cHBvcnRlZCBvbiB5b3VyIGRldmljZSBvciBicm93c2VyLicpO1xuICBcdH0gKi9cblxuXG4gIH1cblxuXG4gIGJ1aWxkSW50ZXJmYWNlKCkge1xuXG4gICAgdGhpcy50aXRsZSA9IHN2Zy5jcmVhdGUoJ3RleHQnKTtcbiAgICB0aGlzLmNpcmNsZVggPSBzdmcuY3JlYXRlKCdjaXJjbGUnKTtcbiAgICB0aGlzLmNpcmNsZVkgPSBzdmcuY3JlYXRlKCdjaXJjbGUnKTtcbiAgICB0aGlzLmNpcmNsZVogPSBzdmcuY3JlYXRlKCdjaXJjbGUnKTtcblxuICAgIHRoaXMuYmFyWCA9IHN2Zy5jcmVhdGUoJ3BhdGgnKTtcbiAgICB0aGlzLmJhclkgPSBzdmcuY3JlYXRlKCdwYXRoJyk7XG4gICAgdGhpcy5iYXJaID0gc3ZnLmNyZWF0ZSgncGF0aCcpO1xuXG4gICAgdGhpcy5iYXJYMiA9IHN2Zy5jcmVhdGUoJ3BhdGgnKTtcbiAgICB0aGlzLmJhclkyID0gc3ZnLmNyZWF0ZSgncGF0aCcpO1xuICAgIHRoaXMuYmFyWjIgPSBzdmcuY3JlYXRlKCdwYXRoJyk7XG5cbiAgICB0aGlzLmJhclguc2V0QXR0cmlidXRlKCdvcGFjaXR5JywnMC44Jyk7XG4gICAgdGhpcy5iYXJZLnNldEF0dHJpYnV0ZSgnb3BhY2l0eScsJzAuOCcpO1xuICAgIHRoaXMuYmFyWi5zZXRBdHRyaWJ1dGUoJ29wYWNpdHknLCcwLjgnKTtcbiAgICB0aGlzLmJhclgyLnNldEF0dHJpYnV0ZSgnb3BhY2l0eScsJzAuOCcpO1xuICAgIHRoaXMuYmFyWTIuc2V0QXR0cmlidXRlKCdvcGFjaXR5JywnMC44Jyk7XG4gICAgdGhpcy5iYXJaMi5zZXRBdHRyaWJ1dGUoJ29wYWNpdHknLCcwLjgnKTtcblxuICAgIHRoaXMuY2lyY2xlWC5zZXRBdHRyaWJ1dGUoJ2N4Jyx0aGlzLndpZHRoKjMvMTIpO1xuICAgIHRoaXMuY2lyY2xlWC5zZXRBdHRyaWJ1dGUoJ2N5Jyx0aGlzLmhlaWdodCozLzQpO1xuICAgIHRoaXMuY2lyY2xlWC5zZXRBdHRyaWJ1dGUoJ3InLHRoaXMuaGVpZ2h0LzEwKTtcbiAgICB0aGlzLmNpcmNsZVguc2V0QXR0cmlidXRlKCdvcGFjaXR5JywnMC40Jyk7XG5cbiAgICB0aGlzLmNpcmNsZVkuc2V0QXR0cmlidXRlKCdjeCcsdGhpcy53aWR0aCo2LzEyKTtcbiAgICB0aGlzLmNpcmNsZVkuc2V0QXR0cmlidXRlKCdjeScsdGhpcy5oZWlnaHQqMy80KTtcbiAgICB0aGlzLmNpcmNsZVkuc2V0QXR0cmlidXRlKCdyJyx0aGlzLmhlaWdodC8xMCk7XG4gICAgdGhpcy5jaXJjbGVZLnNldEF0dHJpYnV0ZSgnb3BhY2l0eScsJzAuNCcpO1xuXG4gICAgdGhpcy5jaXJjbGVaLnNldEF0dHJpYnV0ZSgnY3gnLHRoaXMud2lkdGgqOS8xMik7XG4gICAgdGhpcy5jaXJjbGVaLnNldEF0dHJpYnV0ZSgnY3knLHRoaXMuaGVpZ2h0KjMvNCk7XG4gICAgdGhpcy5jaXJjbGVaLnNldEF0dHJpYnV0ZSgncicsdGhpcy5oZWlnaHQvMTApO1xuICAgIHRoaXMuY2lyY2xlWi5zZXRBdHRyaWJ1dGUoJ29wYWNpdHknLCcwLjQnKTtcblxuXG4gICAgdGhpcy5iYXJYLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLXdpZHRoJyxNYXRoLnJvdW5kKHRoaXMuaGVpZ2h0LzMwKSk7XG4gICAgdGhpcy5iYXJZLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLXdpZHRoJyxNYXRoLnJvdW5kKHRoaXMuaGVpZ2h0LzMwKSk7XG4gICAgdGhpcy5iYXJaLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLXdpZHRoJyxNYXRoLnJvdW5kKHRoaXMuaGVpZ2h0LzMwKSk7XG5cbiAgICB0aGlzLmJhclguc2V0QXR0cmlidXRlKCdmaWxsJywgJ25vbmUnKTtcbiAgICB0aGlzLmJhclkuc2V0QXR0cmlidXRlKCdmaWxsJywgJ25vbmUnKTtcbiAgICB0aGlzLmJhclouc2V0QXR0cmlidXRlKCdmaWxsJywgJ25vbmUnKTtcblxuICAgIHRoaXMuYmFyWDIuc2V0QXR0cmlidXRlKCdzdHJva2Utd2lkdGgnLE1hdGgucm91bmQodGhpcy5oZWlnaHQvMzApKTtcbiAgICB0aGlzLmJhclkyLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLXdpZHRoJyxNYXRoLnJvdW5kKHRoaXMuaGVpZ2h0LzMwKSk7XG4gICAgdGhpcy5iYXJaMi5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS13aWR0aCcsTWF0aC5yb3VuZCh0aGlzLmhlaWdodC8zMCkpO1xuXG4gICAgdGhpcy5iYXJYMi5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCAnbm9uZScpO1xuICAgIHRoaXMuYmFyWTIuc2V0QXR0cmlidXRlKCdmaWxsJywgJ25vbmUnKTtcbiAgICB0aGlzLmJhcloyLnNldEF0dHJpYnV0ZSgnZmlsbCcsICdub25lJyk7XG5cblxuICAgIHRoaXMudGl0bGUuc2V0QXR0cmlidXRlKCd4Jyx0aGlzLndpZHRoLzIpO1xuICAgIHRoaXMudGl0bGUuc2V0QXR0cmlidXRlKCd5Jyx0aGlzLmhlaWdodC8zKzcpO1xuICAgIHRoaXMudGl0bGUuc2V0QXR0cmlidXRlKCdmb250LXNpemUnLCcxNXB4Jyk7XG4gICAgdGhpcy50aXRsZS5zZXRBdHRyaWJ1dGUoJ2ZvbnQtd2VpZ2h0JywnYm9sZCcpO1xuICAgIHRoaXMudGl0bGUuc2V0QXR0cmlidXRlKCdsZXR0ZXItc3BhY2luZycsJzJweCcpO1xuICAgIHRoaXMudGl0bGUuc2V0QXR0cmlidXRlKCdvcGFjaXR5JywnMC43Jyk7XG4gICAgdGhpcy50aXRsZS5zZXRBdHRyaWJ1dGUoJ3RleHQtYW5jaG9yJywnbWlkZGxlJyk7XG4gICAgdGhpcy50aXRsZS50ZXh0Q29udGVudCA9ICdUSUxUJztcblxuXG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuY2lyY2xlWCk7XG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuY2lyY2xlWSk7XG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuY2lyY2xlWik7XG5cbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5iYXJYKTtcbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5iYXJZKTtcbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5iYXJaKTtcblxuICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmJhclgyKTtcbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5iYXJZMik7XG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuYmFyWjIpO1xuXG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMudGl0bGUpO1xuXG4gIH1cblxuICBjb2xvckludGVyZmFjZSgpIHtcblxuICAgIGlmICh0aGlzLl9hY3RpdmUpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLmNvbG9ycy5hY2NlbnQ7XG4gICAgICB0aGlzLmNpcmNsZVguc2V0QXR0cmlidXRlKCdmaWxsJyx0aGlzLmNvbG9ycy5saWdodCk7XG4gICAgICB0aGlzLmNpcmNsZVkuc2V0QXR0cmlidXRlKCdmaWxsJyx0aGlzLmNvbG9ycy5saWdodCk7XG4gICAgICB0aGlzLmNpcmNsZVouc2V0QXR0cmlidXRlKCdmaWxsJyx0aGlzLmNvbG9ycy5saWdodCk7XG4gICAgICB0aGlzLmNpcmNsZVguc2V0QXR0cmlidXRlKCdzdHJva2UnLHRoaXMuY29sb3JzLmxpZ2h0KTtcbiAgICAgIHRoaXMuY2lyY2xlWS5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsdGhpcy5jb2xvcnMubGlnaHQpO1xuICAgICAgdGhpcy5jaXJjbGVaLnNldEF0dHJpYnV0ZSgnc3Ryb2tlJyx0aGlzLmNvbG9ycy5saWdodCk7XG4gICAgICB0aGlzLmJhclguc2V0QXR0cmlidXRlKCdzdHJva2UnLHRoaXMuY29sb3JzLmxpZ2h0KTtcbiAgICAgIHRoaXMuYmFyWS5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsdGhpcy5jb2xvcnMubGlnaHQpO1xuICAgICAgdGhpcy5iYXJaLnNldEF0dHJpYnV0ZSgnc3Ryb2tlJyx0aGlzLmNvbG9ycy5saWdodCk7XG4gICAgICB0aGlzLmJhclgyLnNldEF0dHJpYnV0ZSgnc3Ryb2tlJyx0aGlzLmNvbG9ycy5saWdodCk7XG4gICAgICB0aGlzLmJhclkyLnNldEF0dHJpYnV0ZSgnc3Ryb2tlJyx0aGlzLmNvbG9ycy5saWdodCk7XG4gICAgICB0aGlzLmJhcloyLnNldEF0dHJpYnV0ZSgnc3Ryb2tlJyx0aGlzLmNvbG9ycy5saWdodCk7XG4gICAgICB0aGlzLnRpdGxlLnNldEF0dHJpYnV0ZSgnZmlsbCcsdGhpcy5jb2xvcnMubGlnaHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gdGhpcy5jb2xvcnMuZmlsbDtcbiAgICAgIHRoaXMuY2lyY2xlWC5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLHRoaXMuY29sb3JzLm1lZGl1bUxpZ2h0KTtcbiAgICAgIHRoaXMuY2lyY2xlWS5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLHRoaXMuY29sb3JzLm1lZGl1bUxpZ2h0KTtcbiAgICAgIHRoaXMuY2lyY2xlWi5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLHRoaXMuY29sb3JzLm1lZGl1bUxpZ2h0KTtcbiAgICAgIHRoaXMuY2lyY2xlWC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsdGhpcy5jb2xvcnMubWVkaXVtTGlnaHQpO1xuICAgICAgdGhpcy5jaXJjbGVZLnNldEF0dHJpYnV0ZSgnc3Ryb2tlJyx0aGlzLmNvbG9ycy5tZWRpdW1MaWdodCk7XG4gICAgICB0aGlzLmNpcmNsZVouc2V0QXR0cmlidXRlKCdzdHJva2UnLHRoaXMuY29sb3JzLm1lZGl1bUxpZ2h0KTtcbiAgICAgIHRoaXMuYmFyWC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsdGhpcy5jb2xvcnMubWVkaXVtTGlnaHQpO1xuICAgICAgdGhpcy5iYXJZLnNldEF0dHJpYnV0ZSgnc3Ryb2tlJyx0aGlzLmNvbG9ycy5tZWRpdW1MaWdodCk7XG4gICAgICB0aGlzLmJhclouc2V0QXR0cmlidXRlKCdzdHJva2UnLHRoaXMuY29sb3JzLm1lZGl1bUxpZ2h0KTtcbiAgICAgIHRoaXMuYmFyWDIuc2V0QXR0cmlidXRlKCdzdHJva2UnLHRoaXMuY29sb3JzLm1lZGl1bUxpZ2h0KTtcbiAgICAgIHRoaXMuYmFyWTIuc2V0QXR0cmlidXRlKCdzdHJva2UnLHRoaXMuY29sb3JzLm1lZGl1bUxpZ2h0KTtcbiAgICAgIHRoaXMuYmFyWjIuc2V0QXR0cmlidXRlKCdzdHJva2UnLHRoaXMuY29sb3JzLm1lZGl1bUxpZ2h0KTtcbiAgICAgIHRoaXMudGl0bGUuc2V0QXR0cmlidXRlKCdmaWxsJyx0aGlzLmNvbG9ycy5tZWRpdW1MaWdodCk7XG4gICAgfVxuXG4gIH1cblxuICB1cGRhdGUodikge1xuICAgIGlmICh0aGlzLl9hY3RpdmUpe1xuXG4gICAgICBsZXQgeSA9IHYuYmV0YTtcbiAgICAgIGxldCB4ID0gdi5nYW1tYTtcbiAgICAgIGxldCB6ID0gdi5hbHBoYTtcblxuICAgICAgLy8gdGFrZSB0aGUgb3JpZ2luYWwgLTkwIHRvIDkwIHNjYWxlIGFuZCBub3JtYWxpemUgaXQgMC0xXG4gICAgICB4ID0gbWF0aC5zY2FsZSh4LC05MCw5MCwwLDEpO1xuICAgICAgeSA9IG1hdGguc2NhbGUoeSwtOTAsOTAsMCwxKTtcbiAgICAgIHogPSBtYXRoLnNjYWxlKHosMCwzNjAsMCwxKTtcblxuXG4gICAgICBsZXQgaGFuZGxlUG9pbnRzID0ge1xuICAgICAgICBzdGFydDogTWF0aC5QSSoxLjUsXG4gICAgICAgIGVuZDogbWF0aC5jbGlwKCBtYXRoLnNjYWxlKHgsMCwwLjUsTWF0aC5QSSoxLjUsTWF0aC5QSSowLjUpICwgTWF0aC5QSSowLjUsIE1hdGguUEkqMS41IClcbiAgICAgIH07XG4gICAgICBsZXQgaGFuZGxlMlBvaW50cyA9IHtcbiAgICAgICAgc3RhcnQ6IE1hdGguUEkqMi41LFxuICAgICAgICBlbmQ6IG1hdGguY2xpcCggbWF0aC5zY2FsZSh4LDAuNSwxLE1hdGguUEkqMi41LE1hdGguUEkqMS41KSAsIE1hdGguUEkqMS41LCBNYXRoLlBJKjIuNSApXG4gICAgICB9O1xuXG4gICAgICBsZXQgaGFuZGxlUGF0aCA9IHN2Zy5hcmModGhpcy5jaXJjbGVYLmN4LmJhc2VWYWwudmFsdWUsIHRoaXMuY2lyY2xlWC5jeS5iYXNlVmFsLnZhbHVlLCB0aGlzLmNpcmNsZVguci5iYXNlVmFsLnZhbHVlLCBoYW5kbGVQb2ludHMuc3RhcnQsIGhhbmRsZVBvaW50cy5lbmQpO1xuICAgICAgbGV0IGhhbmRsZTJQYXRoID0gc3ZnLmFyYyh0aGlzLmNpcmNsZVguY3guYmFzZVZhbC52YWx1ZSwgdGhpcy5jaXJjbGVYLmN5LmJhc2VWYWwudmFsdWUsIHRoaXMuY2lyY2xlWC5yLmJhc2VWYWwudmFsdWUsIGhhbmRsZTJQb2ludHMuc3RhcnQsIGhhbmRsZTJQb2ludHMuZW5kKTtcblxuICAgICAgdGhpcy5iYXJYLnNldEF0dHJpYnV0ZSgnZCcsIGhhbmRsZVBhdGgpO1xuICAgICAgdGhpcy5iYXJYMi5zZXRBdHRyaWJ1dGUoJ2QnLCBoYW5kbGUyUGF0aCk7XG5cblxuXG5cblxuICAgICAgaGFuZGxlUG9pbnRzID0ge1xuICAgICAgICBzdGFydDogTWF0aC5QSSoxLjUsXG4gICAgICAgIGVuZDogbWF0aC5jbGlwKCBtYXRoLnNjYWxlKHksMCwwLjUsTWF0aC5QSSoxLjUsTWF0aC5QSSowLjUpICwgTWF0aC5QSSowLjUsIE1hdGguUEkqMS41IClcbiAgICAgIH07XG4gICAgICBoYW5kbGUyUG9pbnRzID0ge1xuICAgICAgICBzdGFydDogTWF0aC5QSSoyLjUsXG4gICAgICAgIGVuZDogbWF0aC5jbGlwKCBtYXRoLnNjYWxlKHksMC41LDEsTWF0aC5QSSoyLjUsTWF0aC5QSSoxLjUpICwgTWF0aC5QSSoxLjUsIE1hdGguUEkqMi41IClcbiAgICAgIH07XG5cbiAgICAgIGhhbmRsZVBhdGggPSBzdmcuYXJjKHRoaXMuY2lyY2xlWS5jeC5iYXNlVmFsLnZhbHVlLCB0aGlzLmNpcmNsZVkuY3kuYmFzZVZhbC52YWx1ZSwgdGhpcy5jaXJjbGVZLnIuYmFzZVZhbC52YWx1ZSwgaGFuZGxlUG9pbnRzLnN0YXJ0LCBoYW5kbGVQb2ludHMuZW5kKTtcbiAgICAgIGhhbmRsZTJQYXRoID0gc3ZnLmFyYyh0aGlzLmNpcmNsZVkuY3guYmFzZVZhbC52YWx1ZSwgdGhpcy5jaXJjbGVZLmN5LmJhc2VWYWwudmFsdWUsIHRoaXMuY2lyY2xlWS5yLmJhc2VWYWwudmFsdWUsIGhhbmRsZTJQb2ludHMuc3RhcnQsIGhhbmRsZTJQb2ludHMuZW5kKTtcblxuICAgICAgdGhpcy5iYXJZLnNldEF0dHJpYnV0ZSgnZCcsIGhhbmRsZVBhdGgpO1xuICAgICAgdGhpcy5iYXJZMi5zZXRBdHRyaWJ1dGUoJ2QnLCBoYW5kbGUyUGF0aCk7XG5cblxuXG5cblxuXG4gICAgICBoYW5kbGVQb2ludHMgPSB7XG4gICAgICAgIHN0YXJ0OiBNYXRoLlBJKjEuNSxcbiAgICAgICAgZW5kOiBtYXRoLmNsaXAoIG1hdGguc2NhbGUoeiwwLDAuNSxNYXRoLlBJKjEuNSxNYXRoLlBJKjAuNSkgLCBNYXRoLlBJKjAuNSwgTWF0aC5QSSoxLjUgKVxuICAgICAgfTtcbiAgICAgIGhhbmRsZTJQb2ludHMgPSB7XG4gICAgICAgIHN0YXJ0OiBNYXRoLlBJKjIuNSxcbiAgICAgICAgZW5kOiBtYXRoLmNsaXAoIG1hdGguc2NhbGUoeiwwLjUsMSxNYXRoLlBJKjIuNSxNYXRoLlBJKjEuNSkgLCBNYXRoLlBJKjEuNSwgTWF0aC5QSSoyLjUgKVxuICAgICAgfTtcblxuICAgICAgaGFuZGxlUGF0aCA9IHN2Zy5hcmModGhpcy5jaXJjbGVaLmN4LmJhc2VWYWwudmFsdWUsIHRoaXMuY2lyY2xlWi5jeS5iYXNlVmFsLnZhbHVlLCB0aGlzLmNpcmNsZVouci5iYXNlVmFsLnZhbHVlLCBoYW5kbGVQb2ludHMuc3RhcnQsIGhhbmRsZVBvaW50cy5lbmQpO1xuICAgICAgaGFuZGxlMlBhdGggPSBzdmcuYXJjKHRoaXMuY2lyY2xlWi5jeC5iYXNlVmFsLnZhbHVlLCB0aGlzLmNpcmNsZVouY3kuYmFzZVZhbC52YWx1ZSwgdGhpcy5jaXJjbGVaLnIuYmFzZVZhbC52YWx1ZSwgaGFuZGxlMlBvaW50cy5zdGFydCwgaGFuZGxlMlBvaW50cy5lbmQpO1xuXG4gICAgICB0aGlzLmJhclouc2V0QXR0cmlidXRlKCdkJywgaGFuZGxlUGF0aCk7XG4gICAgICB0aGlzLmJhcloyLnNldEF0dHJpYnV0ZSgnZCcsIGhhbmRsZTJQYXRoKTtcblxuXG4gICAgICAvKlxuXG4gICAgICBsZXQgcG9pbnRzWCA9IHtcbiAgICAgICAgc3RhcnQ6IDAsXG4gICAgICAgIGVuZDogbWF0aC5zY2FsZSggeCwgMCwgMSwgMCwgTWF0aC5QSSoyIClcbiAgICAgIH07XG5cbiAgICAvLyAgY29uc29sZS5sb2codGhpcy5jaXJjbGVYLmN4LmJhc2VWYWwudmFsdWUpO1xuXG4gICAgICBsZXQgcGF0aFggPSBzdmcuYXJjKHRoaXMuY2lyY2xlWC5jeC5iYXNlVmFsLnZhbHVlLCB0aGlzLmNpcmNsZVguY3kuYmFzZVZhbC52YWx1ZSwgdGhpcy5jaXJjbGVYLnIuYmFzZVZhbC52YWx1ZSoyLCBwb2ludHNYLnN0YXJ0LCBwb2ludHNYLmVuZCk7XG5cbiAgICAgIHRoaXMuYmFyWC5zZXRBdHRyaWJ1dGUoJ2QnLHBhdGhYKTsgKi9cblxuICAgICAgLy90aGlzLnRleHRILnRleHRDb250ZW50ID0gbWF0aC5wcnVuZSh4LDIpO1xuICAgICAgLy90aGlzLnRleHRWLnRleHRDb250ZW50ID0gbWF0aC5wcnVuZSh5LDIpO1xuICAgICAgLy9cbiAgICAvLyAgdGhpcy5jaXJjbGVYLnNldEF0dHJpYnV0ZSgnb3BhY2l0eScseCk7XG4gICAgLy8gIHRoaXMuY2lyY2xlWS5zZXRBdHRyaWJ1dGUoJ29wYWNpdHknLHkpO1xuICAgIC8vICB0aGlzLmNpcmNsZVouc2V0QXR0cmlidXRlKCdvcGFjaXR5Jyx6KTtcblxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnLCB7XG4gICAgICAgIHg6IHgsXG4gICAgICAgIHk6IHksXG4gICAgICAgIHo6IHpcbiAgICAgIH0pO1xuXG4gICAgfVxuXG4gIH1cblxuICBjbGljaygpIHtcbiAgICBpZiAod2luZG93LkRldmljZU9yaWVudGF0aW9uRXZlbnQpIHtcbiAgICAgIHRoaXMuYWN0aXZlID0gIXRoaXMuYWN0aXZlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICBXaGV0aGVyIHRoZSBpbnRlcmZhY2UgaXMgb24gKGVtaXR0aW5nIHZhbHVlcykgb3Igb2ZmIChwYXVzZWQgJiBub3QgZW1pdHRpbmcgdmFsdWVzKS4gU2V0dGluZyB0aGlzIHByb3BlcnR5IHdpbGwgdXBkYXRlIGl0LlxuICBAdHlwZSB7Ym9vbGVhbn1cbiAgKi9cblxuICBnZXQgYWN0aXZlKCkge1xuICAgIHJldHVybiB0aGlzLl9hY3RpdmU7XG4gIH1cblxuICBzZXQgYWN0aXZlKG9uKSB7XG4gICAgdGhpcy5fYWN0aXZlID0gb247XG4gICAgdGhpcy5jb2xvckludGVyZmFjZSgpO1xuICB9XG5cbiAgY3VzdG9tRGVzdHJveSgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignZGV2aWNlb3JpZW50YXRpb24nLCB0aGlzLmJvdW5kVXBkYXRlLCBmYWxzZSk7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9qc2hpbnQtbG9hZGVyIS4vbGliL2ludGVyZmFjZXMvdGlsdC5qcyIsIid1c2Ugc3RyaWN0JztcblxubGV0IGRvbSA9IHJlcXVpcmUoJy4uL3V0aWwvZG9tJyk7XG5sZXQgbWF0aCA9IHJlcXVpcmUoJy4uL3V0aWwvbWF0aCcpO1xubGV0IEludGVyZmFjZSA9IHJlcXVpcmUoJy4uL2NvcmUvaW50ZXJmYWNlJyk7XG5sZXQgU2xpZGVyVGVtcGxhdGUgPSByZXF1aXJlKCcuLi9jb21wb25lbnRzL3NsaWRlcnRlbXBsYXRlJyk7XG5sZXQgdG91Y2ggPSByZXF1aXJlKCcuLi91dGlsL3RvdWNoJyk7XG5cblxuXG5jbGFzcyBTaW5nbGVTbGlkZXIgZXh0ZW5kcyBTbGlkZXJUZW1wbGF0ZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICBsZXQgb3B0aW9ucyA9IFsnc2NhbGUnLCd2YWx1ZSddO1xuXG4gICAgbGV0IGRlZmF1bHRzID0ge1xuICAgICAgJ3NpemUnOiBbMTIwLDIwXSxcbiAgICAgICdvcmllbnRhdGlvbic6ICd2ZXJ0aWNhbCcsXG4gICAgICAnbW9kZSc6ICdhYnNvbHV0ZScsXG4gICAgICAnc2NhbGUnOiBbMCwxXSxcbiAgICAgICdzdGVwJzogMCxcbiAgICAgICd2YWx1ZSc6IDAsXG4gICAgICAnaGFzS25vYic6IHRydWVcbiAgICB9O1xuXG4gICAgc3VwZXIoYXJndW1lbnRzLG9wdGlvbnMsZGVmYXVsdHMpO1xuXG5cbiAgICAvKiBldmVudHMgKi9cblxuICAgIGlmICghdG91Y2guZXhpc3RzKSB7XG5cbiAgICAgIHRoaXMuY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMubXVsdGlzbGlkZXIuaW50ZXJhY3RpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLm11bHRpc2xpZGVyLmludGVycG9sYXRpb24gPSB7XG4gICAgICAgICAgaW5kZXg6IHRoaXMuaW5kZXgsXG4gICAgICAgICAgdmFsdWU6IHRoaXMudmFsdWVcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5kb3duKCk7XG4gICAgICAgIHRoaXMubXVsdGlzbGlkZXIudmFsdWVzW3RoaXMuaW5kZXhdID0gdGhpcy52YWx1ZTtcbiAgICAgIH07XG4gICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKGUpID0+IHtcbiAgICAgICAgaWYgKHRoaXMubXVsdGlzbGlkZXIuaW50ZXJhY3RpbmcpIHtcbiAgICAgICAgICBpZiAoIXRoaXMub2Zmc2V0KSB7XG4gICAgICAgICAgICB0aGlzLm9mZnNldCA9IGRvbS5maW5kUG9zaXRpb24odGhpcy5lbGVtZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5tb3VzZSA9IGRvbS5sb2NhdGVNb3VzZShlLHRoaXMub2Zmc2V0KTtcbiAgICAgICAgICB0aGlzLmRvd24oKTtcbiAgICAgICAgICB0aGlzLm11bHRpc2xpZGVyLnZhbHVlc1t0aGlzLmluZGV4XSA9IHRoaXMudmFsdWU7XG4gICAgICAgICAgaWYgKHRoaXMubXVsdGlzbGlkZXIuaW50ZXJwb2xhdGlvbikge1xuICAgICAgICAgICAgbGV0IGRpc3RhbmNlID0gTWF0aC5hYnModGhpcy5tdWx0aXNsaWRlci5pbnRlcnBvbGF0aW9uLmluZGV4LXRoaXMuaW5kZXgpO1xuICAgICAgICAgICAgaWYgKCBkaXN0YW5jZSA+IDEgKSB7XG4gICAgICAgICAgICAgIGxldCBsb3cgPSBNYXRoLm1pbih0aGlzLm11bHRpc2xpZGVyLmludGVycG9sYXRpb24uaW5kZXgsdGhpcy5pbmRleCk7XG4gICAgICAgICAgICAgIGxldCBoaWdoID0gTWF0aC5tYXgodGhpcy5tdWx0aXNsaWRlci5pbnRlcnBvbGF0aW9uLmluZGV4LHRoaXMuaW5kZXgpO1xuICAgICAgICAgICAgICBsZXQgbG93VmFsdWUgPSB0aGlzLm11bHRpc2xpZGVyLnNsaWRlcnNbbG93XS52YWx1ZTtcbiAgICAgICAgICAgICAgbGV0IGhpZ2hWYWx1ZSA9IHRoaXMubXVsdGlzbGlkZXIuc2xpZGVyc1toaWdoXS52YWx1ZTtcbiAgICAgICAgICAgICAgZm9yIChsZXQgaT1sb3c7aTxoaWdoO2krKykge1xuICAgICAgICAgICAgICAgIHRoaXMubXVsdGlzbGlkZXIuc2xpZGVyc1tpXS52YWx1ZSA9IG1hdGguaW50ZXJwKCAoaS1sb3cpL2Rpc3RhbmNlLCBsb3dWYWx1ZSwgaGlnaFZhbHVlICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLm11bHRpc2xpZGVyLmludGVycG9sYXRpb24gPSB7XG4gICAgICAgICAgICBpbmRleDogdGhpcy5pbmRleCxcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cblxuICAgICAgdGhpcy5tb3ZlID0gKCkgPT4ge1xuICAgICAgfTtcbiAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZSkgPT4ge1xuICAgICAgICBpZiAodGhpcy5tdWx0aXNsaWRlci5pbnRlcmFjdGluZykge1xuICAgICAgICAgIGlmICghdGhpcy5vZmZzZXQpIHtcbiAgICAgICAgICAgIHRoaXMub2Zmc2V0ID0gZG9tLmZpbmRQb3NpdGlvbih0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLm1vdXNlID0gZG9tLmxvY2F0ZU1vdXNlKGUsdGhpcy5vZmZzZXQpO1xuICAgICAgICAgIHRoaXMuc2xpZGUoKTtcbiAgICAgICAgICB0aGlzLm11bHRpc2xpZGVyLnZhbHVlc1t0aGlzLmluZGV4XSA9IHRoaXMudmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG5cbiAgICAgIHRoaXMucmVsZWFzZSA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5tdWx0aXNsaWRlci5pbnRlcmFjdGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLm11bHRpc2xpZGVyLmludGVycG9sYXRpb24gPSBmYWxzZTtcbiAgICAgIH07XG4gICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMubXVsdGlzbGlkZXIuaW50ZXJhY3RpbmcpIHtcbiAgICAgICAgICB0aGlzLnVwKCk7XG4gICAgICAgICAgdGhpcy5tdWx0aXNsaWRlci5pbnRlcnBvbGF0aW9uID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5tdWx0aXNsaWRlci52YWx1ZXNbdGhpcy5pbmRleF0gPSB0aGlzLnZhbHVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMubXVsdGlzbGlkZXIuaW50ZXJhY3RpbmcpIHtcbiAgICAgICAgICB0aGlzLnVwKCk7XG4gICAgICAgICAgdGhpcy5tdWx0aXNsaWRlci52YWx1ZXNbdGhpcy5pbmRleF0gPSB0aGlzLnZhbHVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgIH1cblxuICAgIHRoaXMuY3VzdG9tU3R5bGUoKTtcbiAgfVxuXG4gIGN1c3RvbVN0eWxlKCkge1xuXG4gICAgLyogc3R5bGUgY2hhbmdlcyAqL1xuXG4gICAgdGhpcy5iYXIuc2V0QXR0cmlidXRlKCd4JywwKTtcbiAgICB0aGlzLmJhci5zZXRBdHRyaWJ1dGUoJ3RyYW5zZm9ybScsJ3RyYW5zbGF0ZSgwLDApJyk7XG4gICAgdGhpcy5iYXIuc2V0QXR0cmlidXRlKCdyeCcsMCk7IC8vIGNvcm5lciByYWRpdXNcbiAgICB0aGlzLmJhci5zZXRBdHRyaWJ1dGUoJ3J5JywwKTtcbiAgICB0aGlzLmJhci5zZXRBdHRyaWJ1dGUoJ3dpZHRoJyx0aGlzLndpZHRoKTtcbiAgICB0aGlzLmJhci5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsdGhpcy5oZWlnaHQpO1xuXG4gICAgdGhpcy5maWxsYmFyLnNldEF0dHJpYnV0ZSgneCcsMCk7XG4gICAgdGhpcy5maWxsYmFyLnNldEF0dHJpYnV0ZSgndHJhbnNmb3JtJywndHJhbnNsYXRlKDAsMCknKTtcbiAgICB0aGlzLmZpbGxiYXIuc2V0QXR0cmlidXRlKCdyeCcsMCk7IC8vIGNvcm5lciByYWRpdXNcbiAgICB0aGlzLmZpbGxiYXIuc2V0QXR0cmlidXRlKCdyeScsMCk7XG4gICAgdGhpcy5maWxsYmFyLnNldEF0dHJpYnV0ZSgnd2lkdGgnLHRoaXMud2lkdGgpO1xuICAgIHRoaXMuZmlsbGJhci5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsdGhpcy5oZWlnaHQpO1xuXG4gIH1cblxufVxuXG4vKipcbiogTXVsdGlzbGlkZXJcbipcbiogQGRlc2NyaXB0aW9uIE11bHRpc2xpZGVyXG4qXG4qIEBkZW1vIDxzcGFuIG5leHVzLXVpPVwibXVsdGlzbGlkZXJcIj48L3NwYW4+XG4qXG4qIEBleGFtcGxlXG4qIHZhciBtdWx0aXNsaWRlciA9IG5ldyBOZXh1cy5NdWx0aXNsaWRlcignI3RhcmdldCcpXG4qXG4qIEBleGFtcGxlXG4qIHZhciBtdWx0aXNsaWRlciA9IG5ldyBOZXh1cy5NdWx0aXNsaWRlcignI3RhcmdldCcse1xuKiAgJ3NpemUnOiBbMjAwLDEwMF0sXG4qICAnbnVtYmVyT2ZTbGlkZXJzJzogNSxcbiogICdtaW4nOiAwLFxuKiAgJ21heCc6IDEsXG4qICAnc3RlcCc6IDAsXG4qICAndmFsdWVzJzogWzAuNywwLjcsMC43LDAuNywwLjddXG4qIH0pXG4qXG4qIEBvdXRwdXRcbiogY2hhbmdlXG4qIEZpcmVzIGFueSB0aW1lIHRoZSBpbnRlcmZhY2UncyB2YWx1ZSBjaGFuZ2VzLiA8YnI+XG4qIFRoZSBldmVudCBkYXRhIGFuIG9iamVjdCBjb250YWluaW5nIDxpPmluZGV4PC9pPiBhbmQgPGk+dmFsdWU8L2k+IHByb3BlcnRpZXNcbipcbiogQG91dHB1dGV4YW1wbGVcbiogbXVsdGlzbGlkZXIub24oJ2NoYW5nZScsZnVuY3Rpb24odikge1xuKiAgIGNvbnNvbGUubG9nKHYpO1xuKiB9KVxuKlxuKi9cblxuLypcblByb3BlcnRpZXNcbi52YWx1ZXNcblxuKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXVsdGlzbGlkZXIgZXh0ZW5kcyBJbnRlcmZhY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgbGV0IG9wdGlvbnMgPSBbJ3ZhbHVlJ107XG5cbiAgICBsZXQgZGVmYXVsdHMgPSB7XG4gICAgICAnc2l6ZSc6IFsyMDAsMTAwXSxcbiAgICAgICdudW1iZXJPZlNsaWRlcnMnOiA1LFxuICAgICAgJ21pbic6IDAsXG4gICAgICAnbWF4JzogMSxcbiAgICAgICdzdGVwJzogMCxcbiAgICAgICd2YWx1ZXMnOiBbMC43LDAuNywwLjcsMC43LDAuN11cbiAgICB9O1xuXG4gICAgc3VwZXIoYXJndW1lbnRzLG9wdGlvbnMsZGVmYXVsdHMpO1xuXG4gICAgdGhpcy5fbnVtYmVyT2ZTbGlkZXJzID0gdGhpcy5zZXR0aW5ncy5udW1iZXJPZlNsaWRlcnM7XG4gICAgdGhpcy52YWx1ZXMgPSB0aGlzLnNldHRpbmdzLnZhbHVlcztcblxuICAgIHRoaXMuc2xpZGVycyA9IFtdO1xuXG4gICAgdGhpcy5pbnRlcmFjdGluZyA9IGZhbHNlO1xuXG4gICAgdGhpcy5pbml0KCk7XG5cbiAgfVxuXG4gIGJ1aWxkRnJhbWUoKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5wYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgfVxuXG4gIGJ1aWxkSW50ZXJmYWNlKCkge1xuXG4gICAgbGV0IG1pbiA9IHRoaXMuc2V0dGluZ3MubWluO1xuICAgIGxldCBtYXggPSB0aGlzLnNldHRpbmdzLm1heDtcbiAgICBsZXQgc3RlcCA9IHRoaXMuc2V0dGluZ3Muc3RlcDtcblxuICAgIGlmICh0aGlzLnNsaWRlcnMubGVuZ3RoKSB7XG4gICAgICBtaW4gPSB0aGlzLnNsaWRlcnNbMF0ubWluO1xuICAgICAgbWF4ID0gdGhpcy5zbGlkZXJzWzBdLm1heDtcbiAgICAgIHN0ZXAgPSB0aGlzLnNsaWRlcnNbMF0uc3RlcDtcbiAgICB9XG5cbiAgICB0aGlzLnNsaWRlcnMgPSBbXTtcblxuICAgIGZvciAobGV0IGk9MDtpPHRoaXMuX251bWJlck9mU2xpZGVycztpKyspIHtcbiAgICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cbiAgICAgIGxldCBzbGlkZXIgPSBuZXcgU2luZ2xlU2xpZGVyKGNvbnRhaW5lciwge1xuICAgICAgICAgIHNjYWxlOiBbbWluLG1heF0sXG4gICAgICAgICAgc3RlcDogc3RlcCxcbiAgICAgICAgICBtb2RlOiAnYWJzb2x1dGUnLFxuICAgICAgICAgIG9yaWVudGF0aW9uOiAndmVydGljYWwnLFxuICAgICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlc1tpXSxcbiAgICAgICAgICBoYXNLbm9iOiBmYWxzZSxcbiAgICAgICAgICBjb21wb25lbnQ6IHRydWUsXG4gICAgICAgIH0sdGhpcy51cGRhdGUuYmluZCh0aGlzLGkpKTtcbiAgICAgIHNsaWRlci5tdWx0aXNsaWRlciA9IHRoaXM7XG5cbiAgICAgIHNsaWRlci5pbmRleCA9IGk7XG4gICAgICBpZiAodG91Y2guZXhpc3RzKSB7XG4gICAgICAgIHNsaWRlci5iYXIuaW5kZXggPSBpO1xuICAgICAgICBzbGlkZXIuZmlsbGJhci5pbmRleCA9IGk7XG4gICAgICAgIHNsaWRlci5wcmVDbGljayA9IHNsaWRlci5wcmVNb3ZlID0gc2xpZGVyLnByZVJlbGVhc2UgPSAoKSA9PiB7fTtcbiAgICAgICAgc2xpZGVyLmNsaWNrID0gc2xpZGVyLm1vdmUgPSBzbGlkZXIucmVsZWFzZSA9ICgpID0+IHt9O1xuICAgICAgICBzbGlkZXIucHJlVG91Y2ggPSBzbGlkZXIucHJlVG91Y2hNb3ZlID0gc2xpZGVyLnByZVRvdWNoUmVsZWFzZSA9ICgpID0+IHt9O1xuICAgICAgICBzbGlkZXIudG91Y2ggPSBzbGlkZXIudG91Y2hNb3ZlID0gc2xpZGVyLnRvdWNoUmVsZWFzZSA9ICgpID0+IHt9O1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNsaWRlcnMucHVzaChzbGlkZXIpO1xuICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgICB9XG4gICAgaWYgKHRvdWNoLmV4aXN0cykge1xuICAgICAgdGhpcy5hZGRUb3VjaExpc3RlbmVycygpO1xuICAgIH1cbiAgICBcbiAgfVxuXG4gIGNvbG9ySW50ZXJmYWNlKCkge1xuICAgIGZvciAobGV0IGk9MDtpPHRoaXMuc2xpZGVycy5sZW5ndGg7aSsrKSB7XG4gICAgICB0aGlzLnNsaWRlcnNbaV0uY29sb3JzID0gdGhpcy5jb2xvcnM7XG4gICAgICB0aGlzLnNsaWRlcnNbaV0uY29sb3JJbnRlcmZhY2UoKTtcbiAgICB9XG4gIH1cblxuICBzaXplSW50ZXJmYWNlKCkge1xuXG4gICAgbGV0IHNsaWRlcldpZHRoID0gdGhpcy53aWR0aCAvIHRoaXMuc2xpZGVycy5sZW5ndGg7XG4gICAgbGV0IHNsaWRlckhlaWdodCA9IHRoaXMuaGVpZ2h0O1xuXG4gICAgZm9yIChsZXQgaT0wO2k8dGhpcy5zbGlkZXJzLmxlbmd0aDtpKyspIHtcbiAgICAgIHRoaXMuc2xpZGVyc1tpXS5yZXNpemUoc2xpZGVyV2lkdGgsc2xpZGVySGVpZ2h0KTtcbiAgICAgIHRoaXMuc2xpZGVyc1tpXS5jdXN0b21TdHlsZSgpO1xuICAgIH1cblxuXG4gIH1cblxuICB1cGRhdGUoaW5kZXgsdmFsdWUpIHtcbiAgICB0aGlzLmVtaXQoJ2NoYW5nZScse1xuICAgICAgJ2luZGV4JzogaW5kZXgsXG4gICAgICAndmFsdWUnOiB2YWx1ZVxuICAgIH0pO1xuICB9XG5cbiAgYWRkVG91Y2hMaXN0ZW5lcnMoKSB7XG5cbiAgICB0aGlzLnByZUNsaWNrID0gdGhpcy5wcmVNb3ZlID0gdGhpcy5wcmVSZWxlYXNlID0gKCkgPT4ge307XG4gICAgdGhpcy5jbGljayA9IHRoaXMubW92ZSA9IHRoaXMucmVsZWFzZSA9ICgpID0+IHt9O1xuICAgIHRoaXMucHJlVG91Y2ggPSB0aGlzLnByZVRvdWNoTW92ZSA9IHRoaXMucHJlVG91Y2hSZWxlYXNlID0gKCkgPT4ge307XG4gICAgdGhpcy50b3VjaCA9IHRoaXMudG91Y2hNb3ZlID0gdGhpcy50b3VjaFJlbGVhc2UgPSAoKSA9PiB7fTtcblxuICAgIHRoaXMuY3VycmVudEVsZW1lbnQgPSBmYWxzZTtcblxuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKGUpID0+IHtcbiAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludChlLnRhcmdldFRvdWNoZXNbMF0uY2xpZW50WCxlLnRhcmdldFRvdWNoZXNbMF0uY2xpZW50WSk7XG4gICAgICBsZXQgc2xpZGVyID0gdGhpcy5zbGlkZXJzW2VsZW1lbnQuaW5kZXhdO1xuICAgICAgaWYgKCFzbGlkZXIub2Zmc2V0KSB7XG4gICAgICAgIHNsaWRlci5vZmZzZXQgPSBkb20uZmluZFBvc2l0aW9uKHNsaWRlci5lbGVtZW50KTtcbiAgICAgIH1cbiAgICAgIHNsaWRlci5tb3VzZSA9IGRvbS5sb2NhdGVNb3VzZShlLHNsaWRlci5vZmZzZXQpO1xuICAgICAgc2xpZGVyLmRvd24oKTtcbiAgICAgIHRoaXMuY3VycmVudEVsZW1lbnQgPSBlbGVtZW50LmluZGV4O1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9KTtcblxuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCAoZSkgPT4ge1xuICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KGUudGFyZ2V0VG91Y2hlc1swXS5jbGllbnRYLGUudGFyZ2V0VG91Y2hlc1swXS5jbGllbnRZKTtcbiAgICAgIGxldCBzbGlkZXIgPSB0aGlzLnNsaWRlcnNbZWxlbWVudC5pbmRleF07XG4gICAgICBpZiAoIXNsaWRlci5vZmZzZXQpIHtcbiAgICAgICAgc2xpZGVyLm9mZnNldCA9IGRvbS5maW5kUG9zaXRpb24oc2xpZGVyLmVsZW1lbnQpO1xuICAgICAgfVxuICAgICAgc2xpZGVyLm1vdXNlID0gZG9tLmxvY2F0ZU1vdXNlKGUsc2xpZGVyLm9mZnNldCk7XG4gICAgICBpZiAoZWxlbWVudC5pbmRleCE9PXRoaXMuY3VycmVudEVsZW1lbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudEVsZW1lbnQgPj0gMCkge1xuICAgICAgICAgIGxldCBwYXN0c2xpZGVyID0gdGhpcy5zbGlkZXJzW3RoaXMuY3VycmVudEVsZW1lbnRdO1xuICAgICAgICAgIHBhc3RzbGlkZXIudXAoKTtcbiAgICAgICAgfVxuICAgICAgICBzbGlkZXIuZG93bigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2xpZGVyLnNsaWRlKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmN1cnJlbnRFbGVtZW50ID0gZWxlbWVudC5pbmRleDtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCAoZSkgPT4ge1xuICAgICAgLy8gbm8gdG91Y2hlcyB0byBjYWxjdWxhdGUgYmVjYXVzZSBub25lIHJlbWFpbmluZ1xuICAgICAgbGV0IHNsaWRlciA9IHRoaXMuc2xpZGVyc1t0aGlzLmN1cnJlbnRFbGVtZW50XTtcbiAgICAgIHNsaWRlci51cCgpO1xuICAgICAgdGhpcy5pbnRlcmFjdGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5jdXJyZW50RWxlbWVudCA9IGZhbHNlO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9KTtcblxuICB9XG5cbiAgLyoqXG4gIEdldCBvciBzZXQgdGhlIG51bWJlciBvZiBzbGlkZXJzXG4gIEB0eXBlIHtOdW1iZXJ9XG4gICovXG4gIGdldCBudW1iZXJPZlNsaWRlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2xpZGVycy5sZW5ndGg7XG4gIH1cblxuICBzZXQgbnVtYmVyT2ZTbGlkZXJzKHYpIHtcbiAgICBpZiAodj09PXRoaXMuc2xpZGVycy5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zbGlkZXJzLmZvckVhY2goKHNsaWRlcik9PntcbiAgICAgIHNsaWRlci5kZXN0cm95KCk7XG4gICAgfSk7XG4gICAgdGhpcy5lbXB0eSgpO1xuICAgIHRoaXMuX251bWJlck9mU2xpZGVycyA9IHY7XG4gICAgdGhpcy5idWlsZEludGVyZmFjZSgpO1xuICB9XG5cblxuXG4gIC8qKlxuICBMb3dlciBsaW1pdCBvZiB0aGUgbXVsdGlzbGlkZXIncyBvdXRwdXQgcmFuZ2VcbiAgQHR5cGUge251bWJlcn1cbiAgQGV4YW1wbGUgbXVsdGlzbGlkZXIubWluID0gMTAwMDtcbiAgKi9cbiAgZ2V0IG1pbigpIHtcbiAgICByZXR1cm4gdGhpcy5zbGlkZXJzWzBdLm1pbjtcbiAgfVxuICBzZXQgbWluKHYpIHtcbiAgICB0aGlzLnNsaWRlcnMuZm9yRWFjaCgoc2xpZGVyKT0+e1xuICAgICAgc2xpZGVyLm1pbiA9IHY7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgVXBwZXIgbGltaXQgb2YgdGhlIG11bHRpc2xpZGVyJ3Mgb3V0cHV0IHJhbmdlXG4gIEB0eXBlIHtudW1iZXJ9XG4gIEBleGFtcGxlIG11bHRpc2xpZGVyLm1heCA9IDEwMDA7XG4gICovXG4gIGdldCBtYXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2xpZGVyc1swXS5tYXg7XG4gIH1cbiAgc2V0IG1heCh2KSB7XG4gICAgdGhpcy5zbGlkZXJzLmZvckVhY2goKHNsaWRlcik9PntcbiAgICAgIHNsaWRlci5tYXggPSB2O1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gIFRoZSBpbmNyZW1lbnQgdGhhdCB0aGUgbXVsdGlzbGlkZXIncyB2YWx1ZSBjaGFuZ2VzIGJ5LlxuICBAdHlwZSB7bnVtYmVyfVxuICBAZXhhbXBsZSBtdWx0aXNsaWRlci5zdGVwID0gNTtcbiAgKi9cbiAgZ2V0IHN0ZXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2xpZGVyc1swXS5zdGVwO1xuICB9XG4gIHNldCBzdGVwKHYpIHtcbiAgICB0aGlzLnNsaWRlcnMuZm9yRWFjaCgoc2xpZGVyKT0+e1xuICAgICAgc2xpZGVyLnN0ZXAgPSB2O1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gIFNldCB0aGUgdmFsdWUgb2YgYW4gaW5kaXZpZHVhbCBzbGlkZXJcbiAgQHBhcmFtIGluZGV4IHtudW1iZXJ9IFNsaWRlciBpbmRleFxuICBAcGFyYW0gdmFsdWUge251bWJlcn0gTmV3IHNsaWRlciB2YWx1ZVxuICBAZXhhbXBsZVxuICAvLyBTZXQgdGhlIGZpcnN0IHNsaWRlciB0byB2YWx1ZSAwLjVcbiAgbXVsdGlzbGlkZXIuc2V0U2xpZGVyKDAsMC41KVxuICAqL1xuICBzZXRTbGlkZXIoaW5kZXgsdmFsdWUpIHtcbiAgICB0aGlzLnNsaWRlcnNbaW5kZXhdLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5lbWl0KCdjaGFuZ2UnLHtcbiAgICAgICdpbmRleCc6IGluZGV4LFxuICAgICAgJ3ZhbHVlJzogdmFsdWVcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICBTZXQgdGhlIHZhbHVlIG9mIGFsbCBzbGlkZXJzIGF0IG9uY2UuIElmIHRoZSBzaXplIG9mIHRoZSBpbnB1dCBhcnJheSBkb2VzIG5vdCBtYXRjaCB0aGUgY3VycmVudCBudW1iZXIgb2Ygc2xpZGVycywgdGhlIHZhbHVlIGFycmF5IHdpbGwgcmVwZWF0IHVudGlsIGFsbCBzbGlkZXJzIGhhdmUgYmVlbiBzZXQuIEkuZS4gYW4gaW5wdXQgYXJyYXkgb2YgbGVuZ3RoIDEgd2lsbCBzZXQgYWxsIHNsaWRlcnMgdG8gdGhhdCB2YWx1ZS5cbiAgQHBhcmFtIHZhbHVlcyB7QXJyYXl9IEFsbCBzbGlkZXIgdmFsdWVzXG4gIEBleGFtcGxlXG4gIG11bHRpc2xpZGVyLnNldEFsbFNsaWRlcnMoWzAuMiwwLjMsMC40LDAuNSwwLjZdKVxuICAqL1xuICBzZXRBbGxTbGlkZXJzKHZhbHVlcykge1xuICAgIHRoaXMudmFsdWVzID0gdmFsdWVzO1xuICAgIHRoaXMuc2xpZGVycy5mb3JFYWNoKChzbGlkZXIsaSk9PntcbiAgICAgIHNsaWRlci52YWx1ZSA9IHZhbHVlc1tpJXZhbHVlcy5sZW5ndGhdO1xuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnLHtcbiAgICAgICAgJ2luZGV4JzogaSxcbiAgICAgICAgJ3ZhbHVlJzogc2xpZGVyLnZhbHVlXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2pzaGludC1sb2FkZXIhLi9saWIvaW50ZXJmYWNlcy9tdWx0aXNsaWRlci5qcyIsIid1c2Ugc3RyaWN0JztcblxubGV0IHN2ZyA9IHJlcXVpcmUoJy4uL3V0aWwvc3ZnJyk7XG5sZXQgSW50ZXJmYWNlID0gcmVxdWlyZSgnLi4vY29yZS9pbnRlcmZhY2UnKTtcbmxldCBTdGVwID0gcmVxdWlyZSgnLi4vbW9kZWxzL3N0ZXAnKTtcbmltcG9ydCAqIGFzIEludGVyYWN0aW9uIGZyb20gJy4uL3V0aWwvaW50ZXJhY3Rpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbGlkZXJUZW1wbGF0ZSBleHRlbmRzIEludGVyZmFjZSB7XG5cbiAgY29uc3RydWN0b3IoYXJncyxvcHRpb25zLGRlZmF1bHRzKSB7XG5cbiAgICBzdXBlcihhcmdzLG9wdGlvbnMsZGVmYXVsdHMpO1xuXG4gICAgdGhpcy5vcmllbnRhdGlvbiA9IHRoaXMuc2V0dGluZ3Mub3JpZW50YXRpb247XG5cbiAgLy8gIHRoaXMubW9kZSA9IHRoaXMuc2V0dGluZ3MubW9kZTtcblxuICAgIHRoaXMuaGFzS25vYiA9IHRoaXMuc2V0dGluZ3MuaGFzS25vYjtcblxuICAgIC8vIHRoaXMuc3RlcCBzaG91bGQgZXZlbnR1YWxseSBiZSBnZXQvc2V0XG4gICAgLy8gdXBkYXRpbmcgaXQgd2lsbCB1cGRhdGUgdGhlIF92YWx1ZSBzdGVwIG1vZGVsXG4gIC8vICB0aGlzLnN0ZXAgPSB0aGlzLnNldHRpbmdzLnN0ZXA7IC8vIGZsb2F0XG5cbiAgICB0aGlzLl92YWx1ZSA9IG5ldyBTdGVwKHRoaXMuc2V0dGluZ3Muc2NhbGVbMF0sIHRoaXMuc2V0dGluZ3Muc2NhbGVbMV0sIHRoaXMuc2V0dGluZ3Muc3RlcCwgdGhpcy5zZXR0aW5ncy52YWx1ZSk7XG5cbiAgICB0aGlzLmluaXQoKTtcblxuICAgIHRoaXMucG9zaXRpb24gPSBuZXcgSW50ZXJhY3Rpb24uSGFuZGxlKHRoaXMuc2V0dGluZ3MubW9kZSx0aGlzLm9yaWVudGF0aW9uLFswLHRoaXMud2lkdGhdLFt0aGlzLmhlaWdodCwwXSk7XG4gICAgdGhpcy5wb3NpdGlvbi52YWx1ZSA9IHRoaXMuX3ZhbHVlLm5vcm1hbGl6ZWQ7XG5cbiAgICB0aGlzLnZhbHVlID0gdGhpcy5fdmFsdWUudmFsdWU7XG5cbiAgICB0aGlzLmVtaXQoJ2NoYW5nZScsdGhpcy52YWx1ZSk7XG5cbiAgfVxuXG4gIGJ1aWxkSW50ZXJmYWNlKCkge1xuXG4gICAgdGhpcy5iYXIgPSBzdmcuY3JlYXRlKCdyZWN0Jyk7XG4gICAgdGhpcy5maWxsYmFyID0gc3ZnLmNyZWF0ZSgncmVjdCcpO1xuICAgIHRoaXMua25vYiA9IHN2Zy5jcmVhdGUoJ2NpcmNsZScpO1xuXG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuYmFyKTtcbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5maWxsYmFyKTtcbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5rbm9iKTtcblxuICAgIHRoaXMuc2l6ZUludGVyZmFjZSgpO1xuXG5cblxuICB9XG5cbiAgc2l6ZUludGVyZmFjZSgpIHtcblxuXG4gICAgaWYgKCF0aGlzLnNldHRpbmdzLm9yaWVudGF0aW9uKSB7XG4gICAgICBpZiAodGhpcy53aWR0aCA8IHRoaXMuaGVpZ2h0KSB7XG4gICAgICAgIHRoaXMub3JpZW50YXRpb24gPSAndmVydGljYWwnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5vcmllbnRhdGlvbiA9ICdob3Jpem9udGFsJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgeCwgeSwgdywgaCwgYmFyT2Zmc2V0LCBjb3JuZXJSYWRpdXM7XG4gICAgdGhpcy5rbm9iRGF0YSA9IHtcbiAgICAgIGxldmVsOiAwLFxuICAgICAgcjogMFxuICAgIH07XG5cbiAgICBpZiAodGhpcy5vcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgdGhpcy50aGlja25lc3MgPSB0aGlzLndpZHRoIC8gMjtcbiAgICBcdHggPSB0aGlzLndpZHRoLzI7XG4gICAgXHR5ID0gMDtcbiAgICBcdHcgPSB0aGlzLnRoaWNrbmVzcztcbiAgICBcdGggPSB0aGlzLmhlaWdodDtcbiAgICAgIHRoaXMua25vYkRhdGEuciA9IHRoaXMudGhpY2tuZXNzICogMC44O1xuICAgIFx0dGhpcy5rbm9iRGF0YS5sZXZlbCA9IGgtdGhpcy5ub3JtYWxpemVkKmg7XG4gICAgICBiYXJPZmZzZXQgPSAndHJhbnNsYXRlKCcrdGhpcy50aGlja25lc3MqKC0xKS8yKycsMCknO1xuICAgICAgY29ybmVyUmFkaXVzID0gdy8yO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRoaWNrbmVzcyA9IHRoaXMuaGVpZ2h0IC8gMjtcbiAgICBcdHggPSAwO1xuICAgIFx0eSA9IHRoaXMuaGVpZ2h0LzI7XG4gICAgXHR3ID0gdGhpcy53aWR0aDtcbiAgICBcdGggPSB0aGlzLnRoaWNrbmVzcztcbiAgICAgIHRoaXMua25vYkRhdGEuciA9IHRoaXMudGhpY2tuZXNzICogMC44O1xuICAgIFx0dGhpcy5rbm9iRGF0YS5sZXZlbCA9IHRoaXMubm9ybWFsaXplZCp3O1xuICAgICAgYmFyT2Zmc2V0ID0gJ3RyYW5zbGF0ZSgwLCcrdGhpcy50aGlja25lc3MqKC0xKS8yKycpJztcbiAgICAgIGNvcm5lclJhZGl1cyA9IGgvMjtcbiAgICB9XG5cbiAgICB0aGlzLmJhci5zZXRBdHRyaWJ1dGUoJ3gnLHgpO1xuICAgIHRoaXMuYmFyLnNldEF0dHJpYnV0ZSgneScseSk7XG4gICAgdGhpcy5iYXIuc2V0QXR0cmlidXRlKCd0cmFuc2Zvcm0nLGJhck9mZnNldCk7XG4gICAgdGhpcy5iYXIuc2V0QXR0cmlidXRlKCdyeCcsY29ybmVyUmFkaXVzKTsgLy8gY29ybmVyIHJhZGl1c1xuICAgIHRoaXMuYmFyLnNldEF0dHJpYnV0ZSgncnknLGNvcm5lclJhZGl1cyk7XG4gICAgdGhpcy5iYXIuc2V0QXR0cmlidXRlKCd3aWR0aCcsdyk7XG4gICAgdGhpcy5iYXIuc2V0QXR0cmlidXRlKCdoZWlnaHQnLGgpO1xuXG4gICAgaWYgKHRoaXMub3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIHRoaXMuZmlsbGJhci5zZXRBdHRyaWJ1dGUoJ3gnLHgpO1xuICAgICAgdGhpcy5maWxsYmFyLnNldEF0dHJpYnV0ZSgneScsdGhpcy5rbm9iRGF0YS5sZXZlbCk7XG4gICAgICB0aGlzLmZpbGxiYXIuc2V0QXR0cmlidXRlKCd3aWR0aCcsdyk7XG4gICAgICB0aGlzLmZpbGxiYXIuc2V0QXR0cmlidXRlKCdoZWlnaHQnLGgtdGhpcy5rbm9iRGF0YS5sZXZlbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZmlsbGJhci5zZXRBdHRyaWJ1dGUoJ3gnLDApO1xuICAgICAgdGhpcy5maWxsYmFyLnNldEF0dHJpYnV0ZSgneScseSk7XG4gICAgICB0aGlzLmZpbGxiYXIuc2V0QXR0cmlidXRlKCd3aWR0aCcsdGhpcy5rbm9iRGF0YS5sZXZlbCk7XG4gICAgICB0aGlzLmZpbGxiYXIuc2V0QXR0cmlidXRlKCdoZWlnaHQnLGgpO1xuICAgIH1cbiAgICB0aGlzLmZpbGxiYXIuc2V0QXR0cmlidXRlKCd0cmFuc2Zvcm0nLGJhck9mZnNldCk7XG4gICAgdGhpcy5maWxsYmFyLnNldEF0dHJpYnV0ZSgncngnLGNvcm5lclJhZGl1cyk7XG4gICAgdGhpcy5maWxsYmFyLnNldEF0dHJpYnV0ZSgncnknLGNvcm5lclJhZGl1cyk7XG5cbiAgICBpZiAodGhpcy5vcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgdGhpcy5rbm9iLnNldEF0dHJpYnV0ZSgnY3gnLHgpO1xuICAgICAgdGhpcy5rbm9iLnNldEF0dHJpYnV0ZSgnY3knLHRoaXMua25vYkRhdGEubGV2ZWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmtub2Iuc2V0QXR0cmlidXRlKCdjeCcsdGhpcy5rbm9iRGF0YS5sZXZlbCk7XG4gICAgICB0aGlzLmtub2Iuc2V0QXR0cmlidXRlKCdjeScseSk7XG4gICAgfVxuICAgIHRoaXMua25vYi5zZXRBdHRyaWJ1dGUoJ3InLHRoaXMua25vYkRhdGEucik7XG5cblxuICAgIGlmICh0aGlzLnBvc2l0aW9uKSB7XG4gICAgICB0aGlzLnBvc2l0aW9uLnJlc2l6ZShbMCx0aGlzLndpZHRoXSxbdGhpcy5oZWlnaHQsMF0pO1xuICAgIH1cblxuICB9XG5cbiAgY29sb3JJbnRlcmZhY2UoKSB7XG5cbiAgICB0aGlzLmJhci5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCB0aGlzLmNvbG9ycy5maWxsKTtcbiAgICB0aGlzLmZpbGxiYXIuc2V0QXR0cmlidXRlKCdmaWxsJywgdGhpcy5jb2xvcnMuYWNjZW50KTtcbiAgICB0aGlzLmtub2Iuc2V0QXR0cmlidXRlKCdmaWxsJywgdGhpcy5jb2xvcnMuYWNjZW50KTtcbiAgICBpZiAoIXRoaXMuaGFzS25vYikge1xuICAgICAgdGhpcy5rbm9iLnNldEF0dHJpYnV0ZSgnZmlsbCcsJ25vbmUnKTtcbiAgICB9XG5cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBpZiAoIXRoaXMuY2xpY2tlZCkge1xuICAgICAgdGhpcy5rbm9iRGF0YS5yID0gdGhpcy50aGlja25lc3MqMC43NTtcbiAgICB9XG4gICAgdGhpcy5rbm9iLnNldEF0dHJpYnV0ZSgncicsdGhpcy5rbm9iRGF0YS5yKTtcblxuICAgIGlmICh0aGlzLm9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICAgdGhpcy5rbm9iRGF0YS5sZXZlbCA9IHRoaXMuX3ZhbHVlLm5vcm1hbGl6ZWQqdGhpcy5oZWlnaHQ7XG4gICAgICAgdGhpcy5rbm9iLnNldEF0dHJpYnV0ZSgnY3knLHRoaXMuaGVpZ2h0IC0gdGhpcy5rbm9iRGF0YS5sZXZlbCk7XG4gICAgICAgdGhpcy5maWxsYmFyLnNldEF0dHJpYnV0ZSgneScsdGhpcy5oZWlnaHQgLSB0aGlzLmtub2JEYXRhLmxldmVsKTtcbiAgICAgICB0aGlzLmZpbGxiYXIuc2V0QXR0cmlidXRlKCdoZWlnaHQnLHRoaXMua25vYkRhdGEubGV2ZWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgdGhpcy5rbm9iRGF0YS5sZXZlbCA9IHRoaXMuX3ZhbHVlLm5vcm1hbGl6ZWQqdGhpcy53aWR0aDtcbiAgICAgICB0aGlzLmtub2Iuc2V0QXR0cmlidXRlKCdjeCcsdGhpcy5rbm9iRGF0YS5sZXZlbCk7XG4gICAgICAgdGhpcy5maWxsYmFyLnNldEF0dHJpYnV0ZSgneCcsMCk7XG4gICAgICAgdGhpcy5maWxsYmFyLnNldEF0dHJpYnV0ZSgnd2lkdGgnLHRoaXMua25vYkRhdGEubGV2ZWwpO1xuICAgIH1cbiAgfVxuXG4gIGRvd24oKSB7XG4gICAgdGhpcy5jbGlja2VkID0gdHJ1ZTtcbiAgICB0aGlzLmtub2JEYXRhLnIgPSB0aGlzLnRoaWNrbmVzcyowLjk7XG4gICAgdGhpcy5wb3NpdGlvbi5hbmNob3IgPSB0aGlzLm1vdXNlO1xuICAgIHRoaXMuc2xpZGUoKTtcbiAgfVxuXG4gIHNsaWRlKCkge1xuICAgIGlmICh0aGlzLmNsaWNrZWQpIHtcbiAgICAgIHRoaXMucG9zaXRpb24udXBkYXRlKHRoaXMubW91c2UpO1xuICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuX3ZhbHVlLnVwZGF0ZU5vcm1hbCggdGhpcy5wb3NpdGlvbi52YWx1ZSApO1xuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnLHRoaXMudmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHVwKCkge1xuICAgIHRoaXMuY2xpY2tlZCA9IGZhbHNlO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBnZXQgbm9ybWFsaXplZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWUubm9ybWFsaXplZDtcbiAgfVxuXG4gIC8qKlxuICBUaGUgc2xpZGVyJ3MgY3VycmVudCB2YWx1ZS4gSWYgc2V0IG1hbnVhbGx5LCB3aWxsIHVwZGF0ZSB0aGUgaW50ZXJmYWNlIGFuZCB0cmlnZ2VyIHRoZSBvdXRwdXQgZXZlbnQuXG4gIEB0eXBlIHtudW1iZXJ9XG4gIEBleGFtcGxlIHNsaWRlci52YWx1ZSA9IDEwO1xuICAqL1xuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlLnZhbHVlO1xuICB9XG4gIHNldCB2YWx1ZSh2KSB7XG4gICAgdGhpcy5fdmFsdWUudXBkYXRlKHYpO1xuICAgIHRoaXMucG9zaXRpb24udmFsdWUgPSB0aGlzLl92YWx1ZS5ub3JtYWxpemVkO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICAvKipcbiAgTG93ZXIgbGltaXQgb2YgdGhlIHNsaWRlcnMncyBvdXRwdXQgcmFuZ2VcbiAgQHR5cGUge251bWJlcn1cbiAgQGV4YW1wbGUgc2xpZGVyLm1pbiA9IDEwMDA7XG4gICovXG4gIGdldCBtaW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlLm1pbjtcbiAgfVxuICBzZXQgbWluKHYpIHtcbiAgICB0aGlzLl92YWx1ZS5taW4gPSB2O1xuICB9XG5cbiAgLyoqXG4gIFVwcGVyIGxpbWl0IG9mIHRoZSBzbGlkZXIncyBvdXRwdXQgcmFuZ2VcbiAgQHR5cGUge251bWJlcn1cbiAgQGV4YW1wbGUgc2xpZGVyLm1heCA9IDEwMDA7XG4gICovXG4gIGdldCBtYXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlLm1heDtcbiAgfVxuICBzZXQgbWF4KHYpIHtcbiAgICB0aGlzLl92YWx1ZS5tYXggPSB2O1xuICB9XG5cbiAgLyoqXG4gIFRoZSBpbmNyZW1lbnQgdGhhdCB0aGUgc2xpZGVyJ3MgdmFsdWUgY2hhbmdlcyBieS5cbiAgQHR5cGUge251bWJlcn1cbiAgQGV4YW1wbGUgc2xpZGVyLnN0ZXAgPSA1O1xuICAqL1xuICBnZXQgc3RlcCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWUuc3RlcDtcbiAgfVxuICBzZXQgc3RlcCh2KSB7XG4gICAgdGhpcy5fdmFsdWUuc3RlcCA9IHY7XG4gIH1cblxuICAvKipcbiAgQWJzb2x1dGUgbW9kZSAoc2xpZGVyJ3MgdmFsdWUganVtcHMgdG8gbW91c2UgY2xpY2sgcG9zaXRpb24pIG9yIHJlbGF0aXZlIG1vZGUgKG1vdXNlIGRyYWcgY2hhbmdlcyB2YWx1ZSByZWxhdGl2ZSB0byBpdHMgY3VycmVudCBwb3NpdGlvbikuIERlZmF1bHQ6IFwicmVsYXRpdmVcIi5cbiAgQHR5cGUge3N0cmluZ31cbiAgQGV4YW1wbGUgc2xpZGVyLm1vZGUgPSBcInJlbGF0aXZlXCI7XG4gICovXG4gIGdldCBtb2RlKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLm1vZGU7XG4gIH1cbiAgc2V0IG1vZGUodikge1xuICAgIHRoaXMucG9zaXRpb24ubW9kZSA9IHY7XG4gIH1cblxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2pzaGludC1sb2FkZXIhLi9saWIvY29tcG9uZW50cy9zbGlkZXJ0ZW1wbGF0ZS5qcyIsIid1c2Ugc3RyaWN0JztcblxubGV0IHN2ZyA9IHJlcXVpcmUoJy4uL3V0aWwvc3ZnJyk7XG5sZXQgbWF0aCA9IHJlcXVpcmUoJy4uL3V0aWwvbWF0aCcpO1xubGV0IEludGVyZmFjZSA9IHJlcXVpcmUoJy4uL2NvcmUvaW50ZXJmYWNlJyk7XG5sZXQgU3RlcCA9IHJlcXVpcmUoJy4uL21vZGVscy9zdGVwJyk7XG5pbXBvcnQgKiBhcyBJbnRlcmFjdGlvbiBmcm9tICcuLi91dGlsL2ludGVyYWN0aW9uJztcblxuLyoqXG4qIFBhblxuKlxuKiBAZGVzY3JpcHRpb24gU3RlcmVvIGNyb3NzZmFkZXIuXG4qXG4qIEBkZW1vIDxzcGFuIG5leHVzLXVpPVwicGFuXCI+PC9zcGFuPlxuKlxuKiBAZXhhbXBsZVxuKiB2YXIgcGFuID0gbmV3IE5leHVzLlBhbignI3RhcmdldCcpXG4qXG4qIEBvdXRwdXRcbiogY2hhbmdlXG4qIEZpcmVzIGFueSB0aW1lIHRoZSBpbnRlcmZhY2UncyB2YWx1ZSBjaGFuZ2VzLiA8YnI+XG4qIFRoZSBldmVudCBkYXRhIGlzIGFuIG9iamVjdCBjb250YWluaW5nIHRoZSBpbnRlcmZhY2UncyA8aT52YWx1ZTwvaT4gKC0xIHRvIDEpLCBhcyB3ZWxsIGFzIDxpPkw8L2k+IGFuZCA8aT5SPC9pPiBhbXBsaXR1ZGUgdmFsdWVzICgwLTEpIGZvciBsZWZ0IGFuZCByaWdodCBzcGVha2VycywgY2FsY3VsYXRlZCBieSBhIHNxdWFyZS1yb290IGNyb3NzZmFkZSBhbGdvcml0aG0uXG4qXG4qIEBvdXRwdXRleGFtcGxlXG4qIHBhbi5vbignY2hhbmdlJyxmdW5jdGlvbih2KSB7XG4qICAgY29uc29sZS5sb2codik7XG4qIH0pXG4qXG4qXG4qL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYW4gZXh0ZW5kcyBJbnRlcmZhY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgbGV0IG9wdGlvbnMgPSBbJ3NjYWxlJywndmFsdWUnXTtcblxuICAgIGxldCBkZWZhdWx0cyA9IHtcbiAgICAgICdzaXplJzogWzEyMCwyMF0sXG4gICAgICAnb3JpZW50YXRpb24nOiAnaG9yaXpvbnRhbCcsXG4gICAgICAnbW9kZSc6ICdyZWxhdGl2ZScsXG4gICAgICAnc2NhbGUnOiBbLTEsMV0sXG4gICAgICAnc3RlcCc6IDAsXG4gICAgICAndmFsdWUnOiAwLFxuICAgICAgJ2hhc0tub2InOiB0cnVlXG4gICAgfTtcblxuICAgIHN1cGVyKGFyZ3VtZW50cyxvcHRpb25zLGRlZmF1bHRzKTtcblxuICAgIHRoaXMub3JpZW50YXRpb24gPSB0aGlzLnNldHRpbmdzLm9yaWVudGF0aW9uO1xuXG4gICAgdGhpcy5tb2RlID0gdGhpcy5zZXR0aW5ncy5tb2RlO1xuXG4gICAgdGhpcy5oYXNLbm9iID0gdGhpcy5zZXR0aW5ncy5oYXNLbm9iO1xuXG4gICAgLy8gdGhpcy5zdGVwIHNob3VsZCBldmVudHVhbGx5IGJlIGdldC9zZXRcbiAgICAvLyB1cGRhdGluZyBpdCB3aWxsIHVwZGF0ZSB0aGUgX3ZhbHVlIHN0ZXAgbW9kZWxcbiAgICB0aGlzLnN0ZXAgPSB0aGlzLnNldHRpbmdzLnN0ZXA7IC8vIGZsb2F0XG5cbiAgICB0aGlzLl92YWx1ZSA9IG5ldyBTdGVwKHRoaXMuc2V0dGluZ3Muc2NhbGVbMF0sIHRoaXMuc2V0dGluZ3Muc2NhbGVbMV0sIHRoaXMuc2V0dGluZ3Muc3RlcCwgdGhpcy5zZXR0aW5ncy52YWx1ZSk7XG5cbiAgICB0aGlzLmluaXQoKTtcblxuICAgIHRoaXMucG9zaXRpb24gPSBuZXcgSW50ZXJhY3Rpb24uSGFuZGxlKHRoaXMubW9kZSx0aGlzLm9yaWVudGF0aW9uLFswLHRoaXMud2lkdGhdLFt0aGlzLmhlaWdodCwwXSk7XG4gICAgdGhpcy5wb3NpdGlvbi52YWx1ZSA9IHRoaXMuX3ZhbHVlLm5vcm1hbGl6ZWQ7XG5cbiAgICB0aGlzLnZhbHVlID0gdGhpcy5fdmFsdWUudmFsdWU7XG5cbiAgICB0aGlzLmVtaXQoJ2NoYW5nZScsdGhpcy52YWx1ZSk7XG5cbiAgfVxuXG4gIGJ1aWxkSW50ZXJmYWNlKCkge1xuXG4gICAgdGhpcy5iYXIgPSBzdmcuY3JlYXRlKCdyZWN0Jyk7XG4gICAgdGhpcy5rbm9iID0gc3ZnLmNyZWF0ZSgnY2lyY2xlJyk7XG5cbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5iYXIpO1xuICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmtub2IpO1xuXG4gIH1cblxuICBzaXplSW50ZXJmYWNlKCkge1xuXG4gICAgaWYgKHRoaXMucG9zaXRpb24pIHtcbiAgICAgIHRoaXMucG9zaXRpb24ucmVzaXplKFswLHRoaXMud2lkdGhdLFt0aGlzLmhlaWdodCwwXSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMud2lkdGggPCB0aGlzLmhlaWdodCkge1xuICAgICAgdGhpcy5vcmllbnRhdGlvbiA9ICd2ZXJ0aWNhbCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub3JpZW50YXRpb24gPSAnaG9yaXpvbnRhbCc7XG4gICAgfVxuXG4gICAgbGV0IHgsIHksIHcsIGgsIGJhck9mZnNldCwgY29ybmVyUmFkaXVzO1xuICAgIHRoaXMua25vYkRhdGEgPSB7XG4gICAgICBsZXZlbDogMCxcbiAgICAgIHI6IDBcbiAgICB9O1xuXG4gICAgaWYgKHRoaXMub3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIHRoaXMudGhpY2tuZXNzID0gdGhpcy53aWR0aCAvIDI7XG4gICAgXHR4ID0gdGhpcy53aWR0aC8yO1xuICAgIFx0eSA9IDA7XG4gICAgXHR3ID0gdGhpcy50aGlja25lc3M7XG4gICAgXHRoID0gdGhpcy5oZWlnaHQ7XG4gICAgICB0aGlzLmtub2JEYXRhLnIgPSB0aGlzLnRoaWNrbmVzcyAqIDAuODtcbiAgICBcdHRoaXMua25vYkRhdGEubGV2ZWwgPSBoLXRoaXMua25vYkRhdGEuci10aGlzLm5vcm1hbGl6ZWQqKGgtdGhpcy5rbm9iRGF0YS5yKjIpO1xuICAgICAgYmFyT2Zmc2V0ID0gJ3RyYW5zbGF0ZSgnK3RoaXMudGhpY2tuZXNzKigtMSkvMisnLDApJztcbiAgICAgIGNvcm5lclJhZGl1cyA9IHcvMjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50aGlja25lc3MgPSB0aGlzLmhlaWdodCAvIDI7XG4gICAgXHR4ID0gMDtcbiAgICBcdHkgPSB0aGlzLmhlaWdodC8yO1xuICAgIFx0dyA9IHRoaXMud2lkdGg7XG4gICAgXHRoID0gdGhpcy50aGlja25lc3M7XG4gICAgICB0aGlzLmtub2JEYXRhLnIgPSB0aGlzLnRoaWNrbmVzcyAqIDAuODtcbiAgICBcdHRoaXMua25vYkRhdGEubGV2ZWwgPSB0aGlzLm5vcm1hbGl6ZWQqKHctdGhpcy5rbm9iRGF0YS5yKjIpK3RoaXMua25vYkRhdGEucjtcbiAgICAgIGJhck9mZnNldCA9ICd0cmFuc2xhdGUoMCwnK3RoaXMudGhpY2tuZXNzKigtMSkvMisnKSc7XG4gICAgICBjb3JuZXJSYWRpdXMgPSBoLzI7XG4gICAgfVxuXG4gICAgdGhpcy5iYXIuc2V0QXR0cmlidXRlKCd4Jyx4KTtcbiAgICB0aGlzLmJhci5zZXRBdHRyaWJ1dGUoJ3knLHkpO1xuICAgIHRoaXMuYmFyLnNldEF0dHJpYnV0ZSgndHJhbnNmb3JtJyxiYXJPZmZzZXQpO1xuICAgIHRoaXMuYmFyLnNldEF0dHJpYnV0ZSgncngnLGNvcm5lclJhZGl1cyk7IC8vIGNvcm5lciByYWRpdXNcbiAgICB0aGlzLmJhci5zZXRBdHRyaWJ1dGUoJ3J5Jyxjb3JuZXJSYWRpdXMpO1xuICAgIHRoaXMuYmFyLnNldEF0dHJpYnV0ZSgnd2lkdGgnLHcpO1xuICAgIHRoaXMuYmFyLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JyxoKTtcblxuICAgIGlmICh0aGlzLm9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICB0aGlzLmtub2Iuc2V0QXR0cmlidXRlKCdjeCcseCk7XG4gICAgICB0aGlzLmtub2Iuc2V0QXR0cmlidXRlKCdjeScsdGhpcy5rbm9iRGF0YS5sZXZlbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMua25vYi5zZXRBdHRyaWJ1dGUoJ2N4Jyx0aGlzLmtub2JEYXRhLmxldmVsKTtcbiAgICAgIHRoaXMua25vYi5zZXRBdHRyaWJ1dGUoJ2N5Jyx5KTtcbiAgICB9XG4gICAgdGhpcy5rbm9iLnNldEF0dHJpYnV0ZSgncicsdGhpcy5rbm9iRGF0YS5yKTtcblxuICB9XG5cbiAgY29sb3JJbnRlcmZhY2UoKSB7XG5cbiAgICB0aGlzLmJhci5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCB0aGlzLmNvbG9ycy5maWxsKTtcbiAgICB0aGlzLmtub2Iuc2V0QXR0cmlidXRlKCdmaWxsJywgdGhpcy5jb2xvcnMuYWNjZW50KTtcblxuICAgIGlmICghdGhpcy5oYXNLbm9iKSB7XG4gICAgICB0aGlzLmtub2Iuc2V0QXR0cmlidXRlKCdmaWxsJywndHJhbnNwYXJlbnQnKTtcbiAgICB9XG5cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBpZiAoIXRoaXMuY2xpY2tlZCkge1xuICAgICAgdGhpcy5rbm9iRGF0YS5yID0gdGhpcy50aGlja25lc3MqMC43NTtcbiAgICB9XG4gICAgdGhpcy5rbm9iLnNldEF0dHJpYnV0ZSgncicsdGhpcy5rbm9iRGF0YS5yKTtcblxuICAgIGlmICh0aGlzLm9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gIFx0ICAgdGhpcy5rbm9iRGF0YS5sZXZlbCA9IHRoaXMua25vYkRhdGEucit0aGlzLl92YWx1ZS5ub3JtYWxpemVkKih0aGlzLmhlaWdodC10aGlzLmtub2JEYXRhLnIqMik7XG4gICAgICAgdGhpcy5rbm9iLnNldEF0dHJpYnV0ZSgnY3knLHRoaXMuaGVpZ2h0IC0gdGhpcy5rbm9iRGF0YS5sZXZlbCk7XG4gICAgfSBlbHNlIHtcbiAgXHQgICB0aGlzLmtub2JEYXRhLmxldmVsID0gdGhpcy5fdmFsdWUubm9ybWFsaXplZCoodGhpcy53aWR0aC10aGlzLmtub2JEYXRhLnIqMikrdGhpcy5rbm9iRGF0YS5yO1xuICAgICAgIHRoaXMua25vYi5zZXRBdHRyaWJ1dGUoJ2N4Jyx0aGlzLmtub2JEYXRhLmxldmVsKTtcbiAgICB9XG4gIH1cblxuXG4gIGNsaWNrKCkge1xuICAgIHRoaXMua25vYkRhdGEuciA9IHRoaXMudGhpY2tuZXNzKjAuOTtcbiAgICB0aGlzLnBvc2l0aW9uLmFuY2hvciA9IHRoaXMubW91c2U7XG4gICAgdGhpcy5tb3ZlKCk7XG4gIH1cblxuICBtb3ZlKCkge1xuICAgIGlmICh0aGlzLmNsaWNrZWQpIHtcbiAgICAgIHRoaXMucG9zaXRpb24udXBkYXRlKHRoaXMubW91c2UpO1xuXG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy5fdmFsdWUudXBkYXRlTm9ybWFsKCB0aGlzLnBvc2l0aW9uLnZhbHVlICk7XG5cbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJyx7XG4gICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgICBMOiBNYXRoLnBvdyggbWF0aC5zY2FsZSh0aGlzLnZhbHVlLC0xLDEsMSwwKSwgMiksXG4gICAgICAgIFI6IE1hdGgucG93KCBtYXRoLnNjYWxlKHRoaXMudmFsdWUsLTEsMSwwLDEpLCAyKVxuICAgICAgfSk7XG5cbiAgICB9XG4gIH1cblxuICByZWxlYXNlKCkge1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICAvKipcbiAgVGhlIHBvc2l0aW9uIG9mIGNyb3NzZmFkZXIsIGZyb20gLTEgKGxlZnQpIHRvIDEgKHJpZ2h0KS4gU2V0dGluZyB0aGlzIHZhbHVlIHVwZGF0ZXMgdGhlIGludGVyZmFjZSBhbmQgdHJpZ2dlcnMgdGhlIG91dHB1dCBldmVudC5cbiAgQHR5cGUge251bWJlcn1cbiAgKi9cbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZS52YWx1ZTtcbiAgfVxuXG4gIHNldCB2YWx1ZSh2YWx1ZSkge1xuICAgIHRoaXMuX3ZhbHVlLnVwZGF0ZSh2YWx1ZSk7XG4gICAgdGhpcy5wb3NpdGlvbi52YWx1ZSA9IHRoaXMuX3ZhbHVlLm5vcm1hbGl6ZWQ7XG4gICAgdGhpcy5lbWl0KCdjaGFuZ2UnLHtcbiAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgTDogTWF0aC5wb3coIG1hdGguc2NhbGUodGhpcy52YWx1ZSwtMSwxLDEsMCksIDIpLFxuICAgICAgUjogTWF0aC5wb3coIG1hdGguc2NhbGUodGhpcy52YWx1ZSwtMSwxLDAsMSksIDIpXG4gICAgfSk7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIGdldCBub3JtYWxpemVkKCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZS5ub3JtYWxpemVkO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vanNoaW50LWxvYWRlciEuL2xpYi9pbnRlcmZhY2VzL3Bhbi5qcyIsIid1c2Ugc3RyaWN0JztcblxubGV0IG1hdGggPSByZXF1aXJlKCcuLi91dGlsL21hdGgnKTtcbmxldCBzdmcgPSByZXF1aXJlKCcuLi91dGlsL3N2ZycpO1xubGV0IEludGVyZmFjZSA9IHJlcXVpcmUoJy4uL2NvcmUvaW50ZXJmYWNlJyk7XG5cblxubGV0IFBvaW50ID0gZnVuY3Rpb24ocG9pbnQsZW52ZWxvcGUpIHtcblxuICB0aGlzLnggPSBwb2ludC54O1xuICB0aGlzLnkgPSBwb2ludC55O1xuICB0aGlzLmVudmVsb3BlID0gZW52ZWxvcGU7XG5cbiAgdGhpcy5lbGVtZW50ID0gc3ZnLmNyZWF0ZSgnY2lyY2xlJyk7XG4gIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLHRoaXMuZW52ZWxvcGUuY29sb3JzLmFjY2VudCk7XG5cbiAgdGhpcy5lbnZlbG9wZS5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XG5cbiAgdGhpcy5yZXNpemUgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgciA9IH5+KE1hdGgubWluKHRoaXMuZW52ZWxvcGUud2lkdGgsdGhpcy5lbnZlbG9wZS5oZWlnaHQpLzUwKSsyO1xuICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3InLHIpO1xuICB9O1xuXG4gIHRoaXMubW92ZSA9IGZ1bmN0aW9uKHgseSkge1xuXG4gICAgdGhpcy54ID0gKHggfHwgeD09PTApID8geCA6IHRoaXMueDtcbiAgICB0aGlzLnkgPSAoeSB8fCB5PT09MCkgPyB5IDogdGhpcy55O1xuXG4gICAgaWYgKHRoaXMuZW52ZWxvcGUubm9kZXMuaW5kZXhPZih0aGlzKT49MCkge1xuXG4gICAgICBsZXQgcHJldkluZGV4ID0gdGhpcy5lbnZlbG9wZS5ub2Rlcy5pbmRleE9mKHRoaXMpLTE7XG4gICAgICBsZXQgbmV4dEluZGV4ID0gdGhpcy5lbnZlbG9wZS5ub2Rlcy5pbmRleE9mKHRoaXMpKzE7XG5cbiAgICAgIGxldCBwcmV2Tm9kZSA9IHRoaXMuZW52ZWxvcGUubm9kZXNbcHJldkluZGV4XTtcbiAgICAgIGxldCBuZXh0Tm9kZSA9IHRoaXMuZW52ZWxvcGUubm9kZXNbbmV4dEluZGV4XTtcblxuICAgICAgbGV0IGxvd1ggPSBwcmV2SW5kZXggPj0gMCA/IHByZXZOb2RlLnggOiAwO1xuICAgICAgbGV0IGhpZ2hYID0gbmV4dEluZGV4IDwgdGhpcy5lbnZlbG9wZS5ub2Rlcy5sZW5ndGggPyBuZXh0Tm9kZS54IDogMTtcblxuICAgICAgaWYgKHRoaXMueCA8IGxvd1gpIHsgdGhpcy54ID0gbG93WDsgfVxuICAgICAgaWYgKHRoaXMueCA+IGhpZ2hYKSB7IHRoaXMueCA9IGhpZ2hYOyB9XG5cbiAgICB9XG5cbiAgICB0aGlzLmxvY2F0aW9uID0gdGhpcy5nZXRDb29yZGluYXRlcygpO1xuICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2N4JywgdGhpcy5sb2NhdGlvbi54KTtcbiAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdjeScsIHRoaXMubG9jYXRpb24ueSk7XG4gIH07XG5cbiAgdGhpcy5nZXRDb29yZGluYXRlcyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICB4OiB0aGlzLnggKiB0aGlzLmVudmVsb3BlLndpZHRoLFxuICAgICAgeTogKDEtdGhpcy55KSAqIHRoaXMuZW52ZWxvcGUuaGVpZ2h0XG4gICAgfTtcbiAgfTtcblxuICB0aGlzLm1vdmUodGhpcy54LHRoaXMueSx0cnVlKTtcbiAgdGhpcy5yZXNpemUoKTtcblxuICB0aGlzLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmVudmVsb3BlLmVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgICB0aGlzLmVudmVsb3BlLm5vZGVzLnNwbGljZSh0aGlzLmVudmVsb3BlLm5vZGVzLmluZGV4T2YodGhpcyksMSk7XG4gIH07XG5cblxufTtcblxuXG4vKipcbiogRW52ZWxvcGVcbipcbiogQGRlc2NyaXB0aW9uIEludGVyYWN0aXZlIGxpbmVhciByYW1wIHZpc3VhbGl6YXRpb24uXG4qXG4qIEBkZW1vIDxzcGFuIG5leHVzLXVpPVwiZW52ZWxvcGVcIj48L3NwYW4+XG4qXG4qIEBleGFtcGxlXG4qIHZhciBlbnZlbG9wZSA9IG5ldyBOZXh1cy5FbnZlbG9wZSgnI3RhcmdldCcpXG4qXG4qIEBleGFtcGxlXG4qIHZhciBlbnZlbG9wZSA9IG5ldyBOZXh1cy5FbnZlbG9wZSgnI3RhcmdldCcse1xuKiAgICdzaXplJzogWzMwMCwxNTBdLFxuKiAgICdwb2ludHMnOiBbXG4qICAgICB7XG4qICAgICAgIHg6IDAuMSxcbiogICAgICAgeTogMC40XG4qICAgICB9LFxuKiAgICAge1xuKiAgICAgICB4OiAwLjM1LFxuKiAgICAgICB5OiAwLjZcbiogICAgIH0sXG4qICAgICB7XG4qICAgICAgIHg6IDAuNjUsXG4qICAgICAgIHk6IDAuMlxuKiAgICAgfSxcbiogICAgIHtcbiogICAgICAgeDogMC45LFxuKiAgICAgICB5OiAwLjRcbiogICAgIH0sXG4qICAgXVxuKiB9KVxuKlxuKiBAb3V0cHV0XG4qIGNoYW5nZVxuKiBGaXJlcyBhbnkgdGltZSBhIG5vZGUgaXMgbW92ZWQuIDxicj5cbiogVGhlIGV2ZW50IGRhdGEgaXMgYW4gYXJyYXkgb2YgcG9pbnQgbG9jYXRpb25zLiBFYWNoIGl0ZW0gaW4gdGhlIGFycmF5IGlzIGFuIG9iamVjdCBjb250YWluaW5nIDxpPng8L2k+IGFuZCA8aT55PC9pPiBwcm9wZXJ0aWVzIGRlc2NyaWJpbmcgdGhlIGxvY2F0aW9uIG9mIGEgcG9pbnQgb24gdGhlIGVudmVsb3BlLlxuKlxuKiBAb3V0cHV0ZXhhbXBsZVxuKiBlbnZlbG9wZS5vbignY2hhbmdlJyxmdW5jdGlvbih2KSB7XG4qICAgY29uc29sZS5sb2codik7XG4qIH0pXG4qXG4qL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbnZlbG9wZSBleHRlbmRzIEludGVyZmFjZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICBsZXQgb3B0aW9ucyA9IFsndmFsdWUnXTtcblxuICAgIGxldCBkZWZhdWx0cyA9IHtcbiAgICAgICdzaXplJzogWzMwMCwxNTBdLFxuICAgICAgJ3BvaW50cyc6IFtcbiAgXHRcdFx0e1xuICBcdFx0XHRcdHg6IDAuMSxcbiAgXHRcdFx0XHR5OiAwLjRcbiAgXHRcdFx0fSxcbiAgXHRcdFx0e1xuICBcdFx0XHRcdHg6IDAuMzUsXG4gIFx0XHRcdFx0eTogMC42XG4gIFx0XHRcdH0sXG4gIFx0XHRcdHtcbiAgXHRcdFx0XHR4OiAwLjY1LFxuICBcdFx0XHRcdHk6IDAuMlxuICBcdFx0XHR9LFxuICBcdFx0XHR7XG4gIFx0XHRcdFx0eDogMC45LFxuICBcdFx0XHRcdHk6IDAuNFxuICBcdFx0XHR9XG4gIFx0XHRdXG4gICAgfTtcblxuICAgIHN1cGVyKGFyZ3VtZW50cyxvcHRpb25zLGRlZmF1bHRzKTtcblxuICAgIHRoaXMucG9pbnRzID0gdGhpcy5zZXR0aW5ncy5wb2ludHM7XG5cbiAgICB0aGlzLm5vZGVzID0gW107XG5cbiAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XG5cbiAgICB0aGlzLmluaXQoKTtcblxuXG4gIH1cblxuICBidWlsZEludGVyZmFjZSgpIHtcblxuXG4gICAgdGhpcy5wb2ludHMuZm9yRWFjaCgocG9pbnQpID0+IHtcbiAgICAgIGxldCBub2RlID0gbmV3IFBvaW50KHBvaW50LHRoaXMpO1xuICAgICAgdGhpcy5ub2Rlcy5wdXNoKG5vZGUpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zb3J0UG9pbnRzKCk7XG5cbiAgICB0aGlzLmxpbmUgPSBzdmcuY3JlYXRlKCdwb2x5bGluZScpO1xuICAgIHRoaXMubGluZS5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS13aWR0aCcsIDIpO1xuICAgIHRoaXMubGluZS5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCAnbm9uZScpO1xuXG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMubGluZSk7XG5cbiAgICB0aGlzLmZpbGwgPSBzdmcuY3JlYXRlKCdwb2x5bGluZScpO1xuICAgIHRoaXMuZmlsbC5zZXRBdHRyaWJ1dGUoJ2ZpbGwtb3BhY2l0eScsICcwLjInKTtcblxuICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmZpbGwpO1xuXG4gIH1cblxuICBzaXplSW50ZXJmYWNlKCkge1xuXG4gICAgZm9yIChsZXQgaT0wOyBpPHRoaXMubm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMubm9kZXNbaV0ucmVzaXplKCk7XG4gICAgICB0aGlzLm5vZGVzW2ldLm1vdmUoKTtcbiAgICB9XG5cbiAgICB0aGlzLnJlbmRlcigpO1xuXG4gIH1cblxuICBjb2xvckludGVyZmFjZSgpIHtcblxuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLmNvbG9ycy5maWxsO1xuICAgIHRoaXMubGluZS5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsIHRoaXMuY29sb3JzLmFjY2VudCk7XG4gICAgdGhpcy5maWxsLnNldEF0dHJpYnV0ZSgnZmlsbCcsIHRoaXMuY29sb3JzLmFjY2VudCk7XG4gICAgdGhpcy5ub2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICBub2RlLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdmaWxsJyx0aGlzLmNvbG9ycy5hY2NlbnQpO1xuICAgIH0pO1xuXG4gIH1cblxuICByZW5kZXIoKSB7XG4gIC8vICB0aGlzLm5vZGVzW3RoaXMuc2VsZWN0ZWRdLm1vdmUoIHRoaXMucG9pbnRzIClcbiAgICB0aGlzLmNhbGN1bGF0ZVBhdGgoKTtcbiAgfVxuXG4gIGNhbGN1bGF0ZVBvaW50cygpIHtcbiAgICB0aGlzLnBvaW50cyA9IFtdO1xuICAgIHRoaXMubm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgdGhpcy5wb2ludHMucHVzaCh7IHg6IG5vZGUueCwgeTogbm9kZS55IH0pO1xuICAgIH0pO1xuICB9XG5cbiAgY2FsY3VsYXRlUGF0aCgpIHtcblxuICAgIC8vc3Ryb2tlIGRhdGFcbiAgICBsZXQgZGF0YSA9ICcwICcrIHRoaXMubm9kZXNbMF0ubG9jYXRpb24ueSsnLCAnO1xuXG4gICAgLy8gZGF0YSBzaG91bGQgYmUgcmUtb3JkZXJlZCBiYXNlZCBvbiB4IGxvY2F0aW9uLlxuICAgIC8vIHdoYXRldmVyIGZ1bmN0aW9uIGFkZHMgYSBub2RlIHNob3VsZCBhZGQgaXQgYXQgdGhlIHJpZ2h0IGluZGV4XG5cbiAgICB0aGlzLm5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAvLyAgbGV0IGxvY2F0aW9uID0gbm9kZS5nZXRDb29yZGluYXRlcygpO1xuICAgICAgZGF0YSArPSBub2RlLmxvY2F0aW9uLnggKyAnICcgKyBub2RlLmxvY2F0aW9uLnkgKyAnLCAnO1xuICAgIH0pO1xuXG5cbiAgLy8gIGRhdGEgKz0gcG9pbnQueCp0aGlzLndpZHRoKycgJysgcG9pbnQueSp0aGlzLmhlaWdodCsnLCAnO1xuICAgIGRhdGEgKz0gdGhpcy53aWR0aCArICcgJysgdGhpcy5ub2Rlc1t0aGlzLm5vZGVzLmxlbmd0aC0xXS5sb2NhdGlvbi55O1xuXG4gICAgdGhpcy5saW5lLnNldEF0dHJpYnV0ZSgncG9pbnRzJywgZGF0YSk7XG5cbiAgICAvLyBmaWxsIGRhdGFcbiAgICAvLyBhZGQgYm90dG9tIGNvcm5lcnNcblxuICAgIGRhdGEgKz0gJywgJyt0aGlzLndpZHRoICsnICcrdGhpcy5oZWlnaHQrJywgJztcbiAgICBkYXRhICs9ICcwICcrdGhpcy5oZWlnaHQ7XG5cbiAgICB0aGlzLmZpbGwuc2V0QXR0cmlidXRlKCdwb2ludHMnLCBkYXRhKTtcblxuICB9XG5cblxuXG4gIGNsaWNrKCkge1xuICBcdC8vIGZpbmQgbmVhcmVzdCBub2RlIGFuZCBzZXQgdGhpcy5zZWxlY3RlZCAoaW5kZXgpXG4gICAgdGhpcy5oYXNNb3ZlZCA9IGZhbHNlO1xuICBcdHRoaXMuc2VsZWN0ZWQgPSB0aGlzLmZpbmROZWFyZXN0Tm9kZSgpO1xuXG4gICAgdGhpcy5ub2Rlc1t0aGlzLnNlbGVjdGVkXS5tb3ZlKHRoaXMubW91c2UueC90aGlzLndpZHRoLDEtdGhpcy5tb3VzZS55L3RoaXMuaGVpZ2h0KTtcbiAgICB0aGlzLnNjYWxlTm9kZSh0aGlzLnNlbGVjdGVkKTtcblxuICAgIC8vIG11c3QgZG8gdGhpcyBiL2MgbmV3IG5vZGUgbWF5IGhhdmUgYmVlbiBjcmVhdGVkXG4gICAgdGhpcy5jYWxjdWxhdGVQb2ludHMoKTtcbiAgICB0aGlzLmVtaXQoJ2NoYW5nZScsdGhpcy5wb2ludHMpO1xuICBcdHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBtb3ZlKCkge1xuICBcdGlmICh0aGlzLmNsaWNrZWQpIHtcbiAgICAgIHRoaXMubW91c2UueCA9IG1hdGguY2xpcCh0aGlzLm1vdXNlLngsMCx0aGlzLndpZHRoKTtcbiAgICAgIHRoaXMuaGFzTW92ZWQgPSB0cnVlO1xuXG4gICAgICB0aGlzLm5vZGVzW3RoaXMuc2VsZWN0ZWRdLm1vdmUodGhpcy5tb3VzZS54L3RoaXMud2lkdGgsMS10aGlzLm1vdXNlLnkvdGhpcy5oZWlnaHQpO1xuICAgIFx0dGhpcy5zY2FsZU5vZGUodGhpcy5zZWxlY3RlZCk7XG5cbiAgICAgIHRoaXMuY2FsY3VsYXRlUG9pbnRzKCk7XG4gIFx0XHR0aGlzLmVtaXQoJ2NoYW5nZScsdGhpcy5wb2ludHMpO1xuICBcdFx0dGhpcy5yZW5kZXIoKTtcbiAgXHR9XG4gIH1cblxuICByZWxlYXNlKCkge1xuXG4gIFx0aWYgKCF0aGlzLmhhc01vdmVkKSB7XG4gICAgICB0aGlzLm5vZGVzW3RoaXMuc2VsZWN0ZWRdLmRlc3Ryb3koKTtcbiAgXHR9XG5cbiAgICB0aGlzLmNhbGN1bGF0ZVBvaW50cygpO1xuICAgIHRoaXMuZW1pdCgnY2hhbmdlJyx0aGlzLnBvaW50cyk7XG4gIFx0dGhpcy5yZW5kZXIoKTtcblxuICBcdC8vIHJlc2V0IHRoaXMuc2VsZWN0ZWRcbiAgXHR0aGlzLnNlbGVjdGVkID0gbnVsbDtcbiAgfVxuXG5cbiAgZmluZE5lYXJlc3ROb2RlKCkge1xuICBcdHZhciBuZWFyZXN0SW5kZXggPSBudWxsO1xuICAgIC8vIHNldCB0aGlzIHVucmVhc29uYWJseSBoaWdoIHNvIHRoYXQgZXZlcnkgZGlzdGFuY2Ugd2lsbCBiZSBsb3dlciB0aGFuIGl0LlxuICBcdHZhciBuZWFyZXN0RGlzdCA9IDEwMDAwO1xuICBcdHZhciBiZWZvcmUgPSBmYWxzZTtcbiAgICBsZXQgeCA9IHRoaXMubW91c2UueC90aGlzLndpZHRoO1xuICAgIGxldCB5ID0gMS10aGlzLm1vdXNlLnkvdGhpcy5oZWlnaHQ7XG4gICAgbGV0IG5vZGVzID0gdGhpcy5ub2RlcztcbiAgXHRmb3IgKGxldCBpID0gMDsgaTxub2Rlcy5sZW5ndGg7IGkrKykge1xuXG4gICAgICAvLyBjYWxjdWxhdGUgdGhlIGRpc3RhbmNlIGZyb20gbW91c2UgdG8gdGhpcyBub2RlIHVzaW5nIHB5dGhhZ29yZWFuIHRoZW9yZW1cbiAgXHRcdHZhciBkaXN0YW5jZSA9IE1hdGguc3FydCggIE1hdGgucG93KCAobm9kZXNbaV0ueCAtIHgpLCAyKSArIE1hdGgucG93KChub2Rlc1tpXS55IC0geSksIDIpICk7XG5cbiAgICAgIC8vIGlmIHRoaXMgZGlzdGFuY2UgaXMgbGVzcyB0aGFuIHRoZSBwcmV2aW91cyBzaG9ydGVzdCBkaXN0YW5jZSwgdXNlIHRoaXMgaW5kZXhcbiAgXHRcdGlmIChkaXN0YW5jZSA8IG5lYXJlc3REaXN0KSB7XG4gIFx0XHRcdG5lYXJlc3REaXN0ID0gZGlzdGFuY2U7XG4gIFx0XHRcdG5lYXJlc3RJbmRleCA9IGk7XG4gIFx0XHRcdGJlZm9yZSA9IHggPiBub2Rlc1tpXS54O1xuICBcdFx0fVxuXG4gIFx0fVxuXG4gICAgLy8gaWYgbm90IHZlcnkgY2xvc2UgdG8gYW55IG5vZGUsIGNyZWF0ZSBhIG5vZGVcbiAgXHRpZiAobmVhcmVzdERpc3Q+MC4wNykge1xuXG4gICAgICBuZWFyZXN0SW5kZXggPSB0aGlzLmdldEluZGV4RnJvbVgodGhpcy5tb3VzZS54L3RoaXMud2lkdGgpO1xuXG4gIFx0XHR0aGlzLm5vZGVzLnNwbGljZShuZWFyZXN0SW5kZXgsMCwgbmV3IFBvaW50KHtcbiAgXHRcdFx0eDogdGhpcy5tb3VzZS54L3RoaXMud2lkdGgsXG4gIFx0XHRcdHk6IDEtdGhpcy5tb3VzZS55L3RoaXMuaGVpZ2h0XG4gIFx0XHR9LCB0aGlzKSk7XG4gICAgICB0aGlzLmhhc01vdmVkID0gdHJ1ZTtcblxuICBcdH1cblxuICBcdHJldHVybiBuZWFyZXN0SW5kZXg7XG4gIH1cblxuICBnZXRJbmRleEZyb21YKHgpIHtcbiAgICBsZXQgaW5kZXggPSAwO1xuICAgIHRoaXMubm9kZXMuZm9yRWFjaCgobm9kZSxpKSA9PiB7XG4gICAgICBpZiAodGhpcy5ub2Rlc1tpXS54IDw9IHgpIHtcbiAgICAgICAgaW5kZXggPSBpKzE7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGluZGV4O1xuICB9XG5cbiAgc2NhbGVOb2RlKGkpIHtcblxuICBcdGxldCBjbGlwcGVkWCA9IG1hdGguY2xpcCh0aGlzLm5vZGVzW2ldLngsIDAsIDEpO1xuICBcdGxldCBjbGlwcGVkWSA9IG1hdGguY2xpcCh0aGlzLm5vZGVzW2ldLnksIDAsIDEpO1xuXG4gICAgdGhpcy5ub2Rlc1tpXS5tb3ZlKCBjbGlwcGVkWCwgY2xpcHBlZFkgKTtcblxuICB9XG5cbiAgLyoqXG4gIFNvcnQgdGhlIHRoaXMucG9pbnRzIGFycmF5IGZyb20gbGVmdC1tb3N0IHBvaW50IHRvIHJpZ2h0LW1vc3QgcG9pbnQuIFlvdSBzaG91bGQgbm90IHJlZ3VsYXJseSBuZWVkIHRvIHVzZSB0aGlzLCBob3dldmVyIGl0IG1heSBiZSB1c2VmdWwgaWYgdGhlIHBvaW50cyBnZXQgdW5vcmRlcmVkLlxuICAqL1xuICBzb3J0UG9pbnRzKCkge1xuICAgIHRoaXMubm9kZXMuc29ydChmdW5jdGlvbihhLCBiKXtcbiAgICAgIHJldHVybiBhLnggPiBiLng7XG4gICAgfSk7XG4gIH1cblxuXG4gIC8qKlxuICBBZGQgYSBicmVha3BvaW50IG9uIHRoZSBlbnZlbG9wZS5cbiAgQHBhcmFtIHgge251bWJlcn0geCBsb2NhdGlvbiBvZiB0aGUgcG9pbnQsIG5vcm1hbGl6ZWQgKDAtMSlcbiAgQHBhcmFtIHkge251bWJlcn0geSBsb2NhdGlvbiBvZiB0aGUgcG9pbnQsIG5vcm1hbGl6ZWQgKDAtMSlcbiAgKi9cbiAgYWRkUG9pbnQoeCx5KSB7XG4gICAgbGV0IGluZGV4ID0gdGhpcy5ub2Rlcy5sZW5ndGg7XG5cbiAgICB0aGlzLnNvcnRQb2ludHMoKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpPHRoaXMubm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh4IDwgdGhpcy5ub2Rlc1tpXS54KSB7XG4gICAgICAgIGluZGV4ID0gaTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gIFx0fVxuXG4gICAgdGhpcy5ub2Rlcy5zcGxpY2UoaW5kZXgsIDAsIG5ldyBQb2ludCh7XG4gICAgICB4OiB4LFxuICAgICAgeTogeVxuICAgIH0sIHRoaXMpKTtcblxuICAgIHRoaXMuc2NhbGVOb2RlKGluZGV4KTtcblxuICAgIHRoaXMuY2FsY3VsYXRlUG9pbnRzKCk7XG4gICAgdGhpcy5lbWl0KCdjaGFuZ2UnLHRoaXMucG9pbnRzKTtcblxuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuXG4gIC8qKlxuICBGaW5kIHRoZSBsZXZlbCBhdCBhIGNlcnRhaW4geCBsb2NhdGlvbiBvbiB0aGUgZW52ZWxvcGUuXG4gIEBwYXJhbSB4IHtudW1iZXJ9IFRoZSB4IGxvY2F0aW9uIHRvIGZpbmQgdGhlIGxldmVsIG9mLCBub3JtYWxpemVkIDAtMVxuICAqL1xuICBzY2FuKHgpIHtcbiAgICAvLyBmaW5kIHN1cnJvdW5kaW5nIHBvaW50c1xuICAgIGxldCBuZXh0SW5kZXggPSB0aGlzLmdldEluZGV4RnJvbVgoeCk7XG4gICAgbGV0IHByaW9ySW5kZXggPSBuZXh0SW5kZXgtMTtcbiAgICBpZiAocHJpb3JJbmRleCA8IDApIHtcbiAgICAgIHByaW9ySW5kZXggPSAwO1xuICAgIH1cbiAgICBpZiAobmV4dEluZGV4ID49IHRoaXMubm9kZXMubGVuZ3RoKSB7XG4gICAgICBuZXh0SW5kZXggPSB0aGlzLm5vZGVzLmxlbmd0aC0xO1xuICAgIH1cbiAgICBsZXQgcHJpb3JQb2ludCA9IHRoaXMubm9kZXNbcHJpb3JJbmRleF07XG4gICAgbGV0IG5leHRQb2ludCA9IHRoaXMubm9kZXNbbmV4dEluZGV4XTtcbiAgICBsZXQgbG9jID0gbWF0aC5zY2FsZSh4LHByaW9yUG9pbnQueCwgbmV4dFBvaW50LngsIDAsIDEpO1xuICAgIGxldCB2YWx1ZSA9IG1hdGguaW50ZXJwKGxvYyxwcmlvclBvaW50LnksbmV4dFBvaW50LnkpO1xuICAgIHRoaXMuZW1pdCgnc2NhbicsdmFsdWUpO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG5cbiAgLyoqXG4gIE1vdmUgYSBicmVha3BvaW50IG9uIHRoZSBlbnZlbG9wZS5cbiAgQHBhcmFtIGluZGV4IHtudW1iZXJ9IFRoZSBpbmRleCBvZiB0aGUgYnJlYWtwb2ludCB0byBtb3ZlXG4gIEBwYXJhbSB4IHtudW1iZXJ9IE5ldyB4IGxvY2F0aW9uLCBub3JtYWxpemVkIDAtMVxuICBAcGFyYW0geSB7bnVtYmVyfSBOZXcgeSBsb2NhdGlvbiwgbm9ybWFsaXplZCAwLTFcbiAgKi9cbiAgbW92ZVBvaW50KGluZGV4LHgseSkge1xuICAgIHRoaXMubm9kZXNbaW5kZXhdLm1vdmUoeCx5KTtcbiAgICB0aGlzLnNjYWxlTm9kZShpbmRleCk7XG4gICAgdGhpcy5jYWxjdWxhdGVQb2ludHMoKTtcbiAgICB0aGlzLmVtaXQoJ2NoYW5nZScsdGhpcy5wb2ludHMpO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuXG4gIC8qKlxuICBNb3ZlIGEgYnJlYWtwb2ludCBvbiB0aGUgZW52ZWxvcGUgYnkgYSBjZXJ0YWluIGFtb3VudC5cbiAgQHBhcmFtIGluZGV4IHtudW1iZXJ9IFRoZSBpbmRleCBvZiB0aGUgYnJlYWtwb2ludCB0byBtb3ZlXG4gIEBwYXJhbSB4T2Zmc2V0IHtudW1iZXJ9IFggZGlzcGxhY2VtZW50LCBub3JtYWxpemVkIDAtMVxuICBAcGFyYW0geU9mZnNldCB7bnVtYmVyfSBZIGRpc3BsYWNlbWVudCwgbm9ybWFsaXplZCAwLTFcbiAgKi9cbiAgYWRqdXN0UG9pbnQoaW5kZXgseE9mZnNldCx5T2Zmc2V0KSB7XG4gICAgdGhpcy5ub2Rlc1tpbmRleF0ubW92ZSh0aGlzLm5vZGVzW2luZGV4XS54K3hPZmZzZXQsdGhpcy5ub2Rlc1tpbmRleF0ueSt5T2Zmc2V0KTtcbiAgICB0aGlzLnNjYWxlTm9kZShpbmRleCk7XG4gICAgdGhpcy5jYWxjdWxhdGVQb2ludHMoKTtcbiAgICB0aGlzLmVtaXQoJ2NoYW5nZScsdGhpcy5wb2ludHMpO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuXG4gIC8qKlxuICBSZW1vdmUgYSBicmVha3BvaW50IGZyb20gdGhlIGVudmVsb3BlLlxuICBAcGFyYW0gaW5kZXgge251bWJlcn0gSW5kZXggb2YgdGhlIGJyZWFrcG9pbnQgdG8gcmVtb3ZlXG4gICovXG4gIGRlc3Ryb3lQb2ludChpbmRleCkge1xuICAgIHRoaXMubm9kZXNbaW5kZXhdLmRlc3Ryb3koKTtcbiAgICB0aGlzLmNhbGN1bGF0ZVBvaW50cygpO1xuICAgIHRoaXMuZW1pdCgnY2hhbmdlJyx0aGlzLnBvaW50cyk7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG5cbiAgLyoqXG4gIFJlbW92ZSBhbGwgZXhpc3RpbmcgYnJlYWtwb2ludHMgYW5kIGFkZCBhbiBlbnRpcmVseSBuZXcgc2V0IG9mIGJyZWFrcG9pbnRzLlxuICBAcGFyYW0gYWxsUG9pbnRzIHthcnJheX0gQW4gYXJyYXkgb2Ygb2JqZWN0cyB3aXRoIHgveSBwcm9wZXJ0aWVzIChub3JtYWxpemVkIDAtMSkuIEVhY2ggb2JqZWN0IGluIHRoZSBhcnJheSBzcGVjaWZpY2VzIHRoZSB4L3kgbG9jYXRpb24gb2YgYSBuZXcgYnJlYWtwb2ludCB0byBiZSBhZGRlZC5cbiAgKi9cbiAgc2V0UG9pbnRzKGFsbFBvaW50cykge1xuICAgIHdoaWxlICh0aGlzLm5vZGVzLmxlbmd0aCkge1xuICAgICAgdGhpcy5ub2Rlc1swXS5kZXN0cm95KCk7XG4gICAgfVxuICAgIGFsbFBvaW50cy5mb3JFYWNoKChwb2ludCkgPT4ge1xuICAgICAgdGhpcy5hZGRQb2ludChwb2ludC54LHBvaW50LnkpO1xuICAgIH0pO1xuICAgIHRoaXMuY2FsY3VsYXRlUG9pbnRzKCk7XG4gICAgdGhpcy5lbWl0KCdjaGFuZ2UnLHRoaXMucG9pbnRzKTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vanNoaW50LWxvYWRlciEuL2xpYi9pbnRlcmZhY2VzL2VudmVsb3BlLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5sZXQgZG9tID0gcmVxdWlyZSgnLi4vdXRpbC9kb20nKTtcbi8vbGV0IG1hdGggPSByZXF1aXJlKCcuLi91dGlsL21hdGgnKTtcbmxldCBJbnRlcmZhY2UgPSByZXF1aXJlKCcuLi9jb3JlL2ludGVyZmFjZScpO1xuXG4vKipcbiogU3BlY3Ryb2dyYW1cbipcbiogQGRlc2NyaXB0aW9uIEF1ZGlvIHNwZWN0cnVtIHZpc3VhbGl6YXRpb25cbipcbiogQGRlbW8gPHNwYW4gbmV4dXMtdWk9XCJzcGVjdHJvZ3JhbVwiPjwvc3Bhbj5cbipcbiogQGV4YW1wbGVcbiogdmFyIHNwZWN0cm9ncmFtID0gbmV3IE5leHVzLlNwZWN0cm9ncmFtKCcjdGFyZ2V0JylcbipcbiogQGV4YW1wbGVcbiogdmFyIHNwZWN0cm9ncmFtID0gbmV3IE5leHVzLlNwZWN0cm9ncmFtKCcjdGFyZ2V0Jyx7XG4qICAgJ3NpemUnOiBbMzAwLDE1MF1cbiogfSlcbipcbiogQG91dHB1dFxuKiAmbmJzcDtcbiogTm8gZXZlbnRzXG4qXG4qL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTcGVjdHJvZ3JhbSBleHRlbmRzIEludGVyZmFjZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICBsZXQgb3B0aW9ucyA9IFsnc2NhbGUnLCd2YWx1ZSddO1xuXG4gICAgbGV0IGRlZmF1bHRzID0ge1xuICAgICAgJ3NpemUnOiBbMzAwLDE1MF1cbiAgICB9O1xuXG4gICAgc3VwZXIoYXJndW1lbnRzLG9wdGlvbnMsZGVmYXVsdHMpO1xuXG4gICAgdGhpcy5jb250ZXh0ID0gTmV4dXMuY29udGV4dDsgLy8ganNoaW50IGlnbm9yZTpsaW5lXG5cbiAgICB0aGlzLmFuYWx5c2VyID0gdGhpcy5jb250ZXh0LmNyZWF0ZUFuYWx5c2VyKCk7XG4gICAgdGhpcy5hbmFseXNlci5mZnRTaXplID0gMjA0ODtcbiAgICB0aGlzLmJ1ZmZlckxlbmd0aCA9IHRoaXMuYW5hbHlzZXIuZnJlcXVlbmN5QmluQ291bnQ7XG4gICAgdGhpcy5kYXRhQXJyYXkgPSBuZXcgVWludDhBcnJheSh0aGlzLmJ1ZmZlckxlbmd0aCk7XG5cbiAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG5cbiAgICB0aGlzLnNvdXJjZSA9IGZhbHNlO1xuXG4gICAgdGhpcy5pbml0KCk7XG5cbiAgfVxuXG4gIGJ1aWxkRnJhbWUoKSB7XG4gICAgdGhpcy5jYW52YXMgPSBuZXcgZG9tLlNtYXJ0Q2FudmFzKHRoaXMucGFyZW50KTtcbiAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLmNhbnZhcy5lbGVtZW50O1xuICB9XG5cbiAgc2l6ZUludGVyZmFjZSgpIHtcbiAgICB0aGlzLmNhbnZhcy5yZXNpemUodGhpcy53aWR0aCx0aGlzLmhlaWdodCk7XG4gIH1cblxuICBjb2xvckludGVyZmFjZSgpIHtcbiAgICB0aGlzLmNhbnZhcy5lbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHRoaXMuY29sb3JzLmZpbGw7XG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICBpZiAodGhpcy5hY3RpdmUpIHtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnJlbmRlci5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICB0aGlzLmFuYWx5c2VyLmdldEJ5dGVGcmVxdWVuY3lEYXRhKHRoaXMuZGF0YUFycmF5KTtcblxuICAgIHRoaXMuY2FudmFzLmNvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5jb2xvcnMuZmlsbDtcbiAgICB0aGlzLmNhbnZhcy5jb250ZXh0LmZpbGxSZWN0KDAsIDAsIHRoaXMuY2FudmFzLmVsZW1lbnQud2lkdGgsIHRoaXMuY2FudmFzLmVsZW1lbnQuaGVpZ2h0KTtcblxuICAgIGlmICh0aGlzLnNvdXJjZSAmJiB0aGlzLmRhdGFBcnJheSkge1xuXG4gICAgICAvL2NvbnNvbGUubG9nKHRoaXMuZGF0YUFycmF5KTtcblxuICAgICAgbGV0IGJhcldpZHRoID0gKHRoaXMuY2FudmFzLmVsZW1lbnQud2lkdGggLyB0aGlzLmJ1ZmZlckxlbmd0aCk7XG4gICAgICBsZXQgYmFySGVpZ2h0O1xuICAgICAgbGV0IHggPSAwO1xuXG4gICAgICBsZXQgZGVmaW5pdGlvbiA9IHRoaXMuY2FudmFzLmVsZW1lbnQud2lkdGgvNTA7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5idWZmZXJMZW5ndGg7IGkgPSBpK2RlZmluaXRpb24pIHtcbiAgICAgICAgYmFySGVpZ2h0ID0gTWF0aC5tYXguYXBwbHkobnVsbCwgdGhpcy5kYXRhQXJyYXkuc3ViYXJyYXkoaSxpK2RlZmluaXRpb24pKTtcbiAgICAgICAgYmFySGVpZ2h0IC89IDI1NTtcbiAgICAgICAgYmFySGVpZ2h0ICo9IHRoaXMuY2FudmFzLmVsZW1lbnQuaGVpZ2h0O1xuXG4gICAgICAgIHRoaXMuY2FudmFzLmNvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5jb2xvcnMuYWNjZW50O1xuICAgICAgICB0aGlzLmNhbnZhcy5jb250ZXh0LmZpbGxSZWN0KHgsdGhpcy5jYW52YXMuZWxlbWVudC5oZWlnaHQtYmFySGVpZ2h0LGJhcldpZHRoKmRlZmluaXRpb24sYmFySGVpZ2h0KTtcblxuICAgICAgICB4ICs9IChiYXJXaWR0aCpkZWZpbml0aW9uKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgRXF1aXZhbGVudCB0byBcInBhdGNoaW5nIGluXCIgYW4gYXVkaW8gbm9kZSB0byB2aXN1YWxpemUuIE5PVEU6IFlvdSBjYW5ub3QgY29ubmVjdCBhdWRpbyBub2RlcyBhY3Jvc3MgdHdvIGRpZmZlcmVudCBhdWRpbyBjb250ZXh0cy4gTmV4dXNVSSBydW5zIGl0cyBhdWRpbyBhbmFseXNpcyBvbiBpdHMgb3duIGF1ZGlvIGNvbnRleHQsIE5leHVzLmNvbnRleHQuIElmIHRoZSBhdWRpbyBub2RlIHlvdSBhcmUgdmlzdWFsaXppbmcgaXMgY3JlYXRlZCBvbiBhIGRpZmZlcmVudCBhdWRpbyBjb250ZXh0LCB5b3Ugd2lsbCBuZWVkIHRvIHRlbGwgTmV4dXNVSSB0byB1c2UgdGhhdCBjb250ZXh0IGluc3RlYWQ6IGkuZS4gTmV4dXMuY29udGV4dCA9IFlvdXJBdWRpb0NvbnRleHROYW1lLiBGb3IgZXhhbXBsZSwgaW4gVG9uZUpTIHByb2plY3RzLCB0aGUgbGluZSB3b3VsZCBiZTogTmV4dXMuY29udGV4dCA9IFRvbmUuY29udGV4dCAuIFdlIHJlY29tbWVuZCB0aGF0IHlvdSB3cml0ZSB0aGF0IGxpbmUgb2YgY29kZSBvbmx5IG9uY2UgYXQgdGhlIGJlZ2lubmluZyBvZiB5b3VyIHByb2plY3QuXG4gIEBwYXJhbSBub2RlIHtBdWRpb05vZGV9IFRoZSBhdWRpbyBub2RlIHRvIHZpc3VhbGl6ZVxuICBAZXhhbXBsZSBOZXh1cy5jb250ZXh0ID0gVG9uZS5jb250ZXh0IC8vIG9yIGFub3RoZXIgYXVkaW8gY29udGV4dCB5b3UgaGF2ZSBjcmVhdGVkXG4gIHNwZWN0cm9ncmFtLmNvbm5lY3QoIFRvbmUuTWFzdGVyICk7XG4gICovXG4gIGNvbm5lY3Qobm9kZSkge1xuICAgIGlmICh0aGlzLnNvdXJjZSkge1xuICAgICAgdGhpcy5kaXNjb25uZWN0KCk7XG4gICAgfVxuICAgIHRoaXMuc291cmNlID0gbm9kZTtcbiAgICB0aGlzLnNvdXJjZS5jb25uZWN0KHRoaXMuYW5hbHlzZXIpO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICAvKipcbiAgU3RvcCB2aXN1YWxpemluZyB0aGUgc291cmNlIG5vZGUgYW5kIGRpc2Nvbm5lY3QgaXQuXG4gICovXG4gIGRpc2Nvbm5lY3QoKSB7XG4gICAgdGhpcy5zb3VyY2UuZGlzY29ubmVjdCh0aGlzLmFuYWx5c2VyKTtcbiAgICB0aGlzLnNvdXJjZSA9IG51bGw7XG4gIH1cblxuICBjbGljaygpIHtcbiAgICB0aGlzLmFjdGl2ZSA9ICF0aGlzLmFjdGl2ZTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgY3VzdG9tRGVzdHJveSgpIHtcbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vanNoaW50LWxvYWRlciEuL2xpYi9pbnRlcmZhY2VzL3NwZWN0cm9ncmFtLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5sZXQgZG9tID0gcmVxdWlyZSgnLi4vdXRpbC9kb20nKTtcbmxldCBtYXRoID0gcmVxdWlyZSgnLi4vdXRpbC9tYXRoJyk7XG5sZXQgSW50ZXJmYWNlID0gcmVxdWlyZSgnLi4vY29yZS9pbnRlcmZhY2UnKTtcblxuXG4vKipcbiogTWV0ZXJcbipcbiogQGRlc2NyaXB0aW9uIFN0ZXJlbyBkZWNpYmVsIG1ldGVyXG4qXG4qIEBkZW1vIDxzcGFuIG5leHVzLXVpPVwibWV0ZXJcIj48L3NwYW4+XG4qXG4qIEBleGFtcGxlXG4qIHZhciBtZXRlciA9IG5ldyBOZXh1cy5NZXRlcignI3RhcmdldCcpXG4qXG4qIEBleGFtcGxlXG4qIHZhciBtZXRlciA9IG5ldyBOZXh1cy5NZXRlcignI3RhcmdldCcse1xuKiAgIHNpemU6IFs3NSw3NV1cbiogfSlcbipcbiogQG91dHB1dFxuKiAmbmJzcDtcbiogTm8gZXZlbnRzXG4qXG4qL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXRlciBleHRlbmRzIEludGVyZmFjZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICBsZXQgb3B0aW9ucyA9IFsnc2NhbGUnLCd2YWx1ZSddO1xuXG4gICAgbGV0IGRlZmF1bHRzID0ge1xuICAgICAgJ3NpemUnOiBbMzAsMTAwXVxuICAgIH07XG5cbiAgICBzdXBlcihhcmd1bWVudHMsb3B0aW9ucyxkZWZhdWx0cyk7XG5cbiAgICB0aGlzLmNvbnRleHQgPSBOZXh1cy5jb250ZXh0OyAvLyBqc2hpbnQgaWdub3JlOmxpbmVcblxuICAgIHRoaXMuY2hhbm5lbHMgPSAyO1xuXG4gICAgdGhpcy5zcGxpdHRlciA9IHRoaXMuY29udGV4dC5jcmVhdGVDaGFubmVsU3BsaXR0ZXIoIHRoaXMuY2hhbm5lbHMgKTtcblxuICAgIHRoaXMuYW5hbHlzZXJzID0gW107XG5cbiAgICBmb3IgKGxldCBpPTA7IGk8dGhpcy5jaGFubmVsczsgaSsrKSB7XG4gICAgICBsZXQgYW5hbHlzZXIgPSB0aGlzLmNvbnRleHQuY3JlYXRlQW5hbHlzZXIoKTtcbiAgICAgIHRoaXMuc3BsaXR0ZXIuY29ubmVjdChhbmFseXNlcixpKTtcbiAgICAgIGFuYWx5c2VyLmZmdFNpemUgPSAxMDI0O1xuICAgICAgYW5hbHlzZXIuc21vb3RoaW5nVGltZUNvbnN0YW50ID0gMTtcbiAgICAgIHRoaXMuYW5hbHlzZXJzLnB1c2goIGFuYWx5c2VyICk7XG4gICAgfVxuICAgIHRoaXMuYnVmZmVyTGVuZ3RoID0gdGhpcy5hbmFseXNlcnNbMF0uZnJlcXVlbmN5QmluQ291bnQ7XG4gICAgdGhpcy5kYXRhQXJyYXkgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMuYnVmZmVyTGVuZ3RoKTtcblxuLypcbiAgICAvLyBhZGQgbGluZWFyIGdyYWRpZW50XG4gICAgdmFyIGdyZCA9IGNhbnZhc0N0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCAwLCAwLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAvLyBsaWdodCBibHVlXG4gICAgZ3JkLmFkZENvbG9yU3RvcCgwLCAnIzAwMCcpO1xuICAgIGdyZC5hZGRDb2xvclN0b3AoMC4yLCAnI2JiYicpO1xuICAgIGdyZC5hZGRDb2xvclN0b3AoMC40LCAnI2QxOCcpO1xuICAgIC8vIGRhcmsgYmx1ZVxuICAgIGdyZC5hZGRDb2xvclN0b3AoMSwgJyNkMTgnKTtcbiAgICBjYW52YXNDdHguZmlsbFN0eWxlID0gZ3JkOyAqL1xuXG4gICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuXG4gICAgdGhpcy5kYiA9IC1JbmZpbml0eTtcblxuICAgIHRoaXMuaW5pdCgpO1xuXG4gICAgdGhpcy5tZXRlcldpZHRoID0gdGhpcy5jYW52YXMuZWxlbWVudC53aWR0aC90aGlzLmNoYW5uZWxzO1xuXG4gICAgdGhpcy5yZW5kZXIoKTtcblxuICB9XG5cbiAgYnVpbGRGcmFtZSgpIHtcbiAgICB0aGlzLmNhbnZhcyA9IG5ldyBkb20uU21hcnRDYW52YXModGhpcy5wYXJlbnQpO1xuICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuY2FudmFzLmVsZW1lbnQ7XG4gIH1cblxuICBzaXplSW50ZXJmYWNlKCkge1xuICAgIHRoaXMuY2FudmFzLnJlc2l6ZSh0aGlzLndpZHRoLHRoaXMuaGVpZ2h0KTtcbiAgfVxuXG4gIGNvbG9ySW50ZXJmYWNlKCkge1xuICAgIHRoaXMuY2FudmFzLmVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gdGhpcy5jb2xvcnMuZmlsbDtcbiAgfVxuXG4gIHJlbmRlcigpIHtcblxuICAgIGlmICh0aGlzLmFjdGl2ZSkge1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMucmVuZGVyLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIHRoaXMuY2FudmFzLmNvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5jb2xvcnMuZmlsbDtcbiAgICB0aGlzLmNhbnZhcy5jb250ZXh0LmZpbGxSZWN0KDAsIDAsIHRoaXMuY2FudmFzLmVsZW1lbnQud2lkdGggLCB0aGlzLmNhbnZhcy5lbGVtZW50LmhlaWdodCk7XG5cbiAgICBmb3IgKGxldCBpPTA7aTx0aGlzLmFuYWx5c2Vycy5sZW5ndGg7aSsrKSB7XG5cbiAgICAgIGlmICh0aGlzLnNvdXJjZSkge1xuXG4gICAgICAgIHRoaXMuYW5hbHlzZXJzW2ldLmdldEZsb2F0VGltZURvbWFpbkRhdGEodGhpcy5kYXRhQXJyYXkpO1xuXG4gICAgICAgIGxldCBybXMgPSAwO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kYXRhQXJyYXkubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgIHJtcyArPSAodGhpcy5kYXRhQXJyYXlbaV0gKiB0aGlzLmRhdGFBcnJheVtpXSk7XG4gICAgICAgIH1cblxuICAgICAgICBybXMgPSBNYXRoLnNxcnQocm1zIC8gdGhpcy5kYXRhQXJyYXkubGVuZ3RoKTtcblxuICAgICAgICB0aGlzLmRiID0gMjAgKiBNYXRoLmxvZzEwKHJtcyk7XG5cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5kYiA+IC0yMDAgJiYgdGhpcy5kYiAhPT0gLUluZmluaXR5KSB7XG4gICAgICAgIHRoaXMuZGIgLT0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGIgPSAtSW5maW5pdHk7XG4gICAgICB9XG5cblxuICAgICAgLy9jb25zb2xlLmxvZyhkYilcblxuICAgICAgaWYgKHRoaXMuZGIgPiAtNzApIHtcblxuICAgICAgICBsZXQgbGluZWFyID0gbWF0aC5ub3JtYWxpemUodGhpcy5kYiwtNzAsNSk7XG4gICAgICAgIGxldCBleHAgPSBsaW5lYXIgKiBsaW5lYXI7XG4gICAgICAgIGxldCB5ID0gbWF0aC5zY2FsZShleHAsMCwxLHRoaXMuZWxlbWVudC5oZWlnaHQsMCk7XG5cbiAgICAgICAgdGhpcy5jYW52YXMuY29udGV4dC5maWxsU3R5bGUgPSB0aGlzLmNvbG9ycy5hY2NlbnQ7XG4gICAgICAgIHRoaXMuY2FudmFzLmNvbnRleHQuZmlsbFJlY3QodGhpcy5tZXRlcldpZHRoKmkseSx0aGlzLm1ldGVyV2lkdGgsdGhpcy5jYW52YXMuZWxlbWVudC5oZWlnaHQgLSB5KTtcblxuICAgICAgICAvL2NvbnNvbGUubG9nKFwicmVuZGVyaW5nLi4uXCIpXG5cbiAgICAgIH1cblxuICAgIH1cblxuICB9XG5cbiAgLyoqXG4gIEVxdWl2YWxlbnQgdG8gXCJwYXRjaGluZyBpblwiIGFuIGF1ZGlvIG5vZGUgdG8gdmlzdWFsaXplLiBOT1RFOiBZb3UgY2Fubm90IGNvbm5lY3QgYXVkaW8gbm9kZXMgYWNyb3NzIHR3byBkaWZmZXJlbnQgYXVkaW8gY29udGV4dHMuIE5leHVzVUkgcnVucyBpdHMgYXVkaW8gYW5hbHlzaXMgb24gaXRzIG93biBhdWRpbyBjb250ZXh0LCBOZXh1cy5jb250ZXh0LiBJZiB0aGUgYXVkaW8gbm9kZSB5b3UgYXJlIHZpc3VhbGl6aW5nIGlzIGNyZWF0ZWQgb24gYSBkaWZmZXJlbnQgYXVkaW8gY29udGV4dCwgeW91IHdpbGwgbmVlZCB0byB0ZWxsIE5leHVzVUkgdG8gdXNlIHRoYXQgY29udGV4dCBpbnN0ZWFkOiBpLmUuIE5leHVzLmNvbnRleHQgPSBZb3VyQXVkaW9Db250ZXh0TmFtZS4gRm9yIGV4YW1wbGUsIGluIFRvbmVKUyBwcm9qZWN0cywgdGhlIGxpbmUgd291bGQgYmU6IE5leHVzLmNvbnRleHQgPSBUb25lLmNvbnRleHQgLiBXZSByZWNvbW1lbmQgdGhhdCB5b3Ugd3JpdGUgdGhhdCBsaW5lIG9mIGNvZGUgb25seSBvbmNlIGF0IHRoZSBiZWdpbm5pbmcgb2YgeW91ciBwcm9qZWN0LlxuICBAcGFyYW0gbm9kZSB7QXVkaW9Ob2RlfSBUaGUgYXVkaW8gbm9kZSB0byB2aXN1YWxpemVcbiAgQHBhcmFtIGNoYW5uZWxzIHtudW1iZXJ9IChvcHRpb25hbCkgVGhlIG51bWJlciBvZiBjaGFubmVscyBpbiB0aGUgc291cmNlIG5vZGUgdG8gd2F0Y2guIElmIG5vdCBzcGVjaWZpZWQsIHRoZSBpbnRlcmZhY2Ugd2lsbCBsb29rIGZvciBhIC5jaGFubmVsQ291bnQgcHJvcGVydHkgb24gdGhlIGlucHV0IG5vZGUuIElmIGl0IGRvZXMgbm90IGV4aXN0LCB0aGUgaW50ZXJmYWNlIHdpbGwgZGVmYXVsdCB0byAxIGNoYW5uZWwuXG4gIEBleGFtcGxlIE5leHVzLmNvbnRleHQgPSBUb25lLmNvbnRleHQgLy8gb3IgYW5vdGhlciBhdWRpbyBjb250ZXh0IHlvdSBoYXZlIGNyZWF0ZWRcbiAgbWV0ZXIuY29ubmVjdCggVG9uZS5NYXN0ZXIsIDIgKTtcbiAgKi9cblxuICBjb25uZWN0KG5vZGUsY2hhbm5lbHMpIHtcbiAgICBpZiAodGhpcy5zb3VyY2UpIHtcbiAgICAgIHRoaXMuZGlzY29ubmVjdCgpO1xuICAgIH1cbiAgICAvL3RoaXMuZHVtbXkuZGlzY29ubmVjdCh0aGlzLnNwbGl0dGVyKTtcblxuICAgIGlmIChjaGFubmVscykge1xuICAgICAgdGhpcy5jaGFubmVscyA9IGNoYW5uZWxzO1xuICAgIH0gZWxzZSBpZiAobm9kZS5jaGFubmVsQ291bnQpIHtcbiAgICAgIHRoaXMuY2hhbm5lbHMgPSBub2RlLmNoYW5uZWxDb3VudDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jaGFubmVscyA9IDI7XG4gICAgfVxuICAgIHRoaXMubWV0ZXJXaWR0aCA9IHRoaXMuY2FudmFzLmVsZW1lbnQud2lkdGgvdGhpcy5jaGFubmVscztcblxuICAgIHRoaXMuc291cmNlID0gbm9kZTtcbiAgICB0aGlzLnNvdXJjZS5jb25uZWN0KHRoaXMuc3BsaXR0ZXIpO1xuXG4gIC8vICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgLyoqXG4gIFN0b3AgdmlzdWFsaXppbmcgdGhlIHNvdXJjZSBub2RlIGFuZCBkaXNjb25uZWN0IGl0LlxuICAqL1xuICBkaXNjb25uZWN0KCkge1xuXG4gICAgdGhpcy5zb3VyY2UuZGlzY29ubmVjdCh0aGlzLnNwbGl0dGVyKTtcbiAgICB0aGlzLnNvdXJjZSA9IGZhbHNlO1xuICAvLyAgdGhpcy5kdW1teS5jb25uZWN0KHRoaXMuc3BsaXR0ZXIpO1xuICAgIHRoaXMubWV0ZXJXaWR0aCA9IHRoaXMuY2FudmFzLmVsZW1lbnQud2lkdGgvdGhpcy5jaGFubmVscztcblxuICB9XG5cbiAgY2xpY2soKSB7XG4gICAgdGhpcy5hY3RpdmUgPSAhdGhpcy5hY3RpdmU7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIGN1c3RvbURlc3Ryb3koKSB7XG4gICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2pzaGludC1sb2FkZXIhLi9saWIvaW50ZXJmYWNlcy9tZXRlci5qcyIsIid1c2Ugc3RyaWN0JztcblxubGV0IGRvbSA9IHJlcXVpcmUoJy4uL3V0aWwvZG9tJyk7XG5sZXQgSW50ZXJmYWNlID0gcmVxdWlyZSgnLi4vY29yZS9pbnRlcmZhY2UnKTtcblxuLyoqXG4qIE9zY2lsbG9zY29wZVxuKlxuKiBAZGVzY3JpcHRpb24gVmlzdWFsaXplcyBhIHdhdmVmb3JtJ3Mgc3RyZWFtIG9mIHZhbHVlcy5cbipcbiogQGRlbW8gPHNwYW4gbmV4dXMtdWk9XCJvc2NpbGxvc2NvcGVcIj48L3NwYW4+XG4qXG4qIEBleGFtcGxlXG4qIHZhciBvc2NpbGxvc2NvcGUgPSBuZXcgTmV4dXMuT3NjaWxsb3Njb3BlKCcjdGFyZ2V0JylcbipcbiogQGV4YW1wbGVcbiogdmFyIG9zY2lsbG9zY29wZSA9IG5ldyBOZXh1cy5Pc2NpbGxvc2NvcGUoJyN0YXJnZXQnLHtcbiogICAnc2l6ZSc6IFszMDAsMTUwXVxuKiB9KVxuKlxuKiBAb3V0cHV0XG4qICZuYnNwO1xuKiBObyBldmVudHNcbipcbiovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9zY2lsbG9zY29wZSBleHRlbmRzIEludGVyZmFjZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICBsZXQgb3B0aW9ucyA9IFsnc2NhbGUnLCd2YWx1ZSddO1xuXG4gICAgbGV0IGRlZmF1bHRzID0ge1xuICAgICAgJ3NpemUnOiBbMzAwLDE1MF1cbiAgICB9O1xuXG4gICAgc3VwZXIoYXJndW1lbnRzLG9wdGlvbnMsZGVmYXVsdHMpO1xuXG4gICAgdGhpcy5jb250ZXh0ID0gTmV4dXMuY29udGV4dDsgLy8ganNoaW50IGlnbm9yZTpsaW5lXG5cbiAgICB0aGlzLmFuYWx5c2VyID0gdGhpcy5jb250ZXh0LmNyZWF0ZUFuYWx5c2VyKCk7XG4gICAgdGhpcy5hbmFseXNlci5mZnRTaXplID0gMjA0ODtcbiAgICB0aGlzLmJ1ZmZlckxlbmd0aCA9IHRoaXMuYW5hbHlzZXIuZnJlcXVlbmN5QmluQ291bnQ7XG4gICAgdGhpcy5kYXRhQXJyYXkgPSBuZXcgVWludDhBcnJheSh0aGlzLmJ1ZmZlckxlbmd0aCk7XG4gICAgdGhpcy5hbmFseXNlci5nZXRCeXRlVGltZURvbWFpbkRhdGEodGhpcy5kYXRhQXJyYXkpO1xuXG4gICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuXG4gICAgdGhpcy5zb3VyY2UgPSBmYWxzZTtcblxuICAgIHRoaXMuaW5pdCgpO1xuXG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIGJ1aWxkRnJhbWUoKSB7XG4gICAgdGhpcy5jYW52YXMgPSBuZXcgZG9tLlNtYXJ0Q2FudmFzKHRoaXMucGFyZW50KTtcbiAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLmNhbnZhcy5lbGVtZW50O1xuICB9XG5cbiAgc2l6ZUludGVyZmFjZSgpIHtcbiAgICB0aGlzLmNhbnZhcy5yZXNpemUodGhpcy53aWR0aCx0aGlzLmhlaWdodCk7XG4gIH1cblxuICBjb2xvckludGVyZmFjZSgpIHtcbiAgICB0aGlzLmNhbnZhcy5lbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHRoaXMuY29sb3JzLmZpbGw7XG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICBpZiAodGhpcy5hY3RpdmUpIHtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnJlbmRlci5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICB0aGlzLmFuYWx5c2VyLmdldEJ5dGVUaW1lRG9tYWluRGF0YSh0aGlzLmRhdGFBcnJheSk7XG5cbiAgICB0aGlzLmNhbnZhcy5jb250ZXh0LmZpbGxTdHlsZSA9IHRoaXMuY29sb3JzLmZpbGw7XG4gICAgdGhpcy5jYW52YXMuY29udGV4dC5maWxsUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy5lbGVtZW50LndpZHRoLCB0aGlzLmNhbnZhcy5lbGVtZW50LmhlaWdodCk7XG5cbiAgICB0aGlzLmNhbnZhcy5jb250ZXh0LmxpbmVXaWR0aCA9IH5+KHRoaXMuaGVpZ2h0IC8gMTAwICsgMik7XG4gICAgdGhpcy5jYW52YXMuY29udGV4dC5zdHJva2VTdHlsZSA9IHRoaXMuY29sb3JzLmFjY2VudDtcblxuICAgIHRoaXMuY2FudmFzLmNvbnRleHQuYmVnaW5QYXRoKCk7XG5cbiAgICBpZiAodGhpcy5zb3VyY2UpIHtcblxuICAgICAgdmFyIHNsaWNlV2lkdGggPSB0aGlzLmNhbnZhcy5lbGVtZW50LndpZHRoICogMS4wIC8gdGhpcy5idWZmZXJMZW5ndGg7XG4gICAgICB2YXIgeCA9IDA7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5idWZmZXJMZW5ndGg7IGkrKykge1xuXG4gICAgICAgIHZhciB2ID0gdGhpcy5kYXRhQXJyYXlbaV0gLyAxMjguMDtcbiAgICAgICAgdmFyIHkgPSB2ICogdGhpcy5jYW52YXMuZWxlbWVudC5oZWlnaHQgLyAyO1xuXG4gICAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5jYW52YXMuY29udGV4dC5tb3ZlVG8oeCwgeSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jYW52YXMuY29udGV4dC5saW5lVG8oeCwgeSk7XG4gICAgICAgIH1cblxuICAgICAgICB4ICs9IHNsaWNlV2lkdGg7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jYW52YXMuY29udGV4dC5tb3ZlVG8oMCwgdGhpcy5jYW52YXMuZWxlbWVudC5oZWlnaHQvMik7XG4gICAgICAgIHRoaXMuY2FudmFzLmNvbnRleHQubGluZVRvKHRoaXMuY2FudmFzLmVsZW1lbnQud2lkdGgsIHRoaXMuY2FudmFzLmVsZW1lbnQuaGVpZ2h0LzIpO1xuICAgIH1cblxuICAgIHRoaXMuY2FudmFzLmNvbnRleHQuc3Ryb2tlKCk7XG4gIH1cblxuICAvKipcbiAgRXF1aXZhbGVudCB0byBcInBhdGNoaW5nIGluXCIgYW4gYXVkaW8gbm9kZSB0byB2aXN1YWxpemUuIE5PVEU6IFlvdSBjYW5ub3QgY29ubmVjdCBhdWRpbyBub2RlcyBhY3Jvc3MgdHdvIGRpZmZlcmVudCBhdWRpbyBjb250ZXh0cy4gTmV4dXNVSSBydW5zIGl0cyBhdWRpbyBhbmFseXNpcyBvbiBpdHMgb3duIGF1ZGlvIGNvbnRleHQsIE5leHVzLmNvbnRleHQuIElmIHRoZSBhdWRpbyBub2RlIHlvdSBhcmUgdmlzdWFsaXppbmcgaXMgY3JlYXRlZCBvbiBhIGRpZmZlcmVudCBhdWRpbyBjb250ZXh0LCB5b3Ugd2lsbCBuZWVkIHRvIHRlbGwgTmV4dXNVSSB0byB1c2UgdGhhdCBjb250ZXh0IGluc3RlYWQ6IGkuZS4gTmV4dXMuY29udGV4dCA9IFlvdXJBdWRpb0NvbnRleHROYW1lLiBGb3IgZXhhbXBsZSwgaW4gVG9uZUpTIHByb2plY3RzLCB0aGUgbGluZSB3b3VsZCBiZTogTmV4dXMuY29udGV4dCA9IFRvbmUuY29udGV4dCAuIFdlIHJlY29tbWVuZCB0aGF0IHlvdSB3cml0ZSB0aGF0IGxpbmUgb2YgY29kZSBvbmx5IG9uY2UgYXQgdGhlIGJlZ2lubmluZyBvZiB5b3VyIHByb2plY3QuXG4gIEBwYXJhbSBub2RlIHtBdWRpb05vZGV9IFRoZSBhdWRpbyBub2RlIHRvIHZpc3VhbGl6ZVxuICBAZXhhbXBsZSBOZXh1cy5jb250ZXh0ID0gVG9uZS5jb250ZXh0IC8vIG9yIGFub3RoZXIgYXVkaW8gY29udGV4dCB5b3UgaGF2ZSBjcmVhdGVkXG4gIG9zY2lsbG9zY29wZS5jb25uZWN0KCBUb25lLk1hc3RlciApO1xuICAqL1xuXG4gIGNvbm5lY3Qobm9kZSkge1xuXG4gICAgaWYgKHRoaXMuc291cmNlKSB7XG4gICAgICB0aGlzLmRpc2Nvbm5lY3QoKTtcbiAgICB9XG5cbiAgICB0aGlzLnNvdXJjZSA9IG5vZGU7XG4gICAgdGhpcy5zb3VyY2UuY29ubmVjdCh0aGlzLmFuYWx5c2VyKTtcblxuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICAvKipcbiAgU3RvcCB2aXN1YWxpemluZyB0aGUgc291cmNlIG5vZGUgYW5kIGRpc2Nvbm5lY3QgaXQuXG4gICovXG4gIGRpc2Nvbm5lY3QoKSB7XG4gICAgaWYgKHRoaXMuc291cmNlKSB7XG4gICAgICB0aGlzLnNvdXJjZS5kaXNjb25uZWN0KHRoaXMuYW5hbHlzZXIpO1xuICAgICAgdGhpcy5zb3VyY2UgPSBudWxsO1xuICAgIH1cblxuICB9XG5cbiAgY2xpY2soKSB7XG4gICAgdGhpcy5hY3RpdmUgPSAhdGhpcy5hY3RpdmU7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIGN1c3RvbURlc3Ryb3koKSB7XG4gICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2pzaGludC1sb2FkZXIhLi9saWIvaW50ZXJmYWNlcy9vc2NpbGxvc2NvcGUuanMiLCIvKlxuTWFpbiBjb25jZXB0Olxuc3ludGggPSBuZXcgTmV4dXMuUmFjaygnZWxlbWVudElEJyk7XG5cblRyYW5zZm9ybSBhbGwgZWxlbWVudHMgaW5zaWRlIHRoZSBkaXZcbnN5bnRoLmVsZW1lbnRJRCB3aWxsIGhvbGQgdGhlIGZpcnN0IHNsaWRlciBpbnRlcmZhY2VcblxuMikgSW4gZnV0dXJlLCBwb3RlbnRpYWxseSB3cml0aW5nIGEgcmFjayB0aGF0IGlzIHJlLXVzYWJsZT9cbkNvdWxkIGFsc28gdGFrZSBKU09OXG5cbm5ldyBOZXh1cy5SYWNrKCcjdGFyZ2V0Jyx7XG4gIHByZTogKCkgPT4ge1xuICAgIGNyZWF0ZSBzb21lIGRpdnMgaGVyZSwgb3Igc29tZSBhdWRpbyBjb2RlXG4gIH0sXG4gIGludGVyZmFjZToge1xuICAgIHNsaWRlcjE6IE5leHVzLmFkZC5zbGlkZXIoe1xuICAgICAgdG9wOjEwLFxuICAgICAgbGVmdDoxMCxcbiAgICAgIHdpZHRoOjUwLFxuICAgICAgaGVpZ2h0OjEwMCxcbiAgICAgIG1pbjogMCxcbiAgICAgIG1heDogMTAwLFxuICAgICAgc3RlcDogMVxuICAgIH0pLFxuICAgIHdhdmUxOiBOZXh1cy5hZGQud2F2ZWZvcm0oe1xuICAgICAgZmlsZTogJy4vcGF0aC90by9maWxlLm1wMycsXG4gICAgICB3aWR0aDo1MDAsXG4gICAgICBoZWlnaHQ6MTAwLFxuICAgICAgbW9kZTogJ3JhbmdlJ1xuICAgIH0pXG4gIH0sXG4gIGluaXQ6ICgpID0+IHtcbiAgICAvLyBzb21lIGF1ZGlvIGluaXQgY29kZSBnb2VzIGhlcmUuLi5cbiAgfVxufSk7XG5cbiovXG5cbmltcG9ydCAqIGFzIHRyYW5zZm9ybSBmcm9tICcuLi91dGlsL3RyYW5zZm9ybSc7XG5pbXBvcnQgZG9tIGZyb20gJy4uL3V0aWwvZG9tJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFjayB7XG5cbiAgY29uc3RydWN0b3IodGFyZ2V0LCBzZXR0aW5ncykge1xuXG4gICAgdGhpcy5tZXRhID0ge307XG4gICAgdGhpcy5tZXRhLnRhcmdldCA9IHRhcmdldDtcbiAgICB0aGlzLm1ldGEucGFyZW50ID0gZG9tLnBhcnNlRWxlbWVudCh0YXJnZXQpOyAvLyBzaG91bGQgYmUgYSBnZW5lcmljIGZ1bmN0aW9uIGZvciBwYXJzaW5nIGEgJ3RhcmdldCcgYXJndW1lbnQgdGhhdCBjaGVja3MgZm9yIHN0cmluZy9ET00valFVRVJZXG4gICAgdGhpcy5tZXRhLmNvbG9ycyA9IHt9O1xuXG4gICAgaWYgKHNldHRpbmdzKSB7XG4gICAgICB0aGlzLm1ldGEuYXR0cmlidXRlID0gc2V0dGluZ3MuYXR0cmlidXRlIHx8ICduZXh1cy11aSc7XG4gICAgICB0aGlzLm1ldGEudGl0bGUgPSBzZXR0aW5ncy5uYW1lIHx8IGZhbHNlO1xuICAgICAgdGhpcy5tZXRhLm9wZW4gPSBzZXR0aW5ncy5vcGVuIHx8IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1ldGEuYXR0cmlidXRlID0gJ25leHVzLXVpJztcbiAgICAgIHRoaXMubWV0YS50aXRsZSA9IGZhbHNlO1xuICAgICAgdGhpcy5tZXRhLm9wZW4gPSBmYWxzZTtcbiAgICB9XG5cbiAgICBsZXQgZGVmYXVsdENvbG9ycyA9IE5leHVzLmNvbG9yczsgLy8ganNoaW50IGlnbm9yZTpsaW5lXG4gICAgdGhpcy5tZXRhLmNvbG9ycy5hY2NlbnQgPSBkZWZhdWx0Q29sb3JzLmFjY2VudDtcbiAgICB0aGlzLm1ldGEuY29sb3JzLmZpbGwgPSBkZWZhdWx0Q29sb3JzLmZpbGw7XG4gICAgdGhpcy5tZXRhLmNvbG9ycy5saWdodCA9IGRlZmF1bHRDb2xvcnMubGlnaHQ7XG4gICAgdGhpcy5tZXRhLmNvbG9ycy5kYXJrID0gZGVmYXVsdENvbG9ycy5kYXJrO1xuICAgIHRoaXMubWV0YS5jb2xvcnMubWVkaXVtTGlnaHQgPSBkZWZhdWx0Q29sb3JzLm1lZGl1bUxpZ2h0O1xuICAgIHRoaXMubWV0YS5jb2xvcnMubWVkaXVtRGFyayA9IGRlZmF1bHRDb2xvcnMubWVkaXVtRGFyaztcbiAgICB0aGlzLmJ1aWxkSW50ZXJmYWNlKCk7XG4gICAgdGhpcy5jb2xvckludGVyZmFjZSgpO1xuICB9XG5cbiAgYnVpbGRJbnRlcmZhY2UoKSB7XG4gICAgdGhpcy5tZXRhLnBhcmVudC5zdHlsZS5ib3hTaXppbmcgPSAnYm9yZGVyLWJveCc7XG4gICAgdGhpcy5tZXRhLnBhcmVudC5zdHlsZS51c2VyU2VsZWN0ID0gJ25vbmUnO1xuICAgIHRoaXMubWV0YS5wYXJlbnQuc3R5bGUubW96VXNlclNlbGVjdCA9ICdub25lJztcbiAgICB0aGlzLm1ldGEucGFyZW50LnN0eWxlLndlYmtpdFVzZXJTZWxlY3QgPSAnbm9uZSc7XG5cbiAgICB0aGlzLm1ldGEuY29udGVudHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIHdoaWxlICh0aGlzLm1ldGEucGFyZW50LmNoaWxkTm9kZXMubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLm1ldGEuY29udGVudHMuYXBwZW5kQ2hpbGQodGhpcy5tZXRhLnBhcmVudC5jaGlsZE5vZGVzWzBdKTtcbiAgICB9XG5cbiAgICB0aGlzLm1ldGEuY29udGVudHMuc3R5bGUucGFkZGluZyA9ICcwcHgnO1xuICAgIHRoaXMubWV0YS5jb250ZW50cy5zdHlsZS5ib3hTaXppbmcgPSAnYm9yZGVyLWJveCc7XG5cbiAgICBpZiAodGhpcy5tZXRhLnRpdGxlKSB7XG4gICAgICB0aGlzLm1ldGEudGl0bGVCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRoaXMubWV0YS50aXRsZUJhci5pbm5lckhUTUwgPSB0aGlzLm1ldGEudGl0bGU7XG4gICAgICB0aGlzLm1ldGEudGl0bGVCYXIuc3R5bGUuZm9udEZhbWlseSA9ICdhcmlhbCc7XG4gICAgICB0aGlzLm1ldGEudGl0bGVCYXIuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgICAgdGhpcy5tZXRhLnRpdGxlQmFyLnN0eWxlLmNvbG9yID0gJyM4ODgnO1xuICAgICAgdGhpcy5tZXRhLnRpdGxlQmFyLnN0eWxlLnBhZGRpbmcgPSAnN3B4JztcbiAgICAgIHRoaXMubWV0YS50aXRsZUJhci5zdHlsZS5mb250U2l6ZSA9ICcxMnB4JztcblxuICAgICAgdGhpcy5tZXRhLmJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGhpcy5tZXRhLmJ1dHRvbi5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICB0aGlzLm1ldGEuYnV0dG9uLnN0eWxlLnRvcCA9ICc1cHgnIDtcbiAgICAgIHRoaXMubWV0YS5idXR0b24uc3R5bGUucmlnaHQgPSAnNXB4JyA7XG4gICAgICB0aGlzLm1ldGEuYnV0dG9uLmlubmVySFRNTCA9ICctJztcbiAgICAgIHRoaXMubWV0YS5idXR0b24uc3R5bGUucGFkZGluZyA9ICcwcHggNXB4IDJweCc7XG4gICAgICB0aGlzLm1ldGEuYnV0dG9uLnN0eWxlLmxpbmVIZWlnaHQgPSAnMTJweCc7XG4gICAgICB0aGlzLm1ldGEuYnV0dG9uLnN0eWxlLmZvbnRTaXplID0gJzE1cHgnO1xuXG4gICAgICB0aGlzLm1ldGEuYnV0dG9uLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcblxuICAgICAgdGhpcy5tZXRhLmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XG4gICAgICAgIHRoaXMubWV0YS5idXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gdGhpcy5tZXRhLmNvbG9ycy5tZWRpdW1EYXJrO1xuICAgICAgfSk7XG4gICAgICB0aGlzLm1ldGEuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMubWV0YS5idXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gdGhpcy5tZXRhLmNvbG9ycy5tZWRpdW1MaWdodDtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5tZXRhLmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMubWV0YS5vcGVuKSB7XG4gICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG5cbiAgICAgIHRoaXMubWV0YS50aXRsZUJhci5hcHBlbmRDaGlsZCh0aGlzLm1ldGEuYnV0dG9uKTtcblxuICAgICAgdGhpcy5tZXRhLnBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLm1ldGEudGl0bGVCYXIpO1xuICAgIH1cbiAgICB0aGlzLm1ldGEucGFyZW50LmFwcGVuZENoaWxkKHRoaXMubWV0YS5jb250ZW50cyk7XG5cbiAgLy8gIHZhciB3aWR0aCA9IHRoaXMubWV0YS5wYXJlbnQuc3R5bGUud2lkdGggPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMubWV0YS5wYXJlbnQpLmdldFByb3BlcnR5VmFsdWUoJ3dpZHRoJyk7XG4vLyAgICB0aGlzLm1ldGEucGFyZW50LnN0eWxlLndpZHRoID0gd2lkdGg7XG5cbiAgICBsZXQgdWkgPSB0cmFuc2Zvcm0uc2VjdGlvbih0aGlzLm1ldGEudGFyZ2V0LCB0aGlzLm1ldGEuYXR0cmlidXRlKTtcbiAgICBmb3IgKHZhciBrZXkgaW4gdWkpIHtcbiAgICAgIHRoaXNba2V5XSA9IHVpW2tleV07XG4gICAgfVxuICB9XG5cbiAgY29sb3JJbnRlcmZhY2UoKSB7XG4gICAgaWYgKHRoaXMubWV0YS50aXRsZSkge1xuICAgICAgdGhpcy5tZXRhLmJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLm1ldGEuY29sb3JzLm1lZGl1bUxpZ2h0O1xuICAgICAgdGhpcy5tZXRhLmJ1dHRvbi5zdHlsZS5ib3JkZXIgPSAnc29saWQgMHB4ICcrdGhpcy5tZXRhLmNvbG9ycy5maWxsO1xuICAgICAgdGhpcy5tZXRhLnBhcmVudC5zdHlsZS5ib3JkZXIgPSAnc29saWQgMXB4ICcrdGhpcy5tZXRhLmNvbG9ycy5tZWRpdW1MaWdodDtcbiAgICAgIHRoaXMubWV0YS5wYXJlbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gdGhpcy5tZXRhLmNvbG9ycy5saWdodDtcbiAgICAgIHRoaXMubWV0YS50aXRsZUJhci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLm1ldGEuY29sb3JzLmZpbGw7XG4gICAgfVxuICB9XG5cbiAgc2hvdygpIHtcbiAgICB0aGlzLm1ldGEuY29udGVudHMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgdGhpcy5tZXRhLm9wZW4gPSB0cnVlO1xuICB9XG5cbiAgaGlkZSgpIHtcbiAgICB0aGlzLm1ldGEuY29udGVudHMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB0aGlzLm1ldGEub3BlbiA9IGZhbHNlO1xuICB9XG5cbiAgY29sb3JpemUodHlwZSxjb2xvcikge1xuICAgIGZvciAodmFyIGtleSBpbiB0aGlzKSB7XG4gICAgICBpZiAodGhpc1trZXldLmNvbG9yaXplKSB7XG4gICAgICAgIHRoaXNba2V5XS5jb2xvcml6ZSh0eXBlLGNvbG9yKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5tZXRhLmNvbG9yc1t0eXBlXSA9IGNvbG9yO1xuICAgIHRoaXMuY29sb3JJbnRlcmZhY2UoKTtcbiAgfVxuXG4gIGVtcHR5KCkge1xuICAgIGZvciAodmFyIGtleSBpbiB0aGlzKSB7XG4gICAgICBpZiAodGhpc1trZXldLmRlc3Ryb3kpIHtcbiAgICAgICAgdGhpc1trZXldLmRlc3Ryb3koKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9qc2hpbnQtbG9hZGVyIS4vbGliL2NvcmUvcmFjay5qcyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IGRvbSBmcm9tICcuLi91dGlsL2RvbSc7XG5pbXBvcnQgSW50ZXJmYWNlcyBmcm9tICcuLi9pbnRlcmZhY2VzLyc7XG5cbmxldCBjcmVhdGVJbnRlcmZhY2VJRCA9ICh3aWRnZXQsaW50ZXJmYWNlSURzKSA9PiB7XG4gIGxldCB0eXBlID0gd2lkZ2V0LnR5cGU7XG4gIGlmIChpbnRlcmZhY2VJRHNbdHlwZV0pIHtcbiAgICBpbnRlcmZhY2VJRHNbdHlwZV0rKztcbiAgfSBlbHNlIHtcbiAgICBpbnRlcmZhY2VJRHNbdHlwZV0gPSAxO1xuICB9XG4gIHJldHVybiAoIHR5cGUgKyBpbnRlcmZhY2VJRHNbdHlwZV0gKTtcbn07XG5cbmxldCBlbGVtZW50ID0gKGVsZW1lbnQsdHlwZSxvcHRpb25zKSA9PiB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnQuYXR0cmlidXRlcy5sZW5ndGg7IGkrKyl7XG4gICAgbGV0IGF0dCA9IGVsZW1lbnQuYXR0cmlidXRlc1tpXTtcbiAgLy8gIHRyeSB7XG4gIC8vICAgIG9wdGlvbnNbYXR0Lm5vZGVOYW1lXSA9IGV2YWwoYXR0Lm5vZGVWYWx1ZSk7XG4gIC8vICB9IGNhdGNoKGUpIHtcbiAgICAgIG9wdGlvbnNbYXR0Lm5vZGVOYW1lXSA9IGF0dC5ub2RlVmFsdWU7XG4gIC8vICB9XG4gIH1cbiAgdHlwZSA9IHR5cGVbMF0udG9VcHBlckNhc2UoKSArIHR5cGUuc2xpY2UoMSk7XG4gIGxldCB3aWRnZXQgPSBuZXcgSW50ZXJmYWNlc1t0eXBlXShlbGVtZW50LG9wdGlvbnMpO1xuICB3aWRnZXQuaWQgPSBlbGVtZW50LmlkO1xuICByZXR1cm4gd2lkZ2V0O1xufTtcblxuXG5sZXQgc2VjdGlvbiA9IChwYXJlbnQsa2V5d29yZCkgPT4ge1xuXG4gIGtleXdvcmQgPSBrZXl3b3JkIHx8ICduZXh1cy11aSc7XG5cbiAgbGV0IGludGVyZmFjZUlEcyA9IHt9O1xuXG4gIGxldCBjb250YWluZXIgPSBkb20ucGFyc2VFbGVtZW50KHBhcmVudCk7XG5cbiAgbGV0IHVpID0ge307XG5cbiAgbGV0IGh0bWxFbGVtZW50cyA9IGNvbnRhaW5lci5nZXRFbGVtZW50c0J5VGFnTmFtZSgnKicpO1xuICBsZXQgZWxlbWVudHMgPSBbXTtcbiAgZm9yIChsZXQgaT0wOyBpPGh0bWxFbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIGVsZW1lbnRzLnB1c2goaHRtbEVsZW1lbnRzW2ldKTtcbiAgfVxuICBmb3IgKGxldCBpPTA7aTxlbGVtZW50cy5sZW5ndGg7aSsrKSB7XG4gICAgbGV0IHR5cGUgPSBlbGVtZW50c1tpXS5nZXRBdHRyaWJ1dGUoa2V5d29yZCk7XG4gICAgaWYgKHR5cGUpIHtcbiAgICAgIGxldCBmb3JtYXR0ZWRUeXBlID0gZmFsc2U7XG4gICAgICBmb3IgKGxldCBrZXkgaW4gSW50ZXJmYWNlcykge1xuICAgICAgICBpZiAodHlwZS50b0xvd2VyQ2FzZSgpPT09a2V5LnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICBmb3JtYXR0ZWRUeXBlID0ga2V5O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyhmb3JtYXR0ZWRUeXBlKTtcbiAgICAgIGxldCB3aWRnZXQgPSBlbGVtZW50KGVsZW1lbnRzW2ldLGZvcm1hdHRlZFR5cGUpO1xuICAgICAgaWYgKHdpZGdldC5pZCkge1xuICAgICAgICB1aVt3aWRnZXQuaWRdID0gd2lkZ2V0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGlkID0gY3JlYXRlSW50ZXJmYWNlSUQod2lkZ2V0LGludGVyZmFjZUlEcyk7XG4gICAgICAgIHVpW2lkXSA9IHdpZGdldDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdWk7XG5cbn07XG5cbmxldCBhZGQgPSAodHlwZSxwYXJlbnQsb3B0aW9ucykgPT4ge1xuICBsZXQgdGFyZ2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBpZiAocGFyZW50KSB7XG4gICAgcGFyZW50ID0gZG9tLnBhcnNlRWxlbWVudChwYXJlbnQpO1xuICB9IGVsc2Uge1xuICAgIHBhcmVudCA9IGRvY3VtZW50LmJvZHk7XG4gIH1cbiAgcGFyZW50LmFwcGVuZENoaWxkKHRhcmdldCk7XG4gIG9wdGlvbnMudGFyZ2V0ID0gdGFyZ2V0O1xuICBpZiAob3B0aW9ucy5zaXplKSB7XG4gICAgdGFyZ2V0LnN0eWxlLndpZHRoID0gb3B0aW9ucy5zaXplWzBdICsgJ3B4JztcbiAgICB0YXJnZXQuc3R5bGUuaGVpZ2h0ID0gb3B0aW9ucy5zaXplWzFdICsgJ3B4JztcbiAgfVxuICByZXR1cm4gZWxlbWVudCh0YXJnZXQsdHlwZSxvcHRpb25zKTtcbn07XG5cbmV4cG9ydCB7IGVsZW1lbnQgfTtcbmV4cG9ydCB7IHNlY3Rpb24gfTtcbmV4cG9ydCB7IGFkZCB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9qc2hpbnQtbG9hZGVyIS4vbGliL3V0aWwvdHJhbnNmb3JtLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgbWF0aCBmcm9tICcuLi91dGlsL21hdGgnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUdW5lIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICBcdC8vIHRoZSBzY2FsZSBhcyByYXRpb3NcbiAgXHR0aGlzLnNjYWxlID0gW107XG5cbiAgXHQvLyBpL28gbW9kZXNcbiAgXHR0aGlzLm1vZGUgPSB7XG4gIFx0XHRvdXRwdXQ6ICdmcmVxdWVuY3knLFxuICBcdFx0aW5wdXQ6ICdzdGVwJ1xuICBcdH07XG5cbiAgXHQvLyBFVCBtYWpvclxuICBcdHRoaXMuZXRtYWpvciA9IFsgMjYxLjYyNTU4LFxuICBcdFx0MjkzLjY2NDc2NCxcbiAgXHRcdDMyOS42Mjc1NjMsXG4gIFx0XHQzNDkuMjI4MjQxLFxuICBcdFx0MzkxLjk5NTQyMixcbiAgXHRcdDQ0MCxcbiAgXHRcdDQ5My44ODMzMDEsXG4gIFx0XHQ1MjMuMjUxMTZcbiAgXHRdO1xuXG4gIFx0Ly8gUm9vdCBmcmVxdWVuY3kuXG4gIFx0dGhpcy5yb290ID0gbWF0aC5tdG9mKDYwKTsgICAgIC8vICogTWF0aC5wb3coMiwoNjAtNjkpLzEyKTtcblxuICAgIC8vIGRlZmF1bHQgaXMgYSBtYWpvciBzY2FsZVxuICAgIHRoaXMuY3JlYXRlU2NhbGUoMCwyLDQsNSw3LDksMTEpO1xuXG4gIH1cblxuICAvKiBSZXR1cm4gZGF0YSBpbiB0aGUgbW9kZSB5b3UgYXJlIGluIChmcmVxLCByYXRpbywgb3IgbWlkaSkgKi9cbiAgbm90ZShpbnB1dCxvY3RhdmUpIHtcblxuICBcdGxldCBuZXd2YWx1ZTtcblxuICBcdGlmICh0aGlzLm1vZGUub3V0cHV0ID09PSAnZnJlcXVlbmN5Jykge1xuICBcdFx0bmV3dmFsdWUgPSB0aGlzLmZyZXF1ZW5jeShpbnB1dCxvY3RhdmUpO1xuICBcdH0gZWxzZSBpZiAodGhpcy5tb2RlLm91dHB1dCA9PT0gJ3JhdGlvJykge1xuICBcdFx0bmV3dmFsdWUgPSB0aGlzLnJhdGlvKGlucHV0LG9jdGF2ZSk7XG4gIFx0fSBlbHNlIGlmICh0aGlzLm1vZGUub3V0cHV0ID09PSAnTUlESScpIHtcbiAgXHRcdG5ld3ZhbHVlID0gdGhpcy5NSURJKGlucHV0LG9jdGF2ZSk7XG4gIFx0fSBlbHNlIHtcbiAgXHRcdG5ld3ZhbHVlID0gdGhpcy5mcmVxdWVuY3koaW5wdXQsb2N0YXZlKTtcbiAgXHR9XG5cbiAgXHRyZXR1cm4gbmV3dmFsdWU7XG5cbiAgfVxuXG5cbiAgLyogUmV0dXJuIGZyZXEgZGF0YSAqL1xuICBmcmVxdWVuY3koc3RlcEluLCBvY3RhdmVJbikge1xuXG4gIFx0aWYgKHRoaXMubW9kZS5pbnB1dCA9PT0gJ21pZGknIHx8IHRoaXMubW9kZS5pbnB1dCA9PT0gJ01JREknICkge1xuICBcdFx0dGhpcy5zdGVwSW4gKz0gNjA7XG4gIFx0fVxuXG4gIFx0Ly8gd2hhdCBvY3RhdmUgaXMgb3VyIGlucHV0XG4gIFx0bGV0IG9jdGF2ZSA9IE1hdGguZmxvb3Ioc3RlcEluL3RoaXMuc2NhbGUubGVuZ3RoKTtcblxuICBcdGlmIChvY3RhdmVJbikge1xuICBcdFx0b2N0YXZlICs9IG9jdGF2ZUluO1xuICBcdH1cblxuICBcdC8vIHdoaWNoIHNjYWxlIGRlZ3JlZSAoMCAtIHNjYWxlIGxlbmd0aCkgaXMgb3VyIGlucHV0XG4gIFx0bGV0IHNjYWxlRGVncmVlID0gc3RlcEluICUgdGhpcy5zY2FsZS5sZW5ndGg7XG5cbiAgXHR3aGlsZSAoc2NhbGVEZWdyZWUgPCAwKSB7XG4gIFx0XHRzY2FsZURlZ3JlZSArPSB0aGlzLnNjYWxlLmxlbmd0aDtcbiAgXHR9XG5cbiAgICBsZXQgcmF0aW8gPSB0aGlzLnNjYWxlW3NjYWxlRGVncmVlXTtcblxuICBcdGxldCBmcmVxID0gdGhpcy5yb290ICogcmF0aW87XG5cbiAgXHRmcmVxID0gZnJlcSooTWF0aC5wb3coMixvY3RhdmUpKTtcblxuICBcdC8vIHRydW5jYXRlIGlycmF0aW9uYWwgbnVtYmVyc1xuICBcdGZyZXEgPSBNYXRoLmZsb29yKGZyZXEqMTAwMDAwMDAwMDAwKS8xMDAwMDAwMDAwMDA7XG5cbiAgXHRyZXR1cm4gZnJlcTtcblxuICB9XG5cbiAgLyogRm9yY2UgcmV0dXJuIHJhdGlvIGRhdGEgKi9cblxuICByYXRpbyhzdGVwSW4sIG9jdGF2ZUluKSB7XG5cbiAgXHRpZiAodGhpcy5tb2RlLmlucHV0ID09PSAnbWlkaScgfHwgdGhpcy5tb2RlLmlucHV0ID09PSAnTUlESScgKSB7XG4gIFx0XHR0aGlzLnN0ZXBJbiArPSA2MDtcbiAgXHR9XG5cbiAgXHQvLyB3aGF0IG9jdGF2ZSBpcyBvdXIgaW5wdXRcbiAgXHRsZXQgb2N0YXZlID0gTWF0aC5mbG9vcihzdGVwSW4vdGhpcy5zY2FsZS5sZW5ndGgpO1xuXG4gIFx0aWYgKG9jdGF2ZUluKSB7XG4gIFx0XHRvY3RhdmUgKz0gb2N0YXZlSW47XG4gIFx0fVxuXG4gIFx0Ly8gd2hpY2ggc2NhbGUgZGVncmVlICgwIC0gc2NhbGUgbGVuZ3RoKSBpcyBvdXIgaW5wdXRcbiAgXHRsZXQgc2NhbGVEZWdyZWUgPSBzdGVwSW4gJSB0aGlzLnNjYWxlLmxlbmd0aDtcblxuICBcdC8vIHdoYXQgcmF0aW8gaXMgb3VyIGlucHV0IHRvIG91ciBrZXlcbiAgXHRsZXQgcmF0aW8gPSBNYXRoLnBvdygyLG9jdGF2ZSkqdGhpcy5zY2FsZVtzY2FsZURlZ3JlZV07XG5cbiAgXHRyYXRpbyA9IE1hdGguZmxvb3IocmF0aW8qMTAwMDAwMDAwMDAwKS8xMDAwMDAwMDAwMDA7XG5cbiAgXHRyZXR1cm4gcmF0aW87XG5cbiAgfVxuXG4gIC8qIEZvcmNlIHJldHVybiBhZGp1c3RlZCBNSURJIGRhdGEgKi9cblxuICBNSURJKHN0ZXBJbixvY3RhdmVJbikge1xuXG4gIFx0bGV0IG5ld3ZhbHVlID0gdGhpcy5mcmVxdWVuY3koc3RlcEluLG9jdGF2ZUluKTtcblxuICBcdGxldCBuID0gNjkgKyAxMipNYXRoLmxvZyhuZXd2YWx1ZS80NDApL01hdGgubG9nKDIpO1xuXG4gIFx0biA9IE1hdGguZmxvb3IobioxMDAwMDAwMDAwKS8xMDAwMDAwMDAwO1xuXG4gIFx0cmV0dXJuIG47XG5cbiAgfVxuXG4gIGNyZWF0ZVNjYWxlKCkge1xuICAgIGxldCBuZXdTY2FsZSA9IFtdO1xuICAgIGZvciAobGV0IGk9MDtpPGFyZ3VtZW50cy5sZW5ndGg7aSsrKSB7XG4gICAgICBuZXdTY2FsZS5wdXNoKCBtYXRoLm10b2YoIDYwICsgYXJndW1lbnRzW2ldICkgKTtcbiAgICB9XG4gICAgdGhpcy5sb2FkU2NhbGVGcm9tRnJlcXVlbmNpZXMobmV3U2NhbGUpO1xuICB9XG5cbiAgY3JlYXRlSklTY2FsZSgpIHtcbiAgICB0aGlzLnNjYWxlID0gW107XG4gICAgZm9yIChsZXQgaT0wO2k8YXJndW1lbnRzLmxlbmd0aDtpKyspIHtcbiAgICAgIHRoaXMuc2NhbGUucHVzaChhcmd1bWVudHNbaV0pO1xuICAgIH1cbiAgfVxuXG4gIGxvYWRTY2FsZUZyb21GcmVxdWVuY2llcyhmcmVxcykge1xuICAgIHRoaXMuc2NhbGUgPSBbXTtcbiAgICBmb3IgKGxldCBpPTA7aTxmcmVxcy5sZW5ndGgtMTtpKyspIHtcbiAgICAgIHRoaXMuc2NhbGUucHVzaChmcmVxc1tpXS9mcmVxc1swXSk7XG4gICAgfVxuICB9XG5cbiAgLyogTG9hZCBhIG5ldyBzY2FsZSAqL1xuXG4gIGxvYWRTY2FsZShuYW1lKXtcblxuICBcdC8qIGxvYWQgdGhlIHNjYWxlICovXG4gIFx0bGV0IGZyZXFzID0gdGhpcy5zY2FsZXNbbmFtZV0uZnJlcXVlbmNpZXM7XG4gICAgdGhpcy5sb2FkU2NhbGVGcm9tRnJlcXVlbmNpZXMoZnJlcXMpO1xuXG4gIH1cblxuICAvKiBTZWFyY2ggdGhlIG5hbWVzIG9mIHR1bmluZ3NcbiAgXHQgUmV0dXJucyBhbiBhcnJheSBvZiBuYW1lcyBvZiB0dW5pbmdzICovXG5cbiAgc2VhcmNoKGxldHRlcnMpIHtcbiAgXHRsZXQgcG9zc2libGUgPSBbXTtcbiAgXHRmb3IgKGxldCBrZXkgaW4gdGhpcy5zY2FsZXMpIHtcbiAgXHRcdGlmIChrZXkudG9Mb3dlckNhc2UoKS5pbmRleE9mKGxldHRlcnMudG9Mb3dlckNhc2UoKSkgIT09IC0xKSB7XG4gIFx0XHRcdHBvc3NpYmxlLnB1c2goa2V5KTtcbiAgXHRcdH1cbiAgXHR9XG4gIFx0cmV0dXJuIHBvc3NpYmxlO1xuICB9XG5cbiAgLyogUmV0dXJuIGEgY29sbGVjdGlvbiBvZiBub3RlcyBhcyBhbiBhcnJheSAqL1xuXG4gIGNob3JkKG1pZGlzKSB7XG4gIFx0bGV0IG91dHB1dCA9IFtdO1xuICBcdGZvciAobGV0IGk9MDtpPG1pZGlzLmxlbmd0aDtpKyspIHtcbiAgXHRcdG91dHB1dC5wdXNoKHRoaXMubm90ZShtaWRpc1tpXSkpO1xuICBcdH1cbiAgXHRyZXR1cm4gb3V0cHV0O1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vanNoaW50LWxvYWRlciEuL2xpYi90dW5pbmcvdHVuaW5nLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG4vL0Rpc2FibGUganNoaW50IHdhcm5pbmcgY29uY2VybmluZyB0cmFpbGluZyByZWd1bGFyIHBhcmFtc1xuLypqc2hpbnQgLVcxMzggKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFkaW8ge1xuICAgIC8vaWYgbm9uLWV4aXN0ZW50IGJ1dHRvbnMgYXJlIHN3aXRjaGVkLCB0aGV5IGFyZSBpZ25vcmVkXG5cbiAgICBjb25zdHJ1Y3RvcihsZW5ndGggPSAzLCAuLi5vblZhbHMpIHtcbiAgICAgICAgLy9lYWNoIG9wdGlvbmFsICdvblZhbHMnIGFyZ3VtZW50IHN3aXRjaGVzIG9uIHRoYXQgdmFsdWUgaW4gdGhlIFJhZGlvIGlmIGl0IGV4aXN0c1xuICAgICAgICAvL0luIHRoZSBleGFtcGxlIGJlbG93LCBhIDMtYnV0dG9uIHJhZGlvIGlzIGNyZWF0ZWQsIGluZGV4IDAgaXMgc3dpdGNoZWQgb24sIGluZGV4IDEgaXMgc3dpdGNoZWQgb24gdGhlbiB0aGVuIGF0dGVtcHRlZCBhZ2FpbiBwcm9kdWNpbmcgYW4gd2FybmluZywgYW5kIHRoZSBmaW5hbCBhcmd1bWVudCBwcm9kdWNlcyBhIHdhcm5pbmcgYmVjYXVzZSB0aGUgaW5kZXggdmFsdWUgZG9lcyBub3QgZXhpc3QuXG4gICAgICAgIC8vRXhhbXBsZTpcbiAgICAgICAgLy9gICByYWRpbyA9IG5ldyBSYWRpbygzLCAwLCAxLCAxLCAzKTtcbiAgICAgICAgLy/igKYgIFsxLDEsMF1cblxuICAgICAgICBpZiAobGVuZ3RoIDwgMCkgeyBsZW5ndGggPSAxOyB9XG5cbiAgICAgICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgICAgIHRoaXMub25WYWxzID0gb25WYWxzO1xuICAgICAgICB0aGlzLmFycmF5ID0gbmV3IEFycmF5KGxlbmd0aCkuZmlsbCgwKTtcblxuICAgICAgICBpZiAob25WYWxzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMub24oLi4ub25WYWxzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNlbGVjdCh2YWx1ZSkge1xuICAgICAgICB0aGlzLmFycmF5LmZpbGwoMCk7XG4gICAgICAgIHRoaXMuYXJyYXlbdmFsdWVdID0gMTtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJyYXk7XG4gICAgfVxuXG4gICAgZmxpcCguLi52YWx1ZXMpIHtcbiAgICAgICAgLy9mbGlwcyB0aGUgc3BlY2lmaWVkIHZhbHVlcy4gaWYgbm8gdmFsdWUgaXMgc3BlY2lmaWVkLCBmbGlwcyBhbGwgYnV0dG9uc1xuICAgICAgICBsZXQgYSA9IHRoaXMuYXJyYXk7XG4gICAgICAgIGlmICh2YWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdmFsdWVzLmZvckVhY2goZnVuY3Rpb24odikge1xuICAgICAgICAgICAgICAgIGlmICh2ID4gYS5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignV2FybmluZzogQW5vblJhZGlvWycgKyB2ICsgJ10gZG9lcyBub3QgZXhpc3QnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhW3ZdID0gKGFbdl0gPyAwIDogMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhLmZvckVhY2goZnVuY3Rpb24odiwgaSwgYXJyKSB7XG4gICAgICAgICAgICAgICAgYXJyW2ldID0gKHYgPyAwIDogMSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYTtcbiAgICB9XG5cbiAgICBvbiguLi52YWx1ZXMpIHtcbiAgICAgICAgLy9zd2l0Y2ggb24gdGhlIHNwZWNpZmllZCB2YWx1ZXMuIGlmIG5vIHZhbHVlIHNwZWNpZmllZCwgZmxpcHMgb24gYWxsIGJ1dHRvbnNcbiAgICAgICAgbGV0IGEgPSB0aGlzLmFycmF5O1xuICAgICAgICBpZiAodmFsdWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHZhbHVlcy5mb3JFYWNoKGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgICAgICAgICBpZiAodiA+IGEubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1dhcm5pbmc6IEFub25SYWRpb1snICsgdiArICddIGV4Y2VlZHMgc2l6ZSBvZiBvYmplY3QnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYVt2XSA9PT0gMSkgeyBjb25zb2xlLndhcm4oJ1dhcm5pbmc6IEFub25SYWRpb1snICsgdiArICddIHdhcyBhbHJlYWR5IG9uLicpOyB9XG4gICAgICAgICAgICAgICAgICAgIGFbdl0gPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYS5maWxsKDEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhO1xuICAgIH1cblxuICAgIG9mZiguLi52YWx1ZXMpIHtcbiAgICAgICAgLy9zd2l0Y2ggb2ZmIHRoZSBzcGVjaWZpZWQgdmFsdWVzLiBpZiBubyB2YWx1ZSBzcGVjaWZpZWQsIGZsaXBzIG9mZiBhbGwgYnV0dG9uc1xuICAgICAgICBsZXQgYSA9IHRoaXMuYXJyYXk7XG4gICAgICAgIGlmICh2YWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdmFsdWVzLmZvckVhY2goZnVuY3Rpb24odikge1xuICAgICAgICAgICAgICAgIGFbdl0gPSAwO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhLmZpbGwoMCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGE7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9qc2hpbnQtbG9hZGVyIS4vbGliL21vZGVscy9yYWRpby5qcyIsInZhciBXQUFDbG9jayA9IHJlcXVpcmUoJy4vbGliL1dBQUNsb2NrJylcblxubW9kdWxlLmV4cG9ydHMgPSBXQUFDbG9ja1xuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB3aW5kb3cuV0FBQ2xvY2sgPSBXQUFDbG9ja1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dhYWNsb2NrL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNCcm93c2VyID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKVxuXG52YXIgQ0xPQ0tfREVGQVVMVFMgPSB7XG4gIHRvbGVyYW5jZUxhdGU6IDAuMTAsXG4gIHRvbGVyYW5jZUVhcmx5OiAwLjAwMVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PSBFdmVudCA9PT09PT09PT09PT09PT09PT09PSAvL1xudmFyIEV2ZW50ID0gZnVuY3Rpb24oY2xvY2ssIGRlYWRsaW5lLCBmdW5jKSB7XG4gIHRoaXMuY2xvY2sgPSBjbG9ja1xuICB0aGlzLmZ1bmMgPSBmdW5jXG4gIHRoaXMuX2NsZWFyZWQgPSBmYWxzZSAvLyBGbGFnIHVzZWQgdG8gY2xlYXIgYW4gZXZlbnQgaW5zaWRlIGNhbGxiYWNrXG5cbiAgdGhpcy50b2xlcmFuY2VMYXRlID0gY2xvY2sudG9sZXJhbmNlTGF0ZVxuICB0aGlzLnRvbGVyYW5jZUVhcmx5ID0gY2xvY2sudG9sZXJhbmNlRWFybHlcbiAgdGhpcy5fbGF0ZXN0VGltZSA9IG51bGxcbiAgdGhpcy5fZWFybGllc3RUaW1lID0gbnVsbFxuICB0aGlzLmRlYWRsaW5lID0gbnVsbFxuICB0aGlzLnJlcGVhdFRpbWUgPSBudWxsXG5cbiAgdGhpcy5zY2hlZHVsZShkZWFkbGluZSlcbn1cblxuLy8gVW5zY2hlZHVsZXMgdGhlIGV2ZW50XG5FdmVudC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5jbG9jay5fcmVtb3ZlRXZlbnQodGhpcylcbiAgdGhpcy5fY2xlYXJlZCA9IHRydWVcbiAgcmV0dXJuIHRoaXNcbn1cblxuLy8gU2V0cyB0aGUgZXZlbnQgdG8gcmVwZWF0IGV2ZXJ5IGB0aW1lYCBzZWNvbmRzLlxuRXZlbnQucHJvdG90eXBlLnJlcGVhdCA9IGZ1bmN0aW9uKHRpbWUpIHtcbiAgaWYgKHRpbWUgPT09IDApXG4gICAgdGhyb3cgbmV3IEVycm9yKCdkZWxheSBjYW5ub3QgYmUgMCcpXG4gIHRoaXMucmVwZWF0VGltZSA9IHRpbWVcbiAgaWYgKCF0aGlzLmNsb2NrLl9oYXNFdmVudCh0aGlzKSlcbiAgICB0aGlzLnNjaGVkdWxlKHRoaXMuZGVhZGxpbmUgKyB0aGlzLnJlcGVhdFRpbWUpXG4gIHJldHVybiB0aGlzXG59XG5cbi8vIFNldHMgdGhlIHRpbWUgdG9sZXJhbmNlIG9mIHRoZSBldmVudC5cbi8vIFRoZSBldmVudCB3aWxsIGJlIGV4ZWN1dGVkIGluIHRoZSBpbnRlcnZhbCBgW2RlYWRsaW5lIC0gZWFybHksIGRlYWRsaW5lICsgbGF0ZV1gXG4vLyBJZiB0aGUgY2xvY2sgZmFpbHMgdG8gZXhlY3V0ZSB0aGUgZXZlbnQgaW4gdGltZSwgdGhlIGV2ZW50IHdpbGwgYmUgZHJvcHBlZC5cbkV2ZW50LnByb3RvdHlwZS50b2xlcmFuY2UgPSBmdW5jdGlvbih2YWx1ZXMpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZXMubGF0ZSA9PT0gJ251bWJlcicpXG4gICAgdGhpcy50b2xlcmFuY2VMYXRlID0gdmFsdWVzLmxhdGVcbiAgaWYgKHR5cGVvZiB2YWx1ZXMuZWFybHkgPT09ICdudW1iZXInKVxuICAgIHRoaXMudG9sZXJhbmNlRWFybHkgPSB2YWx1ZXMuZWFybHlcbiAgdGhpcy5fcmVmcmVzaEVhcmx5TGF0ZURhdGVzKClcbiAgaWYgKHRoaXMuY2xvY2suX2hhc0V2ZW50KHRoaXMpKSB7XG4gICAgdGhpcy5jbG9jay5fcmVtb3ZlRXZlbnQodGhpcylcbiAgICB0aGlzLmNsb2NrLl9pbnNlcnRFdmVudCh0aGlzKVxuICB9XG4gIHJldHVybiB0aGlzXG59XG5cbi8vIFJldHVybnMgdHJ1ZSBpZiB0aGUgZXZlbnQgaXMgcmVwZWF0ZWQsIGZhbHNlIG90aGVyd2lzZVxuRXZlbnQucHJvdG90eXBlLmlzUmVwZWF0ZWQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMucmVwZWF0VGltZSAhPT0gbnVsbCB9XG5cbi8vIFNjaGVkdWxlcyB0aGUgZXZlbnQgdG8gYmUgcmFuIGJlZm9yZSBgZGVhZGxpbmVgLlxuLy8gSWYgdGhlIHRpbWUgaXMgd2l0aGluIHRoZSBldmVudCB0b2xlcmFuY2UsIHdlIGhhbmRsZSB0aGUgZXZlbnQgaW1tZWRpYXRlbHkuXG4vLyBJZiB0aGUgZXZlbnQgd2FzIGFscmVhZHkgc2NoZWR1bGVkIGF0IGEgZGlmZmVyZW50IHRpbWUsIGl0IGlzIHJlc2NoZWR1bGVkLlxuRXZlbnQucHJvdG90eXBlLnNjaGVkdWxlID0gZnVuY3Rpb24oZGVhZGxpbmUpIHtcbiAgdGhpcy5fY2xlYXJlZCA9IGZhbHNlXG4gIHRoaXMuZGVhZGxpbmUgPSBkZWFkbGluZVxuICB0aGlzLl9yZWZyZXNoRWFybHlMYXRlRGF0ZXMoKVxuXG4gIGlmICh0aGlzLmNsb2NrLmNvbnRleHQuY3VycmVudFRpbWUgPj0gdGhpcy5fZWFybGllc3RUaW1lKSB7XG4gICAgdGhpcy5fZXhlY3V0ZSgpXG4gIFxuICB9IGVsc2UgaWYgKHRoaXMuY2xvY2suX2hhc0V2ZW50KHRoaXMpKSB7XG4gICAgdGhpcy5jbG9jay5fcmVtb3ZlRXZlbnQodGhpcylcbiAgICB0aGlzLmNsb2NrLl9pbnNlcnRFdmVudCh0aGlzKVxuICBcbiAgfSBlbHNlIHRoaXMuY2xvY2suX2luc2VydEV2ZW50KHRoaXMpXG59XG5cbkV2ZW50LnByb3RvdHlwZS50aW1lU3RyZXRjaCA9IGZ1bmN0aW9uKHRSZWYsIHJhdGlvKSB7XG4gIGlmICh0aGlzLmlzUmVwZWF0ZWQoKSlcbiAgICB0aGlzLnJlcGVhdFRpbWUgPSB0aGlzLnJlcGVhdFRpbWUgKiByYXRpb1xuXG4gIHZhciBkZWFkbGluZSA9IHRSZWYgKyByYXRpbyAqICh0aGlzLmRlYWRsaW5lIC0gdFJlZilcbiAgLy8gSWYgdGhlIGRlYWRsaW5lIGlzIHRvbyBjbG9zZSBvciBwYXN0LCBhbmQgdGhlIGV2ZW50IGhhcyBhIHJlcGVhdCxcbiAgLy8gd2UgY2FsY3VsYXRlIHRoZSBuZXh0IHJlcGVhdCBwb3NzaWJsZSBpbiB0aGUgc3RyZXRjaGVkIHNwYWNlLlxuICBpZiAodGhpcy5pc1JlcGVhdGVkKCkpIHtcbiAgICB3aGlsZSAodGhpcy5jbG9jay5jb250ZXh0LmN1cnJlbnRUaW1lID49IGRlYWRsaW5lIC0gdGhpcy50b2xlcmFuY2VFYXJseSlcbiAgICAgIGRlYWRsaW5lICs9IHRoaXMucmVwZWF0VGltZVxuICB9XG4gIHRoaXMuc2NoZWR1bGUoZGVhZGxpbmUpXG59XG5cbi8vIEV4ZWN1dGVzIHRoZSBldmVudFxuRXZlbnQucHJvdG90eXBlLl9leGVjdXRlID0gZnVuY3Rpb24oKSB7XG4gIGlmICh0aGlzLmNsb2NrLl9zdGFydGVkID09PSBmYWxzZSkgcmV0dXJuXG4gIHRoaXMuY2xvY2suX3JlbW92ZUV2ZW50KHRoaXMpXG5cbiAgaWYgKHRoaXMuY2xvY2suY29udGV4dC5jdXJyZW50VGltZSA8IHRoaXMuX2xhdGVzdFRpbWUpXG4gICAgdGhpcy5mdW5jKHRoaXMpXG4gIGVsc2Uge1xuICAgIGlmICh0aGlzLm9uZXhwaXJlZCkgdGhpcy5vbmV4cGlyZWQodGhpcylcbiAgICBjb25zb2xlLndhcm4oJ2V2ZW50IGV4cGlyZWQnKVxuICB9XG4gIC8vIEluIHRoZSBjYXNlIGBzY2hlZHVsZWAgaXMgY2FsbGVkIGluc2lkZSBgZnVuY2AsIHdlIG5lZWQgdG8gYXZvaWRcbiAgLy8gb3ZlcnJ3cml0aW5nIHdpdGggeWV0IGFub3RoZXIgYHNjaGVkdWxlYC5cbiAgaWYgKCF0aGlzLmNsb2NrLl9oYXNFdmVudCh0aGlzKSAmJiB0aGlzLmlzUmVwZWF0ZWQoKSAmJiAhdGhpcy5fY2xlYXJlZClcbiAgICB0aGlzLnNjaGVkdWxlKHRoaXMuZGVhZGxpbmUgKyB0aGlzLnJlcGVhdFRpbWUpIFxufVxuXG4vLyBVcGRhdGVzIGNhY2hlZCB0aW1lc1xuRXZlbnQucHJvdG90eXBlLl9yZWZyZXNoRWFybHlMYXRlRGF0ZXMgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fbGF0ZXN0VGltZSA9IHRoaXMuZGVhZGxpbmUgKyB0aGlzLnRvbGVyYW5jZUxhdGVcbiAgdGhpcy5fZWFybGllc3RUaW1lID0gdGhpcy5kZWFkbGluZSAtIHRoaXMudG9sZXJhbmNlRWFybHlcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT0gV0FBQ2xvY2sgPT09PT09PT09PT09PT09PT09PT0gLy9cbnZhciBXQUFDbG9jayA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oY29udGV4dCwgb3B0cykge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgb3B0cyA9IG9wdHMgfHwge31cbiAgdGhpcy50aWNrTWV0aG9kID0gb3B0cy50aWNrTWV0aG9kIHx8ICdTY3JpcHRQcm9jZXNzb3JOb2RlJ1xuICB0aGlzLnRvbGVyYW5jZUVhcmx5ID0gb3B0cy50b2xlcmFuY2VFYXJseSB8fCBDTE9DS19ERUZBVUxUUy50b2xlcmFuY2VFYXJseVxuICB0aGlzLnRvbGVyYW5jZUxhdGUgPSBvcHRzLnRvbGVyYW5jZUxhdGUgfHwgQ0xPQ0tfREVGQVVMVFMudG9sZXJhbmNlTGF0ZVxuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0XG4gIHRoaXMuX2V2ZW50cyA9IFtdXG4gIHRoaXMuX3N0YXJ0ZWQgPSBmYWxzZVxufVxuXG4vLyAtLS0tLS0tLS0tIFB1YmxpYyBBUEkgLS0tLS0tLS0tLSAvL1xuLy8gU2NoZWR1bGVzIGBmdW5jYCB0byBydW4gYWZ0ZXIgYGRlbGF5YCBzZWNvbmRzLlxuV0FBQ2xvY2sucHJvdG90eXBlLnNldFRpbWVvdXQgPSBmdW5jdGlvbihmdW5jLCBkZWxheSkge1xuICByZXR1cm4gdGhpcy5fY3JlYXRlRXZlbnQoZnVuYywgdGhpcy5fYWJzVGltZShkZWxheSkpXG59XG5cbi8vIFNjaGVkdWxlcyBgZnVuY2AgdG8gcnVuIGJlZm9yZSBgZGVhZGxpbmVgLlxuV0FBQ2xvY2sucHJvdG90eXBlLmNhbGxiYWNrQXRUaW1lID0gZnVuY3Rpb24oZnVuYywgZGVhZGxpbmUpIHtcbiAgcmV0dXJuIHRoaXMuX2NyZWF0ZUV2ZW50KGZ1bmMsIGRlYWRsaW5lKVxufVxuXG4vLyBTdHJldGNoZXMgYGRlYWRsaW5lYCBhbmQgYHJlcGVhdGAgb2YgYWxsIHNjaGVkdWxlZCBgZXZlbnRzYCBieSBgcmF0aW9gLCBrZWVwaW5nXG4vLyB0aGVpciByZWxhdGl2ZSBkaXN0YW5jZSB0byBgdFJlZmAuIEluIGZhY3QgdGhpcyBpcyBlcXVpdmFsZW50IHRvIGNoYW5naW5nIHRoZSB0ZW1wby5cbldBQUNsb2NrLnByb3RvdHlwZS50aW1lU3RyZXRjaCA9IGZ1bmN0aW9uKHRSZWYsIGV2ZW50cywgcmF0aW8pIHtcbiAgZXZlbnRzLmZvckVhY2goZnVuY3Rpb24oZXZlbnQpIHsgZXZlbnQudGltZVN0cmV0Y2godFJlZiwgcmF0aW8pIH0pXG4gIHJldHVybiBldmVudHNcbn1cblxuLy8gUmVtb3ZlcyBhbGwgc2NoZWR1bGVkIGV2ZW50cyBhbmQgc3RhcnRzIHRoZSBjbG9jayBcbldBQUNsb2NrLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uKCkge1xuICBpZiAodGhpcy5fc3RhcnRlZCA9PT0gZmFsc2UpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXNcbiAgICB0aGlzLl9zdGFydGVkID0gdHJ1ZVxuICAgIHRoaXMuX2V2ZW50cyA9IFtdXG5cbiAgICBpZiAodGhpcy50aWNrTWV0aG9kID09PSAnU2NyaXB0UHJvY2Vzc29yTm9kZScpIHtcbiAgICAgIHZhciBidWZmZXJTaXplID0gMjU2XG4gICAgICAvLyBXZSBoYXZlIHRvIGtlZXAgYSByZWZlcmVuY2UgdG8gdGhlIG5vZGUgdG8gYXZvaWQgZ2FyYmFnZSBjb2xsZWN0aW9uXG4gICAgICB0aGlzLl9jbG9ja05vZGUgPSB0aGlzLmNvbnRleHQuY3JlYXRlU2NyaXB0UHJvY2Vzc29yKGJ1ZmZlclNpemUsIDEsIDEpXG4gICAgICB0aGlzLl9jbG9ja05vZGUuY29ubmVjdCh0aGlzLmNvbnRleHQuZGVzdGluYXRpb24pXG4gICAgICB0aGlzLl9jbG9ja05vZGUub25hdWRpb3Byb2Nlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24oKSB7IHNlbGYuX3RpY2soKSB9KVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy50aWNrTWV0aG9kID09PSAnbWFudWFsJykgbnVsbCAvLyBfdGljayBpcyBjYWxsZWQgbWFudWFsbHlcblxuICAgIGVsc2UgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIHRpY2tNZXRob2QgJyArIHRoaXMudGlja01ldGhvZClcbiAgfVxufVxuXG4vLyBTdG9wcyB0aGUgY2xvY2tcbldBQUNsb2NrLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24oKSB7XG4gIGlmICh0aGlzLl9zdGFydGVkID09PSB0cnVlKSB7XG4gICAgdGhpcy5fc3RhcnRlZCA9IGZhbHNlXG4gICAgdGhpcy5fY2xvY2tOb2RlLmRpc2Nvbm5lY3QoKVxuICB9ICBcbn1cblxuLy8gLS0tLS0tLS0tLSBQcml2YXRlIC0tLS0tLS0tLS0gLy9cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyByYW4gcGVyaW9kaWNhbGx5LCBhbmQgYXQgZWFjaCB0aWNrIGl0IGV4ZWN1dGVzXG4vLyBldmVudHMgZm9yIHdoaWNoIGBjdXJyZW50VGltZWAgaXMgaW5jbHVkZWQgaW4gdGhlaXIgdG9sZXJhbmNlIGludGVydmFsLlxuV0FBQ2xvY2sucHJvdG90eXBlLl90aWNrID0gZnVuY3Rpb24oKSB7XG4gIHZhciBldmVudCA9IHRoaXMuX2V2ZW50cy5zaGlmdCgpXG5cbiAgd2hpbGUoZXZlbnQgJiYgZXZlbnQuX2VhcmxpZXN0VGltZSA8PSB0aGlzLmNvbnRleHQuY3VycmVudFRpbWUpIHtcbiAgICBldmVudC5fZXhlY3V0ZSgpXG4gICAgZXZlbnQgPSB0aGlzLl9ldmVudHMuc2hpZnQoKVxuICB9XG5cbiAgLy8gUHV0IGJhY2sgdGhlIGxhc3QgZXZlbnRcbiAgaWYoZXZlbnQpIHRoaXMuX2V2ZW50cy51bnNoaWZ0KGV2ZW50KVxufVxuXG4vLyBDcmVhdGVzIGFuIGV2ZW50IGFuZCBpbnNlcnQgaXQgdG8gdGhlIGxpc3RcbldBQUNsb2NrLnByb3RvdHlwZS5fY3JlYXRlRXZlbnQgPSBmdW5jdGlvbihmdW5jLCBkZWFkbGluZSkge1xuICByZXR1cm4gbmV3IEV2ZW50KHRoaXMsIGRlYWRsaW5lLCBmdW5jKVxufVxuXG4vLyBJbnNlcnRzIGFuIGV2ZW50IHRvIHRoZSBsaXN0XG5XQUFDbG9jay5wcm90b3R5cGUuX2luc2VydEV2ZW50ID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgdGhpcy5fZXZlbnRzLnNwbGljZSh0aGlzLl9pbmRleEJ5VGltZShldmVudC5fZWFybGllc3RUaW1lKSwgMCwgZXZlbnQpXG59XG5cbi8vIFJlbW92ZXMgYW4gZXZlbnQgZnJvbSB0aGUgbGlzdFxuV0FBQ2xvY2sucHJvdG90eXBlLl9yZW1vdmVFdmVudCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gIHZhciBpbmQgPSB0aGlzLl9ldmVudHMuaW5kZXhPZihldmVudClcbiAgaWYgKGluZCAhPT0gLTEpIHRoaXMuX2V2ZW50cy5zcGxpY2UoaW5kLCAxKVxufVxuXG4vLyBSZXR1cm5zIHRydWUgaWYgYGV2ZW50YCBpcyBpbiBxdWV1ZSwgZmFsc2Ugb3RoZXJ3aXNlXG5XQUFDbG9jay5wcm90b3R5cGUuX2hhc0V2ZW50ID0gZnVuY3Rpb24oZXZlbnQpIHtcbiByZXR1cm4gdGhpcy5fZXZlbnRzLmluZGV4T2YoZXZlbnQpICE9PSAtMVxufVxuXG4vLyBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZXZlbnQgd2hvc2UgZGVhZGxpbmUgaXMgPj0gdG8gYGRlYWRsaW5lYFxuV0FBQ2xvY2sucHJvdG90eXBlLl9pbmRleEJ5VGltZSA9IGZ1bmN0aW9uKGRlYWRsaW5lKSB7XG4gIC8vIHBlcmZvcm1zIGEgYmluYXJ5IHNlYXJjaFxuICB2YXIgbG93ID0gMFxuICAgICwgaGlnaCA9IHRoaXMuX2V2ZW50cy5sZW5ndGhcbiAgICAsIG1pZFxuICB3aGlsZSAobG93IDwgaGlnaCkge1xuICAgIG1pZCA9IE1hdGguZmxvb3IoKGxvdyArIGhpZ2gpIC8gMilcbiAgICBpZiAodGhpcy5fZXZlbnRzW21pZF0uX2VhcmxpZXN0VGltZSA8IGRlYWRsaW5lKVxuICAgICAgbG93ID0gbWlkICsgMVxuICAgIGVsc2UgaGlnaCA9IG1pZFxuICB9XG4gIHJldHVybiBsb3dcbn1cblxuLy8gQ29udmVydHMgZnJvbSByZWxhdGl2ZSB0aW1lIHRvIGFic29sdXRlIHRpbWVcbldBQUNsb2NrLnByb3RvdHlwZS5fYWJzVGltZSA9IGZ1bmN0aW9uKHJlbFRpbWUpIHtcbiAgcmV0dXJuIHJlbFRpbWUgKyB0aGlzLmNvbnRleHQuY3VycmVudFRpbWVcbn1cblxuLy8gQ29udmVydHMgZnJvbSBhYnNvbHV0ZSB0aW1lIHRvIHJlbGF0aXZlIHRpbWUgXG5XQUFDbG9jay5wcm90b3R5cGUuX3JlbFRpbWUgPSBmdW5jdGlvbihhYnNUaW1lKSB7XG4gIHJldHVybiBhYnNUaW1lIC0gdGhpcy5jb250ZXh0LmN1cnJlbnRUaW1lXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dhYWNsb2NrL2xpYi9XQUFDbG9jay5qc1xuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9wcm9jZXNzL2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW50ZXJ2YWwge1xuXG4gIGNvbnN0cnVjdG9yKHJhdGUsZnVuYyxvbikge1xuXG4gICAgdGhpcy5yYXRlID0gcmF0ZTtcbiAgICB0aGlzLm9uID0gb247XG4gICAgdGhpcy5jbG9jayA9IE5leHVzLmNsb2NrOyAvLyBqc2hpbnQgaWdub3JlOmxpbmVcblxuICAgIHRoaXMucGF0dGVybiA9IFsxXTtcbiAgICB0aGlzLmluZGV4ID0gMDtcblxuICAgIHRoaXMuZXZlbnQgPSBmdW5jID8gZnVuYyA6IGZ1bmN0aW9uKCkgeyB9O1xuXG4gICAgaWYgKHRoaXMub24pIHtcbiAgICAgIHRoaXMuc3RhcnQoKTtcbiAgICB9XG5cbiAgfVxuXG4gIF9ldmVudChlKSB7XG4gIC8vICBpZiAodGhpcy5wYXR0ZXJuW3RoaXMuaW5kZXgldGhpcy5wYXR0ZXJuLmxlbmd0aF0pIHtcbiAgICAgIHRoaXMuZXZlbnQoZSk7XG4gIC8vICB9XG4gICAgdGhpcy5pbmRleCsrO1xuICB9XG5cbiAgc3RvcCgpIHtcbiAgICB0aGlzLm9uID0gZmFsc2U7XG4gICAgdGhpcy5pbnRlcnZhbC5jbGVhcigpO1xuICB9XG5cbiAgc3RhcnQoKSB7XG4gICAgdGhpcy5vbiA9IHRydWU7XG4gICAgdGhpcy5pbnRlcnZhbCA9IHRoaXMuY2xvY2suY2FsbGJhY2tBdFRpbWUodGhpcy5fZXZlbnQuYmluZCh0aGlzKSwgdGhpcy5jbG9jay5jb250ZXh0LmN1cnJlbnRUaW1lKS5yZXBlYXQodGhpcy5yYXRlLzEwMDApLnRvbGVyYW5jZSh7ZWFybHk6IDAuMSwgbGF0ZToxfSk7XG4gIH1cblxuICBtcyhuZXdyYXRlKSB7XG4gICAgaWYgKHRoaXMub24pIHtcbiAgICAgIHZhciByYXRpbyA9IG5ld3JhdGUvdGhpcy5yYXRlO1xuICAgICAgdGhpcy5yYXRlID0gbmV3cmF0ZTtcbiAgICAgIHRoaXMuY2xvY2sudGltZVN0cmV0Y2godGhpcy5jbG9jay5jb250ZXh0LmN1cnJlbnRUaW1lLCBbdGhpcy5pbnRlcnZhbF0sIHJhdGlvKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yYXRlID0gbmV3cmF0ZTtcbiAgICB9XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9qc2hpbnQtbG9hZGVyIS4vbGliL3RpbWUvaW50ZXJ2YWwuanMiXSwic291cmNlUm9vdCI6IiJ9