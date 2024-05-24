- Ecrire un algorithme qui calcule la somme de valeurs stockées dans un tableau.


VAR tableau: entier, somme:entier

DEBUT

tableau <- [2, 5, 3, 10, 99, 1, 80] 
somme <- 0
POUR i ALLANT DE 0 A LONGUEUR tableau - 1 PAS DE 1 FAIRE
    somme <- somme + tableau [i]
FIN POUR
afficher somme

FIN

- Ecrire un algorithme qui permet de déterminer la plus grande des valeurs stockées dans un tableau.

VAR tableau: entiers, max:entier

DEBUT

tableau <- [2, 5, 3, 10, 99, 1, 80] 
max <- tableau[0]
POUR i ALLANT DE 0 A LONGUEUR tableau - 1 PAS DE 1
    SI max < tableau[i] ALORS
        max <- tableau[i]
    FIN SI
FIN POUR

afficher max

FIN


- Ecrire un algorithme qui permet de déterminer la plus petite des valeurs stockées dans un tableau.

VAR tableau: entiers, min:entier

DEBUT

tableau <- [2, 5, 3, 10, 99, 1, 80] 
min <- tableau[0]
POUR i ALLANT DE 0 A LONGUEUR tableau - 1 PAS DE 1 FAIRE
    SI tableau[i] < min ALORS
        min <- tableau[i]
    FIN SI
FIN POUR

FIN


