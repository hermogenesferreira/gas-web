import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { AddInvoice } from './pages/AddInvoice';
import { HomePage } from './pages/HomePage';
import { ListInvoice } from './pages/ListInvoice';
import { ListProduct } from './pages/ListProduct';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddInvoice />} />
        <Route path="/products" element={<ListProduct />} />
        <Route path="/invoices" element={<ListInvoice />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
