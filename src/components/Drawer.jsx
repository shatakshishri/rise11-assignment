import React from "react";
import { ImCross } from "react-icons/im";

const Drawer = ({ isOpen, setIsOpen, dir }) => {
  if (!isOpen) return null;
  return (
    <div
      className={`w-screen h-screen absolute flex ${
        dir === "right" ? "justify-end" : "justify-start"
      } z-50`}
      style={{ backgroundColor: "rgba(255, 255, 255,0.3)" }}
    >
      <div className="min-w-[300px] h-screen bg-white shadow-md p-3">
        <div className="flex justify-between items-center">
          <p className="italic">america</p>
          <button onClick={() => setIsOpen(false)}>
            <ImCross className="text-lg" />
          </button>
        </div>
        <div className="flex flex-col items-end p-3 space-y-3">
          <p className="xs:hidden uppercase font-bold">Book</p>
          <p className="xs:hidden uppercase font-bold">Chech In</p>
          <p className="xs:hidden uppercase font-bold">Manage</p>
          <hr className="xs:hidden w-full" />
          <p className="font-bold text-sm">Deals</p>
          <p className="font-bold text-sm">Flying With Us</p>
          <p className="font-bold text-sm">Where My Fly</p>
          <p className="font-bold text-sm">Sheep</p>
          <p className="font-bold text-sm">FAQ</p>
          <p className="font-bold text-sm">Fees</p>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
