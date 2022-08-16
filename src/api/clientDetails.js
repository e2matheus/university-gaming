import { create } from 'apisauce';

const apiClient = create({
  // baseURL: 'http://213.194.144.110:9000/api'
  baseURL: 'http://localhost:9000/api'
})

const endpoint = '/favorites';

const getFavorites = () => apiClient.get(endpoint);

export default {
  getFavorites,
}
