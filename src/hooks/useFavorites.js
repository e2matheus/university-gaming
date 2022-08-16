import { useEffect, useState } from 'react';

import favoritesApi from '../api/clientDetails';

const useFavorites = () => {
  const [favorites, setFavorites] = useState();

  useEffect(() => {
    loadFavorites();
  }, []);

  const loadFavorites = async () => {
    try {
      const response = await favoritesApi.getFavorites();

      if(!response.ok) {
        console.log('Server error: ', response.problem);
      } else {
        console.log('response:', response.data);
        setFavorites(response.data);
      } 
    } catch (error) {
      console.log('Loading favorites error: ', error);
    }
  }

  return favorites;
};

export default useFavorites;
