import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;
const apiUrl = 'https://newsapi.org/v2/top-headlines';

const api = axios.create({
  baseURL: apiUrl,
  params: {
    apiKey,
    country: 'in', // Change as needed
  },
});

export const getNews = async () => {
  try {
    const response = await api.get('');
    return response.data.articles;
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
};
