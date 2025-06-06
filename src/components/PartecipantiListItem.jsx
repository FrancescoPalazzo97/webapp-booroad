import React from 'react'

const PartecipantiListItem = ({ partecipante }) => {
    return (
        <li className="list-group-item border-0">
            <p>{partecipante.Nome} {partecipante.Cognome}</p>
        </li>
    )
}

export default PartecipantiListItem
