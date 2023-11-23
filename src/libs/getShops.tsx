import axios from 'axios';

export default async function getShops() {
  try {
    const response = await axios.get('http://localhost:5000/api/v1/shops');

    return response.data;
  } catch (error) {
    console.error('Failed to fetch shops:', error.message);
    throw new Error('Failed to fetch shops');
  }
}