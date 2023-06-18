import AttireComponent from "@/components/molecules/attire";
import Image from "next/image";

const Attire = () => {
  return (
    <div>
      <div className="flex flex-col text-neutral-700 gap-10 font-montaga relative">
        <Image
          alt="Attire Background"
          src="/images/background/bg2.jpg"
          width={1920}
          height={1080}
          style={{ width: "100%", height: "auto" }}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center font-bold pb-[4%]">
            Attire
          </h1>
          <AttireComponent
            type="Formal/Filipiniana/Barong"
            description="with shades of any of the following:"
            title="Principal Sponsor"
            colors="Beige, Cream, Brown, Champagne"
          />
          <div className="hidden lg:block lg:pt-6 xl:pt-12">
            <AttireComponent
              type="Semi-Formal "
              description="with shades of any of the following:"
              title="Guest"
              colors="Beige, Cream, Brown, Champagne"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col text-neutral-700 gap-10 font-montaga relative lg:hidden">
        <Image
          alt="Attire Background"
          src="/images/background/bg2.jpg"
          width={1920}
          height={1080}
          style={{ width: "100%", height: "auto" }}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center font-bold pb-[4%]">
            Attire
          </h1>
          <AttireComponent
            type="Semi-Formal "
            description="with shades of any of the following:"
            title="Guest"
            colors="Beige, Cream, Brown, Champagne"
          />
        </div>
      </div>
    </div>
  );
};

export default Attire;
