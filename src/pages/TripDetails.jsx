import partecipanti from "../arrays/partecipanti"
import coordinatori from "../arrays/coordinatorori"
import { useParams } from "react-router-dom"
import trips from "../arrays/viaggi"

import CoordinatoreListItem from "../components/CoordinatoreListItem"
import PartecipantiListItem from "../components/PartecipantiListItem"

const TripDetails = () => {

    const { id } = useParams()

    const tripFound = trips.filter(trip => trip.id_viaggio === parseInt(id))
    const partecipantiFound = partecipanti.filter(partecipante => partecipante.id_viaggio.includes(parseInt(id)))
    const coordinatoriFound = coordinatori.filter(coordinatore => coordinatore.id_viaggio.includes(parseInt(id)))

    console.log(partecipantiFound)

    const { id_viaggio, image, destinazione, luogo_di_partenza, data_inizio, data_fine } = tripFound[0];

    return (
        <div className="container.fluid py-5 mx-5">
            <div className="row">
                <div className="col-12">
                    <div className="card border-0 mb-3">
                        <div className="row g-0">
                            <div className="col-md-2">
                                <div className="card border-0">
                                    <img src={image} className="img-fluid rounded-start" alt="..." />
                                    <div className="card-body">
                                        <p className="card-text"><strong>Destinazione</strong>: {destinazione}</p>
                                        <p className="card-text"><strong>Data di partenza</strong>: {luogo_di_partenza}</p>
                                        <p className="card-text"><strong>Data di partenza</strong>: {data_inizio}</p>
                                        <p className="card-text"><strong>Data di arrivo</strong>: {data_fine}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-10">
                                <div className="card-body ps-5">
                                    <h5 className="card-title">Coordinatori</h5>
                                    <ul className="list-group">
                                        {coordinatoriFound.map((coordinatore, i) => (
                                            <CoordinatoreListItem key={coordinatore.id_coordinatore} coordinatore={coordinatore} />
                                        ))}
                                    </ul>
                                </div>
                                <div className="card-body ps-5">
                                    <h5 className="card-title">Partecipanti</h5>
                                    <ul className="list-group">
                                        {partecipantiFound.map(partecipante => (
                                            <PartecipantiListItem key={partecipante.id_partecipante} partecipante={partecipante} />
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TripDetails
