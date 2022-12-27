import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './container/Login';
import Home from './container/Header';
import Header from './container/Header';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={'PÁGINA NÃO EXISTE'} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
