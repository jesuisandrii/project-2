document.addEventListener("DOMContentLoaded", () => {
    const sidebarLinks = document.querySelectorAll(".sidebar-nav a, .nav a");
    const overlay = document.querySelector(".overlay");
    const sidebar = document.querySelector(".sidebar");

    sidebarLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            const targetId = link.getAttribute("href").substring(1);

            if (targetId === "home") {
                event.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            }
        });
    });

    sidebarLinks.forEach(link => {
        link.addEventListener("click", () => {
            sidebar.classList.remove("open");
            overlay.classList.remove("show");
        });
    });
});


const links = document.querySelectorAll(".nav a");

links.forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);

        targetSection.scrollIntoView({ behavior: "smooth" });
    })
})

// document.addEventListener("scroll", () => {
//     const elements = document.querySelectorAll(".scroll-fade");

//     elements.forEach(element => {
//         const rect = element.getBoundingClientRect();
//         if (rect.top < window.innerHeight && rect.bottom > 0) {
//             element.classList.add("visible");
//         }
//     });
// });



    const sliderContainer = document.querySelector(".slider-container");
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.querySelector(".slider-btn.prev");
    const nextBtn = document.querySelector(".slider-btn.next");

    let currentIndex = 0;
    const slideInterval = 3000;
    let autoScroll;

    const updateSlider = () => {
        sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    };

    const goToNextSlide = () => {
        currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
        updateSlider();
    };

    const startAutoScroll = () => {
        autoScroll = setInterval(goToNextSlide, slideInterval);
    };

    const stopAutoScroll = () => {
        clearInterval(autoScroll);
    };

    prevBtn.addEventListener("click", () => {
        stopAutoScroll(); // Зупиняємо автопрокрутку на час дії користувача
        currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
        updateSlider();
        startAutoScroll(); 
    });

    nextBtn.addEventListener("click", () => {
        stopAutoScroll();
        goToNextSlide();
        startAutoScroll();
    });

    sliderContainer.addEventListener("mouseenter", stopAutoScroll);
    sliderContainer.addEventListener("mouseleave", startAutoScroll);

    startAutoScroll();


    const burgerMenu = document.querySelector(".burger-menu");
    const sidebar = document.querySelector(".sidebar");
    const closeMenu = document.querySelector(".close-menu");
    const overlay = document.querySelector(".overlay");
    const sidebarLinks = document.querySelectorAll(".sidebar-nav a");

    burgerMenu.addEventListener("click", () => {
        sidebar.classList.add("open");
        overlay.classList.add("show");
    });

    closeMenu.addEventListener("click", () => {
        sidebar.classList.remove("open");
        overlay.classList.remove("show");
    });

    overlay.addEventListener("click", () => {
        sidebar.classList.remove("open");
        overlay.classList.remove("show");
    });

    sidebarLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            // Закриваємо меню
            sidebar.classList.remove("open");
            overlay.classList.remove("show");

            // Плавне прокручування
            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });




