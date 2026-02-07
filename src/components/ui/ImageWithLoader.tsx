"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";
import { cn } from "@/lib/utils";

interface ImageWithLoaderProps extends ImageProps {
  containerClassName?: string;
}

export function ImageWithLoader({ containerClassName, className, ...props }: ImageWithLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={cn("relative overflow-hidden", props.fill ? "h-full w-full" : "inline-block", containerClassName)}>
      {isLoading && (
        <div className="absolute inset-0 z-10 animate-pulse bg-gray-200" />
      )}
      <Image
        {...props}
        className={cn(
          "transition-all duration-500",
          isLoading ? "opacity-0 scale-105" : "opacity-100 scale-100",
          className
        )}
        onLoad={() => setIsLoading(false)}
        onError={() => setIsLoading(false)}
      />
    </div>
  );
}
