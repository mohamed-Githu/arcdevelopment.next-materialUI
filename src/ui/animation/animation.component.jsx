import React from "react";

import Lottie from "react-lottie";

const Animation = ({ data, ...props }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: data,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} {...props} />;
};

export default Animation;
