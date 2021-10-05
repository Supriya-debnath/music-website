import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './components/About/About';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import Banner from './components/Banner/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">


  <BrowserRouter>
  <Banner></Banner>
  <Switch>
    <Route exact path="/">
      <Home></Home>
    </Route>
        <Route path="/home">
        <Home></Home>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/service">
          <Services></Services>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
        </Switch>
        <Footer></Footer>
  </BrowserRouter>
     
      
    </div>
  );
}

export default App;
