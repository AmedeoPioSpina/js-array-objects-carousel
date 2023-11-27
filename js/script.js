const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
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

let imgsElementsList = []

const setUpCarousel = () => {
    let divCarousel = document.querySelector(".carousel")
    images.forEach((item) => {
        let newFrame = document.createElement("div");
        newFrame.classList.add("frame")
        let newImg = document.createElement("img");
        let newInserction = document.createElement("div");
        newInserction.classList.add("inserction")
        let h2 = document.createElement("h2");
        h2.textContent = item.title;
        newInserction.appendChild(h2);
        let p = document.createElement("p");
        p.textContent = item.text;
        newInserction.appendChild(p);
        newImg.src = item.image;
        newFrame.appendChild(newImg)
        newFrame.appendChild(newInserction)
        imgsElementsList.push(newFrame);
        divCarousel.appendChild(newFrame);
    })

    imgsElementsList[0].classList.add("frame-on");
}

setUpCarousel();

let btnImgSwitch = document.querySelectorAll("button");

btnImgSwitch[0].addEventListener("click", () => {
    let currIndexFrameOn = imgsElementsList.map(item => item.classList[1]).indexOf("frame-on");
    console.log(currIndexFrameOn);

    imgsElementsList[currIndexFrameOn].classList.remove("frame-on");
    if(currIndexFrameOn - 1 === -1) {
        imgsElementsList[imgsElementsList.length - 1].classList.add("frame-on");
    }
    else{
        imgsElementsList[currIndexFrameOn - 1].classList.add("frame-on");
    }
});

btnImgSwitch[1].addEventListener("click", () => {
    let currIndexFrameOn = imgsElementsList.map(item => item.classList[1]).indexOf("frame-on");
    console.log(currIndexFrameOn);

    imgsElementsList[currIndexFrameOn].classList.remove("frame-on");
    if(currIndexFrameOn + 1 === imgsElementsList.length) {
        imgsElementsList[0].classList.add("frame-on");
    }
    else{
        imgsElementsList[currIndexFrameOn + 1].classList.add("frame-on");
    }
});

console.log(imgsElementsList)