(function () {
  var slideshow = remark.create({
    ratio: '16:9',
    slideNumberFormat: '',
    sourceUrl: 'readme.md'
  });
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js');
  }
})();