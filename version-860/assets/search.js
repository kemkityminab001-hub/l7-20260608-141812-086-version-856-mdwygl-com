(function () {
  const results = document.querySelector('[data-search-results]');
  const status = document.querySelector('[data-search-status]');
  const form = document.querySelector('.search-page-form');
  const categoryBar = document.querySelector('.search-category-bar');

  if (!results || !status || typeof SITE_MOVIES === 'undefined') {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const input = form ? form.querySelector('input[name="q"]') : null;
  let query = (params.get('q') || '').trim();
  let category = 'all';

  if (input) {
    input.value = query;
  }

  function card(movie) {
    const tags = (movie.tags || []).slice(0, 3).map(function (tag) {
      return '<span>' + escapeHtml(tag) + '</span>';
    }).join('');

    return '<article class="movie-card">' +
      '<a class="poster-link" href="./' + movie.file + '" aria-label="观看' + escapeHtml(movie.title) + '">' +
        '<img src="' + movie.cover + '" alt="' + escapeHtml(movie.title) + '" loading="lazy">' +
        '<span class="duration">HD</span>' +
      '</a>' +
      '<div class="movie-info">' +
        '<div class="movie-meta">' +
          '<span>' + escapeHtml(movie.year) + '</span>' +
          '<span>' + escapeHtml(movie.region) + '</span>' +
          '<span>' + escapeHtml(movie.type) + '</span>' +
        '</div>' +
        '<h3><a href="./' + movie.file + '">' + escapeHtml(movie.title) + '</a></h3>' +
        '<p>' + escapeHtml(movie.desc) + '</p>' +
        '<div class="tag-row">' + tags + '</div>' +
      '</div>' +
    '</article>';
  }

  function escapeHtml(value) {
    return String(value || '').replace(/[&<>"]/g, function (char) {
      return {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;'
      }[char];
    });
  }

  function matches(movie) {
    if (category !== 'all' && movie.category !== category) {
      return false;
    }

    if (!query) {
      return true;
    }

    const text = [
      movie.title,
      movie.year,
      movie.region,
      movie.type,
      movie.genre,
      movie.categoryName,
      movie.desc,
      (movie.tags || []).join(' ')
    ].join(' ').toLowerCase();

    return text.indexOf(query.toLowerCase()) !== -1;
  }

  function render() {
    const list = SITE_MOVIES.filter(matches).slice(0, 120);
    results.innerHTML = list.map(card).join('');
    status.textContent = query ? '搜索：' + query : '推荐影片';
  }

  if (categoryBar) {
    categoryBar.addEventListener('click', function (event) {
      const button = event.target.closest('button[data-search-category]');
      if (!button) {
        return;
      }
      category = button.getAttribute('data-search-category') || 'all';
      categoryBar.querySelectorAll('button').forEach(function (item) {
        item.classList.toggle('is-active', item === button);
      });
      render();
    });
  }

  render();
})();
