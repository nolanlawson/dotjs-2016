importScripts('https://unpkg.com/sw-toolbox@3.4.0/sw-toolbox.js');

toolbox.options.debug = true;
toolbox.precache([
  './',
  './readme.md',
  './script.js',
  './style.css',
  'https://remarkjs.com/downloads/remark-latest.min.js'
]);
toolbox.router.get('/(.*)', toolbox.fastest, {
  origin: /.*/
});