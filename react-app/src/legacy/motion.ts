/* eslint-disable */
// @ts-nocheck
// Behaviour lifted verbatim from the original build: hero slider, intro
// sequence, particles, reveals, parallax, pinned projects, lightboxes, menu,
// counters, Lenis. Converted from the page class — do not refactor by hand.
import Lenis from 'lenis';

if (typeof window !== 'undefined' && !window.Lenis) window.Lenis = Lenis;

class LegacyMotion {
  constructor(opts) {
    this.opts = opts || {};
    this.state = { introGone: false };
  }

  mount() {
    var self = this;
    this._dead = false;
    this._cleanup = [];
    this._pxEls = [];
    this.reduce = false;
    try { this.reduce = matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) {}

    this.scan();
    this.setupProjects();
    this.setupGallery();
    this._scanT1 = setTimeout(function () { self.scan(); }, 400);
    this._scanT2 = setTimeout(function () { self.scan(); }, 1500);

    var onResize = function () {
      if (self._particleResize) self._particleResize();
      self.responsiveNav();
    };
    window.addEventListener('resize', onResize);
    this._cleanup.push(function () { window.removeEventListener('resize', onResize); });
    this.responsiveNav();
    this.setupMenu();
    this.setupSlider();
    this.setupLamp();

    if (this.reduce) {
      // Static version: no intro, no loops. Show slide 0, nav state via scroll event.
      if (!this.state.introGone) (function (self) { self.state.introGone = true; if (self.opts.onIntroDone) self.opts.onIntroDone(); })(this);
      var onScroll = function () { self.navUpdate(); };
      window.addEventListener('scroll', onScroll, { passive: true });
      this._cleanup.push(function () { window.removeEventListener('scroll', onScroll); });
      this.navUpdate();
      return;
    }

    this.setupLenis();
    this.prepHero();
    this.setupIntro();
    this.setupParticles();
    this.setupAnchors();
    this.setupTopBtn();
    this.startLoop();
  }

  unmount() {
    this._dead = true;
    if (this._cio) this._cio.disconnect();
    if (this._plbKey) window.removeEventListener('keydown', this._plbKey);
    if (this._wappScroll) window.removeEventListener('scroll', this._wappScroll);
    if (this._introTimer) clearTimeout(this._introTimer);
    if (this._objetTimer) clearInterval(this._objetTimer);
    if (this._introRemoveT) clearTimeout(this._introRemoveT);
    if (this._scanT1) clearTimeout(this._scanT1);
    if (this._scanT2) clearTimeout(this._scanT2);
    if (this._lenisRaf) cancelAnimationFrame(this._lenisRaf);
    if (this._loopRaf) cancelAnimationFrame(this._loopRaf);
    if (this._pRaf) cancelAnimationFrame(this._pRaf);
    if (this._lampRaf) cancelAnimationFrame(this._lampRaf);
    if (this._io) this._io.disconnect();
    if (this.lenis && this.lenis.destroy) this.lenis.destroy();
    (this._cleanup || []).forEach(function (fn) { try { fn(); } catch (e) {} });
    document.body.style.overflow = '';
    // scan() is guarded by these markers so it can run repeatedly against the
    // same DOM. A teardown has to drop them, or a remount against surviving DOM
    // -- StrictMode's double effect in dev -- skips every element and leaves the
    // ones this instance primed stuck at opacity: 0 with nothing observing them.
    Array.prototype.forEach.call(document.querySelectorAll('[data-lum-obs],[data-lum-hg]'), function (el) {
      el.removeAttribute('data-lum-obs');
      el.removeAttribute('data-lum-hg');
    });
  }

  // ---- scan: bind hovers, prime + observe reveal/stagger/clip/grow targets (idempotent) ----
  scan() {
    var self = this;
    Array.prototype.forEach.call(document.querySelectorAll('[data-hg]'), function (el) {
      if (el.getAttribute('data-lum-hg')) return;
      el.setAttribute('data-lum-hg', '1');
      self.bindHover(el);
    });
    this._pxEls = Array.prototype.slice.call(document.querySelectorAll('[data-speed]'));
    this._nav = document.querySelector('[data-lum-nav]');
    if (this.reduce) return;
    if (!this._io && 'IntersectionObserver' in window) {
      this._io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { self.revealEl(en.target); self._io.unobserve(en.target); }
        });
      }, { threshold: 0.14 });
    }
    if (!this._io) return;
    Array.prototype.forEach.call(document.querySelectorAll('[data-reveal],[data-stagger],[data-clip],[data-grow]'), function (el) {
      if (el.getAttribute('data-lum-obs')) return;
      el.setAttribute('data-lum-obs', '1');
      self.primeEl(el);
      self._io.observe(el);
    });
  }

  primeEl(el) {
    if (el.hasAttribute('data-reveal')) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(36px)';
      el.style.transition = 'opacity 0.9s ease,transform 0.9s ease';
    }
    if (el.hasAttribute('data-stagger')) {
      Array.prototype.forEach.call(el.children, function (ch, i) {
        ch.style.opacity = '0';
        ch.style.transform = 'translateY(30px)';
        ch.style.transition = 'opacity 0.8s ease ' + (i * 0.09).toFixed(2) + 's,transform 0.8s ease ' + (i * 0.09).toFixed(2) + 's';
      });
    }
    if (el.hasAttribute('data-clip')) {
      el.style.clipPath = 'inset(0 0 100% 0)';
      el.style.webkitClipPath = 'inset(0 0 100% 0)';
      var t = 'clip-path 1.2s cubic-bezier(0.16,1,0.3,1)';
      if (!el.hasAttribute('data-speed')) t += ',transform 1.2s ease';
      el.style.transition = t;
    }
    if (el.hasAttribute('data-grow')) {
      el._gw = el.getAttribute('data-grow-w') || getComputedStyle(el).width;
      el.style.width = '0px';
      el.style.transition = 'width 1.1s cubic-bezier(0.16,1,0.3,1)';
    }
  }

  revealEl(el) {
    if (el.hasAttribute('data-reveal')) {
      el.style.opacity = '1';
      el.style.transform = 'none';
    }
    if (el.hasAttribute('data-stagger')) {
      Array.prototype.forEach.call(el.children, function (ch) {
        ch.style.opacity = '1';
        ch.style.transform = 'none';
      });
    }
    if (el.hasAttribute('data-grow')) {
      el.style.width = el._gw || '120px';
    }
    if (el.hasAttribute('data-clip')) {
      el.style.clipPath = 'inset(0 0 0 0)';
      el.style.webkitClipPath = 'inset(0 0 0 0)';
      // one-off diagonal light sweep across the band image
      var scope = el.parentElement;
      var sweep = scope ? scope.querySelector('[data-sweep]') : null;
      if (sweep && !sweep.getAttribute('data-lum-swept')) {
        sweep.setAttribute('data-lum-swept', '1');
        sweep.style.animation = 'lumSweep 1.4s 0.25s ease';
      }
    }
  }

  // ---- parent-hover effects ----
  bindHover(el) {
    var kind = el.getAttribute('data-hg');
    var enter = null, leave = null;
    if (kind === 'card') {
      var link = el.querySelector('[data-hg-link]');
      var bloom = el.querySelector('[data-card-bloom]');
      var icon = el.querySelector('[data-card-icon]');
      var num = el.querySelector('[data-card-num]');
      enter = function () {
        if (link) { link.style.opacity = '1'; link.style.borderBottomColor = '#b3784a'; }
        if (bloom) bloom.style.opacity = '1';
        if (icon) icon.style.transform = 'translateY(-6px) scale(1.02)';
        if (num) num.style.color = '#f1e9db';
      };
      leave = function () {
        if (link) { link.style.opacity = '0.85'; link.style.borderBottomColor = 'transparent'; }
        if (bloom) bloom.style.opacity = '0';
        if (icon) icon.style.transform = 'none';
        if (num) num.style.color = '#b3784a';
      };
    } else if (kind === 'work') {
      var st = el.querySelector('[data-hg-stage]');
      var enq = el.querySelector('[data-hg-enq]');
      enter = function () {
        if (st) st.style.borderColor = 'rgba(179,120,74,0.45)';
        if (enq) { enq.style.opacity = '1'; enq.style.transform = 'translateY(0)'; }
      };
      leave = function () {
        if (st) st.style.borderColor = 'rgba(176,162,141,0.12)';
        if (enq) { enq.style.opacity = '0'; enq.style.transform = 'translateY(6px)'; }
      };
    } else if (kind === 'proj') {
      var img = el.querySelector('[data-hg-img]');
      var arrow = el.querySelector('[data-hg-arrow]');
      enter = function () {
        if (img) img.style.transform = 'scale(1.05)';
        if (arrow) arrow.style.transform = 'rotate(45deg)';
      };
      leave = function () {
        if (img) img.style.transform = 'scale(1)';
        if (arrow) arrow.style.transform = 'rotate(0deg)';
      };
    }
    if (!enter) return;
    el.addEventListener('mouseenter', enter);
    el.addEventListener('mouseleave', leave);
    this._cleanup.push(function () {
      el.removeEventListener('mouseenter', enter);
      el.removeEventListener('mouseleave', leave);
    });
  }

  // ================= HERO SLIDER =================
  setupSlider() {
    var self = this;
    this._slides = Array.prototype.slice.call(document.querySelectorAll('[data-hero-slide]'));
    this._bgs = Array.prototype.slice.call(document.querySelectorAll('[data-hero-bg]'));
    this._dots = Array.prototype.slice.call(document.querySelectorAll('[data-hero-dot]'));
    this._count = document.querySelector('[data-hero-count]');
    this._progress = document.querySelector('[data-hero-progress]');
    this._interval = 10000;
    this._active = 0;
    this._autoplay = (this.opts.heroAutoplay !== false) && !this.reduce;
    if (!this._slides.length) return;

    this._dots.forEach(function (d, k) { d.addEventListener('click', function () { self.activateSlide(k); }); });
    var prev = document.querySelector('[data-hero-prev]');
    var next = document.querySelector('[data-hero-next]');
    if (prev) prev.addEventListener('click', function () { self.activateSlide(self._active - 1); });
    if (next) next.addEventListener('click', function () { self.activateSlide(self._active + 1); });

    if (this._progress) {
      this._progress.addEventListener('animationend', function (e) {
        if ((e.animationName || '').indexOf('lumProg') > -1) self.activateSlide(self._active + 1);
      });
    }
    var hero = document.querySelector('[data-lum-hero]');
    if (hero && !this.reduce) {
      var onEnter = function () { if (self._autoplay && self._progress) self._progress.style.animationPlayState = 'paused'; };
      var onLeave = function () { if (self._autoplay && self._progress) self._progress.style.animationPlayState = 'running'; };
      hero.addEventListener('mouseenter', onEnter);
      hero.addEventListener('mouseleave', onLeave);
    }
    if (hero) {
      var tx0 = 0, ty0 = 0, tOn = false;
      hero.addEventListener('touchstart', function (e) {
        if (!e.touches || e.touches.length !== 1) { tOn = false; return; }
        tOn = true; tx0 = e.touches[0].clientX; ty0 = e.touches[0].clientY;
      }, { passive: true });
      hero.addEventListener('touchend', function (e) {
        if (!tOn) return; tOn = false;
        var t = e.changedTouches && e.changedTouches[0];
        if (!t) return;
        var dx = t.clientX - tx0, dy = t.clientY - ty0;
        if (Math.abs(dx) > 56 && Math.abs(dx) > Math.abs(dy) * 1.4) self.activateSlide(self._active + (dx < 0 ? 1 : -1));
      }, { passive: true });
    }

    this._leaves = Array.prototype.slice.call(document.querySelectorAll('[data-leaf]'));
    if (this.reduce) {
      this._leaves.forEach(function (l) {
        l.style.opacity = '1';
        l.style.transform = l.style.transform.indexOf('translate(-50%') > -1 ? 'translate(-50%,-50%)' : 'none';
        var g = l.firstElementChild;
        if (g && g.style && g.style.animation) g.style.animation = 'none';
      });
      this.activateSlide(0); // static display
    }

    this._objets = Array.prototype.slice.call(document.querySelectorAll('[data-objet]'));
    this._objetCaps = Array.prototype.slice.call(document.querySelectorAll('[data-objet-cap]'));
    this._objetDots = Array.prototype.slice.call(document.querySelectorAll('[data-objet-dot]'));
    this._objetIx = 0;
    this._objetDots.forEach(function (d, k) { d.addEventListener('click', function () { self.showObjet(k); }); });
    this.setupCounters();
    this.setupPieceLightbox();
    var wapp = document.querySelector('[data-wapp]');
    if (wapp) {
      var wappOn = false;
      this._wappScroll = function () {
        var show = window.pageYOffset > window.innerHeight * 0.75;
        if (show === wappOn) return;
        wappOn = show;
        wapp.style.opacity = show ? '1' : '0';
        wapp.style.pointerEvents = show ? 'auto' : 'none';
      };
      window.addEventListener('scroll', this._wappScroll, { passive: true });
      this._wappScroll();
    }
    if (this._objets.length && !this.reduce) {
      this._objetTimer = setInterval(function () {
        if (self._dead) return;
        if (self._active === 2 && !document.hidden) self.showObjet(self._objetIx + 1);
      }, 4600);
    }
  }

  setupCounters() {
    var self = this;
    var els = Array.prototype.slice.call(document.querySelectorAll('[data-count]'));
    if (!els.length) return;
    var run = function (el) {
      var target = parseFloat(el.getAttribute('data-count')) || 0;
      var suf = el.getAttribute('data-suffix') || '';
      if (self.reduce) { el.textContent = target.toLocaleString('en-US') + suf; return; }
      var t0 = null, dur = 1400;
      var step = function (ts) {
        if (self._dead) return;
        if (!t0) t0 = ts;
        var p = Math.min(1, (ts - t0) / dur);
        p = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * p).toLocaleString('en-US') + suf;
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    if (this.reduce || !('IntersectionObserver' in window)) { els.forEach(run); return; }
    this._cio = new IntersectionObserver(function (ents) {
      ents.forEach(function (en) { if (en.isIntersecting) { self._cio.unobserve(en.target); run(en.target); } });
    }, { threshold: 0.5 });
    els.forEach(function (el) { self._cio.observe(el); });
  }

  setupPieceLightbox() {
    var self = this;
    var sec = document.querySelector('[data-screen-label="Selected pieces"]');
    this._plb = document.querySelector('[data-plb]');
    if (!sec || !this._plb) return;
    this._plbImg = this._plb.querySelector('[data-plb-img]');
    this._plbTitle = this._plb.querySelector('[data-plb-title]');
    this._plbMeta = this._plb.querySelector('[data-plb-meta]');
    this._plbCount = this._plb.querySelector('[data-plb-count]');
    var items = [];
    Array.prototype.forEach.call(sec.querySelectorAll('[data-hg="work"]'), function (art) {
      var img = art.querySelector('[data-hg-img]');
      var m = img && img.style.backgroundImage.match(/url\(["']?([^"')]+)/);
      var h3 = art.querySelector('h3');
      if (!m || !h3) return;
      var cap = h3.parentElement;
      var catEl = cap.querySelector('span');
      var specEl = cap.querySelector('p');
      var idx = items.length;
      items.push({
        src: m[1],
        title: h3.textContent,
        meta: (catEl ? catEl.textContent : '') + (specEl ? ' · ' + specEl.textContent : '')
      });
      var stage = art.querySelector('[data-hg-stage]');
      if (!stage) return;
      stage.style.cursor = 'pointer';
      stage.setAttribute('role', 'button');
      stage.setAttribute('tabindex', '0');
      stage.setAttribute('aria-label', 'View ' + h3.textContent + ' full screen');
      var open = function () { self.plbOpen(idx); };
      stage.addEventListener('click', open);
      stage.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
    });
    this._plbItems = items;
    this._plbIdx = 0;
    this._plb.querySelector('[data-plb-close]').addEventListener('click', function () { self.plbClose(); });
    this._plb.querySelector('[data-plb-prev]').addEventListener('click', function (e) { e.stopPropagation(); self.plbShow(self._plbIdx - 1); });
    this._plb.querySelector('[data-plb-next]').addEventListener('click', function (e) { e.stopPropagation(); self.plbShow(self._plbIdx + 1); });
    this._plb.addEventListener('click', function (e) { if (e.target === self._plb) self.plbClose(); });
    this._plbKey = function (e) {
      if (self._plb.style.pointerEvents !== 'auto') return;
      if (e.key === 'Escape') self.plbClose();
      if (e.key === 'ArrowLeft') self.plbShow(self._plbIdx - 1);
      if (e.key === 'ArrowRight') self.plbShow(self._plbIdx + 1);
    };
    window.addEventListener('keydown', this._plbKey);
  }

  plbShow(i) {
    var self = this;
    var items = this._plbItems || [];
    if (!items.length) return;
    this._plbIdx = (i + items.length) % items.length;
    var it = items[this._plbIdx];
    this._plbImg.style.opacity = '0';
    this._plbImg.style.transform = 'scale(0.965)';
    var pre = new Image();
    pre.onload = pre.onerror = function () {
      self._plbImg.src = it.src;
      requestAnimationFrame(function () {
        self._plbImg.style.opacity = '1';
        self._plbImg.style.transform = 'scale(1)';
      });
    };
    pre.src = it.src;
    this._plbTitle.textContent = it.title;
    this._plbMeta.textContent = it.meta;
    this._plbCount.textContent = ('0' + (this._plbIdx + 1)).slice(-2) + ' / ' + ('0' + items.length).slice(-2);
  }

  plbOpen(i) {
    this._plb.style.opacity = '1';
    this._plb.style.pointerEvents = 'auto';
    this.plbShow(i);
    if (this.lenis) this.lenis.stop();
  }

  plbClose() {
    this._plb.style.opacity = '0';
    this._plb.style.pointerEvents = 'none';
    if (this.lenis) this.lenis.start();
  }

  showObjet(k) {
    var n = this._objets ? this._objets.length : 0;
    if (!n) return;
    k = ((k % n) + n) % n;
    this._objetIx = k;
    this._objets.forEach(function (o, j) {
      var on = j === k;
      o.style.opacity = on ? '1' : '0';
      o.style.transform = 'translate(-50%,' + (on ? '-50%' : '-47.5%') + ') scale(' + (on ? '1' : '0.97') + ')';
    });
    this._objetCaps.forEach(function (c, j) {
      c.style.opacity = j === k ? '1' : '0';
      c.style.transform = j === k ? 'translate(-50%,0)' : 'translate(-50%,8px)';
    });
    this._objetDots.forEach(function (d, j) {
      d.style.background = j === k ? '#d2ab6e' : 'rgba(176,162,141,0.35)';
      d.style.transform = 'rotate(45deg) scale(' + (j === k ? '1.3' : '1') + ')';
    });
  }

  revealSlide(sl) {
    if (this.reduce) return;
    Array.prototype.forEach.call(sl.querySelectorAll('[data-hero-w] > span'), function (s, i) {
      s.style.transition = 'transform 1s cubic-bezier(0.16,1,0.3,1)';
      s.style.transitionDelay = (0.08 + i * 0.1).toFixed(2) + 's';
      s.style.transform = 'translateY(0)';
    });
    Array.prototype.forEach.call(sl.querySelectorAll('[data-hero-el]'), function (e, i) {
      e.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      e.style.transitionDelay = (0.5 + i * 0.12).toFixed(2) + 's';
      e.style.opacity = '1';
      e.style.transform = 'translateY(0)';
    });
  }

  hideSlide(sl) {
    if (this.reduce) return;
    Array.prototype.forEach.call(sl.querySelectorAll('[data-hero-w] > span'), function (s) {
      s.style.transition = 'none';
      s.style.transitionDelay = '0s';
      s.style.transform = 'translateY(130%)';
    });
    Array.prototype.forEach.call(sl.querySelectorAll('[data-hero-el]'), function (e) {
      e.style.transition = 'none';
      e.style.transitionDelay = '0s';
      e.style.opacity = '0';
      e.style.transform = 'translateY(18px)';
    });
  }

  activateSlide(i) {
    var self = this;
    var n = this._slides ? this._slides.length : 0;
    var pcv = document.querySelector('[data-lum-particles]');
    if (pcv && n) {
      pcv.style.transition = 'opacity 1.2s ease';
      pcv.style.opacity = (((i % n) + n) % n) === 0 ? '1' : '0';
    }
    if (this._particleResize) this._particleResize();
    if (!n) return;
    i = ((i % n) + n) % n;
    this._active = i;

    this._bgs.forEach(function (bg, k) {
      var isPhotoStack = !!bg.querySelector('[data-hero-photo]');
      if (k === i) {
        bg.style.opacity = '1';
        if (!self.reduce && !isPhotoStack) {
          bg.style.transition = 'opacity 1.4s ease, transform 8s ease-out';
          requestAnimationFrame(function () { if (!self._dead) bg.style.transform = 'scale(1.06)'; });
        }
      } else {
        bg.style.opacity = '0';
        if (!self.reduce && !isPhotoStack) { bg.style.transition = 'opacity 1.4s ease'; bg.style.transform = 'scale(1)'; }
      }
    });
    // slide 1: lamp "switch-on" — brighten + warm glow bloom + one-off gold sheen sweep
    var lampImg = document.querySelector('[data-lamp-img]');
    var lampGlow = document.querySelector('[data-lamp-glow]');
    var glint = document.querySelector('[data-lamp-glint]');
    if (i === 0) {
      if (lampImg) {
        var onF = 'brightness(1.06) saturate(1.1) drop-shadow(0 20px 46px rgba(214,150,70,0.4))';
        if (self.reduce) { lampImg.style.filter = onF; }
        else { requestAnimationFrame(function () { if (!self._dead) lampImg.style.filter = onF; }); }
      }
      if (lampGlow) lampGlow.style.opacity = '1';
      if (glint && !self.reduce) { glint.style.animation = 'none'; void glint.offsetWidth; glint.style.animation = 'lampGlint 1.7s ease 0.4s'; }
    } else {
      if (lampImg) { if (!self.reduce) lampImg.style.transition = 'filter 1s ease'; lampImg.style.filter = 'brightness(0.55) saturate(0.9)'; }
      if (lampGlow) lampGlow.style.opacity = '0';
    }
    // slide 2: leaf-field cascade — each leaf fades in left-to-right like the installation being lit
    if (this._leaves && this._leaves.length && !this.reduce) {
      var isPool = function (l) { return l.style.transform.indexOf('translate(-50%') > -1 || (l.getAttribute('style') || '').indexOf('translate(-50%') > -1; };
      if (i === 1) {
        this._leaves.forEach(function (l) {
          var dl = parseFloat(l.getAttribute('data-leaf')) || 0;
          l.style.transition = 'opacity 1.2s ease ' + dl + 's, transform 1.6s cubic-bezier(0.16,1,0.3,1) ' + dl + 's';
          requestAnimationFrame(function () {
            if (self._dead) return;
            l.style.opacity = '1';
            l.style.transform = isPool(l) ? 'translate(-50%,-50%)' : 'translateY(0)';
          });
        });
      } else {
        this._leaves.forEach(function (l) {
          l.style.transition = 'opacity 0.7s ease';
          l.style.opacity = '0';
          l.style.transform = isPool(l) ? 'translate(-50%,-50%)' : 'translateY(-16px)';
        });
      }
    }

    this._slides.forEach(function (sl, k) {
      if (k === i) { sl.style.opacity = '1'; sl.style.pointerEvents = 'auto'; self.revealSlide(sl); }
      else { sl.style.opacity = '0'; sl.style.pointerEvents = 'none'; self.hideSlide(sl); }
    });

    this._dots.forEach(function (d, k) {
      var on = k === i;
      d.style.width = on ? '30px' : '8px';
      d.style.background = on ? '#d2ab6e' : 'rgba(176,162,141,0.4)';
    });
    if (this._count) this._count.textContent = '0' + (i + 1);

    this.runProgress();
  }

  runProgress() {
    var p = this._progress;
    if (!p) return;
    p.style.animation = 'none';
    void p.offsetWidth;
    if (!this._autoplay) { p.style.transform = 'scaleX(0)'; return; }
    p.style.transform = '';
    p.style.animation = 'lumProg ' + (this._interval / 1000) + 's linear';
    p.style.animationPlayState = 'running';
  }

  // ---- hero prep + reveal (gated on intro) ----
  prepHero() {
    if (this.reduce) return;
    var self = this;
    (this._slides || []).forEach(function (sl) { self.hideSlide(sl); });
  }

  startHero() {
    this.activateSlide(0);
  }

  // ================= HERO LAMP (slide 1) — mouse parallax =================
  setupLamp() {
    var self = this;
    var scene = document.querySelector('[data-lamp-scene]');
    if (!scene || this.reduce) return;
    var hero = document.querySelector('[data-lum-hero]');
    if (!hero) return;
    var tx = 0, ty = 0, cx = 0, cy = 0;
    var onMove = function (e) {
      var p = e.touches ? e.touches[0] : e;
      if (!p) return;
      tx = p.clientX / Math.max(1, window.innerWidth) - 0.5;
      ty = p.clientY / Math.max(1, window.innerHeight) - 0.5;
    };
    hero.addEventListener('mousemove', onMove);
    hero.addEventListener('touchmove', onMove, { passive: true });
    this._cleanup.push(function () {
      hero.removeEventListener('mousemove', onMove);
      hero.removeEventListener('touchmove', onMove);
    });
    var loop = function () {
      if (self._dead) return;
      cx += (tx - cx) * 0.05;
      cy += (ty - cy) * 0.05;
      scene.style.transform = 'translate(' + (cx * 30).toFixed(1) + 'px,' + (cy * 16).toFixed(1) + 'px)';
      self._lampRaf = requestAnimationFrame(loop);
    };
    this._lampRaf = requestAnimationFrame(loop);
  }

  // ================= MOBILE MENU =================
  setupMenu() {
    var self = this;
    this._burger = document.querySelector('[data-nav-burger]');
    this._overlay = document.querySelector('[data-nav-overlay]');
    this._menuOpen = false;
    if (this._burger) this._burger.addEventListener('click', function () { self.openMenu(); });
    if (this._overlay) {
      Array.prototype.forEach.call(this._overlay.querySelectorAll('a,[data-nav-close]'), function (el) {
        el.addEventListener('click', function () { self.closeMenu(); });
      });
    }
    var onKey = function (e) { if (e.key === 'Escape') self.closeMenu(); };
    document.addEventListener('keydown', onKey);
    this._cleanup.push(function () { document.removeEventListener('keydown', onKey); });
  }

  openMenu() {
    var self = this;
    if (!this._overlay) return;
    this._overlay.style.opacity = '1';
    this._overlay.style.pointerEvents = 'auto';
    document.body.style.overflow = 'hidden';
    if (this.lenis) this.lenis.stop();
    Array.prototype.forEach.call(this._overlay.querySelectorAll('[data-nav-item]'), function (el, i) {
      if (!self.reduce) el.style.transitionDelay = (0.06 + i * 0.06).toFixed(2) + 's';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    });
    this._menuOpen = true;
  }

  closeMenu() {
    var self = this;
    if (!this._overlay || !this._menuOpen) return;
    this._overlay.style.opacity = '0';
    this._overlay.style.pointerEvents = 'none';
    document.body.style.overflow = '';
    if (this.lenis && !this._introActive) this.lenis.start();
    Array.prototype.forEach.call(this._overlay.querySelectorAll('[data-nav-item]'), function (el) {
      el.style.transitionDelay = '0s';
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
    });
    this._menuOpen = false;
  }

  // ---- intro sequence ----
  setupIntro() {
    var self = this;
    var playIntro = this.opts.playIntro !== undefined ? !!this.opts.playIntro : true;
    var intro = document.querySelector('[data-lum-intro]');
    if (!playIntro || !intro || this.state.introGone) { this.startHero(); return; }
    this._introActive = true;
    document.body.style.overflow = 'hidden';
    if (this.lenis) this.lenis.stop();
    this._introTimer = setTimeout(function () { self.dismissIntro(); }, 2100);
  }

  dismissIntro = () => {
    if (this._introDone) return;
    this._introDone = true;
    this._introActive = false;
    if (this._introTimer) clearTimeout(this._introTimer);
    var intro = document.querySelector('[data-lum-intro]');
    if (intro) { intro.style.opacity = '0'; intro.style.pointerEvents = 'none'; }
    document.body.style.overflow = '';
    if (this.lenis) this.lenis.start();
    this.startHero();
    var self = this;
    this._introRemoveT = setTimeout(function () {
      if (self._dead || self.state.introGone) return;
      self.state.introGone = true;
      if (self.opts.onIntroDone) self.opts.onIntroDone();
    }, 1200);
  };

  // ---- Projects: pinned cinematic scroll-scrub showcase ----
  setupProjects() {
    var self = this;
    var sec = document.getElementById('projects');
    if (!sec || !sec.querySelector('[data-pj-layer]')) return;
    var pj = {
      sec: sec,
      layers: [].slice.call(sec.querySelectorAll('[data-pj-layer]')),
      imgs: [].slice.call(sec.querySelectorAll('[data-pj-img]')),
      title: sec.querySelector('[data-pj-title]'),
      cat: sec.querySelector('[data-pj-cat]'),
      num: sec.querySelector('[data-pj-num]'),
      prog: sec.querySelector('[data-pj-prog]'),
      sweep: sec.querySelector('[data-pj-sweep]'),
      rail: sec.querySelector('[data-pj-rail]'),
      jumps: [].slice.call(sec.querySelectorAll('[data-pj-jump]')),
      stick: sec.querySelector('[data-pj-sticky]'),
      data: [
        {"cat":"Restaurant · Marasi, Al Khobar","name":"Suspended Leaf Cluster","img":"assets/projects/01-marasi.jpg","imgs":["assets/projects/01-marasi.jpg","assets/gallery/04.jpg","assets/gallery/13.jpg"],"loc":"Marasi, Al Khobar","year":"2024","scope":"Design, casting & installation","fin":"Amber & clear glass, brass","desc":"A cloud of hand-blown glass leaves suspended over the dining room — drawn around the ceiling line so the cluster reads as one continuous drift of light."},
        {"cat":"Private residence · Riyadh","name":"Crystal Cascade","img":"assets/projects/02-crystal-cascade.jpg","imgs":["assets/projects/02-crystal-cascade.jpg","assets/gallery/09.jpg","assets/gallery/15.jpg"],"loc":"Riyadh","year":"2023","scope":"Bespoke stairwell chandelier","fin":"Cut crystal, polished steel","desc":"A seven-metre fall of crystal drops through the stair void — each tier sized to the turn of the stair, lit from the crown so every drop carries light downward."},
        {"cat":"Hospitality · Riyadh","name":"Alabaster Lattice","img":"assets/projects/03-alabaster-lattice.jpg","imgs":["assets/projects/03-alabaster-lattice.jpg","assets/gallery/06.jpg","assets/gallery/20.jpg"],"loc":"Riyadh","year":"2023","scope":"Ceiling feature & wall lights","fin":"Honed alabaster, aged brass","desc":"Backlit alabaster carved into an interlocking lattice — stone thin enough to glow, warming the lobby without a single visible fixture."},
        {"cat":"Majlis · Al Bandariyah","name":"Rings of Light","img":"assets/projects/04-rings-of-light.jpg","imgs":["assets/projects/04-rings-of-light.jpg","assets/gallery/05.jpg","assets/gallery/18.jpg"],"loc":"Al Bandariyah, Al Khobar","year":"2022","scope":"Layered ring chandelier","fin":"Brass, frosted glass","desc":"Concentric brass rings hung at three heights over the majlis — dimmable from full evening glow to a low, candle-warm ring for late gatherings."},
        {"cat":"Family living · Al Khobar","name":"Gallery of Glass","img":"assets/projects/05-gallery-of-glass.jpg","imgs":["assets/projects/05-gallery-of-glass.jpg","assets/gallery/07.jpg","assets/gallery/17.jpg"],"loc":"Al Khobar","year":"2024","scope":"Living & dining suite","fin":"Clear & smoked glass","desc":"A family of pieces across the open plan — pendants over the table, a sculptural floor lamp by the window — one glass language holding the rooms together."},
        {"cat":"Private residence · Al Khobar","name":"Entrance in Alabaster","img":"assets/projects/06-entrance-alabaster.jpg","imgs":["assets/projects/06-entrance-alabaster.jpg","assets/gallery/19.jpg","assets/gallery/21.jpg"],"loc":"Al Khobar","year":"2022","scope":"Entry sconces & console piece","fin":"Alabaster, bronze","desc":"Paired sconces in carved alabaster flanking the entry — the first light guests meet, tuned warm so the stone glows from within."}],
      idx: -1
    };
    this._pj = pj;
    if (!this.reduce) {
      pj.layers.forEach(function (l) { l.style.transition = 'clip-path 1.15s cubic-bezier(0.65,0,0.25,1)'; });
    }
    pj.jumps.forEach(function (btn, i) {
      btn.addEventListener('click', function () {
        var span = pj.sec.offsetHeight - innerHeight;
        var y = pj.sec.offsetTop + span * ((i + 0.5) / pj.data.length);
        if (self.lenis) self.lenis.scrollTo(y, { duration: 1.1 });
        else window.scrollTo(0, y);
      });
    });
    if (this._pjResize) window.removeEventListener('resize', this._pjResize);
    var sizeRail = function () { if (pj.rail) pj.rail.style.display = innerWidth < 880 ? 'none' : 'flex'; };
    sizeRail();
    this._pjResize = sizeRail;
    window.addEventListener('resize', sizeRail);
    this.pjActivate(0);
    var openBtn = sec.querySelector('[data-pj-open]');
    if (openBtn) openBtn.addEventListener('click', function () { self.pjDetail(Math.max(0, pj.idx)); });
    [].slice.call(sec.querySelectorAll('[data-pj-mopen]')).forEach(function (b) {
      b.addEventListener('click', function () { self.pjDetail(parseInt(b.getAttribute('data-pj-mopen'), 10) || 0); });
    });
    var ov = document.querySelector('[data-pjo]');
    if (ov && !ov._wired) {
      ov._wired = true;
      var cl = function () { self.pjDetailClose(); };
      var cb = ov.querySelector('[data-pjo-close]');
      if (cb) cb.addEventListener('click', cl);
      var bg = ov.querySelector('[data-pjo-close-bg]');
      if (bg) bg.addEventListener('click', cl);
      var pv2 = ov.querySelector('[data-pjo-prev]');
      if (pv2) pv2.addEventListener('click', function () { self.pjoShow(self._pjoIx - 1); });
      var nx2 = ov.querySelector('[data-pjo-next]');
      if (nx2) nx2.addEventListener('click', function () { self.pjoShow(self._pjoIx + 1); });
      window.addEventListener('keydown', function (e) { if (e.key === 'Escape' && ov.style.display !== 'none') cl(); });
    }
  }

  pjDetail(i) {
    var pj = this._pj, o = document.querySelector('[data-pjo]');
    if (!pj || !o) return;
    var d = pj.data[i];
    if (!d) return;
    var set = function (sel, txt) { var el = o.querySelector(sel); if (el) el.textContent = txt || ''; };
    var self = this;
    this._pjoList = d.imgs && d.imgs.length ? d.imgs : [d.img];
    var dots = o.querySelector('[data-pjo-dots]');
    if (dots) {
      dots.innerHTML = '';
      this._pjoList.forEach(function (u, k) {
        var b = document.createElement('button');
        b.type = 'button';
        b.setAttribute('aria-label', 'Photo ' + (k + 1));
        b.style.cssText = 'width:8px;height:8px;border-radius:50%;padding:0;border:none;cursor:pointer;background:rgba(241,233,219,0.4);transition:background 0.4s,transform 0.4s';
        b.addEventListener('click', function () { self.pjoShow(k); });
        dots.appendChild(b);
      });
    }
    var multi = this._pjoList.length > 1;
    var pv = o.querySelector('[data-pjo-prev]'), nx = o.querySelector('[data-pjo-next]');
    if (pv) pv.style.display = multi ? 'grid' : 'none';
    if (nx) nx.style.display = multi ? 'grid' : 'none';
    if (dots) dots.style.display = multi ? 'flex' : 'none';
    this._pjoIx = -1;
    this.pjoShow(0);
    set('[data-pjo-cat]', d.cat);
    set('[data-pjo-title]', d.name);
    set('[data-pjo-desc]', d.desc);
    set('[data-pjo-loc]', d.loc);
    set('[data-pjo-year]', d.year);
    set('[data-pjo-scope]', d.scope);
    set('[data-pjo-fin]', d.fin);
    o.style.display = 'block';
    requestAnimationFrame(function () { o.style.opacity = '1'; });
    document.body.style.overflow = 'hidden';
    if (this.lenis && this.lenis.stop) this.lenis.stop();
  }

  pjoShow(k) {
    var o = document.querySelector('[data-pjo]');
    var list = this._pjoList || [];
    if (!o || !list.length) return;
    k = ((k % list.length) + list.length) % list.length;
    if (k === this._pjoIx) return;
    var first = this._pjoIx < 0;
    this._pjoIx = k;
    var im = o.querySelector('[data-pjo-img]');
    if (im) {
      if (first) { im.style.backgroundImage = "url('" + list[k] + "')"; im.style.opacity = '1'; }
      else {
        im.style.transition = 'opacity 0.26s ease';
        im.style.opacity = '0';
        setTimeout(function () { im.style.backgroundImage = "url('" + list[k] + "')"; im.style.opacity = '1'; }, 220);
      }
    }
    var dots = o.querySelector('[data-pjo-dots]');
    if (dots) [].slice.call(dots.children).forEach(function (b, j) {
      b.style.background = j === k ? '#d2ab6e' : 'rgba(241,233,219,0.4)';
      b.style.transform = j === k ? 'scale(1.3)' : 'scale(1)';
    });
  }

  pjDetailClose() {
    var o = document.querySelector('[data-pjo]');
    if (!o) return;
    o.style.opacity = '0';
    setTimeout(function () { o.style.display = 'none'; }, 480);
    document.body.style.overflow = '';
    if (this.lenis && this.lenis.start) this.lenis.start();
  }

  setupTopBtn() {
    var self = this;
    var btn = document.querySelector('[data-top-btn]');
    if (!btn || btn._wired) return;
    btn._wired = true;
    var onClick = function () {
      if (self.lenis) self.lenis.scrollTo(0, { duration: 1.2 });
      else window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    btn.addEventListener('click', onClick);
    var upd = function () {
      var on = (window.pageYOffset || document.documentElement.scrollTop || 0) > window.innerHeight * 0.9;
      btn.style.opacity = on ? '1' : '0';
      btn.style.pointerEvents = on ? 'auto' : 'none';
      btn.style.transform = on ? 'translateY(0)' : 'translateY(8px)';
    };
    window.addEventListener('scroll', upd, { passive: true });
    upd();
    // Without this the listeners outlive the instance: a remount is blocked by
    // _wired, so the only handler left belongs to the dead instance and calls
    // scrollTo on a Lenis that unmount() already destroyed -- a silent no-op.
    this._cleanup.push(function () {
      btn.removeEventListener('click', onClick);
      window.removeEventListener('scroll', upd);
      btn._wired = false;
    });
  }

  pjActivate(idx) {
    var pj = this._pj;
    if (!pj || pj.idx === idx) return;
    var up = idx > pj.idx;
    pj.idx = idx;
    pj.layers.forEach(function (l, i) {
      l.style.clipPath = i <= idx ? 'inset(0 0 0 0)' : 'inset(0 0 100% 0)';
    });
    var d = pj.data[idx];
    if (pj.cat) {
      pj.cat.textContent = d.cat;
      pj.cat.style.transition = 'none';
      pj.cat.style.opacity = '0';
      pj.cat.style.transform = 'translateY(10px)';
      requestAnimationFrame(function () {
        pj.cat.style.transition = 'opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s';
        pj.cat.style.opacity = '1';
        pj.cat.style.transform = 'translateY(0)';
      });
    }
    if (pj.title) {
      var words = d.name.split(' ');
      pj.title.innerHTML = words.map(function (w) {
        return '<span style="display:inline-block;overflow:hidden;vertical-align:top;padding:0 0.06em 0.14em;margin:0 -0.06em -0.08em"><span style="display:inline-block;transform:translateY(115%)">' + w + '</span></span>';
      }).join(' ');
      var inner = [].slice.call(pj.title.querySelectorAll('span > span'));
      requestAnimationFrame(function () {
        inner.forEach(function (sp, i) {
          sp.style.transition = 'transform 0.95s cubic-bezier(0.16,1,0.3,1) ' + (0.2 + i * 0.08) + 's';
          sp.style.transform = 'translateY(0)';
        });
      });
    }
    if (pj.num) {
      pj.num.textContent = ('0' + (idx + 1)).slice(-2);
      pj.num.style.transition = 'none';
      pj.num.style.opacity = '0.2';
      pj.num.style.transform = 'translateY(8px)';
      requestAnimationFrame(function () {
        pj.num.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        pj.num.style.opacity = '1';
        pj.num.style.transform = 'translateY(0)';
      });
    }
    pj.jumps.forEach(function (b, i) {
      var dash = b.querySelector('[data-pj-dash]');
      b.style.color = i === idx ? '#f1e9db' : 'rgba(241,233,219,0.4)';
      if (dash) {
        dash.style.width = i === idx ? '30px' : '12px';
        dash.style.background = i === idx ? '#d2ab6e' : 'rgba(176,162,141,0.35)';
      }
    });
    if (pj.sweep && up && idx > 0 && !this.reduce) {
      pj.sweep.style.animation = 'none';
      void pj.sweep.offsetWidth;
      pj.sweep.style.animation = 'pjSweep 1.5s cubic-bezier(0.3,0,0.25,1) 0.4s';
    }
  }

  projScrub() {
    var pj = this._pj;
    if (!pj) return;
    var span = pj.sec.offsetHeight - innerHeight;
    if (span <= 0) return;
    var off = (window.scrollY || document.documentElement.scrollTop) - pj.sec.offsetTop;
    if (off < 0) off = 0;
    if (off > span) off = span;
    if (pj.stick) pj.stick.style.transform = 'translate3d(0,' + off.toFixed(1) + 'px,0)';
    var p = off / span;
    if (p > 0.9999) p = 0.9999;
    var N = pj.data.length;
    var idx = Math.floor(p * N);
    this.pjActivate(idx);
    if (pj.prog) pj.prog.style.transform = 'scaleX(' + p.toFixed(4) + ')';
    if (!this.reduce) {
      var sub = p * N - idx;
      var img = pj.imgs[idx];
      if (img) img.style.transform = 'translateY(' + ((sub - 0.5) * 4).toFixed(2) + '%) scale(1.05)';
    }
  }

  // ---- Gallery strip: counter-drifting marquee, velocity-coupled ----
  setupGallery() {
    var self = this;
    var rows = [].slice.call(document.querySelectorAll('[data-gal-row]'));
    if (!rows.length) return;
    this._gal = rows.map(function (el, i) {
      return { el: el, dir: parseFloat(el.getAttribute('data-gal-row')) >= 0 ? 1 : -1, base: parseFloat(el.getAttribute('data-gal-speed')) || 0.45, x: i * 260, loop: 1 };
    });
    var measure = function () { self._gal.forEach(function (r) { r.loop = r.el.scrollWidth / 2 || 1; }); };
    measure();
    setTimeout(measure, 400);
    if (this._galResize) window.removeEventListener('resize', this._galResize);
    this._galResize = measure;
    window.addEventListener('resize', measure);
    var strip = document.querySelector('[data-gal-strip]');
    var cta = document.querySelector('[data-gal-cta]');
    if (strip && cta) {
      strip.addEventListener('mouseenter', function () { cta.style.background = 'rgba(111,69,37,0.82)'; cta.style.borderColor = '#d2ab6e'; cta.style.transform = 'translate(-50%,-50%) scale(1.02)'; });
      strip.addEventListener('mouseleave', function () { cta.style.background = 'rgba(13,10,7,0.62)'; cta.style.borderColor = 'rgba(210,171,110,0.55)'; cta.style.transform = 'translate(-50%,-50%)'; });
    }
  }

  galDrift() {
    var g = this._gal;
    if (!g || this.reduce) return;
    var v = 0;
    if (this.lenis && typeof this.lenis.velocity === 'number') v = this.lenis.velocity;
    var boost = Math.min(2.4, Math.abs(v) * 0.055);
    g.forEach(function (r) {
      r.x += (r.base + boost) * r.dir;
      var xr = -(((r.x % r.loop) + r.loop) % r.loop);
      r.el.style.transform = 'translate3d(' + xr.toFixed(2) + 'px,0,0)';
    });
  }

  // ---- Lenis smooth scroll (waits for CDN script; native fallback) ----
  setupLenis() {
    var self = this;
    if (this.opts.smoothScroll === false) return;
    var tries = 0;
    var attempt = function () {
      if (self._dead || self.lenis) return;
      if (window.Lenis) {
        var lenis = new window.Lenis({
          duration: 1.15,
          easing: function (t) { return 1 - Math.pow(1 - t, 3); },
          smoothWheel: true
        });
        self.lenis = lenis;
        var raf = function (t) {
          if (self._dead) return;
          lenis.raf(t);
          self._lenisRaf = requestAnimationFrame(raf);
        };
        self._lenisRaf = requestAnimationFrame(raf);
        if (self._introActive || self._menuOpen) lenis.stop();
      } else if (tries++ < 40) {
        setTimeout(attempt, 150);
      }
    };
    attempt();
  }

  // ---- route anchor clicks through lenis.scrollTo ----
  setupAnchors() {
    var self = this;
    var onClick = function (e) {
      var t = e.target;
      var a = t && t.closest ? t.closest('a[href^="#"]') : null;
      if (!a) return;
      var id = a.getAttribute('href');
      if (!id || id.length < 2) return;
      var el = null;
      try { el = document.querySelector(id); } catch (err) {}
      if (el && self.lenis) { e.preventDefault(); self.lenis.scrollTo(el); }
    };
    document.addEventListener('click', onClick);
    this._cleanup.push(function () { document.removeEventListener('click', onClick); });
  }

  // ---- rAF loop: parallax + nav state ----
  startLoop() {
    var self = this;
    var loop = function () {
      if (self._dead) return;
      self.parallax();
      self.navUpdate();
      self.projScrub();
      self.galDrift();
      self._loopRaf = requestAnimationFrame(loop);
    };
    self._loopRaf = requestAnimationFrame(loop);
  }

  parallax() {
    var els = this._pxEls || [];
    var vh = window.innerHeight;
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      var r = el.getBoundingClientRect();
      var c = r.top + r.height / 2 - vh / 2;
      var sp = parseFloat(el.getAttribute('data-speed')) || 0;
      el.style.transform = 'translate3d(0,' + (c * -sp).toFixed(1) + 'px,0)';
    }
  }

  navUpdate() {
    var nav = this._nav || document.querySelector('[data-lum-nav]');
    if (!nav) return;
    var y = this.lenis ? this.lenis.scroll : (window.scrollY || 0);
    var on = y > 40;
    if (on === this._navOn) return;
    this._navOn = on;
    if (on) {
      nav.style.background = 'rgba(13,10,7,0.82)';
      nav.style.backdropFilter = 'blur(10px)';
      nav.style.webkitBackdropFilter = 'blur(10px)';
      nav.style.paddingTop = '1.2rem';
      nav.style.paddingBottom = '1.2rem';
    } else {
      nav.style.background = 'transparent';
      nav.style.backdropFilter = 'none';
      nav.style.webkitBackdropFilter = 'none';
      nav.style.paddingTop = '2rem';
      nav.style.paddingBottom = '2rem';
    }
  }

  responsiveNav() {
    var narrow = window.innerWidth <= 760;
    var navNarrow = window.innerWidth <= 1010;
    var links = document.querySelector('[data-nav-links]');
    var burger = document.querySelector('[data-nav-burger]');
    if (links) links.style.display = navNarrow ? 'none' : 'flex';
    if (burger) burger.style.display = navNarrow ? 'flex' : 'none';
    Array.prototype.forEach.call(document.querySelectorAll('[data-wide-only]'), function (el) {
      el.style.display = narrow ? 'none' : (el.getAttribute('data-wide-disp') || 'block');
    });
    Array.prototype.forEach.call(document.querySelectorAll('[data-narrow-only]'), function (el) {
      el.style.display = narrow ? (el.getAttribute('data-narrow-disp') || 'block') : 'none';
    });
    Array.prototype.forEach.call(document.querySelectorAll('[data-xwide-only]'), function (el) {
      el.style.display = window.innerWidth <= 1020 ? 'none' : (el.getAttribute('data-xwide-disp') || 'block');
    });
    var lw = window.innerWidth;
    var lscale = lw <= 480 ? 0.5 : lw <= 760 ? 0.62 : lw <= 1080 ? 0.85 : 1;
    var leafBase = function (node, attr, cssVal) {
      var v = node.getAttribute(attr);
      if (v === null) { v = String(parseFloat(cssVal) || 0); node.setAttribute(attr, v); }
      return parseFloat(v);
    };
    Array.prototype.forEach.call(document.querySelectorAll('[data-leaf]'), function (el) {
      if (!el.style.width || el.style.width.indexOf('px') < 0) return;
      var img = el.querySelector('img');
      var box = img ? img.parentElement : null;
      if (!img || !box) return;
      var bw = leafBase(el, 'data-bw', el.style.width);
      if (!bw) return;
      el.style.width = Math.round(bw * lscale) + 'px';
      el.style.marginLeft = -Math.round(bw * lscale / 2) + 'px';
      var bxw = leafBase(box, 'data-bxw', box.style.width);
      var bxh = leafBase(box, 'data-bxh', box.style.height);
      var bmt = leafBase(box, 'data-bmt', box.style.marginTop);
      if (bxw) box.style.width = Math.round(bxw * lscale) + 'px';
      if (bxh) box.style.height = Math.round(bxh * lscale) + 'px';
      if (bmt) box.style.marginTop = Math.round(bmt * lscale) + 'px';
      var tx = parseFloat(el.getAttribute('data-txb') || '');
      if (isNaN(tx)) {
        var boxTx = box.getAttribute('data-tx');
        tx = boxTx !== null ? parseFloat(boxTx) || 0 : 0;
        el.setAttribute('data-txb', tx);
      }
      box.style.transform = 'translateX(' + (tx * lscale).toFixed(1) + 'px)';
      var iw = leafBase(img, 'data-iw', img.style.width);
      if (iw) img.style.width = Math.round(iw * lscale) + 'px';
    });
    if (!narrow && this._menuOpen) this.closeMenu();
  }

  // ---- ambient light particles in the hero ----
  setupParticles() {
    var self = this;
    var cv = document.querySelector('[data-lum-particles]');
    if (!cv || !cv.getContext) return;
    var density = this.opts.particleDensity != null ? +this.opts.particleDensity : 1;
    if (!(density > 0)) return;
    var ctx = cv.getContext('2d');
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var W = 1, H = 1, P = [];
    function size() {
      var par = cv.parentElement;
      var nw = (par ? par.clientWidth : 0) || cv.clientWidth || 800;
      var nh = Math.round(((par ? par.clientHeight : 0) || cv.clientHeight || 600) * 1.12);
      if (nw === W && nh === H) return;
      if (P.length && W > 1 && H > 1) {
        for (var j = 0; j < P.length; j++) { P[j].x = P[j].x / W * nw; P[j].y = P[j].y / H * nh; }
      }
      W = nw; H = nh;
      cv.width = W * dpr;
      cv.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    function mk(init, ix) {
      return {
        x: (ix == null || !n ? Math.random() : (ix + 0.08 + Math.random() * 0.84) / n) * W,
        y: init ? Math.random() * H : H + 10,
        r: 1 + Math.random() * 2.6,
        vy: 0.2 + Math.random() * 0.5,
        sway: Math.random() * 6.283,
        amp: 8 + Math.random() * 20,
        a: 0,
        max: 0.4 + Math.random() * 0.5,
        cool: Math.random() < 0.16
      };
    }
    size();
    var n = Math.round(Math.min(90, Math.max(30, W * H / 13000)) * density);
    n = Math.min(180, Math.max(0, n));
    for (var i = 0; i < n; i++) P.push(mk(true, i));
    var stopped = false;
    function draw() {
      if (self._dead || stopped) return;
      ctx.clearRect(0, 0, W, H);
      for (var i = 0; i < P.length; i++) {
        var p = P[i];
        p.y -= p.vy;
        p.sway += 0.01;
        var x = p.x + Math.sin(p.sway) * p.amp;
        if (p.y < H * 0.7) p.a = Math.min(p.max, p.a + 0.01);
        if (p.y < H * 0.14) p.a = Math.max(0, p.a - 0.012);
        if (p.y < -10) { P[i] = mk(false, i); continue; }
        var R = p.r * 7;
        var g = ctx.createRadialGradient(x, p.y, 0, x, p.y, R);
        if (p.cool) {
          g.addColorStop(0, 'rgba(207,224,236,' + p.a.toFixed(3) + ')');
          g.addColorStop(1, 'rgba(207,224,236,0)');
        } else {
          g.addColorStop(0, 'rgba(247,233,208,' + p.a.toFixed(3) + ')');
          g.addColorStop(0.4, 'rgba(210,171,110,' + (p.a * 0.5).toFixed(3) + ')');
          g.addColorStop(1, 'rgba(179,120,74,0)');
        }
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(x, p.y, R, 0, 6.2832);
        ctx.fill();
      }
      self._pRaf = requestAnimationFrame(draw);
    }
    draw();
    this._particleResize = size;
    this._particleTeardown = function () {
      stopped = true;
      if (self._pRaf) cancelAnimationFrame(self._pRaf);
      try { ctx.clearRect(0, 0, W, H); } catch (e) {}
    };
  }
}

export interface LegacyMotionOptions {
  playIntro?: boolean;
  heroAutoplay?: boolean;
  smoothScroll?: boolean;
  particleDensity?: number;
  onIntroDone?: () => void;
}

/** Mounts the original behaviour against the rendered markup. Returns a teardown. */
export function mountLegacyMotion(opts: LegacyMotionOptions = {}) {
  const instance = new LegacyMotion(opts);
  instance.mount();
  return () => instance.unmount();
}
