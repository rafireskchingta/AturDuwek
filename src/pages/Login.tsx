import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, AtSign, Lock, Eye, ArrowRight } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/app/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center">
      <div className="w-full max-w-[428px] bg-[#FAF6F0] min-h-screen relative flex flex-col pt-10 pb-8 items-center overflow-y-auto scrollbar-hide animate-fade-in">
        
        {/* Back Button */}
        <div className="w-full px-6 mb-6">
          <Link to="/" className="inline-flex items-center gap-1 bg-gradient-to-r from-[#E48729] to-[#C96914] text-[#4A2E15] font-semibold text-xs px-4 py-2 rounded-full shadow-sm hover:opacity-90 transition-opacity">
            <ArrowLeft size={14} className="text-[#4A2E15]" /> <span className="text-[#4A2E15]">Kembali</span>
          </Link>
        </div>

        {/* Header & Logo */}
        <div className="flex flex-col items-center mb-8 px-6">
          <div className="w-[88px] h-[88px] bg-[#FAF6F0] rounded-3xl border-2 border-[#E8D5C4] p-1.5 flex items-center justify-center mb-6 shadow-sm">
            <img src="/logo.png" alt="AturDuwek Logo" className="w-full h-full object-contain rounded-2xl bg-white border border-[#F3E5D8]" />
          </div>
          <h2 className="text-3xl font-extrabold text-center text-[#2C2A29] leading-tight mb-3">
            Selamat Datang di <br /> AturDuwek
          </h2>
          <p className="text-center text-[#5D4037] text-sm">
            Biar uang bulanan nggak cuma <br /> numpang lewat
          </p>
        </div>

        {/* Form Container */}
        <div className="w-[calc(100%-3rem)] bg-white rounded-[32px] p-6 shadow-sm border border-[#F0E6DD] flex-1">
          {/* Tabs */}
          <div className="bg-[#F8EFE6] p-1.5 rounded-2xl flex mb-6 border border-[#E8D5C4]">
            <Link to="/login" className="flex-1 text-center py-3 bg-white rounded-xl shadow-sm font-bold text-[#8B5E34] text-sm">
              Masuk
            </Link>
            <Link to="/register" className="flex-1 text-center py-3 font-semibold text-[#8B5E34] text-sm">
              Daftar Baru
            </Link>
          </div>

          <form onSubmit={handleLogin} className="flex flex-col gap-5">
            <div>
              <label className="block text-xs font-bold text-[#2C2A29] mb-2">Email</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <AtSign size={16} className="text-[#A89F95]" />
                </div>
                <input 
                  type="email" 
                  defaultValue="duo_gondang@gmail.com"
                  className="w-full pl-11 pr-4 py-3.5 bg-[#FAF6F0] border border-[#E8D5C4] rounded-2xl text-sm font-medium focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-[#5D4037]"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-xs font-bold text-[#2C2A29]">Kata Sandi</label>
                <Link to="#" className="text-xs font-bold text-[#A0522D]">Lupa Password?</Link>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock size={16} className="text-[#A89F95]" />
                </div>
                <input 
                  type="password" 
                  defaultValue="password123"
                  className="w-full pl-11 pr-11 py-3.5 bg-[#FAF6F0] border border-[#E8D5C4] rounded-2xl text-sm font-medium tracking-widest focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-[#5D4037]"
                />
                <button type="button" className="absolute inset-y-0 right-0 pr-4 flex items-center">
                  <Eye size={18} className="text-[#3E2723]" />
                </button>
              </div>
            </div>

            <button type="submit" className="w-full bg-gradient-to-r from-[#E48729] to-[#C96914] text-white font-bold py-4 rounded-2xl flex justify-center items-center gap-2 mt-2 shadow-[0_8px_20px_rgba(214,113,25,0.25)] hover:opacity-90 transition-opacity">
              Masuk ke AturDuwek <ArrowRight size={18} />
            </button>

            <div className="flex items-center my-1 relative">
              <div className="flex-1 border-t border-[#E8D5C4]"></div>
              <span className="px-4 text-[10px] text-[#A89F95] font-medium bg-white z-10">atau masuk dengan</span>
              <div className="flex-1 border-t border-[#E8D5C4]"></div>
            </div>

            <button type="button" className="w-full bg-white border border-[#E8D5C4] text-[#2C2A29] font-bold py-3.5 rounded-2xl flex justify-center items-center gap-3 transition-colors shadow-sm">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Lanjutkan dengan Akun Google
            </button>
            
            <div className="flex items-start gap-2 mt-2">
              <Lock size={14} className="text-[#6D4C41] flex-shrink-0 mt-0.5 fill-[#6D4C41]" />
              <p className="text-[10px] text-[#5D4037] leading-tight">Data keuanganmu tersimpan privat & terenkripsi lokal</p>
            </div>
          </form>
        </div>

        <p className="text-center text-sm text-[#5D4037] mt-8 mb-4">
          Belum punya akun? <Link to="/register" className="font-bold text-[#A0522D]">Segera daftarkan Duwek-mu!</Link>
        </p>

      </div>
    </div>
  );
}
