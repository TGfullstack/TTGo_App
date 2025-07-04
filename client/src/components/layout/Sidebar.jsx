'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useAuth } from '@/contexts/AuthContext';
import LogoutButton from '../auth/LogoutButton';
import {
  CheckCircleIcon,
  CheckSquareIcon,
  FolderIcon,
  HomeIcon,
} from '../icons';
import CreateTaskButton from '../tasks/CreateTaskButton';
const navItems = [
  {
    label: 'Dashboard',
    href: '/dashboard',
    icon: HomeIcon,
  },
  {
    label: 'Projects',
    href: '/projects',
    icon: FolderIcon,
  },
  {
    label: 'Tasks',
    href: '/tasks',
    icon: CheckSquareIcon,
  },
  {
    label: 'Todos',
    href: '/todos',
    icon: CheckCircleIcon,
  },
];
export const Sidebar = () => {
  const pathname = usePathname();
  const { user, isLoggedIn } = useAuth();
  return (
    <aside className="hidden md:flex min-h-screen w-64 border-r px-4 py-6 flex-col sticky top-0">
      <div className="bg-gray-300 mb-4 w-full p-x-0">
        <h2 className="text-xl font-bold mb-2">Taylor'D To Go</h2>
      </div>
      <nav className="space-y-2">
        <CreateTaskButton />
        {navItems.map(({ label, href, icon: Icon }) => (
          <Link
            key={label}
            href={href}
            className={`flex items-center px-3 py-2 rounded-lg transition-colors ${
              pathname.startsWith(href)
                ? 'bg-primary text-white'
                : 'hover:bg-gray-200 text-gray-700'
            }`}
          >
            <Icon className="w-5 h-5 mr-3" />
            {label}
          </Link>
        ))}
      </nav>

      {isLoggedIn && (
        <div>
          <p>Logged in as</p>
          <p>{user?.primary_email || user?._id}</p>
          <LogoutButton />
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
