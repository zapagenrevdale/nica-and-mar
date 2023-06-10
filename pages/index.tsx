import moment from "moment-timezone";
import Countdown from "@/components/molecules/countdown";

const Home = () => {
  const endDateManila = moment.tz("2023-07-29T00:00:00", "Asia/Manila");
  return (
    <main className="flex flex-col items-center w-full pb-[100vh]">
      <div className="container">
 
        <div
          className="flex flex-col justify-center items-center p-10 text-text-brown  relative min-h-[80vh] bg-no-repeat bg-center bg-cover"
          style={{
            backgroundImage: "url('/images/background.png')",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="text-center font-light pb-12">
            <h4 className="text-2xl pb-10 font-semibold">SA WAKAS!</h4>
            <h2 className="text-5xl pb-6 font-semibold">
              KASALANG PINEDA - LUNA
            </h2>
            <time className="text-lg">HULYO 29, 2023</time>
          </div>
          <Countdown endDate={endDateManila} />
        </div>
      </div>
    </main>
  );
};

export default Home;
