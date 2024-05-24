//- Ecrire un algorithme qui calcule la somme de valeurs stockées dans un tableau.

const tableau = [2, 5, 3, 10, 99, 1, 80];
let somme = 0;

for(let i =0; i < tableau.length; i++){
    somme = somme + tableau[i];
}
console.log(somme); //algo qui permet de calculer somme des paniers 



//Ecrire un algorithme qui permet de déterminer la plus grande des valeurs stockées dans un tableau.

let max = tableau[0];
for (let i = 1; i < tableau.length; i++){
    if(tableau[i] > max){
        max = tableau[i]
    }
}
console.log("Max :", max);


//- Ecrire un algorithme qui permet de déterminer la plus petite des valeurs stockées dans un tableau.

let min = tableau[0];
for (let i = 1; i < tableau.length; i++) {
    if (tableau[i] < min) {
        min = tableau[i];
    }
    
}

console.log("Min : ", min);