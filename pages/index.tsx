import moment from "moment-timezone";
import Countdown from "@/components/molecules/countdown";
import MusicPlayer from "@/components/molecules/musicPlayer";
import Image from "next/image";
import EntourageGroup from "@/components/organisms/entourage";
import Attire from "@/components/organisms/attire";
import Location from "@/components/organisms/location";

const Home = () => {
  const endDateManila = moment.tz("2023-07-29T00:00:00", "Asia/Manila");
  return (
    <main className="flex flex-col items-center w-full pb-[100vh]">
      <div className="container relative">
        {/* hero */}
        <div
          className="flex flex-col justify-center items-center p-10 text-text-brown  relative min-h-[500px] md:min-h-[720px] bg-no-repeat bg-center bg-cover"
          style={{
            backgroundImage: "url('/images/background.png')",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="text-center font-light pb-[5%] w-full">
            <h4 className="text-lg md:text-2xl font-semibold pb-[6%] font-montaga">
              Sa Wakas!
            </h4>
            <h2 className="text-5xl md:text-6xl lg:text-8xl font-semibold pb-[6%] font-darleston capitalize">
              Kasalang Pineda - Luna
            </h2>
            <time className="text-base lg:text-xl font-montaga">HULYO 29, 2023</time>
          </div>
          <Countdown endDate={endDateManila} />
        </div>

        <div className="h-40 relative w-full">
          <Image
            src="/images/divider.svg"
            height={100}
            width={600}
            alt="divider"
            className="absolute top-0 left-[50%] translate-x-[-50%] h-full object-cover"
          />
        </div>

        {/* images / videos */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-3/4 mx-auto p-4">
          <Image
            src="/images/dummy.jpg"
            alt="prenup"
            width={700}
            height={700}
            className="rounded-md shadow-md"
          />
          <Image
            src="/images/dummy.jpg"
            alt="prenup"
            width={700}
            height={700}
            className="rounded-md shadow-md"
          />
        </div>

        <EntourageGroup />
        <Attire />

        <Location />

        {/* music player */}
        <div className="fixed right-[5vw] bottom-[5vh] ">
          <MusicPlayer />
        </div>
      </div>
    </main>
  );
};

export default Home;
