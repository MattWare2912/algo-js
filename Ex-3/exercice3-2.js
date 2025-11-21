function moyenne(arr) {
    let sum = 0;
for (let number of arr) {
    sum += number;
}

return sum / arr.length;
}

console.log(moyenne ([1, 2, 3, 4, 5]));

console.log(moyenne ([100, 101, 102]));
