import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddressLink from "../components/AddressLink";
import PlaceGallery from "../components/PlaceGallery";
import BookingDates from "../components/BookingDates";

const SingleBooking = () => {
  const { id } = useParams();

  const [booking, setBooking] = useState(null);

  useEffect(() => {
    axios.get("/bookings").then((response) => {
      const foundBooking = response.data.filter(({ _id }) => _id === id);
      if (foundBooking) {
        setBooking(foundBooking);
      }
    });
  }, [id]);

  if (!booking) return "";

  // console.log(booking);

  return (
    <div className="my-8">
      <h1 className="text-3xl">{booking[0].place.title}</h1>

      <AddressLink className=" my-2 block ">
        {booking[0].place.address}
      </AddressLink>

      <div className="flex items-center justify-between bg-gray-200 p-6 my-6 rounded-2xl">
        <div>
          <h2 className="text-2xl mb-4">Your booking information : </h2>

          <BookingDates booking={booking[0]} />
        </div>
        <div className="bg-primary p-6 text-white rounded-2xl">
          <div>Total Price :</div>
          <div className="text3xl">{booking[0].price}</div>
        </div>
      </div>

      <PlaceGallery place={booking[0].place} />
    </div>
  );
};

export default SingleBooking;
