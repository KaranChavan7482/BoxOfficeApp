import ActorCard from './ActorCard';
import { FlexGrid } from '../common/FlexGrid';
import ImageNotFound from '../../lib/ImageNotFound.png';

const ActorGrid = ({ actors }) => {
  return (
    <FlexGrid>
      {actors.map(data => (
        <ActorCard
          key={data.person.id}
          name={data.person.name}
          country={data.person.country ? data.person.country.name : null}
          birthday={data.person.birthday}
          deathday={data.person.deathday}
          image={data.person.image ? data.person.image.medium : ImageNotFound}
        />
      ))}
    </FlexGrid>
  );
};

export default ActorGrid;
