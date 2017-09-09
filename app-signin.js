var InputName = document.getElementById("name");
var InputPass = document.getElementById("pass");
var database = firebase.database();
var auth = firebase.auth();






function signIn(){
var email = InputName.value;
var password = InputPass.value;
auth.signInWithEmailAndPassword(email, password)
.then (function(result){
    console.log("SIGN _ IN   SUCCESSFULL")
    console.log(result)
})

.catch(function(error){
    console.log(error.message);
})

console.log(email);
console.log(password);
}