import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
    </Switch>
  )  
}

export default Routes;