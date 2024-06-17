import React from "react";

const BatchCard = ({
  title,
  isEnabled,
  seats,
  rac,
  availableSeats,
  onClick,
  id,
}) => {
  return (
    <div className="block ml-5 my-10">
      <p>{title}</p>
      <div className="flex items-center">
        <button
          className={`${
            availableSeats === 0 && rac == 0 ? "bg-red-500" : "bg-[#1550A2]"
          } text-white font-bold p-2 px-4 rounded-xl mr-3`}
          onClick={() => onClick(id)}
        >
          {availableSeats === 0 && rac == 0
            ? "Closed"
            : (seats / availableSeats) * 100 < 10 && rac == 0
            ? "Fast Filling"
            : rac === 1
            ? "RAC"
            : "Select"}
        </button>
        {(availableSeats === 0 && rac === 0)
          ? ""
          : <p>{availableSeats === 0 && rac !== 0 ? `${rac} RAC` : `${availableSeats} Seats`}</p>
        }
      </div>
    </div>
  );
};

export default BatchCard;
