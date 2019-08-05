function randomCardPics() {
    var cardsImage = document.getElementsByClassName("cardImage");

    for (a=0; a < cardsImage.length; a++) {
        r = Math.floor((Math.random() * 5) + 1);
        cardsImage[a].src = "./img/img_" + a + "/img_"+ r +".jpg";
    }
}

var slideIndex;
function carousel(n) {
    var i;
    var slides = document.getElementsByClassName("mySlide");
    if (n > slides.length) {
        slideIndex = 1;
    } else if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    setTimeout(carousel, 10000);
}

// Next/previous controls
function plusSlides(n) {
    carousel(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    carousel(slideIndex = n);
}

function randomFunc(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

var numberOfBalloons = Math.floor((Math.random() * 50) + 25);
console.log(numberOfBalloons);
function randomBalloon() {
    for (a=0; a < numberOfBalloons; a++) {
        n = Math.floor((Math.random() * 2) + 1);
        t = randomFunc(700,90);
        l = randomFunc(85,15);
        h = randomFunc(30,15);
        o = (Math.random() * 0.45) + 0.15;
        document.getElementById("balloons").innerHTML = document.getElementById("balloons").innerHTML + '<img src="./img/floatingBalloon_' + n + '.png" id="floatingBalloon' + a + 'A" alt="">';
        $('#floatingBalloon'+a+'A').css({top:t+'%',left:l+'%',position:'absolute',height:h+'%',zIndex:-5,opacity:o});
    }
}

function randomBasket() {
    for (a=0; a < 5; a++) {
        t = randomFunc(200,80);
        l = randomFunc(80,20);
        h = randomFunc(20,10);
        document.getElementById("balloons").innerHTML = document.getElementById("balloons").innerHTML + '<img src="./img/floatingBalloon.png" id="floatingBalloon' + a + 'B" alt="">';
        $('#floatingBalloon'+a+'B').css({top:t+'%',left:l+'%',position:'absolute',height:h+'%',zIndex:-5,opacity:0.6});
    }
}

function slideInc() {
    slideIndex += 1;
}

$(document).ready(function() {
    //slideshow
    slideIndex = 1;
    carousel(slideIndex);
    randomBalloon();
    randomBasket();
    var cards = document.getElementsByClassName("card");
    var cardPos = Math.floor(Math.random() * 2);
    console.log(cardPos);
    for (i=0; i < cards.length; i++) {
        if (cardPos == 1) {
            if (i%2==0) {
                cards[i].style.marginLeft = "5%";
            } else {
                cards[i].style.marginLeft = "30%";
            }
        } else {
            if (i%2==0) {
                cards[i].style.marginLeft = "30%";
            } else {
                cards[i].style.marginLeft = "5%";
            }
        }
    }
    setInterval(randomCardPics,10000);
});
