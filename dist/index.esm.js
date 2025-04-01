import React, { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production = {};

/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_production;

function requireReactJsxRuntime_production () {
	if (hasRequiredReactJsxRuntime_production) return reactJsxRuntime_production;
	hasRequiredReactJsxRuntime_production = 1;
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
	  REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
	function jsxProd(type, config, maybeKey) {
	  var key = null;
	  void 0 !== maybeKey && (key = "" + maybeKey);
	  void 0 !== config.key && (key = "" + config.key);
	  if ("key" in config) {
	    maybeKey = {};
	    for (var propName in config)
	      "key" !== propName && (maybeKey[propName] = config[propName]);
	  } else maybeKey = config;
	  config = maybeKey.ref;
	  return {
	    $$typeof: REACT_ELEMENT_TYPE,
	    type: type,
	    key: key,
	    ref: void 0 !== config ? config : null,
	    props: maybeKey
	  };
	}
	reactJsxRuntime_production.Fragment = REACT_FRAGMENT_TYPE;
	reactJsxRuntime_production.jsx = jsxProd;
	reactJsxRuntime_production.jsxs = jsxProd;
	return reactJsxRuntime_production;
}

var reactJsxRuntime_development = {};

/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_development;

function requireReactJsxRuntime_development () {
	if (hasRequiredReactJsxRuntime_development) return reactJsxRuntime_development;
	hasRequiredReactJsxRuntime_development = 1;
	"production" !== process.env.NODE_ENV &&
	  (function () {
	    function getComponentNameFromType(type) {
	      if (null == type) return null;
	      if ("function" === typeof type)
	        return type.$$typeof === REACT_CLIENT_REFERENCE$2
	          ? null
	          : type.displayName || type.name || null;
	      if ("string" === typeof type) return type;
	      switch (type) {
	        case REACT_FRAGMENT_TYPE:
	          return "Fragment";
	        case REACT_PORTAL_TYPE:
	          return "Portal";
	        case REACT_PROFILER_TYPE:
	          return "Profiler";
	        case REACT_STRICT_MODE_TYPE:
	          return "StrictMode";
	        case REACT_SUSPENSE_TYPE:
	          return "Suspense";
	        case REACT_SUSPENSE_LIST_TYPE:
	          return "SuspenseList";
	      }
	      if ("object" === typeof type)
	        switch (
	          ("number" === typeof type.tag &&
	            console.error(
	              "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
	            ),
	          type.$$typeof)
	        ) {
	          case REACT_CONTEXT_TYPE:
	            return (type.displayName || "Context") + ".Provider";
	          case REACT_CONSUMER_TYPE:
	            return (type._context.displayName || "Context") + ".Consumer";
	          case REACT_FORWARD_REF_TYPE:
	            var innerType = type.render;
	            type = type.displayName;
	            type ||
	              ((type = innerType.displayName || innerType.name || ""),
	              (type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef"));
	            return type;
	          case REACT_MEMO_TYPE:
	            return (
	              (innerType = type.displayName || null),
	              null !== innerType
	                ? innerType
	                : getComponentNameFromType(type.type) || "Memo"
	            );
	          case REACT_LAZY_TYPE:
	            innerType = type._payload;
	            type = type._init;
	            try {
	              return getComponentNameFromType(type(innerType));
	            } catch (x) {}
	        }
	      return null;
	    }
	    function testStringCoercion(value) {
	      return "" + value;
	    }
	    function checkKeyStringCoercion(value) {
	      try {
	        testStringCoercion(value);
	        var JSCompiler_inline_result = !1;
	      } catch (e) {
	        JSCompiler_inline_result = true;
	      }
	      if (JSCompiler_inline_result) {
	        JSCompiler_inline_result = console;
	        var JSCompiler_temp_const = JSCompiler_inline_result.error;
	        var JSCompiler_inline_result$jscomp$0 =
	          ("function" === typeof Symbol &&
	            Symbol.toStringTag &&
	            value[Symbol.toStringTag]) ||
	          value.constructor.name ||
	          "Object";
	        JSCompiler_temp_const.call(
	          JSCompiler_inline_result,
	          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
	          JSCompiler_inline_result$jscomp$0
	        );
	        return testStringCoercion(value);
	      }
	    }
	    function disabledLog() {}
	    function disableLogs() {
	      if (0 === disabledDepth) {
	        prevLog = console.log;
	        prevInfo = console.info;
	        prevWarn = console.warn;
	        prevError = console.error;
	        prevGroup = console.group;
	        prevGroupCollapsed = console.groupCollapsed;
	        prevGroupEnd = console.groupEnd;
	        var props = {
	          configurable: true,
	          enumerable: true,
	          value: disabledLog,
	          writable: true
	        };
	        Object.defineProperties(console, {
	          info: props,
	          log: props,
	          warn: props,
	          error: props,
	          group: props,
	          groupCollapsed: props,
	          groupEnd: props
	        });
	      }
	      disabledDepth++;
	    }
	    function reenableLogs() {
	      disabledDepth--;
	      if (0 === disabledDepth) {
	        var props = { configurable: true, enumerable: true, writable: true };
	        Object.defineProperties(console, {
	          log: assign({}, props, { value: prevLog }),
	          info: assign({}, props, { value: prevInfo }),
	          warn: assign({}, props, { value: prevWarn }),
	          error: assign({}, props, { value: prevError }),
	          group: assign({}, props, { value: prevGroup }),
	          groupCollapsed: assign({}, props, { value: prevGroupCollapsed }),
	          groupEnd: assign({}, props, { value: prevGroupEnd })
	        });
	      }
	      0 > disabledDepth &&
	        console.error(
	          "disabledDepth fell below zero. This is a bug in React. Please file an issue."
	        );
	    }
	    function describeBuiltInComponentFrame(name) {
	      if (void 0 === prefix)
	        try {
	          throw Error();
	        } catch (x) {
	          var match = x.stack.trim().match(/\n( *(at )?)/);
	          prefix = (match && match[1]) || "";
	          suffix =
	            -1 < x.stack.indexOf("\n    at")
	              ? " (<anonymous>)"
	              : -1 < x.stack.indexOf("@")
	                ? "@unknown:0:0"
	                : "";
	        }
	      return "\n" + prefix + name + suffix;
	    }
	    function describeNativeComponentFrame(fn, construct) {
	      if (!fn || reentry) return "";
	      var frame = componentFrameCache.get(fn);
	      if (void 0 !== frame) return frame;
	      reentry = true;
	      frame = Error.prepareStackTrace;
	      Error.prepareStackTrace = void 0;
	      var previousDispatcher = null;
	      previousDispatcher = ReactSharedInternals.H;
	      ReactSharedInternals.H = null;
	      disableLogs();
	      try {
	        var RunInRootFrame = {
	          DetermineComponentFrameRoot: function () {
	            try {
	              if (construct) {
	                var Fake = function () {
	                  throw Error();
	                };
	                Object.defineProperty(Fake.prototype, "props", {
	                  set: function () {
	                    throw Error();
	                  }
	                });
	                if ("object" === typeof Reflect && Reflect.construct) {
	                  try {
	                    Reflect.construct(Fake, []);
	                  } catch (x) {
	                    var control = x;
	                  }
	                  Reflect.construct(fn, [], Fake);
	                } else {
	                  try {
	                    Fake.call();
	                  } catch (x$0) {
	                    control = x$0;
	                  }
	                  fn.call(Fake.prototype);
	                }
	              } else {
	                try {
	                  throw Error();
	                } catch (x$1) {
	                  control = x$1;
	                }
	                (Fake = fn()) &&
	                  "function" === typeof Fake.catch &&
	                  Fake.catch(function () {});
	              }
	            } catch (sample) {
	              if (sample && control && "string" === typeof sample.stack)
	                return [sample.stack, control.stack];
	            }
	            return [null, null];
	          }
	        };
	        RunInRootFrame.DetermineComponentFrameRoot.displayName =
	          "DetermineComponentFrameRoot";
	        var namePropDescriptor = Object.getOwnPropertyDescriptor(
	          RunInRootFrame.DetermineComponentFrameRoot,
	          "name"
	        );
	        namePropDescriptor &&
	          namePropDescriptor.configurable &&
	          Object.defineProperty(
	            RunInRootFrame.DetermineComponentFrameRoot,
	            "name",
	            { value: "DetermineComponentFrameRoot" }
	          );
	        var _RunInRootFrame$Deter =
	            RunInRootFrame.DetermineComponentFrameRoot(),
	          sampleStack = _RunInRootFrame$Deter[0],
	          controlStack = _RunInRootFrame$Deter[1];
	        if (sampleStack && controlStack) {
	          var sampleLines = sampleStack.split("\n"),
	            controlLines = controlStack.split("\n");
	          for (
	            _RunInRootFrame$Deter = namePropDescriptor = 0;
	            namePropDescriptor < sampleLines.length &&
	            !sampleLines[namePropDescriptor].includes(
	              "DetermineComponentFrameRoot"
	            );

	          )
	            namePropDescriptor++;
	          for (
	            ;
	            _RunInRootFrame$Deter < controlLines.length &&
	            !controlLines[_RunInRootFrame$Deter].includes(
	              "DetermineComponentFrameRoot"
	            );

	          )
	            _RunInRootFrame$Deter++;
	          if (
	            namePropDescriptor === sampleLines.length ||
	            _RunInRootFrame$Deter === controlLines.length
	          )
	            for (
	              namePropDescriptor = sampleLines.length - 1,
	                _RunInRootFrame$Deter = controlLines.length - 1;
	              1 <= namePropDescriptor &&
	              0 <= _RunInRootFrame$Deter &&
	              sampleLines[namePropDescriptor] !==
	                controlLines[_RunInRootFrame$Deter];

	            )
	              _RunInRootFrame$Deter--;
	          for (
	            ;
	            1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter;
	            namePropDescriptor--, _RunInRootFrame$Deter--
	          )
	            if (
	              sampleLines[namePropDescriptor] !==
	              controlLines[_RunInRootFrame$Deter]
	            ) {
	              if (1 !== namePropDescriptor || 1 !== _RunInRootFrame$Deter) {
	                do
	                  if (
	                    (namePropDescriptor--,
	                    _RunInRootFrame$Deter--,
	                    0 > _RunInRootFrame$Deter ||
	                      sampleLines[namePropDescriptor] !==
	                        controlLines[_RunInRootFrame$Deter])
	                  ) {
	                    var _frame =
	                      "\n" +
	                      sampleLines[namePropDescriptor].replace(
	                        " at new ",
	                        " at "
	                      );
	                    fn.displayName &&
	                      _frame.includes("<anonymous>") &&
	                      (_frame = _frame.replace("<anonymous>", fn.displayName));
	                    "function" === typeof fn &&
	                      componentFrameCache.set(fn, _frame);
	                    return _frame;
	                  }
	                while (1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter);
	              }
	              break;
	            }
	        }
	      } finally {
	        (reentry = false),
	          (ReactSharedInternals.H = previousDispatcher),
	          reenableLogs(),
	          (Error.prepareStackTrace = frame);
	      }
	      sampleLines = (sampleLines = fn ? fn.displayName || fn.name : "")
	        ? describeBuiltInComponentFrame(sampleLines)
	        : "";
	      "function" === typeof fn && componentFrameCache.set(fn, sampleLines);
	      return sampleLines;
	    }
	    function describeUnknownElementTypeFrameInDEV(type) {
	      if (null == type) return "";
	      if ("function" === typeof type) {
	        var prototype = type.prototype;
	        return describeNativeComponentFrame(
	          type,
	          !(!prototype || !prototype.isReactComponent)
	        );
	      }
	      if ("string" === typeof type) return describeBuiltInComponentFrame(type);
	      switch (type) {
	        case REACT_SUSPENSE_TYPE:
	          return describeBuiltInComponentFrame("Suspense");
	        case REACT_SUSPENSE_LIST_TYPE:
	          return describeBuiltInComponentFrame("SuspenseList");
	      }
	      if ("object" === typeof type)
	        switch (type.$$typeof) {
	          case REACT_FORWARD_REF_TYPE:
	            return (type = describeNativeComponentFrame(type.render, false)), type;
	          case REACT_MEMO_TYPE:
	            return describeUnknownElementTypeFrameInDEV(type.type);
	          case REACT_LAZY_TYPE:
	            prototype = type._payload;
	            type = type._init;
	            try {
	              return describeUnknownElementTypeFrameInDEV(type(prototype));
	            } catch (x) {}
	        }
	      return "";
	    }
	    function getOwner() {
	      var dispatcher = ReactSharedInternals.A;
	      return null === dispatcher ? null : dispatcher.getOwner();
	    }
	    function hasValidKey(config) {
	      if (hasOwnProperty.call(config, "key")) {
	        var getter = Object.getOwnPropertyDescriptor(config, "key").get;
	        if (getter && getter.isReactWarning) return false;
	      }
	      return void 0 !== config.key;
	    }
	    function defineKeyPropWarningGetter(props, displayName) {
	      function warnAboutAccessingKey() {
	        specialPropKeyWarningShown ||
	          ((specialPropKeyWarningShown = true),
	          console.error(
	            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
	            displayName
	          ));
	      }
	      warnAboutAccessingKey.isReactWarning = true;
	      Object.defineProperty(props, "key", {
	        get: warnAboutAccessingKey,
	        configurable: true
	      });
	    }
	    function elementRefGetterWithDeprecationWarning() {
	      var componentName = getComponentNameFromType(this.type);
	      didWarnAboutElementRef[componentName] ||
	        ((didWarnAboutElementRef[componentName] = true),
	        console.error(
	          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
	        ));
	      componentName = this.props.ref;
	      return void 0 !== componentName ? componentName : null;
	    }
	    function ReactElement(type, key, self, source, owner, props) {
	      self = props.ref;
	      type = {
	        $$typeof: REACT_ELEMENT_TYPE,
	        type: type,
	        key: key,
	        props: props,
	        _owner: owner
	      };
	      null !== (void 0 !== self ? self : null)
	        ? Object.defineProperty(type, "ref", {
	            enumerable: false,
	            get: elementRefGetterWithDeprecationWarning
	          })
	        : Object.defineProperty(type, "ref", { enumerable: false, value: null });
	      type._store = {};
	      Object.defineProperty(type._store, "validated", {
	        configurable: false,
	        enumerable: false,
	        writable: true,
	        value: 0
	      });
	      Object.defineProperty(type, "_debugInfo", {
	        configurable: false,
	        enumerable: false,
	        writable: true,
	        value: null
	      });
	      Object.freeze && (Object.freeze(type.props), Object.freeze(type));
	      return type;
	    }
	    function jsxDEVImpl(
	      type,
	      config,
	      maybeKey,
	      isStaticChildren,
	      source,
	      self
	    ) {
	      if (
	        "string" === typeof type ||
	        "function" === typeof type ||
	        type === REACT_FRAGMENT_TYPE ||
	        type === REACT_PROFILER_TYPE ||
	        type === REACT_STRICT_MODE_TYPE ||
	        type === REACT_SUSPENSE_TYPE ||
	        type === REACT_SUSPENSE_LIST_TYPE ||
	        type === REACT_OFFSCREEN_TYPE ||
	        ("object" === typeof type &&
	          null !== type &&
	          (type.$$typeof === REACT_LAZY_TYPE ||
	            type.$$typeof === REACT_MEMO_TYPE ||
	            type.$$typeof === REACT_CONTEXT_TYPE ||
	            type.$$typeof === REACT_CONSUMER_TYPE ||
	            type.$$typeof === REACT_FORWARD_REF_TYPE ||
	            type.$$typeof === REACT_CLIENT_REFERENCE$1 ||
	            void 0 !== type.getModuleId))
	      ) {
	        var children = config.children;
	        if (void 0 !== children)
	          if (isStaticChildren)
	            if (isArrayImpl(children)) {
	              for (
	                isStaticChildren = 0;
	                isStaticChildren < children.length;
	                isStaticChildren++
	              )
	                validateChildKeys(children[isStaticChildren], type);
	              Object.freeze && Object.freeze(children);
	            } else
	              console.error(
	                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
	              );
	          else validateChildKeys(children, type);
	      } else {
	        children = "";
	        if (
	          void 0 === type ||
	          ("object" === typeof type &&
	            null !== type &&
	            0 === Object.keys(type).length)
	        )
	          children +=
	            " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
	        null === type
	          ? (isStaticChildren = "null")
	          : isArrayImpl(type)
	            ? (isStaticChildren = "array")
	            : void 0 !== type && type.$$typeof === REACT_ELEMENT_TYPE
	              ? ((isStaticChildren =
	                  "<" +
	                  (getComponentNameFromType(type.type) || "Unknown") +
	                  " />"),
	                (children =
	                  " Did you accidentally export a JSX literal instead of a component?"))
	              : (isStaticChildren = typeof type);
	        console.error(
	          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
	          isStaticChildren,
	          children
	        );
	      }
	      if (hasOwnProperty.call(config, "key")) {
	        children = getComponentNameFromType(type);
	        var keys = Object.keys(config).filter(function (k) {
	          return "key" !== k;
	        });
	        isStaticChildren =
	          0 < keys.length
	            ? "{key: someKey, " + keys.join(": ..., ") + ": ...}"
	            : "{key: someKey}";
	        didWarnAboutKeySpread[children + isStaticChildren] ||
	          ((keys =
	            0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}"),
	          console.error(
	            'A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />',
	            isStaticChildren,
	            children,
	            keys,
	            children
	          ),
	          (didWarnAboutKeySpread[children + isStaticChildren] = true));
	      }
	      children = null;
	      void 0 !== maybeKey &&
	        (checkKeyStringCoercion(maybeKey), (children = "" + maybeKey));
	      hasValidKey(config) &&
	        (checkKeyStringCoercion(config.key), (children = "" + config.key));
	      if ("key" in config) {
	        maybeKey = {};
	        for (var propName in config)
	          "key" !== propName && (maybeKey[propName] = config[propName]);
	      } else maybeKey = config;
	      children &&
	        defineKeyPropWarningGetter(
	          maybeKey,
	          "function" === typeof type
	            ? type.displayName || type.name || "Unknown"
	            : type
	        );
	      return ReactElement(type, children, self, source, getOwner(), maybeKey);
	    }
	    function validateChildKeys(node, parentType) {
	      if (
	        "object" === typeof node &&
	        node &&
	        node.$$typeof !== REACT_CLIENT_REFERENCE
	      )
	        if (isArrayImpl(node))
	          for (var i = 0; i < node.length; i++) {
	            var child = node[i];
	            isValidElement(child) && validateExplicitKey(child, parentType);
	          }
	        else if (isValidElement(node))
	          node._store && (node._store.validated = 1);
	        else if (
	          (null === node || "object" !== typeof node
	            ? (i = null)
	            : ((i =
	                (MAYBE_ITERATOR_SYMBOL && node[MAYBE_ITERATOR_SYMBOL]) ||
	                node["@@iterator"]),
	              (i = "function" === typeof i ? i : null)),
	          "function" === typeof i &&
	            i !== node.entries &&
	            ((i = i.call(node)), i !== node))
	        )
	          for (; !(node = i.next()).done; )
	            isValidElement(node.value) &&
	              validateExplicitKey(node.value, parentType);
	    }
	    function isValidElement(object) {
	      return (
	        "object" === typeof object &&
	        null !== object &&
	        object.$$typeof === REACT_ELEMENT_TYPE
	      );
	    }
	    function validateExplicitKey(element, parentType) {
	      if (
	        element._store &&
	        !element._store.validated &&
	        null == element.key &&
	        ((element._store.validated = 1),
	        (parentType = getCurrentComponentErrorInfo(parentType)),
	        !ownerHasKeyUseWarning[parentType])
	      ) {
	        ownerHasKeyUseWarning[parentType] = true;
	        var childOwner = "";
	        element &&
	          null != element._owner &&
	          element._owner !== getOwner() &&
	          ((childOwner = null),
	          "number" === typeof element._owner.tag
	            ? (childOwner = getComponentNameFromType(element._owner.type))
	            : "string" === typeof element._owner.name &&
	              (childOwner = element._owner.name),
	          (childOwner = " It was passed a child from " + childOwner + "."));
	        var prevGetCurrentStack = ReactSharedInternals.getCurrentStack;
	        ReactSharedInternals.getCurrentStack = function () {
	          var stack = describeUnknownElementTypeFrameInDEV(element.type);
	          prevGetCurrentStack && (stack += prevGetCurrentStack() || "");
	          return stack;
	        };
	        console.error(
	          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
	          parentType,
	          childOwner
	        );
	        ReactSharedInternals.getCurrentStack = prevGetCurrentStack;
	      }
	    }
	    function getCurrentComponentErrorInfo(parentType) {
	      var info = "",
	        owner = getOwner();
	      owner &&
	        (owner = getComponentNameFromType(owner.type)) &&
	        (info = "\n\nCheck the render method of `" + owner + "`.");
	      info ||
	        ((parentType = getComponentNameFromType(parentType)) &&
	          (info =
	            "\n\nCheck the top-level render call using <" + parentType + ">."));
	      return info;
	    }
	    var React$1 = React,
	      REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
	      REACT_PORTAL_TYPE = Symbol.for("react.portal"),
	      REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"),
	      REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"),
	      REACT_PROFILER_TYPE = Symbol.for("react.profiler");
	    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"),
	      REACT_CONTEXT_TYPE = Symbol.for("react.context"),
	      REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"),
	      REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"),
	      REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"),
	      REACT_MEMO_TYPE = Symbol.for("react.memo"),
	      REACT_LAZY_TYPE = Symbol.for("react.lazy"),
	      REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen"),
	      MAYBE_ITERATOR_SYMBOL = Symbol.iterator,
	      REACT_CLIENT_REFERENCE$2 = Symbol.for("react.client.reference"),
	      ReactSharedInternals =
	        React$1.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
	      hasOwnProperty = Object.prototype.hasOwnProperty,
	      assign = Object.assign,
	      REACT_CLIENT_REFERENCE$1 = Symbol.for("react.client.reference"),
	      isArrayImpl = Array.isArray,
	      disabledDepth = 0,
	      prevLog,
	      prevInfo,
	      prevWarn,
	      prevError,
	      prevGroup,
	      prevGroupCollapsed,
	      prevGroupEnd;
	    disabledLog.__reactDisabledLog = true;
	    var prefix,
	      suffix,
	      reentry = false;
	    var componentFrameCache = new (
	      "function" === typeof WeakMap ? WeakMap : Map
	    )();
	    var REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"),
	      specialPropKeyWarningShown;
	    var didWarnAboutElementRef = {};
	    var didWarnAboutKeySpread = {},
	      ownerHasKeyUseWarning = {};
	    reactJsxRuntime_development.Fragment = REACT_FRAGMENT_TYPE;
	    reactJsxRuntime_development.jsx = function (type, config, maybeKey, source, self) {
	      return jsxDEVImpl(type, config, maybeKey, false, source, self);
	    };
	    reactJsxRuntime_development.jsxs = function (type, config, maybeKey, source, self) {
	      return jsxDEVImpl(type, config, maybeKey, true, source, self);
	    };
	  })();
	return reactJsxRuntime_development;
}

var hasRequiredJsxRuntime;

function requireJsxRuntime () {
	if (hasRequiredJsxRuntime) return jsxRuntime.exports;
	hasRequiredJsxRuntime = 1;

	if (process.env.NODE_ENV === 'production') {
	  jsxRuntime.exports = requireReactJsxRuntime_production();
	} else {
	  jsxRuntime.exports = requireReactJsxRuntime_development();
	}
	return jsxRuntime.exports;
}

var jsxRuntimeExports = requireJsxRuntime();

const constrain = (value, min, max) => Math.min(Math.max(value, min), max);
const mapValue = (value, start1, stop1, start2, stop2) => ((value - start1) * (stop2 - start2)) / (stop1 - start1) + start2;
const distance$1 = (x1, y1, x2, y2) => Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
const MultiEyeInteraction = ({ src, speed = 0.2, width = "100%", height = "100%", responsiveness = 1.0, }) => {
    const svgRef = useRef(null);
    const [viewBox, setViewBox] = useState("0 0 100 100");
    useEffect(() => {
        const svg = svgRef.current;
        if (!svg)
            return;
        const updateViewBox = () => {
            const bbox = svg.getBBox();
            if (bbox.width > 0 && bbox.height > 0) {
                setViewBox(`${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`);
            }
        };
        updateViewBox();
    }, [src]);
    useEffect(() => {
        const svg = svgRef.current;
        if (!svg)
            return;
        const handleMouseMove = (event) => {
            const rect = svg.getBoundingClientRect();
            const vb = svg.viewBox.baseVal;
            const mouseX = vb.x + ((event.clientX - rect.left) / rect.width) * vb.width;
            const mouseY = vb.y + ((event.clientY - rect.top) / rect.height) * vb.height;
            svg.querySelectorAll(".eye").forEach((eye) => {
                const bounding = eye.querySelector(".bounding");
                const moving = eye.querySelector(".moving");
                if (!bounding || !moving)
                    return;
                const boundingBox = bounding.getBBox();
                const movingBox = moving.getBBox();
                const centerX = boundingBox.x + boundingBox.width / 2;
                const centerY = boundingBox.y + boundingBox.height / 2;
                const maxBoundingRadius = Math.max(boundingBox.width, boundingBox.height) / 2;
                const maxMovingRadius = Math.max(movingBox.width, movingBox.height) / 2;
                const dx = mouseX - centerX;
                const dy = mouseY - centerY;
                const angle = Math.atan2(dy, dx);
                const minXTranslation = centerX - responsiveness * window.innerWidth;
                const maxXTranslation = centerX + responsiveness * window.innerWidth;
                const minYTranslation = centerY - responsiveness * window.innerHeight;
                const maxYTranslation = centerY + responsiveness * window.innerHeight;
                const cx = constrain(mouseX, minXTranslation, maxXTranslation);
                const cy = constrain(mouseY, minYTranslation, maxYTranslation);
                const x = mapValue(cx, minXTranslation, maxXTranslation, centerX - 100, centerX + 100);
                const y = mapValue(cy, minYTranslation, maxYTranslation, centerY - 100, centerY + 100);
                const maxOffset = maxBoundingRadius - maxMovingRadius;
                const d = constrain(distance$1(x, y, centerX, centerY), 0, maxOffset);
                const newCx = centerX + d * Math.cos(angle);
                const newCy = centerY + d * Math.sin(angle);
                const moveX = newCx - (movingBox.x + movingBox.width / 2);
                const moveY = newCy - (movingBox.y + movingBox.height / 2);
                gsap.to(moving, {
                    x: moveX,
                    y: moveY,
                    duration: speed,
                    ease: "power1.out",
                });
            });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [viewBox, speed, responsiveness, src]);
    return (jsxRuntimeExports.jsx("svg", { ref: svgRef, width: width, height: height, viewBox: viewBox, preserveAspectRatio: "xMidYMid meet", children: React.isValidElement(src) ? src : null }));
};

const SVGFollowMouse = ({ src, size = 1, opacity = 0.8, delay = 0.1, ease = "power1.out", }) => {
    const containerRef = useRef(null);
    // Default intrinsic dimensions if not provided by the SVG
    const baseWidth = 100;
    const baseHeight = 100;
    // let svgViewBox: string | undefined = undefined;
    const svgRef = useRef(null);
    const [viewBox, setViewBox] = React.useState("0 0 100 100"); // Default viewBox
    // Update viewBox based on SVG content (if needed)
    useEffect(() => {
        const svg = svgRef.current;
        if (!svg)
            return;
        const updateViewBox = () => {
            const bbox = svg.getBBox();
            if (bbox.width > 0 && bbox.height > 0) {
                setViewBox(`${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`);
            }
        };
        updateViewBox();
    }, [src]);
    // Compute container dimensions based on the scaling factor.
    const containerWidth = baseWidth * size;
    const containerHeight = baseHeight * size;
    useEffect(() => {
        const handleMouseMove = (event) => {
            const left = event.clientX - containerWidth / 2;
            const top = event.clientY - containerHeight / 2;
            if (containerRef.current) {
                gsap.to(containerRef.current, {
                    left,
                    top,
                    duration: delay,
                    ease: ease,
                });
            }
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [containerWidth, containerHeight, delay, ease]);
    return (jsxRuntimeExports.jsx("div", { ref: containerRef, style: {
            position: "fixed",
            width: `${containerWidth}px`,
            height: `${containerHeight}px`,
            left: 0,
            top: 0,
            pointerEvents: "none", // so that it doesn't block mouse events
            opacity: opacity,
        }, children: jsxRuntimeExports.jsx("svg", { ref: svgRef, width: containerWidth, height: containerHeight, viewBox: viewBox, preserveAspectRatio: "xMidYMid meet", children: React.isValidElement(src) ? src : null }) }));
};

const RotateObject = ({ src, size = 1, speed = 0.2, offset = 0, clockwise = true, respondsTo = "scroll", }) => {
    const svgRef = useRef(null);
    const [viewBox, setViewBox] = React.useState("0 0 100 100"); // Default viewBox
    const baseWidth = 100;
    const baseHeight = 100;
    const rotationRef = useRef(0);
    // Update viewBox based on SVG content (if needed)
    useEffect(() => {
        const svg = svgRef.current;
        if (!svg)
            return;
        const updateViewBox = () => {
            const bbox = svg.getBBox();
            if (bbox.width > 0 && bbox.height > 0) {
                setViewBox(`${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`);
            }
        };
        updateViewBox();
    }, [src]);
    const containerWidth = baseWidth * size;
    const containerHeight = baseHeight * size;
    useEffect(() => {
        const svg = svgRef.current;
        if (!svg)
            return;
        let targetElement = svg.querySelector(".target");
        if (!targetElement) {
            targetElement = svg;
        }
        // --- Scroll response ---
        if (respondsTo === "scroll") {
            let lastScrollY = window.scrollY;
            // Set initial rotation and transform origin
            gsap.set(targetElement, { rotation: 0, transformOrigin: "50% 50%" });
            const handleScroll = () => {
                const currentScrollY = window.scrollY;
                const delta = currentScrollY - lastScrollY;
                lastScrollY = currentScrollY;
                // Calculate the rotation change based on scroll delta and speed.
                let rotationDelta = delta * (speed + 1.0);
                // Reverse rotation if clockwise is false.
                if (!clockwise) {
                    rotationDelta = -rotationDelta;
                }
                // Animate rotation by adding the delta.
                gsap.to(targetElement, {
                    rotation: `+=${rotationDelta}`,
                    ease: "power1.out",
                    transformOrigin: "50% 50%",
                    duration: speed,
                });
            };
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        }
        // --- Mouse response ---
        if (respondsTo == "mouse") {
            const handleMouseMove = (event) => {
                // Get element's bounding rectangle in screen coordinates.
                const rect = targetElement.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                // Compute the angle from the center to the mouse.
                const angleRad = Math.atan2(event.clientY - centerY, event.clientX - centerX);
                // Convert radians to degrees and normalize to [0,360)
                let computedAngle = angleRad * (180 / Math.PI);
                if (computedAngle < 0)
                    computedAngle += 360;
                // Retrieve the current continuous rotation.
                const currentRotation = rotationRef.current;
                // Adjust computedAngle by adding multiples of 360 to minimize the jump from currentRotation.
                const continuousTarget = computedAngle +
                    Math.round((currentRotation - computedAngle) / 360) * 360;
                // Animate to the new continuous rotation target.
                gsap.to(targetElement, {
                    rotation: continuousTarget + offset,
                    ease: "power1.out",
                    duration: 0.2,
                    transformOrigin: "50% 50%",
                    onComplete: () => {
                        rotationRef.current = continuousTarget;
                    },
                });
            };
            window.addEventListener("mousemove", handleMouseMove);
            return () => window.removeEventListener("mousemove", handleMouseMove);
        }
    }, [respondsTo, speed, clockwise]);
    return (jsxRuntimeExports.jsx("svg", { ref: svgRef, width: containerWidth, height: containerHeight, viewBox: viewBox, preserveAspectRatio: "xMidYMid meet", children: React.isValidElement(src) ? src : null }));
};

const AnimatedOnHover = ({ src, width = 300, height = 300, animation = "pulse", }) => {
    const svgRef = useRef(null);
    const wrapperRef = useRef(null);
    const [viewBox, setViewBox] = useState("0 0 300 300");
    useEffect(() => {
        const svg = svgRef.current;
        if (!svg)
            return;
        const updateViewBox = () => {
            try {
                const bbox = svg.getBBox();
                if (bbox.width > 0 && bbox.height > 0) {
                    const padding = 20;
                    setViewBox(`${bbox.x - padding} ${bbox.y - padding} ${bbox.width + padding * 2} ${bbox.height + padding * 2}`);
                }
            }
            catch (e) {
                console.warn("getBBox failed:", e);
            }
        };
        updateViewBox();
    }, [src]);
    useEffect(() => {
        const group = wrapperRef.current;
        if (!group)
            return;
        const targets = group.querySelectorAll(`.animate`);
        const animations = [];
        targets.forEach((el) => {
            let tl;
            const enter = () => {
                if (animation === "pulse") {
                    tl = gsap.to(el, {
                        scale: 1.2,
                        repeat: -1,
                        yoyo: true,
                        duration: 0.6,
                        ease: "power1.inOut",
                    });
                }
                else if (animation === "spin") {
                    tl = gsap.to(el, {
                        rotate: 360,
                        repeat: -1,
                        duration: 1.5,
                        ease: "linear",
                        transformOrigin: "50% 50%",
                    });
                }
                else if (animation === "wiggle") {
                    tl = gsap.to(el, {
                        rotation: 5,
                        repeat: -1,
                        yoyo: true,
                        duration: 0.1,
                        ease: "power1.inOut",
                    });
                }
                else if (animation === "tilt") {
                    tl = gsap.to(el, {
                        rotate: 10,
                        yoyo: true,
                        repeat: -1,
                        duration: 0.3,
                        ease: "sine.inOut",
                        transformOrigin: "50% 50%",
                    });
                }
                else if (animation === "jelly") {
                    tl = gsap.to(el, {
                        scaleX: 1.2,
                        scaleY: 0.8,
                        duration: 0.3,
                        yoyo: true,
                        repeat: -1,
                        ease: "power1.inOut",
                        transformOrigin: "50% 50%",
                    });
                }
                else if (animation === "pop") {
                    tl = gsap.fromTo(el, { scale: 1 }, {
                        scale: 1.3,
                        duration: 0.2,
                        ease: "power1.out",
                        yoyo: true,
                        repeat: 1,
                        transformOrigin: "50% 50%",
                    });
                }
            };
            const leave = () => {
                if (tl)
                    tl.kill();
                gsap.set(el, { clearProps: "all" });
            };
            el.addEventListener("mouseenter", enter);
            el.addEventListener("mouseleave", leave);
            animations.push({ el, enter, leave });
        });
        return () => {
            animations.forEach(({ el, enter, leave }) => {
                el.removeEventListener("mouseenter", enter);
                el.removeEventListener("mouseleave", leave);
            });
        };
    }, [src, animation]);
    return (jsxRuntimeExports.jsx("svg", { ref: svgRef, width: width, height: height, viewBox: viewBox, xmlns: "http://www.w3.org/2000/svg", style: { overflow: "visible" }, children: jsxRuntimeExports.jsx("g", { ref: wrapperRef, style: { overflow: "visible" }, children: src }) }));
};

const GlowOnHover = ({ src, width = 300, height = 300, scaleFactor = 1.2, color = "#D9D9D9", }) => {
    const svgRef = useRef(null);
    const wrapperRef = useRef(null);
    const [viewBox, setViewBox] = useState("0 0 300 300"); // use a safe default
    // Dynamically update viewBox
    useEffect(() => {
        const svg = svgRef.current;
        if (!svg)
            return;
        const updateViewBox = () => {
            try {
                const bbox = svg.getBBox();
                if (bbox.width > 0 && bbox.height > 0) {
                    const padding = 20; // give breathing room for glow
                    setViewBox(`${bbox.x - padding} ${bbox.y - padding} ${bbox.width} ${bbox.height}`);
                }
            }
            catch (e) {
                console.warn("getBBox failed:", e);
            }
        };
        updateViewBox();
    }, [src]);
    useEffect(() => {
        const group = wrapperRef.current;
        if (!group)
            return;
        const glowElements = group.querySelectorAll(".glow");
        const handleEnter = (el) => () => gsap.to(el, {
            scale: scaleFactor,
            filter: `drop-shadow(0px 0px 10px ${color})`,
            transformOrigin: "50% 50%",
            duration: 0.5,
        });
        const handleLeave = (el) => () => gsap.to(el, {
            scale: 1,
            filter: "none",
            duration: 0.3,
        });
        const listeners = [];
        glowElements.forEach((el) => {
            const enter = handleEnter(el);
            const leave = handleLeave(el);
            el.addEventListener("mouseenter", enter);
            el.addEventListener("mouseleave", leave);
            listeners.push({ el, enter, leave });
        });
        return () => {
            listeners.forEach(({ el, enter, leave }) => {
                el.removeEventListener("mouseenter", enter);
                el.removeEventListener("mouseleave", leave);
            });
        };
    }, [src, scaleFactor, color]);
    return (jsxRuntimeExports.jsx("svg", { ref: svgRef, width: width, height: height, viewBox: viewBox, xmlns: "http://www.w3.org/2000/svg", style: { overflow: "visible" }, children: jsxRuntimeExports.jsx("g", { ref: wrapperRef, style: { overflow: "visible" }, children: src }) }));
};

function polygonArea(polygon) {
  var i = -1,
      n = polygon.length,
      a,
      b = polygon[n - 1],
      area = 0;

  while (++i < n) {
    a = b;
    b = polygon[i];
    area += a[1] * b[0] - a[0] * b[1];
  }

  return area / 2;
}

function polygonLength(polygon) {
  var i = -1,
      n = polygon.length,
      b = polygon[n - 1],
      xa,
      ya,
      xb = b[0],
      yb = b[1],
      perimeter = 0;

  while (++i < n) {
    xa = xb;
    ya = yb;
    b = polygon[i];
    xb = b[0];
    yb = b[1];
    xa -= xb;
    ya -= yb;
    perimeter += Math.sqrt(xa * xa + ya * ya);
  }

  return perimeter;
}

var path_parse;
var hasRequiredPath_parse;

function requirePath_parse () {
	if (hasRequiredPath_parse) return path_parse;
	hasRequiredPath_parse = 1;


	var paramCounts = { a: 7, c: 6, h: 1, l: 2, m: 2, r: 4, q: 4, s: 4, t: 2, v: 1, z: 0 };

	var SPECIAL_SPACES = [
	  0x1680, 0x180E, 0x2000, 0x2001, 0x2002, 0x2003, 0x2004, 0x2005, 0x2006,
	  0x2007, 0x2008, 0x2009, 0x200A, 0x202F, 0x205F, 0x3000, 0xFEFF
	];

	function isSpace(ch) {
	  return (ch === 0x0A) || (ch === 0x0D) || (ch === 0x2028) || (ch === 0x2029) || // Line terminators
	    // White spaces
	    (ch === 0x20) || (ch === 0x09) || (ch === 0x0B) || (ch === 0x0C) || (ch === 0xA0) ||
	    (ch >= 0x1680 && SPECIAL_SPACES.indexOf(ch) >= 0);
	}

	function isCommand(code) {
	  /*eslint-disable no-bitwise*/
	  switch (code | 0x20) {
	    case 0x6D/* m */:
	    case 0x7A/* z */:
	    case 0x6C/* l */:
	    case 0x68/* h */:
	    case 0x76/* v */:
	    case 0x63/* c */:
	    case 0x73/* s */:
	    case 0x71/* q */:
	    case 0x74/* t */:
	    case 0x61/* a */:
	    case 0x72/* r */:
	      return true;
	  }
	  return false;
	}

	function isArc(code) {
	  return (code | 0x20) === 0x61;
	}

	function isDigit(code) {
	  return (code >= 48 && code <= 57);   // 0..9
	}

	function isDigitStart(code) {
	  return (code >= 48 && code <= 57) || /* 0..9 */
	          code === 0x2B || /* + */
	          code === 0x2D || /* - */
	          code === 0x2E;   /* . */
	}


	function State(path) {
	  this.index  = 0;
	  this.path   = path;
	  this.max    = path.length;
	  this.result = [];
	  this.param  = 0.0;
	  this.err    = '';
	  this.segmentStart = 0;
	  this.data   = [];
	}

	function skipSpaces(state) {
	  while (state.index < state.max && isSpace(state.path.charCodeAt(state.index))) {
	    state.index++;
	  }
	}


	function scanFlag(state) {
	  var ch = state.path.charCodeAt(state.index);

	  if (ch === 0x30/* 0 */) {
	    state.param = 0;
	    state.index++;
	    return;
	  }

	  if (ch === 0x31/* 1 */) {
	    state.param = 1;
	    state.index++;
	    return;
	  }

	  state.err = 'SvgPath: arc flag can be 0 or 1 only (at pos ' + state.index + ')';
	}


	function scanParam(state) {
	  var start = state.index,
	      index = start,
	      max = state.max,
	      zeroFirst = false,
	      hasCeiling = false,
	      hasDecimal = false,
	      hasDot = false,
	      ch;

	  if (index >= max) {
	    state.err = 'SvgPath: missed param (at pos ' + index + ')';
	    return;
	  }
	  ch = state.path.charCodeAt(index);

	  if (ch === 0x2B/* + */ || ch === 0x2D/* - */) {
	    index++;
	    ch = (index < max) ? state.path.charCodeAt(index) : 0;
	  }

	  // This logic is shamelessly borrowed from Esprima
	  // https://github.com/ariya/esprimas
	  //
	  if (!isDigit(ch) && ch !== 0x2E/* . */) {
	    state.err = 'SvgPath: param should start with 0..9 or `.` (at pos ' + index + ')';
	    return;
	  }

	  if (ch !== 0x2E/* . */) {
	    zeroFirst = (ch === 0x30/* 0 */);
	    index++;

	    ch = (index < max) ? state.path.charCodeAt(index) : 0;

	    if (zeroFirst && index < max) {
	      // decimal number starts with '0' such as '09' is illegal.
	      if (ch && isDigit(ch)) {
	        state.err = 'SvgPath: numbers started with `0` such as `09` are illegal (at pos ' + start + ')';
	        return;
	      }
	    }

	    while (index < max && isDigit(state.path.charCodeAt(index))) {
	      index++;
	      hasCeiling = true;
	    }
	    ch = (index < max) ? state.path.charCodeAt(index) : 0;
	  }

	  if (ch === 0x2E/* . */) {
	    hasDot = true;
	    index++;
	    while (isDigit(state.path.charCodeAt(index))) {
	      index++;
	      hasDecimal = true;
	    }
	    ch = (index < max) ? state.path.charCodeAt(index) : 0;
	  }

	  if (ch === 0x65/* e */ || ch === 0x45/* E */) {
	    if (hasDot && !hasCeiling && !hasDecimal) {
	      state.err = 'SvgPath: invalid float exponent (at pos ' + index + ')';
	      return;
	    }

	    index++;

	    ch = (index < max) ? state.path.charCodeAt(index) : 0;
	    if (ch === 0x2B/* + */ || ch === 0x2D/* - */) {
	      index++;
	    }
	    if (index < max && isDigit(state.path.charCodeAt(index))) {
	      while (index < max && isDigit(state.path.charCodeAt(index))) {
	        index++;
	      }
	    } else {
	      state.err = 'SvgPath: invalid float exponent (at pos ' + index + ')';
	      return;
	    }
	  }

	  state.index = index;
	  state.param = parseFloat(state.path.slice(start, index)) + 0.0;
	}


	function finalizeSegment(state) {
	  var cmd, cmdLC;

	  // Process duplicated commands (without comand name)

	  // This logic is shamelessly borrowed from Raphael
	  // https://github.com/DmitryBaranovskiy/raphael/
	  //
	  cmd   = state.path[state.segmentStart];
	  cmdLC = cmd.toLowerCase();

	  var params = state.data;

	  if (cmdLC === 'm' && params.length > 2) {
	    state.result.push([ cmd, params[0], params[1] ]);
	    params = params.slice(2);
	    cmdLC = 'l';
	    cmd = (cmd === 'm') ? 'l' : 'L';
	  }

	  if (cmdLC === 'r') {
	    state.result.push([ cmd ].concat(params));
	  } else {

	    while (params.length >= paramCounts[cmdLC]) {
	      state.result.push([ cmd ].concat(params.splice(0, paramCounts[cmdLC])));
	      if (!paramCounts[cmdLC]) {
	        break;
	      }
	    }
	  }
	}


	function scanSegment(state) {
	  var max = state.max,
	      cmdCode, is_arc, comma_found, need_params, i;

	  state.segmentStart = state.index;
	  cmdCode = state.path.charCodeAt(state.index);
	  is_arc = isArc(cmdCode);

	  if (!isCommand(cmdCode)) {
	    state.err = 'SvgPath: bad command ' + state.path[state.index] + ' (at pos ' + state.index + ')';
	    return;
	  }

	  need_params = paramCounts[state.path[state.index].toLowerCase()];

	  state.index++;
	  skipSpaces(state);

	  state.data = [];

	  if (!need_params) {
	    // Z
	    finalizeSegment(state);
	    return;
	  }

	  comma_found = false;

	  for (;;) {
	    for (i = need_params; i > 0; i--) {
	      if (is_arc && (i === 3 || i === 4)) scanFlag(state);
	      else scanParam(state);

	      if (state.err.length) {
	        finalizeSegment(state);
	        return;
	      }
	      state.data.push(state.param);

	      skipSpaces(state);
	      comma_found = false;

	      if (state.index < max && state.path.charCodeAt(state.index) === 0x2C/* , */) {
	        state.index++;
	        skipSpaces(state);
	        comma_found = true;
	      }
	    }

	    // after ',' param is mandatory
	    if (comma_found) {
	      continue;
	    }

	    if (state.index >= state.max) {
	      break;
	    }

	    // Stop on next segment
	    if (!isDigitStart(state.path.charCodeAt(state.index))) {
	      break;
	    }
	  }

	  finalizeSegment(state);
	}


	/* Returns array of segments:
	 *
	 * [
	 *   [ command, coord1, coord2, ... ]
	 * ]
	 */
	path_parse = function pathParse(svgPath) {
	  var state = new State(svgPath);
	  var max = state.max;

	  skipSpaces(state);

	  while (state.index < max && !state.err.length) {
	    scanSegment(state);
	  }

	  if (state.result.length) {
	    if ('mM'.indexOf(state.result[0][0]) < 0) {
	      state.err = 'SvgPath: string should start with `M` or `m`';
	      state.result = [];
	    } else {
	      state.result[0][0] = 'M';
	    }
	  }

	  return {
	    err: state.err,
	    segments: state.result
	  };
	};
	return path_parse;
}

var matrix;
var hasRequiredMatrix;

function requireMatrix () {
	if (hasRequiredMatrix) return matrix;
	hasRequiredMatrix = 1;

	// combine 2 matrixes
	// m1, m2 - [a, b, c, d, e, g]
	//
	function combine(m1, m2) {
	  return [
	    m1[0] * m2[0] + m1[2] * m2[1],
	    m1[1] * m2[0] + m1[3] * m2[1],
	    m1[0] * m2[2] + m1[2] * m2[3],
	    m1[1] * m2[2] + m1[3] * m2[3],
	    m1[0] * m2[4] + m1[2] * m2[5] + m1[4],
	    m1[1] * m2[4] + m1[3] * m2[5] + m1[5]
	  ];
	}


	function Matrix() {
	  if (!(this instanceof Matrix)) { return new Matrix(); }
	  this.queue = [];   // list of matrixes to apply
	  this.cache = null; // combined matrix cache
	}


	Matrix.prototype.matrix = function (m) {
	  if (m[0] === 1 && m[1] === 0 && m[2] === 0 && m[3] === 1 && m[4] === 0 && m[5] === 0) {
	    return this;
	  }
	  this.cache = null;
	  this.queue.push(m);
	  return this;
	};


	Matrix.prototype.translate = function (tx, ty) {
	  if (tx !== 0 || ty !== 0) {
	    this.cache = null;
	    this.queue.push([ 1, 0, 0, 1, tx, ty ]);
	  }
	  return this;
	};


	Matrix.prototype.scale = function (sx, sy) {
	  if (sx !== 1 || sy !== 1) {
	    this.cache = null;
	    this.queue.push([ sx, 0, 0, sy, 0, 0 ]);
	  }
	  return this;
	};


	Matrix.prototype.rotate = function (angle, rx, ry) {
	  var rad, cos, sin;

	  if (angle !== 0) {
	    this.translate(rx, ry);

	    rad = angle * Math.PI / 180;
	    cos = Math.cos(rad);
	    sin = Math.sin(rad);

	    this.queue.push([ cos, sin, -sin, cos, 0, 0 ]);
	    this.cache = null;

	    this.translate(-rx, -ry);
	  }
	  return this;
	};


	Matrix.prototype.skewX = function (angle) {
	  if (angle !== 0) {
	    this.cache = null;
	    this.queue.push([ 1, 0, Math.tan(angle * Math.PI / 180), 1, 0, 0 ]);
	  }
	  return this;
	};


	Matrix.prototype.skewY = function (angle) {
	  if (angle !== 0) {
	    this.cache = null;
	    this.queue.push([ 1, Math.tan(angle * Math.PI / 180), 0, 1, 0, 0 ]);
	  }
	  return this;
	};


	// Flatten queue
	//
	Matrix.prototype.toArray = function () {
	  if (this.cache) {
	    return this.cache;
	  }

	  if (!this.queue.length) {
	    this.cache = [ 1, 0, 0, 1, 0, 0 ];
	    return this.cache;
	  }

	  this.cache = this.queue[0];

	  if (this.queue.length === 1) {
	    return this.cache;
	  }

	  for (var i = 1; i < this.queue.length; i++) {
	    this.cache = combine(this.cache, this.queue[i]);
	  }

	  return this.cache;
	};


	// Apply list of matrixes to (x,y) point.
	// If `isRelative` set, `translate` component of matrix will be skipped
	//
	Matrix.prototype.calc = function (x, y, isRelative) {
	  var m;

	  // Don't change point on empty transforms queue
	  if (!this.queue.length) { return [ x, y ]; }

	  // Calculate final matrix, if not exists
	  //
	  // NB. if you deside to apply transforms to point one-by-one,
	  // they should be taken in reverse order

	  if (!this.cache) {
	    this.cache = this.toArray();
	  }

	  m = this.cache;

	  // Apply matrix to point
	  return [
	    x * m[0] + y * m[2] + (isRelative ? 0 : m[4]),
	    x * m[1] + y * m[3] + (isRelative ? 0 : m[5])
	  ];
	};


	matrix = Matrix;
	return matrix;
}

var transform_parse;
var hasRequiredTransform_parse;

function requireTransform_parse () {
	if (hasRequiredTransform_parse) return transform_parse;
	hasRequiredTransform_parse = 1;


	var Matrix = requireMatrix();

	var operations = {
	  matrix: true,
	  scale: true,
	  rotate: true,
	  translate: true,
	  skewX: true,
	  skewY: true
	};

	var CMD_SPLIT_RE    = /\s*(matrix|translate|scale|rotate|skewX|skewY)\s*\(\s*(.+?)\s*\)[\s,]*/;
	var PARAMS_SPLIT_RE = /[\s,]+/;


	transform_parse = function transformParse(transformString) {
	  var matrix = new Matrix();
	  var cmd, params;

	  // Split value into ['', 'translate', '10 50', '', 'scale', '2', '', 'rotate',  '-45', '']
	  transformString.split(CMD_SPLIT_RE).forEach(function (item) {

	    // Skip empty elements
	    if (!item.length) { return; }

	    // remember operation
	    if (typeof operations[item] !== 'undefined') {
	      cmd = item;
	      return;
	    }

	    // extract params & att operation to matrix
	    params = item.split(PARAMS_SPLIT_RE).map(function (i) {
	      return +i || 0;
	    });

	    // If params count is not correct - ignore command
	    switch (cmd) {
	      case 'matrix':
	        if (params.length === 6) {
	          matrix.matrix(params);
	        }
	        return;

	      case 'scale':
	        if (params.length === 1) {
	          matrix.scale(params[0], params[0]);
	        } else if (params.length === 2) {
	          matrix.scale(params[0], params[1]);
	        }
	        return;

	      case 'rotate':
	        if (params.length === 1) {
	          matrix.rotate(params[0], 0, 0);
	        } else if (params.length === 3) {
	          matrix.rotate(params[0], params[1], params[2]);
	        }
	        return;

	      case 'translate':
	        if (params.length === 1) {
	          matrix.translate(params[0], 0);
	        } else if (params.length === 2) {
	          matrix.translate(params[0], params[1]);
	        }
	        return;

	      case 'skewX':
	        if (params.length === 1) {
	          matrix.skewX(params[0]);
	        }
	        return;

	      case 'skewY':
	        if (params.length === 1) {
	          matrix.skewY(params[0]);
	        }
	        return;
	    }
	  });

	  return matrix;
	};
	return transform_parse;
}

var a2c;
var hasRequiredA2c;

function requireA2c () {
	if (hasRequiredA2c) return a2c;
	hasRequiredA2c = 1;


	var TAU = Math.PI * 2;


	/* eslint-disable space-infix-ops */

	// Calculate an angle between two unit vectors
	//
	// Since we measure angle between radii of circular arcs,
	// we can use simplified math (without length normalization)
	//
	function unit_vector_angle(ux, uy, vx, vy) {
	  var sign = (ux * vy - uy * vx < 0) ? -1 : 1;
	  var dot  = ux * vx + uy * vy;

	  // Add this to work with arbitrary vectors:
	  // dot /= Math.sqrt(ux * ux + uy * uy) * Math.sqrt(vx * vx + vy * vy);

	  // rounding errors, e.g. -1.0000000000000002 can screw up this
	  if (dot >  1.0) { dot =  1.0; }
	  if (dot < -1) { dot = -1; }

	  return sign * Math.acos(dot);
	}


	// Convert from endpoint to center parameterization,
	// see http://www.w3.org/TR/SVG11/implnote.html#ArcImplementationNotes
	//
	// Return [cx, cy, theta1, delta_theta]
	//
	function get_arc_center(x1, y1, x2, y2, fa, fs, rx, ry, sin_phi, cos_phi) {
	  // Step 1.
	  //
	  // Moving an ellipse so origin will be the middlepoint between our two
	  // points. After that, rotate it to line up ellipse axes with coordinate
	  // axes.
	  //
	  var x1p =  cos_phi*(x1-x2)/2 + sin_phi*(y1-y2)/2;
	  var y1p = -sin_phi*(x1-x2)/2 + cos_phi*(y1-y2)/2;

	  var rx_sq  =  rx * rx;
	  var ry_sq  =  ry * ry;
	  var x1p_sq = x1p * x1p;
	  var y1p_sq = y1p * y1p;

	  // Step 2.
	  //
	  // Compute coordinates of the centre of this ellipse (cx', cy')
	  // in the new coordinate system.
	  //
	  var radicant = (rx_sq * ry_sq) - (rx_sq * y1p_sq) - (ry_sq * x1p_sq);

	  if (radicant < 0) {
	    // due to rounding errors it might be e.g. -1.3877787807814457e-17
	    radicant = 0;
	  }

	  radicant /=   (rx_sq * y1p_sq) + (ry_sq * x1p_sq);
	  radicant = Math.sqrt(radicant) * (fa === fs ? -1 : 1);

	  var cxp = radicant *  rx/ry * y1p;
	  var cyp = radicant * -ry/rx * x1p;

	  // Step 3.
	  //
	  // Transform back to get centre coordinates (cx, cy) in the original
	  // coordinate system.
	  //
	  var cx = cos_phi*cxp - sin_phi*cyp + (x1+x2)/2;
	  var cy = sin_phi*cxp + cos_phi*cyp + (y1+y2)/2;

	  // Step 4.
	  //
	  // Compute angles (theta1, delta_theta).
	  //
	  var v1x =  (x1p - cxp) / rx;
	  var v1y =  (y1p - cyp) / ry;
	  var v2x = (-x1p - cxp) / rx;
	  var v2y = (-y1p - cyp) / ry;

	  var theta1 = unit_vector_angle(1, 0, v1x, v1y);
	  var delta_theta = unit_vector_angle(v1x, v1y, v2x, v2y);

	  if (fs === 0 && delta_theta > 0) {
	    delta_theta -= TAU;
	  }
	  if (fs === 1 && delta_theta < 0) {
	    delta_theta += TAU;
	  }

	  return [ cx, cy, theta1, delta_theta ];
	}

	//
	// Approximate one unit arc segment with bézier curves,
	// see http://math.stackexchange.com/questions/873224
	//
	function approximate_unit_arc(theta1, delta_theta) {
	  var alpha = 4/3 * Math.tan(delta_theta/4);

	  var x1 = Math.cos(theta1);
	  var y1 = Math.sin(theta1);
	  var x2 = Math.cos(theta1 + delta_theta);
	  var y2 = Math.sin(theta1 + delta_theta);

	  return [ x1, y1, x1 - y1*alpha, y1 + x1*alpha, x2 + y2*alpha, y2 - x2*alpha, x2, y2 ];
	}

	a2c = function a2c(x1, y1, x2, y2, fa, fs, rx, ry, phi) {
	  var sin_phi = Math.sin(phi * TAU / 360);
	  var cos_phi = Math.cos(phi * TAU / 360);

	  // Make sure radii are valid
	  //
	  var x1p =  cos_phi*(x1-x2)/2 + sin_phi*(y1-y2)/2;
	  var y1p = -sin_phi*(x1-x2)/2 + cos_phi*(y1-y2)/2;

	  if (x1p === 0 && y1p === 0) {
	    // we're asked to draw line to itself
	    return [];
	  }

	  if (rx === 0 || ry === 0) {
	    // one of the radii is zero
	    return [];
	  }


	  // Compensate out-of-range radii
	  //
	  rx = Math.abs(rx);
	  ry = Math.abs(ry);

	  var lambda = (x1p * x1p) / (rx * rx) + (y1p * y1p) / (ry * ry);
	  if (lambda > 1) {
	    rx *= Math.sqrt(lambda);
	    ry *= Math.sqrt(lambda);
	  }


	  // Get center parameters (cx, cy, theta1, delta_theta)
	  //
	  var cc = get_arc_center(x1, y1, x2, y2, fa, fs, rx, ry, sin_phi, cos_phi);

	  var result = [];
	  var theta1 = cc[2];
	  var delta_theta = cc[3];

	  // Split an arc to multiple segments, so each segment
	  // will be less than τ/4 (= 90°)
	  //
	  var segments = Math.max(Math.ceil(Math.abs(delta_theta) / (TAU / 4)), 1);
	  delta_theta /= segments;

	  for (var i = 0; i < segments; i++) {
	    result.push(approximate_unit_arc(theta1, delta_theta));
	    theta1 += delta_theta;
	  }

	  // We have a bezier approximation of a unit circle,
	  // now need to transform back to the original ellipse
	  //
	  return result.map(function (curve) {
	    for (var i = 0; i < curve.length; i += 2) {
	      var x = curve[i + 0];
	      var y = curve[i + 1];

	      // scale
	      x *= rx;
	      y *= ry;

	      // rotate
	      var xp = cos_phi*x - sin_phi*y;
	      var yp = sin_phi*x + cos_phi*y;

	      // translate
	      curve[i + 0] = xp + cc[0];
	      curve[i + 1] = yp + cc[1];
	    }

	    return curve;
	  });
	};
	return a2c;
}

var ellipse;
var hasRequiredEllipse;

function requireEllipse () {
	if (hasRequiredEllipse) return ellipse;
	hasRequiredEllipse = 1;

	/* eslint-disable space-infix-ops */

	// The precision used to consider an ellipse as a circle
	//
	var epsilon = 0.0000000001;

	// To convert degree in radians
	//
	var torad = Math.PI / 180;

	// Class constructor :
	//  an ellipse centred at 0 with radii rx,ry and x - axis - angle ax.
	//
	function Ellipse(rx, ry, ax) {
	  if (!(this instanceof Ellipse)) { return new Ellipse(rx, ry, ax); }
	  this.rx = rx;
	  this.ry = ry;
	  this.ax = ax;
	}

	// Apply a linear transform m to the ellipse
	// m is an array representing a matrix :
	//    -         -
	//   | m[0] m[2] |
	//   | m[1] m[3] |
	//    -         -
	//
	Ellipse.prototype.transform = function (m) {
	  // We consider the current ellipse as image of the unit circle
	  // by first scale(rx,ry) and then rotate(ax) ...
	  // So we apply ma =  m x rotate(ax) x scale(rx,ry) to the unit circle.
	  var c = Math.cos(this.ax * torad), s = Math.sin(this.ax * torad);
	  var ma = [
	    this.rx * (m[0]*c + m[2]*s),
	    this.rx * (m[1]*c + m[3]*s),
	    this.ry * (-m[0]*s + m[2]*c),
	    this.ry * (-m[1]*s + m[3]*c)
	  ];

	  // ma * transpose(ma) = [ J L ]
	  //                      [ L K ]
	  // L is calculated later (if the image is not a circle)
	  var J = ma[0]*ma[0] + ma[2]*ma[2],
	      K = ma[1]*ma[1] + ma[3]*ma[3];

	  // the discriminant of the characteristic polynomial of ma * transpose(ma)
	  var D = ((ma[0]-ma[3])*(ma[0]-ma[3]) + (ma[2]+ma[1])*(ma[2]+ma[1])) *
	          ((ma[0]+ma[3])*(ma[0]+ma[3]) + (ma[2]-ma[1])*(ma[2]-ma[1]));

	  // the "mean eigenvalue"
	  var JK = (J + K) / 2;

	  // check if the image is (almost) a circle
	  if (D < epsilon * JK) {
	    // if it is
	    this.rx = this.ry = Math.sqrt(JK);
	    this.ax = 0;
	    return this;
	  }

	  // if it is not a circle
	  var L = ma[0]*ma[1] + ma[2]*ma[3];

	  D = Math.sqrt(D);

	  // {l1,l2} = the two eigen values of ma * transpose(ma)
	  var l1 = JK + D/2,
	      l2 = JK - D/2;
	  // the x - axis - rotation angle is the argument of the l1 - eigenvector
	  /*eslint-disable indent*/
	  this.ax = (Math.abs(L) < epsilon && Math.abs(l1 - K) < epsilon) ?
	    90
	  :
	    Math.atan(Math.abs(L) > Math.abs(l1 - K) ?
	      (l1 - J) / L
	    :
	      L / (l1 - K)
	    ) * 180 / Math.PI;
	  /*eslint-enable indent*/

	  // if ax > 0 => rx = sqrt(l1), ry = sqrt(l2), else exchange axes and ax += 90
	  if (this.ax >= 0) {
	    // if ax in [0,90]
	    this.rx = Math.sqrt(l1);
	    this.ry = Math.sqrt(l2);
	  } else {
	    // if ax in ]-90,0[ => exchange axes
	    this.ax += 90;
	    this.rx = Math.sqrt(l2);
	    this.ry = Math.sqrt(l1);
	  }

	  return this;
	};

	// Check if the ellipse is (almost) degenerate, i.e. rx = 0 or ry = 0
	//
	Ellipse.prototype.isDegenerate = function () {
	  return (this.rx < epsilon * this.ry || this.ry < epsilon * this.rx);
	};

	ellipse = Ellipse;
	return ellipse;
}

var svgpath$1;
var hasRequiredSvgpath$1;

function requireSvgpath$1 () {
	if (hasRequiredSvgpath$1) return svgpath$1;
	hasRequiredSvgpath$1 = 1;


	var pathParse      = requirePath_parse();
	var transformParse = requireTransform_parse();
	var matrix         = requireMatrix();
	var a2c            = requireA2c();
	var ellipse        = requireEllipse();


	// Class constructor
	//
	function SvgPath(path) {
	  if (!(this instanceof SvgPath)) { return new SvgPath(path); }

	  var pstate = pathParse(path);

	  // Array of path segments.
	  // Each segment is array [command, param1, param2, ...]
	  this.segments = pstate.segments;

	  // Error message on parse error.
	  this.err      = pstate.err;

	  // Transforms stack for lazy evaluation
	  this.__stack    = [];
	}

	SvgPath.from = function (src) {
	  if (typeof src === 'string') return new SvgPath(src);

	  if (src instanceof SvgPath) {
	    // Create empty object
	    var s = new SvgPath('');

	    // Clone properies
	    s.err = src.err;
	    s.segments = src.segments.map(function (sgm) { return sgm.slice(); });
	    s.__stack = src.__stack.map(function (m) {
	      return matrix().matrix(m.toArray());
	    });

	    return s;
	  }

	  throw new Error('SvgPath.from: invalid param type ' + src);
	};


	SvgPath.prototype.__matrix = function (m) {
	  var self = this, i;

	  // Quick leave for empty matrix
	  if (!m.queue.length) { return; }

	  this.iterate(function (s, index, x, y) {
	    var p, result, name, isRelative;

	    switch (s[0]) {

	      // Process 'assymetric' commands separately
	      case 'v':
	        p      = m.calc(0, s[1], true);
	        result = (p[0] === 0) ? [ 'v', p[1] ] : [ 'l', p[0], p[1] ];
	        break;

	      case 'V':
	        p      = m.calc(x, s[1], false);
	        result = (p[0] === m.calc(x, y, false)[0]) ? [ 'V', p[1] ] : [ 'L', p[0], p[1] ];
	        break;

	      case 'h':
	        p      = m.calc(s[1], 0, true);
	        result = (p[1] === 0) ? [ 'h', p[0] ] : [ 'l', p[0], p[1] ];
	        break;

	      case 'H':
	        p      = m.calc(s[1], y, false);
	        result = (p[1] === m.calc(x, y, false)[1]) ? [ 'H', p[0] ] : [ 'L', p[0], p[1] ];
	        break;

	      case 'a':
	      case 'A':
	        // ARC is: ['A', rx, ry, x-axis-rotation, large-arc-flag, sweep-flag, x, y]

	        // Drop segment if arc is empty (end point === start point)
	        /*if ((s[0] === 'A' && s[6] === x && s[7] === y) ||
	            (s[0] === 'a' && s[6] === 0 && s[7] === 0)) {
	          return [];
	        }*/

	        // Transform rx, ry and the x-axis-rotation
	        var ma = m.toArray();
	        var e = ellipse(s[1], s[2], s[3]).transform(ma);

	        // flip sweep-flag if matrix is not orientation-preserving
	        if (ma[0] * ma[3] - ma[1] * ma[2] < 0) {
	          s[5] = s[5] ? '0' : '1';
	        }

	        // Transform end point as usual (without translation for relative notation)
	        p = m.calc(s[6], s[7], s[0] === 'a');

	        // Empty arcs can be ignored by renderer, but should not be dropped
	        // to avoid collisions with `S A S` and so on. Replace with empty line.
	        if ((s[0] === 'A' && s[6] === x && s[7] === y) ||
	            (s[0] === 'a' && s[6] === 0 && s[7] === 0)) {
	          result = [ s[0] === 'a' ? 'l' : 'L', p[0], p[1] ];
	          break;
	        }

	        // if the resulting ellipse is (almost) a segment ...
	        if (e.isDegenerate()) {
	          // replace the arc by a line
	          result = [ s[0] === 'a' ? 'l' : 'L', p[0], p[1] ];
	        } else {
	          // if it is a real ellipse
	          // s[0], s[4] and s[5] are not modified
	          result = [ s[0], e.rx, e.ry, e.ax, s[4], s[5], p[0], p[1] ];
	        }

	        break;

	      case 'm':
	        // Edge case. The very first `m` should be processed as absolute, if happens.
	        // Make sense for coord shift transforms.
	        isRelative = index > 0;

	        p = m.calc(s[1], s[2], isRelative);
	        result = [ 'm', p[0], p[1] ];
	        break;

	      default:
	        name       = s[0];
	        result     = [ name ];
	        isRelative = (name.toLowerCase() === name);

	        // Apply transformations to the segment
	        for (i = 1; i < s.length; i += 2) {
	          p = m.calc(s[i], s[i + 1], isRelative);
	          result.push(p[0], p[1]);
	        }
	    }

	    self.segments[index] = result;
	  }, true);
	};


	// Apply stacked commands
	//
	SvgPath.prototype.__evaluateStack = function () {
	  var m, i;

	  if (!this.__stack.length) { return; }

	  if (this.__stack.length === 1) {
	    this.__matrix(this.__stack[0]);
	    this.__stack = [];
	    return;
	  }

	  m = matrix();
	  i = this.__stack.length;

	  while (--i >= 0) {
	    m.matrix(this.__stack[i].toArray());
	  }

	  this.__matrix(m);
	  this.__stack = [];
	};


	// Convert processed SVG Path back to string
	//
	SvgPath.prototype.toString = function () {
	  var result = '', prevCmd = '', cmdSkipped = false;

	  this.__evaluateStack();

	  for (var i = 0, len = this.segments.length; i < len; i++) {
	    var segment = this.segments[i];
	    var cmd = segment[0];

	    // Command not repeating => store
	    if (cmd !== prevCmd || cmd === 'm' || cmd === 'M') {
	      // workaround for FontForge SVG importing bug, keep space between "z m".
	      if (cmd === 'm' && prevCmd === 'z') result += ' ';
	      result += cmd;

	      cmdSkipped = false;
	    } else {
	      cmdSkipped = true;
	    }

	    // Store segment params
	    for (var pos = 1; pos < segment.length; pos++) {
	      var val = segment[pos];
	      // Space can be skipped
	      // 1. After command (always)
	      // 2. For negative value (with '-' at start)
	      if (pos === 1) {
	        if (cmdSkipped && val >= 0) result += ' ';
	      } else if (val >= 0) result += ' ';

	      result += val;
	    }

	    prevCmd = cmd;
	  }

	  return result;
	};


	// Translate path to (x [, y])
	//
	SvgPath.prototype.translate = function (x, y) {
	  this.__stack.push(matrix().translate(x, y || 0));
	  return this;
	};


	// Scale path to (sx [, sy])
	// sy = sx if not defined
	//
	SvgPath.prototype.scale = function (sx, sy) {
	  this.__stack.push(matrix().scale(sx, (!sy && (sy !== 0)) ? sx : sy));
	  return this;
	};


	// Rotate path around point (sx [, sy])
	// sy = sx if not defined
	//
	SvgPath.prototype.rotate = function (angle, rx, ry) {
	  this.__stack.push(matrix().rotate(angle, rx || 0, ry || 0));
	  return this;
	};


	// Skew path along the X axis by `degrees` angle
	//
	SvgPath.prototype.skewX = function (degrees) {
	  this.__stack.push(matrix().skewX(degrees));
	  return this;
	};


	// Skew path along the Y axis by `degrees` angle
	//
	SvgPath.prototype.skewY = function (degrees) {
	  this.__stack.push(matrix().skewY(degrees));
	  return this;
	};


	// Apply matrix transform (array of 6 elements)
	//
	SvgPath.prototype.matrix = function (m) {
	  this.__stack.push(matrix().matrix(m));
	  return this;
	};


	// Transform path according to "transform" attr of SVG spec
	//
	SvgPath.prototype.transform = function (transformString) {
	  if (!transformString.trim()) {
	    return this;
	  }
	  this.__stack.push(transformParse(transformString));
	  return this;
	};


	// Round coords with given decimal precition.
	// 0 by default (to integers)
	//
	SvgPath.prototype.round = function (d) {
	  var contourStartDeltaX = 0, contourStartDeltaY = 0, deltaX = 0, deltaY = 0, l;

	  d = d || 0;

	  this.__evaluateStack();

	  this.segments.forEach(function (s) {
	    var isRelative = (s[0].toLowerCase() === s[0]);

	    switch (s[0]) {
	      case 'H':
	      case 'h':
	        if (isRelative) { s[1] += deltaX; }
	        deltaX = s[1] - s[1].toFixed(d);
	        s[1] = +s[1].toFixed(d);
	        return;

	      case 'V':
	      case 'v':
	        if (isRelative) { s[1] += deltaY; }
	        deltaY = s[1] - s[1].toFixed(d);
	        s[1] = +s[1].toFixed(d);
	        return;

	      case 'Z':
	      case 'z':
	        deltaX = contourStartDeltaX;
	        deltaY = contourStartDeltaY;
	        return;

	      case 'M':
	      case 'm':
	        if (isRelative) {
	          s[1] += deltaX;
	          s[2] += deltaY;
	        }

	        deltaX = s[1] - s[1].toFixed(d);
	        deltaY = s[2] - s[2].toFixed(d);

	        contourStartDeltaX = deltaX;
	        contourStartDeltaY = deltaY;

	        s[1] = +s[1].toFixed(d);
	        s[2] = +s[2].toFixed(d);
	        return;

	      case 'A':
	      case 'a':
	        // [cmd, rx, ry, x-axis-rotation, large-arc-flag, sweep-flag, x, y]
	        if (isRelative) {
	          s[6] += deltaX;
	          s[7] += deltaY;
	        }

	        deltaX = s[6] - s[6].toFixed(d);
	        deltaY = s[7] - s[7].toFixed(d);

	        s[1] = +s[1].toFixed(d);
	        s[2] = +s[2].toFixed(d);
	        s[3] = +s[3].toFixed(d + 2); // better precision for rotation
	        s[6] = +s[6].toFixed(d);
	        s[7] = +s[7].toFixed(d);
	        return;

	      default:
	        // a c l q s t
	        l = s.length;

	        if (isRelative) {
	          s[l - 2] += deltaX;
	          s[l - 1] += deltaY;
	        }

	        deltaX = s[l - 2] - s[l - 2].toFixed(d);
	        deltaY = s[l - 1] - s[l - 1].toFixed(d);

	        s.forEach(function (val, i) {
	          if (!i) { return; }
	          s[i] = +s[i].toFixed(d);
	        });
	        return;
	    }
	  });

	  return this;
	};


	// Apply iterator function to all segments. If function returns result,
	// current segment will be replaced to array of returned segments.
	// If empty array is returned, current regment will be deleted.
	//
	SvgPath.prototype.iterate = function (iterator, keepLazyStack) {
	  var segments = this.segments,
	      replacements = {},
	      needReplace = false,
	      lastX = 0,
	      lastY = 0,
	      countourStartX = 0,
	      countourStartY = 0;
	  var i, j, newSegments;

	  if (!keepLazyStack) {
	    this.__evaluateStack();
	  }

	  segments.forEach(function (s, index) {

	    var res = iterator(s, index, lastX, lastY);

	    if (Array.isArray(res)) {
	      replacements[index] = res;
	      needReplace = true;
	    }

	    var isRelative = (s[0] === s[0].toLowerCase());

	    // calculate absolute X and Y
	    switch (s[0]) {
	      case 'm':
	      case 'M':
	        lastX = s[1] + (isRelative ? lastX : 0);
	        lastY = s[2] + (isRelative ? lastY : 0);
	        countourStartX = lastX;
	        countourStartY = lastY;
	        return;

	      case 'h':
	      case 'H':
	        lastX = s[1] + (isRelative ? lastX : 0);
	        return;

	      case 'v':
	      case 'V':
	        lastY = s[1] + (isRelative ? lastY : 0);
	        return;

	      case 'z':
	      case 'Z':
	        // That make sence for multiple contours
	        lastX = countourStartX;
	        lastY = countourStartY;
	        return;

	      default:
	        lastX = s[s.length - 2] + (isRelative ? lastX : 0);
	        lastY = s[s.length - 1] + (isRelative ? lastY : 0);
	    }
	  });

	  // Replace segments if iterator return results

	  if (!needReplace) { return this; }

	  newSegments = [];

	  for (i = 0; i < segments.length; i++) {
	    if (typeof replacements[i] !== 'undefined') {
	      for (j = 0; j < replacements[i].length; j++) {
	        newSegments.push(replacements[i][j]);
	      }
	    } else {
	      newSegments.push(segments[i]);
	    }
	  }

	  this.segments = newSegments;

	  return this;
	};


	// Converts segments from relative to absolute
	//
	SvgPath.prototype.abs = function () {

	  this.iterate(function (s, index, x, y) {
	    var name = s[0],
	        nameUC = name.toUpperCase(),
	        i;

	    // Skip absolute commands
	    if (name === nameUC) { return; }

	    s[0] = nameUC;

	    switch (name) {
	      case 'v':
	        // v has shifted coords parity
	        s[1] += y;
	        return;

	      case 'a':
	        // ARC is: ['A', rx, ry, x-axis-rotation, large-arc-flag, sweep-flag, x, y]
	        // touch x, y only
	        s[6] += x;
	        s[7] += y;
	        return;

	      default:
	        for (i = 1; i < s.length; i++) {
	          s[i] += i % 2 ? x : y; // odd values are X, even - Y
	        }
	    }
	  }, true);

	  return this;
	};


	// Converts segments from absolute to relative
	//
	SvgPath.prototype.rel = function () {

	  this.iterate(function (s, index, x, y) {
	    var name = s[0],
	        nameLC = name.toLowerCase(),
	        i;

	    // Skip relative commands
	    if (name === nameLC) { return; }

	    // Don't touch the first M to avoid potential confusions.
	    if (index === 0 && name === 'M') { return; }

	    s[0] = nameLC;

	    switch (name) {
	      case 'V':
	        // V has shifted coords parity
	        s[1] -= y;
	        return;

	      case 'A':
	        // ARC is: ['A', rx, ry, x-axis-rotation, large-arc-flag, sweep-flag, x, y]
	        // touch x, y only
	        s[6] -= x;
	        s[7] -= y;
	        return;

	      default:
	        for (i = 1; i < s.length; i++) {
	          s[i] -= i % 2 ? x : y; // odd values are X, even - Y
	        }
	    }
	  }, true);

	  return this;
	};


	// Converts arcs to cubic bézier curves
	//
	SvgPath.prototype.unarc = function () {
	  this.iterate(function (s, index, x, y) {
	    var new_segments, nextX, nextY, result = [], name = s[0];

	    // Skip anything except arcs
	    if (name !== 'A' && name !== 'a') { return null; }

	    if (name === 'a') {
	      // convert relative arc coordinates to absolute
	      nextX = x + s[6];
	      nextY = y + s[7];
	    } else {
	      nextX = s[6];
	      nextY = s[7];
	    }

	    new_segments = a2c(x, y, nextX, nextY, s[4], s[5], s[1], s[2], s[3]);

	    // Degenerated arcs can be ignored by renderer, but should not be dropped
	    // to avoid collisions with `S A S` and so on. Replace with empty line.
	    if (new_segments.length === 0) {
	      return [ [ s[0] === 'a' ? 'l' : 'L', s[6], s[7] ] ];
	    }

	    new_segments.forEach(function (s) {
	      result.push([ 'C', s[2], s[3], s[4], s[5], s[6], s[7] ]);
	    });

	    return result;
	  });

	  return this;
	};


	// Converts smooth curves (with missed control point) to generic curves
	//
	SvgPath.prototype.unshort = function () {
	  var segments = this.segments;
	  var prevControlX, prevControlY, prevSegment;
	  var curControlX, curControlY;

	  // TODO: add lazy evaluation flag when relative commands supported

	  this.iterate(function (s, idx, x, y) {
	    var name = s[0], nameUC = name.toUpperCase(), isRelative;

	    // First command MUST be M|m, it's safe to skip.
	    // Protect from access to [-1] for sure.
	    if (!idx) { return; }

	    if (nameUC === 'T') { // quadratic curve
	      isRelative = (name === 't');

	      prevSegment = segments[idx - 1];

	      if (prevSegment[0] === 'Q') {
	        prevControlX = prevSegment[1] - x;
	        prevControlY = prevSegment[2] - y;
	      } else if (prevSegment[0] === 'q') {
	        prevControlX = prevSegment[1] - prevSegment[3];
	        prevControlY = prevSegment[2] - prevSegment[4];
	      } else {
	        prevControlX = 0;
	        prevControlY = 0;
	      }

	      curControlX = -prevControlX;
	      curControlY = -prevControlY;

	      if (!isRelative) {
	        curControlX += x;
	        curControlY += y;
	      }

	      segments[idx] = [
	        isRelative ? 'q' : 'Q',
	        curControlX, curControlY,
	        s[1], s[2]
	      ];

	    } else if (nameUC === 'S') { // cubic curve
	      isRelative = (name === 's');

	      prevSegment = segments[idx - 1];

	      if (prevSegment[0] === 'C') {
	        prevControlX = prevSegment[3] - x;
	        prevControlY = prevSegment[4] - y;
	      } else if (prevSegment[0] === 'c') {
	        prevControlX = prevSegment[3] - prevSegment[5];
	        prevControlY = prevSegment[4] - prevSegment[6];
	      } else {
	        prevControlX = 0;
	        prevControlY = 0;
	      }

	      curControlX = -prevControlX;
	      curControlY = -prevControlY;

	      if (!isRelative) {
	        curControlX += x;
	        curControlY += y;
	      }

	      segments[idx] = [
	        isRelative ? 'c' : 'C',
	        curControlX, curControlY,
	        s[1], s[2], s[3], s[4]
	      ];
	    }
	  });

	  return this;
	};


	svgpath$1 = SvgPath;
	return svgpath$1;
}

var svgpath;
var hasRequiredSvgpath;

function requireSvgpath () {
	if (hasRequiredSvgpath) return svgpath;
	hasRequiredSvgpath = 1;

	svgpath = requireSvgpath$1();
	return svgpath;
}

var svgpathExports = requireSvgpath();
var Path = /*@__PURE__*/getDefaultExportFromCjs(svgpathExports);

var pathProperties$1 = {exports: {}};

var pathProperties = pathProperties$1.exports;

var hasRequiredPathProperties;

function requirePathProperties () {
	if (hasRequiredPathProperties) return pathProperties$1.exports;
	hasRequiredPathProperties = 1;
	(function (module, exports) {
		// http://geoexamples.com/path-properties/ Version 0.2.2. Copyright 2017 Roger Veciana i Rovira.
		(function (global, factory) {
			factory(exports) ;
		}(pathProperties, (function (exports) {
		//Parses an SVG path into an object.
		//Taken from https://github.com/jkroso/parse-svg-path
		//Re-written so it can be used with rollup
		var length = {a: 7, c: 6, h: 1, l: 2, m: 2, q: 4, s: 4, t: 2, v: 1, z: 0};
		var segment = /([astvzqmhlc])([^astvzqmhlc]*)/ig;

		var parse = function(path) {
		  var data = [];
			path.replace(segment, function(_, command, args){
				var type = command.toLowerCase();
				args = parseValues(args);

				// overloaded moveTo
				if (type === 'm' && args.length > 2) {
					data.push([command].concat(args.splice(0, 2)));
					type = 'l';
					command = command === 'm' ? 'l' : 'L';
				}

				while (args.length >= 0) {
					if (args.length === length[type]) {
						args.unshift(command);
						return data.push(args);
					}
					if (args.length < length[type]) {
		        throw new Error('malformed path data');
		      }
					data.push([command].concat(args.splice(0, length[type])));
				}
			});
		  return data;
		};

		var number = /-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/ig;

		function parseValues(args) {
			var numbers = args.match(number);
			return numbers ? numbers.map(Number) : [];
		}

		//Calculate Bezier curve length and positionAtLength
		//Algorithms taken from http://bl.ocks.org/hnakamur/e7efd0602bfc15f66fc5, https://gist.github.com/tunght13488/6744e77c242cc7a94859 and http://stackoverflow.com/questions/11854907/calculate-the-length-of-a-segment-of-a-quadratic-bezier

		var Bezier = function(ax, ay, bx, by, cx, cy, dx, dy) {
		  return new Bezier$1(ax, ay, bx, by, cx, cy, dx, dy);
		};

		function Bezier$1(ax, ay, bx, by, cx, cy, dx, dy) {
		  this.a = {x:ax, y:ay};
		  this.b = {x:bx, y:by};
		  this.c = {x:cx, y:cy};
		  this.d = {x:dx, y:dy};

		  if(dx !== null && dx !== undefined && dy !== null && dy !== undefined){
		    this.getArcLength = getCubicArcLength;
		    this.getPoint = cubicPoint;
		    this.getDerivative = cubicDerivative;
		  } else {
		    this.getArcLength = getQuadraticArcLength;
		    this.getPoint = quadraticPoint;
		    this.getDerivative = quadraticDerivative;
		  }

		  this.init();
		}

		Bezier$1.prototype = {
		  constructor: Bezier$1,
		  init: function() {

		    this.length = this.getArcLength([this.a.x, this.b.x, this.c.x, this.d.x],
		                                    [this.a.y, this.b.y, this.c.y, this.d.y]);
		  },

		  getTotalLength: function() {
		    return this.length;
		  },
		  getPointAtLength: function(length) {
		    var t = t2length(length, this.length, this.getArcLength,
		                    [this.a.x, this.b.x, this.c.x, this.d.x],
		                    [this.a.y, this.b.y, this.c.y, this.d.y]);

		    return this.getPoint([this.a.x, this.b.x, this.c.x, this.d.x],
		                                    [this.a.y, this.b.y, this.c.y, this.d.y],
		                                  t);
		  },
		  getTangentAtLength: function(length){
		    var t = t2length(length, this.length, this.getArcLength,
		                    [this.a.x, this.b.x, this.c.x, this.d.x],
		                    [this.a.y, this.b.y, this.c.y, this.d.y]);

		    var derivative = this.getDerivative([this.a.x, this.b.x, this.c.x, this.d.x],
		                    [this.a.y, this.b.y, this.c.y, this.d.y], t);
		    var mdl = Math.sqrt(derivative.x * derivative.x + derivative.y * derivative.y);
		    var tangent;
		    if (mdl > 0){
		      tangent = {x: derivative.x/mdl, y: derivative.y/mdl};
		    } else {
		      tangent = {x: 0, y: 0};
		    }
		    return tangent;
		  },
		  getPropertiesAtLength: function(length){
		    var t = t2length(length, this.length, this.getArcLength,
		                    [this.a.x, this.b.x, this.c.x, this.d.x],
		                    [this.a.y, this.b.y, this.c.y, this.d.y]);

		    var derivative = this.getDerivative([this.a.x, this.b.x, this.c.x, this.d.x],
		                    [this.a.y, this.b.y, this.c.y, this.d.y], t);
		    var mdl = Math.sqrt(derivative.x * derivative.x + derivative.y * derivative.y);
		    var tangent;
		    if (mdl > 0){
		      tangent = {x: derivative.x/mdl, y: derivative.y/mdl};
		    } else {
		      tangent = {x: 0, y: 0};
		    }
		    var point = this.getPoint([this.a.x, this.b.x, this.c.x, this.d.x],
		                                    [this.a.y, this.b.y, this.c.y, this.d.y],
		                                  t);
		    return {x: point.x, y: point.y, tangentX: tangent.x, tangentY: tangent.y};
		  }
		};

		function quadraticDerivative(xs, ys, t){
		  return {x: (1 - t) * 2*(xs[1] - xs[0]) +t * 2*(xs[2] - xs[1]),
		    y: (1 - t) * 2*(ys[1] - ys[0]) +t * 2*(ys[2] - ys[1])
		  };
		}

		function cubicDerivative(xs, ys, t){
		  var derivative = quadraticPoint(
		            [3*(xs[1] - xs[0]), 3*(xs[2] - xs[1]), 3*(xs[3] - xs[2])],
		            [3*(ys[1] - ys[0]), 3*(ys[2] - ys[1]), 3*(ys[3] - ys[2])],
		            t);
		  return derivative;
		}

		function t2length(length, total_length, func, xs, ys){
		  var error = 1;
		  var t = length/total_length;
		  var step = (length - func(xs, ys, t))/total_length;

		  while (error > 0.001){
		    var increasedTLength = func(xs, ys, t + step);
		    var decreasedTLength = func(xs, ys, t - step);
		    var increasedTError = Math.abs(length - increasedTLength)/total_length;
		    var decreasedTError = Math.abs(length - decreasedTLength)/total_length;
		    if (increasedTError < error) {
		      error = increasedTError;
		      t += step;
		    } else if (decreasedTError < error) {
		      error = decreasedTError;
		      t -= step;
		    } else {
		      step /= 2;
		    }
		  }

		  return t;
		}

		function quadraticPoint(xs, ys, t){
		  var x = (1 - t) * (1 - t) * xs[0] + 2 * (1 - t) * t * xs[1] + t * t * xs[2];
		  var y = (1 - t) * (1 - t) * ys[0] + 2 * (1 - t) * t * ys[1] + t * t * ys[2];
		  return {x: x, y: y};
		}

		function cubicPoint(xs, ys, t){
		  var x = (1 - t) * (1 - t) * (1 - t) * xs[0] + 3 * (1 - t) * (1 - t) * t * xs[1] +
		  3 * (1 - t) * t * t * xs[2] + t * t * t * xs[3];
		  var y = (1 - t) * (1 - t) * (1 - t) * ys[0] + 3 * (1 - t) * (1 - t) * t * ys[1] +
		  3 * (1 - t) * t * t * ys[2] + t * t * t * ys[3];

		  return {x: x, y: y};
		}

		function getQuadraticArcLength(xs, ys, t) {
		  if (t === undefined) {
		    t = 1;
		  }
		   var ax = xs[0] - 2 * xs[1] + xs[2];
		   var ay = ys[0] - 2 * ys[1] + ys[2];
		   var bx = 2 * xs[1] - 2 * xs[0];
		   var by = 2 * ys[1] - 2 * ys[0];

		   var A = 4 * (ax * ax + ay * ay);
		   var B = 4 * (ax * bx + ay * by);
		   var C = bx * bx + by * by;

		   if(A === 0){
		     return t * Math.sqrt(Math.pow(xs[2] - xs[0], 2) + Math.pow(ys[2] - ys[0], 2));
		   }
		   var b = B/(2*A);
		   var c = C/A;
		   var u = t + b;
		   var k = c - b*b;

		   return (Math.sqrt(A)/2)*(
		     u*Math.sqrt(u*u+k)-b*Math.sqrt(b*b+k)+
		     k*Math.log(Math.abs(
		       (u+Math.sqrt(u*u+k))/(b+Math.sqrt(b*b+k))
		     ))
		   );

		}

		// Legendre-Gauss abscissae (xi values, defined at i=n as the roots of the nth order Legendre polynomial Pn(x))
		var tValues = [
		  [],
		  [],
		  [-0.5773502691896257,0.5773502691896257645091487805019574556476],
		  [0,-0.7745966692414834,0.7745966692414833770358530799564799221665],
		  [-0.33998104358485626,0.3399810435848562648026657591032446872005,-0.8611363115940526,0.8611363115940525752239464888928095050957],
		  [0,-0.5384693101056831,0.5384693101056830910363144207002088049672,-0.906179845938664,0.9061798459386639927976268782993929651256],
		  [0.6612093864662645136613995950199053470064,-0.6612093864662645,-0.2386191860831969,0.2386191860831969086305017216807119354186,-0.932469514203152,0.9324695142031520278123015544939946091347],
		  [0, 0.4058451513773971669066064120769614633473,-0.4058451513773972,-0.7415311855993945,0.7415311855993944398638647732807884070741,-0.9491079123427585,0.9491079123427585245261896840478512624007],
		  [-0.1834346424956498,0.1834346424956498049394761423601839806667,-0.525532409916329,0.5255324099163289858177390491892463490419,-0.7966664774136267,0.7966664774136267395915539364758304368371,-0.9602898564975363,0.9602898564975362316835608685694729904282],
		  [0,-0.8360311073266358,0.8360311073266357942994297880697348765441,-0.9681602395076261,0.9681602395076260898355762029036728700494,-0.3242534234038089,0.3242534234038089290385380146433366085719,-0.6133714327005904,0.6133714327005903973087020393414741847857],
		  [-0.14887433898163122,0.1488743389816312108848260011297199846175,-0.4333953941292472,0.4333953941292471907992659431657841622000,-0.6794095682990244,0.6794095682990244062343273651148735757692,-0.8650633666889845,0.8650633666889845107320966884234930485275,-0.9739065285171717,0.9739065285171717200779640120844520534282],
		  [0,-0.26954315595234496,0.2695431559523449723315319854008615246796,-0.5190961292068118,0.5190961292068118159257256694586095544802,-0.7301520055740494,0.7301520055740493240934162520311534580496,-0.8870625997680953,0.8870625997680952990751577693039272666316,-0.978228658146057,0.9782286581460569928039380011228573907714],
		  [-0.1252334085114689,0.1252334085114689154724413694638531299833,-0.3678314989981802,0.3678314989981801937526915366437175612563,-0.5873179542866175,0.5873179542866174472967024189405342803690,-0.7699026741943047,0.7699026741943046870368938332128180759849,-0.9041172563704749,0.9041172563704748566784658661190961925375,-0.9815606342467192,0.9815606342467192506905490901492808229601],
		  [0,-0.2304583159551348,0.2304583159551347940655281210979888352115,-0.44849275103644687,0.4484927510364468528779128521276398678019,-0.6423493394403402,0.6423493394403402206439846069955156500716,-0.8015780907333099,0.8015780907333099127942064895828598903056,-0.9175983992229779,0.9175983992229779652065478365007195123904,-0.9841830547185881,0.9841830547185881494728294488071096110649],
		  [-0.10805494870734367,0.1080549487073436620662446502198347476119,-0.31911236892788974,0.3191123689278897604356718241684754668342,-0.5152486363581541,0.5152486363581540919652907185511886623088,-0.6872929048116855,0.6872929048116854701480198030193341375384,-0.827201315069765,0.8272013150697649931897947426503949610397,-0.9284348836635735,0.9284348836635735173363911393778742644770,-0.9862838086968123,0.9862838086968123388415972667040528016760],
		  [0,-0.20119409399743451,0.2011940939974345223006283033945962078128,-0.3941513470775634,0.3941513470775633698972073709810454683627,-0.5709721726085388,0.5709721726085388475372267372539106412383,-0.7244177313601701,0.7244177313601700474161860546139380096308,-0.8482065834104272,0.8482065834104272162006483207742168513662,-0.937273392400706,0.9372733924007059043077589477102094712439,-0.9879925180204854,0.9879925180204854284895657185866125811469],
		  [-0.09501250983763744,0.0950125098376374401853193354249580631303,-0.2816035507792589,0.2816035507792589132304605014604961064860,-0.45801677765722737,0.4580167776572273863424194429835775735400,-0.6178762444026438,0.6178762444026437484466717640487910189918,-0.755404408355003,0.7554044083550030338951011948474422683538,-0.8656312023878318,0.8656312023878317438804678977123931323873,-0.9445750230732326,0.9445750230732325760779884155346083450911,-0.9894009349916499,0.9894009349916499325961541734503326274262],
		  [0,-0.17848418149584785,0.1784841814958478558506774936540655574754,-0.3512317634538763,0.3512317634538763152971855170953460050405,-0.5126905370864769,0.5126905370864769678862465686295518745829,-0.6576711592166907,0.6576711592166907658503022166430023351478,-0.7815140038968014,0.7815140038968014069252300555204760502239,-0.8802391537269859,0.8802391537269859021229556944881556926234,-0.9506755217687678,0.9506755217687677612227169578958030214433,-0.9905754753144174,0.9905754753144173356754340199406652765077],
		  [-0.0847750130417353,0.0847750130417353012422618529357838117333,-0.2518862256915055,0.2518862256915055095889728548779112301628,-0.41175116146284263,0.4117511614628426460359317938330516370789,-0.5597708310739475,0.5597708310739475346078715485253291369276,-0.6916870430603532,0.6916870430603532078748910812888483894522,-0.8037049589725231,0.8037049589725231156824174550145907971032,-0.8926024664975557,0.8926024664975557392060605911271455154078,-0.9558239495713977,0.9558239495713977551811958929297763099728,-0.9915651684209309,0.9915651684209309467300160047061507702525],
		  [0,-0.16035864564022537,0.1603586456402253758680961157407435495048,-0.31656409996362983,0.3165640999636298319901173288498449178922,-0.46457074137596094,0.4645707413759609457172671481041023679762,-0.600545304661681,0.6005453046616810234696381649462392798683,-0.7209661773352294,0.7209661773352293786170958608237816296571,-0.8227146565371428,0.8227146565371428249789224867127139017745,-0.9031559036148179,0.9031559036148179016426609285323124878093,-0.96020815213483,0.9602081521348300308527788406876515266150,-0.9924068438435844,0.9924068438435844031890176702532604935893],
		  [-0.07652652113349734,0.0765265211334973337546404093988382110047,-0.22778585114164507,0.2277858511416450780804961953685746247430,-0.37370608871541955,0.3737060887154195606725481770249272373957,-0.5108670019508271,0.5108670019508270980043640509552509984254,-0.636053680726515,0.6360536807265150254528366962262859367433,-0.7463319064601508,0.7463319064601507926143050703556415903107,-0.8391169718222188,0.8391169718222188233945290617015206853296,-0.912234428251326,0.9122344282513259058677524412032981130491,-0.9639719272779138,0.9639719272779137912676661311972772219120,-0.9931285991850949,0.9931285991850949247861223884713202782226],
		  [0,-0.1455618541608951,0.1455618541608950909370309823386863301163,-0.2880213168024011,0.2880213168024010966007925160646003199090,-0.4243421202074388,0.4243421202074387835736688885437880520964,-0.5516188358872198,0.5516188358872198070590187967243132866220,-0.6671388041974123,0.6671388041974123193059666699903391625970,-0.7684399634756779,0.7684399634756779086158778513062280348209,-0.8533633645833173,0.8533633645833172836472506385875676702761,-0.9200993341504008,0.9200993341504008287901871337149688941591,-0.9672268385663063,0.9672268385663062943166222149076951614246,-0.9937521706203895,0.9937521706203895002602420359379409291933],
		  [-0.06973927331972223,0.0697392733197222212138417961186280818222,-0.20786042668822127,0.2078604266882212854788465339195457342156,-0.34193582089208424,0.3419358208920842251581474204273796195591,-0.469355837986757,0.4693558379867570264063307109664063460953,-0.5876404035069116,0.5876404035069115929588769276386473488776,-0.6944872631866827,0.6944872631866827800506898357622567712673,-0.7878168059792081,0.7878168059792081620042779554083515213881,-0.8658125777203002,0.8658125777203001365364256370193787290847,-0.926956772187174,0.9269567721871740005206929392590531966353,-0.9700604978354287,0.9700604978354287271239509867652687108059,-0.9942945854823992,0.9942945854823992920730314211612989803930],
		  [0,-0.1332568242984661,0.1332568242984661109317426822417661370104,-0.26413568097034495,0.2641356809703449305338695382833096029790,-0.3903010380302908,0.3903010380302908314214888728806054585780,-0.5095014778460075,0.5095014778460075496897930478668464305448,-0.6196098757636461,0.6196098757636461563850973116495956533871,-0.7186613631319502,0.7186613631319501944616244837486188483299,-0.8048884016188399,0.8048884016188398921511184069967785579414,-0.8767523582704416,0.8767523582704416673781568859341456716389,-0.9329710868260161,0.9329710868260161023491969890384229782357,-0.9725424712181152,0.9725424712181152319560240768207773751816,-0.9947693349975522,0.9947693349975521235239257154455743605736],
		  [-0.06405689286260563,0.0640568928626056260850430826247450385909,-0.1911188674736163,0.1911188674736163091586398207570696318404,-0.3150426796961634,0.3150426796961633743867932913198102407864,-0.4337935076260451,0.4337935076260451384870842319133497124524,-0.5454214713888396,0.5454214713888395356583756172183723700107,-0.6480936519369755,0.6480936519369755692524957869107476266696,-0.7401241915785544,0.7401241915785543642438281030999784255232,-0.820001985973903,0.8200019859739029219539498726697452080761,-0.8864155270044011,0.8864155270044010342131543419821967550873,-0.9382745520027328,0.9382745520027327585236490017087214496548,-0.9747285559713095,0.9747285559713094981983919930081690617411,-0.9951872199970213,0.9951872199970213601799974097007368118745]
		];

		// Legendre-Gauss weights (wi values, defined by a function linked to in the Bezier primer article)
		var cValues = [
		  [],[],
		  [1.0,1.0],
		  [0.8888888888888888888888888888888888888888,0.5555555555555555555555555555555555555555,0.5555555555555555555555555555555555555555],
		  [0.6521451548625461426269360507780005927646,0.6521451548625461426269360507780005927646,0.3478548451374538573730639492219994072353,0.3478548451374538573730639492219994072353],
		  [0.5688888888888888888888888888888888888888,0.4786286704993664680412915148356381929122,0.4786286704993664680412915148356381929122,0.2369268850561890875142640407199173626432,0.2369268850561890875142640407199173626432],
		  [0.3607615730481386075698335138377161116615,0.3607615730481386075698335138377161116615,0.4679139345726910473898703439895509948116,0.4679139345726910473898703439895509948116,0.1713244923791703450402961421727328935268,0.1713244923791703450402961421727328935268],
		  [0.4179591836734693877551020408163265306122,0.3818300505051189449503697754889751338783,0.3818300505051189449503697754889751338783,0.2797053914892766679014677714237795824869,0.2797053914892766679014677714237795824869,0.1294849661688696932706114326790820183285,0.1294849661688696932706114326790820183285],
		  [0.3626837833783619829651504492771956121941,0.3626837833783619829651504492771956121941,0.3137066458778872873379622019866013132603,0.3137066458778872873379622019866013132603,0.2223810344533744705443559944262408844301,0.2223810344533744705443559944262408844301,0.1012285362903762591525313543099621901153,0.1012285362903762591525313543099621901153],
		  [0.3302393550012597631645250692869740488788,0.1806481606948574040584720312429128095143,0.1806481606948574040584720312429128095143,0.0812743883615744119718921581105236506756,0.0812743883615744119718921581105236506756,0.3123470770400028400686304065844436655987,0.3123470770400028400686304065844436655987,0.2606106964029354623187428694186328497718,0.2606106964029354623187428694186328497718],
		  [0.2955242247147528701738929946513383294210,0.2955242247147528701738929946513383294210,0.2692667193099963550912269215694693528597,0.2692667193099963550912269215694693528597,0.2190863625159820439955349342281631924587,0.2190863625159820439955349342281631924587,0.1494513491505805931457763396576973324025,0.1494513491505805931457763396576973324025,0.0666713443086881375935688098933317928578,0.0666713443086881375935688098933317928578],
		  [0.2729250867779006307144835283363421891560,0.2628045445102466621806888698905091953727,0.2628045445102466621806888698905091953727,0.2331937645919904799185237048431751394317,0.2331937645919904799185237048431751394317,0.1862902109277342514260976414316558916912,0.1862902109277342514260976414316558916912,0.1255803694649046246346942992239401001976,0.1255803694649046246346942992239401001976,0.0556685671161736664827537204425485787285,0.0556685671161736664827537204425485787285],
		  [0.2491470458134027850005624360429512108304,0.2491470458134027850005624360429512108304,0.2334925365383548087608498989248780562594,0.2334925365383548087608498989248780562594,0.2031674267230659217490644558097983765065,0.2031674267230659217490644558097983765065,0.1600783285433462263346525295433590718720,0.1600783285433462263346525295433590718720,0.1069393259953184309602547181939962242145,0.1069393259953184309602547181939962242145,0.0471753363865118271946159614850170603170,0.0471753363865118271946159614850170603170],
		  [0.2325515532308739101945895152688359481566,0.2262831802628972384120901860397766184347,0.2262831802628972384120901860397766184347,0.2078160475368885023125232193060527633865,0.2078160475368885023125232193060527633865,0.1781459807619457382800466919960979955128,0.1781459807619457382800466919960979955128,0.1388735102197872384636017768688714676218,0.1388735102197872384636017768688714676218,0.0921214998377284479144217759537971209236,0.0921214998377284479144217759537971209236,0.0404840047653158795200215922009860600419,0.0404840047653158795200215922009860600419],
		  [0.2152638534631577901958764433162600352749,0.2152638534631577901958764433162600352749,0.2051984637212956039659240656612180557103,0.2051984637212956039659240656612180557103,0.1855383974779378137417165901251570362489,0.1855383974779378137417165901251570362489,0.1572031671581935345696019386238421566056,0.1572031671581935345696019386238421566056,0.1215185706879031846894148090724766259566,0.1215185706879031846894148090724766259566,0.0801580871597602098056332770628543095836,0.0801580871597602098056332770628543095836,0.0351194603317518630318328761381917806197,0.0351194603317518630318328761381917806197],
		  [0.2025782419255612728806201999675193148386,0.1984314853271115764561183264438393248186,0.1984314853271115764561183264438393248186,0.1861610000155622110268005618664228245062,0.1861610000155622110268005618664228245062,0.1662692058169939335532008604812088111309,0.1662692058169939335532008604812088111309,0.1395706779261543144478047945110283225208,0.1395706779261543144478047945110283225208,0.1071592204671719350118695466858693034155,0.1071592204671719350118695466858693034155,0.0703660474881081247092674164506673384667,0.0703660474881081247092674164506673384667,0.0307532419961172683546283935772044177217,0.0307532419961172683546283935772044177217],
		  [0.1894506104550684962853967232082831051469,0.1894506104550684962853967232082831051469,0.1826034150449235888667636679692199393835,0.1826034150449235888667636679692199393835,0.1691565193950025381893120790303599622116,0.1691565193950025381893120790303599622116,0.1495959888165767320815017305474785489704,0.1495959888165767320815017305474785489704,0.1246289712555338720524762821920164201448,0.1246289712555338720524762821920164201448,0.0951585116824927848099251076022462263552,0.0951585116824927848099251076022462263552,0.0622535239386478928628438369943776942749,0.0622535239386478928628438369943776942749,0.0271524594117540948517805724560181035122,0.0271524594117540948517805724560181035122],
		  [0.1794464703562065254582656442618856214487,0.1765627053669926463252709901131972391509,0.1765627053669926463252709901131972391509,0.1680041021564500445099706637883231550211,0.1680041021564500445099706637883231550211,0.1540457610768102880814315948019586119404,0.1540457610768102880814315948019586119404,0.1351363684685254732863199817023501973721,0.1351363684685254732863199817023501973721,0.1118838471934039710947883856263559267358,0.1118838471934039710947883856263559267358,0.0850361483171791808835353701910620738504,0.0850361483171791808835353701910620738504,0.0554595293739872011294401653582446605128,0.0554595293739872011294401653582446605128,0.0241483028685479319601100262875653246916,0.0241483028685479319601100262875653246916],
		  [0.1691423829631435918406564701349866103341,0.1691423829631435918406564701349866103341,0.1642764837458327229860537764659275904123,0.1642764837458327229860537764659275904123,0.1546846751262652449254180038363747721932,0.1546846751262652449254180038363747721932,0.1406429146706506512047313037519472280955,0.1406429146706506512047313037519472280955,0.1225552067114784601845191268002015552281,0.1225552067114784601845191268002015552281,0.1009420441062871655628139849248346070628,0.1009420441062871655628139849248346070628,0.0764257302548890565291296776166365256053,0.0764257302548890565291296776166365256053,0.0497145488949697964533349462026386416808,0.0497145488949697964533349462026386416808,0.0216160135264833103133427102664524693876,0.0216160135264833103133427102664524693876],
		  [0.1610544498487836959791636253209167350399,0.1589688433939543476499564394650472016787,0.1589688433939543476499564394650472016787,0.1527660420658596667788554008976629984610,0.1527660420658596667788554008976629984610,0.1426067021736066117757461094419029724756,0.1426067021736066117757461094419029724756,0.1287539625393362276755157848568771170558,0.1287539625393362276755157848568771170558,0.1115666455473339947160239016817659974813,0.1115666455473339947160239016817659974813,0.0914900216224499994644620941238396526609,0.0914900216224499994644620941238396526609,0.0690445427376412265807082580060130449618,0.0690445427376412265807082580060130449618,0.0448142267656996003328381574019942119517,0.0448142267656996003328381574019942119517,0.0194617882297264770363120414644384357529,0.0194617882297264770363120414644384357529],
		  [0.1527533871307258506980843319550975934919,0.1527533871307258506980843319550975934919,0.1491729864726037467878287370019694366926,0.1491729864726037467878287370019694366926,0.1420961093183820513292983250671649330345,0.1420961093183820513292983250671649330345,0.1316886384491766268984944997481631349161,0.1316886384491766268984944997481631349161,0.1181945319615184173123773777113822870050,0.1181945319615184173123773777113822870050,0.1019301198172404350367501354803498761666,0.1019301198172404350367501354803498761666,0.0832767415767047487247581432220462061001,0.0832767415767047487247581432220462061001,0.0626720483341090635695065351870416063516,0.0626720483341090635695065351870416063516,0.0406014298003869413310399522749321098790,0.0406014298003869413310399522749321098790,0.0176140071391521183118619623518528163621,0.0176140071391521183118619623518528163621],
		  [0.1460811336496904271919851476833711882448,0.1445244039899700590638271665537525436099,0.1445244039899700590638271665537525436099,0.1398873947910731547221334238675831108927,0.1398873947910731547221334238675831108927,0.1322689386333374617810525744967756043290,0.1322689386333374617810525744967756043290,0.1218314160537285341953671771257335983563,0.1218314160537285341953671771257335983563,0.1087972991671483776634745780701056420336,0.1087972991671483776634745780701056420336,0.0934444234560338615532897411139320884835,0.0934444234560338615532897411139320884835,0.0761001136283793020170516533001831792261,0.0761001136283793020170516533001831792261,0.0571344254268572082836358264724479574912,0.0571344254268572082836358264724479574912,0.0369537897708524937999506682993296661889,0.0369537897708524937999506682993296661889,0.0160172282577743333242246168584710152658,0.0160172282577743333242246168584710152658],
		  [0.1392518728556319933754102483418099578739,0.1392518728556319933754102483418099578739,0.1365414983460151713525738312315173965863,0.1365414983460151713525738312315173965863,0.1311735047870623707329649925303074458757,0.1311735047870623707329649925303074458757,0.1232523768105124242855609861548144719594,0.1232523768105124242855609861548144719594,0.1129322960805392183934006074217843191142,0.1129322960805392183934006074217843191142,0.1004141444428809649320788378305362823508,0.1004141444428809649320788378305362823508,0.0859416062170677274144436813727028661891,0.0859416062170677274144436813727028661891,0.0697964684245204880949614189302176573987,0.0697964684245204880949614189302176573987,0.0522933351526832859403120512732112561121,0.0522933351526832859403120512732112561121,0.0337749015848141547933022468659129013491,0.0337749015848141547933022468659129013491,0.0146279952982722006849910980471854451902,0.0146279952982722006849910980471854451902],
		  [0.1336545721861061753514571105458443385831,0.1324620394046966173716424647033169258050,0.1324620394046966173716424647033169258050,0.1289057221880821499785953393997936532597,0.1289057221880821499785953393997936532597,0.1230490843067295304675784006720096548158,0.1230490843067295304675784006720096548158,0.1149966402224113649416435129339613014914,0.1149966402224113649416435129339613014914,0.1048920914645414100740861850147438548584,0.1048920914645414100740861850147438548584,0.0929157660600351474770186173697646486034,0.0929157660600351474770186173697646486034,0.0792814117767189549228925247420432269137,0.0792814117767189549228925247420432269137,0.0642324214085258521271696151589109980391,0.0642324214085258521271696151589109980391,0.0480376717310846685716410716320339965612,0.0480376717310846685716410716320339965612,0.0309880058569794443106942196418845053837,0.0309880058569794443106942196418845053837,0.0134118594871417720813094934586150649766,0.0134118594871417720813094934586150649766],
		  [0.1279381953467521569740561652246953718517,0.1279381953467521569740561652246953718517,0.1258374563468282961213753825111836887264,0.1258374563468282961213753825111836887264,0.1216704729278033912044631534762624256070,0.1216704729278033912044631534762624256070,0.1155056680537256013533444839067835598622,0.1155056680537256013533444839067835598622,0.1074442701159656347825773424466062227946,0.1074442701159656347825773424466062227946,0.0976186521041138882698806644642471544279,0.0976186521041138882698806644642471544279,0.0861901615319532759171852029837426671850,0.0861901615319532759171852029837426671850,0.0733464814110803057340336152531165181193,0.0733464814110803057340336152531165181193,0.0592985849154367807463677585001085845412,0.0592985849154367807463677585001085845412,0.0442774388174198061686027482113382288593,0.0442774388174198061686027482113382288593,0.0285313886289336631813078159518782864491,0.0285313886289336631813078159518782864491,0.0123412297999871995468056670700372915759,0.0123412297999871995468056670700372915759]
		];

		// LUT for binomial coefficient arrays per curve order 'n'
		var binomialCoefficients = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]];

		// Look up what the binomial coefficient is for pair {n,k}
		function binomials(n, k) {
		  return binomialCoefficients[n][k];
		}

		/**
		 * Compute the curve derivative (hodograph) at t.
		 */
		function getDerivative(derivative, t, vs) {
		  // the derivative of any 't'-less function is zero.
		  var n = vs.length - 1,
		      _vs,
		      value,
		      k;
		  if (n === 0) {
		    return 0;
		  }

		  // direct values? compute!
		  if (derivative === 0) {
		    value = 0;
		    for (k = 0; k <= n; k++) {
		      value += binomials(n, k) * Math.pow(1 - t, n - k) * Math.pow(t, k) * vs[k];
		    }
		    return value;
		  } else {
		    // Still some derivative? go down one order, then try
		    // for the lower order curve's.
		    _vs = new Array(n);
		    for (k = 0; k < n; k++) {
		      _vs[k] = n * (vs[k + 1] - vs[k]);
		    }
		    return getDerivative(derivative - 1, t, _vs);
		  }
		}

		function B(xs, ys, t) {
		  var xbase = getDerivative(1, t, xs);
		  var ybase = getDerivative(1, t, ys);
		  var combined = xbase * xbase + ybase * ybase;
		  return Math.sqrt(combined);
		}

		function getCubicArcLength(xs, ys, t) {
		  var z, sum, i, correctedT;

		  /*if (xs.length >= tValues.length) {
		    throw new Error('too high n bezier');
		  }*/

		  if (t === undefined) {
		    t = 1;
		  }
		  var n = 20;

		  z = t / 2;
		  sum = 0;
		  for (i = 0; i < n; i++) {
		    correctedT = z * tValues[n][i] + z;
		    sum += cValues[n][i] * B(xs, ys, correctedT);
		  }
		  return z * sum;
		}

		//This file is taken from the following project: https://github.com/fontello/svgpath
		// Convert an arc to a sequence of cubic bézier curves
		//
		var TAU = Math.PI * 2;


		/* eslint-disable space-infix-ops */

		// Calculate an angle between two unit vectors
		//
		// Since we measure angle between radii of circular arcs,
		// we can use simplified math (without length normalization)
		//
		function unit_vector_angle(ux, uy, vx, vy) {
		  var sign = (ux * vy - uy * vx < 0) ? -1 : 1;
		  var dot  = ux * vx + uy * vy;

		  // Add this to work with arbitrary vectors:
		  // dot /= Math.sqrt(ux * ux + uy * uy) * Math.sqrt(vx * vx + vy * vy);

		  // rounding errors, e.g. -1.0000000000000002 can screw up this
		  if (dot >  1.0) { dot =  1.0; }
		  if (dot < -1) { dot = -1; }

		  return sign * Math.acos(dot);
		}


		// Convert from endpoint to center parameterization,
		// see http://www.w3.org/TR/SVG11/implnote.html#ArcImplementationNotes
		//
		// Return [cx, cy, theta1, delta_theta]
		//
		function get_arc_center(x1, y1, x2, y2, fa, fs, rx, ry, sin_phi, cos_phi) {
		  // Step 1.
		  //
		  // Moving an ellipse so origin will be the middlepoint between our two
		  // points. After that, rotate it to line up ellipse axes with coordinate
		  // axes.
		  //
		  var x1p =  cos_phi*(x1-x2)/2 + sin_phi*(y1-y2)/2;
		  var y1p = -sin_phi*(x1-x2)/2 + cos_phi*(y1-y2)/2;

		  var rx_sq  =  rx * rx;
		  var ry_sq  =  ry * ry;
		  var x1p_sq = x1p * x1p;
		  var y1p_sq = y1p * y1p;

		  // Step 2.
		  //
		  // Compute coordinates of the centre of this ellipse (cx', cy')
		  // in the new coordinate system.
		  //
		  var radicant = (rx_sq * ry_sq) - (rx_sq * y1p_sq) - (ry_sq * x1p_sq);

		  if (radicant < 0) {
		    // due to rounding errors it might be e.g. -1.3877787807814457e-17
		    radicant = 0;
		  }

		  radicant /=   (rx_sq * y1p_sq) + (ry_sq * x1p_sq);
		  radicant = Math.sqrt(radicant) * (fa === fs ? -1 : 1);

		  var cxp = radicant *  rx/ry * y1p;
		  var cyp = radicant * -ry/rx * x1p;

		  // Step 3.
		  //
		  // Transform back to get centre coordinates (cx, cy) in the original
		  // coordinate system.
		  //
		  var cx = cos_phi*cxp - sin_phi*cyp + (x1+x2)/2;
		  var cy = sin_phi*cxp + cos_phi*cyp + (y1+y2)/2;

		  // Step 4.
		  //
		  // Compute angles (theta1, delta_theta).
		  //
		  var v1x =  (x1p - cxp) / rx;
		  var v1y =  (y1p - cyp) / ry;
		  var v2x = (-x1p - cxp) / rx;
		  var v2y = (-y1p - cyp) / ry;

		  var theta1 = unit_vector_angle(1, 0, v1x, v1y);
		  var delta_theta = unit_vector_angle(v1x, v1y, v2x, v2y);

		  if (fs === 0 && delta_theta > 0) {
		    delta_theta -= TAU;
		  }
		  if (fs === 1 && delta_theta < 0) {
		    delta_theta += TAU;
		  }

		  return [ cx, cy, theta1, delta_theta ];
		}

		//
		// Approximate one unit arc segment with bézier curves,
		// see http://math.stackexchange.com/questions/873224
		//
		function approximate_unit_arc(theta1, delta_theta) {
		  var alpha = 4/3 * Math.tan(delta_theta/4);

		  var x1 = Math.cos(theta1);
		  var y1 = Math.sin(theta1);
		  var x2 = Math.cos(theta1 + delta_theta);
		  var y2 = Math.sin(theta1 + delta_theta);

		  return [ x1, y1, x1 - y1*alpha, y1 + x1*alpha, x2 + y2*alpha, y2 - x2*alpha, x2, y2 ];
		}

		var a2c = function(x1, y1, rx, ry, phi, fa, fs, x2, y2) {
		  var sin_phi = Math.sin(phi * TAU / 360);
		  var cos_phi = Math.cos(phi * TAU / 360);

		  // Make sure radii are valid
		  //
		  var x1p =  cos_phi*(x1-x2)/2 + sin_phi*(y1-y2)/2;
		  var y1p = -sin_phi*(x1-x2)/2 + cos_phi*(y1-y2)/2;

		  if (x1p === 0 && y1p === 0) {
		    // we're asked to draw line to itself
		    return [];
		  }

		  if (rx === 0 || ry === 0) {
		    // one of the radii is zero
		    return [];
		  }


		  // Compensate out-of-range radii
		  //
		  rx = Math.abs(rx);
		  ry = Math.abs(ry);

		  var lambda = (x1p * x1p) / (rx * rx) + (y1p * y1p) / (ry * ry);
		  if (lambda > 1) {
		    rx *= Math.sqrt(lambda);
		    ry *= Math.sqrt(lambda);
		  }


		  // Get center parameters (cx, cy, theta1, delta_theta)
		  //
		  var cc = get_arc_center(x1, y1, x2, y2, fa, fs, rx, ry, sin_phi, cos_phi);

		  var result = [];
		  var theta1 = cc[2];
		  var delta_theta = cc[3];

		  // Split an arc to multiple segments, so each segment
		  // will be less than τ/4 (= 90°)
		  //
		  var segments = Math.max(Math.ceil(Math.abs(delta_theta) / (TAU / 4)), 1);
		  delta_theta /= segments;

		  for (var i = 0; i < segments; i++) {
		    result.push(approximate_unit_arc(theta1, delta_theta));
		    theta1 += delta_theta;
		  }

		  // We have a bezier approximation of a unit circle,
		  // now need to transform back to the original ellipse
		  //
		  return result.map(function (curve) {
		    for (var i = 0; i < curve.length; i += 2) {
		      var x = curve[i + 0];
		      var y = curve[i + 1];

		      // scale
		      x *= rx;
		      y *= ry;

		      // rotate
		      var xp = cos_phi*x - sin_phi*y;
		      var yp = sin_phi*x + cos_phi*y;

		      // translate
		      curve[i + 0] = xp + cc[0];
		      curve[i + 1] = yp + cc[1];
		    }

		    return curve;
		  });
		};

		//Calculate ans Arc curve length and positionAtLength
		//Definitions taken from https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths
		var Arc = function(x0, y0, rx,ry, xAxisRotate, LargeArcFlag,SweepFlag, x,y) {
		  return new Arc$1(x0, y0, rx,ry, xAxisRotate, LargeArcFlag,SweepFlag, x,y);
		};

		function Arc$1(x0, y0,rx,ry, xAxisRotate, LargeArcFlag,SweepFlag,x,y) {
		    var length = 0;
		    var partialLengths = [];
		    var curves = [];
		    var res = a2c(x0, y0,rx,ry, xAxisRotate, LargeArcFlag,SweepFlag,x,y);
		    res.forEach(function(d){
		        var curve = new Bezier(d[0], d[1], d[2], d[3], d[4], d[5], d[6], d[7]);
		        var curveLength = curve.getTotalLength();
		        length += curveLength;
		        partialLengths.push(curveLength);
		        curves.push(curve);
		    });
		    this.length = length;
		    this.partialLengths = partialLengths;
		    this.curves = curves;
		}

		Arc$1.prototype = {
		  constructor: Arc$1,
		  init: function() {

		    
		  },

		  getTotalLength: function() {
		    return this.length;
		  },
		  getPointAtLength: function(fractionLength) {
		    
		    if(fractionLength < 0){
		      fractionLength = 0;
		    } else if(fractionLength > this.length){
		      fractionLength = this.length;
		    }
		    var i = this.partialLengths.length - 1;

		    while(this.partialLengths[i] >= fractionLength && this.partialLengths[i] > 0){
		      i--;
		    }
		    if(i<this.partialLengths.length-1){
		        i++;
		    }

		    var lengthOffset = 0;
		    for(var j=0; j<i; j++){
		        lengthOffset += this.partialLengths[j];
		    }

		    return this.curves[i].getPointAtLength(fractionLength - lengthOffset);
		  },
		  getTangentAtLength: function(fractionLength) {
		    if(fractionLength < 0){
		        fractionLength = 0;
		        } else if(fractionLength > this.length){
		        fractionLength = this.length;
		        }
		        var i = this.partialLengths.length - 1;

		        while(this.partialLengths[i] >= fractionLength && this.partialLengths[i] > 0){
		        i--;
		        }
		        if(i<this.partialLengths.length-1){
		            i++;
		        }

		        var lengthOffset = 0;
		        for(var j=0; j<i; j++){
		            lengthOffset += this.partialLengths[j];
		        }

		    return this.curves[i].getTangentAtLength(fractionLength - lengthOffset);
		  },
		  getPropertiesAtLength: function(fractionLength){
		    var tangent = this.getTangentAtLength(fractionLength);
		    var point = this.getPointAtLength(fractionLength);
		    return {x: point.x, y: point.y, tangentX: tangent.x, tangentY: tangent.y};
		  }
		};

		var LinearPosition = function(x0, x1, y0, y1) {
		  return new LinearPosition$1(x0, x1, y0, y1);

		};

		function LinearPosition$1(x0, x1, y0, y1){
		  this.x0 = x0;
		  this.x1 = x1;
		  this.y0 = y0;
		  this.y1 = y1;
		}

		LinearPosition$1.prototype.getTotalLength = function(){
		  return Math.sqrt(Math.pow(this.x0 - this.x1, 2) +
		         Math.pow(this.y0 - this.y1, 2));
		};

		LinearPosition$1.prototype.getPointAtLength = function(pos){
		  var fraction = pos/ (Math.sqrt(Math.pow(this.x0 - this.x1, 2) +
		         Math.pow(this.y0 - this.y1, 2)));

		  var newDeltaX = (this.x1 - this.x0)*fraction;
		  var newDeltaY = (this.y1 - this.y0)*fraction;
		  return { x: this.x0 + newDeltaX, y: this.y0 + newDeltaY };
		};
		LinearPosition$1.prototype.getTangentAtLength = function(){
		  var module = Math.sqrt((this.x1 - this.x0) * (this.x1 - this.x0) +
		              (this.y1 - this.y0) * (this.y1 - this.y0));
		  return { x: (this.x1 - this.x0)/module, y: (this.y1 - this.y0)/module };
		};
		LinearPosition$1.prototype.getPropertiesAtLength = function(pos){
		  var point = this.getPointAtLength(pos);
		  var tangent = this.getTangentAtLength();
		  return {x: point.x, y: point.y, tangentX: tangent.x, tangentY: tangent.y};
		};

		var pathProperties = function(svgString) {
		  var length = 0;
		  var partial_lengths = [];
		  var functions = [];

		  function svgProperties(string){
		    if(!string){return null;}
		    var parsed = parse(string);
		    var cur = [0, 0];
		    var prev_point = [0, 0];
		    var curve;
		    var ringStart;
		    for (var i = 0; i < parsed.length; i++){
		      //moveTo
		      if(parsed[i][0] === "M"){
		        cur = [parsed[i][1], parsed[i][2]];
		        ringStart = [cur[0], cur[1]];
		        functions.push(null);
		      } else if(parsed[i][0] === "m"){
		        cur = [parsed[i][1] + cur[0], parsed[i][2] + cur[1]];
		        ringStart = [cur[0], cur[1]];
		        functions.push(null);
		      }
		      //lineTo
		      else if(parsed[i][0] === "L"){
		        length = length + Math.sqrt(Math.pow(cur[0] - parsed[i][1], 2) + Math.pow(cur[1] - parsed[i][2], 2));
		        functions.push(new LinearPosition(cur[0], parsed[i][1], cur[1], parsed[i][2]));
		        cur = [parsed[i][1], parsed[i][2]];
		      } else if(parsed[i][0] === "l"){
		        length = length + Math.sqrt(Math.pow(parsed[i][1], 2) + Math.pow(parsed[i][2], 2));
		        functions.push(new LinearPosition(cur[0], parsed[i][1] + cur[0], cur[1], parsed[i][2] + cur[1]));
		        cur = [parsed[i][1] + cur[0], parsed[i][2] + cur[1]];
		      } else if(parsed[i][0] === "H"){
		        length = length + Math.abs(cur[0] - parsed[i][1]);
		        functions.push(new LinearPosition(cur[0], parsed[i][1], cur[1], cur[1]));
		        cur[0] = parsed[i][1];
		      } else if(parsed[i][0] === "h"){
		        length = length + Math.abs(parsed[i][1]);
		        functions.push(new LinearPosition(cur[0], cur[0] + parsed[i][1], cur[1], cur[1]));
		        cur[0] = parsed[i][1] + cur[0];
		      } else if(parsed[i][0] === "V"){
		        length = length + Math.abs(cur[1] - parsed[i][1]);
		        functions.push(new LinearPosition(cur[0], cur[0], cur[1], parsed[i][1]));
		        cur[1] = parsed[i][1];
		      } else if(parsed[i][0] === "v"){
		        length = length + Math.abs(parsed[i][1]);
		        functions.push(new LinearPosition(cur[0], cur[0], cur[1], cur[1] + parsed[i][1]));
		        cur[1] = parsed[i][1] + cur[1];
		      //Close path
		      }  else if(parsed[i][0] === "z" || parsed[i][0] === "Z"){
		        length = length + Math.sqrt(Math.pow(ringStart[0] - cur[0], 2) + Math.pow(ringStart[1] - cur[1], 2));
		        functions.push(new LinearPosition(cur[0], ringStart[0], cur[1], ringStart[1]));
		        cur = [ringStart[0], ringStart[1]];
		      }
		      //Cubic Bezier curves
		      else if(parsed[i][0] === "C"){
		        curve = new Bezier(cur[0], cur[1] , parsed[i][1], parsed[i][2] , parsed[i][3], parsed[i][4] , parsed[i][5], parsed[i][6]);
		        length = length + curve.getTotalLength();
		        cur = [parsed[i][5], parsed[i][6]];
		        functions.push(curve);
		      } else if(parsed[i][0] === "c"){
		        curve = new Bezier(cur[0], cur[1] , cur[0] + parsed[i][1], cur[1] + parsed[i][2] , cur[0] + parsed[i][3], cur[1] + parsed[i][4] , cur[0] + parsed[i][5], cur[1] + parsed[i][6]);
		        length = length + curve.getTotalLength();
		        cur = [parsed[i][5] + cur[0], parsed[i][6] + cur[1]];
		        functions.push(curve);
		      } else if(parsed[i][0] === "S"){
		        if(i>0 && ["C","c","S","s"].indexOf(parsed[i-1][0]) > -1){
		          curve = new Bezier(cur[0], cur[1] , 2*cur[0] - parsed[i-1][parsed[i-1].length - 4], 2*cur[1] - parsed[i-1][parsed[i-1].length - 3], parsed[i][1], parsed[i][2] , parsed[i][3], parsed[i][4]);
		        } else {
		          curve = new Bezier(cur[0], cur[1] , cur[0], cur[1], parsed[i][1], parsed[i][2] , parsed[i][3], parsed[i][4]);
		        }
		        length = length + curve.getTotalLength();
		        cur = [parsed[i][3], parsed[i][4]];
		        functions.push(curve);
		      }  else if(parsed[i][0] === "s"){ //240 225
		        if(i>0 && ["C","c","S","s"].indexOf(parsed[i-1][0]) > -1){
		          curve = new Bezier(cur[0], cur[1] , cur[0] + curve.d.x - curve.c.x, cur[1] + curve.d.y - curve.c.y, cur[0] + parsed[i][1], cur[1] + parsed[i][2] , cur[0] + parsed[i][3], cur[1] + parsed[i][4]);
		        } else {
		          curve = new Bezier(cur[0], cur[1] , cur[0], cur[1], cur[0] + parsed[i][1], cur[1] + parsed[i][2] , cur[0] + parsed[i][3], cur[1] + parsed[i][4]);
		        }
		        length = length + curve.getTotalLength();
		        cur = [parsed[i][3] + cur[0], parsed[i][4] + cur[1]];
		        functions.push(curve);
		      }
		      //Quadratic Bezier curves
		      else if(parsed[i][0] === "Q"){
		        if(cur[0] != parsed[i][1] && cur[1] != parsed[i][2]){
		          curve = new Bezier(cur[0], cur[1] , parsed[i][1], parsed[i][2] , parsed[i][3], parsed[i][4]);
		        } else {
		          curve = new LinearPosition(parsed[i][1], parsed[i][3], parsed[i][2], parsed[i][4]);
		        }
		        length = length + curve.getTotalLength();
		        functions.push(curve);
		        cur = [parsed[i][3], parsed[i][4]];
		        prev_point = [parsed[i][1], parsed[i][2]];

		      }  else if(parsed[i][0] === "q"){
		        if(!(parsed[i][1] == 0 && parsed[i][2] == 0)){
		          curve = new Bezier(cur[0], cur[1] , cur[0] + parsed[i][1], cur[1] + parsed[i][2] , cur[0] + parsed[i][3], cur[1] + parsed[i][4]);
		        } else {
		          curve = new LinearPosition(cur[0] + parsed[i][1], cur[0] + parsed[i][3], cur[1] + parsed[i][2], cur[1] + parsed[i][4]);
		        }
		        length = length + curve.getTotalLength();
		        prev_point = [cur[0] + parsed[i][1], cur[1] + parsed[i][2]];
		        cur = [parsed[i][3] + cur[0], parsed[i][4] + cur[1]];
		        functions.push(curve);
		      } else if(parsed[i][0] === "T"){
		        if(i>0 && ["Q","q","T","t"].indexOf(parsed[i-1][0]) > -1){
		          curve = new Bezier(cur[0], cur[1] , 2 * cur[0] - prev_point[0] , 2 * cur[1] - prev_point[1] , parsed[i][1], parsed[i][2]);
		        } else {
		          curve = new LinearPosition(cur[0], parsed[i][1], cur[1], parsed[i][2]);
		        }
		        functions.push(curve);
		        length = length + curve.getTotalLength();
		        prev_point = [2 * cur[0] - prev_point[0] , 2 * cur[1] - prev_point[1]];
		        cur = [parsed[i][1], parsed[i][2]];

		      } else if(parsed[i][0] === "t"){
		        if(i>0 && ["Q","q","T","t"].indexOf(parsed[i-1][0]) > -1){
		          curve = new Bezier(cur[0], cur[1] , 2 * cur[0] - prev_point[0] , 2 * cur[1] - prev_point[1] , cur[0] + parsed[i][1], cur[1] + parsed[i][2]);
		        } else {
		          curve = new LinearPosition(cur[0], cur[0] + parsed[i][1], cur[1], cur[1] + parsed[i][2]);
		        }
		        length = length + curve.getTotalLength();
		        prev_point = [2 * cur[0] - prev_point[0] , 2 * cur[1] - prev_point[1]];
		        cur = [parsed[i][1] + cur[0], parsed[i][2] + cur[0]];
		        functions.push(curve);
		      } else if(parsed[i][0] === "A"){
		        curve = new Arc(cur[0], cur[1], parsed[i][1], parsed[i][2], parsed[i][3], parsed[i][4], parsed[i][5], parsed[i][6], parsed[i][7]);

		        length = length + curve.getTotalLength();
		        cur = [parsed[i][6], parsed[i][7]];
		        functions.push(curve);
		      } else if(parsed[i][0] === "a"){
		        curve = new Arc(cur[0], cur[1], parsed[i][1], parsed[i][2], parsed[i][3], parsed[i][4], parsed[i][5], cur[0] + parsed[i][6], cur[1] + parsed[i][7]);

		        length = length + curve.getTotalLength();
		        cur = [cur[0] + parsed[i][6], cur[1] + parsed[i][7]];
		        functions.push(curve);
		      }
		      partial_lengths.push(length);

		    }
		    return svgProperties;
		  }

		 svgProperties.getTotalLength = function(){
		    return length;
		  };

		  svgProperties.getPointAtLength = function(fractionLength){
		    var fractionPart = getPartAtLength(fractionLength);
		    return functions[fractionPart.i].getPointAtLength(fractionPart.fraction);
		  };

		  svgProperties.getTangentAtLength = function(fractionLength){
		    var fractionPart = getPartAtLength(fractionLength);
		    return functions[fractionPart.i].getTangentAtLength(fractionPart.fraction);
		  };

		  svgProperties.getPropertiesAtLength = function(fractionLength){
		    var fractionPart = getPartAtLength(fractionLength);
		    return functions[fractionPart.i].getPropertiesAtLength(fractionPart.fraction);
		  };

		  var getPartAtLength = function(fractionLength){
		    if(fractionLength < 0){
		      fractionLength = 0;
		    } else if(fractionLength > length){
		      fractionLength = length;
		    }

		    var i = partial_lengths.length - 1;

		    while(partial_lengths[i] >= fractionLength && partial_lengths[i] > 0){
		      i--;
		    }
		    i++;
		    return {fraction: fractionLength-partial_lengths[i-1], i: i};
		  };

		  return svgProperties(svgString);
		};

		exports.svgPathProperties = pathProperties;
		exports.parse = parse;
		exports.Bezier = Bezier;

		Object.defineProperty(exports, '__esModule', { value: true });

		}))); 
	} (pathProperties$1, pathProperties$1.exports));
	return pathProperties$1.exports;
}

var pathPropertiesExports = requirePathProperties();

function distance(a, b) {
  return Math.sqrt((a[0] - b[0]) * (a[0] - b[0]) + (a[1] - b[1]) * (a[1] - b[1]));
}

function pointAlong(a, b, pct) {
  return [a[0] + (b[0] - a[0]) * pct, a[1] + (b[1] - a[1]) * pct];
}

function samePoint(a, b) {
  return distance(a, b) < 1e-9;
}

function interpolatePoints(a, b, string) {
  let interpolators = a.map((d, i) => interpolatePoint(d, b[i]));

  return function(t) {
    let values = interpolators.map(fn => fn(t));
    return string ? toPathString(values) : values;
  };
}

function interpolatePoint(a, b) {
  return function(t) {
    return a.map((d, i) => d + t * (b[i] - d));
  };
}

function isFiniteNumber(number) {
  return typeof number === "number" && isFinite(number);
}

const INVALID_INPUT = `All shapes must be supplied as arrays of [x, y] points or an SVG path string (https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d).
Example valid ways of supplying a shape would be:
[[0, 0], [10, 0], [10, 10]]
"M0,0 L10,0 L10,10Z"
`;

function parse(str) {
  return new Path(str).abs();
}

function split(parsed) {
  return parsed
    .toString()
    .split("M")
    .map((d, i) => {
      d = d.trim();
      return i && d ? "M" + d : d;
    })
    .filter(d => d);
}

function toPathString(ring) {
  return "M" + ring.join("L") + "Z";
}

function pathStringToRing(str, maxSegmentLength) {
  let parsed = parse(str);

  return exactRing(parsed) || approximateRing(parsed, maxSegmentLength);
}

function exactRing(parsed) {
  let segments = parsed.segments || [],
    ring = [];

  if (!segments.length || segments[0][0] !== "M") {
    return false;
  }

  for (let i = 0; i < segments.length; i++) {
    let [command, x, y] = segments[i];
    if ((command === "M" && i) || command === "Z") {
      break;
    } else if (command === "M" || command === "L") {
      ring.push([x, y]);
    } else if (command === "H") {
      ring.push([x, ring[ring.length - 1][1]]);
    } else if (command === "V") {
      ring.push([ring[ring.length - 1][0], x]);
    } else {
      return false;
    }
  }

  return ring.length ? { ring } : false;
}

function approximateRing(parsed, maxSegmentLength) {
  let ringPath = split(parsed)[0],
    ring = [],
    len,
    m,
    numPoints = 3;

  if (!ringPath) {
    throw new TypeError(INVALID_INPUT);
  }

  m = measure(ringPath);
  len = m.getTotalLength();

  if (maxSegmentLength && isFiniteNumber(maxSegmentLength) && maxSegmentLength > 0) {
    numPoints = Math.max(numPoints, Math.ceil(len / maxSegmentLength));
  }

  for (let i = 0; i < numPoints; i++) {
    let p = m.getPointAtLength(len * i / numPoints);
    ring.push([p.x, p.y]);
  }

  return {
    ring,
    skipBisect: true
  };
}

function measure(d) {
  // Use native browser measurement if running in browser
  if (typeof window !== "undefined" && window && window.document) {
    try {
      let path = window.document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttributeNS(null, "d", d);
      return path;
    } catch (e) {}
  }
  // Fall back to svg-path-properties
  return pathPropertiesExports.svgPathProperties(d);
}

function addPoints(ring, numPoints) {
  const desiredLength = ring.length + numPoints,
    step = polygonLength(ring) / numPoints;

  let i = 0,
    cursor = 0,
    insertAt = step / 2;

  while (ring.length < desiredLength) {
    let a = ring[i],
      b = ring[(i + 1) % ring.length],
      segment = distance(a, b);

    if (insertAt <= cursor + segment) {
      ring.splice(i + 1, 0, segment ? pointAlong(a, b, (insertAt - cursor) / segment) : a.slice(0));
      insertAt += step;
      continue;
    }

    cursor += segment;
    i++;
  }
}

function bisect(ring, maxSegmentLength = Infinity) {
  for (let i = 0; i < ring.length; i++) {
    let a = ring[i],
      b = i === ring.length - 1 ? ring[0] : ring[i + 1];

    // Could splice the whole set for a segment instead, but a bit messy
    while (distance(a, b) > maxSegmentLength) {
      b = pointAlong(a, b, 0.5);
      ring.splice(i + 1, 0, b);
    }
  }
}

function normalizeRing(ring, maxSegmentLength) {
  let points, area, skipBisect;

  if (typeof ring === "string") {
    let converted = pathStringToRing(ring, maxSegmentLength);
    ring = converted.ring;
    skipBisect = converted.skipBisect;
  } else if (!Array.isArray(ring)) {
    throw new TypeError(INVALID_INPUT);
  }

  points = ring.slice(0);

  if (!validRing(points)) {
    throw new TypeError(INVALID_INPUT);
  }

  // TODO skip this test to avoid scale issues?
  // Chosen epsilon (1e-6) is problematic for small coordinate range
  if (points.length > 1 && samePoint(points[0], points[points.length - 1])) {
    points.pop();
  }

  area = polygonArea(points);

  // Make all rings clockwise
  if (area > 0) {
    points.reverse();
  }

  if (
    !skipBisect &&
    maxSegmentLength &&
    isFiniteNumber(maxSegmentLength) &&
    maxSegmentLength > 0
  ) {
    bisect(points, maxSegmentLength);
  }

  return points;
}

function validRing(ring) {
  return ring.every(function(point) {
    return (
      Array.isArray(point) &&
      point.length >= 2 &&
      isFiniteNumber(point[0]) &&
      isFiniteNumber(point[1])
    );
  });
}

function rotate(ring, vs) {
  let len = ring.length,
      min = Infinity,
      bestOffset,
      sumOfSquares,
      spliced;

  for (let offset = 0; offset < len; offset++) {
    sumOfSquares = 0;

    vs.forEach(function(p, i){
      let d = distance(ring[(offset + i) % len], p);
      sumOfSquares += d * d;
    });

    if (sumOfSquares < min) {
      min = sumOfSquares;
      bestOffset = offset;
    }
  }

  if (bestOffset) {
    spliced = ring.splice(0, bestOffset);
    ring.splice(ring.length, 0, ...spliced);
  }
}

function interpolate(fromShape, toShape, { maxSegmentLength = 10, string = true } = {}) {
  let fromRing = normalizeRing(fromShape, maxSegmentLength),
    toRing = normalizeRing(toShape, maxSegmentLength),
    interpolator = interpolateRing(fromRing, toRing, string);

  // Extra optimization for near either end with path strings
  if (!string || (typeof fromShape !== "string" && typeof toShape !== "string")) {
    return interpolator;
  }

  return t => {
    if (t < 1e-4 && typeof fromShape === "string") {
      return fromShape;
    }
    if (1 - t < 1e-4 && typeof toShape === "string") {
      return toShape;
    }
    return interpolator(t);
  };
}

function interpolateRing(fromRing, toRing, string) {
  let diff;

  diff = fromRing.length - toRing.length;

  // TODO bisect and add points in one step?
  addPoints(fromRing, diff < 0 ? diff * -1 : 0);
  addPoints(toRing, diff > 0 ? diff : 0);

  rotate(fromRing, toRing);

  return interpolatePoints(fromRing, toRing, string);
}

var earcut = {exports: {}};

var hasRequiredEarcut;

function requireEarcut () {
	if (hasRequiredEarcut) return earcut.exports;
	hasRequiredEarcut = 1;

	earcut.exports = earcut$1;
	earcut.exports.default = earcut$1;

	function earcut$1(data, holeIndices, dim) {

	    dim = dim || 2;

	    var hasHoles = holeIndices && holeIndices.length,
	        outerLen = hasHoles ? holeIndices[0] * dim : data.length,
	        outerNode = linkedList(data, 0, outerLen, dim, true),
	        triangles = [];

	    if (!outerNode || outerNode.next === outerNode.prev) return triangles;

	    var minX, minY, maxX, maxY, x, y, invSize;

	    if (hasHoles) outerNode = eliminateHoles(data, holeIndices, outerNode, dim);

	    // if the shape is not too simple, we'll use z-order curve hash later; calculate polygon bbox
	    if (data.length > 80 * dim) {
	        minX = maxX = data[0];
	        minY = maxY = data[1];

	        for (var i = dim; i < outerLen; i += dim) {
	            x = data[i];
	            y = data[i + 1];
	            if (x < minX) minX = x;
	            if (y < minY) minY = y;
	            if (x > maxX) maxX = x;
	            if (y > maxY) maxY = y;
	        }

	        // minX, minY and invSize are later used to transform coords into integers for z-order calculation
	        invSize = Math.max(maxX - minX, maxY - minY);
	        invSize = invSize !== 0 ? 32767 / invSize : 0;
	    }

	    earcutLinked(outerNode, triangles, dim, minX, minY, invSize, 0);

	    return triangles;
	}

	// create a circular doubly linked list from polygon points in the specified winding order
	function linkedList(data, start, end, dim, clockwise) {
	    var i, last;

	    if (clockwise === (signedArea(data, start, end, dim) > 0)) {
	        for (i = start; i < end; i += dim) last = insertNode(i, data[i], data[i + 1], last);
	    } else {
	        for (i = end - dim; i >= start; i -= dim) last = insertNode(i, data[i], data[i + 1], last);
	    }

	    if (last && equals(last, last.next)) {
	        removeNode(last);
	        last = last.next;
	    }

	    return last;
	}

	// eliminate colinear or duplicate points
	function filterPoints(start, end) {
	    if (!start) return start;
	    if (!end) end = start;

	    var p = start,
	        again;
	    do {
	        again = false;

	        if (!p.steiner && (equals(p, p.next) || area(p.prev, p, p.next) === 0)) {
	            removeNode(p);
	            p = end = p.prev;
	            if (p === p.next) break;
	            again = true;

	        } else {
	            p = p.next;
	        }
	    } while (again || p !== end);

	    return end;
	}

	// main ear slicing loop which triangulates a polygon (given as a linked list)
	function earcutLinked(ear, triangles, dim, minX, minY, invSize, pass) {
	    if (!ear) return;

	    // interlink polygon nodes in z-order
	    if (!pass && invSize) indexCurve(ear, minX, minY, invSize);

	    var stop = ear,
	        prev, next;

	    // iterate through ears, slicing them one by one
	    while (ear.prev !== ear.next) {
	        prev = ear.prev;
	        next = ear.next;

	        if (invSize ? isEarHashed(ear, minX, minY, invSize) : isEar(ear)) {
	            // cut off the triangle
	            triangles.push(prev.i / dim | 0);
	            triangles.push(ear.i / dim | 0);
	            triangles.push(next.i / dim | 0);

	            removeNode(ear);

	            // skipping the next vertex leads to less sliver triangles
	            ear = next.next;
	            stop = next.next;

	            continue;
	        }

	        ear = next;

	        // if we looped through the whole remaining polygon and can't find any more ears
	        if (ear === stop) {
	            // try filtering points and slicing again
	            if (!pass) {
	                earcutLinked(filterPoints(ear), triangles, dim, minX, minY, invSize, 1);

	            // if this didn't work, try curing all small self-intersections locally
	            } else if (pass === 1) {
	                ear = cureLocalIntersections(filterPoints(ear), triangles, dim);
	                earcutLinked(ear, triangles, dim, minX, minY, invSize, 2);

	            // as a last resort, try splitting the remaining polygon into two
	            } else if (pass === 2) {
	                splitEarcut(ear, triangles, dim, minX, minY, invSize);
	            }

	            break;
	        }
	    }
	}

	// check whether a polygon node forms a valid ear with adjacent nodes
	function isEar(ear) {
	    var a = ear.prev,
	        b = ear,
	        c = ear.next;

	    if (area(a, b, c) >= 0) return false; // reflex, can't be an ear

	    // now make sure we don't have other points inside the potential ear
	    var ax = a.x, bx = b.x, cx = c.x, ay = a.y, by = b.y, cy = c.y;

	    // triangle bbox; min & max are calculated like this for speed
	    var x0 = ax < bx ? (ax < cx ? ax : cx) : (bx < cx ? bx : cx),
	        y0 = ay < by ? (ay < cy ? ay : cy) : (by < cy ? by : cy),
	        x1 = ax > bx ? (ax > cx ? ax : cx) : (bx > cx ? bx : cx),
	        y1 = ay > by ? (ay > cy ? ay : cy) : (by > cy ? by : cy);

	    var p = c.next;
	    while (p !== a) {
	        if (p.x >= x0 && p.x <= x1 && p.y >= y0 && p.y <= y1 &&
	            pointInTriangle(ax, ay, bx, by, cx, cy, p.x, p.y) &&
	            area(p.prev, p, p.next) >= 0) return false;
	        p = p.next;
	    }

	    return true;
	}

	function isEarHashed(ear, minX, minY, invSize) {
	    var a = ear.prev,
	        b = ear,
	        c = ear.next;

	    if (area(a, b, c) >= 0) return false; // reflex, can't be an ear

	    var ax = a.x, bx = b.x, cx = c.x, ay = a.y, by = b.y, cy = c.y;

	    // triangle bbox; min & max are calculated like this for speed
	    var x0 = ax < bx ? (ax < cx ? ax : cx) : (bx < cx ? bx : cx),
	        y0 = ay < by ? (ay < cy ? ay : cy) : (by < cy ? by : cy),
	        x1 = ax > bx ? (ax > cx ? ax : cx) : (bx > cx ? bx : cx),
	        y1 = ay > by ? (ay > cy ? ay : cy) : (by > cy ? by : cy);

	    // z-order range for the current triangle bbox;
	    var minZ = zOrder(x0, y0, minX, minY, invSize),
	        maxZ = zOrder(x1, y1, minX, minY, invSize);

	    var p = ear.prevZ,
	        n = ear.nextZ;

	    // look for points inside the triangle in both directions
	    while (p && p.z >= minZ && n && n.z <= maxZ) {
	        if (p.x >= x0 && p.x <= x1 && p.y >= y0 && p.y <= y1 && p !== a && p !== c &&
	            pointInTriangle(ax, ay, bx, by, cx, cy, p.x, p.y) && area(p.prev, p, p.next) >= 0) return false;
	        p = p.prevZ;

	        if (n.x >= x0 && n.x <= x1 && n.y >= y0 && n.y <= y1 && n !== a && n !== c &&
	            pointInTriangle(ax, ay, bx, by, cx, cy, n.x, n.y) && area(n.prev, n, n.next) >= 0) return false;
	        n = n.nextZ;
	    }

	    // look for remaining points in decreasing z-order
	    while (p && p.z >= minZ) {
	        if (p.x >= x0 && p.x <= x1 && p.y >= y0 && p.y <= y1 && p !== a && p !== c &&
	            pointInTriangle(ax, ay, bx, by, cx, cy, p.x, p.y) && area(p.prev, p, p.next) >= 0) return false;
	        p = p.prevZ;
	    }

	    // look for remaining points in increasing z-order
	    while (n && n.z <= maxZ) {
	        if (n.x >= x0 && n.x <= x1 && n.y >= y0 && n.y <= y1 && n !== a && n !== c &&
	            pointInTriangle(ax, ay, bx, by, cx, cy, n.x, n.y) && area(n.prev, n, n.next) >= 0) return false;
	        n = n.nextZ;
	    }

	    return true;
	}

	// go through all polygon nodes and cure small local self-intersections
	function cureLocalIntersections(start, triangles, dim) {
	    var p = start;
	    do {
	        var a = p.prev,
	            b = p.next.next;

	        if (!equals(a, b) && intersects(a, p, p.next, b) && locallyInside(a, b) && locallyInside(b, a)) {

	            triangles.push(a.i / dim | 0);
	            triangles.push(p.i / dim | 0);
	            triangles.push(b.i / dim | 0);

	            // remove two nodes involved
	            removeNode(p);
	            removeNode(p.next);

	            p = start = b;
	        }
	        p = p.next;
	    } while (p !== start);

	    return filterPoints(p);
	}

	// try splitting polygon into two and triangulate them independently
	function splitEarcut(start, triangles, dim, minX, minY, invSize) {
	    // look for a valid diagonal that divides the polygon into two
	    var a = start;
	    do {
	        var b = a.next.next;
	        while (b !== a.prev) {
	            if (a.i !== b.i && isValidDiagonal(a, b)) {
	                // split the polygon in two by the diagonal
	                var c = splitPolygon(a, b);

	                // filter colinear points around the cuts
	                a = filterPoints(a, a.next);
	                c = filterPoints(c, c.next);

	                // run earcut on each half
	                earcutLinked(a, triangles, dim, minX, minY, invSize, 0);
	                earcutLinked(c, triangles, dim, minX, minY, invSize, 0);
	                return;
	            }
	            b = b.next;
	        }
	        a = a.next;
	    } while (a !== start);
	}

	// link every hole into the outer loop, producing a single-ring polygon without holes
	function eliminateHoles(data, holeIndices, outerNode, dim) {
	    var queue = [],
	        i, len, start, end, list;

	    for (i = 0, len = holeIndices.length; i < len; i++) {
	        start = holeIndices[i] * dim;
	        end = i < len - 1 ? holeIndices[i + 1] * dim : data.length;
	        list = linkedList(data, start, end, dim, false);
	        if (list === list.next) list.steiner = true;
	        queue.push(getLeftmost(list));
	    }

	    queue.sort(compareX);

	    // process holes from left to right
	    for (i = 0; i < queue.length; i++) {
	        outerNode = eliminateHole(queue[i], outerNode);
	    }

	    return outerNode;
	}

	function compareX(a, b) {
	    return a.x - b.x;
	}

	// find a bridge between vertices that connects hole with an outer ring and and link it
	function eliminateHole(hole, outerNode) {
	    var bridge = findHoleBridge(hole, outerNode);
	    if (!bridge) {
	        return outerNode;
	    }

	    var bridgeReverse = splitPolygon(bridge, hole);

	    // filter collinear points around the cuts
	    filterPoints(bridgeReverse, bridgeReverse.next);
	    return filterPoints(bridge, bridge.next);
	}

	// David Eberly's algorithm for finding a bridge between hole and outer polygon
	function findHoleBridge(hole, outerNode) {
	    var p = outerNode,
	        hx = hole.x,
	        hy = hole.y,
	        qx = -Infinity,
	        m;

	    // find a segment intersected by a ray from the hole's leftmost point to the left;
	    // segment's endpoint with lesser x will be potential connection point
	    do {
	        if (hy <= p.y && hy >= p.next.y && p.next.y !== p.y) {
	            var x = p.x + (hy - p.y) * (p.next.x - p.x) / (p.next.y - p.y);
	            if (x <= hx && x > qx) {
	                qx = x;
	                m = p.x < p.next.x ? p : p.next;
	                if (x === hx) return m; // hole touches outer segment; pick leftmost endpoint
	            }
	        }
	        p = p.next;
	    } while (p !== outerNode);

	    if (!m) return null;

	    // look for points inside the triangle of hole point, segment intersection and endpoint;
	    // if there are no points found, we have a valid connection;
	    // otherwise choose the point of the minimum angle with the ray as connection point

	    var stop = m,
	        mx = m.x,
	        my = m.y,
	        tanMin = Infinity,
	        tan;

	    p = m;

	    do {
	        if (hx >= p.x && p.x >= mx && hx !== p.x &&
	                pointInTriangle(hy < my ? hx : qx, hy, mx, my, hy < my ? qx : hx, hy, p.x, p.y)) {

	            tan = Math.abs(hy - p.y) / (hx - p.x); // tangential

	            if (locallyInside(p, hole) &&
	                (tan < tanMin || (tan === tanMin && (p.x > m.x || (p.x === m.x && sectorContainsSector(m, p)))))) {
	                m = p;
	                tanMin = tan;
	            }
	        }

	        p = p.next;
	    } while (p !== stop);

	    return m;
	}

	// whether sector in vertex m contains sector in vertex p in the same coordinates
	function sectorContainsSector(m, p) {
	    return area(m.prev, m, p.prev) < 0 && area(p.next, m, m.next) < 0;
	}

	// interlink polygon nodes in z-order
	function indexCurve(start, minX, minY, invSize) {
	    var p = start;
	    do {
	        if (p.z === 0) p.z = zOrder(p.x, p.y, minX, minY, invSize);
	        p.prevZ = p.prev;
	        p.nextZ = p.next;
	        p = p.next;
	    } while (p !== start);

	    p.prevZ.nextZ = null;
	    p.prevZ = null;

	    sortLinked(p);
	}

	// Simon Tatham's linked list merge sort algorithm
	// http://www.chiark.greenend.org.uk/~sgtatham/algorithms/listsort.html
	function sortLinked(list) {
	    var i, p, q, e, tail, numMerges, pSize, qSize,
	        inSize = 1;

	    do {
	        p = list;
	        list = null;
	        tail = null;
	        numMerges = 0;

	        while (p) {
	            numMerges++;
	            q = p;
	            pSize = 0;
	            for (i = 0; i < inSize; i++) {
	                pSize++;
	                q = q.nextZ;
	                if (!q) break;
	            }
	            qSize = inSize;

	            while (pSize > 0 || (qSize > 0 && q)) {

	                if (pSize !== 0 && (qSize === 0 || !q || p.z <= q.z)) {
	                    e = p;
	                    p = p.nextZ;
	                    pSize--;
	                } else {
	                    e = q;
	                    q = q.nextZ;
	                    qSize--;
	                }

	                if (tail) tail.nextZ = e;
	                else list = e;

	                e.prevZ = tail;
	                tail = e;
	            }

	            p = q;
	        }

	        tail.nextZ = null;
	        inSize *= 2;

	    } while (numMerges > 1);

	    return list;
	}

	// z-order of a point given coords and inverse of the longer side of data bbox
	function zOrder(x, y, minX, minY, invSize) {
	    // coords are transformed into non-negative 15-bit integer range
	    x = (x - minX) * invSize | 0;
	    y = (y - minY) * invSize | 0;

	    x = (x | (x << 8)) & 0x00FF00FF;
	    x = (x | (x << 4)) & 0x0F0F0F0F;
	    x = (x | (x << 2)) & 0x33333333;
	    x = (x | (x << 1)) & 0x55555555;

	    y = (y | (y << 8)) & 0x00FF00FF;
	    y = (y | (y << 4)) & 0x0F0F0F0F;
	    y = (y | (y << 2)) & 0x33333333;
	    y = (y | (y << 1)) & 0x55555555;

	    return x | (y << 1);
	}

	// find the leftmost node of a polygon ring
	function getLeftmost(start) {
	    var p = start,
	        leftmost = start;
	    do {
	        if (p.x < leftmost.x || (p.x === leftmost.x && p.y < leftmost.y)) leftmost = p;
	        p = p.next;
	    } while (p !== start);

	    return leftmost;
	}

	// check if a point lies within a convex triangle
	function pointInTriangle(ax, ay, bx, by, cx, cy, px, py) {
	    return (cx - px) * (ay - py) >= (ax - px) * (cy - py) &&
	           (ax - px) * (by - py) >= (bx - px) * (ay - py) &&
	           (bx - px) * (cy - py) >= (cx - px) * (by - py);
	}

	// check if a diagonal between two polygon nodes is valid (lies in polygon interior)
	function isValidDiagonal(a, b) {
	    return a.next.i !== b.i && a.prev.i !== b.i && !intersectsPolygon(a, b) && // dones't intersect other edges
	           (locallyInside(a, b) && locallyInside(b, a) && middleInside(a, b) && // locally visible
	            (area(a.prev, a, b.prev) || area(a, b.prev, b)) || // does not create opposite-facing sectors
	            equals(a, b) && area(a.prev, a, a.next) > 0 && area(b.prev, b, b.next) > 0); // special zero-length case
	}

	// signed area of a triangle
	function area(p, q, r) {
	    return (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);
	}

	// check if two points are equal
	function equals(p1, p2) {
	    return p1.x === p2.x && p1.y === p2.y;
	}

	// check if two segments intersect
	function intersects(p1, q1, p2, q2) {
	    var o1 = sign(area(p1, q1, p2));
	    var o2 = sign(area(p1, q1, q2));
	    var o3 = sign(area(p2, q2, p1));
	    var o4 = sign(area(p2, q2, q1));

	    if (o1 !== o2 && o3 !== o4) return true; // general case

	    if (o1 === 0 && onSegment(p1, p2, q1)) return true; // p1, q1 and p2 are collinear and p2 lies on p1q1
	    if (o2 === 0 && onSegment(p1, q2, q1)) return true; // p1, q1 and q2 are collinear and q2 lies on p1q1
	    if (o3 === 0 && onSegment(p2, p1, q2)) return true; // p2, q2 and p1 are collinear and p1 lies on p2q2
	    if (o4 === 0 && onSegment(p2, q1, q2)) return true; // p2, q2 and q1 are collinear and q1 lies on p2q2

	    return false;
	}

	// for collinear points p, q, r, check if point q lies on segment pr
	function onSegment(p, q, r) {
	    return q.x <= Math.max(p.x, r.x) && q.x >= Math.min(p.x, r.x) && q.y <= Math.max(p.y, r.y) && q.y >= Math.min(p.y, r.y);
	}

	function sign(num) {
	    return num > 0 ? 1 : num < 0 ? -1 : 0;
	}

	// check if a polygon diagonal intersects any polygon segments
	function intersectsPolygon(a, b) {
	    var p = a;
	    do {
	        if (p.i !== a.i && p.next.i !== a.i && p.i !== b.i && p.next.i !== b.i &&
	                intersects(p, p.next, a, b)) return true;
	        p = p.next;
	    } while (p !== a);

	    return false;
	}

	// check if a polygon diagonal is locally inside the polygon
	function locallyInside(a, b) {
	    return area(a.prev, a, a.next) < 0 ?
	        area(a, b, a.next) >= 0 && area(a, a.prev, b) >= 0 :
	        area(a, b, a.prev) < 0 || area(a, a.next, b) < 0;
	}

	// check if the middle point of a polygon diagonal is inside the polygon
	function middleInside(a, b) {
	    var p = a,
	        inside = false,
	        px = (a.x + b.x) / 2,
	        py = (a.y + b.y) / 2;
	    do {
	        if (((p.y > py) !== (p.next.y > py)) && p.next.y !== p.y &&
	                (px < (p.next.x - p.x) * (py - p.y) / (p.next.y - p.y) + p.x))
	            inside = !inside;
	        p = p.next;
	    } while (p !== a);

	    return inside;
	}

	// link two polygon vertices with a bridge; if the vertices belong to the same ring, it splits polygon into two;
	// if one belongs to the outer ring and another to a hole, it merges it into a single ring
	function splitPolygon(a, b) {
	    var a2 = new Node(a.i, a.x, a.y),
	        b2 = new Node(b.i, b.x, b.y),
	        an = a.next,
	        bp = b.prev;

	    a.next = b;
	    b.prev = a;

	    a2.next = an;
	    an.prev = a2;

	    b2.next = a2;
	    a2.prev = b2;

	    bp.next = b2;
	    b2.prev = bp;

	    return b2;
	}

	// create a node and optionally link it with previous one (in a circular doubly linked list)
	function insertNode(i, x, y, last) {
	    var p = new Node(i, x, y);

	    if (!last) {
	        p.prev = p;
	        p.next = p;

	    } else {
	        p.next = last.next;
	        p.prev = last;
	        last.next.prev = p;
	        last.next = p;
	    }
	    return p;
	}

	function removeNode(p) {
	    p.next.prev = p.prev;
	    p.prev.next = p.next;

	    if (p.prevZ) p.prevZ.nextZ = p.nextZ;
	    if (p.nextZ) p.nextZ.prevZ = p.prevZ;
	}

	function Node(i, x, y) {
	    // vertex index in coordinates array
	    this.i = i;

	    // vertex coordinates
	    this.x = x;
	    this.y = y;

	    // previous and next vertex nodes in a polygon ring
	    this.prev = null;
	    this.next = null;

	    // z-order curve value
	    this.z = 0;

	    // previous and next nodes in z-order
	    this.prevZ = null;
	    this.nextZ = null;

	    // indicates whether this is a steiner point
	    this.steiner = false;
	}

	// return a percentage difference between the polygon area and its triangulation area;
	// used to verify correctness of triangulation
	earcut$1.deviation = function (data, holeIndices, dim, triangles) {
	    var hasHoles = holeIndices && holeIndices.length;
	    var outerLen = hasHoles ? holeIndices[0] * dim : data.length;

	    var polygonArea = Math.abs(signedArea(data, 0, outerLen, dim));
	    if (hasHoles) {
	        for (var i = 0, len = holeIndices.length; i < len; i++) {
	            var start = holeIndices[i] * dim;
	            var end = i < len - 1 ? holeIndices[i + 1] * dim : data.length;
	            polygonArea -= Math.abs(signedArea(data, start, end, dim));
	        }
	    }

	    var trianglesArea = 0;
	    for (i = 0; i < triangles.length; i += 3) {
	        var a = triangles[i] * dim;
	        var b = triangles[i + 1] * dim;
	        var c = triangles[i + 2] * dim;
	        trianglesArea += Math.abs(
	            (data[a] - data[c]) * (data[b + 1] - data[a + 1]) -
	            (data[a] - data[b]) * (data[c + 1] - data[a + 1]));
	    }

	    return polygonArea === 0 && trianglesArea === 0 ? 0 :
	        Math.abs((trianglesArea - polygonArea) / polygonArea);
	};

	function signedArea(data, start, end, dim) {
	    var sum = 0;
	    for (var i = start, j = end - dim; i < end; i += dim) {
	        sum += (data[j] - data[i]) * (data[i + 1] + data[j + 1]);
	        j = i;
	    }
	    return sum;
	}

	// turn a polygon in a multi-dimensional array form (e.g. as in GeoJSON) into a form Earcut accepts
	earcut$1.flatten = function (data) {
	    var dim = data[0][0].length,
	        result = {vertices: [], holes: [], dimensions: dim},
	        holeIndex = 0;

	    for (var i = 0; i < data.length; i++) {
	        for (var j = 0; j < data[i].length; j++) {
	            for (var d = 0; d < dim; d++) result.vertices.push(data[i][j][d]);
	        }
	        if (i > 0) {
	            holeIndex += data[i - 1].length;
	            result.holes.push(holeIndex);
	        }
	    }
	    return result;
	};
	return earcut.exports;
}

requireEarcut();

function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}

function bisector(compare) {
  if (compare.length === 1) compare = ascendingComparator(compare);
  return {
    left: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) < 0) lo = mid + 1;
        else hi = mid;
      }
      return lo;
    },
    right: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) > 0) hi = mid;
        else lo = mid + 1;
      }
      return lo;
    }
  };
}

function ascendingComparator(f) {
  return function(d, x) {
    return ascending(f(d), x);
  };
}

bisector(ascending);

const MorphOnScroll = ({ startPath, endPath, width = 300, height = 300, viewBox = "0 0 300 300", color = "#D9D9D9", scrollSpeed = 1, containerId, scrollStartOffset = 0, scrollEndOffset, }) => {
    const svgRef = useRef(null);
    const [morphedPath, setMorphedPath] = useState(startPath);
    const containerRef = useRef(null);
    useEffect(() => {
        const interpolator = interpolate(startPath, endPath, {
            maxSegmentLength: 0.5,
        });
        // Find the container if specified, otherwise use window
        if (containerId) {
            containerRef.current = document.getElementById(containerId);
        }
        const handleScroll = () => {
            const isContainerScroll = !!containerRef.current;
            // Get scroll values based on whether we're using a container or window
            const scrollY = isContainerScroll
                ? containerRef.current.scrollTop
                : window.scrollY;
            // Get the height values based on container or window
            const viewportHeight = isContainerScroll
                ? containerRef.current.clientHeight
                : window.innerHeight;
            const totalHeight = isContainerScroll
                ? containerRef.current.scrollHeight - viewportHeight
                : document.body.scrollHeight - viewportHeight;
            // Calculate the start and end scroll positions
            const start = scrollStartOffset;
            const end = scrollEndOffset !== null && scrollEndOffset !== void 0 ? scrollEndOffset : totalHeight;
            const scrollRange = end - start;
            // Calculate progress within the scroll range
            let progress = (scrollY - start) / (scrollRange * scrollSpeed);
            progress = Math.min(Math.max(progress, 0), 1); // clamp between 0 and 1
            setMorphedPath(interpolator(progress));
        };
        // Add scroll listener to the appropriate element
        const scrollElement = containerRef.current || window;
        scrollElement.addEventListener("scroll", handleScroll);
        // Initial calculation
        handleScroll();
        return () => {
            scrollElement.removeEventListener("scroll", handleScroll);
        };
    }, [
        startPath,
        endPath,
        scrollSpeed,
        containerId,
        scrollStartOffset,
        scrollEndOffset,
    ]);
    return (jsxRuntimeExports.jsx("svg", { ref: svgRef, width: width, height: height, viewBox: viewBox, xmlns: "http://www.w3.org/2000/svg", children: jsxRuntimeExports.jsx("path", { d: morphedPath, fill: color }) }));
};

export { AnimatedOnHover, GlowOnHover, MorphOnScroll, MultiEyeInteraction, RotateObject, SVGFollowMouse as SvgFollowMouse };
//# sourceMappingURL=index.esm.js.map
