let menu;
burgerMenu = document.getElementById('burger-div');
burger = document.getElementById('burger');
panel = document.getElementById('panel');
icon = document.getElementById('icon');


burgerMenu.addEventListener('click', function () {
  toggleMenu();
})

function toggleMenu() {
  if (this.menu === false ) {
    this.openMenu();
    this.menu = true;
  } else {
    this.closeMenu();
  }
}

// if (window.matchMedia("(max-width: 740px)").matches) {

let iconOpen = '<img style="width:70%; margin-top:0;" src="./assets/icon-open.png" alt=""/>' ;
let iconClose = '<img style="width:70%; margin-top:0;" src="./assets/icon-close.png" alt=""/>';

  function openMenu() {
    this.icon.innerHTML = iconOpen;
    this.panel.style.width="0%";
    this.burgerMenu.style.marginLeft="85%";
    this.burgerMenu.style.transition="0.5s";
    this.panel.style.transition="0.5s";
  }

  function closeMenu() {
    this.icon.innerHTML = iconClose;
    this.panel.style.width="100%";
    this.burgerMenu.style.marginLeft="5%";
    this.burgerMenu.style.transition="0.5s";
    this.panel.style.transition="0.5s";
    this.menu = false;
  }
