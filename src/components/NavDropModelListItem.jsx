import Image from "next/image";

const NavDropModelListItem = (item) => {
  const { title, description, icon } = item.item;

  return (
    <div
      className="py-2 text-[var(--dark-purple)] flex items-center gap-4"
      style={{ borderBottom: "0.1px solid #120920" }}
    >
      <Image src={icon} width={30} height={30} alt={title} />
      {description ? (
        <div className="flex flex-col">
          <p className="text-base font-bold">{title}</p>
          {description && <p className="text-base">{description}</p>}
        </div>
      ) : (
        <p>{title}</p>
      )}
    </div>
  );
};

export default NavDropModelListItem;
