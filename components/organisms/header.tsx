import Navigation from "@/components/molecules/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Bars3Icon from "@heroicons/react/24/outline/Bars3Icon";
import XMarkIcon from "@heroicons/react/24/outline/XMarkIcon";
import NavLink from "@/components/atoms/navLink";

const Header = () => {
  const [border, setBorder] = useState(true);
  const [open, setOpen] = useState(false);

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
    <header
      className={`fixed left-0 top-0  w-full flex flex-col justify-center text-neutral-700  hover:shadow-xl z-30 ${
        border ? "shadow-xl bg-white/90" : ""
      } duration-300`}
    >
      <div className="container flex justify-between h-20 items-center px-[2vw] text-neutral-700">
        <div className="flex items-center gap-2">
          <Image src="/images/mn_logo.png" alt="logo" width={50} height={50} />
          <h1 className="text-xl font-bold font-woodland ">
            #NICAtadhanakayMAR
          </h1>
        </div>
        <button className="lg:hidden" onClick={() => setOpen((prev) => !prev)}>
          {open ? (
            <XMarkIcon className="h-10 w-10 p-1" />
          ) : (
            <Bars3Icon className="h-10 w-10 p-1" />
          )}
        </button>
        <Navigation />
      </div>
      <div
        className={`${
          open ? (border ? "h-40 p-2" : "h-40 bg-[#d7cab9] p-2") : "h-0 p-0"
        }
        lg:hidden border-t border-neutral-200/90 transition-all duration-200 overflow-hidden grid grid-cols-4 items-center text-center`}
      >
        <NavLink link="#home" title="M&N" />
        <NavLink link="#rsvp" title="RSVP" />
        <NavLink link="#entourage" title="ENTOURAGE" />
        <NavLink link="#kasuotan" title="KASUOTAN" />
        <NavLink link="#lokasyon" title="LOKASYON" />
        <NavLink link="#gabay" title="GABAY" />
        <NavLink link="#mga-tanong" title="MGA TANONG" />
        <NavLink link="#prenup" title="PRENUP" />
      </div>
    </header>
  );
};

export default Header;
