import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { Link } from "react-router-dom";
import { cabinets } from "../../Data/Data";
import img from '../../assets/bgCabinets1.png'
import img1 from '../../assets/bgCabinets2.png'
import img2 from '../../assets/bgCabinets3.png'
import img3 from '../../assets/cabinets1.png'
import img4 from '../../assets/cabinets2.png'
import img5 from '../../assets/cabinets3.png'
import img6 from '../../assets/group.svg'
import './Recharche.css'
import { data } from "autoprefixer";

const Recharche = () => {
    return(
        <div className="recharche">
            <Header />
            <div className="recharche-content max-md:!px-[40px]">
                <h1>Les Cabinets</h1>
                <div className="cabinets-boxes">
                        {cabinets.map((cabine) => {
                            return(
                                <div className="cabinets-box">
                                    <div className="image">
                                        <img src={cabine.bgImg} alt="background img of cabinets" />
                                        <img src={cabine.img} alt="person or logo" />
                                    </div>
                                    <div className="text">
                                        <h3>{cabine.name}</h3>
                                        <span>{cabine.place}</span>
                                        <span>{cabine.date}</span>
                                        <span>{cabine.numberAvocat}</span>
                                        <ul>
                                            <li>{cabine.spécialité.first}</li>
                                            <li>{cabine.spécialité.second}</li>
                                            <li>{cabine.spécialité.third}</li>
                                            <li>{cabine.spécialité.fourth}</li>
                                            <li>{cabine.spécialité.fifth}</li>
                                            <li>{cabine.spécialité.sixth}</li>
                                        </ul>
                                        <button><Link to="/Profile">Voir</Link></button>
                                    </div>
                                </div>
                            )
                        })}
                </div>
                <img className="max-md:hidden" src={img6} alt="vector" />
            </div>
            <Footer />
        </div>
    )
}

export default Recharche