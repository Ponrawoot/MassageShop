"use client";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers";
import { useState } from "react";
import { Dayjs } from "dayjs";
import axios from "axios";

export default function BookForm({token,shopId}: {token:string,shopId:string}) {
  const [reserveDate, setReserveDate] = useState<Dayjs | null>(null);
  const [serviceMinute, setServiceMinute] = useState(60);

  async function handleAddBooking() {
    // console.log(token)
    try {
      const response = await axios.post(
        `http://localhost:5000/api/v1/shops/${shopId}/bookings`,
        {
          bookingDate: reserveDate ? reserveDate.toString() : null,
          serviceMinute: serviceMinute,
          createdAt: "2023-08-20",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("successfully created a booking!");
      return response.data;
    } catch (error) {
      alert("You reserve up to only 3 reservations")
      console.error("Failed to create booking:", error.message);
      throw new Error("Failed to create booking");
    }
  }
  //   const [selectedTime, setSelectedTime] = useState(null);
  return (
    <div className="m-10 flex flex-row">
      <label htmlFor="massageDuration">Select Massage Duration:</label>
      <select
        id="massageDuration"
        value={serviceMinute}
        className="w-1/4 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 mr-5"
        onChange={(e) => setServiceMinute(parseInt(e.target.value))}
      >
        <option value={60}>60 minutes</option>
        <option value={90}>90 minutes</option>
        <option value={120}>120 minutes</option>
      </select>
      <label htmlFor="massageDate">Select Massage Date:</label>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          className="bg-white"
          value={reserveDate}
          onChange={(value) => {
            setReserveDate(value);
          }}
        />
      </LocalizationProvider>
      <button
        onClick={handleAddBooking}
        className="ml-5 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
      >
        Book
      </button>
    </div>
  );
}
