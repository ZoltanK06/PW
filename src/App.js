import './App.css'
import Navbar from './components/NavBar/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Pages/Home'
import Shop from './Pages/Shop'
import AboutUs from './Pages/AboutUs';
import Cart from './Pages/Cart';
import Sidebar from './components/NavBar/Sidebar';
import {useState, useEffect} from 'react'
import SignUp from './Pages/SignUp';
import LogIn from './Pages/LogIn';
import Contact from './Pages/Contact';
import Featured from './Pages/Featured';
import AdminUsers from './AdminPages/AdminUsers';
import AdminMessages from './AdminPages/AdminMessages';
import AdminOrders from './AdminPages/AdminOrders';
import AdminDiscounts from './AdminPages/AdminDiscounts';
import AccountHandler from './Pages/AccountHandler';
import {app} from './firebase-config'
import CartHandler from './Pages/CartHandler';
import CheckOut from './Pages/CheckOut';
import { deleteCartItems } from './actions/cartPrograms';
import {getAdmins} from './actions/admins';
import {useDispatch} from 'react-redux'

function App() {
  
  const dispatch = useDispatch();
  const [openSbar, setopenSbar] = useState(false);
  const [user, setUser] = useState("");

    const changeState_Sbar = () => {
        setopenSbar(!openSbar);
    };

    const handleLogOut = () => {
        dispatch(deleteCartItems());
        app.auth().signOut();
  }

    const authListener = () => {
      app.auth().onAuthStateChanged(user => {
          if(user) {
              setUser(user);
          }else{
              setUser('');
          }
      })
  }
  
  useEffect(() => {
      authListener();
      getAdmins();
  }, [])

  return (    
      <Router>
          <Navbar user={user} handleLogOut={handleLogOut} changeState_Sbar={changeState_Sbar} />
          <Sidebar user={user} handleLogOut={handleLogOut} changeState_Sbar={changeState_Sbar}/>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Shop" exact component={Shop} />
            <Route path="/Aboutus" exact component={AboutUs} />
            <Route path="/Cart" exact component={Cart} />
            <Route path="/Contact" exact component={Contact} />
            <Route path="/Signup" exact component={AccountHandler}/>
            <Route path="/LogIn" exact component={AccountHandler} />
            <Route path="/Featured" exact component={Featured} />
            <Route path="/Checkout" exact component={CheckOut} />
            <Route path="/Admin/Users" exact component={AdminUsers} />
            <Route path="/Admin/Messages" exact component={AdminMessages} />
            <Route path="/Admin/Orders" exact component={AdminOrders} />
            <Route path="/Admin/Discounts" exact component={AdminDiscounts} />
         </Switch>
      </Router>
  );
}

export default App;
