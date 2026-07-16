import { HERO_AVATARS } from "../../utils/constants";

export default function HeroAvatars() {
  return (
    <div className="relative -mx-6 mt-16 h-60 sm:h-75 lg:h-87.5">
      {HERO_AVATARS.map(({ src, left, top, size }) => (
        <img
          key={src}
          src={`/images/hero-avatars/${src}`}
          alt="Team member"
          loading="lazy"
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full object-cover"
          style={{ left, top, width: size, height: size }}
        />
      ))}
    </div>
  );
}
