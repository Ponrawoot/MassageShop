"use client";
import { useState } from "react";
import addShop from "@/libs/addShop";

export default function AddShop({token}: {token:string}) {

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    priceLevel: 3,
    province: "",
    postalcode: "",
    tel: "",
    picture: "",
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    const updatedValue = name === 'priceLevel' ? parseInt(value, 10) : value;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddShop = async () => {
    try {
      const result = await addShop(
        token,
        formData.name,
        formData.address,
        formData.priceLevel,
        formData.province,
        formData.postalcode,
        formData.tel,
        formData.picture
      );
      console.log("Shop added successfully:", result);
      // You may want to reset the form data after successfully adding the shop
      setFormData({
        name: "",
        address: "",
        priceLevel: 3,
        province: "",
        postalcode: "",
        tel: "",
        picture: "",
      });
    } catch (error) {
      console.error("Failed to add shop:", error.message);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h1 className="text-4xl font-bold">Add Shop</h1>
      <div className="mb-6">
        <label className="block text-lg font-semibold mb-2">Shop Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="mb-6">
        <label className="block text-lg font-semibold mb-2">Address:</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="mb-6">
        <label className="block text-lg font-semibold mb-2">Province:</label>
        <input
          type="text"
          name="province"
          value={formData.province}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="mb-6">
        <label className="block text-lg font-semibold mb-2">Postal Code:</label>
        <input
          type="text"
          name="postalcode"
          value={formData.postalcode}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="mb-6">
        <label className="block text-lg font-semibold mb-2">Price Level:</label>
        <select
          name="priceLevel"
          value={formData.priceLevel}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>

      <div className="mb-6">
        <label className="block text-lg font-semibold mb-2">Telephone:</label>
        <input
          type="tel"
          name="tel"
          value={formData.tel}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="mb-6">
        <label className="block text-lg font-semibold mb-2">
          Picture Link:
        </label>
        <input
          type="text"
          name="picture"
          value={formData.picture}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>

      <button
        onClick={handleAddShop}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
      >
        Add Shop
      </button>
    </div>
  );
}
