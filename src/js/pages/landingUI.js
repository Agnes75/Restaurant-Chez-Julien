import buttonUI from "../components/buttonUI.js"

// determiner ce que signifie card qui correspond plutot a du style
const landingUI = function(){

    // //const messageData = {

    //     card: {
    //         imageUrl : "https://cdn.pixabay.com/photo/2023/08/03/09/30/stunning-8166666_1280.jpg",
    //         imageAlt : "",
    //         content: "Bienvenue Chez Julien"
    //     },

    //     content: "N'hésitez pas à découvrir nos plats"
    // }
;

    return(
        `
            <main class="main landing__main">
                
                <section>
                    ${buttonUI('landing-button','button', 'Nos produits')}
                </section>
             
         
            

            </main>
        
        `
    )
};

export default landingUI;