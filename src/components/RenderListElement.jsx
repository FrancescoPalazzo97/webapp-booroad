const RenderListElement = ({ organizer, member }) => {
    if (organizer) {
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
    } else if (member) {
        const { id, nome, cognome, codice_fiscale, numero_di_telefono, numero_di_emergenza, email, id_viaggio } = member;

        return (
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#p-${id}`} aria-expanded="false" aria-controls="flush-collapseOne">
                        {nome} {cognome}
                    </button>
                </h2>
                <div id={`p-${id}`} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                        <p><strong>Numero</strong>: {numero_di_telefono}</p>
                        <p><strong>Numero di emergenza</strong>: {numero_di_emergenza}</p>
                        <p><strong>Email</strong>: {email}</p>
                        <p><strong>Codice fiscale</strong>: {codice_fiscale}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default RenderListElement;
