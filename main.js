import BackToTop from "./js/backtotop.js";

const BackToTopBtn = document.querySelector("#back-to-top");
BackToTopBtn && new BackToTop(BackToTopBtn,{
    // Рубеж в пикселях от верха экрана, при котором срабатывает появление и исчизновение кнопки
    breakpoint: 200,
    // Активный класс который переключаеться на рубеже (breakpoint)
    activeClass: "is-active",
});
