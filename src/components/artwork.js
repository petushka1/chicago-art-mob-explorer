import styles from './artwork.css';

const Artwork = (props) => {
    const { id, title, artist_title, date_start, date_end, artwork_type_title, image_id } = props;
   return (
  <div>
    <div>
      <h3>
        {title}
      </h3>
    </div>
    <div className={styles.filtered}>
      <img className={styles.thumbnail} src={`https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`} />
    </div>
  </div>
);}

export default Artwork;



/*

 key
        id
        image_id
        artist_id
        category_ids
        artwork_type_id
        category_titles
        title
        artist_title
        date_start
        date_end
        place_of_origin
        artwork_type_title
        technique_titles
        material_titles
        medium_display
        thumbnail

*/