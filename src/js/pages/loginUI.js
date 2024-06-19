import formUI from"../components/formUI.js";
//loginUI permet de définir la structure de la data correspondant  au formulaire 
//loginUI ecrit le code html en placant le component de formUI
//loginUI fait appel au composant form qu'il importe et alimente par data puis il le place dans le code Html que l'on veut écrire à l'interieur dune balise main et lui passe comme argument data
//dans une balise <main> dont la classe est définie dans le fichier main.js 
const loginUI=function(){
    const data = {
        formId:"login-form",
        inputs:{
          email:{
            id : "email",
            type :"email",
            placeholder:"Entrez votre email",
        },
          password:{
            id : "password",
            type : "paswword",
            placeholder:"Entrez votre mot de passe",
        },
        },
        buttons :{
            reset:{
                type :"reset",
                ide :"reset",
                content :"Réinitialiser",
            },
           submit: {
            type: "submit",
            id :"submit",
            content :"Valider",
           },
        },
    };
        return(`
        <main classe ="main login_main">
        ${formUI(data)}
        </main>

        `);
        
};
export default loginUI;

