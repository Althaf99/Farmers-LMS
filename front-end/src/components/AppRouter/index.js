import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Login from "../../pages/Login";
import SideNavBar from "../SideNavBar";
import ListCourses from "../../pages/Courses/ListCourses";

import FarmerRegistration from "../Registration/Farmer";
import ListUnits from "../../pages/Courses/ListUnits";
import FarmerProfile from "../../pages/Farmer/FarmerProfile";
import RegistrationForm from "../Test/RegistrationForm";
import ConfirmationPage from "../Test/ConfirmationPage";
import ListFarmers from "../../pages/Farmer/ListFarmers";
import Home from "../../pages/Home";
import ContactUs from "../../pages/ContactUs";

const AppRouter = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Login />}></Route>
        <Route path="/reg" element={<RegistrationForm />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/contactUs" element={<ContactUs />}></Route>
        <Route path="/lms" element={<SideNavBar />}>
          <Route path="courses" element={<ListCourses />} />
          <Route path="courses/units/:id" element={<ListUnits />} />
          <Route path="farmers" element={<ListFarmers />} />
          <Route path="farmer/profile/:id" element={<FarmerProfile />} />
          <Route path="farmerRegistration" element={<FarmerRegistration />} />
        </Route>
      </Route>
    )
  );
  return { router };
};

export { AppRouter };
