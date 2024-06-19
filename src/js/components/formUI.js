import buttonUI from"./buttonUI.js"
import inputUI from"./inputUI.js"
// je définis ici la fonction form qui a pour parametre data et  qui cree la structure du formulaire
// je stocke les valeurs des clés de data dans des constantes dont les noms sont email, paswword,submit et reset
// je définis la structure html de mon formulaire en utilisant les fonctions-components utiles que j'ai défini

const formUI =function(data){
    const {email,password} = data.inputs
    const {submit,reset} = data.buttons
   
    // je récupère la définition du id inscrite dans data et placer les components que je veux dedans en les mettant dans des balises que je choisi : <section> par exemple
    // je dois faire attention à placer les arguments (issus de data)  des fonctions components dans le même ordre que les parametres dans ces fonctions
    return(
        `
        <form id="${data.formId}">
        <section>
        ${inputUI(email.id,email.placeholder,email.type)}
        ${inputUI(password.id,password.placeholder,password.type)}
         </section>  
         <section>
         ${buttonUI(submit.content,submit.id,submit.type)}
         ${buttonUI(reset.content,reset.id,reset.type)}
         </section> 

         </form>

        `)
}
export default formUI