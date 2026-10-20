const bulb = document.getElementById("bulb");
const statusText = document.getElementById("status");
const toggleBtn = document.getElementById("toggleBtn");

let isOn = false;

toggleBtn.addEventListener("click", () => {

    if (isOn) {
        bulb.src = "https://www.w3schools.com/js/pic_bulboff.gif";
        statusText.textContent = "Bulb is OFF";
        toggleBtn.textContent = "Turn ON";
    } else {
        bulb.src = "https://www.w3schools.com/js/pic_bulbon.gif";
        statusText.textContent = "Bulb is ON";
        toggleBtn.textContent = "Turn OFF";
    }

    isOn = !isOn;
});