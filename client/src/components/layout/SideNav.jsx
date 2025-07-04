'use client';

import useAuth from '@/hooks/useAuth';
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
} from '@heroui/drawer';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CheckSquareIcon, FolderIcon, HomeIcon } from '../icons';
import CreateTaskButton from '../tasks/CreateTaskButton';
FolderIcon;
const links = [
  { href: '/dashboard', label: 'Dashboard', icon: HomeIcon },
  { href: '/tasks', label: 'Tasks', icon: CheckSquareIcon },
  { href: '/projects', label: 'Projects', icon: FolderIcon },
  { href: '/todos', label: 'Todos', icon: FolderIcon },
];

export default function SideNav({ isOpen, onClose }) {
  const pathname = usePathname();
  const { user, isLoggedIn } = useAuth();
  return (
    <>
      {/* Mobile Drawer */}
      <Drawer isOpen={isOpen} onClose={onClose} placement="left">
        <DrawerContent className="w-64">
          <DrawerHeader className="text-lg font-semibold border-b">
            Menu
          </DrawerHeader>
          <DrawerBody className="flex flex-col gap-3 pt-4">
            {links.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                onClick={onClose}
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition"
              >
                <Icon className="w-5 h-5 mr-3" />
                {label}
              </Link>
            ))}
          </DrawerBody>
          <DrawerFooter className="text-xs text-gray-400 border-t">
            Taylor’D To Go © 2025
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      {/* Desktop Static Sidebar */}
      <aside className="hidden md:flex max-h-screen w-64 border-r px-4 py-6 flex-col sticky top-0">
        <div className="bg-gray-300 mb-4 w-full p-x-0">
          <h2 className="text-xl font-bold mb-2">Taylor'D To Go</h2>
        </div>
        <nav className="space-y-2">
          <CreateTaskButton />
          {links.map(({ label, href, icon: Icon }) => (
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
        <div className="mt-auto text-xs text-gray-400 border-t pt-4">
          Taylor’D To Go © 2025
        </div>
      </aside>
      {/* <aside className="hidden md:flex flex-col w-64 h-screen border-r sticky top-0 bg-white p-4">
        <h1 className="font-bold text-xl mb-6">Taylor’D</h1>
        <nav className="flex flex-col gap-2">
          {links.map(({ href, label, icon }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition"
            >
              {icon}
              {label}
            </Link>
          ))}
        </nav>
        <div className="mt-auto text-xs text-gray-400 border-t pt-4">
          Taylor’D To Go © 2025
        </div>
      </aside> */}
    </>
  );
}
