import type { ReactNode } from "react";

type FeatureRowProps = {
  heading: ReactNode;
  body: ReactNode;
  imageSrc: string;
  imageAlt: string;
  href: string;
  reverse?: boolean;
  decor?: ReactNode;
};

export default function FeatureRow({
  heading,
  body,
  imageSrc,
  imageAlt,
  href,
  reverse = false,
  decor,
}: FeatureRowProps) {
  return (
    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-32">
      <div className={reverse ? "lg:order-2" : undefined}>
        <h2 className="font-display text-xl font-medium leading-[1.4] text-ink sm:text-3xl lg:text-[42px]">
          {heading}
        </h2>

        <p className="mt-4 font-body text-lg font-light leading-[1.5] text-ink lg:text-lg">
          {body}
        </p>

        <a
          href={href}
          className="group mt-6 inline-flex items-center gap-2 font-body text-sm font-bold text-black"
        >
          Read more
          <img
            src="/vectors/arrow.svg"
            alt=""
            aria-hidden="true"
            className="h-2 w-28 mt-2 transition-transform duration-300 group-hover:translate-x-2"
          />
        </a>
      </div>

      <div className={reverse ? "lg:order-1" : undefined}>
        <div
          className={`relative mx-auto aspect-square w-full max-w-[320px] sm:max-w-[420px] lg:max-w-[420px] ${
            reverse ? "lg:ml-0 lg:mr-auto" : "lg:ml-auto lg:mr-6"
          }`}
        >
          {decor}
          <img
            src={imageSrc}
            alt={imageAlt}
            className="relative h-full w-full rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
