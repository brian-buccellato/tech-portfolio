import './App.css'
import ResponsiveAppBar from './components/NavBar/NavBar';
import About from './views/About/About';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Projects from './views/Projects/Projects';

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Projects/>} />
      </Routes>
    </>
  )
}

export default App
