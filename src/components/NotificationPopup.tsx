import { useState } from 'react';
import { X, BellRing, Utensils, MapPin, Calendar, PlusCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function NotificationPopup({ onClose }: { onClose: () => void }) {
  const navigate = useNavigate();
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 400); // Wait for exit animation
  };

  return (
    <div className={`absolute inset-0 z-[100] bg-black/40 flex flex-col justify-end ${isClosing ? 'animate-fade-out-simple' : 'animate-fade-in-simple'}`} onClick={handleClose}>
      <div 
        className={`bg-[#FAF6F0] w-full h-[90vh] rounded-t-[32px] shadow-2xl flex flex-col overflow-hidden ${isClosing ? 'animate-slide-down' : 'animate-slide-up'}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Handle */}
        <div className="w-full flex justify-center pt-3 pb-1">
          <div className="w-12 h-1.5 bg-[#E8D5C4] rounded-full"></div>
        </div>

        {/* Header */}
        <div className="px-6 py-4 flex justify-between items-center border-b border-[#E8D5C4]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#FBEFDF] text-[#D97A27] rounded-full flex items-center justify-center relative">
              <BellRing size={20} />
              <div className="absolute -bottom-1 -right-1 text-base">🔔</div>
            </div>
            <div>
              <h2 className="font-extrabold text-lg text-[#3E2723] leading-tight">Pengingat & Alarm Finansial Kos</h2>
              <p className="text-[10px] text-[#5D4037] font-semibold">3 pemberitahuan penting hari ini</p>
            </div>
          </div>
          <button onClick={handleClose} className="p-2 text-[#5D4037] hover:bg-[#F3E5D8] rounded-full">
            <X size={20} />
          </button>
        </div>
        
        <div className="px-6 py-2 text-right">
          <button className="text-[10px] font-bold text-[#A0522D]">Tandai Sudah Dibaca</button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 pb-24 flex flex-col gap-4">
          
          {/* Notification 1 */}
          <div className="bg-white border border-[#F3E5D8] rounded-2xl p-4 shadow-sm flex gap-3 relative">
            <div className="w-10 h-10 bg-[#FDEAEA] text-[#D93E27] rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
              <Utensils size={18} />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start mb-1">
                <span className="bg-[#FDEAEA] text-[#D93E27] text-[8px] font-bold px-1.5 py-0.5 rounded">BUDGET ALERT</span>
                <span className="text-[9px] text-[#A89F95]">10 mnt lalu</span>
              </div>
              <h4 className="font-bold text-[#3E2723] text-sm leading-tight mb-1">Budget Makananmu sudah mencapai 85%!</h4>
              <p className="text-[10px] text-[#5D4037] leading-relaxed mb-3">
                Sisa jatah makan minggu ini tinggal <span className="text-[#D93E27]">Rp 65.000</span>. Saran: kurangi pesan makanan online via ojol, saatnya masak bareng anak kos!
              </p>
              <div className="flex gap-2">
                <button className="bg-[#F8EFE6] text-[#3E2723] text-[9px] font-bold px-3 py-1.5 rounded-lg flex-1">Atur Limit Ulang</button>
                <button className="bg-[#F8EFE6] text-[#8B5E34] text-[9px] font-bold px-3 py-1.5 rounded-lg flex-1">Lihat Resep Murah</button>
              </div>
            </div>
          </div>

          {/* Notification 2 */}
          <div className="bg-white border border-[#F3E5D8] rounded-2xl p-4 shadow-sm flex gap-3 relative">
            <div className="w-10 h-10 bg-[#FBEFDF] text-[#D97A27] rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
              <MapPin size={18} />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start mb-1">
                <span className="bg-[#FBEFDF] text-[#D97A27] text-[8px] font-bold px-1.5 py-0.5 rounded">TAGIHAN KOS</span>
                <span className="text-[9px] text-[#A89F95]">2 jam lalu</span>
              </div>
              <h4 className="font-bold text-[#3E2723] text-sm leading-tight mb-1">Pembayaran sewa kos jatuh tempo 3 hari lagi!</h4>
              <p className="text-[10px] text-[#5D4037] leading-relaxed mb-3">
                Pastikan saldo <span className="text-[#D97A27]">Rp 800.000</span> tetap aman di pos sewa kamar agar Ibu Kos tidak mengetuk pintu kamar 14.
              </p>
              <div className="bg-[#F8EFE6] rounded-xl p-2 flex justify-between items-center">
                <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#3E2723]">
                  <span className="text-lg">🏦</span> Rekening Ibu Kos (BCA)
                </div>
                <button className="bg-[#8B5E34] text-white text-[9px] font-bold px-3 py-1.5 rounded-lg">Tandai Lunas</button>
              </div>
            </div>
          </div>

          {/* Notification 3 */}
          <div className="bg-white border border-[#F3E5D8] rounded-2xl p-4 shadow-sm flex gap-3 relative">
            <div className="w-10 h-10 bg-[#FDE47F] text-[#3E2723] rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
              <Calendar size={18} />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start mb-1">
                <span className="bg-[#FDE47F] text-[#3E2723] text-[8px] font-bold px-1.5 py-0.5 rounded">DAILY REMINDER</span>
                <span className="text-[9px] text-[#A89F95]">17.45 WIB</span>
              </div>
              <h4 className="font-bold text-[#3E2723] text-sm leading-tight mb-1">Belum mencatat pengeluaran sore ini?</h4>
              <p className="text-[10px] text-[#5D4037] leading-relaxed mb-3">
                Catat Nasi Telur atau es teh kamu sekarang agar jatah harianmu akurat dan tidak bocor halus!
              </p>
              <button onClick={() => { handleClose(); setTimeout(() => navigate('/app/transactions'), 400); }} className="w-full bg-[#E48729] text-white text-[10px] font-bold py-2 rounded-xl flex justify-center items-center gap-1 shadow-sm">
                <PlusCircle size={12} /> Catat Pengeluaran Cepat (+ Nasi Telur)
              </button>
            </div>
          </div>
        </div>

        {/* Footer Button */}
        <div className="absolute bottom-6 left-6 right-6">
          <button onClick={handleClose} className="w-full bg-[#E8D5C4] text-[#3E2723] font-bold py-3.5 rounded-2xl shadow-sm hover:opacity-90">
            Tutup Panel
          </button>
        </div>
      </div>
    </div>
  );
}
