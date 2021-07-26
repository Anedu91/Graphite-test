import {BrowserRouter, Switch, Route} from "react-router-dom"; 
import Home from '../../pages/Home';
import Recipes from '../../pages/Recipes';

const Router = () =>{
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/recipes" component={Recipes}/>
      </Switch>
    </BrowserRouter>
  )
  
}

export default Router