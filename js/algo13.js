const tableau = [45, 23, 55, 1, 23, 42, 99, 101, 200, 42, 42, 42, 0, 1, 3, 69, 77, 5, 5, 6]
const valeurRecherchee = 42
let nboccurences = 0;

for (let i = 0; i < tableau.length; i++) {
    if (tableau[i] == valeurRecherchee) {
        nboccurences++;
        
    }
}
console.log(`Nombre d'occurences de ${valeurRecherchee} : ${nboccurences}`);