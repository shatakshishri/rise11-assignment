import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import Drawer from "./components/Drawer";
import Navbar from "./components/Navbar";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";

const dummyCities = [
  { name: "City1", desc: "City1" },
  { name: "City2", desc: "City2" },
  { name: "City3", desc: "City3" },
  { name: "City4", desc: "City4" },
  { name: "City5", desc: "City5" },
  { name: "All Cities", desc: "" },
];

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dir, setDir] = useState("left");
  return (
    <>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen} dir={dir} />
      <div className="w-screen">
        <Navbar setIsOpen={setIsOpen} setDir={setDir} />
        <div className="flex justify-center items-center flex-col overflow-x-hidden w-full">
          <div className="shadow-md flex space-x-3 py-3 px-5 mt-2 border-2 rounded-md">
            <p>City 1</p>
            <p>City 2</p>
            <p>City 3</p>
          </div>
          <div className="flex space-x-2 mt-28 text-xl xs:text-3xl">
            <p>Book from</p>
            <p className="flex items-center text-mPurple font-bold">
              San Francisco <BiChevronDown />{" "}
            </p>
            <p>to</p>
          </div>
          <div className="flex flex-wrap items-center p-3 justify-center lg:justify-start">
            {dummyCities.map((city, index) => (
              <div
                key={index.toString()}
                className="border-2 w-[300px] m-3 p-3"
              >
                <p>{city.name}</p>
                <p>{city.desc}</p>
              </div>
            ))}
          </div>
          <div className="w-full bg-[#c3c3c3] flex flex-col md:flex-row justify-center items-center py-6">
            <div>
              <p className="text-center">Hello World</p>
              <img src={img1} alt="img1" className="xs:m-6" />
              <p className="text-center">Hello World</p>
            </div>
            <div>
              <p className="text-center">Rainbow</p>
              <img src={img2} alt="img2" className="xs:m-6" />
              <p className="text-center">Rainbow</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
