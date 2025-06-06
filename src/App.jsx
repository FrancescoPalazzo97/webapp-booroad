import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layout/DefaultLayout"
import HomePage from "./pages/HomePage"
import TripDetails from "./pages/TripDetails"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route path="/" Component={HomePage} />
          <Route path=":id" Component={TripDetails} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
