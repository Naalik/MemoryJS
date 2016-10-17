/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var compteur = 0;
var premierBouton = true;
var choix1;
var choix2;
var reponse = $(document).ready(function chargePlateau() {
    do {
        var chiffre = prompt('Entrez un chiffre pair :');
        var mod = chiffre % 2;
        if (mod == 0) {
            $('.load').attr('hidden', 'hidden');
        }
        ;
    } while (mod !== 0);
    for (var i = 0; i < chiffre; i++) {
        $(".plateau").append("<tr>");
        for (var j = 0; j < chiffre; j++) {
            compteur = compteur + 1;
            $(".plateau").append("<td><input class='bouton' id='case" + i + j + "' type='button' value='???' onclick='boutonClic(\"" + i + j + "\", reponse);'/></td>");
            if (j == (chiffre - 1)) {
                reponse = reponse + "{\"id\":  " + compteur + ", \"caseid\": \"" + i + j + "\", \"couleur\": \"??\"}";
            } else {
                if (i == 0 && j == 0) {
                    reponse = reponse + "{\"id\": " + compteur + ", \"caseid\": \"" + i + j + "\", \"couleur\": \"???\"},";
                } else {
                    reponse = reponse + "{\"id\": " + compteur + ", \"caseid\": \"" + i + j + "\", \"couleur\": \"????\"},";
                }
            }
        }
        $(".plateau").append("</tr>");
    }
    ;
    reponse = reponse + "]}";
    alert(reponse);
    reponse = JSON.parse(reponse);
    return reponse;

});
function boutonClic(id, reponse) {
    alert(id);
    if (premierBouton == true) {
        choix1 = id;
        premierBouton = false;
    } else {
        choix2 = id;
        comparerCases(choix1, choix2, reponse);
        premierBouton = true;
    }
}
function comparerCases(choix1, choix2, reponse) {
    var couleurChoix1;
    var couleurChoix2;
    alert(reponse);
    alert(reponse.length);
    for (var i = 0; i < reponse.length; i++) {
        if (reponse[i].caseid === toString(choix1)) {
            alert(reponse[i].couleur);
            couleurChoix1 = reponse[i].couleur;
        } else {
            if (reponse[i].caseid === toString(choix2)) {
                alert(reponse[i].couleur);
                couleurChoix2 = reponse[i].couleur;
            } else {

            }
        }
    }
    alert(couleurChoix1 + " " + couleurChoix2);
    if (couleurChoix1 === couleurChoix2) {
        $('#case' + choix1).val(couleurChoix1);
        $('#case' + choix2).val(couleurChoix2);
        $('#case' + choix1).attr('disabled', 'disabled');
        $('#case' + choix2).attr('disabled', 'disabled');
    } else {
        alert("Raté");
    }
}
