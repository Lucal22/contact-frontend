import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './container/Login';
import Header from './container/Header';
import AuthProvider from './context/AuthProvider';
import Contacts from './container/Contacts';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login/contacts" element={<Contacts />} />
          <Route path="*" element={'PÁGINA NÃO EXISTE'} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
