import React from 'react'

const CoordinatoreListItem = ({ coordinatore }) => {
    return (
        <li className="list-group-item border-0">
            <p>{coordinatore.Nome} {coordinatore.Cognome}</p>
        </li>
    )
}

export default CoordinatoreListItem
