import Image from "next/image";

import { urlFor } from "@/sanity/client";
import type { SanityImage } from "@/sanity/fetch";

type Props = {
  image?: SanityImage | null;
  alt?: string;
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
  className?: string;
  fill?: boolean;
};

export function SanityImageRender({
  image,
  alt,
  width = 1200,
  height = 900,
  sizes,
  priority,
  className,
  fill,
}: Props) {
  if (!image?.asset) return null;
  const builder = urlFor(image).auto("format");
  const src = fill
    ? builder.width(1600).url()
    : builder.width(width).height(height).fit("crop").url();
  const common = {
    alt: alt ?? image.alt ?? "",
    placeholder: image.lqip ? ("blur" as const) : undefined,
    blurDataURL: image.lqip,
    priority,
    sizes,
    className,
  };
  return fill ? (
    <Image src={src} fill {...common} />
  ) : (
    <Image src={src} width={width} height={height} {...common} />
  );
}
