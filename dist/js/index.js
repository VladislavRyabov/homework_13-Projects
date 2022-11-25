"use strict";

try {
  document.querySelector('#btn1').onclick = function () {
    document.querySelector('.home-offer__modal-container').classList.add('is-visible');
  };

  document.querySelector('.home-offer__modal-close').onclick = function () {
    document.querySelector('.home-offer__modal-container').classList.remove('is-visible');
  };
} catch (_unused) {
  console.log("dont find");
}

console.log("test");
var h1 = document.querySelectorAll('.animation');
var active = 'animation__active';

var isInViewport = function isInViewport(elem) {
  var bounding = elem.getBoundingClientRect();
  return bounding.top >= 0 && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight);
};

addEventListener('scroll', function (event) {
  for (var i = 0; i < h1.length; i++) {
    if (isInViewport(h1[i])) {
      h1[i].classList.add(active);
    }
  }
});
//# sourceMappingURL=index.js.map
