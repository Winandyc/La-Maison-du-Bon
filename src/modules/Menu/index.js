// src/modules/Menu/index.js
import React from 'react';
import './styles.css';

const Menu = () => {
    return (
        <div className="menu">
            <h2>Notre Menu</h2>
            <div className="menu-item">
                <h3>Steak de Bison</h3>
                <p>Steak de bison juteux, grillé à la perfection et servi avec des légumes de saison.</p>
                <span>Prix : 25€</span>
            </div>
            <div className="menu-item">
                <h3>Pizza du Cowboy</h3>
                <p>Pizza garnie de viande de boeuf, poivrons, oignons, et fromage fondant.</p>
                <span>Prix : 15€</span>
            </div>
            <div className="menu-item">
                <h3>Côtes de Porc BBQ</h3>
                <p>Côtes de porc marinées et grillées, servies avec notre sauce barbecue maison.</p>
                <span>Prix : 22€</span>
            </div>
            <div className="menu-item">
                <h3>Dessert de la Saloons</h3>
                <p>Gâteau au chocolat noir avec une boule de glace vanille.</p>
                <span>Prix : 8€</span>
            </div>
        </div>
    );
};

export default Menu;
