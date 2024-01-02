const Title = () => {
  return (
    <section
      id="intro"
      className="flex items-center justify-center text-center bg-gray-200 "
      data-scroll-section
    >
      <div className="container px-5 py-2 mx-auto">
        <h1
          className="text-5xl font-bold"
          data-scroll
          data-scroll-repeat
          data-scroll-call="toggleBackToTop"
        >
          Shipping Agents
        </h1>
        <p className="text-lg mt-2">Click You "Port of Discharge" below:</p>
        <h2
          className="text-5xl font-bold"
          data-scroll
          data-scroll-repeat
          data-scroll-call="toggleBackToTop"
        >
          Cities
        </h2>
      </div>
    </section>
  );
};
export default Title;
