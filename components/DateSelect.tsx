"use client";

import { formatDate } from "@/lib/constants";
import { Select, SelectItem } from "@heroui/react";
import { useMemo } from "react";

interface DateSelectProps {
  date: Date; // currently selected date
  setDate: (newDate: Date) => void; // external setter
}

export default function DateSelect({ date, setDate }: DateSelectProps) {
  // format date as MM/DD/YYYY

  // Generate 8 sequential days (today + next 7)
  const dates = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => {
      const d = new Date();
      d.setDate(new Date().getDate() + i);
      return d;
    });
  }, []);

  // handle select change
  const handleChange = (keys: any) => {
    const selected = Array.from(keys)[0];
    const newDate = new Date(String(selected));
    setDate(newDate);
  };

  return (
    <div className="flex justify-center p-5">
      <Select
        variant="bordered"
        label="Select a date"
        classNames={{
          label: "group-data-[filled=true]:text-fuchsia-400",
          trigger:
            "data-[open=true]:border-fuchsia-500 data-[hover=true]:border-fuchsia-300 border-fuchsia-500 text-fuchsia-700",
          value: "group-data-[has-value=true]:text-fuchsia-700",
          popoverContent: "bg-fuchsia-300",
          listbox:
            "data-[hover=true]:text-orange-500  data-[selectable=true]:focus:bg-fuchsia-900 data-[selectable=true]:focus:text-fuchsia-700",
        }}
        className="max-w-xs border-blue-500"
        selectedKeys={[date.toDateString()]} // default selection
        onSelectionChange={handleChange}
        disallowEmptySelection
      >
        {dates.map((d) => {
          const formatted = formatDate(d);
          return (
            <SelectItem key={d.toDateString()} value={d.toISOString()}>
              {formatted}
            </SelectItem>
          );
        })}
      </Select>
    </div>
  );
}
