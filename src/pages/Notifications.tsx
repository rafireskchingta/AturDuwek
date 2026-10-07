import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Bell, AlertCircle, CheckCircle } from 'lucide-react';

export default function Notifications() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background px-6 pt-14 pb-24">
      <div className="flex items-center justify-between mb-8">
        <button onClick={() => navigate(-1)} className="inline-flex items-center gap-1 bg-[#D99A5A] text-[#5D3A1A] font-semibold text-xs px-3 py-1.5 rounded-full hover:bg-[#C98A4A]">
          <ArrowLeft size={14} /> Kembali
        </button>
        <h1 className="font-extrabold text-lg text-[#3E2723]">Notifikasi</h1>
        <div className="w-8"></div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="bg-[#FFFBF5] border border-[#E48729] rounded-2xl p-4 flex gap-4 shadow-sm relative overflow-hidden">
           <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#E48729]"></div>
           <div className="w-10 h-10 bg-[#FBEFDF] rounded-xl flex items-center justify-center text-[#E48729] flex-shrink-0"><Bell size={20}/></div>
           <div>
             <h4 className="font-bold text-sm text-[#3E2723] mb-1">Jangan lupa catat makan malam!</h4>
             <p className="text-xs text-[#5D4037]">Sisa uang makanmu hari ini masih Rp 14.500 lho.</p>
             <p className="text-[10px] text-[#A89F95] mt-2">1 jam yang lalu</p>
           </div>
        </div>
        <div className="bg-white border border-[#F3E5D8] rounded-2xl p-4 flex gap-4 shadow-sm relative overflow-hidden">
           <div className="w-10 h-10 bg-[#FDEAEA] rounded-xl flex items-center justify-center text-[#D93E27] flex-shrink-0"><AlertCircle size={20}/></div>
           <div>
             <h4 className="font-bold text-sm text-[#3E2723] mb-1">Tagihan Kos Jatuh Tempo</h4>
             <p className="text-xs text-[#5D4037]">Sewa Kos Kamar 14 jatuh tempo dalam 3 hari.</p>
             <p className="text-[10px] text-[#A89F95] mt-2">5 jam yang lalu</p>
           </div>
        </div>
        <div className="bg-white border border-[#F3E5D8] rounded-2xl p-4 flex gap-4 shadow-sm relative overflow-hidden">
           <div className="w-10 h-10 bg-[#E6F7E9] rounded-xl flex items-center justify-center text-[#27AE60] flex-shrink-0"><CheckCircle size={20}/></div>
           <div>
             <h4 className="font-bold text-sm text-[#3E2723] mb-1">Yeay! Kiriman Bulanan Masuk</h4>
             <p className="text-xs text-[#5D4037]">Dana sebesar Rp 2.500.000 telah masuk ke dompetmu.</p>
             <p className="text-[10px] text-[#A89F95] mt-2">1 Okt 2024</p>
           </div>
        </div>
      </div>
    </div>
  );
}
