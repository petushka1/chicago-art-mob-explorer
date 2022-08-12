/* eslint-disable camelcase */

import PropTypes from 'prop-types';
import styles from './artwork.module.css';

const Artwork = (props) => {
  const {
    title, date_start, date_end, image_id,
  } = props;
  return (
    <div className={styles.cover}>
      <div className={styles.artwork} style={{ backgroundImage: `url(https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg)` }} />
      <div className={styles.content}>
        <h3>
          {title}
        </h3>
        <p>{`${date_start} - ${date_end}`}</p>
      </div>

    </div>
  );
};

Artwork.defaultProps = {
  image_id: null,
  title: 'Unknown',
  date_start: null,
  date_end: null,
};

Artwork.propTypes = {
  image_id: PropTypes.string,
  title: PropTypes.string,
  date_start: PropTypes.number,
  date_end: PropTypes.number,
};

export default Artwork;
