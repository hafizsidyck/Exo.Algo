// pour ecrire de 1 à 20

const nbLignes = 20;
let str = "";

for (let i = 1; i <= nbLignes; i++) {
    console.log(i);
}

// pour ecrire 1 au nombre de la ligne jusqu'a 20
// concevoir un algo qui imprimer pour n donné

for (let i = 1; i <= nbLignes; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {

        // construire une chaine de caractère qui concatène les valeurs de j

        str = str + j + " ";  //str = "1 2 3 "

    }
    console.log(str); //str = "1 2 3 "
}