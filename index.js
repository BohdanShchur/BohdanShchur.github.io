const burgerBtn = document.querySelector(".burger");
const dropDownMenu = document.querySelector(".menu-items");


const burgerDropDown = () => {
    dropDownMenu.style.display = dropDownMenu.style.display === "block" ? "none" : "block";
}

burgerBtn.addEventListener('click', burgerDropDown, false);