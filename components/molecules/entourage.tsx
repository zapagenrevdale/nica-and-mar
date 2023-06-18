const Entourage: React.FC<Props> = ({ title, names }) => {
  return (
    <div className="text-center flex flex-col gap-3  items-center">
      <div>
        <h3 className="text-base sm:text-xl lg:text-2xl my-1 px-1 bg-white md:bg-none rounded-lg">{title}</h3>
        <div className="w-3/4 h-[2px] border-b-2 mx-auto border-custom-brown" />
      </div>
      <div className="text-xs md:text-base lg:leading-8 tracking-wider">
        {names.map((name) => (
          <p key={name} className="mt-2 px-1  bg-white md:bg-none rounded-lg">{name}</p>
        ))}
      </div>
    </div>
  );
};

interface Props {
  title: string;
  names: string[];
}

export default Entourage;
