
const burgerMenu = document.querySelector('.burger-menu__strips');
const mobileMenuNav = document.querySelector('.mobile-menu__nav');
const menuOverlay = document.querySelector('.menu-overlay');
const mobileMenuNavLi = document.querySelectorAll('.mobile-menu__nav');
const burgerMenuBtn = document.querySelector(".burger-menu");

function closeMobileMenu() {
  burgerMenu.classList.remove("burger-menu-active");
  mobileMenuNav.classList.remove("mobile-menu__nav-active");
  document.body.classList.remove('overflow-hidden');
  menuOverlay.classList.remove("menu-overlay-active");
}

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle("burger-menu-active");
  mobileMenuNav.classList.toggle("mobile-menu__nav-active");
  document.body.classList.toggle('overflow-hidden');
  menuOverlay.classList.toggle("menu-overlay-active");

  if (burgerMenuBtn.classList.contains('burger-menu-button-act')) {
    function removeActClass() {
      return burgerMenuBtn.classList.remove("burger-menu-button-act")
    }
  } else {
    burgerMenuBtn.classList.add("burger-menu-button-act")
  }
})

menuOverlay.addEventListener('click', closeMobileMenu);
mobileMenuNavLi.forEach(item => {
  item.addEventListener('click', closeMobileMenu)
})



//collection hide titles
const collectionTitles = document.querySelectorAll('.collection__product-item');

collectionTitles.forEach( item => {
  if( item.previousElementSibling ){
    if( item.children[0].textContent == item.previousElementSibling.children[0].textContent ){

    } else{
      item.children[0].classList.add("title-visible")
    }
  } else{
    item.children[0].classList.add("title-visible")
  }
  
});