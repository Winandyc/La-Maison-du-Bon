import React, { useState, useEffect, useRef } from 'react';
import { AlignJustify } from 'lucide-react';
import BestSellers from '../../components/BestSellers';
import './styles.css';

const Home = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className={`home ${isMenuOpen ? 'darken' : ''}`}>
            <header className="header">
                <div className="header-container">
                    <img
                        src="/images/logoLMB.png"
                        alt="Logo La Maison du Bon"
                        className="logo"
                        onClick={() => window.location.reload()}
                    />
                    <h1 className="header-title">La MaiSoN du BoN</h1>
                    <AlignJustify className="menu-icon" onClick={toggleMenu} aria-expanded={isMenuOpen ? "true" : "false"} />
                </div>
            </header>

            <h2>Bienvenue à La Maison du Bon</h2>
            <p>
                Découvrez l'authenticité de notre restaurant où viandes grillées et pizzas faites maison s'unissent pour offrir une expérience culinaire inoubliable.
            </p>
            <p>
                Ne manquez pas notre spécialité unique : le <strong>Patigot de la Mer</strong>, un délicieux plat aux fruits de mer qui saura ravir vos papilles.
            </p>
            <div className="video-container">
                <video src="/videos/introducting.mp4" controls className="video" />
            </div>
            <p>
                Profitez d'une ambiance chaleureuse et d'un service amical dans un cadre inspiré des saloons du Far West, parfait pour passer un moment convivial entre amis ou en famille.
            </p>
            <BestSellers />

            {/* Menu déroulant */}
            <div ref={menuRef} className={`sidebar ${isMenuOpen ? "menu-open" : "menu-closed"}`}>
                <button className="close-button" onClick={toggleMenu}>&times;</button>
                <div className="sidebar-content">
                    <ul>
                        <li><a href="#home">Accueil</a></li>
                        <li><a href="#menu">Menu</a></li>
                        <li><a href="#rooms">Découvrez nous !</a></li>
                        <li><a href="#about">A propos</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Home;
