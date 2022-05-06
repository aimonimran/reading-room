import './App.css';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar/navBar';
import Home from './pages/Home/home';
import AboutUs from './pages/AboutUs/about-us';
import Features from './pages/Features/features';
import Contact from './pages/Contact/contact';
import Footer from './components/Footer/footer';

const App = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path='/about' component={AboutUs} />
        <Route path='/features' component={Features} />
        <Route path='/contact' component={Contact} />
        <Route path='/' component={Home} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
