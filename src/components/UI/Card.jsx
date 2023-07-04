const Card = ({ className, children }) => {
  const classes = "card card-bordered bg-base-100 " + className;

  return (
    <div className={classes}>
      <div className="card-body p-6">{children}</div>
    </div>
  );
};

export default Card;
