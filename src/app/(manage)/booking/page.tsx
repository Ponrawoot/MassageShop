// "use client"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import getBooks from "@/libs/getBooks";
import getUserProfile from "@/libs/getUserProfile"
import DeleteBookingButton from "@/components/deleteBookingButton";
import { getServerSession } from "next-auth"
// import { useState, useEffect } from "react";

export default async function ManageBook() {
    const session = await getServerSession(authOptions)
    
    if (!session || !session.user.token) return (
        <div className="pt-12 px-5 text-2xl font-bold">
          <p className="m-20">Please access the role by logging in.</p>
        </div>
      );

    const profile = await getUserProfile(session.user.token)
    var createdAt = new Date(profile.data.createdAt)

    const isAdmin = profile.data.role === "admin";

  if (!isAdmin) {
    return (
      <div className="pt-12 px-5 m-20">
        <p className="text-2xl font-bold">
          Your Booking
        </p>
      </div>
    );
  }

  const bookings = await getBooks(session.user.token)
  // const booking = await getBook(session.user.token)
    return(
        <div className="pt-12 px-5 m-20">
            <p className="text-4xl font-bold">All Bookings</p>
            {bookings.data.map((bookItem) => (
        <div className="m-20 p-8 bg-blue-500 text-white rounded-lg shadow-md">
        <p className="text-xl">Name: {bookItem.user.name}</p>
        <p className="text-xl">Shop: {bookItem.shop.name}</p>
        <p className="text-xl">Booking Date: {bookItem.bookingDate}</p>
        <p className="text-xl">Service Minutes: {bookItem.serviceMinute}</p>
        <DeleteBookingButton bookId={bookItem._id} token={session.user.token}></DeleteBookingButton>
        
      </div>
      ))}

        </div>
    )
}