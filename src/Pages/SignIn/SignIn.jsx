import React from "react";
import Header from "../../Components/Header";
import './SignIn.css'
import img from '../../assets/google.png'
import img1 from '../../assets/Group.png'
import { Link } from "react-router-dom";

const SignIn = () => {
    return(
        <div className="SignIn">
            <Header />
            <div className="Sign bg-[#e9e1d7] max-md:!px-[40px]">
                <h1 className="special max-md:!text-[40px]">Soyez les bienvenue</h1>
                <div className="Sign-content max-md:!px-[0]">
                    <button><img src={img} alt="" />s'identifier avec google</button>
                    <div>
                        <span>OU</span>
                    </div>
                    <form action="">
                        <input type="email" placeholder="adresse e-mail" required/>
                        <input type="password" placeholder="Mot de passe" />
                        <button type="submit" className="max-md:w-[300px] mx-[auto]">Connexion <i class="fa-solid fa-angle-right"></i></button>
                    </form>
                    <p className="max-md:!text-[15px]">Je n'ai pas  un compte : <Link to="/SignUp">créer un Compte</Link></p>
                </div>
            </div>
            <img className="max-md:!top-[230px]" src={img1} alt="" />
            <div className="overlay"></div>
        </div>
    )
}

export default SignIn