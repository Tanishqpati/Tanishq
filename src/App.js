import './App.css';
import BooksPage from './components/BooksPage';
import {Routes,Route} from 'react-router-dom'
import BookInfo from './components/BookInfo';
import Register from './components/Register';
import FavouritesPage from './components/FavouritesPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <Navbar/>
     <Routes>
      <Route path='/' element={<BooksPage/>} />
      <Route path='/book:id' element={<BookInfo/>} />
      <Route path='/favourites' element={<FavouritesPage/>} />
      <Route path='/register' element={<Register/>} />
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
