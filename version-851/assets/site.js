(function () {
  var navToggle = document.querySelector('[data-nav-toggle]');
  var mobileNav = document.querySelector('[data-mobile-nav]');

  if (navToggle && mobileNav) {
    navToggle.addEventListener('click', function () {
      mobileNav.classList.toggle('is-open');
    });
  }

  var hero = document.querySelector('[data-hero]');

  if (hero) {
    var slides = Array.prototype.slice.call(hero.querySelectorAll('[data-hero-slide]'));
    var dots = Array.prototype.slice.call(hero.querySelectorAll('[data-hero-dot]'));
    var index = 0;

    function showSlide(nextIndex) {
      if (!slides.length) {
        return;
      }

      index = (nextIndex + slides.length) % slides.length;

      slides.forEach(function (slide, slideIndex) {
        slide.classList.toggle('is-active', slideIndex === index);
      });

      dots.forEach(function (dot, dotIndex) {
        dot.classList.toggle('is-active', dotIndex === index);
      });
    }

    dots.forEach(function (dot, dotIndex) {
      dot.addEventListener('click', function () {
        showSlide(dotIndex);
      });
    });

    window.setInterval(function () {
      showSlide(index + 1);
    }, 5200);
  }

  var scopes = Array.prototype.slice.call(document.querySelectorAll('[data-filter-scope]'));

  scopes.forEach(function (scope) {
    var root = scope.parentElement || document;
    var input = scope.querySelector('[data-search-input]');
    var year = scope.querySelector('[data-year-filter]');
    var region = scope.querySelector('[data-region-filter]');
    var type = scope.querySelector('[data-type-filter]');
    var cards = Array.prototype.slice.call(root.querySelectorAll('.movie-card'));

    function valueOf(field) {
      return field ? field.value.trim().toLowerCase() : '';
    }

    function applyFilters() {
      var keyword = valueOf(input);
      var yearValue = valueOf(year);
      var regionValue = valueOf(region);
      var typeValue = valueOf(type);

      cards.forEach(function (card) {
        var text = [
          card.getAttribute('data-title') || '',
          card.getAttribute('data-region') || '',
          card.getAttribute('data-type') || '',
          card.getAttribute('data-tags') || '',
          card.textContent || ''
        ].join(' ').toLowerCase();
        var matched = true;

        if (keyword && text.indexOf(keyword) === -1) {
          matched = false;
        }

        if (yearValue && (card.getAttribute('data-year') || '').toLowerCase() !== yearValue) {
          matched = false;
        }

        if (regionValue && (card.getAttribute('data-region') || '').toLowerCase() !== regionValue) {
          matched = false;
        }

        if (typeValue && (card.getAttribute('data-type') || '').toLowerCase() !== typeValue) {
          matched = false;
        }

        card.hidden = !matched;
      });
    }

    [input, year, region, type].forEach(function (field) {
      if (field) {
        field.addEventListener('input', applyFilters);
        field.addEventListener('change', applyFilters);
      }
    });
  });
})();
