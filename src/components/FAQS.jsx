import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = () => {
  return (
    <Accordion type="single" collapsible className="flex flex-col gap-4">
      <AccordionItem
        value="item-1"
        className="bg-[var(--light-purple)] text-black px-8 rounded-xl"
      >
        <AccordionTrigger className="hover:border-none font-bold text-2xl">
          Number of Team Members:
        </AccordionTrigger>
        <AccordionContent className="text-lg">
          How many people are in your firm’s deal team?
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="item-2"
        className="bg-[var(--light-purple)] text-black px-8 rounded-xl"
      >
        <AccordionTrigger className="hover:border-none font-bold text-2xl">
          Size of Network:
        </AccordionTrigger>
        <AccordionContent className="text-lg">
          How many contacts are in your network?
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="item-3"
        className="bg-[var(--light-purple)] text-black px-8 rounded-xl"
      >
        <AccordionTrigger className="hover:border-none font-bold text-2xl">
          Number of Signals Per Contact:
        </AccordionTrigger>
        <AccordionContent className="text-lg">
          How many signals (job changes, investments, mentions). Average: 1
          signal per 2 contacts.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="item-4"
        className="bg-[var(--light-purple)] text-black px-8 rounded-xl"
      >
        <AccordionTrigger className="hover:border-none font-bold text-2xl">
          Percent of Legitimate Signals:
        </AccordionTrigger>
        <AccordionContent className="text-lg">
          Signals that can lead you to reach out to a certain company. Average:
          10%
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="item-5"
        className="bg-[var(--light-purple)] text-black px-8 rounded-xl"
      >
        <AccordionTrigger className="hover:border-none font-bold text-2xl">
          Percent of Hard to Discover Signals:
        </AccordionTrigger>
        <AccordionContent className="text-lg">
          Signals that can only be discovered with relationship intelligence
          technology. Average: 10 to 20%
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default FAQS;
