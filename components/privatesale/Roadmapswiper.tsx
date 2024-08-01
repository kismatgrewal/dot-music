import React from "react";
import Swiperactive from "./Swiperactive";

const Roadmapswiper = () => {
  return (
    <div className=" lg:px-3 pt-[60px] bg-[#030203]">
      <div className="xl:max-w-[1290px] lg:max-w-[900px]  md:max-w-[770px] sm:max-w-[600px] max-w-[300px] w-full mx-auto  h-[450px] bg-[url('/img/swiper-bg.png')] bg-bottom bg-no-repeat bg-cover">
        <div className="my-[90px] pt-[70px]">
          {" "}
          <Swiperactive />
        </div>
      </div>
    </div>
  );
};

export default Roadmapswiper;
