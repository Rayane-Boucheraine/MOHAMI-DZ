import React from "react";
import img from '../assets/Vector.svg'

const Apropos = () => {
    return(
        <section className="Apropos" id="apropos">
            <h1 className="special">À propos</h1>
            <div className="content gap-[20px]">
                <div className="img">
                    <img src={img} alt="vector" />
                </div>
                <div className="text">
                    <h3>Bienvenue sur l'Annuaire des Avocats Algériens !</h3>
                    <p>Ce nouveau type d'annuaire pousse plus loin la recherche et l'aide aux internautes qui cherchent un avocat… Recherche thématique intelligente et assistée Recherche géographique couplée, Interface simple et puissante pour les avocats membres de suivi et de mise à jour… mais aussi le respect de la déontologie des avocats et une certaine éthique : nous souhaitons aider les internautes, pas les flouer. Avocats, … Visiteurs, testez la recherche !</p>
                    <h3>- A qui s'adresse ce site ?</h3>
                    <p>A tous ceux qui recherchent un avocat, et à tous les avocats algériens.</p>
                    <h3>- Validité et légalité des informations</h3>
                    <p>informations saisies (gratuitement) par les avocats le sont sous leur seule responsabilité, notre annuaire ne peut être tenu responsable des inexactitudes des informations proposées par les avocats. Nous n'effectuons pas une sélection sur les cabinets d'avocats, qui peuvent tous s'inscrire. Nous faisons néanmoins tout notre possible pour maintenir à jour les fiches et nous gardons la possibilité de supprimer les fiches qui nous semblent non conformes ou illégales. Plus globalement, les avocats respectent un code de déontologie en terme de communication notamment ; « tout ne se dit pas ». Si une fiche d'avocat vous parait trop « vendeuse » ou commerciale, suspecte, n'hésitez-pas à nous le dire.</p>
                    <h3>- Quel service propose notre annuaire ?</h3>
                    <p>Pas de consultation juridique, mais une recherche fine pour vous aider à trouver l'avocat dont vous avez besoin. Nous utilisons pour cela une technologie développée pour ce besoin spécifique, permettant de trouver un avocat pouvant répondre au mieux à vos besoins d'après vos mots clés de recherche. Nous ne sommes pas les interlocuteurs pour ce qui se passe après la mise en relation entre vous et l'avocat(e).</p>
                    <h3>- Comment trouver un avocat ?</h3>
                    <p>Le visiteur peut simplement appuyer sur chercher s'il a déjà le nom d'un avocat, sinon il écrit une ville pour trouver d'autres avocats de cette ville inscrits sur l'annuaire.</p>
                </div>
            </div>
        </section>
    )
}

export default Apropos