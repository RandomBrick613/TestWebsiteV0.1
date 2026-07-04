const images = [
    {imagesrc: "./img/cats/cat1.jfif"},
    {imagesrc: "./img/cats/cat2.jfif"},
    {imagesrc: "./img/cats/cat3.png"},
];

var randomIndex = Math.floor(Math.random() * images.length);

const selectedImage = images[randomIndex];
document.getElementById("sidedeco").innerHTML = selectedImage;