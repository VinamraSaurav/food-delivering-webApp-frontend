const ShimmerCard = () => {
  return (
    <div className="shimmer-card sm:w-[260px] w-260px border m-2 rounded-lg sm:block flex mx-auto animate-pulse -z-10">
      <div className="shimmer-card-img animate h-[100px] w-[100px] sm:h-[150px] sm:w-[260px] bg-gray-300 sm:rounded-l-none sm:rounded-t-lg rounded-l-lg"></div>
      <div>
      <div className="shimmer-card-rate-name flex justify-between ">
        <div className="shimmer-name animate m-2 p-2 h-[15px] w-[160px] bg-gray-200 rounded-sm"></div>
        <div className="shimmer-rate animate h-[15px] w-[30px] bg-gray-200 m-2 p-2"></div>
      </div>
      <div className="shimmer-locality m-2 p-2 bg-gray-200 h-[12px] w-[130px]"></div>
      <div className="shimmer-cuisines animate"></div>
      <div className="shimmer-cost-time flex justify-between">
        <div className="shimmer-cost animate m-2 p-2 h-[10px] w-[40px] bg-gray-200 "></div>
        <div className="shimmer-time animate m-2 p-2 h-[10px] w-[40px] bg-gray-200 "></div>
      </div>
      </div>
    </div>
  );
};

const arr = new Array(8).fill(0);
const Shimmer = () => {
  return (
    <div className="body">
      <div className="shimmer-card-hold flex flex-wrap">
        {arr.map((e,i) => (
          <ShimmerCard key={i} />
        ))}
      </div>
    </div>
  );
};
export default Shimmer;
