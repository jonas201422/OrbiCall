import type { imageAssets } from "../data/assets";

type Asset = (typeof imageAssets)[keyof typeof imageAssets];

type ResponsiveImageProps = {
  asset: Asset;
  className?: string;
};

export function ResponsiveImage({ asset, className }: ResponsiveImageProps) {
  return (
    <img
      alt={asset.alt}
      className={className}
      decoding="async"
      height={asset.height}
      loading="lazy"
      sizes={asset.sizes}
      src={asset.src}
      width={asset.width}
    />
  );
}
