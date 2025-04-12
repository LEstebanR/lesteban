export const H1 = ({ children }: { children: React.ReactNode }) => {
  return <h1 className="text-xl font-bold tracking-tight">{children}</h1>;
};

export const H2 = ({ children }: { children: React.ReactNode }) => {
  return <h2 className="text-3xl font-bold">{children}</h2>;
};

export const Subtitle = ({ children }: { children: React.ReactNode }) => {
  return <p className="text-sm text-muted mt-0.5 ">{children}</p>;
};
