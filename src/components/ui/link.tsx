export const Link = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <a
      href={href}
      className="hover:underline hover:text-primary hover:animate-underline-link underline-offset-4 decoration-2 transition-all duration-300"
      target="_blank"
    >
      {children}
    </a>
  );
};
