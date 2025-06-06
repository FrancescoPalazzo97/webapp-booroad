import { useLibraryContext } from "../contexts/LibraryContext"
import TripCard from "../components/TripCard"

const HomePage = () => {

    const { trips } = useLibraryContext();

    return (
        <div className="container py-5">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 row-gap-5">
                {trips.map(trip => (
                    <TripCard key={trip.id_viaggio} trip={trip} />
                ))}
            </div>
        </div>
    )
}

export default HomePage
