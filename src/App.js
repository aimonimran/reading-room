import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import Footer from "./components/Footer/footer";
import Browse from "./pages/Browse/browse";
import Login from "./pages/Login/login";
import Register from "./pages/Register/register";

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/browse" component={Browse} />
        <Route path='/login' component={Login} /> 
        <Route path='/register' component={Register} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
