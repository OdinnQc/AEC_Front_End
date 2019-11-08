/* cree pas Lucas Comtois */

//trouver les variables
var nom;
var prix;
var detail;
var cash;

//demandez le nomdre de gallons
nom = prompt("Quel est le nom de l'article ?");
prix = Number(prompt("Quel est le prix de l'article ?"));

//on fait le calcule
detail = prix * (66 / 100);
cash = prix - detail;

//on affiche le résultat
console.log("Pour le produit " + nom + ", votre marge de profit " + cash + " avec un prix au détail de " + detail + "$");