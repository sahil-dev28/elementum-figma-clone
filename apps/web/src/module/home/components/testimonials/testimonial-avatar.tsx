interface TestimonialAvatarProps {
  src: string;
  className: string;
}

export default function TestimonialAvatar({ src, className }: TestimonialAvatarProps) {
  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full object-cover ${className}`}
    />
  );
}
