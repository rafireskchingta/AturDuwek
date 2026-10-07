import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Bell, ChevronLeft, ChevronRight, TrendingUp, AlertCircle, ShoppingCart, Calendar as CalendarIcon, ArrowRightLeft, PlusSquare, Home, CheckCircle } from 'lucide-react';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek, isSameMonth, isSameDay, addDays, getWeek } from 'date-fns';
import { id } from 'date-fns/locale';

export default function Calendar() {
  const navigate = useNavigate();
  const [currentDate, setCurrentDate] = useState(new Date(2026, 8, 12)); // Sep 2026 as per image, but dynamic
  const [selectedDate, setSelectedDate] = useState(new Date(2026, 8, 12));

  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));
  const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));
  const onDateClick = (day: Date) => setSelectedDate(day);

  // Calendar logic
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart, { weekStartsOn: 0 }); // Sunday start
  const endDate = endOfWeek(monthEnd, { weekStartsOn: 0 });

  const dateFormat = "d";
  const rows = [];
  let days = [];
  let day = startDate;
  let formattedDate = "";

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, dateFormat);
      const cloneDay = day;
      const isCurrentMonth = isSameMonth(day, monthStart);
      const isSelected = isSameDay(day, selectedDate);
      
      // Dummy dots based on date just to look like image
      const hasIncome = isCurrentMonth && (day.getDate() === 1 || day.getDate() === 10 || day.getDate() === 15);
      const hasExpense = isCurrentMonth && (day.getDate() === 15 || day.getDate() === 20 || day.getDate() === 25);
      const hasFood = isCurrentMonth && (day.getDate() === 4 || day.getDate() === 12);

      days.push(
        <div 
          className={`flex flex-col items-center justify-center h-10 w-10 relative cursor-pointer ${
            !isCurrentMonth ? 'text-gray-300' : 
            isSelected ? 'bg-[#E48729] text-white rounded-full shadow-md font-bold' : 
            'text-[#3E2723] hover:bg-[#F3E5D8] rounded-full'
          }`}
          key={day.toString()}
          onClick={() => onDateClick(cloneDay)}
        >
          <span className="z-10">{formattedDate}</span>
          <div className="flex gap-0.5 absolute bottom-1">
             {hasIncome && <div className={`w-1 h-1 rounded-full ${isSelected ? 'bg-white' : 'bg-[#27AE60]'}`}></div>}
             {hasExpense && <div className={`w-1 h-1 rounded-full ${isSelected ? 'bg-white' : 'bg-[#D93E27]'}`}></div>}
             {hasFood && <div className={`w-1 h-1 rounded-full ${isSelected ? 'bg-white' : 'bg-[#F4B41A]'}`}></div>}
          </div>
        </div>
      );
      day = addDays(day, 1);
    }
    rows.push(<div className="flex justify-between w-full mb-1" key={day.toString()}>{days}</div>);
    days = [];
  }

  const weekDays = ['MIN', 'SEN', 'SEL', 'RAB', 'KAM', 'JUM', 'SAB'];

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
          <h1 className="font-extrabold text-xl text-[#3E2723]">Kalender Anggaran</h1>
        </div>
        <div className="flex gap-2">
          <div className="bg-white border border-[#E8D5C4] px-3 py-1 rounded-full text-xs font-bold text-[#8B5E34] flex items-center gap-1 shadow-sm">
            {format(currentDate, 'MMM yyyy', { locale: id })} <span className="text-[8px]">▼</span>
          </div>
          <Link to="?notifications=true" className="p-2 bg-white rounded-full border border-[#E8D5C4] shadow-sm">
            <Bell size={16} className="text-[#3E2723]" />
          </Link>
        </div>
      </header>

      {/* Calendar Card */}
      <div className="w-full bg-[#FDFBF9] border border-[#E8D5C4] rounded-3xl p-5 mb-6 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <h2 className="font-extrabold text-lg text-[#3E2723]">{format(currentDate, 'MMMM yyyy', { locale: id })}</h2>
            <span className="bg-[#F8EFE6] text-[#A0522D] text-[10px] font-bold px-2 py-0.5 rounded-full">
              Minggu ke-{getWeek(selectedDate)}
            </span>
          </div>
          <div className="flex gap-2">
            <button onClick={prevMonth} className="text-[#8B5E34] hover:text-[#3E2723]"><ChevronLeft size={20}/></button>
            <button onClick={nextMonth} className="text-[#8B5E34] hover:text-[#3E2723]"><ChevronRight size={20}/></button>
          </div>
        </div>

        <div className="flex items-center gap-3 text-[9px] font-bold text-[#5D4037] mb-4">
          <span className="flex items-center gap-1"><div className="w-1.5 h-1.5 bg-[#27AE60] rounded-full"></div> Uang Masuk</span>
          <span className="flex items-center gap-1"><div className="w-1.5 h-1.5 bg-[#D93E27] rounded-full"></div> Jatuh Tempo</span>
          <span className="flex items-center gap-1"><div className="w-1.5 h-1.5 bg-[#F4B41A] rounded-full"></div> Nongkrong/Makan</span>
        </div>

        <div className="flex justify-between w-full mb-2">
          {weekDays.map(day => (
            <div key={day} className="w-10 text-center text-[10px] font-bold text-[#5D4037]">{day}</div>
          ))}
        </div>
        
        <div className="mb-4">
          {rows}
        </div>

        <div className="border-t border-dashed border-[#E8D5C4] pt-4 flex justify-between items-center text-xs">
          <div className="flex items-center gap-1.5 text-[#5D4037] font-medium">
            <CalendarIcon size={14} className="text-[#8B5E34]" /> Hari ini: {format(selectedDate, 'EEEE, d MMM', { locale: id })}
          </div>
          <button className="font-bold text-[#A0522D] flex items-center gap-1">
            Rencana Hari Ini (1) <ArrowRightLeft size={12} />
          </button>
        </div>
      </div>

      {/* Ringkasan Arus Kas */}
      <div className="w-full bg-[#FFFBF5] border border-[#F3E5D8] rounded-3xl p-5 mb-6 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-[#3E2723] flex items-center gap-1">
            <TrendingUp size={16} className="text-[#8B5E34]"/> Ringkasan Arus Kas Bulan Ini
          </h3>
          <span className="text-[10px] font-bold text-[#A0522D] bg-white border border-[#E8D5C4] px-2 py-0.5 rounded-full">Oktober</span>
        </div>
        <div className="flex gap-3 mb-3">
          <div className="flex-1 bg-white border border-[#F0E6DD] rounded-xl p-3">
            <div className="flex justify-between items-start mb-1">
              <span className="text-[10px] font-bold text-[#5D4037]">Uang Masuk</span>
              <div className="w-5 h-5 bg-[#E6F7E9] rounded-full flex items-center justify-center text-[#27AE60]"><TrendingUp size={12}/></div>
            </div>
            <p className="font-extrabold text-[#27AE60] text-sm">Rp 2.500.000</p>
            <p className="text-[8px] text-[#A89F95]">Tgl 1 & 15 (2x Transfer)</p>
          </div>
          <div className="flex-1 bg-white border border-[#F0E6DD] rounded-xl p-3">
            <div className="flex justify-between items-start mb-1">
              <span className="text-[10px] font-bold text-[#5D4037]">Tagihan Wajib</span>
              <div className="w-5 h-5 bg-[#FDEAEA] rounded-full flex items-center justify-center text-[#D93E27]"><AlertCircle size={12}/></div>
            </div>
            <p className="font-extrabold text-[#D93E27] text-sm">Rp 950.000</p>
            <p className="text-[8px] text-[#A89F95]">Sisa 2 tagihan menunggu</p>
          </div>
        </div>
        <div className="w-full bg-white border border-[#F0E6DD] rounded-xl p-3 flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <div className="w-8 h-8 bg-[#FDF4E3] rounded-full flex items-center justify-center text-[#D4A017]"><ShoppingCart size={14}/></div>
            <div>
              <p className="text-[9px] text-[#5D4037]">Rata-rata Belanja Harian</p>
              <p className="font-extrabold text-[#3E2723] text-xs">Rp 38.000 <span className="font-normal text-[9px] text-[#A89F95]">/ hari</span></p>
            </div>
          </div>
          <span className="bg-[#E6F7F5] text-[#2CA9A1] text-[10px] font-bold px-2 py-1 rounded-md">Sesuai Budget</span>
        </div>
      </div>

      {/* Agenda */}
      <div className="w-full flex justify-between items-center mb-3">
        <h3 className="font-extrabold text-lg text-[#3E2723]">Agenda Keuangan Mahasiswa</h3>
        <span className="text-[10px] font-bold text-[#8B5E34] flex items-center gap-0.5">Tambah <PlusSquare size={12}/></span>
      </div>
      
      <div className="w-full bg-[#FFFBF5] border border-[#F3E5D8] rounded-2xl p-4 flex gap-3 relative overflow-hidden shadow-sm mb-4">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#D93E27]"></div>
        <div className="w-12 h-12 bg-[#FDEAEA] rounded-xl border border-[#F9DADA] flex flex-col items-center justify-center text-[#D93E27] flex-shrink-0">
          <span className="text-[9px] font-bold">15 OKT</span>
          <Home size={16}/>
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start mb-1">
            <h4 className="font-bold text-sm text-[#3E2723]">Sewa Kos Kamar 14</h4>
            <span className="bg-[#FDEAEA] text-[#D93E27] text-[8px] font-bold px-1.5 py-0.5 rounded">⚠️ 3 Hari Lagi</span>
          </div>
          <p className="text-[10px] text-[#5D4037] mb-2">Ibu Kos Bu Slamet (Periode Okt)</p>
          <div className="flex justify-between items-end">
            <div>
              <p className="text-[8px] text-[#A89F95]">Nominal Tagihan:</p>
              <p className="font-extrabold text-[#D93E27] text-sm">Rp 800.000</p>
            </div>
            <button className="bg-[#8B5E34] text-white text-[10px] font-bold px-3 py-1.5 rounded-lg flex items-center gap-1 shadow-sm">
              <CheckCircle size={10} /> Bayar / Lunas
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
