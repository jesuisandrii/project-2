document.addEventListener("DOMContentLoaded", () => {
    const sidebarLinks = document.querySelectorAll(".sidebar-nav a, .nav a"); // Посилання в меню
    const overlay = document.querySelector(".overlay");
    const sidebar = document.querySelector(".sidebar");

    // Прокручуємо на початок при переході до #home
    sidebarLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            const targetId = link.getAttribute("href").substring(1);

            if (targetId === "home") {
                event.preventDefault(); // Забороняємо стандартний перехід
                window.scrollTo({
                    top: 0,
                    behavior: "smooth" // Плавний скрол
                });
            }
        });
    });

    // Додатково закриваємо меню та overlay
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
    const slideInterval = 3000; // Час між змінами слайдів (в мілісекундах)
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

    // Кнопки навігації
    prevBtn.addEventListener("click", () => {
        stopAutoScroll(); // Зупиняємо автопрокрутку на час дії користувача
        currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
        updateSlider();
        startAutoScroll(); // Перезапускаємо автопрокрутку
    });

    nextBtn.addEventListener("click", () => {
        stopAutoScroll();
        goToNextSlide();
        startAutoScroll();
    });

    // Додатковий функціонал: пауза при наведенні миші
    sliderContainer.addEventListener("mouseenter", stopAutoScroll);
    sliderContainer.addEventListener("mouseleave", startAutoScroll);

    // Запускаємо автопрокрутку при завантаженні сторінки
    startAutoScroll();


    const burgerMenu = document.querySelector(".burger-menu");
    const sidebar = document.querySelector(".sidebar");
    const closeMenu = document.querySelector(".close-menu");
    const overlay = document.querySelector(".overlay");
    const sidebarLinks = document.querySelectorAll(".sidebar-nav a");

    // Відкриття панелі
    burgerMenu.addEventListener("click", () => {
        sidebar.classList.add("open");
        overlay.classList.add("show");
    });

    // Закриття панелі
    closeMenu.addEventListener("click", () => {
        sidebar.classList.remove("open");
        overlay.classList.remove("show");
    });

    // Закриття панелі при натисканні на затемнення
    overlay.addEventListener("click", () => {
        sidebar.classList.remove("open");
        overlay.classList.remove("show");
    });

    // Закриття панелі та плавне прокручування до секції при натисканні на посилання
    sidebarLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault(); // Запобігаємо стандартному переходу
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            // Закриваємо меню
            sidebar.classList.remove("open");
            overlay.classList.remove("show");

            // Плавне прокручування
            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start" // Прокручуємо до початку секції
            });
        });
    });




