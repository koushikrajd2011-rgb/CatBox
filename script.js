console.log("CatBox loaded!");

const box = document.getElementById("box");
const boxImg = document.getElementById("box-img");
const catImg = document.getElementById("cat-img");
const result = document.getElementById("result");
const resetBtn = document.getElementById("reset-btn");
const aliveCount = document.getElementById("alive-count");
const deadCount = document.getElementById("dead-count");

let opened = false;
let alive = 0;
let dead = 0;

box.addEventListener("click", () => {
    if (opened) return;
    opened = true;

    boxImg.src = "boxopen.png";

    const isAlive = Math.random() < 0.5;

    if (isAlive) {
        catImg.src = "catalive.png";
        result.textContent = "The cat is alive.";
        alive++;
        aliveCount.textContent = alive;
    } else {
        catImg.src = "catdead.png";
        result.textContent = "The cat has died.";
        dead++;
        deadCount.textContent = dead;
    }

    catImg.classList.add("show");
});

resetBtn.addEventListener("click", () => {
    opened = false;
    boxImg.src = "boxclosed.png";
    catImg.classList.remove("show");
    result.textContent = "";
});

const fetchFactBtn = document.getElementById("fetch-fact-btn");
const catFactText = document.getElementById("cat-fact-text");

function loadCatFact() {
    catFactText.textContent = "Loading a cat fact...";
    fetch("https://catfact.ninja/fact")
        .then(res => res.json())
        .then(data => {
            catFactText.textContent = data.fact;
        })
        .catch(() => {
            catFactText.textContent = "Failed to load a cat fact.";
        });
}

fetchFactBtn.addEventListener("click", loadCatFact);

const fetchCatBtn = document.getElementById("fetch-cat-btn");
const catFetchImg = document.getElementById("cat-fetch-img");

function loadRandomCat() {
    catFetchImg.src = "https://cataas.com/cat?timestamp=" + Date.now();
}

fetchCatBtn.addEventListener("click", loadRandomCat);
loadRandomCat();