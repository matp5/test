// let headerBg = document.getElementById('header');
// let menuBtn = document.getElementById('menu-btn');

// window.addEventListener('resize', resize);
// headerBg.style.backgroundColor = 'white';

// function resize() {
//     if (window.innerWidth > 992) {
//         menuBtn.removeEventListener('click', headerColor);
//         headerBg.style.backgroundColor = 'white';
//     } else {
//         headerBg.style.backgroundColor = 'transparent';
//     }
// };

// function headerColor() {
//     if (headerBg.style.backgroundColor == 'white') {
//         headerBg.style.backgroundColor = 'transparent';
//     } else {
//         headerBg.style.backgroundColor = 'white';
//     }

// };

let headerBg = document.getElementById('header');
let menuBtn = document.getElementById('menu-btn');

window.addEventListener('resize', resize);
headerBg.style.backgroundColor = 'white';

function resize() {
    if (window.innerWidth > 992) {
        menuBtn.removeEventListener('click', headerColor);
        headerBg.style.backgroundColor = 'white';
    } else {
        menuBtn.addEventListener('click', headerColor);
        headerBg.style.backgroundColor = 'transparent';
    }
};

function headerColor() {
    if (headerBg.style.backgroundColor == 'white') {
        headerBg.style.backgroundColor = 'transparent';
    } else {
        headerBg.style.backgroundColor = 'white';
    }

};