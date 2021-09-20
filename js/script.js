"use strict";

// scripts for customizing select

const inputs = document.querySelectorAll(".vlogers__select-input");
const options = document.querySelectorAll(".vlogers__option");
const optionsItem = document.querySelectorAll(".vlogers__option-item");
let open = false;
document.body.addEventListener("click", (e) => {
  if (
    e.target.dataset.open !== "open" &&
    !e.target.classList.contains("disabled")
  ) {
    document.querySelectorAll('[data-dropdown="dropdown"]').forEach((item) => {
      item.classList.remove("_active");
    });
  } else if (e.target.classList.contains("disabled")) {
    e.target.parentNode.parentNode.classList.add("_active");
  } else {
    open = !open;
    document.querySelectorAll('[data-dropdown="dropdown"]').forEach((item) => {
      item.classList.remove("_active");
      if (item.dataset.target === e.target.id && open) {
        item.classList.add("_active");
      } else {
        item.classList.remove("_active");
      }
    });
  }
});

options.forEach((option) => {
  option.addEventListener("click", (e) => {
    inputs.forEach((item) => {
      if (!e.target.classList.contains("disabled")) {
        if (item.id === option.dataset.target) {
          item.value = e.target.innerHTML;
          item.dataset.value = e.target.dataset.value;
          open = false;
        }
      } else {
        option.classList.add("_active");
      }
    });
  });
});

// scripts for responsive menu
const headerTop = document.querySelector(".header__top");
const nav = document.querySelector(".header__top-nav");
const languages = document.querySelector(".header__top-lang");
const burger = document.querySelector(".header__burger");

window.addEventListener('resize', (e)=> {
    addChild(window.innerWidth)
})

let windowInnerWidth = window.innerWidth;
addChild(windowInnerWidth);
function addChild(width) {
  if (width <= 768) {
    nav.appendChild(languages);
  }else{
      headerTop.appendChild(languages);
  }
}

if(burger){
    burger.addEventListener('click', () => {
        burger.classList.toggle('_openMenu')
        if(burger.classList.contains('_openMenu')){
            nav.classList.add("_open")
            document.body.classList.add('_lock')
        }else{
            nav.classList.remove("_open")
            document.body.classList.remove('_lock')
        }
    })
}

// add breadcrumbs
if(document.body.dataset.init === 'vloger'){
        let newBreadCrumb = document.createElement('li')
         newBreadCrumb.innerHTML = `<a href="/" class="header__lower-breadcrumbs__link">Максим Максимов</a>`
        document.querySelector('.header__lower-breadcrumbs').appendChild(newBreadCrumb)
}

// scripts for video customize

const play = document.querySelectorAll(".video__play")
const cover = document.querySelectorAll(".video__cover")
const videos = document.querySelectorAll(".videos__container")

if(videos.length > 0){
  for(let i = 0; i < videos.length; i++){
    videos[i].addEventListener('click', e => {
      if(e.target.classList.contains('video__play')){
        cover[i].classList.add('_remove')
        videos[i].classList.toggle('_play')   
      }
    })
  }
}

// slider

const slider = new Swiper('.others__slider', {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  spaceBetween: 10,
  breakpoints: {
    
    320: {
      slidesPerView: 1,
     
    },
    
    576: {
      slidesPerView: 2,
     
    },
   
    992: {
      slidesPerView: 3,
     
    },
    1298: {
      slidesPerView: 4,
     
    }
  }
})

//cursor

let cursor = document.querySelector('.cursor')
let cursor2 = document.querySelector('.cursor-2')
document.addEventListener("mousemove", e => {
  cursor.style.cssText =  cursor2.style.cssText = "left: " +e.clientX + "px; top: " + e.clientY + "px;"
})

let links = document.querySelectorAll('a')

for (let i = 0; i < links.length; i++){
  links[i].setAttribute("data-cursor", "true")
  links[i].addEventListener('mouseenter', e => {
    cursor.style.cssText = `width: 80px; height: 80px; border-width: 2px;`
  })
}

document.addEventListener("mousemove", e => {
  console.log(e.target);
  if(e.target.hasAttribute("data-cursor") || (e.target.closest("[data-cursor='true']"))){
    cursor.classList.add("_activeCursor")
  }else{
    cursor.classList.remove("_activeCursor")
  }
})




