import React from "react";

import {
  FaRegAngry,
  FaAngry,
  FaTired,
  FaFrownOpen,
  FaGrimace,
  FaMehBlank,
  FaRegFrown,
  FaFlushed,
  FaSadTear,
  FaRegSurprise,
  FaMeh,
  FaDizzy,
  FaLaugh,
  FaGrinStars,
  FaMehRollingEyes,
  FaRegSmileBeam,
  FaGrinBeam,
  FaGrinAlt,
  FaGrin,
  FaLaughSquint,
  FaRegGrinHearts,
  FaKiss,
  FaGrinHearts,
  FaKissWinkHeart,
  FaSmileBeam,
  FaRegFlushed
} from "react-icons/fa";

const getEmoticon = (feeling, size, className) => {
  switch (feeling) {
    case "Anger":
      return <FaRegAngry className={className} size={size} />;

    case "Rage":
      return <FaAngry className={className} size={size} />;

    case "Exasperated":
      return <FaMehRollingEyes className={className} size={size} />;

    case "Irritable":
      return <FaTired className={className} size={size} />;

    case "Sadness":
      return <FaRegFrown className={className} size={size} />;

    case "Disappointed":
      return <FaFrownOpen className={className} size={size} />;

    case "Shameful":
      return <FaFlushed className={className} size={size} />;

    case "Despair":
      return <FaSadTear className={className} size={size} />;

    case "Surprise":
      return <FaRegSurprise className={className} size={size} />;

    case "Stunned":
      return <FaMeh className={className} size={size} />;

    case "Confused":
      return <FaDizzy className={className} size={size} />;

    case "Amazed":
      return <FaGrinStars className={className} size={size} />;

    case "Joy":
      return <FaRegSmileBeam className={className} size={size} />;

    case "Happy":
      return <FaGrinAlt className={className} size={size} />;

    case "Cheerful":
      return <FaGrin className={className} size={size} />;

    case "Proud":
      return <FaGrinBeam className={className} size={size} />;

    case "Optimistic":
      return <FaGrinStars className={className} size={size} />;

    case "Enthusiastic":
      return <FaLaugh className={className} size={size} />;

    case "Elation":
      return <FaLaughSquint className={className} size={size} />;

    case "Love":
      return <FaRegGrinHearts className={className} size={size} />;

    case "Affectionate":
      return <FaKiss className={className} size={size} />;

    case "Longing":
      return <FaGrinHearts className={className} size={size} />;

    case "Desire":
      return <FaKissWinkHeart className={className} size={size} />;

    case "Tenderness":
      return <FaSmileBeam className={className} size={size} />;

    case "Fear":
      return <FaRegFlushed className={className} size={size} />;

    case "Scared":
      return <FaGrimace className={className} size={size} />;

    case "Terror":
      return <FaDizzy className={className} size={size} />;

    case "Nervous":
      return <FaGrimace className={className} size={size} />;

    default:
      return <FaMehBlank className={className} size={size} />;
  }
};

export default getEmoticon;
