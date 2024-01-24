import React from "react";
import img from '../assets/group.svg'
import img1 from '../assets/question.png'

const Question = () => {
    return(
        <section className="Question" id="question">
            <h1 className="special">Poser Une question</h1>
            <form action="">
                <input type="text" placeholder="Titre du question" />
                <input type="text" placeholder="Nom Complet"/>
                <select>
                    <option value="">Administrateur</option>
                    <option value="">Avocat</option>
                </select>
                <input type="text" placeholder="Nom de Distinataire"/>
                <textarea placeholder="Le conteunus du Question"></textarea>
                <button type="submit">Valider <span></span></button>
            </form>
            <img src={img1} alt="icons of question mark" />
            <img src={img} alt="vectors" />
        </section>
    )
}

export default Question