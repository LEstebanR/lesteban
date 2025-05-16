export const H1 = ({
  children,
  color = "black",
}: {
  children: React.ReactNode;
  color?: string;
}) => {
  return <h1 className={`text-2xl font-bold text-${color}`}>{children}</h1>;
};

export const H2 = ({
  children,
  color = "black",
}: {
  children: React.ReactNode;
  color?: string;
}) => {
  return (
    <h2 className={`text-xl font-bold text-${color} flex self-end`}>
      {children}
    </h2>
  );
};

export const H3 = ({ children }: { children: React.ReactNode }) => {
  return <h3 className="text-lg font-bold">{children}</h3>;
};

export const Subtitle = ({ children }: { children: React.ReactNode }) => {
  return <p className="text-muted text-sm">{children}</p>;
};

export const Body = ({
  children,
  color = "black",
}: {
  children: React.ReactNode;
  color?: string;
}) => {
  return (
    <p
      className={`text-base dark:text-white ${
        color === "black" ? "text-black" : color
      }`}
    >
      {children}
    </p>
  );
};

export const Emphasized = ({ children }: { children: React.ReactNode }) => {
  return <span className="text-secondary text-base font-bold">{children}</span>;
};
