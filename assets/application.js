const burgerMenu = document.querySelector(".burger-menu__strips");
const mobileMenuNav = document.querySelector(".mobile-menu__nav");
const menuOverlay = document.querySelector(".menu-overlay");
const mobileMenuNavLi = document.querySelectorAll(".mobile-menu__nav");
const burgerMenuBtn = document.querySelector(".burger-menu");

function closeMobileMenu() {
  burgerMenu.classList.remove("burger-menu-active");
  mobileMenuNav.classList.remove("mobile-menu__nav-active");
  document.body.classList.remove("overflow-hidden");
  menuOverlay.classList.remove("menu-overlay-active");
}

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("burger-menu-active");
  mobileMenuNav.classList.toggle("mobile-menu__nav-active");
  document.body.classList.toggle("overflow-hidden");
  menuOverlay.classList.toggle("menu-overlay-active");

  if (burgerMenuBtn.classList.contains("burger-menu-button-act")) {
    function removeActClass() {
      return burgerMenuBtn.classList.remove("burger-menu-button-act");
    }
  } else {
    burgerMenuBtn.classList.add("burger-menu-button-act");
  }
});

menuOverlay.addEventListener("click", closeMobileMenu);
mobileMenuNavLi.forEach((item) => {
  item.addEventListener("click", closeMobileMenu);
});

//collection hide titles
const collectionTitles = document.querySelectorAll(".collection__product-item");

collectionTitles.forEach((item) => {
  if (item.previousElementSibling) {
    if (
      item.children[0].textContent ==
      item.previousElementSibling.children[0].textContent
    ) {
    } else {
      item.children[0].classList.add("title-visible");
    }
  } else {
    item.children[0].classList.add("title-visible");
  }
});

//filters

let siteUrl = window.location.href;
const featuredCollections = document.querySelector('.collection__row');
if(siteUrl.includes('filter.p.m.opkl')){
    featuredCollections.style.display = 'none';
}

const checkBoxes = document.querySelectorAll('.filter__checkbox');

checkBoxes.forEach(item => {
    item.addEventListener('click', () => {
        document.querySelector('.filter__apply-button').click();
    })
});





function personFiltr() {
    const personenFilterItems = document.querySelector('#person');
    if(!siteUrl.includes(`filter.p.m.opkl`)){
        siteUrl = siteUrl + '?';
    };
    if(siteUrl.includes(`&filter.p.m.opkl.persons=`)){
        window.location.href = siteUrl.split('persons=')[0] + `persons=${personenFilterItems.value}`;
    } else{
        window.location.href = siteUrl + `&filter.p.m.opkl.persons=${personenFilterItems.value}`;
    }
}

function levelFiltr() {
    const levelFilterItems = document.querySelector('#level');
    if(!siteUrl.includes(`filter.p.m.opkl`)){
        siteUrl = siteUrl + '?';
    };

    if(siteUrl.includes(`&filter.p.m.opkl.level=`)){
        window.location.href = siteUrl.split('level=')[0] + `level=${levelFilterItems.value}`;
        levelFilterItems.selected = true;
    } else{
        window.location.href = siteUrl + `&filter.p.m.opkl.level=${levelFilterItems.value}`;
    };

    
}

if(siteUrl.includes('Beginner')){
    document.getElementById('level').value = 'Beginner';
} else if(siteUrl.includes('Medium')){
    document.getElementById('level').value = 'Medium';
} else if(siteUrl.includes('Medium')){
    document.getElementById('level').value = 'Medium';
}

for(let i = 0; i < 13; i++){
    if(siteUrl.includes(`persons=${i}`)){
        document.getElementById('person').value = i;
    }
}