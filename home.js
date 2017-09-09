var auth = firebase.auth();
var database = firebase.database();
var usrName = document.getElementById("usrName");
var usrEmail = document.getElementById("usrEmail");
var senderName = document.getElementById("sender");
var dua = document.getElementById("text");

var currentUser = JSON.parse(localStorage.getItem('currentUser'));
console.log(currentUser);
usrName.innerHTML = currentUser.name;
usrEmail.innerHTML = currentUser.email;


function post(){
    var posts={
        name: senderName.value,
        duas: dua.value
    }

    database.ref().child("posts").push(posts);
    senderName.value='';
    dua.value= '';
}
