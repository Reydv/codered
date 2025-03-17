import ComPostList from "../components/ComPostList";
import { useState, useEffect } from "react";
import Modal from "../components/Modal";

export default function ContentComunity() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [items, setItems] = useState(() => {
    const storedItems = localStorage.getItem("items");
    return storedItems ? JSON.parse(storedItems) : [];
  });

  useEffect(() => {
    const storedItems = localStorage.getItem("items");
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="max-h-screen mt-[110px] p-4">
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={"Buat Topik"}
        updateItems={setItems}
        items={items}
      />
      <h1 className="text-3xl text-center my-6">Aula Veritatis</h1>
      <div className="flex flex-col lg:flex-row justify-between gap-6 px-4">
        <div className="px-4 py-6 lg:w-2/5">
          <h3 className="text-2xl mb-4">Username Saat ini</h3>
          <input
            type="text"
            className="bg-primary border border-white mt-2 p-2 px-4 w-full rounded-lg"
            value={"SenjaAterna12342"}
            readOnly
          />
          <div className="mt-10 flex flex-col gap-6">
            <h1 className="text-5xl text-accent font-bold">
              Fortis Fortuna Adiuvat
            </h1>
            <p className="text-xl">Keberuntungan berpihak pada yang berani</p>
            <button
              className="rounded-3xl bg-accent w-fit px-6 py-2 text-xl hover:bg-accent-dark transition-colors"
              onClick={openModal}
            >
              Buat Topik
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-6 border border-white p-6 lg:w-3/5 rounded-lg">
          <div className="flex gap-4">
            <input
              type="text"
              className="bg-primary mt-2 rounded-lg w-3/4 p-2"
              placeholder="Cari"
            />
            <select className="w-1/4 p-2 rounded bg-primary">
              <option value="">Sort by</option>
              <option value="option1">Most Negative</option>
              <option value="option2">Most Positive</option>
              <option value="option3">Most Comment</option>
            </select>
          </div>
          <div className="flex flex-col gap-4 py-4 pr-3 overflow-y-auto max-h-[60vh]">
            {items.length === 0 ? (
              <ComPostList />
            ) : (
              items.map((item, index) => (
                <ComPostList
                  key={index}
                  judul={item.judul}
                  rel={item.relevansi}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
