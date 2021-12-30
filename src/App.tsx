import { NewRoom } from './pages/NewRoom';
import { Home } from './pages/Home';
import { Routes as Router, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Router>
        <Route path='/' element={<Home />} />
        <Route path='/rooms/new' element={<NewRoom />} />
      </Router>
    </BrowserRouter>
  );
}

export default App;
