"use client"
import getShops from '@/libs/getShops'
import Image from 'next/image'
import { ShopItem } from '../../interfaces'
import axios from 'axios';
import { useState, useEffect } from 'react';
import ShopCard from '@/components/ShopCard';
import { Link } from '@mui/material';


export default function Home() {
  // const shops = await getShops()
  const [shops, setShops] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/v1/shops');
        const { data } = response;

        if (data.success) {
          setShops(data.data);
        } else {
          console.error('Error fetching data:', data);
        }
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <main className='pt-12 px-5'>
      <div className="max-w-3xl mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
    <div className="mb-4">
      <h1 className="text-2xl font-semibold text-center text-gray-800 mb-4">Welcome to ZenSerenity Massage Haven</h1>
      <p className="text-gray-700">
        Where tranquility meets rejuvenation, and every touch is a journey to serenity. Immerse yourself in the art of relaxation as we bring you a haven of peace and well-being, offering a seamless online platform to book your bespoke massage experience across multiple locations.
      </p>
    </div>

    <div className="mb-4">
      <p className="text-gray-700">
        At ZenSerenity, we believe that massage is not just a luxury but a vital component of self-care, a moment to recalibrate mind, body, and spirit. Our skilled therapists are dedicated to creating a personalized oasis for you, combining therapeutic techniques with a touch of Zen to ensure a truly transformative experience.
      </p>
    </div>
  </div>
  <h1 className='text-4xl font-bold text-center my-10'>Shop List</h1>
  <h1 className='text-2xl font-semibold text-center my-10'>You can view details and book by clicking on the shop card. Don't forget to log in!</h1>
  <div className="flex flex-wrap  space-x-10">
      {shops.map((shop) => (
        <Link key={shop.id} href={`/${shop.id}` } className="no-underline">
          <a className="w-1/4 mb-4"> {/* 20% width, margin-bottom for spacing */}
            <ShopCard shopName={shop.name} imgSrc={shop.picture} />
          </a>
        </Link>
      ))}
    </div>
     
    </main>
  )
}
