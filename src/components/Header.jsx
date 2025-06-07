import { Link } from "react-router-dom"
import AddTripButton from "./AddTripButton"

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link to={`/`} className="navbar-brand d-flex">
                        <img src="/react.svg" alt="Logo" className="d-inline-block align-text-top" />
                        <h1 className="ms-3">BooRoad</h1>
                    </Link>
                    <AddTripButton />
                </div>
            </nav>
        </header>
    )
}

export default Header
