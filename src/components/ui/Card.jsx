const Card = ({ children }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-md">
      <div className="card-body">{children}</div>
    </div>
  );
};

export default Card;
