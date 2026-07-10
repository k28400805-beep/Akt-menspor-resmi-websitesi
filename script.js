// ===============================
// AKTÜMENSPOR OFFICIAL WEBSITE
// script.js
// ===============================

// Navbar Scroll Efekti
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.background = "rgba(8,8,8,.95)";
        header.style.padding = "2px 0";
    } else {
        header.style.background = "rgba(0,0,0,.45)";
        header.style.padding = "0";
    }
});

// Sayfa Yüklenme Animasyonu
window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

// İstatistik Sayaçları
const stats = document.querySelectorAll(".stat h2");

const hedefler = [2018, 12, 28, 126];

stats.forEach((item, index) => {

    let sayi = 0;

    const hedef = hedefler[index];

    const interval = setInterval(() => {

        sayi += Math.ceil(hedef / 70);

        if (sayi >= hedef) {

            sayi = hedef;

            clearInterval(interval);

        }

        item.innerHTML = sayi;

    }, 25);

});

// Scroll Reveal
const reveal = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    reveal.forEach(sec => {

        const top = sec.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            sec.style.opacity = "1";
            sec.style.transform = "translateY(0px)";

        }

    });

});

reveal.forEach(sec => {

    sec.style.opacity = "0";
    sec.style.transform = "translateY(60px)";
    sec.style.transition = ".8s";

});

// Yukarı Çık Butonu

const up = document.createElement("button");

up.innerHTML = "↑";

document.body.appendChild(up);

up.style.position = "fixed";
up.style.right = "25px";
up.style.bottom = "25px";
up.style.width = "55px";
up.style.height = "55px";
up.style.borderRadius = "50%";
up.style.border = "none";
up.style.background = "#c3002f";
up.style.color = "white";
up.style.fontSize = "22px";
up.style.cursor = "pointer";
up.style.display = "none";
up.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        up.style.display = "block";

    } else {

        up.style.display = "none";

    }

});

up.onclick = () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

// Hero Yazı Animasyonu

const heroTitle = document.querySelector(".hero h1");

if(heroTitle){

    heroTitle.animate([

        {

            opacity:0,

            transform:"translateY(50px)"

        },

        {

            opacity:1,

            transform:"translateY(0)"

        }

    ],{

        duration:1200,

        easing:"ease"

    });

}

console.log("Aktümenspor Web Sitesi Hazır!");
