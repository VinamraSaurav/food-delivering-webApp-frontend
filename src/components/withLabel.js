const withLabel = (Card) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-green-600 text-white font-bold font-mono text-xs px-2 py-1 rounded-r-md z-[1]">Pure Veg</label>
        <Card {...props} />
      </div>
    );
  };
};
export default withLabel;