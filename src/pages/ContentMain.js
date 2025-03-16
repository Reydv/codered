import PostList from "../components/PostList";

export default function ContentMain() {
  return (
    <div>
      <div className="text-center m-3">
        <h1 className="text-3xl">Aula Veritatis</h1>
        <h3 className="text-m text-secondary">Hall of Truth</h3>
        <div className="flex flex-col items-center mt-8 space-y-5 w-full m-auto xl:w-1/2 md:w-3/4">
          {/* rel = relevansi; rentang 0 - 5; 0 negatif 5 positif; default 0 */}
          <PostList judul={"Pertamina Oplos Bahan Bakar Pertamax"} />
          <PostList judul={"Pertamina Oplos Bahan Bakar Pertamax"} />
          <PostList judul={"Pertamina Oplos Bahan Bakar Pertamax"} />
        </div>
      </div>
      <div className="text-center m-3 mt-20">
        <div className="flex gap-3 justify-center items-center">
          <h1 className="text-3xl border-b border-white pb-3 px-5">
            Topik Lainya
          </h1>
          <select className="ml-6 w-md p-2 bg-primary">
            <option value="">Sort by</option>
            <option value="option1">Most Negative</option>
            <option value="option2">Most Positive</option>
            <option value="option3">Most Comment</option>
          </select>
        </div>
        <div className="flex flex-col items-center mt-8 space-y-5 w-full m-auto xl:w-1/2 md:w-3/4">
          <PostList judul={"Pertamina Oplos Bahan Bakar Pertamax"} />
          <PostList judul={"Pertamina Oplos Bahan Bakar Pertamax"} rel={1} />
          <PostList judul={"Pertamina Oplos Bahan Bakar Pertamax"} rel={2} />
          <PostList judul={"Pertamina Oplos Bahan Bakar Pertamax"} rel={3} />
          <PostList judul={"Pertamina Oplos Bahan Bakar Pertamax"} rel={4} />
          <PostList judul={"Pertamina Oplos Bahan Bakar Pertamax"} rel={5} />
        </div>
      </div>
    </div>
  );
}
