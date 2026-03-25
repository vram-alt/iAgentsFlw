'use client';

import { useEffect, useState } from 'react';
import { Play, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const YOUTUBE_EMBED =
  'https://www.youtube.com/embed/IW4J-mpLdos?si=XIRIh5uOOv9WNyCF&autoplay=1&playsinline=1';

const VideoModal = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <>
      <Button
        type="button"
        size="lg"
        onClick={() => setOpen(true)}
        className="w-full sm:w-auto bg-[#0080FF] hover:bg-[#0066CC] text-white font-medium px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 text-base sm:text-lg md:text-xl group shadow-xl"
      >
        <Play className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 group-hover:scale-110 transition-transform" />
        See Governance in Action
      </Button>

      {open ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-labelledby="video-modal-title"
        >
          <button
            type="button"
            className="absolute inset-0 cursor-default border-0 bg-black/80 p-0"
            onClick={() => setOpen(false)}
            aria-label="Close video"
          />

          <div
            className="relative z-10 w-[96%] max-w-[768px] overflow-hidden rounded-lg bg-black shadow-2xl sm:rounded-xl"
            onPointerDown={(e) => e.stopPropagation()}
          >
            <h2 id="video-modal-title" className="sr-only">
              Governance in action — video
            </h2>

            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-2 top-2 z-[60] flex h-9 w-9 items-center justify-center rounded-md border-0 bg-black/75 p-0 text-white transition-colors hover:bg-black/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              aria-label="Close"
            >
              <X className="h-4 w-4 shrink-0" />
            </button>

            <div className="relative aspect-video w-full min-w-0 overflow-hidden bg-black leading-none">
              <iframe
                src={YOUTUBE_EMBED}
                className="absolute inset-0 box-border block h-full w-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                title="Governance in action"
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default VideoModal;
