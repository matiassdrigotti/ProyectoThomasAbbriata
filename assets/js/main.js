function btn() {
    window.open('https://www.beatport.com/artist/thomas-abbriata/1088567', '_blank')
}

function btnSpotify() {
    window.open('https://open.spotify.com/artist/0zbPiMWdEP9YrueawfdXSj?si=MPmcOh3nTuq_rmmSQW94kw', '_blank')
}

function logoLinkInstagram() {
    window.open('https://www.instagram.com/thomasabbriata/')
}

function logoLinkFacebook() { 
    window.open('https://www.facebook.com/thomas.abbriata')
}

function logoLinkWsp() {
    window.open ('https://api.whatsapp.com/message/XLUNWURDDLVVL1?autoload=1&app_absent=0')
}

function logoLinkYoutube() {
    window.open ('https://www.youtube.com/@thomasabbriata6453')
}

function logoLinkSoundclound() {
    window.open ('https://soundcloud.com/thomas-abbriata-737795989')
}

function logoLinkGmail() {
    window.open ('https://mail.google.com/mail/u/0/#inbox?compose=CllgCJvlqhhHLWNWTJRvqQfshfTLcXbhRQcLrTgktfFxPLNSsHdWwfxKJzPTqcMbPhktCqgHlVB')
}

function logoBeatport() {
    window.open ('https://www.beatport.com/artist/thomas-abbriata/1088567')
}

function videoUrl(hm){
    document.getElementById("slider").src = hm;
}

//slide Fotos//

const btnLeft = document.querySelector(".btn-left"),
      btnRight = document.querySelector(".btn-right"),
      slider = document.querySelector("#sliderFotos"),
      sliderSection = document.querySelectorAll(".slider-section");


btnLeft.addEventListener("click", evt => moveToLeft())
btnRight.addEventListener("click", evt => moveToRight())

setInterval(() => {
    moveToRight()
}, 3000);


let operacion = 0,
    counter = 0,
    widthImg = 100 / sliderSection.length;

function moveToRight() {
    if (counter >= sliderSection.length-1) {
        counter = 0;
        operacion = 0;
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none";
        return;
    } 
    counter++;
    operacion = operacion + widthImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .6s"
    
}  

function moveToLeft() {
    counter--;
    if (counter < 0 ) {
        counter = sliderSection.length-1;
        operacion = widthImg * (sliderSection.length-1)
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none";
        return;
    } 
    operacion = operacion - widthImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .6s"
    
    
}   

