import Image from "next/image";
const Guide = () => {
  return (
    <div className="flex flex-col items-center w-full relative min-h-[800px]  pb-10  rounded-md font-woodland">
      <h1 className="text-4xl lg:text-5xl font-bold text-center py-4 lg:pb-16 px-10">
        MGA GABAY
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 p-12 max-w-[1200px] gap-20 text-center shadow-xl">
        <div className="">
          <div className="w-fit mx-auto">
            <h1 className="font-bold text-2xl lg:text-3xl pb-2">
              Unplugged Ceremony
            </h1>
            <div className="w-3/4 h-[2px] border-b-2 mx-auto border-custom-brown" />
          </div>
          <p className="pt-4 text-lg lg:text-xl">
            Paki patay ang lahat ng telepono, camera at iba pang device at
            i-enjoy ang espesyal na sandaling ito kasama kami. Maraming Salamat!
          </p>
        </div>
        <div className="">
          <div className="w-fit mx-auto">
            <h1 className="font-bold text-2xl lg:text-3xl pb-2">
              Banayan na paalala
            </h1>
            <div className="w-3/4 h-[2px] border-b-2 mx-auto border-custom-brown" />
          </div>

          <p className="pt-4 text-lg lg:text-xl">
            Mangyaring maglaan ng oras upang basahin ang seksyon ng Mga FAQ,
            naglalaman ito ng mahalagang impormasyon na maaaring makatulong sa
            pagsagot sa inyong mga katanungan.
          </p>
        </div>
        <div className="">
          <div className="w-fit mx-auto">
            <h1 className="font-bold text-2xl lg:text-3xl pb-2">
              SNAP & SHARE
            </h1>
            <div className="w-3/4 h-[2px] border-b-2 mx-auto border-custom-brown" />
          </div>

          <p className="pt-4 text-lg lg:text-xl">
            Mangyaring i-tag kami sa aming mga larawan gamit ang aming mga
            opisyal na hashtag: <b> #NICAtadhanakayMAR</b>
          </p>
        </div>
        <div className="">
          <div className="w-fit mx-auto">
            <h1 className="font-bold text-2xl lg:text-3xl pb-2">
              Pagbigay ng Regalo
            </h1>
            <div className="w-3/4 h-[2px] border-b-2 mx-auto border-custom-brown" />
          </div>

          <p className="pt-4 text-lg lg:text-xl">
            Ang araw na ito ay nabuo sa pamamagitan ng aming pagmamahalan at
            inyong presensya. Kung nag-iisip kang magabot ng salapi bilang
            regalo para matulungan kami sa aming bagong yugto, aming itong
            pahahalagahan at pagkakaingatan. Maraming salamat!
          </p>
          <Image
            src="/images/GCASH.png"
            width={170}
            height={400}
            quality={100}
            alt="rsvp"
            className="w-auto rounded-xl mx-auto mt-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Guide;
