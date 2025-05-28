import React, { useState } from "react";
import { motion, useScroll } from "framer-motion";

const work = () => {
  const [images, setImages] = useState([
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "56%",
      left: "44%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "45%",
      left: "56%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      top: "60%",
      left: "53%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      top: "43%",
      left: "40%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: "65%",
      left: "55%",
      isActive: false,
    },
  ]);

  const { scrollYProgress } = useScroll();

 scrollYProgress.on('change',(data)=>{

    function showImg(arr){
      setImages(prev=>(
        prev.map((item, index)=>(
          arr.indexOf(index) === -1?
          {...item,isActive:false}:
          {...item,isActive:true}
        ))
      ))
    }

    switch(Math.floor(data*100)){
      case 0:
        showImg([])
        break;
      case 1:
        showImg([0])
        break;
      case 2:
        showImg([0,1])
        break;
      case 3:
        showImg([0,1,2])
        break;
      case 4:
        showImg([0,1,2,3])
        break;
      case 6:
        showImg([0,1,2,3,4,5])
        break;
      case 8:
        showImg([0,1,2,3,4,5,6])
        break;
    }
  })

  return (
    <div className="w-full">
      <div className="relative max-w-screen-xl mx-auto text-center">
        <h1 className="text-[30vw] leading-none font-medium tracking-tight">
          work
        </h1>
        <div className="w-full h-full absolute top-10">
          {images.map(
            (image, i) =>
              image.isActive && (
                <img
                  key={i}
                  className="absolute w-64 h-64 rounded-lg -translate-x-[50%] -translate-y-[50%]"
                  style={{ top: image.top, left: image.left }}
                  src={image.url}
                  alt=""
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default work;
