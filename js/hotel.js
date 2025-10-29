// test
//var guest = {
    //name: "Caleb",
    //age : 19,
    //date : "10/29/25",
    //otherguestsNames : ["Tim", "Jim"],
    //display: function() {
        //return this.name + " " + this.age + " " + this.date + " " + this.otherguestsNames;
    //}
//};

var guestgroup = new Array();
//console.log(guest.display());
//hotel registration
var guest={
    name: document.getElementById("guestname").value,
    checkin: document.getElementById("checkin").value,
    checkout: document.getElementById("checkout").value,
    numguest: document.getElementById("guestnum").value,
    roomtype: document.getElementById("room").value
};
guestgroup.push(guest);
console.log(guestgroup);

document.getElementById("submit").addEventListener("click", reservation);

function reservation() {

}