import Navigation from "@/components/molecules/navigation";
import { useEffect, useState } from "react";

const Header = () => {

  const [border, setBorder] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", updateNavBar);
  }, []);

  const updateNavBar = () => {
    if (window.scrollY > 10) {
      setBorder(true);
    } else {
      setBorder(false);
    }
  };

  
  return (
    <header className={`fixed left-0 top-0  w-full flex justify-center text-neutral-700  hover:shadow-xl z-30 ${border ? "shadow-xl bg-white/90" : ""} duration-300`}>
      <div className="container flex justify-between h-20 items-center px-[2vw] text-neutral-700">
        {/* logo */}
        <h1 className="text-xl font-bold font-woodland ">#NICAtadhanakayMAR</h1>

        {/* navbar */}
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
