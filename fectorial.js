
var fac = 1;
let condition = prompt("Please enter the number for fectorial: ");
for (let i = 1; i <= condition; i++) {
    fac = fac * i;
}
document.getElementById("factorial").innerHTML = "Your given factorial is :" + fac;
console.log(fac);