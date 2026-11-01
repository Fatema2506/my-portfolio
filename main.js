// ========================================
// TYPING ANIMATION
// ========================================

const typed = new Typed(".text", {

    strings: [

        "CSE Student",

        "Web Developer",

        "Programmer",

        "Tech Enthusiast"

    ],

    typeSpeed: 85,

    backSpeed: 55,

    backDelay: 1100,

    loop: true

});



// ========================================
// MOBILE MENU
// ========================================

const menuBtn =
    document.getElementById("menuBtn");

const navbar =
    document.getElementById("navbar");


menuBtn.addEventListener("click", function () {

    navbar.classList.toggle("open");


    const icon =
        menuBtn.querySelector("i");


    if (navbar.classList.contains("open")) {

        icon.classList.remove("bx-menu");

        icon.classList.add("bx-x");

    }

    else {

        icon.classList.remove("bx-x");

        icon.classList.add("bx-menu");

    }

});



// ========================================
// CLOSE MOBILE MENU
// ========================================

document
    .querySelectorAll(".navbar a")
    .forEach(function (link) {

        link.addEventListener("click", function () {

            navbar.classList.remove("open");


            const icon =
                menuBtn.querySelector("i");


            icon.classList.remove("bx-x");

            icon.classList.add("bx-menu");

        });

    });



// ========================================
// ACTIVE NAVIGATION
// ========================================

const sections =
    document.querySelectorAll("section[id]");


const navLinks =
    document.querySelectorAll(".navbar a");


window.addEventListener("scroll", function () {

    let current = "";


    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 140;

        const sectionHeight =
            section.offsetHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            current =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");


        if (
            link.getAttribute("href")
            === "#" + current
        ) {

            link.classList.add("active");

        }

    });

});



// ========================================
// FOOTER YEAR
// ========================================

document.getElementById("year")
    .textContent =
    new Date().getFullYear();



// ========================================
// CONTACT FORM DEMO
// ========================================

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const name =
            document.getElementById("name")
                .value
                .trim();


        alert(

            "Thank you, " +
            name +
            "! Your message has been received."

        );


        contactForm.reset();

    }
);