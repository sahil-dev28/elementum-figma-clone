// Positions/sizes are an approximation of the Figma layout (staggered, two
// overlapping pairs + three raised singles), read off a screenshot rather
// than exact design coordinates.
const AVATARS = [
  { img: 11, left: "6%", top: "80%", size: "clamp(70px, 9vw, 110px)" },
  { img: 12, left: "17%", top: "70%", size: "clamp(80px, 10vw, 125px)" },
  { img: 13, left: "33%", top: "55%", size: "clamp(95px, 12vw, 150px)" },
  { img: 14, left: "55%", top: "60%", size: "clamp(95px, 12vw, 150px)" },
  { img: 15, left: "65%", top: "72%", size: "clamp(85px, 11vw, 135px)" },
  { img: 16, left: "80%", top: "50%", size: "clamp(105px, 13vw, 165px)" },
  { img: 17, left: "93%", top: "77%", size: "clamp(85px, 11vw, 130px)" },
] as const;

export default function Hero() {
  return (
    <section className="relative px-6 py-16 sm:py-20">
      {/* Decorative squiggle (left edge) */}
      <svg
        aria-hidden="true"
        viewBox="0 0 120 320"
        fill="none"
        className="pointer-events-none absolute left-2 top-24 hidden h-64 w-24 lg:block"
      >
        <path
          d="M60 10 C90 40 30 70 60 100 C90 130 30 160 60 190 C90 220 30 250 60 280 C75 295 75 305 60 310"
          className="stroke-ink"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M45 30 C70 55 25 80 50 105 C70 130 25 155 50 180 C68 200 30 220 48 245"
          className="stroke-coral"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>

      {/* Decorative shape (top-right corner) */}
      <div className="pointer-events-none absolute -top-6 right-6 hidden h-28 w-16 rounded-r-full bg-purple sm:block sm:h-36 sm:w-20 lg:right-10" />

      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
        <h1 className="font-display text-4xl font-medium leading-[1.4] text-ink sm:text-6xl lg:text-7xl">
          The{" "}
          <span className="underline decoration-amber-400 decoration-4 underline-offset-8">
            thinkers
          </span>{" "}
          and doers were{" "}
          <span className="box-decoration-clone rounded-full bg-pink px-4 py-1">
            changing
          </span>{" "}
          the{" "}
          <span className="box-decoration-clone rounded-full bg-sage px-4 py-1">
            status
          </span>{" "}
          Quo with
        </h1>

        <p className="mt-8 max-w-xl font-body text-base text-ink-soft sm:text-lg">
          We are a team of strategists, designers, communicators, researchers.
          Together, we believe that progress only happens when you refuse to
          play things safe.
        </p>
      </div>

      <div className="relative mx-auto mt-16 h-[260px] w-full max-w-4xl sm:h-[340px] lg:h-[400px]">
        {AVATARS.map(({ img, left, top, size }) => (
          <img
            key={img}
            src={`https://i.pravatar.cc/160?img=${img}`}
            alt="Team member"
            loading="lazy"
            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full object-cover shadow-sm"
            style={{ left, top, width: size, height: size }}
          />
        ))}
      </div>
    </section>
  );
}
