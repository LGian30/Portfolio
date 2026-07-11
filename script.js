document.getElementById('year').textContent = new Date().getFullYear();

// Terminal typing effect
(function () {
  var target = document.getElementById('typeLine');
  if (!target) return;

  var text = 'Jhian Gabriel — Software Engineer';
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduced) {
    target.textContent = text;
    return;
  }

  var i = 0;
  function type() {
    if (i <= text.length) {
      target.textContent = text.slice(0, i);
      i++;
      setTimeout(type, 38);
    }
  }
  // slight delay so it starts after page paint
  setTimeout(type, 400);
})();
