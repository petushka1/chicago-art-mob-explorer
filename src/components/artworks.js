import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { fetchArtworks } from '../store/gallery';

const Artworks = () => {
  const artworks = useSelector((state) => state.gallery);

  return (
    <main>
      <section>
        {artworks ? artworks.map((item) => (
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
      </section>
    </main>
  );
};

export default Artworks;
