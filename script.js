// Side-dot Navigation logic
const sections = document.querySelectorAll("section");
const navDots = document.querySelectorAll(".dot");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }
    });

    navDots.forEach((dot) => {
        dot.classList.remove("active");
        if (dot.getAttribute("href").includes(current)) {
            dot.classList.add("active");
        }
    });
});

// Accordion logic
const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item) => {
    const header = item.querySelector(".accordion-header");
    header.addEventListener("click", () => {
        const isActive = item.classList.contains("active");

        // Đóng các item khác
        accordionItems.forEach((i) => i.classList.remove("active"));

        // Mở item hiện tại nếu nó chưa mở
        if (!isActive) {
            item.classList.add("active");
        }
    });
});

// Horizontal scroll mouse wheel support (Cuộn mượt - Smooth Scroll)
const scrollContainer = document.querySelector(".horizontal-scroll-container");

if (scrollContainer) {
    scrollContainer.addEventListener(
        "wheel",
        (evt) => {
            const isAtEnd =
                scrollContainer.scrollLeft + scrollContainer.clientWidth >=
                scrollContainer.scrollWidth - 1;
            const isAtStart = scrollContainer.scrollLeft === 0;

            if (evt.deltaY > 0 && !isAtEnd) {
                evt.preventDefault();
                // Đổi 'auto' thành 'smooth' và nhân 2 lực cuộn để trượt lướt hơn
                scrollContainer.scrollBy({
                    left: evt.deltaY * 2,
                    behavior: "smooth",
                });
            } else if (evt.deltaY < 0 && !isAtStart) {
                evt.preventDefault();
                // Đổi 'auto' thành 'smooth'
                scrollContainer.scrollBy({
                    left: evt.deltaY * 2,
                    behavior: "smooth",
                });
            }
        },
        { passive: false },
    );
}
