
//ADD YOUR FIREBASE LINKS

  var firebaseConfig = {
    apiKey: "AIzaSyChkiIiNfCj0Fl8mW42jICeh1-G2zYc-J8",
    authDomain: "kwitter-85b12.firebaseapp.com",
    databaseURL: "https://kwitter-85b12-default-rtdb.firebaseio.com",
    projectId: "kwitter-85b12",
    storageBucket: "kwitter-85b12.appspot.com",
    messagingSenderId: "386546355891",
    appId: "1:386546355891:web:b102530e6c237a22ad6ac6"
  };

firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "kwitter.html";
}
