import { useSelector } from 'react-redux/es/exports';
import Exhibition from './exhibition';

const Exhibions = () => {
  const [exhibitions, total] = useSelector((state) => state.gallery);

  return (
    <section>
      <button type="button">
        Next
      </button>
      <div>
        <p>Total:</p>
        <p>{total}</p>
      </div>
      {exhibitions ? exhibitions.map((item) => (
        <Exhibition
          key={item.id}
          id={item.id}
          title={item.title}
          image_url={item.image_url}
          status={item.status}
          artwork_ids={item.artwork_ids}
          department_display={item.department_display}
          artist_ids={item.artist_ids}
        />
      )) : ''}

    </section>
  );
};

export default Exhibions;
