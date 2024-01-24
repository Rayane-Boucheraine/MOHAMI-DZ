import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
    return(
        <section className="hero" id="acceuil">
            <div>
                <h1>Trouvez l'avocat qui vous convient</h1>
                <p>Trouvez un avocat simpolement et sans inscription</p>
            </div>
            <form action="">
                <div>
                    <input type="text" placeholder="Votre besoin ?"/>
                    <input type="text" placeholder="Votre ville ?"/>
                    <input type="text" placeholder="spécialité ?"/>
                </div>
                <div>                     
                    <input type="text" placeholder="Langue ?"/>
                    <input type="number" placeholder="Classement(40-1000)?" />
                </div>
                <Link to="/Cabinets"><button type="submit"><i class="fa-solid fa-magnifying-glass"></i></button></Link>
            </form>
        </section>
    )
}

export default Hero