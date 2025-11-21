 function calcDistance(pointA, pointB) {
  let x1 = pointA[0];
  let y1 = pointA[1];
  let x2 = pointB[0];
  let y2 = pointB[1];

  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

let A = [1, 1];
let B = [2, 2];
console.log("Distance entre A et B :", calcDistance(A, B).toFixed(2));

A = [-2, 2];
B = [2, -2];
console.log("Distance entre A et B :", calcDistance(A, B).toFixed(2));
