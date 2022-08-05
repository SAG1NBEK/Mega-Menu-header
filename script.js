let isMobile = {
	Android: function() {return navigator.userAgent.match(/Android/i);},
	BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
	iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
	Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
	Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
	any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};

let headerBurger = document.getElementById("header__burger");
let headerMenu   = document.getElementById("header__menu");
let arrow        = document.querySelectorAll('.arrow');

for(i=0; i < arrow.length; i++) {
    let subMenu   = arrow[i].nextElementSibling;
    let thisArrow = arrow[i];
    let thisLink  = arrow[i].previousElementSibling;
    
    thisLink.classList.add('parent');

    arrow[i].addEventListener('click', function() {
        subMenu.classList.toggle('open');
        thisArrow.classList.toggle('active');
    });
}

headerBurger.onclick = function() {
    headerMenu.classList.toggle("active");
};