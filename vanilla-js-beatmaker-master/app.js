window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors = ["crimson", "beige", "darkorange", "darkmagenta", "darkslategray", "tomato"];
    console.log("inside addEventListener" + this);
    pads.forEach((pad, index) => {
        pad.addEventListener('click', function () {
            sounds[index].currentTime = 0;
            sounds[index].play();

            createBubbles(index);
        });
    });

    // create a function that makes bubles
    const createBubbles = (index) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = "jump 1s ease";
        bubble.addEventListener('animationend', function () {
                visual.removeChild(this);
            })

    };
});