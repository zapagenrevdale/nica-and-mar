import NavLink from "@/components/atoms/navLink";

const Navigation = () => {
  return (
    <nav className="hidden space-x-8 font-woodland font-light xl:flex">
      <NavLink link="#home" title="M&N" />
      <NavLink link="#rsvp" title="RSVP" />
      <NavLink link="#entourage" title="ENTOURAGE" />
      <NavLink link="#kasuotan" title="KASUOTAN" />
      <NavLink link="#lokasyon" title="LOKASYON" />
      <NavLink link="#gabay" title="GABAY" />
      <NavLink link="#mga-tanong" title="MGA TANONG" />
      <NavLink link="#prenup" title="PRENUP" />
    </nav>
  );
};

export default Navigation;
