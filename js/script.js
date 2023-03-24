/* TOOGLE MENUE*/ 
/* let menuIcon =  document.querySelector('#menuIcon');
let navBar =  document.querySelector('.navBar');
let  toggleState = 0;
menuIcon.onclick = () => {
    if (toggleState == 0){
        menuIcon.src = "../img/x-regular-24.png";
        navBar.classList.add("close");
        toggleState = 1;
        return
    }
    navBar.classList.remove("close");
    menuIcon.src = "../img/menu-regular-24.png";
    toggleState = 0;
}; */


/* CARDS ANIMATION*/
/*
function carousel() {
    let carouselContainer = document.querySelector(".memberContainer");
    let carourselCardTrack = document.querySelector(".memberCardTrack");
    let cards = document.querySelectorAll(".memberCard");
    let carourselCardTrack2;
    const speed =  1;

    const width = carourselCardTrack.offsetWidth;
    let x = 0;
    let x2 = width;

    function clone(){
        carourselCardTrack2 = carourselCardTrack.cloneNode(true);
        carouselContainer.appendChild(carourselCardTrack2);
        carourselCardTrack2.style.left = `$(width)px`;
    }
    function moveFirst() {
        x -=speed;

        if (width >= Math.abs(x)) {
            carourselCardTrack.style.left = `${x}px`;
        }else {
            x = width;
        }
        
    }
     function moveSecond() {
        x2 -= speed;
        if (carourselCardTrack2.offsetWidth >= Math.abs(x2)) {
            carourselCardTrack2.style.left = `${x2}px`;
        }else {
            x2 = width;
        }
    }
    clone(); 
    let a = setInterval(moveFirst, 10); 
    let b = setInterval(moveSecond, 10);  
} 
carousel()
*/
/* */

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
/* 
window.onscroll = () => {
    /* sections.forEach(sec=> {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if( top < offset + height ) {
            navLinks.forEach( link => {
                link.classList.remove('active');
                document.querySelector('header nav a [href*= ' + id + ']').classList.add('active');
            });
        };
    }); */
    /* Toogle menu remove navBar when scrool down to sections
    navBar.classList.remove("close");
    menuIcon.src = "../img/menu-regular-24.png";
    toggleState = 0;
};  */

/* SCROLL TO SECTION */
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    const offset = -100; // décalage de 100px vers le haut
  
    window.scrollTo({
      top: section.offsetTop + offset,
      behavior: 'smooth', // animation fluide
    });
  }

/* CHANGE OPACITY OF HEADER WHEN SCROLL */
var header = document.querySelector('.header');
var origOffsetY = header.offsetTop;

function onScroll() {
  if (window.scrollY >= origOffsetY) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
  
  if (window.scrollY <= 0) {
    header.classList.remove('scrolled');
  }
}

document.addEventListener('scroll', onScroll);


const title = document.querySelector('h1');
const txt = "PARIS"

function typewriter(word, index){
    if(index < word.length) {
        setTimeout(() => {
            title.innerHTML += `<span>${word[index]}</span>`
            typewriter(txt, index + 1)
        }, 300);
    }
}
setTimeout(() => {
    typewriter(txt, 0)
}, 500);