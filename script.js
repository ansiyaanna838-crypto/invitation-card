// ===============================
// OPEN INVITATION
// ===============================

const openBtn = document.getElementById("openInvitation");
const landing = document.getElementById("landing");
const invitation = document.getElementById("invitation");
const cover = document.querySelector(".cover");

openBtn.addEventListener("click", () => {

    // Envelope opens
    cover.style.transform = "rotateX(180deg)";

    // Hide landing after animation
    setTimeout(() => {

        landing.style.display = "none";

        invitation.style.display = "block";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 1200);

});

// ===============================
// COUNTDOWN TIMER
// ===============================

// Wedding Date
const weddingDate = new Date("July 11, 2026 18:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const distance = weddingDate - now;

    if (distance < 0) {

        document.getElementById("countdown").innerHTML =
        "<h2 style='grid-column:1/-1;color:#2d6a4f;'>✨ The Wedding Has Begun! ✨</h2>";

        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );

    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");

}

updateCountdown();

setInterval(updateCountdown, 1000);

// ===============================
// FLOWER ANIMATION
// ===============================

const flowerContainer = document.getElementById("flowers");

const flowers = ["🌸", "🌼", "🌺", "🍃", "🌿"];

function createFlower() {

    const flower = document.createElement("div");

    flower.className = "flower";

    flower.innerHTML =
        flowers[Math.floor(Math.random() * flowers.length)];

    flower.style.left = Math.random() * 100 + "vw";

    flower.style.fontSize =
        Math.random() * 18 + 18 + "px";

    flower.style.animationDuration =
        Math.random() * 5 + 7 + "s";

    flower.style.opacity =
        Math.random() * 0.5 + 0.5;

    flowerContainer.appendChild(flower);

    setTimeout(() => {

        flower.remove();

    }, 12000);

}

setInterval(createFlower, 450);

// ===============================
// FADE ELEMENTS WHILE SCROLLING
// ===============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll(".glass, .details, .reception").forEach(el => {

    el.style.opacity = "0";

    el.style.transform = "translateY(50px)";

    el.style.transition = "all 1s ease";

    observer.observe(el);

});

// ===============================
// BUTTON HOVER EFFECT
// ===============================

document.querySelectorAll("button").forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "scale(1.05)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "scale(1)";

    });

});

// ===============================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});