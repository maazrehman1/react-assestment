import logo from './logo.svg';
import './App.css';
import BaseLayout from './layouts/base-layout/base-layout';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomeIndex from './pages/home/home-index';
import ProductDetails from './pages/product-details/product-details';



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<BaseLayout><HomeIndex /></BaseLayout>} />
          <Route exact path="/product" element={<BaseLayout><ProductDetails /></BaseLayout>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
