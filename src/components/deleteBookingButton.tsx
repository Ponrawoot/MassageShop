"use client"

import axios from "axios";

export default function DeleteBookingButton({bookId,token}:{bookId:string, token:string}) {

    async function DeleteBooking(bookId:string, token:string) {
        try {
          const response = await axios.delete(
            `http://localhost:5000/api/v1/bookings/${bookId}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
              },
            }
          );
          console.log('Delete bookings successfully!')
          return response.data;
        } catch (error) {
          console.error('Failed to delete bookings:', error.message);
          throw new Error('Failed to delete bookings');
        }
      
      }

    return (
        <div className=" rounded-lg p-2 flex items-center justify-center space-x-2">
  <button
    onClick={() => DeleteBooking(bookId, token)}
    className="bg-red-200 text-red-600 bg-transparent border border-red-600 px-2 py-1 rounded hover:bg-white hover:text-red-950 transition duration-300"
  >
    Delete
  </button>
</div>
    )
}