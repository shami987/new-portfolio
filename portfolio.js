const menuBtn =document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');
const openIcon = document.getElementById('open-icon');
const closeIcon = document.getElementById('close-icon');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    //Toggle icons
    if (navLinks.classList.contains("active")){
        openIcon.style.display = "none";
        closeIcon.style.display = "block";
    } else {
        openIcon.style.display = "block";
        closeIcon.style.display = "none";
    }
});

function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach((el) => {
        const windowHeight =  window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
}
window.addEventListener("scroll", reveal);

//Dark mode toggle
const toggleBtn = document.getElementById('dark-mode-toggle');
const body = document.body;

//Load saved preference
if(localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
}
//Toggle dark mode
toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    //save preference
    if(body.classList.contains('dark-mode')){
        localStorage.setItem('darkMode', 'enabled');

    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
});
