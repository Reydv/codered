import Footer from "../components/Footer";

export default function Aturan() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Main content - skipping navbar as requested */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-16">
        {/* Title visible on mobile but hidden on larger screens since it's in navbar */}
        <h1 className="text-3xl font-bold mb-12">ATURAN</h1>

        {/* Main card */}
        <div className="max-w-4xl w-full bg-black border border-primary rounded-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Left side - image */}
            <div className="md:w-2/5">
              <img
                src="/placeholder.svg?height=400&width=300"
                alt="Dark figure in shadows"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right side - content */}
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
