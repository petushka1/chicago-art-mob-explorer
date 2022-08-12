import { useSelector } from 'react-redux/es/exports';
import Exhibition from './exhibition';
import styles from './exhibitions.module.css';

const Exhibions = () => {
  const [exhibitions, total] = useSelector((state) => state.gallery);

  return (
    <section className={styles.wrapper}>
      {exhibitions ? exhibitions.map((item) => (
        <Exhibition
        className={styles.exhibition}
          key={item.id}
          id={item.id}
          title={item.title}
          image_url={item.image_url}
          status={item.status}
          artwork_ids={item.artwork_ids}
          department_display={item.department_display}
          artist_ids={item.artist_ids}
          short_description={item.short_description}
         
        />
      )) : ''}

    </section>
  );
};

export default Exhibions;
