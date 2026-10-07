import { Outlet, Link, useLocation } from 'react-router-dom';
import { Home, TrendingUp, Plus, FileText, User, Calendar, Wallet, BookOpen } from 'lucide-react';
import NotificationPopup from '../components/NotificationPopup';

export default function DashboardLayout() {
  const location = useLocation();

  const mainNavItems = [
    { path: '/app/dashboard', icon: Home, label: 'Beranda' },
    { path: '/app/transactions', icon: TrendingUp, label: 'Analisis' },
    { path: '/app/transactions', icon: Plus, label: 'Tambah', isFab: true },
    { path: '/app/history', icon: FileText, label: 'Riwayat' },
    { path: '/app/profile', icon: User, label: 'Profil' },
  ];

  // If path is one of the 3 sub-pages, show floating nav instead of main nav
  const isSubPage = ['/app/transactions', '/app/calendar', '/app/budget'].includes(location.pathname);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center">
      {/* Mobile App Container */}
      <div className="w-full max-w-[428px] bg-[#FAF6F0] h-screen shadow-xl relative flex flex-col overflow-hidden">
        
        {/* Main Content Area */}
        <main className={`flex-1 overflow-y-auto scrollbar-hide ${isSubPage ? 'pb-24' : 'pb-24'}`}>
          <div key={location.pathname} className="animate-fade-in min-h-full">
             <Outlet />
          </div>
        </main>

        {/* --- MAIN BOTTOM NAV --- */}
        {!isSubPage && (
          <nav className="absolute bottom-6 left-6 right-6 bg-[#F9EFE6] rounded-[32px] px-4 py-2 flex justify-between items-center shadow-[0_10px_40px_rgba(139,94,52,0.15)] border border-[#E8D5C4] z-50">
            {mainNavItems.map((item, idx) => {
              const isActive = location.pathname === item.path && item.label !== 'Tambah' && item.label !== 'Analisis';
              if (item.isFab) {
                return (
                  <div key={idx} className="relative -top-6">
                    <Link to={item.path} className="w-[60px] h-[60px] bg-[#FAF6F0] rounded-full flex items-center justify-center shadow-[0_8px_20px_rgba(0,0,0,0.1)] border border-[#E8D5C4] hover:opacity-90">
                       <Plus size={30} strokeWidth={2.5} className="text-black" />
                    </Link>
                  </div>
                );
              }
              return (
                <Link key={idx} to={item.path} className={`flex flex-col items-center gap-1 min-w-[50px] transition-colors duration-300 ${isActive ? 'text-[#8B5E34]' : 'text-[#5D4037]'}`}>
                  <item.icon size={24} strokeWidth={isActive ? 2.5 : 2} className={`transition-colors duration-300 ${isActive ? "fill-[#8B5E34] text-[#8B5E34]" : "text-[#5D4037]"}`} />
                  <span className={`text-[10px] font-bold transition-colors duration-300 ${isActive ? 'text-[#8B5E34]' : 'text-[#5D4037]'}`}>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        )}

        {/* --- FLOATING PILL NAV FOR SUB PAGES --- */}
        {isSubPage && (
          <div className="absolute bottom-6 left-6 right-6 bg-white border border-[#E8D5C4] rounded-[32px] shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-2 z-50">
            <div className="relative w-full flex justify-between items-center h-[56px]">
              <div 
                className="absolute top-0 bottom-0 w-1/3 transition-transform duration-300 ease-out flex justify-center pointer-events-none"
                style={{
                  transform: `translateX(${
                    location.pathname === '/app/calendar' ? '0%' : 
                    location.pathname === '/app/transactions' ? '100%' : 
                    location.pathname === '/app/budget' ? '200%' : '100%'
                  })`
                }}
              >
                <div className="w-[90px] h-full bg-[#F9EFE6] rounded-[24px] relative">
                  <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-[3px] h-[3px] bg-[#8B5E34] rounded-full transition-opacity duration-300"></div>
                </div>
              </div>

              <Link to="/app/calendar" className="flex-1 flex flex-col items-center justify-center z-10 h-full">
                <div className="flex flex-col items-center gap-1 pb-1">
                  <Calendar size={22} strokeWidth={location.pathname === '/app/calendar' ? 2.5 : 2} className={`transition-colors duration-300 ${location.pathname === '/app/calendar' ? "text-[#8B5E34]" : "text-[#5D4037]"}`} />
                  <span className={`text-[10px] font-bold transition-colors duration-300 ${location.pathname === '/app/calendar' ? "text-[#8B5E34]" : "text-[#5D4037]"}`}>Kalender</span>
                </div>
              </Link>
              
              <Link to="/app/transactions" className="flex-1 flex flex-col items-center justify-center z-10 h-full">
                <div className="flex flex-col items-center gap-1 pb-1">
                  <Wallet size={22} strokeWidth={location.pathname === '/app/transactions' ? 2.5 : 2} className={`transition-colors duration-300 ${location.pathname === '/app/transactions' ? "text-[#8B5E34]" : "text-[#5D4037]"}`} />
                  <span className={`text-[10px] font-bold transition-colors duration-300 ${location.pathname === '/app/transactions' ? "text-[#8B5E34]" : "text-[#5D4037]"}`}>Transaksi</span>
                </div>
              </Link>

              <Link to="/app/budget" className="flex-1 flex flex-col items-center justify-center z-10 h-full">
                <div className="flex flex-col items-center gap-1 pb-1">
                  <BookOpen size={22} strokeWidth={location.pathname === '/app/budget' ? 2.5 : 2} className={`transition-colors duration-300 ${location.pathname === '/app/budget' ? "text-[#8B5E34]" : "text-[#5D4037]"}`} />
                  <span className={`text-[10px] font-bold transition-colors duration-300 ${location.pathname === '/app/budget' ? "text-[#8B5E34]" : "text-[#5D4037]"}`}>Anggaran</span>
                </div>
              </Link>
            </div>
          </div>
        )}

        {/* Global Notifications Popup */}
        {location.search.includes('notifications=true') && (
          <NotificationPopup onClose={() => window.history.back()} />
        )}
      </div>
    </div>
  );
}
