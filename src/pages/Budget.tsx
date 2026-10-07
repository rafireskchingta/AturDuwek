import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Bell, Wallet, Home, Utensils, Wifi, Coffee, Shield, Calendar, Lock, AlertCircle } from 'lucide-react';

export default function Budget() {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-transparent p-6 flex flex-col items-center">
      <div className="w-full self-start mb-6">
        <button onClick={() => navigate('/app/dashboard')} className="inline-flex items-center gap-1 bg-[#D99A5A] text-[#5D3A1A] font-semibold text-xs px-3 py-1.5 rounded-full hover:bg-[#C98A4A] transition-colors">
          <ArrowLeft size={14} /> Kembali
        </button>
      </div>

      <header className="w-full flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Logo" className="w-10 h-10 object-contain bg-white rounded-full p-0.5 border border-[#F3E5D8]" />
          <h1 className="font-extrabold text-lg text-[#3E2723]">AturDuwek</h1>
        </div>
        <Link to="?notifications=true" className="relative p-2 bg-white rounded-full border border-[#E8D5C4] shadow-sm">
          <Bell size={16} className="text-[#3E2723]" />
        </Link>
      </header>

      {/* Title */}
      <div className="w-full flex justify-between items-start mb-4">
        <div>
          <h2 className="font-extrabold text-xl text-[#3E2723] leading-tight mb-1">Atur Pos Anggaran <br/>(Budget)</h2>
          <p className="text-[10px] text-[#5D4037]">Alokasikan uang saku sebelum<br/>terpakai sembarangan.</p>
        </div>
        <button onClick={() => navigate('/app/transactions')} className="bg-[#8B5E34] text-white text-xs font-bold px-3 py-2 rounded-xl flex items-center gap-1 shadow-sm">
          + Buat Pos
        </button>
      </div>

      {/* Total Anggaran Card */}
      <div className="w-full bg-[#FFFBF5] border border-[#F3E5D8] rounded-3xl p-5 mb-6 shadow-sm">
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="text-[9px] font-bold text-[#5D4037] flex items-center gap-1 uppercase tracking-wider mb-1">
              <Wallet size={10} className="text-[#8B5E34]" /> TOTAL ANGGARAN BULAN INI
            </span>
            <div className="font-extrabold text-[28px] text-[#3E2723] leading-none">Rp2.500.000</div>
          </div>
          <div className="bg-[#FDF4E3] text-[#D4A017] text-[10px] font-bold px-2 py-1 rounded-full text-center leading-tight">
            Okt<br/>2026
          </div>
        </div>

        <div className="flex gap-4 mb-5">
          <div className="flex-1">
            <span className="text-[10px] font-bold text-[#5D4037] flex items-center gap-1">
              <div className="w-1.5 h-1.5 bg-[#D93E27] rounded-full"></div> Terpakai (54%)
            </span>
            <p className="font-bold text-sm text-[#3E2723]">Rp 1.350.000</p>
            <p className="text-[8px] text-[#A89F95]">dari 5 pos aktif</p>
          </div>
          <div className="flex-1">
            <span className="text-[10px] font-bold text-[#5D4037] flex items-center gap-1">
              <div className="w-1.5 h-1.5 bg-[#27AE60] rounded-full"></div> Sisa Kuota Bebas
            </span>
            <p className="font-bold text-sm text-[#27AE60]">Rp 1.150.000</p>
            <p className="text-[8px] text-[#A89F95]">Aman & Terkendali</p>
          </div>
        </div>

        <div className="w-full">
          <div className="flex justify-between items-center mb-1">
            <span className="text-[9px] font-bold text-[#8B5E34] flex items-center gap-1">
              <Calendar size={10}/> Hari ke-13 dari 31 hari
            </span>
            <span className="text-[9px] font-bold text-[#D93E27]">42% Waktu Berlalu</span>
          </div>
          <div className="relative w-full h-2.5 bg-[#E8D5C4] rounded-full mb-1 flex overflow-hidden">
            <div className="h-full bg-[#A0522D]" style={{ width: '25%' }}></div>
            <div className="h-full bg-[#E48729]" style={{ width: '15%' }}></div>
            <div className="h-full bg-[#8675DF]" style={{ width: '10%' }}></div>
            <div className="h-full bg-[#F4B41A]" style={{ width: '4%' }}></div>
            {/* The time marker */}
            <div className="absolute top-0 bottom-0 w-1 bg-[#3E2723]" style={{ left: '42%' }}></div>
          </div>
          <div className="flex justify-between items-center text-[8px] text-[#A89F95]">
            <span>Tgl 1</span>
            <span className="text-[#3E2723] font-bold ml-12">Hari ini (Tgl 13)</span>
            <span>Tgl 31 (Gajian/Kiriman)</span>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-between items-center mb-4">
        <h3 className="font-extrabold text-sm text-[#3E2723]">Daftar Pos Anggaran Kos</h3>
        <span className="text-[10px] font-bold text-[#8B5E34]">Atur Urutan</span>
      </div>

      <div className="w-full flex flex-col gap-4">
        {/* Pos 1 */}
        <div className="bg-[#FFFBF5] border border-[#F3E5D8] rounded-2xl p-4 shadow-sm relative">
          <div className="flex justify-between items-start mb-3">
            <div className="flex gap-3">
              <div className="w-10 h-10 bg-[#FBEFDF] text-[#D97A27] rounded-xl flex items-center justify-center">
                <Home size={18} />
              </div>
              <div>
                <h4 className="font-bold text-[#3E2723] text-sm leading-tight">Sewa Kamar Kos<br/>& Air</h4>
                <p className="text-[10px] text-[#5D4037]">Kategori Pokok Kos •<br/>Ibu Kost</p>
              </div>
            </div>
            <span className="bg-[#F8EFE6] text-[#8B5E34] text-[9px] font-bold px-2 py-1 rounded-full flex items-center gap-1 border border-[#E8D5C4]">
              <Lock size={10} /> Lunas &<br/>Terkunci
            </span>
          </div>
          <div className="flex justify-between items-end mb-1">
            <span className="text-[10px] text-[#5D4037] font-semibold">Terbayar Diawal Bulan</span>
            <span className="text-[9px] font-bold text-[#27AE60] bg-[#E6F7E9] px-1.5 rounded">100% Beres</span>
          </div>
          <div className="flex justify-between items-end mb-2">
            <span className="font-bold text-sm text-[#D97A27]">Rp 800.000 <span className="text-[10px] text-[#A89F95] font-normal">/ Rp 800.000</span></span>
            <span className="text-[10px] text-[#A89F95]">Sisa pos: Rp 0</span>
          </div>
          <div className="w-full h-1.5 bg-[#E8D5C4] rounded-full"><div className="h-full bg-[#D97A27] rounded-full w-full"></div></div>
        </div>

        {/* Pos 2 */}
        <div className="bg-[#FFFBF5] border border-[#F3E5D8] rounded-2xl p-4 shadow-sm relative">
          <div className="flex justify-between items-start mb-3">
            <div className="flex gap-3">
              <div className="w-10 h-10 bg-[#FDF4E3] text-[#D4A017] rounded-xl flex items-center justify-center">
                <Utensils size={18} />
              </div>
              <div>
                <h4 className="font-bold text-[#3E2723] text-sm leading-tight">Makan & Minum<br/>Harian</h4>
                <p className="text-[10px] text-[#5D4037]">Warteg, Sarapan &<br/>Galon Air</p>
              </div>
            </div>
            <span className="bg-[#E6F7E9] text-[#27AE60] text-[9px] font-bold px-2 py-1 rounded-full flex items-center gap-1">
              <CheckCircleIcon /> Aman<br/>Terkendali
            </span>
          </div>
          <div className="flex justify-between items-end mb-1">
            <span className="text-[10px] text-[#5D4037] font-semibold">Terpakai (45%)</span>
            <span className="text-[10px] font-semibold text-[#5D4037]">Sisa Pos</span>
          </div>
          <div className="flex justify-between items-end mb-2">
            <span className="font-bold text-sm text-[#E48729]">Rp 410.000</span>
            <span className="font-bold text-sm text-[#27AE60]">Rp 490.000</span>
          </div>
          <div className="w-full h-1.5 bg-[#E8D5C4] rounded-full mb-3"><div className="h-full bg-[#E48729] rounded-full w-[45%]"></div></div>
          <div className="bg-[#F8EFE6] rounded-lg p-2 flex items-center gap-2 text-[10px] font-medium text-[#5D4037]">
            Jatah sisa per hari: <span className="font-bold text-[#8B5E34] flex items-center gap-1"><Utensils size={10}/> Rp 27.000 / hari (18 hari lagi)</span>
          </div>
        </div>

        {/* Pos 3 */}
        <div className="bg-[#FFFBF5] border border-[#F3E5D8] rounded-2xl p-4 shadow-sm relative">
          <div className="flex justify-between items-start mb-3">
            <div className="flex gap-3">
              <div className="w-10 h-10 bg-[#F2F1FA] text-[#8675DF] rounded-xl flex items-center justify-center">
                <Wifi size={18} />
              </div>
              <div>
                <h4 className="font-bold text-[#3E2723] text-sm">Pulsa, WiFi, & Akademik</h4>
                <p className="text-[10px] text-[#5D4037]">Paket Data, Print & Fotokopi</p>
              </div>
            </div>
            <span className="text-[9px] font-bold text-[#5D4037]">72%</span>
          </div>
          <div className="flex justify-between items-end mb-1">
            <span className="text-[10px] text-[#5D4037] font-semibold">Terpakai: Rp 180.000</span>
            <span className="text-[10px] font-semibold text-[#5D4037]">Sisa Kuota</span>
          </div>
          <div className="flex justify-between items-end mb-2">
            <span className="text-[10px] text-[#A89F95]">Batas: Rp 250.000</span>
            <span className="font-bold text-sm text-[#3E2723]">Rp 70.000</span>
          </div>
          <div className="w-full h-1.5 bg-[#E8D5C4] rounded-full"><div className="h-full bg-[#8675DF] rounded-full w-[72%]"></div></div>
        </div>

        {/* Pos 4 */}
        <div className="bg-[#FFFBF5] border border-[#F3E5D8] rounded-2xl p-4 shadow-sm relative">
          <div className="flex justify-between items-start mb-3">
            <div className="flex gap-3">
              <div className="w-10 h-10 bg-[#FBEFDF] text-[#D93E27] rounded-xl flex items-center justify-center">
                <Coffee size={18} />
              </div>
              <div>
                <h4 className="font-bold text-[#3E2723] text-sm">Nongkrong &<br/>Hiburan</h4>
                <p className="text-[10px] text-[#5D4037]">Kopi Kampus, Bioskop<br/>& Jajan</p>
              </div>
            </div>
            <span className="bg-[#FDF4E3] text-[#D4A017] text-[9px] font-bold px-2 py-1 rounded-full border border-[#F4D35E]">
              Mendekati<br/>Batas!
            </span>
          </div>
          <div className="flex justify-between items-end mb-1">
            <span className="text-[10px] text-[#A89F95]">Budget: Rp 300.000</span>
            <span className="text-[10px] font-semibold text-[#5D4037]">Sisa Pos Kritis</span>
          </div>
          <div className="flex justify-between items-end mb-2">
            <span className="font-bold text-sm text-[#D93E27]">Terpakai: Rp 260.000</span>
            <span className="font-bold text-sm text-[#D93E27]">Rp 40.000</span>
          </div>
          <div className="w-full h-1.5 bg-[#E8D5C4] rounded-full mb-3"><div className="h-full bg-[#E48729] rounded-full w-[86%]"></div></div>
          <p className="text-[9px] text-[#D93E27] flex items-start gap-1">
            <AlertCircle size={10} className="mt-0.5 flex-shrink-0" />
            Saran: Ganti agenda kafe dengan seduh kopi saset di kosan
          </p>
        </div>

        {/* Pos 5 */}
        <div className="bg-[#FFFBF5] border border-[#F3E5D8] rounded-2xl p-4 shadow-sm relative">
          <div className="flex justify-between items-start mb-3">
            <div className="flex gap-3">
              <div className="w-10 h-10 bg-[#E6F7E9] text-[#27AE60] rounded-xl flex items-center justify-center">
                <Shield size={18} />
              </div>
              <div>
                <h4 className="font-bold text-[#3E2723] text-sm">Dana Darurat Akhir<br/>Bulan</h4>
                <p className="text-[10px] text-[#5D4037]">Jaring Pengaman Tanggal<br/>Tua</p>
              </div>
            </div>
            <span className="bg-[#E6F7E9] text-[#27AE60] text-[9px] font-bold px-2 py-1 rounded-full flex items-center gap-1">
              100% Aman<br/>🛡️
            </span>
          </div>
          <div className="flex justify-between items-end mb-1">
            <span className="text-[10px] text-[#5D4037] font-semibold">Target Tersimpan Utuh</span>
            <button className="bg-[#F8EFE6] text-[#8B5E34] text-[9px] font-bold px-2 py-1 rounded-lg">Top Up Pos</button>
          </div>
          <div className="flex justify-between items-end mb-2">
            <span className="font-bold text-sm text-[#27AE60]">Rp 250.000 <span className="text-[10px] text-[#A89F95] font-normal">/ Rp 250.000</span></span>
          </div>
          <div className="w-full h-1.5 bg-[#E8D5C4] rounded-full"><div className="h-full bg-[#27AE60] rounded-full w-full"></div></div>
        </div>

      </div>

    </div>
  );
}

function CheckCircleIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
  )
}
