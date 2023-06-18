import NavLink from "@/components/atoms/navLink";

const Navigation = () => {
  return (
    <nav className="hidden space-x-8 font-quickSand font-light xl:flex">
      <NavLink link="#" title="M&N" />
      <NavLink link="#" title="RSVP" />
      <NavLink link="#" title="ENTOURAGE" />
      <NavLink link="#" title="KASUOTAN" />
      <NavLink link="#" title="LOKASYON" />
      <NavLink link="#" title="GABAY" />
      <NavLink link="#" title="MGA TANONG" />
      <NavLink link="#" title="PRENUP" />
    </nav>
  );
};

export default Navigation;
