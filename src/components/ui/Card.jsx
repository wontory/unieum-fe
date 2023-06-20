const Card = ({ className, children }) => {
  const classes = "card bg-base-100 shadow-md " + className;

  return (
    <div className={classes}>
      <div className="card-body">{children}</div>
    </div>
  );
};

export default Card;
