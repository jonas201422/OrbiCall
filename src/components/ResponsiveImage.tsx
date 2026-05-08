import type { imageAssets } from "../data/assets";

type Asset = (typeof imageAssets)[keyof typeof imageAssets];

type ResponsiveImageProps = {
  asset: Asset;
  className?: string;
  loading?: "lazy" | "eager";
};

export function ResponsiveImage({ asset, className, loading = "lazy" }: ResponsiveImageProps) {
  return (
    <img
      alt={asset.alt}
      className={className}
      decoding="async"
      height={asset.height}
      loading={loading}
      sizes={asset.sizes}
      src={asset.src}
      width={asset.width}
    />
  );
}
