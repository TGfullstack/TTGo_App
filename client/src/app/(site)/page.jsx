import LogoComponent from '@/components/Logo';
import { Suspense } from 'react';

export default function Home() {
  return (
    <Suspense fallback={<div>...Loading</div>}>
      <div className="flex justify-center items-center h-screen overflow-hidden">
        <LogoComponent className="flex justify-center items-center mx-auto rounded-lg" />
      </div>
    </Suspense>
  );
}
