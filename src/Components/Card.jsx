export default function Card(props) {
  return (
    <div className="card">
      <img src={props.image} alt="" className="image" width="150px" />
      <h3>{props.location}</h3>
      <h4>{props.name}</h4>
      {props.rate > 4 ? (
        <h4 style={{ color: "green" }}>{props.rate} ★</h4>
      ) : (
        <h4 style={{ color: "orange" }}>{props.rate} ★</h4>
      )}{" "}
      <h4>{props.price}/night</h4>
    </div>
  );
}
