// Select elements
const navLinks = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo');
const sections = document.querySelectorAll('section');
const barsBox = document.querySelector('.bars-box');
const header = document.querySelector('header');
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('header nav');
const resumeBtns = document.querySelectorAll('.resume-btn');
const resumeDetails = document.querySelectorAll('.resume-detail');
const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');
const imgSlide = document.querySelector('.portfolio-photos .img-slide');
const portfolioDetails = document.querySelectorAll('.portfolio-detail');

let portfolioIndex = 0;

// Toggle mobile menu
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

/**
 * Resets active states for header, bars animation, navigation links, and sections.
 */
const resetActiveStates = () => {
    header.classList.remove('active');
    barsBox.classList.remove('active');

    setTimeout(() => {
        header.classList.add('active');
        barsBox.classList.add('active');
    }, 1100);

    navLinks.forEach(link => link.classList.remove('active'));
    sections.forEach(section => section.classList.remove('active'));
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/**
 * Handles navigation click event.
 * @param {number} index - The index of the navigation link clicked.
 */
const handleNavClick = (index) => {
    resetActiveStates();
    navLinks[index].classList.add('active');

    if (sections[index]) {
        setTimeout(() => sections[index].classList.add('active'), 1100);
    }
};

// Attach click event to navigation links
navLinks.forEach((link, index) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        if (!link.classList.contains('active')) handleNavClick(index);
    });
});

// Handle logo click event (navigates to the first section)
logoLink.addEventListener('click', (event) => {
    event.preventDefault();
    handleNavClick(0);
});

/**
 * Toggles resume section details.
 */
resumeBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        resumeBtns.forEach(button => button.classList.remove('active'));
        resumeDetails.forEach(detail => detail.classList.remove('active'));

        btn.classList.add('active');
        resumeDetails[index].classList.add('active');
    });
});

/**
 * Updates the portfolio section (image slide and details).
 */
const updatePortfolio = () => {
    imgSlide.style.transform = `translateX(calc(${portfolioIndex * -100}% - ${portfolioIndex * 2}rem))`;

    portfolioDetails.forEach(detail => detail.classList.remove('active'));
    portfolioDetails[portfolioIndex].classList.add('active');

    arrowLeft.classList.toggle('disabled', portfolioIndex === 0);
    arrowRight.classList.toggle('disabled', portfolioIndex === portfolioDetails.length - 1);
};

// Handle portfolio navigation
arrowRight.addEventListener('click', () => {
    if (portfolioIndex < portfolioDetails.length - 1) {
        portfolioIndex++;
        updatePortfolio();
    }
});

arrowLeft.addEventListener('click', () => {
    if (portfolioIndex > 0) {
        portfolioIndex--;
        updatePortfolio();
    }
});

// Initialize portfolio on page load
updatePortfolio();
