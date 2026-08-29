```javascript
/* ==================================================
   MENU MOBILE
================================================== */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});


/* ==================================================
   TUTUP MENU SETELAH LINK DIKLIK
================================================== */

const navLinks =
    document.querySelectorAll(".nav-menu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

    });

});


/* ==================================================
   ANIMASI SCROLL
================================================== */

const hiddenElements =
    document.querySelectorAll(".hidden");

const observer =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },
        {
            threshold: 0.15
        }
    );


hiddenElements.forEach(function (element) {

    observer.observe(element);

});
```
