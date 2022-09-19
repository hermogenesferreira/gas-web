import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { AddInvoice } from './pages/AddInvoice';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddInvoice />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
