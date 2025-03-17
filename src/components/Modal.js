import { useState } from "react";

export default function Modal({ isOpen, onClose, title, updateItems, items }) {
  const [judul, setJudul] = useState("");
  const [isi, setIsi] = useState("");
  const [relevansi, setRelevansi] = useState("0");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!judul) {
      alert("Judul is required");
      return;
    }

    const newItem = {
      id: crypto.randomUUID(),
      judul,
      isi,
      relevansi,
    };

    const updatedItems = [...items, newItem];
    // setItems(updatedItems);
    updateItems(updatedItems);
    localStorage.setItem("items", JSON.stringify(updatedItems));

    // Trigger storage event so `ContentComunity` updates immediately
    window.dispatchEvent(new Event("storage"));

    // Reset fields
    setJudul("");
    setIsi("");
    setRelevansi("0");

    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      aria-modal="true"
      role="dialog"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-primary rounded-lg shadow-lg w-full max-w-md p-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <form onSubmit={handleSubmit} className="mt-4">
          <label htmlFor="judul">Judul:</label>
          <input
            id="judul"
            type="text"
            value={judul}
            onChange={(e) => setJudul(e.target.value)}
            className="w-full p-2 border rounded bg-primary"
            required
          />
          <br />
          <label htmlFor="isi">Isi:</label>
          <textarea
            id="isi"
            value={isi}
            onChange={(e) => setIsi(e.target.value)}
            className="w-full p-2 border rounded bg-primary"
          />
          <br />
          <label>Relevansi:</label>
          <select
            value={relevansi}
            onChange={(e) => setRelevansi(e.target.value)}
            className="w-full p-2 border rounded bg-primary"
          >
            <option value="0">Codered</option>
            <option value="1">Negatif Menengah</option>
            <option value="2">Negatif Rendah</option>
            <option value="3">Positif Rendah</option>
            <option value="4">Positif Menengah</option>
            <option value="5">Positif Tinggi</option>
          </select>
          <br />
          <button className="w-full bg-accent text-white p-2 mt-3 rounded">
            Post
          </button>
        </form>
      </div>
    </div>
  );
}
