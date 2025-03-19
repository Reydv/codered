import Footer from "../components/Footer";
import thiswarofmine from "../assets/logo/thiswarofmine.png";

export default function Aturan() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-16">
        <h1 className="text-3xl font-bold mb-12">Donasi</h1>

        <div className="sm:max-w-5xl max-w-4xl w-full bg-black border border-primary rounded-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row ">
            <div className="md:w-2/5">
              <img
                src={thiswarofmine}
                alt="Dark figure in shadows"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="md:w-3/5 p-8 flex flex-col justify-center items-center">
              <p className="text-center mb-4">
                CodeRed adalah wadah bagi mereka yang berani berpendapat dan
                berekspresi. Kami berkomitmen untuk menyebarkan informasi yang
                membuka mata dan menyelenggarakan forum diskusi untuk membangun
                kesadaran bersama.
              </p>
              <h2 className="text-2xl font-bold mb-4 text-center">
                <i className="fa fa-fist-raised mr-2"></i>
              </h2>

              <p className="text-center mb-4">
                Setiap donasi anda bukanlah sekadar materi, melainkan sebuah
                ikhtiar agar desisan ular tetap terdengar, dan kicauan gagak
                tetap terdiam.
              </p>
              <br />

              <div className="flex flex-col space-y-4 items-center">
                <button className="bg-primary hover:bg-red-600 transition-colors duration-500 text-white font-bold py-2 px-4 rounded w-full max-w-xs">
                  <i className="fa fa-donate mr-2"></i>
                  Donasi via Saweria
                </button>
                <button className="bg-primary hover:bg-red-600 transition-colors duration-500 text-white font-bold py-2 px-4 rounded w-full max-w-xs">
                  <i className="fa fa-paypal mr-2"></i>
                  Donasi via PayPal
                </button>
                <button className="bg-primary hover:bg-red-600 transition-colors duration-500 text-white font-bold py-2 px-4 rounded w-full max-w-xs">
                  <i className="fa fa-wallet mr-2"></i>
                  Donasi via Dompet Digital
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
