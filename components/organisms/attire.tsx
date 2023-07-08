import Image from "next/image";

const Attire = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center w-full relative text-text-brown">
        <div className="flex flex-col items-center justify-center pb-10">
          <h1 className="text-5xl lg:text-6xl font-bold pb-20">KASUOTAN</h1>

          <div className="text-center flex flex-col gap-y-24 items-center font-woodland">
            <p className="text-2xl md:text-3xl px-2">
              {`Tradisyunal na kasuotang Filipino (Filipiñana, Barong, atbp.) o pormal na kasuotang kulay`}
              <span className="font-bold">{`"Beige / Cream"`}</span>
            </p>

            <div className="flex">
              <div className="w-16 md:w-20 h-16 md:h-20 m-2 rounded-full bg-[#d9b18e] shadow-xl" />
              <div className="w-16 md:w-20 h-16 md:h-20 m-2 rounded-full bg-[#f2f1ef] shadow-xl" />
              <div className="w-16 md:w-20 h-16 md:h-20 m-2 rounded-full bg-[#d9d2cc] shadow-xl" />
            </div>

            <p className="text-2xl md:text-3xl">
              Iwasang magsuot ng mga kasuotang
              <br />
              <b>madilim ang kulay</b>
            </p>
          </div>
        </div>
        <div className="mx-auto max-h-[700px] shadow-sm rounded-lg overflow-hidden">
          <Image
            src="/images/ATTIRE.png"
            width={1125}
            height={1368}
            quality={100}
            alt="rsvp"
            className="h-full w-auto "
          />
        </div>
      </div>
    </div>
  );
};

export default Attire;
