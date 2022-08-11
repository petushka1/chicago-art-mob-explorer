import { useState, useEffect } from 'react';
import Artwork from './artwork';

const Artist = (props) => {
  // const [artworks, setArtworks] = useState([]);
  const [state, setState] = useState({ isOpen: false });
  const [artworks, setArtworks] = useState([]);
  const { artistId, name, birth_date, death_date, birth_place, artwork_ids } = props;

  const showArtworks = () => setState({ isOpen: !state.isOpen });

  useEffect(() => {
    const fetchArtworks = async () => {
      const responce = await fetch(`https://api.artic.edu/api/v1/artworks?ids=${artwork_ids}`);
      const { data } = await responce.json();
      console.log(data);
      setArtworks(data);
    };
    fetchArtworks().catch(null);
    return () => [];
  });

  return (
    <div>
      <div>
        <h3>{name}</h3>
        <div>
          {`${birth_date} - ${death_date}`}
        </div>
        {birth_place === null ? '' : <span>{birth_place}</span>}
      </div>
      <button type="button" onClick={showArtworks}>Artworks</button>
      <div>
        {state.isOpen ? (
            <div>
              {artworks ? artworks.filter((item) => artistId == item.artist_id).map((item) => (
                <Artwork
                  key={item.id}
                  id={item.id}
                  image_id={item.image_id}
                  artist_id={item.artist_id}
                  category_ids={item.category_ids}
                  artwork_type_id={item.artwork_type_id}
                  category_titles={item.category_titles}
                  title={item.title}
                  artist_title={item.artist_title}
                  date_start={item.date_start}
                  date_end={item.date_end}
                  place_of_origin={item.place_of_origin}
                  artwork_type_title={item.artwork_type_title}
                  technique_titles={item.technique_titles}
                  material_titles={item.material_titles}
                  medium_display={item.medium_display}
                  thumbnail={item.thumbnail}
                />
              )) : ''}
            </div>
          )
          : ''}
      </div>
    </div>
  );
};

export default Artist;
