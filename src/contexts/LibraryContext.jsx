import { createContext, useState, useEffect, useContext } from "react";
import initialTripsArray from "../arrays/viaggi"
import initialOrganizersArray from "../arrays/coordinatorori"
import initialMembersArray from "../arrays/partecipanti"

const LibraryContext = createContext();

const LibraryProvider = ({ children }) => {

    const [trips, setTrips] = useState(initialTripsArray);
    const [organizers, setOrganizers] = useState(initialOrganizersArray);
    const [members, setMembers] = useState(initialMembersArray);
    const [search, setSearch] = useState(``);
    const [tripData, setTripData] = useState({
        destinazione: "",
        luogo_di_partenza: "",
        data_inizio: "",
        data_fine: "",
        image: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTripData({
            ...tripData,
            [name]: value
        })
    }

    const handleSubmit = e => {
        const { destinazione, luogo_di_partenza, data_inizio, data_fine, image } = tripData
        e.preventDefault()
        if (destinazione && luogo_di_partenza && data_inizio && data_fine && image) {
            const newObj = {
                id: trips.length === 0 ? 1 : trips[trips.length - 1].id + 1,
                ...tripData
            }
            console.log(newObj)
            trips.push(newObj);
            setTripData({
                destinazione: "",
                luogo_di_partenza: "",
                data_inizio: "",
                data_fine: "",
                image: ""
            })
        } else {
            alert("Compila tutti i campi")
        }
    }

    const monthConverter = (month) => {

        const monthsObj = {
            "01": "Gennaio",
            "02": "Febbraio",
            "03": "Marzo",
            "04": "Aprile",
            "05": "Maggio",
            "06": "Giugno",
            "07": "Luglio",
            "08": "Agosto",
            "09": "Settembre",
            "10": "Ottobre",
            "11": "Novembre",
            "12": "Dicembre"
        }

        return monthsObj[month] || `Boh`
    }

    const dateConverter = (data) => {

        const partiData = data.split('-');

        const anno = partiData[0];
        const mese = monthConverter(partiData[1]);
        const giorno = partiData[2];

        const dataConvertita = `${giorno} ${mese} ${anno}`;

        return dataConvertita;
    }

    const getFilteredTripData = (tripId) => {
        const tripMembers = members.filter(member => member.id_viaggio.includes(tripId))
        const tripOrganizers = organizers.filter(organizer => organizer.id_viaggio.includes(tripId))

        if (search !== '') {
            const filteredMembers = tripMembers.filter(member =>
                member.nome.toLowerCase().includes(search.toLowerCase().trim()) ||
                member.cognome.toLowerCase().includes(search.toLowerCase().trim())
            )
            const filteredOrganizers = tripOrganizers.filter(organizer =>
                organizer.nome.toLowerCase().includes(search.toLowerCase().trim()) ||
                organizer.cognome.toLowerCase().includes(search.toLowerCase().trim())
            )
            return { filteredMembers, filteredOrganizers }
        }

        return { filteredMembers: tripMembers, filteredOrganizers: tripOrganizers }
    }

    return (
        <LibraryContext.Provider value={{
            trips,
            setTrips,
            organizers,
            setOrganizers,
            members,
            setMembers,
            search,
            setSearch,
            tripData,
            setTripData,
            handleChange,
            handleSubmit,
            dateConverter,
            getFilteredTripData
        }}>
            {children}
        </LibraryContext.Provider>
    )
}

export const useLibraryContext = () => {
    const context = useContext(LibraryContext);
    return context;
}

export default LibraryProvider;