let age = 21; //test la logique

if (age < 18) {
    console.log("pas de categorie");
} else if (age <= 19) {
    console.log("junior");
} else if (age <= 22) {
    console.log("espoir");
} else if (age <= 39) {
    console.log("senior");
} else {
    console.log("vétéran");
}

const message = "la catégorie est "; // mani"re la plus simple de coder une logique
let catégorie = "";

if (age < 18) {
    catégorie = ("pas de categorie");
} else if (age <= 19) {
    catégorie = ("junior");
} else if (age <= 22) {
    catégorie = ("espoir");
} else if (age <= 39) {
    catégorie = ("senior");
} else {
    catégorie = ("vétéran");
}
console.log(message + catégorie);
