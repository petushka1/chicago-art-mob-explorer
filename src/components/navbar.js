import { useDispatch } from 'react-redux';
import styles from './navbar.module.css';
import { fetchExhibitions } from '../store/gallery';
import arrow from './arrow.svg';
import arrowBack from './arrowBack.svg';

const Navbar = () => {
  const dispatch = useDispatch();
  let page = 1;

  const handleNextPage = () => {
    page += 1;
    dispatch(fetchExhibitions(page));
  };

  const handlePrevPage = () => {
    if (page > 1) {
      page -= 1;
      dispatch(fetchExhibitions(page));
    }
  };

  return (
    <div className={styles.nav}>
      <input alt="icon" type="image" onClick={handlePrevPage} src={arrowBack} />

      <input alt="icon" type="image" src={arrow} onClick={handleNextPage} />
    </div>
  );
};

export default Navbar;
