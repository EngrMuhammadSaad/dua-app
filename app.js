var InputUserName = document.getElementById("uname");
var InputPass = document.getElementById("pass");
var InputName = document.getElementById("name");
var InputNumber = document.getElementById("num");
var database = firebase.database();
var auth = firebase.auth();






function authenticate(){
var email = InputUserName.value;
var password = InputPass.value;
var name = InputName.value;
var num = InputNumber.value;
auth.createUserWithEmailAndPassword(email, password)
.then (function(result){
    var user = {
        uid: result.uid,
        name: name,
        email: email,
        num: num
    }
    localStorage.setItem('currentUser',JSON.stringify(user));
        console.log("SIGN _ UP   SUCCESSFULL")
        console.log(user);
        location = "sign-in.html"
        
})

.catch(function(error){
    console.log(error.message);
})

console.log(email);
console.log(password);
}




function signIn(){
var email = InputName.value;
var password = InputPass.value;
auth.signInWithEmailAndPassword(email, password)
.then (function(user){
    console.log("SIGN _ IN   SUCCESSFULL");
    console.log(user);
    
    location = "index.html"
})

.catch(function(error){
    console.log(error.message);
})

console.log(email);
console.log(password);
}