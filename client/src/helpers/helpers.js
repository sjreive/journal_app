import React from "react";

import {
  FaRegAngry,
  FaAngry,
  FaTired,
  FaRegTired,
  FaFrownOpen,
  FaGrimace,
  FaMehBlank
} from "react-icons/fa";

const getEmoticon = (feeling, size, className) => {
  switch (feeling) {
    case "Anger":
      return <FaRegAngry className={className} size={size} />;

    case "Rage":
      return <FaAngry className={className} size={size} />;

    case "Exasperated":
      return <FaTired className={className} size={size} />;

    case "Irritable":
      return <FaRegTired className={className} size={size} />;

    case "Envy":
      return <FaFrownOpen className={className} size={size} />;

    case "Disgust":
      return <FaGrimace className={className} size={size} />;

    default:
      return <FaMehBlank className={className} size={size} />;
  }
};

export default getEmoticon;
