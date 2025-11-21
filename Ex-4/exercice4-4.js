
let Learner = ["thelichkinge","ethan","Hetaska","Enrique2802","Trollman341","Kisame25021990","Léandre Mpore-Ghozzo", "Abdoul", "Aucouturier Jason","xam1712","Dodo-31","MattWare","Thomas","lalbecade","Gaetan","Dimitri Gillain","TyberCusa","Johan"];

function pickLearner(inputAr, n) {
    let result = [];
    for (let i = 0; i < n; i++) {
    let random = Math.floor(Math.random() * inputAr.length);
        result.push(inputAr[random]);

    } 
    return result

} 

let selected = pickLearner(Learner, 4);
console.log("apprenant", selected);


















