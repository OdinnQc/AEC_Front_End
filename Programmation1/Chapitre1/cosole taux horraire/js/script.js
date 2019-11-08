/* cree pas Lucas Comtois */

//trouver les variables
var salaire;
var heure;
var paye;

//demandez le nomdre de gallons
salaire = Number(prompt("Combien de l'heure"));
heure = Number(prompt("Combien d'heure"));

//on fait le calcule
paye = salaire * heure;

//on affiche le résultat
console.log("Vous receverez " + paye + "$ brut");