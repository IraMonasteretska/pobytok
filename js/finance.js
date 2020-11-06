let curencyAccaunt = document.querySelector('.finance-open__currency-block')
let iconFinance = document.querySelector('.select__icon-finance')
curencyAccaunt.addEventListener('click', openCurrency)
function openCurrency(){
  curencyAccaunt.classList.toggle('active')
  iconFinance.classList.toggle('active')
}
  // document.getElementById("defaultOpenTab").click();
  let trtr =   document.getElementById("defaultOpenTab")
  console.log(trtr);
  trtr.click();

document.addEventListener("click", function(event) {
  let target = event.target;
if(target.classList.contains('finance-open__currency-block')){
  return
}
if(target.classList.contains('finance-open__course-part')){
  return
}
if(target.classList.contains('finance-open__course')){
  return
}
if(target.classList.contains('select__icon-finance')){
  return
}
if(target.classList.contains('finance-open__number')){
  return
}

 curencyAccaunt.classList.remove('active')
 iconFinance.classList.remove('active')
});

