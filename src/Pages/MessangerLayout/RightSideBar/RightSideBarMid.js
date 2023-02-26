import React from "react";
import { HiLocationMarker, HiOutlineMail, HiPhone } from "react-icons/hi";

const RightSideBarMid = () => {
  return (
    <div className="p-3">
      <h1 className="text-sm mt-2">Location</h1>
      <div className="flex justify-between items-center mb-2">
        <h1>Uttara Dhaka Bangladesh</h1>
        <HiLocationMarker className="w-5 h-5" />
      </div>
      <hr />
      <h1 className="text-sm mt-2">Phone Number</h1>
      <div className="flex justify-between items-center mb-2">
        <h1>01703898622</h1>
        <HiPhone className="w-5 h-5" />
      </div>
      <hr />
      <h1 className="text-sm mt-2">Email</h1>
      <div className="flex  justify-between items-center mb-2">
        <h1 className="flex flex-wrap">mamun@gmail.com</h1>
        <HiOutlineMail className="w-5 h-5" />
      </div>
      <hr />
    </div>
  );
};

export default RightSideBarMid;
