import { useDispatch } from 'react-redux';
import { fetchExhibitions } from '../store/gallery';

const Navbar = () => {
  const dispatch = useDispatch();
  let page = 1;

  const handleNextPage = () => {
    page+=1;
    dispatch(fetchExhibitions(page))
  }

  const handlePrevPage = () => {
    if (page > 0) {
    page-=1;
    dispatch(fetchExhibitions(page))
  } else {
    return
  }
  }

  return (
  <ul>
         <li onClick={handleNextPage}>
        next
      </li>
         <li onClick={handlePrevPage}>
        previous
      </li>
  </ul>
);}

export default Navbar;
