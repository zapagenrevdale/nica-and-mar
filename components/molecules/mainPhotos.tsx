import Image from "next/image";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";

const MainPhotos = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "0px 100px -50px 0px" });

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-3/4  mx-auto pt-20 overflow-hidden"
    >
      <motion.div
        animate={{
          opacity: isInView ? 1 : 0,
          x: isInView ? 0 : 20,
        }}
        transition={{ opacity: { duration: 1 }, x: { duration: 0.4 } }}
      >
        <img
          src="/images/DD5A5713.png"
          alt="prenup"
          width={800}
          height={800}
          className="rounded-md shadow-md "
        
        />
      </motion.div>

      <motion.div
        animate={{
          opacity: isInView ? 1 : 0,
          x: isInView ? 0 : -20,
        }}
        transition={{ opacity: { duration: 1 }, x: { duration: 0.4 } }}
      >
        <img
          src="/images/DD5A5839.png"
          alt="prenup"
          width={800}
          height={800}
          className="rounded-md shadow-md"
        />
      </motion.div>
    </div>
  );
};

export default MainPhotos;
