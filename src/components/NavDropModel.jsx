import Link from "next/link";
import { NavDropModelListItem } from ".";

const NavDropModel = ({ title, list }) => {
  return (
    <Link href="/">
      <div className="bg-white text-[var(--dark-purple)] rounded-xl p-8 w-[650px] flex flex-col gap-4">
        {title && <p className="font-2xl font-bold">{title} &#8594;</p>}
        <div className="grid grid-cols-2 gap-4">
          {list.map((item, index) => (
            <NavDropModelListItem item={item} key={index} />
          ))}
        </div>
      </div>
    </Link>
  );
};

export default NavDropModel;
