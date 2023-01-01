const images = [
    'vacation/bag.jpg',
    'vacation/beach.jpg',
    'vacation/beach2.jpg',
    'vacation/chair.jpg',
    'vacation/download 1.jpg',
    'vacation/download 2.jpg',
    'vacation/download3.jpg',
    'vacation/net.jpg',
    'vacation/sand.jpg',
    'vacation/sunglass.jpg'
];

let imgIndex = 0;

const img = document.getElementById('carousel-img');

setInterval(() => {
    if (imgIndex === images.length) {
        imgIndex = 0;
    }
    const imgLink = images[imgIndex];
    img.setAttribute('src', imgLink);
    imgIndex++;
}, 1000);