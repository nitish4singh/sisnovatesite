import React from "react";
import Laptop from "../assets/carrent.png";

const WebAppProduct = () => {
  return (
    <div className="w-full  py-5 px-3">
      <p className="text-container text-[#00df9a] pb-10 ">
        Sisnovate Web & App Product
      </p>
      <div className="max-w-[840px] mx-auto grid  md:grid-cols-2 ">
        <img
          className="w-[500px] mx-auto my-20 mr-0  rounded-lg hover:scale-110 duration-200"
          src={Laptop}
          alt="/"
        />
        <div className="flex flex-col justify-center">
          <div className="w-full shadow-xl bg-gray-600 ml-20 flex flex-col p- md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8">School Management system</p>
              <p className="py-2 border-b mx-8">MANAGEMENT SOFTWARE</p>
              <p className="py-2 border-b mx-8 ">
                Hospital / HOTEL & RESTAURANT management software
              </p>
              <p className="py-2 border-b mx-8">
                Travel & logistic managemant solution
              </p>
              <p className="py-2 border-b mx-8">
                Billing /Inventort Management software
              </p>
              <p className="py-2 border-b mx-8">Media & Entanerment</p>
              <p className="py-2 border-b mx-8">Ecommerce Solution</p>
              <p className="py-2 border-b mx-8">Consultancy /Jobs Portal</p>
              <p className="py-2 border-b mx-8">Real Estate System</p>
              <p className="py-2 border-b mx-8">on Demand Software Solution </p>
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

export default WebAppProduct;
