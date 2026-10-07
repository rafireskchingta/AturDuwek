import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bell, Search, Settings2, Calendar, Coffee, Droplets, Zap, ArrowRightLeft, Edit, Trash2, X } from 'lucide-react';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek, isSameMonth, isSameDay, addDays } from 'date-fns';
import { id } from 'date-fns/locale';

export default function History() {
  const [selectedFilter, setSelectedFilter] = useState('Bulan Ini (Okt)');
  const [selectedCategory, setSelectedCategory] = useState('Semua (18)');
  const [showCalendarFilter, setShowCalendarFilter] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState<any>(null);

  // For the Calendar Modal
  const [currentDate, setCurrentDate] = useState(new Date(2026, 8, 12)); 
  const [selectedDate, setSelectedDate] = useState(new Date(2026, 8, 12));

  // Calendar logic
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart, { weekStartsOn: 0 }); // Sunday start
  const endDate = endOfWeek(monthEnd, { weekStartsOn: 0 });

  const dateFormat = "d";
  const rows = [];
  let days = [];
  let day = startDate;

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      const formattedDate = format(day, dateFormat);
      const cloneDay = day;
      const isCurrentMonth = isSameMonth(day, monthStart);
      const isSelected = isSameDay(day, selectedDate);

      days.push(
        <div 
          className={`flex flex-col items-center justify-center h-8 w-8 text-xs cursor-pointer ${
            !isCurrentMonth ? 'text-gray-300' : 
            isSelected ? 'bg-[#E48729] text-white rounded-full shadow-md font-bold' : 
            'text-[#3E2723] hover:bg-[#F3E5D8] rounded-full'
          }`}
          key={day.toString()}
          onClick={() => {
            setSelectedDate(cloneDay);
          }}
        >
          {formattedDate}
        </div>
      );
      day = addDays(day, 1);
    }
    rows.push(<div className="flex justify-between w-full mb-1" key={day.toString()}>{days}</div>);
    days = [];
  }
  const weekDays = ['MIN', 'SEN', 'SEL', 'RAB', 'KAM', 'JUM', 'SAB'];

  return (
    <div className="w-full bg-[#FAF6F0] p-6 pb-24 flex flex-col items-center">
      
      {/* Header */}
      <header className="w-full flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Logo" className="w-10 h-10 object-contain bg-white rounded-full p-0.5 border border-[#F3E5D8]" />
          <div>
            <h1 className="font-extrabold text-sm text-[#3E2723] flex items-center gap-1">AturDuwek <span className="bg-[#F8EFE6] text-[#A0522D] text-[8px] px-1.5 py-0.5 rounded">KOS</span></h1>
            <p className="text-[9px] text-[#5D4037]">Riwayat & Catatan Keuangan</p>
          </div>
        </div>
        <Link to="?notifications=true" className="p-2 bg-[#F8EFE6] rounded-full border border-[#E8D5C4] relative">
          <Bell size={16} className="text-[#3E2723]" />
        </Link>
      </header>

      {/* Title */}
      <div className="w-full flex justify-between items-center mb-4">
        <div>
          <h2 className="font-extrabold text-2xl text-[#3E2723] leading-tight mb-1">Riwayat Transaksi</h2>
          <p className="text-[10px] text-[#5D4037]">Catatan keluar masuk uang kos bulan ini</p>
        </div>
        <span className="bg-[#E6F7E9] text-[#27AE60] text-[9px] font-bold px-2 py-1 rounded-full flex items-center gap-1">
          <div className="w-1.5 h-1.5 bg-[#27AE60] rounded-full"></div> 18 Transaksi
        </span>
      </div>

      {/* Search */}
      <div className="w-full bg-white border border-[#E8D5C4] rounded-2xl flex items-center px-4 py-2 mb-4 shadow-sm">
        <Search size={16} className="text-[#A89F95] mr-2" />
        <input type="text" placeholder="Cari transaksi, warteg, galon, kos..." className="flex-1 bg-transparent outline-none text-xs text-[#3E2723] placeholder-[#A89F95]" />
        <Settings2 size={16} className="text-[#A89F95] ml-2" />
      </div>

      {/* Filters (Date) */}
      <div className="w-full flex gap-2 overflow-x-auto scrollbar-hide mb-3 pb-1">
        {['Hari ini', 'Minggu ini', 'Bulan ini (Okt) ✓'].map(filter => (
          <button 
            key={filter}
            onClick={() => setSelectedFilter(filter)}
            className={`whitespace-nowrap px-4 py-1.5 rounded-full text-[10px] font-bold border transition-colors ${
              selectedFilter === filter 
                ? 'bg-[#E48729] text-white border-[#E48729]' 
                : 'bg-white text-[#5D4037] border-[#E8D5C4]'
            }`}
          >
            {filter}
          </button>
        ))}
        <button onClick={() => setShowCalendarFilter(true)} className="whitespace-nowrap px-4 py-1.5 rounded-full text-[10px] font-bold bg-white text-[#5D4037] border border-[#E8D5C4] flex items-center gap-1">
          <Calendar size={12} className="text-[#8B5E34]" /> Pilih Kalender
        </button>
      </div>

      {/* Filters (Category) */}
      <div className="w-full flex gap-2 overflow-x-auto scrollbar-hide mb-6 pb-1">
        {['Semua (18)', '🍲 Makanan', '🏠 Sewa Kos', '🚲 Transp'].map(cat => (
          <button 
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`whitespace-nowrap px-3 py-1.5 rounded-full text-[9px] font-bold border transition-colors flex items-center gap-1 ${
              selectedCategory === cat 
                ? 'bg-[#3E2723] text-white border-[#3E2723]' 
                : 'bg-white text-[#5D4037] border-[#E8D5C4]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Arus Kas Card */}
      <div className="w-full bg-[#FFFBF5] border border-[#F3E5D8] rounded-3xl p-5 mb-6 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <span className="text-[9px] font-bold text-[#5D4037] flex items-center gap-1 uppercase tracking-wider">
            <Calendar size={10} className="text-[#8B5E34]" /> ARUS KAS SEPTEMBER 2026
          </span>
          <span className="bg-[#E6F7F5] text-[#2CA9A1] text-[9px] font-bold px-2 py-0.5 rounded-full">Aman Terkendali</span>
        </div>
        <p className="text-[10px] font-bold text-[#5D4037] mb-1">SISA BERSIH BULAN INI</p>
        <div className="flex items-end gap-2 mb-4">
          <span className="font-extrabold text-[28px] text-[#3E2723] leading-none">Rp 1.050.000</span>
          <span className="text-[10px] font-bold text-[#27AE60] mb-1">+42% tabungan</span>
        </div>
        <div className="flex gap-4 mb-5">
          <div className="flex-1 bg-white border border-[#F0E6DD] rounded-xl p-3">
            <span className="text-[9px] font-bold text-[#5D4037] flex items-center gap-1">
              <div className="w-1.5 h-1.5 bg-[#27AE60] rounded-full"></div> Total Masuk
            </span>
            <p className="font-extrabold text-sm text-[#27AE60] mt-1">+Rp 2.500.000</p>
            <p className="text-[8px] text-[#A89F95] mt-0.5">Kiriman Ortu & Side-job</p>
          </div>
          <div className="flex-1 bg-white border border-[#F0E6DD] rounded-xl p-3">
            <span className="text-[9px] font-bold text-[#5D4037] flex items-center gap-1">
              <div className="w-1.5 h-1.5 bg-[#D93E27] rounded-full"></div> Total Keluar
            </span>
            <p className="font-extrabold text-sm text-[#D93E27] mt-1">-Rp 1.450.000</p>
            <p className="text-[8px] text-[#A89F95] mt-0.5">58% dari total jatah</p>
          </div>
        </div>
        <div className="w-full">
          <div className="flex justify-between items-center mb-1 text-[8px] font-bold">
            <span className="text-[#A89F95]">Rasio Belanja Kos</span>
            <span className="text-[#3E2723]">58% Terpakai (17 Hari Tersisa)</span>
          </div>
          <div className="w-full h-1.5 bg-[#E8D5C4] rounded-full flex overflow-hidden">
            <div className="h-full bg-[#E48729]" style={{ width: '58%' }}></div>
          </div>
        </div>
      </div>

      {/* History List */}
      <div className="w-full flex flex-col gap-3">
        {/* Date Group 1 */}
        <div className="flex justify-between items-center mb-1">
          <h3 className="text-[11px] font-bold text-[#3E2723]">Hari ini, 14 Sep 2026 <span className="bg-[#FDE47F] text-[#3E2723] px-1.5 py-0.5 rounded ml-1">2 Catatan</span></h3>
          <span className="text-[10px] font-bold text-[#D93E27]">-Rp 29.000</span>
        </div>

        <div onClick={() => setSelectedTransaction({ name: 'Nasi Padang + Es Teh Jumbo', amount: '-Rp 22.000', cat: 'Makanan (Warteg)', time: 'Senin, 14 Sep 2026 • 12:45 WIB', icon: '🍲' })} className="bg-white border border-[#E8D5C4] rounded-2xl p-4 shadow-sm flex gap-3 cursor-pointer">
          <div className="w-10 h-10 bg-[#FBEFDF] text-xl rounded-full flex items-center justify-center flex-shrink-0">🍲</div>
          <div className="flex-1">
            <div className="flex justify-between items-start mb-1">
              <h4 className="font-bold text-[#3E2723] text-xs leading-tight">Nasi Padang + Es Teh<br/>Jumbo</h4>
              <span className="font-bold text-[#D93E27] text-sm">-Rp 22.000</span>
            </div>
            <div className="flex justify-between items-center text-[8px] text-[#A89F95] font-medium">
              <span>12:45 WIB • <span className="bg-[#F8EFE6] px-1.5 rounded">Tunai Kos</span> • Warteg</span>
              <span className="text-[#E48729]">Lihat Detail →</span>
            </div>
          </div>
        </div>

        <div className="bg-white border border-[#E8D5C4] rounded-2xl p-4 shadow-sm flex gap-3 cursor-pointer">
          <div className="w-10 h-10 bg-[#E6F7F5] text-xl rounded-full flex items-center justify-center flex-shrink-0 text-[#2CA9A1]"><Droplets size={20}/></div>
          <div className="flex-1">
            <div className="flex justify-between items-start mb-1">
              <h4 className="font-bold text-[#3E2723] text-xs">Isi Ulang Galon Aqua</h4>
              <span className="font-bold text-[#D93E27] text-sm">-Rp 7.000</span>
            </div>
            <div className="flex justify-between items-center text-[8px] text-[#A89F95] font-medium">
              <span>09:15 WIB • <span className="bg-[#F8EFE6] px-1.5 rounded">QRIS BCA</span> • Kebutuhan Kos</span>
              <span>Sembako</span>
            </div>
          </div>
        </div>

        {/* Date Group 2 */}
        <div className="flex justify-between items-center mt-3 mb-1">
          <h3 className="text-[11px] font-bold text-[#3E2723]">Kemarin, 13 Okt 2024</h3>
          <span className="text-[10px] font-bold text-[#D93E27]">-Rp 95.000</span>
        </div>

        <div className="bg-white border border-[#E8D5C4] rounded-2xl p-4 shadow-sm flex gap-3 cursor-pointer">
          <div className="w-10 h-10 bg-[#F8EFE6] text-xl rounded-full flex items-center justify-center flex-shrink-0 text-[#8B5E34]"><Coffee size={20}/></div>
          <div className="flex-1">
            <div className="flex justify-between items-start mb-1">
              <h4 className="font-bold text-[#3E2723] text-xs leading-tight">Ngopi & Nugas di Kafe<br/>Kampus</h4>
              <span className="font-bold text-[#D93E27] text-sm">-Rp 45.000</span>
            </div>
            <div className="flex justify-between items-center text-[8px] text-[#A89F95] font-medium">
              <span>16:30 WIB • <span className="bg-[#F8EFE6] px-1.5 rounded">GoPay</span> • Hiburan</span>
              <span>WiFi & Nugas</span>
            </div>
          </div>
        </div>

        <div className="bg-white border border-[#E8D5C4] rounded-2xl p-4 shadow-sm flex gap-3 cursor-pointer">
          <div className="w-10 h-10 bg-[#FDF4E3] text-xl rounded-full flex items-center justify-center flex-shrink-0 text-[#D4A017]"><Zap size={20}/></div>
          <div className="flex-1">
            <div className="flex justify-between items-start mb-1">
              <h4 className="font-bold text-[#3E2723] text-xs leading-tight">Token Listrik Kos Kamar<br/>14</h4>
              <span className="font-bold text-[#D93E27] text-sm">-Rp 50.000</span>
            </div>
            <div className="flex justify-between items-center text-[8px] text-[#A89F95] font-medium">
              <span>10:00 WIB • <span className="bg-[#F8EFE6] px-1.5 rounded">M-Banking</span> • Tagihan</span>
              <span>Jatah 2 Minggu</span>
            </div>
          </div>
        </div>

        {/* Date Group 3 */}
        <div className="flex justify-between items-center mt-3 mb-1">
          <h3 className="text-[11px] font-bold text-[#3E2723]">1 Okt 2024 <span className="bg-[#F8EFE6] text-[#A89F95] px-1.5 py-0.5 rounded ml-1">Awal Periode Kos</span></h3>
          <span className="text-[10px] font-bold text-[#27AE60]">+Rp 1.700.000 Bersih</span>
        </div>

        <div className="bg-[#E6F7E9] border border-[#27AE60] border-opacity-30 rounded-2xl p-4 shadow-sm flex gap-3 cursor-pointer">
          <div className="w-10 h-10 bg-[#C8E6C9] text-xl rounded-full flex items-center justify-center flex-shrink-0">💌</div>
          <div className="flex-1">
            <div className="flex justify-between items-start mb-1">
              <h4 className="font-bold text-[#3E2723] text-xs leading-tight">Transfer Kiriman Uang<br/>Ortu</h4>
              <span className="font-bold text-[#27AE60] text-sm">+Rp 2.500.000</span>
            </div>
            <div className="flex justify-between items-center text-[8px] text-[#A89F95] font-medium">
              <span>08:00 WIB • <span className="bg-white px-1.5 rounded border border-[#E8D5C4]">Bank Mandiri</span> • Pemasukan Tetap</span>
              <span>Uang Bulanan Kos</span>
            </div>
          </div>
        </div>
      </div>

      {/* Calendar Filter Popup */}
      {showCalendarFilter && (
        <div 
          className="fixed inset-0 z-[100] bg-black/40 flex items-center justify-center p-6 animate-fade-in-simple"
          onClick={() => setShowCalendarFilter(false)}
        >
          <div 
            className="w-full max-w-xs bg-white rounded-3xl p-5 shadow-2xl relative animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={() => setShowCalendarFilter(false)} className="absolute top-4 right-4 text-[#A89F95]"><X size={18}/></button>
            <h3 className="font-bold text-[#3E2723] text-sm mb-4">Pilih Tanggal</h3>
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-extrabold text-sm text-[#3E2723]">{format(currentDate, 'MMMM yyyy', { locale: id })}</h2>
              <div className="flex gap-2">
                <button onClick={() => setCurrentDate(subMonths(currentDate, 1))} className="text-[#8B5E34]"><ArrowRightLeft size={16} className="rotate-180"/></button>
                <button onClick={() => setCurrentDate(addMonths(currentDate, 1))} className="text-[#8B5E34]"><ArrowRightLeft size={16}/></button>
              </div>
            </div>
            <div className="flex justify-between w-full mb-2">
              {weekDays.map(d => <div key={d} className="w-8 text-center text-[8px] font-bold text-[#5D4037]">{d}</div>)}
            </div>
            <div className="mb-4">{rows}</div>
          </div>
        </div>
      )}

      {/* Rincian Transaksi Popup */}
      {selectedTransaction && (
        <div className="fixed inset-0 z-[100] bg-black/40 flex flex-col justify-end animate-fade-in-simple">
          <div className="bg-[#FAF6F0] w-full max-w-[428px] mx-auto rounded-t-[32px] p-6 shadow-2xl relative animate-slide-up pb-10">
            <button onClick={() => setSelectedTransaction(null)} className="absolute top-6 right-6 w-6 h-6 bg-[#F3E5D8] rounded-full flex items-center justify-center text-[#5D4037]">
              <X size={14}/>
            </button>
            <h3 className="font-bold text-[#3E2723] flex items-center gap-2 mb-6">
              <span className="bg-[#F8EFE6] p-1.5 rounded-lg border border-[#E8D5C4]"><FileTextIcon /></span> Rincian Transaksi
            </h3>
            
            <div className="bg-white border border-[#F3E5D8] rounded-3xl p-6 text-center mb-6 shadow-sm">
              <div className="w-12 h-12 bg-[#FBEFDF] text-2xl rounded-full flex items-center justify-center mx-auto mb-3">
                {selectedTransaction.icon}
              </div>
              <h2 className="font-extrabold text-lg text-[#3E2723] leading-tight mb-2">{selectedTransaction.name}</h2>
              <p className="font-extrabold text-[28px] text-[#D93E27] leading-none mb-2">{selectedTransaction.amount}</p>
              <span className="bg-[#FDEAEA] text-[#D93E27] text-[9px] font-bold px-2 py-1 rounded-full">Pengeluaran Terbayar</span>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center border-b border-[#E8D5C4] pb-2">
                <span className="text-[10px] text-[#A89F95]">Kategori</span>
                <span className="text-[10px] font-bold text-[#3E2723] flex items-center gap-1">{selectedTransaction.icon} {selectedTransaction.cat}</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#E8D5C4] pb-2">
                <span className="text-[10px] text-[#A89F95]">Waktu & Tanggal</span>
                <span className="text-[10px] font-bold text-[#3E2723]">{selectedTransaction.time}</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#E8D5C4] pb-2">
                <span className="text-[10px] text-[#A89F95]">Dompet / Sumber</span>
                <span className="bg-[#F8EFE6] text-[#3E2723] text-[9px] font-bold px-2 py-1 rounded">Tunai Dompet Kos</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#E8D5C4] pb-2">
                <span className="text-[10px] text-[#A89F95]">Pos Anggaran</span>
                <div className="text-right">
                  <p className="text-[10px] font-bold text-[#3E2723]">Pos Makan Harian</p>
                  <p className="text-[8px] font-bold text-[#27AE60]">Sisa Jatah Pos: Rp 468.000</p>
                </div>
              </div>
              <div className="flex justify-between items-start pt-2">
                <span className="text-[10px] text-[#A89F95]">Catatan Kos</span>
                <span className="bg-[#F8EFE6] text-[#5D4037] text-[9px] font-medium p-2 rounded-xl text-right max-w-[200px]">
                  "Makan siang rendang + perkedel + es teh tawar jumbo di depan gerbang kampus."
                </span>
              </div>
            </div>

            <div className="flex gap-3">
              <button className="flex-1 bg-white border border-[#E8D5C4] text-[#8B5E34] text-[11px] font-bold py-3 rounded-2xl flex items-center justify-center gap-2 shadow-sm">
                <Edit size={14}/> Edit Transaksi
              </button>
              <button className="flex-1 bg-[#FDEAEA] text-[#D93E27] text-[11px] font-bold py-3 rounded-2xl flex items-center justify-center gap-2 shadow-sm">
                <Trash2 size={14}/> Hapus
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function FileTextIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
  )
}
