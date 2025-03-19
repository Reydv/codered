import Footer from "../components/Footer";
import banzaiii from "../assets/logo/banzaiii.png";
import tenno from "../assets/logo/tennoheika.png";

function Main() {
  const sections = [
    {
      title: "Apa itu codered?",
      text: "CodeRed adalah website yang berfokus untuk menyebarkan informasi terkait isu atau kebijakan positif maupun negatif yang mempunyai pengaruh terhadap kedaulatan Negara Republik Indonesia di tingkat nasional. <br/> <br/> Melalui website ini, forum dapat diselenggarakan untuk membahas isu-isu yang sedang berlangsung. Kami akan terus berupaya semaksimal mungkin untuk menjaga kualitas dan integritas forum yang ada.",
      imageUrl: tenno,
    },
    {
      title: "Tujuan codeRed?",
      text: "Tujuan kami hanya dua, yaitu menyuarakan kebebasan dalam berpendapat dan memberitahu setiap dobrakan pintu yang terjadi di NKRI.<br/><br/>Entah itu iblis ataupun malaikat, setiap mulut adalah anugrah yang harus dijaga. Tidak ada yang bisa kami lakukan kecuali membuat bisikan terdengar dan suara terompet terendam",
      imageUrl: banzaiii,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center relative overflow-hidden">
      <div
        className="absolute inset-0 w-[200%] h-[200%] sm:top-[-65%] top-[-78%]"
        style={{
          background:
            "linear-gradient(15deg, transparent 40%, rgba(119, 105, 83, 0.2) 50%, transparent 55%)",
        }}
      ></div>

      {/* Main Content */}
      <main className="min-h-screen flex-1 flex flex-col items-center justify-center text-center z-[1] px-4">
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
            href="/comunity"
          >
            Konten Komunitas
          </a>
        </div>
      </main>

      <section className="w-full px-6 sm:px-12 py-12 bg-black text-white z-[1]">
        <div class="bg-gradient-to-r from-transparent via-[#3A3A3A] to-transparent h-[3px] mb-[120px]"></div>
        <div className="max-w-6xl mx-auto space-y-20">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              } gap-10`}
            >
              <div className="md:w-1/2 w-full">
                <img
                  src={section.imageUrl}
                  alt={section.title}
                  className="w-full h-auto rounded-xl shadow-lg object-cover"
                />
              </div>
              <div className="md:w-1/2 w-full text-left">
                <h2 className="text-[28px] sm:text-[34px] font-serif uppercase text-accent mb-4">
                  {section.title}
                </h2>
                <p
                  className="text-[16px] sm:text-[18px] leading-relaxed text-[#CCCCCC]"
                  dangerouslySetInnerHTML={{ __html: section.text }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Main;
