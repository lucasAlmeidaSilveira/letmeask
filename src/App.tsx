import { Routes as Router, Route, BrowserRouter } from 'react-router-dom';

import { NewRoom } from './pages/NewRoom';
import { Home } from './pages/Home';

import { AuthContextProvider } from './contexts/AuthContext';
import { Room } from './pages/Room';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Router>
          <Route path='/' element={<Home />} />
          <Route path='/rooms/new' element={<NewRoom />} />
          <Route path='/rooms/:id' element={<Room />} />
        </Router>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
