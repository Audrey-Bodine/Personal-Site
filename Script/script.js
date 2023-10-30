const navEl = document.querySelector('.navbar');
const cover = document.querySelector(".hero");

const coverOptions = {
    rootMargin: "-100px 0px 0px 0px"
};

const coverObserver = new IntersectionObserver
(function(
    entries, coverObserver
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            navEl.classList.add("navbar-scrolled");
        } else {
            navEl.classList.remove("navbar-scrolled");
        }
    });
},
coverOptions);

coverObserver.observe(cover);