import { connect } from 'react-redux';

import favoritesApi from '../../api/clientDetails';
import { showInfoMessage, closeMessage } from '../../actions/toast';
import UniversityDetailsCard from './UniversityDetailsCard';

const mapDispatchToProps = dispatch => ({
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
  toastInfo: (message, isVisible = true) => {
    dispatch(showInfoMessage(message, isVisible));
  },
  closeToast: () => {
    dispatch(closeMessage());
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(UniversityDetailsCard);
