"use client";

import { getClientDictionary } from "@/app/[lang]/dictionaries/client";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface SeeMoreButtonProps {
  children: React.ReactNode;
  seeMoreCopy: React.ReactNode;
  seeLessCopy: React.ReactNode;
}

export function SeeMoreButton({
  children,
  seeMoreCopy,
  seeLessCopy,
}: SeeMoreButtonProps) {
  const [seeMore, setSeeMore] = useState(false);
  const pathname = usePathname();
  const lang = pathname.split("/")[1] as "en" | "es";

  return (
    <>
      <div
        className={`grid transition-all duration-500 ease-in-out ${
          seeMore ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col gap-5">{children}</div>
        </div>
      </div>
      <Button
        variant="outline"
        onClick={() => setSeeMore(!seeMore)}
        className="w-fit mx-auto rounded-full border-primary text-primary hover:bg-primary hover:text-white cursor-pointer"
      >
        {seeMore ? (
          <>
            {seeLessCopy}
            <ChevronUp className="w-4 h-4" />
          </>
        ) : (
          <>
            {seeMoreCopy}
            <ChevronDown className="w-4 h-4" />
          </>
        )}
      </Button>
    </>
  );
}
