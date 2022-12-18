const OurClient = () => {
  return (
    <section
      id="our-client"
      className="flex items-center gap-y-10 md:gap-y-12 gap-x-16 lg:gap-x-20 py-8 sm:py-12 px-8 sm:px-14 flex-wrap"
    >
      <h3 className="text-2xl md:text-4xl font-bold font-secondary min-w-fit">
        They Used Our Service
      </h3>
      <div className="relative flex-grow">
        <div className="flex justify-center gap-12 lg:gap-16 flex-wrap md:flex-nowrap">
          <h3 className="text-3xl text-center basis-1/4">Lorem</h3>
          <h3 className="text-3xl text-center basis-1/4">Ipsum</h3>
          <h3 className="text-3xl text-center basis-1/4">Lorem</h3>
          <h3 className="text-3xl text-center basis-1/4">Ipsum</h3>
        </div>
      </div>
    </section>
  );
};

export default OurClient;
