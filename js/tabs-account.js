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

