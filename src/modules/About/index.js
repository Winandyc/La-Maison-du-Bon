import React from 'react';
import './styles.css';

const About = () => {
    return (
        <div className="about">
            <h2>Contactez-nous</h2>
            <p>
                Pour toute question ou réservation, n'hésitez pas à nous contacter :
            </p>
            <p>
                <strong>Téléphone :</strong> 06 06 06 06 06
            </p>
            <p>
                <strong>Email :</strong> contact@lamaisondubon.com
            </p>
            <p>
                <strong>Adresse :</strong> 123 Rue du Far West, 06800 Cagnes-sur-Mer
            </p>
            <h3>Heures d'ouverture :</h3>
            <p>Lundi - Vendredi : 12h - 22h</p>
            <p>Samedi - Dimanche : 18h - 23h</p>
        </div>
    );
};

export default About;
