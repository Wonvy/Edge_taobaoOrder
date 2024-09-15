! function (t) {
  var e = {};

  function r(n) {
    if (e[n]) return e[n].exports;
    var o = e[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return t[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
  }
  r.m = t, r.c = e, r.d = function (t, e, n) {
    r.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: n
    })
  }, r.r = function (t) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    })
  }, r.t = function (t, e) {
    if (1 & e && (t = r(t)), 8 & e) return t;
    if (4 & e && "object" === typeof t && t && t.__esModule) return t;
    var n = Object.create(null);
    if (r.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: t
    }), 2 & e && "string" != typeof t)
      for (var o in t) r.d(n, o, function (e) {
        return t[e]
      }.bind(null, o));
    return n
  }, r.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t.default
    } : function () {
      return t
    };
    return r.d(e, "a", e), e
  }, r.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e)
  }, r.p = "/", r(r.s = 548)
}({
  10: function (t, e, r) {
    "use strict";
    r.d(e, "b", (function () {
      return A
    })), r.d(e, "c", (function () {
      return _
    }));
    var n, o, a = r(14),
      i = r(2),
      s = r.n(i),
      c = r(4),
      u = r(55),
      f = r.n(u),
      l = r(116),
      p = r.n(l),
      d = r(6),
      g = r.n(d),
      m = r(8),
      h = r(27),
      b = r(28),
      y = r(96),
      v = !(null === (n = navigator) || void 0 === n || null === (o = n.serviceWorker) || void 0 === o ? void 0 : o.controller),
      x = {
        429: "Too Many Requests",
        500: "\u670d\u52a1\u5668\u53d1\u751f\u9519\u8bef\uff0c\u8bf7\u68c0\u67e5\u670d\u52a1\u5668\u3002",
        502: "\u7f51\u5173\u9519\u8bef\u3002",
        503: "\u670d\u52a1\u4e0d\u53ef\u7528\uff0c\u670d\u52a1\u5668\u6682\u65f6\u8fc7\u8f7d\u6216\u7ef4\u62a4\u3002",
        504: "\u7f51\u5173\u8d85\u65f6\u3002"
      },
      A = function () {
        var t = Object(c.a)(s.a.mark((function t() {
          return s.a.wrap((function (t) {
            for (; ;) switch (t.prev = t.next) {
              case 0:
                if (!Object(h.a)()) {
                  t.next = 11;
                  break
                }
                return t.next = 3, Object(b.b)();
              case 3:
                if (!t.sent) {
                  t.next = 7;
                  break
                }
                t.t0 = "https://cubox.cc", t.next = 8;
                break;
              case 7:
                t.t0 = "https://cubox.pro";
              case 8:
                return t.abrupt("return", t.t0);
              case 11:
                return t.next = 13, Object(b.b)();
              case 13:
                if (!t.sent) {
                  t.next = 17;
                  break
                }
                t.t1 = "https://cubox.cc", t.next = 18;
                break;
              case 17:
                t.t1 = "https://test.cubox.pro";
              case 18:
                return t.abrupt("return", t.t1);
              case 19:
              case "end":
                return t.stop()
            }
          }), t)
        })));
        return function () {
          return t.apply(this, arguments)
        }
      }(),
      w = {
        timeout: 6e6,
        transformRequest: [
          function (t) {
            return p.a.stringify(t)
          }
        ]
      };
    v && (w.adapter = y.a);
    var k = f.a.create(w),
      j = {},
      O = f.a.CancelToken,
      S = {},
      E = function (t) {
        var e = t.response;
        t.request;
        if (e) {
          x[e.status] || e.statusText;
          S.noresponse || (S.noresponse = !0)
        }
        return Promise.reject(t)
      };
    k.interceptors.request.use(function () {
      var t = Object(c.a)(s.a.mark((function t(e) {
        var r, n, o, i, c;
        return s.a.wrap((function (t) {
          for (; ;) switch (t.prev = t.next) {
            case 0:
              return r = e.headers, n = r.cancelKey, t.next = 4, A();
            case 4:
              if (o = t.sent, i = {}, n && (j[n] && (j[n](), delete j[n]), i.cancelToken = new O((function (t) {
                j[n] = t
              }))), void 0 !== e.baseURL) {
                t.next = 14;
                break
              }
              return t.next = 10, g.a.cookies.get({
                name: m.b,
                url: o
              });
            case 10:
              c = t.sent, void 0 === r.Authorization && c && c.value && (r.Authorization = c.value), null === r.Authorization && delete r.Authorization, e.baseURL = o + "/c/api";
            case 14:
              return t.abrupt("return", Object(a.a)(Object(a.a)({}, e), i));
            case 15:
            case "end":
              return t.stop()
          }
        }), t)
      })));
      return function (e) {
        return t.apply(this, arguments)
      }
    }(), E), k.interceptors.response.use((function (t) {
      var e = t.config.headers.cancelKey;
      return e && j[e] && delete j[e], t
    }), E);
    var _ = function (t) {
      return t && t.data && 200 === t.data.code
    };
    e.a = k
  },
  103: function (t, e) {
    var r;
    r = function () {
      return this
    }();
    try {
      r = r || new Function("return this")()
    } catch (n) {
      "object" === typeof window && (r = window)
    }
    t.exports = r
  },
  111: function (t, e, r) {
    "use strict";
    r.d(e, "b", (function () {
      return p
    })), r.d(e, "a", (function () {
      return d
    })), r.d(e, "c", (function () {
      return g
    }));
    var n = r(2),
      o = r.n(n),
      a = r(4),
      i = r(117),
      s = r(10),
      c = r(27),
      u = function (t) {
        var e;
        if (!Object(c.a)()) {
          for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) n[o - 1] = arguments[o];
          (e = console).log.apply(e, ["[qiniu] ".concat(t)].concat(n))
        }
      },
      f = "https://image.cubox.pro/",
      l = {
        "https://cubox.cc": "https://files.cubox.cc/",
        "https://cubox.pro": "https://image.cubox.pro/",
        "https://test.cubox.pro": "https://image.cubox.pro/"
      },
      p = function (t) {
        var e = t.key,
          r = "";
        switch (t.type) {
          case "bookmarkCover":
            r = "?imageMogr2/auto-orient/thumbnail/300x/blur/1x0/quality/85/ignore-error/1"
        }
        return "".concat(f).concat(e).concat(r)
      },
      d = function () {
        var t = Object(a.a)(o.a.mark((function t(e) {
          var r, n, a, i, c;
          return o.a.wrap((function (t) {
            for (; ;) switch (t.prev = t.next) {
              case 0:
                return r = e.key, n = e.type, t.next = 3, Object(s.b)();
              case 3:
                a = t.sent, i = l[a], c = "", t.t0 = n, t.next = "bookmarkCover" === t.t0 ? 9 : 11;
                break;
              case 9:
                return c = "?imageMogr2/auto-orient/thumbnail/300x/blur/1x0/quality/85/ignore-error/1", t.abrupt("break", 12);
              case 11:
                return t.abrupt("break", 12);
              case 12:
                return t.abrupt("return", "".concat(i).concat(r).concat(c));
              case 13:
              case "end":
                return t.stop()
            }
          }), t)
        })));
        return function (e) {
          return t.apply(this, arguments)
        }
      }();
    var g = function () {
      var t = Object(a.a)(o.a.mark((function t(e) {
        var r, n, a, s, c, f, l, p, d, g, m, h, b, y;
        return o.a.wrap((function (t) {
          for (; ;) switch (t.prev = t.next) {
            case 0:
              return a = e.file, s = e.fileName, c = e.fileType, f = e.fileExtension, l = e.bucketPrivate, t.next = 3, Object(i.c)({
                bucketPrivate: !!l
              });
            case 3:
              if (p = t.sent, d = null === p || void 0 === p || null === (r = p.data) || void 0 === r || null === (n = r.data) || void 0 === n ? void 0 : n.token) {
                t.next = 8;
                break
              }
              return u("\u83b7\u53d6\u4e03\u725btoken\u5931\u8d25"), t.abrupt("return");
            case 8:
              return g = Array.isArray(a) ? a : [a], (m = new Blob(g, {
                type: c
              })).name = s, h = "".concat((o = "text/html" === c ? "archive" : void 0) ? o + "/" : "").concat((new Date).getTime(), "/").concat(Math.floor(1e6 * Math.random())) + (c.includes("image") ? "/image.png" : ".".concat(f)), t.prev = 12, (b = new FormData).append("file", m), b.append("token", d), b.append("key", h), t.next = 19, fetch("https://upload.qiniup.com/", {
                method: "POST",
                body: b
              }).then((function (t) {
                return t.json()
              }));
            case 19:
              return y = t.sent, u("\u4e0a\u4f20\u7ed3\u679c", y), t.abrupt("return", y);
            case 24:
              t.prev = 24, t.t0 = t.catch(12), u("\u4e0a\u4f20\u5931\u8d25", t.t0);
            case 27:
            case "end":
              return t.stop()
          }
          var o
        }), t, null, [
          [12, 24]
        ])
      })));
      return function (e) {
        return t.apply(this, arguments)
      }
    }()
  },
  112: function (t, e, r) {
    "use strict";

    function n(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
      return n
    }
    r.d(e, "a", (function () {
      return n
    }))
  },
  116: function (t, e, r) {
    "use strict";
    var n = r(282),
      o = r(291),
      a = r(158);
    t.exports = {
      formats: a,
      parse: o,
      stringify: n
    }
  },
  117: function (t, e, r) {
    "use strict";
    r.d(e, "c", (function () {
      return s
    })), r.d(e, "b", (function () {
      return u
    })), r.d(e, "d", (function () {
      return l
    })), r.d(e, "a", (function () {
      return d
    }));
    var n = r(2),
      o = r.n(n),
      a = r(4),
      i = r(10);

    function s(t) {
      return c.apply(this, arguments)
    }

    function c() {
      return (c = Object(a.a)(o.a.mark((function t(e) {
        return o.a.wrap((function (t) {
          for (; ;) switch (t.prev = t.next) {
            case 0:
              return t.abrupt("return", i.a.get("/qiniu/token", {
                params: e
              }));
            case 1:
            case "end":
              return t.stop()
          }
        }), t)
      })))).apply(this, arguments)
    }

    function u(t) {
      return f.apply(this, arguments)
    }

    function f() {
      return (f = Object(a.a)(o.a.mark((function t(e) {
        return o.a.wrap((function (t) {
          for (; ;) switch (t.prev = t.next) {
            case 0:
              return e.url = encodeURIComponent(e.url), t.abrupt("return", i.a.get("/search_engine/qiniu/key", {
                params: e
              }));
            case 2:
            case "end":
              return t.stop()
          }
        }), t)
      })))).apply(this, arguments)
    }

    function l(t) {
      return p.apply(this, arguments)
    }

    function p() {
      return (p = Object(a.a)(o.a.mark((function t(e) {
        return o.a.wrap((function (t) {
          for (; ;) switch (t.prev = t.next) {
            case 0:
              return t.abrupt("return", i.a.get(e, {
                baseURL: "",
                responseType: "blob",
                headers: {
                  Authorization: ""
                }
              }));
            case 1:
            case "end":
              return t.stop()
          }
        }), t)
      })))).apply(this, arguments)
    }

    function d(t) {
      return g.apply(this, arguments)
    }

    function g() {
      return (g = Object(a.a)(o.a.mark((function t(e) {
        return o.a.wrap((function (t) {
          for (; ;) switch (t.prev = t.next) {
            case 0:
              return t.abrupt("return", i.a.get("/bookmark/search", {
                params: e,
                headers: {
                  cancelKey: "/bookmark/search"
                }
              }));
            case 1:
            case "end":
              return t.stop()
          }
        }), t)
      })))).apply(this, arguments)
    }
  },
  12: function (t, e, r) {
    "use strict";
    r.d(e, "a", (function () {
      return i
    }));
    var n = r(147);
    var o = r(90),
      a = r(148);

    function i(t, e) {
      return Object(n.a)(t) || function (t, e) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(t)) {
          var r = [],
            n = !0,
            o = !1,
            a = void 0;
          try {
            for (var i, s = t[Symbol.iterator](); !(n = (i = s.next()).done) && (r.push(i.value), !e || r.length !== e); n = !0);
          } catch (c) {
            o = !0, a = c
          } finally {
            try {
              n || null == s.return || s.return()
            } finally {
              if (o) throw a
            }
          }
          return r
        }
      }(t, e) || Object(o.a)(t, e) || Object(a.a)()
    }
  },
  123: function (t, e) {
    function r(e) {
      return t.exports = r = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      }, r(e)
    }
    t.exports = r
  },
  124: function (t, e, r) {
    "use strict";
    var n = r(44);

    function o(t) {
      return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
    }
    t.exports = function (t, e, r) {
      if (!e) return t;
      var a;
      if (r) a = r(e);
      else if (n.isURLSearchParams(e)) a = e.toString();
      else {
        var i = [];
        n.forEach(e, (function (t, e) {
          null !== t && "undefined" !== typeof t && (n.isArray(t) ? e += "[]" : t = [t], n.forEach(t, (function (t) {
            n.isDate(t) ? t = t.toISOString() : n.isObject(t) && (t = JSON.stringify(t)), i.push(o(e) + "=" + o(t))
          })))
        })), a = i.join("&")
      } if (a) {
        var s = t.indexOf("#"); - 1 !== s && (t = t.slice(0, s)), t += (-1 === t.indexOf("?") ? "?" : "&") + a
      }
      return t
    }
  },
  131: function (t, e, r) {
    "use strict";
    r.d(e, "a", (function () {
      return i
    }));
    var n = r(2),
      o = r.n(n),
      a = r(4);

    function i(t) {
      return s.apply(this, arguments)
    }

    function s() {
      return (s = Object(a.a)(o.a.mark((function t(e) {
        var r;
        return o.a.wrap((function (t) {
          for (; ;) switch (t.prev = t.next) {
            case 0:
              return t.next = 2, e;
            case 2:
              if (200 === (r = t.sent.data).code) {
                t.next = 5;
                break
              }
              throw new Error(r.message);
            case 5:
              return t.abrupt("return", r.data);
            case 6:
            case "end":
              return t.stop()
          }
        }), t)
      })))).apply(this, arguments)
    }
  },
  134: function (t, e, r) {
    "use strict";
    r.d(e, "b", (function () {
      return s
    })), r.d(e, "a", (function () {
      return u
    }));
    var n = r(2),
      o = r.n(n),
      a = r(4),
      i = r(10);

    function s(t) {
      return c.apply(this, arguments)
    }

    function c() {
      return (c = Object(a.a)(o.a.mark((function t(e) {
        return o.a.wrap((function (t) {
          for (; ;) switch (t.prev = t.next) {
            case 0:
              return t.abrupt("return", i.a.get("/v2/group/my", {
                params: e
              }));
            case 1:
            case "end":
              return t.stop()
          }
        }), t)
      })))).apply(this, arguments)
    }

    function u(t) {
      return f.apply(this, arguments)
    }

    function f() {
      return (f = Object(a.a)(o.a.mark((function t(e) {
        return o.a.wrap((function (t) {
          for (; ;) switch (t.prev = t.next) {
            case 0:
              return t.abrupt("return", i.a.post("/group/new", e));
            case 1:
            case "end":
              return t.stop()
          }
        }), t)
      })))).apply(this, arguments)
    }
  },
  14: function (t, e, r) {
    "use strict";
    r.d(e, "a", (function () {
      return a
    }));
    var n = r(39);

    function o(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e && (n = n.filter((function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.push.apply(r, n)
      }
      return r
    }

    function a(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2 ? o(Object(r), !0).forEach((function (e) {
          Object(n.a)(t, e, r[e])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : o(Object(r)).forEach((function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        }))
      }
      return t
    }
  },
  147: function (t, e, r) {
    "use strict";

    function n(t) {
      if (Array.isArray(t)) return t
    }
    r.d(e, "a", (function () {
      return n
    }))
  },
  148: function (t, e, r) {
    "use strict";

    function n() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
    r.d(e, "a", (function () {
      return n
    }))
  },
  149: function (t, e, r) {
    "use strict";

    function n(t) {
      if ("undefined" !== typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
    }
    r.d(e, "a", (function () {
      return n
    }))
  },
  154: function (t, e) {
    function r(e, n) {
      return t.exports = r = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      }, r(e, n)
    }
    t.exports = r
  },
  155: function (t, e, r) {
    "use strict";
    (function (e) {
      var n = r(44),
        o = r(271),
        a = r(192),
        i = {
          "Content-Type": "application/x-www-form-urlencoded"
        };

      function s(t, e) {
        !n.isUndefined(t) && n.isUndefined(t["Content-Type"]) && (t["Content-Type"] = e)
      }
      var c = {
        transitional: {
          silentJSONParsing: !0,
          forcedJSONParsing: !0,
          clarifyTimeoutError: !1
        },
        adapter: function () {
          var t;
          return ("undefined" !== typeof XMLHttpRequest || "undefined" !== typeof e && "[object process]" === Object.prototype.toString.call(e)) && (t = r(193)), t
        }(),
        transformRequest: [
          function (t, e) {
            return o(e, "Accept"), o(e, "Content-Type"), n.isFormData(t) || n.isArrayBuffer(t) || n.isBuffer(t) || n.isStream(t) || n.isFile(t) || n.isBlob(t) ? t : n.isArrayBufferView(t) ? t.buffer : n.isURLSearchParams(t) ? (s(e, "application/x-www-form-urlencoded;charset=utf-8"), t.toString()) : n.isObject(t) || e && "application/json" === e["Content-Type"] ? (s(e, "application/json"), function (t, e, r) {
              if (n.isString(t)) try {
                return (e || JSON.parse)(t), n.trim(t)
              } catch (o) {
                if ("SyntaxError" !== o.name) throw o
              }
              return (r || JSON.stringify)(t)
            }(t)) : t
          }
        ],
        transformResponse: [
          function (t) {
            var e = this.transitional,
              r = e && e.silentJSONParsing,
              o = e && e.forcedJSONParsing,
              i = !r && "json" === this.responseType;
            if (i || o && n.isString(t) && t.length) try {
              return JSON.parse(t)
            } catch (s) {
              if (i) {
                if ("SyntaxError" === s.name) throw a(s, this, "E_JSON_PARSE");
                throw s
              }
            }
            return t
          }
        ],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        validateStatus: function (t) {
          return t >= 200 && t < 300
        },
        headers: {
          common: {
            Accept: "application/json, text/plain, */*"
          }
        }
      };
      n.forEach(["delete", "get", "head"], (function (t) {
        c.headers[t] = {}
      })), n.forEach(["post", "put", "patch"], (function (t) {
        c.headers[t] = n.merge(i)
      })), t.exports = c
    }).call(this, r(217))
  },
  156: function (t, e, r) {
    "use strict";
    var n, o = SyntaxError,
      a = Function,
      i = TypeError,
      s = function (t) {
        try {
          return a('"use strict"; return (' + t + ").constructor;")()
        } catch (e) { }
      },
      c = Object.getOwnPropertyDescriptor;
    if (c) try {
      c({}, "")
    } catch (_) {
      c = null
    }
    var u = function () {
      throw new i
    },
      f = c ? function () {
        try {
          return u
        } catch (t) {
          try {
            return c(arguments, "callee").get
          } catch (e) {
            return u
          }
        }
      }() : u,
      l = r(284)(),
      p = Object.getPrototypeOf || function (t) {
        return t.__proto__
      },
      d = {},
      g = "undefined" === typeof Uint8Array ? n : p(Uint8Array),
      m = {
        "%AggregateError%": "undefined" === typeof AggregateError ? n : AggregateError,
        "%Array%": Array,
        "%ArrayBuffer%": "undefined" === typeof ArrayBuffer ? n : ArrayBuffer,
        "%ArrayIteratorPrototype%": l ? p([][Symbol.iterator]()) : n,
        "%AsyncFromSyncIteratorPrototype%": n,
        "%AsyncFunction%": d,
        "%AsyncGenerator%": d,
        "%AsyncGeneratorFunction%": d,
        "%AsyncIteratorPrototype%": d,
        "%Atomics%": "undefined" === typeof Atomics ? n : Atomics,
        "%BigInt%": "undefined" === typeof BigInt ? n : BigInt,
        "%Boolean%": Boolean,
        "%DataView%": "undefined" === typeof DataView ? n : DataView,
        "%Date%": Date,
        "%decodeURI%": decodeURI,
        "%decodeURIComponent%": decodeURIComponent,
        "%encodeURI%": encodeURI,
        "%encodeURIComponent%": encodeURIComponent,
        "%Error%": Error,
        "%eval%": eval,
        "%EvalError%": EvalError,
        "%Float32Array%": "undefined" === typeof Float32Array ? n : Float32Array,
        "%Float64Array%": "undefined" === typeof Float64Array ? n : Float64Array,
        "%FinalizationRegistry%": "undefined" === typeof FinalizationRegistry ? n : FinalizationRegistry,
        "%Function%": a,
        "%GeneratorFunction%": d,
        "%Int8Array%": "undefined" === typeof Int8Array ? n : Int8Array,
        "%Int16Array%": "undefined" === typeof Int16Array ? n : Int16Array,
        "%Int32Array%": "undefined" === typeof Int32Array ? n : Int32Array,
        "%isFinite%": isFinite,
        "%isNaN%": isNaN,
        "%IteratorPrototype%": l ? p(p([][Symbol.iterator]())) : n,
        "%JSON%": "object" === typeof JSON ? JSON : n,
        "%Map%": "undefined" === typeof Map ? n : Map,
        "%MapIteratorPrototype%": "undefined" !== typeof Map && l ? p((new Map)[Symbol.iterator]()) : n,
        "%Math%": Math,
        "%Number%": Number,
        "%Object%": Object,
        "%parseFloat%": parseFloat,
        "%parseInt%": parseInt,
        "%Promise%": "undefined" === typeof Promise ? n : Promise,
        "%Proxy%": "undefined" === typeof Proxy ? n : Proxy,
        "%RangeError%": RangeError,
        "%ReferenceError%": ReferenceError,
        "%Reflect%": "undefined" === typeof Reflect ? n : Reflect,
        "%RegExp%": RegExp,
        "%Set%": "undefined" === typeof Set ? n : Set,
        "%SetIteratorPrototype%": "undefined" !== typeof Set && l ? p((new Set)[Symbol.iterator]()) : n,
        "%SharedArrayBuffer%": "undefined" === typeof SharedArrayBuffer ? n : SharedArrayBuffer,
        "%String%": String,
        "%StringIteratorPrototype%": l ? p(""[Symbol.iterator]()) : n,
        "%Symbol%": l ? Symbol : n,
        "%SyntaxError%": o,
        "%ThrowTypeError%": f,
        "%TypedArray%": g,
        "%TypeError%": i,
        "%Uint8Array%": "undefined" === typeof Uint8Array ? n : Uint8Array,
        "%Uint8ClampedArray%": "undefined" === typeof Uint8ClampedArray ? n : Uint8ClampedArray,
        "%Uint16Array%": "undefined" === typeof Uint16Array ? n : Uint16Array,
        "%Uint32Array%": "undefined" === typeof Uint32Array ? n : Uint32Array,
        "%URIError%": URIError,
        "%WeakMap%": "undefined" === typeof WeakMap ? n : WeakMap,
        "%WeakRef%": "undefined" === typeof WeakRef ? n : WeakRef,
        "%WeakSet%": "undefined" === typeof WeakSet ? n : WeakSet
      },
      h = function t(e) {
        var r;
        if ("%AsyncFunction%" === e) r = s("async function () {}");
        else if ("%GeneratorFunction%" === e) r = s("function* () {}");
        else if ("%AsyncGeneratorFunction%" === e) r = s("async function* () {}");
        else if ("%AsyncGenerator%" === e) {
          var n = t("%AsyncGeneratorFunction%");
          n && (r = n.prototype)
        } else if ("%AsyncIteratorPrototype%" === e) {
          var o = t("%AsyncGenerator%");
          o && (r = p(o.prototype))
        }
        return m[e] = r, r
      },
      b = {
        "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
        "%ArrayPrototype%": ["Array", "prototype"],
        "%ArrayProto_entries%": ["Array", "prototype", "entries"],
        "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
        "%ArrayProto_keys%": ["Array", "prototype", "keys"],
        "%ArrayProto_values%": ["Array", "prototype", "values"],
        "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
        "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
        "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
        "%BooleanPrototype%": ["Boolean", "prototype"],
        "%DataViewPrototype%": ["DataView", "prototype"],
        "%DatePrototype%": ["Date", "prototype"],
        "%ErrorPrototype%": ["Error", "prototype"],
        "%EvalErrorPrototype%": ["EvalError", "prototype"],
        "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
        "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
        "%FunctionPrototype%": ["Function", "prototype"],
        "%Generator%": ["GeneratorFunction", "prototype"],
        "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
        "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
        "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
        "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
        "%JSONParse%": ["JSON", "parse"],
        "%JSONStringify%": ["JSON", "stringify"],
        "%MapPrototype%": ["Map", "prototype"],
        "%NumberPrototype%": ["Number", "prototype"],
        "%ObjectPrototype%": ["Object", "prototype"],
        "%ObjProto_toString%": ["Object", "prototype", "toString"],
        "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
        "%PromisePrototype%": ["Promise", "prototype"],
        "%PromiseProto_then%": ["Promise", "prototype", "then"],
        "%Promise_all%": ["Promise", "all"],
        "%Promise_reject%": ["Promise", "reject"],
        "%Promise_resolve%": ["Promise", "resolve"],
        "%RangeErrorPrototype%": ["RangeError", "prototype"],
        "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
        "%RegExpPrototype%": ["RegExp", "prototype"],
        "%SetPrototype%": ["Set", "prototype"],
        "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
        "%StringPrototype%": ["String", "prototype"],
        "%SymbolPrototype%": ["Symbol", "prototype"],
        "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
        "%TypedArrayPrototype%": ["TypedArray", "prototype"],
        "%TypeErrorPrototype%": ["TypeError", "prototype"],
        "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
        "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
        "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
        "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
        "%URIErrorPrototype%": ["URIError", "prototype"],
        "%WeakMapPrototype%": ["WeakMap", "prototype"],
        "%WeakSetPrototype%": ["WeakSet", "prototype"]
      },
      y = r(157),
      v = r(287),
      x = y.call(Function.call, Array.prototype.concat),
      A = y.call(Function.apply, Array.prototype.splice),
      w = y.call(Function.call, String.prototype.replace),
      k = y.call(Function.call, String.prototype.slice),
      j = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
      O = /\\(\\)?/g,
      S = function (t) {
        var e = k(t, 0, 1),
          r = k(t, -1);
        if ("%" === e && "%" !== r) throw new o("invalid intrinsic syntax, expected closing `%`");
        if ("%" === r && "%" !== e) throw new o("invalid intrinsic syntax, expected opening `%`");
        var n = [];
        return w(t, j, (function (t, e, r, o) {
          n[n.length] = r ? w(o, O, "$1") : e || t
        })), n
      },
      E = function (t, e) {
        var r, n = t;
        if (v(b, n) && (n = "%" + (r = b[n])[0] + "%"), v(m, n)) {
          var a = m[n];
          if (a === d && (a = h(n)), "undefined" === typeof a && !e) throw new i("intrinsic " + t + " exists, but is not available. Please file an issue!");
          return {
            alias: r,
            name: n,
            value: a
          }
        }
        throw new o("intrinsic " + t + " does not exist!")
      };
    t.exports = function (t, e) {
      if ("string" !== typeof t || 0 === t.length) throw new i("intrinsic name must be a non-empty string");
      if (arguments.length > 1 && "boolean" !== typeof e) throw new i('"allowMissing" argument must be a boolean');
      var r = S(t),
        n = r.length > 0 ? r[0] : "",
        a = E("%" + n + "%", e),
        s = a.name,
        u = a.value,
        f = !1,
        l = a.alias;
      l && (n = l[0], A(r, x([0, 1], l)));
      for (var p = 1, d = !0; p < r.length; p += 1) {
        var g = r[p],
          h = k(g, 0, 1),
          b = k(g, -1);
        if (('"' === h || "'" === h || "`" === h || '"' === b || "'" === b || "`" === b) && h !== b) throw new o("property names with quotes must have matching quotes");
        if ("constructor" !== g && d || (f = !0), v(m, s = "%" + (n += "." + g) + "%")) u = m[s];
        else if (null != u) {
          if (!(g in u)) {
            if (!e) throw new i("base intrinsic for " + t + " exists, but the property is not available.");
            return
          }
          if (c && p + 1 >= r.length) {
            var y = c(u, g);
            u = (d = !!y) && "get" in y && !("originalValue" in y.get) ? y.get : u[g]
          } else d = v(u, g), u = u[g];
          d && !f && (m[s] = u)
        }
      }
      return u
    }
  },
  157: function (t, e, r) {
    "use strict";
    var n = r(286);
    t.exports = Function.prototype.bind || n
  },
  158: function (t, e, r) {
    "use strict";
    var n = String.prototype.replace,
      o = /%20/g,
      a = "RFC1738",
      i = "RFC3986";
    t.exports = {
      default: i,
      formatters: {
        RFC1738: function (t) {
          return n.call(t, o, "+")
        },
        RFC3986: function (t) {
          return String(t)
        }
      },
      RFC1738: a,
      RFC3986: i
    }
  },
  165: function (t, e, r) {
    "use strict";
    var n = r(194);
    t.exports = function (t, e, r) {
      var o = r.config.validateStatus;
      r.status && o && !o(r.status) ? e(n("Request failed with status code " + r.status, r.config, null, r.request, r)) : t(r)
    }
  },
  166: function (t, e, r) {
    "use strict";
    var n = r(273),
      o = r(274);
    t.exports = function (t, e) {
      return t && !n(e) ? o(t, e) : e
    }
  },
  171: function (t, e) { },
  182: function (t, e, r) {
    "use strict";
    r.d(e, "a", (function () {
      return p
    })), r.d(e, "b", (function () {
      return d
    }));
    var n = r(2),
      o = r.n(n),
      a = r(4),
      i = r(55),
      s = r.n(i),
      c = r(10),
      u = r(96),
      f = r(27),
      l = function (t) {
        var e;
        if (!Object(f.a)()) {
          for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) n[o - 1] = arguments[o];
          (e = console).log.apply(e, ["[s3] ".concat(t)].concat(n))
        }
      },
      p = function (t) {
        return "https://cubox.s3.us-west-1.amazonaws.com/".concat(t)
      },
      d = function () {
        var t = Object(a.a)(o.a.mark((function t(e) {
          var r, n, a, i, f, p, d, g, m;
          return o.a.wrap((function (t) {
            for (; ;) switch (t.prev = t.next) {
              case 0:
                return a = e.file, i = e.fileName, f = e.fileType, p = e.fileExtension, d = 0, f.startsWith("image/") && (d = 1), "text/html" === f && (d = 2), t.next = 6, c.a.get("/s3/generatePresignedUrl", {
                  params: {
                    fileName: i + "." + p,
                    type: d
                  }
                });
              case 6:
                if (g = t.sent, null === (m = g.data) || void 0 === m || null === (r = m.data) || void 0 === r ? void 0 : r.presignedUrl) {
                  t.next = 11;
                  break
                }
                return l("Failed to get presigned url"), t.abrupt("return");
              case 11:
                return t.next = 13, s.a.put(null === (n = m.data) || void 0 === n ? void 0 : n.presignedUrl, a, {
                  adapter: u.a,
                  headers: {
                    "Content-Type": m.data.contentType
                  }
                });
              case 13:
                if (200 === t.sent.status) {
                  t.next = 16;
                  break
                }
                return t.abrupt("return");
              case 16:
                return t.abrupt("return", {
                  key: m.data.key
                });
              case 17:
              case "end":
                return t.stop()
            }
          }), t)
        })));
        return function (e) {
          return t.apply(this, arguments)
        }
      }()
  },
  186: function (t, e, r) {
    "use strict";
    r.d(e, "a", (function () {
      return n
    })), r.d(e, "b", (function () {
      return o
    }));
    var n = /@import\s*(?:url\(\s*)?((?:"[^"]+")|(?:'[^']+')|(?:[^\s);]+))(?:\s*\))?\s*;/gi,
      o = new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$", "i")
  },
  189: function (t, e) {
    t.exports = function (t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
      return n
    }
  },
  190: function (t, e) {
    t.exports = function () {
      if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" === typeof Proxy) return !0;
      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], (function () { }))), !0
      } catch (t) {
        return !1
      }
    }
  },
  191: function (t, e, r) {
    "use strict";
    t.exports = function (t, e) {
      return function () {
        for (var r = new Array(arguments.length), n = 0; n < r.length; n++) r[n] = arguments[n];
        return t.apply(e, r)
      }
    }
  },
  192: function (t, e, r) {
    "use strict";
    t.exports = function (t, e, r, n, o) {
      return t.config = e, r && (t.code = r), t.request = n, t.response = o, t.isAxiosError = !0, t.toJSON = function () {
        return {
          message: this.message,
          name: this.name,
          description: this.description,
          number: this.number,
          fileName: this.fileName,
          lineNumber: this.lineNumber,
          columnNumber: this.columnNumber,
          stack: this.stack,
          config: this.config,
          code: this.code
        }
      }, t
    }
  },
  193: function (t, e, r) {
    "use strict";
    var n = r(44),
      o = r(165),
      a = r(272),
      i = r(124),
      s = r(166),
      c = r(275),
      u = r(276),
      f = r(194);
    t.exports = function (t) {
      return new Promise((function (e, r) {
        var l = t.data,
          p = t.headers,
          d = t.responseType;
        n.isFormData(l) && delete p["Content-Type"];
        var g = new XMLHttpRequest;
        if (t.auth) {
          var m = t.auth.username || "",
            h = t.auth.password ? unescape(encodeURIComponent(t.auth.password)) : "";
          p.Authorization = "Basic " + btoa(m + ":" + h)
        }
        var b = s(t.baseURL, t.url);

        function y() {
          if (g) {
            var n = "getAllResponseHeaders" in g ? c(g.getAllResponseHeaders()) : null,
              a = {
                data: d && "text" !== d && "json" !== d ? g.response : g.responseText,
                status: g.status,
                statusText: g.statusText,
                headers: n,
                config: t,
                request: g
              };
            o(e, r, a), g = null
          }
        }
        if (g.open(t.method.toUpperCase(), i(b, t.params, t.paramsSerializer), !0), g.timeout = t.timeout, "onloadend" in g ? g.onloadend = y : g.onreadystatechange = function () {
          g && 4 === g.readyState && (0 !== g.status || g.responseURL && 0 === g.responseURL.indexOf("file:")) && setTimeout(y)
        }, g.onabort = function () {
          g && (r(f("Request aborted", t, "ECONNABORTED", g)), g = null)
        }, g.onerror = function () {
          r(f("Network Error", t, null, g)), g = null
        }, g.ontimeout = function () {
          var e = "timeout of " + t.timeout + "ms exceeded";
          t.timeoutErrorMessage && (e = t.timeoutErrorMessage), r(f(e, t, t.transitional && t.transitional.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED", g)), g = null
        }, n.isStandardBrowserEnv()) {
          var v = (t.withCredentials || u(b)) && t.xsrfCookieName ? a.read(t.xsrfCookieName) : void 0;
          v && (p[t.xsrfHeaderName] = v)
        }
        "setRequestHeader" in g && n.forEach(p, (function (t, e) {
          "undefined" === typeof l && "content-type" === e.toLowerCase() ? delete p[e] : g.setRequestHeader(e, t)
        })), n.isUndefined(t.withCredentials) || (g.withCredentials = !!t.withCredentials), d && "json" !== d && (g.responseType = t.responseType), "function" === typeof t.onDownloadProgress && g.addEventListener("progress", t.onDownloadProgress), "function" === typeof t.onUploadProgress && g.upload && g.upload.addEventListener("progress", t.onUploadProgress), t.cancelToken && t.cancelToken.promise.then((function (t) {
          g && (g.abort(), r(t), g = null)
        })), l || (l = null), g.send(l)
      }))
    }
  },
  194: function (t, e, r) {
    "use strict";
    var n = r(192);
    t.exports = function (t, e, r, o, a) {
      var i = new Error(t);
      return n(i, e, r, o, a)
    }
  },
  195: function (t, e, r) {
    "use strict";
    t.exports = function (t) {
      return !(!t || !t.__CANCEL__)
    }
  },
  196: function (t, e, r) {
    "use strict";
    var n = r(44);
    t.exports = function (t, e) {
      e = e || {};
      var r = {},
        o = ["url", "method", "data"],
        a = ["headers", "auth", "proxy", "params"],
        i = ["baseURL", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "timeoutMessage", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "decompress", "maxContentLength", "maxBodyLength", "maxRedirects", "transport", "httpAgent", "httpsAgent", "cancelToken", "socketPath", "responseEncoding"],
        s = ["validateStatus"];

      function c(t, e) {
        return n.isPlainObject(t) && n.isPlainObject(e) ? n.merge(t, e) : n.isPlainObject(e) ? n.merge({}, e) : n.isArray(e) ? e.slice() : e
      }

      function u(o) {
        n.isUndefined(e[o]) ? n.isUndefined(t[o]) || (r[o] = c(void 0, t[o])) : r[o] = c(t[o], e[o])
      }
      n.forEach(o, (function (t) {
        n.isUndefined(e[t]) || (r[t] = c(void 0, e[t]))
      })), n.forEach(a, u), n.forEach(i, (function (o) {
        n.isUndefined(e[o]) ? n.isUndefined(t[o]) || (r[o] = c(void 0, t[o])) : r[o] = c(void 0, e[o])
      })), n.forEach(s, (function (n) {
        n in e ? r[n] = c(t[n], e[n]) : n in t && (r[n] = c(void 0, t[n]))
      }));
      var f = o.concat(a).concat(i).concat(s),
        l = Object.keys(t).concat(Object.keys(e)).filter((function (t) {
          return -1 === f.indexOf(t)
        }));
      return n.forEach(l, u), r
    }
  },
  197: function (t, e, r) {
    "use strict";

    function n(t) {
      this.message = t
    }
    n.prototype.toString = function () {
      return "Cancel" + (this.message ? ": " + this.message : "")
    }, n.prototype.__CANCEL__ = !0, t.exports = n
  },
  198: function (t, e, r) {
    "use strict";
    var n = r(158),
      o = Object.prototype.hasOwnProperty,
      a = Array.isArray,
      i = function () {
        for (var t = [], e = 0; e < 256; ++e) t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
        return t
      }(),
      s = function (t, e) {
        for (var r = e && e.plainObjects ? Object.create(null) : {}, n = 0; n < t.length; ++n) "undefined" !== typeof t[n] && (r[n] = t[n]);
        return r
      };
    t.exports = {
      arrayToObject: s,
      assign: function (t, e) {
        return Object.keys(e).reduce((function (t, r) {
          return t[r] = e[r], t
        }), t)
      },
      combine: function (t, e) {
        return [].concat(t, e)
      },
      compact: function (t) {
        for (var e = [{
          obj: {
            o: t
          },
          prop: "o"
        }], r = [], n = 0; n < e.length; ++n)
          for (var o = e[n], i = o.obj[o.prop], s = Object.keys(i), c = 0; c < s.length; ++c) {
            var u = s[c],
              f = i[u];
            "object" === typeof f && null !== f && -1 === r.indexOf(f) && (e.push({
              obj: i,
              prop: u
            }), r.push(f))
          }
        return function (t) {
          for (; t.length > 1;) {
            var e = t.pop(),
              r = e.obj[e.prop];
            if (a(r)) {
              for (var n = [], o = 0; o < r.length; ++o) "undefined" !== typeof r[o] && n.push(r[o]);
              e.obj[e.prop] = n
            }
          }
        }(e), t
      },
      decode: function (t, e, r) {
        var n = t.replace(/\+/g, " ");
        if ("iso-8859-1" === r) return n.replace(/%[0-9a-f]{2}/gi, unescape);
        try {
          return decodeURIComponent(n)
        } catch (o) {
          return n
        }
      },
      encode: function (t, e, r, o, a) {
        if (0 === t.length) return t;
        var s = t;
        if ("symbol" === typeof t ? s = Symbol.prototype.toString.call(t) : "string" !== typeof t && (s = String(t)), "iso-8859-1" === r) return escape(s).replace(/%u[0-9a-f]{4}/gi, (function (t) {
          return "%26%23" + parseInt(t.slice(2), 16) + "%3B"
        }));
        for (var c = "", u = 0; u < s.length; ++u) {
          var f = s.charCodeAt(u);
          45 === f || 46 === f || 95 === f || 126 === f || f >= 48 && f <= 57 || f >= 65 && f <= 90 || f >= 97 && f <= 122 || a === n.RFC1738 && (40 === f || 41 === f) ? c += s.charAt(u) : f < 128 ? c += i[f] : f < 2048 ? c += i[192 | f >> 6] + i[128 | 63 & f] : f < 55296 || f >= 57344 ? c += i[224 | f >> 12] + i[128 | f >> 6 & 63] + i[128 | 63 & f] : (u += 1, f = 65536 + ((1023 & f) << 10 | 1023 & s.charCodeAt(u)), c += i[240 | f >> 18] + i[128 | f >> 12 & 63] + i[128 | f >> 6 & 63] + i[128 | 63 & f])
        }
        return c
      },
      isBuffer: function (t) {
        return !(!t || "object" !== typeof t) && !!(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t))
      },
      isRegExp: function (t) {
        return "[object RegExp]" === Object.prototype.toString.call(t)
      },
      maybeMap: function (t, e) {
        if (a(t)) {
          for (var r = [], n = 0; n < t.length; n += 1) r.push(e(t[n]));
          return r
        }
        return e(t)
      },
      merge: function t(e, r, n) {
        if (!r) return e;
        if ("object" !== typeof r) {
          if (a(e)) e.push(r);
          else {
            if (!e || "object" !== typeof e) return [e, r];
            (n && (n.plainObjects || n.allowPrototypes) || !o.call(Object.prototype, r)) && (e[r] = !0)
          }
          return e
        }
        if (!e || "object" !== typeof e) return [e].concat(r);
        var i = e;
        return a(e) && !a(r) && (i = s(e, n)), a(e) && a(r) ? (r.forEach((function (r, a) {
          if (o.call(e, a)) {
            var i = e[a];
            i && "object" === typeof i && r && "object" === typeof r ? e[a] = t(i, r, n) : e.push(r)
          } else e[a] = r
        })), e) : Object.keys(r).reduce((function (e, a) {
          var i = r[a];
          return o.call(e, a) ? e[a] = t(e[a], i, n) : e[a] = i, e
        }), i)
      }
    }
  },
  2: function (t, e, r) {
    t.exports = r(265)
  },
  215: function (t, e, r) {
    "use strict";
    var n = r(2),
      o = r.n(n),
      a = r(4),
      i = r(111),
      s = r(28),
      c = r(182),
      u = function () {
        var t = Object(a.a)(o.a.mark((function t(e) {
          var r, n;
          return o.a.wrap((function (t) {
            for (; ;) switch (t.prev = t.next) {
              case 0:
                return t.next = 2, Object(s.b)();
              case 2:
                if (!t.sent) {
                  t.next = 10;
                  break
                }
                return t.next = 6, Object(c.b)({
                  file: e.file,
                  fileName: e.fileName,
                  fileType: e.fileType,
                  fileExtension: e.fileExtension
                });
              case 6:
                return r = t.sent, t.abrupt("return", {
                  provider: "s3",
                  result: r
                });
              case 10:
                return t.next = 12, Object(i.c)(e);
              case 12:
                return n = t.sent, t.abrupt("return", {
                  provider: "qiniu",
                  result: n
                });
              case 14:
              case "end":
                return t.stop()
            }
          }), t)
        })));
        return function (e) {
          return t.apply(this, arguments)
        }
      }();
    e.a = u
  },
  217: function (t, e) {
    var r, n, o = t.exports = {};

    function a() {
      throw new Error("setTimeout has not been defined")
    }

    function i() {
      throw new Error("clearTimeout has not been defined")
    }

    function s(t) {
      if (r === setTimeout) return setTimeout(t, 0);
      if ((r === a || !r) && setTimeout) return r = setTimeout, setTimeout(t, 0);
      try {
        return r(t, 0)
      } catch (e) {
        try {
          return r.call(null, t, 0)
        } catch (e) {
          return r.call(this, t, 0)
        }
      }
    } ! function () {
      try {
        r = "function" === typeof setTimeout ? setTimeout : a
      } catch (t) {
        r = a
      }
      try {
        n = "function" === typeof clearTimeout ? clearTimeout : i
      } catch (t) {
        n = i
      }
    }();
    var c, u = [],
      f = !1,
      l = -1;

    function p() {
      f && c && (f = !1, c.length ? u = c.concat(u) : l = -1, u.length && d())
    }

    function d() {
      if (!f) {
        var t = s(p);
        f = !0;
        for (var e = u.length; e;) {
          for (c = u, u = []; ++l < e;) c && c[l].run();
          l = -1, e = u.length
        }
        c = null, f = !1,
          function (t) {
            if (n === clearTimeout) return clearTimeout(t);
            if ((n === i || !n) && clearTimeout) return n = clearTimeout, clearTimeout(t);
            try {
              n(t)
            } catch (e) {
              try {
                return n.call(null, t)
              } catch (e) {
                return n.call(this, t)
              }
            }
          }(t)
      }
    }

    function g(t, e) {
      this.fun = t, this.array = e
    }

    function m() { }
    o.nextTick = function (t) {
      var e = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
      u.push(new g(t, e)), 1 !== u.length || f || s(d)
    }, g.prototype.run = function () {
      this.fun.apply(null, this.array)
    }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = m, o.addListener = m, o.once = m, o.off = m, o.removeListener = m, o.removeAllListeners = m, o.emit = m, o.prependListener = m, o.prependOnceListener = m, o.listeners = function (t) {
      return []
    }, o.binding = function (t) {
      throw new Error("process.binding is not supported")
    }, o.cwd = function () {
      return "/"
    }, o.chdir = function (t) {
      throw new Error("process.chdir is not supported")
    }, o.umask = function () {
      return 0
    }
  },
  236: function (t, e, r) {
    (function (e) {
      var r = /^\s+|\s+$/g,
        n = /^[-+]0x[0-9a-f]+$/i,
        o = /^0b[01]+$/i,
        a = /^0o[0-7]+$/i,
        i = parseInt,
        s = "object" == typeof e && e && e.Object === Object && e,
        c = "object" == typeof self && self && self.Object === Object && self,
        u = s || c || Function("return this")(),
        f = Object.prototype.toString,
        l = Math.max,
        p = Math.min,
        d = function () {
          return u.Date.now()
        };

      function g(t) {
        var e = typeof t;
        return !!t && ("object" == e || "function" == e)
      }

      function m(t) {
        if ("number" == typeof t) return t;
        if (function (t) {
          return "symbol" == typeof t || function (t) {
            return !!t && "object" == typeof t
          }(t) && "[object Symbol]" == f.call(t)
        }(t)) return NaN;
        if (g(t)) {
          var e = "function" == typeof t.valueOf ? t.valueOf() : t;
          t = g(e) ? e + "" : e
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = t.replace(r, "");
        var s = o.test(t);
        return s || a.test(t) ? i(t.slice(2), s ? 2 : 8) : n.test(t) ? NaN : +t
      }
      t.exports = function (t, e, r) {
        var n, o, a, i, s, c, u = 0,
          f = !1,
          h = !1,
          b = !0;
        if ("function" != typeof t) throw new TypeError("Expected a function");

        function y(e) {
          var r = n,
            a = o;
          return n = o = void 0, u = e, i = t.apply(a, r)
        }

        function v(t) {
          return u = t, s = setTimeout(A, e), f ? y(t) : i
        }

        function x(t) {
          var r = t - c;
          return void 0 === c || r >= e || r < 0 || h && t - u >= a
        }

        function A() {
          var t = d();
          if (x(t)) return w(t);
          s = setTimeout(A, function (t) {
            var r = e - (t - c);
            return h ? p(r, a - (t - u)) : r
          }(t))
        }

        function w(t) {
          return s = void 0, b && n ? y(t) : (n = o = void 0, i)
        }

        function k() {
          var t = d(),
            r = x(t);
          if (n = arguments, o = this, c = t, r) {
            if (void 0 === s) return v(c);
            if (h) return s = setTimeout(A, e), y(c)
          }
          return void 0 === s && (s = setTimeout(A, e)), i
        }
        return e = m(e) || 0, g(r) && (f = !!r.leading, a = (h = "maxWait" in r) ? l(m(r.maxWait) || 0, e) : a, b = "trailing" in r ? !!r.trailing : b), k.cancel = function () {
          void 0 !== s && clearTimeout(s), u = 0, n = c = o = s = void 0
        }, k.flush = function () {
          return void 0 === s ? i : w(d())
        }, k
      }
    }).call(this, r(103))
  },
  248: function (t, e, r) {
    var n = r(249),
      o = r(250),
      a = r(251),
      i = r(252);
    t.exports = function (t) {
      return n(t) || o(t) || a(t) || i()
    }
  },
  249: function (t, e, r) {
    var n = r(189);
    t.exports = function (t) {
      if (Array.isArray(t)) return n(t)
    }
  },
  250: function (t, e) {
    t.exports = function (t) {
      if ("undefined" !== typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
    }
  },
  251: function (t, e, r) {
    var n = r(189);
    t.exports = function (t, e) {
      if (t) {
        if ("string" === typeof t) return n(t, e);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? n(t, e) : void 0
      }
    }
  },
  252: function (t, e) {
    t.exports = function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
  },
  253: function (t, e) {
    t.exports = function (t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
  },
  254: function (t, e) {
    function r(t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
      }
    }
    t.exports = function (t, e, n) {
      return e && r(t.prototype, e), n && r(t, n), t
    }
  },
  255: function (t, e, r) {
    var n = r(256);

    function o(e, r, a) {
      return "undefined" !== typeof Reflect && Reflect.get ? t.exports = o = Reflect.get : t.exports = o = function (t, e, r) {
        var o = n(t, e);
        if (o) {
          var a = Object.getOwnPropertyDescriptor(o, e);
          return a.get ? a.get.call(r) : a.value
        }
      }, o(e, r, a || e)
    }
    t.exports = o
  },
  256: function (t, e, r) {
    var n = r(123);
    t.exports = function (t, e) {
      for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = n(t)););
      return t
    }
  },
  257: function (t, e, r) {
    var n = r(154);
    t.exports = function (t, e) {
      if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          writable: !0,
          configurable: !0
        }
      }), e && n(t, e)
    }
  },
  258: function (t, e, r) {
    var n = r(123),
      o = r(190),
      a = r(259);
    t.exports = function (t) {
      var e = o();
      return function () {
        var r, o = n(t);
        if (e) {
          var i = n(this).constructor;
          r = Reflect.construct(o, arguments, i)
        } else r = o.apply(this, arguments);
        return a(this, r)
      }
    }
  },
  259: function (t, e, r) {
    var n = r(260),
      o = r(261);
    t.exports = function (t, e) {
      return !e || "object" !== n(e) && "function" !== typeof e ? o(t) : e
    }
  },
  260: function (t, e) {
    function r(e) {
      return "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? t.exports = r = function (t) {
        return typeof t
      } : t.exports = r = function (t) {
        return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      }, r(e)
    }
    t.exports = r
  },
  261: function (t, e) {
    t.exports = function (t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t
    }
  },
  262: function (t, e, r) {
    var n = r(123),
      o = r(154),
      a = r(263),
      i = r(264);

    function s(e) {
      var r = "function" === typeof Map ? new Map : void 0;
      return t.exports = s = function (t) {
        if (null === t || !a(t)) return t;
        if ("function" !== typeof t) throw new TypeError("Super expression must either be null or a function");
        if ("undefined" !== typeof r) {
          if (r.has(t)) return r.get(t);
          r.set(t, e)
        }

        function e() {
          return i(t, arguments, n(this).constructor)
        }
        return e.prototype = Object.create(t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), o(e, t)
      }, s(e)
    }
    t.exports = s
  },
  263: function (t, e) {
    t.exports = function (t) {
      return -1 !== Function.toString.call(t).indexOf("[native code]")
    }
  },
  264: function (t, e, r) {
    var n = r(154),
      o = r(190);

    function a(e, r, i) {
      return o() ? t.exports = a = Reflect.construct : t.exports = a = function (t, e, r) {
        var o = [null];
        o.push.apply(o, e);
        var a = new (Function.bind.apply(t, o));
        return r && n(a, r.prototype), a
      }, a.apply(null, arguments)
    }
    t.exports = a
  },
  265: function (t, e, r) {
    var n = function (t) {
      "use strict";
      var e, r = Object.prototype,
        n = r.hasOwnProperty,
        o = "function" === typeof Symbol ? Symbol : {},
        a = o.iterator || "@@iterator",
        i = o.asyncIterator || "@@asyncIterator",
        s = o.toStringTag || "@@toStringTag";

      function c(t, e, r) {
        return Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }), t[e]
      }
      try {
        c({}, "")
      } catch (T) {
        c = function (t, e, r) {
          return t[e] = r
        }
      }

      function u(t, e, r, n) {
        var o = e && e.prototype instanceof h ? e : h,
          a = Object.create(o.prototype),
          i = new _(n || []);
        return a._invoke = function (t, e, r) {
          var n = l;
          return function (o, a) {
            if (n === d) throw new Error("Generator is already running");
            if (n === g) {
              if ("throw" === o) throw a;
              return C()
            }
            for (r.method = o, r.arg = a; ;) {
              var i = r.delegate;
              if (i) {
                var s = O(i, r);
                if (s) {
                  if (s === m) continue;
                  return s
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if (n === l) throw n = g, r.arg;
                r.dispatchException(r.arg)
              } else "return" === r.method && r.abrupt("return", r.arg);
              n = d;
              var c = f(t, e, r);
              if ("normal" === c.type) {
                if (n = r.done ? g : p, c.arg === m) continue;
                return {
                  value: c.arg,
                  done: r.done
                }
              }
              "throw" === c.type && (n = g, r.method = "throw", r.arg = c.arg)
            }
          }
        }(t, r, i), a
      }

      function f(t, e, r) {
        try {
          return {
            type: "normal",
            arg: t.call(e, r)
          }
        } catch (T) {
          return {
            type: "throw",
            arg: T
          }
        }
      }
      t.wrap = u;
      var l = "suspendedStart",
        p = "suspendedYield",
        d = "executing",
        g = "completed",
        m = {};

      function h() { }

      function b() { }

      function y() { }
      var v = {};
      v[a] = function () {
        return this
      };
      var x = Object.getPrototypeOf,
        A = x && x(x(P([])));
      A && A !== r && n.call(A, a) && (v = A);
      var w = y.prototype = h.prototype = Object.create(v);

      function k(t) {
        ["next", "throw", "return"].forEach((function (e) {
          c(t, e, (function (t) {
            return this._invoke(e, t)
          }))
        }))
      }

      function j(t, e) {
        function r(o, a, i, s) {
          var c = f(t[o], t, a);
          if ("throw" !== c.type) {
            var u = c.arg,
              l = u.value;
            return l && "object" === typeof l && n.call(l, "__await") ? e.resolve(l.__await).then((function (t) {
              r("next", t, i, s)
            }), (function (t) {
              r("throw", t, i, s)
            })) : e.resolve(l).then((function (t) {
              u.value = t, i(u)
            }), (function (t) {
              return r("throw", t, i, s)
            }))
          }
          s(c.arg)
        }
        var o;
        this._invoke = function (t, n) {
          function a() {
            return new e((function (e, o) {
              r(t, n, e, o)
            }))
          }
          return o = o ? o.then(a, a) : a()
        }
      }

      function O(t, r) {
        var n = t.iterator[r.method];
        if (n === e) {
          if (r.delegate = null, "throw" === r.method) {
            if (t.iterator.return && (r.method = "return", r.arg = e, O(t, r), "throw" === r.method)) return m;
            r.method = "throw", r.arg = new TypeError("The iterator does not provide a 'throw' method")
          }
          return m
        }
        var o = f(n, t.iterator, r.arg);
        if ("throw" === o.type) return r.method = "throw", r.arg = o.arg, r.delegate = null, m;
        var a = o.arg;
        return a ? a.done ? (r[t.resultName] = a.value, r.next = t.nextLoc, "return" !== r.method && (r.method = "next", r.arg = e), r.delegate = null, m) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, m)
      }

      function S(t) {
        var e = {
          tryLoc: t[0]
        };
        1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
      }

      function E(t) {
        var e = t.completion || {};
        e.type = "normal", delete e.arg, t.completion = e
      }

      function _(t) {
        this.tryEntries = [{
          tryLoc: "root"
        }], t.forEach(S, this), this.reset(!0)
      }

      function P(t) {
        if (t) {
          var r = t[a];
          if (r) return r.call(t);
          if ("function" === typeof t.next) return t;
          if (!isNaN(t.length)) {
            var o = -1,
              i = function r() {
                for (; ++o < t.length;)
                  if (n.call(t, o)) return r.value = t[o], r.done = !1, r;
                return r.value = e, r.done = !0, r
              };
            return i.next = i
          }
        }
        return {
          next: C
        }
      }

      function C() {
        return {
          value: e,
          done: !0
        }
      }
      return b.prototype = w.constructor = y, y.constructor = b, b.displayName = c(y, s, "GeneratorFunction"), t.isGeneratorFunction = function (t) {
        var e = "function" === typeof t && t.constructor;
        return !!e && (e === b || "GeneratorFunction" === (e.displayName || e.name))
      }, t.mark = function (t) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(t, y) : (t.__proto__ = y, c(t, s, "GeneratorFunction")), t.prototype = Object.create(w), t
      }, t.awrap = function (t) {
        return {
          __await: t
        }
      }, k(j.prototype), j.prototype[i] = function () {
        return this
      }, t.AsyncIterator = j, t.async = function (e, r, n, o, a) {
        void 0 === a && (a = Promise);
        var i = new j(u(e, r, n, o), a);
        return t.isGeneratorFunction(r) ? i : i.next().then((function (t) {
          return t.done ? t.value : i.next()
        }))
      }, k(w), c(w, s, "Generator"), w[a] = function () {
        return this
      }, w.toString = function () {
        return "[object Generator]"
      }, t.keys = function (t) {
        var e = [];
        for (var r in t) e.push(r);
        return e.reverse(),
          function r() {
            for (; e.length;) {
              var n = e.pop();
              if (n in t) return r.value = n, r.done = !1, r
            }
            return r.done = !0, r
          }
      }, t.values = P, _.prototype = {
        constructor: _,
        reset: function (t) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(E), !t)
            for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = e)
        },
        stop: function () {
          this.done = !0;
          var t = this.tryEntries[0].completion;
          if ("throw" === t.type) throw t.arg;
          return this.rval
        },
        dispatchException: function (t) {
          if (this.done) throw t;
          var r = this;

          function o(n, o) {
            return s.type = "throw", s.arg = t, r.next = n, o && (r.method = "next", r.arg = e), !!o
          }
          for (var a = this.tryEntries.length - 1; a >= 0; --a) {
            var i = this.tryEntries[a],
              s = i.completion;
            if ("root" === i.tryLoc) return o("end");
            if (i.tryLoc <= this.prev) {
              var c = n.call(i, "catchLoc"),
                u = n.call(i, "finallyLoc");
              if (c && u) {
                if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                if (this.prev < i.finallyLoc) return o(i.finallyLoc)
              } else if (c) {
                if (this.prev < i.catchLoc) return o(i.catchLoc, !0)
              } else {
                if (!u) throw new Error("try statement without catch or finally");
                if (this.prev < i.finallyLoc) return o(i.finallyLoc)
              }
            }
          }
        },
        abrupt: function (t, e) {
          for (var r = this.tryEntries.length - 1; r >= 0; --r) {
            var o = this.tryEntries[r];
            if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
              var a = o;
              break
            }
          }
          a && ("break" === t || "continue" === t) && a.tryLoc <= e && e <= a.finallyLoc && (a = null);
          var i = a ? a.completion : {};
          return i.type = t, i.arg = e, a ? (this.method = "next", this.next = a.finallyLoc, m) : this.complete(i)
        },
        complete: function (t, e) {
          if ("throw" === t.type) throw t.arg;
          return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), m
        },
        finish: function (t) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var r = this.tryEntries[e];
            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), E(r), m
          }
        },
        catch: function (t) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var r = this.tryEntries[e];
            if (r.tryLoc === t) {
              var n = r.completion;
              if ("throw" === n.type) {
                var o = n.arg;
                E(r)
              }
              return o
            }
          }
          throw new Error("illegal catch attempt")
        },
        delegateYield: function (t, r, n) {
          return this.delegate = {
            iterator: P(t),
            resultName: r,
            nextLoc: n
          }, "next" === this.method && (this.arg = e), m
        }
      }, t
    }(t.exports);
    try {
      regeneratorRuntime = n
    } catch (o) {
      Function("r", "regeneratorRuntime = r")(n)
    }
  },
  266: function (t, e, r) {
    "use strict";
    var n = r(44),
      o = r(191),
      a = r(267),
      i = r(196);

    function s(t) {
      var e = new a(t),
        r = o(a.prototype.request, e);
      return n.extend(r, a.prototype, e), n.extend(r, e), r
    }
    var c = s(r(155));
    c.Axios = a, c.create = function (t) {
      return s(i(c.defaults, t))
    }, c.Cancel = r(197), c.CancelToken = r(279), c.isCancel = r(195), c.all = function (t) {
      return Promise.all(t)
    }, c.spread = r(280), c.isAxiosError = r(281), t.exports = c, t.exports.default = c
  },
  267: function (t, e, r) {
    "use strict";
    var n = r(44),
      o = r(124),
      a = r(268),
      i = r(269),
      s = r(196),
      c = r(277),
      u = c.validators;

    function f(t) {
      this.defaults = t, this.interceptors = {
        request: new a,
        response: new a
      }
    }
    f.prototype.request = function (t) {
      "string" === typeof t ? (t = arguments[1] || {}).url = arguments[0] : t = t || {}, (t = s(this.defaults, t)).method ? t.method = t.method.toLowerCase() : this.defaults.method ? t.method = this.defaults.method.toLowerCase() : t.method = "get";
      var e = t.transitional;
      void 0 !== e && c.assertOptions(e, {
        silentJSONParsing: u.transitional(u.boolean, "1.0.0"),
        forcedJSONParsing: u.transitional(u.boolean, "1.0.0"),
        clarifyTimeoutError: u.transitional(u.boolean, "1.0.0")
      }, !1);
      var r = [],
        n = !0;
      this.interceptors.request.forEach((function (e) {
        "function" === typeof e.runWhen && !1 === e.runWhen(t) || (n = n && e.synchronous, r.unshift(e.fulfilled, e.rejected))
      }));
      var o, a = [];
      if (this.interceptors.response.forEach((function (t) {
        a.push(t.fulfilled, t.rejected)
      })), !n) {
        var f = [i, void 0];
        for (Array.prototype.unshift.apply(f, r), f = f.concat(a), o = Promise.resolve(t); f.length;) o = o.then(f.shift(), f.shift());
        return o
      }
      for (var l = t; r.length;) {
        var p = r.shift(),
          d = r.shift();
        try {
          l = p(l)
        } catch (g) {
          d(g);
          break
        }
      }
      try {
        o = i(l)
      } catch (g) {
        return Promise.reject(g)
      }
      for (; a.length;) o = o.then(a.shift(), a.shift());
      return o
    }, f.prototype.getUri = function (t) {
      return t = s(this.defaults, t), o(t.url, t.params, t.paramsSerializer).replace(/^\?/, "")
    }, n.forEach(["delete", "get", "head", "options"], (function (t) {
      f.prototype[t] = function (e, r) {
        return this.request(s(r || {}, {
          method: t,
          url: e,
          data: (r || {}).data
        }))
      }
    })), n.forEach(["post", "put", "patch"], (function (t) {
      f.prototype[t] = function (e, r, n) {
        return this.request(s(n || {}, {
          method: t,
          url: e,
          data: r
        }))
      }
    })), t.exports = f
  },
  268: function (t, e, r) {
    "use strict";
    var n = r(44);

    function o() {
      this.handlers = []
    }
    o.prototype.use = function (t, e, r) {
      return this.handlers.push({
        fulfilled: t,
        rejected: e,
        synchronous: !!r && r.synchronous,
        runWhen: r ? r.runWhen : null
      }), this.handlers.length - 1
    }, o.prototype.eject = function (t) {
      this.handlers[t] && (this.handlers[t] = null)
    }, o.prototype.forEach = function (t) {
      n.forEach(this.handlers, (function (e) {
        null !== e && t(e)
      }))
    }, t.exports = o
  },
  269: function (t, e, r) {
    "use strict";
    var n = r(44),
      o = r(270),
      a = r(195),
      i = r(155);

    function s(t) {
      t.cancelToken && t.cancelToken.throwIfRequested()
    }
    t.exports = function (t) {
      return s(t), t.headers = t.headers || {}, t.data = o.call(t, t.data, t.headers, t.transformRequest), t.headers = n.merge(t.headers.common || {}, t.headers[t.method] || {}, t.headers), n.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (function (e) {
        delete t.headers[e]
      })), (t.adapter || i.adapter)(t).then((function (e) {
        return s(t), e.data = o.call(t, e.data, e.headers, t.transformResponse), e
      }), (function (e) {
        return a(e) || (s(t), e && e.response && (e.response.data = o.call(t, e.response.data, e.response.headers, t.transformResponse))), Promise.reject(e)
      }))
    }
  },
  27: function (t, e, r) {
    "use strict";

    function n() {
      return !0
    }

    function o() {
      return !1
    }
    r.d(e, "a", (function () {
      return n
    })), r.d(e, "b", (function () {
      return o
    }))
  },
  270: function (t, e, r) {
    "use strict";
    var n = r(44),
      o = r(155);
    t.exports = function (t, e, r) {
      var a = this || o;
      return n.forEach(r, (function (r) {
        t = r.call(a, t, e)
      })), t
    }
  },
  271: function (t, e, r) {
    "use strict";
    var n = r(44);
    t.exports = function (t, e) {
      n.forEach(t, (function (r, n) {
        n !== e && n.toUpperCase() === e.toUpperCase() && (t[e] = r, delete t[n])
      }))
    }
  },
  272: function (t, e, r) {
    "use strict";
    var n = r(44);
    t.exports = n.isStandardBrowserEnv() ? {
      write: function (t, e, r, o, a, i) {
        var s = [];
        s.push(t + "=" + encodeURIComponent(e)), n.isNumber(r) && s.push("expires=" + new Date(r).toGMTString()), n.isString(o) && s.push("path=" + o), n.isString(a) && s.push("domain=" + a), !0 === i && s.push("secure"), document.cookie = s.join("; ")
      },
      read: function (t) {
        var e = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
        return e ? decodeURIComponent(e[3]) : null
      },
      remove: function (t) {
        this.write(t, "", Date.now() - 864e5)
      }
    } : {
      write: function () { },
      read: function () {
        return null
      },
      remove: function () { }
    }
  },
  273: function (t, e, r) {
    "use strict";
    t.exports = function (t) {
      return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)
    }
  },
  274: function (t, e, r) {
    "use strict";
    t.exports = function (t, e) {
      return e ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : t
    }
  },
  275: function (t, e, r) {
    "use strict";
    var n = r(44),
      o = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
    t.exports = function (t) {
      var e, r, a, i = {};
      return t ? (n.forEach(t.split("\n"), (function (t) {
        if (a = t.indexOf(":"), e = n.trim(t.substr(0, a)).toLowerCase(), r = n.trim(t.substr(a + 1)), e) {
          if (i[e] && o.indexOf(e) >= 0) return;
          i[e] = "set-cookie" === e ? (i[e] ? i[e] : []).concat([r]) : i[e] ? i[e] + ", " + r : r
        }
      })), i) : i
    }
  },
  276: function (t, e, r) {
    "use strict";
    var n = r(44);
    t.exports = n.isStandardBrowserEnv() ? function () {
      var t, e = /(msie|trident)/i.test(navigator.userAgent),
        r = document.createElement("a");

      function o(t) {
        var n = t;
        return e && (r.setAttribute("href", n), n = r.href), r.setAttribute("href", n), {
          href: r.href,
          protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
          host: r.host,
          search: r.search ? r.search.replace(/^\?/, "") : "",
          hash: r.hash ? r.hash.replace(/^#/, "") : "",
          hostname: r.hostname,
          port: r.port,
          pathname: "/" === r.pathname.charAt(0) ? r.pathname : "/" + r.pathname
        }
      }
      return t = o(window.location.href),
        function (e) {
          var r = n.isString(e) ? o(e) : e;
          return r.protocol === t.protocol && r.host === t.host
        }
    }() : function () {
      return !0
    }
  },
  277: function (t, e, r) {
    "use strict";
    var n = r(278),
      o = {};
    ["object", "boolean", "number", "function", "string", "symbol"].forEach((function (t, e) {
      o[t] = function (r) {
        return typeof r === t || "a" + (e < 1 ? "n " : " ") + t
      }
    }));
    var a = {},
      i = n.version.split(".");

    function s(t, e) {
      for (var r = e ? e.split(".") : i, n = t.split("."), o = 0; o < 3; o++) {
        if (r[o] > n[o]) return !0;
        if (r[o] < n[o]) return !1
      }
      return !1
    }
    o.transitional = function (t, e, r) {
      var o = e && s(e);
      return function (i, s, c) {
        if (!1 === t) throw new Error(function (t, e) {
          return "[Axios v" + n.version + "] Transitional option '" + t + "'" + e + (r ? ". " + r : "")
        }(s, " has been removed in " + e));
        return o && !a[s] && (a[s] = !0), !t || t(i, s, c)
      }
    }, t.exports = {
      isOlderVersion: s,
      assertOptions: function (t, e, r) {
        if ("object" !== typeof t) throw new TypeError("options must be an object");
        for (var n = Object.keys(t), o = n.length; o-- > 0;) {
          var a = n[o],
            i = e[a];
          if (i) {
            var s = t[a],
              c = void 0 === s || i(s, a, t);
            if (!0 !== c) throw new TypeError("option " + a + " must be " + c)
          } else if (!0 !== r) throw Error("Unknown option " + a)
        }
      },
      validators: o
    }
  },
  278: function (t) {
    t.exports = JSON.parse('{"name":"axios","version":"0.21.4","description":"Promise based HTTP client for the browser and node.js","main":"index.js","scripts":{"test":"grunt test","start":"node ./sandbox/server.js","build":"NODE_ENV=production grunt build","preversion":"npm test","version":"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json","postversion":"git push && git push --tags","examples":"node ./examples/server.js","coveralls":"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js","fix":"eslint --fix lib/**/*.js"},"repository":{"type":"git","url":"https://github.com/axios/axios.git"},"keywords":["xhr","http","ajax","promise","node"],"author":"Matt Zabriskie","license":"MIT","bugs":{"url":"https://github.com/axios/axios/issues"},"homepage":"https://axios-http.com","devDependencies":{"coveralls":"^3.0.0","es6-promise":"^4.2.4","grunt":"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1","karma":"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2","minimist":"^1.2.0","mocha":"^8.2.1","sinon":"^4.5.0","terser-webpack-plugin":"^4.2.3","typescript":"^4.0.5","url-search-params":"^0.10.0","webpack":"^4.44.2","webpack-dev-server":"^3.11.0"},"browser":{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},"jsdelivr":"dist/axios.min.js","unpkg":"dist/axios.min.js","typings":"./index.d.ts","dependencies":{"follow-redirects":"^1.14.0"},"bundlesize":[{"path":"./dist/axios.min.js","threshold":"5kB"}]}')
  },
  279: function (t, e, r) {
    "use strict";
    var n = r(197);

    function o(t) {
      if ("function" !== typeof t) throw new TypeError("executor must be a function.");
      var e;
      this.promise = new Promise((function (t) {
        e = t
      }));
      var r = this;
      t((function (t) {
        r.reason || (r.reason = new n(t), e(r.reason))
      }))
    }
    o.prototype.throwIfRequested = function () {
      if (this.reason) throw this.reason
    }, o.source = function () {
      var t;
      return {
        token: new o((function (e) {
          t = e
        })),
        cancel: t
      }
    }, t.exports = o
  },
  28: function (t, e, r) {
    "use strict";
    r.d(e, "a", (function () {
      return u
    })), r.d(e, "b", (function () {
      return l
    }));
    var n = r(2),
      o = r.n(n),
      a = (r(12), r(4)),
      i = r(8),
      s = r(6),
      c = r.n(s);

    function u() {
      return f.apply(this, arguments)
    }

    function f() {
      return (f = Object(a.a)(o.a.mark((function t() {
        var e, r;
        return o.a.wrap((function (t) {
          for (; ;) switch (t.prev = t.next) {
            case 0:
              return t.next = 2, c.a.storage.local.get(i.L);
            case 2:
              if (t.t1 = e = t.sent, t.t0 = null === t.t1, t.t0) {
                t.next = 6;
                break
              }
              t.t0 = void 0 === e;
            case 6:
              if (!t.t0) {
                t.next = 10;
                break
              }
              t.t2 = void 0, t.next = 11;
              break;
            case 10:
              t.t2 = e.region;
            case 11:
              return r = t.t2, t.abrupt("return", r);
            case 13:
            case "end":
              return t.stop()
          }
        }), t)
      })))).apply(this, arguments)
    }

    function l() {
      return p.apply(this, arguments)
    }

    function p() {
      return (p = Object(a.a)(o.a.mark((function t() {
        var e, r;
        return o.a.wrap((function (t) {
          for (; ;) switch (t.prev = t.next) {
            case 0:
              return t.next = 2, u();
            case 2:
              if (!(e = t.sent)) {
                t.next = 5;
                break
              }
              return t.abrupt("return", "CN" !== e);
            case 5:
              return t.next = 7, c.a.runtime.sendMessage({
                action: i.z
              });
            case 7:
              return r = t.sent, t.abrupt("return", "CN" !== r);
            case 9:
            case "end":
              return t.stop()
          }
        }), t)
      })))).apply(this, arguments)
    }
  },
  280: function (t, e, r) {
    "use strict";
    t.exports = function (t) {
      return function (e) {
        return t.apply(null, e)
      }
    }
  },
  281: function (t, e, r) {
    "use strict";
    t.exports = function (t) {
      return "object" === typeof t && !0 === t.isAxiosError
    }
  },
  282: function (t, e, r) {
    "use strict";
    var n = r(283),
      o = r(198),
      a = r(158),
      i = Object.prototype.hasOwnProperty,
      s = {
        brackets: function (t) {
          return t + "[]"
        },
        comma: "comma",
        indices: function (t, e) {
          return t + "[" + e + "]"
        },
        repeat: function (t) {
          return t
        }
      },
      c = Array.isArray,
      u = Array.prototype.push,
      f = function (t, e) {
        u.apply(t, c(e) ? e : [e])
      },
      l = Date.prototype.toISOString,
      p = a.default,
      d = {
        addQueryPrefix: !1,
        allowDots: !1,
        charset: "utf-8",
        charsetSentinel: !1,
        delimiter: "&",
        encode: !0,
        encoder: o.encode,
        encodeValuesOnly: !1,
        format: p,
        formatter: a.formatters[p],
        indices: !1,
        serializeDate: function (t) {
          return l.call(t)
        },
        skipNulls: !1,
        strictNullHandling: !1
      },
      g = function t(e, r, a, i, s, u, l, p, g, m, h, b, y, v, x) {
        var A, w = e;
        if (x.has(e)) throw new RangeError("Cyclic object value");
        if ("function" === typeof l ? w = l(r, w) : w instanceof Date ? w = m(w) : "comma" === a && c(w) && (w = o.maybeMap(w, (function (t) {
          return t instanceof Date ? m(t) : t
        }))), null === w) {
          if (i) return u && !y ? u(r, d.encoder, v, "key", h) : r;
          w = ""
        }
        if ("string" === typeof (A = w) || "number" === typeof A || "boolean" === typeof A || "symbol" === typeof A || "bigint" === typeof A || o.isBuffer(w)) return u ? [b(y ? r : u(r, d.encoder, v, "key", h)) + "=" + b(u(w, d.encoder, v, "value", h))] : [b(r) + "=" + b(String(w))];
        var k, j = [];
        if ("undefined" === typeof w) return j;
        if ("comma" === a && c(w)) k = [{
          value: w.length > 0 ? w.join(",") || null : void 0
        }];
        else if (c(l)) k = l;
        else {
          var O = Object.keys(w);
          k = p ? O.sort(p) : O
        }
        for (var S = 0; S < k.length; ++S) {
          var E = k[S],
            _ = "object" === typeof E && void 0 !== E.value ? E.value : w[E];
          if (!s || null !== _) {
            var P = c(w) ? "function" === typeof a ? a(r, E) : r : r + (g ? "." + E : "[" + E + "]");
            x.set(e, !0);
            var C = n();
            f(j, t(_, P, a, i, s, u, l, p, g, m, h, b, y, v, C))
          }
        }
        return j
      };
    t.exports = function (t, e) {
      var r, o = t,
        u = function (t) {
          if (!t) return d;
          if (null !== t.encoder && void 0 !== t.encoder && "function" !== typeof t.encoder) throw new TypeError("Encoder has to be a function.");
          var e = t.charset || d.charset;
          if ("undefined" !== typeof t.charset && "utf-8" !== t.charset && "iso-8859-1" !== t.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
          var r = a.default;
          if ("undefined" !== typeof t.format) {
            if (!i.call(a.formatters, t.format)) throw new TypeError("Unknown format option provided.");
            r = t.format
          }
          var n = a.formatters[r],
            o = d.filter;
          return ("function" === typeof t.filter || c(t.filter)) && (o = t.filter), {
            addQueryPrefix: "boolean" === typeof t.addQueryPrefix ? t.addQueryPrefix : d.addQueryPrefix,
            allowDots: "undefined" === typeof t.allowDots ? d.allowDots : !!t.allowDots,
            charset: e,
            charsetSentinel: "boolean" === typeof t.charsetSentinel ? t.charsetSentinel : d.charsetSentinel,
            delimiter: "undefined" === typeof t.delimiter ? d.delimiter : t.delimiter,
            encode: "boolean" === typeof t.encode ? t.encode : d.encode,
            encoder: "function" === typeof t.encoder ? t.encoder : d.encoder,
            encodeValuesOnly: "boolean" === typeof t.encodeValuesOnly ? t.encodeValuesOnly : d.encodeValuesOnly,
            filter: o,
            format: r,
            formatter: n,
            serializeDate: "function" === typeof t.serializeDate ? t.serializeDate : d.serializeDate,
            skipNulls: "boolean" === typeof t.skipNulls ? t.skipNulls : d.skipNulls,
            sort: "function" === typeof t.sort ? t.sort : null,
            strictNullHandling: "boolean" === typeof t.strictNullHandling ? t.strictNullHandling : d.strictNullHandling
          }
        }(e);
      "function" === typeof u.filter ? o = (0, u.filter)("", o) : c(u.filter) && (r = u.filter);
      var l, p = [];
      if ("object" !== typeof o || null === o) return "";
      l = e && e.arrayFormat in s ? e.arrayFormat : e && "indices" in e ? e.indices ? "indices" : "repeat" : "indices";
      var m = s[l];
      r || (r = Object.keys(o)), u.sort && r.sort(u.sort);
      for (var h = n(), b = 0; b < r.length; ++b) {
        var y = r[b];
        u.skipNulls && null === o[y] || f(p, g(o[y], y, m, u.strictNullHandling, u.skipNulls, u.encode ? u.encoder : null, u.filter, u.sort, u.allowDots, u.serializeDate, u.format, u.formatter, u.encodeValuesOnly, u.charset, h))
      }
      var v = p.join(u.delimiter),
        x = !0 === u.addQueryPrefix ? "?" : "";
      return u.charsetSentinel && ("iso-8859-1" === u.charset ? x += "utf8=%26%2310003%3B&" : x += "utf8=%E2%9C%93&"), v.length > 0 ? x + v : ""
    }
  },
  283: function (t, e, r) {
    "use strict";
    var n = r(156),
      o = r(288),
      a = r(290),
      i = n("%TypeError%"),
      s = n("%WeakMap%", !0),
      c = n("%Map%", !0),
      u = o("WeakMap.prototype.get", !0),
      f = o("WeakMap.prototype.set", !0),
      l = o("WeakMap.prototype.has", !0),
      p = o("Map.prototype.get", !0),
      d = o("Map.prototype.set", !0),
      g = o("Map.prototype.has", !0),
      m = function (t, e) {
        for (var r, n = t; null !== (r = n.next); n = r)
          if (r.key === e) return n.next = r.next, r.next = t.next, t.next = r, r
      };
    t.exports = function () {
      var t, e, r, n = {
        assert: function (t) {
          if (!n.has(t)) throw new i("Side channel does not contain " + a(t))
        },
        get: function (n) {
          if (s && n && ("object" === typeof n || "function" === typeof n)) {
            if (t) return u(t, n)
          } else if (c) {
            if (e) return p(e, n)
          } else if (r) return function (t, e) {
            var r = m(t, e);
            return r && r.value
          }(r, n)
        },
        has: function (n) {
          if (s && n && ("object" === typeof n || "function" === typeof n)) {
            if (t) return l(t, n)
          } else if (c) {
            if (e) return g(e, n)
          } else if (r) return function (t, e) {
            return !!m(t, e)
          }(r, n);
          return !1
        },
        set: function (n, o) {
          s && n && ("object" === typeof n || "function" === typeof n) ? (t || (t = new s), f(t, n, o)) : c ? (e || (e = new c), d(e, n, o)) : (r || (r = {
            key: {},
            next: null
          }), function (t, e, r) {
            var n = m(t, e);
            n ? n.value = r : t.next = {
              key: e,
              next: t.next,
              value: r
            }
          }(r, n, o))
        }
      };
      return n
    }
  },
  284: function (t, e, r) {
    "use strict";
    var n = "undefined" !== typeof Symbol && Symbol,
      o = r(285);
    t.exports = function () {
      return "function" === typeof n && ("function" === typeof Symbol && ("symbol" === typeof n("foo") && ("symbol" === typeof Symbol("bar") && o())))
    }
  },
  285: function (t, e, r) {
    "use strict";
    t.exports = function () {
      if ("function" !== typeof Symbol || "function" !== typeof Object.getOwnPropertySymbols) return !1;
      if ("symbol" === typeof Symbol.iterator) return !0;
      var t = {},
        e = Symbol("test"),
        r = Object(e);
      if ("string" === typeof e) return !1;
      if ("[object Symbol]" !== Object.prototype.toString.call(e)) return !1;
      if ("[object Symbol]" !== Object.prototype.toString.call(r)) return !1;
      for (e in t[e] = 42, t) return !1;
      if ("function" === typeof Object.keys && 0 !== Object.keys(t).length) return !1;
      if ("function" === typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(t).length) return !1;
      var n = Object.getOwnPropertySymbols(t);
      if (1 !== n.length || n[0] !== e) return !1;
      if (!Object.prototype.propertyIsEnumerable.call(t, e)) return !1;
      if ("function" === typeof Object.getOwnPropertyDescriptor) {
        var o = Object.getOwnPropertyDescriptor(t, e);
        if (42 !== o.value || !0 !== o.enumerable) return !1
      }
      return !0
    }
  },
  286: function (t, e, r) {
    "use strict";
    var n = "Function.prototype.bind called on incompatible ",
      o = Array.prototype.slice,
      a = Object.prototype.toString,
      i = "[object Function]";
    t.exports = function (t) {
      var e = this;
      if ("function" !== typeof e || a.call(e) !== i) throw new TypeError(n + e);
      for (var r, s = o.call(arguments, 1), c = function () {
        if (this instanceof r) {
          var n = e.apply(this, s.concat(o.call(arguments)));
          return Object(n) === n ? n : this
        }
        return e.apply(t, s.concat(o.call(arguments)))
      }, u = Math.max(0, e.length - s.length), f = [], l = 0; l < u; l++) f.push("$" + l);
      if (r = Function("binder", "return function (" + f.join(",") + "){ return binder.apply(this,arguments); }")(c), e.prototype) {
        var p = function () { };
        p.prototype = e.prototype, r.prototype = new p, p.prototype = null
      }
      return r
    }
  },
  287: function (t, e, r) {
    "use strict";
    var n = r(157);
    t.exports = n.call(Function.call, Object.prototype.hasOwnProperty)
  },
  288: function (t, e, r) {
    "use strict";
    var n = r(156),
      o = r(289),
      a = o(n("String.prototype.indexOf"));
    t.exports = function (t, e) {
      var r = n(t, !!e);
      return "function" === typeof r && a(t, ".prototype.") > -1 ? o(r) : r
    }
  },
  289: function (t, e, r) {
    "use strict";
    var n = r(157),
      o = r(156),
      a = o("%Function.prototype.apply%"),
      i = o("%Function.prototype.call%"),
      s = o("%Reflect.apply%", !0) || n.call(i, a),
      c = o("%Object.getOwnPropertyDescriptor%", !0),
      u = o("%Object.defineProperty%", !0),
      f = o("%Math.max%");
    if (u) try {
      u({}, "a", {
        value: 1
      })
    } catch (p) {
      u = null
    }
    t.exports = function (t) {
      var e = s(n, i, arguments);
      if (c && u) {
        var r = c(e, "length");
        r.configurable && u(e, "length", {
          value: 1 + f(0, t.length - (arguments.length - 1))
        })
      }
      return e
    };
    var l = function () {
      return s(n, a, arguments)
    };
    u ? u(t.exports, "apply", {
      value: l
    }) : t.exports.apply = l
  },
  290: function (t, e, r) {
    var n = "function" === typeof Map && Map.prototype,
      o = Object.getOwnPropertyDescriptor && n ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null,
      a = n && o && "function" === typeof o.get ? o.get : null,
      i = n && Map.prototype.forEach,
      s = "function" === typeof Set && Set.prototype,
      c = Object.getOwnPropertyDescriptor && s ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null,
      u = s && c && "function" === typeof c.get ? c.get : null,
      f = s && Set.prototype.forEach,
      l = "function" === typeof WeakMap && WeakMap.prototype ? WeakMap.prototype.has : null,
      p = "function" === typeof WeakSet && WeakSet.prototype ? WeakSet.prototype.has : null,
      d = "function" === typeof WeakRef && WeakRef.prototype ? WeakRef.prototype.deref : null,
      g = Boolean.prototype.valueOf,
      m = Object.prototype.toString,
      h = Function.prototype.toString,
      b = String.prototype.match,
      y = "function" === typeof BigInt ? BigInt.prototype.valueOf : null,
      v = Object.getOwnPropertySymbols,
      x = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? Symbol.prototype.toString : null,
      A = Object.prototype.propertyIsEnumerable,
      w = ("function" === typeof Reflect ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function (t) {
        return t.__proto__
      } : null),
      k = r(171).custom,
      j = k && P(k) ? k : null,
      O = "function" === typeof Symbol && "symbol" === typeof Symbol.toStringTag ? Symbol.toStringTag : null;

    function S(t, e, r) {
      var n = "double" === (r.quoteStyle || e) ? '"' : "'";
      return n + t + n
    }

    function E(t) {
      return String(t).replace(/"/g, "&quot;")
    }

    function _(t) {
      return "[object Array]" === R(t) && (!O || !("object" === typeof t && O in t))
    }

    function P(t) {
      if ("symbol" === typeof t) return !0;
      if (!t || "object" !== typeof t || !x) return !1;
      try {
        return x.call(t), !0
      } catch (e) { }
      return !1
    }
    t.exports = function t(e, r, n, o) {
      var s = r || {};
      if (T(s, "quoteStyle") && "single" !== s.quoteStyle && "double" !== s.quoteStyle) throw new TypeError('option "quoteStyle" must be "single" or "double"');
      if (T(s, "maxStringLength") && ("number" === typeof s.maxStringLength ? s.maxStringLength < 0 && s.maxStringLength !== 1 / 0 : null !== s.maxStringLength)) throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
      var c = !T(s, "customInspect") || s.customInspect;
      if ("boolean" !== typeof c) throw new TypeError('option "customInspect", if provided, must be `true` or `false`');
      if (T(s, "indent") && null !== s.indent && "\t" !== s.indent && !(parseInt(s.indent, 10) === s.indent && s.indent > 0)) throw new TypeError('options "indent" must be "\\t", an integer > 0, or `null`');
      if ("undefined" === typeof e) return "undefined";
      if (null === e) return "null";
      if ("boolean" === typeof e) return e ? "true" : "false";
      if ("string" === typeof e) return N(e, s);
      if ("number" === typeof e) return 0 === e ? 1 / 0 / e > 0 ? "0" : "-0" : String(e);
      if ("bigint" === typeof e) return String(e) + "n";
      var m = "undefined" === typeof s.depth ? 5 : s.depth;
      if ("undefined" === typeof n && (n = 0), n >= m && m > 0 && "object" === typeof e) return _(e) ? "[Array]" : "[Object]";
      var v = function (t, e) {
        var r;
        if ("\t" === t.indent) r = "\t";
        else {
          if (!("number" === typeof t.indent && t.indent > 0)) return null;
          r = Array(t.indent + 1).join(" ")
        }
        return {
          base: r,
          prev: Array(e + 1).join(r)
        }
      }(s, n);
      if ("undefined" === typeof o) o = [];
      else if (L(o, e) >= 0) return "[Circular]";

      function A(e, r, a) {
        if (r && (o = o.slice()).push(r), a) {
          var i = {
            depth: s.depth
          };
          return T(s, "quoteStyle") && (i.quoteStyle = s.quoteStyle), t(e, i, n + 1, o)
        }
        return t(e, s, n + 1, o)
      }
      if ("function" === typeof e) {
        var k = function (t) {
          if (t.name) return t.name;
          var e = b.call(h.call(t), /^function\s*([\w$]+)/);
          if (e) return e[1];
          return null
        }(e),
          C = D(e, A);
        return "[Function" + (k ? ": " + k : " (anonymous)") + "]" + (C.length > 0 ? " { " + C.join(", ") + " }" : "")
      }
      if (P(e)) {
        var M = x.call(e);
        return "object" === typeof e ? I(M) : M
      }
      if (function (t) {
        if (!t || "object" !== typeof t) return !1;
        if ("undefined" !== typeof HTMLElement && t instanceof HTMLElement) return !0;
        return "string" === typeof t.nodeName && "function" === typeof t.getAttribute
      }(e)) {
        for (var q = "<" + String(e.nodeName).toLowerCase(), W = e.attributes || [], H = 0; H < W.length; H++) q += " " + W[H].name + "=" + S(E(W[H].value), "double", s);
        return q += ">", e.childNodes && e.childNodes.length && (q += "..."), q += "</" + String(e.nodeName).toLowerCase() + ">"
      }
      if (_(e)) {
        if (0 === e.length) return "[]";
        var z = D(e, A);
        return v && ! function (t) {
          for (var e = 0; e < t.length; e++)
            if (L(t[e], "\n") >= 0) return !1;
          return !0
        }(z) ? "[" + B(z, v) + "]" : "[ " + z.join(", ") + " ]"
      }
      if (function (t) {
        return "[object Error]" === R(t) && (!O || !("object" === typeof t && O in t))
      }(e)) {
        var G = D(e, A);
        return 0 === G.length ? "[" + String(e) + "]" : "{ [" + String(e) + "] " + G.join(", ") + " }"
      }
      if ("object" === typeof e && c) {
        if (j && "function" === typeof e[j]) return e[j]();
        if ("function" === typeof e.inspect) return e.inspect()
      }
      if (function (t) {
        if (!a || !t || "object" !== typeof t) return !1;
        try {
          a.call(t);
          try {
            u.call(t)
          } catch (q) {
            return !0
          }
          return t instanceof Map
        } catch (e) { }
        return !1
      }(e)) {
        var V = [];
        return i.call(e, (function (t, r) {
          V.push(A(r, e, !0) + " => " + A(t, e))
        })), F("Map", a.call(e), V, v)
      }
      if (function (t) {
        if (!u || !t || "object" !== typeof t) return !1;
        try {
          u.call(t);
          try {
            a.call(t)
          } catch (e) {
            return !0
          }
          return t instanceof Set
        } catch (r) { }
        return !1
      }(e)) {
        var J = [];
        return f.call(e, (function (t) {
          J.push(A(t, e))
        })), F("Set", u.call(e), J, v)
      }
      if (function (t) {
        if (!l || !t || "object" !== typeof t) return !1;
        try {
          l.call(t, l);
          try {
            p.call(t, p)
          } catch (q) {
            return !0
          }
          return t instanceof WeakMap
        } catch (e) { }
        return !1
      }(e)) return U("WeakMap");
      if (function (t) {
        if (!p || !t || "object" !== typeof t) return !1;
        try {
          p.call(t, p);
          try {
            l.call(t, l)
          } catch (q) {
            return !0
          }
          return t instanceof WeakSet
        } catch (e) { }
        return !1
      }(e)) return U("WeakSet");
      if (function (t) {
        if (!d || !t || "object" !== typeof t) return !1;
        try {
          return d.call(t), !0
        } catch (e) { }
        return !1
      }(e)) return U("WeakRef");
      if (function (t) {
        return "[object Number]" === R(t) && (!O || !("object" === typeof t && O in t))
      }(e)) return I(A(Number(e)));
      if (function (t) {
        if (!t || "object" !== typeof t || !y) return !1;
        try {
          return y.call(t), !0
        } catch (e) { }
        return !1
      }(e)) return I(A(y.call(e)));
      if (function (t) {
        return "[object Boolean]" === R(t) && (!O || !("object" === typeof t && O in t))
      }(e)) return I(g.call(e));
      if (function (t) {
        return "[object String]" === R(t) && (!O || !("object" === typeof t && O in t))
      }(e)) return I(A(String(e)));
      if (! function (t) {
        return "[object Date]" === R(t) && (!O || !("object" === typeof t && O in t))
      }(e) && ! function (t) {
        return "[object RegExp]" === R(t) && (!O || !("object" === typeof t && O in t))
      }(e)) {
        var $ = D(e, A),
          X = w ? w(e) === Object.prototype : e instanceof Object || e.constructor === Object,
          Q = e instanceof Object ? "" : "null prototype",
          K = !X && O && Object(e) === e && O in e ? R(e).slice(8, -1) : Q ? "Object" : "",
          Z = (X || "function" !== typeof e.constructor ? "" : e.constructor.name ? e.constructor.name + " " : "") + (K || Q ? "[" + [].concat(K || [], Q || []).join(": ") + "] " : "");
        return 0 === $.length ? Z + "{}" : v ? Z + "{" + B($, v) + "}" : Z + "{ " + $.join(", ") + " }"
      }
      return String(e)
    };
    var C = Object.prototype.hasOwnProperty || function (t) {
      return t in this
    };

    function T(t, e) {
      return C.call(t, e)
    }

    function R(t) {
      return m.call(t)
    }

    function L(t, e) {
      if (t.indexOf) return t.indexOf(e);
      for (var r = 0, n = t.length; r < n; r++)
        if (t[r] === e) return r;
      return -1
    }

    function N(t, e) {
      if (t.length > e.maxStringLength) {
        var r = t.length - e.maxStringLength,
          n = "... " + r + " more character" + (r > 1 ? "s" : "");
        return N(t.slice(0, e.maxStringLength), e) + n
      }
      return S(t.replace(/(['\\])/g, "\\$1").replace(/[\x00-\x1f]/g, M), "single", e)
    }

    function M(t) {
      var e = t.charCodeAt(0),
        r = {
          8: "b",
          9: "t",
          10: "n",
          12: "f",
          13: "r"
        }[e];
      return r ? "\\" + r : "\\x" + (e < 16 ? "0" : "") + e.toString(16).toUpperCase()
    }

    function I(t) {
      return "Object(" + t + ")"
    }

    function U(t) {
      return t + " { ? }"
    }

    function F(t, e, r, n) {
      return t + " (" + e + ") {" + (n ? B(r, n) : r.join(", ")) + "}"
    }

    function B(t, e) {
      if (0 === t.length) return "";
      var r = "\n" + e.prev + e.base;
      return r + t.join("," + r) + "\n" + e.prev
    }

    function D(t, e) {
      var r = _(t),
        n = [];
      if (r) {
        n.length = t.length;
        for (var o = 0; o < t.length; o++) n[o] = T(t, o) ? e(t[o], t) : ""
      }
      for (var a in t) T(t, a) && (r && String(Number(a)) === a && a < t.length || (/[^\w$]/.test(a) ? n.push(e(a, t) + ": " + e(t[a], t)) : n.push(a + ": " + e(t[a], t))));
      if ("function" === typeof v)
        for (var i = v(t), s = 0; s < i.length; s++) A.call(t, i[s]) && n.push("[" + e(i[s]) + "]: " + e(t[i[s]], t));
      return n
    }
  },
  291: function (t, e, r) {
    "use strict";
    var n = r(198),
      o = Object.prototype.hasOwnProperty,
      a = Array.isArray,
      i = {
        allowDots: !1,
        allowPrototypes: !1,
        allowSparse: !1,
        arrayLimit: 20,
        charset: "utf-8",
        charsetSentinel: !1,
        comma: !1,
        decoder: n.decode,
        delimiter: "&",
        depth: 5,
        ignoreQueryPrefix: !1,
        interpretNumericEntities: !1,
        parameterLimit: 1e3,
        parseArrays: !0,
        plainObjects: !1,
        strictNullHandling: !1
      },
      s = function (t) {
        return t.replace(/&#(\d+);/g, (function (t, e) {
          return String.fromCharCode(parseInt(e, 10))
        }))
      },
      c = function (t, e) {
        return t && "string" === typeof t && e.comma && t.indexOf(",") > -1 ? t.split(",") : t
      },
      u = function (t, e, r, n) {
        if (t) {
          var a = r.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t,
            i = /(\[[^[\]]*])/g,
            s = r.depth > 0 && /(\[[^[\]]*])/.exec(a),
            u = s ? a.slice(0, s.index) : a,
            f = [];
          if (u) {
            if (!r.plainObjects && o.call(Object.prototype, u) && !r.allowPrototypes) return;
            f.push(u)
          }
          for (var l = 0; r.depth > 0 && null !== (s = i.exec(a)) && l < r.depth;) {
            if (l += 1, !r.plainObjects && o.call(Object.prototype, s[1].slice(1, -1)) && !r.allowPrototypes) return;
            f.push(s[1])
          }
          return s && f.push("[" + a.slice(s.index) + "]"),
            function (t, e, r, n) {
              for (var o = n ? e : c(e, r), a = t.length - 1; a >= 0; --a) {
                var i, s = t[a];
                if ("[]" === s && r.parseArrays) i = [].concat(o);
                else {
                  i = r.plainObjects ? Object.create(null) : {};
                  var u = "[" === s.charAt(0) && "]" === s.charAt(s.length - 1) ? s.slice(1, -1) : s,
                    f = parseInt(u, 10);
                  r.parseArrays || "" !== u ? !isNaN(f) && s !== u && String(f) === u && f >= 0 && r.parseArrays && f <= r.arrayLimit ? (i = [])[f] = o : i[u] = o : i = {
                    0: o
                  }
                }
                o = i
              }
              return o
            }(f, e, r, n)
        }
      };
    t.exports = function (t, e) {
      var r = function (t) {
        if (!t) return i;
        if (null !== t.decoder && void 0 !== t.decoder && "function" !== typeof t.decoder) throw new TypeError("Decoder has to be a function.");
        if ("undefined" !== typeof t.charset && "utf-8" !== t.charset && "iso-8859-1" !== t.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        var e = "undefined" === typeof t.charset ? i.charset : t.charset;
        return {
          allowDots: "undefined" === typeof t.allowDots ? i.allowDots : !!t.allowDots,
          allowPrototypes: "boolean" === typeof t.allowPrototypes ? t.allowPrototypes : i.allowPrototypes,
          allowSparse: "boolean" === typeof t.allowSparse ? t.allowSparse : i.allowSparse,
          arrayLimit: "number" === typeof t.arrayLimit ? t.arrayLimit : i.arrayLimit,
          charset: e,
          charsetSentinel: "boolean" === typeof t.charsetSentinel ? t.charsetSentinel : i.charsetSentinel,
          comma: "boolean" === typeof t.comma ? t.comma : i.comma,
          decoder: "function" === typeof t.decoder ? t.decoder : i.decoder,
          delimiter: "string" === typeof t.delimiter || n.isRegExp(t.delimiter) ? t.delimiter : i.delimiter,
          depth: "number" === typeof t.depth || !1 === t.depth ? +t.depth : i.depth,
          ignoreQueryPrefix: !0 === t.ignoreQueryPrefix,
          interpretNumericEntities: "boolean" === typeof t.interpretNumericEntities ? t.interpretNumericEntities : i.interpretNumericEntities,
          parameterLimit: "number" === typeof t.parameterLimit ? t.parameterLimit : i.parameterLimit,
          parseArrays: !1 !== t.parseArrays,
          plainObjects: "boolean" === typeof t.plainObjects ? t.plainObjects : i.plainObjects,
          strictNullHandling: "boolean" === typeof t.strictNullHandling ? t.strictNullHandling : i.strictNullHandling
        }
      }(e);
      if ("" === t || null === t || "undefined" === typeof t) return r.plainObjects ? Object.create(null) : {};
      for (var f = "string" === typeof t ? function (t, e) {
        var r, u = {},
          f = e.ignoreQueryPrefix ? t.replace(/^\?/, "") : t,
          l = e.parameterLimit === 1 / 0 ? void 0 : e.parameterLimit,
          p = f.split(e.delimiter, l),
          d = -1,
          g = e.charset;
        if (e.charsetSentinel)
          for (r = 0; r < p.length; ++r) 0 === p[r].indexOf("utf8=") && ("utf8=%E2%9C%93" === p[r] ? g = "utf-8" : "utf8=%26%2310003%3B" === p[r] && (g = "iso-8859-1"), d = r, r = p.length);
        for (r = 0; r < p.length; ++r)
          if (r !== d) {
            var m, h, b = p[r],
              y = b.indexOf("]="),
              v = -1 === y ? b.indexOf("=") : y + 1; - 1 === v ? (m = e.decoder(b, i.decoder, g, "key"), h = e.strictNullHandling ? null : "") : (m = e.decoder(b.slice(0, v), i.decoder, g, "key"), h = n.maybeMap(c(b.slice(v + 1), e), (function (t) {
                return e.decoder(t, i.decoder, g, "value")
              }))), h && e.interpretNumericEntities && "iso-8859-1" === g && (h = s(h)), b.indexOf("[]=") > -1 && (h = a(h) ? [h] : h), o.call(u, m) ? u[m] = n.combine(u[m], h) : u[m] = h
          }
        return u
      }(t, r) : t, l = r.plainObjects ? Object.create(null) : {}, p = Object.keys(f), d = 0; d < p.length; ++d) {
        var g = p[d],
          m = u(g, f[g], r, "string" === typeof t);
        l = n.merge(l, m, r)
      }
      return !0 === r.allowSparse ? l : n.compact(l)
    }
  },
  39: function (t, e, r) {
    "use strict";

    function n(t, e, r) {
      return e in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[e] = r, t
    }
    r.d(e, "a", (function () {
      return n
    }))
  },
  4: function (t, e, r) {
    "use strict";

    function n(t, e, r, n, o, a, i) {
      try {
        var s = t[a](i),
          c = s.value
      } catch (u) {
        return void r(u)
      }
      s.done ? e(c) : Promise.resolve(c).then(n, o)
    }

    function o(t) {
      return function () {
        var e = this,
          r = arguments;
        return new Promise((function (o, a) {
          var i = t.apply(e, r);

          function s(t) {
            n(i, o, a, s, c, "next", t)
          }

          function c(t) {
            n(i, o, a, s, c, "throw", t)
          }
          s(void 0)
        }))
      }
    }
    r.d(e, "a", (function () {
      return o
    }))
  },
  41: function (t, e, r) {
    "use strict";
    r.d(e, "a", (function () {
      return i
    }));
    var n = r(112);
    var o = r(149),
      a = r(90);

    function i(t) {
      return function (t) {
        if (Array.isArray(t)) return Object(n.a)(t)
      }(t) || Object(o.a)(t) || Object(a.a)(t) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }
  },
  44: function (t, e, r) {
    "use strict";
    var n = r(191),
      o = Object.prototype.toString;

    function a(t) {
      return "[object Array]" === o.call(t)
    }

    function i(t) {
      return "undefined" === typeof t
    }

    function s(t) {
      return null !== t && "object" === typeof t
    }

    function c(t) {
      if ("[object Object]" !== o.call(t)) return !1;
      var e = Object.getPrototypeOf(t);
      return null === e || e === Object.prototype
    }

    function u(t) {
      return "[object Function]" === o.call(t)
    }

    function f(t, e) {
      if (null !== t && "undefined" !== typeof t)
        if ("object" !== typeof t && (t = [t]), a(t))
          for (var r = 0, n = t.length; r < n; r++) e.call(null, t[r], r, t);
        else
          for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && e.call(null, t[o], o, t)
    }
    t.exports = {
      isArray: a,
      isArrayBuffer: function (t) {
        return "[object ArrayBuffer]" === o.call(t)
      },
      isBuffer: function (t) {
        return null !== t && !i(t) && null !== t.constructor && !i(t.constructor) && "function" === typeof t.constructor.isBuffer && t.constructor.isBuffer(t)
      },
      isFormData: function (t) {
        return "undefined" !== typeof FormData && t instanceof FormData
      },
      isArrayBufferView: function (t) {
        return "undefined" !== typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(t) : t && t.buffer && t.buffer instanceof ArrayBuffer
      },
      isString: function (t) {
        return "string" === typeof t
      },
      isNumber: function (t) {
        return "number" === typeof t
      },
      isObject: s,
      isPlainObject: c,
      isUndefined: i,
      isDate: function (t) {
        return "[object Date]" === o.call(t)
      },
      isFile: function (t) {
        return "[object File]" === o.call(t)
      },
      isBlob: function (t) {
        return "[object Blob]" === o.call(t)
      },
      isFunction: u,
      isStream: function (t) {
        return s(t) && u(t.pipe)
      },
      isURLSearchParams: function (t) {
        return "undefined" !== typeof URLSearchParams && t instanceof URLSearchParams
      },
      isStandardBrowserEnv: function () {
        return ("undefined" === typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && ("undefined" !== typeof window && "undefined" !== typeof document)
      },
      forEach: f,
      merge: function t() {
        var e = {};

        function r(r, n) {
          c(e[n]) && c(r) ? e[n] = t(e[n], r) : c(r) ? e[n] = t({}, r) : a(r) ? e[n] = r.slice() : e[n] = r
        }
        for (var n = 0, o = arguments.length; n < o; n++) f(arguments[n], r);
        return e
      },
      extend: function (t, e, r) {
        return f(e, (function (e, o) {
          t[o] = r && "function" === typeof e ? n(e, r) : e
        })), t
      },
      trim: function (t) {
        return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
      },
      stripBOM: function (t) {
        return 65279 === t.charCodeAt(0) && (t = t.slice(1)), t
      }
    }
  },
  548: function (t, e, r) {
    "use strict";
    r.r(e);
    var n = r(12),
      o = r(2),
      a = r.n(o),
      i = r(39),
      s = r(4),
      c = r(8),
      u = r(6),
      f = r.n(u),
      l = r(14),
      p = r(58),
      d = r(72),
      g = r(236),
      m = r.n(g),
      h = r(91),
      b = r(10),
      y = r(81),
      v = r(27),
      x = r(28),
      A = function (t) {
        var e;
        if (!Object(v.a)()) {
          for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) n[o - 1] = arguments[o];
          (e = console).log.apply(e, ["[bg/browserActions] ".concat(t)].concat(n))
        }
      },
      w = Object(v.b)() ? f.a.browserAction : f.a.action,
      k = function () {
        function t() {
          Object(p.a)(this, t), this.url = "", A("init"), this.handleVisitHistory = this.handleVisitHistory.bind(this), this.initBrowserActionClickEvent(), this.initTabsEvents()
        }
        return Object(d.a)(t, [{
          key: "initTabsEvents",
          value: function () {
            var t = this,
              e = function () {
                var e = Object(s.a)(a.a.mark((function e(r, n) {
                  var o, i, s, u, l;
                  return a.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                      case 0:
                        if (r) {
                          e.next = 2;
                          break
                        }
                        return e.abrupt("return", t.clearLocalBookmarks(n));
                      case 2:
                        return e.next = 4, Object(x.a)();
                      case 4:
                        if (e.sent) {
                          e.next = 7;
                          break
                        }
                        return e.abrupt("return", t.clearLocalBookmarks(n));
                      case 7:
                        return e.next = 9, Object(b.b)();
                      case 9:
                        return o = e.sent, e.next = 12, f.a.cookies.get({
                          name: c.b,
                          url: o
                        });
                      case 12:
                        if ((i = e.sent) && i.value) {
                          e.next = 15;
                          break
                        }
                        return e.abrupt("return");
                      case 15:
                        return e.next = 17, Object(h.f)({
                          targetURL: r
                        });
                      case 17:
                        s = e.sent, t.clearLocalBookmarks(n), Object(b.c)(s) && (u = s.data.data, l = u.bookmarkId, u.exist && (t.renderBadge(n, {
                          url: r,
                          id: l
                        }), f.a.tabs.sendMessage(n, {
                          action: c.D
                        }))), s && f.a.tabs.sendMessage(n, {
                          action: c.V,
                          data: s.config.headers.Authorization
                        });
                      case 21:
                      case "end":
                        return e.stop()
                    }
                  }), e)
                })));
                return function (t, r) {
                  return e.apply(this, arguments)
                }
              }(),
              r = m()(function () {
                var r = Object(s.a)(a.a.mark((function r(n, o, i) {
                  var s, c;
                  return a.a.wrap((function (r) {
                    for (; ;) switch (r.prev = r.next) {
                      case 0:
                        s = i.url, c = i.id, e(s, c), t.handleVisitHistory(i);
                      case 3:
                      case "end":
                        return r.stop()
                    }
                  }), r)
                })));
                return function (t, e, n) {
                  return r.apply(this, arguments)
                }
              }(), 100),
              o = m()((function () {
                f.a.tabs.query({
                  active: !0,
                  currentWindow: !0,
                  lastFocusedWindow: !0
                }).then((function (r) {
                  var o = Object(n.a)(r, 1)[0],
                    a = o.url,
                    i = o.id;
                  i && a && e(a, i), t.handleVisitHistory(o)
                })).catch((function (t) {
                  A("onTabActivated error", t)
                }))
              }), 100);
            f.a.tabs.onUpdated.addListener(r), f.a.tabs.onActivated.addListener(o)
          }
        }, {
          key: "initBrowserActionClickEvent",
          value: function () {
            w.onClicked.addListener((function (t) {
              A("\u70b9\u51fb\u4e86\u63d2\u4ef6\u56fe\u6807"), f.a.tabs.query({
                currentWindow: !0,
                active: !0
              }).then((function (t) {
                var e = Object(n.a)(t, 1)[0].id;
                if (e) {
                  var r = {
                    action: c.B,
                    data: {
                      route: "home"
                    }
                  };
                  f.a.tabs.sendMessage(e, r).catch((function (t) {
                    f.a.tabs.executeScript(e, {
                      file: "content.js",
                      runAt: "document_end"
                    }).then((function (t) {
                      Object(n.a)(t, 1)[0] && f.a.tabs.sendMessage(e, r)
                    }))
                  }))
                }
              })).catch((function (t) { }))
            }))
          }
        }, {
          key: "renderBadge",
          value: function (t, e) {
            try {
              w.setBadgeBackgroundColor({
                color: "#2C46F1"
              });
              var r = {
                text: (Object(v.b)(), "\u2713"),
                tabId: t
              };
              w.setBadgeText(r), "function" === typeof w.setBadgeTextColor && w.setBadgeTextColor({
                tabId: t,
                color: "#FFF"
              })
            } catch (n) {
              A(String(n))
            }
            e && f.a.storage.local.set(Object(i.a)({}, c.T, JSON.stringify([e])))
          }
        }, {
          key: "clearLocalBookmarks",
          value: function (t) {
            f.a.storage.local.remove(c.T), w.setBadgeText({
              text: "",
              tabId: t
            })
          }
        }, {
          key: "handleVisitHistory",
          value: function () {
            var t = Object(s.a)(a.a.mark((function t(e) {
              var r, n, o, s, u, p, d, g, m, h, x, w, k, j, O;
              return a.a.wrap((function (t) {
                for (; ;) switch (t.prev = t.next) {
                  case 0:
                    if (e) {
                      t.next = 2;
                      break
                    }
                    return t.abrupt("return");
                  case 2:
                    return t.next = 4, Object(b.b)();
                  case 4:
                    return o = t.sent, t.next = 7, f.a.cookies.get({
                      name: c.b,
                      url: o
                    });
                  case 7:
                    if ((s = t.sent) && s.value) {
                      t.next = 10;
                      break
                    }
                    return t.abrupt("return");
                  case 10:
                    return t.next = 12, f.a.storage.local.get(c.W);
                  case 12:
                    if (t.t1 = r = t.sent, t.t0 = null === t.t1, t.t0) {
                      t.next = 16;
                      break
                    }
                    t.t0 = void 0 === r;
                  case 16:
                    if (!t.t0) {
                      t.next = 20;
                      break
                    }
                    t.t2 = void 0, t.next = 21;
                    break;
                  case 20:
                    t.t2 = r[c.W];
                  case 21:
                    return u = t.t2, t.next = 24, f.a.storage.local.get(c.X);
                  case 24:
                    if (t.t4 = n = t.sent, t.t3 = null === t.t4, t.t3) {
                      t.next = 28;
                      break
                    }
                    t.t3 = void 0 === n;
                  case 28:
                    if (!t.t3) {
                      t.next = 32;
                      break
                    }
                    t.t5 = void 0, t.next = 33;
                    break;
                  case 32:
                    t.t5 = n[c.X];
                  case 33:
                    if (p = t.t5, u && !(Date.now() - p > 3e5)) {
                      t.next = 44;
                      break
                    }
                    return A("VISIT_HISTORY_CONFIG_CACHE \u4e0d\u5b58\u5728\u6216\u8005\u5df2\u7ecf\u8fc7\u671f\uff0c\u91cd\u65b0\u83b7\u53d6"), t.next = 38, Object(y.c)();
                  case 38:
                    return d = t.sent, u = d, t.next = 42, f.a.storage.local.set(Object(i.a)({}, c.W, d));
                  case 42:
                    return t.next = 44, f.a.storage.local.set(Object(i.a)({}, c.X, Date.now()));
                  case 44:
                    if (!Object(b.c)(u) || !u.data.data) {
                      t.next = 58;
                      break
                    }
                    if (g = e.status, m = e.url, h = e.title, x = e.favIconUrl, "complete" !== g || !m || !h) {
                      t.next = 58;
                      break
                    }
                    if (this.url === e.url || !e.id) {
                      t.next = 58;
                      break
                    }
                    return this.url = m, w = "", t.next = 52, f.a.scripting.executeScript({
                      target: {
                        tabId: e.id
                      },
                      func: function () {
                        var t;
                        return null === (t = document.querySelector('meta[name="description"]')) || void 0 === t ? void 0 : t.content
                      }
                    });
                  case 52:
                    k = t.sent, A("get description scriptingResult", k), w = Object(v.b)() ? null === k || void 0 === k ? void 0 : k[0] : null === k || void 0 === k || null === (j = k[0]) || void 0 === j ? void 0 : j.result, O = Object(l.a)(Object(l.a)({
                      url: m,
                      title: h
                    }, !!w && {
                      description: w
                    }), !!x && {
                      favicon: x
                    }), A("\u521b\u5efa\u4e91\u7aef\u6d4f\u89c8\u8bb0\u5f55", O), Object(y.a)(O);
                  case 58:
                  case "end":
                    return t.stop()
                }
              }), t, this)
            })));
            return function (e) {
              return t.apply(this, arguments)
            }
          }()
        }]), t
      }(),
      j = r(41),
      O = r(117),
      S = r(134);

    function E() {
      return _.apply(this, arguments)
    }

    function _() {
      return (_ = Object(s.a)(a.a.mark((function t() {
        return a.a.wrap((function (t) {
          for (; ;) switch (t.prev = t.next) {
            case 0:
              return t.abrupt("return", b.a.get("/v2/aisearch/list"));
            case 1:
            case "end":
              return t.stop()
          }
        }), t)
      })))).apply(this, arguments)
    }
    var P = r(98),
      C = {
        smartFolder: f.a.i18n.getMessage("cubox_folder_smart"),
        folder: f.a.i18n.getMessage("cubox_folder"),
        tag: f.a.i18n.getMessage("cubox_tag"),
        bookmark: f.a.i18n.getMessage("cubox_bookmark"),
        bookmark01: f.a.i18n.getMessage("cubox_bookmark_0_1"),
        bookmark02: f.a.i18n.getMessage("cubox_bookmark_0_2"),
        bookmark1: f.a.i18n.getMessage("cubox_bookmark_1"),
        bookmark2: f.a.i18n.getMessage("cubox_bookmark_2"),
        bookmark3: f.a.i18n.getMessage("cubox_bookmark_3"),
        bookmark4: f.a.i18n.getMessage("cubox_bookmark_4"),
        bookmark5: f.a.i18n.getMessage("cubox_bookmark_5"),
        bookmark6: f.a.i18n.getMessage("cubox_bookmark_6")
      },
      T = function () {
        function t() {
          Object(p.a)(this, t), this.ready = !1, this.smartFolderLoaded = !1, this.folderLoaded = !1, this.tagLoaded = !1, this.smartFolderList = [], this.folderList = [], this.tags = [], this.bookmarks = [], this.onSubmit = this.onSubmit.bind(this), this.onChange = this.onChange.bind(this), this.onCancelled = this.onCancelled.bind(this), this.getResults = this.getResults.bind(this), this.fetchAllFavorites = this.fetchAllFavorites.bind(this), this.fetchAllCategories = this.fetchAllCategories.bind(this), this.fetchAllTags = this.fetchAllTags.bind(this), this.fetchBookmarks = this.fetchBookmarks.bind(this), this.clearCache = this.clearCache.bind(this), this.getRegex = this.getRegex.bind(this), this.highlight = this.highlight.bind(this), this.renderBookmarkTitle = this.renderBookmarkTitle.bind(this), this.replaceFiveXMLEscapeCharacters = this.replaceFiveXMLEscapeCharacters.bind(this), this.setSuggestResults = this.setSuggestResults.bind(this)
        }
        return Object(d.a)(t, [{
          key: "onSubmit",
          value: function () {
            var t = Object(s.a)(a.a.mark((function t(e) {
              var r, n;
              return a.a.wrap((function (t) {
                for (; ;) switch (t.prev = t.next) {
                  case 0:
                    return e = (e || "").trim(), t.next = 3, Object(b.b)();
                  case 3:
                    r = t.sent, n = r + "/web", /.*:\/\//g.test(e) ? n = e : e && (n += "/save/search?q=".concat(encodeURIComponent(e))), f.a.tabs.update(void 0, {
                      url: n
                    });
                  case 7:
                  case "end":
                    return t.stop()
                }
              }), t)
            })));
            return function (e) {
              return t.apply(this, arguments)
            }
          }()
        }, {
          key: "onChange",
          value: function () {
            var t = Object(s.a)(a.a.mark((function t(e, r) {
              var n, o = this;
              return a.a.wrap((function (t) {
                for (; ;) switch (t.prev = t.next) {
                  case 0:
                    if (this.bookmarks = [], e = (e || "").trim(), n = f.a.i18n.getMessage("omnibox_suggestion_prefix"), f.a.omnibox.setDefaultSuggestion({
                      description: e ? "<match>".concat(n, " ").concat(this.replaceFiveXMLEscapeCharacters(e), "</match>") : n
                    }), e) {
                      t.next = 6;
                      break
                    }
                    return t.abrupt("return");
                  case 6:
                    this.fetchAllCategories().then((function () {
                      o.setSuggestResults(e, r)
                    })), this.fetchAllFavorites().then((function () {
                      o.setSuggestResults(e, r)
                    })), this.fetchAllTags().then((function () {
                      o.setSuggestResults(e, r)
                    })), this.fetchBookmarks(e).then((function () {
                      o.setSuggestResults(e, r)
                    }));
                  case 10:
                  case "end":
                    return t.stop()
                }
              }), t, this)
            })));
            return function (e, r) {
              return t.apply(this, arguments)
            }
          }()
        }, {
          key: "setSuggestResults",
          value: function () {
            var t = Object(s.a)(a.a.mark((function t(e, r) {
              var n, o = this;
              return a.a.wrap((function (t) {
                for (; ;) switch (t.prev = t.next) {
                  case 0:
                    return t.next = 2, this.getResults(e);
                  case 2:
                    (n = t.sent).length > 0 && r(n.filter((function (t) {
                      return !!t.omniboxLink
                    })).map((function (t) {
                      var r = o.getRegex(e),
                        n = o.highlight(t.omniboxTitle || "", r);
                      return {
                        content: t.omniboxLink,
                        description: "[".concat(C[t.omniboxType] || "", "] - <match>").concat(n, "</match> - <url>").concat(o.highlight(t.omniboxLink, r), "</url>")
                      }
                    })));
                  case 4:
                  case "end":
                    return t.stop()
                }
              }), t, this)
            })));
            return function (e, r) {
              return t.apply(this, arguments)
            }
          }()
        }, {
          key: "onCancelled",
          value: function () {
            this.clearCache()
          }
        }, {
          key: "getResults",
          value: function () {
            var t = Object(s.a)(a.a.mark((function t(e) {
              var r, n, o, i, s, c, u;
              return a.a.wrap((function (t) {
                for (; ;) switch (t.prev = t.next) {
                  case 0:
                    return r = e.toLocaleLowerCase(), t.next = 3, Object(b.b)();
                  case 3:
                    return n = t.sent, (o = this.smartFolderList.filter((function (t) {
                      return t.name.toLocaleLowerCase().indexOf(r) > -1
                    }))).forEach((function (t) {
                      t.omniboxType = "smartFolder", t.omniboxTitle = t.name, t.omniboxLink = "".concat(n, "/my/smartfolder?id=").concat(t.idStr)
                    })), (i = this.folderList.filter((function (t) {
                      return t.groupName.toLocaleLowerCase().indexOf(r) > -1
                    }))).forEach((function (t) {
                      t.omniboxType = "folder", t.omniboxTitle = t.groupName, t.omniboxLink = "".concat(n, "/my/folder?id=").concat(t.groupId)
                    })), (s = this.tags.filter((function (t) {
                      return t.name.toLocaleLowerCase().indexOf(r) > -1
                    }))).forEach((function (t) {
                      t.omniboxType = "tag", t.omniboxTitle = "#".concat(t.name), t.omniboxLink = "".concat(n, "/my/tag?id=").concat(t.tagID)
                    })), (c = this.bookmarks.filter((function (t) {
                      return !!t.title
                    }))).forEach((function (t) {
                      t.omniboxType = "bookmark" + (0 === t.type ? t.content ? "02" : "01" : t.type), t.omniboxTitle = t.title, t.omniboxLink = 0 !== t.type || t.content ? n + "/my/card?id=" + t.userSearchEngineID : t.targetURL
                    })), u = [].concat(Object(j.a)(o), Object(j.a)(i), Object(j.a)(s), Object(j.a)(c)), t.abrupt("return", u);
                  case 14:
                  case "end":
                    return t.stop()
                }
              }), t, this)
            })));
            return function (e) {
              return t.apply(this, arguments)
            }
          }()
        }, {
          key: "renderBookmarkTitle",
          value: function (t) {
            switch (t.type) {
              case 0:
                return t.content ? "\u6587\u7ae0" : "\u7f51\u9875";
              case 1:
                return "\u7247\u6bb5";
              case 2:
                return "\u901f\u8bb0";
              case 3:
                return "\u56fe\u7247";
              case 4:
                return "\u8bed\u97f3";
              case 5:
                return "\u89c6\u9891";
              case 6:
                return "\u6587\u4ef6";
              default:
                return t
            }
          }
        }, {
          key: "fetchAllFavorites",
          value: function () {
            var t = Object(s.a)(a.a.mark((function t() {
              var e;
              return a.a.wrap((function (t) {
                for (; ;) switch (t.prev = t.next) {
                  case 0:
                    if (!this.folderLoaded) {
                      t.next = 2;
                      break
                    }
                    return t.abrupt("return");
                  case 2:
                    return t.next = 4, Object(S.b)({
                      archiving: !1
                    });
                  case 4:
                    e = t.sent, this.folderLoaded = !0, Object(b.c)(e) ? this.folderList = (e.data.data || []).filter((function (t) {
                      return !!t.groupName
                    })) : this.folderList = [];
                  case 7:
                  case "end":
                    return t.stop()
                }
              }), t, this)
            })));
            return function () {
              return t.apply(this, arguments)
            }
          }()
        }, {
          key: "fetchAllCategories",
          value: function () {
            var t = Object(s.a)(a.a.mark((function t() {
              var e;
              return a.a.wrap((function (t) {
                for (; ;) switch (t.prev = t.next) {
                  case 0:
                    if (!this.smartFolderLoaded) {
                      t.next = 2;
                      break
                    }
                    return t.abrupt("return");
                  case 2:
                    return t.next = 4, E();
                  case 4:
                    e = t.sent, this.smartFolderLoaded = !0, Object(b.c)(e) ? this.smartFolderList = e.data.data || [] : this.smartFolderList = [];
                  case 7:
                  case "end":
                    return t.stop()
                }
              }), t, this)
            })));
            return function () {
              return t.apply(this, arguments)
            }
          }()
        }, {
          key: "fetchAllTags",
          value: function () {
            var t = Object(s.a)(a.a.mark((function t() {
              var e;
              return a.a.wrap((function (t) {
                for (; ;) switch (t.prev = t.next) {
                  case 0:
                    if (!this.tagLoaded) {
                      t.next = 2;
                      break
                    }
                    return t.abrupt("return");
                  case 2:
                    return t.next = 4, Object(P.b)();
                  case 4:
                    e = t.sent, this.tagLoaded = !0, Object(b.c)(e) ? this.tags = e.data.data.tagList || [] : this.tags = [];
                  case 7:
                  case "end":
                    return t.stop()
                }
              }), t, this)
            })));
            return function () {
              return t.apply(this, arguments)
            }
          }()
        }, {
          key: "fetchBookmarks",
          value: function () {
            var t = Object(s.a)(a.a.mark((function t(e) {
              var r;
              return a.a.wrap((function (t) {
                for (; ;) switch (t.prev = t.next) {
                  case 0:
                    return t.next = 2, Object(O.a)({
                      keyword: e,
                      page: 1,
                      pageSize: 20
                    });
                  case 2:
                    r = t.sent, Object(b.c)(r) && (this.bookmarks = r.data.data || []);
                  case 4:
                  case "end":
                    return t.stop()
                }
              }), t, this)
            })));
            return function (e) {
              return t.apply(this, arguments)
            }
          }()
        }, {
          key: "clearCache",
          value: function () {
            this.folderLoaded = !1, this.smartFolderLoaded = !1, this.tagLoaded = !1
          }
        }, {
          key: "getRegex",
          value: function (t) {
            var e = (t || "").split(" "),
              r = [];
            for (var n in e) {
              var o = e[n].trim();
              o && r.push(o)
            }
            return r.length ? "(".concat(r.join("|"), ")") : ""
          }
        }, {
          key: "highlight",
          value: function (t, e) {
            if (t = this.replaceFiveXMLEscapeCharacters(t), !(e = this.replaceFiveXMLEscapeCharacters(e))) return t;
            var r = new RegExp(e, "gi");
            try {
              t = t.replace(r, "<match>$1</match>")
            } catch (n) { }
            return t
          }
        }, {
          key: "replaceFiveXMLEscapeCharacters",
          value: function (t) {
            return t = (t = (t = t.replaceAll("&", "&amp;")).replaceAll("<", "&lt;")).replaceAll(">", "&gt;")
          }
        }]), t
      }(),
      R = r(97),
      L = r(61),
      N = r(186),
      M = function () {
        function t() {
          Object(p.a)(this, t), this.contextMenuMap = [{
            key: "cuboxSetting",
            title: f.a.i18n.getMessage("context_setting"),
            contexts: ["action"]
          }, {
            key: "cuboxWebInbox",
            title: f.a.i18n.getMessage("cubox_web_inbox"),
            contexts: ["action"]
          }, {
            key: "cuboxContextSavePage",
            title: f.a.i18n.getMessage("context_menu_save_page"),
            contexts: ["page"]
          }, {
            key: "cuboxContextSaveLink",
            title: f.a.i18n.getMessage("context_menu_save_link"),
            contexts: ["link"]
          }, {
            key: "cuboxContextSaveSelection",
            title: f.a.i18n.getMessage("context_menu_save_selection"),
            contexts: ["selection"]
          }, {
            key: "cuboxContextSaveImage",
            title: f.a.i18n.getMessage("context_menu_save_image"),
            contexts: ["image"]
          }, {
            key: "cuboxContextSetting",
            title: f.a.i18n.getMessage("context_menu_setting_keyboard"),
            contexts: ["action", "page_action"]
          }], this.init = this.init.bind(this), this.addItem = this.addItem.bind(this), this.onClick = this.onClick.bind(this)
        }
        return Object(d.a)(t, [{
          key: "init",
          value: function () {
            var t = this;
            ! function (t) {
              var e;
              if (!Object(v.a)()) {
                for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) n[o - 1] = arguments[o];
                (e = console).log.apply(e, ["[bg/contextMenu] ".concat(t)].concat(n))
              }
            }("init"), this.contextMenuMap.forEach((function (e) {
              ["firefox", "safari"].includes("chrome") || t.addItem(e.key, {
                title: e.title,
                contexts: e.contexts
              })
            })), f.a.contextMenus.onClicked.removeListener(this.onClick), f.a.contextMenus.onClicked.addListener(this.onClick)
          }
        }, {
          key: "addItem",
          value: function (t, e) {
            f.a.contextMenus.create(Object(l.a)({
              id: t
            }, e))
          }
        }, {
          key: "onClick",
          value: function () {
            var t = Object(s.a)(a.a.mark((function t(e, r) {
              var n, o, i;
              return a.a.wrap((function (t) {
                for (; ;) switch (t.prev = t.next) {
                  case 0:
                    n = e.menuItemId, t.t0 = n, t.next = "cuboxSetting" === t.t0 ? 4 : "cuboxWebInbox" === t.t0 ? 6 : "cuboxContextSetting" === t.t0 ? 17 : "cuboxContextSavePage" === t.t0 ? 19 : "cuboxContextSaveSelection" === t.t0 ? 32 : "cuboxContextSaveLink" === t.t0 ? 34 : "cuboxContextSaveImage" === t.t0 ? 46 : 48;
                    break;
                  case 4:
                    return f.a.tabs.create({
                      url: Object(R.e)()
                    }), t.abrupt("break", 49);
                  case 6:
                    return t.prev = 6, t.next = 9, Object(b.b)();
                  case 9:
                    o = t.sent, f.a.tabs.create({
                      url: "".concat(o, "/my/all")
                    }), t.next = 16;
                    break;
                  case 13:
                    t.prev = 13, t.t1 = t.catch(6), f.a.tabs.create({
                      url: Object(R.d)()
                    });
                  case 16:
                    return t.abrupt("break", 49);
                  case 17:
                    return f.a.tabs.create({
                      url: Object(R.b)()
                    }), t.abrupt("break", 49);
                  case 19:
                    if (!r || !r.id) {
                      t.next = 31;
                      break
                    }
                    return t.prev = 20, t.next = 23, Object(x.a)();
                  case 23:
                    t.sent || f.a.tabs.create({
                      url: Object(R.d)()
                    }), t.next = 30;
                    break;
                  case 27:
                    t.prev = 27, t.t2 = t.catch(20), f.a.tabs.create({
                      url: Object(R.d)()
                    });
                  case 30:
                    f.a.tabs.sendMessage(r.id, {
                      action: c.B,
                      data: {
                        route: "home"
                      }
                    });
                  case 31:
                    return t.abrupt("break", 49);
                  case 32:
                    return r && r.id && f.a.tabs.sendMessage(r.id, {
                      action: c.Q,
                      data: {
                        info: e
                      }
                    }), t.abrupt("break", 49);
                  case 34:
                    if (e.pageUrl) {
                      t.next = 36;
                      break
                    }
                    return t.abrupt("return");
                  case 36:
                    if ((i = e.linkUrl || "").startsWith("/") && (i = new URL(e.pageUrl).origin + i), N.b.test(i)) {
                      t.next = 44;
                      break
                    }
                    if (i = "http://" + i, N.b.test(i)) {
                      t.next = 44;
                      break
                    }
                    if (!r || !r.id) {
                      t.next = 44;
                      break
                    }
                    return f.a.tabs.sendMessage(r.id, {
                      action: c.B,
                      data: {
                        route: "error",
                        search: "?route=error&message=".concat(encodeURIComponent("\u6536\u85cf\u5931\u8d25\uff0c\u94fe\u63a5\u5730\u5740\u9519\u8bef"))
                      }
                    }), t.abrupt("return");
                  case 44:
                    return r && r.id && f.a.tabs.sendMessage(r.id, {
                      action: c.B,
                      data: {
                        route: "home",
                        data: {
                          type: 0,
                          targetURL: i
                        }
                      }
                    }), t.abrupt("break", 49);
                  case 46:
                    return e.srcUrl && r && r.id && f.a.tabs.sendMessage(r.id, {
                      action: c.B,
                      data: {
                        route: "home",
                        data: {
                          type: 3,
                          targetURL: e.pageUrl,
                          title: "\u56fe\u7247 ".concat(Object(L.e)(e.srcUrl)),
                          description: "",
                          images: [{
                            key: "",
                            src: e.srcUrl
                          }]
                        }
                      }
                    }), t.abrupt("break", 49);
                  case 48:
                    return t.abrupt("break", 49);
                  case 49:
                  case "end":
                    return t.stop()
                }
              }), t, null, [
                [6, 13],
                [20, 27]
              ])
            })));
            return function (e, r) {
              return t.apply(this, arguments)
            }
          }()
        }]), t
      }(),
      I = r(215),
      U = function (t) {
        var e;
        if (!Object(v.a)()) {
          for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) n[o - 1] = arguments[o];
          (e = console).log.apply(e, ["[Background] ".concat(t)].concat(n))
        }
      },
      F = ["video", "audio", "img", "image"];
    ! function () {
      W.apply(this, arguments)
    }(), f.a.runtime.onInstalled.addListener((function (t) {
      switch (t.reason) {
        case "install":
          f.a.tabs.create({
            url: Object(R.a)()
          })
      }
    }));
    var B = new k,
      D = new M;

    function q(t, e) {
      function r(r, n) {
        U("onloadResource \u8d44\u6e90\u52a0\u8f7d\u6210\u529f", t.location);
        for (var o = "", a = new Uint8Array(r), i = 0; i < a.byteLength; i++) o += String.fromCharCode(a[i]);
        var s = n.get("Access-Control-Allow-Origin") || "",
          u = n.get("Content-Type") || "";
        u.startsWith("image/") ? Object(I.a)({
          file: [r],
          fileName: "file",
          fileType: u,
          fileExtension: u.split("/")[1]
        }).then((function (r) {
          var n = {
            index: t.index,
            content: o,
            contenttype: u,
            alloworigin: s
          },
            a = r.result;
          (null === a || void 0 === a ? void 0 : a.key) && (n.qiniuData = {
            key: a.key,
            src: t.location
          }), f.a.tabs.sendMessage(e.tab.id, {
            action: c.J,
            data: n
          })
        })) : f.a.tabs.sendMessage(e.tab.id, {
          action: c.J,
          data: {
            index: t.index,
            content: o,
            contenttype: u,
            alloworigin: s
          }
        })
      }
      U("handleLoadResource \u4e3b\u52a8\u52a0\u8f7d\u8d44\u6e90\u6587\u4ef6", t.location), F.find((function (e) {
        return 0 === t.contentType.indexOf(e)
      })) ? f.a.tabs.sendMessage(e.tab.id, {
        action: c.J,
        data: {
          index: t.index,
          content: t.location,
          contenttype: t.contentType,
          alloworigin: !0
        }
      }) : function () {
        U("fetSource \u8bbf\u95ee\u539f\u59cb\u8d44\u6e90", t);
        var n = "https:" === t.location.substr(0, 6) || "http:" === t.location.substr(0, 5) && "http:" === t.referer.substr(0, 5) && "http:" === t.pagescheme,
          o = "http:" === t.location.substr(0, 5) && ("https:" === t.referer.substr(0, 6) || "https:" === t.pagescheme);
        if (n || (o && t.passive, 0)) {
          var i = {},
            u = new URL(t.referer);
          n && "file:" !== t.referer.substr(0, 5) && t.referer.substr(0, 5), t.usecors && (i["cubox-archive-origin"] = u.origin);
          var l = new AbortController,
            p = setTimeout((function () {
              return l.abort()
            }), 6e3);
          fetch(t.location, {
            signal: l.signal
          }).then(function () {
            var n = Object(s.a)(a.a.mark((function n(o) {
              var i;
              return a.a.wrap((function (n) {
                for (; ;) switch (n.prev = n.next) {
                  case 0:
                    return clearTimeout(p), n.next = 3, o.arrayBuffer();
                  case 3:
                    if (i = n.sent, 200 !== o.status && f.a.tabs.sendMessage(e.tab.id, {
                      action: c.H,
                      data: {
                        index: t.index,
                        reason: "load:" + o.status
                      }
                    }), !(i.byteLength > 52428800)) {
                      n.next = 8;
                      break
                    }
                    return f.a.tabs.sendMessage(e.tab.id, {
                      action: c.H,
                      data: {
                        index: t.index,
                        reason: "maxsize"
                      }
                    }), n.abrupt("return");
                  case 8:
                    return r(i, o.headers), n.abrupt("return", i);
                  case 10:
                  case "end":
                    return n.stop()
                }
              }), n)
            })));
            return function (t) {
              return n.apply(this, arguments)
            }
          }()).catch((function (r) {
            f.a.tabs.sendMessage(e.tab.id, {
              action: c.H,
              data: {
                index: t.index,
                reason: "network"
              }
            })
          }))
        } else f.a.tabs.sendMessage(e.tab.id, {
          action: c.H,
          data: {
            index: t.index,
            reason: "mixed"
          }
        })
      }()
    }

    function W() {
      return (W = Object(s.a)(a.a.mark((function t() {
        var e;
        return a.a.wrap((function (t) {
          for (; ;) switch (t.prev = t.next) {
            case 0:
              "undefined" !== typeof f.a.omnibox && (e = new T, f.a.omnibox.onInputEntered.removeListener(e.onSubmit), f.a.omnibox.onInputEntered.addListener(e.onSubmit), f.a.omnibox.onInputChanged.removeListener(e.onChange), f.a.omnibox.onInputChanged.addListener(e.onChange), f.a.omnibox.onInputCancelled.removeListener(e.onCancelled), f.a.omnibox.onInputCancelled.addListener(e.onCancelled));
            case 1:
            case "end":
              return t.stop()
          }
        }), t)
      })))).apply(this, arguments)
    }
    "undefined" !== typeof f.a.contextMenus && ("function" === typeof f.a.contextMenus.removeAll ? f.a.contextMenus.removeAll().then((function () {
      return D.init()
    })) : D.init()), f.a.runtime.onMessage.addListener(function () {
      var t = Object(s.a)(a.a.mark((function t(e, r) {
        var o, s, u, l, p, d, g, m, b, y, x, A, w, k, j, O, S, E, _, P, C, T, R, L, N, M, F, D, W, H, z, G, V, J, $, X, Q, K, Z, Y;
        return a.a.wrap((function (t) {
          for (; ;) switch (t.prev = t.next) {
            case 0:
              S = e.action, E = e.data, t.t0 = S, t.next = t.t0 === c.S ? 4 : t.t0 === c.I ? 6 : t.t0 === c.O ? 8 : t.t0 === c.N ? 10 : t.t0 === c.eb ? 12 : t.t0 === c.w ? 14 : t.t0 === c.e ? 31 : t.t0 === c.v ? 48 : t.t0 === c.d ? 55 : t.t0 === c.m ? 57 : t.t0 === c.g ? 84 : t.t0 === c.cb ? 97 : t.t0 === c.n ? 99 : t.t0 === c.h ? 101 : t.t0 === c.M ? 103 : t.t0 === c.o ? 105 : t.t0 === c.s ? 125 : t.t0 === c.z ? 127 : t.t0 === c.a.GET_TMP_COVER ? 139 : t.t0 === c.a.RESIZE_SEARCH_ENGINE_IFRAME || t.t0 === c.a.CLEAR_TMP_COVER ? 145 : 147;
              break;
            case 4:
              return f.a.tabs.query({
                active: !0,
                currentWindow: !0
              }).then((function (t) {
                var e = Object(n.a)(t, 1),
                  r = e[0],
                  o = r.id;
                o && f.a.tabs.create({
                  url: "/html/login.html"
                }).then((function () {
                  f.a.tabs.sendMessage(o, {
                    action: c.n
                  })
                }))
              })), t.abrupt("break", 148);
            case 6:
              return q(E, r), t.abrupt("break", 148);
            case 8:
              return (null === (o = r.tab) || void 0 === o ? void 0 : o.id) && f.a.tabs.sendMessage(r.tab.id, {
                action: c.O
              }), t.abrupt("break", 148);
            case 10:
              return (null === (s = r.tab) || void 0 === s ? void 0 : s.id) && f.a.tabs.sendMessage(r.tab.id, e), t.abrupt("break", 148);
            case 12:
              return (null === (u = r.tab) || void 0 === u ? void 0 : u.id) && f.a.tabs.sendMessage(r.tab.id, e), t.abrupt("break", 148);
            case 14:
              if (U("\u6df1\u5ea6\u6293\u53d6\u5feb\u7167 \u5f00\u59cb, sender: ", r), t.prev = 15, !(null === (_ = r.tab) || void 0 === _ ? void 0 : _.id)) {
                t.next = 25;
                break
              }
              return U("\u6df1\u5ea6\u6293\u53d6\u5feb\u7167 \u5411 content \u53d1\u9001\u6d88\u606f, \u7b49\u5f85content\u8fd4\u56de"), t.next = 20, f.a.tabs.sendMessage(r.tab.id, {
                action: c.x,
                data: E
              });
            case 20:
              return (P = t.sent) && (P = JSON.parse(P)), U("\u6df1\u5ea6\u6293\u53d6\u5feb\u7167 \u6536\u5230 content \u8fd4\u56de\u7684\u6d88\u606f", P), P && (P.tab = r.tab), t.abrupt("return", P);
            case 25:
              t.next = 30;
              break;
            case 27:
              t.prev = 27, t.t1 = t.catch(15), U("\u6df1\u5ea6\u6293\u53d6\u5feb\u7167 \u5904\u7406\u5931\u8d25", t.t1);
            case 30:
              return t.abrupt("break", 148);
            case 31:
              if (U("\u6293\u53d6\u57fa\u672c\u5feb\u7167 \u5f00\u59cb, sender: ", r), t.prev = 32, !(null === (C = r.tab) || void 0 === C ? void 0 : C.id)) {
                t.next = 42;
                break
              }
              return U("\u6293\u53d6\u57fa\u672c\u5feb\u7167 \u5411 content \u53d1\u9001\u6d88\u606f, \u7b49\u5f85content\u8fd4\u56de"), t.next = 37, f.a.tabs.sendMessage(r.tab.id, {
                action: c.f,
                data: E
              });
            case 37:
              return (T = t.sent) && "string" === typeof T && (T = JSON.parse(T)), U("\u6293\u53d6\u57fa\u672c\u5feb\u7167 \u6536\u5230 content \u8fd4\u56de\u7684\u6d88\u606f", T), T && (T.tab = r.tab), t.abrupt("return", T);
            case 42:
              t.next = 47;
              break;
            case 44:
              t.prev = 44, t.t2 = t.catch(32), U("\u6293\u53d6\u57fa\u672c\u5feb\u7167 \u5904\u7406\u5931\u8d25", t.t2);
            case 47:
              return t.abrupt("break", 148);
            case 48:
              if (!(null === (l = r.tab) || void 0 === l ? void 0 : l.id)) {
                t.next = 54;
                break
              }
              return t.next = 51, Object(I.a)({
                file: e.data.htmlStrings,
                fileName: "file",
                fileType: "text/html",
                fileExtension: "html"
              });
            case 51:
              R = t.sent, (L = null === R || void 0 === R ? void 0 : R.result) && (null === L || void 0 === L ? void 0 : L.key) && (delete e.data.htmlStrings, e.data.html = L.key, e.action = c.u, e.data.tab = r.tab, f.a.tabs.sendMessage(r.tab.id, e));
            case 54:
              return t.abrupt("break", 148);
            case 55:
              return (null === (p = r.tab) || void 0 === p ? void 0 : p.id) && (e.action = c.c, e.data.tab = r.tab, f.a.tabs.sendMessage(r.tab.id, e)), t.abrupt("break", 148);
            case 57:
              if (!(null === (d = r.tab) || void 0 === d ? void 0 : d.id)) {
                t.next = 83;
                break
              }
              return U("CLIPPER_DROPPABLE_RESOURCE \u901a\u8fc7fetch\u8bfb\u53d6\u56fe\u7247\u4e8c\u8fdb\u5236\u6570\u636e"), t.next = 61, fetch(E.clipperData.images[0].src, {
                method: "GET",
                mode: "cors"
              }).then((function (t) {
                if (200 !== t.status) throw new Error("\u56fe\u7247\u8bfb\u53d6\u5931\u8d25");
                return t.blob()
              })).catch((function (t) {
                return U("fetch error", t)
              }));
            case 61:
              if (N = t.sent, U("CLIPPER_DROPPABLE_RESOURCE \u901a\u8fc7axios\u8bfb\u53d6\u56fe\u7247\u4e8c\u8fdb\u5236\u6570\u636e imageData", N), N) {
                t.next = 65;
                break
              }
              throw new Error("\u65e0\u6cd5\u8bbf\u95ee\u56fe\u7247\u8d44\u6e90");
            case 65:
              return M = N, U("CLIPPER_DROPPABLE_RESOURCE \u4e0a\u4f20\u5230\u4e03\u725b\u6216S3"), t.next = 69, Object(I.a)({
                file: M,
                fileName: "image",
                fileType: "image/png",
                fileExtension: "png",
                bucketPrivate: !0
              });
            case 69:
              if (F = t.sent, U("CLIPPER_DROPPABLE_RESOURCE \u5904\u7406\u4e03\u725b/s3\u8fd4\u56de\u7684\u7ed3\u679c"), (D = null === F || void 0 === F ? void 0 : F.result) && (null === D || void 0 === D ? void 0 : D.key)) {
                t.next = 74;
                break
              }
              throw new Error("\u4e0a\u4f20\u56fe\u7247\u5931\u8d25");
            case 74:
              if (E.clipperData.resourceUrl = D.key, Object(v.b)()) {
                t.next = 81;
                break
              }
              return t.next = 78, f.a.storage.local.get([c.K]);
            case 78:
              W = t.sent, H = W && "open" === W[c.K] && !Object(v.b)(), f.a.tabs.sendMessage(r.tab.id, {
                action: H ? c.x : c.f,
                data: E
              });
            case 81:
              return U("CLIPPER_DROPPABLE_RESOURCE \u8fd4\u56de\u6570\u636e", E), t.abrupt("return", E);
            case 83:
              return t.abrupt("break", 148);
            case 84:
              return t.next = 86, f.a.storage.local.get([c.g]);
            case 86:
              if (z = t.sent, G = [], z && z[c.g] && (G = z[c.g]), G.push(e.data), f.a.storage.local.set(Object(i.a)({}, c.g, G)), !(null === (g = r.tab) || void 0 === g ? void 0 : g.id)) {
                t.next = 96;
                break
              }
              return t.next = 94, f.a.tabs.sendMessage(r.tab.id, {
                action: c.p,
                data: e.data
              });
            case 94:
              return V = t.sent, t.abrupt("return", V);
            case 96:
              return t.abrupt("break", 148);
            case 97:
              return (null === (m = r.tab) || void 0 === m ? void 0 : m.id) && f.a.tabs.sendMessage(r.tab.id, e), t.abrupt("break", 148);
            case 99:
              return (null === (b = r.tab) || void 0 === b ? void 0 : b.id) && f.a.tabs.sendMessage(r.tab.id, e), t.abrupt("break", 148);
            case 101:
              return (null === (y = r.tab) || void 0 === y ? void 0 : y.id) && B.clearLocalBookmarks(r.tab.id), t.abrupt("break", 148);
            case 103:
              return (null === (x = r.tab) || void 0 === x ? void 0 : x.id) && B.renderBadge(r.tab.id, E), t.abrupt("break", 148);
            case 105:
              if (!(null === (A = r.tab) || void 0 === A ? void 0 : A.id)) {
                t.next = 124;
                break
              }
              return t.next = 108, f.a.storage.local.get([c.g]);
            case 108:
              if ($ = t.sent, U("CREATE_SNAP_END store", $), X = [], $ && $[c.g] && (X = $[c.g]), !(Q = null === (J = e.data) || void 0 === J ? void 0 : J.bookmarkID) || !X.some((function (t) {
                return t === Q
              }))) {
                t.next = 124;
                break
              }
              return t.next = 116, Object(I.a)({
                file: e.data.htmlStrings,
                fileName: "file",
                fileType: "text/html",
                fileExtension: "html"
              });
            case 116:
              if (K = t.sent, null === (Z = null === K || void 0 === K ? void 0 : K.result) || void 0 === Z ? void 0 : Z.key) {
                t.next = 120;
                break
              }
              throw new Error("\u4e0a\u4f20\u56fe\u7247\u5931\u8d25");
            case 120:
              return t.next = 122, Object(h.b)({
                userSearchEngineID: Q,
                archiveName: Z.key
              });
            case 122:
              return f.a.storage.local.set(Object(i.a)({}, c.g, X.filter((function (t) {
                return t !== Q
              })))), t.abrupt("return", {
                userSearchEngineID: Q,
                archiveName: Z.key
              });
            case 124:
              return t.abrupt("break", 148);
            case 125:
              return (null === (w = r.tab) || void 0 === w ? void 0 : w.id) && f.a.tabs.sendMessage(r.tab.id, e), t.abrupt("break", 148);
            case 127:
              return t.next = 129, f.a.storage.local.get(c.L);
            case 129:
              if (t.t4 = k = t.sent, t.t3 = null === t.t4, t.t3) {
                t.next = 133;
                break
              }
              t.t3 = void 0 === k;
            case 133:
              if (!t.t3) {
                t.next = 137;
                break
              }
              t.t5 = void 0, t.next = 138;
              break;
            case 137:
              t.t5 = k.region;
            case 138:
              return t.abrupt("return", t.t5);
            case 139:
              if (!(null === (j = r.tab) || void 0 === j ? void 0 : j.id)) {
                t.next = 144;
                break
              }
              return t.next = 142, f.a.tabs.sendMessage(r.tab.id, e);
            case 142:
              return Y = t.sent, t.abrupt("return", Y);
            case 144:
              return t.abrupt("break", 148);
            case 145:
              return (null === (O = r.tab) || void 0 === O ? void 0 : O.id) && f.a.tabs.sendMessage(r.tab.id, e), t.abrupt("break", 148);
            case 147:
              return t.abrupt("break", 148);
            case 148:
            case "end":
              return t.stop()
          }
        }), t, null, [
          [15, 27],
          [32, 44]
        ])
      })));
      return function (e, r) {
        return t.apply(this, arguments)
      }
    }())
  },
  55: function (t, e, r) {
    t.exports = r(266)
  },
  58: function (t, e, r) {
    "use strict";

    function n(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    r.d(e, "a", (function () {
      return n
    }))
  },
  6: function (t, e, r) {
    var n, o, a, i = r(248),
      s = r(253),
      c = r(254),
      u = r(255),
      f = r(123),
      l = r(257),
      p = r(258),
      d = r(262);
    "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof self && self, o = [t], void 0 === (a = "function" === typeof (n = function (t) {
      "use strict";
      if ("object" != typeof globalThis || "object" != typeof chrome || !chrome || !chrome.runtime || !chrome.runtime.id) throw new Error("This script should only be loaded in a browser extension.");
      if ("undefined" === typeof globalThis.browser || Object.getPrototypeOf(globalThis.browser) !== Object.prototype) {
        var e = "The message port closed before a response was received.",
          r = function (t) {
            var r = {
              alarms: {
                clear: {
                  minArgs: 0,
                  maxArgs: 1
                },
                clearAll: {
                  minArgs: 0,
                  maxArgs: 0
                },
                get: {
                  minArgs: 0,
                  maxArgs: 1
                },
                getAll: {
                  minArgs: 0,
                  maxArgs: 0
                }
              },
              bookmarks: {
                create: {
                  minArgs: 1,
                  maxArgs: 1
                },
                get: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getChildren: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getRecent: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getSubTree: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getTree: {
                  minArgs: 0,
                  maxArgs: 0
                },
                move: {
                  minArgs: 2,
                  maxArgs: 2
                },
                remove: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removeTree: {
                  minArgs: 1,
                  maxArgs: 1
                },
                search: {
                  minArgs: 1,
                  maxArgs: 1
                },
                update: {
                  minArgs: 2,
                  maxArgs: 2
                }
              },
              browserAction: {
                disable: {
                  minArgs: 0,
                  maxArgs: 1,
                  fallbackToNoCallback: !0
                },
                enable: {
                  minArgs: 0,
                  maxArgs: 1,
                  fallbackToNoCallback: !0
                },
                getBadgeBackgroundColor: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getBadgeText: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getPopup: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getTitle: {
                  minArgs: 1,
                  maxArgs: 1
                },
                openPopup: {
                  minArgs: 0,
                  maxArgs: 0
                },
                setBadgeBackgroundColor: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: !0
                },
                setBadgeText: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: !0
                },
                setIcon: {
                  minArgs: 1,
                  maxArgs: 1
                },
                setPopup: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: !0
                },
                setTitle: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: !0
                }
              },
              browsingData: {
                remove: {
                  minArgs: 2,
                  maxArgs: 2
                },
                removeCache: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removeCookies: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removeDownloads: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removeFormData: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removeHistory: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removeLocalStorage: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removePasswords: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removePluginData: {
                  minArgs: 1,
                  maxArgs: 1
                },
                settings: {
                  minArgs: 0,
                  maxArgs: 0
                }
              },
              commands: {
                getAll: {
                  minArgs: 0,
                  maxArgs: 0
                }
              },
              contextMenus: {
                remove: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removeAll: {
                  minArgs: 0,
                  maxArgs: 0
                },
                update: {
                  minArgs: 2,
                  maxArgs: 2
                }
              },
              cookies: {
                get: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getAll: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getAllCookieStores: {
                  minArgs: 0,
                  maxArgs: 0
                },
                remove: {
                  minArgs: 1,
                  maxArgs: 1
                },
                set: {
                  minArgs: 1,
                  maxArgs: 1
                }
              },
              devtools: {
                inspectedWindow: {
                  eval: {
                    minArgs: 1,
                    maxArgs: 2,
                    singleCallbackArg: !1
                  }
                },
                panels: {
                  create: {
                    minArgs: 3,
                    maxArgs: 3,
                    singleCallbackArg: !0
                  },
                  elements: {
                    createSidebarPane: {
                      minArgs: 1,
                      maxArgs: 1
                    }
                  }
                }
              },
              downloads: {
                cancel: {
                  minArgs: 1,
                  maxArgs: 1
                },
                download: {
                  minArgs: 1,
                  maxArgs: 1
                },
                erase: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getFileIcon: {
                  minArgs: 1,
                  maxArgs: 2
                },
                open: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: !0
                },
                pause: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removeFile: {
                  minArgs: 1,
                  maxArgs: 1
                },
                resume: {
                  minArgs: 1,
                  maxArgs: 1
                },
                search: {
                  minArgs: 1,
                  maxArgs: 1
                },
                show: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: !0
                }
              },
              extension: {
                isAllowedFileSchemeAccess: {
                  minArgs: 0,
                  maxArgs: 0
                },
                isAllowedIncognitoAccess: {
                  minArgs: 0,
                  maxArgs: 0
                }
              },
              history: {
                addUrl: {
                  minArgs: 1,
                  maxArgs: 1
                },
                deleteAll: {
                  minArgs: 0,
                  maxArgs: 0
                },
                deleteRange: {
                  minArgs: 1,
                  maxArgs: 1
                },
                deleteUrl: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getVisits: {
                  minArgs: 1,
                  maxArgs: 1
                },
                search: {
                  minArgs: 1,
                  maxArgs: 1
                }
              },
              i18n: {
                detectLanguage: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getAcceptLanguages: {
                  minArgs: 0,
                  maxArgs: 0
                }
              },
              identity: {
                launchWebAuthFlow: {
                  minArgs: 1,
                  maxArgs: 1
                }
              },
              idle: {
                queryState: {
                  minArgs: 1,
                  maxArgs: 1
                }
              },
              management: {
                get: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getAll: {
                  minArgs: 0,
                  maxArgs: 0
                },
                getSelf: {
                  minArgs: 0,
                  maxArgs: 0
                },
                setEnabled: {
                  minArgs: 2,
                  maxArgs: 2
                },
                uninstallSelf: {
                  minArgs: 0,
                  maxArgs: 1
                }
              },
              notifications: {
                clear: {
                  minArgs: 1,
                  maxArgs: 1
                },
                create: {
                  minArgs: 1,
                  maxArgs: 2
                },
                getAll: {
                  minArgs: 0,
                  maxArgs: 0
                },
                getPermissionLevel: {
                  minArgs: 0,
                  maxArgs: 0
                },
                update: {
                  minArgs: 2,
                  maxArgs: 2
                }
              },
              pageAction: {
                getPopup: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getTitle: {
                  minArgs: 1,
                  maxArgs: 1
                },
                hide: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: !0
                },
                setIcon: {
                  minArgs: 1,
                  maxArgs: 1
                },
                setPopup: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: !0
                },
                setTitle: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: !0
                },
                show: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: !0
                }
              },
              permissions: {
                contains: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getAll: {
                  minArgs: 0,
                  maxArgs: 0
                },
                remove: {
                  minArgs: 1,
                  maxArgs: 1
                },
                request: {
                  minArgs: 1,
                  maxArgs: 1
                }
              },
              runtime: {
                getBackgroundPage: {
                  minArgs: 0,
                  maxArgs: 0
                },
                getPlatformInfo: {
                  minArgs: 0,
                  maxArgs: 0
                },
                openOptionsPage: {
                  minArgs: 0,
                  maxArgs: 0
                },
                requestUpdateCheck: {
                  minArgs: 0,
                  maxArgs: 0
                },
                sendMessage: {
                  minArgs: 1,
                  maxArgs: 3
                },
                sendNativeMessage: {
                  minArgs: 2,
                  maxArgs: 2
                },
                setUninstallURL: {
                  minArgs: 1,
                  maxArgs: 1
                }
              },
              sessions: {
                getDevices: {
                  minArgs: 0,
                  maxArgs: 1
                },
                getRecentlyClosed: {
                  minArgs: 0,
                  maxArgs: 1
                },
                restore: {
                  minArgs: 0,
                  maxArgs: 1
                }
              },
              storage: {
                local: {
                  clear: {
                    minArgs: 0,
                    maxArgs: 0
                  },
                  get: {
                    minArgs: 0,
                    maxArgs: 1
                  },
                  getBytesInUse: {
                    minArgs: 0,
                    maxArgs: 1
                  },
                  remove: {
                    minArgs: 1,
                    maxArgs: 1
                  },
                  set: {
                    minArgs: 1,
                    maxArgs: 1
                  }
                },
                managed: {
                  get: {
                    minArgs: 0,
                    maxArgs: 1
                  },
                  getBytesInUse: {
                    minArgs: 0,
                    maxArgs: 1
                  }
                },
                sync: {
                  clear: {
                    minArgs: 0,
                    maxArgs: 0
                  },
                  get: {
                    minArgs: 0,
                    maxArgs: 1
                  },
                  getBytesInUse: {
                    minArgs: 0,
                    maxArgs: 1
                  },
                  remove: {
                    minArgs: 1,
                    maxArgs: 1
                  },
                  set: {
                    minArgs: 1,
                    maxArgs: 1
                  }
                }
              },
              tabs: {
                captureVisibleTab: {
                  minArgs: 0,
                  maxArgs: 2
                },
                create: {
                  minArgs: 1,
                  maxArgs: 1
                },
                detectLanguage: {
                  minArgs: 0,
                  maxArgs: 1
                },
                discard: {
                  minArgs: 0,
                  maxArgs: 1
                },
                duplicate: {
                  minArgs: 1,
                  maxArgs: 1
                },
                executeScript: {
                  minArgs: 1,
                  maxArgs: 2
                },
                get: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getCurrent: {
                  minArgs: 0,
                  maxArgs: 0
                },
                getZoom: {
                  minArgs: 0,
                  maxArgs: 1
                },
                getZoomSettings: {
                  minArgs: 0,
                  maxArgs: 1
                },
                goBack: {
                  minArgs: 0,
                  maxArgs: 1
                },
                goForward: {
                  minArgs: 0,
                  maxArgs: 1
                },
                highlight: {
                  minArgs: 1,
                  maxArgs: 1
                },
                insertCSS: {
                  minArgs: 1,
                  maxArgs: 2
                },
                move: {
                  minArgs: 2,
                  maxArgs: 2
                },
                query: {
                  minArgs: 1,
                  maxArgs: 1
                },
                reload: {
                  minArgs: 0,
                  maxArgs: 2
                },
                remove: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removeCSS: {
                  minArgs: 1,
                  maxArgs: 2
                },
                sendMessage: {
                  minArgs: 2,
                  maxArgs: 3
                },
                setZoom: {
                  minArgs: 1,
                  maxArgs: 2
                },
                setZoomSettings: {
                  minArgs: 1,
                  maxArgs: 2
                },
                update: {
                  minArgs: 1,
                  maxArgs: 2
                }
              },
              topSites: {
                get: {
                  minArgs: 0,
                  maxArgs: 0
                }
              },
              webNavigation: {
                getAllFrames: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getFrame: {
                  minArgs: 1,
                  maxArgs: 1
                }
              },
              webRequest: {
                handlerBehaviorChanged: {
                  minArgs: 0,
                  maxArgs: 0
                }
              },
              windows: {
                create: {
                  minArgs: 0,
                  maxArgs: 1
                },
                get: {
                  minArgs: 1,
                  maxArgs: 2
                },
                getAll: {
                  minArgs: 0,
                  maxArgs: 1
                },
                getCurrent: {
                  minArgs: 0,
                  maxArgs: 1
                },
                getLastFocused: {
                  minArgs: 0,
                  maxArgs: 1
                },
                remove: {
                  minArgs: 1,
                  maxArgs: 1
                },
                update: {
                  minArgs: 2,
                  maxArgs: 2
                }
              }
            };
            if (0 === Object.keys(r).length) throw new Error("api-metadata.json has not been included in browser-polyfill");
            var n = function (t) {
              l(r, t);
              var e = p(r);

              function r(t) {
                var n, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
                return s(this, r), (n = e.call(this, o)).createItem = t, n
              }
              return c(r, [{
                key: "get",
                value: function (t) {
                  return this.has(t) || this.set(t, this.createItem(t)), u(f(r.prototype), "get", this).call(this, t)
                }
              }]), r
            }(d(WeakMap)),
              o = function (t) {
                return t && "object" === typeof t && "function" === typeof t.then
              },
              a = function (e, r) {
                return function () {
                  for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++) o[a] = arguments[a];
                  t.runtime.lastError ? e.reject(new Error(t.runtime.lastError.message)) : r.singleCallbackArg || o.length <= 1 && !1 !== r.singleCallbackArg ? e.resolve(o[0]) : e.resolve(o)
                }
              },
              g = function (t) {
                return 1 == t ? "argument" : "arguments"
              },
              m = function (t, e) {
                return function (r) {
                  for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) o[i - 1] = arguments[i];
                  if (o.length < e.minArgs) throw new Error("Expected at least ".concat(e.minArgs, " ").concat(g(e.minArgs), " for ").concat(t, "(), got ").concat(o.length));
                  if (o.length > e.maxArgs) throw new Error("Expected at most ".concat(e.maxArgs, " ").concat(g(e.maxArgs), " for ").concat(t, "(), got ").concat(o.length));
                  return new Promise((function (n, i) {
                    if (e.fallbackToNoCallback) try {
                      r[t].apply(r, o.concat([a({
                        resolve: n,
                        reject: i
                      }, e)]))
                    } catch (s) {
                      r[t].apply(r, o), e.fallbackToNoCallback = !1, e.noCallback = !0, n()
                    } else e.noCallback ? (r[t].apply(r, o), n()) : r[t].apply(r, o.concat([a({
                      resolve: n,
                      reject: i
                    }, e)]))
                  }))
                }
              },
              h = function (t, e, r) {
                return new Proxy(e, {
                  apply: function (e, n, o) {
                    return r.call.apply(r, [n, t].concat(i(o)))
                  }
                })
              },
              b = Function.call.bind(Object.prototype.hasOwnProperty),
              y = function t(e) {
                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                  o = Object.create(null),
                  a = {
                    has: function (t, r) {
                      return r in e || r in o
                    },
                    get: function (a, i, s) {
                      if (i in o) return o[i];
                      if (i in e) {
                        var c = e[i];
                        if ("function" === typeof c)
                          if ("function" === typeof r[i]) c = h(e, e[i], r[i]);
                          else if (b(n, i)) {
                            var u = m(i, n[i]);
                            c = h(e, e[i], u)
                          } else c = c.bind(e);
                        else if ("object" === typeof c && null !== c && (b(r, i) || b(n, i))) c = t(c, r[i], n[i]);
                        else {
                          if (!b(n, "*")) return Object.defineProperty(o, i, {
                            configurable: !0,
                            enumerable: !0,
                            get: function () {
                              return e[i]
                            },
                            set: function (t) {
                              e[i] = t
                            }
                          }), c;
                          c = t(c, r[i], n["*"])
                        }
                        return o[i] = c, c
                      }
                    },
                    set: function (t, r, n, a) {
                      return r in o ? o[r] = n : e[r] = n, !0
                    },
                    defineProperty: function (t, e, r) {
                      return Reflect.defineProperty(o, e, r)
                    },
                    deleteProperty: function (t, e) {
                      return Reflect.deleteProperty(o, e)
                    }
                  },
                  i = Object.create(e);
                return new Proxy(i, a)
              },
              v = function (t) {
                return {
                  addListener: function (e, r) {
                    for (var n = arguments.length, o = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++) o[a - 2] = arguments[a];
                    e.addListener.apply(e, [t.get(r)].concat(o))
                  },
                  hasListener: function (e, r) {
                    return e.hasListener(t.get(r))
                  },
                  removeListener: function (e, r) {
                    e.removeListener(t.get(r))
                  }
                }
              },
              x = new n((function (t) {
                return "function" !== typeof t ? t : function (e) {
                  var r = y(e, {}, {
                    getContent: {
                      minArgs: 0,
                      maxArgs: 0
                    }
                  });
                  t(r)
                }
              })),
              A = !1,
              w = new n((function (t) {
                return "function" !== typeof t ? t : function (e, r, n) {
                  var a, i, s = !1,
                    c = new Promise((function (t) {
                      a = function (e) {
                        A || (A = !0), s = !0, t(e)
                      }
                    }));
                  try {
                    i = t(e, r, a)
                  } catch (l) {
                    i = Promise.reject(l)
                  }
                  var u = !0 !== i && o(i);
                  if (!0 !== i && !u && !s) return !1;
                  var f = function (t) {
                    t.then((function (t) {
                      n(t)
                    }), (function (t) {
                      var e;
                      e = t && (t instanceof Error || "string" === typeof t.message) ? t.message : "An unexpected error occurred", n({
                        __mozWebExtensionPolyfillReject__: !0,
                        message: e
                      })
                    })).catch((function (t) { }))
                  };
                  return f(u ? i : c), !0
                }
              })),
              k = function (r, n) {
                var o = r.reject,
                  a = r.resolve;
                t.runtime.lastError ? t.runtime.lastError.message === e ? a() : o(new Error(t.runtime.lastError.message)) : n && n.__mozWebExtensionPolyfillReject__ ? o(new Error(n.message)) : a(n)
              },
              j = function (t, e, r) {
                for (var n = arguments.length, o = new Array(n > 3 ? n - 3 : 0), a = 3; a < n; a++) o[a - 3] = arguments[a];
                if (o.length < e.minArgs) throw new Error("Expected at least ".concat(e.minArgs, " ").concat(g(e.minArgs), " for ").concat(t, "(), got ").concat(o.length));
                if (o.length > e.maxArgs) throw new Error("Expected at most ".concat(e.maxArgs, " ").concat(g(e.maxArgs), " for ").concat(t, "(), got ").concat(o.length));
                return new Promise((function (t, e) {
                  var n = k.bind(null, {
                    resolve: t,
                    reject: e
                  });
                  o.push(n), r.sendMessage.apply(r, o)
                }))
              },
              O = {
                devtools: {
                  network: {
                    onRequestFinished: v(x)
                  }
                },
                runtime: {
                  onMessage: v(w),
                  onMessageExternal: v(w),
                  sendMessage: j.bind(null, "sendMessage", {
                    minArgs: 1,
                    maxArgs: 3
                  })
                },
                tabs: {
                  sendMessage: j.bind(null, "sendMessage", {
                    minArgs: 2,
                    maxArgs: 3
                  })
                }
              },
              S = {
                clear: {
                  minArgs: 1,
                  maxArgs: 1
                },
                get: {
                  minArgs: 1,
                  maxArgs: 1
                },
                set: {
                  minArgs: 1,
                  maxArgs: 1
                }
              };
            return r.privacy = {
              network: {
                "*": S
              },
              services: {
                "*": S
              },
              websites: {
                "*": S
              }
            }, y(t, O, r)
          };
        t.exports = r(chrome)
      } else t.exports = globalThis.browser
    }) ? n.apply(e, o) : n) || (t.exports = a)
  },
  61: function (t, e, r) {
    "use strict";
    r.d(e, "e", (function () {
      return y
    })), r.d(e, "f", (function () {
      return v
    })), r.d(e, "d", (function () {
      return x
    })), r.d(e, "c", (function () {
      return A
    })), r.d(e, "h", (function () {
      return w
    })), r.d(e, "g", (function () {
      return j
    })), r.d(e, "a", (function () {
      return O
    })), r.d(e, "b", (function () {
      return S
    }));
    var n, o = r(2),
      a = r.n(o),
      i = r(4),
      s = r(6),
      c = r.n(s),
      u = new Uint8Array(16);

    function f() {
      if (!n && !(n = "undefined" !== typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" !== typeof msCrypto && "function" === typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      return n(u)
    }
    var l = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
    for (var p = function (t) {
      return "string" === typeof t && l.test(t)
    }, d = [], g = 0; g < 256; ++g) d.push((g + 256).toString(16).substr(1));
    var m = function (t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        r = (d[t[e + 0]] + d[t[e + 1]] + d[t[e + 2]] + d[t[e + 3]] + "-" + d[t[e + 4]] + d[t[e + 5]] + "-" + d[t[e + 6]] + d[t[e + 7]] + "-" + d[t[e + 8]] + d[t[e + 9]] + "-" + d[t[e + 10]] + d[t[e + 11]] + d[t[e + 12]] + d[t[e + 13]] + d[t[e + 14]] + d[t[e + 15]]).toLowerCase();
      if (!p(r)) throw TypeError("Stringified UUID is invalid");
      return r
    };
    var h = function (t, e, r) {
      var n = (t = t || {}).random || (t.rng || f)();
      if (n[6] = 15 & n[6] | 64, n[8] = 63 & n[8] | 128, e) {
        r = r || 0;
        for (var o = 0; o < 16; ++o) e[r + o] = n[o];
        return e
      }
      return m(n)
    },
      b = r(10);

    function y(t) {
      try {
        return new URL(t).hostname
      } catch (e) { }
      return t
    }

    function v(t) {
      var e = c.a.runtime.getURL("html").replace("/html", "").split("://")[0];
      return 0 === t.indexOf(e)
    }
    var x = function (t) {
      return "".concat(t).concat(h())
    },
      A = function (t, e) {
        return '\n  <div class="reader-page">\n    <div>\n      '.concat(e ? '\n      <h1 class="reader-title">'.concat(e.title, '</h1>\n      <div class="reader-metadata"><a href="').concat(e.targetURL, '" target="_blank">').concat(new URL(e.targetURL).hostname, "</a></div>\n      ") : "", "\n      <div>").concat(t, "</div>\n      ").concat(e ? '\n      <p class="reader-footer">\n        <a class="reader-footer-source" href="'.concat(e.targetURL, '" target="_blank"><span class="reader-footer-source-label">\u67e5\u770b\u539f\u7f51\u9875: </span>').concat(new URL(e.targetURL).hostname, " </a>\n      </p>\n      ") : "", "\n    </div>\n  </div>\n  ")
      };

    function w(t) {
      return k.apply(this, arguments)
    }

    function k() {
      return (k = Object(i.a)(a.a.mark((function t(e) {
        return a.a.wrap((function (t) {
          for (; ;) switch (t.prev = t.next) {
            case 0:
              return t.t0 = "", t.next = 3, Object(b.b)();
            case 3:
              return t.t1 = t.sent, t.abrupt("return", t.t0.concat.call(t.t0, t.t1, "/c/filters:no_upscale()?imageUrl=").concat(encodeURIComponent(e)));
            case 5:
            case "end":
              return t.stop()
          }
        }), t)
      })))).apply(this, arguments)
    }

    function j(t) {
      if (!t) return t;
      if (!/^http/.test(t) && /^http/.test(window.location.origin)) {
        var e = window.location.origin;
        t = "".concat(e).concat("/" === t[0] ? "" : "/").concat(t)
      }
      return /^chrome-extension:\/\/.*?\//.test(t) ? (t = t.replace(/^chrome-extension:\/\/.*?\//, ""), Object(i.a)(a.a.mark((function e() {
        return a.a.wrap((function (e) {
          for (; ;) switch (e.prev = e.next) {
            case 0:
              return e.next = 2, c.a.tabs.getCurrent().then((function (e) {
                var r = /^http[s]?:\/\/.*?\//.exec((null === e || void 0 === e ? void 0 : e.url) || "") || "";
                return t = r + t
              }));
            case 2:
              return e.abrupt("return", e.sent);
            case 3:
            case "end":
              return e.stop()
          }
        }), e)
      })))) : t
    }
    var O = ["x.cnki.net", "jingyan.baidu.com"],
      S = ["juejin.cn"]
  },
  72: function (t, e, r) {
    "use strict";

    function n(t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
      }
    }

    function o(t, e, r) {
      return e && n(t.prototype, e), r && n(t, r), t
    }
    r.d(e, "a", (function () {
      return o
    }))
  },
  8: function (t, e, r) {
    "use strict";
    r.d(e, "B", (function () {
      return u
    })), r.d(e, "n", (function () {
      return f
    })), r.d(e, "Q", (function () {
      return l
    })), r.d(e, "y", (function () {
      return p
    })), r.d(e, "P", (function () {
      return d
    })), r.d(e, "V", (function () {
      return g
    })), r.d(e, "S", (function () {
      return m
    })), r.d(e, "w", (function () {
      return h
    })), r.d(e, "x", (function () {
      return b
    })), r.d(e, "v", (function () {
      return y
    })), r.d(e, "u", (function () {
      return v
    })), r.d(e, "D", (function () {
      return x
    })), r.d(e, "i", (function () {
      return A
    })), r.d(e, "e", (function () {
      return w
    })), r.d(e, "f", (function () {
      return k
    })), r.d(e, "d", (function () {
      return j
    })), r.d(e, "c", (function () {
      return O
    })), r.d(e, "p", (function () {
      return S
    })), r.d(e, "o", (function () {
      return E
    })), r.d(e, "h", (function () {
      return _
    })), r.d(e, "M", (function () {
      return P
    })), r.d(e, "I", (function () {
      return C
    })), r.d(e, "H", (function () {
      return T
    })), r.d(e, "J", (function () {
      return R
    })), r.d(e, "O", (function () {
      return L
    })), r.d(e, "N", (function () {
      return N
    })), r.d(e, "eb", (function () {
      return M
    })), r.d(e, "Z", (function () {
      return I
    })), r.d(e, "ab", (function () {
      return U
    })), r.d(e, "Y", (function () {
      return F
    })), r.d(e, "bb", (function () {
      return B
    })), r.d(e, "cb", (function () {
      return D
    })), r.d(e, "db", (function () {
      return q
    })), r.d(e, "k", (function () {
      return W
    })), r.d(e, "l", (function () {
      return H
    })), r.d(e, "j", (function () {
      return z
    })), r.d(e, "m", (function () {
      return G
    })), r.d(e, "b", (function () {
      return V
    })), r.d(e, "T", (function () {
      return J
    })), r.d(e, "U", (function () {
      return $
    })), r.d(e, "q", (function () {
      return X
    })), r.d(e, "E", (function () {
      return Q
    })), r.d(e, "L", (function () {
      return K
    })), r.d(e, "z", (function () {
      return Z
    })), r.d(e, "W", (function () {
      return Y
    })), r.d(e, "X", (function () {
      return tt
    })), r.d(e, "C", (function () {
      return et
    })), r.d(e, "K", (function () {
      return rt
    })), r.d(e, "r", (function () {
      return nt
    })), r.d(e, "A", (function () {
      return ot
    })), r.d(e, "g", (function () {
      return at
    })), r.d(e, "R", (function () {
      return it
    })), r.d(e, "F", (function () {
      return st
    })), r.d(e, "G", (function () {
      return ct
    })), r.d(e, "t", (function () {
      return ut
    })), r.d(e, "s", (function () {
      return ft
    })), r.d(e, "a", (function () {
      return lt
    }));
    var n = r(2),
      o = r.n(n),
      a = r(4),
      i = r(6),
      s = r.n(i),
      c = r(28);
    s.a.storage.local.set({
      action: "send-message"
    });
    var u = "init_window",
      f = "close_window",
      l = "save_selection_by_context_menu",
      p = "flush_cached_card",
      d = "reset_toolbar_icon",
      g = "update_token",
      m = "signin_from_window",
      h = "evaluate_document_start_bg",
      b = "evaluate_document_start_content",
      y = "evaluate_document_end_to_bg",
      v = "evaluate_document_end_from_bg",
      x = "is_saved",
      A = "click_outside",
      w = "basic_evaluate_document_start_bg",
      k = "basic_evaluate_document_start_content",
      j = "basic_evaluate_document_end_to_bg",
      O = "basic_evaluate_document_end_from_bg",
      S = "create_snap_start",
      E = "create_snap_end",
      _ = "clear_badge",
      P = "render_badge",
      C = "load_resource",
      T = "load_failure",
      R = "load_success",
      L = "request_frames",
      N = "reply_frame",
      M = "window_resizer_height",
      I = "window_droppable_rect",
      U = "window_droppable_rect_back",
      F = "window_droppable_active",
      B = "window_droppable_resource",
      D = "window_images",
      q = "window_images_back",
      W = "clipper_droppable_rect",
      H = "clipper_droppable_rect_back",
      z = "clipper_droppable_active",
      G = "clipper_droppable_resource",
      V = "token",
      J = "store_bookmarks",
      $ = "store_clipper_data",
      X = "default_target_folder",
      Q = "last_target_folder",
      K = "region",
      Z = "get_region",
      Y = "visit_history_config_cache",
      tt = "visit_history_config_cache_time",
      et = "is_auto_expand",
      rt = "local_snap_setting",
      nt = "drag_save_setting",
      ot = "helper_btn_save_setting",
      at = "bookmark_need_snap_ids",
      it = {
        ENABLE_SEARCH_ENGINE_INTEGRATION: "enable_search_engine_integration"
      },
      st = function () {
        var t = Object(a.a)(o.a.mark((function t() {
          var e;
          return o.a.wrap((function (t) {
            for (; ;) switch (t.prev = t.next) {
              case 0:
                return t.next = 2, Object(c.b)();
              case 2:
                return e = t.sent, t.abrupt("return", e ? "https://help.cubox.cc" : "https://help.cubox.pro");
              case 4:
              case "end":
                return t.stop()
            }
          }), t)
        })));
        return function () {
          return t.apply(this, arguments)
        }
      }(),
      ct = function () {
        var t = Object(a.a)(o.a.mark((function t() {
          var e;
          return o.a.wrap((function (t) {
            for (; ;) switch (t.prev = t.next) {
              case 0:
                return t.next = 2, Object(c.b)();
              case 2:
                return e = t.sent, t.abrupt("return", e ? "https://help.cubox.cc" : "https://help.cubox.pro/save/5f70/#\u95ee\u9898\u6392\u67e5");
              case 4:
              case "end":
                return t.stop()
            }
          }), t)
        })));
        return function () {
          return t.apply(this, arguments)
        }
      }(),
      ut = "error_code_token",
      ft = "error_code_cookie",
      lt = {
        GET_TMP_COVER: "get_tmp_cover",
        CLEAR_TMP_COVER: "clear_tmp_cover",
        RESIZE_SEARCH_ENGINE_IFRAME: "resize_search_engine_iframe"
      }
  },
  81: function (t, e, r) {
    "use strict";
    r.d(e, "b", (function () {
      return s
    })), r.d(e, "c", (function () {
      return u
    })), r.d(e, "e", (function () {
      return l
    })), r.d(e, "a", (function () {
      return d
    })), r.d(e, "d", (function () {
      return m
    }));
    var n = r(2),
      o = r.n(n),
      a = r(4),
      i = r(10);

    function s() {
      return c.apply(this, arguments)
    }

    function c() {
      return (c = Object(a.a)(o.a.mark((function t() {
        return o.a.wrap((function (t) {
          for (; ;) switch (t.prev = t.next) {
            case 0:
              return t.abrupt("return", i.a.get("/userInfo"));
            case 1:
            case "end":
              return t.stop()
          }
        }), t)
      })))).apply(this, arguments)
    }

    function u() {
      return f.apply(this, arguments)
    }

    function f() {
      return (f = Object(a.a)(o.a.mark((function t() {
        return o.a.wrap((function (t) {
          for (; ;) switch (t.prev = t.next) {
            case 0:
              return t.abrupt("return", i.a.get("/visitHistory/sync/value"));
            case 1:
            case "end":
              return t.stop()
          }
        }), t)
      })))).apply(this, arguments)
    }

    function l(t) {
      return p.apply(this, arguments)
    }

    function p() {
      return (p = Object(a.a)(o.a.mark((function t(e) {
        return o.a.wrap((function (t) {
          for (; ;) switch (t.prev = t.next) {
            case 0:
              return t.abrupt("return", i.a.post("/visitHistory/sync/operator", {
                open: e
              }));
            case 1:
            case "end":
              return t.stop()
          }
        }), t)
      })))).apply(this, arguments)
    }

    function d(t) {
      return g.apply(this, arguments)
    }

    function g() {
      return (g = Object(a.a)(o.a.mark((function t(e) {
        return o.a.wrap((function (t) {
          for (; ;) switch (t.prev = t.next) {
            case 0:
              return t.abrupt("return", i.a.post("/visitHistory/new", e));
            case 1:
            case "end":
              return t.stop()
          }
        }), t)
      })))).apply(this, arguments)
    }

    function m() {
      return h.apply(this, arguments)
    }

    function h() {
      return (h = Object(a.a)(o.a.mark((function t() {
        return o.a.wrap((function (t) {
          for (; ;) switch (t.prev = t.next) {
            case 0:
              return t.abrupt("return", i.a.post("/logout"));
            case 1:
            case "end":
              return t.stop()
          }
        }), t)
      })))).apply(this, arguments)
    }
  },
  90: function (t, e, r) {
    "use strict";
    r.d(e, "a", (function () {
      return o
    }));
    var n = r(112);

    function o(t, e) {
      if (t) {
        if ("string" === typeof t) return Object(n.a)(t, e);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Object(n.a)(t, e) : void 0
      }
    }
  },
  91: function (t, e, r) {
    "use strict";
    r.d(e, "f", (function () {
      return c
    })), r.d(e, "e", (function () {
      return f
    })), r.d(e, "g", (function () {
      return p
    })), r.d(e, "a", (function () {
      return g
    })), r.d(e, "d", (function () {
      return h
    })), r.d(e, "h", (function () {
      return y
    })), r.d(e, "c", (function () {
      return x
    })), r.d(e, "b", (function () {
      return w
    }));
    var n = r(14),
      o = r(2),
      a = r.n(o),
      i = r(4),
      s = r(10);

    function c(t) {
      return u.apply(this, arguments)
    }

    function u() {
      return (u = Object(i.a)(a.a.mark((function t(e) {
        return a.a.wrap((function (t) {
          for (; ;) switch (t.prev = t.next) {
            case 0:
              return t.abrupt("return", s.a.get("/bookmark/exist", {
                params: e
              }));
            case 1:
            case "end":
              return t.stop()
          }
        }), t)
      })))).apply(this, arguments)
    }

    function f(t) {
      return l.apply(this, arguments)
    }

    function l() {
      return (l = Object(i.a)(a.a.mark((function t(e) {
        return a.a.wrap((function (t) {
          for (; ;) switch (t.prev = t.next) {
            case 0:
              return t.abrupt("return", s.a.get("/v2/bookmark/detail", {
                params: e
              }));
            case 1:
            case "end":
              return t.stop()
          }
        }), t)
      })))).apply(this, arguments)
    }

    function p(t) {
      return d.apply(this, arguments)
    }

    function d() {
      return (d = Object(i.a)(a.a.mark((function t(e) {
        return a.a.wrap((function (t) {
          for (; ;) switch (t.prev = t.next) {
            case 0:
              return t.abrupt("return", s.a.post("/v2/search_engine/webInfo", e));
            case 1:
            case "end":
              return t.stop()
          }
        }), t)
      })))).apply(this, arguments)
    }

    function g(t) {
      return m.apply(this, arguments)
    }

    function m() {
      return (m = Object(i.a)(a.a.mark((function t(e) {
        return a.a.wrap((function (t) {
          for (; ;) switch (t.prev = t.next) {
            case 0:
              return e.targetURL && (e.targetURL.indexOf("youtube.com") > -1 || e.targetURL.startsWith("https://www.bilibili.com/video")) && delete e.webContent, t.abrupt("return", s.a.post("/v2/search_engine/new", Object(n.a)(Object(n.a)(Object(n.a)({}, e), e.archiveImgs && {
                archiveImgs: JSON.stringify(e.archiveImgs)
              }), e.tagsStr && {
                tagsStr: e.tagsStr.join(",")
              })));
            case 2:
            case "end":
              return t.stop()
          }
        }), t)
      })))).apply(this, arguments)
    }

    function h(t) {
      return b.apply(this, arguments)
    }

    function b() {
      return (b = Object(i.a)(a.a.mark((function t(e) {
        return a.a.wrap((function (t) {
          for (; ;) switch (t.prev = t.next) {
            case 0:
              return t.abrupt("return", s.a.post("/search_engine/move/".concat(e.bookmarkId, "/toGroup/").concat(e.groupId)));
            case 1:
            case "end":
              return t.stop()
          }
        }), t)
      })))).apply(this, arguments)
    }

    function y(t) {
      return v.apply(this, arguments)
    }

    function v() {
      return (v = Object(i.a)(a.a.mark((function t(e) {
        return a.a.wrap((function (t) {
          for (; ;) switch (t.prev = t.next) {
            case 0:
              return t.abrupt("return", s.a.post("/v3/search_engine/update", Object(n.a)(Object(n.a)({}, e), e.linkedTagNames && {
                linkedTagNames: JSON.stringify(e.linkedTagNames)
              })));
            case 1:
            case "end":
              return t.stop()
          }
        }), t)
      })))).apply(this, arguments)
    }

    function x(t) {
      return A.apply(this, arguments)
    }

    function A() {
      return (A = Object(i.a)(a.a.mark((function t(e) {
        return a.a.wrap((function (t) {
          for (; ;) switch (t.prev = t.next) {
            case 0:
              return t.abrupt("return", s.a.post("/search_engine/delete/".concat(e)));
            case 1:
            case "end":
              return t.stop()
          }
        }), t)
      })))).apply(this, arguments)
    }

    function w(t) {
      return k.apply(this, arguments)
    }

    function k() {
      return (k = Object(i.a)(a.a.mark((function t(e) {
        return a.a.wrap((function (t) {
          for (; ;) switch (t.prev = t.next) {
            case 0:
              return t.abrupt("return", s.a.post("/search_engine/snap/new", Object(n.a)(Object(n.a)({}, e), e.archiveImgs && {
                archiveImgs: JSON.stringify(e.archiveImgs)
              })));
            case 1:
            case "end":
              return t.stop()
          }
        }), t)
      })))).apply(this, arguments)
    }
  },
  96: function (t, e, r) {
    "use strict";
    r.d(e, "a", (function () {
      return m
    }));
    var n = r(2),
      o = r.n(n),
      a = r(4),
      i = r(55),
      s = r.n(i),
      c = r(165),
      u = r.n(c),
      f = r(124),
      l = r.n(f),
      p = r(166),
      d = r.n(p),
      g = r(44);

    function m(t) {
      return h.apply(this, arguments)
    }

    function h() {
      return (h = Object(a.a)(o.a.mark((function t(e) {
        var r, n, a;
        return o.a.wrap((function (t) {
          for (; ;) switch (t.prev = t.next) {
            case 0:
              return r = v(e), n = [b(r, e)], e.timeout && e.timeout > 0 && n.push(new Promise((function (t) {
                setTimeout((function () {
                  var n = e.timeoutErrorMessage ? e.timeoutErrorMessage : "timeout of " + e.timeout + "ms exceeded";
                  t(x(n, e, "ECONNABORTED", r))
                }), e.timeout)
              }))), t.next = 5, Promise.race(n);
            case 5:
              return a = t.sent, t.abrupt("return", new Promise((function (t, r) {
                a instanceof Error ? r(a) : "[object Function]" === Object.prototype.toString.call(e.settle) ? e.settle(t, r, a) : u()(t, r, a)
              })));
            case 7:
            case "end":
              return t.stop()
          }
        }), t)
      })))).apply(this, arguments)
    }

    function b(t, e) {
      return y.apply(this, arguments)
    }

    function y() {
      return (y = Object(a.a)(o.a.mark((function t(e, r) {
        var n, a;
        return o.a.wrap((function (t) {
          for (; ;) switch (t.prev = t.next) {
            case 0:
              return t.prev = 0, t.next = 3, fetch(e);
            case 3:
              n = t.sent, t.next = 9;
              break;
            case 6:
              return t.prev = 6, t.t0 = t.catch(0), t.abrupt("return", x("Network Error", r, "ERR_NETWORK", e));
            case 9:
              if (a = {
                ok: n.ok,
                status: n.status,
                statusText: n.statusText,
                headers: new Headers(n.headers),
                config: r,
                request: e
              }, !(n.status >= 200 && 204 !== n.status)) {
                t.next = 34;
                break
              }
              t.t1 = r.responseType, t.next = "arraybuffer" === t.t1 ? 14 : "blob" === t.t1 ? 18 : "json" === t.t1 ? 22 : "formData" === t.t1 ? 26 : 30;
              break;
            case 14:
              return t.next = 16, n.arrayBuffer();
            case 16:
              return a.data = t.sent, t.abrupt("break", 34);
            case 18:
              return t.next = 20, n.blob();
            case 20:
              return a.data = t.sent, t.abrupt("break", 34);
            case 22:
              return t.next = 24, n.json();
            case 24:
              return a.data = t.sent, t.abrupt("break", 34);
            case 26:
              return t.next = 28, n.formData();
            case 28:
              return a.data = t.sent, t.abrupt("break", 34);
            case 30:
              return t.next = 32, n.text();
            case 32:
              return a.data = t.sent, t.abrupt("break", 34);
            case 34:
              return t.abrupt("return", a);
            case 35:
            case "end":
              return t.stop()
          }
        }), t, null, [
          [0, 6]
        ])
      })))).apply(this, arguments)
    }

    function v(t) {
      var e = new Headers(t.headers);
      if (t.auth) {
        var r = t.auth.username || "",
          n = t.auth.password ? decodeURI(encodeURIComponent(t.auth.password)) : "";
        e.set("Authorization", "Basic ".concat(btoa(r + ":" + n)))
      }
      var o = t.method.toUpperCase(),
        a = {
          headers: e,
          method: o
        };
      "GET" !== o && "HEAD" !== o && (a.body = t.data, Object(g.isFormData)(a.body) && Object(g.isStandardBrowserEnv)() && e.delete("Content-Type")), t.mode && (a.mode = t.mode), t.cache && (a.cache = t.cache), t.integrity && (a.integrity = t.integrity), t.redirect && (a.redirect = t.redirect), t.referrer && (a.referrer = t.referrer), Object(g.isUndefined)(t.withCredentials) || (a.credentials = t.withCredentials ? "include" : "omit");
      var i = d()(t.baseURL, t.url),
        s = l()(i, t.params, t.paramsSerializer);
      return new Request(s, a)
    }

    function x(t, e, r, n, o) {
      return s.a.AxiosError && "function" === typeof s.a.AxiosError ? new s.a.AxiosError(t, s.a.AxiosError[r], e, n, o) : function (t, e, r, n, o) {
        t.config = e, r && (t.code = r);
        return t.request = n, t.response = o, t.isAxiosError = !0, t.toJSON = function () {
          return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: this.config,
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null
          }
        }, t
      }(new Error(t), e, r, n, o)
    }
  },
  97: function (t, e, r) {
    "use strict";
    r.d(e, "g", (function () {
      return l
    })), r.d(e, "f", (function () {
      return p
    })), r.d(e, "c", (function () {
      return d
    })), r.d(e, "e", (function () {
      return g
    })), r.d(e, "d", (function () {
      return m
    })), r.d(e, "a", (function () {
      return h
    })), r.d(e, "b", (function () {
      return b
    }));
    var n = r(2),
      o = r.n(n),
      a = r(4),
      i = r(6),
      s = r.n(i),
      c = r(8),
      u = r(28),
      f = r(10),
      l = function () {
        var t = Object(a.a)(o.a.mark((function t() {
          var e;
          return o.a.wrap((function (t) {
            for (; ;) switch (t.prev = t.next) {
              case 0:
                return t.next = 2, Object(f.b)();
              case 2:
                return e = t.sent, t.abrupt("return", s.a.permissions.contains({
                  permissions: ["cookies"],
                  origins: [e + "/"]
                }));
              case 4:
              case "end":
                return t.stop()
            }
          }), t)
        })));
        return function () {
          return t.apply(this, arguments)
        }
      }(),
      p = function (t, e) {
        new Promise(function () {
          var e = Object(a.a)(o.a.mark((function e(r, n) {
            var i;
            return o.a.wrap((function (e) {
              for (; ;) switch (e.prev = e.next) {
                case 0:
                  return e.next = 2, Object(u.a)();
                case 2:
                  if (e.sent) {
                    e.next = 6;
                    break
                  }
                  return n(c.t), e.abrupt("return");
                case 6:
                  return e.next = 8, Object(f.b)();
                case 8:
                  i = e.sent, s.a.permissions.contains({
                    permissions: ["cookies"],
                    origins: [i + "/"]
                  }).then((function (e) {
                    e ? s.a.cookies.get({
                      name: t,
                      url: i
                    }).then(function () {
                      var t = Object(a.a)(o.a.mark((function t(e) {
                        return o.a.wrap((function (t) {
                          for (; ;) switch (t.prev = t.next) {
                            case 0:
                              e ? r(e.value) : n(c.t);
                            case 1:
                            case "end":
                              return t.stop()
                          }
                        }), t)
                      })));
                      return function (e) {
                        return t.apply(this, arguments)
                      }
                    }()) : n(c.s)
                  }));
                case 10:
                case "end":
                  return e.stop()
              }
            }), e)
          })));
          return function (t, r) {
            return e.apply(this, arguments)
          }
        }()).then((function (t) {
          e(t)
        })).catch((function (t) {
          e(t)
        }))
      },
      d = function () {
        var t = Object(a.a)(o.a.mark((function t() {
          var e;
          return o.a.wrap((function (t) {
            for (; ;) switch (t.prev = t.next) {
              case 0:
                return t.next = 2, Object(u.a)();
              case 2:
                if (t.sent) {
                  t.next = 5;
                  break
                }
                return t.abrupt("return", !1);
              case 5:
                return t.next = 7, Object(f.b)();
              case 7:
                return e = t.sent, t.next = 10, s.a.permissions.contains({
                  permissions: ["cookies"],
                  origins: [e + "/"]
                });
              case 10:
                if (!t.sent) {
                  t.next = 20;
                  break
                }
                return t.next = 14, s.a.cookies.get({
                  name: c.b,
                  url: e
                });
              case 14:
                if (!t.sent) {
                  t.next = 19;
                  break
                }
                return t.abrupt("return", !0);
              case 19:
              case 20:
                return t.abrupt("return", !1);
              case 21:
              case "end":
                return t.stop()
            }
          }), t)
        })));
        return function () {
          return t.apply(this, arguments)
        }
      }(),
      g = function () {
        var t = s.a.runtime.id;
        return "chrome-extension://".concat(t, "/html/options.html")
      },
      m = function () {
        var t = s.a.runtime.id;
        return "chrome-extension://".concat(t, "/html/login.html")
      },
      h = function () {
        var t = s.a.runtime.id;
        return "chrome-extension://".concat(t, "/html/guide.html")
      },
      b = function () {
        return "chrome://extensions/shortcuts"
      }
  },
  98: function (t, e, r) {
    "use strict";
    r.d(e, "b", (function () {
      return u
    })), r.d(e, "c", (function () {
      return l
    })), r.d(e, "a", (function () {
      return d
    })), r.d(e, "d", (function () {
      return m
    })), r.d(e, "g", (function () {
      return b
    })), r.d(e, "f", (function () {
      return v
    })), r.d(e, "e", (function () {
      return A
    })), r.d(e, "h", (function () {
      return k
    }));
    var n = r(14),
      o = r(2),
      a = r.n(o),
      i = r(4),
      s = r(10),
      c = r(131);

    function u(t) {
      return f.apply(this, arguments)
    }

    function f() {
      return (f = Object(i.a)(a.a.mark((function t(e) {
        return a.a.wrap((function (t) {
          for (; ;) switch (t.prev = t.next) {
            case 0:
              return t.abrupt("return", s.a.get("/v2/tag/list", e));
            case 1:
            case "end":
              return t.stop()
          }
        }), t)
      })))).apply(this, arguments)
    }

    function l(t) {
      return p.apply(this, arguments)
    }

    function p() {
      return (p = Object(i.a)(a.a.mark((function t(e) {
        return a.a.wrap((function (t) {
          for (; ;) switch (t.prev = t.next) {
            case 0:
              return t.abrupt("return", Object(s.a)("/tag/update", {
                method: "post",
                data: e
              }));
            case 1:
            case "end":
              return t.stop()
          }
        }), t)
      })))).apply(this, arguments)
    }

    function d(t) {
      return g.apply(this, arguments)
    }

    function g() {
      return (g = Object(i.a)(a.a.mark((function t(e) {
        return a.a.wrap((function (t) {
          for (; ;) switch (t.prev = t.next) {
            case 0:
              return t.abrupt("return", s.a.post("/tag/delete/".concat(e.id)));
            case 1:
            case "end":
              return t.stop()
          }
        }), t)
      })))).apply(this, arguments)
    }

    function m(t) {
      return h.apply(this, arguments)
    }

    function h() {
      return (h = Object(i.a)(a.a.mark((function t(e) {
        return a.a.wrap((function (t) {
          for (; ;) switch (t.prev = t.next) {
            case 0:
              return t.abrupt("return", Object(c.a)(s.a.post("/v2/tag/new", e)));
            case 1:
            case "end":
              return t.stop()
          }
        }), t)
      })))).apply(this, arguments)
    }

    function b(t) {
      return y.apply(this, arguments)
    }

    function y() {
      return (y = Object(i.a)(a.a.mark((function t(e) {
        var r;
        return a.a.wrap((function (t) {
          for (; ;) switch (t.prev = t.next) {
            case 0:
              return r = e.ids.join(","), t.abrupt("return", s.a.post("/tags/delete", Object(n.a)(Object(n.a)({}, e), {}, {
                ids: r
              })));
            case 2:
            case "end":
              return t.stop()
          }
        }), t)
      })))).apply(this, arguments)
    }

    function v(t) {
      return x.apply(this, arguments)
    }

    function x() {
      return (x = Object(i.a)(a.a.mark((function t(e) {
        var r;
        return a.a.wrap((function (t) {
          for (; ;) switch (t.prev = t.next) {
            case 0:
              return r = e.mergeTagIds.join(","), t.abrupt("return", s.a.post("/tag/merge", {
                mergedTagId: e.targetTagId,
                mergeTagIds: r
              }));
            case 2:
            case "end":
              return t.stop()
          }
        }), t)
      })))).apply(this, arguments)
    }

    function A(t) {
      return w.apply(this, arguments)
    }

    function w() {
      return (w = Object(i.a)(a.a.mark((function t(e) {
        return a.a.wrap((function (t) {
          for (; ;) switch (t.prev = t.next) {
            case 0:
              return t.abrupt("return", s.a.get("/tag/use/recent", {
                params: e
              }));
            case 1:
            case "end":
              return t.stop()
          }
        }), t)
      })))).apply(this, arguments)
    }

    function k(t) {
      return j.apply(this, arguments)
    }

    function j() {
      return (j = Object(i.a)(a.a.mark((function t(e) {
        return a.a.wrap((function (t) {
          for (; ;) switch (t.prev = t.next) {
            case 0:
              return t.abrupt("return", s.a.post("/tag/sort", e));
            case 1:
            case "end":
              return t.stop()
          }
        }), t)
      })))).apply(this, arguments)
    }
  }
});