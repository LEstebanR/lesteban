"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface SeeMoreButtonProps {
  children: React.ReactNode;
  lang: "en" | "es";
  seeMoreCopy: string;
  seeLessCopy: string;
}

export function SeeMoreButton({
  children,
  lang,
  seeMoreCopy,
  seeLessCopy,
}: SeeMoreButtonProps) {
  const [seeMore, setSeeMore] = useState(false);

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
