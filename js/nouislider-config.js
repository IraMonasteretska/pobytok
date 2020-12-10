
"use strict";






var keypressSlider_desc = document.querySelector(".slider-keypress-desc");
var input0_desc = document.querySelector(".input-with-keypress-0-desc");
var input1_desc = document.querySelector(".input-with-keypress-1-desc");
var inputs_desc = [input0_desc, input1_desc];

noUiSlider.create(keypressSlider_desc, {
  start: [input0_desc.value, input1_desc.value],
  connect: true,
  tooltips: [false, false],
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



// custom tooltipe



const salerOrigin = document.querySelector('#saler-origin')
const stateOrigin = document.querySelector('#state-origin')
const scoreOrigin = document.querySelector('#score-origin')
const deliveryOrigin = document.querySelector('#delivery-origin')

window.addEventListener('load', function () { 
    let O = document.getElementById('custom-tooltipe'),
        Y = 0

salerOrigin.parentNode.parentNode.children[2].addEventListener('click', function () {
        Y = salerOrigin.getBoundingClientRect().top + pageYOffset + (salerOrigin.clientHeight/2); 
        setTimeout(getOpacity, 1500);
        function getOpacity() { 
          O.style.opacity = 1
        }
    });

    stateOrigin.parentNode.parentNode.children[2].addEventListener('click', function () {
        Y = stateOrigin.getBoundingClientRect().top + pageYOffset + (stateOrigin.clientHeight/2); 
        setTimeout(getOpacity, 1500);
        function getOpacity() { 
          O.style.opacity = 1
        }
    });

    scoreOrigin.parentNode.parentNode.children[2].addEventListener('click', function () {
        Y = scoreOrigin.getBoundingClientRect().top + pageYOffset + (scoreOrigin.clientHeight/2); 
        setTimeout(getOpacity, 1500);
        function getOpacity() { 
          O.style.opacity = 1
        }
    });
    
    deliveryOrigin.parentNode.parentNode.children[2].addEventListener('click', function () {
        Y = deliveryOrigin.getBoundingClientRect().top + pageYOffset + (deliveryOrigin.clientHeight/2); 
        setTimeout(getOpacity, 1500);
        function getOpacity() { 
          O.style.opacity = 1
        }
    });

    function move() { 
    
        let p = 'px';
        O.style.top = Y + p;
        setTimeout(move, 100);
    }
    move();

});