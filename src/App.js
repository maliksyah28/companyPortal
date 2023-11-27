import './App.css';
// import About from './Pages/about';
//pages
import Index from './Pages/Index';
// import Contact from './Pages/Contact';
// import AboutUs from './Pages/LandingPages/AboutUs/index';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <noscript>You need to enable JavaScript to run this app.</noscript>

      {/* <Index/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
