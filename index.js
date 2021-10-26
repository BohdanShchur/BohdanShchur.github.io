const burgerBtn = document.querySelector(".burger");
const dropDownMenu = document.querySelector(".menu-items");
const img =  document.querySelector(".img-form");


const burgerDropDown = () => {
    // dropDownMenu.className = dropDownMenu.className === "menu-items" ? " responsive" : "menu-items";
    if(dropDownMenu.className === "menu-items") {
        dropDownMenu.className += " responsive";
    } else {
        dropDownMenu.className = "menu-items";
    }
}

const addImageForm = () => {

}

const input = img.childNodes[1];
burgerBtn.addEventListener('click', burgerDropDown);