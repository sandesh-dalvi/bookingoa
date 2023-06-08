import React, { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";

import axios from "axios";

import Perks from "../components/Perks";
import PhotosUploader from "../components/PhotosUploader";
import AccountNav from "../components/AccountNav";

const PlacesForm = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [desc, setDesc] = useState("");
  const [perks, setPerks] = useState([]);
  const [extraInfo, setExtraInfo] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [maxGuests, setMaxGuests] = useState(1);
  const [price, setPrice] = useState(1000);

  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get("/places/" + id).then((response) => {
      const { data } = response;
      setTitle(data.title);
      setAddress(data.address);
      setDesc(data.desc);
      setPerks(data.perks);
      setExtraInfo(data.extraInfo);
      setCheckIn(data.checkIn);
      setCheckOut(data.checkOut);
      setMaxGuests(data.maxGuests);
      setAddedPhotos(data.photos);
      setPrice(data.price);
    });
  }, [id]);

  function inputDesc(label) {
    return <p className="text-gray-500 text-sm">{label}</p>;
  }
  function inputHeader(label) {
    return <h2 className="text-2xl mt-4">{label}</h2>;
  }

  function preInput(header, description) {
    return (
      <>
        {inputHeader(header)}
        {inputDesc(description)}
      </>
    );
  }

  async function savePlace(e) {
    e.preventDefault();

    const placeData = {
      title,
      address,
      addedPhotos,
      desc,
      perks,
      extraInfo,
      checkIn,
      checkOut,
      maxGuests,
      price,
    };

    if (id) {
      const response = await axios.put("/places", { id, ...placeData });

      setRedirect(true);
    } else {
      const response = await axios.post("/places", {
        ...placeData,
      });
      setRedirect(true);
    }
  }

  if (redirect) {
    return <Navigate to={"/account/places"} />;
  }

  return (
    <div>
      <AccountNav />
      <form onSubmit={savePlace}>
        {preInput(
          "Title",
          "Title for your place. Should be short and catchy as in advertisement."
        )}

        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="title, for example: My lovely apartment"
        />
        {preInput("Address", "Address to your place")}

        <input
          type="text"
          name="address"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="address"
        />
        {preInput("Photos", "more = better")}
        <PhotosUploader
          addedPhotos={addedPhotos}
          setAddedPhotos={setAddedPhotos}
        />

        {preInput("Description", "Description of your place")}

        <textarea
          name="desc"
          id="desc"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />

        {preInput("Perks", "Select Perks of your place")}
        <Perks selected={perks} onChange={setPerks} />

        {preInput("Extra Info", "house rules, etc")}
        <textarea
          name="extraInfo"
          id="extraInfo"
          value={extraInfo}
          onChange={(e) => setExtraInfo(e.target.value)}
        />

        {preInput(
          "Check in & out times, max guests And Price",
          "add check in and out times, remember to have time window for cleaning the room between guests"
        )}
        <div className="grid gap-2 grid-cols-2 md:grid-cols-4">
          <div>
            <h3 className="mt-2 ">Check in time</h3>
            <input
              type="text"
              name="checkIn"
              id="checkIn"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              placeholder="14:00"
            />
          </div>
          <div>
            <h3 className="mt-2 ">Check out time</h3>

            <input
              type="text"
              name="checkOut"
              id="checkOut"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              placeholder="16:00"
            />
          </div>
          <div>
            <h3 className="mt-2 ">Max number of guests</h3>

            <input
              type="number"
              name="maxGuests"
              id="maxGuests"
              value={maxGuests}
              onChange={(e) => setMaxGuests(e.target.value)}
            />
          </div>
          <div>
            <h3 className="mt-2 ">Price per night</h3>

            <input
              type="number"
              name="price"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>
        <div>
          <button className="primary my-4">Save</button>
        </div>
      </form>
    </div>
  );
};

export default PlacesForm;
