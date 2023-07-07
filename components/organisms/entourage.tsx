import Entourage from "../molecules/entourage";

const EntourageGroup = () => {
  return (
    <div
      className="flex justify-center w-full relative  pb-10 overflow-hidden rounded-lg bg-no-repeat bg-top bg-cover"
      style={{
        backgroundImage: "url('/images/DD5A5807.png')",
        // backgroundAttachment: "fixed",
      }}
    >
      <div className="h-full w-full absolute opacity-70 bg-white"/>
   
      <div className="flex flex-col justify-center items-center gap-14 font-montaga text-neutral-700  w-11/12 p-10 z-10">
        {/* title */}
        <h1 className="text-5xl text-center font-woodland font-bold">
          The Entourage
        </h1>

        {/* groom and bride */}
        {/* grid 2 */}
        <div className="grid grid-cols-2 w-full">
          <Entourage
            title="Mga Mahal Naming Magulang"
            names={["Ginoong Rodolfo A. Pineda", "Ginang Donata T. Pineda"]}
          />
          <Entourage
            title="Mga Mahal Naming Magulang"
            names={["Ginoong Manuel R. Luna", "Ginang Marie Grace M. Luna"]}
          />
        </div>
        {/* principal sponsor */}
        {/* grid 1 */}

        <div className="grid grid-cols-1 w-full">
          <Entourage
            title="Mga Gabay Sa Aming Buhay"
            names={[
              "Ginoong Mark Marcial & Ginang Lory Mae Tubuan",
              "Ginoong Michael Marcial & Ginang Margie Reyes",
              "Ginoong Bernie Turla & Ginang Maridel Rebadavia ",
              "Ginoong Joselito Salazar & Ginang Glenda Magat",
              "Ginoong Bado Pineda & Ginang Nora Fajardo",
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
            title="Mga Piling Ginoong Pandangal"
            names={["Ginoong Ashly Arquero", "Ginoong Paul Quiñone"]}
          />
          <Entourage
            title="Mga Piling Binibining Pandangal"
            names={["Binibining Kate Luna"]}
          />
        </div>

        {/* gman and bmaid*/}
        {/* grid 2 */}
        <div className="grid grid-cols-2 w-full">
          <Entourage
            title="Abay"
            names={[
              "Ginoong Jed Policarpio",
              "Ginoong Victorio Balais",
              "Ginoong Villy Fuellas",
              "Ginoong Jerome Estadilla",
              "Ginoong Kent Luna",
              "Ginoong Marvin Gomez",
            ]}
          />
          <Entourage
            title="Abay"
            names={[
              "Binibining Joemily Rose Angat",
              "Binibining Alyana Patricia Orito",
              "Binibining Ma. dame Ametrini Morcilla",
              "Binibining Romilyds Argana",
              "Binibining Danica Lyka Pineda",
              "Binibining Raine Louise Reyes",
            ]}
          />
        </div>

        <div className="grid grid-cols-3 w-full">
          <Entourage
            title="Magbibigay Suklob Sa  Aming Pagiging Isa"
            names={[
              "Ginoong Villy Fuellas",
              " Binibining Ma. Dame Ametrini Morcilla",
            ]}
          />
          <Entourage
            title="Magbibigay Tanglaw Sa  Aming Bagong Landas"
            names={["Ginoong Jed Policarpio", "Binibining Joemily Rose Angat"]}
          />
          <Entourage
            title="Magbibigay Tali Ng  Katiwasayan"
            names={[
              "Ginoong Victorio Balais",
              "Binibining Alyana Patricia Orit",
            ]}
          />
        </div>

        <div className="grid grid-cols-3 w-full">
          <Entourage
            title="Tagapag-ingat Ng Sagisag Ng Aming Pagmamahalan"
            names={["Ginoong Jerome Estadilla", " Binibining Romilyds Argana"]}
          />
          <Entourage
            title="Tagapag-ingat Ng Sagisag Ng Aming Kasaganahan"
            names={["Ginoong Marvin Gomez", "Binibining Raine Louise Reyes"]}
          />
          <Entourage
            title="Tagapag-ingat Ng Sagisag Ng Aming Pananampalataya"
            names={["Ginoong Kent Luna", "Binibining Danica Lyka Pineda"]}
          />
        </div>
      </div>
    </div>
  );
};

export default EntourageGroup;
