let taxa_7_day = document.querySelector('.price-7-day')
    taxa_14_day = document.querySelector('.price-14-day'),
    taxa_30_day = document.querySelector('.price-30-day'),
    taxa_30_day_old = document.querySelector('.price-30-day-old'),
    taxa_60_day = document.querySelector('.price-60-day'),
    taxa_60_day_old = document.querySelector('.price-60-day-old'),
    taxa_90_day = document.querySelector('.price-90-day'),
    taxa_90_day_old = document.querySelector('.price-90-day-old')   


const linkCheck = document.querySelector('.add-link-check')
const bannerCheck = document.querySelector('.personal__type-advert-bunner')
const descriptionCheck = document.querySelector('.personal__type-advert-desc')
const detailDescriptionCheck = document.querySelector('.personal__add-bunner-label')
    renderPriceTaxa()
    document.addEventListener('click', function () {
      renderPriceTaxa()
    })
    


function renderPriceTaxa(){
  // Selected only banner
  if(bannerCheck.classList.contains('active')){
    taxa_7_day.textContent = 50
    taxa_14_day.textContent = 100
    taxa_30_day.textContent = 190
    taxa_30_day_old.textContent = 200 
    taxa_60_day.textContent = 360
    taxa_60_day_old.textContent = 400
    taxa_90_day.textContent = 510
    taxa_90_day_old.textContent = 600
  }

   
   

  // Selected  banner and link
  if(bannerCheck.classList.contains('active') && linkCheck.classList.contains('active')){
    taxa_7_day.textContent = 75
    taxa_14_day.textContent = 120
    taxa_30_day.textContent = 285
    taxa_30_day_old.textContent = 300 
    taxa_60_day.textContent = 540
    taxa_60_day_old.textContent = 600
    taxa_90_day.textContent = 765
    taxa_90_day_old.textContent = 900
  } 
  
// Selected  banner and detail description
if(bannerCheck.classList.contains('active') && detailDescriptionCheck.classList.contains('active')){
  taxa_7_day.textContent = 50 * 2
  taxa_14_day.textContent = 100 * 2
  taxa_30_day.textContent = 190 * 2
  taxa_30_day_old.textContent = 200  * 2
  taxa_60_day.textContent = 360 * 2
  taxa_60_day_old.textContent = 400 * 2
  taxa_90_day.textContent = 510 * 2
  taxa_90_day_old.textContent = 600 * 2
} 


 // Selected banner, link and detail description
  if(bannerCheck.classList.contains('active') && linkCheck.classList.contains('active') && detailDescriptionCheck.classList.contains('active')){
    taxa_7_day.textContent = 125
    taxa_14_day.textContent = 250
    taxa_30_day.textContent = 475
    taxa_30_day_old.textContent = 500 
    taxa_60_day.textContent = 900
    taxa_60_day_old.textContent = 1000
    taxa_90_day.textContent = 1275
    taxa_90_day_old.textContent = 1500
  }



  // Selected only description
  if(descriptionCheck.classList.contains('active')){
    taxa_7_day.textContent = 60
    taxa_14_day.textContent = 120
    taxa_30_day_old.textContent = 240 
    taxa_30_day.textContent = 228
    taxa_60_day_old.textContent = 480
    taxa_60_day.textContent = 432
    taxa_90_day_old.textContent = 720
    taxa_90_day.textContent = 612
  }

   // Selected description and link
   if(descriptionCheck.classList.contains('active')  && linkCheck.classList.contains('active')){
    taxa_7_day.textContent = 80
    taxa_14_day.textContent = 160
    taxa_30_day_old.textContent = 304 
    taxa_30_day.textContent = 320
    taxa_60_day_old.textContent = 640
    taxa_60_day.textContent = 576
    taxa_90_day_old.textContent = 816
    taxa_90_day.textContent = 960
  }

    // Selected  description and detail description
    if(descriptionCheck.classList.contains('active') && detailDescriptionCheck.classList.contains('active')){
      taxa_7_day.textContent = 100
      taxa_14_day.textContent = 200
      taxa_30_day_old.textContent = 400 
      taxa_30_day.textContent = 380
      taxa_60_day_old.textContent = 800
      taxa_60_day.textContent = 720
      taxa_90_day_old.textContent = 1200
      taxa_90_day.textContent = 1020
     }


     // Selected description, link and detail description
     if(descriptionCheck.classList.contains('active') && linkCheck.classList.contains('active') && detailDescriptionCheck.classList.contains('active')){
      taxa_7_day.textContent = 120
      taxa_14_day.textContent = 240
      taxa_30_day_old.textContent = 480 
      taxa_30_day.textContent = 456
      taxa_60_day_old.textContent = 960
      taxa_60_day.textContent = 864
      taxa_90_day_old.textContent = 1440
      taxa_90_day.textContent = 1224
     }
}