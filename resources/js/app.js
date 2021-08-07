import Alpine from 'alpinejs';
window.Alpine = Alpine;
Alpine.start();

window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

require('./spinner');

window.addEventListener("load",
   function () {
      closeLoadOverlay();
   }, false);

window.addEventListener("beforeunload", function (e) {
    openLoadOverlay();
});
