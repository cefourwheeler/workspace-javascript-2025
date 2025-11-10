// test
var guest1 = {
    name: "Caleb",
    age : 19,
    date : "10/29/25",
    otherguestsNames : ["Tim", "Jim"],
    display: function() {
        return this.name + " " + this.age + " " + this.date + " " + this.otherguestsNames;
    }
};

console.log(guest1.display());
// hotel registration
var guestgroup = [];

function reservation(){
    var guest = {
        name: document.getElementById('guestname').value,
        checkin: document.getElementById('checkin').value,
        checkout: document.getElementById('checkout').value,
        numguest: document.getElementById('guestnum').value,
        roomtype: document.getElementById('room').value
    };
    guestgroup.push(guest);
    console.log('guestgroup', guestgroup);
    alert('Reservation added:\n'+"guest name: " + guest.name + ', guest roomtype: ' + guest.roomtype + ', guest checkin: ' + guest.checkin + ' to ' + guest.checkout);
}

document.getElementById('lists').addEventListener('click', function(){
    if(guestgroup.length===0){ alert('No reservations yet'); return; }
    alert(JSON.stringify(guestgroup, null, 2));
}, false);

document.getElementById('submit').addEventListener('click', reservation, false);