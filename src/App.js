import { Switch, Route, Redirect } from "react-router-dom";
import { Footer } from "./components/Footer";
import { ROUTE_NAMES } from "./constants";
import Home from "./components/Home/home";
import Browse from "./pages/Browse/browse";
import Login from "./pages/Login/login";
import Register from "./pages/Register/register";
import Genres from "./components/Genres/genres";
import Write from "./pages/Write/write";
import LocalAuthors from "./pages/LocalAuthors/localAuthors";
// import useAuth from "./context/auth/useAuth";

const App = () => {
  // const { authorised } = useAuth();
  return (
    <>
      <Switch>
        {/* <Route
          path={ROUTE_NAMES.genre}
          exact
          render={(props) => {
            !authorised ? (
              <Redirect to={ROUTE_NAMES.login} />
            ) : (
              <Genres {...props} />
            );
          }}
        /> */}
        <Route path={ROUTE_NAMES.localauthors} component={LocalAuthors} />
        <Route path={ROUTE_NAMES.write} component={Write} />
        <Route path={ROUTE_NAMES.genre} component={Genres} />
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