import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import SideNavbar from "../../components/SideNavbar/SideNavbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Base.scss";
import Chat from "../Chat/Chat";
import Departments from "../Departments/Departments";
import Doctors from "../Doctors/Doctors";
import DoctorsAppointments from "../Doctors appointments/DoctorsAppointments";
import DoctorsSchedule from "../Doctors schedule/DoctorsSchedule";
import Email from "../Email/Email";
import Patients from "../Patients/Patients";
import Staffs from "../Staffs/Staffs";
import Dashboard from "../Dashboard/Dashboard";

const Base = () => {
  return (
    <div className="Base">
      <Navbar />
      <SideNavbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/patients" element={<Patients />} />
          <Route
            path="/doctor-appointments"
            element={<DoctorsAppointments />}
          />
          <Route path="/staffs" element={<Staffs />} />
          <Route path="DoctorsSchedule" element={<DoctorsSchedule />} />
          <Route path="/email" element={<Email />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Base;
