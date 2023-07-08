import Link from "next/link";

const LocationCard: React.FC<Props> = ({ link, type, address, src }) => {
  return (
    <div className="flex items-center flex-col text-center font-woodland p-10">
      <iframe
        src={src}
        width="400"
        height="300"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="border-0 mb-8 shadow-lg w-full h-[300px] rounded-md"
      />
      <Link href={link} rel="noopener noreferrer" target="_blank">
        <h3 className="text-2xl lg:text-3xl pb-4 text-neutral-800 font-bold">{type}</h3>
        <p className="text-lg lg:text-xl text-neutral-800 w-fit hover:underline ">
          {address}
        </p>
      </Link>
    </div>
  );
};

interface Props {
  link: string;
  type: string;
  address: string;
  src: string;
}

export default LocationCard;
