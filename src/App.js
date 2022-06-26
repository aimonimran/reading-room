import { Switch, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import Home from "./components/Home/home";
import UserInterface from "./components/UserInterface/userInterface";
import { ROUTE_NAMES } from "./constants";
import Browse from "./pages/Browse/browse";
import Login from "./pages/Login/login";
import Register from "./pages/Register/register";
import Genres from './components/Genres/genres';

const App = () => {
  return (
    <>
      <Switch>
        <Route path={ROUTE_NAMES.genre} exact component={Genres} />
        <Route path={ROUTE_NAMES.user} exact component={UserInterface} />
        <Route path={ROUTE_NAMES.browse} exact component={Browse} />
        <Route path={ROUTE_NAMES.login} component={Login} />
        <Route path={ROUTE_NAMES.register} component={Register} />
        <Route path={ROUTE_NAMES.home} exact component={Home} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
