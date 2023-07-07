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
    <main className="flex flex-col items-center w-full pb-20">
      <div className="container relative">
        <Hero />
        
        {/* now image with link  */}
        <RSVP />
        <MainPhotos />
        <div id="entourage" className="h-20"/>
        <EntourageGroup />
        <div id="kasuotan" className="h-20"/>
        <Attire />
        <div id="lokasyon" className="h-20"/>
        <Location />
        <div id="gabay" className="h-20"/>
        <Guide />
        <div id="mga-tanong" className="h-20"/>
        <FAQS />
        <MusicPlayer />
      </div>
    </main>
  );
};

export default Home;
