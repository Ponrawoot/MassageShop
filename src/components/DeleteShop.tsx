"use client";
import Image from "next/image";
import { ShopItem } from "../../interfaces";
import axios from "axios";
import { useState, useEffect } from "react";

export default function DeleteShopForm() {
  const [shops, setShops] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/v1/shops");
        const { data } = response;

        if (data.success) {
          setShops(data.data);
        } else {
          console.error("Error fetching data:", data);
        }
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  const deleteShopById = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5000/api/v1/shops/${id}`);
  
      // Assuming you want to handle the response in some way
      console.log('Shop deleted successfully:', response.data);
  
      // If needed, you can return the response data or other information
      return response.data;
    } catch (error) {
      // Handle error, e.g., show an error message
      console.error('Failed to delete shop:', error.message);
  
      // If needed, you can throw the error or return some indication of failure
      throw error;
    }
  };

  return (
    <div>
      {shops.map((shop) => (
        <div key={shop.id}>
          <p>{shop.id}, {shop.name}</p>
          <button onClick={handleDeleteShop}>Delete</button>

        </div>
      ))}
    </div>
  );
}
