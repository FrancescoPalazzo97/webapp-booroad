import { useLibraryContext } from "../contexts/LibraryContext"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

import SearchBar from "../components/SearchBar"

import RenderListElement from "../components/RenderListElement"

const TripDetails = () => {

    const { id } = useParams()

    const { trips, dateConverter, getFilteredTripData } = useLibraryContext()

    const filteredTrip = trips.filter(trip => trip.id_viaggio === parseInt(id))

    const { filteredMembers, filteredOrganizers } = getFilteredTripData(parseInt(id))

    // Variante con UseEffect sostituita con una variante più ottimizzata (Inserita logicca nel context custom che in automatico ri-renderizza la componente alla modifica di search senza l'uso di UseEffect)
    // useEffect(() => {

    //     const tripMembers = members.filter(member => member.id_viaggio.includes(parseInt(id)))
    //     const tripOrganizers = organizers.filter(organizer => organizer.id_viaggio.includes(parseInt(id)))

    //     if (search !== '') {
    //         const searchMembers = tripMembers.filter(member => {
    //             return member.nome.toLowerCase().includes(search.toLowerCase().trim()) ||
    //                 member.cognome.toLowerCase().includes(search.toLowerCase().trim())
    //         })
    //         const searchOrganizers = tripOrganizers.filter(organizer => {
    //             return organizer.nome.toLowerCase().includes(search.toLowerCase().trim()) ||
    //                 organizer.cognome.toLowerCase().includes(search.toLowerCase().trim())
    //         })
    //         setFilteredMembers(searchMembers)
    //         setFilteredOrganizers(searchOrganizers)
    //     } else {
    //         setFilteredMembers(tripMembers)
    //         setFilteredOrganizers(tripOrganizers)
    //     }
    // L'aggiunta di members e organizers serve nel caso si dovessero aggiiungere altri partecipanti o organizzatori
    // }, [search, members, organizers]) 

    const { id_viaggio, image, destinazione, luogo_di_partenza, data_inizio, data_fine } = filteredTrip[0];

    return (
        <div className="container.fluid py-5 mx-5">
            <div className="row justify-content-center">
                <div className="col-12">
                    <div className="card border-0 mb-3">
                        <div className="row g-0">
                            <div className="col-md-2">
                                <div className="card border-0">
                                    <img src={image} className="img-fluid rounded-start" alt="..." />
                                    <div className="card-body">
                                        <p className="card-text"><strong>Destinazione</strong>: {destinazione}</p>
                                        <p className="card-text"><strong>Data di partenza</strong>: {luogo_di_partenza}</p>
                                        <p className="card-text"><strong>Data di partenza</strong>: {dateConverter(data_inizio)}</p>
                                        <p className="card-text"><strong>Data di arrivo</strong>: {dateConverter(data_fine)}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-10">
                                <SearchBar />
                                <div className="row">
                                    <div className="col">
                                        {filteredOrganizers.length ? (
                                            <>
                                                <div className="card border-0">
                                                    <div className="card-body ps-5">
                                                        <h5 className="card-title">Coordinatori</h5>
                                                        <div className="accordion accordion-flush" id="accordionFlushExample">
                                                            {filteredOrganizers.map((organizer) => (
                                                                <RenderListElement
                                                                    key={organizer.id}
                                                                    organizer={organizer}
                                                                />
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        ) : (
                                            <></>
                                        )}
                                        {filteredMembers.length ? (
                                            <div className="card border-0">
                                                <div className="card-body ps-5">
                                                    <h5 className="card-title">Partecipanti</h5>
                                                    <div className="accordion accordion-flush" id="accordionFlushExample">
                                                        {filteredMembers.map(member => (
                                                            <RenderListElement
                                                                key={member.id}
                                                                member={member}
                                                            />
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <></>
                                        )}
                                    </div>
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
