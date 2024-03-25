import Image from "next/image";

const Footer = () => {
  return (
    <div className="footerMainWrapper flex items-start justify-between h-full py-24 px-16">
      <div className="flex flex-col gap-8 w-[40%]">
        <div className="flex flex-col gap-4">
          <Image
            src="/logo.svg"
            width={100}
            height={100}
            alt="logo"
            className="h-full w-[200px]"
          />
          <p>
            The Relationship Intelligence and Deal Flow CRM Designed by
            Ex-Investors
          </p>
        </div>
        <img
          src="/images/socialIcons.svg"
          alt="social icons"
          className="w-fit justify-self-end"
        />
      </div>

      <div className="footerLinksWrapper flex items-start justify-between w-full">
        <div className="flex flex-col gap-4">
          <p>About</p>
          <p>About Us</p>
          <p>Careers</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>

        <div className="flex flex-col gap-4">
          <p>Resources</p>
          <p>Blog</p>
          <p>Content Library</p>
          <p>Customer Stories</p>
        </div>

        <div className="flex flex-col gap-4">
          <p>industries</p>
          <p>Venture Capital</p>
          <p>Private Equity</p>
          <p>Mergers & Acquistions</p>
          <p>Investment Banking</p>
          <p>Commercial Realestate</p>
          <p>Consulting</p>
        </div>

        <div className="flex flex-col gap-4">
          <p>Product</p>
          <p>CRM</p>
          <p>Reporting</p>
          <p>Mobile</p>
          <p>integrations</p>
          <p>Salesforce</p>
          <p>Relationship intelligence</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
