"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const FRAME_COUNT = 75; // 0 to 74

function getFramePath(index: number) {
  const paddedIndex = index.toString().padStart(2, "0");
  return `/sequence/frame_${paddedIndex}_delay-0.066s.webp`;
}

export default function ScrollyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollYProgress } = useScroll();
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  
  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = getFramePath(i);
      loadedImages.push(img);

      // We won't block render for all 75 images, but having them in array is nice.
    }
    
    setImages(loadedImages);
  }, []);

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useMotionValueEvent(frameIndex, "change", (latest) => {
    if (!canvasRef.current || images.length === 0) return;
    
    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    const currentIndex = Math.floor(latest);
    const img = images[currentIndex];
    
    if (img && img.complete && img.naturalHeight !== 0) {
      renderToCanvas(ctx, img, canvasRef.current);
    }
  });

  // Also render current frame when images load initially or component remounts
  useEffect(() => {
    if (images.length > 0 && canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      if (!ctx) return;

      const currentIndex = Math.max(0, Math.min(Math.floor(frameIndex.get()), images.length - 1));
      const targetImg = images[currentIndex];
      
      if (targetImg) {
        if (targetImg.complete && targetImg.naturalHeight !== 0) {
          renderToCanvas(ctx, targetImg, canvasRef.current);
        } else {
          targetImg.onload = () => {
            if (canvasRef.current) renderToCanvas(ctx, targetImg, canvasRef.current);
          };
        }
      }
    }
  }, [images]);

  // Window resize handler
  useEffect(() => {
    const handleResize = () => {
      // Re-render current frame on resize
      if (!canvasRef.current || images.length === 0) return;
      
      const ctx = canvasRef.current.getContext("2d");
      const currentIndex = Math.floor(frameIndex.get());
      const img = images[currentIndex];
      
      if (ctx && img && img.complete) {
        renderToCanvas(ctx, img, canvasRef.current);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [images, frameIndex]);

  const renderToCanvas = (ctx: CanvasRenderingContext2D, img: HTMLImageElement, canvas: HTMLCanvasElement) => {
    // Make canvas internal resolution match display size for crispness
    const { innerWidth, innerHeight } = window;
    if (canvas.width !== innerWidth || canvas.height !== innerHeight) {
      canvas.width = innerWidth;
      canvas.height = innerHeight;
    }

    // Object-fit: cover logic
    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.width / img.height;

    let renderWidth = canvas.width;
    let renderHeight = canvas.height;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      renderHeight = canvas.width / imgRatio;
      offsetY = (canvas.height - renderHeight) / 2;
    } else {
      renderWidth = canvas.height * imgRatio;
      offsetX = (canvas.width - renderWidth) / 2;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Draw the image matching the '#121212' background aesthetic
    ctx.drawImage(img, offsetX, offsetY, renderWidth, renderHeight);
  };

  return (
    <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#121212] flex items-center justify-center text-white/20">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Fallback text if user needs to re-upload sequence */}
      <span className="z-[-1]">Missing Image Sequence (Please add to /public/sequence)</span>
    </div>
  );
}
