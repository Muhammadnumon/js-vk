'use strict';
const counterEl = document.querySelector('[data-id="counter"]');
counterEl['__counterValue'] = 0;
setInterval(() => {
    counterEl.textContent = counterEl['__counterValue'];
    counterEl['__counterValue'] = counterEl['__counterValue'] + 10;
}, 1000);