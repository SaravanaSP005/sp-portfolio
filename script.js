/* =====================================================
   MOBILE MENU
===================================================== */

const menuToggle =
    document.getElementById("menuToggle");

const navLinks =
    document.getElementById("navLinks");


menuToggle.addEventListener(
    "click",
    function () {

        navLinks.classList.toggle("open");

        const icon =
            menuToggle.querySelector("i");


        if (
            navLinks.classList.contains("open")
        ) {

            icon.classList.remove("fa-bars");

            icon.classList.add("fa-xmark");

        }
        else {

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        }

    }
);



/* =====================================================
   CLOSE MOBILE MENU
===================================================== */

document
    .querySelectorAll(".nav-links a")
    .forEach(function (link) {


        link.addEventListener(
            "click",
            function () {


                navLinks.classList.remove("open");


                const icon =
                    menuToggle.querySelector("i");


                icon.classList.remove("fa-xmark");

                icon.classList.add("fa-bars");


            }
        );


    });



/* =====================================================
   DARK / LIGHT MODE
===================================================== */

const themeToggle =
    document.getElementById("themeToggle");


const savedTheme =
    localStorage.getItem("theme");


if (savedTheme === "light") {

    document.body.classList.add("light");

    themeToggle.innerHTML =
        '<i class="fa-solid fa-moon"></i>';

}


themeToggle.addEventListener(
    "click",
    function () {


        document.body.classList.toggle("light");


        const isLight =
            document.body.classList.contains("light");


        localStorage.setItem(
            "theme",
            isLight ? "light" : "dark"
        );


        if (isLight) {

            themeToggle.innerHTML =
                '<i class="fa-solid fa-moon"></i>';

        }
        else {

            themeToggle.innerHTML =
                '<i class="fa-solid fa-sun"></i>';

        }


    }
);



/* =====================================================
   CURRENT YEAR
===================================================== */

document.getElementById("year").textContent =
    new Date().getFullYear();



/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections =
    document.querySelectorAll("section[id]");


const navItems =
    document.querySelectorAll(".nav-links a");


window.addEventListener(
    "scroll",
    function () {


        let current = "";


        sections.forEach(
            function (section) {


                const sectionTop =
                    section.offsetTop - 150;


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


            }
        );


        navItems.forEach(
            function (link) {


                link.classList.remove("active");


                if (
                    link.getAttribute("href") ===
                    "#" + current
                ) {

                    link.classList.add("active");

                }


            }
        );


    }
);