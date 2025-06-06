import React from 'react'

const CoordinatoreListItem = ({ organizer }) => {

    const { id, nome, cognome, codice_fiscale, numero_di_telefono, id_viaggio } = organizer;

    return (
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#c-${id}`}>
                    {nome} {cognome}
                </button>
            </h2>
            <div id={`c-${id}`} className="accordion-collapse collapse" >
                <div className="accordion-body"><strong>Numero</strong>: {numero_di_telefono}</div>
            </div>
        </div>
    )
}

export default CoordinatoreListItem
