import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Navigation from './components/shared/nagivation/Navigation';
import './app.css'
function App() {
  return <BrowserRouter>
            <Navigation />
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
            </Switch>
        </BrowserRouter>
}

export default App;
