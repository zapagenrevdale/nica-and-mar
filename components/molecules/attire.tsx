const Attire = () => {
  return (
    <div className="text-center flex flex-col gap-3 items-center font-woodland w-full min-w-[350px]">
      <div className="text-xs md:text-base lg:text-xl md:leading-6 w-5/6">
        <p className="w-full ">
          {`Tradisyunal na kasuotang Filipino (Filipiñana, Barong, atbp.) o pormal na kasuotang kulay "Beige / Cream"`}
        </p>
      </div>
      <div className="flex">
        <div className="w-8 sm:w-12 md:w-16 h-8 sm:h-12 md:h-16 m-2 rounded-full bg-[#d9b18e]" />
        <div className="w-8 sm:w-12 md:w-16 h-8 sm:h-12 md:h-16 m-2 rounded-full bg-[#f2f1ef]" />
        <div className="w-8 sm:w-12 md:w-16 h-8 sm:h-12 md:h-16 m-2 rounded-full bg-[#d9d2cc]" />
      </div>
    </div>
  );
};

export default Attire;
