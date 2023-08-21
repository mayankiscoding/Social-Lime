window.addEventListener('scroll', function () {
    var nav = document.querySelector('.nav');
    nav.classList.toggle('scrolled', window.scrollY > 0);
});




document.addEventListener('DOMContentLoaded', function () {
    let textContainers = document.querySelectorAll('.text-container');

    textContainers.forEach((element, index) => {
        let firstText = element.querySelector('.parallax-text:first-child');
        let secondText = element.querySelector('.parallax-text:last-child');

        gsap.set([firstText, secondText], { x: 0 }); // Reset initial position

        gsap.registerPlugin(ScrollTrigger);

        gsap.to([firstText, secondText], {
            scrollTrigger: {
                trigger: element,
                start: "top bottom", // Start when the top of the element hits the bottom of the viewport
                end: "bottom top",   // End when the bottom of the element hits the top of the viewport
                scrub: true
            },
            x: function (i, target) {
                // Calculate the x position based on the scroll progress
                return i === 0 ? '-54vw' : '32vw';
            },
            ease: "none"
        });
    });
});



