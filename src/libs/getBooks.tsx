import axios from 'axios';

export default async function getBooks(token: string) {
  try {
    const response = await axios.get('http://localhost:5000/api/v1/bookings',
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      console.log('Fetch bookings successfully!');

    return response.data;
  } catch (error) {
    console.error('Failed to fetch bookings:', error.message);
    throw new Error('Failed to fetch bookings');
  }
}