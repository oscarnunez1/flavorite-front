import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { User } from '../../types/models';
import './NavBar.css';
import logo from '/flavorite-logo.png'

interface NavBarProps {
  user: User | null;
  handleLogout: () => void;
}

const NavBar = (props: NavBarProps): JSX.Element => {
  const { user, handleLogout } = props;
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="nav-bar">
      <div className="nav-bar-container">
        <NavLink to="/" className="logo">
          <img src={logo} alt="app-logo" className='app-logo'/>
        </NavLink>
        <button className="hamburger-menu" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`nav-links ${showMenu ? 'show-menu' : ''}`}>
          {user && (
            <>
              <li className="nav-link">Welcome, {user.name}</li>
              <li className="nav-link">
                <NavLink to="/meals">Meals</NavLink>
              </li>
              <li className="nav-link">
                <NavLink to="/change-password">Change Password</NavLink>
              </li>
              <li className="nav-link" onClick={handleLogout}>
                LOG OUT
              </li>
            </>
          )}
          {!user && (
            <>
              <li className="nav-link">
                <NavLink to="/login">Log In</NavLink>
              </li>
              <li className="nav-link">
                <NavLink to="/signup">Sign Up</NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
