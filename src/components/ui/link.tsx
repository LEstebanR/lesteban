export const Link = ({
  children,
  href,
  withIcon = false,
  icon,
}: {
  children: React.ReactNode;
  href: string;
  withIcon?: boolean;
  icon?: React.ReactNode;
}) => {
  return (   
      <a
        href={href}
        className="hover:underline hover:text-primary hover:animate-underline-link underline-offset-4 decoration-2 transition-all duration-300"
        target="_blank"
    >
      <div className="flex flex-row items-center gap-1">
        {withIcon && icon}
        {children}
      </div>
    </a>
  );
};
