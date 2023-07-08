import NavLink from "@/components/atoms/navLink";

const Navigation = () => {
  return (
    <nav className="hidden font-woodland font-light lg:flex lg:space-x-4 xl:space-x-8 ">
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
