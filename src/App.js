import { Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/footer";
import Home from "./components/Home/home";
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
