console.log("Love Note Loaded");
const heartsContainer = document.querySelector(".hearts");

function createHeart(){

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize =
        (20 + Math.random() * 50) + "px";

    heart.style.animationDuration =
        (6 + Math.random() * 8) + "s";

    heart.style.opacity = Math.random();

    heartsContainer.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },15000);
}

setInterval(createHeart,300);