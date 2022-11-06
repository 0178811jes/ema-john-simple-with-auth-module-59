import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Authcontext } from '../../contexts/Usercontext';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    const { user,logout } = useContext(Authcontext);
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                {
                    user?.uid ?
                        <button className="btn-logout"onClick={logout}>Log out</button>
                        :
                        <>
                            <Link to="/login">Login</Link>
                            <Link to="/signup">SignUp</Link>
                        </>
                }
            </div>
        </nav>
    );
};

export default Header;