import './App.css';
import { BrowserRouter as Router ,Route, Routes, } from 'react-router-dom';
import { About } from './components/About';
import { Home } from './components/Home';
import { Suspense } from 'react';
import { MoviePage } from './components/MoviePage';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className=" font-serif ">
      <Router>
        <Suspense fallback={<span className="text-center font-bold text-2xl flex justify-center items-center">Loading..</span>}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/movie/:id" element={<MoviePage />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
