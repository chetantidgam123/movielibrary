import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import AddNewMovie from "../Components/AddNewMovie";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/addnewmovie" element={<AddNewMovie />}></Route>
        <Route path="/editmovie/:id" element={<AddNewMovie />}></Route>
      </Routes>
    </>
  );
};

export default AllRoutes;
