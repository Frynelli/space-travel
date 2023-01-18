import { Route, Switch } from 'react-router-dom';
import './dist/index.css';
import Destination from './pages/Destination/Destination';
import Home from './pages/Home';
import Crew from "./pages/Crew/Crew";
import Technology from './pages/Technology/Technology';
import NavBar from "./components/NavBar";
function App() {
  return (
    <div>
      <NavBar/>
      <Switch>
      <Route path="/" exact>
        <Home/>
      </Route>
      <Route path="/destination/">
        <Destination/>
      </Route>
      <Route path="/crew">
        <Crew/>
      </Route>
      <Route path="/technology/">
        <Technology/>
      </Route>
      </Switch>
    </div>
  );
}

export default App;
