// Navbar Active
(function() {
    const mainNavItems = document.querySelectorAll("#mainNav .nav-link");
    mainNavItems.forEach((item) => {
        item.addEventListener("click", function() {
            const currentActiveLink = document.querySelector("#mainNav .nav-link.active");
            const isClickedNavLinkActive = this.classList.contains("active");
            if (!isClickedNavLinkActive) {
                if (currentActiveLink) {
                    currentActiveLink.classList.remove("active");
                }
                this.classList.add("active");
            }
        });
    });

    const otherNavItems = document.querySelectorAll("#otherNav .nav-link");
    otherNavItems.forEach((item) => {
        item.addEventListener("click", function() {
            const currentActiveLink = document.querySelector("#otherNav .nav-link.active");
            const isClickedNavLinkActive = this.classList.contains("active");
            if (!isClickedNavLinkActive) {
                if (currentActiveLink) {
                    currentActiveLink.classList.remove("active");
                }
                this.classList.add("active");
            }
        });
    });
})();

//Resize
window.addEventListener("scroll",function (){
    const header = document.querySelector(".massiveNavBar");
    header.classList.toggle("resize-header",window.scrollY > 0)
})


// Progress Bar
let animationStarted = false;

function animateProgressBar() {
    const progressBarElements = document.querySelectorAll('.progressBar__item');
    progressBarElements.forEach(progressBar => {
        const counterElement = progressBar.querySelector('.progressBar__counter');
        const runElement = progressBar.querySelector('.progressBar__run');
        const counterValue = parseInt(counterElement.innerText);
        const progressBarWidth = progressBar.offsetWidth;
        const leftValue = window.getComputedStyle(counterElement).getPropertyValue('left');
        const runWidth = (counterValue / 100) * progressBarWidth;
        let currentCounterValue = 0;
        const intervalId = setInterval(() => {
            const increment = counterValue / (runWidth / 10);
            currentCounterValue += increment;
            if (currentCounterValue >= counterValue) {
                currentCounterValue = counterValue;
                clearInterval(intervalId);
            }
            runElement.style.width = `${currentCounterValue}%`;
            counterElement.innerText = `${Math.floor(currentCounterValue)}%`;
            counterElement.style.left = `calc(100% + ${leftValue})`;
        }, 30);
        runElement.style.transition = 'width 0.5s';
    });
}

function animateProgressBarWhenVisible() {
    const progressBarElements = document.querySelectorAll('.progressBar__item');

    function startAnimation() {
        if (!animationStarted) {
            animateProgressBar();
            animationStarted = true;
        }
    }

    function isElementInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }

    function handleScroll() {
        progressBarElements.forEach(progressBar => {
            if (isElementInViewport(progressBar)) {
                startAnimation();
            }
        });
    }

    document.addEventListener('scroll', handleScroll);
}

document.addEventListener('DOMContentLoaded', animateProgressBarWhenVisible);
//Magnific Popup
$(document).ready(function() {
    //Image
    $('.popup-image').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-img-mobile',
        image: {
            verticalFit: true
        },
    });
    //Vimeo
    $('.popup-vimeo').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });
});
//Isotope Control
let iso = new Isotope(".showcase__content", {
    itemSelector: ".showcase__item",
    // layoutMode: "fitRows"
});
let filtersElement = document.querySelector(".filter-nav");
filtersElement.addEventListener("click", function (event) {

    if (!matchesSelector(event.target, "a")) {
        return;
    }
    let filterValue = event.target.getAttribute("data-filter");
    // use matching filter function
    iso.arrange({ filter: filterValue });
});
// Count Up Control
$(".number__counter").countUp();
//Owl Carousel
$(".feedback___carousel").owlCarousel({
    loop: Infinity,
    margin: 0,
    nav: false,
    autoplay: true,
    smartSpeed: 800,
    responsive: {
        0: {
            items: 1
        },
        500: {
            items: 2
        },
        784: {
            items: 3
        },
        1215: {
            items: 1
        }
    }
});
$(".partners___carousel").owlCarousel({
    loop: false,
    margin: 0,
    nav: false,
    autoplay: true,
    // autoplayTimeout: 3000,
    smartSpeed: 800,
    responsive: {
        0: {
            items: 1
        },
        500: {
            items: 2
        },
        784: {
            items: 3
        },
        1215: {
            items: 6
        }
    }
});