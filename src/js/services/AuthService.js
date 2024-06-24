import UsersService from "./UsersService.js";
// la class AuthService va permettre via sa méthode de vérifier qu'un visiteur 
//  est dans la base propre au service visé.
//  toutes les méthodes ici regroupées ont pour  parametre commun :
//  "l'objet" par lequel le visiteur s'est identifié .
// et comme il s'agit uniquement de vérifier le droit d'accès direct
//  la class Service visée peut par contre varier 
// sur laquelle on veut vérifier le droit d'accès
//  elle va regarder  la bdd UsersService accessible 
//  via la méthode getUsers de la Classe UsersService

class AuthService {
//.find() : une méthode de tableau qui  permet de trouver et de retourner 
//le premier élément du tableau qui satisfait une condition donnée 
//par une fonction de test, si rien n'est trouvé c'est undefined
   
    static async login(data){
        // pour la connexion sous-entendu il existe déjà en bdd
        const users = await UsersService.getUsers()
        if(users.length){
            const user = users.find((us) => us.email == data.email)
            if(user){
                console.log('user', user)
                if(user.password == data.password) {
                    return true
                } else {
                    return false
                }
             
            } else {
                return false
            }
        } else {
            return false
        }

    }

    static async register(){
        // inscription il n'existe donc pas en bdd

    }

    static logout(){
        // il se déconnecte de sa session
    }



}

export default AuthService