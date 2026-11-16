function setupBurgerMenu() {

    const burgerMenu = document.querySelector(".burger-menu");
    const navigation = document.querySelector("#primary-navigation");

    if (!burgerMenu || !navigation) {
        console.log("Burgermenu eller navigation blev ikke fundet");
        return;
    }

    burgerMenu.addEventListener("click", function () {

        navigation.classList.toggle("active");
        document.querySelector("header").classList.toggle("menu-open");

        const isOpen = navigation.classList.contains("active");

        burgerMenu.setAttribute("aria-expanded", isOpen);
        burgerMenu.setAttribute("aria-label", isOpen ? "Luk menu" : "Åbn menu");

    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setupBurgerMenu);
} else {
    setupBurgerMenu();
}