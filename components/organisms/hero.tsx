import Countdown from "@/components/molecules/countdown";
import moment from "moment-timezone";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";

const Hero = () => {
  const endDateManila = moment.tz("2023-07-29T00:00:00", "Asia/Manila");

  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "0px 100px 100px 0px" });
  return (
    <motion.div
      ref={ref}
      initial={{ filter: "blur(2px)" }}
      animate={{ filter: isInView ? "blur(0px)" : "blur(12px)" }}
      transition={{ duration: 0.8 }}
      className="flex flex-col justify-center items-center p-10 text-text-brown  relative max-h-[400px] md:max-h-[600px] bg-no-repeat bg-cover bg-top md:bg-fixed overflow-hidden"
      style={{
        backgroundImage: "url('/images/DD5A4874.jpg')",
      }}
    >
      {/* background opacity */}
      <div className="h-full w-full absolute opacity-40 bg-white"/>

      <div className="flex flex-col gap-4 items-center text-center font-light w-full z-10 pt-20 font-snell">
        <h4 className="text-lg md:text-3xl font-semibold font-woodland font-bold">
          Sa Wakas!
        </h4>
        <h2 className="text-5xl md:text-6xl lg:text-8xl font-bold font-snell capitalize">
          Kasalang Pineda - Luna
        </h2>
        <time className="text-base lg:text-xl font-woodland">
          HULYO 29, 2023
        </time>
      </div>
      <Countdown endDate={endDateManila} />
    </motion.div>
  );
};

export default Hero;
