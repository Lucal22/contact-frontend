import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './container/Login';
import Home from './container/Header';
import Header from './container/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={'PÁGINA NÃO EXISTE'} />
      </Routes>
    </Router>
  );
}

export default App;
