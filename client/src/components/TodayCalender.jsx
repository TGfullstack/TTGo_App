'use client';

import { Calendar } from '@heroui/react';

export default function TodayCalendar() {
  let defaultDate = new Date().getDay().toLocaleString();
  console.log({ defaultDate });
  return (
    <div className="">
      <Calendar aria-label="Controlled" visibleMonths={6} className="w-full" />
    </div>
  );
}
