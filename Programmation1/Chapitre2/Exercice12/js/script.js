/* script.js */
/* Programmé par Lucas Comtois */
/* 2019-11-23 */
//trouver les variables
var sexe;
var age;
var valeur;
var tarif;

//demandez le nomdre de gallons
sexe = prompt("Vous êtes H ou F");

//on fait la vérif
if (sexe.toUpperCase() == 'H'){
    age = Number(prompt("Votre age"));
    valeur = Number(prompt("Valeur du véhicule"));
    if (age < '16'){
        //on affiche le résultat
        alert("Trop jeune pour le permis");
    }
    else if (age >= '16' && age <= '25'){
        tarif = valeur*0.05;
        //on affiche le résultat
        alert("Taux annuel de " + tarif);
    }
    else if (age > '25'){
        tarif = valeur*0.03;
        //on affiche le résultat
        alert("Taux annuel de " + tarif);
    }
}
else if (sexe == 'F'){
    age = Number(prompt("Votre age"));
    valeur = Number(prompt("Valeur du véhicule"));
    if (age < '16'){
        //on affiche le résultat
        alert("Trop jeune pour le permis");
    }
    else if (age >= '16' && age <= '25'){
        tarif = valeur*0.03;
        //on affiche le résultat
        alert("Taux annuel de " + tarif);
    }
    else if (age > '25'){
        tarif = valeur*0.02;
        //on affiche le résultat
        alert("Taux annuel de " + tarif);
    }
}
else{
    //on affiche le résultat
    alert("J'ai dit H ou F");
}
