import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Cancel from './pages/Cancel';
import Success from './pages/Success';
import Store from './pages/Store';

function App() {

  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route index element={<Store />} />
          <Route path="success" element={<Success />} />
          <Route path="cancel" element={<Cancel />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
