"use strict";
const accord = Array.from(document.querySelectorAll('.box'));

accord.forEach((element, activeIndex) => {
  element.addEventListener('click', function () {
    this.classList.add('active')

    accord.forEach((item, index) => {
      if (index !== activeIndex) {
        item.classList.remove("active")
      }
    })
  })
})