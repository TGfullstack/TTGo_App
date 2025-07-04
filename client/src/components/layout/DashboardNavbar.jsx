'use client';
import useAuth from '@/hooks/useAuth';
import { Link } from '@heroui/link';
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@heroui/navbar';
import LogoutButton from '../auth/LogoutButton';

export default function DashboardNavbar() {
  const { user, isLoggedIn } = useAuth();

  return (
    <HeroUINavbar isBordered>
      <NavbarBrand>
        <p className="font-bold text-inherit">Taylor'D To Go</p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarItem>
          <Link href="/dashboard">Dashboard</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/projects">Projects</Link>
        </NavbarItem>

        {isLoggedIn ? (
          <>
            <NavbarItem className="text-sm text-gray-500">
              Welcome, {user?.id}
            </NavbarItem>
            <NavbarItem>
              <LogoutButton />
            </NavbarItem>
          </>
        ) : (
          <>
            <NavbarItem>
              <Link href="/login">Login</Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="/register">Register</Link>
            </NavbarItem>
          </>
        )}
      </NavbarContent>

      <NavbarMenuToggle />
      <NavbarMenu>
        <NavbarMenuItem>
          <Link href="/dashboard">Dashboard</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="/projects">Projects</Link>
        </NavbarMenuItem>
        {isLoggedIn ? (
          <>
            <NavbarMenuItem>
              <LogoutButton />
            </NavbarMenuItem>
          </>
        ) : (
          <>
            <NavbarMenuItem>
              <Link href="/login">Login</Link>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <Link href="/register">Register</Link>
            </NavbarMenuItem>
          </>
        )}
      </NavbarMenu>
    </HeroUINavbar>
  );
}
