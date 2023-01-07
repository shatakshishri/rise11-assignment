import React from "react";
import { FiMenu } from "react-icons/fi";

const Navbar = ({ setIsOpen, setDir }) => {
  return (
    <>
      <div className="w-screen bg-lr hidden xs:flex justify-between items-center text-white h-12 px-3">
        <div className="flex items-center space-x-2">
          <p className="italic text-lg">america</p>
          <div className="vr h-12"></div>
          <p className="uppercase font-bold">Book</p>
          <p className="uppercase font-bold">Chech In</p>
          <p className="uppercase font-bold">Manage</p>
          <div className="vr h-12 hidden md:flex"></div>
          <p className="font-bold text-sm hidden md:flex">Deals</p>
          <p className="font-bold text-sm hidden md:flex">Flying With Us</p>
          <p className="font-bold text-sm hidden md:flex">Where My Fly</p>
          <p className="font-bold text-sm hidden md:flex">Sheep</p>
          <p className="font-bold text-sm hidden md:flex">FAQ</p>
          <p className="font-bold text-sm hidden md:flex">Fees</p>
        </div>
        <div className="flex items-center space-x-2">
          <p className="font-bold text-sm hidden md:flex">elevate</p>
          <p className="font-bold text-sm">SignIn</p>
          <p className="font-bold text-sm">SignUp</p>
          <div className="vr h-12 md:hidden"></div>
          <button onClick={() => {
            setDir('right');
            setIsOpen(true);
          }} >
            <FiMenu className="md:hidden text-lg" />
          </button>
        </div>
      </div>
      <div className="w-screen bg-lr flex xs:hidden justify-between items-center text-white h-12 px-3">
        <button onClick={() => {
            setDir('left');
            setIsOpen(true);
        }} >
          <FiMenu className="text-lg" />
        </button>
        {/* logo */}
        <p className="italic">america</p>
        {/* logo */}
        <button>SignIn</button>
      </div>
    </>
  );
};

export default Navbar;
