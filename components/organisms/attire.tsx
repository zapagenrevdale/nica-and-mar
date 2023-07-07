import AttireComponent from "@/components/molecules/attire";
import Image from "next/image";

const Attire = () => {
  return (
    <div>
      <div
        className="flex flex-col items-center justify-center text-neutral-700 gap-10 font-woodland relative  bg-no-repeat bg-top bg-cover"
        style={{
          backgroundImage: "url('/images/DD5A5459.png')",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="h-full w-full absolute opacity-50 bg-white p-10" />

        <div className="w-full z-10 pb-10">
          <h1 className="text-4xl lg:text-5xl  font-bold text-center py-4 lg:pb-16 px-10">
           KASUOTAN
          </h1>
          <AttireComponent
            type="Formal/Filipiniana/Barong"
            description="na may mga kulay na sumasalamin sa isa sa mga sumusunod: "
            title="Mga Gabay"
            colors="Beige, Cream, Brown, Champagne"
          />

          <AttireComponent
            type="Semi-Formal "
            description="na may mga kulay na sumasalamin sa isa sa mga sumusunod: "
            title="Panauhin"
            colors="Beige, Cream, Brown, Champagne"
          />
        </div>
      </div>
    </div>
  );
};

export default Attire;
