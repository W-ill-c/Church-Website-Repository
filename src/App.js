import './App.css';
import './mainPageCss.css'
import './navBar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom'
import MainPage from './churchMainPage'
import ServicesPage from './services'
import './servicesPage.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/services" element={<ServicesPage />} />
    </Routes>
  );
}

export default App;
