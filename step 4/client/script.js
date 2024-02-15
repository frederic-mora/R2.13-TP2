/*  Q1

    Complétez la fonction requestMenu pour que le données soient
    affichées sur la page lorsqu'on les obtient. Attention, regardez bien
    dans la console le format de données que vous obtenez pour transmettre
    les bonnes informations. Faites des appels à requestMenu depuis la console
    de votre navigateur pour tester.

*/

/*  Q2

    Modifiez index.html pour que les bons appels à requestMenu se fassent 
    lorsque l'utilisateur clique sur un des boutons de l'interface.
*/

/*  requestMenu

  . paramètre j : le nom d'un jour de la semaine 

  La fonction demande au serveur les données au format JSON sur le menu du jour j.
  Quand les données sont reçues et lues, on les affiche avec la fonction V.renderMenu.

*/
let requestMenu = async function(j){
    // attente de la réponse à la requête demandant les données d'une collection de Lego
    let response = await fetch("../server/script.php?jour=" + j);
    // attente de l'extration des données en format json de la réponse à la requête
    let data = await response.json();

    console.dir(data);
    //TODO
  }

// V : la vue de l'application
let V = {};


/*  V.renderMenu

    paramètre menu : un objet contenant les informations sur un menu (entrée plat dessert)

    La fonction formate le template HTML définit dans index.html et insère le tout dans la div de classe 'menu'

    TODO : fonction à compléter (ainsi que le template dans index.html)
*/
V.renderMenu = function( menu ){
    let html = document.querySelector('template').innerHTML;
    html = html.replace('{{entree}}', menu.entree);
    html = html.replace('{{plat}}', menu.plat);
    html = html.replace('{{dessert}}', menu.dessert);
    document.querySelector('.menu').innerHTML = html;
}
