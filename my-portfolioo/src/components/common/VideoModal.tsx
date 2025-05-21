'use client';

import { useState } from 'react';
import { createPortal } from 'react-dom';
import { ZoomIn, X } from 'lucide-react';
import { Button } from '../ui/button';

type Props = {
  videoUrl: string;
};

export default function VideoModal({ videoUrl }: Props) {
  const [open, setOpen] = useState(false);

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return (
    <>
      <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10">
        <video
          src={videoUrl}
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        />
        <Button
          onClick={openModal}
          className="cursor-pointer absolute top-2 right-2 bg-black/60 text-white p-1 rounded-full hover:bg-black/80 transition"
        >
          <ZoomIn className="h-5 w-5" />
        </Button>
      </div>

      {open &&
        typeof window !== 'undefined' &&
        createPortal(
            <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={closeModal}
            >
            <div
                className="relative w-full max-w-[90vw] max-h-[90vh] px-4"
                onClick={(e) => e.stopPropagation()}
            >
                <Button
                onClick={closeModal}
                className="cursor-pointer absolute top-4 right-4 text-white bg-black/50 p-2 rounded-full hover:bg-black/80 transition"
                >
                <X className="h-6 w-6" />
                </Button>
                <video
                src={videoUrl}
                autoPlay
                loop
                muted
                controls
                className="w-full h-[90vh] object-contain rounded-xl shadow-2xl"
                />
            </div>
            </div>,
            document.body
        )}
    </>
  );
}
