/* ==========================================
   AKTÜMENSPOR OFFICIAL WEBSITE
   JavaScript
========================================== */

// Sayfa tamamen yüklendiğinde

document.addEventListener("DOMContentLoaded", () => {

    // Aktif menü

    const currentPage = window.location.pathname.split("/").pop();

    document.querySelectorAll(".nav-links a").forEach(link => {

        const href = link.getAttribute("href");

        if(href && href.includes(currentPage)){

            link.classList.add("active");

        }

    });

});


/* ===============================
   Yukarı Çık Butonu
================================ */

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.className = "top-btn";

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

    if(window.scrollY>350){

        topButton.classList.add("show");

    }else{

        topButton.classList.remove("show");

    }

});

topButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/* ===============================
   Fade Animasyonu
================================ */

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show-animation");

        }

    });

},{
    threshold:.15
});

document.querySelectorAll(

".player-card,.news-card,.product-card,.gallery-item,.info-card,.stat"

).forEach(el=>{

    observer.observe(el);

});
/* ==========================================
   Sayaç Animasyonu
========================================== */

const counters = document.querySelectorAll(".stat h2");

const animateCounter = (counter) => {

    const target = parseInt(counter.innerText.replace(/\D/g, "")) || 0;

    if (target === 0) return;

    let current = 0;

    const increment = Math.max(1, Math.ceil(target / 100));

    const update = () => {

        current += increment;

        if (current >= target) {

            counter.innerText = target.toLocaleString("tr-TR");

            return;

        }

        counter.innerText = current.toLocaleString("tr-TR");

        requestAnimationFrame(update);

    };

    update();

};

const counterObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            animateCounter(entry.target);

            counterObserver.unobserve(entry.target);

        }

    });

}, {

    threshold: 0.5

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});


/* ==========================================
   Navbar Scroll Efekti
========================================== */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* ==========================================
   Buton Ripple Efekti
========================================== */

document.querySelectorAll("button").forEach(button => {

    button.addEventListener("click", function (e) {

        const circle = document.createElement("span");

        const diameter = Math.max(this.clientWidth, this.clientHeight);

        circle.style.width = circle.style.height = diameter + "px";

        circle.classList.add("ripple");

        circle.style.left = e.offsetX - diameter / 2 + "px";

        circle.style.top = e.offsetY - diameter / 2 + "px";

        const ripple = this.querySelector(".ripple");

        if (ripple) ripple.remove();

        this.appendChild(circle);

    });

});


/* ==========================================
   Loader
========================================== */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});


/* ==========================================
   Konsol Mesajı
========================================== */

console.log("%cAKTÜMENSPOR", "font-size:32px;color:#c8102e;font-weight:bold;");

console.log("%cResmî Kulüp Web Sitesi", "font-size:18px;color:#444;");

console.log("%cBir Arma. Bir Mücadele. Bir Gelecek.", "font-size:15px;color:#777;");
