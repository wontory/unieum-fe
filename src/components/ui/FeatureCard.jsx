const FeatureCard = ({ children }) => {
  return (
    <div className="card card-side bg-base-100 shadow-md w-full md:flex-col md:w-100 lg:flex-row">
      <div className="card-body p-6">
        {children[0]}
        {children[1]}
        {children[2]}
      </div>
      <figure className="flex-none p-6 pl-0 md:p-6 md:pt-0 lg:p-6 lg:pl-0">
        {children[3]}
      </figure>
    </div>
  );
};

export default FeatureCard;
