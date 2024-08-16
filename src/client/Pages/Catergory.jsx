import React from "react";
import CountUp from "react-countup";
import { Blend, SquareUserRound, Sun, Sunset, User } from "lucide-react";

const Category = ({ morningUsers, eveningUsers, bothUsers, totalUsers }) => {
  // console.log(morningUsers)
  return (
    <div className="w-full  pl-32 mt-2 grid relative z-50 px-44 mx-5 gap-5 grid-cols-2">
      <div className="bg-gradient-to-r from-[#111111] to-[#000000] overflow-hidden  shadow-grey rounded-2xl h-[150px] w-[380px] relative" >
          <div className="absolute rounded-3xl h-[12px] -bottom-1 bg-white/20 w-[350px] right-4"></div>
        <div className="h-full pt-12">
          <div className="grid grid-cols-2 w-full justify-between mx-10">
            <div className="mx-3">
              <h1 className="text-lg text-center font-extrabold text-white">
                Morning Customer
              </h1>
              <h1 className="text-xl justify-center text-white font-extrabold flex space-x-1">
                <CountUp start={0} end={morningUsers} duration={2.5} /> <User />
              </h1>
            </div>
            <div className="-mt-5">
              <h1 className="text-white ml-5">
                <Sun className="font-extrabold h-24 w-24" />
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#111111] to-[#000000] overflow-hidden  shadow-grey rounded-2xl h-[150px] w-[380px] relative" >
          <div className="absolute rounded-3xl h-[12px] -bottom-1 bg-white/20 w-[350px] right-4"></div>
        <div className="h-full pt-12">
          <div className="grid grid-cols-2 w-full justify-between mx-10">
            <div className="mx-3">
              <h1 className="text-lg text-center font-extrabold text-white">
                Evening Customer
              </h1>
              <h1 className="text-xl justify-center text-white font-extrabold flex space-x-1">
                <CountUp start={0} end={eveningUsers} duration={2.5} /> <User />
              </h1>
            </div>
            <div className="-mt-5">
              <h1 className="text-white ml-5">
                <Sunset className="font-extrabold h-24 w-24" />
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#111111] to-[#000000] overflow-hidden  shadow-grey rounded-2xl h-[150px] w-[380px] relative" >
          <div className="absolute rounded-3xl h-[12px] -bottom-1 bg-white/20 w-[350px] right-4"></div>
        <div className="h-full pt-12">
          <div className="grid grid-cols-2 w-full justify-between mx-10">
            <div className="mx-3">
              <h1 className="text-xl text-center font-extrabold text-white">
                Both Customer
              </h1>
              <h1 className="text-xl justify-center text-white font-extrabold flex space-x-1">
                <CountUp start={0} end={bothUsers} duration={2.5} /> <User />
              </h1>
            </div>
            <div className="-mt-5">
              <h1 className="text-white ml-5">
                <Blend className="font-extrabold h-24 w-24" />
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#111111] to-[#000000] overflow-hidden  shadow-grey rounded-2xl h-[150px] w-[380px] relative" >
          <div className="absolute rounded-3xl h-[12px] -bottom-1 bg-white/20 w-[350px] right-4"></div>
        <div className="h-full pt-12">
          <div className="grid grid-cols-2 w-full justify-between mx-10">
            <div className="mx-3">
              <h1 className="text-xl text-center font-extrabold text-white">Total Customer</h1>
              <h1 className="text-xl justify-center text-white font-extrabold flex space-x-1">
                <CountUp start={0} end={totalUsers} duration={2.5} /> <User />
              </h1>
            </div>
            <div className="-mt-5">
              <h1 className="text-white ml-5">
                <SquareUserRound className="font-extrabold h-24 w-24" />
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
