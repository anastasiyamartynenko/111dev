var canvas = document.getElementById('growthChart');
var context = canvas.getContext('2d');

var dataPoints1 = [
    { x: 0, y: 0 },
    { x: 100, y: 5 },
    { x: 200, y: 20 },
    { x: 300, y: 50 },
    { x: 300, y: 70 },
    { x: 600, y: 80 }
];

var dataPoints2 = [
    { x: 0, y: 0 },
    { x: 100, y: 15 },
    { x: 200, y: 40 },
    { x: 300, y: 90 },
    { x: 300, y: 170 },
    { x: 600, y: 650 }
];

// Рисование первой линии
drawLine(dataPoints1, 'blue', 1);

// Рисование второй линии
drawLine(dataPoints2, 'red', 2);

function drawLine(dataPoints, color, lineWidth) {
    context.beginPath();
    context.lineWidth = lineWidth;
    context.strokeStyle = color;
    context.moveTo(dataPoints[0].x, canvas.height - dataPoints[0].y);

    for (var i = 1; i < dataPoints.length - 2; i++) {
        var xc = (dataPoints[i].x + dataPoints[i + 1].x) / 2;
        var yc = (canvas.height - dataPoints[i].y + canvas.height - dataPoints[i + 1].y) / 2;
        context.quadraticCurveTo(dataPoints[i].x, canvas.height - dataPoints[i].y, xc, yc);
    }

    context.quadraticCurveTo(dataPoints[i].x, canvas.height - dataPoints[i].y, dataPoints[i + 1].x, canvas.height - dataPoints[i + 1].y);

    context.stroke();
}


//* Слайд "Максимум возможностей" *//
document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.block-sl-1-img, .block-sl-2-img, .block-sl-3-img, .block-sl-4-img');
    const blocks = document.querySelectorAll('.block-sl-1, .block-sl-2, .block-sl-3, .block-sl-4');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
    }

    function showBlock(index) {
        blocks.forEach((block, i) => {
            if (i === index) {
                block.classList.add('active');
            } else {
                block.classList.remove('active');
            }
        });
    }

    function scrollToActiveBlock() {
        const activeBlock = document.querySelector('.block-sl.active');
        if (activeBlock) {
            activeBlock.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
        showBlock(currentIndex);
        scrollToActiveBlock();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
        showBlock(currentIndex);
        scrollToActiveBlock();
    }

    // Изменение слайда каждые 5 секунд
    setInterval(nextSlide, 2000);

    // При загрузке страницы активируем первый слайд и блок
    showSlide(currentIndex);
    showBlock(currentIndex);
    scrollToActiveBlock();

    blocks.forEach((block, index) => {
        block.addEventListener('click', function () {
            currentIndex = index;
            showSlide(currentIndex);
            showBlock(currentIndex);
            scrollToActiveBlock();
        });
    });
});



document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.block-sl-5-img, .block-sl-6-img, .block-sl-7-img');
    const blocks = document.querySelectorAll('.block-sl-5, .block-sl-6, .block-sl-7');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
    }

    function showBlock(index) {
        blocks.forEach((block, i) => {
            if (i === index) {
                block.classList.add('active');
            } else {
                block.classList.remove('active');
            }
        });
    }
    function scrollToActiveBlock() {
        const appMaxCont = document.querySelector('.app-max-cont');
        if (isElementInViewport(appMaxCont)) {
            const activeBlock = document.querySelector('.block-sl.active');
            if (activeBlock && !isElementInViewport(activeBlock)) {
                console.log("Активный блок:", activeBlock);
                activeBlock.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }
        }
    }
    
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
        showBlock(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
        showBlock(currentIndex);
    }

    // Изменение слайда каждые 5 секунд
    setInterval(nextSlide, 2000);

    // При загрузке страницы активируем первый слайд и блок
    showSlide(currentIndex);
    showBlock(currentIndex);

    blocks.forEach((block, index) => {
        block.addEventListener('click', function () {
            currentIndex = index;
            showSlide(currentIndex);
            showBlock(currentIndex);
        });
    });
});

