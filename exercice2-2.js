let min = prompt("écris un nombre");
let max = prompt("écris un nombre");

if (current >= min && current <= max) {
        alert("le nombre est comprit entre min et max");
}

else {
    let current = prompt("écris un nombre");

if (min > max) {
    console.log("oups ! la valeur minimale est plus grande que la valeur maximale");
    alert("oups ! la valeur minimale est plus grande que la valeur maximale");
} 
}