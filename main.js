const load = document.querySelector("#preloader");
function myFunction() {
    load.style.display = "none";
};

// Hamburger 
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

$('.owl-carousel').owlCarousel({
    items: 9,
    loop: true,
    margin: 50,
    nav: false,
    autoplay: true,
    dots: false,
    responsive: {
        0: {
            items: 3
        },
        900: {
            items: 6
        },
        1000: {
            items: 9
        }
    }
});
