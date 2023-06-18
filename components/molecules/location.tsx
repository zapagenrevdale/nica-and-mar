import Link from "next/link";

const LocationCard: React.FC<Props> = ({ link, type, address, src }) => {
  return (
    <div className="flex items-center flex-col text-center p-10 hover:underline underline-offset-8 hover:text-custom-brown">
      <iframe
        src={src}
        width="400"
        height="300"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="border-0 mb-6 shadow-lg w-full h-[300px] rounded-md"
      />
      <Link href={link} rel="noopener noreferrer" target="_blank">
        <h3 className="text-xl text-text-brown mb-4">{type}</h3>
        <address className="text-neutral-600">{address}</address>
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
