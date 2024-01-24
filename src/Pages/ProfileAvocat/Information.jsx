import React, { useState } from "react";
import location from '../../assets/location.png'
import map from '../../assets/map.svg'
import bg from '../../assets/bg.png'
import img from '../../assets/cabinets3.png'
import logo from '../../assets/logo.svg'
import { profileInformation } from "../../Data/Data";
import { Link } from "react-router-dom";
import Note from "../../Components/Note";

const Inforamtion = () => {
    const [model, setModel] = useState(false)
    const Handdle = () => {
        setModel(true);
    }

    return(
        <>
            <div className="profile-information max-md:!mx-[auto] max-md:!w-[340px]">
                <div className="image">
                    <img src={bg} alt="background image" />
                    <img src={img} alt="person" />
                </div>
                <div className="text max-md:!pt-[160px] max-md:pb max-md:!pl-[20px] max-md:pr">
                    <ul>
                        {profileInformation.map(({Name, age, wilaya, commune, Languers, spécialité}) => {
                            return(
                                <>
                                <div className="flex-wrap max-md:flex-col max-md:!gap-[20px] max-md:!items-start">
                                    <li><div><h3>Nom Complet</h3> <span>:</span></div> <span className="max-md:!pl-[20px]">{Name}</span></li>
                                    <li><div><h3>Age </h3> <span>:</span></div> <span>{age}</span></li>
                                </div>
                                    <li><div><h3>Wilaya</h3> <span>:</span></div> <span className="max-md:!pl-[20px]">{wilaya}</span></li>
                                    <li><div><h3>Commune</h3> <span>:</span></div> <span className="max-md:!pl-[20px]">{commune}</span></li>
                                    <li><div><h3>Languers</h3> <span>:</span></div> <span className="max-md:!pl-[20px]">{Languers}</span></li>
                                    <li><div><h3>Spécialité</h3> <span>:</span></div> <span className="max-md:!pl-[20px]">{spécialité}</span></li>
                                </>
                            )
                        })}
                    </ul>
                </div>
                <div className="vérification">
                    <span>Verifiee par </span>
                    <img src={logo} alt="logo" />
                </div>
            </div>
            <div className="buttons buttons-info flex-wrap max-md:gap-[20px] max-md:flex-col max-md:!gap-[40px]">
                <Link to='/#acceuil'><button>Reserver</button></Link>
                <Link to='/#question'><button>Poser une quetions</button></Link>
                <button onClick={Handdle}>Notez L'avocat</button>
            </div>
            <div className="location max-md:px-[20px]">
                <h1 className="max-md:!px-[0] text-center">Localisation</h1>
                <img src={location} alt="location" className="max-md:!h-[400px]"/>
                <button>Ouvrir sur <img src={map} alt="map icon" /></button>
            </div>
            {model && <Note />}
        </>
    )
}

export default Inforamtion