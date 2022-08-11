import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import cat from './cat.svg';
import Navbar from './navbar';

const Header = () => {
  const [exhibitions, total] = useSelector((state) => state.gallery);
  return (
    <header>
      <div>
      <NavLink to="/">
        <img className="icon" src={cat} />
        </NavLink>
      </div>
      <div>
        <span>Art</span><span>Institute</span><span>Chicago</span>
      </div>
      <div>
        <p>Total:</p>
        <p>{total}</p>
      </div>
      <Navbar />
      here will be logo and navbar
    </header>
  );
};

export default Header;
