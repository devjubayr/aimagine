const Divider = () => {
  return (
    <div className="flex items-center justify-center gap-4 mb-8">
      <div className="h-px w-16 bg-gradient-to-r from-transparent to-border-light"></div>
      <span className="text-xs text-text-gray">OR</span>
      <div className="h-px w-16 bg-gradient-to-l from-transparent to-border-light"></div>
    </div>
  );
};
export default Divider;
