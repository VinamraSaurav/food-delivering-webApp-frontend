const ShimmerCard = () => {
  return (
    <div className="shimmer-card">
      <div className="shimmer-card-img animate"></div>
      <div className="shimmer-card-rate-name">
        <div className="shimmer-name animate"></div>
        <div className="shimmer-rate animate"></div>
      </div>
      <div className="shimmer-locality"></div>
      <div className="shimmer-cuisines animate"></div>
      <div className="shimmer-cost-time">
        <div className="shimmer-cost animate"></div>
        <div className="shimmer-time animate"></div>
      </div>
    </div>
  );
};

const arr = new Array(8).fill(0);
const Shimmer = () => {
  return (
    <div className="body">
      <div className="shimmer-card-hold">
        {arr.map((e,i) => (
          <ShimmerCard key={i} />
        ))}
      </div>
    </div>
  );
};
export default Shimmer;
