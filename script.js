```javascript
// ==============================
// MENU MOBILE
// ==============================

function toggleMenu() {

    const menu =
        document.querySelector(".nav-menu");

    menu.classList.toggle("active");

}


// ==============================
// MENU OTOMATIS TERTUTUP
// ==============================

const links =
    document.querySelectorAll(".nav-menu a");

links.forEach(function(link) {

    link.addEventListener("click", function() {

        document
            .querySelector(".nav-menu")
            .classList
            .remove("active");

    });

});


// ==============================
// ANIMASI SAAT SCROLL
// ==============================

const cards =
    document.querySelectorAll(
        ".card, .tempat-card, .facility, .dusun, .contact-card"
    );


const observer =
    new IntersectionObserver(
        function(entries) {

            entries.forEach(function(entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },
        {
            threshold: 0.15
        }
    );


cards.forEach(function(card) {

    card.classList.add("hidden");

    observer.observe(card);

});
```
