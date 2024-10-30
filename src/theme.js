(async () => {
  for (; !Spicetify.React || !Spicetify.ReactDOM; )
    await new Promise((e) => setTimeout(e, 10));
  var U = Object.create,
    j = Object.defineProperty,
    T = Object.defineProperties,
    D = Object.getOwnPropertyDescriptor,
    $ = Object.getOwnPropertyDescriptors,
    V = Object.getOwnPropertyNames,
    z = Object.getOwnPropertySymbols,
    F = Object.getPrototypeOf,
    H = Object.prototype.hasOwnProperty,
    q = Object.prototype.propertyIsEnumerable,
    G = (e, t, a) =>
      t in e
        ? j(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a })
        : (e[t] = a),
    d = (e, t) => {
      for (var a in (t = t || {})) H.call(t, a) && G(e, a, t[a]);
      if (z) for (var a of z(t)) q.call(t, a) && G(e, a, t[a]);
      return e;
    },
    u = (e, t) => T(e, $(t)),
    W = (e, t) => {
      var a = {};
      for (n in e) H.call(e, n) && t.indexOf(n) < 0 && (a[n] = e[n]);
      if (null != e && z)
        for (var n of z(e)) t.indexOf(n) < 0 && q.call(e, n) && (a[n] = e[n]);
      return a;
    },
    e = (e, t, a) => (
      (a = null != e ? U(F(e)) : {}),
      ((t, a, n, r) => {
        if ((a && "object" == typeof a) || "function" == typeof a)
          for (let e of V(a))
            H.call(t, e) ||
              e === n ||
              j(t, e, {
                get: () => a[e],
                enumerable: !(r = D(a, e)) || r.enumerable,
              });
        return t;
      })(
        !t && e && e.__esModule
          ? a
          : j(a, "default", { value: e, enumerable: !0 }),
        e
      )
    ),
    n = (a = (e, t) =>
      function () {
        return (
          t || (0, e[V(e)[0]])((t = { exports: {} }).exports, t), t.exports
        );
      })({
      "external-global-plugin:react"(e, t) {
        t.exports = Spicetify.React;
      },
    }),
    Z = a({
      "node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js"(
        e
      ) {
        function o(e) {
          for (
            var t = arguments.length, a = new Array(1 < t ? t - 1 : 0), n = 1;
            n < t;
            n++
          )
            a[n - 1] = arguments[n];
          var r = "error",
            l = a,
            i = d.ReactDebugCurrentFrame.getStackAddendum();
          "" !== i && ((e += "%s"), (l = l.concat([i]))),
            (i = l.map(function (e) {
              return String(e);
            })).unshift("Warning: " + e),
            Function.prototype.apply.call(console[r], console, i);
        }
        function s(e) {
          var t = e.getSnapshot,
            e = e.value;
          try {
            var a = t();
            return !u(e, a);
          } catch (e) {
            return 1;
          }
        }
        var c, d, u, g, m, p, f, b, y, t;
        "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
          "function" ==
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart &&
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(
            new Error()
          ),
          (c = n()),
          (d = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED),
          (u =
            "function" == typeof Object.is
              ? Object.is
              : function (e, t) {
                  return (
                    (e === t && (0 !== e || 1 / e == 1 / t)) ||
                    (e != e && t != t)
                  );
                }),
          (g = c.useState),
          (m = c.useEffect),
          (p = c.useLayoutEffect),
          (f = c.useDebugValue),
          (y = b = !1),
          (t = !(
            "undefined" == typeof window ||
            void 0 === window.document ||
            void 0 === window.document.createElement
          )),
          (t =
            void 0 !== c.useSyncExternalStore
              ? c.useSyncExternalStore
              : !t
              ? function (e, t, a) {
                  return t();
                }
              : function (e, t, a) {
                  b ||
                    (void 0 !== c.startTransition &&
                      ((b = !0),
                      o(
                        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
                      )));
                  var n = t(),
                    r =
                      (y ||
                        ((r = t()), u(n, r)) ||
                        (o(
                          "The result of getSnapshot should be cached to avoid an infinite loop"
                        ),
                        (y = !0)),
                      g({ inst: { value: n, getSnapshot: t } })),
                    l = r[0].inst,
                    i = r[1];
                  return (
                    p(
                      function () {
                        (l.value = n),
                          (l.getSnapshot = t),
                          s(l) && i({ inst: l });
                      },
                      [e, n, t]
                    ),
                    m(
                      function () {
                        s(l) && i({ inst: l });
                        return e(function () {
                          s(l) && i({ inst: l });
                        });
                      },
                      [e]
                    ),
                    f(n),
                    n
                  );
                }),
          (e.useSyncExternalStore = t),
          "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" ==
              typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop &&
            __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(
              new Error()
            );
      },
    }),
    J = a({
      "node_modules/use-sync-external-store/shim/index.js"(e, t) {
        t.exports = Z();
      },
    }),
    K = a({
      "node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js"(
        e
      ) {
        var t, a, d, l, u, g, m, p;
        "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
          "function" ==
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart &&
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(
            new Error()
          ),
          (t = n()),
          (a = J()),
          (d =
            "function" == typeof Object.is
              ? Object.is
              : function (e, t) {
                  return (
                    (e === t && (0 !== e || 1 / e == 1 / t)) ||
                    (e != e && t != t)
                  );
                }),
          (l = a.useSyncExternalStore),
          (u = t.useRef),
          (g = t.useEffect),
          (m = t.useMemo),
          (p = t.useDebugValue),
          (e.useSyncExternalStoreWithSelector = function (e, a, i, o, s) {
            var c,
              t = u(null);
            null === t.current
              ? ((c = { hasValue: !1, value: null }), (t.current = c))
              : (c = t.current);
            var n = (t = m(
                function () {
                  var n,
                    r,
                    l = !1,
                    e = function (e) {
                      if (l)
                        return (
                          (t = r),
                          d(n, e) || ((a = o(e)), void 0 !== s && s(t, a))
                            ? t
                            : ((n = e), (r = a))
                        );
                      l = !0;
                      var t = o((n = e));
                      if (void 0 !== s && c.hasValue) {
                        var a = c.value;
                        if (s(a, t)) return (r = a);
                      }
                      return (r = t);
                    },
                    t = void 0 === i ? null : i;
                  return [
                    function () {
                      return e(a());
                    },
                    null === t
                      ? void 0
                      : function () {
                          return e(t());
                        },
                  ];
                },
                [a, i, o, s]
              ))[0],
              r = l(e, n, t[1]);
            return (
              g(
                function () {
                  (c.hasValue = !0), (c.value = r);
                },
                [r]
              ),
              p(r),
              r
            );
          }),
          "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" ==
              typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop &&
            __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(
              new Error()
            );
      },
    }),
    t = a({
      "node_modules/use-sync-external-store/shim/with-selector.js"(e, t) {
        t.exports = K();
      },
    }),
    X = a({
      "node_modules/canvas/lib/parse-font.js"(e, t) {
        var a = `'([^']+)'|"([^"]+)"|[\\w\\s-]+`,
          r = new RegExp("(bold|bolder|lighter|[1-9]00) +", "i"),
          l = new RegExp("(italic|oblique) +", "i"),
          i = new RegExp("(small-caps) +", "i"),
          o = new RegExp(
            "(ultra-condensed|extra-condensed|condensed|semi-condensed|semi-expanded|expanded|extra-expanded|ultra-expanded) +",
            "i"
          ),
          s = new RegExp(
            `([\\d\\.]+)(px|pt|pc|in|cm|mm|%|em|ex|ch|rem|q) *((?:${a})( *, *(?:${a}))*)`
          ),
          c = {};
        t.exports = (e) => {
          if (c[e]) return c[e];
          var t = s.exec(e);
          if (t) {
            var a,
              n = {
                weight: "normal",
                style: "normal",
                stretch: "normal",
                variant: "normal",
                size: parseFloat(t[1]),
                unit: t[2],
                family: t[3].replace(/["']/g, "").replace(/ *, */g, ","),
              },
              t = e.substring(0, t.index);
            switch (
              ((a = r.exec(t)) && (n.weight = a[1]),
              (a = l.exec(t)) && (n.style = a[1]),
              (a = i.exec(t)) && (n.variant = a[1]),
              (a = o.exec(t)) && (n.stretch = a[1]),
              n.unit)
            ) {
              case "pt":
                n.size /= 0.75;
                break;
              case "pc":
                n.size *= 16;
                break;
              case "in":
                n.size *= 96;
                break;
              case "cm":
                n.size *= 96 / 2.54;
                break;
              case "mm":
                n.size *= 96 / 25.4;
                break;
              case "%":
                break;
              case "em":
              case "rem":
                n.size *= 16 / 0.75;
                break;
              case "q":
                n.size *= 96 / 25.4 / 4;
            }
            return (c[e] = n);
          }
        };
      },
    }),
    a = a({
      "node_modules/canvas/browser.js"(e) {
        var t = X();
        (e.parseFont = t),
          (e.createCanvas = function (e, t) {
            return Object.assign(document.createElement("canvas"), {
              width: e,
              height: t,
            });
          }),
          (e.createImageData = function (e, t, a) {
            switch (arguments.length) {
              case 0:
                return new ImageData();
              case 1:
                return new ImageData(e);
              case 2:
                return new ImageData(e, t);
              default:
                return new ImageData(e, t, a);
            }
          }),
          (e.loadImage = function (r, l) {
            return new Promise(function (e, t) {
              let a = Object.assign(document.createElement("img"), l);
              function n() {
                (a.onload = null), (a.onerror = null);
              }
              (a.onload = function () {
                n(), e(a);
              }),
                (a.onerror = function () {
                  n(), t(new Error('Failed to load the image "' + r + '"'));
                }),
                (a.src = r);
            });
          });
      },
    }),
    l = e(n()),
    Q = (0, l.memo)(
      ({
        title: e,
        children: t,
        headingChild: a,
        onClose: n,
        isOpen: r = !1,
      }) =>
        r
          ? l.default.createElement(
              "div",
              { className: "modal-container" },
              l.default.createElement("div", {
                className: "modal-overlay " + (r && "open"),
                style: { zIndex: 20 },
                onClick: n,
              }),
              l.default.createElement(
                "dialog",
                {
                  open: r,
                  className: "modal-section " + (r && "open"),
                  "aria-label": e,
                  "aria-modal": "true",
                },
                l.default.createElement(
                  "div",
                  { className: "main-embedWidgetGenerator-container" },
                  l.default.createElement(
                    "div",
                    { className: "main-trackCreditsModal-header" },
                    l.default.createElement(
                      "h1",
                      { className: "encore-text encore-title-body-medium" },
                      e
                    ),
                    a && l.default.createElement("div", null, a),
                    l.default.createElement(
                      "button",
                      {
                        type: "button",
                        "aria-label": "Close",
                        className: "main-trackCreditsModal-closeBtn",
                        onClick: () => n(),
                      },
                      l.default.createElement(
                        "svg",
                        {
                          width: "18",
                          height: "18",
                          viewBox: "0 0 32 32",
                          xmlns: "http://www.w3.org/2000/svg",
                        },
                        l.default.createElement("title", null, "Close"),
                        l.default.createElement("path", {
                          d: "M31.098 29.794L16.955 15.65 31.097 1.51 29.683.093 15.54 14.237 1.4.094-.016 1.508 14.126 15.65-.016 29.795l1.414 1.414L15.54 17.065l14.144 14.143",
                          fill: "currentColor",
                          "fill-rule": "evenodd",
                        })
                      )
                    )
                  ),
                  l.default.createElement(
                    "div",
                    { className: "modal-contents" },
                    l.default.createElement(
                      "main",
                      { className: "modal-wrapper" },
                      t
                    )
                  )
                )
              )
            )
          : null
    ),
    Y = e(n()),
    P = ({ title: e, description: t, children: a }) =>
      Y.default.createElement(
        "div",
        { className: "setting-section" },
        Y.default.createElement(
          "div",
          { className: "heading-wrapper" },
          Y.default.createElement(
            "h3",
            { className: "title encore-text encore-text-title-small" },
            e
          ),
          t &&
            Y.default.createElement(
              "p",
              { className: "desc encore-text encore-text-body-small" },
              t
            )
        ),
        a
      ),
    ee = [
      { label: "Animated", value: "animated" },
      { label: "Static", value: "static" },
      { label: "Solid", value: "solid" },
    ],
    te = [
      { label: "Compact", value: "compact" },
      { label: "Default", value: "default" },
      { label: "Rounded", value: "rounded" },
    ],
    ae = [
      { label: "Starry", value: "starry" },
      { label: "Default", value: "default" },
      { label: "none", value: "none" },
    ],
    ne = [
      { label: "Now Playing", value: "now-playing" },
      { label: "Playlist Cover", value: "inherit" },
      { label: "none", value: "none" },
    ],
    re = [
      { label: "Card", value: "card" },
      { label: "Compact Card", value: "compact-card" },
      { label: "Compact", value: "compact" },
      { label: "Default", value: "default" },
    ],
    le = [
      { label: "None", value: "none" },
      { label: "Hidden", value: "hidden" },
      { label: "Dotted", value: "dotted" },
      { label: "Dashed", value: "dashed" },
      { label: "Solid", value: "solid" },
      { label: "Double", value: "double" },
      { label: "Groove", value: "groove" },
      { label: "Ridge", value: "ridge" },
      { label: "Inset", value: "inset" },
      { label: "Outset", value: "outset" },
    ],
    ie = [
      { label: "Profile Context Menu", value: "context-menu" },
      { label: "Global Nav", value: "nav" },
    ],
    oe = e(n()),
    se = () =>
      oe.default.createElement(
        "svg",
        {
          role: "img",
          "aria-label": "dismiss",
          width: "24",
          height: "24",
          fill: "none",
          viewBox: "0 0 24 24",
          xmlns: "http://www.w3.org/2000/svg",
        },
        oe.default.createElement("path", {
          d: "m4.21 4.387.083-.094a1 1 0 0 1 1.32-.083l.094.083L12 10.585l6.293-6.292a1 1 0 1 1 1.414 1.414L13.415 12l6.292 6.293a1 1 0 0 1 .083 1.32l-.083.094a1 1 0 0 1-1.32.083l-.094-.083L12 13.415l-6.293 6.292a1 1 0 0 1-1.414-1.414L10.585 12 4.293 5.707a1 1 0 0 1-.083-1.32l.083-.094-.083.094Z",
          fill: "#ffffff",
        })
      ),
    ce = e(n()),
    o = (e) => {
      var {
          variant: t = "primary",
          size: a = "medium",
          icon: n,
          children: r,
        } = e,
        e = W(e, ["variant", "size", "icon", "children"]);
      return ce.default.createElement(
        "button",
        d({ className: `button button-${t} button-` + a }, e),
        n && ce.default.createElement("span", { className: "button-icon" }, n),
        r
      );
    },
    i = e(n()),
    de = 0,
    { ToastContainer: ue, addToast: y } = (() => {
      let a;
      return {
        ToastContainer: () => {
          let [e, r] = (0, i.useState)([]);
          var t = (0, i.useCallback)((t, a = !1) => {
            let n = de++,
              e =
                (r((e) => [
                  ...e,
                  { id: n, message: t, isError: a, exiting: !1 },
                ]),
                setTimeout(() => {
                  l(n);
                }, 3e3));
            return () => clearTimeout(e);
          }, []);
          a = t;
          let l = (t) => {
            r((e) =>
              e.map((e) => (e.id === t ? u(d({}, e), { exiting: !0 }) : e))
            ),
              setTimeout(() => {
                r((e) => e.filter((e) => e.id !== t));
              }, 500);
          };
          return i.default.createElement(
            "div",
            { className: "toast-container" },
            e.map((e) =>
              i.default.createElement(
                "div",
                {
                  key: e.id,
                  className: "toast-element " + (e.exiting ? "toast-exit" : ""),
                  style: {
                    backgroundColor: e.isError
                      ? "rgba(200,20,20,0.5)"
                      : "rgba(20,20,20,0.5)",
                  },
                },
                e.message,
                i.default.createElement(o, {
                  icon: i.default.createElement(se, null),
                  onClick: () => l(e.id),
                })
              )
            )
          );
        },
        addToast: (e, t) => a(e, t),
      };
    })(),
    ge = {},
    me = (e) => {
      let n,
        r = new Set();
      var t = (e, a) => {
          e = "function" == typeof e ? e(n) : e;
          if (!Object.is(e, n)) {
            let t = n;
            (n = (null != a ? a : "object" != typeof e || null === e)
              ? e
              : Object.assign({}, n, e)),
              r.forEach((e) => e(n, t));
          }
        },
        a = () => n,
        l = {
          setState: t,
          getState: a,
          getInitialState: () => i,
          subscribe: (e) => (r.add(e), () => r.delete(e)),
          destroy: () => {
            "production" !== (ge.env ? ge.env.MODE : void 0) &&
              console.warn(
                "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
              ),
              r.clear();
          },
        };
      let i = (n = e(t, a, l));
      return l;
    },
    pe = (e) => (e ? me(e) : me),
    r = e(n(), 1),
    t = e(t(), 1),
    fe = {},
    be = r.default.useDebugValue,
    ye = t.default.useSyncExternalStoreWithSelector,
    ve = !1,
    he = (e) => e,
    Se = (e) => {
      "production" !== (fe.env ? fe.env.MODE : void 0) &&
        "function" != typeof e &&
        console.warn(
          "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
        );
      let n = "function" == typeof e ? pe(e) : e;
      e = (e, t) => {
        return (
          ([e, t = he, a] = [n, e, t]),
          "production" !== (fe.env ? fe.env.MODE : void 0) &&
            a &&
            !ve &&
            (console.warn(
              "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
            ),
            (ve = !0)),
          (e = ye(
            e.subscribe,
            e.getState,
            e.getServerState || e.getInitialState,
            t,
            a
          )),
          be(e),
          e
        );
        var a;
      };
      return Object.assign(e, n), e;
    },
    we = {},
    b = (a) => (e) => {
      try {
        let t = a(e);
        return t instanceof Promise
          ? t
          : {
              then(e) {
                return b(e)(t);
              },
              catch(e) {
                return this;
              },
            };
      } catch (t) {
        return {
          then(e) {
            return this;
          },
          catch(e) {
            return b(e)(t);
          },
        };
      }
    },
    Ee = (m, p) => (a, n, e) => {
      let r = {
          storage: ((e, a) => {
            let n;
            try {
              n = e();
            } catch (e) {
              return;
            }
            return {
              getItem: (e) => {
                var t = (e) =>
                    null === e
                      ? null
                      : JSON.parse(e, null == a ? void 0 : a.reviver),
                  e = null != (e = n.getItem(e)) ? e : null;
                return e instanceof Promise ? e.then(t) : t(e);
              },
              setItem: (e, t) =>
                n.setItem(
                  e,
                  JSON.stringify(t, null == a ? void 0 : a.replacer)
                ),
              removeItem: (e) => n.removeItem(e),
            };
          })(() => localStorage),
          partialize: (e) => e,
          version: 0,
          merge: (e, t) => ({ ...t, ...e }),
          ...p,
        },
        l = !1,
        i = new Set(),
        o = new Set(),
        s = r.storage;
      if (!s)
        return m(
          (...e) => {
            console.warn(
              `[zustand persist middleware] Unable to update item '${r.name}', the given storage is currently unavailable.`
            ),
              a(...e);
          },
          n,
          e
        );
      let c = () => {
          var e = r.partialize({ ...n() });
          return s.setItem(r.name, { state: e, version: r.version });
        },
        d = e.setState,
        u =
          ((e.setState = (e, t) => {
            d(e, t), c();
          }),
          m(
            (...e) => {
              a(...e), c();
            },
            n,
            e
          ));
      e.getInitialState = () => u;
      let g,
        t = () => {
          var e;
          if (s) {
            (l = !1), i.forEach((e) => e(null != (e = n()) ? e : u));
            let t =
              (null == (e = r.onRehydrateStorage)
                ? void 0
                : e.call(r, null != (e = n()) ? e : u)) || void 0;
            return b(s.getItem.bind(s))(r.name)
              .then((e) => {
                if (e) {
                  if ("number" != typeof e.version || e.version === r.version)
                    return [!1, e.state];
                  if (r.migrate) return [!0, r.migrate(e.state, e.version)];
                  console.error(
                    "State loaded from storage couldn't be migrated since no migrate function was provided"
                  );
                }
                return [!1, void 0];
              })
              .then((e) => {
                var [e, t] = e;
                if (((g = r.merge(t, null != (t = n()) ? t : u)), a(g, !0), e))
                  return c();
              })
              .then(() => {
                null != t && t(g, void 0),
                  (g = n()),
                  (l = !0),
                  o.forEach((e) => e(g));
              })
              .catch((e) => {
                null != t && t(void 0, e);
              });
          }
        };
      return (
        (e.persist = {
          setOptions: (e) => {
            (r = { ...r, ...e }), e.storage && (s = e.storage);
          },
          clearStorage: () => {
            null != s && s.removeItem(r.name);
          },
          getOptions: () => r,
          rehydrate: () => t(),
          hasHydrated: () => l,
          onHydrate: (e) => (
            i.add(e),
            () => {
              i.delete(e);
            }
          ),
          onFinishHydration: (e) => (
            o.add(e),
            () => {
              o.delete(e);
            }
          ),
        }),
        r.skipHydration || t(),
        g || u
      );
    },
    ke = { isUseLocalImage: !1, selectedLocalImage: null },
    Re = (r = (e) => (e ? Se(e) : Se))(
      (t = (e, t) => {
        var p, f;
        return "getStorage" in t || "serialize" in t || "deserialize" in t
          ? ("production" !== (we.env ? we.env.MODE : void 0) &&
              console.warn(
                "[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."
              ),
            (p = e),
            (f = t),
            (a, n, e) => {
              let r = {
                  getStorage: () => localStorage,
                  serialize: JSON.stringify,
                  deserialize: JSON.parse,
                  partialize: (e) => e,
                  version: 0,
                  merge: (e, t) => ({ ...t, ...e }),
                  ...f,
                },
                l = !1,
                i = new Set(),
                o = new Set(),
                s;
              try {
                s = r.getStorage();
              } catch (e) {}
              if (!s)
                return p(
                  (...e) => {
                    console.warn(
                      `[zustand persist middleware] Unable to update item '${r.name}', the given storage is currently unavailable.`
                    ),
                      a(...e);
                  },
                  n,
                  e
                );
              let c = b(r.serialize),
                d = () => {
                  var e = r.partialize({ ...n() });
                  let t;
                  e = c({ state: e, version: r.version })
                    .then((e) => s.setItem(r.name, e))
                    .catch((e) => {
                      t = e;
                    });
                  if (t) throw t;
                  return e;
                },
                u = e.setState,
                g =
                  ((e.setState = (e, t) => {
                    u(e, t), d();
                  }),
                  p(
                    (...e) => {
                      a(...e), d();
                    },
                    n,
                    e
                  )),
                m,
                t = () => {
                  var e;
                  if (s) {
                    (l = !1), i.forEach((e) => e(n()));
                    let t =
                      (null == (e = r.onRehydrateStorage)
                        ? void 0
                        : e.call(r, n())) || void 0;
                    return b(s.getItem.bind(s))(r.name)
                      .then((e) => {
                        if (e) return r.deserialize(e);
                      })
                      .then((e) => {
                        if (e)
                          return "number" != typeof e.version ||
                            e.version === r.version
                            ? e.state
                            : r.migrate
                            ? r.migrate(e.state, e.version)
                            : void console.error(
                                "State loaded from storage couldn't be migrated since no migrate function was provided"
                              );
                      })
                      .then(
                        (e) => (
                          (m = r.merge(e, null != (e = n()) ? e : g)),
                          a(m, !0),
                          d()
                        )
                      )
                      .then(() => {
                        null != t && t(m, void 0),
                          (l = !0),
                          o.forEach((e) => e(m));
                      })
                      .catch((e) => {
                        null != t && t(void 0, e);
                      });
                  }
                };
              return (
                (e.persist = {
                  setOptions: (e) => {
                    (r = { ...r, ...e }), e.getStorage && (s = e.getStorage());
                  },
                  clearStorage: () => {
                    null != s && s.removeItem(r.name);
                  },
                  getOptions: () => r,
                  rehydrate: () => t(),
                  hasHydrated: () => l,
                  onHydrate: (e) => (
                    i.add(e),
                    () => {
                      i.delete(e);
                    }
                  ),
                  onFinishHydration: (e) => (
                    o.add(e),
                    () => {
                      o.delete(e);
                    }
                  ),
                }),
                t(),
                m || g
              );
            })
          : Ee(e, t);
      })(
        (t) =>
          u(d({}, ke), {
            setUseLocalImage: (e) => t(() => ({ isUseLocalImage: e })),
            setSelectedLocalImage: (e) => t(() => ({ selectedLocalImage: e })),
            clearSelectedLocalImage: () => t(() => d({}, ke)),
          }),
        { name: "lucid-bg-image" }
      )
    ),
    xe = {
      backgroundSettings: {
        mode: "static",
        styles: {
          solid: { opacity: 1, backgroundColor: "var(--spice-main)" },
          static: {
            blur: 32,
            opacity: 1,
            saturation: 1.1,
            contrast: 1.2,
            brightness: 0.5,
          },
          animated: {
            blur: 32,
            time: 45,
            opacity: 1,
            saturation: 1.1,
            contrast: 1.2,
            brightness: 0.475,
          },
        },
        customBackgroundOverride: { url: null },
      },
      interfaceSettings: {
        controlSettings: { height: 64 },
        fontSettings: {
          body: {
            url: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
            fontFamily: "Poppins",
          },
        },
        grainSettings: { grainEffect: "default" },
        pagesSettings: {
          isScrollMode: !1,
          backgroundImageMode: "inherit",
          playlistViewMode: "card",
        },
        borderSettings: {
          color:
            "rgba(var(--spice-rgb-selected-row, var(--spice-rgb-text)), 0.125)",
          style: "inset",
          thickness: 1,
          roundedRadius: 12,
        },
      },
      colorSettings: { isDynamicColor: !1 },
      playbarSettings: {
        mode: "default",
        styles: {
          compact: {
            height: 64,
            opacity: 1,
            saturation: 1.1,
            contrast: 1.2,
            brightness: 0.8,
            borderRadius: 8,
            backdropBlur: 32,
            paddingX: 6,
            backgroundColor:
              "rgba(var(--spice-rgb-player, var(--spice-rgb-card)), 0.5)",
          },
          default: {
            height: 80,
            opacity: 1,
            paddingX: 6,
            saturation: 1.1,
            contrast: 1.2,
            borderRadius: 8,
            brightness: 0.8,
            backdropBlur: 32,
            backgroundColor:
              "rgba(var(--spice-rgb-player, var(--spice-rgb-card)), 0.5)",
          },
          rounded: {
            height: 80,
            opacity: 1,
            paddingX: 20,
            saturation: 1.1,
            contrast: 1.2,
            borderRadius: 999,
            brightness: 0.8,
            backdropBlur: 32,
            backgroundColor:
              "rgba(var(--spice-rgb-player, var(--spice-rgb-card)), 0.5)",
          },
        },
      },
      settingAccessPosition: "context-menu",
    },
    O = r(
      t(
        (r, t) =>
          u(d({}, xe), {
            exportSettings: () => {
              var e = t();
              return JSON.stringify(e);
            },
            importSettings: (t) => {
              try {
                var e = JSON.parse(t);
                if (
                  "object" == typeof (a = e) &&
                  null !== a &&
                  "backgroundSettings" in a &&
                  "interfaceSettings" in a &&
                  "playbarSettings" in a &&
                  "colorSettings" in a &&
                  "object" == typeof a.backgroundSettings &&
                  "mode" in a.backgroundSettings &&
                  "styles" in a.backgroundSettings &&
                  "object" == typeof a.interfaceSettings &&
                  "borderSettings" in a.interfaceSettings &&
                  "fontSettings" in a.interfaceSettings &&
                  "object" == typeof a.playbarSettings &&
                  "mode" in a.playbarSettings &&
                  "object" == typeof a.colorSettings &&
                  "isDynamicColor" in a.colorSettings
                )
                  return r(e), y("Settings imported successfully!"), !0;
                throw new Error("Invalid settings structure");
              } catch (e) {
                t =
                  e instanceof SyntaxError
                    ? "Failed to parse JSON: Please ensure your input is valid JSON."
                    : e instanceof Error
                    ? e.message
                    : "An unknown error occurred.";
                return y(t, !0), !1;
              }
              var a;
            },
            setBackgroundSettings: (t) =>
              r((e) => ({
                backgroundSettings: d(d({}, e.backgroundSettings), t),
              })),
            setSettingAccessPosition: (e) =>
              r(() => ({ settingAccessPosition: e })),
            setControlHeight: (t) =>
              r((e) => ({
                interfaceSettings: u(d({}, e.interfaceSettings), {
                  controlSettings: { height: t },
                }),
              })),
            setCustomBackgroundOverride: (t) =>
              r((e) => ({
                backgroundSettings: u(d({}, e.backgroundSettings), {
                  customBackgroundOverride: u(
                    d({}, e.backgroundSettings.customBackgroundOverride),
                    { url: t }
                  ),
                }),
              })),
            setBorderColor: (t) =>
              r((e) => ({
                interfaceSettings: u(d({}, e.interfaceSettings), {
                  borderSettings: u(d({}, e.interfaceSettings.borderSettings), {
                    color: t,
                  }),
                }),
              })),
            setBorderStyle: (t) =>
              r((e) => ({
                interfaceSettings: u(d({}, e.interfaceSettings), {
                  borderSettings: u(d({}, e.interfaceSettings.borderSettings), {
                    style: t,
                  }),
                }),
              })),
            setRoundedBorderRadius: (t) =>
              r((e) => ({
                interfaceSettings: u(d({}, e.interfaceSettings), {
                  borderSettings: u(d({}, e.interfaceSettings.borderSettings), {
                    roundedRadius: t,
                  }),
                }),
              })),
            setBorderThickness: (t) =>
              r((e) => ({
                interfaceSettings: u(d({}, e.interfaceSettings), {
                  borderSettings: u(d({}, e.interfaceSettings.borderSettings), {
                    thickness: t,
                  }),
                }),
              })),
            setBackgroundStyles: (t, a) =>
              r((e) => ({
                backgroundSettings: u(d({}, e.backgroundSettings), {
                  styles: u(d({}, e.backgroundSettings.styles), {
                    [a]: d(d({}, e.backgroundSettings.styles[a]), t),
                  }),
                }),
              })),
            setColorSettings: (t) =>
              r((e) => ({ colorSettings: d(d({}, e.colorSettings), t) })),
            setBorderSettings: (t) =>
              r((e) => ({
                interfaceSettings: u(d({}, e.interfaceSettings), {
                  borderSettings: d(
                    d({}, e.interfaceSettings.borderSettings),
                    t
                  ),
                }),
              })),
            setPlaybarSettings: (t) =>
              r((e) => ({ playbarSettings: d(d({}, e.playbarSettings), t) })),
            setInterfaceSettings: (t) =>
              r((e) => ({
                interfaceSettings: d(d({}, e.interfaceSettings), t),
              })),
            setBackgroundMode: (t) =>
              r((e) => ({
                backgroundSettings: u(d({}, e.backgroundSettings), { mode: t }),
              })),
            updateBackgroundStyle: (t, a, n) =>
              r((e) => ({
                backgroundSettings: u(d({}, e.backgroundSettings), {
                  styles: u(d({}, e.backgroundSettings.styles), {
                    [t]: u(d({}, e.backgroundSettings.styles[t]), { [a]: n }),
                  }),
                }),
              })),
            setFont: (t, a) =>
              r((e) => ({
                interfaceSettings: u(d({}, e.interfaceSettings), {
                  fontSettings: u(d({}, e.interfaceSettings.fontSettings), {
                    [t]: d({}, a),
                  }),
                }),
              })),
            setGrainEffect: (t) =>
              r((e) => ({
                interfaceSettings: u(d({}, e.interfaceSettings), {
                  grainSettings: u(d({}, e.interfaceSettings.grainSettings), {
                    grainEffect: t,
                  }),
                }),
              })),
            setIsScrollMode: (t) =>
              r((e) => ({
                interfaceSettings: u(d({}, e.interfaceSettings), {
                  pagesSettings: u(d({}, e.interfaceSettings.pagesSettings), {
                    isScrollMode: t,
                  }),
                }),
              })),
            setPagesBackgroundImageMode: (t) =>
              r((e) => ({
                interfaceSettings: u(d({}, e.interfaceSettings), {
                  pagesSettings: u(d({}, e.interfaceSettings.pagesSettings), {
                    backgroundImageMode: t,
                  }),
                }),
              })),
            setPlaylistViewMode: (t) =>
              r((e) => ({
                interfaceSettings: u(d({}, e.interfaceSettings), {
                  pagesSettings: u(d({}, e.interfaceSettings.pagesSettings), {
                    playlistViewMode: t,
                  }),
                }),
              })),
            setIsDynamicColor: (t) =>
              r((e) => ({
                colorSettings: u(d({}, e.colorSettings), { isDynamicColor: t }),
              })),
            updatePlaybarStyle: (t, a, n) =>
              r((e) => ({
                playbarSettings: u(d({}, e.playbarSettings), {
                  styles: u(d({}, e.playbarSettings.styles), {
                    [t]: u(d({}, e.playbarSettings.styles[t]), { [a]: n }),
                  }),
                }),
              })),
            setPlaybarMode: (t) =>
              r((e) => ({
                playbarSettings: u(d({}, e.playbarSettings), { mode: t }),
              })),
            resetAllSettings: () => {
              r(xe);
            },
          }),
        { name: "lucid-settings" }
      )
    ),
    _e = (e) => {
      try {
        return new URL(e), !0;
      } catch (e) {
        return !1;
      }
    },
    Ce = (e) =>
      decodeURIComponent(
        (null == (e = null == (e = e.match(/family=([^&:]+)/)) ? void 0 : e[1])
          ? void 0
          : e.replace(/\+/g, " ")) || ""
      ) || "",
    Le = (e, a, n) =>
      Object.entries(e[a]).map(([t, e]) => ({
        id: "style-" + a,
        sectionName: "Styles",
        conditionalRender: !0,
        cardProps: {
          title: "Set " + t,
          type: "input",
          settings: d(
            { label: "", defaultValue: e },
            "number" == typeof e
              ? {
                  type: "number",
                  onChange: (e) => {
                    n(a, t, Number(e));
                  },
                  settings: { max: 256, min: 0, step: 0.5 },
                }
              : {
                  type: "text",
                  onChange: (e) => {
                    n(a, t, e);
                  },
                }
          ),
        },
      })),
    Pe = console.log,
    Oe = console.debug,
    Ie = console.error,
    Me = console.warn,
    Ne = {
      prefix: "font-weight: bold; color: #4DB6AC; font-size: 0.85rem;",
      error: "color: #dc3545;",
      warn: "color: #ffc107;",
      debug: "color: #17a2b8;",
      info: "",
    },
    Ae = (e, t, ...a) => {
      var n = { info: Pe, debug: Oe, error: Ie, warn: Me }[e],
        e = Ne[e];
      n("%c[Lucid] %c" + t, Ne.prefix, e, ...a);
    },
    c = (e, ...t) => Ae("info", e, ...t),
    v = (e, ...t) => Ae("debug", e, ...t),
    w = (e, ...t) => Ae("error", e, ...t),
    Be = (e, ...t) => Ae("warn", e, ...t),
    s = e(n()),
    Ue = ({ children: e }) =>
      s.default.createElement(
        "div",
        { className: "tooltip-container" },
        s.default.createElement(
          "div",
          { className: "tooltip" },
          s.default.createElement(
            "span",
            { className: "tooltip-icon" },
            s.default.createElement(
              "svg",
              {
                role: "img",
                "aria-label": "Tooltip icon",
                width: "24",
                height: "24",
                fill: "none",
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg",
              },
              s.default.createElement("path", {
                d: "M12 2c5.523 0 10 4.478 10 10s-4.477 10-10 10S2 17.522 2 12 6.477 2 12 2Zm0 1.667c-4.595 0-8.333 3.738-8.333 8.333 0 4.595 3.738 8.333 8.333 8.333 4.595 0 8.333-3.738 8.333-8.333 0-4.595-3.738-8.333-8.333-8.333ZM12 15.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm0-8.75a2.75 2.75 0 0 1 2.75 2.75c0 1.01-.297 1.574-1.051 2.359l-.169.171c-.622.622-.78.886-.78 1.47a.75.75 0 0 1-1.5 0c0-1.01.297-1.574 1.051-2.359l.169-.171c.622-.622.78-.886.78-1.47a1.25 1.25 0 0 0-2.493-.128l-.007.128a.75.75 0 0 1-1.5 0A2.75 2.75 0 0 1 12 6.75Z",
                fill: "currentColor",
              })
            )
          ),
          s.default.createElement("span", { className: "tooltip-content" }, e)
        )
      ),
    g = e(n()),
    je = ({ title: e, tooltip: t, selectedValue: a }) =>
      g.default.createElement(
        "div",
        { className: "title-container" },
        g.default.createElement(
          "div",
          { className: "title-wrapper" },
          e &&
            g.default.createElement(
              "h5",
              { className: "encore-text encore-text-body-medium-bold" },
              e
            ),
          t && g.default.createElement(Ue, null, t)
        ),
        a &&
          g.default.createElement(
            "p",
            { className: "selected-value" },
            "Selected: ",
            a
          )
      ),
    Te = e(n()),
    De = () =>
      Te.default.createElement(
        "svg",
        {
          role: "img",
          "aria-label": "Arrow Down",
          width: "24",
          height: "24",
          fill: "none",
          viewBox: "0 0 24 24",
          xmlns: "http://www.w3.org/2000/svg",
        },
        Te.default.createElement("path", {
          d: "M4.293 8.293a1 1 0 0 1 1.414 0L12 14.586l6.293-6.293a1 1 0 1 1 1.414 1.414l-7 7a1 1 0 0 1-1.414 0l-7-7a1 1 0 0 1 0-1.414Z",
          fill: "#ffffff",
        })
      ),
    m = e(n()),
    $e = ({
      options: e,
      selectedValue: a,
      onChange: t,
      placeholder: n,
      disabled: r,
    }) => {
      let l = (0, m.useRef)(null),
        [i, o] = (0, m.useState)(!1);
      let s = (e) => {
        o(!1), t(e);
      };
      return (
        (0, m.useEffect)(() => {
          let e = (e) => {
            l.current && !l.current.contains(e.target) && o(!1);
          };
          return (
            document.addEventListener("mousedown", e),
            () => document.removeEventListener("mousedown", e)
          );
        }, []),
        m.default.createElement(
          m.default.Fragment,
          null,
          m.default.createElement(
            "div",
            { className: "dropdown-container", ref: l },
            m.default.createElement(
              "button",
              {
                className: "dropdown-button " + (i ? "open" : ""),
                onClick: () => {
                  o((e) => !e);
                },
                "aria-label": "Toggle dropdown menu",
                type: "button",
              },
              m.default.createElement(
                "p",
                { className: "encore-text" },
                n || a || "Dropdown"
              ),
              m.default.createElement(
                "span",
                { className: "dropdown-arrow" },
                m.default.createElement(De, null)
              )
            ),
            m.default.createElement(
              "div",
              { className: "dropdown-menu " + (i ? "open" : "") },
              i
                ? null == e
                  ? void 0
                  : e.map((t) =>
                      m.default.createElement(
                        "li",
                        {
                          key: t.value,
                          className:
                            "dropdown-item " +
                            (a === t.value ? "selected" : ""),
                          onClick: () => !t.disabled && s(t.value),
                          onKeyDown: (e) =>
                            !t.disabled && "Enter" === e.key && s(t.value),
                          style: { opacity: "" + (r ? 0.75 : 1) },
                        },
                        m.default.createElement(
                          "p",
                          { className: "encore-text" },
                          t.label
                        )
                      )
                    )
                : null
            )
          )
        )
      );
    },
    h = e(n()),
    Ve = (0, h.forwardRef)(
      (
        {
          label: e,
          defaultValue: t,
          onChange: r,
          type: a,
          placeholder: n,
          settings: l,
        },
        i
      ) => {
        let o,
          s,
          c,
          [d, u] = (0, h.useState)(t || null),
          [g, m] = (0, h.useState)(null),
          p = "file" === a,
          f = "number" === a,
          b = (0, h.useMemo)(
            () =>
              ((t, a) => {
                let n = null;
                return (...e) => {
                  n && clearTimeout(n),
                    (n = setTimeout(() => {
                      t(...e);
                    }, a));
                };
              })((e) => {
                p || (null != r && r(e));
              }, 1e3),
            [r]
          );
        t = (0, h.useCallback)(
          (e) => {
            var t, a, n;
            p
              ? ((a = e.target.files), null != r && r(a))
              : f && l
              ? ((a = Number(e.target.value)),
                (t = null != (t = l.max) ? t : 100),
                (n = null != (n = l.min) ? n : 0),
                t < a
                  ? m("Value cannot exceed " + t)
                  : a < n
                  ? m("Value cannot be less than " + n)
                  : m(null),
                (a = Math.min(Math.max(a, n), t).toString()),
                u(a),
                b(a))
              : ((n = e.target.value), u(n), m(null), b(n));
          },
          [b, l]
        );
        return (
          (0, h.useEffect)(() => {
            g && y(g, !0);
          }, [g]),
          h.default.createElement(
            "div",
            { className: "input-container" },
            h.default.createElement(
              "label",
              { "aria-label": e, className: p ? "input" : "label" },
              h.default.createElement("input", {
                "aria-label": e,
                type: a,
                accept: p
                  ? null != (o = null == l ? void 0 : l.accept)
                    ? o
                    : "image/*"
                  : void 0,
                multiple: p
                  ? null != (s = null == l ? void 0 : l.multiple) && s
                  : void 0,
                className: "input encore-text",
                value: null != d ? d : "",
                onChange: t,
                placeholder: n,
                step: f
                  ? null != (c = null == l ? void 0 : l.step)
                    ? c
                    : 1
                  : void 0,
                min: !f || null == l ? void 0 : l.min,
                max: !f || null == l ? void 0 : l.max,
                ref: i,
                style: p ? { display: "none" } : {},
              }),
              p ? "Upload Image" : null
            )
          )
        );
      }
    ),
    ze = e(n()),
    Fe = ({ onChange: e, checked: t, label: a }) =>
      ze.default.createElement(
        "div",
        { className: "slider-wrapper" },
        ze.default.createElement(
          "label",
          { className: "switch", "aria-label": a },
          ze.default.createElement("input", {
            "aria-label": "toggleSwtich",
            type: "checkbox",
            checked: t,
            onChange: () => {
              e(!t);
            },
          }),
          ze.default.createElement("span", { className: "slider round" })
        )
      ),
    p = e(n()),
    He = ({
      title: e,
      tooltip: t,
      selectedValue: a,
      type: n,
      settings: r,
      children: l,
      style: i,
    }) =>
      p.default.createElement(
        "div",
        { className: "card" },
        p.default.createElement(je, { title: e, tooltip: t, selectedValue: a }),
        p.default.createElement(
          "div",
          { className: "children-wrapper", style: i || {} },
          "dropdown" === n && p.default.createElement($e, d({}, r)),
          "input" === n && p.default.createElement(Ve, d({}, r)),
          "toggle" === n && p.default.createElement(Fe, d({}, r)),
          "button" === n && p.default.createElement(o, d({}, r)),
          l
        )
      ),
    qe = e(n()),
    Ge = (e) => {
      var { children: t, className: a } = e,
        e = W(e, ["children", "className"]);
      return qe.default.createElement(
        "div",
        u(d({}, e), { className: "cards-wrapper " + (a || "") }),
        t
      );
    },
    We = e(n()),
    Ze = (e) => {
      var t,
        a,
        n = new Map();
      for (a of e)
        n.has(a.id) || n.set(a.id, []), null != (t = n.get(a.id)) && t.push(a);
      return Array.from(n.entries()).map(([e, t]) => {
        var a;
        return t[0].conditionalRender
          ? We.default.createElement(
              Ge,
              { key: e, id: e, className: e + " combine" },
              null != (a = t[0]) && a.sectionName
                ? We.default.createElement(
                    "label",
                    {
                      "aria-label": null == (a = t[0]) ? void 0 : a.sectionName,
                      htmlFor: e,
                    },
                    null == (a = t[0]) ? void 0 : a.sectionName
                  )
                : null,
              t.map((e) =>
                e.conditionalRender
                  ? We.default.createElement(He, d({ key: e.id }, e.cardProps))
                  : null
              )
            )
          : null;
      });
    },
    S = e(n()),
    Je = () => {
      let {
          backgroundSettings: {
            mode: e,
            styles: t,
            customBackgroundOverride: a,
          },
          colorSettings: { isDynamicColor: n },
          setBackgroundMode: r,
          updateBackgroundStyle: l,
          setIsDynamicColor: i,
          setCustomBackgroundOverride: o,
        } = O(),
        {
          isUseLocalImage: s,
          setUseLocalImage: c,
          clearSelectedLocalImage: d,
          selectedLocalImage: u,
          setSelectedLocalImage: g,
        } = Re(),
        [m, p] = (0, S.useState)(e);
      var f = [
        {
          id: "backgroundOption",
          conditionalRender: !0,
          cardProps: {
            title: "Background Option",
            type: "dropdown",
            tooltip: "Select the background mode to customize your background.",
            settings: {
              placeholder: m,
              selectedValue: m,
              options: ee,
              onChange: (e) => {
                p(e), r(e);
              },
            },
          },
        },
        ...Le(t, e, l),
        {
          id: "backgroundCustomImage",
          sectionName: "Custom Background",
          conditionalRender: "static" === e,
          cardProps: {
            title: "Background image",
            type: "input",
            tooltip: S.default.createElement(
              S.default.Fragment,
              null,
              S.default.createElement(
                "span",
                null,
                "Use a custom URL for the background image."
              ),
              S.default.createElement(
                "span",
                null,
                "Ensure the URL is a valid image link (e.g., .jpg, .png)."
              ),
              S.default.createElement(
                "span",
                null,
                'Use "now-playing" for the now playing art image.'
              ),
              S.default.createElement(
                "span",
                null,
                'Use "current-page" for the current page art image.'
              )
            ),
            settings: {
              type: "text",
              defaultValue: (null == a ? void 0 : a.url) || "",
              label: "Url",
              validation: (e) => _e(e),
              onChange: (e) => {
                o(e);
              },
            },
          },
        },
        {
          id: "backgroundCustomImage",
          conditionalRender: "static" === e,
          cardProps: {
            title: "Use Local Image",
            type: "toggle",
            tooltip: S.default.createElement(
              S.default.Fragment,
              null,
              S.default.createElement(
                "p",
                null,
                "Import an image from your device to use as the background."
              ),
              null != u && u.dataURL
                ? S.default.createElement(
                    "div",
                    null,
                    S.default.createElement("img", {
                      width: "20rem",
                      src: u.dataURL,
                      alt: `${null == u ? void 0 : u.fileName} image`,
                      style: {
                        display: "block",
                        width: "20rem",
                        borderRadius: "0.5rem",
                        border:
                          "var(--border-thickness) var(--border-style, solid) var(--border-color, rgba(var(--spice-rgb-text), 0.125))",
                      },
                    }),
                    null != u && u.fileName
                      ? S.default.createElement(
                          "p",
                          null,
                          "File name: ",
                          S.default.createElement("span", null, u.fileName)
                        )
                      : null,
                    null != u && u.dateAdded
                      ? S.default.createElement(
                          "p",
                          null,
                          "Date Added: ",
                          S.default.createElement("span", null, u.dateAdded)
                        )
                      : null
                  )
                : null
            ),
            settings: {
              checked: s,
              label: "Enable Local Image",
              onChange: (e) => {
                c(e), !1 === e && d();
              },
            },
          },
        },
        {
          id: "backgroundCustomImageInput",
          conditionalRender: "static" === e && s,
          cardProps: {
            title: "Select Background Image",
            type: "input",
            tooltip: "Choose an image file from your device.",
            settings: {
              type: "file",
              label: "Choose File",
              onChange: (e) => {
                let t = null == e ? void 0 : e[0];
                t &&
                  ((e = new FileReader()).readAsDataURL(t),
                  (e.onload = (e) => {
                    e = (null == (e = e.target) ? void 0 : e.result) || "";
                    v("Local Image Data URL:", e),
                      y(
                        S.default.createElement(
                          "div",
                          { style: { display: "flex", alignItems: "center" } },
                          S.default.createElement(
                            "span",
                            { style: { marginRight: "10px" } },
                            "Successfully Added Local Image as background from File name:"
                          ),
                          S.default.createElement(
                            "span",
                            { style: { fontWeight: "bold" } },
                            t.name
                          )
                        )
                      ),
                      g({
                        dataURL: e,
                        fileName: t.name || "",
                        dateAdded: new Date().toLocaleString(),
                      });
                  }));
              },
            },
          },
        },
        {
          id: "dynamicColorToggle",
          conditionalRender: !0,
          cardProps: {
            title: "Dynamic Color",
            type: "toggle",
            tooltip:
              "Enable dynamic color to adjust colors based on current playing album art.",
            settings: {
              checked: n,
              label: "Dynamic Color Toggle",
              onChange: (e) => {
                i(e), e && y("Enabled Dynamic Color.");
              },
            },
          },
        },
      ];
      return S.default.createElement(
        P,
        {
          title: "Background Settings",
          description: "Set your Spotify interface settings.",
        },
        Ze(f)
      );
    },
    f = e(n()),
    Ke = () => {
      let { exportSettings: t, importSettings: a } = O(),
        [e, n] = (0, f.useState)(!1),
        r = (0, f.useRef)(null);
      let l = () => {
        var e = (null == (e = r.current) ? void 0 : e.value.trim()) || "{}";
        "{}" === e ? y("Please enter valid JSON settings.", !0) : a(e);
      };
      return f.default.createElement(
        P,
        {
          title: "Settings Import/Export",
          description: "Manage your settings easily.",
        },
        f.default.createElement(
          Ge,
          null,
          f.default.createElement(
            He,
            {
              title: "Import and Export Settings",
              type: "normal",
              tooltip:
                "Use these buttons to import settings from a JSON file or export your current theme settings to your clipboard.",
              style: { display: "flex", gap: "0.5rem" },
            },
            f.default.createElement(
              o,
              {
                onClick: () => {
                  var e = t();
                  navigator.clipboard
                    .writeText(e)
                    .then(() => {
                      y("Settings exported to clipboard!");
                    })
                    .catch((e) => {
                      w("Failed to copy: ", e),
                        y("Failed to copy settings to clipboard.", !0);
                    });
                },
              },
              "Export"
            ),
            f.default.createElement(
              o,
              {
                onClick: () => {
                  n((e) => !e), e && r.current && (r.current.value = "");
                },
                variant: e ? "danger" : "primary",
              },
              e ? "Cancel Import" : "Import"
            )
          ),
          e &&
            f.default.createElement(
              He,
              {
                title: "Import Settings JSON",
                type: "normal",
                tooltip:
                  "Paste your JSON settings here to import them. Ensure the JSON is correctly formatted.",
                style: { display: "flex", gap: "0.5rem" },
              },
              f.default.createElement(
                o,
                {
                  onClick: async () => {
                    try {
                      var e = await navigator.clipboard.readText();
                      r.current && ((r.current.value = e), l()),
                        y("Clipboard content pasted successfully!");
                    } catch (e) {
                      w("Failed to read clipboard: ", e),
                        y("Failed to read clipboard content.", !0);
                    }
                  },
                },
                "Paste And Import"
              ),
              f.default.createElement(Ve, {
                ref: r,
                type: "text",
                label: "Paste JSON here",
                placeholder: "Paste JSON here",
              }),
              f.default.createElement(o, { onClick: l }, "Import")
            )
        )
      );
    },
    Xe = "1.2.46" <= Spicetify.Platform.version,
    Qe =
      "light" ===
        (null == Spicetify ? void 0 : Spicetify.Config.color_scheme) || !1,
    Ye =
      !(
        !Spicetify.Platform || "Windows" !== Spicetify.Platform.operatingSystem
      ) ||
      (!(
        null ==
          (t = null == (t = Spicetify.Platform) ? void 0 : t.PlatformData) ||
        !t.os_name
      ) &&
        Spicetify.Platform.PlatformData.os_name.toLowerCase().includes("win")),
    et = !(
      !document.querySelector(".globalNav") &&
      !document.querySelector(".Root__globalNav")
    ),
    tt =
      !!document.getElementById("customControls") &&
      (null !=
        (t = document.querySelector(".lucid-transperent-window-controls")) &&
        t.remove(),
      !0),
    I = e(n()),
    at = () => {
      let {
          interfaceSettings: {
            controlSettings: { height: e },
            fontSettings: {
              body: { fontFamily: t },
            },
            grainSettings: { grainEffect: a },
            pagesSettings: {
              isScrollMode: n,
              backgroundImageMode: r,
              playlistViewMode: l,
            },
            borderSettings: {
              color: i,
              style: o,
              thickness: s,
              roundedRadius: c,
            },
          },
          setFont: d,
          setGrainEffect: u,
          setControlHeight: g,
          setPagesBackgroundImageMode: m,
          setPlaylistViewMode: p,
          setIsScrollMode: f,
          setBorderColor: b,
          setBorderStyle: y,
          setBorderThickness: v,
          settingAccessPosition: h,
          setRoundedBorderRadius: S,
          setSettingAccessPosition: w,
        } = O(),
        [E, k] = (0, I.useState)(a),
        [R, x] = (0, I.useState)(r),
        [_, C] = (0, I.useState)(l);
      var L = [
        {
          id: "controlSettings",
          conditionalRender: Ye,
          cardProps: {
            title: "Set Control Height",
            tooltip: "Set the height of your window controls in pixels.",
            type: "input",
            settings: {
              type: "number",
              label: "Enter Control Height",
              defaultValue: e,
              onChange: (e) => {
                g(Number(e));
              },
              settings: { step: 1, min: 0, max: 128 },
            },
          },
        },
        {
          id: "themeSettings",
          conditionalRender: !0,
          cardProps: {
            title: "Settings Access Position",
            tooltip:
              "Choose how to access settings: via the context menu button or a navigation button.",
            type: "dropdown",
            settings: {
              options: ie,
              placeholder: h,
              selectedValue: h,
              onChange: (e) => {
                w(e);
              },
            },
          },
        },
        {
          id: "font",
          conditionalRender: !0,
          cardProps: {
            title: "Font",
            type: "input",
            tooltip: I.default.createElement(
              I.default.Fragment,
              null,
              "Supports both Google Fonts via URL and local fonts.",
              I.default.createElement(
                "span",
                null,
                "For Google Fonts, use the full URL (e.g., https://fonts.googleapis.com/css2?family=Roboto).",
                " "
              ),
              I.default.createElement(
                "span",
                null,
                "For local fonts, type the font family name (e.g., 'Arial')."
              )
            ),
            settings: {
              type: "text",
              label: "Font Family or URL",
              defaultValue: t,
              onChange: (e) => {
                d(
                  "body",
                  ((e) => {
                    let t = "",
                      a = "";
                    return (
                      (t = _e(e) ? ((a = e), Ce(e)) : (a = e)),
                      { url: a, fontFamily: t }
                    );
                  })(e.toString())
                );
              },
            },
          },
        },
        {
          id: "grains",
          conditionalRender: !0,
          cardProps: {
            type: "dropdown",
            title: "Grains",
            tooltip: "Choose a grain texture mode.",
            settings: {
              options: ae,
              placeholder: E,
              selectedValue: E,
              onChange: (e) => {
                k(e), u(e);
              },
            },
          },
        },
        {
          id: "pageSettings",
          sectionName: "Pages Setting",
          conditionalRender: !0,
          cardProps: {
            type: "dropdown",
            title: "Pages Background Image",
            tooltip: "Choose a background image mode for playlist pages.",
            settings: {
              options: ne,
              placeholder: R,
              selectedValue: R,
              onChange: (e) => {
                x(e), m(e);
              },
            },
          },
        },
        {
          id: "pageSettings",
          conditionalRender: !0,
          cardProps: {
            type: "dropdown",
            tooltip: "Sets the view mode for playlists.",
            title: "Playlist View",
            settings: {
              options: re,
              placeholder: _,
              selectedValue: _,
              onChange: (e) => {
                C(e), p(e);
              },
            },
          },
        },
        {
          id: "pageSettings",
          conditionalRender: !0,
          cardProps: {
            title: "Toggle Playlist Scroll Mode",
            tooltip: "Enable or disable scrolling for the playlist art image.",
            type: "toggle",
            settings: {
              checked: n,
              label: "Scroll Mode Toggle",
              onChange: (e) => {
                f(e);
              },
            },
          },
        },
        {
          id: "borderSettings",
          conditionalRender: !0,
          sectionName: "Border Settings",
          cardProps: {
            title: "Border Thickness",
            type: "input",
            settings: {
              type: "number",
              label: "Border Thickness",
              defaultValue: s,
              onChange: (e) => {
                v(Number(e));
              },
              settings: { step: 1, min: 0, max: 8 },
            },
          },
        },
        {
          id: "borderSettings",
          conditionalRender: !0,
          sectionName: "Border Settings",
          cardProps: {
            title: "Rounded Border Radius",
            type: "input",
            settings: {
              type: "number",
              label: "Rounded Border Radius",
              defaultValue: c,
              onChange: (e) => {
                S(Number(e));
              },
              settings: { step: 1, min: 0, max: 999 },
            },
          },
        },
        {
          id: "borderSettings",
          conditionalRender: !0,
          cardProps: {
            title: "Border Color",
            type: "input",
            settings: {
              type: "text",
              label: "Border Color",
              defaultValue: i,
              onChange: (e) => {
                b(e);
              },
            },
          },
        },
        {
          id: "borderSettings",
          conditionalRender: !0,
          cardProps: {
            title: "Border Style",
            type: "dropdown",
            settings: {
              options: le,
              selectedValue: o,
              onChange: (e) => {
                y(e);
              },
            },
          },
        },
      ];
      return I.default.createElement(
        P,
        {
          title: "Interface Settings",
          description: "Set your Spotify interface settings.",
        },
        Ze(L)
      );
    },
    nt = e(n()),
    rt = () => {
      let {
          playbarSettings: { mode: e, styles: t },
          setPlaybarMode: a,
          updatePlaybarStyle: n,
        } = O(),
        [r, l] = (0, nt.useState)(e);
      var i = [
        {
          id: "playbarOption",
          conditionalRender: !0,
          cardProps: {
            title: "Playbar Option",
            type: "dropdown",
            settings: {
              placeholder: r,
              selectedValue: r,
              options: te,
              onChange: (e) => {
                l(e), a(e);
              },
            },
          },
        },
        ...Le(t, e, n),
      ];
      return nt.default.createElement(
        P,
        {
          title: "Playbar Settings",
          description: "Set your Spotify Now Playing Bar settings.",
        },
        Ze(i)
      );
    },
    lt = e(n()),
    it = () => {
      let e = O().resetAllSettings;
      return lt.default.createElement(
        P,
        { title: "Reset Settings", description: "Reset your theme settings." },
        Ze([
          {
            id: "resetButtonCard",
            conditionalRender: !0,
            cardProps: {
              title: "Reset All Settings",
              type: "button",
              settings: {
                variant: "danger",
                size: "medium",
                children: "Reset",
                onClick: () => {
                  window.confirm(
                    "Are you sure you want to reset all settings to their default values? This action cannot be undone."
                  ) && e();
                },
              },
            },
          },
        ])
      );
    },
    E = e(n()),
    ot = { settings: !1, changelog: !1 },
    { ModalContextProvider: st, useModal: ct } = (() => {
      let l = (0, E.createContext)(null);
      return {
        ModalContextProvider: ({ children: e }) => {
          let [a, n] = (0, E.useState)(ot),
            t = (0, E.useCallback)(
              (t) => ({
                isOpen: a[t],
                openModal: (0, E.useCallback)(() => {
                  n((e) => u(d({}, e), { [t]: !0 }));
                }, [t]),
                closeModal: (0, E.useCallback)(() => {
                  n((e) => u(d({}, e), { [t]: !1 }));
                }, [t]),
              }),
              [a]
            );
          var r = (0, E.useMemo)(() => t, [t]);
          return E.default.createElement(l.Provider, { value: r }, e);
        },
        useModal: (e) => {
          var t = (0, E.useContext)(l);
          if (t) return t(e);
          throw new Error("Wrap Element with ModalContextProvider");
        },
      };
    })(),
    k = e(n()),
    dt = (0, k.memo)(() => {
      var { isOpen: e, closeModal: t } = ct("settings");
      return k.default.createElement(
        Q,
        { title: "Lucid Settings", onClose: t, isOpen: e },
        k.default.createElement(
          "div",
          { className: "sections-container" },
          k.default.createElement(Je, null),
          k.default.createElement(at, null),
          k.default.createElement(rt, null),
          k.default.createElement(it, null),
          k.default.createElement(Ke, null)
        )
      );
    }),
    ut = e(n()),
    gt = () => {
      v("hook running useSettingsAccess");
      let t = O().settingAccessPosition,
        a = ct("settings").openModal,
        n = (0, ut.useRef)(null);
      (0, ut.useEffect)(() => {
        var e;
        return (
          "context-menu" === t &&
            ((n.current = new Spicetify.Menu.Item(
              "Lucid Settings",
              !1,
              a,
              '<svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.012 2.25c.734.008 1.465.093 2.182.253a.75.75 0 0 1 .582.649l.17 1.527a1.384 1.384 0 0 0 1.927 1.116l1.401-.615a.75.75 0 0 1 .85.174 9.792 9.792 0 0 1 2.204 3.792.75.75 0 0 1-.271.825l-1.242.916a1.381 1.381 0 0 0 0 2.226l1.243.915a.75.75 0 0 1 .272.826 9.797 9.797 0 0 1-2.204 3.792.75.75 0 0 1-.848.175l-1.407-.617a1.38 1.38 0 0 0-1.926 1.114l-.169 1.526a.75.75 0 0 1-.572.647 9.518 9.518 0 0 1-4.406 0 .75.75 0 0 1-.572-.647l-.168-1.524a1.382 1.382 0 0 0-1.926-1.11l-1.406.616a.75.75 0 0 1-.849-.175 9.798 9.798 0 0 1-2.204-3.796.75.75 0 0 1 .272-.826l1.243-.916a1.38 1.38 0 0 0 0-2.226l-1.243-.914a.75.75 0 0 1-.271-.826 9.793 9.793 0 0 1 2.204-3.792.75.75 0 0 1 .85-.174l1.4.615a1.387 1.387 0 0 0 1.93-1.118l.17-1.526a.75.75 0 0 1 .583-.65c.717-.159 1.45-.243 2.201-.252Zm0 1.5a9.135 9.135 0 0 0-1.354.117l-.109.977A2.886 2.886 0 0 1 6.525 7.17l-.898-.394a8.293 8.293 0 0 0-1.348 2.317l.798.587a2.881 2.881 0 0 1 0 4.643l-.799.588c.32.842.776 1.626 1.348 2.322l.905-.397a2.882 2.882 0 0 1 4.017 2.318l.11.984c.889.15 1.798.15 2.687 0l.11-.984a2.881 2.881 0 0 1 4.018-2.322l.905.396a8.296 8.296 0 0 0 1.347-2.318l-.798-.588a2.881 2.881 0 0 1 0-4.643l.796-.587a8.293 8.293 0 0 0-1.348-2.317l-.896.393a2.884 2.884 0 0 1-4.023-2.324l-.11-.976a8.988 8.988 0 0 0-1.333-.117ZM12 8.25a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5Zm0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" fill="#fff"/></svg>'
            )),
            n.current.register()),
          "nav" !== t ||
            document.querySelector(
              ".main-actionButtons button[aria-label='Lucid Settings']"
            ) ||
            n.current instanceof HTMLButtonElement ||
            ((e = new Spicetify.Topbar.Button(
              "Lucid Settings",
              '<svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.012 2.25c.734.008 1.465.093 2.182.253a.75.75 0 0 1 .582.649l.17 1.527a1.384 1.384 0 0 0 1.927 1.116l1.401-.615a.75.75 0 0 1 .85.174 9.792 9.792 0 0 1 2.204 3.792.75.75 0 0 1-.271.825l-1.242.916a1.381 1.381 0 0 0 0 2.226l1.243.915a.75.75 0 0 1 .272.826 9.797 9.797 0 0 1-2.204 3.792.75.75 0 0 1-.848.175l-1.407-.617a1.38 1.38 0 0 0-1.926 1.114l-.169 1.526a.75.75 0 0 1-.572.647 9.518 9.518 0 0 1-4.406 0 .75.75 0 0 1-.572-.647l-.168-1.524a1.382 1.382 0 0 0-1.926-1.11l-1.406.616a.75.75 0 0 1-.849-.175 9.798 9.798 0 0 1-2.204-3.796.75.75 0 0 1 .272-.826l1.243-.916a1.38 1.38 0 0 0 0-2.226l-1.243-.914a.75.75 0 0 1-.271-.826 9.793 9.793 0 0 1 2.204-3.792.75.75 0 0 1 .85-.174l1.4.615a1.387 1.387 0 0 0 1.93-1.118l.17-1.526a.75.75 0 0 1 .583-.65c.717-.159 1.45-.243 2.201-.252Zm0 1.5a9.135 9.135 0 0 0-1.354.117l-.109.977A2.886 2.886 0 0 1 6.525 7.17l-.898-.394a8.293 8.293 0 0 0-1.348 2.317l.798.587a2.881 2.881 0 0 1 0 4.643l-.799.588c.32.842.776 1.626 1.348 2.322l.905-.397a2.882 2.882 0 0 1 4.017 2.318l.11.984c.889.15 1.798.15 2.687 0l.11-.984a2.881 2.881 0 0 1 4.018-2.322l.905.396a8.296 8.296 0 0 0 1.347-2.318l-.798-.588a2.881 2.881 0 0 1 0-4.643l.796-.587a8.293 8.293 0 0 0-1.348-2.317l-.896.393a2.884 2.884 0 0 1-4.023-2.324l-.11-.976a8.988 8.988 0 0 0-1.333-.117ZM12 8.25a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5Zm0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" fill="currentColor"/></svg>',
              a,
              !1,
              !0
            )),
            (n.current = e)),
          () => {
            var e;
            n.current instanceof Spicetify.Menu.Item && n.current.deregister(),
              n.current instanceof Spicetify.Topbar.Button &&
                n.current.element.remove(),
              null !=
                (e = document.querySelector(
                  ".Root__globalNav .main-actionButtons div:has(button[aria-label='Lucid Settings'])"
                )) && e.remove();
          }
        );
      }, [t, a]);
    },
    mt = e(n()),
    pt = (0, mt.memo)(() => {
      v("Render <SettingsManager />");
      var e = ct("settings").isOpen;
      return (
        gt(),
        mt.default.createElement(
          mt.default.Fragment,
          null,
          e && mt.default.createElement(dt, null)
        )
      );
    }),
    ft = (e, t) => [e, t].filter(Boolean).join(" ").trim(),
    bt = (e) => {
      var t;
      return Object.keys(e).length
        ? ((t = {}),
          void 0 !== e.blur && (t.filter = ft(t.filter, `blur(${e.blur}px)`)),
          void 0 !== e.backdropBlur &&
            (t.backdropFilter = `blur(${e.backdropBlur}px)`),
          void 0 !== e.contrast &&
            (t.filter = ft(t.filter, `contrast(${e.contrast})`)),
          void 0 !== e.brightness &&
            (t.filter = ft(t.filter, `brightness(${e.brightness})`)),
          void 0 !== e.saturation &&
            (t.filter = ft(t.filter, `saturate(${e.saturation})`)),
          void 0 !== e.width && (t.width = e.width + "px"),
          void 0 !== e.height && (t.height = e.height + "px"),
          (void 0 === e.paddingX && void 0 === e.paddingY) ||
            (t.padding = `${e.paddingY || 0}px ${e.paddingX || 0}px`),
          void 0 !== e.borderRadius && (t.borderRadius = e.borderRadius + "px"),
          void 0 !== e.backgroundColor &&
            (t.backgroundColor = "" + e.backgroundColor),
          t)
        : {};
    },
    yt = (e, t = !1) => {
      var a;
      return Object.keys(e).length
        ? ((a = {}),
          void 0 !== e.blur && (a["--blur"] = e.blur + "px"),
          void 0 !== e.backdropBlur &&
            (a["--backdrop-blur"] = e.backdropBlur + "px"),
          void 0 !== e.contrast && (a["--contrast"] = e.contrast),
          void 0 !== e.brightness && (a["--brightness"] = e.brightness),
          void 0 !== e.saturation && (a["--saturation"] = e.saturation),
          void 0 !== e.width && (a["--width"] = e.width + "px"),
          void 0 !== e.height && (a["--height"] = e.height + "px"),
          void 0 !== e.paddingX && (a["--padding-x"] = e.paddingX + "px"),
          void 0 !== e.borderRadius &&
            (a["--border-radius"] = e.borderRadius + "px"),
          void 0 !== e.backgroundColor &&
            (a["--background-color"] = e.backgroundColor),
          void 0 !== e.time && (a["--time"] = e.time + "s"),
          t
            ? Object.entries(a)
                .map(([e, t]) => e + `: ${t};`)
                .join(" ")
            : a)
        : t
        ? ""
        : {};
    },
    vt = e(n()),
    t = ({ style: e }) =>
      vt.default.createElement(
        "div",
        { className: "animated-background-container", style: d({}, yt(e)) },
        vt.default.createElement("div", { className: "back" }),
        vt.default.createElement("div", { className: "backleft" }),
        vt.default.createElement("div", { className: "backright" }),
        vt.default.createElement("div", { className: "front" })
      ),
    ht = e(n()),
    St = ({ style: e }) =>
      ht.default.createElement("div", {
        className: "solid-background",
        style: d({}, bt(e)),
      }),
    wt = {
      underMainBackgroundImage: "",
      pageCategory: "other",
      artworkData: {
        nowPlayingArtURL: "",
        currentPageURI: "",
        currentPageArtURL: "",
      },
      windowZoom: 1,
    },
    R = r((e) =>
      u(d({}, wt), {
        updateArtworkData: (t) =>
          e((e) => u(d({}, e), { artworkData: d(d({}, e.artworkData), t) })),
        setPageCategory: (t) => e((e) => u(d({}, e), { pageCategory: t })),
        setUnderMainViewBackgroundImage: (t) =>
          e((e) => u(d({}, e), { underMainBackgroundImage: t })),
        setIsCustomControls: (t) =>
          e((e) => u(d({}, e), { isCustomControls: t })),
        setWindowZoom: (t) => e((e) => u(d({}, e), { windowZoom: t })),
      })
    ),
    Et = e(n()),
    r = ({ style: e }) => {
      let t = O().backgroundSettings.customBackgroundOverride,
        a = R().artworkData,
        { isUseLocalImage: n, selectedLocalImage: r } = Re();
      var l =
        n && null != r && r.dataURL
          ? r.dataURL
          : "current-page" === (l = t.url)
          ? (null == a ? void 0 : a.currentPageArtURL) ||
            (null == a ? void 0 : a.nowPlayingArtURL) ||
            ""
          : l && "" !== l.trim() && "now-playing" !== l
          ? l || ""
          : (null == a ? void 0 : a.nowPlayingArtURL) || "";
      return Et.default.createElement("div", {
        className: "static-background",
        style: d({ backgroundImage: `url(${l})` }, bt(e)),
      });
    },
    kt = e(n()),
    Rt = { animated: t, static: r, solid: St },
    xt = () => {
      v("Render <BackgroundManager />");
      var { mode: e, styles: t } = O().backgroundSettings,
        t = t[e],
        e = Rt[e];
      return kt.default.createElement(
        "div",
        { className: "background-wrapper" },
        e
          ? kt.default.createElement(e, { style: t })
          : kt.default.createElement(St, {
              style: { backgroundColor: "#202020" },
            })
      );
    },
    _t = () => {
      var e = document.querySelector(
        ".Root__right-sidebar .main-nowPlayingView-nowPlayingWidget .main-image-image"
      );
      return (null == e ? void 0 : e.src) || "";
    },
    Ct = async (e) => {
      let t = 0;
      for (; t <= 3; )
        try {
          var a = await Spicetify.GraphQL.Request(
            {
              name: "queryArtistOverview",
              operation: "query",
              sha256Hash:
                "35648a112beb1794e39ab931365f6ae4a8d45e65396d641eeda94e4003d41497",
              value: null,
            },
            { uri: e, includePrerelease: !0, locale: null }
          );
          if (a) return a;
        } catch (e) {
          if (
            !(
              e instanceof Error &&
              e.message.includes("DUPLICATE_REQUEST_ERROR") &&
              t < 3
            )
          )
            throw (w("Error fetching artist metadata:", e), e);
          t++,
            Be(
              `Duplicate request detected (getArtistMetaData). Retrying in 1 second... (Attempt ${t})`
            ),
            await new Promise((e) => setTimeout(e, 1e3));
        }
    },
    Lt = async (e) => {
      let t = 0;
      for (; t <= 3; )
        try {
          var a = await Spicetify.GraphQL.Request(
            {
              name: "getAlbum",
              operation: "query",
              sha256Hash:
                "469874edcad37b7a379d4f22f0083a49ea3d6ae097916120d9bbe3e36ca79e9d",
              value: null,
            },
            { uri: e, locale: null, offset: 0, limit: 50 }
          );
          if (a) return a;
        } catch (e) {
          if (
            !(
              e instanceof Error &&
              e.message.includes("DUPLICATE_REQUEST_ERROR") &&
              t < 3
            )
          )
            throw (w("Error fetching album metadata:", e), e);
          t++,
            Be(
              `Duplicate request detected (getAlbumMetaData). Retrying in 1 second... (Attempt ${t})`
            ),
            await new Promise((e) => setTimeout(e, 1e3));
        }
    },
    Pt = e(n()),
    Ot = () => {
      v("Render <ArtworkManager />");
      let { pageCategory: e, artworkData: o, updateArtworkData: s } = R(),
        { pagesSettings: t } = O().interfaceSettings,
        a = (0, Pt.useCallback)(async () => {
          var e,
            t,
            a,
            n,
            r,
            l = Spicetify.Platform.History.location.pathname,
            i =
              ((l = l),
              (i = Spicetify.URI.isPlaylistV1OrV2(l)),
              (e = Spicetify.URI.isArtist(l)),
              (t = Spicetify.URI.isAlbum(l)),
              (a = Spicetify.URI.isShow(l)),
              (n = Spicetify.URI.isProfile(l)),
              i || e || t || n || a
                ? (n =
                    null ==
                    (n = l.match(
                      /\/(?:playlist|artist|album|user|show)\/([^/]+)/
                    ))
                      ? void 0
                      : n[1])
                  ? `spotify:${
                      i
                        ? "playlist"
                        : e
                        ? "artist"
                        : t
                        ? "album"
                        : a
                        ? "show"
                        : "user"
                    }:` + n
                  : (Be("No ID found in pathname:", l), null)
                : null);
          if (o.currentPageURI !== i) {
            document.documentElement.style.setProperty(
              "--artwork-opacity",
              "0"
            );
            try {
              i
                ? ((r =
                    (await (async (e) => {
                      var t,
                        a,
                        n,
                        r,
                        l,
                        i,
                        o,
                        s,
                        c,
                        d,
                        u,
                        g,
                        m,
                        p,
                        f,
                        b,
                        y = e.split(":")[1];
                      try {
                        switch (y) {
                          case "playlist":
                          case "show":
                            return (
                              (null ==
                              (t = (
                                await Spicetify.Platform.PlaylistAPI.getMetadata(
                                  e
                                )
                              ).images.find((e) => e.url))
                                ? void 0
                                : t.url) || null
                            );
                          case "artist":
                            var v = await Ct(e);
                            return (
                              (null ==
                              (l =
                                null ==
                                (r =
                                  null ==
                                  (n =
                                    null == (a = v.data)
                                      ? void 0
                                      : a.artistUnion.visuals.headerImage)
                                    ? void 0
                                    : n.sources)
                                  ? void 0
                                  : r[0])
                                ? void 0
                                : l.url) ||
                              (null ==
                              (c =
                                null ==
                                (s =
                                  null ==
                                  (o =
                                    null == (i = v.data)
                                      ? void 0
                                      : i.artistUnion.visuals.avatarImage)
                                    ? void 0
                                    : o.sources)
                                  ? void 0
                                  : s[0])
                                ? void 0
                                : c.url) ||
                              null
                            );
                          case "album":
                            var h = await Lt(e);
                            return (
                              (null ==
                              (g =
                                null ==
                                (u =
                                  null == (d = h.data)
                                    ? void 0
                                    : d.albumUnion.coverArt.sources)
                                  ? void 0
                                  : u[2])
                                ? void 0
                                : g.url) ||
                              (null ==
                              (f =
                                null ==
                                (p =
                                  null == (m = h.data)
                                    ? void 0
                                    : m.albumUnion.coverArt.sources)
                                  ? void 0
                                  : p[0])
                                ? void 0
                                : f.url) ||
                              null
                            );
                          case "user":
                            var S =
                              await Spicetify.Platform.RequestBuilder.build()
                                .withHost(
                                  "https://spclient.wg.spotify.com/user-profile-view/v3"
                                )
                                .withPath("/profile/" + e.split(":")[2])
                                .send();
                            return (
                              (null == (b = null == S ? void 0 : S.body)
                                ? void 0
                                : b.image_url) || null
                            );
                          default:
                            return null;
                        }
                      } catch (e) {
                        return w(`Error fetching artwork for ${y}:`, e), null;
                      }
                    })(i)) || ""),
                  s({ currentPageArtURL: r, currentPageURI: i }))
                : s({ currentPageArtURL: "", currentPageURI: "" });
            } catch (e) {
              w("Error updating artwork:", e),
                s({ currentPageArtURL: "", currentPageURI: "" });
            } finally {
              setTimeout(
                () =>
                  document.documentElement.style.setProperty(
                    "--artwork-opacity",
                    "1"
                  ),
                500
              );
            }
          }
        }, [o.currentPageURI, s]);
      return (
        (0, Pt.useEffect)(() => {
          if (
            (o.currentPageArtURL
              ? (document.documentElement.style.setProperty(
                  "--playlist-art-image",
                  `url(${o.currentPageArtURL})`
                ),
                c("Updated Playlist Artwork URL to " + o.currentPageArtURL))
              : o.currentPageURI &&
                "other" !== e &&
                (w("No artwork URL found for URI: " + o.currentPageURI),
                document.documentElement.style.setProperty(
                  "--playlist-art-image",
                  "none"
                )),
            "inherit" === t.backgroundImageMode)
          ) {
            let e = Spicetify.Platform.History.listen(a);
            return (
              a(),
              () => {
                e();
              }
            );
          }
        }, [
          t.backgroundImageMode,
          o.currentPageArtURL,
          o.currentPageURI,
          e,
          a,
        ]),
        (0, Pt.useEffect)(() => {
          o.nowPlayingArtURL &&
            (document.documentElement.style.setProperty(
              "--now-playing-art-image",
              `url("${o.nowPlayingArtURL}")`
            ),
            c("Updated Now Playing Art View: " + o.nowPlayingArtURL));
        }, [o.nowPlayingArtURL]),
        (0, Pt.useEffect)(() => {
          let e = async () => {
            await (async () => {
              for (
                var e;
                null == (e = null == Spicetify ? void 0 : Spicetify.Player) ||
                !e.data;

              )
                await new Promise((e) => setTimeout(e, 100));
            })();
            var e = await ((e = Spicetify.Player.data.item) && e.metadata
              ? [
                  e.metadata.image_xlarge_url,
                  e.metadata.image_large_url,
                  e.metadata.image_url,
                  e.metadata.image_small_url,
                ].find((e) => e) ||
                _t() ||
                ""
              : (w("No item or metadata found in Spicetify Player data."), ""));
            s({ nowPlayingArtURL: e });
          };
          return (
            e(),
            Spicetify.Player.addEventListener("songchange", e),
            () => {
              Spicetify.Player.removeEventListener("songchange", e);
            }
          );
        }, [s]),
        null
      );
    },
    It = e(n()),
    Mt = () => {
      let { borderSettings: t } = O().interfaceSettings;
      return (
        (0, It.useEffect)(() => {
          e = t;
          var e = Object.keys(e).length
            ? Object.entries(e)
                .map(
                  ([e, t]) =>
                    `--border-${e}: ${
                      "thickness" === e || "roundedRadius" === e ? t + "px" : t
                    };`
                )
                .join(" ")
            : "";
          document.documentElement.style.cssText += e;
        }, [t]),
        null
      );
    },
    Nt = (e, t, a) =>
      "#" + ((e << 16) | (t << 8) | a).toString(16).padStart(6, "0"),
    At = (e, t, a) => {
      var [e, t, a] = [e / 255, t / 255, a / 255],
        [e, t, a] = [
          e <= 0.03928 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4,
          t <= 0.03928 ? t / 12.92 : ((t + 0.055) / 1.055) ** 2.4,
          a <= 0.03928 ? a / 12.92 : ((a + 0.055) / 1.055) ** 2.4,
        ];
      return 0.2126 * e + 0.7152 * t + 0.0722 * a;
    },
    Bt = (e, t) =>
      u(d({}, e), {
        r: Math.max(0, Math.round(e.r * t)),
        g: Math.max(0, Math.round(e.g * t)),
        b: Math.max(0, Math.round(e.b * t)),
        hex: Nt(
          Math.max(0, Math.round(e.r * t)),
          Math.max(0, Math.round(e.g * t)),
          Math.max(0, Math.round(e.b * t))
        ),
      }),
    x = (e, t) =>
      u(d({}, e), {
        r: Math.min(255, Math.round(e.r + (255 - e.r) * t)),
        g: Math.min(255, Math.round(e.g + (255 - e.g) * t)),
        b: Math.min(255, Math.round(e.b + (255 - e.b) * t)),
        hex: Nt(
          Math.min(255, Math.round(e.r + (255 - e.r) * t)),
          Math.min(255, Math.round(e.g + (255 - e.g) * t)),
          Math.min(255, Math.round(e.b + (255 - e.b) * t))
        ),
      }),
    Ut = (e, t) => {
      (e = At(e.r, e.g, e.b)), (t = At(t.r, t.g, t.b));
      return (Math.max(e, t) + 0.05) / (Math.min(e, t) + 0.05);
    },
    jt = e(a()),
    Tt = null;
  async function Dt(s, e, c) {
    return e && c
      ? new Promise((o) => {
          Tt && clearTimeout(Tt),
            (Tt = setTimeout(async () => {
              try {
                var e,
                  t,
                  a,
                  n = await (async (r) => {
                    try {
                      var l = await (0, jt.loadImage)(r),
                        i = Math.max(l.width / 10, 10),
                        o = Math.max(l.height / 10, 10),
                        s = (0, jt.createCanvas)(i, o).getContext("2d"),
                        c =
                          (s.drawImage(l, 0, 0, i, o),
                          s.getImageData(0, 0, i, o)),
                        d = c.data,
                        u = {};
                      let t = {};
                      var g = Math.floor(0.2 * d.length);
                      for (let e = 0; e < g; e += 4) {
                        var m = d[e],
                          p = d[e + 1],
                          f = d[e + 2],
                          b = m + `-${p}-` + f;
                        (u[b] = (u[b] || 0) + 1),
                          (t[b] = { r: m, g: p, b: f, hex: Nt(m, p, f) });
                      }
                      var y = Object.entries(u)
                          .sort((e, t) => t[1] - e[1])
                          .map(([e]) => t[e]),
                        v = y[0];
                      let e = y[1],
                        a = y[2],
                        n = 2;
                      for (; !e || Ut(v, e) < 2.5; ) {
                        if (n >= y.length) {
                          e = x(v, 0.2);
                          break;
                        }
                        (e = y[n]), n++;
                      }
                      for (; !a || Ut(v, a) < 2.5 || Ut(e, a) < 2.5; ) {
                        if (n >= y.length) {
                          a = x(e, 0.2);
                          break;
                        }
                        (a = y[n]), n++;
                      }
                      return {
                        baseColor: v,
                        secondaryColor: e,
                        tertiaryColor: a,
                      };
                    } catch (e) {
                      return w("Error extracting colors: ", e), e;
                    }
                  })(c);
                n instanceof Error
                  ? (w("Error extracting colors: " + n.message), o(null))
                  : ((e =
                      (({
                        baseColor: r,
                        secondaryColor: l,
                        tertiaryColor: i,
                      } = [n][0]),
                      {
                        main: Bt(l, 0.4),
                        sidebar: Bt(l, 0.5),
                        card: Bt(i, 0.5),
                        player: Bt(l, 0.6),
                        "progress-bar": x(l, 0.6),
                        accent: x(r, 0.4),
                        highlight: x(l, 0.2),
                        button: x(i, 0.4),
                        "button-active": x(i, 0.4),
                        text: x(r, 0.9),
                        subtext: x(l, 0.9),
                        primary: r,
                        secondary: l,
                        tertiary: i,
                      })),
                    (t = s),
                    (a = e),
                    (a = `:root {${Object.entries(a)
                      .map(
                        ([e, t]) => `
--spice-${e}: ${t.hex} !important;
--spice-rgb-${e}: ${t.r}, ${t.g}, ${t.b} !important;`
                      )
                      .join("")}
}`),
                    (a +=
                      ":root{\nwill-change: --spice-main,--spice-rgb-main,--spice-sidebar,--spice-rgb-sidebar,--spice-card,--spice-rgb-card,--spice-player,--spice-rgb-player,--spice-accent,--spice-rgb-accent,--spice-highlight,--spice-rgb-highlight,--spice-button,--spice-rgb-button,--spice-button-active,--spice-rgb-button-active,--spice-text,--spice-rgb-text,--spice-progress-bar,--spice-rgb-progress-bar,--spice-subtext,--spice-rgb-subtext,--spice-primary,--spice-rgb-primary,--spice-secondary,--spice-rgb-secondary,--spice-tertiary,--spice-rgb-tertiary;\ntransition: all 0.3s ease-in-out;\n}"),
                    (t.textContent = a),
                    o(n));
              } catch (e) {
                w(
                  "Error saving colors to style: ",
                  e instanceof Error ? e.message : e
                ),
                  o(null);
              }
              var r, l, i;
            }, 200));
        })
      : null;
  }
  var $t = e(n()),
    Vt = () => {
      v("Render <ColorManager />");
      let { isDynamicColor: e } = O().colorSettings,
        t = R().artworkData,
        a = (0, $t.useRef)(null),
        n = (0, $t.useRef)(null);
      return (
        (0, $t.useEffect)(
          () => (
            (a.current = document.createElement("style")),
            (a.current.id = "lucid_dynamic_colors"),
            document.head.appendChild(a.current),
            () => {
              a.current && document.head.removeChild(a.current);
            }
          ),
          []
        ),
        (0, $t.useEffect)(() => {
          e
            ? e &&
              t.nowPlayingArtURL !== n.current &&
              (null != a &&
                a.current &&
                e &&
                t.nowPlayingArtURL &&
                Dt(a.current, e, t.nowPlayingArtURL)
                  .then(() => {
                    c("Dynamic colors updated!");
                  })
                  .catch((e) => {
                    w("Error updating colors:", e);
                  }),
              (n.current = t.nowPlayingArtURL))
            : (n.current && (n.current = null),
              a.current &&
                (async (e) => {
                  e.textContent =
                    ":root{\nwill-change: --spice-main,--spice-rgb-main,--spice-sidebar,--spice-rgb-sidebar,--spice-card,--spice-rgb-card,--spice-player,--spice-rgb-player,--spice-accent,--spice-rgb-accent,--spice-highlight,--spice-rgb-highlight,--spice-button,--spice-rgb-button,--spice-button-active,--spice-rgb-button-active,--spice-text,--spice-rgb-text,--spice-progress-bar,--spice-rgb-progress-bar,--spice-subtext,--spice-rgb-subtext,--spice-primary,--spice-rgb-primary,--spice-secondary,--spice-rgb-secondary,--spice-tertiary,--spice-rgb-tertiary;\ntransition: all 0.3s ease-in-out;\n}";
                })(a.current));
        }, [e, t.nowPlayingArtURL]),
        null
      );
    },
    zt = e(n()),
    Ft = () => {
      v("Render <FontManager />");
      let { fontSettings: e } = O().interfaceSettings,
        r = (0, zt.useCallback)((e, t) => {
          document.documentElement.style.setProperty(`--${e}-font-to-use`, t);
        }, []),
        t = (0, zt.useCallback)(
          async (t) => {
            var { fontFamily: a, url: n } = e[t];
            try {
              await ((e, t) => {
                let a = document.getElementById(t);
                a ||
                  (((a = document.createElement("link")).rel = "stylesheet"),
                  (a.id = t),
                  document.head.appendChild(a)),
                  (a.href = e);
              })(n, t + "-font"),
                r(t, a);
            } catch (e) {
              w("Failed to load font from " + n, e), r(t, a);
            }
          },
          [e, r]
        );
      return (
        (0, zt.useEffect)(() => {
          v("useFontManager effect ran."), Object.keys(e).map((e) => t(e));
        }, [e, t]),
        null
      );
    },
    Ht = e(n()),
    _ = (e) => {
      (0, Ht.useEffect)(() => {
        if (e)
          return (
            document.body.classList.add(e),
            () => {
              document.body.classList.remove(e);
            }
          );
      }, [e]);
    },
    qt = () => (
      v("Render <GlobalNavManager />"),
      _(et ? "global-nav" : "control-nav"),
      null
    ),
    Gt = e(n()),
    Wt = () => {
      v("Render <GrainManager />");
      var {
        grainSettings: { grainEffect: e },
      } = O().interfaceSettings;
      return (
        _("grain-" + e),
        Gt.default.createElement("div", {
          id: "grainEffect",
          "data-grainEffect": e,
        })
      );
    },
    Zt = e(n()),
    Jt = () => {
      let { pageCategory: e, setPageCategory: a } = R();
      return (
        _(e),
        (0, Zt.useEffect)(() => {
          let e = () => {
              var e = Spicetify.Platform.History.location.pathname;
              a(
                ((e = e),
                Spicetify.URI.isPlaylistV1OrV2(e)
                  ? "playlist"
                  : Spicetify.URI.isArtist(e)
                  ? "artist"
                  : Spicetify.URI.isAlbum(e)
                  ? "album"
                  : Spicetify.URI.isGenre(e)
                  ? "genre"
                  : Spicetify.URI.isShow(e)
                  ? "show"
                  : Spicetify.URI.isSearch(e)
                  ? "search"
                  : Spicetify.URI.isProfile(e)
                  ? "profile"
                  : Spicetify.URI.isConcert(e) ||
                    Spicetify.URI.isArtistConcerts(e)
                  ? "concert"
                  : "other")
              );
            },
            t =
              (e(),
              Spicetify.Platform.History.listen(() => {
                e();
              }));
          return () => {
            t();
          };
        }, [a]),
        null
      );
    },
    Kt = e(n()),
    Xt = ".Root__now-playing-bar",
    Qt = () => {
      let r = O().playbarSettings,
        l = (0, Kt.useRef)(document.querySelector(Xt));
      return (
        _("playbar-" + r.mode),
        (0, Kt.useEffect)(() => {
          var e, t, a, n;
          l.current
            ? (({ mode: t, styles: n } = r),
              (a = yt(n[t], !0)),
              (n =
                "compact" === t
                  ? n[t].height
                  : (null == (e = l.current) ? void 0 : e.clientHeight) ||
                    (null == (e = n[t]) ? void 0 : e.height)),
              document.documentElement.style.setProperty(
                "--playbar-height",
                n + "px"
              ),
              (l.current.style.cssText = a.toString()))
            : w(`Playbar element with class '${Xt}' not found!`);
        }, [r]),
        null
      );
    },
    Yt = e(n()),
    ea = () => {
      let { underMainBackgroundImage: a, setUnderMainViewBackgroundImage: n } =
          R(),
        r = (0, Yt.useCallback)(
          (e) => {
            e = e.reduce((e, t) => {
              if (e) return e;
              if ("childList" === t.type && 0 < t.addedNodes.length) {
                e = t.addedNodes[0];
                if (e.firstChild instanceof HTMLDivElement) return e.firstChild;
              }
              return null;
            }, null);
            let t = null;
            null != e && e.style
              ? (t = e.style.backgroundImage.replace(
                  /url\(['"]?([^'"]*)['"]?\)/i,
                  "$1"
                ))
              : null !== a && (t = null),
              n(t);
          },
          [n, a]
        );
      (0, Yt.useEffect)(() => {
        let e = new MutationObserver(r);
        var t = document.querySelector(".under-main-view");
        return t && e.observe(t, { childList: !0 }), () => e.disconnect();
      }, [r]),
        (0, Yt.useEffect)(
          () => (
            document.documentElement.style.setProperty(
              "--under-main-view-art-image",
              a ? `url(${a})` : null
            ),
            () => {
              document.documentElement.style.removeProperty(
                "--under-main-view-art-image"
              );
            }
          ),
          [a]
        );
    },
    C = e(n()),
    ta = () => {
      v("Render <PlaylistViewManager />");
      let {
          pagesSettings: {
            playlistViewMode: e,
            isScrollMode: a,
            backgroundImageMode: t,
          },
        } = O().interfaceSettings,
        { pageCategory: n, underMainBackgroundImage: r, artworkData: l } = R(),
        i = (0, C.useRef)(null),
        o = (0, C.useRef)(null),
        s =
          (_("playlist-view-" + e),
          _("playlist-art-image-" + t),
          _(r ? "under-main-view-present" : ""),
          (0, C.useCallback)(
            (e) => {
              var t = i.current;
              t &&
                ((e = Math.min(e.scrollTop, window.innerHeight)),
                (t.style.transform = `translate3d(0, ${a ? -e : 0}px, 0)`),
                t.style.setProperty("--scroll", "" + e / 1e3));
            },
            [a]
          )),
        c = (0, C.useMemo)(() => ("artist" === n || r ? 0 : 4), [n, r]);
      (0, C.useEffect)(() => {
        var e = o.current;
        e && e.style.setProperty("--blur", c + "px");
      }, [c]),
        (0, C.useEffect)(() => {
          let t = document.querySelector(
            ".Root__main-view .os-viewport, .Root__main-view .main-view-container > .main-view-container__scroll-node:not([data-overlayscrollbars-initialize]), .Root__main-view .main-view-container__scroll-node > [data-overlayscrollbars-viewport]"
          );
          if (t) {
            let e = () => s(t);
            return (
              e(),
              t.addEventListener("scroll", e, { passive: !0 }),
              () => {
                t.removeEventListener("scroll", e);
              }
            );
          }
        }, [s]),
        v("underMainBackgroundImage", r);
      var d =
        "other" !== n && "none" !== t
          ? r ||
            ("inherit" === t
              ? l.currentPageArtURL || ""
              : l.nowPlayingArtURL || "")
          : "none";
      return C.default.createElement(
        "span",
        {
          id: "playlistArtContainer",
          className: `playlist-art-container ${e} ` + t,
          "data-playlist-view-mode": e,
          ref: i,
        },
        C.default.createElement("div", {
          className: "background",
          ref: o,
          style: { backgroundImage: `url(${d})` },
        }),
        C.default.createElement("div", {
          className: "overlay",
          style: {
            height: "100%",
            width: "100%",
            position: "absolute",
            inset: 0,
          },
        })
      );
    },
    aa = e(n()),
    na = () => (
      v("Render <UnderMainViewManager />"),
      (() => {
        let a = (0, aa.useRef)(null);
        (0, aa.useEffect)(() => {
          let e = () => {
              var e, t;
              document.getElementById("lucid-under-main-view") ||
                (((e = document.createElement("div")).id =
                  "lucid-under-main-view"),
                (e.className = "lucid-under-main-view"),
                (t = document.querySelector(".main-view-container")) &&
                  t.prepend(e),
                (a.current = e),
                a.current &&
                  Spicetify.ReactDOM.createRoot(a.current).render(
                    aa.default.createElement(ta, null)
                  ));
            },
            t =
              (e(),
              Spicetify.Platform.History.listen(() => {
                e();
              }));
          return () => {
            t();
          };
        }, []);
      })(),
      ea(),
      null
    ),
    ra = e(n()),
    la = () => {
      var e = (0, ra.useRef)(null);
      let [t, n] = (0, ra.useState)({}),
        r = R().windowZoom,
        {
          controlSettings: { height: l },
        } = O().interfaceSettings;
      return (
        (0, ra.useEffect)(() => {
          let e = () => {
              var e;
              Ye &&
                ((async (t) => {
                  var e;
                  try {
                    null !=
                      (e =
                        null == Spicetify ? void 0 : Spicetify.CosmosAsync) &&
                      e.post &&
                      (await Spicetify.CosmosAsync.post(
                        "sp://messages/v1/container/control",
                        { type: "update_titlebar", height: t }
                      )),
                      c(`Control height set to ${t}px`);
                  } catch (e) {
                    w("Error setting control height: " + t);
                  }
                })(l),
                tt || Qe
                  ? n({})
                  : ((e = (Xe ? 32 : 64) / r),
                    (e = {
                      position: "fixed",
                      right: 0,
                      top:
                        (Xe ? (l / r - Math.min(32 / r, l / r)) / 2 : 0) + "px",
                      height: e + "px",
                      width: 135 / r + "px",
                      WebkitBackdropFilter: "brightness(2.12)",
                      backdropFilter: "brightness(2.12)",
                      zIndex:
                        "var(--above-main-and-now-playing-view-grid-area, 6)",
                    }),
                    n(e)));
            },
            t =
              (e(),
              () => {
                e();
              }),
            a = setTimeout(e, 1e3);
          return (
            window.addEventListener("resize", t),
            () => {
              clearTimeout(a), window.removeEventListener("resize", t);
            }
          );
        }, [r, l]),
        ra.default.createElement("div", { ref: e, style: t })
      );
    },
    ia = e(n()),
    oa = (0, ia.memo)(() =>
      ia.default.createElement(
        ia.default.Fragment,
        null,
        Ye
          ? ia.default.createElement(
              "div",
              {
                id: "transperent-controls-container",
                className: "transperent-controls-container",
                style: { containerType: "normal" },
              },
              !tt && Ye ? ia.default.createElement(la, null) : null
            )
          : null
      )
    ),
    L = e(n()),
    M = e(n()),
    sa = () => {
      (0, M.useRef)({
        outerWidth: window.outerWidth,
        innerWidth: window.innerWidth,
        ratio: window.devicePixelRatio,
      });
      let r = R().setWindowZoom,
        l = (0, M.useRef)(window.outerWidth),
        i = (0, M.useRef)(window.innerWidth),
        o = (0, M.useRef)(window.devicePixelRatio),
        s = (0, M.useRef)(!0),
        c = (0, M.useRef)(document.querySelector(".Root__main-view"));
      return (
        (0, M.useEffect)(() => {
          let e = () => {
              document.documentElement.style.setProperty(
                "--main-view-height",
                `${null == (t = c.current) ? void 0 : t.clientHeight}px`
              );
              var e,
                t = window.outerWidth,
                a = window.innerWidth,
                n = window.devicePixelRatio;
              (s.current ||
                ((l.current <= 160 || o.current !== n) &&
                  (l.current !== t || i.current !== a))) &&
                ((e = t / a || 1),
                r(e),
                document.documentElement.style.setProperty("--zoom", "" + e),
                v(`Zoom Updated: ${t} / ${a} = ` + e),
                (l.current = t),
                (i.current = a),
                (o.current = n));
            },
            t = () => {
              e();
            };
          return (
            e(),
            window.addEventListener("resize", t),
            () => {
              window.removeEventListener("resize", t);
            }
          );
        }, [r]),
        null
      );
    },
    ca = () => (
      v("Render <MainStateManager />"),
      L.default.createElement(
        L.default.Fragment,
        null,
        L.default.createElement(Jt, null),
        L.default.createElement(Wt, null),
        L.default.createElement(Vt, null),
        L.default.createElement(sa, null),
        L.default.createElement(Qt, null),
        L.default.createElement(Ot, null),
        L.default.createElement(Mt, null),
        L.default.createElement(qt, null),
        L.default.createElement(Ft, null),
        L.default.createElement(na, null),
        L.default.createElement(oa, null)
      )
    );
  function da(e, t) {
    e.innerHTML = `
    #lucid-main .background-container .background-wrapper div { z-index: ${t} !important; }
  `;
  }
  function ua(e) {
    e.innerHTML = `
    #lucid-main .background-container .background-wrapper div { z-index: -1 !important; }
  `;
  }
  function ga(t, a, n, r) {
    let l = !1,
      i = null;
    new MutationObserver(() => {
      var e = t.querySelector(a);
      e !== i &&
        (e && !l
          ? (c("Applying background z-index: " + r), (l = !0), da(n, r))
          : l &&
            (c("Removing background z-index: " + r),
            (l = !1),
            document.querySelector(
              "#lyrics-cinema .lyrics-lyrics-background, #lyrics-cinema .lyrics-lyrics-container"
            )
              ? da(n, 5)
              : ua(n)),
        (i = e));
    }).observe(t, { childList: !0 }),
      ua(n);
  }
  var N = e(n()),
    A = e(n()),
    B = e(n()),
    ma = ({ releases: e, isLoading: t, error: a }) =>
      t
        ? B.default.createElement("div", null, "Loading release data...")
        : a
        ? B.default.createElement(
            "div",
            null,
            "Error fetching release data: ",
            a.message
          )
        : e
        ? B.default.createElement(
            "div",
            { className: "lucid-changelog", id: "lucid-changelog" },
            e.map((e) =>
              B.default.createElement(
                "div",
                { key: e.tag_name, className: "release" },
                B.default.createElement(
                  "button",
                  {
                    className: "release-button",
                    type: "button",
                    onClick: () => window.open(e.html_url, "_blank"),
                  },
                  "View on GitHub"
                ),
                e.body &&
                  B.default.createElement("div", {
                    className: "release-content",
                    dangerouslySetInnerHTML: { __html: e.body },
                  })
              )
            )
          )
        : B.default.createElement("div", null, "No release data found."),
    pa = e(n()),
    fa = ({ currentVersion: e }) => {
      let [t, r] = A.default.useState({
          isLoading: !0,
          error: null,
          releases: null,
        }),
        [l, a] = ((t, a) => {
          let [e, n] = (0, pa.useState)(() => {
            var e;
            return "undefined" != typeof window &&
              (e = window.localStorage.getItem(t))
              ? JSON.parse(e)
              : a;
          });
          return (
            (0, pa.useEffect)(() => {
              "undefined" != typeof window &&
                window.localStorage.setItem(t, JSON.stringify(e));
            }, [t, e]),
            [e, n]
          );
        })("lucid:previousVersion", null),
        { closeModal: n, isOpen: i, openModal: o } = ct("changelog"),
        s = async () => {
          v("Fetching release data..."),
            r((e) => u(d({}, e), { isLoading: !0 }));
          try {
            var e = await fetch(
              "https://api.github.com/repos/sanoojes/spicetify-lucid/releases"
            );
            if (!e.ok) throw new Error("HTTP error! status: " + e.status);
            var t = await e.json(),
              a =
                (v("Fetched release data:", t),
                await Promise.all(
                  t.map(async (e) =>
                    u(d({}, e), {
                      body:
                        (await (async (e, t, a) => {
                          try {
                            var n = {
                                text: e,
                                context: t + "/" + a,
                                mode: "gfm",
                              },
                              r = await fetch(
                                "https://api.github.com/markdown",
                                { method: "POST", body: JSON.stringify(n) }
                              );
                            if (r.ok) return await r.text();
                            throw new Error("HTTP error! status: " + r.status);
                          } catch (e) {
                            return w("Error parsing markdown:", e), null;
                          }
                        })(e.body, "sanoojes", "spicetify-lucid")) || "",
                    })
                  )
                )),
              n =
                (r({ isLoading: !1, error: null, releases: a }), t[0].tag_name);
            (null !== l && n === l) ||
              (console.log(
                "Opening changelog modal because new version detected"
              ),
              o());
          } catch (t) {
            r((e) =>
              u(d({}, e), {
                isLoading: !1,
                error: t instanceof Error ? t : new Error("Unknown error"),
              })
            ),
              w("Error fetching release data:", t);
          }
        };
      A.default.useEffect(() => {
        s();
      }, []);
      var c = A.default.useCallback(() => {
        n();
        var e =
          null == (e = null == (e = t.releases) ? void 0 : e[0])
            ? void 0
            : e.tag_name;
        e && a(e);
      }, [n, t.releases, a]);
      return A.default.createElement(
        A.default.Fragment,
        null,
        A.default.createElement(
          Q,
          { title: "Lucid Changelog", onClose: c, isOpen: i },
          A.default.createElement(ma, {
            releases: t.releases,
            isLoading: t.isLoading,
            error: t.error,
            currentVersion: e,
          })
        )
      );
    },
    ba = () => (
      v("Render <Main />"),
      (0, N.useEffect)(() => {
        (() => {
          var n = Spicetify.Locale;
          function r(e) {
            return e.replace(/[{0}{1}«»”“]/g, "").trim();
          }
          if (n) {
            r(n.get("playlist.a11y.play") || ""),
              r(n.get("playlist.a11y.pause") || "");
            var l = n.get("play"),
              i = n.get("pause"),
              o = n.get("browse"),
              s = n.get("playback-control.skip-forward"),
              c = n.get("playback-control.skip-back"),
              d = n.get("tracklist.a11y.play") || "",
              u = n.get("view.web-player-home"),
              g = n.get("upgrade.tooltip.title") || "Upgrade to Premium";
            let e, t;
            ["zh-CN", "zh-TW", "am", "fi"].includes(n.getLocale())
              ? ([e, t] = d.split("{1}"))
              : ([e, t] = d.split("{0}")),
              (e = r(e)),
              (t = r(t));
            var d = n.get("playback-control.enable-repeat"),
              m = n.get("playback-control.enable-repeat-one"),
              n = n.get("playback-control.disable-repeat"),
              p = "lucid_button_styles";
            let a = document.getElementById(p);
            a ||
              (((a = document.createElement("style")).id = p),
              document.head.appendChild(a)),
              (a.innerHTML = `
.Root__globalNav button[aria-label="${g}"],
.Root__globalNav button[title="${g}"] {
  display: none !important;
}

.main-repeatButton-button[aria-checked="false"],
.player-controls__right button[aria-label*="${d}"]  span{
  -webkit-mask-image: var(--repeat-off-icon, url("https://cdn.jsdelivr.net/gh/sanoojes/Spicetify-Lucid@refs/heads/main/assets/icons/repeat-off.svg"));
  mask-image: var(--repeat-off-icon, url("https://cdn.jsdelivr.net/gh/sanoojes/Spicetify-Lucid@refs/heads/main/assets/icons/repeat-off.svg"));
  background-color: var(--spice-subtext);
  mask-size: contain;
}

.main-repeatButton-button[aria-checked="mixed"],
.player-controls__right button[aria-label*="${n}"] span {
  -webkit-mask-image: var(--repeat-mixed-icon, url("https://cdn.jsdelivr.net/gh/sanoojes/Spicetify-Lucid@refs/heads/main/assets/icons/repeat-mixed.svg"));
  mask-image: var(--repeat-mixed-icon, url("https://cdn.jsdelivr.net/gh/sanoojes/Spicetify-Lucid@refs/heads/main/assets/icons/repeat-mixed.svg"));
  background-color: var(--spice-accent);
  mask-size: contain;
}

.main-repeatButton-button[aria-checked="true"],
.player-controls__right button[aria-label*="${m}"] span {
  -webkit-mask-image: var(--repeat-icon, url("https://cdn.jsdelivr.net/gh/sanoojes/Spicetify-Lucid@refs/heads/main/assets/icons/repeat.svg"));
  mask-image: var(--repeat-icon, url("https://cdn.jsdelivr.net/gh/sanoojes/Spicetify-Lucid@refs/heads/main/assets/icons/repeat.svg"));
  background-color: var(--spice-accent);
  mask-size: contain;
}

.player-controls__right button[aria-label*="${n}"] svg,
.player-controls__right button[aria-label*="${d}"] svg {
  transform: scale(1.15);
}

.player-controls__right button[aria-label*="${n}"] svg,
.player-controls__right button[aria-label*="${d}"] svg {
  visibility: hidden;
  opacity: 0;
}

.main-repeatButton-button {
  transform: scale(0.65) !important;
}

.player-controls__right, 
.player-controls__left {
    align-items: center;
}

.player-controls__buttons>button[aria-label*="${l}"] span,
.main-playButton-button[aria-label*="${l}"],
.main-playButton-PlayButton>button[aria-label*="${l}"]{
  background-color: var(--spice-text) !important;
  -webkit-mask-image: var(--play-icon, url("https://cdn.jsdelivr.net/gh/sanoojes/Spicetify-Lucid@refs/heads/main/assets/icons/play.svg")) !important;
  mask-image: var(--play-icon, url("https://cdn.jsdelivr.net/gh/sanoojes/Spicetify-Lucid@refs/heads/main/assets/icons/play.svg")) !important;
}

.main-playButton-button[aria-label*="${i}"],
.main-playButton-PlayButton>button[aria-label*="${i}"],
.main-playPauseButton-button[aria-label*="${i}"],
.player-controls__buttons>button[aria-label*="${i}"] span {
  background-color: var(--spice-text) !important;
  -webkit-mask-image: var(--pause-icon, url("https://cdn.jsdelivr.net/gh/sanoojes/Spicetify-Lucid@refs/heads/main/assets/icons/pause.svg")) !important;
  mask-image: var(--pause-icon, url("https://cdn.jsdelivr.net/gh/sanoojes/Spicetify-Lucid@refs/heads/main/assets/icons/pause.svg")) !important;
}

.Root__globalNav button:is([aria-label="Clear search field"]) {
  background-color: transparent !important;
  border: none !important;
}

button[aria-label="${o}"] path {
  display: none !important;
}

button[aria-label="${o}"] svg {
  -webkit-mask-size: contain;
  mask-size: contain;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-image: var(--compass-outline-icon, url("https://cdn.jsdelivr.net/gh/sanoojes/Spicetify-Lucid@refs/heads/main/assets/icons/compass-outline.svg"));
  mask-image: var(--compass-outline-icon, url("https://cdn.jsdelivr.net/gh/sanoojes/Spicetify-Lucid@refs/heads/main/assets/icons/compass-outline.svg"));
  background-color: var(--spice-subtext) !important;
  scale: 1.25;
}

.main-repeatButton-button[aria-label="${d}"],
.main-repeatButton-button[aria-label="${n}"],
.main-repeatButton-button[aria-label="${m}"],
{
scale: 0.75 !important;
background-color: var(--spice-subtext) !important;
color: var(--spice-subtext);

svg {
  display: none;
}
}

.player-controls__buttons>button[aria-label*="${l}"] span,
.player-controls__buttons>button[aria-label*="${i}"] span{
  display: block;
  mask-size: 100%;
  -webkit-mask-position: center center;
  mask-position: center center;
  background-color: var(--spice-subtext);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: cover;
  mask-size: cover;
  aspect-ratio: 1/1;
}

.main-playPauseButton-button,
.player-controls button[aria-label="${c}"],
.player-controls button[aria-label="${s}"]
{
  display: block;
  mask-size: 100%;
  -webkit-mask-position: center center;
  mask-position: center center;
  background-color: var(--spice-subtext);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: cover;
  mask-size: cover;
  min-height: 1rem;
  min-width: 1rem;
  aspect-ratio: 1/1;
  border-radius: 0 !important;
  border: none !important;
  height: var(--button-size, 24px);
  width: var(--button-size, 24px);
  
  svg,
  span {
    display: none;
    visibility: hidden;
  }
}

.player-controls__buttons>button[aria-label*="${l}"] span svg,
.player-controls__buttons>button[aria-label*="${i}"] span svg {
  display: none;
  visibility: hidden;
}

.player-controls button[aria-label="${c}"] span,
.player-controls button[aria-label="${s}"] span {
  opacity: 0;
}

.player-controls button[aria-label="${c}"] {
  background-color: var(--spice-text);
  -webkit-mask-image: var(--prev-icon, url("https://cdn.jsdelivr.net/gh/sanoojes/Spicetify-Lucid@refs/heads/main/assets/icons/prev.svg"));
  mask-image: var(--prev-icon, url("https://cdn.jsdelivr.net/gh/sanoojes/Spicetify-Lucid@refs/heads/main/assets/icons/prev.svg"));
}

.player-controls button[aria-label="${s}"] {
  background-color: var(--spice-text);
  -webkit-mask-image: var(--next-icon, url("https://cdn.jsdelivr.net/gh/sanoojes/Spicetify-Lucid@refs/heads/main/assets/icons/next.svg"));
  mask-image: var(--next-icon, url("https://cdn.jsdelivr.net/gh/sanoojes/Spicetify-Lucid@refs/heads/main/assets/icons/next.svg"));
}

.main-yourLibraryX-navLink[aria-label="${u}"] svg,
button[aria-label="${u}"] svg {
  path {
display: none !important;
  }

  mask-image: var(--home-outline-icon, url("https://cdn.jsdelivr.net/gh/sanoojes/Spicetify-Lucid@refs/heads/main/assets/icons/home-outline.svg"));
  -webkit-mask-image: var(--home-outline-icon, url("https://cdn.jsdelivr.net/gh/sanoojes/Spicetify-Lucid@refs/heads/main/assets/icons/home-outline.svg"));
  background-color: var(--spice-subtext) !important;
}


.main-yourLibraryX-navLink[aria-label="${u}"].active svg,
.main-globalNav-navLinkActive[aria-label="${u}"] svg {
  path {
display: none !important;
  }

  mask-image: var(--home-filled-icon, url("https://cdn.jsdelivr.net/gh/sanoojes/Spicetify-Lucid@refs/heads/main/assets/icons/home-filled.svg"));
  -webkit-mask-image: var(--home-filled-icon, url("https://cdn.jsdelivr.net/gh/sanoojes/Spicetify-Lucid@refs/heads/main/assets/icons/home-filled.svg"));
  background-color: var(--spice-text) !important;
}

.main-yourLibraryX-navLink[aria-label="${u}"].active svg {
  path {
display: none !important;
  }

  background-color: var(--spice-accent) !important;
}

#context-menu ul[aria-label*="Add to playlist menu"] {
  p {
max-width: 10rem;
  }
}
`);
          }
        })(),
          (() => {
            let e = document.getElementById("lucid-background-style");
            e ||
              (((e = document.createElement("style")).id =
                "lucid-background-style"),
              document.head.appendChild(e));
            var t = document.querySelector("#lyrics-cinema"),
              t =
                (t &&
                  ga(
                    t,
                    "#lyrics-cinema .lyrics-lyrics-background, #lyrics-cinema .lyrics-lyrics-container",
                    e,
                    5
                  ),
                document.querySelector("#main .Root > div:last-child"));
            t &&
              ga(
                t,
                '.Root div[data-testid="fullscreen-mode-container"], .Root .npv-main-container',
                e,
                15
              );
          })();
      }, []),
      N.default.createElement(
        N.default.Fragment,
        null,
        N.default.createElement(
          "div",
          {
            id: "background-container",
            className: "background-container",
            style: { containerType: "normal" },
          },
          N.default.createElement(xt, null)
        ),
        N.default.createElement(
          st,
          null,
          N.default.createElement(
            "div",
            {
              id: "modal-container",
              className: "modal-container",
              style: { containerType: "normal" },
            },
            N.default.createElement(pt, null),
            N.default.createElement(fa, null)
          )
        ),
        N.default.createElement(
          "div",
          { id: "state" },
          N.default.createElement(ca, null)
        ),
        N.default.createElement(ue, null)
      )
    ),
    ya = e(n()),
    va = async function () {
      try {
        for (
          ;
          !(
            null != Spicetify &&
            Spicetify.showNotification &&
            null != Spicetify &&
            Spicetify.Player &&
            null != Spicetify &&
            Spicetify.React &&
            null != Spicetify &&
            Spicetify.Platform
          );

        )
          await new Promise((e) => setTimeout(e, 100));
        let e = document.getElementById("lucid-main");
        var t;
        e ||
          (((e = document.createElement("div")).id = "lucid-main"),
          null != (t = document.getElementById("main")) && t.prepend(e)),
          e &&
            !e.hasChildNodes() &&
            Spicetify.ReactDOM.createRoot(e).render(
              ya.default.createElement(ba, null)
            ),
          console.log(
            "%c Lucid ignited! 🚀",
            "font-weight: bold; font-size: 1.25rem; color: #2196F3; padding: 0.5rem 0;"
          );
      } catch (e) {
        Spicetify.showNotification(
          "[Lucid] Error Occurred: " + (e instanceof Error ? e.message : e),
          !0
        ),
          w(e);
      }
    };
  (async () => {
    await va();
  })();
})();
