import section from "../components/section.js";

class NotificationService {
  
  constructor() {
    // je vais instancier cette classe une fois que le script decreation du layout notification 
    //se sera exécuté, et récupérer son élément  et l'on pourra alors
    //en fait executer sa méthode d'insertion de message .
    this.notifElement = document.getElementById("notification");
  }
// je vais ensuite créer une structure html de message sur cet element aside 
//en lui créant un contenu : on alimente une section contenue dans aside 
//le 1er parametre de set message est est le message lui même , 
//le 2d est la classe css
//on observe cet ordre   dans l'alimentation  de la fonction section
  setMessage(val, type) {
    this.notifElement.innerHTML = section(
      `notification-animation notification-animation--${type}`,
      val,
    );
  }
}
// il va falloir passer des arguments à  setMessage selon des conditions 
//par exemple celle figurant dans AuthService
export default NotificationService;

//notification-animation : Une classe CSS de base pour les notifications, 
//appliquée de manière statique.
//notification-animation--${type} : Une classe CSS dynamique, 
//où ${type} est une variable qui sera remplacée par une valeur spécifique.