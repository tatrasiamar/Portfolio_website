let menuIcon = document.querySelector('#menu-icon'); // Corrected variable name
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

/*............. scroll section active link ...............*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => { // Corrected variable name
                link.classList.remove('active'); // Corrected method name
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /*............. sticky navbar ...............*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*............. remove Toggle icon and navbar ...............*/
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

/*............. Scroll reveal ...............*/
ScrollReveal({
    distance: '80px',
    duration: 200,
    delay: 200, // Corrected property name
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' }); // Corrected selector
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' }); // Corrected selector
ScrollReveal().reveal('.about-img, .home-content h1', { origin: 'left' }); // Corrected selector
ScrollReveal().reveal('.about-content, .home-content p', { origin: 'right' }); // Corrected selector

/*............. Typed js ...............*/
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Web Designer', 'FullStack Developer'], // Corrected property name
    typeSpeed: 70, // Corrected property name
    backSpeed: 70, // Corrected property name
    backDelay: 1000, // Corrected property name
    loop: true,
});
