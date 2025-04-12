export function Chip({ label, hoverColor = "gray-200" }: { label: string, hoverColor?: string }) {
  return <div className={`hover:bg-${hoverColor} hover:text-white transition-all duration-300 font-light text-black  text-xs py-1 px-3 rounded-full bg-gray-200`}>{label}</div>;
}

