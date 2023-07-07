const Guide = () => {
  return (
    <div className="flex flex-col items-center w-full relative min-h-[800px]  py-10  rounded-md  mt-20 font-woodland">
      <h1 className="text-4xl lg:text-5xl  font-bold text-center py-4 lg:pb-16 px-10">
        MGA GABAY
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 p-10 max-w-[1000px] gap-20 text-center">
        <div className="">
          <div className="w-fit mx-auto">
            <h1 className="font-bold text-2xl lg:text-3xl pb-2">Unplugged Ceremony</h1>
            <div className="w-3/4 h-[2px] border-b-2 mx-auto border-custom-brown" />
          </div>
          <p className="pt-4 text-lg lg:text-xl">
            Paki patay ang lahat ng telepono, camera at iba pang device at
            i-enjoy ang espesyal na sandaling ito kasama kami. Maraming Salamat!
          </p>
        </div>
        <div className="">
          <div className="w-fit mx-auto">
            <h1 className="font-bold text-2xl lg:text-3xl pb-2">Banayan na paalala</h1>
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
            <h1 className="font-bold text-2xl lg:text-3xl pb-2">SNAP & SHARE</h1>
            <div className="w-3/4 h-[2px] border-b-2 mx-auto border-custom-brown" />
          </div>

          <p className="pt-4 text-lg lg:text-xl">
            Mangyaring i-tag kami sa aming mga larawan gamit ang aming mga
            opisyal na hashtag: #NICAtadhanakayMAR
          </p>
        </div>
        <div className="">
          <div className="w-fit mx-auto">
            <h1 className="font-bold text-2xl lg:text-3xl pb-2">Pagbigay ng Regalo</h1>
            <div className="w-3/4 h-[2px] border-b-2 mx-auto border-custom-brown" />
          </div>

          <p className="pt-4 text-lg lg:text-xl">
            As love is what this day is all about, your presence is one we could
            not celebrate without. If you were thinking of giving a gift to help
            us on our way, a monetary gift for our future would really make our
            day.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Guide;
