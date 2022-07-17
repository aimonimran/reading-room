import { Switch, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import { ROUTE_NAMES } from "./constants";
import Home from "./components/Home/home";
import Browse from "./pages/Browse/browse";
import Login from "./pages/Login/login";
import Register from "./pages/Register/register";
import Genres from "./components/Genres/genres";
import Write from "./pages/Write/write";
import LocalAuthors from "./pages/LocalAuthors/localAuthors";
import ProtectedRoute from "./components/common/protectedRoute";

const App = () => {
  return (
    <>
      <Switch>
        <ProtectedRoute path={ROUTE_NAMES.localauthors} component={LocalAuthors} />
        <ProtectedRoute path={ROUTE_NAMES.write} component={Write} />
        <ProtectedRoute path={ROUTE_NAMES.genre} component={Genres} />
        <Route path={ROUTE_NAMES.browse} exact component={Browse} />
        <Route path={ROUTE_NAMES.login} component={Login} authorised="true" />
        <Route path={ROUTE_NAMES.register} component={Register} authorised="true" />
        <Route path={ROUTE_NAMES.home} exact component={Home} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;