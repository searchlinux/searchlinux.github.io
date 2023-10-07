// smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: "smooth",
            });
        }
    });
});

// section hover effect
document.querySelectorAll("section").forEach((section) => {
    section.addEventListener("mouseenter", function () {
        this.style.boxShadow = "0 0 15px rgba(0, 0, 0, 0.3)";
        this.style.transform = "scale(1.01)";
    });

    section.addEventListener("mouseleave", function () {
        this.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.1)";
        this.style.transform = "scale(1)";
    });
});

// add parallax effect to the header image
const header = document.querySelector("header");
const headerImage = document.querySelector("header img");

window.addEventListener("scroll", () => {
    const scrollValue = window.scrollY;
    headerImage.style.transform = `translateY(-${scrollValue * 0.5}px)`;
});