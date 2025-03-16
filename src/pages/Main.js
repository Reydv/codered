import Footer from "../components/Footer";

function Main() {
  return (
    <div className="min-h-screen flex flex-col items-center relative overflow-hidden">
      <div
        className="absolute inset-0 w-[200%] h-[200%] top-[-26%]"
        style={{
          background:
            "linear-gradient(15deg, transparent 40%, rgba(119, 105, 83, 0.15) 50%, transparent 55%)",
        }}
      ></div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center text-center z-[1] px-4">
        <h1 className="font-serif leading-[1.1] text-accent text-[40px] sm:text-[50px] md:text-[64px] font-bold mb-[20px] uppercase tracking-[-0.03em]">
          <span>Sic Semper</span> <br />
          <span>Tyrannis</span>
        </h1>

        <h4 className="text-white text-[24px] sm:text-[30px] mb-[40px] sm:mb-[45px] font-[Merryweather] tracking-[0.15em]">
          Memento mori
        </h4>

        <div className="space-y-[15px] flex flex-col w-full max-w-[400px]">
          <a
            className="bg-accent text-white w-full sm:w-[400px] h-[48px] text-[16px] sm:text-[18px] font-serif font-bold tracking-[0.16em] uppercase hover:bg-[#FFFFFF] hover:text-[#080808] hover:border-[#FFFFFF] transition-all duration-300 flex justify-center items-center"
            href="/posts"
          >
            Konten Utama
          </a>
          <a
            className="border-[#3A3A3A] border text-secondary w-full sm:w-[400px] h-[48px] text-[16px] sm:text-[18px] font-serif font-bold tracking-[0.16em] uppercase hover:bg-[#3A3A3A] hover:text-[#FFFFFF] hover:border-[#D0D0D0] transition-all duration-300 flex justify-center items-center"
            href="/posts"
          >
            Konten Komunitas
          </a>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Main;
