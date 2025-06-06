import React from 'react'

const CoordinatoreListItem = ({ coordinatore }) => {
    return (
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#c-${coordinatore.id_coordinatore}`}>
                    {coordinatore.Nome} {coordinatore.Cognome}
                </button>
            </h2>
            <div id={`c-${coordinatore.id_coordinatore}`} className="accordion-collapse collapse" >
                <div className="accordion-body"><strong>Numero</strong>: {coordinatore.numero_di_telefono}</div>
            </div>
        </div>
    )
}

export default CoordinatoreListItem
