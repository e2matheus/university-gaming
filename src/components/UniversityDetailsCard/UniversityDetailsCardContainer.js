import { connect } from 'react-redux';

import favoritesApi from '../../api/clientDetails';
import UniversityDetailsCard from './UniversityDetailsCard';

const mapDispatchToProps = () => ({
  saveFavorite: async (university) => {
    try {
      const response = await favoritesApi.addFavorite(university);

      if(!response.ok) {
        console.log('Server error: ', response.problem);
      } else {
        console.log('response:', response.data);
      } 
    } catch (error) {
      console.log('Add favorite error: ', error);
    }
  },
  loadFavorite: async (universityName, setIsFavorite) => {
    try {
      const response = await favoritesApi.getFavorite(universityName);

      if(!response.ok) {
        console.log('Server error: ', response.problem);
      } else {
        const stateFavorite = response.data;
        setIsFavorite(!!stateFavorite);
      }
    } catch (error) {
      console.log('Get favorite error: ', error);
    }
  },
});

export default connect(
  mapDispatchToProps,
)(UniversityDetailsCard);
