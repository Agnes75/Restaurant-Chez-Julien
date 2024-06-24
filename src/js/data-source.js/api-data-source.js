class ApiDataSource {
// cette classe regroupe des méthodes de récupération et d'envoi de data 
//et les rend utilisables par différents services en charge de telle ou telle data
// et visant des url distinctes de la Bdd
//la 1ere méthode  get (statique car sur une classe sans constructor )  
// récupère la data dans une variable js Result et admet un paramètre url qui indique où trouver cette data, 
//ce lieu figurera en dur dans le fichier de l'appli propre au service qui nous interesse
    static async get(url){
        // axios  (autre façon de faire des call API)
        // FETCH est LA méthode utilisée pour faire des requêtes HTTP , la méthode la plus usitée 
        // pour communiquer avec des services distants

        /* gestion de la requête */
        // le resultat est en format json nous devons le parser en JavaScript 
        // pour pouvoir le manipuler dans le code
        // await signifie qu'on attend le résultat de fetch pour retourner result 
        const result = await fetch(url, {
                method: "GET"})
        // la méthode .json() permet  de faire passer le JSON en javascript pour qu'il soit utilisable dans notre code
        const jsResult = await result.json() 
        // NB :pour appliquer une méthode à une variable qui attend 
        //on doit aussi indiquer qu'on attend
        return jsResult
    }

    static send(url, data, method){
        // cette fonction send permet d' utiliser fetch pour envoyer data
        // avec une des méthodes d'envoi possibles : put, patch, post
        // ces data sont envoyées à une url précise de la base de données
        // l'objet en second parametre de fetch a pour propriétés 
        // des tas d'options potentielles dont on choisit de définir quelquesunes
        // dont une indispensable le body qui prend pour valeur  la data formatée en json
        fetch(url, {
            method: method,
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(data) // data formatée en json 
                   })

    }
}

export default ApiDataSource