import { createContext, useState, useEffect, useContext } from "react";
import initialTripsArray from "../arrays/viaggi"
import initialOrganizersArray from "../arrays/coordinatorori"
import initialMembersArray from "../arrays/partecipanti"

const LibraryContext = createContext();

const LibraryProvider = ({ children }) => {

    const [trips, setTrips] = useState(initialTripsArray);
    const [organizers, setOrganizers] = useState(initialOrganizersArray);
    const [members, setMembers] = useState(initialMembersArray);

    return (
        <LibraryContext.Provider value={{ trips, setTrips, organizers, setOrganizers, members, setMembers }}>
            {children}
        </LibraryContext.Provider>
    )
}

const useLibraryContext = () => {
    const context = useContext(LibraryContext);
    return context;
}

export { useLibraryContext, LibraryProvider };