import ComPostList from "../components/ComPostList";

export default function ContentComunity() {
  return (
    <div className="max-h-screen">
      <h1 className="text-3xl text-center my-3">Aula Veritatis</h1>
      <div className="flex justify-between px-5 max-w-screen flex-wrap">
        <div className="px-4 m-3 my-6">
          <h3 className="text-2xl">Username Saat ini</h3>
          <input
            type="text"
            className="bg-primary border border-white mt-2 p-2 px-4 w-full"
            value={"SenjaAterna12342"}
          />
          <div className="mt-10 flex flex-col gap-4">
            <h1 className="text-5xl text-accent font-bold">
              Fortis Fortuna Adiuvat
            </h1>
            <p className="text-xl">Keberuntungan berpihak pada yang berani</p>
            <button className="rounded-3xl bg-accent w-fit px-4 py-2 text-xl">
              Buat Topik
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-6 border border-white p-5 px-10 lg:w-3/5">
          <div className="flex gap-3">
            <input
              type="text"
              className="bg-primary mt-2 rounded-lg w-3/4"
              placeholder="Cari"
            />
            <select className="w-1/4 p-2 rounded bg-primary">
              <option value="">Sort by</option>
              <option value="option1">Most Negative</option>
              <option value="option2">Most Positive</option>
              <option value="option3">Most Comment</option>
            </select>
          </div>
          <div className="flex flex-col gap-3 py-4 pr-3 overflow-scroll max-h-full">
            <ComPostList />
            <ComPostList rel={1} judul="Efisiensi Dana Pendidikan" />
            <ComPostList rel={2} />
            <ComPostList rel={3} />
            <ComPostList rel={4} />
            <ComPostList rel={1} />
            <ComPostList rel={2} />
            <ComPostList rel={3} />
            <ComPostList rel={4} />
          </div>
        </div>
      </div>
    </div>
  );
}
