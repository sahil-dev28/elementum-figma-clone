import type { ReactNode } from "react";

type FeatureRowProps = {
  heading: ReactNode;
  body: ReactNode;
  imageSrc: string;
  imageAlt: string;
  href: string;
  /** Renders the image on the left and the copy on the right. */
  reverse?: boolean;
  /** Shapes layered around the circular image; positioned by the caller. */
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
    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
      <div className={reverse ? "lg:order-2" : undefined}>
        <h2 className="font-display text-3xl font-medium leading-[1.4] text-ink sm:text-4xl lg:text-5xl">
          {heading}
        </h2>

        <p className="mt-6 max-w-md font-body text-base text-ink-soft">{body}</p>

        <a
          href={href}
          className="group mt-8 inline-flex items-center gap-4 font-body text-sm font-medium text-ink"
        >
          Read more
          <span className="relative h-px w-24 bg-ink transition-all group-hover:w-28">
            <span className="absolute -right-px -top-[3px] h-[7px] w-[7px] rotate-45 border-r border-t border-ink" />
          </span>
        </a>
      </div>

      <div className={reverse ? "lg:order-1" : undefined}>
        <div className="relative mx-auto aspect-square w-full max-w-[320px] sm:max-w-[420px] lg:max-w-[460px]">
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
