const getTime = () => {
    let d = new Date();
    let hr = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();

    let hrRotation = hr * 30 + min / 2;
    let minRotation = min * 6;
    let secRotation = sec * 6;
    let session = "AM";

    if (hr == 0) {
        hr = 12;
    }

    if (hr > 12) {
        hr = hr - 12;
    }
    if (hr >= 12) {
        session = "PM";
    }

    hr = (hr < 10) ? "0" + hr : hr;
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;

    time = hr + ":" + min + ":" + sec + " " + session;
    digitalClock.innerHTML = time;

    hrHand.style.transform = `rotate(${hrRotation}deg)`;
    minHand.style.transform = `rotate(${minRotation}deg)`;
    secHand.style.transform = `rotate(${secRotation}deg)`;
}
const changeColor = () => {
    let getRandomColorR = Math.floor(Math.random() * (255));
    let getRandomColorG = Math.floor(Math.random() * (255));
    let getRandomColorB = Math.floor(Math.random() * (0));
    let color = `rgb(${getRandomColorR}, ${getRandomColorG}, ${getRandomColorB})`;
    digitalClock.style.color = color;
    secHand.style.backgroundColor = color; 
}
setInterval(() => {
    getTime();
    changeColor();
}, 1000);