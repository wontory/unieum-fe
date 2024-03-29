const FeatureCard = ({ children }) => {
  return (
    <div className="card card-bordered card-side bg-base-100 w-full md:flex-col md:w-100 xl:flex-row">
      <div className="card-body p-6">
        {children[0]}
        {children[1]}
        {children[2]}
      </div>
      <figure className="flex-none p-6 pl-0 md:p-6 md:pt-0 xl:p-6 xl:pl-0">
        {children[3]}
      </figure>
    </div>
  );
};

export default FeatureCard;
