export default function FooterArrows() {
  return (
    <svg
      viewBox="0 0 250 100"
      fill="none"
      aria-hidden="true"
      className="pointer-events-none absolute -top-[10px] left-[490px] hidden h-[100px] w-[250px] text-salmon lg:block"
    >
      <title>Decorative arrows</title>
      {[0, 81].map((offset) => (
        <g key={offset} transform={`translate(${offset} 0)`}>
          <path
            d="M121 2C148 14 162 28 157 45C150 66 105 64 78 73C52 82 24 89 7 92.5"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M17.4 96L7 92.5L15.2 85.2"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      ))}
    </svg>
  );
}
