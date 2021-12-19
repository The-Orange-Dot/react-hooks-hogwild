import Pigs from "./Pigs";

const PigsList = ({ hogs }) => {
  const hogsArray = hogs.map((hog, index) => {
    return (
      <span className="pigTile" key={index}>
        <Pigs
          name={hog.name}
          img={hog.image}
          specialty={hog.specialty}
          weight={hog.weight}
          medals={hogs[0]["highest medal achieved"]}
        />
      </span>
    );
  });

  return hogsArray;
};

export default PigsList;
