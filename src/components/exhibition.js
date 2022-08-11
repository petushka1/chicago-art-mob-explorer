import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux/es/exports';

// import { fetchArtists } from '../store/gallery';

const Exhibition = (props) => {
  const {
    id, title, image_url, status, artwork_ids, department_display, artist_ids,
  } = props;

  return (
    <NavLink to={`/details/id=${id}`}>
      <div style={{ backgroundImage: `url(${image_url})` }}>
        <h3>{title}</h3>
        <p>{department_display}</p>
        <p>{status}</p>
      </div>
    </NavLink>
  );
};

export default Exhibition;

// <NavLink to='/details' onClick={showExhibition}>details</NavLink>
