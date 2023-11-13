// Richiama gli elementi dal DOM
const imgWrapper = document.getElementById("imgwrapper");
const btnNext = document.getElementById("btnnext");
const btnPrev = document.getElementById("btnprevious");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const reverse = document.getElementById("reverse");
let direction = "right";
let timer;

// Array di oggetti
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping stopwith Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

// Creazione immagini
images.forEach((element, index, array) => {
    createImage(element)
});


function createImage(photo) {

    let img = document.createElement("img");
    img.src = (photo.image);
    img.classList.add("w-100");
    let title = document.createElement("h5");
    title.innerHTML = (photo.title);
    let description = document.createElement("p");
    description.innerHTML = (photo.text);
    let titles = document.createElement("div");
    titles.append(title, description);
    titles.classList.add("d-none", "position-absolute", "bottom-0", "text-end", "text-white", "me-2");
    imgWrapper.append(img, titles);



}
// Cicli e bottoni per scorrimento immagini e testi
let currentImage = 0;
const photos = document.querySelectorAll("#imgwrapper img");
const titles = document.querySelectorAll("#imgwrapper div")


photos[currentImage].classList.add("block");
titles[currentImage].classList.add("block")
function changeImg(direction) {



    if (direction == "right") {


        if (currentImage == images.length - 1) {
            photos[currentImage].classList.remove("block");
            titles[currentImage].classList.remove("block");
            currentImage = 0;
            photos[currentImage].classList.add("block");
            titles[currentImage].classList.add("block");
        }else{
            photos[currentImage].classList.remove("block");
            titles[currentImage].classList.remove("block");
            currentImage++;
            photos[currentImage].classList.add("block");
            titles[currentImage].classList.add("block");
    
        }

    } else if (direction == "left") {

        if (currentImage == 0) {
            photos[currentImage].classList.remove("block");
            titles[currentImage].classList.remove("block");
            currentImage = images.length - 1;
            photos[currentImage].classList.add("block");
            titles[currentImage].classList.add("block");
        }else{

            photos[currentImage].classList.remove("block");
            titles[currentImage].classList.remove("block");
            currentImage--;
            photos[currentImage].classList.add("block");
            titles[currentImage].classList.add("block");
        }



    }
}


btnNext.addEventListener("click", function () {
    changeImg("right");
})

btnPrev.addEventListener("click", function () {
    changeImg("left");
})

//Bonus #2 & #3

play.addEventListener("click", function () {
    console.log(direction)
    timer = setInterval(function(){
        changeImg(direction)
    },3000)
})

stop.addEventListener("click", function(){
   clearInterval(timer);
})


reverse.addEventListener("click", function(){
    if(direction==("right")){
        direction="left"
    }else{
        direction="right"
    }

    console.log(direction)
})
