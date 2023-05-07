import './App.css';
import AllShows from './Components/allShows';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SummaryPage from './Components/summaryPage';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AllShows />} exact/>
        <Route path='/:name/:id' element={<SummaryPage />} exact />
      </Routes>
      
      </BrowserRouter>
   
    </div>
  );
}

export default App;
