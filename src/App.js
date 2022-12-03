import './App.css';
import './mainPageCss.css'
import './navBar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom'
import MainPage from './churchMainPage'


function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      {/* <Route path="/services"/> */}
    </Routes>
  );
}

export default App;
