import Entourage from "../molecules/entourage";

const EntourageGroup = () => {
  return (
    <div
      className="flex justify-center w-full relative  pb-10 overflow-hidden rounded-lg bg-no-repeat bg-top bg-cover"
      style={{
        backgroundImage: "url('/images/ENTOURAGE.png')",
        // backgroundAttachment: "fixed",
      }}
    >
      <div className="h-full w-full absolute opacity-60 bg-white" />

      <div className="flex flex-col justify-center items-center gap-14 font-montaga text-neutral-700  w-11/12 p-10 pt-20 z-10">
        {/* groom and bride */}
        {/* grid 2 */}
        <div className="grid grid-cols-1 gap-y-4 w-full">
          <Entourage
            title="Mga Mahal Naming Magulang"
            names={[
              "Ginoong Manuel R. Luna",
              "Ginang Marie Grace M. Luna",
              "Ginoong Rodolfo A. Pineda",
              "Ginang Donata T. Pineda",
            ]}
          />
        </div>
        {/* principal sponsor */}
        {/* grid 1 */}

        <div className="grid grid-cols-1 gap-y-4 w-full">
          <Entourage
            title="Mga Gabay Sa Aming Buhay"
            names={[
              "Ginoong Michael Marcial  & Ginang Maridel Rebadavia",
              "Ginoong Joselito Salazar & Ginang Lory Mae Tubuan",
              "Ginoong Angelo Turla & Ginang Marissa Fajardo ",
              "Ginoong Mark Marcial & Ginang Margie Reyes",
              "Ginoong Policarpio Magat & Ginang Glenda Magat",
              "Ginoong Johnny Manuel & Ginang Remedios Turla",
              "Ginoong Mauro Pineda & Ginang Marissa Hernandez",
              "Ginoong Cezar Gulapa & Ginang Fely Turla",
            ]}
          />
        </div>

        {/* bestman and maid of honor */}
        {/* grid 2 */}

        <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-2 w-full">
          <Entourage
            title="Piling Ginoo"
            names={["Ginoong Van Ashly Arquero "]}
          />
          <Entourage
            title="Binibining Pandangal"
            names={["Binibining Kate Luna"]}
          />
        </div>

        {/* gman and bmaid*/}
        {/* grid 2 */}
        <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-2 w-full">
          <Entourage
            title="Abay Na Lalaki"
            names={[
              "Ginoong Kent Luna",
              "Ginoong Jerome Cristopher Estadilla",
              "Ginoong Marvin Gomez",
              "Ginoong Paul Aldrine Quiñones",
            ]}
          />
          <Entourage
            title="Abay Na Babae"
            names={[
              "Binibining Danicalyka Pineda",
              "Binibining Romilyds Argana",
              "Binibining Raine Louise Reyes",
            ]}
          />
        </div>

        <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-3 w-full">
          <Entourage
            title="Magbibigay Suklob Sa  Aming Pagiging Isa"
            names={[
              "Ginoong Villy Roel  Fuellas",
              " Binibining Ma. Dame Ametrini Morcilla",
            ]}
          />
          <Entourage
            title="Magbibigay Tanglaw Sa  Aming Bagong Landas"
            names={["Ginoong Bryan Jed Policarpio", "Binibining Joemily Rose Angat"]}
          />
          <Entourage
            title="Magbibigay Tali Ng  Katiwasayan"
            names={[
              "Ginoong Victorio Balais",
              "Binibining Alyana Patricia Orito",
            ]}
          />
        </div>

        {/* <div className="grid grid-cols-3 w-full">
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
        </div> */}
      </div>
    </div>
  );
};

export default EntourageGroup;
