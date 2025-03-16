export default function ComPostList({
  judul = "Pertamina Oplos Bahan Bakar Pertamax",
  rel = 0,
}) {
  const relevansi = [
    "Codered",
    "Negatif Menengah",
    "Negatif Tinggi",
    "Positif Rendah",
    "Positif Menengah",
    "Positif Tinggi",
  ];
  return (
    <a
      className="flex  text-white overflow-hidden"
      href={`/post?judul=${judul}`}
    >
      {/* Red vertical bar */}
      <div className={`w-6 bg-rel-${rel}`}></div>

      {/* Content container */}
      <div className="p-4 w-full rounded-r-full bg-primary">
        {/* Heading */}
        <h2 className="text-2xl">{judul}</h2>

        {/* Status indicators */}
        <div className="flex items-center mt-2">
          {/* Circular indicators with numbers */}
          <div className="flex items-center">
            <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-2">
              <span className="text-xs">23</span>
            </div>

            <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mx-2">
              <span className="text-xs">23</span>
            </div>

            <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mx-2">
              <span className="text-xs">23</span>
            </div>
          </div>

          {/* Vertical separator */}
          <div className="mx-4 text-white">|</div>

          {/* Relevance indicator */}
          <div className="flex items-center">
            <span className="text-white">Relevansi : </span>
            <span className={`text-rel-${rel} ml-2`}>{relevansi[rel]}</span>
          </div>
        </div>
      </div>
    </a>
  );
}
