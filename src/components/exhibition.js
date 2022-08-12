/* eslint-disable camelcase */

import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './exhibition.module.css';

// import { fetchArtists } from '../store/gallery';

const Exhibition = (props) => {
  const {
    id, title, image_url, status,
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

Exhibition.defaultProps = {
  id: '',
  title: 'Unknown',
  image_url: null,
  status: 'Unconfirmed',
};

Exhibition.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  image_url: PropTypes.string,
  status: PropTypes.string,
};

export default Exhibition;

// <NavLink to='/details' onClick={showExhibition}>details</NavLink>
