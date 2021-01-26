document.addEventListener('DOMContentLoaded', createSelect, false);
function createSelect() {
    var select = document.getElementsByTagName('select'),
      liElement,
      ulElement,
      optionValue,
      iElement,
      optionText,
      selectDropdown,
      elementParentSpan;

      for (var select_i = 0, len = select.length; select_i < len; select_i++) {
        for (let i = 0; i < select[select_i].parentNode.children[0].children.length; i++) {
            if (select[select_i].parentNode.children[0].children[i].getAttribute('selected')) {
                select[select_i].setAttribute('placeholder-text', select[select_i].parentNode.children[0].children[i].textContent)
                break
            }
        }
    }


      for (var select_i = 0, len = select.length; select_i < len; select_i++) {
      select[select_i].style.display = 'none';
      wrapElement(document.getElementById(select[select_i].id), document.createElement('div'), select_i, select[select_i].getAttribute('placeholder-text'));

      for (var i = 0; i < select[select_i].options.length; i++) {
        liElement = document.createElement("li");
        optionValue = select[select_i].options[i].value;
        optionText = document.createTextNode(select[select_i].options[i].text);
        liElement.className = 'select-dropdown__list-item';
        liElement.setAttribute('data-value', optionValue);
        liElement.appendChild(optionText);
        ulElement.appendChild(liElement);

        liElement.addEventListener('click', function () {
          displyUl(this);
        }, false);
      }
    }
    function wrapElement(el, wrapper, i, placeholder) {
      el.parentNode.insertBefore(wrapper, el);
      wrapper.appendChild(el);

      document.addEventListener('click', function (e) {
        let clickInside = wrapper.contains(e.target);
        if (!clickInside) {
          let menu = wrapper.getElementsByClassName('select-dropdown__list');
          menu[0].classList.remove('active');
        }
      });

      var buttonElement = document.createElement("button"),
        spanElement = document.createElement("span"),
        spanText = document.createTextNode(placeholder);
        iElement = document.createElement("i");
        ulElement = document.createElement("ul");

      wrapper.className = 'select-dropdown select-dropdown--' + i;
      buttonElement.className = 'select-dropdown__button select-dropdown__button--' + i;
      buttonElement.setAttribute('data-value', '');
      buttonElement.setAttribute('type', 'button');
      spanElement.className = 'select-dropdown select-dropdown--' + i;
      iElement.className = 'zmdi zmdi-chevron-down';
      ulElement.className = 'select-dropdown__list select-dropdown__list--' + i;
      ulElement.id = 'select-dropdown__list-' + i;

      wrapper.appendChild(buttonElement);
      spanElement.appendChild(spanText);
      buttonElement.appendChild(spanElement);
      buttonElement.appendChild(iElement);
      wrapper.appendChild(ulElement);
    }

    function displyUl(element) {

      if (element.tagName == 'BUTTON') {
        selectDropdown = element.parentNode.getElementsByTagName('ul');
        //var labelWrapper = document.getElementsByClassName('js-label-wrapper');
        for (var i = 0, len = selectDropdown.length; i < len; i++) {
          selectDropdown[i].classList.toggle("active");
          //var parentNode = $(selectDropdown[i]).closest('.js-label-wrapper');
          //parentNode[0].classList.toggle("active");
        }
      } else if (element.tagName == 'LI') {
        var selectId = element.parentNode.parentNode.getElementsByTagName('select')[0];
        selectElement(selectId.id, element.getAttribute('data-value'));
        elementParentSpan = element.parentNode.parentNode.getElementsByTagName('span');
        element.parentNode.classList.toggle("active");
        elementParentSpan[0].textContent = element.textContent;
        elementParentSpan[0].parentNode.setAttribute('data-value', element.getAttribute('data-value'));
      }
      element.parentNode.parentNode.children[1].style.color = "#464646";
      element.parentNode.parentNode.children[0].classList.add('selected')

    }




    function selectElement(id, valueToSelect) {
      var element = document.getElementById(id);
      element.value = valueToSelect;
      element.setAttribute('selected', 'selected');
    }
    var buttonSelect = document.getElementsByClassName('select-dropdown__button');
    for (var i = 0, len = buttonSelect.length; i < len; i++) {
      buttonSelect[i].addEventListener('click', function (e) {
				e.preventDefault();
				displyUl(this);
			}, false);
		}
}







'use strict';
(function () {
  let tabletRegionInput = document.querySelectorAll('.regions-tablet-input');
  let tabletCityInputWrap = document.querySelectorAll('.cities-tablet-input-wrap');
  let dolnoslanskCities = document.querySelectorAll('.js-dolnoslansk');
  let kujPomCities = document.querySelectorAll('.js-kuj-pom');
  let lubelskCities = document.querySelectorAll('.js-lubelsk');
  let lubuskCities = document.querySelectorAll('.js-lubusk');
  let lodzCities = document.querySelectorAll('.js-lodz');
  let malopolskCities = document.querySelectorAll('.js-malopolsk');
  let mazowieckCities = document.querySelectorAll('.js-mazowieck');
  let opolskCities = document.querySelectorAll('.js-opolsk');
  let podkarpacCities = document.querySelectorAll('.js-podkarpac');
  let podlaskCities = document.querySelectorAll('.js-podlask');
  let pomorCities = document.querySelectorAll('.js-pomor');
  let slaskCities = document.querySelectorAll('.js-slask');
  let swietokrzCities = document.querySelectorAll('.js-swietokrz');
  let warminoMazurCities = document.querySelectorAll('.js-warmino-mazur');
  let wielkopolCities = document.querySelectorAll('.js-wielkopol');
  let zachodpomorCities = document.querySelectorAll('.js-zachodpomor');

  let regionsItems = document.querySelectorAll('.filter__wojewodstwo-tablet');
  let tabletCityInput = document.querySelector('.filter__city-input');

  let regionsItems2 = document.querySelectorAll('.filter__wojewodstwo-tablet2');
  let tabletCityInput2 = document.querySelector('.filter__city-input2');
  
  let regionsItems3 = document.querySelectorAll('.filter__wojewodstwo-tablet3');
  let tabletCityInput3 = document.querySelector('.filter__city-input3');

  let regionsItems4 = document.querySelectorAll('.filter__wojewodstwo-tablet4');
  let tabletCityInput4 = document.querySelector('.filter__city-input4');

  let regionsItems5 = document.querySelectorAll('.filter__wojewodstwo-tablet5');
  let tabletCityInput5 = document.querySelector('.filter__city-input5');
  
  
   
for(let i = 0 ; i < 6; i++){
  regionsItems.forEach(el => el.addEventListener('click', function () {
    tabletCityInput.value = '';
  }));
  regionsItems2.forEach(el => el.addEventListener('click', function () {
    tabletCityInput2.value = '';
  }));
  regionsItems3.forEach(el => el.addEventListener('click', function () {
    tabletCityInput3.value = '';
  }));
  regionsItems4.forEach(el => el.addEventListener('click', function () {
    tabletCityInput4.value = '';
  }));
  regionsItems5.forEach(el => el.addEventListener('click', function () {
    tabletCityInput5.value = '';
  }));

  let cityWraps = [dolnoslanskCities[i], kujPomCities[i], lubelskCities[i], lubuskCities[i], lodzCities[i], malopolskCities[i],
    mazowieckCities[i], opolskCities[i], podkarpacCities[i], podlaskCities[i], pomorCities[i], slaskCities[i], swietokrzCities[i],
    warminoMazurCities[i], wielkopolCities[i], zachodpomorCities[i]];

  function getSelectBody(cityWrap, wraps) {
    wraps.forEach( function(el) {
      el.classList.add('hidden');
      el.classList.remove('select-body');
    });
    cityWrap.classList.remove('hidden');
    cityWrap.classList.add('select__body');
  }

  tabletCityInputWrap[i].addEventListener('click', function () {
    if (tabletRegionInput[i].value === 'Dolnośląskie') {
      getSelectBody(dolnoslanskCities[i], cityWraps);
    } else if (tabletRegionInput[i].value === 'Kujawsko-pomorskie') {
      getSelectBody(kujPomCities[i], cityWraps);
    } else if (tabletRegionInput[i].value === 'Lubelskie') {
      getSelectBody(lubelskCities[i], cityWraps);
    } else if (tabletRegionInput[i].value === 'Lubuskie') {
      getSelectBody(lubuskCities[i], cityWraps);
    } else if (tabletRegionInput[i].value === 'Łódzkie') {
      getSelectBody(lodzCities[i], cityWraps);
    } else if (tabletRegionInput[i].value === 'Małopolskie') {
      getSelectBody(malopolskCities[i], cityWraps);
    } else if (tabletRegionInput[i].value === 'Mazowieckie') {
      getSelectBody(mazowieckCities[i], cityWraps);
    } else if (tabletRegionInput[i].value === 'Opolskie') {
      getSelectBody(opolskCities[i], cityWraps);
    } else if (tabletRegionInput[i].value === 'Podkarpackie') {
      getSelectBody(podkarpacCities[i], cityWraps);
    } else if (tabletRegionInput[i].value === 'Podlaskie') {
      getSelectBody(podlaskCities[i], cityWraps);
    } else if (tabletRegionInput[i].value === 'Pomorskie') {
      getSelectBody(pomorCities[i], cityWraps);
    } else if (tabletRegionInput[i].value === 'Śląskie') {
      getSelectBody(slaskCities[i], cityWraps);
    } else if (tabletRegionInput[i].value === 'Swiętokrzyskie') {
      getSelectBody(swietokrzCities[i], cityWraps);
    } else if (tabletRegionInput[i].value === 'Warmińsko-mazurskie') {
      getSelectBody(warminoMazurCities[i], cityWraps);
    } else if (tabletRegionInput[i].value === 'Wielkopolskie') {
      getSelectBody(wielkopolCities[i], cityWraps);
    } else if (tabletRegionInput[i].value === 'Zachodniopomorskie') {
      getSelectBody(zachodpomorCities[i], cityWraps);
    }
  });
}
})();

if (document.querySelector(".personal__select-ul-multi")) {

  let filterWojewodstwoI = document.querySelectorAll(".filter__wojewodstwo-tablet");
  let filterWojewodstwoI2 = document.querySelectorAll(".filter__wojewodstwo-tablet2");
  let filterWojewodstwoI3 = document.querySelectorAll(".filter__wojewodstwo-tablet3");
  let filterWojewodstwoI4 = document.querySelectorAll(".filter__wojewodstwo-tablet4");
  let filterWojewodstwoI5 = document.querySelectorAll(".filter__wojewodstwo-tablet5");
  let filterCityI = document.querySelectorAll(".filter__city-input-wrap");

  for(let j = 0 ; j < 6; j++){
  filterCityI[j].style.display = "none";
  }

  for (let i = 0; i < filterWojewodstwoI.length; i++) {
    filterWojewodstwoI[i].addEventListener("click", getCityBlock);
    function getCityBlock() {
      filterCityI[0].style.display = "block";
      if (this.innerHTML == "Cała Polska") {
        filterCityI[0].style.display = "none";
      }
    }
  }

  for (let i = 0; i < filterWojewodstwoI2.length; i++) {
    filterWojewodstwoI2[i].addEventListener("click", getCityBlock2);
    function getCityBlock2() {
      filterCityI[1].style.display = "block";
      if (this.innerHTML == "Cała Polska") {
        filterCityI[1].style.display = "none";
      }
    }
  }

  for (let i = 0; i < filterWojewodstwoI3.length; i++) {
    filterWojewodstwoI3[i].addEventListener("click", getCityBlock3);
    function getCityBlock3() {
      filterCityI[2].style.display = "block";
      if (this.innerHTML == "Cała Polska") {
        filterCityI[2].style.display = "none";
      }
    }
  }

  for (let i = 0; i < filterWojewodstwoI4.length; i++) {
    filterWojewodstwoI4[i].addEventListener("click", getCityBlock4);
    function getCityBlock4() {
      filterCityI[3].style.display = "block";
      if (this.innerHTML == "Cała Polska") {
        filterCityI[3].style.display = "none";
      }
    }
  }

   for (let i = 0; i < filterWojewodstwoI5.length; i++) {
    filterWojewodstwoI5[i].addEventListener("click", getCityBlock5);
    function getCityBlock5() {
      filterCityI[4].style.display = "block";
      if (this.innerHTML == "Cała Polska") {
        filterCityI[4].style.display = "none";
      }
    }
  }

  let filterRegionsI = document.querySelectorAll(".filter__all-regions-tablet-wrap");
  let selectIconI = document.querySelectorAll(".select__icon");

  for(let i = 0 ; i < filterRegionsI.length; i++){

  document.addEventListener("click", function (event) {
    let target = event.target;
    if (
      target.classList.contains("regions-tablet-input") ||
      target.classList.contains("select__icon")
    ) {
      return;
    }
    filterRegionsI[i].classList.remove("is-active");
    selectIconI[0].classList.remove("arrow-up");
    selectIconI[2].classList.remove("arrow-up");
    selectIconI[4].classList.remove("arrow-up");
    selectIconI[6].classList.remove("arrow-up");
    selectIconI[8].classList.remove("arrow-up");
  });
}

for(let i = 0 ; i < filterRegionsI.length; i++){
  let selectfilterSityI = document.querySelectorAll(".filter__city-input-wrap");
  document.addEventListener("click", function (event) {
    let target = event.target;
    if (
      target.classList.contains("filter__city-input") ||
      target.classList.contains("filter__city-input2") ||
      target.classList.contains("filter__city-input3") ||
      target.classList.contains("filter__city-input4") ||
      target.classList.contains("filter__city-input5") ||
      target.classList.contains("select__icon")
    ) {
      return;
    }
    selectfilterSityI[i].classList.remove("is-active");
    selectIconI[1].classList.remove("arrow-up");
    selectIconI[3].classList.remove("arrow-up");
    selectIconI[5].classList.remove("arrow-up");
    selectIconI[7].classList.remove("arrow-up");
    selectIconI[9].classList.remove("arrow-up");
  });
}
}
