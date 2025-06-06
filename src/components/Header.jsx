import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-4">
                            <Link to={`/`} className="d-flex navbar-brand">
                                <img src="/react.svg" alt="Logo" className="d-inline-block align-text-top" />
                                <h1 className="ms-3">BooRoad</h1>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
