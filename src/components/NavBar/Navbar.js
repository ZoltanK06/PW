import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink, Logo, BarContainer, CartLogo} from './Navbar.style'
// import { GiMuscleUp } from 'react-icons/gi'
import {useAuth} from '../../Pages/AccountHandler'
import {useSelector, useDispatch} from 'react-redux';
import {useState, useEffect} from 'react'
import { getCartPrograms, deleteCartItems } from '../../actions/cartPrograms'
import { useHistory, useLocation } from 'react-router';
import decode from 'jwt-decode';

function Navbar( {changeState_Sbar}) {

    const history = useHistory();
    const location = useLocation();
    const dispatch = useDispatch();
    const cartPrograms = useSelector((state) => state.cartPrograms);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    const logout = () => {
        dispatch({ type: 'LOGOUT' });
        dispatch(deleteCartItems());
    
        history.push('/');
    
        setUser(null);
    };

    useEffect(() => {
        dispatch(getCartPrograms());
        const token = user?.token;

        if (token) {
          const decodedToken = decode(token);
    
          if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }
    
        setUser(JSON.parse(localStorage.getItem('profile')));
      }, [dispatch, location])
    
    return (
        <Nav>
            <NavLink to='/'>
                <Logo />    {/* <GiMuscleUp style={{color: '#92DCE5', fontSize: '50px'}} /> */}
            </NavLink>

            <BarContainer onClick={changeState_Sbar} >
                    <Bars />
            </BarContainer>

            <NavMenu>
                { user?.result.type == 'admin' ? (
                    <>
                    <NavLink to='/Admin/Users' activeStyle>Users</NavLink>
                    <NavLink to='/Admin/Messages' activeStyle>Messages</NavLink>
                    <NavLink to='/Admin/Orders' activeStyle>Orders</NavLink>
                    <NavLink to='/Admin/Discounts' activeStyle>Discounts</NavLink>
                    </>
                ) : (
                    <>
                    <NavLink to='/Shop' activeStyle>Shop</NavLink>
                    <NavLink to='/Aboutus' activeStyle>About Us</NavLink>
                    <NavLink to='/Contact' activeStyle>Contact Us</NavLink>
                    <NavLink to='/Featured' activeStyle>Featured</NavLink>
                    <NavLink to='/Cart' > 
                    <CartLogo />{cartPrograms.length !== 0 ? (<h4> ({cartPrograms.length}) </h4>) : (<></>)} 
                    </NavLink>
                    </>
                )}
               
                { user?.result ? (
                    <NavBtn> 
                        <NavBtnLink onClick={logout} to="/">Log Out</NavBtnLink>
                    </NavBtn>
                ) : (
                    <NavBtn>
                        <NavBtnLink to='/LogIn'>Sign In</NavBtnLink>
                    </NavBtn>
                )}  
            </NavMenu>
           
            
           
        </Nav>
        
    )
}

export default Navbar
