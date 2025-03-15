function Main() {
  return (
    <div className="min-h-full flex-1 flex flex-col items-center">
      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-accent text-4xl md:text-5xl font-bold mb-2 uppercase tracking-wider">
          Sic Semper Tyrannis
        </h1>
        <h4 className="text-white text-lg mb-8">Memento mori</h4>
        <div className="space-y-4 flex flex-col">
          <a
            className="bg-accent text-white px-8 py-2 w-48 text-sm uppercase tracking-wider transition-colors"
            href="/posts"
          >
            Konten Utama
          </a>
          <a className="border-secondary border text-white px-8 py-2 w-48 text-sm uppercase tracking-wider transition-colors">
            Komunitas
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-4 text-center text-xs text-secondary">
        © Copyright 2025
      </footer>
    </div>
  );
}

export default Main;
