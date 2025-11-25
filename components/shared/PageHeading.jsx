const PageHeading = ({ badge, title1, title2, description, Icon }) => {
  return (
    <section className="relative pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Badge - Mimicking 'Get in Touch' badge style */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-dark/30 border border-border-dark rounded-full mb-6">
            {Icon}
            <span className="text-sm text-text-gray">{badge}</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-8 leading-tight">
            {title1}
            <br />
            <span className="bg-linear-to-r from-white to-[#5de0e6] bg-clip-text text-transparent">
              {title2}
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-text-gray max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};
export default PageHeading;
