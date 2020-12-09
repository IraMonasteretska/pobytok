
"use strict";






var keypressSlider_desc = document.querySelector(".slider-keypress-desc");
var input0_desc = document.querySelector(".input-with-keypress-0-desc");
var input1_desc = document.querySelector(".input-with-keypress-1-desc");
var inputs_desc = [input0_desc, input1_desc];
console.log(parseInt(input1_desc.value));

noUiSlider.create(keypressSlider_desc, {
  start: [input0_desc.value, input1_desc.value],
  connect: true,
  tooltips: [false, true],
  step: 1,
  range: {
    min: [parseInt(input0_desc.value)],
    max: [parseInt(input1_desc.value)]
  },
  format: {
    from: function (value) {
      return parseInt(value);
    },
    to: function (value) {
      return parseInt(value);
    }
  }
});


let inputNumber_desc_0 = document.querySelector('.input-with-keypress-0-desc');
let inputNumber_desc_1 = document.querySelector('.input-with-keypress-1-desc');

keypressSlider_desc.noUiSlider.on("update", function (values, handle) {
 
  inputs_desc[handle].value = values[handle];
});


inputNumber_desc_0.addEventListener('change', function () {
  
  keypressSlider_desc.noUiSlider.set([ this.value, null]);
});
inputNumber_desc_1.addEventListener('change', function () {
  keypressSlider_desc.noUiSlider.set([null, this.value]);
});


 



var keypressSlider = document.querySelector(".slider-keypress");
var input0 = document.querySelector(".input-with-keypress-0");
var input1 = document.querySelector(".input-with-keypress-1");
var inputs = [input0, input1];

noUiSlider.create(keypressSlider, {
  start: [0, 600],
  connect: true,
  tooltips: [false, true],
  step: 1,
  range: {
    min: [0],
    max: [1000]
  },
  format: {
    from: function (value) {
      return parseInt(value);
    },
    to: function (value) {
      return parseInt(value);
    }
  }
});

/* begin Inputs  */

/* end Inputs  */

var tooltip = document.querySelector(".noUi-tooltip");

keypressSlider.noUiSlider.on("update", function (values, handle) {
  inputs[handle].value = values[handle];
});

let inputNumber_0 = document.querySelector('.input-with-keypress-0');
let inputNumber_1 = document.querySelector('.input-with-keypress-1');

inputNumber_0.addEventListener('change', function () {
  keypressSlider.noUiSlider.set([ this.value, null]);
});
inputNumber_1.addEventListener('change', function () {
  keypressSlider.noUiSlider.set([null, this.value]);
});


