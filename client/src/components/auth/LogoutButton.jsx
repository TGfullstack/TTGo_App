'use client';
// import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@heroui/button';
import { useRouter } from 'next/navigation';

export default function LogoutButton() {
  // const {logout} = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    // 1. Remove token
    localStorage.removeItem('token');
    // logout();

    // 2. Redirect to login
    router.push('/login');
  };

  return (
    <Button
      isExternal
      className="text-sm font-normal text-default-600 bg-default-100"
      onPress={handleLogout}
      variant="flat"
    >
      Logout
    </Button>
  );
}
