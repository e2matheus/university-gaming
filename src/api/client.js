import { create } from 'apisauce';

const apiClient = create({
  baseURL: 'https://swapi.dev/api/'
})

const endpoint = '/people/1';

const getUniversities = () => apiClient.get(endpoint);

export default {
  getUniversities,
}
