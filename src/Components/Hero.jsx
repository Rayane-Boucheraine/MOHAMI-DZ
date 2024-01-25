import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
    return(
        <section className="hero" id="acceuil">
            <div className="max-xl:!mb-[60px] max-xl:!mx-[0]">
                <h1 className="max-xl:w-[80%] max-xl:!mx-[auto]">Trouvez l'avocat qui vous convient</h1>
                <p className="max-xl:w-[80%] max-xl:!mx-[auto]">Trouvez un avocat simpolement et sans inscription</p>
            </div>
            <form action="" className="mx-[auto]">
                <div className="max-xl:flex max-xl:flex-col max-xl:justify-center max-xl:items-center">
                    <input className="max-xl:!w-[500px] max-md:!w-[380px]" type="text" placeholder="Votre besoin ?"/>
                    <input className="max-xl:!w-[500px] max-md:!w-[380px]" type="text" placeholder="Votre ville ?"/>
                    <input className="max-xl:!w-[500px] max-md:!w-[380px]" type="text" placeholder="spécialité ?"/>
                </div>
                <div className="max-xl:flex max-xl:flex-col max-xl:justify-center max-xl:items-center">                     
                    <input className="max-xl:!w-[500px] max-md:!w-[380px]" type="text" placeholder="Langue ?"/>
                    <input className="max-xl:!w-[500px] max-md:!w-[380px]" type="number" placeholder="Classement(40-1000)?" />
                </div>
                <Link to="/Cabinets"><button type="submit" className="max-xl:!top-[230px] max-xl:!right-[25%] max-md:!right-[6%]"><i class="fa-solid fa-magnifying-glass"></i></button></Link>
            </form>
        </section>
    )
}

export default Hero