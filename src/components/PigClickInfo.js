const PigClickInfo = ({ specialty, weight, medals, hidden }) => {
  return (
    <ul id={hidden}>
      <li>
        <strong>Specialty:</strong> {specialty}
      </li>
      <li>
        <strong>Weight:</strong> {weight}
      </li>
      <li>
        <strong>Highest Medals:</strong>{" "}
        {medals.charAt(0).toUpperCase() + medals.slice(1)}
      </li>
    </ul>
  );
};

export default PigClickInfo;
