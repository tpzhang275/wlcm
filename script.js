// script.js
let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images img');
const totalImages = images.length;

document.querySelector('.next-btn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
});

document.querySelector('.prev-btn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateCarousel();
});

function updateCarousel() {
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

// 自动播放功能
let autoPlay = setInterval(() => {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
}, 3000);

document.querySelector('.prev-btn').addEventListener('click', resetAutoPlay);
document.querySelector('.next-btn').addEventListener('click', resetAutoPlay);

function resetAutoPlay() {
    clearInterval(autoPlay);
    autoPlay = setInterval(() => {
        currentIndex = (currentIndex + 1) % totalImages;
        updateCarousel();
    }, 3000);
}
