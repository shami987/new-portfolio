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


//Toggle dark mode
const toggleBtn =  document.getElementById("dark-mode-toggle");
const body = document.body;

  // Load saved mode
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
        toggleBtn.textContent = "☀️";
    }
     toggleBtn.addEventListener("click", () => {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            toggleBtn.textContent = "☀️"; // light mode icon
            localStorage.setItem("theme", "dark");
        } else {
            toggleBtn.textContent = "🌙"; // dark mode icon
            localStorage.setItem("theme", "light");
        }
    });

    // Sending messages to email
document.getElementById("contact-form").addEventListener("submit", function(e){
    e.preventDefault(); // prevent page refresh

    let parms = {
        name : document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    }

    emailjs.send("service_dgooe5c", "template_ev93dgl", parms)
    .then(() => {
        alert("Email sent successfully!");
        document.getElementById("contact-form").reset();
    })
    .catch((err) => {
        alert("Failed to send email:\n" + JSON.stringify(err));
    });
});

//Codes for filtering
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        // Remove active class from all buttons
        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const filter = btn.dataset.filter; // read the filter category

        projectCards.forEach(card => {
            if(filter === "all" || card.dataset.category === filter) {
                card.style.display = "block"; // show
            } else {
                card.style.display = "none"; // hide
            }
        });
    });
});