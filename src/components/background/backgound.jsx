import React from "react";
const Background = () => {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#9DD5F7]">
      {/* Big Circle */}
      <div
        className="
          absolute 
          w-[530px] h-[530px] 
          rounded-full 
          bg-[#1598EE] 
          left-[39%] top-[15%]
          max-[768px]:w-[380px]
          max-[768px]:h-[380px]
          max-[768px]:left-1/2
          max-[768px]:-translate-x-1/2
          max-[768px]:top-[20%]
        "
      />
      {/* Small Blue Bubbles */}
      <div
        className="
          absolute 
          w-4 h-4 
          rounded-full 
          bg-[#35AEF3] 
          left-[28%] top-[26%]
          max-[768px]:left-[10%]
          max-[768px]:top-[18%]
        "
      />
      <div
        className="
          absolute 
          w-4 h-4 
          rounded-full 
          bg-[#35AEF3] 
          right-[4%] top-[51%]
          max-[768px]:right-[8%]
          max-[768px]:top-[55%]
        "
      />
      <div
        className="
          absolute 
          w-4 h-4 
          rounded-full 
          bg-[#35AEF3] 
          left-[10%] bottom-[13%]
          max-[768px]:left-[8%]
          max-[768px]:bottom-[15%]
        "
    />
    </div>
  );
};
export default Background;
