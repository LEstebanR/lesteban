import { getDictionary } from "@/app/[lang]/dictionaries";

export async function AboutMe({ lang }: { lang: "en" | "es" }) {
  const dictionary = await getDictionary(lang);

  return (
    <div className="flex flex-col gap-4 items-between mt-4 ">
      <h1 className="text-primary text-2xl font-bold">
        {dictionary["about-me"]}
      </h1>
      <p>
        {dictionary["about-me-description-1"]}{" "}
        <span className="font-bold text-secondary">
          React, Tailwind, Next.js, Node.js, and Supabase
        </span>{" "}
        {dictionary["about-me-description-2"]}{" "}
        <span className="font-bold text-secondary">Indie Hacker</span>.
      </p>
    </div>
  );
}
