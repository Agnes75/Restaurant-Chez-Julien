import buttonUI from"./buttonUI.js"
import inputUI from"./inputUI.js"
// je définis ici la fonction form qui a pour parametre data et  qui cree la structure du formulaire
// je stocke les valeurs des clés de data dans des constantes dont les noms sont input1, paswword,button1 et button2
// je définis la structure html de mon formulaire en utilisant les fonctions-components utiles que j'ai défini

const formUI =function(data){
    const {input1,input2} = data.inputs
    const {button1,button2} = data.buttons
   
    // je récupère la définition du id inscrite dans data et placer les components que je veux dedans en les mettant dans des balises que je choisi : <section> par exemple
    // je dois faire attention à placer les arguments (issus de data)  des fonctions components dans le même ordre que les parametres dans ces fonctions
    return(
        `
        <form id="${data.formId}">
        <section>
        ${inputUI(input1.id,input1.placeholder,input1.type)}
        ${inputUI(input2.id,input2.placeholder,input2.type)}
         </section>  
         <section>
         ${buttonUI(button1.content,button1.id,button1.type)}
         ${buttonUI(button2.content,button2.id,button2.type)}
         </section> 

         </form>

        `)
}
export default formUI;