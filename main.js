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

const container =document.getElementById('container')

window.onpopstate= function(){
    console.log("changement in url")
    routerPush(window.location.hash)
}




const routerPush = function(hash){

    window.history.pushState({}, "", window.location.origin + hash);
    
    container.innerHTML = "";
    container.innerHTML += header();

    if(hash == ""){
        console.log('La page racine');
        container.innerHTML += landingUI();
    } 

    if(hash == "#login"){
      
        container.innerHTML += loginUI();
        new LoginContainer();
    }
}

routerPush(window.location.hash);