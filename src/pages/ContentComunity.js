import ComPostList from "../components/ComPostList";
import { useState, useEffect } from "react";
import Modal from "../components/Modal";

export default function ContentComunity() {
  // Modal func
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Fetch data from local storage
  const [items, setItems] = useState(() => {
    // Load from Local Storage when the app starts
    const storedItems = localStorage.getItem("items");
    return storedItems ? JSON.parse(storedItems) : []; // Parse stored JSON or use an empty array
  });

  useEffect(() => {
    const storedItems = localStorage.getItem("items");
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);

  return (
    <div className="max-h-screen">
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={"Buat Topik"}
        updateItems={setItems}
        items={items}
      />
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
            <button
              className="rounded-3xl bg-accent w-fit px-4 py-2 text-xl"
              onClick={openModal}
            >
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
            {items.length === 0 && (
              <div className="flex flex-col gap-3 py-4 pr-3 overflow-scroll max-h-full">
                <ComPostList />
              </div>
            )}
            {items.length > 0 && (
              <div className="flex flex-col gap-3 py-4 pr-3 overflow-scroll max-h-full">
                {items.map((item) => (
                  <ComPostList judul={item.judul} rel={item.relevansi} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
