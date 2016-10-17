/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var casesMax;
$(document).ready(function() {
    do {
        var chiffre = prompt('Entrez un chiffre pair :');
        var mod = chiffre % 2;
        if (mod == 0) {
            $('.load').attr('hidden', 'hidden');
        }
    } while (mod !== 0);
    var compteur;
    var tabReponses = [];
    casesMax = chiffre * chiffre;
    for (var i = 0; i < chiffre; i++) {
        $(".plateau").append("<tr>");
        for (var j = 0; j < chiffre; j++) {
            compteur = compteur + 1;
            $(".plateau").append("<td><input class='bouton' id='case" + i + j + "' type='button' value='???' onclick='boutonClic(\"" + i + j + "\");'/></td>");
        }
        $(".plateau").append("</tr>");
    }
});
var premierBouton = true;
var choix1;
var choix2;
var casesCochees = 0;
var coups = 0;
function boutonClic(id){
    if (premierBouton === true) {
        choix1 = document.getElementById("case"+id);
        premierBouton = false;
    } else {
        choix2 = document.getElementById("case"+id);
        coups = coups +1;
        comparerCases(choix1, choix2);
        premierBouton = true;
    }
}
function comparerCases(choix1, choix2){
    $(choix1).val("X");
    $(choix2).val("X");
    $(choix1).attr('disabled', 'disabled');
    $(choix2).attr('disabled', 'disabled');
    casesCochees = casesCochees +2;
    if (casesCochees === casesMax){
        alert("Fin !");
        alert("Nombre de coups : "+coups);
    }else{
        
    }
}

