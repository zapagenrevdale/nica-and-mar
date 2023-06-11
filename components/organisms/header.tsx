import Navigation from "@/components/molecules/navigation";

const Header = () => {
  return (
    <header className="sticky left-0 top-0  w-full flex justify-center text-neutral-700 bg-neutral-100 hover:shadow-xl z-30">
      <div className="container flex justify-between h-20 items-center px-[2vw] text-neutral-700">
        {/* logo */}
        <h1 className="text-xl font-light ">#NICAtadhanakayMAR</h1>

        {/* navbar */}
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
