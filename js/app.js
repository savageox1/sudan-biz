// toggle menu
let menuBtn = document.querySelector(".bars");
let navbar = document.querySelector(".links");
menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("show-menu");
});

// show sticky header & scroll to top button
window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
        document.querySelector("header").classList.add("header-active");
        scrollTopBtn.classList.add("show");
    } else {
        document.querySelector("header").classList.remove("header-active");
        scrollTopBtn.classList.remove("show");
    }
});

// scroll to top button
let scrollTopBtn = document.createElement("button");
scrollTopBtn.innerHTML = '<i class="ri-arrow-up-line"></i>';
scrollTopBtn.className = "scroll-top-btn";
document.body.appendChild(scrollTopBtn);

// scroll to top event
scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
    });
});

// active link on scroll where scroll
let navLinks = document.querySelectorAll(".links a");
let sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    let currentSection = "";
    let scrollPos = window.scrollY + 100;

    sections.forEach(section => {
        if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
            currentSection = section.id;
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }
    });
});

// brand swiper
var brandSwiper = new Swiper(".brand-swiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    breakpoints: {
        1200: {
            slidesPerView: 3,
        },
        900: {
            slidesPerView: 2,
        },
        300: {
            slidesPerView: 1,
        }
    }
});

// testimonial swiper
var testimonialSwiper = new Swiper(".test-swiper", {
    slidesPerView: 3.4,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500,
    },
    breakpoints: {
        1200: {
            slidesPerView: 3,
        },
        900: {
            slidesPerView: 2,
        },
        300: {
            slidesPerView: 1,
        }
    }
});

// footer year
let year = new Date().getFullYear();
let footerYear = document.querySelector(".copyright").lastElementChild;
footerYear.innerHTML = year;