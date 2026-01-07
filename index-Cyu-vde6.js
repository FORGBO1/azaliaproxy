function uP(t, e) {
    for (var n = 0; n < e.length; n++) {
        const i = e[n];
        if (typeof i != "string" && !Array.isArray(i)) {
            for (const o in i)
                if (o !== "default" && !(o in t)) {
                    const l = Object.getOwnPropertyDescriptor(i, o);
                    l && Object.defineProperty(t, o, l.get ? l : {
                        enumerable: !0,
                        get: ()=>i[o]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload"))
        return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
        i(o);
    new MutationObserver(o=>{
        for (const l of o)
            if (l.type === "childList")
                for (const c of l.addedNodes)
                    c.tagName === "LINK" && c.rel === "modulepreload" && i(c)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(o) {
        const l = {};
        return o.integrity && (l.integrity = o.integrity),
        o.referrerPolicy && (l.referrerPolicy = o.referrerPolicy),
        o.crossOrigin === "use-credentials" ? l.credentials = "include" : o.crossOrigin === "anonymous" ? l.credentials = "omit" : l.credentials = "same-origin",
        l
    }
    function i(o) {
        if (o.ep)
            return;
        o.ep = !0;
        const l = n(o);
        fetch(o.href, l)
    }
}
)();
function Cv(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
}
var $c = {
    exports: {}
}
  , Bi = {}
  , Wc = {
    exports: {}
}
  , Ce = {};
var ag;
function cP() {
    if (ag)
        return Ce;
    ag = 1;
    var t = Symbol.for("react.element")
      , e = Symbol.for("react.portal")
      , n = Symbol.for("react.fragment")
      , i = Symbol.for("react.strict_mode")
      , o = Symbol.for("react.profiler")
      , l = Symbol.for("react.provider")
      , c = Symbol.for("react.context")
      , d = Symbol.for("react.forward_ref")
      , h = Symbol.for("react.suspense")
      , p = Symbol.for("react.memo")
      , m = Symbol.for("react.lazy")
      , y = Symbol.iterator;
    function v(R) {
        return R === null || typeof R != "object" ? null : (R = y && R[y] || R["@@iterator"],
        typeof R == "function" ? R : null)
    }
    var w = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }
      , C = Object.assign
      , P = {};
    function T(R, B, ye) {
        this.props = R,
        this.context = B,
        this.refs = P,
        this.updater = ye || w
    }
    T.prototype.isReactComponent = {},
    T.prototype.setState = function(R, B) {
        if (typeof R != "object" && typeof R != "function" && R != null)
            throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, R, B, "setState")
    }
    ,
    T.prototype.forceUpdate = function(R) {
        this.updater.enqueueForceUpdate(this, R, "forceUpdate")
    }
    ;
    function k() {}
    k.prototype = T.prototype;
    function N(R, B, ye) {
        this.props = R,
        this.context = B,
        this.refs = P,
        this.updater = ye || w
    }
    var O = N.prototype = new k;
    O.constructor = N,
    C(O, T.prototype),
    O.isPureReactComponent = !0;
    var j = Array.isArray
      , L = Object.prototype.hasOwnProperty
      , V = {
        current: null
    }
      , z = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function K(R, B, ye) {
        var xe, Ee = {}, ke = null, Me = null;
        if (B != null)
            for (xe in B.ref !== void 0 && (Me = B.ref),
            B.key !== void 0 && (ke = "" + B.key),
            B)
                L.call(B, xe) && !z.hasOwnProperty(xe) && (Ee[xe] = B[xe]);
        var De = arguments.length - 2;
        if (De === 1)
            Ee.children = ye;
        else if (1 < De) {
            for (var je = Array(De), Tt = 0; Tt < De; Tt++)
                je[Tt] = arguments[Tt + 2];
            Ee.children = je
        }
        if (R && R.defaultProps)
            for (xe in De = R.defaultProps,
            De)
                Ee[xe] === void 0 && (Ee[xe] = De[xe]);
        return {
            $$typeof: t,
            type: R,
            key: ke,
            ref: Me,
            props: Ee,
            _owner: V.current
        }
    }
    function ie(R, B) {
        return {
            $$typeof: t,
            type: R.type,
            key: B,
            ref: R.ref,
            props: R.props,
            _owner: R._owner
        }
    }
    function ue(R) {
        return typeof R == "object" && R !== null && R.$$typeof === t
    }
    function ve(R) {
        var B = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + R.replace(/[=:]/g, function(ye) {
            return B[ye]
        })
    }
    var le = /\/+/g;
    function Se(R, B) {
        return typeof R == "object" && R !== null && R.key != null ? ve("" + R.key) : B.toString(36)
    }
    function X(R, B, ye, xe, Ee) {
        var ke = typeof R;
        (ke === "undefined" || ke === "boolean") && (R = null);
        var Me = !1;
        if (R === null)
            Me = !0;
        else
            switch (ke) {
            case "string":
            case "number":
                Me = !0;
                break;
            case "object":
                switch (R.$$typeof) {
                case t:
                case e:
                    Me = !0
                }
            }
        if (Me)
            return Me = R,
            Ee = Ee(Me),
            R = xe === "" ? "." + Se(Me, 0) : xe,
            j(Ee) ? (ye = "",
            R != null && (ye = R.replace(le, "$&/") + "/"),
            X(Ee, B, ye, "", function(Tt) {
                return Tt
            })) : Ee != null && (ue(Ee) && (Ee = ie(Ee, ye + (!Ee.key || Me && Me.key === Ee.key ? "" : ("" + Ee.key).replace(le, "$&/") + "/") + R)),
            B.push(Ee)),
            1;
        if (Me = 0,
        xe = xe === "" ? "." : xe + ":",
        j(R))
            for (var De = 0; De < R.length; De++) {
                ke = R[De];
                var je = xe + Se(ke, De);
                Me += X(ke, B, ye, je, Ee)
            }
        else if (je = v(R),
        typeof je == "function")
            for (R = je.call(R),
            De = 0; !(ke = R.next()).done; )
                ke = ke.value,
                je = xe + Se(ke, De++),
                Me += X(ke, B, ye, je, Ee);
        else if (ke === "object")
            throw B = String(R),
            Error("Objects are not valid as a React child (found: " + (B === "[object Object]" ? "object with keys {" + Object.keys(R).join(", ") + "}" : B) + "). If you meant to render a collection of children, use an array instead.");
        return Me
    }
    function _e(R, B, ye) {
        if (R == null)
            return R;
        var xe = []
          , Ee = 0;
        return X(R, xe, "", "", function(ke) {
            return B.call(ye, ke, Ee++)
        }),
        xe
    }
    function he(R) {
        if (R._status === -1) {
            var B = R._result;
            B = B(),
            B.then(function(ye) {
                (R._status === 0 || R._status === -1) && (R._status = 1,
                R._result = ye)
            }, function(ye) {
                (R._status === 0 || R._status === -1) && (R._status = 2,
                R._result = ye)
            }),
            R._status === -1 && (R._status = 0,
            R._result = B)
        }
        if (R._status === 1)
            return R._result.default;
        throw R._result
    }
    var te = {
        current: null
    }
      , F = {
        transition: null
    }
      , G = {
        ReactCurrentDispatcher: te,
        ReactCurrentBatchConfig: F,
        ReactCurrentOwner: V
    };
    function Z() {
        throw Error("act(...) is not supported in production builds of React.")
    }
    return Ce.Children = {
        map: _e,
        forEach: function(R, B, ye) {
            _e(R, function() {
                B.apply(this, arguments)
            }, ye)
        },
        count: function(R) {
            var B = 0;
            return _e(R, function() {
                B++
            }),
            B
        },
        toArray: function(R) {
            return _e(R, function(B) {
                return B
            }) || []
        },
        only: function(R) {
            if (!ue(R))
                throw Error("React.Children.only expected to receive a single React element child.");
            return R
        }
    },
    Ce.Component = T,
    Ce.Fragment = n,
    Ce.Profiler = o,
    Ce.PureComponent = N,
    Ce.StrictMode = i,
    Ce.Suspense = h,
    Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = G,
    Ce.act = Z,
    Ce.cloneElement = function(R, B, ye) {
        if (R == null)
            throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + R + ".");
        var xe = C({}, R.props)
          , Ee = R.key
          , ke = R.ref
          , Me = R._owner;
        if (B != null) {
            if (B.ref !== void 0 && (ke = B.ref,
            Me = V.current),
            B.key !== void 0 && (Ee = "" + B.key),
            R.type && R.type.defaultProps)
                var De = R.type.defaultProps;
            for (je in B)
                L.call(B, je) && !z.hasOwnProperty(je) && (xe[je] = B[je] === void 0 && De !== void 0 ? De[je] : B[je])
        }
        var je = arguments.length - 2;
        if (je === 1)
            xe.children = ye;
        else if (1 < je) {
            De = Array(je);
            for (var Tt = 0; Tt < je; Tt++)
                De[Tt] = arguments[Tt + 2];
            xe.children = De
        }
        return {
            $$typeof: t,
            type: R.type,
            key: Ee,
            ref: ke,
            props: xe,
            _owner: Me
        }
    }
    ,
    Ce.createContext = function(R) {
        return R = {
            $$typeof: c,
            _currentValue: R,
            _currentValue2: R,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null
        },
        R.Provider = {
            $$typeof: l,
            _context: R
        },
        R.Consumer = R
    }
    ,
    Ce.createElement = K,
    Ce.createFactory = function(R) {
        var B = K.bind(null, R);
        return B.type = R,
        B
    }
    ,
    Ce.createRef = function() {
        return {
            current: null
        }
    }
    ,
    Ce.forwardRef = function(R) {
        return {
            $$typeof: d,
            render: R
        }
    }
    ,
    Ce.isValidElement = ue,
    Ce.lazy = function(R) {
        return {
            $$typeof: m,
            _payload: {
                _status: -1,
                _result: R
            },
            _init: he
        }
    }
    ,
    Ce.memo = function(R, B) {
        return {
            $$typeof: p,
            type: R,
            compare: B === void 0 ? null : B
        }
    }
    ,
    Ce.startTransition = function(R) {
        var B = F.transition;
        F.transition = {};
        try {
            R()
        } finally {
            F.transition = B
        }
    }
    ,
    Ce.unstable_act = Z,
    Ce.useCallback = function(R, B) {
        return te.current.useCallback(R, B)
    }
    ,
    Ce.useContext = function(R) {
        return te.current.useContext(R)
    }
    ,
    Ce.useDebugValue = function() {}
    ,
    Ce.useDeferredValue = function(R) {
        return te.current.useDeferredValue(R)
    }
    ,
    Ce.useEffect = function(R, B) {
        return te.current.useEffect(R, B)
    }
    ,
    Ce.useId = function() {
        return te.current.useId()
    }
    ,
    Ce.useImperativeHandle = function(R, B, ye) {
        return te.current.useImperativeHandle(R, B, ye)
    }
    ,
    Ce.useInsertionEffect = function(R, B) {
        return te.current.useInsertionEffect(R, B)
    }
    ,
    Ce.useLayoutEffect = function(R, B) {
        return te.current.useLayoutEffect(R, B)
    }
    ,
    Ce.useMemo = function(R, B) {
        return te.current.useMemo(R, B)
    }
    ,
    Ce.useReducer = function(R, B, ye) {
        return te.current.useReducer(R, B, ye)
    }
    ,
    Ce.useRef = function(R) {
        return te.current.useRef(R)
    }
    ,
    Ce.useState = function(R) {
        return te.current.useState(R)
    }
    ,
    Ce.useSyncExternalStore = function(R, B, ye) {
        return te.current.useSyncExternalStore(R, B, ye)
    }
    ,
    Ce.useTransition = function() {
        return te.current.useTransition()
    }
    ,
    Ce.version = "18.3.1",
    Ce
}
var lg;
function Al() {
    return lg || (lg = 1,
    Wc.exports = cP()),
    Wc.exports
}
var ug;
function dP() {
    if (ug)
        return Bi;
    ug = 1;
    var t = Al()
      , e = Symbol.for("react.element")
      , n = Symbol.for("react.fragment")
      , i = Object.prototype.hasOwnProperty
      , o = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
      , l = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function c(d, h, p) {
        var m, y = {}, v = null, w = null;
        p !== void 0 && (v = "" + p),
        h.key !== void 0 && (v = "" + h.key),
        h.ref !== void 0 && (w = h.ref);
        for (m in h)
            i.call(h, m) && !l.hasOwnProperty(m) && (y[m] = h[m]);
        if (d && d.defaultProps)
            for (m in h = d.defaultProps,
            h)
                y[m] === void 0 && (y[m] = h[m]);
        return {
            $$typeof: e,
            type: d,
            key: v,
            ref: w,
            props: y,
            _owner: o.current
        }
    }
    return Bi.Fragment = n,
    Bi.jsx = c,
    Bi.jsxs = c,
    Bi
}
var cg;
function fP() {
    return cg || (cg = 1,
    $c.exports = dP()),
    $c.exports
}
var A = fP()
  , $a = {}
  , Hc = {
    exports: {}
}
  , Mt = {}
  , Qc = {
    exports: {}
}
  , Kc = {};
var dg;
function hP() {
    return dg || (dg = 1,
    (function(t) {
        function e(F, G) {
            var Z = F.length;
            F.push(G);
            e: for (; 0 < Z; ) {
                var R = Z - 1 >>> 1
                  , B = F[R];
                if (0 < o(B, G))
                    F[R] = G,
                    F[Z] = B,
                    Z = R;
                else
                    break e
            }
        }
        function n(F) {
            return F.length === 0 ? null : F[0]
        }
        function i(F) {
            if (F.length === 0)
                return null;
            var G = F[0]
              , Z = F.pop();
            if (Z !== G) {
                F[0] = Z;
                e: for (var R = 0, B = F.length, ye = B >>> 1; R < ye; ) {
                    var xe = 2 * (R + 1) - 1
                      , Ee = F[xe]
                      , ke = xe + 1
                      , Me = F[ke];
                    if (0 > o(Ee, Z))
                        ke < B && 0 > o(Me, Ee) ? (F[R] = Me,
                        F[ke] = Z,
                        R = ke) : (F[R] = Ee,
                        F[xe] = Z,
                        R = xe);
                    else if (ke < B && 0 > o(Me, Z))
                        F[R] = Me,
                        F[ke] = Z,
                        R = ke;
                    else
                        break e
                }
            }
            return G
        }
        function o(F, G) {
            var Z = F.sortIndex - G.sortIndex;
            return Z !== 0 ? Z : F.id - G.id
        }
        if (typeof performance == "object" && typeof performance.now == "function") {
            var l = performance;
            t.unstable_now = function() {
                return l.now()
            }
        } else {
            var c = Date
              , d = c.now();
            t.unstable_now = function() {
                return c.now() - d
            }
        }
        var h = []
          , p = []
          , m = 1
          , y = null
          , v = 3
          , w = !1
          , C = !1
          , P = !1
          , T = typeof setTimeout == "function" ? setTimeout : null
          , k = typeof clearTimeout == "function" ? clearTimeout : null
          , N = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function O(F) {
            for (var G = n(p); G !== null; ) {
                if (G.callback === null)
                    i(p);
                else if (G.startTime <= F)
                    i(p),
                    G.sortIndex = G.expirationTime,
                    e(h, G);
                else
                    break;
                G = n(p)
            }
        }
        function j(F) {
            if (P = !1,
            O(F),
            !C)
                if (n(h) !== null)
                    C = !0,
                    he(L);
                else {
                    var G = n(p);
                    G !== null && te(j, G.startTime - F)
                }
        }
        function L(F, G) {
            C = !1,
            P && (P = !1,
            k(K),
            K = -1),
            w = !0;
            var Z = v;
            try {
                for (O(G),
                y = n(h); y !== null && (!(y.expirationTime > G) || F && !ve()); ) {
                    var R = y.callback;
                    if (typeof R == "function") {
                        y.callback = null,
                        v = y.priorityLevel;
                        var B = R(y.expirationTime <= G);
                        G = t.unstable_now(),
                        typeof B == "function" ? y.callback = B : y === n(h) && i(h),
                        O(G)
                    } else
                        i(h);
                    y = n(h)
                }
                if (y !== null)
                    var ye = !0;
                else {
                    var xe = n(p);
                    xe !== null && te(j, xe.startTime - G),
                    ye = !1
                }
                return ye
            } finally {
                y = null,
                v = Z,
                w = !1
            }
        }
        var V = !1
          , z = null
          , K = -1
          , ie = 5
          , ue = -1;
        function ve() {
            return !(t.unstable_now() - ue < ie)
        }
        function le() {
            if (z !== null) {
                var F = t.unstable_now();
                ue = F;
                var G = !0;
                try {
                    G = z(!0, F)
                } finally {
                    G ? Se() : (V = !1,
                    z = null)
                }
            } else
                V = !1
        }
        var Se;
        if (typeof N == "function")
            Se = function() {
                N(le)
            }
            ;
        else if (typeof MessageChannel < "u") {
            var X = new MessageChannel
              , _e = X.port2;
            X.port1.onmessage = le,
            Se = function() {
                _e.postMessage(null)
            }
        } else
            Se = function() {
                T(le, 0)
            }
            ;
        function he(F) {
            z = F,
            V || (V = !0,
            Se())
        }
        function te(F, G) {
            K = T(function() {
                F(t.unstable_now())
            }, G)
        }
        t.unstable_IdlePriority = 5,
        t.unstable_ImmediatePriority = 1,
        t.unstable_LowPriority = 4,
        t.unstable_NormalPriority = 3,
        t.unstable_Profiling = null,
        t.unstable_UserBlockingPriority = 2,
        t.unstable_cancelCallback = function(F) {
            F.callback = null
        }
        ,
        t.unstable_continueExecution = function() {
            C || w || (C = !0,
            he(L))
        }
        ,
        t.unstable_forceFrameRate = function(F) {
            0 > F || 125 < F ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ie = 0 < F ? Math.floor(1e3 / F) : 5
        }
        ,
        t.unstable_getCurrentPriorityLevel = function() {
            return v
        }
        ,
        t.unstable_getFirstCallbackNode = function() {
            return n(h)
        }
        ,
        t.unstable_next = function(F) {
            switch (v) {
            case 1:
            case 2:
            case 3:
                var G = 3;
                break;
            default:
                G = v
            }
            var Z = v;
            v = G;
            try {
                return F()
            } finally {
                v = Z
            }
        }
        ,
        t.unstable_pauseExecution = function() {}
        ,
        t.unstable_requestPaint = function() {}
        ,
        t.unstable_runWithPriority = function(F, G) {
            switch (F) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                F = 3
            }
            var Z = v;
            v = F;
            try {
                return G()
            } finally {
                v = Z
            }
        }
        ,
        t.unstable_scheduleCallback = function(F, G, Z) {
            var R = t.unstable_now();
            switch (typeof Z == "object" && Z !== null ? (Z = Z.delay,
            Z = typeof Z == "number" && 0 < Z ? R + Z : R) : Z = R,
            F) {
            case 1:
                var B = -1;
                break;
            case 2:
                B = 250;
                break;
            case 5:
                B = 1073741823;
                break;
            case 4:
                B = 1e4;
                break;
            default:
                B = 5e3
            }
            return B = Z + B,
            F = {
                id: m++,
                callback: G,
                priorityLevel: F,
                startTime: Z,
                expirationTime: B,
                sortIndex: -1
            },
            Z > R ? (F.sortIndex = Z,
            e(p, F),
            n(h) === null && F === n(p) && (P ? (k(K),
            K = -1) : P = !0,
            te(j, Z - R))) : (F.sortIndex = B,
            e(h, F),
            C || w || (C = !0,
            he(L))),
            F
        }
        ,
        t.unstable_shouldYield = ve,
        t.unstable_wrapCallback = function(F) {
            var G = v;
            return function() {
                var Z = v;
                v = G;
                try {
                    return F.apply(this, arguments)
                } finally {
                    v = Z
                }
            }
        }
    }
    )(Kc)),
    Kc
}
var fg;
function pP() {
    return fg || (fg = 1,
    Qc.exports = hP()),
    Qc.exports
}
var hg;
function mP() {
    if (hg)
        return Mt;
    hg = 1;
    var t = Al()
      , e = pP();
    function n(r) {
        for (var s = "https://reactjs.org/docs/error-decoder.html?invariant=" + r, a = 1; a < arguments.length; a++)
            s += "&args[]=" + encodeURIComponent(arguments[a]);
        return "Minified React error #" + r + "; visit " + s + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    var i = new Set
      , o = {};
    function l(r, s) {
        c(r, s),
        c(r + "Capture", s)
    }
    function c(r, s) {
        for (o[r] = s,
        r = 0; r < s.length; r++)
            i.add(s[r])
    }
    var d = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
      , h = Object.prototype.hasOwnProperty
      , p = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
      , m = {}
      , y = {};
    function v(r) {
        return h.call(y, r) ? !0 : h.call(m, r) ? !1 : p.test(r) ? y[r] = !0 : (m[r] = !0,
        !1)
    }
    function w(r, s, a, u) {
        if (a !== null && a.type === 0)
            return !1;
        switch (typeof s) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return u ? !1 : a !== null ? !a.acceptsBooleans : (r = r.toLowerCase().slice(0, 5),
            r !== "data-" && r !== "aria-");
        default:
            return !1
        }
    }
    function C(r, s, a, u) {
        if (s === null || typeof s > "u" || w(r, s, a, u))
            return !0;
        if (u)
            return !1;
        if (a !== null)
            switch (a.type) {
            case 3:
                return !s;
            case 4:
                return s === !1;
            case 5:
                return isNaN(s);
            case 6:
                return isNaN(s) || 1 > s
            }
        return !1
    }
    function P(r, s, a, u, f, g, x) {
        this.acceptsBooleans = s === 2 || s === 3 || s === 4,
        this.attributeName = u,
        this.attributeNamespace = f,
        this.mustUseProperty = a,
        this.propertyName = r,
        this.type = s,
        this.sanitizeURL = g,
        this.removeEmptyString = x
    }
    var T = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r) {
        T[r] = new P(r,0,!1,r,null,!1,!1)
    }),
    [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(r) {
        var s = r[0];
        T[s] = new P(s,1,!1,r[1],null,!1,!1)
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(r) {
        T[r] = new P(r,2,!1,r.toLowerCase(),null,!1,!1)
    }),
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(r) {
        T[r] = new P(r,2,!1,r,null,!1,!1)
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r) {
        T[r] = new P(r,3,!1,r.toLowerCase(),null,!1,!1)
    }),
    ["checked", "multiple", "muted", "selected"].forEach(function(r) {
        T[r] = new P(r,3,!0,r,null,!1,!1)
    }),
    ["capture", "download"].forEach(function(r) {
        T[r] = new P(r,4,!1,r,null,!1,!1)
    }),
    ["cols", "rows", "size", "span"].forEach(function(r) {
        T[r] = new P(r,6,!1,r,null,!1,!1)
    }),
    ["rowSpan", "start"].forEach(function(r) {
        T[r] = new P(r,5,!1,r.toLowerCase(),null,!1,!1)
    });
    var k = /[\-:]([a-z])/g;
    function N(r) {
        return r[1].toUpperCase()
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r) {
        var s = r.replace(k, N);
        T[s] = new P(s,1,!1,r,null,!1,!1)
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r) {
        var s = r.replace(k, N);
        T[s] = new P(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)
    }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function(r) {
        var s = r.replace(k, N);
        T[s] = new P(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)
    }),
    ["tabIndex", "crossOrigin"].forEach(function(r) {
        T[r] = new P(r,1,!1,r.toLowerCase(),null,!1,!1)
    }),
    T.xlinkHref = new P("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),
    ["src", "href", "action", "formAction"].forEach(function(r) {
        T[r] = new P(r,1,!1,r.toLowerCase(),null,!0,!0)
    });
    function O(r, s, a, u) {
        var f = T.hasOwnProperty(s) ? T[s] : null;
        (f !== null ? f.type !== 0 : u || !(2 < s.length) || s[0] !== "o" && s[0] !== "O" || s[1] !== "n" && s[1] !== "N") && (C(s, a, f, u) && (a = null),
        u || f === null ? v(s) && (a === null ? r.removeAttribute(s) : r.setAttribute(s, "" + a)) : f.mustUseProperty ? r[f.propertyName] = a === null ? f.type === 3 ? !1 : "" : a : (s = f.attributeName,
        u = f.attributeNamespace,
        a === null ? r.removeAttribute(s) : (f = f.type,
        a = f === 3 || f === 4 && a === !0 ? "" : "" + a,
        u ? r.setAttributeNS(u, s, a) : r.setAttribute(s, a))))
    }
    var j = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
      , L = Symbol.for("react.element")
      , V = Symbol.for("react.portal")
      , z = Symbol.for("react.fragment")
      , K = Symbol.for("react.strict_mode")
      , ie = Symbol.for("react.profiler")
      , ue = Symbol.for("react.provider")
      , ve = Symbol.for("react.context")
      , le = Symbol.for("react.forward_ref")
      , Se = Symbol.for("react.suspense")
      , X = Symbol.for("react.suspense_list")
      , _e = Symbol.for("react.memo")
      , he = Symbol.for("react.lazy")
      , te = Symbol.for("react.offscreen")
      , F = Symbol.iterator;
    function G(r) {
        return r === null || typeof r != "object" ? null : (r = F && r[F] || r["@@iterator"],
        typeof r == "function" ? r : null)
    }
    var Z = Object.assign, R;
    function B(r) {
        if (R === void 0)
            try {
                throw Error()
            } catch (a) {
                var s = a.stack.trim().match(/\n( *(at )?)/);
                R = s && s[1] || ""
            }
        return `
` + R + r
    }
    var ye = !1;
    function xe(r, s) {
        if (!r || ye)
            return "";
        ye = !0;
        var a = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            if (s)
                if (s = function() {
                    throw Error()
                }
                ,
                Object.defineProperty(s.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }),
                typeof Reflect == "object" && Reflect.construct) {
                    try {
                        Reflect.construct(s, [])
                    } catch (I) {
                        var u = I
                    }
                    Reflect.construct(r, [], s)
                } else {
                    try {
                        s.call()
                    } catch (I) {
                        u = I
                    }
                    r.call(s.prototype)
                }
            else {
                try {
                    throw Error()
                } catch (I) {
                    u = I
                }
                r()
            }
        } catch (I) {
            if (I && u && typeof I.stack == "string") {
                for (var f = I.stack.split(`
`), g = u.stack.split(`
`), x = f.length - 1, b = g.length - 1; 1 <= x && 0 <= b && f[x] !== g[b]; )
                    b--;
                for (; 1 <= x && 0 <= b; x--,
                b--)
                    if (f[x] !== g[b]) {
                        if (x !== 1 || b !== 1)
                            do
                                if (x--,
                                b--,
                                0 > b || f[x] !== g[b]) {
                                    var _ = `
` + f[x].replace(" at new ", " at ");
                                    return r.displayName && _.includes("<anonymous>") && (_ = _.replace("<anonymous>", r.displayName)),
                                    _
                                }
                            while (1 <= x && 0 <= b);
                        break
                    }
            }
        } finally {
            ye = !1,
            Error.prepareStackTrace = a
        }
        return (r = r ? r.displayName || r.name : "") ? B(r) : ""
    }
    function Ee(r) {
        switch (r.tag) {
        case 5:
            return B(r.type);
        case 16:
            return B("Lazy");
        case 13:
            return B("Suspense");
        case 19:
            return B("SuspenseList");
        case 0:
        case 2:
        case 15:
            return r = xe(r.type, !1),
            r;
        case 11:
            return r = xe(r.type.render, !1),
            r;
        case 1:
            return r = xe(r.type, !0),
            r;
        default:
            return ""
        }
    }
    function ke(r) {
        if (r == null)
            return null;
        if (typeof r == "function")
            return r.displayName || r.name || null;
        if (typeof r == "string")
            return r;
        switch (r) {
        case z:
            return "Fragment";
        case V:
            return "Portal";
        case ie:
            return "Profiler";
        case K:
            return "StrictMode";
        case Se:
            return "Suspense";
        case X:
            return "SuspenseList"
        }
        if (typeof r == "object")
            switch (r.$$typeof) {
            case ve:
                return (r.displayName || "Context") + ".Consumer";
            case ue:
                return (r._context.displayName || "Context") + ".Provider";
            case le:
                var s = r.render;
                return r = r.displayName,
                r || (r = s.displayName || s.name || "",
                r = r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef"),
                r;
            case _e:
                return s = r.displayName || null,
                s !== null ? s : ke(r.type) || "Memo";
            case he:
                s = r._payload,
                r = r._init;
                try {
                    return ke(r(s))
                } catch {}
            }
        return null
    }
    function Me(r) {
        var s = r.type;
        switch (r.tag) {
        case 24:
            return "Cache";
        case 9:
            return (s.displayName || "Context") + ".Consumer";
        case 10:
            return (s._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return r = s.render,
            r = r.displayName || r.name || "",
            s.displayName || (r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return s;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return ke(s);
        case 8:
            return s === K ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof s == "function")
                return s.displayName || s.name || null;
            if (typeof s == "string")
                return s
        }
        return null
    }
    function De(r) {
        switch (typeof r) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return r;
        case "object":
            return r;
        default:
            return ""
        }
    }
    function je(r) {
        var s = r.type;
        return (r = r.nodeName) && r.toLowerCase() === "input" && (s === "checkbox" || s === "radio")
    }
    function Tt(r) {
        var s = je(r) ? "checked" : "value"
          , a = Object.getOwnPropertyDescriptor(r.constructor.prototype, s)
          , u = "" + r[s];
        if (!r.hasOwnProperty(s) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
            var f = a.get
              , g = a.set;
            return Object.defineProperty(r, s, {
                configurable: !0,
                get: function() {
                    return f.call(this)
                },
                set: function(x) {
                    u = "" + x,
                    g.call(this, x)
                }
            }),
            Object.defineProperty(r, s, {
                enumerable: a.enumerable
            }),
            {
                getValue: function() {
                    return u
                },
                setValue: function(x) {
                    u = "" + x
                },
                stopTracking: function() {
                    r._valueTracker = null,
                    delete r[s]
                }
            }
        }
    }
    function rs(r) {
        r._valueTracker || (r._valueTracker = Tt(r))
    }
    function Oo(r) {
        if (!r)
            return !1;
        var s = r._valueTracker;
        if (!s)
            return !0;
        var a = s.getValue()
          , u = "";
        return r && (u = je(r) ? r.checked ? "true" : "false" : r.value),
        r = u,
        r !== a ? (s.setValue(r),
        !0) : !1
    }
    function Dn(r) {
        if (r = r || (typeof document < "u" ? document : void 0),
        typeof r > "u")
            return null;
        try {
            return r.activeElement || r.body
        } catch {
            return r.body
        }
    }
    function Gl(r, s) {
        var a = s.checked;
        return Z({}, s, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: a ?? r._wrapperState.initialChecked
        })
    }
    function ph(r, s) {
        var a = s.defaultValue == null ? "" : s.defaultValue
          , u = s.checked != null ? s.checked : s.defaultChecked;
        a = De(s.value != null ? s.value : a),
        r._wrapperState = {
            initialChecked: u,
            initialValue: a,
            controlled: s.type === "checkbox" || s.type === "radio" ? s.checked != null : s.value != null
        }
    }
    function mh(r, s) {
        s = s.checked,
        s != null && O(r, "checked", s, !1)
    }
    function Xl(r, s) {
        mh(r, s);
        var a = De(s.value)
          , u = s.type;
        if (a != null)
            u === "number" ? (a === 0 && r.value === "" || r.value != a) && (r.value = "" + a) : r.value !== "" + a && (r.value = "" + a);
        else if (u === "submit" || u === "reset") {
            r.removeAttribute("value");
            return
        }
        s.hasOwnProperty("value") ? Yl(r, s.type, a) : s.hasOwnProperty("defaultValue") && Yl(r, s.type, De(s.defaultValue)),
        s.checked == null && s.defaultChecked != null && (r.defaultChecked = !!s.defaultChecked)
    }
    function gh(r, s, a) {
        if (s.hasOwnProperty("value") || s.hasOwnProperty("defaultValue")) {
            var u = s.type;
            if (!(u !== "submit" && u !== "reset" || s.value !== void 0 && s.value !== null))
                return;
            s = "" + r._wrapperState.initialValue,
            a || s === r.value || (r.value = s),
            r.defaultValue = s
        }
        a = r.name,
        a !== "" && (r.name = ""),
        r.defaultChecked = !!r._wrapperState.initialChecked,
        a !== "" && (r.name = a)
    }
    function Yl(r, s, a) {
        (s !== "number" || Dn(r.ownerDocument) !== r) && (a == null ? r.defaultValue = "" + r._wrapperState.initialValue : r.defaultValue !== "" + a && (r.defaultValue = "" + a))
    }
    var ni = Array.isArray;
    function ss(r, s, a, u) {
        if (r = r.options,
        s) {
            s = {};
            for (var f = 0; f < a.length; f++)
                s["$" + a[f]] = !0;
            for (a = 0; a < r.length; a++)
                f = s.hasOwnProperty("$" + r[a].value),
                r[a].selected !== f && (r[a].selected = f),
                f && u && (r[a].defaultSelected = !0)
        } else {
            for (a = "" + De(a),
            s = null,
            f = 0; f < r.length; f++) {
                if (r[f].value === a) {
                    r[f].selected = !0,
                    u && (r[f].defaultSelected = !0);
                    return
                }
                s !== null || r[f].disabled || (s = r[f])
            }
            s !== null && (s.selected = !0)
        }
    }
    function Jl(r, s) {
        if (s.dangerouslySetInnerHTML != null)
            throw Error(n(91));
        return Z({}, s, {
            value: void 0,
            defaultValue: void 0,
            children: "" + r._wrapperState.initialValue
        })
    }
    function yh(r, s) {
        var a = s.value;
        if (a == null) {
            if (a = s.children,
            s = s.defaultValue,
            a != null) {
                if (s != null)
                    throw Error(n(92));
                if (ni(a)) {
                    if (1 < a.length)
                        throw Error(n(93));
                    a = a[0]
                }
                s = a
            }
            s == null && (s = ""),
            a = s
        }
        r._wrapperState = {
            initialValue: De(a)
        }
    }
    function vh(r, s) {
        var a = De(s.value)
          , u = De(s.defaultValue);
        a != null && (a = "" + a,
        a !== r.value && (r.value = a),
        s.defaultValue == null && r.defaultValue !== a && (r.defaultValue = a)),
        u != null && (r.defaultValue = "" + u)
    }
    function xh(r) {
        var s = r.textContent;
        s === r._wrapperState.initialValue && s !== "" && s !== null && (r.value = s)
    }
    function wh(r) {
        switch (r) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
        }
    }
    function eu(r, s) {
        return r == null || r === "http://www.w3.org/1999/xhtml" ? wh(s) : r === "http://www.w3.org/2000/svg" && s === "foreignObject" ? "http://www.w3.org/1999/xhtml" : r
    }
    var Io, Sh = (function(r) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(s, a, u, f) {
            MSApp.execUnsafeLocalFunction(function() {
                return r(s, a, u, f)
            })
        }
        : r
    }
    )(function(r, s) {
        if (r.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in r)
            r.innerHTML = s;
        else {
            for (Io = Io || document.createElement("div"),
            Io.innerHTML = "<svg>" + s.valueOf().toString() + "</svg>",
            s = Io.firstChild; r.firstChild; )
                r.removeChild(r.firstChild);
            for (; s.firstChild; )
                r.appendChild(s.firstChild)
        }
    });
    function ri(r, s) {
        if (s) {
            var a = r.firstChild;
            if (a && a === r.lastChild && a.nodeType === 3) {
                a.nodeValue = s;
                return
            }
        }
        r.textContent = s
    }
    var si = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    }
      , hS = ["Webkit", "ms", "Moz", "O"];
    Object.keys(si).forEach(function(r) {
        hS.forEach(function(s) {
            s = s + r.charAt(0).toUpperCase() + r.substring(1),
            si[s] = si[r]
        })
    });
    function Ph(r, s, a) {
        return s == null || typeof s == "boolean" || s === "" ? "" : a || typeof s != "number" || s === 0 || si.hasOwnProperty(r) && si[r] ? ("" + s).trim() : s + "px"
    }
    function Th(r, s) {
        r = r.style;
        for (var a in s)
            if (s.hasOwnProperty(a)) {
                var u = a.indexOf("--") === 0
                  , f = Ph(a, s[a], u);
                a === "float" && (a = "cssFloat"),
                u ? r.setProperty(a, f) : r[a] = f
            }
    }
    var pS = Z({
        menuitem: !0
    }, {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    });
    function tu(r, s) {
        if (s) {
            if (pS[r] && (s.children != null || s.dangerouslySetInnerHTML != null))
                throw Error(n(137, r));
            if (s.dangerouslySetInnerHTML != null) {
                if (s.children != null)
                    throw Error(n(60));
                if (typeof s.dangerouslySetInnerHTML != "object" || !("__html"in s.dangerouslySetInnerHTML))
                    throw Error(n(61))
            }
            if (s.style != null && typeof s.style != "object")
                throw Error(n(62))
        }
    }
    function nu(r, s) {
        if (r.indexOf("-") === -1)
            return typeof s.is == "string";
        switch (r) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
        }
    }
    var ru = null;
    function su(r) {
        return r = r.target || r.srcElement || window,
        r.correspondingUseElement && (r = r.correspondingUseElement),
        r.nodeType === 3 ? r.parentNode : r
    }
    var iu = null
      , is = null
      , os = null;
    function bh(r) {
        if (r = _i(r)) {
            if (typeof iu != "function")
                throw Error(n(280));
            var s = r.stateNode;
            s && (s = sa(s),
            iu(r.stateNode, r.type, s))
        }
    }
    function Ch(r) {
        is ? os ? os.push(r) : os = [r] : is = r
    }
    function _h() {
        if (is) {
            var r = is
              , s = os;
            if (os = is = null,
            bh(r),
            s)
                for (r = 0; r < s.length; r++)
                    bh(s[r])
        }
    }
    function Eh(r, s) {
        return r(s)
    }
    function kh() {}
    var ou = !1;
    function Ah(r, s, a) {
        if (ou)
            return r(s, a);
        ou = !0;
        try {
            return Eh(r, s, a)
        } finally {
            ou = !1,
            (is !== null || os !== null) && (kh(),
            _h())
        }
    }
    function ii(r, s) {
        var a = r.stateNode;
        if (a === null)
            return null;
        var u = sa(a);
        if (u === null)
            return null;
        a = u[s];
        e: switch (s) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (u = !u.disabled) || (r = r.type,
            u = !(r === "button" || r === "input" || r === "select" || r === "textarea")),
            r = !u;
            break e;
        default:
            r = !1
        }
        if (r)
            return null;
        if (a && typeof a != "function")
            throw Error(n(231, s, typeof a));
        return a
    }
    var au = !1;
    if (d)
        try {
            var oi = {};
            Object.defineProperty(oi, "passive", {
                get: function() {
                    au = !0
                }
            }),
            window.addEventListener("test", oi, oi),
            window.removeEventListener("test", oi, oi)
        } catch {
            au = !1
        }
    function mS(r, s, a, u, f, g, x, b, _) {
        var I = Array.prototype.slice.call(arguments, 3);
        try {
            s.apply(a, I)
        } catch (W) {
            this.onError(W)
        }
    }
    var ai = !1
      , Lo = null
      , jo = !1
      , lu = null
      , gS = {
        onError: function(r) {
            ai = !0,
            Lo = r
        }
    };
    function yS(r, s, a, u, f, g, x, b, _) {
        ai = !1,
        Lo = null,
        mS.apply(gS, arguments)
    }
    function vS(r, s, a, u, f, g, x, b, _) {
        if (yS.apply(this, arguments),
        ai) {
            if (ai) {
                var I = Lo;
                ai = !1,
                Lo = null
            } else
                throw Error(n(198));
            jo || (jo = !0,
            lu = I)
        }
    }
    function Rr(r) {
        var s = r
          , a = r;
        if (r.alternate)
            for (; s.return; )
                s = s.return;
        else {
            r = s;
            do
                s = r,
                (s.flags & 4098) !== 0 && (a = s.return),
                r = s.return;
            while (r)
        }
        return s.tag === 3 ? a : null
    }
    function Rh(r) {
        if (r.tag === 13) {
            var s = r.memoizedState;
            if (s === null && (r = r.alternate,
            r !== null && (s = r.memoizedState)),
            s !== null)
                return s.dehydrated
        }
        return null
    }
    function Nh(r) {
        if (Rr(r) !== r)
            throw Error(n(188))
    }
    function xS(r) {
        var s = r.alternate;
        if (!s) {
            if (s = Rr(r),
            s === null)
                throw Error(n(188));
            return s !== r ? null : r
        }
        for (var a = r, u = s; ; ) {
            var f = a.return;
            if (f === null)
                break;
            var g = f.alternate;
            if (g === null) {
                if (u = f.return,
                u !== null) {
                    a = u;
                    continue
                }
                break
            }
            if (f.child === g.child) {
                for (g = f.child; g; ) {
                    if (g === a)
                        return Nh(f),
                        r;
                    if (g === u)
                        return Nh(f),
                        s;
                    g = g.sibling
                }
                throw Error(n(188))
            }
            if (a.return !== u.return)
                a = f,
                u = g;
            else {
                for (var x = !1, b = f.child; b; ) {
                    if (b === a) {
                        x = !0,
                        a = f,
                        u = g;
                        break
                    }
                    if (b === u) {
                        x = !0,
                        u = f,
                        a = g;
                        break
                    }
                    b = b.sibling
                }
                if (!x) {
                    for (b = g.child; b; ) {
                        if (b === a) {
                            x = !0,
                            a = g,
                            u = f;
                            break
                        }
                        if (b === u) {
                            x = !0,
                            u = g,
                            a = f;
                            break
                        }
                        b = b.sibling
                    }
                    if (!x)
                        throw Error(n(189))
                }
            }
            if (a.alternate !== u)
                throw Error(n(190))
        }
        if (a.tag !== 3)
            throw Error(n(188));
        return a.stateNode.current === a ? r : s
    }
    function Mh(r) {
        return r = xS(r),
        r !== null ? Dh(r) : null
    }
    function Dh(r) {
        if (r.tag === 5 || r.tag === 6)
            return r;
        for (r = r.child; r !== null; ) {
            var s = Dh(r);
            if (s !== null)
                return s;
            r = r.sibling
        }
        return null
    }
    var Oh = e.unstable_scheduleCallback
      , Ih = e.unstable_cancelCallback
      , wS = e.unstable_shouldYield
      , SS = e.unstable_requestPaint
      , Ye = e.unstable_now
      , PS = e.unstable_getCurrentPriorityLevel
      , uu = e.unstable_ImmediatePriority
      , Lh = e.unstable_UserBlockingPriority
      , Fo = e.unstable_NormalPriority
      , TS = e.unstable_LowPriority
      , jh = e.unstable_IdlePriority
      , Vo = null
      , xn = null;
    function bS(r) {
        if (xn && typeof xn.onCommitFiberRoot == "function")
            try {
                xn.onCommitFiberRoot(Vo, r, void 0, (r.current.flags & 128) === 128)
            } catch {}
    }
    var nn = Math.clz32 ? Math.clz32 : ES
      , CS = Math.log
      , _S = Math.LN2;
    function ES(r) {
        return r >>>= 0,
        r === 0 ? 32 : 31 - (CS(r) / _S | 0) | 0
    }
    var zo = 64
      , Bo = 4194304;
    function li(r) {
        switch (r & -r) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return r & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return r & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return r
        }
    }
    function Uo(r, s) {
        var a = r.pendingLanes;
        if (a === 0)
            return 0;
        var u = 0
          , f = r.suspendedLanes
          , g = r.pingedLanes
          , x = a & 268435455;
        if (x !== 0) {
            var b = x & ~f;
            b !== 0 ? u = li(b) : (g &= x,
            g !== 0 && (u = li(g)))
        } else
            x = a & ~f,
            x !== 0 ? u = li(x) : g !== 0 && (u = li(g));
        if (u === 0)
            return 0;
        if (s !== 0 && s !== u && (s & f) === 0 && (f = u & -u,
        g = s & -s,
        f >= g || f === 16 && (g & 4194240) !== 0))
            return s;
        if ((u & 4) !== 0 && (u |= a & 16),
        s = r.entangledLanes,
        s !== 0)
            for (r = r.entanglements,
            s &= u; 0 < s; )
                a = 31 - nn(s),
                f = 1 << a,
                u |= r[a],
                s &= ~f;
        return u
    }
    function kS(r, s) {
        switch (r) {
        case 1:
        case 2:
        case 4:
            return s + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return s + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
        }
    }
    function AS(r, s) {
        for (var a = r.suspendedLanes, u = r.pingedLanes, f = r.expirationTimes, g = r.pendingLanes; 0 < g; ) {
            var x = 31 - nn(g)
              , b = 1 << x
              , _ = f[x];
            _ === -1 ? ((b & a) === 0 || (b & u) !== 0) && (f[x] = kS(b, s)) : _ <= s && (r.expiredLanes |= b),
            g &= ~b
        }
    }
    function cu(r) {
        return r = r.pendingLanes & -1073741825,
        r !== 0 ? r : r & 1073741824 ? 1073741824 : 0
    }
    function Fh() {
        var r = zo;
        return zo <<= 1,
        (zo & 4194240) === 0 && (zo = 64),
        r
    }
    function du(r) {
        for (var s = [], a = 0; 31 > a; a++)
            s.push(r);
        return s
    }
    function ui(r, s, a) {
        r.pendingLanes |= s,
        s !== 536870912 && (r.suspendedLanes = 0,
        r.pingedLanes = 0),
        r = r.eventTimes,
        s = 31 - nn(s),
        r[s] = a
    }
    function RS(r, s) {
        var a = r.pendingLanes & ~s;
        r.pendingLanes = s,
        r.suspendedLanes = 0,
        r.pingedLanes = 0,
        r.expiredLanes &= s,
        r.mutableReadLanes &= s,
        r.entangledLanes &= s,
        s = r.entanglements;
        var u = r.eventTimes;
        for (r = r.expirationTimes; 0 < a; ) {
            var f = 31 - nn(a)
              , g = 1 << f;
            s[f] = 0,
            u[f] = -1,
            r[f] = -1,
            a &= ~g
        }
    }
    function fu(r, s) {
        var a = r.entangledLanes |= s;
        for (r = r.entanglements; a; ) {
            var u = 31 - nn(a)
              , f = 1 << u;
            f & s | r[u] & s && (r[u] |= s),
            a &= ~f
        }
    }
    var Ie = 0;
    function Vh(r) {
        return r &= -r,
        1 < r ? 4 < r ? (r & 268435455) !== 0 ? 16 : 536870912 : 4 : 1
    }
    var zh, hu, Bh, Uh, $h, pu = !1, $o = [], Xn = null, Yn = null, Jn = null, ci = new Map, di = new Map, er = [], NS = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
    function Wh(r, s) {
        switch (r) {
        case "focusin":
        case "focusout":
            Xn = null;
            break;
        case "dragenter":
        case "dragleave":
            Yn = null;
            break;
        case "mouseover":
        case "mouseout":
            Jn = null;
            break;
        case "pointerover":
        case "pointerout":
            ci.delete(s.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            di.delete(s.pointerId)
        }
    }
    function fi(r, s, a, u, f, g) {
        return r === null || r.nativeEvent !== g ? (r = {
            blockedOn: s,
            domEventName: a,
            eventSystemFlags: u,
            nativeEvent: g,
            targetContainers: [f]
        },
        s !== null && (s = _i(s),
        s !== null && hu(s)),
        r) : (r.eventSystemFlags |= u,
        s = r.targetContainers,
        f !== null && s.indexOf(f) === -1 && s.push(f),
        r)
    }
    function MS(r, s, a, u, f) {
        switch (s) {
        case "focusin":
            return Xn = fi(Xn, r, s, a, u, f),
            !0;
        case "dragenter":
            return Yn = fi(Yn, r, s, a, u, f),
            !0;
        case "mouseover":
            return Jn = fi(Jn, r, s, a, u, f),
            !0;
        case "pointerover":
            var g = f.pointerId;
            return ci.set(g, fi(ci.get(g) || null, r, s, a, u, f)),
            !0;
        case "gotpointercapture":
            return g = f.pointerId,
            di.set(g, fi(di.get(g) || null, r, s, a, u, f)),
            !0
        }
        return !1
    }
    function Hh(r) {
        var s = Nr(r.target);
        if (s !== null) {
            var a = Rr(s);
            if (a !== null) {
                if (s = a.tag,
                s === 13) {
                    if (s = Rh(a),
                    s !== null) {
                        r.blockedOn = s,
                        $h(r.priority, function() {
                            Bh(a)
                        });
                        return
                    }
                } else if (s === 3 && a.stateNode.current.memoizedState.isDehydrated) {
                    r.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
                    return
                }
            }
        }
        r.blockedOn = null
    }
    function Wo(r) {
        if (r.blockedOn !== null)
            return !1;
        for (var s = r.targetContainers; 0 < s.length; ) {
            var a = gu(r.domEventName, r.eventSystemFlags, s[0], r.nativeEvent);
            if (a === null) {
                a = r.nativeEvent;
                var u = new a.constructor(a.type,a);
                ru = u,
                a.target.dispatchEvent(u),
                ru = null
            } else
                return s = _i(a),
                s !== null && hu(s),
                r.blockedOn = a,
                !1;
            s.shift()
        }
        return !0
    }
    function Qh(r, s, a) {
        Wo(r) && a.delete(s)
    }
    function DS() {
        pu = !1,
        Xn !== null && Wo(Xn) && (Xn = null),
        Yn !== null && Wo(Yn) && (Yn = null),
        Jn !== null && Wo(Jn) && (Jn = null),
        ci.forEach(Qh),
        di.forEach(Qh)
    }
    function hi(r, s) {
        r.blockedOn === s && (r.blockedOn = null,
        pu || (pu = !0,
        e.unstable_scheduleCallback(e.unstable_NormalPriority, DS)))
    }
    function pi(r) {
        function s(f) {
            return hi(f, r)
        }
        if (0 < $o.length) {
            hi($o[0], r);
            for (var a = 1; a < $o.length; a++) {
                var u = $o[a];
                u.blockedOn === r && (u.blockedOn = null)
            }
        }
        for (Xn !== null && hi(Xn, r),
        Yn !== null && hi(Yn, r),
        Jn !== null && hi(Jn, r),
        ci.forEach(s),
        di.forEach(s),
        a = 0; a < er.length; a++)
            u = er[a],
            u.blockedOn === r && (u.blockedOn = null);
        for (; 0 < er.length && (a = er[0],
        a.blockedOn === null); )
            Hh(a),
            a.blockedOn === null && er.shift()
    }
    var as = j.ReactCurrentBatchConfig
      , Ho = !0;
    function OS(r, s, a, u) {
        var f = Ie
          , g = as.transition;
        as.transition = null;
        try {
            Ie = 1,
            mu(r, s, a, u)
        } finally {
            Ie = f,
            as.transition = g
        }
    }
    function IS(r, s, a, u) {
        var f = Ie
          , g = as.transition;
        as.transition = null;
        try {
            Ie = 4,
            mu(r, s, a, u)
        } finally {
            Ie = f,
            as.transition = g
        }
    }
    function mu(r, s, a, u) {
        if (Ho) {
            var f = gu(r, s, a, u);
            if (f === null)
                Du(r, s, u, Qo, a),
                Wh(r, u);
            else if (MS(f, r, s, a, u))
                u.stopPropagation();
            else if (Wh(r, u),
            s & 4 && -1 < NS.indexOf(r)) {
                for (; f !== null; ) {
                    var g = _i(f);
                    if (g !== null && zh(g),
                    g = gu(r, s, a, u),
                    g === null && Du(r, s, u, Qo, a),
                    g === f)
                        break;
                    f = g
                }
                f !== null && u.stopPropagation()
            } else
                Du(r, s, u, null, a)
        }
    }
    var Qo = null;
    function gu(r, s, a, u) {
        if (Qo = null,
        r = su(u),
        r = Nr(r),
        r !== null)
            if (s = Rr(r),
            s === null)
                r = null;
            else if (a = s.tag,
            a === 13) {
                if (r = Rh(s),
                r !== null)
                    return r;
                r = null
            } else if (a === 3) {
                if (s.stateNode.current.memoizedState.isDehydrated)
                    return s.tag === 3 ? s.stateNode.containerInfo : null;
                r = null
            } else
                s !== r && (r = null);
        return Qo = r,
        null
    }
    function Kh(r) {
        switch (r) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (PS()) {
            case uu:
                return 1;
            case Lh:
                return 4;
            case Fo:
            case TS:
                return 16;
            case jh:
                return 536870912;
            default:
                return 16
            }
        default:
            return 16
        }
    }
    var tr = null
      , yu = null
      , Ko = null;
    function qh() {
        if (Ko)
            return Ko;
        var r, s = yu, a = s.length, u, f = "value"in tr ? tr.value : tr.textContent, g = f.length;
        for (r = 0; r < a && s[r] === f[r]; r++)
            ;
        var x = a - r;
        for (u = 1; u <= x && s[a - u] === f[g - u]; u++)
            ;
        return Ko = f.slice(r, 1 < u ? 1 - u : void 0)
    }
    function qo(r) {
        var s = r.keyCode;
        return "charCode"in r ? (r = r.charCode,
        r === 0 && s === 13 && (r = 13)) : r = s,
        r === 10 && (r = 13),
        32 <= r || r === 13 ? r : 0
    }
    function Zo() {
        return !0
    }
    function Zh() {
        return !1
    }
    function Lt(r) {
        function s(a, u, f, g, x) {
            this._reactName = a,
            this._targetInst = f,
            this.type = u,
            this.nativeEvent = g,
            this.target = x,
            this.currentTarget = null;
            for (var b in r)
                r.hasOwnProperty(b) && (a = r[b],
                this[b] = a ? a(g) : g[b]);
            return this.isDefaultPrevented = (g.defaultPrevented != null ? g.defaultPrevented : g.returnValue === !1) ? Zo : Zh,
            this.isPropagationStopped = Zh,
            this
        }
        return Z(s.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var a = this.nativeEvent;
                a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1),
                this.isDefaultPrevented = Zo)
            },
            stopPropagation: function() {
                var a = this.nativeEvent;
                a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
                this.isPropagationStopped = Zo)
            },
            persist: function() {},
            isPersistent: Zo
        }),
        s
    }
    var ls = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(r) {
            return r.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, vu = Lt(ls), mi = Z({}, ls, {
        view: 0,
        detail: 0
    }), LS = Lt(mi), xu, wu, gi, Go = Z({}, mi, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Pu,
        button: 0,
        buttons: 0,
        relatedTarget: function(r) {
            return r.relatedTarget === void 0 ? r.fromElement === r.srcElement ? r.toElement : r.fromElement : r.relatedTarget
        },
        movementX: function(r) {
            return "movementX"in r ? r.movementX : (r !== gi && (gi && r.type === "mousemove" ? (xu = r.screenX - gi.screenX,
            wu = r.screenY - gi.screenY) : wu = xu = 0,
            gi = r),
            xu)
        },
        movementY: function(r) {
            return "movementY"in r ? r.movementY : wu
        }
    }), Gh = Lt(Go), jS = Z({}, Go, {
        dataTransfer: 0
    }), FS = Lt(jS), VS = Z({}, mi, {
        relatedTarget: 0
    }), Su = Lt(VS), zS = Z({}, ls, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), BS = Lt(zS), US = Z({}, ls, {
        clipboardData: function(r) {
            return "clipboardData"in r ? r.clipboardData : window.clipboardData
        }
    }), $S = Lt(US), WS = Z({}, ls, {
        data: 0
    }), Xh = Lt(WS), HS = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    }, QS = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    }, KS = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function qS(r) {
        var s = this.nativeEvent;
        return s.getModifierState ? s.getModifierState(r) : (r = KS[r]) ? !!s[r] : !1
    }
    function Pu() {
        return qS
    }
    var ZS = Z({}, mi, {
        key: function(r) {
            if (r.key) {
                var s = HS[r.key] || r.key;
                if (s !== "Unidentified")
                    return s
            }
            return r.type === "keypress" ? (r = qo(r),
            r === 13 ? "Enter" : String.fromCharCode(r)) : r.type === "keydown" || r.type === "keyup" ? QS[r.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Pu,
        charCode: function(r) {
            return r.type === "keypress" ? qo(r) : 0
        },
        keyCode: function(r) {
            return r.type === "keydown" || r.type === "keyup" ? r.keyCode : 0
        },
        which: function(r) {
            return r.type === "keypress" ? qo(r) : r.type === "keydown" || r.type === "keyup" ? r.keyCode : 0
        }
    })
      , GS = Lt(ZS)
      , XS = Z({}, Go, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    })
      , Yh = Lt(XS)
      , YS = Z({}, mi, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Pu
    })
      , JS = Lt(YS)
      , e1 = Z({}, ls, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
      , t1 = Lt(e1)
      , n1 = Z({}, Go, {
        deltaX: function(r) {
            return "deltaX"in r ? r.deltaX : "wheelDeltaX"in r ? -r.wheelDeltaX : 0
        },
        deltaY: function(r) {
            return "deltaY"in r ? r.deltaY : "wheelDeltaY"in r ? -r.wheelDeltaY : "wheelDelta"in r ? -r.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
      , r1 = Lt(n1)
      , s1 = [9, 13, 27, 32]
      , Tu = d && "CompositionEvent"in window
      , yi = null;
    d && "documentMode"in document && (yi = document.documentMode);
    var i1 = d && "TextEvent"in window && !yi
      , Jh = d && (!Tu || yi && 8 < yi && 11 >= yi)
      , ep = " "
      , tp = !1;
    function np(r, s) {
        switch (r) {
        case "keyup":
            return s1.indexOf(s.keyCode) !== -1;
        case "keydown":
            return s.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
        }
    }
    function rp(r) {
        return r = r.detail,
        typeof r == "object" && "data"in r ? r.data : null
    }
    var us = !1;
    function o1(r, s) {
        switch (r) {
        case "compositionend":
            return rp(s);
        case "keypress":
            return s.which !== 32 ? null : (tp = !0,
            ep);
        case "textInput":
            return r = s.data,
            r === ep && tp ? null : r;
        default:
            return null
        }
    }
    function a1(r, s) {
        if (us)
            return r === "compositionend" || !Tu && np(r, s) ? (r = qh(),
            Ko = yu = tr = null,
            us = !1,
            r) : null;
        switch (r) {
        case "paste":
            return null;
        case "keypress":
            if (!(s.ctrlKey || s.altKey || s.metaKey) || s.ctrlKey && s.altKey) {
                if (s.char && 1 < s.char.length)
                    return s.char;
                if (s.which)
                    return String.fromCharCode(s.which)
            }
            return null;
        case "compositionend":
            return Jh && s.locale !== "ko" ? null : s.data;
        default:
            return null
        }
    }
    var l1 = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };
    function sp(r) {
        var s = r && r.nodeName && r.nodeName.toLowerCase();
        return s === "input" ? !!l1[r.type] : s === "textarea"
    }
    function ip(r, s, a, u) {
        Ch(u),
        s = ta(s, "onChange"),
        0 < s.length && (a = new vu("onChange","change",null,a,u),
        r.push({
            event: a,
            listeners: s
        }))
    }
    var vi = null
      , xi = null;
    function u1(r) {
        Tp(r, 0)
    }
    function Xo(r) {
        var s = ps(r);
        if (Oo(s))
            return r
    }
    function c1(r, s) {
        if (r === "change")
            return s
    }
    var op = !1;
    if (d) {
        var bu;
        if (d) {
            var Cu = "oninput"in document;
            if (!Cu) {
                var ap = document.createElement("div");
                ap.setAttribute("oninput", "return;"),
                Cu = typeof ap.oninput == "function"
            }
            bu = Cu
        } else
            bu = !1;
        op = bu && (!document.documentMode || 9 < document.documentMode)
    }
    function lp() {
        vi && (vi.detachEvent("onpropertychange", up),
        xi = vi = null)
    }
    function up(r) {
        if (r.propertyName === "value" && Xo(xi)) {
            var s = [];
            ip(s, xi, r, su(r)),
            Ah(u1, s)
        }
    }
    function d1(r, s, a) {
        r === "focusin" ? (lp(),
        vi = s,
        xi = a,
        vi.attachEvent("onpropertychange", up)) : r === "focusout" && lp()
    }
    function f1(r) {
        if (r === "selectionchange" || r === "keyup" || r === "keydown")
            return Xo(xi)
    }
    function h1(r, s) {
        if (r === "click")
            return Xo(s)
    }
    function p1(r, s) {
        if (r === "input" || r === "change")
            return Xo(s)
    }
    function m1(r, s) {
        return r === s && (r !== 0 || 1 / r === 1 / s) || r !== r && s !== s
    }
    var rn = typeof Object.is == "function" ? Object.is : m1;
    function wi(r, s) {
        if (rn(r, s))
            return !0;
        if (typeof r != "object" || r === null || typeof s != "object" || s === null)
            return !1;
        var a = Object.keys(r)
          , u = Object.keys(s);
        if (a.length !== u.length)
            return !1;
        for (u = 0; u < a.length; u++) {
            var f = a[u];
            if (!h.call(s, f) || !rn(r[f], s[f]))
                return !1
        }
        return !0
    }
    function cp(r) {
        for (; r && r.firstChild; )
            r = r.firstChild;
        return r
    }
    function dp(r, s) {
        var a = cp(r);
        r = 0;
        for (var u; a; ) {
            if (a.nodeType === 3) {
                if (u = r + a.textContent.length,
                r <= s && u >= s)
                    return {
                        node: a,
                        offset: s - r
                    };
                r = u
            }
            e: {
                for (; a; ) {
                    if (a.nextSibling) {
                        a = a.nextSibling;
                        break e
                    }
                    a = a.parentNode
                }
                a = void 0
            }
            a = cp(a)
        }
    }
    function fp(r, s) {
        return r && s ? r === s ? !0 : r && r.nodeType === 3 ? !1 : s && s.nodeType === 3 ? fp(r, s.parentNode) : "contains"in r ? r.contains(s) : r.compareDocumentPosition ? !!(r.compareDocumentPosition(s) & 16) : !1 : !1
    }
    function hp() {
        for (var r = window, s = Dn(); s instanceof r.HTMLIFrameElement; ) {
            try {
                var a = typeof s.contentWindow.location.href == "string"
            } catch {
                a = !1
            }
            if (a)
                r = s.contentWindow;
            else
                break;
            s = Dn(r.document)
        }
        return s
    }
    function _u(r) {
        var s = r && r.nodeName && r.nodeName.toLowerCase();
        return s && (s === "input" && (r.type === "text" || r.type === "search" || r.type === "tel" || r.type === "url" || r.type === "password") || s === "textarea" || r.contentEditable === "true")
    }
    function g1(r) {
        var s = hp()
          , a = r.focusedElem
          , u = r.selectionRange;
        if (s !== a && a && a.ownerDocument && fp(a.ownerDocument.documentElement, a)) {
            if (u !== null && _u(a)) {
                if (s = u.start,
                r = u.end,
                r === void 0 && (r = s),
                "selectionStart"in a)
                    a.selectionStart = s,
                    a.selectionEnd = Math.min(r, a.value.length);
                else if (r = (s = a.ownerDocument || document) && s.defaultView || window,
                r.getSelection) {
                    r = r.getSelection();
                    var f = a.textContent.length
                      , g = Math.min(u.start, f);
                    u = u.end === void 0 ? g : Math.min(u.end, f),
                    !r.extend && g > u && (f = u,
                    u = g,
                    g = f),
                    f = dp(a, g);
                    var x = dp(a, u);
                    f && x && (r.rangeCount !== 1 || r.anchorNode !== f.node || r.anchorOffset !== f.offset || r.focusNode !== x.node || r.focusOffset !== x.offset) && (s = s.createRange(),
                    s.setStart(f.node, f.offset),
                    r.removeAllRanges(),
                    g > u ? (r.addRange(s),
                    r.extend(x.node, x.offset)) : (s.setEnd(x.node, x.offset),
                    r.addRange(s)))
                }
            }
            for (s = [],
            r = a; r = r.parentNode; )
                r.nodeType === 1 && s.push({
                    element: r,
                    left: r.scrollLeft,
                    top: r.scrollTop
                });
            for (typeof a.focus == "function" && a.focus(),
            a = 0; a < s.length; a++)
                r = s[a],
                r.element.scrollLeft = r.left,
                r.element.scrollTop = r.top
        }
    }
    var y1 = d && "documentMode"in document && 11 >= document.documentMode
      , cs = null
      , Eu = null
      , Si = null
      , ku = !1;
    function pp(r, s, a) {
        var u = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
        ku || cs == null || cs !== Dn(u) || (u = cs,
        "selectionStart"in u && _u(u) ? u = {
            start: u.selectionStart,
            end: u.selectionEnd
        } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(),
        u = {
            anchorNode: u.anchorNode,
            anchorOffset: u.anchorOffset,
            focusNode: u.focusNode,
            focusOffset: u.focusOffset
        }),
        Si && wi(Si, u) || (Si = u,
        u = ta(Eu, "onSelect"),
        0 < u.length && (s = new vu("onSelect","select",null,s,a),
        r.push({
            event: s,
            listeners: u
        }),
        s.target = cs)))
    }
    function Yo(r, s) {
        var a = {};
        return a[r.toLowerCase()] = s.toLowerCase(),
        a["Webkit" + r] = "webkit" + s,
        a["Moz" + r] = "moz" + s,
        a
    }
    var ds = {
        animationend: Yo("Animation", "AnimationEnd"),
        animationiteration: Yo("Animation", "AnimationIteration"),
        animationstart: Yo("Animation", "AnimationStart"),
        transitionend: Yo("Transition", "TransitionEnd")
    }
      , Au = {}
      , mp = {};
    d && (mp = document.createElement("div").style,
    "AnimationEvent"in window || (delete ds.animationend.animation,
    delete ds.animationiteration.animation,
    delete ds.animationstart.animation),
    "TransitionEvent"in window || delete ds.transitionend.transition);
    function Jo(r) {
        if (Au[r])
            return Au[r];
        if (!ds[r])
            return r;
        var s = ds[r], a;
        for (a in s)
            if (s.hasOwnProperty(a) && a in mp)
                return Au[r] = s[a];
        return r
    }
    var gp = Jo("animationend")
      , yp = Jo("animationiteration")
      , vp = Jo("animationstart")
      , xp = Jo("transitionend")
      , wp = new Map
      , Sp = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    function nr(r, s) {
        wp.set(r, s),
        l(s, [r])
    }
    for (var Ru = 0; Ru < Sp.length; Ru++) {
        var Nu = Sp[Ru]
          , v1 = Nu.toLowerCase()
          , x1 = Nu[0].toUpperCase() + Nu.slice(1);
        nr(v1, "on" + x1)
    }
    nr(gp, "onAnimationEnd"),
    nr(yp, "onAnimationIteration"),
    nr(vp, "onAnimationStart"),
    nr("dblclick", "onDoubleClick"),
    nr("focusin", "onFocus"),
    nr("focusout", "onBlur"),
    nr(xp, "onTransitionEnd"),
    c("onMouseEnter", ["mouseout", "mouseover"]),
    c("onMouseLeave", ["mouseout", "mouseover"]),
    c("onPointerEnter", ["pointerout", "pointerover"]),
    c("onPointerLeave", ["pointerout", "pointerover"]),
    l("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    l("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    l("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    l("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    l("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    l("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Pi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
      , w1 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Pi));
    function Pp(r, s, a) {
        var u = r.type || "unknown-event";
        r.currentTarget = a,
        vS(u, s, void 0, r),
        r.currentTarget = null
    }
    function Tp(r, s) {
        s = (s & 4) !== 0;
        for (var a = 0; a < r.length; a++) {
            var u = r[a]
              , f = u.event;
            u = u.listeners;
            e: {
                var g = void 0;
                if (s)
                    for (var x = u.length - 1; 0 <= x; x--) {
                        var b = u[x]
                          , _ = b.instance
                          , I = b.currentTarget;
                        if (b = b.listener,
                        _ !== g && f.isPropagationStopped())
                            break e;
                        Pp(f, b, I),
                        g = _
                    }
                else
                    for (x = 0; x < u.length; x++) {
                        if (b = u[x],
                        _ = b.instance,
                        I = b.currentTarget,
                        b = b.listener,
                        _ !== g && f.isPropagationStopped())
                            break e;
                        Pp(f, b, I),
                        g = _
                    }
            }
        }
        if (jo)
            throw r = lu,
            jo = !1,
            lu = null,
            r
    }
    function Ve(r, s) {
        var a = s[Vu];
        a === void 0 && (a = s[Vu] = new Set);
        var u = r + "__bubble";
        a.has(u) || (bp(s, r, 2, !1),
        a.add(u))
    }
    function Mu(r, s, a) {
        var u = 0;
        s && (u |= 4),
        bp(a, r, u, s)
    }
    var ea = "_reactListening" + Math.random().toString(36).slice(2);
    function Ti(r) {
        if (!r[ea]) {
            r[ea] = !0,
            i.forEach(function(a) {
                a !== "selectionchange" && (w1.has(a) || Mu(a, !1, r),
                Mu(a, !0, r))
            });
            var s = r.nodeType === 9 ? r : r.ownerDocument;
            s === null || s[ea] || (s[ea] = !0,
            Mu("selectionchange", !1, s))
        }
    }
    function bp(r, s, a, u) {
        switch (Kh(s)) {
        case 1:
            var f = OS;
            break;
        case 4:
            f = IS;
            break;
        default:
            f = mu
        }
        a = f.bind(null, s, a, r),
        f = void 0,
        !au || s !== "touchstart" && s !== "touchmove" && s !== "wheel" || (f = !0),
        u ? f !== void 0 ? r.addEventListener(s, a, {
            capture: !0,
            passive: f
        }) : r.addEventListener(s, a, !0) : f !== void 0 ? r.addEventListener(s, a, {
            passive: f
        }) : r.addEventListener(s, a, !1)
    }
    function Du(r, s, a, u, f) {
        var g = u;
        if ((s & 1) === 0 && (s & 2) === 0 && u !== null)
            e: for (; ; ) {
                if (u === null)
                    return;
                var x = u.tag;
                if (x === 3 || x === 4) {
                    var b = u.stateNode.containerInfo;
                    if (b === f || b.nodeType === 8 && b.parentNode === f)
                        break;
                    if (x === 4)
                        for (x = u.return; x !== null; ) {
                            var _ = x.tag;
                            if ((_ === 3 || _ === 4) && (_ = x.stateNode.containerInfo,
                            _ === f || _.nodeType === 8 && _.parentNode === f))
                                return;
                            x = x.return
                        }
                    for (; b !== null; ) {
                        if (x = Nr(b),
                        x === null)
                            return;
                        if (_ = x.tag,
                        _ === 5 || _ === 6) {
                            u = g = x;
                            continue e
                        }
                        b = b.parentNode
                    }
                }
                u = u.return
            }
        Ah(function() {
            var I = g
              , W = su(a)
              , H = [];
            e: {
                var U = wp.get(r);
                if (U !== void 0) {
                    var J = vu
                      , re = r;
                    switch (r) {
                    case "keypress":
                        if (qo(a) === 0)
                            break e;
                    case "keydown":
                    case "keyup":
                        J = GS;
                        break;
                    case "focusin":
                        re = "focus",
                        J = Su;
                        break;
                    case "focusout":
                        re = "blur",
                        J = Su;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        J = Su;
                        break;
                    case "click":
                        if (a.button === 2)
                            break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        J = Gh;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        J = FS;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        J = JS;
                        break;
                    case gp:
                    case yp:
                    case vp:
                        J = BS;
                        break;
                    case xp:
                        J = t1;
                        break;
                    case "scroll":
                        J = LS;
                        break;
                    case "wheel":
                        J = r1;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        J = $S;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        J = Yh
                    }
                    var se = (s & 4) !== 0
                      , Je = !se && r === "scroll"
                      , M = se ? U !== null ? U + "Capture" : null : U;
                    se = [];
                    for (var E = I, D; E !== null; ) {
                        D = E;
                        var q = D.stateNode;
                        if (D.tag === 5 && q !== null && (D = q,
                        M !== null && (q = ii(E, M),
                        q != null && se.push(bi(E, q, D)))),
                        Je)
                            break;
                        E = E.return
                    }
                    0 < se.length && (U = new J(U,re,null,a,W),
                    H.push({
                        event: U,
                        listeners: se
                    }))
                }
            }
            if ((s & 7) === 0) {
                e: {
                    if (U = r === "mouseover" || r === "pointerover",
                    J = r === "mouseout" || r === "pointerout",
                    U && a !== ru && (re = a.relatedTarget || a.fromElement) && (Nr(re) || re[On]))
                        break e;
                    if ((J || U) && (U = W.window === W ? W : (U = W.ownerDocument) ? U.defaultView || U.parentWindow : window,
                    J ? (re = a.relatedTarget || a.toElement,
                    J = I,
                    re = re ? Nr(re) : null,
                    re !== null && (Je = Rr(re),
                    re !== Je || re.tag !== 5 && re.tag !== 6) && (re = null)) : (J = null,
                    re = I),
                    J !== re)) {
                        if (se = Gh,
                        q = "onMouseLeave",
                        M = "onMouseEnter",
                        E = "mouse",
                        (r === "pointerout" || r === "pointerover") && (se = Yh,
                        q = "onPointerLeave",
                        M = "onPointerEnter",
                        E = "pointer"),
                        Je = J == null ? U : ps(J),
                        D = re == null ? U : ps(re),
                        U = new se(q,E + "leave",J,a,W),
                        U.target = Je,
                        U.relatedTarget = D,
                        q = null,
                        Nr(W) === I && (se = new se(M,E + "enter",re,a,W),
                        se.target = D,
                        se.relatedTarget = Je,
                        q = se),
                        Je = q,
                        J && re)
                            t: {
                                for (se = J,
                                M = re,
                                E = 0,
                                D = se; D; D = fs(D))
                                    E++;
                                for (D = 0,
                                q = M; q; q = fs(q))
                                    D++;
                                for (; 0 < E - D; )
                                    se = fs(se),
                                    E--;
                                for (; 0 < D - E; )
                                    M = fs(M),
                                    D--;
                                for (; E--; ) {
                                    if (se === M || M !== null && se === M.alternate)
                                        break t;
                                    se = fs(se),
                                    M = fs(M)
                                }
                                se = null
                            }
                        else
                            se = null;
                        J !== null && Cp(H, U, J, se, !1),
                        re !== null && Je !== null && Cp(H, Je, re, se, !0)
                    }
                }
                e: {
                    if (U = I ? ps(I) : window,
                    J = U.nodeName && U.nodeName.toLowerCase(),
                    J === "select" || J === "input" && U.type === "file")
                        var oe = c1;
                    else if (sp(U))
                        if (op)
                            oe = p1;
                        else {
                            oe = f1;
                            var ce = d1
                        }
                    else
                        (J = U.nodeName) && J.toLowerCase() === "input" && (U.type === "checkbox" || U.type === "radio") && (oe = h1);
                    if (oe && (oe = oe(r, I))) {
                        ip(H, oe, a, W);
                        break e
                    }
                    ce && ce(r, U, I),
                    r === "focusout" && (ce = U._wrapperState) && ce.controlled && U.type === "number" && Yl(U, "number", U.value)
                }
                switch (ce = I ? ps(I) : window,
                r) {
                case "focusin":
                    (sp(ce) || ce.contentEditable === "true") && (cs = ce,
                    Eu = I,
                    Si = null);
                    break;
                case "focusout":
                    Si = Eu = cs = null;
                    break;
                case "mousedown":
                    ku = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    ku = !1,
                    pp(H, a, W);
                    break;
                case "selectionchange":
                    if (y1)
                        break;
                case "keydown":
                case "keyup":
                    pp(H, a, W)
                }
                var de;
                if (Tu)
                    e: {
                        switch (r) {
                        case "compositionstart":
                            var ge = "onCompositionStart";
                            break e;
                        case "compositionend":
                            ge = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            ge = "onCompositionUpdate";
                            break e
                        }
                        ge = void 0
                    }
                else
                    us ? np(r, a) && (ge = "onCompositionEnd") : r === "keydown" && a.keyCode === 229 && (ge = "onCompositionStart");
                ge && (Jh && a.locale !== "ko" && (us || ge !== "onCompositionStart" ? ge === "onCompositionEnd" && us && (de = qh()) : (tr = W,
                yu = "value"in tr ? tr.value : tr.textContent,
                us = !0)),
                ce = ta(I, ge),
                0 < ce.length && (ge = new Xh(ge,r,null,a,W),
                H.push({
                    event: ge,
                    listeners: ce
                }),
                de ? ge.data = de : (de = rp(a),
                de !== null && (ge.data = de)))),
                (de = i1 ? o1(r, a) : a1(r, a)) && (I = ta(I, "onBeforeInput"),
                0 < I.length && (W = new Xh("onBeforeInput","beforeinput",null,a,W),
                H.push({
                    event: W,
                    listeners: I
                }),
                W.data = de))
            }
            Tp(H, s)
        })
    }
    function bi(r, s, a) {
        return {
            instance: r,
            listener: s,
            currentTarget: a
        }
    }
    function ta(r, s) {
        for (var a = s + "Capture", u = []; r !== null; ) {
            var f = r
              , g = f.stateNode;
            f.tag === 5 && g !== null && (f = g,
            g = ii(r, a),
            g != null && u.unshift(bi(r, g, f)),
            g = ii(r, s),
            g != null && u.push(bi(r, g, f))),
            r = r.return
        }
        return u
    }
    function fs(r) {
        if (r === null)
            return null;
        do
            r = r.return;
        while (r && r.tag !== 5);
        return r || null
    }
    function Cp(r, s, a, u, f) {
        for (var g = s._reactName, x = []; a !== null && a !== u; ) {
            var b = a
              , _ = b.alternate
              , I = b.stateNode;
            if (_ !== null && _ === u)
                break;
            b.tag === 5 && I !== null && (b = I,
            f ? (_ = ii(a, g),
            _ != null && x.unshift(bi(a, _, b))) : f || (_ = ii(a, g),
            _ != null && x.push(bi(a, _, b)))),
            a = a.return
        }
        x.length !== 0 && r.push({
            event: s,
            listeners: x
        })
    }
    var S1 = /\r\n?/g
      , P1 = /\u0000|\uFFFD/g;
    function _p(r) {
        return (typeof r == "string" ? r : "" + r).replace(S1, `
`).replace(P1, "")
    }
    function na(r, s, a) {
        if (s = _p(s),
        _p(r) !== s && a)
            throw Error(n(425))
    }
    function ra() {}
    var Ou = null
      , Iu = null;
    function Lu(r, s) {
        return r === "textarea" || r === "noscript" || typeof s.children == "string" || typeof s.children == "number" || typeof s.dangerouslySetInnerHTML == "object" && s.dangerouslySetInnerHTML !== null && s.dangerouslySetInnerHTML.__html != null
    }
    var ju = typeof setTimeout == "function" ? setTimeout : void 0
      , T1 = typeof clearTimeout == "function" ? clearTimeout : void 0
      , Ep = typeof Promise == "function" ? Promise : void 0
      , b1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ep < "u" ? function(r) {
        return Ep.resolve(null).then(r).catch(C1)
    }
    : ju;
    function C1(r) {
        setTimeout(function() {
            throw r
        })
    }
    function Fu(r, s) {
        var a = s
          , u = 0;
        do {
            var f = a.nextSibling;
            if (r.removeChild(a),
            f && f.nodeType === 8)
                if (a = f.data,
                a === "/$") {
                    if (u === 0) {
                        r.removeChild(f),
                        pi(s);
                        return
                    }
                    u--
                } else
                    a !== "$" && a !== "$?" && a !== "$!" || u++;
            a = f
        } while (a);
        pi(s)
    }
    function rr(r) {
        for (; r != null; r = r.nextSibling) {
            var s = r.nodeType;
            if (s === 1 || s === 3)
                break;
            if (s === 8) {
                if (s = r.data,
                s === "$" || s === "$!" || s === "$?")
                    break;
                if (s === "/$")
                    return null
            }
        }
        return r
    }
    function kp(r) {
        r = r.previousSibling;
        for (var s = 0; r; ) {
            if (r.nodeType === 8) {
                var a = r.data;
                if (a === "$" || a === "$!" || a === "$?") {
                    if (s === 0)
                        return r;
                    s--
                } else
                    a === "/$" && s++
            }
            r = r.previousSibling
        }
        return null
    }
    var hs = Math.random().toString(36).slice(2)
      , wn = "__reactFiber$" + hs
      , Ci = "__reactProps$" + hs
      , On = "__reactContainer$" + hs
      , Vu = "__reactEvents$" + hs
      , _1 = "__reactListeners$" + hs
      , E1 = "__reactHandles$" + hs;
    function Nr(r) {
        var s = r[wn];
        if (s)
            return s;
        for (var a = r.parentNode; a; ) {
            if (s = a[On] || a[wn]) {
                if (a = s.alternate,
                s.child !== null || a !== null && a.child !== null)
                    for (r = kp(r); r !== null; ) {
                        if (a = r[wn])
                            return a;
                        r = kp(r)
                    }
                return s
            }
            r = a,
            a = r.parentNode
        }
        return null
    }
    function _i(r) {
        return r = r[wn] || r[On],
        !r || r.tag !== 5 && r.tag !== 6 && r.tag !== 13 && r.tag !== 3 ? null : r
    }
    function ps(r) {
        if (r.tag === 5 || r.tag === 6)
            return r.stateNode;
        throw Error(n(33))
    }
    function sa(r) {
        return r[Ci] || null
    }
    var zu = []
      , ms = -1;
    function sr(r) {
        return {
            current: r
        }
    }
    function ze(r) {
        0 > ms || (r.current = zu[ms],
        zu[ms] = null,
        ms--)
    }
    function Fe(r, s) {
        ms++,
        zu[ms] = r.current,
        r.current = s
    }
    var ir = {}
      , gt = sr(ir)
      , Et = sr(!1)
      , Mr = ir;
    function gs(r, s) {
        var a = r.type.contextTypes;
        if (!a)
            return ir;
        var u = r.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === s)
            return u.__reactInternalMemoizedMaskedChildContext;
        var f = {}, g;
        for (g in a)
            f[g] = s[g];
        return u && (r = r.stateNode,
        r.__reactInternalMemoizedUnmaskedChildContext = s,
        r.__reactInternalMemoizedMaskedChildContext = f),
        f
    }
    function kt(r) {
        return r = r.childContextTypes,
        r != null
    }
    function ia() {
        ze(Et),
        ze(gt)
    }
    function Ap(r, s, a) {
        if (gt.current !== ir)
            throw Error(n(168));
        Fe(gt, s),
        Fe(Et, a)
    }
    function Rp(r, s, a) {
        var u = r.stateNode;
        if (s = s.childContextTypes,
        typeof u.getChildContext != "function")
            return a;
        u = u.getChildContext();
        for (var f in u)
            if (!(f in s))
                throw Error(n(108, Me(r) || "Unknown", f));
        return Z({}, a, u)
    }
    function oa(r) {
        return r = (r = r.stateNode) && r.__reactInternalMemoizedMergedChildContext || ir,
        Mr = gt.current,
        Fe(gt, r),
        Fe(Et, Et.current),
        !0
    }
    function Np(r, s, a) {
        var u = r.stateNode;
        if (!u)
            throw Error(n(169));
        a ? (r = Rp(r, s, Mr),
        u.__reactInternalMemoizedMergedChildContext = r,
        ze(Et),
        ze(gt),
        Fe(gt, r)) : ze(Et),
        Fe(Et, a)
    }
    var In = null
      , aa = !1
      , Bu = !1;
    function Mp(r) {
        In === null ? In = [r] : In.push(r)
    }
    function k1(r) {
        aa = !0,
        Mp(r)
    }
    function or() {
        if (!Bu && In !== null) {
            Bu = !0;
            var r = 0
              , s = Ie;
            try {
                var a = In;
                for (Ie = 1; r < a.length; r++) {
                    var u = a[r];
                    do
                        u = u(!0);
                    while (u !== null)
                }
                In = null,
                aa = !1
            } catch (f) {
                throw In !== null && (In = In.slice(r + 1)),
                Oh(uu, or),
                f
            } finally {
                Ie = s,
                Bu = !1
            }
        }
        return null
    }
    var ys = []
      , vs = 0
      , la = null
      , ua = 0
      , Kt = []
      , qt = 0
      , Dr = null
      , Ln = 1
      , jn = "";
    function Or(r, s) {
        ys[vs++] = ua,
        ys[vs++] = la,
        la = r,
        ua = s
    }
    function Dp(r, s, a) {
        Kt[qt++] = Ln,
        Kt[qt++] = jn,
        Kt[qt++] = Dr,
        Dr = r;
        var u = Ln;
        r = jn;
        var f = 32 - nn(u) - 1;
        u &= ~(1 << f),
        a += 1;
        var g = 32 - nn(s) + f;
        if (30 < g) {
            var x = f - f % 5;
            g = (u & (1 << x) - 1).toString(32),
            u >>= x,
            f -= x,
            Ln = 1 << 32 - nn(s) + f | a << f | u,
            jn = g + r
        } else
            Ln = 1 << g | a << f | u,
            jn = r
    }
    function Uu(r) {
        r.return !== null && (Or(r, 1),
        Dp(r, 1, 0))
    }
    function $u(r) {
        for (; r === la; )
            la = ys[--vs],
            ys[vs] = null,
            ua = ys[--vs],
            ys[vs] = null;
        for (; r === Dr; )
            Dr = Kt[--qt],
            Kt[qt] = null,
            jn = Kt[--qt],
            Kt[qt] = null,
            Ln = Kt[--qt],
            Kt[qt] = null
    }
    var jt = null
      , Ft = null
      , $e = !1
      , sn = null;
    function Op(r, s) {
        var a = Yt(5, null, null, 0);
        a.elementType = "DELETED",
        a.stateNode = s,
        a.return = r,
        s = r.deletions,
        s === null ? (r.deletions = [a],
        r.flags |= 16) : s.push(a)
    }
    function Ip(r, s) {
        switch (r.tag) {
        case 5:
            var a = r.type;
            return s = s.nodeType !== 1 || a.toLowerCase() !== s.nodeName.toLowerCase() ? null : s,
            s !== null ? (r.stateNode = s,
            jt = r,
            Ft = rr(s.firstChild),
            !0) : !1;
        case 6:
            return s = r.pendingProps === "" || s.nodeType !== 3 ? null : s,
            s !== null ? (r.stateNode = s,
            jt = r,
            Ft = null,
            !0) : !1;
        case 13:
            return s = s.nodeType !== 8 ? null : s,
            s !== null ? (a = Dr !== null ? {
                id: Ln,
                overflow: jn
            } : null,
            r.memoizedState = {
                dehydrated: s,
                treeContext: a,
                retryLane: 1073741824
            },
            a = Yt(18, null, null, 0),
            a.stateNode = s,
            a.return = r,
            r.child = a,
            jt = r,
            Ft = null,
            !0) : !1;
        default:
            return !1
        }
    }
    function Wu(r) {
        return (r.mode & 1) !== 0 && (r.flags & 128) === 0
    }
    function Hu(r) {
        if ($e) {
            var s = Ft;
            if (s) {
                var a = s;
                if (!Ip(r, s)) {
                    if (Wu(r))
                        throw Error(n(418));
                    s = rr(a.nextSibling);
                    var u = jt;
                    s && Ip(r, s) ? Op(u, a) : (r.flags = r.flags & -4097 | 2,
                    $e = !1,
                    jt = r)
                }
            } else {
                if (Wu(r))
                    throw Error(n(418));
                r.flags = r.flags & -4097 | 2,
                $e = !1,
                jt = r
            }
        }
    }
    function Lp(r) {
        for (r = r.return; r !== null && r.tag !== 5 && r.tag !== 3 && r.tag !== 13; )
            r = r.return;
        jt = r
    }
    function ca(r) {
        if (r !== jt)
            return !1;
        if (!$e)
            return Lp(r),
            $e = !0,
            !1;
        var s;
        if ((s = r.tag !== 3) && !(s = r.tag !== 5) && (s = r.type,
        s = s !== "head" && s !== "body" && !Lu(r.type, r.memoizedProps)),
        s && (s = Ft)) {
            if (Wu(r))
                throw jp(),
                Error(n(418));
            for (; s; )
                Op(r, s),
                s = rr(s.nextSibling)
        }
        if (Lp(r),
        r.tag === 13) {
            if (r = r.memoizedState,
            r = r !== null ? r.dehydrated : null,
            !r)
                throw Error(n(317));
            e: {
                for (r = r.nextSibling,
                s = 0; r; ) {
                    if (r.nodeType === 8) {
                        var a = r.data;
                        if (a === "/$") {
                            if (s === 0) {
                                Ft = rr(r.nextSibling);
                                break e
                            }
                            s--
                        } else
                            a !== "$" && a !== "$!" && a !== "$?" || s++
                    }
                    r = r.nextSibling
                }
                Ft = null
            }
        } else
            Ft = jt ? rr(r.stateNode.nextSibling) : null;
        return !0
    }
    function jp() {
        for (var r = Ft; r; )
            r = rr(r.nextSibling)
    }
    function xs() {
        Ft = jt = null,
        $e = !1
    }
    function Qu(r) {
        sn === null ? sn = [r] : sn.push(r)
    }
    var A1 = j.ReactCurrentBatchConfig;
    function Ei(r, s, a) {
        if (r = a.ref,
        r !== null && typeof r != "function" && typeof r != "object") {
            if (a._owner) {
                if (a = a._owner,
                a) {
                    if (a.tag !== 1)
                        throw Error(n(309));
                    var u = a.stateNode
                }
                if (!u)
                    throw Error(n(147, r));
                var f = u
                  , g = "" + r;
                return s !== null && s.ref !== null && typeof s.ref == "function" && s.ref._stringRef === g ? s.ref : (s = function(x) {
                    var b = f.refs;
                    x === null ? delete b[g] : b[g] = x
                }
                ,
                s._stringRef = g,
                s)
            }
            if (typeof r != "string")
                throw Error(n(284));
            if (!a._owner)
                throw Error(n(290, r))
        }
        return r
    }
    function da(r, s) {
        throw r = Object.prototype.toString.call(s),
        Error(n(31, r === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : r))
    }
    function Fp(r) {
        var s = r._init;
        return s(r._payload)
    }
    function Vp(r) {
        function s(M, E) {
            if (r) {
                var D = M.deletions;
                D === null ? (M.deletions = [E],
                M.flags |= 16) : D.push(E)
            }
        }
        function a(M, E) {
            if (!r)
                return null;
            for (; E !== null; )
                s(M, E),
                E = E.sibling;
            return null
        }
        function u(M, E) {
            for (M = new Map; E !== null; )
                E.key !== null ? M.set(E.key, E) : M.set(E.index, E),
                E = E.sibling;
            return M
        }
        function f(M, E) {
            return M = pr(M, E),
            M.index = 0,
            M.sibling = null,
            M
        }
        function g(M, E, D) {
            return M.index = D,
            r ? (D = M.alternate,
            D !== null ? (D = D.index,
            D < E ? (M.flags |= 2,
            E) : D) : (M.flags |= 2,
            E)) : (M.flags |= 1048576,
            E)
        }
        function x(M) {
            return r && M.alternate === null && (M.flags |= 2),
            M
        }
        function b(M, E, D, q) {
            return E === null || E.tag !== 6 ? (E = jc(D, M.mode, q),
            E.return = M,
            E) : (E = f(E, D),
            E.return = M,
            E)
        }
        function _(M, E, D, q) {
            var oe = D.type;
            return oe === z ? W(M, E, D.props.children, q, D.key) : E !== null && (E.elementType === oe || typeof oe == "object" && oe !== null && oe.$$typeof === he && Fp(oe) === E.type) ? (q = f(E, D.props),
            q.ref = Ei(M, E, D),
            q.return = M,
            q) : (q = Ia(D.type, D.key, D.props, null, M.mode, q),
            q.ref = Ei(M, E, D),
            q.return = M,
            q)
        }
        function I(M, E, D, q) {
            return E === null || E.tag !== 4 || E.stateNode.containerInfo !== D.containerInfo || E.stateNode.implementation !== D.implementation ? (E = Fc(D, M.mode, q),
            E.return = M,
            E) : (E = f(E, D.children || []),
            E.return = M,
            E)
        }
        function W(M, E, D, q, oe) {
            return E === null || E.tag !== 7 ? (E = Ur(D, M.mode, q, oe),
            E.return = M,
            E) : (E = f(E, D),
            E.return = M,
            E)
        }
        function H(M, E, D) {
            if (typeof E == "string" && E !== "" || typeof E == "number")
                return E = jc("" + E, M.mode, D),
                E.return = M,
                E;
            if (typeof E == "object" && E !== null) {
                switch (E.$$typeof) {
                case L:
                    return D = Ia(E.type, E.key, E.props, null, M.mode, D),
                    D.ref = Ei(M, null, E),
                    D.return = M,
                    D;
                case V:
                    return E = Fc(E, M.mode, D),
                    E.return = M,
                    E;
                case he:
                    var q = E._init;
                    return H(M, q(E._payload), D)
                }
                if (ni(E) || G(E))
                    return E = Ur(E, M.mode, D, null),
                    E.return = M,
                    E;
                da(M, E)
            }
            return null
        }
        function U(M, E, D, q) {
            var oe = E !== null ? E.key : null;
            if (typeof D == "string" && D !== "" || typeof D == "number")
                return oe !== null ? null : b(M, E, "" + D, q);
            if (typeof D == "object" && D !== null) {
                switch (D.$$typeof) {
                case L:
                    return D.key === oe ? _(M, E, D, q) : null;
                case V:
                    return D.key === oe ? I(M, E, D, q) : null;
                case he:
                    return oe = D._init,
                    U(M, E, oe(D._payload), q)
                }
                if (ni(D) || G(D))
                    return oe !== null ? null : W(M, E, D, q, null);
                da(M, D)
            }
            return null
        }
        function J(M, E, D, q, oe) {
            if (typeof q == "string" && q !== "" || typeof q == "number")
                return M = M.get(D) || null,
                b(E, M, "" + q, oe);
            if (typeof q == "object" && q !== null) {
                switch (q.$$typeof) {
                case L:
                    return M = M.get(q.key === null ? D : q.key) || null,
                    _(E, M, q, oe);
                case V:
                    return M = M.get(q.key === null ? D : q.key) || null,
                    I(E, M, q, oe);
                case he:
                    var ce = q._init;
                    return J(M, E, D, ce(q._payload), oe)
                }
                if (ni(q) || G(q))
                    return M = M.get(D) || null,
                    W(E, M, q, oe, null);
                da(E, q)
            }
            return null
        }
        function re(M, E, D, q) {
            for (var oe = null, ce = null, de = E, ge = E = 0, ut = null; de !== null && ge < D.length; ge++) {
                de.index > ge ? (ut = de,
                de = null) : ut = de.sibling;
                var Oe = U(M, de, D[ge], q);
                if (Oe === null) {
                    de === null && (de = ut);
                    break
                }
                r && de && Oe.alternate === null && s(M, de),
                E = g(Oe, E, ge),
                ce === null ? oe = Oe : ce.sibling = Oe,
                ce = Oe,
                de = ut
            }
            if (ge === D.length)
                return a(M, de),
                $e && Or(M, ge),
                oe;
            if (de === null) {
                for (; ge < D.length; ge++)
                    de = H(M, D[ge], q),
                    de !== null && (E = g(de, E, ge),
                    ce === null ? oe = de : ce.sibling = de,
                    ce = de);
                return $e && Or(M, ge),
                oe
            }
            for (de = u(M, de); ge < D.length; ge++)
                ut = J(de, M, ge, D[ge], q),
                ut !== null && (r && ut.alternate !== null && de.delete(ut.key === null ? ge : ut.key),
                E = g(ut, E, ge),
                ce === null ? oe = ut : ce.sibling = ut,
                ce = ut);
            return r && de.forEach(function(mr) {
                return s(M, mr)
            }),
            $e && Or(M, ge),
            oe
        }
        function se(M, E, D, q) {
            var oe = G(D);
            if (typeof oe != "function")
                throw Error(n(150));
            if (D = oe.call(D),
            D == null)
                throw Error(n(151));
            for (var ce = oe = null, de = E, ge = E = 0, ut = null, Oe = D.next(); de !== null && !Oe.done; ge++,
            Oe = D.next()) {
                de.index > ge ? (ut = de,
                de = null) : ut = de.sibling;
                var mr = U(M, de, Oe.value, q);
                if (mr === null) {
                    de === null && (de = ut);
                    break
                }
                r && de && mr.alternate === null && s(M, de),
                E = g(mr, E, ge),
                ce === null ? oe = mr : ce.sibling = mr,
                ce = mr,
                de = ut
            }
            if (Oe.done)
                return a(M, de),
                $e && Or(M, ge),
                oe;
            if (de === null) {
                for (; !Oe.done; ge++,
                Oe = D.next())
                    Oe = H(M, Oe.value, q),
                    Oe !== null && (E = g(Oe, E, ge),
                    ce === null ? oe = Oe : ce.sibling = Oe,
                    ce = Oe);
                return $e && Or(M, ge),
                oe
            }
            for (de = u(M, de); !Oe.done; ge++,
            Oe = D.next())
                Oe = J(de, M, ge, Oe.value, q),
                Oe !== null && (r && Oe.alternate !== null && de.delete(Oe.key === null ? ge : Oe.key),
                E = g(Oe, E, ge),
                ce === null ? oe = Oe : ce.sibling = Oe,
                ce = Oe);
            return r && de.forEach(function(lP) {
                return s(M, lP)
            }),
            $e && Or(M, ge),
            oe
        }
        function Je(M, E, D, q) {
            if (typeof D == "object" && D !== null && D.type === z && D.key === null && (D = D.props.children),
            typeof D == "object" && D !== null) {
                switch (D.$$typeof) {
                case L:
                    e: {
                        for (var oe = D.key, ce = E; ce !== null; ) {
                            if (ce.key === oe) {
                                if (oe = D.type,
                                oe === z) {
                                    if (ce.tag === 7) {
                                        a(M, ce.sibling),
                                        E = f(ce, D.props.children),
                                        E.return = M,
                                        M = E;
                                        break e
                                    }
                                } else if (ce.elementType === oe || typeof oe == "object" && oe !== null && oe.$$typeof === he && Fp(oe) === ce.type) {
                                    a(M, ce.sibling),
                                    E = f(ce, D.props),
                                    E.ref = Ei(M, ce, D),
                                    E.return = M,
                                    M = E;
                                    break e
                                }
                                a(M, ce);
                                break
                            } else
                                s(M, ce);
                            ce = ce.sibling
                        }
                        D.type === z ? (E = Ur(D.props.children, M.mode, q, D.key),
                        E.return = M,
                        M = E) : (q = Ia(D.type, D.key, D.props, null, M.mode, q),
                        q.ref = Ei(M, E, D),
                        q.return = M,
                        M = q)
                    }
                    return x(M);
                case V:
                    e: {
                        for (ce = D.key; E !== null; ) {
                            if (E.key === ce)
                                if (E.tag === 4 && E.stateNode.containerInfo === D.containerInfo && E.stateNode.implementation === D.implementation) {
                                    a(M, E.sibling),
                                    E = f(E, D.children || []),
                                    E.return = M,
                                    M = E;
                                    break e
                                } else {
                                    a(M, E);
                                    break
                                }
                            else
                                s(M, E);
                            E = E.sibling
                        }
                        E = Fc(D, M.mode, q),
                        E.return = M,
                        M = E
                    }
                    return x(M);
                case he:
                    return ce = D._init,
                    Je(M, E, ce(D._payload), q)
                }
                if (ni(D))
                    return re(M, E, D, q);
                if (G(D))
                    return se(M, E, D, q);
                da(M, D)
            }
            return typeof D == "string" && D !== "" || typeof D == "number" ? (D = "" + D,
            E !== null && E.tag === 6 ? (a(M, E.sibling),
            E = f(E, D),
            E.return = M,
            M = E) : (a(M, E),
            E = jc(D, M.mode, q),
            E.return = M,
            M = E),
            x(M)) : a(M, E)
        }
        return Je
    }
    var ws = Vp(!0)
      , zp = Vp(!1)
      , fa = sr(null)
      , ha = null
      , Ss = null
      , Ku = null;
    function qu() {
        Ku = Ss = ha = null
    }
    function Zu(r) {
        var s = fa.current;
        ze(fa),
        r._currentValue = s
    }
    function Gu(r, s, a) {
        for (; r !== null; ) {
            var u = r.alternate;
            if ((r.childLanes & s) !== s ? (r.childLanes |= s,
            u !== null && (u.childLanes |= s)) : u !== null && (u.childLanes & s) !== s && (u.childLanes |= s),
            r === a)
                break;
            r = r.return
        }
    }
    function Ps(r, s) {
        ha = r,
        Ku = Ss = null,
        r = r.dependencies,
        r !== null && r.firstContext !== null && ((r.lanes & s) !== 0 && (At = !0),
        r.firstContext = null)
    }
    function Zt(r) {
        var s = r._currentValue;
        if (Ku !== r)
            if (r = {
                context: r,
                memoizedValue: s,
                next: null
            },
            Ss === null) {
                if (ha === null)
                    throw Error(n(308));
                Ss = r,
                ha.dependencies = {
                    lanes: 0,
                    firstContext: r
                }
            } else
                Ss = Ss.next = r;
        return s
    }
    var Ir = null;
    function Xu(r) {
        Ir === null ? Ir = [r] : Ir.push(r)
    }
    function Bp(r, s, a, u) {
        var f = s.interleaved;
        return f === null ? (a.next = a,
        Xu(s)) : (a.next = f.next,
        f.next = a),
        s.interleaved = a,
        Fn(r, u)
    }
    function Fn(r, s) {
        r.lanes |= s;
        var a = r.alternate;
        for (a !== null && (a.lanes |= s),
        a = r,
        r = r.return; r !== null; )
            r.childLanes |= s,
            a = r.alternate,
            a !== null && (a.childLanes |= s),
            a = r,
            r = r.return;
        return a.tag === 3 ? a.stateNode : null
    }
    var ar = !1;
    function Yu(r) {
        r.updateQueue = {
            baseState: r.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                interleaved: null,
                lanes: 0
            },
            effects: null
        }
    }
    function Up(r, s) {
        r = r.updateQueue,
        s.updateQueue === r && (s.updateQueue = {
            baseState: r.baseState,
            firstBaseUpdate: r.firstBaseUpdate,
            lastBaseUpdate: r.lastBaseUpdate,
            shared: r.shared,
            effects: r.effects
        })
    }
    function Vn(r, s) {
        return {
            eventTime: r,
            lane: s,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }
    function lr(r, s, a) {
        var u = r.updateQueue;
        if (u === null)
            return null;
        if (u = u.shared,
        (Re & 2) !== 0) {
            var f = u.pending;
            return f === null ? s.next = s : (s.next = f.next,
            f.next = s),
            u.pending = s,
            Fn(r, a)
        }
        return f = u.interleaved,
        f === null ? (s.next = s,
        Xu(u)) : (s.next = f.next,
        f.next = s),
        u.interleaved = s,
        Fn(r, a)
    }
    function pa(r, s, a) {
        if (s = s.updateQueue,
        s !== null && (s = s.shared,
        (a & 4194240) !== 0)) {
            var u = s.lanes;
            u &= r.pendingLanes,
            a |= u,
            s.lanes = a,
            fu(r, a)
        }
    }
    function $p(r, s) {
        var a = r.updateQueue
          , u = r.alternate;
        if (u !== null && (u = u.updateQueue,
        a === u)) {
            var f = null
              , g = null;
            if (a = a.firstBaseUpdate,
            a !== null) {
                do {
                    var x = {
                        eventTime: a.eventTime,
                        lane: a.lane,
                        tag: a.tag,
                        payload: a.payload,
                        callback: a.callback,
                        next: null
                    };
                    g === null ? f = g = x : g = g.next = x,
                    a = a.next
                } while (a !== null);
                g === null ? f = g = s : g = g.next = s
            } else
                f = g = s;
            a = {
                baseState: u.baseState,
                firstBaseUpdate: f,
                lastBaseUpdate: g,
                shared: u.shared,
                effects: u.effects
            },
            r.updateQueue = a;
            return
        }
        r = a.lastBaseUpdate,
        r === null ? a.firstBaseUpdate = s : r.next = s,
        a.lastBaseUpdate = s
    }
    function ma(r, s, a, u) {
        var f = r.updateQueue;
        ar = !1;
        var g = f.firstBaseUpdate
          , x = f.lastBaseUpdate
          , b = f.shared.pending;
        if (b !== null) {
            f.shared.pending = null;
            var _ = b
              , I = _.next;
            _.next = null,
            x === null ? g = I : x.next = I,
            x = _;
            var W = r.alternate;
            W !== null && (W = W.updateQueue,
            b = W.lastBaseUpdate,
            b !== x && (b === null ? W.firstBaseUpdate = I : b.next = I,
            W.lastBaseUpdate = _))
        }
        if (g !== null) {
            var H = f.baseState;
            x = 0,
            W = I = _ = null,
            b = g;
            do {
                var U = b.lane
                  , J = b.eventTime;
                if ((u & U) === U) {
                    W !== null && (W = W.next = {
                        eventTime: J,
                        lane: 0,
                        tag: b.tag,
                        payload: b.payload,
                        callback: b.callback,
                        next: null
                    });
                    e: {
                        var re = r
                          , se = b;
                        switch (U = s,
                        J = a,
                        se.tag) {
                        case 1:
                            if (re = se.payload,
                            typeof re == "function") {
                                H = re.call(J, H, U);
                                break e
                            }
                            H = re;
                            break e;
                        case 3:
                            re.flags = re.flags & -65537 | 128;
                        case 0:
                            if (re = se.payload,
                            U = typeof re == "function" ? re.call(J, H, U) : re,
                            U == null)
                                break e;
                            H = Z({}, H, U);
                            break e;
                        case 2:
                            ar = !0
                        }
                    }
                    b.callback !== null && b.lane !== 0 && (r.flags |= 64,
                    U = f.effects,
                    U === null ? f.effects = [b] : U.push(b))
                } else
                    J = {
                        eventTime: J,
                        lane: U,
                        tag: b.tag,
                        payload: b.payload,
                        callback: b.callback,
                        next: null
                    },
                    W === null ? (I = W = J,
                    _ = H) : W = W.next = J,
                    x |= U;
                if (b = b.next,
                b === null) {
                    if (b = f.shared.pending,
                    b === null)
                        break;
                    U = b,
                    b = U.next,
                    U.next = null,
                    f.lastBaseUpdate = U,
                    f.shared.pending = null
                }
            } while (!0);
            if (W === null && (_ = H),
            f.baseState = _,
            f.firstBaseUpdate = I,
            f.lastBaseUpdate = W,
            s = f.shared.interleaved,
            s !== null) {
                f = s;
                do
                    x |= f.lane,
                    f = f.next;
                while (f !== s)
            } else
                g === null && (f.shared.lanes = 0);
            Fr |= x,
            r.lanes = x,
            r.memoizedState = H
        }
    }
    function Wp(r, s, a) {
        if (r = s.effects,
        s.effects = null,
        r !== null)
            for (s = 0; s < r.length; s++) {
                var u = r[s]
                  , f = u.callback;
                if (f !== null) {
                    if (u.callback = null,
                    u = a,
                    typeof f != "function")
                        throw Error(n(191, f));
                    f.call(u)
                }
            }
    }
    var ki = {}
      , Sn = sr(ki)
      , Ai = sr(ki)
      , Ri = sr(ki);
    function Lr(r) {
        if (r === ki)
            throw Error(n(174));
        return r
    }
    function Ju(r, s) {
        switch (Fe(Ri, s),
        Fe(Ai, r),
        Fe(Sn, ki),
        r = s.nodeType,
        r) {
        case 9:
        case 11:
            s = (s = s.documentElement) ? s.namespaceURI : eu(null, "");
            break;
        default:
            r = r === 8 ? s.parentNode : s,
            s = r.namespaceURI || null,
            r = r.tagName,
            s = eu(s, r)
        }
        ze(Sn),
        Fe(Sn, s)
    }
    function Ts() {
        ze(Sn),
        ze(Ai),
        ze(Ri)
    }
    function Hp(r) {
        Lr(Ri.current);
        var s = Lr(Sn.current)
          , a = eu(s, r.type);
        s !== a && (Fe(Ai, r),
        Fe(Sn, a))
    }
    function ec(r) {
        Ai.current === r && (ze(Sn),
        ze(Ai))
    }
    var We = sr(0);
    function ga(r) {
        for (var s = r; s !== null; ) {
            if (s.tag === 13) {
                var a = s.memoizedState;
                if (a !== null && (a = a.dehydrated,
                a === null || a.data === "$?" || a.data === "$!"))
                    return s
            } else if (s.tag === 19 && s.memoizedProps.revealOrder !== void 0) {
                if ((s.flags & 128) !== 0)
                    return s
            } else if (s.child !== null) {
                s.child.return = s,
                s = s.child;
                continue
            }
            if (s === r)
                break;
            for (; s.sibling === null; ) {
                if (s.return === null || s.return === r)
                    return null;
                s = s.return
            }
            s.sibling.return = s.return,
            s = s.sibling
        }
        return null
    }
    var tc = [];
    function nc() {
        for (var r = 0; r < tc.length; r++)
            tc[r]._workInProgressVersionPrimary = null;
        tc.length = 0
    }
    var ya = j.ReactCurrentDispatcher
      , rc = j.ReactCurrentBatchConfig
      , jr = 0
      , He = null
      , rt = null
      , at = null
      , va = !1
      , Ni = !1
      , Mi = 0
      , R1 = 0;
    function yt() {
        throw Error(n(321))
    }
    function sc(r, s) {
        if (s === null)
            return !1;
        for (var a = 0; a < s.length && a < r.length; a++)
            if (!rn(r[a], s[a]))
                return !1;
        return !0
    }
    function ic(r, s, a, u, f, g) {
        if (jr = g,
        He = s,
        s.memoizedState = null,
        s.updateQueue = null,
        s.lanes = 0,
        ya.current = r === null || r.memoizedState === null ? O1 : I1,
        r = a(u, f),
        Ni) {
            g = 0;
            do {
                if (Ni = !1,
                Mi = 0,
                25 <= g)
                    throw Error(n(301));
                g += 1,
                at = rt = null,
                s.updateQueue = null,
                ya.current = L1,
                r = a(u, f)
            } while (Ni)
        }
        if (ya.current = Sa,
        s = rt !== null && rt.next !== null,
        jr = 0,
        at = rt = He = null,
        va = !1,
        s)
            throw Error(n(300));
        return r
    }
    function oc() {
        var r = Mi !== 0;
        return Mi = 0,
        r
    }
    function Pn() {
        var r = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return at === null ? He.memoizedState = at = r : at = at.next = r,
        at
    }
    function Gt() {
        if (rt === null) {
            var r = He.alternate;
            r = r !== null ? r.memoizedState : null
        } else
            r = rt.next;
        var s = at === null ? He.memoizedState : at.next;
        if (s !== null)
            at = s,
            rt = r;
        else {
            if (r === null)
                throw Error(n(310));
            rt = r,
            r = {
                memoizedState: rt.memoizedState,
                baseState: rt.baseState,
                baseQueue: rt.baseQueue,
                queue: rt.queue,
                next: null
            },
            at === null ? He.memoizedState = at = r : at = at.next = r
        }
        return at
    }
    function Di(r, s) {
        return typeof s == "function" ? s(r) : s
    }
    function ac(r) {
        var s = Gt()
          , a = s.queue;
        if (a === null)
            throw Error(n(311));
        a.lastRenderedReducer = r;
        var u = rt
          , f = u.baseQueue
          , g = a.pending;
        if (g !== null) {
            if (f !== null) {
                var x = f.next;
                f.next = g.next,
                g.next = x
            }
            u.baseQueue = f = g,
            a.pending = null
        }
        if (f !== null) {
            g = f.next,
            u = u.baseState;
            var b = x = null
              , _ = null
              , I = g;
            do {
                var W = I.lane;
                if ((jr & W) === W)
                    _ !== null && (_ = _.next = {
                        lane: 0,
                        action: I.action,
                        hasEagerState: I.hasEagerState,
                        eagerState: I.eagerState,
                        next: null
                    }),
                    u = I.hasEagerState ? I.eagerState : r(u, I.action);
                else {
                    var H = {
                        lane: W,
                        action: I.action,
                        hasEagerState: I.hasEagerState,
                        eagerState: I.eagerState,
                        next: null
                    };
                    _ === null ? (b = _ = H,
                    x = u) : _ = _.next = H,
                    He.lanes |= W,
                    Fr |= W
                }
                I = I.next
            } while (I !== null && I !== g);
            _ === null ? x = u : _.next = b,
            rn(u, s.memoizedState) || (At = !0),
            s.memoizedState = u,
            s.baseState = x,
            s.baseQueue = _,
            a.lastRenderedState = u
        }
        if (r = a.interleaved,
        r !== null) {
            f = r;
            do
                g = f.lane,
                He.lanes |= g,
                Fr |= g,
                f = f.next;
            while (f !== r)
        } else
            f === null && (a.lanes = 0);
        return [s.memoizedState, a.dispatch]
    }
    function lc(r) {
        var s = Gt()
          , a = s.queue;
        if (a === null)
            throw Error(n(311));
        a.lastRenderedReducer = r;
        var u = a.dispatch
          , f = a.pending
          , g = s.memoizedState;
        if (f !== null) {
            a.pending = null;
            var x = f = f.next;
            do
                g = r(g, x.action),
                x = x.next;
            while (x !== f);
            rn(g, s.memoizedState) || (At = !0),
            s.memoizedState = g,
            s.baseQueue === null && (s.baseState = g),
            a.lastRenderedState = g
        }
        return [g, u]
    }
    function Qp() {}
    function Kp(r, s) {
        var a = He
          , u = Gt()
          , f = s()
          , g = !rn(u.memoizedState, f);
        if (g && (u.memoizedState = f,
        At = !0),
        u = u.queue,
        uc(Gp.bind(null, a, u, r), [r]),
        u.getSnapshot !== s || g || at !== null && at.memoizedState.tag & 1) {
            if (a.flags |= 2048,
            Oi(9, Zp.bind(null, a, u, f, s), void 0, null),
            lt === null)
                throw Error(n(349));
            (jr & 30) !== 0 || qp(a, s, f)
        }
        return f
    }
    function qp(r, s, a) {
        r.flags |= 16384,
        r = {
            getSnapshot: s,
            value: a
        },
        s = He.updateQueue,
        s === null ? (s = {
            lastEffect: null,
            stores: null
        },
        He.updateQueue = s,
        s.stores = [r]) : (a = s.stores,
        a === null ? s.stores = [r] : a.push(r))
    }
    function Zp(r, s, a, u) {
        s.value = a,
        s.getSnapshot = u,
        Xp(s) && Yp(r)
    }
    function Gp(r, s, a) {
        return a(function() {
            Xp(s) && Yp(r)
        })
    }
    function Xp(r) {
        var s = r.getSnapshot;
        r = r.value;
        try {
            var a = s();
            return !rn(r, a)
        } catch {
            return !0
        }
    }
    function Yp(r) {
        var s = Fn(r, 1);
        s !== null && un(s, r, 1, -1)
    }
    function Jp(r) {
        var s = Pn();
        return typeof r == "function" && (r = r()),
        s.memoizedState = s.baseState = r,
        r = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Di,
            lastRenderedState: r
        },
        s.queue = r,
        r = r.dispatch = D1.bind(null, He, r),
        [s.memoizedState, r]
    }
    function Oi(r, s, a, u) {
        return r = {
            tag: r,
            create: s,
            destroy: a,
            deps: u,
            next: null
        },
        s = He.updateQueue,
        s === null ? (s = {
            lastEffect: null,
            stores: null
        },
        He.updateQueue = s,
        s.lastEffect = r.next = r) : (a = s.lastEffect,
        a === null ? s.lastEffect = r.next = r : (u = a.next,
        a.next = r,
        r.next = u,
        s.lastEffect = r)),
        r
    }
    function em() {
        return Gt().memoizedState
    }
    function xa(r, s, a, u) {
        var f = Pn();
        He.flags |= r,
        f.memoizedState = Oi(1 | s, a, void 0, u === void 0 ? null : u)
    }
    function wa(r, s, a, u) {
        var f = Gt();
        u = u === void 0 ? null : u;
        var g = void 0;
        if (rt !== null) {
            var x = rt.memoizedState;
            if (g = x.destroy,
            u !== null && sc(u, x.deps)) {
                f.memoizedState = Oi(s, a, g, u);
                return
            }
        }
        He.flags |= r,
        f.memoizedState = Oi(1 | s, a, g, u)
    }
    function tm(r, s) {
        return xa(8390656, 8, r, s)
    }
    function uc(r, s) {
        return wa(2048, 8, r, s)
    }
    function nm(r, s) {
        return wa(4, 2, r, s)
    }
    function rm(r, s) {
        return wa(4, 4, r, s)
    }
    function sm(r, s) {
        if (typeof s == "function")
            return r = r(),
            s(r),
            function() {
                s(null)
            }
            ;
        if (s != null)
            return r = r(),
            s.current = r,
            function() {
                s.current = null
            }
    }
    function im(r, s, a) {
        return a = a != null ? a.concat([r]) : null,
        wa(4, 4, sm.bind(null, s, r), a)
    }
    function cc() {}
    function om(r, s) {
        var a = Gt();
        s = s === void 0 ? null : s;
        var u = a.memoizedState;
        return u !== null && s !== null && sc(s, u[1]) ? u[0] : (a.memoizedState = [r, s],
        r)
    }
    function am(r, s) {
        var a = Gt();
        s = s === void 0 ? null : s;
        var u = a.memoizedState;
        return u !== null && s !== null && sc(s, u[1]) ? u[0] : (r = r(),
        a.memoizedState = [r, s],
        r)
    }
    function lm(r, s, a) {
        return (jr & 21) === 0 ? (r.baseState && (r.baseState = !1,
        At = !0),
        r.memoizedState = a) : (rn(a, s) || (a = Fh(),
        He.lanes |= a,
        Fr |= a,
        r.baseState = !0),
        s)
    }
    function N1(r, s) {
        var a = Ie;
        Ie = a !== 0 && 4 > a ? a : 4,
        r(!0);
        var u = rc.transition;
        rc.transition = {};
        try {
            r(!1),
            s()
        } finally {
            Ie = a,
            rc.transition = u
        }
    }
    function um() {
        return Gt().memoizedState
    }
    function M1(r, s, a) {
        var u = fr(r);
        if (a = {
            lane: u,
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        cm(r))
            dm(s, a);
        else if (a = Bp(r, s, a, u),
        a !== null) {
            var f = Ct();
            un(a, r, u, f),
            fm(a, s, u)
        }
    }
    function D1(r, s, a) {
        var u = fr(r)
          , f = {
            lane: u,
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (cm(r))
            dm(s, f);
        else {
            var g = r.alternate;
            if (r.lanes === 0 && (g === null || g.lanes === 0) && (g = s.lastRenderedReducer,
            g !== null))
                try {
                    var x = s.lastRenderedState
                      , b = g(x, a);
                    if (f.hasEagerState = !0,
                    f.eagerState = b,
                    rn(b, x)) {
                        var _ = s.interleaved;
                        _ === null ? (f.next = f,
                        Xu(s)) : (f.next = _.next,
                        _.next = f),
                        s.interleaved = f;
                        return
                    }
                } catch {}
            a = Bp(r, s, f, u),
            a !== null && (f = Ct(),
            un(a, r, u, f),
            fm(a, s, u))
        }
    }
    function cm(r) {
        var s = r.alternate;
        return r === He || s !== null && s === He
    }
    function dm(r, s) {
        Ni = va = !0;
        var a = r.pending;
        a === null ? s.next = s : (s.next = a.next,
        a.next = s),
        r.pending = s
    }
    function fm(r, s, a) {
        if ((a & 4194240) !== 0) {
            var u = s.lanes;
            u &= r.pendingLanes,
            a |= u,
            s.lanes = a,
            fu(r, a)
        }
    }
    var Sa = {
        readContext: Zt,
        useCallback: yt,
        useContext: yt,
        useEffect: yt,
        useImperativeHandle: yt,
        useInsertionEffect: yt,
        useLayoutEffect: yt,
        useMemo: yt,
        useReducer: yt,
        useRef: yt,
        useState: yt,
        useDebugValue: yt,
        useDeferredValue: yt,
        useTransition: yt,
        useMutableSource: yt,
        useSyncExternalStore: yt,
        useId: yt,
        unstable_isNewReconciler: !1
    }
      , O1 = {
        readContext: Zt,
        useCallback: function(r, s) {
            return Pn().memoizedState = [r, s === void 0 ? null : s],
            r
        },
        useContext: Zt,
        useEffect: tm,
        useImperativeHandle: function(r, s, a) {
            return a = a != null ? a.concat([r]) : null,
            xa(4194308, 4, sm.bind(null, s, r), a)
        },
        useLayoutEffect: function(r, s) {
            return xa(4194308, 4, r, s)
        },
        useInsertionEffect: function(r, s) {
            return xa(4, 2, r, s)
        },
        useMemo: function(r, s) {
            var a = Pn();
            return s = s === void 0 ? null : s,
            r = r(),
            a.memoizedState = [r, s],
            r
        },
        useReducer: function(r, s, a) {
            var u = Pn();
            return s = a !== void 0 ? a(s) : s,
            u.memoizedState = u.baseState = s,
            r = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: r,
                lastRenderedState: s
            },
            u.queue = r,
            r = r.dispatch = M1.bind(null, He, r),
            [u.memoizedState, r]
        },
        useRef: function(r) {
            var s = Pn();
            return r = {
                current: r
            },
            s.memoizedState = r
        },
        useState: Jp,
        useDebugValue: cc,
        useDeferredValue: function(r) {
            return Pn().memoizedState = r
        },
        useTransition: function() {
            var r = Jp(!1)
              , s = r[0];
            return r = N1.bind(null, r[1]),
            Pn().memoizedState = r,
            [s, r]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(r, s, a) {
            var u = He
              , f = Pn();
            if ($e) {
                if (a === void 0)
                    throw Error(n(407));
                a = a()
            } else {
                if (a = s(),
                lt === null)
                    throw Error(n(349));
                (jr & 30) !== 0 || qp(u, s, a)
            }
            f.memoizedState = a;
            var g = {
                value: a,
                getSnapshot: s
            };
            return f.queue = g,
            tm(Gp.bind(null, u, g, r), [r]),
            u.flags |= 2048,
            Oi(9, Zp.bind(null, u, g, a, s), void 0, null),
            a
        },
        useId: function() {
            var r = Pn()
              , s = lt.identifierPrefix;
            if ($e) {
                var a = jn
                  , u = Ln;
                a = (u & ~(1 << 32 - nn(u) - 1)).toString(32) + a,
                s = ":" + s + "R" + a,
                a = Mi++,
                0 < a && (s += "H" + a.toString(32)),
                s += ":"
            } else
                a = R1++,
                s = ":" + s + "r" + a.toString(32) + ":";
            return r.memoizedState = s
        },
        unstable_isNewReconciler: !1
    }
      , I1 = {
        readContext: Zt,
        useCallback: om,
        useContext: Zt,
        useEffect: uc,
        useImperativeHandle: im,
        useInsertionEffect: nm,
        useLayoutEffect: rm,
        useMemo: am,
        useReducer: ac,
        useRef: em,
        useState: function() {
            return ac(Di)
        },
        useDebugValue: cc,
        useDeferredValue: function(r) {
            var s = Gt();
            return lm(s, rt.memoizedState, r)
        },
        useTransition: function() {
            var r = ac(Di)[0]
              , s = Gt().memoizedState;
            return [r, s]
        },
        useMutableSource: Qp,
        useSyncExternalStore: Kp,
        useId: um,
        unstable_isNewReconciler: !1
    }
      , L1 = {
        readContext: Zt,
        useCallback: om,
        useContext: Zt,
        useEffect: uc,
        useImperativeHandle: im,
        useInsertionEffect: nm,
        useLayoutEffect: rm,
        useMemo: am,
        useReducer: lc,
        useRef: em,
        useState: function() {
            return lc(Di)
        },
        useDebugValue: cc,
        useDeferredValue: function(r) {
            var s = Gt();
            return rt === null ? s.memoizedState = r : lm(s, rt.memoizedState, r)
        },
        useTransition: function() {
            var r = lc(Di)[0]
              , s = Gt().memoizedState;
            return [r, s]
        },
        useMutableSource: Qp,
        useSyncExternalStore: Kp,
        useId: um,
        unstable_isNewReconciler: !1
    };
    function on(r, s) {
        if (r && r.defaultProps) {
            s = Z({}, s),
            r = r.defaultProps;
            for (var a in r)
                s[a] === void 0 && (s[a] = r[a]);
            return s
        }
        return s
    }
    function dc(r, s, a, u) {
        s = r.memoizedState,
        a = a(u, s),
        a = a == null ? s : Z({}, s, a),
        r.memoizedState = a,
        r.lanes === 0 && (r.updateQueue.baseState = a)
    }
    var Pa = {
        isMounted: function(r) {
            return (r = r._reactInternals) ? Rr(r) === r : !1
        },
        enqueueSetState: function(r, s, a) {
            r = r._reactInternals;
            var u = Ct()
              , f = fr(r)
              , g = Vn(u, f);
            g.payload = s,
            a != null && (g.callback = a),
            s = lr(r, g, f),
            s !== null && (un(s, r, f, u),
            pa(s, r, f))
        },
        enqueueReplaceState: function(r, s, a) {
            r = r._reactInternals;
            var u = Ct()
              , f = fr(r)
              , g = Vn(u, f);
            g.tag = 1,
            g.payload = s,
            a != null && (g.callback = a),
            s = lr(r, g, f),
            s !== null && (un(s, r, f, u),
            pa(s, r, f))
        },
        enqueueForceUpdate: function(r, s) {
            r = r._reactInternals;
            var a = Ct()
              , u = fr(r)
              , f = Vn(a, u);
            f.tag = 2,
            s != null && (f.callback = s),
            s = lr(r, f, u),
            s !== null && (un(s, r, u, a),
            pa(s, r, u))
        }
    };
    function hm(r, s, a, u, f, g, x) {
        return r = r.stateNode,
        typeof r.shouldComponentUpdate == "function" ? r.shouldComponentUpdate(u, g, x) : s.prototype && s.prototype.isPureReactComponent ? !wi(a, u) || !wi(f, g) : !0
    }
    function pm(r, s, a) {
        var u = !1
          , f = ir
          , g = s.contextType;
        return typeof g == "object" && g !== null ? g = Zt(g) : (f = kt(s) ? Mr : gt.current,
        u = s.contextTypes,
        g = (u = u != null) ? gs(r, f) : ir),
        s = new s(a,g),
        r.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null,
        s.updater = Pa,
        r.stateNode = s,
        s._reactInternals = r,
        u && (r = r.stateNode,
        r.__reactInternalMemoizedUnmaskedChildContext = f,
        r.__reactInternalMemoizedMaskedChildContext = g),
        s
    }
    function mm(r, s, a, u) {
        r = s.state,
        typeof s.componentWillReceiveProps == "function" && s.componentWillReceiveProps(a, u),
        typeof s.UNSAFE_componentWillReceiveProps == "function" && s.UNSAFE_componentWillReceiveProps(a, u),
        s.state !== r && Pa.enqueueReplaceState(s, s.state, null)
    }
    function fc(r, s, a, u) {
        var f = r.stateNode;
        f.props = a,
        f.state = r.memoizedState,
        f.refs = {},
        Yu(r);
        var g = s.contextType;
        typeof g == "object" && g !== null ? f.context = Zt(g) : (g = kt(s) ? Mr : gt.current,
        f.context = gs(r, g)),
        f.state = r.memoizedState,
        g = s.getDerivedStateFromProps,
        typeof g == "function" && (dc(r, s, g, a),
        f.state = r.memoizedState),
        typeof s.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (s = f.state,
        typeof f.componentWillMount == "function" && f.componentWillMount(),
        typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(),
        s !== f.state && Pa.enqueueReplaceState(f, f.state, null),
        ma(r, a, f, u),
        f.state = r.memoizedState),
        typeof f.componentDidMount == "function" && (r.flags |= 4194308)
    }
    function bs(r, s) {
        try {
            var a = ""
              , u = s;
            do
                a += Ee(u),
                u = u.return;
            while (u);
            var f = a
        } catch (g) {
            f = `
Error generating stack: ` + g.message + `
` + g.stack
        }
        return {
            value: r,
            source: s,
            stack: f,
            digest: null
        }
    }
    function hc(r, s, a) {
        return {
            value: r,
            source: null,
            stack: a ?? null,
            digest: s ?? null
        }
    }
    function pc(r, s) {
        try {
            console.error(s.value)
        } catch (a) {
            setTimeout(function() {
                throw a
            })
        }
    }
    var j1 = typeof WeakMap == "function" ? WeakMap : Map;
    function gm(r, s, a) {
        a = Vn(-1, a),
        a.tag = 3,
        a.payload = {
            element: null
        };
        var u = s.value;
        return a.callback = function() {
            Aa || (Aa = !0,
            Ac = u),
            pc(r, s)
        }
        ,
        a
    }
    function ym(r, s, a) {
        a = Vn(-1, a),
        a.tag = 3;
        var u = r.type.getDerivedStateFromError;
        if (typeof u == "function") {
            var f = s.value;
            a.payload = function() {
                return u(f)
            }
            ,
            a.callback = function() {
                pc(r, s)
            }
        }
        var g = r.stateNode;
        return g !== null && typeof g.componentDidCatch == "function" && (a.callback = function() {
            pc(r, s),
            typeof u != "function" && (cr === null ? cr = new Set([this]) : cr.add(this));
            var x = s.stack;
            this.componentDidCatch(s.value, {
                componentStack: x !== null ? x : ""
            })
        }
        ),
        a
    }
    function vm(r, s, a) {
        var u = r.pingCache;
        if (u === null) {
            u = r.pingCache = new j1;
            var f = new Set;
            u.set(s, f)
        } else
            f = u.get(s),
            f === void 0 && (f = new Set,
            u.set(s, f));
        f.has(a) || (f.add(a),
        r = X1.bind(null, r, s, a),
        s.then(r, r))
    }
    function xm(r) {
        do {
            var s;
            if ((s = r.tag === 13) && (s = r.memoizedState,
            s = s !== null ? s.dehydrated !== null : !0),
            s)
                return r;
            r = r.return
        } while (r !== null);
        return null
    }
    function wm(r, s, a, u, f) {
        return (r.mode & 1) === 0 ? (r === s ? r.flags |= 65536 : (r.flags |= 128,
        a.flags |= 131072,
        a.flags &= -52805,
        a.tag === 1 && (a.alternate === null ? a.tag = 17 : (s = Vn(-1, 1),
        s.tag = 2,
        lr(a, s, 1))),
        a.lanes |= 1),
        r) : (r.flags |= 65536,
        r.lanes = f,
        r)
    }
    var F1 = j.ReactCurrentOwner
      , At = !1;
    function bt(r, s, a, u) {
        s.child = r === null ? zp(s, null, a, u) : ws(s, r.child, a, u)
    }
    function Sm(r, s, a, u, f) {
        a = a.render;
        var g = s.ref;
        return Ps(s, f),
        u = ic(r, s, a, u, g, f),
        a = oc(),
        r !== null && !At ? (s.updateQueue = r.updateQueue,
        s.flags &= -2053,
        r.lanes &= ~f,
        zn(r, s, f)) : ($e && a && Uu(s),
        s.flags |= 1,
        bt(r, s, u, f),
        s.child)
    }
    function Pm(r, s, a, u, f) {
        if (r === null) {
            var g = a.type;
            return typeof g == "function" && !Lc(g) && g.defaultProps === void 0 && a.compare === null && a.defaultProps === void 0 ? (s.tag = 15,
            s.type = g,
            Tm(r, s, g, u, f)) : (r = Ia(a.type, null, u, s, s.mode, f),
            r.ref = s.ref,
            r.return = s,
            s.child = r)
        }
        if (g = r.child,
        (r.lanes & f) === 0) {
            var x = g.memoizedProps;
            if (a = a.compare,
            a = a !== null ? a : wi,
            a(x, u) && r.ref === s.ref)
                return zn(r, s, f)
        }
        return s.flags |= 1,
        r = pr(g, u),
        r.ref = s.ref,
        r.return = s,
        s.child = r
    }
    function Tm(r, s, a, u, f) {
        if (r !== null) {
            var g = r.memoizedProps;
            if (wi(g, u) && r.ref === s.ref)
                if (At = !1,
                s.pendingProps = u = g,
                (r.lanes & f) !== 0)
                    (r.flags & 131072) !== 0 && (At = !0);
                else
                    return s.lanes = r.lanes,
                    zn(r, s, f)
        }
        return mc(r, s, a, u, f)
    }
    function bm(r, s, a) {
        var u = s.pendingProps
          , f = u.children
          , g = r !== null ? r.memoizedState : null;
        if (u.mode === "hidden")
            if ((s.mode & 1) === 0)
                s.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                },
                Fe(_s, Vt),
                Vt |= a;
            else {
                if ((a & 1073741824) === 0)
                    return r = g !== null ? g.baseLanes | a : a,
                    s.lanes = s.childLanes = 1073741824,
                    s.memoizedState = {
                        baseLanes: r,
                        cachePool: null,
                        transitions: null
                    },
                    s.updateQueue = null,
                    Fe(_s, Vt),
                    Vt |= r,
                    null;
                s.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                },
                u = g !== null ? g.baseLanes : a,
                Fe(_s, Vt),
                Vt |= u
            }
        else
            g !== null ? (u = g.baseLanes | a,
            s.memoizedState = null) : u = a,
            Fe(_s, Vt),
            Vt |= u;
        return bt(r, s, f, a),
        s.child
    }
    function Cm(r, s) {
        var a = s.ref;
        (r === null && a !== null || r !== null && r.ref !== a) && (s.flags |= 512,
        s.flags |= 2097152)
    }
    function mc(r, s, a, u, f) {
        var g = kt(a) ? Mr : gt.current;
        return g = gs(s, g),
        Ps(s, f),
        a = ic(r, s, a, u, g, f),
        u = oc(),
        r !== null && !At ? (s.updateQueue = r.updateQueue,
        s.flags &= -2053,
        r.lanes &= ~f,
        zn(r, s, f)) : ($e && u && Uu(s),
        s.flags |= 1,
        bt(r, s, a, f),
        s.child)
    }
    function _m(r, s, a, u, f) {
        if (kt(a)) {
            var g = !0;
            oa(s)
        } else
            g = !1;
        if (Ps(s, f),
        s.stateNode === null)
            ba(r, s),
            pm(s, a, u),
            fc(s, a, u, f),
            u = !0;
        else if (r === null) {
            var x = s.stateNode
              , b = s.memoizedProps;
            x.props = b;
            var _ = x.context
              , I = a.contextType;
            typeof I == "object" && I !== null ? I = Zt(I) : (I = kt(a) ? Mr : gt.current,
            I = gs(s, I));
            var W = a.getDerivedStateFromProps
              , H = typeof W == "function" || typeof x.getSnapshotBeforeUpdate == "function";
            H || typeof x.UNSAFE_componentWillReceiveProps != "function" && typeof x.componentWillReceiveProps != "function" || (b !== u || _ !== I) && mm(s, x, u, I),
            ar = !1;
            var U = s.memoizedState;
            x.state = U,
            ma(s, u, x, f),
            _ = s.memoizedState,
            b !== u || U !== _ || Et.current || ar ? (typeof W == "function" && (dc(s, a, W, u),
            _ = s.memoizedState),
            (b = ar || hm(s, a, b, u, U, _, I)) ? (H || typeof x.UNSAFE_componentWillMount != "function" && typeof x.componentWillMount != "function" || (typeof x.componentWillMount == "function" && x.componentWillMount(),
            typeof x.UNSAFE_componentWillMount == "function" && x.UNSAFE_componentWillMount()),
            typeof x.componentDidMount == "function" && (s.flags |= 4194308)) : (typeof x.componentDidMount == "function" && (s.flags |= 4194308),
            s.memoizedProps = u,
            s.memoizedState = _),
            x.props = u,
            x.state = _,
            x.context = I,
            u = b) : (typeof x.componentDidMount == "function" && (s.flags |= 4194308),
            u = !1)
        } else {
            x = s.stateNode,
            Up(r, s),
            b = s.memoizedProps,
            I = s.type === s.elementType ? b : on(s.type, b),
            x.props = I,
            H = s.pendingProps,
            U = x.context,
            _ = a.contextType,
            typeof _ == "object" && _ !== null ? _ = Zt(_) : (_ = kt(a) ? Mr : gt.current,
            _ = gs(s, _));
            var J = a.getDerivedStateFromProps;
            (W = typeof J == "function" || typeof x.getSnapshotBeforeUpdate == "function") || typeof x.UNSAFE_componentWillReceiveProps != "function" && typeof x.componentWillReceiveProps != "function" || (b !== H || U !== _) && mm(s, x, u, _),
            ar = !1,
            U = s.memoizedState,
            x.state = U,
            ma(s, u, x, f);
            var re = s.memoizedState;
            b !== H || U !== re || Et.current || ar ? (typeof J == "function" && (dc(s, a, J, u),
            re = s.memoizedState),
            (I = ar || hm(s, a, I, u, U, re, _) || !1) ? (W || typeof x.UNSAFE_componentWillUpdate != "function" && typeof x.componentWillUpdate != "function" || (typeof x.componentWillUpdate == "function" && x.componentWillUpdate(u, re, _),
            typeof x.UNSAFE_componentWillUpdate == "function" && x.UNSAFE_componentWillUpdate(u, re, _)),
            typeof x.componentDidUpdate == "function" && (s.flags |= 4),
            typeof x.getSnapshotBeforeUpdate == "function" && (s.flags |= 1024)) : (typeof x.componentDidUpdate != "function" || b === r.memoizedProps && U === r.memoizedState || (s.flags |= 4),
            typeof x.getSnapshotBeforeUpdate != "function" || b === r.memoizedProps && U === r.memoizedState || (s.flags |= 1024),
            s.memoizedProps = u,
            s.memoizedState = re),
            x.props = u,
            x.state = re,
            x.context = _,
            u = I) : (typeof x.componentDidUpdate != "function" || b === r.memoizedProps && U === r.memoizedState || (s.flags |= 4),
            typeof x.getSnapshotBeforeUpdate != "function" || b === r.memoizedProps && U === r.memoizedState || (s.flags |= 1024),
            u = !1)
        }
        return gc(r, s, a, u, g, f)
    }
    function gc(r, s, a, u, f, g) {
        Cm(r, s);
        var x = (s.flags & 128) !== 0;
        if (!u && !x)
            return f && Np(s, a, !1),
            zn(r, s, g);
        u = s.stateNode,
        F1.current = s;
        var b = x && typeof a.getDerivedStateFromError != "function" ? null : u.render();
        return s.flags |= 1,
        r !== null && x ? (s.child = ws(s, r.child, null, g),
        s.child = ws(s, null, b, g)) : bt(r, s, b, g),
        s.memoizedState = u.state,
        f && Np(s, a, !0),
        s.child
    }
    function Em(r) {
        var s = r.stateNode;
        s.pendingContext ? Ap(r, s.pendingContext, s.pendingContext !== s.context) : s.context && Ap(r, s.context, !1),
        Ju(r, s.containerInfo)
    }
    function km(r, s, a, u, f) {
        return xs(),
        Qu(f),
        s.flags |= 256,
        bt(r, s, a, u),
        s.child
    }
    var yc = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0
    };
    function vc(r) {
        return {
            baseLanes: r,
            cachePool: null,
            transitions: null
        }
    }
    function Am(r, s, a) {
        var u = s.pendingProps, f = We.current, g = !1, x = (s.flags & 128) !== 0, b;
        if ((b = x) || (b = r !== null && r.memoizedState === null ? !1 : (f & 2) !== 0),
        b ? (g = !0,
        s.flags &= -129) : (r === null || r.memoizedState !== null) && (f |= 1),
        Fe(We, f & 1),
        r === null)
            return Hu(s),
            r = s.memoizedState,
            r !== null && (r = r.dehydrated,
            r !== null) ? ((s.mode & 1) === 0 ? s.lanes = 1 : r.data === "$!" ? s.lanes = 8 : s.lanes = 1073741824,
            null) : (x = u.children,
            r = u.fallback,
            g ? (u = s.mode,
            g = s.child,
            x = {
                mode: "hidden",
                children: x
            },
            (u & 1) === 0 && g !== null ? (g.childLanes = 0,
            g.pendingProps = x) : g = La(x, u, 0, null),
            r = Ur(r, u, a, null),
            g.return = s,
            r.return = s,
            g.sibling = r,
            s.child = g,
            s.child.memoizedState = vc(a),
            s.memoizedState = yc,
            r) : xc(s, x));
        if (f = r.memoizedState,
        f !== null && (b = f.dehydrated,
        b !== null))
            return V1(r, s, x, u, b, f, a);
        if (g) {
            g = u.fallback,
            x = s.mode,
            f = r.child,
            b = f.sibling;
            var _ = {
                mode: "hidden",
                children: u.children
            };
            return (x & 1) === 0 && s.child !== f ? (u = s.child,
            u.childLanes = 0,
            u.pendingProps = _,
            s.deletions = null) : (u = pr(f, _),
            u.subtreeFlags = f.subtreeFlags & 14680064),
            b !== null ? g = pr(b, g) : (g = Ur(g, x, a, null),
            g.flags |= 2),
            g.return = s,
            u.return = s,
            u.sibling = g,
            s.child = u,
            u = g,
            g = s.child,
            x = r.child.memoizedState,
            x = x === null ? vc(a) : {
                baseLanes: x.baseLanes | a,
                cachePool: null,
                transitions: x.transitions
            },
            g.memoizedState = x,
            g.childLanes = r.childLanes & ~a,
            s.memoizedState = yc,
            u
        }
        return g = r.child,
        r = g.sibling,
        u = pr(g, {
            mode: "visible",
            children: u.children
        }),
        (s.mode & 1) === 0 && (u.lanes = a),
        u.return = s,
        u.sibling = null,
        r !== null && (a = s.deletions,
        a === null ? (s.deletions = [r],
        s.flags |= 16) : a.push(r)),
        s.child = u,
        s.memoizedState = null,
        u
    }
    function xc(r, s) {
        return s = La({
            mode: "visible",
            children: s
        }, r.mode, 0, null),
        s.return = r,
        r.child = s
    }
    function Ta(r, s, a, u) {
        return u !== null && Qu(u),
        ws(s, r.child, null, a),
        r = xc(s, s.pendingProps.children),
        r.flags |= 2,
        s.memoizedState = null,
        r
    }
    function V1(r, s, a, u, f, g, x) {
        if (a)
            return s.flags & 256 ? (s.flags &= -257,
            u = hc(Error(n(422))),
            Ta(r, s, x, u)) : s.memoizedState !== null ? (s.child = r.child,
            s.flags |= 128,
            null) : (g = u.fallback,
            f = s.mode,
            u = La({
                mode: "visible",
                children: u.children
            }, f, 0, null),
            g = Ur(g, f, x, null),
            g.flags |= 2,
            u.return = s,
            g.return = s,
            u.sibling = g,
            s.child = u,
            (s.mode & 1) !== 0 && ws(s, r.child, null, x),
            s.child.memoizedState = vc(x),
            s.memoizedState = yc,
            g);
        if ((s.mode & 1) === 0)
            return Ta(r, s, x, null);
        if (f.data === "$!") {
            if (u = f.nextSibling && f.nextSibling.dataset,
            u)
                var b = u.dgst;
            return u = b,
            g = Error(n(419)),
            u = hc(g, u, void 0),
            Ta(r, s, x, u)
        }
        if (b = (x & r.childLanes) !== 0,
        At || b) {
            if (u = lt,
            u !== null) {
                switch (x & -x) {
                case 4:
                    f = 2;
                    break;
                case 16:
                    f = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    f = 32;
                    break;
                case 536870912:
                    f = 268435456;
                    break;
                default:
                    f = 0
                }
                f = (f & (u.suspendedLanes | x)) !== 0 ? 0 : f,
                f !== 0 && f !== g.retryLane && (g.retryLane = f,
                Fn(r, f),
                un(u, r, f, -1))
            }
            return Ic(),
            u = hc(Error(n(421))),
            Ta(r, s, x, u)
        }
        return f.data === "$?" ? (s.flags |= 128,
        s.child = r.child,
        s = Y1.bind(null, r),
        f._reactRetry = s,
        null) : (r = g.treeContext,
        Ft = rr(f.nextSibling),
        jt = s,
        $e = !0,
        sn = null,
        r !== null && (Kt[qt++] = Ln,
        Kt[qt++] = jn,
        Kt[qt++] = Dr,
        Ln = r.id,
        jn = r.overflow,
        Dr = s),
        s = xc(s, u.children),
        s.flags |= 4096,
        s)
    }
    function Rm(r, s, a) {
        r.lanes |= s;
        var u = r.alternate;
        u !== null && (u.lanes |= s),
        Gu(r.return, s, a)
    }
    function wc(r, s, a, u, f) {
        var g = r.memoizedState;
        g === null ? r.memoizedState = {
            isBackwards: s,
            rendering: null,
            renderingStartTime: 0,
            last: u,
            tail: a,
            tailMode: f
        } : (g.isBackwards = s,
        g.rendering = null,
        g.renderingStartTime = 0,
        g.last = u,
        g.tail = a,
        g.tailMode = f)
    }
    function Nm(r, s, a) {
        var u = s.pendingProps
          , f = u.revealOrder
          , g = u.tail;
        if (bt(r, s, u.children, a),
        u = We.current,
        (u & 2) !== 0)
            u = u & 1 | 2,
            s.flags |= 128;
        else {
            if (r !== null && (r.flags & 128) !== 0)
                e: for (r = s.child; r !== null; ) {
                    if (r.tag === 13)
                        r.memoizedState !== null && Rm(r, a, s);
                    else if (r.tag === 19)
                        Rm(r, a, s);
                    else if (r.child !== null) {
                        r.child.return = r,
                        r = r.child;
                        continue
                    }
                    if (r === s)
                        break e;
                    for (; r.sibling === null; ) {
                        if (r.return === null || r.return === s)
                            break e;
                        r = r.return
                    }
                    r.sibling.return = r.return,
                    r = r.sibling
                }
            u &= 1
        }
        if (Fe(We, u),
        (s.mode & 1) === 0)
            s.memoizedState = null;
        else
            switch (f) {
            case "forwards":
                for (a = s.child,
                f = null; a !== null; )
                    r = a.alternate,
                    r !== null && ga(r) === null && (f = a),
                    a = a.sibling;
                a = f,
                a === null ? (f = s.child,
                s.child = null) : (f = a.sibling,
                a.sibling = null),
                wc(s, !1, f, a, g);
                break;
            case "backwards":
                for (a = null,
                f = s.child,
                s.child = null; f !== null; ) {
                    if (r = f.alternate,
                    r !== null && ga(r) === null) {
                        s.child = f;
                        break
                    }
                    r = f.sibling,
                    f.sibling = a,
                    a = f,
                    f = r
                }
                wc(s, !0, a, null, g);
                break;
            case "together":
                wc(s, !1, null, null, void 0);
                break;
            default:
                s.memoizedState = null
            }
        return s.child
    }
    function ba(r, s) {
        (s.mode & 1) === 0 && r !== null && (r.alternate = null,
        s.alternate = null,
        s.flags |= 2)
    }
    function zn(r, s, a) {
        if (r !== null && (s.dependencies = r.dependencies),
        Fr |= s.lanes,
        (a & s.childLanes) === 0)
            return null;
        if (r !== null && s.child !== r.child)
            throw Error(n(153));
        if (s.child !== null) {
            for (r = s.child,
            a = pr(r, r.pendingProps),
            s.child = a,
            a.return = s; r.sibling !== null; )
                r = r.sibling,
                a = a.sibling = pr(r, r.pendingProps),
                a.return = s;
            a.sibling = null
        }
        return s.child
    }
    function z1(r, s, a) {
        switch (s.tag) {
        case 3:
            Em(s),
            xs();
            break;
        case 5:
            Hp(s);
            break;
        case 1:
            kt(s.type) && oa(s);
            break;
        case 4:
            Ju(s, s.stateNode.containerInfo);
            break;
        case 10:
            var u = s.type._context
              , f = s.memoizedProps.value;
            Fe(fa, u._currentValue),
            u._currentValue = f;
            break;
        case 13:
            if (u = s.memoizedState,
            u !== null)
                return u.dehydrated !== null ? (Fe(We, We.current & 1),
                s.flags |= 128,
                null) : (a & s.child.childLanes) !== 0 ? Am(r, s, a) : (Fe(We, We.current & 1),
                r = zn(r, s, a),
                r !== null ? r.sibling : null);
            Fe(We, We.current & 1);
            break;
        case 19:
            if (u = (a & s.childLanes) !== 0,
            (r.flags & 128) !== 0) {
                if (u)
                    return Nm(r, s, a);
                s.flags |= 128
            }
            if (f = s.memoizedState,
            f !== null && (f.rendering = null,
            f.tail = null,
            f.lastEffect = null),
            Fe(We, We.current),
            u)
                break;
            return null;
        case 22:
        case 23:
            return s.lanes = 0,
            bm(r, s, a)
        }
        return zn(r, s, a)
    }
    var Mm, Sc, Dm, Om;
    Mm = function(r, s) {
        for (var a = s.child; a !== null; ) {
            if (a.tag === 5 || a.tag === 6)
                r.appendChild(a.stateNode);
            else if (a.tag !== 4 && a.child !== null) {
                a.child.return = a,
                a = a.child;
                continue
            }
            if (a === s)
                break;
            for (; a.sibling === null; ) {
                if (a.return === null || a.return === s)
                    return;
                a = a.return
            }
            a.sibling.return = a.return,
            a = a.sibling
        }
    }
    ,
    Sc = function() {}
    ,
    Dm = function(r, s, a, u) {
        var f = r.memoizedProps;
        if (f !== u) {
            r = s.stateNode,
            Lr(Sn.current);
            var g = null;
            switch (a) {
            case "input":
                f = Gl(r, f),
                u = Gl(r, u),
                g = [];
                break;
            case "select":
                f = Z({}, f, {
                    value: void 0
                }),
                u = Z({}, u, {
                    value: void 0
                }),
                g = [];
                break;
            case "textarea":
                f = Jl(r, f),
                u = Jl(r, u),
                g = [];
                break;
            default:
                typeof f.onClick != "function" && typeof u.onClick == "function" && (r.onclick = ra)
            }
            tu(a, u);
            var x;
            a = null;
            for (I in f)
                if (!u.hasOwnProperty(I) && f.hasOwnProperty(I) && f[I] != null)
                    if (I === "style") {
                        var b = f[I];
                        for (x in b)
                            b.hasOwnProperty(x) && (a || (a = {}),
                            a[x] = "")
                    } else
                        I !== "dangerouslySetInnerHTML" && I !== "children" && I !== "suppressContentEditableWarning" && I !== "suppressHydrationWarning" && I !== "autoFocus" && (o.hasOwnProperty(I) ? g || (g = []) : (g = g || []).push(I, null));
            for (I in u) {
                var _ = u[I];
                if (b = f?.[I],
                u.hasOwnProperty(I) && _ !== b && (_ != null || b != null))
                    if (I === "style")
                        if (b) {
                            for (x in b)
                                !b.hasOwnProperty(x) || _ && _.hasOwnProperty(x) || (a || (a = {}),
                                a[x] = "");
                            for (x in _)
                                _.hasOwnProperty(x) && b[x] !== _[x] && (a || (a = {}),
                                a[x] = _[x])
                        } else
                            a || (g || (g = []),
                            g.push(I, a)),
                            a = _;
                    else
                        I === "dangerouslySetInnerHTML" ? (_ = _ ? _.__html : void 0,
                        b = b ? b.__html : void 0,
                        _ != null && b !== _ && (g = g || []).push(I, _)) : I === "children" ? typeof _ != "string" && typeof _ != "number" || (g = g || []).push(I, "" + _) : I !== "suppressContentEditableWarning" && I !== "suppressHydrationWarning" && (o.hasOwnProperty(I) ? (_ != null && I === "onScroll" && Ve("scroll", r),
                        g || b === _ || (g = [])) : (g = g || []).push(I, _))
            }
            a && (g = g || []).push("style", a);
            var I = g;
            (s.updateQueue = I) && (s.flags |= 4)
        }
    }
    ,
    Om = function(r, s, a, u) {
        a !== u && (s.flags |= 4)
    }
    ;
    function Ii(r, s) {
        if (!$e)
            switch (r.tailMode) {
            case "hidden":
                s = r.tail;
                for (var a = null; s !== null; )
                    s.alternate !== null && (a = s),
                    s = s.sibling;
                a === null ? r.tail = null : a.sibling = null;
                break;
            case "collapsed":
                a = r.tail;
                for (var u = null; a !== null; )
                    a.alternate !== null && (u = a),
                    a = a.sibling;
                u === null ? s || r.tail === null ? r.tail = null : r.tail.sibling = null : u.sibling = null
            }
    }
    function vt(r) {
        var s = r.alternate !== null && r.alternate.child === r.child
          , a = 0
          , u = 0;
        if (s)
            for (var f = r.child; f !== null; )
                a |= f.lanes | f.childLanes,
                u |= f.subtreeFlags & 14680064,
                u |= f.flags & 14680064,
                f.return = r,
                f = f.sibling;
        else
            for (f = r.child; f !== null; )
                a |= f.lanes | f.childLanes,
                u |= f.subtreeFlags,
                u |= f.flags,
                f.return = r,
                f = f.sibling;
        return r.subtreeFlags |= u,
        r.childLanes = a,
        s
    }
    function B1(r, s, a) {
        var u = s.pendingProps;
        switch ($u(s),
        s.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return vt(s),
            null;
        case 1:
            return kt(s.type) && ia(),
            vt(s),
            null;
        case 3:
            return u = s.stateNode,
            Ts(),
            ze(Et),
            ze(gt),
            nc(),
            u.pendingContext && (u.context = u.pendingContext,
            u.pendingContext = null),
            (r === null || r.child === null) && (ca(s) ? s.flags |= 4 : r === null || r.memoizedState.isDehydrated && (s.flags & 256) === 0 || (s.flags |= 1024,
            sn !== null && (Mc(sn),
            sn = null))),
            Sc(r, s),
            vt(s),
            null;
        case 5:
            ec(s);
            var f = Lr(Ri.current);
            if (a = s.type,
            r !== null && s.stateNode != null)
                Dm(r, s, a, u, f),
                r.ref !== s.ref && (s.flags |= 512,
                s.flags |= 2097152);
            else {
                if (!u) {
                    if (s.stateNode === null)
                        throw Error(n(166));
                    return vt(s),
                    null
                }
                if (r = Lr(Sn.current),
                ca(s)) {
                    u = s.stateNode,
                    a = s.type;
                    var g = s.memoizedProps;
                    switch (u[wn] = s,
                    u[Ci] = g,
                    r = (s.mode & 1) !== 0,
                    a) {
                    case "dialog":
                        Ve("cancel", u),
                        Ve("close", u);
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        Ve("load", u);
                        break;
                    case "video":
                    case "audio":
                        for (f = 0; f < Pi.length; f++)
                            Ve(Pi[f], u);
                        break;
                    case "source":
                        Ve("error", u);
                        break;
                    case "img":
                    case "image":
                    case "link":
                        Ve("error", u),
                        Ve("load", u);
                        break;
                    case "details":
                        Ve("toggle", u);
                        break;
                    case "input":
                        ph(u, g),
                        Ve("invalid", u);
                        break;
                    case "select":
                        u._wrapperState = {
                            wasMultiple: !!g.multiple
                        },
                        Ve("invalid", u);
                        break;
                    case "textarea":
                        yh(u, g),
                        Ve("invalid", u)
                    }
                    tu(a, g),
                    f = null;
                    for (var x in g)
                        if (g.hasOwnProperty(x)) {
                            var b = g[x];
                            x === "children" ? typeof b == "string" ? u.textContent !== b && (g.suppressHydrationWarning !== !0 && na(u.textContent, b, r),
                            f = ["children", b]) : typeof b == "number" && u.textContent !== "" + b && (g.suppressHydrationWarning !== !0 && na(u.textContent, b, r),
                            f = ["children", "" + b]) : o.hasOwnProperty(x) && b != null && x === "onScroll" && Ve("scroll", u)
                        }
                    switch (a) {
                    case "input":
                        rs(u),
                        gh(u, g, !0);
                        break;
                    case "textarea":
                        rs(u),
                        xh(u);
                        break;
                    case "select":
                    case "option":
                        break;
                    default:
                        typeof g.onClick == "function" && (u.onclick = ra)
                    }
                    u = f,
                    s.updateQueue = u,
                    u !== null && (s.flags |= 4)
                } else {
                    x = f.nodeType === 9 ? f : f.ownerDocument,
                    r === "http://www.w3.org/1999/xhtml" && (r = wh(a)),
                    r === "http://www.w3.org/1999/xhtml" ? a === "script" ? (r = x.createElement("div"),
                    r.innerHTML = "<script><\/script>",
                    r = r.removeChild(r.firstChild)) : typeof u.is == "string" ? r = x.createElement(a, {
                        is: u.is
                    }) : (r = x.createElement(a),
                    a === "select" && (x = r,
                    u.multiple ? x.multiple = !0 : u.size && (x.size = u.size))) : r = x.createElementNS(r, a),
                    r[wn] = s,
                    r[Ci] = u,
                    Mm(r, s, !1, !1),
                    s.stateNode = r;
                    e: {
                        switch (x = nu(a, u),
                        a) {
                        case "dialog":
                            Ve("cancel", r),
                            Ve("close", r),
                            f = u;
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            Ve("load", r),
                            f = u;
                            break;
                        case "video":
                        case "audio":
                            for (f = 0; f < Pi.length; f++)
                                Ve(Pi[f], r);
                            f = u;
                            break;
                        case "source":
                            Ve("error", r),
                            f = u;
                            break;
                        case "img":
                        case "image":
                        case "link":
                            Ve("error", r),
                            Ve("load", r),
                            f = u;
                            break;
                        case "details":
                            Ve("toggle", r),
                            f = u;
                            break;
                        case "input":
                            ph(r, u),
                            f = Gl(r, u),
                            Ve("invalid", r);
                            break;
                        case "option":
                            f = u;
                            break;
                        case "select":
                            r._wrapperState = {
                                wasMultiple: !!u.multiple
                            },
                            f = Z({}, u, {
                                value: void 0
                            }),
                            Ve("invalid", r);
                            break;
                        case "textarea":
                            yh(r, u),
                            f = Jl(r, u),
                            Ve("invalid", r);
                            break;
                        default:
                            f = u
                        }
                        tu(a, f),
                        b = f;
                        for (g in b)
                            if (b.hasOwnProperty(g)) {
                                var _ = b[g];
                                g === "style" ? Th(r, _) : g === "dangerouslySetInnerHTML" ? (_ = _ ? _.__html : void 0,
                                _ != null && Sh(r, _)) : g === "children" ? typeof _ == "string" ? (a !== "textarea" || _ !== "") && ri(r, _) : typeof _ == "number" && ri(r, "" + _) : g !== "suppressContentEditableWarning" && g !== "suppressHydrationWarning" && g !== "autoFocus" && (o.hasOwnProperty(g) ? _ != null && g === "onScroll" && Ve("scroll", r) : _ != null && O(r, g, _, x))
                            }
                        switch (a) {
                        case "input":
                            rs(r),
                            gh(r, u, !1);
                            break;
                        case "textarea":
                            rs(r),
                            xh(r);
                            break;
                        case "option":
                            u.value != null && r.setAttribute("value", "" + De(u.value));
                            break;
                        case "select":
                            r.multiple = !!u.multiple,
                            g = u.value,
                            g != null ? ss(r, !!u.multiple, g, !1) : u.defaultValue != null && ss(r, !!u.multiple, u.defaultValue, !0);
                            break;
                        default:
                            typeof f.onClick == "function" && (r.onclick = ra)
                        }
                        switch (a) {
                        case "button":
                        case "input":
                        case "select":
                        case "textarea":
                            u = !!u.autoFocus;
                            break e;
                        case "img":
                            u = !0;
                            break e;
                        default:
                            u = !1
                        }
                    }
                    u && (s.flags |= 4)
                }
                s.ref !== null && (s.flags |= 512,
                s.flags |= 2097152)
            }
            return vt(s),
            null;
        case 6:
            if (r && s.stateNode != null)
                Om(r, s, r.memoizedProps, u);
            else {
                if (typeof u != "string" && s.stateNode === null)
                    throw Error(n(166));
                if (a = Lr(Ri.current),
                Lr(Sn.current),
                ca(s)) {
                    if (u = s.stateNode,
                    a = s.memoizedProps,
                    u[wn] = s,
                    (g = u.nodeValue !== a) && (r = jt,
                    r !== null))
                        switch (r.tag) {
                        case 3:
                            na(u.nodeValue, a, (r.mode & 1) !== 0);
                            break;
                        case 5:
                            r.memoizedProps.suppressHydrationWarning !== !0 && na(u.nodeValue, a, (r.mode & 1) !== 0)
                        }
                    g && (s.flags |= 4)
                } else
                    u = (a.nodeType === 9 ? a : a.ownerDocument).createTextNode(u),
                    u[wn] = s,
                    s.stateNode = u
            }
            return vt(s),
            null;
        case 13:
            if (ze(We),
            u = s.memoizedState,
            r === null || r.memoizedState !== null && r.memoizedState.dehydrated !== null) {
                if ($e && Ft !== null && (s.mode & 1) !== 0 && (s.flags & 128) === 0)
                    jp(),
                    xs(),
                    s.flags |= 98560,
                    g = !1;
                else if (g = ca(s),
                u !== null && u.dehydrated !== null) {
                    if (r === null) {
                        if (!g)
                            throw Error(n(318));
                        if (g = s.memoizedState,
                        g = g !== null ? g.dehydrated : null,
                        !g)
                            throw Error(n(317));
                        g[wn] = s
                    } else
                        xs(),
                        (s.flags & 128) === 0 && (s.memoizedState = null),
                        s.flags |= 4;
                    vt(s),
                    g = !1
                } else
                    sn !== null && (Mc(sn),
                    sn = null),
                    g = !0;
                if (!g)
                    return s.flags & 65536 ? s : null
            }
            return (s.flags & 128) !== 0 ? (s.lanes = a,
            s) : (u = u !== null,
            u !== (r !== null && r.memoizedState !== null) && u && (s.child.flags |= 8192,
            (s.mode & 1) !== 0 && (r === null || (We.current & 1) !== 0 ? st === 0 && (st = 3) : Ic())),
            s.updateQueue !== null && (s.flags |= 4),
            vt(s),
            null);
        case 4:
            return Ts(),
            Sc(r, s),
            r === null && Ti(s.stateNode.containerInfo),
            vt(s),
            null;
        case 10:
            return Zu(s.type._context),
            vt(s),
            null;
        case 17:
            return kt(s.type) && ia(),
            vt(s),
            null;
        case 19:
            if (ze(We),
            g = s.memoizedState,
            g === null)
                return vt(s),
                null;
            if (u = (s.flags & 128) !== 0,
            x = g.rendering,
            x === null)
                if (u)
                    Ii(g, !1);
                else {
                    if (st !== 0 || r !== null && (r.flags & 128) !== 0)
                        for (r = s.child; r !== null; ) {
                            if (x = ga(r),
                            x !== null) {
                                for (s.flags |= 128,
                                Ii(g, !1),
                                u = x.updateQueue,
                                u !== null && (s.updateQueue = u,
                                s.flags |= 4),
                                s.subtreeFlags = 0,
                                u = a,
                                a = s.child; a !== null; )
                                    g = a,
                                    r = u,
                                    g.flags &= 14680066,
                                    x = g.alternate,
                                    x === null ? (g.childLanes = 0,
                                    g.lanes = r,
                                    g.child = null,
                                    g.subtreeFlags = 0,
                                    g.memoizedProps = null,
                                    g.memoizedState = null,
                                    g.updateQueue = null,
                                    g.dependencies = null,
                                    g.stateNode = null) : (g.childLanes = x.childLanes,
                                    g.lanes = x.lanes,
                                    g.child = x.child,
                                    g.subtreeFlags = 0,
                                    g.deletions = null,
                                    g.memoizedProps = x.memoizedProps,
                                    g.memoizedState = x.memoizedState,
                                    g.updateQueue = x.updateQueue,
                                    g.type = x.type,
                                    r = x.dependencies,
                                    g.dependencies = r === null ? null : {
                                        lanes: r.lanes,
                                        firstContext: r.firstContext
                                    }),
                                    a = a.sibling;
                                return Fe(We, We.current & 1 | 2),
                                s.child
                            }
                            r = r.sibling
                        }
                    g.tail !== null && Ye() > Es && (s.flags |= 128,
                    u = !0,
                    Ii(g, !1),
                    s.lanes = 4194304)
                }
            else {
                if (!u)
                    if (r = ga(x),
                    r !== null) {
                        if (s.flags |= 128,
                        u = !0,
                        a = r.updateQueue,
                        a !== null && (s.updateQueue = a,
                        s.flags |= 4),
                        Ii(g, !0),
                        g.tail === null && g.tailMode === "hidden" && !x.alternate && !$e)
                            return vt(s),
                            null
                    } else
                        2 * Ye() - g.renderingStartTime > Es && a !== 1073741824 && (s.flags |= 128,
                        u = !0,
                        Ii(g, !1),
                        s.lanes = 4194304);
                g.isBackwards ? (x.sibling = s.child,
                s.child = x) : (a = g.last,
                a !== null ? a.sibling = x : s.child = x,
                g.last = x)
            }
            return g.tail !== null ? (s = g.tail,
            g.rendering = s,
            g.tail = s.sibling,
            g.renderingStartTime = Ye(),
            s.sibling = null,
            a = We.current,
            Fe(We, u ? a & 1 | 2 : a & 1),
            s) : (vt(s),
            null);
        case 22:
        case 23:
            return Oc(),
            u = s.memoizedState !== null,
            r !== null && r.memoizedState !== null !== u && (s.flags |= 8192),
            u && (s.mode & 1) !== 0 ? (Vt & 1073741824) !== 0 && (vt(s),
            s.subtreeFlags & 6 && (s.flags |= 8192)) : vt(s),
            null;
        case 24:
            return null;
        case 25:
            return null
        }
        throw Error(n(156, s.tag))
    }
    function U1(r, s) {
        switch ($u(s),
        s.tag) {
        case 1:
            return kt(s.type) && ia(),
            r = s.flags,
            r & 65536 ? (s.flags = r & -65537 | 128,
            s) : null;
        case 3:
            return Ts(),
            ze(Et),
            ze(gt),
            nc(),
            r = s.flags,
            (r & 65536) !== 0 && (r & 128) === 0 ? (s.flags = r & -65537 | 128,
            s) : null;
        case 5:
            return ec(s),
            null;
        case 13:
            if (ze(We),
            r = s.memoizedState,
            r !== null && r.dehydrated !== null) {
                if (s.alternate === null)
                    throw Error(n(340));
                xs()
            }
            return r = s.flags,
            r & 65536 ? (s.flags = r & -65537 | 128,
            s) : null;
        case 19:
            return ze(We),
            null;
        case 4:
            return Ts(),
            null;
        case 10:
            return Zu(s.type._context),
            null;
        case 22:
        case 23:
            return Oc(),
            null;
        case 24:
            return null;
        default:
            return null
        }
    }
    var Ca = !1
      , xt = !1
      , $1 = typeof WeakSet == "function" ? WeakSet : Set
      , ne = null;
    function Cs(r, s) {
        var a = r.ref;
        if (a !== null)
            if (typeof a == "function")
                try {
                    a(null)
                } catch (u) {
                    Ze(r, s, u)
                }
            else
                a.current = null
    }
    function Pc(r, s, a) {
        try {
            a()
        } catch (u) {
            Ze(r, s, u)
        }
    }
    var Im = !1;
    function W1(r, s) {
        if (Ou = Ho,
        r = hp(),
        _u(r)) {
            if ("selectionStart"in r)
                var a = {
                    start: r.selectionStart,
                    end: r.selectionEnd
                };
            else
                e: {
                    a = (a = r.ownerDocument) && a.defaultView || window;
                    var u = a.getSelection && a.getSelection();
                    if (u && u.rangeCount !== 0) {
                        a = u.anchorNode;
                        var f = u.anchorOffset
                          , g = u.focusNode;
                        u = u.focusOffset;
                        try {
                            a.nodeType,
                            g.nodeType
                        } catch {
                            a = null;
                            break e
                        }
                        var x = 0
                          , b = -1
                          , _ = -1
                          , I = 0
                          , W = 0
                          , H = r
                          , U = null;
                        t: for (; ; ) {
                            for (var J; H !== a || f !== 0 && H.nodeType !== 3 || (b = x + f),
                            H !== g || u !== 0 && H.nodeType !== 3 || (_ = x + u),
                            H.nodeType === 3 && (x += H.nodeValue.length),
                            (J = H.firstChild) !== null; )
                                U = H,
                                H = J;
                            for (; ; ) {
                                if (H === r)
                                    break t;
                                if (U === a && ++I === f && (b = x),
                                U === g && ++W === u && (_ = x),
                                (J = H.nextSibling) !== null)
                                    break;
                                H = U,
                                U = H.parentNode
                            }
                            H = J
                        }
                        a = b === -1 || _ === -1 ? null : {
                            start: b,
                            end: _
                        }
                    } else
                        a = null
                }
            a = a || {
                start: 0,
                end: 0
            }
        } else
            a = null;
        for (Iu = {
            focusedElem: r,
            selectionRange: a
        },
        Ho = !1,
        ne = s; ne !== null; )
            if (s = ne,
            r = s.child,
            (s.subtreeFlags & 1028) !== 0 && r !== null)
                r.return = s,
                ne = r;
            else
                for (; ne !== null; ) {
                    s = ne;
                    try {
                        var re = s.alternate;
                        if ((s.flags & 1024) !== 0)
                            switch (s.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (re !== null) {
                                    var se = re.memoizedProps
                                      , Je = re.memoizedState
                                      , M = s.stateNode
                                      , E = M.getSnapshotBeforeUpdate(s.elementType === s.type ? se : on(s.type, se), Je);
                                    M.__reactInternalSnapshotBeforeUpdate = E
                                }
                                break;
                            case 3:
                                var D = s.stateNode.containerInfo;
                                D.nodeType === 1 ? D.textContent = "" : D.nodeType === 9 && D.documentElement && D.removeChild(D.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(n(163))
                            }
                    } catch (q) {
                        Ze(s, s.return, q)
                    }
                    if (r = s.sibling,
                    r !== null) {
                        r.return = s.return,
                        ne = r;
                        break
                    }
                    ne = s.return
                }
        return re = Im,
        Im = !1,
        re
    }
    function Li(r, s, a) {
        var u = s.updateQueue;
        if (u = u !== null ? u.lastEffect : null,
        u !== null) {
            var f = u = u.next;
            do {
                if ((f.tag & r) === r) {
                    var g = f.destroy;
                    f.destroy = void 0,
                    g !== void 0 && Pc(s, a, g)
                }
                f = f.next
            } while (f !== u)
        }
    }
    function _a(r, s) {
        if (s = s.updateQueue,
        s = s !== null ? s.lastEffect : null,
        s !== null) {
            var a = s = s.next;
            do {
                if ((a.tag & r) === r) {
                    var u = a.create;
                    a.destroy = u()
                }
                a = a.next
            } while (a !== s)
        }
    }
    function Tc(r) {
        var s = r.ref;
        if (s !== null) {
            var a = r.stateNode;
            r.tag,
            r = a,
            typeof s == "function" ? s(r) : s.current = r
        }
    }
    function Lm(r) {
        var s = r.alternate;
        s !== null && (r.alternate = null,
        Lm(s)),
        r.child = null,
        r.deletions = null,
        r.sibling = null,
        r.tag === 5 && (s = r.stateNode,
        s !== null && (delete s[wn],
        delete s[Ci],
        delete s[Vu],
        delete s[_1],
        delete s[E1])),
        r.stateNode = null,
        r.return = null,
        r.dependencies = null,
        r.memoizedProps = null,
        r.memoizedState = null,
        r.pendingProps = null,
        r.stateNode = null,
        r.updateQueue = null
    }
    function jm(r) {
        return r.tag === 5 || r.tag === 3 || r.tag === 4
    }
    function Fm(r) {
        e: for (; ; ) {
            for (; r.sibling === null; ) {
                if (r.return === null || jm(r.return))
                    return null;
                r = r.return
            }
            for (r.sibling.return = r.return,
            r = r.sibling; r.tag !== 5 && r.tag !== 6 && r.tag !== 18; ) {
                if (r.flags & 2 || r.child === null || r.tag === 4)
                    continue e;
                r.child.return = r,
                r = r.child
            }
            if (!(r.flags & 2))
                return r.stateNode
        }
    }
    function bc(r, s, a) {
        var u = r.tag;
        if (u === 5 || u === 6)
            r = r.stateNode,
            s ? a.nodeType === 8 ? a.parentNode.insertBefore(r, s) : a.insertBefore(r, s) : (a.nodeType === 8 ? (s = a.parentNode,
            s.insertBefore(r, a)) : (s = a,
            s.appendChild(r)),
            a = a._reactRootContainer,
            a != null || s.onclick !== null || (s.onclick = ra));
        else if (u !== 4 && (r = r.child,
        r !== null))
            for (bc(r, s, a),
            r = r.sibling; r !== null; )
                bc(r, s, a),
                r = r.sibling
    }
    function Cc(r, s, a) {
        var u = r.tag;
        if (u === 5 || u === 6)
            r = r.stateNode,
            s ? a.insertBefore(r, s) : a.appendChild(r);
        else if (u !== 4 && (r = r.child,
        r !== null))
            for (Cc(r, s, a),
            r = r.sibling; r !== null; )
                Cc(r, s, a),
                r = r.sibling
    }
    var dt = null
      , an = !1;
    function ur(r, s, a) {
        for (a = a.child; a !== null; )
            Vm(r, s, a),
            a = a.sibling
    }
    function Vm(r, s, a) {
        if (xn && typeof xn.onCommitFiberUnmount == "function")
            try {
                xn.onCommitFiberUnmount(Vo, a)
            } catch {}
        switch (a.tag) {
        case 5:
            xt || Cs(a, s);
        case 6:
            var u = dt
              , f = an;
            dt = null,
            ur(r, s, a),
            dt = u,
            an = f,
            dt !== null && (an ? (r = dt,
            a = a.stateNode,
            r.nodeType === 8 ? r.parentNode.removeChild(a) : r.removeChild(a)) : dt.removeChild(a.stateNode));
            break;
        case 18:
            dt !== null && (an ? (r = dt,
            a = a.stateNode,
            r.nodeType === 8 ? Fu(r.parentNode, a) : r.nodeType === 1 && Fu(r, a),
            pi(r)) : Fu(dt, a.stateNode));
            break;
        case 4:
            u = dt,
            f = an,
            dt = a.stateNode.containerInfo,
            an = !0,
            ur(r, s, a),
            dt = u,
            an = f;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!xt && (u = a.updateQueue,
            u !== null && (u = u.lastEffect,
            u !== null))) {
                f = u = u.next;
                do {
                    var g = f
                      , x = g.destroy;
                    g = g.tag,
                    x !== void 0 && ((g & 2) !== 0 || (g & 4) !== 0) && Pc(a, s, x),
                    f = f.next
                } while (f !== u)
            }
            ur(r, s, a);
            break;
        case 1:
            if (!xt && (Cs(a, s),
            u = a.stateNode,
            typeof u.componentWillUnmount == "function"))
                try {
                    u.props = a.memoizedProps,
                    u.state = a.memoizedState,
                    u.componentWillUnmount()
                } catch (b) {
                    Ze(a, s, b)
                }
            ur(r, s, a);
            break;
        case 21:
            ur(r, s, a);
            break;
        case 22:
            a.mode & 1 ? (xt = (u = xt) || a.memoizedState !== null,
            ur(r, s, a),
            xt = u) : ur(r, s, a);
            break;
        default:
            ur(r, s, a)
        }
    }
    function zm(r) {
        var s = r.updateQueue;
        if (s !== null) {
            r.updateQueue = null;
            var a = r.stateNode;
            a === null && (a = r.stateNode = new $1),
            s.forEach(function(u) {
                var f = J1.bind(null, r, u);
                a.has(u) || (a.add(u),
                u.then(f, f))
            })
        }
    }
    function ln(r, s) {
        var a = s.deletions;
        if (a !== null)
            for (var u = 0; u < a.length; u++) {
                var f = a[u];
                try {
                    var g = r
                      , x = s
                      , b = x;
                    e: for (; b !== null; ) {
                        switch (b.tag) {
                        case 5:
                            dt = b.stateNode,
                            an = !1;
                            break e;
                        case 3:
                            dt = b.stateNode.containerInfo,
                            an = !0;
                            break e;
                        case 4:
                            dt = b.stateNode.containerInfo,
                            an = !0;
                            break e
                        }
                        b = b.return
                    }
                    if (dt === null)
                        throw Error(n(160));
                    Vm(g, x, f),
                    dt = null,
                    an = !1;
                    var _ = f.alternate;
                    _ !== null && (_.return = null),
                    f.return = null
                } catch (I) {
                    Ze(f, s, I)
                }
            }
        if (s.subtreeFlags & 12854)
            for (s = s.child; s !== null; )
                Bm(s, r),
                s = s.sibling
    }
    function Bm(r, s) {
        var a = r.alternate
          , u = r.flags;
        switch (r.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (ln(s, r),
            Tn(r),
            u & 4) {
                try {
                    Li(3, r, r.return),
                    _a(3, r)
                } catch (se) {
                    Ze(r, r.return, se)
                }
                try {
                    Li(5, r, r.return)
                } catch (se) {
                    Ze(r, r.return, se)
                }
            }
            break;
        case 1:
            ln(s, r),
            Tn(r),
            u & 512 && a !== null && Cs(a, a.return);
            break;
        case 5:
            if (ln(s, r),
            Tn(r),
            u & 512 && a !== null && Cs(a, a.return),
            r.flags & 32) {
                var f = r.stateNode;
                try {
                    ri(f, "")
                } catch (se) {
                    Ze(r, r.return, se)
                }
            }
            if (u & 4 && (f = r.stateNode,
            f != null)) {
                var g = r.memoizedProps
                  , x = a !== null ? a.memoizedProps : g
                  , b = r.type
                  , _ = r.updateQueue;
                if (r.updateQueue = null,
                _ !== null)
                    try {
                        b === "input" && g.type === "radio" && g.name != null && mh(f, g),
                        nu(b, x);
                        var I = nu(b, g);
                        for (x = 0; x < _.length; x += 2) {
                            var W = _[x]
                              , H = _[x + 1];
                            W === "style" ? Th(f, H) : W === "dangerouslySetInnerHTML" ? Sh(f, H) : W === "children" ? ri(f, H) : O(f, W, H, I)
                        }
                        switch (b) {
                        case "input":
                            Xl(f, g);
                            break;
                        case "textarea":
                            vh(f, g);
                            break;
                        case "select":
                            var U = f._wrapperState.wasMultiple;
                            f._wrapperState.wasMultiple = !!g.multiple;
                            var J = g.value;
                            J != null ? ss(f, !!g.multiple, J, !1) : U !== !!g.multiple && (g.defaultValue != null ? ss(f, !!g.multiple, g.defaultValue, !0) : ss(f, !!g.multiple, g.multiple ? [] : "", !1))
                        }
                        f[Ci] = g
                    } catch (se) {
                        Ze(r, r.return, se)
                    }
            }
            break;
        case 6:
            if (ln(s, r),
            Tn(r),
            u & 4) {
                if (r.stateNode === null)
                    throw Error(n(162));
                f = r.stateNode,
                g = r.memoizedProps;
                try {
                    f.nodeValue = g
                } catch (se) {
                    Ze(r, r.return, se)
                }
            }
            break;
        case 3:
            if (ln(s, r),
            Tn(r),
            u & 4 && a !== null && a.memoizedState.isDehydrated)
                try {
                    pi(s.containerInfo)
                } catch (se) {
                    Ze(r, r.return, se)
                }
            break;
        case 4:
            ln(s, r),
            Tn(r);
            break;
        case 13:
            ln(s, r),
            Tn(r),
            f = r.child,
            f.flags & 8192 && (g = f.memoizedState !== null,
            f.stateNode.isHidden = g,
            !g || f.alternate !== null && f.alternate.memoizedState !== null || (kc = Ye())),
            u & 4 && zm(r);
            break;
        case 22:
            if (W = a !== null && a.memoizedState !== null,
            r.mode & 1 ? (xt = (I = xt) || W,
            ln(s, r),
            xt = I) : ln(s, r),
            Tn(r),
            u & 8192) {
                if (I = r.memoizedState !== null,
                (r.stateNode.isHidden = I) && !W && (r.mode & 1) !== 0)
                    for (ne = r,
                    W = r.child; W !== null; ) {
                        for (H = ne = W; ne !== null; ) {
                            switch (U = ne,
                            J = U.child,
                            U.tag) {
                            case 0:
                            case 11:
                            case 14:
                            case 15:
                                Li(4, U, U.return);
                                break;
                            case 1:
                                Cs(U, U.return);
                                var re = U.stateNode;
                                if (typeof re.componentWillUnmount == "function") {
                                    u = U,
                                    a = U.return;
                                    try {
                                        s = u,
                                        re.props = s.memoizedProps,
                                        re.state = s.memoizedState,
                                        re.componentWillUnmount()
                                    } catch (se) {
                                        Ze(u, a, se)
                                    }
                                }
                                break;
                            case 5:
                                Cs(U, U.return);
                                break;
                            case 22:
                                if (U.memoizedState !== null) {
                                    Wm(H);
                                    continue
                                }
                            }
                            J !== null ? (J.return = U,
                            ne = J) : Wm(H)
                        }
                        W = W.sibling
                    }
                e: for (W = null,
                H = r; ; ) {
                    if (H.tag === 5) {
                        if (W === null) {
                            W = H;
                            try {
                                f = H.stateNode,
                                I ? (g = f.style,
                                typeof g.setProperty == "function" ? g.setProperty("display", "none", "important") : g.display = "none") : (b = H.stateNode,
                                _ = H.memoizedProps.style,
                                x = _ != null && _.hasOwnProperty("display") ? _.display : null,
                                b.style.display = Ph("display", x))
                            } catch (se) {
                                Ze(r, r.return, se)
                            }
                        }
                    } else if (H.tag === 6) {
                        if (W === null)
                            try {
                                H.stateNode.nodeValue = I ? "" : H.memoizedProps
                            } catch (se) {
                                Ze(r, r.return, se)
                            }
                    } else if ((H.tag !== 22 && H.tag !== 23 || H.memoizedState === null || H === r) && H.child !== null) {
                        H.child.return = H,
                        H = H.child;
                        continue
                    }
                    if (H === r)
                        break e;
                    for (; H.sibling === null; ) {
                        if (H.return === null || H.return === r)
                            break e;
                        W === H && (W = null),
                        H = H.return
                    }
                    W === H && (W = null),
                    H.sibling.return = H.return,
                    H = H.sibling
                }
            }
            break;
        case 19:
            ln(s, r),
            Tn(r),
            u & 4 && zm(r);
            break;
        case 21:
            break;
        default:
            ln(s, r),
            Tn(r)
        }
    }
    function Tn(r) {
        var s = r.flags;
        if (s & 2) {
            try {
                e: {
                    for (var a = r.return; a !== null; ) {
                        if (jm(a)) {
                            var u = a;
                            break e
                        }
                        a = a.return
                    }
                    throw Error(n(160))
                }
                switch (u.tag) {
                case 5:
                    var f = u.stateNode;
                    u.flags & 32 && (ri(f, ""),
                    u.flags &= -33);
                    var g = Fm(r);
                    Cc(r, g, f);
                    break;
                case 3:
                case 4:
                    var x = u.stateNode.containerInfo
                      , b = Fm(r);
                    bc(r, b, x);
                    break;
                default:
                    throw Error(n(161))
                }
            } catch (_) {
                Ze(r, r.return, _)
            }
            r.flags &= -3
        }
        s & 4096 && (r.flags &= -4097)
    }
    function H1(r, s, a) {
        ne = r,
        Um(r)
    }
    function Um(r, s, a) {
        for (var u = (r.mode & 1) !== 0; ne !== null; ) {
            var f = ne
              , g = f.child;
            if (f.tag === 22 && u) {
                var x = f.memoizedState !== null || Ca;
                if (!x) {
                    var b = f.alternate
                      , _ = b !== null && b.memoizedState !== null || xt;
                    b = Ca;
                    var I = xt;
                    if (Ca = x,
                    (xt = _) && !I)
                        for (ne = f; ne !== null; )
                            x = ne,
                            _ = x.child,
                            x.tag === 22 && x.memoizedState !== null ? Hm(f) : _ !== null ? (_.return = x,
                            ne = _) : Hm(f);
                    for (; g !== null; )
                        ne = g,
                        Um(g),
                        g = g.sibling;
                    ne = f,
                    Ca = b,
                    xt = I
                }
                $m(r)
            } else
                (f.subtreeFlags & 8772) !== 0 && g !== null ? (g.return = f,
                ne = g) : $m(r)
        }
    }
    function $m(r) {
        for (; ne !== null; ) {
            var s = ne;
            if ((s.flags & 8772) !== 0) {
                var a = s.alternate;
                try {
                    if ((s.flags & 8772) !== 0)
                        switch (s.tag) {
                        case 0:
                        case 11:
                        case 15:
                            xt || _a(5, s);
                            break;
                        case 1:
                            var u = s.stateNode;
                            if (s.flags & 4 && !xt)
                                if (a === null)
                                    u.componentDidMount();
                                else {
                                    var f = s.elementType === s.type ? a.memoizedProps : on(s.type, a.memoizedProps);
                                    u.componentDidUpdate(f, a.memoizedState, u.__reactInternalSnapshotBeforeUpdate)
                                }
                            var g = s.updateQueue;
                            g !== null && Wp(s, g, u);
                            break;
                        case 3:
                            var x = s.updateQueue;
                            if (x !== null) {
                                if (a = null,
                                s.child !== null)
                                    switch (s.child.tag) {
                                    case 5:
                                        a = s.child.stateNode;
                                        break;
                                    case 1:
                                        a = s.child.stateNode
                                    }
                                Wp(s, x, a)
                            }
                            break;
                        case 5:
                            var b = s.stateNode;
                            if (a === null && s.flags & 4) {
                                a = b;
                                var _ = s.memoizedProps;
                                switch (s.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    _.autoFocus && a.focus();
                                    break;
                                case "img":
                                    _.src && (a.src = _.src)
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (s.memoizedState === null) {
                                var I = s.alternate;
                                if (I !== null) {
                                    var W = I.memoizedState;
                                    if (W !== null) {
                                        var H = W.dehydrated;
                                        H !== null && pi(H)
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(n(163))
                        }
                    xt || s.flags & 512 && Tc(s)
                } catch (U) {
                    Ze(s, s.return, U)
                }
            }
            if (s === r) {
                ne = null;
                break
            }
            if (a = s.sibling,
            a !== null) {
                a.return = s.return,
                ne = a;
                break
            }
            ne = s.return
        }
    }
    function Wm(r) {
        for (; ne !== null; ) {
            var s = ne;
            if (s === r) {
                ne = null;
                break
            }
            var a = s.sibling;
            if (a !== null) {
                a.return = s.return,
                ne = a;
                break
            }
            ne = s.return
        }
    }
    function Hm(r) {
        for (; ne !== null; ) {
            var s = ne;
            try {
                switch (s.tag) {
                case 0:
                case 11:
                case 15:
                    var a = s.return;
                    try {
                        _a(4, s)
                    } catch (_) {
                        Ze(s, a, _)
                    }
                    break;
                case 1:
                    var u = s.stateNode;
                    if (typeof u.componentDidMount == "function") {
                        var f = s.return;
                        try {
                            u.componentDidMount()
                        } catch (_) {
                            Ze(s, f, _)
                        }
                    }
                    var g = s.return;
                    try {
                        Tc(s)
                    } catch (_) {
                        Ze(s, g, _)
                    }
                    break;
                case 5:
                    var x = s.return;
                    try {
                        Tc(s)
                    } catch (_) {
                        Ze(s, x, _)
                    }
                }
            } catch (_) {
                Ze(s, s.return, _)
            }
            if (s === r) {
                ne = null;
                break
            }
            var b = s.sibling;
            if (b !== null) {
                b.return = s.return,
                ne = b;
                break
            }
            ne = s.return
        }
    }
    var Q1 = Math.ceil
      , Ea = j.ReactCurrentDispatcher
      , _c = j.ReactCurrentOwner
      , Xt = j.ReactCurrentBatchConfig
      , Re = 0
      , lt = null
      , nt = null
      , ft = 0
      , Vt = 0
      , _s = sr(0)
      , st = 0
      , ji = null
      , Fr = 0
      , ka = 0
      , Ec = 0
      , Fi = null
      , Rt = null
      , kc = 0
      , Es = 1 / 0
      , Bn = null
      , Aa = !1
      , Ac = null
      , cr = null
      , Ra = !1
      , dr = null
      , Na = 0
      , Vi = 0
      , Rc = null
      , Ma = -1
      , Da = 0;
    function Ct() {
        return (Re & 6) !== 0 ? Ye() : Ma !== -1 ? Ma : Ma = Ye()
    }
    function fr(r) {
        return (r.mode & 1) === 0 ? 1 : (Re & 2) !== 0 && ft !== 0 ? ft & -ft : A1.transition !== null ? (Da === 0 && (Da = Fh()),
        Da) : (r = Ie,
        r !== 0 || (r = window.event,
        r = r === void 0 ? 16 : Kh(r.type)),
        r)
    }
    function un(r, s, a, u) {
        if (50 < Vi)
            throw Vi = 0,
            Rc = null,
            Error(n(185));
        ui(r, a, u),
        ((Re & 2) === 0 || r !== lt) && (r === lt && ((Re & 2) === 0 && (ka |= a),
        st === 4 && hr(r, ft)),
        Nt(r, u),
        a === 1 && Re === 0 && (s.mode & 1) === 0 && (Es = Ye() + 500,
        aa && or()))
    }
    function Nt(r, s) {
        var a = r.callbackNode;
        AS(r, s);
        var u = Uo(r, r === lt ? ft : 0);
        if (u === 0)
            a !== null && Ih(a),
            r.callbackNode = null,
            r.callbackPriority = 0;
        else if (s = u & -u,
        r.callbackPriority !== s) {
            if (a != null && Ih(a),
            s === 1)
                r.tag === 0 ? k1(Km.bind(null, r)) : Mp(Km.bind(null, r)),
                b1(function() {
                    (Re & 6) === 0 && or()
                }),
                a = null;
            else {
                switch (Vh(u)) {
                case 1:
                    a = uu;
                    break;
                case 4:
                    a = Lh;
                    break;
                case 16:
                    a = Fo;
                    break;
                case 536870912:
                    a = jh;
                    break;
                default:
                    a = Fo
                }
                a = tg(a, Qm.bind(null, r))
            }
            r.callbackPriority = s,
            r.callbackNode = a
        }
    }
    function Qm(r, s) {
        if (Ma = -1,
        Da = 0,
        (Re & 6) !== 0)
            throw Error(n(327));
        var a = r.callbackNode;
        if (ks() && r.callbackNode !== a)
            return null;
        var u = Uo(r, r === lt ? ft : 0);
        if (u === 0)
            return null;
        if ((u & 30) !== 0 || (u & r.expiredLanes) !== 0 || s)
            s = Oa(r, u);
        else {
            s = u;
            var f = Re;
            Re |= 2;
            var g = Zm();
            (lt !== r || ft !== s) && (Bn = null,
            Es = Ye() + 500,
            zr(r, s));
            do
                try {
                    Z1();
                    break
                } catch (b) {
                    qm(r, b)
                }
            while (!0);
            qu(),
            Ea.current = g,
            Re = f,
            nt !== null ? s = 0 : (lt = null,
            ft = 0,
            s = st)
        }
        if (s !== 0) {
            if (s === 2 && (f = cu(r),
            f !== 0 && (u = f,
            s = Nc(r, f))),
            s === 1)
                throw a = ji,
                zr(r, 0),
                hr(r, u),
                Nt(r, Ye()),
                a;
            if (s === 6)
                hr(r, u);
            else {
                if (f = r.current.alternate,
                (u & 30) === 0 && !K1(f) && (s = Oa(r, u),
                s === 2 && (g = cu(r),
                g !== 0 && (u = g,
                s = Nc(r, g))),
                s === 1))
                    throw a = ji,
                    zr(r, 0),
                    hr(r, u),
                    Nt(r, Ye()),
                    a;
                switch (r.finishedWork = f,
                r.finishedLanes = u,
                s) {
                case 0:
                case 1:
                    throw Error(n(345));
                case 2:
                    Br(r, Rt, Bn);
                    break;
                case 3:
                    if (hr(r, u),
                    (u & 130023424) === u && (s = kc + 500 - Ye(),
                    10 < s)) {
                        if (Uo(r, 0) !== 0)
                            break;
                        if (f = r.suspendedLanes,
                        (f & u) !== u) {
                            Ct(),
                            r.pingedLanes |= r.suspendedLanes & f;
                            break
                        }
                        r.timeoutHandle = ju(Br.bind(null, r, Rt, Bn), s);
                        break
                    }
                    Br(r, Rt, Bn);
                    break;
                case 4:
                    if (hr(r, u),
                    (u & 4194240) === u)
                        break;
                    for (s = r.eventTimes,
                    f = -1; 0 < u; ) {
                        var x = 31 - nn(u);
                        g = 1 << x,
                        x = s[x],
                        x > f && (f = x),
                        u &= ~g
                    }
                    if (u = f,
                    u = Ye() - u,
                    u = (120 > u ? 120 : 480 > u ? 480 : 1080 > u ? 1080 : 1920 > u ? 1920 : 3e3 > u ? 3e3 : 4320 > u ? 4320 : 1960 * Q1(u / 1960)) - u,
                    10 < u) {
                        r.timeoutHandle = ju(Br.bind(null, r, Rt, Bn), u);
                        break
                    }
                    Br(r, Rt, Bn);
                    break;
                case 5:
                    Br(r, Rt, Bn);
                    break;
                default:
                    throw Error(n(329))
                }
            }
        }
        return Nt(r, Ye()),
        r.callbackNode === a ? Qm.bind(null, r) : null
    }
    function Nc(r, s) {
        var a = Fi;
        return r.current.memoizedState.isDehydrated && (zr(r, s).flags |= 256),
        r = Oa(r, s),
        r !== 2 && (s = Rt,
        Rt = a,
        s !== null && Mc(s)),
        r
    }
    function Mc(r) {
        Rt === null ? Rt = r : Rt.push.apply(Rt, r)
    }
    function K1(r) {
        for (var s = r; ; ) {
            if (s.flags & 16384) {
                var a = s.updateQueue;
                if (a !== null && (a = a.stores,
                a !== null))
                    for (var u = 0; u < a.length; u++) {
                        var f = a[u]
                          , g = f.getSnapshot;
                        f = f.value;
                        try {
                            if (!rn(g(), f))
                                return !1
                        } catch {
                            return !1
                        }
                    }
            }
            if (a = s.child,
            s.subtreeFlags & 16384 && a !== null)
                a.return = s,
                s = a;
            else {
                if (s === r)
                    break;
                for (; s.sibling === null; ) {
                    if (s.return === null || s.return === r)
                        return !0;
                    s = s.return
                }
                s.sibling.return = s.return,
                s = s.sibling
            }
        }
        return !0
    }
    function hr(r, s) {
        for (s &= ~Ec,
        s &= ~ka,
        r.suspendedLanes |= s,
        r.pingedLanes &= ~s,
        r = r.expirationTimes; 0 < s; ) {
            var a = 31 - nn(s)
              , u = 1 << a;
            r[a] = -1,
            s &= ~u
        }
    }
    function Km(r) {
        if ((Re & 6) !== 0)
            throw Error(n(327));
        ks();
        var s = Uo(r, 0);
        if ((s & 1) === 0)
            return Nt(r, Ye()),
            null;
        var a = Oa(r, s);
        if (r.tag !== 0 && a === 2) {
            var u = cu(r);
            u !== 0 && (s = u,
            a = Nc(r, u))
        }
        if (a === 1)
            throw a = ji,
            zr(r, 0),
            hr(r, s),
            Nt(r, Ye()),
            a;
        if (a === 6)
            throw Error(n(345));
        return r.finishedWork = r.current.alternate,
        r.finishedLanes = s,
        Br(r, Rt, Bn),
        Nt(r, Ye()),
        null
    }
    function Dc(r, s) {
        var a = Re;
        Re |= 1;
        try {
            return r(s)
        } finally {
            Re = a,
            Re === 0 && (Es = Ye() + 500,
            aa && or())
        }
    }
    function Vr(r) {
        dr !== null && dr.tag === 0 && (Re & 6) === 0 && ks();
        var s = Re;
        Re |= 1;
        var a = Xt.transition
          , u = Ie;
        try {
            if (Xt.transition = null,
            Ie = 1,
            r)
                return r()
        } finally {
            Ie = u,
            Xt.transition = a,
            Re = s,
            (Re & 6) === 0 && or()
        }
    }
    function Oc() {
        Vt = _s.current,
        ze(_s)
    }
    function zr(r, s) {
        r.finishedWork = null,
        r.finishedLanes = 0;
        var a = r.timeoutHandle;
        if (a !== -1 && (r.timeoutHandle = -1,
        T1(a)),
        nt !== null)
            for (a = nt.return; a !== null; ) {
                var u = a;
                switch ($u(u),
                u.tag) {
                case 1:
                    u = u.type.childContextTypes,
                    u != null && ia();
                    break;
                case 3:
                    Ts(),
                    ze(Et),
                    ze(gt),
                    nc();
                    break;
                case 5:
                    ec(u);
                    break;
                case 4:
                    Ts();
                    break;
                case 13:
                    ze(We);
                    break;
                case 19:
                    ze(We);
                    break;
                case 10:
                    Zu(u.type._context);
                    break;
                case 22:
                case 23:
                    Oc()
                }
                a = a.return
            }
        if (lt = r,
        nt = r = pr(r.current, null),
        ft = Vt = s,
        st = 0,
        ji = null,
        Ec = ka = Fr = 0,
        Rt = Fi = null,
        Ir !== null) {
            for (s = 0; s < Ir.length; s++)
                if (a = Ir[s],
                u = a.interleaved,
                u !== null) {
                    a.interleaved = null;
                    var f = u.next
                      , g = a.pending;
                    if (g !== null) {
                        var x = g.next;
                        g.next = f,
                        u.next = x
                    }
                    a.pending = u
                }
            Ir = null
        }
        return r
    }
    function qm(r, s) {
        do {
            var a = nt;
            try {
                if (qu(),
                ya.current = Sa,
                va) {
                    for (var u = He.memoizedState; u !== null; ) {
                        var f = u.queue;
                        f !== null && (f.pending = null),
                        u = u.next
                    }
                    va = !1
                }
                if (jr = 0,
                at = rt = He = null,
                Ni = !1,
                Mi = 0,
                _c.current = null,
                a === null || a.return === null) {
                    st = 1,
                    ji = s,
                    nt = null;
                    break
                }
                e: {
                    var g = r
                      , x = a.return
                      , b = a
                      , _ = s;
                    if (s = ft,
                    b.flags |= 32768,
                    _ !== null && typeof _ == "object" && typeof _.then == "function") {
                        var I = _
                          , W = b
                          , H = W.tag;
                        if ((W.mode & 1) === 0 && (H === 0 || H === 11 || H === 15)) {
                            var U = W.alternate;
                            U ? (W.updateQueue = U.updateQueue,
                            W.memoizedState = U.memoizedState,
                            W.lanes = U.lanes) : (W.updateQueue = null,
                            W.memoizedState = null)
                        }
                        var J = xm(x);
                        if (J !== null) {
                            J.flags &= -257,
                            wm(J, x, b, g, s),
                            J.mode & 1 && vm(g, I, s),
                            s = J,
                            _ = I;
                            var re = s.updateQueue;
                            if (re === null) {
                                var se = new Set;
                                se.add(_),
                                s.updateQueue = se
                            } else
                                re.add(_);
                            break e
                        } else {
                            if ((s & 1) === 0) {
                                vm(g, I, s),
                                Ic();
                                break e
                            }
                            _ = Error(n(426))
                        }
                    } else if ($e && b.mode & 1) {
                        var Je = xm(x);
                        if (Je !== null) {
                            (Je.flags & 65536) === 0 && (Je.flags |= 256),
                            wm(Je, x, b, g, s),
                            Qu(bs(_, b));
                            break e
                        }
                    }
                    g = _ = bs(_, b),
                    st !== 4 && (st = 2),
                    Fi === null ? Fi = [g] : Fi.push(g),
                    g = x;
                    do {
                        switch (g.tag) {
                        case 3:
                            g.flags |= 65536,
                            s &= -s,
                            g.lanes |= s;
                            var M = gm(g, _, s);
                            $p(g, M);
                            break e;
                        case 1:
                            b = _;
                            var E = g.type
                              , D = g.stateNode;
                            if ((g.flags & 128) === 0 && (typeof E.getDerivedStateFromError == "function" || D !== null && typeof D.componentDidCatch == "function" && (cr === null || !cr.has(D)))) {
                                g.flags |= 65536,
                                s &= -s,
                                g.lanes |= s;
                                var q = ym(g, b, s);
                                $p(g, q);
                                break e
                            }
                        }
                        g = g.return
                    } while (g !== null)
                }
                Xm(a)
            } catch (oe) {
                s = oe,
                nt === a && a !== null && (nt = a = a.return);
                continue
            }
            break
        } while (!0)
    }
    function Zm() {
        var r = Ea.current;
        return Ea.current = Sa,
        r === null ? Sa : r
    }
    function Ic() {
        (st === 0 || st === 3 || st === 2) && (st = 4),
        lt === null || (Fr & 268435455) === 0 && (ka & 268435455) === 0 || hr(lt, ft)
    }
    function Oa(r, s) {
        var a = Re;
        Re |= 2;
        var u = Zm();
        (lt !== r || ft !== s) && (Bn = null,
        zr(r, s));
        do
            try {
                q1();
                break
            } catch (f) {
                qm(r, f)
            }
        while (!0);
        if (qu(),
        Re = a,
        Ea.current = u,
        nt !== null)
            throw Error(n(261));
        return lt = null,
        ft = 0,
        st
    }
    function q1() {
        for (; nt !== null; )
            Gm(nt)
    }
    function Z1() {
        for (; nt !== null && !wS(); )
            Gm(nt)
    }
    function Gm(r) {
        var s = eg(r.alternate, r, Vt);
        r.memoizedProps = r.pendingProps,
        s === null ? Xm(r) : nt = s,
        _c.current = null
    }
    function Xm(r) {
        var s = r;
        do {
            var a = s.alternate;
            if (r = s.return,
            (s.flags & 32768) === 0) {
                if (a = B1(a, s, Vt),
                a !== null) {
                    nt = a;
                    return
                }
            } else {
                if (a = U1(a, s),
                a !== null) {
                    a.flags &= 32767,
                    nt = a;
                    return
                }
                if (r !== null)
                    r.flags |= 32768,
                    r.subtreeFlags = 0,
                    r.deletions = null;
                else {
                    st = 6,
                    nt = null;
                    return
                }
            }
            if (s = s.sibling,
            s !== null) {
                nt = s;
                return
            }
            nt = s = r
        } while (s !== null);
        st === 0 && (st = 5)
    }
    function Br(r, s, a) {
        var u = Ie
          , f = Xt.transition;
        try {
            Xt.transition = null,
            Ie = 1,
            G1(r, s, a, u)
        } finally {
            Xt.transition = f,
            Ie = u
        }
        return null
    }
    function G1(r, s, a, u) {
        do
            ks();
        while (dr !== null);
        if ((Re & 6) !== 0)
            throw Error(n(327));
        a = r.finishedWork;
        var f = r.finishedLanes;
        if (a === null)
            return null;
        if (r.finishedWork = null,
        r.finishedLanes = 0,
        a === r.current)
            throw Error(n(177));
        r.callbackNode = null,
        r.callbackPriority = 0;
        var g = a.lanes | a.childLanes;
        if (RS(r, g),
        r === lt && (nt = lt = null,
        ft = 0),
        (a.subtreeFlags & 2064) === 0 && (a.flags & 2064) === 0 || Ra || (Ra = !0,
        tg(Fo, function() {
            return ks(),
            null
        })),
        g = (a.flags & 15990) !== 0,
        (a.subtreeFlags & 15990) !== 0 || g) {
            g = Xt.transition,
            Xt.transition = null;
            var x = Ie;
            Ie = 1;
            var b = Re;
            Re |= 4,
            _c.current = null,
            W1(r, a),
            Bm(a, r),
            g1(Iu),
            Ho = !!Ou,
            Iu = Ou = null,
            r.current = a,
            H1(a),
            SS(),
            Re = b,
            Ie = x,
            Xt.transition = g
        } else
            r.current = a;
        if (Ra && (Ra = !1,
        dr = r,
        Na = f),
        g = r.pendingLanes,
        g === 0 && (cr = null),
        bS(a.stateNode),
        Nt(r, Ye()),
        s !== null)
            for (u = r.onRecoverableError,
            a = 0; a < s.length; a++)
                f = s[a],
                u(f.value, {
                    componentStack: f.stack,
                    digest: f.digest
                });
        if (Aa)
            throw Aa = !1,
            r = Ac,
            Ac = null,
            r;
        return (Na & 1) !== 0 && r.tag !== 0 && ks(),
        g = r.pendingLanes,
        (g & 1) !== 0 ? r === Rc ? Vi++ : (Vi = 0,
        Rc = r) : Vi = 0,
        or(),
        null
    }
    function ks() {
        if (dr !== null) {
            var r = Vh(Na)
              , s = Xt.transition
              , a = Ie;
            try {
                if (Xt.transition = null,
                Ie = 16 > r ? 16 : r,
                dr === null)
                    var u = !1;
                else {
                    if (r = dr,
                    dr = null,
                    Na = 0,
                    (Re & 6) !== 0)
                        throw Error(n(331));
                    var f = Re;
                    for (Re |= 4,
                    ne = r.current; ne !== null; ) {
                        var g = ne
                          , x = g.child;
                        if ((ne.flags & 16) !== 0) {
                            var b = g.deletions;
                            if (b !== null) {
                                for (var _ = 0; _ < b.length; _++) {
                                    var I = b[_];
                                    for (ne = I; ne !== null; ) {
                                        var W = ne;
                                        switch (W.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Li(8, W, g)
                                        }
                                        var H = W.child;
                                        if (H !== null)
                                            H.return = W,
                                            ne = H;
                                        else
                                            for (; ne !== null; ) {
                                                W = ne;
                                                var U = W.sibling
                                                  , J = W.return;
                                                if (Lm(W),
                                                W === I) {
                                                    ne = null;
                                                    break
                                                }
                                                if (U !== null) {
                                                    U.return = J,
                                                    ne = U;
                                                    break
                                                }
                                                ne = J
                                            }
                                    }
                                }
                                var re = g.alternate;
                                if (re !== null) {
                                    var se = re.child;
                                    if (se !== null) {
                                        re.child = null;
                                        do {
                                            var Je = se.sibling;
                                            se.sibling = null,
                                            se = Je
                                        } while (se !== null)
                                    }
                                }
                                ne = g
                            }
                        }
                        if ((g.subtreeFlags & 2064) !== 0 && x !== null)
                            x.return = g,
                            ne = x;
                        else
                            e: for (; ne !== null; ) {
                                if (g = ne,
                                (g.flags & 2048) !== 0)
                                    switch (g.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Li(9, g, g.return)
                                    }
                                var M = g.sibling;
                                if (M !== null) {
                                    M.return = g.return,
                                    ne = M;
                                    break e
                                }
                                ne = g.return
                            }
                    }
                    var E = r.current;
                    for (ne = E; ne !== null; ) {
                        x = ne;
                        var D = x.child;
                        if ((x.subtreeFlags & 2064) !== 0 && D !== null)
                            D.return = x,
                            ne = D;
                        else
                            e: for (x = E; ne !== null; ) {
                                if (b = ne,
                                (b.flags & 2048) !== 0)
                                    try {
                                        switch (b.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            _a(9, b)
                                        }
                                    } catch (oe) {
                                        Ze(b, b.return, oe)
                                    }
                                if (b === x) {
                                    ne = null;
                                    break e
                                }
                                var q = b.sibling;
                                if (q !== null) {
                                    q.return = b.return,
                                    ne = q;
                                    break e
                                }
                                ne = b.return
                            }
                    }
                    if (Re = f,
                    or(),
                    xn && typeof xn.onPostCommitFiberRoot == "function")
                        try {
                            xn.onPostCommitFiberRoot(Vo, r)
                        } catch {}
                    u = !0
                }
                return u
            } finally {
                Ie = a,
                Xt.transition = s
            }
        }
        return !1
    }
    function Ym(r, s, a) {
        s = bs(a, s),
        s = gm(r, s, 1),
        r = lr(r, s, 1),
        s = Ct(),
        r !== null && (ui(r, 1, s),
        Nt(r, s))
    }
    function Ze(r, s, a) {
        if (r.tag === 3)
            Ym(r, r, a);
        else
            for (; s !== null; ) {
                if (s.tag === 3) {
                    Ym(s, r, a);
                    break
                } else if (s.tag === 1) {
                    var u = s.stateNode;
                    if (typeof s.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (cr === null || !cr.has(u))) {
                        r = bs(a, r),
                        r = ym(s, r, 1),
                        s = lr(s, r, 1),
                        r = Ct(),
                        s !== null && (ui(s, 1, r),
                        Nt(s, r));
                        break
                    }
                }
                s = s.return
            }
    }
    function X1(r, s, a) {
        var u = r.pingCache;
        u !== null && u.delete(s),
        s = Ct(),
        r.pingedLanes |= r.suspendedLanes & a,
        lt === r && (ft & a) === a && (st === 4 || st === 3 && (ft & 130023424) === ft && 500 > Ye() - kc ? zr(r, 0) : Ec |= a),
        Nt(r, s)
    }
    function Jm(r, s) {
        s === 0 && ((r.mode & 1) === 0 ? s = 1 : (s = Bo,
        Bo <<= 1,
        (Bo & 130023424) === 0 && (Bo = 4194304)));
        var a = Ct();
        r = Fn(r, s),
        r !== null && (ui(r, s, a),
        Nt(r, a))
    }
    function Y1(r) {
        var s = r.memoizedState
          , a = 0;
        s !== null && (a = s.retryLane),
        Jm(r, a)
    }
    function J1(r, s) {
        var a = 0;
        switch (r.tag) {
        case 13:
            var u = r.stateNode
              , f = r.memoizedState;
            f !== null && (a = f.retryLane);
            break;
        case 19:
            u = r.stateNode;
            break;
        default:
            throw Error(n(314))
        }
        u !== null && u.delete(s),
        Jm(r, a)
    }
    var eg;
    eg = function(r, s, a) {
        if (r !== null)
            if (r.memoizedProps !== s.pendingProps || Et.current)
                At = !0;
            else {
                if ((r.lanes & a) === 0 && (s.flags & 128) === 0)
                    return At = !1,
                    z1(r, s, a);
                At = (r.flags & 131072) !== 0
            }
        else
            At = !1,
            $e && (s.flags & 1048576) !== 0 && Dp(s, ua, s.index);
        switch (s.lanes = 0,
        s.tag) {
        case 2:
            var u = s.type;
            ba(r, s),
            r = s.pendingProps;
            var f = gs(s, gt.current);
            Ps(s, a),
            f = ic(null, s, u, r, f, a);
            var g = oc();
            return s.flags |= 1,
            typeof f == "object" && f !== null && typeof f.render == "function" && f.$$typeof === void 0 ? (s.tag = 1,
            s.memoizedState = null,
            s.updateQueue = null,
            kt(u) ? (g = !0,
            oa(s)) : g = !1,
            s.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null,
            Yu(s),
            f.updater = Pa,
            s.stateNode = f,
            f._reactInternals = s,
            fc(s, u, r, a),
            s = gc(null, s, u, !0, g, a)) : (s.tag = 0,
            $e && g && Uu(s),
            bt(null, s, f, a),
            s = s.child),
            s;
        case 16:
            u = s.elementType;
            e: {
                switch (ba(r, s),
                r = s.pendingProps,
                f = u._init,
                u = f(u._payload),
                s.type = u,
                f = s.tag = tP(u),
                r = on(u, r),
                f) {
                case 0:
                    s = mc(null, s, u, r, a);
                    break e;
                case 1:
                    s = _m(null, s, u, r, a);
                    break e;
                case 11:
                    s = Sm(null, s, u, r, a);
                    break e;
                case 14:
                    s = Pm(null, s, u, on(u.type, r), a);
                    break e
                }
                throw Error(n(306, u, ""))
            }
            return s;
        case 0:
            return u = s.type,
            f = s.pendingProps,
            f = s.elementType === u ? f : on(u, f),
            mc(r, s, u, f, a);
        case 1:
            return u = s.type,
            f = s.pendingProps,
            f = s.elementType === u ? f : on(u, f),
            _m(r, s, u, f, a);
        case 3:
            e: {
                if (Em(s),
                r === null)
                    throw Error(n(387));
                u = s.pendingProps,
                g = s.memoizedState,
                f = g.element,
                Up(r, s),
                ma(s, u, null, a);
                var x = s.memoizedState;
                if (u = x.element,
                g.isDehydrated)
                    if (g = {
                        element: u,
                        isDehydrated: !1,
                        cache: x.cache,
                        pendingSuspenseBoundaries: x.pendingSuspenseBoundaries,
                        transitions: x.transitions
                    },
                    s.updateQueue.baseState = g,
                    s.memoizedState = g,
                    s.flags & 256) {
                        f = bs(Error(n(423)), s),
                        s = km(r, s, u, a, f);
                        break e
                    } else if (u !== f) {
                        f = bs(Error(n(424)), s),
                        s = km(r, s, u, a, f);
                        break e
                    } else
                        for (Ft = rr(s.stateNode.containerInfo.firstChild),
                        jt = s,
                        $e = !0,
                        sn = null,
                        a = zp(s, null, u, a),
                        s.child = a; a; )
                            a.flags = a.flags & -3 | 4096,
                            a = a.sibling;
                else {
                    if (xs(),
                    u === f) {
                        s = zn(r, s, a);
                        break e
                    }
                    bt(r, s, u, a)
                }
                s = s.child
            }
            return s;
        case 5:
            return Hp(s),
            r === null && Hu(s),
            u = s.type,
            f = s.pendingProps,
            g = r !== null ? r.memoizedProps : null,
            x = f.children,
            Lu(u, f) ? x = null : g !== null && Lu(u, g) && (s.flags |= 32),
            Cm(r, s),
            bt(r, s, x, a),
            s.child;
        case 6:
            return r === null && Hu(s),
            null;
        case 13:
            return Am(r, s, a);
        case 4:
            return Ju(s, s.stateNode.containerInfo),
            u = s.pendingProps,
            r === null ? s.child = ws(s, null, u, a) : bt(r, s, u, a),
            s.child;
        case 11:
            return u = s.type,
            f = s.pendingProps,
            f = s.elementType === u ? f : on(u, f),
            Sm(r, s, u, f, a);
        case 7:
            return bt(r, s, s.pendingProps, a),
            s.child;
        case 8:
            return bt(r, s, s.pendingProps.children, a),
            s.child;
        case 12:
            return bt(r, s, s.pendingProps.children, a),
            s.child;
        case 10:
            e: {
                if (u = s.type._context,
                f = s.pendingProps,
                g = s.memoizedProps,
                x = f.value,
                Fe(fa, u._currentValue),
                u._currentValue = x,
                g !== null)
                    if (rn(g.value, x)) {
                        if (g.children === f.children && !Et.current) {
                            s = zn(r, s, a);
                            break e
                        }
                    } else
                        for (g = s.child,
                        g !== null && (g.return = s); g !== null; ) {
                            var b = g.dependencies;
                            if (b !== null) {
                                x = g.child;
                                for (var _ = b.firstContext; _ !== null; ) {
                                    if (_.context === u) {
                                        if (g.tag === 1) {
                                            _ = Vn(-1, a & -a),
                                            _.tag = 2;
                                            var I = g.updateQueue;
                                            if (I !== null) {
                                                I = I.shared;
                                                var W = I.pending;
                                                W === null ? _.next = _ : (_.next = W.next,
                                                W.next = _),
                                                I.pending = _
                                            }
                                        }
                                        g.lanes |= a,
                                        _ = g.alternate,
                                        _ !== null && (_.lanes |= a),
                                        Gu(g.return, a, s),
                                        b.lanes |= a;
                                        break
                                    }
                                    _ = _.next
                                }
                            } else if (g.tag === 10)
                                x = g.type === s.type ? null : g.child;
                            else if (g.tag === 18) {
                                if (x = g.return,
                                x === null)
                                    throw Error(n(341));
                                x.lanes |= a,
                                b = x.alternate,
                                b !== null && (b.lanes |= a),
                                Gu(x, a, s),
                                x = g.sibling
                            } else
                                x = g.child;
                            if (x !== null)
                                x.return = g;
                            else
                                for (x = g; x !== null; ) {
                                    if (x === s) {
                                        x = null;
                                        break
                                    }
                                    if (g = x.sibling,
                                    g !== null) {
                                        g.return = x.return,
                                        x = g;
                                        break
                                    }
                                    x = x.return
                                }
                            g = x
                        }
                bt(r, s, f.children, a),
                s = s.child
            }
            return s;
        case 9:
            return f = s.type,
            u = s.pendingProps.children,
            Ps(s, a),
            f = Zt(f),
            u = u(f),
            s.flags |= 1,
            bt(r, s, u, a),
            s.child;
        case 14:
            return u = s.type,
            f = on(u, s.pendingProps),
            f = on(u.type, f),
            Pm(r, s, u, f, a);
        case 15:
            return Tm(r, s, s.type, s.pendingProps, a);
        case 17:
            return u = s.type,
            f = s.pendingProps,
            f = s.elementType === u ? f : on(u, f),
            ba(r, s),
            s.tag = 1,
            kt(u) ? (r = !0,
            oa(s)) : r = !1,
            Ps(s, a),
            pm(s, u, f),
            fc(s, u, f, a),
            gc(null, s, u, !0, r, a);
        case 19:
            return Nm(r, s, a);
        case 22:
            return bm(r, s, a)
        }
        throw Error(n(156, s.tag))
    }
    ;
    function tg(r, s) {
        return Oh(r, s)
    }
    function eP(r, s, a, u) {
        this.tag = r,
        this.key = a,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.ref = null,
        this.pendingProps = s,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = u,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
    }
    function Yt(r, s, a, u) {
        return new eP(r,s,a,u)
    }
    function Lc(r) {
        return r = r.prototype,
        !(!r || !r.isReactComponent)
    }
    function tP(r) {
        if (typeof r == "function")
            return Lc(r) ? 1 : 0;
        if (r != null) {
            if (r = r.$$typeof,
            r === le)
                return 11;
            if (r === _e)
                return 14
        }
        return 2
    }
    function pr(r, s) {
        var a = r.alternate;
        return a === null ? (a = Yt(r.tag, s, r.key, r.mode),
        a.elementType = r.elementType,
        a.type = r.type,
        a.stateNode = r.stateNode,
        a.alternate = r,
        r.alternate = a) : (a.pendingProps = s,
        a.type = r.type,
        a.flags = 0,
        a.subtreeFlags = 0,
        a.deletions = null),
        a.flags = r.flags & 14680064,
        a.childLanes = r.childLanes,
        a.lanes = r.lanes,
        a.child = r.child,
        a.memoizedProps = r.memoizedProps,
        a.memoizedState = r.memoizedState,
        a.updateQueue = r.updateQueue,
        s = r.dependencies,
        a.dependencies = s === null ? null : {
            lanes: s.lanes,
            firstContext: s.firstContext
        },
        a.sibling = r.sibling,
        a.index = r.index,
        a.ref = r.ref,
        a
    }
    function Ia(r, s, a, u, f, g) {
        var x = 2;
        if (u = r,
        typeof r == "function")
            Lc(r) && (x = 1);
        else if (typeof r == "string")
            x = 5;
        else
            e: switch (r) {
            case z:
                return Ur(a.children, f, g, s);
            case K:
                x = 8,
                f |= 8;
                break;
            case ie:
                return r = Yt(12, a, s, f | 2),
                r.elementType = ie,
                r.lanes = g,
                r;
            case Se:
                return r = Yt(13, a, s, f),
                r.elementType = Se,
                r.lanes = g,
                r;
            case X:
                return r = Yt(19, a, s, f),
                r.elementType = X,
                r.lanes = g,
                r;
            case te:
                return La(a, f, g, s);
            default:
                if (typeof r == "object" && r !== null)
                    switch (r.$$typeof) {
                    case ue:
                        x = 10;
                        break e;
                    case ve:
                        x = 9;
                        break e;
                    case le:
                        x = 11;
                        break e;
                    case _e:
                        x = 14;
                        break e;
                    case he:
                        x = 16,
                        u = null;
                        break e
                    }
                throw Error(n(130, r == null ? r : typeof r, ""))
            }
        return s = Yt(x, a, s, f),
        s.elementType = r,
        s.type = u,
        s.lanes = g,
        s
    }
    function Ur(r, s, a, u) {
        return r = Yt(7, r, u, s),
        r.lanes = a,
        r
    }
    function La(r, s, a, u) {
        return r = Yt(22, r, u, s),
        r.elementType = te,
        r.lanes = a,
        r.stateNode = {
            isHidden: !1
        },
        r
    }
    function jc(r, s, a) {
        return r = Yt(6, r, null, s),
        r.lanes = a,
        r
    }
    function Fc(r, s, a) {
        return s = Yt(4, r.children !== null ? r.children : [], r.key, s),
        s.lanes = a,
        s.stateNode = {
            containerInfo: r.containerInfo,
            pendingChildren: null,
            implementation: r.implementation
        },
        s
    }
    function nP(r, s, a, u, f) {
        this.tag = s,
        this.containerInfo = r,
        this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.pendingContext = this.context = null,
        this.callbackPriority = 0,
        this.eventTimes = du(0),
        this.expirationTimes = du(-1),
        this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = du(0),
        this.identifierPrefix = u,
        this.onRecoverableError = f,
        this.mutableSourceEagerHydrationData = null
    }
    function Vc(r, s, a, u, f, g, x, b, _) {
        return r = new nP(r,s,a,b,_),
        s === 1 ? (s = 1,
        g === !0 && (s |= 8)) : s = 0,
        g = Yt(3, null, null, s),
        r.current = g,
        g.stateNode = r,
        g.memoizedState = {
            element: u,
            isDehydrated: a,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null
        },
        Yu(g),
        r
    }
    function rP(r, s, a) {
        var u = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: V,
            key: u == null ? null : "" + u,
            children: r,
            containerInfo: s,
            implementation: a
        }
    }
    function ng(r) {
        if (!r)
            return ir;
        r = r._reactInternals;
        e: {
            if (Rr(r) !== r || r.tag !== 1)
                throw Error(n(170));
            var s = r;
            do {
                switch (s.tag) {
                case 3:
                    s = s.stateNode.context;
                    break e;
                case 1:
                    if (kt(s.type)) {
                        s = s.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
                }
                s = s.return
            } while (s !== null);
            throw Error(n(171))
        }
        if (r.tag === 1) {
            var a = r.type;
            if (kt(a))
                return Rp(r, a, s)
        }
        return s
    }
    function rg(r, s, a, u, f, g, x, b, _) {
        return r = Vc(a, u, !0, r, f, g, x, b, _),
        r.context = ng(null),
        a = r.current,
        u = Ct(),
        f = fr(a),
        g = Vn(u, f),
        g.callback = s ?? null,
        lr(a, g, f),
        r.current.lanes = f,
        ui(r, f, u),
        Nt(r, u),
        r
    }
    function ja(r, s, a, u) {
        var f = s.current
          , g = Ct()
          , x = fr(f);
        return a = ng(a),
        s.context === null ? s.context = a : s.pendingContext = a,
        s = Vn(g, x),
        s.payload = {
            element: r
        },
        u = u === void 0 ? null : u,
        u !== null && (s.callback = u),
        r = lr(f, s, x),
        r !== null && (un(r, f, x, g),
        pa(r, f, x)),
        x
    }
    function Fa(r) {
        return r = r.current,
        r.child ? (r.child.tag === 5,
        r.child.stateNode) : null
    }
    function sg(r, s) {
        if (r = r.memoizedState,
        r !== null && r.dehydrated !== null) {
            var a = r.retryLane;
            r.retryLane = a !== 0 && a < s ? a : s
        }
    }
    function zc(r, s) {
        sg(r, s),
        (r = r.alternate) && sg(r, s)
    }
    function sP() {
        return null
    }
    var ig = typeof reportError == "function" ? reportError : function(r) {
        console.error(r)
    }
    ;
    function Bc(r) {
        this._internalRoot = r
    }
    Va.prototype.render = Bc.prototype.render = function(r) {
        var s = this._internalRoot;
        if (s === null)
            throw Error(n(409));
        ja(r, s, null, null)
    }
    ,
    Va.prototype.unmount = Bc.prototype.unmount = function() {
        var r = this._internalRoot;
        if (r !== null) {
            this._internalRoot = null;
            var s = r.containerInfo;
            Vr(function() {
                ja(null, r, null, null)
            }),
            s[On] = null
        }
    }
    ;
    function Va(r) {
        this._internalRoot = r
    }
    Va.prototype.unstable_scheduleHydration = function(r) {
        if (r) {
            var s = Uh();
            r = {
                blockedOn: null,
                target: r,
                priority: s
            };
            for (var a = 0; a < er.length && s !== 0 && s < er[a].priority; a++)
                ;
            er.splice(a, 0, r),
            a === 0 && Hh(r)
        }
    }
    ;
    function Uc(r) {
        return !(!r || r.nodeType !== 1 && r.nodeType !== 9 && r.nodeType !== 11)
    }
    function za(r) {
        return !(!r || r.nodeType !== 1 && r.nodeType !== 9 && r.nodeType !== 11 && (r.nodeType !== 8 || r.nodeValue !== " react-mount-point-unstable "))
    }
    function og() {}
    function iP(r, s, a, u, f) {
        if (f) {
            if (typeof u == "function") {
                var g = u;
                u = function() {
                    var I = Fa(x);
                    g.call(I)
                }
            }
            var x = rg(s, u, r, 0, null, !1, !1, "", og);
            return r._reactRootContainer = x,
            r[On] = x.current,
            Ti(r.nodeType === 8 ? r.parentNode : r),
            Vr(),
            x
        }
        for (; f = r.lastChild; )
            r.removeChild(f);
        if (typeof u == "function") {
            var b = u;
            u = function() {
                var I = Fa(_);
                b.call(I)
            }
        }
        var _ = Vc(r, 0, !1, null, null, !1, !1, "", og);
        return r._reactRootContainer = _,
        r[On] = _.current,
        Ti(r.nodeType === 8 ? r.parentNode : r),
        Vr(function() {
            ja(s, _, a, u)
        }),
        _
    }
    function Ba(r, s, a, u, f) {
        var g = a._reactRootContainer;
        if (g) {
            var x = g;
            if (typeof f == "function") {
                var b = f;
                f = function() {
                    var _ = Fa(x);
                    b.call(_)
                }
            }
            ja(s, x, r, f)
        } else
            x = iP(a, s, r, f, u);
        return Fa(x)
    }
    zh = function(r) {
        switch (r.tag) {
        case 3:
            var s = r.stateNode;
            if (s.current.memoizedState.isDehydrated) {
                var a = li(s.pendingLanes);
                a !== 0 && (fu(s, a | 1),
                Nt(s, Ye()),
                (Re & 6) === 0 && (Es = Ye() + 500,
                or()))
            }
            break;
        case 13:
            Vr(function() {
                var u = Fn(r, 1);
                if (u !== null) {
                    var f = Ct();
                    un(u, r, 1, f)
                }
            }),
            zc(r, 1)
        }
    }
    ,
    hu = function(r) {
        if (r.tag === 13) {
            var s = Fn(r, 134217728);
            if (s !== null) {
                var a = Ct();
                un(s, r, 134217728, a)
            }
            zc(r, 134217728)
        }
    }
    ,
    Bh = function(r) {
        if (r.tag === 13) {
            var s = fr(r)
              , a = Fn(r, s);
            if (a !== null) {
                var u = Ct();
                un(a, r, s, u)
            }
            zc(r, s)
        }
    }
    ,
    Uh = function() {
        return Ie
    }
    ,
    $h = function(r, s) {
        var a = Ie;
        try {
            return Ie = r,
            s()
        } finally {
            Ie = a
        }
    }
    ,
    iu = function(r, s, a) {
        switch (s) {
        case "input":
            if (Xl(r, a),
            s = a.name,
            a.type === "radio" && s != null) {
                for (a = r; a.parentNode; )
                    a = a.parentNode;
                for (a = a.querySelectorAll("input[name=" + JSON.stringify("" + s) + '][type="radio"]'),
                s = 0; s < a.length; s++) {
                    var u = a[s];
                    if (u !== r && u.form === r.form) {
                        var f = sa(u);
                        if (!f)
                            throw Error(n(90));
                        Oo(u),
                        Xl(u, f)
                    }
                }
            }
            break;
        case "textarea":
            vh(r, a);
            break;
        case "select":
            s = a.value,
            s != null && ss(r, !!a.multiple, s, !1)
        }
    }
    ,
    Eh = Dc,
    kh = Vr;
    var oP = {
        usingClientEntryPoint: !1,
        Events: [_i, ps, sa, Ch, _h, Dc]
    }
      , zi = {
        findFiberByHostInstance: Nr,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    }
      , aP = {
        bundleType: zi.bundleType,
        version: zi.version,
        rendererPackageName: zi.rendererPackageName,
        rendererConfig: zi.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: j.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(r) {
            return r = Mh(r),
            r === null ? null : r.stateNode
        },
        findFiberByHostInstance: zi.findFiberByHostInstance || sP,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Ua = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Ua.isDisabled && Ua.supportsFiber)
            try {
                Vo = Ua.inject(aP),
                xn = Ua
            } catch {}
    }
    return Mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = oP,
    Mt.createPortal = function(r, s) {
        var a = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!Uc(s))
            throw Error(n(200));
        return rP(r, s, null, a)
    }
    ,
    Mt.createRoot = function(r, s) {
        if (!Uc(r))
            throw Error(n(299));
        var a = !1
          , u = ""
          , f = ig;
        return s != null && (s.unstable_strictMode === !0 && (a = !0),
        s.identifierPrefix !== void 0 && (u = s.identifierPrefix),
        s.onRecoverableError !== void 0 && (f = s.onRecoverableError)),
        s = Vc(r, 1, !1, null, null, a, !1, u, f),
        r[On] = s.current,
        Ti(r.nodeType === 8 ? r.parentNode : r),
        new Bc(s)
    }
    ,
    Mt.findDOMNode = function(r) {
        if (r == null)
            return null;
        if (r.nodeType === 1)
            return r;
        var s = r._reactInternals;
        if (s === void 0)
            throw typeof r.render == "function" ? Error(n(188)) : (r = Object.keys(r).join(","),
            Error(n(268, r)));
        return r = Mh(s),
        r = r === null ? null : r.stateNode,
        r
    }
    ,
    Mt.flushSync = function(r) {
        return Vr(r)
    }
    ,
    Mt.hydrate = function(r, s, a) {
        if (!za(s))
            throw Error(n(200));
        return Ba(null, r, s, !0, a)
    }
    ,
    Mt.hydrateRoot = function(r, s, a) {
        if (!Uc(r))
            throw Error(n(405));
        var u = a != null && a.hydratedSources || null
          , f = !1
          , g = ""
          , x = ig;
        if (a != null && (a.unstable_strictMode === !0 && (f = !0),
        a.identifierPrefix !== void 0 && (g = a.identifierPrefix),
        a.onRecoverableError !== void 0 && (x = a.onRecoverableError)),
        s = rg(s, null, r, 1, a ?? null, f, !1, g, x),
        r[On] = s.current,
        Ti(r),
        u)
            for (r = 0; r < u.length; r++)
                a = u[r],
                f = a._getVersion,
                f = f(a._source),
                s.mutableSourceEagerHydrationData == null ? s.mutableSourceEagerHydrationData = [a, f] : s.mutableSourceEagerHydrationData.push(a, f);
        return new Va(s)
    }
    ,
    Mt.render = function(r, s, a) {
        if (!za(s))
            throw Error(n(200));
        return Ba(null, r, s, !1, a)
    }
    ,
    Mt.unmountComponentAtNode = function(r) {
        if (!za(r))
            throw Error(n(40));
        return r._reactRootContainer ? (Vr(function() {
            Ba(null, null, r, !1, function() {
                r._reactRootContainer = null,
                r[On] = null
            })
        }),
        !0) : !1
    }
    ,
    Mt.unstable_batchedUpdates = Dc,
    Mt.unstable_renderSubtreeIntoContainer = function(r, s, a, u) {
        if (!za(a))
            throw Error(n(200));
        if (r == null || r._reactInternals === void 0)
            throw Error(n(38));
        return Ba(r, s, a, !1, u)
    }
    ,
    Mt.version = "18.3.1-next-f1338f8080-20240426",
    Mt
}
var pg;
function _v() {
    if (pg)
        return Hc.exports;
    pg = 1;
    function t() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)
            } catch (e) {
                console.error(e)
            }
    }
    return t(),
    Hc.exports = mP(),
    Hc.exports
}
var mg;
function gP() {
    if (mg)
        return $a;
    mg = 1;
    var t = _v();
    return $a.createRoot = t.createRoot,
    $a.hydrateRoot = t.hydrateRoot,
    $a
}
var yP = gP();
function vP(t, e) {
    if (t instanceof RegExp)
        return {
            keys: !1,
            pattern: t
        };
    var n, i, o, l, c = [], d = "", h = t.split("/");
    for (h[0] || h.shift(); o = h.shift(); )
        n = o[0],
        n === "*" ? (c.push(n),
        d += o[1] === "?" ? "(?:/(.*))?" : "/(.*)") : n === ":" ? (i = o.indexOf("?", 1),
        l = o.indexOf(".", 1),
        c.push(o.substring(1, ~i ? i : ~l ? l : o.length)),
        d += ~i && !~l ? "(?:/([^/]+?))?" : "/([^/]+?)",
        ~l && (d += (~i ? "?" : "") + "\\" + o.substring(l))) : d += "/" + o;
    return {
        keys: c,
        pattern: new RegExp("^" + d + (e ? "(?=$|/)" : "/?$"),"i")
    }
}
var S = Al();
const vr = Cv(S)
  , xP = uP({
    __proto__: null,
    default: vr
}, [S]);
var qc = {
    exports: {}
}
  , Zc = {};
var gg;
function wP() {
    if (gg)
        return Zc;
    gg = 1;
    var t = Al();
    function e(y, v) {
        return y === v && (y !== 0 || 1 / y === 1 / v) || y !== y && v !== v
    }
    var n = typeof Object.is == "function" ? Object.is : e
      , i = t.useState
      , o = t.useEffect
      , l = t.useLayoutEffect
      , c = t.useDebugValue;
    function d(y, v) {
        var w = v()
          , C = i({
            inst: {
                value: w,
                getSnapshot: v
            }
        })
          , P = C[0].inst
          , T = C[1];
        return l(function() {
            P.value = w,
            P.getSnapshot = v,
            h(P) && T({
                inst: P
            })
        }, [y, w, v]),
        o(function() {
            return h(P) && T({
                inst: P
            }),
            y(function() {
                h(P) && T({
                    inst: P
                })
            })
        }, [y]),
        c(w),
        w
    }
    function h(y) {
        var v = y.getSnapshot;
        y = y.value;
        try {
            var w = v();
            return !n(y, w)
        } catch {
            return !0
        }
    }
    function p(y, v) {
        return v()
    }
    var m = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? p : d;
    return Zc.useSyncExternalStore = t.useSyncExternalStore !== void 0 ? t.useSyncExternalStore : m,
    Zc
}
var yg;
function SP() {
    return yg || (yg = 1,
    qc.exports = wP()),
    qc.exports
}
var PP = SP();
const TP = xP.useInsertionEffect
  , bP = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u"
  , CP = bP ? S.useLayoutEffect : S.useEffect
  , _P = TP || CP
  , Ev = t=>{
    const e = S.useRef([t, (...n)=>e[0](...n)]).current;
    return _P(()=>{
        e[0] = t
    }
    ),
    e[1]
}
  , EP = "popstate"
  , lf = "pushState"
  , uf = "replaceState"
  , kP = "hashchange"
  , vg = [EP, lf, uf, kP]
  , AP = t=>{
    for (const e of vg)
        addEventListener(e, t);
    return ()=>{
        for (const e of vg)
            removeEventListener(e, t)
    }
}
  , kv = (t,e)=>PP.useSyncExternalStore(AP, t, e)
  , RP = ()=>location.search
  , NP = ({ssrSearch: t=""}={})=>kv(RP, ()=>t)
  , xg = ()=>location.pathname
  , MP = ({ssrPath: t}={})=>kv(xg, t ? ()=>t : xg)
  , DP = (t,{replace: e=!1, state: n=null}={})=>history[e ? uf : lf](n, "", t)
  , OP = (t={})=>[MP(t), DP]
  , wg = Symbol.for("wouter_v3");
if (typeof history < "u" && typeof window[wg] > "u") {
    for (const t of [lf, uf]) {
        const e = history[t];
        history[t] = function() {
            const n = e.apply(this, arguments)
              , i = new Event(t);
            return i.arguments = arguments,
            dispatchEvent(i),
            n
        }
    }
    Object.defineProperty(window, wg, {
        value: !0
    })
}
const IP = (t,e)=>e.toLowerCase().indexOf(t.toLowerCase()) ? "~" + e : e.slice(t.length) || "/"
  , Av = (t="")=>t === "/" ? "" : t
  , LP = (t,e)=>t[0] === "~" ? t.slice(1) : Av(e) + t
  , jP = (t="",e)=>IP(Sg(Av(t)), Sg(e))
  , Sg = t=>{
    try {
        return decodeURI(t)
    } catch {
        return t
    }
}
  , Rv = {
    hook: OP,
    searchHook: NP,
    parser: vP,
    base: "",
    ssrPath: void 0,
    ssrSearch: void 0,
    hrefs: t=>t
}
  , Nv = S.createContext(Rv)
  , Rl = ()=>S.useContext(Nv)
  , Mv = {}
  , Dv = S.createContext(Mv)
  , FP = ()=>S.useContext(Dv)
  , cf = t=>{
    const [e,n] = t.hook(t);
    return [jP(t.base, e), Ev((i,o)=>n(LP(i, t.base), o))]
}
  , Ov = (t,e,n,i)=>{
    const {pattern: o, keys: l} = e instanceof RegExp ? {
        keys: !1,
        pattern: e
    } : t(e || "*", i)
      , c = o.exec(n) || []
      , [d,...h] = c;
    return d !== void 0 ? [!0, (()=>{
        const p = l !== !1 ? Object.fromEntries(l.map((y,v)=>[y, h[v]])) : c.groups;
        let m = {
            ...h
        };
        return p && Object.assign(m, p),
        m
    }
    )(), ...i ? [d] : []] : [!1, null]
}
  , VP = ({children: t, ...e})=>{
    const n = Rl()
      , i = e.hook ? Rv : n;
    let o = i;
    const [l,c] = e.ssrPath?.split("?") ?? [];
    c && (e.ssrSearch = c,
    e.ssrPath = l),
    e.hrefs = e.hrefs ?? e.hook?.hrefs;
    let d = S.useRef({})
      , h = d.current
      , p = h;
    for (let m in i) {
        const y = m === "base" ? i[m] + (e[m] || "") : e[m] || i[m];
        h === p && y !== p[m] && (d.current = p = {
            ...p
        }),
        p[m] = y,
        y !== i[m] && (o = p)
    }
    return S.createElement(Nv.Provider, {
        value: o,
        children: t
    })
}
  , Pg = ({children: t, component: e},n)=>e ? S.createElement(e, {
    params: n
}) : typeof t == "function" ? t(n) : t
  , zP = t=>{
    let e = S.useRef(Mv)
      , n = e.current;
    for (const i in t)
        t[i] !== n[i] && (n = t);
    return Object.keys(t).length === 0 && (n = t),
    e.current = n
}
  , Tg = ({path: t, nest: e, match: n, ...i})=>{
    const o = Rl()
      , [l] = cf(o)
      , [c,d,h] = n ?? Ov(o.parser, t, l, e)
      , p = zP({
        ...FP(),
        ...d
    });
    if (!c)
        return null;
    const m = h ? S.createElement(VP, {
        base: h
    }, Pg(i, p)) : Pg(i, p);
    return S.createElement(Dv.Provider, {
        value: p,
        children: m
    })
}
;
S.forwardRef((t,e)=>{
    const n = Rl()
      , [i,o] = cf(n)
      , {to: l="", href: c=l, onClick: d, asChild: h, children: p, className: m, replace: y, state: v, ...w} = t
      , C = Ev(T=>{
        T.ctrlKey || T.metaKey || T.altKey || T.shiftKey || T.button !== 0 || (d?.(T),
        T.defaultPrevented || (T.preventDefault(),
        o(c, t)))
    }
    )
      , P = n.hrefs(c[0] === "~" ? c.slice(1) : n.base + c, n);
    return h && S.isValidElement(p) ? S.cloneElement(p, {
        onClick: C,
        href: P
    }) : S.createElement("a", {
        ...w,
        onClick: C,
        href: P,
        className: m?.call ? m(i === c) : m,
        children: p,
        ref: e
    })
}
);
const Iv = t=>Array.isArray(t) ? t.flatMap(e=>Iv(e && e.type === S.Fragment ? e.props.children : e)) : [t]
  , BP = ({children: t, location: e})=>{
    const n = Rl()
      , [i] = cf(n);
    for (const o of Iv(t)) {
        let l = 0;
        if (S.isValidElement(o) && (l = Ov(n.parser, o.props.path, e || i, o.props.nest))[0])
            return S.cloneElement(o, {
                match: l
            })
    }
    return null
}
;
var Gs = class {
    constructor() {
        this.listeners = new Set,
        this.subscribe = this.subscribe.bind(this)
    }
    subscribe(t) {
        return this.listeners.add(t),
        this.onSubscribe(),
        ()=>{
            this.listeners.delete(t),
            this.onUnsubscribe()
        }
    }
    hasListeners() {
        return this.listeners.size > 0
    }
    onSubscribe() {}
    onUnsubscribe() {}
}
  , Zr = typeof window > "u" || "Deno"in globalThis;
function tn() {}
function UP(t, e) {
    return typeof t == "function" ? t(e) : t
}
function Pd(t) {
    return typeof t == "number" && t >= 0 && t !== 1 / 0
}
function Lv(t, e) {
    return Math.max(t + (e || 0) - Date.now(), 0)
}
function Ls(t, e) {
    return typeof t == "function" ? t(e) : t
}
function fn(t, e) {
    return typeof t == "function" ? t(e) : t
}
function bg(t, e) {
    const {type: n="all", exact: i, fetchStatus: o, predicate: l, queryKey: c, stale: d} = t;
    if (c) {
        if (i) {
            if (e.queryHash !== df(c, e.options))
                return !1
        } else if (!so(e.queryKey, c))
            return !1
    }
    if (n !== "all") {
        const h = e.isActive();
        if (n === "active" && !h || n === "inactive" && h)
            return !1
    }
    return !(typeof d == "boolean" && e.isStale() !== d || o && o !== e.state.fetchStatus || l && !l(e))
}
function Cg(t, e) {
    const {exact: n, status: i, predicate: o, mutationKey: l} = t;
    if (l) {
        if (!e.options.mutationKey)
            return !1;
        if (n) {
            if (Gr(e.options.mutationKey) !== Gr(l))
                return !1
        } else if (!so(e.options.mutationKey, l))
            return !1
    }
    return !(i && e.state.status !== i || o && !o(e))
}
function df(t, e) {
    return (e?.queryKeyHashFn || Gr)(t)
}
function Gr(t) {
    return JSON.stringify(t, (e,n)=>Td(n) ? Object.keys(n).sort().reduce((i,o)=>(i[o] = n[o],
    i), {}) : n)
}
function so(t, e) {
    return t === e ? !0 : typeof t != typeof e ? !1 : t && e && typeof t == "object" && typeof e == "object" ? !Object.keys(e).some(n=>!so(t[n], e[n])) : !1
}
function jv(t, e) {
    if (t === e)
        return t;
    const n = _g(t) && _g(e);
    if (n || Td(t) && Td(e)) {
        const i = n ? t : Object.keys(t)
          , o = i.length
          , l = n ? e : Object.keys(e)
          , c = l.length
          , d = n ? [] : {};
        let h = 0;
        for (let p = 0; p < c; p++) {
            const m = n ? p : l[p];
            (!n && i.includes(m) || n) && t[m] === void 0 && e[m] === void 0 ? (d[m] = void 0,
            h++) : (d[m] = jv(t[m], e[m]),
            d[m] === t[m] && t[m] !== void 0 && h++)
        }
        return o === c && h === o ? t : d
    }
    return e
}
function ol(t, e) {
    if (!e || Object.keys(t).length !== Object.keys(e).length)
        return !1;
    for (const n in t)
        if (t[n] !== e[n])
            return !1;
    return !0
}
function _g(t) {
    return Array.isArray(t) && t.length === Object.keys(t).length
}
function Td(t) {
    if (!Eg(t))
        return !1;
    const e = t.constructor;
    if (e === void 0)
        return !0;
    const n = e.prototype;
    return !(!Eg(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(t) !== Object.prototype)
}
function Eg(t) {
    return Object.prototype.toString.call(t) === "[object Object]"
}
function $P(t) {
    return new Promise(e=>{
        setTimeout(e, t)
    }
    )
}
function bd(t, e, n) {
    return typeof n.structuralSharing == "function" ? n.structuralSharing(t, e) : n.structuralSharing !== !1 ? jv(t, e) : e
}
function WP(t, e, n=0) {
    const i = [...t, e];
    return n && i.length > n ? i.slice(1) : i
}
function HP(t, e, n=0) {
    const i = [e, ...t];
    return n && i.length > n ? i.slice(0, -1) : i
}
var ff = Symbol();
function Fv(t, e) {
    return !t.queryFn && e?.initialPromise ? ()=>e.initialPromise : !t.queryFn || t.queryFn === ff ? ()=>Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`)) : t.queryFn
}
var QP = class extends Gs {
    #e;
    #t;
    #r;
    constructor() {
        super(),
        this.#r = t=>{
            if (!Zr && window.addEventListener) {
                const e = ()=>t();
                return window.addEventListener("visibilitychange", e, !1),
                ()=>{
                    window.removeEventListener("visibilitychange", e)
                }
            }
        }
    }
    onSubscribe() {
        this.#t || this.setEventListener(this.#r)
    }
    onUnsubscribe() {
        this.hasListeners() || (this.#t?.(),
        this.#t = void 0)
    }
    setEventListener(t) {
        this.#r = t,
        this.#t?.(),
        this.#t = t(e=>{
            typeof e == "boolean" ? this.setFocused(e) : this.onFocus()
        }
        )
    }
    setFocused(t) {
        this.#e !== t && (this.#e = t,
        this.onFocus())
    }
    onFocus() {
        const t = this.isFocused();
        this.listeners.forEach(e=>{
            e(t)
        }
        )
    }
    isFocused() {
        return typeof this.#e == "boolean" ? this.#e : globalThis.document?.visibilityState !== "hidden"
    }
}
  , hf = new QP
  , KP = class extends Gs {
    #e = !0;
    #t;
    #r;
    constructor() {
        super(),
        this.#r = t=>{
            if (!Zr && window.addEventListener) {
                const e = ()=>t(!0)
                  , n = ()=>t(!1);
                return window.addEventListener("online", e, !1),
                window.addEventListener("offline", n, !1),
                ()=>{
                    window.removeEventListener("online", e),
                    window.removeEventListener("offline", n)
                }
            }
        }
    }
    onSubscribe() {
        this.#t || this.setEventListener(this.#r)
    }
    onUnsubscribe() {
        this.hasListeners() || (this.#t?.(),
        this.#t = void 0)
    }
    setEventListener(t) {
        this.#r = t,
        this.#t?.(),
        this.#t = t(this.setOnline.bind(this))
    }
    setOnline(t) {
        this.#e !== t && (this.#e = t,
        this.listeners.forEach(n=>{
            n(t)
        }
        ))
    }
    isOnline() {
        return this.#e
    }
}
  , al = new KP;
function Cd() {
    let t, e;
    const n = new Promise((o,l)=>{
        t = o,
        e = l
    }
    );
    n.status = "pending",
    n.catch(()=>{}
    );
    function i(o) {
        Object.assign(n, o),
        delete n.resolve,
        delete n.reject
    }
    return n.resolve = o=>{
        i({
            status: "fulfilled",
            value: o
        }),
        t(o)
    }
    ,
    n.reject = o=>{
        i({
            status: "rejected",
            reason: o
        }),
        e(o)
    }
    ,
    n
}
function qP(t) {
    return Math.min(1e3 * 2 ** t, 3e4)
}
function Vv(t) {
    return (t ?? "online") === "online" ? al.isOnline() : !0
}
var zv = class extends Error {
    constructor(t) {
        super("CancelledError"),
        this.revert = t?.revert,
        this.silent = t?.silent
    }
}
;
function Gc(t) {
    return t instanceof zv
}
function Bv(t) {
    let e = !1, n = 0, i = !1, o;
    const l = Cd()
      , c = P=>{
        i || (v(new zv(P)),
        t.abort?.())
    }
      , d = ()=>{
        e = !0
    }
      , h = ()=>{
        e = !1
    }
      , p = ()=>hf.isFocused() && (t.networkMode === "always" || al.isOnline()) && t.canRun()
      , m = ()=>Vv(t.networkMode) && t.canRun()
      , y = P=>{
        i || (i = !0,
        t.onSuccess?.(P),
        o?.(),
        l.resolve(P))
    }
      , v = P=>{
        i || (i = !0,
        t.onError?.(P),
        o?.(),
        l.reject(P))
    }
      , w = ()=>new Promise(P=>{
        o = T=>{
            (i || p()) && P(T)
        }
        ,
        t.onPause?.()
    }
    ).then(()=>{
        o = void 0,
        i || t.onContinue?.()
    }
    )
      , C = ()=>{
        if (i)
            return;
        let P;
        const T = n === 0 ? t.initialPromise : void 0;
        try {
            P = T ?? t.fn()
        } catch (k) {
            P = Promise.reject(k)
        }
        Promise.resolve(P).then(y).catch(k=>{
            if (i)
                return;
            const N = t.retry ?? (Zr ? 0 : 3)
              , O = t.retryDelay ?? qP
              , j = typeof O == "function" ? O(n, k) : O
              , L = N === !0 || typeof N == "number" && n < N || typeof N == "function" && N(n, k);
            if (e || !L) {
                v(k);
                return
            }
            n++,
            t.onFail?.(n, k),
            $P(j).then(()=>p() ? void 0 : w()).then(()=>{
                e ? v(k) : C()
            }
            )
        }
        )
    }
    ;
    return {
        promise: l,
        cancel: c,
        continue: ()=>(o?.(),
        l),
        cancelRetry: d,
        continueRetry: h,
        canStart: m,
        start: ()=>(m() ? C() : w().then(C),
        l)
    }
}
function ZP() {
    let t = []
      , e = 0
      , n = d=>{
        d()
    }
      , i = d=>{
        d()
    }
      , o = d=>setTimeout(d, 0);
    const l = d=>{
        e ? t.push(d) : o(()=>{
            n(d)
        }
        )
    }
      , c = ()=>{
        const d = t;
        t = [],
        d.length && o(()=>{
            i(()=>{
                d.forEach(h=>{
                    n(h)
                }
                )
            }
            )
        }
        )
    }
    ;
    return {
        batch: d=>{
            let h;
            e++;
            try {
                h = d()
            } finally {
                e--,
                e || c()
            }
            return h
        }
        ,
        batchCalls: d=>(...h)=>{
            l(()=>{
                d(...h)
            }
            )
        }
        ,
        schedule: l,
        setNotifyFunction: d=>{
            n = d
        }
        ,
        setBatchNotifyFunction: d=>{
            i = d
        }
        ,
        setScheduler: d=>{
            o = d
        }
    }
}
var it = ZP()
  , Uv = class {
    #e;
    destroy() {
        this.clearGcTimeout()
    }
    scheduleGc() {
        this.clearGcTimeout(),
        Pd(this.gcTime) && (this.#e = setTimeout(()=>{
            this.optionalRemove()
        }
        , this.gcTime))
    }
    updateGcTime(t) {
        this.gcTime = Math.max(this.gcTime || 0, t ?? (Zr ? 1 / 0 : 300 * 1e3))
    }
    clearGcTimeout() {
        this.#e && (clearTimeout(this.#e),
        this.#e = void 0)
    }
}
  , GP = class extends Uv {
    #e;
    #t;
    #r;
    #n;
    #o;
    #i;
    constructor(t) {
        super(),
        this.#i = !1,
        this.#o = t.defaultOptions,
        this.setOptions(t.options),
        this.observers = [],
        this.#r = t.cache,
        this.queryKey = t.queryKey,
        this.queryHash = t.queryHash,
        this.#e = XP(this.options),
        this.state = t.state ?? this.#e,
        this.scheduleGc()
    }
    get meta() {
        return this.options.meta
    }
    get promise() {
        return this.#n?.promise
    }
    setOptions(t) {
        this.options = {
            ...this.#o,
            ...t
        },
        this.updateGcTime(this.options.gcTime)
    }
    optionalRemove() {
        !this.observers.length && this.state.fetchStatus === "idle" && this.#r.remove(this)
    }
    setData(t, e) {
        const n = bd(this.state.data, t, this.options);
        return this.#s({
            data: n,
            type: "success",
            dataUpdatedAt: e?.updatedAt,
            manual: e?.manual
        }),
        n
    }
    setState(t, e) {
        this.#s({
            type: "setState",
            state: t,
            setStateOptions: e
        })
    }
    cancel(t) {
        const e = this.#n?.promise;
        return this.#n?.cancel(t),
        e ? e.then(tn).catch(tn) : Promise.resolve()
    }
    destroy() {
        super.destroy(),
        this.cancel({
            silent: !0
        })
    }
    reset() {
        this.destroy(),
        this.setState(this.#e)
    }
    isActive() {
        return this.observers.some(t=>fn(t.options.enabled, this) !== !1)
    }
    isDisabled() {
        return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === ff || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
    }
    isStale() {
        return this.state.isInvalidated ? !0 : this.getObserversCount() > 0 ? this.observers.some(t=>t.getCurrentResult().isStale) : this.state.data === void 0
    }
    isStaleByTime(t=0) {
        return this.state.isInvalidated || this.state.data === void 0 || !Lv(this.state.dataUpdatedAt, t)
    }
    onFocus() {
        this.observers.find(e=>e.shouldFetchOnWindowFocus())?.refetch({
            cancelRefetch: !1
        }),
        this.#n?.continue()
    }
    onOnline() {
        this.observers.find(e=>e.shouldFetchOnReconnect())?.refetch({
            cancelRefetch: !1
        }),
        this.#n?.continue()
    }
    addObserver(t) {
        this.observers.includes(t) || (this.observers.push(t),
        this.clearGcTimeout(),
        this.#r.notify({
            type: "observerAdded",
            query: this,
            observer: t
        }))
    }
    removeObserver(t) {
        this.observers.includes(t) && (this.observers = this.observers.filter(e=>e !== t),
        this.observers.length || (this.#n && (this.#i ? this.#n.cancel({
            revert: !0
        }) : this.#n.cancelRetry()),
        this.scheduleGc()),
        this.#r.notify({
            type: "observerRemoved",
            query: this,
            observer: t
        }))
    }
    getObserversCount() {
        return this.observers.length
    }
    invalidate() {
        this.state.isInvalidated || this.#s({
            type: "invalidate"
        })
    }
    fetch(t, e) {
        if (this.state.fetchStatus !== "idle") {
            if (this.state.data !== void 0 && e?.cancelRefetch)
                this.cancel({
                    silent: !0
                });
            else if (this.#n)
                return this.#n.continueRetry(),
                this.#n.promise
        }
        if (t && this.setOptions(t),
        !this.options.queryFn) {
            const d = this.observers.find(h=>h.options.queryFn);
            d && this.setOptions(d.options)
        }
        const n = new AbortController
          , i = d=>{
            Object.defineProperty(d, "signal", {
                enumerable: !0,
                get: ()=>(this.#i = !0,
                n.signal)
            })
        }
          , o = ()=>{
            const d = Fv(this.options, e)
              , h = {
                queryKey: this.queryKey,
                meta: this.meta
            };
            return i(h),
            this.#i = !1,
            this.options.persister ? this.options.persister(d, h, this) : d(h)
        }
          , l = {
            fetchOptions: e,
            options: this.options,
            queryKey: this.queryKey,
            state: this.state,
            fetchFn: o
        };
        i(l),
        this.options.behavior?.onFetch(l, this),
        this.#t = this.state,
        (this.state.fetchStatus === "idle" || this.state.fetchMeta !== l.fetchOptions?.meta) && this.#s({
            type: "fetch",
            meta: l.fetchOptions?.meta
        });
        const c = d=>{
            Gc(d) && d.silent || this.#s({
                type: "error",
                error: d
            }),
            Gc(d) || (this.#r.config.onError?.(d, this),
            this.#r.config.onSettled?.(this.state.data, d, this)),
            this.scheduleGc()
        }
        ;
        return this.#n = Bv({
            initialPromise: e?.initialPromise,
            fn: l.fetchFn,
            abort: n.abort.bind(n),
            onSuccess: d=>{
                if (d === void 0) {
                    c(new Error(`${this.queryHash} data is undefined`));
                    return
                }
                try {
                    this.setData(d)
                } catch (h) {
                    c(h);
                    return
                }
                this.#r.config.onSuccess?.(d, this),
                this.#r.config.onSettled?.(d, this.state.error, this),
                this.scheduleGc()
            }
            ,
            onError: c,
            onFail: (d,h)=>{
                this.#s({
                    type: "failed",
                    failureCount: d,
                    error: h
                })
            }
            ,
            onPause: ()=>{
                this.#s({
                    type: "pause"
                })
            }
            ,
            onContinue: ()=>{
                this.#s({
                    type: "continue"
                })
            }
            ,
            retry: l.options.retry,
            retryDelay: l.options.retryDelay,
            networkMode: l.options.networkMode,
            canRun: ()=>!0
        }),
        this.#n.start()
    }
    #s(t) {
        const e = n=>{
            switch (t.type) {
            case "failed":
                return {
                    ...n,
                    fetchFailureCount: t.failureCount,
                    fetchFailureReason: t.error
                };
            case "pause":
                return {
                    ...n,
                    fetchStatus: "paused"
                };
            case "continue":
                return {
                    ...n,
                    fetchStatus: "fetching"
                };
            case "fetch":
                return {
                    ...n,
                    ...$v(n.data, this.options),
                    fetchMeta: t.meta ?? null
                };
            case "success":
                return {
                    ...n,
                    data: t.data,
                    dataUpdateCount: n.dataUpdateCount + 1,
                    dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                    error: null,
                    isInvalidated: !1,
                    status: "success",
                    ...!t.manual && {
                        fetchStatus: "idle",
                        fetchFailureCount: 0,
                        fetchFailureReason: null
                    }
                };
            case "error":
                const i = t.error;
                return Gc(i) && i.revert && this.#t ? {
                    ...this.#t,
                    fetchStatus: "idle"
                } : {
                    ...n,
                    error: i,
                    errorUpdateCount: n.errorUpdateCount + 1,
                    errorUpdatedAt: Date.now(),
                    fetchFailureCount: n.fetchFailureCount + 1,
                    fetchFailureReason: i,
                    fetchStatus: "idle",
                    status: "error"
                };
            case "invalidate":
                return {
                    ...n,
                    isInvalidated: !0
                };
            case "setState":
                return {
                    ...n,
                    ...t.state
                }
            }
        }
        ;
        this.state = e(this.state),
        it.batch(()=>{
            this.observers.forEach(n=>{
                n.onQueryUpdate()
            }
            ),
            this.#r.notify({
                query: this,
                type: "updated",
                action: t
            })
        }
        )
    }
}
;
function $v(t, e) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: Vv(e.networkMode) ? "fetching" : "paused",
        ...t === void 0 && {
            error: null,
            status: "pending"
        }
    }
}
function XP(t) {
    const e = typeof t.initialData == "function" ? t.initialData() : t.initialData
      , n = e !== void 0
      , i = n ? typeof t.initialDataUpdatedAt == "function" ? t.initialDataUpdatedAt() : t.initialDataUpdatedAt : 0;
    return {
        data: e,
        dataUpdateCount: 0,
        dataUpdatedAt: n ? i ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: n ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var YP = class extends Gs {
    constructor(t={}) {
        super(),
        this.config = t,
        this.#e = new Map
    }
    #e;
    build(t, e, n) {
        const i = e.queryKey
          , o = e.queryHash ?? df(i, e);
        let l = this.get(o);
        return l || (l = new GP({
            cache: this,
            queryKey: i,
            queryHash: o,
            options: t.defaultQueryOptions(e),
            state: n,
            defaultOptions: t.getQueryDefaults(i)
        }),
        this.add(l)),
        l
    }
    add(t) {
        this.#e.has(t.queryHash) || (this.#e.set(t.queryHash, t),
        this.notify({
            type: "added",
            query: t
        }))
    }
    remove(t) {
        const e = this.#e.get(t.queryHash);
        e && (t.destroy(),
        e === t && this.#e.delete(t.queryHash),
        this.notify({
            type: "removed",
            query: t
        }))
    }
    clear() {
        it.batch(()=>{
            this.getAll().forEach(t=>{
                this.remove(t)
            }
            )
        }
        )
    }
    get(t) {
        return this.#e.get(t)
    }
    getAll() {
        return [...this.#e.values()]
    }
    find(t) {
        const e = {
            exact: !0,
            ...t
        };
        return this.getAll().find(n=>bg(e, n))
    }
    findAll(t={}) {
        const e = this.getAll();
        return Object.keys(t).length > 0 ? e.filter(n=>bg(t, n)) : e
    }
    notify(t) {
        it.batch(()=>{
            this.listeners.forEach(e=>{
                e(t)
            }
            )
        }
        )
    }
    onFocus() {
        it.batch(()=>{
            this.getAll().forEach(t=>{
                t.onFocus()
            }
            )
        }
        )
    }
    onOnline() {
        it.batch(()=>{
            this.getAll().forEach(t=>{
                t.onOnline()
            }
            )
        }
        )
    }
}
  , JP = class extends Uv {
    #e;
    #t;
    #r;
    constructor(t) {
        super(),
        this.mutationId = t.mutationId,
        this.#t = t.mutationCache,
        this.#e = [],
        this.state = t.state || Wv(),
        this.setOptions(t.options),
        this.scheduleGc()
    }
    setOptions(t) {
        this.options = t,
        this.updateGcTime(this.options.gcTime)
    }
    get meta() {
        return this.options.meta
    }
    addObserver(t) {
        this.#e.includes(t) || (this.#e.push(t),
        this.clearGcTimeout(),
        this.#t.notify({
            type: "observerAdded",
            mutation: this,
            observer: t
        }))
    }
    removeObserver(t) {
        this.#e = this.#e.filter(e=>e !== t),
        this.scheduleGc(),
        this.#t.notify({
            type: "observerRemoved",
            mutation: this,
            observer: t
        })
    }
    optionalRemove() {
        this.#e.length || (this.state.status === "pending" ? this.scheduleGc() : this.#t.remove(this))
    }
    continue() {
        return this.#r?.continue() ?? this.execute(this.state.variables)
    }
    async execute(t) {
        this.#r = Bv({
            fn: ()=>this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
            onFail: (i,o)=>{
                this.#n({
                    type: "failed",
                    failureCount: i,
                    error: o
                })
            }
            ,
            onPause: ()=>{
                this.#n({
                    type: "pause"
                })
            }
            ,
            onContinue: ()=>{
                this.#n({
                    type: "continue"
                })
            }
            ,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: ()=>this.#t.canRun(this)
        });
        const e = this.state.status === "pending"
          , n = !this.#r.canStart();
        try {
            if (!e) {
                this.#n({
                    type: "pending",
                    variables: t,
                    isPaused: n
                }),
                await this.#t.config.onMutate?.(t, this);
                const o = await this.options.onMutate?.(t);
                o !== this.state.context && this.#n({
                    type: "pending",
                    context: o,
                    variables: t,
                    isPaused: n
                })
            }
            const i = await this.#r.start();
            return await this.#t.config.onSuccess?.(i, t, this.state.context, this),
            await this.options.onSuccess?.(i, t, this.state.context),
            await this.#t.config.onSettled?.(i, null, this.state.variables, this.state.context, this),
            await this.options.onSettled?.(i, null, t, this.state.context),
            this.#n({
                type: "success",
                data: i
            }),
            i
        } catch (i) {
            try {
                throw await this.#t.config.onError?.(i, t, this.state.context, this),
                await this.options.onError?.(i, t, this.state.context),
                await this.#t.config.onSettled?.(void 0, i, this.state.variables, this.state.context, this),
                await this.options.onSettled?.(void 0, i, t, this.state.context),
                i
            } finally {
                this.#n({
                    type: "error",
                    error: i
                })
            }
        } finally {
            this.#t.runNext(this)
        }
    }
    #n(t) {
        const e = n=>{
            switch (t.type) {
            case "failed":
                return {
                    ...n,
                    failureCount: t.failureCount,
                    failureReason: t.error
                };
            case "pause":
                return {
                    ...n,
                    isPaused: !0
                };
            case "continue":
                return {
                    ...n,
                    isPaused: !1
                };
            case "pending":
                return {
                    ...n,
                    context: t.context,
                    data: void 0,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    isPaused: t.isPaused,
                    status: "pending",
                    variables: t.variables,
                    submittedAt: Date.now()
                };
            case "success":
                return {
                    ...n,
                    data: t.data,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    status: "success",
                    isPaused: !1
                };
            case "error":
                return {
                    ...n,
                    data: void 0,
                    error: t.error,
                    failureCount: n.failureCount + 1,
                    failureReason: t.error,
                    isPaused: !1,
                    status: "error"
                }
            }
        }
        ;
        this.state = e(this.state),
        it.batch(()=>{
            this.#e.forEach(n=>{
                n.onMutationUpdate(t)
            }
            ),
            this.#t.notify({
                mutation: this,
                type: "updated",
                action: t
            })
        }
        )
    }
}
;
function Wv() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var eT = class extends Gs {
    constructor(t={}) {
        super(),
        this.config = t,
        this.#e = new Map,
        this.#t = Date.now()
    }
    #e;
    #t;
    build(t, e, n) {
        const i = new JP({
            mutationCache: this,
            mutationId: ++this.#t,
            options: t.defaultMutationOptions(e),
            state: n
        });
        return this.add(i),
        i
    }
    add(t) {
        const e = Wa(t)
          , n = this.#e.get(e) ?? [];
        n.push(t),
        this.#e.set(e, n),
        this.notify({
            type: "added",
            mutation: t
        })
    }
    remove(t) {
        const e = Wa(t);
        if (this.#e.has(e)) {
            const n = this.#e.get(e)?.filter(i=>i !== t);
            n && (n.length === 0 ? this.#e.delete(e) : this.#e.set(e, n))
        }
        this.notify({
            type: "removed",
            mutation: t
        })
    }
    canRun(t) {
        const e = this.#e.get(Wa(t))?.find(n=>n.state.status === "pending");
        return !e || e === t
    }
    runNext(t) {
        return this.#e.get(Wa(t))?.find(n=>n !== t && n.state.isPaused)?.continue() ?? Promise.resolve()
    }
    clear() {
        it.batch(()=>{
            this.getAll().forEach(t=>{
                this.remove(t)
            }
            )
        }
        )
    }
    getAll() {
        return [...this.#e.values()].flat()
    }
    find(t) {
        const e = {
            exact: !0,
            ...t
        };
        return this.getAll().find(n=>Cg(e, n))
    }
    findAll(t={}) {
        return this.getAll().filter(e=>Cg(t, e))
    }
    notify(t) {
        it.batch(()=>{
            this.listeners.forEach(e=>{
                e(t)
            }
            )
        }
        )
    }
    resumePausedMutations() {
        const t = this.getAll().filter(e=>e.state.isPaused);
        return it.batch(()=>Promise.all(t.map(e=>e.continue().catch(tn))))
    }
}
;
function Wa(t) {
    return t.options.scope?.id ?? String(t.mutationId)
}
function kg(t) {
    return {
        onFetch: (e,n)=>{
            const i = e.options
              , o = e.fetchOptions?.meta?.fetchMore?.direction
              , l = e.state.data?.pages || []
              , c = e.state.data?.pageParams || [];
            let d = {
                pages: [],
                pageParams: []
            }
              , h = 0;
            const p = async()=>{
                let m = !1;
                const y = C=>{
                    Object.defineProperty(C, "signal", {
                        enumerable: !0,
                        get: ()=>(e.signal.aborted ? m = !0 : e.signal.addEventListener("abort", ()=>{
                            m = !0
                        }
                        ),
                        e.signal)
                    })
                }
                  , v = Fv(e.options, e.fetchOptions)
                  , w = async(C,P,T)=>{
                    if (m)
                        return Promise.reject();
                    if (P == null && C.pages.length)
                        return Promise.resolve(C);
                    const k = {
                        queryKey: e.queryKey,
                        pageParam: P,
                        direction: T ? "backward" : "forward",
                        meta: e.options.meta
                    };
                    y(k);
                    const N = await v(k)
                      , {maxPages: O} = e.options
                      , j = T ? HP : WP;
                    return {
                        pages: j(C.pages, N, O),
                        pageParams: j(C.pageParams, P, O)
                    }
                }
                ;
                if (o && l.length) {
                    const C = o === "backward"
                      , P = C ? tT : Ag
                      , T = {
                        pages: l,
                        pageParams: c
                    }
                      , k = P(i, T);
                    d = await w(T, k, C)
                } else {
                    const C = t ?? l.length;
                    do {
                        const P = h === 0 ? c[0] ?? i.initialPageParam : Ag(i, d);
                        if (h > 0 && P == null)
                            break;
                        d = await w(d, P),
                        h++
                    } while (h < C)
                }
                return d
            }
            ;
            e.options.persister ? e.fetchFn = ()=>e.options.persister?.(p, {
                queryKey: e.queryKey,
                meta: e.options.meta,
                signal: e.signal
            }, n) : e.fetchFn = p
        }
    }
}
function Ag(t, {pages: e, pageParams: n}) {
    const i = e.length - 1;
    return e.length > 0 ? t.getNextPageParam(e[i], e, n[i], n) : void 0
}
function tT(t, {pages: e, pageParams: n}) {
    return e.length > 0 ? t.getPreviousPageParam?.(e[0], e, n[0], n) : void 0
}
var nT = class {
    #e;
    #t;
    #r;
    #n;
    #o;
    #i;
    #s;
    #a;
    constructor(t={}) {
        this.#e = t.queryCache || new YP,
        this.#t = t.mutationCache || new eT,
        this.#r = t.defaultOptions || {},
        this.#n = new Map,
        this.#o = new Map,
        this.#i = 0
    }
    mount() {
        this.#i++,
        this.#i === 1 && (this.#s = hf.subscribe(async t=>{
            t && (await this.resumePausedMutations(),
            this.#e.onFocus())
        }
        ),
        this.#a = al.subscribe(async t=>{
            t && (await this.resumePausedMutations(),
            this.#e.onOnline())
        }
        ))
    }
    unmount() {
        this.#i--,
        this.#i === 0 && (this.#s?.(),
        this.#s = void 0,
        this.#a?.(),
        this.#a = void 0)
    }
    isFetching(t) {
        return this.#e.findAll({
            ...t,
            fetchStatus: "fetching"
        }).length
    }
    isMutating(t) {
        return this.#t.findAll({
            ...t,
            status: "pending"
        }).length
    }
    getQueryData(t) {
        const e = this.defaultQueryOptions({
            queryKey: t
        });
        return this.#e.get(e.queryHash)?.state.data
    }
    ensureQueryData(t) {
        const e = this.getQueryData(t.queryKey);
        if (e === void 0)
            return this.fetchQuery(t);
        {
            const n = this.defaultQueryOptions(t)
              , i = this.#e.build(this, n);
            return t.revalidateIfStale && i.isStaleByTime(Ls(n.staleTime, i)) && this.prefetchQuery(n),
            Promise.resolve(e)
        }
    }
    getQueriesData(t) {
        return this.#e.findAll(t).map(({queryKey: e, state: n})=>{
            const i = n.data;
            return [e, i]
        }
        )
    }
    setQueryData(t, e, n) {
        const i = this.defaultQueryOptions({
            queryKey: t
        })
          , l = this.#e.get(i.queryHash)?.state.data
          , c = UP(e, l);
        if (c !== void 0)
            return this.#e.build(this, i).setData(c, {
                ...n,
                manual: !0
            })
    }
    setQueriesData(t, e, n) {
        return it.batch(()=>this.#e.findAll(t).map(({queryKey: i})=>[i, this.setQueryData(i, e, n)]))
    }
    getQueryState(t) {
        const e = this.defaultQueryOptions({
            queryKey: t
        });
        return this.#e.get(e.queryHash)?.state
    }
    removeQueries(t) {
        const e = this.#e;
        it.batch(()=>{
            e.findAll(t).forEach(n=>{
                e.remove(n)
            }
            )
        }
        )
    }
    resetQueries(t, e) {
        const n = this.#e
          , i = {
            type: "active",
            ...t
        };
        return it.batch(()=>(n.findAll(t).forEach(o=>{
            o.reset()
        }
        ),
        this.refetchQueries(i, e)))
    }
    cancelQueries(t={}, e={}) {
        const n = {
            revert: !0,
            ...e
        }
          , i = it.batch(()=>this.#e.findAll(t).map(o=>o.cancel(n)));
        return Promise.all(i).then(tn).catch(tn)
    }
    invalidateQueries(t={}, e={}) {
        return it.batch(()=>{
            if (this.#e.findAll(t).forEach(i=>{
                i.invalidate()
            }
            ),
            t.refetchType === "none")
                return Promise.resolve();
            const n = {
                ...t,
                type: t.refetchType ?? t.type ?? "active"
            };
            return this.refetchQueries(n, e)
        }
        )
    }
    refetchQueries(t={}, e) {
        const n = {
            ...e,
            cancelRefetch: e?.cancelRefetch ?? !0
        }
          , i = it.batch(()=>this.#e.findAll(t).filter(o=>!o.isDisabled()).map(o=>{
            let l = o.fetch(void 0, n);
            return n.throwOnError || (l = l.catch(tn)),
            o.state.fetchStatus === "paused" ? Promise.resolve() : l
        }
        ));
        return Promise.all(i).then(tn)
    }
    fetchQuery(t) {
        const e = this.defaultQueryOptions(t);
        e.retry === void 0 && (e.retry = !1);
        const n = this.#e.build(this, e);
        return n.isStaleByTime(Ls(e.staleTime, n)) ? n.fetch(e) : Promise.resolve(n.state.data)
    }
    prefetchQuery(t) {
        return this.fetchQuery(t).then(tn).catch(tn)
    }
    fetchInfiniteQuery(t) {
        return t.behavior = kg(t.pages),
        this.fetchQuery(t)
    }
    prefetchInfiniteQuery(t) {
        return this.fetchInfiniteQuery(t).then(tn).catch(tn)
    }
    ensureInfiniteQueryData(t) {
        return t.behavior = kg(t.pages),
        this.ensureQueryData(t)
    }
    resumePausedMutations() {
        return al.isOnline() ? this.#t.resumePausedMutations() : Promise.resolve()
    }
    getQueryCache() {
        return this.#e
    }
    getMutationCache() {
        return this.#t
    }
    getDefaultOptions() {
        return this.#r
    }
    setDefaultOptions(t) {
        this.#r = t
    }
    setQueryDefaults(t, e) {
        this.#n.set(Gr(t), {
            queryKey: t,
            defaultOptions: e
        })
    }
    getQueryDefaults(t) {
        const e = [...this.#n.values()];
        let n = {};
        return e.forEach(i=>{
            so(t, i.queryKey) && (n = {
                ...n,
                ...i.defaultOptions
            })
        }
        ),
        n
    }
    setMutationDefaults(t, e) {
        this.#o.set(Gr(t), {
            mutationKey: t,
            defaultOptions: e
        })
    }
    getMutationDefaults(t) {
        const e = [...this.#o.values()];
        let n = {};
        return e.forEach(i=>{
            so(t, i.mutationKey) && (n = {
                ...n,
                ...i.defaultOptions
            })
        }
        ),
        n
    }
    defaultQueryOptions(t) {
        if (t._defaulted)
            return t;
        const e = {
            ...this.#r.queries,
            ...this.getQueryDefaults(t.queryKey),
            ...t,
            _defaulted: !0
        };
        return e.queryHash || (e.queryHash = df(e.queryKey, e)),
        e.refetchOnReconnect === void 0 && (e.refetchOnReconnect = e.networkMode !== "always"),
        e.throwOnError === void 0 && (e.throwOnError = !!e.suspense),
        !e.networkMode && e.persister && (e.networkMode = "offlineFirst"),
        e.enabled !== !0 && e.queryFn === ff && (e.enabled = !1),
        e
    }
    defaultMutationOptions(t) {
        return t?._defaulted ? t : {
            ...this.#r.mutations,
            ...t?.mutationKey && this.getMutationDefaults(t.mutationKey),
            ...t,
            _defaulted: !0
        }
    }
    clear() {
        this.#e.clear(),
        this.#t.clear()
    }
}
  , rT = class extends Gs {
    constructor(t, e) {
        super(),
        this.options = e,
        this.#e = t,
        this.#a = null,
        this.#s = Cd(),
        this.options.experimental_prefetchInRender || this.#s.reject(new Error("experimental_prefetchInRender feature flag is not enabled")),
        this.bindMethods(),
        this.setOptions(e)
    }
    #e;
    #t = void 0;
    #r = void 0;
    #n = void 0;
    #o;
    #i;
    #s;
    #a;
    #m;
    #f;
    #h;
    #u;
    #c;
    #l;
    #p = new Set;
    bindMethods() {
        this.refetch = this.refetch.bind(this)
    }
    onSubscribe() {
        this.listeners.size === 1 && (this.#t.addObserver(this),
        Rg(this.#t, this.options) ? this.#d() : this.updateResult(),
        this.#x())
    }
    onUnsubscribe() {
        this.hasListeners() || this.destroy()
    }
    shouldFetchOnReconnect() {
        return _d(this.#t, this.options, this.options.refetchOnReconnect)
    }
    shouldFetchOnWindowFocus() {
        return _d(this.#t, this.options, this.options.refetchOnWindowFocus)
    }
    destroy() {
        this.listeners = new Set,
        this.#w(),
        this.#S(),
        this.#t.removeObserver(this)
    }
    setOptions(t, e) {
        const n = this.options
          , i = this.#t;
        if (this.options = this.#e.defaultQueryOptions(t),
        this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof fn(this.options.enabled, this.#t) != "boolean")
            throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");
        this.#P(),
        this.#t.setOptions(this.options),
        n._defaulted && !ol(this.options, n) && this.#e.getQueryCache().notify({
            type: "observerOptionsUpdated",
            query: this.#t,
            observer: this
        });
        const o = this.hasListeners();
        o && Ng(this.#t, i, this.options, n) && this.#d(),
        this.updateResult(e),
        o && (this.#t !== i || fn(this.options.enabled, this.#t) !== fn(n.enabled, this.#t) || Ls(this.options.staleTime, this.#t) !== Ls(n.staleTime, this.#t)) && this.#g();
        const l = this.#y();
        o && (this.#t !== i || fn(this.options.enabled, this.#t) !== fn(n.enabled, this.#t) || l !== this.#l) && this.#v(l)
    }
    getOptimisticResult(t) {
        const e = this.#e.getQueryCache().build(this.#e, t)
          , n = this.createResult(e, t);
        return iT(this, n) && (this.#n = n,
        this.#i = this.options,
        this.#o = this.#t.state),
        n
    }
    getCurrentResult() {
        return this.#n
    }
    trackResult(t, e) {
        const n = {};
        return Object.keys(t).forEach(i=>{
            Object.defineProperty(n, i, {
                configurable: !1,
                enumerable: !0,
                get: ()=>(this.trackProp(i),
                e?.(i),
                t[i])
            })
        }
        ),
        n
    }
    trackProp(t) {
        this.#p.add(t)
    }
    getCurrentQuery() {
        return this.#t
    }
    refetch({...t}={}) {
        return this.fetch({
            ...t
        })
    }
    fetchOptimistic(t) {
        const e = this.#e.defaultQueryOptions(t)
          , n = this.#e.getQueryCache().build(this.#e, e);
        return n.fetch().then(()=>this.createResult(n, e))
    }
    fetch(t) {
        return this.#d({
            ...t,
            cancelRefetch: t.cancelRefetch ?? !0
        }).then(()=>(this.updateResult(),
        this.#n))
    }
    #d(t) {
        this.#P();
        let e = this.#t.fetch(this.options, t);
        return t?.throwOnError || (e = e.catch(tn)),
        e
    }
    #g() {
        this.#w();
        const t = Ls(this.options.staleTime, this.#t);
        if (Zr || this.#n.isStale || !Pd(t))
            return;
        const n = Lv(this.#n.dataUpdatedAt, t) + 1;
        this.#u = setTimeout(()=>{
            this.#n.isStale || this.updateResult()
        }
        , n)
    }
    #y() {
        return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(this.#t) : this.options.refetchInterval) ?? !1
    }
    #v(t) {
        this.#S(),
        this.#l = t,
        !(Zr || fn(this.options.enabled, this.#t) === !1 || !Pd(this.#l) || this.#l === 0) && (this.#c = setInterval(()=>{
            (this.options.refetchIntervalInBackground || hf.isFocused()) && this.#d()
        }
        , this.#l))
    }
    #x() {
        this.#g(),
        this.#v(this.#y())
    }
    #w() {
        this.#u && (clearTimeout(this.#u),
        this.#u = void 0)
    }
    #S() {
        this.#c && (clearInterval(this.#c),
        this.#c = void 0)
    }
    createResult(t, e) {
        const n = this.#t
          , i = this.options
          , o = this.#n
          , l = this.#o
          , c = this.#i
          , h = t !== n ? t.state : this.#r
          , {state: p} = t;
        let m = {
            ...p
        }, y = !1, v;
        if (e._optimisticResults) {
            const z = this.hasListeners()
              , K = !z && Rg(t, e)
              , ie = z && Ng(t, n, e, i);
            (K || ie) && (m = {
                ...m,
                ...$v(p.data, t.options)
            }),
            e._optimisticResults === "isRestoring" && (m.fetchStatus = "idle")
        }
        let {error: w, errorUpdatedAt: C, status: P} = m;
        if (e.select && m.data !== void 0)
            if (o && m.data === l?.data && e.select === this.#m)
                v = this.#f;
            else
                try {
                    this.#m = e.select,
                    v = e.select(m.data),
                    v = bd(o?.data, v, e),
                    this.#f = v,
                    this.#a = null
                } catch (z) {
                    this.#a = z
                }
        else
            v = m.data;
        if (e.placeholderData !== void 0 && v === void 0 && P === "pending") {
            let z;
            if (o?.isPlaceholderData && e.placeholderData === c?.placeholderData)
                z = o.data;
            else if (z = typeof e.placeholderData == "function" ? e.placeholderData(this.#h?.state.data, this.#h) : e.placeholderData,
            e.select && z !== void 0)
                try {
                    z = e.select(z),
                    this.#a = null
                } catch (K) {
                    this.#a = K
                }
            z !== void 0 && (P = "success",
            v = bd(o?.data, z, e),
            y = !0)
        }
        this.#a && (w = this.#a,
        v = this.#f,
        C = Date.now(),
        P = "error");
        const T = m.fetchStatus === "fetching"
          , k = P === "pending"
          , N = P === "error"
          , O = k && T
          , j = v !== void 0
          , V = {
            status: P,
            fetchStatus: m.fetchStatus,
            isPending: k,
            isSuccess: P === "success",
            isError: N,
            isInitialLoading: O,
            isLoading: O,
            data: v,
            dataUpdatedAt: m.dataUpdatedAt,
            error: w,
            errorUpdatedAt: C,
            failureCount: m.fetchFailureCount,
            failureReason: m.fetchFailureReason,
            errorUpdateCount: m.errorUpdateCount,
            isFetched: m.dataUpdateCount > 0 || m.errorUpdateCount > 0,
            isFetchedAfterMount: m.dataUpdateCount > h.dataUpdateCount || m.errorUpdateCount > h.errorUpdateCount,
            isFetching: T,
            isRefetching: T && !k,
            isLoadingError: N && !j,
            isPaused: m.fetchStatus === "paused",
            isPlaceholderData: y,
            isRefetchError: N && j,
            isStale: pf(t, e),
            refetch: this.refetch,
            promise: this.#s
        };
        if (this.options.experimental_prefetchInRender) {
            const z = ue=>{
                V.status === "error" ? ue.reject(V.error) : V.data !== void 0 && ue.resolve(V.data)
            }
              , K = ()=>{
                const ue = this.#s = V.promise = Cd();
                z(ue)
            }
              , ie = this.#s;
            switch (ie.status) {
            case "pending":
                t.queryHash === n.queryHash && z(ie);
                break;
            case "fulfilled":
                (V.status === "error" || V.data !== ie.value) && K();
                break;
            case "rejected":
                (V.status !== "error" || V.error !== ie.reason) && K();
                break
            }
        }
        return V
    }
    updateResult(t) {
        const e = this.#n
          , n = this.createResult(this.#t, this.options);
        if (this.#o = this.#t.state,
        this.#i = this.options,
        this.#o.data !== void 0 && (this.#h = this.#t),
        ol(n, e))
            return;
        this.#n = n;
        const i = {}
          , o = ()=>{
            if (!e)
                return !0;
            const {notifyOnChangeProps: l} = this.options
              , c = typeof l == "function" ? l() : l;
            if (c === "all" || !c && !this.#p.size)
                return !0;
            const d = new Set(c ?? this.#p);
            return this.options.throwOnError && d.add("error"),
            Object.keys(this.#n).some(h=>{
                const p = h;
                return this.#n[p] !== e[p] && d.has(p)
            }
            )
        }
        ;
        t?.listeners !== !1 && o() && (i.listeners = !0),
        this.#T({
            ...i,
            ...t
        })
    }
    #P() {
        const t = this.#e.getQueryCache().build(this.#e, this.options);
        if (t === this.#t)
            return;
        const e = this.#t;
        this.#t = t,
        this.#r = t.state,
        this.hasListeners() && (e?.removeObserver(this),
        t.addObserver(this))
    }
    onQueryUpdate() {
        this.updateResult(),
        this.hasListeners() && this.#x()
    }
    #T(t) {
        it.batch(()=>{
            t.listeners && this.listeners.forEach(e=>{
                e(this.#n)
            }
            ),
            this.#e.getQueryCache().notify({
                query: this.#t,
                type: "observerResultsUpdated"
            })
        }
        )
    }
}
;
function sT(t, e) {
    return fn(e.enabled, t) !== !1 && t.state.data === void 0 && !(t.state.status === "error" && e.retryOnMount === !1)
}
function Rg(t, e) {
    return sT(t, e) || t.state.data !== void 0 && _d(t, e, e.refetchOnMount)
}
function _d(t, e, n) {
    if (fn(e.enabled, t) !== !1) {
        const i = typeof n == "function" ? n(t) : n;
        return i === "always" || i !== !1 && pf(t, e)
    }
    return !1
}
function Ng(t, e, n, i) {
    return (t !== e || fn(i.enabled, t) === !1) && (!n.suspense || t.state.status !== "error") && pf(t, n)
}
function pf(t, e) {
    return fn(e.enabled, t) !== !1 && t.isStaleByTime(Ls(e.staleTime, t))
}
function iT(t, e) {
    return !ol(t.getCurrentResult(), e)
}
var oT = class extends Gs {
    #e;
    #t = void 0;
    #r;
    #n;
    constructor(e, n) {
        super(),
        this.#e = e,
        this.setOptions(n),
        this.bindMethods(),
        this.#o()
    }
    bindMethods() {
        this.mutate = this.mutate.bind(this),
        this.reset = this.reset.bind(this)
    }
    setOptions(e) {
        const n = this.options;
        this.options = this.#e.defaultMutationOptions(e),
        ol(this.options, n) || this.#e.getMutationCache().notify({
            type: "observerOptionsUpdated",
            mutation: this.#r,
            observer: this
        }),
        n?.mutationKey && this.options.mutationKey && Gr(n.mutationKey) !== Gr(this.options.mutationKey) ? this.reset() : this.#r?.state.status === "pending" && this.#r.setOptions(this.options)
    }
    onUnsubscribe() {
        this.hasListeners() || this.#r?.removeObserver(this)
    }
    onMutationUpdate(e) {
        this.#o(),
        this.#i(e)
    }
    getCurrentResult() {
        return this.#t
    }
    reset() {
        this.#r?.removeObserver(this),
        this.#r = void 0,
        this.#o(),
        this.#i()
    }
    mutate(e, n) {
        return this.#n = n,
        this.#r?.removeObserver(this),
        this.#r = this.#e.getMutationCache().build(this.#e, this.options),
        this.#r.addObserver(this),
        this.#r.execute(e)
    }
    #o() {
        const e = this.#r?.state ?? Wv();
        this.#t = {
            ...e,
            isPending: e.status === "pending",
            isSuccess: e.status === "success",
            isError: e.status === "error",
            isIdle: e.status === "idle",
            mutate: this.mutate,
            reset: this.reset
        }
    }
    #i(e) {
        it.batch(()=>{
            if (this.#n && this.hasListeners()) {
                const n = this.#t.variables
                  , i = this.#t.context;
                e?.type === "success" ? (this.#n.onSuccess?.(e.data, n, i),
                this.#n.onSettled?.(e.data, null, n, i)) : e?.type === "error" && (this.#n.onError?.(e.error, n, i),
                this.#n.onSettled?.(void 0, e.error, n, i))
            }
            this.listeners.forEach(n=>{
                n(this.#t)
            }
            )
        }
        )
    }
}
  , Hv = S.createContext(void 0)
  , mf = t=>{
    const e = S.useContext(Hv);
    if (!e)
        throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return e
}
  , aT = ({client: t, children: e})=>(S.useEffect(()=>(t.mount(),
()=>{
    t.unmount()
}
), [t]),
A.jsx(Hv.Provider, {
    value: t,
    children: e
}))
  , Qv = S.createContext(!1)
  , lT = ()=>S.useContext(Qv);
Qv.Provider;
function uT() {
    let t = !1;
    return {
        clearReset: ()=>{
            t = !1
        }
        ,
        reset: ()=>{
            t = !0
        }
        ,
        isReset: ()=>t
    }
}
var cT = S.createContext(uT())
  , dT = ()=>S.useContext(cT);
function Kv(t, e) {
    return typeof t == "function" ? t(...e) : !!t
}
function Ed() {}
var fT = (t,e)=>{
    (t.suspense || t.throwOnError || t.experimental_prefetchInRender) && (e.isReset() || (t.retryOnMount = !1))
}
  , hT = t=>{
    S.useEffect(()=>{
        t.clearReset()
    }
    , [t])
}
  , pT = ({result: t, errorResetBoundary: e, throwOnError: n, query: i})=>t.isError && !e.isReset() && !t.isFetching && i && Kv(n, [t.error, i])
  , mT = t=>{
    t.suspense && (t.staleTime === void 0 && (t.staleTime = 1e3),
    typeof t.gcTime == "number" && (t.gcTime = Math.max(t.gcTime, 1e3)))
}
  , gT = (t,e)=>t.isLoading && t.isFetching && !e
  , yT = (t,e)=>t?.suspense && e.isPending
  , Mg = (t,e,n)=>e.fetchOptimistic(t).catch(()=>{
    n.clearReset()
}
);
function vT(t, e, n) {
    const i = mf()
      , o = lT()
      , l = dT()
      , c = i.defaultQueryOptions(t);
    i.getDefaultOptions().queries?._experimental_beforeQuery?.(c),
    c._optimisticResults = o ? "isRestoring" : "optimistic",
    mT(c),
    fT(c, l),
    hT(l);
    const d = !i.getQueryCache().get(c.queryHash)
      , [h] = S.useState(()=>new e(i,c))
      , p = h.getOptimisticResult(c);
    if (S.useSyncExternalStore(S.useCallback(m=>{
        const y = o ? Ed : h.subscribe(it.batchCalls(m));
        return h.updateResult(),
        y
    }
    , [h, o]), ()=>h.getCurrentResult(), ()=>h.getCurrentResult()),
    S.useEffect(()=>{
        h.setOptions(c, {
            listeners: !1
        })
    }
    , [c, h]),
    yT(c, p))
        throw Mg(c, h, l);
    if (pT({
        result: p,
        errorResetBoundary: l,
        throwOnError: c.throwOnError,
        query: i.getQueryCache().get(c.queryHash)
    }))
        throw p.error;
    return i.getDefaultOptions().queries?._experimental_afterQuery?.(c, p),
    c.experimental_prefetchInRender && !Zr && gT(p, o) && (d ? Mg(c, h, l) : i.getQueryCache().get(c.queryHash)?.promise)?.catch(Ed).finally(()=>{
        h.updateResult()
    }
    ),
    c.notifyOnChangeProps ? p : h.trackResult(p)
}
function xT(t, e) {
    return vT(t, rT)
}
function qv(t, e) {
    const n = mf()
      , [i] = S.useState(()=>new oT(n,t));
    S.useEffect(()=>{
        i.setOptions(t)
    }
    , [i, t]);
    const o = S.useSyncExternalStore(S.useCallback(c=>i.subscribe(it.batchCalls(c)), [i]), ()=>i.getCurrentResult(), ()=>i.getCurrentResult())
      , l = S.useCallback((c,d)=>{
        i.mutate(c, d).catch(Ed)
    }
    , [i]);
    if (o.error && Kv(i.options.throwOnError, [o.error]))
        throw o.error;
    return {
        ...o,
        mutate: l,
        mutateAsync: o.mutate
    }
}
async function wT(t) {
    if (!t.ok) {
        const e = await t.text() || t.statusText;
        throw new Error(`${t.status}: ${e}`)
    }
}
const ST = ({on401: t})=>async({queryKey: e})=>{
    const n = await fetch(e.join("/"), {
        credentials: "include"
    });
    return await wT(n),
    await n.json()
}
  , PT = new nT({
    defaultOptions: {
        queries: {
            queryFn: ST({
                on401: "throw"
            }),
            refetchInterval: !1,
            refetchOnWindowFocus: !1,
            staleTime: 1 / 0,
            retry: !1
        },
        mutations: {
            retry: !1
        }
    }
})
  , TT = 1
  , bT = 1e6;
let Xc = 0;
function CT() {
    return Xc = (Xc + 1) % Number.MAX_SAFE_INTEGER,
    Xc.toString()
}
const Yc = new Map
  , Dg = t=>{
    if (Yc.has(t))
        return;
    const e = setTimeout(()=>{
        Yc.delete(t),
        Yi({
            type: "REMOVE_TOAST",
            toastId: t
        })
    }
    , bT);
    Yc.set(t, e)
}
  , _T = (t,e)=>{
    switch (e.type) {
    case "ADD_TOAST":
        return {
            ...t,
            toasts: [e.toast, ...t.toasts].slice(0, TT)
        };
    case "UPDATE_TOAST":
        return {
            ...t,
            toasts: t.toasts.map(n=>n.id === e.toast.id ? {
                ...n,
                ...e.toast
            } : n)
        };
    case "DISMISS_TOAST":
        {
            const {toastId: n} = e;
            return n ? Dg(n) : t.toasts.forEach(i=>{
                Dg(i.id)
            }
            ),
            {
                ...t,
                toasts: t.toasts.map(i=>i.id === n || n === void 0 ? {
                    ...i,
                    open: !1
                } : i)
            }
        }
    case "REMOVE_TOAST":
        return e.toastId === void 0 ? {
            ...t,
            toasts: []
        } : {
            ...t,
            toasts: t.toasts.filter(n=>n.id !== e.toastId)
        }
    }
}
  , Ja = [];
let el = {
    toasts: []
};
function Yi(t) {
    el = _T(el, t),
    Ja.forEach(e=>{
        e(el)
    }
    )
}
function ET({...t}) {
    const e = CT()
      , n = o=>Yi({
        type: "UPDATE_TOAST",
        toast: {
            ...o,
            id: e
        }
    })
      , i = ()=>Yi({
        type: "DISMISS_TOAST",
        toastId: e
    });
    return Yi({
        type: "ADD_TOAST",
        toast: {
            ...t,
            id: e,
            open: !0,
            onOpenChange: o=>{
                o || i()
            }
        }
    }),
    {
        id: e,
        dismiss: i,
        update: n
    }
}
function Zv() {
    const [t,e] = S.useState(el);
    return S.useEffect(()=>(Ja.push(e),
    ()=>{
        const n = Ja.indexOf(e);
        n > -1 && Ja.splice(n, 1)
    }
    ), [t]),
    {
        ...t,
        toast: ET,
        dismiss: n=>Yi({
            type: "DISMISS_TOAST",
            toastId: n
        })
    }
}
var Nl = _v();
const kT = Cv(Nl);
function ot(t, e, {checkForDefaultPrevented: n=!0}={}) {
    return function(o) {
        if (t?.(o),
        n === !1 || !o.defaultPrevented)
            return e?.(o)
    }
}
function Og(t, e) {
    if (typeof t == "function")
        return t(e);
    t != null && (t.current = e)
}
function Gv(...t) {
    return e=>{
        let n = !1;
        const i = t.map(o=>{
            const l = Og(o, e);
            return !n && typeof l == "function" && (n = !0),
            l
        }
        );
        if (n)
            return ()=>{
                for (let o = 0; o < i.length; o++) {
                    const l = i[o];
                    typeof l == "function" ? l() : Og(t[o], null)
                }
            }
    }
}
function mn(...t) {
    return S.useCallback(Gv(...t), t)
}
function Ml(t, e=[]) {
    let n = [];
    function i(l, c) {
        const d = S.createContext(c)
          , h = n.length;
        n = [...n, c];
        const p = y=>{
            const {scope: v, children: w, ...C} = y
              , P = v?.[t]?.[h] || d
              , T = S.useMemo(()=>C, Object.values(C));
            return A.jsx(P.Provider, {
                value: T,
                children: w
            })
        }
        ;
        p.displayName = l + "Provider";
        function m(y, v) {
            const w = v?.[t]?.[h] || d
              , C = S.useContext(w);
            if (C)
                return C;
            if (c !== void 0)
                return c;
            throw new Error(`\`${y}\` must be used within \`${l}\``)
        }
        return [p, m]
    }
    const o = ()=>{
        const l = n.map(c=>S.createContext(c));
        return function(d) {
            const h = d?.[t] || l;
            return S.useMemo(()=>({
                [`__scope${t}`]: {
                    ...d,
                    [t]: h
                }
            }), [d, h])
        }
    }
    ;
    return o.scopeName = t,
    [i, AT(o, ...e)]
}
function AT(...t) {
    const e = t[0];
    if (t.length === 1)
        return e;
    const n = ()=>{
        const i = t.map(o=>({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(l) {
            const c = i.reduce((d,{useScope: h, scopeName: p})=>{
                const y = h(l)[`__scope${p}`];
                return {
                    ...d,
                    ...y
                }
            }
            , {});
            return S.useMemo(()=>({
                [`__scope${e.scopeName}`]: c
            }), [c])
        }
    }
    ;
    return n.scopeName = e.scopeName,
    n
}
function ll(t) {
    const e = NT(t)
      , n = S.forwardRef((i,o)=>{
        const {children: l, ...c} = i
          , d = S.Children.toArray(l)
          , h = d.find(DT);
        if (h) {
            const p = h.props.children
              , m = d.map(y=>y === h ? S.Children.count(p) > 1 ? S.Children.only(null) : S.isValidElement(p) ? p.props.children : null : y);
            return A.jsx(e, {
                ...c,
                ref: o,
                children: S.isValidElement(p) ? S.cloneElement(p, void 0, m) : null
            })
        }
        return A.jsx(e, {
            ...c,
            ref: o,
            children: l
        })
    }
    );
    return n.displayName = `${t}.Slot`,
    n
}
var RT = ll("Slot");
function NT(t) {
    const e = S.forwardRef((n,i)=>{
        const {children: o, ...l} = n;
        if (S.isValidElement(o)) {
            const c = IT(o)
              , d = OT(l, o.props);
            return o.type !== S.Fragment && (d.ref = i ? Gv(i, c) : c),
            S.cloneElement(o, d)
        }
        return S.Children.count(o) > 1 ? S.Children.only(null) : null
    }
    );
    return e.displayName = `${t}.SlotClone`,
    e
}
var Xv = Symbol("radix.slottable");
function MT(t) {
    const e = ({children: n})=>A.jsx(A.Fragment, {
        children: n
    });
    return e.displayName = `${t}.Slottable`,
    e.__radixId = Xv,
    e
}
function DT(t) {
    return S.isValidElement(t) && typeof t.type == "function" && "__radixId"in t.type && t.type.__radixId === Xv
}
function OT(t, e) {
    const n = {
        ...e
    };
    for (const i in e) {
        const o = t[i]
          , l = e[i];
        /^on[A-Z]/.test(i) ? o && l ? n[i] = (...d)=>{
            l(...d),
            o(...d)
        }
        : o && (n[i] = o) : i === "style" ? n[i] = {
            ...o,
            ...l
        } : i === "className" && (n[i] = [o, l].filter(Boolean).join(" "))
    }
    return {
        ...t,
        ...n
    }
}
function IT(t) {
    let e = Object.getOwnPropertyDescriptor(t.props, "ref")?.get
      , n = e && "isReactWarning"in e && e.isReactWarning;
    return n ? t.ref : (e = Object.getOwnPropertyDescriptor(t, "ref")?.get,
    n = e && "isReactWarning"in e && e.isReactWarning,
    n ? t.props.ref : t.props.ref || t.ref)
}
function LT(t) {
    const e = t + "CollectionProvider"
      , [n,i] = Ml(e)
      , [o,l] = n(e, {
        collectionRef: {
            current: null
        },
        itemMap: new Map
    })
      , c = P=>{
        const {scope: T, children: k} = P
          , N = vr.useRef(null)
          , O = vr.useRef(new Map).current;
        return A.jsx(o, {
            scope: T,
            itemMap: O,
            collectionRef: N,
            children: k
        })
    }
    ;
    c.displayName = e;
    const d = t + "CollectionSlot"
      , h = ll(d)
      , p = vr.forwardRef((P,T)=>{
        const {scope: k, children: N} = P
          , O = l(d, k)
          , j = mn(T, O.collectionRef);
        return A.jsx(h, {
            ref: j,
            children: N
        })
    }
    );
    p.displayName = d;
    const m = t + "CollectionItemSlot"
      , y = "data-radix-collection-item"
      , v = ll(m)
      , w = vr.forwardRef((P,T)=>{
        const {scope: k, children: N, ...O} = P
          , j = vr.useRef(null)
          , L = mn(T, j)
          , V = l(m, k);
        return vr.useEffect(()=>(V.itemMap.set(j, {
            ref: j,
            ...O
        }),
        ()=>{
            V.itemMap.delete(j)
        }
        )),
        A.jsx(v, {
            [y]: "",
            ref: L,
            children: N
        })
    }
    );
    w.displayName = m;
    function C(P) {
        const T = l(t + "CollectionConsumer", P);
        return vr.useCallback(()=>{
            const N = T.collectionRef.current;
            if (!N)
                return [];
            const O = Array.from(N.querySelectorAll(`[${y}]`));
            return Array.from(T.itemMap.values()).sort((V,z)=>O.indexOf(V.ref.current) - O.indexOf(z.ref.current))
        }
        , [T.collectionRef, T.itemMap])
    }
    return [{
        Provider: c,
        Slot: p,
        ItemSlot: w
    }, C, i]
}
var jT = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"]
  , Ot = jT.reduce((t,e)=>{
    const n = ll(`Primitive.${e}`)
      , i = S.forwardRef((o,l)=>{
        const {asChild: c, ...d} = o
          , h = c ? n : e;
        return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        A.jsx(h, {
            ...d,
            ref: l
        })
    }
    );
    return i.displayName = `Primitive.${e}`,
    {
        ...t,
        [e]: i
    }
}
, {});
function Yv(t, e) {
    t && Nl.flushSync(()=>t.dispatchEvent(e))
}
function kn(t) {
    const e = S.useRef(t);
    return S.useEffect(()=>{
        e.current = t
    }
    ),
    S.useMemo(()=>(...n)=>e.current?.(...n), [])
}
function FT(t, e=globalThis?.document) {
    const n = kn(t);
    S.useEffect(()=>{
        const i = o=>{
            o.key === "Escape" && n(o)
        }
        ;
        return e.addEventListener("keydown", i, {
            capture: !0
        }),
        ()=>e.removeEventListener("keydown", i, {
            capture: !0
        })
    }
    , [n, e])
}
var VT = "DismissableLayer", kd = "dismissableLayer.update", zT = "dismissableLayer.pointerDownOutside", BT = "dismissableLayer.focusOutside", Ig, Jv = S.createContext({
    layers: new Set,
    layersWithOutsidePointerEventsDisabled: new Set,
    branches: new Set
}), gf = S.forwardRef((t,e)=>{
    const {disableOutsidePointerEvents: n=!1, onEscapeKeyDown: i, onPointerDownOutside: o, onFocusOutside: l, onInteractOutside: c, onDismiss: d, ...h} = t
      , p = S.useContext(Jv)
      , [m,y] = S.useState(null)
      , v = m?.ownerDocument ?? globalThis?.document
      , [,w] = S.useState({})
      , C = mn(e, z=>y(z))
      , P = Array.from(p.layers)
      , [T] = [...p.layersWithOutsidePointerEventsDisabled].slice(-1)
      , k = P.indexOf(T)
      , N = m ? P.indexOf(m) : -1
      , O = p.layersWithOutsidePointerEventsDisabled.size > 0
      , j = N >= k
      , L = $T(z=>{
        const K = z.target
          , ie = [...p.branches].some(ue=>ue.contains(K));
        !j || ie || (o?.(z),
        c?.(z),
        z.defaultPrevented || d?.())
    }
    , v)
      , V = WT(z=>{
        const K = z.target;
        [...p.branches].some(ue=>ue.contains(K)) || (l?.(z),
        c?.(z),
        z.defaultPrevented || d?.())
    }
    , v);
    return FT(z=>{
        N === p.layers.size - 1 && (i?.(z),
        !z.defaultPrevented && d && (z.preventDefault(),
        d()))
    }
    , v),
    S.useEffect(()=>{
        if (m)
            return n && (p.layersWithOutsidePointerEventsDisabled.size === 0 && (Ig = v.body.style.pointerEvents,
            v.body.style.pointerEvents = "none"),
            p.layersWithOutsidePointerEventsDisabled.add(m)),
            p.layers.add(m),
            Lg(),
            ()=>{
                n && p.layersWithOutsidePointerEventsDisabled.size === 1 && (v.body.style.pointerEvents = Ig)
            }
    }
    , [m, v, n, p]),
    S.useEffect(()=>()=>{
        m && (p.layers.delete(m),
        p.layersWithOutsidePointerEventsDisabled.delete(m),
        Lg())
    }
    , [m, p]),
    S.useEffect(()=>{
        const z = ()=>w({});
        return document.addEventListener(kd, z),
        ()=>document.removeEventListener(kd, z)
    }
    , []),
    A.jsx(Ot.div, {
        ...h,
        ref: C,
        style: {
            pointerEvents: O ? j ? "auto" : "none" : void 0,
            ...t.style
        },
        onFocusCapture: ot(t.onFocusCapture, V.onFocusCapture),
        onBlurCapture: ot(t.onBlurCapture, V.onBlurCapture),
        onPointerDownCapture: ot(t.onPointerDownCapture, L.onPointerDownCapture)
    })
}
);
gf.displayName = VT;
var UT = "DismissableLayerBranch"
  , e0 = S.forwardRef((t,e)=>{
    const n = S.useContext(Jv)
      , i = S.useRef(null)
      , o = mn(e, i);
    return S.useEffect(()=>{
        const l = i.current;
        if (l)
            return n.branches.add(l),
            ()=>{
                n.branches.delete(l)
            }
    }
    , [n.branches]),
    A.jsx(Ot.div, {
        ...t,
        ref: o
    })
}
);
e0.displayName = UT;
function $T(t, e=globalThis?.document) {
    const n = kn(t)
      , i = S.useRef(!1)
      , o = S.useRef(()=>{}
    );
    return S.useEffect(()=>{
        const l = d=>{
            if (d.target && !i.current) {
                let h = function() {
                    t0(zT, n, p, {
                        discrete: !0
                    })
                };
                const p = {
                    originalEvent: d
                };
                d.pointerType === "touch" ? (e.removeEventListener("click", o.current),
                o.current = h,
                e.addEventListener("click", o.current, {
                    once: !0
                })) : h()
            } else
                e.removeEventListener("click", o.current);
            i.current = !1
        }
          , c = window.setTimeout(()=>{
            e.addEventListener("pointerdown", l)
        }
        , 0);
        return ()=>{
            window.clearTimeout(c),
            e.removeEventListener("pointerdown", l),
            e.removeEventListener("click", o.current)
        }
    }
    , [e, n]),
    {
        onPointerDownCapture: ()=>i.current = !0
    }
}
function WT(t, e=globalThis?.document) {
    const n = kn(t)
      , i = S.useRef(!1);
    return S.useEffect(()=>{
        const o = l=>{
            l.target && !i.current && t0(BT, n, {
                originalEvent: l
            }, {
                discrete: !1
            })
        }
        ;
        return e.addEventListener("focusin", o),
        ()=>e.removeEventListener("focusin", o)
    }
    , [e, n]),
    {
        onFocusCapture: ()=>i.current = !0,
        onBlurCapture: ()=>i.current = !1
    }
}
function Lg() {
    const t = new CustomEvent(kd);
    document.dispatchEvent(t)
}
function t0(t, e, n, {discrete: i}) {
    const o = n.originalEvent.target
      , l = new CustomEvent(t,{
        bubbles: !1,
        cancelable: !0,
        detail: n
    });
    e && o.addEventListener(t, e, {
        once: !0
    }),
    i ? Yv(o, l) : o.dispatchEvent(l)
}
var HT = gf
  , QT = e0
  , Xr = globalThis?.document ? S.useLayoutEffect : ()=>{}
  , KT = "Portal"
  , n0 = S.forwardRef((t,e)=>{
    const {container: n, ...i} = t
      , [o,l] = S.useState(!1);
    Xr(()=>l(!0), []);
    const c = n || o && globalThis?.document?.body;
    return c ? kT.createPortal(A.jsx(Ot.div, {
        ...i,
        ref: e
    }), c) : null
}
);
n0.displayName = KT;
function qT(t, e) {
    return S.useReducer((n,i)=>e[n][i] ?? n, t)
}
var yf = t=>{
    const {present: e, children: n} = t
      , i = ZT(e)
      , o = typeof n == "function" ? n({
        present: i.isPresent
    }) : S.Children.only(n)
      , l = mn(i.ref, GT(o));
    return typeof n == "function" || i.isPresent ? S.cloneElement(o, {
        ref: l
    }) : null
}
;
yf.displayName = "Presence";
function ZT(t) {
    const [e,n] = S.useState()
      , i = S.useRef({})
      , o = S.useRef(t)
      , l = S.useRef("none")
      , c = t ? "mounted" : "unmounted"
      , [d,h] = qT(c, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return S.useEffect(()=>{
        const p = Ha(i.current);
        l.current = d === "mounted" ? p : "none"
    }
    , [d]),
    Xr(()=>{
        const p = i.current
          , m = o.current;
        if (m !== t) {
            const v = l.current
              , w = Ha(p);
            t ? h("MOUNT") : w === "none" || p?.display === "none" ? h("UNMOUNT") : h(m && v !== w ? "ANIMATION_OUT" : "UNMOUNT"),
            o.current = t
        }
    }
    , [t, h]),
    Xr(()=>{
        if (e) {
            let p;
            const m = e.ownerDocument.defaultView ?? window
              , y = w=>{
                const P = Ha(i.current).includes(w.animationName);
                if (w.target === e && P && (h("ANIMATION_END"),
                !o.current)) {
                    const T = e.style.animationFillMode;
                    e.style.animationFillMode = "forwards",
                    p = m.setTimeout(()=>{
                        e.style.animationFillMode === "forwards" && (e.style.animationFillMode = T)
                    }
                    )
                }
            }
              , v = w=>{
                w.target === e && (l.current = Ha(i.current))
            }
            ;
            return e.addEventListener("animationstart", v),
            e.addEventListener("animationcancel", y),
            e.addEventListener("animationend", y),
            ()=>{
                m.clearTimeout(p),
                e.removeEventListener("animationstart", v),
                e.removeEventListener("animationcancel", y),
                e.removeEventListener("animationend", y)
            }
        } else
            h("ANIMATION_END")
    }
    , [e, h]),
    {
        isPresent: ["mounted", "unmountSuspended"].includes(d),
        ref: S.useCallback(p=>{
            p && (i.current = getComputedStyle(p)),
            n(p)
        }
        , [])
    }
}
function Ha(t) {
    return t?.animationName || "none"
}
function GT(t) {
    let e = Object.getOwnPropertyDescriptor(t.props, "ref")?.get
      , n = e && "isReactWarning"in e && e.isReactWarning;
    return n ? t.ref : (e = Object.getOwnPropertyDescriptor(t, "ref")?.get,
    n = e && "isReactWarning"in e && e.isReactWarning,
    n ? t.props.ref : t.props.ref || t.ref)
}
function XT({prop: t, defaultProp: e, onChange: n=()=>{}
}) {
    const [i,o] = YT({
        defaultProp: e,
        onChange: n
    })
      , l = t !== void 0
      , c = l ? t : i
      , d = kn(n)
      , h = S.useCallback(p=>{
        if (l) {
            const y = typeof p == "function" ? p(t) : p;
            y !== t && d(y)
        } else
            o(p)
    }
    , [l, t, o, d]);
    return [c, h]
}
function YT({defaultProp: t, onChange: e}) {
    const n = S.useState(t)
      , [i] = n
      , o = S.useRef(i)
      , l = kn(e);
    return S.useEffect(()=>{
        o.current !== i && (l(i),
        o.current = i)
    }
    , [i, o, l]),
    n
}
var JT = "VisuallyHidden"
  , Dl = S.forwardRef((t,e)=>A.jsx(Ot.span, {
    ...t,
    ref: e,
    style: {
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        ...t.style
    }
}));
Dl.displayName = JT;
var eb = Dl
  , vf = "ToastProvider"
  , [xf,tb,nb] = LT("Toast")
  , [r0] = Ml("Toast", [nb])
  , [rb,Ol] = r0(vf)
  , s0 = t=>{
    const {__scopeToast: e, label: n="Notification", duration: i=5e3, swipeDirection: o="right", swipeThreshold: l=50, children: c} = t
      , [d,h] = S.useState(null)
      , [p,m] = S.useState(0)
      , y = S.useRef(!1)
      , v = S.useRef(!1);
    return n.trim() || console.error(`Invalid prop \`label\` supplied to \`${vf}\`. Expected non-empty \`string\`.`),
    A.jsx(xf.Provider, {
        scope: e,
        children: A.jsx(rb, {
            scope: e,
            label: n,
            duration: i,
            swipeDirection: o,
            swipeThreshold: l,
            toastCount: p,
            viewport: d,
            onViewportChange: h,
            onToastAdd: S.useCallback(()=>m(w=>w + 1), []),
            onToastRemove: S.useCallback(()=>m(w=>w - 1), []),
            isFocusedToastEscapeKeyDownRef: y,
            isClosePausedRef: v,
            children: c
        })
    })
}
;
s0.displayName = vf;
var i0 = "ToastViewport"
  , sb = ["F8"]
  , Ad = "toast.viewportPause"
  , Rd = "toast.viewportResume"
  , o0 = S.forwardRef((t,e)=>{
    const {__scopeToast: n, hotkey: i=sb, label: o="Notifications ({hotkey})", ...l} = t
      , c = Ol(i0, n)
      , d = tb(n)
      , h = S.useRef(null)
      , p = S.useRef(null)
      , m = S.useRef(null)
      , y = S.useRef(null)
      , v = mn(e, y, c.onViewportChange)
      , w = i.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , C = c.toastCount > 0;
    S.useEffect(()=>{
        const T = k=>{
            i.length !== 0 && i.every(O=>k[O] || k.code === O) && y.current?.focus()
        }
        ;
        return document.addEventListener("keydown", T),
        ()=>document.removeEventListener("keydown", T)
    }
    , [i]),
    S.useEffect(()=>{
        const T = h.current
          , k = y.current;
        if (C && T && k) {
            const N = ()=>{
                if (!c.isClosePausedRef.current) {
                    const V = new CustomEvent(Ad);
                    k.dispatchEvent(V),
                    c.isClosePausedRef.current = !0
                }
            }
              , O = ()=>{
                if (c.isClosePausedRef.current) {
                    const V = new CustomEvent(Rd);
                    k.dispatchEvent(V),
                    c.isClosePausedRef.current = !1
                }
            }
              , j = V=>{
                !T.contains(V.relatedTarget) && O()
            }
              , L = ()=>{
                T.contains(document.activeElement) || O()
            }
            ;
            return T.addEventListener("focusin", N),
            T.addEventListener("focusout", j),
            T.addEventListener("pointermove", N),
            T.addEventListener("pointerleave", L),
            window.addEventListener("blur", N),
            window.addEventListener("focus", O),
            ()=>{
                T.removeEventListener("focusin", N),
                T.removeEventListener("focusout", j),
                T.removeEventListener("pointermove", N),
                T.removeEventListener("pointerleave", L),
                window.removeEventListener("blur", N),
                window.removeEventListener("focus", O)
            }
        }
    }
    , [C, c.isClosePausedRef]);
    const P = S.useCallback(({tabbingDirection: T})=>{
        const N = d().map(O=>{
            const j = O.ref.current
              , L = [j, ...yb(j)];
            return T === "forwards" ? L : L.reverse()
        }
        );
        return (T === "forwards" ? N.reverse() : N).flat()
    }
    , [d]);
    return S.useEffect(()=>{
        const T = y.current;
        if (T) {
            const k = N=>{
                const O = N.altKey || N.ctrlKey || N.metaKey;
                if (N.key === "Tab" && !O) {
                    const L = document.activeElement
                      , V = N.shiftKey;
                    if (N.target === T && V) {
                        p.current?.focus();
                        return
                    }
                    const ie = P({
                        tabbingDirection: V ? "backwards" : "forwards"
                    })
                      , ue = ie.findIndex(ve=>ve === L);
                    Jc(ie.slice(ue + 1)) ? N.preventDefault() : V ? p.current?.focus() : m.current?.focus()
                }
            }
            ;
            return T.addEventListener("keydown", k),
            ()=>T.removeEventListener("keydown", k)
        }
    }
    , [d, P]),
    A.jsxs(QT, {
        ref: h,
        role: "region",
        "aria-label": o.replace("{hotkey}", w),
        tabIndex: -1,
        style: {
            pointerEvents: C ? void 0 : "none"
        },
        children: [C && A.jsx(Nd, {
            ref: p,
            onFocusFromOutsideViewport: ()=>{
                const T = P({
                    tabbingDirection: "forwards"
                });
                Jc(T)
            }
        }), A.jsx(xf.Slot, {
            scope: n,
            children: A.jsx(Ot.ol, {
                tabIndex: -1,
                ...l,
                ref: v
            })
        }), C && A.jsx(Nd, {
            ref: m,
            onFocusFromOutsideViewport: ()=>{
                const T = P({
                    tabbingDirection: "backwards"
                });
                Jc(T)
            }
        })]
    })
}
);
o0.displayName = i0;
var a0 = "ToastFocusProxy"
  , Nd = S.forwardRef((t,e)=>{
    const {__scopeToast: n, onFocusFromOutsideViewport: i, ...o} = t
      , l = Ol(a0, n);
    return A.jsx(Dl, {
        "aria-hidden": !0,
        tabIndex: 0,
        ...o,
        ref: e,
        style: {
            position: "fixed"
        },
        onFocus: c=>{
            const d = c.relatedTarget;
            !l.viewport?.contains(d) && i()
        }
    })
}
);
Nd.displayName = a0;
var Il = "Toast"
  , ib = "toast.swipeStart"
  , ob = "toast.swipeMove"
  , ab = "toast.swipeCancel"
  , lb = "toast.swipeEnd"
  , l0 = S.forwardRef((t,e)=>{
    const {forceMount: n, open: i, defaultOpen: o, onOpenChange: l, ...c} = t
      , [d=!0,h] = XT({
        prop: i,
        defaultProp: o,
        onChange: l
    });
    return A.jsx(yf, {
        present: n || d,
        children: A.jsx(db, {
            open: d,
            ...c,
            ref: e,
            onClose: ()=>h(!1),
            onPause: kn(t.onPause),
            onResume: kn(t.onResume),
            onSwipeStart: ot(t.onSwipeStart, p=>{
                p.currentTarget.setAttribute("data-swipe", "start")
            }
            ),
            onSwipeMove: ot(t.onSwipeMove, p=>{
                const {x: m, y} = p.detail.delta;
                p.currentTarget.setAttribute("data-swipe", "move"),
                p.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${m}px`),
                p.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${y}px`)
            }
            ),
            onSwipeCancel: ot(t.onSwipeCancel, p=>{
                p.currentTarget.setAttribute("data-swipe", "cancel"),
                p.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                p.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                p.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
                p.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
            }
            ),
            onSwipeEnd: ot(t.onSwipeEnd, p=>{
                const {x: m, y} = p.detail.delta;
                p.currentTarget.setAttribute("data-swipe", "end"),
                p.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                p.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                p.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${m}px`),
                p.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${y}px`),
                h(!1)
            }
            )
        })
    })
}
);
l0.displayName = Il;
var [ub,cb] = r0(Il, {
    onClose() {}
})
  , db = S.forwardRef((t,e)=>{
    const {__scopeToast: n, type: i="foreground", duration: o, open: l, onClose: c, onEscapeKeyDown: d, onPause: h, onResume: p, onSwipeStart: m, onSwipeMove: y, onSwipeCancel: v, onSwipeEnd: w, ...C} = t
      , P = Ol(Il, n)
      , [T,k] = S.useState(null)
      , N = mn(e, X=>k(X))
      , O = S.useRef(null)
      , j = S.useRef(null)
      , L = o || P.duration
      , V = S.useRef(0)
      , z = S.useRef(L)
      , K = S.useRef(0)
      , {onToastAdd: ie, onToastRemove: ue} = P
      , ve = kn(()=>{
        T?.contains(document.activeElement) && P.viewport?.focus(),
        c()
    }
    )
      , le = S.useCallback(X=>{
        !X || X === 1 / 0 || (window.clearTimeout(K.current),
        V.current = new Date().getTime(),
        K.current = window.setTimeout(ve, X))
    }
    , [ve]);
    S.useEffect(()=>{
        const X = P.viewport;
        if (X) {
            const _e = ()=>{
                le(z.current),
                p?.()
            }
              , he = ()=>{
                const te = new Date().getTime() - V.current;
                z.current = z.current - te,
                window.clearTimeout(K.current),
                h?.()
            }
            ;
            return X.addEventListener(Ad, he),
            X.addEventListener(Rd, _e),
            ()=>{
                X.removeEventListener(Ad, he),
                X.removeEventListener(Rd, _e)
            }
        }
    }
    , [P.viewport, L, h, p, le]),
    S.useEffect(()=>{
        l && !P.isClosePausedRef.current && le(L)
    }
    , [l, L, P.isClosePausedRef, le]),
    S.useEffect(()=>(ie(),
    ()=>ue()), [ie, ue]);
    const Se = S.useMemo(()=>T ? m0(T) : null, [T]);
    return P.viewport ? A.jsxs(A.Fragment, {
        children: [Se && A.jsx(fb, {
            __scopeToast: n,
            role: "status",
            "aria-live": i === "foreground" ? "assertive" : "polite",
            "aria-atomic": !0,
            children: Se
        }), A.jsx(ub, {
            scope: n,
            onClose: ve,
            children: Nl.createPortal(A.jsx(xf.ItemSlot, {
                scope: n,
                children: A.jsx(HT, {
                    asChild: !0,
                    onEscapeKeyDown: ot(d, ()=>{
                        P.isFocusedToastEscapeKeyDownRef.current || ve(),
                        P.isFocusedToastEscapeKeyDownRef.current = !1
                    }
                    ),
                    children: A.jsx(Ot.li, {
                        role: "status",
                        "aria-live": "off",
                        "aria-atomic": !0,
                        tabIndex: 0,
                        "data-state": l ? "open" : "closed",
                        "data-swipe-direction": P.swipeDirection,
                        ...C,
                        ref: N,
                        style: {
                            userSelect: "none",
                            touchAction: "none",
                            ...t.style
                        },
                        onKeyDown: ot(t.onKeyDown, X=>{
                            X.key === "Escape" && (d?.(X.nativeEvent),
                            X.nativeEvent.defaultPrevented || (P.isFocusedToastEscapeKeyDownRef.current = !0,
                            ve()))
                        }
                        ),
                        onPointerDown: ot(t.onPointerDown, X=>{
                            X.button === 0 && (O.current = {
                                x: X.clientX,
                                y: X.clientY
                            })
                        }
                        ),
                        onPointerMove: ot(t.onPointerMove, X=>{
                            if (!O.current)
                                return;
                            const _e = X.clientX - O.current.x
                              , he = X.clientY - O.current.y
                              , te = !!j.current
                              , F = ["left", "right"].includes(P.swipeDirection)
                              , G = ["left", "up"].includes(P.swipeDirection) ? Math.min : Math.max
                              , Z = F ? G(0, _e) : 0
                              , R = F ? 0 : G(0, he)
                              , B = X.pointerType === "touch" ? 10 : 2
                              , ye = {
                                x: Z,
                                y: R
                            }
                              , xe = {
                                originalEvent: X,
                                delta: ye
                            };
                            te ? (j.current = ye,
                            Qa(ob, y, xe, {
                                discrete: !1
                            })) : jg(ye, P.swipeDirection, B) ? (j.current = ye,
                            Qa(ib, m, xe, {
                                discrete: !1
                            }),
                            X.target.setPointerCapture(X.pointerId)) : (Math.abs(_e) > B || Math.abs(he) > B) && (O.current = null)
                        }
                        ),
                        onPointerUp: ot(t.onPointerUp, X=>{
                            const _e = j.current
                              , he = X.target;
                            if (he.hasPointerCapture(X.pointerId) && he.releasePointerCapture(X.pointerId),
                            j.current = null,
                            O.current = null,
                            _e) {
                                const te = X.currentTarget
                                  , F = {
                                    originalEvent: X,
                                    delta: _e
                                };
                                jg(_e, P.swipeDirection, P.swipeThreshold) ? Qa(lb, w, F, {
                                    discrete: !0
                                }) : Qa(ab, v, F, {
                                    discrete: !0
                                }),
                                te.addEventListener("click", G=>G.preventDefault(), {
                                    once: !0
                                })
                            }
                        }
                        )
                    })
                })
            }), P.viewport)
        })]
    }) : null
}
)
  , fb = t=>{
    const {__scopeToast: e, children: n, ...i} = t
      , o = Ol(Il, e)
      , [l,c] = S.useState(!1)
      , [d,h] = S.useState(!1);
    return mb(()=>c(!0)),
    S.useEffect(()=>{
        const p = window.setTimeout(()=>h(!0), 1e3);
        return ()=>window.clearTimeout(p)
    }
    , []),
    d ? null : A.jsx(n0, {
        asChild: !0,
        children: A.jsx(Dl, {
            ...i,
            children: l && A.jsxs(A.Fragment, {
                children: [o.label, " ", n]
            })
        })
    })
}
  , hb = "ToastTitle"
  , u0 = S.forwardRef((t,e)=>{
    const {__scopeToast: n, ...i} = t;
    return A.jsx(Ot.div, {
        ...i,
        ref: e
    })
}
);
u0.displayName = hb;
var pb = "ToastDescription"
  , c0 = S.forwardRef((t,e)=>{
    const {__scopeToast: n, ...i} = t;
    return A.jsx(Ot.div, {
        ...i,
        ref: e
    })
}
);
c0.displayName = pb;
var d0 = "ToastAction"
  , f0 = S.forwardRef((t,e)=>{
    const {altText: n, ...i} = t;
    return n.trim() ? A.jsx(p0, {
        altText: n,
        asChild: !0,
        children: A.jsx(wf, {
            ...i,
            ref: e
        })
    }) : (console.error(`Invalid prop \`altText\` supplied to \`${d0}\`. Expected non-empty \`string\`.`),
    null)
}
);
f0.displayName = d0;
var h0 = "ToastClose"
  , wf = S.forwardRef((t,e)=>{
    const {__scopeToast: n, ...i} = t
      , o = cb(h0, n);
    return A.jsx(p0, {
        asChild: !0,
        children: A.jsx(Ot.button, {
            type: "button",
            ...i,
            ref: e,
            onClick: ot(t.onClick, o.onClose)
        })
    })
}
);
wf.displayName = h0;
var p0 = S.forwardRef((t,e)=>{
    const {__scopeToast: n, altText: i, ...o} = t;
    return A.jsx(Ot.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": i || void 0,
        ...o,
        ref: e
    })
}
);
function m0(t) {
    const e = [];
    return Array.from(t.childNodes).forEach(i=>{
        if (i.nodeType === i.TEXT_NODE && i.textContent && e.push(i.textContent),
        gb(i)) {
            const o = i.ariaHidden || i.hidden || i.style.display === "none"
              , l = i.dataset.radixToastAnnounceExclude === "";
            if (!o)
                if (l) {
                    const c = i.dataset.radixToastAnnounceAlt;
                    c && e.push(c)
                } else
                    e.push(...m0(i))
        }
    }
    ),
    e
}
function Qa(t, e, n, {discrete: i}) {
    const o = n.originalEvent.currentTarget
      , l = new CustomEvent(t,{
        bubbles: !0,
        cancelable: !0,
        detail: n
    });
    e && o.addEventListener(t, e, {
        once: !0
    }),
    i ? Yv(o, l) : o.dispatchEvent(l)
}
var jg = (t,e,n=0)=>{
    const i = Math.abs(t.x)
      , o = Math.abs(t.y)
      , l = i > o;
    return e === "left" || e === "right" ? l && i > n : !l && o > n
}
;
function mb(t=()=>{}
) {
    const e = kn(t);
    Xr(()=>{
        let n = 0
          , i = 0;
        return n = window.requestAnimationFrame(()=>i = window.requestAnimationFrame(e)),
        ()=>{
            window.cancelAnimationFrame(n),
            window.cancelAnimationFrame(i)
        }
    }
    , [e])
}
function gb(t) {
    return t.nodeType === t.ELEMENT_NODE
}
function yb(t) {
    const e = []
      , n = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, {
        acceptNode: i=>{
            const o = i.tagName === "INPUT" && i.type === "hidden";
            return i.disabled || i.hidden || o ? NodeFilter.FILTER_SKIP : i.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    });
    for (; n.nextNode(); )
        e.push(n.currentNode);
    return e
}
function Jc(t) {
    const e = document.activeElement;
    return t.some(n=>n === e ? !0 : (n.focus(),
    document.activeElement !== e))
}
var vb = s0
  , g0 = o0
  , y0 = l0
  , v0 = u0
  , x0 = c0
  , w0 = f0
  , S0 = wf;
function P0(t) {
    var e, n, i = "";
    if (typeof t == "string" || typeof t == "number")
        i += t;
    else if (typeof t == "object")
        if (Array.isArray(t)) {
            var o = t.length;
            for (e = 0; e < o; e++)
                t[e] && (n = P0(t[e])) && (i && (i += " "),
                i += n)
        } else
            for (n in t)
                t[n] && (i && (i += " "),
                i += n);
    return i
}
function T0() {
    for (var t, e, n = 0, i = "", o = arguments.length; n < o; n++)
        (t = arguments[n]) && (e = P0(t)) && (i && (i += " "),
        i += e);
    return i
}
const Fg = t=>typeof t == "boolean" ? `${t}` : t === 0 ? "0" : t
  , Vg = T0
  , b0 = (t,e)=>n=>{
    var i;
    if (e?.variants == null)
        return Vg(t, n?.class, n?.className);
    const {variants: o, defaultVariants: l} = e
      , c = Object.keys(o).map(p=>{
        const m = n?.[p]
          , y = l?.[p];
        if (m === null)
            return null;
        const v = Fg(m) || Fg(y);
        return o[p][v]
    }
    )
      , d = n && Object.entries(n).reduce((p,m)=>{
        let[y,v] = m;
        return v === void 0 || (p[y] = v),
        p
    }
    , {})
      , h = e == null || (i = e.compoundVariants) === null || i === void 0 ? void 0 : i.reduce((p,m)=>{
        let {class: y, className: v, ...w} = m;
        return Object.entries(w).every(C=>{
            let[P,T] = C;
            return Array.isArray(T) ? T.includes({
                ...l,
                ...d
            }[P]) : {
                ...l,
                ...d
            }[P] === T
        }
        ) ? [...p, y, v] : p
    }
    , []);
    return Vg(t, c, h, n?.class, n?.className)
}
;
const xb = t=>t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , C0 = (...t)=>t.filter((e,n,i)=>!!e && i.indexOf(e) === n).join(" ");
var wb = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
const Sb = S.forwardRef(({color: t="currentColor", size: e=24, strokeWidth: n=2, absoluteStrokeWidth: i, className: o="", children: l, iconNode: c, ...d},h)=>S.createElement("svg", {
    ref: h,
    ...wb,
    width: e,
    height: e,
    stroke: t,
    strokeWidth: i ? Number(n) * 24 / Number(e) : n,
    className: C0("lucide", o),
    ...d
}, [...c.map(([p,m])=>S.createElement(p, m)), ...Array.isArray(l) ? l : [l]]));
const Qt = (t,e)=>{
    const n = S.forwardRef(({className: i, ...o},l)=>S.createElement(Sb, {
        ref: l,
        iconNode: e,
        className: C0(`lucide-${xb(t)}`, i),
        ...o
    }));
    return n.displayName = `${t}`,
    n
}
;
const Pb = Qt("ArrowLeft", [["path", {
    d: "m12 19-7-7 7-7",
    key: "1l729n"
}], ["path", {
    d: "M19 12H5",
    key: "x3x0zl"
}]]);
const Tb = Qt("ArrowRight", [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}], ["path", {
    d: "m12 5 7 7-7 7",
    key: "xquz4c"
}]]);
const bb = Qt("CircleAlert", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["line", {
    x1: "12",
    x2: "12",
    y1: "8",
    y2: "12",
    key: "1pkeuh"
}], ["line", {
    x1: "12",
    x2: "12.01",
    y1: "16",
    y2: "16",
    key: "4dfq90"
}]]);
const Cb = Qt("CircleX", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["path", {
    d: "m15 9-6 6",
    key: "1uzhvr"
}], ["path", {
    d: "m9 9 6 6",
    key: "z0biqf"
}]]);
const _b = Qt("Clock", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["polyline", {
    points: "12 6 12 12 16 14",
    key: "68esgv"
}]]);
const Eb = Qt("ExternalLink", [["path", {
    d: "M15 3h6v6",
    key: "1q9fwt"
}], ["path", {
    d: "M10 14 21 3",
    key: "gplh6r"
}], ["path", {
    d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
    key: "a6xqqp"
}]]);
const Sf = Qt("Globe", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["path", {
    d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
    key: "13o1zl"
}], ["path", {
    d: "M2 12h20",
    key: "9i4pu4"
}]]);
const kb = Qt("History", [["path", {
    d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
    key: "1357e3"
}], ["path", {
    d: "M3 3v5h5",
    key: "1xhq8a"
}], ["path", {
    d: "M12 7v5l4 2",
    key: "1fdv2h"
}]]);
const Ab = Qt("Lock", [["rect", {
    width: "18",
    height: "11",
    x: "3",
    y: "11",
    rx: "2",
    ry: "2",
    key: "1w4ew1"
}], ["path", {
    d: "M7 11V7a5 5 0 0 1 10 0v4",
    key: "fwvmzm"
}]]);
const Rb = Qt("RefreshCw", [["path", {
    d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
    key: "v9h5vc"
}], ["path", {
    d: "M21 3v5h-5",
    key: "1q7to0"
}], ["path", {
    d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
    key: "3uifl3"
}], ["path", {
    d: "M8 16H3v5",
    key: "1cv678"
}]]);
const Nb = Qt("ShieldCheck", [["path", {
    d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
    key: "oel41y"
}], ["path", {
    d: "m9 12 2 2 4-4",
    key: "dzmm74"
}]]);
const Mb = Qt("X", [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]]);
const Db = Qt("Zap", [["path", {
    d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
    key: "1xq2db"
}]])
  , Pf = "-"
  , Ob = t=>{
    const e = Lb(t)
      , {conflictingClassGroups: n, conflictingClassGroupModifiers: i} = t;
    return {
        getClassGroupId: c=>{
            const d = c.split(Pf);
            return d[0] === "" && d.length !== 1 && d.shift(),
            _0(d, e) || Ib(c)
        }
        ,
        getConflictingClassGroupIds: (c,d)=>{
            const h = n[c] || [];
            return d && i[c] ? [...h, ...i[c]] : h
        }
    }
}
  , _0 = (t,e)=>{
    if (t.length === 0)
        return e.classGroupId;
    const n = t[0]
      , i = e.nextPart.get(n)
      , o = i ? _0(t.slice(1), i) : void 0;
    if (o)
        return o;
    if (e.validators.length === 0)
        return;
    const l = t.join(Pf);
    return e.validators.find(({validator: c})=>c(l))?.classGroupId
}
  , zg = /^\[(.+)\]$/
  , Ib = t=>{
    if (zg.test(t)) {
        const e = zg.exec(t)[1]
          , n = e?.substring(0, e.indexOf(":"));
        if (n)
            return "arbitrary.." + n
    }
}
  , Lb = t=>{
    const {theme: e, prefix: n} = t
      , i = {
        nextPart: new Map,
        validators: []
    };
    return Fb(Object.entries(t.classGroups), n).forEach(([l,c])=>{
        Md(c, i, l, e)
    }
    ),
    i
}
  , Md = (t,e,n,i)=>{
    t.forEach(o=>{
        if (typeof o == "string") {
            const l = o === "" ? e : Bg(e, o);
            l.classGroupId = n;
            return
        }
        if (typeof o == "function") {
            if (jb(o)) {
                Md(o(i), e, n, i);
                return
            }
            e.validators.push({
                validator: o,
                classGroupId: n
            });
            return
        }
        Object.entries(o).forEach(([l,c])=>{
            Md(c, Bg(e, l), n, i)
        }
        )
    }
    )
}
  , Bg = (t,e)=>{
    let n = t;
    return e.split(Pf).forEach(i=>{
        n.nextPart.has(i) || n.nextPart.set(i, {
            nextPart: new Map,
            validators: []
        }),
        n = n.nextPart.get(i)
    }
    ),
    n
}
  , jb = t=>t.isThemeGetter
  , Fb = (t,e)=>e ? t.map(([n,i])=>{
    const o = i.map(l=>typeof l == "string" ? e + l : typeof l == "object" ? Object.fromEntries(Object.entries(l).map(([c,d])=>[e + c, d])) : l);
    return [n, o]
}
) : t
  , Vb = t=>{
    if (t < 1)
        return {
            get: ()=>{}
            ,
            set: ()=>{}
        };
    let e = 0
      , n = new Map
      , i = new Map;
    const o = (l,c)=>{
        n.set(l, c),
        e++,
        e > t && (e = 0,
        i = n,
        n = new Map)
    }
    ;
    return {
        get(l) {
            let c = n.get(l);
            if (c !== void 0)
                return c;
            if ((c = i.get(l)) !== void 0)
                return o(l, c),
                c
        },
        set(l, c) {
            n.has(l) ? n.set(l, c) : o(l, c)
        }
    }
}
  , E0 = "!"
  , zb = t=>{
    const {separator: e, experimentalParseClassName: n} = t
      , i = e.length === 1
      , o = e[0]
      , l = e.length
      , c = d=>{
        const h = [];
        let p = 0, m = 0, y;
        for (let T = 0; T < d.length; T++) {
            let k = d[T];
            if (p === 0) {
                if (k === o && (i || d.slice(T, T + l) === e)) {
                    h.push(d.slice(m, T)),
                    m = T + l;
                    continue
                }
                if (k === "/") {
                    y = T;
                    continue
                }
            }
            k === "[" ? p++ : k === "]" && p--
        }
        const v = h.length === 0 ? d : d.substring(m)
          , w = v.startsWith(E0)
          , C = w ? v.substring(1) : v
          , P = y && y > m ? y - m : void 0;
        return {
            modifiers: h,
            hasImportantModifier: w,
            baseClassName: C,
            maybePostfixModifierPosition: P
        }
    }
    ;
    return n ? d=>n({
        className: d,
        parseClassName: c
    }) : c
}
  , Bb = t=>{
    if (t.length <= 1)
        return t;
    const e = [];
    let n = [];
    return t.forEach(i=>{
        i[0] === "[" ? (e.push(...n.sort(), i),
        n = []) : n.push(i)
    }
    ),
    e.push(...n.sort()),
    e
}
  , Ub = t=>({
    cache: Vb(t.cacheSize),
    parseClassName: zb(t),
    ...Ob(t)
})
  , $b = /\s+/
  , Wb = (t,e)=>{
    const {parseClassName: n, getClassGroupId: i, getConflictingClassGroupIds: o} = e
      , l = []
      , c = t.trim().split($b);
    let d = "";
    for (let h = c.length - 1; h >= 0; h -= 1) {
        const p = c[h]
          , {modifiers: m, hasImportantModifier: y, baseClassName: v, maybePostfixModifierPosition: w} = n(p);
        let C = !!w
          , P = i(C ? v.substring(0, w) : v);
        if (!P) {
            if (!C) {
                d = p + (d.length > 0 ? " " + d : d);
                continue
            }
            if (P = i(v),
            !P) {
                d = p + (d.length > 0 ? " " + d : d);
                continue
            }
            C = !1
        }
        const T = Bb(m).join(":")
          , k = y ? T + E0 : T
          , N = k + P;
        if (l.includes(N))
            continue;
        l.push(N);
        const O = o(P, C);
        for (let j = 0; j < O.length; ++j) {
            const L = O[j];
            l.push(k + L)
        }
        d = p + (d.length > 0 ? " " + d : d)
    }
    return d
}
;
function Hb() {
    let t = 0, e, n, i = "";
    for (; t < arguments.length; )
        (e = arguments[t++]) && (n = k0(e)) && (i && (i += " "),
        i += n);
    return i
}
const k0 = t=>{
    if (typeof t == "string")
        return t;
    let e, n = "";
    for (let i = 0; i < t.length; i++)
        t[i] && (e = k0(t[i])) && (n && (n += " "),
        n += e);
    return n
}
;
function Qb(t, ...e) {
    let n, i, o, l = c;
    function c(h) {
        const p = e.reduce((m,y)=>y(m), t());
        return n = Ub(p),
        i = n.cache.get,
        o = n.cache.set,
        l = d,
        d(h)
    }
    function d(h) {
        const p = i(h);
        if (p)
            return p;
        const m = Wb(h, n);
        return o(h, m),
        m
    }
    return function() {
        return l(Hb.apply(null, arguments))
    }
}
const Be = t=>{
    const e = n=>n[t] || [];
    return e.isThemeGetter = !0,
    e
}
  , A0 = /^\[(?:([a-z-]+):)?(.+)\]$/i
  , Kb = /^\d+\/\d+$/
  , qb = new Set(["px", "full", "screen"])
  , Zb = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , Gb = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , Xb = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/
  , Yb = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
  , Jb = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
  , Un = t=>js(t) || qb.has(t) || Kb.test(t)
  , gr = t=>Xs(t, "length", aC)
  , js = t=>!!t && !Number.isNaN(Number(t))
  , ed = t=>Xs(t, "number", js)
  , Ui = t=>!!t && Number.isInteger(Number(t))
  , eC = t=>t.endsWith("%") && js(t.slice(0, -1))
  , Pe = t=>A0.test(t)
  , yr = t=>Zb.test(t)
  , tC = new Set(["length", "size", "percentage"])
  , nC = t=>Xs(t, tC, R0)
  , rC = t=>Xs(t, "position", R0)
  , sC = new Set(["image", "url"])
  , iC = t=>Xs(t, sC, uC)
  , oC = t=>Xs(t, "", lC)
  , $i = ()=>!0
  , Xs = (t,e,n)=>{
    const i = A0.exec(t);
    return i ? i[1] ? typeof e == "string" ? i[1] === e : e.has(i[1]) : n(i[2]) : !1
}
  , aC = t=>Gb.test(t) && !Xb.test(t)
  , R0 = ()=>!1
  , lC = t=>Yb.test(t)
  , uC = t=>Jb.test(t)
  , cC = ()=>{
    const t = Be("colors")
      , e = Be("spacing")
      , n = Be("blur")
      , i = Be("brightness")
      , o = Be("borderColor")
      , l = Be("borderRadius")
      , c = Be("borderSpacing")
      , d = Be("borderWidth")
      , h = Be("contrast")
      , p = Be("grayscale")
      , m = Be("hueRotate")
      , y = Be("invert")
      , v = Be("gap")
      , w = Be("gradientColorStops")
      , C = Be("gradientColorStopPositions")
      , P = Be("inset")
      , T = Be("margin")
      , k = Be("opacity")
      , N = Be("padding")
      , O = Be("saturate")
      , j = Be("scale")
      , L = Be("sepia")
      , V = Be("skew")
      , z = Be("space")
      , K = Be("translate")
      , ie = ()=>["auto", "contain", "none"]
      , ue = ()=>["auto", "hidden", "clip", "visible", "scroll"]
      , ve = ()=>["auto", Pe, e]
      , le = ()=>[Pe, e]
      , Se = ()=>["", Un, gr]
      , X = ()=>["auto", js, Pe]
      , _e = ()=>["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
      , he = ()=>["solid", "dashed", "dotted", "double", "none"]
      , te = ()=>["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
      , F = ()=>["start", "end", "center", "between", "around", "evenly", "stretch"]
      , G = ()=>["", "0", Pe]
      , Z = ()=>["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
      , R = ()=>[js, Pe];
    return {
        cacheSize: 500,
        separator: ":",
        theme: {
            colors: [$i],
            spacing: [Un, gr],
            blur: ["none", "", yr, Pe],
            brightness: R(),
            borderColor: [t],
            borderRadius: ["none", "", "full", yr, Pe],
            borderSpacing: le(),
            borderWidth: Se(),
            contrast: R(),
            grayscale: G(),
            hueRotate: R(),
            invert: G(),
            gap: le(),
            gradientColorStops: [t],
            gradientColorStopPositions: [eC, gr],
            inset: ve(),
            margin: ve(),
            opacity: R(),
            padding: le(),
            saturate: R(),
            scale: R(),
            sepia: G(),
            skew: R(),
            space: le(),
            translate: le()
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", "video", Pe]
            }],
            container: ["container"],
            columns: [{
                columns: [yr]
            }],
            "break-after": [{
                "break-after": Z()
            }],
            "break-before": [{
                "break-before": Z()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            float: [{
                float: ["right", "left", "none", "start", "end"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none", "start", "end"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: [..._e(), Pe]
            }],
            overflow: [{
                overflow: ue()
            }],
            "overflow-x": [{
                "overflow-x": ue()
            }],
            "overflow-y": [{
                "overflow-y": ue()
            }],
            overscroll: [{
                overscroll: ie()
            }],
            "overscroll-x": [{
                "overscroll-x": ie()
            }],
            "overscroll-y": [{
                "overscroll-y": ie()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: [P]
            }],
            "inset-x": [{
                "inset-x": [P]
            }],
            "inset-y": [{
                "inset-y": [P]
            }],
            start: [{
                start: [P]
            }],
            end: [{
                end: [P]
            }],
            top: [{
                top: [P]
            }],
            right: [{
                right: [P]
            }],
            bottom: [{
                bottom: [P]
            }],
            left: [{
                left: [P]
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: ["auto", Ui, Pe]
            }],
            basis: [{
                basis: ve()
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["wrap", "wrap-reverse", "nowrap"]
            }],
            flex: [{
                flex: ["1", "auto", "initial", "none", Pe]
            }],
            grow: [{
                grow: G()
            }],
            shrink: [{
                shrink: G()
            }],
            order: [{
                order: ["first", "last", "none", Ui, Pe]
            }],
            "grid-cols": [{
                "grid-cols": [$i]
            }],
            "col-start-end": [{
                col: ["auto", {
                    span: ["full", Ui, Pe]
                }, Pe]
            }],
            "col-start": [{
                "col-start": X()
            }],
            "col-end": [{
                "col-end": X()
            }],
            "grid-rows": [{
                "grid-rows": [$i]
            }],
            "row-start-end": [{
                row: ["auto", {
                    span: [Ui, Pe]
                }, Pe]
            }],
            "row-start": [{
                "row-start": X()
            }],
            "row-end": [{
                "row-end": X()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": ["auto", "min", "max", "fr", Pe]
            }],
            "auto-rows": [{
                "auto-rows": ["auto", "min", "max", "fr", Pe]
            }],
            gap: [{
                gap: [v]
            }],
            "gap-x": [{
                "gap-x": [v]
            }],
            "gap-y": [{
                "gap-y": [v]
            }],
            "justify-content": [{
                justify: ["normal", ...F()]
            }],
            "justify-items": [{
                "justify-items": ["start", "end", "center", "stretch"]
            }],
            "justify-self": [{
                "justify-self": ["auto", "start", "end", "center", "stretch"]
            }],
            "align-content": [{
                content: ["normal", ...F(), "baseline"]
            }],
            "align-items": [{
                items: ["start", "end", "center", "baseline", "stretch"]
            }],
            "align-self": [{
                self: ["auto", "start", "end", "center", "stretch", "baseline"]
            }],
            "place-content": [{
                "place-content": [...F(), "baseline"]
            }],
            "place-items": [{
                "place-items": ["start", "end", "center", "baseline", "stretch"]
            }],
            "place-self": [{
                "place-self": ["auto", "start", "end", "center", "stretch"]
            }],
            p: [{
                p: [N]
            }],
            px: [{
                px: [N]
            }],
            py: [{
                py: [N]
            }],
            ps: [{
                ps: [N]
            }],
            pe: [{
                pe: [N]
            }],
            pt: [{
                pt: [N]
            }],
            pr: [{
                pr: [N]
            }],
            pb: [{
                pb: [N]
            }],
            pl: [{
                pl: [N]
            }],
            m: [{
                m: [T]
            }],
            mx: [{
                mx: [T]
            }],
            my: [{
                my: [T]
            }],
            ms: [{
                ms: [T]
            }],
            me: [{
                me: [T]
            }],
            mt: [{
                mt: [T]
            }],
            mr: [{
                mr: [T]
            }],
            mb: [{
                mb: [T]
            }],
            ml: [{
                ml: [T]
            }],
            "space-x": [{
                "space-x": [z]
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": [z]
            }],
            "space-y-reverse": ["space-y-reverse"],
            w: [{
                w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", Pe, e]
            }],
            "min-w": [{
                "min-w": [Pe, e, "min", "max", "fit"]
            }],
            "max-w": [{
                "max-w": [Pe, e, "none", "full", "min", "max", "fit", "prose", {
                    screen: [yr]
                }, yr]
            }],
            h: [{
                h: [Pe, e, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "min-h": [{
                "min-h": [Pe, e, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "max-h": [{
                "max-h": [Pe, e, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            size: [{
                size: [Pe, e, "auto", "min", "max", "fit"]
            }],
            "font-size": [{
                text: ["base", yr, gr]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", ed]
            }],
            "font-family": [{
                font: [$i]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            tracking: [{
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", Pe]
            }],
            "line-clamp": [{
                "line-clamp": ["none", js, ed]
            }],
            leading: [{
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Un, Pe]
            }],
            "list-image": [{
                "list-image": ["none", Pe]
            }],
            "list-style-type": [{
                list: ["none", "disc", "decimal", Pe]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "placeholder-color": [{
                placeholder: [t]
            }],
            "placeholder-opacity": [{
                "placeholder-opacity": [k]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "text-color": [{
                text: [t]
            }],
            "text-opacity": [{
                "text-opacity": [k]
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [...he(), "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: ["auto", "from-font", Un, gr]
            }],
            "underline-offset": [{
                "underline-offset": ["auto", Un, Pe]
            }],
            "text-decoration-color": [{
                decoration: [t]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{
                text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            indent: [{
                indent: le()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Pe]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", Pe]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-opacity": [{
                "bg-opacity": [k]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: [..._e(), rC]
            }],
            "bg-repeat": [{
                bg: ["no-repeat", {
                    repeat: ["", "x", "y", "round", "space"]
                }]
            }],
            "bg-size": [{
                bg: ["auto", "cover", "contain", nC]
            }],
            "bg-image": [{
                bg: ["none", {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                }, iC]
            }],
            "bg-color": [{
                bg: [t]
            }],
            "gradient-from-pos": [{
                from: [C]
            }],
            "gradient-via-pos": [{
                via: [C]
            }],
            "gradient-to-pos": [{
                to: [C]
            }],
            "gradient-from": [{
                from: [w]
            }],
            "gradient-via": [{
                via: [w]
            }],
            "gradient-to": [{
                to: [w]
            }],
            rounded: [{
                rounded: [l]
            }],
            "rounded-s": [{
                "rounded-s": [l]
            }],
            "rounded-e": [{
                "rounded-e": [l]
            }],
            "rounded-t": [{
                "rounded-t": [l]
            }],
            "rounded-r": [{
                "rounded-r": [l]
            }],
            "rounded-b": [{
                "rounded-b": [l]
            }],
            "rounded-l": [{
                "rounded-l": [l]
            }],
            "rounded-ss": [{
                "rounded-ss": [l]
            }],
            "rounded-se": [{
                "rounded-se": [l]
            }],
            "rounded-ee": [{
                "rounded-ee": [l]
            }],
            "rounded-es": [{
                "rounded-es": [l]
            }],
            "rounded-tl": [{
                "rounded-tl": [l]
            }],
            "rounded-tr": [{
                "rounded-tr": [l]
            }],
            "rounded-br": [{
                "rounded-br": [l]
            }],
            "rounded-bl": [{
                "rounded-bl": [l]
            }],
            "border-w": [{
                border: [d]
            }],
            "border-w-x": [{
                "border-x": [d]
            }],
            "border-w-y": [{
                "border-y": [d]
            }],
            "border-w-s": [{
                "border-s": [d]
            }],
            "border-w-e": [{
                "border-e": [d]
            }],
            "border-w-t": [{
                "border-t": [d]
            }],
            "border-w-r": [{
                "border-r": [d]
            }],
            "border-w-b": [{
                "border-b": [d]
            }],
            "border-w-l": [{
                "border-l": [d]
            }],
            "border-opacity": [{
                "border-opacity": [k]
            }],
            "border-style": [{
                border: [...he(), "hidden"]
            }],
            "divide-x": [{
                "divide-x": [d]
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": [d]
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{
                "divide-opacity": [k]
            }],
            "divide-style": [{
                divide: he()
            }],
            "border-color": [{
                border: [o]
            }],
            "border-color-x": [{
                "border-x": [o]
            }],
            "border-color-y": [{
                "border-y": [o]
            }],
            "border-color-s": [{
                "border-s": [o]
            }],
            "border-color-e": [{
                "border-e": [o]
            }],
            "border-color-t": [{
                "border-t": [o]
            }],
            "border-color-r": [{
                "border-r": [o]
            }],
            "border-color-b": [{
                "border-b": [o]
            }],
            "border-color-l": [{
                "border-l": [o]
            }],
            "divide-color": [{
                divide: [o]
            }],
            "outline-style": [{
                outline: ["", ...he()]
            }],
            "outline-offset": [{
                "outline-offset": [Un, Pe]
            }],
            "outline-w": [{
                outline: [Un, gr]
            }],
            "outline-color": [{
                outline: [t]
            }],
            "ring-w": [{
                ring: Se()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: [t]
            }],
            "ring-opacity": [{
                "ring-opacity": [k]
            }],
            "ring-offset-w": [{
                "ring-offset": [Un, gr]
            }],
            "ring-offset-color": [{
                "ring-offset": [t]
            }],
            shadow: [{
                shadow: ["", "inner", "none", yr, oC]
            }],
            "shadow-color": [{
                shadow: [$i]
            }],
            opacity: [{
                opacity: [k]
            }],
            "mix-blend": [{
                "mix-blend": [...te(), "plus-lighter", "plus-darker"]
            }],
            "bg-blend": [{
                "bg-blend": te()
            }],
            filter: [{
                filter: ["", "none"]
            }],
            blur: [{
                blur: [n]
            }],
            brightness: [{
                brightness: [i]
            }],
            contrast: [{
                contrast: [h]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", yr, Pe]
            }],
            grayscale: [{
                grayscale: [p]
            }],
            "hue-rotate": [{
                "hue-rotate": [m]
            }],
            invert: [{
                invert: [y]
            }],
            saturate: [{
                saturate: [O]
            }],
            sepia: [{
                sepia: [L]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none"]
            }],
            "backdrop-blur": [{
                "backdrop-blur": [n]
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [i]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [h]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": [p]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [m]
            }],
            "backdrop-invert": [{
                "backdrop-invert": [y]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [k]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [O]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": [L]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": [c]
            }],
            "border-spacing-x": [{
                "border-spacing-x": [c]
            }],
            "border-spacing-y": [{
                "border-spacing-y": [c]
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", Pe]
            }],
            duration: [{
                duration: R()
            }],
            ease: [{
                ease: ["linear", "in", "out", "in-out", Pe]
            }],
            delay: [{
                delay: R()
            }],
            animate: [{
                animate: ["none", "spin", "ping", "pulse", "bounce", Pe]
            }],
            transform: [{
                transform: ["", "gpu", "none"]
            }],
            scale: [{
                scale: [j]
            }],
            "scale-x": [{
                "scale-x": [j]
            }],
            "scale-y": [{
                "scale-y": [j]
            }],
            rotate: [{
                rotate: [Ui, Pe]
            }],
            "translate-x": [{
                "translate-x": [K]
            }],
            "translate-y": [{
                "translate-y": [K]
            }],
            "skew-x": [{
                "skew-x": [V]
            }],
            "skew-y": [{
                "skew-y": [V]
            }],
            "transform-origin": [{
                origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", Pe]
            }],
            accent: [{
                accent: ["auto", t]
            }],
            appearance: [{
                appearance: ["none", "auto"]
            }],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", Pe]
            }],
            "caret-color": [{
                caret: [t]
            }],
            "pointer-events": [{
                "pointer-events": ["none", "auto"]
            }],
            resize: [{
                resize: ["none", "y", "x", ""]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": le()
            }],
            "scroll-mx": [{
                "scroll-mx": le()
            }],
            "scroll-my": [{
                "scroll-my": le()
            }],
            "scroll-ms": [{
                "scroll-ms": le()
            }],
            "scroll-me": [{
                "scroll-me": le()
            }],
            "scroll-mt": [{
                "scroll-mt": le()
            }],
            "scroll-mr": [{
                "scroll-mr": le()
            }],
            "scroll-mb": [{
                "scroll-mb": le()
            }],
            "scroll-ml": [{
                "scroll-ml": le()
            }],
            "scroll-p": [{
                "scroll-p": le()
            }],
            "scroll-px": [{
                "scroll-px": le()
            }],
            "scroll-py": [{
                "scroll-py": le()
            }],
            "scroll-ps": [{
                "scroll-ps": le()
            }],
            "scroll-pe": [{
                "scroll-pe": le()
            }],
            "scroll-pt": [{
                "scroll-pt": le()
            }],
            "scroll-pr": [{
                "scroll-pr": le()
            }],
            "scroll-pb": [{
                "scroll-pb": le()
            }],
            "scroll-pl": [{
                "scroll-pl": le()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "manipulation"]
            }],
            "touch-x": [{
                "touch-pan": ["x", "left", "right"]
            }],
            "touch-y": [{
                "touch-pan": ["y", "up", "down"]
            }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", Pe]
            }],
            fill: [{
                fill: [t, "none"]
            }],
            "stroke-w": [{
                stroke: [Un, gr, ed]
            }],
            stroke: [{
                stroke: [t, "none"]
            }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [{
                "forced-color-adjust": ["auto", "none"]
            }]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        }
    }
}
  , dC = Qb(cC);
function It(...t) {
    return dC(T0(t))
}
const fC = vb
  , N0 = S.forwardRef(({className: t, ...e},n)=>A.jsx(g0, {
    ref: n,
    className: It("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", t),
    ...e
}));
N0.displayName = g0.displayName;
const hC = b0("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
})
  , M0 = S.forwardRef(({className: t, variant: e, ...n},i)=>A.jsx(y0, {
    ref: i,
    className: It(hC({
        variant: e
    }), t),
    ...n
}));
M0.displayName = y0.displayName;
const pC = S.forwardRef(({className: t, ...e},n)=>A.jsx(w0, {
    ref: n,
    className: It("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", t),
    ...e
}));
pC.displayName = w0.displayName;
const D0 = S.forwardRef(({className: t, ...e},n)=>A.jsx(S0, {
    ref: n,
    className: It("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", t),
    "toast-close": "",
    ...e,
    children: A.jsx(Mb, {
        className: "h-4 w-4"
    })
}));
D0.displayName = S0.displayName;
const O0 = S.forwardRef(({className: t, ...e},n)=>A.jsx(v0, {
    ref: n,
    className: It("text-sm font-semibold", t),
    ...e
}));
O0.displayName = v0.displayName;
const I0 = S.forwardRef(({className: t, ...e},n)=>A.jsx(x0, {
    ref: n,
    className: It("text-sm opacity-90", t),
    ...e
}));
I0.displayName = x0.displayName;
function mC() {
    const {toasts: t} = Zv();
    return A.jsxs(fC, {
        children: [t.map(function({id: e, title: n, description: i, action: o, ...l}) {
            return A.jsxs(M0, {
                ...l,
                children: [A.jsxs("div", {
                    className: "grid gap-1",
                    children: [n && A.jsx(O0, {
                        children: n
                    }), i && A.jsx(I0, {
                        children: i
                    })]
                }), o, A.jsx(D0, {})]
            }, e)
        }), A.jsx(N0, {})]
    })
}
const gC = ["top", "right", "bottom", "left"]
  , wr = Math.min
  , zt = Math.max
  , ul = Math.round
  , Ka = Math.floor
  , bn = t=>({
    x: t,
    y: t
})
  , yC = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
}
  , vC = {
    start: "end",
    end: "start"
};
function Dd(t, e, n) {
    return zt(t, wr(e, n))
}
function Kn(t, e) {
    return typeof t == "function" ? t(e) : t
}
function qn(t) {
    return t.split("-")[0]
}
function Ys(t) {
    return t.split("-")[1]
}
function Tf(t) {
    return t === "x" ? "y" : "x"
}
function bf(t) {
    return t === "y" ? "height" : "width"
}
function Sr(t) {
    return ["top", "bottom"].includes(qn(t)) ? "y" : "x"
}
function Cf(t) {
    return Tf(Sr(t))
}
function xC(t, e, n) {
    n === void 0 && (n = !1);
    const i = Ys(t)
      , o = Cf(t)
      , l = bf(o);
    let c = o === "x" ? i === (n ? "end" : "start") ? "right" : "left" : i === "start" ? "bottom" : "top";
    return e.reference[l] > e.floating[l] && (c = cl(c)),
    [c, cl(c)]
}
function wC(t) {
    const e = cl(t);
    return [Od(t), e, Od(e)]
}
function Od(t) {
    return t.replace(/start|end/g, e=>vC[e])
}
function SC(t, e, n) {
    const i = ["left", "right"]
      , o = ["right", "left"]
      , l = ["top", "bottom"]
      , c = ["bottom", "top"];
    switch (t) {
    case "top":
    case "bottom":
        return n ? e ? o : i : e ? i : o;
    case "left":
    case "right":
        return e ? l : c;
    default:
        return []
    }
}
function PC(t, e, n, i) {
    const o = Ys(t);
    let l = SC(qn(t), n === "start", i);
    return o && (l = l.map(c=>c + "-" + o),
    e && (l = l.concat(l.map(Od)))),
    l
}
function cl(t) {
    return t.replace(/left|right|bottom|top/g, e=>yC[e])
}
function TC(t) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...t
    }
}
function L0(t) {
    return typeof t != "number" ? TC(t) : {
        top: t,
        right: t,
        bottom: t,
        left: t
    }
}
function dl(t) {
    const {x: e, y: n, width: i, height: o} = t;
    return {
        width: i,
        height: o,
        top: n,
        left: e,
        right: e + i,
        bottom: n + o,
        x: e,
        y: n
    }
}
function Ug(t, e, n) {
    let {reference: i, floating: o} = t;
    const l = Sr(e)
      , c = Cf(e)
      , d = bf(c)
      , h = qn(e)
      , p = l === "y"
      , m = i.x + i.width / 2 - o.width / 2
      , y = i.y + i.height / 2 - o.height / 2
      , v = i[d] / 2 - o[d] / 2;
    let w;
    switch (h) {
    case "top":
        w = {
            x: m,
            y: i.y - o.height
        };
        break;
    case "bottom":
        w = {
            x: m,
            y: i.y + i.height
        };
        break;
    case "right":
        w = {
            x: i.x + i.width,
            y
        };
        break;
    case "left":
        w = {
            x: i.x - o.width,
            y
        };
        break;
    default:
        w = {
            x: i.x,
            y: i.y
        }
    }
    switch (Ys(e)) {
    case "start":
        w[c] -= v * (n && p ? -1 : 1);
        break;
    case "end":
        w[c] += v * (n && p ? -1 : 1);
        break
    }
    return w
}
const bC = async(t,e,n)=>{
    const {placement: i="bottom", strategy: o="absolute", middleware: l=[], platform: c} = n
      , d = l.filter(Boolean)
      , h = await (c.isRTL == null ? void 0 : c.isRTL(e));
    let p = await c.getElementRects({
        reference: t,
        floating: e,
        strategy: o
    })
      , {x: m, y} = Ug(p, i, h)
      , v = i
      , w = {}
      , C = 0;
    for (let P = 0; P < d.length; P++) {
        const {name: T, fn: k} = d[P]
          , {x: N, y: O, data: j, reset: L} = await k({
            x: m,
            y,
            initialPlacement: i,
            placement: v,
            strategy: o,
            middlewareData: w,
            rects: p,
            platform: c,
            elements: {
                reference: t,
                floating: e
            }
        });
        m = N ?? m,
        y = O ?? y,
        w = {
            ...w,
            [T]: {
                ...w[T],
                ...j
            }
        },
        L && C <= 50 && (C++,
        typeof L == "object" && (L.placement && (v = L.placement),
        L.rects && (p = L.rects === !0 ? await c.getElementRects({
            reference: t,
            floating: e,
            strategy: o
        }) : L.rects),
        {x: m, y} = Ug(p, v, h)),
        P = -1)
    }
    return {
        x: m,
        y,
        placement: v,
        strategy: o,
        middlewareData: w
    }
}
;
async function io(t, e) {
    var n;
    e === void 0 && (e = {});
    const {x: i, y: o, platform: l, rects: c, elements: d, strategy: h} = t
      , {boundary: p="clippingAncestors", rootBoundary: m="viewport", elementContext: y="floating", altBoundary: v=!1, padding: w=0} = Kn(e, t)
      , C = L0(w)
      , T = d[v ? y === "floating" ? "reference" : "floating" : y]
      , k = dl(await l.getClippingRect({
        element: (n = await (l.isElement == null ? void 0 : l.isElement(T))) == null || n ? T : T.contextElement || await (l.getDocumentElement == null ? void 0 : l.getDocumentElement(d.floating)),
        boundary: p,
        rootBoundary: m,
        strategy: h
    }))
      , N = y === "floating" ? {
        x: i,
        y: o,
        width: c.floating.width,
        height: c.floating.height
    } : c.reference
      , O = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(d.floating))
      , j = await (l.isElement == null ? void 0 : l.isElement(O)) ? await (l.getScale == null ? void 0 : l.getScale(O)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }
      , L = dl(l.convertOffsetParentRelativeRectToViewportRelativeRect ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: d,
        rect: N,
        offsetParent: O,
        strategy: h
    }) : N);
    return {
        top: (k.top - L.top + C.top) / j.y,
        bottom: (L.bottom - k.bottom + C.bottom) / j.y,
        left: (k.left - L.left + C.left) / j.x,
        right: (L.right - k.right + C.right) / j.x
    }
}
const CC = t=>({
    name: "arrow",
    options: t,
    async fn(e) {
        const {x: n, y: i, placement: o, rects: l, platform: c, elements: d, middlewareData: h} = e
          , {element: p, padding: m=0} = Kn(t, e) || {};
        if (p == null)
            return {};
        const y = L0(m)
          , v = {
            x: n,
            y: i
        }
          , w = Cf(o)
          , C = bf(w)
          , P = await c.getDimensions(p)
          , T = w === "y"
          , k = T ? "top" : "left"
          , N = T ? "bottom" : "right"
          , O = T ? "clientHeight" : "clientWidth"
          , j = l.reference[C] + l.reference[w] - v[w] - l.floating[C]
          , L = v[w] - l.reference[w]
          , V = await (c.getOffsetParent == null ? void 0 : c.getOffsetParent(p));
        let z = V ? V[O] : 0;
        (!z || !await (c.isElement == null ? void 0 : c.isElement(V))) && (z = d.floating[O] || l.floating[C]);
        const K = j / 2 - L / 2
          , ie = z / 2 - P[C] / 2 - 1
          , ue = wr(y[k], ie)
          , ve = wr(y[N], ie)
          , le = ue
          , Se = z - P[C] - ve
          , X = z / 2 - P[C] / 2 + K
          , _e = Dd(le, X, Se)
          , he = !h.arrow && Ys(o) != null && X !== _e && l.reference[C] / 2 - (X < le ? ue : ve) - P[C] / 2 < 0
          , te = he ? X < le ? X - le : X - Se : 0;
        return {
            [w]: v[w] + te,
            data: {
                [w]: _e,
                centerOffset: X - _e - te,
                ...he && {
                    alignmentOffset: te
                }
            },
            reset: he
        }
    }
})
  , _C = function(t) {
    return t === void 0 && (t = {}),
    {
        name: "flip",
        options: t,
        async fn(e) {
            var n, i;
            const {placement: o, middlewareData: l, rects: c, initialPlacement: d, platform: h, elements: p} = e
              , {mainAxis: m=!0, crossAxis: y=!0, fallbackPlacements: v, fallbackStrategy: w="bestFit", fallbackAxisSideDirection: C="none", flipAlignment: P=!0, ...T} = Kn(t, e);
            if ((n = l.arrow) != null && n.alignmentOffset)
                return {};
            const k = qn(o)
              , N = Sr(d)
              , O = qn(d) === d
              , j = await (h.isRTL == null ? void 0 : h.isRTL(p.floating))
              , L = v || (O || !P ? [cl(d)] : wC(d))
              , V = C !== "none";
            !v && V && L.push(...PC(d, P, C, j));
            const z = [d, ...L]
              , K = await io(e, T)
              , ie = [];
            let ue = ((i = l.flip) == null ? void 0 : i.overflows) || [];
            if (m && ie.push(K[k]),
            y) {
                const X = xC(o, c, j);
                ie.push(K[X[0]], K[X[1]])
            }
            if (ue = [...ue, {
                placement: o,
                overflows: ie
            }],
            !ie.every(X=>X <= 0)) {
                var ve, le;
                const X = (((ve = l.flip) == null ? void 0 : ve.index) || 0) + 1
                  , _e = z[X];
                if (_e)
                    return {
                        data: {
                            index: X,
                            overflows: ue
                        },
                        reset: {
                            placement: _e
                        }
                    };
                let he = (le = ue.filter(te=>te.overflows[0] <= 0).sort((te,F)=>te.overflows[1] - F.overflows[1])[0]) == null ? void 0 : le.placement;
                if (!he)
                    switch (w) {
                    case "bestFit":
                        {
                            var Se;
                            const te = (Se = ue.filter(F=>{
                                if (V) {
                                    const G = Sr(F.placement);
                                    return G === N || G === "y"
                                }
                                return !0
                            }
                            ).map(F=>[F.placement, F.overflows.filter(G=>G > 0).reduce((G,Z)=>G + Z, 0)]).sort((F,G)=>F[1] - G[1])[0]) == null ? void 0 : Se[0];
                            te && (he = te);
                            break
                        }
                    case "initialPlacement":
                        he = d;
                        break
                    }
                if (o !== he)
                    return {
                        reset: {
                            placement: he
                        }
                    }
            }
            return {}
        }
    }
};
function $g(t, e) {
    return {
        top: t.top - e.height,
        right: t.right - e.width,
        bottom: t.bottom - e.height,
        left: t.left - e.width
    }
}
function Wg(t) {
    return gC.some(e=>t[e] >= 0)
}
const EC = function(t) {
    return t === void 0 && (t = {}),
    {
        name: "hide",
        options: t,
        async fn(e) {
            const {rects: n} = e
              , {strategy: i="referenceHidden", ...o} = Kn(t, e);
            switch (i) {
            case "referenceHidden":
                {
                    const l = await io(e, {
                        ...o,
                        elementContext: "reference"
                    })
                      , c = $g(l, n.reference);
                    return {
                        data: {
                            referenceHiddenOffsets: c,
                            referenceHidden: Wg(c)
                        }
                    }
                }
            case "escaped":
                {
                    const l = await io(e, {
                        ...o,
                        altBoundary: !0
                    })
                      , c = $g(l, n.floating);
                    return {
                        data: {
                            escapedOffsets: c,
                            escaped: Wg(c)
                        }
                    }
                }
            default:
                return {}
            }
        }
    }
};
async function kC(t, e) {
    const {placement: n, platform: i, elements: o} = t
      , l = await (i.isRTL == null ? void 0 : i.isRTL(o.floating))
      , c = qn(n)
      , d = Ys(n)
      , h = Sr(n) === "y"
      , p = ["left", "top"].includes(c) ? -1 : 1
      , m = l && h ? -1 : 1
      , y = Kn(e, t);
    let {mainAxis: v, crossAxis: w, alignmentAxis: C} = typeof y == "number" ? {
        mainAxis: y,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: y.mainAxis || 0,
        crossAxis: y.crossAxis || 0,
        alignmentAxis: y.alignmentAxis
    };
    return d && typeof C == "number" && (w = d === "end" ? C * -1 : C),
    h ? {
        x: w * m,
        y: v * p
    } : {
        x: v * p,
        y: w * m
    }
}
const AC = function(t) {
    return t === void 0 && (t = 0),
    {
        name: "offset",
        options: t,
        async fn(e) {
            var n, i;
            const {x: o, y: l, placement: c, middlewareData: d} = e
              , h = await kC(e, t);
            return c === ((n = d.offset) == null ? void 0 : n.placement) && (i = d.arrow) != null && i.alignmentOffset ? {} : {
                x: o + h.x,
                y: l + h.y,
                data: {
                    ...h,
                    placement: c
                }
            }
        }
    }
}
  , RC = function(t) {
    return t === void 0 && (t = {}),
    {
        name: "shift",
        options: t,
        async fn(e) {
            const {x: n, y: i, placement: o} = e
              , {mainAxis: l=!0, crossAxis: c=!1, limiter: d={
                fn: T=>{
                    let {x: k, y: N} = T;
                    return {
                        x: k,
                        y: N
                    }
                }
            }, ...h} = Kn(t, e)
              , p = {
                x: n,
                y: i
            }
              , m = await io(e, h)
              , y = Sr(qn(o))
              , v = Tf(y);
            let w = p[v]
              , C = p[y];
            if (l) {
                const T = v === "y" ? "top" : "left"
                  , k = v === "y" ? "bottom" : "right"
                  , N = w + m[T]
                  , O = w - m[k];
                w = Dd(N, w, O)
            }
            if (c) {
                const T = y === "y" ? "top" : "left"
                  , k = y === "y" ? "bottom" : "right"
                  , N = C + m[T]
                  , O = C - m[k];
                C = Dd(N, C, O)
            }
            const P = d.fn({
                ...e,
                [v]: w,
                [y]: C
            });
            return {
                ...P,
                data: {
                    x: P.x - n,
                    y: P.y - i,
                    enabled: {
                        [v]: l,
                        [y]: c
                    }
                }
            }
        }
    }
}
  , NC = function(t) {
    return t === void 0 && (t = {}),
    {
        options: t,
        fn(e) {
            const {x: n, y: i, placement: o, rects: l, middlewareData: c} = e
              , {offset: d=0, mainAxis: h=!0, crossAxis: p=!0} = Kn(t, e)
              , m = {
                x: n,
                y: i
            }
              , y = Sr(o)
              , v = Tf(y);
            let w = m[v]
              , C = m[y];
            const P = Kn(d, e)
              , T = typeof P == "number" ? {
                mainAxis: P,
                crossAxis: 0
            } : {
                mainAxis: 0,
                crossAxis: 0,
                ...P
            };
            if (h) {
                const O = v === "y" ? "height" : "width"
                  , j = l.reference[v] - l.floating[O] + T.mainAxis
                  , L = l.reference[v] + l.reference[O] - T.mainAxis;
                w < j ? w = j : w > L && (w = L)
            }
            if (p) {
                var k, N;
                const O = v === "y" ? "width" : "height"
                  , j = ["top", "left"].includes(qn(o))
                  , L = l.reference[y] - l.floating[O] + (j && ((k = c.offset) == null ? void 0 : k[y]) || 0) + (j ? 0 : T.crossAxis)
                  , V = l.reference[y] + l.reference[O] + (j ? 0 : ((N = c.offset) == null ? void 0 : N[y]) || 0) - (j ? T.crossAxis : 0);
                C < L ? C = L : C > V && (C = V)
            }
            return {
                [v]: w,
                [y]: C
            }
        }
    }
}
  , MC = function(t) {
    return t === void 0 && (t = {}),
    {
        name: "size",
        options: t,
        async fn(e) {
            var n, i;
            const {placement: o, rects: l, platform: c, elements: d} = e
              , {apply: h=()=>{}
            , ...p} = Kn(t, e)
              , m = await io(e, p)
              , y = qn(o)
              , v = Ys(o)
              , w = Sr(o) === "y"
              , {width: C, height: P} = l.floating;
            let T, k;
            y === "top" || y === "bottom" ? (T = y,
            k = v === (await (c.isRTL == null ? void 0 : c.isRTL(d.floating)) ? "start" : "end") ? "left" : "right") : (k = y,
            T = v === "end" ? "top" : "bottom");
            const N = P - m.top - m.bottom
              , O = C - m.left - m.right
              , j = wr(P - m[T], N)
              , L = wr(C - m[k], O)
              , V = !e.middlewareData.shift;
            let z = j
              , K = L;
            if ((n = e.middlewareData.shift) != null && n.enabled.x && (K = O),
            (i = e.middlewareData.shift) != null && i.enabled.y && (z = N),
            V && !v) {
                const ue = zt(m.left, 0)
                  , ve = zt(m.right, 0)
                  , le = zt(m.top, 0)
                  , Se = zt(m.bottom, 0);
                w ? K = C - 2 * (ue !== 0 || ve !== 0 ? ue + ve : zt(m.left, m.right)) : z = P - 2 * (le !== 0 || Se !== 0 ? le + Se : zt(m.top, m.bottom))
            }
            await h({
                ...e,
                availableWidth: K,
                availableHeight: z
            });
            const ie = await c.getDimensions(d.floating);
            return C !== ie.width || P !== ie.height ? {
                reset: {
                    rects: !0
                }
            } : {}
        }
    }
};
function Ll() {
    return typeof window < "u"
}
function Js(t) {
    return j0(t) ? (t.nodeName || "").toLowerCase() : "#document"
}
function Ut(t) {
    var e;
    return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window
}
function Mn(t) {
    var e;
    return (e = (j0(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement
}
function j0(t) {
    return Ll() ? t instanceof Node || t instanceof Ut(t).Node : !1
}
function gn(t) {
    return Ll() ? t instanceof Element || t instanceof Ut(t).Element : !1
}
function An(t) {
    return Ll() ? t instanceof HTMLElement || t instanceof Ut(t).HTMLElement : !1
}
function Hg(t) {
    return !Ll() || typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof Ut(t).ShadowRoot
}
function Eo(t) {
    const {overflow: e, overflowX: n, overflowY: i, display: o} = yn(t);
    return /auto|scroll|overlay|hidden|clip/.test(e + i + n) && !["inline", "contents"].includes(o)
}
function DC(t) {
    return ["table", "td", "th"].includes(Js(t))
}
function jl(t) {
    return [":popover-open", ":modal"].some(e=>{
        try {
            return t.matches(e)
        } catch {
            return !1
        }
    }
    )
}
function _f(t) {
    const e = Ef()
      , n = gn(t) ? yn(t) : t;
    return ["transform", "translate", "scale", "rotate", "perspective"].some(i=>n[i] ? n[i] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !e && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !e && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some(i=>(n.willChange || "").includes(i)) || ["paint", "layout", "strict", "content"].some(i=>(n.contain || "").includes(i))
}
function OC(t) {
    let e = Pr(t);
    for (; An(e) && !Us(e); ) {
        if (_f(e))
            return e;
        if (jl(e))
            return null;
        e = Pr(e)
    }
    return null
}
function Ef() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}
function Us(t) {
    return ["html", "body", "#document"].includes(Js(t))
}
function yn(t) {
    return Ut(t).getComputedStyle(t)
}
function Fl(t) {
    return gn(t) ? {
        scrollLeft: t.scrollLeft,
        scrollTop: t.scrollTop
    } : {
        scrollLeft: t.scrollX,
        scrollTop: t.scrollY
    }
}
function Pr(t) {
    if (Js(t) === "html")
        return t;
    const e = t.assignedSlot || t.parentNode || Hg(t) && t.host || Mn(t);
    return Hg(e) ? e.host : e
}
function F0(t) {
    const e = Pr(t);
    return Us(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : An(e) && Eo(e) ? e : F0(e)
}
function oo(t, e, n) {
    var i;
    e === void 0 && (e = []),
    n === void 0 && (n = !0);
    const o = F0(t)
      , l = o === ((i = t.ownerDocument) == null ? void 0 : i.body)
      , c = Ut(o);
    if (l) {
        const d = Id(c);
        return e.concat(c, c.visualViewport || [], Eo(o) ? o : [], d && n ? oo(d) : [])
    }
    return e.concat(o, oo(o, [], n))
}
function Id(t) {
    return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null
}
function V0(t) {
    const e = yn(t);
    let n = parseFloat(e.width) || 0
      , i = parseFloat(e.height) || 0;
    const o = An(t)
      , l = o ? t.offsetWidth : n
      , c = o ? t.offsetHeight : i
      , d = ul(n) !== l || ul(i) !== c;
    return d && (n = l,
    i = c),
    {
        width: n,
        height: i,
        $: d
    }
}
function kf(t) {
    return gn(t) ? t : t.contextElement
}
function Fs(t) {
    const e = kf(t);
    if (!An(e))
        return bn(1);
    const n = e.getBoundingClientRect()
      , {width: i, height: o, $: l} = V0(e);
    let c = (l ? ul(n.width) : n.width) / i
      , d = (l ? ul(n.height) : n.height) / o;
    return (!c || !Number.isFinite(c)) && (c = 1),
    (!d || !Number.isFinite(d)) && (d = 1),
    {
        x: c,
        y: d
    }
}
const IC = bn(0);
function z0(t) {
    const e = Ut(t);
    return !Ef() || !e.visualViewport ? IC : {
        x: e.visualViewport.offsetLeft,
        y: e.visualViewport.offsetTop
    }
}
function LC(t, e, n) {
    return e === void 0 && (e = !1),
    !n || e && n !== Ut(t) ? !1 : e
}
function Yr(t, e, n, i) {
    e === void 0 && (e = !1),
    n === void 0 && (n = !1);
    const o = t.getBoundingClientRect()
      , l = kf(t);
    let c = bn(1);
    e && (i ? gn(i) && (c = Fs(i)) : c = Fs(t));
    const d = LC(l, n, i) ? z0(l) : bn(0);
    let h = (o.left + d.x) / c.x
      , p = (o.top + d.y) / c.y
      , m = o.width / c.x
      , y = o.height / c.y;
    if (l) {
        const v = Ut(l)
          , w = i && gn(i) ? Ut(i) : i;
        let C = v
          , P = Id(C);
        for (; P && i && w !== C; ) {
            const T = Fs(P)
              , k = P.getBoundingClientRect()
              , N = yn(P)
              , O = k.left + (P.clientLeft + parseFloat(N.paddingLeft)) * T.x
              , j = k.top + (P.clientTop + parseFloat(N.paddingTop)) * T.y;
            h *= T.x,
            p *= T.y,
            m *= T.x,
            y *= T.y,
            h += O,
            p += j,
            C = Ut(P),
            P = Id(C)
        }
    }
    return dl({
        width: m,
        height: y,
        x: h,
        y: p
    })
}
function Af(t, e) {
    const n = Fl(t).scrollLeft;
    return e ? e.left + n : Yr(Mn(t)).left + n
}
function B0(t, e, n) {
    n === void 0 && (n = !1);
    const i = t.getBoundingClientRect()
      , o = i.left + e.scrollLeft - (n ? 0 : Af(t, i))
      , l = i.top + e.scrollTop;
    return {
        x: o,
        y: l
    }
}
function jC(t) {
    let {elements: e, rect: n, offsetParent: i, strategy: o} = t;
    const l = o === "fixed"
      , c = Mn(i)
      , d = e ? jl(e.floating) : !1;
    if (i === c || d && l)
        return n;
    let h = {
        scrollLeft: 0,
        scrollTop: 0
    }
      , p = bn(1);
    const m = bn(0)
      , y = An(i);
    if ((y || !y && !l) && ((Js(i) !== "body" || Eo(c)) && (h = Fl(i)),
    An(i))) {
        const w = Yr(i);
        p = Fs(i),
        m.x = w.x + i.clientLeft,
        m.y = w.y + i.clientTop
    }
    const v = c && !y && !l ? B0(c, h, !0) : bn(0);
    return {
        width: n.width * p.x,
        height: n.height * p.y,
        x: n.x * p.x - h.scrollLeft * p.x + m.x + v.x,
        y: n.y * p.y - h.scrollTop * p.y + m.y + v.y
    }
}
function FC(t) {
    return Array.from(t.getClientRects())
}
function VC(t) {
    const e = Mn(t)
      , n = Fl(t)
      , i = t.ownerDocument.body
      , o = zt(e.scrollWidth, e.clientWidth, i.scrollWidth, i.clientWidth)
      , l = zt(e.scrollHeight, e.clientHeight, i.scrollHeight, i.clientHeight);
    let c = -n.scrollLeft + Af(t);
    const d = -n.scrollTop;
    return yn(i).direction === "rtl" && (c += zt(e.clientWidth, i.clientWidth) - o),
    {
        width: o,
        height: l,
        x: c,
        y: d
    }
}
function zC(t, e) {
    const n = Ut(t)
      , i = Mn(t)
      , o = n.visualViewport;
    let l = i.clientWidth
      , c = i.clientHeight
      , d = 0
      , h = 0;
    if (o) {
        l = o.width,
        c = o.height;
        const p = Ef();
        (!p || p && e === "fixed") && (d = o.offsetLeft,
        h = o.offsetTop)
    }
    return {
        width: l,
        height: c,
        x: d,
        y: h
    }
}
function BC(t, e) {
    const n = Yr(t, !0, e === "fixed")
      , i = n.top + t.clientTop
      , o = n.left + t.clientLeft
      , l = An(t) ? Fs(t) : bn(1)
      , c = t.clientWidth * l.x
      , d = t.clientHeight * l.y
      , h = o * l.x
      , p = i * l.y;
    return {
        width: c,
        height: d,
        x: h,
        y: p
    }
}
function Qg(t, e, n) {
    let i;
    if (e === "viewport")
        i = zC(t, n);
    else if (e === "document")
        i = VC(Mn(t));
    else if (gn(e))
        i = BC(e, n);
    else {
        const o = z0(t);
        i = {
            x: e.x - o.x,
            y: e.y - o.y,
            width: e.width,
            height: e.height
        }
    }
    return dl(i)
}
function U0(t, e) {
    const n = Pr(t);
    return n === e || !gn(n) || Us(n) ? !1 : yn(n).position === "fixed" || U0(n, e)
}
function UC(t, e) {
    const n = e.get(t);
    if (n)
        return n;
    let i = oo(t, [], !1).filter(d=>gn(d) && Js(d) !== "body")
      , o = null;
    const l = yn(t).position === "fixed";
    let c = l ? Pr(t) : t;
    for (; gn(c) && !Us(c); ) {
        const d = yn(c)
          , h = _f(c);
        !h && d.position === "fixed" && (o = null),
        (l ? !h && !o : !h && d.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || Eo(c) && !h && U0(t, c)) ? i = i.filter(m=>m !== c) : o = d,
        c = Pr(c)
    }
    return e.set(t, i),
    i
}
function $C(t) {
    let {element: e, boundary: n, rootBoundary: i, strategy: o} = t;
    const c = [...n === "clippingAncestors" ? jl(e) ? [] : UC(e, this._c) : [].concat(n), i]
      , d = c[0]
      , h = c.reduce((p,m)=>{
        const y = Qg(e, m, o);
        return p.top = zt(y.top, p.top),
        p.right = wr(y.right, p.right),
        p.bottom = wr(y.bottom, p.bottom),
        p.left = zt(y.left, p.left),
        p
    }
    , Qg(e, d, o));
    return {
        width: h.right - h.left,
        height: h.bottom - h.top,
        x: h.left,
        y: h.top
    }
}
function WC(t) {
    const {width: e, height: n} = V0(t);
    return {
        width: e,
        height: n
    }
}
function HC(t, e, n) {
    const i = An(e)
      , o = Mn(e)
      , l = n === "fixed"
      , c = Yr(t, !0, l, e);
    let d = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const h = bn(0);
    if (i || !i && !l)
        if ((Js(e) !== "body" || Eo(o)) && (d = Fl(e)),
        i) {
            const v = Yr(e, !0, l, e);
            h.x = v.x + e.clientLeft,
            h.y = v.y + e.clientTop
        } else
            o && (h.x = Af(o));
    const p = o && !i && !l ? B0(o, d) : bn(0)
      , m = c.left + d.scrollLeft - h.x - p.x
      , y = c.top + d.scrollTop - h.y - p.y;
    return {
        x: m,
        y,
        width: c.width,
        height: c.height
    }
}
function td(t) {
    return yn(t).position === "static"
}
function Kg(t, e) {
    if (!An(t) || yn(t).position === "fixed")
        return null;
    if (e)
        return e(t);
    let n = t.offsetParent;
    return Mn(t) === n && (n = n.ownerDocument.body),
    n
}
function $0(t, e) {
    const n = Ut(t);
    if (jl(t))
        return n;
    if (!An(t)) {
        let o = Pr(t);
        for (; o && !Us(o); ) {
            if (gn(o) && !td(o))
                return o;
            o = Pr(o)
        }
        return n
    }
    let i = Kg(t, e);
    for (; i && DC(i) && td(i); )
        i = Kg(i, e);
    return i && Us(i) && td(i) && !_f(i) ? n : i || OC(t) || n
}
const QC = async function(t) {
    const e = this.getOffsetParent || $0
      , n = this.getDimensions
      , i = await n(t.floating);
    return {
        reference: HC(t.reference, await e(t.floating), t.strategy),
        floating: {
            x: 0,
            y: 0,
            width: i.width,
            height: i.height
        }
    }
};
function KC(t) {
    return yn(t).direction === "rtl"
}
const qC = {
    convertOffsetParentRelativeRectToViewportRelativeRect: jC,
    getDocumentElement: Mn,
    getClippingRect: $C,
    getOffsetParent: $0,
    getElementRects: QC,
    getClientRects: FC,
    getDimensions: WC,
    getScale: Fs,
    isElement: gn,
    isRTL: KC
};
function W0(t, e) {
    return t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height
}
function ZC(t, e) {
    let n = null, i;
    const o = Mn(t);
    function l() {
        var d;
        clearTimeout(i),
        (d = n) == null || d.disconnect(),
        n = null
    }
    function c(d, h) {
        d === void 0 && (d = !1),
        h === void 0 && (h = 1),
        l();
        const p = t.getBoundingClientRect()
          , {left: m, top: y, width: v, height: w} = p;
        if (d || e(),
        !v || !w)
            return;
        const C = Ka(y)
          , P = Ka(o.clientWidth - (m + v))
          , T = Ka(o.clientHeight - (y + w))
          , k = Ka(m)
          , O = {
            rootMargin: -C + "px " + -P + "px " + -T + "px " + -k + "px",
            threshold: zt(0, wr(1, h)) || 1
        };
        let j = !0;
        function L(V) {
            const z = V[0].intersectionRatio;
            if (z !== h) {
                if (!j)
                    return c();
                z ? c(!1, z) : i = setTimeout(()=>{
                    c(!1, 1e-7)
                }
                , 1e3)
            }
            z === 1 && !W0(p, t.getBoundingClientRect()) && c(),
            j = !1
        }
        try {
            n = new IntersectionObserver(L,{
                ...O,
                root: o.ownerDocument
            })
        } catch {
            n = new IntersectionObserver(L,O)
        }
        n.observe(t)
    }
    return c(!0),
    l
}
function GC(t, e, n, i) {
    i === void 0 && (i = {});
    const {ancestorScroll: o=!0, ancestorResize: l=!0, elementResize: c=typeof ResizeObserver == "function", layoutShift: d=typeof IntersectionObserver == "function", animationFrame: h=!1} = i
      , p = kf(t)
      , m = o || l ? [...p ? oo(p) : [], ...oo(e)] : [];
    m.forEach(k=>{
        o && k.addEventListener("scroll", n, {
            passive: !0
        }),
        l && k.addEventListener("resize", n)
    }
    );
    const y = p && d ? ZC(p, n) : null;
    let v = -1
      , w = null;
    c && (w = new ResizeObserver(k=>{
        let[N] = k;
        N && N.target === p && w && (w.unobserve(e),
        cancelAnimationFrame(v),
        v = requestAnimationFrame(()=>{
            var O;
            (O = w) == null || O.observe(e)
        }
        )),
        n()
    }
    ),
    p && !h && w.observe(p),
    w.observe(e));
    let C, P = h ? Yr(t) : null;
    h && T();
    function T() {
        const k = Yr(t);
        P && !W0(P, k) && n(),
        P = k,
        C = requestAnimationFrame(T)
    }
    return n(),
    ()=>{
        var k;
        m.forEach(N=>{
            o && N.removeEventListener("scroll", n),
            l && N.removeEventListener("resize", n)
        }
        ),
        y?.(),
        (k = w) == null || k.disconnect(),
        w = null,
        h && cancelAnimationFrame(C)
    }
}
const XC = AC
  , YC = RC
  , JC = _C
  , e_ = MC
  , t_ = EC
  , qg = CC
  , n_ = NC
  , r_ = (t,e,n)=>{
    const i = new Map
      , o = {
        platform: qC,
        ...n
    }
      , l = {
        ...o.platform,
        _c: i
    };
    return bC(t, e, {
        ...o,
        platform: l
    })
}
;
var tl = typeof document < "u" ? S.useLayoutEffect : S.useEffect;
function fl(t, e) {
    if (t === e)
        return !0;
    if (typeof t != typeof e)
        return !1;
    if (typeof t == "function" && t.toString() === e.toString())
        return !0;
    let n, i, o;
    if (t && e && typeof t == "object") {
        if (Array.isArray(t)) {
            if (n = t.length,
            n !== e.length)
                return !1;
            for (i = n; i-- !== 0; )
                if (!fl(t[i], e[i]))
                    return !1;
            return !0
        }
        if (o = Object.keys(t),
        n = o.length,
        n !== Object.keys(e).length)
            return !1;
        for (i = n; i-- !== 0; )
            if (!{}.hasOwnProperty.call(e, o[i]))
                return !1;
        for (i = n; i-- !== 0; ) {
            const l = o[i];
            if (!(l === "_owner" && t.$$typeof) && !fl(t[l], e[l]))
                return !1
        }
        return !0
    }
    return t !== t && e !== e
}
function H0(t) {
    return typeof window > "u" ? 1 : (t.ownerDocument.defaultView || window).devicePixelRatio || 1
}
function Zg(t, e) {
    const n = H0(t);
    return Math.round(e * n) / n
}
function nd(t) {
    const e = S.useRef(t);
    return tl(()=>{
        e.current = t
    }
    ),
    e
}
function s_(t) {
    t === void 0 && (t = {});
    const {placement: e="bottom", strategy: n="absolute", middleware: i=[], platform: o, elements: {reference: l, floating: c}={}, transform: d=!0, whileElementsMounted: h, open: p} = t
      , [m,y] = S.useState({
        x: 0,
        y: 0,
        strategy: n,
        placement: e,
        middlewareData: {},
        isPositioned: !1
    })
      , [v,w] = S.useState(i);
    fl(v, i) || w(i);
    const [C,P] = S.useState(null)
      , [T,k] = S.useState(null)
      , N = S.useCallback(F=>{
        F !== V.current && (V.current = F,
        P(F))
    }
    , [])
      , O = S.useCallback(F=>{
        F !== z.current && (z.current = F,
        k(F))
    }
    , [])
      , j = l || C
      , L = c || T
      , V = S.useRef(null)
      , z = S.useRef(null)
      , K = S.useRef(m)
      , ie = h != null
      , ue = nd(h)
      , ve = nd(o)
      , le = nd(p)
      , Se = S.useCallback(()=>{
        if (!V.current || !z.current)
            return;
        const F = {
            placement: e,
            strategy: n,
            middleware: v
        };
        ve.current && (F.platform = ve.current),
        r_(V.current, z.current, F).then(G=>{
            const Z = {
                ...G,
                isPositioned: le.current !== !1
            };
            X.current && !fl(K.current, Z) && (K.current = Z,
            Nl.flushSync(()=>{
                y(Z)
            }
            ))
        }
        )
    }
    , [v, e, n, ve, le]);
    tl(()=>{
        p === !1 && K.current.isPositioned && (K.current.isPositioned = !1,
        y(F=>({
            ...F,
            isPositioned: !1
        })))
    }
    , [p]);
    const X = S.useRef(!1);
    tl(()=>(X.current = !0,
    ()=>{
        X.current = !1
    }
    ), []),
    tl(()=>{
        if (j && (V.current = j),
        L && (z.current = L),
        j && L) {
            if (ue.current)
                return ue.current(j, L, Se);
            Se()
        }
    }
    , [j, L, Se, ue, ie]);
    const _e = S.useMemo(()=>({
        reference: V,
        floating: z,
        setReference: N,
        setFloating: O
    }), [N, O])
      , he = S.useMemo(()=>({
        reference: j,
        floating: L
    }), [j, L])
      , te = S.useMemo(()=>{
        const F = {
            position: n,
            left: 0,
            top: 0
        };
        if (!he.floating)
            return F;
        const G = Zg(he.floating, m.x)
          , Z = Zg(he.floating, m.y);
        return d ? {
            ...F,
            transform: "translate(" + G + "px, " + Z + "px)",
            ...H0(he.floating) >= 1.5 && {
                willChange: "transform"
            }
        } : {
            position: n,
            left: G,
            top: Z
        }
    }
    , [n, d, he.floating, m.x, m.y]);
    return S.useMemo(()=>({
        ...m,
        update: Se,
        refs: _e,
        elements: he,
        floatingStyles: te
    }), [m, Se, _e, he, te])
}
const i_ = t=>{
    function e(n) {
        return {}.hasOwnProperty.call(n, "current")
    }
    return {
        name: "arrow",
        options: t,
        fn(n) {
            const {element: i, padding: o} = typeof t == "function" ? t(n) : t;
            return i && e(i) ? i.current != null ? qg({
                element: i.current,
                padding: o
            }).fn(n) : {} : i ? qg({
                element: i,
                padding: o
            }).fn(n) : {}
        }
    }
}
  , o_ = (t,e)=>({
    ...XC(t),
    options: [t, e]
})
  , a_ = (t,e)=>({
    ...YC(t),
    options: [t, e]
})
  , l_ = (t,e)=>({
    ...n_(t),
    options: [t, e]
})
  , u_ = (t,e)=>({
    ...JC(t),
    options: [t, e]
})
  , c_ = (t,e)=>({
    ...e_(t),
    options: [t, e]
})
  , d_ = (t,e)=>({
    ...t_(t),
    options: [t, e]
})
  , f_ = (t,e)=>({
    ...i_(t),
    options: [t, e]
});
var h_ = "Arrow"
  , Q0 = S.forwardRef((t,e)=>{
    const {children: n, width: i=10, height: o=5, ...l} = t;
    return A.jsx(Ot.svg, {
        ...l,
        ref: e,
        width: i,
        height: o,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
        children: t.asChild ? n : A.jsx("polygon", {
            points: "0,0 30,0 15,10"
        })
    })
}
);
Q0.displayName = h_;
var p_ = Q0;
function m_(t) {
    const [e,n] = S.useState(void 0);
    return Xr(()=>{
        if (t) {
            n({
                width: t.offsetWidth,
                height: t.offsetHeight
            });
            const i = new ResizeObserver(o=>{
                if (!Array.isArray(o) || !o.length)
                    return;
                const l = o[0];
                let c, d;
                if ("borderBoxSize"in l) {
                    const h = l.borderBoxSize
                      , p = Array.isArray(h) ? h[0] : h;
                    c = p.inlineSize,
                    d = p.blockSize
                } else
                    c = t.offsetWidth,
                    d = t.offsetHeight;
                n({
                    width: c,
                    height: d
                })
            }
            );
            return i.observe(t, {
                box: "border-box"
            }),
            ()=>i.unobserve(t)
        } else
            n(void 0)
    }
    , [t]),
    e
}
var K0 = "Popper"
  , [q0,Z0] = Ml(K0)
  , [u2,G0] = q0(K0)
  , X0 = "PopperAnchor"
  , Y0 = S.forwardRef((t,e)=>{
    const {__scopePopper: n, virtualRef: i, ...o} = t
      , l = G0(X0, n)
      , c = S.useRef(null)
      , d = mn(e, c);
    return S.useEffect(()=>{
        l.onAnchorChange(i?.current || c.current)
    }
    ),
    i ? null : A.jsx(Ot.div, {
        ...o,
        ref: d
    })
}
);
Y0.displayName = X0;
var Rf = "PopperContent"
  , [g_,y_] = q0(Rf)
  , J0 = S.forwardRef((t,e)=>{
    const {__scopePopper: n, side: i="bottom", sideOffset: o=0, align: l="center", alignOffset: c=0, arrowPadding: d=0, avoidCollisions: h=!0, collisionBoundary: p=[], collisionPadding: m=0, sticky: y="partial", hideWhenDetached: v=!1, updatePositionStrategy: w="optimized", onPlaced: C, ...P} = t
      , T = G0(Rf, n)
      , [k,N] = S.useState(null)
      , O = mn(e, Me=>N(Me))
      , [j,L] = S.useState(null)
      , V = m_(j)
      , z = V?.width ?? 0
      , K = V?.height ?? 0
      , ie = i + (l !== "center" ? "-" + l : "")
      , ue = typeof m == "number" ? m : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...m
    }
      , ve = Array.isArray(p) ? p : [p]
      , le = ve.length > 0
      , Se = {
        padding: ue,
        boundary: ve.filter(x_),
        altBoundary: le
    }
      , {refs: X, floatingStyles: _e, placement: he, isPositioned: te, middlewareData: F} = s_({
        strategy: "fixed",
        placement: ie,
        whileElementsMounted: (...Me)=>GC(...Me, {
            animationFrame: w === "always"
        }),
        elements: {
            reference: T.anchor
        },
        middleware: [o_({
            mainAxis: o + K,
            alignmentAxis: c
        }), h && a_({
            mainAxis: !0,
            crossAxis: !1,
            limiter: y === "partial" ? l_() : void 0,
            ...Se
        }), h && u_({
            ...Se
        }), c_({
            ...Se,
            apply: ({elements: Me, rects: De, availableWidth: je, availableHeight: Tt})=>{
                const {width: rs, height: Oo} = De.reference
                  , Dn = Me.floating.style;
                Dn.setProperty("--radix-popper-available-width", `${je}px`),
                Dn.setProperty("--radix-popper-available-height", `${Tt}px`),
                Dn.setProperty("--radix-popper-anchor-width", `${rs}px`),
                Dn.setProperty("--radix-popper-anchor-height", `${Oo}px`)
            }
        }), j && f_({
            element: j,
            padding: d
        }), w_({
            arrowWidth: z,
            arrowHeight: K
        }), v && d_({
            strategy: "referenceHidden",
            ...Se
        })]
    })
      , [G,Z] = nx(he)
      , R = kn(C);
    Xr(()=>{
        te && R?.()
    }
    , [te, R]);
    const B = F.arrow?.x
      , ye = F.arrow?.y
      , xe = F.arrow?.centerOffset !== 0
      , [Ee,ke] = S.useState();
    return Xr(()=>{
        k && ke(window.getComputedStyle(k).zIndex)
    }
    , [k]),
    A.jsx("div", {
        ref: X.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
            ..._e,
            transform: te ? _e.transform : "translate(0, -200%)",
            minWidth: "max-content",
            zIndex: Ee,
            "--radix-popper-transform-origin": [F.transformOrigin?.x, F.transformOrigin?.y].join(" "),
            ...F.hide?.referenceHidden && {
                visibility: "hidden",
                pointerEvents: "none"
            }
        },
        dir: t.dir,
        children: A.jsx(g_, {
            scope: n,
            placedSide: G,
            onArrowChange: L,
            arrowX: B,
            arrowY: ye,
            shouldHideArrow: xe,
            children: A.jsx(Ot.div, {
                "data-side": G,
                "data-align": Z,
                ...P,
                ref: O,
                style: {
                    ...P.style,
                    animation: te ? void 0 : "none"
                }
            })
        })
    })
}
);
J0.displayName = Rf;
var ex = "PopperArrow"
  , v_ = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
}
  , tx = S.forwardRef(function(e, n) {
    const {__scopePopper: i, ...o} = e
      , l = y_(ex, i)
      , c = v_[l.placedSide];
    return A.jsx("span", {
        ref: l.onArrowChange,
        style: {
            position: "absolute",
            left: l.arrowX,
            top: l.arrowY,
            [c]: 0,
            transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0"
            }[l.placedSide],
            transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: "rotate(180deg)",
                left: "translateY(50%) rotate(-90deg) translateX(50%)"
            }[l.placedSide],
            visibility: l.shouldHideArrow ? "hidden" : void 0
        },
        children: A.jsx(p_, {
            ...o,
            ref: n,
            style: {
                ...o.style,
                display: "block"
            }
        })
    })
});
tx.displayName = ex;
function x_(t) {
    return t !== null
}
var w_ = t=>({
    name: "transformOrigin",
    options: t,
    fn(e) {
        const {placement: n, rects: i, middlewareData: o} = e
          , c = o.arrow?.centerOffset !== 0
          , d = c ? 0 : t.arrowWidth
          , h = c ? 0 : t.arrowHeight
          , [p,m] = nx(n)
          , y = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[m]
          , v = (o.arrow?.x ?? 0) + d / 2
          , w = (o.arrow?.y ?? 0) + h / 2;
        let C = ""
          , P = "";
        return p === "bottom" ? (C = c ? y : `${v}px`,
        P = `${-h}px`) : p === "top" ? (C = c ? y : `${v}px`,
        P = `${i.floating.height + h}px`) : p === "right" ? (C = `${-h}px`,
        P = c ? y : `${w}px`) : p === "left" && (C = `${i.floating.width + h}px`,
        P = c ? y : `${w}px`),
        {
            data: {
                x: C,
                y: P
            }
        }
    }
});
function nx(t) {
    const [e,n="center"] = t.split("-");
    return [e, n]
}
var S_ = Y0
  , P_ = J0
  , T_ = tx
  , [Vl] = Ml("Tooltip", [Z0])
  , Nf = Z0()
  , rx = "TooltipProvider"
  , b_ = 700
  , Gg = "tooltip.open"
  , [C_,sx] = Vl(rx)
  , ix = t=>{
    const {__scopeTooltip: e, delayDuration: n=b_, skipDelayDuration: i=300, disableHoverableContent: o=!1, children: l} = t
      , c = S.useRef(!0)
      , d = S.useRef(!1)
      , h = S.useRef(0);
    return S.useEffect(()=>{
        const p = h.current;
        return ()=>window.clearTimeout(p)
    }
    , []),
    A.jsx(C_, {
        scope: e,
        isOpenDelayedRef: c,
        delayDuration: n,
        onOpen: S.useCallback(()=>{
            window.clearTimeout(h.current),
            c.current = !1
        }
        , []),
        onClose: S.useCallback(()=>{
            window.clearTimeout(h.current),
            h.current = window.setTimeout(()=>c.current = !0, i)
        }
        , [i]),
        isPointerInTransitRef: d,
        onPointerInTransitChange: S.useCallback(p=>{
            d.current = p
        }
        , []),
        disableHoverableContent: o,
        children: l
    })
}
;
ix.displayName = rx;
var ox = "Tooltip"
  , [c2,zl] = Vl(ox)
  , Ld = "TooltipTrigger"
  , __ = S.forwardRef((t,e)=>{
    const {__scopeTooltip: n, ...i} = t
      , o = zl(Ld, n)
      , l = sx(Ld, n)
      , c = Nf(n)
      , d = S.useRef(null)
      , h = mn(e, d, o.onTriggerChange)
      , p = S.useRef(!1)
      , m = S.useRef(!1)
      , y = S.useCallback(()=>p.current = !1, []);
    return S.useEffect(()=>()=>document.removeEventListener("pointerup", y), [y]),
    A.jsx(S_, {
        asChild: !0,
        ...c,
        children: A.jsx(Ot.button, {
            "aria-describedby": o.open ? o.contentId : void 0,
            "data-state": o.stateAttribute,
            ...i,
            ref: h,
            onPointerMove: ot(t.onPointerMove, v=>{
                v.pointerType !== "touch" && !m.current && !l.isPointerInTransitRef.current && (o.onTriggerEnter(),
                m.current = !0)
            }
            ),
            onPointerLeave: ot(t.onPointerLeave, ()=>{
                o.onTriggerLeave(),
                m.current = !1
            }
            ),
            onPointerDown: ot(t.onPointerDown, ()=>{
                o.open && o.onClose(),
                p.current = !0,
                document.addEventListener("pointerup", y, {
                    once: !0
                })
            }
            ),
            onFocus: ot(t.onFocus, ()=>{
                p.current || o.onOpen()
            }
            ),
            onBlur: ot(t.onBlur, o.onClose),
            onClick: ot(t.onClick, o.onClose)
        })
    })
}
);
__.displayName = Ld;
var E_ = "TooltipPortal"
  , [d2,k_] = Vl(E_, {
    forceMount: void 0
})
  , $s = "TooltipContent"
  , ax = S.forwardRef((t,e)=>{
    const n = k_($s, t.__scopeTooltip)
      , {forceMount: i=n.forceMount, side: o="top", ...l} = t
      , c = zl($s, t.__scopeTooltip);
    return A.jsx(yf, {
        present: i || c.open,
        children: c.disableHoverableContent ? A.jsx(lx, {
            side: o,
            ...l,
            ref: e
        }) : A.jsx(A_, {
            side: o,
            ...l,
            ref: e
        })
    })
}
)
  , A_ = S.forwardRef((t,e)=>{
    const n = zl($s, t.__scopeTooltip)
      , i = sx($s, t.__scopeTooltip)
      , o = S.useRef(null)
      , l = mn(e, o)
      , [c,d] = S.useState(null)
      , {trigger: h, onClose: p} = n
      , m = o.current
      , {onPointerInTransitChange: y} = i
      , v = S.useCallback(()=>{
        d(null),
        y(!1)
    }
    , [y])
      , w = S.useCallback((C,P)=>{
        const T = C.currentTarget
          , k = {
            x: C.clientX,
            y: C.clientY
        }
          , N = O_(k, T.getBoundingClientRect())
          , O = I_(k, N)
          , j = L_(P.getBoundingClientRect())
          , L = F_([...O, ...j]);
        d(L),
        y(!0)
    }
    , [y]);
    return S.useEffect(()=>()=>v(), [v]),
    S.useEffect(()=>{
        if (h && m) {
            const C = T=>w(T, m)
              , P = T=>w(T, h);
            return h.addEventListener("pointerleave", C),
            m.addEventListener("pointerleave", P),
            ()=>{
                h.removeEventListener("pointerleave", C),
                m.removeEventListener("pointerleave", P)
            }
        }
    }
    , [h, m, w, v]),
    S.useEffect(()=>{
        if (c) {
            const C = P=>{
                const T = P.target
                  , k = {
                    x: P.clientX,
                    y: P.clientY
                }
                  , N = h?.contains(T) || m?.contains(T)
                  , O = !j_(k, c);
                N ? v() : O && (v(),
                p())
            }
            ;
            return document.addEventListener("pointermove", C),
            ()=>document.removeEventListener("pointermove", C)
        }
    }
    , [h, m, c, p, v]),
    A.jsx(lx, {
        ...t,
        ref: l
    })
}
)
  , [R_,N_] = Vl(ox, {
    isInside: !1
})
  , M_ = MT("TooltipContent")
  , lx = S.forwardRef((t,e)=>{
    const {__scopeTooltip: n, children: i, "aria-label": o, onEscapeKeyDown: l, onPointerDownOutside: c, ...d} = t
      , h = zl($s, n)
      , p = Nf(n)
      , {onClose: m} = h;
    return S.useEffect(()=>(document.addEventListener(Gg, m),
    ()=>document.removeEventListener(Gg, m)), [m]),
    S.useEffect(()=>{
        if (h.trigger) {
            const y = v=>{
                v.target?.contains(h.trigger) && m()
            }
            ;
            return window.addEventListener("scroll", y, {
                capture: !0
            }),
            ()=>window.removeEventListener("scroll", y, {
                capture: !0
            })
        }
    }
    , [h.trigger, m]),
    A.jsx(gf, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: l,
        onPointerDownOutside: c,
        onFocusOutside: y=>y.preventDefault(),
        onDismiss: m,
        children: A.jsxs(P_, {
            "data-state": h.stateAttribute,
            ...p,
            ...d,
            ref: e,
            style: {
                ...d.style,
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [A.jsx(M_, {
                children: i
            }), A.jsx(R_, {
                scope: n,
                isInside: !0,
                children: A.jsx(eb, {
                    id: h.contentId,
                    role: "tooltip",
                    children: o || i
                })
            })]
        })
    })
}
);
ax.displayName = $s;
var ux = "TooltipArrow"
  , D_ = S.forwardRef((t,e)=>{
    const {__scopeTooltip: n, ...i} = t
      , o = Nf(n);
    return N_(ux, n).isInside ? null : A.jsx(T_, {
        ...o,
        ...i,
        ref: e
    })
}
);
D_.displayName = ux;
function O_(t, e) {
    const n = Math.abs(e.top - t.y)
      , i = Math.abs(e.bottom - t.y)
      , o = Math.abs(e.right - t.x)
      , l = Math.abs(e.left - t.x);
    switch (Math.min(n, i, o, l)) {
    case l:
        return "left";
    case o:
        return "right";
    case n:
        return "top";
    case i:
        return "bottom";
    default:
        throw new Error("unreachable")
    }
}
function I_(t, e, n=5) {
    const i = [];
    switch (e) {
    case "top":
        i.push({
            x: t.x - n,
            y: t.y + n
        }, {
            x: t.x + n,
            y: t.y + n
        });
        break;
    case "bottom":
        i.push({
            x: t.x - n,
            y: t.y - n
        }, {
            x: t.x + n,
            y: t.y - n
        });
        break;
    case "left":
        i.push({
            x: t.x + n,
            y: t.y - n
        }, {
            x: t.x + n,
            y: t.y + n
        });
        break;
    case "right":
        i.push({
            x: t.x - n,
            y: t.y - n
        }, {
            x: t.x - n,
            y: t.y + n
        });
        break
    }
    return i
}
function L_(t) {
    const {top: e, right: n, bottom: i, left: o} = t;
    return [{
        x: o,
        y: e
    }, {
        x: n,
        y: e
    }, {
        x: n,
        y: i
    }, {
        x: o,
        y: i
    }]
}
function j_(t, e) {
    const {x: n, y: i} = t;
    let o = !1;
    for (let l = 0, c = e.length - 1; l < e.length; c = l++) {
        const d = e[l].x
          , h = e[l].y
          , p = e[c].x
          , m = e[c].y;
        h > i != m > i && n < (p - d) * (i - h) / (m - h) + d && (o = !o)
    }
    return o
}
function F_(t) {
    const e = t.slice();
    return e.sort((n,i)=>n.x < i.x ? -1 : n.x > i.x ? 1 : n.y < i.y ? -1 : n.y > i.y ? 1 : 0),
    V_(e)
}
function V_(t) {
    if (t.length <= 1)
        return t.slice();
    const e = [];
    for (let i = 0; i < t.length; i++) {
        const o = t[i];
        for (; e.length >= 2; ) {
            const l = e[e.length - 1]
              , c = e[e.length - 2];
            if ((l.x - c.x) * (o.y - c.y) >= (l.y - c.y) * (o.x - c.x))
                e.pop();
            else
                break
        }
        e.push(o)
    }
    e.pop();
    const n = [];
    for (let i = t.length - 1; i >= 0; i--) {
        const o = t[i];
        for (; n.length >= 2; ) {
            const l = n[n.length - 1]
              , c = n[n.length - 2];
            if ((l.x - c.x) * (o.y - c.y) >= (l.y - c.y) * (o.x - c.x))
                n.pop();
            else
                break
        }
        n.push(o)
    }
    return n.pop(),
    e.length === 1 && n.length === 1 && e[0].x === n[0].x && e[0].y === n[0].y ? e : e.concat(n)
}
var z_ = ix
  , cx = ax;
const B_ = z_
  , U_ = S.forwardRef(({className: t, sideOffset: e=4, ...n},i)=>A.jsx(cx, {
    ref: i,
    sideOffset: e,
    className: It("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-tooltip-content-transform-origin]", t),
    ...n
}));
U_.displayName = cx.displayName;
var Ae;
(function(t) {
    t.assertEqual = o=>o;
    function e(o) {}
    t.assertIs = e;
    function n(o) {
        throw new Error
    }
    t.assertNever = n,
    t.arrayToEnum = o=>{
        const l = {};
        for (const c of o)
            l[c] = c;
        return l
    }
    ,
    t.getValidEnumValues = o=>{
        const l = t.objectKeys(o).filter(d=>typeof o[o[d]] != "number")
          , c = {};
        for (const d of l)
            c[d] = o[d];
        return t.objectValues(c)
    }
    ,
    t.objectValues = o=>t.objectKeys(o).map(function(l) {
        return o[l]
    }),
    t.objectKeys = typeof Object.keys == "function" ? o=>Object.keys(o) : o=>{
        const l = [];
        for (const c in o)
            Object.prototype.hasOwnProperty.call(o, c) && l.push(c);
        return l
    }
    ,
    t.find = (o,l)=>{
        for (const c of o)
            if (l(c))
                return c
    }
    ,
    t.isInteger = typeof Number.isInteger == "function" ? o=>Number.isInteger(o) : o=>typeof o == "number" && isFinite(o) && Math.floor(o) === o;
    function i(o, l=" | ") {
        return o.map(c=>typeof c == "string" ? `'${c}'` : c).join(l)
    }
    t.joinValues = i,
    t.jsonStringifyReplacer = (o,l)=>typeof l == "bigint" ? l.toString() : l
}
)(Ae || (Ae = {}));
var jd;
(function(t) {
    t.mergeShapes = (e,n)=>({
        ...e,
        ...n
    })
}
)(jd || (jd = {}));
const ee = Ae.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"])
  , Wn = t=>{
    switch (typeof t) {
    case "undefined":
        return ee.undefined;
    case "string":
        return ee.string;
    case "number":
        return isNaN(t) ? ee.nan : ee.number;
    case "boolean":
        return ee.boolean;
    case "function":
        return ee.function;
    case "bigint":
        return ee.bigint;
    case "symbol":
        return ee.symbol;
    case "object":
        return Array.isArray(t) ? ee.array : t === null ? ee.null : t.then && typeof t.then == "function" && t.catch && typeof t.catch == "function" ? ee.promise : typeof Map < "u" && t instanceof Map ? ee.map : typeof Set < "u" && t instanceof Set ? ee.set : typeof Date < "u" && t instanceof Date ? ee.date : ee.object;
    default:
        return ee.unknown
    }
}
  , Q = Ae.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"])
  , $_ = t=>JSON.stringify(t, null, 2).replace(/"([^"]+)":/g, "$1:");
class $t extends Error {
    get errors() {
        return this.issues
    }
    constructor(e) {
        super(),
        this.issues = [],
        this.addIssue = i=>{
            this.issues = [...this.issues, i]
        }
        ,
        this.addIssues = (i=[])=>{
            this.issues = [...this.issues, ...i]
        }
        ;
        const n = new.target.prototype;
        Object.setPrototypeOf ? Object.setPrototypeOf(this, n) : this.__proto__ = n,
        this.name = "ZodError",
        this.issues = e
    }
    format(e) {
        const n = e || function(l) {
            return l.message
        }
          , i = {
            _errors: []
        }
          , o = l=>{
            for (const c of l.issues)
                if (c.code === "invalid_union")
                    c.unionErrors.map(o);
                else if (c.code === "invalid_return_type")
                    o(c.returnTypeError);
                else if (c.code === "invalid_arguments")
                    o(c.argumentsError);
                else if (c.path.length === 0)
                    i._errors.push(n(c));
                else {
                    let d = i
                      , h = 0;
                    for (; h < c.path.length; ) {
                        const p = c.path[h];
                        h === c.path.length - 1 ? (d[p] = d[p] || {
                            _errors: []
                        },
                        d[p]._errors.push(n(c))) : d[p] = d[p] || {
                            _errors: []
                        },
                        d = d[p],
                        h++
                    }
                }
        }
        ;
        return o(this),
        i
    }
    static assert(e) {
        if (!(e instanceof $t))
            throw new Error(`Not a ZodError: ${e}`)
    }
    toString() {
        return this.message
    }
    get message() {
        return JSON.stringify(this.issues, Ae.jsonStringifyReplacer, 2)
    }
    get isEmpty() {
        return this.issues.length === 0
    }
    flatten(e=n=>n.message) {
        const n = {}
          , i = [];
        for (const o of this.issues)
            o.path.length > 0 ? (n[o.path[0]] = n[o.path[0]] || [],
            n[o.path[0]].push(e(o))) : i.push(e(o));
        return {
            formErrors: i,
            fieldErrors: n
        }
    }
    get formErrors() {
        return this.flatten()
    }
}
$t.create = t=>new $t(t);
const Ws = (t,e)=>{
    let n;
    switch (t.code) {
    case Q.invalid_type:
        t.received === ee.undefined ? n = "Required" : n = `Expected ${t.expected}, received ${t.received}`;
        break;
    case Q.invalid_literal:
        n = `Invalid literal value, expected ${JSON.stringify(t.expected, Ae.jsonStringifyReplacer)}`;
        break;
    case Q.unrecognized_keys:
        n = `Unrecognized key(s) in object: ${Ae.joinValues(t.keys, ", ")}`;
        break;
    case Q.invalid_union:
        n = "Invalid input";
        break;
    case Q.invalid_union_discriminator:
        n = `Invalid discriminator value. Expected ${Ae.joinValues(t.options)}`;
        break;
    case Q.invalid_enum_value:
        n = `Invalid enum value. Expected ${Ae.joinValues(t.options)}, received '${t.received}'`;
        break;
    case Q.invalid_arguments:
        n = "Invalid function arguments";
        break;
    case Q.invalid_return_type:
        n = "Invalid function return type";
        break;
    case Q.invalid_date:
        n = "Invalid date";
        break;
    case Q.invalid_string:
        typeof t.validation == "object" ? "includes"in t.validation ? (n = `Invalid input: must include "${t.validation.includes}"`,
        typeof t.validation.position == "number" && (n = `${n} at one or more positions greater than or equal to ${t.validation.position}`)) : "startsWith"in t.validation ? n = `Invalid input: must start with "${t.validation.startsWith}"` : "endsWith"in t.validation ? n = `Invalid input: must end with "${t.validation.endsWith}"` : Ae.assertNever(t.validation) : t.validation !== "regex" ? n = `Invalid ${t.validation}` : n = "Invalid";
        break;
    case Q.too_small:
        t.type === "array" ? n = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "more than"} ${t.minimum} element(s)` : t.type === "string" ? n = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "over"} ${t.minimum} character(s)` : t.type === "number" ? n = `Number must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${t.minimum}` : t.type === "date" ? n = `Date must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(t.minimum))}` : n = "Invalid input";
        break;
    case Q.too_big:
        t.type === "array" ? n = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "less than"} ${t.maximum} element(s)` : t.type === "string" ? n = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "under"} ${t.maximum} character(s)` : t.type === "number" ? n = `Number must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}` : t.type === "bigint" ? n = `BigInt must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}` : t.type === "date" ? n = `Date must be ${t.exact ? "exactly" : t.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(t.maximum))}` : n = "Invalid input";
        break;
    case Q.custom:
        n = "Invalid input";
        break;
    case Q.invalid_intersection_types:
        n = "Intersection results could not be merged";
        break;
    case Q.not_multiple_of:
        n = `Number must be a multiple of ${t.multipleOf}`;
        break;
    case Q.not_finite:
        n = "Number must be finite";
        break;
    default:
        n = e.defaultError,
        Ae.assertNever(t)
    }
    return {
        message: n
    }
}
;
let dx = Ws;
function W_(t) {
    dx = t
}
function hl() {
    return dx
}
const pl = t=>{
    const {data: e, path: n, errorMaps: i, issueData: o} = t
      , l = [...n, ...o.path || []]
      , c = {
        ...o,
        path: l
    };
    if (o.message !== void 0)
        return {
            ...o,
            path: l,
            message: o.message
        };
    let d = "";
    const h = i.filter(p=>!!p).slice().reverse();
    for (const p of h)
        d = p(c, {
            data: e,
            defaultError: d
        }).message;
    return {
        ...o,
        path: l,
        message: d
    }
}
  , H_ = [];
function Y(t, e) {
    const n = hl()
      , i = pl({
        issueData: e,
        data: t.data,
        path: t.path,
        errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, n, n === Ws ? void 0 : Ws].filter(o=>!!o)
    });
    t.common.issues.push(i)
}
class Pt {
    constructor() {
        this.value = "valid"
    }
    dirty() {
        this.value === "valid" && (this.value = "dirty")
    }
    abort() {
        this.value !== "aborted" && (this.value = "aborted")
    }
    static mergeArray(e, n) {
        const i = [];
        for (const o of n) {
            if (o.status === "aborted")
                return me;
            o.status === "dirty" && e.dirty(),
            i.push(o.value)
        }
        return {
            status: e.value,
            value: i
        }
    }
    static async mergeObjectAsync(e, n) {
        const i = [];
        for (const o of n) {
            const l = await o.key
              , c = await o.value;
            i.push({
                key: l,
                value: c
            })
        }
        return Pt.mergeObjectSync(e, i)
    }
    static mergeObjectSync(e, n) {
        const i = {};
        for (const o of n) {
            const {key: l, value: c} = o;
            if (l.status === "aborted" || c.status === "aborted")
                return me;
            l.status === "dirty" && e.dirty(),
            c.status === "dirty" && e.dirty(),
            l.value !== "__proto__" && (typeof c.value < "u" || o.alwaysSet) && (i[l.value] = c.value)
        }
        return {
            status: e.value,
            value: i
        }
    }
}
const me = Object.freeze({
    status: "aborted"
})
  , Rs = t=>({
    status: "dirty",
    value: t
})
  , _t = t=>({
    status: "valid",
    value: t
})
  , Fd = t=>t.status === "aborted"
  , Vd = t=>t.status === "dirty"
  , Jr = t=>t.status === "valid"
  , ao = t=>typeof Promise < "u" && t instanceof Promise;
function ml(t, e, n, i) {
    if (typeof e == "function" ? t !== e || !0 : !e.has(t))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return e.get(t)
}
function fx(t, e, n, i, o) {
    if (typeof e == "function" ? t !== e || !0 : !e.has(t))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return e.set(t, n),
    n
}
var ae;
(function(t) {
    t.errToObj = e=>typeof e == "string" ? {
        message: e
    } : e || {},
    t.toString = e=>typeof e == "string" ? e : e?.message
}
)(ae || (ae = {}));
var Ki, qi;
class Rn {
    constructor(e, n, i, o) {
        this._cachedPath = [],
        this.parent = e,
        this.data = n,
        this._path = i,
        this._key = o
    }
    get path() {
        return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)),
        this._cachedPath
    }
}
const Xg = (t,e)=>{
    if (Jr(e))
        return {
            success: !0,
            data: e.value
        };
    if (!t.common.issues.length)
        throw new Error("Validation failed but no issues detected.");
    return {
        success: !1,
        get error() {
            if (this._error)
                return this._error;
            const n = new $t(t.common.issues);
            return this._error = n,
            this._error
        }
    }
}
;
function we(t) {
    if (!t)
        return {};
    const {errorMap: e, invalid_type_error: n, required_error: i, description: o} = t;
    if (e && (n || i))
        throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
    return e ? {
        errorMap: e,
        description: o
    } : {
        errorMap: (c,d)=>{
            var h, p;
            const {message: m} = t;
            return c.code === "invalid_enum_value" ? {
                message: m ?? d.defaultError
            } : typeof d.data > "u" ? {
                message: (h = m ?? i) !== null && h !== void 0 ? h : d.defaultError
            } : c.code !== "invalid_type" ? {
                message: d.defaultError
            } : {
                message: (p = m ?? n) !== null && p !== void 0 ? p : d.defaultError
            }
        }
        ,
        description: o
    }
}
class be {
    get description() {
        return this._def.description
    }
    _getType(e) {
        return Wn(e.data)
    }
    _getOrReturnCtx(e, n) {
        return n || {
            common: e.parent.common,
            data: e.data,
            parsedType: Wn(e.data),
            schemaErrorMap: this._def.errorMap,
            path: e.path,
            parent: e.parent
        }
    }
    _processInputParams(e) {
        return {
            status: new Pt,
            ctx: {
                common: e.parent.common,
                data: e.data,
                parsedType: Wn(e.data),
                schemaErrorMap: this._def.errorMap,
                path: e.path,
                parent: e.parent
            }
        }
    }
    _parseSync(e) {
        const n = this._parse(e);
        if (ao(n))
            throw new Error("Synchronous parse encountered promise.");
        return n
    }
    _parseAsync(e) {
        const n = this._parse(e);
        return Promise.resolve(n)
    }
    parse(e, n) {
        const i = this.safeParse(e, n);
        if (i.success)
            return i.data;
        throw i.error
    }
    safeParse(e, n) {
        var i;
        const o = {
            common: {
                issues: [],
                async: (i = n?.async) !== null && i !== void 0 ? i : !1,
                contextualErrorMap: n?.errorMap
            },
            path: n?.path || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: e,
            parsedType: Wn(e)
        }
          , l = this._parseSync({
            data: e,
            path: o.path,
            parent: o
        });
        return Xg(o, l)
    }
    "~validate"(e) {
        var n, i;
        const o = {
            common: {
                issues: [],
                async: !!this["~standard"].async
            },
            path: [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: e,
            parsedType: Wn(e)
        };
        if (!this["~standard"].async)
            try {
                const l = this._parseSync({
                    data: e,
                    path: [],
                    parent: o
                });
                return Jr(l) ? {
                    value: l.value
                } : {
                    issues: o.common.issues
                }
            } catch (l) {
                !((i = (n = l?.message) === null || n === void 0 ? void 0 : n.toLowerCase()) === null || i === void 0) && i.includes("encountered") && (this["~standard"].async = !0),
                o.common = {
                    issues: [],
                    async: !0
                }
            }
        return this._parseAsync({
            data: e,
            path: [],
            parent: o
        }).then(l=>Jr(l) ? {
            value: l.value
        } : {
            issues: o.common.issues
        })
    }
    async parseAsync(e, n) {
        const i = await this.safeParseAsync(e, n);
        if (i.success)
            return i.data;
        throw i.error
    }
    async safeParseAsync(e, n) {
        const i = {
            common: {
                issues: [],
                contextualErrorMap: n?.errorMap,
                async: !0
            },
            path: n?.path || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: e,
            parsedType: Wn(e)
        }
          , o = this._parse({
            data: e,
            path: i.path,
            parent: i
        })
          , l = await (ao(o) ? o : Promise.resolve(o));
        return Xg(i, l)
    }
    refine(e, n) {
        const i = o=>typeof n == "string" || typeof n > "u" ? {
            message: n
        } : typeof n == "function" ? n(o) : n;
        return this._refinement((o,l)=>{
            const c = e(o)
              , d = ()=>l.addIssue({
                code: Q.custom,
                ...i(o)
            });
            return typeof Promise < "u" && c instanceof Promise ? c.then(h=>h ? !0 : (d(),
            !1)) : c ? !0 : (d(),
            !1)
        }
        )
    }
    refinement(e, n) {
        return this._refinement((i,o)=>e(i) ? !0 : (o.addIssue(typeof n == "function" ? n(i, o) : n),
        !1))
    }
    _refinement(e) {
        return new vn({
            schema: this,
            typeName: pe.ZodEffects,
            effect: {
                type: "refinement",
                refinement: e
            }
        })
    }
    superRefine(e) {
        return this._refinement(e)
    }
    constructor(e) {
        this.spa = this.safeParseAsync,
        this._def = e,
        this.parse = this.parse.bind(this),
        this.safeParse = this.safeParse.bind(this),
        this.parseAsync = this.parseAsync.bind(this),
        this.safeParseAsync = this.safeParseAsync.bind(this),
        this.spa = this.spa.bind(this),
        this.refine = this.refine.bind(this),
        this.refinement = this.refinement.bind(this),
        this.superRefine = this.superRefine.bind(this),
        this.optional = this.optional.bind(this),
        this.nullable = this.nullable.bind(this),
        this.nullish = this.nullish.bind(this),
        this.array = this.array.bind(this),
        this.promise = this.promise.bind(this),
        this.or = this.or.bind(this),
        this.and = this.and.bind(this),
        this.transform = this.transform.bind(this),
        this.brand = this.brand.bind(this),
        this.default = this.default.bind(this),
        this.catch = this.catch.bind(this),
        this.describe = this.describe.bind(this),
        this.pipe = this.pipe.bind(this),
        this.readonly = this.readonly.bind(this),
        this.isNullable = this.isNullable.bind(this),
        this.isOptional = this.isOptional.bind(this),
        this["~standard"] = {
            version: 1,
            vendor: "zod",
            validate: n=>this["~validate"](n)
        }
    }
    optional() {
        return Cn.create(this, this._def)
    }
    nullable() {
        return _r.create(this, this._def)
    }
    nullish() {
        return this.nullable().optional()
    }
    array() {
        return pn.create(this)
    }
    promise() {
        return Qs.create(this, this._def)
    }
    or(e) {
        return fo.create([this, e], this._def)
    }
    and(e) {
        return ho.create(this, e, this._def)
    }
    transform(e) {
        return new vn({
            ...we(this._def),
            schema: this,
            typeName: pe.ZodEffects,
            effect: {
                type: "transform",
                transform: e
            }
        })
    }
    default(e) {
        const n = typeof e == "function" ? e : ()=>e;
        return new vo({
            ...we(this._def),
            innerType: this,
            defaultValue: n,
            typeName: pe.ZodDefault
        })
    }
    brand() {
        return new Mf({
            typeName: pe.ZodBranded,
            type: this,
            ...we(this._def)
        })
    }
    catch(e) {
        const n = typeof e == "function" ? e : ()=>e;
        return new xo({
            ...we(this._def),
            innerType: this,
            catchValue: n,
            typeName: pe.ZodCatch
        })
    }
    describe(e) {
        const n = this.constructor;
        return new n({
            ...this._def,
            description: e
        })
    }
    pipe(e) {
        return ko.create(this, e)
    }
    readonly() {
        return wo.create(this)
    }
    isOptional() {
        return this.safeParse(void 0).success
    }
    isNullable() {
        return this.safeParse(null).success
    }
}
const Q_ = /^c[^\s-]{8,}$/i
  , K_ = /^[0-9a-z]+$/
  , q_ = /^[0-9A-HJKMNP-TV-Z]{26}$/i
  , Z_ = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i
  , G_ = /^[a-z0-9_-]{21}$/i
  , X_ = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/
  , Y_ = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/
  , J_ = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i
  , eE = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let rd;
const tE = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/
  , nE = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/
  , rE = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/
  , sE = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/
  , iE = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/
  , oE = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/
  , hx = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))"
  , aE = new RegExp(`^${hx}$`);
function px(t) {
    let e = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
    return t.precision ? e = `${e}\\.\\d{${t.precision}}` : t.precision == null && (e = `${e}(\\.\\d+)?`),
    e
}
function lE(t) {
    return new RegExp(`^${px(t)}$`)
}
function mx(t) {
    let e = `${hx}T${px(t)}`;
    const n = [];
    return n.push(t.local ? "Z?" : "Z"),
    t.offset && n.push("([+-]\\d{2}:?\\d{2})"),
    e = `${e}(${n.join("|")})`,
    new RegExp(`^${e}$`)
}
function uE(t, e) {
    return !!((e === "v4" || !e) && tE.test(t) || (e === "v6" || !e) && rE.test(t))
}
function cE(t, e) {
    if (!X_.test(t))
        return !1;
    try {
        const [n] = t.split(".")
          , i = n.replace(/-/g, "+").replace(/_/g, "/").padEnd(n.length + (4 - n.length % 4) % 4, "=")
          , o = JSON.parse(atob(i));
        return !(typeof o != "object" || o === null || !o.typ || !o.alg || e && o.alg !== e)
    } catch {
        return !1
    }
}
function dE(t, e) {
    return !!((e === "v4" || !e) && nE.test(t) || (e === "v6" || !e) && sE.test(t))
}
class hn extends be {
    _parse(e) {
        if (this._def.coerce && (e.data = String(e.data)),
        this._getType(e) !== ee.string) {
            const l = this._getOrReturnCtx(e);
            return Y(l, {
                code: Q.invalid_type,
                expected: ee.string,
                received: l.parsedType
            }),
            me
        }
        const i = new Pt;
        let o;
        for (const l of this._def.checks)
            if (l.kind === "min")
                e.data.length < l.value && (o = this._getOrReturnCtx(e, o),
                Y(o, {
                    code: Q.too_small,
                    minimum: l.value,
                    type: "string",
                    inclusive: !0,
                    exact: !1,
                    message: l.message
                }),
                i.dirty());
            else if (l.kind === "max")
                e.data.length > l.value && (o = this._getOrReturnCtx(e, o),
                Y(o, {
                    code: Q.too_big,
                    maximum: l.value,
                    type: "string",
                    inclusive: !0,
                    exact: !1,
                    message: l.message
                }),
                i.dirty());
            else if (l.kind === "length") {
                const c = e.data.length > l.value
                  , d = e.data.length < l.value;
                (c || d) && (o = this._getOrReturnCtx(e, o),
                c ? Y(o, {
                    code: Q.too_big,
                    maximum: l.value,
                    type: "string",
                    inclusive: !0,
                    exact: !0,
                    message: l.message
                }) : d && Y(o, {
                    code: Q.too_small,
                    minimum: l.value,
                    type: "string",
                    inclusive: !0,
                    exact: !0,
                    message: l.message
                }),
                i.dirty())
            } else if (l.kind === "email")
                J_.test(e.data) || (o = this._getOrReturnCtx(e, o),
                Y(o, {
                    validation: "email",
                    code: Q.invalid_string,
                    message: l.message
                }),
                i.dirty());
            else if (l.kind === "emoji")
                rd || (rd = new RegExp(eE,"u")),
                rd.test(e.data) || (o = this._getOrReturnCtx(e, o),
                Y(o, {
                    validation: "emoji",
                    code: Q.invalid_string,
                    message: l.message
                }),
                i.dirty());
            else if (l.kind === "uuid")
                Z_.test(e.data) || (o = this._getOrReturnCtx(e, o),
                Y(o, {
                    validation: "uuid",
                    code: Q.invalid_string,
                    message: l.message
                }),
                i.dirty());
            else if (l.kind === "nanoid")
                G_.test(e.data) || (o = this._getOrReturnCtx(e, o),
                Y(o, {
                    validation: "nanoid",
                    code: Q.invalid_string,
                    message: l.message
                }),
                i.dirty());
            else if (l.kind === "cuid")
                Q_.test(e.data) || (o = this._getOrReturnCtx(e, o),
                Y(o, {
                    validation: "cuid",
                    code: Q.invalid_string,
                    message: l.message
                }),
                i.dirty());
            else if (l.kind === "cuid2")
                K_.test(e.data) || (o = this._getOrReturnCtx(e, o),
                Y(o, {
                    validation: "cuid2",
                    code: Q.invalid_string,
                    message: l.message
                }),
                i.dirty());
            else if (l.kind === "ulid")
                q_.test(e.data) || (o = this._getOrReturnCtx(e, o),
                Y(o, {
                    validation: "ulid",
                    code: Q.invalid_string,
                    message: l.message
                }),
                i.dirty());
            else if (l.kind === "url")
                try {
                    new URL(e.data)
                } catch {
                    o = this._getOrReturnCtx(e, o),
                    Y(o, {
                        validation: "url",
                        code: Q.invalid_string,
                        message: l.message
                    }),
                    i.dirty()
                }
            else
                l.kind === "regex" ? (l.regex.lastIndex = 0,
                l.regex.test(e.data) || (o = this._getOrReturnCtx(e, o),
                Y(o, {
                    validation: "regex",
                    code: Q.invalid_string,
                    message: l.message
                }),
                i.dirty())) : l.kind === "trim" ? e.data = e.data.trim() : l.kind === "includes" ? e.data.includes(l.value, l.position) || (o = this._getOrReturnCtx(e, o),
                Y(o, {
                    code: Q.invalid_string,
                    validation: {
                        includes: l.value,
                        position: l.position
                    },
                    message: l.message
                }),
                i.dirty()) : l.kind === "toLowerCase" ? e.data = e.data.toLowerCase() : l.kind === "toUpperCase" ? e.data = e.data.toUpperCase() : l.kind === "startsWith" ? e.data.startsWith(l.value) || (o = this._getOrReturnCtx(e, o),
                Y(o, {
                    code: Q.invalid_string,
                    validation: {
                        startsWith: l.value
                    },
                    message: l.message
                }),
                i.dirty()) : l.kind === "endsWith" ? e.data.endsWith(l.value) || (o = this._getOrReturnCtx(e, o),
                Y(o, {
                    code: Q.invalid_string,
                    validation: {
                        endsWith: l.value
                    },
                    message: l.message
                }),
                i.dirty()) : l.kind === "datetime" ? mx(l).test(e.data) || (o = this._getOrReturnCtx(e, o),
                Y(o, {
                    code: Q.invalid_string,
                    validation: "datetime",
                    message: l.message
                }),
                i.dirty()) : l.kind === "date" ? aE.test(e.data) || (o = this._getOrReturnCtx(e, o),
                Y(o, {
                    code: Q.invalid_string,
                    validation: "date",
                    message: l.message
                }),
                i.dirty()) : l.kind === "time" ? lE(l).test(e.data) || (o = this._getOrReturnCtx(e, o),
                Y(o, {
                    code: Q.invalid_string,
                    validation: "time",
                    message: l.message
                }),
                i.dirty()) : l.kind === "duration" ? Y_.test(e.data) || (o = this._getOrReturnCtx(e, o),
                Y(o, {
                    validation: "duration",
                    code: Q.invalid_string,
                    message: l.message
                }),
                i.dirty()) : l.kind === "ip" ? uE(e.data, l.version) || (o = this._getOrReturnCtx(e, o),
                Y(o, {
                    validation: "ip",
                    code: Q.invalid_string,
                    message: l.message
                }),
                i.dirty()) : l.kind === "jwt" ? cE(e.data, l.alg) || (o = this._getOrReturnCtx(e, o),
                Y(o, {
                    validation: "jwt",
                    code: Q.invalid_string,
                    message: l.message
                }),
                i.dirty()) : l.kind === "cidr" ? dE(e.data, l.version) || (o = this._getOrReturnCtx(e, o),
                Y(o, {
                    validation: "cidr",
                    code: Q.invalid_string,
                    message: l.message
                }),
                i.dirty()) : l.kind === "base64" ? iE.test(e.data) || (o = this._getOrReturnCtx(e, o),
                Y(o, {
                    validation: "base64",
                    code: Q.invalid_string,
                    message: l.message
                }),
                i.dirty()) : l.kind === "base64url" ? oE.test(e.data) || (o = this._getOrReturnCtx(e, o),
                Y(o, {
                    validation: "base64url",
                    code: Q.invalid_string,
                    message: l.message
                }),
                i.dirty()) : Ae.assertNever(l);
        return {
            status: i.value,
            value: e.data
        }
    }
    _regex(e, n, i) {
        return this.refinement(o=>e.test(o), {
            validation: n,
            code: Q.invalid_string,
            ...ae.errToObj(i)
        })
    }
    _addCheck(e) {
        return new hn({
            ...this._def,
            checks: [...this._def.checks, e]
        })
    }
    email(e) {
        return this._addCheck({
            kind: "email",
            ...ae.errToObj(e)
        })
    }
    url(e) {
        return this._addCheck({
            kind: "url",
            ...ae.errToObj(e)
        })
    }
    emoji(e) {
        return this._addCheck({
            kind: "emoji",
            ...ae.errToObj(e)
        })
    }
    uuid(e) {
        return this._addCheck({
            kind: "uuid",
            ...ae.errToObj(e)
        })
    }
    nanoid(e) {
        return this._addCheck({
            kind: "nanoid",
            ...ae.errToObj(e)
        })
    }
    cuid(e) {
        return this._addCheck({
            kind: "cuid",
            ...ae.errToObj(e)
        })
    }
    cuid2(e) {
        return this._addCheck({
            kind: "cuid2",
            ...ae.errToObj(e)
        })
    }
    ulid(e) {
        return this._addCheck({
            kind: "ulid",
            ...ae.errToObj(e)
        })
    }
    base64(e) {
        return this._addCheck({
            kind: "base64",
            ...ae.errToObj(e)
        })
    }
    base64url(e) {
        return this._addCheck({
            kind: "base64url",
            ...ae.errToObj(e)
        })
    }
    jwt(e) {
        return this._addCheck({
            kind: "jwt",
            ...ae.errToObj(e)
        })
    }
    ip(e) {
        return this._addCheck({
            kind: "ip",
            ...ae.errToObj(e)
        })
    }
    cidr(e) {
        return this._addCheck({
            kind: "cidr",
            ...ae.errToObj(e)
        })
    }
    datetime(e) {
        var n, i;
        return typeof e == "string" ? this._addCheck({
            kind: "datetime",
            precision: null,
            offset: !1,
            local: !1,
            message: e
        }) : this._addCheck({
            kind: "datetime",
            precision: typeof e?.precision > "u" ? null : e?.precision,
            offset: (n = e?.offset) !== null && n !== void 0 ? n : !1,
            local: (i = e?.local) !== null && i !== void 0 ? i : !1,
            ...ae.errToObj(e?.message)
        })
    }
    date(e) {
        return this._addCheck({
            kind: "date",
            message: e
        })
    }
    time(e) {
        return typeof e == "string" ? this._addCheck({
            kind: "time",
            precision: null,
            message: e
        }) : this._addCheck({
            kind: "time",
            precision: typeof e?.precision > "u" ? null : e?.precision,
            ...ae.errToObj(e?.message)
        })
    }
    duration(e) {
        return this._addCheck({
            kind: "duration",
            ...ae.errToObj(e)
        })
    }
    regex(e, n) {
        return this._addCheck({
            kind: "regex",
            regex: e,
            ...ae.errToObj(n)
        })
    }
    includes(e, n) {
        return this._addCheck({
            kind: "includes",
            value: e,
            position: n?.position,
            ...ae.errToObj(n?.message)
        })
    }
    startsWith(e, n) {
        return this._addCheck({
            kind: "startsWith",
            value: e,
            ...ae.errToObj(n)
        })
    }
    endsWith(e, n) {
        return this._addCheck({
            kind: "endsWith",
            value: e,
            ...ae.errToObj(n)
        })
    }
    min(e, n) {
        return this._addCheck({
            kind: "min",
            value: e,
            ...ae.errToObj(n)
        })
    }
    max(e, n) {
        return this._addCheck({
            kind: "max",
            value: e,
            ...ae.errToObj(n)
        })
    }
    length(e, n) {
        return this._addCheck({
            kind: "length",
            value: e,
            ...ae.errToObj(n)
        })
    }
    nonempty(e) {
        return this.min(1, ae.errToObj(e))
    }
    trim() {
        return new hn({
            ...this._def,
            checks: [...this._def.checks, {
                kind: "trim"
            }]
        })
    }
    toLowerCase() {
        return new hn({
            ...this._def,
            checks: [...this._def.checks, {
                kind: "toLowerCase"
            }]
        })
    }
    toUpperCase() {
        return new hn({
            ...this._def,
            checks: [...this._def.checks, {
                kind: "toUpperCase"
            }]
        })
    }
    get isDatetime() {
        return !!this._def.checks.find(e=>e.kind === "datetime")
    }
    get isDate() {
        return !!this._def.checks.find(e=>e.kind === "date")
    }
    get isTime() {
        return !!this._def.checks.find(e=>e.kind === "time")
    }
    get isDuration() {
        return !!this._def.checks.find(e=>e.kind === "duration")
    }
    get isEmail() {
        return !!this._def.checks.find(e=>e.kind === "email")
    }
    get isURL() {
        return !!this._def.checks.find(e=>e.kind === "url")
    }
    get isEmoji() {
        return !!this._def.checks.find(e=>e.kind === "emoji")
    }
    get isUUID() {
        return !!this._def.checks.find(e=>e.kind === "uuid")
    }
    get isNANOID() {
        return !!this._def.checks.find(e=>e.kind === "nanoid")
    }
    get isCUID() {
        return !!this._def.checks.find(e=>e.kind === "cuid")
    }
    get isCUID2() {
        return !!this._def.checks.find(e=>e.kind === "cuid2")
    }
    get isULID() {
        return !!this._def.checks.find(e=>e.kind === "ulid")
    }
    get isIP() {
        return !!this._def.checks.find(e=>e.kind === "ip")
    }
    get isCIDR() {
        return !!this._def.checks.find(e=>e.kind === "cidr")
    }
    get isBase64() {
        return !!this._def.checks.find(e=>e.kind === "base64")
    }
    get isBase64url() {
        return !!this._def.checks.find(e=>e.kind === "base64url")
    }
    get minLength() {
        let e = null;
        for (const n of this._def.checks)
            n.kind === "min" && (e === null || n.value > e) && (e = n.value);
        return e
    }
    get maxLength() {
        let e = null;
        for (const n of this._def.checks)
            n.kind === "max" && (e === null || n.value < e) && (e = n.value);
        return e
    }
}
hn.create = t=>{
    var e;
    return new hn({
        checks: [],
        typeName: pe.ZodString,
        coerce: (e = t?.coerce) !== null && e !== void 0 ? e : !1,
        ...we(t)
    })
}
;
function fE(t, e) {
    const n = (t.toString().split(".")[1] || "").length
      , i = (e.toString().split(".")[1] || "").length
      , o = n > i ? n : i
      , l = parseInt(t.toFixed(o).replace(".", ""))
      , c = parseInt(e.toFixed(o).replace(".", ""));
    return l % c / Math.pow(10, o)
}
class Tr extends be {
    constructor() {
        super(...arguments),
        this.min = this.gte,
        this.max = this.lte,
        this.step = this.multipleOf
    }
    _parse(e) {
        if (this._def.coerce && (e.data = Number(e.data)),
        this._getType(e) !== ee.number) {
            const l = this._getOrReturnCtx(e);
            return Y(l, {
                code: Q.invalid_type,
                expected: ee.number,
                received: l.parsedType
            }),
            me
        }
        let i;
        const o = new Pt;
        for (const l of this._def.checks)
            l.kind === "int" ? Ae.isInteger(e.data) || (i = this._getOrReturnCtx(e, i),
            Y(i, {
                code: Q.invalid_type,
                expected: "integer",
                received: "float",
                message: l.message
            }),
            o.dirty()) : l.kind === "min" ? (l.inclusive ? e.data < l.value : e.data <= l.value) && (i = this._getOrReturnCtx(e, i),
            Y(i, {
                code: Q.too_small,
                minimum: l.value,
                type: "number",
                inclusive: l.inclusive,
                exact: !1,
                message: l.message
            }),
            o.dirty()) : l.kind === "max" ? (l.inclusive ? e.data > l.value : e.data >= l.value) && (i = this._getOrReturnCtx(e, i),
            Y(i, {
                code: Q.too_big,
                maximum: l.value,
                type: "number",
                inclusive: l.inclusive,
                exact: !1,
                message: l.message
            }),
            o.dirty()) : l.kind === "multipleOf" ? fE(e.data, l.value) !== 0 && (i = this._getOrReturnCtx(e, i),
            Y(i, {
                code: Q.not_multiple_of,
                multipleOf: l.value,
                message: l.message
            }),
            o.dirty()) : l.kind === "finite" ? Number.isFinite(e.data) || (i = this._getOrReturnCtx(e, i),
            Y(i, {
                code: Q.not_finite,
                message: l.message
            }),
            o.dirty()) : Ae.assertNever(l);
        return {
            status: o.value,
            value: e.data
        }
    }
    gte(e, n) {
        return this.setLimit("min", e, !0, ae.toString(n))
    }
    gt(e, n) {
        return this.setLimit("min", e, !1, ae.toString(n))
    }
    lte(e, n) {
        return this.setLimit("max", e, !0, ae.toString(n))
    }
    lt(e, n) {
        return this.setLimit("max", e, !1, ae.toString(n))
    }
    setLimit(e, n, i, o) {
        return new Tr({
            ...this._def,
            checks: [...this._def.checks, {
                kind: e,
                value: n,
                inclusive: i,
                message: ae.toString(o)
            }]
        })
    }
    _addCheck(e) {
        return new Tr({
            ...this._def,
            checks: [...this._def.checks, e]
        })
    }
    int(e) {
        return this._addCheck({
            kind: "int",
            message: ae.toString(e)
        })
    }
    positive(e) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: !1,
            message: ae.toString(e)
        })
    }
    negative(e) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: !1,
            message: ae.toString(e)
        })
    }
    nonpositive(e) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: !0,
            message: ae.toString(e)
        })
    }
    nonnegative(e) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: !0,
            message: ae.toString(e)
        })
    }
    multipleOf(e, n) {
        return this._addCheck({
            kind: "multipleOf",
            value: e,
            message: ae.toString(n)
        })
    }
    finite(e) {
        return this._addCheck({
            kind: "finite",
            message: ae.toString(e)
        })
    }
    safe(e) {
        return this._addCheck({
            kind: "min",
            inclusive: !0,
            value: Number.MIN_SAFE_INTEGER,
            message: ae.toString(e)
        })._addCheck({
            kind: "max",
            inclusive: !0,
            value: Number.MAX_SAFE_INTEGER,
            message: ae.toString(e)
        })
    }
    get minValue() {
        let e = null;
        for (const n of this._def.checks)
            n.kind === "min" && (e === null || n.value > e) && (e = n.value);
        return e
    }
    get maxValue() {
        let e = null;
        for (const n of this._def.checks)
            n.kind === "max" && (e === null || n.value < e) && (e = n.value);
        return e
    }
    get isInt() {
        return !!this._def.checks.find(e=>e.kind === "int" || e.kind === "multipleOf" && Ae.isInteger(e.value))
    }
    get isFinite() {
        let e = null
          , n = null;
        for (const i of this._def.checks) {
            if (i.kind === "finite" || i.kind === "int" || i.kind === "multipleOf")
                return !0;
            i.kind === "min" ? (n === null || i.value > n) && (n = i.value) : i.kind === "max" && (e === null || i.value < e) && (e = i.value)
        }
        return Number.isFinite(n) && Number.isFinite(e)
    }
}
Tr.create = t=>new Tr({
    checks: [],
    typeName: pe.ZodNumber,
    coerce: t?.coerce || !1,
    ...we(t)
});
class br extends be {
    constructor() {
        super(...arguments),
        this.min = this.gte,
        this.max = this.lte
    }
    _parse(e) {
        if (this._def.coerce)
            try {
                e.data = BigInt(e.data)
            } catch {
                return this._getInvalidInput(e)
            }
        if (this._getType(e) !== ee.bigint)
            return this._getInvalidInput(e);
        let i;
        const o = new Pt;
        for (const l of this._def.checks)
            l.kind === "min" ? (l.inclusive ? e.data < l.value : e.data <= l.value) && (i = this._getOrReturnCtx(e, i),
            Y(i, {
                code: Q.too_small,
                type: "bigint",
                minimum: l.value,
                inclusive: l.inclusive,
                message: l.message
            }),
            o.dirty()) : l.kind === "max" ? (l.inclusive ? e.data > l.value : e.data >= l.value) && (i = this._getOrReturnCtx(e, i),
            Y(i, {
                code: Q.too_big,
                type: "bigint",
                maximum: l.value,
                inclusive: l.inclusive,
                message: l.message
            }),
            o.dirty()) : l.kind === "multipleOf" ? e.data % l.value !== BigInt(0) && (i = this._getOrReturnCtx(e, i),
            Y(i, {
                code: Q.not_multiple_of,
                multipleOf: l.value,
                message: l.message
            }),
            o.dirty()) : Ae.assertNever(l);
        return {
            status: o.value,
            value: e.data
        }
    }
    _getInvalidInput(e) {
        const n = this._getOrReturnCtx(e);
        return Y(n, {
            code: Q.invalid_type,
            expected: ee.bigint,
            received: n.parsedType
        }),
        me
    }
    gte(e, n) {
        return this.setLimit("min", e, !0, ae.toString(n))
    }
    gt(e, n) {
        return this.setLimit("min", e, !1, ae.toString(n))
    }
    lte(e, n) {
        return this.setLimit("max", e, !0, ae.toString(n))
    }
    lt(e, n) {
        return this.setLimit("max", e, !1, ae.toString(n))
    }
    setLimit(e, n, i, o) {
        return new br({
            ...this._def,
            checks: [...this._def.checks, {
                kind: e,
                value: n,
                inclusive: i,
                message: ae.toString(o)
            }]
        })
    }
    _addCheck(e) {
        return new br({
            ...this._def,
            checks: [...this._def.checks, e]
        })
    }
    positive(e) {
        return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: !1,
            message: ae.toString(e)
        })
    }
    negative(e) {
        return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: !1,
            message: ae.toString(e)
        })
    }
    nonpositive(e) {
        return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: !0,
            message: ae.toString(e)
        })
    }
    nonnegative(e) {
        return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: !0,
            message: ae.toString(e)
        })
    }
    multipleOf(e, n) {
        return this._addCheck({
            kind: "multipleOf",
            value: e,
            message: ae.toString(n)
        })
    }
    get minValue() {
        let e = null;
        for (const n of this._def.checks)
            n.kind === "min" && (e === null || n.value > e) && (e = n.value);
        return e
    }
    get maxValue() {
        let e = null;
        for (const n of this._def.checks)
            n.kind === "max" && (e === null || n.value < e) && (e = n.value);
        return e
    }
}
br.create = t=>{
    var e;
    return new br({
        checks: [],
        typeName: pe.ZodBigInt,
        coerce: (e = t?.coerce) !== null && e !== void 0 ? e : !1,
        ...we(t)
    })
}
;
class lo extends be {
    _parse(e) {
        if (this._def.coerce && (e.data = !!e.data),
        this._getType(e) !== ee.boolean) {
            const i = this._getOrReturnCtx(e);
            return Y(i, {
                code: Q.invalid_type,
                expected: ee.boolean,
                received: i.parsedType
            }),
            me
        }
        return _t(e.data)
    }
}
lo.create = t=>new lo({
    typeName: pe.ZodBoolean,
    coerce: t?.coerce || !1,
    ...we(t)
});
class es extends be {
    _parse(e) {
        if (this._def.coerce && (e.data = new Date(e.data)),
        this._getType(e) !== ee.date) {
            const l = this._getOrReturnCtx(e);
            return Y(l, {
                code: Q.invalid_type,
                expected: ee.date,
                received: l.parsedType
            }),
            me
        }
        if (isNaN(e.data.getTime())) {
            const l = this._getOrReturnCtx(e);
            return Y(l, {
                code: Q.invalid_date
            }),
            me
        }
        const i = new Pt;
        let o;
        for (const l of this._def.checks)
            l.kind === "min" ? e.data.getTime() < l.value && (o = this._getOrReturnCtx(e, o),
            Y(o, {
                code: Q.too_small,
                message: l.message,
                inclusive: !0,
                exact: !1,
                minimum: l.value,
                type: "date"
            }),
            i.dirty()) : l.kind === "max" ? e.data.getTime() > l.value && (o = this._getOrReturnCtx(e, o),
            Y(o, {
                code: Q.too_big,
                message: l.message,
                inclusive: !0,
                exact: !1,
                maximum: l.value,
                type: "date"
            }),
            i.dirty()) : Ae.assertNever(l);
        return {
            status: i.value,
            value: new Date(e.data.getTime())
        }
    }
    _addCheck(e) {
        return new es({
            ...this._def,
            checks: [...this._def.checks, e]
        })
    }
    min(e, n) {
        return this._addCheck({
            kind: "min",
            value: e.getTime(),
            message: ae.toString(n)
        })
    }
    max(e, n) {
        return this._addCheck({
            kind: "max",
            value: e.getTime(),
            message: ae.toString(n)
        })
    }
    get minDate() {
        let e = null;
        for (const n of this._def.checks)
            n.kind === "min" && (e === null || n.value > e) && (e = n.value);
        return e != null ? new Date(e) : null
    }
    get maxDate() {
        let e = null;
        for (const n of this._def.checks)
            n.kind === "max" && (e === null || n.value < e) && (e = n.value);
        return e != null ? new Date(e) : null
    }
}
es.create = t=>new es({
    checks: [],
    coerce: t?.coerce || !1,
    typeName: pe.ZodDate,
    ...we(t)
});
class gl extends be {
    _parse(e) {
        if (this._getType(e) !== ee.symbol) {
            const i = this._getOrReturnCtx(e);
            return Y(i, {
                code: Q.invalid_type,
                expected: ee.symbol,
                received: i.parsedType
            }),
            me
        }
        return _t(e.data)
    }
}
gl.create = t=>new gl({
    typeName: pe.ZodSymbol,
    ...we(t)
});
class uo extends be {
    _parse(e) {
        if (this._getType(e) !== ee.undefined) {
            const i = this._getOrReturnCtx(e);
            return Y(i, {
                code: Q.invalid_type,
                expected: ee.undefined,
                received: i.parsedType
            }),
            me
        }
        return _t(e.data)
    }
}
uo.create = t=>new uo({
    typeName: pe.ZodUndefined,
    ...we(t)
});
class co extends be {
    _parse(e) {
        if (this._getType(e) !== ee.null) {
            const i = this._getOrReturnCtx(e);
            return Y(i, {
                code: Q.invalid_type,
                expected: ee.null,
                received: i.parsedType
            }),
            me
        }
        return _t(e.data)
    }
}
co.create = t=>new co({
    typeName: pe.ZodNull,
    ...we(t)
});
class Hs extends be {
    constructor() {
        super(...arguments),
        this._any = !0
    }
    _parse(e) {
        return _t(e.data)
    }
}
Hs.create = t=>new Hs({
    typeName: pe.ZodAny,
    ...we(t)
});
class Kr extends be {
    constructor() {
        super(...arguments),
        this._unknown = !0
    }
    _parse(e) {
        return _t(e.data)
    }
}
Kr.create = t=>new Kr({
    typeName: pe.ZodUnknown,
    ...we(t)
});
class Zn extends be {
    _parse(e) {
        const n = this._getOrReturnCtx(e);
        return Y(n, {
            code: Q.invalid_type,
            expected: ee.never,
            received: n.parsedType
        }),
        me
    }
}
Zn.create = t=>new Zn({
    typeName: pe.ZodNever,
    ...we(t)
});
class yl extends be {
    _parse(e) {
        if (this._getType(e) !== ee.undefined) {
            const i = this._getOrReturnCtx(e);
            return Y(i, {
                code: Q.invalid_type,
                expected: ee.void,
                received: i.parsedType
            }),
            me
        }
        return _t(e.data)
    }
}
yl.create = t=>new yl({
    typeName: pe.ZodVoid,
    ...we(t)
});
class pn extends be {
    _parse(e) {
        const {ctx: n, status: i} = this._processInputParams(e)
          , o = this._def;
        if (n.parsedType !== ee.array)
            return Y(n, {
                code: Q.invalid_type,
                expected: ee.array,
                received: n.parsedType
            }),
            me;
        if (o.exactLength !== null) {
            const c = n.data.length > o.exactLength.value
              , d = n.data.length < o.exactLength.value;
            (c || d) && (Y(n, {
                code: c ? Q.too_big : Q.too_small,
                minimum: d ? o.exactLength.value : void 0,
                maximum: c ? o.exactLength.value : void 0,
                type: "array",
                inclusive: !0,
                exact: !0,
                message: o.exactLength.message
            }),
            i.dirty())
        }
        if (o.minLength !== null && n.data.length < o.minLength.value && (Y(n, {
            code: Q.too_small,
            minimum: o.minLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: o.minLength.message
        }),
        i.dirty()),
        o.maxLength !== null && n.data.length > o.maxLength.value && (Y(n, {
            code: Q.too_big,
            maximum: o.maxLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: o.maxLength.message
        }),
        i.dirty()),
        n.common.async)
            return Promise.all([...n.data].map((c,d)=>o.type._parseAsync(new Rn(n,c,n.path,d)))).then(c=>Pt.mergeArray(i, c));
        const l = [...n.data].map((c,d)=>o.type._parseSync(new Rn(n,c,n.path,d)));
        return Pt.mergeArray(i, l)
    }
    get element() {
        return this._def.type
    }
    min(e, n) {
        return new pn({
            ...this._def,
            minLength: {
                value: e,
                message: ae.toString(n)
            }
        })
    }
    max(e, n) {
        return new pn({
            ...this._def,
            maxLength: {
                value: e,
                message: ae.toString(n)
            }
        })
    }
    length(e, n) {
        return new pn({
            ...this._def,
            exactLength: {
                value: e,
                message: ae.toString(n)
            }
        })
    }
    nonempty(e) {
        return this.min(1, e)
    }
}
pn.create = (t,e)=>new pn({
    type: t,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: pe.ZodArray,
    ...we(e)
});
function As(t) {
    if (t instanceof Ke) {
        const e = {};
        for (const n in t.shape) {
            const i = t.shape[n];
            e[n] = Cn.create(As(i))
        }
        return new Ke({
            ...t._def,
            shape: ()=>e
        })
    } else
        return t instanceof pn ? new pn({
            ...t._def,
            type: As(t.element)
        }) : t instanceof Cn ? Cn.create(As(t.unwrap())) : t instanceof _r ? _r.create(As(t.unwrap())) : t instanceof Nn ? Nn.create(t.items.map(e=>As(e))) : t
}
class Ke extends be {
    constructor() {
        super(...arguments),
        this._cached = null,
        this.nonstrict = this.passthrough,
        this.augment = this.extend
    }
    _getCached() {
        if (this._cached !== null)
            return this._cached;
        const e = this._def.shape()
          , n = Ae.objectKeys(e);
        return this._cached = {
            shape: e,
            keys: n
        }
    }
    _parse(e) {
        if (this._getType(e) !== ee.object) {
            const p = this._getOrReturnCtx(e);
            return Y(p, {
                code: Q.invalid_type,
                expected: ee.object,
                received: p.parsedType
            }),
            me
        }
        const {status: i, ctx: o} = this._processInputParams(e)
          , {shape: l, keys: c} = this._getCached()
          , d = [];
        if (!(this._def.catchall instanceof Zn && this._def.unknownKeys === "strip"))
            for (const p in o.data)
                c.includes(p) || d.push(p);
        const h = [];
        for (const p of c) {
            const m = l[p]
              , y = o.data[p];
            h.push({
                key: {
                    status: "valid",
                    value: p
                },
                value: m._parse(new Rn(o,y,o.path,p)),
                alwaysSet: p in o.data
            })
        }
        if (this._def.catchall instanceof Zn) {
            const p = this._def.unknownKeys;
            if (p === "passthrough")
                for (const m of d)
                    h.push({
                        key: {
                            status: "valid",
                            value: m
                        },
                        value: {
                            status: "valid",
                            value: o.data[m]
                        }
                    });
            else if (p === "strict")
                d.length > 0 && (Y(o, {
                    code: Q.unrecognized_keys,
                    keys: d
                }),
                i.dirty());
            else if (p !== "strip")
                throw new Error("Internal ZodObject error: invalid unknownKeys value.")
        } else {
            const p = this._def.catchall;
            for (const m of d) {
                const y = o.data[m];
                h.push({
                    key: {
                        status: "valid",
                        value: m
                    },
                    value: p._parse(new Rn(o,y,o.path,m)),
                    alwaysSet: m in o.data
                })
            }
        }
        return o.common.async ? Promise.resolve().then(async()=>{
            const p = [];
            for (const m of h) {
                const y = await m.key
                  , v = await m.value;
                p.push({
                    key: y,
                    value: v,
                    alwaysSet: m.alwaysSet
                })
            }
            return p
        }
        ).then(p=>Pt.mergeObjectSync(i, p)) : Pt.mergeObjectSync(i, h)
    }
    get shape() {
        return this._def.shape()
    }
    strict(e) {
        return ae.errToObj,
        new Ke({
            ...this._def,
            unknownKeys: "strict",
            ...e !== void 0 ? {
                errorMap: (n,i)=>{
                    var o, l, c, d;
                    const h = (c = (l = (o = this._def).errorMap) === null || l === void 0 ? void 0 : l.call(o, n, i).message) !== null && c !== void 0 ? c : i.defaultError;
                    return n.code === "unrecognized_keys" ? {
                        message: (d = ae.errToObj(e).message) !== null && d !== void 0 ? d : h
                    } : {
                        message: h
                    }
                }
            } : {}
        })
    }
    strip() {
        return new Ke({
            ...this._def,
            unknownKeys: "strip"
        })
    }
    passthrough() {
        return new Ke({
            ...this._def,
            unknownKeys: "passthrough"
        })
    }
    extend(e) {
        return new Ke({
            ...this._def,
            shape: ()=>({
                ...this._def.shape(),
                ...e
            })
        })
    }
    merge(e) {
        return new Ke({
            unknownKeys: e._def.unknownKeys,
            catchall: e._def.catchall,
            shape: ()=>({
                ...this._def.shape(),
                ...e._def.shape()
            }),
            typeName: pe.ZodObject
        })
    }
    setKey(e, n) {
        return this.augment({
            [e]: n
        })
    }
    catchall(e) {
        return new Ke({
            ...this._def,
            catchall: e
        })
    }
    pick(e) {
        const n = {};
        return Ae.objectKeys(e).forEach(i=>{
            e[i] && this.shape[i] && (n[i] = this.shape[i])
        }
        ),
        new Ke({
            ...this._def,
            shape: ()=>n
        })
    }
    omit(e) {
        const n = {};
        return Ae.objectKeys(this.shape).forEach(i=>{
            e[i] || (n[i] = this.shape[i])
        }
        ),
        new Ke({
            ...this._def,
            shape: ()=>n
        })
    }
    deepPartial() {
        return As(this)
    }
    partial(e) {
        const n = {};
        return Ae.objectKeys(this.shape).forEach(i=>{
            const o = this.shape[i];
            e && !e[i] ? n[i] = o : n[i] = o.optional()
        }
        ),
        new Ke({
            ...this._def,
            shape: ()=>n
        })
    }
    required(e) {
        const n = {};
        return Ae.objectKeys(this.shape).forEach(i=>{
            if (e && !e[i])
                n[i] = this.shape[i];
            else {
                let l = this.shape[i];
                for (; l instanceof Cn; )
                    l = l._def.innerType;
                n[i] = l
            }
        }
        ),
        new Ke({
            ...this._def,
            shape: ()=>n
        })
    }
    keyof() {
        return gx(Ae.objectKeys(this.shape))
    }
}
Ke.create = (t,e)=>new Ke({
    shape: ()=>t,
    unknownKeys: "strip",
    catchall: Zn.create(),
    typeName: pe.ZodObject,
    ...we(e)
});
Ke.strictCreate = (t,e)=>new Ke({
    shape: ()=>t,
    unknownKeys: "strict",
    catchall: Zn.create(),
    typeName: pe.ZodObject,
    ...we(e)
});
Ke.lazycreate = (t,e)=>new Ke({
    shape: t,
    unknownKeys: "strip",
    catchall: Zn.create(),
    typeName: pe.ZodObject,
    ...we(e)
});
class fo extends be {
    _parse(e) {
        const {ctx: n} = this._processInputParams(e)
          , i = this._def.options;
        function o(l) {
            for (const d of l)
                if (d.result.status === "valid")
                    return d.result;
            for (const d of l)
                if (d.result.status === "dirty")
                    return n.common.issues.push(...d.ctx.common.issues),
                    d.result;
            const c = l.map(d=>new $t(d.ctx.common.issues));
            return Y(n, {
                code: Q.invalid_union,
                unionErrors: c
            }),
            me
        }
        if (n.common.async)
            return Promise.all(i.map(async l=>{
                const c = {
                    ...n,
                    common: {
                        ...n.common,
                        issues: []
                    },
                    parent: null
                };
                return {
                    result: await l._parseAsync({
                        data: n.data,
                        path: n.path,
                        parent: c
                    }),
                    ctx: c
                }
            }
            )).then(o);
        {
            let l;
            const c = [];
            for (const h of i) {
                const p = {
                    ...n,
                    common: {
                        ...n.common,
                        issues: []
                    },
                    parent: null
                }
                  , m = h._parseSync({
                    data: n.data,
                    path: n.path,
                    parent: p
                });
                if (m.status === "valid")
                    return m;
                m.status === "dirty" && !l && (l = {
                    result: m,
                    ctx: p
                }),
                p.common.issues.length && c.push(p.common.issues)
            }
            if (l)
                return n.common.issues.push(...l.ctx.common.issues),
                l.result;
            const d = c.map(h=>new $t(h));
            return Y(n, {
                code: Q.invalid_union,
                unionErrors: d
            }),
            me
        }
    }
    get options() {
        return this._def.options
    }
}
fo.create = (t,e)=>new fo({
    options: t,
    typeName: pe.ZodUnion,
    ...we(e)
});
const $n = t=>t instanceof mo ? $n(t.schema) : t instanceof vn ? $n(t.innerType()) : t instanceof go ? [t.value] : t instanceof Cr ? t.options : t instanceof yo ? Ae.objectValues(t.enum) : t instanceof vo ? $n(t._def.innerType) : t instanceof uo ? [void 0] : t instanceof co ? [null] : t instanceof Cn ? [void 0, ...$n(t.unwrap())] : t instanceof _r ? [null, ...$n(t.unwrap())] : t instanceof Mf || t instanceof wo ? $n(t.unwrap()) : t instanceof xo ? $n(t._def.innerType) : [];
class Bl extends be {
    _parse(e) {
        const {ctx: n} = this._processInputParams(e);
        if (n.parsedType !== ee.object)
            return Y(n, {
                code: Q.invalid_type,
                expected: ee.object,
                received: n.parsedType
            }),
            me;
        const i = this.discriminator
          , o = n.data[i]
          , l = this.optionsMap.get(o);
        return l ? n.common.async ? l._parseAsync({
            data: n.data,
            path: n.path,
            parent: n
        }) : l._parseSync({
            data: n.data,
            path: n.path,
            parent: n
        }) : (Y(n, {
            code: Q.invalid_union_discriminator,
            options: Array.from(this.optionsMap.keys()),
            path: [i]
        }),
        me)
    }
    get discriminator() {
        return this._def.discriminator
    }
    get options() {
        return this._def.options
    }
    get optionsMap() {
        return this._def.optionsMap
    }
    static create(e, n, i) {
        const o = new Map;
        for (const l of n) {
            const c = $n(l.shape[e]);
            if (!c.length)
                throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
            for (const d of c) {
                if (o.has(d))
                    throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(d)}`);
                o.set(d, l)
            }
        }
        return new Bl({
            typeName: pe.ZodDiscriminatedUnion,
            discriminator: e,
            options: n,
            optionsMap: o,
            ...we(i)
        })
    }
}
function zd(t, e) {
    const n = Wn(t)
      , i = Wn(e);
    if (t === e)
        return {
            valid: !0,
            data: t
        };
    if (n === ee.object && i === ee.object) {
        const o = Ae.objectKeys(e)
          , l = Ae.objectKeys(t).filter(d=>o.indexOf(d) !== -1)
          , c = {
            ...t,
            ...e
        };
        for (const d of l) {
            const h = zd(t[d], e[d]);
            if (!h.valid)
                return {
                    valid: !1
                };
            c[d] = h.data
        }
        return {
            valid: !0,
            data: c
        }
    } else if (n === ee.array && i === ee.array) {
        if (t.length !== e.length)
            return {
                valid: !1
            };
        const o = [];
        for (let l = 0; l < t.length; l++) {
            const c = t[l]
              , d = e[l]
              , h = zd(c, d);
            if (!h.valid)
                return {
                    valid: !1
                };
            o.push(h.data)
        }
        return {
            valid: !0,
            data: o
        }
    } else
        return n === ee.date && i === ee.date && +t == +e ? {
            valid: !0,
            data: t
        } : {
            valid: !1
        }
}
class ho extends be {
    _parse(e) {
        const {status: n, ctx: i} = this._processInputParams(e)
          , o = (l,c)=>{
            if (Fd(l) || Fd(c))
                return me;
            const d = zd(l.value, c.value);
            return d.valid ? ((Vd(l) || Vd(c)) && n.dirty(),
            {
                status: n.value,
                value: d.data
            }) : (Y(i, {
                code: Q.invalid_intersection_types
            }),
            me)
        }
        ;
        return i.common.async ? Promise.all([this._def.left._parseAsync({
            data: i.data,
            path: i.path,
            parent: i
        }), this._def.right._parseAsync({
            data: i.data,
            path: i.path,
            parent: i
        })]).then(([l,c])=>o(l, c)) : o(this._def.left._parseSync({
            data: i.data,
            path: i.path,
            parent: i
        }), this._def.right._parseSync({
            data: i.data,
            path: i.path,
            parent: i
        }))
    }
}
ho.create = (t,e,n)=>new ho({
    left: t,
    right: e,
    typeName: pe.ZodIntersection,
    ...we(n)
});
class Nn extends be {
    _parse(e) {
        const {status: n, ctx: i} = this._processInputParams(e);
        if (i.parsedType !== ee.array)
            return Y(i, {
                code: Q.invalid_type,
                expected: ee.array,
                received: i.parsedType
            }),
            me;
        if (i.data.length < this._def.items.length)
            return Y(i, {
                code: Q.too_small,
                minimum: this._def.items.length,
                inclusive: !0,
                exact: !1,
                type: "array"
            }),
            me;
        !this._def.rest && i.data.length > this._def.items.length && (Y(i, {
            code: Q.too_big,
            maximum: this._def.items.length,
            inclusive: !0,
            exact: !1,
            type: "array"
        }),
        n.dirty());
        const l = [...i.data].map((c,d)=>{
            const h = this._def.items[d] || this._def.rest;
            return h ? h._parse(new Rn(i,c,i.path,d)) : null
        }
        ).filter(c=>!!c);
        return i.common.async ? Promise.all(l).then(c=>Pt.mergeArray(n, c)) : Pt.mergeArray(n, l)
    }
    get items() {
        return this._def.items
    }
    rest(e) {
        return new Nn({
            ...this._def,
            rest: e
        })
    }
}
Nn.create = (t,e)=>{
    if (!Array.isArray(t))
        throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
    return new Nn({
        items: t,
        typeName: pe.ZodTuple,
        rest: null,
        ...we(e)
    })
}
;
class po extends be {
    get keySchema() {
        return this._def.keyType
    }
    get valueSchema() {
        return this._def.valueType
    }
    _parse(e) {
        const {status: n, ctx: i} = this._processInputParams(e);
        if (i.parsedType !== ee.object)
            return Y(i, {
                code: Q.invalid_type,
                expected: ee.object,
                received: i.parsedType
            }),
            me;
        const o = []
          , l = this._def.keyType
          , c = this._def.valueType;
        for (const d in i.data)
            o.push({
                key: l._parse(new Rn(i,d,i.path,d)),
                value: c._parse(new Rn(i,i.data[d],i.path,d)),
                alwaysSet: d in i.data
            });
        return i.common.async ? Pt.mergeObjectAsync(n, o) : Pt.mergeObjectSync(n, o)
    }
    get element() {
        return this._def.valueType
    }
    static create(e, n, i) {
        return n instanceof be ? new po({
            keyType: e,
            valueType: n,
            typeName: pe.ZodRecord,
            ...we(i)
        }) : new po({
            keyType: hn.create(),
            valueType: e,
            typeName: pe.ZodRecord,
            ...we(n)
        })
    }
}
class vl extends be {
    get keySchema() {
        return this._def.keyType
    }
    get valueSchema() {
        return this._def.valueType
    }
    _parse(e) {
        const {status: n, ctx: i} = this._processInputParams(e);
        if (i.parsedType !== ee.map)
            return Y(i, {
                code: Q.invalid_type,
                expected: ee.map,
                received: i.parsedType
            }),
            me;
        const o = this._def.keyType
          , l = this._def.valueType
          , c = [...i.data.entries()].map(([d,h],p)=>({
            key: o._parse(new Rn(i,d,i.path,[p, "key"])),
            value: l._parse(new Rn(i,h,i.path,[p, "value"]))
        }));
        if (i.common.async) {
            const d = new Map;
            return Promise.resolve().then(async()=>{
                for (const h of c) {
                    const p = await h.key
                      , m = await h.value;
                    if (p.status === "aborted" || m.status === "aborted")
                        return me;
                    (p.status === "dirty" || m.status === "dirty") && n.dirty(),
                    d.set(p.value, m.value)
                }
                return {
                    status: n.value,
                    value: d
                }
            }
            )
        } else {
            const d = new Map;
            for (const h of c) {
                const p = h.key
                  , m = h.value;
                if (p.status === "aborted" || m.status === "aborted")
                    return me;
                (p.status === "dirty" || m.status === "dirty") && n.dirty(),
                d.set(p.value, m.value)
            }
            return {
                status: n.value,
                value: d
            }
        }
    }
}
vl.create = (t,e,n)=>new vl({
    valueType: e,
    keyType: t,
    typeName: pe.ZodMap,
    ...we(n)
});
class ts extends be {
    _parse(e) {
        const {status: n, ctx: i} = this._processInputParams(e);
        if (i.parsedType !== ee.set)
            return Y(i, {
                code: Q.invalid_type,
                expected: ee.set,
                received: i.parsedType
            }),
            me;
        const o = this._def;
        o.minSize !== null && i.data.size < o.minSize.value && (Y(i, {
            code: Q.too_small,
            minimum: o.minSize.value,
            type: "set",
            inclusive: !0,
            exact: !1,
            message: o.minSize.message
        }),
        n.dirty()),
        o.maxSize !== null && i.data.size > o.maxSize.value && (Y(i, {
            code: Q.too_big,
            maximum: o.maxSize.value,
            type: "set",
            inclusive: !0,
            exact: !1,
            message: o.maxSize.message
        }),
        n.dirty());
        const l = this._def.valueType;
        function c(h) {
            const p = new Set;
            for (const m of h) {
                if (m.status === "aborted")
                    return me;
                m.status === "dirty" && n.dirty(),
                p.add(m.value)
            }
            return {
                status: n.value,
                value: p
            }
        }
        const d = [...i.data.values()].map((h,p)=>l._parse(new Rn(i,h,i.path,p)));
        return i.common.async ? Promise.all(d).then(h=>c(h)) : c(d)
    }
    min(e, n) {
        return new ts({
            ...this._def,
            minSize: {
                value: e,
                message: ae.toString(n)
            }
        })
    }
    max(e, n) {
        return new ts({
            ...this._def,
            maxSize: {
                value: e,
                message: ae.toString(n)
            }
        })
    }
    size(e, n) {
        return this.min(e, n).max(e, n)
    }
    nonempty(e) {
        return this.min(1, e)
    }
}
ts.create = (t,e)=>new ts({
    valueType: t,
    minSize: null,
    maxSize: null,
    typeName: pe.ZodSet,
    ...we(e)
});
class Vs extends be {
    constructor() {
        super(...arguments),
        this.validate = this.implement
    }
    _parse(e) {
        const {ctx: n} = this._processInputParams(e);
        if (n.parsedType !== ee.function)
            return Y(n, {
                code: Q.invalid_type,
                expected: ee.function,
                received: n.parsedType
            }),
            me;
        function i(d, h) {
            return pl({
                data: d,
                path: n.path,
                errorMaps: [n.common.contextualErrorMap, n.schemaErrorMap, hl(), Ws].filter(p=>!!p),
                issueData: {
                    code: Q.invalid_arguments,
                    argumentsError: h
                }
            })
        }
        function o(d, h) {
            return pl({
                data: d,
                path: n.path,
                errorMaps: [n.common.contextualErrorMap, n.schemaErrorMap, hl(), Ws].filter(p=>!!p),
                issueData: {
                    code: Q.invalid_return_type,
                    returnTypeError: h
                }
            })
        }
        const l = {
            errorMap: n.common.contextualErrorMap
        }
          , c = n.data;
        if (this._def.returns instanceof Qs) {
            const d = this;
            return _t(async function(...h) {
                const p = new $t([])
                  , m = await d._def.args.parseAsync(h, l).catch(w=>{
                    throw p.addIssue(i(h, w)),
                    p
                }
                )
                  , y = await Reflect.apply(c, this, m);
                return await d._def.returns._def.type.parseAsync(y, l).catch(w=>{
                    throw p.addIssue(o(y, w)),
                    p
                }
                )
            })
        } else {
            const d = this;
            return _t(function(...h) {
                const p = d._def.args.safeParse(h, l);
                if (!p.success)
                    throw new $t([i(h, p.error)]);
                const m = Reflect.apply(c, this, p.data)
                  , y = d._def.returns.safeParse(m, l);
                if (!y.success)
                    throw new $t([o(m, y.error)]);
                return y.data
            })
        }
    }
    parameters() {
        return this._def.args
    }
    returnType() {
        return this._def.returns
    }
    args(...e) {
        return new Vs({
            ...this._def,
            args: Nn.create(e).rest(Kr.create())
        })
    }
    returns(e) {
        return new Vs({
            ...this._def,
            returns: e
        })
    }
    implement(e) {
        return this.parse(e)
    }
    strictImplement(e) {
        return this.parse(e)
    }
    static create(e, n, i) {
        return new Vs({
            args: e || Nn.create([]).rest(Kr.create()),
            returns: n || Kr.create(),
            typeName: pe.ZodFunction,
            ...we(i)
        })
    }
}
class mo extends be {
    get schema() {
        return this._def.getter()
    }
    _parse(e) {
        const {ctx: n} = this._processInputParams(e);
        return this._def.getter()._parse({
            data: n.data,
            path: n.path,
            parent: n
        })
    }
}
mo.create = (t,e)=>new mo({
    getter: t,
    typeName: pe.ZodLazy,
    ...we(e)
});
class go extends be {
    _parse(e) {
        if (e.data !== this._def.value) {
            const n = this._getOrReturnCtx(e);
            return Y(n, {
                received: n.data,
                code: Q.invalid_literal,
                expected: this._def.value
            }),
            me
        }
        return {
            status: "valid",
            value: e.data
        }
    }
    get value() {
        return this._def.value
    }
}
go.create = (t,e)=>new go({
    value: t,
    typeName: pe.ZodLiteral,
    ...we(e)
});
function gx(t, e) {
    return new Cr({
        values: t,
        typeName: pe.ZodEnum,
        ...we(e)
    })
}
class Cr extends be {
    constructor() {
        super(...arguments),
        Ki.set(this, void 0)
    }
    _parse(e) {
        if (typeof e.data != "string") {
            const n = this._getOrReturnCtx(e)
              , i = this._def.values;
            return Y(n, {
                expected: Ae.joinValues(i),
                received: n.parsedType,
                code: Q.invalid_type
            }),
            me
        }
        if (ml(this, Ki) || fx(this, Ki, new Set(this._def.values)),
        !ml(this, Ki).has(e.data)) {
            const n = this._getOrReturnCtx(e)
              , i = this._def.values;
            return Y(n, {
                received: n.data,
                code: Q.invalid_enum_value,
                options: i
            }),
            me
        }
        return _t(e.data)
    }
    get options() {
        return this._def.values
    }
    get enum() {
        const e = {};
        for (const n of this._def.values)
            e[n] = n;
        return e
    }
    get Values() {
        const e = {};
        for (const n of this._def.values)
            e[n] = n;
        return e
    }
    get Enum() {
        const e = {};
        for (const n of this._def.values)
            e[n] = n;
        return e
    }
    extract(e, n=this._def) {
        return Cr.create(e, {
            ...this._def,
            ...n
        })
    }
    exclude(e, n=this._def) {
        return Cr.create(this.options.filter(i=>!e.includes(i)), {
            ...this._def,
            ...n
        })
    }
}
Ki = new WeakMap;
Cr.create = gx;
class yo extends be {
    constructor() {
        super(...arguments),
        qi.set(this, void 0)
    }
    _parse(e) {
        const n = Ae.getValidEnumValues(this._def.values)
          , i = this._getOrReturnCtx(e);
        if (i.parsedType !== ee.string && i.parsedType !== ee.number) {
            const o = Ae.objectValues(n);
            return Y(i, {
                expected: Ae.joinValues(o),
                received: i.parsedType,
                code: Q.invalid_type
            }),
            me
        }
        if (ml(this, qi) || fx(this, qi, new Set(Ae.getValidEnumValues(this._def.values))),
        !ml(this, qi).has(e.data)) {
            const o = Ae.objectValues(n);
            return Y(i, {
                received: i.data,
                code: Q.invalid_enum_value,
                options: o
            }),
            me
        }
        return _t(e.data)
    }
    get enum() {
        return this._def.values
    }
}
qi = new WeakMap;
yo.create = (t,e)=>new yo({
    values: t,
    typeName: pe.ZodNativeEnum,
    ...we(e)
});
class Qs extends be {
    unwrap() {
        return this._def.type
    }
    _parse(e) {
        const {ctx: n} = this._processInputParams(e);
        if (n.parsedType !== ee.promise && n.common.async === !1)
            return Y(n, {
                code: Q.invalid_type,
                expected: ee.promise,
                received: n.parsedType
            }),
            me;
        const i = n.parsedType === ee.promise ? n.data : Promise.resolve(n.data);
        return _t(i.then(o=>this._def.type.parseAsync(o, {
            path: n.path,
            errorMap: n.common.contextualErrorMap
        })))
    }
}
Qs.create = (t,e)=>new Qs({
    type: t,
    typeName: pe.ZodPromise,
    ...we(e)
});
class vn extends be {
    innerType() {
        return this._def.schema
    }
    sourceType() {
        return this._def.schema._def.typeName === pe.ZodEffects ? this._def.schema.sourceType() : this._def.schema
    }
    _parse(e) {
        const {status: n, ctx: i} = this._processInputParams(e)
          , o = this._def.effect || null
          , l = {
            addIssue: c=>{
                Y(i, c),
                c.fatal ? n.abort() : n.dirty()
            }
            ,
            get path() {
                return i.path
            }
        };
        if (l.addIssue = l.addIssue.bind(l),
        o.type === "preprocess") {
            const c = o.transform(i.data, l);
            if (i.common.async)
                return Promise.resolve(c).then(async d=>{
                    if (n.value === "aborted")
                        return me;
                    const h = await this._def.schema._parseAsync({
                        data: d,
                        path: i.path,
                        parent: i
                    });
                    return h.status === "aborted" ? me : h.status === "dirty" || n.value === "dirty" ? Rs(h.value) : h
                }
                );
            {
                if (n.value === "aborted")
                    return me;
                const d = this._def.schema._parseSync({
                    data: c,
                    path: i.path,
                    parent: i
                });
                return d.status === "aborted" ? me : d.status === "dirty" || n.value === "dirty" ? Rs(d.value) : d
            }
        }
        if (o.type === "refinement") {
            const c = d=>{
                const h = o.refinement(d, l);
                if (i.common.async)
                    return Promise.resolve(h);
                if (h instanceof Promise)
                    throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
                return d
            }
            ;
            if (i.common.async === !1) {
                const d = this._def.schema._parseSync({
                    data: i.data,
                    path: i.path,
                    parent: i
                });
                return d.status === "aborted" ? me : (d.status === "dirty" && n.dirty(),
                c(d.value),
                {
                    status: n.value,
                    value: d.value
                })
            } else
                return this._def.schema._parseAsync({
                    data: i.data,
                    path: i.path,
                    parent: i
                }).then(d=>d.status === "aborted" ? me : (d.status === "dirty" && n.dirty(),
                c(d.value).then(()=>({
                    status: n.value,
                    value: d.value
                }))))
        }
        if (o.type === "transform")
            if (i.common.async === !1) {
                const c = this._def.schema._parseSync({
                    data: i.data,
                    path: i.path,
                    parent: i
                });
                if (!Jr(c))
                    return c;
                const d = o.transform(c.value, l);
                if (d instanceof Promise)
                    throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
                return {
                    status: n.value,
                    value: d
                }
            } else
                return this._def.schema._parseAsync({
                    data: i.data,
                    path: i.path,
                    parent: i
                }).then(c=>Jr(c) ? Promise.resolve(o.transform(c.value, l)).then(d=>({
                    status: n.value,
                    value: d
                })) : c);
        Ae.assertNever(o)
    }
}
vn.create = (t,e,n)=>new vn({
    schema: t,
    typeName: pe.ZodEffects,
    effect: e,
    ...we(n)
});
vn.createWithPreprocess = (t,e,n)=>new vn({
    schema: e,
    effect: {
        type: "preprocess",
        transform: t
    },
    typeName: pe.ZodEffects,
    ...we(n)
});
class Cn extends be {
    _parse(e) {
        return this._getType(e) === ee.undefined ? _t(void 0) : this._def.innerType._parse(e)
    }
    unwrap() {
        return this._def.innerType
    }
}
Cn.create = (t,e)=>new Cn({
    innerType: t,
    typeName: pe.ZodOptional,
    ...we(e)
});
class _r extends be {
    _parse(e) {
        return this._getType(e) === ee.null ? _t(null) : this._def.innerType._parse(e)
    }
    unwrap() {
        return this._def.innerType
    }
}
_r.create = (t,e)=>new _r({
    innerType: t,
    typeName: pe.ZodNullable,
    ...we(e)
});
class vo extends be {
    _parse(e) {
        const {ctx: n} = this._processInputParams(e);
        let i = n.data;
        return n.parsedType === ee.undefined && (i = this._def.defaultValue()),
        this._def.innerType._parse({
            data: i,
            path: n.path,
            parent: n
        })
    }
    removeDefault() {
        return this._def.innerType
    }
}
vo.create = (t,e)=>new vo({
    innerType: t,
    typeName: pe.ZodDefault,
    defaultValue: typeof e.default == "function" ? e.default : ()=>e.default,
    ...we(e)
});
class xo extends be {
    _parse(e) {
        const {ctx: n} = this._processInputParams(e)
          , i = {
            ...n,
            common: {
                ...n.common,
                issues: []
            }
        }
          , o = this._def.innerType._parse({
            data: i.data,
            path: i.path,
            parent: {
                ...i
            }
        });
        return ao(o) ? o.then(l=>({
            status: "valid",
            value: l.status === "valid" ? l.value : this._def.catchValue({
                get error() {
                    return new $t(i.common.issues)
                },
                input: i.data
            })
        })) : {
            status: "valid",
            value: o.status === "valid" ? o.value : this._def.catchValue({
                get error() {
                    return new $t(i.common.issues)
                },
                input: i.data
            })
        }
    }
    removeCatch() {
        return this._def.innerType
    }
}
xo.create = (t,e)=>new xo({
    innerType: t,
    typeName: pe.ZodCatch,
    catchValue: typeof e.catch == "function" ? e.catch : ()=>e.catch,
    ...we(e)
});
class xl extends be {
    _parse(e) {
        if (this._getType(e) !== ee.nan) {
            const i = this._getOrReturnCtx(e);
            return Y(i, {
                code: Q.invalid_type,
                expected: ee.nan,
                received: i.parsedType
            }),
            me
        }
        return {
            status: "valid",
            value: e.data
        }
    }
}
xl.create = t=>new xl({
    typeName: pe.ZodNaN,
    ...we(t)
});
const hE = Symbol("zod_brand");
class Mf extends be {
    _parse(e) {
        const {ctx: n} = this._processInputParams(e)
          , i = n.data;
        return this._def.type._parse({
            data: i,
            path: n.path,
            parent: n
        })
    }
    unwrap() {
        return this._def.type
    }
}
class ko extends be {
    _parse(e) {
        const {status: n, ctx: i} = this._processInputParams(e);
        if (i.common.async)
            return (async()=>{
                const l = await this._def.in._parseAsync({
                    data: i.data,
                    path: i.path,
                    parent: i
                });
                return l.status === "aborted" ? me : l.status === "dirty" ? (n.dirty(),
                Rs(l.value)) : this._def.out._parseAsync({
                    data: l.value,
                    path: i.path,
                    parent: i
                })
            }
            )();
        {
            const o = this._def.in._parseSync({
                data: i.data,
                path: i.path,
                parent: i
            });
            return o.status === "aborted" ? me : o.status === "dirty" ? (n.dirty(),
            {
                status: "dirty",
                value: o.value
            }) : this._def.out._parseSync({
                data: o.value,
                path: i.path,
                parent: i
            })
        }
    }
    static create(e, n) {
        return new ko({
            in: e,
            out: n,
            typeName: pe.ZodPipeline
        })
    }
}
class wo extends be {
    _parse(e) {
        const n = this._def.innerType._parse(e)
          , i = o=>(Jr(o) && (o.value = Object.freeze(o.value)),
        o);
        return ao(n) ? n.then(o=>i(o)) : i(n)
    }
    unwrap() {
        return this._def.innerType
    }
}
wo.create = (t,e)=>new wo({
    innerType: t,
    typeName: pe.ZodReadonly,
    ...we(e)
});
function Yg(t, e) {
    const n = typeof t == "function" ? t(e) : typeof t == "string" ? {
        message: t
    } : t;
    return typeof n == "string" ? {
        message: n
    } : n
}
function yx(t, e={}, n) {
    return t ? Hs.create().superRefine((i,o)=>{
        var l, c;
        const d = t(i);
        if (d instanceof Promise)
            return d.then(h=>{
                var p, m;
                if (!h) {
                    const y = Yg(e, i)
                      , v = (m = (p = y.fatal) !== null && p !== void 0 ? p : n) !== null && m !== void 0 ? m : !0;
                    o.addIssue({
                        code: "custom",
                        ...y,
                        fatal: v
                    })
                }
            }
            );
        if (!d) {
            const h = Yg(e, i)
              , p = (c = (l = h.fatal) !== null && l !== void 0 ? l : n) !== null && c !== void 0 ? c : !0;
            o.addIssue({
                code: "custom",
                ...h,
                fatal: p
            })
        }
    }
    ) : Hs.create()
}
const pE = {
    object: Ke.lazycreate
};
var pe;
(function(t) {
    t.ZodString = "ZodString",
    t.ZodNumber = "ZodNumber",
    t.ZodNaN = "ZodNaN",
    t.ZodBigInt = "ZodBigInt",
    t.ZodBoolean = "ZodBoolean",
    t.ZodDate = "ZodDate",
    t.ZodSymbol = "ZodSymbol",
    t.ZodUndefined = "ZodUndefined",
    t.ZodNull = "ZodNull",
    t.ZodAny = "ZodAny",
    t.ZodUnknown = "ZodUnknown",
    t.ZodNever = "ZodNever",
    t.ZodVoid = "ZodVoid",
    t.ZodArray = "ZodArray",
    t.ZodObject = "ZodObject",
    t.ZodUnion = "ZodUnion",
    t.ZodDiscriminatedUnion = "ZodDiscriminatedUnion",
    t.ZodIntersection = "ZodIntersection",
    t.ZodTuple = "ZodTuple",
    t.ZodRecord = "ZodRecord",
    t.ZodMap = "ZodMap",
    t.ZodSet = "ZodSet",
    t.ZodFunction = "ZodFunction",
    t.ZodLazy = "ZodLazy",
    t.ZodLiteral = "ZodLiteral",
    t.ZodEnum = "ZodEnum",
    t.ZodEffects = "ZodEffects",
    t.ZodNativeEnum = "ZodNativeEnum",
    t.ZodOptional = "ZodOptional",
    t.ZodNullable = "ZodNullable",
    t.ZodDefault = "ZodDefault",
    t.ZodCatch = "ZodCatch",
    t.ZodPromise = "ZodPromise",
    t.ZodBranded = "ZodBranded",
    t.ZodPipeline = "ZodPipeline",
    t.ZodReadonly = "ZodReadonly"
}
)(pe || (pe = {}));
const mE = (t,e={
    message: `Input not instance of ${t.name}`
})=>yx(n=>n instanceof t, e)
  , vx = hn.create
  , xx = Tr.create
  , gE = xl.create
  , yE = br.create
  , wx = lo.create
  , vE = es.create
  , xE = gl.create
  , wE = uo.create
  , SE = co.create
  , PE = Hs.create
  , TE = Kr.create
  , bE = Zn.create
  , CE = yl.create
  , _E = pn.create
  , EE = Ke.create
  , kE = Ke.strictCreate
  , AE = fo.create
  , RE = Bl.create
  , NE = ho.create
  , ME = Nn.create
  , DE = po.create
  , OE = vl.create
  , IE = ts.create
  , LE = Vs.create
  , jE = mo.create
  , FE = go.create
  , VE = Cr.create
  , zE = yo.create
  , BE = Qs.create
  , Jg = vn.create
  , UE = Cn.create
  , $E = _r.create
  , WE = vn.createWithPreprocess
  , HE = ko.create
  , QE = ()=>vx().optional()
  , KE = ()=>xx().optional()
  , qE = ()=>wx().optional()
  , ZE = {
    string: (t=>hn.create({
        ...t,
        coerce: !0
    })),
    number: (t=>Tr.create({
        ...t,
        coerce: !0
    })),
    boolean: (t=>lo.create({
        ...t,
        coerce: !0
    })),
    bigint: (t=>br.create({
        ...t,
        coerce: !0
    })),
    date: (t=>es.create({
        ...t,
        coerce: !0
    }))
}
  , GE = me;
var Le = Object.freeze({
    __proto__: null,
    defaultErrorMap: Ws,
    setErrorMap: W_,
    getErrorMap: hl,
    makeIssue: pl,
    EMPTY_PATH: H_,
    addIssueToContext: Y,
    ParseStatus: Pt,
    INVALID: me,
    DIRTY: Rs,
    OK: _t,
    isAborted: Fd,
    isDirty: Vd,
    isValid: Jr,
    isAsync: ao,
    get util() {
        return Ae
    },
    get objectUtil() {
        return jd
    },
    ZodParsedType: ee,
    getParsedType: Wn,
    ZodType: be,
    datetimeRegex: mx,
    ZodString: hn,
    ZodNumber: Tr,
    ZodBigInt: br,
    ZodBoolean: lo,
    ZodDate: es,
    ZodSymbol: gl,
    ZodUndefined: uo,
    ZodNull: co,
    ZodAny: Hs,
    ZodUnknown: Kr,
    ZodNever: Zn,
    ZodVoid: yl,
    ZodArray: pn,
    ZodObject: Ke,
    ZodUnion: fo,
    ZodDiscriminatedUnion: Bl,
    ZodIntersection: ho,
    ZodTuple: Nn,
    ZodRecord: po,
    ZodMap: vl,
    ZodSet: ts,
    ZodFunction: Vs,
    ZodLazy: mo,
    ZodLiteral: go,
    ZodEnum: Cr,
    ZodNativeEnum: yo,
    ZodPromise: Qs,
    ZodEffects: vn,
    ZodTransformer: vn,
    ZodOptional: Cn,
    ZodNullable: _r,
    ZodDefault: vo,
    ZodCatch: xo,
    ZodNaN: xl,
    BRAND: hE,
    ZodBranded: Mf,
    ZodPipeline: ko,
    ZodReadonly: wo,
    custom: yx,
    Schema: be,
    ZodSchema: be,
    late: pE,
    get ZodFirstPartyTypeKind() {
        return pe
    },
    coerce: ZE,
    any: PE,
    array: _E,
    bigint: yE,
    boolean: wx,
    date: vE,
    discriminatedUnion: RE,
    effect: Jg,
    enum: VE,
    function: LE,
    instanceof: mE,
    intersection: NE,
    lazy: jE,
    literal: FE,
    map: OE,
    nan: gE,
    nativeEnum: zE,
    never: bE,
    null: SE,
    nullable: $E,
    number: xx,
    object: EE,
    oboolean: qE,
    onumber: KE,
    optional: UE,
    ostring: QE,
    pipeline: HE,
    preprocess: WE,
    promise: BE,
    record: DE,
    set: IE,
    strictObject: kE,
    string: vx,
    symbol: xE,
    transformer: Jg,
    tuple: ME,
    undefined: wE,
    union: AE,
    unknown: TE,
    void: CE,
    NEVER: GE,
    ZodIssueCode: Q,
    quotelessJson: $_,
    ZodError: $t
});
const $ = Symbol.for("drizzle:entityKind");
function ht(t, e) {
    if (!t || typeof t != "object")
        return !1;
    if (t instanceof e)
        return !0;
    if (!Object.prototype.hasOwnProperty.call(e, $))
        throw new Error(`Class "${e.name ?? "<unknown>"}" doesn't look like a Drizzle entity. If this is incorrect and the class is provided by Drizzle, please report this as a bug.`);
    let n = Object.getPrototypeOf(t).constructor;
    if (n)
        for (; n; ) {
            if ($ in n && n[$] === e[$])
                return !0;
            n = Object.getPrototypeOf(n)
        }
    return !1
}
class So {
    constructor(e, n) {
        this.table = e,
        this.config = n,
        this.name = n.name,
        this.keyAsName = n.keyAsName,
        this.notNull = n.notNull,
        this.default = n.default,
        this.defaultFn = n.defaultFn,
        this.onUpdateFn = n.onUpdateFn,
        this.hasDefault = n.hasDefault,
        this.primary = n.primaryKey,
        this.isUnique = n.isUnique,
        this.uniqueName = n.uniqueName,
        this.uniqueType = n.uniqueType,
        this.dataType = n.dataType,
        this.columnType = n.columnType,
        this.generated = n.generated,
        this.generatedIdentity = n.generatedIdentity
    }
    static[$] = "Column";
    name;
    keyAsName;
    primary;
    notNull;
    default;
    defaultFn;
    onUpdateFn;
    hasDefault;
    isUnique;
    uniqueName;
    uniqueType;
    dataType;
    columnType;
    enumValues = void 0;
    generated = void 0;
    generatedIdentity = void 0;
    config;
    mapFromDriverValue(e) {
        return e
    }
    mapToDriverValue(e) {
        return e
    }
    shouldDisableInsert() {
        return this.config.generated !== void 0 && this.config.generated.type !== "byDefault"
    }
}
class XE {
    static[$] = "ColumnBuilder";
    config;
    constructor(e, n, i) {
        this.config = {
            name: e,
            keyAsName: e === "",
            notNull: !1,
            default: void 0,
            hasDefault: !1,
            primaryKey: !1,
            isUnique: !1,
            uniqueName: void 0,
            uniqueType: void 0,
            dataType: n,
            columnType: i,
            generated: void 0
        }
    }
    $type() {
        return this
    }
    notNull() {
        return this.config.notNull = !0,
        this
    }
    default(e) {
        return this.config.default = e,
        this.config.hasDefault = !0,
        this
    }
    $defaultFn(e) {
        return this.config.defaultFn = e,
        this.config.hasDefault = !0,
        this
    }
    $default = this.$defaultFn;
    $onUpdateFn(e) {
        return this.config.onUpdateFn = e,
        this.config.hasDefault = !0,
        this
    }
    $onUpdate = this.$onUpdateFn;
    primaryKey() {
        return this.config.primaryKey = !0,
        this.config.notNull = !0,
        this
    }
    setName(e) {
        this.config.name === "" && (this.config.name = e)
    }
}
const zs = Symbol.for("drizzle:Name");
class YE {
    static[$] = "PgForeignKeyBuilder";
    reference;
    _onUpdate = "no action";
    _onDelete = "no action";
    constructor(e, n) {
        this.reference = ()=>{
            const {name: i, columns: o, foreignColumns: l} = e();
            return {
                name: i,
                columns: o,
                foreignTable: l[0].table,
                foreignColumns: l
            }
        }
        ,
        n && (this._onUpdate = n.onUpdate,
        this._onDelete = n.onDelete)
    }
    onUpdate(e) {
        return this._onUpdate = e === void 0 ? "no action" : e,
        this
    }
    onDelete(e) {
        return this._onDelete = e === void 0 ? "no action" : e,
        this
    }
    build(e) {
        return new JE(e,this)
    }
}
class JE {
    constructor(e, n) {
        this.table = e,
        this.reference = n.reference,
        this.onUpdate = n._onUpdate,
        this.onDelete = n._onDelete
    }
    static[$] = "PgForeignKey";
    reference;
    onUpdate;
    onDelete;
    getName() {
        const {name: e, columns: n, foreignColumns: i} = this.reference()
          , o = n.map(d=>d.name)
          , l = i.map(d=>d.name)
          , c = [this.table[zs], ...o, i[0].table[zs], ...l];
        return e ?? `${c.join("_")}_fk`
    }
}
function ek(t, ...e) {
    return t(...e)
}
function tk(t, e) {
    return `${t[zs]}_${e.join("_")}_unique`
}
function ey(t, e, n) {
    for (let i = e; i < t.length; i++) {
        const o = t[i];
        if (o === "\\") {
            i++;
            continue
        }
        if (o === '"')
            return [t.slice(e, i).replace(/\\/g, ""), i + 1];
        if (!n && (o === "," || o === "}"))
            return [t.slice(e, i).replace(/\\/g, ""), i]
    }
    return [t.slice(e).replace(/\\/g, ""), t.length]
}
function Sx(t, e=0) {
    const n = [];
    let i = e
      , o = !1;
    for (; i < t.length; ) {
        const l = t[i];
        if (l === ",") {
            (o || i === e) && n.push(""),
            o = !0,
            i++;
            continue
        }
        if (o = !1,
        l === "\\") {
            i += 2;
            continue
        }
        if (l === '"') {
            const [h,p] = ey(t, i + 1, !0);
            n.push(h),
            i = p;
            continue
        }
        if (l === "}")
            return [n, i + 1];
        if (l === "{") {
            const [h,p] = Sx(t, i + 1);
            n.push(h),
            i = p;
            continue
        }
        const [c,d] = ey(t, i, !1);
        n.push(c),
        i = d
    }
    return [n, i]
}
function nk(t) {
    const [e] = Sx(t, 1);
    return e
}
function Px(t) {
    return `{${t.map(e=>Array.isArray(e) ? Px(e) : typeof e == "string" ? `"${e.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"` : `${e}`).join(",")}}`
}
class Ne extends XE {
    foreignKeyConfigs = [];
    static[$] = "PgColumnBuilder";
    array(e) {
        return new sk(this.config.name,this,e)
    }
    references(e, n={}) {
        return this.foreignKeyConfigs.push({
            ref: e,
            actions: n
        }),
        this
    }
    unique(e, n) {
        return this.config.isUnique = !0,
        this.config.uniqueName = e,
        this.config.uniqueType = n?.nulls,
        this
    }
    generatedAlwaysAs(e) {
        return this.config.generated = {
            as: e,
            type: "always",
            mode: "stored"
        },
        this
    }
    buildForeignKeys(e, n) {
        return this.foreignKeyConfigs.map(({ref: i, actions: o})=>ek((l,c)=>{
            const d = new YE(()=>{
                const h = l();
                return {
                    columns: [e],
                    foreignColumns: [h]
                }
            }
            );
            return c.onUpdate && d.onUpdate(c.onUpdate),
            c.onDelete && d.onDelete(c.onDelete),
            d.build(n)
        }
        , i, o))
    }
    buildExtraConfigColumn(e) {
        return new rk(e,this.config)
    }
}
class Te extends So {
    constructor(e, n) {
        n.uniqueName || (n.uniqueName = tk(e, [n.name])),
        super(e, n),
        this.table = e
    }
    static[$] = "PgColumn"
}
class rk extends Te {
    static[$] = "ExtraConfigColumn";
    getSQLType() {
        return this.getSQLType()
    }
    indexConfig = {
        order: this.config.order ?? "asc",
        nulls: this.config.nulls ?? "last",
        opClass: this.config.opClass
    };
    defaultConfig = {
        order: "asc",
        nulls: "last",
        opClass: void 0
    };
    asc() {
        return this.indexConfig.order = "asc",
        this
    }
    desc() {
        return this.indexConfig.order = "desc",
        this
    }
    nullsFirst() {
        return this.indexConfig.nulls = "first",
        this
    }
    nullsLast() {
        return this.indexConfig.nulls = "last",
        this
    }
    op(e) {
        return this.indexConfig.opClass = e,
        this
    }
}
class sk extends Ne {
    static[$] = "PgArrayBuilder";
    constructor(e, n, i) {
        super(e, "array", "PgArray"),
        this.config.baseBuilder = n,
        this.config.size = i
    }
    build(e) {
        const n = this.config.baseBuilder.build(e);
        return new Df(e,this.config,n)
    }
}
class Df extends Te {
    constructor(e, n, i, o) {
        super(e, n),
        this.baseColumn = i,
        this.range = o,
        this.size = n.size
    }
    size;
    static[$] = "PgArray";
    getSQLType() {
        return `${this.baseColumn.getSQLType()}[${typeof this.size == "number" ? this.size : ""}]`
    }
    mapFromDriverValue(e) {
        return typeof e == "string" && (e = nk(e)),
        e.map(n=>this.baseColumn.mapFromDriverValue(n))
    }
    mapToDriverValue(e, n=!1) {
        const i = e.map(o=>o === null ? null : ht(this.baseColumn, Df) ? this.baseColumn.mapToDriverValue(o, !0) : this.baseColumn.mapToDriverValue(o));
        return n ? i : Px(i)
    }
}
const ty = Symbol.for("drizzle:isPgEnum");
function ik(t) {
    return !!t && typeof t == "function" && ty in t && t[ty] === !0
}
class Tx {
    static[$] = "Subquery";
    constructor(e, n, i, o=!1) {
        this._ = {
            brand: "Subquery",
            sql: e,
            selectedFields: n,
            alias: i,
            isWith: o
        }
    }
}
const ok = {
    startActiveSpan(t, e) {
        return e()
    }
}
  , Bs = Symbol.for("drizzle:ViewBaseConfig")
  , sd = Symbol.for("drizzle:Schema")
  , ny = Symbol.for("drizzle:Columns")
  , ry = Symbol.for("drizzle:ExtraConfigColumns")
  , id = Symbol.for("drizzle:OriginalName")
  , od = Symbol.for("drizzle:BaseName")
  , wl = Symbol.for("drizzle:IsAlias")
  , sy = Symbol.for("drizzle:ExtraConfigBuilder")
  , bx = Symbol.for("drizzle:IsDrizzleTable");
class Bt {
    static[$] = "Table";
    static Symbol = {
        Name: zs,
        Schema: sd,
        OriginalName: id,
        Columns: ny,
        ExtraConfigColumns: ry,
        BaseName: od,
        IsAlias: wl,
        ExtraConfigBuilder: sy
    };
    [zs];
    [id];
    [sd];
    [ny];
    [ry];
    [od];
    [wl] = !1;
    [bx] = !0;
    [sy] = void 0;
    constructor(e, n, i) {
        this[zs] = this[id] = e,
        this[sd] = n,
        this[od] = i
    }
}
function Cx(t) {
    return typeof t == "object" && t !== null && bx in t
}
function ak(t) {
    return t != null && typeof t.getSQL == "function"
}
function lk(t) {
    const e = {
        sql: "",
        params: []
    };
    for (const n of t)
        e.sql += n.sql,
        e.params.push(...n.params),
        n.typings?.length && (e.typings || (e.typings = []),
        e.typings.push(...n.typings));
    return e
}
class dn {
    static[$] = "StringChunk";
    value;
    constructor(e) {
        this.value = Array.isArray(e) ? e : [e]
    }
    getSQL() {
        return new Xe([this])
    }
}
class Xe {
    constructor(e) {
        this.queryChunks = e
    }
    static[$] = "SQL";
    decoder = _x;
    shouldInlineParams = !1;
    append(e) {
        return this.queryChunks.push(...e.queryChunks),
        this
    }
    toQuery(e) {
        return ok.startActiveSpan("drizzle.buildSQL", n=>{
            const i = this.buildQueryFromSourceParams(this.queryChunks, e);
            return n?.setAttributes({
                "drizzle.query.text": i.sql,
                "drizzle.query.params": JSON.stringify(i.params)
            }),
            i
        }
        )
    }
    buildQueryFromSourceParams(e, n) {
        const i = Object.assign({}, n, {
            inlineParams: n.inlineParams || this.shouldInlineParams,
            paramStartIndex: n.paramStartIndex || {
                value: 0
            }
        })
          , {casing: o, escapeName: l, escapeParam: c, prepareTyping: d, inlineParams: h, paramStartIndex: p} = i;
        return lk(e.map(m=>{
            if (ht(m, dn))
                return {
                    sql: m.value.join(""),
                    params: []
                };
            if (ht(m, Bd))
                return {
                    sql: l(m.value),
                    params: []
                };
            if (m === void 0)
                return {
                    sql: "",
                    params: []
                };
            if (Array.isArray(m)) {
                const y = [new dn("(")];
                for (const [v,w] of m.entries())
                    y.push(w),
                    v < m.length - 1 && y.push(new dn(", "));
                return y.push(new dn(")")),
                this.buildQueryFromSourceParams(y, i)
            }
            if (ht(m, Xe))
                return this.buildQueryFromSourceParams(m.queryChunks, {
                    ...i,
                    inlineParams: h || m.shouldInlineParams
                });
            if (ht(m, Bt)) {
                const y = m[Bt.Symbol.Schema]
                  , v = m[Bt.Symbol.Name];
                return {
                    sql: y === void 0 || m[wl] ? l(v) : l(y) + "." + l(v),
                    params: []
                }
            }
            if (ht(m, So)) {
                const y = o.getColumnCasing(m);
                if (n.invokeSource === "indexes")
                    return {
                        sql: l(y),
                        params: []
                    };
                const v = m.table[Bt.Symbol.Schema];
                return {
                    sql: m.table[wl] || v === void 0 ? l(m.table[Bt.Symbol.Name]) + "." + l(y) : l(v) + "." + l(m.table[Bt.Symbol.Name]) + "." + l(y),
                    params: []
                }
            }
            if (ht(m, uk)) {
                const y = m[Bs].schema
                  , v = m[Bs].name;
                return {
                    sql: y === void 0 || m[Bs].isAlias ? l(v) : l(y) + "." + l(v),
                    params: []
                }
            }
            if (ht(m, kx)) {
                if (ht(m.value, Ud))
                    return {
                        sql: c(p.value++, m),
                        params: [m],
                        typings: ["none"]
                    };
                const y = m.value === null ? null : m.encoder.mapToDriverValue(m.value);
                if (ht(y, Xe))
                    return this.buildQueryFromSourceParams([y], i);
                if (h)
                    return {
                        sql: this.mapInlineParam(y, i),
                        params: []
                    };
                let v = ["none"];
                return d && (v = [d(m.encoder)]),
                {
                    sql: c(p.value++, y),
                    params: [y],
                    typings: v
                }
            }
            return ht(m, Ud) ? {
                sql: c(p.value++, m),
                params: [m],
                typings: ["none"]
            } : ht(m, Xe.Aliased) && m.fieldAlias !== void 0 ? {
                sql: l(m.fieldAlias),
                params: []
            } : ht(m, Tx) ? m._.isWith ? {
                sql: l(m._.alias),
                params: []
            } : this.buildQueryFromSourceParams([new dn("("), m._.sql, new dn(") "), new Bd(m._.alias)], i) : ik(m) ? m.schema ? {
                sql: l(m.schema) + "." + l(m.enumName),
                params: []
            } : {
                sql: l(m.enumName),
                params: []
            } : ak(m) ? m.shouldOmitSQLParens?.() ? this.buildQueryFromSourceParams([m.getSQL()], i) : this.buildQueryFromSourceParams([new dn("("), m.getSQL(), new dn(")")], i) : h ? {
                sql: this.mapInlineParam(m, i),
                params: []
            } : {
                sql: c(p.value++, m),
                params: [m],
                typings: ["none"]
            }
        }
        ))
    }
    mapInlineParam(e, {escapeString: n}) {
        if (e === null)
            return "null";
        if (typeof e == "number" || typeof e == "boolean")
            return e.toString();
        if (typeof e == "string")
            return n(e);
        if (typeof e == "object") {
            const i = e.toString();
            return n(i === "[object Object]" ? JSON.stringify(e) : i)
        }
        throw new Error("Unexpected param value: " + e)
    }
    getSQL() {
        return this
    }
    as(e) {
        return e === void 0 ? this : new Xe.Aliased(this,e)
    }
    mapWith(e) {
        return this.decoder = typeof e == "function" ? {
            mapFromDriverValue: e
        } : e,
        this
    }
    inlineParams() {
        return this.shouldInlineParams = !0,
        this
    }
    if(e) {
        return e ? this : void 0
    }
}
class Bd {
    constructor(e) {
        this.value = e
    }
    static[$] = "Name";
    brand;
    getSQL() {
        return new Xe([this])
    }
}
const _x = {
    mapFromDriverValue: t=>t
}
  , Ex = {
    mapToDriverValue: t=>t
};
({
    ..._x,
    ...Ex
});
class kx {
    constructor(e, n=Ex) {
        this.value = e,
        this.encoder = n
    }
    static[$] = "Param";
    brand;
    getSQL() {
        return new Xe([this])
    }
}
function Sl(t, ...e) {
    const n = [];
    (e.length > 0 || t.length > 0 && t[0] !== "") && n.push(new dn(t[0]));
    for (const [i,o] of e.entries())
        n.push(o, new dn(t[i + 1]));
    return new Xe(n)
}
(t=>{
    function e() {
        return new Xe([])
    }
    t.empty = e;
    function n(h) {
        return new Xe(h)
    }
    t.fromList = n;
    function i(h) {
        return new Xe([new dn(h)])
    }
    t.raw = i;
    function o(h, p) {
        const m = [];
        for (const [y,v] of h.entries())
            y > 0 && p !== void 0 && m.push(p),
            m.push(v);
        return new Xe(m)
    }
    t.join = o;
    function l(h) {
        return new Bd(h)
    }
    t.identifier = l;
    function c(h) {
        return new Ud(h)
    }
    t.placeholder = c;
    function d(h, p) {
        return new kx(h,p)
    }
    t.param = d
}
)(Sl || (Sl = {}));
(t=>{
    class e {
        constructor(i, o) {
            this.sql = i,
            this.fieldAlias = o
        }
        static[$] = "SQL.Aliased";
        isSelectionField = !1;
        getSQL() {
            return this.sql
        }
        clone() {
            return new e(this.sql,this.fieldAlias)
        }
    }
    t.Aliased = e
}
)(Xe || (Xe = {}));
class Ud {
    constructor(e) {
        this.name = e
    }
    static[$] = "Placeholder";
    getSQL() {
        return new Xe([this])
    }
}
const Ax = Symbol.for("drizzle:IsDrizzleView");
class uk {
    static[$] = "View";
    [Bs];
    [Ax] = !0;
    constructor({name: e, schema: n, selectedFields: i, query: o}) {
        this[Bs] = {
            name: e,
            originalName: e,
            schema: n,
            selectedFields: i,
            query: o,
            isExisting: !o,
            isAlias: !1
        }
    }
    getSQL() {
        return new Xe([this])
    }
}
function ck(t) {
    return typeof t == "object" && t !== null && Ax in t
}
So.prototype.getSQL = function() {
    return new Xe([this])
}
;
Bt.prototype.getSQL = function() {
    return new Xe([this])
}
;
Tx.prototype.getSQL = function() {
    return new Xe([this])
}
;
function dk(t) {
    return t[Bt.Symbol.Columns]
}
function fk(t) {
    return t[Bs].selectedFields
}
function ct(t, e) {
    return {
        name: typeof t == "string" && t.length > 0 ? t : "",
        config: typeof t == "object" ? t : e
    }
}
class Ul extends Ne {
    static[$] = "PgIntColumnBaseBuilder";
    generatedAlwaysAsIdentity(e) {
        if (e) {
            const {name: n, ...i} = e;
            this.config.generatedIdentity = {
                type: "always",
                sequenceName: n,
                sequenceOptions: i
            }
        } else
            this.config.generatedIdentity = {
                type: "always"
            };
        return this.config.hasDefault = !0,
        this.config.notNull = !0,
        this
    }
    generatedByDefaultAsIdentity(e) {
        if (e) {
            const {name: n, ...i} = e;
            this.config.generatedIdentity = {
                type: "byDefault",
                sequenceName: n,
                sequenceOptions: i
            }
        } else
            this.config.generatedIdentity = {
                type: "byDefault"
            };
        return this.config.hasDefault = !0,
        this.config.notNull = !0,
        this
    }
}
class hk extends Ul {
    static[$] = "PgBigInt53Builder";
    constructor(e) {
        super(e, "number", "PgBigInt53")
    }
    build(e) {
        return new pk(e,this.config)
    }
}
class pk extends Te {
    static[$] = "PgBigInt53";
    getSQLType() {
        return "bigint"
    }
    mapFromDriverValue(e) {
        return typeof e == "number" ? e : Number(e)
    }
}
class mk extends Ul {
    static[$] = "PgBigInt64Builder";
    constructor(e) {
        super(e, "bigint", "PgBigInt64")
    }
    build(e) {
        return new gk(e,this.config)
    }
}
class gk extends Te {
    static[$] = "PgBigInt64";
    getSQLType() {
        return "bigint"
    }
    mapFromDriverValue(e) {
        return BigInt(e)
    }
}
function yk(t, e) {
    const {name: n, config: i} = ct(t, e);
    return i.mode === "number" ? new hk(n) : new mk(n)
}
class vk extends Ne {
    static[$] = "PgBigSerial53Builder";
    constructor(e) {
        super(e, "number", "PgBigSerial53"),
        this.config.hasDefault = !0,
        this.config.notNull = !0
    }
    build(e) {
        return new xk(e,this.config)
    }
}
class xk extends Te {
    static[$] = "PgBigSerial53";
    getSQLType() {
        return "bigserial"
    }
    mapFromDriverValue(e) {
        return typeof e == "number" ? e : Number(e)
    }
}
class wk extends Ne {
    static[$] = "PgBigSerial64Builder";
    constructor(e) {
        super(e, "bigint", "PgBigSerial64"),
        this.config.hasDefault = !0
    }
    build(e) {
        return new Sk(e,this.config)
    }
}
class Sk extends Te {
    static[$] = "PgBigSerial64";
    getSQLType() {
        return "bigserial"
    }
    mapFromDriverValue(e) {
        return BigInt(e)
    }
}
function Pk(t, e) {
    const {name: n, config: i} = ct(t, e);
    return i.mode === "number" ? new vk(n) : new wk(n)
}
class Tk extends Ne {
    static[$] = "PgBooleanBuilder";
    constructor(e) {
        super(e, "boolean", "PgBoolean")
    }
    build(e) {
        return new bk(e,this.config)
    }
}
class bk extends Te {
    static[$] = "PgBoolean";
    getSQLType() {
        return "boolean"
    }
}
function Ck(t) {
    return new Tk(t ?? "")
}
class _k extends Ne {
    static[$] = "PgCharBuilder";
    constructor(e, n) {
        super(e, "string", "PgChar"),
        this.config.length = n.length,
        this.config.enumValues = n.enum
    }
    build(e) {
        return new Ek(e,this.config)
    }
}
class Ek extends Te {
    static[$] = "PgChar";
    length = this.config.length;
    enumValues = this.config.enumValues;
    getSQLType() {
        return this.length === void 0 ? "char" : `char(${this.length})`
    }
}
function kk(t, e={}) {
    const {name: n, config: i} = ct(t, e);
    return new _k(n,i)
}
class Ak extends Ne {
    static[$] = "PgCidrBuilder";
    constructor(e) {
        super(e, "string", "PgCidr")
    }
    build(e) {
        return new Rk(e,this.config)
    }
}
class Rk extends Te {
    static[$] = "PgCidr";
    getSQLType() {
        return "cidr"
    }
}
function Nk(t) {
    return new Ak(t ?? "")
}
class Mk extends Ne {
    static[$] = "PgCustomColumnBuilder";
    constructor(e, n, i) {
        super(e, "custom", "PgCustomColumn"),
        this.config.fieldConfig = n,
        this.config.customTypeParams = i
    }
    build(e) {
        return new Dk(e,this.config)
    }
}
class Dk extends Te {
    static[$] = "PgCustomColumn";
    sqlName;
    mapTo;
    mapFrom;
    constructor(e, n) {
        super(e, n),
        this.sqlName = n.customTypeParams.dataType(n.fieldConfig),
        this.mapTo = n.customTypeParams.toDriver,
        this.mapFrom = n.customTypeParams.fromDriver
    }
    getSQLType() {
        return this.sqlName
    }
    mapFromDriverValue(e) {
        return typeof this.mapFrom == "function" ? this.mapFrom(e) : e
    }
    mapToDriverValue(e) {
        return typeof this.mapTo == "function" ? this.mapTo(e) : e
    }
}
function Ok(t) {
    return (e,n)=>{
        const {name: i, config: o} = ct(e, n);
        return new Mk(i,o,t)
    }
}
class Ao extends Ne {
    static[$] = "PgDateColumnBaseBuilder";
    defaultNow() {
        return this.default(Sl`now()`)
    }
}
class Ik extends Ao {
    static[$] = "PgDateBuilder";
    constructor(e) {
        super(e, "date", "PgDate")
    }
    build(e) {
        return new Lk(e,this.config)
    }
}
class Lk extends Te {
    static[$] = "PgDate";
    getSQLType() {
        return "date"
    }
    mapFromDriverValue(e) {
        return new Date(e)
    }
    mapToDriverValue(e) {
        return e.toISOString()
    }
}
class jk extends Ao {
    static[$] = "PgDateStringBuilder";
    constructor(e) {
        super(e, "string", "PgDateString")
    }
    build(e) {
        return new Fk(e,this.config)
    }
}
class Fk extends Te {
    static[$] = "PgDateString";
    getSQLType() {
        return "date"
    }
}
function Vk(t, e) {
    const {name: n, config: i} = ct(t, e);
    return i?.mode === "date" ? new Ik(n) : new jk(n)
}
class zk extends Ne {
    static[$] = "PgDoublePrecisionBuilder";
    constructor(e) {
        super(e, "number", "PgDoublePrecision")
    }
    build(e) {
        return new Bk(e,this.config)
    }
}
class Bk extends Te {
    static[$] = "PgDoublePrecision";
    getSQLType() {
        return "double precision"
    }
    mapFromDriverValue(e) {
        return typeof e == "string" ? Number.parseFloat(e) : e
    }
}
function Uk(t) {
    return new zk(t ?? "")
}
class $k extends Ne {
    static[$] = "PgInetBuilder";
    constructor(e) {
        super(e, "string", "PgInet")
    }
    build(e) {
        return new Wk(e,this.config)
    }
}
class Wk extends Te {
    static[$] = "PgInet";
    getSQLType() {
        return "inet"
    }
}
function Hk(t) {
    return new $k(t ?? "")
}
class Qk extends Ul {
    static[$] = "PgIntegerBuilder";
    constructor(e) {
        super(e, "number", "PgInteger")
    }
    build(e) {
        return new Kk(e,this.config)
    }
}
class Kk extends Te {
    static[$] = "PgInteger";
    getSQLType() {
        return "integer"
    }
    mapFromDriverValue(e) {
        return typeof e == "string" ? Number.parseInt(e) : e
    }
}
function qk(t) {
    return new Qk(t ?? "")
}
class Zk extends Ne {
    static[$] = "PgIntervalBuilder";
    constructor(e, n) {
        super(e, "string", "PgInterval"),
        this.config.intervalConfig = n
    }
    build(e) {
        return new Gk(e,this.config)
    }
}
class Gk extends Te {
    static[$] = "PgInterval";
    fields = this.config.intervalConfig.fields;
    precision = this.config.intervalConfig.precision;
    getSQLType() {
        const e = this.fields ? ` ${this.fields}` : ""
          , n = this.precision ? `(${this.precision})` : "";
        return `interval${e}${n}`
    }
}
function Xk(t, e={}) {
    const {name: n, config: i} = ct(t, e);
    return new Zk(n,i)
}
class Yk extends Ne {
    static[$] = "PgJsonBuilder";
    constructor(e) {
        super(e, "json", "PgJson")
    }
    build(e) {
        return new Jk(e,this.config)
    }
}
class Jk extends Te {
    static[$] = "PgJson";
    constructor(e, n) {
        super(e, n)
    }
    getSQLType() {
        return "json"
    }
    mapToDriverValue(e) {
        return JSON.stringify(e)
    }
    mapFromDriverValue(e) {
        if (typeof e == "string")
            try {
                return JSON.parse(e)
            } catch {
                return e
            }
        return e
    }
}
function eA(t) {
    return new Yk(t ?? "")
}
class tA extends Ne {
    static[$] = "PgJsonbBuilder";
    constructor(e) {
        super(e, "json", "PgJsonb")
    }
    build(e) {
        return new nA(e,this.config)
    }
}
class nA extends Te {
    static[$] = "PgJsonb";
    constructor(e, n) {
        super(e, n)
    }
    getSQLType() {
        return "jsonb"
    }
    mapToDriverValue(e) {
        return JSON.stringify(e)
    }
    mapFromDriverValue(e) {
        if (typeof e == "string")
            try {
                return JSON.parse(e)
            } catch {
                return e
            }
        return e
    }
}
function rA(t) {
    return new tA(t ?? "")
}
class sA extends Ne {
    static[$] = "PgLineBuilder";
    constructor(e) {
        super(e, "array", "PgLine")
    }
    build(e) {
        return new iA(e,this.config)
    }
}
class iA extends Te {
    static[$] = "PgLine";
    getSQLType() {
        return "line"
    }
    mapFromDriverValue(e) {
        const [n,i,o] = e.slice(1, -1).split(",");
        return [Number.parseFloat(n), Number.parseFloat(i), Number.parseFloat(o)]
    }
    mapToDriverValue(e) {
        return `{${e[0]},${e[1]},${e[2]}}`
    }
}
class oA extends Ne {
    static[$] = "PgLineABCBuilder";
    constructor(e) {
        super(e, "json", "PgLineABC")
    }
    build(e) {
        return new aA(e,this.config)
    }
}
class aA extends Te {
    static[$] = "PgLineABC";
    getSQLType() {
        return "line"
    }
    mapFromDriverValue(e) {
        const [n,i,o] = e.slice(1, -1).split(",");
        return {
            a: Number.parseFloat(n),
            b: Number.parseFloat(i),
            c: Number.parseFloat(o)
        }
    }
    mapToDriverValue(e) {
        return `{${e.a},${e.b},${e.c}}`
    }
}
function lA(t, e) {
    const {name: n, config: i} = ct(t, e);
    return !i?.mode || i.mode === "tuple" ? new sA(n) : new oA(n)
}
class uA extends Ne {
    static[$] = "PgMacaddrBuilder";
    constructor(e) {
        super(e, "string", "PgMacaddr")
    }
    build(e) {
        return new cA(e,this.config)
    }
}
class cA extends Te {
    static[$] = "PgMacaddr";
    getSQLType() {
        return "macaddr"
    }
}
function dA(t) {
    return new uA(t ?? "")
}
class fA extends Ne {
    static[$] = "PgMacaddr8Builder";
    constructor(e) {
        super(e, "string", "PgMacaddr8")
    }
    build(e) {
        return new hA(e,this.config)
    }
}
class hA extends Te {
    static[$] = "PgMacaddr8";
    getSQLType() {
        return "macaddr8"
    }
}
function pA(t) {
    return new fA(t ?? "")
}
class mA extends Ne {
    static[$] = "PgNumericBuilder";
    constructor(e, n, i) {
        super(e, "string", "PgNumeric"),
        this.config.precision = n,
        this.config.scale = i
    }
    build(e) {
        return new gA(e,this.config)
    }
}
class gA extends Te {
    static[$] = "PgNumeric";
    precision;
    scale;
    constructor(e, n) {
        super(e, n),
        this.precision = n.precision,
        this.scale = n.scale
    }
    getSQLType() {
        return this.precision !== void 0 && this.scale !== void 0 ? `numeric(${this.precision}, ${this.scale})` : this.precision === void 0 ? "numeric" : `numeric(${this.precision})`
    }
}
function yA(t, e) {
    const {name: n, config: i} = ct(t, e);
    return new mA(n,i?.precision,i?.scale)
}
class vA extends Ne {
    static[$] = "PgPointTupleBuilder";
    constructor(e) {
        super(e, "array", "PgPointTuple")
    }
    build(e) {
        return new xA(e,this.config)
    }
}
class xA extends Te {
    static[$] = "PgPointTuple";
    getSQLType() {
        return "point"
    }
    mapFromDriverValue(e) {
        if (typeof e == "string") {
            const [n,i] = e.slice(1, -1).split(",");
            return [Number.parseFloat(n), Number.parseFloat(i)]
        }
        return [e.x, e.y]
    }
    mapToDriverValue(e) {
        return `(${e[0]},${e[1]})`
    }
}
class wA extends Ne {
    static[$] = "PgPointObjectBuilder";
    constructor(e) {
        super(e, "json", "PgPointObject")
    }
    build(e) {
        return new SA(e,this.config)
    }
}
class SA extends Te {
    static[$] = "PgPointObject";
    getSQLType() {
        return "point"
    }
    mapFromDriverValue(e) {
        if (typeof e == "string") {
            const [n,i] = e.slice(1, -1).split(",");
            return {
                x: Number.parseFloat(n),
                y: Number.parseFloat(i)
            }
        }
        return e
    }
    mapToDriverValue(e) {
        return `(${e.x},${e.y})`
    }
}
function PA(t, e) {
    const {name: n, config: i} = ct(t, e);
    return !i?.mode || i.mode === "tuple" ? new vA(n) : new wA(n)
}
function TA(t) {
    const e = [];
    for (let n = 0; n < t.length; n += 2)
        e.push(Number.parseInt(t.slice(n, n + 2), 16));
    return new Uint8Array(e)
}
function iy(t, e) {
    const n = new ArrayBuffer(8)
      , i = new DataView(n);
    for (let o = 0; o < 8; o++)
        i.setUint8(o, t[e + o]);
    return i.getFloat64(0, !0)
}
function Rx(t) {
    const e = TA(t);
    let n = 0;
    const i = e[n];
    n += 1;
    const o = new DataView(e.buffer)
      , l = o.getUint32(n, i === 1);
    if (n += 4,
    l & 536870912 && (o.getUint32(n, i === 1),
    n += 4),
    (l & 65535) === 1) {
        const c = iy(e, n);
        n += 8;
        const d = iy(e, n);
        return n += 8,
        [c, d]
    }
    throw new Error("Unsupported geometry type")
}
class bA extends Ne {
    static[$] = "PgGeometryBuilder";
    constructor(e) {
        super(e, "array", "PgGeometry")
    }
    build(e) {
        return new CA(e,this.config)
    }
}
class CA extends Te {
    static[$] = "PgGeometry";
    getSQLType() {
        return "geometry(point)"
    }
    mapFromDriverValue(e) {
        return Rx(e)
    }
    mapToDriverValue(e) {
        return `point(${e[0]} ${e[1]})`
    }
}
class _A extends Ne {
    static[$] = "PgGeometryObjectBuilder";
    constructor(e) {
        super(e, "json", "PgGeometryObject")
    }
    build(e) {
        return new EA(e,this.config)
    }
}
class EA extends Te {
    static[$] = "PgGeometryObject";
    getSQLType() {
        return "geometry(point)"
    }
    mapFromDriverValue(e) {
        const n = Rx(e);
        return {
            x: n[0],
            y: n[1]
        }
    }
    mapToDriverValue(e) {
        return `point(${e.x} ${e.y})`
    }
}
function kA(t, e) {
    const {name: n, config: i} = ct(t, e);
    return !i?.mode || i.mode === "tuple" ? new bA(n) : new _A(n)
}
class AA extends Ne {
    static[$] = "PgRealBuilder";
    constructor(e, n) {
        super(e, "number", "PgReal"),
        this.config.length = n
    }
    build(e) {
        return new RA(e,this.config)
    }
}
class RA extends Te {
    static[$] = "PgReal";
    constructor(e, n) {
        super(e, n)
    }
    getSQLType() {
        return "real"
    }
    mapFromDriverValue = e=>typeof e == "string" ? Number.parseFloat(e) : e
}
function NA(t) {
    return new AA(t ?? "")
}
class MA extends Ne {
    static[$] = "PgSerialBuilder";
    constructor(e) {
        super(e, "number", "PgSerial"),
        this.config.hasDefault = !0,
        this.config.notNull = !0
    }
    build(e) {
        return new DA(e,this.config)
    }
}
class DA extends Te {
    static[$] = "PgSerial";
    getSQLType() {
        return "serial"
    }
}
function Nx(t) {
    return new MA(t ?? "")
}
class OA extends Ul {
    static[$] = "PgSmallIntBuilder";
    constructor(e) {
        super(e, "number", "PgSmallInt")
    }
    build(e) {
        return new IA(e,this.config)
    }
}
class IA extends Te {
    static[$] = "PgSmallInt";
    getSQLType() {
        return "smallint"
    }
    mapFromDriverValue = e=>typeof e == "string" ? Number(e) : e
}
function LA(t) {
    return new OA(t ?? "")
}
class jA extends Ne {
    static[$] = "PgSmallSerialBuilder";
    constructor(e) {
        super(e, "number", "PgSmallSerial"),
        this.config.hasDefault = !0,
        this.config.notNull = !0
    }
    build(e) {
        return new FA(e,this.config)
    }
}
class FA extends Te {
    static[$] = "PgSmallSerial";
    getSQLType() {
        return "smallserial"
    }
}
function VA(t) {
    return new jA(t ?? "")
}
class zA extends Ne {
    static[$] = "PgTextBuilder";
    constructor(e, n) {
        super(e, "string", "PgText"),
        this.config.enumValues = n.enum
    }
    build(e) {
        return new BA(e,this.config)
    }
}
class BA extends Te {
    static[$] = "PgText";
    enumValues = this.config.enumValues;
    getSQLType() {
        return "text"
    }
}
function $d(t, e={}) {
    const {name: n, config: i} = ct(t, e);
    return new zA(n,i)
}
class UA extends Ao {
    constructor(e, n, i) {
        super(e, "string", "PgTime"),
        this.withTimezone = n,
        this.precision = i,
        this.config.withTimezone = n,
        this.config.precision = i
    }
    static[$] = "PgTimeBuilder";
    build(e) {
        return new $A(e,this.config)
    }
}
class $A extends Te {
    static[$] = "PgTime";
    withTimezone;
    precision;
    constructor(e, n) {
        super(e, n),
        this.withTimezone = n.withTimezone,
        this.precision = n.precision
    }
    getSQLType() {
        return `time${this.precision === void 0 ? "" : `(${this.precision})`}${this.withTimezone ? " with time zone" : ""}`
    }
}
function WA(t, e={}) {
    const {name: n, config: i} = ct(t, e);
    return new UA(n,i.withTimezone ?? !1,i.precision)
}
class HA extends Ao {
    static[$] = "PgTimestampBuilder";
    constructor(e, n, i) {
        super(e, "date", "PgTimestamp"),
        this.config.withTimezone = n,
        this.config.precision = i
    }
    build(e) {
        return new QA(e,this.config)
    }
}
class QA extends Te {
    static[$] = "PgTimestamp";
    withTimezone;
    precision;
    constructor(e, n) {
        super(e, n),
        this.withTimezone = n.withTimezone,
        this.precision = n.precision
    }
    getSQLType() {
        return `timestamp${this.precision === void 0 ? "" : ` (${this.precision})`}${this.withTimezone ? " with time zone" : ""}`
    }
    mapFromDriverValue = e=>new Date(this.withTimezone ? e : e + "+0000");
    mapToDriverValue = e=>e.toISOString()
}
class KA extends Ao {
    static[$] = "PgTimestampStringBuilder";
    constructor(e, n, i) {
        super(e, "string", "PgTimestampString"),
        this.config.withTimezone = n,
        this.config.precision = i
    }
    build(e) {
        return new qA(e,this.config)
    }
}
class qA extends Te {
    static[$] = "PgTimestampString";
    withTimezone;
    precision;
    constructor(e, n) {
        super(e, n),
        this.withTimezone = n.withTimezone,
        this.precision = n.precision
    }
    getSQLType() {
        return `timestamp${this.precision === void 0 ? "" : `(${this.precision})`}${this.withTimezone ? " with time zone" : ""}`
    }
}
function Mx(t, e={}) {
    const {name: n, config: i} = ct(t, e);
    return i?.mode === "string" ? new KA(n,i.withTimezone ?? !1,i.precision) : new HA(n,i?.withTimezone ?? !1,i?.precision)
}
class ZA extends Ne {
    static[$] = "PgUUIDBuilder";
    constructor(e) {
        super(e, "string", "PgUUID")
    }
    defaultRandom() {
        return this.default(Sl`gen_random_uuid()`)
    }
    build(e) {
        return new GA(e,this.config)
    }
}
class GA extends Te {
    static[$] = "PgUUID";
    getSQLType() {
        return "uuid"
    }
}
function XA(t) {
    return new ZA(t ?? "")
}
class YA extends Ne {
    static[$] = "PgVarcharBuilder";
    constructor(e, n) {
        super(e, "string", "PgVarchar"),
        this.config.length = n.length,
        this.config.enumValues = n.enum
    }
    build(e) {
        return new JA(e,this.config)
    }
}
class JA extends Te {
    static[$] = "PgVarchar";
    length = this.config.length;
    enumValues = this.config.enumValues;
    getSQLType() {
        return this.length === void 0 ? "varchar" : `varchar(${this.length})`
    }
}
function eR(t, e={}) {
    const {name: n, config: i} = ct(t, e);
    return new YA(n,i)
}
class tR extends Ne {
    static[$] = "PgBinaryVectorBuilder";
    constructor(e, n) {
        super(e, "string", "PgBinaryVector"),
        this.config.dimensions = n.dimensions
    }
    build(e) {
        return new nR(e,this.config)
    }
}
class nR extends Te {
    static[$] = "PgBinaryVector";
    dimensions = this.config.dimensions;
    getSQLType() {
        return `bit(${this.dimensions})`
    }
}
function rR(t, e) {
    const {name: n, config: i} = ct(t, e);
    return new tR(n,i)
}
class sR extends Ne {
    static[$] = "PgHalfVectorBuilder";
    constructor(e, n) {
        super(e, "array", "PgHalfVector"),
        this.config.dimensions = n.dimensions
    }
    build(e) {
        return new iR(e,this.config)
    }
}
class iR extends Te {
    static[$] = "PgHalfVector";
    dimensions = this.config.dimensions;
    getSQLType() {
        return `halfvec(${this.dimensions})`
    }
    mapToDriverValue(e) {
        return JSON.stringify(e)
    }
    mapFromDriverValue(e) {
        return e.slice(1, -1).split(",").map(n=>Number.parseFloat(n))
    }
}
function oR(t, e) {
    const {name: n, config: i} = ct(t, e);
    return new sR(n,i)
}
class aR extends Ne {
    static[$] = "PgSparseVectorBuilder";
    constructor(e, n) {
        super(e, "string", "PgSparseVector"),
        this.config.dimensions = n.dimensions
    }
    build(e) {
        return new lR(e,this.config)
    }
}
class lR extends Te {
    static[$] = "PgSparseVector";
    dimensions = this.config.dimensions;
    getSQLType() {
        return `sparsevec(${this.dimensions})`
    }
}
function uR(t, e) {
    const {name: n, config: i} = ct(t, e);
    return new aR(n,i)
}
class cR extends Ne {
    static[$] = "PgVectorBuilder";
    constructor(e, n) {
        super(e, "array", "PgVector"),
        this.config.dimensions = n.dimensions
    }
    build(e) {
        return new dR(e,this.config)
    }
}
class dR extends Te {
    static[$] = "PgVector";
    dimensions = this.config.dimensions;
    getSQLType() {
        return `vector(${this.dimensions})`
    }
    mapToDriverValue(e) {
        return JSON.stringify(e)
    }
    mapFromDriverValue(e) {
        return e.slice(1, -1).split(",").map(n=>Number.parseFloat(n))
    }
}
function fR(t, e) {
    const {name: n, config: i} = ct(t, e);
    return new cR(n,i)
}
function hR() {
    return {
        bigint: yk,
        bigserial: Pk,
        boolean: Ck,
        char: kk,
        cidr: Nk,
        customType: Ok,
        date: Vk,
        doublePrecision: Uk,
        inet: Hk,
        integer: qk,
        interval: Xk,
        json: eA,
        jsonb: rA,
        line: lA,
        macaddr: dA,
        macaddr8: pA,
        numeric: yA,
        point: PA,
        geometry: kA,
        real: NA,
        serial: Nx,
        smallint: LA,
        smallserial: VA,
        text: $d,
        time: WA,
        timestamp: Mx,
        uuid: XA,
        varchar: eR,
        bit: rR,
        halfvec: oR,
        sparsevec: uR,
        vector: fR
    }
}
const Wd = Symbol.for("drizzle:PgInlineForeignKeys")
  , oy = Symbol.for("drizzle:EnableRLS");
class ay extends Bt {
    static[$] = "PgTable";
    static Symbol = Object.assign({}, Bt.Symbol, {
        InlineForeignKeys: Wd,
        EnableRLS: oy
    });
    [Wd] = [];
    [oy] = !1;
    [Bt.Symbol.ExtraConfigBuilder] = void 0
}
function pR(t, e, n, i, o=t) {
    const l = new ay(t,i,o)
      , c = typeof e == "function" ? e(hR()) : e
      , d = Object.fromEntries(Object.entries(c).map(([m,y])=>{
        const v = y;
        v.setName(m);
        const w = v.build(l);
        return l[Wd].push(...v.buildForeignKeys(w, l)),
        [m, w]
    }
    ))
      , h = Object.fromEntries(Object.entries(c).map(([m,y])=>{
        const v = y;
        v.setName(m);
        const w = v.buildExtraConfigColumn(l);
        return [m, w]
    }
    ))
      , p = Object.assign(l, d);
    return p[Bt.Symbol.Columns] = d,
    p[Bt.Symbol.ExtraConfigColumns] = h,
    Object.assign(p, {
        enableRLS: ()=>(p[ay.Symbol.EnableRLS] = !0,
        p)
    })
}
const mR = (t,e,n)=>pR(t, e, n, void 0)
  , Qe = {
    INT8_MIN: -128,
    INT8_MAX: 127,
    INT8_UNSIGNED_MAX: 255,
    INT16_MIN: -32768,
    INT16_MAX: 32767,
    INT16_UNSIGNED_MAX: 65535,
    INT24_MIN: -8388608,
    INT24_MAX: 8388607,
    INT24_UNSIGNED_MAX: 16777215,
    INT32_MIN: -2147483648,
    INT32_MAX: 2147483647,
    INT32_UNSIGNED_MAX: 4294967295,
    INT48_MIN: -0x800000000000,
    INT48_MAX: 0x7fffffffffff,
    INT48_UNSIGNED_MAX: 0xffffffffffff,
    INT64_MIN: -9223372036854775808n,
    INT64_MAX: 9223372036854775807n,
    INT64_UNSIGNED_MAX: 18446744073709551615n
};
function tt(t, e) {
    return e.includes(t.columnType)
}
function gR(t) {
    return "enumValues"in t && Array.isArray(t.enumValues) && t.enumValues.length > 0
}
const yR = Le.union([Le.string(), Le.number(), Le.boolean(), Le.null()])
  , vR = Le.union([yR, Le.record(Le.any()), Le.array(Le.any())])
  , xR = Le.custom(t=>t instanceof Buffer);
function Dx(t, e) {
    const n = e?.zodInstance ?? Le
      , i = e?.coerce ?? {};
    let o;
    return gR(t) && (o = t.enumValues.length ? n.enum(t.enumValues) : n.string()),
    o || (tt(t, ["PgGeometry", "PgPointTuple"]) ? o = n.tuple([n.number(), n.number()]) : tt(t, ["PgGeometryObject", "PgPointObject"]) ? o = n.object({
        x: n.number(),
        y: n.number()
    }) : tt(t, ["PgHalfVector", "PgVector"]) ? (o = n.array(n.number()),
    o = t.dimensions ? o.length(t.dimensions) : o) : tt(t, ["PgLine"]) ? o = n.tuple([n.number(), n.number(), n.number()]) : tt(t, ["PgLineABC"]) ? o = n.object({
        a: n.number(),
        b: n.number(),
        c: n.number()
    }) : tt(t, ["PgArray"]) ? (o = n.array(Dx(t.baseColumn, n)),
    o = t.size ? o.length(t.size) : o) : t.dataType === "array" ? o = n.array(n.any()) : t.dataType === "number" ? o = wR(t, n, i) : t.dataType === "bigint" ? o = SR(t, n, i) : t.dataType === "boolean" ? o = i === !0 || i.boolean ? n.coerce.boolean() : n.boolean() : t.dataType === "date" ? o = i === !0 || i.date ? n.coerce.date() : n.date() : t.dataType === "string" ? o = PR(t, n, i) : t.dataType === "json" ? o = vR : t.dataType === "custom" ? o = n.any() : t.dataType === "buffer" && (o = xR)),
    o || (o = n.any()),
    o
}
function wR(t, e, n) {
    let i = t.getSQLType().includes("unsigned"), o, l, c = !1;
    tt(t, ["MySqlTinyInt", "SingleStoreTinyInt"]) ? (o = i ? 0 : Qe.INT8_MIN,
    l = i ? Qe.INT8_UNSIGNED_MAX : Qe.INT8_MAX,
    c = !0) : tt(t, ["PgSmallInt", "PgSmallSerial", "MySqlSmallInt", "SingleStoreSmallInt"]) ? (o = i ? 0 : Qe.INT16_MIN,
    l = i ? Qe.INT16_UNSIGNED_MAX : Qe.INT16_MAX,
    c = !0) : tt(t, ["PgReal", "MySqlFloat", "MySqlMediumInt", "SingleStoreMediumInt", "SingleStoreFloat"]) ? (o = i ? 0 : Qe.INT24_MIN,
    l = i ? Qe.INT24_UNSIGNED_MAX : Qe.INT24_MAX,
    c = tt(t, ["MySqlMediumInt", "SingleStoreMediumInt"])) : tt(t, ["PgInteger", "PgSerial", "MySqlInt", "SingleStoreInt"]) ? (o = i ? 0 : Qe.INT32_MIN,
    l = i ? Qe.INT32_UNSIGNED_MAX : Qe.INT32_MAX,
    c = !0) : tt(t, ["PgDoublePrecision", "MySqlReal", "MySqlDouble", "SingleStoreReal", "SingleStoreDouble", "SQLiteReal"]) ? (o = i ? 0 : Qe.INT48_MIN,
    l = i ? Qe.INT48_UNSIGNED_MAX : Qe.INT48_MAX) : tt(t, ["PgBigInt53", "PgBigSerial53", "MySqlBigInt53", "MySqlSerial", "SingleStoreBigInt53", "SingleStoreSerial", "SQLiteInteger"]) ? (i = i || tt(t, ["MySqlSerial", "SingleStoreSerial"]),
    o = i ? 0 : Number.MIN_SAFE_INTEGER,
    l = Number.MAX_SAFE_INTEGER,
    c = !0) : tt(t, ["MySqlYear", "SingleStoreYear"]) ? (o = 1901,
    l = 2155,
    c = !0) : (o = Number.MIN_SAFE_INTEGER,
    l = Number.MAX_SAFE_INTEGER);
    let d = n === !0 || n?.number ? e.coerce.number() : e.number();
    return d = d.min(o).max(l),
    c ? d.int() : d
}
function SR(t, e, n) {
    const i = t.getSQLType().includes("unsigned")
      , o = i ? 0n : Qe.INT64_MIN
      , l = i ? Qe.INT64_UNSIGNED_MAX : Qe.INT64_MAX;
    return (n === !0 || n?.bigint ? e.coerce.bigint() : e.bigint()).min(o).max(l)
}
function PR(t, e, n) {
    if (tt(t, ["PgUUID"]))
        return e.string().uuid();
    let i, o, l = !1;
    tt(t, ["PgVarchar", "SQLiteText"]) ? i = t.length : tt(t, ["MySqlVarChar", "SingleStoreVarChar"]) ? i = t.length ?? Qe.INT16_UNSIGNED_MAX : tt(t, ["MySqlText", "SingleStoreText"]) && (t.textType === "longtext" ? i = Qe.INT32_UNSIGNED_MAX : t.textType === "mediumtext" ? i = Qe.INT24_UNSIGNED_MAX : t.textType === "text" ? i = Qe.INT16_UNSIGNED_MAX : i = Qe.INT8_UNSIGNED_MAX),
    tt(t, ["PgChar", "MySqlChar", "SingleStoreChar"]) && (i = t.length,
    l = !0),
    tt(t, ["PgBinaryVector"]) && (o = /^[01]+$/,
    i = t.dimensions);
    let c = n === !0 || n?.string ? e.coerce.string() : e.string();
    return c = o ? c.regex(o) : c,
    i && l ? c.length(i) : i ? c.max(i) : c
}
function Ox(t) {
    return Cx(t) ? dk(t) : fk(t)
}
function Ix(t, e, n, i) {
    const o = {};
    for (const [l,c] of Object.entries(t)) {
        if (!ht(c, So) && !ht(c, Xe) && !ht(c, Xe.Aliased) && typeof c == "object") {
            const y = Cx(c) || ck(c) ? Ox(c) : c;
            o[l] = Ix(y, e[l] ?? {}, n, i);
            continue
        }
        const d = e[l];
        if (d !== void 0 && typeof d != "function") {
            o[l] = d;
            continue
        }
        const h = ht(c, So) ? c : void 0
          , p = h ? Dx(h, i) : Le.any()
          , m = typeof d == "function" ? d(p) : p;
        n.never(h) || (o[l] = m,
        h && (n.nullable(h) && (o[l] = o[l].nullable()),
        n.optional(h) && (o[l] = o[l].optional())))
    }
    return Le.object(o)
}
const TR = {
    never: t=>t?.generated?.type === "always" || t?.generatedIdentity?.type === "always",
    optional: t=>!t.notNull || t.notNull && t.hasDefault,
    nullable: t=>!t.notNull
}
  , bR = (t,e)=>{
    const n = Ox(t);
    return Ix(n, {}, TR)
}
  , CR = mR("proxy_history", {
    id: Nx("id").primaryKey(),
    url: $d("url").notNull(),
    title: $d("title"),
    visitedAt: Mx("visited_at").defaultNow()
})
  , _R = bR(CR).omit({
    id: !0,
    visitedAt: !0
})
  , ad = {
    validation: Le.object({
        message: Le.string(),
        field: Le.string().optional()
    }),
    notFound: Le.object({
        message: Le.string()
    }),
    internal: Le.object({
        message: Le.string()
    })
}
  , Dt = {
    proxy: {
        fetch: {
            method: "POST",
            path: "/api/proxy",
            input: Le.object({
                url: Le.string().url()
            }),
            responses: {
                200: Le.object({
                    content: Le.string(),
                    contentType: Le.string()
                }),
                400: ad.validation,
                500: ad.internal
            }
        }
    },
    history: {
        list: {
            path: "/api/history",
            responses: {
                200: Le.array(Le.custom())
            }
        },
        create: {
            method: "POST",
            path: "/api/history",
            input: _R,
            responses: {
                201: Le.custom(),
                400: ad.validation
            }
        }
    }
};
function ER() {
    return qv({
        mutationFn: async t=>{
            const e = await fetch(Dt.proxy.fetch.path, {
                method: Dt.proxy.fetch.method,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(t)
            });
            if (!e.ok) {
                if (e.status === 400) {
                    const n = Dt.proxy.fetch.responses[400].parse(await e.json());
                    throw new Error(n.message)
                }
                if (e.status === 500) {
                    const n = Dt.proxy.fetch.responses[500].parse(await e.json());
                    throw new Error(n.message)
                }
                throw new Error("Failed to fetch proxy content")
            }
            return Dt.proxy.fetch.responses[200].parse(await e.json())
        }
    })
}
function kR() {
    return xT({
        queryKey: [Dt.history.list.path],
        queryFn: async()=>{
            const t = await fetch(Dt.history.list.path);
            if (!t.ok)
                throw new Error("Failed to fetch history");
            return Dt.history.list.responses[200].parse(await t.json())
        }
    })
}
function AR() {
    const t = mf();
    return qv({
        mutationFn: async e=>{
            const n = Dt.history.create.input.parse(e)
              , i = await fetch(Dt.history.create.path, {
                method: Dt.history.create.method,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(n)
            });
            if (!i.ok) {
                if (i.status === 400) {
                    const o = Dt.history.create.responses[400].parse(await i.json());
                    throw new Error(o.message)
                }
                throw new Error("Failed to create history entry")
            }
            return Dt.history.create.responses[201].parse(await i.json())
        }
        ,
        onSuccess: ()=>{
            t.invalidateQueries({
                queryKey: [Dt.history.list.path]
            })
        }
    })
}
const RR = b0("inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 hover:shadow-primary/40",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-sm",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline",
            gradient: "bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 shadow-lg shadow-primary/25 hover:shadow-accent/40 border-0"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-12 rounded-xl px-8 text-base",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
})
  , Ji = S.forwardRef(({className: t, variant: e, size: n, asChild: i=!1, ...o},l)=>{
    const c = i ? RT : "button";
    return A.jsx(c, {
        className: It(RR({
            variant: e,
            size: n,
            className: t
        })),
        ref: l,
        ...o
    })
}
);
Ji.displayName = "Button";
const Of = S.createContext({});
function If(t) {
    const e = S.useRef(null);
    return e.current === null && (e.current = t()),
    e.current
}
const $l = S.createContext(null)
  , Lf = S.createContext({
    transformPagePoint: t=>t,
    isStatic: !1,
    reducedMotion: "never"
});
class NR extends S.Component {
    getSnapshotBeforeUpdate(e) {
        const n = this.props.childRef.current;
        if (n && e.isPresent && !this.props.isPresent) {
            const i = this.props.sizeRef.current;
            i.height = n.offsetHeight || 0,
            i.width = n.offsetWidth || 0,
            i.top = n.offsetTop,
            i.left = n.offsetLeft
        }
        return null
    }
    componentDidUpdate() {}
    render() {
        return this.props.children
    }
}
function MR({children: t, isPresent: e}) {
    const n = S.useId()
      , i = S.useRef(null)
      , o = S.useRef({
        width: 0,
        height: 0,
        top: 0,
        left: 0
    })
      , {nonce: l} = S.useContext(Lf);
    return S.useInsertionEffect(()=>{
        const {width: c, height: d, top: h, left: p} = o.current;
        if (e || !i.current || !c || !d)
            return;
        i.current.dataset.motionPopId = n;
        const m = document.createElement("style");
        return l && (m.nonce = l),
        document.head.appendChild(m),
        m.sheet && m.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${c}px !important;
            height: ${d}px !important;
            top: ${h}px !important;
            left: ${p}px !important;
          }
        `),
        ()=>{
            document.head.removeChild(m)
        }
    }
    , [e]),
    A.jsx(NR, {
        isPresent: e,
        childRef: i,
        sizeRef: o,
        children: S.cloneElement(t, {
            ref: i
        })
    })
}
const DR = ({children: t, initial: e, isPresent: n, onExitComplete: i, custom: o, presenceAffectsLayout: l, mode: c})=>{
    const d = If(OR)
      , h = S.useId()
      , p = S.useCallback(y=>{
        d.set(y, !0);
        for (const v of d.values())
            if (!v)
                return;
        i && i()
    }
    , [d, i])
      , m = S.useMemo(()=>({
        id: h,
        initial: e,
        isPresent: n,
        custom: o,
        onExitComplete: p,
        register: y=>(d.set(y, !1),
        ()=>d.delete(y))
    }), l ? [Math.random(), p] : [n, p]);
    return S.useMemo(()=>{
        d.forEach((y,v)=>d.set(v, !1))
    }
    , [n]),
    S.useEffect(()=>{
        !n && !d.size && i && i()
    }
    , [n]),
    c === "popLayout" && (t = A.jsx(MR, {
        isPresent: n,
        children: t
    })),
    A.jsx($l.Provider, {
        value: m,
        children: t
    })
}
;
function OR() {
    return new Map
}
function Lx(t=!0) {
    const e = S.useContext($l);
    if (e === null)
        return [!0, null];
    const {isPresent: n, onExitComplete: i, register: o} = e
      , l = S.useId();
    S.useEffect(()=>{
        t && o(l)
    }
    , [t]);
    const c = S.useCallback(()=>t && i && i(l), [l, i, t]);
    return !n && i ? [!1, c] : [!0]
}
const qa = t=>t.key || "";
function ly(t) {
    const e = [];
    return S.Children.forEach(t, n=>{
        S.isValidElement(n) && e.push(n)
    }
    ),
    e
}
const jf = typeof window < "u"
  , jx = jf ? S.useLayoutEffect : S.useEffect
  , IR = ({children: t, custom: e, initial: n=!0, onExitComplete: i, presenceAffectsLayout: o=!0, mode: l="sync", propagate: c=!1})=>{
    const [d,h] = Lx(c)
      , p = S.useMemo(()=>ly(t), [t])
      , m = c && !d ? [] : p.map(qa)
      , y = S.useRef(!0)
      , v = S.useRef(p)
      , w = If(()=>new Map)
      , [C,P] = S.useState(p)
      , [T,k] = S.useState(p);
    jx(()=>{
        y.current = !1,
        v.current = p;
        for (let j = 0; j < T.length; j++) {
            const L = qa(T[j]);
            m.includes(L) ? w.delete(L) : w.get(L) !== !0 && w.set(L, !1)
        }
    }
    , [T, m.length, m.join("-")]);
    const N = [];
    if (p !== C) {
        let j = [...p];
        for (let L = 0; L < T.length; L++) {
            const V = T[L]
              , z = qa(V);
            m.includes(z) || (j.splice(L, 0, V),
            N.push(V))
        }
        l === "wait" && N.length && (j = N),
        k(ly(j)),
        P(p);
        return
    }
    const {forceRender: O} = S.useContext(Of);
    return A.jsx(A.Fragment, {
        children: T.map(j=>{
            const L = qa(j)
              , V = c && !d ? !1 : p === T || m.includes(L)
              , z = ()=>{
                if (w.has(L))
                    w.set(L, !0);
                else
                    return;
                let K = !0;
                w.forEach(ie=>{
                    ie || (K = !1)
                }
                ),
                K && (O?.(),
                k(v.current),
                c && h?.(),
                i && i())
            }
            ;
            return A.jsx(DR, {
                isPresent: V,
                initial: !y.current || n ? void 0 : !1,
                custom: V ? void 0 : e,
                presenceAffectsLayout: o,
                mode: l,
                onExitComplete: V ? void 0 : z,
                children: j
            }, L)
        }
        )
    })
}
  , Wt = t=>t;
let Fx = Wt;
function Ff(t) {
    let e;
    return ()=>(e === void 0 && (e = t()),
    e)
}
const Ks = (t,e,n)=>{
    const i = e - t;
    return i === 0 ? 1 : (n - t) / i
}
  , Hn = t=>t * 1e3
  , Qn = t=>t / 1e3
  , LR = {
    useManualTiming: !1
};
function jR(t) {
    let e = new Set
      , n = new Set
      , i = !1
      , o = !1;
    const l = new WeakSet;
    let c = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    };
    function d(p) {
        l.has(p) && (h.schedule(p),
        t()),
        p(c)
    }
    const h = {
        schedule: (p,m=!1,y=!1)=>{
            const w = y && i ? e : n;
            return m && l.add(p),
            w.has(p) || w.add(p),
            p
        }
        ,
        cancel: p=>{
            n.delete(p),
            l.delete(p)
        }
        ,
        process: p=>{
            if (c = p,
            i) {
                o = !0;
                return
            }
            i = !0,
            [e,n] = [n, e],
            e.forEach(d),
            e.clear(),
            i = !1,
            o && (o = !1,
            h.process(p))
        }
    };
    return h
}
const Za = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"]
  , FR = 40;
function Vx(t, e) {
    let n = !1
      , i = !0;
    const o = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , l = ()=>n = !0
      , c = Za.reduce((k,N)=>(k[N] = jR(l),
    k), {})
      , {read: d, resolveKeyframes: h, update: p, preRender: m, render: y, postRender: v} = c
      , w = ()=>{
        const k = performance.now();
        n = !1,
        o.delta = i ? 1e3 / 60 : Math.max(Math.min(k - o.timestamp, FR), 1),
        o.timestamp = k,
        o.isProcessing = !0,
        d.process(o),
        h.process(o),
        p.process(o),
        m.process(o),
        y.process(o),
        v.process(o),
        o.isProcessing = !1,
        n && e && (i = !1,
        t(w))
    }
      , C = ()=>{
        n = !0,
        i = !0,
        o.isProcessing || t(w)
    }
    ;
    return {
        schedule: Za.reduce((k,N)=>{
            const O = c[N];
            return k[N] = (j,L=!1,V=!1)=>(n || C(),
            O.schedule(j, L, V)),
            k
        }
        , {}),
        cancel: k=>{
            for (let N = 0; N < Za.length; N++)
                c[Za[N]].cancel(k)
        }
        ,
        state: o,
        steps: c
    }
}
const {schedule: Ue, cancel: Er, state: pt, steps: ld} = Vx(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Wt, !0)
  , zx = S.createContext({
    strict: !1
})
  , uy = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
}
  , qs = {};
for (const t in uy)
    qs[t] = {
        isEnabled: e=>uy[t].some(n=>!!e[n])
    };
function VR(t) {
    for (const e in t)
        qs[e] = {
            ...qs[e],
            ...t[e]
        }
}
const zR = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
function Pl(t) {
    return t.startsWith("while") || t.startsWith("drag") && t !== "draggable" || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || zR.has(t)
}
let Bx = t=>!Pl(t);
function BR(t) {
    t && (Bx = e=>e.startsWith("on") ? !Pl(e) : t(e))
}
try {
    BR(require("@emotion/is-prop-valid").default)
} catch {}
function UR(t, e, n) {
    const i = {};
    for (const o in t)
        o === "values" && typeof t.values == "object" || (Bx(o) || n === !0 && Pl(o) || !e && !Pl(o) || t.draggable && o.startsWith("onDrag")) && (i[o] = t[o]);
    return i
}
function $R(t) {
    if (typeof Proxy > "u")
        return t;
    const e = new Map
      , n = (...i)=>t(...i);
    return new Proxy(n,{
        get: (i,o)=>o === "create" ? t : (e.has(o) || e.set(o, t(o)),
        e.get(o))
    })
}
const Wl = S.createContext({});
function Po(t) {
    return typeof t == "string" || Array.isArray(t)
}
function Hl(t) {
    return t !== null && typeof t == "object" && typeof t.start == "function"
}
const Vf = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
  , zf = ["initial", ...Vf];
function Ql(t) {
    return Hl(t.animate) || zf.some(e=>Po(t[e]))
}
function Ux(t) {
    return !!(Ql(t) || t.variants)
}
function WR(t, e) {
    if (Ql(t)) {
        const {initial: n, animate: i} = t;
        return {
            initial: n === !1 || Po(n) ? n : void 0,
            animate: Po(i) ? i : void 0
        }
    }
    return t.inherit !== !1 ? e : {}
}
function HR(t) {
    const {initial: e, animate: n} = WR(t, S.useContext(Wl));
    return S.useMemo(()=>({
        initial: e,
        animate: n
    }), [cy(e), cy(n)])
}
function cy(t) {
    return Array.isArray(t) ? t.join(" ") : t
}
const QR = Symbol.for("motionComponentSymbol");
function Ns(t) {
    return t && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current")
}
function KR(t, e, n) {
    return S.useCallback(i=>{
        i && t.onMount && t.onMount(i),
        e && (i ? e.mount(i) : e.unmount()),
        n && (typeof n == "function" ? n(i) : Ns(n) && (n.current = i))
    }
    , [e])
}
const Bf = t=>t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase()
  , qR = "framerAppearId"
  , $x = "data-" + Bf(qR)
  , {schedule: Uf} = Vx(queueMicrotask, !1)
  , Wx = S.createContext({});
function ZR(t, e, n, i, o) {
    var l, c;
    const {visualElement: d} = S.useContext(Wl)
      , h = S.useContext(zx)
      , p = S.useContext($l)
      , m = S.useContext(Lf).reducedMotion
      , y = S.useRef(null);
    i = i || h.renderer,
    !y.current && i && (y.current = i(t, {
        visualState: e,
        parent: d,
        props: n,
        presenceContext: p,
        blockInitialAnimation: p ? p.initial === !1 : !1,
        reducedMotionConfig: m
    }));
    const v = y.current
      , w = S.useContext(Wx);
    v && !v.projection && o && (v.type === "html" || v.type === "svg") && GR(y.current, n, o, w);
    const C = S.useRef(!1);
    S.useInsertionEffect(()=>{
        v && C.current && v.update(n, p)
    }
    );
    const P = n[$x]
      , T = S.useRef(!!P && !(!((l = window.MotionHandoffIsComplete) === null || l === void 0) && l.call(window, P)) && ((c = window.MotionHasOptimisedAnimation) === null || c === void 0 ? void 0 : c.call(window, P)));
    return jx(()=>{
        v && (C.current = !0,
        window.MotionIsMounted = !0,
        v.updateFeatures(),
        Uf.render(v.render),
        T.current && v.animationState && v.animationState.animateChanges())
    }
    ),
    S.useEffect(()=>{
        v && (!T.current && v.animationState && v.animationState.animateChanges(),
        T.current && (queueMicrotask(()=>{
            var k;
            (k = window.MotionHandoffMarkAsComplete) === null || k === void 0 || k.call(window, P)
        }
        ),
        T.current = !1))
    }
    ),
    v
}
function GR(t, e, n, i) {
    const {layoutId: o, layout: l, drag: c, dragConstraints: d, layoutScroll: h, layoutRoot: p} = e;
    t.projection = new n(t.latestValues,e["data-framer-portal-id"] ? void 0 : Hx(t.parent)),
    t.projection.setOptions({
        layoutId: o,
        layout: l,
        alwaysMeasureLayout: !!c || d && Ns(d),
        visualElement: t,
        animationType: typeof l == "string" ? l : "both",
        initialPromotionConfig: i,
        layoutScroll: h,
        layoutRoot: p
    })
}
function Hx(t) {
    if (t)
        return t.options.allowProjection !== !1 ? t.projection : Hx(t.parent)
}
function XR({preloadedFeatures: t, createVisualElement: e, useRender: n, useVisualState: i, Component: o}) {
    var l, c;
    t && VR(t);
    function d(p, m) {
        let y;
        const v = {
            ...S.useContext(Lf),
            ...p,
            layoutId: YR(p)
        }
          , {isStatic: w} = v
          , C = HR(p)
          , P = i(p, w);
        if (!w && jf) {
            JR();
            const T = eN(v);
            y = T.MeasureLayout,
            C.visualElement = ZR(o, P, v, e, T.ProjectionNode)
        }
        return A.jsxs(Wl.Provider, {
            value: C,
            children: [y && C.visualElement ? A.jsx(y, {
                visualElement: C.visualElement,
                ...v
            }) : null, n(o, p, KR(P, C.visualElement, m), P, w, C.visualElement)]
        })
    }
    d.displayName = `motion.${typeof o == "string" ? o : `create(${(c = (l = o.displayName) !== null && l !== void 0 ? l : o.name) !== null && c !== void 0 ? c : ""})`}`;
    const h = S.forwardRef(d);
    return h[QR] = o,
    h
}
function YR({layoutId: t}) {
    const e = S.useContext(Of).id;
    return e && t !== void 0 ? e + "-" + t : t
}
function JR(t, e) {
    S.useContext(zx).strict
}
function eN(t) {
    const {drag: e, layout: n} = qs;
    if (!e && !n)
        return {};
    const i = {
        ...e,
        ...n
    };
    return {
        MeasureLayout: e?.isEnabled(t) || n?.isEnabled(t) ? i.MeasureLayout : void 0,
        ProjectionNode: i.ProjectionNode
    }
}
const tN = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function $f(t) {
    return typeof t != "string" || t.includes("-") ? !1 : !!(tN.indexOf(t) > -1 || /[A-Z]/u.test(t))
}
function dy(t) {
    const e = [{}, {}];
    return t?.values.forEach((n,i)=>{
        e[0][i] = n.get(),
        e[1][i] = n.getVelocity()
    }
    ),
    e
}
function Wf(t, e, n, i) {
    if (typeof e == "function") {
        const [o,l] = dy(i);
        e = e(n !== void 0 ? n : t.custom, o, l)
    }
    if (typeof e == "string" && (e = t.variants && t.variants[e]),
    typeof e == "function") {
        const [o,l] = dy(i);
        e = e(n !== void 0 ? n : t.custom, o, l)
    }
    return e
}
const Hd = t=>Array.isArray(t)
  , nN = t=>!!(t && typeof t == "object" && t.mix && t.toValue)
  , rN = t=>Hd(t) ? t[t.length - 1] || 0 : t
  , St = t=>!!(t && t.getVelocity);
function nl(t) {
    const e = St(t) ? t.get() : t;
    return nN(e) ? e.toValue() : e
}
function sN({scrapeMotionValuesFromProps: t, createRenderState: e, onUpdate: n}, i, o, l) {
    const c = {
        latestValues: iN(i, o, l, t),
        renderState: e()
    };
    return n && (c.onMount = d=>n({
        props: i,
        current: d,
        ...c
    }),
    c.onUpdate = d=>n(d)),
    c
}
const Qx = t=>(e,n)=>{
    const i = S.useContext(Wl)
      , o = S.useContext($l)
      , l = ()=>sN(t, e, i, o);
    return n ? l() : If(l)
}
;
function iN(t, e, n, i) {
    const o = {}
      , l = i(t, {});
    for (const v in l)
        o[v] = nl(l[v]);
    let {initial: c, animate: d} = t;
    const h = Ql(t)
      , p = Ux(t);
    e && p && !h && t.inherit !== !1 && (c === void 0 && (c = e.initial),
    d === void 0 && (d = e.animate));
    let m = n ? n.initial === !1 : !1;
    m = m || c === !1;
    const y = m ? d : c;
    if (y && typeof y != "boolean" && !Hl(y)) {
        const v = Array.isArray(y) ? y : [y];
        for (let w = 0; w < v.length; w++) {
            const C = Wf(t, v[w]);
            if (C) {
                const {transitionEnd: P, transition: T, ...k} = C;
                for (const N in k) {
                    let O = k[N];
                    if (Array.isArray(O)) {
                        const j = m ? O.length - 1 : 0;
                        O = O[j]
                    }
                    O !== null && (o[N] = O)
                }
                for (const N in P)
                    o[N] = P[N]
            }
        }
    }
    return o
}
const ei = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
  , ns = new Set(ei)
  , Kx = t=>e=>typeof e == "string" && e.startsWith(t)
  , qx = Kx("--")
  , oN = Kx("var(--")
  , Hf = t=>oN(t) ? aN.test(t.split("/*")[0].trim()) : !1
  , aN = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu
  , Zx = (t,e)=>e && typeof t == "number" ? e.transform(t) : t
  , Gn = (t,e,n)=>n > e ? e : n < t ? t : n
  , ti = {
    test: t=>typeof t == "number",
    parse: parseFloat,
    transform: t=>t
}
  , To = {
    ...ti,
    transform: t=>Gn(0, 1, t)
}
  , Ga = {
    ...ti,
    default: 1
}
  , Ro = t=>({
    test: e=>typeof e == "string" && e.endsWith(t) && e.split(" ").length === 1,
    parse: parseFloat,
    transform: e=>`${e}${t}`
})
  , xr = Ro("deg")
  , _n = Ro("%")
  , fe = Ro("px")
  , lN = Ro("vh")
  , uN = Ro("vw")
  , fy = {
    ..._n,
    parse: t=>_n.parse(t) / 100,
    transform: t=>_n.transform(t * 100)
}
  , cN = {
    borderWidth: fe,
    borderTopWidth: fe,
    borderRightWidth: fe,
    borderBottomWidth: fe,
    borderLeftWidth: fe,
    borderRadius: fe,
    radius: fe,
    borderTopLeftRadius: fe,
    borderTopRightRadius: fe,
    borderBottomRightRadius: fe,
    borderBottomLeftRadius: fe,
    width: fe,
    maxWidth: fe,
    height: fe,
    maxHeight: fe,
    top: fe,
    right: fe,
    bottom: fe,
    left: fe,
    padding: fe,
    paddingTop: fe,
    paddingRight: fe,
    paddingBottom: fe,
    paddingLeft: fe,
    margin: fe,
    marginTop: fe,
    marginRight: fe,
    marginBottom: fe,
    marginLeft: fe,
    backgroundPositionX: fe,
    backgroundPositionY: fe
}
  , dN = {
    rotate: xr,
    rotateX: xr,
    rotateY: xr,
    rotateZ: xr,
    scale: Ga,
    scaleX: Ga,
    scaleY: Ga,
    scaleZ: Ga,
    skew: xr,
    skewX: xr,
    skewY: xr,
    distance: fe,
    translateX: fe,
    translateY: fe,
    translateZ: fe,
    x: fe,
    y: fe,
    z: fe,
    perspective: fe,
    transformPerspective: fe,
    opacity: To,
    originX: fy,
    originY: fy,
    originZ: fe
}
  , hy = {
    ...ti,
    transform: Math.round
}
  , Qf = {
    ...cN,
    ...dN,
    zIndex: hy,
    size: fe,
    fillOpacity: To,
    strokeOpacity: To,
    numOctaves: hy
}
  , fN = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
}
  , hN = ei.length;
function pN(t, e, n) {
    let i = ""
      , o = !0;
    for (let l = 0; l < hN; l++) {
        const c = ei[l]
          , d = t[c];
        if (d === void 0)
            continue;
        let h = !0;
        if (typeof d == "number" ? h = d === (c.startsWith("scale") ? 1 : 0) : h = parseFloat(d) === 0,
        !h || n) {
            const p = Zx(d, Qf[c]);
            if (!h) {
                o = !1;
                const m = fN[c] || c;
                i += `${m}(${p}) `
            }
            n && (e[c] = p)
        }
    }
    return i = i.trim(),
    n ? i = n(e, o ? "" : i) : o && (i = "none"),
    i
}
function Kf(t, e, n) {
    const {style: i, vars: o, transformOrigin: l} = t;
    let c = !1
      , d = !1;
    for (const h in e) {
        const p = e[h];
        if (ns.has(h)) {
            c = !0;
            continue
        } else if (qx(h)) {
            o[h] = p;
            continue
        } else {
            const m = Zx(p, Qf[h]);
            h.startsWith("origin") ? (d = !0,
            l[h] = m) : i[h] = m
        }
    }
    if (e.transform || (c || n ? i.transform = pN(e, t.transform, n) : i.transform && (i.transform = "none")),
    d) {
        const {originX: h="50%", originY: p="50%", originZ: m=0} = l;
        i.transformOrigin = `${h} ${p} ${m}`
    }
}
const mN = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
}
  , gN = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
};
function yN(t, e, n=1, i=0, o=!0) {
    t.pathLength = 1;
    const l = o ? mN : gN;
    t[l.offset] = fe.transform(-i);
    const c = fe.transform(e)
      , d = fe.transform(n);
    t[l.array] = `${c} ${d}`
}
function py(t, e, n) {
    return typeof t == "string" ? t : fe.transform(e + n * t)
}
function vN(t, e, n) {
    const i = py(e, t.x, t.width)
      , o = py(n, t.y, t.height);
    return `${i} ${o}`
}
function qf(t, {attrX: e, attrY: n, attrScale: i, originX: o, originY: l, pathLength: c, pathSpacing: d=1, pathOffset: h=0, ...p}, m, y) {
    if (Kf(t, p, y),
    m) {
        t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
        return
    }
    t.attrs = t.style,
    t.style = {};
    const {attrs: v, style: w, dimensions: C} = t;
    v.transform && (C && (w.transform = v.transform),
    delete v.transform),
    C && (o !== void 0 || l !== void 0 || w.transform) && (w.transformOrigin = vN(C, o !== void 0 ? o : .5, l !== void 0 ? l : .5)),
    e !== void 0 && (v.x = e),
    n !== void 0 && (v.y = n),
    i !== void 0 && (v.scale = i),
    c !== void 0 && yN(v, c, d, h, !1)
}
const Zf = ()=>({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
})
  , Gx = ()=>({
    ...Zf(),
    attrs: {}
})
  , Gf = t=>typeof t == "string" && t.toLowerCase() === "svg";
function Xx(t, {style: e, vars: n}, i, o) {
    Object.assign(t.style, e, o && o.getProjectionStyles(i));
    for (const l in n)
        t.style.setProperty(l, n[l])
}
const Yx = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
function Jx(t, e, n, i) {
    Xx(t, e, void 0, i);
    for (const o in e.attrs)
        t.setAttribute(Yx.has(o) ? o : Bf(o), e.attrs[o])
}
const Tl = {};
function xN(t) {
    Object.assign(Tl, t)
}
function ew(t, {layout: e, layoutId: n}) {
    return ns.has(t) || t.startsWith("origin") || (e || n !== void 0) && (!!Tl[t] || t === "opacity")
}
function Xf(t, e, n) {
    var i;
    const {style: o} = t
      , l = {};
    for (const c in o)
        (St(o[c]) || e.style && St(e.style[c]) || ew(c, t) || ((i = n?.getValue(c)) === null || i === void 0 ? void 0 : i.liveStyle) !== void 0) && (l[c] = o[c]);
    return l
}
function tw(t, e, n) {
    const i = Xf(t, e, n);
    for (const o in t)
        if (St(t[o]) || St(e[o])) {
            const l = ei.indexOf(o) !== -1 ? "attr" + o.charAt(0).toUpperCase() + o.substring(1) : o;
            i[l] = t[o]
        }
    return i
}
function wN(t, e) {
    try {
        e.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect()
    } catch {
        e.dimensions = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        }
    }
}
const my = ["x", "y", "width", "height", "cx", "cy", "r"]
  , SN = {
    useVisualState: Qx({
        scrapeMotionValuesFromProps: tw,
        createRenderState: Gx,
        onUpdate: ({props: t, prevProps: e, current: n, renderState: i, latestValues: o})=>{
            if (!n)
                return;
            let l = !!t.drag;
            if (!l) {
                for (const d in o)
                    if (ns.has(d)) {
                        l = !0;
                        break
                    }
            }
            if (!l)
                return;
            let c = !e;
            if (e)
                for (let d = 0; d < my.length; d++) {
                    const h = my[d];
                    t[h] !== e[h] && (c = !0)
                }
            c && Ue.read(()=>{
                wN(n, i),
                Ue.render(()=>{
                    qf(i, o, Gf(n.tagName), t.transformTemplate),
                    Jx(n, i)
                }
                )
            }
            )
        }
    })
}
  , PN = {
    useVisualState: Qx({
        scrapeMotionValuesFromProps: Xf,
        createRenderState: Zf
    })
};
function nw(t, e, n) {
    for (const i in e)
        !St(e[i]) && !ew(i, n) && (t[i] = e[i])
}
function TN({transformTemplate: t}, e) {
    return S.useMemo(()=>{
        const n = Zf();
        return Kf(n, e, t),
        Object.assign({}, n.vars, n.style)
    }
    , [e])
}
function bN(t, e) {
    const n = t.style || {}
      , i = {};
    return nw(i, n, t),
    Object.assign(i, TN(t, e)),
    i
}
function CN(t, e) {
    const n = {}
      , i = bN(t, e);
    return t.drag && t.dragListener !== !1 && (n.draggable = !1,
    i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none",
    i.touchAction = t.drag === !0 ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`),
    t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (n.tabIndex = 0),
    n.style = i,
    n
}
function _N(t, e, n, i) {
    const o = S.useMemo(()=>{
        const l = Gx();
        return qf(l, e, Gf(i), t.transformTemplate),
        {
            ...l.attrs,
            style: {
                ...l.style
            }
        }
    }
    , [e]);
    if (t.style) {
        const l = {};
        nw(l, t.style, t),
        o.style = {
            ...l,
            ...o.style
        }
    }
    return o
}
function EN(t=!1) {
    return (n,i,o,{latestValues: l},c)=>{
        const h = ($f(n) ? _N : CN)(i, l, c, n)
          , p = UR(i, typeof n == "string", t)
          , m = n !== S.Fragment ? {
            ...p,
            ...h,
            ref: o
        } : {}
          , {children: y} = i
          , v = S.useMemo(()=>St(y) ? y.get() : y, [y]);
        return S.createElement(n, {
            ...m,
            children: v
        })
    }
}
function kN(t, e) {
    return function(i, {forwardMotionProps: o}={
        forwardMotionProps: !1
    }) {
        const c = {
            ...$f(i) ? SN : PN,
            preloadedFeatures: t,
            useRender: EN(o),
            createVisualElement: e,
            Component: i
        };
        return XR(c)
    }
}
function rw(t, e) {
    if (!Array.isArray(e))
        return !1;
    const n = e.length;
    if (n !== t.length)
        return !1;
    for (let i = 0; i < n; i++)
        if (e[i] !== t[i])
            return !1;
    return !0
}
function Kl(t, e, n) {
    const i = t.getProps();
    return Wf(i, e, n !== void 0 ? n : i.custom, t)
}
const AN = Ff(()=>window.ScrollTimeline !== void 0);
class RN {
    constructor(e) {
        this.stop = ()=>this.runAll("stop"),
        this.animations = e.filter(Boolean)
    }
    get finished() {
        return Promise.all(this.animations.map(e=>"finished"in e ? e.finished : e))
    }
    getAll(e) {
        return this.animations[0][e]
    }
    setAll(e, n) {
        for (let i = 0; i < this.animations.length; i++)
            this.animations[i][e] = n
    }
    attachTimeline(e, n) {
        const i = this.animations.map(o=>{
            if (AN() && o.attachTimeline)
                return o.attachTimeline(e);
            if (typeof n == "function")
                return n(o)
        }
        );
        return ()=>{
            i.forEach((o,l)=>{
                o && o(),
                this.animations[l].stop()
            }
            )
        }
    }
    get time() {
        return this.getAll("time")
    }
    set time(e) {
        this.setAll("time", e)
    }
    get speed() {
        return this.getAll("speed")
    }
    set speed(e) {
        this.setAll("speed", e)
    }
    get startTime() {
        return this.getAll("startTime")
    }
    get duration() {
        let e = 0;
        for (let n = 0; n < this.animations.length; n++)
            e = Math.max(e, this.animations[n].duration);
        return e
    }
    runAll(e) {
        this.animations.forEach(n=>n[e]())
    }
    flatten() {
        this.runAll("flatten")
    }
    play() {
        this.runAll("play")
    }
    pause() {
        this.runAll("pause")
    }
    cancel() {
        this.runAll("cancel")
    }
    complete() {
        this.runAll("complete")
    }
}
class NN extends RN {
    then(e, n) {
        return Promise.all(this.animations).then(e).catch(n)
    }
}
function Yf(t, e) {
    return t ? t[e] || t.default || t : void 0
}
const Qd = 2e4;
function sw(t) {
    let e = 0;
    const n = 50;
    let i = t.next(e);
    for (; !i.done && e < Qd; )
        e += n,
        i = t.next(e);
    return e >= Qd ? 1 / 0 : e
}
function Jf(t) {
    return typeof t == "function"
}
function gy(t, e) {
    t.timeline = e,
    t.onfinish = null
}
const eh = t=>Array.isArray(t) && typeof t[0] == "number"
  , MN = {
    linearEasing: void 0
};
function DN(t, e) {
    const n = Ff(t);
    return ()=>{
        var i;
        return (i = MN[e]) !== null && i !== void 0 ? i : n()
    }
}
const bl = DN(()=>{
    try {
        document.createElement("div").animate({
            opacity: 0
        }, {
            easing: "linear(0, 1)"
        })
    } catch {
        return !1
    }
    return !0
}
, "linearEasing")
  , iw = (t,e,n=10)=>{
    let i = "";
    const o = Math.max(Math.round(e / n), 2);
    for (let l = 0; l < o; l++)
        i += t(Ks(0, o - 1, l)) + ", ";
    return `linear(${i.substring(0, i.length - 2)})`
}
;
function ow(t) {
    return !!(typeof t == "function" && bl() || !t || typeof t == "string" && (t in Kd || bl()) || eh(t) || Array.isArray(t) && t.every(ow))
}
const Zi = ([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`
  , Kd = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Zi([0, .65, .55, 1]),
    circOut: Zi([.55, 0, 1, .45]),
    backIn: Zi([.31, .01, .66, -.59]),
    backOut: Zi([.33, 1.53, .69, .99])
};
function aw(t, e) {
    if (t)
        return typeof t == "function" && bl() ? iw(t, e) : eh(t) ? Zi(t) : Array.isArray(t) ? t.map(n=>aw(n, e) || Kd.easeOut) : Kd[t]
}
const cn = {
    x: !1,
    y: !1
};
function lw() {
    return cn.x || cn.y
}
function ON(t, e, n) {
    var i;
    if (t instanceof Element)
        return [t];
    if (typeof t == "string") {
        let o = document;
        const l = (i = void 0) !== null && i !== void 0 ? i : o.querySelectorAll(t);
        return l ? Array.from(l) : []
    }
    return Array.from(t)
}
function uw(t, e) {
    const n = ON(t)
      , i = new AbortController
      , o = {
        passive: !0,
        ...e,
        signal: i.signal
    };
    return [n, o, ()=>i.abort()]
}
function yy(t) {
    return e=>{
        e.pointerType === "touch" || lw() || t(e)
    }
}
function IN(t, e, n={}) {
    const [i,o,l] = uw(t, n)
      , c = yy(d=>{
        const {target: h} = d
          , p = e(d);
        if (typeof p != "function" || !h)
            return;
        const m = yy(y=>{
            p(y),
            h.removeEventListener("pointerleave", m)
        }
        );
        h.addEventListener("pointerleave", m, o)
    }
    );
    return i.forEach(d=>{
        d.addEventListener("pointerenter", c, o)
    }
    ),
    l
}
const cw = (t,e)=>e ? t === e ? !0 : cw(t, e.parentElement) : !1
  , th = t=>t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== !1
  , LN = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function jN(t) {
    return LN.has(t.tagName) || t.tabIndex !== -1
}
const Gi = new WeakSet;
function vy(t) {
    return e=>{
        e.key === "Enter" && t(e)
    }
}
function ud(t, e) {
    t.dispatchEvent(new PointerEvent("pointer" + e,{
        isPrimary: !0,
        bubbles: !0
    }))
}
const FN = (t,e)=>{
    const n = t.currentTarget;
    if (!n)
        return;
    const i = vy(()=>{
        if (Gi.has(n))
            return;
        ud(n, "down");
        const o = vy(()=>{
            ud(n, "up")
        }
        )
          , l = ()=>ud(n, "cancel");
        n.addEventListener("keyup", o, e),
        n.addEventListener("blur", l, e)
    }
    );
    n.addEventListener("keydown", i, e),
    n.addEventListener("blur", ()=>n.removeEventListener("keydown", i), e)
}
;
function xy(t) {
    return th(t) && !lw()
}
function VN(t, e, n={}) {
    const [i,o,l] = uw(t, n)
      , c = d=>{
        const h = d.currentTarget;
        if (!xy(d) || Gi.has(h))
            return;
        Gi.add(h);
        const p = e(d)
          , m = (w,C)=>{
            window.removeEventListener("pointerup", y),
            window.removeEventListener("pointercancel", v),
            !(!xy(w) || !Gi.has(h)) && (Gi.delete(h),
            typeof p == "function" && p(w, {
                success: C
            }))
        }
          , y = w=>{
            m(w, n.useGlobalTarget || cw(h, w.target))
        }
          , v = w=>{
            m(w, !1)
        }
        ;
        window.addEventListener("pointerup", y, o),
        window.addEventListener("pointercancel", v, o)
    }
    ;
    return i.forEach(d=>{
        !jN(d) && d.getAttribute("tabindex") === null && (d.tabIndex = 0),
        (n.useGlobalTarget ? window : d).addEventListener("pointerdown", c, o),
        d.addEventListener("focus", p=>FN(p, o), o)
    }
    ),
    l
}
function zN(t) {
    return t === "x" || t === "y" ? cn[t] ? null : (cn[t] = !0,
    ()=>{
        cn[t] = !1
    }
    ) : cn.x || cn.y ? null : (cn.x = cn.y = !0,
    ()=>{
        cn.x = cn.y = !1
    }
    )
}
const dw = new Set(["width", "height", "top", "left", "right", "bottom", ...ei]);
let rl;
function BN() {
    rl = void 0
}
const En = {
    now: ()=>(rl === void 0 && En.set(pt.isProcessing || LR.useManualTiming ? pt.timestamp : performance.now()),
    rl),
    set: t=>{
        rl = t,
        queueMicrotask(BN)
    }
};
function nh(t, e) {
    t.indexOf(e) === -1 && t.push(e)
}
function rh(t, e) {
    const n = t.indexOf(e);
    n > -1 && t.splice(n, 1)
}
class sh {
    constructor() {
        this.subscriptions = []
    }
    add(e) {
        return nh(this.subscriptions, e),
        ()=>rh(this.subscriptions, e)
    }
    notify(e, n, i) {
        const o = this.subscriptions.length;
        if (o)
            if (o === 1)
                this.subscriptions[0](e, n, i);
            else
                for (let l = 0; l < o; l++) {
                    const c = this.subscriptions[l];
                    c && c(e, n, i)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
function fw(t, e) {
    return e ? t * (1e3 / e) : 0
}
const wy = 30
  , UN = t=>!isNaN(parseFloat(t));
class $N {
    constructor(e, n={}) {
        this.version = "11.18.2",
        this.canTrackVelocity = null,
        this.events = {},
        this.updateAndNotify = (i,o=!0)=>{
            const l = En.now();
            this.updatedAt !== l && this.setPrevFrameValue(),
            this.prev = this.current,
            this.setCurrent(i),
            this.current !== this.prev && this.events.change && this.events.change.notify(this.current),
            o && this.events.renderRequest && this.events.renderRequest.notify(this.current)
        }
        ,
        this.hasAnimated = !1,
        this.setCurrent(e),
        this.owner = n.owner
    }
    setCurrent(e) {
        this.current = e,
        this.updatedAt = En.now(),
        this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = UN(this.current))
    }
    setPrevFrameValue(e=this.current) {
        this.prevFrameValue = e,
        this.prevUpdatedAt = this.updatedAt
    }
    onChange(e) {
        return this.on("change", e)
    }
    on(e, n) {
        this.events[e] || (this.events[e] = new sh);
        const i = this.events[e].add(n);
        return e === "change" ? ()=>{
            i(),
            Ue.read(()=>{
                this.events.change.getSize() || this.stop()
            }
            )
        }
        : i
    }
    clearListeners() {
        for (const e in this.events)
            this.events[e].clear()
    }
    attach(e, n) {
        this.passiveEffect = e,
        this.stopPassiveEffect = n
    }
    set(e, n=!0) {
        !n || !this.passiveEffect ? this.updateAndNotify(e, n) : this.passiveEffect(e, this.updateAndNotify)
    }
    setWithVelocity(e, n, i) {
        this.set(n),
        this.prev = void 0,
        this.prevFrameValue = e,
        this.prevUpdatedAt = this.updatedAt - i
    }
    jump(e, n=!0) {
        this.updateAndNotify(e),
        this.prev = e,
        this.prevUpdatedAt = this.prevFrameValue = void 0,
        n && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const e = En.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > wy)
            return 0;
        const n = Math.min(this.updatedAt - this.prevUpdatedAt, wy);
        return fw(parseFloat(this.current) - parseFloat(this.prevFrameValue), n)
    }
    start(e) {
        return this.stop(),
        new Promise(n=>{
            this.hasAnimated = !0,
            this.animation = e(n),
            this.events.animationStart && this.events.animationStart.notify()
        }
        ).then(()=>{
            this.events.animationComplete && this.events.animationComplete.notify(),
            this.clearAnimation()
        }
        )
    }
    stop() {
        this.animation && (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
}
function bo(t, e) {
    return new $N(t,e)
}
function WN(t, e, n) {
    t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, bo(n))
}
function HN(t, e) {
    const n = Kl(t, e);
    let {transitionEnd: i={}, transition: o={}, ...l} = n || {};
    l = {
        ...l,
        ...i
    };
    for (const c in l) {
        const d = rN(l[c]);
        WN(t, c, d)
    }
}
function QN(t) {
    return !!(St(t) && t.add)
}
function qd(t, e) {
    const n = t.getValue("willChange");
    if (QN(n))
        return n.add(e)
}
function hw(t) {
    return t.props[$x]
}
const pw = (t,e,n)=>(((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t
  , KN = 1e-7
  , qN = 12;
function ZN(t, e, n, i, o) {
    let l, c, d = 0;
    do
        c = e + (n - e) / 2,
        l = pw(c, i, o) - t,
        l > 0 ? n = c : e = c;
    while (Math.abs(l) > KN && ++d < qN);
    return c
}
function No(t, e, n, i) {
    if (t === e && n === i)
        return Wt;
    const o = l=>ZN(l, 0, 1, t, n);
    return l=>l === 0 || l === 1 ? l : pw(o(l), e, i)
}
const mw = t=>e=>e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2
  , gw = t=>e=>1 - t(1 - e)
  , yw = No(.33, 1.53, .69, .99)
  , ih = gw(yw)
  , vw = mw(ih)
  , xw = t=>(t *= 2) < 1 ? .5 * ih(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
  , oh = t=>1 - Math.sin(Math.acos(t))
  , ww = gw(oh)
  , Sw = mw(oh)
  , Pw = t=>/^0[^.\s]+$/u.test(t);
function GN(t) {
    return typeof t == "number" ? t === 0 : t !== null ? t === "none" || t === "0" || Pw(t) : !0
}
const eo = t=>Math.round(t * 1e5) / 1e5
  , ah = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function XN(t) {
    return t == null
}
const YN = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu
  , lh = (t,e)=>n=>!!(typeof n == "string" && YN.test(n) && n.startsWith(t) || e && !XN(n) && Object.prototype.hasOwnProperty.call(n, e))
  , Tw = (t,e,n)=>i=>{
    if (typeof i != "string")
        return i;
    const [o,l,c,d] = i.match(ah);
    return {
        [t]: parseFloat(o),
        [e]: parseFloat(l),
        [n]: parseFloat(c),
        alpha: d !== void 0 ? parseFloat(d) : 1
    }
}
  , JN = t=>Gn(0, 255, t)
  , cd = {
    ...ti,
    transform: t=>Math.round(JN(t))
}
  , Qr = {
    test: lh("rgb", "red"),
    parse: Tw("red", "green", "blue"),
    transform: ({red: t, green: e, blue: n, alpha: i=1})=>"rgba(" + cd.transform(t) + ", " + cd.transform(e) + ", " + cd.transform(n) + ", " + eo(To.transform(i)) + ")"
};
function eM(t) {
    let e = ""
      , n = ""
      , i = ""
      , o = "";
    return t.length > 5 ? (e = t.substring(1, 3),
    n = t.substring(3, 5),
    i = t.substring(5, 7),
    o = t.substring(7, 9)) : (e = t.substring(1, 2),
    n = t.substring(2, 3),
    i = t.substring(3, 4),
    o = t.substring(4, 5),
    e += e,
    n += n,
    i += i,
    o += o),
    {
        red: parseInt(e, 16),
        green: parseInt(n, 16),
        blue: parseInt(i, 16),
        alpha: o ? parseInt(o, 16) / 255 : 1
    }
}
const Zd = {
    test: lh("#"),
    parse: eM,
    transform: Qr.transform
}
  , Ms = {
    test: lh("hsl", "hue"),
    parse: Tw("hue", "saturation", "lightness"),
    transform: ({hue: t, saturation: e, lightness: n, alpha: i=1})=>"hsla(" + Math.round(t) + ", " + _n.transform(eo(e)) + ", " + _n.transform(eo(n)) + ", " + eo(To.transform(i)) + ")"
}
  , wt = {
    test: t=>Qr.test(t) || Zd.test(t) || Ms.test(t),
    parse: t=>Qr.test(t) ? Qr.parse(t) : Ms.test(t) ? Ms.parse(t) : Zd.parse(t),
    transform: t=>typeof t == "string" ? t : t.hasOwnProperty("red") ? Qr.transform(t) : Ms.transform(t)
}
  , tM = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function nM(t) {
    var e, n;
    return isNaN(t) && typeof t == "string" && (((e = t.match(ah)) === null || e === void 0 ? void 0 : e.length) || 0) + (((n = t.match(tM)) === null || n === void 0 ? void 0 : n.length) || 0) > 0
}
const bw = "number"
  , Cw = "color"
  , rM = "var"
  , sM = "var("
  , Sy = "${}"
  , iM = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Co(t) {
    const e = t.toString()
      , n = []
      , i = {
        color: [],
        number: [],
        var: []
    }
      , o = [];
    let l = 0;
    const d = e.replace(iM, h=>(wt.test(h) ? (i.color.push(l),
    o.push(Cw),
    n.push(wt.parse(h))) : h.startsWith(sM) ? (i.var.push(l),
    o.push(rM),
    n.push(h)) : (i.number.push(l),
    o.push(bw),
    n.push(parseFloat(h))),
    ++l,
    Sy)).split(Sy);
    return {
        values: n,
        split: d,
        indexes: i,
        types: o
    }
}
function _w(t) {
    return Co(t).values
}
function Ew(t) {
    const {split: e, types: n} = Co(t)
      , i = e.length;
    return o=>{
        let l = "";
        for (let c = 0; c < i; c++)
            if (l += e[c],
            o[c] !== void 0) {
                const d = n[c];
                d === bw ? l += eo(o[c]) : d === Cw ? l += wt.transform(o[c]) : l += o[c]
            }
        return l
    }
}
const oM = t=>typeof t == "number" ? 0 : t;
function aM(t) {
    const e = _w(t);
    return Ew(t)(e.map(oM))
}
const kr = {
    test: nM,
    parse: _w,
    createTransformer: Ew,
    getAnimatableNone: aM
}
  , lM = new Set(["brightness", "contrast", "saturate", "opacity"]);
function uM(t) {
    const [e,n] = t.slice(0, -1).split("(");
    if (e === "drop-shadow")
        return t;
    const [i] = n.match(ah) || [];
    if (!i)
        return t;
    const o = n.replace(i, "");
    let l = lM.has(e) ? 1 : 0;
    return i !== n && (l *= 100),
    e + "(" + l + o + ")"
}
const cM = /\b([a-z-]*)\(.*?\)/gu
  , Gd = {
    ...kr,
    getAnimatableNone: t=>{
        const e = t.match(cM);
        return e ? e.map(uM).join(" ") : t
    }
}
  , dM = {
    ...Qf,
    color: wt,
    backgroundColor: wt,
    outlineColor: wt,
    fill: wt,
    stroke: wt,
    borderColor: wt,
    borderTopColor: wt,
    borderRightColor: wt,
    borderBottomColor: wt,
    borderLeftColor: wt,
    filter: Gd,
    WebkitFilter: Gd
}
  , uh = t=>dM[t];
function kw(t, e) {
    let n = uh(t);
    return n !== Gd && (n = kr),
    n.getAnimatableNone ? n.getAnimatableNone(e) : void 0
}
const fM = new Set(["auto", "none", "0"]);
function hM(t, e, n) {
    let i = 0, o;
    for (; i < t.length && !o; ) {
        const l = t[i];
        typeof l == "string" && !fM.has(l) && Co(l).values.length && (o = t[i]),
        i++
    }
    if (o && n)
        for (const l of e)
            t[l] = kw(n, o)
}
const Py = t=>t === ti || t === fe
  , Ty = (t,e)=>parseFloat(t.split(", ")[e])
  , by = (t,e)=>(n,{transform: i})=>{
    if (i === "none" || !i)
        return 0;
    const o = i.match(/^matrix3d\((.+)\)$/u);
    if (o)
        return Ty(o[1], e);
    {
        const l = i.match(/^matrix\((.+)\)$/u);
        return l ? Ty(l[1], t) : 0
    }
}
  , pM = new Set(["x", "y", "z"])
  , mM = ei.filter(t=>!pM.has(t));
function gM(t) {
    const e = [];
    return mM.forEach(n=>{
        const i = t.getValue(n);
        i !== void 0 && (e.push([n, i.get()]),
        i.set(n.startsWith("scale") ? 1 : 0))
    }
    ),
    e
}
const Zs = {
    width: ({x: t},{paddingLeft: e="0", paddingRight: n="0"})=>t.max - t.min - parseFloat(e) - parseFloat(n),
    height: ({y: t},{paddingTop: e="0", paddingBottom: n="0"})=>t.max - t.min - parseFloat(e) - parseFloat(n),
    top: (t,{top: e})=>parseFloat(e),
    left: (t,{left: e})=>parseFloat(e),
    bottom: ({y: t},{top: e})=>parseFloat(e) + (t.max - t.min),
    right: ({x: t},{left: e})=>parseFloat(e) + (t.max - t.min),
    x: by(4, 13),
    y: by(5, 14)
};
Zs.translateX = Zs.x;
Zs.translateY = Zs.y;
const qr = new Set;
let Xd = !1
  , Yd = !1;
function Aw() {
    if (Yd) {
        const t = Array.from(qr).filter(i=>i.needsMeasurement)
          , e = new Set(t.map(i=>i.element))
          , n = new Map;
        e.forEach(i=>{
            const o = gM(i);
            o.length && (n.set(i, o),
            i.render())
        }
        ),
        t.forEach(i=>i.measureInitialState()),
        e.forEach(i=>{
            i.render();
            const o = n.get(i);
            o && o.forEach(([l,c])=>{
                var d;
                (d = i.getValue(l)) === null || d === void 0 || d.set(c)
            }
            )
        }
        ),
        t.forEach(i=>i.measureEndState()),
        t.forEach(i=>{
            i.suspendedScrollY !== void 0 && window.scrollTo(0, i.suspendedScrollY)
        }
        )
    }
    Yd = !1,
    Xd = !1,
    qr.forEach(t=>t.complete()),
    qr.clear()
}
function Rw() {
    qr.forEach(t=>{
        t.readKeyframes(),
        t.needsMeasurement && (Yd = !0)
    }
    )
}
function yM() {
    Rw(),
    Aw()
}
class ch {
    constructor(e, n, i, o, l, c=!1) {
        this.isComplete = !1,
        this.isAsync = !1,
        this.needsMeasurement = !1,
        this.isScheduled = !1,
        this.unresolvedKeyframes = [...e],
        this.onComplete = n,
        this.name = i,
        this.motionValue = o,
        this.element = l,
        this.isAsync = c
    }
    scheduleResolve() {
        this.isScheduled = !0,
        this.isAsync ? (qr.add(this),
        Xd || (Xd = !0,
        Ue.read(Rw),
        Ue.resolveKeyframes(Aw))) : (this.readKeyframes(),
        this.complete())
    }
    readKeyframes() {
        const {unresolvedKeyframes: e, name: n, element: i, motionValue: o} = this;
        for (let l = 0; l < e.length; l++)
            if (e[l] === null)
                if (l === 0) {
                    const c = o?.get()
                      , d = e[e.length - 1];
                    if (c !== void 0)
                        e[0] = c;
                    else if (i && n) {
                        const h = i.readValue(n, d);
                        h != null && (e[0] = h)
                    }
                    e[0] === void 0 && (e[0] = d),
                    o && c === void 0 && o.set(e[0])
                } else
                    e[l] = e[l - 1]
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete() {
        this.isComplete = !0,
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
        qr.delete(this)
    }
    cancel() {
        this.isComplete || (this.isScheduled = !1,
        qr.delete(this))
    }
    resume() {
        this.isComplete || this.scheduleResolve()
    }
}
const Nw = t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t)
  , vM = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function xM(t) {
    const e = vM.exec(t);
    if (!e)
        return [, ];
    const [,n,i,o] = e;
    return [`--${n ?? i}`, o]
}
function Mw(t, e, n=1) {
    const [i,o] = xM(t);
    if (!i)
        return;
    const l = window.getComputedStyle(e).getPropertyValue(i);
    if (l) {
        const c = l.trim();
        return Nw(c) ? parseFloat(c) : c
    }
    return Hf(o) ? Mw(o, e, n + 1) : o
}
const Dw = t=>e=>e.test(t)
  , wM = {
    test: t=>t === "auto",
    parse: t=>t
}
  , Ow = [ti, fe, _n, xr, uN, lN, wM]
  , Cy = t=>Ow.find(Dw(t));
class Iw extends ch {
    constructor(e, n, i, o, l) {
        super(e, n, i, o, l, !0)
    }
    readKeyframes() {
        const {unresolvedKeyframes: e, element: n, name: i} = this;
        if (!n || !n.current)
            return;
        super.readKeyframes();
        for (let h = 0; h < e.length; h++) {
            let p = e[h];
            if (typeof p == "string" && (p = p.trim(),
            Hf(p))) {
                const m = Mw(p, n.current);
                m !== void 0 && (e[h] = m),
                h === e.length - 1 && (this.finalKeyframe = p)
            }
        }
        if (this.resolveNoneKeyframes(),
        !dw.has(i) || e.length !== 2)
            return;
        const [o,l] = e
          , c = Cy(o)
          , d = Cy(l);
        if (c !== d)
            if (Py(c) && Py(d))
                for (let h = 0; h < e.length; h++) {
                    const p = e[h];
                    typeof p == "string" && (e[h] = parseFloat(p))
                }
            else
                this.needsMeasurement = !0
    }
    resolveNoneKeyframes() {
        const {unresolvedKeyframes: e, name: n} = this
          , i = [];
        for (let o = 0; o < e.length; o++)
            GN(e[o]) && i.push(o);
        i.length && hM(e, i, n)
    }
    measureInitialState() {
        const {element: e, unresolvedKeyframes: n, name: i} = this;
        if (!e || !e.current)
            return;
        i === "height" && (this.suspendedScrollY = window.pageYOffset),
        this.measuredOrigin = Zs[i](e.measureViewportBox(), window.getComputedStyle(e.current)),
        n[0] = this.measuredOrigin;
        const o = n[n.length - 1];
        o !== void 0 && e.getValue(i, o).jump(o, !1)
    }
    measureEndState() {
        var e;
        const {element: n, name: i, unresolvedKeyframes: o} = this;
        if (!n || !n.current)
            return;
        const l = n.getValue(i);
        l && l.jump(this.measuredOrigin, !1);
        const c = o.length - 1
          , d = o[c];
        o[c] = Zs[i](n.measureViewportBox(), window.getComputedStyle(n.current)),
        d !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = d),
        !((e = this.removedTransforms) === null || e === void 0) && e.length && this.removedTransforms.forEach(([h,p])=>{
            n.getValue(h).set(p)
        }
        ),
        this.resolveNoneKeyframes()
    }
}
const _y = (t,e)=>e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && (kr.test(t) || t === "0") && !t.startsWith("url("));
function SM(t) {
    const e = t[0];
    if (t.length === 1)
        return !0;
    for (let n = 0; n < t.length; n++)
        if (t[n] !== e)
            return !0
}
function PM(t, e, n, i) {
    const o = t[0];
    if (o === null)
        return !1;
    if (e === "display" || e === "visibility")
        return !0;
    const l = t[t.length - 1]
      , c = _y(o, e)
      , d = _y(l, e);
    return !c || !d ? !1 : SM(t) || (n === "spring" || Jf(n)) && i
}
const TM = t=>t !== null;
function ql(t, {repeat: e, repeatType: n="loop"}, i) {
    const o = t.filter(TM)
      , l = e && n !== "loop" && e % 2 === 1 ? 0 : o.length - 1;
    return !l || i === void 0 ? o[l] : i
}
const bM = 40;
class Lw {
    constructor({autoplay: e=!0, delay: n=0, type: i="keyframes", repeat: o=0, repeatDelay: l=0, repeatType: c="loop", ...d}) {
        this.isStopped = !1,
        this.hasAttemptedResolve = !1,
        this.createdAt = En.now(),
        this.options = {
            autoplay: e,
            delay: n,
            type: i,
            repeat: o,
            repeatDelay: l,
            repeatType: c,
            ...d
        },
        this.updateFinishedPromise()
    }
    calcStartTime() {
        return this.resolvedAt ? this.resolvedAt - this.createdAt > bM ? this.resolvedAt : this.createdAt : this.createdAt
    }
    get resolved() {
        return !this._resolved && !this.hasAttemptedResolve && yM(),
        this._resolved
    }
    onKeyframesResolved(e, n) {
        this.resolvedAt = En.now(),
        this.hasAttemptedResolve = !0;
        const {name: i, type: o, velocity: l, delay: c, onComplete: d, onUpdate: h, isGenerator: p} = this.options;
        if (!p && !PM(e, i, o, l))
            if (c)
                this.options.duration = 0;
            else {
                h && h(ql(e, this.options, n)),
                d && d(),
                this.resolveFinishedPromise();
                return
            }
        const m = this.initPlayback(e, n);
        m !== !1 && (this._resolved = {
            keyframes: e,
            finalKeyframe: n,
            ...m
        },
        this.onPostResolved())
    }
    onPostResolved() {}
    then(e, n) {
        return this.currentFinishedPromise.then(e, n)
    }
    flatten() {
        this.options.type = "keyframes",
        this.options.ease = "linear"
    }
    updateFinishedPromise() {
        this.currentFinishedPromise = new Promise(e=>{
            this.resolveFinishedPromise = e
        }
        )
    }
}
const qe = (t,e,n)=>t + (e - t) * n;
function dd(t, e, n) {
    return n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? t + (e - t) * 6 * n : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
}
function CM({hue: t, saturation: e, lightness: n, alpha: i}) {
    t /= 360,
    e /= 100,
    n /= 100;
    let o = 0
      , l = 0
      , c = 0;
    if (!e)
        o = l = c = n;
    else {
        const d = n < .5 ? n * (1 + e) : n + e - n * e
          , h = 2 * n - d;
        o = dd(h, d, t + 1 / 3),
        l = dd(h, d, t),
        c = dd(h, d, t - 1 / 3)
    }
    return {
        red: Math.round(o * 255),
        green: Math.round(l * 255),
        blue: Math.round(c * 255),
        alpha: i
    }
}
function Cl(t, e) {
    return n=>n > 0 ? e : t
}
const fd = (t,e,n)=>{
    const i = t * t
      , o = n * (e * e - i) + i;
    return o < 0 ? 0 : Math.sqrt(o)
}
  , _M = [Zd, Qr, Ms]
  , EM = t=>_M.find(e=>e.test(t));
function Ey(t) {
    const e = EM(t);
    if (!e)
        return !1;
    let n = e.parse(t);
    return e === Ms && (n = CM(n)),
    n
}
const ky = (t,e)=>{
    const n = Ey(t)
      , i = Ey(e);
    if (!n || !i)
        return Cl(t, e);
    const o = {
        ...n
    };
    return l=>(o.red = fd(n.red, i.red, l),
    o.green = fd(n.green, i.green, l),
    o.blue = fd(n.blue, i.blue, l),
    o.alpha = qe(n.alpha, i.alpha, l),
    Qr.transform(o))
}
  , kM = (t,e)=>n=>e(t(n))
  , Mo = (...t)=>t.reduce(kM)
  , Jd = new Set(["none", "hidden"]);
function AM(t, e) {
    return Jd.has(t) ? n=>n <= 0 ? t : e : n=>n >= 1 ? e : t
}
function RM(t, e) {
    return n=>qe(t, e, n)
}
function dh(t) {
    return typeof t == "number" ? RM : typeof t == "string" ? Hf(t) ? Cl : wt.test(t) ? ky : DM : Array.isArray(t) ? jw : typeof t == "object" ? wt.test(t) ? ky : NM : Cl
}
function jw(t, e) {
    const n = [...t]
      , i = n.length
      , o = t.map((l,c)=>dh(l)(l, e[c]));
    return l=>{
        for (let c = 0; c < i; c++)
            n[c] = o[c](l);
        return n
    }
}
function NM(t, e) {
    const n = {
        ...t,
        ...e
    }
      , i = {};
    for (const o in n)
        t[o] !== void 0 && e[o] !== void 0 && (i[o] = dh(t[o])(t[o], e[o]));
    return o=>{
        for (const l in i)
            n[l] = i[l](o);
        return n
    }
}
function MM(t, e) {
    var n;
    const i = []
      , o = {
        color: 0,
        var: 0,
        number: 0
    };
    for (let l = 0; l < e.values.length; l++) {
        const c = e.types[l]
          , d = t.indexes[c][o[c]]
          , h = (n = t.values[d]) !== null && n !== void 0 ? n : 0;
        i[l] = h,
        o[c]++
    }
    return i
}
const DM = (t,e)=>{
    const n = kr.createTransformer(e)
      , i = Co(t)
      , o = Co(e);
    return i.indexes.var.length === o.indexes.var.length && i.indexes.color.length === o.indexes.color.length && i.indexes.number.length >= o.indexes.number.length ? Jd.has(t) && !o.values.length || Jd.has(e) && !i.values.length ? AM(t, e) : Mo(jw(MM(i, o), o.values), n) : Cl(t, e)
}
;
function Fw(t, e, n) {
    return typeof t == "number" && typeof e == "number" && typeof n == "number" ? qe(t, e, n) : dh(t)(t, e)
}
const OM = 5;
function Vw(t, e, n) {
    const i = Math.max(e - OM, 0);
    return fw(n - t(i), e - i)
}
const Ge = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: .3,
    visualDuration: .3,
    restSpeed: {
        granular: .01,
        default: 2
    },
    restDelta: {
        granular: .005,
        default: .5
    },
    minDuration: .01,
    maxDuration: 10,
    minDamping: .05,
    maxDamping: 1
}
  , hd = .001;
function IM({duration: t=Ge.duration, bounce: e=Ge.bounce, velocity: n=Ge.velocity, mass: i=Ge.mass}) {
    let o, l, c = 1 - e;
    c = Gn(Ge.minDamping, Ge.maxDamping, c),
    t = Gn(Ge.minDuration, Ge.maxDuration, Qn(t)),
    c < 1 ? (o = p=>{
        const m = p * c
          , y = m * t
          , v = m - n
          , w = ef(p, c)
          , C = Math.exp(-y);
        return hd - v / w * C
    }
    ,
    l = p=>{
        const y = p * c * t
          , v = y * n + n
          , w = Math.pow(c, 2) * Math.pow(p, 2) * t
          , C = Math.exp(-y)
          , P = ef(Math.pow(p, 2), c);
        return (-o(p) + hd > 0 ? -1 : 1) * ((v - w) * C) / P
    }
    ) : (o = p=>{
        const m = Math.exp(-p * t)
          , y = (p - n) * t + 1;
        return -hd + m * y
    }
    ,
    l = p=>{
        const m = Math.exp(-p * t)
          , y = (n - p) * (t * t);
        return m * y
    }
    );
    const d = 5 / t
      , h = jM(o, l, d);
    if (t = Hn(t),
    isNaN(h))
        return {
            stiffness: Ge.stiffness,
            damping: Ge.damping,
            duration: t
        };
    {
        const p = Math.pow(h, 2) * i;
        return {
            stiffness: p,
            damping: c * 2 * Math.sqrt(i * p),
            duration: t
        }
    }
}
const LM = 12;
function jM(t, e, n) {
    let i = n;
    for (let o = 1; o < LM; o++)
        i = i - t(i) / e(i);
    return i
}
function ef(t, e) {
    return t * Math.sqrt(1 - e * e)
}
const FM = ["duration", "bounce"]
  , VM = ["stiffness", "damping", "mass"];
function Ay(t, e) {
    return e.some(n=>t[n] !== void 0)
}
function zM(t) {
    let e = {
        velocity: Ge.velocity,
        stiffness: Ge.stiffness,
        damping: Ge.damping,
        mass: Ge.mass,
        isResolvedFromDuration: !1,
        ...t
    };
    if (!Ay(t, VM) && Ay(t, FM))
        if (t.visualDuration) {
            const n = t.visualDuration
              , i = 2 * Math.PI / (n * 1.2)
              , o = i * i
              , l = 2 * Gn(.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(o);
            e = {
                ...e,
                mass: Ge.mass,
                stiffness: o,
                damping: l
            }
        } else {
            const n = IM(t);
            e = {
                ...e,
                ...n,
                mass: Ge.mass
            },
            e.isResolvedFromDuration = !0
        }
    return e
}
function zw(t=Ge.visualDuration, e=Ge.bounce) {
    const n = typeof t != "object" ? {
        visualDuration: t,
        keyframes: [0, 1],
        bounce: e
    } : t;
    let {restSpeed: i, restDelta: o} = n;
    const l = n.keyframes[0]
      , c = n.keyframes[n.keyframes.length - 1]
      , d = {
        done: !1,
        value: l
    }
      , {stiffness: h, damping: p, mass: m, duration: y, velocity: v, isResolvedFromDuration: w} = zM({
        ...n,
        velocity: -Qn(n.velocity || 0)
    })
      , C = v || 0
      , P = p / (2 * Math.sqrt(h * m))
      , T = c - l
      , k = Qn(Math.sqrt(h / m))
      , N = Math.abs(T) < 5;
    i || (i = N ? Ge.restSpeed.granular : Ge.restSpeed.default),
    o || (o = N ? Ge.restDelta.granular : Ge.restDelta.default);
    let O;
    if (P < 1) {
        const L = ef(k, P);
        O = V=>{
            const z = Math.exp(-P * k * V);
            return c - z * ((C + P * k * T) / L * Math.sin(L * V) + T * Math.cos(L * V))
        }
    } else if (P === 1)
        O = L=>c - Math.exp(-k * L) * (T + (C + k * T) * L);
    else {
        const L = k * Math.sqrt(P * P - 1);
        O = V=>{
            const z = Math.exp(-P * k * V)
              , K = Math.min(L * V, 300);
            return c - z * ((C + P * k * T) * Math.sinh(K) + L * T * Math.cosh(K)) / L
        }
    }
    const j = {
        calculatedDuration: w && y || null,
        next: L=>{
            const V = O(L);
            if (w)
                d.done = L >= y;
            else {
                let z = 0;
                P < 1 && (z = L === 0 ? Hn(C) : Vw(O, L, V));
                const K = Math.abs(z) <= i
                  , ie = Math.abs(c - V) <= o;
                d.done = K && ie
            }
            return d.value = d.done ? c : V,
            d
        }
        ,
        toString: ()=>{
            const L = Math.min(sw(j), Qd)
              , V = iw(z=>j.next(L * z).value, L, 30);
            return L + "ms " + V
        }
    };
    return j
}
function Ry({keyframes: t, velocity: e=0, power: n=.8, timeConstant: i=325, bounceDamping: o=10, bounceStiffness: l=500, modifyTarget: c, min: d, max: h, restDelta: p=.5, restSpeed: m}) {
    const y = t[0]
      , v = {
        done: !1,
        value: y
    }
      , w = K=>d !== void 0 && K < d || h !== void 0 && K > h
      , C = K=>d === void 0 ? h : h === void 0 || Math.abs(d - K) < Math.abs(h - K) ? d : h;
    let P = n * e;
    const T = y + P
      , k = c === void 0 ? T : c(T);
    k !== T && (P = k - y);
    const N = K=>-P * Math.exp(-K / i)
      , O = K=>k + N(K)
      , j = K=>{
        const ie = N(K)
          , ue = O(K);
        v.done = Math.abs(ie) <= p,
        v.value = v.done ? k : ue
    }
    ;
    let L, V;
    const z = K=>{
        w(v.value) && (L = K,
        V = zw({
            keyframes: [v.value, C(v.value)],
            velocity: Vw(O, K, v.value),
            damping: o,
            stiffness: l,
            restDelta: p,
            restSpeed: m
        }))
    }
    ;
    return z(0),
    {
        calculatedDuration: null,
        next: K=>{
            let ie = !1;
            return !V && L === void 0 && (ie = !0,
            j(K),
            z(K)),
            L !== void 0 && K >= L ? V.next(K - L) : (!ie && j(K),
            v)
        }
    }
}
const BM = No(.42, 0, 1, 1)
  , UM = No(0, 0, .58, 1)
  , Bw = No(.42, 0, .58, 1)
  , $M = t=>Array.isArray(t) && typeof t[0] != "number"
  , WM = {
    linear: Wt,
    easeIn: BM,
    easeInOut: Bw,
    easeOut: UM,
    circIn: oh,
    circInOut: Sw,
    circOut: ww,
    backIn: ih,
    backInOut: vw,
    backOut: yw,
    anticipate: xw
}
  , Ny = t=>{
    if (eh(t)) {
        Fx(t.length === 4);
        const [e,n,i,o] = t;
        return No(e, n, i, o)
    } else if (typeof t == "string")
        return WM[t];
    return t
}
;
function HM(t, e, n) {
    const i = []
      , o = n || Fw
      , l = t.length - 1;
    for (let c = 0; c < l; c++) {
        let d = o(t[c], t[c + 1]);
        if (e) {
            const h = Array.isArray(e) ? e[c] || Wt : e;
            d = Mo(h, d)
        }
        i.push(d)
    }
    return i
}
function QM(t, e, {clamp: n=!0, ease: i, mixer: o}={}) {
    const l = t.length;
    if (Fx(l === e.length),
    l === 1)
        return ()=>e[0];
    if (l === 2 && e[0] === e[1])
        return ()=>e[1];
    const c = t[0] === t[1];
    t[0] > t[l - 1] && (t = [...t].reverse(),
    e = [...e].reverse());
    const d = HM(e, i, o)
      , h = d.length
      , p = m=>{
        if (c && m < t[0])
            return e[0];
        let y = 0;
        if (h > 1)
            for (; y < t.length - 2 && !(m < t[y + 1]); y++)
                ;
        const v = Ks(t[y], t[y + 1], m);
        return d[y](v)
    }
    ;
    return n ? m=>p(Gn(t[0], t[l - 1], m)) : p
}
function KM(t, e) {
    const n = t[t.length - 1];
    for (let i = 1; i <= e; i++) {
        const o = Ks(0, e, i);
        t.push(qe(n, 1, o))
    }
}
function qM(t) {
    const e = [0];
    return KM(e, t.length - 1),
    e
}
function ZM(t, e) {
    return t.map(n=>n * e)
}
function GM(t, e) {
    return t.map(()=>e || Bw).splice(0, t.length - 1)
}
function _l({duration: t=300, keyframes: e, times: n, ease: i="easeInOut"}) {
    const o = $M(i) ? i.map(Ny) : Ny(i)
      , l = {
        done: !1,
        value: e[0]
    }
      , c = ZM(n && n.length === e.length ? n : qM(e), t)
      , d = QM(c, e, {
        ease: Array.isArray(o) ? o : GM(e, o)
    });
    return {
        calculatedDuration: t,
        next: h=>(l.value = d(h),
        l.done = h >= t,
        l)
    }
}
const XM = t=>{
    const e = ({timestamp: n})=>t(n);
    return {
        start: ()=>Ue.update(e, !0),
        stop: ()=>Er(e),
        now: ()=>pt.isProcessing ? pt.timestamp : En.now()
    }
}
  , YM = {
    decay: Ry,
    inertia: Ry,
    tween: _l,
    keyframes: _l,
    spring: zw
}
  , JM = t=>t / 100;
class fh extends Lw {
    constructor(e) {
        super(e),
        this.holdTime = null,
        this.cancelTime = null,
        this.currentTime = 0,
        this.playbackSpeed = 1,
        this.pendingPlayState = "running",
        this.startTime = null,
        this.state = "idle",
        this.stop = ()=>{
            if (this.resolver.cancel(),
            this.isStopped = !0,
            this.state === "idle")
                return;
            this.teardown();
            const {onStop: h} = this.options;
            h && h()
        }
        ;
        const {name: n, motionValue: i, element: o, keyframes: l} = this.options
          , c = o?.KeyframeResolver || ch
          , d = (h,p)=>this.onKeyframesResolved(h, p);
        this.resolver = new c(l,d,n,i,o),
        this.resolver.scheduleResolve()
    }
    flatten() {
        super.flatten(),
        this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes))
    }
    initPlayback(e) {
        const {type: n="keyframes", repeat: i=0, repeatDelay: o=0, repeatType: l, velocity: c=0} = this.options
          , d = Jf(n) ? n : YM[n] || _l;
        let h, p;
        d !== _l && typeof e[0] != "number" && (h = Mo(JM, Fw(e[0], e[1])),
        e = [0, 100]);
        const m = d({
            ...this.options,
            keyframes: e
        });
        l === "mirror" && (p = d({
            ...this.options,
            keyframes: [...e].reverse(),
            velocity: -c
        })),
        m.calculatedDuration === null && (m.calculatedDuration = sw(m));
        const {calculatedDuration: y} = m
          , v = y + o
          , w = v * (i + 1) - o;
        return {
            generator: m,
            mirroredGenerator: p,
            mapPercentToKeyframes: h,
            calculatedDuration: y,
            resolvedDuration: v,
            totalDuration: w
        }
    }
    onPostResolved() {
        const {autoplay: e=!0} = this.options;
        this.play(),
        this.pendingPlayState === "paused" || !e ? this.pause() : this.state = this.pendingPlayState
    }
    tick(e, n=!1) {
        const {resolved: i} = this;
        if (!i) {
            const {keyframes: K} = this.options;
            return {
                done: !0,
                value: K[K.length - 1]
            }
        }
        const {finalKeyframe: o, generator: l, mirroredGenerator: c, mapPercentToKeyframes: d, keyframes: h, calculatedDuration: p, totalDuration: m, resolvedDuration: y} = i;
        if (this.startTime === null)
            return l.next(0);
        const {delay: v, repeat: w, repeatType: C, repeatDelay: P, onUpdate: T} = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - m / this.speed, this.startTime)),
        n ? this.currentTime = e : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(e - this.startTime) * this.speed;
        const k = this.currentTime - v * (this.speed >= 0 ? 1 : -1)
          , N = this.speed >= 0 ? k < 0 : k > m;
        this.currentTime = Math.max(k, 0),
        this.state === "finished" && this.holdTime === null && (this.currentTime = m);
        let O = this.currentTime
          , j = l;
        if (w) {
            const K = Math.min(this.currentTime, m) / y;
            let ie = Math.floor(K)
              , ue = K % 1;
            !ue && K >= 1 && (ue = 1),
            ue === 1 && ie--,
            ie = Math.min(ie, w + 1),
            ie % 2 && (C === "reverse" ? (ue = 1 - ue,
            P && (ue -= P / y)) : C === "mirror" && (j = c)),
            O = Gn(0, 1, ue) * y
        }
        const L = N ? {
            done: !1,
            value: h[0]
        } : j.next(O);
        d && (L.value = d(L.value));
        let {done: V} = L;
        !N && p !== null && (V = this.speed >= 0 ? this.currentTime >= m : this.currentTime <= 0);
        const z = this.holdTime === null && (this.state === "finished" || this.state === "running" && V);
        return z && o !== void 0 && (L.value = ql(h, this.options, o)),
        T && T(L.value),
        z && this.finish(),
        L
    }
    get duration() {
        const {resolved: e} = this;
        return e ? Qn(e.calculatedDuration) : 0
    }
    get time() {
        return Qn(this.currentTime)
    }
    set time(e) {
        e = Hn(e),
        this.currentTime = e,
        this.holdTime !== null || this.speed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.speed)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(e) {
        const n = this.playbackSpeed !== e;
        this.playbackSpeed = e,
        n && (this.time = Qn(this.currentTime))
    }
    play() {
        if (this.resolver.isScheduled || this.resolver.resume(),
        !this._resolved) {
            this.pendingPlayState = "running";
            return
        }
        if (this.isStopped)
            return;
        const {driver: e=XM, onPlay: n, startTime: i} = this.options;
        this.driver || (this.driver = e(l=>this.tick(l))),
        n && n();
        const o = this.driver.now();
        this.holdTime !== null ? this.startTime = o - this.holdTime : this.startTime ? this.state === "finished" && (this.startTime = o) : this.startTime = i ?? this.calcStartTime(),
        this.state === "finished" && this.updateFinishedPromise(),
        this.cancelTime = this.startTime,
        this.holdTime = null,
        this.state = "running",
        this.driver.start()
    }
    pause() {
        var e;
        if (!this._resolved) {
            this.pendingPlayState = "paused";
            return
        }
        this.state = "paused",
        this.holdTime = (e = this.currentTime) !== null && e !== void 0 ? e : 0
    }
    complete() {
        this.state !== "running" && this.play(),
        this.pendingPlayState = this.state = "finished",
        this.holdTime = null
    }
    finish() {
        this.teardown(),
        this.state = "finished";
        const {onComplete: e} = this.options;
        e && e()
    }
    cancel() {
        this.cancelTime !== null && this.tick(this.cancelTime),
        this.teardown(),
        this.updateFinishedPromise()
    }
    teardown() {
        this.state = "idle",
        this.stopDriver(),
        this.resolveFinishedPromise(),
        this.updateFinishedPromise(),
        this.startTime = this.cancelTime = null,
        this.resolver.cancel()
    }
    stopDriver() {
        this.driver && (this.driver.stop(),
        this.driver = void 0)
    }
    sample(e) {
        return this.startTime = 0,
        this.tick(e, !0)
    }
}
const eD = new Set(["opacity", "clipPath", "filter", "transform"]);
function tD(t, e, n, {delay: i=0, duration: o=300, repeat: l=0, repeatType: c="loop", ease: d="easeInOut", times: h}={}) {
    const p = {
        [e]: n
    };
    h && (p.offset = h);
    const m = aw(d, o);
    return Array.isArray(m) && (p.easing = m),
    t.animate(p, {
        delay: i,
        duration: o,
        easing: Array.isArray(m) ? "linear" : m,
        fill: "both",
        iterations: l + 1,
        direction: c === "reverse" ? "alternate" : "normal"
    })
}
const nD = Ff(()=>Object.hasOwnProperty.call(Element.prototype, "animate"))
  , El = 10
  , rD = 2e4;
function sD(t) {
    return Jf(t.type) || t.type === "spring" || !ow(t.ease)
}
function iD(t, e) {
    const n = new fh({
        ...e,
        keyframes: t,
        repeat: 0,
        delay: 0,
        isGenerator: !0
    });
    let i = {
        done: !1,
        value: t[0]
    };
    const o = [];
    let l = 0;
    for (; !i.done && l < rD; )
        i = n.sample(l),
        o.push(i.value),
        l += El;
    return {
        times: void 0,
        keyframes: o,
        duration: l - El,
        ease: "linear"
    }
}
const Uw = {
    anticipate: xw,
    backInOut: vw,
    circInOut: Sw
};
function oD(t) {
    return t in Uw
}
class My extends Lw {
    constructor(e) {
        super(e);
        const {name: n, motionValue: i, element: o, keyframes: l} = this.options;
        this.resolver = new Iw(l,(c,d)=>this.onKeyframesResolved(c, d),n,i,o),
        this.resolver.scheduleResolve()
    }
    initPlayback(e, n) {
        let {duration: i=300, times: o, ease: l, type: c, motionValue: d, name: h, startTime: p} = this.options;
        if (!d.owner || !d.owner.current)
            return !1;
        if (typeof l == "string" && bl() && oD(l) && (l = Uw[l]),
        sD(this.options)) {
            const {onComplete: y, onUpdate: v, motionValue: w, element: C, ...P} = this.options
              , T = iD(e, P);
            e = T.keyframes,
            e.length === 1 && (e[1] = e[0]),
            i = T.duration,
            o = T.times,
            l = T.ease,
            c = "keyframes"
        }
        const m = tD(d.owner.current, h, e, {
            ...this.options,
            duration: i,
            times: o,
            ease: l
        });
        return m.startTime = p ?? this.calcStartTime(),
        this.pendingTimeline ? (gy(m, this.pendingTimeline),
        this.pendingTimeline = void 0) : m.onfinish = ()=>{
            const {onComplete: y} = this.options;
            d.set(ql(e, this.options, n)),
            y && y(),
            this.cancel(),
            this.resolveFinishedPromise()
        }
        ,
        {
            animation: m,
            duration: i,
            times: o,
            type: c,
            ease: l,
            keyframes: e
        }
    }
    get duration() {
        const {resolved: e} = this;
        if (!e)
            return 0;
        const {duration: n} = e;
        return Qn(n)
    }
    get time() {
        const {resolved: e} = this;
        if (!e)
            return 0;
        const {animation: n} = e;
        return Qn(n.currentTime || 0)
    }
    set time(e) {
        const {resolved: n} = this;
        if (!n)
            return;
        const {animation: i} = n;
        i.currentTime = Hn(e)
    }
    get speed() {
        const {resolved: e} = this;
        if (!e)
            return 1;
        const {animation: n} = e;
        return n.playbackRate
    }
    set speed(e) {
        const {resolved: n} = this;
        if (!n)
            return;
        const {animation: i} = n;
        i.playbackRate = e
    }
    get state() {
        const {resolved: e} = this;
        if (!e)
            return "idle";
        const {animation: n} = e;
        return n.playState
    }
    get startTime() {
        const {resolved: e} = this;
        if (!e)
            return null;
        const {animation: n} = e;
        return n.startTime
    }
    attachTimeline(e) {
        if (!this._resolved)
            this.pendingTimeline = e;
        else {
            const {resolved: n} = this;
            if (!n)
                return Wt;
            const {animation: i} = n;
            gy(i, e)
        }
        return Wt
    }
    play() {
        if (this.isStopped)
            return;
        const {resolved: e} = this;
        if (!e)
            return;
        const {animation: n} = e;
        n.playState === "finished" && this.updateFinishedPromise(),
        n.play()
    }
    pause() {
        const {resolved: e} = this;
        if (!e)
            return;
        const {animation: n} = e;
        n.pause()
    }
    stop() {
        if (this.resolver.cancel(),
        this.isStopped = !0,
        this.state === "idle")
            return;
        this.resolveFinishedPromise(),
        this.updateFinishedPromise();
        const {resolved: e} = this;
        if (!e)
            return;
        const {animation: n, keyframes: i, duration: o, type: l, ease: c, times: d} = e;
        if (n.playState === "idle" || n.playState === "finished")
            return;
        if (this.time) {
            const {motionValue: p, onUpdate: m, onComplete: y, element: v, ...w} = this.options
              , C = new fh({
                ...w,
                keyframes: i,
                duration: o,
                type: l,
                ease: c,
                times: d,
                isGenerator: !0
            })
              , P = Hn(this.time);
            p.setWithVelocity(C.sample(P - El).value, C.sample(P).value, El)
        }
        const {onStop: h} = this.options;
        h && h(),
        this.cancel()
    }
    complete() {
        const {resolved: e} = this;
        e && e.animation.finish()
    }
    cancel() {
        const {resolved: e} = this;
        e && e.animation.cancel()
    }
    static supports(e) {
        const {motionValue: n, name: i, repeatDelay: o, repeatType: l, damping: c, type: d} = e;
        if (!n || !n.owner || !(n.owner.current instanceof HTMLElement))
            return !1;
        const {onUpdate: h, transformTemplate: p} = n.owner.getProps();
        return nD() && i && eD.has(i) && !h && !p && !o && l !== "mirror" && c !== 0 && d !== "inertia"
    }
}
const aD = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
}
  , lD = t=>({
    type: "spring",
    stiffness: 550,
    damping: t === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
})
  , uD = {
    type: "keyframes",
    duration: .8
}
  , cD = {
    type: "keyframes",
    ease: [.25, .1, .35, 1],
    duration: .3
}
  , dD = (t,{keyframes: e})=>e.length > 2 ? uD : ns.has(t) ? t.startsWith("scale") ? lD(e[1]) : aD : cD;
function fD({when: t, delay: e, delayChildren: n, staggerChildren: i, staggerDirection: o, repeat: l, repeatType: c, repeatDelay: d, from: h, elapsed: p, ...m}) {
    return !!Object.keys(m).length
}
const hh = (t,e,n,i={},o,l)=>c=>{
    const d = Yf(i, t) || {}
      , h = d.delay || i.delay || 0;
    let {elapsed: p=0} = i;
    p = p - Hn(h);
    let m = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: e.getVelocity(),
        ...d,
        delay: -p,
        onUpdate: v=>{
            e.set(v),
            d.onUpdate && d.onUpdate(v)
        }
        ,
        onComplete: ()=>{
            c(),
            d.onComplete && d.onComplete()
        }
        ,
        name: t,
        motionValue: e,
        element: l ? void 0 : o
    };
    fD(d) || (m = {
        ...m,
        ...dD(t, m)
    }),
    m.duration && (m.duration = Hn(m.duration)),
    m.repeatDelay && (m.repeatDelay = Hn(m.repeatDelay)),
    m.from !== void 0 && (m.keyframes[0] = m.from);
    let y = !1;
    if ((m.type === !1 || m.duration === 0 && !m.repeatDelay) && (m.duration = 0,
    m.delay === 0 && (y = !0)),
    y && !l && e.get() !== void 0) {
        const v = ql(m.keyframes, d);
        if (v !== void 0)
            return Ue.update(()=>{
                m.onUpdate(v),
                m.onComplete()
            }
            ),
            new NN([])
    }
    return !l && My.supports(m) ? new My(m) : new fh(m)
}
;
function hD({protectedKeys: t, needsAnimating: e}, n) {
    const i = t.hasOwnProperty(n) && e[n] !== !0;
    return e[n] = !1,
    i
}
function $w(t, e, {delay: n=0, transitionOverride: i, type: o}={}) {
    var l;
    let {transition: c=t.getDefaultTransition(), transitionEnd: d, ...h} = e;
    i && (c = i);
    const p = []
      , m = o && t.animationState && t.animationState.getState()[o];
    for (const y in h) {
        const v = t.getValue(y, (l = t.latestValues[y]) !== null && l !== void 0 ? l : null)
          , w = h[y];
        if (w === void 0 || m && hD(m, y))
            continue;
        const C = {
            delay: n,
            ...Yf(c || {}, y)
        };
        let P = !1;
        if (window.MotionHandoffAnimation) {
            const k = hw(t);
            if (k) {
                const N = window.MotionHandoffAnimation(k, y, Ue);
                N !== null && (C.startTime = N,
                P = !0)
            }
        }
        qd(t, y),
        v.start(hh(y, v, w, t.shouldReduceMotion && dw.has(y) ? {
            type: !1
        } : C, t, P));
        const T = v.animation;
        T && p.push(T)
    }
    return d && Promise.all(p).then(()=>{
        Ue.update(()=>{
            d && HN(t, d)
        }
        )
    }
    ),
    p
}
function tf(t, e, n={}) {
    var i;
    const o = Kl(t, e, n.type === "exit" ? (i = t.presenceContext) === null || i === void 0 ? void 0 : i.custom : void 0);
    let {transition: l=t.getDefaultTransition() || {}} = o || {};
    n.transitionOverride && (l = n.transitionOverride);
    const c = o ? ()=>Promise.all($w(t, o, n)) : ()=>Promise.resolve()
      , d = t.variantChildren && t.variantChildren.size ? (p=0)=>{
        const {delayChildren: m=0, staggerChildren: y, staggerDirection: v} = l;
        return pD(t, e, m + p, y, v, n)
    }
    : ()=>Promise.resolve()
      , {when: h} = l;
    if (h) {
        const [p,m] = h === "beforeChildren" ? [c, d] : [d, c];
        return p().then(()=>m())
    } else
        return Promise.all([c(), d(n.delay)])
}
function pD(t, e, n=0, i=0, o=1, l) {
    const c = []
      , d = (t.variantChildren.size - 1) * i
      , h = o === 1 ? (p=0)=>p * i : (p=0)=>d - p * i;
    return Array.from(t.variantChildren).sort(mD).forEach((p,m)=>{
        p.notify("AnimationStart", e),
        c.push(tf(p, e, {
            ...l,
            delay: n + h(m)
        }).then(()=>p.notify("AnimationComplete", e)))
    }
    ),
    Promise.all(c)
}
function mD(t, e) {
    return t.sortNodePosition(e)
}
function gD(t, e, n={}) {
    t.notify("AnimationStart", e);
    let i;
    if (Array.isArray(e)) {
        const o = e.map(l=>tf(t, l, n));
        i = Promise.all(o)
    } else if (typeof e == "string")
        i = tf(t, e, n);
    else {
        const o = typeof e == "function" ? Kl(t, e, n.custom) : e;
        i = Promise.all($w(t, o, n))
    }
    return i.then(()=>{
        t.notify("AnimationComplete", e)
    }
    )
}
const yD = zf.length;
function Ww(t) {
    if (!t)
        return;
    if (!t.isControllingVariants) {
        const n = t.parent ? Ww(t.parent) || {} : {};
        return t.props.initial !== void 0 && (n.initial = t.props.initial),
        n
    }
    const e = {};
    for (let n = 0; n < yD; n++) {
        const i = zf[n]
          , o = t.props[i];
        (Po(o) || o === !1) && (e[i] = o)
    }
    return e
}
const vD = [...Vf].reverse()
  , xD = Vf.length;
function wD(t) {
    return e=>Promise.all(e.map(({animation: n, options: i})=>gD(t, n, i)))
}
function SD(t) {
    let e = wD(t)
      , n = Dy()
      , i = !0;
    const o = h=>(p,m)=>{
        var y;
        const v = Kl(t, m, h === "exit" ? (y = t.presenceContext) === null || y === void 0 ? void 0 : y.custom : void 0);
        if (v) {
            const {transition: w, transitionEnd: C, ...P} = v;
            p = {
                ...p,
                ...P,
                ...C
            }
        }
        return p
    }
    ;
    function l(h) {
        e = h(t)
    }
    function c(h) {
        const {props: p} = t
          , m = Ww(t.parent) || {}
          , y = []
          , v = new Set;
        let w = {}
          , C = 1 / 0;
        for (let T = 0; T < xD; T++) {
            const k = vD[T]
              , N = n[k]
              , O = p[k] !== void 0 ? p[k] : m[k]
              , j = Po(O)
              , L = k === h ? N.isActive : null;
            L === !1 && (C = T);
            let V = O === m[k] && O !== p[k] && j;
            if (V && i && t.manuallyAnimateOnMount && (V = !1),
            N.protectedKeys = {
                ...w
            },
            !N.isActive && L === null || !O && !N.prevProp || Hl(O) || typeof O == "boolean")
                continue;
            const z = PD(N.prevProp, O);
            let K = z || k === h && N.isActive && !V && j || T > C && j
              , ie = !1;
            const ue = Array.isArray(O) ? O : [O];
            let ve = ue.reduce(o(k), {});
            L === !1 && (ve = {});
            const {prevResolvedValues: le={}} = N
              , Se = {
                ...le,
                ...ve
            }
              , X = te=>{
                K = !0,
                v.has(te) && (ie = !0,
                v.delete(te)),
                N.needsAnimating[te] = !0;
                const F = t.getValue(te);
                F && (F.liveStyle = !1)
            }
            ;
            for (const te in Se) {
                const F = ve[te]
                  , G = le[te];
                if (w.hasOwnProperty(te))
                    continue;
                let Z = !1;
                Hd(F) && Hd(G) ? Z = !rw(F, G) : Z = F !== G,
                Z ? F != null ? X(te) : v.add(te) : F !== void 0 && v.has(te) ? X(te) : N.protectedKeys[te] = !0
            }
            N.prevProp = O,
            N.prevResolvedValues = ve,
            N.isActive && (w = {
                ...w,
                ...ve
            }),
            i && t.blockInitialAnimation && (K = !1),
            K && (!(V && z) || ie) && y.push(...ue.map(te=>({
                animation: te,
                options: {
                    type: k
                }
            })))
        }
        if (v.size) {
            const T = {};
            v.forEach(k=>{
                const N = t.getBaseTarget(k)
                  , O = t.getValue(k);
                O && (O.liveStyle = !0),
                T[k] = N ?? null
            }
            ),
            y.push({
                animation: T
            })
        }
        let P = !!y.length;
        return i && (p.initial === !1 || p.initial === p.animate) && !t.manuallyAnimateOnMount && (P = !1),
        i = !1,
        P ? e(y) : Promise.resolve()
    }
    function d(h, p) {
        var m;
        if (n[h].isActive === p)
            return Promise.resolve();
        (m = t.variantChildren) === null || m === void 0 || m.forEach(v=>{
            var w;
            return (w = v.animationState) === null || w === void 0 ? void 0 : w.setActive(h, p)
        }
        ),
        n[h].isActive = p;
        const y = c(h);
        for (const v in n)
            n[v].protectedKeys = {};
        return y
    }
    return {
        animateChanges: c,
        setActive: d,
        setAnimateFunction: l,
        getState: ()=>n,
        reset: ()=>{
            n = Dy(),
            i = !0
        }
    }
}
function PD(t, e) {
    return typeof e == "string" ? e !== t : Array.isArray(e) ? !rw(e, t) : !1
}
function $r(t=!1) {
    return {
        isActive: t,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}
function Dy() {
    return {
        animate: $r(!0),
        whileInView: $r(),
        whileHover: $r(),
        whileTap: $r(),
        whileDrag: $r(),
        whileFocus: $r(),
        exit: $r()
    }
}
class Ar {
    constructor(e) {
        this.isMounted = !1,
        this.node = e
    }
    update() {}
}
class TD extends Ar {
    constructor(e) {
        super(e),
        e.animationState || (e.animationState = SD(e))
    }
    updateAnimationControlsSubscription() {
        const {animate: e} = this.node.getProps();
        Hl(e) && (this.unmountControls = e.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {animate: e} = this.node.getProps()
          , {animate: n} = this.node.prevProps || {};
        e !== n && this.updateAnimationControlsSubscription()
    }
    unmount() {
        var e;
        this.node.animationState.reset(),
        (e = this.unmountControls) === null || e === void 0 || e.call(this)
    }
}
let bD = 0;
class CD extends Ar {
    constructor() {
        super(...arguments),
        this.id = bD++
    }
    update() {
        if (!this.node.presenceContext)
            return;
        const {isPresent: e, onExitComplete: n} = this.node.presenceContext
          , {isPresent: i} = this.node.prevPresenceContext || {};
        if (!this.node.animationState || e === i)
            return;
        const o = this.node.animationState.setActive("exit", !e);
        n && !e && o.then(()=>n(this.id))
    }
    mount() {
        const {register: e} = this.node.presenceContext || {};
        e && (this.unmount = e(this.id))
    }
    unmount() {}
}
const _D = {
    animation: {
        Feature: TD
    },
    exit: {
        Feature: CD
    }
};
function _o(t, e, n, i={
    passive: !0
}) {
    return t.addEventListener(e, n, i),
    ()=>t.removeEventListener(e, n)
}
function Do(t) {
    return {
        point: {
            x: t.pageX,
            y: t.pageY
        }
    }
}
const ED = t=>e=>th(e) && t(e, Do(e));
function to(t, e, n, i) {
    return _o(t, e, ED(n), i)
}
const Oy = (t,e)=>Math.abs(t - e);
function kD(t, e) {
    const n = Oy(t.x, e.x)
      , i = Oy(t.y, e.y);
    return Math.sqrt(n ** 2 + i ** 2)
}
class Hw {
    constructor(e, n, {transformPagePoint: i, contextWindow: o, dragSnapToOrigin: l=!1}={}) {
        if (this.startEvent = null,
        this.lastMoveEvent = null,
        this.lastMoveEventInfo = null,
        this.handlers = {},
        this.contextWindow = window,
        this.updatePoint = ()=>{
            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const y = md(this.lastMoveEventInfo, this.history)
              , v = this.startEvent !== null
              , w = kD(y.offset, {
                x: 0,
                y: 0
            }) >= 3;
            if (!v && !w)
                return;
            const {point: C} = y
              , {timestamp: P} = pt;
            this.history.push({
                ...C,
                timestamp: P
            });
            const {onStart: T, onMove: k} = this.handlers;
            v || (T && T(this.lastMoveEvent, y),
            this.startEvent = this.lastMoveEvent),
            k && k(this.lastMoveEvent, y)
        }
        ,
        this.handlePointerMove = (y,v)=>{
            this.lastMoveEvent = y,
            this.lastMoveEventInfo = pd(v, this.transformPagePoint),
            Ue.update(this.updatePoint, !0)
        }
        ,
        this.handlePointerUp = (y,v)=>{
            this.end();
            const {onEnd: w, onSessionEnd: C, resumeAnimation: P} = this.handlers;
            if (this.dragSnapToOrigin && P && P(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const T = md(y.type === "pointercancel" ? this.lastMoveEventInfo : pd(v, this.transformPagePoint), this.history);
            this.startEvent && w && w(y, T),
            C && C(y, T)
        }
        ,
        !th(e))
            return;
        this.dragSnapToOrigin = l,
        this.handlers = n,
        this.transformPagePoint = i,
        this.contextWindow = o || window;
        const c = Do(e)
          , d = pd(c, this.transformPagePoint)
          , {point: h} = d
          , {timestamp: p} = pt;
        this.history = [{
            ...h,
            timestamp: p
        }];
        const {onSessionStart: m} = n;
        m && m(e, md(d, this.history)),
        this.removeListeners = Mo(to(this.contextWindow, "pointermove", this.handlePointerMove), to(this.contextWindow, "pointerup", this.handlePointerUp), to(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(e) {
        this.handlers = e
    }
    end() {
        this.removeListeners && this.removeListeners(),
        Er(this.updatePoint)
    }
}
function pd(t, e) {
    return e ? {
        point: e(t.point)
    } : t
}
function Iy(t, e) {
    return {
        x: t.x - e.x,
        y: t.y - e.y
    }
}
function md({point: t}, e) {
    return {
        point: t,
        delta: Iy(t, Qw(e)),
        offset: Iy(t, AD(e)),
        velocity: RD(e, .1)
    }
}
function AD(t) {
    return t[0]
}
function Qw(t) {
    return t[t.length - 1]
}
function RD(t, e) {
    if (t.length < 2)
        return {
            x: 0,
            y: 0
        };
    let n = t.length - 1
      , i = null;
    const o = Qw(t);
    for (; n >= 0 && (i = t[n],
    !(o.timestamp - i.timestamp > Hn(e))); )
        n--;
    if (!i)
        return {
            x: 0,
            y: 0
        };
    const l = Qn(o.timestamp - i.timestamp);
    if (l === 0)
        return {
            x: 0,
            y: 0
        };
    const c = {
        x: (o.x - i.x) / l,
        y: (o.y - i.y) / l
    };
    return c.x === 1 / 0 && (c.x = 0),
    c.y === 1 / 0 && (c.y = 0),
    c
}
const Kw = 1e-4
  , ND = 1 - Kw
  , MD = 1 + Kw
  , qw = .01
  , DD = 0 - qw
  , OD = 0 + qw;
function Ht(t) {
    return t.max - t.min
}
function ID(t, e, n) {
    return Math.abs(t - e) <= n
}
function Ly(t, e, n, i=.5) {
    t.origin = i,
    t.originPoint = qe(e.min, e.max, t.origin),
    t.scale = Ht(n) / Ht(e),
    t.translate = qe(n.min, n.max, t.origin) - t.originPoint,
    (t.scale >= ND && t.scale <= MD || isNaN(t.scale)) && (t.scale = 1),
    (t.translate >= DD && t.translate <= OD || isNaN(t.translate)) && (t.translate = 0)
}
function no(t, e, n, i) {
    Ly(t.x, e.x, n.x, i ? i.originX : void 0),
    Ly(t.y, e.y, n.y, i ? i.originY : void 0)
}
function jy(t, e, n) {
    t.min = n.min + e.min,
    t.max = t.min + Ht(e)
}
function LD(t, e, n) {
    jy(t.x, e.x, n.x),
    jy(t.y, e.y, n.y)
}
function Fy(t, e, n) {
    t.min = e.min - n.min,
    t.max = t.min + Ht(e)
}
function ro(t, e, n) {
    Fy(t.x, e.x, n.x),
    Fy(t.y, e.y, n.y)
}
function jD(t, {min: e, max: n}, i) {
    return e !== void 0 && t < e ? t = i ? qe(e, t, i.min) : Math.max(t, e) : n !== void 0 && t > n && (t = i ? qe(n, t, i.max) : Math.min(t, n)),
    t
}
function Vy(t, e, n) {
    return {
        min: e !== void 0 ? t.min + e : void 0,
        max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0
    }
}
function FD(t, {top: e, left: n, bottom: i, right: o}) {
    return {
        x: Vy(t.x, n, o),
        y: Vy(t.y, e, i)
    }
}
function zy(t, e) {
    let n = e.min - t.min
      , i = e.max - t.max;
    return e.max - e.min < t.max - t.min && ([n,i] = [i, n]),
    {
        min: n,
        max: i
    }
}
function VD(t, e) {
    return {
        x: zy(t.x, e.x),
        y: zy(t.y, e.y)
    }
}
function zD(t, e) {
    let n = .5;
    const i = Ht(t)
      , o = Ht(e);
    return o > i ? n = Ks(e.min, e.max - i, t.min) : i > o && (n = Ks(t.min, t.max - o, e.min)),
    Gn(0, 1, n)
}
function BD(t, e) {
    const n = {};
    return e.min !== void 0 && (n.min = e.min - t.min),
    e.max !== void 0 && (n.max = e.max - t.min),
    n
}
const nf = .35;
function UD(t=nf) {
    return t === !1 ? t = 0 : t === !0 && (t = nf),
    {
        x: By(t, "left", "right"),
        y: By(t, "top", "bottom")
    }
}
function By(t, e, n) {
    return {
        min: Uy(t, e),
        max: Uy(t, n)
    }
}
function Uy(t, e) {
    return typeof t == "number" ? t : t[e] || 0
}
const $y = ()=>({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
})
  , Ds = ()=>({
    x: $y(),
    y: $y()
})
  , Wy = ()=>({
    min: 0,
    max: 0
})
  , et = ()=>({
    x: Wy(),
    y: Wy()
});
function en(t) {
    return [t("x"), t("y")]
}
function Zw({top: t, left: e, right: n, bottom: i}) {
    return {
        x: {
            min: e,
            max: n
        },
        y: {
            min: t,
            max: i
        }
    }
}
function $D({x: t, y: e}) {
    return {
        top: e.min,
        right: t.max,
        bottom: e.max,
        left: t.min
    }
}
function WD(t, e) {
    if (!e)
        return t;
    const n = e({
        x: t.left,
        y: t.top
    })
      , i = e({
        x: t.right,
        y: t.bottom
    });
    return {
        top: n.y,
        left: n.x,
        bottom: i.y,
        right: i.x
    }
}
function gd(t) {
    return t === void 0 || t === 1
}
function rf({scale: t, scaleX: e, scaleY: n}) {
    return !gd(t) || !gd(e) || !gd(n)
}
function Wr(t) {
    return rf(t) || Gw(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY
}
function Gw(t) {
    return Hy(t.x) || Hy(t.y)
}
function Hy(t) {
    return t && t !== "0%"
}
function kl(t, e, n) {
    const i = t - n
      , o = e * i;
    return n + o
}
function Qy(t, e, n, i, o) {
    return o !== void 0 && (t = kl(t, o, i)),
    kl(t, n, i) + e
}
function sf(t, e=0, n=1, i, o) {
    t.min = Qy(t.min, e, n, i, o),
    t.max = Qy(t.max, e, n, i, o)
}
function Xw(t, {x: e, y: n}) {
    sf(t.x, e.translate, e.scale, e.originPoint),
    sf(t.y, n.translate, n.scale, n.originPoint)
}
const Ky = .999999999999
  , qy = 1.0000000000001;
function HD(t, e, n, i=!1) {
    const o = n.length;
    if (!o)
        return;
    e.x = e.y = 1;
    let l, c;
    for (let d = 0; d < o; d++) {
        l = n[d],
        c = l.projectionDelta;
        const {visualElement: h} = l.options;
        h && h.props.style && h.props.style.display === "contents" || (i && l.options.layoutScroll && l.scroll && l !== l.root && Is(t, {
            x: -l.scroll.offset.x,
            y: -l.scroll.offset.y
        }),
        c && (e.x *= c.x.scale,
        e.y *= c.y.scale,
        Xw(t, c)),
        i && Wr(l.latestValues) && Is(t, l.latestValues))
    }
    e.x < qy && e.x > Ky && (e.x = 1),
    e.y < qy && e.y > Ky && (e.y = 1)
}
function Os(t, e) {
    t.min = t.min + e,
    t.max = t.max + e
}
function Zy(t, e, n, i, o=.5) {
    const l = qe(t.min, t.max, o);
    sf(t, e, n, l, i)
}
function Is(t, e) {
    Zy(t.x, e.x, e.scaleX, e.scale, e.originX),
    Zy(t.y, e.y, e.scaleY, e.scale, e.originY)
}
function Yw(t, e) {
    return Zw(WD(t.getBoundingClientRect(), e))
}
function QD(t, e, n) {
    const i = Yw(t, n)
      , {scroll: o} = e;
    return o && (Os(i.x, o.offset.x),
    Os(i.y, o.offset.y)),
    i
}
const Jw = ({current: t})=>t ? t.ownerDocument.defaultView : null
  , KD = new WeakMap;
class qD {
    constructor(e) {
        this.openDragLock = null,
        this.isDragging = !1,
        this.currentDirection = null,
        this.originPoint = {
            x: 0,
            y: 0
        },
        this.constraints = !1,
        this.hasMutatedConstraints = !1,
        this.elastic = et(),
        this.visualElement = e
    }
    start(e, {snapToCursor: n=!1}={}) {
        const {presenceContext: i} = this.visualElement;
        if (i && i.isPresent === !1)
            return;
        const o = m=>{
            const {dragSnapToOrigin: y} = this.getProps();
            y ? this.pauseAnimation() : this.stopAnimation(),
            n && this.snapToCursor(Do(m).point)
        }
          , l = (m,y)=>{
            const {drag: v, dragPropagation: w, onDragStart: C} = this.getProps();
            if (v && !w && (this.openDragLock && this.openDragLock(),
            this.openDragLock = zN(v),
            !this.openDragLock))
                return;
            this.isDragging = !0,
            this.currentDirection = null,
            this.resolveConstraints(),
            this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
            this.visualElement.projection.target = void 0),
            en(T=>{
                let k = this.getAxisMotionValue(T).get() || 0;
                if (_n.test(k)) {
                    const {projection: N} = this.visualElement;
                    if (N && N.layout) {
                        const O = N.layout.layoutBox[T];
                        O && (k = Ht(O) * (parseFloat(k) / 100))
                    }
                }
                this.originPoint[T] = k
            }
            ),
            C && Ue.postRender(()=>C(m, y)),
            qd(this.visualElement, "transform");
            const {animationState: P} = this.visualElement;
            P && P.setActive("whileDrag", !0)
        }
          , c = (m,y)=>{
            const {dragPropagation: v, dragDirectionLock: w, onDirectionLock: C, onDrag: P} = this.getProps();
            if (!v && !this.openDragLock)
                return;
            const {offset: T} = y;
            if (w && this.currentDirection === null) {
                this.currentDirection = ZD(T),
                this.currentDirection !== null && C && C(this.currentDirection);
                return
            }
            this.updateAxis("x", y.point, T),
            this.updateAxis("y", y.point, T),
            this.visualElement.render(),
            P && P(m, y)
        }
          , d = (m,y)=>this.stop(m, y)
          , h = ()=>en(m=>{
            var y;
            return this.getAnimationState(m) === "paused" && ((y = this.getAxisMotionValue(m).animation) === null || y === void 0 ? void 0 : y.play())
        }
        )
          , {dragSnapToOrigin: p} = this.getProps();
        this.panSession = new Hw(e,{
            onSessionStart: o,
            onStart: l,
            onMove: c,
            onSessionEnd: d,
            resumeAnimation: h
        },{
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: p,
            contextWindow: Jw(this.visualElement)
        })
    }
    stop(e, n) {
        const i = this.isDragging;
        if (this.cancel(),
        !i)
            return;
        const {velocity: o} = n;
        this.startAnimation(o);
        const {onDragEnd: l} = this.getProps();
        l && Ue.postRender(()=>l(e, n))
    }
    cancel() {
        this.isDragging = !1;
        const {projection: e, animationState: n} = this.visualElement;
        e && (e.isAnimationBlocked = !1),
        this.panSession && this.panSession.end(),
        this.panSession = void 0;
        const {dragPropagation: i} = this.getProps();
        !i && this.openDragLock && (this.openDragLock(),
        this.openDragLock = null),
        n && n.setActive("whileDrag", !1)
    }
    updateAxis(e, n, i) {
        const {drag: o} = this.getProps();
        if (!i || !Xa(e, o, this.currentDirection))
            return;
        const l = this.getAxisMotionValue(e);
        let c = this.originPoint[e] + i[e];
        this.constraints && this.constraints[e] && (c = jD(c, this.constraints[e], this.elastic[e])),
        l.set(c)
    }
    resolveConstraints() {
        var e;
        const {dragConstraints: n, dragElastic: i} = this.getProps()
          , o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (e = this.visualElement.projection) === null || e === void 0 ? void 0 : e.layout
          , l = this.constraints;
        n && Ns(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && o ? this.constraints = FD(o.layoutBox, n) : this.constraints = !1,
        this.elastic = UD(i),
        l !== this.constraints && o && this.constraints && !this.hasMutatedConstraints && en(c=>{
            this.constraints !== !1 && this.getAxisMotionValue(c) && (this.constraints[c] = BD(o.layoutBox[c], this.constraints[c]))
        }
        )
    }
    resolveRefConstraints() {
        const {dragConstraints: e, onMeasureDragConstraints: n} = this.getProps();
        if (!e || !Ns(e))
            return !1;
        const i = e.current
          , {projection: o} = this.visualElement;
        if (!o || !o.layout)
            return !1;
        const l = QD(i, o.root, this.visualElement.getTransformPagePoint());
        let c = VD(o.layout.layoutBox, l);
        if (n) {
            const d = n($D(c));
            this.hasMutatedConstraints = !!d,
            d && (c = Zw(d))
        }
        return c
    }
    startAnimation(e) {
        const {drag: n, dragMomentum: i, dragElastic: o, dragTransition: l, dragSnapToOrigin: c, onDragTransitionEnd: d} = this.getProps()
          , h = this.constraints || {}
          , p = en(m=>{
            if (!Xa(m, n, this.currentDirection))
                return;
            let y = h && h[m] || {};
            c && (y = {
                min: 0,
                max: 0
            });
            const v = o ? 200 : 1e6
              , w = o ? 40 : 1e7
              , C = {
                type: "inertia",
                velocity: i ? e[m] : 0,
                bounceStiffness: v,
                bounceDamping: w,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...l,
                ...y
            };
            return this.startAxisValueAnimation(m, C)
        }
        );
        return Promise.all(p).then(d)
    }
    startAxisValueAnimation(e, n) {
        const i = this.getAxisMotionValue(e);
        return qd(this.visualElement, e),
        i.start(hh(e, i, 0, n, this.visualElement, !1))
    }
    stopAnimation() {
        en(e=>this.getAxisMotionValue(e).stop())
    }
    pauseAnimation() {
        en(e=>{
            var n;
            return (n = this.getAxisMotionValue(e).animation) === null || n === void 0 ? void 0 : n.pause()
        }
        )
    }
    getAnimationState(e) {
        var n;
        return (n = this.getAxisMotionValue(e).animation) === null || n === void 0 ? void 0 : n.state
    }
    getAxisMotionValue(e) {
        const n = `_drag${e.toUpperCase()}`
          , i = this.visualElement.getProps()
          , o = i[n];
        return o || this.visualElement.getValue(e, (i.initial ? i.initial[e] : void 0) || 0)
    }
    snapToCursor(e) {
        en(n=>{
            const {drag: i} = this.getProps();
            if (!Xa(n, i, this.currentDirection))
                return;
            const {projection: o} = this.visualElement
              , l = this.getAxisMotionValue(n);
            if (o && o.layout) {
                const {min: c, max: d} = o.layout.layoutBox[n];
                l.set(e[n] - qe(c, d, .5))
            }
        }
        )
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current)
            return;
        const {drag: e, dragConstraints: n} = this.getProps()
          , {projection: i} = this.visualElement;
        if (!Ns(n) || !i || !this.constraints)
            return;
        this.stopAnimation();
        const o = {
            x: 0,
            y: 0
        };
        en(c=>{
            const d = this.getAxisMotionValue(c);
            if (d && this.constraints !== !1) {
                const h = d.get();
                o[c] = zD({
                    min: h,
                    max: h
                }, this.constraints[c])
            }
        }
        );
        const {transformTemplate: l} = this.visualElement.getProps();
        this.visualElement.current.style.transform = l ? l({}, "") : "none",
        i.root && i.root.updateScroll(),
        i.updateLayout(),
        this.resolveConstraints(),
        en(c=>{
            if (!Xa(c, e, null))
                return;
            const d = this.getAxisMotionValue(c)
              , {min: h, max: p} = this.constraints[c];
            d.set(qe(h, p, o[c]))
        }
        )
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        KD.set(this.visualElement, this);
        const e = this.visualElement.current
          , n = to(e, "pointerdown", h=>{
            const {drag: p, dragListener: m=!0} = this.getProps();
            p && m && this.start(h)
        }
        )
          , i = ()=>{
            const {dragConstraints: h} = this.getProps();
            Ns(h) && h.current && (this.constraints = this.resolveRefConstraints())
        }
          , {projection: o} = this.visualElement
          , l = o.addEventListener("measure", i);
        o && !o.layout && (o.root && o.root.updateScroll(),
        o.updateLayout()),
        Ue.read(i);
        const c = _o(window, "resize", ()=>this.scalePositionWithinConstraints())
          , d = o.addEventListener("didUpdate", (({delta: h, hasLayoutChanged: p})=>{
            this.isDragging && p && (en(m=>{
                const y = this.getAxisMotionValue(m);
                y && (this.originPoint[m] += h[m].translate,
                y.set(y.get() + h[m].translate))
            }
            ),
            this.visualElement.render())
        }
        ));
        return ()=>{
            c(),
            n(),
            l(),
            d && d()
        }
    }
    getProps() {
        const e = this.visualElement.getProps()
          , {drag: n=!1, dragDirectionLock: i=!1, dragPropagation: o=!1, dragConstraints: l=!1, dragElastic: c=nf, dragMomentum: d=!0} = e;
        return {
            ...e,
            drag: n,
            dragDirectionLock: i,
            dragPropagation: o,
            dragConstraints: l,
            dragElastic: c,
            dragMomentum: d
        }
    }
}
function Xa(t, e, n) {
    return (e === !0 || e === t) && (n === null || n === t)
}
function ZD(t, e=10) {
    let n = null;
    return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"),
    n
}
class GD extends Ar {
    constructor(e) {
        super(e),
        this.removeGroupControls = Wt,
        this.removeListeners = Wt,
        this.controls = new qD(e)
    }
    mount() {
        const {dragControls: e} = this.node.getProps();
        e && (this.removeGroupControls = e.subscribe(this.controls)),
        this.removeListeners = this.controls.addListeners() || Wt
    }
    unmount() {
        this.removeGroupControls(),
        this.removeListeners()
    }
}
const Gy = t=>(e,n)=>{
    t && Ue.postRender(()=>t(e, n))
}
;
class XD extends Ar {
    constructor() {
        super(...arguments),
        this.removePointerDownListener = Wt
    }
    onPointerDown(e) {
        this.session = new Hw(e,this.createPanHandlers(),{
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: Jw(this.node)
        })
    }
    createPanHandlers() {
        const {onPanSessionStart: e, onPanStart: n, onPan: i, onPanEnd: o} = this.node.getProps();
        return {
            onSessionStart: Gy(e),
            onStart: Gy(n),
            onMove: i,
            onEnd: (l,c)=>{
                delete this.session,
                o && Ue.postRender(()=>o(l, c))
            }
        }
    }
    mount() {
        this.removePointerDownListener = to(this.node.current, "pointerdown", e=>this.onPointerDown(e))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(),
        this.session && this.session.end()
    }
}
const sl = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};
function Xy(t, e) {
    return e.max === e.min ? 0 : t / (e.max - e.min) * 100
}
const Wi = {
    correct: (t,e)=>{
        if (!e.target)
            return t;
        if (typeof t == "string")
            if (fe.test(t))
                t = parseFloat(t);
            else
                return t;
        const n = Xy(t, e.target.x)
          , i = Xy(t, e.target.y);
        return `${n}% ${i}%`
    }
}
  , YD = {
    correct: (t,{treeScale: e, projectionDelta: n})=>{
        const i = t
          , o = kr.parse(t);
        if (o.length > 5)
            return i;
        const l = kr.createTransformer(t)
          , c = typeof o[0] != "number" ? 1 : 0
          , d = n.x.scale * e.x
          , h = n.y.scale * e.y;
        o[0 + c] /= d,
        o[1 + c] /= h;
        const p = qe(d, h, .5);
        return typeof o[2 + c] == "number" && (o[2 + c] /= p),
        typeof o[3 + c] == "number" && (o[3 + c] /= p),
        l(o)
    }
};
class JD extends S.Component {
    componentDidMount() {
        const {visualElement: e, layoutGroup: n, switchLayoutGroup: i, layoutId: o} = this.props
          , {projection: l} = e;
        xN(eO),
        l && (n.group && n.group.add(l),
        i && i.register && o && i.register(l),
        l.root.didUpdate(),
        l.addEventListener("animationComplete", ()=>{
            this.safeToRemove()
        }
        ),
        l.setOptions({
            ...l.options,
            onExitComplete: ()=>this.safeToRemove()
        })),
        sl.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(e) {
        const {layoutDependency: n, visualElement: i, drag: o, isPresent: l} = this.props
          , c = i.projection;
        return c && (c.isPresent = l,
        o || e.layoutDependency !== n || n === void 0 ? c.willUpdate() : this.safeToRemove(),
        e.isPresent !== l && (l ? c.promote() : c.relegate() || Ue.postRender(()=>{
            const d = c.getStack();
            (!d || !d.members.length) && this.safeToRemove()
        }
        ))),
        null
    }
    componentDidUpdate() {
        const {projection: e} = this.props.visualElement;
        e && (e.root.didUpdate(),
        Uf.postRender(()=>{
            !e.currentAnimation && e.isLead() && this.safeToRemove()
        }
        ))
    }
    componentWillUnmount() {
        const {visualElement: e, layoutGroup: n, switchLayoutGroup: i} = this.props
          , {projection: o} = e;
        o && (o.scheduleCheckAfterUnmount(),
        n && n.group && n.group.remove(o),
        i && i.deregister && i.deregister(o))
    }
    safeToRemove() {
        const {safeToRemove: e} = this.props;
        e && e()
    }
    render() {
        return null
    }
}
function eS(t) {
    const [e,n] = Lx()
      , i = S.useContext(Of);
    return A.jsx(JD, {
        ...t,
        layoutGroup: i,
        switchLayoutGroup: S.useContext(Wx),
        isPresent: e,
        safeToRemove: n
    })
}
const eO = {
    borderRadius: {
        ...Wi,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: Wi,
    borderTopRightRadius: Wi,
    borderBottomLeftRadius: Wi,
    borderBottomRightRadius: Wi,
    boxShadow: YD
};
function tO(t, e, n) {
    const i = St(t) ? t : bo(t);
    return i.start(hh("", i, e, n)),
    i.animation
}
function nO(t) {
    return t instanceof SVGElement && t.tagName !== "svg"
}
const rO = (t,e)=>t.depth - e.depth;
class sO {
    constructor() {
        this.children = [],
        this.isDirty = !1
    }
    add(e) {
        nh(this.children, e),
        this.isDirty = !0
    }
    remove(e) {
        rh(this.children, e),
        this.isDirty = !0
    }
    forEach(e) {
        this.isDirty && this.children.sort(rO),
        this.isDirty = !1,
        this.children.forEach(e)
    }
}
function iO(t, e) {
    const n = En.now()
      , i = ({timestamp: o})=>{
        const l = o - n;
        l >= e && (Er(i),
        t(l - e))
    }
    ;
    return Ue.read(i, !0),
    ()=>Er(i)
}
const tS = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
  , oO = tS.length
  , Yy = t=>typeof t == "string" ? parseFloat(t) : t
  , Jy = t=>typeof t == "number" || fe.test(t);
function aO(t, e, n, i, o, l) {
    o ? (t.opacity = qe(0, n.opacity !== void 0 ? n.opacity : 1, lO(i)),
    t.opacityExit = qe(e.opacity !== void 0 ? e.opacity : 1, 0, uO(i))) : l && (t.opacity = qe(e.opacity !== void 0 ? e.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, i));
    for (let c = 0; c < oO; c++) {
        const d = `border${tS[c]}Radius`;
        let h = ev(e, d)
          , p = ev(n, d);
        if (h === void 0 && p === void 0)
            continue;
        h || (h = 0),
        p || (p = 0),
        h === 0 || p === 0 || Jy(h) === Jy(p) ? (t[d] = Math.max(qe(Yy(h), Yy(p), i), 0),
        (_n.test(p) || _n.test(h)) && (t[d] += "%")) : t[d] = p
    }
    (e.rotate || n.rotate) && (t.rotate = qe(e.rotate || 0, n.rotate || 0, i))
}
function ev(t, e) {
    return t[e] !== void 0 ? t[e] : t.borderRadius
}
const lO = nS(0, .5, ww)
  , uO = nS(.5, .95, Wt);
function nS(t, e, n) {
    return i=>i < t ? 0 : i > e ? 1 : n(Ks(t, e, i))
}
function tv(t, e) {
    t.min = e.min,
    t.max = e.max
}
function Jt(t, e) {
    tv(t.x, e.x),
    tv(t.y, e.y)
}
function nv(t, e) {
    t.translate = e.translate,
    t.scale = e.scale,
    t.originPoint = e.originPoint,
    t.origin = e.origin
}
function rv(t, e, n, i, o) {
    return t -= e,
    t = kl(t, 1 / n, i),
    o !== void 0 && (t = kl(t, 1 / o, i)),
    t
}
function cO(t, e=0, n=1, i=.5, o, l=t, c=t) {
    if (_n.test(e) && (e = parseFloat(e),
    e = qe(c.min, c.max, e / 100) - c.min),
    typeof e != "number")
        return;
    let d = qe(l.min, l.max, i);
    t === l && (d -= e),
    t.min = rv(t.min, e, n, d, o),
    t.max = rv(t.max, e, n, d, o)
}
function sv(t, e, [n,i,o], l, c) {
    cO(t, e[n], e[i], e[o], e.scale, l, c)
}
const dO = ["x", "scaleX", "originX"]
  , fO = ["y", "scaleY", "originY"];
function iv(t, e, n, i) {
    sv(t.x, e, dO, n ? n.x : void 0, i ? i.x : void 0),
    sv(t.y, e, fO, n ? n.y : void 0, i ? i.y : void 0)
}
function ov(t) {
    return t.translate === 0 && t.scale === 1
}
function rS(t) {
    return ov(t.x) && ov(t.y)
}
function av(t, e) {
    return t.min === e.min && t.max === e.max
}
function hO(t, e) {
    return av(t.x, e.x) && av(t.y, e.y)
}
function lv(t, e) {
    return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max)
}
function sS(t, e) {
    return lv(t.x, e.x) && lv(t.y, e.y)
}
function uv(t) {
    return Ht(t.x) / Ht(t.y)
}
function cv(t, e) {
    return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint
}
class pO {
    constructor() {
        this.members = []
    }
    add(e) {
        nh(this.members, e),
        e.scheduleRender()
    }
    remove(e) {
        if (rh(this.members, e),
        e === this.prevLead && (this.prevLead = void 0),
        e === this.lead) {
            const n = this.members[this.members.length - 1];
            n && this.promote(n)
        }
    }
    relegate(e) {
        const n = this.members.findIndex(o=>e === o);
        if (n === 0)
            return !1;
        let i;
        for (let o = n; o >= 0; o--) {
            const l = this.members[o];
            if (l.isPresent !== !1) {
                i = l;
                break
            }
        }
        return i ? (this.promote(i),
        !0) : !1
    }
    promote(e, n) {
        const i = this.lead;
        if (e !== i && (this.prevLead = i,
        this.lead = e,
        e.show(),
        i)) {
            i.instance && i.scheduleRender(),
            e.scheduleRender(),
            e.resumeFrom = i,
            n && (e.resumeFrom.preserveOpacity = !0),
            i.snapshot && (e.snapshot = i.snapshot,
            e.snapshot.latestValues = i.animationValues || i.latestValues),
            e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
            const {crossfade: o} = e.options;
            o === !1 && i.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(e=>{
            const {options: n, resumingFrom: i} = e;
            n.onExitComplete && n.onExitComplete(),
            i && i.options.onExitComplete && i.options.onExitComplete()
        }
        )
    }
    scheduleRender() {
        this.members.forEach(e=>{
            e.instance && e.scheduleRender(!1)
        }
        )
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}
function mO(t, e, n) {
    let i = "";
    const o = t.x.translate / e.x
      , l = t.y.translate / e.y
      , c = n?.z || 0;
    if ((o || l || c) && (i = `translate3d(${o}px, ${l}px, ${c}px) `),
    (e.x !== 1 || e.y !== 1) && (i += `scale(${1 / e.x}, ${1 / e.y}) `),
    n) {
        const {transformPerspective: p, rotate: m, rotateX: y, rotateY: v, skewX: w, skewY: C} = n;
        p && (i = `perspective(${p}px) ${i}`),
        m && (i += `rotate(${m}deg) `),
        y && (i += `rotateX(${y}deg) `),
        v && (i += `rotateY(${v}deg) `),
        w && (i += `skewX(${w}deg) `),
        C && (i += `skewY(${C}deg) `)
    }
    const d = t.x.scale * e.x
      , h = t.y.scale * e.y;
    return (d !== 1 || h !== 1) && (i += `scale(${d}, ${h})`),
    i || "none"
}
const Hr = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0
}
  , Xi = typeof window < "u" && window.MotionDebug !== void 0
  , yd = ["", "X", "Y", "Z"]
  , gO = {
    visibility: "hidden"
}
  , dv = 1e3;
let yO = 0;
function vd(t, e, n, i) {
    const {latestValues: o} = e;
    o[t] && (n[t] = o[t],
    e.setStaticValue(t, 0),
    i && (i[t] = 0))
}
function iS(t) {
    if (t.hasCheckedOptimisedAppear = !0,
    t.root === t)
        return;
    const {visualElement: e} = t.options;
    if (!e)
        return;
    const n = hw(e);
    if (window.MotionHasOptimisedAnimation(n, "transform")) {
        const {layout: o, layoutId: l} = t.options;
        window.MotionCancelOptimisedAnimation(n, "transform", Ue, !(o || l))
    }
    const {parent: i} = t;
    i && !i.hasCheckedOptimisedAppear && iS(i)
}
function oS({attachResizeListener: t, defaultParent: e, measureScroll: n, checkIsScrollRoot: i, resetTransform: o}) {
    return class {
        constructor(c={}, d=e?.()) {
            this.id = yO++,
            this.animationId = 0,
            this.children = new Set,
            this.options = {},
            this.isTreeAnimating = !1,
            this.isAnimationBlocked = !1,
            this.isLayoutDirty = !1,
            this.isProjectionDirty = !1,
            this.isSharedProjectionDirty = !1,
            this.isTransformDirty = !1,
            this.updateManuallyBlocked = !1,
            this.updateBlockedByResize = !1,
            this.isUpdating = !1,
            this.isSVG = !1,
            this.needsReset = !1,
            this.shouldResetTransform = !1,
            this.hasCheckedOptimisedAppear = !1,
            this.treeScale = {
                x: 1,
                y: 1
            },
            this.eventHandlers = new Map,
            this.hasTreeAnimated = !1,
            this.updateScheduled = !1,
            this.scheduleUpdate = ()=>this.update(),
            this.projectionUpdateScheduled = !1,
            this.checkUpdateFailed = ()=>{
                this.isUpdating && (this.isUpdating = !1,
                this.clearAllSnapshots())
            }
            ,
            this.updateProjection = ()=>{
                this.projectionUpdateScheduled = !1,
                Xi && (Hr.totalNodes = Hr.resolvedTargetDeltas = Hr.recalculatedProjection = 0),
                this.nodes.forEach(wO),
                this.nodes.forEach(CO),
                this.nodes.forEach(_O),
                this.nodes.forEach(SO),
                Xi && window.MotionDebug.record(Hr)
            }
            ,
            this.resolvedRelativeTargetAt = 0,
            this.hasProjected = !1,
            this.isVisible = !0,
            this.animationProgress = 0,
            this.sharedNodes = new Map,
            this.latestValues = c,
            this.root = d ? d.root || d : this,
            this.path = d ? [...d.path, d] : [],
            this.parent = d,
            this.depth = d ? d.depth + 1 : 0;
            for (let h = 0; h < this.path.length; h++)
                this.path[h].shouldResetTransform = !0;
            this.root === this && (this.nodes = new sO)
        }
        addEventListener(c, d) {
            return this.eventHandlers.has(c) || this.eventHandlers.set(c, new sh),
            this.eventHandlers.get(c).add(d)
        }
        notifyListeners(c, ...d) {
            const h = this.eventHandlers.get(c);
            h && h.notify(...d)
        }
        hasListeners(c) {
            return this.eventHandlers.has(c)
        }
        mount(c, d=this.root.hasTreeAnimated) {
            if (this.instance)
                return;
            this.isSVG = nO(c),
            this.instance = c;
            const {layoutId: h, layout: p, visualElement: m} = this.options;
            if (m && !m.current && m.mount(c),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            d && (p || h) && (this.isLayoutDirty = !0),
            t) {
                let y;
                const v = ()=>this.root.updateBlockedByResize = !1;
                t(c, ()=>{
                    this.root.updateBlockedByResize = !0,
                    y && y(),
                    y = iO(v, 250),
                    sl.hasAnimatedSinceResize && (sl.hasAnimatedSinceResize = !1,
                    this.nodes.forEach(hv))
                }
                )
            }
            h && this.root.registerSharedNode(h, this),
            this.options.animate !== !1 && m && (h || p) && this.addEventListener("didUpdate", ({delta: y, hasLayoutChanged: v, hasRelativeTargetChanged: w, layout: C})=>{
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0,
                    this.relativeTarget = void 0;
                    return
                }
                const P = this.options.transition || m.getDefaultTransition() || NO
                  , {onLayoutAnimationStart: T, onLayoutAnimationComplete: k} = m.getProps()
                  , N = !this.targetLayout || !sS(this.targetLayout, C) || w
                  , O = !v && w;
                if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || O || v && (N || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                    this.resumingFrom.resumingFrom = void 0),
                    this.setAnimationOrigin(y, O);
                    const j = {
                        ...Yf(P, "layout"),
                        onPlay: T,
                        onComplete: k
                    };
                    (m.shouldReduceMotion || this.options.layoutRoot) && (j.delay = 0,
                    j.type = !1),
                    this.startAnimation(j)
                } else
                    v || hv(this),
                    this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = C
            }
            )
        }
        unmount() {
            this.options.layoutId && this.willUpdate(),
            this.root.nodes.remove(this);
            const c = this.getStack();
            c && c.remove(this),
            this.parent && this.parent.children.delete(this),
            this.instance = void 0,
            Er(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0,
            this.nodes && this.nodes.forEach(EO),
            this.animationId++)
        }
        getTransformTemplate() {
            const {visualElement: c} = this.options;
            return c && c.getProps().transformTemplate
        }
        willUpdate(c=!0) {
            if (this.root.hasTreeAnimated = !0,
            this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && iS(this),
            !this.root.isUpdating && this.root.startUpdate(),
            this.isLayoutDirty)
                return;
            this.isLayoutDirty = !0;
            for (let m = 0; m < this.path.length; m++) {
                const y = this.path[m];
                y.shouldResetTransform = !0,
                y.updateScroll("snapshot"),
                y.options.layoutRoot && y.willUpdate(!1)
            }
            const {layoutId: d, layout: h} = this.options;
            if (d === void 0 && !h)
                return;
            const p = this.getTransformTemplate();
            this.prevTransformTemplateValue = p ? p(this.latestValues, "") : void 0,
            this.updateSnapshot(),
            c && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1,
            this.isUpdateBlocked()) {
                this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(fv);
                return
            }
            this.isUpdating || this.nodes.forEach(TO),
            this.isUpdating = !1,
            this.nodes.forEach(bO),
            this.nodes.forEach(vO),
            this.nodes.forEach(xO),
            this.clearAllSnapshots();
            const d = En.now();
            pt.delta = Gn(0, 1e3 / 60, d - pt.timestamp),
            pt.timestamp = d,
            pt.isProcessing = !0,
            ld.update.process(pt),
            ld.preRender.process(pt),
            ld.render.process(pt),
            pt.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0,
            Uf.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(PO),
            this.sharedNodes.forEach(kO)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
            Ue.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            Ue.postRender(()=>{
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }
            )
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure())
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(),
            !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let h = 0; h < this.path.length; h++)
                    this.path[h].updateScroll();
            const c = this.layout;
            this.layout = this.measure(!1),
            this.layoutCorrected = et(),
            this.isLayoutDirty = !1,
            this.projectionDelta = void 0,
            this.notifyListeners("measure", this.layout.layoutBox);
            const {visualElement: d} = this.options;
            d && d.notify("LayoutMeasure", this.layout.layoutBox, c ? c.layoutBox : void 0)
        }
        updateScroll(c="measure") {
            let d = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === c && (d = !1),
            d) {
                const h = i(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: c,
                    isRoot: h,
                    offset: n(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : h
                }
            }
        }
        resetTransform() {
            if (!o)
                return;
            const c = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout
              , d = this.projectionDelta && !rS(this.projectionDelta)
              , h = this.getTransformTemplate()
              , p = h ? h(this.latestValues, "") : void 0
              , m = p !== this.prevTransformTemplateValue;
            c && (d || Wr(this.latestValues) || m) && (o(this.instance, p),
            this.shouldResetTransform = !1,
            this.scheduleRender())
        }
        measure(c=!0) {
            const d = this.measurePageBox();
            let h = this.removeElementScroll(d);
            return c && (h = this.removeTransform(h)),
            MO(h),
            {
                animationId: this.root.animationId,
                measuredBox: d,
                layoutBox: h,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            var c;
            const {visualElement: d} = this.options;
            if (!d)
                return et();
            const h = d.measureViewportBox();
            if (!(((c = this.scroll) === null || c === void 0 ? void 0 : c.wasRoot) || this.path.some(DO))) {
                const {scroll: m} = this.root;
                m && (Os(h.x, m.offset.x),
                Os(h.y, m.offset.y))
            }
            return h
        }
        removeElementScroll(c) {
            var d;
            const h = et();
            if (Jt(h, c),
            !((d = this.scroll) === null || d === void 0) && d.wasRoot)
                return h;
            for (let p = 0; p < this.path.length; p++) {
                const m = this.path[p]
                  , {scroll: y, options: v} = m;
                m !== this.root && y && v.layoutScroll && (y.wasRoot && Jt(h, c),
                Os(h.x, y.offset.x),
                Os(h.y, y.offset.y))
            }
            return h
        }
        applyTransform(c, d=!1) {
            const h = et();
            Jt(h, c);
            for (let p = 0; p < this.path.length; p++) {
                const m = this.path[p];
                !d && m.options.layoutScroll && m.scroll && m !== m.root && Is(h, {
                    x: -m.scroll.offset.x,
                    y: -m.scroll.offset.y
                }),
                Wr(m.latestValues) && Is(h, m.latestValues)
            }
            return Wr(this.latestValues) && Is(h, this.latestValues),
            h
        }
        removeTransform(c) {
            const d = et();
            Jt(d, c);
            for (let h = 0; h < this.path.length; h++) {
                const p = this.path[h];
                if (!p.instance || !Wr(p.latestValues))
                    continue;
                rf(p.latestValues) && p.updateSnapshot();
                const m = et()
                  , y = p.measurePageBox();
                Jt(m, y),
                iv(d, p.latestValues, p.snapshot ? p.snapshot.layoutBox : void 0, m)
            }
            return Wr(this.latestValues) && iv(d, this.latestValues),
            d
        }
        setTargetDelta(c) {
            this.targetDelta = c,
            this.root.scheduleUpdateProjection(),
            this.isProjectionDirty = !0
        }
        setOptions(c) {
            this.options = {
                ...this.options,
                ...c,
                crossfade: c.crossfade !== void 0 ? c.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0,
            this.layout = void 0,
            this.snapshot = void 0,
            this.prevTransformTemplateValue = void 0,
            this.targetDelta = void 0,
            this.target = void 0,
            this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== pt.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(c=!1) {
            var d;
            const h = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = h.isProjectionDirty),
            this.isTransformDirty || (this.isTransformDirty = h.isTransformDirty),
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = h.isSharedProjectionDirty);
            const p = !!this.resumingFrom || this !== h;
            if (!(c || p && this.isSharedProjectionDirty || this.isProjectionDirty || !((d = this.parent) === null || d === void 0) && d.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
                return;
            const {layout: y, layoutId: v} = this.options;
            if (!(!this.layout || !(y || v))) {
                if (this.resolvedRelativeTargetAt = pt.timestamp,
                !this.targetDelta && !this.relativeTarget) {
                    const w = this.getClosestProjectingParent();
                    w && w.layout && this.animationProgress !== 1 ? (this.relativeParent = w,
                    this.forceRelativeParentToResolveTarget(),
                    this.relativeTarget = et(),
                    this.relativeTargetOrigin = et(),
                    ro(this.relativeTargetOrigin, this.layout.layoutBox, w.layout.layoutBox),
                    Jt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta)) {
                    if (this.target || (this.target = et(),
                    this.targetWithTransforms = et()),
                    this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
                    LD(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Jt(this.target, this.layout.layoutBox),
                    Xw(this.target, this.targetDelta)) : Jt(this.target, this.layout.layoutBox),
                    this.attemptToResolveRelativeTarget) {
                        this.attemptToResolveRelativeTarget = !1;
                        const w = this.getClosestProjectingParent();
                        w && !!w.resumingFrom == !!this.resumingFrom && !w.options.layoutScroll && w.target && this.animationProgress !== 1 ? (this.relativeParent = w,
                        this.forceRelativeParentToResolveTarget(),
                        this.relativeTarget = et(),
                        this.relativeTargetOrigin = et(),
                        ro(this.relativeTargetOrigin, this.target, w.target),
                        Jt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                    }
                    Xi && Hr.resolvedTargetDeltas++
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || rf(this.parent.latestValues) || Gw(this.parent.latestValues)))
                return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var c;
            const d = this.getLead()
              , h = !!this.resumingFrom || this !== d;
            let p = !0;
            if ((this.isProjectionDirty || !((c = this.parent) === null || c === void 0) && c.isProjectionDirty) && (p = !1),
            h && (this.isSharedProjectionDirty || this.isTransformDirty) && (p = !1),
            this.resolvedRelativeTargetAt === pt.timestamp && (p = !1),
            p)
                return;
            const {layout: m, layoutId: y} = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
            this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || !(m || y))
                return;
            Jt(this.layoutCorrected, this.layout.layoutBox);
            const v = this.treeScale.x
              , w = this.treeScale.y;
            HD(this.layoutCorrected, this.treeScale, this.path, h),
            d.layout && !d.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (d.target = d.layout.layoutBox,
            d.targetWithTransforms = et());
            const {target: C} = d;
            if (!C) {
                this.prevProjectionDelta && (this.createProjectionDeltas(),
                this.scheduleRender());
                return
            }
            !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (nv(this.prevProjectionDelta.x, this.projectionDelta.x),
            nv(this.prevProjectionDelta.y, this.projectionDelta.y)),
            no(this.projectionDelta, this.layoutCorrected, C, this.latestValues),
            (this.treeScale.x !== v || this.treeScale.y !== w || !cv(this.projectionDelta.x, this.prevProjectionDelta.x) || !cv(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0,
            this.scheduleRender(),
            this.notifyListeners("projectionUpdate", C)),
            Xi && Hr.recalculatedProjection++
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(c=!0) {
            var d;
            if ((d = this.options.visualElement) === null || d === void 0 || d.scheduleRender(),
            c) {
                const h = this.getStack();
                h && h.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = Ds(),
            this.projectionDelta = Ds(),
            this.projectionDeltaWithTransform = Ds()
        }
        setAnimationOrigin(c, d=!1) {
            const h = this.snapshot
              , p = h ? h.latestValues : {}
              , m = {
                ...this.latestValues
            }
              , y = Ds();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0),
            this.attemptToResolveRelativeTarget = !d;
            const v = et()
              , w = h ? h.source : void 0
              , C = this.layout ? this.layout.source : void 0
              , P = w !== C
              , T = this.getStack()
              , k = !T || T.members.length <= 1
              , N = !!(P && !k && this.options.crossfade === !0 && !this.path.some(RO));
            this.animationProgress = 0;
            let O;
            this.mixTargetDelta = j=>{
                const L = j / 1e3;
                pv(y.x, c.x, L),
                pv(y.y, c.y, L),
                this.setTargetDelta(y),
                this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (ro(v, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                AO(this.relativeTarget, this.relativeTargetOrigin, v, L),
                O && hO(this.relativeTarget, O) && (this.isProjectionDirty = !1),
                O || (O = et()),
                Jt(O, this.relativeTarget)),
                P && (this.animationValues = m,
                aO(m, p, this.latestValues, L, N, k)),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                this.animationProgress = L
            }
            ,
            this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(c) {
            this.notifyListeners("animationStart"),
            this.currentAnimation && this.currentAnimation.stop(),
            this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
            this.pendingAnimation && (Er(this.pendingAnimation),
            this.pendingAnimation = void 0),
            this.pendingAnimation = Ue.update(()=>{
                sl.hasAnimatedSinceResize = !0,
                this.currentAnimation = tO(0, dv, {
                    ...c,
                    onUpdate: d=>{
                        this.mixTargetDelta(d),
                        c.onUpdate && c.onUpdate(d)
                    }
                    ,
                    onComplete: ()=>{
                        c.onComplete && c.onComplete(),
                        this.completeAnimation()
                    }
                }),
                this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                this.pendingAnimation = void 0
            }
            )
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
            this.resumingFrom.preserveOpacity = void 0);
            const c = this.getStack();
            c && c.exitAnimationComplete(),
            this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
            this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(dv),
            this.currentAnimation.stop()),
            this.completeAnimation()
        }
        applyTransformsToTarget() {
            const c = this.getLead();
            let {targetWithTransforms: d, target: h, layout: p, latestValues: m} = c;
            if (!(!d || !h || !p)) {
                if (this !== c && this.layout && p && aS(this.options.animationType, this.layout.layoutBox, p.layoutBox)) {
                    h = this.target || et();
                    const y = Ht(this.layout.layoutBox.x);
                    h.x.min = c.target.x.min,
                    h.x.max = h.x.min + y;
                    const v = Ht(this.layout.layoutBox.y);
                    h.y.min = c.target.y.min,
                    h.y.max = h.y.min + v
                }
                Jt(d, h),
                Is(d, m),
                no(this.projectionDeltaWithTransform, this.layoutCorrected, d, m)
            }
        }
        registerSharedNode(c, d) {
            this.sharedNodes.has(c) || this.sharedNodes.set(c, new pO),
            this.sharedNodes.get(c).add(d);
            const p = d.options.initialPromotionConfig;
            d.promote({
                transition: p ? p.transition : void 0,
                preserveFollowOpacity: p && p.shouldPreserveFollowOpacity ? p.shouldPreserveFollowOpacity(d) : void 0
            })
        }
        isLead() {
            const c = this.getStack();
            return c ? c.lead === this : !0
        }
        getLead() {
            var c;
            const {layoutId: d} = this.options;
            return d ? ((c = this.getStack()) === null || c === void 0 ? void 0 : c.lead) || this : this
        }
        getPrevLead() {
            var c;
            const {layoutId: d} = this.options;
            return d ? (c = this.getStack()) === null || c === void 0 ? void 0 : c.prevLead : void 0
        }
        getStack() {
            const {layoutId: c} = this.options;
            if (c)
                return this.root.sharedNodes.get(c)
        }
        promote({needsReset: c, transition: d, preserveFollowOpacity: h}={}) {
            const p = this.getStack();
            p && p.promote(this, h),
            c && (this.projectionDelta = void 0,
            this.needsReset = !0),
            d && this.setOptions({
                transition: d
            })
        }
        relegate() {
            const c = this.getStack();
            return c ? c.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {visualElement: c} = this.options;
            if (!c)
                return;
            let d = !1;
            const {latestValues: h} = c;
            if ((h.z || h.rotate || h.rotateX || h.rotateY || h.rotateZ || h.skewX || h.skewY) && (d = !0),
            !d)
                return;
            const p = {};
            h.z && vd("z", c, p, this.animationValues);
            for (let m = 0; m < yd.length; m++)
                vd(`rotate${yd[m]}`, c, p, this.animationValues),
                vd(`skew${yd[m]}`, c, p, this.animationValues);
            c.render();
            for (const m in p)
                c.setStaticValue(m, p[m]),
                this.animationValues && (this.animationValues[m] = p[m]);
            c.scheduleRender()
        }
        getProjectionStyles(c) {
            var d, h;
            if (!this.instance || this.isSVG)
                return;
            if (!this.isVisible)
                return gO;
            const p = {
                visibility: ""
            }
              , m = this.getTransformTemplate();
            if (this.needsReset)
                return this.needsReset = !1,
                p.opacity = "",
                p.pointerEvents = nl(c?.pointerEvents) || "",
                p.transform = m ? m(this.latestValues, "") : "none",
                p;
            const y = this.getLead();
            if (!this.projectionDelta || !this.layout || !y.target) {
                const P = {};
                return this.options.layoutId && (P.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1,
                P.pointerEvents = nl(c?.pointerEvents) || ""),
                this.hasProjected && !Wr(this.latestValues) && (P.transform = m ? m({}, "") : "none",
                this.hasProjected = !1),
                P
            }
            const v = y.animationValues || y.latestValues;
            this.applyTransformsToTarget(),
            p.transform = mO(this.projectionDeltaWithTransform, this.treeScale, v),
            m && (p.transform = m(v, p.transform));
            const {x: w, y: C} = this.projectionDelta;
            p.transformOrigin = `${w.origin * 100}% ${C.origin * 100}% 0`,
            y.animationValues ? p.opacity = y === this ? (h = (d = v.opacity) !== null && d !== void 0 ? d : this.latestValues.opacity) !== null && h !== void 0 ? h : 1 : this.preserveOpacity ? this.latestValues.opacity : v.opacityExit : p.opacity = y === this ? v.opacity !== void 0 ? v.opacity : "" : v.opacityExit !== void 0 ? v.opacityExit : 0;
            for (const P in Tl) {
                if (v[P] === void 0)
                    continue;
                const {correct: T, applyTo: k} = Tl[P]
                  , N = p.transform === "none" ? v[P] : T(v[P], y);
                if (k) {
                    const O = k.length;
                    for (let j = 0; j < O; j++)
                        p[k[j]] = N
                } else
                    p[P] = N
            }
            return this.options.layoutId && (p.pointerEvents = y === this ? nl(c?.pointerEvents) || "" : "none"),
            p
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(c=>{
                var d;
                return (d = c.currentAnimation) === null || d === void 0 ? void 0 : d.stop()
            }
            ),
            this.root.nodes.forEach(fv),
            this.root.sharedNodes.clear()
        }
    }
}
function vO(t) {
    t.updateLayout()
}
function xO(t) {
    var e;
    const n = ((e = t.resumeFrom) === null || e === void 0 ? void 0 : e.snapshot) || t.snapshot;
    if (t.isLead() && t.layout && n && t.hasListeners("didUpdate")) {
        const {layoutBox: i, measuredBox: o} = t.layout
          , {animationType: l} = t.options
          , c = n.source !== t.layout.source;
        l === "size" ? en(y=>{
            const v = c ? n.measuredBox[y] : n.layoutBox[y]
              , w = Ht(v);
            v.min = i[y].min,
            v.max = v.min + w
        }
        ) : aS(l, n.layoutBox, i) && en(y=>{
            const v = c ? n.measuredBox[y] : n.layoutBox[y]
              , w = Ht(i[y]);
            v.max = v.min + w,
            t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0,
            t.relativeTarget[y].max = t.relativeTarget[y].min + w)
        }
        );
        const d = Ds();
        no(d, i, n.layoutBox);
        const h = Ds();
        c ? no(h, t.applyTransform(o, !0), n.measuredBox) : no(h, i, n.layoutBox);
        const p = !rS(d);
        let m = !1;
        if (!t.resumeFrom) {
            const y = t.getClosestProjectingParent();
            if (y && !y.resumeFrom) {
                const {snapshot: v, layout: w} = y;
                if (v && w) {
                    const C = et();
                    ro(C, n.layoutBox, v.layoutBox);
                    const P = et();
                    ro(P, i, w.layoutBox),
                    sS(C, P) || (m = !0),
                    y.options.layoutRoot && (t.relativeTarget = P,
                    t.relativeTargetOrigin = C,
                    t.relativeParent = y)
                }
            }
        }
        t.notifyListeners("didUpdate", {
            layout: i,
            snapshot: n,
            delta: h,
            layoutDelta: d,
            hasLayoutChanged: p,
            hasRelativeTargetChanged: m
        })
    } else if (t.isLead()) {
        const {onExitComplete: i} = t.options;
        i && i()
    }
    t.options.transition = void 0
}
function wO(t) {
    Xi && Hr.totalNodes++,
    t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty),
    t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)),
    t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
}
function SO(t) {
    t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
}
function PO(t) {
    t.clearSnapshot()
}
function fv(t) {
    t.clearMeasurements()
}
function TO(t) {
    t.isLayoutDirty = !1
}
function bO(t) {
    const {visualElement: e} = t.options;
    e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"),
    t.resetTransform()
}
function hv(t) {
    t.finishAnimation(),
    t.targetDelta = t.relativeTarget = t.target = void 0,
    t.isProjectionDirty = !0
}
function CO(t) {
    t.resolveTargetDelta()
}
function _O(t) {
    t.calcProjection()
}
function EO(t) {
    t.resetSkewAndRotation()
}
function kO(t) {
    t.removeLeadSnapshot()
}
function pv(t, e, n) {
    t.translate = qe(e.translate, 0, n),
    t.scale = qe(e.scale, 1, n),
    t.origin = e.origin,
    t.originPoint = e.originPoint
}
function mv(t, e, n, i) {
    t.min = qe(e.min, n.min, i),
    t.max = qe(e.max, n.max, i)
}
function AO(t, e, n, i) {
    mv(t.x, e.x, n.x, i),
    mv(t.y, e.y, n.y, i)
}
function RO(t) {
    return t.animationValues && t.animationValues.opacityExit !== void 0
}
const NO = {
    duration: .45,
    ease: [.4, 0, .1, 1]
}
  , gv = t=>typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t)
  , yv = gv("applewebkit/") && !gv("chrome/") ? Math.round : Wt;
function vv(t) {
    t.min = yv(t.min),
    t.max = yv(t.max)
}
function MO(t) {
    vv(t.x),
    vv(t.y)
}
function aS(t, e, n) {
    return t === "position" || t === "preserve-aspect" && !ID(uv(e), uv(n), .2)
}
function DO(t) {
    var e;
    return t !== t.root && ((e = t.scroll) === null || e === void 0 ? void 0 : e.wasRoot)
}
const OO = oS({
    attachResizeListener: (t,e)=>_o(t, "resize", e),
    measureScroll: ()=>({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: ()=>!0
})
  , xd = {
    current: void 0
}
  , lS = oS({
    measureScroll: t=>({
        x: t.scrollLeft,
        y: t.scrollTop
    }),
    defaultParent: ()=>{
        if (!xd.current) {
            const t = new OO({});
            t.mount(window),
            t.setOptions({
                layoutScroll: !0
            }),
            xd.current = t
        }
        return xd.current
    }
    ,
    resetTransform: (t,e)=>{
        t.style.transform = e !== void 0 ? e : "none"
    }
    ,
    checkIsScrollRoot: t=>window.getComputedStyle(t).position === "fixed"
})
  , IO = {
    pan: {
        Feature: XD
    },
    drag: {
        Feature: GD,
        ProjectionNode: lS,
        MeasureLayout: eS
    }
};
function xv(t, e, n) {
    const {props: i} = t;
    t.animationState && i.whileHover && t.animationState.setActive("whileHover", n === "Start");
    const o = "onHover" + n
      , l = i[o];
    l && Ue.postRender(()=>l(e, Do(e)))
}
class LO extends Ar {
    mount() {
        const {current: e} = this.node;
        e && (this.unmount = IN(e, n=>(xv(this.node, n, "Start"),
        i=>xv(this.node, i, "End"))))
    }
    unmount() {}
}
class jO extends Ar {
    constructor() {
        super(...arguments),
        this.isActive = !1
    }
    onFocus() {
        let e = !1;
        try {
            e = this.node.current.matches(":focus-visible")
        } catch {
            e = !0
        }
        !e || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0),
        this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1),
        this.isActive = !1)
    }
    mount() {
        this.unmount = Mo(_o(this.node.current, "focus", ()=>this.onFocus()), _o(this.node.current, "blur", ()=>this.onBlur()))
    }
    unmount() {}
}
function wv(t, e, n) {
    const {props: i} = t;
    t.animationState && i.whileTap && t.animationState.setActive("whileTap", n === "Start");
    const o = "onTap" + (n === "End" ? "" : n)
      , l = i[o];
    l && Ue.postRender(()=>l(e, Do(e)))
}
class FO extends Ar {
    mount() {
        const {current: e} = this.node;
        e && (this.unmount = VN(e, n=>(wv(this.node, n, "Start"),
        (i,{success: o})=>wv(this.node, i, o ? "End" : "Cancel")), {
            useGlobalTarget: this.node.props.globalTapTarget
        }))
    }
    unmount() {}
}
const of = new WeakMap
  , wd = new WeakMap
  , VO = t=>{
    const e = of.get(t.target);
    e && e(t)
}
  , zO = t=>{
    t.forEach(VO)
}
;
function BO({root: t, ...e}) {
    const n = t || document;
    wd.has(n) || wd.set(n, {});
    const i = wd.get(n)
      , o = JSON.stringify(e);
    return i[o] || (i[o] = new IntersectionObserver(zO,{
        root: t,
        ...e
    })),
    i[o]
}
function UO(t, e, n) {
    const i = BO(e);
    return of.set(t, n),
    i.observe(t),
    ()=>{
        of.delete(t),
        i.unobserve(t)
    }
}
const $O = {
    some: 0,
    all: 1
};
class WO extends Ar {
    constructor() {
        super(...arguments),
        this.hasEnteredView = !1,
        this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {viewport: e={}} = this.node.getProps()
          , {root: n, margin: i, amount: o="some", once: l} = e
          , c = {
            root: n ? n.current : void 0,
            rootMargin: i,
            threshold: typeof o == "number" ? o : $O[o]
        }
          , d = h=>{
            const {isIntersecting: p} = h;
            if (this.isInView === p || (this.isInView = p,
            l && !p && this.hasEnteredView))
                return;
            p && (this.hasEnteredView = !0),
            this.node.animationState && this.node.animationState.setActive("whileInView", p);
            const {onViewportEnter: m, onViewportLeave: y} = this.node.getProps()
              , v = p ? m : y;
            v && v(h)
        }
        ;
        return UO(this.node.current, c, d)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u")
            return;
        const {props: e, prevProps: n} = this.node;
        ["amount", "margin", "root"].some(HO(e, n)) && this.startObserver()
    }
    unmount() {}
}
function HO({viewport: t={}}, {viewport: e={}}={}) {
    return n=>t[n] !== e[n]
}
const QO = {
    inView: {
        Feature: WO
    },
    tap: {
        Feature: FO
    },
    focus: {
        Feature: jO
    },
    hover: {
        Feature: LO
    }
}
  , KO = {
    layout: {
        ProjectionNode: lS,
        MeasureLayout: eS
    }
}
  , af = {
    current: null
}
  , uS = {
    current: !1
};
function qO() {
    if (uS.current = !0,
    !!jf)
        if (window.matchMedia) {
            const t = window.matchMedia("(prefers-reduced-motion)")
              , e = ()=>af.current = t.matches;
            t.addListener(e),
            e()
        } else
            af.current = !1
}
const ZO = [...Ow, wt, kr]
  , GO = t=>ZO.find(Dw(t))
  , Sv = new WeakMap;
function XO(t, e, n) {
    for (const i in e) {
        const o = e[i]
          , l = n[i];
        if (St(o))
            t.addValue(i, o);
        else if (St(l))
            t.addValue(i, bo(o, {
                owner: t
            }));
        else if (l !== o)
            if (t.hasValue(i)) {
                const c = t.getValue(i);
                c.liveStyle === !0 ? c.jump(o) : c.hasAnimated || c.set(o)
            } else {
                const c = t.getStaticValue(i);
                t.addValue(i, bo(c !== void 0 ? c : o, {
                    owner: t
                }))
            }
    }
    for (const i in n)
        e[i] === void 0 && t.removeValue(i);
    return e
}
const Pv = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class YO {
    scrapeMotionValuesFromProps(e, n, i) {
        return {}
    }
    constructor({parent: e, props: n, presenceContext: i, reducedMotionConfig: o, blockInitialAnimation: l, visualState: c}, d={}) {
        this.current = null,
        this.children = new Set,
        this.isVariantNode = !1,
        this.isControllingVariants = !1,
        this.shouldReduceMotion = null,
        this.values = new Map,
        this.KeyframeResolver = ch,
        this.features = {},
        this.valueSubscriptions = new Map,
        this.prevMotionValues = {},
        this.events = {},
        this.propEventSubscriptions = {},
        this.notifyUpdate = ()=>this.notify("Update", this.latestValues),
        this.render = ()=>{
            this.current && (this.triggerBuild(),
            this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }
        ,
        this.renderScheduledAt = 0,
        this.scheduleRender = ()=>{
            const w = En.now();
            this.renderScheduledAt < w && (this.renderScheduledAt = w,
            Ue.render(this.render, !1, !0))
        }
        ;
        const {latestValues: h, renderState: p, onUpdate: m} = c;
        this.onUpdate = m,
        this.latestValues = h,
        this.baseTarget = {
            ...h
        },
        this.initialValues = n.initial ? {
            ...h
        } : {},
        this.renderState = p,
        this.parent = e,
        this.props = n,
        this.presenceContext = i,
        this.depth = e ? e.depth + 1 : 0,
        this.reducedMotionConfig = o,
        this.options = d,
        this.blockInitialAnimation = !!l,
        this.isControllingVariants = Ql(n),
        this.isVariantNode = Ux(n),
        this.isVariantNode && (this.variantChildren = new Set),
        this.manuallyAnimateOnMount = !!(e && e.current);
        const {willChange: y, ...v} = this.scrapeMotionValuesFromProps(n, {}, this);
        for (const w in v) {
            const C = v[w];
            h[w] !== void 0 && St(C) && C.set(h[w], !1)
        }
    }
    mount(e) {
        this.current = e,
        Sv.set(e, this),
        this.projection && !this.projection.instance && this.projection.mount(e),
        this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach((n,i)=>this.bindToMotionValue(i, n)),
        uS.current || qO(),
        this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : af.current,
        this.parent && this.parent.children.add(this),
        this.update(this.props, this.presenceContext)
    }
    unmount() {
        Sv.delete(this.current),
        this.projection && this.projection.unmount(),
        Er(this.notifyUpdate),
        Er(this.render),
        this.valueSubscriptions.forEach(e=>e()),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent && this.parent.children.delete(this);
        for (const e in this.events)
            this.events[e].clear();
        for (const e in this.features) {
            const n = this.features[e];
            n && (n.unmount(),
            n.isMounted = !1)
        }
        this.current = null
    }
    bindToMotionValue(e, n) {
        this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
        const i = ns.has(e)
          , o = n.on("change", d=>{
            this.latestValues[e] = d,
            this.props.onUpdate && Ue.preRender(this.notifyUpdate),
            i && this.projection && (this.projection.isTransformDirty = !0)
        }
        )
          , l = n.on("renderRequest", this.scheduleRender);
        let c;
        window.MotionCheckAppearSync && (c = window.MotionCheckAppearSync(this, e, n)),
        this.valueSubscriptions.set(e, ()=>{
            o(),
            l(),
            c && c(),
            n.owner && n.stop()
        }
        )
    }
    sortNodePosition(e) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current)
    }
    updateFeatures() {
        let e = "animation";
        for (e in qs) {
            const n = qs[e];
            if (!n)
                continue;
            const {isEnabled: i, Feature: o} = n;
            if (!this.features[e] && o && i(this.props) && (this.features[e] = new o(this)),
            this.features[e]) {
                const l = this.features[e];
                l.isMounted ? l.update() : (l.mount(),
                l.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : et()
    }
    getStaticValue(e) {
        return this.latestValues[e]
    }
    setStaticValue(e, n) {
        this.latestValues[e] = n
    }
    update(e, n) {
        (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
        this.prevProps = this.props,
        this.props = e,
        this.prevPresenceContext = this.presenceContext,
        this.presenceContext = n;
        for (let i = 0; i < Pv.length; i++) {
            const o = Pv[i];
            this.propEventSubscriptions[o] && (this.propEventSubscriptions[o](),
            delete this.propEventSubscriptions[o]);
            const l = "on" + o
              , c = e[l];
            c && (this.propEventSubscriptions[o] = this.on(o, c))
        }
        this.prevMotionValues = XO(this, this.scrapeMotionValuesFromProps(e, this.prevProps, this), this.prevMotionValues),
        this.handleChildMotionValue && this.handleChildMotionValue(),
        this.onUpdate && this.onUpdate(this)
    }
    getProps() {
        return this.props
    }
    getVariant(e) {
        return this.props.variants ? this.props.variants[e] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(e) {
        const n = this.getClosestVariantNode();
        if (n)
            return n.variantChildren && n.variantChildren.add(e),
            ()=>n.variantChildren.delete(e)
    }
    addValue(e, n) {
        const i = this.values.get(e);
        n !== i && (i && this.removeValue(e),
        this.bindToMotionValue(e, n),
        this.values.set(e, n),
        this.latestValues[e] = n.get())
    }
    removeValue(e) {
        this.values.delete(e);
        const n = this.valueSubscriptions.get(e);
        n && (n(),
        this.valueSubscriptions.delete(e)),
        delete this.latestValues[e],
        this.removeValueFromRenderState(e, this.renderState)
    }
    hasValue(e) {
        return this.values.has(e)
    }
    getValue(e, n) {
        if (this.props.values && this.props.values[e])
            return this.props.values[e];
        let i = this.values.get(e);
        return i === void 0 && n !== void 0 && (i = bo(n === null ? void 0 : n, {
            owner: this
        }),
        this.addValue(e, i)),
        i
    }
    readValue(e, n) {
        var i;
        let o = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : (i = this.getBaseTargetFromProps(this.props, e)) !== null && i !== void 0 ? i : this.readValueFromInstance(this.current, e, this.options);
        return o != null && (typeof o == "string" && (Nw(o) || Pw(o)) ? o = parseFloat(o) : !GO(o) && kr.test(n) && (o = kw(e, n)),
        this.setBaseTarget(e, St(o) ? o.get() : o)),
        St(o) ? o.get() : o
    }
    setBaseTarget(e, n) {
        this.baseTarget[e] = n
    }
    getBaseTarget(e) {
        var n;
        const {initial: i} = this.props;
        let o;
        if (typeof i == "string" || typeof i == "object") {
            const c = Wf(this.props, i, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
            c && (o = c[e])
        }
        if (i && o !== void 0)
            return o;
        const l = this.getBaseTargetFromProps(this.props, e);
        return l !== void 0 && !St(l) ? l : this.initialValues[e] !== void 0 && o === void 0 ? void 0 : this.baseTarget[e]
    }
    on(e, n) {
        return this.events[e] || (this.events[e] = new sh),
        this.events[e].add(n)
    }
    notify(e, ...n) {
        this.events[e] && this.events[e].notify(...n)
    }
}
class cS extends YO {
    constructor() {
        super(...arguments),
        this.KeyframeResolver = Iw
    }
    sortInstanceNodePosition(e, n) {
        return e.compareDocumentPosition(n) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(e, n) {
        return e.style ? e.style[n] : void 0
    }
    removeValueFromRenderState(e, {vars: n, style: i}) {
        delete n[e],
        delete i[e]
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(),
        delete this.childSubscription);
        const {children: e} = this.props;
        St(e) && (this.childSubscription = e.on("change", n=>{
            this.current && (this.current.textContent = `${n}`)
        }
        ))
    }
}
function JO(t) {
    return window.getComputedStyle(t)
}
class eI extends cS {
    constructor() {
        super(...arguments),
        this.type = "html",
        this.renderInstance = Xx
    }
    readValueFromInstance(e, n) {
        if (ns.has(n)) {
            const i = uh(n);
            return i && i.default || 0
        } else {
            const i = JO(e)
              , o = (qx(n) ? i.getPropertyValue(n) : i[n]) || 0;
            return typeof o == "string" ? o.trim() : o
        }
    }
    measureInstanceViewportBox(e, {transformPagePoint: n}) {
        return Yw(e, n)
    }
    build(e, n, i) {
        Kf(e, n, i.transformTemplate)
    }
    scrapeMotionValuesFromProps(e, n, i) {
        return Xf(e, n, i)
    }
}
class tI extends cS {
    constructor() {
        super(...arguments),
        this.type = "svg",
        this.isSVGTag = !1,
        this.measureInstanceViewportBox = et
    }
    getBaseTargetFromProps(e, n) {
        return e[n]
    }
    readValueFromInstance(e, n) {
        if (ns.has(n)) {
            const i = uh(n);
            return i && i.default || 0
        }
        return n = Yx.has(n) ? n : Bf(n),
        e.getAttribute(n)
    }
    scrapeMotionValuesFromProps(e, n, i) {
        return tw(e, n, i)
    }
    build(e, n, i) {
        qf(e, n, this.isSVGTag, i.transformTemplate)
    }
    renderInstance(e, n, i, o) {
        Jx(e, n, i, o)
    }
    mount(e) {
        this.isSVGTag = Gf(e.tagName),
        super.mount(e)
    }
}
const nI = (t,e)=>$f(t) ? new tI(e) : new eI(e,{
    allowProjection: t !== S.Fragment
})
  , rI = kN({
    ..._D,
    ...QO,
    ...IO,
    ...KO
}, nI)
  , Zl = $R(rI);
function sI({onSearch: t, isLoading: e, initialValue: n=""}) {
    const [i,o] = S.useState(n)
      , l = c=>{
        if (c.preventDefault(),
        !i.trim())
            return;
        const d = i.match(/^https?:\/\//) ? i : `https://${i}`;
        t(d)
    }
    ;
    return A.jsxs(Zl.form, {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: .5
        },
        onSubmit: l,
        className: "relative w-full max-w-3xl mx-auto group",
        children: [A.jsx("div", {
            className: "absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"
        }), A.jsxs("div", {
            className: "relative flex items-center bg-card rounded-xl border border-white/5 shadow-2xl overflow-hidden",
            children: [A.jsx("div", {
                className: "pl-6 text-muted-foreground",
                children: A.jsx(Sf, {
                    className: "w-5 h-5"
                })
            }), A.jsx("input", {
                type: "text",
                value: i,
                onChange: c=>o(c.target.value),
                placeholder: "Enter a URL to browse safely (e.g. example.com)...",
                className: "w-full px-4 py-6 bg-transparent text-lg font-medium placeholder:text-muted-foreground/50 focus:outline-none",
                disabled: e
            }), A.jsx("div", {
                className: "pr-2",
                children: A.jsx(Ji, {
                    type: "submit",
                    size: "lg",
                    variant: "gradient",
                    disabled: e || !i.trim(),
                    className: "rounded-lg font-bold",
                    children: e ? A.jsxs("span", {
                        className: "flex items-center gap-2",
                        children: [A.jsx("span", {
                            className: "w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"
                        }), "Wait..."]
                    }) : A.jsxs("span", {
                        className: "flex items-center gap-2",
                        children: ["Go", A.jsx(Tb, {
                            className: "w-4 h-4"
                        })]
                    })
                })
            })]
        })]
    })
}
function mt(t) {
    const e = Object.prototype.toString.call(t);
    return t instanceof Date || typeof t == "object" && e === "[object Date]" ? new t.constructor(+t) : typeof t == "number" || e === "[object Number]" || typeof t == "string" || e === "[object String]" ? new Date(t) : new Date(NaN)
}
function iI(t, e) {
    return t instanceof Date ? new t.constructor(e) : new Date(e)
}
const Ya = 43200
  , Tv = 1440;
let oI = {};
function aI() {
    return oI
}
function bv(t) {
    const e = mt(t)
      , n = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
    return n.setUTCFullYear(e.getFullYear()),
    +t - +n
}
function il(t, e) {
    const n = mt(t)
      , i = mt(e)
      , o = n.getTime() - i.getTime();
    return o < 0 ? -1 : o > 0 ? 1 : o
}
function lI(t) {
    return iI(t, Date.now())
}
function uI(t, e) {
    const n = mt(t)
      , i = mt(e)
      , o = n.getFullYear() - i.getFullYear()
      , l = n.getMonth() - i.getMonth();
    return o * 12 + l
}
function cI(t) {
    return e=>{
        const i = (t ? Math[t] : Math.trunc)(e);
        return i === 0 ? 0 : i
    }
}
function dI(t, e) {
    return +mt(t) - +mt(e)
}
function fI(t) {
    const e = mt(t);
    return e.setHours(23, 59, 59, 999),
    e
}
function hI(t) {
    const e = mt(t)
      , n = e.getMonth();
    return e.setFullYear(e.getFullYear(), n + 1, 0),
    e.setHours(23, 59, 59, 999),
    e
}
function pI(t) {
    const e = mt(t);
    return +fI(e) == +hI(e)
}
function mI(t, e) {
    const n = mt(t)
      , i = mt(e)
      , o = il(n, i)
      , l = Math.abs(uI(n, i));
    let c;
    if (l < 1)
        c = 0;
    else {
        n.getMonth() === 1 && n.getDate() > 27 && n.setDate(30),
        n.setMonth(n.getMonth() - o * l);
        let d = il(n, i) === -o;
        pI(mt(t)) && l === 1 && il(t, i) === 1 && (d = !1),
        c = o * (l - Number(d))
    }
    return c === 0 ? 0 : c
}
function gI(t, e, n) {
    const i = dI(t, e) / 1e3;
    return cI(n?.roundingMethod)(i)
}
const yI = {
    lessThanXSeconds: {
        one: "less than a second",
        other: "less than {{count}} seconds"
    },
    xSeconds: {
        one: "1 second",
        other: "{{count}} seconds"
    },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
        one: "less than a minute",
        other: "less than {{count}} minutes"
    },
    xMinutes: {
        one: "1 minute",
        other: "{{count}} minutes"
    },
    aboutXHours: {
        one: "about 1 hour",
        other: "about {{count}} hours"
    },
    xHours: {
        one: "1 hour",
        other: "{{count}} hours"
    },
    xDays: {
        one: "1 day",
        other: "{{count}} days"
    },
    aboutXWeeks: {
        one: "about 1 week",
        other: "about {{count}} weeks"
    },
    xWeeks: {
        one: "1 week",
        other: "{{count}} weeks"
    },
    aboutXMonths: {
        one: "about 1 month",
        other: "about {{count}} months"
    },
    xMonths: {
        one: "1 month",
        other: "{{count}} months"
    },
    aboutXYears: {
        one: "about 1 year",
        other: "about {{count}} years"
    },
    xYears: {
        one: "1 year",
        other: "{{count}} years"
    },
    overXYears: {
        one: "over 1 year",
        other: "over {{count}} years"
    },
    almostXYears: {
        one: "almost 1 year",
        other: "almost {{count}} years"
    }
}
  , vI = (t,e,n)=>{
    let i;
    const o = yI[t];
    return typeof o == "string" ? i = o : e === 1 ? i = o.one : i = o.other.replace("{{count}}", e.toString()),
    n?.addSuffix ? n.comparison && n.comparison > 0 ? "in " + i : i + " ago" : i
}
;
function Sd(t) {
    return (e={})=>{
        const n = e.width ? String(e.width) : t.defaultWidth;
        return t.formats[n] || t.formats[t.defaultWidth]
    }
}
const xI = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy"
}
  , wI = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a"
}
  , SI = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}"
}
  , PI = {
    date: Sd({
        formats: xI,
        defaultWidth: "full"
    }),
    time: Sd({
        formats: wI,
        defaultWidth: "full"
    }),
    dateTime: Sd({
        formats: SI,
        defaultWidth: "full"
    })
}
  , TI = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P"
}
  , bI = (t,e,n,i)=>TI[t];
function Hi(t) {
    return (e,n)=>{
        const i = n?.context ? String(n.context) : "standalone";
        let o;
        if (i === "formatting" && t.formattingValues) {
            const c = t.defaultFormattingWidth || t.defaultWidth
              , d = n?.width ? String(n.width) : c;
            o = t.formattingValues[d] || t.formattingValues[c]
        } else {
            const c = t.defaultWidth
              , d = n?.width ? String(n.width) : t.defaultWidth;
            o = t.values[d] || t.values[c]
        }
        const l = t.argumentCallback ? t.argumentCallback(e) : e;
        return o[l]
    }
}
const CI = {
    narrow: ["B", "A"],
    abbreviated: ["BC", "AD"],
    wide: ["Before Christ", "Anno Domini"]
}
  , _I = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}
  , EI = {
    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}
  , kI = {
    narrow: ["S", "M", "T", "W", "T", "F", "S"],
    short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}
  , AI = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "mi",
        noon: "n",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    }
}
  , RI = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "mi",
        noon: "n",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnight",
        noon: "noon",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnight",
        noon: "noon",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    }
}
  , NI = (t,e)=>{
    const n = Number(t)
      , i = n % 100;
    if (i > 20 || i < 10)
        switch (i % 10) {
        case 1:
            return n + "st";
        case 2:
            return n + "nd";
        case 3:
            return n + "rd"
        }
    return n + "th"
}
  , MI = {
    ordinalNumber: NI,
    era: Hi({
        values: CI,
        defaultWidth: "wide"
    }),
    quarter: Hi({
        values: _I,
        defaultWidth: "wide",
        argumentCallback: t=>t - 1
    }),
    month: Hi({
        values: EI,
        defaultWidth: "wide"
    }),
    day: Hi({
        values: kI,
        defaultWidth: "wide"
    }),
    dayPeriod: Hi({
        values: AI,
        defaultWidth: "wide",
        formattingValues: RI,
        defaultFormattingWidth: "wide"
    })
};
function Qi(t) {
    return (e,n={})=>{
        const i = n.width
          , o = i && t.matchPatterns[i] || t.matchPatterns[t.defaultMatchWidth]
          , l = e.match(o);
        if (!l)
            return null;
        const c = l[0]
          , d = i && t.parsePatterns[i] || t.parsePatterns[t.defaultParseWidth]
          , h = Array.isArray(d) ? OI(d, y=>y.test(c)) : DI(d, y=>y.test(c));
        let p;
        p = t.valueCallback ? t.valueCallback(h) : h,
        p = n.valueCallback ? n.valueCallback(p) : p;
        const m = e.slice(c.length);
        return {
            value: p,
            rest: m
        }
    }
}
function DI(t, e) {
    for (const n in t)
        if (Object.prototype.hasOwnProperty.call(t, n) && e(t[n]))
            return n
}
function OI(t, e) {
    for (let n = 0; n < t.length; n++)
        if (e(t[n]))
            return n
}
function II(t) {
    return (e,n={})=>{
        const i = e.match(t.matchPattern);
        if (!i)
            return null;
        const o = i[0]
          , l = e.match(t.parsePattern);
        if (!l)
            return null;
        let c = t.valueCallback ? t.valueCallback(l[0]) : l[0];
        c = n.valueCallback ? n.valueCallback(c) : c;
        const d = e.slice(o.length);
        return {
            value: c,
            rest: d
        }
    }
}
const LI = /^(\d+)(th|st|nd|rd)?/i
  , jI = /\d+/i
  , FI = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i
}
  , VI = {
    any: [/^b/i, /^(a|c)/i]
}
  , zI = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i
}
  , BI = {
    any: [/1/i, /2/i, /3/i, /4/i]
}
  , UI = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}
  , $I = {
    narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
    any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}
  , WI = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}
  , HI = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}
  , QI = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}
  , KI = {
    any: {
        am: /^a/i,
        pm: /^p/i,
        midnight: /^mi/i,
        noon: /^no/i,
        morning: /morning/i,
        afternoon: /afternoon/i,
        evening: /evening/i,
        night: /night/i
    }
}
  , qI = {
    ordinalNumber: II({
        matchPattern: LI,
        parsePattern: jI,
        valueCallback: t=>parseInt(t, 10)
    }),
    era: Qi({
        matchPatterns: FI,
        defaultMatchWidth: "wide",
        parsePatterns: VI,
        defaultParseWidth: "any"
    }),
    quarter: Qi({
        matchPatterns: zI,
        defaultMatchWidth: "wide",
        parsePatterns: BI,
        defaultParseWidth: "any",
        valueCallback: t=>t + 1
    }),
    month: Qi({
        matchPatterns: UI,
        defaultMatchWidth: "wide",
        parsePatterns: $I,
        defaultParseWidth: "any"
    }),
    day: Qi({
        matchPatterns: WI,
        defaultMatchWidth: "wide",
        parsePatterns: HI,
        defaultParseWidth: "any"
    }),
    dayPeriod: Qi({
        matchPatterns: QI,
        defaultMatchWidth: "any",
        parsePatterns: KI,
        defaultParseWidth: "any"
    })
}
  , ZI = {
    code: "en-US",
    formatDistance: vI,
    formatLong: PI,
    formatRelative: bI,
    localize: MI,
    match: qI,
    options: {
        weekStartsOn: 0,
        firstWeekContainsDate: 1
    }
};
function GI(t, e, n) {
    const i = aI()
      , o = n?.locale ?? i.locale ?? ZI
      , l = 2520
      , c = il(t, e);
    if (isNaN(c))
        throw new RangeError("Invalid time value");
    const d = Object.assign({}, n, {
        addSuffix: n?.addSuffix,
        comparison: c
    });
    let h, p;
    c > 0 ? (h = mt(e),
    p = mt(t)) : (h = mt(t),
    p = mt(e));
    const m = gI(p, h)
      , y = (bv(p) - bv(h)) / 1e3
      , v = Math.round((m - y) / 60);
    let w;
    if (v < 2)
        return n?.includeSeconds ? m < 5 ? o.formatDistance("lessThanXSeconds", 5, d) : m < 10 ? o.formatDistance("lessThanXSeconds", 10, d) : m < 20 ? o.formatDistance("lessThanXSeconds", 20, d) : m < 40 ? o.formatDistance("halfAMinute", 0, d) : m < 60 ? o.formatDistance("lessThanXMinutes", 1, d) : o.formatDistance("xMinutes", 1, d) : v === 0 ? o.formatDistance("lessThanXMinutes", 1, d) : o.formatDistance("xMinutes", v, d);
    if (v < 45)
        return o.formatDistance("xMinutes", v, d);
    if (v < 90)
        return o.formatDistance("aboutXHours", 1, d);
    if (v < Tv) {
        const C = Math.round(v / 60);
        return o.formatDistance("aboutXHours", C, d)
    } else {
        if (v < l)
            return o.formatDistance("xDays", 1, d);
        if (v < Ya) {
            const C = Math.round(v / Tv);
            return o.formatDistance("xDays", C, d)
        } else if (v < Ya * 2)
            return w = Math.round(v / Ya),
            o.formatDistance("aboutXMonths", w, d)
    }
    if (w = mI(p, h),
    w < 12) {
        const C = Math.round(v / Ya);
        return o.formatDistance("xMonths", C, d)
    } else {
        const C = w % 12
          , P = Math.trunc(w / 12);
        return C < 3 ? o.formatDistance("aboutXYears", P, d) : C < 9 ? o.formatDistance("overXYears", P, d) : o.formatDistance("almostXYears", P + 1, d)
    }
}
function XI(t, e) {
    return GI(t, lI(t), e)
}
function YI({item: t, onClick: e, index: n}) {
    const i = new URL(t.url).hostname;
    return A.jsxs(Zl.div, {
        initial: {
            opacity: 0,
            scale: .95
        },
        animate: {
            opacity: 1,
            scale: 1
        },
        transition: {
            duration: .3,
            delay: n * .05
        },
        onClick: ()=>e(t.url),
        className: "group cursor-pointer relative bg-card/40 hover:bg-card/80 backdrop-blur-sm border border-border/50 hover:border-primary/50 rounded-xl p-5 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 overflow-hidden",
        children: [A.jsx("div", {
            className: "absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        }), A.jsxs("div", {
            className: "flex items-start justify-between gap-4",
            children: [A.jsxs("div", {
                className: "space-y-1 overflow-hidden",
                children: [A.jsx("div", {
                    className: "flex items-center gap-2 text-xs font-semibold text-primary mb-2",
                    children: A.jsx("span", {
                        className: "px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20",
                        children: i
                    })
                }), A.jsx("h3", {
                    className: "font-display font-bold text-lg text-foreground truncate group-hover:text-primary transition-colors",
                    children: t.title || i
                }), A.jsx("p", {
                    className: "text-sm text-muted-foreground truncate font-mono opacity-60",
                    children: t.url
                })]
            }), A.jsx("div", {
                className: "bg-secondary/50 p-2 rounded-lg text-muted-foreground group-hover:text-primary group-hover:bg-primary/10 transition-colors",
                children: A.jsx(Eb, {
                    className: "w-5 h-5"
                })
            })]
        }), A.jsxs("div", {
            className: "mt-4 pt-4 border-t border-border/30 flex items-center justify-between text-xs text-muted-foreground",
            children: [A.jsxs("div", {
                className: "flex items-center gap-1.5",
                children: [A.jsx(_b, {
                    className: "w-3.5 h-3.5"
                }), t.visitedAt && XI(new Date(t.visitedAt), {
                    addSuffix: !0
                })]
            }), A.jsx(Sf, {
                className: "w-3.5 h-3.5 opacity-0 group-hover:opacity-50 transition-opacity"
            })]
        })]
    })
}
function JI({content: t, url: e, onBack: n}) {
    const [i,o] = S.useState("");
    return S.useEffect(()=>{
        const l = new Blob([t],{
            type: "text/html"
        })
          , c = URL.createObjectURL(l);
        return o(c),
        ()=>URL.revokeObjectURL(c)
    }
    , [t]),
    A.jsx(IR, {
        children: A.jsxs(Zl.div, {
            initial: {
                opacity: 0,
                y: 50
            },
            animate: {
                opacity: 1,
                y: 0
            },
            exit: {
                opacity: 0,
                y: 50
            },
            className: "fixed inset-0 z-50 bg-background flex flex-col",
            children: [A.jsxs("header", {
                className: "h-16 border-b border-border/50 bg-card/80 backdrop-blur-md flex items-center justify-between px-6 shadow-sm z-10",
                children: [A.jsxs("div", {
                    className: "flex items-center gap-4",
                    children: [A.jsxs(Ji, {
                        variant: "ghost",
                        size: "sm",
                        onClick: n,
                        className: "gap-2 text-muted-foreground hover:text-foreground",
                        children: [A.jsx(Pb, {
                            className: "w-4 h-4"
                        }), "Back"]
                    }), A.jsx("div", {
                        className: "h-6 w-px bg-border/50 hidden sm:block"
                    }), A.jsx("div", {
                        className: "flex items-center gap-2 max-w-xl",
                        children: A.jsxs("div", {
                            className: "bg-secondary/50 px-3 py-1.5 rounded-md text-xs font-mono text-muted-foreground truncate border border-border/50 flex items-center gap-2",
                            children: [A.jsx("span", {
                                className: "w-2 h-2 rounded-full bg-green-500 animate-pulse"
                            }), e]
                        })
                    })]
                }), A.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [A.jsx(Ji, {
                        variant: "ghost",
                        size: "icon",
                        onClick: ()=>window.open(e, "_blank"),
                        title: "Open Original",
                        children: A.jsx(Rb, {
                            className: "w-4 h-4"
                        })
                    }), A.jsx(Ji, {
                        variant: "ghost",
                        size: "icon",
                        onClick: n,
                        className: "text-destructive hover:bg-destructive/10",
                        children: A.jsx(Cb, {
                            className: "w-5 h-5"
                        })
                    })]
                })]
            }), A.jsx("main", {
                className: "flex-1 bg-white relative overflow-hidden",
                children: i && A.jsx("iframe", {
                    src: i,
                    className: "w-full h-full border-0",
                    title: `Proxy view of ${e}`,
                    sandbox: "allow-scripts allow-same-origin"
                })
            })]
        })
    })
}
function e2() {
    const [t,e] = S.useState(null)
      , [n,i] = S.useState("")
      , {toast: o} = Zv()
      , l = ER()
      , c = AR()
      , {data: d, isLoading: h} = kR()
      , p = async y=>{
        try {
            const v = await l.mutateAsync({
                url: y
            });
            await c.mutateAsync({
                url: y,
                title: new URL(y).hostname
            }),
            i(y),
            e(v.content)
        } catch (v) {
            o({
                title: "Proxy Error",
                description: v instanceof Error ? v.message : "Failed to fetch URL",
                variant: "destructive"
            })
        }
    }
      , m = ()=>{
        e(null),
        i("")
    }
    ;
    return t ? A.jsx(JI, {
        content: t,
        url: n,
        onBack: m
    }) : A.jsxs("div", {
        className: "min-h-screen w-full bg-background text-foreground selection:bg-primary/20 selection:text-primary",
        children: [A.jsxs("div", {
            className: "fixed inset-0 overflow-hidden pointer-events-none z-0",
            children: [A.jsx("div", {
                className: "absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[120px]"
            }), A.jsx("div", {
                className: "absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-accent/5 blur-[120px]"
            })]
        }), A.jsxs("div", {
            className: "relative z-10 container max-w-6xl mx-auto px-4 py-8 md:py-16 flex flex-col items-center",
            children: [A.jsxs(Zl.div, {
                initial: {
                    opacity: 0,
                    y: -20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                className: "text-center mb-12 space-y-4 max-w-2xl",
                children: [A.jsxs("div", {
                    className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-4",
                    children: [A.jsx(Db, {
                        className: "w-3 h-3 fill-primary"
                    }), "Fast & Secure Proxy"]
                }), A.jsx("h1", {
                    className: "text-5xl md:text-7xl font-display font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-muted-foreground pb-2",
                    children: "Azalia"
                }), A.jsxs("p", {
                    className: "text-lg md:text-xl text-muted-foreground font-light leading-relaxed",
                    children: ["Browse the web anonymously with our secure proxy service.", A.jsx("br", {
                        className: "hidden md:block"
                    }), "Access content freely without restrictions."]
                })]
            }), A.jsxs("div", {
                className: "w-full mb-20",
                children: [A.jsx(sI, {
                    onSearch: p,
                    isLoading: l.isPending
                }), A.jsxs("div", {
                    className: "mt-8 flex flex-wrap justify-center gap-6 md:gap-12 text-sm text-muted-foreground",
                    children: [A.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [A.jsx(Nb, {
                            className: "w-4 h-4 text-primary"
                        }), A.jsx("span", {
                            children: "No Tracking"
                        })]
                    }), A.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [A.jsx(Ab, {
                            className: "w-4 h-4 text-primary"
                        }), A.jsx("span", {
                            children: "Encrypted"
                        })]
                    }), A.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [A.jsx(Sf, {
                            className: "w-4 h-4 text-primary"
                        }), A.jsx("span", {
                            children: "Global Access"
                        })]
                    })]
                })]
            }), A.jsxs("div", {
                className: "w-full max-w-5xl",
                children: [A.jsxs("div", {
                    className: "flex items-center justify-between mb-8",
                    children: [A.jsxs("h2", {
                        className: "text-2xl font-display font-bold flex items-center gap-3",
                        children: [A.jsx(kb, {
                            className: "w-6 h-6 text-primary"
                        }), "Recent History"]
                    }), A.jsx("div", {
                        className: "h-px flex-1 bg-border ml-6 opacity-50"
                    })]
                }), h ? A.jsx("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                    children: [1, 2, 3].map(y=>A.jsx("div", {
                        className: "h-32 bg-card/30 rounded-xl animate-pulse border border-border/30"
                    }, y))
                }) : d?.length === 0 ? A.jsx("div", {
                    className: "text-center py-16 bg-card/30 rounded-2xl border border-dashed border-border/50",
                    children: A.jsx("p", {
                        className: "text-muted-foreground",
                        children: "No history yet. Start browsing!"
                    })
                }) : A.jsx("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                    children: d?.map((y,v)=>A.jsx(YI, {
                        item: y,
                        index: v,
                        onClick: p
                    }, y.id))
                })]
            })]
        })]
    })
}
const dS = S.forwardRef(({className: t, ...e},n)=>A.jsx("div", {
    ref: n,
    className: It("shadcn-card rounded-xl border bg-card border-card-border text-card-foreground shadow-sm", t),
    ...e
}));
dS.displayName = "Card";
const t2 = S.forwardRef(({className: t, ...e},n)=>A.jsx("div", {
    ref: n,
    className: It("flex flex-col space-y-1.5 p-6", t),
    ...e
}));
t2.displayName = "CardHeader";
const n2 = S.forwardRef(({className: t, ...e},n)=>A.jsx("div", {
    ref: n,
    className: It("text-2xl font-semibold leading-none tracking-tight", t),
    ...e
}));
n2.displayName = "CardTitle";
const r2 = S.forwardRef(({className: t, ...e},n)=>A.jsx("div", {
    ref: n,
    className: It("text-sm text-muted-foreground", t),
    ...e
}));
r2.displayName = "CardDescription";
const fS = S.forwardRef(({className: t, ...e},n)=>A.jsx("div", {
    ref: n,
    className: It("p-6 pt-0", t),
    ...e
}));
fS.displayName = "CardContent";
const s2 = S.forwardRef(({className: t, ...e},n)=>A.jsx("div", {
    ref: n,
    className: It("flex items-center p-6 pt-0", t),
    ...e
}));
s2.displayName = "CardFooter";
function i2() {
    return A.jsx("div", {
        className: "min-h-screen w-full flex items-center justify-center bg-gray-50",
        children: A.jsx(dS, {
            className: "w-full max-w-md mx-4",
            children: A.jsxs(fS, {
                className: "pt-6",
                children: [A.jsxs("div", {
                    className: "flex mb-4 gap-2",
                    children: [A.jsx(bb, {
                        className: "h-8 w-8 text-red-500"
                    }), A.jsx("h1", {
                        className: "text-2xl font-bold text-gray-900",
                        children: "404 Page Not Found"
                    })]
                }), A.jsx("p", {
                    className: "mt-4 text-sm text-gray-600",
                    children: "Did you forget to add the page to the router?"
                })]
            })
        })
    })
}
function o2() {
    return A.jsxs(BP, {
        children: [A.jsx(Tg, {
            path: "/",
            component: e2
        }), A.jsx(Tg, {
            component: i2
        })]
    })
}
function a2() {
    return A.jsx(aT, {
        client: PT,
        children: A.jsxs(B_, {
            children: [A.jsx(mC, {}), A.jsx(o2, {})]
        })
    })
}
yP.createRoot(document.getElementById("root")).render(A.jsx(a2, {}));
