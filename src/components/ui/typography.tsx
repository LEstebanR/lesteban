export const H1 = ({ children, color = "black" }: { children: React.ReactNode, color?: string }) => {
  return <h1 className={`text-xl font-bold  text-${color}`}>{children}</h1>;
};

export const H2 = ({ children }: { children: React.ReactNode }) => {
  return <h2 className="text-xl font-bold">{children}</h2>;
};

export const H3 = ({ children }: { children: React.ReactNode }) => {
  return <h3 className="text-lg font-bold">{children}</h3>;
};

export const Subtitle = ({ children }: { children: React.ReactNode }) => {
  return <p className="text-sm text-muted ">{children}</p>;
};

export const Body = ({ children }: { children: React.ReactNode }) => {
  return <p className="text-base text-black  ">{children}</p>;
};

export const Emphasized = ({ children }: { children: React.ReactNode }) => {
  return <span className="text-base text-secondary font-bold">{children}</span>;
};
