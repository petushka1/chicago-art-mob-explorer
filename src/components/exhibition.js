import { NavLink } from 'react-router-dom';
import styles from './exhibition.module.css';

// import { fetchArtists } from '../store/gallery';

const Exhibition = (props) => {
  const {
    id, title, image_url, status, artwork_ids, department_display, artist_ids, short_description
  } = props;

  return (
    <NavLink to={`/details/id=${id}`}>
      <div className={styles.exhibition} style={{ backgroundImage: `url(${image_url})` }}>
        <div className={styles.textWrapper}>
          <h3 className={styles.name}>{title}</h3>
          <p className={styles.status}>{status}</p>
        </div>
      </div>
    </NavLink>
  );
};

export default Exhibition;

// <NavLink to='/details' onClick={showExhibition}>details</NavLink>
