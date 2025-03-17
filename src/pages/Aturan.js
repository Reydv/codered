import Footer from "../components/Footer";
import thiswarofmine from "../assets/logo/thiswarofmine.png";

export default function Aturan() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-16">
        <h1 className="text-3xl font-bold mb-12">Tentang Web</h1>

        <div className="max-w-4xl w-full bg-black border border-primary rounded-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/5">
              <img
                src={thiswarofmine}
                alt="Dark figure in shadows"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="md:w-3/5 p-8 flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-4 text-center">
                Apa itu CodeRed?
              </h2>

              <p className="text-center mb-4">
                CodeRed adalah website yang berfokus untuk menyebarkan informasi
                terkait isu atau kebijakan positif maupun negatif yang mempunyai
                pengaruh terhadap kedaulatan Negara Republik Indonesia di
                tingkat nasional.
              </p>

              <p className="text-center mb-4">
                Melalui website ini, forum dapat diselenggarakan untuk membahas
                isu-isu yang sedang berlangsung. Kami akan terus berupaya
                semaksimal mungkin untuk menjaga kualitas dan integritas forum
                yang ada.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
