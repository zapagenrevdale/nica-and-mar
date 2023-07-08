import MusicPlayer from "@/components/molecules/musicPlayer";
import EntourageGroup from "@/components/organisms/entourage";
import Attire from "@/components/organisms/attire";
import Location from "@/components/organisms/location";
import RSVP from "@/components/organisms/rsvp";
import Hero from "@/components/organisms/hero";
import MainPhotos from "@/components/molecules/mainPhotos";
import FAQS from "@/components/organisms/faqs";
import Guide from "@/components/organisms/guide";
import Head from "next/head";
const Home = () => {
  return (
    <main className="flex flex-col items-center w-full pb-10">
      <Head>
        <title>Nica and Mar</title>
        <meta
          name="description"
          content="Nica and Mar Wedding Invitation! #NicaTadhanaKayMar"
        />
        <meta name="robots" content="index, follow" />
      </Head>
      <Hero />
      <div className="container relative">
        {/* now image with link  */}
        <RSVP />
        <MainPhotos />
        <div id="entourage" className="h-20" />
        <EntourageGroup />
        <div id="kasuotan" className="h-20" />
        <Attire />
        <div id="lokasyon" className="h-20" />
        <Location />
        <div id="gabay" className="h-20" />
        <Guide />
        <div id="mga-tanong" className="h-20" />
        <FAQS />
        <MusicPlayer />
      </div>
    </main>
  );
};

export default Home;
