import ApiDataSource from "../data-sources/api-data-source.js"
// On importe ApiDataSource dans l'optique d'utiliser ici ses méthodes dans la classe UsersService
// avec donc comme point commun d'utilisation : l'url de la baseusers.
//comme toutes ces méthodes de consultation de bdd appellent fetch 
// qui retourne une promesse on doit toujours mettre await devant leur valeur de retour
class UsersService {
    
// une classe qui regroupe un ensemble de méthodes aux noms explicites
//manipulant la base de données users en vue de tel ou tel but 
    static async getUsers(){
        // l'administrateur recupère toutes les informations utilisateurs
        // par un get sur l'url de base de données
        // getusers a juste pour fonction d'appeler la méthode get 
        //de la classe ApiDataSource sur l' url de la base users
        
        return await ApiDataSource.get("./src/js/data-sources/users.json")
    }

    static getUserById(id){
     
    } 

    static createUser(data){

    }

    static deleteUserById(id){

    }

    static updateUserById(id){

    }




}

export default UsersService