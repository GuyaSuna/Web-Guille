import Image from "next/image";

interface GridItem {
  id: number;
  image: string;
  title?: string;
  description?: string;
  colSpan: number;
  rowSpan?: number;
  height: string;
  bgColor?: string;
}

const gridItems: GridItem[] = [
  // Primera fila: 4 cards normales
  {
    id: 1,
    image: "https://placehold.co/400x300/000000/ffffff?text=Card+1",
    title: "Proyecto 1",
    colSpan: 3,
    height: "h-48",
  },
  {
    id: 2,
    image: "https://placehold.co/400x300/6b7280/ffffff?text=Card+2",
    title: "Proyecto 2",
    colSpan: 3,
    height: "h-48",
  },
  {
    id: 3,
    image: "https://placehold.co/400x300/84cc16/000000?text=Card+3",
    title: "Proyecto 3",
    colSpan: 3,
    height: "h-48",
  },
  {
    id: 4,
    image: "https://placehold.co/400x300/dbeafe/1f2937?text=Card+4",
    title: "Proyecto 4",
    colSpan: 3,
    height: "h-48",
  },

  // Segunda fila: 1 card grande 2x2 + 2 cards normales
  {
    id: 5,
    image: "https://placehold.co/600x600/dc2626/ffffff?text=Big+Card",
    title: "Proyecto Principal",
    description: "Card grande 2x2",
    colSpan: 6,
    rowSpan: 2,
    height: "h-96",
  },
  {
    id: 6,
    image: "https://placehold.co/400x300/f97316/ffffff?text=Card+6",
    title: "Proyecto 6",
    colSpan: 3,
    height: "h-48",
  },
  {
    id: 7,
    image: "https://placehold.co/400x300/ef4444/ffffff?text=Card+7",
    title: "Proyecto 7",
    colSpan: 3,
    height: "h-48",
  },

  // Tercera fila: 2 cards normales (completan el lado derecho del card grande)
  {
    id: 8,
    image: "https://placehold.co/400x300/8b5cf6/ffffff?text=Card+8",
    title: "Proyecto 8",
    colSpan: 3,
    height: "h-48",
  },
  {
    id: 9,
    image: "https://placehold.co/400x300/10b981/ffffff?text=Card+9",
    title: "Proyecto 9",
    colSpan: 3,
    height: "h-48",
  },

  // Cuarta fila: 4 cards normales (nuevo ciclo)
  {
    id: 10,
    image: "https://placehold.co/400x300/f59e0b/000000?text=Card+10",
    title: "Proyecto 10",
    colSpan: 3,
    height: "h-48",
  },
  {
    id: 11,
    image: "https://placehold.co/400x300/ec4899/ffffff?text=Card+11",
    title: "Proyecto 11",
    colSpan: 3,
    height: "h-48",
  },
  {
    id: 12,
    image: "https://placehold.co/400x300/06b6d4/ffffff?text=Card+12",
    title: "Proyecto 12",
    colSpan: 3,
    height: "h-48",
  },
  {
    id: 13,
    image: "https://placehold.co/400x300/64748b/ffffff?text=Card+13",
    title: "Proyecto 13",
    colSpan: 3,
    height: "h-48",
  },

  // Quinta fila: Otro card grande 2x2 + 2 cards normales
  {
    id: 14,
    image: "https://placehold.co/600x600/7c3aed/ffffff?text=Big+Card+2",
    title: "Proyecto Principal 2",
    description: "Segundo card grande",
    colSpan: 6,
    rowSpan: 2,
    height: "h-96",
  },
  {
    id: 15,
    image: "https://placehold.co/400x300/059669/ffffff?text=Card+15",
    title: "Proyecto 15",
    colSpan: 3,
    height: "h-48",
  },
  {
    id: 16,
    image: "https://placehold.co/400x300/dc2626/ffffff?text=Card+16",
    title: "Proyecto 16",
    colSpan: 3,
    height: "h-48",
  },

  // Sexta fila: 2 cards normales (completan el lado derecho del segundo card grande)
  {
    id: 17,
    image: "https://placehold.co/400x300/0891b2/ffffff?text=Card+17",
    title: "Proyecto 17",
    colSpan: 3,
    height: "h-48",
  },
  {
    id: 18,
    image: "https://placehold.co/400x300/be123c/ffffff?text=Card+18",
    title: "Proyecto 18",
    colSpan: 3,
    height: "h-48",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <header className="flex items-center justify-between px-8 py-6">
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-bold">LAND®</div>
        </div>
        <nav className="flex items-center space-x-8">
          <a href="#" className="text-sm uppercase tracking-wide hover:opacity-70 transition-opacity">
            TRABAJOS
          </a>
          <a href="#" className="text-sm uppercase tracking-wide hover:opacity-70 transition-opacity">
            ESTUDIO
          </a>
        </nav>
      </header>

      <main className="px-8 pb-8">
        <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto">
          {gridItems.map((item) => {
            const getColSpanClass = (colSpan: number) => {
              switch(colSpan) {
                case 3: return "col-span-3";
                case 6: return "col-span-6";
                default: return "col-span-3";
              }
            };

            const getRowSpanClass = (rowSpan?: number) => {
              return rowSpan === 2 ? "row-span-2" : "";
            };

            return (
              <div
                key={item.id}
                className={`${getColSpanClass(item.colSpan)} ${getRowSpanClass(item.rowSpan)} ${item.height} rounded-2xl overflow-hidden relative group cursor-pointer transition-transform hover:scale-[1.02]`}
              >
              <Image
                src={item.image}
                alt={item.title || `Image ${item.id}`}
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {(item.title || item.description) && (
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  {item.title && (
                    <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                  )}
                  {item.description && (
                    <p className="text-sm text-white/80">{item.description}</p>
                  )}
                </div>
              )}
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
