import { NewRoom } from './pages/NewRoom';
import { Home } from './pages/Home';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route path='/' exact component={Home} />
      <Route path='/rooms/new' component={NewRoom} />
    </Router>
  );
}

export default App;
