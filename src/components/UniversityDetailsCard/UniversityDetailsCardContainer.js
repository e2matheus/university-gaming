import { connect } from 'react-redux';

import favoritesApi from '../../api/clientDetails';
import { showSuccessMessage, showErrorMessage, closeMessage } from '../../actions/toast';
import UniversityDetailsCard from './UniversityDetailsCard';

const mapDispatchToProps = dispatch => ({
  saveFavorite: async (university, setIsFavorite) => {
    try {
      const response = await favoritesApi.addFavorite(university);

      if(!response.ok) {
        console.log('Server error: ', response.problem);
        dispatch(showErrorMessage('Saving error. Please, try again later'));
      } else {
        console.log('response:', response.data);
        setIsFavorite(true);
        dispatch(showSuccessMessage('Added to favorites'));
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
  closeToast: () => {
    dispatch(closeMessage());
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(UniversityDetailsCard);
