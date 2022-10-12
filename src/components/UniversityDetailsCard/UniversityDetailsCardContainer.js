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
});

export default connect(
  mapDispatchToProps,
)(UniversityDetailsCard);
