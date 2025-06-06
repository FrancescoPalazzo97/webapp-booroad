import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layout/DefaultLayout"
import HomePage from "./pages/HomePage"
import TripDetails from "./pages/TripDetails"
import { LibraryProvider } from "./contexts/LibraryContext"

function App() {

  return (
    <LibraryProvider>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={HomePage} />
            <Route path=":id" Component={TripDetails} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LibraryProvider>
  )
}

export default App
