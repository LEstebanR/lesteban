import { getDictionary } from "@/app/[lang]/dictionaries";

export async function AboutMe({ lang }: { lang: "en" | "es" }) {
  const dictionary = await getDictionary(lang);
  const { "about-me": aboutMe } = dictionary;

  return (
    <div className="flex flex-col gap-4 items-between mt-4 ">
      <h1 className="text-primary text-2xl font-bold">{aboutMe}</h1>
      <p>
        Collaborative environments are my favorite way to grow, and I focus on
        writing clean, maintainable code. My goal is to build products with
        global impact that improve people’s lives. Experienced with{" "}
        <span className="font-bold text-secondary">
          React, Tailwind, Next.js, Node.js, and Supabase
        </span>{" "}
        — currently on the path to becoming an{" "}
        <span className="font-bold text-secondary">Indie Hacker</span>.
      </p>
    </div>
  );
}
