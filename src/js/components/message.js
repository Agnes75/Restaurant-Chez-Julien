import card from "./card.js"
import paragraph from "./paragraph.js"

const message = function(data){
    return(
        `
            <section class="message">
                ${card(data.card)}
                <section>
                    ${paragraph(data.content)}
                </section>
            </section>
        
        `
    )
}

export default message