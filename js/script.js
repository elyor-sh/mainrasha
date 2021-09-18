"use strict";

const inputs = document.querySelectorAll(".vlogers__select-input");
const options = document.querySelectorAll(".vlogers__option");
const optionsItem = document.querySelectorAll(".vlogers__option-item");
let open = false;
document.body.addEventListener("click", (e) => {
  if (e.target.dataset.open !== "open" && !e.target.classList.contains('disabled')) {
    document.querySelectorAll('[data-dropdown="dropdown"]').forEach((item) => {
      item.classList.remove("_active");
    });
  }else if(e.target.classList.contains('disabled')) {
    e.target.parentNode.parentNode.classList.add('_active')
  } else {
      open = !open
    document.querySelectorAll('[data-dropdown="dropdown"]').forEach((item) => {
      item.classList.remove("_active");
      if (item.dataset.target === e.target.id && open) {
        item.classList.add("_active");
      }else {
        item.classList.remove("_active");
      }
    });
  }
});


options.forEach((option) => {
    option.addEventListener("click", (e) => {
       
          inputs.forEach((item) => {
              if(!e.target.classList.contains('disabled')){
              if(item.id === option.dataset.target){
                  item.value = e.target.innerHTML;
                  item.dataset.value = e.target.dataset.value;
                  open = false
              }}else{
                  option.classList.add('_active');
              }
          });
    });
  });
