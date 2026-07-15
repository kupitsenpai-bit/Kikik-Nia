// ================================
// Wedding Kikik & Nia
// ================================

// Tombol buka undangan
const openBtn = document.getElementById("openInvitation");
const cover = document.querySelector(".cover");
const music = document.getElementById("music");

if (openBtn) {
    openBtn.addEventListener("click", () => {

        cover.style.display = "none";

        if (music) {
            music.play().catch(() => {
                console.log("Browser memblokir autoplay.");
            });
        }

        document.body.style.overflow = "auto";
    });
}

// Countdown
const targetDate = new Date("August 20, 2026 09:00:00").getTime();

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

setInterval(() => {

    const now = new Date().getTime();

    const distance = targetDate - now;

    if(distance < 0){

        days.innerHTML = 0;
        hours.innerHTML = 0;
        minutes.innerHTML = 0;
        seconds.innerHTML = 0;

        return;
    }

    days.innerHTML = Math.floor(distance / (1000 * 60 * 60 * 24));

    hours.innerHTML = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    minutes.innerHTML = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    seconds.innerHTML = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );

},1000);
