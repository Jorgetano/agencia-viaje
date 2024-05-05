import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function HotelCard({ imagen, titulo, descripcion, detalle }) {

    return (
        <div className="card">
            <img src={imagen} alt={titulo} />
            <div className="card-body">
                <h3>{titulo}</h3>
                <p>{descripcion}</p>
                <p>{detalle}</p>
                <div className="rating">
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                </div>
                <button className="btn btn-dark me-2">Separar</button>
            </div>
        </div>
    );
}

export default HotelCard;
