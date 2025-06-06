import trips from "../arrays/viaggi"
import TripCard from "../components/TripCard"

const HomePage = () => {
    return (
        <div className="container py-5">
            <div className="row row-gap-4">
                {trips.map(trip => (
                    <TripCard key={trip.id_viaggio} trip={trip} />
                ))}
            </div>
        </div>
    )
}

export default HomePage
