// FUTH EMR - Shared JavaScript

(function () {
  // -------- Sidebar toggle (mobile) --------
  function toggleSidebar() {
    var sb = document.querySelector('.sidebar');
    if (sb) sb.classList.toggle('open');
  }

  // -------- Highlight active nav based to data-page attribute --------
  function setupNav() {
    var page = document.body.getAttribute('data-page');
    if (!page) return;
    document.querySelectorAll('.nav-item, .nav-sub-item').forEach(function (el) {
      if (el.getAttribute('data-page') === page) {
        el.classList.add('active');
        // also activate parent nav-item if sub-item
        if (el.classList.contains('nav-sub-item')) {
          var parent = el.closest('.nav-group');
          if (parent) {
            var mainItem = parent.querySelector('.nav-item');
            if (mainItem) mainItem.classList.add('active');
            parent.classList.add('expanded');
          }
        }
      }
    });
  }

  // -------- Radio cards (Patient Type) --------
  function setupRadioCards() {
    document.querySelectorAll('.radio-group').forEach(function (group) {
      var cards = group.querySelectorAll('.radio-card');
      cards.forEach(function (card) {
        card.addEventListener('click', function () {
          cards.forEach(function (c) { c.classList.remove('selected'); });
          card.classList.add('selected');
          var input = card.querySelector('input');
          if (input) input.checked = true;
        });
      });
    });
  }

  // -------- Modal close --------
  function setupModals() {
    document.querySelectorAll('[data-close-modal]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var modal = btn.closest('.modal-backdrop');
        if (modal) modal.style.display = 'none';
      });
    });
  }

  // -------- Menu button --------
  function setupMenuBtn() {
    var btn = document.querySelector('.topbar__menu-btn');
    if (btn) btn.addEventListener('click', toggleSidebar);
  }

  document.addEventListener('DOMContentLoaded', function () {
    setupNav();
    setupRadioCards();
    setupModals();
    setupMenuBtn();
  });
})();


  // -------- Login Form --------
const passwordInput = document.getElementById('password');
    const passwordToggle = document.querySelector('.password-toggle');
    const loginForm = document.getElementById('loginForm');

    passwordToggle.addEventListener('click', () => {
        const isPassword = passwordInput.type === 'password';
        passwordInput.type = isPassword ? 'text' : 'password';
        passwordToggle.classList.toggle('show', isPassword);
        passwordToggle.setAttribute('aria-label', isPassword ? 'Hide password' : 'Show password');
        passwordToggle.setAttribute('title', isPassword ? 'Hide password' : 'Show password');
    });

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        window.location.href = 'dashboard.html';
    });