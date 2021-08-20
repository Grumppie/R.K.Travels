// Variable Diclarations
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
const slideIcons = document.querySelectorAll(".slide-icon");
const videos = document.querySelectorAll(".videos");
const contents = document.querySelectorAll(".home-content")
const sliderLength = slideIcons.length;
let counter = 0;
var playSlider;
var replay;
// EventListners
menuBtn.addEventListener("click", mobileMenu);




var repeater = () => {
    playSlider = setInterval(function () {
        slideIcons.forEach((slideIcon) => {
            slideIcon.classList.remove("active");
        })
        videos.forEach((video) => {
            video.classList.remove("active");
        })
        contents.forEach((video) => {
            video.classList.remove("active");
        })
        counter++;
        if (counter > (sliderLength - 1)) {
            counter = 0;
        }

        slideIcons[counter].classList.add("active");
        videos[counter].classList.add("active");
        contents[counter].classList.add("active");


    }, 7000)
}


contents.forEach((content) => {
    content.addEventListener("mouseover", () => {
        clearInterval(playSlider);
    });
    content.addEventListener("mouseout", () => {
        repeater();
    });
})



function mobileMenu() {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
}

repeater();

function change(index) {
    clearInterval(playSlider);

    slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove("active");
    })
    videos.forEach((video) => {
        video.classList.remove("active");
    })
    contents.forEach((video) => {
        video.classList.remove("active");
    })
    slideIcons[index].classList.add("active");
    videos[index].classList.add("active");
    contents[index].classList.add("active");

    counter = index;

    replay = setInterval(repeater(), 7000)

}

