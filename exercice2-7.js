let n = Number(prompt("entre combien de nombre tu veux ajouter"));
let sum = 0;

for (let i = 0; i < n; i++) {
    let num = Number(prompt("rentre un nombre " + (i+1) + ":"));
    sum += num;
}

alert("le total est: " + sum);
