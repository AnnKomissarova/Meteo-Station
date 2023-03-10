const tabs = document.getElementsByClassName('tab');  
const sections = document.getElementsByClassName('section'); 

[...tabs].forEach(tab => tab.addEventListener('click', tabClick));

function tabClick(event) {
  const tabId = event.target.dataset.id;

  [...tabs].forEach((tab, i) => {
    tab.classList.remove('active');
    sections[i].classList.remove('active');
  })

  tabs[tabId - 1].classList.add('active');
  sections[tabId - 1].classList.add('active');
}

const modal = document.querySelector(".modal");
const bodyOverlay = document.querySelector(".body-overlay");
const body = document.querySelector("body");
const openModalBtn = document.querySelector("#modal-menu");
const btnClose = document.querySelector(".btn-text-secondary");
const btnOK = document.querySelector(".btn-text-primary")

function openModal() {
  modal.classList.add('active');
  bodyOverlay.classList.add('active');
  body.classList.add('with-overlay');
};

function closeModal() {
  modal.classList.remove('active');
  bodyOverlay.classList.remove('active');
  body.classList.remove('with-overlay');
};

openModalBtn.addEventListener('click', openModal);
btnClose.addEventListener('click', closeModal);
btnOK.addEventListener('click', closeModal);
