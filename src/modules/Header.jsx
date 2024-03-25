import Image from "next/image";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { NavDropModel } from "@/components";
import { Product, Industries } from "../../data";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-16">
      <Image
        src="/logo.svg"
        width={100}
        height={100}
        alt="logo"
        className="h-full w-[200px]"
      />

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-base">
              Industries
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavDropModel title="Industries" list={Industries} />
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-base">
              Product
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavDropModel list={Product} />
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex items-center gap-8">
        <button className="text-base font-bold">Log In</button>
        <button className="border-2 border-white border-solid rounded-full p-4 px-8 text-base font-bold">
          Request A Demo &#8594;
        </button>
      </div>
    </div>
  );
};

export default Header;


