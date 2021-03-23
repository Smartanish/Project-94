var firebaseConfig = {
    apiKey: "AIzaSyABD8rzQTaMVOuNzuBTiAiYjpvO3c8WQUw",
    authDomain: "c-94-9df02.firebaseapp.com",
    databaseURL: "https://c-94-9df02-default-rtdb.firebaseio.com",
    projectId: "c-94-9df02",
    storageBucket: "c-94-9df02.appspot.com",
    messagingSenderId: "928286666799",
    appId: "1:928286666799:web:e171cbf1a5b56dca07d6da",
    measurementId: "G-RYPR9Q2BLM"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
    room_name = document.getElementById("room_name", room_name).value;
    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"

    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";

}

function getData() {} {
    firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.foreach(function(childSnapshot) {
            childkey = childSnapshot.key;
            room_name = childkey;
            console.log("Room Name- " + room_name);
            row = "<div class='room_name' id=" + room_names + " onclick='redirectToRoomName(this.id)'>  #  " + room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;

        });
    });
}


getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room name", name);
    window.location = "kwitter_page.html";

}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "kwitter.html";

}