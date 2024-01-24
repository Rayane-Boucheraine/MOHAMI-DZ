import React, {useState} from "react";
import Header from "../../Components/Header";
import './SignUp.css'
import img1 from '../../assets/Group.png'
import Particulier from "./Particulier";
import Avocat from './Avocat'


const SignUp = () => {
    const [showContent1, setShowContent1] = useState(true);
    const handleButtonClick1 = () => {
        setShowContent1(true);
    };
    const handleButtonClick2 = () => {
        setShowContent1(false);
    };


    return(
        <div className="SignUp">                      
            <Header />
            <div className="Sign max-md:!py-[0] max-md:!px-[20px] bg-[#e9e1d7]">
                <h1 className="special mb-[80px] z-[1000] !text-[40px] relative">Devenir Un Dz-Mouhami</h1>
                <div className="buttons">
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
                {showContent1 ? <Particulier /> : <Avocat />}
            </div>
            <img className="max-md:!top-[210px]" src={img1} alt="" />
            <div className="overlay"></div>
        </div>
        
    )
}

export default SignUp