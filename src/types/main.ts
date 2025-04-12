export type HeaderLink = {
  label: string;
  href: string;
};

export type Experience = {
  position: string;
  company: string;
  description: string;
  startDate: string;
  endDate: string;
  stack: string[];
};

export type Project = {
  name: string;
  description: string;
  stack: string[];
  link?: string;
  repo?: string;
};