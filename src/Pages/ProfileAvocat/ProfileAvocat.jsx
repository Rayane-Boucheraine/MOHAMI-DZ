import React, { useState } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Inforamtion from "./Information";
import Carriere from "./Carriere";
import './ProfileAvocat.css'

const ProfileAvocat = () => {
    const [showContent1, setShowContent1] = useState(true);
    const handleButtonClick1 = () => {
        setShowContent1(true);
    };
    const handleButtonClick2 = () => {
        setShowContent1(false);
    };
    
    return (
        <div className="Profile">
            <Header />
            <div className="Profile-content max-md:px-[0]">
                    <h1 className="text-center">Profile</h1>
                    <div className="buttons max-md:!px-[30px]">
                        <button 
                            onClick={handleButtonClick1} 
                            style={{backgroundColor: showContent1 ? "#FFF" : "#E9E9E9" , 
                                    borderBottom: showContent1 ? "solid 5px red" : "none",
                                    borderTop: !showContent1 ? "solid 5px #E9E9E9": "none"}}>
                            INFORMATIONS PERSONNELS
                        </button>
                        <button 
                            onClick={handleButtonClick2} 
                            style={{backgroundColor: !showContent1 ? "#FFF" : "#E9E9E9" , 
                            borderBottom: !showContent1 ? "solid 5px red" : "none", 
                            borderTop: showContent1 ? "solid 5px #E9E9E9" : "none"}}>
                            carrière professionnel
                        </button>
                    </div>
                    {showContent1 ? <Inforamtion /> : <Carriere />}
            </div>
            <Footer />
        </div>
    )
}

export default ProfileAvocat