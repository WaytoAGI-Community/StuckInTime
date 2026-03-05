
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PatternDetail from './pages/PatternDetail';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pattern/:id" element={<PatternDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
