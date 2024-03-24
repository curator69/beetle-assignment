import { Calculator, FAQS } from "@/components";

const MainDetails = () => {
  return (
    <div className="flex items-start gap-20 bg-white py-24 px-16">
      <div className="flex flex-col gap-8 w-[50%]">
        <h1 className="text-5xl font-bold text-black w-[16ch]">
          Find Signals That Close Deals
        </h1>
        <FAQS />
      </div>
      <Calculator />
    </div>
  );
};

export default MainDetails;
