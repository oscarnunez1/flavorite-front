import { Link } from 'react-router-dom'
import logo from '/logo.png'
import { User } from '../../types/models'
import label from '/label.png'
import './NavBar.css'

interface NavBarProps {
  user: User | null;
  handleLogout: () => void;
}

const NavBar = ({ user, handleLogout }: NavBarProps): JSX.Element => {
  return (
    <nav>
      <div style={{ display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <img src={label} alt="label" className='navbar-label' style={{ marginLeft: '10px' }} />
      </div>
      <ul>
        {user ?
          <>
            <li><Link to="/meals">Meals</Link></li>
            <li><Link to="/meals/new">New Meal</Link></li>
            <li>Welcome, {user.name}</li>
            <li><Link to="/" onClick={handleLogout}>LOG OUT</Link></li>
          </>
        :
          <>
            <li><Link to="/login">LOGIN</Link></li>
            <li><Link to="/signup">SIGN UP</Link></li>
          </>
        }
      </ul>
    </nav>
  )
}

export default NavBar

