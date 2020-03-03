let header = document.querySelector("header"),
    container = document.querySelector(".container"),
    section = document.querySelector("section h3");

window.addEventListener("scroll", function() {
    const distance = window.scrollY;
    header.style.transform = `translateY(${distance * 1}px)`;
    container.style.transform = `translateY(${distance * 0.3}px)`;
    setTimeout(() => {
        section.classList.add("animate-me");
    }, 400);
});