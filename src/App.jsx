import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login/Login.jsx';
import Profile from './pages/Profile/Profile.jsx';
import Seating from './pages/Seating/Seating.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Automatically redirect the base URL to the login page */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        
        {/*page routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/seating" element={<Seating />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;