import React from "react";
import img from '../assets/__after.png'

const Footer = () => {
    return(
        <footer>
            <ul className="">
                <li><a href="#">Choisissez un bureau <i class="fa-solid fa-angle-right"></i></a></li>
                <div  className="max-md:my-[30px]">
                    <li><a href="#">Rejoignez-nous</a></li>
                    <li><a href="#">Inscrivez-vous à notre newsletter <i class="fa-solid fa-arrow-right"></i></a></li>
                </div>
                <div>
                    <li><a href="#">Suivez-nous sur</a></li>
                    <li><a href="https://fr.linkedin.com/"><i class="fa-brands fa-linkedin-in"></i></a> <a href="https://twitter.com/home?lang=fr"><i class="fa-brands fa-twitter"></i></a></li> 
                </div>
            </ul>
            <ul className="">
                <li><a href="#">Contact</a></li>
                <li><a href="#">Carrière</a></li>
                <li><a href="#">Mentions légales</a></li>
                <li><a href="#">Confidentialité</a></li>
                <li><a href="#">Gestion des cookies</a></li>
                <li><a href="#">Alerte fraudes</a></li>
            </ul>
            <span>© 2023 DS-AVOCATS</span>
            <img src={img} alt="picture" />
        </footer>
    )
}

export default Footer