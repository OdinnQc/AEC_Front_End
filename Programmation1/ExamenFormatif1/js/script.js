/* script.js */
/* Programmé par Lucas Comtois */
/* 2019-11-28 */
var Controleur;
var Moteur;
var Camera;
var Matrice;
var Filament;
var Batterie;
var PrixControleur;
var PrixCamera;
var PrixMatrice;
var PrixMoteurs;
var SousTotal;
var Total;
var AvecCam;
var AvecMatrice;

Filament = 20;
Batterie = 15;

Controleur = prompt("Quel modèle de RaspBerry voulez- vous ? Pi ou Pi Zero");
Moteur = Number(prompt("Combien de moteurs voulez-vous ? min ; 2 max : 24"));
if (Moteur < "2"){
    Moteur = Number(prompt("Combien de moteurs voulez-vous ? J'ai dit minimum 2"));
}
if (Moteur > "24"){
    Moteur = Number(prompt("Combien de moteurs voulez-vous ? J'ai dit maximum 24"));
}
Camera = prompt("Voulez vous une caméra USB : O ou N");
Matrice = prompt("Voulez-vous une matrice de LEDS pour les yeux : O ou N");

if (Controleur === "Pi"){
    PrixControleur = 55;
}
else if (Controleur === "Pi Zero"){
    PrixControleur = 55;
}
if (Camera === "O"){
    PrixCamera = 35;
    AvecCam = ", avec une caméra USB";
}
else {
    PrixCamera = 0;
    AvecCam = ", sans une caméra USB";
}
if (Matrice === "O"){
    PrixMatrice = 10;
    AvecMatrice = ", avec une matrice LED";
}
else {
    PrixMatrice = 0;
    AvecMatrice = ", sans une matrice LED";
}
PrixMoteurs = Moteur*5;
SousTotal = PrixControleur+PrixMoteurs+PrixCamera+PrixMatrice+Filament+Batterie;
Total = SousTotal*1.15;
document.write("Vous avez choisi une Raspberry " + Controleur + ", avec " + Moteur + " moteurs" + AvecCam + AvecMatrice + ". L'ensemble viens avec un filament 3D et une batterie USB. Pour sous total avant livraison de " + SousTotal + ", avec la livraison ça monte à " + Total);