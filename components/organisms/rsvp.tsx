import Image from "next/image";
const RSVP = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 justify-center w-full relative text-text-brown">
      <div className="flex flex-col items-center justify-center gap-10 text-center p-12">
        <h1 className="text-5xl lg:text-6xl font-bold">RSVP</h1>
        <h6 className="text-xl md:text-3xl">
          Kasama ang aming pamilya, inaanyayahan namin kayong makibahagi sa
          aming kasal
        </h6>
        <h6 className="text-xl md:text-3xl">
          Upang makumpirma ang inyong prisensya, hinihiling naming sagutan ang
          form na ito
          <br />
          {/* <time className="text-2xl md:text-3xl font-bold">
            Hulyo 11, 2023:
          </time> */}
        </h6>
        <a
          href="https://forms.gle/JQHn8WC2nc5ubLen8"
          target="_tab"
          className="text-xl md:text-3xl hover:border-b-2 hover:border-text-brown border-b transition-all duration-100 w-fit"
        >
          https://forms.gle/JQHn8WC2nc5ubLen8
        </a>

        <h3 className="text-2xl md:text-3xl font-bold" >
          Maraming salamat!
        </h3>
      </div>
      <Image
        src="/images/RSVP.png"
        width={1800}
        height={1920}
        quality={100}
        alt="rsvp"
        className="object-cover w-full h-full"
      />
    </div>
  );
};

export default RSVP;
