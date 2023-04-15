const modal = document.querySelector(".modal");
const bodyOverlay = document.querySelector(".body-overlay");
const body = document.querySelector("body");
const openModalBtn = document.querySelector("#modal-menu-btn");
const btnClose = document.querySelector(".btn-text-secondary");
const btnOK = document.querySelector(".btn-text-primary")
const modalMenu = document.querySelector(".modal-menu");
const btnMenuClose = document.querySelector(".btn-close");
const btnMenuSave = document.querySelector(".btn-save");
const modalMenuSettings = document.querySelector(".modal-settings");
const btnMenuExit = document.querySelector(".btn-exit");
const btnMenuSettings = document.querySelector(".btn-settings");


function openModalMenu() {
    modalMenu.classList.add('active');  
    modalMenuSettings.classList.remove('active');
    bodyOverlay.classList.add('active');
    body.classList.add('with-overlay');
  };
  
  function closeModalMenu() {
    modalMenu.classList.remove('active');
    bodyOverlay.classList.remove('active');
    body.classList.remove('with-overlay');
  };
  
  function openModalSettings() {
    modalMenuSettings.classList.add('active');
    bodyOverlay.classList.add('active');
    body.classList.add('with-overlay');
  };
  
  function closeModalSettings() {
    modalMenuSettings.classList.remove('active');
    bodyOverlay.classList.remove('active');
    body.classList.remove('with-overlay');
  };

openModalBtn.addEventListener('click', openModalSettings);
btnMenuClose.addEventListener('click', closeModalMenu);
btnMenuSave.addEventListener('click', closeModalMenu);
btnMenuSettings.addEventListener('click', openModalMenu);
btnMenuExit.addEventListener('click', closeModalSettings);
