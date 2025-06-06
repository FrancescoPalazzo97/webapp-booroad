import React from 'react'

const CoordinatoreListItem = ({ coordinatore }) => {
    return (
        <li className="list-group-item border-0">
            <p>{coordinatore.Nome} {coordinatore.Cognome}</p>
        </li>

        // <div className="accordion-item">
        //     <h2 className="accordion-header">
        //         <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`coordinatore-${coordinatore.id_coordinatore}`} aria-expanded="false" aria-controls={`coordinatore-${coordinatore.id_coordinatore}`}>
        //             {coordinatore.Nome} {coordinatore.Cognome}
        //         </button>
        //     </h2>
        //     <div id={`coordinatore-${coordinatore.id_coordinatore}`} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        //         <div className="accordion-body">{coordinatore.codice_fiscale}</div>
        //     </div>
        // </div>

    )
}

export default CoordinatoreListItem
