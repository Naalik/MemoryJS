/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var jsonReponse = "";
var compteur = 0;
var premierBouton = true;
var choix1;
var choix2;
function start() {
    do {
        var chiffre = prompt('Entrez un chiffre pair :');
        var mod = chiffre % 2;
        if (mod == 0) {
            chargePlateau(chiffre);
            $('.load').attr('hidden', 'hidden');
        }
        ;
    } while (mod !== 0);
}
function chargePlateau(chiffre, jsonReponse) {
    for (var i = 0; i < chiffre; i++) {
        $(".plateau").append("<tr>");
        for (var j = 0; j < chiffre; j++) {
            compteur = compteur + 1;
            $(".plateau").append("<td><input class='bouton' id='case" + i + j + "' type='button' value='???' onclick='boutonClic(\"" + i + j + "\");'/></td>");
            if (j == (chiffre - 1)) {
                jsonReponse = jsonReponse + "{\"id\":  " + compteur + ", \"caseId\": \"" + i + j + "\", \"couleur\": \"??\"}";
            } else {
                if (i == 0 && j == 0) {
                    jsonReponse = jsonReponse + "{\"reponse\": [{\"id\": " + compteur + ", \"caseId\": \"" + i + j + "\", \"couleur\": \"???\"},";
                } else {
                    jsonReponse = jsonReponse + "{\"id\": " + compteur + ", \"caseId\": \"" + i + j + "\", \"couleur\": \"????\"},";
                }
            }
        }
        $(".plateau").append("</tr>");
    }
    ;
    jsonReponse = jsonReponse + "]}";
    alert(jsonReponse);
    jsonReponse = toString(jsonReponse);
    //jsonReponse = JSON.parse(jsonReponse);
}
function boutonClic(id) {
    alert(id);
    if (premierBouton == true) {
        choix1 = id;
        premierBouton = false;
    } else {
        choix2 = id;
        comparerCases(choix1, choix2);
        premierBouton = true;
    }
}
function comparerCases(choix1, choix2) {
    var couleurChoix1;
    var couleurChoix2;
    
//    $.getJSON(jsonReponse, function (data) {
//        var tabReponses = data.reponse;
    for (var i = 0, len = jsonReponse.length; i < len; i++) {
        if (jsonReponse[i].caseID === choix1) {
            alert(jsonReponse[i].couleur);
            couleurChoix1 = jsonReponse[i].couleur;
        } else {
            if (jsonReponse[i].caseID === choix2) {
                alert(jsonReponse[i].couleur);
                couleurChoix2 = jsonReponse[i].couleur;
            }
        }
    }
//        jsonReponse.forEach(function (elem) {
//            if (elem.caseID == choix1) {
//                couleurChoix1 = elem.couleur;
//            } else {
//                if (elem.caseID == choix2) {
//                    couleurChoix2 = elem.couleur;
//                }
//            }
//        });
alert(couleurChoix1+" "+couleurChoix2);
    if (couleurChoix1 == couleurChoix2) {
        $('#case' + choix1).attr('value', couleurChoix1);
        $('#case' + choix2).attr('value', couleurChoix2);
        $('#case' + choix1).attr('disabled', 'disabled');
        $('#case' + choix2).attr('disabled', 'disabled');
    } else {
        alert("Raté");
    }
//    });
}
