/* TOOGLE MENUE*/ 
let menuIcon =  document.querySelector('#menuIcon');
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
};




/* */

 let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

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


    /* Toogle menu remove navBar when scrool down to sections*/
    navBar.classList.remove("close");
    menuIcon.src = "../img/menu-regular-24.png";
    toggleState = 0;
}; 