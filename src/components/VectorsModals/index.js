import React from 'react';
import './styles.css';

const VectorModal = ({ isOpen, onClose, logo }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>&times;</button>
                <h2>{logo.title}</h2>
                <img src={logo.src} alt={logo.title} className="modal-image" />
                <p>{logo.description}</p>
                <h3 className="modal-price">{logo.price}</h3>
            </div>
        </div>
    );
};

export default VectorModal;
