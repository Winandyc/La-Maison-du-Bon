import React from 'react';
import { AlignJustify } from 'lucide-react';
import './styles.css';

const Header = ({ toggleMenu, isMenuOpen }) => {
    return (
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
    );
};

export default Header;
