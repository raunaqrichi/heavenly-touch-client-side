import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import initializeAuthentication from './Firebase/firebase.initialize';
import AuthProvider from './Context/AuthProvider';
import LogIn from './Components/Login/LogIn';
import AddANewPlan from './Components/AddANewPlan/AddANewPlan';
import Booking from './Components/Booking/Booking';
import MyPlans from './Components/MyPlans/MyPlans';
import ManageAllPlans from './Components/ManageAllPlans/ManageAllPlans';
import Contact from './Components/Contact/Contact';
import Services from './Components/Services/Services';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import NotFound from './Components/NotFound/NotFound';
import AboutUs from './Components/AboutUs/AboutUs';



initializeAuthentication();
function App() {
  return (
    <div>
      <AuthProvider>
      <Router>
      <Header></Header>
      <Switch>
        <Route exact path='/'>
        <Home></Home>
        </Route>
        <PrivateRoute exact path='/Services'>
        <Services></Services>
        </PrivateRoute>
        <Route exact path='/Home'>
        <Home></Home>
        </Route>
        <PrivateRoute exact path='/Booking/:Id'>
        <Booking></Booking>
        </PrivateRoute>
        <Route path='/MyPlans'>
          <MyPlans></MyPlans>
        </Route>
        <Route path='/ManageAllPlans'>
          <ManageAllPlans></ManageAllPlans>
        </Route>
        <Route exact path='/AddANewPlan'>
        <AddANewPlan></AddANewPlan>
        </Route>
        <Route exact path='/AboutUs'>
          <AboutUs></AboutUs>
        </Route>
        <Route exact path='/Contact'>
          <Contact></Contact>
        </Route>
        <Route exact path='/LogIn'>
        <LogIn></LogIn>
        </Route>
        <Route exact path='*'>
        <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
      </Router>
      
      
      
     
      </AuthProvider>
    </div>
  );
}

export default App;
