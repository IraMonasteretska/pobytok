const documentsOnlineLink = document.querySelectorAll(
  ".legalization-documents-online .legalization-documents__link"
);

for (let i of documentsOnlineLink) {
  i.addEventListener("click", () => {
    for (let j of documentsOnlineLink) {
      j.nextElementSibling.classList.remove("active");
    }
    i.nextElementSibling.classList.add("active");
  });
}

if (document.querySelector(".account-document-single")) {
  const firstPageInner = document.querySelector(".first-page-inner");
  const twoPageInner = document.querySelector(".two-page-inner");
  const threePageInner = document.querySelector(".three-page-inner");
  const fourPageInner = document.querySelector(".four-page-inner");
  const fivePageInner = document.querySelector(".five-page-inner");

  const firstPageValidSelect = document.querySelectorAll(
    ".first-page-valid-select"
  );
  const firstPageValidField = document.querySelectorAll(
    ".first-page-valid-field"
  );
  document.querySelector(".first-page-btn").addEventListener("click", () => {
    for (let i of firstPageValidSelect) {
      if (!i.classList.contains("selected")) {
        location.href = "#to-top-validation";
        return;
      }
    }
    for (let i of firstPageValidField) {
      location.href = "#to-top-validation";
      if (i.value == "") {
        return;
      }
    }

    firstPageInner.classList.add("hidden");
    twoPageInner.classList.remove("hidden");
    twoPageInner.classList.remove("closed");
    location.href = "#to-top-validation";
  });

  const twoPageValidSelect = document.querySelectorAll(
    ".two-page-valid-select"
  );
  const twoPageValidField = document.querySelectorAll(".two-page-valid-field");
  document.querySelector(".two-page-btn").addEventListener("click", () => {
    for (let i of twoPageValidSelect) {
      if (!i.classList.contains("selected")) {
        location.href = "#to-top-validation";
        return;
      }
    }
    for (let i of twoPageValidField) {
      location.href = "#to-top-validation";
      if (i.value == "") {
        return;
      }
    }

    twoPageInner.classList.add("hidden");
    threePageInner.classList.remove("hidden");
    threePageInner.classList.remove("closed");
    location.href = "#to-top-validation";
  });

  const threePageValidSelect = document.querySelectorAll(
    ".three-page-valid-select"
  );
  const threePageValidField = document.querySelectorAll(
    ".three-page-valid-field"
  );
  document.querySelector(".three-page-btn").addEventListener("click", () => {
    for (let i of threePageValidSelect) {
      if (!i.classList.contains("selected")) {
        location.href = "#to-top-validation";
        return;
      }
    }
    for (let i of threePageValidField) {
      location.href = "#to-top-validation";
      if (i.value == "") {
        return;
      }
    }

    threePageInner.classList.add("hidden");
    fourPageInner.classList.remove("hidden");
    fourPageInner.classList.remove("closed");
    location.href = "#to-top-validation";
  });

  const fourPageValidSelect = document.querySelectorAll(
    ".four-page-valid-select"
  );
  const fourPageValidField = document.querySelectorAll(
    ".four-page-valid-field"
  );
  document.querySelector(".four-page-btn").addEventListener("click", () => {
    for (let i of fourPageValidSelect) {
      if (!i.classList.contains("selected")) {
        location.href = "#to-top-validation";
        return;
      }
    }
    for (let i of fourPageValidField) {
      location.href = "#to-top-validation";
      if (i.value == "") {
        return;
      }
    }

    fourPageInner.classList.add("hidden");
    fivePageInner.classList.remove("hidden");
    fivePageInner.classList.remove("closed");
    location.href = "#to-top-validation";
  });

  const dataBtnBack = document.querySelector(".personal-data__btn-backP");
  const dataBtnNext = document.querySelector(".personal-data__btn-nextP");
  const pageInnerDocument = document.querySelectorAll(".page-inner-document");


const btnBackVisible = () => {
  for (let i of pageInnerDocument) {
    if (!i.classList.contains("hidden")) {
      if (
        !i.previousElementSibling.classList.contains("page-inner-document")
      ) {
        dataBtnBack.style.display = 'none'
      } else {
        dataBtnBack.style.display = 'block'
      }
    }
  }
}
btnBackVisible()
let counter = 0
const btnNextVisible = () => {
  for (let i of pageInnerDocument) { 
 
 
    if (!i.classList.contains("hidden")) {
      if (
        i.nextElementSibling === null 
      ) {
        dataBtnNext.style.display = 'none'
      } else {
        dataBtnNext.style.display = 'block'
      }
    }
  }
}
btnNextVisible()

  dataBtnBack.addEventListener("click", () => {
  
    for (let i of pageInnerDocument) {
      if (!i.classList.contains("hidden")) {
        if (
          !i.previousElementSibling.classList.contains("page-inner-document")
        ) {
          return;
        }
        i.classList.add("hidden");
        i.previousElementSibling.classList.remove("hidden");
      }
    }

  });

 

  dataBtnNext.addEventListener("click", () => {

    for (let i of pageInnerDocument) {
      if (!i.classList.contains("hidden")) {
        if (!i.nextElementSibling.classList.contains("page-inner-document")) {
          return;
        }
        if (i.nextElementSibling.classList.contains("closed")) {
          return;
        }
        i.classList.add("hidden");
        i.nextElementSibling.classList.remove("hidden");
        btnBackVisible()
        return;
      }
    }
 
  });

const allBtnInForm = document.querySelectorAll('.personal__button-add-realty')

for(let i of allBtnInForm){
  i.addEventListener('click', () => {
    btnBackVisible()
    btnNextVisible()
  })
}
  dataBtnBack.addEventListener("click", () =>  btnBackVisible())
  dataBtnNext.addEventListener("click", () =>  btnBackVisible())
  dataBtnBack.addEventListener("click", () =>  btnNextVisible())
  dataBtnNext.addEventListener("click", () =>  btnNextVisible())
}



if (document.querySelector(".add-worker-email")) {
  function getPopapChangeCompany() {
      document.querySelector('.popup-change-name-company').classList.remove('visually-hidden')
  }

  let addWorkerEmailForm = document.querySelector('.add-worker-email')
  let addWorkerEmailBtn = document.querySelectorAll('.service-add-worker-email.active')

  const firstBtnEmail = document.querySelector('.service-add-worker-email-1')
  const twoBtnEmail = document.querySelector('.service-add-worker-email-2')
  const threeBtnEmail = document.querySelector('.service-add-worker-email-3')

  const firstItemEmail = document.querySelector('.email-add-worker-item-first')
  const twoItemEmail = document.querySelector('.email-add-worker-item-two')
  const threeItemEmail = document.querySelector('.email-add-worker-item-three')




  function removeParentEmail() {
      let target = event.target;
      target.parentNode.parentNode.classList.remove('active')
      // if (addWorkerEmailForm.childElementCount == 0) {
      //     document.querySelector('.service-button-gray').classList.add('unactive')
      // }

      if (!firstItemEmail.classList.contains('active')) {
          firstBtnEmail.classList.add('active')
      } else if (!twoItemEmail.classList.contains('active')) {
          twoBtnEmail.classList.add('active')
      } else if (!threeItemEmail.classList.contains('active')) {
          threeBtnEmail.classList.add('active')
      }
      let addWorkerEmailBtn = document.querySelectorAll('.service-add-worker-email.active')

      if (addWorkerEmailBtn.length > 1) {
          addWorkerEmailBtn[addWorkerEmailBtn.length - 1].classList.remove('active')
      }
  }

  firstBtnEmail.addEventListener('click', () => {
      firstBtnEmail.classList.remove('active')
      document.querySelector('.email-add-worker-item-first').classList.add('active')
      // document.querySelector('.service-button-gray').classList.remove('unactive')

      if (!firstItemEmail.classList.contains('active')) {
          firstBtnEmail.classList.add('active')
      } else if (!twoItemEmail.classList.contains('active')) {
          twoBtnEmail.classList.add('active')
      } else if (!threeItemEmail.classList.contains('active')) {
          threeBtnEmail.classList.add('active')
      }
  });

  twoBtnEmail.addEventListener('click', () => {
      twoBtnEmail.classList.remove('active')
      document.querySelector('.email-add-worker-item-two').classList.add('active')
      // document.querySelector('.service-button-gray').classList.remove('unactive')

      if (!firstItemEmail.classList.contains('active')) {
          firstBtnEmail.classList.add('active')
      } else if (!twoItemEmail.classList.contains('active')) {
          twoBtnEmail.classList.add('active')
      } else if (!threeItemEmail.classList.contains('active')) {
          threeBtnEmail.classList.add('active')
      }
  });

  threeBtnEmail.addEventListener('click', () => {
      threeBtnEmail.classList.remove('active')

      document.querySelector('.email-add-worker-item-three').classList.add('active')
      // document.querySelector('.service-button-gray').classList.remove('unactive')

      if (!firstItemEmail.classList.contains('active')) {
          firstBtnEmail.classList.add('active')
      } else if (!twoItemEmail.classList.contains('active')) {
          twoBtnEmail.classList.add('active')
      } else if (!threeItemEmail.classList.contains('active')) {
          threeBtnEmail.classList.add('active')
      }
  });
  if (!firstItemEmail.classList.contains('active')) {
      firstBtnEmail.classList.add('active')

  } else if (!twoItemEmail.classList.contains('active')) {
      twoBtnEmail.classList.add('active')
  } else if (!threeItemEmail.classList.contains('active')) {
      threeBtnEmail.classList.add('active')

  }


}
