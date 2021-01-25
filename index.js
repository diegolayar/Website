import LocomotiveScroll from 'locomotive-scroll';
const emoji = require("emoji-dictionary");

const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
  multiplier: 0.8

});
