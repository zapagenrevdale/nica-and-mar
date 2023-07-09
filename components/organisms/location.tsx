import Image from "next/image";
import LocationCard from "../molecules/location";

const Location = () => {
  return (
    <div className="flex flex-col items-center w-full relative min-h-[800px]  py-10 text-neutral-70 ">
      <h1 className="text-4xl lg:text-5xl font-woodland font-bold text-center py-4 lg:pb-16 px-10">
        SEREMONYA & RESEPSYON
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 w-ful lg:w-5/6">
        <LocationCard
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3860.5951474751705!2d121.043547!3d14.622124!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b7c826611a7f%3A0x2d9fe1f582d3d8f3!2s40%20Lantana%2C%20Quezon%20City%2C%201111%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1687071861915!5m2!1sen!2sph"
          type="SEREMONYA"
          time="Alas dose ng tanghali"
          address="Immaculate Conception Cathedral 40 Lantana, Cubao, Quezon City,
            1109 Metro Manila"
          link="https://goo.gl/maps/mcFvBSDGDLxWLkc9A"
        />

        <LocationCard
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3859.6520714434187!2d121.07699600000001!3d14.675675999999998!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b755c9741e83%3A0x394d8d6a9c811c6e!2sBlue%20Gardens%20Wedding%20and%20Events%20Venue!5e0!3m2!1sen!2sph!4v1687071026887!5m2!1sen!2sph"
          type="RESEPYON"
          time="Alas kwatro ng hapon"
          address="
          Blue Gardens Weddings and Events Venue 28 Samonte Street via North
          Zuzuaregui Road, Commonwealth Avenue, Quezon City, 1121"
          link="https://goo.gl/maps/bEdCWP8XGwqE6EfV8"
        />
      </div>
    </div>
  );
};

export default Location;
