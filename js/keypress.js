const message = document.getElementById("message");

const showkey = (event) => {
    document.getElementById("lastkey").textContent ="Key hit: " + event.key;
};
const showPosition = (event) => {
    document.getElementById("charactersleft").textContent = " position "+event.pageX + " " + event.pageY;
};
messageE.addEventListener("keyup", showkey, false);


messageE.addEventListener("mousemove", showPosition, false);

