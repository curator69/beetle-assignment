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

const Industries = [
  {
    title: "Private Equity",
    icon: "/images//icons/Industries/privateEquity.svg",
  },
  {
    title: "Investment Banking or M&A Advisory",
    icon: "/images//icons/Industries/investmentBanking.svg",
  },
  {
    title: "Venture Capital",
    icon: "/images//icons/Industries/ventureCapital.svg",
  },
  {
    title: "Corporate Devolopment / M&A",
    icon: "/images//icons/Industries/corporateDevolopment.svg",
  },
  {
    title: "Commercial Real Estate",
    icon: "/images//icons/Industries/commercialRealEstate.svg",
  },
  {
    title: "Consulting CRM",
    icon: "/images//icons/Industries/consultingCRM.svg",
  },
];

const Product = [
  {
    title: "CRM",
    description: "Eliminate busywork and manage deals",
    icon: "/images//icons/Product/CRM.svg",
  },
  {
    title: "Relationship Intelligence",
    description: "Uncover new opportunities and find warm introductions",
    icon: "/images//icons/Product/relationshipIntelligence.svg",
  },
  {
    title: "Reporting",
    description: "Drive Efficiency to Close More Deals",
    icon: "/images//icons/Product/reporting.svg",
  },
  {
    title: "Mobile",
    description: "Manage Deals From Anywhere",
    icon: "/images//icons/Product/mobile.svg",
  },
  {
    title: "Integrations",
    description: "Use Relationship Intelligence Everywhere",
    icon: "/images//icons/Product/integrations.svg",
  },
  {
    title: "Deal Flow Software",
    description: "Easily Manage Your Deals",
    icon: "/images//icons/Product/dealFlowSoftware.svg",
  },
  {
    title: "Salesforce",
    description: "The Power of Relationship Intelligence Inside Salesforce",
    icon: "/images//icons/Product/salesforce.svg",
  },
];
