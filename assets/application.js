//mobile menu
const burgerMenu = document.querySelector(".burger-menu__strips");
const mobileMenuNav = document.querySelector(".mobile-menu__nav");
const menuOverlay = document.querySelector(".menu-overlay");
const mobileMenuNavLi = document.querySelectorAll(".mobile-menu__nav li");

burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("active");
    mobileMenuNav.classList.toggle("active");
    document.body.classList.toggle("overflow-hidden");
    menuOverlay.classList.toggle("active");
});

const closeMobileMenu = () => {
    burgerMenu.classList.remove("active");
    mobileMenuNav.classList.remove("active");
    document.body.classList.remove("overflow-hidden");
    menuOverlay.classList.remove("active");

}

menuOverlay.addEventListener("click", closeMobileMenu);
mobileMenuNavLi.forEach((item) => {
    item.addEventListener("click", closeMobileMenu);
});

//collection hide titles
const collectionTitles = document.querySelectorAll(".collection__product-item");

collectionTitles.forEach((item) => {
    if (item.previousElementSibling) {
        if (item.children[0].textContent != item.previousElementSibling.children[0].textContent) {
            item.children[0].classList.add("title-visible");
        }
    } else {
        item.children[0].classList.add("title-visible");
    }
});

//filters

let siteUrl = window.location.href;
const featuredCollections = document.querySelector('.collection__row');
const collectionAll = document.querySelector('.collection__all');
const checkBoxes = document.querySelectorAll('.filter__checkbox');
const levelFilterItems = document.querySelector('#level');
const levelCheckboxes = document.getElementsByName("filter.p.m.opkl.level");
const personenFilterItems = document.querySelector('#person');
const personcheckBoxes = document.getElementsByName("filter.p.m.opkl.persons");
let personOption = '<option>—</option>';

checkBoxes.forEach(item => {
    item.addEventListener('click', () => {
        document.querySelector('.filter__apply-button').classList.add('active');
    })
});

if (personcheckBoxes) {
    personcheckBoxes.forEach(item => {
        personOption = personOption + `<option value="${item.value}">${item.value}</option>`
    });

    if (personenFilterItems) {
        personenFilterItems.innerHTML = personOption;
    }
}

const personFiltr = () => {
    personcheckBoxes.forEach(item => {
        if(item.value == personenFilterItems.value){
            item.checked = true;
        }
        else if (item.value != personenFilterItems.value) {
            item.checked = false;
        }
    });
  
    personenFilterItems.addEventListener('click', () => {
        document.querySelector('.filter__apply-button').classList.add('active');
    });
}

const levelFiltr = () => {
    levelCheckboxes.forEach(item => {
        if (item.value == levelFilterItems.value) {
            item.checked = true;
        }
        else if(item.value != levelFilterItems.value) {
            item.checked = false;
        }
    });
   
    levelFilterItems.addEventListener("click", () => {
        document.querySelector(".filter__apply-button").classList.add("active");
    })
}

levelCheckboxes.forEach(item => {
    if (siteUrl.includes(`level=${item.value}`)) {
        document.getElementById("level").value = item.value;
    } 
    else if (item.disabled) {
        document.querySelectorAll("#level option").forEach(child => {
            if (child.value == item.value) {
                child.disabled = true;
                child.style.color = "rgb(216 212 212)";
            }
        });
    }
});

personcheckBoxes.forEach(item => {
    if (siteUrl.includes(`persons=${item.value}`)) {
        document.getElementById("person").value = item.value;
    } 
    else if ( item.disabled ) {
        document.querySelectorAll("#person option").forEach(child => {
            if (child.value == item.value) {
                child.disabled = true;
                child.style.color = "rgb(216 212 212)";
            }
        });
    }
});

const scrollToFilter = document.querySelector('#hero-title');
if (siteUrl.includes('filter.p.m.opkl')) {
    featuredCollections.style.display = 'none';
    collectionAll.style.display = 'block';
    window.addEventListener("load", () => {
        scrollToFilter.scrollIntoView({behavior: "smooth"});
    });
}

if (siteUrl.includes('?')) {
    window.addEventListener("load", () => {
        scrollToFilter.scrollIntoView({behavior: "smooth"});
    });
}