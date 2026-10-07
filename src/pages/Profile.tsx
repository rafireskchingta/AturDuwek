import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Bell, User, GraduationCap, BellRing, ChevronRight, Activity, Target, Tag, Moon, LogOut } from 'lucide-react';

export default function Profile() {
  const navigate = useNavigate();
  const [notifEnabled, setNotifEnabled] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark-theme');
    setDarkMode(isDark);
  }, []);

  const toggleDarkMode = () => {
    const newVal = !darkMode;
    setDarkMode(newVal);
    if (newVal) {
      document.documentElement.classList.add('dark-theme');
    } else {
      document.documentElement.classList.remove('dark-theme');
    }
  };

  return (
    <div className="w-full bg-[#FAF6F0] px-6 pt-14 pb-24 flex flex-col items-center">
      
      {/* Header */}
      <header className="w-full flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#E8D5C4] rounded-full flex items-center justify-center text-[#8B5E34]">
            <User size={20} />
          </div>
          <h1 className="font-extrabold text-lg text-[#3E2723]">Profil & Pengaturan Akun</h1>
        </div>
        <Link to="?notifications=true" className="p-2 relative">
          <Bell size={20} className="text-[#3E2723]" />
          <div className="absolute top-1 right-1 w-3.5 h-3.5 bg-[#D93E27] text-white text-[8px] font-bold rounded-full flex items-center justify-center border-2 border-[#FAF6F0]">3</div>
        </Link>
      </header>

      {/* User Card */}
      <div className="w-full bg-gradient-to-br from-[#FFFBF5] to-[#F3E5D8] border border-[#E8D5C4] rounded-3xl p-5 mb-4 shadow-sm">
        <div className="flex gap-4 items-center mb-4">
          <img src="/foto.jpg" alt="Avatar" className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-[#F3E5D8] object-cover" />
          <div>
            <h2 className="font-extrabold text-lg text-[#3E2723] leading-tight">DuoGondang</h2>
            <p className="text-[10px] text-[#5D4037] leading-tight mb-1">Teknik Komputer, Mahasiswa<br/>Semester 5</p>
            <span className="bg-[#E8D5C4] text-[#5D4037] text-[8px] font-bold px-2 py-0.5 rounded-full inline-flex items-center gap-1">
              <GraduationCap size={10} /> Universitas Diponegoro
            </span>
          </div>
        </div>

        <div className="flex gap-2">
          <div className="flex-1 bg-[#FAF6F0] rounded-xl p-2.5 text-center border border-[#F3E5D8]">
            <p className="text-[8px] font-bold text-[#5D4037]">Jatah Harian</p>
            <p className="font-extrabold text-[#8B5E34] text-xs">Rp 35.000</p>
          </div>
          <div className="flex-1 bg-[#FAF6F0] rounded-xl p-2.5 text-center border border-[#F3E5D8]">
            <p className="text-[8px] font-bold text-[#5D4037]">Saldo Kos</p>
            <p className="font-extrabold text-[#8B5E34] text-xs">Rp1.150.000</p>
          </div>
          <div className="flex-1 bg-[#FAF6F0] rounded-xl p-2.5 text-center border border-[#F3E5D8]">
            <p className="text-[8px] font-bold text-[#5D4037]">Hari Gajian</p>
            <p className="font-extrabold text-[#D93E27] text-xs">11 Hari Lagi</p>
          </div>
        </div>
      </div>

      {/* Alarm Card */}
      <div onClick={() => navigate('?notifications=true')} className="w-full bg-[#FFFBF5] border border-[#F3E5D8] rounded-2xl p-4 mb-6 shadow-sm flex items-center justify-between cursor-pointer">
        <div className="flex gap-3 items-center">
          <div className="w-10 h-10 bg-[#E48729] rounded-xl flex items-center justify-center text-white relative flex-shrink-0 shadow-sm">
            <BellRing size={18} />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#D93E27] rounded-full border-2 border-[#FFFBF5]"></div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-0.5">
              <h3 className="font-bold text-sm text-[#3E2723]">Alarm Finansial Kos</h3>
              <span className="bg-[#FDEAEA] text-[#D93E27] text-[8px] font-bold px-1.5 py-0.5 rounded-full">3 Kritis</span>
            </div>
            <p className="text-[9px] text-[#5D4037] leading-tight">Ketuk untuk cek sisa jatah, tagihan kos, &<br/>reminder sore</p>
          </div>
        </div>
        <ChevronRight size={16} className="text-[#8B5E34]" />
      </div>

      {/* Pengaturan List */}
      <div className="w-full mb-6">
        <h3 className="text-[10px] font-bold text-[#5D4037] mb-3 uppercase tracking-wider">PENGATURAN & PREFERENSI</h3>
        <div className="bg-white border border-[#E8D5C4] rounded-3xl overflow-hidden shadow-sm flex flex-col">
          
          <div className="p-4 border-b border-[#F3E5D8] flex items-center justify-between cursor-pointer hover:bg-[#FAF6F0]">
            <div className="flex gap-3 items-center">
              <div className="w-10 h-10 bg-[#F8EFE6] text-[#8B5E34] rounded-full flex items-center justify-center flex-shrink-0"><Activity size={18}/></div>
              <div>
                <h4 className="font-bold text-sm text-[#3E2723]">Data Keuangan & Limit<br/>Bulanan</h4>
                <p className="text-[9px] text-[#A89F95]">Uang bulanan Rp 2.500.000, tgl<br/>kiriman: 01</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <span className="font-bold text-[#8B5E34] text-[10px]">Rp<br/>2.5jt</span>
              <ChevronRight size={16} className="text-[#A89F95]" />
            </div>
          </div>

          <div className="p-4 border-b border-[#F3E5D8] flex items-center justify-between cursor-pointer hover:bg-[#FAF6F0]">
            <div className="flex gap-3 items-center">
              <div className="w-10 h-10 bg-[#F2F1FA] text-[#8675DF] rounded-full flex items-center justify-center flex-shrink-0"><Target size={18}/></div>
              <div>
                <h4 className="font-bold text-sm text-[#3E2723]">Kelola Pos Anggaran & Amplop</h4>
                <p className="text-[9px] text-[#A89F95]">Makan 40%, Sewa Kos 32%, Nabung 15%</p>
              </div>
            </div>
            <ChevronRight size={16} className="text-[#A89F95]" />
          </div>

          <div className="p-4 border-b border-[#F3E5D8] flex items-center justify-between cursor-pointer hover:bg-[#FAF6F0]">
            <div className="flex gap-3 items-center">
              <div className="w-10 h-10 bg-[#FDF4E3] text-[#D4A017] rounded-full flex items-center justify-center flex-shrink-0"><Tag size={18}/></div>
              <div>
                <h4 className="font-bold text-sm text-[#3E2723]">Kelola Kategori<br/>Pengeluaran Kos</h4>
                <p className="text-[9px] text-[#A89F95]">Warteg, Galon Kos, Laundry,<br/>Fotokopi</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <span className="bg-[#F8EFE6] text-[#5D4037] text-[8px] font-bold px-2 py-1 rounded-full">9 Kategori</span>
              <ChevronRight size={16} className="text-[#A89F95]" />
            </div>
          </div>

          <div className="p-4 border-b border-[#F3E5D8] flex items-center justify-between">
            <div className="flex gap-3 items-center">
              <div className="w-10 h-10 bg-[#FBEFDF] text-[#E48729] rounded-full flex items-center justify-center flex-shrink-0"><BellRing size={18}/></div>
              <div>
                <h4 className="font-bold text-sm text-[#3E2723]">Pengaturan Notifikasi &<br/>Waktu Alarm</h4>
                <p className="text-[9px] text-[#A89F95]">Alarm catat sore: 18.00 WIB</p>
              </div>
            </div>
            <button onClick={() => setNotifEnabled(!notifEnabled)} className={`w-12 h-6 rounded-full p-1 transition-colors ${notifEnabled ? 'bg-[#8B5E34]' : 'bg-[#E8D5C4]'}`}>
              <div className={`w-4 h-4 bg-white rounded-full shadow-sm transition-transform ${notifEnabled ? 'translate-x-6' : 'translate-x-0'}`}></div>
            </button>
          </div>

          <div className="p-4 flex items-center justify-between">
            <div className="flex gap-3 items-center">
              <div className="w-10 h-10 bg-[#F8EFE6] text-[#5D4037] rounded-full flex items-center justify-center flex-shrink-0"><Moon size={18}/></div>
              <div>
                <h4 className="font-bold text-sm text-[#3E2723]">Tema Gelap / Dark Mode</h4>
                <p className="text-[9px] text-[#A89F95]">Menyesuaikan tema pencahayaan<br/>kamar</p>
              </div>
            </div>
            <button onClick={toggleDarkMode} className={`w-12 h-6 rounded-full p-1 transition-colors ${darkMode ? 'bg-[#8B5E34]' : 'bg-[#E8D5C4]'}`}>
              <div className={`w-4 h-4 bg-white rounded-full shadow-sm transition-transform ${darkMode ? 'translate-x-6' : 'translate-x-0'}`}></div>
            </button>
          </div>
          
        </div>
      </div>

      <button onClick={() => navigate('/')} className="w-full bg-[#FDEAEA] text-[#D93E27] font-bold text-sm py-3.5 rounded-2xl flex items-center justify-center gap-2 border border-[#F9DADA] hover:bg-[#F9DADA] transition-colors">
        <LogOut size={16} /> Keluar / Logout Akun
      </button>

      <style>{`
        html.dark-theme {
          filter: invert(0.9) hue-rotate(180deg) brightness(1.1) contrast(0.9);
        }
        html.dark-theme img, html.dark-theme svg {
          filter: invert(1) hue-rotate(180deg);
        }
      `}</style>
    </div>
  );
}
