import { NavLink } from 'react-router-dom';
import cat from './cat.svg';

const Navbar = () => (
  <ul>
    <NavLink to="/">
      <li>
        <img className="icon" src={cat} />
      </li>
    </NavLink>
    <NavLink to="details">
      <li>
        item 1
      </li>
    </NavLink>
  </ul>
);

export default Navbar;
