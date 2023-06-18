import Image from "next/image";
import Entourage from "../molecules/entourage";

const EntourageGroup = () => {
  return (
    <div className="flex justify-center w-full relative  pb-10 overflow-hidden">
      <Image
        alt="Entourage background"
        src="/images/background/bg1-up.jpg"
        width={472}
        height={709}
        className="absolute top-0 left-0 w-[20%] -z-20"
      />

      <div className="flex flex-col justify-center items-center gap-16 font-montaga text-neutral-700  w-full max-w-[720px] m-5 lg:m-20">
        {/* title */}
        <h1 className="text-5xl text-center">The Entourage</h1>

        {/* groom and bride */}
        {/* grid 2 */}
        <div className="grid grid-cols-2 w-full">
          <Entourage
            title="Parents of the Groom"
            names={["Mr. Rodolfo A. Pineda", "Mrs. Donata T. Pineda"]}
          />
          <Entourage
            title="Parents of the Bride"
            names={["Mr. Manuel R. Luna", "Mrs. Marie Grace M. Luna"]}
          />
        </div>

        {/* principal sponsor */}
        {/* grid 1 */}

        <div className="grid grid-cols-1 w-full">
          <Entourage
            title="Principal Sponsor"
            names={[
              "Ginoong Mark Marcial & Ginang Lory Mae Tubuan",
              "Ginoong Michael Marcial & Ginang Margie Reyes",
              "Ginoong Bernie Turla & Ginang Maridel Rebadavia ",
              "Ginoong Joselito Salazar & Ginang Glenda Magat",
              "Ginoong Bado Pineda & Ginang Nora Fajardo",
              "Ginoong Joey Turla & Ginang Rem Turla",
              "Ginoong Paul Pineda & Ginang Melissa Hernandez",
            ]}
          />
        </div>

        {/* bestman and maid of honor */}
        {/* grid 2 */}

        <div className="grid grid-cols-2 w-full">
          <Entourage
            title="Best Man"
            names={["Mr. Ashly Arquero", "Mr. Paul Quiñone"]}
          />
          <Entourage title="Maid of Honor" names={["Ms. Kate Luna"]} />
        </div>

        {/* gman and bmaid*/}
        {/* grid 2 */}
        <div className="grid grid-cols-2 w-full">
          <Entourage
            title="Groomsmen"
            names={[
              "Mr. Jed Policarpio",
              "Mr. Victorio Balais",
              "Mr. Villy Fuellas",
              "Mr. Jerome Estadilla",
              "Mr. Kent Luna",
              "Mr. Marvin Gomez",
            ]}
          />
          <Entourage
            title="Bridesmaids"
            names={[
              "Ms. Joemily Rose Angat",
              "Ms. Alyana Patricia Orito",
              "Ms. Ma. dame Ametrini Morcilla",
              "Ms. Romilyds Argana",
              "Ms. Danica Lyka Pineda",
              "Ms. Raine Louise Reyes",
            ]}
          />
        </div>

        <div className="grid grid-cols-3 w-full">
          <Entourage
            title="Veil"
            names={["Mr. Villy Fuellas", " Ms. Ma. Dame Ametrini Morcilla"]}
          />
          <Entourage
            title="Candle"
            names={["Mr. Jed Policarpio", "Ms. Joemily Rose Anga"]}
          />
          <Entourage
            title="Cord"
            names={["Mr. Victorio Balais", "Ms. Alyana Patricia Orit"]}
          />
        </div>

        <div className="grid grid-cols-3 w-full">
          <Entourage
            title="Ring Bearer"
            names={["Mr. Jerome Estadilla", " Ms. Romilyds Argana"]}
          />
          <Entourage
            title="Coin Bearer"
            names={["Mr. Marvin Gomez", "Ms. Raine Louise Reyes"]}
          />
          <Entourage
            title="Bible Bearer"
            names={["Mr. Kent Luna", "Ms. Danica Lyka Pineda"]}
          />
        </div>
      </div>
      <Image
        alt="Entourage background"
        src="/images/background/bg1-down.jpg"
        width={472}
        height={709}
        className="absolute bottom-0 right-0 w-[20%] -z-20"
      />
    </div>
  );
};

export default EntourageGroup;
