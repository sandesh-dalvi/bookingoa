import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import axios from "axios";
import Filters from "../components/Filters";

function Home() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    axios.get("/places").then((response) => {
      setPlaces([...response.data]);
    });
  }, []);
  return (
    <div className="mt-8 ">
      <Filters />
      <div className="mt-6 grid gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {places.length > 0 &&
          places.map((place) => (
            <Link to={"/place/" + place._id} key={place._id}>
              <div className="bg-gray-500 mb-2 rounded-2xl flex object-cover aspect-square">
                {place.photos?.[0] && (
                  <img
                    className="rounded-2xl"
                    src={"http://localhost:5000/uploads/" + place.photos[0]}
                    alt=""
                  />
                )}
              </div>
              <h2 className="font-bold leading-4">{place.address}</h2>
              <h3 className="text-sm leading-4 text-gray-500">{place.title}</h3>
              <div className="mt-1 ">
                <span className="font-bold">₹ {place.price}</span> per night
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default Home;
