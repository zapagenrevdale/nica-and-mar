import Link from "next/link";

const NavLink: React.FC<Props> = ({ link, title }) => {
  return (
    <Link href={link} className="hover:underline hover:underline-offset-4" scroll={false}>
      {title}
    </Link>
  );
};

interface Props {
  title: string;
  link: string;
}

export default NavLink;
