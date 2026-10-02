"use client";
import React, { useState } from "react";
const UI = () => {
  const removeOneElement = () => {
    setDisplay(display.slice(0, -1));
  };
  const [display, setDisplay] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const handleClick = (value) => {
    setDisplay(display + value);
  };
  const clear = () => {
    setDisplay("");
  };
  const calculate = () => {
    try {
      setDisplay(eval(display).toString());
    } catch {
      setDisplay("Error");
    }
  };
  return (
    <div className="absolute left-175 top-30 max-[768px]:left-1/2 max-[768px]:-translate-x-1/2 max-[768px]:top-20">
      <div
        className={`relative z-10 w-[270px] rounded-[25px] p-5 shadow-2xl transition-all duration-300 ${
          darkMode
            ? "bg-[#171717] text-white"
            : "bg-[#EAF6FF] text-gray-800"
        }`}
      >
        <div className="flex justify-end gap-2 mb-4">
          <button
            onClick={() => setDarkMode(false)}
            className={`w-9 h-9 rounded-full shadow ${
              darkMode
                ? "bg-[#303030] text-white"
                : "bg-white text-yellow-500"
            }`}
          >
            ☀
          </button>
          <button
            onClick={() => setDarkMode(true)}
            className={`w-9 h-9 rounded-full shadow ${
              darkMode
                ? "bg-[#333333] text-white"
                : "bg-white text-gray-700"
            }`}
          >
            🌙
          </button>
        </div>
        {/* Display */}
        <div
          className={`h-[100px] rounded-2xl mb-5 p-4 flex flex-col justify-end items-end overflow-hidden ${
            darkMode ? "bg-[#242424]" : "bg-white"
          }`}
        >
          <span className="text-2xl font-semibold">
            {display ? `${display}` : "0"}
          </span>
        </div>
        {/* Small buttons */}
        <div className="grid grid-cols-4 gap-2 mb-3">
          <button className="h-8 rounded-lg text-xs bg-white/50">
            e
          </button>
          <button className="h-8 rounded-lg text-xs bg-white/50">
            μ
          </button>
          <button className="h-8 rounded-lg text-xs bg-white/50">
            sin
          </button>
          <button className="h-8 rounded-lg text-xs bg-white/50">
            deg
          </button>
        </div>
        {/* Calculator Buttons */}
        <div className="grid grid-cols-4 gap-2">
          <button
            onClick={clear}
            className="h-11 rounded-xl bg-gray-400 text-white"
          >
            AC
          </button>
          <button
            onClick={removeOneElement}
            className="h-11 rounded-xl bg-gray-400 text-white"
          >
            ⌫
          </button>
          <button
            onClick={() => handleClick("/")}
            className="h-11 rounded-xl bg-blue-600 text-white"
          >
            /
          </button>
          <button
            onClick={() => handleClick("*")}
            className="h-11 rounded-xl bg-blue-600 text-white"
          >
            *
          </button>
          <button
            onClick={() => handleClick("7")}
            className="h-11 rounded-xl bg-white text-blue-500 shadow"
          >
            7
          </button>
          <button
            onClick={() => handleClick("8")}
            className="h-11 rounded-xl bg-white text-blue-500 shadow"
          >
            8
          </button>
          <button
            onClick={() => handleClick("9")}
            className="h-11 rounded-xl bg-white text-blue-500 shadow"
          >
            9
          </button>
          <button
            onClick={() => handleClick("-")}
            className="h-11 rounded-xl bg-blue-600 text-white"
          >
            −
          </button>
          <button
            onClick={() => handleClick("4")}
            className="h-11 rounded-xl bg-white text-blue-500 shadow"
          >
            4
          </button>
          <button
            onClick={() => handleClick("5")}
            className="h-11 rounded-xl bg-white text-blue-500 shadow"
          >
            5
          </button>
          <button
            onClick={() => handleClick("6")}
            className="h-11 rounded-xl bg-white text-blue-500 shadow"
          >
            6
          </button>
          <button
            onClick={() => handleClick("+")}
            className="h-11 rounded-xl bg-blue-600 text-white"
          >
            +
          </button>
          <button
            onClick={() => handleClick("1")}
            className="h-11 rounded-xl bg-white text-blue-500 shadow"
          >
            1
          </button>
          <button
            onClick={() => handleClick("2")}
            className="h-11 rounded-xl bg-white text-blue-500 shadow"
          >
            2
          </button>
          <button
            onClick={() => handleClick("3")}
            className="h-11 rounded-xl bg-white text-blue-500 shadow"
          >
            3
          </button>
          <button
            onClick={calculate}
            className="h-[92px] rounded-xl bg-blue-500 text-white row-span-2"
          >
            =
          </button>
          <button
            onClick={() => handleClick("0")}
            className="h-11 rounded-xl bg-white text-blue-500 shadow col-span-2"
          >
            0
          </button>
          <button
            onClick={() => handleClick(".")}
            className="h-11 rounded-xl bg-white text-blue-500 shadow"
          >          .
          </button>
        </div>
      </div>
    </div>
  );
};
export default UI;
