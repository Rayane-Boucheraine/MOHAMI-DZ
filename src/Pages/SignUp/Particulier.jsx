import React from "react";
import img from '../../assets/google.png'

const Particulier = () => {
    return(
        <div className="Particulier">
            <div className="Sign-content max-md:!py-[80px] max-md:!px-[20px]">
                    <button><img src={img} alt="" />s'identifier avec google</button>
                    <div>
                        <span>OU</span>
                    </div>
                    <h2 className="max-md:!text-[25px]">Créez votre compte</h2>
                    <form action="">
                        <div className="max-md:!px-[0]">
                            <input type="text" placeholder="M."/>
                            <input type="text" placeholder="Mme"/>
                            <input type="text" placeholder="Sociéte"/>
                        </div>
                        <input type="text" placeholder="Nom de famille" />
                        <input type="text" placeholder="Prénom" />
                        <div className="max-md:!px-[0]">
                            <input type="number" placeholder="Jour"/>
                            <input type="text" placeholder="Mois"/>
                            <input type="number" placeholder="Anées"/>
                        </div>
                        <input type="text" placeholder="Votre lieu de naissance" className="notThis" />
                        <div className="max-md:!px-[0]">
                            <input className="max-md:!w-[140px]" type="number" placeholder="Code postal" />
                            <input className="max-md:!w-[140px]" type="text" placeholder="ville"/>
                        </div>
                        <input type="email" placeholder="Adresse email qui servira comme identifiant" required/>
                        <input type="password" placeholder="Mot de passe" />
                        <button type="submit">Créer mon compte <i class="fa-solid fa-angle-right"></i></button>
                    </form>
                </div>
        </div>
    )
}

export default Particulier