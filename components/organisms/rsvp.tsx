const RSVP = () => {
  return (
    <div
      className="flex justify-center w-full relative  pb-10  bg-no-repeat bg-cover bg-center md:bg-top rounded-b-md md:bg-fixed overflow-hidden h-40 md:h-60"
      style={{
        backgroundImage: "url('/images/DD5A4895.png')",
      }}
    >
      <div className="h-full w-full absolute bg-neutral-800/40 z-10 " />
      <div className="font-woodland z-20 flex flex-col justify-center items-center text-white gap-4">
        <h3 className="text-4xl font-bold lg:text-5xl ">RSVP</h3>
        <div className="flex items-end">
          <h4 className=" text-xl md:text-2xl">Link: </h4>
          <a href="https://forms.gle/JQHn8WC2nc5ubLen8" target="_blank" className="pl-4 text-lg md:text-xl underline underline-offset-4">
            https://forms.gle/JQHn8WC2nc5ubLen8
          </a>
        </div>
      </div>
    </div>
  );
};

export default RSVP;
