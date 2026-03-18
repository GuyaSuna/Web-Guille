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
    height: "h-64",
  },
  {
    id: 2,
    image: "https://placehold.co/400x300/6b7280/ffffff?text=Card+2",
    title: "Proyecto 2",
    colSpan: 3,
    height: "h-64",
  },
  {
    id: 3,
    image: "https://placehold.co/400x300/84cc16/000000?text=Card+3",
    title: "Proyecto 3",
    colSpan: 3,
    height: "h-64",
  },
  {
    id: 4,
    image: "https://placehold.co/400x300/dbeafe/1f2937?text=Card+4",
    title: "Proyecto 4",
    colSpan: 3,
    height: "h-64",
  },

  // Segunda fila: 1 card grande 2x2 + 2 cards normales
  {
    id: 5,
    image: "https://placehold.co/600x600/dc2626/ffffff?text=Big+Card",
    title: "Proyecto Principal",
    description: "Card grande 2x2",
    colSpan: 6,
    rowSpan: 2,
    height: "h-[33rem]",
  },
  {
    id: 6,
    image: "https://placehold.co/400x300/f97316/ffffff?text=Card+6",
    title: "Proyecto 6",
    colSpan: 3,
    height: "h-64",
  },
  {
    id: 7,
    image: "https://placehold.co/400x300/ef4444/ffffff?text=Card+7",
    title: "Proyecto 7",
    colSpan: 3,
    height: "h-64",
  },

  // Tercera fila: 2 cards normales (completan el lado derecho del card grande)
  {
    id: 8,
    image: "https://placehold.co/400x300/8b5cf6/ffffff?text=Card+8",
    title: "Proyecto 8",
    colSpan: 3,
    height: "h-64",
  },
  {
    id: 9,
    image: "https://placehold.co/400x300/10b981/ffffff?text=Card+9",
    title: "Proyecto 9",
    colSpan: 3,
    height: "h-64",
  },

  // Cuarta fila: 4 cards normales (nuevo ciclo)
  {
    id: 10,
    image: "https://placehold.co/400x300/f59e0b/000000?text=Card+10",
    title: "Proyecto 10",
    colSpan: 3,
    height: "h-64",
  },
  {
    id: 11,
    image: "https://placehold.co/400x300/ec4899/ffffff?text=Card+11",
    title: "Proyecto 11",
    colSpan: 3,
    height: "h-64",
  },
  {
    id: 12,
    image: "https://placehold.co/400x300/06b6d4/ffffff?text=Card+12",
    title: "Proyecto 12",
    colSpan: 3,
    height: "h-64",
  },
  {
    id: 13,
    image: "https://placehold.co/400x300/64748b/ffffff?text=Card+13",
    title: "Proyecto 13",
    colSpan: 3,
    height: "h-64",
  },

  // Quinta fila: 2 cards normales + card grande 2x2 al lado derecho
  {
    id: 14,
    image: "https://placehold.co/400x300/059669/ffffff?text=Card+14",
    title: "Proyecto 14",
    colSpan: 3,
    height: "h-64",
  },
  {
    id: 15,
    image: "https://placehold.co/400x300/dc2626/ffffff?text=Card+15",
    title: "Proyecto 15",
    colSpan: 3,
    height: "h-64",
  },
  {
    id: 16,
    image: "https://placehold.co/600x600/7c3aed/ffffff?text=Big+Card+2",
    title: "Proyecto Principal 2",
    description: "Segundo card grande (derecha)",
    colSpan: 6,
    rowSpan: 2,
    height: "h-[33rem]",
  },

  // Sexta fila: 2 cards normales más (completan el lado izquierdo del segundo card grande)
  {
    id: 17,
    image: "https://placehold.co/400x300/0891b2/ffffff?text=Card+17",
    title: "Proyecto 17",
    colSpan: 3,
    height: "h-64",
  },
  {
    id: 18,
    image: "https://placehold.co/400x300/be123c/ffffff?text=Card+18",
    title: "Proyecto 18",
    colSpan: 3,
    height: "h-64",
  },

  // Séptima fila: 4 cards normales (tercer ciclo)
  {
    id: 19,
    image: "https://placehold.co/400x300/1e40af/ffffff?text=Card+19",
    title: "Proyecto 19",
    colSpan: 3,
    height: "h-64",
  },
  {
    id: 20,
    image: "https://placehold.co/400x300/15803d/ffffff?text=Card+20",
    title: "Proyecto 20",
    colSpan: 3,
    height: "h-64",
  },
  {
    id: 21,
    image: "https://placehold.co/400x300/a21caf/ffffff?text=Card+21",
    title: "Proyecto 21",
    colSpan: 3,
    height: "h-64",
  },
  {
    id: 22,
    image: "https://placehold.co/400x300/ea580c/ffffff?text=Card+22",
    title: "Proyecto 22",
    colSpan: 3,
    height: "h-64",
  },

  // Octava fila: Tercer card grande (lado izquierdo) + 2 cards normales
  {
    id: 23,
    image: "https://placehold.co/600x600/0f172a/ffffff?text=Big+Card+3",
    title: "Proyecto Principal 3",
    description: "Tercer card grande (izquierda)",
    colSpan: 6,
    rowSpan: 2,
    height: "h-[33rem]",
  },
  {
    id: 24,
    image: "https://placehold.co/400x300/7c2d12/ffffff?text=Card+24",
    title: "Proyecto 24",
    colSpan: 3,
    height: "h-64",
  },
  {
    id: 25,
    image: "https://placehold.co/400x300/581c87/ffffff?text=Card+25",
    title: "Proyecto 25",
    colSpan: 3,
    height: "h-64",
  },

  // Novena fila: 2 cards normales (completan el lado derecho del tercer card grande)
  {
    id: 26,
    image: "https://placehold.co/400x300/166534/ffffff?text=Card+26",
    title: "Proyecto 26",
    colSpan: 3,
    height: "h-64",
  },
  {
    id: 27,
    image: "https://placehold.co/400x300/991b1b/ffffff?text=Card+27",
    title: "Proyecto 27",
    colSpan: 3,
    height: "h-64",
  },

  // Décima fila: 4 cards normales (cuarto ciclo)
  {
    id: 28,
    image: "https://placehold.co/400x300/0369a1/ffffff?text=Card+28",
    title: "Proyecto 28",
    colSpan: 3,
    height: "h-64",
  },
  {
    id: 29,
    image: "https://placehold.co/400x300/7e22ce/ffffff?text=Card+29",
    title: "Proyecto 29",
    colSpan: 3,
    height: "h-64",
  },
  {
    id: 30,
    image: "https://placehold.co/400x300/059669/ffffff?text=Card+30",
    title: "Proyecto 30",
    colSpan: 3,
    height: "h-64",
  },
  {
    id: 31,
    image: "https://placehold.co/400x300/c2410c/ffffff?text=Card+31",
    title: "Proyecto 31",
    colSpan: 3,
    height: "h-64",
  },

  // Undécima fila: 2 cards normales + cuarto card grande (lado derecho)
  {
    id: 32,
    image: "https://placehold.co/400x300/1f2937/ffffff?text=Card+32",
    title: "Proyecto 32",
    colSpan: 3,
    height: "h-64",
  },
  {
    id: 33,
    image: "https://placehold.co/400x300/4c1d95/ffffff?text=Card+33",
    title: "Proyecto 33",
    colSpan: 3,
    height: "h-64",
  },
  {
    id: 34,
    image: "https://placehold.co/600x600/b91c1c/ffffff?text=Big+Card+4",
    title: "Proyecto Principal 4",
    description: "Cuarto card grande (derecha)",
    colSpan: 6,
    rowSpan: 2,
    height: "h-[33rem]",
  },

  // Duodécima fila: 2 cards normales más (completan el lado izquierdo del cuarto card grande)
  {
    id: 35,
    image: "https://placehold.co/400x300/065f46/ffffff?text=Card+35",
    title: "Proyecto 35",
    colSpan: 3,
    height: "h-64",
  },
  {
    id: 36,
    image: "https://placehold.co/400x300/9333ea/ffffff?text=Card+36",
    title: "Proyecto 36",
    colSpan: 3,
    height: "h-64",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <header className="relative px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
        <div className="flex flex-col sm:flex-row items-center justify-between max-w-7xl mx-auto gap-4 sm:gap-0">
          <nav className="flex-1 order-2 sm:order-1">
            <a href="#" className="text-sm sm:text-base md:text-lg uppercase tracking-wide hover:opacity-70 transition-opacity font-medium">
              TRABAJOS
            </a>
          </nav>

          <div className="flex-1 flex justify-center order-1 sm:order-2">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">LAND®</div>
          </div>

          <nav className="flex-1 flex justify-center sm:justify-end order-3">
            <a href="#" className="text-sm sm:text-base md:text-lg uppercase tracking-wide hover:opacity-70 transition-opacity font-medium">
              ESTUDIO
            </a>
          </nav>
        </div>
      </header>

      <main className="px-4 sm:px-6 md:px-8 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 max-w-7xl mx-auto">
          {gridItems.map((item) => {
            const getColSpanClass = (colSpan: number) => {
              switch (colSpan) {
                case 3:
                  return "col-span-1 sm:col-span-1 lg:col-span-3";
                case 6:
                  return "col-span-1 sm:col-span-2 lg:col-span-6";
                default:
                  return "col-span-1 sm:col-span-1 lg:col-span-3";
              }
            };

            const getRowSpanClass = (rowSpan?: number) => {
              return rowSpan === 2 ? "lg:row-span-2" : "";
            };

            const getHeightClass = (height: string, rowSpan?: number) => {
              if (rowSpan === 2) {
                // Cards grandes
                return "h-64 sm:h-80 lg:h-[33rem]";
              } else {
                // Cards normales
                return "h-64 sm:h-72 lg:h-64";
              }
            };

            return (
              <div
                key={item.id}
                className={`${getColSpanClass(item.colSpan)} ${getRowSpanClass(item.rowSpan)} ${getHeightClass(item.height, item.rowSpan)} rounded-2xl overflow-hidden relative group cursor-pointer transition-transform hover:scale-[1.02]`}
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
                      <p className="text-sm text-white/80">
                        {item.description}
                      </p>
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
