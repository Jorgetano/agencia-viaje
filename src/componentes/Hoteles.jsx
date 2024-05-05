import  React  from "react";
import HotelCard from "./Hotel";
import './Hoteles.css';

function HotelList() {
    // Aquí deberías tener un array con la información de los 10 hoteles
    const hoteles = [
        // Información de cada hotel
        { id: 1, titulo: "NH Collection Medellín Royal", detalle:"Cancelacion Gratis", descripcion: <a href="https://maps.app.goo.gl/qtLMjez8v1cZk2aGA" target="_blank">Carrera 42 No. 5Sur-130, Medellín</a>, imagen: "src/assets/hotel1.jpg" },
        { id: 2, titulo: "Hotel Casa Las Palmas", detalle:"Cancelacion Gratis", descripcion: <a href="https://maps.app.goo.gl/LadtFTjrZC9Px6gU7" target="_blank">Calle 37 No. 79-32, Laureles, Medellín</a>,imagen: "src/assets/hotel2.jpg" },
        { id: 3, titulo: "Hotel Dorado La 70", detalle:"Cancelacion Gratis", descripcion: <a href="https://maps.app.goo.gl/FzyyZocEnESkR3e78" target="_blank">Carrera 70 44b-66, Laureles, Medellín </a>,imagen: "src/assets/hotel3.jpg" },
        { id: 4, titulo: "Celestino Boutique Hotel", detalle:"Cancelacion Gratis", descripcion: <a href="https://maps.app.goo.gl/vjTSFJgitktZmsNh6" target="_blank">Carrera 37 No. 8a-60, El Poblado, Medellín</a>,imagen: "src/assets/hotel4.jpg" },
        { id: 5, titulo: "Epic Boutique Hotel", detalle:"Cancelacion Gratis", descripcion: <a href="https://maps.app.goo.gl/EkZ22Z5ADUKk7sXY9" target="_blank">Carrera 37 No. 8a-38, El Poblado, Medellín</a>,imagen: "src/assets/hotel5.jpg" },
        { id: 6, titulo: "Hotel Med Estadio", detalle:"Cancelacion Gratis", descripcion: <a href="https://maps.app.goo.gl/fS444yaAEWQZmhMLA" target="_blank">Calle 49B No. 68-59, Laureles, Medellín</a>, imagen: "src/assets/hotel6.jpg" },
        { id: 7, titulo: "Hotel Alcaravan Medellín", detalle:"Cancelacion Gratis", descripcion: <a href="https://maps.app.goo.gl/FcKBMjMoMaZYKZXj6" target="_blank">Calle 56 No. 45-44, La Candelaria, Medellin</a>,imagen: "src/assets/hotel7.jpg" },
        { id: 8, titulo: "Café Hotel Medellín", detalle:"Cancelacion Gratis", descripcion: <a href="https://maps.app.goo.gl/S2KU9WVvY36keo947" target="_blank">Carrera 31A No. 11-03, El Poblado, Medellín</a>,imagen: "src/assets/hotel8.jpg" },
        { id: 9, titulo: "Hotel Casa Las Palmas", detalle:"Cancelacion Gratis", descripcion: <a href="https://maps.app.goo.gl/QMpifA9JiYG6PvbaA" target="_blank">Carrera 37 79-32, Laureles, Medellín </a>,imagen: "src/assets/hotel9.jpg" },
        { id: 10, titulo: "4 Sur Hotel", detalle:"Cancelacion Gratis", descripcion: <a href="https://maps.app.goo.gl/QnQGGdniWG9kRsLB8" target="_blank">Calle 2Sur Nro. 50G-19, Guayabal, Medellín</a>,imagen: "src/assets/hotel10.jpg" },
    ];

    return (
        <div className="hotel-list">
            {hoteles.map(hotel => (
                <HotelCard
                    key={hotel.id}
                    imagen={hotel.imagen}
                    titulo={hotel.titulo}
                    descripcion={hotel.descripcion}
                    detalle={hotel.detalle}

                />
            ))}
        </div>
    );
}

export default HotelList