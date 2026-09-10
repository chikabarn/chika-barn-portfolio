document.getElementById('year').textContent = new Date().getFullYear();

// Scroll progress rule
var scrollRule = document.getElementById('scrollRule');
function updateScrollRule() {
  var doc = document.documentElement;
  var scrollTop = doc.scrollTop || document.body.scrollTop;
  var scrollHeight = (doc.scrollHeight || document.body.scrollHeight) - doc.clientHeight;
  var pct = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
  scrollRule.style.width = pct + '%';
}
window.addEventListener('scroll', updateScrollRule, { passive: true });
updateScrollRule();

// Count-up numbers (hero chart + stat band), triggered once each when visible
function countUp(el, opts) {
  var target = Number(el.dataset.target);
  var prefix = el.dataset.prefix || '';
  var suffix = el.dataset.suffix || '';
  var decimals = Number(el.dataset.decimals || 0);
  var duration = 900;
  var start = null;
  function tick(ts) {
    if (!start) start = ts;
    var progress = Math.min((ts - start) / duration, 1);
    var eased = 1 - Math.pow(1 - progress, 3);
    var value = target * eased;
    el.textContent = prefix + value.toLocaleString(undefined, {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    }) + suffix;
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

var countTargets = Array.from(document.querySelectorAll('.chart-num, .stat-num'));
var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReduced) {
  countTargets.forEach(function (el) {
    var target = Number(el.dataset.target);
    var prefix = el.dataset.prefix || '';
    var suffix = el.dataset.suffix || '';
    var decimals = Number(el.dataset.decimals || 0);
    el.textContent = prefix + target.toLocaleString(undefined, {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    }) + suffix;
  });
} else if ('IntersectionObserver' in window) {
  var countObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        countUp(entry.target);
        countObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });
  countTargets.forEach(function (el) { countObserver.observe(el); });
} else {
  countTargets.forEach(function (el) { countUp(el); });
}

// Interactive experience switcher
var expItems = Array.from(document.querySelectorAll('.exp-item'));
var expPanels = Array.from(document.querySelectorAll('.exp-panel'));

expItems.forEach(function (item) {
  item.addEventListener('click', function () {
    var index = item.dataset.exp;
    expItems.forEach(function (i) { i.classList.remove('active'); });
    expPanels.forEach(function (p) { p.classList.remove('active'); });
    item.classList.add('active');
    var panel = document.querySelector('.exp-panel[data-panel="' + index + '"]');
    if (panel) panel.classList.add('active');
  });
});
