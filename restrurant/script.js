var burger = document.querySelector(".burger")
var burger1 = document.querySelector(".burger1")
var plate = document.querySelector(".img")
var changePlate = document.querySelector(".plate-change")

var imgicon = document.querySelector(".logo")

const images = document.querySelectorAll(".image")

const allCards = document.querySelectorAll(".card")
const card1 = document.querySelector(".card1")
const card2 = document.querySelector(".card2")
const card3 = document.querySelector(".card3")
const container1 = document.querySelector(".card_container1")
const container2 = document.querySelector(".card_container2")
const container3 = document.querySelector(".card_container3")
const blackoverlay = document.querySelector(".blackoverlay")
const overLay1 = document.querySelector(".overlay1")
const overLay2 = document.querySelector(".overlay2")
const overLay3 = document.querySelector(".overlay3")

const ftrText = document.querySelector(".h5text")
const ftrBtn = document.querySelector(".footer-btn .btn")
let closeIcon = document.querySelector(".close-icon")
let menu = document.querySelector(".menu")
let menuBtn = document.querySelector(".menu-show-btn")

// Update menu button click handler
menuBtn.addEventListener("click", function (event) {
    menuBtn.style.display = "none";
    menu.style.display = "block"; // Changed from "initial" for consistency
    closeIcon.style.display = "block"; // Changed from "initial" for consistency
});

// Update close icon click handler
closeIcon.addEventListener("click", function (event) {
    menuBtn.style.display = "block"; // Changed from "initial" for consistency
    menu.style.display = "none";
    closeIcon.style.display = "none";
});


// Add window resize handler to handle desktop view
window.addEventListener("resize", function () {
    if (window.innerWidth > 800) { // Match the media query breakpoint from CSS
        menu.style.display = "block";
        menuBtn.style.display = "none";
        closeIcon.style.display = "none";
    } else {
        menu.style.display = "none";
        menuBtn.style.display = "block";
        closeIcon.style.display = "none";
    }
});
// Initialize correct display state on page load
window.dispatchEvent(new Event('resize'));

ftrText.addEventListener("mouseenter", function (event) {
    ftrBtn.classList.add("top-btn")
    ftrBtn.style.opacity = 1
})
ftrText.addEventListener("mouseleave", function (event) {
    ftrBtn.classList.remove("top-btn")
    ftrBtn.style.opacity = 0
})


allCards.forEach(allCards => {
    allCards.addEventListener("mouseenter", function (event) {
        if (event.target.classList[1] == "card3") {
            console.log(typeof (event.target.classList[1]))
            overLay3.style.display = "flex"
            container3.style.scale = "1.1"

        }
        else if (event.target.classList[1] == "card2") {
            overLay2.style.display = "flex"
            container2.style.scale = "1.1"

            console.log(event.target.classList[1])
        }
        else if (event.target.classList[1] == "card1") {
            overLay1.style.display = "flex"
            container1.style.scale = "1.1"

            console.log(event.target.classList[1])
        }
    })

    allCards.addEventListener("mouseleave", function (event) {

        if (event.target.classList[1] == "card3") {
            console.log(typeof (event.target.classList[1]))
            overLay3.style.display = "none"
            container3.style.scale = "1"

        }
        else if (event.target.classList[1] == "card2") {
            overLay2.style.display = "none"
            container2.style.scale = "1"


            console.log(event.target.classList[1])
        }
        else if (event.target.classList[1] == "card1") {
            overLay1.style.display = "none"
            container1.style.scale = "1"

            console.log(event.target.classList[1])
        }
    })
})




function animateImage() {
    images.forEach(image => {
        image.addEventListener('mouseenter', function (event) {
            // Do something with the clicked image
            event.target.classList.toggle('selected'); // Example: toggle a 'selected' class
            console.log('Image clicked:', event.target);
        });
        image.addEventListener('mouseleave', function (event) {
            // Do something with the clicked image
            event.target.classList.toggle('selected'); // Example: toggle a 'selected' class
            console.log('Image clicked:', event.target);
        });
    });

}
animateImage()
function changePlates() {
    document.querySelector(".img1").addEventListener("click", function (event, index) {
        changePlate.innerHTML = `<img class="plate" src=${event.target.src} alt="">`
    })
    document.querySelector(".img2").addEventListener("click", function (event, index) {
        changePlate.innerHTML = `<img class="plate" src=${event.target.src} alt="">`
    })

    document.querySelector(".img3").addEventListener("click", function (event, index) {
        changePlate.innerHTML = `<img class="plate" src=${event.target.src} alt="">`
    })

    document.querySelector(".img4").addEventListener("click", function (event, index) {
        changePlate.innerHTML = `<img class="plate" src=${event.target.src} alt="">`
    })

}
changePlates()


function burgerAnima() {
    plate.addEventListener('mouseenter', function (event) {
        burger1.style.display = "block"
        burger.style.display = 'none'
    })

    plate.addEventListener('mouseleave', function (event) {
        burger1.style.display = "none"
        burger.style.display = "block"
    })
}
burgerAnima()

gsap.from(" .main-text", {
    y: 1000,
    duration: 1.5
}, 'd')
gsap.to(".rect", {
    x: 1000,
    duration: 2.5,
    delay: 0.9
}, "d")
gsap.from(".plate", {
    x: 1000,
    duration: 1
}, 'd')

gsap.from(".img", {
    scale: 3,
    duration: 1.5,
    // delay:1
}, 'd')

