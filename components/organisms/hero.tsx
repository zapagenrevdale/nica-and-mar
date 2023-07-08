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
      className="flex flex-col justify-center items-center p-10 text-text-brown  relative w-screen h-screen bg-no-repeat bg-cover lg:bg-fixed overflow-hidden"
      style={{
        backgroundImage: "url('/images/M&N.png')",
        backgroundPosition: "50% 30%",
      }}
      id="home"
    >
      {/* background opacity */}
      <div className="h-full w-full absolute opacity-40 bg-white" />

      <div className="flex flex-col gap-4 items-center text-center font-light w-full z-10 lg:pt-20">
        <h4
          className="text-lg md:text-3xl font-woodland font-bold "
          style={{
            textShadow:
              "-1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white",
          }}
        >
          Sa Wakas!
        </h4>
        <h2
          className="text-5xl md:text-6xl lg:text-8xl font-bold capitalize text-white"
          style={{
            textShadow:
              "-2px -2px 0 #84701C, 2px -2px 0 #84701C, -2px 2px 0 #84701C, 2px 2px 0 #84701C",
          }}
        >
          Kasalang Luna - Pineda
        </h2>
        <time
          className="text-lg md:text-3xl font-woodland font-bold "
          style={{
            textShadow:
              "-1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white",
          }}
        >
          HULYO 29, 2023
        </time>
      </div>
      <Countdown endDate={endDateManila} />
    </motion.div>
  );
};

export default Hero;
