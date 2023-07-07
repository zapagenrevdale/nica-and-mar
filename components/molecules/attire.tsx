const Attire: React.FC<Props> = ({ title, description, type, colors }) => {
  return (
    <div className="text-center flex flex-col gap-3 items-center font-woodland w-full min-w-[350px]">
      <div className="">
        <h2 className="text-base sm:text-lg lg:text-3xl pb-2">{title}</h2>
        <div className="w-3/4 h-[2px] border-b-2 border-b-custom-brown mx-auto mb-[3%]" />
      </div>
      <div className="text-xs md:text-base lg:text-xl md:leading-6 w-5/6">
        <p className="w-full ">
          <span className="font-bold pb-1">{type}</span> {description}
        </p>

        <p>{colors}</p>
      </div>
      <div className="flex">
        <div className="w-8 sm:w-12 md:w-16 h-8 sm:h-12 md:h-16 m-2 rounded-full bg-[#723e31]" />
        <div className="w-8 sm:w-12 md:w-16 h-8 sm:h-12 md:h-16 m-2 rounded-full bg-[#a67568]" />
        <div className="w-8 sm:w-12 md:w-16 h-8 sm:h-12 md:h-16 m-2 rounded-full bg-[#d9b18e]" />
        <div className="w-8 sm:w-12 md:w-16 h-8 sm:h-12 md:h-16 m-2 rounded-full bg-[#f2f1ef]" />
        <div className="w-8 sm:w-12 md:w-16 h-8 sm:h-12 md:h-16 m-2 rounded-full bg-[#d9d2cc]" />
      </div>
    </div>
  );
};

interface Props {
  title: string;
  type: string;
  description: string;
  colors: string;
}

export default Attire;
