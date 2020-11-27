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
 

for(let i = 0 ; i < 2; i++){
  regionsItems.forEach(el => el.addEventListener('click', function () {
    tabletCityInput.value = '';
  }));

  regionsItems2.forEach(el => el.addEventListener('click', function () {
    tabletCityInput2.value = '';
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


if (document.querySelector(".selected")) {

  let filterWojewodstwoI = document.querySelectorAll(".filter__wojewodstwo-tablet");
  let filterWojewodstwoI2 = document.querySelectorAll(".filter__wojewodstwo-tablet2");
  let filterCityI = document.querySelectorAll(".filter__city-input-wrap");

  for(let j = 0 ; j < 2; j++){
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
    console.log(1);
  });

  let selectfilterSityI = document.querySelectorAll(".filter__city-input-wrap");
  document.addEventListener("click", function (event) {
    let target = event.target;
    if (
      target.classList.contains("filter__city-input") ||
      target.classList.contains("filter__city-input2") ||
      target.classList.contains("select__icon")
    ) {
      return;
    }
    selectfilterSityI[i].classList.remove("is-active");
    selectIconI[1].classList.remove("arrow-up");
    selectIconI[3].classList.remove("arrow-up");
  });
}
}



