document.addEventListener("DOMContentLoaded", function() {
    let section = document.querySelector("section");
    let unhappy = document.getElementById("unhappy");
    let neutral = document.getElementById("neutral");
    let satisfied = document.getElementById("satisfied");
    let unh = document.querySelector(".unh");
    let neu = document.querySelector(".neu");
    let sat = document.querySelector(".sat");
    let eyes = document.querySelector(".emoji span");
    let btn = document.getElementById("btn");

    unhappy.addEventListener("click", () => {
        neu.classList.add("hidden");
        sat.classList.add("hidden");
        eyes.innerHTML = "😒";
        btn.innerHTML = "Thanks for Feedback";
        section.style.backgroundColor = "red";
    });

    neutral.addEventListener("click", () => {
        unh.classList.toggle("hidden");
        sat.classList.toggle("hidden");
        eyes.innerHTML = "😐";
        btn.innerHTML = "Thanks for Feedback";
        section.style.backgroundColor = "blue";
    });

    satisfied.addEventListener("click", () => {
        unh.classList.toggle("hidden");
        neu.classList.toggle("hidden");
        eyes.innerHTML = "😊";
        btn.innerHTML = "Thanks for Feedback";
        section.style.backgroundColor = "green";
    });

    btn.addEventListener("click", () => {
        unh.classList.remove("hidden");
        neu.classList.remove("hidden");
        sat.classList.remove("hidden");
        btn.innerHTML = "Send Feedback";
        section.style.backgroundColor = "";
    });
});
