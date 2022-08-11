import { useSelector } from 'react-redux';
import Navbar from './navbar';
import logo from './ligi.svg';

const Header = () => {
  const [exhibitions, total] = useSelector((state) => state.gallery);
  return (
    <header>
      <div>
        <img src={logo} />
      </div>
      <button type="button">
        Next
      </button>
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
