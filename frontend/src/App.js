import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import OtherPage from './pages/otherPage';

function App() {
  useEffect(() => {
    document.title = "To-Do List";
  }, []);
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
