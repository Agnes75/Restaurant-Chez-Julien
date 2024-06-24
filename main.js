// on utilise la classe qu'on a défini pour récupérer, suite à l'évenement onsubmit,des valeurs entrées par les utilisateurs
// et loginUI pour la structure de la page définie par date faisant figurer le formulaire créé 
//précedemment avec ses components , formulaire alimenté par la data
// window.location hash donne le lieu où l'on interagit avec l'utilisateur : formulaire de connexion, formulaire  de choix de produits,etc...
// la fonction routerpush à partir de son argument window.location hash va vider le container, 
//lui ajoute toujours le même header qui reste le même de page en page 
//puis remplit le container selon où l'on est pour correspondre à la fonctionnalité de la page vue par l'utilisateur
// quand on est dans une page de login  on fait une nouvelle instance de la classe LoginContainer,
// cette nouvelle instance a une propriété onSubmit qui récupère les valeurs entrées dans le formulaire et les affiche

import landingUI from "./src/js/pages/landingUI.js";
import LoginContainer from "./src/js/containers/LoginContainer.js";
import loginUI from "./src/js/pages/loginUI.js"
import header from "./src/js/layouts/header.js";
//import notification from "./src/js/layouts/notification.js" 
//import NotificationService from "./src/js/service/NotificationService.js";
//pour le moment on n'a pas encore achevé la construction de notification ou d'affichetab 
//import affichetab from "./src/js/pages/affichetab.js"
const container =document.getElementById('container')

// onpopstate est un évenement  sur la fenêtre auquel on associe le déclenchement de la fonction de routage
// on change d'Url grâce aux lien dans nav qui ajoutent une ancre à la fin de l'url de la page d'accueil
// ce qui se produit : c'est le routage vers l'une ou l'autre des versions de la page qu'on doit afficher
// en cohérence avec le lien de navigation activé


// Dans le contexte des pages web et de la navigation, un "state" (ou état) fait référence 
//à un objet que l'on peut associer à une entrée dans l'historique de navigation du navigateur.
// ces objets permettent de reconstruire de manière assez détaillée les habitudes de navigation d'un utilisateur et sont souvent utilisés par les navigateurs pour des fonctionnalités telles que 
//'historique de navigation, les suggestions d'URL, et la reprise de sessions de navigation précédentes.ce pourrait être une appli
// Ce mécanisme permet de stocker des informations spécifiques à l'état d'une page 
 //ou d'une application sans recharger la page

// window.location.origine est la page sur laquelle on atterrit quand on cherche le site
//window.history.pushState : Cette méthode est utilisée pour ajouter une entrée à l'historique
// du navigateur. Elle prend trois arguments :Un état (ici un objet vide {}), 
//qui est un objet associé à la nouvelle entrée de l'historique. 
//Cet objet peut contenir des informations d'état spécifiques à l'application.
//Un titre (ici une chaîne vide ""), qui est ignoré par la plupart des navigateurs actuels et la nouvelle url 
//window.location.origin + fragmentURL 

const routerPush = function(hash){

   // window.history.pushState({}, "", window.location.origin + hash);
   //la ligne précédente est un comportement par défaut du navigateur
   // à noter : ce pushState ne parait pas indispensable au fonctionnement de l'application 
   // ni à la navigation avant arriere pourquoi? , quelle utilité?
   // la chaine vide en 2eme parametre correspond à un titre d'entrée dans l'historique du navigateur
   //qui dans les faits n'est jamais utilisé d'où la chaine vide
   //pourtant : la méthode window.history.pushState a comme  1er paramètre stateObject 
   // censé être utilisé pour stocker des données qui seront associées à une entrée 
   //spécifique dans l'historique du navigateur, permettant de restaurer cet état ultérieurement, 
   //par exemple, lorsqu'un utilisateur navigue en arrière ou en avant dans l'historique du navigateur.
   //Vous pouvez utiliser le stateObject pour des scénarios plus complexes, comme la gestion de l'état d'une application
   //à page unique (SPA), le suivi de l'état des formulaires, la conservation de filtres appliqués, etc.
    container.innerHTML = "";
    container.innerHTML += header();
    //container.innerHTML += notification()

    switch(hash){
        case "" :
        console.log('La page racine ou home page');

        container.innerHTML += landingUI();
        //affichetab();
        break;

        case "#login":
        console.log("case :login page")
        container.innerHTML += loginUI();
        console.log('login interface created')
        new LoginContainer();
        console.log( "login business logic running")
    
        break;
}
}
routerPush(window.location.hash);
//pour l'URL http://example.com/page#section2, window.location.hash renverra #section2 c'est à dire le hash
//hash est une propriété de window.location comme .href, .pathnamne (adresse de la page qui abrite l'ancre hash), 
//.search (qui contient la requête d'url qui permet de trouver l'url de l'ancre) 

window.onpopstate= function(){
    console.log("changement in url")
    routerPush(window.location.hash)}
    // ici le hash dépend de l'evenement onpopstate qui change le hash