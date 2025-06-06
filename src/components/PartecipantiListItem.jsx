import React from 'react'

const PartecipantiListItem = ({ partecipante }) => {
    return (
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#p-${partecipante.id_partecipante}`} aria-expanded="false" aria-controls="flush-collapseOne">
                    {partecipante.Nome} {partecipante.Cognome}
                </button>
            </h2>
            <div id={`p-${partecipante.id_partecipante}`} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                    <p><strong>Numero</strong>: {partecipante.numero_di_telefono}</p>
                    <p><strong>Numero di emergenza</strong>: {partecipante.numero_di_emergenza}</p>
                    <p><strong>Email</strong>: {partecipante.email}</p>
                    <p><strong>Codice fiscale</strong>: {partecipante.codice_fiscale}</p>
                </div>
            </div>
        </div>
    )
}

export default PartecipantiListItem
