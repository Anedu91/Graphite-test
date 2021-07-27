import {BrowserRouter, Switch, Route} from "react-router-dom"; 
import Home from '../../pages/Home';
import NotFound from "../../pages/NotFound";
import Recipes from '../../pages/Recipes';

const Router = () =>{
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/recipes" component={Recipes}/>
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  )
  
}

export default Router