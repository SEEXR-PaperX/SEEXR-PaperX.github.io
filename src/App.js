import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MyPage from './pages/MyPage';
import Home from './pages/Home';
import Archive from './pages/Archive';
import LoginPage from './pages/LoginPage';

import Header from './components/Header';
import Navigation from './components/Navigation'

function App() {
  const disappearLocation = '/login'
  return (
    <BrowserRouter>
      <Header disappearLocation={ disappearLocation } />
      <Routes>
        <Route path="/profile" element={<MyPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/archive" element={<Archive />} />
      </Routes>
      <Navigation disappearLocation={ disappearLocation } />
    </BrowserRouter>
  );
}

export default App;
