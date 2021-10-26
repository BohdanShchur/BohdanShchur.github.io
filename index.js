const burgerBtn = document.querySelector(".burger");
const dropDownMenu = document.querySelector(".menu-items");

const burgerDropDown = () => {
    if(dropDownMenu.className === "menu-items") {
        dropDownMenu.className += " responsive";
    } else {
        dropDownMenu.className = "menu-items";
    }
}

burgerBtn.addEventListener('click', burgerDropDown);