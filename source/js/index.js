/* eslint-disable no-undef */
/* eslint-disable no-alert */
/* eslint-disable quotes */
/* eslint-disable comma-spacing */
"use strict";
const buyTourButton = document.querySelectorAll(".offer-button");
const modalBuy = document.querySelector("#modal-buy");
const modalBuyClose = document.querySelectorAll("#buy-close");
const modalMessageClose = document.querySelector("#message-close");
const modal = document.querySelector(".modal");
const modalForm = modal.querySelector(".modal__buy-form");
const phoneInput = modal.querySelector("#modal-tel");
const emailInput = modal.querySelector("#modal-email");
const modalMessage = modal.querySelector("#modal-message");
const tabsLinks = document.querySelectorAll(".tabs__link");
const tabDetailsList = document.querySelector(".tab-details__list");
const tabDetailsItems = tabDetailsList.querySelectorAll(".tab-details__item");
const reviewList = document.querySelector(".review__list");
const reviewItems = reviewList.querySelectorAll(".review__item");

eventListeners();

function eventListeners() {
  modalMessageClose.addEventListener("click", closeModal);
  document.addEventListener("keydown", closeModals);
  modalForm.addEventListener("submit", addUserInfo);
  document.addEventListener("DOMContentLoaded", getTabDetails);
}

buyTourButton.forEach((btn) => {
  btn.addEventListener("click", function () {
    modalBuy.style.display = "block";
  });
});

// eslint-disable-next-line no-shadow
modalBuyClose.forEach((closeModalBuy) => {
  closeModalBuy.addEventListener("click",function () {
    modalBuy.style.display = "none";
  });
});

function closeModalBuy() {
  modalBuy.style.display = "none";
}

function clearInputs() {

  phoneInput.value = "";
  emailInput.value = "";
}

function closeModal() {
  modalMessage.style.display = "none";
}

function closeModals(e) {
  if (e.which === 27 || e.which === 13) {
    modalBuy.style.display = "none";
    modalMessage.style.display = "none";
  }
}

function onModalMessage() {
  modalMessage.style.display = "block";
}

function addUserInfo(e) {
  const phone = phoneInput.value;
  const email = emailInput.value;
  const newUser = new Info(phone, email);

  if (phone === "" || email === "") {
    alert("Пожалуйста заполните вся поля!");
  } else {
    Storage.addNewUserToStorage(newUser);
    closeModalBuy();
    onModalMessage();
  }

  clearInputs();
  e.preventDefault();
}

function getTabDetails() {
  for (let i = 0; i < tabsLinks.length; i++) {
    for (let j = 0; j < tabDetailsItems.length; j++) {
      if (!tabsLinks[i].classList.contains("tabs__link--active")) {
        // tabsLinks[i].classList.add("visually-hidden");
        tabDetailsItems[i].classList.add("visually-hidden");
        reviewItems[i].classList.add("visually-hidden");
      }
      tabsLinks[i].addEventListener("click",function () {
        if (i !== j) {
          tabDetailsItems[j].classList.add("visually-hidden");
          tabsLinks[j].classList.remove("tabs__link--active");
          reviewItems[j].classList.add("visually-hidden");
        } else {
          tabDetailsItems[j].classList.remove("visually-hidden");
          reviewItems[j].classList.remove("visually-hidden");
          tabsLinks[i].classList.add("tabs__link--active");
        }
      });
    }
  }
}
