"use client"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers";
import { useState } from "react";
import { Dayjs } from "dayjs";

export default function Book() {
  const [reserveDate, setReserveDate] = useState<Dayjs | null>(null);
  const [serviceMinute, setServiceMinute] = useState(60);


  
//   const [selectedTime, setSelectedTime] = useState(null);
  return (
    <div className="pt-12 px-5 m-20">

<label htmlFor="massageDuration">Select Massage Duration:</label>
      <select
        id="massageDuration"
        value={serviceMinute}
        // onChange={handleSelectChange}
      >
        <option value={60}>60 minutes</option>
        <option value={90}>90 minutes</option>
        <option value={120}>120 minutes</option>
      </select>
      <label htmlFor="massageDuration">Select Massage Date:</label>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          className="bg-white"
          value={reserveDate}
          onChange={(value) => {
            setReserveDate(value);
          }}
        />
      </LocalizationProvider>
    </div>
  );
}
