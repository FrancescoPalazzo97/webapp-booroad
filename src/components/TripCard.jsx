import { Link } from "react-router-dom"

const TripCard = ({ trip }) => {

    const { id_viaggio, image, destinazione, luogo_di_partenza, data_inizio, data_fine } = trip;

    return (
        <div className="col-lg-3 col-md-2 col-sm-1">
            <Link to={`${id_viaggio}`}>
                <div className="card text-bg-dark border-0">
                    <img src={image} className="card-img" alt="..." />
                    <div className="card-img-overlay">
                        <h5 className="card-title">{destinazione}</h5>
                        <p className="card-text">Partenza da: {luogo_di_partenza}</p>
                        <p className="card-text">Data partenza: {data_inizio}</p>
                        <p className="card-text">Data ritorno: {data_fine}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default TripCard
