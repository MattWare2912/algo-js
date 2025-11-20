

while (true)  { // true veut dire que se sera une condition toujours vraie
let usernumb = prompt("quelle est ton nombre préféré ?");

if (Number(usernumb) === 42) {
    alert("Bravo");
    break; // veut dire sortir de la boucle   
} else {
    alert("T'en es sur ?");
}
}


