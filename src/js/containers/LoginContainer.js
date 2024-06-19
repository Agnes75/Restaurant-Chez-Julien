import formUI from "../components/formUI"

// pour utiliser class il faut deja que sur la page on ait un formulaire identifié par login-form
class LoginContainer{
constructor(){
    // permet de construire un prototype de class  qui définit l'action associée à la propriété
    //onsubmit du formulaire  , action définie  par une fonction 
    //ayant pour parametre l'evenement, c'est à dire se déroulant quand l'evenememt onsubmit 
    //survient  et appelant une fonction onSubmit sur la classe
    const formUI =documentgetElementById('login-form')
    const self = this
    // dans l'écriture ci dessous e est automatiquement onsubmit
    formUI.onsubmit = function(e){

        self.onSubmit(e)    
}
// self a une propriété onSubmit dont la valeur dépend de l'évenement e produit à l'instant t
1// cette "valeur" c'est la récupération des valeurs entrées par l'utilisateur (?)
// e= onsubmit du formulaire

}
// ce tte fontion Onsubmit permet pour un evement onsubmit du  formulaire  de définir une instance de la classe 
//qui correspond à la récupération des valeurs de email et password entrées dans le formulaire.

onSubmit(e){
e.preventDefault()
// preventDefault() permet d'empecher la réinitialisation automatique
// par défaut de la page qui se déroule suite à  l'évement onsubmit du formulaire
// reset en revanche est une réinitialisation volontaire du formulaire
const email =documentgetElementById('email');
const password =documentgetElementById('password');
const emailValue =email.value
const passwordValue =password.value
console.log(emailValue,passwordValue)
}

}
export default LoginContainer