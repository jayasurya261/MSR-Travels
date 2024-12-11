"use client";
import { CardStack } from "../ui/Card-stack";
import { cn } from "@/lib/utils";
export function CardStackDemo() {
  return (
    (<div className="h-[40rem] flex items-center justify-center w-full">
      <CardStack items={CARDS} />
    </div>)
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className
}) => {
  return (
    (<span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}>
      {children}
    </span>)
  );
};

const CARDS = [
  {
    id: 0,
    name: "Raj Kumar",
    designation: "Thanjavur",
    content: (
      <p>
      MSR Travels made our<Highlight>Navagraha temple tour seamless and spiritual,</Highlight> with excellent coordination and comfort throughout.
      </p>
    ),
  },
  {
    id: 1,
    name: "Janani",
    designation: "Thrichy",
    content: (
      <p>
       The team at MSR Travels was friendly and efficient, ensuring a <Highlight>memorable and hassle-free pilgrimage experience.</Highlight>
      </p>
    ),
  },
  {
    id: 2,
    name: "Kasi Ranganathan",
    designation: "Kumbakonam",
    content: (
      <p>
        From start to finish, MSR Travels provided exceptional service, making our<Highlight>Navagraha temple tour both enjoyable and meaningful.</Highlight>
      </p>
    ),
  },
];
