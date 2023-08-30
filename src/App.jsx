import './App.css'
import GenreMovieList from './Components/GenreMovieList'
import Header from './Components/Header'
import ProductionHouse from './Components/ProductionHouse'
import Slider from './Components/Slider'
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <div>

        <Header />
        <Slider />
        <ProductionHouse />
        <GenreMovieList />
        <Footer />
      </div>

    </>
  )
}

export default App
