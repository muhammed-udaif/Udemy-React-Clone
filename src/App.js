import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import AppContent from './AppContent';

function App() {
  return (
  <Router>
    <AppContent/>
  </Router>
  );
}

export default App;
