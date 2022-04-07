let userNum = document.getElementById("getNumber");
userNum.addEventListener("keydown" , function (e) {
    if (e.keyCode == 13) {
        run(e);
    }
});
 
userNum.focus();
 
let counter = 0
 
function run() {
    let w = document.getElementById("paragraph")
    w.innerHTML = "Hello World";
    w.style.backgroundColor = "black";
    w.style.color = "white";
    randomNum();
    userNumber();
    compareNumbers();
   }
   
   
   function randomNum() {
    let ran = Math.floor(Math.random() * 10);
    let x = document.getElementById("num");
    x.innerHTML = ran;
    x.style.backgroundColor = "blue";
    x.style.color = "white";
    x.style.textAlign = "center";
    return ran
   }
   
   function userNumber() {
    let user = document.getElementById("getNumber").value;
    let y = document.getElementById("userNumber");
    y.innerHTML = user;
    y.style.backgroundColor = "purple";
    y.style.color = "white";
    y.style.textAlign = "center";
    return user
   }
   
   function compareNumbers() {
    let a = userNumber();
    let b = randomNum();
    let z = document.getElementById("compare")
    let c = document.getElementById("counter")
 
    if (a != b) {
        z. innerHTML = "These are different numbers. You got " + a + " and the computer got " + b
       
        z.style.backgroundColor = "red";
        z.style.color = "white";
        z.style.textAlign = "center";
        counter++;
       
        c.innerHTML = "You tried " + counter + " times"
        c.style.backgroundColor = "red";
        c.style.color = "white";
        c.style.textAlign = "center";
 
    }   else if (a == b) {
        z. innerHTML = "These are the same numbers. You got " + a + " and the computer got " + b
 
       
        z.style.backgroundColor = "green";
        z.style.color = "white";
        z.style.textAlign = "center";
        c.innerHTML = "You tried " + counter + " times to get it right"
 
        c.style.backgroundColor = "green";
        c.style.color = "white";
        c.style.textAlign = "center";
        counter = 0
       
    }
    resetInput();
}

function resetInput() {
     document.getElementById("getNumber").value = ""
}
