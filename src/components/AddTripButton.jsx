import { useLibraryContext } from "../contexts/LibraryContext"

const AddTripButton = () => {

    const { tripData, handleChange, handleSubmit } = useLibraryContext();
    const { destinazione, luogo_di_partenza, data_inizio, data_fine, image } = tripData

    return (
        <>
            <button id="add-trip" type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <i className="fa-solid fa-plus me-1"></i>
                <span className="btn-label">Aggiungi nuovo viaggio</span>
            </button>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={handleSubmit}>
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Aggiungi il nuovo viaggio!</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label for="destination-field" className="form-label">Inserisci la destinazione</label>
                                    <input type="text" className="form-control" id="destination-field" placeholder="destinazione..." name="destinazione"
                                        value={destinazione} onChange={handleChange} />
                                </div>
                                <div className="mb-3">
                                    <label for="place-field" className="form-label">Inserisci luogo di partenza</label>
                                    <input type="text" className="form-control" id="place-field" placeholder="Si parte da..." name="luogo_di_partenza" value={luogo_di_partenza} onChange={handleChange} />
                                </div>
                                <div className="mb-3">
                                    <label for="departure-field" className="form-label">Partenza:</label>
                                    <input type="date" className="form-control" id="departure-field" name="data_inizio"
                                        min="2024-01-01" max="2025-12-31" value={data_inizio} onChange={handleChange} required />
                                </div>
                                <div className="mb-3">
                                    <label for="return-field" className="form-label">Ritorno:</label>
                                    <input type="date" className="form-control" id="return-field" name="data_fine"
                                        min="2024-01-01" max="2025-12-31" value={data_fine} onChange={handleChange} required />
                                </div>
                                <div className="mb-3">
                                    <label for="img-field" className="form-label">Inserisci path immagine</label>
                                    <input type="text" className="form-control" id="img-field" name="image" value={image} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-primary">Salva</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddTripButton
