const OtherContact = () => {
  return (
    <div className="flex flex-col justify-center gap-8 md:gap-12 lg:gap-24">
      <div>
        <h3 className="text-xl md:text-4xl text-primary mb-4 lg:mb-9 capitalize">
          or you can keep in touch with us at:
        </h3>
        <p className="text-base md:text-xl text-grey pb-1">
          info@flee-tech.com
        </p>
        <p className="text-base md:text-xl text-grey pb-1">+6282177968605</p>
      </div>

      <div>
        <h3 className="text-xl md:text-4xl text-primary mb-4 lg:mb-9 capitalize">
          our office location
        </h3>
        <p className="text-base md:text-xl text-grey pb-1">
          Bandar Lampung, Indonesia, 35131
        </p>
      </div>
    </div>
  );
};

export default OtherContact;
