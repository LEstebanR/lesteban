import { H1, Body, Emphasized } from "@/app/components/typography";

export function AboutMe() {
  return (
    <div className="flex flex-col gap-4 items-between mt-4 ">
      <H1 color="primary">About Me</H1>
      <Body>
        I&apos;m a Software Developer with 3 years of experience as Web
        Developer. Teamwork is my favorite way to learn. Always looking to
        improve the quality of my code to make it more readable and
        maintainable.
      </Body>
      <Body>
        My dream is to work on products with global impact that positively
        change the lives of millions of people. I have experience with{" "}
        <Emphasized>React, Tailwind, Next.js, Node.js, Supabase </Emphasized>
        and I&apos;m working to be a Indie Hacker.
      </Body>
    </div>
  );
}
