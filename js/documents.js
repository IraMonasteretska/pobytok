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
