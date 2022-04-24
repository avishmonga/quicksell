import React, { useEffect, useState } from "react";
import "./Counter.css";

import { Loader } from "./Loader";
import CounterValue from "./CounterValue";
const Counter = ({handleChange, value , loading}) => {
 

  return (
    <>
      <div className="container">
        {loading ? <Loader /> : <div className="hidden">..</div>}
        <div className="counter-wrapper">
          <button
            onClick={() => {
              handleChange(-1);
            }}
          >
            -
          </button>
          <input
            value={!loading && value}
            onClick={(e)=>{
              e.target.contentEditable = true

            }}
            contentEditable
            onChange={(e) => {
              console.log(e.target);
            }}
            type="number"
          />
          <button
            onClick={() => {
              handleChange(1);
            }}
          >
            +
          </button>
        </div>
        <CounterValue value={value} loading={loading} />
      </div>
    </>
  );
};

export default Counter;
