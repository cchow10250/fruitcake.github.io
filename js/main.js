window.onscroll = function() {
    stickyNavbar();
};

let navbar = document.getElementById("menu");

// Get offset position of navbar
let sticky = navbar.offsetTop;

// Add the sticky class to the navbar and black border when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyNavbar() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
        navbar.classList.add("border_bottom");
    } else {
        navbar.classList.remove("sticky");
        navbar.classList.remove("border_bottom");
    }
}

// Flip Card (Credits to: Friends Desmond and Joshua)

const card1 = document.querySelector('.card1 .card-inner');
const card2 = document.querySelector('.card2 .card-inner');
const card3 = document.querySelector('.card3 .card-inner');
const card4 = document.querySelector('.card4 .card-inner');
const card5 = document.querySelector('.card5 .card-inner');

for (let i = 1; i < 6; i++){
    document.querySelector(`.card${i} .project_button`).addEventListener('click', () =>{
        document.querySelector(`.card${i} .card-inner`).classList.toggle('is-flipped');
    });

    document.querySelector(`.card${i} .svg_link`).addEventListener('click', () =>{
        document.querySelector(`.card${i} .card-inner`).classList.toggle('is-flipped');
    });

    document.querySelector(`.card${i} .x-button`).addEventListener('click', () =>{
        document.querySelector(`.card${i} .card-inner`).classList.toggle('is-flipped');
    });
}