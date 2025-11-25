const CTASection = ({ title, description, children }) => {
  return (
    <section className="py-20 px-6 relative z-10">
      <div className="max-w-7xl mx-auto text-center">
        <div className="bg-dark/30 border border-border-dark rounded-3xl p-12 max-w-4xl mx-auto space-y-6">
          <h2 className="text-4xl font-bold text-white">{title}</h2>
          <p className="text-xl text-text-gray max-w-3xl mx-auto">
            {description}
          </p>

          {children}
        </div>
      </div>
    </section>
  );
};
export default CTASection;
