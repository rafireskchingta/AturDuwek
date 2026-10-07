import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Wallet, Receipt, PieChart, ShieldCheck } from 'lucide-react';

export default function Landing() {
  const [sisaUang, setSisaUang] = useState(1500000);
  const [sisaHari, setSisaHari] = useState(20);
  const cadangan = 300000;
  
  const jatahHarian = Math.max(0, Math.floor((sisaUang - cadangan) / sisaHari));

  const formatRp = (num: number) => {
    return new Intl.NumberFormat('id-ID').format(num);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center">
      <div className="w-full max-w-[428px] bg-[#FFFBF5] min-h-screen shadow-xl relative flex flex-col items-center animate-fade-in">
        {/* Navbar */}
        <nav className="w-full px-6 pt-10 pb-4 flex items-center justify-between bg-white border-b border-[#F3E5D8]">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Logo" className="w-10 h-10 object-contain" />
            <div>
              <h1 className="font-bold text-lg leading-tight text-[#3E2723]">AturDuwek</h1>
              <p className="text-[10px] font-semibold text-[#8B5E34]">Dompet Anak Kos</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/login" className="text-sm font-semibold text-[#8B5E34]">Masuk</Link>
            <Link to="/register" className="bg-gradient-to-r from-[#E48729] to-[#C96914] text-white text-sm font-semibold px-5 py-2 rounded-full flex items-center gap-1 shadow-md">
              Mulai Coba <ArrowRight size={16} />
            </Link>
          </div>
        </nav>

        {/* Hero Section */}
        <main className="flex-1 w-full px-6 py-8 flex flex-col items-center text-center overflow-y-auto scrollbar-hide">
          <h2 className="text-3xl font-extrabold leading-tight mb-4 text-[#3E2723]">
            Biar Uang Bulanan <br /> Nggak Cuma <span className="text-[#E48729]">Numpang Lewat</span>
          </h2>
          <p className="text-[#5D4037] text-sm mb-8 px-2">
            Rem darurat paling elegan biar uang saku bulananmu nggak menguap jadi misteri di pertengahan bulan.
          </p>

          <Link to="/register" className="w-full bg-gradient-to-r from-[#D67119] to-[#B3520A] text-white font-bold py-4 rounded-full flex justify-center items-center gap-2 shadow-[0_8px_20px_rgba(214,113,25,0.3)] hover:opacity-90 transition-opacity mb-4">
            Mulai Atur Duwekmu <ArrowRight size={20} />
          </Link>
          <p className="text-xs text-[#8B5E34] mb-10">
            Sudah punya akun? <Link to="/login" className="text-[#A0522D] font-bold underline">Masuk di sini</Link>
          </p>

          {/* Interactive Mockup Card */}
          <div className="w-full bg-[#FFFBF5] border-2 border-[#F3E5D8] rounded-[24px] p-5 mb-8 shadow-sm text-left relative overflow-hidden">
            <div className="flex items-center gap-2 mb-6">
              <Wallet className="text-[#8B5E34]" size={20} />
              <h3 className="font-bold text-[#3E2723] text-lg">Cek Ketahanan Finansial Kos</h3>
            </div>

            {/* Range 1 */}
            <div className="flex justify-between items-end mb-2">
              <span className="text-xs font-semibold text-[#5D4037]">Kiriman Bulanan / Sisa Uang</span>
              <span className="font-bold text-[#8B5E34]">Rp{formatRp(sisaUang)}</span>
            </div>
            <div className="relative w-full h-4 flex items-center mb-4">
              <input 
                type="range" 
                min="300000" max="3000000" step="50000"
                value={sisaUang}
                onChange={(e) => setSisaUang(Number(e.target.value))}
                className="w-full absolute z-20 opacity-0 cursor-pointer h-full"
              />
              <div className="w-full h-2 bg-[#F3E5D8] rounded-full overflow-hidden absolute z-0">
                <div className="h-full bg-[#D97E2C]" style={{ width: `${((sisaUang - 300000) / 2700000) * 100}%` }}></div>
              </div>
              <div 
                className="w-4 h-4 bg-[#D97E2C] rounded-full border-2 border-white absolute z-10 shadow-sm pointer-events-none"
                style={{ left: `calc(${((sisaUang - 300000) / 2700000) * 100}% - 8px)` }}
              ></div>
            </div>

            {/* Range 2 */}
            <div className="flex justify-between items-end mb-2">
              <span className="text-xs font-semibold text-[#5D4037]">Sisa Hari Menuju Kiriman Ortu</span>
              <span className="font-bold text-[#8B5E34]">{sisaHari} Hari Lagi</span>
            </div>
            <div className="relative w-full h-4 flex items-center mb-6">
              <input 
                type="range" 
                min="1" max="31" step="1"
                value={sisaHari}
                onChange={(e) => setSisaHari(Number(e.target.value))}
                className="w-full absolute z-20 opacity-0 cursor-pointer h-full"
              />
              <div className="w-full h-2 bg-[#F3E5D8] rounded-full overflow-hidden absolute z-0">
                <div className="h-full bg-[#D97E2C]" style={{ width: `${(sisaHari / 31) * 100}%` }}></div>
              </div>
              <div 
                className="w-4 h-4 bg-[#D97E2C] rounded-full border-2 border-white absolute z-10 shadow-sm pointer-events-none"
                style={{ left: `calc(${(sisaHari / 31) * 100}% - 8px)` }}
              ></div>
            </div>

            {/* Result Box */}
            <div className="bg-[#F8EFE6] border border-[#E8D5C4] rounded-2xl p-4 mb-4">
              <div className="flex justify-between items-center mb-1">
                <span className="text-[10px] font-bold text-[#5D4037] uppercase tracking-wider">Jatah Makan & Jajan Hari Ini</span>
                <span className={`text-[10px] font-bold flex items-center gap-1 ${jatahHarian > 20000 ? 'text-[#2E7D32]' : 'text-[#D93E27]'}`}>
                  <div className={`w-1.5 h-1.5 rounded-full ${jatahHarian > 20000 ? 'bg-[#2E7D32]' : 'bg-[#D93E27]'}`}></div> 
                  Status: {jatahHarian > 20000 ? 'AMAN' : 'KRITIS'}
                </span>
              </div>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-3xl font-extrabold text-[#3E2723]">Rp {formatRp(jatahHarian)}</span>
                <span className="text-xs font-bold text-[#D97E2C]">/ hari</span>
              </div>
              <div className="flex items-start gap-2 text-[10px] text-[#5D4037] leading-tight">
                <div className="mt-0.5"><Wallet size={12} className={jatahHarian > 20000 ? 'text-[#2E7D32]' : 'text-[#D93E27]'}/></div>
                <p>
                  {jatahHarian >= 50000 ? "Aman! Cukup buat makan warteg 2× kenyang plus es teh manis." : 
                   jatahHarian >= 30000 ? "Cukup untuk makan sederhana 2x sehari." : 
                   "Hati-hati! Sebaiknya masak sendiri atau seduh mie instan."}
                </p>
              </div>
            </div>

            <div className="flex justify-between items-center bg-[#FDFBF9] border border-[#F3E5D8] rounded-xl p-3">
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-[#8B5E34]" />
                <span className="text-xs font-semibold text-[#3E2723]">Cadangan Darurat Terkunci:</span>
              </div>
              <span className="text-sm font-bold text-[#3E2723]">Rp {formatRp(cadangan)}</span>
            </div>
          </div>

          <p className="text-xs text-[#8B5E34] mb-8 px-4 font-medium">
            Bukan sekadar buku kas biasa, ini sistem navigasi dompetmu.
          </p>

          {/* Feature Cards */}
          <div className="w-full flex flex-col gap-4 text-left">
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#F0E6DD] relative">
              <div className="w-10 h-10 rounded-xl bg-[#FDF2E9] text-[#D97E2C] flex items-center justify-center mb-4">
                 <Wallet size={20} />
              </div>
              <span className="absolute top-5 right-5 text-[10px] font-bold bg-[#F4EBE2] text-[#5D4037] px-2 py-1 rounded">Pos Otomatis</span>
              <h4 className="font-bold text-[#3E2723] text-base mb-2">Atur Budget Otomatis</h4>
              <p className="text-xs text-[#5D4037] leading-relaxed">
                Envelope budgeting cerdas: Pisahkan pos sewa kamar kos, jatah makan warteg harian, kuota pulsa, dan budget nongkrong tanpa ribet kalkulasi manual.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#F0E6DD] relative">
              <div className="w-10 h-10 rounded-xl bg-[#E6F7F5] text-[#2EAA9D] flex items-center justify-center mb-4">
                 <Receipt size={20} />
              </div>
              <span className="absolute top-5 right-5 text-[10px] font-bold bg-[#E6F7F5] text-[#2EAA9D] px-2 py-1 rounded">Input 3 Detik</span>
              <h4 className="font-bold text-[#3E2723] text-base mb-2">Catat Pengeluaran Cepat</h4>
              <p className="text-xs text-[#5D4037] leading-relaxed">
                Mager ketik satu per satu? Cukup foto struk minimarket atau warung, AI AturDuwek langsung mengenali rincian barang dan memilah kategorinya.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#F0E6DD] relative mb-10">
              <div className="w-10 h-10 rounded-xl bg-[#FEF4E6] text-[#E6A23C] flex items-center justify-center mb-4">
                 <PieChart size={20} />
              </div>
              <span className="absolute top-5 right-5 text-[10px] font-bold bg-[#FDE47F] text-[#8C6A1C] px-2 py-1 rounded">Anti-Boncos</span>
              <h4 className="font-bold text-[#3E2723] text-base mb-2">Pantau Sisa Uang Harian</h4>
              <p className="text-xs text-[#5D4037] leading-relaxed">
                Jatah belanja dihitung otomatis per hari. Kalau hari ini hemat Rp 15.000, jatah besok otomatis bertambah. Bebas rasa bersalah saat jajan!
              </p>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}
