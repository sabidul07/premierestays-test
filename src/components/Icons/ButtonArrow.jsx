import React from "react";

const ButtonArrow = () => {
  return (
    <>
      <svg
        className="group-hover:translate-x-2 transition-all duration-300 ease-in-out"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.4297 5.92999L20.4997 12L14.4297 18.07"
          stroke="#2B3244"
          strokeWidth="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M3.5 12H20.33"
          stroke="#2B3244"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </>
  );
};

export default ButtonArrow;
