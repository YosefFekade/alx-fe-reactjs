import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users?q';

/**
 * Fetch GitHub users based on search criteria.
 * @param {Object} params - The search parameters.
 * @param {string} params.username - GitHub username.
 * @param {string} params.location - User location.
 * @param {number} params.minRepos - Minimum number of repositories.
 * @param {number} [params.page=1] - Page number for pagination.
 */
export const searchUsers = async ({ username, location, minRepos, page = 1 }) => {
  let query = '';

  // Construct the query string
  if (username) {
    query += `${username}`;
  }
  if (location) {
    query += `+location:${location}`;
  }
  if (minRepos) {
    query += `+repos:>${minRepos}`;
  }

  // Ensure there's a query to send
  if (!query) {
    throw new Error('You must provide at least one search parameter');
  }

  // Send the request to GitHub's Search API
  try {
    const response = await axios.get(`${BASE_URL}?q=${query}&page=${page}`);
    return response.data.items; // Return the list of users
  } catch (error) {
    throw new Error('Error fetching users from GitHub');
  }
};