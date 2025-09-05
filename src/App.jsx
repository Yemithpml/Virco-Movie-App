import "./css/App.css"
import Favourite from './Pages/Favourite'
import Home from './Pages/Home'
import Movie from './Pages/Movie'
import {Routes, Route} from "react-router-dom"
import { MovieProvider } from "./contexts/MovieContext"
import NavBar from './components/NavBar'

function App() {

  return (
    <>
    <MovieProvider>
    <NavBar />
    <main className='main-content'>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/movie' element={<Movie />}/>
        <Route path='/favourite' element={<Favourite />}/>
      </Routes>
    </main>
    </MovieProvider>
    </>
  )
}

export default App
