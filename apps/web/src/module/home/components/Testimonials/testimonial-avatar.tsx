interface TestimonialAvatarProps {
  src: string;
  /** Position + size utilities placing the avatar in the section frame. */
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
