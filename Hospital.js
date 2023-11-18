//Counter design
document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
            current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration / range)),
            timer = setInterval(() => {
                current += increment;
                obj.textContent = current;
                if (current == end) {
                    clearInterval(timer);
                }
            }, step)
    }
    counter("count1", 0, 1287, 3000);
    counter("count2", 100, 2786, 2500);
    counter("count3", 0, 1440, 3000);
    counter("count4", 0, 3110, 3000);

});

// Initialize Swiper

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    loop: true,
    autoplaySpeed: 3000,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    autoplay: {
        delay: 2000,
        disableOnInteraction: false
    },
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});