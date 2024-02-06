const Buttons = () => {
  return (
    <section className="py-10" data-scroll-section>
      <div className="lg:container px-5 mx-auto">
        <nav>
          <ul className="grid md:grid-flow-col gap-4 lg:gap-2 text-center w-full">
            <li className="bg-black text-white hover:bg-primary hover:text-black w-full">
              <a
                className="inline-block text-lg font-medium px-4 py-2 border-4 border-transparent focus:border-black rounded-md transition "
                href="#about-section"
                data-scroll-to
              >
                DAR ES SALAAM
              </a>
            </li>
            <li className="bg-black text-white hover:bg-primary hover:text-black">
              <a
                className="inline-block text-lg font-medium px-4 py-2 border-4 border-transparent focus:border-black rounded-md transition"
                href="#karachi"
                data-scroll-to
              >
                KARACHI
              </a>
            </li>
            <li className="bg-black text-white hover:bg-primary hover:text-black">
              <a
                className="inline-block text-lg font-medium px-4 py-2 border-4 border-transparent focus:border-black rounded-md transition"
                href="#jebel"
                data-scroll-to
              >
                JEBEL ALI
              </a>
            </li>
            <li className="bg-black text-white hover:bg-primary hover:text-black">
              <a
                className="inline-block text-lg font-medium px-4 py-2 border-4 border-transparent focus:border-black rounded-md transition"
                href="#sharjah"
                data-scroll-to
              >
                SHARJAH
              </a>
            </li>
            <li className="bg-black text-white hover:bg-primary hover:text-black">
              <a
                className="inline-block relative text-lg font-medium px-4 py-2 border-4 border-transparent focus:border-black rounded-md transition"
                href="#durban"
                data-scroll-to
              >
                DURBAN
              </a>
            </li>
            <li className="bg-black text-white hover:bg-primary hover:text-black">
              <a
                className="inline-block text-lg font-medium px-4 py-2 border-4 border-transparent focus:border-black rounded-md transition"
                href="#mombasa"
                data-scroll-to
              >
                MOMBASA
              </a>
            </li>
            <li className="bg-black text-white hover:bg-primary hover:text-black">
              <a
                className="inline-block text-lg font-medium px-4 py-2 border-4 border-transparent focus:border-black rounded-md transition"
                href="#maputo"
                data-scroll-to
              >
                MAPUTO
              </a>
            </li>
            <li className="bg-black text-white hover:bg-primary hover:text-black">
              <a
                className="inline-block text-lg font-medium px-4 py-2 border-4 border-transparent focus:border-black rounded-md transition"
                href="#walvis"
                data-scroll-to
              >
                WALVIS BAY
              </a>
            </li>
            <li className="bg-black text-white hover:bg-primary hover:text-black">
              <a
                className="inline-block text-lg font-medium px-4 py-2 border-4 border-transparent focus:border-black rounded-md transition"
                href="#southamption"
                data-scroll-to
              >
                SOUTHAMPTON
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};
export default Buttons;
