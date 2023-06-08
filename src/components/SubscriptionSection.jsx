import React from "react";
import Laptop from "../assets/carrent.png";

const SubscriptionService = () => {
  return (
    <div className="w-full  py-5 px-3">
      <p className="text-container text-[#00df9a] pb-10 ">
        Sisnovate Subscriptions Service
      </p>
      <div className="max-w-[1000px] mx-auto grid md:grid-cols-2 ">
        <img
          className="w-[700px] mx-auto my-4 rounded-lg hover:scale-110 duration-200"
          src={Laptop}
          alt="/"
        />
        <div className="flex flex-col relative-center">
          <div className="w-full shadow-xl bg-gray-600 ml-20 flex flex-col p- md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-20 mt-8">
                Billing Management System
              </p>
              <p className="py-2 border-b mx-20">Ecommerce system</p>
              <p className="py-2 border-b mx-20">Invertory Managemant system</p>
              <p className="py-2 border-b mx-20 ">Attendance System</p>
              <p className="py-2 border-b mx-20">School management system</p>
              <p className="py-2 border-b mx-20">News Portal</p>
              <p className="py-2 border-b mx-20">Cloud Services</p>
            </div>
            <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionService;
