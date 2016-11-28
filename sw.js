importScripts('https://unpkg.com/sw-toolbox@3.4.0/sw-toolbox.js')
toolbox.options.debug = true

toolbox.precache([
  './',
  './readme.md',
  './script.js',
  './style.css',
  'https://remarkjs.com/downloads/remark-latest.min.js',
  'img/app_store.png',
  'img/bowie.jpg',
  'img/flash.png',
  'img/google_play.png',
  'img/slight.png',
  'img/webworks.png'
])

toolbox.router.get('/(.*)', toolbox.fastest, {
  origin: /.*/
})
