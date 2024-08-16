import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CircleUser, User } from "lucide-react";
import user from '../assets/black3.png'
const ConsumerDetails = () => {
  const [adminName, setAdminName] = useState("");
  const [adminPhonenumber, setAdminPhonenumber] = useState("");

  const { customerId } = useParams();

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/customer/${customerId}/details`
        );
        const data = response.data.admin;
        setAdminName(data.username);
        setAdminPhonenumber(data.phonenumber);
      } catch (error) {
        console.error("Error fetching admin data:", error);
      }
    };
    fetchAdminData();
  }, [customerId]);

  return (
    <div className="flex mt-24 items-center justify-center">
      <div className="bg-white flex justify-center border h-[320px] w-96 shadow-2xl relative overflow-hidden hover:shadow-2xl group rounded-xl p-5 transition-all mx-7 duration-500 transform">
        <div className="flex-row mx-auto items-center">
          <img
            src={user}
            className="size-48  mx-auto"
          />
          {/* <div className=""> */}
          <p className="text-black text-center font-bold">Consumer Details</p>
          <h1 className="text-black text-center text-lg font-bold">
            Name:{adminName}
          </h1>
          <p className="text-md font-bold text-center text-black transition-opacity duration-500">
            Mobile:{adminPhonenumber}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConsumerDetails;
