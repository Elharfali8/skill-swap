"use client";

import * as React from "react";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";

type Meeting = {
  time: string;
  title: string;
  with: string;
};

export function MainCalendar() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  const today = format(new Date(), "yyyy-MM-dd");

  const meetingsData: { [date: string]: Meeting[] } = {
    [today]: [
      { time: "9:00 AM", title: "Standup Meeting", with: "Team" },
      { time: "2:00 PM", title: "Frontend Review", with: "Sarah" }
    ],
    "2024-07-30": [
      { time: "9:00 AM", title: "SEO Training", with: "Ali" }
    ]
  };

  const formatted = date ? format(date, "yyyy-MM-dd") : null;
  const events = formatted ? meetingsData[formatted] || [] : [];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="lg:col-span-1">
        <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow-sm "
        captionLayout="dropdown"
      />
      </div>

      <div className="lg:col-span-3">
        <h3 className="text-lg font-semibold">
          {date ? `Meetings for ${format(date, "MMMM d, yyyy")}` : "Pick a date"}
        </h3>

        {events.length > 0 ? (
          <ul className="mt-4 space-y-4">
            {events.map((event, index) => (
              <li
                key={index}
                className="border p-4 rounded-md shadow-sm bg-slate-50"
              >
                <div className="font-semibold text-slate-800">{event.title}</div>
                <div className="text-sm text-slate-600">
                  {event.time} with {event.with}
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-4 text-slate-500">No meetings scheduled.</p>
        )}
      </div>
    </div>
  );
}
