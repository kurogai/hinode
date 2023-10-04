import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { 
  contentMisture, 
  recentUpdates, 
  topRated,
  topRating,
  tags,
  newEpisodes
} from './useLinks';

export const useDataFetching = () => {
  const [loading, setLoading] = useState({
    mistureResponseLoading: true,
    recentUpdatesLoading: true,
    topRatedLoading: true,
    topRatingLoading: true,
    tagsLoading: true,
    newEpisodesLoading: true,
  });

  const [data, setData] = useState({
    mistureResponseData: null,
    recentUpdatesData: null,
    topData: null,
    topRatedData: null,
    episodeData: null,
    tagsData: null,
    showMore: false,
  });

  const fetchData = useCallback(async () => {
    try {
      const mistureResponse = await axios.get(contentMisture);
      setLoading((prevState) => ({ ...prevState, mistureResponseLoading: false }));

      const recentUpdatesResponse = await axios.get(recentUpdates);
      setLoading((prevState) => ({ ...prevState, recentUpdatesLoading: false }));

      const topRatedResponse = await axios.get(topRated);
      setLoading((prevState) => ({ ...prevState, topRatedLoading: false }));

      const topResponse = await axios.get(topRating);
      setLoading((prevState) => ({ ...prevState, topRatingLoading: false }));

      const tagsResponse = await axios.get(tags);
      setLoading((prevState) => ({ ...prevState, tagsLoading: false }));

      const episodesResponse = await axios.get(newEpisodes);
      setLoading((prevState) => ({ ...prevState, newEpisodesLoading: false }));

      setData({
        mistureResponseData: mistureResponse.data,
        recentUpdatesData: recentUpdatesResponse.data,
        topData: topRatedResponse.data,
        topRatedData: topResponse.data,
        episodeData: episodesResponse.data,
        tagsData: tagsResponse.data,
        showMore: false,
      });
    } catch (error) {
      console.error('Data fetching error:', error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading };
}