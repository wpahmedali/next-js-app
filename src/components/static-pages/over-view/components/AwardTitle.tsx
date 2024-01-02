const AwardTitle = () => {
  return (
    <div className="flex bg-gray-100">
      <div className="w-full max-w-lg px-10 mb-4 py-4 bg-primary rounded-lg shadow-xl">
        <div className="max-w-md mx-auto space-y-6">
          <h2 className="flex flex-row flex-nowrap items-center">
            <span
              className="flex-grow block border-t border-black"
              aria-hidden="true"
              role="presentation"
            ></span>
            <span className="flex-none block mx-4   px-4 py-2.5 text-xs leading-none font-medium uppercase bg-black text-white">
              Awards & Achievements
            </span>
            <span
              className="flex-grow block border-t border-black"
              aria-hidden="true"
              role="presentation"
            ></span>
          </h2>
        </div>
      </div>
    </div>
  );
};
export default AwardTitle;
