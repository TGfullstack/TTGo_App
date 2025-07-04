import TodayCalendar from '@/components/TodayCalender';
import TodayTable from '@/components/TodayTable';
import { Suspense } from 'react';

export default async function TodayPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <TodayCalendar />
        <TodayTable />
      </div>
    </Suspense>
  );
}
