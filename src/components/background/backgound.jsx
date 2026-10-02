import React from "react";
const Background = () => {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#9DD5F7]">
      {/* Big Circle */}
      <div className="absolute w-[530px] h-[530px] rounded-full bg-[#1598EE] left-[39%] top-[15%]" />
      {/* Small Blue Bubbles */}
      <div className="absolute w-4 h-4 rounded-full bg-[#35AEF3] left-[28%] top-[26%]" />
      <div className="absolute w-4 h-4 rounded-full bg-[#35AEF3] right-[4%] top-[51%]" />
      <div className="absolute w-4 h-4 rounded-full bg-[#35AEF3] left-[10%] bottom-[13%]" />
      
    </div>
  );
};
export default Background;