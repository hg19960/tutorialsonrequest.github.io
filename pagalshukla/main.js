$(document).ready(function() {
    n = 1;
    
    paras = [
        "Shraddha is a Sanskrit word which describes a positive type of energy that comes from deep within each person and shapes that person’s world and life.",
        "But I look like a 16 year old cute girl",
        "I have a dog named Chubby, and he is very cute",
        "A great bike rider who rides Yamaha R-15"
];
    headings = [
        "Hi... I am Shraddha Shukla",
        "I am 22 year old",
        "I love Dogs",
        "I like to ride bikes"
    ];

    slides = document.getElementById("slides");
    head = document.getElementById("headings");
    para = document.getElementById("para");
    
    slides.style.display = "none";
    head.style.display = "none";
    para.style.display = "none";

    setInterval(slideshow, 1000);
});

function slideshow() {
    if (n == headings.length) {
        n = 1;
    } else {
        n += 1;
    }
    slides.src = "./img/img_" + n + ".png";
    head.innerHTML = headings[n-1];
    para.innerHTML = paras[n-1];
    slides.style.display = "inline";
    head.style.display = "block";
    para.style.display = "block";
    console.log(n);
}