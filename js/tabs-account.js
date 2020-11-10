// function openCity(evt, cityName) {
//   var i, tabcontent, tablinks;
//   tabcontent = document.getElementsByClassName("tabcontent");
//   for (i = 0; i < tabcontent.length; i++) {
//       tabcontent[i].style.display = "none";
//   }
//   tablinks = document.getElementsByClassName("tablinks");
//   for (i = 0; i < tablinks.length; i++) {
//       tablinks[i].className = tablinks[i].className.replace(" active", "");
//   }
//   document.getElementById(cityName).style.display = "block";
//   evt.currentTarget.className += " active";
// }
//   document.getElementById("defaultOpenTab").click();


let backgrountOpacityAll = document.querySelector('.backgrount-opacity-all');
let accountMobileMenu = document.querySelector('.personal__mobile-menu');
let accountMobileMenuPanel = document.querySelector('.personal__panel');
let closeMobileAcc = document.querySelector('.close-mobile-acc');

accountMobileMenu.addEventListener('click', getMobileMenuAcc)
function getMobileMenuAcc(){

  accountMobileMenuPanel.classList.add('active')
  backgrountOpacityAll.classList.add('active')
}
closeMobileAcc.addEventListener('click', closeMobileMenuAcc)
function closeMobileMenuAcc(){
  accountMobileMenuPanel.classList.remove('active')
  backgrountOpacityAll.classList.remove('active')

}
const mandatoryOverlay = document.querySelector('.mandatory-registration-popup');
let personalAvatar = document.querySelector('.personal__avatar')
personalAvatar.addEventListener('click', function(){
  mandatoryOverlay.classList.remove('visually-hidden');
})

const buttonSaveFileIn = document.querySelector('.button-save-file-in');
buttonSaveFileIn.addEventListener('click', function(){
  mandatoryOverlay.classList.add('visually-hidden');
})

let loadFileXml = document.querySelector('#loadFileXml');
loadFileXml.addEventListener('click', function(){
  setInterval(funct, 200)
  function funct(){
    let loadFileXml = document.querySelector('#loadFileXml');
    const fileInputUp = document.querySelector('#file');
    let str = fileInputUp.value
    const words = str.split('\\');
    let valueFile = words.length-1
    loadFileXml.value = words[valueFile]
    if(words[valueFile] == ''){
      loadFileXml.value = 'Выбрать файл'
    }
    if(loadFileXml.value != 'Выбрать файл'){
      loadFileXml.classList.add('done-select-file')
      buttonSaveFileIn.classList.add('done-select-file')
    }
  }
})

