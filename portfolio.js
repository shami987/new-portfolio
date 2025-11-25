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