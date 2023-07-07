import Image from "next/image";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";

const Divider = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "0px 100px -50px 0px" });
  
  return (
    <div className="h-40 relative w-full">
      <Image
        src="/images/divider.svg"
        height={100}
        width={600}
        alt="divider"
        className="absolute top-0 left-[50%] translate-x-[-50%] h-full object-cover"
      />
    </div>
  );
};

export default Divider;
