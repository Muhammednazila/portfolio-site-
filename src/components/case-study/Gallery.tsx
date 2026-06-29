import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { mexchangeGallery } from "../../data/mexchangeGallery";

interface GalleryImage {
  src: string;
  title: string;
}

export function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  const previous = () => {
    if (selected === null) return;

    setSelected(
      selected === 0
        ? mexchangeGallery.length - 1
        : selected - 1
    );
  };

  const next = () => {
    if (selected === null) return;

    setSelected(
      selected === mexchangeGallery.length - 1
        ? 0
        : selected + 1
    );
  };

  return (
    <>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {mexchangeGallery.map((image: GalleryImage, index: number) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setSelected(index)}
            className="mx-auto w-full max-w-[260px] overflow-hidden rounded-[36px] border-8 border-neutral-900 bg-black shadow-xl transition-transform duration-300 hover:scale-105"
          >
            <img
              src={image.src}
              alt={image.title}
              className="h-auto w-full object-cover"
              loading="lazy"
            />
          </button>
        ))}
      </div>

      {selected !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-6">
          <button
            type="button"
            onClick={() => setSelected(null)}
            className="absolute right-6 top-6"
          >
            <X className="h-8 w-8 text-white" />
          </button>

          <button
            type="button"
            onClick={previous}
            className="absolute left-6"
          >
            <ChevronLeft className="h-10 w-10 text-white" />
          </button>

          <img
            src={mexchangeGallery[selected].src}
            alt={mexchangeGallery[selected].title}
            className="max-h-[90vh] max-w-[420px] rounded-[40px] border-8 border-neutral-900 bg-black shadow-2xl"
          />

          <button
            type="button"
            onClick={next}
            className="absolute right-6"
          >
            <ChevronRight className="h-10 w-10 text-white" />
          </button>
        </div>
      )}
    </>
  );
}