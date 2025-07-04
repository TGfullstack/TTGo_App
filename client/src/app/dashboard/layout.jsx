import { Navbar } from '@/components/layout/Navbar';
import Sidebar from '@/components/layout/Sidebar';
import { AuthProvider } from '@/contexts/AuthContext';
import '../globals.css';
import { Providers } from '../providers';
Navbar;
export default function DashboardLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>
        <Providers>
          <AuthProvider>
            <div className="flex min-h-screen bg-gray-100">
              <Sidebar />
              <Navbar />

              <main className="flex-1 p-4 overflow-y-auto">{children}</main>
            </div>
          </AuthProvider>
        </Providers>
      </body>
    </html>
  );
}
