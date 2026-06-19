(function () {
  const toggle = document.querySelector('.menu-toggle');
  const panel = document.querySelector('.mobile-panel');

  if (toggle && panel) {
    toggle.addEventListener('click', function () {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      panel.hidden = expanded;
    });
  }

  const hero = document.querySelector('[data-hero]');

  if (hero) {
    const slides = Array.from(hero.querySelectorAll('[data-hero-slide]'));
    const dots = Array.from(hero.querySelectorAll('.hero-dot'));
    let active = 0;
    let timer = null;

    function show(index) {
      active = (index + slides.length) % slides.length;
      slides.forEach(function (slide, slideIndex) {
        slide.classList.toggle('is-active', slideIndex === active);
      });
      dots.forEach(function (dot, dotIndex) {
        dot.classList.toggle('is-active', dotIndex === active);
      });
    }

    function start() {
      stop();
      timer = setInterval(function () {
        show(active + 1);
      }, 5200);
    }

    function stop() {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    }

    dots.forEach(function (dot) {
      dot.addEventListener('click', function () {
        show(Number(dot.getAttribute('data-slide')) || 0);
        start();
      });
    });

    hero.addEventListener('mouseenter', stop);
    hero.addEventListener('mouseleave', start);
    start();
  }

  const filterBar = document.querySelector('[data-filter-bar]');
  const cardList = document.querySelector('[data-card-list]');

  if (filterBar && cardList) {
    const cards = Array.from(cardList.querySelectorAll('[data-title]'));

    filterBar.addEventListener('click', function (event) {
      const button = event.target.closest('button');
      if (!button) {
        return;
      }

      const type = button.getAttribute('data-filter-type');
      const region = button.getAttribute('data-filter-region');
      const year = button.getAttribute('data-filter-year');

      filterBar.querySelectorAll('button').forEach(function (item) {
        item.classList.toggle('is-active', item === button);
      });

      cards.forEach(function (card) {
        let visible = true;

        if (type && type !== 'all') {
          visible = card.getAttribute('data-type') === type;
        }

        if (region) {
          const value = card.getAttribute('data-region') || '';
          visible = /美国|英国|法国|德国|意大利|西班牙|加拿大|澳大利亚|欧美/.test(value);
        }

        if (year) {
          visible = card.getAttribute('data-year') === year;
        }

        card.classList.toggle('is-hidden', !visible);
      });
    });
  }
})();
