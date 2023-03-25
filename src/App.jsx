import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Cancel from './pages/Cancel';
import Success from './pages/Success';
import Store from './pages/Store';
import { CartProvider } from './cartContext';

function App() {

  return (
    <div className="App">
      <CartProvider>
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route index element={<Store />} />
            <Route path="success" element={<Success />} />
            <Route path="cancel" element={<Cancel />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  )
}

export default App
