const Card = ({ className, children }) => {
  const classes = "card bg-base-100 shadow-md " + className;

  return (
    <div className={classes}>
      <div className="card-body p-6">{children}</div>
    </div>
  );
};

export default Card;
