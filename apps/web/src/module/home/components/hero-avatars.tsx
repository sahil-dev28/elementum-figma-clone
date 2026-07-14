const AVATARS = [
  { img: 11, left: "6%", top: "80%", size: "clamp(70px, 9vw, 110px)" },
  { img: 12, left: "17%", top: "70%", size: "clamp(80px, 10vw, 125px)" },
  { img: 13, left: "33%", top: "55%", size: "clamp(95px, 12vw, 150px)" },
  { img: 18, left: "44%", top: "78%", size: "clamp(80px, 10vw, 125px)" },
  { img: 14, left: "55%", top: "60%", size: "clamp(95px, 12vw, 150px)" },
  { img: 15, left: "65%", top: "72%", size: "clamp(85px, 11vw, 135px)" },
  { img: 16, left: "80%", top: "50%", size: "clamp(105px, 13vw, 165px)" },
  { img: 17, left: "93%", top: "77%", size: "clamp(85px, 11vw, 130px)" },
] as const;

export default function HeroAvatars() {
  return (
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
  );
}
