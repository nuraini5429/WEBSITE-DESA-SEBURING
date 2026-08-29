```javascript
function toggleMenu() {

    const menu =
        document.querySelector(".nav-menu");

    menu.classList.toggle("active");

}


const links =
    document.querySelectorAll(".nav-menu a");


links.forEach(function(link) {

    link.addEventListener("click", function() {

        document
            .querySelector(".nav-menu")
            .classList.remove("active");

    });

});
```
