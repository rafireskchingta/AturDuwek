import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Edit3, Smile, Utensils, Home, Bike, Wifi, BookOpen, Coffee, ShoppingBag, Pill, FileText, Wallet, Building2, QrCode, Calendar, CheckCircle } from 'lucide-react';

export default function Transactions() {
  const navigate = useNavigate();

  const [amount, setAmount] = useState<number>(28000);
  const [category, setCategory] = useState<string>('Warteg');
  const [notes, setNotes] = useState<string>('Pecel Lele Mas Tri + Es Jeruk');
  const [source, setSource] = useState<string>('Tunai Kos');

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, '');
    setAmount(val ? parseInt(val) : 0);
  };

  return (
    <div className="w-full bg-transparent px-6 pt-14 pb-6 flex flex-col items-center">
      <div className="w-full self-start mb-6">
        <button onClick={() => navigate('/app/dashboard')} className="inline-flex items-center gap-1 bg-[#D99A5A] text-[#5D3A1A] font-semibold text-xs px-3 py-1.5 rounded-full hover:bg-[#C98A4A] transition-colors">
          <ArrowLeft size={14} /> Kembali
        </button>
      </div>

      <div className="bg-white border border-[#F3E5D8] rounded-full px-5 py-2 mb-6 flex items-center gap-2 shadow-sm">
        <Edit3 size={16} className="text-[#8B5E34]" />
        <span className="font-bold text-[#3E2723] text-sm">Input Manual</span>
      </div>

      {/* Nominal */}
      <div className="w-full bg-white border border-[#F3E5D8] rounded-3xl p-6 text-center mb-4 shadow-sm">
        <h3 className="text-[10px] font-bold text-[#8B5E34] uppercase tracking-widest mb-2">NOMINAL TRANSAKSI</h3>
        <div className="flex justify-center items-center mb-6 relative group h-12">
          <span className="text-2xl font-bold text-[#8B5E34] mr-1">Rp</span>
          <input 
            type="text" 
            value={amount === 0 ? '' : new Intl.NumberFormat('id-ID').format(amount)}
            onChange={handleAmountChange}
            placeholder="0"
            className="text-4xl font-extrabold text-[#3E2723] bg-transparent outline-none max-w-[200px] cursor-text placeholder-[#A89F95] caret-[#E48729]"
            style={{ width: `${Math.max(1, (amount === 0 ? '' : new Intl.NumberFormat('id-ID').format(amount)).length) * 22}px` }}
          />
        </div>
        
        <div className="flex justify-center gap-2 mb-3">
          {[
            { label: '+10rb', val: 10000 }, 
            { label: '+20rb', val: 20000 }, 
            { label: '+50rb', val: 50000 }, 
            { label: '+100rb', val: 100000 }
          ].map(btn => (
            <button 
              key={btn.label} 
              onClick={() => setAmount(amount + btn.val)}
              className="bg-[#F8EFE6] text-[#3E2723] font-bold text-xs px-3 py-1.5 rounded-full border border-[#F3E5D8] hover:bg-[#F3E5D8] transition-colors"
            >
              {btn.label}
            </button>
          ))}
        </div>
        <button 
          onClick={() => setAmount(0)}
          className="bg-[#F3E5D8] text-[#8B5E34] font-bold text-xs px-4 py-1.5 rounded-full flex items-center gap-1 mx-auto hover:bg-[#E8D5C4] transition-colors"
        >
          <CheckCircle size={12} /> Pas
        </button>
      </div>

      {/* Dampak */}
      <div className={`w-full ${42500 - amount < 0 ? 'bg-[#FDEAEA] border-[#F5C2C2]' : 'bg-[#FDE47F] border-[#F4D35E]'} rounded-2xl p-4 flex gap-3 mb-6 shadow-sm`}>
        <div className={`w-8 h-8 rounded-full ${42500 - amount < 0 ? 'bg-[#F5C2C2] text-[#D93E27]' : 'bg-[#E6A23C] text-[#3E2723]'} flex items-center justify-center flex-shrink-0`}>
          <Smile size={18} />
        </div>
        <div>
          <div className="flex justify-between items-center mb-1">
            <h4 className={`text-[10px] font-bold ${42500 - amount < 0 ? 'text-[#D93E27]' : 'text-[#6D4C41]'}`}>DAMPAK REAL-TIME JATAH HARIAN</h4>
            <span className={`text-[10px] font-bold ${42500 - amount < 0 ? 'text-[#D93E27]' : 'text-[#8B5E34]'}`}>Sisa Hari Ini</span>
          </div>
          <p className={`text-xs ${42500 - amount < 0 ? 'text-[#D93E27]' : 'text-[#5D4037]'} leading-tight`}>
            Sisa jatahmu menjadi <span className={`font-bold ${42500 - amount < 0 ? 'text-[#D93E27]' : 'text-[#8B5E34]'}`}>Rp{new Intl.NumberFormat('id-ID').format(42500 - amount)}</span>. {42500 - amount < 0 ? 'Waduh, overbudget nih! Kurangi jajan besok ya!' : 'Masih aman buat makan malam sederhana di burjo!'}
          </p>
        </div>
      </div>

      {/* Kategori */}
      <div className="w-full bg-white border border-[#F3E5D8] rounded-3xl p-5 mb-6 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-[#3E2723] text-sm">Kategori Pengeluaran</h3>
          <span className="text-xs font-bold text-[#A0522D] cursor-pointer hover:underline">Kelola Kategori</span>
        </div>
        <div className="grid grid-cols-4 gap-3">
          {[
            { id: 'Warteg', icon: <Utensils size={20} />, bg: 'bg-[#FBEFDF]', text: 'text-[#D97A27]', activeBorder: 'border-[#E48729]', activeBg: 'bg-[#E48729]' },
            { id: 'Kos & Air', icon: <Home size={20} />, bg: 'bg-[#FBEFDF]', text: 'text-[#D97A27]', activeBorder: 'border-[#D97A27]', activeBg: 'bg-[#D97A27]' },
            { id: 'Ojol/Bensin', icon: <Bike size={20} />, bg: 'bg-[#E6F5F4]', text: 'text-[#2CA9A1]', activeBorder: 'border-[#2CA9A1]', activeBg: 'bg-[#2CA9A1]' },
            { id: 'Paket Data', icon: <Wifi size={20} />, bg: 'bg-[#F2F1FA]', text: 'text-[#8675DF]', activeBorder: 'border-[#8675DF]', activeBg: 'bg-[#8675DF]' },
            { id: 'Fotokopi', icon: <BookOpen size={20} />, bg: 'bg-[#E6F7E9]', text: 'text-[#27AE60]', activeBorder: 'border-[#27AE60]', activeBg: 'bg-[#27AE60]' },
            { id: 'Ngopi', icon: <Coffee size={20} />, bg: 'bg-[#F8EFE6]', text: 'text-[#8B5E34]', activeBorder: 'border-[#8B5E34]', activeBg: 'bg-[#8B5E34]' },
            { id: 'Sabun Kos', icon: <ShoppingBag size={20} />, bg: 'bg-[#FDF4E3]', text: 'text-[#D4A017]', activeBorder: 'border-[#D4A017]', activeBg: 'bg-[#D4A017]' },
            { id: 'Obat', icon: <Pill size={20} />, bg: 'bg-[#FDEAEA]', text: 'text-[#D93E27]', activeBorder: 'border-[#D93E27]', activeBg: 'bg-[#D93E27]' },
          ].map(cat => {
            const isActive = category === cat.id;
            return (
              <div 
                key={cat.id} 
                onClick={() => setCategory(cat.id)}
                className={`flex flex-col items-center gap-1 cursor-pointer transition-all ${isActive ? '' : 'opacity-70 hover:opacity-100'}`}
              >
                {isActive ? (
                  <div className={`w-14 h-14 bg-white border-2 ${cat.activeBorder} rounded-2xl flex items-center justify-center shadow-sm relative transition-all`}>
                    <div className={`w-11 h-11 ${cat.activeBg} rounded-xl flex items-center justify-center text-white`}>
                      {cat.icon}
                    </div>
                  </div>
                ) : (
                  <div className={`w-14 h-14 ${cat.bg} rounded-2xl flex items-center justify-center ${cat.text} transition-all`}>
                    {cat.icon}
                  </div>
                )}
                <span className={`text-[10px] font-bold ${isActive ? 'text-[#3E2723]' : 'text-[#5D4037]'}`}>{cat.id}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Form Tambahan */}
      <div className="w-full bg-white border border-[#F3E5D8] rounded-3xl p-5 mb-6 shadow-sm">
        <div className="mb-4">
          <label className="block text-xs font-bold text-[#3E2723] mb-2">Catatan Tambahan</label>
          <div className="bg-[#F8EFE6] rounded-xl p-3 flex items-center gap-2 border border-[#E8D5C4]">
            <FileText size={16} className="text-[#8B5E34]" />
            <input 
              type="text" 
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="bg-transparent border-none outline-none w-full text-xs font-medium text-[#5D4037]" 
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-xs font-bold text-[#3E2723] mb-2">Sumber Dana</label>
          <div className="flex gap-2">
            {[
              { id: 'Tunai Kos', icon: Wallet },
              { id: 'Bank BCA', icon: Building2 },
              { id: 'GoPay/QRIS', icon: QrCode }
            ].map(src => {
              const isActive = source === src.id;
              return (
                <button 
                  key={src.id}
                  onClick={() => setSource(src.id)}
                  className={`flex-1 rounded-xl py-2 flex items-center justify-center gap-1 text-[10px] font-bold transition-all ${
                    isActive 
                      ? 'bg-white border-2 border-[#E48729] text-[#3E2723]' 
                      : 'bg-[#F8EFE6] border border-[#E8D5C4] text-[#5D4037]'
                  }`}
                >
                  <src.icon size={12} className={isActive ? 'text-[#E48729]' : 'text-[#5D4037]'} /> {src.id}
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-[#3E2723] mb-2">Waktu Transaksi</label>
          <div className="bg-[#F8EFE6] rounded-xl p-3 flex justify-between items-center border border-[#E8D5C4]">
            <div className="flex items-center gap-2 text-xs font-medium text-[#3E2723]">
              <Calendar size={16} className="text-[#8B5E34]" /> Hari ini, 19:30 WIB
            </div>
            <span className="text-[10px] font-bold text-[#A0522D]">Ubah</span>
          </div>
        </div>
      </div>

      <button className="w-full bg-gradient-to-r from-[#E68A33] to-[#C96914] text-white font-bold py-4 rounded-2xl flex justify-center items-center gap-2 mb-2 shadow-[0_8px_20px_rgba(214,113,25,0.25)] hover:opacity-90">
        <CheckCircle size={18} /> Simpan Transaksi
      </button>
      <p className="text-[10px] text-[#A89F95] text-center mb-8">
        Otomatis memperbarui jatah survival kamu bulan ini
      </p>

    </div>
  );
}
