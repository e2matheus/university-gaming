import { create } from 'apisauce';

const apiClient = create({
  baseURL: 'http://localhost:9000/api'
})

const endpoint = '/favorites';

const getFavorites = () => apiClient.get(endpoint);
const addFavorite = university => apiClient.post(endpoint, university);
const getFavorite = universityName => apiClient.get(`${endpoint}?name=${universityName}`);

export default {
  getFavorites,
  addFavorite,
  getFavorite,
}
