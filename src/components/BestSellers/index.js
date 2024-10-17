import React, { useState } from 'react';
import VectorModal from '../VectorsModals';
import './styles.css';

const BestSellers = () => {
    const logos = [
        {
            src: '/images/vectors/pizza-v.png',
            title: 'Pizza XXL',
            description: 'Délicieuse pizza faite maison.',
            price: '10€',
        },
        {
            src: '/images/vectors/hamburger-v.png',
            title: 'Hamburger Prestige',
            description: 'Un hamburger juteux et savoureux.',
            price: '8€',
        },
        {
            src: '/images/vectors/patigot-v.png',
            title: 'Patigot de la Mer',
            description: 'Notre spécialité de fruits de mer.',
            price: '15€',
        },
        {
            src: '/images/vectors/calzone-v.png',
            title: 'Calzone Géant',
            description: 'Un calzone triple XL pour les gros mangeurs !',
            price: '18€',
        },
    ];

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedLogo, setSelectedLogo] = useState(null);

    const openModal = (logo) => {
        setSelectedLogo(logo);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedLogo(null);
    };

    return (
        <div className="best-sellers">
            <h2 className="best-sellers-title">Nos meilleurs ventes</h2>
            <div className="logo-container">
                {logos.map((logo, index) => (
                    <div className="logo-item" key={index} onClick={() => openModal(logo)}>
                        <img src={logo.src} alt={logo.title} />
                        <h3>{logo.title}</h3>
                    </div>
                ))}
            </div>
            <VectorModal isOpen={isModalOpen} onClose={closeModal} logo={selectedLogo} />
        </div>
    );
};

export default BestSellers;
