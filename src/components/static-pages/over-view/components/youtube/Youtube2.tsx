const Youtube2 = () => {
  return (
    <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
      <div className="mt-1 p-2">
        <h2 className="text-black font-bold">
          Jan Japan Motors, Karachi Promo
        </h2>
      </div>
      <div className="relative flex items-end overflow-hidden rounded-xl">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/0Jy8vMz05yI"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </article>
  );
};
export default Youtube2;
