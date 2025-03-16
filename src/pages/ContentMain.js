import PostList from "../components/PostList";

export default function ContentMain() {
  // Contoh data untuk pagination (bisa diganti dengan data dinamis)
  const totalPages = 5; // Total halaman
  const currentPage = 1; // Halaman saat ini

  return (
    <div className="pb-[50px]">
      <div className="mt-[80px] text-center m-3">
        <h1 className="text-[55px] text-[Merriweather] font-bold">
          Aula Veritatis
        </h1>
        <h3 className="text-[30px] text-secondary font-light">Hall of Truth</h3>
        <div className="flex flex-col items-center mt-8 space-y-[80px] mt-[100px] w-full m-auto xl:w-1/2 md:w-3/4">
          {/* rel = relevansi; rentang 0 - 5; 0 negatif 5 positif; default 0 */}
          <PostList judul={"Pertamina Oplos Bahan Bakar Pertamax"} award={1} />
          <PostList judul={"Pertamina Oplos Bahan Bakar Pertamax"} award={2} />
          <PostList judul={"Pertamina Oplos Bahan Bakar Pertamax"} award={3} />
        </div>
      </div>
      <div className="text-center m-3 mt-20">
        <div className="flex gap-3 justify-center items-center">
          <h1 className="text-3xl border-b border-white pb-3 px-5">
            Topik Lainnya
          </h1>
          <select className="ml-6 w-md p-2 bg-primary">
            <option value="">Sort by</option>
            <option value="option1">Most Negative</option>
            <option value="option2">Most Positive</option>
            <option value="option3">Most Comment</option>
          </select>
        </div>
        <div className="flex flex-col items-center mt-8 space-y-[40px] w-full m-auto xl:w-1/2 md:w-3/4">
          <PostList judul={"Pertamina Oplos Bahan Bakar Pertamax"} />
          <PostList judul={"Pertamina Oplos Bahan Bakar Pertamax"} rel={1} />
          <PostList judul={"Pertamina Oplos Bahan Bakar Pertamax"} rel={2} />
          <PostList judul={"Pertamina Oplos Bahan Bakar Pertamax"} rel={3} />
          <PostList judul={"Pertamina Oplos Bahan Bakar Pertamax"} rel={4} />
          <PostList judul={"Pertamina Oplos Bahan Bakar Pertamax"} rel={5} />
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-[40px]">
        <div className="flex gap-2">
          <button
            className="flex items-center justify-center w-10 h-10 text-white bg-primary rounded-lg hover:bg-primary-dark transition-colors duration-200 opacity-50 cursor-not-allowed"
            disabled={currentPage === 1}
          >
            &lt;
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              className={`flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-200 ${
                currentPage === index + 1
                  ? "bg-accent text-white font-bold shadow-lg scale-105"
                  : "bg-white text-primary hover:bg-black hover:text-white hover:border-[2px] hover:border-accent"
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            className="flex items-center justify-center w-10 h-10 text-white bg-primary rounded-lg hover:bg-primary-dark transition-colors duration-200"
            disabled={currentPage === totalPages}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
