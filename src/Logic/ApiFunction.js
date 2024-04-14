import axios from 'axios';

export const fetchMoreDataFromAPI = async (page = 1) => {
  const api = `https://prod-be.1acre.in/lands/?ordering=-updated_at&page=${page}&page_size=10`;

  try {
    const response = await axios.get(api);

  
    return response.data;
  } catch (error) {
    throw error;
  }
};

