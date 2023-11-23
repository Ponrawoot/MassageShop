import axios from 'axios';

export default async function addShop(
  token: string,
  shopName: string,
  shopAddress: string,
  shopPriceLevel: number,
  shopProvince: string,
  shopPostalcode: string,
  shopTelephoneNumber: string,
  shopPicture: string
) {
  try {
    const response = await axios.post(
      'http://localhost:5000/api/v1/shops',
      {
        name: shopName,
        address: shopAddress,
        priceLevel: shopPriceLevel,
        province: shopProvince,
        postalcode: shopPostalcode,
        tel: shopTelephoneNumber,
        picture: shopPicture,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );
    console.log('Add shop successfully!')
    return response.data;
  } catch (error) {
    console.error('Failed to add shop:', error.message);
    throw new Error('Failed to add shop');
  }
}
