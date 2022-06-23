import { Switch, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import Home from "./components/Home/home";
import { ROUTE_NAMES } from "./constants";
import Browse from "./pages/Browse/browse";
import Login from "./pages/Login/login";
import Register from "./pages/Register/register";

const App = () => {
  return (
    <>
      <Switch>
        <Route path={ROUTE_NAMES.browse} component={Browse} />
        <Route path={ROUTE_NAMES.login} component={Login} /> 
        <Route path={ROUTE_NAMES.register} component={Register} />
        <Route path={ROUTE_NAMES.home} component={Home} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
