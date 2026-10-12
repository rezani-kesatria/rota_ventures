(function () {
  "use strict";

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var hasGsap = typeof window.gsap !== "undefined";
  var hasMotionLib = typeof window.Motion !== "undefined" || typeof window.motion !== "undefined";

  /* ---- theme ------------------------------------------------------------ */

  var themeBtn = document.querySelector(".theme-toggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var root = document.documentElement;
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("rv-theme", next); } catch (e) {}
    });
  }

  /* ---- direction-aware sticky nav ---------------------------------------- */

  var nav = document.querySelector(".nav");
  var lastY = window.pageYOffset;
  var menuOpen = false;

  window.addEventListener("scroll", function () {
    if (!nav || menuOpen) return;
    var y = window.pageYOffset;
    if (y > 140 && y > lastY + 4) {
      nav.classList.add("is-hidden");
    } else if (y < lastY - 4 || y <= 140) {
      nav.classList.remove("is-hidden");
    }
    lastY = y;
  }, { passive: true });

  /* ---- mobile menu --------------------------------------------------------- */

  var burger = document.querySelector(".burger");
  var menu = document.getElementById("mobile-menu");

  function setMenu(open) {
    menuOpen = open;
    if (!burger || !menu) return;
    burger.setAttribute("aria-expanded", open ? "true" : "false");
    burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    if (open) {
      menu.hidden = false;
      if (nav) nav.classList.remove("is-hidden");
      document.body.style.overflow = "hidden";
    } else {
      menu.hidden = true;
      document.body.style.overflow = "";
    }
  }

  if (burger && menu) {
    burger.addEventListener("click", function () { setMenu(!menuOpen); });
    menu.addEventListener("click", function (e) {
      if (e.target.closest("a")) setMenu(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && menuOpen) setMenu(false);
    });
  }

  /* ---- nav dropdowns (Engineering Solutions / Product Supports) ------------- */

  var navDds = Array.prototype.slice.call(document.querySelectorAll(".nav-dd"));

  function setDropdown(dd, open) {
    if (!dd) return;
    dd.classList.toggle("open", open);
    var btn = dd.querySelector(".nav-dd-toggle");
    if (btn) btn.setAttribute("aria-expanded", open ? "true" : "false");
  }

  navDds.forEach(function (dd) {
    var btn = dd.querySelector(".nav-dd-toggle");
    if (!btn) return;
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      var isOpen = dd.classList.contains("open");
      navDds.forEach(function (other) { setDropdown(other, false); });
      setDropdown(dd, !isOpen);
    });
    dd.addEventListener("click", function (e) {
      if (e.target.closest(".nav-dd-menu a")) {
        navDds.forEach(function (other) { setDropdown(other, false); });
      }
    });
  });

  document.addEventListener("click", function (e) {
    if (!e.target.closest(".nav-dd")) {
      navDds.forEach(function (dd) { setDropdown(dd, false); });
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      navDds.forEach(function (dd) { setDropdown(dd, false); });
    }
  });

  /* ---- contact form (mailto handoff) ------------------------------------------ */

  /* single source of truth: the footer's contact link owns the address */
  var contactEmail = (function () {
    var link = document.querySelector('.footer-col a[href^="mailto:"]');
    var addr = link ? link.getAttribute("href").replace(/^mailto:/i, "").trim() : "";
    return addr || "usaid@rotaventures.com.my";
  })();

  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var status = form.querySelector(".form-status");
      var name = form.elements.name.value.trim();
      var email = form.elements.email.value.trim();
      var company = form.elements.company.value.trim();
      var interest = form.elements.interest.value;
      var message = form.elements.message.value.trim();

      status.classList.remove("error", "success");
      form.querySelectorAll("input, textarea").forEach(function (f) {
        f.style.borderColor = "";
      });

      var bad = null;
      if (!name) bad = form.elements.name;
      else if (!email) bad = form.elements.email;
      else if (!message) bad = form.elements.message;

      if (bad) {
        bad.style.borderColor = "var(--accent)";
        status.textContent = bad === form.elements.email
          ? "Add your email address so we can reply."
          : bad === form.elements.name
            ? "Fill in your name before sending."
            : "Tell us what you need before sending.";
        status.classList.add("error");
        bad.focus();
        return;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        form.elements.email.style.borderColor = "var(--accent)";
        status.textContent = "That email address doesn't look complete. Check it and send again.";
        status.classList.add("error");
        form.elements.email.focus();
        return;
      }

      var subject = encodeURIComponent("Website enquiry from " + name + (company ? " at " + company : ""));
      var body = encodeURIComponent(
        "Name: " + name +
        "\nEmail: " + email +
        (company ? "\nCompany: " + company : "") +
        "\nInterest: " + (interest || "Not sure yet") +
        "\n\n" + message
      );
      window.location.href = "mailto:" + contactEmail + "?subject=" + subject + "&body=" + body;

      status.textContent = "Thanks, " + name + ". Your email client is open with the message ready to send.";
      status.classList.add("success");
      form.reset();
    });
  }

  /* ---- benefit deck: self-looping vertical carousel, never pauses ---------------
     wired before the reduced-motion gate: the tabs stay operable without GSAP */

  (function () {
    var deck = document.querySelector(".benefit-deck");
    if (!deck) return;
    var tablist = deck.querySelector(".benefit-tabs");
    var tabs = [].slice.call(deck.querySelectorAll(".benefit-tab"));
    var panels = [].slice.call(deck.querySelectorAll(".benefit-panel"));
    var dots = [].slice.call(deck.querySelectorAll(".benefit-dot"));
    var dotbar = deck.querySelector(".benefit-dots");
    var progress = deck.querySelector(".benefit-progress");
    if (!tablist || !tabs.length || tabs.length !== panels.length) return;

    var DWELL = 5200;
    deck.style.setProperty("--dwell", DWELL + "ms");

    var timer = null;
    var index = 0;

    /* [hidden] is the no-JS fallback; visibility CSS takes over once live */
    panels.forEach(function (panel) { panel.removeAttribute("hidden"); });

    function restartProgress() {
      if (!progress) return;
      progress.style.animation = "none";
      void progress.offsetWidth;
      progress.style.animation = "";
    }

    function show(i) {
      index = (i + tabs.length) % tabs.length;
      tabs.forEach(function (tab, n) {
        var on = n === index;
        tab.classList.toggle("is-active", on);
        tab.setAttribute("aria-selected", on ? "true" : "false");
        tab.tabIndex = on ? 0 : -1;
      });
      panels.forEach(function (panel, n) {
        panel.classList.toggle("is-active", n === index);
      });
      dots.forEach(function (dot, n) {
        var on = n === index;
        dot.classList.toggle("is-active", on);
        if (on) dot.setAttribute("aria-current", "true");
        else dot.removeAttribute("aria-current");
      });
      if (dotbar) dotbar.classList.add("is-running");
      restartProgress();
    }

    function restart() {
      if (timer) window.clearInterval(timer);
      timer = window.setInterval(function () { show(index + 1); }, DWELL);
    }

    tabs.forEach(function (tab, n) {
      tab.addEventListener("click", function () { show(n); restart(); });
    });

    dots.forEach(function (dot, n) {
      dot.addEventListener("click", function () { show(n); restart(); });
    });

    [].slice.call(deck.querySelectorAll(".benefit-arrow")).forEach(function (btn) {
      btn.addEventListener("click", function () {
        show(index + (btn.getAttribute("data-dir") === "1" ? 1 : -1));
        restart();
      });
    });

    tablist.addEventListener("keydown", function (e) {
      var dir = e.key === "ArrowDown" ? 1 : e.key === "ArrowUp" ? -1 : 0;
      if (!dir) return;
      e.preventDefault();
      show(index + dir);
      tabs[index].focus();
      restart();
    });

    show(0);
    restart();
  })();

  /* ---- FAQ: one open at a time, animated via grid-template-rows ---------------
     wired before the reduced-motion gate: the accordion stays operable without GSAP */

  (function () {
    var faqItems = Array.prototype.slice.call(document.querySelectorAll(".faq-item"));
    if (!faqItems.length) return;

    function setFaqItem(item, open) {
      var button = item.querySelector(".faq-q");
      var panel = item.querySelector(".faq-a");
      item.classList.toggle("open", open);
      if (button) button.setAttribute("aria-expanded", open ? "true" : "false");
      if (panel) panel.setAttribute("aria-hidden", open ? "false" : "true");
    }

    faqItems.forEach(function (item) {
      var button = item.querySelector(".faq-q");
      if (!button) return;
      button.addEventListener("click", function () {
        var willOpen = !item.classList.contains("open");
        faqItems.forEach(function (other) {
          setFaqItem(other, other === item ? willOpen : false);
        });
      });
    });
  })();

  /* ---- motion ------------------------------------------------------------------ */

  if (reduced || !hasGsap) return;

  if (window.ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

  /* Lenis smooth scroll, synced with ScrollTrigger */
  var lenis = null;
  if (typeof window.Lenis !== "undefined") {
    lenis = new window.Lenis({ duration: 1.05 });
    if (window.ScrollTrigger) {
      lenis.on("scroll", window.ScrollTrigger.update);
    }
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener("click", function (e) {
        var id = link.getAttribute("href");
        if (id.length < 2) return;
        var target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        lenis.scrollTo(target, { offset: -90 });
      });
    });
  }

  /* word-by-word split, preserving .tone elements */
  function splitWords(el) {
    if (!el) return [];
    var words = [];
    var nodes = Array.prototype.slice.call(el.childNodes);
    el.textContent = "";
    nodes.forEach(function (node) {
      var isEl = node.nodeType === 1;
      var parent = null;
      if (isEl) {
        parent = node.cloneNode(false);
        el.appendChild(parent);
      }
      var target = isEl ? parent : el;
      var text = node.textContent;
      text.split(/(\s+)/).forEach(function (part) {
        if (!part) return;
        if (/^\s+$/.test(part)) {
          target.appendChild(document.createTextNode(" "));
          return;
        }
        var w = document.createElement("span");
        w.className = "w";
        var wi = document.createElement("span");
        wi.className = "wi";
        wi.textContent = part;
        w.appendChild(wi);
        target.appendChild(w);
        words.push(wi);
      });
    });
    return words;
  }

  var style = document.createElement("style");
  style.textContent =
    ".w{display:inline-block;overflow:hidden;vertical-align:bottom;padding-bottom:0.15em;margin-bottom:-0.15em}" +
    ".wi{display:inline-block}";
  document.head.appendChild(style);

  /* The moment: page hero entrance */
  var heroHead = document.querySelector(".page-hero h1");
  var eyebrow = document.querySelector(".page-hero .eyebrow");
  var heroLead = document.querySelector(".page-hero-lead");

  if (heroHead) {
    var heroWords = splitWords(heroHead);
    gsap.set(heroWords, { yPercent: 112 });
    gsap.set(eyebrow, { autoAlpha: 0, y: 14 });
    if (heroLead) gsap.set(heroLead, { autoAlpha: 0, y: 18 });

    var heroTl = gsap.timeline({ defaults: { ease: "power3.out" }, delay: 0.15 });
    heroTl
      .to(eyebrow, { autoAlpha: 1, y: 0, duration: 0.7 })
      .to(heroWords, { yPercent: 0, duration: 0.9, stagger: 0.042, ease: "power4.out" }, "-=0.45")
      .to(heroLead, { autoAlpha: 1, y: 0, duration: 0.8 }, "-=0.55");
  }

  /* press spring on pills (Motion), CSS :active covers absence */
  if (hasMotionLib) {
    try {
      var M = window.Motion || window.motion;
      document.querySelectorAll(".pair").forEach(function (pair) {
        var pill = pair.querySelector(".pair-pill");
        if (!pill || !M.animate) return;
        pair.addEventListener("pointerdown", function () {
          M.animate(pill, { scale: 0.96 }, { type: "spring", stiffness: 500, damping: 24 });
        });
        pair.addEventListener("pointerup", function () {
          M.animate(pill, { scale: 1 }, { type: "spring", stiffness: 500, damping: 18 });
        });
      });
    } catch (e) {}
  }

  /* scroll-triggered word rise for section headings */
  document.querySelectorAll(".band .display-sm, .cta-band .display-sm, .contact-band .display-sm").forEach(function (h) {
    var words = splitWords(h);
    gsap.set(words, { yPercent: 112 });
    if (window.ScrollTrigger) {
      ScrollTrigger.create({
        trigger: h,
        start: "top 86%",
        once: true,
        onEnter: function () {
          gsap.to(words, { yPercent: 0, duration: 0.85, stagger: 0.042, ease: "power4.out" });
        }
      });
    } else {
      gsap.to(words, { yPercent: 0, duration: 0.85, stagger: 0.042 });
    }
  });

  /* imagery wipes upward, clipped on the inner child */
  document.querySelectorAll(".wipe").forEach(function (fig) {
    var img = fig.querySelector(".wipe-img");
    if (!img) return;
    gsap.set(img, { clipPath: "inset(100% 0% 0% 0%)", scale: 1.09 });
    if (window.ScrollTrigger) {
      ScrollTrigger.create({
        trigger: fig,
        start: "top 88%",
        once: true,
        onEnter: function () {
          gsap.to(img, {
            clipPath: "inset(0% 0% 0% 0%)",
            scale: 1,
            duration: 1.15,
            ease: "power3.inOut"
          });
        }
      });
    } else {
      gsap.to(img, { clipPath: "inset(0% 0% 0% 0%)", scale: 1, duration: 1.15 });
    }
  });

  /* rings unwind, badges land on the overshoot curve, then idle-orbit the dashed line */
  var orbitTweens = [];

  document.querySelectorAll(".ring").forEach(function (ring, i) {
    var circ = ring.querySelector(".ring-svg circle");
    var value = ring.querySelector(".ring-value");
    var badge = ring.querySelector(".ring-badge");
    if (!circ) return;
    var C = 2 * Math.PI * 130;
    gsap.set(circ, { strokeDasharray: "3 8", attr: { "stroke-dashoffset": C }, rotation: -120, transformOrigin: "50% 50%" });
    if (value) gsap.set(value, { autoAlpha: 0, scale: 0.9 });
    var orbit = null;
    if (badge) {
      orbit = document.createElement("span");
      orbit.className = "ring-orbit";
      badge.parentNode.insertBefore(orbit, badge);
      orbit.appendChild(badge);
      gsap.set(badge, { autoAlpha: 0, scale: 0.9 });
      /* stagger the start angle so the badges never move in lockstep;
         paused at init when ScrollTrigger will gate them to the viewport */
      var orbitTween = gsap.fromTo(orbit,
        { rotation: -i * 120 },
        { rotation: 360 - i * 120, duration: 26, ease: "none", repeat: -1, paused: !!window.ScrollTrigger, transformOrigin: "50% 50%" });
      var badgeTween = gsap.fromTo(badge,
        { rotation: i * 120 },
        { rotation: i * 120 - 360, duration: 26, ease: "none", repeat: -1, paused: !!window.ScrollTrigger });
      orbitTweens.push(orbitTween, badgeTween);
    }

    if (window.ScrollTrigger) {
      ScrollTrigger.create({
        trigger: ".rings",
        start: "top 75%",
        once: true,
        onEnter: function () {
          gsap.to(circ, {
            attr: { "stroke-dashoffset": 0 },
            rotation: 0,
            duration: 1.4,
            ease: "power2.inOut",
            delay: i * 0.12
          });
          if (value) gsap.to(value, { autoAlpha: 1, scale: 1, duration: 0.7, ease: "power2.out", delay: 0.7 + i * 0.12 });
          if (badge) {
            gsap.fromTo(badge, { scale: 0.4, autoAlpha: 0 }, {
              scale: 1, autoAlpha: 1,
              duration: 0.65, ease: "back.out(2)",
              delay: 0.9 + i * 0.12
            });
          }
        }
      });
    } else {
      gsap.set(circ, { attr: { "stroke-dashoffset": 0 }, rotation: 0 });
      gsap.set([value, badge], { autoAlpha: 1, scale: 1 });
    }
  });

  /* orbit tweens run only while the rings section is near or in the viewport */
  if (window.ScrollTrigger && orbitTweens.length) {
    ScrollTrigger.create({
      trigger: ".rings",
      start: "top 95%",
      end: "bottom top",
      onToggle: function (self) {
        orbitTweens.forEach(function (tw) {
          if (self.isActive) tw.play();
          else tw.pause();
        });
      }
    });
  }

  /* peer sets stagger ~70ms in reading order */
  function staggerIn(selector, trigger, from) {
    var els = document.querySelectorAll(selector);
    if (!els.length) return;
    gsap.set(els, from);
    if (window.ScrollTrigger) {
      ScrollTrigger.create({
        trigger: trigger,
        start: "top 82%",
        once: true,
        onEnter: function () {
          gsap.to(els, { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.07, ease: "power3.out" });
        }
      });
    } else {
      gsap.to(els, { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.07 });
    }
  }

  staggerIn(".step", ".steps", { autoAlpha: 0, y: 26 });
  staggerIn(".value-cell", ".values", { autoAlpha: 0, y: 26 });
  staggerIn(".split-block", ".split-copy", { autoAlpha: 0, y: 24 });
  staggerIn(".benefit-tab", ".benefit-tabs", { autoAlpha: 0, y: 24 });
  staggerIn(".ring-cell:not(.ring-cell--cta)", ".rings", { autoAlpha: 0, y: 24 });
  staggerIn(".ring-cell--cta", ".rings", { autoAlpha: 0, y: 24 });
  staggerIn(".contact-form > *", ".contact-form", { autoAlpha: 0, y: 18 });
  staggerIn(".footer-grid > *", ".footer-grid", { autoAlpha: 0, y: 22 });

  /* circle buttons in bands */
  document.querySelectorAll(".circle-btn").forEach(function (btn) {
    gsap.set(btn, { autoAlpha: 0, scale: 0.6, rotation: -30 });
    if (window.ScrollTrigger) {
      ScrollTrigger.create({
        trigger: btn,
        start: "top 88%",
        once: true,
        onEnter: function () {
          gsap.to(btn, { autoAlpha: 1, scale: 1, rotation: 0, duration: 0.8, ease: "back.out(1.8)" });
        }
      });
    } else {
      gsap.to(btn, { autoAlpha: 1, scale: 1, rotation: 0, duration: 0.8 });
    }
  });

  /* marquee: one continuous ticker */
  var track = document.querySelector(".marquee-track");
  if (track) {
    var seq = track.querySelector(".marquee-seq");
    track.appendChild(seq.cloneNode(true));
    var loop = gsap.to(track, {
      xPercent: -50,
      ease: "none",
      duration: 26,
      repeat: -1
    });
    var marqueeInView = true;
    if (typeof IntersectionObserver !== "undefined") {
      var marqueeWatcher = new IntersectionObserver(function (entries) {
        marqueeInView = entries[entries.length - 1].isIntersecting;
        if (marqueeInView) loop.play();
        else loop.pause();
      });
      marqueeWatcher.observe(document.querySelector(".marquee"));
    }
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) loop.pause();
      else if (marqueeInView) loop.play();
    });
  }
})();
