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

let iconOpen = '<img style="width:70%; margin-top:0;" src="./icon-open.png" alt=""/>' ;
let iconClose = '<img style="width:70%; margin-top:0;" src="./icon-close.png" alt=""/>';

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

// } else {
//   let iconOpen = '<img style="width:80%;" src="./icon-open.png" alt=""/>' ;
//   let iconClose = '<img style="width:80%;" src="./icon-close.png" alt=""/>';
//   function openMenu() {
//     this.icon.innerHTML = iconOpen;
//     this.panel.style.width="0%";
//     this.burgerMenu.style.marginLeft="95%";
//     this.burgerMenu.style.transition="0.5s";
//     this.panel.style.transition="0.5s";
//     this.overlay.style.transition="1.5s";
//   }

//   function closeMenu() {
//     this.icon.innerHTML = iconClose;
//     this.panel.style.width="40%";
//     this.burgerMenu.style.marginLeft="58%";
//     this.burgerMenu.style.transition="0.3s";
//     this.panel.style.transition="0.5s";
//     this.menu = false;
//   }
// }


// if (window.matchMedia("(min-width: 600px)").matches) {
//   console.log('je suis grand')
// } else {
//   /* L'affichage est inférieur à 600px de large */
//   console.log('je suis petit')

// }
