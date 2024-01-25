import React from "react";
import img from "../assets/liftarn_French_lawyer_early_20th_century. 1.svg"

const RendezVous = () => {
    return(
        <section className="RendezVous" id="rendev-vous">
            <h1 className="special">Rendez-Vous</h1>
            <div className="content">
                <div className="image">
                    <img src={img} alt="laywer" className="max-md:mx-[auto]"/>
                </div>
                <form action="" className="">
                    <input type="text" placeholder="Nom d'avocat" />
                    <input type="date" />
                    <input type="time" />
                    <select value={"TYPE DE RENDEZ-VOUS"}>
                        <option value="">Enligne</option>
                        <option value="">Presentielle</option>
                    </select>
                    <input type="text" placeholder="Votre Nom Complet" />
                    <input type="email" placeholder="Votre Adresse mail (pour recevoir la confirmation)" />
                    <textarea  placeholder="Les détails sur le rendez-vous"></textarea>
                    <input type="submit" value="VALIDER" />
                </form>
            </div>
        </section>
    )
}

export default RendezVous