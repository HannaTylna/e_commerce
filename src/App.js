import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import ProductListPage from './pages/ProductListPage';
import ProductDetailPage from './pages/ProductDetailPage';

function App() {
  return (
    <div className="wrapper">
        <Routes>
           <Route path="/" element={<ProductListPage />} />
           <Route path="/products/:id" element={<ProductDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
