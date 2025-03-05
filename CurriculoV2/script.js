document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 50, // Ajuste para compensar a navbar fixa
            behavior: 'smooth'
        });
    });
});
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = "rgba(0, 0, 0, 0.9)";
    } else {
        navbar.style.background = "rgba(0, 0, 0, 0.8)";
    }
});
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.navbar ul').classList.toggle('active');
});
document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".projetos-container");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    nextBtn.addEventListener("click", () => {
        container.scrollBy({ left: 300, behavior: "smooth" });
    });

    prevBtn.addEventListener("click", () => {
        container.scrollBy({ left: -300, behavior: "smooth" });
    });
});
