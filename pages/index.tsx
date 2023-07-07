import MusicPlayer from "@/components/molecules/musicPlayer";
import EntourageGroup from "@/components/organisms/entourage";
import Attire from "@/components/organisms/attire";
import Location from "@/components/organisms/location";
import RSVP from "@/components/organisms/rsvp";
import Hero from "@/components/organisms/hero";
import Divider from "@/components/atoms/divider";
import MainPhotos from "@/components/molecules/mainPhotos";
import FAQS from "@/components/organisms/faqs";
import Guide from "@/components/organisms/guide";
const Home = () => {
  return (
    <main className="flex flex-col items-center w-full pb-[100vh]">
      <div className="container relative">
        <Hero />
        <MainPhotos />
        {/* now image with link  */}
        {/* <RSVP /> */}
        <EntourageGroup />
        <Attire />
        <Location />
        <Guide />
        <FAQS />
        <MusicPlayer />
      </div>
    </main>
  );
};

export default Home;
