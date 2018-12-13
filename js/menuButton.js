let headerBg = document.getElementById('header');
let menuBtn = document.getElementById('menu-btn');

let tablet = window.matchMedia("screen and (max-width: 992px)");

let currentWindowWidth = window.innerWidth;

function checkCurrentWidth() {
    if (currentWindowWidth < 992) {
        menuBtn.addEventListener('click', changeHeaderColor);
    } else {
        tablet.addListener(mobile => {
            if (mobile.matches) {
                menuBtn.addEventListener('click', changeHeaderColor)
            }
        })
    }
}
checkCurrentWidth()

function changeHeaderColor() {
    headerBg.classList.toggle('whiteBg');
}