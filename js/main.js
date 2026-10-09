(function () {
  "use strict";

  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    nav.addEventListener("click", function (e) {
      if (e.target.closest("a") && nav.classList.contains("open")) {
        nav.classList.remove("open");
        toggle.classList.remove("open");
      }
    });
  }

  document.querySelectorAll(".dropdown-toggle").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      var dd = btn.closest(".dropdown");
      var isOpen = dd.classList.contains("open");
      document.querySelectorAll(".dropdown.open").forEach(function (other) {
        other.classList.remove("open");
      });
      dd.classList.toggle("open", !isOpen);
    });
  });

  document.addEventListener("click", function (e) {
    if (!e.target.closest(".dropdown")) {
      document.querySelectorAll(".dropdown.open").forEach(function (dd) {
        dd.classList.remove("open");
      });
    }
  });

  document.querySelectorAll(".faq-question").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var item = btn.closest(".faq-item");
      var isOpen = item.classList.contains("open");
      item.closest(".faq-list").querySelectorAll(".faq-item.open").forEach(function (other) {
        other.classList.remove("open");
        other.querySelector(".faq-question").setAttribute("aria-expanded", "false");
      });
      if (!isOpen) {
        item.classList.add("open");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });

  var form = document.getElementById("footer-contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var status = form.querySelector(".form-status");
      var name = form.elements.name.value.trim();
      var email = form.elements.email.value.trim();
      var message = form.elements.questions.value.trim();

      status.classList.remove("error", "success");

      if (!name || !email || !message) {
        status.textContent = "Please fill in your name, email address and question.";
        status.classList.add("error");
        return;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        status.textContent = "Please enter a valid email address.";
        status.classList.add("error");
        return;
      }

      var subject = encodeURIComponent("Website enquiry from " + name);
      var body = encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\n" + message);
      window.location.href = "mailto:usaid@rotaventures.com.my?subject=" + subject + "&body=" + body;

      status.textContent = "Thank you, " + name + ". Your email client has been opened with your message ready to send.";
      status.classList.add("success");
      form.reset();
    });
  }

  document.querySelectorAll('a[href="#contact"]').forEach(function (link) {
    link.addEventListener("click", function () {
      var target = document.getElementById("contact");
      if (target) {
        window.scrollTo({ top: target.getBoundingClientRect().top + window.pageYOffset - 80, behavior: "smooth" });
      }
    });
  });
})();
