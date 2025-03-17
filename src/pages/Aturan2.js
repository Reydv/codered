import Footer from "../components/Footer";

export default function AturanKomunitas() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Main content - skipping navbar as requested */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-16">
        {/* Title visible on mobile but hidden on larger screens since it's in navbar */}
        <h1 className="text-3xl font-bold mb-12">Aturan Komunitas</h1>

        <div className="max-w-4xl w-full bg-black border border-primary rounded-2xl overflow-hidden">
          <div className="flex justify-center items-center">
            <div className="md:w-3/5 p-8 flex flex-col justify-center sm:text-md md:text-lg text-sm">
              <h2 className="text-2xl font-bold mb-4 underline text-center">
                Aturan dalam Komunitas Web
              </h2>

              <p className="text-center mb-4">
                Selamat datang di komunitas web kami! Untuk menjaga kenyamanan
                dan keamanan semua anggota, kami memiliki beberapa aturan yang
                perlu diikuti:
              </p>
              <br />

              <ul className="list-disc list-inside mb-4">
                <li className="mb-2">
                  <strong>Hormati Sesama Anggota:</strong> Jaga tutur kata dan
                  sikap sopan dalam setiap interaksi. Hindari kata-kata kasar,
                  diskriminasi, atau pelecehan.
                </li>
                <li className="mb-2">
                  <strong>Jaga Privasi:</strong> Jangan membagikan informasi
                  pribadi milik Anda atau orang lain tanpa izin.
                </li>
                <li className="mb-2">
                  <strong>Konten yang Relevan:</strong> Pastikan konten yang
                  dibagikan sesuai dengan topik komunitas. Hindari spam atau
                  promosi yang tidak relevan.
                </li>
                <li className="mb-2">
                  <strong>Laporkan Masalah:</strong> Jika Anda menemukan
                  pelanggaran atau masalah, segera laporkan kepada admin atau
                  moderator.
                </li>
                <li className="mb-2">
                  <strong>Kolaborasi Positif:</strong> Ajaklah anggota lain
                  untuk berdiskusi dan berkolaborasi secara positif demi
                  kemajuan komunitas.
                </li>
              </ul>

              <p className="text-center mb-4">
                Dengan mengikuti aturan ini, kita dapat menciptakan lingkungan
                yang aman, nyaman, dan produktif bagi semua anggota. Terima
                kasih atas partisipasi Anda!
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
