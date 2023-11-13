import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import OtherPage from './pages/otherPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/otherPage" element={<OtherPage />} />
      </Routes>
    </Router>
  );
}

export default App;
