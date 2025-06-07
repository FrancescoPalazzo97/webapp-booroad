import { Link } from "react-router-dom"
import { useLibraryContext } from "../contexts/LibraryContext"

const TripCard = ({ trip }) => {

    const { id_viaggio, image, destinazione, luogo_di_partenza, data_inizio, data_fine } = trip;

    const { dateConverter } = useLibraryContext();

    return (
        <div className="col">
            <Link to={`${id_viaggio}`} className="navbar-brand">
                <h5>{destinazione}</h5>
                <div className="trip-card card text-bg-dark border-0">
                    <img src={image} className="card-img" alt="..." />
                    <div className="card-img-overlay">
                        <h5 className="card-title">{destinazione}</h5>
                        <p className="card-text">Partenza da: {luogo_di_partenza}</p>
                        <p className="card-text">Data partenza: {dateConverter(data_inizio)}</p>
                        <p className="card-text">Data ritorno: {dateConverter(data_fine)}</p>
                    </div>
                </div>

            </Link>
        </div>
    )
}

export default TripCard
