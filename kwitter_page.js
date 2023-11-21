//YOUR FIREBASE LINKS

const firebaseConfig = {
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
    room_name = localStorage.getItem("room_name");
    

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
      console.log()
//End code
      } });  }); }
getData();


function send(){
     message = document.getElementById("message") 
     firebase.database().ref(room_name).push({
      name: user_name,
      message:message,
      like:0
     })
      document.getElementById("message").value=""
}
