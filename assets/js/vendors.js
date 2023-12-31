/* CONTENT:
 - navigation.js
 - FlexSlider v2.2.2
 - Mobile Menu
 */
/**
 * navigation
 */
(function() {
    function h() {
        for (var a = this; -1 === a.className.indexOf("nav-menu"); )
            "li" === a.tagName.toLowerCase() && (-1 !== a.className.indexOf("focus") ? a.className = a.className.replace(" focus", "") : a.className += " focus"),
            a = a.parentElement
    }
    var b, d, a, e, f;
    if (b = document.getElementById("site-navigation"))
        if (d = b.getElementsByTagName("button")[0],
        "undefined" !== typeof d)
            if (a = b.getElementsByTagName("ul")[0],
            "undefined" === typeof a)
                d.style.display = "none";
            else {
                a.setAttribute("aria-expanded", "false");
                -1 === a.className.indexOf("nav-menu") && (a.className += " nav-menu");
                d.onclick = function() {
                    -1 !== b.className.indexOf("toggled") ? (b.className = b.className.replace(" toggled", ""),
                    d.setAttribute("aria-expanded", "false"),
                    a.setAttribute("aria-expanded", "false")) : (b.className += " toggled",
                    d.setAttribute("aria-expanded", "true"),
                    a.setAttribute("aria-expanded", "true"))
                }
                ;
                e = a.getElementsByTagName("a");
                f = a.getElementsByTagName("ul");
                for (var c = 0, g = f.length; c < g; c++)
                    f[c].parentNode.setAttribute("aria-haspopup", "true");
                c = 0;
                for (g = e.length; c < g; c++)
                    e[c].addEventListener("focus", h, !0),
                    e[c].addEventListener("blur", h, !0)
            }
}
)();

/**
 *
 */
(function() {
    var b = -1 < navigator.userAgent.toLowerCase().indexOf("webkit")
      , c = -1 < navigator.userAgent.toLowerCase().indexOf("opera")
      , d = -1 < navigator.userAgent.toLowerCase().indexOf("msie");
    (b || c || d) && document.getElementById && window.addEventListener && window.addEventListener("hashchange", function() {
        var a = location.hash.substring(1);
        /^[A-z0-9_-]+$/.test(a) && (a = document.getElementById(a)) && (/^(?:a|select|input|button|textarea)$/i.test(a.tagName) || (a.tabIndex = -1),
        a.focus())
    }, !1)
}
)();

/*!
 * imagesLoaded PACKAGED v3.1.8
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
(function() {
    function e() {}
    function t(e, t) {
        for (var n = e.length; n--; )
            if (e[n].listener === t)
                return n;
        return -1
    }
    function n(e) {
        return function() {
            return this[e].apply(this, arguments)
        }
    }
    var i = e.prototype
      , r = this
      , o = r.EventEmitter;
    i.getListeners = function(e) {
        var t, n, i = this._getEvents();
        if ("object" == typeof e) {
            t = {};
            for (n in i)
                i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n])
        } else
            t = i[e] || (i[e] = []);
        return t
    }
    ,
    i.flattenListeners = function(e) {
        var t, n = [];
        for (t = 0; e.length > t; t += 1)
            n.push(e[t].listener);
        return n
    }
    ,
    i.getListenersAsObject = function(e) {
        var t, n = this.getListeners(e);
        return n instanceof Array && (t = {},
        t[e] = n),
        t || n
    }
    ,
    i.addListener = function(e, n) {
        var i, r = this.getListenersAsObject(e), o = "object" == typeof n;
        for (i in r)
            r.hasOwnProperty(i) && -1 === t(r[i], n) && r[i].push(o ? n : {
                listener: n,
                once: !1
            });
        return this
    }
    ,
    i.on = n("addListener"),
    i.addOnceListener = function(e, t) {
        return this.addListener(e, {
            listener: t,
            once: !0
        })
    }
    ,
    i.once = n("addOnceListener"),
    i.defineEvent = function(e) {
        return this.getListeners(e),
        this
    }
    ,
    i.defineEvents = function(e) {
        for (var t = 0; e.length > t; t += 1)
            this.defineEvent(e[t]);
        return this
    }
    ,
    i.removeListener = function(e, n) {
        var i, r, o = this.getListenersAsObject(e);
        for (r in o)
            o.hasOwnProperty(r) && (i = t(o[r], n),
            -1 !== i && o[r].splice(i, 1));
        return this
    }
    ,
    i.off = n("removeListener"),
    i.addListeners = function(e, t) {
        return this.manipulateListeners(!1, e, t)
    }
    ,
    i.removeListeners = function(e, t) {
        return this.manipulateListeners(!0, e, t)
    }
    ,
    i.manipulateListeners = function(e, t, n) {
        var i, r, o = e ? this.removeListener : this.addListener, s = e ? this.removeListeners : this.addListeners;
        if ("object" != typeof t || t instanceof RegExp)
            for (i = n.length; i--; )
                o.call(this, t, n[i]);
        else
            for (i in t)
                t.hasOwnProperty(i) && (r = t[i]) && ("function" == typeof r ? o.call(this, i, r) : s.call(this, i, r));
        return this
    }
    ,
    i.removeEvent = function(e) {
        var t, n = typeof e, i = this._getEvents();
        if ("string" === n)
            delete i[e];
        else if ("object" === n)
            for (t in i)
                i.hasOwnProperty(t) && e.test(t) && delete i[t];
        else
            delete this._events;
        return this
    }
    ,
    i.removeAllListeners = n("removeEvent"),
    i.emitEvent = function(e, t) {
        var n, i, r, o, s = this.getListenersAsObject(e);
        for (r in s)
            if (s.hasOwnProperty(r))
                for (i = s[r].length; i--; )
                    n = s[r][i],
                    n.once === !0 && this.removeListener(e, n.listener),
                    o = n.listener.apply(this, t || []),
                    o === this._getOnceReturnValue() && this.removeListener(e, n.listener);
        return this
    }
    ,
    i.trigger = n("emitEvent"),
    i.emit = function(e) {
        var t = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(e, t)
    }
    ,
    i.setOnceReturnValue = function(e) {
        return this._onceReturnValue = e,
        this
    }
    ,
    i._getOnceReturnValue = function() {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }
    ,
    i._getEvents = function() {
        return this._events || (this._events = {})
    }
    ,
    e.noConflict = function() {
        return r.EventEmitter = o,
        e
    }
    ,
    "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
        return e
    }) : "object" == typeof module && module.exports ? module.exports = e : this.EventEmitter = e
}
).call(this),
function(e) {
    function t(t) {
        var n = e.event;
        return n.target = n.target || n.srcElement || t,
        n
    }
    var n = document.documentElement
      , i = function() {};
    n.addEventListener ? i = function(e, t, n) {
        e.addEventListener(t, n, !1)
    }
    : n.attachEvent && (i = function(e, n, i) {
        e[n + i] = i.handleEvent ? function() {
            var n = t(e);
            i.handleEvent.call(i, n)
        }
        : function() {
            var n = t(e);
            i.call(e, n)
        }
        ,
        e.attachEvent("on" + n, e[n + i])
    }
    );
    var r = function() {};
    n.removeEventListener ? r = function(e, t, n) {
        e.removeEventListener(t, n, !1)
    }
    : n.detachEvent && (r = function(e, t, n) {
        e.detachEvent("on" + t, e[t + n]);
        try {
            delete e[t + n]
        } catch (i) {
            e[t + n] = void 0
        }
    }
    );
    var o = {
        bind: i,
        unbind: r
    };
    "function" == typeof define && define.amd ? define("eventie/eventie", o) : e.eventie = o
}(this),
function(e, t) {
    "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function(n, i) {
        return t(e, n, i)
    }) : "object" == typeof exports ? module.exports = t(e, require("wolfy87-eventemitter"), require("eventie")) : e.imagesLoaded = t(e, e.EventEmitter, e.eventie)
}(window, function(e, t, n) {
    function i(e, t) {
        for (var n in t)
            e[n] = t[n];
        return e
    }
    function r(e) {
        return "[object Array]" === d.call(e)
    }
    function o(e) {
        var t = [];
        if (r(e))
            t = e;
        else if ("number" == typeof e.length)
            for (var n = 0, i = e.length; i > n; n++)
                t.push(e[n]);
        else
            t.push(e);
        return t
    }
    function s(e, t, n) {
        if (!(this instanceof s))
            return new s(e,t);
        "string" == typeof e && (e = document.querySelectorAll(e)),
        this.elements = o(e),
        this.options = i({}, this.options),
        "function" == typeof t ? n = t : i(this.options, t),
        n && this.on("always", n),
        this.getImages(),
        a && (this.jqDeferred = new a.Deferred);
        var r = this;
        setTimeout(function() {
            r.check()
        })
    }
    function f(e) {
        this.img = e
    }
    function c(e) {
        this.src = e,
        v[e] = this
    }
    var a = e.jQuery
      , u = e.console
      , h = u !== void 0
      , d = Object.prototype.toString;
    s.prototype = new t,
    s.prototype.options = {},
    s.prototype.getImages = function() {
        this.images = [];
        for (var e = 0, t = this.elements.length; t > e; e++) {
            var n = this.elements[e];
            "IMG" === n.nodeName && this.addImage(n);
            var i = n.nodeType;
            if (i && (1 === i || 9 === i || 11 === i))
                for (var r = n.querySelectorAll("img"), o = 0, s = r.length; s > o; o++) {
                    var f = r[o];
                    this.addImage(f)
                }
        }
    }
    ,
    s.prototype.addImage = function(e) {
        var t = new f(e);
        this.images.push(t)
    }
    ,
    s.prototype.check = function() {
        function e(e, r) {
            return t.options.debug && h && u.log("confirm", e, r),
            t.progress(e),
            n++,
            n === i && t.complete(),
            !0
        }
        var t = this
          , n = 0
          , i = this.images.length;
        if (this.hasAnyBroken = !1,
        !i)
            return this.complete(),
            void 0;
        for (var r = 0; i > r; r++) {
            var o = this.images[r];
            o.on("confirm", e),
            o.check()
        }
    }
    ,
    s.prototype.progress = function(e) {
        this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded;
        var t = this;
        setTimeout(function() {
            t.emit("progress", t, e),
            t.jqDeferred && t.jqDeferred.notify && t.jqDeferred.notify(t, e)
        })
    }
    ,
    s.prototype.complete = function() {
        var e = this.hasAnyBroken ? "fail" : "done";
        this.isComplete = !0;
        var t = this;
        setTimeout(function() {
            if (t.emit(e, t),
            t.emit("always", t),
            t.jqDeferred) {
                var n = t.hasAnyBroken ? "reject" : "resolve";
                t.jqDeferred[n](t)
            }
        })
    }
    ,
    a && (a.fn.imagesLoaded = function(e, t) {
        var n = new s(this,e,t);
        return n.jqDeferred.promise(a(this))
    }
    ),
    f.prototype = new t,
    f.prototype.check = function() {
        var e = v[this.img.src] || new c(this.img.src);
        if (e.isConfirmed)
            return this.confirm(e.isLoaded, "cached was confirmed"),
            void 0;
        if (this.img.complete && void 0 !== this.img.naturalWidth)
            return this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
            void 0;
        var t = this;
        e.on("confirm", function(e, n) {
            return t.confirm(e.isLoaded, n),
            !0
        }),
        e.check()
    }
    ,
    f.prototype.confirm = function(e, t) {
        this.isLoaded = e,
        this.emit("confirm", this, t)
    }
    ;
    var v = {};
    return c.prototype = new t,
    c.prototype.check = function() {
        if (!this.isChecked) {
            var e = new Image;
            n.bind(e, "load", this),
            n.bind(e, "error", this),
            e.src = this.src,
            this.isChecked = !0
        }
    }
    ,
    c.prototype.handleEvent = function(e) {
        var t = "on" + e.type;
        this[t] && this[t](e)
    }
    ,
    c.prototype.onload = function(e) {
        this.confirm(!0, "onload"),
        this.unbindProxyEvents(e)
    }
    ,
    c.prototype.onerror = function(e) {
        this.confirm(!1, "onerror"),
        this.unbindProxyEvents(e)
    }
    ,
    c.prototype.confirm = function(e, t) {
        this.isConfirmed = !0,
        this.isLoaded = e,
        this.emit("confirm", this, t)
    }
    ,
    c.prototype.unbindProxyEvents = function(e) {
        n.unbind(e.target, "load", this),
        n.unbind(e.target, "error", this)
    }
    ,
    s
});

/*
 * jQuery FlexSlider v2.2.2
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */
!function(a) {
    a.flexslider = function(b, c) {
        var d = a(b);
        d.vars = a.extend({}, a.flexslider.defaults, c);
        var j, e = d.vars.namespace, f = window.navigator && window.navigator.msPointerEnabled && window.MSGesture, g = ("ontouchstart"in window || f || window.DocumentTouch && document instanceof DocumentTouch) && d.vars.touch, h = "click touchend MSPointerUp", i = "", k = "vertical" === d.vars.direction, l = d.vars.reverse, m = d.vars.itemWidth > 0, n = "fade" === d.vars.animation, o = "" !== d.vars.asNavFor, p = {}, q = !0;
        a.data(b, "flexslider", d),
        p = {
            init: function() {
                d.animating = !1,
                d.currentSlide = parseInt(d.vars.startAt ? d.vars.startAt : 0, 10),
                isNaN(d.currentSlide) && (d.currentSlide = 0),
                d.animatingTo = d.currentSlide,
                d.atEnd = 0 === d.currentSlide || d.currentSlide === d.last,
                d.containerSelector = d.vars.selector.substr(0, d.vars.selector.search(" ")),
                d.slides = a(d.vars.selector, d),
                d.container = a(d.containerSelector, d),
                d.count = d.slides.length,
                d.syncExists = a(d.vars.sync).length > 0,
                "slide" === d.vars.animation && (d.vars.animation = "swing"),
                d.prop = k ? "top" : "marginLeft",
                d.args = {},
                d.manualPause = !1,
                d.stopped = !1,
                d.started = !1,
                d.startTimeout = null,
                d.transitions = !d.vars.video && !n && d.vars.useCSS && function() {
                    var a = document.createElement("div")
                      , b = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                    for (var c in b)
                        if (void 0 !== a.style[b[c]])
                            return d.pfx = b[c].replace("Perspective", "").toLowerCase(),
                            d.prop = "-" + d.pfx + "-transform",
                            !0;
                    return !1
                }(),
                d.ensureAnimationEnd = "",
                "" !== d.vars.controlsContainer && (d.controlsContainer = a(d.vars.controlsContainer).length > 0 && a(d.vars.controlsContainer)),
                "" !== d.vars.manualControls && (d.manualControls = a(d.vars.manualControls).length > 0 && a(d.vars.manualControls)),
                d.vars.randomize && (d.slides.sort(function() {
                    return Math.round(Math.random()) - .5
                }),
                d.container.empty().append(d.slides)),
                d.doMath(),
                d.setup("init"),
                d.vars.controlNav && p.controlNav.setup(),
                d.vars.directionNav && p.directionNav.setup(),
                d.vars.keyboard && (1 === a(d.containerSelector).length || d.vars.multipleKeyboard) && a(document).bind("keyup", function(a) {
                    var b = a.keyCode;
                    if (!d.animating && (39 === b || 37 === b)) {
                        var c = 39 === b ? d.getTarget("next") : 37 === b ? d.getTarget("prev") : !1;
                        d.flexAnimate(c, d.vars.pauseOnAction)
                    }
                }),
                d.vars.mousewheel && d.bind("mousewheel", function(a, b) {
                    a.preventDefault();
                    var f = 0 > b ? d.getTarget("next") : d.getTarget("prev");
                    d.flexAnimate(f, d.vars.pauseOnAction)
                }),
                d.vars.pausePlay && p.pausePlay.setup(),
                d.vars.slideshow && d.vars.pauseInvisible && p.pauseInvisible.init(),
                d.vars.slideshow && (d.vars.pauseOnHover && d.hover(function() {
                    d.manualPlay || d.manualPause || d.pause()
                }, function() {
                    d.manualPause || d.manualPlay || d.stopped || d.play()
                }),
                d.vars.pauseInvisible && p.pauseInvisible.isHidden() || (d.vars.initDelay > 0 ? d.startTimeout = setTimeout(d.play, d.vars.initDelay) : d.play())),
                o && p.asNav.setup(),
                g && d.vars.touch && p.touch(),
                (!n || n && d.vars.smoothHeight) && a(window).bind("resize orientationchange focus", p.resize),
                d.find("img").attr("draggable", "false"),
                setTimeout(function() {
                    d.vars.start(d)
                }, 200)
            },
            asNav: {
                setup: function() {
                    d.asNav = !0,
                    d.animatingTo = Math.floor(d.currentSlide / d.move),
                    d.currentItem = d.currentSlide,
                    d.slides.removeClass(e + "active-slide").eq(d.currentItem).addClass(e + "active-slide"),
                    f ? (b._slider = d,
                    d.slides.each(function() {
                        var b = this;
                        b._gesture = new MSGesture,
                        b._gesture.target = b,
                        b.addEventListener("MSPointerDown", function(a) {
                            a.preventDefault(),
                            a.currentTarget._gesture && a.currentTarget._gesture.addPointer(a.pointerId)
                        }, !1),
                        b.addEventListener("MSGestureTap", function(b) {
                            b.preventDefault();
                            var c = a(this)
                              , e = c.index();
                            a(d.vars.asNavFor).data("flexslider").animating || c.hasClass("active") || (d.direction = d.currentItem < e ? "next" : "prev",
                            d.flexAnimate(e, d.vars.pauseOnAction, !1, !0, !0))
                        })
                    })) : d.slides.on(h, function(b) {
                        b.preventDefault();
                        var c = a(this)
                          , f = c.index()
                          , g = c.offset().left - a(d).scrollLeft();
                        0 >= g && c.hasClass(e + "active-slide") ? d.flexAnimate(d.getTarget("prev"), !0) : a(d.vars.asNavFor).data("flexslider").animating || c.hasClass(e + "active-slide") || (d.direction = d.currentItem < f ? "next" : "prev",
                        d.flexAnimate(f, d.vars.pauseOnAction, !1, !0, !0))
                    })
                }
            },
            controlNav: {
                setup: function() {
                    d.manualControls ? p.controlNav.setupManual() : p.controlNav.setupPaging()
                },
                setupPaging: function() {
                    var f, g, b = "thumbnails" === d.vars.controlNav ? "control-thumbs" : "control-paging", c = 1;
                    if (d.controlNavScaffold = a('<ol class="' + e + "control-nav " + e + b + '"></ol>'),
                    d.pagingCount > 1)
                        for (var j = 0; j < d.pagingCount; j++) {
                            if (g = d.slides.eq(j),
                            f = "thumbnails" === d.vars.controlNav ? '<img src="' + g.attr("data-thumb") + '"/>' : "<a>" + c + "</a>",
                            "thumbnails" === d.vars.controlNav && !0 === d.vars.thumbCaptions) {
                                var k = g.attr("data-thumbcaption");
                                "" != k && void 0 != k && (f += '<span class="' + e + 'caption">' + k + "</span>")
                            }
                            d.controlNavScaffold.append("<li>" + f + "</li>"),
                            c++
                        }
                    d.controlsContainer ? a(d.controlsContainer).append(d.controlNavScaffold) : d.append(d.controlNavScaffold),
                    p.controlNav.set(),
                    p.controlNav.active(),
                    d.controlNavScaffold.delegate("a, img", h, function(b) {
                        if (b.preventDefault(),
                        "" === i || i === b.type) {
                            var c = a(this)
                              , f = d.controlNav.index(c);
                            c.hasClass(e + "active") || (d.direction = f > d.currentSlide ? "next" : "prev",
                            d.flexAnimate(f, d.vars.pauseOnAction))
                        }
                        "" === i && (i = b.type),
                        p.setToClearWatchedEvent()
                    })
                },
                setupManual: function() {
                    d.controlNav = d.manualControls,
                    p.controlNav.active(),
                    d.controlNav.bind(h, function(b) {
                        if (b.preventDefault(),
                        "" === i || i === b.type) {
                            var c = a(this)
                              , f = d.controlNav.index(c);
                            c.hasClass(e + "active") || (d.direction = f > d.currentSlide ? "next" : "prev",
                            d.flexAnimate(f, d.vars.pauseOnAction))
                        }
                        "" === i && (i = b.type),
                        p.setToClearWatchedEvent()
                    })
                },
                set: function() {
                    var b = "thumbnails" === d.vars.controlNav ? "img" : "a";
                    d.controlNav = a("." + e + "control-nav li " + b, d.controlsContainer ? d.controlsContainer : d)
                },
                active: function() {
                    d.controlNav.removeClass(e + "active").eq(d.animatingTo).addClass(e + "active")
                },
                update: function(b, c) {
                    d.pagingCount > 1 && "add" === b ? d.controlNavScaffold.append(a("<li><a>" + d.count + "</a></li>")) : 1 === d.pagingCount ? d.controlNavScaffold.find("li").remove() : d.controlNav.eq(c).closest("li").remove(),
                    p.controlNav.set(),
                    d.pagingCount > 1 && d.pagingCount !== d.controlNav.length ? d.update(c, b) : p.controlNav.active()
                }
            },
            directionNav: {
                setup: function() {
                    var b = a('<ul class="' + e + 'direction-nav"><li><a class="' + e + 'prev" href="#">' + d.vars.prevText + '</a></li><li><a class="' + e + 'next" href="#">' + d.vars.nextText + "</a></li></ul>");
                    d.controlsContainer ? (a(d.controlsContainer).append(b),
                    d.directionNav = a("." + e + "direction-nav li a", d.controlsContainer)) : (d.append(b),
                    d.directionNav = a("." + e + "direction-nav li a", d)),
                    p.directionNav.update(),
                    d.directionNav.bind(h, function(b) {
                        b.preventDefault();
                        var c;
                        ("" === i || i === b.type) && (c = a(this).hasClass(e + "next") ? d.getTarget("next") : d.getTarget("prev"),
                        d.flexAnimate(c, d.vars.pauseOnAction)),
                        "" === i && (i = b.type),
                        p.setToClearWatchedEvent()
                    })
                },
                update: function() {
                    var a = e + "disabled";
                    1 === d.pagingCount ? d.directionNav.addClass(a).attr("tabindex", "-1") : d.vars.animationLoop ? d.directionNav.removeClass(a).removeAttr("tabindex") : 0 === d.animatingTo ? d.directionNav.removeClass(a).filter("." + e + "prev").addClass(a).attr("tabindex", "-1") : d.animatingTo === d.last ? d.directionNav.removeClass(a).filter("." + e + "next").addClass(a).attr("tabindex", "-1") : d.directionNav.removeClass(a).removeAttr("tabindex")
                }
            },
            pausePlay: {
                setup: function() {
                    var b = a('<div class="' + e + 'pauseplay"><a></a></div>');
                    d.controlsContainer ? (d.controlsContainer.append(b),
                    d.pausePlay = a("." + e + "pauseplay a", d.controlsContainer)) : (d.append(b),
                    d.pausePlay = a("." + e + "pauseplay a", d)),
                    p.pausePlay.update(d.vars.slideshow ? e + "pause" : e + "play"),
                    d.pausePlay.bind(h, function(b) {
                        b.preventDefault(),
                        ("" === i || i === b.type) && (a(this).hasClass(e + "pause") ? (d.manualPause = !0,
                        d.manualPlay = !1,
                        d.pause()) : (d.manualPause = !1,
                        d.manualPlay = !0,
                        d.play())),
                        "" === i && (i = b.type),
                        p.setToClearWatchedEvent()
                    })
                },
                update: function(a) {
                    "play" === a ? d.pausePlay.removeClass(e + "pause").addClass(e + "play").html(d.vars.playText) : d.pausePlay.removeClass(e + "play").addClass(e + "pause").html(d.vars.pauseText)
                }
            },
            touch: function() {
                function r(f) {
                    d.animating ? f.preventDefault() : (window.navigator.msPointerEnabled || 1 === f.touches.length) && (d.pause(),
                    g = k ? d.h : d.w,
                    i = Number(new Date),
                    o = f.touches[0].pageX,
                    p = f.touches[0].pageY,
                    e = m && l && d.animatingTo === d.last ? 0 : m && l ? d.limit - (d.itemW + d.vars.itemMargin) * d.move * d.animatingTo : m && d.currentSlide === d.last ? d.limit : m ? (d.itemW + d.vars.itemMargin) * d.move * d.currentSlide : l ? (d.last - d.currentSlide + d.cloneOffset) * g : (d.currentSlide + d.cloneOffset) * g,
                    a = k ? p : o,
                    c = k ? o : p,
                    b.addEventListener("touchmove", s, !1),
                    b.addEventListener("touchend", t, !1))
                }
                function s(b) {
                    o = b.touches[0].pageX,
                    p = b.touches[0].pageY,
                    h = k ? a - p : a - o,
                    j = k ? Math.abs(h) < Math.abs(o - c) : Math.abs(h) < Math.abs(p - c);
                    var f = 500;
                    (!j || Number(new Date) - i > f) && (b.preventDefault(),
                    !n && d.transitions && (d.vars.animationLoop || (h /= 0 === d.currentSlide && 0 > h || d.currentSlide === d.last && h > 0 ? Math.abs(h) / g + 2 : 1),
                    d.setProps(e + h, "setTouch")))
                }
                function t() {
                    if (b.removeEventListener("touchmove", s, !1),
                    d.animatingTo === d.currentSlide && !j && null !== h) {
                        var k = l ? -h : h
                          , m = k > 0 ? d.getTarget("next") : d.getTarget("prev");
                        d.canAdvance(m) && (Number(new Date) - i < 550 && Math.abs(k) > 50 || Math.abs(k) > g / 2) ? d.flexAnimate(m, d.vars.pauseOnAction) : n || d.flexAnimate(d.currentSlide, d.vars.pauseOnAction, !0)
                    }
                    b.removeEventListener("touchend", t, !1),
                    a = null,
                    c = null,
                    h = null,
                    e = null
                }
                function u(a) {
                    a.stopPropagation(),
                    d.animating ? a.preventDefault() : (d.pause(),
                    b._gesture.addPointer(a.pointerId),
                    q = 0,
                    g = k ? d.h : d.w,
                    i = Number(new Date),
                    e = m && l && d.animatingTo === d.last ? 0 : m && l ? d.limit - (d.itemW + d.vars.itemMargin) * d.move * d.animatingTo : m && d.currentSlide === d.last ? d.limit : m ? (d.itemW + d.vars.itemMargin) * d.move * d.currentSlide : l ? (d.last - d.currentSlide + d.cloneOffset) * g : (d.currentSlide + d.cloneOffset) * g)
                }
                function v(a) {
                    a.stopPropagation();
                    var c = a.target._slider;
                    if (c) {
                        var d = -a.translationX
                          , f = -a.translationY;
                        return q += k ? f : d,
                        h = q,
                        j = k ? Math.abs(q) < Math.abs(-d) : Math.abs(q) < Math.abs(-f),
                        a.detail === a.MSGESTURE_FLAG_INERTIA ? (setImmediate(function() {
                            b._gesture.stop()
                        }),
                        void 0) : ((!j || Number(new Date) - i > 500) && (a.preventDefault(),
                        !n && c.transitions && (c.vars.animationLoop || (h = q / (0 === c.currentSlide && 0 > q || c.currentSlide === c.last && q > 0 ? Math.abs(q) / g + 2 : 1)),
                        c.setProps(e + h, "setTouch"))),
                        void 0)
                    }
                }
                function w(b) {
                    b.stopPropagation();
                    var d = b.target._slider;
                    if (d) {
                        if (d.animatingTo === d.currentSlide && !j && null !== h) {
                            var f = l ? -h : h
                              , k = f > 0 ? d.getTarget("next") : d.getTarget("prev");
                            d.canAdvance(k) && (Number(new Date) - i < 550 && Math.abs(f) > 50 || Math.abs(f) > g / 2) ? d.flexAnimate(k, d.vars.pauseOnAction) : n || d.flexAnimate(d.currentSlide, d.vars.pauseOnAction, !0)
                        }
                        a = null,
                        c = null,
                        h = null,
                        e = null,
                        q = 0
                    }
                }
                var a, c, e, g, h, i, j = !1, o = 0, p = 0, q = 0;
                f ? (b.style.msTouchAction = "none",
                b._gesture = new MSGesture,
                b._gesture.target = b,
                b.addEventListener("MSPointerDown", u, !1),
                b._slider = d,
                b.addEventListener("MSGestureChange", v, !1),
                b.addEventListener("MSGestureEnd", w, !1)) : b.addEventListener("touchstart", r, !1)
            },
            resize: function() {
                !d.animating && d.is(":visible") && (m || d.doMath(),
                n ? p.smoothHeight() : m ? (d.slides.width(d.computedW),
                d.update(d.pagingCount),
                d.setProps()) : k ? (d.viewport.height(d.h),
                d.setProps(d.h, "setTotal")) : (d.vars.smoothHeight && p.smoothHeight(),
                d.newSlides.width(d.computedW),
                d.setProps(d.computedW, "setTotal")))
            },
            smoothHeight: function(a) {
                if (!k || n) {
                    var b = n ? d : d.viewport;
                    a ? b.animate({
                        height: d.slides.eq(d.animatingTo).height()
                    }, a) : b.height(d.slides.eq(d.animatingTo).height())
                }
            },
            sync: function(b) {
                var c = a(d.vars.sync).data("flexslider")
                  , e = d.animatingTo;
                switch (b) {
                case "animate":
                    c.flexAnimate(e, d.vars.pauseOnAction, !1, !0);
                    break;
                case "play":
                    c.playing || c.asNav || c.play();
                    break;
                case "pause":
                    c.pause()
                }
            },
            uniqueID: function(b) {
                return b.find("[id]").each(function() {
                    var b = a(this);
                    b.attr("id", b.attr("id") + "_clone")
                }),
                b
            },
            pauseInvisible: {
                visProp: null,
                init: function() {
                    var a = ["webkit", "moz", "ms", "o"];
                    if ("hidden"in document)
                        return "hidden";
                    for (var b = 0; b < a.length; b++)
                        a[b] + "Hidden"in document && (p.pauseInvisible.visProp = a[b] + "Hidden");
                    if (p.pauseInvisible.visProp) {
                        var c = p.pauseInvisible.visProp.replace(/[H|h]idden/, "") + "visibilitychange";
                        document.addEventListener(c, function() {
                            p.pauseInvisible.isHidden() ? d.startTimeout ? clearTimeout(d.startTimeout) : d.pause() : d.started ? d.play() : d.vars.initDelay > 0 ? setTimeout(d.play, d.vars.initDelay) : d.play()
                        })
                    }
                },
                isHidden: function() {
                    return document[p.pauseInvisible.visProp] || !1
                }
            },
            setToClearWatchedEvent: function() {
                clearTimeout(j),
                j = setTimeout(function() {
                    i = ""
                }, 3e3)
            }
        },
        d.flexAnimate = function(b, c, f, h, i) {
            if (d.vars.animationLoop || b === d.currentSlide || (d.direction = b > d.currentSlide ? "next" : "prev"),
            o && 1 === d.pagingCount && (d.direction = d.currentItem < b ? "next" : "prev"),
            !d.animating && (d.canAdvance(b, i) || f) && d.is(":visible")) {
                if (o && h) {
                    var j = a(d.vars.asNavFor).data("flexslider");
                    if (d.atEnd = 0 === b || b === d.count - 1,
                    j.flexAnimate(b, !0, !1, !0, i),
                    d.direction = d.currentItem < b ? "next" : "prev",
                    j.direction = d.direction,
                    Math.ceil((b + 1) / d.visible) - 1 === d.currentSlide || 0 === b)
                        return d.currentItem = b,
                        d.slides.removeClass(e + "active-slide").eq(b).addClass(e + "active-slide"),
                        !1;
                    d.currentItem = b,
                    d.slides.removeClass(e + "active-slide").eq(b).addClass(e + "active-slide"),
                    b = Math.floor(b / d.visible)
                }
                if (d.animating = !0,
                d.animatingTo = b,
                c && d.pause(),
                d.vars.before(d),
                d.syncExists && !i && p.sync("animate"),
                d.vars.controlNav && p.controlNav.active(),
                m || d.slides.removeClass(e + "active-slide").eq(b).addClass(e + "active-slide"),
                d.atEnd = 0 === b || b === d.last,
                d.vars.directionNav && p.directionNav.update(),
                b === d.last && (d.vars.end(d),
                d.vars.animationLoop || d.pause()),
                n)
                    g ? (d.slides.eq(d.currentSlide).css({
                        opacity: 0,
                        zIndex: 1
                    }),
                    d.slides.eq(b).css({
                        opacity: 1,
                        zIndex: 2
                    }),
                    d.wrapup(q)) : (d.slides.eq(d.currentSlide).css({
                        zIndex: 1
                    }).animate({
                        opacity: 0
                    }, d.vars.animationSpeed, d.vars.easing),
                    d.slides.eq(b).css({
                        zIndex: 2
                    }).animate({
                        opacity: 1
                    }, d.vars.animationSpeed, d.vars.easing, d.wrapup));
                else {
                    var r, s, t, q = k ? d.slides.filter(":first").height() : d.computedW;
                    m ? (r = d.vars.itemMargin,
                    t = (d.itemW + r) * d.move * d.animatingTo,
                    s = t > d.limit && 1 !== d.visible ? d.limit : t) : s = 0 === d.currentSlide && b === d.count - 1 && d.vars.animationLoop && "next" !== d.direction ? l ? (d.count + d.cloneOffset) * q : 0 : d.currentSlide === d.last && 0 === b && d.vars.animationLoop && "prev" !== d.direction ? l ? 0 : (d.count + 1) * q : l ? (d.count - 1 - b + d.cloneOffset) * q : (b + d.cloneOffset) * q,
                    d.setProps(s, "", d.vars.animationSpeed),
                    d.transitions ? (d.vars.animationLoop && d.atEnd || (d.animating = !1,
                    d.currentSlide = d.animatingTo),
                    d.container.unbind("webkitTransitionEnd transitionend"),
                    d.container.bind("webkitTransitionEnd transitionend", function() {
                        clearTimeout(d.ensureAnimationEnd),
                        d.wrapup(q)
                    }),
                    clearTimeout(d.ensureAnimationEnd),
                    d.ensureAnimationEnd = setTimeout(function() {
                        d.wrapup(q)
                    }, d.vars.animationSpeed + 100)) : d.container.animate(d.args, d.vars.animationSpeed, d.vars.easing, function() {
                        d.wrapup(q)
                    })
                }
                d.vars.smoothHeight && p.smoothHeight(d.vars.animationSpeed)
            }
        }
        ,
        d.wrapup = function(a) {
            n || m || (0 === d.currentSlide && d.animatingTo === d.last && d.vars.animationLoop ? d.setProps(a, "jumpEnd") : d.currentSlide === d.last && 0 === d.animatingTo && d.vars.animationLoop && d.setProps(a, "jumpStart")),
            d.animating = !1,
            d.currentSlide = d.animatingTo,
            d.vars.after(d)
        }
        ,
        d.animateSlides = function() {
            !d.animating && q && d.flexAnimate(d.getTarget("next"))
        }
        ,
        d.pause = function() {
            clearInterval(d.animatedSlides),
            d.animatedSlides = null,
            d.playing = !1,
            d.vars.pausePlay && p.pausePlay.update("play"),
            d.syncExists && p.sync("pause")
        }
        ,
        d.play = function() {
            d.playing && clearInterval(d.animatedSlides),
            d.animatedSlides = d.animatedSlides || setInterval(d.animateSlides, d.vars.slideshowSpeed),
            d.started = d.playing = !0,
            d.vars.pausePlay && p.pausePlay.update("pause"),
            d.syncExists && p.sync("play")
        }
        ,
        d.stop = function() {
            d.pause(),
            d.stopped = !0
        }
        ,
        d.canAdvance = function(a, b) {
            var c = o ? d.pagingCount - 1 : d.last;
            return b ? !0 : o && d.currentItem === d.count - 1 && 0 === a && "prev" === d.direction ? !0 : o && 0 === d.currentItem && a === d.pagingCount - 1 && "next" !== d.direction ? !1 : a !== d.currentSlide || o ? d.vars.animationLoop ? !0 : d.atEnd && 0 === d.currentSlide && a === c && "next" !== d.direction ? !1 : d.atEnd && d.currentSlide === c && 0 === a && "next" === d.direction ? !1 : !0 : !1
        }
        ,
        d.getTarget = function(a) {
            return d.direction = a,
            "next" === a ? d.currentSlide === d.last ? 0 : d.currentSlide + 1 : 0 === d.currentSlide ? d.last : d.currentSlide - 1
        }
        ,
        d.setProps = function(a, b, c) {
            var e = function() {
                var c = a ? a : (d.itemW + d.vars.itemMargin) * d.move * d.animatingTo
                  , e = function() {
                    if (m)
                        return "setTouch" === b ? a : l && d.animatingTo === d.last ? 0 : l ? d.limit - (d.itemW + d.vars.itemMargin) * d.move * d.animatingTo : d.animatingTo === d.last ? d.limit : c;
                    switch (b) {
                    case "setTotal":
                        return l ? (d.count - 1 - d.currentSlide + d.cloneOffset) * a : (d.currentSlide + d.cloneOffset) * a;
                    case "setTouch":
                        return l ? a : a;
                    case "jumpEnd":
                        return l ? a : d.count * a;
                    case "jumpStart":
                        return l ? d.count * a : a;
                    default:
                        return a
                    }
                }();
                return -1 * e + "px"
            }();
            d.transitions && (e = k ? "translate3d(0," + e + ",0)" : "translate3d(" + e + ",0,0)",
            c = void 0 !== c ? c / 1e3 + "s" : "0s",
            d.container.css("-" + d.pfx + "-transition-duration", c),
            d.container.css("transition-duration", c)),
            d.args[d.prop] = e,
            (d.transitions || void 0 === c) && d.container.css(d.args),
            d.container.css("transform", e)
        }
        ,
        d.setup = function(b) {
            if (n)
                d.slides.css({
                    width: "100%",
                    "float": "left",
                    marginRight: "-100%",
                    position: "relative"
                }),
                "init" === b && (g ? d.slides.css({
                    opacity: 0,
                    display: "block",
                    webkitTransition: "opacity " + d.vars.animationSpeed / 1e3 + "s ease",
                    zIndex: 1
                }).eq(d.currentSlide).css({
                    opacity: 1,
                    zIndex: 2
                }) : d.slides.css({
                    opacity: 0,
                    display: "block",
                    zIndex: 1
                }).eq(d.currentSlide).css({
                    zIndex: 2
                }).animate({
                    opacity: 1
                }, d.vars.animationSpeed, d.vars.easing)),
                d.vars.smoothHeight && p.smoothHeight();
            else {
                var c, f;
                "init" === b && (d.viewport = a('<div class="' + e + 'viewport"></div>').css({
                    overflow: "hidden",
                    position: "relative"
                }).appendTo(d).append(d.container),
                d.cloneCount = 0,
                d.cloneOffset = 0,
                l && (f = a.makeArray(d.slides).reverse(),
                d.slides = a(f),
                d.container.empty().append(d.slides))),
                d.vars.animationLoop && !m && (d.cloneCount = 2,
                d.cloneOffset = 1,
                "init" !== b && d.container.find(".clone").remove(),
                p.uniqueID(d.slides.first().clone().addClass("clone").attr("aria-hidden", "true")).appendTo(d.container),
                p.uniqueID(d.slides.last().clone().addClass("clone").attr("aria-hidden", "true")).prependTo(d.container)),
                d.newSlides = a(d.vars.selector, d),
                c = l ? d.count - 1 - d.currentSlide + d.cloneOffset : d.currentSlide + d.cloneOffset,
                k && !m ? (d.container.height(200 * (d.count + d.cloneCount) + "%").css("position", "absolute").width("100%"),
                setTimeout(function() {
                    d.newSlides.css({
                        display: "block"
                    }),
                    d.doMath(),
                    d.viewport.height(d.h),
                    d.setProps(c * d.h, "init")
                }, "init" === b ? 100 : 0)) : (d.container.width(200 * (d.count + d.cloneCount) + "%"),
                d.setProps(c * d.computedW, "init"),
                setTimeout(function() {
                    d.doMath(),
                    d.newSlides.css({
                        width: d.computedW,
                        "float": "left",
                        display: "block"
                    }),
                    d.vars.smoothHeight && p.smoothHeight()
                }, "init" === b ? 100 : 0))
            }
            m || d.slides.removeClass(e + "active-slide").eq(d.currentSlide).addClass(e + "active-slide"),
            d.vars.init(d)
        }
        ,
        d.doMath = function() {
            var a = d.slides.first()
              , b = d.vars.itemMargin
              , c = d.vars.minItems
              , e = d.vars.maxItems;
            d.w = void 0 === d.viewport ? d.width() : d.viewport.width(),
            d.h = a.height(),
            d.boxPadding = a.outerWidth() - a.width(),
            m ? (d.itemT = d.vars.itemWidth + b,
            d.minW = c ? c * d.itemT : d.w,
            d.maxW = e ? e * d.itemT - b : d.w,
            d.itemW = d.minW > d.w ? (d.w - b * (c - 1)) / c : d.maxW < d.w ? (d.w - b * (e - 1)) / e : d.vars.itemWidth > d.w ? d.w : d.vars.itemWidth,
            d.visible = Math.floor(d.w / d.itemW),
            d.move = d.vars.move > 0 && d.vars.move < d.visible ? d.vars.move : d.visible,
            d.pagingCount = Math.ceil((d.count - d.visible) / d.move + 1),
            d.last = d.pagingCount - 1,
            d.limit = 1 === d.pagingCount ? 0 : d.vars.itemWidth > d.w ? d.itemW * (d.count - 1) + b * (d.count - 1) : (d.itemW + b) * d.count - d.w - b) : (d.itemW = d.w,
            d.pagingCount = d.count,
            d.last = d.count - 1),
            d.computedW = d.itemW - d.boxPadding
        }
        ,
        d.update = function(a, b) {
            d.doMath(),
            m || (a < d.currentSlide ? d.currentSlide += 1 : a <= d.currentSlide && 0 !== a && (d.currentSlide -= 1),
            d.animatingTo = d.currentSlide),
            d.vars.controlNav && !d.manualControls && ("add" === b && !m || d.pagingCount > d.controlNav.length ? p.controlNav.update("add") : ("remove" === b && !m || d.pagingCount < d.controlNav.length) && (m && d.currentSlide > d.last && (d.currentSlide -= 1,
            d.animatingTo -= 1),
            p.controlNav.update("remove", d.last))),
            d.vars.directionNav && p.directionNav.update()
        }
        ,
        d.addSlide = function(b, c) {
            var e = a(b);
            d.count += 1,
            d.last = d.count - 1,
            k && l ? void 0 !== c ? d.slides.eq(d.count - c).after(e) : d.container.prepend(e) : void 0 !== c ? d.slides.eq(c).before(e) : d.container.append(e),
            d.update(c, "add"),
            d.slides = a(d.vars.selector + ":not(.clone)", d),
            d.setup(),
            d.vars.added(d)
        }
        ,
        d.removeSlide = function(b) {
            var c = isNaN(b) ? d.slides.index(a(b)) : b;
            d.count -= 1,
            d.last = d.count - 1,
            isNaN(b) ? a(b, d.slides).remove() : k && l ? d.slides.eq(d.last).remove() : d.slides.eq(b).remove(),
            d.doMath(),
            d.update(c, "remove"),
            d.slides = a(d.vars.selector + ":not(.clone)", d),
            d.setup(),
            d.vars.removed(d)
        }
        ,
        p.init()
    }
    ,
    a(window).blur(function() {
        focused = !1
    }).focus(function() {
        focused = !0
    }),
    a.flexslider.defaults = {
        namespace: "flex-",
        selector: ".slides > li",
        animation: "fade",
        easing: "swing",
        direction: "horizontal",
        reverse: !1,
        animationLoop: !0,
        smoothHeight: !1,
        startAt: 0,
        slideshow: !0,
        slideshowSpeed: 7e3,
        animationSpeed: 600,
        initDelay: 0,
        randomize: !1,
        thumbCaptions: !1,
        pauseOnAction: !0,
        pauseOnHover: !1,
        pauseInvisible: !0,
        useCSS: !0,
        touch: !0,
        video: !1,
        controlNav: !0,
        directionNav: !0,
        prevText: "Previous",
        nextText: "Next",
        keyboard: !0,
        multipleKeyboard: !1,
        mousewheel: !1,
        pausePlay: !1,
        pauseText: "Pause",
        playText: "Play",
        controlsContainer: "",
        manualControls: "",
        sync: "",
        asNavFor: "",
        itemWidth: 0,
        itemMargin: 0,
        minItems: 1,
        maxItems: 0,
        move: 0,
        allowOneSlide: !0,
        start: function() {},
        before: function() {},
        after: function() {},
        end: function() {},
        added: function() {},
        removed: function() {},
        init: function() {}
    },
    a.fn.flexslider = function(b) {
        if (void 0 === b && (b = {}),
        "object" == typeof b)
            return this.each(function() {
                var c = a(this)
                  , d = b.selector ? b.selector : ".slides > li"
                  , e = c.find(d);
                1 === e.length && b.allowOneSlide === !0 || 0 === e.length ? (e.fadeIn(400),
                b.start && b.start(c)) : void 0 === c.data("flexslider") && new a.flexslider(this,b)
            });
        var c = a(this).data("flexslider");
        switch (b) {
        case "play":
            c.play();
            break;
        case "pause":
            c.pause();
            break;
        case "stop":
            c.stop();
            break;
        case "next":
            c.flexAnimate(c.getTarget("next"), !0);
            break;
        case "prev":
        case "previous":
            c.flexAnimate(c.getTarget("prev"), !0);
            break;
        default:
            "number" == typeof b && c.flexAnimate(b, !0)
        }
    }
}(jQuery);

/**
 * Mobile Menu
 */
!function(a, b, c, d) {
    "use strict";
    function k(a, b, c) {
        return setTimeout(q(a, c), b)
    }
    function l(a, b, c) {
        return Array.isArray(a) ? (m(a, c[b], c),
        !0) : !1
    }
    function m(a, b, c) {
        var e;
        if (a)
            if (a.forEach)
                a.forEach(b, c);
            else if (a.length !== d)
                for (e = 0; e < a.length; )
                    b.call(c, a[e], e, a),
                    e++;
            else
                for (e in a)
                    a.hasOwnProperty(e) && b.call(c, a[e], e, a)
    }
    function n(a, b, c) {
        for (var e = Object.keys(b), f = 0; f < e.length; )
            (!c || c && a[e[f]] === d) && (a[e[f]] = b[e[f]]),
            f++;
        return a
    }
    function o(a, b) {
        return n(a, b, !0)
    }
    function p(a, b, c) {
        var e, d = b.prototype;
        e = a.prototype = Object.create(d),
        e.constructor = a,
        e._super = d,
        c && n(e, c)
    }
    function q(a, b) {
        return function() {
            return a.apply(b, arguments)
        }
    }
    function r(a, b) {
        return typeof a == g ? a.apply(b ? b[0] || d : d, b) : a
    }
    function s(a, b) {
        return a === d ? b : a
    }
    function t(a, b, c) {
        m(x(b), function(b) {
            a.addEventListener(b, c, !1)
        })
    }
    function u(a, b, c) {
        m(x(b), function(b) {
            a.removeEventListener(b, c, !1)
        })
    }
    function v(a, b) {
        for (; a; ) {
            if (a == b)
                return !0;
            a = a.parentNode
        }
        return !1
    }
    function w(a, b) {
        return a.indexOf(b) > -1
    }
    function x(a) {
        return a.trim().split(/\s+/g)
    }
    function y(a, b, c) {
        if (a.indexOf && !c)
            return a.indexOf(b);
        for (var d = 0; d < a.length; ) {
            if (c && a[d][c] == b || !c && a[d] === b)
                return d;
            d++
        }
        return -1
    }
    function z(a) {
        return Array.prototype.slice.call(a, 0)
    }
    function A(a, b, c) {
        for (var d = [], e = [], f = 0; f < a.length; ) {
            var g = b ? a[f][b] : a[f];
            y(e, g) < 0 && d.push(a[f]),
            e[f] = g,
            f++
        }
        return c && (d = b ? d.sort(function(a, c) {
            return a[b] > c[b]
        }) : d.sort()),
        d
    }
    function B(a, b) {
        for (var c, f, g = b[0].toUpperCase() + b.slice(1), h = 0; h < e.length; ) {
            if (c = e[h],
            f = c ? c + g : b,
            f in a)
                return f;
            h++
        }
        return d
    }
    function D() {
        return C++
    }
    function E(a) {
        var b = a.ownerDocument;
        return b.defaultView || b.parentWindow
    }
    function ab(a, b) {
        var c = this;
        this.manager = a,
        this.callback = b,
        this.element = a.element,
        this.target = a.options.inputTarget,
        this.domHandler = function(b) {
            r(a.options.enable, [a]) && c.handler(b)
        }
        ,
        this.init()
    }
    function bb(a) {
        var b, c = a.options.inputClass;
        return b = c ? c : H ? wb : I ? Eb : G ? Gb : rb,
        new b(a,cb)
    }
    function cb(a, b, c) {
        var d = c.pointers.length
          , e = c.changedPointers.length
          , f = b & O && 0 === d - e
          , g = b & (Q | R) && 0 === d - e;
        c.isFirst = !!f,
        c.isFinal = !!g,
        f && (a.session = {}),
        c.eventType = b,
        db(a, c),
        a.emit("hammer.input", c),
        a.recognize(c),
        a.session.prevInput = c
    }
    function db(a, b) {
        var c = a.session
          , d = b.pointers
          , e = d.length;
        c.firstInput || (c.firstInput = gb(b)),
        e > 1 && !c.firstMultiple ? c.firstMultiple = gb(b) : 1 === e && (c.firstMultiple = !1);
        var f = c.firstInput
          , g = c.firstMultiple
          , h = g ? g.center : f.center
          , i = b.center = hb(d);
        b.timeStamp = j(),
        b.deltaTime = b.timeStamp - f.timeStamp,
        b.angle = lb(h, i),
        b.distance = kb(h, i),
        eb(c, b),
        b.offsetDirection = jb(b.deltaX, b.deltaY),
        b.scale = g ? nb(g.pointers, d) : 1,
        b.rotation = g ? mb(g.pointers, d) : 0,
        fb(c, b);
        var k = a.element;
        v(b.srcEvent.target, k) && (k = b.srcEvent.target),
        b.target = k
    }
    function eb(a, b) {
        var c = b.center
          , d = a.offsetDelta || {}
          , e = a.prevDelta || {}
          , f = a.prevInput || {};
        (b.eventType === O || f.eventType === Q) && (e = a.prevDelta = {
            x: f.deltaX || 0,
            y: f.deltaY || 0
        },
        d = a.offsetDelta = {
            x: c.x,
            y: c.y
        }),
        b.deltaX = e.x + (c.x - d.x),
        b.deltaY = e.y + (c.y - d.y)
    }
    function fb(a, b) {
        var f, g, h, j, c = a.lastInterval || b, e = b.timeStamp - c.timeStamp;
        if (b.eventType != R && (e > N || c.velocity === d)) {
            var k = c.deltaX - b.deltaX
              , l = c.deltaY - b.deltaY
              , m = ib(e, k, l);
            g = m.x,
            h = m.y,
            f = i(m.x) > i(m.y) ? m.x : m.y,
            j = jb(k, l),
            a.lastInterval = b
        } else
            f = c.velocity,
            g = c.velocityX,
            h = c.velocityY,
            j = c.direction;
        b.velocity = f,
        b.velocityX = g,
        b.velocityY = h,
        b.direction = j
    }
    function gb(a) {
        for (var b = [], c = 0; c < a.pointers.length; )
            b[c] = {
                clientX: h(a.pointers[c].clientX),
                clientY: h(a.pointers[c].clientY)
            },
            c++;
        return {
            timeStamp: j(),
            pointers: b,
            center: hb(b),
            deltaX: a.deltaX,
            deltaY: a.deltaY
        }
    }
    function hb(a) {
        var b = a.length;
        if (1 === b)
            return {
                x: h(a[0].clientX),
                y: h(a[0].clientY)
            };
        for (var c = 0, d = 0, e = 0; b > e; )
            c += a[e].clientX,
            d += a[e].clientY,
            e++;
        return {
            x: h(c / b),
            y: h(d / b)
        }
    }
    function ib(a, b, c) {
        return {
            x: b / a || 0,
            y: c / a || 0
        }
    }
    function jb(a, b) {
        return a === b ? S : i(a) >= i(b) ? a > 0 ? T : U : b > 0 ? V : W
    }
    function kb(a, b, c) {
        c || (c = $);
        var d = b[c[0]] - a[c[0]]
          , e = b[c[1]] - a[c[1]];
        return Math.sqrt(d * d + e * e)
    }
    function lb(a, b, c) {
        c || (c = $);
        var d = b[c[0]] - a[c[0]]
          , e = b[c[1]] - a[c[1]];
        return 180 * Math.atan2(e, d) / Math.PI
    }
    function mb(a, b) {
        return lb(b[1], b[0], _) - lb(a[1], a[0], _)
    }
    function nb(a, b) {
        return kb(b[0], b[1], _) / kb(a[0], a[1], _)
    }
    function rb() {
        this.evEl = pb,
        this.evWin = qb,
        this.allow = !0,
        this.pressed = !1,
        ab.apply(this, arguments)
    }
    function wb() {
        this.evEl = ub,
        this.evWin = vb,
        ab.apply(this, arguments),
        this.store = this.manager.session.pointerEvents = []
    }
    function Ab() {
        this.evTarget = yb,
        this.evWin = zb,
        this.started = !1,
        ab.apply(this, arguments)
    }
    function Bb(a, b) {
        var c = z(a.touches)
          , d = z(a.changedTouches);
        return b & (Q | R) && (c = A(c.concat(d), "identifier", !0)),
        [c, d]
    }
    function Eb() {
        this.evTarget = Db,
        this.targetIds = {},
        ab.apply(this, arguments)
    }
    function Fb(a, b) {
        var c = z(a.touches)
          , d = this.targetIds;
        if (b & (O | P) && 1 === c.length)
            return d[c[0].identifier] = !0,
            [c, c];
        var e, f, g = z(a.changedTouches), h = [], i = this.target;
        if (f = c.filter(function(a) {
            return v(a.target, i)
        }),
        b === O)
            for (e = 0; e < f.length; )
                d[f[e].identifier] = !0,
                e++;
        for (e = 0; e < g.length; )
            d[g[e].identifier] && h.push(g[e]),
            b & (Q | R) && delete d[g[e].identifier],
            e++;
        return h.length ? [A(f.concat(h), "identifier", !0), h] : void 0
    }
    function Gb() {
        ab.apply(this, arguments);
        var a = q(this.handler, this);
        this.touch = new Eb(this.manager,a),
        this.mouse = new rb(this.manager,a)
    }
    function Pb(a, b) {
        this.manager = a,
        this.set(b)
    }
    function Qb(a) {
        if (w(a, Mb))
            return Mb;
        var b = w(a, Nb)
          , c = w(a, Ob);
        return b && c ? Nb + " " + Ob : b || c ? b ? Nb : Ob : w(a, Lb) ? Lb : Kb
    }
    function Yb(a) {
        this.id = D(),
        this.manager = null,
        this.options = o(a || {}, this.defaults),
        this.options.enable = s(this.options.enable, !0),
        this.state = Rb,
        this.simultaneous = {},
        this.requireFail = []
    }
    function Zb(a) {
        return a & Wb ? "cancel" : a & Ub ? "end" : a & Tb ? "move" : a & Sb ? "start" : ""
    }
    function $b(a) {
        return a == W ? "down" : a == V ? "up" : a == T ? "left" : a == U ? "right" : ""
    }
    function _b(a, b) {
        var c = b.manager;
        return c ? c.get(a) : a
    }
    function ac() {
        Yb.apply(this, arguments)
    }
    function bc() {
        ac.apply(this, arguments),
        this.pX = null,
        this.pY = null
    }
    function cc() {
        ac.apply(this, arguments)
    }
    function dc() {
        Yb.apply(this, arguments),
        this._timer = null,
        this._input = null
    }
    function ec() {
        ac.apply(this, arguments)
    }
    function fc() {
        ac.apply(this, arguments)
    }
    function gc() {
        Yb.apply(this, arguments),
        this.pTime = !1,
        this.pCenter = !1,
        this._timer = null,
        this._input = null,
        this.count = 0
    }
    function hc(a, b) {
        return b = b || {},
        b.recognizers = s(b.recognizers, hc.defaults.preset),
        new kc(a,b)
    }
    function kc(a, b) {
        b = b || {},
        this.options = o(b, hc.defaults),
        this.options.inputTarget = this.options.inputTarget || a,
        this.handlers = {},
        this.session = {},
        this.recognizers = [],
        this.element = a,
        this.input = bb(this),
        this.touchAction = new Pb(this,this.options.touchAction),
        lc(this, !0),
        m(b.recognizers, function(a) {
            var b = this.add(new a[0](a[1]));
            a[2] && b.recognizeWith(a[2]),
            a[3] && b.requireFailure(a[3])
        }, this)
    }
    function lc(a, b) {
        var c = a.element;
        m(a.options.cssProps, function(a, d) {
            c.style[B(c.style, d)] = b ? a : ""
        })
    }
    function mc(a, c) {
        var d = b.createEvent("Event");
        d.initEvent(a, !0, !0),
        d.gesture = c,
        c.target.dispatchEvent(d)
    }
    var e = ["", "webkit", "moz", "MS", "ms", "o"]
      , f = b.createElement("div")
      , g = "function"
      , h = Math.round
      , i = Math.abs
      , j = Date.now
      , C = 1
      , F = /mobile|tablet|ip(ad|hone|od)|android/i
      , G = "ontouchstart"in a
      , H = B(a, "PointerEvent") !== d
      , I = G && F.test(navigator.userAgent)
      , J = "touch"
      , K = "pen"
      , L = "mouse"
      , M = "kinect"
      , N = 25
      , O = 1
      , P = 2
      , Q = 4
      , R = 8
      , S = 1
      , T = 2
      , U = 4
      , V = 8
      , W = 16
      , X = T | U
      , Y = V | W
      , Z = X | Y
      , $ = ["x", "y"]
      , _ = ["clientX", "clientY"];
    ab.prototype = {
        handler: function() {},
        init: function() {
            this.evEl && t(this.element, this.evEl, this.domHandler),
            this.evTarget && t(this.target, this.evTarget, this.domHandler),
            this.evWin && t(E(this.element), this.evWin, this.domHandler)
        },
        destroy: function() {
            this.evEl && u(this.element, this.evEl, this.domHandler),
            this.evTarget && u(this.target, this.evTarget, this.domHandler),
            this.evWin && u(E(this.element), this.evWin, this.domHandler)
        }
    };
    var ob = {
        mousedown: O,
        mousemove: P,
        mouseup: Q
    }
      , pb = "mousedown"
      , qb = "mousemove mouseup";
    p(rb, ab, {
        handler: function(a) {
            var b = ob[a.type];
            b & O && 0 === a.button && (this.pressed = !0),
            b & P && 1 !== a.which && (b = Q),
            this.pressed && this.allow && (b & Q && (this.pressed = !1),
            this.callback(this.manager, b, {
                pointers: [a],
                changedPointers: [a],
                pointerType: L,
                srcEvent: a
            }))
        }
    });
    var sb = {
        pointerdown: O,
        pointermove: P,
        pointerup: Q,
        pointercancel: R,
        pointerout: R
    }
      , tb = {
        2: J,
        3: K,
        4: L,
        5: M
    }
      , ub = "pointerdown"
      , vb = "pointermove pointerup pointercancel";
    a.MSPointerEvent && (ub = "MSPointerDown",
    vb = "MSPointerMove MSPointerUp MSPointerCancel"),
    p(wb, ab, {
        handler: function(a) {
            var b = this.store
              , c = !1
              , d = a.type.toLowerCase().replace("ms", "")
              , e = sb[d]
              , f = tb[a.pointerType] || a.pointerType
              , g = f == J
              , h = y(b, a.pointerId, "pointerId");
            e & O && (0 === a.button || g) ? 0 > h && (b.push(a),
            h = b.length - 1) : e & (Q | R) && (c = !0),
            0 > h || (b[h] = a,
            this.callback(this.manager, e, {
                pointers: b,
                changedPointers: [a],
                pointerType: f,
                srcEvent: a
            }),
            c && b.splice(h, 1))
        }
    });
    var xb = {
        touchstart: O,
        touchmove: P,
        touchend: Q,
        touchcancel: R
    }
      , yb = "touchstart"
      , zb = "touchstart touchmove touchend touchcancel";
    p(Ab, ab, {
        handler: function(a) {
            var b = xb[a.type];
            if (b === O && (this.started = !0),
            this.started) {
                var c = Bb.call(this, a, b);
                b & (Q | R) && 0 === c[0].length - c[1].length && (this.started = !1),
                this.callback(this.manager, b, {
                    pointers: c[0],
                    changedPointers: c[1],
                    pointerType: J,
                    srcEvent: a
                })
            }
        }
    });
    var Cb = {
        touchstart: O,
        touchmove: P,
        touchend: Q,
        touchcancel: R
    }
      , Db = "touchstart touchmove touchend touchcancel";
    p(Eb, ab, {
        handler: function(a) {
            var b = Cb[a.type]
              , c = Fb.call(this, a, b);
            c && this.callback(this.manager, b, {
                pointers: c[0],
                changedPointers: c[1],
                pointerType: J,
                srcEvent: a
            })
        }
    }),
    p(Gb, ab, {
        handler: function(a, b, c) {
            var d = c.pointerType == J
              , e = c.pointerType == L;
            if (d)
                this.mouse.allow = !1;
            else if (e && !this.mouse.allow)
                return;
            b & (Q | R) && (this.mouse.allow = !0),
            this.callback(a, b, c)
        },
        destroy: function() {
            this.touch.destroy(),
            this.mouse.destroy()
        }
    });
    var Hb = B(f.style, "touchAction")
      , Ib = Hb !== d
      , Jb = "compute"
      , Kb = "auto"
      , Lb = "manipulation"
      , Mb = "none"
      , Nb = "pan-x"
      , Ob = "pan-y";
    Pb.prototype = {
        set: function(a) {
            a == Jb && (a = this.compute()),
            Ib && (this.manager.element.style[Hb] = a),
            this.actions = a.toLowerCase().trim()
        },
        update: function() {
            this.set(this.manager.options.touchAction)
        },
        compute: function() {
            var a = [];
            return m(this.manager.recognizers, function(b) {
                r(b.options.enable, [b]) && (a = a.concat(b.getTouchAction()))
            }),
            Qb(a.join(" "))
        },
        preventDefaults: function(a) {
            if (!Ib) {
                var b = a.srcEvent
                  , c = a.offsetDirection;
                if (this.manager.session.prevented)
                    return b.preventDefault(),
                    void 0;
                var d = this.actions
                  , e = w(d, Mb)
                  , f = w(d, Ob)
                  , g = w(d, Nb);
                return e || f && c & X || g && c & Y ? this.preventSrc(b) : void 0
            }
        },
        preventSrc: function(a) {
            this.manager.session.prevented = !0,
            a.preventDefault()
        }
    };
    var Rb = 1
      , Sb = 2
      , Tb = 4
      , Ub = 8
      , Vb = Ub
      , Wb = 16
      , Xb = 32;
    Yb.prototype = {
        defaults: {},
        set: function(a) {
            return n(this.options, a),
            this.manager && this.manager.touchAction.update(),
            this
        },
        recognizeWith: function(a) {
            if (l(a, "recognizeWith", this))
                return this;
            var b = this.simultaneous;
            return a = _b(a, this),
            b[a.id] || (b[a.id] = a,
            a.recognizeWith(this)),
            this
        },
        dropRecognizeWith: function(a) {
            return l(a, "dropRecognizeWith", this) ? this : (a = _b(a, this),
            delete this.simultaneous[a.id],
            this)
        },
        requireFailure: function(a) {
            if (l(a, "requireFailure", this))
                return this;
            var b = this.requireFail;
            return a = _b(a, this),
            -1 === y(b, a) && (b.push(a),
            a.requireFailure(this)),
            this
        },
        dropRequireFailure: function(a) {
            if (l(a, "dropRequireFailure", this))
                return this;
            a = _b(a, this);
            var b = y(this.requireFail, a);
            return b > -1 && this.requireFail.splice(b, 1),
            this
        },
        hasRequireFailures: function() {
            return this.requireFail.length > 0
        },
        canRecognizeWith: function(a) {
            return !!this.simultaneous[a.id]
        },
        emit: function(a) {
            function d(d) {
                b.manager.emit(b.options.event + (d ? Zb(c) : ""), a)
            }
            var b = this
              , c = this.state;
            Ub > c && d(!0),
            d(),
            c >= Ub && d(!0)
        },
        tryEmit: function(a) {
            return this.canEmit() ? this.emit(a) : (this.state = Xb,
            void 0)
        },
        canEmit: function() {
            for (var a = 0; a < this.requireFail.length; ) {
                if (!(this.requireFail[a].state & (Xb | Rb)))
                    return !1;
                a++
            }
            return !0
        },
        recognize: function(a) {
            var b = n({}, a);
            return r(this.options.enable, [this, b]) ? (this.state & (Vb | Wb | Xb) && (this.state = Rb),
            this.state = this.process(b),
            this.state & (Sb | Tb | Ub | Wb) && this.tryEmit(b),
            void 0) : (this.reset(),
            this.state = Xb,
            void 0)
        },
        process: function() {},
        getTouchAction: function() {},
        reset: function() {}
    },
    p(ac, Yb, {
        defaults: {
            pointers: 1
        },
        attrTest: function(a) {
            var b = this.options.pointers;
            return 0 === b || a.pointers.length === b
        },
        process: function(a) {
            var b = this.state
              , c = a.eventType
              , d = b & (Sb | Tb)
              , e = this.attrTest(a);
            return d && (c & R || !e) ? b | Wb : d || e ? c & Q ? b | Ub : b & Sb ? b | Tb : Sb : Xb
        }
    }),
    p(bc, ac, {
        defaults: {
            event: "pan",
            threshold: 10,
            pointers: 1,
            direction: Z
        },
        getTouchAction: function() {
            var a = this.options.direction
              , b = [];
            return a & X && b.push(Ob),
            a & Y && b.push(Nb),
            b
        },
        directionTest: function(a) {
            var b = this.options
              , c = !0
              , d = a.distance
              , e = a.direction
              , f = a.deltaX
              , g = a.deltaY;
            return e & b.direction || (b.direction & X ? (e = 0 === f ? S : 0 > f ? T : U,
            c = f != this.pX,
            d = Math.abs(a.deltaX)) : (e = 0 === g ? S : 0 > g ? V : W,
            c = g != this.pY,
            d = Math.abs(a.deltaY))),
            a.direction = e,
            c && d > b.threshold && e & b.direction
        },
        attrTest: function(a) {
            return ac.prototype.attrTest.call(this, a) && (this.state & Sb || !(this.state & Sb) && this.directionTest(a))
        },
        emit: function(a) {
            this.pX = a.deltaX,
            this.pY = a.deltaY;
            var b = $b(a.direction);
            b && this.manager.emit(this.options.event + b, a),
            this._super.emit.call(this, a)
        }
    }),
    p(cc, ac, {
        defaults: {
            event: "pinch",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function() {
            return [Mb]
        },
        attrTest: function(a) {
            return this._super.attrTest.call(this, a) && (Math.abs(a.scale - 1) > this.options.threshold || this.state & Sb)
        },
        emit: function(a) {
            if (this._super.emit.call(this, a),
            1 !== a.scale) {
                var b = a.scale < 1 ? "in" : "out";
                this.manager.emit(this.options.event + b, a)
            }
        }
    }),
    p(dc, Yb, {
        defaults: {
            event: "press",
            pointers: 1,
            time: 500,
            threshold: 5
        },
        getTouchAction: function() {
            return [Kb]
        },
        process: function(a) {
            var b = this.options
              , c = a.pointers.length === b.pointers
              , d = a.distance < b.threshold
              , e = a.deltaTime > b.time;
            if (this._input = a,
            !d || !c || a.eventType & (Q | R) && !e)
                this.reset();
            else if (a.eventType & O)
                this.reset(),
                this._timer = k(function() {
                    this.state = Vb,
                    this.tryEmit()
                }, b.time, this);
            else if (a.eventType & Q)
                return Vb;
            return Xb
        },
        reset: function() {
            clearTimeout(this._timer)
        },
        emit: function(a) {
            this.state === Vb && (a && a.eventType & Q ? this.manager.emit(this.options.event + "up", a) : (this._input.timeStamp = j(),
            this.manager.emit(this.options.event, this._input)))
        }
    }),
    p(ec, ac, {
        defaults: {
            event: "rotate",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function() {
            return [Mb]
        },
        attrTest: function(a) {
            return this._super.attrTest.call(this, a) && (Math.abs(a.rotation) > this.options.threshold || this.state & Sb)
        }
    }),
    p(fc, ac, {
        defaults: {
            event: "swipe",
            threshold: 10,
            velocity: .65,
            direction: X | Y,
            pointers: 1
        },
        getTouchAction: function() {
            return bc.prototype.getTouchAction.call(this)
        },
        attrTest: function(a) {
            var c, b = this.options.direction;
            return b & (X | Y) ? c = a.velocity : b & X ? c = a.velocityX : b & Y && (c = a.velocityY),
            this._super.attrTest.call(this, a) && b & a.direction && a.distance > this.options.threshold && i(c) > this.options.velocity && a.eventType & Q
        },
        emit: function(a) {
            var b = $b(a.direction);
            b && this.manager.emit(this.options.event + b, a),
            this.manager.emit(this.options.event, a)
        }
    }),
    p(gc, Yb, {
        defaults: {
            event: "tap",
            pointers: 1,
            taps: 1,
            interval: 300,
            time: 250,
            threshold: 2,
            posThreshold: 10
        },
        getTouchAction: function() {
            return [Lb]
        },
        process: function(a) {
            var b = this.options
              , c = a.pointers.length === b.pointers
              , d = a.distance < b.threshold
              , e = a.deltaTime < b.time;
            if (this.reset(),
            a.eventType & O && 0 === this.count)
                return this.failTimeout();
            if (d && e && c) {
                if (a.eventType != Q)
                    return this.failTimeout();
                var f = this.pTime ? a.timeStamp - this.pTime < b.interval : !0
                  , g = !this.pCenter || kb(this.pCenter, a.center) < b.posThreshold;
                this.pTime = a.timeStamp,
                this.pCenter = a.center,
                g && f ? this.count += 1 : this.count = 1,
                this._input = a;
                var h = this.count % b.taps;
                if (0 === h)
                    return this.hasRequireFailures() ? (this._timer = k(function() {
                        this.state = Vb,
                        this.tryEmit()
                    }, b.interval, this),
                    Sb) : Vb
            }
            return Xb
        },
        failTimeout: function() {
            return this._timer = k(function() {
                this.state = Xb
            }, this.options.interval, this),
            Xb
        },
        reset: function() {
            clearTimeout(this._timer)
        },
        emit: function() {
            this.state == Vb && (this._input.tapCount = this.count,
            this.manager.emit(this.options.event, this._input))
        }
    }),
    hc.VERSION = "2.0.4",
    hc.defaults = {
        domEvents: !1,
        touchAction: Jb,
        enable: !0,
        inputTarget: null,
        inputClass: null,
        preset: [[ec, {
            enable: !1
        }], [cc, {
            enable: !1
        }, ["rotate"]], [fc, {
            direction: X
        }], [bc, {
            direction: X
        }, ["swipe"]], [gc], [gc, {
            event: "doubletap",
            taps: 2
        }, ["tap"]], [dc]],
        cssProps: {
            userSelect: "default",
            touchSelect: "none",
            touchCallout: "none",
            contentZooming: "none",
            userDrag: "none",
            tapHighlightColor: "rgba(0,0,0,0)"
        }
    };
    var ic = 1
      , jc = 2;
    kc.prototype = {
        set: function(a) {
            return n(this.options, a),
            a.touchAction && this.touchAction.update(),
            a.inputTarget && (this.input.destroy(),
            this.input.target = a.inputTarget,
            this.input.init()),
            this
        },
        stop: function(a) {
            this.session.stopped = a ? jc : ic
        },
        recognize: function(a) {
            var b = this.session;
            if (!b.stopped) {
                this.touchAction.preventDefaults(a);
                var c, d = this.recognizers, e = b.curRecognizer;
                (!e || e && e.state & Vb) && (e = b.curRecognizer = null);
                for (var f = 0; f < d.length; )
                    c = d[f],
                    b.stopped === jc || e && c != e && !c.canRecognizeWith(e) ? c.reset() : c.recognize(a),
                    !e && c.state & (Sb | Tb | Ub) && (e = b.curRecognizer = c),
                    f++
            }
        },
        get: function(a) {
            if (a instanceof Yb)
                return a;
            for (var b = this.recognizers, c = 0; c < b.length; c++)
                if (b[c].options.event == a)
                    return b[c];
            return null
        },
        add: function(a) {
            if (l(a, "add", this))
                return this;
            var b = this.get(a.options.event);
            return b && this.remove(b),
            this.recognizers.push(a),
            a.manager = this,
            this.touchAction.update(),
            a
        },
        remove: function(a) {
            if (l(a, "remove", this))
                return this;
            var b = this.recognizers;
            return a = this.get(a),
            b.splice(y(b, a), 1),
            this.touchAction.update(),
            this
        },
        on: function(a, b) {
            var c = this.handlers;
            return m(x(a), function(a) {
                c[a] = c[a] || [],
                c[a].push(b)
            }),
            this
        },
        off: function(a, b) {
            var c = this.handlers;
            return m(x(a), function(a) {
                b ? c[a].splice(y(c[a], b), 1) : delete c[a]
            }),
            this
        },
        emit: function(a, b) {
            this.options.domEvents && mc(a, b);
            var c = this.handlers[a] && this.handlers[a].slice();
            if (c && c.length) {
                b.type = a,
                b.preventDefault = function() {
                    b.srcEvent.preventDefault()
                }
                ;
                for (var d = 0; d < c.length; )
                    c[d](b),
                    d++
            }
        },
        destroy: function() {
            this.element && lc(this, !1),
            this.handlers = {},
            this.session = {},
            this.input.destroy(),
            this.element = null
        }
    },
    n(hc, {
        INPUT_START: O,
        INPUT_MOVE: P,
        INPUT_END: Q,
        INPUT_CANCEL: R,
        STATE_POSSIBLE: Rb,
        STATE_BEGAN: Sb,
        STATE_CHANGED: Tb,
        STATE_ENDED: Ub,
        STATE_RECOGNIZED: Vb,
        STATE_CANCELLED: Wb,
        STATE_FAILED: Xb,
        DIRECTION_NONE: S,
        DIRECTION_LEFT: T,
        DIRECTION_RIGHT: U,
        DIRECTION_UP: V,
        DIRECTION_DOWN: W,
        DIRECTION_HORIZONTAL: X,
        DIRECTION_VERTICAL: Y,
        DIRECTION_ALL: Z,
        Manager: kc,
        Input: ab,
        TouchAction: Pb,
        TouchInput: Eb,
        MouseInput: rb,
        PointerEventInput: wb,
        TouchMouseInput: Gb,
        SingleTouchInput: Ab,
        Recognizer: Yb,
        AttrRecognizer: ac,
        Tap: gc,
        Pan: bc,
        Swipe: fc,
        Pinch: cc,
        Rotate: ec,
        Press: dc,
        on: t,
        off: u,
        each: m,
        merge: o,
        extend: n,
        inherit: p,
        bindFn: q,
        prefixed: B
    }),
    typeof define == g && define.amd ? define(function() {
        return hc
    }) : "undefined" != typeof module && module.exports ? module.exports = hc : a[c] = hc
}(window, document, "Hammer");

/************Hammer*************/
(function(a) {
    "function" === typeof define && define.amd ? define(["jquery", "hammerjs"], a) : "object" === typeof exports ? a(require("jquery"), require("hammerjs")) : a(jQuery, Hammer)
}
)(function(a, c) {
    a.fn.hammer = function(e) {
        return this.each(function() {
            var b = a(this);
            b.data("hammer") || b.data("hammer", new c(b[0],e))
        })
    }
    ;
    c.Manager.prototype.emit = function(c) {
        return function(b, d) {
            c.call(this, b, d);
            a(this.element).trigger({
                type: b,
                gesture: d
            })
        }
    }(c.Manager.prototype.emit)
});
/*! VelocityJS.org (1.2.2). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
!function(e) {
    function t(e) {
        var t = e.length
          , r = $.type(e);
        return "function" === r || $.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === r || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }
    if (!e.jQuery) {
        var $ = function(e, t) {
            return new $.fn.init(e,t)
        };
        $.isWindow = function(e) {
            return null != e && e == e.window
        }
        ,
        $.type = function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? a[o.call(e)] || "object" : typeof e
        }
        ,
        $.isArray = Array.isArray || function(e) {
            return "array" === $.type(e)
        }
        ,
        $.isPlainObject = function(e) {
            var t;
            if (!e || "object" !== $.type(e) || e.nodeType || $.isWindow(e))
                return !1;
            try {
                if (e.constructor && !n.call(e, "constructor") && !n.call(e.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (r) {
                return !1
            }
            for (t in e)
                ;
            return void 0 === t || n.call(e, t)
        }
        ,
        $.each = function(e, r, a) {
            var n, o = 0, i = e.length, s = t(e);
            if (a) {
                if (s)
                    for (; i > o && (n = r.apply(e[o], a),
                    n !== !1); o++)
                        ;
                else
                    for (o in e)
                        if (n = r.apply(e[o], a),
                        n === !1)
                            break
            } else if (s)
                for (; i > o && (n = r.call(e[o], o, e[o]),
                n !== !1); o++)
                    ;
            else
                for (o in e)
                    if (n = r.call(e[o], o, e[o]),
                    n === !1)
                        break;
            return e
        }
        ,
        $.data = function(e, t, a) {
            if (void 0 === a) {
                var n = e[$.expando]
                  , o = n && r[n];
                if (void 0 === t)
                    return o;
                if (o && t in o)
                    return o[t]
            } else if (void 0 !== t) {
                var n = e[$.expando] || (e[$.expando] = ++$.uuid);
                return r[n] = r[n] || {},
                r[n][t] = a,
                a
            }
        }
        ,
        $.removeData = function(e, t) {
            var a = e[$.expando]
              , n = a && r[a];
            n && $.each(t, function(e, t) {
                delete n[t]
            })
        }
        ,
        $.extend = function() {
            var e, t, r, a, n, o, i = arguments[0] || {}, s = 1, l = arguments.length, u = !1;
            for ("boolean" == typeof i && (u = i,
            i = arguments[s] || {},
            s++),
            "object" != typeof i && "function" !== $.type(i) && (i = {}),
            s === l && (i = this,
            s--); l > s; s++)
                if (null != (n = arguments[s]))
                    for (a in n)
                        e = i[a],
                        r = n[a],
                        i !== r && (u && r && ($.isPlainObject(r) || (t = $.isArray(r))) ? (t ? (t = !1,
                        o = e && $.isArray(e) ? e : []) : o = e && $.isPlainObject(e) ? e : {},
                        i[a] = $.extend(u, o, r)) : void 0 !== r && (i[a] = r));
            return i
        }
        ,
        $.queue = function(e, r, a) {
            function n(e, r) {
                var a = r || [];
                return null != e && (t(Object(e)) ? !function(e, t) {
                    for (var r = +t.length, a = 0, n = e.length; r > a; )
                        e[n++] = t[a++];
                    if (r !== r)
                        for (; void 0 !== t[a]; )
                            e[n++] = t[a++];
                    return e.length = n,
                    e
                }(a, "string" == typeof e ? [e] : e) : [].push.call(a, e)),
                a
            }
            if (e) {
                r = (r || "fx") + "queue";
                var o = $.data(e, r);
                return a ? (!o || $.isArray(a) ? o = $.data(e, r, n(a)) : o.push(a),
                o) : o || []
            }
        }
        ,
        $.dequeue = function(e, t) {
            $.each(e.nodeType ? [e] : e, function(e, r) {
                t = t || "fx";
                var a = $.queue(r, t)
                  , n = a.shift();
                "inprogress" === n && (n = a.shift()),
                n && ("fx" === t && a.unshift("inprogress"),
                n.call(r, function() {
                    $.dequeue(r, t)
                }))
            })
        }
        ,
        $.fn = $.prototype = {
            init: function(e) {
                if (e.nodeType)
                    return this[0] = e,
                    this;
                throw new Error("Not a DOM node.")
            },
            offset: function() {
                var t = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                    top: 0,
                    left: 0
                };
                return {
                    top: t.top + (e.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                    left: t.left + (e.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                }
            },
            position: function() {
                function e() {
                    for (var e = this.offsetParent || document; e && "html" === !e.nodeType.toLowerCase && "static" === e.style.position; )
                        e = e.offsetParent;
                    return e || document
                }
                var t = this[0]
                  , e = e.apply(t)
                  , r = this.offset()
                  , a = /^(?:body|html)$/i.test(e.nodeName) ? {
                    top: 0,
                    left: 0
                } : $(e).offset();
                return r.top -= parseFloat(t.style.marginTop) || 0,
                r.left -= parseFloat(t.style.marginLeft) || 0,
                e.style && (a.top += parseFloat(e.style.borderTopWidth) || 0,
                a.left += parseFloat(e.style.borderLeftWidth) || 0),
                {
                    top: r.top - a.top,
                    left: r.left - a.left
                }
            }
        };
        var r = {};
        $.expando = "velocity" + (new Date).getTime(),
        $.uuid = 0;
        for (var a = {}, n = a.hasOwnProperty, o = a.toString, i = "Boolean Number String Function Array Date RegExp Object Error".split(" "), s = 0; s < i.length; s++)
            a["[object " + i[s] + "]"] = i[s].toLowerCase();
        $.fn.init.prototype = $.fn,
        e.Velocity = {
            Utilities: $
        }
    }
}(window),
function(e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : e()
}(function() {
    return function(e, t, r, a) {
        function n(e) {
            for (var t = -1, r = e ? e.length : 0, a = []; ++t < r; ) {
                var n = e[t];
                n && a.push(n)
            }
            return a
        }
        function o(e) {
            return g.isWrapped(e) ? e = [].slice.call(e) : g.isNode(e) && (e = [e]),
            e
        }
        function i(e) {
            var t = $.data(e, "velocity");
            return null === t ? a : t
        }
        function s(e) {
            return function(t) {
                return Math.round(t * e) * (1 / e)
            }
        }
        function l(e, r, a, n) {
            function o(e, t) {
                return 1 - 3 * t + 3 * e
            }
            function i(e, t) {
                return 3 * t - 6 * e
            }
            function s(e) {
                return 3 * e
            }
            function l(e, t, r) {
                return ((o(t, r) * e + i(t, r)) * e + s(t)) * e
            }
            function u(e, t, r) {
                return 3 * o(t, r) * e * e + 2 * i(t, r) * e + s(t)
            }
            function c(t, r) {
                for (var n = 0; m > n; ++n) {
                    var o = u(r, e, a);
                    if (0 === o)
                        return r;
                    var i = l(r, e, a) - t;
                    r -= i / o
                }
                return r
            }
            function p() {
                for (var t = 0; b > t; ++t)
                    w[t] = l(t * x, e, a)
            }
            function f(t, r, n) {
                var o, i, s = 0;
                do
                    i = r + (n - r) / 2,
                    o = l(i, e, a) - t,
                    o > 0 ? n = i : r = i;
                while (Math.abs(o) > h && ++s < v);
                return i
            }
            function d(t) {
                for (var r = 0, n = 1, o = b - 1; n != o && w[n] <= t; ++n)
                    r += x;
                --n;
                var i = (t - w[n]) / (w[n + 1] - w[n])
                  , s = r + i * x
                  , l = u(s, e, a);
                return l >= y ? c(t, s) : 0 == l ? s : f(t, r, r + x)
            }
            function g() {
                V = !0,
                (e != r || a != n) && p()
            }
            var m = 4
              , y = .001
              , h = 1e-7
              , v = 10
              , b = 11
              , x = 1 / (b - 1)
              , S = "Float32Array"in t;
            if (4 !== arguments.length)
                return !1;
            for (var P = 0; 4 > P; ++P)
                if ("number" != typeof arguments[P] || isNaN(arguments[P]) || !isFinite(arguments[P]))
                    return !1;
            e = Math.min(e, 1),
            a = Math.min(a, 1),
            e = Math.max(e, 0),
            a = Math.max(a, 0);
            var w = S ? new Float32Array(b) : new Array(b)
              , V = !1
              , C = function(t) {
                return V || g(),
                e === r && a === n ? t : 0 === t ? 0 : 1 === t ? 1 : l(d(t), r, n)
            };
            C.getControlPoints = function() {
                return [{
                    x: e,
                    y: r
                }, {
                    x: a,
                    y: n
                }]
            }
            ;
            var T = "generateBezier(" + [e, r, a, n] + ")";
            return C.toString = function() {
                return T
            }
            ,
            C
        }
        function u(e, t) {
            var r = e;
            return g.isString(e) ? v.Easings[e] || (r = !1) : r = g.isArray(e) && 1 === e.length ? s.apply(null, e) : g.isArray(e) && 2 === e.length ? b.apply(null, e.concat([t])) : g.isArray(e) && 4 === e.length ? l.apply(null, e) : !1,
            r === !1 && (r = v.Easings[v.defaults.easing] ? v.defaults.easing : h),
            r
        }
        function c(e) {
            if (e) {
                var t = (new Date).getTime()
                  , r = v.State.calls.length;
                r > 1e4 && (v.State.calls = n(v.State.calls));
                for (var o = 0; r > o; o++)
                    if (v.State.calls[o]) {
                        var s = v.State.calls[o]
                          , l = s[0]
                          , u = s[2]
                          , f = s[3]
                          , d = !!f
                          , m = null;
                        f || (f = v.State.calls[o][3] = t - 16);
                        for (var y = Math.min((t - f) / u.duration, 1), h = 0, b = l.length; b > h; h++) {
                            var S = l[h]
                              , w = S.element;
                            if (i(w)) {
                                var V = !1;
                                if (u.display !== a && null !== u.display && "none" !== u.display) {
                                    if ("flex" === u.display) {
                                        var C = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                                        $.each(C, function(e, t) {
                                            x.setPropertyValue(w, "display", t)
                                        })
                                    }
                                    x.setPropertyValue(w, "display", u.display)
                                }
                                u.visibility !== a && "hidden" !== u.visibility && x.setPropertyValue(w, "visibility", u.visibility);
                                for (var T in S)
                                    if ("element" !== T) {
                                        var k = S[T], A, F = g.isString(k.easing) ? v.Easings[k.easing] : k.easing;
                                        if (1 === y)
                                            A = k.endValue;
                                        else {
                                            var E = k.endValue - k.startValue;
                                            if (A = k.startValue + E * F(y, u, E),
                                            !d && A === k.currentValue)
                                                continue
                                        }
                                        if (k.currentValue = A,
                                        "tween" === T)
                                            m = A;
                                        else {
                                            if (x.Hooks.registered[T]) {
                                                var j = x.Hooks.getRoot(T)
                                                  , H = i(w).rootPropertyValueCache[j];
                                                H && (k.rootPropertyValue = H)
                                            }
                                            var N = x.setPropertyValue(w, T, k.currentValue + (0 === parseFloat(A) ? "" : k.unitType), k.rootPropertyValue, k.scrollData);
                                            x.Hooks.registered[T] && (i(w).rootPropertyValueCache[j] = x.Normalizations.registered[j] ? x.Normalizations.registered[j]("extract", null, N[1]) : N[1]),
                                            "transform" === N[0] && (V = !0)
                                        }
                                    }
                                u.mobileHA && i(w).transformCache.translate3d === a && (i(w).transformCache.translate3d = "(0px, 0px, 0px)",
                                V = !0),
                                V && x.flushTransformCache(w)
                            }
                        }
                        u.display !== a && "none" !== u.display && (v.State.calls[o][2].display = !1),
                        u.visibility !== a && "hidden" !== u.visibility && (v.State.calls[o][2].visibility = !1),
                        u.progress && u.progress.call(s[1], s[1], y, Math.max(0, f + u.duration - t), f, m),
                        1 === y && p(o)
                    }
            }
            v.State.isTicking && P(c)
        }
        function p(e, t) {
            if (!v.State.calls[e])
                return !1;
            for (var r = v.State.calls[e][0], n = v.State.calls[e][1], o = v.State.calls[e][2], s = v.State.calls[e][4], l = !1, u = 0, c = r.length; c > u; u++) {
                var p = r[u].element;
                if (t || o.loop || ("none" === o.display && x.setPropertyValue(p, "display", o.display),
                "hidden" === o.visibility && x.setPropertyValue(p, "visibility", o.visibility)),
                o.loop !== !0 && ($.queue(p)[1] === a || !/\.velocityQueueEntryFlag/i.test($.queue(p)[1])) && i(p)) {
                    i(p).isAnimating = !1,
                    i(p).rootPropertyValueCache = {};
                    var f = !1;
                    $.each(x.Lists.transforms3D, function(e, t) {
                        var r = /^scale/.test(t) ? 1 : 0
                          , n = i(p).transformCache[t];
                        i(p).transformCache[t] !== a && new RegExp("^\\(" + r + "[^.]").test(n) && (f = !0,
                        delete i(p).transformCache[t])
                    }),
                    o.mobileHA && (f = !0,
                    delete i(p).transformCache.translate3d),
                    f && x.flushTransformCache(p),
                    x.Values.removeClass(p, "velocity-animating")
                }
                if (!t && o.complete && !o.loop && u === c - 1)
                    try {
                        o.complete.call(n, n)
                    } catch (d) {
                        setTimeout(function() {
                            throw d
                        }, 1)
                    }
                s && o.loop !== !0 && s(n),
                i(p) && o.loop === !0 && !t && ($.each(i(p).tweensContainer, function(e, t) {
                    /^rotate/.test(e) && 360 === parseFloat(t.endValue) && (t.endValue = 0,
                    t.startValue = 360),
                    /^backgroundPosition/.test(e) && 100 === parseFloat(t.endValue) && "%" === t.unitType && (t.endValue = 0,
                    t.startValue = 100)
                }),
                (p,
                "reverse",
                {
                    loop: !0,
                    delay: o.delay
                })),
                o.queue !== !1 && $.dequeue(p, o.queue)
            }
            v.State.calls[e] = !1;
            for (var g = 0, m = v.State.calls.length; m > g; g++)
                if (v.State.calls[g] !== !1) {
                    l = !0;
                    break
                }
            l === !1 && (v.State.isTicking = !1,
            delete v.State.calls,
            v.State.calls = [])
        }
        var f = function() {
            if (r.documentMode)
                return r.documentMode;
            for (var e = 7; e > 4; e--) {
                var t = r.createElement("div");
                if (t.innerHTML = "<!--[if IE " + e + "]><span></span><![endif]-->",
                t.getElementsByTagName("span").length)
                    return t = null,
                    e
            }
            return a
        }(), d = function() {
            var e = 0;
            return t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function(t) {
                var r = (new Date).getTime(), a;
                return a = Math.max(0, 16 - (r - e)),
                e = r + a,
                setTimeout(function() {
                    t(r + a)
                }, a)
            }
        }(), g = {
            isString: function(e) {
                return "string" == typeof e
            },
            isArray: Array.isArray || function(e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            }
            ,
            isFunction: function(e) {
                return "[object Function]" === Object.prototype.toString.call(e)
            },
            isNode: function(e) {
                return e && e.nodeType
            },
            isNodeList: function(e) {
                return "object" == typeof e && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e)) && e.length !== a && (0 === e.length || "object" == typeof e[0] && e[0].nodeType > 0)
            },
            isWrapped: function(e) {
                return e && (e.jquery || t.Zepto && t.Zepto.zepto.isZ(e))
            },
            isSVG: function(e) {
                return t.SVGElement && e instanceof t.SVGElement
            },
            isEmptyObject: function(e) {
                for (var t in e)
                    return !1;
                return !0
            }
        }, $, m = !1;
        if (e.fn && e.fn.jquery ? ($ = e,
        m = !0) : $ = t.Velocity.Utilities,
        8 >= f && !m)
            throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
        if (7 >= f)
            return void (jQuery.fn.velocity = jQuery.fn.animate);
        var y = 400
          , h = "swing"
          , v = {
            State: {
                isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                isAndroid: /Android/i.test(navigator.userAgent),
                isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                isChrome: t.chrome,
                isFirefox: /Firefox/i.test(navigator.userAgent),
                prefixElement: r.createElement("div"),
                prefixMatches: {},
                scrollAnchor: null,
                scrollPropertyLeft: null,
                scrollPropertyTop: null,
                isTicking: !1,
                calls: []
            },
            CSS: {},
            Utilities: $,
            Redirects: {},
            Easings: {},
            Promise: t.Promise,
            defaults: {
                queue: "",
                duration: y,
                easing: h,
                begin: a,
                complete: a,
                progress: a,
                display: a,
                visibility: a,
                loop: !1,
                delay: !1,
                mobileHA: !0,
                _cacheValues: !0
            },
            init: function(e) {
                $.data(e, "velocity", {
                    isSVG: g.isSVG(e),
                    isAnimating: !1,
                    computedStyle: null,
                    tweensContainer: null,
                    rootPropertyValueCache: {},
                    transformCache: {}
                })
            },
            hook: null,
            mock: !1,
            version: {
                major: 1,
                minor: 2,
                patch: 2
            },
            debug: !1
        };
        t.pageYOffset !== a ? (v.State.scrollAnchor = t,
        v.State.scrollPropertyLeft = "pageXOffset",
        v.State.scrollPropertyTop = "pageYOffset") : (v.State.scrollAnchor = r.documentElement || r.body.parentNode || r.body,
        v.State.scrollPropertyLeft = "scrollLeft",
        v.State.scrollPropertyTop = "scrollTop");
        var b = function() {
            function e(e) {
                return -e.tension * e.x - e.friction * e.v
            }
            function t(t, r, a) {
                var n = {
                    x: t.x + a.dx * r,
                    v: t.v + a.dv * r,
                    tension: t.tension,
                    friction: t.friction
                };
                return {
                    dx: n.v,
                    dv: e(n)
                }
            }
            function r(r, a) {
                var n = {
                    dx: r.v,
                    dv: e(r)
                }
                  , o = t(r, .5 * a, n)
                  , i = t(r, .5 * a, o)
                  , s = t(r, a, i)
                  , l = 1 / 6 * (n.dx + 2 * (o.dx + i.dx) + s.dx)
                  , u = 1 / 6 * (n.dv + 2 * (o.dv + i.dv) + s.dv);
                return r.x = r.x + l * a,
                r.v = r.v + u * a,
                r
            }
            return function a(e, t, n) {
                var o = {
                    x: -1,
                    v: 0,
                    tension: null,
                    friction: null
                }, i = [0], s = 0, l = 1e-4, u = .016, c, p, f;
                for (e = parseFloat(e) || 500,
                t = parseFloat(t) || 20,
                n = n || null,
                o.tension = e,
                o.friction = t,
                c = null !== n,
                c ? (s = a(e, t),
                p = s / n * u) : p = u; ; )
                    if (f = r(f || o, p),
                    i.push(1 + f.x),
                    s += 16,
                    !(Math.abs(f.x) > l && Math.abs(f.v) > l))
                        break;
                return c ? function(e) {
                    return i[e * (i.length - 1) | 0]
                }
                : s
            }
        }();
        v.Easings = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            spring: function(e) {
                return 1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e)
            }
        },
        $.each([["ease", [.25, .1, .25, 1]], ["ease-in", [.42, 0, 1, 1]], ["ease-out", [0, 0, .58, 1]], ["ease-in-out", [.42, 0, .58, 1]], ["easeInSine", [.47, 0, .745, .715]], ["easeOutSine", [.39, .575, .565, 1]], ["easeInOutSine", [.445, .05, .55, .95]], ["easeInQuad", [.55, .085, .68, .53]], ["easeOutQuad", [.25, .46, .45, .94]], ["easeInOutQuad", [.455, .03, .515, .955]], ["easeInCubic", [.55, .055, .675, .19]], ["easeOutCubic", [.215, .61, .355, 1]], ["easeInOutCubic", [.645, .045, .355, 1]], ["easeInQuart", [.895, .03, .685, .22]], ["easeOutQuart", [.165, .84, .44, 1]], ["easeInOutQuart", [.77, 0, .175, 1]], ["easeInQuint", [.755, .05, .855, .06]], ["easeOutQuint", [.23, 1, .32, 1]], ["easeInOutQuint", [.86, 0, .07, 1]], ["easeInExpo", [.95, .05, .795, .035]], ["easeOutExpo", [.19, 1, .22, 1]], ["easeInOutExpo", [1, 0, 0, 1]], ["easeInCirc", [.6, .04, .98, .335]], ["easeOutCirc", [.075, .82, .165, 1]], ["easeInOutCirc", [.785, .135, .15, .86]]], function(e, t) {
            v.Easings[t[0]] = l.apply(null, t[1])
        });
        var x = v.CSS = {
            RegEx: {
                isHex: /^#([A-f\d]{3}){1,2}$/i,
                valueUnwrap: /^[A-z]+\((.*)\)$/i,
                wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
            },
            Lists: {
                colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
            },
            Hooks: {
                templates: {
                    textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                    boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                    clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                    backgroundPosition: ["X Y", "0% 0%"],
                    transformOrigin: ["X Y Z", "50% 50% 0px"],
                    perspectiveOrigin: ["X Y", "50% 50%"]
                },
                registered: {},
                register: function() {
                    for (var e = 0; e < x.Lists.colors.length; e++) {
                        var t = "color" === x.Lists.colors[e] ? "0 0 0 1" : "255 255 255 1";
                        x.Hooks.templates[x.Lists.colors[e]] = ["Red Green Blue Alpha", t]
                    }
                    var r, a, n;
                    if (f)
                        for (r in x.Hooks.templates) {
                            a = x.Hooks.templates[r],
                            n = a[0].split(" ");
                            var o = a[1].match(x.RegEx.valueSplit);
                            "Color" === n[0] && (n.push(n.shift()),
                            o.push(o.shift()),
                            x.Hooks.templates[r] = [n.join(" "), o.join(" ")])
                        }
                    for (r in x.Hooks.templates) {
                        a = x.Hooks.templates[r],
                        n = a[0].split(" ");
                        for (var e in n) {
                            var i = r + n[e]
                              , s = e;
                            x.Hooks.registered[i] = [r, s]
                        }
                    }
                },
                getRoot: function(e) {
                    var t = x.Hooks.registered[e];
                    return t ? t[0] : e
                },
                cleanRootPropertyValue: function(e, t) {
                    return x.RegEx.valueUnwrap.test(t) && (t = t.match(x.RegEx.valueUnwrap)[1]),
                    x.Values.isCSSNullValue(t) && (t = x.Hooks.templates[e][1]),
                    t
                },
                extractValue: function(e, t) {
                    var r = x.Hooks.registered[e];
                    if (r) {
                        var a = r[0]
                          , n = r[1];
                        return t = x.Hooks.cleanRootPropertyValue(a, t),
                        t.toString().match(x.RegEx.valueSplit)[n]
                    }
                    return t
                },
                injectValue: function(e, t, r) {
                    var a = x.Hooks.registered[e];
                    if (a) {
                        var n = a[0], o = a[1], i, s;
                        return r = x.Hooks.cleanRootPropertyValue(n, r),
                        i = r.toString().match(x.RegEx.valueSplit),
                        i[o] = t,
                        s = i.join(" ")
                    }
                    return r
                }
            },
            Normalizations: {
                registered: {
                    clip: function(e, t, r) {
                        switch (e) {
                        case "name":
                            return "clip";
                        case "extract":
                            var a;
                            return x.RegEx.wrappedValueAlreadyExtracted.test(r) ? a = r : (a = r.toString().match(x.RegEx.valueUnwrap),
                            a = a ? a[1].replace(/,(\s+)?/g, " ") : r),
                            a;
                        case "inject":
                            return "rect(" + r + ")"
                        }
                    },
                    blur: function(e, t, r) {
                        switch (e) {
                        case "name":
                            return v.State.isFirefox ? "filter" : "-webkit-filter";
                        case "extract":
                            var a = parseFloat(r);
                            if (!a && 0 !== a) {
                                var n = r.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                a = n ? n[1] : 0
                            }
                            return a;
                        case "inject":
                            return parseFloat(r) ? "blur(" + r + ")" : "none"
                        }
                    },
                    opacity: function(e, t, r) {
                        if (8 >= f)
                            switch (e) {
                            case "name":
                                return "filter";
                            case "extract":
                                var a = r.toString().match(/alpha\(opacity=(.*)\)/i);
                                return r = a ? a[1] / 100 : 1;
                            case "inject":
                                return t.style.zoom = 1,
                                parseFloat(r) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(r), 10) + ")"
                            }
                        else
                            switch (e) {
                            case "name":
                                return "opacity";
                            case "extract":
                                return r;
                            case "inject":
                                return r
                            }
                    }
                },
                register: function() {
                    9 >= f || v.State.isGingerbread || (x.Lists.transformsBase = x.Lists.transformsBase.concat(x.Lists.transforms3D));
                    for (var e = 0; e < x.Lists.transformsBase.length; e++)
                        !function() {
                            var t = x.Lists.transformsBase[e];
                            x.Normalizations.registered[t] = function(e, r, n) {
                                switch (e) {
                                case "name":
                                    return "transform";
                                case "extract":
                                    return i(r) === a || i(r).transformCache[t] === a ? /^scale/i.test(t) ? 1 : 0 : i(r).transformCache[t].replace(/[()]/g, "");
                                case "inject":
                                    var o = !1;
                                    switch (t.substr(0, t.length - 1)) {
                                    case "translate":
                                        o = !/(%|px|em|rem|vw|vh|\d)$/i.test(n);
                                        break;
                                    case "scal":
                                    case "scale":
                                        v.State.isAndroid && i(r).transformCache[t] === a && 1 > n && (n = 1),
                                        o = !/(\d)$/i.test(n);
                                        break;
                                    case "skew":
                                        o = !/(deg|\d)$/i.test(n);
                                        break;
                                    case "rotate":
                                        o = !/(deg|\d)$/i.test(n)
                                    }
                                    return o || (i(r).transformCache[t] = "(" + n + ")"),
                                    i(r).transformCache[t]
                                }
                            }
                        }();
                    for (var e = 0; e < x.Lists.colors.length; e++)
                        !function() {
                            var t = x.Lists.colors[e];
                            x.Normalizations.registered[t] = function(e, r, n) {
                                switch (e) {
                                case "name":
                                    return t;
                                case "extract":
                                    var o;
                                    if (x.RegEx.wrappedValueAlreadyExtracted.test(n))
                                        o = n;
                                    else {
                                        var i, s = {
                                            black: "rgb(0, 0, 0)",
                                            blue: "rgb(0, 0, 255)",
                                            gray: "rgb(128, 128, 128)",
                                            green: "rgb(0, 128, 0)",
                                            red: "rgb(255, 0, 0)",
                                            white: "rgb(255, 255, 255)"
                                        };
                                        /^[A-z]+$/i.test(n) ? i = s[n] !== a ? s[n] : s.black : x.RegEx.isHex.test(n) ? i = "rgb(" + x.Values.hexToRgb(n).join(" ") + ")" : /^rgba?\(/i.test(n) || (i = s.black),
                                        o = (i || n).toString().match(x.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                    }
                                    return 8 >= f || 3 !== o.split(" ").length || (o += " 1"),
                                    o;
                                case "inject":
                                    return 8 >= f ? 4 === n.split(" ").length && (n = n.split(/\s+/).slice(0, 3).join(" ")) : 3 === n.split(" ").length && (n += " 1"),
                                    (8 >= f ? "rgb" : "rgba") + "(" + n.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                                }
                            }
                        }()
                }
            },
            Names: {
                camelCase: function(e) {
                    return e.replace(/-(\w)/g, function(e, t) {
                        return t.toUpperCase()
                    })
                },
                SVGAttribute: function(e) {
                    var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                    return (f || v.State.isAndroid && !v.State.isChrome) && (t += "|transform"),
                    new RegExp("^(" + t + ")$","i").test(e)
                },
                prefixCheck: function(e) {
                    if (v.State.prefixMatches[e])
                        return [v.State.prefixMatches[e], !0];
                    for (var t = ["", "Webkit", "Moz", "ms", "O"], r = 0, a = t.length; a > r; r++) {
                        var n;
                        if (n = 0 === r ? e : t[r] + e.replace(/^\w/, function(e) {
                            return e.toUpperCase()
                        }),
                        g.isString(v.State.prefixElement.style[n]))
                            return v.State.prefixMatches[e] = n,
                            [n, !0]
                    }
                    return [e, !1]
                }
            },
            Values: {
                hexToRgb: function(e) {
                    var t = /^#?([a-f\d])([a-f\d])([a-f\d])$/i, r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i, a;
                    return e = e.replace(t, function(e, t, r, a) {
                        return t + t + r + r + a + a
                    }),
                    a = r.exec(e),
                    a ? [parseInt(a[1], 16), parseInt(a[2], 16), parseInt(a[3], 16)] : [0, 0, 0]
                },
                isCSSNullValue: function(e) {
                    return 0 == e || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)
                },
                getUnitType: function(e) {
                    return /^(rotate|skew)/i.test(e) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e) ? "" : "px"
                },
                getDisplayType: function(e) {
                    var t = e && e.tagName.toString().toLowerCase();
                    return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t) ? "inline" : /^(li)$/i.test(t) ? "list-item" : /^(tr)$/i.test(t) ? "table-row" : /^(table)$/i.test(t) ? "table" : /^(tbody)$/i.test(t) ? "table-row-group" : "block"
                },
                addClass: function(e, t) {
                    e.classList ? e.classList.add(t) : e.className += (e.className.length ? " " : "") + t
                },
                removeClass: function(e, t) {
                    e.classList ? e.classList.remove(t) : e.className = e.className.toString().replace(new RegExp("(^|\\s)" + t.split(" ").join("|") + "(\\s|$)","gi"), " ")
                }
            },
            getPropertyValue: function(e, r, n, o) {
                function s(e, r) {
                    function n() {
                        u && x.setPropertyValue(e, "display", "none")
                    }
                    var l = 0;
                    if (8 >= f)
                        l = $.css(e, r);
                    else {
                        var u = !1;
                        if (/^(width|height)$/.test(r) && 0 === x.getPropertyValue(e, "display") && (u = !0,
                        x.setPropertyValue(e, "display", x.Values.getDisplayType(e))),
                        !o) {
                            if ("height" === r && "border-box" !== x.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                var c = e.offsetHeight - (parseFloat(x.getPropertyValue(e, "borderTopWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "borderBottomWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingTop")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingBottom")) || 0);
                                return n(),
                                c
                            }
                            if ("width" === r && "border-box" !== x.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                var p = e.offsetWidth - (parseFloat(x.getPropertyValue(e, "borderLeftWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "borderRightWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingLeft")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingRight")) || 0);
                                return n(),
                                p
                            }
                        }
                        var d;
                        d = i(e) === a ? t.getComputedStyle(e, null) : i(e).computedStyle ? i(e).computedStyle : i(e).computedStyle = t.getComputedStyle(e, null),
                        "borderColor" === r && (r = "borderTopColor"),
                        l = 9 === f && "filter" === r ? d.getPropertyValue(r) : d[r],
                        ("" === l || null === l) && (l = e.style[r]),
                        n()
                    }
                    if ("auto" === l && /^(top|right|bottom|left)$/i.test(r)) {
                        var g = s(e, "position");
                        ("fixed" === g || "absolute" === g && /top|left/i.test(r)) && (l = $(e).position()[r] + "px")
                    }
                    return l
                }
                var l;
                if (x.Hooks.registered[r]) {
                    var u = r
                      , c = x.Hooks.getRoot(u);
                    n === a && (n = x.getPropertyValue(e, x.Names.prefixCheck(c)[0])),
                    x.Normalizations.registered[c] && (n = x.Normalizations.registered[c]("extract", e, n)),
                    l = x.Hooks.extractValue(u, n)
                } else if (x.Normalizations.registered[r]) {
                    var p, d;
                    p = x.Normalizations.registered[r]("name", e),
                    "transform" !== p && (d = s(e, x.Names.prefixCheck(p)[0]),
                    x.Values.isCSSNullValue(d) && x.Hooks.templates[r] && (d = x.Hooks.templates[r][1])),
                    l = x.Normalizations.registered[r]("extract", e, d)
                }
                if (!/^[\d-]/.test(l))
                    if (i(e) && i(e).isSVG && x.Names.SVGAttribute(r))
                        if (/^(height|width)$/i.test(r))
                            try {
                                l = e.getBBox()[r]
                            } catch (g) {
                                l = 0
                            }
                        else
                            l = e.getAttribute(r);
                    else
                        l = s(e, x.Names.prefixCheck(r)[0]);
                return x.Values.isCSSNullValue(l) && (l = 0),
                v.debug >= 2 && console.log("Get " + r + ": " + l),
                l
            },
            setPropertyValue: function(e, r, a, n, o) {
                var s = r;
                if ("scroll" === r)
                    o.container ? o.container["scroll" + o.direction] = a : "Left" === o.direction ? t.scrollTo(a, o.alternateValue) : t.scrollTo(o.alternateValue, a);
                else if (x.Normalizations.registered[r] && "transform" === x.Normalizations.registered[r]("name", e))
                    x.Normalizations.registered[r]("inject", e, a),
                    s = "transform",
                    a = i(e).transformCache[r];
                else {
                    if (x.Hooks.registered[r]) {
                        var l = r
                          , u = x.Hooks.getRoot(r);
                        n = n || x.getPropertyValue(e, u),
                        a = x.Hooks.injectValue(l, a, n),
                        r = u
                    }
                    if (x.Normalizations.registered[r] && (a = x.Normalizations.registered[r]("inject", e, a),
                    r = x.Normalizations.registered[r]("name", e)),
                    s = x.Names.prefixCheck(r)[0],
                    8 >= f)
                        try {
                            e.style[s] = a
                        } catch (c) {
                            v.debug && console.log("Browser does not support [" + a + "] for [" + s + "]")
                        }
                    else
                        i(e) && i(e).isSVG && x.Names.SVGAttribute(r) ? e.setAttribute(r, a) : e.style[s] = a;
                    v.debug >= 2 && console.log("Set " + r + " (" + s + "): " + a)
                }
                return [s, a]
            },
            flushTransformCache: function(e) {
                function t(t) {
                    return parseFloat(x.getPropertyValue(e, t))
                }
                var r = "";
                if ((f || v.State.isAndroid && !v.State.isChrome) && i(e).isSVG) {
                    var a = {
                        translate: [t("translateX"), t("translateY")],
                        skewX: [t("skewX")],
                        skewY: [t("skewY")],
                        scale: 1 !== t("scale") ? [t("scale"), t("scale")] : [t("scaleX"), t("scaleY")],
                        rotate: [t("rotateZ"), 0, 0]
                    };
                    $.each(i(e).transformCache, function(e) {
                        /^translate/i.test(e) ? e = "translate" : /^scale/i.test(e) ? e = "scale" : /^rotate/i.test(e) && (e = "rotate"),
                        a[e] && (r += e + "(" + a[e].join(" ") + ") ",
                        delete a[e])
                    })
                } else {
                    var n, o;
                    $.each(i(e).transformCache, function(t) {
                        return n = i(e).transformCache[t],
                        "transformPerspective" === t ? (o = n,
                        !0) : (9 === f && "rotateZ" === t && (t = "rotate"),
                        void (r += t + n + " "))
                    }),
                    o && (r = "perspective" + o + " " + r)
                }
                x.setPropertyValue(e, "transform", r)
            }
        };
        x.Hooks.register(),
        x.Normalizations.register(),
        v.hook = function(e, t, r) {
            var n = a;
            return e = o(e),
            $.each(e, function(e, o) {
                if (i(o) === a && v.init(o),
                r === a)
                    n === a && (n = v.CSS.getPropertyValue(o, t));
                else {
                    var s = v.CSS.setPropertyValue(o, t, r);
                    "transform" === s[0] && v.CSS.flushTransformCache(o),
                    n = s
                }
            }),
            n
        }
        ;
        var S = function() {
            function e() {
                return l ? T.promise || null : f
            }
            function n() {
                function e(e) {
                    function p(e, t) {
                        var r = a
                          , i = a
                          , s = a;
                        return g.isArray(e) ? (r = e[0],
                        !g.isArray(e[1]) && /^[\d-]/.test(e[1]) || g.isFunction(e[1]) || x.RegEx.isHex.test(e[1]) ? s = e[1] : (g.isString(e[1]) && !x.RegEx.isHex.test(e[1]) || g.isArray(e[1])) && (i = t ? e[1] : u(e[1], o.duration),
                        e[2] !== a && (s = e[2]))) : r = e,
                        t || (i = i || o.easing),
                        g.isFunction(r) && (r = r.call(n, w, P)),
                        g.isFunction(s) && (s = s.call(n, w, P)),
                        [r || 0, i, s]
                    }
                    function f(e, t) {
                        var r, a;
                        return a = (t || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(e) {
                            return r = e,
                            ""
                        }),
                        r || (r = x.Values.getUnitType(e)),
                        [a, r]
                    }
                    function d() {
                        var e = {
                            myParent: n.parentNode || r.body,
                            position: x.getPropertyValue(n, "position"),
                            fontSize: x.getPropertyValue(n, "fontSize")
                        }
                          , a = e.position === N.lastPosition && e.myParent === N.lastParent
                          , o = e.fontSize === N.lastFontSize;
                        N.lastParent = e.myParent,
                        N.lastPosition = e.position,
                        N.lastFontSize = e.fontSize;
                        var s = 100
                          , l = {};
                        if (o && a)
                            l.emToPx = N.lastEmToPx,
                            l.percentToPxWidth = N.lastPercentToPxWidth,
                            l.percentToPxHeight = N.lastPercentToPxHeight;
                        else {
                            var u = i(n).isSVG ? r.createElementNS("http://www.w3.org/2000/svg", "rect") : r.createElement("div");
                            v.init(u),
                            e.myParent.appendChild(u),
                            $.each(["overflow", "overflowX", "overflowY"], function(e, t) {
                                v.CSS.setPropertyValue(u, t, "hidden")
                            }),
                            v.CSS.setPropertyValue(u, "position", e.position),
                            v.CSS.setPropertyValue(u, "fontSize", e.fontSize),
                            v.CSS.setPropertyValue(u, "boxSizing", "content-box"),
                            $.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(e, t) {
                                v.CSS.setPropertyValue(u, t, s + "%")
                            }),
                            v.CSS.setPropertyValue(u, "paddingLeft", s + "em"),
                            l.percentToPxWidth = N.lastPercentToPxWidth = (parseFloat(x.getPropertyValue(u, "width", null, !0)) || 1) / s,
                            l.percentToPxHeight = N.lastPercentToPxHeight = (parseFloat(x.getPropertyValue(u, "height", null, !0)) || 1) / s,
                            l.emToPx = N.lastEmToPx = (parseFloat(x.getPropertyValue(u, "paddingLeft")) || 1) / s,
                            e.myParent.removeChild(u)
                        }
                        return null === N.remToPx && (N.remToPx = parseFloat(x.getPropertyValue(r.body, "fontSize")) || 16),
                        null === N.vwToPx && (N.vwToPx = parseFloat(t.innerWidth) / 100,
                        N.vhToPx = parseFloat(t.innerHeight) / 100),
                        l.remToPx = N.remToPx,
                        l.vwToPx = N.vwToPx,
                        l.vhToPx = N.vhToPx,
                        v.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(l), n),
                        l
                    }
                    if (o.begin && 0 === w)
                        try {
                            o.begin.call(m, m)
                        } catch (y) {
                            setTimeout(function() {
                                throw y
                            }, 1)
                        }
                    if ("scroll" === k) {
                        var S = /^x$/i.test(o.axis) ? "Left" : "Top", V = parseFloat(o.offset) || 0, C, A, F;
                        o.container ? g.isWrapped(o.container) || g.isNode(o.container) ? (o.container = o.container[0] || o.container,
                        C = o.container["scroll" + S],
                        F = C + $(n).position()[S.toLowerCase()] + V) : o.container = null : (C = v.State.scrollAnchor[v.State["scrollProperty" + S]],
                        A = v.State.scrollAnchor[v.State["scrollProperty" + ("Left" === S ? "Top" : "Left")]],
                        F = $(n).offset()[S.toLowerCase()] + V),
                        s = {
                            scroll: {
                                rootPropertyValue: !1,
                                startValue: C,
                                currentValue: C,
                                endValue: F,
                                unitType: "",
                                easing: o.easing,
                                scrollData: {
                                    container: o.container,
                                    direction: S,
                                    alternateValue: A
                                }
                            },
                            element: n
                        },
                        v.debug && console.log("tweensContainer (scroll): ", s.scroll, n)
                    } else if ("reverse" === k) {
                        if (!i(n).tweensContainer)
                            return void $.dequeue(n, o.queue);
                        "none" === i(n).opts.display && (i(n).opts.display = "auto"),
                        "hidden" === i(n).opts.visibility && (i(n).opts.visibility = "visible"),
                        i(n).opts.loop = !1,
                        i(n).opts.begin = null,
                        i(n).opts.complete = null,
                        b.easing || delete o.easing,
                        b.duration || delete o.duration,
                        o = $.extend({}, i(n).opts, o);
                        var E = $.extend(!0, {}, i(n).tweensContainer);
                        for (var j in E)
                            if ("element" !== j) {
                                var H = E[j].startValue;
                                E[j].startValue = E[j].currentValue = E[j].endValue,
                                E[j].endValue = H,
                                g.isEmptyObject(b) || (E[j].easing = o.easing),
                                v.debug && console.log("reverse tweensContainer (" + j + "): " + JSON.stringify(E[j]), n)
                            }
                        s = E
                    } else if ("start" === k) {
                        var E;
                        i(n).tweensContainer && i(n).isAnimating === !0 && (E = i(n).tweensContainer),
                        $.each(h, function(e, t) {
                            if (RegExp("^" + x.Lists.colors.join("$|^") + "$").test(e)) {
                                var r = p(t, !0)
                                  , n = r[0]
                                  , o = r[1]
                                  , i = r[2];
                                if (x.RegEx.isHex.test(n)) {
                                    for (var s = ["Red", "Green", "Blue"], l = x.Values.hexToRgb(n), u = i ? x.Values.hexToRgb(i) : a, c = 0; c < s.length; c++) {
                                        var f = [l[c]];
                                        o && f.push(o),
                                        u !== a && f.push(u[c]),
                                        h[e + s[c]] = f
                                    }
                                    delete h[e]
                                }
                            }
                        });
                        for (var R in h) {
                            var O = p(h[R])
                              , z = O[0]
                              , q = O[1]
                              , M = O[2];
                            R = x.Names.camelCase(R);
                            var I = x.Hooks.getRoot(R)
                              , B = !1;
                            if (i(n).isSVG || "tween" === I || x.Names.prefixCheck(I)[1] !== !1 || x.Normalizations.registered[I] !== a) {
                                (o.display !== a && null !== o.display && "none" !== o.display || o.visibility !== a && "hidden" !== o.visibility) && /opacity|filter/.test(R) && !M && 0 !== z && (M = 0),
                                o._cacheValues && E && E[R] ? (M === a && (M = E[R].endValue + E[R].unitType),
                                B = i(n).rootPropertyValueCache[I]) : x.Hooks.registered[R] ? M === a ? (B = x.getPropertyValue(n, I),
                                M = x.getPropertyValue(n, R, B)) : B = x.Hooks.templates[I][1] : M === a && (M = x.getPropertyValue(n, R));
                                var W, G, D, X = !1;
                                if (W = f(R, M),
                                M = W[0],
                                D = W[1],
                                W = f(R, z),
                                z = W[0].replace(/^([+-\/*])=/, function(e, t) {
                                    return X = t,
                                    ""
                                }),
                                G = W[1],
                                M = parseFloat(M) || 0,
                                z = parseFloat(z) || 0,
                                "%" === G && (/^(fontSize|lineHeight)$/.test(R) ? (z /= 100,
                                G = "em") : /^scale/.test(R) ? (z /= 100,
                                G = "") : /(Red|Green|Blue)$/i.test(R) && (z = z / 100 * 255,
                                G = "")),
                                /[\/*]/.test(X))
                                    G = D;
                                else if (D !== G && 0 !== M)
                                    if (0 === z)
                                        G = D;
                                    else {
                                        l = l || d();
                                        var Y = /margin|padding|left|right|width|text|word|letter/i.test(R) || /X$/.test(R) || "x" === R ? "x" : "y";
                                        switch (D) {
                                        case "%":
                                            M *= "x" === Y ? l.percentToPxWidth : l.percentToPxHeight;
                                            break;
                                        case "px":
                                            break;
                                        default:
                                            M *= l[D + "ToPx"]
                                        }
                                        switch (G) {
                                        case "%":
                                            M *= 1 / ("x" === Y ? l.percentToPxWidth : l.percentToPxHeight);
                                            break;
                                        case "px":
                                            break;
                                        default:
                                            M *= 1 / l[G + "ToPx"]
                                        }
                                    }
                                switch (X) {
                                case "+":
                                    z = M + z;
                                    break;
                                case "-":
                                    z = M - z;
                                    break;
                                case "*":
                                    z = M * z;
                                    break;
                                case "/":
                                    z = M / z
                                }
                                s[R] = {
                                    rootPropertyValue: B,
                                    startValue: M,
                                    currentValue: M,
                                    endValue: z,
                                    unitType: G,
                                    easing: q
                                },
                                v.debug && console.log("tweensContainer (" + R + "): " + JSON.stringify(s[R]), n)
                            } else
                                v.debug && console.log("Skipping [" + I + "] due to a lack of browser support.")
                        }
                        s.element = n
                    }
                    s.element && (x.Values.addClass(n, "velocity-animating"),
                    L.push(s),
                    "" === o.queue && (i(n).tweensContainer = s,
                    i(n).opts = o),
                    i(n).isAnimating = !0,
                    w === P - 1 ? (v.State.calls.push([L, m, o, null, T.resolver]),
                    v.State.isTicking === !1 && (v.State.isTicking = !0,
                    c())) : w++)
                }
                var n = this, o = $.extend({}, v.defaults, b), s = {}, l;
                switch (i(n) === a && v.init(n),
                parseFloat(o.delay) && o.queue !== !1 && $.queue(n, o.queue, function(e) {
                    v.velocityQueueEntryFlag = !0,
                    i(n).delayTimer = {
                        setTimeout: setTimeout(e, parseFloat(o.delay)),
                        next: e
                    }
                }),
                o.duration.toString().toLowerCase()) {
                case "fast":
                    o.duration = 200;
                    break;
                case "normal":
                    o.duration = y;
                    break;
                case "slow":
                    o.duration = 600;
                    break;
                default:
                    o.duration = parseFloat(o.duration) || 1
                }
                v.mock !== !1 && (v.mock === !0 ? o.duration = o.delay = 1 : (o.duration *= parseFloat(v.mock) || 1,
                o.delay *= parseFloat(v.mock) || 1)),
                o.easing = u(o.easing, o.duration),
                o.begin && !g.isFunction(o.begin) && (o.begin = null),
                o.progress && !g.isFunction(o.progress) && (o.progress = null),
                o.complete && !g.isFunction(o.complete) && (o.complete = null),
                o.display !== a && null !== o.display && (o.display = o.display.toString().toLowerCase(),
                "auto" === o.display && (o.display = v.CSS.Values.getDisplayType(n))),
                o.visibility !== a && null !== o.visibility && (o.visibility = o.visibility.toString().toLowerCase()),
                o.mobileHA = o.mobileHA && v.State.isMobile && !v.State.isGingerbread,
                o.queue === !1 ? o.delay ? setTimeout(e, o.delay) : e() : $.queue(n, o.queue, function(t, r) {
                    return r === !0 ? (T.promise && T.resolver(m),
                    !0) : (v.velocityQueueEntryFlag = !0,
                    void e(t))
                }),
                "" !== o.queue && "fx" !== o.queue || "inprogress" === $.queue(n)[0] || $.dequeue(n)
            }
            var s = arguments[0] && (arguments[0].p || $.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || g.isString(arguments[0].properties)), l, f, d, m, h, b;
            if (g.isWrapped(this) ? (l = !1,
            d = 0,
            m = this,
            f = this) : (l = !0,
            d = 1,
            m = s ? arguments[0].elements || arguments[0].e : arguments[0]),
            m = o(m)) {
                s ? (h = arguments[0].properties || arguments[0].p,
                b = arguments[0].options || arguments[0].o) : (h = arguments[d],
                b = arguments[d + 1]);
                var P = m.length
                  , w = 0;
                if (!/^(stop|finish)$/i.test(h) && !$.isPlainObject(b)) {
                    var V = d + 1;
                    b = {};
                    for (var C = V; C < arguments.length; C++)
                        g.isArray(arguments[C]) || !/^(fast|normal|slow)$/i.test(arguments[C]) && !/^\d/.test(arguments[C]) ? g.isString(arguments[C]) || g.isArray(arguments[C]) ? b.easing = arguments[C] : g.isFunction(arguments[C]) && (b.complete = arguments[C]) : b.duration = arguments[C]
                }
                var T = {
                    promise: null,
                    resolver: null,
                    rejecter: null
                };
                l && v.Promise && (T.promise = new v.Promise(function(e, t) {
                    T.resolver = e,
                    T.rejecter = t
                }
                ));
                var k;
                switch (h) {
                case "scroll":
                    k = "scroll";
                    break;
                case "reverse":
                    k = "reverse";
                    break;
                case "finish":
                case "stop":
                    $.each(m, function(e, t) {
                        i(t) && i(t).delayTimer && (clearTimeout(i(t).delayTimer.setTimeout),
                        i(t).delayTimer.next && i(t).delayTimer.next(),
                        delete i(t).delayTimer)
                    });
                    var A = [];
                    return $.each(v.State.calls, function(e, t) {
                        t && $.each(t[1], function(r, n) {
                            var o = b === a ? "" : b;
                            return o === !0 || t[2].queue === o || b === a && t[2].queue === !1 ? void $.each(m, function(r, a) {
                                a === n && ((b === !0 || g.isString(b)) && ($.each($.queue(a, g.isString(b) ? b : ""), function(e, t) {
                                    g.isFunction(t) && t(null, !0)
                                }),
                                $.queue(a, g.isString(b) ? b : "", [])),
                                "stop" === h ? (i(a) && i(a).tweensContainer && o !== !1 && $.each(i(a).tweensContainer, function(e, t) {
                                    t.endValue = t.currentValue
                                }),
                                A.push(e)) : "finish" === h && (t[2].duration = 1))
                            }) : !0
                        })
                    }),
                    "stop" === h && ($.each(A, function(e, t) {
                        p(t, !0)
                    }),
                    T.promise && T.resolver(m)),
                    e();
                default:
                    if (!$.isPlainObject(h) || g.isEmptyObject(h)) {
                        if (g.isString(h) && v.Redirects[h]) {
                            var F = $.extend({}, b)
                              , E = F.duration
                              , j = F.delay || 0;
                            return F.backwards === !0 && (m = $.extend(!0, [], m).reverse()),
                            $.each(m, function(e, t) {
                                parseFloat(F.stagger) ? F.delay = j + parseFloat(F.stagger) * e : g.isFunction(F.stagger) && (F.delay = j + F.stagger.call(t, e, P)),
                                F.drag && (F.duration = parseFloat(E) || (/^(callout|transition)/.test(h) ? 1e3 : y),
                                F.duration = Math.max(F.duration * (F.backwards ? 1 - e / P : (e + 1) / P), .75 * F.duration, 200)),
                                v.Redirects[h].call(t, t, F || {}, e, P, m, T.promise ? T : a)
                            }),
                            e()
                        }
                        var H = "Velocity: First argument (" + h + ") was not a property map, a known action, or a registered redirect. Aborting.";
                        return T.promise ? T.rejecter(new Error(H)) : console.log(H),
                        e()
                    }
                    k = "start"
                }
                var N = {
                    lastParent: null,
                    lastPosition: null,
                    lastFontSize: null,
                    lastPercentToPxWidth: null,
                    lastPercentToPxHeight: null,
                    lastEmToPx: null,
                    remToPx: null,
                    vwToPx: null,
                    vhToPx: null
                }
                  , L = [];
                $.each(m, function(e, t) {
                    g.isNode(t) && n.call(t)
                });
                var F = $.extend({}, v.defaults, b), R;
                if (F.loop = parseInt(F.loop),
                R = 2 * F.loop - 1,
                F.loop)
                    for (var O = 0; R > O; O++) {
                        var z = {
                            delay: F.delay,
                            progress: F.progress
                        };
                        O === R - 1 && (z.display = F.display,
                        z.visibility = F.visibility,
                        z.complete = F.complete),
                        S(m, "reverse", z)
                    }
                return e()
            }
        };
        v = $.extend(S, v),
        v.animate = S;
        var P = t.requestAnimationFrame || d;
        return v.State.isMobile || r.hidden === a || r.addEventListener("visibilitychange", function() {
            r.hidden ? (P = function(e) {
                return setTimeout(function() {
                    e(!0)
                }, 16)
            }
            ,
            c()) : P = t.requestAnimationFrame || d
        }),
        e.Velocity = v,
        e !== t && (e.fn.velocity = S,
        e.fn.velocity.defaults = v.defaults),
        $.each(["Down", "Up"], function(e, t) {
            v.Redirects["slide" + t] = function(e, r, n, o, i, s) {
                var l = $.extend({}, r)
                  , u = l.begin
                  , c = l.complete
                  , p = {
                    height: "",
                    marginTop: "",
                    marginBottom: "",
                    paddingTop: "",
                    paddingBottom: ""
                }
                  , f = {};
                l.display === a && (l.display = "Down" === t ? "inline" === v.CSS.Values.getDisplayType(e) ? "inline-block" : "block" : "none"),
                l.begin = function() {
                    u && u.call(i, i);
                    for (var r in p) {
                        f[r] = e.style[r];
                        var a = v.CSS.getPropertyValue(e, r);
                        p[r] = "Down" === t ? [a, 0] : [0, a]
                    }
                    f.overflow = e.style.overflow,
                    e.style.overflow = "hidden"
                }
                ,
                l.complete = function() {
                    for (var t in f)
                        e.style[t] = f[t];
                    c && c.call(i, i),
                    s && s.resolver(i)
                }
                ,
                v(e, p, l)
            }
        }),
        $.each(["In", "Out"], function(e, t) {
            v.Redirects["fade" + t] = function(e, r, n, o, i, s) {
                var l = $.extend({}, r)
                  , u = {
                    opacity: "In" === t ? 1 : 0
                }
                  , c = l.complete;
                l.complete = n !== o - 1 ? l.begin = null : function() {
                    c && c.call(i, i),
                    s && s.resolver(i)
                }
                ,
                l.display === a && (l.display = "In" === t ? "auto" : "none"),
                v(this, u, l)
            }
        }),
        v
    }(window.jQuery || window.Zepto || window, window, document)
});

/*****************SideNav*******************/
(function(a) {
    var f = {
        init: function(b) {
            b = a.extend({
                menuWidth: 240,
                edge: "left",
                closeOnClick: !1
            }, b);
            a(this).each(function() {
                function g(c) {
                    e = !1;
                    a("body").css("overflow", "");
                    a("#sidenav-overlay").velocity({
                        opacity: 0
                    }, {
                        duration: 200,
                        queue: !1,
                        easing: "easeOutQuad",
                        complete: function() {
                            a(this).remove()
                        }
                    });
                    "left" === b.edge ? (a(".drag-target").css({
                        width: "",
                        right: "",
                        left: "0"
                    }),
                    d.velocity({
                        left: -1 * (b.menuWidth + 10)
                    }, {
                        duration: 200,
                        queue: !1,
                        easing: "easeOutCubic",
                        complete: function() {
                            !0 === c && (d.removeAttr("style"),
                            d.css("width", b.menuWidth))
                        }
                    })) : (a(".drag-target").css({
                        width: "",
                        right: "0",
                        left: ""
                    }),
                    d.velocity({
                        right: -1 * (b.menuWidth + 10)
                    }, {
                        duration: 200,
                        queue: !1,
                        easing: "easeOutCubic",
                        complete: function() {
                            !0 === c && (d.removeAttr("style"),
                            d.css("width", b.menuWidth))
                        }
                    }))
                }
                var f = a(this)
                  , d = a("#" + f.attr("data-activates"));
                240 != b.menuWidth && d.css("width", b.menuWidth);
                a("body").append(a('<div class="drag-target"></div>'));
                "left" == b.edge ? (d.css("left", -1 * (b.menuWidth + 10)),
                a(".drag-target").css({
                    left: 0
                })) : (d.addClass("right-aligned").css("right", -1 * (b.menuWidth + 10)).css("left", ""),
                a(".drag-target").css({
                    right: 0
                }));
                d.hasClass("fixed") && 992 < window.innerWidth && d.css("left", 0);
                d.hasClass("fixed") && a(window).resize(function() {
                    992 < window.innerWidth ? 0 !== a("#sidenav-overlay").css("opacity") && e ? g(!0) : (d.removeAttr("style"),
                    d.css("width", b.menuWidth)) : !1 === e && ("left" === b.edge ? d.css("left", -1 * (b.menuWidth + 10)) : d.css("right", -1 * (b.menuWidth + 10)))
                });
                if (!0 === b.closeOnClick)
                    d.on("click.itemclick", "a:not(.collapsible-header)", function() {
                        g()
                    });
                var e = !1;
                a(".drag-target").on("click", function() {
                    g()
                });
                a(".drag-target").hammer({
                    prevent_default: !1
                }).bind("pan", function(c) {
                    if ("touch" == c.gesture.pointerType) {
                        c = c.gesture.center.x;
                        a("body").css("overflow", "hidden");
                        if (0 === a("#sidenav-overlay").length) {
                            var f = a('<div id="sidenav-overlay"></div>');
                            f.css("opacity", 0).click(function() {
                                g()
                            });
                            a("body").append(f)
                        }
                        "left" === b.edge && (c > b.menuWidth ? c = b.menuWidth : 0 > c && (c = 0));
                        "left" === b.edge ? (c < b.menuWidth / 2 ? e = !1 : c >= b.menuWidth / 2 && (e = !0),
                        d.css("left", c - b.menuWidth)) : (c < window.innerWidth - b.menuWidth / 2 ? e = !0 : c >= window.innerWidth - b.menuWidth / 2 && (e = !1),
                        f = -1 * (c - b.menuWidth / 2),
                        0 < f && (f = 0),
                        d.css("right", f));
                        c = "left" === b.edge ? c / b.menuWidth : Math.abs((c - window.innerWidth) / b.menuWidth);
                        a("#sidenav-overlay").velocity({
                            opacity: c
                        }, {
                            duration: 50,
                            queue: !1,
                            easing: "easeOutQuad"
                        })
                    }
                }).bind("panend", function(c) {
                    if ("touch" == c.gesture.pointerType)
                        if (c = c.gesture.velocityX,
                        "left" === b.edge)
                            if (e && .3 >= c || -.5 > c)
                                d.velocity({
                                    left: 0
                                }, {
                                    duration: 300,
                                    queue: !1,
                                    easing: "easeOutQuad"
                                }),
                                a("#sidenav-overlay").velocity({
                                    opacity: 1
                                }, {
                                    duration: 50,
                                    queue: !1,
                                    easing: "easeOutQuad"
                                }),
                                a(".drag-target").css({
                                    width: "50%",
                                    right: 0,
                                    left: ""
                                });
                            else {
                                if (!e || .3 < c)
                                    a("body").css("overflow", ""),
                                    d.velocity({
                                        left: -1 * (b.menuWidth + 10)
                                    }, {
                                        duration: 200,
                                        queue: !1,
                                        easing: "easeOutQuad"
                                    }),
                                    a("#sidenav-overlay").velocity({
                                        opacity: 0
                                    }, {
                                        duration: 200,
                                        queue: !1,
                                        easing: "easeOutQuad",
                                        complete: function() {
                                            a(this).remove()
                                        }
                                    }),
                                    a(".drag-target").css({
                                        width: "10px",
                                        right: "",
                                        left: 0
                                    })
                            }
                        else if (e && -.3 <= c || .5 < c)
                            d.velocity({
                                right: 0
                            }, {
                                duration: 300,
                                queue: !1,
                                easing: "easeOutQuad"
                            }),
                            a("#sidenav-overlay").velocity({
                                opacity: 1
                            }, {
                                duration: 50,
                                queue: !1,
                                easing: "easeOutQuad"
                            }),
                            a(".drag-target").css({
                                width: "50%",
                                right: "",
                                left: 0
                            });
                        else if (!e || -.3 > c)
                            a("body").css("overflow", ""),
                            d.velocity({
                                right: -1 * (b.menuWidth + 10)
                            }, {
                                duration: 200,
                                queue: !1,
                                easing: "easeOutQuad"
                            }),
                            a("#sidenav-overlay").velocity({
                                opacity: 0
                            }, {
                                duration: 200,
                                queue: !1,
                                easing: "easeOutQuad",
                                complete: function() {
                                    a(this).remove()
                                }
                            }),
                            a(".drag-target").css({
                                width: "10px",
                                right: 0,
                                left: ""
                            })
                });
                f.click(function() {
                    if (!0 === e)
                        e = !1,
                        g();
                    else {
                        a("body").css("overflow", "hidden");
                        "left" === b.edge ? (a(".drag-target").css({
                            width: "50%",
                            right: 0,
                            left: ""
                        }),
                        d.velocity({
                            left: 0
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        })) : (a(".drag-target").css({
                            width: "50%",
                            right: "",
                            left: 0
                        }),
                        d.velocity({
                            right: 0
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        }),
                        d.css("left", ""));
                        var c = a('<div id="sidenav-overlay"></div>');
                        c.css("opacity", 0).click(function() {
                            e = !1;
                            g();
                            c.velocity({
                                opacity: 0
                            }, {
                                duration: 300,
                                queue: !1,
                                easing: "easeOutQuad",
                                complete: function() {
                                    a(this).remove()
                                }
                            })
                        });
                        a("body").append(c);
                        c.velocity({
                            opacity: 1
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad",
                            complete: function() {
                                e = !0
                            }
                        })
                    }
                    return !1
                })
            })
        },
        show: function() {
            this.trigger("click")
        },
        hide: function() {
            a("#sidenav-overlay").trigger("click")
        }
    };
    a.fn.sideNav = function(b) {
        if (f[b])
            return f[b].apply(this, Array.prototype.slice.call(arguments, 1));
        if ("object" !== typeof b && b)
            a.error("Method " + b + " does not exist on jQuery.sideNav");
        else
            return f.init.apply(this, arguments)
    }
}
)(jQuery);

/* ========================================================================
 * Bootstrap: tabcollapse.js v3.3.6
 * ======================================================================== */
!function(t) {
    "use strict";
    var a = function(a, e) {
        this.options = e,
        this.$tabs = t(a),
        this._accordionVisible = !1,
        this._initAccordion(),
        this._checkStateOnResize();
        var s = this;
        setTimeout(function() {
            s.checkState()
        }, 0)
    };
    a.DEFAULTS = {
        accordionClass: "visible-xs",
        tabsClass: "hidden-xs",
        accordionTemplate: function(t, a, e, s) {
            return '<div class="panel panel-default">   <div class="panel-heading">      <h4 class="panel-title">      </h4>   </div>   <div id="' + a + '" class="panel-collapse collapse ' + (s ? "in" : "") + '">       <div class="panel-body js-tabcollapse-panel-body">       </div>   </div></div>'
        }
    },
    a.prototype.checkState = function() {
        this.$tabs.is(":visible") && this._accordionVisible ? (this.showTabs(),
        this._accordionVisible = !1) : this.$accordion.is(":visible") && !this._accordionVisible && (this.showAccordion(),
        this._accordionVisible = !0)
    }
    ,
    a.prototype.showTabs = function() {
        var a = this;
        this.$tabs.trigger(t.Event("show-tabs.bs.tabcollapse"));
        var e = this.$accordion.find(".js-tabcollapse-panel-heading").detach();
        e.each(function() {
            var e = t(this)
              , s = e.data("bs.tabcollapse.parentLi")
              , i = a._panelHeadingToTabHeading(e);
            s.removeClass("active"),
            s.parent().hasClass("dropdown-menu") && !s.siblings("li").hasClass("active") && s.parent().parent().removeClass("active"),
            i.hasClass("collapsed") ? i.removeClass("collapsed") : (s.addClass("active"),
            s.parent().hasClass("dropdown-menu") && s.parent().parent().addClass("active")),
            s.append(e)
        }),
        t("li").hasClass("active") || t("li").first().addClass("active");
        var s = this.$accordion.find(".js-tabcollapse-panel-body");
        if (s.each(function() {
            var a = t(this)
              , e = a.data("bs.tabcollapse.tabpane");
            e.append(a.contents().detach())
        }),
        this.$accordion.html(""),
        this.options.updateLinks) {
            var i = this.getTabContentElement();
            i.find('[data-toggle-was="tab"], [data-toggle-was="pill"]').each(function() {
                var a = t(this)
                  , e = a.attr("href").replace(/-collapse$/g, "");
                a.attr({
                    "data-toggle": a.attr("data-toggle-was"),
                    "data-toggle-was": "",
                    "data-parent": "",
                    href: e
                })
            })
        }
        this.$tabs.trigger(t.Event("shown-tabs.bs.tabcollapse"))
    }
    ,
    a.prototype.getTabContentElement = function() {
        var a = t(this.options.tabContentSelector);
        return 0 === a.length && (a = this.$tabs.siblings(".tab-content")),
        a
    }
    ,
    a.prototype.showAccordion = function() {
        this.$tabs.trigger(t.Event("show-accordion.bs.tabcollapse"));
        var a = this.$tabs.find('li:not(.dropdown) [data-toggle="tab"], li:not(.dropdown) [data-toggle="pill"]')
          , e = this;
        if (a.each(function() {
            var a = t(this)
              , s = a.parent();
            a.data("bs.tabcollapse.parentLi", s),
            e.$accordion.append(e._createAccordionGroup(e.$accordion.attr("id"), a.detach()))
        }),
        this.options.updateLinks) {
            var s = this.$accordion.attr("id")
              , i = this.$accordion.find(".js-tabcollapse-panel-body");
            i.find('[data-toggle="tab"], [data-toggle="pill"]').each(function() {
                var a = t(this)
                  , e = a.attr("href") + "-collapse";
                a.attr({
                    "data-toggle-was": a.attr("data-toggle"),
                    "data-toggle": "collapse",
                    "data-parent": "#" + s,
                    href: e
                })
            })
        }
        this.$tabs.trigger(t.Event("shown-accordion.bs.tabcollapse"))
    }
    ,
    a.prototype._panelHeadingToTabHeading = function(t) {
        var a = t.attr("href").replace(/-collapse$/g, "");
        return t.attr({
            "data-toggle": "tab",
            href: a,
            "data-parent": ""
        }),
        t
    }
    ,
    a.prototype._tabHeadingToPanelHeading = function(t, a, e, s) {
        return t.addClass("js-tabcollapse-panel-heading " + (s ? "" : "collapsed")),
        t.attr({
            "data-toggle": "collapse",
            "data-parent": "#" + e,
            href: "#" + a
        }),
        t
    }
    ,
    a.prototype._checkStateOnResize = function() {
        var a = this;
        t(window).resize(function() {
            clearTimeout(a._resizeTimeout),
            a._resizeTimeout = setTimeout(function() {
                a.checkState()
            }, 100)
        })
    }
    ,
    a.prototype._initAccordion = function() {
        var a = function() {
            for (var t = "", a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", e = 0; 5 > e; e++)
                t += a.charAt(Math.floor(Math.random() * a.length));
            return t
        }
          , e = this.$tabs.attr("id")
          , s = (e ? e : a()) + "-accordion";
        this.$accordion = t('<div class="panel-group ' + this.options.accordionClass + '" id="' + s + '"></div>'),
        this.$tabs.after(this.$accordion),
        this.$tabs.addClass(this.options.tabsClass),
        this.getTabContentElement().addClass(this.options.tabsClass)
    }
    ,
    a.prototype._createAccordionGroup = function(a, e) {
        var s = e.attr("data-target")
          , i = e.data("bs.tabcollapse.parentLi").is(".active");
        s || (s = e.attr("href"),
        s = s && s.replace(/.*(?=#[^\s]*$)/, ""));
        var o = t(s)
          , n = o.attr("id") + "-collapse"
          , c = t(this.options.accordionTemplate(e, n, a, i));
        return c.find(".panel-heading > .panel-title").append(this._tabHeadingToPanelHeading(e, n, a, i)),
        c.find(".panel-body").append(o.contents().detach()).data("bs.tabcollapse.tabpane", o),
        c
    }
    ,
    t.fn.tabCollapse = function(e) {
        return this.each(function() {
            var s = t(this)
              , i = s.data("bs.tabcollapse")
              , o = t.extend({}, a.DEFAULTS, s.data(), "object" == typeof e && e);
            i || s.data("bs.tabcollapse", new a(this,o))
        })
    }
    ,
    t.fn.tabCollapse.Constructor = a
}(window.jQuery);
