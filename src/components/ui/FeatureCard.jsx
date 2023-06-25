const FeatureCard = ({ children }) => {
  return (
    <div className="card card-side bg-base-100 shadow-md w-full lg:w-100">
      <div className="card-body p-6">
        {children[0]}
        {children[1]}
        {children[2]}
      </div>
      <figure>{children[3]}</figure>
    </div>
  );
};

export default FeatureCard;
