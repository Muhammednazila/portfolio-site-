import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { apexGallery } from "@/data/apexGallery";

export function ApexScreen() {
  const [selected, setSelected] = useState<number | null>(null);

  const previous = () => {
    if (selected === null) return;
    setSelected(selected === 0 ? apexGallery.length - 1 : selected - 1);
  };

  const next = () => {
    if (selected === null) return;
    setSelected(selected === apexGallery.length - 1 ? 0 : selected + 1);
  };

  return (
    <>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {apexGallery.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setSelected(index)}
            className="mx-auto w-full max-w-[260px] overflow-hidden rounded-[36px] border-8 border-neutral-900 bg-black shadow-xl transition duration-300 hover:scale-105"
          >
            <img
              src={image.src}
              alt={image.title}
              loading="lazy"
              className="w-full h-auto object-cover"
            />
          </button>
        ))}
      </div>

      {selected !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-6">
          <button
            onClick={() => setSelected(null)}
            className="absolute right-6 top-6"
          >
            <X className="h-8 w-8 text-white" />
          </button>

          <button
            onClick={previous}
            className="absolute left-6"
          >
            <ChevronLeft className="h-10 w-10 text-white" />
          </button>

          <img
            src={apexGallery[selected].src}
            alt={apexGallery[selected].title}
            className="max-h-[90vh] max-w-[420px] rounded-[40px] border-8 border-neutral-900 bg-black shadow-2xl"
          />

          <button
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