import PigClickInfo from "./PigClickInfo";
import { useState } from "react";

const Pigs = ({ name, img, specialty, weight, medals }) => {
  //In the tile, display the name and image for each hog.

  const [hidden, setHidden] = useState("hidden");

  const reveal = () => {
    return setHidden("");
  };

  const hide = () => {
    return setHidden("hidden");
  };

  return (
    <span className="minPigTile" onMouseOver={reveal} onMouseLeave={hide}>
      <h3>{name}</h3>
      <img src={img} alt="" />
      <PigClickInfo
        specialty={specialty}
        weight={weight}
        medals={medals}
        hidden={hidden}
      />
    </span>
  );
};

export default Pigs;
