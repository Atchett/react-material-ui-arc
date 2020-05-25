import React from "react";
import Lottie from "react-lottie";

import animationData from "../../../../../animations/landinganimation/data";

const LandingAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return <Lottie options={defaultOptions} height={"100%"} width={"100%"} />;
};

export default LandingAnimation;
