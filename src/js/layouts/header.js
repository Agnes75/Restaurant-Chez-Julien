import nav from "../components/nav.js";

const header = function(){

    return(
        `
            <header class="header app__header">
                <a href="/">
                    Chez Julien
                </a>
                ${nav()}
            </header>
        `
    )
};

export default header;