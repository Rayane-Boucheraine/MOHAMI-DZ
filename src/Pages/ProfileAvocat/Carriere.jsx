import React, { useState } from "react";
import diplome from '../../assets/diplome.png'
import competence from '../../assets/competence.png'
import expereince from '../../assets/expereince.png'
import diplomeshow from '../../assets/diplomeshow.png'
import competenceshow from '../../assets/competenceshow.png'
import expereinceshow from '../../assets/experienceshow.png'

const Carriere = () => {
    const[model, setModel] = useState(false)
    const[model1, setModel1] = useState(false)
    const[model2, setModel2] = useState(false)

    function hunddle()  {
        setModel(true)
        setModel1(false)
        setModel2(false)
    }
    function hunddle1()  {
        setModel(false)
        setModel1(true)
        setModel2(false)
    }
    function hunddle2()  {
        setModel(false)
        setModel1(false)
        setModel2(true)
    }

    return(
        <div className="relative">
            <div className="carriere flex mt-[80px] w-[100%]">
                <div onClick={hunddle} className="w-[33.5%] h-[510px] relative overflow-hidden max-md:!h-[200px]"><img src={diplome} alt="picture" className="h-[100%] w-[100%] transition-transform transform cursor-pointer hover:scale-110"></img></div>
                <div onClick={hunddle1} className="w-[33.5%] h-[510px] relative overflow-hidden max-md:!h-[200px]"><img src={competence} alt="picture" className="h-[100%] w-[100%] transition-transform transform cursor-pointer hover:scale-110"></img></div>
                <div onClick={hunddle2} className="w-[33%] h-[510px] relative overflow-hidden max-md:!h-[200px]"><img src={expereince} alt="picture" className="h-[100%] w-[100%] transition-transform transform cursor-pointer hover:scale-110"></img></div>
            </div>
            {model && <img src={diplomeshow} alt="" className="absolute top-[-2%] right-[0]" />}
            {model1 && <img src={competenceshow} alt="" className="absolute top-[-2%] right-[0]"/>}
            {model2 && <img src={expereinceshow} alt="" className="absolute top-[-2%] right-[0]"/>}
        </div>
    )
}

export default Carriere