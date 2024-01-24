import React, { useState} from "react";
import img from '../../assets/google.png'

const Avocat = () => {
    const [model, setModel] = useState(true)
    function changePage() {
        setModel(false)
    }

    return(
        <div className="Avocat">
            <div className="Sign-content max-md:!py-[20px] max-md:!px-[20px]">
                    <div>
                        <span className="!mt-[98px]">OU</span>
                    </div>
                    {model && <h2 className="max-md:!text-[25px]">Créez votre compte</h2>}
                    <form action="">
                    {model ?
                        <>
                            <div className="max-md:!px-[0]">
                                <input type="text" placeholder="M."/>
                                <input type="text" placeholder="Mme"/>
                                <input type="text" placeholder="Sociéte"/>
                            </div>
                            <input type="text" placeholder="Nom de famille" />
                            <input type="text" placeholder="Prénom" />
                            <div className="max-md:!px-[0]">
                                <input className="max-md:!w-[100px]" type="number" placeholder="Jour"/>
                                <input className="max-md:!w-[100px]" type="text" placeholder="Mois"/>
                                <input className="max-md:!w-[100px]" type="number" placeholder="Anées"/>
                            </div>
                            <input type="text" placeholder="Adresse professionnel"/>
                            <div className="max-md:!px-[0]">
                                <input className="max-md:!w-[140px]" type="text" placeholder="Wilaya" />
                                <input className="max-md:!w-[140px]" type="text" placeholder="Commune" />
                            </div>
                            <input type="email" placeholder="Adresse email qui servira comme identifiant" required/>
                            <input type="password" placeholder="Mot de passe" />
                            <button onClick={changePage}>Prochaine étape<i class="fa-solid fa-angle-right"></i></button>
                        </> 
                        :    
                        <>
                            <input type="number" placeholder="Numero de carte judiciaire " />
                            <input type="number" placeholder="Numero de carte national" />
                            <input type="text" placeholder="Langue"/>
                            <input type="text" placeholder="Spécialities" />
                            <button type="submit" className="mb-[340px]">Créer mon compte<i class="fa-solid fa-angle-right"></i></button>
                        </>
                    }   
                    </form>
                </div>
        </div>
    )
}

export default Avocat