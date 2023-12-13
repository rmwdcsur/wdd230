const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const benefits = document.querySelector("section");
const labels = document.querySelectorAll("label");


modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("🌙")) {
        main.style.background = "#000";
        main.style.color = "#fff";
        benefits.style.backgroundColor = "#000";
        for (var i = 0; i < labels.length; i++) {
            labels[i].style.color = "#fff";
        }
        modeButton.textContent = "🔆";
    } else {
        main.style.background = "#FFFFFF";
        main.style.color = "#000";
        benefits.style.backgroundColor = "#8ea8c3";
        // labels.style.color = "#000"
        for (var i = 0; i < labels.length; i++) {
            labels[i].style.color = "#000";
        }
        modeButton.textContent = "🌙";
    }
});



//calendar




