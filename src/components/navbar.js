import { useDispatch } from 'react-redux';
import styles from './navbar.module.css';
import { fetchExhibitions } from '../store/gallery';

const Navbar = () => {
  const dispatch = useDispatch();
  let page = 1;

  const handleNextPage = () => {
    page += 1;
    dispatch(fetchExhibitions(page));
  };

  const handlePrevPage = () => {
    if (page > 0) {
      page -= 1;
      dispatch(fetchExhibitions(page));
    } else {

    }
  };

  return (
    <ul className={styles.nav}>
      <li onClick={handlePrevPage}>
        previous
      </li>
      <li onClick={handleNextPage}>
        next
      </li>

    </ul>
  );
};

export default Navbar;
