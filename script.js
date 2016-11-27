(function () {
  var slideshow = remark.create({
    ratio: '16:9',
    slideNumberFormat: 'nolanlawson.github.io/dotjs-2016',
    sourceUrl: 'readme.md'
  });
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js');
  }
})();