import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Artist from './artist';

const Details = () => {
  const [artists, setArtists] = useState([]);

  const { id } = useParams();

  const [gallery] = useSelector((state) => state.gallery);

  const exhibition = gallery.find(({ id: exhibitionId }) => id == exhibitionId);

  const {
    artist_ids, artworks_ids, title, status, description,
  } = exhibition;

  useEffect(() => {
    const fetchArtists = async () => {
      const responce = await fetch(`https://api.artic.edu/api/v1/artists?ids=${artist_ids}`);
      const { data } = await responce.json();
      console.log(data);
      setArtists(data);
    };
    fetchArtists().catch(null);
    return () => [];
  }, []);

  return (
    <main>
      <section>
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
          <p>{status}</p>
        </div>
        <div>
          <ul>

            {artists ? artists.map((artist) => (
              <Artist
                key={artist.id}
                artistId={artist.id}
                name={artist.title}
                birth_date={artist.birth_date}
                death_date={artist.death_date}
                birth_place={artist.birth_place}
                artwork_ids={artist.artwork_ids}
                description={artist.description}
              />
            )) : 'No artists to display'}

          </ul>
        </div>
      </section>
    </main>
  );
};

export default Details;
