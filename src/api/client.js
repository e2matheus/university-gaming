import { create } from 'apisauce';

const apiClient = create({
  baseURL: 'http://universities.hipolabs.com/'
})

const endpoint = '/search?country=United+States';

const getUniversities = () => apiClient.get(endpoint);

export default {
  getUniversities,
}
