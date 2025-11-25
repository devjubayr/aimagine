const Heading = ({ title1, title2, description }) => {
  return (
    <div className="text-center max-w-4xl mx-auto mb-24">
      <h2 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
        {title1},
        <br />
        <span className="bg-linear-to-r from-white to-[#5de0e6] bg-clip-text text-transparent">
          {title2}
        </span>
      </h2>
      <p className="text-xl text-text-gray max-w-2xl mx-auto">{description}</p>
    </div>
  );
};
export default Heading;
