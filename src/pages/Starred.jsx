import { useQuery } from 'react-query';
import { useStarredShows } from '../lib/useStarredShows';
import { getShowByIds } from '../API/tvmaze';
import ShowGrid from '../components/Shows/ShowGrid';
import { TextCenter } from '../components/common/TextCenter';

const Starred = () => {
  const [starredShowsIds] = useStarredShows();

  const { data: starredShows, error: starredShowsError } = useQuery({
    queryKey: ['starred', starredShowsIds],
    queryFn: () =>
      getShowByIds(starredShowsIds).then(result =>
        result.map(show => ({ show }))
      ),
    refetchOnWindowFocus: false,
  });

  console.log({ starredShows });

  if (starredShows?.length === 0) {
    return <TextCenter>No Shows were Starred</TextCenter>;
  }

  if (starredShows?.length > 0) {
    return <ShowGrid shows={starredShows} />;
  }

  if (starredShowsError) {
    return <TextCenter>Error Occured: {starredShowsError.message}</TextCenter>;
  }

  return <TextCenter>Shows are Loading</TextCenter>;
};

export default Starred;
