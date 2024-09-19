import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users';

export const searchUsers = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}?${query}`);
    return response.data.items;
  } catch (error) {
    throw new Error('Error fetching users');
  }
};