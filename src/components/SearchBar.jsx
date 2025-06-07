import { useLibraryContext } from "../contexts/LibraryContext"

const SearchBar = () => {

    const { search, setSearch } = useLibraryContext()

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    return (
        <div className="row ps-5 pe-4 pt-sm-4">
            <div className="col mb-5">
                <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Cerca"
                    value={search}
                    onChange={handleSearch}
                />
            </div>
        </div>
    )
}

export default SearchBar
