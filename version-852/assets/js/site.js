(function () {
  var menuButton = document.querySelector('[data-menu-toggle]');
  var mobileNav = document.querySelector('[data-mobile-nav]');

  if (menuButton && mobileNav) {
    menuButton.addEventListener('click', function () {
      mobileNav.classList.toggle('is-open');
    });
  }

  var hero = document.querySelector('[data-hero]');

  if (hero) {
    var slides = Array.prototype.slice.call(hero.querySelectorAll('[data-hero-slide]'));
    var dots = Array.prototype.slice.call(hero.querySelectorAll('[data-hero-dot]'));
    var active = 0;

    function showHero(index) {
      active = (index + slides.length) % slides.length;
      slides.forEach(function (slide, slideIndex) {
        slide.classList.toggle('is-active', slideIndex === active);
      });
      dots.forEach(function (dot, dotIndex) {
        dot.classList.toggle('is-active', dotIndex === active);
      });
    }

    dots.forEach(function (dot, index) {
      dot.addEventListener('click', function () {
        showHero(index);
      });
    });

    if (slides.length > 1) {
      window.setInterval(function () {
        showHero(active + 1);
      }, 5200);
    }
  }

  var searchInput = document.querySelector('[data-search-input]');
  var yearSelect = document.querySelector('[data-filter-year]');
  var categorySelect = document.querySelector('[data-filter-category]');
  var list = document.querySelector('[data-card-list]');
  var emptyState = document.querySelector('[data-empty-state]');

  function filterCards() {
    if (!list) {
      return;
    }

    var keyword = searchInput ? searchInput.value.trim().toLowerCase() : '';
    var year = yearSelect ? yearSelect.value : '';
    var category = categorySelect ? categorySelect.value : '';
    var cards = Array.prototype.slice.call(list.querySelectorAll('[data-card]'));
    var visibleCount = 0;

    cards.forEach(function (card) {
      var text = (card.getAttribute('data-title') || '').toLowerCase();
      var cardYear = card.getAttribute('data-year') || '';
      var cardCategory = card.getAttribute('data-category') || '';
      var visible = true;

      if (keyword && text.indexOf(keyword) === -1) {
        visible = false;
      }

      if (year && cardYear !== year) {
        visible = false;
      }

      if (category && cardCategory !== category) {
        visible = false;
      }

      card.style.display = visible ? '' : 'none';

      if (visible) {
        visibleCount += 1;
      }
    });

    if (emptyState) {
      emptyState.classList.toggle('is-visible', visibleCount === 0);
    }
  }

  [searchInput, yearSelect, categorySelect].forEach(function (control) {
    if (control) {
      control.addEventListener('input', filterCards);
      control.addEventListener('change', filterCards);
    }
  });
}());
