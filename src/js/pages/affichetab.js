import UsersService from "../services/UsersService.js";
// changer l'adresse dans Userservice pour aller sur l'autre "base locale" user 2
import elementTab from "../components/elementTab.js"

const Tableau = await UsersService.getUsers()
element1=Tableau[0];
console.log(element1);
return(`
    <main classe ="main login_main">
    ${elementTab(element1)}
    </main>

    `);