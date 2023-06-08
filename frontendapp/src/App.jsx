import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Layout from "./Layout";
import axios from "axios";
import { UserContextProvider } from "./UserContext";
import Profile from "./pages/Profile";
import Places from "./pages/Places";
import PlacesForm from "./pages/PlacesForm";
import SinglePlace from "./pages/SinglePlace";

axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account/" element={<Profile />} />
          <Route path="/account/places" element={<Places />} />
          <Route path="/account/places/new" element={<PlacesForm />} />
          <Route path="/account/places/:id" element={<PlacesForm />} />
          <Route path="/place/:id" element={<SinglePlace />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
