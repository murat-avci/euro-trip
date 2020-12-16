const buyTourButton = document.querySelector(".tab-details__button");

addEventListeners();

function addEventListeners() {
  buyTourButton.addEventListener("click", showModal);
}

function showModal(e){
  console.log(e.target);
}
