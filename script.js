let menu;
burgerMenu = document.getElementById('burger-div');
burger = document.getElementById('burger');
panel = document.getElementById('panel');
overlay = document.getElementById('overlay');
icon = document.getElementById('icon');


function toggleMenu() {
  if (this.menu === false ) {
    this.openMenu();
    this.menu = true;
  } else {
    this.closeMenu();
  }
}

if (window.matchMedia("(min-width: 500px)").matches) {
  let iconOpen = '<img style="width:80%;" src="./icon-open.png" alt=""/>' ;
  let iconClose = '<img style="width:80%;" src="./icon-close.png" alt=""/>';
  /* La largeur minimum de l'affichage est 481 px inclus */
  function openMenu() {
    this.icon.innerHTML = iconOpen;
    this.panel.style.width="0%";
    this.burgerMenu.style.marginLeft="95%";
    this.overlay.style.opacity="0";
    this.burgerMenu.style.transition="0.5s";
    this.panel.style.transition="0.5s";
    this.overlay.style.transition="1.5s";
  }

  function closeMenu() {
    this.icon.innerHTML = iconClose;
    this.panel.style.width="40%";
    this.burgerMenu.style.marginLeft="58%";
    this.burgerMenu.style.transition="0.3s";
    this.panel.style.transition="0.5s";
    this.overlay.style.transition="1.5s";
    this.overlay.style.opacity="1";
    this.menu = false;
  }
} else {
  /* L'affichage est inférieur à 481 px de large */
  let iconOpen = '<img style="width:60%; margin-top:0;" src="./icon-open.png" alt=""/>' ;
  let iconClose = '<img style="width:60%; margin-top:0;" src="./icon-close.png" alt=""/>';

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
    this.burgerMenu.style.transition="0.3s";
    this.panel.style.transition="0.5s";
    this.menu = false;
  }
}
