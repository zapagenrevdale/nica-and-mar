const Entourage: React.FC<Props> = ({ title, names }) => {
  return (
    <div className="text-center flex flex-col gap-3  items-center font-woodland ">
      <div>
        <h3 className="text-2xl md:text-4xl my-1 px-1  md:bg-none rounded-lg font-bold">
          {title}
        </h3>
        <div className="w-3/4 h-[2px] border-b-2 mx-auto border-custom-brown" />
      </div>
      <div className="text-lg md:text-xl lg:leading-8 tracking-wide">
        {names.map((name) => (
          <p key={name} className="mt-2 px-1  md:bg-none rounded-lg">
            {name}
          </p>
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
