import { Bell, Utensils, Wifi, Droplets, Zap, ArrowRightLeft, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="min-h-screen p-6 pb-32 bg-[#FAF6F0]">
      {/* Top Navbar */}
      <header className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Logo" className="w-10 h-10 object-contain bg-white rounded-full p-0.5 border border-[#F3E5D8]" />
          <div>
            <h1 className="font-bold text-lg leading-none text-[#3E2723]">AturDuwek</h1>
            <p className="text-[10px] font-bold text-[#27AE60]">Dompet Aman</p>
          </div>
        </div>
        <Link to="?notifications=true" className="relative p-2 bg-white rounded-full border border-[#E8D5C4] shadow-sm">
          <Bell size={20} className="text-[#3E2723]" />
          <div className="absolute top-1 right-1.5 w-2.5 h-2.5 bg-[#D93E27] rounded-full border-2 border-white"></div>
        </Link>
      </header>

      {/* Greeting & Date */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-extrabold text-[#3E2723] flex items-center gap-2">
          Halo, User! <span className="text-2xl">👋</span>
        </h1>
        <div className="bg-white border border-[#E8D5C4] px-3 py-1.5 rounded-full text-xs font-bold text-[#8B5E34] shadow-sm">
          14 Okt 2026
        </div>
      </div>

      {/* Main Card */}
      <div className="bg-gradient-to-br from-[#FFFFFF] via-[#FFFDF5] to-[#FDF4D9] border border-[#F3E5D8] rounded-3xl p-5 mb-8 shadow-sm">
        <div className="flex justify-between items-center mb-2">
          <span className="text-[10px] font-bold text-[#8B5E34] tracking-widest uppercase">SISA JATAH HARI INI</span>
          <div className="bg-[#E6F7E9] text-[#27AE60] text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1 shadow-sm">
            <CheckIcon /> Kondisi: Dompet Sehat
          </div>
        </div>
        
        <div className="flex items-baseline gap-1 mb-1">
          <span className="text-[40px] font-extrabold text-[#3E2723] leading-none">Rp 42.500</span>
          <span className="text-sm font-bold text-[#5D4037]">/ hari</span>
        </div>
        
        <div className="flex items-center gap-1.5 text-xs text-[#5D4037] mb-6">
          <Utensils size={14} className="text-[#8B5E34]" />
          <span className="font-medium">Aman buat makan enak warteg 3x + es teh!</span>
        </div>

        <div className="flex justify-between items-center text-[10px] text-[#5D4037] mb-2 px-1">
          <span className="font-semibold">Sisa Uang Saku Bulan Ini</span>
          <div className="font-bold">
            <span className="text-sm text-[#3E2723]">Rp 1.150.000</span>
            <span className="text-gray-400"> / 2,5 jt</span>
          </div>
        </div>
        
        <div className="w-full h-2 bg-[#F3E5D8] rounded-full mb-4 relative overflow-hidden">
          <div className="h-full bg-[#D97E2C] rounded-full w-[46%]"></div>
        </div>

        <div className="flex justify-between items-center pt-3 border-t border-[#F3E5D8] border-dashed">
          <div className="flex items-start gap-1.5 text-[10px] font-bold text-[#5D4037]">
            <Calendar size={14} className="text-[#8B5E34] mt-0.5" />
            <div className="leading-tight">
              <p>18 Hari Menuju Kiriman</p>
              <p>Berikutnya (Tanggal 1)</p>
            </div>
          </div>
          <div className="text-right text-[10px] font-bold text-[#8B5E34] leading-tight">
            <p className="text-sm">46%</p>
            <p>Tersisa</p>
          </div>
        </div>
      </div>

      {/* Fokus Pengeluaran Pekan Ini */}
      <h3 className="font-extrabold text-[#3E2723] text-lg mb-4">Fokus Pengeluaran Pekan Ini</h3>
      <div className="grid grid-cols-2 gap-3 mb-8">
        <div className="bg-[#FFFBF5] border border-[#F3E5D8] rounded-2xl p-3 flex items-center gap-3 shadow-sm">
          <div className="w-10 h-10 bg-[#FBEFDF] text-[#D97A27] rounded-xl flex items-center justify-center flex-shrink-0">
            <Utensils size={20} />
          </div>
          <div className="overflow-hidden">
            <p className="text-[10px] text-[#5D4037] truncate">Makan</p>
            <p className="font-bold text-[#3E2723] text-sm truncate">Rp 245.000</p>
          </div>
        </div>
        <div className="bg-[#FFFBF5] border border-[#F3E5D8] rounded-2xl p-3 flex items-center gap-3 shadow-sm">
          <div className="w-10 h-10 bg-[#FBEFDF] text-[#D97A27] rounded-xl flex items-center justify-center flex-shrink-0">
             <LaundryIcon />
          </div>
          <div className="overflow-hidden">
            <p className="text-[10px] text-[#5D4037] truncate">Laundry</p>
            <p className="font-bold text-[#3E2723] text-sm truncate">Rp 65.000</p>
          </div>
        </div>
        <div className="bg-[#FFFBF5] border border-[#F3E5D8] rounded-2xl p-3 flex items-center gap-3 shadow-sm">
          <div className="w-10 h-10 bg-[#F2F1FA] text-[#8675DF] rounded-xl flex items-center justify-center flex-shrink-0">
            <Wifi size={20} />
          </div>
          <div className="overflow-hidden">
            <p className="text-[10px] text-[#5D4037] truncate">Kuota & WiFi</p>
            <p className="font-bold text-[#3E2723] text-sm truncate">Rp 75.000</p>
          </div>
        </div>
        <div className="bg-[#FFFBF5] border border-[#F3E5D8] rounded-2xl p-3 flex items-center gap-3 shadow-sm">
          <div className="w-10 h-10 bg-[#E6F5F4] text-[#2CA9A1] rounded-xl flex items-center justify-center flex-shrink-0">
            <BikeIcon />
          </div>
          <div className="overflow-hidden">
            <p className="text-[10px] text-[#5D4037] truncate">Bensin & Ojol</p>
            <p className="font-bold text-[#3E2723] text-sm truncate">Rp 50.000</p>
          </div>
        </div>
      </div>

      {/* Riwayat Terkini */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-extrabold text-[#3E2723] text-lg">Riwayat Terkini</h3>
        <span className="text-[10px] font-bold text-[#3E2723]">Hari ini</span>
      </div>
      
      <div className="flex flex-col gap-3">
        {/* Transaction Items */}
        <div className="bg-[#FFFBF5] border border-[#F3E5D8] rounded-2xl p-4 flex items-center gap-3 shadow-sm">
          <div className="w-10 h-10 bg-white border border-[#F0E6DD] rounded-xl flex items-center justify-center text-[#D97A27] flex-shrink-0">
            <Utensils size={18} />
          </div>
          <div className="flex-1 overflow-hidden">
            <h4 className="font-bold text-sm text-[#3E2723] truncate">Nasi Padang + Es Teh</h4>
            <p className="text-[10px] text-[#5D4037] truncate">Tadi siang, 12:45 • Makan Siang</p>
          </div>
          <div className="text-right flex-shrink-0">
            <p className="font-bold text-[#D93E27] text-sm">- Rp 22.000</p>
            <p className="text-[9px] text-[#A89F95] mt-0.5">Tunai</p>
          </div>
        </div>

        <div className="bg-[#FFFBF5] border border-[#F3E5D8] rounded-2xl p-4 flex items-center gap-3 shadow-sm">
          <div className="w-10 h-10 bg-white border border-[#F0E6DD] rounded-xl flex items-center justify-center text-[#D97A27] flex-shrink-0">
            <Droplets size={18} />
          </div>
          <div className="flex-1 overflow-hidden">
            <h4 className="font-bold text-sm text-[#3E2723] truncate">Galon Isi Ulang Kos</h4>
            <p className="text-[10px] text-[#5D4037] truncate">Kemarin, 19:10 • Kebutuhan Kos</p>
          </div>
          <div className="text-right flex-shrink-0">
            <p className="font-bold text-[#D93E27] text-sm">- Rp 7.000</p>
            <p className="text-[9px] text-[#A89F95] mt-0.5">QRIS</p>
          </div>
        </div>

        <div className="bg-[#FFFBF5] border border-[#F3E5D8] rounded-2xl p-4 flex items-center gap-3 shadow-sm">
          <div className="w-10 h-10 bg-white border border-[#F0E6DD] rounded-xl flex items-center justify-center text-[#8B5E34] flex-shrink-0">
            <Zap size={18} />
          </div>
          <div className="flex-1 overflow-hidden">
            <h4 className="font-bold text-sm text-[#3E2723] truncate">Token Listrik Kamar</h4>
            <p className="text-[10px] text-[#5D4037] truncate">2 hari lalu • Utilitas Kos</p>
          </div>
          <div className="text-right flex-shrink-0">
            <p className="font-bold text-[#D93E27] text-sm">- Rp 50.000</p>
            <p className="text-[9px] text-[#A89F95] mt-0.5">Bank Transfer</p>
          </div>
        </div>

        <div className="bg-[#FFFBF5] border border-[#F3E5D8] rounded-2xl p-4 flex items-center gap-3 shadow-sm">
          <div className="w-10 h-10 bg-white border border-[#F0E6DD] rounded-xl flex items-center justify-center text-[#27AE60] flex-shrink-0">
            <ArrowRightLeft size={18} />
          </div>
          <div className="flex-1 overflow-hidden">
            <h4 className="font-bold text-sm text-[#3E2723] truncate">Transfer Kiriman Ortu</h4>
            <p className="text-[10px] text-[#5D4037] truncate">1 Okt 2024 • Uang Bulanan</p>
          </div>
          <div className="text-right flex-shrink-0">
            <p className="font-bold text-[#27AE60] text-sm">+ Rp 2.500.000</p>
            <p className="text-[9px] text-[#27AE60] mt-0.5">Pemasukan</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-[#27AE60]"><polyline points="20 6 9 17 4 12"></polyline></svg>
  )
}

function LaundryIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><circle cx="12" cy="14" r="4"/><path d="M12 6h.01"/></svg>
  )
}

function BikeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="5.5" cy="17.5" r="3.5"/><circle cx="18.5" cy="17.5" r="3.5"/><path d="M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-3 11.5V14l-3-3 4-3 2 3h2"/></svg>
  )
}
