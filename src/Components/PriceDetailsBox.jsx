import React from "react";

const PriceDetailsBox = ({ totalAmount, discount }) => {
  return (
    <div className="bg-white p-8">
      <div className="flex justify-between mb-2">
        <p>Sub Total</p> <p>₹{totalAmount}</p>
      </div>
      <div className="flex justify-between mb-4 ">
        <p>Discount</p> <p>₹{discount || 0}</p>
      </div>
      <hr />
      <div className="flex justify-between font-bold text-[18px] my-5">
        <p>Total Amount</p> <p>₹{totalAmount}</p>
      </div>
    </div>
  );
};

export default PriceDetailsBox;
