const AVATARS = [
  {
    src: "Avatar 01.svg",
    left: "5.9%",
    top: "66.2%",
    size: "clamp(72px, 11.3vw, 163px)",
  },
  {
    src: "Avatar 02.png",
    left: "14.8%",
    top: "56.6%",
    size: "clamp(70px, 11.1vw, 160px)",
  },
  {
    src: "Avatar 03.svg",
    left: "33.6%",
    top: "27.5%",
    size: "clamp(78px, 12.2vw, 175px)",
  },
  {
    src: "Avatar 04.png",
    left: "40.1%",
    top: "75.4%",
    size: "clamp(74px, 11.7vw, 169px)",
  },
  {
    src: "Avatar 05.png",
    left: "55.9%",
    top: "37.0%",
    size: "clamp(74px, 11.7vw, 169px)",
  },
  {
    src: "Avatar 06.svg",
    left: "65.1%",
    top: "56.1%",
    size: "clamp(70px, 11vw, 158px)",
  },
  {
    src: "Avatar 07.png",
    left: "79.2%",
    top: "24.6%",
    size: "clamp(75px, 11.8vw, 170px)",
  },
  {
    src: "Avatar 08.svg",
    left: "92.0%",
    top: "62.4%",
    size: "clamp(75px, 11.8vw, 170px)",
  },
] as const;

export default function HeroAvatars() {
  return (
    <div className="relative -mx-6 mt-16 h-[240px] sm:h-[300px] lg:h-[350px]">
      {AVATARS.map(({ src, left, top, size }) => (
        <img
          key={src}
          src={`/images/hero-avatars/${encodeURIComponent(src)}`}
          alt="Team member"
          loading="lazy"
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full object-cover"
          style={{ left, top, width: size, height: size }}
        />
      ))}
    </div>
  );
}
